! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4977936b-6559-44a4-a5b1-e3d36ad1ff9f", e._sentryDebugIdIdentifier = "sentry-dbid-4977936b-6559-44a4-a5b1-e3d36ad1ff9f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstar-tv",
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
        var e, t, f, d, c, n, b = {
            4075: (e, a, r) => {
              (0, r(7387).w)(1)
            },
            7387: (e, a, r) => {
              const t = r(3099).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            5408: (e, a, r) => {
              r(4075)
            },
            3099: (e, a, r) => {
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
            5819: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(1149), r.e(2229), r.e(9623), r.e(8332)]).then((() => () => r(3863)))
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
            5136: e => {
              "use strict";
              e.exports = r
            }
          },
          o = {};

        function i(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var r = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
        }
        return i.m = b, i.c = o, i.y = a, i.amdO = {}, i.n = e => {
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
          131: "a71ff9451be75c6cde5f302b15db1892",
          278: "187ec0355ffa3dc4ead5dd7930c2f0e2",
          299: "039323d9fcf35e7d4b77b623d81ba8fb",
          314: "6b11a28979d77562badb40ab0368b8ad",
          662: "be58da50938ef86faefdde10a49c951f",
          721: "376791a217f424c9629ab40a2953d06c",
          824: "4596d4f922c8a1a5280f3ac3112c58bc",
          907: "ec496f810f6cfdcc5457210eaa71be39",
          1054: "2e06fcbf0309ba8d94eb4a23177e6ee0",
          1149: "6f18dc8882042f95c1994afb2e8e6604",
          1242: "43645a22a7e77f918809bd1c5e2afe01",
          1822: "8128133be5dd0aacaf2a873ebdff9552",
          1868: "da165b73c7e524a6be04443250a313d9",
          2156: "0d19c99815e873cd1fdea9f1513376e4",
          2171: "095b8bd84d669f5889b9e10cf90b7f54",
          2221: "ccf5da7b335fa9ab3d699353f1f278a5",
          2229: "ba433af05851c9476cd0989e1b4e45d7",
          2243: "d82e1d9d0403f09a30904a40cba97169",
          2347: "0fe8e214bd2563bba8b878b2109a5f91",
          2365: "c2d380f477bd88c5c0a66ee8119f987c",
          2398: "32828800e222912e3abe0a2bf68741ac",
          2466: "50892845974389485570d66d7d1ec7b3",
          2642: "287e54aa279103e6f6a24919d1065744",
          2678: "9fc66cdf63006111f9460c01d3637372",
          2864: "608e7a91dc4e0a31fd6592131c0223e1",
          3034: "beb0f4ad276cf0dd52820a1a9101ccbb",
          3197: "df2cbecd3694fb198d6a397f5d185843",
          3343: "73d9efd8e8056631d817ff03630e3beb",
          3370: "61bd9f7fa07f3a6b9c0d2173a7ee539b",
          3447: "cd8c0cf7b8cba252cb90f5a331207d8a",
          3475: "597ef00864654dc6b437dec24d56441f",
          3486: "7c9744f9188bc9e912df6d35702d3c4c",
          3697: "263246e83acb75ebca85fe5c1e60bdd6",
          3885: "d3ef3a54dccae8cce91beb55c386dcaa",
          3941: "b056fe030cdc535eb1ad8bf187328f55",
          4011: "288fa7109b0888c48600626af55d5410",
          4018: "bf6f5f531cd944f6b1edd29560d9fcea",
          4528: "e132f5dbc1924dc01c90d65fdd750139",
          4621: "f6c350cbf0d022c6dc76d48f1365cbe9",
          4700: "dd01e3139dab78ee3ffe2bc4250aed7d",
          4710: "d2f92c69f7a07ac8fec0d0d9aab53a9f",
          4731: "ae9e11f983815f9c075bfa01bba033f8",
          4799: "ed2a81aaf1b84a8647d00f8678f3311b",
          4851: "25bff1b3ace909989f54e92a824f32c2",
          4861: "b1102b78d157f84037640bcb6020a2f0",
          4913: "d20110aa084915b8f0b8cfc29f3bf411",
          5018: "b38814edd4253c930ee0ef51d788c695",
          5233: "a8e287eba3c309d8dfea8ed766d51b63",
          5254: "25142ed298b0aff2156f8fff86885acd",
          5259: "3f6a3458564df0a96d3971639ae5e8c8",
          5310: "7aee9004a42df3b3aa6d38fd412659e5",
          5530: "6cf801bb8fa7a265c3c962aaa9bac913",
          5639: "78520f37b1f70f410fd20faad02b03bb",
          5663: "d69eddaaa02407046d0087222db809a9",
          5705: "c19f3890636823172991be17cfb47cde",
          5742: "baf832fffad736f7115764b689c76e16",
          5830: "cd9e5b38c75be12946cac788703513bd",
          5832: "122fa80cec353351f8bcc33c434ca4c4",
          6267: "f09dbd8759bb4e1b77bd9ecb18130bc8",
          6280: "82cf64a0f75ab15dde8477965a17e249",
          6285: "1c21fa1e76bd804a29d229f96c5c932c",
          6361: "da8c4e4773a67005f0d6236fd93a21dd",
          6664: "1590b1116a5ebb84fbad5f9a19b7a7c8",
          6879: "63d207377c8f203aad344d3d54a81c9a",
          6891: "91db9d3e2abb918d49b5e31e5a74e40e",
          6997: "ea1d2cfddcb6fa864d7ca02ec4e865c5",
          7010: "8a2fe686483b775a10a38d76788a4e23",
          7073: "e732b619b8bfdde2ed891c26ccfc9f2f",
          7436: "974199394745ce0a57f5919359427aeb",
          7452: "e261b316653a7ed7805a974bca889487",
          7453: "adbc453eb68eecf1ec0fbed30eeea01d",
          7970: "faaf9fac177694536bd9cf028bca3ae2",
          8272: "f46f152398d2c3ba43d1ff53bf6a08ef",
          8332: "a41d152893b1393bb0c9cffad1cc6495",
          8391: "8e10874fb5912b459fd9d2d079bcbda4",
          8755: "3c0af3b9a09c1a1d9ac9699980ac7ca2",
          8880: "d3f150c794fb7d511e7a2f75ab484ef7",
          8970: "8b633fe2281741d5b868ec1d31958ab6",
          8978: "e7bb45ca24015d88f93b445757be3e05",
          9022: "433f371907ccdf3aa8b685a736011a33",
          9028: "ab5b6c7b27d95d22052675c5ad4e980d",
          9126: "7db8bd6e85fb79382e629f621611f6b9",
          9377: "e9d9ab908f7029ceb69d1a2d8f0bfe86",
          9615: "cc442a50af7950f57ee82b50b530811d",
          9623: "8e1462974114adaaae9f763ccc3452cf",
          9936: "922c03fefda10677ef7912726f6fc141",
          9990: "b84ac9c51bcc00fe5e0c5ecdde1bd1cd"
        } [e] + ".js", i.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, d = "@rockstargames/sites-rockstar-tv:", i.l = (e, a, r, t) => {
          if (f[e]) f[e].push(a);
          else {
            var c, n;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), o = 0; o < b.length; o++) {
                var s = b[o];
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
          8332: [1879]
        }, n = {
          1879: ["default", "./index", 5136]
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
                d = (e, r, d, c, n, b) => {
                  try {
                    var o = e(r, d);
                    if (!o || !o.then) return n(o, c, b);
                    var i = o.then((e => n(e, c)), f);
                    if (!b) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                c = (e, a, f) => d(a.get, t[1], r, 0, b, f),
                b = a => {
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
                c = "@rockstargames/sites-rockstar-tv",
                n = (e, a, r, t) => {
                  var f = d[e] = d[e] || {},
                    n = f[a];
                  (!n || !n.loaded && (!t != !n.eager ? t : c > n.from)) && (f[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                b = [];
              return "default" === r && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5705), i.e(2229), i.e(5310), i.e(9623), i.e(8978)]).then((() => () => i(5310))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(4018))))), n("react", "18.2.0", (() => i.e(3447).then((() => () => i(3447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(5136);
                  if (!f) return;
                  var d = e => e && e.init && e.init(i.S[r], t);
                  if (f.then) return b.push(f.then(d, a));
                  var c = d(f);
                  if (c && c.then) return b.push(c.catch(a))
                } catch (e) {
                  a(e)
                }
              })()), b.length ? e[r] = Promise.all(b).then((() => e[r] = 1)) : e[r] = 1
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
                for (var c = 0, n = 1, b = !0;; n++, c++) {
                  var o, i, s = n < r.length ? (typeof r[n])[0] : "";
                  if (c >= t.length || "o" == (i = (typeof(o = t[c]))[0])) return !b || ("u" == s ? n > f && !d : "" == s != d);
                  if ("u" == i) {
                    if (!b || "u" != s) return !1
                  } else if (b)
                    if (s == i)
                      if (n <= f) {
                        if (o != r[n]) return !1
                      } else {
                        if (d ? o > r[n] : o < r[n]) return !1;
                        o != r[n] && (b = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (d || n <= f) return !1;
                    b = !1, n--
                  } else {
                    if (n <= f || i < s != d) return !1;
                    b = !1
                  } else "s" != s && "n" != s && (b = !1, n--)
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
              2229: () => t("default", "react", [1, 18, 2, 0], (() => i.e(3447).then((() => () => i(3447))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => i.e(4018).then((() => () => i(4018))))),
              5966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([i.e(5705), i.e(5310)]).then((() => () => i(5310)))))
            },
            c = {
              2229: [2229],
              8332: [5966],
              9623: [9623]
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
            5483: 0
          };
          i.f.j = (a, r) => {
            var t = i.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|9623)$/.test(a)) e[a] = 0;
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
                b = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); b < d.length; b++) f = d[b], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(5408), i(5819)
      })())
    }
  }
}));