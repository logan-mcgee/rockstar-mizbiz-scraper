try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "5ecb45ad-4295-4b73-96b3-a48ccc193aa4", e._sentryDebugIdIdentifier = "sentry-dbid-5ecb45ad-4295-4b73-96b3-a48ccc193aa4")
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
  [8322, 8387], {
    37980: (e, r, t) => {
      "use strict";

      function i(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var i in t) e[i] = t[i]
        }
        return e
      }
      t.d(r, {
        A: () => n
      });
      var n = function e(r, t) {
        function n(e, n, o) {
          if ("undefined" != typeof document) {
            "number" == typeof(o = i({}, t, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)), o.expires && (o.expires = o.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var s in o) o[s] && (a += "; " + s, !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
            return document.cookie = e + "=" + r.write(n, e) + a
          }
        }
        return Object.create({
          set: n,
          get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (var t = document.cookie ? document.cookie.split("; ") : [], i = {}, n = 0; n < t.length; n++) {
                var o = t[n].split("="),
                  a = o.slice(1).join("=");
                try {
                  var s = decodeURIComponent(o[0]);
                  if (i[s] = r.read(a, s), e === s) break
                } catch (e) {}
              }
              return e ? i[e] : i
            }
          },
          remove: function(e, r) {
            n(e, "", i({}, r, {
              expires: -1
            }))
          },
          withAttributes: function(r) {
            return e(this.converter, i({}, this.attributes, r))
          },
          withConverter: function(r) {
            return e(i({}, this.converter, r), this.attributes)
          }
        }, {
          attributes: {
            value: Object.freeze(t)
          },
          converter: {
            value: Object.freeze(r)
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
    40139: function(e, r, t) {
      var i;
      ! function(n, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          c = "object",
          u = "string",
          l = "major",
          f = "model",
          b = "name",
          d = "type",
          w = "vendor",
          p = "version",
          m = "architecture",
          h = "console",
          y = "mobile",
          v = "tablet",
          g = "smarttv",
          _ = "wearable",
          x = "embedded",
          k = "Amazon",
          O = "Apple",
          S = "ASUS",
          j = "BlackBerry",
          E = "Browser",
          P = "Chrome",
          T = "Firefox",
          A = "Google",
          I = "Honor",
          C = "Huawei",
          M = "LG",
          D = "Microsoft",
          R = "Motorola",
          z = "Nvidia",
          U = "OnePlus",
          N = "Opera",
          q = "OPPO",
          B = "Samsung",
          F = "Sharp",
          $ = "Sony",
          V = "Xiaomi",
          G = "Zebra",
          L = "Facebook",
          H = "Chromium OS",
          W = "Mac OS",
          X = " Browser",
          Z = function(e) {
            for (var r = {}, t = 0; t < e.length; t++) r[e[t].toUpperCase()] = e[t];
            return r
          },
          K = function(e, r) {
            return typeof e === u && -1 !== Y(r).indexOf(Y(e))
          },
          Y = function(e) {
            return e.toLowerCase()
          },
          Q = function(e, r) {
            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof r === s ? e : e.substring(0, 500)
          },
          J = function(e, r) {
            for (var t, i, n, s, u, l, f = 0; f < r.length && !u;) {
              var b = r[f],
                d = r[f + 1];
              for (t = i = 0; t < b.length && !u && b[t];)
                if (u = b[t++].exec(e))
                  for (n = 0; n < d.length; n++) l = u[++i], typeof(s = d[n]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : o : this[s[0]] = l ? s[1].call(this, l, s[2]) : o : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : o) : this[s] = l || o;
              f += 2
            }
          },
          ee = function(e, r) {
            for (var t in r)
              if (typeof r[t] === c && r[t].length > 0) {
                for (var i = 0; i < r[t].length; i++)
                  if (K(r[t][i], e)) return "?" === t ? o : t
              } else if (K(r[t], e)) return "?" === t ? o : t;
            return r.hasOwnProperty("*") ? r["*"] : e
          },
          re = {
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
          te = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [b, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [b, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [b, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [b, N + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [p, [b, N + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [b, N]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [p, [b, "Baidu"]],
              [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
              [p, [b, "Maxthon"]],
              [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
              [b, p],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [p, [b, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [p, [b, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [b, "UC" + E]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
              [p, [b, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [b, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [b, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [p, [b, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [p, [b, "Smart Lenovo " + E]],
              [/(avast|avg)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1 Secure " + E], p
              ],
              [/\bfocus\/([\w\.]+)/i],
              [p, [b, T + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [b, N + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [b, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [b, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [b, N + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [b, "MIUI" + X]],
              [/fxios\/([\w\.-]+)/i],
              [p, [b, T]],
              [/\bqihoobrowser\/?([\w\.]*)/i],
              [p, [b, "360"]],
              [/\b(qq)\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1Browser"], p
              ],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [
                [b, /(.+)/, "$1" + X], p
              ],
              [/samsungbrowser\/([\w\.]+)/i],
              [p, [b, B + " Internet"]],
              [/metasr[\/ ]?([\d\.]+)/i],
              [p, [b, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [
                [b, "Sogou Mobile"], p
              ],
              [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
              [b, p],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [b],
              [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
              [p, b],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [
                [b, L], p
              ],
              [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
              [b, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [b, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [p, [b, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [b, P + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [
                [b, P + " WebView"], p
              ],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [b, "Android " + E]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [b, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [b, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, b],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [b, [p, ee, {
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
              [b, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [
                [b, "Netscape"], p
              ],
              [/(wolvic|librewolf)\/([\w\.]+)/i],
              [b, p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [b, T + " Reality"]],
              [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
              [b, [p, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [b, [p, /master.|lts./, ""]]
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
                [m, /ower/, "", Y]
              ],
              [/ sun4\w[;\)]/i],
              [
                [m, "sparc"]
              ],
              [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
              [
                [m, Y]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [f, [w, B],
                [d, v]
              ],
              [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
              [f, [w, B],
                [d, y]
              ],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [w, O],
                [d, y]
              ],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [f, [w, O],
                [d, v]
              ],
              [/(macintosh);/i],
              [f, [w, O]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [w, F],
                [d, y]
              ],
              [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
              [f, [w, I],
                [d, v]
              ],
              [/honor([-\w ]+)[;\)]/i],
              [f, [w, I],
                [d, y]
              ],
              [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
              [f, [w, C],
                [d, v]
              ],
              [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [f, [w, C],
                [d, y]
              ],
              [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
              [
                [f, /_/g, " "],
                [w, V],
                [d, v]
              ],
              [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
              [
                [f, /_/g, " "],
                [w, V],
                [d, y]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [f, [w, q],
                [d, y]
              ],
              [/\b(opd2(\d{3}a?))(?: bui|\))/i],
              [f, [w, ee, {
                  OnePlus: ["304", "403", "203"],
                  "*": q
                }],
                [d, v]
              ],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [w, "Vivo"],
                [d, y]
              ],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [w, "Realme"],
                [d, y]
              ],
              [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
              [f, [w, R],
                [d, y]
              ],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [w, R],
                [d, v]
              ],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [w, M],
                [d, v]
              ],
              [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
              [f, [w, M],
                [d, y]
              ],
              [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
              [f, [w, "Lenovo"],
                [d, v]
              ],
              [/(nokia) (t[12][01])/i],
              [w, f, [d, v]],
              [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
              [
                [f, /_/g, " "],
                [d, y],
                [w, "Nokia"]
              ],
              [/(pixel (c|tablet))\b/i],
              [f, [w, A],
                [d, v]
              ],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [w, A],
                [d, y]
              ],
              [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [f, [w, $],
                [d, y]
              ],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [w, $],
                [d, v]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [f, [w, U],
                [d, y]
              ],
              [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [f, [w, k],
                [d, v]
              ],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [w, k],
                [d, y]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, w, [d, v]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [w, j],
                [d, y]
              ],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [f, [w, S],
                [d, v]
              ],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [w, S],
                [d, y]
              ],
              [/(nexus 9)/i],
              [f, [w, "HTC"],
                [d, v]
              ],
              [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
              [w, [f, /_/g, " "],
                [d, y]
              ],
              [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
              [f, [w, "TCL"],
                [d, v]
              ],
              [/(itel) ((\w+))/i],
              [
                [w, Y], f, [d, ee, {
                  tablet: ["p10001l", "w7001"],
                  "*": "mobile"
                }]
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [w, "Acer"],
                [d, v]
              ],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [w, "Meizu"],
                [d, y]
              ],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [w, "Ulefone"],
                [d, y]
              ],
              [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
              [f, [w, "Energizer"],
                [d, y]
              ],
              [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
              [f, [w, "Cat"],
                [d, y]
              ],
              [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
              [f, [w, "Smartfren"],
                [d, y]
              ],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [w, "Nothing"],
                [d, y]
              ],
              [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
              [f, [w, "Archos"],
                [d, v]
              ],
              [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
              [f, [w, "Archos"],
                [d, y]
              ],
              [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
              [w, f, [d, v]],
              [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
              [w, f, [d, y]],
              [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
              [w, f, [d, v]],
              [/(surface duo)/i],
              [f, [w, D],
                [d, v]
              ],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [w, "Fairphone"],
                [d, y]
              ],
              [/(u304aa)/i],
              [f, [w, "AT&T"],
                [d, y]
              ],
              [/\bsie-(\w*)/i],
              [f, [w, "Siemens"],
                [d, y]
              ],
              [/\b(rct\w+) b/i],
              [f, [w, "RCA"],
                [d, v]
              ],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [w, "Dell"],
                [d, v]
              ],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [w, "Verizon"],
                [d, v]
              ],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [w, "Barnes & Noble"],
                [d, v]
              ],
              [/\b(tm\d{3}\w+) b/i],
              [f, [w, "NuVision"],
                [d, v]
              ],
              [/\b(k88) b/i],
              [f, [w, "ZTE"],
                [d, v]
              ],
              [/\b(nx\d{3}j) b/i],
              [f, [w, "ZTE"],
                [d, y]
              ],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [w, "Swiss"],
                [d, y]
              ],
              [/\b(zur\d{3}) b/i],
              [f, [w, "Swiss"],
                [d, v]
              ],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [w, "Zeki"],
                [d, v]
              ],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [
                [w, "Dragon Touch"], f, [d, v]
              ],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [w, "Insignia"],
                [d, v]
              ],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [w, "NextBook"],
                [d, v]
              ],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [
                [w, "Voice"], f, [d, y]
              ],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [
                [w, "LvTel"], f, [d, y]
              ],
              [/\b(ph-1) /i],
              [f, [w, "Essential"],
                [d, y]
              ],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [w, "Envizen"],
                [d, v]
              ],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [w, "MachSpeed"],
                [d, v]
              ],
              [/\btu_(1491) b/i],
              [f, [w, "Rotor"],
                [d, v]
              ],
              [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
              [f, [w, z],
                [d, v]
              ],
              [/(sprint) (\w+)/i],
              [w, f, [d, y]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [w, D],
                [d, y]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [w, G],
                [d, v]
              ],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [w, G],
                [d, y]
              ],
              [/smart-tv.+(samsung)/i],
              [w, [d, g]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [w, B],
                [d, g]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [w, M],
                [d, g]
              ],
              [/(apple) ?tv/i],
              [w, [f, O + " TV"],
                [d, g]
              ],
              [/crkey/i],
              [
                [f, P + "cast"],
                [w, A],
                [d, g]
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [w, k],
                [d, g]
              ],
              [/(shield \w+ tv)/i],
              [f, [w, z],
                [d, g]
              ],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [w, F],
                [d, g]
              ],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [w, $],
                [d, g]
              ],
              [/(mi(tv|box)-?\w+) bui/i],
              [f, [w, V],
                [d, g]
              ],
              [/Hbbtv.*(technisat) (.*);/i],
              [w, f, [d, g]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
              [
                [w, Q],
                [f, Q],
                [d, g]
              ],
              [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
              [f, [d, g]],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [
                [d, g]
              ],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [w, f, [d, h]],
              [/droid.+; (shield)( bui|\))/i],
              [f, [w, z],
                [d, h]
              ],
              [/(playstation \w+)/i],
              [f, [w, $],
                [d, h]
              ],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [w, D],
                [d, h]
              ],
              [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
              [f, [w, B],
                [d, _]
              ],
              [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
              [w, f, [d, _]],
              [/(ow(?:19|20)?we?[1-3]{1,3})/i],
              [f, [w, q],
                [d, _]
              ],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [w, O],
                [d, _]
              ],
              [/(opwwe\d{3})/i],
              [f, [w, U],
                [d, _]
              ],
              [/(moto 360)/i],
              [f, [w, R],
                [d, _]
              ],
              [/(smartwatch 3)/i],
              [f, [w, $],
                [d, _]
              ],
              [/(g watch r)/i],
              [f, [w, M],
                [d, _]
              ],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [w, G],
                [d, _]
              ],
              [/droid.+; (glass) \d/i],
              [f, [w, A],
                [d, _]
              ],
              [/(pico) (4|neo3(?: link|pro)?)/i],
              [w, f, [d, _]],
              [/; (quest( \d| pro)?)/i],
              [f, [w, L],
                [d, _]
              ],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [w, [d, x]],
              [/(aeobc)\b/i],
              [f, [w, k],
                [d, x]
              ],
              [/(homepod).+mac os/i],
              [f, [w, O],
                [d, x]
              ],
              [/windows iot/i],
              [
                [d, x]
              ],
              [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
              [f, [d, y]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [d, v]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [
                [d, v]
              ],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [
                [d, y]
              ],
              [/droid .+?; ([\w\. -]+)( bui|\))/i],
              [f, [w, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [b, "EdgeHTML"]],
              [/(arkweb)\/([\w\.]+)/i],
              [b, p],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [b, "Blink"]],
              [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
              [b, p],
              [/ladybird\//i],
              [
                [b, "LibWeb"]
              ],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, b]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [b, p],
              [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
              [b, [p, ee, re]],
              [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [p, ee, re],
                [b, "Windows"]
              ],
              [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
              [
                [p, /_/g, "."],
                [b, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [b, W],
                [p, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, b],
              [/(ubuntu) ([\w\.]+) like android/i],
              [
                [b, /(.+)/, "$1 Touch"], p
              ],
              [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
              [b, p],
              [/\(bb(10);/i],
              [p, [b, j]],
              [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
              [p, [b, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [p, [b, T + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [b, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [p, [b, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [b, P + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [
                [b, H], p
              ],
              [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
              [b, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [
                [b, "Solaris"], p
              ],
              [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
              [b, p]
            ]
          },
          ie = function(e, r) {
            if (typeof e === c && (r = e, e = o), !(this instanceof ie)) return new ie(e, r).getResult();
            var t = typeof n !== s && n.navigator ? n.navigator : o,
              i = e || (t && t.userAgent ? t.userAgent : ""),
              h = t && t.userAgentData ? t.userAgentData : o,
              g = r ? function(e, r) {
                var t = {};
                for (var i in e) r[i] && r[i].length % 2 == 0 ? t[i] = r[i].concat(e[i]) : t[i] = e[i];
                return t
              }(te, r) : te,
              _ = t && t.userAgent == i;
            return this.getBrowser = function() {
              var e, r = {};
              return r[b] = o, r[p] = o, J.call(r, i, g.browser), r[l] = typeof(e = r[p]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, _ && t && t.brave && typeof t.brave.isBrave == a && (r[b] = "Brave"), r
            }, this.getCPU = function() {
              var e = {};
              return e[m] = o, J.call(e, i, g.cpu), e
            }, this.getDevice = function() {
              var e = {};
              return e[w] = o, e[f] = o, e[d] = o, J.call(e, i, g.device), _ && !e[d] && h && h.mobile && (e[d] = y), _ && "Macintosh" == e[f] && t && typeof t.standalone !== s && t.maxTouchPoints && t.maxTouchPoints > 2 && (e[f] = "iPad", e[d] = v), e
            }, this.getEngine = function() {
              var e = {};
              return e[b] = o, e[p] = o, J.call(e, i, g.engine), e
            }, this.getOS = function() {
              var e = {};
              return e[b] = o, e[p] = o, J.call(e, i, g.os), _ && !e[b] && h && h.platform && "Unknown" != h.platform && (e[b] = h.platform.replace(/chrome os/i, H).replace(/macos/i, W)), e
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
              return i
            }, this.setUA = function(e) {
              return i = typeof e === u && e.length > 500 ? Q(e, 500) : e, this
            }, this.setUA(i), this
          };
        ie.VERSION = "1.0.41", ie.BROWSER = Z([b, p, l]), ie.CPU = Z([m]), ie.DEVICE = Z([f, w, d, h, y, g, v, _, x]), ie.ENGINE = ie.OS = Z([b, p]), typeof r !== s ? (e.exports && (r = e.exports = ie), r.UAParser = ie) : t.amdO ? (i = function() {
          return ie
        }.call(r, t, r, e)) === o || (e.exports = i) : typeof n !== s && (n.UAParser = ie);
        var ne = typeof n !== s && (n.jQuery || n.Zepto);
        if (ne && !ne.ua) {
          var oe = new ie;
          ne.ua = oe.getResult(), ne.ua.get = function() {
            return oe.getUA()
          }, ne.ua.set = function(e) {
            oe.setUA(e);
            var r = oe.getResult();
            for (var t in r) ne.ua[t] = r[t]
          }
        }
      }("object" == typeof window ? window : this)
    },
    42887: (e, r, t) => {
      "use strict";
      t.d(r, {
        sc: () => n
      });
      const i = e => async (r, {
        outputFormat: t = "hex"
      } = {}) => {
        "string" == typeof r && (r = (new globalThis.TextEncoder).encode(r));
        const i = await globalThis.crypto.subtle.digest(e, r);
        return "hex" === t ? (e => {
          const r = new DataView(e);
          let t = "";
          for (let e = 0; e < r.byteLength; e += 4) t += r.getUint32(e).toString(16).padStart(8, "0");
          return t
        })(i) : i
      }, n = (i("SHA-1"), i("SHA-256"));
      i("SHA-384"), i("SHA-512")
    },
    58128: (e, r, t) => {
      "use strict";
      t.d(r, {
        s: () => n
      });
      class i extends Error {}

      function n(e, r) {
        if ("string" != typeof e) throw new i("Invalid token specified: must be a string");
        r || (r = {});
        const t = !0 === r.header ? 0 : 1,
          n = e.split(".")[t];
        if ("string" != typeof n) throw new i(`Invalid token specified: missing part #${t+1}`);
        let o;
        try {
          o = function(e) {
            let r = e.replace(/-/g, "+").replace(/_/g, "/");
            switch (r.length % 4) {
              case 0:
                break;
              case 2:
                r += "==";
                break;
              case 3:
                r += "=";
                break;
              default:
                throw new Error("base64 string is not of the correct length")
            }
            try {
              return function(e) {
                return decodeURIComponent(atob(e).replace(/(.)/g, (e, r) => {
                  let t = r.charCodeAt(0).toString(16).toUpperCase();
                  return t.length < 2 && (t = "0" + t), "%" + t
                }))
              }(r)
            } catch (e) {
              return atob(r)
            }
          }(n)
        } catch (e) {
          throw new i(`Invalid token specified: invalid base64 for part #${t+1} (${e.message})`)
        }
        try {
          return JSON.parse(o)
        } catch (e) {
          throw new i(`Invalid token specified: invalid json for part #${t+1} (${e.message})`)
        }
      }
      i.prototype.name = "InvalidTokenError"
    },
    78322: (e, r, t) => {
      "use strict";
      t.r(r), t.d(r, {
        __addDisposableResource: () => R,
        __assign: () => o,
        __asyncDelegator: () => S,
        __asyncGenerator: () => O,
        __asyncValues: () => j,
        __await: () => k,
        __awaiter: () => w,
        __classPrivateFieldGet: () => C,
        __classPrivateFieldIn: () => D,
        __classPrivateFieldSet: () => M,
        __createBinding: () => m,
        __decorate: () => s,
        __disposeResources: () => U,
        __esDecorate: () => u,
        __exportStar: () => h,
        __extends: () => n,
        __generator: () => p,
        __importDefault: () => I,
        __importStar: () => A,
        __makeTemplateObject: () => E,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => v,
        __rest: () => a,
        __rewriteRelativeImportExtension: () => N,
        __runInitializers: () => l,
        __setFunctionName: () => b,
        __spread: () => g,
        __spreadArray: () => x,
        __spreadArrays: () => _,
        __values: () => y,
        default: () => q
      });
      var i = function(e, r) {
        return i = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, r) {
          e.__proto__ = r
        } || function(e, r) {
          for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }, i(e, r)
      };

      function n(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        i(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
      }
      var o = function() {
        return o = Object.assign || function(e) {
          for (var r, t = 1, i = arguments.length; t < i; t++)
            for (var n in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          return e
        }, o.apply(this, arguments)
      };

      function a(e, r) {
        var t = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && r.indexOf(i) < 0 && (t[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) r.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (t[i[n]] = e[i[n]])
        }
        return t
      }

      function s(e, r, t, i) {
        var n, o = arguments.length,
          a = o < 3 ? r : null === i ? i = Object.getOwnPropertyDescriptor(r, t) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, t, i);
        else
          for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(r, t, a) : n(r, t)) || a);
        return o > 3 && a && Object.defineProperty(r, t, a), a
      }

      function c(e, r) {
        return function(t, i) {
          r(t, i, e)
        }
      }

      function u(e, r, t, i, n, o) {
        function a(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = i.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !r && e ? i.static ? e : e.prototype : null, f = r || (l ? Object.getOwnPropertyDescriptor(l, i.name) : {}), b = !1, d = t.length - 1; d >= 0; d--) {
          var w = {};
          for (var p in i) w[p] = "access" === p ? {} : i[p];
          for (var p in i.access) w.access[p] = i.access[p];
          w.addInitializer = function(e) {
            if (b) throw new TypeError("Cannot add initializers after decoration has completed");
            o.push(a(e || null))
          };
          var m = (0, t[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], w);
          if ("accessor" === c) {
            if (void 0 === m) continue;
            if (null === m || "object" != typeof m) throw new TypeError("Object expected");
            (s = a(m.get)) && (f.get = s), (s = a(m.set)) && (f.set = s), (s = a(m.init)) && n.unshift(s)
          } else(s = a(m)) && ("field" === c ? n.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, i.name, f), b = !0
      }

      function l(e, r, t) {
        for (var i = arguments.length > 2, n = 0; n < r.length; n++) t = i ? r[n].call(e, t) : r[n].call(e);
        return i ? t : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function b(e, r, t) {
        return "symbol" == typeof r && (r = r.description ? "[".concat(r.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: t ? "".concat(t, " ", r) : r
        })
      }

      function d(e, r) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, r)
      }

      function w(e, r, t, i) {
        return new(t || (t = Promise))(function(n, o) {
          function a(e) {
            try {
              c(i.next(e))
            } catch (e) {
              o(e)
            }
          }

          function s(e) {
            try {
              c(i.throw(e))
            } catch (e) {
              o(e)
            }
          }

          function c(e) {
            var r;
            e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
              e(r)
            })).then(a, s)
          }
          c((i = i.apply(e, r || [])).next())
        })
      }

      function p(e, r) {
        var t, i, n, o = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
            },
            trys: [],
            ops: []
          },
          a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function s(s) {
          return function(c) {
            return function(s) {
              if (t) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, s[0] && (o = 0)), o;) try {
                if (t = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return o.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    o.label++, i = s[1], s = [0];
                    continue;
                  case 7:
                    s = o.ops.pop(), o.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = o.trys).length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      o = 0;
                      continue
                    }
                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                      o.label = s[1];
                      break
                    }
                    if (6 === s[0] && o.label < n[1]) {
                      o.label = n[1], n = s;
                      break
                    }
                    if (n && o.label < n[2]) {
                      o.label = n[2], o.ops.push(s);
                      break
                    }
                    n[2] && o.ops.pop(), o.trys.pop();
                    continue
                }
                s = r.call(e, o)
              } catch (e) {
                s = [6, e], i = 0
              } finally {
                t = n = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
          }
        }
      }
      var m = Object.create ? function(e, r, t, i) {
        void 0 === i && (i = t);
        var n = Object.getOwnPropertyDescriptor(r, t);
        n && !("get" in n ? !r.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function() {
            return r[t]
          }
        }), Object.defineProperty(e, i, n)
      } : function(e, r, t, i) {
        void 0 === i && (i = t), e[i] = r[t]
      };

      function h(e, r) {
        for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || m(r, e, t)
      }

      function y(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
          t = r && e[r],
          i = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && i >= e.length && (e = void 0), {
              value: e && e[i++],
              done: !e
            }
          }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function v(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var i, n, o = t.call(e),
          a = [];
        try {
          for (;
            (void 0 === r || r-- > 0) && !(i = o.next()).done;) a.push(i.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            i && !i.done && (t = o.return) && t.call(o)
          } finally {
            if (n) throw n.error
          }
        }
        return a
      }

      function g() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(v(arguments[r]));
        return e
      }

      function _() {
        for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
        var i = Array(e),
          n = 0;
        for (r = 0; r < t; r++)
          for (var o = arguments[r], a = 0, s = o.length; a < s; a++, n++) i[n] = o[a];
        return i
      }

      function x(e, r, t) {
        if (t || 2 === arguments.length)
          for (var i, n = 0, o = r.length; n < o; n++) !i && n in r || (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
        return e.concat(i || Array.prototype.slice.call(r))
      }

      function k(e) {
        return this instanceof k ? (this.v = e, this) : new k(e)
      }

      function O(e, r, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var i, n = t.apply(e, r || []),
          o = [];
        return i = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", function(e) {
          return function(r) {
            return Promise.resolve(r).then(e, u)
          }
        }), i[Symbol.asyncIterator] = function() {
          return this
        }, i;

        function a(e, r) {
          n[e] && (i[e] = function(r) {
            return new Promise(function(t, i) {
              o.push([e, r, t, i]) > 1 || s(e, r)
            })
          }, r && (i[e] = r(i[e])))
        }

        function s(e, r) {
          try {
            (t = n[e](r)).value instanceof k ? Promise.resolve(t.value.v).then(c, u) : l(o[0][2], t)
          } catch (e) {
            l(o[0][3], e)
          }
          var t
        }

        function c(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function l(e, r) {
          e(r), o.shift(), o.length && s(o[0][0], o[0][1])
        }
      }

      function S(e) {
        var r, t;
        return r = {}, i("next"), i("throw", function(e) {
          throw e
        }), i("return"), r[Symbol.iterator] = function() {
          return this
        }, r;

        function i(i, n) {
          r[i] = e[i] ? function(r) {
            return (t = !t) ? {
              value: k(e[i](r)),
              done: !1
            } : n ? n(r) : r
          } : n
        }
      }

      function j(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, t = e[Symbol.asyncIterator];
        return t ? t.call(e) : (e = y(e), r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r);

        function i(t) {
          r[t] = e[t] && function(r) {
            return new Promise(function(i, n) {
              ! function(e, r, t, i) {
                Promise.resolve(i).then(function(r) {
                  e({
                    value: r,
                    done: t
                  })
                }, r)
              }(i, n, (r = e[t](r)).done, r.value)
            })
          }
        }
      }

      function E(e, r) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: r
        }) : e.raw = r, e
      }
      var P = Object.create ? function(e, r) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
          })
        } : function(e, r) {
          e.default = r
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var r = [];
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[r.length] = t);
            return r
          }, T(e)
        };

      function A(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
          for (var t = T(e), i = 0; i < t.length; i++) "default" !== t[i] && m(r, e, t[i]);
        return P(r, e), r
      }

      function I(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function C(e, r, t, i) {
        if ("a" === t && !i) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof r ? e !== r || !i : !r.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === t ? i : "a" === t ? i.call(e) : i ? i.value : r.get(e)
      }

      function M(e, r, t, i, n) {
        if ("m" === i) throw new TypeError("Private method is not writable");
        if ("a" === i && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof r ? e !== r || !n : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === i ? n.call(e, t) : n ? n.value = t : r.set(e, t), t
      }

      function D(e, r) {
        if (null === r || "object" != typeof r && "function" != typeof r) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? r === e : e.has(r)
      }

      function R(e, r, t) {
        if (null != r) {
          if ("object" != typeof r && "function" != typeof r) throw new TypeError("Object expected.");
          var i, n;
          if (t) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            i = r[Symbol.asyncDispose]
          }
          if (void 0 === i) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            i = r[Symbol.dispose], t && (n = i)
          }
          if ("function" != typeof i) throw new TypeError("Object not disposable.");
          n && (i = function() {
            try {
              n.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: r,
            dispose: i,
            async: t
          })
        } else t && e.stack.push({
          async: !0
        });
        return r
      }
      var z = "function" == typeof SuppressedError ? SuppressedError : function(e, r, t) {
        var i = new Error(t);
        return i.name = "SuppressedError", i.error = e, i.suppressed = r, i
      };

      function U(e) {
        function r(r) {
          e.error = e.hasError ? new z(r, e.error, "An error was suppressed during disposal.") : r, e.hasError = !0
        }
        var t, i = 0;
        return function n() {
          for (; t = e.stack.pop();) try {
            if (!t.async && 1 === i) return i = 0, e.stack.push(t), Promise.resolve().then(n);
            if (t.dispose) {
              var o = t.dispose.call(t.value);
              if (t.async) return i |= 2, Promise.resolve(o).then(n, function(e) {
                return r(e), n()
              })
            } else i |= 1
          } catch (e) {
            r(e)
          }
          if (1 === i) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function N(e, r) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, t, i, n, o) {
          return t ? r ? ".jsx" : ".js" : !i || n && o ? i + n + "." + o.toLowerCase() + "js" : e
        }) : e
      }
      const q = {
        __extends: n,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: c,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: b,
        __metadata: d,
        __awaiter: w,
        __generator: p,
        __createBinding: m,
        __exportStar: h,
        __values: y,
        __read: v,
        __spread: g,
        __spreadArrays: _,
        __spreadArray: x,
        __await: k,
        __asyncGenerator: O,
        __asyncDelegator: S,
        __asyncValues: j,
        __makeTemplateObject: E,
        __importStar: A,
        __importDefault: I,
        __classPrivateFieldGet: C,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: D,
        __addDisposableResource: R,
        __disposeResources: U,
        __rewriteRelativeImportExtension: N
      }
    },
    79465: e => {
      "use strict";
      var r = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var r = Object.prototype.toString.call(e);
            return "[object RegExp]" === r || "[object Date]" === r || function(e) {
              return e.$$typeof === t
            }(e)
          }(e)
        },
        t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function i(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e) ? s((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
        var t
      }

      function n(e, r, t) {
        return e.concat(r).map(function(e) {
          return i(e, t)
        })
      }

      function o(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          }) : []
        }(e))
      }

      function a(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function s(e, t, c) {
        (c = c || {}).arrayMerge = c.arrayMerge || n, c.isMergeableObject = c.isMergeableObject || r, c.cloneUnlessOtherwiseSpecified = i;
        var u = Array.isArray(t);
        return u === Array.isArray(e) ? u ? c.arrayMerge(e, t, c) : function(e, r, t) {
          var n = {};
          return t.isMergeableObject(e) && o(e).forEach(function(r) {
            n[r] = i(e[r], t)
          }), o(r).forEach(function(o) {
            (function(e, r) {
              return a(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, o) || (a(e, o) && t.isMergeableObject(r[o]) ? n[o] = function(e, r) {
              if (!r.customMerge) return s;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : s
            }(o, t)(e[o], r[o], t) : n[o] = i(r[o], t))
          }), n
        }(e, t, c) : i(t, c)
      }
      s.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, t) {
          return s(e, t, r)
        }, {})
      };
      var c = s;
      e.exports = c
    },
    81878: (e, r, t) => {
      "use strict";
      (i = t(71127)) && "object" == typeof i && "default" in i && i.default;
      var i, n = t(40139),
        o = new n,
        a = o.getBrowser(),
        s = (o.getCPU(), o.getDevice()),
        c = o.getEngine(),
        u = o.getOS(),
        l = o.getUA();
      var f = "mobile",
        b = "tablet",
        d = "Chrome",
        w = "Firefox",
        p = "Opera",
        m = "Yandex",
        h = "Safari",
        y = "Internet Explorer",
        v = "Edge",
        g = "Chromium",
        _ = "IE",
        x = "Mobile Safari",
        k = "MIUI Browser",
        O = "Samsung Browser",
        S = "iOS",
        j = "Android",
        E = "Windows Phone",
        P = "Windows",
        T = "Mac OS",
        A = function(e) {
          return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        I = function() {
          return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        C = function(e) {
          var r = I();
          return r && r.platform && (-1 !== r.platform.indexOf(e) || "MacIntel" === r.platform && r.maxTouchPoints > 1 && !window.MSStream)
        },
        M = function(e) {
          return e.type === f
        },
        D = function(e) {
          return e.type === b
        },
        R = function(e) {
          var r = e.type;
          return r === f || r === b
        },
        z = function(e) {
          return "smarttv" === e.type
        },
        U = function(e) {
          return undefined === e.type
        },
        N = function(e) {
          return "wearable" === e.type
        },
        q = function(e) {
          return "console" === e.type
        },
        B = function(e) {
          return "embedded" === e.type
        },
        F = function(e) {
          var r = e.vendor;
          return A(r)
        },
        $ = function(e) {
          var r = e.model;
          return A(r)
        },
        V = function(e) {
          var r = e.type;
          return A(r, "browser")
        },
        G = function(e) {
          return e.name === j
        },
        L = function(e) {
          return e.name === P
        },
        H = function(e) {
          return e.name === T
        },
        W = function(e) {
          return e.name === E
        },
        X = function(e) {
          return e.name === S
        },
        Z = function(e) {
          var r = e.version;
          return A(r)
        },
        K = function(e) {
          var r = e.name;
          return A(r)
        },
        Y = function(e) {
          return e.name === d
        },
        Q = function(e) {
          return e.name === w
        },
        J = function(e) {
          return e.name === g
        },
        ee = function(e) {
          return e.name === v
        },
        re = function(e) {
          return e.name === m
        },
        te = function(e) {
          var r = e.name;
          return r === h || r === x
        },
        ie = function(e) {
          return e.name === x
        },
        ne = function(e) {
          return e.name === p
        },
        oe = function(e) {
          var r = e.name;
          return r === y || r === _
        },
        ae = function(e) {
          return e.name === k
        },
        se = function(e) {
          return e.name === O
        },
        ce = function(e) {
          var r = e.version;
          return A(r)
        },
        ue = function(e) {
          var r = e.major;
          return A(r)
        },
        le = function(e) {
          var r = e.name;
          return A(r)
        },
        fe = function(e) {
          var r = e.name;
          return A(r)
        },
        be = function(e) {
          var r = e.version;
          return A(r)
        },
        de = function() {
          var e = I(),
            r = e && e.userAgent && e.userAgent.toLowerCase();
          return "string" == typeof r && /electron/.test(r)
        },
        we = function(e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        pe = function() {
          var e = I();
          return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        me = function() {
          return C("iPad")
        },
        he = function() {
          return C("iPhone")
        },
        ye = function() {
          return C("iPod")
        },
        ve = function(e) {
          return A(e)
        };
      var ge = z(s),
        _e = (q(s), N(s)),
        xe = (B(s), ie(a) || me(), J(a), R(s) || me(), M(s), D(s) || me(), U(s), U(s), G(u), W(u), X(u) || me(), Y(a), Q(a), te(a), ne(a), oe(a)),
        ke = (Z(u), K(u), ce(a), ue(a), le(a)),
        Oe = (F(s), $(s), fe(c), be(c), ve(l), ee(a) || we(l), re(a), V(s), pe(), me(), he(), ye(), de(), we(l), ee(a) && !we(l));
      L(u), H(u), ae(a), se(a);
      r.C0 = ke, r.lT = xe, r.n8 = Oe, r.UX = ge, r.w = _e
    }
  }
]);