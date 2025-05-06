! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7992c938-6453-40ec-80e3-36b23d6a0612", e._sentryDebugIdIdentifier = "sentry-dbid-7992c938-6453-40ec-80e3-36b23d6a0612")
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
        var e, t, f, d, c, n, o = {
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
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, d = t.length; f !== a && d >= 0;) "/" === t[--d] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var c = t.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            85819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(888), r.e(3316), r.e(2530), r.e(2229), r.e(6682), r.e(5966), r.e(1)]).then((() => () => r(70001)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => d
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
          var f = Object.create(null);
          i.r(f);
          var d = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => d[e] = () => a[e]));
          return d.default = () => a, i.d(f, d), f
        }, i.d = (e, a) => {
          for (var r in a) i.o(a, r) && !i.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, i.f = {}, i.e = e => Promise.all(Object.keys(i.f).reduce(((a, r) => (i.f[r](e, a), a)), [])), i.u = e => "js/" + {
          1: "1501fb575b915a4f4edaa09b667cc9cd",
          131: "eeea402e793bb29c5c5bd7a8fe718f71",
          278: "9ba24ec21c17439f4cebb275d1fad517",
          299: "32a04c2333a6a6e7cfa28c1049b4065f",
          314: "0bb74b245dc9e5d5bc55d2603a12b8d4",
          662: "342b730e2aec20a1de3f92e85b0e7385",
          721: "6e32ff7b612948edc308e3f25d7a6d56",
          824: "f6559ffac03acf1d789abeaa51af3001",
          888: "0429633fd7b150138b3cfcc192f10754",
          907: "5b102aaeafc5f9f42bafc767a4698c50",
          1054: "233dc6ae7fa55b9b6841e5e400b54256",
          1242: "9f1a5e1ab9d2d4a3f630f3b89beb6f3b",
          1360: "2c5defb2faae7a6dedb5cfddb1aceea6",
          1673: "0ca7552f37294f6909677f4b8bbd3661",
          1822: "2b8ce963645010648fcb147bd34ac51c",
          1868: "a796acb008ea5cc1cfac49df92e612fd",
          2024: "73be83666657710efbad116a32d9b4d5",
          2156: "e0f0efcacb18c8b2103defcbb3285dc1",
          2171: "1b68f5b76e94742a55a8c9688ab19bfb",
          2221: "90eede850d71becdd5f12ec71170818f",
          2229: "d45eaf259078f289fb88c7f475cc9d12",
          2243: "4b256ca981663ef0e01fada26e68830d",
          2347: "a5dddb8852c54be3226c290f09ac1a23",
          2365: "6c42907cda67a31bd8da4fa98a495b67",
          2398: "b9e35388015c4f5ded4be5e66acd2901",
          2466: "831c1599feaca53518de3786104ba6cb",
          2530: "6f26ee2df94f997a02f662c2309c82dd",
          2642: "94f2b03683f19b79a675a546fc74aaab",
          2678: "8d15691d60e3dfa08a907cac3db68f47",
          2864: "609480864bc44126416b9f9079a04d16",
          3034: "e0ac5528ee1cb0cd17dd2ce06ef1cfe2",
          3197: "eea1fe45d79ff06555ed588d323763b6",
          3316: "aaf5c7279f82af0a6b4388ad728c0674",
          3343: "ea5e16051ce972b4307e1693cac6f89f",
          3370: "49436f533c99c89e89a58bae85122909",
          3447: "8babaabe02007c422da6a7cd4107a76a",
          3475: "308e974b6e7dd0689d4470aa8305619b",
          3486: "0bd7b4640d126663ba6d904187c2bc94",
          3697: "31b99fe37e1685565d25194c6a02f4fa",
          3885: "27f2c351bf5b6ee89a67ab6fa1f7c4c4",
          3941: "809c1948849a1f988a6105bafaa94515",
          4011: "6314ae3469e8ea66fb443e595d1ea9d6",
          4018: "b2f2221eba52698e86f991435597018a",
          4054: "93447dd25a21b29ac153078a7d6a6eb5",
          4528: "b200e1aed9d6c9d48d40a35349e63b0a",
          4621: "1cfc0becee1d1b308b50e538ae9cb2e6",
          4700: "167e373240d8b9646be434b571530a24",
          4710: "7469ac9d9021c4ec597c5b054669359a",
          4731: "55725abf3fc3d95ce54c02a95c831ac7",
          4799: "107f2122fd5102e9f2feba21e84547b1",
          4851: "4185dec7430cf9f8d24c602b82b9761b",
          4861: "039c99b5ef87768757e32edc8c9c5d27",
          4913: "14c838c4cc3e2d21902c908706d2b680",
          5018: "9f8b1beffbb980de95464fabad433e43",
          5233: "6b05d910e08cd55f878c45a9deb54064",
          5254: "75e4c3a6deaa0f7c9ca3b0927228cc2e",
          5259: "f366e002dbeba98deced94600566fa6f",
          5530: "25869ac6887502a9ec4bc162d6381779",
          5639: "0ae21b3e871b29d2e72789ae9d3e3c3f",
          5663: "c53319a35c6dee593b81a421c97e0341",
          5742: "1c79924f12a816a843454728215a2a5b",
          5830: "34e53bacc4be9bf890537bcbd96967fd",
          5832: "3da218cb8e20a2a61a2ed5c721fd5708",
          5966: "a90aa86d7555e83c4fdac9d48e244c27",
          6267: "13ac2abed3c6806a3d775239e722b36b",
          6280: "db0775cf2eb91ecfdcb19ed5d761077c",
          6285: "e831e4e7366498b4f0ffb4f3915007f5",
          6361: "2ec558262d132e97be29ab8bf84c1027",
          6664: "9367579f174b274cd1ef043afc68da67",
          6682: "8b3699be2935ee241bde699207e5074c",
          6879: "9e78314801cb3aca7593db96c24c5c42",
          6891: "65fd11a4110be6ed5961ce49f41509e9",
          6997: "c7eb2ffe78ad4068dedbcd5f5c51f2d8",
          7010: "b6dd0c098030380e3dac61a35885a47c",
          7073: "b5899a8cca0858ebb52ffeb812eb8a63",
          7131: "edb05c3a80644958119eb7112edfb1b3",
          7436: "9d4d1d79b164111b004e5226a75e7b05",
          7452: "8371cab545f33595fa85c4a3743c499e",
          7453: "c19443546a53afe9b0f631086e238aa3",
          7868: "52a9e700a4bc635b5f2b6b42d31d615e",
          7970: "534f3bf84ba1a1a9ddda27fa75651807",
          8272: "b5387bcad9f324a3042ca39ddcccac68",
          8391: "2e8bf047a089a1a1bfb97ba7e5f0f8b8",
          8755: "c716dced9afb8976dae8fcf88e8ec990",
          8880: "55da54b86502f6e2ba46ccc22239d144",
          8970: "61a50a6c45d7bf20b010871efe6fa81c",
          9022: "61799118dbd444434c67214997f26d09",
          9028: "672cb2a43e32daca776faaba8b005cda",
          9126: "74291b82425e9162240ab2f999a9d0b7",
          9377: "61e7afdaa1b10ffd0fafa64454030f5f",
          9512: "ca120d1a00dc0c7930033a44851deb72",
          9615: "382e6311a60195c3aa5c5da45aaaa7e0",
          9936: "2f964e3c13e84b692cf116b3da28af4b",
          9990: "4cf939d2d2dd559224256384f59ce10d"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-red-dead-redemption-2:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), b = 0; b < o.length; b++) {
                var s = o[b];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == d + r) {
                  c = s;
                  break
                }
              }
            c || (n = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, i.nc && c.setAttribute("nonce", i.nc), c.setAttribute("data-webpack", d + r), c.src = e), f[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
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
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), i.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                d = (e, r, d, c, n, o) => {
                  try {
                    var b = e(r, d);
                    if (!b || !b.then) return n(b, c, o);
                    var i = b.then((e => n(e, c)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, i.m[e] = e => {
                    e.exports = a()
                  }
                };
              d(i, t[2], 0, 0, ((e, a, r) => e ? d(i.I, t[0], 0, e, c, r) : f()), 1)
            }
          }))
        }, (() => {
          i.S = {};
          var e = {},
            a = {};
          i.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              i.o(i.S, r) || (i.S[r] = {});
              var d = i.S[r],
                c = "@rockstargames/sites-red-dead-redemption-2",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
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
                  var f = i(25136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (f.then) return o.push(f.then(d, a));
                  var c = d(f);
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
                var f = r[0],
                  d = f < 0;
                d && (f = -f - 1);
                for (var c = 0, n = 1, o = !0;; n++, c++) {
                  var b, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(b = t[c]))[0])) return !o || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (n <= f) {
                        if (b != r[n]) return !1
                      } else {
                        if (d ? b > r[n] : b < r[n]) return !1;
                        b != r[n] && (o = !1)
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
              for (c = 1; c < r.length; c++) {
                var p = r[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var d = r[t];
              return (t = Object.keys(d).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    d = (typeof f)[0];
                  if (t >= r.length) return "u" == d;
                  var c = r[t],
                    n = (typeof c)[0];
                  if (d != n) return "o" == d && "n" == n || "s" == n || "u" == d;
                  if ("o" != d && "u" != d && f != c) return f < c;
                  t++
                }
              })(r, t) ? r : t), 0)) && d[t]
            },
            t = (e => function(a, r, t, f) {
              var d = i.I(a);
              return d && d.then ? d.then(e.bind(e, a, i.S[a], r, t, f)) : e(a, i.S[a], r, t, f)
            })(((e, a, t, f, d) => {
              var c = a && i.o(a, t) && r(a, t, f);
              return c ? (e => (e.loaded = 1, e.get()))(c) : d()
            })),
            f = {},
            d = {
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
              if (i.o(f, e)) return a.push(f[e]);
              if (!n[e]) {
                var r = a => {
                  f[e] = 0, i.m[e] = r => {
                    delete i.c[e], r.exports = a()
                  }
                };
                n[e] = !0;
                var t = a => {
                  delete f[e], i.m[e] = r => {
                    throw delete i.c[e], a
                  }
                };
                try {
                  var c = d[e]();
                  c.then ? a.push(f[e] = c.then(r).catch(t)) : r(c)
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
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var d = i.p + i.u(a),
                c = new Error;
              i.l(d, (r => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + f + ": " + d + ")", c.name = "ChunkLoadError", c.type = f, c.request = d, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, d = r[0],
                c = r[1],
                n = r[2],
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(45408), i(85819)
      })())
    }
  }
}));