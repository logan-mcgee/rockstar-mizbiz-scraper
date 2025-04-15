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
          1: "d811db89ee62036f5fea634ecc471b1b",
          131: "9b896a58124367e746f3f22e0d430621",
          278: "1b23a3b1037da1c3c1dc57c1be213963",
          299: "79fa3f44c14d6d2cdc1e00ee6af8d4dd",
          314: "cdf96aef1fc89561c0c9d6f9ed6c0098",
          662: "48c35f13491e293c2bca67c049d65aee",
          721: "07465e6a17d646685709abf29022e31c",
          824: "d644c66a715abc00883d1c7389b724da",
          888: "2a0da5496195247d789819edf7359a56",
          907: "6deea86c66f87860e2e603471120a6dd",
          1054: "1ff55b5408840717b62b52e1af741e73",
          1242: "3a03bbef9d979c7138f52c32a1ccf5bc",
          1360: "9c15471c38b775b6efb1861b779733c3",
          1673: "211de5a327f2789826be0b9c7c26f5cd",
          1822: "9fcd55475071a1e9e9146b30da319bb2",
          1868: "e79e1f48ad590eb2e9d6c86580cb0056",
          2024: "e5f2cb0f918c9860f58cb59027898f8f",
          2156: "f9da951b3963575445fe50059e78b31a",
          2171: "8e781afcf9d092cb4abb5a29e6d4e5b2",
          2221: "19e51fac1286713c6860ea6fcd2c264a",
          2229: "d45eaf259078f289fb88c7f475cc9d12",
          2243: "3b8eca3d3da291a515d0f08d7e58bd97",
          2347: "5be0b3a42d2f93bfe8ecbe8377479460",
          2365: "ae91d98d0474fd5077f62bd34c4bdb81",
          2398: "857b2fc33c9c3a3eec43d2da9d2f839f",
          2466: "45309305892f31da61cb66ccef4605fb",
          2530: "4bf184caf20ff9d227db77135a28c106",
          2642: "93b06b8744e76ab85eabc6cacc76c6da",
          2678: "e5d443aa62cf44a8e4f8a198c69e51a1",
          2864: "658aac83c32226a1c22cfdfecb9d7c89",
          3034: "08a6a58163797b7f3909a512cd6b13ca",
          3197: "c7e6db8c71ddd45b7b654154224f6139",
          3316: "5fb3062553e9a7f2d4c6bdbd9d08aa97",
          3343: "9c259c6de3cb9c5e964b41e9335b1e0b",
          3370: "a6ba59338d247d01e661d48d459231cb",
          3447: "2815e59e9d9f7e7cd52ed9ff2cd42518",
          3475: "755528900e349819a36f3c41926d781f",
          3486: "7356fc65b829ba590ba5539cad222ccc",
          3697: "d87abf61e68c49f91ec4ce0058f34067",
          3885: "ffb42122609e765247d0f62ab67f915a",
          3941: "154df8f980f53ef939fba570522e68aa",
          4011: "99f6ebb37c17991690bc8b37d0ee8bed",
          4018: "0740a5eead158863555acf8ed19c565f",
          4054: "fb64069cdadf26328207f6dfb2b57603",
          4528: "a99d375fe5f24cc691933788385ebf8c",
          4621: "69aac6763dbb083b16360da376384b14",
          4700: "b27caa1ea0758ed3a5b00257c3b53bba",
          4710: "f32e430199337223472b22b87f035561",
          4731: "f3128cbe3262b2520d41e187cdcb4a51",
          4799: "10ed487d279fdbb16a5ed80101995da8",
          4851: "14df014983bc82c49c7454afb4c072c4",
          4861: "90449a47200cadb528aba26fd9058c14",
          4913: "faa72d07be275859d095c17962111f7e",
          5018: "d9e117e89c4432935273119235f4fc06",
          5233: "cbac4b42320f08321a8b98021a364ffc",
          5254: "0ce83afcf0d79134b58e12dcb9d04964",
          5259: "9472823745be4e7cd166b2949c0ee4f4",
          5530: "a3a52a0d06166e385e76334c4451ceb0",
          5639: "61c5cd3c8be597cd3f4f32a1387719f8",
          5663: "a9e66df83623e53921efc30943982c2b",
          5742: "69700d15deef9919bdfd9d78e864c406",
          5830: "a9c60e8719530bab929449d257fd55c3",
          5832: "b0af4bd185b5bcd3f569e91f129f368b",
          5966: "a90aa86d7555e83c4fdac9d48e244c27",
          6267: "f20cf1913d399211d5116af89ae8088e",
          6280: "92a8d0dfde98d71e35c22b88cf14d46b",
          6285: "89c8e0b74811e45a599eaab9e8154e79",
          6361: "37006363e1c9178ffc2892aaabb2958b",
          6664: "24a72c9328625ea318c8a8f7ebeb7a96",
          6682: "cd24b7bb40f6a4ca195a78652d62423b",
          6879: "199eefbe8f3b0edf9bf83f178c051ae8",
          6891: "1d9136a63c8e1722ab0834913959b6d6",
          6997: "46d60340dbc9e2f42fde268862c2813b",
          7010: "9c3cd56535f2e6905984bc11feb5e6cb",
          7073: "7cc4c586466802e382be901290111ca0",
          7131: "7a532b26f554f3cd9b8afea773ce1414",
          7436: "3229450c96716b0324dffed321e9bd65",
          7452: "dbf614fd79b0e91e1e33901650a6c6d0",
          7453: "91ed6aabaf12a9f93fd05b50a6e28834",
          7868: "587aea9193c19e9af6da238f02dc425f",
          7970: "cf8192bfd9dce6c228a51133fa0da4d9",
          8272: "9de02387f6210d3d21e1dd2174cbbea3",
          8391: "1818584a4b990e1fcfe605a0d698cb9e",
          8755: "e79c4afcfe293f02edcacc59e1e04c20",
          8880: "71cf86f011c6a193c22bdf7684d34369",
          8970: "077a3a7afedc4a8944270b75b02820fb",
          9022: "d25bceda153801ff643397d2bfd5aea7",
          9028: "086249fbf0af2ae0e59e3244fbf74e64",
          9126: "7c88cac5b4bfca3f196103719ce92df7",
          9377: "3d2670c25061ba76b72a562cdc05c544",
          9512: "1093d6e88938fbbb5ea92123c439cc3e",
          9615: "f8e4f5fee2fbcf4d687fdc9172cd49b8",
          9936: "e1d06a40f48e8312c531911fea2c896c",
          9990: "bce45df77a4812a26fe89c1adca14ee8"
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