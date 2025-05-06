! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "84b9af0c-ac4b-440e-a9fd-ed3a33980821", e._sentryDebugIdIdentifier = "sentry-dbid-84b9af0c-ac4b-440e-a9fd-ed3a33980821")
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
          131: "431b6cc61aff03ca5a5cce4ffee6fcfb",
          278: "04447e88afc12e6d8bc99d23f3d7ae04",
          299: "59161de5bc1d0bcbcf93b60891413e2b",
          314: "896d761397f649080ba34a139644fdad",
          662: "1c0836af3e968a4e7c0ef97ea0e44a35",
          721: "4f58c5089af7bc1024135e04d7ed6b60",
          824: "5c4e6490e9e9f0bb9375556a9148a6b7",
          907: "38cb6218c70f5f1fbec883d2c5f6f565",
          1054: "dba796764d3f96e76461318d8f147bc0",
          1149: "6c2e627caf59fba1a27e298291767637",
          1242: "4ea005c78fe8c9a9635ff097bb64b9c3",
          1822: "59bbd0f5afb4107e2144df580ad2d953",
          1868: "eb660628dcf5ddd42043fafbe9ad4b1c",
          2156: "4df7b3dc166823d2bc6bdaa73325b5c4",
          2171: "d39543a033292cf9e108a3c8a5dbc75f",
          2221: "7e1c03cf1c8991b43e1aa774f8cf1fcc",
          2229: "5a122f2855bc8a261459866d7ae0a64d",
          2243: "533364a74c9430a586fa96f9fceb9a71",
          2347: "bf11177da2d5ad47c2deb6a53bbde093",
          2365: "d606c6ad5bea32048537aac88cd932d2",
          2398: "51a5216c28018071ee459070cf290287",
          2466: "c1a18dee3fd01de7c89336b55835c696",
          2642: "1a70a69f16a5ba664c6022406bce0cf7",
          2678: "41d3480f3033aa9fefc53701b27c3eaf",
          2864: "ad49de344427d5e3f29b653929a7c81a",
          3034: "11e9c232ed6a1bac7f9855e5a6a3a1b2",
          3197: "7842a0b66cab78b23205d00c9e3a0429",
          3343: "a02ab075392b48bdc3902fb9f9bfb4c1",
          3370: "c0e96454881e8b0ffd9a2f07b9c593fc",
          3447: "eb06c9b45620971db44d982e439bdefb",
          3475: "f4ccb1a4c2b5d4b64422fc3c75df783a",
          3486: "016502601592892570ae01b5c49779ab",
          3697: "9b2d0aebed7e230fd6503616ca4e4843",
          3885: "2f953795308f1e90d96ece08ba5e98b7",
          3941: "6e34119bf2bb9d190b73db188f2908c3",
          4011: "9d33b7fa7e95eccf03ee20cb52c32c77",
          4018: "c80285f87ef6ec1798e5aedc10ffa37c",
          4528: "ae93f1a5f0603147a46c5cf22c291d96",
          4621: "166e4f2a24943ae8b158787b5bdb9aab",
          4700: "59f254984ceaa1fcfa97d296500921b9",
          4710: "ab9c0db3bd8d5e05ef3c9128b22664ee",
          4731: "7766f943ed6e9a0b4c28810175690597",
          4799: "4fdb15ae7e559d064d2019348f1bbad5",
          4851: "e7cb323d880c2321f948f0aa31a28238",
          4861: "e004bba212425754c70ba50465aab4bc",
          4913: "064795a90613b63d4978b3d6b4d69ffc",
          5018: "1d372b63e1a9e046075f77d3c2a151e5",
          5233: "bb4c04427bfe81430e61aafb7d3c897d",
          5254: "75c71c78fafaf6c63cfc30a7ba8be13d",
          5259: "1764769fd8efae65af0144c0e2d83f79",
          5310: "ff55a528586684af443d5dad8d239fc2",
          5530: "1876535122dbc42dd8c0069290f529d6",
          5639: "2c95b6de169af22d249855e20b9b951d",
          5663: "df7d46f3624650ea9838521d654dc740",
          5705: "b1d3d664cc7bc5e6adc675d9ba610bc9",
          5742: "1b2888a3ef57ed5860b045aef930c592",
          5830: "ee7b8a0ab721bab4acb2de5ac10b6b92",
          5832: "141c073e37e9adbf6ee110f1cdb79e1a",
          6267: "f8a82deffc4d8b80be9b175fd338a62e",
          6280: "027c0abf048266c524f418858bb87558",
          6285: "af27fe1b8252ae28bb76409c02be00d6",
          6361: "903540c1e7a0ea62e1db6b3340c40a18",
          6664: "943ca88f85a6c59eea7a7c771f9ebfe5",
          6879: "11eb47df529ab622f9c76c6811be3d88",
          6891: "f41e70a990694e86277e536c58b0095e",
          6997: "96acdd575be68ae5f9350134ec15a7ce",
          7010: "4e82d749f1f41ba99ab8e72c32f5e30b",
          7073: "cccd09c5b70bb2a8cf9936eb03ece4e5",
          7436: "f51b4b88469b30698f0e5a2961684753",
          7452: "11e9bcbe3a11930dca6ee96e3a0c94d0",
          7453: "6b60ff23fa019506f8f3a21b18aa5e90",
          7970: "505300896fe6e3412833d35863fb0eff",
          8222: "22fa946e579d36fe41ba472c39a62e0f",
          8272: "c4e142c640335ddf33333632104ffd56",
          8391: "6b5fd04b79db93c94c0ff0dc652eba74",
          8755: "a6409a472e7ca3fe4b8a5e4a50e29a00",
          8880: "9bd17bdb6741a509b5d91fdbeb433125",
          8970: "9f6dd38e62730ada4136141084bd0038",
          8978: "9c148bd4a27bb6da99f179ee8f9595f5",
          9022: "b67265b8060878503c95e1844af3398d",
          9028: "f91584a9389f37bb41c6a0bd8296838e",
          9126: "c7753448c347b5e8160c9369d765bc49",
          9377: "efdc58c2a0e40602479570c06d70d797",
          9615: "78e3ceb59f1fd02fa6a7149b4e75f8d3",
          9623: "01ae05447651e86a4abc9f8beca19abb",
          9936: "79da6260e29a1dbcd1f9900d1b495bd3",
          9990: "3cd7818ec9be6f0fa992bfcc6be2369b"
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