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
          131: "955a968825e041bad991b47ccafff08e",
          185: "bdff72c7157f8f11001ad29fd20992ec",
          278: "98d8ed90218b290b5311c4c7e90623d8",
          299: "a3aab616409998c39d42b0ed85da5343",
          314: "f74f9bbb4e1307a66b460f2b3392ffd0",
          662: "4c267504fdd5f246aa61f08ffeefc70d",
          824: "ce4c32124f203a94a3bbe37ae28ded62",
          907: "4881524fa2faa2248be7a4cdbe0b565b",
          1054: "b581ba4b52216052a30625ed29142775",
          1242: "528469befc45e9dfba8826c7857dbf58",
          1822: "622d1f0de14cb234ec337fef632bb106",
          1868: "044726eb4f0ba1021f68ad9478c94d5c",
          2156: "e7bce9547fe69eb721994da44c77b367",
          2171: "2d347be7edc0c3c0fd331fd1ffbf7f06",
          2221: "4ba584696f6f819bc34e2bf409df22e4",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "c777148137c4bf48050aed4f8dd8e7a3",
          2347: "ca300ba91766fa1b5f77a2e24c0835fa",
          2365: "4cb974dfc59f78c34cb137059ee6618c",
          2398: "b0a7defa3c8e16a2a28a176f2e3c9a27",
          2466: "e811786827c710c54c72886cfa0243e0",
          2642: "229d49436f0c9cb6cdf23f57c1cd824c",
          2678: "fd72faa199f2ed7b39ff1029adbe79e5",
          2864: "5617c615af0f1fbc4a647c98fcad5d91",
          3034: "46290b194e5237eb489e970b2ed4a26e",
          3197: "a9a698509d24f9452ff88f1e2644fd95",
          3343: "565cad971c40b62680b1abbddb121d95",
          3370: "ea12a2f91a4ca42d6019fb6f3bff5e54",
          3447: "0b29d2daf790deffaf6e81a1e5f8762c",
          3475: "c64e7edd04cafb8ba0eb82169783c3ef",
          3486: "432216ca8a4fafe6991ece116b3b6fea",
          3697: "0ac7bce8550adde127b490543efb5d12",
          3855: "fe0fa7b505f1f389c5136fb1f0425eab",
          3885: "e7e134f3b1ae8d49007100390750d625",
          3941: "16998b16471b60ea16770568d98b2c5c",
          4011: "4ddf793207512aee7b34a295c06ce6c2",
          4018: "2e0cfc471b16d29fe58eded438d4fe2f",
          4528: "fdd2e57e49dd5ad1ce44153c90bb9d9f",
          4621: "cc8bcbbce1248b9112a0b4bd80412fe8",
          4700: "801358bcba7425e2e5777787247f00ab",
          4710: "947cf48c8998927718051478c1be3d80",
          4731: "1cbdb235e3a458492fe1a6f88b6b9cd7",
          4799: "1d701e5ec137b85e5a367e58fdd3d2cb",
          4851: "a042d916f303f3ac8e9b36b14644a088",
          4861: "362255fcab22406b0b9ae30c0b001654",
          4913: "6e18ca35b622d7c15d7458b27319ff12",
          5018: "40b634a2649862bdb50ea65daf6fc8ff",
          5136: "e7be3bb2780cfb077023ce5b0dfc3801",
          5233: "186f2e5139fdd6612332db4eeed53cdb",
          5254: "48c20ae7f76879a48e10c8d84e8a808b",
          5259: "44b6c6235c014dd73a1009d33e4d550d",
          5530: "7d823f92e089d6a848f7e922d65284bb",
          5639: "ad6ac6805fe17de7a08bb57a88c148ff",
          5663: "ec5996bb37e0b1592d6683fd552c6a2e",
          5705: "780eb7a508300af3579b4067c80d098b",
          5742: "0596d4d86d9b7917553118f1229c89e0",
          5830: "67144f1662943f3d33ad87edf8ac745c",
          5832: "7951bcaba07e5c6a0de50eaeee71bd82",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "aa5e03b55bce7c5c8fdffad924faf8f3",
          6280: "cb8aa52c8413c3785523cd7fe59b8c92",
          6285: "82e5424f65b11117315916ca1b7a5d22",
          6361: "0ff79ba04d204adb58e638d6c34d97d5",
          6507: "c155543d303cef08729f1b8deaba2922",
          6664: "7b924646e7c9fb13152eda7ea9ebaa82",
          6879: "75ccbcba893c5f60970bd2cc9c045188",
          6891: "7b1da21266e82a246c5b7079c1aa602e",
          6997: "88e2b80066cae324410815de292a9e06",
          7010: "c1d611ddff561a4063b46f7f31ba772f",
          7073: "661cbeb140f0257525a724f6f32a8ce8",
          7171: "ea49f0012e510b796e7e19b8044f332e",
          7436: "1676ebdb20c2de3501d3fa7768b888f8",
          7452: "1dec1836c17a68cc60ca5097589de7be",
          7453: "b88f5438e609bbb58b57a31a69e0c785",
          7904: "31f1f89b860c947392d2f2cd73b5ab9d",
          7970: "80059534341db07c024cd3131d6dc34f",
          8272: "b8582cfa3cbd8af6650bc0a38ba89a9e",
          8337: "b7a3bbab399ce5a27e55dc32aacfb385",
          8391: "26365a4ddbe0f59721ca9c668b57e539",
          8755: "ac3947793f022f1534d11220ee17ee46",
          8880: "39d4516eed0f3314cc13ce541ac27cb8",
          8970: "eafc14d2731fd7f3f87882e3e56717eb",
          9022: "be1468ab726c129093fb747ac531e0ab",
          9028: "8f56e21f0d1345058b6b9f1d2ace473b",
          9126: "bcc69e940c051611d5397ed70feac5c3",
          9377: "756d11bb7c5fadc2833fb1d603adfd2e",
          9615: "c3ea6ee9ee48e07d6a71d42ba1e2c3d4",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9936: "ffe9e1f1d4d6d7d4a34b7581b1752b81",
          9978: "f2cee4c36cc0bf6f63df6195cd557c45",
          9990: "b412e53e0ed3c5922b6c186905957a40"
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