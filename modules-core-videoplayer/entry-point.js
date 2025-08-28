try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "411dffec-634a-47a6-9e74-f5aed88df620", e._sentryDebugIdIdentifier = "sentry-dbid-411dffec-634a-47a6-9e74-f5aed88df620")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, c, f, o = {
            9944: (e, a, r) => {
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
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            37389: (e, a, r) => {
              r(21998)
            },
            58157: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => r.e(9583).then((() => () => r(39583))),
                  "./index": () => Promise.all([r.e(3974), r.e(2229), r.e(9623), r.e(6188), r.e(5966), r.e(9010), r.e(3581), r.e(2918), r.e(4156), r.e(9133)]).then((() => () => r(39133))),
                  "./tina": () => Promise.all([r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(9010), r.e(1907)]).then((() => () => r(91907))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(9010), r.e(1907)]).then((() => () => r(91907)))
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
            82788: (e, a, r) => {
              const t = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(d, c), d
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          114: "9544d299208e03d84776dfc15f93fee9",
          131: "6b6c5bea8570c7817632bacf806a964a",
          204: "3a98213019448ba88c83bd875c6d33cb",
          278: "e78ed5c8b962c0c61bcb86f977bacb90",
          299: "df3f3aa976e4cc52c3b9d477fdd3cc40",
          314: "9dde8fdd859adb00f359304273faadbc",
          511: "c25de6520504fcfcba9bd57765df1fa2",
          662: "aa953368caa617f37070cee5f8a2a5fa",
          824: "8492fb8f47c195c3b32394ceb2dc14a4",
          907: "a3e3c5768959b14bf99c16887ceb591c",
          954: "1987eeb407fd5c62ebd530abdd317601",
          1054: "ffef7d05c40358d8375061ef284e4fb9",
          1138: "76af60b752023c44cde55618e4699131",
          1242: "408b1924682e9eddbc929a95d52ea0ba",
          1325: "c3642bbecb425cc69b8c21f110a31450",
          1503: "82928a7ece34b397ee79ed2dbbf6f5d4",
          1822: "48d466afd74b17828279989a34ac2edf",
          1868: "9c10598dd79b9de7a94b3f7b82cf8b67",
          1907: "2ff33f7c09b0cfc617aa2c4aef528914",
          2156: "3a44237efcf40d77e0df57c1f7fd2644",
          2171: "c184b23086abb698e0de5482818e1f53",
          2221: "461bc3d30f466fbabf6390e40b129ce9",
          2243: "68ed65435a4afae8bee41bd0039eab52",
          2315: "4d35c3e7b026dfdd209deddf7dc0a790",
          2347: "40fc097ac0f0bfd7b1b782cf0a5e2709",
          2365: "e34742f436288c8c582aaec7c6645d23",
          2398: "72c2d2cdda003f64ae718f9f68910047",
          2466: "c31a58053e72e7de94a5ab8e759a955f",
          2642: "6918c2ab2fcccf9f15a974f87580a57b",
          2678: "e0b1917b10ef2d038c10b4300b1d4723",
          2698: "e5c4a2ee3cc9b9dd6ff6d0394d4cb31a",
          2864: "f22a307b1c605102e4f34ee8977e9217",
          3034: "9fdcebc0f90d853649098f0355dfbc69",
          3197: "3674c36eb5843aafdfbbd58c87d5ab38",
          3343: "cb33791f6ec4244bbf21d23043cff7e6",
          3370: "6bbc90b4667261daa78888c9a91321f9",
          3401: "591c8ec2b9b3e6f5651c7d3dd39585ae",
          3475: "424ba83352d81d9f8f711f012b7e1355",
          3486: "0c132cdcff0c91b9b86f73c6572ebb8d",
          3697: "3537b02bfbdfe5815213a5f89728380c",
          3884: "1b574891ec34ee5a569e0a2b28b8585e",
          3885: "b552180321bcabd6a82ff374aa9e212d",
          3941: "a49673af2c355c93ec2752f785235ce9",
          3974: "1bace680f844947ea443bb62230ed8c7",
          4011: "279c43b6a306edbb84d637e97da6a401",
          4145: "bf9df1a7af47c65dd322adf5d3021fed",
          4156: "606e04b6e39fd213a2d8c5644862d4c9",
          4528: "4689acc067bdfc8b2b0f6f6d98167cc1",
          4621: "e8212f0a58ba983d3b67ff47db8e9517",
          4700: "a915c76fb43722bd86c27aae6062a045",
          4710: "58039f7e1e27ee80b7d23f379509c1c1",
          4731: "e90a9516d73b9b6da88fa2012a8a3619",
          4799: "9bddd1128cf276577f5145052bedf19c",
          4851: "20794f992905b93998a644eb2273919d",
          4861: "52c26611adac727ddc8c13ef0f36bb76",
          4913: "414ae9769e11e5f6405487c13dd59bec",
          5018: "b5b5664915dd6e3d580c62d66bed6888",
          5233: "d355c1690e0ca42182bbfbde36165a94",
          5259: "5400033dde4cb43f0a75cf02c40a4223",
          5440: "3de2fc4a32fd6e1a7b1c1e585679e7ee",
          5526: "9a81765a45324d109667c8ee50c6fd71",
          5530: "f515a96ac07996a76009942a69216941",
          5639: "a7e77ee929cfd9e6e79d535d1695ad89",
          5663: "60262921d9f7768feec8fb20c82f6f27",
          5742: "0d3bbfaa9f2885e992ee5d5fa21cb05d",
          5830: "ccf16c516d82222d0ee7b938af1c29b2",
          5832: "b10784f1c9f0f5ecd8a4fe6a00926360",
          6019: "faa30be4802df1e35ab10132f5c7ecbf",
          6267: "88e9e577d131fca1166e6eefafe905a5",
          6280: "e331f04729c2f6b3518be7dea2817355",
          6285: "3607963b3a8035d2c6df71e5fc140d45",
          6361: "167e021996a48bb9319f620239786438",
          6664: "1c57763f9767036f9f2978d9253678eb",
          6806: "0e66e37a2ed4c9b8ea095ffc014b9cb3",
          6871: "c1a3045f1dde75e2cd8d799a02bfe9c5",
          6879: "75f2e30cda515c8cf18433695c059dfe",
          6891: "b9f3c0a1a6f6aa0a12dccdf2a489333b",
          6997: "c6894a829de64d8a35310a3636b1af93",
          7010: "ce72b956c679b501d941ec287de9a9fc",
          7073: "f23f4c8efeebaa1507cfefbf631a3068",
          7354: "7dae36a7396e9a0024c033987ffeeedf",
          7413: "30d5df0e66d42edebc4ac72a0b1a6ed5",
          7436: "47e8ade27ec3d044179f75f35c2fa98b",
          7452: "4febb13c8fda3d4f345bf6e496ab9d45",
          7453: "0e92afb0477c7fd7f637356c8446e56b",
          7823: "dbc468c253fd114d75320647cedc2ee4",
          7851: "f2356d433b5b3827b2e286249c83b6fe",
          7970: "3ae651b07957f6efe92d6b163f74ceb0",
          8258: "e6c1b68a27f08a912680bfe3bb766078",
          8272: "22dcc183e50a20a390ff2c058ec66d34",
          8342: "4c729752728b6b5bc7595f8f7f1aab2d",
          8391: "b731fcc0c61a772457011f0497a4471d",
          8699: "42c34a41e41e3d229da83e1305f28a8d",
          8755: "31d4d418aef3f973a2b54a2c9cb62051",
          8880: "b01893941a5f676eca3dcf02277d0cb3",
          8970: "e3e365f9957cafd5646d3d8c68d55405",
          9022: "121b6b1b8c4087158b85d05118cb55eb",
          9028: "a2afd1f0de75754ee45525c6c13795b3",
          9126: "ca275042e39424572275ed56c1f99882",
          9133: "8c96bab1f59f06f4e9bdea9b7132c85a",
          9252: "a34bc0cbe3861b30ffbffd5a02be9688",
          9368: "6300376f0c884a37e49ceb1b6107f79d",
          9377: "b954c21eb76691085faa988293213df7",
          9489: "0d1c25b725b805502990642d779ea8f3",
          9583: "6552c334799f0a4524a23e9b2085f551",
          9615: "3d57573dfb6f58382cd463c1a38da0b4",
          9728: "6adec877f18f8ae0f4686d0b3cc7363f",
          9794: "3dcbb322376622ec3911cf8bf46ddd70",
          9936: "c85874df286062d31182e8486d3f5171",
          9990: "2e702015d57d9f422eedb8496cc427d1"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1325: "30c5db481d6b25a478ff5719bcbdf03e",
          1907: "e1ecfbd5d60b0822f094e505eee8adf4",
          4156: "c3b5fa66b37bdbee67647bfd37d317f9",
          7354: "30c5db481d6b25a478ff5719bcbdf03e",
          7851: "a126229ede95b503bfddbd53efcedae3",
          9133: "721e303b208c5f38763aab7a2a9ed1eb"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-videoplayer:", b.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), s = 0; s < n.length; s++) {
                var i = n[s];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + r) {
                  f = i;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var l = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var t = f[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
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
                o = (e, a, d) => c(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, t[2], 0, 0, ((e, a, r) => e ? c(b.I, t[0], 0, e, o, r) : d()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var c = b.S[r],
                f = "@rockstargames/modules-core-videoplayer",
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
              return "default" === r && (o("@gsap/react", "2.1.2", (() => Promise.all([b.e(2229), b.e(3581), b.e(7823)]).then((() => () => b(27823))))), o("@popperjs/core", "2.11.8", (() => b.e(8258).then((() => () => b(18258))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(2315), b.e(2229), b.e(1503)]).then((() => () => b(58718))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([b.e(8342), b.e(2229), b.e(5966), b.e(2918), b.e(7354)]).then((() => () => b(27354))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(3401), b.e(4145), b.e(2229), b.e(9623), b.e(6188), b.e(5966), b.e(511), b.e(9252)]).then((() => () => b(66871))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(3401), b.e(2229), b.e(9623), b.e(6188), b.e(511), b.e(954)]).then((() => () => b(81635))))), o("graphql", "16.11.0", (() => b.e(5440).then((() => () => b(55440))))), o("gsap", "0.0.0", (() => b.e(5526).then((() => () => b(65526))))), o("hammerjs", "2.0.8", (() => b.e(2698).then((() => () => b(32698))))), o("lodash", "4.17.21", (() => b.e(9489).then((() => () => b(99489))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(6019), b.e(2229)]).then((() => () => b(66019))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(2229), b.e(4853), b.e(9005), b.e(9794)]).then((() => () => b(99794))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(9728), b.e(2229), b.e(4853)]).then((() => () => b(49728))))), o("react", "18.3.1", (() => b.e(1138).then((() => () => b(11138))))), o("uuid", "9.0.1", (() => b.e(8699).then((() => () => b(8699)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
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
                var p = a[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
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
              var f = b.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, b.S[a], r, !1, d, c)) : e(a, b.S[a], r, t, d, c)
            })(((e, r, c, f, o, n) => {
              if (!((e, a) => e && b.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var s, i = t(r, c, o, f);
              return i ? ((s = i).loaded = 1, s.get()) : n ? n() : void d(((e, r, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(r, e, c, o, f))
            })),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(1138).then((() => () => b(11138))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(9728), b.e(4853)]).then((() => () => b(49728))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(9489).then((() => () => b(99489))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(3401), b.e(9623), b.e(6188), b.e(511)]).then((() => () => b(81635))))),
              81569: () => c("default", "uuid", !1, [1, 9, 0, 0], (() => b.e(8699).then((() => () => b(8699))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(2315), b.e(3884)]).then((() => () => b(58718))))),
              13581: () => c("default", "gsap", !1, [1, "workspace:^"], (() => b.e(5526).then((() => () => b(65526))))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(3401), b.e(4145), b.e(9623), b.e(6188), b.e(511), b.e(6871)]).then((() => () => b(66871))))),
              4848: () => c("default", "hammerjs", !1, [1, 2, 0, 8], (() => b.e(2698).then((() => () => b(32698))))),
              27654: () => c("default", "@gsap/react", !1, [1, 2, 1, 0], (() => b.e(204).then((() => () => b(27823))))),
              47224: () => c("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([b.e(8342), b.e(1325)]).then((() => () => b(27354))))),
              75971: () => c("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([b.e(4853), b.e(9005), b.e(7413)]).then((() => () => b(99794))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(6019).then((() => () => b(66019))))),
              16565: () => c("default", "graphql", !1, [1, 16, 9, 0], (() => b.e(5440).then((() => () => b(55440))))),
              9005: () => c("default", "@popperjs/core", !1, [1, 2, 11, 7], (() => b.e(8258).then((() => () => b(18258)))))
            },
            n = {
              511: [16565],
              2229: [62229],
              2918: [2918],
              3581: [13581],
              4156: [4848, 27654, 47224, 75971],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            s = {};
          b.f.consumes = (e, a) => {
            b.o(n, e) && n[e].forEach((e => {
              if (b.o(f, e)) return a.push(f[e]);
              if (!s[e]) {
                var r = a => {
                  f[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                s[e] = !0;
                var t = a => {
                  delete f[e], b.m[e] = r => {
                    throw delete b.c[e], a
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
              7614: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1325: 1,
                1907: 1,
                4156: 1,
                7354: 1,
                7851: 1,
                9133: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  d = b.p + t;
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
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = r => {
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
            7614: 0
          };
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(9(005|010|623)|2229|2918|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, c = r[0],
                f = r[1],
                o = r[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) b.o(f, t) && (b.m[t] = f[t]);
                o && o(b)
              }
              for (a && a(r); n < c.length; n++) d = c[n], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b(37389), b(58157)
      })())
    }
  }
}));