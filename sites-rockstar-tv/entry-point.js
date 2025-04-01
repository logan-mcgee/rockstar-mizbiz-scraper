! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "276ade64-0c6c-4df4-ae15-f57d02cb91a7", e._sentryDebugIdIdentifier = "sentry-dbid-276ade64-0c6c-4df4-ae15-f57d02cb91a7")
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
        var e, t, f, d, c, n, o = {
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
          131: "b62c5c0e163258b85989690da3289ed5",
          278: "ed9d893478dea9bf89af30205aa0f44d",
          299: "fa57a542c70160fa05e56859be74f46a",
          314: "0b68fba5221602c95a3e73a01523f9ab",
          662: "07e56cafe9bee096f888dcfb4c92b6d7",
          721: "a44639d1473b0fd79c8236794dafe7f6",
          824: "8fa5bee015e29d35c3be15dad28f67b8",
          907: "74f1f12540ad4b9ae4b5c9d5e32a708d",
          1054: "730b59baf702af1885d95acefc21ae0d",
          1149: "c0505fc569e23e822ed5c6288d13f5f1",
          1242: "8325c56352d50d3b2ec976d1dd620042",
          1822: "1889362420cf533104996095ff4cfbf6",
          1868: "3a73b0924a5beb614916a01be90476fc",
          2156: "75132e39f588541fd9ed9471c54fee33",
          2171: "bdadef8d31a473ba78c9bd49a6749dbf",
          2221: "1f4edaa68129cd8db8373fd0c791d4f9",
          2229: "ba433af05851c9476cd0989e1b4e45d7",
          2243: "aff5ae6a18f199bafbf23e7e95fe2848",
          2347: "04de686ec1722969ca344ae0781696d8",
          2365: "0b338c23dab4c9482d147a6f57074393",
          2398: "eaf102086ed218f392416c32223bdae9",
          2466: "557905aac3c8f23ff7eab5f74d205e82",
          2642: "ce3d6d293362f3cea552ddd4042d2184",
          2678: "8e7c01bd55fce8980258369306345930",
          2864: "5df425a079d499f3994b325e3efbf124",
          3034: "60eeb1f2fdb02769b97a5373f6a08a3b",
          3197: "d7c2865665fed1ba38fb30f16c7f14d0",
          3343: "b149dd224dc5c6252fda078380e55379",
          3370: "b9f5df0236db5a528051c0118532be3a",
          3447: "f5805ca3fef745a149166875c28f5a1a",
          3475: "f9223207283aa9cf50d205f28c51655d",
          3486: "4d7b7b84be2affd1970331bd50114ed2",
          3697: "099c31b14c8bceb17d8dab7031b3274c",
          3885: "82fa47901083d3674212e4244423c1e4",
          3941: "68f9c05f0047f9ce997c2d7a16c37e36",
          4011: "99963c035a5e23dd6883ba74c6bfe2d2",
          4018: "7d92fe0c1d7c2db5d81d084d0aef2825",
          4528: "8f290ff58a09c320e53006c060342ea9",
          4621: "f17f45c88519c1a7f5794874748ad0a2",
          4700: "fcc0c44616026279e01741024aee2eb3",
          4710: "9317b636bcce3da58e20a28a3f10c10a",
          4731: "613baa4647629f519444e32776293d08",
          4799: "d4214b77d01c214b2c9710e9db0daa6d",
          4851: "a2aed9c0742259c70aaaffbe796c3bce",
          4861: "cb18c14667dbfbf1671ef66e4dc07563",
          4913: "884ff5c0161d3042d4d563f9db69dca9",
          5018: "f395b23b7641fc1cc013b64fce2f7606",
          5233: "b7d0ae5c8bc6bd389981ed38703e4d06",
          5254: "e4296349b6b3d1991340368f1621b1ea",
          5259: "1ab4457ed2d0f6538475780b3f8b7d13",
          5310: "ad92b9a3c58db94911c009136ff4fb7b",
          5530: "04ef817b417a5c6f8e1b0b73a0b914a4",
          5639: "71e17eb9b8453f5b39229d30853980d3",
          5663: "3a3448fad7d2b325aede3cb22b68934d",
          5705: "67562785b62dca21bd590731ab9e3662",
          5742: "36fe9cb1060bb40615cec9f7d806386f",
          5830: "972682777421a7c19262be23c5d1d6e3",
          5832: "aced450bb6d617a6bd810158dad202b8",
          6267: "b0a439826187553c9b45fd10a4ccae93",
          6280: "c1d24e863ebe87c4820f1de033dde431",
          6285: "aa662b65e2feeb02cfe9d2a4fcd3bec1",
          6361: "13c4cfa2484c596be6b71774b616e3b5",
          6664: "7db3fe009df6365f31652d9b38fb1b65",
          6879: "b8a171a8832d903b9ebd4535fe2a8328",
          6891: "53baa5589c49dd91d2dd7f573af0048e",
          6997: "20053f4d4f33e910af48966b11c90f6c",
          7010: "8bcad7e8d58a7db80f0469e57938ae3a",
          7073: "f18eb67da419ff3aa9c0cf8f369d54f6",
          7436: "5798c196a0d46a0ba1e917c8d6b12138",
          7452: "a7c269ad51cd75cc6420e9177aff303c",
          7453: "7dcd65193e61ea9e76f9c70f403dea61",
          7970: "a57bca24b883a146318a59bf974705b1",
          8272: "7f4dda9940f2eb8629f837f754666c11",
          8332: "3bf07a7ebdf1e3541ceefa89ceb8b493",
          8391: "c5830410c5542012d22787c31cbc5e0e",
          8755: "68dbbf00625bb2fede4833e3c67d145b",
          8880: "97eacb2f9e23c46d2bb332b8c14baa4e",
          8970: "0699b2c319bc9c1f3a389b4db3c5a31c",
          8978: "baca59b4e100048ab2ccaf0d338cc7c3",
          9022: "3d2f781b5b09bcb8f21d4de45c287fd2",
          9028: "244c6cd11cbb55c4b117cc80c05336ee",
          9126: "fe42628ec38938198abbb1b796d87298",
          9377: "4dfa71f15eca915240b6b6570b641003",
          9615: "6e4e1fef3d622fe1315ba38b754b511c",
          9623: "8e1462974114adaaae9f763ccc3452cf",
          9936: "afacc16b71fe02d1c4bf984638539321",
          9990: "f60c84b2a80ea98cce8dd4c1833a37be"
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
                o = [];
              return "default" === r && (n("@rsgweb/utils", "1.0.0", (() => Promise.all([i.e(5705), i.e(2229), i.e(5310), i.e(9623), i.e(8978)]).then((() => () => i(5310))))), n("react-router-dom", "6.17.0", (() => Promise.all([i.e(4018), i.e(2229)]).then((() => () => i(4018))))), n("react", "18.2.0", (() => i.e(3447).then((() => () => i(3447))))), (e => {
                var a = e => {
                  return a = "Initialization of sharing external failed: " + e, void("undefined" != typeof console && console.warn && console.warn(a));
                  var a
                };
                try {
                  var f = i(5136);
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
                o = 0;
              if (d.some((a => 0 !== e[a]))) {
                for (t in c) i.o(c, t) && (i.m[t] = c[t]);
                n && n(i)
              }
              for (a && a(r); o < d.length; o++) f = d[o], i.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_sites_rockstar_tv = self.webpackChunk_rockstargames_sites_rockstar_tv || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), i.nc = void 0, i(5408), i(5819)
      })())
    }
  }
}));