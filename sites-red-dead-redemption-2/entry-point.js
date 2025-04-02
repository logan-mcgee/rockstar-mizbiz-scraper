! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "eb9ef44c-320f-4529-b0ae-5a44fce83483", e._sentryDebugIdIdentifier = "sentry-dbid-eb9ef44c-320f-4529-b0ae-5a44fce83483")
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
          1: "21e583bd44ade05817eec9b08a51790c",
          131: "5246146829162f5ac63fcc553b3a2029",
          278: "d2ce2d8300481c69fdee377bd442061f",
          299: "5db72f9c6a92bdb364644f6d47aa37bf",
          314: "b970cd9e99e8d391d5eaebc479c10cfd",
          662: "ee76d81f27d4c2ccf5423559dd844401",
          721: "d4c4381d8d6556a3f43913530eaf47da",
          824: "40e9454beae60e5bcc0ca56e42e3c085",
          888: "6149a9fbf6877c157c874b52827c6ba2",
          907: "10b19db27023a68af5d498923ecea8f8",
          1054: "844a7faf7f609087a5a1d0654cdbc267",
          1242: "dcad7ad7bed5de78b631db2bb9f5de71",
          1360: "d7c102f7fc35ec83def54baf0c629945",
          1673: "6da442fcc065ba49dbfee62908e74d76",
          1822: "c7ad7a3cc64eda49a9d8546f364ac838",
          1868: "7e26c0d97f021ce6630f16dc7d4f8c32",
          2024: "3cfbcddf5436fa8594a0ca0ba444544a",
          2156: "df4b527e9c9275f1ca65d2180399ccb0",
          2171: "722355999a6c5c455066b199153ad3cf",
          2221: "f65130246a0897aa01d7e7a11e0e8c81",
          2229: "d45eaf259078f289fb88c7f475cc9d12",
          2243: "8299a47d7992fcd46f12dff595ecc76e",
          2347: "a51cafeace4060fbb0ebf25939b202bc",
          2365: "30f7f4d7d243d75fe45f142bbb90a139",
          2398: "fefa269c436a9666e67e2ecc01f5cb8c",
          2466: "f411d0d4fe84ec58db5e80847dfd813e",
          2530: "ca3003c7431427a15a1c4e866394d043",
          2642: "196361c7128b834c34a519c95162b7c8",
          2678: "ddb681ea5af1050480bf669bbab652f8",
          2864: "f22bc4fe7249557a2031b000435ffd06",
          3034: "3358ed571853007d6cd459642db5d08c",
          3197: "e12ad2c7d06c235bc111b6b4528dd413",
          3316: "1884837e21b4c2ee1eeec0c96dd517ef",
          3343: "cac6a0254e72f4d4f4b0a0a7e0ea3af2",
          3370: "39ada94ee8de9ca761e5f491295ff464",
          3447: "76b2cbc5a609adf361963196c1d66000",
          3475: "4feec3961b0729640ad8a4e1aa751bb1",
          3486: "59b8fec4d669476d0771459ef984b53c",
          3697: "557a77fcff4186b4331d02cc0d3f177d",
          3885: "ef7ea6556f9b63b15dbf0b09de2cf94e",
          3941: "374798e4de3354eebafddabfc10f1d3e",
          4011: "8a375b3ddc77dc9cd64c5b10278f7f14",
          4018: "3df6d91f45aad162d6a99a637498d4f0",
          4054: "86ce776469d5936b9857e47aa1d23a1b",
          4528: "89a9d769275277bc555e6cc8d8dbec4a",
          4621: "562fa38dc8f50c1fc16b023f17c47897",
          4700: "0c4c74507b0bbb7bf2f9bda0262fa7bf",
          4710: "66ebddbb98d112d222af44d28683391e",
          4731: "c69d1c6f69f1d03c05cc81704a29956c",
          4799: "bd202d95d58f6b0404ab60996f74dc75",
          4851: "2dd6581a49de57ca4b050ec31b7e6ea9",
          4861: "b361177444016824e7583224f0306af8",
          4913: "5dff9c26489265a6e0473a98c171fb54",
          5018: "530fd4bf284f3681c6bd237929b80867",
          5233: "64188b87783ab1b91d8c7d11dc51d670",
          5254: "ca6747cbac343e4b9e1ea85b8c8136e5",
          5259: "15872c0501cc7c17f304828d208a1a75",
          5530: "61a04848831913356fe222f150539445",
          5639: "4fa96d0dbe84d6cb9bd4d2e2558107ea",
          5663: "56205e13c7f3f62e46ff85e7b788327f",
          5742: "daec1d9d357f10fa9b7fb45708e98c7b",
          5830: "3c9b8b2caa8b61305eb15980145a41ed",
          5832: "d6c69d201b3ecf0c77633e7c245fabd5",
          5966: "a90aa86d7555e83c4fdac9d48e244c27",
          6267: "8b5ded876218999dd679ba8a2dea26aa",
          6280: "b8d34039d2b80600b29626d25ae06791",
          6285: "280077d85be2e1a996fdd8860ad836af",
          6361: "d0064ba87efa09cc3867b9700768762b",
          6664: "e3ec8b1dfba1265bf6a1678cc50bcad3",
          6682: "996948cc27aa05d83b9636fda6f89c4b",
          6879: "59c42107aa340fdac78b10cc9e458b2c",
          6891: "d7ed1aa93d9496f1e84ebc24ebefbbad",
          6997: "d318ec1643c74810d981d17286d5ad95",
          7010: "fc11d80bbdce7188f46956cd2de16a56",
          7073: "c57a4ad799c2cf8beb0e710f50e23e55",
          7131: "b9038bcb0f48313462365374a078cfaf",
          7436: "91b5e4aa97bccc7b7aba55849b7705a3",
          7452: "81561d7e6f056e6efa3e1eec13ca9e9f",
          7453: "509439605fb36f212bcc83b7d4a591b5",
          7868: "933e0468eff9ee0bb3fde91f34be5d88",
          7970: "012551713ac97e4ae7c4ddf2f7dbb4f0",
          8272: "2bc5580f52c17be770ea69d452e31fdd",
          8391: "de978566485ba5ccf047703a24a59b4f",
          8755: "9acc23eb6882277e9aa5b6f9a8be0be6",
          8880: "145b66a705947d7824770ec2d259f840",
          8970: "446d861644120044c6bb6a2122d30a05",
          9022: "9c9affbc554c8d6436e54f54095d0d3a",
          9028: "b10d3b44ce0afb06ee5ffb227ca43a28",
          9126: "5a62b7fc525825a3fa4fe5a958383c17",
          9377: "8f5f6c2de291ffe21f72a06b47cd3bb0",
          9512: "5fa3b407d5e4855aec5ff7c99e393a6d",
          9615: "fa68b31d948495e9616083ef2a35709b",
          9936: "8e8fda594d7a0865876745c28e9487c9",
          9990: "ae0c82c163435b53918fba8471a54e4f"
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