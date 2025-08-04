try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f23bb2fb-f5fd-46d1-a3c8-4ff960a7eb22", e._sentryDebugIdIdentifier = "sentry-dbid-f23bb2fb-f5fd-46d1-a3c8-4ff960a7eb22")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, System.register([], (function(e, a) {
  return {
    execute: function() {
      e((() => {
        var e, r, t, d, c, f, o = {
            9944: (e, a, r) => {
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
            21998: (e, a, r) => {
              (0, r(82788).w)(1)
            },
            37389: (e, a, r) => {
              r(21998)
            },
            58157: (e, a, r) => {
              "use strict";
              var t = {
                  "./bootstrap": () => r.e(9583).then((() => () => r(39583))),
                  "./index": () => Promise.all([r.e(3974), r.e(2229), r.e(9623), r.e(6188), r.e(5966), r.e(9010), r.e(3581), r.e(2918), r.e(4156), r.e(9133)]).then((() => () => r(39133))),
                  "./tina": () => Promise.all([r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(9010), r.e(1907)]).then((() => () => r(91907))),
                  "./tinaBlockTemplates": () => Promise.all([r.e(2229), r.e(4853), r.e(6188), r.e(5966), r.e(9010), r.e(1907)]).then((() => () => r(91907)))
                },
                d = (e, a) => (r.R = a, a = r.o(t, e) ? t[e]() : Promise.resolve().then((() => {
                  throw new Error('Module "' + e + '" does not exist in container.')
                })), r.R = void 0, a),
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
            82788: (e, a, r) => {
              const t = r(9944).y;
              a.w = function(e) {
                if (e || (e = 1), !r.y.meta || !r.y.meta.url) throw console.error("__system_context__", r.y), Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");
                r.p = t(r.y.meta.url, e)
              }
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
        }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, b.t = function(a, t) {
          if (1 & t && (a = this(a)), 8 & t) return a;
          if ("object" == typeof a && a) {
            if (4 & t && a.__esModule) return a;
            if (16 & t && "function" == typeof a.then) return a
          }
          var d = Object.create(null);
          b.r(d);
          var c = {};
          e = e || [null, r({}), r([]), r(r)];
          for (var f = 2 & t && a;
            "object" == typeof f && !~e.indexOf(f); f = r(f)) Object.getOwnPropertyNames(f).forEach((e => c[e] = () => a[e]));
          return c.default = () => a, b.d(d, c), d
        }, b.d = (e, a) => {
          for (var r in a) b.o(a, r) && !b.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: a[r]
          })
        }, b.f = {}, b.e = e => Promise.all(Object.keys(b.f).reduce(((a, r) => (b.f[r](e, a), a)), [])), b.u = e => "js/" + {
          114: "69c2de50b5c88325ac76096aa01b57bf",
          131: "7532b4ee536e2bd6176f799f6463b9b0",
          204: "c79f2cf248741d3e6e9da2cf77a722c4",
          278: "4e5b2dd8c6c54ab27001631e69674495",
          299: "d481fee30d5ccd65fe5a825c865492c8",
          314: "7f4997106fa2821c373b244e0621f668",
          511: "6ce837dcbcbf1af81f39bcaf1a537762",
          662: "9a3be5fbeaea049791d47b3cef4a2083",
          824: "175f509fe4e8d01657d4a7bdaaae70e1",
          907: "8d8e10920990df2e00562dee1b603d21",
          954: "3f28c6c8c133a060a1312094a16d1255",
          1054: "ad247fff55e585660b4f6816ded3e4d0",
          1138: "73f9317cd1f38f061a0ba6f621a45870",
          1154: "1483448c54915b8f8f95adebc223ef08",
          1242: "23aa9741d6da69a502d489a1e618ccaa",
          1325: "988b207eac003f8c4d6280ab083fb74e",
          1822: "11ee3c7ea48d7a6075f71c89dd47a965",
          1868: "ce311e8a2c554bc6af1d0473a16d7492",
          1907: "cede4e1698f751e843aa0814f5044883",
          2156: "5fc779389ad9fdad3c08d04da963844d",
          2171: "71a2c9686179a5511cd66339525c372e",
          2221: "08fb7e08e0a7376d21a893bc511d3471",
          2243: "69d0cfb3eba8f4a47f0fdd45b1c00015",
          2315: "e4cffa818de144359d4d8236ff5b6f7a",
          2347: "a937ae2892c39dbe1c46a32a605d3c32",
          2365: "f4ef63623020ae8fc97adcfc9c1903eb",
          2398: "29a7f3094d2f1c69e0788e42f4496cb2",
          2466: "0267521e5063e009f981acd416eab4db",
          2642: "68f1c5f00dfafcf9e8dd1d8cf7e8afdc",
          2678: "072ba768e79aed14f387f495b273053c",
          2698: "f7f0748ded3faf5bdaef88a653699cee",
          2864: "ffa532099e444a6fecb2a9b02329c947",
          3034: "73d0b04e87ffde9b0c99fb55295032b0",
          3197: "1a9a6ad0f33e58645bb92c663aaa9171",
          3343: "58b8be77653ea69ff8b665de38726503",
          3370: "bf6af5bef96a8dfab2bad7d4a75fb2af",
          3401: "afc8bd41f9d1660c1ab0ad9a4e77017d",
          3475: "e33dc4de0d8c87326c49a9ee6be8a362",
          3486: "4a99deaa8b88a1f7c9a6ec360db76e5a",
          3697: "0dba841d006d70361a58d848d85fd068",
          3885: "60bc23697cd0fc099f7338f18187da2e",
          3941: "9d30afa4923fbc1b604d9839f37fa08d",
          3974: "e7bedf0a5b49c094c1dd8e0b8f47662a",
          4011: "d641cd13c69be6b31068518a43c8ba3c",
          4145: "6928a6cb06e3c4b04eabf97bf1b697b9",
          4156: "54f1546b46b6ae77cbdc51f75c4d72ed",
          4528: "88faabcad9d99784f3b539460b3512b2",
          4621: "8940f9167af96e3fa341d06530092d82",
          4700: "5e5cffc428bcc60960e9564330227656",
          4710: "9144994c94c09baf155cc9739812342f",
          4731: "59b19e22e59d49f32cf84d7e21520636",
          4799: "2922eca41693d8c9be2259161be5e206",
          4851: "3c1afad00c34061d88eb28dbc1d9b2ae",
          4861: "f6d8f594ecd3cd7b449e4f37073e0071",
          4913: "b2f58be2f7658d109d75e6c2c5e0112b",
          5018: "a6fd992d2e888d6b3dc5e857862ab64c",
          5233: "b17f06d70fb6552e1c60663df89d2247",
          5259: "5203e8675445a4e96838c0deaeb36681",
          5440: "72c2644bd4b4cb9b0784c7b97bd1a5c3",
          5526: "9f219c6184af83a606d5c97e9ae6b215",
          5530: "2e8ca9a11172b959c2afdde31e0d3f11",
          5639: "6c8d77ea05f4805f319ff5776e111d33",
          5663: "dfee4293cfb467c121ac26f40c309e81",
          5742: "b41699e1fe1db34a1b9906b81d466196",
          5830: "0e52037a10d14f128d71d35bf6578aae",
          5832: "04f70251f247f0c138660b4e6c37362d",
          6019: "db48271ed1c286a9e82d5a2e6c3e690b",
          6267: "3fafb4a4cb8ca7778b0ff0ada6f1a208",
          6280: "b176cd0621d483b18ebc580bad063f13",
          6285: "168a17c0495da4d3d0d9ab89caa42f22",
          6361: "04f612d4c02ecad0261c558c26b73455",
          6664: "a3d6eb665490b4c85d8411a1ed6b70bf",
          6806: "80dd229580b31014aba178427118be81",
          6871: "92c97ef3f925cb29e6e67deae4568fd0",
          6879: "fd377536883ce7382fabf09106a837ab",
          6891: "fd55d32c297e9b3ecfe24c366d1afed5",
          6997: "2a7034df4929085f845bff635cd8d0af",
          7010: "5c13403baaffd029831188c3fc77c559",
          7073: "db08bde01a14ccf3b454691b030d8c27",
          7354: "d007bc8119e8085e3c5e0e95246d9b99",
          7413: "5dadcc6591eed253ecbe44c26c6353df",
          7436: "202ba4e3d8d4c6e87e56eb7d37f44ce3",
          7452: "9442d8e2c33c76864b640f6acd29a66a",
          7453: "955574758963b5c9125dd7052c02cca4",
          7823: "9e153e60773aacf590ef24a800c30ac3",
          7851: "b02268adbc5fa601cb030be934af4c92",
          7970: "863e4aace97a0ca82cd6311478f37de1",
          8258: "2b40ec75935fc114f37ace7574c2d823",
          8272: "289364544921fa52b8d22745d995d2dc",
          8342: "c3880bf9836ac9d57a3d6ea7268e545e",
          8391: "6d916ec6e4f09a4f9d5b101da3e117db",
          8699: "f836be88c2fb357a40d6996a2abc4c20",
          8755: "6c084b16a207ec222c2abe40306f518b",
          8773: "7a461858f4377b3eef4e1b19d72366bf",
          8880: "7c6c96c0302529ad23531a37428cafce",
          8970: "f8468b475674f702912e5085a95a6126",
          9022: "7443688e8539c65f4d7723a61e7678a8",
          9028: "f37cd8f30a7cba7feb640605f7e9c778",
          9126: "1ef10a53e60b90ced642faa6ebe9dbe1",
          9133: "8bec0d549c3ad8fa80a1c0a8dc07d668",
          9252: "49dfca1531a460da30e417b7a9f4dfb2",
          9368: "a215fe954ee6913ec988c1f54403f456",
          9377: "4a777f56a92628a295bedaedf966f838",
          9489: "7efa3c2892326626a60badfdf04792c3",
          9583: "32466bc430e3431c1daf5ee3d2fac26a",
          9615: "6dc5335a52dcbcd19336aae2c70bda7c",
          9728: "5c1979ec0cc88d62fa6d89da89daf622",
          9794: "c316c39b1e3f43f763d669262c86b2d8",
          9936: "6680a8e2be58ebff9b0cbed4cb46cb77",
          9990: "fa328a88dbbfa16f8adcde65c212801d"
        } [e] + ".js", b.miniCssF = e => "css/" + {
          1325: "38e1b65ed42810a0761da8831cc88ac9",
          1907: "e1ecfbd5d60b0822f094e505eee8adf4",
          4156: "d0cc3573b112630833aa0e224d9ef931",
          7354: "38e1b65ed42810a0761da8831cc88ac9",
          7851: "a126229ede95b503bfddbd53efcedae3",
          9133: "721e303b208c5f38763aab7a2a9ed1eb"
        } [e] + ".css", b.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")()
          } catch (e) {
            if ("object" == typeof window) return window
          }
        }(), b.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), t = {}, d = "@rockstargames/modules-core-videoplayer:", b.l = (e, a, r, c) => {
          if (t[e]) t[e].push(a);
          else {
            var f, o;
            if (void 0 !== r)
              for (var n = document.getElementsByTagName("script"), s = 0; s < n.length; s++) {
                var i = n[s];
                if (i.getAttribute("src") == e || i.getAttribute("data-webpack") == d + r) {
                  f = i;
                  break
                }
              }
            f || (o = !0, (f = document.createElement("script")).charset = "utf-8", f.timeout = 120, b.nc && f.setAttribute("nonce", b.nc), f.setAttribute("data-webpack", d + r), f.src = e), t[e] = [a];
            var l = (a, r) => {
                f.onerror = f.onload = null, clearTimeout(u);
                var d = t[e];
                if (delete t[e], f.parentNode && f.parentNode.removeChild(f), d && d.forEach((e => e(r))), a) return a(r)
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
            var t = f[e];
            if (!(r.indexOf(t) >= 0)) {
              if (r.push(t), t.p) return a.push(t.p);
              var d = a => {
                  a || (a = new Error("Container missing")), "string" == typeof a.message && (a.message += '\nwhile loading "' + t[1] + '" from ' + t[2]), b.m[e] = () => {
                    throw a
                  }, t.p = 0
                },
                c = (e, r, c, f, o, n) => {
                  try {
                    var b = e(r, c);
                    if (!b || !b.then) return o(b, f, n);
                    var s = b.then((e => o(e, f)), d);
                    if (!n) return s;
                    a.push(t.p = s)
                  } catch (e) {
                    d(e)
                  }
                },
                o = (e, a, d) => c(a.get, t[1], r, 0, n, d),
                n = a => {
                  t.p = 1, b.m[e] = e => {
                    e.exports = a()
                  }
                };
              c(b, t[2], 0, 0, ((e, a, r) => e ? c(b.I, t[0], 0, e, o, r) : d()), 1)
            }
          }))
        }, (() => {
          b.S = {};
          var e = {},
            a = {};
          b.I = (r, t) => {
            t || (t = []);
            var d = a[r];
            if (d || (d = a[r] = {}), !(t.indexOf(d) >= 0)) {
              if (t.push(d), e[r]) return e[r];
              b.o(b.S, r) || (b.S[r] = {});
              var c = b.S[r],
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
                n = [];
              return "default" === r && (o("@gsap/react", "2.1.2", (() => Promise.all([b.e(2229), b.e(3581), b.e(7823)]).then((() => () => b(27823))))), o("@popperjs/core", "2.11.8", (() => b.e(8258).then((() => () => b(18258))))), o("@rsgweb/locale-tools", "1.0.0", (() => Promise.all([b.e(2315), b.e(2229), b.e(1154)]).then((() => () => b(67439))))), o("@rsgweb/modules-core-agegate", "0.0.0", (() => Promise.all([b.e(8342), b.e(2229), b.e(5966), b.e(2918), b.e(7354)]).then((() => () => b(27354))))), o("@rsgweb/rockstar-account", "0.0.0", (() => Promise.all([b.e(3401), b.e(4145), b.e(2229), b.e(9623), b.e(6188), b.e(5966), b.e(511), b.e(9252)]).then((() => () => b(66871))))), o("@rsgweb/utils", "1.0.0", (() => Promise.all([b.e(3401), b.e(2229), b.e(9623), b.e(6188), b.e(511), b.e(954)]).then((() => () => b(81635))))), o("graphql", "16.11.0", (() => b.e(5440).then((() => () => b(55440))))), o("gsap", "0.0.0", (() => b.e(5526).then((() => () => b(65526))))), o("hammerjs", "2.0.8", (() => b.e(2698).then((() => () => b(32698))))), o("lodash", "4.17.21", (() => b.e(9489).then((() => () => b(99489))))), o("react-dom", "18.3.1", (() => Promise.all([b.e(6019), b.e(2229)]).then((() => () => b(66019))))), o("react-popper", "2.3.0", (() => Promise.all([b.e(2229), b.e(4853), b.e(9005), b.e(9794)]).then((() => () => b(99794))))), o("react-router-dom", "6.30.0", (() => Promise.all([b.e(9728), b.e(2229), b.e(4853)]).then((() => () => b(49728))))), o("react", "18.3.1", (() => b.e(1138).then((() => () => b(11138))))), o("uuid", "9.0.1", (() => b.e(8699).then((() => () => b(8699)))))), e[r] = n.length ? Promise.all(n).then((() => e[r] = 1)) : 1
            }
          }
        })(), (() => {
          var e;
          b.g.importScripts && (e = b.g.location + "");
          var a = b.g.document;
          if (!e && a && (a.currentScript && "SCRIPT" === a.currentScript.tagName.toUpperCase() && (e = a.currentScript.src), !e)) {
            var r = a.getElementsByTagName("script");
            if (r.length)
              for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e));) e = r[t--].src
          }
          if (!e) throw new Error("Automatic publicPath is not supported in this browser");
          e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), b.p = e
        })(), (() => {
          var e = e => {
              var a = e => e.split(".").map((e => +e == e ? +e : e)),
                r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                t = r[1] ? a(r[1]) : [];
              return r[2] && (t.length++, t.push.apply(t, a(r[2]))), r[3] && (t.push([]), t.push.apply(t, a(r[3]))), t
            },
            a = e => {
              var r = e[0],
                t = "";
              if (1 === e.length) return "*";
              if (r + .5) {
                t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
                for (var d = 1, c = 1; c < e.length; c++) d--, t += "u" == (typeof(o = e[c]))[0] ? "-" : (d > 0 ? "." : "") + (d = 2, o);
                return t
              }
              var f = [];
              for (c = 1; c < e.length; c++) {
                var o = e[c];
                f.push(0 === o ? "not(" + n() + ")" : 1 === o ? "(" + n() + " || " + n() + ")" : 2 === o ? f.pop() + " " + f.pop() : a(o))
              }
              return n();

              function n() {
                return f.pop().replace(/^\((.+)\)$/, "$1")
              }
            },
            r = (a, t) => {
              if (0 in a) {
                t = e(t);
                var d = a[0],
                  c = d < 0;
                c && (d = -d - 1);
                for (var f = 0, o = 1, n = !0;; o++, f++) {
                  var b, s, i = o < a.length ? (typeof a[o])[0] : "";
                  if (f >= t.length || "o" == (s = (typeof(b = t[f]))[0])) return !n || ("u" == i ? o > d && !c : "" == i != c);
                  if ("u" == s) {
                    if (!n || "u" != i) return !1
                  } else if (n)
                    if (i == s)
                      if (o <= d) {
                        if (b != a[o]) return !1
                      } else {
                        if (c ? b > a[o] : b < a[o]) return !1;
                        b != a[o] && (n = !1)
                      }
                  else if ("s" != i && "n" != i) {
                    if (c || o <= d) return !1;
                    n = !1, o--
                  } else {
                    if (o <= d || s < i != c) return !1;
                    n = !1
                  } else "s" != i && "n" != i && (n = !1, o--)
                }
              }
              var l = [],
                u = l.pop.bind(l);
              for (f = 1; f < a.length; f++) {
                var p = a[f];
                l.push(1 == p ? u() | u() : 2 == p ? u() & u() : p ? r(p, t) : !u())
              }
              return !!u()
            },
            t = (a, t, d, c) => {
              var f = c ? (e => Object.keys(e).reduce(((a, r) => (e[r].eager && (a[r] = e[r]), a)), {}))(a[t]) : a[t];
              return (t = Object.keys(f).reduce(((a, t) => !r(d, t) || a && !((a, r) => {
                a = e(a), r = e(r);
                for (var t = 0;;) {
                  if (t >= a.length) return t < r.length && "u" != (typeof r[t])[0];
                  var d = a[t],
                    c = (typeof d)[0];
                  if (t >= r.length) return "u" == c;
                  var f = r[t],
                    o = (typeof f)[0];
                  if (c != o) return "o" == c && "n" == o || "s" == o || "u" == c;
                  if ("o" != c && "u" != c && d != f) return d < f;
                  t++
                }
              })(a, t) ? a : t), 0)) && f[t]
            },
            d = e => {
              throw new Error(e)
            },
            c = (e => function(a, r, t, d, c) {
              var f = b.I(a);
              return f && f.then && !t ? f.then(e.bind(e, a, b.S[a], r, !1, d, c)) : e(a, b.S[a], r, t, d, c)
            })(((e, r, c, f, o, n) => {
              if (!((e, a) => e && b.o(e, a))(r, c)) return ((e, a, r) => r ? r() : ((e, a) => d("Shared module " + a + " doesn't exist in shared scope " + e))(e, a))(e, c, n);
              var s, i = t(r, c, o, f);
              return i ? ((s = i).loaded = 1, s.get()) : n ? n() : void d(((e, r, t, d, c) => {
                var f = e[t];
                return "No satisfying version (" + a(d) + ")" + (c ? " for eager consumption" : "") + " of shared module " + t + " found in shared scope " + r + ".\nAvailable versions: " + Object.keys(f).map((e => e + " from " + f[e].from)).join(", ")
              })(r, e, c, o, f))
            })),
            f = {},
            o = {
              62229: () => c("default", "react", !1, [1, 18, 2, 0], (() => b.e(1138).then((() => () => b(11138))))),
              9623: () => c("default", "react-router-dom", !1, [1, 6, 11, 2], (() => Promise.all([b.e(9728), b.e(4853)]).then((() => () => b(49728))))),
              16188: () => c("default", "lodash", !1, [1, 4, 17, 21], (() => b.e(9489).then((() => () => b(99489))))),
              95966: () => c("default", "@rsgweb/utils", !1, [1, "workspace:^"], (() => Promise.all([b.e(3401), b.e(9623), b.e(6188), b.e(511)]).then((() => () => b(81635))))),
              81569: () => c("default", "uuid", !1, [1, 9, 0, 0], (() => b.e(8699).then((() => () => b(8699))))),
              81788: () => c("default", "@rsgweb/locale-tools", !1, [1, "workspace:^"], (() => Promise.all([b.e(2315), b.e(8773)]).then((() => () => b(67439))))),
              13581: () => c("default", "gsap", !1, [1, "workspace:^"], (() => b.e(5526).then((() => () => b(65526))))),
              2918: () => c("default", "@rsgweb/rockstar-account", !1, [1, "workspace:^"], (() => Promise.all([b.e(3401), b.e(4145), b.e(9623), b.e(6188), b.e(511), b.e(6871)]).then((() => () => b(66871))))),
              4848: () => c("default", "hammerjs", !1, [1, 2, 0, 8], (() => b.e(2698).then((() => () => b(32698))))),
              27654: () => c("default", "@gsap/react", !1, [1, 2, 1, 0], (() => b.e(204).then((() => () => b(27823))))),
              47224: () => c("default", "@rsgweb/modules-core-agegate", !1, [1, "workspace:^"], (() => Promise.all([b.e(8342), b.e(1325)]).then((() => () => b(27354))))),
              75971: () => c("default", "react-popper", !1, [1, 2, 3, 0], (() => Promise.all([b.e(4853), b.e(9005), b.e(7413)]).then((() => () => b(99794))))),
              44853: () => c("default", "react-dom", !1, [1, 18, 2, 0], (() => b.e(6019).then((() => () => b(66019))))),
              16565: () => c("default", "graphql", !1, [1, 16, 9, 0], (() => b.e(5440).then((() => () => b(55440))))),
              9005: () => c("default", "@popperjs/core", !1, [1, 2, 11, 7], (() => b.e(8258).then((() => () => b(18258)))))
            },
            n = {
              511: [16565],
              2229: [62229],
              2918: [2918],
              3581: [13581],
              4156: [4848, 27654, 47224, 75971],
              4853: [44853],
              5966: [95966],
              6188: [16188],
              9005: [9005],
              9010: [81569, 81788],
              9623: [9623]
            },
            s = {};
          b.f.consumes = (e, a) => {
            b.o(n, e) && n[e].forEach((e => {
              if (b.o(f, e)) return a.push(f[e]);
              if (!s[e]) {
                var r = a => {
                  f[e] = 0, b.m[e] = r => {
                    delete b.c[e], r.exports = a()
                  }
                };
                s[e] = !0;
                var t = a => {
                  delete f[e], b.m[e] = r => {
                    throw delete b.c[e], a
                  }
                };
                try {
                  var d = o[e]();
                  d.then ? a.push(f[e] = d.then(r).catch(t)) : r(d)
                } catch (e) {
                  t(e)
                }
              }
            }))
          }
        })(), (() => {
          if ("undefined" != typeof document) {
            var e = {
              7614: 0
            };
            b.f.miniCss = (a, r) => {
              e[a] ? r.push(e[a]) : 0 !== e[a] && {
                1325: 1,
                1907: 1,
                4156: 1,
                7354: 1,
                7851: 1,
                9133: 1
              } [a] && r.push(e[a] = (e => new Promise(((a, r) => {
                var t = b.miniCssF(e),
                  d = b.p + t;
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
                  c.rel = "stylesheet", c.type = "text/css", b.nc && (c.nonce = b.nc), c.onerror = c.onload = r => {
                    if (c.onerror = c.onload = null, "load" === r.type) t();
                    else {
                      var f = r && r.type,
                        o = r && r.target && r.target.href || a,
                        n = new Error("Loading CSS chunk " + e + " failed.\n(" + f + ": " + o + ")");
                      n.name = "ChunkLoadError", n.code = "CSS_CHUNK_LOAD_FAILED", n.type = f, n.request = o, c.parentNode && c.parentNode.removeChild(c), d(n)
                    }
                  }, c.href = a, document.head.appendChild(c)
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
            7614: 0
          };
          b.f.j = (a, r) => {
            var t = b.o(e, a) ? e[a] : void 0;
            if (0 !== t)
              if (t) r.push(t[2]);
              else if (/^(9(005|010|623)|2229|2918|3581|4853|5966|6188)$/.test(a)) e[a] = 0;
            else {
              var d = new Promise(((r, d) => t = e[a] = [r, d]));
              r.push(t[2] = d);
              var c = b.p + b.u(a),
                f = new Error;
              b.l(c, (r => {
                if (b.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = r && ("load" === r.type ? "missing" : r.type),
                    c = r && r.target && r.target.src;
                  f.message = "Loading chunk " + a + " failed.\n(" + d + ": " + c + ")", f.name = "ChunkLoadError", f.type = d, f.request = c, t[1](f)
                }
              }), "chunk-" + a, a)
            }
          };
          var a = (a, r) => {
              var t, d, c = r[0],
                f = r[1],
                o = r[2],
                n = 0;
              if (c.some((a => 0 !== e[a]))) {
                for (t in f) b.o(f, t) && (b.m[t] = f[t]);
                o && o(b)
              }
              for (a && a(r); n < c.length; n++) d = c[n], b.o(e, d) && e[d] && e[d][0](), e[d] = 0
            },
            r = self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || [];
          r.forEach(a.bind(null, 0)), r.push = a.bind(null, r.push.bind(r))
        })(), b(37389), b(58157)
      })())
    }
  }
}));