try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dabbbb89-2940-413b-83b9-d6d2b1002abc", e._sentryDebugIdIdentifier = "sentry-dbid-dabbbb89-2940-413b-83b9-d6d2b1002abc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, d, t, f, c, o = {
            9944: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var d = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, f = d.length; t !== a && f >= 0;) "/" === d[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = d.slice(0, f + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            37389: (e, a, r) => {
              r(21998)
            },
            82788: (e, a, r) => {
              const d = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
              }
            },
            98478: (e, a, r) => {
              "use strict";
              var d = {
                  "./root": () => Promise.all([r.e(1689), r.e(9603), r.e(1127), r.e(8429), r.e(9623), r.e(5966), r.e(9773), r.e(6192)]).then((() => () => r(13438)))
                },
                t = (e, a) => (r.R = a, a = r.o(d, e) ? d[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
                f = (e, a) => {
                  if (r.S) {
                    var d = "default",
                      t = r.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[d] = e, r.I(d, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => f
              })
            }
          },
          n = {};

        function b(e) {
          var a = n[e];
          if (void 0 !== a) return a.exports;
          var r = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return o[e].call(r.exports, r, r.exports, b), r.loaded = !0, r.exports
        }
        return b.m = o, b.c = n, b.y = a, b.amdO = {}, b.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return b.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          b.r(t);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            "object" == typeof c && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, b.d(t, f), t
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          114: "4edd07a0af2ec3086198c0fc5d720955",
          131: "25382c89668b1c45b8d8f23483d25482",
          278: "802d5d27d8a9892a5c1e6fbddeac3f6c",
          299: "c3402d4fb2aadf5d85e3b942478a1f62",
          314: "4e6765dd31212e805dd122a20f15a55e",
          377: "6c662ece9d6feeb50d8353b9c64abf08",
          662: "9d8946ff7b84191698ffcb3ff81c15a4",
          824: "435a82c52d46d11b43d7888812e0f3ad",
          888: "107c8b5129bffabed6e727ff22829794",
          907: "1bb7d5245b50a85027b476415f6b616a",
          969: "4a37ec089bf38d8a32d0ffeed5e1d881",
          1054: "7d45e32d6f284dd278ae9867260aa1de",
          1138: "63fec090fb37280cf9da46c25ed4dbdb",
          1154: "a5441d719cf5bd56b99f75d5183a4f11",
          1242: "18cd77b123761e3fd885c3d313bb0ea1",
          1379: "e067f9c157a2e486d595d54f252cfeaf",
          1607: "d84f89dfd54a6530a9a327d8130334da",
          1689: "16802e82b54ea47e6824e28345775c89",
          1822: "f9b165a0312afd6ff20ec923a9b9803b",
          1868: "0110dabfa58363f50bff6e181b66d74f",
          2156: "a53ae58563590388a038645463f4adc0",
          2171: "2e9942489fb00aaec83bab88ed6bddb2",
          2221: "dc75dacbc772321ff8c4a77b1bb1d18c",
          2243: "839cc7aaf64105b7043824ef91038f36",
          2315: "ccd1edffff148b041b0c0cab2dd408ab",
          2343: "8ea9f8a91b23713b2547abdc1f1bf24a",
          2347: "fc980e15c2fe2480eb91747ba628781d",
          2365: "8dc1b03df15649c7ca199dde7c77f989",
          2398: "c4b2344b29bcfaa51d8dbd428d6027f6",
          2466: "4658efbcecd2e79aea8040e1e8613cc0",
          2642: "1095736f692b352c367b0085c2077f56",
          2678: "1ae3aea64fe1edb963da18f22c24ad5d",
          2864: "2df1c326e9a37d2998f514e4ebf2d789",
          2941: "c222be74e4560c2d00fbc5db493fdab6",
          3034: "43d6a1604cb12abf865debd0009b8716",
          3197: "627a611ce52da4f7ff00a09c662bf360",
          3343: "1066e7bbd4f3bfbbb953c80f03dbc5af",
          3370: "0fa7d8365805425c87a6ebcd338fb5f7",
          3475: "e22e9ed5802f39c786222329f4baac29",
          3486: "0833b7329905ff55006f0a7397de3fc6",
          3622: "b6fe79d13590fb662ceb4f451e9e9b1b",
          3697: "d5acfb7533232781423a185ac523a030",
          3885: "53e2360a71da24c0d3d007466e5e4076",
          3941: "dbd94e5b71dd5c734ab873635290d608",
          4011: "a9651aae29d59ee323a79a0e0b8c9d41",
          4186: "615c47ca57165372e4112c013fb5ad4b",
          4220: "178649ecaa0d0caba36cf1e3f218db87",
          4528: "6f23f89269415fe354618d30dcdbd915",
          4621: "996f15147ab823417b25605e61776fd9",
          4700: "f56e7747f269e31e186108a831864db7",
          4710: "c4287e3cca8e5c626e839f41f73aa508",
          4731: "9f4daf244722c927ac3b8fccdc57279e",
          4799: "2b3eea92f7d3943ab040519a142d5f6a",
          4851: "554bf53d9ee1f2f0abd8751221377173",
          4861: "6afee73b1fed1c8ba7cd3be737708b52",
          4913: "765f6c501b3a31c3325ff9c5ce6c08c3",
          5018: "988767ccdcfd05c3526c1ae786d309f1",
          5233: "ce2fac4150cf20e914463e9f80193814",
          5247: "9a20bd23bb37c53355735f525cbe51da",
          5259: "b9ce9fc31645cacfed5d3ecd92a54944",
          5491: "7aecf731781af7da0439b85d2bea38f9",
          5530: "ff3fb755fa35595c5bd5cd4cfa404681",
          5639: "a6e3550d5b691c59150c1949c92363ff",
          5663: "1ee5635a0a8f82a1527a5104b72859f8",
          5742: "23f04f290c2df1ac30c24b3340e48b65",
          5830: "73c5620110d82e65c54f76488ca66f9d",
          5832: "382b53371ec10149b138b412e9be21de",
          5959: "d0b2e4232c336e16d51d19063d49737c",
          6019: "51a211b5daf965ab6b0fe317eac75328",
          6067: "2aaa278be049360423d0663b2848bb25",
          6192: "f30923b9613be8fbffc86478fc83256e",
          6204: "e955f4d115e3f8e94474f1ce9d8d514c",
          6267: "73fe3be18833dc295da7aed8a936cdf9",
          6280: "a9d0fb632ba1f275475d43a7b0c871f1",
          6285: "6535d7f069e3b0fd17b67a4f95f4e325",
          6361: "956d63e4e38f01d1bae033df6e9ba9bd",
          6642: "72d74eb352700a32650ffd7d7c940c61",
          6664: "8f8f82d245376b8f59dd57d07b86eb81",
          6871: "61c205b2601185be688d553cac04d04b",
          6879: "ece2893b5d337b9fc210e58bda826cc1",
          6891: "54e0c75204c5ef0adbf1f3e01c03392a",
          6940: "c731b6bd49df2b31930074b6ad1e4024",
          6997: "0a7a0e22fa665c48c7e58852e605d59e",
          7010: "61982d04caa5e38eae53312e150b1e5b",
          7039: "47b99b0dd1191ee8c6b0eb7184e16546",
          7073: "d142abda7650b84eff98de4413adb5fb",
          7436: "4d4382f3b85bf026505a099e20bba4e6",
          7452: "56512ad0b0e3cad04232fe8c24b0a733",
          7453: "d4a38cd89b02dfa43838c5179075d07f",
          7858: "c760a1442b0bddfc33e2291355b87133",
          7970: "b7fa6addb3b3aa3607301e59503acf47",
          8272: "f4c6b2dafc9337c659cebd818c336126",
          8391: "81c5b9f347d77fbb5b79198b80448f96",
          8755: "960a556b746c634ff5493ae12edce5b5",
          8773: "3ed571d4c39c1b756c62967d57d993e9",
          8880: "22546fb79bf17b5221d2d53cd5009aa3",
          8970: "53b84ea4986b3ab31fdd705ff3117982",
          9022: "9e5e4ac5a4ae291c0b271754e0f4389c",
          9028: "c8660b9124baa06995b6608b9c16e810",
          9126: "32d979f0011cb549f0be6be7390a9cba",
          9368: "7abacd52073ced077f8aa081e257499f",
          9377: "d9bf6bb043acb8e773193d59165652a4",
          9474: "d927b9962f5d928ec4cc2f0b098334bc",
          9482: "9f7793bab3d878e704eb02e827ffc48b",
          9603: "e64d5507223f96b84fabfc4390af24d0",
          9615: "d3584b05b9e31eaf7ebbda58a23e0890",
          9642: "e06afa6d7f82f4fd3ae84ae5a5f1ceac",
          9728: "b0fc525bfadcf0a9cb50393397b9275a",
          9773: "e0d085bafc6fba5ced67abe0d186891e",
          9936: "a1dc1422ee6e18daa2a30d5b3d31512d",
          9990: "58a5c94b141b56267cf5f874f47163b1"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1689: "cea1a81b81d394e799ca4dbdb9603b59",
          2988: "450cc2b1c47be1e723f0b0d53ea4743d",
          5491: "4a56bf49c7bb3a8a5e5469972d81811d",
          6192: "1b6a05f8cdb2244907347e6834e933b8",
          6642: "f1da5b48170e8eff07c31868b9c22f2e"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/modules-core-footer:", b.l = (e, a, r, f) => {
          if (d[e]) d[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var s = n[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == t + r) {
                  c = s;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, b.nc && c.setAttribute("nonce", b.nc), c.setAttribute("data-webpack", t + r), c.src = e), d[e] = [a];
            var l = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = l.bind(null, c.onerror), c.onload = l.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), f = {}, c = {}, b.f.remotes = (e, a) => {
          b.o(f, e) && f[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var d = c[e];
            if (!(r.indexOf(d) >= 0)) {
              if (r.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), b.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                f = (e, r, f, c, o, n) => {
                  try {
                    var b = e(r, f);
                    if (!b || !b.then) return o(b, c, n);
                    var i = b.then((e => o(e, c)), t);
                    if (!n) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => f(a.get, d[1], r, 0, n, t),
                n = a => {
                  d.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              f(b, d[2], 0, 0, ((e, a, r) => e ? f(b.I, d[0], 0, e, o, r) : t()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, d) => {
            d || (d = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var f = b.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, d) => {
                  var t = f[e] = f[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : c > o.from)) && (t[a] = {
                    get: r,
                    from: c,
                    eager: !!d
                  })
                },
                n = [];
              return "default" === r && (o("@foundry/react", "4.1.5", (() => Promise.all([b.e(6067), b.e(7858), b.e(1689), b.e(9603), b.e(6642), b.e(1127), b.e(8429)]).then((() => () => b(12454))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(7858), b.e(2315), b.e(1127), b.e(1154)]).then((() => () => b(67439))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([b.e(2343), b.e(6067), b.e(9603), b.e(1127), b.e(1379), b.e(8429), b.e(9623), b.e(5966), b.e(5491), b.e(9773), b.e(2988)]).then((() => () => b(94267))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(2343), b.e(6204), b.e(1127), b.e(1379), b.e(9623), b.e(5966), b.e(9482)]).then((() => () => b(66871))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(2343), b.e(1127), b.e(1379), b.e(9623), b.e(5959)]).then((() => () => b(81635))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(6019), b.e(1127)]).then((() => () => b(66019))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(9728), b.e(1127), b.e(8429)]).then((() => () => b(49728))))), o("react", "18.3.1", (() => b.e(1138).then((() => () => b(11138)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                d = r[1] ? a(r[1]) : [];
              return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
            },
            a = (a, r) => {
              a = e(a), r = e(r);
              for (var d = 0;;) {
                if (d >= a.length) return d < r.length && "u" != (typeof r[d])[0];
                var t = a[d],
                  f = (typeof t)[0];
                if (d >= r.length) return "u" == f;
                var c = r[d],
                  o = (typeof c)[0];
                if (f != o) return "o" == f && "n" == o || "s" == o || "u" == f;
                if ("o" != f && "u" != f && t != c) return t < c;
                d++
              }
            },
            r = e => {
              var a = e[0],
                d = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                d += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, f = 1; f < e.length; f++) t--, d += "u" == (typeof(o = e[f]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return d
              }
              var c = [];
              for (f = 1; f < e.length; f++) {
                var o = e[f];
                c.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? c.pop() + " " + c.pop() : r(o))
              }
              return n();

              function n() {
                return c.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  f = t < 0;
                f && (t = -t - 1);
                for (var c = 0, o = 1, n = !0;; o++, c++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (c >= r.length || "o" == (i = (typeof(b = r[c]))[0])) return !n || ("u" == s ? o > t && !f : "" == s != f);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (f ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (f || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < s != f) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (c = 1; c < a.length; c++) {
                var p = a[c];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? d(p, r) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && b.o(e, a),
            f = e => (e.loaded = 1, e.get()),
            c = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, r, d, t, f) {
              var c = b.I(a);
              return c && c.then && !d ? c.then(e.bind(e, a, b.S[a], r, !1, t, f)) : e(a, b.S[a], r, d, t, f)
            },
            i = (e, a, r) => r ? r() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = n(((e, n, b, s, l, u) => {
              if (!t(n, b)) return i(e, b, u);
              var p = ((e, r, t, f) => {
                var o = f ? c(e[r]) : e[r];
                return (r = Object.keys(o).reduce(((e, r) => !d(t, r) || e && !a(e, r) ? e : r), 0)) && o[r]
              })(n, b, l, s);
              return p ? f(p) : u ? u() : void o(((e, a, d, t, f) => {
                var c = e[d];
                return "No satisfying version (" + r(t) + ")" + (f ? " for eager consumption" : "") + " of shared module " + d + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map((e => e + " from " + c[e].from)).join(", ")
              })(n, e, b, l, s))
            })),
            l = n(((e, o, n, b, s, l) => {
              if (!t(o, n)) return i(e, n, l);
              var u, p = ((e, r, d) => {
                var t = d ? c(e[r]) : e[r];
                return Object.keys(t).reduce(((e, r) => !e || !t[e].loaded && a(e, r) ? r : e), 0)
              })(o, n, b);
              return d(s, p) || (u = ((e, a, d, t) => "Unsatisfied version " + d + " from " + (d && e[a][d].from) + " of shared singleton module " + a + " (required " + r(t) + ")")(o, n, p, s), "undefined" != typeof console && console.warn && console.warn(u)), f(o[n][p])
            })),
            u = {},
            p = {
              71127: () => l("default", "react", !1, [1, 18, 2, 0], (() => b.e(1138).then((() => () => b(11138))))),
              18429: () => l("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(6019).then((() => () => b(66019))))),
              9623: () => s("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(9728), b.e(8429)]).then((() => () => b(49728))))),
              95966: () => s("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(2343), b.e(1379)]).then((() => () => b(81635))))),
              2918: () => s("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(2343), b.e(6204), b.e(1379), b.e(6871)]).then((() => () => b(66871))))),
              61898: () => s("default", "@foundry/react", !1, [1, 4, 1, 5], (() => Promise.all([b.e(6067), b.e(7858), b.e(1689), b.e(6642)]).then((() => () => b(12454))))),
              81788: () => s("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(7858), b.e(2315), b.e(8773)]).then((() => () => b(67439))))),
              20270: () => s("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([b.e(2343), b.e(6067), b.e(1379), b.e(5491)]).then((() => () => b(94267)))))
            },
            h = {
              1127: [71127],
              5966: [95966],
              6192: [20270],
              8429: [18429],
              9623: [9623],
              9773: [2918, 61898, 81788]
            },
            m = {};
          b.f.consumes = (e, a) => {
            b.o(h, e) && h[e].forEach((e => {
              if (b.o(u, e)) return a.push(u[e]);
              if (!m[e]) {
                var r = a => {
                  u[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                m[e] = !0;
                var d = a => {
                  delete u[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var t = p[e]();
                  t.then ? a.push(u[e] = t.then(r).catch(d)) : r(t)
                } catch (e) {
                  d(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1689: 1,
                2988: 1,
                5491: 1,
                6192: 1,
                6642: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var d = b.miniCssF(e),
                  t = b.p + d;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), d = 0; d < r.length; d++) {
                      var t = (c = r[d]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (d = 0; d < f.length; d++) {
                      var c;
                      if ((t = (c = f[d]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(d, t)) return a();
                ((e, a, r, d, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", b.nc && (f.nonce = b.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) d();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), t(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, t, 0, a, r)
              })))(a).then((() => {
                e[a] = 0
              }), (r => {
                throw delete e[a], r
              })))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          b.f.j = (a, r) => {
            var d = b.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^(1127|2988|5966|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise(((r, t) => d = e[a] = [r, t]));
              r.push(d[2] = t);
              var f = b.p + b.u(a),
                c = new Error;
              b.l(f, (r => {
                if (b.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, d[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, f = r[0],
                c = r[1],
                o = r[2],
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (d in c) b.o(c, d) && (b.m[d] = c[d]);
                o && o(b)
              }
              for (a && a(r); n < f.length; n++) t = f[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(37389), b(98478)
      })())
    }
  }
}));