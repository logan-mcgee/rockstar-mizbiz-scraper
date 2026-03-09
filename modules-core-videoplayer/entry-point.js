try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "bd28bb6c-8ffd-4cac-ba03-64c56e24f26e", e._sentryDebugIdIdentifier = "sentry-dbid-bd28bb6c-8ffd-4cac-ba03-64c56e24f26e")
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
        var e, r, t, d, c, f, b, o, n, l, s, i, u, p, h, m, g, y, v, w, k, _, P, E, S, j = {
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
          131: "23be1ca4c0b2e20db75f32f1b549587e",
          278: "d5150ae202a930464941e514370ec0e8",
          299: "48236cdc441662e254e7b4d875ef2594",
          314: "0e89b2faa21f30f726b6344f1a377279",
          439: "e9a936967764e7f8644b1eb8d5b184d9",
          601: "6336ed9905313cf2bcbda1e8ea58ce90",
          662: "a25d9f142166d4a3fae2a52aeba1afce",
          824: "491bffbf577c607f913d98ff55d1a8fc",
          907: "1a5695e0ebf3830b739d9e5a8bbaf8af",
          1030: "5c2d634f6d2c9f1ce5549cd769d47454",
          1054: "58ebd7eb85665dd93ac42096328be01b",
          1098: "4b6eaf3345ebcb0a4645f94b65b35534",
          1242: "ed66deac530c7d7d18858281fb5233e5",
          1254: "3b2b47bdd61ef47d30c1bb549c0319f4",
          1703: "2b380a35e34b8af107513bfb18cbfce0",
          1773: "c8be8d5bac27fe0119c8e94a48888eac",
          1822: "80772321c86c2abbb17434124ce468a4",
          1868: "3a2c83a8999d3ba99d6890aa6400c091",
          2156: "45bc10d73fb6189571bad367a7d41d64",
          2169: "cec38ae025dec7662500635dd2e6ad20",
          2171: "96962e4195ac824b10a354d84a3d6d79",
          2217: "3e3a86f5c361e8569e74fbe74aafaee5",
          2221: "c73e1d86bbc590fa27658f5e11a4b17a",
          2243: "e82b3b6b509033393e14b42a0707e84f",
          2293: "a9b0716fba738acc9284755a4be32520",
          2306: "02e5a63d42c26327f3829e3694cafa21",
          2347: "c8b73b602063bd24c7dcd29cdff97e01",
          2365: "f16b4fe7fd20530647e42321290769e7",
          2398: "7be05da106caa2ac83908e3cdb26f4e9",
          2466: "210e4938437cbec62ad796ccfdd4dd00",
          2635: "5378ee5cced29af4e77afa1ee0b0f2b7",
          2642: "3d80d5bf17314d7a35dda2fffeeb55c4",
          2657: "6cf859cdbd997f21d6129ba2896a69ec",
          2678: "eb073f93c80a097e25342fb4b35c929c",
          2864: "5a7c5beed76d5d38aa80edc53d5e84c0",
          3034: "905723a655ae80130f3d1da079a2651e",
          3197: "5f4591ecd60323f37cc3333d96d47bc4",
          3343: "0156e76ad16ab76a47b0c85c7f017c82",
          3370: "be9001fef045ee9f81fe7a1104c77425",
          3475: "77c6ec9c039c0a870fe20ef01e751489",
          3486: "7a9d1ff79bd42f78675a20dea466ee83",
          3697: "bc1db0ed3c12e8e4490d22d37fedba77",
          3885: "44169f735488bfb29d4eb72e0cf668d7",
          3941: "ce4644c47d7ae1216d242246314a5314",
          4011: "2064d049e8c7ed9392e9df5c814c6d4b",
          4154: "2dbf3e632d14c3d433ce4e5593ec4435",
          4528: "1f70ce60d2943c765e255ca86761d780",
          4550: "533a9143657b55e9c96ba7bced4f8605",
          4578: "d49f959020b7c3e499be3809507b3cb2",
          4598: "1cc07448866957c9293d1f2fd78e6040",
          4621: "1b5a3de7612dcf59b3bb8bedd5f1ba79",
          4700: "0efa3d75cbd0bb9e6947577c84a12f9b",
          4710: "3d2a1f25f814154e9cabe47551231fc9",
          4731: "9adaa1eac3cc8b7c1cc4dcc0b2c2b8af",
          4799: "32c4fbdaa28913b369cba801130a8d5b",
          4851: "e7868d93c86b9fef2acfc3d05df83676",
          4861: "f1822c61935c937a7c0ede6a2523be6a",
          4913: "1ef66cc91f847372bcb75a6c98a80ea6",
          5016: "7f2a98a4b28209490c6252fd7fc7df09",
          5018: "4bc636247f9f0f6b58774f34e517b832",
          5055: "a83a789df5de9b5e26e28fa5cf7f3e13",
          5076: "631ffab9dc9a3407ca5a17f58a7e9af5",
          5233: "2c337e33ac02506048f0e66528456c49",
          5259: "f47c4d356fff660e61036e1cc177a1a4",
          5389: "21099f5e84ff03339823838115111ff2",
          5473: "916013d60946863de135dafb2eaf9a18",
          5530: "4490e1c7a61d9d425c3b1fe52a237d9d",
          5639: "483ea0702abbd40d82aa6bebc265ce02",
          5663: "22a52269ab564e1847b676b694994631",
          5742: "b79067ac311291a9698bb29860d77aee",
          5830: "560617570e0bd33c5db1c19ed6e67991",
          5832: "e07ca5c4e3b70f2341829b60264166c8",
          5859: "16b496a071e01f2eedc7ab62956efc16",
          6088: "df3ca621b9f2b65a4036226a97320bdc",
          6267: "e7c3d01761571ef92afd30cd55b5f1a9",
          6280: "517ad519f71fb6345d8adcaa9782c21b",
          6285: "3ab02b5e36b22b81a7954078e42c4a2c",
          6361: "1abfe718e93a618279d35c00ebc42ece",
          6664: "40ac639dcf70c8a55b07ae4066c55bcb",
          6879: "478e1febb3b8d8598dc121b0e7a79df4",
          6891: "d8852db8296794df6d6b5b7a6692d07e",
          6929: "e42f5b5865de5b78b959b9287581ed8b",
          6997: "961bdd6ef82332a5a46bc46d49fb6116",
          7010: "606faa03ffad527f76de8bb5b8ec1c73",
          7073: "6be762d0e1ddc4f38f54801a43916016",
          7436: "a2fe1d56c2027772975ad450f3036f85",
          7452: "c8764fa9b7fc84d6bbfc4b4cef51b5ed",
          7453: "a2cc38a666606dbcc63638421caab2a5",
          7684: "3ceba0e9fadc8db5120ef2fabf6cd0fc",
          7731: "02c6ca1c70cc868fd0c861770b37f875",
          7970: "ee63050813db4f9d53c5f83377bcc46a",
          8240: "2e0d14ba50069f955a9628d57bd20f7e",
          8271: "0a2f505fac2a96f5996cf1885025a9b4",
          8272: "6c64599151e891030bf672e0dfe4bf22",
          8284: "cba80501d312236b50825bda480e8377",
          8391: "6f2ff143945b53cf3e9fa471cd81a94b",
          8431: "77b8e52ffc7bd96b8bc8aaef1c06a6e5",
          8517: "6c139e8377d4a433a4316a8d13399af9",
          8755: "1236cdb5d8d2b442da7b5972780eeb8f",
          8880: "35b3e93d1c6ef87238ea75a796516171",
          8970: "68da560415c11a8ef5453f91f6948a6c",
          9022: "3f107c0c2e82db4941f3c90c0486d358",
          9028: "c7fdbd663a17400839511608af5b9fe4",
          9126: "04870938d8f374c70b6bd59247c9fd16",
          9377: "b03dd4d195e8dc69710c6a526e8045d4",
          9587: "6b60eafc642af347a776529433107d0a",
          9615: "92b93d89d1826617d70de387ed08b284",
          9719: "4ca269fe2f15e59abb0384744ec041e6",
          9757: "ea880d500bad071ce2f65d11b2269902",
          9813: "3335f73550edfb468bde47e777e7ff06",
          9936: "1dea899457d04df067f94f48ca6e800c",
          9990: "3f5d67684ad58069c8cc5c3a842e7164"
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
            var f, b;
            if (void 0 !== r)
              for (var o = document.getElementsByTagName("script"), n = 0; n < o.length; n++) {
                var l = o[n];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + r) {
                  f = l;
                  break
                }
              }
            f || (b = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, x.nc && f.setAttribute("nonce", x.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var s = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(i);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach(e => e(r)), a) return a(r)
              },
              i = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = s.bind(null, f.onerror), f.onload = s.bind(null, f.onload), b && document.head.appendChild(f)
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
                b = (e, a, r, t) => {
                  var d = c[e] = c[e] || {},
                    b = d[a];
                  (!b || !b.loaded && (!t != !b.eager ? t : f > b.from)) && (d[a] = {
                    get: r,
                    from: f,
                    eager: !!t
                  })
                },
                o = [];
              return "default" === r && (b("@gsap/react", "2.1.2", () => Promise.all([x.e(2229), x.e(2828), x.e(4154)]).then(() => () => x(4154))), b("@popperjs/core", "2.11.8", () => x.e(9813).then(() => () => x(9813))), b("@rsgweb/locale-tools", "1.0.0", () => Promise.all([x.e(9587), x.e(2229), x.e(8240)]).then(() => () => x(2841))), b("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([x.e(1703), x.e(2229), x.e(5966), x.e(2918), x.e(2217)]).then(() => () => x(2217))), b("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([x.e(2293), x.e(1254), x.e(2229), x.e(9623), x.e(6188), x.e(5966), x.e(6088), x.e(4550)]).then(() => () => x(2169))), b("@rsgweb/utils", "1.0.0", () => Promise.all([x.e(2293), x.e(8284), x.e(2229), x.e(9623), x.e(6188), x.e(1788), x.e(6088), x.e(6565), x.e(9757)]).then(() => () => x(9757))), b("clsx", "2.1.1", () => x.e(439).then(() => () => x(439))), b("graphql", "16.11.0", () => x.e(601).then(() => () => x(601))), b("gsap", "3.12.5", () => x.e(9719).then(() => () => x(9719))), b("hammerjs", "2.0.8", () => x.e(7731).then(() => () => x(7731))), b("lodash", "4.17.21", () => x.e(5076).then(() => () => x(5076))), b("react-dom", "18.3.1", () => Promise.all([x.e(1098), x.e(2229)]).then(() => () => x(1098))), b("react-popper", "2.3.0", () => Promise.all([x.e(2229), x.e(8429), x.e(9005), x.e(2635)]).then(() => () => x(2635))), b("react-router-dom", "6.30.1", () => Promise.all([x.e(5389), x.e(2229), x.e(8429)]).then(() => () => x(5389))), b("react", "18.3.1", () => x.e(8431).then(() => () => x(8431))), b("uuid", "9.0.1", () => x.e(2657).then(() => () => x(2657)))), e[r] = o.length ? Promise.all(o).then(() => e[r] = 1) : 1
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
              b = (typeof f)[0];
            if (d != b) return "o" == d && "n" == b || "s" == b || "u" == d;
            if ("o" != d && "u" != d && t != f) return t < f;
            r++
          }
        }, b = e => {
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
            c.push(0 === f ? "not(" + o() + ")" : 1 === f ? "(" + o() + " || " + o() + ")" : 2 === f ? c.pop() + " " + c.pop() : b(f))
          }
          return o();

          function o() {
            return c.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, o = (e, a) => {
          if (0 in e) {
            a = c(a);
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var d = 0, f = 1, b = !0;; f++, d++) {
              var n, l, s = f < e.length ? (typeof e[f])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(n = a[d]))[0])) return !b || ("u" == s ? f > r && !t : "" == s != t);
              if ("u" == l) {
                if (!b || "u" != s) return !1
              } else if (b)
                if (s == l)
                  if (f <= r) {
                    if (n != e[f]) return !1
                  } else {
                    if (t ? n > e[f] : n < e[f]) return !1;
                    n != e[f] && (b = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || f <= r) return !1;
                b = !1, f--
              } else {
                if (f <= r || l < s != t) return !1;
                b = !1
              } else "s" != s && "n" != s && (b = !1, f--)
            }
          }
          var i = [],
            u = i.pop.bind(i);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            i.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? o(p, a) : !u())
          }
          return !!u()
        }, n = (e, a) => e && x.o(e, a), l = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), i = (e, a, r, t) => {
          var d = t ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce((e, a) => !o(r, a) || e && !f(e, a) ? e : a, 0)) && d[a]
        }, u = (e, a, r) => {
          var t = r ? s(e[a]) : e[a];
          return Object.keys(t).reduce((e, a) => !e || !t[e].loaded && f(e, a) ? a : e, 0)
        }, p = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + b(t) + ")", h = (e, a, r, t, d) => {
          var c = e[r];
          return "No satisfying version (" + b(t) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(c).map(e => e + " from " + c[e].from).join(", ")
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
          return o(d, f) || g(p(a, r, f, d)), l(a[r][f])
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
                        b = r && r.target && r.target.href || a,
                        o = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + b + ")");
                      o.name = "ChunkLoadError", o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = b, c.parentNode && c.parentNode.removeChild(c), d(o)
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
              var t, d, [c, f, b] = r,
                o = 0;
              if (c.some(a => 0 !== e[a])) {
                for (t in f) x.o(f, t) && (x.m[t] = f[t]);
                b && b(x)
              }
              for (a && a(r); o < c.length; o++) d = c[o], x.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), x(3032), x(8157)
      })())
    }
  }
});