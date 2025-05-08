! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ca6bd68b-c627-4764-8988-e393197f67b7", e._sentryDebugIdIdentifier = "sentry-dbid-ca6bd68b-c627-4764-8988-e393197f67b7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, f, c, d, b = {
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
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, f = 0, c = t.length; f !== a && c >= 0;) "/" === t[--c] && f++;
                if (f !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + f + ") in the URL path " + e);
                var d = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            4848: (e, a, r) => {
              "use strict";
              var t = {
                  "./index": () => Promise.all([r.e(2229), r.e(5966), r.e(7171), r.e(9978)]).then((() => () => r(9978))),
                  "./lazy": () => Promise.all([r.e(2229), r.e(9623), r.e(5966), r.e(7171), r.e(185)]).then((() => () => r(185))),
                  "./tina": () => Promise.all([r.e(6507), r.e(2229), r.e(5966), r.e(7904)]).then((() => () => r(7947))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(6507), r.e(2229), r.e(5966), r.e(7904)]).then((() => () => r(7947)))
                },
                f = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      f = r.S[t];
                    if (f && f !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => f,
                init: () => c
              })
            }
          },
          o = {};

        function n(e) {
          var a = o[e];
          if (void 0 !== a) return a.exports;
          var r = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return b[e].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
        }
        return n.m = b, n.c = o, n.y = a, n.amdO = {}, n.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return n.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, n.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var f = Object.create(null);
          n.r(f);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & t && a;
            "object" == typeof d && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, n.d(f, c), f
        }, n.d = (e, a) => {
          for (var r in a) n.o(a, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((a, r) => (n.f[r](e, a), a)), [])), n.u = e => "js/" + {
          131: "4e447cae41fce88ec30fd9fffd8599cc",
          185: "12cc0b477092df4908938a7893001f61",
          278: "1649dc1cf89d3de8c661ad249da95b64",
          299: "eff59f5c4d2431d18b4e180d51dbc209",
          314: "250ae48babd1d5a4f3b31d783afa5420",
          662: "560c5805d1880c112506191e1ea3ad97",
          824: "05f5942be20f80da7939f07817c03954",
          907: "086dd9158e27d95e73899961ddfac4e1",
          1054: "56c565aef8797c7904d403d24a932bbc",
          1242: "15476cf9d626a354725a8810dceefcd4",
          1822: "51a11639a1fef7641f416ab4505259e4",
          1868: "4c9d6eefdd7dd4e1caa83f9abcd6f274",
          2156: "a8b737263cdd122736295b87705fe1c5",
          2171: "bae40c739323f731c91e598e26e7183c",
          2221: "64056243aad6eb2b8aae928cc38406a1",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "634caf4b8c89ea6720fc18c8e4437c6f",
          2347: "037a6e86ff123ea15b517a638f34d034",
          2365: "811a85832e93067a632711a948dfeddd",
          2398: "ed68f563c241464813c9d4c6954e3d91",
          2466: "9f5e42ca0c7b767702dfc08a2710fa8a",
          2642: "e8a851f1357d3a6fd3dae0845111e1a5",
          2678: "f1e346378d97ac29272afa0cc7b6c62b",
          2864: "2047b5b5ca94f397cd9ace63d94791d6",
          3034: "b587667b577ee48120220521a6c3fef6",
          3197: "15820d6dacd070a0f1f4d1fcb63f8548",
          3343: "74c1f49d823735e767e0a64d92065d31",
          3370: "26cfa406cb8a02cfb970003133c00c27",
          3447: "3c701bbda0bfbff2b8f108fa9f40c95d",
          3475: "d502189452f149dd572cd6e129a92671",
          3486: "74e4a8880d348346b47181a1573eb9b2",
          3697: "fea3e8912837935829a672440ddec5dc",
          3855: "5266009ab44c0c4eb0a209ca0078d5dc",
          3885: "9af0a0be43d8851ec818cd03750256ac",
          3941: "a76f9e09cfc6d63efd12fade04d4cf0a",
          4011: "2f6028681e86a43a89381919f3250ee5",
          4018: "fd903eb99b186bd31f6545bdbfe864ae",
          4528: "2f3bb18a4c724aff4f87cfdd9e4d33de",
          4621: "cc97ee38075a5aa9baba305a0d2b5792",
          4700: "37994553c1966d0564662c42a609c329",
          4710: "46c7d2e14fab3469e67375812c7a1e8b",
          4731: "deed0097dc90960798e25e54442561da",
          4799: "48795516db2907a1c491f40782d9d85a",
          4851: "663e126fdb0283281fdc817e122a75ec",
          4861: "4892efd51fcff1cfb7cd1da822dd302d",
          4913: "a615cd3f1e42fc6e544b7f89efc2f1b7",
          5018: "f38d953c73586769d83f7c31588e82f2",
          5136: "324898e10995e17cfeae1a57e7c3a111",
          5233: "a4f65507e0d6f6edb208c224024471aa",
          5254: "094172939678c6bd263a603941ab2beb",
          5259: "f96b748f20f6ece2ed8c2438240d140d",
          5530: "9159484c1494bb54a5c34cad830b5495",
          5639: "bd346b01f42a5dc2d9e1e64c8ad04354",
          5663: "541b8712d404eb034b8cd456c63dc825",
          5705: "823844016bfb301138aebfdedf34beab",
          5742: "c385b7ee176126cdac433929f93f4858",
          5830: "b9ffe25a2b7d857a8383f55ef849ed2d",
          5832: "1dffcd2003142166de08b7763b38bd41",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "1b85a021f269534f04d6b7a0db3f15b8",
          6280: "a6428a46d4a84cafc78e4280a4b695cd",
          6285: "954d5514e8e68d04b9b05c82097a4e9d",
          6361: "508b7e1ab66dfa2487e40740de0306e5",
          6507: "1e8ccb6ea2587c63cdcdc8bc58009ab6",
          6664: "f4f27491391f743bc3b10dd5a30e5efd",
          6879: "636511581f8feb2445f95bfb5d6f7727",
          6891: "19ffeb81dec5f94456bb05948e240667",
          6997: "f903444ac81227f56e16f0db0d4b3dae",
          7010: "31bf91871423a8c299c8dfbc919beded",
          7073: "3d0266298e07578e76db564ea4be6047",
          7171: "3a7f487b0ea83908646dec18edcef654",
          7436: "37f55b2aedb0466a36b947846d6fd635",
          7452: "54a1154ed35aae4a3bd4e7b8f2cbfdaa",
          7453: "5ef64a5d4c82420259c2dbbb0a86850d",
          7904: "fcdc591808716145ba3032340f35de23",
          7970: "1fd67064bf9abf44233569b28caaf28f",
          8272: "e1fb3af23c8681ebaf0ee7456ebce93b",
          8337: "a25c3ca3a10bf9e0d369e48427ac7772",
          8391: "ce734c839baff483ec3451e969b517da",
          8755: "cb65615f93cd242d9cc4fc38a4ae1146",
          8880: "9f1401f3d0ca4daabfdce0384f32bc5e",
          8970: "2a08ffaca6a3178a92c295f2228a7c20",
          9022: "75b9f034fc334edd4aec5ddc2f77a293",
          9028: "783626e69dca8cdbc553625c769c8f85",
          9126: "29d2881bacde1d5f3e8f62147d58a9fa",
          9377: "10ba6c5e9bae7289314f2cf7274ce596",
          9615: "7cee996352276a58241cff3fa5fd5cbe",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9936: "536901220aaad8d16ef9083809600ada",
          9978: "f7429d9ef12bef88a4cd82f4838bf3d9",
          9990: "3b509c0b4408704bcdcb6e5983680fac"
        } [e] + ".js", n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), n.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, f = "@rockstargames/modules-core-gif-viewer:", n.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var d, b;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), i = 0; i < o.length; i++) {
                var s = o[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == f + r) {
                  d = s;
                  break
                }
              }
            d || (b = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, n.nc && d.setAttribute("nonce", n.nc), d.setAttribute("data-webpack", f + r), d.src = e), t[e] = [a];
            var l = (a, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var f = t[e];
                if (delete t[e], d.parentNode && d.parentNode.removeChild(d), f && f.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = l.bind(null, d.onerror), d.onload = l.bind(null, d.onload), b && document.head.appendChild(d)
          }
        }, n.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, d = {}, n.f.remotes = (e, a) => {
          n.o(c, e) && c[e].forEach((e => {
            var r = n.R;
            r || (r = []);
            var t = d[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var f = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), n.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, d, b, o) => {
                  try {
                    var n = e(r, c);
                    if (!n || !n.then) return b(n, d, o);
                    var i = n.then((e => b(e, d)), f);
                    if (!o) return i;
                    a.push(t.p = i)
                  } catch (e) {
                    f(e)
                  }
                },
                b = (e, a, f) => c(a.get, t[1], r, 0, o, f),
                o = a => {
                  t.p = 1, n.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(n, t[2], 0, 0, ((e, a, r) => e ? c(n.I, t[0], 0, e, b, r) : f()), 1)
            }
          }))
        }, (() => {
          n.S = {};
          var e = {},
            a = {};
          n.I = (r, t) => {
            t || (t = []);
            var f = a[r];
            if (f || (f = a[r] = {}), !(t.indexOf(f) >= 0)) {
              if (t.push(f), e[r]) return e[r];
              n.o(n.S, r) || (n.S[r] = {});
              var c = n.S[r],
                d = "@rockstargames/modules-core-gif-viewer",
                b = (e, a, r, t) => {
                  var f = c[e] = c[e] || {},
                    b = f[a];
                  (!b || !b.loaded && (!t != !b.eager ? t : d > b.from)) && (f[a] = {
                    get: r,
                    from: d,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (b("@rsgweb/utils", "1.0.0", (() => Promise.all([n.e(5705), n.e(2229), n.e(9623), n.e(5136), n.e(3855)]).then((() => () => n(5136))))), b("react-router-dom", "6.17.0", (() => Promise.all([n.e(4018), n.e(2229)]).then((() => () => n(4018))))), b("react", "18.2.0", (() => n.e(3447).then((() => () => n(3447)))))), e[r] = o.length ? Promise.all(o).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          n.g.importScripts && (e = n.g.location + "");
          var a = n.g.document;
          if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), n.p = e
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
                  c = f < 0;
                c && (f = -f - 1);
                for (var d = 0, b = 1, o = !0;; b++, d++) {
                  var n, i, s = b < r.length ? (typeof r[b])[0] : "";
                  if (d >= t.length || "o" == (i = (typeof(n = t[d]))[0])) return !o || ("u" == s ? b > f && !c : "" == s != c);
                  if ("u" == i) {
                    if (!o || "u" != s) return !1
                  } else if (o)
                    if (s == i)
                      if (b <= f) {
                        if (n != r[b]) return !1
                      } else {
                        if (c ? n > r[b] : n < r[b]) return !1;
                        n != r[b] && (o = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || b <= f) return !1;
                    o = !1, b--
                  } else {
                    if (b <= f || i < s != c) return !1;
                    o = !1
                  } else "s" != s && "n" != s && (o = !1, b--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (d = 1; d < r.length; d++) {
                var p = r[d];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? a(p, t) : !u())
              }
              return !!u()
            },
            r = (r, t, f) => {
              var c = r[t];
              return (t = Object.keys(c).reduce(((r, t) => !a(f, t) || r && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var f = a[t],
                    c = (typeof f)[0];
                  if (t >= r.length) return "u" == c;
                  var d = r[t],
                    b = (typeof d)[0];
                  if (c != b) return "o" == c && "n" == b || "s" == b || "u" == c;
                  if ("o" != c && "u" != c && f != d) return f < d;
                  t++
                }
              })(r, t) ? r : t), 0)) && c[t]
            },
            t = (e => function(a, r, t, f) {
              var c = n.I(a);
              return c && c.then ? c.then(e.bind(e, a, n.S[a], r, t, f)) : e(a, n.S[a], r, t, f)
            })(((e, a, t, f, c) => {
              var d = a && n.o(a, t) && r(a, t, f);
              return d ? (e => (e.loaded = 1, e.get()))(d) : c()
            })),
            f = {},
            c = {
              2229: () => t("default", "react", [1, 18, 2, 0], (() => n.e(3447).then((() => () => n(3447))))),
              5966: () => t("default", "@rsgweb/utils", [1, "workspace:^"], (() => Promise.all([n.e(5705), n.e(9623), n.e(5136)]).then((() => () => n(5136))))),
              9623: () => t("default", "react-router-dom", [1, 6, 11, 2], (() => n.e(4018).then((() => () => n(4018)))))
            },
            d = {
              2229: [2229],
              5966: [5966],
              9623: [9623]
            },
            b = {};
          n.f.consumes = (e, a) => {
            n.o(d, e) && d[e].forEach((e => {
              if (n.o(f, e)) return a.push(f[e]);
              if (!b[e]) {
                var r = a => {
                  f[e] = 0, n.m[e] = r => {
                    delete n.c[e], r.exports = a()
                  }
                };
                b[e] = !0;
                var t = a => {
                  delete f[e], n.m[e] = r => {
                    throw delete n.c[e], a
                  }
                };
                try {
                  var d = c[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          n.b = document.baseURI || self.location.href;
          var e = {
            9737: 0
          };
          n.f.j = (a, r) => {
            var t = n.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2229|5966|9623)$/.test(a)) e[a] = 0;
            else {
              var f = new Promise(((r, f) => t = e[a] = [r, f]));
              r.push(t[2] = f);
              var c = n.p + n.u(a),
                d = new Error;
              n.l(c, (r => {
                if (n.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var f = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  d.message = "Loading chunk " + a + " failed.\n(" + f + ": " + c + ")", d.name = "ChunkLoadError", d.type = f, d.request = c, t[1](d)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, f, c = r[0],
                d = r[1],
                b = r[2],
                o = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in d) n.o(d, t) && (n.m[t] = d[t]);
                b && b(n)
              }
              for (a && a(r); o < c.length; o++) f = c[o], n.o(e, f) && e[f] && e[f][0](), e[f] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), n.nc = void 0, n(5408), n(4848)
      })())
    }
  }
}));