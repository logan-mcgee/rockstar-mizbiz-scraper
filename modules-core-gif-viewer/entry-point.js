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
          131: "2f6b01a329fc4baad0b8fb3d65824f60",
          185: "5fe5d141456f3be38170d27373375e8c",
          278: "3a2c3f6b55db6ed1ce92e6df321caa5f",
          299: "afe947e82f195985cae3f1b4ce7069ce",
          314: "d8ee8982f831b9656e19ef986985156a",
          662: "1f7e55dbfdcde0bef0eed63c5bcfb425",
          824: "14a7f310dfee27b45573f05283b9de4d",
          907: "83117c60fb2125c5dab281bd0fa6df3c",
          1054: "52bd9659349b79d20e4e0af1226343e5",
          1242: "582ed76aa27a745e73cec93f1b3decd6",
          1822: "052e1c39d871d9d633e8ddebbb281864",
          1868: "fb074810827782681665085f235bd875",
          2156: "952fa04c3f128340ee01b8ae487fa383",
          2171: "35727aa22f81910204b02289e35755d5",
          2221: "d3293d9aec3a5c5a51325903b4a911d4",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "0e94e1e3d332cb682784820fdffb3779",
          2347: "74bfc14c5df3e038210a31225d03acab",
          2365: "cf22f4b18f90c38f390b867ee4e5da3a",
          2398: "a11a82a7bd11db623254235ff48c9e49",
          2466: "b9f81263ca73ea9c6fc88c4c3aa22903",
          2642: "3ce7cb92365ae69b20d1ae402b8df5b9",
          2678: "0d6924ddc0e6999a8f46e499269c1319",
          2864: "fc1e1b4e54b11c4c57fe19526f3098b3",
          3034: "62bc7de0433253cdbc895eace84ba941",
          3197: "2434a87a1c25cea981e468969ac5a870",
          3343: "4699a5558d47694b3e8c0db410ca5d61",
          3370: "bed3784dd2c931a298e15ecbcd58f60f",
          3447: "a2f7f7b0171b39702bf6dd15c88a80ed",
          3475: "de8e96e31a36f1dfbf91200f6ef9fe7a",
          3486: "2ea6fd8b467077ea6280fbdefa149607",
          3697: "b917f17d1b09e9ba9e6722d35516ed7b",
          3855: "ef578f70ae102c7f05f73f0042c6b795",
          3885: "56978a3df87ad4283a0cf0c184d0d822",
          3941: "1d324c29ba195fef703e9a154f64837b",
          4011: "46af6fe7bb31a3077f50dcbd903631d1",
          4018: "15295cdf072370139979a20c45d90801",
          4528: "350db802fccf5ddfb9226e1e61c631cf",
          4621: "a5ae8835bc17a16c88e89fbd2d9fd6ec",
          4700: "6d97c17eb5d0a2d41f8cb563caa1eacc",
          4710: "c195a3b412e2f85bcb6484f00fe57b11",
          4731: "1b9f920b0b52ea1b2fa6623c63687c0e",
          4799: "636f5a7a0d0074414f25b905ce2f0fba",
          4851: "41136e2450508dc68e717dfc5261d4b5",
          4861: "e22edf36d0519f2e2b250b95587d8372",
          4913: "a4318f9c672558ef64485af9c96fe0e8",
          5018: "b938914cb4f66a7207a798b4a5e4c656",
          5136: "d7b3afe9233db4dd580990af73a5ec6c",
          5233: "1b888ca1fe5f93c746b1e60b75bea821",
          5254: "1060eb8c5143730ac51bfa9719c0052d",
          5259: "5b1a2e880c741951c18c19dd61672a75",
          5530: "ec33f715c98cefcf8ddaffefc49e2ce5",
          5639: "237d01600e9c25301cbffe3b950557f2",
          5663: "a3ec4f1949cd446ba89d4f4da207ffc6",
          5705: "02770a2e8a00ff797f7129d5b80d2756",
          5742: "9057f62ad95aef28b59c3240948162c5",
          5830: "50fe6d608581f2e1fe99bf7bd3f378b7",
          5832: "d825222b66d50554406ac1ab4ad71f42",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "0d0e2c6508298add209144033e77615f",
          6280: "f3496fe8984cb047a9598e39a2929900",
          6285: "cb7c7041fc169695b3c25a28bd12c6e5",
          6361: "38abf890612e445935e7f3844b097d2c",
          6507: "86418305b1b54c286f046f46bdea2fb7",
          6664: "81fd6e3a538075aa68890e8865b20d5c",
          6879: "ed93da5b2d824666153ff4efa813a2eb",
          6891: "838b7833ae7463e12c9820774f428554",
          6997: "bfc56eda80877fcf2ee21bdfcd01b545",
          7010: "e4acd3258213fa015877cb8c4ef3199c",
          7073: "b19f873d788c24d1f625f3a5d14f519c",
          7171: "167ce0b3ff177b1d529dfdbc70cc4d21",
          7436: "021818ea4b5ba120cdc4012bbc089842",
          7452: "b88420da9a80024d7281e15f50dc40f7",
          7453: "55137c9f9cb7f1a91136db8bd97397e3",
          7904: "de8330d1b02107ca677fb0a409fe33ae",
          7970: "b804f5e2125408e677b2bcf72b779500",
          8272: "79e7ff80d073812b428949bc58d9c657",
          8337: "24dde759763da768c0840a49a4aa52ad",
          8391: "c0665dde0f063bb7769df148ca788c9a",
          8755: "cf476af5ecc7df927a597aa5bf17bf61",
          8880: "e7e11b07b59ee626ebc73f2c5a624d47",
          8970: "e5e1e98d39d6a922cca976736061d30e",
          9022: "798ba9af52a6f33a22fe4c88479f3362",
          9028: "cafa8dd28145bde7f006e94bc72665bb",
          9126: "847ff4526abc3c7036bd6b3361e8dde8",
          9377: "c95012f6e30c76efcb9dafcec40dcf06",
          9615: "aa34e678c5aabf325b4aacc654eeec7d",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9936: "b53b251c7faa79f9fcace50928141c11",
          9978: "8654fa6fee831ce61a50355a579c495e",
          9990: "b1ea7df3fb1f5488d0d144c371c226ae"
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