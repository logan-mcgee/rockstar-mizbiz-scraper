! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0ceb9947-d37b-49fd-8596-ef06704bb26c", e._sentryDebugIdIdentifier = "sentry-dbid-0ceb9947-d37b-49fd-8596-ef06704bb26c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/graph-client", "@rockstargames/intl", "@rockstargames/modules-core-sc-user", "@rockstargames/tina", "@rockstargames/utils"], (function(e, t) {
  var r = {},
    a = {},
    o = {},
    n = {},
    d = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(a, "__esModule", {
    value: !0
  }), Object.defineProperty(o, "__esModule", {
    value: !0
  }), Object.defineProperty(n, "__esModule", {
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
        d[t] = e[t]
      }))
    }],
    execute: function() {
      e((() => {
        var e, f, c, s, i = {
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
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            65536: (e, t, r) => {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(236).then((() => () => r(46236))),
                  "./index": () => Promise.all([r.e(664), r.e(356), r.e(96), r.e(780), r.e(804), r.e(660), r.e(512), r.e(4)]).then((() => () => r(78004))),
                  "./tina": () => Promise.all([r.e(664), r.e(804), r.e(660), r.e(68)]).then((() => () => r(65068))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(664), r.e(804), r.e(660), r.e(68)]).then((() => () => r(65068)))
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
            88428: e => {
              "use strict";
              e.exports = n
            },
            9344: e => {
              "use strict";
              e.exports = d
            }
          },
          l = {};

        function u(e) {
          var t = l[e];
          if (void 0 !== t) return t.exports;
          var r = l[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return i[e].call(r.exports, r, r.exports, u), r.loaded = !0, r.exports
        }
        return u.m = i, u.c = l, u.y = t, u.amdO = {}, u.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return u.d(t, {
            a: t
          }), t
        }, u.d = (e, t) => {
          for (var r in t) u.o(t, r) && !u.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, u.f = {}, u.e = e => Promise.all(Object.keys(u.f).reduce(((t, r) => (u.f[r](e, t), t)), [])), u.u = e => "js/" + {
          4: "826bc3b05c126ece7068ff39ada5788c",
          61: "4badf4f19163415b16d3eec26bdf7b75",
          68: "ca0b142e166dc1a359ca017220a63706",
          92: "71133052d3b924b0aac3d0ef89b91e43",
          96: "f05fe0e09781fe79f2b3a1f179ac6429",
          100: "892b3e78800bb3a78033d93278a65ad7",
          208: "b31e22b225e8a8fd8ea4aa5346dcf2bd",
          236: "17f171aab6a485caf21116580cc11f45",
          240: "617c57cd9ca1a2db2f6fb9a7c5e44ddf",
          296: "76eda65c1546c58d8418102fdb1411da",
          304: "ee48c5299ce4655e6bcaac02973bd706",
          334: "69adb2bc90cdb3f894ec1aaa2d097f22",
          342: "7db9f81a492ea456e2d58da5707a1e65",
          356: "2249e06146f8816f34aa4235d67e46e2",
          364: "298e6a2b6ff50fdbc938bdcd30aea3e1",
          378: "f37a85b38c36571cebe64641f20a7fc6",
          408: "132690fd0e291d3bb633113409197c19",
          448: "13fd4ac1271447a77a7cc98d5b2e8a10",
          452: "2940700e2b6ca2bf310fddd38d332f31",
          512: "46adbd678deb9a70c94981c5c41d0c46",
          516: "488c30d2171f0953bb1214bf1e10b81c",
          542: "700b12ac810a81dbfe727218993a9400",
          560: "f0f28f663168021f7e184a99bc7f7bda",
          660: "ef1299e0420fc4c03c1334731567fa4b",
          664: "ac868ef8a85fd8d71926d723b8773d61",
          716: "aa741e8c9fec1eabec2cb7b8c15ebf8a",
          718: "41ef3fa37356b3f67dc888b8a8788116",
          720: "39160fcd74cda3b98c5227aa9251dbde",
          748: "c8de0b72f9c7004099f706279c9e5de4",
          772: "5fe0a9b59f7d7d94c0a138f55bf103a4",
          780: "66c2ba59c02cb9dcd4355fc1de5e27b3",
          784: "f7bbfb993a234f7b5970be996ef1287a",
          792: "a1b90e0427322565e29da30bc151529d",
          804: "c16dc7e47fa9edf16cd0804b8cb529a0",
          832: "a75847ee31870a17d02a3336288f4156",
          852: "f25c0df759f78e5aac92e12a604360fa",
          916: "7c488e6e2a319859744cfcbb2c7708ba",
          924: "5c89878b16fc3f1cc51a1fc1f1cfc34e",
          953: "e4642a391fdd46499c830844a3e475b1",
          960: "4a8fbc03ed9f2d2c69e36c79e927a7ae"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          4: "8d4300aef2d6e2b69bcc7940e07edc9c",
          208: "99df8002ac4dfabc31414fcbef9c06c7",
          448: "a126229ede95b503bfddbd53efcedae3",
          452: "16159a73f916ef1fe487d3701d83cdf1",
          512: "7347a784671c3a089eb9d0bec3a1d90a",
          832: "16159a73f916ef1fe487d3701d83cdf1",
          852: "00cf628a282768ded330d8d9c2747d21"
        } [e] + ".css", u.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/modules-core-videoplayer:", u.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, d;
            if (void 0 !== a)
              for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
                var i = c[s];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == f + a) {
                  n = i;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(b);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              b = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: n
              }), 12e4);
            n.onerror = l.bind(null, n.onerror), n.onload = l.bind(null, n.onload), d && document.head.appendChild(n)
          }
        }, u.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {
          61: [3061],
          68: [19824, 32104, 89468],
          96: [42836, 45792],
          448: [42708, 85092],
          512: [55120, 75016],
          780: [1740],
          804: [33052],
          852: [1532, 28540, 45652, 73784, 95356]
        }, s = {
          1532: ["default", "./operations/queries", 33864],
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          19824: ["default", "./operations/queries/videos.graphql", 33864],
          28540: ["default", "./operations/fragments/paging.graphql", 33864],
          32104: ["default", "./ui", 88428],
          33052: ["default", "./index", 33864],
          42708: ["default", "./providers", 81128],
          42836: ["default", "./index", 81128],
          45652: ["default", "./helpers/uploads", 88428],
          45792: ["default", "./index", 9344],
          55120: ["default", "./messages", 50800],
          73784: ["default", "./operations/fragments/newswire-post.graphql", 33864],
          75016: ["default", "./index", 50800],
          85092: ["default", "./gtm", 9344],
          89468: ["default", "./properties", 88428],
          95356: ["default", "./helpers", 88428]
        }, u.f.remotes = (e, t) => {
          u.o(c, e) && c[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = s[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, f, c) => {
                  try {
                    var s = e(r, n);
                    if (!s || !s.then) return f(s, d, c);
                    var i = s.then((e => f(e, d)), o);
                    if (!c) return i;
                    t.push(a.p = i)
                  } catch (e) {
                    o(e)
                  }
                },
                d = (e, t, o) => n(t.get, a[1], r, 0, f, o),
                f = t => {
                  a.p = 1, u.m[e] = e => {
                    e.exports = t()
                  }
                };
              n(u, a[2], 0, 0, ((e, t, r) => e ? n(u.I, a[0], 0, e, d, r) : o()), 1)
            }
          }))
        }, (() => {
          u.S = {};
          var e = {},
            t = {};
          u.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              u.o(u.S, r) || (u.S[r] = {});
              var n = u.S[r],
                d = "@rockstargames/modules-core-videoplayer",
                f = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                c = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return s.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return s.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (f("@gsap/react", "2.1.0", (() => Promise.all([u.e(664), u.e(356), u.e(296)]).then((() => () => u(84296))))), f("@popperjs/core", "2.11.8", (() => u.e(748).then((() => () => u(5748))))), f("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(92), u.e(208), u.e(664), u.e(364), u.e(356), u.e(96), u.e(780), u.e(804), u.e(660), u.e(852), u.e(240)]).then((() => () => u(65596))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(92), u.e(408), u.e(664), u.e(61), u.e(924)]).then((() => () => u(8304))))), f("@rockstargames/modules-core-agegate", "1.0.39", (() => Promise.all([u.e(516), u.e(664), u.e(96), u.e(452)]).then((() => () => u(24))))), f("dompurify", "2.4.7", (() => u.e(560).then((() => () => u(8560))))), f("gsap", "0.0.0", (() => u.e(720).then((() => () => u(77100))))), f("hammerjs", "2.0.8", (() => u.e(772).then((() => () => u(65772))))), f("lodash", "4.17.21", (() => u.e(784).then((() => () => u(79784))))), f("react-dom", "18.2.0", (() => Promise.all([u.e(716), u.e(664)]).then((() => () => u(63716))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([u.e(664), u.e(960)]).then((() => () => u(37960))))), f("react-popper", "2.3.0", (() => Promise.all([u.e(664), u.e(364), u.e(304), u.e(334)]).then((() => () => u(5334))))), f("react-router-dom", "6.17.0", (() => Promise.all([u.e(718), u.e(664)]).then((() => () => u(45718))))), f("react", "18.2.0", (() => u.e(100).then((() => () => u(99480))))), f("uuid", "9.0.1", (() => u.e(378).then((() => () => u(11378))))), c(81128), c(9344), c(88428), c(33864), c(50800)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          u.g.importScripts && (e = u.g.location + "");
          var t = u.g.document;
          if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), u.p = e
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
                for (var d = 0, f = 1, c = !0;; f++, d++) {
                  var s, i, l = f < r.length ? (typeof r[f])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(s = a[d]))[0])) return !c || ("u" == l ? f > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!c || "u" != l) return !1
                  } else if (c)
                    if (l == i)
                      if (f <= o) {
                        if (s != r[f]) return !1
                      } else {
                        if (n ? s > r[f] : s < r[f]) return !1;
                        s != r[f] && (c = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || f <= o) return !1;
                    c = !1, f--
                  } else {
                    if (f <= o || i < l != n) return !1;
                    c = !1
                  } else "s" != l && "n" != l && (c = !1, f--)
                }
              }
              var u = [],
                b = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var p = r[d];
                u.push(1 == p ? b() | b() : 2 == p ? b() & b() : p ? t(p, a) : !b())
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
                  var d = r[a],
                    f = (typeof d)[0];
                  if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
                  if ("o" != n && "u" != n && o != d) return o < d;
                  a++
                }
              })(r, a) ? r : a), 0)) && n[a]
            },
            a = (e => function(t, r, a, o) {
              var n = u.I(t);
              return n && n.then ? n.then(e.bind(e, t, u.S[t], r, a, o)) : e(t, u.S[t], r, a, o)
            })(((e, t, a, o, n) => {
              var d = t && u.o(t, a) && r(t, a, o);
              return d ? (e => (e.loaded = 1, e.get()))(d) : n()
            })),
            o = {},
            n = {
              51664: () => a("default", "react", [1, 18, 2, 0], (() => u.e(100).then((() => () => u(99480))))),
              67356: () => a("default", "gsap", [1, "workspace:*"], (() => u.e(720).then((() => () => u(77100))))),
              35212: () => a("default", "@gsap/react", [1, 2, 1, 0], (() => u.e(916).then((() => () => u(84296))))),
              41272: () => a("default", "@rockstargames/locale-tools", [1, "workspace:*"], (() => Promise.all([u.e(92), u.e(408), u.e(61), u.e(542)]).then((() => () => u(8304))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => u.e(718).then((() => () => u(45718))))),
              68e3: () => a("default", "uuid", [1, 9, 0, 0], (() => u.e(378).then((() => () => u(11378))))),
              97860: () => a("default", "hammerjs", [1, 2, 0, 8], (() => u.e(772).then((() => () => u(65772))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(92), u.e(208), u.e(364), u.e(356), u.e(96), u.e(780), u.e(660), u.e(852)]).then((() => () => u(65596))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => u.e(784).then((() => () => u(79784))))),
              37925: () => a("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([u.e(364), u.e(304), u.e(953)]).then((() => () => u(5334))))),
              92372: () => a("default", "@rockstargames/modules-core-agegate", [1, "workspace:*"], (() => Promise.all([u.e(516), u.e(832)]).then((() => () => u(24))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => u.e(716).then((() => () => u(63716))))),
              17228: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => u.e(342).then((() => () => u(37960))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => u.e(560).then((() => () => u(8560))))),
              4304: () => a("default", "@popperjs/core", [1, 2, 11, 7], (() => u.e(748).then((() => () => u(5748)))))
            },
            d = {
              304: [4304],
              356: [67356],
              364: [77364],
              512: [37925, 92372],
              660: [73660],
              664: [51664],
              780: [35212, 41272, 57013, 68e3, 97860],
              804: [9860],
              852: [17228, 89416]
            },
            f = {};
          u.f.consumes = (e, t) => {
            u.o(d, e) && d[e].forEach((e => {
              if (u.o(o, e)) return t.push(o[e]);
              if (!f[e]) {
                var r = t => {
                  o[e] = 0, u.m[e] = r => {
                    delete u.c[e], r.exports = t()
                  }
                };
                f[e] = !0;
                var a = t => {
                  delete o[e], u.m[e] = r => {
                    throw delete u.c[e], t
                  }
                };
                try {
                  var d = n[e]();
                  d.then ? t.push(o[e] = d.then(r).catch(a)) : r(d)
                } catch (e) {
                  a(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              968: 0
            };
            u.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                4: 1,
                208: 1,
                448: 1,
                452: 1,
                512: 1,
                832: 1,
                852: 1
              } [t] && r.push(e[t] = (e => new Promise(((t, r) => {
                var a = u.miniCssF(e),
                  o = u.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var d = r && ("load" === r.type ? "missing" : r.type),
                        f = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, n.parentNode && n.parentNode.removeChild(n), o(c)
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
            968: 0
          };
          u.f.j = (t, r) => {
            var a = u.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(3(04|56|64)|6(1|60|64)|780|804|96)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise(((r, o) => a = e[t] = [r, o]));
              r.push(a[2] = o);
              var n = u.p + u.u(t),
                d = new Error;
              u.l(n, (r => {
                if (u.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }), "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, n = r[0],
                d = r[1],
                f = r[2],
                c = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) u.o(d, a) && (u.m[a] = d[a]);
                f && f(u)
              }
              for (t && t(r); c < n.length; c++) o = n[c], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u.nc = void 0, u(93824), u(65536)
      })())
    }
  }
}));