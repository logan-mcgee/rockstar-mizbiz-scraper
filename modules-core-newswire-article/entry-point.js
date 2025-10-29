try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "614c2579-8d3c-429d-aa2b-e3d9453efdf0", e._sentryDebugIdIdentifier = "sentry-dbid-614c2579-8d3c-429d-aa2b-e3d9453efdf0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-gif-viewer", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {},
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, c, f, o, n, b = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            25136: e => {
              "use strict";
              e.exports = t
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            29441: e => {
              "use strict";
              e.exports = r
            },
            55974: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(5176), r.e(7545), r.e(6769), r.e(1302), r.e(4873), r.e(2389), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(2148), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(4804), r.e(76), r.e(7577)]).then((() => () => r(28674))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then((() => () => r(4984))),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(5176), r.e(7545), r.e(6769), r.e(1302), r.e(4873), r.e(2389), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(2148), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(4804), r.e(76), r.e(7577)]).then((() => () => r(76808)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
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
            },
            77027: (e, a, r) => {
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
            93032: (e, a, r) => {
              r(28419)
            }
          },
          s = {};

        function i(e) {
          var a = s[e];
          if (void 0 !== a) return a.exports;
          var r = s[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = b, i.c = s, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var c = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = d(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(t, c), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          68: "7e4ce04859528e93e2afb06c3e096638",
          131: "1db676f3ed8861fad17321aa489b17b4",
          173: "452059fd0d8f9a44ff202b04eea913f6",
          278: "6d10a2331f9104312c61d4527b1a3836",
          299: "1693687013948c84ec7111d82b489ae9",
          314: "900b3328844031992a9051f97f11ff44",
          439: "3aa990cd3971b369524e965254df7535",
          602: "b8439cbd04d8016a00b954cbbef82fc1",
          662: "b6d3e513f5cd7d963e697c2c446c0b5e",
          824: "113bcd7df748e7010f350af92650bfd5",
          884: "25bc99eef72048de19dc5ff898d145db",
          907: "650a19cae11a4a2290b14e4cfe03c3db",
          1054: "0da5e393cb2398292f61f497bc75c986",
          1057: "21100abdcb79e1523202b66d2840322f",
          1098: "974b88ebf6d3dde6cd1af10ab179c4a1",
          1242: "233badb12f56d709315dd46e9fe309cf",
          1302: "9b18a08de765b57b2711d608cc3a8e52",
          1758: "f80cf18595aeb71536e2d40e3c6f106d",
          1822: "232e7ece24771b9b40e7f6547881013f",
          1858: "55283433638a0aa3c58865dbb016c832",
          1868: "2418cded47c3619f758fd0d2720cb2fe",
          1967: "7e3056c5cde4ecbc420ac7fb7b4dfb58",
          2148: "0e7a97e9f551efc6bbaae3f4b4f5637d",
          2156: "0904b283de9ff159c122b8ceed573604",
          2169: "df42fe4aace3231c83e845e346092a31",
          2171: "4277cd9e4a1ef5eaa0a3fd405681e413",
          2221: "b879933ac093a2fb67d2eb3162d68cf8",
          2234: "f10117a8af139a4bb5f4801db22fcaaf",
          2243: "9cb59f0500e2f42c182e9eaa55c24f3c",
          2306: "4e47c5422fd565cb20e89e1e1d50555f",
          2347: "39c7412e5312935459b206531e8de474",
          2358: "d40a2de16ca404cf8ea836510afee188",
          2365: "ff8b2fb14a55088004ce30b6bd6ff704",
          2389: "42465308e80d55185ca14becc89489b3",
          2398: "b675e1ddc880b0b23e6e1fef85f08f79",
          2466: "47c887a7a226e81e1839dfd056a127fb",
          2642: "30163d0505848cee5870d5da7cd7a957",
          2678: "e5cc05da1eef18be5e36ca20f54911a5",
          2864: "3bf62e2162b138cc1a9296ec71b8501e",
          3034: "f1e2f1b79e8c5104491fcba825468e45",
          3197: "ab204e6e1541bc510f8e5de24491f47f",
          3318: "1f46cb4d812e5a145b327f844b61a401",
          3343: "c23d2a85ceeb2027f3c5e5fa5262bbbb",
          3370: "a5f54e319578ef9853967afda7a2552c",
          3387: "5f7ccde31c48fd904d65400c7a4dda87",
          3410: "8a9893f6bc25243364dfce113287da70",
          3421: "6217a776c97605092d005843718d5b6d",
          3438: "b5b169f64480a95855ad3c0689dc7e31",
          3475: "49aa2702951703e9fe8548095413d13b",
          3486: "c0ca93799ecf753a42fc7bca4b8862d9",
          3697: "71aa96ce4fd4b5691904f8c8c6890061",
          3885: "92031dff9a242654b7bab9375ba4f31d",
          3896: "f33f4f148a706f4a2214c698f3fa6e83",
          3941: "3402a161a8f2e410b67446c52565eee6",
          4011: "deb343d6739fa1c5c246b821f5eb018c",
          4237: "39de0251f23328797ed3669e22ab9dba",
          4488: "4f40b3b0283c7f30c3bcbb197159ea22",
          4528: "08916fc488c70f1d842cbe83b04a1fec",
          4550: "e7a0dd1787b6f87e1b130902f30c47f1",
          4578: "75bc359b41e547320a8ad11bafcfaa68",
          4621: "e799f81a2854995cf2c6bc6c80e1fe90",
          4700: "81ccd7eb9e36b6364ad4523cc2a48d40",
          4710: "9d72717d2c100e519db79ec0a2d1308f",
          4731: "9bfa4dee7513102c2c4a16c44ef4235a",
          4799: "2ec9c78270ea9fec8aa89a375b06fc27",
          4804: "fd6cfa9deb72b5b50745c5c99c332174",
          4851: "e3775e1fa7e972595a0d86a8c11dd727",
          4861: "e99f5c138946e16d0de668d0fddd1ff1",
          4873: "aa814f1e32f09453e0ba76daecd78089",
          4913: "1ee64140da4f51bc904d01cacdbc7786",
          5018: "d757bf67321ea4b57219d90aa76d947c",
          5076: "be796bd72f5629d048c1dc7866ea612f",
          5117: "4208f3bfefdf798451e9a5d1a4e71f42",
          5176: "c469394bd45bcd383aa79da45213d9c0",
          5233: "c47574cf7dec0ba8a49edc48f6f14c4a",
          5259: "6d59efb58f5861bbb3cfeba3c6960b19",
          5265: "1c9d934c20df44a76db82fb6e7ee5f43",
          5389: "89b9df46637257455b689f8cd75165b0",
          5400: "0d6489053d2b14b11c3a86b82752ab03",
          5415: "da0f821a2c1a8dc50c5f13fc87c929cd",
          5454: "f1a0951568195342eb2238a6f5338c54",
          5488: "df66adb1227418dbcbfac63b83667b50",
          5530: "626e0750f0979580fd73a1daa991e2cf",
          5639: "ce25ca11be3bb5b26bfa1db9fb8df78b",
          5663: "1ee57caa83ce10c56f792920db626092",
          5742: "ad9ea4e554f66ab6ad21c09acc434e2c",
          5802: "692594ce9d2e70ceea8befc08d7e66e6",
          5830: "463b19501ff50703d666f9585fb3bace",
          5832: "2d13fe4be119decfa1591d4786a19868",
          5859: "b5a9b9d61dae4b0084496c1c2277c8dc",
          6130: "2b7263c196b566a4af16d6e91aae3eec",
          6267: "c04e3c181251e73eae010fdebe5ac59f",
          6280: "59b3dd21b0df9d7ea6c8944b5bcbb893",
          6285: "e275830003c2caef5e066585622ab8d9",
          6321: "7c1575dcb1bec91ebc9d79a4cc2f595c",
          6327: "2d3b4cb05993f2f3bd2894f559e3bd88",
          6361: "26df45b6ee0f6d9d89316830ff6246a4",
          6471: "eea2c0a3ec8a1c6040fa758807e396ea",
          6664: "fe19ffbc5f7d59b56af8c900d896f3a0",
          6769: "5c360c4e4817cdbcf3311a11a2dc3f85",
          6879: "45148e85e30d1b0eb4ad68f5ac774a71",
          6891: "e0bfcd83e4a9ab6e32bc92739187fc07",
          6997: "c2c2af7dd3c55274236f75a8cd8b3aef",
          7010: "225fc9db4d086eb493c17ed4df0fd7df",
          7073: "fd1b5f072a412d49bb1f5678a66a3bc8",
          7407: "839e8fe7df336086902823c59213e8e0",
          7436: "a834e3180eabd9c65992ae8bc454f0c9",
          7452: "d9636df22742c02b9f5b38070896efa6",
          7453: "aff42014b62cbae9006480e27cc665ef",
          7545: "adf82465d3ee37100994bc269ecc5915",
          7577: "41e0c11f89c96d633b5c45bcbda7970c",
          7785: "8e44f9b83dfad131577d489c1e1a95c0",
          7970: "6265c5bc4f930de3418024425b546729",
          8068: "dcb4d7c71e4d993d64e9198169731a83",
          8240: "a55c82a965239e9382d5dfead8b2dce2",
          8272: "88a8bbc5b5929e79d8e917547d0e9ecd",
          8325: "c03d747b5a188b0f3770c911dc09a66c",
          8391: "799e8b6cceb0bee0f8f1fdcb4b68c141",
          8431: "98ab0bf943064c723cee85c050d4709a",
          8503: "699181582f924acc3d0cb231a73c58db",
          8659: "37706bdf3522122066d66791c638636e",
          8661: "cf650eed3918c118999253a0c81e7e2a",
          8702: "60aaada940ba7d18570e7dc3246c6cab",
          8708: "aac69bf0fc5dac8bba1352ab250cc36b",
          8755: "e7c5d9bff91598f97e55ca5d28dbf54e",
          8845: "fb91246eabffb4441dc1ef319603d3d1",
          8880: "b676ebc9883427818bd30abbb175dce1",
          8938: "10f5a8c2f7785506fd3d21d8db4858fb",
          8970: "f7cd9d5312a5185a63b707edb62c09cc",
          9022: "309534ed21380d6ce5485237b1fb5779",
          9028: "9b3519170782e5b40457510fee981773",
          9126: "67ad3cac1838760bcefb988a7b55d944",
          9377: "dca4e1cfeffa1627e6b01a76880e2125",
          9407: "5c414acc91aaae90e2c391092a7b862b",
          9477: "36a845d2c313b373a3173b284cb3de5e",
          9587: "a4762df637edcc9d70bfe406a9721635",
          9615: "cc9015547d8049e442c09e10eb070e11",
          9760: "0c2cc69cbf12b216d9ec2c2140d436c3",
          9936: "688d753eec0404502d01d3a348c3a36d",
          9990: "7a46550de4a4873b9e19052ec8ac2404"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "384cddac2173849afd90c4a73e287f5e",
          2358: "e79a4105235290f9d2d864ea28c87921",
          2389: "cafc86906239d62ab739b07a7b7dd87d",
          3318: "742693da22ad7a392de104bbd4a4bce1",
          3438: "384cddac2173849afd90c4a73e287f5e",
          4804: "af3247b64b139b8a366ea805c8a1eb65",
          4883: "e345407a8ae77135cb5f6b56cec264b8",
          6069: "6a345130a21d6aba1c7f8052c5eb72c4",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          6740: "f9c77f0c92c32584fcabab2f8a06d7de",
          7577: "1a12cfd58c416d40708ecf48eaa5c16c",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8579: "2185f6eb10d4c7769c05f1a343298050"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), c = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
          if (c[e]) c[e].push(a);
          else {
            var d, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  d = s;
                  break
                }
              }
            d || (o = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", f + r), d.src = e), c[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var t = c[e];
                if (delete c[e], d.parentNode && d.parentNode.removeChild(d), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), o && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), o = {
          2358: [64064],
          3410: [11438, 17523, 44019, 83166],
          6536: [31879]
        }, n = {
          11438: ["default", "./tinaBlockTemplates", 29441],
          17523: ["default", "./tina", 25136],
          31879: ["default", "./index", 25136],
          44019: ["default", "./tinaBlockTemplates", 25136],
          64064: ["default", "./index", 29441],
          83166: ["default", "./tina", 29441]
        }, i.f.remotes = (e, a) => {
          i.o(o, e) && o[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then((e => o(e, f)), d);
                    if (!n) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, t[2], 0, 0, ((e, a, r) => e ? c(i.I, t[0], 0, e, f, r) : d()), 1)
            }
          }))
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
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                n = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = i(e);
                    if (!d) return;
                    var c = e => e && e.init && e.init(i.S[r], t);
                    if (d.then) return b.push(d.then(c, a));
                    var f = c(d);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (o("@foundry/react", "5.9.0", (() => Promise.all([i.e(602), i.e(5488), i.e(6769), i.e(1302), i.e(3318), i.e(2229), i.e(4853), i.e(4572), i.e(430), i.e(9407)]).then((() => () => i(43374))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then((() => () => i(12841))))), o("@rsgweb/modules-core-carousel", "0.0.0", (() => Promise.all([i.e(4488), i.e(7545), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then((() => () => i(89477))))), o("@rsgweb/modules-core-engagement", "0.0.0", (() => Promise.all([i.e(5488), i.e(4488), i.e(7545), i.e(6769), i.e(4873), i.e(2229), i.e(4853), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(2918), i.e(2440), i.e(1967), i.e(4804), i.e(6740)]).then((() => () => i(87579))))), o("@rsgweb/modules-core-group-of-items", "1.0.0", (() => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then((() => () => i(90884))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(2148), i.e(4550)]).then((() => () => i(32169))))), o("@rsgweb/tina", "0.0.0", (() => Promise.all([i.e(5117), i.e(2229), i.e(4853), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then((() => () => i(99747))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(2148), i.e(8702)]).then((() => () => i(58702))))), o("clsx", "2.1.1", (() => i.e(439).then((() => () => i(10439))))), o("dompurify", "2.5.8", (() => i.e(7785).then((() => () => i(27785))))), o("lodash", "4.17.21", (() => i.e(5076).then((() => () => i(15076))))), o("react-dom", "18.3.1", (() => Promise.all([i.e(1098), i.e(2229)]).then((() => () => i(71098))))), o("react-dom", "19.1.0", (() => Promise.all([i.e(2229), i.e(3421)]).then((() => () => i(83421))))), o("react-intersection-observer", "9.16.0", (() => Promise.all([i.e(2229), i.e(6327)]).then((() => () => i(76327))))), o("react-jsx-parser", "2.4.0", (() => Promise.all([i.e(3387), i.e(2229)]).then((() => () => i(43387))))), o("react-router-dom", "6.30.0", (() => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then((() => () => i(15389))))), o("react", "18.2.0", (() => i.e(8659).then((() => () => i(68659))))), o("react", "18.3.1", (() => i.e(8431).then((() => () => i(48431))))), o("text-balancer", "1.0.5", (() => i.e(5400).then((() => () => i(75400))))), n(25136), n(29441)), b.length ? e[r] = Promise.all(b).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : a(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(b = t[f]))[0])) return !n || ("u" == i ? o > d && !c : "" == i != c);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || s < i != c) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var h = a[f];
                l.push(1 == h ? u() | u() : 2 == h ? u() & u() : h ? r(h, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
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
              })(a, t) ? a : t), 0)) && f[t]
            },
            d = e => {
              throw new Error(e)
            },
            c = (e => function(a, r, t, d, c) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, d, c)) : e(a, i.S[a], r, t, d, c)
            })(((e, r, c, f, o, n) => {
              if (!((e, a) => e && i.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var b, s = t(r, c, o, f);
              return s ? ((b = s).loaded = 1, b.get()) : n ? n() : void d(((e, r, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(r, e, c, o, f))
            })),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8431).then((() => () => i(48431))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(1098).then((() => () => i(71098))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => i.e(5076).then((() => () => i(15076))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(5176), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(2148), i.e(6321)]).then((() => () => i(58702))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([i.e(9587), i.e(5859)]).then((() => () => i(12841))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([i.e(5389), i.e(4853)]).then((() => () => i(15389))))),
              4572: () => c("default", "clsx", !1, [1, 2, 1, 1], (() => i.e(439).then((() => () => i(10439))))),
              61913: () => c("default", "react", !1, [1, 18, 2, 0], (() => i.e(8659).then((() => () => i(68659))))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(2148), i.e(2169)]).then((() => () => i(32169))))),
              2973: () => c("default", "dompurify", !1, [1, 2, 4, 1], (() => i.e(7785).then((() => () => i(27785))))),
              92440: () => c("default", "@rsgweb/tina", !1, [1, "workspace:^"], (() => Promise.all([i.e(5117), i.e(4853), i.e(6188), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then((() => () => i(99747))))),
              327: () => c("default", "@foundry/react", !1, [4, 5, 9, 0], (() => Promise.all([i.e(602), i.e(5488), i.e(1302), i.e(3318), i.e(430)]).then((() => () => i(43374))))),
              61128: () => c("default", "react-intersection-observer", !1, [1, 9, 16, 0], (() => i.e(8708).then((() => () => i(76327))))),
              15310: () => c("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], (() => i.e(8503).then((() => () => i(90884))))),
              20206: () => c("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], (() => Promise.all([i.e(5488), i.e(1967), i.e(4883)]).then((() => () => i(87579))))),
              42602: () => c("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], (() => Promise.all([i.e(8579), i.e(1858)]).then((() => () => i(89477))))),
              57770: () => c("default", "react-jsx-parser", !1, [1, 2, 2, 2], (() => i.e(3387).then((() => () => i(43387))))),
              97384: () => c("default", "text-balancer", !1, [1, 1, 0, 5], (() => i.e(5400).then((() => () => i(75400))))),
              50430: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => i.e(5802).then((() => () => i(83421)))))
            },
            n = {
              430: [50430],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4572: [4572],
              4804: [327, 61128],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              6536: [2973],
              7577: [15310, 20206, 42602, 57770, 97384],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(n, e) && n[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              6947: 0
            };
            i.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                76: 1,
                884: 1,
                1057: 1,
                2358: 1,
                2389: 1,
                3318: 1,
                3438: 1,
                4804: 1,
                4883: 1,
                6069: 1,
                6536: 1,
                6740: 1,
                7577: 1,
                8503: 1,
                8579: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
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
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            6947: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(229|440|918)|4(30|572|853|883)|6(069|188|536|740)|1788|1913|5966|76|8579|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, o] = r,
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                o && o(i)
              }
              for (a && a(r); n < c.length; n++) d = c[n], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
}));