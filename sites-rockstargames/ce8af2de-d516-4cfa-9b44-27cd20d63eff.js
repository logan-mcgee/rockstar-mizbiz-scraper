try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    i = (new e.Error).stack;
  i && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[i] = "ce8af2de-d516-4cfa-9b44-27cd20d63eff", e._sentryDebugIdIdentifier = "sentry-dbid-ce8af2de-d516-4cfa-9b44-27cd20d63eff")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1396], {
    79465(e) {
      "use strict";
      var i = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var i = Object.prototype.toString.call(e);
            return "[object RegExp]" === i || "[object Date]" === i || function(e) {
              return e.$$typeof === r
            }(e)
          }(e)
        },
        r = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function t(e, i) {
        return !1 !== i.clone && i.isMergeableObject(e) ? s((r = e, Array.isArray(r) ? [] : {}), e, i) : e;
        var r
      }

      function n(e, i, r) {
        return e.concat(i).map(function(e) {
          return t(e, r)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(i) {
            return Object.propertyIsEnumerable.call(e, i)
          }) : []
        }(e))
      }

      function a(e, i) {
        try {
          return i in e
        } catch (e) {
          return !1
        }
      }

      function s(e, r, b) {
        (b = b || {}).arrayMerge = b.arrayMerge || n, b.isMergeableObject = b.isMergeableObject || i, b.cloneUnlessOtherwiseSpecified = t;
        var c = Array.isArray(r);
        return c === Array.isArray(e) ? c ? b.arrayMerge(e, r, b) : function(e, i, r) {
          var n = {};
          return r.isMergeableObject(e) && o(e).forEach(function(i) {
            n[i] = t(e[i], r)
          }), o(i).forEach(function(o) {
            (function(e, i) {
              return a(e, i) && !(Object.hasOwnProperty.call(e, i) && Object.propertyIsEnumerable.call(e, i))
            })(e, o) || (a(e, o) && r.isMergeableObject(i[o]) ? n[o] = function(e, i) {
              if (!i.customMerge) return s;
              var r = i.customMerge(e);
              return "function" == typeof r ? r : s
            }(o, r)(e[o], i[o], r) : n[o] = t(i[o], r))
          }), n
        }(e, r, b) : t(r, b)
      }
      s.all = function(e, i) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, r) {
          return s(e, r, i)
        }, {})
      };
      var b = s;
      e.exports = b
    },
    81878(e, i, r) {
      "use strict";
      (t = r(71127)) && "object" == typeof t && "default" in t && t.default;
      var t, n = r(40139),
        o = new n,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        b = o.getEngine(),
        c = o.getOS(),
        u = o.getUA();
      var d = "mobile",
        w = "tablet",
        l = "Chrome",
        f = "Firefox",
        p = "Opera",
        m = "Yandex",
        g = "Safari",
        h = "Internet Explorer",
        v = "Edge",
        y = "Chromium",
        k = "IE",
        x = "Mobile Safari",
        S = "MIUI Browser",
        _ = "Samsung Browser",
        T = "iOS",
        A = "Android",
        O = "Windows Phone",
        j = "Windows",
        E = "Mac OS",
        C = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        M = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        I = function(e) {
          var i = M();
          return i && i.platform && (-1 !== i.platform.indexOf(e) || "MacIntel" === i.platform && i.maxTouchPoints > 1 && !window.MSStream)
        },
        U = function(e) {
          return e.type === d
        },
        z = function(e) {
          return e.type === w
        },
        q = function(e) {
          var i = e.type;
          return i === d || i === w
        },
        P = function(e) {
          return "smarttv" === e.type
        },
        N = function(e) {
          return void 0 === e.type
        },
        R = function(e) {
          return "wearable" === e.type
        },
        B = function(e) {
          return "console" === e.type
        },
        D = function(e) {
          return "embedded" === e.type
        },
        $ = function(e) {
          var i = e.vendor;
          return C(i)
        },
        L = function(e) {
          var i = e.model;
          return C(i)
        },
        V = function(e) {
          var i = e.type;
          return C(i, "browser")
        },
        F = function(e) {
          return e.name === A
        },
        H = function(e) {
          return e.name === j
        },
        G = function(e) {
          return e.name === E
        },
        W = function(e) {
          return e.name === O
        },
        X = function(e) {
          return e.name === T
        },
        Z = function(e) {
          var i = e.version;
          return C(i)
        },
        Y = function(e) {
          var i = e.name;
          return C(i)
        },
        K = function(e) {
          return e.name === l
        },
        Q = function(e) {
          return e.name === f
        },
        J = function(e) {
          return e.name === y
        },
        ee = function(e) {
          return e.name === v
        },
        ie = function(e) {
          return e.name === m
        },
        re = function(e) {
          var i = e.name;
          return i === g || i === x
        },
        te = function(e) {
          return e.name === x
        },
        ne = function(e) {
          return e.name === p
        },
        oe = function(e) {
          var i = e.name;
          return i === h || i === k
        },
        ae = function(e) {
          return e.name === S
        },
        se = function(e) {
          return e.name === _
        },
        be = function(e) {
          var i = e.version;
          return C(i)
        },
        ce = function(e) {
          var i = e.major;
          return C(i)
        },
        ue = function(e) {
          var i = e.name;
          return C(i)
        },
        de = function(e) {
          var i = e.name;
          return C(i)
        },
        we = function(e) {
          var i = e.version;
          return C(i)
        },
        le = function() {
          var e = M(),
            i = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof i && /electron/.test(i)
        },
        fe = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        pe = function() {
          var e = M();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        me = function() {
          return I("iPad")
        },
        ge = function() {
          return I("iPhone")
        },
        he = function() {
          return I("iPod")
        },
        ve = function(e) {
          return C(e)
        };
      var ye = P(s),
        ke = (B(s), R(s)),
        xe = (D(s), te(a) || me(), J(a), q(s) || me(), U(s), z(s) || me(), N(s), N(s), F(c), W(c), X(c) || me(), K(a), Q(a), re(a), ne(a), oe(a)),
        Se = (Z(c), Y(c), be(a), ce(a), ue(a)),
        _e = ($(s), L(s), de(b), we(b), ve(u), ee(a) || fe(u), ie(a), V(s), pe(), me(), ge(), he(), le(), fe(u), ee(a) && !fe(u));
      H(c), G(c), ae(a), se(a);
      i.C0 = Se, i.lT = xe, i.n8 = _e, i.UX = ye, i.w = ke
    },
    40139(e, i, r) {
      var t;
      ! function(n, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          b = "object",
          c = "string",
          u = "major",
          d = "model",
          w = "name",
          l = "type",
          f = "vendor",
          p = "version",
          m = "architecture",
          g = "console",
          h = "mobile",
          v = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          S = "Amazon",
          _ = "Apple",
          T = "ASUS",
          A = "BlackBerry",
          O = "Browser",
          j = "Chrome",
          E = "Firefox",
          C = "Google",
          M = "Honor",
          I = "Huawei",
          U = "LG",
          z = "Microsoft",
          q = "Motorola",
          P = "Nvidia",
          N = "OnePlus",
          R = "Opera",
          B = "OPPO",
          D = "Samsung",
          $ = "Sharp",
          L = "Sony",
          V = "Xiaomi",
          F = "Zebra",
          H = "Facebook",
          G = "Chromium OS",
          W = "Mac OS",
          X = " Browser",
          Z = function(e) {
            for (var i = {}, r = 0; r < e.length; r++) i[e[r].toUpperCase()] = e[r];
            return i
          },
          Y = function(e, i) {
            return typeof e === c && -1 !== K(i).indexOf(K(e))
          },
          K = function(e) {
            return e.toLowerCase()
          },
          Q = function(e, i) {
            if (typeof e === c) return e = e.replace(/^\s\s*/, ""), typeof i === s ? e : e.substring(0, 500)
          },
          J = function(e, i) {
            for (var r, t, n, s, c, u, d = 0; d < i.length && !c;) {
              var w = i[d],
                l = i[d + 1];
              for (r = t = 0; r < w.length && !c && w[r];)
                if (c = w[r++].exec(e))
                  for (n = 0; n < l.length; n++) u = c[++t], typeof(s = l[n]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : o : this[s[0]] = u ? s[1].call(this, u, s[2]) : o : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : o) : this[s] = u || o;
              d += 2
            }
          },
          ee = function(e, i) {
            for (var r in i)
              if (typeof i[r] === b && i[r].length > 0) {
                for (var t = 0; t < i[r].length; t++)
                  if (Y(i[r][t], e)) return "?" === r ? o : r
              } else if (Y(i[r], e)) return "?" === r ? o : r;
            return i.hasOwnProperty("*") ? i["*"] : e
          },
          ie = {
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
              [p, [w, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [w, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [w, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [w, R + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [w, R + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [w, R]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [w, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [p, [w, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [w, p],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [p, [w, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [p, [w, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [w, "UC" + O]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [p, [w, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [w, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [w, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [p, [w, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [p, [w, "Smart Lenovo " + O]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [w, /(.+)/, "$1 Secure " + O], p
              ],
              [/\bfocus\/([\w\.]+)/i],
              [p, [w, E + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [w, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [w, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [w, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [w, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [w, "MIUI" + X]],
              [/fxios\/([\w\.-]+)/i],
              [p, [w, E]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [p, [w, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [w, /(.+)/, "$1Browser"], p
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [w, /(.+)/, "$1" + X], p
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [w, D + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [w, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [w, "Sogou Mobile"], p
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [w, p],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [w],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [p, w],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [w, H], p
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [w, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [w, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [p, [w, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [w, j + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [w, j + " WebView"], p
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [w, "Android " + O]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [w, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [w, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, w],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [w, [p, ee, {
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
              [w, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [w, "Netscape"], p
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [w, p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [w, E + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [w, [p, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [w, [p, /master.|lts./, ""]]
            ],
            cpu: [
              [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
              [
                [m, "amd64"]
              ],
              [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
              [
                [m, "ia32"]
              ],
              [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
              [
                [m, "arm64"]
              ],
              [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
              [
                [m, "armhf"]
              ],
              [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
              [
                [m, "arm"]
              ],
              [/((ppc|powerpc)(64)?)( mac|;|\))/i],
              [
                [m, /ower/, "", K]
              ],
              [/ sun4\w[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [m, K]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [d, [f, D],
                [l, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [d, [f, D],
                [l, h]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [d, [f, _],
                [l, h]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [d, [f, _],
                [l, v]
              ],
              [/(macintosh);/i],
              [d, [f, _]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [d, [f, $],
                [l, h]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [d, [f, M],
                [l, v]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [d, [f, M],
                [l, h]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [d, [f, I],
                [l, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [d, [f, I],
                [l, h]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [d, /_/g, " "],
                [f, V],
                [l, v]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [d, /_/g, " "],
                [f, V],
                [l, h]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [d, [f, B],
                [l, h]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [d, [f, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": B
                }],
                [l, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [d, [f, "Vivo"],
                [l, h]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [d, [f, "Realme"],
                [l, h]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [d, [f, q],
                [l, h]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [d, [f, q],
                [l, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [d, [f, U],
                [l, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [d, [f, U],
                [l, h]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [d, [f, "Lenovo"],
                [l, v]
              ],
              [/(nokia) (t[12][01])/i],
              [f, d, [l, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [d, /_/g, " "],
                [l, h],
                [f, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [d, [f, C],
                [l, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [d, [f, C],
                [l, h]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [d, [f, L],
                [l, h]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [d, "Xperia Tablet"],
                [f, L],
                [l, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [d, [f, N],
                [l, h]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [d, [f, S],
                [l, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [d, /(.+)/g, "Fire Phone $1"],
                [f, S],
                [l, h]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [d, f, [l, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [d, [f, A],
                [l, h]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [d, [f, T],
                [l, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [d, [f, T],
                [l, h]
              ],
              [/(nexus 9)/i],
              [d, [f, "HTC"],
                [l, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [f, [d, /_/g, " "],
                [l, h]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [d, [f, "TCL"],
                [l, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [f, K], d, [l, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [d, [f, "Acer"],
                [l, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [d, [f, "Meizu"],
                [l, h]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [d, [f, "Ulefone"],
                [l, h]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [d, [f, "Energizer"],
                [l, h]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [d, [f, "Cat"],
                [l, h]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [d, [f, "Smartfren"],
                [l, h]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [d, [f, "Nothing"],
                [l, h]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [d, [f, "Archos"],
                [l, v]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [d, [f, "Archos"],
                [l, h]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [f, d, [l, v]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [f, d, [l, h]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [f, d, [l, v]],
              [/(surface duo)/i],
              [d, [f, z],
                [l, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [d, [f, "Fairphone"],
                [l, h]
              ],
              [/(u304aa)/i],
              [d, [f, "AT&T"],
                [l, h]
              ],
              [/\bsie-(\w*)/i],
              [d, [f, "Siemens"],
                [l, h]
              ],
              [/\b(rct\w+) b/i],
              [d, [f, "RCA"],
                [l, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [d, [f, "Dell"],
                [l, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [d, [f, "Verizon"],
                [l, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [d, [f, "Barnes & Noble"],
                [l, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [d, [f, "NuVision"],
                [l, v]
              ],
              [/\b(k88) b/i],
              [d, [f, "ZTE"],
                [l, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [d, [f, "ZTE"],
                [l, h]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [d, [f, "Swiss"],
                [l, h]
              ],
              [/\b(zur\d{3}) b/i],
              [d, [f, "Swiss"],
                [l, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [d, [f, "Zeki"],
                [l, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [f, "Dragon Touch"], d, [l, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [d, [f, "Insignia"],
                [l, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [d, [f, "NextBook"],
                [l, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [f, "Voice"], d, [l, h]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [f, "LvTel"], d, [l, h]
              ],
              [/\b(ph-1) /i],
              [d, [f, "Essential"],
                [l, h]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [d, [f, "Envizen"],
                [l, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [d, [f, "MachSpeed"],
                [l, v]
              ],
              [/\btu_(1491) b/i],
              [d, [f, "Rotor"],
                [l, v]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [d, [f, P],
                [l, v]
              ],
              [/(sprint) (\w+)/i],
              [f, d, [l, h]],
              [/(kin\.[onetw]{3})/i],
              [
                [d, /\./g, " "],
                [f, z],
                [l, h]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [d, [f, F],
                [l, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [d, [f, F],
                [l, h]
              ],
              [/smart-tv.+(samsung)/i],
              [f, [l, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [d, /^/, "SmartTV"],
                [f, D],
                [l, y]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [f, U],
                [l, y]
              ],
              [/(apple) ?tv/i],
              [f, [d, _ + " TV"],
                [l, y]
              ],
              [/crkey/i],
              [
                [d, j + "cast"],
                [f, C],
                [l, y]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [d, [f, S],
                [l, y]
              ],
              [/(shield \w+ tv)/i],
              [d, [f, P],
                [l, y]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [d, [f, $],
                [l, y]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [d, [f, L],
                [l, y]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [d, [f, V],
                [l, y]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [f, d, [l, y]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [f, Q],
                [d, Q],
                [l, y]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [d, [l, y]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [l, y]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [f, d, [l, g]],
              [/droid.+; (shield)( bui|\))/i],
              [d, [f, P],
                [l, g]
              ],
              [/(playstation \w+)/i],
              [d, [f, L],
                [l, g]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [d, [f, z],
                [l, g]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [d, [f, D],
                [l, k]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [f, d, [l, k]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [d, [f, B],
                [l, k]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [d, [f, _],
                [l, k]
              ],
              [/(opwwe\d{3})/i],
              [d, [f, N],
                [l, k]
              ],
              [/(moto 360)/i],
              [d, [f, q],
                [l, k]
              ],
              [/(smartwatch 3)/i],
              [d, [f, L],
                [l, k]
              ],
              [/(g watch r)/i],
              [d, [f, U],
                [l, k]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [d, [f, F],
                [l, k]
              ],
              [/droid.+; (glass) \d/i],
              [d, [f, C],
                [l, k]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [f, d, [l, k]],
              [/; (quest( \d| pro)?)/i],
              [d, [f, H],
                [l, k]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [f, [l, x]],
              [/(aeobc)\b/i],
              [d, [f, S],
                [l, x]
              ],
              [/(homepod).+mac os/i],
              [d, [f, _],
                [l, x]
              ],
              [/windows iot/i],
              [
                [l, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [d, [l, h]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [d, [l, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [l, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [l, h]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [d, [f, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [w, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [w, p],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [w, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [w, p],
              [/ladybird\//i],
              [
                [w, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, w]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [w, p],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [w, [p, ee, ie]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [p, ee, ie],
                [w, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [p, /_/g, "."],
                [w, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [w, W],
                [p, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, w],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [w, /(.+)/, "$1 Touch"], p
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [w, p],
              [/\(bb(10);/i],
              [p, [w, A]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [p, [w, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [p, [w, E + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [w, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [w, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [w, j + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [w, G], p
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [w, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [w, "Solaris"], p
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [w, p]
            ]
          },
          te = function(e, i) {
            if (typeof e === b && (i = e, e = o), !(this instanceof te)) return new te(e, i).getResult();
            var r = typeof n !== s && n.navigator ? n.navigator : o,
              t = e || (r && r.userAgent ? r.userAgent : ""),
              g = r && r.userAgentData ? r.userAgentData : o,
              y = i ? function(e, i) {
                var r = {};
                for (var t in e) i[t] && i[t].length % 2 == 0 ? r[t] = i[t].concat(e[t]) : r[t] = e[t];
                return r
              }(re, i) : re,
              k = r && r.userAgent == t;
            return this.getBrowser = function() {
              var e, i = {};
              return i[w] = o, i[p] = o, J.call(i, t, y.browser), i[u] = typeof(e = i[p]) === c ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, k && r && r.brave && typeof r.brave.isBrave == a && (i[w] = "Brave"), i
            }, this.getCPU = function() {
              var e = {};
              return e[m] = o, J.call(e, t, y.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[f] = o, e[d] = o, e[l] = o, J.call(e, t, y.device), k && !e[l] && g && g.mobile && (e[l] = h), k && "Macintosh" == e[d] && r && typeof r.standalone !== s && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[d] = "iPad", e[l] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[w] = o, e[p] = o, J.call(e, t, y.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[w] = o, e[p] = o, J.call(e, t, y.os), k && !e[w] && g && g.platform && "Unknown" != g.platform && (e[w] = g.platform.replace(/chrome os/i, G).replace(/macos/i, W)), e
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
              return t
            }, this.setUA = function(e) {
              return t = typeof e === c && e.length > 500 ? Q(e, 500) : e, this
            }, this.setUA(t), this
          };
        te.VERSION = "1.0.41", te.BROWSER = Z([w, p, u]), te.CPU = Z([m]), te.DEVICE = Z([d, f, l, g, h, y, v, k, x]), te.ENGINE = te.OS = Z([w, p]), typeof i !== s ? (e.exports && (i = e.exports = te), i.UAParser = te) : r.amdO ? (t = function() {
          return te
        }.call(i, r, i, e)) === o || (e.exports = t) : typeof n !== s && (n.UAParser = te);
        var ne = typeof n !== s && (n.jQuery || n.Zepto);
        if (ne && !ne.ua) {
          var oe = new te;
          ne.ua = oe.getResult(), ne.ua.get = function() {
            return oe.getUA()
          }, ne.ua.set = function(e) {
            oe.setUA(e);
            var i = oe.getResult();
            for (var r in i) ne.ua[r] = i[r]
          }
        }
      }("object" == typeof window ? window : this)
    },
    42887(e, i, r) {
      "use strict";
      r.d(i, {
        sc: () => n
      });
      const t = e => async (i, {
        outputFormat: r = "hex"
      } = {}) => {
        "string" == typeof i && (i = (new globalThis.TextEncoder).encode(i));
        const t = await globalThis.crypto.subtle.digest(e, i);
        return "hex" === r ? (e => {
          const i = new DataView(e);
          let r = "";
          for (let e = 0; e < i.byteLength; e += 4) r += i.getUint32(e).toString(16).padStart(8, "0");
          return r
        })(t) : t
      }, n = (t("SHA-1"), t("SHA-256"));
      t("SHA-384"), t("SHA-512")
    },
    37980(e, i, r) {
      "use strict";

      function t(e) {
        for (var i = 1; i < arguments.length; i++) {
          var r = arguments[i];
          for (var t in r) e[t] = r[t]
        }
        return e
      }
      r.d(i, {
        A: () => n
      });
      var n = function e(i, r) {
        function n(e, n, o) {
          if ("undefined" != typeof document) {
            "number" == typeof(o = t({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
            return document.cookie = e + "=" + i.write(n, e) + a
          }
        }
        return Object.create({
          set: n,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var r = document.cookie ? document.cookie.split("; ") : [], t = {}, n = 0; n < r.length; n++) {
                var o = r[n].split("="),
                  a = o.slice(1).join("=");
                try {
                  var s = decodeURIComponent(o[0]);
                  if (t[s] = i.read(a, s), e === s) break
                } catch (e) {}
              }
              return e ? t[e] : t
            }
          },
          remove: function(e, i) {
            n(e, "", t({}, i, {
              expires: -1
            }))
          },
          withAttributes: function(i) {
            return e(this.converter, t({}, this.attributes, i))
          },
          withConverter: function(i) {
            return e(t({}, this.converter, i), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(r)
          },
          converter: {
            value: Object.freeze(i)
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
    58128(e, i, r) {
      "use strict";
      r.d(i, {
        s: () => n
      });
      class t extends Error {}

      function n(e, i) {
        if ("string" != typeof e) throw new t("Invalid token specified: must be a string");
        i || (i = {});
        const r = !0 === i.header ? 0 : 1,
          n = e.split(".")[r];
        if ("string" != typeof n) throw new t(`Invalid token specified: missing part #${r+1}`);
        let o;
        try {
          o = function(e) {
            let i = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (i.length % 4) {
              case 0:
                break;
              case 2:
                i += "==";
                break;
              case 3:
                i += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, i) => {
                  let r = i.charCodeAt(0).toString(16).toUpperCase();
                  return r.length < 2 && (r = "0" + r), "%" + r
                }))
              }(i)
            } catch (e) {
              return atob(i)
            }
          }(n)
        } catch (e) {
          throw new t(`Invalid token specified: invalid base64 for part #${r+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new t(`Invalid token specified: invalid json for part #${r+1} (${e.message})`)
        }
      }
      t.prototype.name = "InvalidTokenError"
    }
  }
]);