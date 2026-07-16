try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ace53178-7148-4808-b41d-efd7e173d326", e._sentryDebugIdIdentifier = "sentry-dbid-ace53178-7148-4808-b41d-efd7e173d326")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [1777], {
    76597(e) {
      "use strict";
      var t = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var t = Object.prototype.toString.call(e);
            return "[object RegExp]" === t || "[object Date]" === t || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e) ? s((r = e, Array.isArray(r) ? [] : {}), e, t) : e;
        var r
      }

      function i(e, t, r) {
        return e.concat(t).map(function(e) {
          return n(e, r)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
            return Object.propertyIsEnumerable.call(e, t)
          }) : []
        }(e))
      }

      function a(e, t) {
        try {
          return t in e
        } catch (e) {
          return !1
        }
      }

      function s(e, r, u) {
        (u = u || {}).arrayMerge = u.arrayMerge || i, u.isMergeableObject = u.isMergeableObject || t, u.cloneUnlessOtherwiseSpecified = n;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? u.arrayMerge(e, r, u) : function(e, t, r) {
          var i = {};
          return r.isMergeableObject(e) && o(e).forEach(function(t) {
            i[t] = n(e[t], r)
          }), o(t).forEach(function(o) {
            (function(e, t) {
              return a(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
            })(e, o) || (a(e, o) && r.isMergeableObject(t[o]) ? i[o] = function(e, t) {
              if (!t.customMerge) return s;
              var r = t.customMerge(e);
              return "function" == typeof r ? r : s
            }(o, r)(e[o], t[o], r) : i[o] = n(t[o], r))
          }), i
        }(e, r, u) : n(r, u)
      }
      s.all = function(e, t) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return s(e, r, t)
        }, {})
      };
      var u = s;
      e.exports = u
    },
    6988(e, t, r) {
      "use strict";
      (n = r(4637)) && "object" == typeof n && "default" in n && n.default;
      var n, i = r(97727),
        o = new i,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        u = o.getEngine(),
        c = o.getOS(),
        l = o.getUA();
      var d = "mobile",
        f = "tablet",
        b = "Chrome",
        p = "Firefox",
        w = "Opera",
        h = "Yandex",
        m = "Safari",
        g = "Internet Explorer",
        y = "Edge",
        v = "Chromium",
        k = "IE",
        x = "Mobile Safari",
        _ = "MIUI Browser",
        S = "Samsung Browser",
        O = "iOS",
        A = "Android",
        E = "Windows Phone",
        C = "Windows",
        j = "Mac OS",
        T = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        M = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        N = function(e) {
          var t = M();
          return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        P = function(e) {
          return e.type === d
        },
        z = function(e) {
          return e.type === f
        },
        R = function(e) {
          var t = e.type;
          return t === d || t === f
        },
        D = function(e) {
          return "smarttv" === e.type
        },
        I = function(e) {
          return void 0 === e.type
        },
        U = function(e) {
          return "wearable" === e.type
        },
        V = function(e) {
          return "console" === e.type
        },
        q = function(e) {
          return "embedded" === e.type
        },
        B = function(e) {
          var t = e.vendor;
          return T(t)
        },
        L = function(e) {
          var t = e.model;
          return T(t)
        },
        W = function(e) {
          var t = e.type;
          return T(t, "browser")
        },
        F = function(e) {
          return e.name === A
        },
        H = function(e) {
          return e.name === C
        },
        $ = function(e) {
          return e.name === j
        },
        G = function(e) {
          return e.name === E
        },
        K = function(e) {
          return e.name === O
        },
        X = function(e) {
          var t = e.version;
          return T(t)
        },
        J = function(e) {
          var t = e.name;
          return T(t)
        },
        Y = function(e) {
          return e.name === b
        },
        Z = function(e) {
          return e.name === p
        },
        Q = function(e) {
          return e.name === v
        },
        ee = function(e) {
          return e.name === y
        },
        te = function(e) {
          return e.name === h
        },
        re = function(e) {
          var t = e.name;
          return t === m || t === x
        },
        ne = function(e) {
          return e.name === x
        },
        ie = function(e) {
          return e.name === w
        },
        oe = function(e) {
          var t = e.name;
          return t === g || t === k
        },
        ae = function(e) {
          return e.name === _
        },
        se = function(e) {
          return e.name === S
        },
        ue = function(e) {
          var t = e.version;
          return T(t)
        },
        ce = function(e) {
          var t = e.major;
          return T(t)
        },
        le = function(e) {
          var t = e.name;
          return T(t)
        },
        de = function(e) {
          var t = e.name;
          return T(t)
        },
        fe = function(e) {
          var t = e.version;
          return T(t)
        },
        be = function() {
          var e = M(),
            t = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof t && /electron/.test(t)
        },
        pe = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        we = function() {
          var e = M();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        he = function() {
          return N("iPad")
        },
        me = function() {
          return N("iPhone")
        },
        ge = function() {
          return N("iPod")
        },
        ye = function(e) {
          return T(e)
        };
      var ve = D(s),
        ke = (V(s), U(s)),
        xe = (q(s), ne(a) || he(), Q(a), R(s) || he(), P(s), z(s) || he(), I(s), I(s), F(c), G(c), K(c) || he(), Y(a), Z(a), re(a), ie(a), oe(a)),
        _e = (X(c), J(c), ue(a), ce(a), le(a)),
        Se = (B(s), L(s), de(u), fe(u), ye(l), ee(a) || pe(l), te(a), W(s), we(), he(), me(), ge(), be(), pe(l), ee(a) && !pe(l));
      H(c), $(c), ae(a), se(a);
      t.C0 = _e, t.lT = xe, t.n8 = Se, t.UX = ve, t.w = ke
    },
    60154(e, t, r) {
      "use strict";
      r.d(t, {
        zy: () => l
      });
      var n, i, o = r(4637),
        a = r.t(o, 2);
      ! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(n || (n = {})),
      function(e) {
        e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
      }(i || (i = {})), new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]), Error;
      const s = ["post", "put", "patch", "delete"],
        u = (new Set(s), ["get", ...s]);
      new Set(u), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), Symbol("deferred");
      const c = o.createContext(null);

      function l() {
        return null != o.useContext(c) || function(e, t) {
          if (!1 === e || null == e) throw new Error(t)
        }(!1), o.useContext(c).location
      }
      o.Component, a.startTransition, new Promise(() => {}), o.Component
    },
    7072(e, t, r) {
      "use strict";
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, r(4637))
    },
    97727(e, t, r) {
      var n;
      ! function(i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          c = "string",
          l = "major",
          d = "model",
          f = "name",
          b = "type",
          p = "vendor",
          w = "version",
          h = "architecture",
          m = "console",
          g = "mobile",
          y = "tablet",
          v = "smarttv",
          k = "wearable",
          x = "embedded",
          _ = "Amazon",
          S = "Apple",
          O = "ASUS",
          A = "BlackBerry",
          E = "Browser",
          C = "Chrome",
          j = "Firefox",
          T = "Google",
          M = "Honor",
          N = "Huawei",
          P = "LG",
          z = "Microsoft",
          R = "Motorola",
          D = "Nvidia",
          I = "OnePlus",
          U = "Opera",
          V = "OPPO",
          q = "Samsung",
          B = "Sharp",
          L = "Sony",
          W = "Xiaomi",
          F = "Zebra",
          H = "Facebook",
          $ = "Chromium OS",
          G = "Mac OS",
          K = " Browser",
          X = function(e) {
            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
            return t
          },
          J = function(e, t) {
            return typeof e === c && -1 !== Y(t).indexOf(Y(e))
          },
          Y = function(e) {
            return e.toLowerCase()
          },
          Z = function(e, t) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
          },
          Q = function(e, t) {
            for (var r, n, i, s, c, l, d = 0; d < t.length && !c;) {
              var f = t[d],
                b = t[d + 1];
              for (r = n = 0; r < f.length && !c && f[r];)
                if (c = f[r++].exec(e))
                  for (i = 0; i < b.length; i++) l = c[++n], typeof(s = b[i]) === u && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              d += 2
            }
          },
          ee = function(e, t) {
            for (var r in t)
              if (typeof t[r] === u && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (J(t[r][n], e)) return "?" === r ? o : r
              } else if (J(t[r], e)) return "?" === r ? o : r;
            return t.hasOwnProperty("*") ? t["*"] : e
          },
          te = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          re = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [w, [f, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [w, [f, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [f, w],
              [/opios[\/ ]+([\w\.]+)/i],
              [w, [f, U + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [w, [f, U + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [w, [f, U]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [w, [f, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [w, [f, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [f, w],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [w, [f, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [w, [f, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [w, [f, "UC" + E]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [w, [f, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [w, [f, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [w, [f, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [w, [f, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [w, [f, "Smart Lenovo " + E]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1 Secure " + E], w
              ],
              [/\bfocus\/([\w\.]+)/i],
              [w, [f, j + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [w, [f, U + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [w, [f, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [w, [f, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [w, [f, U + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [w, [f, "MIUI" + K]],
              [/fxios\/([\w\.-]+)/i],
              [w, [f, j]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [w, [f, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1Browser"], w
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [f, /(.+)/, "$1" + K], w
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [w, [f, q + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [w, [f, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [f, "Sogou Mobile"], w
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [f, w],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [f],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [w, f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [f, H], w
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [f, w],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [w, [f, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [w, [f, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [w, [f, C + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [f, C + " WebView"], w
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [w, [f, "Android " + E]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, w],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [w, [f, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [w, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [f, [w, ee, {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
              }]],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, w],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [f, "Netscape"], w
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [f, w],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [w, [f, j + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [f, [w, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [f, [w, /master.|lts./, ""]]
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [
                [h, "amd64"]
              ],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [
                [h, "ia32"]
              ],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [
                [h, "arm64"]
              ],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [
                [h, "armhf"]
              ],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [
                [h, "arm"]
              ],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [
                [h, /ower/, "", Y]
              ],
              [/ sun4\w[;\)]/i],
              [
                [h, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [h, Y]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [d, [p, q],
                [b, y]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [d, [p, q],
                [b, g]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [p, S],
                [b, g]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [d, [p, S],
                [b, y]
              ],
              [/(macintosh);/i],
              [d, [p, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [p, B],
                [b, g]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [d, [p, M],
                [b, y]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [d, [p, M],
                [b, g]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [d, [p, N],
                [b, y]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [d, [p, N],
                [b, g]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [p, W],
                [b, y]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [d, /_/g, " "],
                [p, W],
                [b, g]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [d, [p, V],
                [b, g]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [d, [p, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": V
                }],
                [b, y]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [p, "Vivo"],
                [b, g]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [p, "Realme"],
                [b, g]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [d, [p, R],
                [b, g]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [p, R],
                [b, y]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [p, P],
                [b, y]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [d, [p, P],
                [b, g]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [d, [p, "Lenovo"],
                [b, y]
              ],
              [/(nokia) (t[12][01])/i],
              [p, d, [b, y]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [d, /_/g, " "],
                [b, g],
                [p, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [d, [p, T],
                [b, y]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [p, T],
                [b, g]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [d, [p, L],
                [b, g]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [p, L],
                [b, y]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [d, [p, I],
                [b, g]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [d, [p, _],
                [b, y]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [p, _],
                [b, g]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, p, [b, y]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [p, A],
                [b, g]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [d, [p, O],
                [b, y]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [p, O],
                [b, g]
              ],
              [/(nexus 9)/i],
              [d, [p, "HTC"],
                [b, y]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [p, [d, /_/g, " "],
                [b, g]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [d, [p, "TCL"],
                [b, y]
              ],
              [/(itel) ((\w+))/i],
              [
                [p, Y], d, [b, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [p, "Acer"],
                [b, y]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [p, "Meizu"],
                [b, g]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [p, "Ulefone"],
                [b, g]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [d, [p, "Energizer"],
                [b, g]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [p, "Cat"],
                [b, g]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [p, "Smartfren"],
                [b, g]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [p, "Nothing"],
                [b, g]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [d, [p, "Archos"],
                [b, y]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [d, [p, "Archos"],
                [b, g]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [p, d, [b, y]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [p, d, [b, g]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [p, d, [b, y]],
              [/(surface duo)/i],
              [d, [p, z],
                [b, y]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [p, "Fairphone"],
                [b, g]
              ],
              [/(u304aa)/i],
              [d, [p, "AT&T"],
                [b, g]
              ],
              [/\bsie-(\w*)/i],
              [d, [p, "Siemens"],
                [b, g]
              ],
              [/\b(rct\w+) b/i],
              [d, [p, "RCA"],
                [b, y]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [p, "Dell"],
                [b, y]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [p, "Verizon"],
                [b, y]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [p, "Barnes & Noble"],
                [b, y]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [d, [p, "NuVision"],
                [b, y]
              ],
              [/\b(k88) b/i],
              [d, [p, "ZTE"],
                [b, y]
              ],
              [/\b(nx\d{3}j) b/i],
              [d, [p, "ZTE"],
                [b, g]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [p, "Swiss"],
                [b, g]
              ],
              [/\b(zur\d{3}) b/i],
              [d, [p, "Swiss"],
                [b, y]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [p, "Zeki"],
                [b, y]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [p, "Dragon Touch"], d, [b, y]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [p, "Insignia"],
                [b, y]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [p, "NextBook"],
                [b, y]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [p, "Voice"], d, [b, g]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [p, "LvTel"], d, [b, g]
              ],
              [/\b(ph-1) /i],
              [d, [p, "Essential"],
                [b, g]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [p, "Envizen"],
                [b, y]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [p, "MachSpeed"],
                [b, y]
              ],
              [/\btu_(1491) b/i],
              [d, [p, "Rotor"],
                [b, y]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [d, [p, D],
                [b, y]
              ],
              [/(sprint) (\w+)/i],
              [p, d, [b, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [p, z],
                [b, g]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [p, F],
                [b, y]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [p, F],
                [b, g]
              ],
              [/smart-tv.+(samsung)/i],
              [p, [b, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [p, q],
                [b, v]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, P],
                [b, v]
              ],
              [/(apple) ?tv/i],
              [p, [d, S + " TV"],
                [b, v]
              ],
              [/crkey/i],
              [
                [d, C + "cast"],
                [p, T],
                [b, v]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [p, _],
                [b, v]
              ],
              [/(shield \w+ tv)/i],
              [d, [p, D],
                [b, v]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [p, B],
                [b, v]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [p, L],
                [b, v]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [d, [p, W],
                [b, v]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [p, d, [b, v]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [p, Z],
                [d, Z],
                [b, v]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [d, [b, v]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [b, v]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, d, [b, m]],
              [/droid.+; (shield)( bui|\))/i],
              [d, [p, D],
                [b, m]
              ],
              [/(playstation \w+)/i],
              [d, [p, L],
                [b, m]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [p, z],
                [b, m]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [d, [p, q],
                [b, k]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [p, d, [b, k]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [d, [p, V],
                [b, k]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [p, S],
                [b, k]
              ],
              [/(opwwe\d{3})/i],
              [d, [p, I],
                [b, k]
              ],
              [/(moto 360)/i],
              [d, [p, R],
                [b, k]
              ],
              [/(smartwatch 3)/i],
              [d, [p, L],
                [b, k]
              ],
              [/(g watch r)/i],
              [d, [p, P],
                [b, k]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [p, F],
                [b, k]
              ],
              [/droid.+; (glass) \d/i],
              [d, [p, T],
                [b, k]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [p, d, [b, k]],
              [/; (quest( \d| pro)?)/i],
              [d, [p, H],
                [b, k]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [b, x]],
              [/(aeobc)\b/i],
              [d, [p, _],
                [b, x]
              ],
              [/(homepod).+mac os/i],
              [d, [p, S],
                [b, x]
              ],
              [/windows iot/i],
              [
                [b, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [d, [b, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [b, y]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [b, y]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [b, g]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [d, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [w, [f, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [f, w],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [w, [f, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [f, w],
              [/ladybird\//i],
              [
                [f, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [w, f]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, w],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [f, [w, ee, te]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [w, ee, te],
                [f, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [w, /_/g, "."],
                [f, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [f, G],
                [w, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [w, f],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [f, /(.+)/, "$1 Touch"], w
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [f, w],
              [/\(bb(10);/i],
              [w, [f, A]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [w, [f, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [w, [f, j + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [w, [f, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [w, [f, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [w, [f, C + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [f, $], w
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [f, w],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [f, "Solaris"], w
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [f, w]
            ]
          },
          ne = function(e, t) {
            if (typeof e === u && (t = e, e = o), !(this instanceof ne)) return new ne(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              m = r && r.userAgentData ? r.userAgentData : o,
              v = t ? function(e, t) {
                var r = {};
                for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                return r
              }(re, t) : re,
              k = r && r.userAgent == n;
            return this.getBrowser = function() {
              var e, t = {};
              return t[f] = o, t[w] = o, Q.call(t, n, v.browser), t[l] = typeof(e = t[w]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, k && r && r.brave && typeof r.brave.isBrave == a && (t[f] = "Brave"), t
            }, this.getCPU = function() {
              var e = {};
              return e[h] = o, Q.call(e, n, v.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[p] = o, e[d] = o, e[b] = o, Q.call(e, n, v.device), k && !e[b] && m && m.mobile && (e[b] = g), k && "Macintosh" == e[d] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[d] = "iPad", e[b] = y), e
            }, this.getEngine = function() {
              var e = {};
              return e[f] = o, e[w] = o, Q.call(e, n, v.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[f] = o, e[w] = o, Q.call(e, n, v.os), k && !e[f] && m && m.platform && "Unknown" != m.platform && (e[f] = m.platform.replace(/chrome os/i, $).replace(/macos/i, G)), e
            }, this.getResult = function() {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            }, this.getUA = function() {
              return n
            }, this.setUA = function(e) {
              return n = typeof e === c && e.length > 500 ? Z(e, 500) : e, this
            }, this.setUA(n), this
          };
        ne.VERSION = "1.0.41", ne.BROWSER = X([f, w, l]), ne.CPU = X([h]), ne.DEVICE = X([d, p, b, m, g, v, y, k, x]), ne.ENGINE = ne.OS = X([f, w]), typeof t !== s ? (e.exports && (t = e.exports = ne), t.UAParser = ne) : r.amdO ? (n = function() {
          return ne
        }.call(t, r, t, e)) === o || (e.exports = n) : typeof i !== s && (i.UAParser = ne);
        var ie = typeof i !== s && (i.jQuery || i.Zepto);
        if (ie && !ie.ua) {
          var oe = new ne;
          ie.ua = oe.getResult(), ie.ua.get = function() {
            return oe.getUA()
          }, ie.ua.set = function(e) {
            oe.setUA(e);
            var t = oe.getResult();
            for (var r in t) ie.ua[r] = t[r]
          }
        }
      }("object" == typeof window ? window : this)
    },
    91540(e, t, r) {
      "use strict";
      r.d(t, {
        MS: () => u,
        UT: () => c,
        WR: () => s,
        bl: () => i
      });
      var n = r(59131),
        i = new n.DX,
        o = new WeakMap;

      function a(e) {
        var t = o.get(e);
        return t || o.set(e, t = {
          vars: new Set,
          dep: (0, n.yN)()
        }), t
      }

      function s(e) {
        a(e).vars.forEach(function(t) {
          return t.forgetCache(e)
        })
      }

      function u(e) {
        a(e).vars.forEach(function(t) {
          return t.attachCache(e)
        })
      }

      function c(e) {
        var t = new Set,
          r = new Set,
          n = function(s) {
            if (arguments.length > 0) {
              if (e !== s) {
                e = s, t.forEach(function(e) {
                  a(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                });
                var u = Array.from(r);
                r.clear(), u.forEach(function(t) {
                  return t(e)
                })
              }
            } else {
              var c = i.getValue();
              c && (o(c), a(c).dep(n))
            }
            return e
          };
        n.onNextChange = function(e) {
          return r.add(e),
            function() {
              r.delete(e)
            }
        };
        var o = n.attachCache = function(e) {
          return t.add(e), a(e).vars.add(n), n
        };
        return n.forgetCache = function(e) {
          return t.delete(e)
        }, n
      }
    },
    18849(e, t, r) {
      "use strict";
      r.d(t, {
        q: () => o
      });
      var n = r(7072),
        i = r(2776);

      function o(e) {
        return (0, i.r)(n.useCallback(function(t) {
          return e.onNextChange(function r() {
            t(), e.onNextChange(r)
          })
        }, [e]), e, e)
      }
    },
    2776(e, t, r) {
      "use strict";
      let n;
      r.d(t, {
        r: () => u
      });
      var i = r(43589),
        o = r(7072),
        a = r(18841),
        s = !1,
        u = (n || (n = r.t(o, 2))).useSyncExternalStore || function(e, t, r) {
          var n = t();
          !1 === globalThis.__DEV__ || s || n === t() || (s = !0, !1 !== globalThis.__DEV__ && i.V1.error(91));
          var u = o.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            l = u[0].inst,
            d = u[1];
          return a.JR ? o.useLayoutEffect(function() {
            Object.assign(l, {
              value: n,
              getSnapshot: t
            }), c(l) && d({
              inst: l
            })
          }, [e, n, t]) : Object.assign(l, {
            value: n,
            getSnapshot: t
          }), o.useEffect(function() {
            return c(l) && d({
              inst: l
            }), e(function() {
              c(l) && d({
                inst: l
              })
            })
          }, [e]), n
        };

      function c(e) {
        var t = e.value,
          r = e.getSnapshot;
        try {
          return t !== r()
        } catch (e) {
          return !0
        }
      }
    },
    18841(e, t, r) {
      "use strict";
      r.d(t, {
        En: () => a,
        JR: () => d,
        Sw: () => c,
        et: () => o,
        ol: () => s,
        uJ: () => u
      });
      var n = r(43589),
        i = "ReactNative" == (0, n.no)(function() {
          return navigator.product
        }),
        o = "function" == typeof WeakMap && !(i && !r.g.HermesInternal),
        a = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        u = s && Symbol.asyncIterator,
        c = "function" == typeof(0, n.no)(function() {
          return window.document.createElement
        }),
        l = (0, n.no)(function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        }) || !1,
        d = (c || i) && !l
    },
    27580(e, t, r) {
      "use strict";
      r.d(t, {
        v: () => i
      });
      var n = new Map;

      function i(e) {
        var t = n.get(e) || 1;
        return n.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
      }
    },
    94604(e, t, r) {
      "use strict";
      r.d(t, {
        p: () => i
      });
      var n = r(27580);

      function i(e, t) {
        void 0 === t && (t = 0);
        var r = (0, n.v)("stringifyForDisplay");
        return JSON.stringify(e, function(e, t) {
          return void 0 === t ? r : t
        }, t).split(JSON.stringify(r)).join("<undefined>")
      }
    },
    41906(e, t, r) {
      "use strict";
      var n = r(65469);
      const i = (0, n.n)(function() {
        return globalThis
      }) || (0, n.n)(function() {
        return window
      }) || (0, n.n)(function() {
        return self
      }) || (0, n.n)(function() {
        return r.g
      }) || (0, n.n)(function() {
        return n.n.constructor("return this")()
      });
      r.d(t, ["A", 0, i])
    },
    43589(e, t, r) {
      "use strict";
      r.d(t, {
        Sf: () => o.A,
        V1: () => n.V1,
        no: () => i.n,
        vA: () => n.vA
      });
      var n = r(34416),
        i = r(65469),
        o = r(41906);
      globalThis.__DEV__
    },
    34416(e, t, r) {
      "use strict";
      r.d(t, {
        V1: () => m,
        vA: () => g
      });
      var n = r(51177),
        i = "Invariant Violation",
        o = Object.setPrototypeOf,
        a = void 0 === o ? function(e, t) {
          return e.__proto__ = t, e
        } : o,
        s = function(e) {
          function t(r) {
            void 0 === r && (r = i);
            var n = e.call(this, "number" == typeof r ? i + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
            return n.framesToPop = 1, n.name = i, a(n, t.prototype), n
          }
          return (0, n.C6)(t, e), t
        }(Error);

      function u(e, t) {
        if (!e) throw new s(t)
      }
      var c, l = ["debug", "log", "warn", "error", "silent"],
        d = l.indexOf("log");

      function f(e) {
        return function() {
          if (l.indexOf(e) >= d) return (console[e] || console.log).apply(console, arguments)
        }
      }(c = u || (u = {})).debug = f("debug"), c.log = f("log"), c.warn = f("warn"), c.error = f("error");
      var b = r(95141),
        p = r(41906),
        w = r(94604);

      function h(e) {
        return function(t) {
          for (var r = [], n = 1; n < arguments.length; n++) r[n - 1] = arguments[n];
          if ("number" == typeof t) {
            var i = t;
            (t = k(i)) || (t = x(i, r), r = [])
          }
          e.apply(void 0, [t].concat(r))
        }
      }
      var m = Object.assign(function(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        e || u(e, k(t, r) || x(t, r))
      }, {
        debug: h(u.debug),
        log: h(u.log),
        warn: h(u.warn),
        error: h(u.error)
      });

      function g(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return new s(k(e, t) || x(e, t))
      }
      var y = Symbol.for("ApolloErrorMessageHandler_" + b.r);

      function v(e) {
        if ("string" == typeof e) return e;
        try {
          return (0, w.p)(e, 2).slice(0, 1e3)
        } catch (e) {
          return "<non-serializable>"
        }
      }

      function k(e, t) {
        if (void 0 === t && (t = []), e) return p.A[y] && p.A[y](e, t.map(v))
      }

      function x(e, t) {
        if (void 0 === t && (t = []), e) return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
          version: b.r,
          message: e,
          args: t.map(v)
        })))
      }
    },
    65469(e, t, r) {
      "use strict";

      function n(e) {
        try {
          return e()
        } catch (e) {}
      }
      r.d(t, {
        n: () => n
      })
    },
    95141(e, t, r) {
      "use strict";
      r.d(t, {
        r: () => n
      });
      var n = "3.14.1"
    },
    79190(e, t, r) {
      "use strict";

      function n() {}
      r.d(t, {
        C: () => i
      });
      class i {
        constructor(e = 1 / 0, t = n) {
          this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
        }
        has(e) {
          return this.map.has(e)
        }
        get(e) {
          const t = this.getNode(e);
          return t && t.value
        }
        get size() {
          return this.map.size
        }
        getNode(e) {
          const t = this.map.get(e);
          if (t && t !== this.newest) {
            const {
              older: e,
              newer: r
            } = t;
            r && (r.older = e), e && (e.newer = r), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = r)
          }
          return t
        }
        set(e, t) {
          let r = this.getNode(e);
          return r ? r.value = t : (r = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(e, r), r.value)
        }
        clean() {
          for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
        }
        delete(e) {
          const t = this.map.get(e);
          return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
        }
      }
    },
    87582(e, t, r) {
      "use strict";
      r.d(t, {
        b: () => s
      });
      const n = () => Object.create(null),
        {
          forEach: i,
          slice: o
        } = Array.prototype,
        {
          hasOwnProperty: a
        } = Object.prototype;
      class s {
        constructor(e = !0, t = n) {
          this.weakness = e, this.makeData = t
        }
        lookup() {
          return this.lookupArray(arguments)
        }
        lookupArray(e) {
          let t = this;
          return i.call(e, e => t = t.getChildTrie(e)), a.call(t, "data") ? t.data : t.data = this.makeData(o.call(e))
        }
        peek() {
          return this.peekArray(arguments)
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            const n = t.mapFor(e[r], !1);
            t = n && n.get(e[r])
          }
          return t && t.data
        }
        remove() {
          return this.removeArray(arguments)
        }
        removeArray(e) {
          let t;
          if (e.length) {
            const r = e[0],
              n = this.mapFor(r, !1),
              i = n && n.get(r);
            i && (t = i.removeArray(o.call(e, 1)), i.data || i.weak || i.strong && i.strong.size || n.delete(r))
          } else t = this.data, delete this.data;
          return t
        }
        getChildTrie(e) {
          const t = this.mapFor(e, !0);
          let r = t.get(e);
          return r || t.set(e, r = new s(this.weakness, this.makeData)), r
        }
        mapFor(e, t) {
          return this.weakness && function(e) {
            switch (typeof e) {
              case "object":
                if (null === e) break;
              case "function":
                return !0
            }
            return !1
          }(e) ? this.weak || (t ? this.weak = new WeakMap : void 0) : this.strong || (t ? this.strong = new Map : void 0)
        }
      }
    },
    5942(e, t, r) {
      "use strict";
      const n = e => async (t, {
        outputFormat: r = "hex"
      } = {}) => {
        "string" == typeof t && (t = (new globalThis.TextEncoder).encode(t));
        const n = await globalThis.crypto.subtle.digest(e, t);
        return "hex" === r ? (e => {
          const t = new DataView(e);
          let r = "";
          for (let e = 0; e < t.byteLength; e += 4) r += t.getUint32(e).toString(16).padStart(8, "0");
          return r
        })(n) : n
      }, i = (n("SHA-1"), n("SHA-256"));
      n("SHA-384"), n("SHA-512"), r.d(t, ["sc", 0, i])
    },
    62885(e, t, r) {
      "use strict";

      function n(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) "__proto__" !== n && (e[n] = r[n])
        }
        return e
      }
      r.d(t, {
        A: () => i
      });
      var i = function e(t, r) {
        function i(e, i, o) {
          if ("undefined" != typeof document) {
            "number" == typeof(o = n({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
            return document.cookie = e + "=" + t.write(i, e) + a
          }
        }
        return Object.create({
          set: i,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var r = document.cookie ? document.cookie.split("; ") : [], n = {}, i = 0; i < r.length; i++) {
                var o = r[i].split("="),
                  a = o.slice(1).join("=");
                try {
                  var s = decodeURIComponent(o[0]);
                  if (s in n || (n[s] = t.read(a, s)), e === s) break
                } catch (e) {}
              }
              return e ? n[e] : n
            }
          },
          remove: function(e, t) {
            i(e, "", n({}, t, {
              expires: -1
            }))
          },
          withAttributes: function(t) {
            return e(this.converter, n({}, this.attributes, t))
          },
          withConverter: function(t) {
            return e(n({}, this.converter, t), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(r)
          },
          converter: {
            value: Object.freeze(t)
          }
        })
      }({
        read: function(e) {
          return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
        },
        write: function(e) {
          return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
        }
      }, {
        path: "/"
      })
    },
    4242(e, t, r) {
      "use strict";
      r.d(t, {
        s: () => i
      });
      class n extends Error {}

      function i(e, t) {
        if ("string" != typeof e) throw new n("Invalid token specified: must be a string");
        t || (t = {});
        const r = !0 === t.header ? 0 : 1,
          i = e.split(".")[r];
        if ("string" != typeof i) throw new n(`Invalid token specified: missing part #${r+1}`);
        let o;
        try {
          o = function(e) {
            let t = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (t.length % 4) {
              case 0:
                break;
              case 2:
                t += "==";
                break;
              case 3:
                t += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, t) => {
                  let r = t.charCodeAt(0).toString(16).toUpperCase();
                  return r.length < 2 && (r = "0" + r), "%" + r
                }))
              }(t)
            } catch (e) {
              return atob(t)
            }
          }(i)
        } catch (e) {
          throw new n(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new n(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)
        }
      }
      n.prototype.name = "InvalidTokenError"
    },
    82088(e, t, r) {
      "use strict";
      var n = r(30570),
        i = r(61105),
        o = r(48348),
        a = r(6700),
        s = r(99651),
        u = r(7269),
        c = r(61044),
        l = r(10312),
        d = Object.prototype.hasOwnProperty;
      r.d(t, ["A", 0, function(e) {
        if (null == e) return !0;
        if ((0, s.A)(e) && ((0, a.A)(e) || "string" == typeof e || "function" == typeof e.splice || (0, u.A)(e) || (0, l.A)(e) || (0, o.A)(e))) return !e.length;
        var t = (0, i.A)(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if ((0, c.A)(e)) return !(0, n.A)(e).length;
        for (var r in e)
          if (d.call(e, r)) return !1;
        return !0
      }])
    },
    59131(e, t, r) {
      "use strict";
      r.d(t, {
        DX: () => d,
        yN: () => D,
        LV: () => q
      });
      var n = r(87582),
        i = r(79190);
      let o = null;
      const a = {};
      let s = 1;

      function u(e) {
        try {
          return e()
        } catch (e) {}
      }
      const c = "@wry/context:Slot",
        l = u(() => globalThis) || u(() => r.g) || Object.create(null),
        d = l[c] || Array[c] || function(e) {
          try {
            Object.defineProperty(l, c, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return e
          }
        }(class {
          constructor() {
            this.id = ["slot", s++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = o; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === a) break;
                return e !== o && (o.slots[this.id] = t), !0
              } return o && (o.slots[this.id] = a), !1
          }
          getValue() {
            if (this.hasValue()) return o.slots[this.id]
          }
          withValue(e, t, r, n) {
            const i = {
                __proto__: null,
                [this.id]: e
              },
              a = o;
            o = {
              parent: a,
              slots: i
            };
            try {
              return t.apply(n, r)
            } finally {
              o = a
            }
          }
          static bind(e) {
            const t = o;
            return function() {
              const r = o;
              try {
                return o = t, e.apply(this, arguments)
              } finally {
                o = r
              }
            }
          }
          static noContext(e, t, r) {
            if (!o) return e.apply(r, t); {
              const n = o;
              try {
                return o = null, e.apply(r, t)
              } finally {
                o = n
              }
            }
          }
        }),
        {
          bind: f,
          noContext: b
        } = d,
        p = new d,
        {
          hasOwnProperty: w
        } = Object.prototype,
        h = Array.from || function(e) {
          const t = [];
          return e.forEach(e => t.push(e)), t
        };

      function m(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const g = [];

      function y(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function v(e, t) {
        const r = e.length;
        return r > 0 && r === t.length && e[r - 1] === t[r - 1]
      }

      function k(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }

      function x(e) {
        return e.slice(0)
      }
      class _ {
        constructor(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++_.count
        }
        peek() {
          if (1 === this.value.length && !A(this)) return S(this), this.value[0]
        }
        recompute(e) {
          return y(!this.recomputing, "already recomputing"), S(this), A(this) ? function(e, t) {
            return P(e), p.withValue(e, O, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  m(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, A(e) || C(e)
              }(e), k(e.value)
          }(this, e) : k(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, E(this), m(this))
        }
        dispose() {
          this.setDirty(), P(this), j(this, (e, t) => {
            e.setDirty(), z(e, this)
          })
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = g.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (h(this.deps).forEach(e => e.delete(this)), this.deps.clear(), g.push(this.deps), this.deps = null)
        }
      }

      function S(e) {
        const t = p.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), A(e) ? T(t, e) : M(t, e), t
      }

      function O(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: r
        } = e;
        let n;
        r && 1 === e.value.length && (n = x(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), r && n && !v(n, e.value)) try {
            e.value[0] = r(e.value[0], n[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function A(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function E(e) {
        j(e, T)
      }

      function C(e) {
        j(e, M)
      }

      function j(e, t) {
        const r = e.parents.size;
        if (r) {
          const n = h(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e)
        }
      }

      function T(e, t) {
        y(e.childValues.has(t)), y(A(t));
        const r = !A(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = g.pop() || new Set;
        e.dirtyChildren.add(t), r && E(e)
      }

      function M(e, t) {
        y(e.childValues.has(t)), y(!A(t));
        const r = e.childValues.get(t);
        0 === r.length ? e.childValues.set(t, x(t.value)) : v(r, t.value) || e.setDirty(), N(e, t), A(e) || C(e)
      }

      function N(e, t) {
        const r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (g.length < 100 && g.push(r), e.dirtyChildren = null))
      }

      function P(e) {
        e.childValues.size > 0 && e.childValues.forEach((t, r) => {
          z(e, r)
        }), e.forgetDeps(), y(null === e.dirtyChildren)
      }

      function z(e, t) {
        t.parents.delete(e), e.childValues.delete(t), N(e, t)
      }
      _.count = 0;
      const R = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function D(e) {
        const t = new Map,
          r = e && e.subscribe;

        function n(e) {
          const n = p.getValue();
          if (n) {
            let i = t.get(e);
            i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (m(i), i.unsubscribe = r(e))
          }
        }
        return n.dirty = function(e, r) {
          const n = t.get(e);
          if (n) {
            const i = r && w.call(R, r) ? r : "setDirty";
            h(n).forEach(e => e[i]()), t.delete(e), m(n)
          }
        }, n
      }
      let I;

      function U(...e) {
        return (I || (I = new n.b("function" == typeof WeakMap))).lookupArray(e)
      }
      const V = new Set;

      function q(e, {
        max: t = Math.pow(2, 16),
        keyArgs: r,
        makeCacheKey: n = U,
        normalizeResult: o,
        subscribe: a,
        cache: s = i.C
      } = Object.create(null)) {
        const u = "function" == typeof s ? new s(t, e => e.dispose()) : s,
          c = function() {
            const t = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let i = u.get(t);
            i || (u.set(t, i = new _(e)), i.normalizeResult = o, i.subscribe = a, i.forget = () => u.delete(t));
            const s = i.recompute(Array.prototype.slice.call(arguments));
            return u.set(t, i), V.add(u), p.hasValue() || (V.forEach(e => e.clean()), V.clear()), s
          };

        function l(e) {
          const t = e && u.get(e);
          t && t.setDirty()
        }

        function d(e) {
          const t = e && u.get(e);
          if (t) return t.peek()
        }

        function f(e) {
          return !!e && u.delete(e)
        }
        return Object.defineProperty(c, "size", {
          get: () => u.size,
          configurable: !1,
          enumerable: !1
        }), Object.freeze(c.options = {
          max: t,
          keyArgs: r,
          makeCacheKey: n,
          normalizeResult: o,
          subscribe: a,
          cache: u
        }), c.dirtyKey = l, c.dirty = function() {
          l(n.apply(null, arguments))
        }, c.peekKey = d, c.peek = function() {
          return d(n.apply(null, arguments))
        }, c.forgetKey = f, c.forget = function() {
          return f(n.apply(null, arguments))
        }, c.makeCacheKey = n, c.getKey = r ? function() {
          return n.apply(null, r.apply(null, arguments))
        } : n, Object.freeze(c)
      }
    },
    51177(e, t, r) {
      "use strict";
      r.d(t, {
        C6: () => i,
        Cl: () => o,
        Tt: () => a,
        YH: () => u,
        fX: () => c,
        sH: () => s
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e
        }, o.apply(this, arguments)
      };

      function a(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
        }
        return r
      }

      function s(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
          function a(e) {
            try {
              u(n.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              u(n.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function u(e) {
            var t;
            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(a, s)
          }
          u((n = n.apply(e, t || [])).next())
        })
      }

      function u(e, t) {
        var r, n, i, o = {
            label: 0,
            sent: function() {
              if (1 & i[0]) throw i[1];
              return i[1]
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function s(s) {
          return function(u) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                if (r = 1, n && (i = 2 & s[0] ? n.return : s[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, s[1])).done) return i;
                switch (n = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                  case 0:
                  case 1:
                    i = s;
                    break;
                  case 4:
                    return o.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    o.label++, n = s[1], s = [0];
                    continue;
                  case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                      o.label = s[1];
                      break
                    }
                    if (6 === s[0] && o.label < i[1]) {
                      o.label = i[1], i = s;
                      break
                    }
                    if (i && o.label < i[2]) {
                      o.label = i[2], o.ops.push(s);
                      break
                    }
                    i[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                s = t.call(e, o)
              } catch (e) {
                s = [6, e], n = 0
              } finally {
                r = i = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, u])
          }
        }
      }

      function c(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++) !n && i in t || (n || (n = Array.prototype.slice.call(t, 0, i)), n[i] = t[i]);
        return e.concat(n || Array.prototype.slice.call(t))
      }
      Object.create, Object.create
    }
  }
]);