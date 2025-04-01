! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1375ab7e-5a1e-4970-8fcd-1b36b80bd1b0", e._sentryDebugIdIdentifier = "sentry-dbid-1375ab7e-5a1e-4970-8fcd-1b36b80bd1b0")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-redemption-2",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register(["@rockstargames/modules-core-videoplayer"], (function(e, a) {
  var r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), {
    setters: [function(e) {
      Object.keys(e).forEach((function(a) {
        r[a] = e[a]
      }))
    }],
    execute: function() {
      e((() => {
        var e, t, d, f, c, n, o = {
            24075: (e, a, r) => {
              (0, r(47387).w)(1)
            },
            47387: (e, a, r) => {
              const t = r(13099).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            45408: (e, a, r) => {
              r(24075)
            },
            13099: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, f = t.length; d !== a && f >= 0;) "/" === t[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = t.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(888), r.e(3316), r.e(2530), r.e(2229), r.e(6682), r.e(5966), r.e(1)]).then((() => () => r(70001)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => f
              })
            },
            25136: e => {
              "use strict";
              e.exports = r
            }
          },
          b = {};

        function i(e) {
          var a = b[e];
          if (void 0 !== a) return a.exports;
          var r = b[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = o, i.c = b, i.y = a, i.amdO = {}, i.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return i.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, i.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          i.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, i.d(d, f), d
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          1: "69fd6911ba3c4dd5a7f35aa564779ea9",
          131: "a878de7e7ba2550725ccad9900f1f380",
          278: "b2b13e2c9e67762a079d11d572e0f549",
          299: "a69e0252cd4dde0da068ecf74f8d31c3",
          314: "4800ac2980912b1b5fa293ff9e30a077",
          662: "3dcc77b78ec19d670a7b00e3fc4068d2",
          721: "47f47792767ab39ccee7a23ebc9136cc",
          824: "54dbec0d92f83b4d72c7a49a9e27fea6",
          888: "5d8d83b3c54a038c67d8f8acae68558f",
          907: "1f5141250c6c96f4eda2407790316f8c",
          1054: "fba6094d57889acb92170dad4ead8b75",
          1242: "6251cd239cd7c86da1aa7ea0c3f0e8e7",
          1360: "e80906cdd50e191f4835b1fb7fe1bc15",
          1673: "894ffa08d112163123aada895a79773d",
          1822: "b2c36c1c42d3d40d2180ee1767d9af71",
          1868: "46be9b656e00b68ee794b2b1cbd30926",
          2024: "9567079746779c9a75430aff2642db18",
          2156: "10cde837583407489ff2819d58dfdd7c",
          2171: "6334f7468f5a16fccd15906b40e76b64",
          2221: "1b69fd9ee91d857404af5575daafd3bd",
          2229: "d45eaf259078f289fb88c7f475cc9d12",
          2243: "9b320ef846f0ddaeffc7fb00e0547bb0",
          2347: "c764e2e7f2545a6eaa237a628c343c3c",
          2365: "dd3da11c105b2ebdef23f5c32ffa946f",
          2398: "056757b1a8578b21f6bc71ec244fffd1",
          2466: "1761734302cf46c8edc3f9a4a3c601e7",
          2530: "2b3a5921c2531b9c0391d88ee413ee94",
          2642: "e9c54a1830373f37b0ce3129188d0b87",
          2678: "b1bcad35f2183a70d40afb691819c8f8",
          2864: "958344d7d9a4ef2f8893b7e970946c96",
          3034: "bf5643fc03cba83fdd5485b18720565f",
          3197: "e044e3cf60c25489a9416d25de17decb",
          3316: "ed87d1bcbb31504d4d4b16900740b34d",
          3343: "e7b5f615df3fda88ab83232b6bfe01fd",
          3370: "a96f967546a8e8a0ffe4e04ee8d22bdf",
          3447: "2fec8231bb66af3ca869c67a0c31d77b",
          3475: "b9002a2cf01f6e03e4795a0e6249bf56",
          3486: "23e209d116e82bd278629f101992f581",
          3697: "714f675492bae44dbf91453a48e9bf01",
          3885: "9cf56e40d105188b404ff77a5d8f37b7",
          3941: "75616859c5f0659d3b2a304a0397b0f3",
          4011: "edd27b9230d93b6470c570e3bdf36e62",
          4018: "bc26a3c032d76be4e00836aa90706b80",
          4054: "7906cb185cebbd727a79c70585a3b78c",
          4528: "16ced1ca735b2ab93cde17c3390d7c91",
          4621: "1e19b62ad0512878dfe6928c3cf67770",
          4700: "9a68d98f649407692e0161dff2cb844e",
          4710: "f884b7db0b7b756198b3f2f196412253",
          4731: "490e3629ab5f1494e9ffb2ba19d3ea07",
          4799: "20c54c8ecbe5b6ba49152c0c1eeda163",
          4851: "f12cb8ae137f2786448dddfa450c1e51",
          4861: "d1c89a84d8e32dd19841b3f6371a5abd",
          4913: "c1414a6b0d1009425c284d8eb7f4131c",
          5018: "79667e7c0d47437c116be34e651b71d4",
          5233: "ecf2ee9a874d64bfe1db07b53b6ba434",
          5254: "150faf2cf6d192e07d2ae2c26fe42e67",
          5259: "eaec25af06b174d4d2b0ee7a2bab6e6f",
          5530: "8d53febb53cb96aa8c64b8ced07c7282",
          5639: "f237b41dd3f15490db0b741eb68514aa",
          5663: "2875d0e742ee8c094388955d9e20686f",
          5742: "9bb6b2f0be27fa81d9dfaed2bf0e5fba",
          5830: "c95f919fa9c3ed997e9f5452d1309782",
          5832: "27b69577fd901767ad31be03cf55ed0a",
          5966: "a90aa86d7555e83c4fdac9d48e244c27",
          6267: "23d380b1afa50e2e753d5cd5d525da62",
          6280: "0ffdd843b074757d7bcf54d6d60e1e57",
          6285: "9f633d58468771a7ef498e01b7a9d070",
          6361: "fa826d8775c8f09cd433e9779688fcf8",
          6664: "851c5479e496ba54d007180d6f865ecc",
          6682: "e3c754aea6980c804e57d4d3e54c7560",
          6879: "2b179a481bfcbcd7baecddaa52dd4973",
          6891: "c460a5ae25703e3d51f01f84fb29830f",
          6997: "1cedbe44e76db7de10d4643005268ecb",
          7010: "714d6fc1be4380eebe0f68c42345f160",
          7073: "d6680a7fe86ec1600e6f20b75eedd70d",
          7131: "3832bbad97c8a1bf2812231f6694c432",
          7436: "8015183e0067a3df0814ecfc6a0a5c53",
          7452: "979c30b74f9e253ae28e6d666257e67c",
          7453: "249d21fab009edc03a1fea76ed035f34",
          7868: "d74edbfca41a1ff96ad7ab1f9432d9c5",
          7970: "4c77c60cca9bb8a91f37737060bcfc87",
          8272: "a8e76cc52573776d85612b0279a5262a",
          8391: "af439a40690609089f6b784b10862398",
          8755: "0e27fa6eafb06c8e027652b72e84f6fb",
          8880: "12b2a25d7389c66c178441d15eae713e",
          8970: "055d0675c5326b0841928ebb5fc135ee",
          9022: "07a5fdee273666c62c6e1c430a2c01d4",
          9028: "e4942e058251ac62ae7efc4fb25ab1b9",
          9126: "27ccc9c2e73785a5f5c144d5355b806f",
          9377: "8ad6bc531c47722802a11be92dc1d4fe",
          9512: "1b62be06f116823d312fe9d9a82bcc8c",
          9615: "52f81db535f31295d0334b127883ded4",
          9936: "d4c48fc5b1f96b037090792adb517c3c",
          9990: "a97a5ec0f0166a12bc22cbed90e5e23c"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, f = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (d[e]) d[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", f + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
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
          1: [31879]
        }, n = {
          31879: ["default", "./index", 25136]
        }, i.f.remotes = (e, a) => {
          i.o(c, e) && c[e].forEach((e => {
            var r = i.R;
            r || (r = []);
            var t = n[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                f = (e, r, f, c, n, o) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), d);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    d(e)
                  }
                },
                c = (e, a, d) => f(a.get, t[1], r, 0, o, d),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(i, t[2], 0, 0, ((e, a, r) => e ? f(i.I, t[0], 0, e, c, r) : d()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var f = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    n = d[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (n("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([i.e(2024), i.e(2229), i.e(1673)]).then((() => () => i(85950))))), n("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([i.e(888), i.e(3316), i.e(1360), i.e(2229), i.e(6682), i.e(5966), i.e(7131)]).then((() => () => i(37131))))), n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(888), i.e(2229), i.e(6682)]).then((() => () => i(17560))))), n("lodash", "4.17.21", (() => i.e(7868).then((() => () => i(17868))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(54018))))), n("react", "18.2.0", (() => i.e(3447).then((() => () => i(13447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var d = i(25136);
                  if (!d) return;
                  var f = e => e && e.init && e.init(i.S[r], t);
                  if (d.then) return o.push(d.then(f, a));
                  var c = f(d);
                  if (c && c.then) return o.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), o.length ? e[r] = Promise.all(o).then((() => e[r] = 1)) : e[r] = 1
            }
          }
        })(), (() => {
          var e;
          i.g.importScripts && (e = i.g.location + "");
          var a = i.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = (r, t) => {
              if (0 in r) {
                t = e(t);
                var d = r[0],
                  f = d < 0;
                f && (d = -d - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > d && !f : "" == s != f);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= d) {
                        if (b != r[n]) return !1
                      } else {
                        if (f ? b > r[n] : b < r[n]) return !1;
                        b != r[n] && (o = !1)
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
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, d) => {
              var f = r[t];
              return (t = Object.keys(f).reduce(((r, t) => !a(d, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    f = (typeof d)[0];
                  if (t >= r.length) return "u" == f;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (f != n) return "o" == f && "n" == n || "s" == n || "u" == f;
                  if ("o" != f && "u" != f && d != c) return d < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && f[t]
            },
            t = (e => function(a, r, t, d) {
              var f = i.I(a);
              return f && f.then ? f.then(e.bind(e, a, i.S[a], r, t, d)) : e(a, i.S[a], r, t, d)
            })(((e, a, t, d, f) => {
              var c = a && i.o(a, t) && r(a, t, d);
              return c ? (e => (e.loaded = 1, e.get()))(c) : f()
            })),
            d = {},
            f = {
              62229: () => t("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(13447))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(54018))))),
              16188: () => t("default", "lodash", [1, 4, 17, 21], (() => i.e(7868).then((() => () => i(17868))))),
              95966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => () => i(17560))),
              47224: () => t("default", "@rsgweb/modules-core-agegate", [1, "workspace:^"], (() => Promise.all([i.e(1360), i.e(9512)]).then((() => () => i(37131))))),
              81788: () => t("default", "@rsgweb/locale-tools", [1, "workspace:^"], (() => Promise.all([i.e(2024), i.e(4054)]).then((() => () => i(85950)))))
            },
            c = {
              1: [47224, 81788],
              2229: [62229],
              5966: [95966],
              6682: [9623, 16188]
            },
            n = {};
          i.f.consumes = (e, a) => {
            i.o(c, e) && c[e].forEach((e => {
              if (i.o(d, e)) return a.push(d[e]);
              if (!n[e]) {
                var r = a => {
                  d[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete d[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = f[e]();
                  c.then ? a.push(d[e] = c.then(r).catch(t)) : r(c)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          i.b = document.baseURI || self.location.href;
          var e = {
            5082: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = i.p + i.u(a),
                c = new Error;
              i.l(f, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, f = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < f.length; o++) d = f[o], i.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(45408), i(85819)
      })())
    }
  }
}));