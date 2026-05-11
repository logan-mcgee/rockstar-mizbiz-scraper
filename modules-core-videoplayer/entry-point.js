try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4b25f88c-612d-484a-9d4f-7799aa12f703", e._sentryDebugIdIdentifier = "sentry-dbid-4b25f88c-612d-484a-9d4f-7799aa12f703")
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
        var e, t, r, d, f, c, o, n, b, l, i, s, u, p, h, m, g, y, v, w, _, k = {
            28419(e, a, t) {
              (0, t(17411).w)(1)
            },
            17411(e, a, t) {
              const r = t(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !t.y.meta || !t.y.meta.url) throw console.error("__system_context__", t.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                t.p = r(t.y.meta.url, e)
              }
            },
            93032(e, a, t) {
              t(28419)
            },
            77027(e, a, t) {
              a.y = function(e, a) {
                var t = document.createElement("a");
                t.href = e;
                for (var r = "/" === t.pathname[0] ? t.pathname : "/" + t.pathname, d = 0, f = r.length; d !== a && f >= 0;) "/" === r[--f] && d++;
                if (d !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + d + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return t.protocol + "//" + t.host + c
              };
              Number.isInteger
            },
            58157(e, a, t) {
              "use strict";
              var r = {
                  "./bootstrap": () => t.e(8271).then(() => () => t(8271)),
                  "./index": () => Promise.all([t.e(3004), t.e(5473), t.e(1127), t.e(2909), t.e(181), t.e(336), t.e(3331), t.e(9023), t.e(1142), t.e(2199), t.e(8517), t.e(1030)]).then(() => () => t(21030)),
                  "./tina": () => Promise.all([t.e(1127), t.e(2909), t.e(8429), t.e(336), t.e(3331), t.e(9023), t.e(4365)]).then(() => () => t(44365)),
                  "./tinaBlockTemplates": () => Promise.all([t.e(1127), t.e(2909), t.e(8429), t.e(336), t.e(3331), t.e(9023), t.e(4365)]).then(() => () => t(44365))
                },
                d = (e, a) => (t.R = a, a = t.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), t.R = void 0, a),
                f = (e, a) => {
                  if (t.S) {
                    var r = "default",
                      d = t.S[r];
                    if (d && d !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return t.S[r] = e, t.I(r, a)
                  }
                };
              t.d(a, {
                get: () => d,
                init: () => f
              })
            }
          },
          P = {};

        function E(e) {
          var a = P[e];
          if (void 0 !== a) return a.exports;
          var t = P[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return k[e].call(t.exports, t, t.exports, E), t.loaded = !0, t.exports
        }
        return E.m = k, E.c = P, E.y = a, E.amdO = {}, E.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return E.d(a, {
            a
          }), a
        }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, E.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          E.r(d);
          var f = {};
          e = e || [null, t({}), t([]), t(t)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, E.d(d, f), d
        }, E.d = (e, a) => {
          for (var t in a) E.o(a, t) && !E.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: a[t]
          })
        }, E.f = {}, E.e = e => Promise.all(Object.keys(E.f).reduce((a, t) => (E.f[t](e, a), a), [])), E.u = e => "js/" + {
          131: "1b1699922ce156f1d84cdbc763a04a7d",
          278: "658fd1cda884fd9ec5b6ba5214a0b942",
          299: "a0ea96e0e8bed33abae57366235c5678",
          314: "66257830c17dab30b2f3e34a31d3d3fc",
          439: "0225f3c3fb22d550a6f3a84d6ffd61f5",
          637: "ba5b1e12261a4de777e7220f378affe4",
          662: "526bee08dce7246797966c663346a7d5",
          824: "1a961c800a1e72e011d2cfeaad73cfab",
          907: "3a0d2154b8398b033c4d0983766551f2",
          1030: "8560ab0073ee4b10727e7a6878227e5a",
          1054: "fe20be845adbb0f0dfbb6d4a1dc70cd5",
          1098: "89c099ad87209be3125896c17b285bda",
          1242: "ffb448dbcc8d33e28cef58884c0b7d4b",
          1254: "3b02d5832842e97427388176f9cdbdb7",
          1703: "a3e14334236a56d93b2bbe6887aa21b0",
          1773: "2cd940f2b869535f0fe8162113fdffe0",
          1795: "b4e1d93872f9b09b60f85f9d3aeffd34",
          1822: "9692dcd0a31241614b21901291d269aa",
          1837: "af08743b13a853c3473d7f3409a7fbd9",
          1868: "3c84ba3cb78eb406b3ce640ed713edba",
          2156: "5b833def40221ebe8586491f33055995",
          2169: "3b0ab18bcb3242b34e41ceae9ab3a5b6",
          2171: "1720d981213f40c6fa339b351425934f",
          2217: "cc6b724f73c946903b6bdb7dbe706ae6",
          2221: "b761978b5d01f0e134098b17e0e79ce2",
          2243: "26ce51df3bd9ed83b65c48c0cd66260a",
          2347: "8d5749d18d3d0f8a9183a8f42bff0ecf",
          2365: "fb787c6ea7944ae91996dde32476fc1c",
          2398: "f308d19502f28e0edcf8b1ef9ae2c4b5",
          2466: "7f174d174f098fd79e2b4d898eba8c51",
          2635: "fd455a98b43d1cf66714581c514f58b6",
          2642: "cc10782e6fab75c5df865a601d8ded80",
          2657: "843314546e768e68b4068cf1229cb35f",
          2678: "eeeaa9b52c1aa126aa32252a5c46cef4",
          2864: "ea9cd35d4bb0a40e6b2fb587ef0d1c54",
          3004: "459126e410ddfe270261b84d89046522",
          3034: "a4a1d0eb77cf238434c1ba5f134b0470",
          3197: "aef30cc57c9142a54c42791b3edcb6a5",
          3343: "712c805402e2f31ce0ee3e7e9ce14a34",
          3370: "a978d62fb2709174e7111cb309c74d84",
          3475: "44bdda854fbfbf78514f8d60782000af",
          3486: "1279b7564dd2e36fb2376275139d7787",
          3697: "edbbfd57bbd392a902efc661c5f9e6e2",
          3885: "ddb94e3ae3d6d2ea5c40cfc2bb3ed5f3",
          3941: "191d88993f40615dea7b107df2f3cdd8",
          4011: "47d476e3328de04fb1f67b852e9f17dd",
          4154: "87761b1c921fef7f9d636a11290ad065",
          4218: "c2a27a498ea51f30369b4d44f51ff921",
          4365: "b559cb9a511bfc194193928b5774f2e7",
          4528: "507af7f126aac34ba52e3a34c0cc2a67",
          4550: "7816f97acdc9b69b8be7b75e5d7e7082",
          4578: "fe45d88cc63f3afeb1cfac7b1b241758",
          4598: "8251e2cb94a84b664cc7ea659d0dcc4c",
          4621: "17bdc3d8fd1f2fc5099ab135b25adb06",
          4700: "d15d4446c4f3134f73c2fafc33608c62",
          4710: "bfc577e07a04a315ea6847537224baa4",
          4731: "375daddccbf10a9361f206dad8cfe83f",
          4799: "d8d0487f1438a7da66455033de155f70",
          4851: "aa598043117eefa5767625c09b7d5cc7",
          4861: "407e91bf560e039f1a4f52b8b27ecfab",
          4913: "d7a242c52503798e5e6ac01df184955d",
          5016: "45d00b39183f1c8378010b25d3b44a24",
          5018: "4efb876ad792873bcd272039d72f6eaa",
          5055: "36ab8b8b81c36bb1efb556ada35f98b4",
          5076: "a778b3b62a04596c4bd8b805f318b16e",
          5233: "d5534949df95be7f954d24032ba7a7b5",
          5259: "df58e0212b3a67a6f196a195e97daf9d",
          5389: "4c3c3241e2452361d33c640ef5985898",
          5473: "ef40e0b7e4b17edc0860acc7f9945d31",
          5495: "d4bdeac0e14a5fdde12550e6a556b499",
          5530: "0199ddb2ac4424e20158816655314e5b",
          5639: "eaace0f92187e1d5ab20f22d5e439ac3",
          5663: "683373f9aadc5e802a8f963a6510af36",
          5742: "4b48f028bf6a666e2fa27edc460dfa86",
          5830: "bd74ccd00ae49e542355b4884604f038",
          5832: "07046a00bb7932c431852bfea381ba58",
          5932: "1929e216d9279bf03b5ea61ee455ad20",
          6267: "112253c72ec6879e6f5de7ac6b721a77",
          6280: "45f4b625dd055365c2ee505a368770e5",
          6285: "d5fbb3d154fbcf8f6c95cb750445854b",
          6361: "11448603d2a36be2ddeaf19b4ad9e317",
          6664: "941cc4e53afa8827152148f1a797cafd",
          6879: "5d2d80f8600504866ab10e80d9b73907",
          6891: "7b783515ca5e22187fd80534c30be218",
          6997: "04378b28be39c889ab9d7c564ff440f4",
          7010: "57005cb47efbc3cdcd6337a820510414",
          7073: "0e5b1107c1f1ab5b57123cbfcb10d83d",
          7129: "e3aced5fd727943efe83e5ef467f1f59",
          7301: "1874793b74624f984ed9515aee4ed036",
          7436: "3e27cece007f5fc93f6e004192f9240d",
          7452: "6a8718b33be78c6eefc9c391d6c92a3c",
          7453: "96016fc69614f003bbfacbcf4f3aed0d",
          7731: "8bf88f5f41cc93ba030b989e659c8641",
          7808: "babb4330f0bb6b2cdfbc914982b8360b",
          7920: "ec6cec1a20b608d39eadaa26fd213496",
          7970: "e0e3d0d0e625442fb191cae7d0fdb8bf",
          8271: "00e9405ac3d06eb0906969285af84033",
          8272: "f1db3f5ff12b79e83bfa561ff2c54828",
          8391: "5c69c3f68036320e2740e9cd8402716f",
          8431: "2676aa317580c7fd94bedc07d64222e5",
          8517: "ec774186309070dc4962a7c09cc31028",
          8755: "8d9f98d015fa9b8cd90140b16a941c0d",
          8880: "af3af82450954b8a5b1509597fb16ef4",
          8970: "7e38dc71d27ae4632f827a20ba004805",
          9022: "ef498cc9bf54a88f47fbe4726760900d",
          9028: "be259b67d6673c8eab332b4316036ee6",
          9126: "c84dc22a4cda95891ac81c11f2d90002",
          9377: "f9b05052a10338241f484bae7b09ac28",
          9615: "f3b80d42ba76a60676c929d528cf7a05",
          9719: "3db953451f242e4291568c0f408ab848",
          9813: "b6beb0857c107d5f0f630b2db118c434",
          9936: "d631a19ca38317ccf969c03c55af188f",
          9990: "4194747e6eb5b97d9ada617f8e1856a7"
        } [e] + ".js", E.miniCssF = e => "css/" + {
          1030: "a2de55ecc45a6c72e39a13f1cfa094e7",
          2217: "d5d80fb65b4d279f563a59abb371d37e",
          4365: "e1ecfbd5d60b0822f094e505eee8adf4",
          4598: "d5d80fb65b4d279f563a59abb371d37e",
          5055: "98d2f7207c07838416399fe63c3fcbc4",
          8517: "ed91478872da8b5cdb423547324f283e"
        } [e] + ".css", E.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), E.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, d = "@rockstargames/modules-core-videoplayer:", E.l = (e, a, t, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== t)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var l = n[b];
                if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == d + t) {
                  c = l;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", E.nc && c.setAttribute("nonce", E.nc), c.setAttribute("data-webpack", d + t), c.src = e), r[e] = [a];
            var i = (a, t) => {
                c.onerror = c.onload = null, clearTimeout(s);
                var d = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach(e => e(t)), a) return a(t)
              },
              s = setTimeout(i.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = i.bind(null, c.onerror), c.onload = i.bind(null, c.onload), o && document.head.appendChild(c)
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
            a = {};
          E.I = (t, r) => {
            r || (r = []);
            var d = a[t];
            if (d || (d = a[t] = {}), !(r.indexOf(d) >= 0)) {
              if (r.push(d), e[t]) return e[t];
              E.o(E.S, t) || (E.S[t] = {});
              var f = E.S[t],
                c = "@rockstargames/modules-core-videoplayer",
                o = (e, a, t, r) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (d[a] = {
                    get: t,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              return "default" === t && (o("@gsap/react", "2.1.2", () => Promise.all([E.e(1127), E.e(1142), E.e(4154)]).then(() => () => E(44154))), o("@popperjs/core", "2.11.8", () => E.e(9813).then(() => () => E(19813))), o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([E.e(3004), E.e(1795), E.e(1127), E.e(1837)]).then(() => () => E(12841))), o("@rsgweb/modules-core-agegate", "0.0.0", () => Promise.all([E.e(1703), E.e(1127), E.e(3331), E.e(2199), E.e(2217)]).then(() => () => E(42217))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([E.e(7129), E.e(1254), E.e(1127), E.e(2909), E.e(181), E.e(336), E.e(3331), E.e(7301), E.e(4550)]).then(() => () => E(32169))), o("@rsgweb/utils", "0.0.0", () => Promise.all([E.e(3004), E.e(7129), E.e(7808), E.e(1127), E.e(2909), E.e(181), E.e(336), E.e(7301), E.e(811), E.e(637)]).then(() => () => E(60637))), o("clsx", "2.1.1", () => E.e(439).then(() => () => E(10439))), o("graphql", "16.13.2", () => E.e(7920).then(() => () => E(7920))), o("gsap", "3.12.5", () => E.e(9719).then(() => () => E(79719))), o("hammerjs", "2.0.8", () => E.e(7731).then(() => () => E(87731))), o("lodash", "4.18.1", () => E.e(5076).then(() => () => E(15076))), o("react-dom", "18.3.1", () => Promise.all([E.e(1098), E.e(1127)]).then(() => () => E(71098))), o("react-popper", "2.3.0", () => Promise.all([E.e(1127), E.e(8429), E.e(4041), E.e(2635)]).then(() => () => E(62635))), o("react-router-dom", "6.30.3", () => Promise.all([E.e(5389), E.e(1127), E.e(8429)]).then(() => () => E(15389))), o("react", "18.3.1", () => E.e(8431).then(() => () => E(48431))), o("uuid", "9.0.1", () => E.e(2657).then(() => () => E(62657)))), e[t] = n.length ? Promise.all(n).then(() => e[t] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          E.g.importScripts && (e = E.g.location + "");
          var a = E.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var t = a.getElementsByTagName("script");
            if (t.length)
              for (var r = t.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = t[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), E.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = t[1] ? a(t[1]) : [];
          return t[2] && (r.length++, r.push.apply(r, a(t[2]))), t[3] && (r.push([]), r.push.apply(r, a(t[3]))), r
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var t = 0;;) {
            if (t >= e.length) return t < a.length && "u" != (typeof a[t])[0];
            var r = e[t],
              d = (typeof r)[0];
            if (t >= a.length) return "u" == d;
            var c = a[t],
              o = (typeof c)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && r != c) return r < c;
            t++
          }
        }, o = e => {
          var a = e[0],
            t = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            t += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, d = 1; d < e.length; d++) r--, t += "u" == (typeof(c = e[d]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, c);
            return t
          }
          var f = [];
          for (d = 1; d < e.length; d++) {
            var c = e[d];
            f.push(0 === c ? "not(" + n() + ")" : 1 === c ? "(" + n() + " || " + n() + ")" : 2 === c ? f.pop() + " " + f.pop() : o(c))
          }
          return n();

          function n() {
            return f.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, n = (e, a) => {
          if (0 in e) {
            a = f(a);
            var t = e[0],
              r = t < 0;
            r && (t = -t - 1);
            for (var d = 0, c = 1, o = !0;; c++, d++) {
              var b, l, i = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (l = (typeof(b = a[d]))[0])) return !o || ("u" == i ? c > t && !r : "" == i != r);
              if ("u" == l) {
                if (!o || "u" != i) return !1
              } else if (o)
                if (i == l)
                  if (c <= t) {
                    if (b != e[c]) return !1
                  } else {
                    if (r ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != i && "n" != i) {
                if (r || c <= t) return !1;
                o = !1, c--
              } else {
                if (c <= t || l < i != r) return !1;
                o = !1
              } else "s" != i && "n" != i && (o = !1, c--)
            }
          }
          var s = [],
            u = s.pop.bind(s);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            s.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && E.o(e, a), l = e => (e.loaded = 1, e.get()), i = e => Object.keys(e).reduce((a, t) => (e[t].eager && (a[t] = e[t]), a), {}), s = (e, a, t) => {
          var r = t ? i(e[a]) : e[a];
          return Object.keys(r).reduce((e, a) => !e || !r[e].loaded && c(e, a) ? a : e, 0)
        }, u = (e, a, t, r) => "Unsatisfied version " + t + " from " + (t && e[a][t].from) + " of shared singleton module " + a + " (required " + o(r) + ")", p = e => {
          throw new Error(e)
        }, h = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, m = (e, a, t) => t ? t() : ((e, a) => p("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), g = (e => function(a, t, r, d, f) {
          var c = E.I(a);
          return c && c.then && !r ? c.then(e.bind(e, a, E.S[a], t, !1, d, f)) : e(a, E.S[a], t, r, d, f)
        })((e, a, t, r, d, f) => {
          if (!b(a, t)) return m(e, t, f);
          var c = s(a, t, r);
          return n(d, c) || h(u(a, t, c, d)), l(a[t][c])
        }), y = {}, v = {
          71127: () => g("default", "react", !1, [1, 18, 2, 0], () => E.e(8431).then(() => () => E(48431))),
          42909: () => g("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([E.e(3004), E.e(1795), E.e(4218)]).then(() => () => E(12841))),
          10181: () => g("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([E.e(5389), E.e(8429)]).then(() => () => E(15389))),
          10336: () => g("default", "lodash", !1, [1, 4, 17, 21], () => E.e(5076).then(() => () => E(15076))),
          13331: () => g("default", "@rsgweb/utils", !1, [0], () => Promise.all([E.e(3004), E.e(7129), E.e(7808), E.e(2909), E.e(181), E.e(336), E.e(7301), E.e(5495)]).then(() => () => E(60637))),
          69023: () => g("default", "uuid", !1, [1, 9, 0, 0], () => E.e(2657).then(() => () => E(62657))),
          31142: () => g("default", "gsap", !1, [0], () => E.e(9719).then(() => () => E(79719))),
          82199: () => g("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([E.e(7129), E.e(1254), E.e(2909), E.e(181), E.e(336), E.e(7301), E.e(2169)]).then(() => () => E(32169))),
          1521: () => g("default", "react-popper", !1, [1, 2, 3, 0], () => Promise.all([E.e(8429), E.e(4041), E.e(5016)]).then(() => () => E(62635))),
          1556: () => g("default", "clsx", !1, [1, 2, 1, 1], () => E.e(439).then(() => () => E(10439))),
          39054: () => g("default", "hammerjs", !1, [1, 2, 0, 8], () => E.e(7731).then(() => () => E(87731))),
          83791: () => g("default", "@gsap/react", !1, [0], () => E.e(1773).then(() => () => E(44154))),
          87613: () => g("default", "@rsgweb/modules-core-agegate", !1, [0], () => Promise.all([E.e(1703), E.e(4598)]).then(() => () => E(42217))),
          18429: () => g("default", "react-dom", !1, [1, 18, 2, 0], () => E.e(1098).then(() => () => E(71098))),
          811: () => g("default", "graphql", !1, [1, 16, 9, 0], () => E.e(7920).then(() => () => E(7920))),
          24041: () => g("default", "@popperjs/core", !1, [1, 2, 11, 7], () => E.e(9813).then(() => () => E(19813)))
        }, w = {
          181: [10181],
          336: [10336],
          811: [811],
          1127: [71127],
          1142: [31142],
          2199: [82199],
          2909: [42909],
          3331: [13331],
          4041: [24041],
          5495: [811],
          8429: [18429],
          8517: [1521, 1556, 39054, 83791, 87613],
          9023: [69023]
        }, _ = {}, E.f.consumes = (e, a) => {
          E.o(w, e) && w[e].forEach(e => {
            if (E.o(y, e)) return a.push(y[e]);
            if (!_[e]) {
              var t = a => {
                y[e] = 0, E.m[e] = t => {
                  delete E.c[e], t.exports = a()
                }
              };
              _[e] = !0;
              var r = a => {
                delete y[e], E.m[e] = t => {
                  throw delete E.c[e], a
                }
              };
              try {
                var d = v[e]();
                d.then ? a.push(y[e] = d.then(t).catch(r)) : t(d)
              } catch (e) {
                r(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            E.f.miniCss = (a, t) => {
              e[a] ? t.push(e[a]) : 0 !== e[a] && {
                1030: 1,
                2217: 1,
                4365: 1,
                4598: 1,
                5055: 1,
                8517: 1
              } [a] && t.push(e[a] = (e => new Promise((a, t) => {
                var r = E.miniCssF(e),
                  d = E.p + r;
                if (((e, a) => {
                    for (var t = document.getElementsByTagName("link"), r = 0; r < t.length; r++) {
                      var d = (c = t[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((d = (c = f[r]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(r, d)) return a();
                ((e, a, t, r, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", E.nc && (f.nonce = E.nc), f.onerror = f.onload = t => {
                    if (f.onerror = f.onload = null, "load" === t.type) r();
                    else {
                      var c = t && t.type,
                        o = t && t.target && t.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), d(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, t)
              }))(a).then(() => {
                e[a] = 0
              }, t => {
                throw delete e[a], t
              }))
            }
          }
        })(), (() => {
          var e = {
            7614: 0
          };
          E.f.j = (a, t) => {
            var r = E.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) t.push(r[2]);
              else if (/^(1(127|142|81)|33(31|6)|(219|290|842)9|4041|811|9023)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise((t, d) => r = e[a] = [t, d]);
              t.push(r[2] = d);
              var f = E.p + E.u(a),
                c = new Error;
              E.l(f, t => {
                if (E.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var d = t && ("load" === t.type ? "missing" : t.type),
                    f = t && t.target && t.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, t) => {
              var r, d, [f, c, o] = t,
                n = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in c) E.o(c, r) && (E.m[r] = c[r]);
                o && o(E)
              }
              for (a && a(t); n < f.length; n++) d = f[n], E.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            t = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          t.forEach(a.bind(null, 0)), t.push = a.bind(null, t.push.bind(t))
        })(), E(93032), E(58157)
      })())
    }
  }
});