! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2ba7acb0-2b22-42cf-8bd9-d26679cc6cac", e._sentryDebugIdIdentifier = "sentry-dbid-2ba7acb0-2b22-42cf-8bd9-d26679cc6cac")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-tv",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, r, f, c, d, n, o = {
            4075: (e, a, t) => {
              (0, t(7387).w)(1)
            },
            7387: (e, a, t) => {
              const r = t(3099).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            5408: (e, a, t) => {
              t(4075)
            },
            3099: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, c = r.length; f !== a && c >= 0;) "/" === r[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + d
              };
              Number.isInteger
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(1149), t.e(2229), t.e(9623), t.e(8222)]).then((() => () => t(7917)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => c
              })
            },
            5136: e => {
              "use strict";
              e.exports = t
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var t = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          var f = Object.create(null);
          i.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(f, c), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          131: "5d040a12f4183714fc3dcba071a05fd6",
          278: "647e1c9bc45017f9843ac026a87cb9bb",
          299: "6a354a5b68306e337db26c90bd86fc89",
          314: "866f8e7850a3ee5e8aab2cc373285ebc",
          662: "83e28b5a8e0bd94217649e10ca85b17b",
          721: "71e7d589d47de25dcb07ea7f73f3a704",
          824: "e9a9f9121fb80c3e284d97049e0dcfd7",
          907: "90f49150728c05afb1894775f3af3e05",
          1054: "325ece38595d21e63ad8894176076eb4",
          1149: "32d51fd82b1a65a31143dc838f4325a8",
          1242: "f6533347fa61fd6e9a195865602059db",
          1822: "e8367142d0b38c295fb25fc4e223e5d0",
          1868: "180164512ee3c72ab0c3db7a6e849ae9",
          2156: "6af038276303f8d56a1fff12aabd185e",
          2171: "c64dfcb79946c62dbba1674736a8691a",
          2221: "dac02d8382169b388f8e24b741b6d296",
          2229: "5a122f2855bc8a261459866d7ae0a64d",
          2243: "80c12ef19c4dff57a82a52765d50b1bd",
          2347: "e4accd5e40a106c980bdefd4d1aafc86",
          2365: "0303801fafa66a60758ecaa9b545d599",
          2398: "f5b204340ddf449b6d0cc43dff4421d3",
          2466: "cf8be2032955c2f7e3d2a48735fa511b",
          2642: "bc696ba8ea74bff17aeb7f5d54cf339e",
          2678: "7acda08fb1cbe43c62a10a1513e6a729",
          2864: "bb411b59f62d95326830f3658668b46d",
          3034: "4d8f8f20f00e3b0d27e5ec4031e25a07",
          3197: "43baa9ee63be579c1aeaf06d97827a27",
          3343: "878364f242fa96c8590ceefd0ebe5867",
          3370: "c12e3eefdd7f666daf69c131ae7ac5a1",
          3447: "35daac728bf7ef4d2be34a09e72582c1",
          3475: "1efc4450060166f58470e2492d59a128",
          3486: "188fe7e2a3c96d17eed7d874cef101e2",
          3697: "264398b97057c75b78e450fdd15e1cb8",
          3885: "1a2edbe0853a6f5eb2b9a354676a863c",
          3941: "1de2ca9c40193b8e35ae2fb4d9a6d1f5",
          4011: "ac2808547bac26e545356127c3f79e26",
          4018: "811dcb2753e06ab75ba789c4c3a2410c",
          4528: "7039eb8e6e7817261833b1bb0ffe99ee",
          4621: "184a4ed86b4bc92ac392cb463867e57f",
          4700: "00da1798a0b5001374f08a197462f26e",
          4710: "d11c0ff43fc7f0b6c5d5e22f648400e9",
          4731: "f00d95b946f0fc3b9395e66925974c30",
          4799: "f1d4969ba1fe6aa9e92097664533cc18",
          4851: "7ce03647a80509084e5c5d5617df7937",
          4861: "80966747a558211d05880a9abed226a8",
          4913: "9af63c90a6b6c2f10dcf72ab55edf14e",
          5018: "a9165fe04d557108e1474c70df8bcda6",
          5233: "3a437d25a35b6605ef1b43bc8a1b666e",
          5254: "cd2e2c1793e762af8136ac4891be86a4",
          5259: "cdc70bff6dc9b469b85a6b09f610d500",
          5310: "bf9e886dda5a27134880f1e788b61937",
          5530: "638b08e6fdab10777698458af63fc675",
          5639: "55a021efa0172e4bdeb6cb108c31048e",
          5663: "272c02b05aed44d525d4b7058bffcbe5",
          5705: "d482613352cae05c05242ecf85c2d720",
          5742: "996e259f45fd49c1b5e3eb1bc398cd47",
          5830: "ac082fd8565a5c80d140e6430bad992f",
          5832: "2502dd02ad02570429e041cce549ccfb",
          6267: "d150504b199bced53c0860021b78f278",
          6280: "c7b0272d2a0749ae9aaaac2c421e75ab",
          6285: "8ea0a8bd1535f9a9c61bc563a84e20b7",
          6361: "5e964aae5d832ac4f118c071cb69dfe9",
          6664: "80e2811b2fc56ade2e3db8edb1ce8a6b",
          6879: "ce3c5111c22f75b4382ad6f209f5284f",
          6891: "6dba7a25e6add795418127506cbe6cfe",
          6997: "72258554e9c84e4ec44e0962ff0e92d0",
          7010: "007465a6d34296f8b5eac663e52198c9",
          7073: "2fd076fd634fabd2afe6451d3fa9225e",
          7436: "01de66a04915c43fbf58aa59939eab77",
          7452: "53b943cea9b9ece5f45a4ecf60b70ab4",
          7453: "2c9689dc8d5e52213116a913fc89452b",
          7970: "cbc35c5775b4bbe1517077682ff978dd",
          8222: "8f05352f5b24a7a804e5a6cf9f3c909c",
          8272: "df876fda8cb562ed26c7ab261fc5d9bb",
          8391: "54e4393481033dfa9338216baf8f5fed",
          8755: "d63d179e0d0bf6ef19124feafbffb572",
          8880: "21db1c3c4b0a9d5b10cfd566da8cdbd2",
          8970: "95ef65e80c42e9756784f6a82389b111",
          8978: "41ed15437a36fdc99ed98fb8ccdf25ae",
          9022: "02a6836c0641043477c3f47daf45211e",
          9028: "b12ebc8b4f1893125a4de0ed4e9574a5",
          9126: "cc51873dc51f747a815a526c61a43a8b",
          9377: "5fcbd1dc8e90d7835970e4c0d21f51e5",
          9615: "95273c0ad2bb6e21fc119bb40b3157d5",
          9623: "01ae05447651e86a4abc9f8beca19abb",
          9936: "1c0fee5f86e193ea2d24e587af90773e",
          9990: "ac624965a1ffcec0c6fae60700ae658f"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-gta-tv:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  d = s;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.setAttribute("data-webpack", c + t), d.src = e), f[e] = [a];
            var l = (a, t) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], d.parentNode && d.parentNode.removeChild(d), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), n && document.head.appendChild(d)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), d = {
          8222: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(d, e) && d[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, d, n, o) => {
                  try {
                    var b = e(t, c);
                    if (!b || !b.then) return n(b, d, o);
                    var i = b.then((e => n(e, d)), f);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                d = (e, a, f) => c(a.get, r[1], t, 0, o, f),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, ((e, a, t) => e ? c(i.I, r[0], 0, e, d, t) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var c = i.S[t],
                d = "@rockstargames/sites-gta-tv",
                n = (e, a, t, r) => {
                  var f = c[e] = c[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : d > n.from)) && (f[a] = {
                    get: t,
                    from: d,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5705), i.e(2229), i.e(5310), i.e(9623), i.e(8978)]).then((() => () => i(5310))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(4018))))), n("react", "18.2.0", (() => i.e(3447).then((() => () => i(3447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(5136);
                  if (!f) return;
                  var c = e => e && e.init && e.init(i.S[t], r);
                  if (f.then) return o.push(f.then(c, a));
                  var d = c(f);
                  if (d && d.then) return o.push(d.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[t] = Promise.all(o).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                r = t[1] ? a(t[1]) : [];
              return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
            },
            a = (t, r) => {
              if (0 in t) {
                r = e(r);
                var f = t[0],
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, n = 1, o = !0;; n++, d++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (d >= r.length || "o" == (i = (typeof(b = r[d]))[0])) return !o || ("u" == s ? n > f && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != t[n]) return !1
                      } else {
                        if (c ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= f) return !1;
                    o = !1, n--
                  } else {
                    if (n <= f || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < t.length; d++) {
                var p = t[d];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, f) => {
              var c = t[r];
              return (r = Object.keys(c).reduce(((t, r) => !a(f, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    c = (typeof f)[0];
                  if (r >= t.length) return "u" == c;
                  var d = t[r],
                    n = (typeof d)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && f != d) return f < d;
                  r++
                }
              })(t, r) ? t : r), 0)) && c[r]
            },
            r = (e => function(a, t, r, f) {
              var c = i.I(a);
              return c && c.then ? c.then(e.bind(e, a, i.S[a], t, r, f)) : e(a, i.S[a], t, r, f)
            })(((e, a, r, f, c) => {
              var d = a && i.o(a, r) && t(a, r, f);
              return d ? (e => (e.loaded = 1, e.get()))(d) : c()
            })),
            f = {},
            c = {
              2229: () => r("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(3447))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(4018))))),
              5966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(5705), i.e(5310)]).then((() => () => i(5310)))))
            },
            d = {
              2229: [2229],
              8222: [5966],
              9623: [9623]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(d, e) && d[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var t = a => {
                  f[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var d = c[e]();
                  d.then ? a.push(f[e] = d.then(t).catch(r)) : t(d)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            1970: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2229|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var c = i.p + i.u(a),
                d = new Error;
              i.l(c, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, r[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, c = t[0],
                d = t[1],
                n = t[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in d) i.o(d, r) && (i.m[r] = d[r]);
                n && n(i)
              }
              for (a && a(t); o < c.length; o++) f = c[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(5408), i(5819)
      })())
    }
  }
}));