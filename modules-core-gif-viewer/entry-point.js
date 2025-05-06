! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ca6bd68b-c627-4764-8988-e393197f67b7", e._sentryDebugIdIdentifier = "sentry-dbid-ca6bd68b-c627-4764-8988-e393197f67b7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, c, d, b = {
            4075: (e, a, r) => {
              (0, r(7387).w)(1)
            },
            7387: (e, a, r) => {
              const t = r(3099).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            5408: (e, a, r) => {
              r(4075)
            },
            3099: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, c = t.length; f !== a && c >= 0;) "/" === t[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(2229), r.e(5966), r.e(7171), r.e(9978)]).then((() => () => r(9978))),
                  "./lazy": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(7171), r.e(185)]).then((() => () => r(185))),
                  "./tina": () => Promise.all([r.e(6507), r.e(2229), r.e(5966), r.e(7904)]).then((() => () => r(7947))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(6507), r.e(2229), r.e(5966), r.e(7904)]).then((() => () => r(7947)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => c
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var r = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          n.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, n.d(f, c), f
        }, n.d = (e, a) => {
          for (var r in a) n.o(a, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, r) => (n.f[r](e, a), a)), [])), n.u = e => "js/" + {
          131: "2912c3294eb0b085c5fc36e4ded16c93",
          185: "17ecf826303f7f2b3a2d7a50f61ceb70",
          278: "c05ef51ad5d13bb80d823b8126c83f07",
          299: "ad056693f03d16e0cb67bad65dcb5019",
          314: "3cce0750309e327a100c9730edf9fa97",
          662: "7b93e921884524c489c73264cae4dd02",
          824: "b759408d24a2b11a7476568b54328869",
          907: "7e3cf03abfe93bb36e371a8c93f806d7",
          1054: "381afd6b3dc98380f5e6f48b3f71716b",
          1242: "d79c72621e865989cd90bb9b0b29fcb8",
          1822: "d3f0535ce97daec41135aaef54e4dc1d",
          1868: "23684b79225aa7df043a70cdaf5919e1",
          2156: "e320ae9c6ce03a3ea8d9c9866401a786",
          2171: "5553eb913440d0c4059bfdd2ae5316fb",
          2221: "5ac73be4aa9576b7d4258c15a0cda6b3",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "239a2784646e5215d6aa1f3344007362",
          2347: "7fe3a69d3b8af12b4de0cc3edc239780",
          2365: "c92560a2cc93532d8bc06d6becccb447",
          2398: "295c2364dc1d508160d04df606e3c80a",
          2466: "c0598a5892e2e057db71ef6a98830d0b",
          2642: "3191c7cbaec019400f8cb395064b6f6f",
          2678: "95f914dea1b8a2971afdd6ce3b4b6140",
          2864: "f1e41e391c48671288cb14f06a2741cf",
          3034: "346276e35bf0188379e388e49b109f09",
          3197: "ee9f5889d4eaa6f7e28230a7b91f21fa",
          3343: "50f42d3f61bfdff00accf6caedb64f96",
          3370: "f62cb686c6bc8f0661df3eb53b427404",
          3447: "3957bae447eacf833c6909209ad028b7",
          3475: "4f689ff42c11de073b0639c88c81dff2",
          3486: "b4fff9e2063f6e830d5d6af0583fbb4f",
          3697: "38d6bb3638be3398d74120108c264c83",
          3855: "8173075a3bea4164de2d8a7dd1b27ba0",
          3885: "1efa1aadb8bcc8dbb975f051fd268136",
          3941: "339b94ede7beca3d1d737833ccc68dd7",
          4011: "3c211246996cc211a389333a96d89125",
          4018: "2e7b390feb8c665c83ce184615012d12",
          4528: "b872ee6388a2a48f847659b6dbb3528d",
          4621: "60dbb89faee9b4f06a059b45e5f6e229",
          4700: "71f6cadaff3c2dda49c1f20500d1ab76",
          4710: "0338207c36ae8e90fbee858db3ab1871",
          4731: "72c731de4b4da790a61e4ef1da42040a",
          4799: "4fff13992ced0fbe23d11e42ef32ec14",
          4851: "f89a4570ab2d619e2c3259d10a8926e7",
          4861: "d45d5e0e9147225d3df33908cba5312f",
          4913: "e6edbaa756534f5886babab9faaf68b0",
          5018: "b06938056fc809455d9aa5abc40cec6a",
          5136: "66c0889179b88192d494963b7d7a3746",
          5233: "e6d79c847d16ff905f88d51d3ecfd0eb",
          5254: "91179964b3594c5b6f53a1ce45a81624",
          5259: "08ec7035b219344965411a8c8ffcdc11",
          5530: "9fd53b4d8792180b00828fb69e9ecb54",
          5639: "47c6b56740361b8611b2783aa867a2c6",
          5663: "09acf4c49d74c7cd6b751fae23f1fac1",
          5705: "e7da948b5574ecdb3f94120a320d254e",
          5742: "a03ffa44eb78cd35d1581e69107c8ffb",
          5830: "b505ea4c6c4b9b37eab2944c43022b59",
          5832: "f8c280d58a47e761de6c24f5d4794db2",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "310b2d54bfb0284dd79c6d1267b597d0",
          6280: "007e27f12908dbc7bc4b1f2c607a37b3",
          6285: "5d51a43f5e21d12c0218c571457a2258",
          6361: "0177f35d31180a9ceb7f2763fed3449a",
          6507: "59392291278dbd365a800f11a4b75336",
          6664: "fb71719d4446b23dcaeb4c1e25526a9d",
          6879: "a6ad04c251600da97369ab497a942a7b",
          6891: "f9d06a2edb7291328717982234d06f84",
          6997: "4652b665ba6bb7c1f730d90f13f54a45",
          7010: "c8f6606ce24e334ee72b714bb393ecc6",
          7073: "cadd7ea6ba61f068a5c2a4c41660865c",
          7171: "99f796cacadf6ecbf535882a72cde9bc",
          7436: "7011c5f5a633acb70fc0753c863075a3",
          7452: "c0eeb62a33b0f02ab070004279f288d5",
          7453: "db7813dceb6bda12809ad804fb7eaca9",
          7904: "26fee7042741a668ffac7885f8591b88",
          7970: "d94cde2a6807143f62b622929b94580f",
          8272: "7859fcbb9e949e7a61cc318dfda4d79a",
          8337: "b4d79a00af50f986d823688e922da609",
          8391: "c0a4b62e015247803908d3b533ae6ead",
          8755: "41cfc55609f79923a5a98dd47d20c564",
          8880: "1cea9078eba67829fb70c3d3d5bfdd98",
          8970: "0d42dbe2ca8d26b332c4b649a26bbe88",
          9022: "805facb43ae54a8195414980719bfdb2",
          9028: "e5500a3e3464697901bfb74bd256b0b2",
          9126: "9a4578e33af857e80772ae2c6953f30a",
          9377: "e5585c948f70d4d017a8e2777313638c",
          9615: "9cffdd7d8673c97a9b844e83ab64bf57",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9936: "40b858b774d6db95907917b67ff6ee17",
          9978: "fd945bf6e50ff735fd9a0b6d61982bd6",
          9990: "3e19bd3456c32b40146fed8385c3848c"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", n.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var d, b;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  d = s;
                  break
                }
              }
            d || (b = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, n.nc && d.setAttribute("nonce", n.nc), d.setAttribute("data-webpack", f + r), d.src = e), t[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var f = t[e];
                if (delete t[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), b && document.head.appendChild(d)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, d = {}, n.f.remotes = (e, a) => {
          n.o(c, e) && c[e].forEach((e => {
            var r = n.R;
            r || (r = []);
            var t = d[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), n.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, d, b, o) => {
                  try {
                    var n = e(r, c);
                    if (!n || !n.then) return b(n, d, o);
                    var i = n.then((e => b(e, d)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                b = (e, a, f) => c(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(n, t[2], 0, 0, ((e, a, r) => e ? c(n.I, t[0], 0, e, b, r) : f()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              n.o(n.S, r) || (n.S[r] = {});
              var c = n.S[r],
                d = "@rockstargames/modules-core-gif-viewer",
                b = (e, a, r, t) => {
                  var f = c[e] = c[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!t != !b.eager ? t : d > b.from)) && (f[a] = {
                    get: r,
                    from: d,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(5705), n.e(2229), n.e(9623), n.e(5136), n.e(3855)]).then((() => () => n(5136))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(4018), n.e(2229)]).then((() => () => n(4018))))), b("react", "18.2.0", (() => n.e(3447).then((() => () => n(3447)))))), e[r] = o.length ? Promise.all(o).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (r, t) => {
              if (0 in r) {
                t = e(t);
                var f = r[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, b = 1, o = !0;; b++, d++) {
                  var n, i, s = b < r.length ? (typeof r[b])[0] : "";
                  if (d >= t.length || "o" == (i = (typeof(n = t[d]))[0])) return !o || ("u" == s ? b > f && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= f) {
                        if (n != r[b]) return !1
                      } else {
                        if (c ? n > r[b] : n < r[b]) return !1;
                        n != r[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < r.length; d++) {
                var p = r[d];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var c = r[t];
              return (t = Object.keys(c).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    c = (typeof f)[0];
                  if (t >= r.length) return "u" == c;
                  var d = r[t],
                    b = (typeof d)[0];
                  if (c != b) return "o" == c && "n" == b || "s" == b || "u" == c;
                  if ("o" != c && "u" != c && f != d) return f < d;
                  t++
                }
              })(r, t) ? r : t), 0)) && c[t]
            },
            t = (e => function(a, r, t, f) {
              var c = n.I(a);
              return c && c.then ? c.then(e.bind(e, a, n.S[a], r, t, f)) : e(a, n.S[a], r, t, f)
            })(((e, a, t, f, c) => {
              var d = a && n.o(a, t) && r(a, t, f);
              return d ? (e => (e.loaded = 1, e.get()))(d) : c()
            })),
            f = {},
            c = {
              2229: () => t("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(3447))))),
              5966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(5705), n.e(9623), n.e(5136)]).then((() => () => n(5136))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(4018)))))
            },
            d = {
              2229: [2229],
              5966: [5966],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(d, e) && d[e].forEach((e => {
              if (n.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var r = a => {
                  f[e] = 0, n.m[e] = r => {
                    delete n.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], n.m[e] = r => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var d = c[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          n.b = document.baseURI || self.location.href;
          var e = {
            9737: 0
          };
          n.f.j = (a, r) => {
            var t = n.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var c = n.p + n.u(a),
                d = new Error;
              n.l(c, (r => {
                if (n.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, t[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, c = r[0],
                d = r[1],
                b = r[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in d) n.o(d, t) && (n.m[t] = d[t]);
                b && b(n)
              }
              for (a && a(r); o < c.length; o++) f = c[o], n.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), n.nc = void 0, n(5408), n(4848)
      })())
    }
  }
}));