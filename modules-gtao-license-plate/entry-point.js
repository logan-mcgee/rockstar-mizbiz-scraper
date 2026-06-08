try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4ef3d46b-7a69-4330-aa17-8d0097299be6", e._sentryDebugIdIdentifier = "sentry-dbid-4ef3d46b-7a69-4330-aa17-8d0097299be6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, t) {
  return {
    execute: function() {
      e((() => {
        var e, r, a, n, o, d, f, c, l, s, i, u, b, h, p, m, g, y, v, w, _, k = {
            20154(e, t, r) {
              (0, r(89160).w)(1)
            },
            89160(e, t, r) {
              const a = r(51908).y;
              t.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = a(r.y.meta.url, e)
              }
            },
            35649(e, t, r) {
              r(20154)
            },
            51908(e, t, r) {
              t.y = function(e, t) {
                var r = document.createElement("a");
                r.href = e;
                for (var a = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, n = 0, o = a.length; n !== t && o >= 0;) "/" === a[--o] && n++;
                if (n !== t) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + t + ") is greater than the number of directories (" + n + ") in the URL path " + e);
                var d = a.slice(0, o + 1);
                return r.protocol + "//" + r.host + d
              };
              Number.isInteger
            },
            86557(e, t, r) {
              "use strict";
              var a = {
                  "./bootstrap": () => r.e(827).then(() => () => r(4827)),
                  "./index": () => Promise.all([r.e(512), r.e(338), r.e(896), r.e(367), r.e(949), r.e(82), r.e(17), r.e(997), r.e(331), r.e(188), r.e(625), r.e(952), r.e(721)]).then(() => () => r(26721))
                },
                n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, t),
                o = (e, t) => {
                  if (r.S) {
                    var a = "default",
                      n = r.S[a];
                    if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[a] = e, r.I(a, t)
                  }
                };
              r.d(t, {
                get: () => n,
                init: () => o
              })
            }
          },
          E = {};

        function P(e) {
          var t = E[e];
          if (void 0 !== t) return t.exports;
          var r = E[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(r.exports, r, r.exports, P), r.loaded = !0, r.exports
        }
        return P.m = k, P.c = E, P.y = t, P.amdO = {}, P.n = e => {
          var t = e && e.__esModule ? () => e.default : () => e;
          return P.d(t, {
            a: t
          }), t
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, P.t = function(t, a) {
          if (1 & a && (t = this(t)), 8 & a) return t;
          if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
          }
          var n = Object.create(null);
          P.r(n);
          var o = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var d = 2 & a && t;
            ("object" == typeof d || "function" == typeof d) && !~e.indexOf(d); d = r(d)) Object.getOwnPropertyNames(d).forEach(e => o[e] = () => t[e]);
          return o.default = () => t, P.d(n, o), n
        }, P.d = (e, t) => {
          for (var r in t) P.o(t, r) && !P.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
          })
        }, P.f = {}, P.e = e => Promise.all(Object.keys(P.f).reduce((t, r) => (P.f[r](e, t), t), [])), P.u = e => "js/" + {
          38: "913c039ddbee36143f96a62cb52794a9",
          90: "acb88ba1700395e217ba52cd7735222f",
          144: "8947d5729ee0a800017aaabaff386018",
          162: "9ef8cf7af4d48a8c1600f1d4165a9e99",
          181: "00c25cbac18eb5655cd7acd56af32341",
          188: "e08e33c38f4c410938f0d6fa2e35eb2b",
          211: "93587a53489a35b58fa369dff0b726cd",
          235: "4e8c5d67a6db91f0f02fb6282a2b93ff",
          269: "e422e6ec5036c09b1676150e1bd7e730",
          280: "4d65e0b598dbd2b5a44d6bc950348966",
          292: "59b7cac2f9a5eda29ee87d7cc69e19ec",
          338: "f0e4316a7d2f93702f2aefe280eb7d6b",
          367: "ed196da87271c895c22525c0dfc28404",
          389: "2dc98b638f9dc629383296b8bdba402a",
          412: "924306862740dccdce4184528ff493ae",
          429: "b37cec19f4b3f2b307591b938553d582",
          447: "e86cacd6ba7f177d6256cf213e685ec3",
          501: "020fccb2f238f847927d5ac1d7543dda",
          512: "1452c167156650075a99c5ed33e73f46",
          529: "7c75b27b466f2ce433f86537e2ff7e1b",
          572: "e180fca1501598247e9a448fa65045ab",
          581: "8d652d651654b38aa236e313c89aa57a",
          583: "ce850a7d4dfbc597b0040b888aba11d5",
          602: "34b0982f3556aaac34c0445ee59d5465",
          622: "1633de26abf9f1df22b6ea9d17b37aa5",
          631: "96a616a070da620a0ec0425b34742caa",
          721: "35ba43fec061b7683c207f0b39a8545f",
          722: "148af2eff94430b2fd4b30e8e0ae5a1f",
          730: "91688187a41b735f81df01721d4f60c5",
          756: "4fbfd50c4fb22b2a06acc0b12830a86f",
          799: "898b60ffa48ac5d7ac8983e1886ecadd",
          827: "91522bdbfddebf7edf5832053320e0c1",
          830: "823a45452dd4455b7028c3fa325df1f4",
          837: "e3adf60297d9f36087911035cacb30ed",
          896: "439f150c37c9abc0ecff6a569863861a",
          915: "0716e18ad5ed9e4c5c3bd0457cd80385",
          922: "7cec849dd0ef3e055d460780fc27e63c",
          947: "f0a2a7efbe6245900e2401a6145c3163",
          949: "478c7190d1fb56d7b73acf6be08b07ed",
          952: "922d620f044d3f01b1686250c50dd6ea",
          959: "b88e63b239731d2a7730afb0d5f04597",
          974: "2dd01e711169041279ad6e09c716ba10",
          988: "8fa059022dee9349a445d8d078ba8071",
          997: "c9f1c14f5623e375266435eba0a2c632"
        } [e] + ".js", P.miniCssF = e => "css/" + {
          292: "b9356803954b8cbb74a12dc9c2294501",
          367: "43fa2eec9d0be6122bdc4b0c215e98c2",
          677: "f5aac352cb2705ab7853665388f9683d",
          922: "a4109230ab202a559b1606a461c19bab",
          952: "7cc4c8e7276639af78b1f65e0e73270e"
        } [e] + ".css", P.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), P.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), a = {}, n = "@rockstargames/modules-gtao-license-plate:", P.l = (e, t, r, o) => {
          if (a[e]) a[e].push(t);
          else {
            var d, f;
            if (void 0 !== r)
              for (var c = document.getElementsByTagName("script"), l = 0; l < c.length; l++) {
                var s = c[l];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == n + r) {
                  d = s;
                  break
                }
              }
            d || (f = !0, (d = document.createElement("script")).charset = "utf-8", P.nc && d.setAttribute("nonce", P.nc), d.setAttribute("data-webpack", n + r), d.src = e), a[e] = [t];
            var i = (t, r) => {
                d.onerror = d.onload = null, clearTimeout(u);
                var n = a[e];
                if (delete a[e], d.parentNode && d.parentNode.removeChild(d), n && n.forEach(e => e(r)), t) return t(r)
              },
              u = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: d
              }), 12e4);
            d.onerror = i.bind(null, d.onerror), d.onload = i.bind(null, d.onload), f && document.head.appendChild(d)
          }
        }, P.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, P.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          P.S = {};
          var e = {},
            t = {};
          P.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
              if (a.push(n), e[r]) return e[r];
              P.o(P.S, r) || (P.S[r] = {});
              var o = P.S[r],
                d = "@rockstargames/modules-gtao-license-plate",
                f = (e, t, r, a) => {
                  var n = o[e] = o[e] || {},
                    f = n[t];
                  (!f || !f.loaded && (!a != !f.eager ? a : d > f.from)) && (n[t] = {
                    get: r,
                    from: d,
                    eager: !!a
                  })
                },
                c = [];
              return "default" === r && (f("@react-spring/web", "10.0.3", () => Promise.all([P.e(181), P.e(82), P.e(17)]).then(() => () => P(31181))), f("@react-spring/web", "9.7.5", () => Promise.all([P.e(722), P.e(82), P.e(17)]).then(() => () => P(58722))), f("@react-three/fiber", "7.0.29", () => Promise.all([P.e(211), P.e(82), P.e(625)]).then(() => () => P(87211))), f("@rsgweb/locale-tools", "0.0.0", () => Promise.all([P.e(512), P.e(338), P.e(959), P.e(82), P.e(280)]).then(() => () => P(76602))), f("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([P.e(512), P.e(338), P.e(896), P.e(367), P.e(292), P.e(82), P.e(17), P.e(997), P.e(331), P.e(188), P.e(922), P.e(677)]).then(() => () => P(55371))), f("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([P.e(896), P.e(583), P.e(82), P.e(997), P.e(331), P.e(799)]).then(() => () => P(90799))), f("@rsgweb/utils", "0.0.0-development", () => Promise.all([P.e(512), P.e(896), P.e(988), P.e(82), P.e(997), P.e(730)]).then(() => () => P(46730))), f("@use-gesture/react", "10.3.1", () => Promise.all([P.e(429), P.e(82)]).then(() => () => P(86429))), f("gsap", "3.12.5", () => P.e(529).then(() => () => P(93529))), f("lodash", "4.18.1", () => P.e(631).then(() => () => P(2631))), f("react-dom", "18.3.1", () => Promise.all([P.e(162), P.e(82)]).then(() => () => P(30162))), f("react-router-dom", "6.30.3", () => Promise.all([P.e(269), P.e(82), P.e(17)]).then(() => () => P(74269))), f("react", "18.3.1", () => P.e(581).then(() => () => P(22581))), f("stackblur-canvas", "2.7.0", () => P.e(830).then(() => () => P(9830))), f("three", "0.141.0", () => P.e(90).then(() => () => P(92090)))), e[r] = c.length ? Promise.all(c).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          P.g.importScripts && (e = P.g.location + "");
          var t = P.g.document;
          if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
              for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), P.p = e
        })(), o = e => {
          var t = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a = r[1] ? t(r[1]) : [];
          return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
        }, d = (e, t) => {
          e = o(e), t = o(t);
          for (var r = 0;;) {
            if (r >= e.length) return r < t.length && "u" != (typeof t[r])[0];
            var a = e[r],
              n = (typeof a)[0];
            if (r >= t.length) return "u" == n;
            var d = t[r],
              f = (typeof d)[0];
            if (n != f) return "o" == n && "n" == f || "s" == f || "u" == n;
            if ("o" != n && "u" != n && a != d) return a < d;
            r++
          }
        }, f = e => {
          var t = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (t + .5) {
            r += 0 == t ? ">=" : -1 == t ? "<" : 1 == t ? "^" : 2 == t ? "~" : t > 0 ? "=" : "!=";
            for (var a = 1, n = 1; n < e.length; n++) a--, r += "u" == (typeof(d = e[n]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, d);
            return r
          }
          var o = [];
          for (n = 1; n < e.length; n++) {
            var d = e[n];
            o.push(0 === d ? "not(" + c() + ")" : 1 === d ? "(" + c() + " || " + c() + ")" : 2 === d ? o.pop() + " " + o.pop() : f(d))
          }
          return c();

          function c() {
            return o.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, c = (e, t) => {
          if (0 in e) {
            t = o(t);
            var r = e[0],
              a = r < 0;
            a && (r = -r - 1);
            for (var n = 0, d = 1, f = !0;; d++, n++) {
              var l, s, i = d < e.length ? (typeof e[d])[0] : "";
              if (n >= t.length || "o" == (s = (typeof(l = t[n]))[0])) return !f || ("u" == i ? d > r && !a : "" == i != a);
              if ("u" == s) {
                if (!f || "u" != i) return !1
              } else if (f)
                if (i == s)
                  if (d <= r) {
                    if (l != e[d]) return !1
                  } else {
                    if (a ? l > e[d] : l < e[d]) return !1;
                    l != e[d] && (f = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (a || d <= r) return !1;
                f = !1, d--
              } else {
                if (d <= r || s < i != a) return !1;
                f = !1
              } else "s" != i && "n" != i && (f = !1, d--)
            }
          }
          var u = [],
            b = u.pop.bind(u);
          for (n = 1; n < e.length; n++) {
            var h = e[n];
            u.push(1 == h ? b() | b() : 2 == h ? b() & b() : h ? c(h, t) : !b())
          }
          return !!b()
        }, l = (e, t) => e && P.o(e, t), s = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((t, r) => (e[r].eager && (t[r] = e[r]), t), {}), u = (e, t, r) => {
          var a = r ? i(e[t]) : e[t];
          return Object.keys(a).reduce((e, t) => !e || !a[e].loaded && d(e, t) ? t : e, 0)
        }, b = (e, t, r, a) => "Unsatisfied version " + r + " from " + (r && e[t][r].from) + " of shared singleton module " + t + " (required " + f(a) + ")", h = e => {
          throw new Error(e)
        }, p = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, t, r) => r ? r() : ((e, t) => h("Shared module " + t + " doesn't exist in shared scope " + e))(e, t), g = (e => function(t, r, a, n, o) {
          var d = P.I(t);
          return d && d.then && !a ? d.then(e.bind(e, t, P.S[t], r, !1, n, o)) : e(t, P.S[t], r, a, n, o)
        })((e, t, r, a, n, o) => {
          if (!l(t, r)) return m(e, r, o);
          var d = u(t, r, a);
          return c(n, d) || p(b(t, r, d, n)), s(t[r][d])
        }), y = {}, v = {
          93082: () => g("default", "react", !1, [0], () => P.e(581).then(() => () => P(22581))),
          84017: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => P.e(162).then(() => () => P(30162))),
          36416: () => g("default", "react-router-dom", !1, [0], () => Promise.all([P.e(269), P.e(17)]).then(() => () => P(74269))),
          42909: () => g("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([P.e(512), P.e(338), P.e(959), P.e(602)]).then(() => () => P(76602))),
          69646: () => g("default", "lodash", !1, [1, 4, 18, 1], () => P.e(631).then(() => () => P(2631))),
          13331: () => g("default", "@rsgweb/utils", !1, [0], () => Promise.all([P.e(512), P.e(988), P.e(730)]).then(() => () => P(46730))),
          11436: () => g("default", "@react-spring/web", !1, [0], () => P.e(181).then(() => () => P(31181))),
          35812: () => g("default", "gsap", !1, [0], () => P.e(529).then(() => () => P(93529))),
          66461: () => g("default", "@use-gesture/react", !1, [1, 10, 3, 1], () => P.e(429).then(() => () => P(86429))),
          82199: () => g("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([P.e(583), P.e(799)]).then(() => () => P(90799))),
          97625: () => g("default", "three", !1, [0], () => P.e(90).then(() => () => P(92090))),
          25939: () => g("default", "@react-spring/web", !1, [0], () => P.e(722).then(() => () => P(58722))),
          37411: () => g("default", "stackblur-canvas", !1, [1, 2, 7, 0], () => P.e(830).then(() => () => P(9830))),
          73772: () => g("default", "@react-three/fiber", !1, [0], () => P.e(211).then(() => () => P(87211))),
          76923: () => g("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([P.e(292), P.e(922)]).then(() => () => P(55371)))
        }, w = {
          17: [84017],
          82: [93082],
          188: [11436, 35812, 66461, 82199],
          331: [13331],
          625: [97625],
          952: [25939, 37411, 73772, 76923],
          997: [36416, 42909, 69646]
        }, _ = {}, P.f.consumes = (e, t) => {
          P.o(w, e) && w[e].forEach(e => {
            if (P.o(y, e)) return t.push(y[e]);
            if (!_[e]) {
              var r = t => {
                y[e] = 0, P.m[e] = r => {
                  delete P.c[e], r.exports = t()
                }
              };
              _[e] = !0;
              var a = t => {
                delete y[e], P.m[e] = r => {
                  throw delete P.c[e], t
                }
              };
              try {
                var n = v[e]();
                n.then ? t.push(y[e] = n.then(r).catch(a)) : r(n)
              } catch (e) {
                a(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              502: 0
            };
            P.f.miniCss = (t, r) => {
              e[t] ? r.push(e[t]) : 0 !== e[t] && {
                292: 1,
                367: 1,
                677: 1,
                922: 1,
                952: 1
              } [t] && r.push(e[t] = (e => new Promise((t, r) => {
                var a = P.miniCssF(e),
                  n = P.p + a;
                if (((e, t) => {
                    for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                      var n = (d = r[a]).getAttribute("data-href") || d.getAttribute("href");
                      if ("stylesheet" === d.rel && (n === e || n === t)) return d
                    }
                    var o = document.getElementsByTagName("style");
                    for (a = 0; a < o.length; a++) {
                      var d;
                      if ((n = (d = o[a]).getAttribute("data-href")) === e || n === t) return d
                    }
                  })(a, n)) return t();
                ((e, t, r, a, n) => {
                  var o = document.createElement("link");
                  o.rel = "stylesheet", o.type = "text/css", P.nc && (o.nonce = P.nc), o.onerror = o.onload = r => {
                    if (o.onerror = o.onload = null, "load" === r.type) a();
                    else {
                      var d = r && r.type,
                        f = r && r.target && r.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + d + ": " + f + ")");
                      c.name = "ChunkLoadError", c.code = "CSS_CHUNK_LOAD_FAILED", c.type = d, c.request = f, o.parentNode && o.parentNode.removeChild(o), n(c)
                    }
                  }, o.href = t, document.head.appendChild(o)
                })(e, n, 0, t, r)
              }))(t).then(() => {
                e[t] = 0
              }, r => {
                throw delete e[t], r
              }))
            }
          }
        })(), (() => {
          var e = {
            502: 0
          };
          P.f.j = (t, r) => {
            var a = P.o(e, t) ? e[t] : void 0;
            if (0 !== a)
              if (a) r.push(a[2]);
              else if (/^(17|331|625|677|82)$/.test(t)) e[t] = 0;
            else {
              var n = new Promise((r, n) => a = e[t] = [r, n]);
              r.push(a[2] = n);
              var o = P.p + P.u(t),
                d = new Error;
              P.l(o, r => {
                if (P.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var n = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  d.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", d.name = "ChunkLoadError", d.type = n, d.request = o, a[1](d)
                }
              }, "chunk-" + t, t)
            }
          };
          var t = (t, r) => {
              var a, n, [o, d, f] = r,
                c = 0;
              if (o.some(t => 0 !== e[t])) {
                for (a in d) P.o(d, a) && (P.m[a] = d[a]);
                f && f(P)
              }
              for (t && t(r); c < o.length; c++) n = o[c], P.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || [];
          r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })(), P.nc = void 0, P(35649), P(86557)
      })())
    }
  }
});