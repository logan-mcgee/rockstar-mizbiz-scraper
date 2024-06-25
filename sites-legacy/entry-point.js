! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c144836c-458a-4d90-8109-9c2e446c1b6b", e._sentryDebugIdIdentifier = "sentry-dbid-c144836c-458a-4d90-8109-9c2e446c1b6b")
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
        var e, f, s, i, l = {
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
                  "./bootstrap": () => Promise.all([r.e(544), r.e(792), r.e(664), r.e(272), r.e(504), r.e(768), r.e(420), r.e(188), r.e(669), r.e(784)]).then((() => () => r(18784))),
                  "./index": () => Promise.all([r.e(664), r.e(272), r.e(504), r.e(768), r.e(420), r.e(188), r.e(776)]).then((() => () => r(61880))),
                  "./site-routes/RedDeadRedemption": () => Promise.all([r.e(544), r.e(179), r.e(664), r.e(272), r.e(504), r.e(768), r.e(420), r.e(188), r.e(683), r.e(669), r.e(460), r.e(900)]).then((() => () => r(44900))),
                  "./tina": () => Promise.all([r.e(179), r.e(664), r.e(272), r.e(504), r.e(768), r.e(420), r.e(188), r.e(683), r.e(460)]).then((() => () => r(6460)))
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
          88: "b49d4529bad9acc76f615066d8c864b9",
          100: "3e9477113512e4794bf51e346423dff8",
          128: "f32f4947f353ca7e74b81a8116daf673",
          164: "f02225db59d92e47d0a6d0d5e910d7a3",
          179: "8b4453d11a1198e9ddd05185689030dd",
          188: "429473f39fc57d9e14aa7c741468b4b1",
          204: "da60f4a526e321dc21f6ededc3ae8845",
          208: "adab4d6deca40bdca381e3b3f620f511",
          240: "0044bc92cb7ee87fbaa621d1598b0f0d",
          248: "dae5aa8577ce4715c80a70ea69a7fc6d",
          272: "4cc9958be8bfb6898b2accab1366378b",
          283: "17c8c41714bdd4271f621caeb2d9cfcc",
          304: "33aede41c5d8fadae91aa3edb9e9b4e2",
          322: "ecab7961b4d2658a1630b65b1b7fe2e1",
          342: "602605dc9a3a25a6e8a1187158f1a8cc",
          396: "0390b884b7d628ff52d27ddc027f0719",
          408: "cec30870a92f6d08d2a34c1974a5ec94",
          420: "cd026fda85a14f743a3b9de99ba64752",
          460: "a1002172a9a22f739234377ad8179955",
          504: "e4107237d22c08486c2e35f8d0bb1f0e",
          538: "c642b58552bb7e426d85b24b2ae8cac7",
          544: "c260890e9302b7b0ceead3b6af661ea4",
          560: "c8d1f17b6627b8b9ca41663a6b8b5d18",
          664: "613d91ad5b83c915e18ccff483da75c5",
          669: "bf5d53b0206e126ceca02bf843acaa96",
          672: "8fffdbf07aae2d70d02262ce77f94d0f",
          683: "73d4af498fd5cac327c16a9f314acbdd",
          696: "ff5042e10551bc732c06997cf033c8bc",
          716: "ceba81c6c7d15d47538896291ce0493a",
          768: "c581c085f81439f1a80cf27ce711ed00",
          776: "8f4daf6241053cf0acff89bc485f4069",
          784: "6563c9ec3361b83b27fb5d4db66d5e91",
          792: "e9c2317bda86c30b9575a07981a5b822",
          828: "2182e6d46670052f280ce6750c766edf",
          832: "514d02b1dae074c8614553487ec22d31",
          860: "c513e7d334ad813754b35090fc7b3f00",
          868: "25dbddaec607d2dfa04e98d6ef48a4d5",
          892: "a6e3d8c49fd5f4a0dd08e431a8e74510",
          900: "6f2da0097594affa57d5190d99d85ffc",
          904: "7140bbc6a7edad873f8001173dbef78f",
          924: "59ef37b55dc538cf9c15701f4f0ed30a",
          940: "1f1111011ad9ca2a813fc4a182caa548",
          952: "30a534678aa577fb01ed02bac72a196b",
          960: "07381d7db18c5733218bd74ffed6e302",
          992: "00a21ccb896f144fcaed646a27aeacef"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          128: "16b8e9891ecacebf7f118fb16fbace22",
          188: "8510b651ebaa1c6e9fda611d3e9c93e4",
          538: "d0ae327237b1f76719fbf87d6cd7b61c",
          683: "118465cd05bf9ac3fc9036de4dcc51b9",
          784: "3c325da421edaf2f493ff4158266f92f",
          868: "d0ae327237b1f76719fbf87d6cd7b61c",
          892: "99df8002ac4dfabc31414fcbef9c06c7",
          900: "2153171dc3ebe43516537cc5a9efebea",
          992: "d96b21bc09a691d8b909b58c37758dd9"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, f = "@rockstargames/sites-legacy:", b.l = (t, r, a, o) => {
          if (e[t]) e[t].push(r);
          else {
            var n, c;
            if (void 0 !== a)
              for (var d = document.getElementsByTagName("script"), s = 0; s < d.length; s++) {
                var i = d[s];
                if (i.getAttribute("src") == t || i.getAttribute("data-webpack") == f + a) {
                  n = i;
                  break
                }
              }
            n || (c = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, b.nc && n.setAttribute("nonce", b.nc), n.setAttribute("data-webpack", f + a), n.src = t), e[t] = [r];
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
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), s = {
          61: [3061],
          188: [55120, 84644],
          420: [45792],
          460: [32104, 65988, 84344, 89468],
          504: [42836, 1740],
          683: [45652],
          768: [33052],
          784: [42708, 75016, 77715],
          992: [1532, 28540, 73784, 95356]
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
          b.o(s, e) && s[e].forEach((e => {
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
                n = (e, r, n, c, d, f) => {
                  try {
                    var s = e(r, n);
                    if (!s || !s.then) return d(s, c, f);
                    var i = s.then((e => d(e, c)), o);
                    if (!f) return i;
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
                f = e => {
                  var t = e => {
                    return t = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(t));
                    var t
                  };
                  try {
                    var o = b(e);
                    if (!o) return;
                    var n = e => e && e.init && e.init(b.S[r], a);
                    if (o.then) return s.push(o.then(n, t));
                    var c = n(o);
                    if (c && c.then) return s.push(c.catch(t))
                  } catch (e) {
                    t(e)
                  }
                },
                s = [];
              return "default" === r && (d("@rockstargames/components", "1.14.0", (() => Promise.all([b.e(560), b.e(544), b.e(179), b.e(892), b.e(664), b.e(272), b.e(504), b.e(768), b.e(420), b.e(683), b.e(669), b.e(992), b.e(204)]).then((() => () => b(18356))))), d("@rockstargames/locale-tools", "1.0.0", (() => Promise.all([b.e(408), b.e(664), b.e(61), b.e(924)]).then((() => () => b(8304))))), d("@rockstargames/modules-core-hero", "0.1.2", (() => Promise.all([b.e(664), b.e(504), b.e(420), b.e(538), b.e(248)]).then((() => () => b(33700))))), d("@rockstargames/modules-core-highlights", "0.0.2", (() => Promise.all([b.e(560), b.e(664), b.e(272), b.e(504), b.e(128), b.e(860)]).then((() => () => b(92240))))), d("framer-motion", "10.16.4", (() => Promise.all([b.e(696), b.e(664)]).then((() => () => b(11696))))), d("framer-motion", "10.16.4", (() => Promise.all([b.e(164), b.e(664)]).then((() => () => b(22784))))), d("framer-motion", "7.10.3", (() => Promise.all([b.e(904), b.e(396), b.e(664)]).then((() => () => b(93372))))), d("framer-motion", "7.10.3", (() => Promise.all([b.e(904), b.e(952), b.e(664), b.e(672)]).then((() => () => b(35952))))), d("react-dom", "18.2.0", (() => Promise.all([b.e(716), b.e(664)]).then((() => () => b(63716))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(664), b.e(940)]).then((() => () => b(96940))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(664), b.e(208)]).then((() => () => b(69208))))), d("react-intersection-observer", "9.10.3", (() => Promise.all([b.e(664), b.e(960)]).then((() => () => b(37960))))), d("react-router-dom", "6.17.0", (() => Promise.all([b.e(88), b.e(832), b.e(664)]).then((() => () => b(84832))))), d("react-router-dom", "6.17.0", (() => Promise.all([b.e(88), b.e(283), b.e(664)]).then((() => () => b(93664))))), d("react", "18.2.0", (() => b.e(100).then((() => () => b(99480))))), f(81128), f(88428), f(33864), f(9344), f(50800), f(14472)), s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
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
                for (var c = 0, d = 1, f = !0;; d++, c++) {
                  var s, i, l = d < r.length ? (typeof r[d])[0] : "";
                  if (c >= a.length || "o" == (i = (typeof(s = a[c]))[0])) return !f || ("u" == l ? d > o && !n : "" == l != n);
                  if ("u" == i) {
                    if (!f || "u" != l) return !1
                  } else if (f)
                    if (l == i)
                      if (d <= o) {
                        if (s != r[d]) return !1
                      } else {
                        if (n ? s > r[d] : s < r[d]) return !1;
                        s != r[d] && (f = !1)
                      }
                  else if ("s" != l && "n" != l) {
                    if (n || d <= o) return !1;
                    f = !1, d--
                  } else {
                    if (d <= o || i < l != n) return !1;
                    f = !1
                  } else "s" != l && "n" != l && (f = !1, d--)
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
              77364: () => a("default", "react-dom", [1, 18, 2, 0], (() => b.e(716).then((() => () => b(63716))))),
              9860: () => a("default", "@rockstargames/components", [1, "workspace:*"], (() => Promise.all([b.e(560), b.e(544), b.e(179), b.e(892), b.e(272), b.e(768), b.e(683), b.e(669), b.e(992)]).then((() => () => b(18356))))),
              13196: () => a("default", "@rockstargames/modules-core-highlights", [1, "workspace:*"], (() => Promise.all([b.e(560), b.e(128), b.e(240)]).then((() => () => b(92240))))),
              38308: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(828).then((() => () => b(69208))))),
              54600: () => a("default", "@rockstargames/modules-core-hero", [1, "workspace:*"], (() => b.e(868).then((() => () => b(33700))))),
              82708: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(88), b.e(283)]).then((() => () => b(93664))))),
              83252: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(164).then((() => () => b(22784))))),
              22560: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(904), b.e(952)]).then((() => () => b(35952))))),
              57013: () => a("default", "react-router-dom", [1, 6, 11, 2], (() => Promise.all([b.e(88), b.e(832)]).then((() => () => b(84832))))),
              17228: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(342).then((() => () => b(37960))))),
              37148: () => a("default", "framer-motion", [1, 10, 12, 18], (() => Promise.all([b.e(904), b.e(396)]).then((() => () => b(93372))))),
              13112: () => a("default", "framer-motion", [1, 10, 12, 18], (() => b.e(696).then((() => () => b(11696))))),
              85736: () => a("default", "react-intersection-observer", [1, 9, 10, 3], (() => b.e(322).then((() => () => b(96940)))))
            },
            c = {
              128: [13112, 85736],
              188: [13196, 38308, 54600, 82708, 83252],
              272: [41272],
              420: [9860],
              538: [37148],
              664: [51664],
              669: [22560, 57013],
              768: [77364],
              868: [37148],
              992: [17228]
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
                128: 1,
                188: 1,
                538: 1,
                683: 1,
                784: 1,
                868: 1,
                892: 1,
                900: 1,
                992: 1
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
                        f = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ")");
                      f.code = "CSS_CHUNK_LOAD_FAILED", f.type = c, f.request = d, n.parentNode && n.parentNode.removeChild(n), o(f)
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
              else if (/^(6(1|64|69|83)|(12|53|76)8|272|420|504)$/.test(t)) e[t] = 0;
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
                f = 0;
              if (n.some((t => 0 !== e[t]))) {
                for (a in c) b.o(c, a) && (b.m[a] = c[a]);
                d && d(b)
              }
              for (t && t(r); f < n.length; f++) o = n[f], b.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(93824), b(15392)
      })())
    }
  }
}));