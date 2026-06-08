try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "37dcd170-5b03-461b-8b9c-5f911bff8029", e._sentryDebugIdIdentifier = "sentry-dbid-37dcd170-5b03-461b-8b9c-5f911bff8029")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, a, o, n, d, f, l, c, i, s, u, b, h, p, m, g, y, v, w, _, P = {
            154(e, t, r) {
              (0, r(9160).w)(1)
            },
            9160(e, t, r) {
              const a = r(1908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            5649(e, t, r) {
              r(154)
            },
            1908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, o = 0, n = a.length; o !== t && n >= 0;) "/" === a[--n] && o++;
                if (o !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + o + ") in the URL path " + e);
                var d = a.slice(0, n + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            8157(e, t, r) {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(827).then(() => () => r(4827)),
                  "./index": () => Promise.all([r.e(512), r.e(40), r.e(82), r.e(909), r.e(416), r.e(646), r.e(331), r.e(815), r.e(812), r.e(199), r.e(599), r.e(95)]).then(() => () => r(5095)),
                  "./tina": () => Promise.all([r.e(82), r.e(909), r.e(17), r.e(646), r.e(331), r.e(815), r.e(911)]).then(() => () => r(1911)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(82), r.e(909), r.e(17), r.e(646), r.e(331), r.e(815), r.e(911)]).then(() => () => r(1911))
                },
                o = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                n = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      o = r.S[a];
                    if (o && o !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => o,
                init: () => n
              })
            }
          },
          k = {};

        function E(e) {
          var t = k[e];
          if (void 0 !== t) return t.exports;
          var r = k[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return P[e].call(r.exports, r, r.exports, E), r.loaded = !0, r.exports
        }
        return E.m = P, E.c = k, E.y = t, E.amdO = {}, E.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return E.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var o = Object.create(null);
          E.r(o);
          var n = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & a && t;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach(e => n[e] = () => t[e]);
          return n.default = () => t, E.d(o, n), o
        }, E.d = (e, t) => {
          for (var r in t) E.o(t, r) && !E.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce((t, r) => (E.f[r](e, t), t), [])), E.u = e => "js/" + {
          38: "8e43cffed1c17b033b5193052dd5024b",
          40: "209179ac139ccf4056c9f86694d35ee1",
          70: "0f9ac32bbcb7ff4eab1ed99230612dad",
          95: "d8043993bbcafd35d6af131ab4522a9f",
          162: "c028aefb76255cd707e5caf56e1a9d44",
          180: "15c0e7a8f1c4d2fefe126c528183fce8",
          206: "45e598b87178c2390438f5e29ca9d83c",
          221: "ec2374a32c520c721f2a748a86381ae4",
          269: "9657b3e62aed4eade4168f5e5a1df468",
          299: "eac708da8258a3183b2467446296a9ff",
          464: "1819d20a3b730840502978356d2c3d73",
          481: "5fbee15d966b863a788c91a2d48b9f85",
          512: "18d4bddcb4da1d3ffd020805cadfa3b1",
          514: "6060a41dd4adeeba6d08d61c341f2478",
          529: "8e6ffbd5e3bbe2c16030c282f1f39d32",
          565: "da1724eb987a92d572bb58cad4814dd1",
          581: "fad3a34e2245f8fc647b5b94c8c98d4e",
          599: "0f1bc4b5facd313817cb88c0d91be3fb",
          602: "15e88beb401975a2e5005e61dc3da83c",
          631: "6ec1dfa7e303a55a029504e3a7e81b7c",
          680: "e0f934bf79cd46220381f1fa16febb2c",
          730: "efd6129ba1f01c34aaa4edc21b0ebf50",
          764: "44c5973832665c2851dc388685a8a381",
          766: "754838ed3615c564cefa32d8f189855c",
          770: "404b4e5a3e63ba620c18e6fd90f6b1dc",
          793: "72e631f7eb8456caa34e904001a836e2",
          799: "e74bfaf026f4842e968679b2dc03df75",
          817: "3d259daf353bf820948a6065adb55004",
          825: "4c6dd737e98272e636aff3e785ca2560",
          827: "1274951a2cca9827e19921d8805b98be",
          837: "10afee4bf184896afa1df4a9cc200b04",
          864: "79d8888aadcfe8e7f957b5618e6c41af",
          911: "c0592c3d8d61c975427a385443d8f396",
          921: "a86c4a7193a8a550d2f34786a8c42bc7",
          963: "28b5b08435d8814b7f13bc0a4094e2cf",
          997: "cf421ab58731aaa28799a1194e14ba29"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          95: "a2de55ecc45a6c72e39a13f1cfa094e7",
          299: "d5d80fb65b4d279f563a59abb371d37e",
          599: "deccdf9c42d381767b02744038404f54",
          680: "d5d80fb65b4d279f563a59abb371d37e",
          837: "98d2f7207c07838416399fe63c3fcbc4",
          911: "e1ecfbd5d60b0822f094e505eee8adf4"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, o = "@rockstargames/modules-core-videoplayer:", E.l = (e, t, r, n) => {
          if (a[e]) a[e].push(t);
          else {
            var d, f;
            if (void 0 !== r)
              for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++) {
                var i = l[c];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == o + r) {
                  d = i;
                  break
                }
              }
            d || (f = !0, (d = document.createElement("script")).charset = "utf-8", E.nc && d.setAttribute("nonce", E.nc), d.setAttribute("data-webpack", o + r), d.src = e), a[e] = [t];
            var s = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var o = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), o && o.forEach(e => e(r)), t) return t(r)
              },
              u = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = s.bind(null, d.onerror), d.onload = s.bind(null, d.onload), f && document.head.appendChild(d)
          }
        }, E.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, E.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          E.S = {};
          var e = {},
            t = {};
          E.I = (r, a) => {
            a || (a = []);
            var o = t[r];
            if (o || (o = t[r] = {}), !(a.indexOf(o) >= 0)) {
              if (a.push(o), e[r]) return e[r];
              E.o(E.S, r) || (E.S[r] = {});
              var n = E.S[r],
                d = "@rockstargames/modules-core-videoplayer",
                f = (e, t, r, a) => {
                  var o = n[e] = n[e] || {},
                    f = o[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (o[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                l = [];
              return "default" === r && (f("@floating-ui/react", "0.27.19", () => Promise.all([E.e(766), E.e(464), E.e(82), E.e(17), E.e(793)]).then(() => () => E(2464))), f("@gsap/react", "2.1.2", () => Promise.all([E.e(82), E.e(812), E.e(206)]).then(() => () => E(9206))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([E.e(512), E.e(70), E.e(82), E.e(602)]).then(() => () => E(6602))), f("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([E.e(963), E.e(82), E.e(331), E.e(199), E.e(299)]).then(() => () => E(299))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([E.e(864), E.e(481), E.e(82), E.e(909), E.e(416), E.e(646), E.e(331), E.e(997), E.e(180)]).then(() => () => E(799))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([E.e(512), E.e(864), E.e(565), E.e(82), E.e(909), E.e(416), E.e(646), E.e(997), E.e(122), E.e(730)]).then(() => () => E(6730))), f("clsx", "2.1.1", () => E.e(921).then(() => () => E(4921))), f("focus-trap-react", "10.3.1", () => Promise.all([E.e(766), E.e(514), E.e(82)]).then(() => () => E(4514))), f("graphql", "16.13.2", () => E.e(764).then(() => () => E(9764))), f("gsap", "3.12.5", () => E.e(529).then(() => () => E(3529))), f("hammerjs", "2.0.8", () => E.e(38).then(() => () => E(6038))), f("lodash", "4.18.1", () => E.e(631).then(() => () => E(2631))), f("react-dom", "18.3.1", () => Promise.all([E.e(162), E.e(82)]).then(() => () => E(162))), f("react-router-dom", "6.30.3", () => Promise.all([E.e(269), E.e(82), E.e(17)]).then(() => () => E(6650))), f("react", "18.3.1", () => E.e(581).then(() => () => E(2581))), f("uuid", "9.0.1", () => E.e(770).then(() => () => E(3770)))), e[r] = l.length ? Promise.all(l).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var t = E.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
        })(), n = e => {
          var t = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a = r[1] ? t(r[1]) : [];
          return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
        }, d = (e, t) => {
          e = n(e), t = n(t);
          for (var r = 0;;) {
            if (r >= e.length) return r < t.length && "u" != (typeof t[r])[0];
            var a = e[r],
              o = (typeof a)[0];
            if (r >= t.length) return "u" == o;
            var d = t[r],
              f = (typeof d)[0];
            if (o != f) return "o" == o && "n" == f || "s" == f || "u" == o;
            if ("o" != o && "u" != o && a != d) return a < d;
            r++
          }
        }, f = e => {
          var t = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (t + .5) {
            r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
            for (var a = 1, o = 1; o < e.length; o++) a--, r += "u" == (typeof(d = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, d);
            return r
          }
          var n = [];
          for (o = 1; o < e.length; o++) {
            var d = e[o];
            n.push(0 === d ? "not(" + l() + ")" : 1 === d ? "(" + l() + " || " + l() + ")" : 2 === d ? n.pop() + " " + n.pop() : f(d))
          }
          return l();

          function l() {
            return n.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, l = (e, t) => {
          if (0 in e) {
            t = n(t);
            var r = e[0],
              a = r < 0;
            a && (r = -r - 1);
            for (var o = 0, d = 1, f = !0;; d++, o++) {
              var c, i, s = d < e.length ? (typeof e[d])[0] : "";
              if (o >= t.length || "o" == (i = (typeof(c = t[o]))[0])) return !f || ("u" == s ? d > r && !a : "" == s != a);
              if ("u" == i) {
                if (!f || "u" != s) return !1
              } else if (f)
                if (s == i)
                  if (d <= r) {
                    if (c != e[d]) return !1
                  } else {
                    if (a ? c > e[d] : c < e[d]) return !1;
                    c != e[d] && (f = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (a || d <= r) return !1;
                f = !1, d--
              } else {
                if (d <= r || i < s != a) return !1;
                f = !1
              } else "s" != s && "n" != s && (f = !1, d--)
            }
          }
          var u = [],
            b = u.pop.bind(u);
          for (o = 1; o < e.length; o++) {
            var h = e[o];
            u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? l(h, t) : !b())
          }
          return !!b()
        }, c = (e, t) => e && E.o(e, t), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}), u = (e, t, r) => {
          var a = r ? s(e[t]) : e[t];
          return Object.keys(a).reduce((e, t) => !e || !a[e].loaded && d(e, t) ? t : e, 0)
        }, b = (e, t, r, a) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + f(a) + ")", h = e => {
          throw new Error(e)
        }, p = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, t, r) => r ? r() : ((e, t) => h("Shared module " + t + " doesn't exist in shared scope " + e))(e, t), g = (e => function(t, r, a, o, n) {
          var d = E.I(t);
          return d && d.then && !a ? d.then(e.bind(e, t, E.S[t], r, !1, o, n)) : e(t, E.S[t], r, a, o, n)
        })((e, t, r, a, o, n) => {
          if (!c(t, r)) return m(e, r, n);
          var d = u(t, r, a);
          return l(o, d) || p(b(t, r, d, o)), i(t[r][d])
        }), y = {}, v = {
          3082: () => g("default", "react", !1, [0], () => E.e(581).then(() => () => E(2581))),
          2909: () => g("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([E.e(512), E.e(70), E.e(221)]).then(() => () => E(6602))),
          6416: () => g("default", "react-router-dom", !1, [0], () => Promise.all([E.e(269), E.e(17)]).then(() => () => E(6650))),
          9646: () => g("default", "lodash", !1, [1, 4, 18, 1], () => E.e(631).then(() => () => E(2631))),
          3331: () => g("default", "@rsgweb/utils", !1, [0], () => Promise.all([E.e(512), E.e(864), E.e(565), E.e(909), E.e(416), E.e(646), E.e(997), E.e(817)]).then(() => () => E(6730))),
          4815: () => g("default", "uuid", !1, [1, 9, 0, 1], () => E.e(770).then(() => () => E(3770))),
          5812: () => g("default", "gsap", !1, [0], () => E.e(529).then(() => () => E(3529))),
          2199: () => g("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([E.e(864), E.e(481), E.e(909), E.e(416), E.e(646), E.e(997), E.e(799)]).then(() => () => E(799))),
          1038: () => g("default", "focus-trap-react", !1, [1, 10, 2, 3], () => Promise.all([E.e(766), E.e(514)]).then(() => () => E(4514))),
          1270: () => g("default", "clsx", !1, [1, 2, 1, 1], () => E.e(921).then(() => () => E(4921))),
          1404: () => g("default", "@floating-ui/react", !1, [2, 0, 27, 19], () => Promise.all([E.e(766), E.e(464), E.e(17)]).then(() => () => E(2464))),
          2341: () => g("default", "hammerjs", !1, [1, 2, 0, 8], () => E.e(38).then(() => () => E(6038))),
          7347: () => g("default", "@gsap/react", !1, [0], () => E.e(825).then(() => () => E(9206))),
          7613: () => g("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([E.e(963), E.e(680)]).then(() => () => E(299))),
          4017: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => E.e(162).then(() => () => E(162))),
          7122: () => g("default", "graphql", !1, [1, 16, 13, 2], () => E.e(764).then(() => () => E(9764)))
        }, w = {
          17: [4017],
          82: [3082],
          122: [7122],
          199: [2199],
          331: [3331],
          416: [6416],
          599: [1038, 1270, 1404, 2341, 7347, 7613],
          646: [9646],
          812: [5812],
          815: [4815],
          817: [7122],
          909: [2909]
        }, _ = {}, E.f.consumes = (e, t) => {
          E.o(w, e) && w[e].forEach(e => {
            if (E.o(y, e)) return t.push(y[e]);
            if (!_[e]) {
              var r = t => {
                y[e] = 0, E.m[e] = r => {
                  delete E.c[e], r.exports = t()
                }
              };
              _[e] = !0;
              var a = t => {
                delete y[e], E.m[e] = r => {
                  throw delete E.c[e], t
                }
              };
              try {
                var o = v[e]();
                o.then ? t.push(y[e] = o.then(r).catch(a)) : r(o)
              } catch (e) {
                a(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              614: 0
            };
            E.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                95: 1,
                299: 1,
                599: 1,
                680: 1,
                837: 1,
                911: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = E.miniCssF(e),
                  o = E.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var o = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (o === e || o === t)) return d
                    }
                    var n = document.getElementsByTagName("style");
                    for (a = 0; a < n.length; a++) {
                      var d;
                      if ((o = (d = n[a]).getAttribute("data-href")) === e || o === t) return d
                    }
                  })(a, o)) return t();
                ((e, t, r, a, o) => {
                  var n = document.createElement("link");
                  n.rel = "stylesheet", n.type = "text/css", E.nc && (n.nonce = E.nc), n.onerror = n.onload = r => {
                    if (n.onerror = n.onload = null, "load" === r.type) a();
                    else {
                      var d = r && r.type,
                        f = r && r.target && r.target.href || t,
                        l = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + f + ")");
                      l.name = "ChunkLoadError", l.code = "CSS_CHUNK_LOAD_FAILED", l.type = d, l.request = f, n.parentNode && n.parentNode.removeChild(n), o(l)
                    }
                  }, n.href = t, document.head.appendChild(n)
                })(e, o, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          var e = {
            614: 0
          };
          E.f.j = (t, r) => {
            var a = E.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(1(22|7|99)|8(12|15|2)|331|416|646|909)$/.test(t)) e[t] = 0;
            else {
              var o = new Promise((r, o) => a = e[t] = [r, o]);
              r.push(a[2] = o);
              var n = E.p + E.u(t),
                d = new Error;
              E.l(n, r => {
                if (E.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + o + ": " + n + ")", d.name = "ChunkLoadError", d.type = o, d.request = n, a[1](d)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, o, [n, d, f] = r,
                l = 0;
              if (n.some(t => 0 !== e[t])) {
                for (a in d) E.o(d, a) && (E.m[a] = d[a]);
                f && f(E)
              }
              for (t && t(r); l < n.length; l++) o = n[l], E.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), E(5649), E(8157)
      })())
    }
  }
});