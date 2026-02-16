try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "420e055e-cca1-4271-aafe-d9ad4a458d35", e._sentryDebugIdIdentifier = "sentry-dbid-420e055e-cca1-4271-aafe-d9ad4a458d35")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, c, f, o, b, n, l, s, i, u, p, h, m, g, y, v, w, k, _, P, E, S, j = {
            3032: (e, a, r) => {
              r(8419)
            },
            7027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var t = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, d = 0, c = t.length; d !== a && c >= 0;) "/" === t[--c] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var f = t.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
              };
              Number.isInteger
            },
            7411: (e, a, r) => {
              const t = r(7027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            8157: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => r.e(8271).then(() => () => r(8271)),
                  "./index": () => Promise.all([r.e(5473), r.e(2229), r.e(9623), r.e(6188), r.e(5966), r.e(1788), r.e(1569), r.e(2828), r.e(2918), r.e(8517), r.e(1030)]).then(() => () => r(1030)),
                  "./tina": () => Promise.all([r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(1569), r.e(7684)]).then(() => () => r(7684)),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2229), r.e(8429), r.e(6188), r.e(5966), r.e(1788), r.e(1569), r.e(7684)]).then(() => () => r(7684))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                c = (e, a) => {
                  if (r.S) {
                    var t = "default",
                      d = r.S[t];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[t] = e, r.I(t, a)
                  }
                };
              r.d(a, {
                get: () => d,
                init: () => c
              })
            },
            8419: (e, a, r) => {
              (0, r(7411).w)(1)
            }
          },
          O = {};

        function x(e) {
          var a = O[e];
          if (void 0 !== a) return a.exports;
          var r = O[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return j[e].call(r.exports, r, r.exports, x), r.loaded = !0, r.exports
        }
        return x.m = j, x.c = O, x.y = a, x.amdO = {}, x.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return x.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, x.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          x.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            ("object" == typeof f || "function" == typeof f) && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach(e => c[e] = () => a[e]);
          return c.default = () => a, x.d(d, c), d
        }, x.d = (e, a) => {
          for (var r in a) x.o(a, r) && !x.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, x.f = {}, x.e = e => Promise.all(Object.keys(x.f).reduce((a, r) => (x.f[r](e, a), a), [])), x.u = e => "js/" + {
          131: "bb25af178b74817acef2df090702a685",
          278: "da23116f9b72f2eba9865f8a055d6706",
          299: "a98fa217ece7508d962a55c4b6b95e60",
          314: "60f60ef438efa30725619d1fce0b33ca",
          439: "3f34b5d48e2c935c34aa68e3df9d5385",
          601: "cfff24cc62bced8c184b7ddff9a838b9",
          662: "a3ee26eebd313c953c273221c9da3c9e",
          824: "e75e01dfc1018ea68357b25218840a70",
          907: "068f753f1c6bfde45c9266680c8dc000",
          1030: "a93e3e68f4a491b69ebdab5d829099ca",
          1054: "168eeedb4fbc0d4f8e5f283445ccfbe3",
          1098: "5057183954e7c69e70b1308ea1fdc4a7",
          1242: "acc1f71957ad663af9d76cf8150a3988",
          1254: "908b38ab79231726dbd64147e1f44c18",
          1703: "6a6e7b86d4e44e073a021adff0c43b7a",
          1773: "5a36cf663df803c2b97f92ba1946dfe3",
          1822: "b9d2c0fa240c298fd32639b212a984c6",
          1868: "976941614f0e14862e3c1cd1da1578df",
          2156: "2e1daded4157aff195a08ce6b4fad346",
          2169: "27814f23f26f1aa079233d57b3a897b1",
          2171: "137bff77c883e0e8a4ad7bdc6e1a9d14",
          2217: "783b4586824486e8df5bb961505bc423",
          2221: "224c6f5b5c50104ee6cccc91ff33e5d6",
          2243: "0abdee5c5cefcdf36f3c3f105bd1bc43",
          2293: "b272f513ab54b77a4b12cf61b9d23e9e",
          2306: "c776b4aa7c43510329f11c6cec7ebbe4",
          2347: "2f67ae94f9dbd11690c1a0cb4474f5f2",
          2365: "8d50e0725040d6a42060e8549a26f0b9",
          2398: "daabe00bbe007bded840a15b9e0cf71a",
          2466: "59b602b2ea35064578f4891dfd96ee42",
          2635: "b070d2c9415c1af88cfecc56d6516c06",
          2642: "25d9b8393fdc6fa8f5a3a9908039c91f",
          2657: "9dec925d98f829ea990c560adc2e5177",
          2678: "a1d856dd93111eb95f344fd3e6e2fb6b",
          2864: "861c8f7b83ee8252a88087b5272bd98e",
          3034: "8d1e4e909d0c8dfa02a4b82fce4217ab",
          3197: "f9c80cd5ca1d17cabddd20381df1862b",
          3343: "c4e894e7c5954b8ea762e870b0dc23a9",
          3370: "4d710289a29e39dcef5ca4b866d62b7f",
          3475: "630c7c5b8158f34a0d77c6bd80602613",
          3486: "53cdfe551e4eb66a102eae7e608fdf93",
          3697: "5e824d8d62b37c3bd889fac51a64fd4b",
          3885: "d28e07acd962555e2a61a1a41125ea7d",
          3941: "466f6593b15f204f7b8a7e5d29c105ad",
          4011: "2cf0c2d09038113909ccfac2ce4a3ef4",
          4154: "679ea94f544d44dd940304e33ccf3751",
          4528: "98572261167ee36184f0120341e4280c",
          4550: "f8b4fdb12b3b9d66c7b6465863d0da8b",
          4578: "2f15cacad438cc29d08676b3094e3ec7",
          4598: "a597a0d0aea5ab4e567d94e5a80dbec2",
          4621: "c80d941ae2ec3925a718706d2a99b6be",
          4700: "8489201db3b045d95370b02512620a79",
          4710: "94048ee19054fb46e9eeab9f61c87799",
          4731: "dfa4bd2dc90601e84e7b6188d231fcd4",
          4799: "24d3a88c87964f2f4ad4907f9e4d65c7",
          4851: "f003dd25b848385003829b8b6a6fb3b7",
          4861: "737bad033a992dbc0f4ec6e84ee55d3c",
          4913: "3188ade735463b98c599baa3469fda9f",
          5016: "2479bf7f5528c28780c73af40ea2cae5",
          5018: "c61b4b1e83a5a4ec28c9339e0bb56195",
          5055: "cb7fb9a62b1d33e5cc399d5ee7c0759c",
          5076: "26d93031133a2eaab773ef4a08d2d1c0",
          5233: "b3ceae74881aaea0e91ed718425f2bee",
          5259: "9814f423ae848f1c24989f2f5fb17be7",
          5389: "1121a0948e74aa2703fcb23d90f2f5fa",
          5473: "fc17e504491165d7638a13ec391619d7",
          5530: "10a7802d21698179328febc0c1a90f5b",
          5639: "b91595056fd113dc08ba510eef733ca1",
          5663: "e2bae724d23bd1b77c69cd7af0abe5da",
          5742: "76e36c1df2678f4aced3127fdfc0bc45",
          5830: "63d6308939a12a52e9f37d852aff1111",
          5832: "88c31b27be2cfb2c066887968b8467a3",
          5859: "8ff8294e32953460e1e11b20526c4807",
          6088: "41418b5c9fb4f67196790f7813bc05bf",
          6267: "becdd77f1bb25231ade55fc0dc021092",
          6280: "0df65c85e1313d9d251875fd03ffc7a2",
          6285: "fa8cc3fa27b137d893ab6b9e7ade92b7",
          6361: "de56744c5d8e9103cb0aa012b8e43017",
          6664: "3f913e0ebd21c5cbb3fbb0dc85dc346e",
          6879: "8483525efb39dc1d1b3f274d6b7576bb",
          6891: "4a7a5e9a8a8ccfaa664320b30022dfbd",
          6929: "51275536400195bea8d1ef33ac653917",
          6997: "7f3e5e28061ea1887f28b943a85e04cd",
          7010: "34c129c513486b4b5c13ccfb5bf7bea4",
          7073: "e9d38631004cc784fd8a68257fd63345",
          7436: "436e2ffeb095611a877b11b5a24ba551",
          7452: "cf717d1f3610e7499983dfabb025a2a9",
          7453: "35a5fede255eb58a3187031aac106e92",
          7684: "16d11087453c7da426ae6f92aa758707",
          7731: "bccf17092e91d7a70fc7ce78f02abd21",
          7970: "8b2919f7209a22b911ac04b3d9cce1e9",
          8240: "16f7216b5e7003d19ac255dd7b1e3c9d",
          8271: "d01aff12f872455736f6db5ef6f09c69",
          8272: "81cde7073bbc46574e24bbf7d9fe54b5",
          8284: "58e6efe495c82cc9816b0cced4fb183f",
          8391: "08032bae053f9ce21bbd76548bfde0b7",
          8431: "206f5595cdf6c3c341e624989203bbc0",
          8517: "a5b74ec03062459158d73c8065814307",
          8755: "a071feec2b9eca2b32f560984065f330",
          8880: "c898753a921b9238f481a073945ac477",
          8970: "d223dfc1a9ed209fbf39660276defe2f",
          9022: "c6e0d6d177160cd8b1038c082e4cefff",
          9028: "192966704bc5c4bb5e1e07de307c14c1",
          9126: "b8fe98682304eba280597927430bd459",
          9377: "ed13cadb5032a789da8faea290b7ed39",
          9587: "ed04bddccad0d914f3bea7450922fad2",
          9615: "5711bee3e0321a0edffa3b599359d754",
          9719: "a3beec9b8fec8d670c0d247db6cecd7b",
          9757: "636348c871226d565c3556e50ba63716",
          9813: "e4ea38ae1b01516c3c22c7028789e4f3",
          9936: "2dddb38e7cb050cac3aec74b631de938",
          9990: "b6826fa89e486f24f199cf8d236e0235"
        } [e] + ".js", x.miniCssF = e => "css/" + {
          1030: "a36e0cbe058ff11dfb786ef49eb77a52",
          2217: "30c5db481d6b25a478ff5719bcbdf03e",
          4598: "30c5db481d6b25a478ff5719bcbdf03e",
          5055: "98d2f7207c07838416399fe63c3fcbc4",
          7684: "0f3056ce40472624d7ee487fbb173c0a",
          8517: "ac1d1d330280e6d552ffe4242a9c8fb8"
        } [e] + ".css", x.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), x.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-videoplayer:", x.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var b = document.getElementsByTagName("script"), n = 0; n < b.length; n++) {
                var l = b[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + r) {
                  f = l;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, x.nc && f.setAttribute("nonce", x.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var s = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(i);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(r)), a) return a(r)
              },
              i = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, x.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, x.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          x.S = {};
          var e = {},
            a = {};
          x.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              x.o(x.S, r) || (x.S[r] = {});
              var c = x.S[r],
                f = "@rockstargames/modules-core-videoplayer",
                o = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : f > o.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                b = [];
              return "default" === r && (o("@gsap/react", "2.1.2", () => Promise.all([x.e(2229), x.e(2828), x.e(4154)]).then(() => () => x(4154))), o("@popperjs/core", "2.11.8", () => x.e(9813).then(() => () => x(9813))), o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([x.e(9587), x.e(2229), x.e(8240)]).then(() => () => x(2841))), o("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([x.e(1703), x.e(2229), x.e(5966), x.e(2918), x.e(2217)]).then(() => () => x(2217))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([x.e(2293), x.e(1254), x.e(2229), x.e(9623), x.e(6188), x.e(5966), x.e(6088), x.e(4550)]).then(() => () => x(2169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([x.e(2293), x.e(8284), x.e(2229), x.e(9623), x.e(6188), x.e(1788), x.e(6088), x.e(6565), x.e(9757)]).then(() => () => x(9757))), o("clsx", "2.1.1", () => x.e(439).then(() => () => x(439))), o("graphql", "16.11.0", () => x.e(601).then(() => () => x(601))), o("gsap", "3.12.5", () => x.e(9719).then(() => () => x(9719))), o("hammerjs", "2.0.8", () => x.e(7731).then(() => () => x(7731))), o("lodash", "4.17.21", () => x.e(5076).then(() => () => x(5076))), o("react-dom", "18.3.1", () => Promise.all([x.e(1098), x.e(2229)]).then(() => () => x(1098))), o("react-popper", "2.3.0", () => Promise.all([x.e(2229), x.e(8429), x.e(9005), x.e(2635)]).then(() => () => x(2635))), o("react-router-dom", "6.30.1", () => Promise.all([x.e(5389), x.e(2229), x.e(8429)]).then(() => () => x(5389))), o("react", "18.3.1", () => x.e(8431).then(() => () => x(8431))), o("uuid", "9.0.1", () => x.e(2657).then(() => () => x(2657)))), e[r] = b.length ? Promise.all(b).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          x.g.importScripts && (e = x.g.location + "");
          var a = x.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), x.p = e
        })(), c = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, f = (e, a) => {
          e = c(e), a = c(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              d = (typeof t)[0];
            if (r >= a.length) return "u" == d;
            var f = a[r],
              o = (typeof f)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && t != f) return t < f;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, d = 1; d < e.length; d++) t--, r += "u" == (typeof(f = e[d]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, f);
            return r
          }
          var c = [];
          for (d = 1; d < e.length; d++) {
            var f = e[d];
            c.push(0 === f ? "not(" + b() + ")" : 1 === f ? "(" + b() + " || " + b() + ")" : 2 === f ? c.pop() + " " + c.pop() : o(f))
          }
          return b();

          function b() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, b = (e, a) => {
          if (0 in e) {
            a = c(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var d = 0, f = 1, o = !0;; f++, d++) {
              var n, l, s = f < e.length ? (typeof e[f])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !o || ("u" == s ? f > r && !t : "" == s != t);
              if ("u" == l) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == l)
                  if (f <= r) {
                    if (n != e[f]) return !1
                  } else {
                    if (t ? n > e[f] : n < e[f]) return !1;
                    n != e[f] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || f <= r) return !1;
                o = !1, f--
              } else {
                if (f <= r || l < s != t) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, f--)
            }
          }
          var i = [],
            u = i.pop.bind(i);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? b(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && x.o(e, a), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), i = (e, a, r, t) => {
          var d = t ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce((e, a) => !b(r, a) || e && !f(e, a) ? e : a, 0)) && d[a]
        }, u = (e, a, r) => {
          var t = r ? s(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && f(e, a) ? a : e, 0)
        }, p = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(t) + ")", h = (e, a, r, t, d) => {
          var c = e[r];
          return "No satisfying version (" + o(t) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, t, d, c) {
          var f = x.I(a);
          return f && f.then && !t ? f.then(e.bind(e, a, x.S[a], r, !1, d, c)) : e(a, x.S[a], r, t, d, c)
        })((e, a, r, t, d, c) => {
          if (!n(a, r)) return v(e, r, c);
          var f = i(a, r, d, t);
          return f ? l(f) : c ? c() : void m(h(a, e, r, d, t))
        }), k = y((e, a, r, t, d, c) => {
          if (!n(a, r)) return v(e, r, c);
          var f = u(a, r, t);
          return b(d, f) || g(p(a, r, f, d)), l(a[r][f])
        }), _ = {}, P = {
          2229: () => w("default", "react", !1, [1, 18, 2, 0], () => x.e(8431).then(() => () => x(8431))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([x.e(5389), x.e(8429)]).then(() => () => x(5389))),
          6188: () => w("default", "lodash", !1, [1, 4, 17, 21], () => x.e(5076).then(() => () => x(5076))),
          5966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([x.e(2293), x.e(8284), x.e(9623), x.e(6188), x.e(1788), x.e(6088), x.e(6929)]).then(() => () => x(9757))),
          1788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([x.e(9587), x.e(5859)]).then(() => () => x(2841))),
          1569: () => w("default", "uuid", !1, [1, 9, 0, 0], () => x.e(2657).then(() => () => x(2657))),
          2828: () => w("default", "gsap", !1, [4, 3, 12, 5], () => x.e(9719).then(() => () => x(9719))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([x.e(2293), x.e(1254), x.e(9623), x.e(6188), x.e(6088), x.e(2169)]).then(() => () => x(2169))),
          4572: () => w("default", "clsx", !1, [1, 2, 1, 1], () => x.e(439).then(() => () => x(439))),
          4848: () => w("default", "hammerjs", !1, [1, 2, 0, 8], () => x.e(7731).then(() => () => x(7731))),
          5971: () => w("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([x.e(8429), x.e(9005), x.e(5016)]).then(() => () => x(2635))),
          7224: () => w("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], () => Promise.all([x.e(1703), x.e(4598)]).then(() => () => x(2217))),
          7654: () => w("default", "@gsap/react", !1, [1, 2, 1, 0], () => x.e(1773).then(() => () => x(4154))),
          8429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => x.e(1098).then(() => () => x(1098))),
          6565: () => w("default", "graphql", !1, [1, 16, 9, 0], () => x.e(601).then(() => () => x(601))),
          9005: () => w("default", "@popperjs/core", !1, [1, 2, 11, 7], () => x.e(9813).then(() => () => x(9813)))
        }, E = {
          1569: [1569],
          1788: [1788],
          2229: [2229],
          2828: [2828],
          2918: [2918],
          5966: [5966],
          6188: [6188],
          6565: [6565],
          6929: [6565],
          8429: [8429],
          8517: [4572, 4848, 5971, 7224, 7654],
          9005: [9005],
          9623: [9623]
        }, S = {}, x.f.consumes = (e, a) => {
          x.o(E, e) && E[e].forEach(e => {
            if (x.o(_, e)) return a.push(_[e]);
            if (!S[e]) {
              var r = a => {
                _[e] = 0, x.m[e] = r => {
                  delete x.c[e], r.exports = a()
                }
              };
              S[e] = !0;
              var t = a => {
                delete _[e], x.m[e] = r => {
                  throw delete x.c[e], a
                }
              };
              try {
                var d = P[e]();
                d.then ? a.push(_[e] = d.then(r).catch(t)) : r(d)
              } catch (e) {
                t(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            x.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4598: 1,
                5055: 1,
                7684: 1,
                8517: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var t = x.miniCssF(e),
                  d = x.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (f = r[t]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (d === e || d === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (t = 0; t < c.length; t++) {
                      var f;
                      if ((d = (f = c[t]).getAttribute("data-href")) === e || d === a) return f
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", x.nc && (c.nonce = x.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        b = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      b.name = "ChunkLoadError", b.code = "CSS_CHUNK_LOAD_FAILED", b.type = f, b.request = o, c.parentNode && c.parentNode.removeChild(c), d(b)
                    }
                  }, c.href = a, document.head.appendChild(c)
                })(e, d, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          x.f.j = (a, r) => {
            var t = x.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(2(229|828|918)|(17|61)88|1569|5966|6565|8429|9005|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((r, d) => t = e[a] = [r, d]);
              r.push(t[2] = d);
              var c = x.p + x.u(a),
                f = new Error;
              x.l(c, r => {
                if (x.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [c, f, o] = r,
                b = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) x.o(f, t) && (x.m[t] = f[t]);
                o && o(x)
              }
              for (a && a(r); b < c.length; b++) d = c[b], x.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), x(3032), x(8157)
      })())
    }
  }
});