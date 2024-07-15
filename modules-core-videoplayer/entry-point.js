! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6162eef4-5b47-449e-9c97-7f00ec1a48b1", e._sentryDebugIdIdentifier = "sentry-dbid-6162eef4-5b47-449e-9c97-7f00ec1a48b1")
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
        var e, f, s, c, i = {
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
          4: "2877d5bcdc50724f6619fd1c1c8d7d3b",
          61: "4badf4f19163415b16d3eec26bdf7b75",
          68: "b595ba0b1611447da79164aab21f05d5",
          92: "1526bb9d55d557c5d47e01d4815929d0",
          96: "f05fe0e09781fe79f2b3a1f179ac6429",
          100: "91591b1bdba1d2c3cf22db49f208cf9f",
          236: "4572481d9935c240973a4625d7c4f505",
          240: "a3978b26529638cf15b9edb17ea6fc13",
          296: "8557b586d9d0ca7a84d62299e0025e7b",
          304: "ee48c5299ce4655e6bcaac02973bd706",
          334: "9dc391a7dec62c691cd94937af3b3206",
          342: "5276dabab63aac3c1ca8a72208926c95",
          356: "2249e06146f8816f34aa4235d67e46e2",
          364: "65e89f7d2c96f0307e8cce78339146a4",
          378: "ff55962bcefb9380a6dff9e1d8842bdb",
          408: "50a9269a5ab646204631001c70c4f8d8",
          448: "8938ebe2a529bf2e5b856d51e86135a2",
          452: "7483c3301e27da0d4393c7619216c350",
          512: "81a9cb9edfda44ff9f893fdddfcb8659",
          516: "259a5748fe246ca5f9e13ce74b549b7f",
          542: "82b9bb99c79a7e9031f1ea70de5742e8",
          560: "ef135e59519cd9b01e5d46ea777a8abf",
          660: "ef1299e0420fc4c03c1334731567fa4b",
          664: "ac868ef8a85fd8d71926d723b8773d61",
          716: "d62c81391a24bf2c44625c45d41ba643",
          718: "45374fa87fa0c52e64e821cc36374b4c",
          720: "7ff2ac1a5642d59259ecdfcba89af2e8",
          748: "c39ced7633f946e63324d99989ba1715",
          772: "22cf5ea1f0f630beda7b96d3ce083032",
          780: "66c2ba59c02cb9dcd4355fc1de5e27b3",
          784: "cecb167b6192e1ee230b176b0118bbf8",
          792: "7f33a5b7296d067567c99d349671e6c8",
          804: "c16dc7e47fa9edf16cd0804b8cb529a0",
          832: "c420d93cc98d1be9312ca714e9731f4c",
          852: "2d76c1cb2283f7d5f5ec4103c5aa94c2",
          916: "10d873342c0e834145791648dd964c78",
          924: "391753d09ae59e0bbfc54d4f8602a039",
          953: "bd9243b1d1386a54f883d252410dd39a",
          960: "267762c31d6f12e87fcffb146e4640df",
          984: "55a183b3d78ee31d6483b32af0dfaca5"
        } [e] + ".js", u.miniCssF = e => "css/" + {
          4: "8d4300aef2d6e2b69bcc7940e07edc9c",
          448: "a126229ede95b503bfddbd53efcedae3",
          452: "16159a73f916ef1fe487d3701d83cdf1",
          512: "636aaba745dd77587576b6a97c73cad9",
          832: "16159a73f916ef1fe487d3701d83cdf1",
          852: "82a4cc7a51e6a721b6a4b11fda64ceed"
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
              for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var i = s[c];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == f + a) {
                  n = i;
                  break
                }
              }
            n || (d = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, u.nc && n.setAttribute("nonce", u.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
            var l = (r, a) => {
                n.onerror = n.onload = null, clearTimeout(p);
                var o = e[t];
                if (delete e[t], n.parentNode && n.parentNode.removeChild(n), o && o.forEach((e => e(a))), r) return r(a)
              },
              p = setTimeout(l.bind(null, void 0, {
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
        }, u.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          61: [3061],
          68: [19884, 32104, 89468],
          96: [42836, 45792],
          448: [42708, 85092],
          512: [55120, 75016],
          780: [1740],
          804: [33052],
          852: [28540, 45652, 73784, 95356]
        }, c = {
          1740: ["default", "./index", 88428],
          3061: ["default", "./hooks", 9344],
          19884: ["default", "./operations/queries/videos2.graphql", 33864],
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
          u.o(s, e) && s[e].forEach((e => {
            var r = u.R;
            r || (r = []);
            var a = c[e];
            if (!(r.indexOf(a) >= 0)) {
              if (r.push(a), a.p) return t.push(a.p);
              var o = t => {
                  t || (t = new Error("Container missing")), "string" == typeof t.message && (t.message += '\nwhile loading "' + a[1] + '" from ' + a[2]), u.m[e] = () => {
                    throw t
                  }, a.p = 0
                },
                n = (e, r, n, d, f, s) => {
                  try {
                    var c = e(r, n);
                    if (!c || !c.then) return f(c, d, s);
                    var i = c.then((e => f(e, d)), o);
                    if (!s) return i;
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
                s = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = u(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(u.S[r], a);
                    if (o.then) return c.push(o.then(n, t));
                    var d = n(o);
                    if (d && d.then) return c.push(d.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                c = [];
              return "default" === r && (f("@gsap/react", "2.1.0", (() => Promise.all([u.e(664), u.e(356), u.e(296)]).then((() => () => u(84296))))), f("@popperjs/core", "2.11.8", (() => u.e(748).then((() => () => u(5748))))), f("@rockstargames/components", "1.14.0", (() => Promise.all([u.e(92), u.e(364), u.e(664), u.e(984), u.e(356), u.e(96), u.e(780), u.e(804), u.e(660), u.e(852), u.e(240)]).then((() => () => u(65596))))), f("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([u.e(92), u.e(408), u.e(664), u.e(61), u.e(924)]).then((() => () => u(8304))))), f("@rockstargames/modules-core-agegate", "1.0.39", (() => Promise.all([u.e(516), u.e(664), u.e(96), u.e(452)]).then((() => () => u(24))))), f("dompurify", "2.4.7", (() => u.e(560).then((() => () => u(8560))))), f("gsap", "0.0.0", (() => u.e(720).then((() => () => u(77100))))), f("hammerjs", "2.0.8", (() => u.e(772).then((() => () => u(65772))))), f("lodash", "4.17.21", (() => u.e(784).then((() => () => u(79784))))), f("react-dom", "18.2.0", (() => Promise.all([u.e(716), u.e(664)]).then((() => () => u(63716))))), f("react-intersection-observer", "9.10.3", (() => Promise.all([u.e(664), u.e(960)]).then((() => () => u(37960))))), f("react-popper", "2.3.0", (() => Promise.all([u.e(664), u.e(984), u.e(304), u.e(334)]).then((() => () => u(5334))))), f("react-router-dom", "6.17.0", (() => Promise.all([u.e(718), u.e(664)]).then((() => () => u(45718))))), f("react", "18.2.0", (() => u.e(100).then((() => () => u(99480))))), f("uuid", "9.0.1", (() => u.e(378).then((() => () => u(11378))))), s(81128), s(9344), s(88428), s(33864), s(50800)), c.length ? e[r] = Promise.all(c).then((() => e[r] = 1)) : e[r] = 1
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
                for (var d = 0, f = 1, s = !0;; f++, d++) {
                  var c, i, l = f < r.length ? (typeof r[f])[0] : "";
                  if (d >= a.length || "o" == (i = (typeof(c = a[d]))[0])) return !s || ("u" == l ? f > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!s || "u" != l) return !1
                  } else if (s)
                    if (l == i)
                      if (f <= o) {
                        if (c != r[f]) return !1
                      } else {
                        if (n ? c > r[f] : c < r[f]) return !1;
                        c != r[f] && (s = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || f <= o) return !1;
                    s = !1, f--
                  } else {
                    if (f <= o || i < l != n) return !1;
                    s = !1
                  } else "s" != l && "n" != l && (s = !1, f--)
                }
              }
              var u = [],
                p = u.pop.bind(u);
              for (d = 1; d < r.length; d++) {
                var h = r[d];
                u.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? t(h, a) : !p())
              }
              return !!p()
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
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([u.e(92), u.e(364), u.e(984), u.e(356), u.e(96), u.e(780), u.e(660), u.e(852)]).then((() => () => u(65596))))),
              73660: () => a("default", "lodash", [1, 4, 17, 21], (() => u.e(784).then((() => () => u(79784))))),
              37925: () => a("default", "react-popper", [1, 2, 3, 0], (() => Promise.all([u.e(984), u.e(304), u.e(953)]).then((() => () => u(5334))))),
              92372: () => a("default", "@rockstargames/modules-core-agegate", [1, "workspace:*"], (() => Promise.all([u.e(516), u.e(832)]).then((() => () => u(24))))),
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => u.e(716).then((() => () => u(63716))))),
              17228: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => u.e(342).then((() => () => u(37960))))),
              89416: () => a("default", "dompurify", [1, 2, 4, 1], (() => u.e(560).then((() => () => u(8560))))),
              4304: () => a("default", "@popperjs/core", [1, 2, 11, 7], (() => u.e(748).then((() => () => u(5748)))))
            },
            d = {
              304: [4304],
              356: [67356],
              512: [37925, 92372],
              660: [73660],
              664: [51664],
              780: [35212, 41272, 57013, 68e3, 97860],
              804: [9860],
              852: [17228, 89416],
              984: [77364]
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
                        s = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ")");
                      s.code = "CSS_CHUNK_LOAD_FAILED", s.type = d, s.request = f, n.parentNode && n.parentNode.removeChild(n), o(s)
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
              else if (/^(6(1|60|64)|(30|80|98)4|356|780|96)$/.test(t)) e[t] = 0;
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
                s = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in d) u.o(d, a) && (u.m[a] = d[a]);
                f && f(u)
              }
              for (t && t(r); s < n.length; s++) o = n[s], u.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), u.nc = void 0, u(93824), u(65536)
      })())
    }
  }
}));