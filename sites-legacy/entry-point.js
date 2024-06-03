! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5c7143eb-4a17-43af-8cb1-7d0078ab71f5", e._sentryDebugIdIdentifier = "sentry-dbid-5c7143eb-4a17-43af-8cb1-7d0078ab71f5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/modules-core-videoplayer", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    c = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
    value: !0
  }), Object.defineProperty(c, "__esModule", {
    value: !0
  }), Object.defineProperty(d, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(t) {
        r[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        a[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        o[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        n[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        c[t] = e[t]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(t) {
        d[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, s, f, i, l = {
            54364: (e, t, r) => {
              (0, r(47284).G)(1)
            },
            47284: (e, t, r) => {
              const a = r(87984).Q;
              t.G = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            93824: (e, t, r) => {
              r(54364)
            },
            87984: (e, t, r) => {
              t.Q = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var c = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            15392: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => Promise.all([r.e(544), r.e(792), r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(669), r.e(784)]).then((() => () => r(18784))),
                  "./index": () => Promise.all([r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(776)]).then((() => () => r(61880))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(544), r.e(179), r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(683), r.e(669), r.e(460), r.e(900)]).then((() => () => r(44900))),
                  "./tina": () => Promise.all([r.e(179), r.e(664), r.e(616), r.e(504), r.e(768), r.e(420), r.e(188), r.e(683), r.e(460)]).then((() => () => r(6460)))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            },
            33864: e => {
              "use strict";
              e.exports = r
            },
            50800: e => {
              "use strict";
              e.exports = a
            },
            81128: e => {
              "use strict";
              e.exports = o
            },
            14472: e => {
              "use strict";
              e.exports = n
            },
            88428: e => {
              "use strict";
              e.exports = c
            },
            9344: e => {
              "use strict";
              e.exports = d
            }
          },
          u = {};

        function b(e) {
          var t = u[e];
          if (void 0 !== t) return t.exports;
          var r = u[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return l[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = l, b.c = u, b.y = t, b.amdO = {}, b.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return b.d(t, {
            a: t
          }), t
        }, b.d = (e, t) => {
          for (var r in t) b.o(t, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((t, r) => (b.f[r](e, t), t)), [])), b.u = e => "js/" + {
          61: "976253e4590827333659b85f0efb1b36",
          88: "28887b14a6b2637e25abe590f7da6d8e",
          100: "4d11b71f0218b218b38c85c6502a29db",
          132: "e95b6fafe70bc4e82ed1a873891728e2",
          164: "71761ed3f8a075f76e77da4730875c7b",
          179: "3817c5f81b98eccd6f74763db3627168",
          188: "d5211057d0929f1c83d964267ed4d488",
          196: "2ae1762dadb56c4c63378b8d0f93bc11",
          204: "11c98816396e358d4ca2a01301c52c7b",
          216: "c42ddd260386a18a985ae163bdcf837e",
          240: "c8bd35e2d32f5c2360076bb9654fb044",
          248: "28b56dba713b16f21991de6c0016ea22",
          283: "e0e19efe5a7fd3b58a77dc6fa035a844",
          304: "badc472ab888c0b5c3850b6d08141c38",
          396: "a4497684406e236af764bd9ddf105c34",
          408: "367bc0bc763a89a9fe37522becd585f0",
          420: "cd026fda85a14f743a3b9de99ba64752",
          444: "0949cb9e5bac3102e9d7bc7d6f9b28d1",
          460: "0b68d7221c90b3ad99e425cdd9db420b",
          504: "e4107237d22c08486c2e35f8d0bb1f0e",
          512: "128a2c1392af4c713c592bce0994323c",
          538: "c642b58552bb7e426d85b24b2ae8cac7",
          544: "1c36edf5515de942721cf1bc21a741c1",
          560: "5aa607904889c14b4426edf154b0bd80",
          616: "52188da5968b992e78e31160c4f1b6ee",
          664: "613d91ad5b83c915e18ccff483da75c5",
          669: "bf5d53b0206e126ceca02bf843acaa96",
          672: "93779cdc79b35e6aec2c1630921bc2f6",
          683: "73d4af498fd5cac327c16a9f314acbdd",
          696: "e5e65665688ee0a00f77d88bd1d0897e",
          716: "a503dfb6a9b6cff6a861906f827bb342",
          768: "c581c085f81439f1a80cf27ce711ed00",
          776: "ddc13f6590cd851157d299bc7474a7e8",
          784: "9ac5e90886efcc4ba6add06739172ea7",
          792: "1a2dbd2ace954983487c92d1cc113311",
          832: "c58a73dad028f60315333141347f320e",
          860: "a9f529026d69467417c0bf5f35d22242",
          868: "1e0257805c7f72d2501da5142324a6ff",
          900: "e418a5305b4c4ea34f224ea826fc1d1f",
          904: "8fc2ef86e30162aae3ad6fb1abe6f1a8",
          924: "04f698058c5285d7ae8f9bbb8734183c",
          952: "c81c6f80ec988e54f0679ab3e6250931"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          188: "664eee436a702d730d64c31b174d2527",
          196: "16b8e9891ecacebf7f118fb16fbace22",
          216: "dcc5d4d3eaf765cd6e7bce4763ed263f",
          538: "95f2b7f4dbdcbec5e2eba43c02a19ae6",
          683: "1809f9391a083c02a6fb72dfbc67c511",
          784: "d8468fd0ff99344b11bf1ee3122e080b",
          868: "95f2b7f4dbdcbec5e2eba43c02a19ae6",
          900: "9b62ba6cd27fc773575ceed2f4bdf654"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, s = "@rockstargames/sites-legacy:", b.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, c;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
                var i = d[f];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == s + a) {
                  n = i;
                  break
                }
              }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", s + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(u);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), c && document.head.appendChild(n)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {
          61: [3061],
          188: [55120, 84644],
          216: [1532, 28540, 73784, 95356],
          420: [45792],
          460: [32104, 65988, 84344, 89468],
          504: [42836, 1740],
          683: [45652],
          768: [33052],
          784: [42708, 75016, 77715]
        }, i = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          32104: ["default", "./ui", 88428],
          33052: ["default", "./index", 33864],
          42708: ["default", "./providers", 81128],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          55120: ["default", "./messages", 50800],
          65988: ["default", "./functions", 9344],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          75016: ["default", "./index", 50800],
          77715: ["default", "./providers", 9344],
          84344: ["default", "./tina", 14472],
          84644: ["default", "./index", 14472],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, b.f.remotes = (e, t) => {
          b.o(f, e) && f[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var a = i[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), b.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, c, d, s) => {
                  try {
                    var f = e(r, n);
                    if (!f || !f.then) return d(f, c, s);
                    var i = f.then((e => d(e, c)), o);
                    if (!s) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                c = (e, t, o) => n(t.get, a[1], r, 0, d, o),
                d = t => {
                  a.p = 1, b.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(b, a[2], 0, 0, ((e, t, r) => e ? n(b.I, a[0], 0, e, c, r) : o()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            t = {};
          b.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var n = b.S[r],
                c = "@rockstargames/sites-legacy",
                d = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    d = o[t];
                  (!d || !d.loaded && (!a != !d.eager ? a : c > d.from)) && (o[t] = {
                    get: r,
                    from: c,
                    eager: !!a
                  })
                },
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = b(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(b.S[r], a);
                    if (o.then) return f.push(o.then(n, t));
                    var c = n(o);
                    if (c && c.then) return f.push(c.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                f = [];
              return "default" === r && (d("@rockstargames/components", "1.14.0", (() => Promise.all([b.e(560), b.e(544), b.e(179), b.e(444), b.e(664), b.e(616), b.e(504), b.e(768), b.e(420), b.e(683), b.e(669), b.e(216), b.e(204)]).then((() => () => b(1076))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([b.e(408), b.e(664), b.e(61), b.e(924)]).then((() => () => b(8304))))), d("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([b.e(664), b.e(504), b.e(420), b.e(538), b.e(248)]).then((() => () => b(33700))))), d("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([b.e(560), b.e(664), b.e(616), b.e(504), b.e(196), b.e(860)]).then((() => () => b(92240))))), d("framer-motion", "10.16.4", (() => Promise.all([b.e(696), b.e(664)]).then((() => () => b(11696))))), d("framer-motion", "10.16.4", (() => Promise.all([b.e(164), b.e(664)]).then((() => () => b(22784))))), d("framer-motion", "7.10.3", (() => Promise.all([b.e(904), b.e(396), b.e(664)]).then((() => () => b(93372))))), d("framer-motion", "7.10.3", (() => Promise.all([b.e(904), b.e(952), b.e(664), b.e(672)]).then((() => () => b(35952))))), d("react-dom", "18.2.0", (() => Promise.all([b.e(716), b.e(664)]).then((() => () => b(63716))))), d("react-intersection-observer", "9.5.2", (() => Promise.all([b.e(664), b.e(512)]).then((() => () => b(41512))))), d("react-router-dom", "6.17.0", (() => Promise.all([b.e(88), b.e(832), b.e(664)]).then((() => () => b(84832))))), d("react-router-dom", "6.17.0", (() => Promise.all([b.e(88), b.e(283), b.e(664)]).then((() => () => b(93664))))), d("react", "18.2.0", (() => b.e(100).then((() => () => b(99480))))), s(81128), s(88428), s(33864), s(9344), s(50800), s(14472)), f.length ? e[r] = Promise.all(f).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var t = b.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var t = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = r[1] ? t(r[1]) : [];
              return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
            },
            t = (r, a) => {
              if (0 in r) {
                a = e(a);
                var o = r[0],
                  n = o < 0;
                n && (o = -o - 1);
                for (var c = 0, d = 1, s = !0;; d++, c++) {
                  var f, i, l = d < r.length ? (typeof r[d])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(f = a[c]))[0])) return !s || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == i)
                      if (d <= o) {
                        if (f != r[d]) return !1
                      } else {
                        if (n ? f > r[d] : f < r[d]) return !1;
                        f != r[d] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    s = !1, d--
                  } else {
                    if (d <= o || i < l != n) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, d--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (c = 1; c < r.length; c++) {
                var h = r[c];
                u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? t(h, a) : !b())
              }
              return !!b()
            },
            r = (r, a, o) => {
              var n = r[a];
              return (a = Object.keys(n).reduce(((r, a) => !t(o, a) || r && !((t, r) => {
                t = e(t), r = e(r);
                for (var a = 0;;) {
                  if (a >= t.length) return a < r.length && "u" != (typeof r[a])[0];
                  var o = t[a],
                    n = (typeof o)[0];
                  if (a >= r.length) return "u" == n;
                  var c = r[a],
                    d = (typeof c)[0];
                  if (n != d) return "o" == n && "n" == d || "s" == d || "u" == n;
                  if ("o" != n && "u" != n && o != c) return o < c;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = b.I(t);
              return n && n.then ? n.then(e.bind(e, t, b.S[t], r, a, o)) : e(t, b.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var c = t && b.o(t, a) && r(t, a, o);
              return c ? (e => (e.loaded = 1, e.get()))(c) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => b.e(100).then((() => () => b(99480))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([b.e(408), b.e(61), b.e(304)]).then((() => () => b(8304))))),
              60380: () => a("default", "react-intersection-observer", [1, 9, 5, 2], (() => b.e(132).then((() => () => b(41512))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => b.e(716).then((() => () => b(63716))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([b.e(560), b.e(544), b.e(179), b.e(444), b.e(616), b.e(768), b.e(683), b.e(669), b.e(216)]).then((() => () => b(1076))))),
              13196: () => a("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([b.e(560), b.e(196), b.e(240)]).then((() => () => b(92240))))),
              54600: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => b.e(868).then((() => () => b(33700))))),
              82708: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(88), b.e(283)]).then((() => () => b(93664))))),
              83252: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(164).then((() => () => b(22784))))),
              22560: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(904), b.e(952)]).then((() => () => b(35952))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(88), b.e(832)]).then((() => () => b(84832))))),
              37148: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(904), b.e(396)]).then((() => () => b(93372))))),
              13112: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(696).then((() => () => b(11696)))))
            },
            c = {
              188: [13196, 54600, 82708, 83252],
              196: [13112],
              420: [9860],
              538: [37148],
              616: [41272, 60380],
              664: [51664],
              669: [22560, 57013],
              768: [77364],
              868: [37148]
            },
            d = {};
          b.f.consumes = (e, t) => {
            b.o(c, e) && c[e].forEach((e => {
              if (b.o(o, e)) return t.push(o[e]);
              if (!d[e]) {
                var r = t => {
                  o[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = t()
                  }
                };
                d[e] = !0;
                var a = t => {
                  delete o[e], b.m[e] = r => {
                    throw delete b.c[e], t
                  }
                };
                try {
                  var c = n[e]();
                  c.then ? t.push(o[e] = c.then(r).catch(a)) : r(c)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              744: 0
            };
            b.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                188: 1,
                196: 1,
                216: 1,
                538: 1,
                683: 1,
                784: 1,
                868: 1,
                900: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = b.miniCssF(e),
                  o = b.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (c = r[a]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (o === e || o === t)) return c
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var c;
                      if ((o = (c = n[a]).getAttribute("data-href")) === e || o === t) return c
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var c = r && ("load" === r.type ? "missing" : r.type),
                        d = r && r.target && r.target.href || t,
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = c, s.request = d, n.parentNode && n.parentNode.removeChild(n), o(s)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              })))(t).then((() => {
                e[t] = 0
              }), (r => {
                throw delete e[t], r
              })))
            }
          }
        })(), (() => {
          var e = {
            744: 0
          };
          b.f.j = (t, r) => {
            var a = b.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(6(1|16|64|69|83)|196|420|504|538|768)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = b.p + b.u(t),
                c = new Error;
              b.l(n, (r => {
                if (b.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", c.name = "ChunkLoadError", c.type = o, c.request = n, a[1](c)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                c = r[1],
                d = r[2],
                s = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in c) b.o(c, a) && (b.m[a] = c[a]);
                d && d(b)
              }
              for (t && t(r); s < n.length; s++) o = n[s], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(93824), b(15392)
      })())
    }
  }
}));