! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad16c44a-94a8-43a2-a1c9-ee5c5b4dab13", e._sentryDebugIdIdentifier = "sentry-dbid-ad16c44a-94a8-43a2-a1c9-ee5c5b4dab13")
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
          131: "a06e6132ff3e29960257355f45a3b0ff",
          278: "2db2e67774447eab38509660602ea19f",
          299: "5621e23054399f28ed3166762d944241",
          314: "6ffc26d1031fe4946e9b5b8bf7a4d648",
          662: "7bec3ee1bc87a3993ab7543958cd123d",
          721: "8f8182466f986194ae9ae25c54f3b6b6",
          824: "6c65c44991765548ee1529aec1679634",
          907: "42971c60ed80ba9c51b9be86a80c9191",
          1054: "07063ac6fb2e7f9e72099e1c48ad30ce",
          1074: "94810b3ec60e94ba48c583c1d9e5c3e3",
          1242: "af8c3d5277c5d9411a702b0ee492d4ec",
          1299: "0384f9b079b9f5a3f5a93a10d23d0465",
          1673: "0e2c5df6000ce93c2450410f43bc5804",
          1822: "877fa812b0c0468877f4c8d717577b17",
          1868: "d63ce0b9ba9a0c8f4cf2c881d2015601",
          2024: "a0865e2bc39278c28113fd4836aea0ed",
          2156: "508acad8d60abba92d22469c9fce4dc2",
          2171: "12b4b07042fb4d9dbbe3d7d75683d060",
          2221: "5d42453cebdafe8bb1235af9fbd60af5",
          2229: "28ec2fca9667d257045748187bd4980f",
          2243: "3064c871ec86c0a0255573e0a297eb63",
          2347: "abb8fde9e5734e0bef16c98f6aa2be57",
          2365: "8feac47cccb8886b939de268f22cb105",
          2398: "83e49d06c164f1bc99db14c81b43e0cd",
          2466: "2d76dbfe019aa33a59a72e213047077b",
          2642: "d885d3b8eb9f34ad5f12d5fbba24f800",
          2678: "eeab841a8fff9789e8f71f2fc192c709",
          2864: "eacb3b23e01cafe6d472a8a7b97860bb",
          3034: "f2f1dc9b61f6bdeb2c5560c534e04ba4",
          3054: "b48c0bd35aa74925a64410033292239a",
          3197: "0532dc285ac3440a8baabe6cb9b6087c",
          3343: "9db3566c627ffe7d69025d4e6b9d5988",
          3370: "bd865b5c86b267929e5042337df0f2dd",
          3447: "56b606ef5a57ba8a2111befecbede691",
          3475: "a51f3e384b537c5993d4b16c15df777c",
          3486: "c4f7157a08dacf1990884ad6761fe895",
          3697: "3c2fff92c210ad758e4ad647ddaac2a4",
          3885: "06942539b2b08c3b22348e3be98f02dd",
          3941: "2fead787c7fc148b1084b694597c5526",
          4011: "0331618b1f2ecabe9c541fb30a76feb1",
          4018: "54783ffd4f620715a17a6d01cdef1ca9",
          4054: "be23d00d1621e4639d324ebd60ee505b",
          4528: "4614a8f2816e068f868b012e63fa0160",
          4621: "9a787f1f87df0702876d62bb473fc963",
          4700: "575bab9244a4b96163c03606ecd2d952",
          4710: "4d5d92faee5f94bf228e49bb0e843bae",
          4731: "13b0864a105a8a00e843cab7fd859a07",
          4799: "938baaee0cd94d51ba86aaab5af6aea2",
          4851: "22ddb0489f81a645d7c3a66ad440a4d8",
          4861: "d4155f560105b38e76b777b6c43c3b68",
          4913: "dd289cb6d56329854d203dec297ee06b",
          5018: "f1c6c52a98a394850e9ed69074ef2964",
          5233: "f1f4179dac3273323031980bc5474e48",
          5254: "403719ece3d0ab872fe079c1f2151d20",
          5259: "a9277928dad2974806312a77a4001699",
          5530: "3222fbb05227519b8dffe7a3c7fe60db",
          5639: "80091aaef29b95dd78ab081298aaeeef",
          5663: "e0234d0303dda1058cc374449de78676",
          5742: "4233ef00f082d670def626c6b6f9fe4e",
          5830: "219aaefce523d04988e95ddbe75b1751",
          5832: "800cd1a9a45c7426ebe1d3102ec7b91a",
          6267: "d88142179bcc6a30a50ca67f61dbd454",
          6280: "e4cfc79a76f11d240fa2612565128e04",
          6285: "14b0ce01154f61eb2e76b5d5aa660fe6",
          6361: "b3af3453172c1263753a55156daf4b69",
          6664: "da53fdc659cf7827d5f9c282fbdb6c23",
          6682: "9350294d0304b89ad0f069cd88c6f6ea",
          6879: "82666584490f50d8ec2251294b12e749",
          6891: "a6a7034ed56f4b469187f63c2235a4bb",
          6997: "07f5acf61b59aac2d567bad5f310752a",
          7010: "614b7550cadcd25c9c8828d7378c322b",
          7073: "8e6a9b6f0751ae9227a46e78d5b6eaac",
          7127: "8775703867f2d27709fddd0cda13ab59",
          7436: "764046e7fd3f0b8c2b475d35a2ef2a36",
          7452: "b6e4176605a00a3754733a73b4328173",
          7453: "72cc60c048b7104ae42991ef4f0f5d22",
          7970: "650cf8abf0ba73c6de69d2b511cca200",
          8272: "576771c4a5fcf4412d48ce6cb988903d",
          8391: "edcb9518a849014a117f8c74f6e0cab8",
          8742: "ec66f29dbf7bc6d0f247ec067904f9e8",
          8755: "c176549220ee95cf13053aaed6c2d10b",
          8880: "4c454937f319c2b163c847f8a2f1d966",
          8970: "4a03580b7abb722c5a0ec941c580159e",
          9022: "0727cfe2d1c9edd9d2c2e39358869d22",
          9028: "390e31ef05c2f18cb26a947e7363cc56",
          9126: "c9a62a9803ec0143d0cfaa716df1a45f",
          9235: "f23ac6a669cdc55663d0cc097f3e71a1",
          9377: "7979eac3894c8ee5970f995e8fc6ae56",
          9615: "2a15debd4f7516bcdb442d2edb2dd429",
          9936: "0984b4756cb6dd99c8c4bab2f79b2603",
          9990: "6d20a5431d6e253d0d21a16eecff669e"
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