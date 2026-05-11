try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1d24af25-d3be-473a-a3fc-5d4fa13d2401", e._sentryDebugIdIdentifier = "sentry-dbid-1d24af25-d3be-473a-a3fc-5d4fa13d2401")
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
        var e, r, d, t, f, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, _, k, E, S, P, j = {
            28419(e, a, r) {
              (0, r(17411).w)(1)
            },
            17411(e, a, r) {
              const d = r(77027).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = d(r.y.meta.url, e)
              }
            },
            93032(e, a, r) {
              r(28419)
            },
            77027(e, a, r) {
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
            98478(e, a, r) {
              "use strict";
              var d = {
                  "./root": () => Promise.all([r.e(3004), r.e(3661), r.e(8489), r.e(1127), r.e(8429), r.e(8609), r.e(5813), r.e(9743)]).then(() => () => r(89743))
                },
                t = (e, a) => (r.R = a, a = r.o(d, e) ? d[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), r.R = void 0, a),
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
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, T.t = function(a, d) {
          if (1 & d && (a = this(a)), 8 & d) return a;
          if ("object" == typeof a && a) {
            if (4 & d && a.__esModule) return a;
            if (16 & d && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          T.r(t);
          var f = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var c = 2 & d && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = r(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, T.d(t, f), t
        }, T.d = (e, a) => {
          for (var r in a) T.o(a, r) && !T.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, T.f = {}, T.e = e => Promise.all(Object.keys(T.f).reduce((a, r) => (T.f[r](e, a), a), [])), T.u = e => "js/" + {
          68: "1b35f47186f8e470b8f5bb8513eab021",
          131: "d734806cc3acf4974f0a57469c50c817",
          173: "2a9b6ac87561d64c8ef53fe82db490df",
          278: "94019d56d20857b2451b3b25554a1b73",
          299: "a19c53d66bc5b78d10176054f008e191",
          314: "5886ee978f682ad696846a540f40504b",
          637: "6c7768ab2d4c165323c1f51c8d057e7d",
          662: "180e16f8b0253bcbb44ceb26ead5fa20",
          824: "3a6f56b3a6104d85392ebf57eaaf4742",
          907: "a190208644ecad0c5d0c8f31a888261e",
          909: "e23507b0b11a308629344d118280f087",
          1054: "df54277ce8dfe9028244fc71dd466bd0",
          1098: "86d49cfd85e61e49d3abbd0c05075e7d",
          1242: "f35ad924e2ad0e9b74d0509eb897763d",
          1758: "2422370aa52f185ebe06ad0f7608bc75",
          1795: "959aeb2b2aad7d982da739532683a898",
          1822: "df13b3f802103fda634ebb31e30b643d",
          1837: "6d66b8076dbc8e9df3bef4f427a8f634",
          1842: "1553ffd29be05f8509f576db1fe257f1",
          1868: "46225a469c8e9a3f650462325e0fb135",
          2091: "8b41946d4772fd7b598067df15306714",
          2156: "1cf3f06e2814c5a80f56a0b08f70b0d4",
          2169: "fa0f3f2f2c651809a4832c5ba9ff838d",
          2171: "8c510ca9a6c6c39584d80fb503ce866c",
          2221: "8b17f402133127415e2c8b8d338562f2",
          2234: "15089bf6151db2d793ccfd99fa0d252f",
          2243: "133630da71339f02265c7c0443e6cc00",
          2306: "859512c0ff1bfde8af0663c68f1e8859",
          2347: "af51ecffbfaca68bfa41f42429e6bed5",
          2365: "2a72ba644d1c8ece0264e7b1db06c9d1",
          2398: "de4b55febd97ac9439a27ade63bf90b4",
          2466: "823d102b05b8693cd45043e7fae3fe22",
          2642: "61b8ef00845b05e6c65ae9ad4ee6f4c7",
          2678: "2c88f497efc88db327edf78354e1a443",
          2864: "c5a73f5f6a059d5b0caaf04d4d4cf59a",
          3004: "70e46d0c26d840cf448253fa5040ee34",
          3034: "d1feefcf3ad5b50e951ef8355a009f63",
          3197: "09f91f0c02592d37a5209927ed2c7a75",
          3343: "4ac5e3e714113551c14b622cd0b11a92",
          3370: "e7810cc8b8c07ab4706880fa4cc384c9",
          3475: "e69f681c5ce9abb96c62e385893930e7",
          3486: "f51d6ed444d534a818229329c9aa1c09",
          3661: "67edbaf5621cc11ad0e7e6b17fb5be36",
          3697: "1b3de293029174ac7f75b80f63a6b55a",
          3885: "8f4f3d8f7ac7d40fd81fd386fdb6a062",
          3896: "9a6602b940da7335ae83014bb8301dc0",
          3941: "6ae905753282d705b07d6bca86ad68e5",
          4011: "1d8c513bfe4cdf53d2cbeedbdf127fed",
          4069: "d76f50cd1e1ad8804d6f6a7de7c2f34b",
          4218: "0ea3c597f8ff3c1e5898454c3a36ba5f",
          4528: "262f943507d48c8079667a63f93f5234",
          4578: "6aac2bf0fd3a4c070e3d5d5a7e21e168",
          4621: "9f8bd4d1eac67227882efd0e292803d4",
          4700: "97121f03d2e1c7490230b0158a0f1348",
          4710: "218f8c9d81376a27e253a94b5bb2c0b6",
          4731: "acca3d6e65a2bced818f804784f93d4d",
          4792: "ecaf6edc0a2b2f3c7bdd6a0b213ca144",
          4799: "dcd37de63cd3fb466076e3ee30028e4c",
          4851: "3e53f459b9a8943eedd58cc4fbbe674b",
          4861: "a61b55ac64a1c77e7714b4fe28201c30",
          4913: "3bc7377afa7a3c389aa062f979620742",
          5018: "6387fc3e35011b39757c4cf5711d5af9",
          5233: "d642f24872e77ca9e5aaf71b7cbb9acb",
          5259: "db13718cd3296259b7adaed1cf3f5918",
          5265: "95a83b4baa1d9796cc830f2c3f948be1",
          5389: "e9cefe1f32fced238660261636408f6e",
          5415: "d81fe2dbe95ed76c3d784c9c1419a091",
          5530: "8ba56b56b736b6d97d1b424ec9fdf923",
          5639: "67ffa6ad3d22e4b8cdc77c1a2a4b8b96",
          5663: "81da5e258f6f6357b757a0c95a1967bc",
          5742: "3ed3acd78f740b979d5fbd856c8ba0f1",
          5813: "dc04b8be6f4407d584a87c54533ac6d4",
          5830: "0274f2bf31474c4ef32cced34a6d8d8e",
          5832: "367ed13164163bbcfb3a4c836783a84b",
          6267: "47a614c949cf18e2adecd499669a08cb",
          6280: "170c9fbb61fa3e76122e66a26028b6a6",
          6285: "137e6de3964c04eb18cc1f481a1dfd4f",
          6361: "45448e1e2a4954c5b8cc30fe3b3b665f",
          6471: "5f5a75167cd754199b5d36305cbce293",
          6664: "48ccaa5f5edc6d043e8bc4f525eb921f",
          6805: "ee43aecf441869cfbbc90f35fe61b3b2",
          6879: "fd1cfe2db56a8970a2e2b57860133dbc",
          6891: "14ae18e5f5163399971542eaaefbc009",
          6997: "da67f26c6a1787e795568ad19a77f90b",
          7010: "d3456f39f347f97e2c416aa857488d5b",
          7073: "0f39f16ce02da9073c404440ae6138e6",
          7301: "0d41b6034f1d6fedb30de6936351416b",
          7407: "d52c378ab54b9ab74537b1e2c9356d3f",
          7436: "b9a3bbca6e195b1bb30daa9dd5cf0ab0",
          7452: "c7c40ac0837e4f89bceeaca7ef390deb",
          7453: "9c0af945a98286121ba70e587cad209a",
          7970: "9a54bfe7df9f68aa03214f55726b1197",
          8068: "e8aedb1588b692337b78191c4fe69074",
          8113: "65456075f91c685c8793c7d2858f35d3",
          8272: "c8c31e114c96e0ae63fd1d2a05a872db",
          8325: "e6d4598d7b63f65616203e58370b0cb8",
          8391: "df46bb423104e39c55ac9edb4f103531",
          8431: "d2164c122ba6ed321b1048993aeeff33",
          8454: "fd30d9d3c822d0b5d5759596ea85010d",
          8489: "4152343231b130e3af1822606a40f703",
          8755: "5158281c9810d592c90c9ad861496e73",
          8845: "e457bfc857c12c02844f15b59aa25ab0",
          8880: "8e1454286023a11ed0fd890e79bfafbf",
          8938: "426162e58384a2cb6c362ac1925ae8bf",
          8970: "2baad05338fdf6a4d11420f7107bcc77",
          9022: "76f129af7ff79237b3b2de0f2fae2470",
          9028: "be222c023feada9836a7d60cc9f23d3c",
          9126: "5e2f455a6f728311a79fa68058c87e59",
          9377: "9331a10bea60e508c389f41ec2048ed0",
          9615: "5be225243314741d7dd223fde1bbbe6a",
          9673: "8a175af230e5fd7814f6bd68d20405ff",
          9743: "5a1f8221a502bdf72d7191d95adbabac",
          9760: "fc08203193311e84783797dd1c6dfc45",
          9936: "168dcf6adbc923492a0c7428558c394e",
          9990: "1540692a8443a8ada60cfb79431660a6"
        } [e] + ".js", T.miniCssF = e => "css/" + {
          1842: "5c0456c753f0c1c1a7c4e70ed7000314",
          2091: "0f01b4a16fc64479dc17ec2eff82ce51",
          3661: "7ed0b05533e98a7de80b39b1afce00ee",
          5813: "71841c90df5b7471ef317f9bb5784ecc",
          9743: "8d55bdc42baa2d165a0b1521c1a93bd0"
        } [e] + ".css", T.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), T.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), d = {}, t = "@rockstargames/modules-core-footer:", T.l = (e, a, r, f) => {
          if (d[e]) d[e].push(a);
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
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", T.nc && c.setAttribute("nonce", T.nc), c.setAttribute("data-webpack", t + r), c.src = e), d[e] = [a];
            var s = (a, r) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var t = d[e];
                if (delete d[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(r)), a) return a(r)
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
          T.I = (r, d) => {
            d || (d = []);
            var t = a[r];
            if (t || (t = a[r] = {}), !(d.indexOf(t) >= 0)) {
              if (d.push(t), e[r]) return e[r];
              T.o(T.S, r) || (T.S[r] = {});
              var f = T.S[r],
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
              switch (r) {
                case "default":
                  o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([T.e(3004), T.e(1795), T.e(1127), T.e(1837)]).then(() => () => T(12841))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([T.e(3004), T.e(4792), T.e(909), T.e(8489), T.e(6805), T.e(1127), T.e(7301), T.e(8429), T.e(8609), T.e(3331), T.e(2091), T.e(5813)]).then(() => () => T(76822))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([T.e(4792), T.e(8068), T.e(1127), T.e(7301), T.e(8609), T.e(3331), T.e(8113)]).then(() => () => T(32169))), o("@rsgweb/utils", "0.0.0", () => Promise.all([T.e(3004), T.e(4792), T.e(8454), T.e(1127), T.e(7301), T.e(8609), T.e(4069)]).then(() => () => T(60637))), o("react-dom", "18.3.1", () => Promise.all([T.e(1098), T.e(1127)]).then(() => () => T(71098))), o("react-router-dom", "6.30.3", () => Promise.all([T.e(5389), T.e(1127), T.e(8429)]).then(() => () => T(15389))), o("react", "18.3.1", () => T.e(8431).then(() => () => T(48431)));
                  break;
                case "footer":
                  o("@foundry/react", "5.23.1", () => Promise.all([T.e(9673), T.e(3004), T.e(909), T.e(3661), T.e(8489), T.e(1842), T.e(1127), T.e(8429)]).then(() => () => T(25914)))
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
              for (var d = r.length - 1; d > -1 && (!e || !/^http(s?):/.test(e));) e = r[d--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), T.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            d = r[1] ? a(r[1]) : [];
          return r[2] && (d.length++, d.push.apply(d, a(r[2]))), r[3] && (d.push([]), d.push.apply(d, a(r[3]))), d
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var r = 0;;) {
            if (r >= e.length) return r < a.length && "u" != (typeof a[r])[0];
            var d = e[r],
              t = (typeof d)[0];
            if (r >= a.length) return "u" == t;
            var c = a[r],
              o = (typeof c)[0];
            if (t != o) return "o" == t && "n" == o || "s" == o || "u" == t;
            if ("o" != t && "u" != t && d != c) return d < c;
            r++
          }
        }, o = e => {
          var a = e[0],
            r = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            r += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var d = 1, t = 1; t < e.length; t++) d--, r += "u" == (typeof(c = e[t]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, c);
            return r
          }
          var f = [];
          for (t = 1; t < e.length; t++) {
            var c = e[t];
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
              d = r < 0;
            d && (r = -r - 1);
            for (var t = 0, c = 1, o = !0;; c++, t++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (t >= a.length || "o" == (i = (typeof(b = a[t]))[0])) return !o || ("u" == s ? c > r && !d : "" == s != d);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= r) {
                    if (b != e[c]) return !1
                  } else {
                    if (d ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (d || c <= r) return !1;
                o = !1, c--
              } else {
                if (c <= r || i < s != d) return !1;
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
        }, b = (e, a) => e && T.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, r) => (e[r].eager && (a[r] = e[r]), a), {}), l = (e, a, r, d) => {
          var t = d ? s(e[a]) : e[a];
          return (a = Object.keys(t).reduce((e, a) => !n(r, a) || e && !c(e, a) ? e : a, 0)) && t[a]
        }, u = (e, a, r) => {
          var d = r ? s(e[a]) : e[a];
          return Object.keys(d).reduce((e, a) => !e || !d[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, r, d) => "Unsatisfied version " + r + " from " + (r && e[a][r].from) + " of shared singleton module " + a + " (required " + o(d) + ")", h = (e, a, r, d, t) => {
          var f = e[r];
          return "No satisfying version (" + o(d) + ")" + (t ? " for eager consumption" : "") + " of shared module " + r + " found in shared scope " + a + ".\nAvailable versions: " + Object.keys(f).map(e => e + " from " + f[e].from).join(", ")
        }, m = e => {
          throw new Error(e)
        }, g = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, v = (e, a, r) => r ? r() : ((e, a) => m("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), w = (y = e => function(a, r, d, t, f) {
          var c = T.I(a);
          return c && c.then && !d ? c.then(e.bind(e, a, T.S[a], r, !1, t, f)) : e(a, T.S[a], r, d, t, f)
        })((e, a, r, d, t, f) => {
          if (!b(a, r)) return v(e, r, f);
          var c = l(a, r, t, d);
          return c ? i(c) : f ? f() : void m(h(a, e, r, t, d))
        }), _ = y((e, a, r, d, t, f) => {
          if (!b(a, r)) return v(e, r, f);
          var c = u(a, r, d);
          return n(t, c) || g(p(a, r, c, t)), i(a[r][c])
        }), k = {}, E = {
          71127: () => _("default", "react", !1, [1, 18, 2, 0], () => T.e(8431).then(() => () => T(48431))),
          18429: () => _("default", "react-dom", !1, [1, 18, 2, 0], () => T.e(1098).then(() => () => T(71098))),
          10181: () => _("default", "react-router-dom", !1, [1, 6, 11, 2], () => Promise.all([T.e(5389), T.e(8429)]).then(() => () => T(15389))),
          42909: () => _("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([T.e(3004), T.e(1795), T.e(4218)]).then(() => () => T(12841))),
          82199: () => _("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([T.e(4792), T.e(8068), T.e(7301), T.e(3331), T.e(2169)]).then(() => () => T(32169))),
          99060: () => w("footer", "@foundry/react", !1, [4, 5, 23, 1], () => Promise.all([T.e(9673), T.e(909), T.e(3661), T.e(1842)]).then(() => () => T(25914))),
          76923: () => _("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([T.e(4792), T.e(909), T.e(6805), T.e(7301), T.e(3331), T.e(2091)]).then(() => () => T(76822))),
          13331: () => _("default", "@rsgweb/utils", !1, [0], () => Promise.all([T.e(3004), T.e(8454), T.e(637)]).then(() => () => T(60637)))
        }, S = {
          1127: [71127],
          3331: [13331],
          5813: [82199, 99060],
          8429: [18429],
          8609: [10181, 42909],
          9743: [76923]
        }, P = {}, T.f.consumes = (e, a) => {
          T.o(S, e) && S[e].forEach(e => {
            if (T.o(k, e)) return a.push(k[e]);
            if (!P[e]) {
              var r = a => {
                k[e] = 0, T.m[e] = r => {
                  delete T.c[e], r.exports = a()
                }
              };
              P[e] = !0;
              var d = a => {
                delete k[e], T.m[e] = r => {
                  throw delete T.c[e], a
                }
              };
              try {
                var t = E[e]();
                t.then ? a.push(k[e] = t.then(r).catch(d)) : r(t)
              } catch (e) {
                d(e)
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
                1842: 1,
                2091: 1,
                3661: 1,
                5813: 1,
                9743: 1
              } [a] && r.push(e[a] = (e => new Promise((a, r) => {
                var d = T.miniCssF(e),
                  t = T.p + d;
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
                  f.rel = "stylesheet", f.type = "text/css", T.nc && (f.nonce = T.nc), f.onerror = f.onload = r => {
                    if (f.onerror = f.onload = null, "load" === r.type) d();
                    else {
                      var c = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), t(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
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
            var d = T.o(e, a) ? e[a] : void 0;
            if (0 !== d)
              if (d) r.push(d[2]);
              else if (/^(1127|3331|8429|8609)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((r, t) => d = e[a] = [r, t]);
              r.push(d[2] = t);
              var f = T.p + T.u(a),
                c = new Error;
              T.l(f, r => {
                if (T.o(e, a) && (0 !== (d = e[a]) && (e[a] = void 0), d)) {
                  var t = r && ("load" === r.type ? "missing" : r.type),
                    f = r && r.target && r.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, d[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var d, t, [f, c, o] = r,
                n = 0;
              if (f.some(a => 0 !== e[a])) {
                for (d in c) T.o(c, d) && (T.m[d] = c[d]);
                o && o(T)
              }
              for (a && a(r); n < f.length; n++) t = f[n], T.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), T.nc = void 0, T(93032), T(98478)
      })())
    }
  }
});