! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4977936b-6559-44a4-a5b1-e3d36ad1ff9f", e._sentryDebugIdIdentifier = "sentry-dbid-4977936b-6559-44a4-a5b1-e3d36ad1ff9f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, f, d, c, n, o = {
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
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            5819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(1149), r.e(2229), r.e(9623), r.e(8332)]).then((() => () => r(3863)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
              })
            },
            5136: e => {
              "use strict";
              e.exports = r
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          131: "4d2070494fa2e007592bf2d8fe5a1f5b",
          278: "47ce9ca45e3febd1d0f9dc47bcde8bd6",
          299: "70fdaceb99fe69940017c3b4045c032e",
          314: "0d77cf0d9ac1b02d6e49c04163ea4768",
          662: "06de30640ec01c6bae19af1c7a6ac51c",
          721: "a5f0580aca3831ff81d97cadd3bb6ebb",
          824: "e6a9257961cd7f390f55c0aa4d3b0cc8",
          907: "c1ce7497e1822079cf5729bf37af95bd",
          1054: "8319292ba4c9bf033d7a09c46d547c9f",
          1149: "e116268b195cbc7ce9f5f949ee5b8c5e",
          1242: "c233598e944bd1a6d43388eb04707b71",
          1822: "73bad6a618eb2a5d382185cab507de82",
          1868: "5385d37e8abb89721be8c42a8191e3ae",
          2156: "0f8ec3341a2fc6b77aaaaacaf86bea76",
          2171: "b19d0fff521ce55a67374d0704dfd18c",
          2221: "b4020319ea4a432beb36f52cd9abb91e",
          2229: "ba433af05851c9476cd0989e1b4e45d7",
          2243: "bfbeadd068a1f00b27f4cb2016208d4b",
          2347: "479f68c1ecd3f0388213441f77da0a07",
          2365: "73ceb3aab67188ea9954a0932ff52708",
          2398: "0237eb081f237aa1277eac2d74fbbd64",
          2466: "08cdc47129f19361e30c4ecb655fd0c3",
          2642: "92617e2a97a02d2711b1cbd1c54ef1bc",
          2678: "86a473f3626023a372630b11018ec067",
          2864: "1d0f8fd6278ed1cafdb440c9b7d0eac3",
          3034: "4d06fdecbdd88237b30a2e3f32428c29",
          3197: "822a301b09ba06d5138489811e5aba67",
          3343: "d3dec56671600715f77fb97b905789ab",
          3370: "353d4c9b5ff82c30749dfd9f084fb5c4",
          3447: "53888dfda65cabf8923ab4951704f334",
          3475: "95ffcb647b7e4ebb4ae6017a5c74ba8e",
          3486: "198d1fd8b891cdba3ed8269a6fd0bf0b",
          3697: "ed7fd24c3636bab4940c245ed4082258",
          3885: "87d7a55db75479da77ae414cf3c05951",
          3941: "d0a32391ff91636dfda6fd159e46d55d",
          4011: "bbdbd9c0a7bf8f6d6f3c3fe85d5449e3",
          4018: "e317c11e51206ec20bcb8b7bd9a6ae46",
          4528: "2ae2aab3a8b47415e9338b4e4907c92e",
          4621: "a812965b5877a152b496204ae6388caf",
          4700: "e0129c2e2958de562bca1752d070d076",
          4710: "e443155cec048d296933ad6816814b91",
          4731: "8cf6463e2070526d88aacdfc651b1597",
          4799: "2595cdc80e2248ba4488209ca3c550c0",
          4851: "24020d657fa3457e8f2ff3b130811e1f",
          4861: "14717b0a992133d2daf0099f640d1e44",
          4913: "f85b574322448fb2370ccebb0e673706",
          5018: "31f83cba444ca733c040d34d76a4a63e",
          5233: "b1a900c3f160b8a3d1d1392ac36a53d7",
          5254: "ffd413e59b0ac62f8291f1b61941aaeb",
          5259: "b77475b6d7b7b875de15174f63d9dd1b",
          5310: "8b4478b18ca551e4e2294c707690d3e6",
          5530: "034293220b9325f91ac53d2f3d894e87",
          5639: "08fb1e27c1c3a16b8fd917e3dc8d320e",
          5663: "d59999a9e762e5e4e28febd9aeadef06",
          5705: "2a9e6331af9ebb6176228fad5c9d23bc",
          5742: "137933dfd7e181d2905e49df58d93153",
          5830: "eb6fcbc8751d6886fc696e4e60192ddb",
          5832: "00dda73c035342cc83dcc70fa4a8d610",
          6267: "2a8ad2f376a5679bdaf7617b5da6b287",
          6280: "b35673dbb130cb0ad66312a3f29eda12",
          6285: "f15d5a5a52330b64f41bab2f7d980b4d",
          6361: "a54e108f471fc61f75b4ce90ea6cbb58",
          6664: "d53533305bffb3387687774d133a9e44",
          6879: "7d21f816df3e4a3348093fa4aa97de7f",
          6891: "de290399cb136a64f07a13bbf94085bd",
          6997: "4aa163b2ccb7f3d6a26eb2c8da953451",
          7010: "1ffe248c8a05937a705e496d652ece69",
          7073: "3908b4d93ebc7aa875012a266e15f2ce",
          7436: "d9f978465dbdff810f0d4db2859d77c0",
          7452: "a1f12c651de1b728c44d594356f78e59",
          7453: "3387db861337db2dcbe3d782d448b40f",
          7970: "b5307037af6a3094325895b45775400b",
          8272: "52bb667ecc256a6de7fdc0a2ff1545df",
          8332: "f0007d51d5bada5eb2f704d48461bcf7",
          8391: "02933f538b755c63df8fe2b382a3fd74",
          8755: "409cdf1b998d2abc0f2c387e77d5ef65",
          8880: "22d8bee99ef94d166f553c5676655e3e",
          8970: "6695f65d8f0b203c4c41946d5fc7250b",
          8978: "ea46248b6553446859c7c793579cd695",
          9022: "3af028495df311b552b94db4a6b21356",
          9028: "96949df9b4b8f37db18b76b851178c3c",
          9126: "bfdca08e45f5cafb5c6ff58d5b9cc9b7",
          9377: "7d9ec01c4d4e23afb4a3659947fb53a4",
          9615: "0ac7beccdbcd33dbfa30312a7d33cffd",
          9623: "8e1462974114adaaae9f763ccc3452cf",
          9936: "9eeb1238f5278f737889c7aa23993d5e",
          9990: "c39e383e09edf1e989640ef77991f790"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-rockstar-tv:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + r), c.src = e), f[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), n && document.head.appendChild(c)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          8332: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, ((e, a, r) => e ? d(i.I, t[0], 0, e, c, r) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                c = "@rockstargames/sites-rockstar-tv",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5705), i.e(2229), i.e(5310), i.e(9623), i.e(8978)]).then((() => () => i(5310))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(4018))))), n("react", "18.2.0", (() => i.e(3447).then((() => () => i(3447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(5136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (f.then) return o.push(f.then(d, a));
                  var c = d(f);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
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
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != r[n]) return !1
                      } else {
                        if (d ? b > r[n] : b < r[n]) return !1;
                        b != r[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var d = r[t];
              return (t = Object.keys(d).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && d[t]
            },
            t = (e => function(a, r, t, f) {
              var d = i.I(a);
              return d && d.then ? d.then(e.bind(e, a, i.S[a], r, t, f)) : e(a, i.S[a], r, t, f)
            })(((e, a, t, f, d) => {
              var c = a && i.o(a, t) && r(a, t, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              2229: () => t("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(3447))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(4018))))),
              5966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(5705), i.e(5310)]).then((() => () => i(5310)))))
            },
            c = {
              2229: [2229],
              8332: [5966],
              9623: [9623]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(r).catch(t)) : r(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            5483: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, d = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(5408), i(5819)
      })())
    }
  }
}));