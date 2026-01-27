try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "9884acfb-c3c8-4de8-bd82-8b66cef6fb62", e._sentryDebugIdIdentifier = "sentry-dbid-9884acfb-c3c8-4de8-bd82-8b66cef6fb62")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, System.register([], function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, f, t, d, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, k, _, E, S, P, j = {
            17411: (e, a, r) => {
              const f = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = f(r.y.meta.url, e)
              }
            },
            28419: (e, a, r) => {
              (0, r(17411).w)(1)
            },
            77027: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var f = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, d = f.length; t !== a && d >= 0;) "/" === f[--d] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = f.slice(0, d + 1);
                return r.protocol + "//" + r.host + c
              };
              Number.isInteger
            },
            93032: (e, a, r) => {
              r(28419)
            },
            98478: (e, a, r) => {
              "use strict";
              var f = {
                  "./root": () => Promise.all([r.e(78), r.e(1479), r.e(1127), r.e(8429), r.e(9623), r.e(1788), r.e(5966), r.e(2924), r.e(2841)]).then(() => () => r(32841))
                },
                t = (e, a) => (r.R = a, a = r.o(f, e) ? f[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
                d = (e, a) => {
                  if (r.S) {
                    var f = "default",
                      t = r.S[f];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[f] = e, r.I(f, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => d
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
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, f) {
          if (1 & f && (a = this(a)), 8 & f) return a;
          if ("object" == typeof a && a) {
            if (4 & f && a.__esModule) return a;
            if (16 & f && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          T.r(t);
          var d = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & f && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => d[e] = () => a[e]);
          return d.default = () => a, T.d(t, d), t
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce((a, r) => (T.f[r](e, a), a), [])), T.u = e => "js/" + {
          68: "f774897ea69fd1226b0ae34da086f660",
          78: "c61413f81038501ec75e9cbdf25de041",
          131: "985f8db3a9dafd3595b64f7f4b834204",
          173: "57f5fd2c8afb17d3a5dd5bf6ff47d1c8",
          278: "5d4a57d31aa499e1f369c4e5a8326a1d",
          299: "8d3d43412978b7f5a7ce3ab68fe8eab7",
          314: "d83b528c46fbddeb43d423ccca3b426b",
          450: "c711f77f04a3602751bf7c25abb012bb",
          662: "ec63497800be6c8072f115ee12d83eae",
          824: "1145c87338961b2c0b357cb356aa718a",
          907: "8ecca9fa139adfcb8750c55274f2d01c",
          1054: "78293bb1ea3549554a0bd8c7f0a9246e",
          1098: "68941eace06565d6831a5e000a44fa2e",
          1242: "29acbf38e3c1e9cf2a0b2fa85011fce2",
          1479: "6ea151888bb97c41d5eac5aaea010506",
          1665: "7fc85dec492cf1456bc2fd0d88451a3d",
          1758: "622428fe494ccbc429c5a148bfe2bf54",
          1822: "0cd6fc20247e8eabde2544183629e3f3",
          1868: "5a4b918914f8d639a5f6a952ada55db9",
          2156: "f5f71898d7f407d3f37b841d044cb788",
          2169: "486bcb29b598d255febb2bbb25b16376",
          2171: "366343825c1c157f538c3e63607040fa",
          2221: "c8fb142f21b829dd9dbc68b0f8abfc22",
          2234: "998b09290f718da35998d830cbba296f",
          2243: "ad024b10a249fe700e47699695098f3c",
          2306: "b8a18480d6883b760e1d0c483ef7cb0a",
          2347: "ccefabe27c86423ee123e23e80b27f23",
          2365: "ace27382b3802a354497512f260dfcf8",
          2398: "b3ff5c6036c07896c074fc863c9caeb3",
          2466: "ee3ad0bad3c580d879f8e7c227b520ca",
          2642: "9695d33cb40c18719ae1b80a258c136a",
          2678: "602e2b89476f37a3c5db6215ee2fd594",
          2841: "28f99d629013f8d6cc0435992a65d6db",
          2864: "47713a3c4f9cd69a271022267d354291",
          2924: "a4da7dc790750b41cdeec78a47294e37",
          3034: "01570e9ee500524c9ea46e5ce4fcc536",
          3197: "05d0a76d63ee65cbc88128f0d963a963",
          3343: "e2edb9416dda9c96bf28792c5a8221cd",
          3370: "e9dd02fa9303c6f053f2cf9dbfebf9c6",
          3475: "d737171b535b0239c8ceaa1e349efeb3",
          3486: "1ef1db25eb284554527f36ac8cb405b6",
          3563: "8ef8b25b9bdc8199b6aeb10da2f35fa9",
          3697: "b6d7c3674a93cf52b5ee26d6d8bee251",
          3885: "6233924bdbd4dc4cf1e0a5f7030384db",
          3896: "0c0223c76a318cdb188c799fff4173a2",
          3941: "f1e28325a5800f178cef10341e694f0b",
          4011: "d71cdf73b794ee3569252f0c77ba6835",
          4528: "0d238c7c5c847a844dbe0af4236fcd33",
          4578: "7bc9767b07fc4d37ebe96bac85fee1d0",
          4621: "8d57a2de4df0196cd3ff91ada4ca3c9e",
          4700: "61bc2f0b3a9b45c941526ac4be2c7556",
          4710: "8b09a543b9d8edd67bc3a3979d6837d6",
          4731: "eafb443b6a5456e7bfb9fda4bf2dc1ca",
          4799: "df4fb3c468ea73a9f9caf60c1e6368b3",
          4851: "08a4947f1815f4acfe412d55ab04e4c5",
          4861: "a704eda1632727790be50c71d8b95d38",
          4913: "95c16d8e11db95230180c2485b6a6bfc",
          5018: "43c7a9649ab764d17fe0abf4e555b705",
          5233: "63d008c4a7bf5e4f9ee3c1eddde5bb53",
          5259: "bb93d314522646e3f4a5158004e78c55",
          5265: "0c9d89e963ddda3d6790bc0349b921d8",
          5389: "6e4f8f5ed1902d2a29eca27e1a73ce4c",
          5415: "a2a8dfec939902a374baf8d6557cdb4e",
          5530: "d5dc6b651f5cd1dbdb24e1465cc863b2",
          5639: "b3f4f8a7a7558c68d4053d7cc000de42",
          5663: "f36d523b5c9d6aa91d23de9953ec9b49",
          5742: "875f43d12797f98c7dac98f13bc72c35",
          5830: "87354342e2b440bb92d5e04b6fe27042",
          5832: "b0debb221106dde16e55d82eb42d15b7",
          5859: "3f716ad8a8573ecfcbbb76b2eb75e09c",
          5941: "43ca0ae65710076cf0291951a9dab0ef",
          6088: "f81007f9de8a4290abe07d595cd7b471",
          6200: "48ccf2d04694aaea06c6f36c26b45be1",
          6267: "121ebfd3b5bee2ed583733b056384790",
          6280: "4a42948fac7e34b82613a415d23a7a90",
          6285: "1acabfcd63aa99d91cc717a13f84fc0d",
          6361: "44ad8b61510d902e4375e942c055aa67",
          6471: "acb46db926b49148278157116f2477a5",
          6664: "ab67322c71e5c520d378b5a71ba6d75e",
          6805: "94c0b7edbf2b367a9177e724d3f55082",
          6879: "385502e05865bcd0f5e2854d3fdc7ca4",
          6891: "22febe1f26631400512da2dd4b4a70c9",
          6997: "f7ea70cab40c39e2cae549b4a672feb2",
          7010: "07783f471f3f21d63caf9327aa7cf8df",
          7073: "4315d13e3641f41d9694fcf6755755b3",
          7407: "7dc1f5c53d9f79a5411f4cca40bbfb5e",
          7436: "c0d2d0731189924c912a174e3b39dfb4",
          7452: "67e4481aa09d0b335b725bc288ba723d",
          7453: "b55807df1cd48d49047147916b566624",
          7970: "3a087e81a5f2a1f2a80e4a6b156824cb",
          8068: "7b6c85b4ac89b44ca909f3712588b1ec",
          8113: "5d663492eb6776a0bac376726083e23a",
          8240: "42dd9a7fb5300ce7e8675079c42cbbdd",
          8272: "c11e9775efc94be846771759609f4983",
          8291: "3a936b8cc1c59c2dc561abd844128b9f",
          8325: "8f505a7fcee8f7e370437b804cce5e1e",
          8391: "e4c81c8c58eb45c91e17cd320a071f10",
          8431: "5e201e430ea23ea356a73de07b1b9553",
          8755: "b6f285a782b7b0d8c7a50303bd051e77",
          8845: "e5a8c9415ac0a4963fb0eee91b305ec3",
          8880: "591c8fd0e1607cd1ba74e11b1e55a5d0",
          8938: "e56d63d07cd65363a8a5daa09d49eb29",
          8970: "4e4769573806a75bdc0c4044f8ff52aa",
          9022: "e958cf1ace0be44ae4d6ae86bc60180c",
          9028: "d5252c3df1162a5bd6e7bae6ba75a7e8",
          9126: "3eb995e9d9e7d831665715967416d581",
          9377: "a8daa43a4f2fe2b98d1104057a0dfc91",
          9512: "acadad91cb4a5eb1c47c6a56273a595f",
          9587: "d2d510b9fb63fd89d8eb59368023f11c",
          9615: "508631bc6aafca0248abfa8eca6f2b57",
          9757: "1614e8357ff4670c607b537556408b36",
          9760: "ba9443a42daf56e6f0ec736d46f421a8",
          9936: "1e65e28c1f28e639106d501ade9f2893",
          9990: "e256831f377a15f2f4b2b9a8049ef793"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          78: "f23692dc02c7d751cd6d5f1cfbe6dfee",
          2841: "f5e13731cc7fd6278d56aaf45699d2d3",
          2924: "f8c1968ff675df159b6c305e0f588a38",
          3563: "cc22dc60f76a2ed6735c907561683650",
          8291: "aa16ef1f501707468c13c1c95b489f3b"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), f = {}, t = "@rockstargames/modules-core-footer:", T.l = (e, a, r, d) => {
          if (f[e]) f[e].push(a);
          else {
            var c, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + r) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", t + r), c.src = e), f[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var t = f[e];
                if (delete f[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(r)), a) return a(r)
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
          T.I = (r, f) => {
            f || (f = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(f.indexOf(t) >= 0)) {
              if (f.push(t), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var d = T.S[r],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, r, f) => {
                  var t = d[e] = d[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!f != !o.eager ? f : c > o.from)) && (t[a] = {
                    get: r,
                    from: c,
                    eager: !!f
                  })
                },
                n = [];
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "1.0.0", () => Promise.all([T.e(9512), T.e(9587), T.e(1127), T.e(8240)]).then(() => () => T(12841))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(6200), T.e(1665), T.e(1479), T.e(6805), T.e(1127), T.e(6088), T.e(8429), T.e(9623), T.e(1788), T.e(5966), T.e(8291), T.e(2924)]).then(() => () => T(13262))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(6200), T.e(8068), T.e(1127), T.e(6088), T.e(9623), T.e(5966), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "1.0.0", () => Promise.all([T.e(6200), T.e(450), T.e(1127), T.e(6088), T.e(9623), T.e(1788), T.e(5941)]).then(() => () => T(89757))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-router-dom", "6.30.1", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.13.1", () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(1479), T.e(3563), T.e(1127), T.e(8429)]).then(() => () => T(23827)))
              }
              return e[r] = n.length ? Promise.all(n).then(() => e[r] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          T.g.importScripts && (e = T.g.location + "");
          var a = T.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var f = r.length - 1; f > -1 && (!e || !/^http(s?):/.test(e));) e = r[f--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), d = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            f = r[1] ? a(r[1]) : [];
          return r[2] && (f.length++, f.push.apply(f, a(r[2]))), r[3] && (f.push([]), f.push.apply(f, a(r[3]))), f
        }, c = (e, a) => {
          e = d(e), a = d(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var f = e[r],
              t = (typeof f)[0];
            if (r >= a.length) return "u" == t;
            var c = a[r],
              o = (typeof c)[0];
            if (t != o) return "o" == t && "n" == o || "s" == o || "u" == t;
            if ("o" != t && "u" != t && f != c) return f < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var f = 1, t = 1; t < e.length; t++) f--, r += "u" == (typeof(c = e[t]))[0] ? "-" : (f > 0 ? "." : "") + (f = 2, c);
            return r
          }
          var d = [];
          for (t = 1; t < e.length; t++) {
            var c = e[t];
            d.push(0 === c ? "not(" + n() + ")" : 1 === c ? "(" + n() + " || " + n() + ")" : 2 === c ? d.pop() + " " + d.pop() : o(c))
          }
          return n();

          function n() {
            return d.pop().replace(/^\((.+)\)$/, "$1")
          }
        }, n = (e, a) => {
          if (0 in e) {
            a = d(a);
            var r = e[0],
              f = r < 0;
            f && (r = -r - 1);
            for (var t = 0, c = 1, o = !0;; c++, t++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (t >= a.length || "o" == (i = (typeof(b = a[t]))[0])) return !o || ("u" == s ? c > r && !f : "" == s != f);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (f ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (f || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != f) return !1;
                o = !1
              } else "s" != s && "n" != s && (o = !1, c--)
            }
          }
          var l = [],
            u = l.pop.bind(l);
          for (t = 1; t < e.length; t++) {
            var p = e[t];
            l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? n(p, a) : !u())
          }
          return !!u()
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, f) => {
          var t = f ? s(e[a]) : e[a];
          return (a = Object.keys(t).reduce((e, a) => !n(r, a) || e && !c(e, a) ? e : a, 0)) && t[a]
        }, u = (e, a, r) => {
          var f = r ? s(e[a]) : e[a];
          return Object.keys(f).reduce((e, a) => !e || !f[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, r, f) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(f) + ")", h = (e, a, r, f, t) => {
          var d = e[r];
          return "No satisfying version (" + o(f) + ")" + (t ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(d).map(e => e + " from " + d[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, f, t, d) {
          var c = T.I(a);
          return c && c.then && !f ? c.then(e.bind(e, a, T.S[a], r, !1, t, d)) : e(a, T.S[a], r, f, t, d)
        })((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = l(a, r, t, f);
          return c ? i(c) : d ? d() : void m(h(a, e, r, t, f))
        }), k = y((e, a, r, f, t, d) => {
          if (!b(a, r)) return v(e, r, d);
          var c = u(a, r, f);
          return n(t, c) || g(p(a, r, c, t)), i(a[r][c])
        }), _ = {}, E = {
          71127: () => k("default", "react", !1, [1, 18, 2, 0], () => T.e(8431).then(() => () => T(48431))),
          18429: () => k("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098))),
          9623: () => w("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          81788: () => w("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], () => Promise.all([T.e(9512), T.e(9587), T.e(5859)]).then(() => () => T(12841))),
          95966: () => w("default", "@rsgweb/utils", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(450), T.e(6088), T.e(1788), T.e(9757)]).then(() => () => T(89757))),
          2918: () => w("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(8068), T.e(6088), T.e(2169)]).then(() => () => T(32169))),
          21994: () => w("footer", "@foundry/react", !1, [1, 5, 13, 1], () => Promise.all([T.e(1665), T.e(9512), T.e(78), T.e(3563)]).then(() => () => T(23827))),
          20270: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [1, "workspace:^"], () => Promise.all([T.e(6200), T.e(1665), T.e(6805), T.e(6088), T.e(8291)]).then(() => () => T(13262)))
        }, S = {
          1127: [71127],
          1788: [81788],
          2841: [20270],
          2924: [2918, 21994],
          5966: [95966],
          8429: [18429],
          9623: [9623]
        }, P = {}, T.f.consumes = (e, a) => {
          T.o(S, e) && S[e].forEach(e => {
            if (T.o(_, e)) return a.push(_[e]);
            if (!P[e]) {
              var r = a => {
                _[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              P[e] = !0;
              var f = a => {
                delete _[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var t = E[e]();
                t.then ? a.push(_[e] = t.then(r).catch(f)) : r(t)
              } catch (e) {
                f(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            T.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                78: 1,
                2841: 1,
                2924: 1,
                3563: 1,
                8291: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var f = T.miniCssF(e),
                  t = T.p + f;
                if (((e, a) => {
                    for (var r = document.getElementsByTagName("link"), f = 0; f < r.length; f++) {
                      var t = (c = r[f]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var d = document.getElementsByTagName("style");
                    for (f = 0; f < d.length; f++) {
                      var c;
                      if ((t = (c = d[f]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(f, t)) return a();
                ((e, a, r, f, t) => {
                  var d = document.createElement("link");
                  d.rel = "stylesheet", d.type = "text/css", T.nc && (d.nonce = T.nc), d.onerror = d.onload = r => {
                    if (d.onerror = d.onload = null, "load" === r.type) f();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, d.parentNode && d.parentNode.removeChild(d), t(n)
                    }
                  }, d.href = a, document.head.appendChild(d)
                })(e, t, 0, a, r)
              }))(a).then(() => {
                e[a] = 0
              }, r => {
                throw delete e[a], r
              }))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          T.f.j = (a, r) => {
            var f = T.o(e, a) ? e[a] : void 0;
            if (0 !== f)
              if (f) r.push(f[2]);
              else if (/^(1127|1788|5966|8429|9623)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((r, t) => f = e[a] = [r, t]);
              r.push(f[2] = t);
              var d = T.p + T.u(a),
                c = new Error;
              T.l(d, r => {
                if (T.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    d = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + d + ")", c.name = "ChunkLoadError", c.type = t, c.request = d, f[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var f, t, [d, c, o] = r,
                n = 0;
              if (d.some(a => 0 !== e[a])) {
                for (f in c) T.o(c, f) && (T.m[f] = c[f]);
                o && o(T)
              }
              for (a && a(r); n < d.length; n++) t = d[n], T.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
});