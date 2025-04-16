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
          131: "2fdfa0084a659b1dcbbef296d693d44e",
          185: "9bf7d2bfa2315a834eb609b32648fce7",
          278: "42d8dbae96d6fd4ecd636eade6b93c44",
          299: "f9defdfaf197fc596465e0d298b4bed3",
          314: "4e04c91e677142d922b97936d094df8c",
          662: "6ca3efbaceb5d367ba105e05aa3c4741",
          824: "910f4a2015b23afa88e6950160942b8e",
          907: "078c1a4fd889d1066748e8767f28126f",
          1054: "050f1df9f2f68ee9be9995885a1cad8b",
          1242: "4a409174b48e166f12c3a2d58ea59c93",
          1822: "8e0ada8959eaff16e7fdd295d02934dc",
          1868: "8d397cea870bae35a6fe21c90c70772a",
          2156: "9af7373b51f4ba15549ffe5b04f3c8d4",
          2171: "48227d1bae06d3d980703b5cafdd312a",
          2221: "3aae56f5a4ab05073ae3c7d2dc590a92",
          2229: "cff3f5dc411c8d6c15a451abde3cfbf7",
          2243: "dbc4c1fd533b7d1e75742b3afc28b291",
          2347: "bc219eed9dc56945cb10c487a29b7ddf",
          2365: "9f5a18df677f3496d29b6c6736fed997",
          2398: "f40bb69eeaf3d58d8bb0a85902f08e45",
          2466: "805f00bd1ebdb3c2fc9c739e18563dd1",
          2642: "911bf85f3fed80db0c876c4dc033161d",
          2678: "17f1a3ab4f5d56d6c19c166d7f34d19a",
          2864: "5fb8b81a887de72aa8631a1782c62414",
          3034: "4673da6740990ebb9a4fac8ca1f8aee7",
          3197: "38099be900604a90a05c7b71f77b4221",
          3343: "dc6c1aa379ad33fc7fb230025d023f70",
          3370: "983c668831cf19ea120603ca6609bb71",
          3447: "44a0b0a7ed4ee4c8b43f98f94a9f8cd2",
          3475: "3deba45e68fb9b4e56a5d89f05f6e36b",
          3486: "ef4297bdbb9a5884fe6ca2841b80b265",
          3697: "9f96fd20c3ce7779765093ce141d585c",
          3855: "c3108bcf5d8ebd6c8a420a9136f4b7b5",
          3885: "eab72423d71b12ce66fe59f2b069a9ac",
          3941: "600d6952db2c1b1c447b4fc1850cdd85",
          4011: "8241c084606078219f5b09c793032ac5",
          4018: "6385c757ccb513ad1cd902bc8153effd",
          4528: "7ea079c5f0c964967c060eebd9fce0b6",
          4621: "f2715a7e83154d7f88d3c1346ebeeade",
          4700: "644b6f26ec0eb7fcf0b85179f45d593e",
          4710: "8b9d89ca10ec20714ae6aa9420948b24",
          4731: "43151879aaf675e0c1013206bc696c58",
          4799: "a0122db14e4d6c203188adf39c44be7b",
          4851: "e3b5c3b69a920d62c4b7786c6705acf0",
          4861: "0a4903a0c9ed54aa2b41724b8b780048",
          4913: "8bc71aad9bcacb304a5448dbb9aef5e1",
          5018: "824fdde1cc0224698158e42c68f97c35",
          5136: "aeacb843a3915320c911881c2d5570e3",
          5233: "55510056da91402cdbd335e9764e8a2d",
          5254: "999e84d934446da878969db17d905270",
          5259: "0c92397108efd92ea99b10d2c99f17e6",
          5530: "0efdd42f7b7b2e8e5bff40e0bc4ea9f0",
          5639: "fe0b2fc0f2cca601bfc20e2f41e2acde",
          5663: "e63482aec7dfea980aa8e17c574f9977",
          5705: "29a6f4aad8eec7782d61c78838255d63",
          5742: "abd10004584f72709f6a338730288dd4",
          5830: "c18fe5a079fb7ac501ded4e8890aa0b9",
          5832: "0f8e2c69094d946fdda45e87d91d7a5b",
          5966: "2b81f21dff1e142b253ec9f05a3f3aa4",
          6267: "ff7a3c7356165b2641a147aad96c76ba",
          6280: "bd7eee412999e139c2223b8d35502254",
          6285: "427c5a363b4312d679ccfb74dab691d6",
          6361: "aeb9f9e2a1d8d808a34dab14fc285e34",
          6507: "f050f5f684049d20aa06f363537aae76",
          6664: "795aca6d9fe00c22df0a818fa0a15299",
          6879: "0d8a1f971fd5454a0a5d405732af1e79",
          6891: "c44c0cbe22e2be2de9207f4a290eb4ea",
          6997: "47779e8927e4ef933419e17cb000275e",
          7010: "e76f98b72277b18d3ce0b1528ebeb21a",
          7073: "3dc0b134c824c255bf14b99e48c9a87c",
          7171: "cf1886d4543afcbce4b63e53ab42ba75",
          7436: "bc300637a5153e1414f3cd7c31316ef1",
          7452: "c7f8481412b08b3ff53f619db067a544",
          7453: "f34a71a54891951dda7a8e4f48d78922",
          7904: "04330331be1198003618f05bbc8a9fbe",
          7970: "f1d0402db62a64f41a77c7f792c446d7",
          8272: "0e38851fe4b31d047a5ef12c670548c3",
          8337: "224a0e9e588bdde1c2ca20919fc9d89f",
          8391: "546bfe87ba6c5e94e36b5b3ed03fc647",
          8755: "fff8700382f2df6569381114a6a16ba9",
          8880: "83c7f386fd07be9a4e4e4a476278e2e2",
          8970: "f20fb6f588a111cc609099abda4c7f2e",
          9022: "f1b02a0008f3143d142148fbbff1ca06",
          9028: "cccb5c07509330ac7cde579123e6544c",
          9126: "7591aecf560e2672e4f745a781d39da5",
          9377: "3d1175afdb09e1d66abbc6fb7a767332",
          9615: "0fc29141eed649b25f69e65c2df5a672",
          9623: "9049ba2e4f1a21e8bfc67b796637041c",
          9936: "0fd234cc55d6a055535740bd43afde04",
          9978: "60b5ffa7ad8c50bbb493e7e40d66cd94",
          9990: "7dcc208f60a0d40df9f370b0bde80a23"
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