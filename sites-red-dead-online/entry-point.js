! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2004ada2-fb73-47e8-8d18-3d9f11bb5b64", e._sentryDebugIdIdentifier = "sentry-dbid-2004ada2-fb73-47e8-8d18-3d9f11bb5b64")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-newswire-article", "@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var t = {},
    r = {};
  return Object.defineProperty(t, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        t[a] = e[a]
      }))
    }, function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, d, f, c, n, o, b = {
            24075: (e, a, t) => {
              (0, t(47387).w)(1)
            },
            47387: (e, a, t) => {
              const r = t(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            45408: (e, a, t) => {
              t(24075)
            },
            13099: (e, a, t) => {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            82021: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(8481), t.e(3681), t.e(6102), t.e(2229), t.e(6682), t.e(1179), t.e(7145), t.e(8155)]).then((() => () => t(38155)))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            },
            66819: e => {
              "use strict";
              e.exports = t
            },
            25136: e => {
              "use strict";
              e.exports = r
            }
          },
          i = {};

        function s(e) {
          var a = i[e];
          if (void 0 !== a) return a.exports;
          var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
        }
        return s.m = b, s.c = i, s.y = a, s.amdO = {}, s.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return s.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          s.r(r);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, s.d(r, f), r
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          131: "e3073c7a47d301118a639bf563948b00",
          278: "d34e67bd89ea0f83e9ec72b7fa7fad6f",
          299: "7f0e357bb563fa697a017c9d1b36ee9a",
          314: "c2041b157e1bb9d37000d313af202e96",
          662: "a473f2ee489685058d13fa666659489a",
          721: "fec8415ca6f63fe1d2ec728f491867de",
          824: "103dee7b4db4701ad1bd2daab1f0ddcd",
          907: "da5249167161d023e31b86dca7cc6285",
          920: "5356cd6aa6c432dcaa73f62ae33f93bf",
          1054: "4ba7cd5533d5ad2df7caebfc69cf5363",
          1179: "d28a0a923f52f9094631afe6340c369a",
          1242: "e6af6bca5928249487f65403c7cd6288",
          1673: "1a3cd29ee9a239c46b6dc355ef8493f7",
          1822: "452192d1836eb685d08b05fb5d049884",
          1868: "0fc163933c220aff2448e8d62afccab7",
          2024: "aa5d04bf8b0f80745ce187990d8ea5fb",
          2156: "a2fd45ed54734e93318629c8acddc83b",
          2171: "a15289fa813cadd31ea31b414484b872",
          2221: "7247727a2cfba0a7d22feb721f18d692",
          2229: "6078f3faa0b6603161b40f1628b60c56",
          2243: "b68ecb859eca258f6965ffdeabc5239e",
          2324: "a1f2d76235a1b408e8c70c784e1ad111",
          2347: "a1ab0b47db1cdfa9337c092fc861a20f",
          2365: "2224c3d356ac767716515d6a67754be1",
          2398: "f40fb7b5e3414e996a87a7f6c7920add",
          2466: "1893630d73fa54f48a79a6242d50719f",
          2642: "2bd29b836b27c8d0d273a1c73ae09b20",
          2678: "8edc8c426ed4966a6bdb2c722256848a",
          2772: "3c5b0c9a8a1da740e1a1ef8ee1a758cc",
          2817: "f0e73f31ef2755731ab93c67d97c37d2",
          2864: "060d337467157c5f62bb5fb356ed5057",
          3034: "fc12385fd13495aaf2bee48adfdc315a",
          3197: "3408d4212ac614e3392858c968a21acd",
          3343: "0c97924a63d0008dc9c1971ec66aa855",
          3370: "175bc3930ced21bd68984e737fb91190",
          3447: "01c1297c1879936766b4c1f9f81bdc9f",
          3475: "5c9dffbd1d5babb666b7c4a73aad11e1",
          3486: "53fdcceb9e70d4765f5af4df9a98648e",
          3681: "46d2073610e11a05c8442b93f4843bc7",
          3697: "cd923379fdb672e8692c6f3864b42572",
          3885: "c688e7f00ff38cb5d39b3650118477ea",
          3941: "2e069e998efd72a5879429dc21e39fe7",
          4011: "9c36279af26600dd0a0fada5d6397e36",
          4018: "3c983ce5d4671df6cd3b97c94a2d201b",
          4054: "fe9d8ae7f052909cf57ba1aa24f43792",
          4528: "6d594d0f4cb971619591c2bc332b7deb",
          4621: "bcd63aecfbde1390bcb4cba6b3b5bbf0",
          4700: "f32f2fa86e1313aae8009f714d3bb894",
          4710: "a69f4e69583bc6a8b8e6c4cefc46549e",
          4731: "c40f929bbe73e051b93ee4567e69bb9b",
          4781: "c867836a3cfd8bc8a077bf151b75a424",
          4799: "81d1e011ee8c1a6e108ad3c375af5188",
          4851: "48f2b0491a67afd11e1bb1a254b07fbe",
          4861: "af31459b2f54fae2525f54877ae32809",
          4913: "e4039523a880a7fd889866209e243988",
          5018: "61d22a097a8d2ff0cbab22fc30e81833",
          5233: "9aba9f13a6598b9e35db10cc9361fdce",
          5254: "07367b5fc02effe9c91c389c6cbd6d87",
          5259: "da7dd895867ad6d47cc7733d00fd7122",
          5530: "e74dba744ec531a5680129c1eed6bf35",
          5639: "3efbe99c064a3e261779aae4f9b944d3",
          5663: "e4a0c9faf9baba33033ba71c98adc8e6",
          5742: "a6e91616b2306df343ce507d3e4f7ece",
          5830: "a3aa6f244acf60b8ded1400c1a6fc0ff",
          5832: "776d98ba8cb3186918c7e1cfde653fda",
          6102: "20ba17d93f1a07f441c36abdebce834a",
          6267: "4848d9e6c58c1e77b8c83288f000e9bb",
          6280: "ae0d94971a9d63b138d534229a30e36f",
          6285: "f65204a526bc88f3c927369bd19f67fa",
          6361: "9b05c2ceb0d356cce0037ecd4b319fa2",
          6664: "978304ce4c4023bf2280d2e2bde8c831",
          6682: "ef47a598059fb8bd672f654370e596de",
          6879: "eed0f80be0d994c39308ad851741452c",
          6891: "4f6b583d447a3d7943b483f567a0231b",
          6997: "badaa4f8317050239a3d1f60bf6c1e23",
          7010: "e5fafd6d2ec5d760bd40f5457c6fdbc1",
          7073: "b7422a2a84b5504514c85772397e1e70",
          7145: "d3cc9515d8197d3602e685ada13fc8e1",
          7436: "17ef9bcc7cf13641b48920c9868714c6",
          7452: "633ea05dd14338ca3fd65a29ca26a96a",
          7453: "1da8ec5ca0a377155c55093162b88da2",
          7970: "a64c3c3797d0dfd69efc329cf415ff89",
          8155: "b9e624b427ccf1f937ddd07460c2b59b",
          8272: "2360ed7091396e2b5a6aa05aaef213a8",
          8391: "50cb3b577b0481b0e121c260a2c3a856",
          8481: "009df6017ff25d6c5e5ab0001803c322",
          8755: "3324ff1ed9058af5b9d27bd8cff487e4",
          8880: "8b7ae2da3b09555713375b930f20834b",
          8970: "e528cf1b0393e1b79d04c38c2c778913",
          9022: "7b61c97e1d25272a1c6a9f074c9df604",
          9028: "e4e8d91e66917e027cd561cd29f16174",
          9126: "eed259aa7f32916794da3d5887559d99",
          9323: "94c82e6ad03ded36a57911533cc9f742",
          9377: "b1963764d69783946b97c92677f40faa",
          9615: "6368ca99a30187b7c9a4883108ec43de",
          9936: "1cc531fd95b7fffd2a189bc8e40da86e",
          9943: "707495db286aba4f5e01a0f726a0de1e",
          9990: "a4066c57e4e7451c00e44202d9eb2da5"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, c = "@rockstargames/sites-red-dead-online:", s.l = (e, a, t, r) => {
          if (f[e]) f[e].push(a);
          else {
            var d, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == c + t) {
                  d = i;
                  break
                }
              }
            d || (n = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.setAttribute("data-webpack", c + t), d.src = e), f[e] = [a];
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
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          8155: [9566, 31879]
        }, o = {
          9566: ["default", "./index", 66819],
          31879: ["default", "./index", 25136]
        }, s.f.remotes = (e, a) => {
          s.o(n, e) && n[e].forEach((e => {
            var t = s.R;
            t || (t = []);
            var r = o[e];
            if (!(t.indexOf(r) >= 0)) {
              if (t.push(r), r.p) return a.push(r.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
                    throw a
                  }, r.p = 0
                },
                f = (e, t, f, c, n, o) => {
                  try {
                    var b = e(t, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(r.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, r[1], t, 0, n, d),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(s, r[2], 0, 0, ((e, a, t) => e ? f(s.I, r[0], 0, e, c, t) : d()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var f = s.S[t],
                c = "@rockstargames/sites-red-dead-online",
                n = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                o = e => {
                  var a = e => {
                    return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                    var a
                  };
                  try {
                    var d = s(e);
                    if (!d) return;
                    var f = e => e && e.init && e.init(s.S[t], r);
                    if (d.then) return b.push(d.then(f, a));
                    var c = f(d);
                    if (c && c.then) return b.push(c.catch(a))
                  } catch (e) {
                    a(e)
                  }
                },
                b = [];
              return "default" === t && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([s.e(2024), s.e(2229), s.e(1673)]).then((() => () => s(85950))))), n("@rsgweb/modules-core-feedback", "1.0.0", (() => Promise.all([s.e(8481), s.e(3681), s.e(2229), s.e(6682), s.e(4781), s.e(1179), s.e(2772)]).then((() => () => s(74781))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([s.e(8481), s.e(2229), s.e(6682)]).then((() => () => s(17560))))), n("date-fns", "4.1.0", (() => s.e(920).then((() => () => s(60920))))), n("hammerjs", "2.0.8", (() => s.e(9323).then((() => () => s(29323))))), n("prop-types", "15.8.1", (() => s.e(2817).then((() => () => s(72817))))), n("react-focus-lock", "2.9.6", (() => Promise.all([s.e(2229), s.e(7145), s.e(9943)]).then((() => () => s(12324))))), n("react-router-dom", "6.17.0", (() => Promise.all([s.e(4018), s.e(2229)]).then((() => () => s(54018))))), n("react", "18.2.0", (() => s.e(3447).then((() => () => s(13447))))), o(66819), o(25136)), b.length ? e[t] = Promise.all(b).then((() => e[t] = 1)) : e[t] = 1
            }
          }
        })(), (() => {
          var e;
          s.g.importScripts && (e = s.g.location + "");
          var a = s.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e
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
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < t.length ? (typeof t[n])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != t[n]) return !1
                      } else {
                        if (f ? b > t[n] : b < t[n]) return !1;
                        b != t[n] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || n <= d) return !1;
                    o = !1, n--
                  } else {
                    if (n <= d || i < s != f) return !1;
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
            t = (t, r, d) => {
              var f = t[r];
              return (r = Object.keys(f).reduce(((t, r) => !a(d, r) || t && !((a, t) => {
                a = e(a), t = e(t);
                for (var r = 0;;) {
                  if (r >= a.length) return r < t.length && "u" != (typeof t[r])[0];
                  var d = a[r],
                    f = (typeof d)[0];
                  if (r >= t.length) return "u" == f;
                  var c = t[r],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  r++
                }
              })(t, r) ? t : r), 0)) && f[r]
            },
            r = (e => function(a, t, r, d) {
              var f = s.I(a);
              return f && f.then ? f.then(e.bind(e, a, s.S[a], t, r, d)) : e(a, s.S[a], t, r, d)
            })(((e, a, r, d, f) => {
              var c = a && s.o(a, r) && t(a, r, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            d = {},
            f = {
              62229: () => r("default", "react", [1, 18, 2, 0], (() => s.e(3447).then((() => () => s(13447))))),
              9623: () => r("default", "react-router-dom", [1, 6, 11, 2], (() => s.e(4018).then((() => () => s(54018))))),
              30763: () => r("default", "date-fns", [1, 4, 1, 0], (() => s.e(920).then((() => () => s(60920))))),
              81788: () => r("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([s.e(2024), s.e(4054)]).then((() => () => s(85950))))),
              95966: () => r("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => s(17560))),
              57145: () => r("default", "prop-types", [1, 15, 8, 1], (() => s.e(2817).then((() => () => s(72817))))),
              994: () => r("default", "@rsgweb/modules-core-feedback", [1, "workspace:^"], (() => s.e(4781).then((() => () => s(74781))))),
              4848: () => r("default", "hammerjs", [1, 2, 0, 8], (() => s.e(9323).then((() => () => s(29323))))),
              95945: () => r("default", "react-focus-lock", [1, 2, 9, 6], (() => s.e(2324).then((() => () => s(12324)))))
            },
            c = {
              1179: [30763, 81788, 95966],
              2229: [62229],
              6682: [9623],
              7145: [57145],
              8155: [994, 4848, 95945]
            },
            n = {};
          s.f.consumes = (e, a) => {
            s.o(c, e) && c[e].forEach((e => {
              if (s.o(d, e)) return a.push(d[e]);
              if (!n[e]) {
                var t = a => {
                  d[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete d[e], s.m[e] = t => {
                    throw delete s.c[e], a
                  }
                };
                try {
                  var c = f[e]();
                  c.then ? a.push(d[e] = c.then(t).catch(r)) : t(c)
                } catch (e) {
                  r(e)
                }
              }
            }))
          }
        })(), (() => {
          s.b = document.baseURI || self.location.href;
          var e = {
            129: 0
          };
          s.f.j = (a, t) => {
            var r = s.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1179|2229|7145)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((t, d) => r = e[a] = [t, d]));
              t.push(r[2] = d);
              var f = s.p + s.u(a),
                c = new Error;
              s.l(f, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, f = t[0],
                c = t[1],
                n = t[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                n && n(s)
              }
              for (a && a(t); o < f.length; o++) d = f[o], s.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(45408), s(82021)
      })())
    }
  }
}));