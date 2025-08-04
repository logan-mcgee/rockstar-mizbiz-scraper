try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a4b7f50d-28f0-40c5-9195-dbb6f909fb77", e._sentryDebugIdIdentifier = "sentry-dbid-a4b7f50d-28f0-40c5-9195-dbb6f909fb77")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, d, t, c, f, o = {
            9944: (e, a, r) => {
              a.y = function(e, a) {
                var r = document.createElement("a");
                r.href = e;
                for (var d = "/" === r.pathname[0] ? r.pathname : "/" + r.pathname, t = 0, c = d.length; t !== a && c >= 0;) "/" === d[--c] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var f = d.slice(0, c + 1);
                return r.protocol + "//" + r.host + f
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
                c = (e, a) => {
                  if (r.S) {
                    var d = "default",
                      t = r.S[d];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return r.S[d] = e, r.I(d, a)
                  }
                };
              r.d(a, {
                get: () => t,
                init: () => c
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
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & d && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(t, c), t
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          114: "b6b3e4184c363d837664ddc35d689f3c",
          131: "7172eef2aaae1148377dfff2bbc451a6",
          278: "954bfd797c0d5e0155f06244855c224e",
          299: "3d788ce7a17ea592a7cbdb96ea60d9ff",
          314: "70799ba54f58ae8e7c62e20321ff73c8",
          377: "63ca583d12ef6fa4602420db6e8a48a6",
          662: "1998b0a70f3e43eeeee2038e6acc1f9e",
          824: "caf025814d0aea4b0aa8e7c51b6b8427",
          888: "bebb2dff67ca2108b453bb3db65d2636",
          907: "6a8e28a6e731e100df7a00ab75670a71",
          969: "131cb3e7e397a7946eaf4fb3028839db",
          1054: "1c91abd45dc7a0ae344dc9d6c098af21",
          1138: "6bbe1ede29099905eb282be30ed9715e",
          1154: "ee535f50effe884ac3dcfaae65077f62",
          1242: "b4d74503b2b0db7902152101eed24f28",
          1379: "d69b753ab87979468264f9772aeacfe6",
          1607: "925495674a38d219687943a377b1a549",
          1689: "c4271e98474e4e8a77d292a4095e8e0b",
          1822: "4af3fb506fa6abefa049632b1e923c95",
          1868: "00bf220fb9e8102c6d466ac90f8a6088",
          2156: "1460b0590d5e8f55f1382ee5f6e7e700",
          2171: "00a6ef5a9dba2ea520464d242cc01353",
          2221: "629ee91694b07728fd59606b0f0ec566",
          2243: "572b755ab73dc789b4ec1a4b968f8bca",
          2315: "0c5259bcf553fbc10efc96e885c6dde5",
          2343: "708a8c80be6aceba364751598343b399",
          2347: "4962143c10a8d9fc98bc34d5a7051c54",
          2365: "073ecb4e7f1355d278e7ba5c0e3494b7",
          2398: "419906fc186042758419f0270c3939ca",
          2466: "6d9a07d7c758a089b751785499954956",
          2642: "6baf6e5747c66ad2699a6eaf2e9f114f",
          2678: "f25fba0821aa210cf8ab66104065bd4b",
          2864: "f2f322ddf9c44b4243b31475b48901af",
          2941: "6bf828b5adceb2586b4430c87aba230f",
          3034: "a0432ea46eb9fd34a383345dc11ffc2d",
          3197: "a9721402f46b787ee91f0de217148ef2",
          3343: "48c652fcffec06c5b2d29f3265a47a24",
          3370: "9889f48150a81fd081d10f8fc506b9c9",
          3475: "5feb954b82a77e91f62773924d7f6dfb",
          3486: "8035d770f0bdae908a6c82c27730a6a1",
          3622: "2c0b8952cf7498b2dd2d73fa53a2b0a6",
          3697: "dbe466b2221821d13e46f4aa244525b0",
          3885: "c1079ec41bb8e030655467b80a644317",
          3941: "91b0b8a509af97806644406e3eabaac1",
          4011: "ad337e3a0572cae07dc4e58b60ab35a9",
          4186: "4b681d7333fad6d9276d0a6f1ce023b5",
          4220: "611c88314fd23983fa7cc89d2a8f65b0",
          4528: "c1c34cae7d161923d61be8829d50d13d",
          4621: "8e43bf1667751f6b585249059cfb4648",
          4700: "70549fc5da46cef6eaeeda2847998562",
          4710: "9db5f15c47c2dfbbe4c408437da6af69",
          4731: "dd243848b598e9bf7ee46c5eb9ac455e",
          4799: "20bc66d8c50b23ca25cbd4f4d331481a",
          4851: "82370960f5bb33c5b3654a9913a4fd18",
          4861: "c15b4d063fa3a6431033a5ee3d54caef",
          4913: "835a3ea578acc1ba3ef1d3bc7ad9c704",
          5018: "d83dff15b53308273b0a7d9599aaf9c7",
          5233: "2ac050c2d5e189664afc6d473cccfac8",
          5247: "99fb4d68ac96fa72d41dd3b789a5d9b0",
          5259: "5b0697d68aa9bbe414806f817d435fe4",
          5491: "3e39e781aa711e6593d8b906fc2045c7",
          5530: "1edf19ded004e5bed4dd36290d8c1447",
          5639: "539b233af94d7e23d4ebe77283100a3f",
          5663: "3242eab6b2e9c92c7bc2341bccadc685",
          5742: "03f44521299bd9b2672233aae1d35b29",
          5830: "7734e9d1c68cbbbac970f4d2377eab3d",
          5832: "f4a274dd0471dc94db4603ac239017b1",
          5959: "ced83a879fce3791e719d77227bf06ae",
          6019: "7731a26616d0dfa2a01c8e71f866852f",
          6067: "b2ff7c80debdbc981451d529b8c1d165",
          6192: "e3f72f24bfa317ae00dd4cf75e4f8f3b",
          6204: "bcf2020e28af350ea1f4b0b1ae16b354",
          6267: "9547a25caf9a531ff438715a742aa943",
          6280: "5ab0de9f36cbf7f2f5ed9143d980e9d9",
          6285: "6a53436fab37c6f362a957260a21a690",
          6361: "1be4e12e759fc6537f5312585f83db4c",
          6642: "de8637ce370bf9d3cb7171220d09c045",
          6664: "e7ae91b453762727c544ded777ef7a07",
          6871: "2baa674c4542e8aaefd619180917cc11",
          6879: "9d052ca8db9111e869407fb9ec997fc0",
          6891: "b7ad3386d3533cac68024cfd3d5d6d83",
          6940: "88f7f7367f0cda57b1cdf5e6b7b2fc68",
          6997: "06eee56dd83cb26ef8da5f3f18a4aff0",
          7010: "7daad8cd40a1e98073d961a53b5d5544",
          7039: "b31e1c2041834a53c8e9deaba779b61b",
          7073: "a30cb076301a574b35f7c6d246f50e53",
          7436: "20f12b12a3285a14ca9cf2a8fa38cd68",
          7452: "598476fb5255f23cbe2dbbbd16778e31",
          7453: "6b688b9e3b1f37a64cfa5ebf4694a663",
          7858: "03704a61902fa81068a022d1e8dff862",
          7970: "40cb4c264f98592d1e2248f49e134b8f",
          8272: "6b04974521373cbd0184c26a32d354f8",
          8391: "ac409d12679916e1d0cb03cf9222f690",
          8755: "5e9d3ea030ece3dc582d55ec5d75e5e1",
          8773: "9119934d5ef8bd2e37d14034c6ea0e4c",
          8880: "bf7beb73312b3423b2bb2bb18e2a9147",
          8970: "0ef2d338a7f29ca753a82e8ec1dfe039",
          9022: "e70dfb2ae8606a071fbc81351c26889d",
          9028: "2084e3d72a3a7f6f1b1ff07d687beadb",
          9126: "32bfc47ff2b25a67e8525b4cb90e60ec",
          9368: "6315367884d39111f5dd7a7e000c1aa2",
          9377: "a6a420e783112a39f7f789e84e05113c",
          9474: "a92ee40668b7a3d1721cde31874c5261",
          9482: "2a1f34cd799856970aca79e735e7acbe",
          9603: "520d6892bad8f89d7d932bf9194b6c99",
          9615: "146b47ca8418930350452320757a8536",
          9642: "e07ee588fbf02a55174140a3e0f11b7d",
          9728: "0ac31e1905088f9a3228e8978cbde916",
          9773: "6c5f90d84062c7b38095d710ee89f2a0",
          9936: "01fa55a6e65eed25ae7dccf381bf1cd2",
          9990: "612d7e478c3a249322f9a2781523cc54"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1689: "cea1a81b81d394e799ca4dbdb9603b59",
          2988: "450cc2b1c47be1e723f0b0d53ea4743d",
          5491: "88e36d3e8ead8d1497bdc62b7972f433",
          6192: "1b6a05f8cdb2244907347e6834e933b8",
          6642: "f1da5b48170e8eff07c31868b9c22f2e"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/modules-core-footer:", b.l = (e, a, r, c) => {
          if (d[e]) d[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                var s = n[i];
                if (s.getAttribute("src") == e || s.getAttribute("data-webpack") == t + r) {
                  f = s;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", t + r), f.src = e), d[e] = [a];
            var l = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var t = d[e];
                if (delete d[e], f.parentNode && f.parentNode.removeChild(f), t && t.forEach((e => e(r))), a) return a(r)
              },
              u = setTimeout(l.bind(null, void 0, {
                type: "timeout",
                target: f
              }), 12e4);
            f.onerror = l.bind(null, f.onerror), f.onload = l.bind(null, f.onload), o && document.head.appendChild(f)
          }
        }, b.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, b.nmd = e => (e.paths = [], e.children || (e.children = []), e), c = {}, f = {}, b.f.remotes = (e, a) => {
          b.o(c, e) && c[e].forEach((e => {
            var r = b.R;
            r || (r = []);
            var d = f[e];
            if (!(r.indexOf(d) >= 0)) {
              if (r.push(d), d.p) return a.push(d.p);
              var t = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + d[1] + '" from ' + d[2]), b.m[e] = () => {
                    throw a
                  }, d.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var i = b.then((e => o(e, f)), t);
                    if (!n) return i;
                    a.push(d.p = i)
                  } catch (e) {
                    t(e)
                  }
                },
                o = (e, a, t) => c(a.get, d[1], r, 0, n, t),
                n = a => {
                  d.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, d[2], 0, 0, ((e, a, r) => e ? c(b.I, d[0], 0, e, o, r) : t()), 1)
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
              var c = b.S[r],
                f = "@rockstargames/modules-core-footer",
                o = (e, a, r, d) => {
                  var t = c[e] = c[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!d != !o.eager ? d : f > o.from)) && (t[a] = {
                    get: r,
                    from: f,
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
                  c = (typeof t)[0];
                if (d >= r.length) return "u" == c;
                var f = r[d],
                  o = (typeof f)[0];
                if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                if ("o" != c && "u" != c && t != f) return t < f;
                d++
              }
            },
            r = e => {
              var a = e[0],
                d = "";
              if (1 === e.length) return "*";
              if (a + .5) {
                d += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
                for (var t = 1, c = 1; c < e.length; c++) t--, d += "u" == (typeof(o = e[c]))[0] ? "-" : (t > 0 ? "." : "") + (t = 2, o);
                return d
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : r(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            d = (a, r) => {
              if (0 in a) {
                r = e(r);
                var t = a[0],
                  c = t < 0;
                c && (t = -t - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, i, s = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= r.length || "o" == (i = (typeof(b = r[f]))[0])) return !n || ("u" == s ? o > t && !c : "" == s != c);
                  if ("u" == i) {
                    if (!n || "u" != s) return !1
                  } else if (n)
                    if (s == i)
                      if (o <= t) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != s && "n" != s) {
                    if (c || o <= t) return !1;
                    n = !1, o--
                  } else {
                    if (o <= t || i < s != c) return !1;
                    n = !1
                  } else "s" != s && "n" != s && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? d(p, r) : !u())
              }
              return !!u()
            },
            t = (e, a) => e && b.o(e, a),
            c = e => (e.loaded = 1, e.get()),
            f = e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}),
            o = e => {
              throw new Error(e)
            },
            n = e => function(a, r, d, t, c) {
              var f = b.I(a);
              return f && f.then && !d ? f.then(e.bind(e, a, b.S[a], r, !1, t, c)) : e(a, b.S[a], r, d, t, c)
            },
            i = (e, a, r) => r ? r() : ((e, a) => o("Shared module " + a + " doesn't exist in shared scope " + e))(e, a),
            s = n(((e, n, b, s, l, u) => {
              if (!t(n, b)) return i(e, b, u);
              var p = ((e, r, t, c) => {
                var o = c ? f(e[r]) : e[r];
                return (r = Object.keys(o).reduce(((e, r) => !d(t, r) || e && !a(e, r) ? e : r), 0)) && o[r]
              })(n, b, l, s);
              return p ? c(p) : u ? u() : void o(((e, a, d, t, c) => {
                var f = e[d];
                return "No satisfying version (" + r(t) + ")" + (c ? " for eager consumption" : "") + " of shared module " + d + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(n, e, b, l, s))
            })),
            l = n(((e, o, n, b, s, l) => {
              if (!t(o, n)) return i(e, n, l);
              var u, p = ((e, r, d) => {
                var t = d ? f(e[r]) : e[r];
                return Object.keys(t).reduce(((e, r) => !e || !t[e].loaded && a(e, r) ? r : e), 0)
              })(o, n, b);
              return d(s, p) || (u = ((e, a, d, t) => "Unsatisfied version " + d + " from " + (d && e[a][d].from) + " of shared singleton module " + a + " (required " + r(t) + ")")(o, n, p, s), "undefined" != typeof console && console.warn && console.warn(u)), c(o[n][p])
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
                      var t = (f = r[d]).getAttribute("data-href") || f.getAttribute("href");
                      if ("stylesheet" === f.rel && (t === e || t === a)) return f
                    }
                    var c = document.getElementsByTagName("style");
                    for (d = 0; d < c.length; d++) {
                      var f;
                      if ((t = (f = c[d]).getAttribute("data-href")) === e || t === a) return f
                    }
                  })(d, t)) return a();
                ((e, a, r, d, t) => {
                  var c = document.createElement("link");
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) d();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), t(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, (r => {
                if (b.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + t + ": " + c + ")", f.name = "ChunkLoadError", f.type = t, f.request = c, d[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, c = r[0],
                f = r[1],
                o = r[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (d in f) b.o(f, d) && (b.m[d] = f[d]);
                o && o(b)
              }
              for (a && a(r); n < c.length; n++) t = c[n], b.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b.nc = void 0, b(37389), b(98478)
      })())
    }
  }
}));