! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "fb7a0cd8-03e6-4d22-b1aa-b6b4684c7842", e._sentryDebugIdIdentifier = "sentry-dbid-fb7a0cd8-03e6-4d22-b1aa-b6b4684c7842")
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
        var e, r, d, c, f, n, o = {
            9293: (e, a, t) => {
              (0, t(1789).w)(1)
            },
            1789: (e, a, t) => {
              const r = t(569).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            3358: (e, a, t) => {
              t(9293)
            },
            569: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, c = r.length; d !== a && c >= 0;) "/" === r[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = r.slice(0, c + 1);
                return t.protocol + "//" + t.host + f
              };
              Number.isInteger
            },
            5819: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(2598), t.e(2229), t.e(9623), t.e(4729)]).then((() => () => t(7146)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                c = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
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
          var d = Object.create(null);
          i.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, i.d(d, c), d
        }, i.d = (e, a) => {
          for (var t in a) i.o(a, t) && !i.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, t) => (i.f[t](e, a), a)), [])), i.u = e => "js/" + {
          131: "5feec3dcefade92e78fd7db9197b014f",
          278: "d32dd7c4020fb470edc84fccbafa5b7b",
          299: "49beed2c1afcbfa4a722bc795c1d1da5",
          314: "1af52d6d9de027c9d4c0a658451aaffe",
          662: "25a89d37e9a5cae47260068409bc2d77",
          824: "d59eaca0a21471e817283ab7a9513341",
          907: "11a16dd2cb16135cab6c5c19b7b1e159",
          1054: "166a37a9fc4aa389426129bec63e6028",
          1242: "4147094f80918378f4b7cfb69761d961",
          1604: "7642aecab5d192fad68c77dcc91200b8",
          1822: "ed770838ce8e9e7f5a452859cf2972ef",
          1868: "7254fceef019ba61495bc52d4fa0144a",
          2156: "a52a56150c9f095a95f371110373195e",
          2171: "f102a6c4494eb3e4030f0870f79ce209",
          2221: "cabf34161953108abd7b82a78c64d97c",
          2229: "ba433af05851c9476cd0989e1b4e45d7",
          2243: "9c06c95047b6b96fe48db8f141f7ff60",
          2347: "e9813e0c25459d790a199acdeb67a23c",
          2365: "9020e93ed02fb174c0f2862d7e170994",
          2398: "db77dbceee9e824cbe8eed1e7c437936",
          2466: "023b3ecba0bddc1825fb78c299887fb4",
          2598: "92dbcb116e870175c0adf8407ce125a7",
          2642: "50cc9df891e104b96da961c6dccc1731",
          2678: "fd6b5f2931534494ae27a950e3224f30",
          2782: "26e2bbf2eff1c50e07bd9b949821db23",
          2864: "9b41f001952af85180478e8740dc2216",
          3026: "f299b3e5e5653186ab26af8b1a5a7294",
          3034: "413a1a8bcc04b71eec363cf68225b638",
          3197: "a323356f93ffe092294c7e3ef97bc845",
          3217: "8253dd666d57e6ad11d95be6b11efe31",
          3343: "bb2978bf38ecb1c5fbb46d3a8b508d69",
          3370: "68acb9aa85c21baf93b586b1512526a9",
          3475: "277364d7fd7d838544b2065530d4e7e1",
          3486: "c6412b88d4888aecf36caaabb08aca64",
          3697: "b02ed9a9669d0ff4436724e08f940a0a",
          3885: "c6e0a7701d6aae2519db2e2638eefc80",
          3941: "8afbcdd28a16ec459b3889a3acca26b0",
          4011: "e463daf7b5beb233e4bbb7c97c3f351f",
          4528: "36564aa8c106971594ac69389d32172c",
          4621: "9bbb3ad6f176696652a9dab4ca94b2ee",
          4700: "c80578d61c4446bfd974d2bc58abfeb5",
          4710: "342ffcba74c1fa3b0ddf9e6426bdee66",
          4729: "950bd875902e4c770b1e7a73431e0bb7",
          4731: "b7eb8122a39eabd1083e201e7701ba5b",
          4799: "74e146ee3d599c9b024d504ae447ea9f",
          4851: "3108fd6eaeb8ea3bf060b4b268d5d0c9",
          4861: "fb3a7c234492ff3ab9c308feb9ac295e",
          4913: "ce2f89a0f683169d575b275c314ed027",
          5018: "fad11b4e85a0c186c14aaee912c6c17e",
          5233: "c5fd319696e3fcbdefed79ee0b0930f9",
          5259: "f16d9fa6510e6e1a9e5bc7fd0e5465ba",
          5530: "245f1e91949e5e3d0ec009db06e7415d",
          5639: "2884b2094a02b23729534373c0baa19c",
          5663: "0106cbf732518845b4df22855ffa5cb3",
          5742: "c8f6c06f2563b9662041595a1a16b01f",
          5830: "307daa0bec4989e952008656f769e1a1",
          5832: "0c2b61aed1df6721d0f881888379dc30",
          6267: "c77e2649d3c82d2695ab560ccb0ecc25",
          6280: "a4d75dfdeeb453da6f732c7adbba8e38",
          6285: "6de6340786c203e224b5b823d86b0ccb",
          6361: "bccbb94970f7e338065bc94168b1549d",
          6664: "612d0862c4f51913f9b6abe689b2d446",
          6832: "03b867a6678ebfc66fdb59cb42f09053",
          6879: "48c631617030eed8388950a00a3856cd",
          6891: "9db37bdee719c21e3a8b6e42f1f75b4e",
          6997: "92532c2af629e6e97cbcdc8d78eb145a",
          7010: "06124f7bb19d65d4a88b1889c999f929",
          7073: "47bf70ad4ff823ad562a4731c1711241",
          7436: "992a8b1f37903c479e8c471d2fa9ff88",
          7452: "3e62ae36a12ca86af5a89fe3fb2cb621",
          7453: "b7190b156e7b00751e3856a3b9557fed",
          7970: "bc036262d891eb102de73fe42181ec1d",
          8272: "bff7e1965b9b54d542f7e9c2a82d954e",
          8391: "33b34f48c8219f8e5c885717bbe85408",
          8755: "12f3a9b2f7b017d5df245f4693677ab8",
          8880: "65c58064b5848acca998cb28c84f3d4d",
          8970: "7383283fe33c57d27ec1a698b0fbd4ed",
          9022: "6665b51601aac8ac61776e73e1c4233d",
          9028: "f2799d9be5382e1b74eb35dd48601ff2",
          9126: "b332e07245757f5abade8d2187ab7fe0",
          9320: "553ce2f4978d726ddaf993e7d9b6b147",
          9377: "a3c3dd96aa787dfb43c9b3a55febe81c",
          9550: "1435c6937c848179bda297dec3e733ec",
          9615: "0d97c0fd9a83402360d995d8e6affbc4",
          9623: "8e1462974114adaaae9f763ccc3452cf",
          9936: "16f28b5a23712503a69df8507404e9de",
          9990: "ef79c8a55c37470224f616480a22fd40"
        } [e] + ".js", i.miniCssF = e => "css/7269734ea624ef7181b23ac67b218af9.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-rockstar-tv:", i.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == c + t) {
                  f = s;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, i.nc && f.setAttribute("nonce", i.nc), f.setAttribute("data-webpack", c + t), f.src = e), d[e] = [a];
            var l = (a, t) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var r = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), r && r.forEach((e => e(t))), a) return a(t)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), n && document.head.appendChild(f)
          }
        }, i.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          4729: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(f, e) && f[e].forEach((e => {
            var t = i.R;
            t || (t = []);
            var r = n[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), i.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                c = (e, t, c, f, n, o) => {
                  try {
                    var b = e(t, c);
                    if (!b || !b.then) return n(b, f, o);
                    var i = b.then((e => n(e, f)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                f = (e, a, d) => c(a.get, r[1], t, 0, o, d),
                o = a => {
                  r.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(i, r[2], 0, 0, ((e, a, t) => e ? c(i.I, r[0], 0, e, f, t) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              i.o(i.S, t) || (i.S[t] = {});
              var c = i.S[t],
                f = "@rockstargames/sites-rockstar-tv",
                n = (e, a, t, r) => {
                  var d = c[e] = c[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : f > n.from)) && (d[a] = {
                    get: t,
                    from: f,
                    eager: !!r
                  })
                },
                o = [];
              return "default" === t && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(2782), i.e(2229), i.e(3026), i.e(9623), i.e(9320)]).then((() => () => i(3026))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(1604), i.e(2229)]).then((() => () => i(1604))))), n("react", "18.2.0", (() => i.e(3217).then((() => () => i(3217))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var d = i(5136);
                  if (!d) return;
                  var c = e => e && e.init && e.init(i.S[t], r);
                  if (d.then) return o.push(d.then(c, a));
                  var f = c(d);
                  if (f && f.then) return o.push(f.catch(a))
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
                var d = t[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, n = 1, o = !0;; n++, f++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(b = r[f]))[0])) return !o || ("u" == s ? n > d && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != t[n]) return !1
                      } else {
                        if (c ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, n--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < t.length; f++) {
                var p = t[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, r) : !u())
              }
              return !!u()
            },
            t = (t, r, d) => {
              var c = t[r];
              return (r = Object.keys(c).reduce(((t, r) => !a(d, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    c = (typeof d)[0];
                  if (r >= t.length) return "u" == c;
                  var f = t[r],
                    n = (typeof f)[0];
                  if (c != n) return "o" == c && "n" == n || "s" == n || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  r++
                }
              })(t, r) ? t : r), 0)) && c[r]
            },
            r = (e => function(a, t, r, d) {
              var c = i.I(a);
              return c && c.then ? c.then(e.bind(e, a, i.S[a], t, r, d)) : e(a, i.S[a], t, r, d)
            })(((e, a, r, d, c) => {
              var f = a && i.o(a, r) && t(a, r, d);
              return f ? (e => (e.loaded = 1, e.get()))(f) : c()
            })),
            d = {},
            c = {
              2229: () => r("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(3217))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(1604))))),
              5966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(2782), i.e(3026)]).then((() => () => i(3026)))))
            },
            f = {
              2229: [2229],
              4729: [5966],
              9623: [9623]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(f, e) && f[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!n[e]) {
                var t = a => {
                  d[e] = 0, i.m[e] = t => {
                    delete i.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete d[e], i.m[e] = t => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var f = c[e]();
                  f.then ? a.push(d[e] = f.then(t).catch(r)) : t(f)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              5483: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                4729: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  d = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (f = t[r]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (r = 0; r < c.length; r++) {
                      var f;
                      if ((d = (f = c[r]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", c.onerror = c.onload = t => {
                    if (c.onerror = c.onload = null, "load" === t.type) r();
                    else {
                      var f = t && ("load" === t.type ? "missing" : t.type),
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, c.parentNode && c.parentNode.removeChild(c), d(o)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
          var e = {
            5483: 0
          };
          i.f.j = (a, t) => {
            var r = i.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(2229|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var c = i.p + i.u(a),
                f = new Error;
              i.l(c, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    c = t && t.target && t.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, r[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, c = t[0],
                f = t[1],
                n = t[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (r in f) i.o(f, r) && (i.m[r] = f[r]);
                n && n(i)
              }
              for (a && a(t); o < c.length; o++) d = c[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(3358), i(5819)
      })())
    }
  }
}));