! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "32cd3386-d04c-4242-baca-999ac37d1681", e._sentryDebugIdIdentifier = "sentry-dbid-32cd3386-d04c-4242-baca-999ac37d1681")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-trilogy",
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
        var e, r, f, d, c, o, n = {
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
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(7127), t.e(8742), t.e(2229), t.e(6682), t.e(3054)]).then((() => () => t(3054)))
                },
                f = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                d = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      f = t.S[r];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => f,
                init: () => d
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
          return n[e].call(t.exports, t, t.exports, i), t.loaded = !0, t.exports
        }
        return i.m = n, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
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
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          131: "0226ccd80c6af6ed2ab03bc4420b6d24",
          278: "8f2ec89d9cf1eed906b04f75bfd004a1",
          299: "5edd0c4802a6b8a5004cb46200de4ba6",
          314: "a29e4b096be7121d834bbb210c618039",
          662: "cd105dd917ce7be9f1cdadee32775ca9",
          721: "2286a48d89c2c779c8a2c006e3a0c6a9",
          824: "f7414d1621230a4a5e9226b5f1b48462",
          907: "ade28021734a54aff32c4450c9f42c59",
          1054: "7c27b057d3350401dfc05898bec34eae",
          1074: "928938707dfecf3336341f20b0efdac1",
          1242: "45cd215b56053b58e04277fb18fa9835",
          1299: "31e85a05b63adcd050154ab5d386261c",
          1673: "5b601a9a2b3b21de2105c67d3063b26e",
          1822: "5198fc7d94ccd8be1b96ef10a6bbebca",
          1868: "062f38a3bb5003688d439396a1dfb18f",
          2024: "b1d326e7490063ab3d212e0c35b1c6e7",
          2156: "5abace17d7c8d1a3904e48e456643e6b",
          2171: "4b4430fe32f649d2f65c15f555952c34",
          2221: "2bc2f64c340907794ccec875cce4b25c",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "74a82274d9c2e8046b36f46555d5d4ac",
          2347: "0d1512265e8d842976143f602d7eb4b6",
          2365: "3b7855181cdb3e7e3893cfa9c889dfe4",
          2398: "e782a83bd933e1daf3a9c15d0dc9ba8e",
          2466: "c4a8012b88b9c166d0f61e50f8be35e3",
          2642: "b4c9030515601863f3aeaab60689337a",
          2678: "3515d6b432b01757dc7c1a619819a201",
          2864: "26faea4a863bf583b3d2e5b947ec0089",
          3034: "bc0d72b6c9ece497511ff5c71de35d29",
          3054: "4596151e0a11f2d94ee234600b4023be",
          3197: "4b6f9abf89a7a43b09a1b565a088dd96",
          3343: "3082b149cc4d51c651e58657db5526ee",
          3370: "a0d5e54be230416a412998a2f1a9befe",
          3447: "d7451d012ed13d26bfb6372c29f19fb1",
          3475: "1bac4bf6863771831774620d25a4efe7",
          3486: "13d909636cbff233a11fa4921c0be33e",
          3697: "12a8ca0f043a2123487f5d53a9da98a3",
          3885: "1eca7bbbcc1d2c818261632e2592876d",
          3941: "2b9a27811f67109f3268c7b664099aba",
          4011: "ca088fea985fb2e686c1c203a7b10276",
          4018: "4bed2cc78cfbd20430238cb0764cb167",
          4054: "cfde627e5a4a812410e3f0f39eb9e42b",
          4528: "b08a59c637923725ae10dee8570702d4",
          4621: "3d33cf15fade9042976706d36d42b058",
          4700: "a5238cf274d68731ce7e9edd55252715",
          4710: "a2107c2c23d020a08d27b26ffee95c48",
          4731: "223ee14be04a752fca45fe7897d368b0",
          4799: "8cb64787174edf6c29be1476055cbe70",
          4851: "44f4394cf4d42714e2345eb042c94fd3",
          4861: "5adf2f6fc23a1219336c523fe3b35a00",
          4913: "d59940ada88b646135e3b292995d5079",
          5018: "c6b8eed86c442156fec52b5ad0f8a828",
          5233: "7e0f3258af6b007f4b7f853c893e550f",
          5254: "5694ac1a265bea7525ac0d0f939a2a64",
          5259: "33319451f04feca14ce803c8a333c55c",
          5530: "e2418659a0f4500ef2a14201d50aa01e",
          5639: "cc56bcc848bb02beef86b84efd29469a",
          5663: "dd65f5a235a72f33b7f1cae9bf39e5ab",
          5742: "560c2f92ac549db0e0bc1d4242ccd1ec",
          5830: "524f14dfe3c0fd3a89afa9ba2976f441",
          5832: "ebacb0441ecdc9e5d7a6700308646606",
          6267: "470568319b8e4a050abcfc7df2b52817",
          6280: "3a9a7d8821f197a5fe8c3e746491ae39",
          6285: "e04b0e06f561e50f7c3387543a507360",
          6361: "d3990d3715c5761cf23a975aa683a7d6",
          6664: "0e9027e07bb84ec996bdf6165f926c16",
          6682: "280b2d9b2c3b1ddf6883b5f623d73313",
          6879: "a95c93ae4915c440c746476c97be2ba2",
          6891: "2876475ddae825b76ec8b35462235b30",
          6997: "77ad60911f0469e0e6fb04c2e512fa5b",
          7010: "6eb5b6066814c5be68fa6b3212f037e0",
          7073: "69cccae4d79e7310b395ef8e5736a65a",
          7127: "4dfb279d43a25e1babb690cb0cf93ab0",
          7436: "9a06f26cc1b327a0010e874657919ac7",
          7452: "44c61b235fd3c069acd82e183f35736b",
          7453: "318f9c53b4d24732e457fb75c642f7a5",
          7970: "e4934a638dd7cc03a21cbb0a85459cbc",
          8272: "246d5fd55714292f1af4cbb42ff63733",
          8391: "aa34ea5153256ab33975d7d5b8cbd0bd",
          8742: "e982575826bfd50ebfc3ad28cef57483",
          8755: "afdb9ceb7bb22f1016fc4a3a27982e41",
          8880: "174592360d370f07c905e9330347a05e",
          8970: "b1712794e8835a61415e0076d2429669",
          9022: "23de30741d15a609888057eabeb444ff",
          9028: "1366816d0c1641269e3215e0bfe4e1ab",
          9126: "80770b76cb97437ce3498932354b2c92",
          9235: "f027fe334c7598eaa60169f5ecac4511",
          9377: "0e485517092cef8bc6e28160527a4fc0",
          9615: "6101f4546c0144700a860e2fd92f91ac",
          9936: "4c394d4ddb52f7e819f488a3677fb298",
          9990: "6ffc943d4443886a81c9e5165eceb960"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-gta-trilogy:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var s = n[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
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
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          3054: [1879]
        }, o = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                d = (e, t, d, c, o, n) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return o(b, c, n);
                    var i = b.then((e => o(e, c)), f);
                    if (!n) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, r[2], 0, 0, ((e, a, t) => e ? d(i.I, r[0], 0, e, c, t) : f()), 1)
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
              var d = i.S[t],
                c = "@rockstargames/sites-gta-trilogy",
                o = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    o = f[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (f[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(5950))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(7127), i.e(2229), i.e(6682)]).then((() => () => i(8267))))), o("framer-motion", "7.10.3", (() => Promise.all([i.e(9235), i.e(2229), i.e(1299)]).then((() => () => i(1616))))), o("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(4018))))), o("react", "18.2.0", (() => i.e(3447).then((() => () => i(3447))))), o("usehooks-ts", "2.9.1", (() => Promise.all([i.e(1074), i.e(2229)]).then((() => () => i(1074))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(5136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (f.then) return n.push(f.then(d, a));
                  var c = d(f);
                  if (c && c.then) return n.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), n.length ? e[t] = Promise.all(n).then((() => e[t] = 1)) : e[t] = 1
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
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, i, s = o < t.length ? (typeof t[o])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !n || ("u" == s ? o > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (o <= f) {
                        if (b != t[o]) return !1
                      } else {
                        if (d ? b > t[o] : b < t[o]) return !1;
                        b != t[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || o <= f) return !1;
                    n = !1, o--
                  } else {
                    if (o <= f || i < s != d) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < t.length; c++) {
                var p = t[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, f) => {
              var d = t[r];
              return (r = Object.keys(d).reduce(((t, r) => !a(f, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var f = a[r],
                    d = (typeof f)[0];
                  if (r >= t.length) return "u" == d;
                  var c = t[r],
                    o = (typeof c)[0];
                  if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  r++
                }
              })(t, r) ? t : r), 0)) && d[r]
            },
            r = (e => function(a, t, r, f) {
              var d = i.I(a);
              return d && d.then ? d.then(e.bind(e, a, i.S[a], t, r, f)) : e(a, i.S[a], t, r, f)
            })(((e, a, r, f, d) => {
              var c = a && i.o(a, r) && t(a, r, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
              2229: () => r("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(3447))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(4018))))),
              236: () => r("default", "usehooks-ts", [1, 2, 7, 2], (() => i.e(1074).then((() => () => i(1074))))),
              1788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(5950))))),
              3582: () => r("default", "framer-motion", [1, 7, 5, 1], (() => i.e(9235).then((() => () => i(1616))))),
              5966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => i(8267)))
            },
            c = {
              2229: [2229],
              3054: [236, 1788, 3582, 5966],
              6682: [9623]
            },
            o = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(f, e)) return a.push(f[e]);
              if (!o[e]) {
                var t = a => {
                  f[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                o[e] = !0;
                var r = a => {
                  delete f[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(t).catch(r)) : t(c)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            7060: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (2229 != a) {
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }), "chunk-" + a, a)
            } else e[a] = 0
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                c = t[1],
                o = t[2],
                n = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                o && o(i)
              }
              for (a && a(t); n < d.length; n++) f = d[n], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_trilogy = self.webpackChunk_rockstargames_sites_gta_trilogy || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i.nc = void 0, i(5408), i(5819)
      })())
    }
  }
}));