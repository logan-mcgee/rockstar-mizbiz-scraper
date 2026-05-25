try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7d5dec4c-8d76-4df0-bd43-3b35e3a363e0", e._sentryDebugIdIdentifier = "sentry-dbid-7d5dec4c-8d76-4df0-bd43-3b35e3a363e0")
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
        var e, d, r, t, f, c, o, n, b, i, s, l, u, p, h, m, g, y, v, w, _, k, E, S, P = {
            20154(e, a, d) {
              (0, d(89160).w)(1)
            },
            89160(e, a, d) {
              const r = d(51908).y;
              a.w = function(e) {
                if (e || (e = 1), !d.y.meta || !d.y.meta.url) throw console.error("__system_context__", d.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                d.p = r(d.y.meta.url, e)
              }
            },
            35649(e, a, d) {
              d(20154)
            },
            51908(e, a, d) {
              a.y = function(e, a) {
                var d = document.createElement("a");
                d.href = e;
                for (var r = "/" === d.pathname[0] ? d.pathname : "/" + d.pathname, t = 0, f = r.length; t !== a && f >= 0;) "/" === r[--f] && t++;
                if (t !== a) throw Error("systemjs-webpack-interop: rootDirectoryLevel (" + a + ") is greater than the number of directories (" + t + ") in the URL path " + e);
                var c = r.slice(0, f + 1);
                return d.protocol + "//" + d.host + c
              };
              Number.isInteger
            },
            98478(e, a, d) {
              "use strict";
              var r = {
                  "./root": () => Promise.all([d.e(9512), d.e(359), d.e(6202), d.e(4637), d.e(4017), d.e(5688), d.e(1455), d.e(5667)]).then(() => () => d(5667))
                },
                t = (e, a) => (d.R = a, a = d.o(r, e) ? r[e]() : Promise.resolve().then(() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                }), d.R = void 0, a),
                f = (e, a) => {
                  if (d.S) {
                    var r = "default",
                      t = d.S[r];
                    if (t && t !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                    return d.S[r] = e, d.I(r, a)
                  }
                };
              d.d(a, {
                get: () => t,
                init: () => f
              })
            }
          },
          j = {};

        function O(e) {
          var a = j[e];
          if (void 0 !== a) return a.exports;
          var d = j[e] = {
            id: e,
            loaded: !1,
            exports: {}
          };
          return P[e].call(d.exports, d, d.exports, O), d.loaded = !0, d.exports
        }
        return O.m = P, O.c = j, O.y = a, O.amdO = {}, O.n = e => {
          var a = e && e.__esModule ? () => e.default : () => e;
          return O.d(a, {
            a
          }), a
        }, d = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, O.t = function(a, r) {
          if (1 & r && (a = this(a)), 8 & r) return a;
          if ("object" == typeof a && a) {
            if (4 & r && a.__esModule) return a;
            if (16 & r && "function" == typeof a.then) return a
          }
          var t = Object.create(null);
          O.r(t);
          var f = {};
          e = e || [null, d({}), d([]), d(d)];
          for (var c = 2 & r && a;
            ("object" == typeof c || "function" == typeof c) && !~e.indexOf(c); c = d(c)) Object.getOwnPropertyNames(c).forEach(e => f[e] = () => a[e]);
          return f.default = () => a, O.d(t, f), t
        }, O.d = (e, a) => {
          for (var d in a) O.o(a, d) && !O.o(e, d) && Object.defineProperty(e, d, {
            enumerable: !0,
            get: a[d]
          })
        }, O.f = {}, O.e = e => Promise.all(Object.keys(O.f).reduce((a, d) => (O.f[d](e, a), a), [])), O.u = e => "js/" + {
          131: "c674576cb44eb11dff059fe4e701b45c",
          162: "785004c7ac2033e763d689168de0ac64",
          194: "681a8328ce23d27b8346c3c45a2e48e8",
          277: "d571cedcde2c2016784c3fa2fe93d1d1",
          278: "e98f41dd4d79a461bd3240b0f9e51b3b",
          299: "6e87bdfa6381d5cabf04f2cc57a0cac5",
          314: "cc48df4916d85c74615f0b7b82aac3e0",
          359: "d5a3a5fc8cbe42ead14408e5c6b7adeb",
          662: "2d0b065d1eef6a54135cb8cb08c3d552",
          755: "b821215cc1b1b7c12d8e027f0df3f1ee",
          824: "302587c9c5e02eaf99d3e679e0949746",
          906: "875b845e64187d0085adee2eca6c5a81",
          907: "5bb38fb5e83c481174bfe0a5d750eb23",
          913: "b05a25cea80f41c9d77820f35c98444d",
          951: "46002f85104709e7a6661597b5cbb86f",
          1054: "ff2d2de1cc3b32cf9bc5eef738ca372a",
          1224: "56ca6292afe9cc6b5b8d7f5480764c99",
          1242: "8d81ddbb43e6f9c8ac11463d4091fd31",
          1455: "b9b8f6e71dacc02f8b47b49995f0ffff",
          1622: "6d3f505095ca2deee24c4bcb52aff0be",
          1822: "f1e6e13a699e0daa70c612dc1dc1efc6",
          1868: "3b756a97b9d1446624db14c8a679a2cb",
          2e3: "c8464942224fd453e68cbf9106df5bb9",
          2062: "c85a817571c62380e6ce991b4931e23d",
          2156: "d89bc06c02e6765abcd2c0eeb571c26f",
          2171: "8006a570056a45896e09dd5818043115",
          2221: "526fd31c0717c5a5be840bd96e8819cc",
          2243: "229dd9a7585e30282e7fe285222fc81c",
          2347: "8fe247df2a5ce23110c1290c089b90a7",
          2365: "d0f135f067ef077df87b6940a882ad67",
          2398: "396e455dcd51fd5468747d957c3a35bd",
          2466: "31140684a9d098efe7618978e388552e",
          2497: "b00f0c8d2d904bcf642239841356e701",
          2571: "6744afd646ab85f8f3582c2f1d851a5a",
          2581: "f687f74bccf143940d0204721140e39a",
          2642: "f0c9ed7a6f104bb58618b7716611e307",
          2678: "b3963069ebb3deaa9dc3bb44297a4db9",
          2864: "75d9b5e00a7c76690ba0b9775387b80f",
          3034: "6977cb4662f44c7011650db4b6e927ce",
          3197: "c7518b0f780facc772e1185e07953a1e",
          3343: "b36890dc44d5c87ec3593323b58c594d",
          3370: "9fa7d0eb97ab0bf2a98628b8c3aba942",
          3475: "73bfc8c8b1ab9fcf9eb74135b2f1e1f7",
          3486: "a21a26f66467f7a9c4740749fe0794ce",
          3502: "10f3ad7c67007dbf92d71cce8316f11a",
          3694: "5d22e900e4fa03c25ffb69e05d98e4d4",
          3697: "c94ea4c415a6706516f3a11047e12175",
          3884: "51c3347600f4f70c893095b482cd3211",
          3885: "7529f64e604cc17f0cdad657ea34b5aa",
          3941: "55bef5d37274b212913b721bf7801cad",
          4011: "05f05392ae1af43f1c1f75771e7a21d5",
          4078: "222d585e8961857796645603ed1d2fa3",
          4269: "863776bb4a2058f5ae9db28d3511be70",
          4447: "561d334c679ce8d12dc596484f8748e6",
          4528: "9c320d84e1ddc4614b74ebb6f0638376",
          4537: "0602d71e2db453f88f89229eea1706a4",
          4621: "dfc8b84155d879d44694ea684ef2011a",
          4700: "5e14a0a5bf38ab9977268a2be91ea912",
          4710: "9810c84f98890fecac02073797a56157",
          4731: "30538066595a916b7be7197bcb9d2875",
          4799: "03c9fa11b20109bf59a4ee5ed14dbc71",
          4851: "a968965461c332b3041c7a82826fa4dd",
          4861: "5b2aafb3536fd2ecd1d2b88133f20c22",
          4913: "7ce488b825a092902d45631d2f32404c",
          5018: "c93fc94078af2e1f6ab99f954d9c475b",
          5056: "c8828adff7faecad4a0670bb6afa18e2",
          5233: "6c9d5896869ba312eb66c67daef8c70e",
          5259: "3552a85427c046678faff6ecbe4ca666",
          5519: "f9139d9827a85a93ce183d4bc893d039",
          5530: "71bd09069cc5131ec5320d0b9518084f",
          5639: "366fae5a6b2f0c00ec52cc3c1581de8f",
          5663: "43ff474ebd409b9710a03dfed0db410d",
          5667: "88304c23fd0ca8635be1518a82bf73cf",
          5742: "1f11eabeef86c1f1c34497b851e42059",
          5830: "f128db80c41e5c38eb0dba6a81fc8f31",
          5832: "91353f14a71661ef524754e7f7d9f120",
          5997: "a865920d3f5fc25519b55cd601f338b3",
          6048: "362eb80fc9f7788ccb95b308b7dc929e",
          6202: "2db05236c89c6d32fb3bd376bdad39b5",
          6267: "804e8125bb42ba6b881284f0e8fc1c1d",
          6280: "26e9c624b8a269b187869d16c800bcdd",
          6285: "3b6f7675dbeca1bd7923a21251049d58",
          6361: "61951256cc2541518bb53b62374438a3",
          6583: "be1fe800bbb02fcb56fc76dce2fbd416",
          6664: "5ee9c88429698b4017ddf17b32dfd95f",
          6879: "78a76e9741dbc8d0667430d4e232ec02",
          6891: "c74d8607cf46f9a495fb529ef51db5fc",
          6900: "23aa87385583e5c280117f51a477bd7b",
          6997: "43d7772954a9fdd8c8dadc50056f279e",
          7010: "3f0ee4dd813f063b2b59a7a11d97f0af",
          7073: "340907babf7a27adcad6a05bb4ae0bb1",
          7436: "3a074c98905fce7829881be00a7af665",
          7452: "16f514383407cd05c64895e3fff5b0ab",
          7453: "a0dc00e5d03e4a4b0edd8fbb5b8869ef",
          7645: "f8be2e37e84601c563635af2b480f0cc",
          7813: "2f6b75316c369c0b1fc65500621506cc",
          7892: "15d094735447a6fc321efb8434e4220d",
          7970: "522bcf42662858747d2d709344d5b011",
          8272: "e6dce597f57dbd71c0ac318a376fb66e",
          8391: "8fd0ad14ac6588875f9f2a6e14ce2c86",
          8679: "102614c19f097ce927b09ea33d5a1197",
          8683: "dadba62e423502c1185f91cbdd986117",
          8755: "57c81b170947225b2d104a657a41a86f",
          8880: "44a089c079f63840cd8b87aa9c64aebb",
          8970: "e0f2dba06094900529feff902a2db56b",
          8999: "dab1b95067c70e089540089f9ca4cd41",
          9022: "36e1272679837cd559b48ddc44bee5fd",
          9028: "84ad88118703efaed891dfaa43e102a3",
          9126: "f451c3a30d9928056166f7c7b6414424",
          9377: "292a69f6bf7c896669d01e40427f21bb",
          9512: "753616d7ea20abbf421baf7ee4f30b86",
          9615: "2609ef68f20d85e0945296eb19d0d5a8",
          9936: "c22b192c57f34df434cc21ba711f0ba9",
          9990: "7b7ccbbcdc5e64210295ec5489ab031f"
        } [e] + ".js", O.miniCssF = e => "css/" + {
          359: "7ed0b05533e98a7de80b39b1afce00ee",
          913: "0f01b4a16fc64479dc17ec2eff82ce51",
          1455: "71841c90df5b7471ef317f9bb5784ecc",
          4447: "e664ea4762b99af5b15b7aeae284934c",
          5667: "8d55bdc42baa2d165a0b1521c1a93bd0"
        } [e] + ".css", O.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), O.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), r = {}, t = "@rockstargames/modules-core-footer:", O.l = (e, a, d, f) => {
          if (r[e]) r[e].push(a);
          else {
            var c, o;
            if (void 0 !== d)
              for (var n = document.getElementsByTagName("script"), b = 0; b < n.length; b++) {
                var i = n[b];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == t + d) {
                  c = i;
                  break
                }
              }
            c || (o = !0, (c = document.createElement("script")).charset = "utf-8", O.nc && c.setAttribute("nonce", O.nc), c.setAttribute("data-webpack", t + d), c.src = e), r[e] = [a];
            var s = (a, d) => {
                c.onerror = c.onload = null, clearTimeout(l);
                var t = r[e];
                if (delete r[e], c.parentNode && c.parentNode.removeChild(c), t && t.forEach(e => e(d)), a) return a(d)
              },
              l = setTimeout(s.bind(null, void 0, {
                type: "timeout",
                target: c
              }), 12e4);
            c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), o && document.head.appendChild(c)
          }
        }, O.r = e => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }, O.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
          O.S = {};
          var e = {},
            a = {};
          O.I = (d, r) => {
            r || (r = []);
            var t = a[d];
            if (t || (t = a[d] = {}), !(r.indexOf(t) >= 0)) {
              if (r.push(t), e[d]) return e[d];
              O.o(O.S, d) || (O.S[d] = {});
              var f = O.S[d],
                c = "@rockstargames/modules-core-footer",
                o = (e, a, d, r) => {
                  var t = f[e] = f[e] || {},
                    o = t[a];
                  (!o || !o.loaded && (!r != !o.eager ? r : c > o.from)) && (t[a] = {
                    get: d,
                    from: c,
                    eager: !!r
                  })
                },
                n = [];
              switch (d) {
                case "default":
                  o("@rsgweb/locale-tools", "0.0.0", () => Promise.all([O.e(9512), O.e(2497), O.e(4637), O.e(7813)]).then(() => () => O(57813))), o("@rsgweb/modules-core-user-action-menu", "0.0.0", () => Promise.all([O.e(9512), O.e(1622), O.e(3502), O.e(6202), O.e(8999), O.e(4637), O.e(5997), O.e(4017), O.e(5688), O.e(3331), O.e(913), O.e(1455)]).then(() => () => O(43808))), o("@rsgweb/rockstar-account", "0.0.0", () => Promise.all([O.e(1622), O.e(6583), O.e(4637), O.e(5997), O.e(5688), O.e(3331), O.e(1224)]).then(() => () => O(27892))), o("@rsgweb/utils", "0.0.0-development", () => Promise.all([O.e(9512), O.e(1622), O.e(5519), O.e(4637), O.e(5997), O.e(5688), O.e(6900)]).then(() => () => O(36048))), o("react-dom", "18.3.1", () => Promise.all([O.e(162), O.e(4637)]).then(() => () => O(30162))), o("react-router-dom", "6.30.3", () => Promise.all([O.e(4269), O.e(4637), O.e(4017)]).then(() => () => O(74269))), o("react", "18.3.1", () => O.e(2581).then(() => () => O(22581)));
                  break;
                case "footer":
                  o("@foundry/react", "5.24.3", () => Promise.all([O.e(9512), O.e(3502), O.e(2497), O.e(359), O.e(6202), O.e(4447), O.e(4637), O.e(4017)]).then(() => () => O(96651)))
              }
              return e[d] = n.length ? Promise.all(n).then(() => e[d] = 1) : 1
            }
          }
        })(), (() => {
          var e;
          O.g.importScripts && (e = O.g.location + "");
          var a = O.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var d = a.getElementsByTagName("script");
            if (d.length)
              for (var r = d.length - 1; r > -1 && (!e || !/^http(s?):/.test(e));) e = d[r--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), O.p = e
        })(), f = e => {
          var a = e => e.split(".").map(e => +e == e ? +e : e),
            d = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            r = d[1] ? a(d[1]) : [];
          return d[2] && (r.length++, r.push.apply(r, a(d[2]))), d[3] && (r.push([]), r.push.apply(r, a(d[3]))), r
        }, c = (e, a) => {
          e = f(e), a = f(a);
          for (var d = 0;;) {
            if (d >= e.length) return d < a.length && "u" != (typeof a[d])[0];
            var r = e[d],
              t = (typeof r)[0];
            if (d >= a.length) return "u" == t;
            var c = a[d],
              o = (typeof c)[0];
            if (t != o) return "o" == t && "n" == o || "s" == o || "u" == t;
            if ("o" != t && "u" != t && r != c) return r < c;
            d++
          }
        }, o = e => {
          var a = e[0],
            d = "";
          if (1 === e.length) return "*";
          if (a + .5) {
            d += 0 == a ? ">=" : -1 == a ? "<" : 1 == a ? "^" : 2 == a ? "~" : a > 0 ? "=" : "!=";
            for (var r = 1, t = 1; t < e.length; t++) r--, d += "u" == (typeof(c = e[t]))[0] ? "-" : (r > 0 ? "." : "") + (r = 2, c);
            return d
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
            var d = e[0],
              r = d < 0;
            r && (d = -d - 1);
            for (var t = 0, c = 1, o = !0;; c++, t++) {
              var b, i, s = c < e.length ? (typeof e[c])[0] : "";
              if (t >= a.length || "o" == (i = (typeof(b = a[t]))[0])) return !o || ("u" == s ? c > d && !r : "" == s != r);
              if ("u" == i) {
                if (!o || "u" != s) return !1
              } else if (o)
                if (s == i)
                  if (c <= d) {
                    if (b != e[c]) return !1
                  } else {
                    if (r ? b > e[c] : b < e[c]) return !1;
                    b != e[c] && (o = !1)
                  }
              else if ("s" != s && "n" != s) {
                if (r || c <= d) return !1;
                o = !1, c--
              } else {
                if (c <= d || i < s != r) return !1;
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
        }, b = (e, a) => e && O.o(e, a), i = e => (e.loaded = 1, e.get()), s = e => Object.keys(e).reduce((a, d) => (e[d].eager && (a[d] = e[d]), a), {}), l = (e, a, d) => {
          var r = d ? s(e[a]) : e[a];
          return (a = Object.keys(r).reduce((e, a) => !e || c(e, a) ? a : e, 0)) && r[a]
        }, u = (e, a, d) => {
          var r = d ? s(e[a]) : e[a];
          return Object.keys(r).reduce((e, a) => !e || !r[e].loaded && c(e, a) ? a : e, 0)
        }, p = (e, a, d, r) => "Unsatisfied version " + d + " from " + (d && e[a][d].from) + " of shared singleton module " + a + " (required " + o(r) + ")", h = e => {
          throw new Error(e)
        }, m = e => {
          "undefined" != typeof console && console.warn && console.warn(e)
        }, y = (e, a, d) => d ? d() : ((e, a) => h("Shared module " + a + " doesn't exist in shared scope " + e))(e, a), v = (g = e => function(a, d, r, t, f) {
          var c = O.I(a);
          return c && c.then && !r ? c.then(e.bind(e, a, O.S[a], d, !1, t, f)) : e(a, O.S[a], d, r, t, f)
        })((e, a, d, r, t) => b(a, d) ? i(l(a, d, r)) : y(e, d, t)), w = g((e, a, d, r, t, f) => {
          if (!b(a, d)) return y(e, d, f);
          var c = u(a, d, r);
          return n(t, c) || m(p(a, d, c, t)), i(a[d][c])
        }), _ = {}, k = {
          4637: () => w("default", "react", !1, [1, 18, 2, 0], () => O.e(2581).then(() => () => O(22581))),
          84017: () => w("default", "react-dom", !1, [1, 18, 2, 0], () => O.e(162).then(() => () => O(30162))),
          42909: () => w("default", "@rsgweb/locale-tools", !1, [0], () => Promise.all([O.e(9512), O.e(2497), O.e(194)]).then(() => () => O(57813))),
          46252: () => w("default", "react-router-dom", !1, [1, 6, 30, 3], () => Promise.all([O.e(4269), O.e(4017)]).then(() => () => O(74269))),
          23727: () => v("footer", "@foundry/react", !1, () => Promise.all([O.e(3502), O.e(2497), O.e(359), O.e(4447)]).then(() => () => O(96651))),
          82199: () => w("default", "@rsgweb/rockstar-account", !1, [0], () => Promise.all([O.e(1622), O.e(6583), O.e(5997), O.e(3331), O.e(7892)]).then(() => () => O(27892))),
          76923: () => w("default", "@rsgweb/modules-core-user-action-menu", !1, [0], () => Promise.all([O.e(1622), O.e(3502), O.e(8999), O.e(5997), O.e(3331), O.e(913)]).then(() => () => O(43808))),
          13331: () => w("default", "@rsgweb/utils", !1, [0], () => Promise.all([O.e(9512), O.e(5519), O.e(6048)]).then(() => () => O(36048)))
        }, E = {
          1455: [23727, 82199],
          3331: [13331],
          4017: [84017],
          4637: [4637],
          5667: [76923],
          5688: [42909, 46252]
        }, S = {}, O.f.consumes = (e, a) => {
          O.o(E, e) && E[e].forEach(e => {
            if (O.o(_, e)) return a.push(_[e]);
            if (!S[e]) {
              var d = a => {
                _[e] = 0, O.m[e] = d => {
                  delete O.c[e], d.exports = a()
                }
              };
              S[e] = !0;
              var r = a => {
                delete _[e], O.m[e] = d => {
                  throw delete O.c[e], a
                }
              };
              try {
                var t = k[e]();
                t.then ? a.push(_[e] = t.then(d).catch(r)) : d(t)
              } catch (e) {
                r(e)
              }
            }
          })
        }, (() => {
          if ("undefined" != typeof document) {
            var e = {
              417: 0
            };
            O.f.miniCss = (a, d) => {
              e[a] ? d.push(e[a]) : 0 !== e[a] && {
                359: 1,
                913: 1,
                1455: 1,
                4447: 1,
                5667: 1
              } [a] && d.push(e[a] = (e => new Promise((a, d) => {
                var r = O.miniCssF(e),
                  t = O.p + r;
                if (((e, a) => {
                    for (var d = document.getElementsByTagName("link"), r = 0; r < d.length; r++) {
                      var t = (c = d[r]).getAttribute("data-href") || c.getAttribute("href");
                      if ("stylesheet" === c.rel && (t === e || t === a)) return c
                    }
                    var f = document.getElementsByTagName("style");
                    for (r = 0; r < f.length; r++) {
                      var c;
                      if ((t = (c = f[r]).getAttribute("data-href")) === e || t === a) return c
                    }
                  })(r, t)) return a();
                ((e, a, d, r, t) => {
                  var f = document.createElement("link");
                  f.rel = "stylesheet", f.type = "text/css", O.nc && (f.nonce = O.nc), f.onerror = f.onload = d => {
                    if (f.onerror = f.onload = null, "load" === d.type) r();
                    else {
                      var c = d && d.type,
                        o = d && d.target && d.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = c, n.request = o, f.parentNode && f.parentNode.removeChild(f), t(n)
                    }
                  }, f.href = a, document.head.appendChild(f)
                })(e, t, 0, a, d)
              }))(a).then(() => {
                e[a] = 0
              }, d => {
                throw delete e[a], d
              }))
            }
          }
        })(), (() => {
          var e = {
            417: 0
          };
          O.f.j = (a, d) => {
            var r = O.o(e, a) ? e[a] : void 0;
            if (0 !== r)
              if (r) d.push(r[2]);
              else if (/^(3331|4017|4637|5688)$/.test(a)) e[a] = 0;
            else {
              var t = new Promise((d, t) => r = e[a] = [d, t]);
              d.push(r[2] = t);
              var f = O.p + O.u(a),
                c = new Error;
              O.l(f, d => {
                if (O.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var t = d && ("load" === d.type ? "missing" : d.type),
                    f = d && d.target && d.target.src;
                  c.message = "Loading chunk " + a + " failed.\n(" + t + ": " + f + ")", c.name = "ChunkLoadError", c.type = t, c.request = f, r[1](c)
                }
              }, "chunk-" + a, a)
            }
          };
          var a = (a, d) => {
              var r, t, [f, c, o] = d,
                n = 0;
              if (f.some(a => 0 !== e[a])) {
                for (r in c) O.o(c, r) && (O.m[r] = c[r]);
                o && o(O)
              }
              for (a && a(d); n < f.length; n++) t = f[n], O.o(e, t) && e[t] && e[t][0](), e[t] = 0
            },
            d = self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || [];
          d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })(), O.nc = void 0, O(35649), O(98478)
      })())
    }
  }
});