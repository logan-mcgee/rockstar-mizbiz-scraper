try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c017f9be-c1a7-41b3-a944-12d112d33e76", e._sentryDebugIdIdentifier = "sentry-dbid-c017f9be-c1a7-41b3-a944-12d112d33e76")
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
  var r = {},
    t = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach(function(a) {
        r[a] = e[a]
      })
    }, function(e) {
      Object.keys(e).forEach(function(a) {
        t[a] = e[a]
      })
    }],
    execute: function() {
      e((() => {
        var e, c, d, f, o, n, b = {
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
                  "./index": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(6769), r.e(1302), r.e(4873), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(5463), r.e(76), r.e(1125)]).then(() => () => r(28674)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(5117), r.e(8661), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(4572), r.e(6130), r.e(6069), r.e(6536), r.e(2358), r.e(3410)]).then(() => () => r(4984)),
                  "./types": () => Promise.all([r.e(602), r.e(4237), r.e(4488), r.e(5117), r.e(8505), r.e(5827), r.e(6769), r.e(1302), r.e(4873), r.e(9116), r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(1788), r.e(9623), r.e(4572), r.e(6088), r.e(6130), r.e(6069), r.e(1913), r.e(2918), r.e(6536), r.e(2440), r.e(2358), r.e(5463), r.e(76), r.e(1125)]).then(() => () => r(76808))
                },
                c = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      c = r.S[t];
                    if (c && c !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => c,
                init: () => d
              })
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, c = 0, d = t.length; c !== a && d >= 0;) "/" === t[--d] && c++;
                if (c !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + c + ") in the URL path " + e);
                var f = t.slice(0, d + 1);
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
        }, c = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          i.r(t);
          var d = {};
          e = e || [null, c({}), c([]), c(c)];
          for (var f = 2 & r && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = c(f)) Object.getOwnPropertyNames(f).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, i.d(t, d), t
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), [])), i.u = e => "js/" + {
          68: "54ef322bb6e160544f2b8e6a0c7062b2",
          131: "f00b4576e3e703d005b1a054bcf1bbba",
          173: "bf838f663a15a27c44083662e7712372",
          278: "2669000651132f03dde6d426d6bee4df",
          299: "695882e6982ecf02032e58507d41ace9",
          314: "cd9e698f625763d1d4db350e223996c6",
          439: "18c23f3fd8bb8849c45f462cf0e50532",
          602: "bceb13e306ddb03d118fc7fbdc393492",
          662: "a5d8f99fe50a60fcb96584efedd95769",
          824: "34693d293fc3bf4df7c1de54b19bd8d9",
          884: "e303a47ab304cab07a3be3f2e69b162c",
          907: "fde2c7397a3aa1ae2315fdbbfa500c84",
          1054: "62669cb1e33e2a6fa7ddafe95d511325",
          1057: "725518fb365f603cdcd84463e1d60f6b",
          1098: "db96f9d61c1179558da4924cd0590f98",
          1125: "da7ae8dd07ef64bd186c1f618b35ed5c",
          1242: "5dcfac3ebb81cff34145ba467de712ec",
          1302: "4629f9314ae512b325aad2450ee64127",
          1758: "5df9edd9e0f462318d0f5340f56cddf5",
          1822: "26c36062b0d78484426d592b9db429f5",
          1858: "00c6c11dfb5307aa6ba27824dd08de33",
          1868: "9d7ea94d5117eb54133796dcbd112402",
          2156: "302ce8572ddfa6673f7a494d76ddb65a",
          2169: "9ee75b3bbf9777ec906063815373c011",
          2171: "7e290be309bc73b9b65c54e9042d767f",
          2221: "32ddfa4b4350ba69f9a44ee38a3ff93c",
          2234: "e48a22369c310eedf5ea6e0f352252fb",
          2243: "76d5ba34e8c5a29c987928b83dca879b",
          2306: "f4f3bf91f6a99697f2c872a4878fb8b4",
          2347: "7b2eb9234c08c500ecea5d12361c48a3",
          2358: "fac0ea8bbcb88bfcfbf8a45ba578d150",
          2365: "ec31b52077fd57d01c78684af19d6fd7",
          2398: "cddc83a30f03266172f08db0048cf514",
          2466: "1edad32be9f33bbce2f8535b92130f38",
          2583: "b5e3d5cf2e2f2be3849809f1ab3b56f3",
          2642: "8d79fdf173288bda3954e420b444f202",
          2678: "f94f3fbd5be1490c231a76b81d8e16d4",
          2864: "544b191bcd226329ab88e6dbd3272ac5",
          3034: "3cdd481175dfe55ffb160d2fb665ee35",
          3197: "f526e1a96be47676c599b7b88c000745",
          3343: "9716074a6376715b54a925f780b82db3",
          3370: "4de31dd3ce899e0e2335d8e9fd013034",
          3387: "f05cc75209354319339aac05e694b636",
          3410: "4a3478029f1dce3c509a366c0a5f20ff",
          3438: "81a8f4dbfdf15b134e9e07d9fab5fbf8",
          3475: "bc793bc405e73a15f9556d19967aa097",
          3486: "8e4e75b85d93c03d398d6284ae8bcef2",
          3697: "0871cd6cbfab0a7d35c50933d38a46f3",
          3885: "8d15e0182dd51a8f8358b1f708e41828",
          3896: "813f7555ed29b3f2108c2576226bec39",
          3941: "9d1da09d2b7b049e71fa9ea205e58dac",
          4011: "53c9643aabc7872e49c112d298f19087",
          4237: "66976c3c28d2a8eff5d7575374be7bf3",
          4488: "20941a83e6188a2cb21ff72a140bf767",
          4528: "6b23fcc027bf60f9a56d8e3b93fbe6be",
          4550: "1e1dab915ad5fd808352fc4699774aac",
          4578: "ae0b28937b1c30cf2e8f3f889e26b5b2",
          4621: "9191108ef55bb37495dee4f59738c3e7",
          4700: "41016e6c93a610edd136676a5a84d831",
          4710: "f0f8dd00c5e1b129d236f92c6bbbe609",
          4731: "f68223406fde6699ec9b3aeaa053bd80",
          4799: "f6d112a2c56aafa175d0d8cd0d0dcdc7",
          4851: "ef19bee67f64027ece4828ab85e3da32",
          4861: "36d0cbf259f369b52d88286ff831a733",
          4873: "61daf33a1fbcda014a183cb44baa8023",
          4913: "a31d8ba3f6df20a725e86400a4294286",
          4964: "d6da1a0845a8f1f3eb4b1e6835cfb3d5",
          5018: "9fd27cc680fe853cd1a6c934f163c890",
          5076: "b081766aa336695aef226bd329ad8b50",
          5117: "335ae00635c561f606838c6cb3113164",
          5233: "c25bed3df17d4c948476d8f99de07f00",
          5259: "03980ec2808fe42e59db2cb5e0c5fdee",
          5265: "251d4f331a4f948538b126219af07989",
          5389: "1093b6f75fb7f2d8318292570c5bf388",
          5400: "aa985678fb4b72cf49e8b9f81e479e2d",
          5415: "c6b1e0e8e806022ec6e30e66c4545df6",
          5454: "71dab667dd0738be277365ee1543f092",
          5463: "37d283a74bcacaec9be13a990c00983d",
          5530: "1c3e6aba1f60bbd5698195ff268be2fc",
          5639: "65ff5e5ce3da3a216d196b08068d0ece",
          5663: "0d781de74e3c8d76c664a6e47a23c750",
          5742: "123efc6dfccd5fe389ac82f4412472c9",
          5827: "f5a8abdbfb25468f7802dae031a4acdb",
          5830: "1e4eb4b46606b918141c931f30bfe49e",
          5832: "209015f13b488ff98c9645af80c86e7a",
          5859: "fef56f3f13c746c5a0469ad8b6e7917d",
          6088: "01c8e16d5bd4cdc3b89ce88923ff1b39",
          6130: "c6a25d5bff106c4b33f1f76ea31ac18c",
          6267: "391cf2d58650f83e86b99830fa77878e",
          6280: "5a5cb21fc481dabb78e8b854d8de5a7d",
          6285: "95bfaf9c419c018ae76b949647ef8b2b",
          6321: "a66dc2b5dce499f15aeaa084d229149e",
          6327: "91daa389348052a1335acd5fe8ad804d",
          6361: "5f5d2de091a557ca3bd3df7d32ad0b57",
          6471: "35dc369bf3d648690d2fd1c6a6d341c4",
          6664: "ebae8d82aec4814c0208257d51eacccc",
          6769: "222148176bc33d74e589842a3d19409a",
          6879: "8e08e13fb4d95e31c917c1ef40c8e06a",
          6891: "ddf7ae7e62aa1e83be44be8b8b05f501",
          6997: "c97391b8f5f7a32a0a4c103712eb5ac6",
          7010: "1a8a98fd0549fa357f92485d55e0c551",
          7073: "c8964bc9487f0d24005f92807a45a7f9",
          7407: "7fdd42417326f82e013c30b9e2b2fd48",
          7436: "35993d3e2e74d5e449b21d2da361b4c1",
          7452: "957591878526b0147c7707e5e6f4a26f",
          7453: "091b72820aecd7566610a275aca1cd68",
          7678: "b9a2d32c0c602ee21c7811b40612c2c6",
          7785: "0d776b55507efa677587df6de0661af1",
          7970: "f07e767f482f9390ecac56513322fa51",
          8068: "a6983d61f2e014446007658af5040159",
          8240: "6ca4b39d9c511ccd7d3a69e2cba52cd2",
          8272: "b265fc58ad7f0514d34465282ec02907",
          8325: "926a926ca7637ececceb8ba49c7b508d",
          8391: "7b15b730a51d6101e693cb49e58d0501",
          8431: "8ca358ce93d1b60b3d67b858c4270e33",
          8503: "495a526b7fedee8cb1d2978762a03620",
          8505: "6f60a7d1629afe5fa1e738761a7aff94",
          8659: "e322153e74ef31197e36bac5f1c32ea4",
          8661: "31ab63a2028e8319a9fdca446580a157",
          8702: "d6c404d3d305451d1151bbee33e5bfd9",
          8708: "e410d85a9d08f305352a13029d070f44",
          8731: "91087012b09f05cd8ff954dce14ac30f",
          8755: "29516516213e18140a24a2d1cb6cb3d6",
          8845: "fa6f614881ace6698254a9694b25f5fa",
          8880: "f42562a4ad9dadd06a5897fd3ee45fb1",
          8938: "4650a2085b64033393dd7f083caff496",
          8970: "d38c95a2692ce365c67f8de88c939709",
          9022: "4678e62e583603586bb012440dd4801b",
          9028: "f0b131e8782d7796c205adbdb5b414f1",
          9116: "fb1df40fff37a3925dc474a1db62b93b",
          9126: "1235360aa079ba6f55973ad2ca6f15e7",
          9377: "cbb6b9560eedc592a11df60dca31d65b",
          9407: "bb5db3c43f5e7cd908ce605d90bb9a7c",
          9477: "569e1cb7f9b03801892fdf32aa8592ec",
          9587: "367509eb4dcd8633e450febe93a35e03",
          9615: "31954d922dc43387a7ac2c7ce7dd5f2a",
          9760: "5ff67941ffcb494110be7721c463e878",
          9842: "e5e736fac3cb54bb8174e3ac53a64c83",
          9936: "4d171ac7ef8f31b8b48d8dc9b912b0cb",
          9990: "bb76aeb58eeb32a3b204fab10456f746"
        } [e] + ".js", i.miniCssF = e => "css/" + {
          76: "537c3654e32745a846faf8bafb6e84bd",
          884: "214e2f94528af5f726d2150d0a4f2215",
          1057: "3af92259c369f40eec2a7d0f90f67d96",
          1125: "2c1fa675151d37269cfc7e15899887f6",
          2358: "165fa99f963184aba806d81f713ae37c",
          3438: "3af92259c369f40eec2a7d0f90f67d96",
          5463: "bbfc715b58e04a52bcbba01c5d9281fc",
          6069: "d420c60ba06e5f6e5c66b05e81051c48",
          6395: "443c4528b3078d79b29a4fc4dc6eeff5",
          6536: "3a4070d4c77506d8955255a1ccc7b2a6",
          8460: "881d6cf37a2a07cefa5a853913e349aa",
          8503: "214e2f94528af5f726d2150d0a4f2215",
          8579: "0feeae7db7f8003941dc17117c759189",
          8731: "742693da22ad7a392de104bbd4a4bce1",
          9116: "ed78d69898cf7c75ad9f3c7f513105b2"
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
        }), e), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/modules-core-newswire-article:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(r)), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), o && document.head.appendChild(c)
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
          i.o(o, e) && o[e].forEach(e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var c = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, f, o, n) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then(e => o(e, f), c);
                    if (!n) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    c(e)
                  }
                },
                f = (e, a, c) => d(a.get, t[1], r, 0, o, c),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, (e, a, r) => e ? d(i.I, t[0], 0, e, f, r) : c(), 1)
            }
          })
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var c = a[r];
            if (c || (c = a[r] = {}), !(t.indexOf(c) >= 0)) {
              if (t.push(c), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                f = "@rockstargames/modules-core-newswire-article",
                o = (e, a, r, t) => {
                  var c = d[e] = d[e] || {},
                    o = c[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (c[a] = {
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
                    var c = i(e);
                    if (!c) return;
                    var d = e => e && e.init && e.init(i.S[r], t);
                    if (c.then) return b.push(c.then(d, a));
                    var f = d(c);
                    if (f && f.then) return b.push(f.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === r && (o("@foundry/react", "5.10.0", () => Promise.all([i.e(602), i.e(9842), i.e(6769), i.e(1302), i.e(8731), i.e(2229), i.e(4853), i.e(4572), i.e(1082), i.e(9407)]).then(() => () => i(44467))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([i.e(9587), i.e(2229), i.e(8240)]).then(() => () => i(12841))), o("@rsgweb/modules-core-carousel", "0.0.0", () => Promise.all([i.e(4488), i.e(5827), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(8579), i.e(9477)]).then(() => () => i(89477))), o("@rsgweb/modules-core-engagement", "0.0.0", () => Promise.all([i.e(9842), i.e(4488), i.e(5827), i.e(6769), i.e(4873), i.e(2229), i.e(5966), i.e(1788), i.e(9623), i.e(4572), i.e(1913), i.e(1082), i.e(2918), i.e(2440), i.e(7678), i.e(5463), i.e(8460)]).then(() => () => i(25022))), o("@rsgweb/modules-core-group-of-items", "1.0.0", () => Promise.all([i.e(4488), i.e(2229), i.e(5966), i.e(4572), i.e(6069), i.e(1913), i.e(6536), i.e(2440), i.e(76), i.e(884)]).then(() => () => i(90884))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(2229), i.e(6188), i.e(5966), i.e(9623), i.e(6088), i.e(4550)]).then(() => () => i(32169))), o("@rsgweb/tina", "0.0.0", () => Promise.all([i.e(5117), i.e(2229), i.e(4853), i.e(6188), i.e(5966), i.e(1788), i.e(6130), i.e(2918), i.e(1057)]).then(() => () => i(99747))), o("@rsgweb/utils", "1.0.0", () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(2229), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(8702)]).then(() => () => i(58702))), o("clsx", "2.1.1", () => i.e(439).then(() => () => i(10439))), o("dompurify", "2.5.8", () => i.e(7785).then(() => () => i(27785))), o("lodash", "4.17.21", () => i.e(5076).then(() => () => i(15076))), o("react-dom", "18.3.1", () => Promise.all([i.e(1098), i.e(2229)]).then(() => () => i(71098))), o("react-dom", "19.2.0", () => Promise.all([i.e(2229), i.e(2583)]).then(() => () => i(62583))), o("react-intersection-observer", "9.16.0", () => Promise.all([i.e(2229), i.e(6327)]).then(() => () => i(76327))), o("react-jsx-parser", "2.4.1", () => Promise.all([i.e(3387), i.e(2229)]).then(() => () => i(43387))), o("react-router-dom", "6.30.1", () => Promise.all([i.e(5389), i.e(2229), i.e(4853)]).then(() => () => i(15389))), o("react", "18.2.0", () => i.e(8659).then(() => () => i(68659))), o("react", "18.3.1", () => i.e(8431).then(() => () => i(48431))), o("text-balancer", "1.0.5", () => i.e(5400).then(() => () => i(75400))), n(25136), n(29441)), b.length ? e[r] = Promise.all(b).then(() => e[r] = 1) : e[r] = 1
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
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var c = 1, d = 1; d < e.length; d++) c--, t += "u" == (typeof(o = e[d]))[0] ? "-" : (c > 0 ? "." : "") + (c = 2, o);
                return t
              }
              var f = [];
              for (d = 1; d < e.length; d++) {
                var o = e[d];
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
                var c = a[0],
                  d = c < 0;
                d && (c = -c - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(b = t[f]))[0])) return !n || ("u" == i ? o > c && !d : "" == i != d);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= c) {
                        if (b != a[o]) return !1
                      } else {
                        if (d ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (d || o <= c) return !1;
                    n = !1, o--
                  } else {
                    if (o <= c || s < i != d) return !1;
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
            t = (a, t, c, d) => {
              var f = d ? (e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce((a, t) => !r(c, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var c = a[t],
                    d = (typeof c)[0];
                  if (t >= r.length) return "u" == d;
                  var f = r[t],
                    o = (typeof f)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && c != f) return c < f;
                  t++
                }
              })(a, t) ? a : t, 0)) && f[t]
            },
            c = e => {
              throw new Error(e)
            },
            d = (e => function(a, r, t, c, d) {
              var f = i.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, i.S[a], r, !1, c, d)) : e(a, i.S[a], r, t, c, d)
            })((e, r, d, f, o, n) => {
              if (!((e, a) => e && i.o(e, a))(r, d)) return ((e, a, r) => r ? r() : ((e, a) => c("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, d, n);
              var b, s = t(r, d, o, f);
              return s ? ((b = s).loaded = 1, b.get()) : n ? n() : void c(((e, r, t, c, d) => {
                var f = e[t];
                return "No satisfying version (" + a(c) + ")" + (d ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
              })(r, e, d, o, f))
            }),
            f = {},
            o = {
              62229: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8431).then(() => () => i(48431))),
              44853: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(1098).then(() => () => i(71098))),
              16188: () => d("default", "lodash", !1, [1, 4, 17, 21], () => i.e(5076).then(() => () => i(15076))),
              95966: () => d("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8505), i.e(5454), i.e(6188), i.e(1788), i.e(9623), i.e(6088), i.e(6321)]).then(() => () => i(58702))),
              81788: () => d("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([i.e(9587), i.e(5859)]).then(() => () => i(12841))),
              9623: () => d("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([i.e(5389), i.e(4853)]).then(() => () => i(15389))),
              4572: () => d("default", "clsx", !1, [1, 2, 1, 1], () => i.e(439).then(() => () => i(10439))),
              61913: () => d("default", "react", !1, [1, 18, 2, 0], () => i.e(8659).then(() => () => i(68659))),
              2918: () => d("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([i.e(602), i.e(4237), i.e(8068), i.e(6188), i.e(9623), i.e(6088), i.e(2169)]).then(() => () => i(32169))),
              2973: () => d("default", "dompurify", !1, [1, 2, 4, 1], () => i.e(7785).then(() => () => i(27785))),
              92440: () => d("default", "@rsgweb/tina", !1, [1, "workspace:^"], () => Promise.all([i.e(5117), i.e(4853), i.e(6188), i.e(1788), i.e(6130), i.e(2918), i.e(3438)]).then(() => () => i(99747))),
              39978: () => d("default", "@foundry/react", !1, [1, 5, 10, 0], () => Promise.all([i.e(602), i.e(9842), i.e(1302), i.e(8731), i.e(4853), i.e(1082)]).then(() => () => i(44467))),
              61128: () => d("default", "react-intersection-observer", !1, [1, 9, 16, 0], () => i.e(8708).then(() => () => i(76327))),
              15310: () => d("default", "@rsgweb/modules-core-group-of-items", !1, [1, "workspace:^"], () => i.e(8503).then(() => () => i(90884))),
              20206: () => d("default", "@rsgweb/modules-core-engagement", !1, [1, "workspace:^"], () => Promise.all([i.e(9842), i.e(1082), i.e(7678), i.e(6395)]).then(() => () => i(25022))),
              42602: () => d("default", "@rsgweb/modules-core-carousel", !1, [1, "workspace:^"], () => Promise.all([i.e(8579), i.e(1858)]).then(() => () => i(89477))),
              57770: () => d("default", "react-jsx-parser", !1, [1, 2, 2, 2], () => i.e(3387).then(() => () => i(43387))),
              97384: () => d("default", "text-balancer", !1, [1, 1, 0, 5], () => i.e(5400).then(() => () => i(75400))),
              91082: () => d("default", "react-dom", !1, [1, 18, 2, 0], () => i.e(4964).then(() => () => i(62583)))
            },
            n = {
              1082: [91082],
              1125: [15310, 20206, 42602, 57770, 97384],
              1788: [81788],
              1913: [61913],
              2229: [62229],
              2440: [92440],
              2918: [2918],
              4572: [4572],
              4853: [44853],
              5463: [39978, 61128],
              5966: [95966],
              6188: [16188],
              6536: [2973],
              9623: [9623]
            },
            b = {};
          i.f.consumes = (e, a) => {
            i.o(n, e) && n[e].forEach(e => {
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
                  var c = o[e]();
                  c.then ? a.push(f[e] = c.then(r).catch(t)) : r(c)
                } catch (e) {
                  t(e)
                }
              }
            })
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
                1125: 1,
                2358: 1,
                3438: 1,
                5463: 1,
                6069: 1,
                6395: 1,
                6536: 1,
                8460: 1,
                8503: 1,
                8579: 1,
                8731: 1,
                9116: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = i.miniCssF(e),
                  c = i.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var c = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (c === e || c === a)) return f
                    }
                    var d = document.getElementsByTagName("style");
                    for (t = 0; t < d.length; t++) {
                      var f;
                      if ((c = (f = d[t]).getAttribute("data-href")) === e || c === a) return f
                    }
                  })(t, c)) return a();
                ((e, a, r, t, c) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", i.nc && (d.nonce = i.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, d.parentNode && d.parentNode.removeChild(d), c(n)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, c, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
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
              else if (/^(1(082|788|913)|2(229|440|918)|6(069|188|395|536)|4572|4853|5966|76|8460|8579|9623)$/.test(a)) e[a] = 0;
            else {
              var c = new Promise((r, c) => t = e[a] = [r, c]);
              r.push(t[2] = c);
              var d = i.p + i.u(a),
                f = new Error;
              i.l(d, r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var c = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + c + ": " + d + ")", f.name = "ChunkLoadError", f.type = c, f.request = d, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, c, [d, f, o] = r,
                n = 0;
              if (d.some(a => 0 !== e[a])) {
                for (t in f) i.o(f, t) && (i.m[t] = f[t]);
                o && o(i)
              }
              for (a && a(r); n < d.length; n++) c = d[n], i.o(e, c) && e[c] && e[c][0](), e[c] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(93032), i(55974)
      })())
    }
  }
});