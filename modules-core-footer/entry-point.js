try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7a60fd1a-2c63-4fa0-8a73-d663782c7d93", e._sentryDebugIdIdentifier = "sentry-dbid-7a60fd1a-2c63-4fa0-8a73-d663782c7d93")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, f, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, k, _, E, P, S, j = {
            17411: (e, a, r) => {
              const t = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
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
            93032: (e, a, r) => {
              r(28419)
            },
            98478: (e, a, r) => {
              "use strict";
              var t = {
                  "./root": () => Promise.all([r.e(9889), r.e(3736), r.e(1127), r.e(9623), r.e(1788), r.e(5966), r.e(7209), r.e(2841)]).then((() => () => r(32841)))
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
            }
          },
          O = {};

        function T(e) {
          var a = O[e];
          if (void 0 !== a) return a.exports;
          var r = O[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return j[e].call(r.exports, r, r.exports, T), r.loaded = !0, r.exports
        }
        return T.m = j, T.c = O, T.y = a, T.amdO = {}, T.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return T.d(a, {
            a
          }), a
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          T.r(d);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & t && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach((e => f[e] = () => a[e]));
          return f.default = () => a, T.d(d, f), d
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce(((a, r) => (T.f[r](e, a), a)), [])), T.u = e => "js/" + {
          68: "787c12505e3894f7ffa96db428c6a0c0",
          131: "d73338dbcb1c1b64dcf36d598c4933ff",
          173: "56908c0db4f197f52fbba897d0f35707",
          278: "11170083e72ed77ff9b4113e1f299d32",
          299: "5b71ec830427526e52ff17206f265771",
          314: "3aff681bc5978d5b25a1e2e236d53587",
          450: "2a85d5ba41897267d0a4b8c90001e0c3",
          662: "81de1b06cf657ec1021e88c07e1aa263",
          824: "9e40be7556900374239c51ae536ab5be",
          907: "36c39e81bbc5b2e7a89d2b7ea2a1a7a6",
          1054: "fa1405f763ec94a6699f6c94ce4dbb41",
          1098: "a8fdb667630798ca32ba8a29fc3efcfa",
          1242: "8e07fd2bca1364ae1f02280bf4264fe1",
          1295: "04302be1048389644a50c9f00b8581b2",
          1758: "294b055b558089dd12cb28777c72ce06",
          1822: "7f5860c490d11d375f654b8664db68c5",
          1868: "5d8b4692906e520e01edf7682e70c6cf",
          2148: "832b01998238bc0d477d2786deba0c60",
          2156: "8d7bc74957dd92c04d87c3e7a46bc57e",
          2169: "949c7caca504a40cfff9ff26ecaca212",
          2171: "2f15d362868d49f7637ebc97640d7c50",
          2221: "c2191d5a1c766452f3cdf985be9bb69c",
          2234: "e8d0d80a413cdf477a5b682c0389351b",
          2243: "b62d3a09ef961bfa4efb6b1ff20c1c42",
          2306: "623df505ff351a1d1da9020f12faea50",
          2347: "4b4c195bb1921e538ac1d21441201eb8",
          2365: "db00a892e3093ce43503ce10de60ec5a",
          2398: "40f0daf08da0399bdc214ebaa05699cd",
          2466: "b4223c2d69eb70a055a981fdde57b52f",
          2492: "43a7e364de8fd22756872c4507f3f9fb",
          2642: "55946cf27cb118f3f9caa2951ebf4a52",
          2678: "827af50c89b7a99efd98b8cc17a4107f",
          2841: "8994c2e077cfb335e4a9500db5d37e56",
          2864: "1278beb5c9db445e37fba76da72cdeb4",
          3034: "2c69f1380acf41382b1e2a04768ef156",
          3197: "e7e646bea3d560ac267a413cf1a392ab",
          3343: "d1a25df00d1aed6b7c01f3a97b827e44",
          3370: "e447cead732992b4167f6e8e5e6f2fdc",
          3421: "bdaa9888ad106687eeb3efbe336ddc2a",
          3475: "121073b46309fe2c0d23f4060aa136de",
          3486: "e686f992c9f78daf337457911ee65f1d",
          3697: "26342a28eba1710fe2bbc69c746bd0c2",
          3736: "fcb237580e9e092047aa23640fc6bd9f",
          3885: "5e5bc795ca7a283fb52b61b7c0c446c0",
          3896: "c6dc701cb99866bd6263c71168a0c084",
          3941: "eaf40c66f959d1f44a79787af9fa205d",
          4011: "c24943f5f3eced7898f47f6dbdf8493b",
          4528: "536f2f42046b51b0a73a8d5258e2413e",
          4578: "1647e076f5404f9d3816d844339ba125",
          4621: "308a1b5a2226f9768b9b4b009e4e20bc",
          4700: "cb719a4f31935de1d1240d312f5814a6",
          4710: "085f63f2ab6973712a59890fc1474547",
          4731: "0dc5a7e9235b1dc75775f39d4a0a4698",
          4799: "ef06ba2945abfe68356b0d5d03316b9d",
          4851: "24edffeb26b94671f7b27ccb5f242907",
          4861: "3d83cad796ae80dd4c6dd949ff8f4172",
          4913: "55883875e579e3432e6b338dd1bcb315",
          5018: "8dc94c89a38c9ba2af002f5b0fedfba0",
          5233: "d720284860d89a44d83d152a69994927",
          5259: "b7658ac4420f321885e1f4d1d9e015fa",
          5265: "6bc6a1bf862ffd60e9ae1b5e1ba3df88",
          5389: "abb3f23b24f448914edf8693251eba40",
          5415: "746765a805909e75c62831c7a3286029",
          5530: "ce6655194130245ac716022dc6757827",
          5639: "275111837d3b4aa30f5f7043ca0c1628",
          5663: "1fac27d46deba745d029539e1b80ae91",
          5742: "3db4ae36c75e11bef3fbfd23a67dc5f3",
          5802: "aca2a38f599d8685bd316e1585dce637",
          5830: "1ad8ed6d9c8877bc867ef6666e995060",
          5832: "633b514e47757d9930c65e19753d2251",
          5859: "51daf2675e552085a75ba59214400ede",
          5941: "f0879a9d5dbb81715c3ad5fe67987fda",
          6200: "87aa1b9a515d6626073e004ef06fc444",
          6267: "d6c960ccb3305f406b24dd63f07e3e56",
          6280: "4c6b71374b8b4e26bd2adbcb97bdf087",
          6285: "b460e50b04eb8febaf8e01f380c00ac3",
          6361: "5b5ff26cea8808a50b401a349a37fbf9",
          6471: "b88ae925ab3f9c5c595995f56c84b6f8",
          6664: "610d86199bbb412d9d719a24a6c28157",
          6879: "2b8526b5920fc5c471efb4b04fe49244",
          6891: "38892ccdcc6c1898290fa34a6c147ca4",
          6997: "c433c3ab0b03daf6c231440ba96313cc",
          7010: "609fd0e4bfbc3d4d28304923db0b3143",
          7073: "68f5d6a27dcdf2a80cbb21d419f09677",
          7209: "6e58485933997ac88dea96f38c7ecb1a",
          7407: "0c85b6b55a790d916902ec1eaab05037",
          7436: "4e0d4b8147518be2f16369f5dde78161",
          7452: "002199d2de6340515845702d6a238a54",
          7453: "937ced8e0006c4e17df27e6ce64715ae",
          7970: "daaa2cea38e773793bb70a9833ba66cb",
          8068: "2e3d978fc23ca444976fd6110c129a79",
          8113: "29aee7d448b3324062c1b47cd34fe7d9",
          8240: "f840948214b85e1b81d26f687adffa8e",
          8272: "5ed11ff4c94ce4af543886bb085b3e19",
          8325: "7d350cde97018e86b8ca7e396051c3f2",
          8364: "31c421d76294e6fa56859a28bd87b9ba",
          8391: "0c090357937b41bd58e8dba5f6b3b00c",
          8431: "34cf8dcbccaff59439a9b08472f85775",
          8755: "4abdc01af682bc2a332352ba6858c8ba",
          8845: "cf2944e474366f1ed58d789b73f57166",
          8880: "9af7acece9376283ed285993cf64b378",
          8938: "6464bf917b815198d46b1dc3ee2e08ee",
          8970: "fbaaccf90dc3b8f28aea6980ab9b52f4",
          9022: "7006d4c86032376972c2a9038b31273c",
          9028: "f5c12e24705bfb768014d45eaeabc4e7",
          9126: "5993a36f8db4f6e2fcc1e873d53a1f0e",
          9377: "fa89c9d984e152008baf71cd15ad1388",
          9512: "ed26c85d059c58398f97bdbcfe675824",
          9587: "c9509fa3f1c5b0910f6c9ababd2d5577",
          9615: "7cd1f7a60227b0cecb8ef623b6d93c58",
          9757: "1dbd2728575e77192480e9ca13e35f26",
          9760: "664866e4417b6baffb0b21331a320d8e",
          9889: "d35f5ea312093e147ccfdb198f9bdf5b",
          9936: "6cd042e68f327238fbd86c48d0fda122",
          9990: "cab069bbe7b6577b23dcc622c1ab051b"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          1295: "1a88ebe83317c428e6099a990b18b0db",
          2841: "9b88edaa0acd9a0436ef01983f8ed6b0",
          3736: "4075475bb47938c3578a77cb580d147d",
          7209: "f8c1968ff675df159b6c305e0f588a38",
          8364: "195ef67b4251623ac7a868628249cdfc"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-footer:", T.l = (e, a, r, f) => {
          if (t[e]) t[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", d + r), c.src = e), t[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var d = t[e];
                if (delete t[e], c.parentNode && c.parentNode.removeChild(c), d && d.forEach((e => e(r))), a) return a(r)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, T.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, T.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          T.S = {};
          var e = {},
            a = {};
          T.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var f = T.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, t) => {
                  var d = f[e] = f[e] || {},
                    o = d[a];
                  (!o || !o.loaded && (!t != !o.eager ? t : c > o.from)) && (d[a] = {
                    get: r,
                    from: c,
                    eager: !!t
                  })
                },
                n = [];
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then((() => () => T(12841))))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", (() => Promise.all([T.e(6200), T.e(2492), T.e(9889), T.e(1127), T.e(2148), T.e(8429), T.e(9623), T.e(1788), T.e(5966), T.e(1295), T.e(7209)]).then((() => () => T(68786))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(2148), T.e(9623), T.e(5966), T.e(8113)]).then((() => () => T(32169))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(2148), T.e(9623), T.e(1788), T.e(5941)]).then((() => () => T(89757))))), o("react-dom", "18.3.1", (() => Promise.all([T.e(1098), T.e(1127)]).then((() => () => T(71098))))), o("react-dom", "19.1.0", (() => Promise.all([T.e(1127), T.e(3421)]).then((() => () => T(83421))))), o("react-router-dom", "6.30.0", (() => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then((() => () => T(15389))))), o("react", "18.3.1", (() => T.e(8431).then((() => () => T(48431)))));
                  break;
                case "footer":
                  o("@foundry/react", "5.9.0", (() => Promise.all([T.e(2492), T.e(9512), T.e(9889), T.e(3736), T.e(8364), T.e(1127), T.e(8429), T.e(8628)]).then((() => () => T(79588)))))
              }
              return e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          T.g.importScripts && (e = T.g.location + "");
          var a = T.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), f = e => {
          var a = e => e.split(".").map((e => +e == e ? +e : e)),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            t = r[1] ? a(r[1]) : [];
          return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var t = e[r],
              d = (typeof t)[0];
            if (r >= a.length) return "u" == d;
            var c = a[r],
              o = (typeof c)[0];
            if (d != o) return "o" == d && "n" == o || "s" == o || "u" == d;
            if ("o" != d && "u" != d && t != c) return t < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var t = 1, d = 1; d < e.length; d++) t--, r += "u" == (typeof(c = e[d]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, c);
            return r
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
            var r = e[0],
              t = r < 0;
            t && (r = -r - 1);
            for (var d = 0, c = 1, o = !0;; c++, d++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (d >= a.length || "o" == (i = (typeof(b = a[d]))[0])) return !o || ("u" == s ? c > r && !t : "" == s != t);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (t ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (t || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != t) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (d = 1; d < e.length; d++) {
            var p = e[d];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}), l = (e, a, r, t) => {
          var d = t ? s(e[a]) : e[a];
          return (a = Object.keys(d).reduce(((e, a) => !n(r, a) || e && !c(e, a) ? e : a), 0)) && d[a]
        }, u = (e, a, r) => {
          var t = r ? s(e[a]) : e[a];
          return Object.keys(t).reduce(((e, a) => !e || !t[e].loaded && c(e, a) ? a : e), 0)
        }, p = (e, a, r, t) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(t) + ")", h = (e, a, r, t, d) => {
          var f = e[r];
          return "No satisfying version (" + o(t) + ")" + (d ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, t, d, f) {
          var c = T.I(a);
          return c && c.then && !t ? c.then(e.bind(e, a, T.S[a], r, !1, d, f)) : e(a, T.S[a], r, t, d, f)
        })(((e, a, r, t, d, f) => {
          if (!b(a, r)) return v(e, r, f);
          var c = l(a, r, d, t);
          return c ? i(c) : f ? f() : void m(h(a, e, r, d, t))
        })), k = y(((e, a, r, t, d, f) => {
          if (!b(a, r)) return v(e, r, f);
          var c = u(a, r, t);
          return n(d, c) || g(p(a, r, c, d)), i(a[r][c])
        })), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], (() => T.e(8431).then((() => () => T(48431))))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([T.e(5389), T.e(8429)]).then((() => () => T(15389))))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then((() => () => T(12841))))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(450), T.e(2148), T.e(1788), T.e(9757)]).then((() => () => T(89757))))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(8068), T.e(2148), T.e(2169)]).then((() => () => T(32169))))),
          3505: () => w("footer", "@foundry/react", !1, [4, 5, 9, 0], (() => Promise.all([T.e(2492), T.e(9512), T.e(3736), T.e(8364), T.e(8429), T.e(8628)]).then((() => () => T(79588))))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], (() => Promise.all([T.e(6200), T.e(2492), T.e(2148), T.e(8429), T.e(1295)]).then((() => () => T(68786))))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(1098).then((() => () => T(71098))))),
          78628: () => k("default", "react-dom", !1, [1, 18, 2, 0], (() => T.e(5802).then((() => () => T(83421)))))
        }, P = {
          1127: [71127],
          1788: [81788],
          2841: [20270],
          5966: [95966],
          7209: [2918, 3505],
          8429: [18429],
          8628: [78628],
          9623: [9623]
        }, S = {}, T.f.consumes = (e, a) => {
          T.o(P, e) && P[e].forEach((e => {
            if (T.o(_, e)) return a.push(_[e]);
            if (!S[e]) {
              var r = a => {
                _[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              S[e] = !0;
              var t = a => {
                delete _[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var d = E[e]();
                d.then ? a.push(_[e] = d.then(r).catch(t)) : r(d)
              } catch (e) {
                t(e)
              }
            }
          }))
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1295: 1,
                2841: 1,
                3736: 1,
                7209: 1,
                8364: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = T.miniCssF(e),
                  d = T.p + t;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), t = 0; t < r.length; t++) {
                      var d = (c = r[t]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (d === e || d === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (t = 0; t < f.length; t++) {
                      var c;
                      if ((d = (c = f[t]).getAttribute("data-href")) === e || d === a) return c
                    }
                  })(t, d)) return a();
                ((e, a, r, t, d) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", T.nc && (f.nonce = T.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) t();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), d(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, d, 0, a, r)
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
          T.f.j = (a, r) => {
            var t = T.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(1127|1788|5966|8429|8628|9623)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var f = T.p + T.u(a),
                c = new Error;
              T.l(f, (r => {
                if (T.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + d + ": " + f + ")", c.name = "ChunkLoadError", c.type = d, c.request = f, t[1](c)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, [f, c, o] = r,
                n = 0;
              if (f.some((a => 0 !== e[a]))) {
                for (t in c) T.o(c, t) && (T.m[t] = c[t]);
                o && o(T)
              }
              for (a && a(r); n < f.length; n++) d = f[n], T.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
}));