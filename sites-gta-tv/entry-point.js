! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "172631e6-adfb-42b7-9e6f-acc9048793f9", e._sentryDebugIdIdentifier = "sentry-dbid-172631e6-adfb-42b7-9e6f-acc9048793f9")
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
        var e, r, f, d, c, n, o = {
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
                  "./index": () => Promise.all([t.e(2598), t.e(2229), t.e(9623), t.e(8326)]).then((() => () => t(2301)))
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
          131: "2042ff953f3be8e09780e86b6838b682",
          278: "626e9918d71fc0008f9016a8edad4bfb",
          299: "eb0d9830bd31acea02981481e83660b8",
          314: "9b83bfea2cec2a81d06234ba445d6d64",
          662: "6e8fc25438327caef9196d219633001e",
          824: "16c43ee433c99894886d366218714d15",
          907: "e09eda11558d9b8f6cfffb0b3ff2cce9",
          1054: "928468674670d05e2a8838aa146753a3",
          1242: "e4df11a7133374d10baf2b9d8f7c6a3a",
          1604: "24e1be015956df272daf77c19c282fe9",
          1822: "c806b52d0f9dc0904680a84dad28aace",
          1868: "455f8e05f8ccead0d55c6a32ec7b4a43",
          2156: "596cd804bdd377d81e886035d609b86d",
          2171: "0b2f626c8fb1a44bfa7050b301765676",
          2221: "a72d15e1cb72cc68ce4c0030ac736156",
          2229: "5a122f2855bc8a261459866d7ae0a64d",
          2243: "6d07608d7cecb109c3eaf09f78515154",
          2347: "86f01f16b632d8ed46ef794b23abdeb1",
          2365: "41d8b6d91d3a238b45fded34b2fd3d29",
          2398: "a7e2daa5567a6505fbc7bae5eef1eb71",
          2466: "6819bd79e17385eae36abd28393b6d5b",
          2598: "d7708074c0634dd0352350e3676da618",
          2642: "d735d4dfe452e99fc259bbbd3d9e3030",
          2678: "513780819f08844e93f4457d1811e1d4",
          2782: "28024651520b7487dcc189c111cfaaad",
          2864: "a0a40d6df25162cbc7ed2fff326f1c44",
          3026: "84ad3eef9e58ef1f7fc6c6be9762746e",
          3034: "28e9d30831db0c6f10298c79cc2d23d8",
          3197: "55cac1482ad67c13a7b6bf02e19a3b96",
          3217: "32dad361fe103b183a0d8ae356249902",
          3343: "2b68ecd5acdc3c85a0eeba11084196f3",
          3370: "99ded5f10d7a415866a3da1ad4900521",
          3475: "b04eb6894156885190d0a8592187274e",
          3486: "f85b4cc0009c3b2a23847e87d92f9eb5",
          3697: "e4c61c44869e0a35deedc3f31dae56e8",
          3885: "f0dfaec71c902ba8f6c6f667d40dfa32",
          3941: "0cb323dbf208850068c6ae577343c3cb",
          4011: "7968b2b113d9da72ebf177e47dfa3721",
          4528: "254b4434f88be60834ad406904c25db4",
          4621: "6f0bbac7a6e7d0981a251975a17cc738",
          4700: "a8590c4faf94f4fb85dfa6f7ff7e4552",
          4710: "756b6b028bef25c58630473e129af177",
          4731: "6ed57d70fd822086f812e005c65af5c1",
          4799: "c6fbbe0a6f304dac073e9ca6ce31965d",
          4851: "f6c73e0de967922e8e1c92cf66f9d5e9",
          4861: "62e84c9f22b628adc318164b4b3a310d",
          4913: "eb57e71c538a6581ee4fc3d9942ca64f",
          5018: "ab5b62f2081f0bff5ea5fbab9a121cf9",
          5233: "4f83de656aa343ccad245059383956f8",
          5259: "ec37ba8ea842dd793a596c2947ff846c",
          5530: "bb3134d44bd1045795cf73949ffe6e4e",
          5639: "adee095b3a0f5ec0c64291ea3d2873b0",
          5663: "ba59cf563420e7ab203ce5f9fdb9e446",
          5742: "de5785b62f548a8b7488264786b26e59",
          5830: "75876be9666db579103bc1a72b6a9dbc",
          5832: "12a20e71663a1c88f77add3611ddae56",
          6267: "a752b2e043864e7e2986d897b427e683",
          6280: "851ddf50384ff714878dbef25ff4f926",
          6285: "d6d87aec3bfcb0d19194cfc076c2e2d7",
          6361: "92432703047b0762871e4b0a111c5afa",
          6664: "c4ffbb4f8186083f021513a906e08eaf",
          6832: "04d2413669debd7b6184b5410ec7b25d",
          6879: "c08c83a4a42df989e80b759b25588548",
          6891: "45f4842c2c21e36fcda2c750af0a18e2",
          6997: "04dbcaa561e435f17cf06f65aa17cefb",
          7010: "5600ed389691af574f1f51a7605ca960",
          7073: "6953e5894d1feee8c64ae33db22d1a7c",
          7436: "2f9a94d26c1123a0d37e8f28256bc600",
          7452: "ce8088e4f0dc28759c5856c098642c0c",
          7453: "8756ec968691b76050635a8df7803f79",
          7970: "1a18d3974e1769eb3eaf353570e856af",
          8272: "0799516b56a7341cdd9673ad3b6e6533",
          8326: "0175bb7c9a0c82d83e7312158d53ed73",
          8391: "73a99505bc1ceb48d0eb559e36b141f1",
          8755: "4f11f38a2b333659054dd9bbe9655c7e",
          8880: "c007238376ab4c53ee80cd632a7bc3a6",
          8970: "08eb14bd314e85854084a7e9ec4eae6d",
          9022: "ed8d07f2dfdd39c573359bdaa42be008",
          9028: "fae01dec20a2f09c568d1fca5b88bd2b",
          9126: "8313c9856a108806721242c364954e81",
          9320: "6e0a46545e92c64eadd0e07103fd7aa8",
          9377: "63ec9b08c245a098cf109b7aef6e1dd5",
          9550: "bf5588f033a220ae62c830c02247e082",
          9615: "d07ecfcc64c157424f127ce5800e6f7d",
          9623: "01ae05447651e86a4abc9f8beca19abb",
          9936: "86eb16649722f27cfcbc9d5d3de5fff2",
          9990: "45f9cca94b96fdde42b9682b39a08863"
        } [e] + ".js", i.miniCssF = e => "css/fceae430f43c9d1bd21ebc6d4acc11e6.css", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-gta-tv:", i.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + t) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + t), c.src = e), f[e] = [a];
            var l = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var r = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), r && r.forEach((e => e(t))), a) return a(t)
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
          8326: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
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
                d = (e, t, d, c, n, o) => {
                  try {
                    var b = e(t, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, r[1], t, 0, o, f),
                o = a => {
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
                c = "@rockstargames/sites-gta-tv",
                n = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (f[a] = {
                    get: t,
                    from: c,
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
                  var f = i(5136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[t], r);
                  if (f.then) return o.push(f.then(d, a));
                  var c = d(f);
                  if (c && c.then) return o.push(c.catch(a))
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
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != t[n]) return !1
                      } else {
                        if (d ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
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
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
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
              2229: () => r("default", "react", [1, 18, 2, 0], (() => i.e(3217).then((() => () => i(3217))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(1604).then((() => () => i(1604))))),
              5966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(2782), i.e(3026)]).then((() => () => i(3026)))))
            },
            c = {
              2229: [2229],
              8326: [5966],
              9623: [9623]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
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
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(t).catch(r)) : t(c)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              1970: 0
            };
            i.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                8326: 1
              } [a] && t.push(e[a] = (e => new Promise(((a, t) => {
                var r = i.miniCssF(e),
                  f = i.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var f = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (f === e || f === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (r = 0; r < d.length; r++) {
                      var c;
                      if ((f = (c = d[r]).getAttribute("data-href")) === e || f === a) return c
                    }
                  })(r, f)) return a();
                ((e, a, t, r, f) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", d.onerror = d.onload = t => {
                    if (d.onerror = d.onload = null, "load" === t.type) r();
                    else {
                      var c = t && ("load" === t.type ? "missing" : t.type),
                        n = t && t.target && t.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                      o.code = "CSS_CHUNK_LOAD_FAILED", o.type = c, o.request = n, d.parentNode && d.parentNode.removeChild(d), f(o)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, f, 0, a, t)
              })))(a).then((() => {
                e[a] = 0
              }), (t => {
                throw delete e[a], t
              })))
            }
          }
        })(), (() => {
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
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (t => {
                if (i.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var f = t && ("load" === t.type ? "missing" : t.type),
                    d = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, f, d = t[0],
                c = t[1],
                n = t[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (r in c) i.o(c, r) && (i.m[r] = c[r]);
                n && n(i)
              }
              for (a && a(t); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_gta_tv = self.webpackChunk_rockstargames_sites_gta_tv || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), i(3358), i(5819)
      })())
    }
  }
}));