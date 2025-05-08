! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a3f7679f-d55a-421d-b093-65ff67b55cfa", e._sentryDebugIdIdentifier = "sentry-dbid-a3f7679f-d55a-421d-b093-65ff67b55cfa")
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
        var e, f, d, c, n, o, b = {
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
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, f = 0, d = r.length; f !== a && d >= 0;) "/" === r[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = r.slice(0, d + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            82021: (e, a, t) => {
              "use strict";
              var r = {
                  "./index": () => Promise.all([t.e(8481), t.e(3681), t.e(6102), t.e(2229), t.e(6682), t.e(1179), t.e(7145), t.e(9026)]).then((() => () => t(49026)))
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
        }, f = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, s.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var r = Object.create(null);
          s.r(r);
          var d = {};
          e = e || [null, f({}), f([]), f(f)];
          for (var c = 2 & t && a;
            "object" == typeof c && !~e.indexOf(c); c = f(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, s.d(r, d), r
        }, s.d = (e, a) => {
          for (var t in a) s.o(a, t) && !s.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, s.f = {}, s.e = e => Promise.all(Object.keys(s.f).reduce(((a, t) => (s.f[t](e, a), a)), [])), s.u = e => "js/" + {
          131: "d1bd15647e10382adaf832aaab7cca4b",
          278: "c344b73e4c3e164c2f84610fc3de1a5f",
          299: "3f564ae419bd574e8c30352743613e4e",
          314: "9a438045abed0190ee3792bd2b288ce4",
          662: "df666c95dcea7e276cf9fc9ddaf759b2",
          721: "ac9bcaf1e8a5787acc4733477e6796d1",
          824: "ea66e41002cadc3555393663dca6b767",
          907: "2e4e1482f1f49a9ad6a7ef40b7b97b5f",
          920: "69852be8d1907bffe0032aea80f6dcef",
          1054: "89b3f8fad2131ab3949f8592bfcfc59f",
          1179: "d28a0a923f52f9094631afe6340c369a",
          1242: "f443243c3dc2d62229dbf3927558d57a",
          1673: "97d312fcbc6922f9a8142cabba1fd190",
          1822: "04d26b9f66f569a07aa3ec08cb722703",
          1868: "956f4752f75a6334a1a0953f5de3ae12",
          2024: "317d77f9f287f45edc199719f4fa3cf2",
          2156: "49927b6a022eaf5d7a0ed8e0876681b9",
          2171: "4b9c2f614bff30cc227a4c5935e732d7",
          2221: "49c26ddf39293b32388b256c8721ea79",
          2229: "6078f3faa0b6603161b40f1628b60c56",
          2243: "30eda6aa28fe1c7c4d733d3dab5e303e",
          2324: "60b9f17011e01240e3c7572a06348731",
          2347: "a277fda4309ca825a69423df34e871c6",
          2365: "ea9103014bfbec3cbee95b9555a55ad1",
          2398: "833ef029824bb3398166de7a997ea8c1",
          2466: "1bdf652adc322e4b768aacbd555d2a7f",
          2642: "e51058df5a0f021ad963b5229829143d",
          2678: "909a8ef00883787366e170e047bacda6",
          2772: "85a8fd7f3cc6e74c6371881dd0330ec1",
          2817: "947906d6006cfbec50204cfc8d061d1c",
          2864: "99c1a3b081f4f2927553d54c7a5d2bfa",
          3034: "d92dda6c8b0d790e8e6d4cb6b2ac7f0e",
          3197: "42ec1d316ad806dda9464b4e9ef1da1d",
          3343: "46b9499ed9e405479995af719bfcd232",
          3370: "3765f54e8b79a75499a07fcaff2f735d",
          3447: "ff7061f6ac3a73a0be7051d7138719c6",
          3475: "22c86800afea5abb8eb271408b423ca1",
          3486: "b820768427855ec04fb2b4238795d0a4",
          3681: "a3934d3eab534f1ec7ac9cdf306a5808",
          3697: "d00eb46afd1fd5a396fbfdbf62995c63",
          3885: "d748696a9a788d225cbe7be2e15d0272",
          3941: "98dbb91249cd674cfdb5a455c686dd39",
          4011: "db304ed3a2cc19bbc74e2757c74142d8",
          4018: "fbfe87eb04305e7ce415a429571382b5",
          4054: "24e4202a8818962a59aff880aac8aeed",
          4528: "2f38f3727be22a62ef13494393ced519",
          4621: "0837b9ebe84065c439c56406f7a2e8f8",
          4700: "8cb6e6790b8b73b7a3d561f11006b3df",
          4710: "e4d2710268cb19b76f7b2d45766bcee1",
          4731: "8b242e4cfbf5683904ef1e3920c33029",
          4781: "4d22c68d20c0d3f2eb40967669fc66db",
          4799: "218fd3e5a94e80e86c86b0db57ee1cb5",
          4851: "3107e3dc4c7ce1111f547bc7df7a7d70",
          4861: "68b14ac37c5c54640a05b58de2a67fa9",
          4913: "9239d660def9b3c79efcc2021762d9ad",
          5018: "3edb5d715075574dffeb436c5c95a85d",
          5233: "93b4efe1e8896c2f462eb825ca5c60e6",
          5254: "503501dd6a2e3fb1e1cea8158c9a0937",
          5259: "35e4e25059287570c3079f65b1cdd1ca",
          5530: "55d85c63c5c2b039086d99b98ed39a49",
          5639: "83a6b9519a410ad4bfe250064d74e254",
          5663: "cc8e9d982cb0b68ef189ac040658c480",
          5742: "2627bfb74f5c3a20aadebce6bbc1898a",
          5830: "01f82c40eaedb04b068311522d4b221e",
          5832: "f70d70963604af1d27b72180d8ae7599",
          6102: "4845e5685d5b98893745405788c9e9c4",
          6267: "0ebec2a5d52dbb06de8fb2be6db9fefd",
          6280: "67d35f9b249a23dfa1dc9890ba2a7766",
          6285: "854f70898bd7bce0c9d10747a89bab93",
          6361: "9edb84da595f608502c4dd0414857339",
          6664: "3dde64079e566eca383431343f906d24",
          6682: "842ddb41fb378a49055c8afd353a0e35",
          6879: "aea089bded7fbe2ce9d0de521420794e",
          6891: "fbfef63352142c8b1264f3ab8c74ec87",
          6997: "76bfc14196cdc39fc628f3f8cc3436d1",
          7010: "f6e9e6763e35930aa70c7f7ca34f788a",
          7073: "c8bae825d6f9853859817163269ed3ed",
          7145: "d3cc9515d8197d3602e685ada13fc8e1",
          7436: "c899a8aa1bbfe76e1e8b1a28d55d3ec1",
          7452: "4795503975a097407ac9050869607b32",
          7453: "34d6db73791dd298edcb52ab85b20dcc",
          7970: "c34e12768aafa9d28964f0aea1b0e06f",
          8272: "fb73763b7c7999bebedd0b5381cebd6a",
          8391: "d2331cb4394ad25b6cd4ba21614482a5",
          8481: "5f119e3e5a0b9f9c2f4291879aff9fe4",
          8755: "5a526bb3874a1e528d58aeae47ee85c0",
          8880: "16800f7e1b2bd88454d0f3c672e3f7a4",
          8970: "a4511994db768a32d47f18dd1df7c2da",
          9022: "6462a2d4076af75c8e76cc12f26bd615",
          9026: "cfe410e9e9a6b0cf2298ec093a30fb3c",
          9028: "4c77d31fc2b67eaddb51704f5a9fad37",
          9126: "0226bd1d480be8eaa2a04e83864e4ceb",
          9323: "da5c138552084a1713623d5af5b25eb5",
          9377: "272dbd720ee493e41ab07e7b827705fd",
          9615: "9dce9a3172d181bd0178c45803d0064f",
          9936: "3197a4c141734646b1600868be7ea3e5",
          9943: "fa3f7bd4767107dee59a6c2ad337fd45",
          9990: "767e009ef6e0e45d2001a82540e6f844"
        } [e] + ".js", s.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), s.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, c = "@rockstargames/sites-red-dead-online:", s.l = (e, a, t, r) => {
          if (d[e]) d[e].push(a);
          else {
            var f, n;
            if (void 0 !== t)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var i = o[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == c + t) {
                  f = i;
                  break
                }
              }
            f || (n = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, s.nc && f.setAttribute("nonce", s.nc), f.setAttribute("data-webpack", c + t), f.src = e), d[e] = [a];
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
        }, s.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, s.nmd = e => (e.paths = [], e.children || (e.children = []), e), n = {
          9026: [9566, 31879]
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
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + r[1] + '" from ' + r[2]), s.m[e] = () => {
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
                c = (e, a, f) => d(a.get, r[1], t, 0, n, f),
                n = a => {
                  r.p = 1, s.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(s, r[2], 0, 0, ((e, a, t) => e ? d(s.I, r[0], 0, e, c, t) : f()), 1)
            }
          }))
        }, (() => {
          s.S = {};
          var e = {},
            a = {};
          s.I = (t, r) => {
            r || (r = []);
            var f = a[t];
            if (f || (f = a[t] = {}), !(r.indexOf(f) >= 0)) {
              if (r.push(f), e[t]) return e[t];
              s.o(s.S, t) || (s.S[t] = {});
              var d = s.S[t],
                c = "@rockstargames/sites-red-dead-online",
                n = (e, a, t, r) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!r != !n.eager ? r : c > n.from)) && (f[a] = {
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
                    var f = s(e);
                    if (!f) return;
                    var d = e => e && e.init && e.init(s.S[t], r);
                    if (f.then) return b.push(f.then(d, a));
                    var c = d(f);
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
              var d = s.I(a);
              return d && d.then ? d.then(e.bind(e, a, s.S[a], t, r, f)) : e(a, s.S[a], t, r, f)
            })(((e, a, r, f, d) => {
              var c = a && s.o(a, r) && t(a, r, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
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
              9026: [994, 4848, 95945]
            },
            n = {};
          s.f.consumes = (e, a) => {
            s.o(c, e) && c[e].forEach((e => {
              if (s.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var t = a => {
                  f[e] = 0, s.m[e] = t => {
                    delete s.c[e], t.exports = a()
                  }
                };
                n[e] = !0;
                var r = a => {
                  delete f[e], s.m[e] = t => {
                    throw delete s.c[e], a
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
              var f = new Promise(((t, f) => r = e[a] = [t, f]));
              t.push(r[2] = f);
              var d = s.p + s.u(a),
                c = new Error;
              s.l(d, (t => {
                if (s.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
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
                for (r in c) s.o(c, r) && (s.m[r] = c[r]);
                n && n(s)
              }
              for (a && a(t); o < d.length; o++) f = d[o], s.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            t = self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), s.nc = void 0, s(45408), s(82021)
      })())
    }
  }
}));