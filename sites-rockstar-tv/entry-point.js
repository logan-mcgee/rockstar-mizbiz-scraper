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
          131: "7b245b18ec1edee94691225e4fcccdfe",
          278: "6159a29c2f26d5359d14fe6cd3aa7439",
          299: "e1ff0fc2f2aaa74b0c76adac228962b5",
          314: "5efdb1c2c6e1fe8e75232f28fdfb4763",
          662: "1e026063ac75e89979c0f6bbda87aa19",
          721: "ee15e55d9b04f03f6fe9562bae6d21f8",
          824: "11f5a8e9bd10a3a77a770919ad9a383f",
          907: "065e02b30ad642472a2d7ef7cb03ee1f",
          1054: "727a42c5b02f1878e1a6bc252e70f1aa",
          1149: "b3d173ea94059247e4f415b34dd0626c",
          1242: "23dee1698e5ee2af71c096b0bbb951c9",
          1822: "1ec44ab9f6efade9cebe94e25f5e1f8f",
          1868: "f71fb3f7d43a91b3a7e5d158e093afba",
          2156: "10c2b9705fd338321b6be1cac97f9892",
          2171: "c4e81fc72561766b6e6df6e0f0d8ea39",
          2221: "b12ee341ef8bbf4868d24dc5ea99cf97",
          2229: "ba433af05851c9476cd0989e1b4e45d7",
          2243: "83f25f5caae6f932217bbb3919a4acdc",
          2347: "81d79a14bb9996b782ac15ccf9fdf3e8",
          2365: "a3404d674191fae04cab2bbfce0dd2f1",
          2398: "636b216c8962d43f2afe81e20f7b243f",
          2466: "a3704f736155be799ba3457a8a1b2448",
          2642: "462f3a6d325d76e1d6c8973ac499f673",
          2678: "7171243c8196419e345de7b1f2da7edf",
          2864: "12edf2deb9d29dc3659e340a1394459f",
          3034: "124f79104df09383ef09c6d559a5e1e5",
          3197: "824d339bf333a8fde66db4358bdb042e",
          3343: "de511579fd6e31bd5ea21deb961706c5",
          3370: "27f29cd8c7548c4b51e540e00ce705e3",
          3447: "7a2d5f4959d2bd3b7b9aa502d4bc93ae",
          3475: "3068bfe44e805bd6cd4be96564799709",
          3486: "75c4d48b2e36f4854714df07bd453644",
          3697: "9d92c0efb26b0abecba1a01ae131bb70",
          3885: "7346e0061e9d07f4c4716d89b1ebbc36",
          3941: "e9179f35ae9002c232a5a5ac623d6f7c",
          4011: "cd964a5976fbc171114bffcdd074fd85",
          4018: "de69c6123501dcfa4820847be5f7b278",
          4528: "68294d1f180da8271160e3d343deab70",
          4621: "18602fadf4e6caab6ee2c139098ee859",
          4700: "8b7ee0d1220334d3dc9aa6755ca69a8e",
          4710: "66f8222113cf093dfc8a594011344263",
          4731: "33567ae2ba1a6623557ccab8df587a90",
          4799: "dedbf12c037b286c53f8e1928a07babb",
          4851: "5e6d7c77e80c7ba4e1b85195d07052db",
          4861: "52ac8a860bcb99f0650d04598245ef88",
          4913: "997ab4fb71fe441c2c55b4b8ffa319bc",
          5018: "d5208fe406b330d17b2dbcebbb2315f3",
          5233: "585f29a1149460a32dc7db5d77f2bf64",
          5254: "6f274223e7757b4c34cc824e9dd848c9",
          5259: "fe0d0ceced42bf58c3970f1e036c9eab",
          5310: "3d91fb59178cf5e3f05698f50f0f45fc",
          5530: "ba279e93a60df4e0bc08d2636d95a020",
          5639: "337ca9d115fdb6b75157fdebd28dd69e",
          5663: "a019aa64315e9a8a95452b649d043986",
          5705: "75b36c38d956b8bcd7b3a8c7fd754294",
          5742: "6be9273bdd3f94cf7313686f4d3743f3",
          5830: "e1f181a444f648dd1032122737b22076",
          5832: "ba361cf8aed15d3d0e5a123eea6a267b",
          6267: "50f52648902995cf958680e10642e0e7",
          6280: "97dff39c30a7b12cf012dee31286d8d5",
          6285: "8f60b1d334fd9995f440ad3d05858bcd",
          6361: "9395c8a537fdf9c766efab9b5f0cd11e",
          6664: "54e75cdf98675b70b9d8de6e45f07d26",
          6879: "f5e42ed3ec5560948ed351896253668b",
          6891: "91aeb68972f14a935c147a97df274c79",
          6997: "28c9b1ada8e9bd57bedbde03f090cf92",
          7010: "28519a0f38bb6529c694d401426a6998",
          7073: "94cc197ceb912a0f1d0c3296aae043e4",
          7436: "5de82db2e5667e28fc485cdc4321c5b1",
          7452: "5c37a1bb89d87ff14d156566c7348981",
          7453: "f3dd02c29a1ceda243e9ce4ed77bbe8d",
          7970: "2656f9de7b64e683bcb5b034bf86be6c",
          8272: "0730186b344e173a57a1fb7be700eadd",
          8332: "88e8ea9c870a5f8976b24b61afde7089",
          8391: "6808885578516d7d26eae01e320a636f",
          8755: "aa616d9db9d02b28d550ae59ad3f6265",
          8880: "fa54c57004a3e664d6c1ba5c40ef5aa0",
          8970: "fa59522ead24682e450abebef5aa1383",
          8978: "bb49507b6674bfcde6a14b272ece5200",
          9022: "1dcdd99bb6b08e55cb6cf3d47d1033c7",
          9028: "b71bd38c046778da4f415b498290c45e",
          9126: "b55fbb4ae7def0c3737e4d91cc627e8f",
          9377: "d2327e3be323f61054fa2c390926ae43",
          9615: "79c2ee6413cb7bc879bb323aac4ecc19",
          9623: "8e1462974114adaaae9f763ccc3452cf",
          9936: "8f5d225f02c04baea1d6976f819ec911",
          9990: "6e006b3d5184afd8ec25bfedceafa36f"
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