try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7a8ed36b-2fdb-4082-a2b3-230ae6c39545", e._sentryDebugIdIdentifier = "sentry-dbid-7a8ed36b-2fdb-4082-a2b3-230ae6c39545")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [8068], {
    25130: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => i
      }), Math.pow(10, 8);
      const r = 36e5,
        o = Symbol.for("constructDateFrom");

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && o in e ? e[o](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }

      function i(e, t, n) {
        const [o, i] = function(e, ...t) {
          const n = a.bind(null, e || t.find(e => "object" == typeof e));
          return t.map(n)
        }(n?.in, e, t), c = (+o - +i) / r;
        return (s = n?.roundingMethod, e => {
          const t = (s ? Math[s] : Math.trunc)(e);
          return 0 === t ? 0 : t
        })(c);
        var s
      }
    },
    39763: (e, t, n) => {
      var r, o, a, i = n(88989);

      function c(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function s(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function u(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function l(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function d(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function f(e) {
        return e = d(e, [0, e[0] >>> 1]), e = d(e = s(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), d(e = s(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function m(e) {
        return e.length > 32 ? function(e, t) {
          t = t || 0;
          let n, r = (e = e || "").length % 16,
            o = e.length - r,
            a = [0, t],
            i = [0, t],
            m = [0, 0],
            h = [0, 0],
            p = [2277735313, 289559509],
            g = [1291169091, 658871167];
          for (n = 0; n < o; n += 16) m = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], h = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], m = s(m, p), m = u(m, 31), m = s(m, g), a = d(a, m), a = u(a, 27), a = c(a, i), a = c(s(a, [0, 5]), [0, 1390208809]), h = s(h, g), h = u(h, 33), h = s(h, p), i = d(i, h), i = u(i, 31), i = c(i, a), i = c(s(i, [0, 5]), [0, 944331445]);
          switch (m = [0, 0], h = [0, 0], r) {
            case 15:
              h = d(h, l([0, e.charCodeAt(n + 14)], 48));
              break;
            case 14:
              h = d(h, l([0, e.charCodeAt(n + 13)], 40));
              break;
            case 13:
              h = d(h, l([0, e.charCodeAt(n + 12)], 32));
              break;
            case 12:
              h = d(h, l([0, e.charCodeAt(n + 11)], 24));
              break;
            case 11:
              h = d(h, l([0, e.charCodeAt(n + 10)], 16));
              break;
            case 10:
              h = d(h, l([0, e.charCodeAt(n + 9)], 8));
              break;
            case 9:
              h = d(h, [0, e.charCodeAt(n + 8)]), h = s(h, g), h = u(h, 33), h = s(h, p), i = d(i, h);
              break;
            case 8:
              m = d(m, l([0, e.charCodeAt(n + 7)], 56));
              break;
            case 7:
              m = d(m, l([0, e.charCodeAt(n + 6)], 48));
              break;
            case 6:
              m = d(m, l([0, e.charCodeAt(n + 5)], 40));
              break;
            case 5:
              m = d(m, l([0, e.charCodeAt(n + 4)], 32));
              break;
            case 4:
              m = d(m, l([0, e.charCodeAt(n + 3)], 24));
              break;
            case 3:
              m = d(m, l([0, e.charCodeAt(n + 2)], 16));
              break;
            case 2:
              m = d(m, l([0, e.charCodeAt(n + 1)], 8));
              break;
            case 1:
              m = d(m, [0, e.charCodeAt(n)]), m = s(m, p), m = u(m, 31), m = s(m, g), a = d(a, m)
          }
          return a = d(a, [0, e.length]), i = d(i, [0, e.length]), a = c(a, i), i = c(i, a), a = f(a), i = f(i), a = c(a, i), i = c(i, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
        }(e, 31) : e
      }

      function h(e) {
        let t = [...e];
        return function() {
          const e = [/palemoon/i];
          let t = !1;
          for (let n = 0, r = e.length; n < r; n++) {
            let r = e[n];
            if (navigator.userAgent.match(r)) {
              t = !0;
              break
            }
          }
          return t
        }() && (t = t.sort(function(e, t) {
          return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
        })), t.map(e => {
          let t = e.mimeTypes.map(e => [e.type, e.suffixes].join("~"));
          return [e.name, e.description, t].join("::")
        })
      }

      function p() {
        let e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
      }

      function g() {
        let e = document.createElement("div");
        e.innerHTML = "&nbsp;", e.className = "adsbox";
        let t = !1;
        try {
          document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
        } catch {
          t = !1
        }
        return t
      }

      function v(e) {
        let t, n = navigator.oscpu,
          r = navigator.platform.toLowerCase(),
          o = y(e);
        if (t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, t && "Windows Phone" !== o && "Android" !== o && "iOS" !== o && "Other" !== o) return !0;
        if (void 0 !== n) {
          if (n = n.toLowerCase(), n.indexOf("win") >= 0 && "Windows" !== o && "Windows Phone" !== o) return !0;
          if (n.indexOf("linux") >= 0 && "Linux" !== o && "Android" !== o) return !0;
          if (n.indexOf("mac") >= 0 && "Mac" !== o && "iOS" !== o) return !0;
          if (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== o) return !0
        }
        return r.indexOf("win") >= 0 && "Windows" !== o && "Windows Phone" !== o || (r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== o && "Android" !== o || (r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== o && "iOS" !== o || 0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== o || void 0 === navigator.plugins && "Windows" !== o && "Windows Phone" !== o
      }

      function b(e, t) {
        const n = function() {
            let e, t = navigator.userAgent.toLowerCase();
            return e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("ucbrowser") >= 0 ? "UC Browser" : t.indexOf("maxthon") >= 0 ? "Maxthon" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("edge") >= 0 || t.indexOf("edg") >= 0 ? "Microsoft Edge" : t.indexOf("chrome") >= 0 || t.indexOf("crios") >= 0 ? "Chrome" : t.indexOf("playstation") >= 0 ? "PlayStation" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : t.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Unknown browser", e
          }(),
          r = y(e, t);
        switch (n) {
          case "PlayStation":
          case "Nintendo":
            return r;
          default:
            return n + " on " + r
        }
      }

      function y(e, t) {
        if (e) return e;
        let n, r = navigator.userAgent.toLowerCase();
        return n = r.indexOf("windows phone") >= 0 ? "Windows Phone" : r.indexOf("steam") >= 0 ? "Steam" : r.indexOf("xbox series x") >= 0 || r.indexOf("xbox series s") >= 0 ? "Xbox Series X|S" : r.indexOf("xbox one") >= 0 || r.indexOf("xbox_one") >= 0 ? "Xbox One" : r.indexOf("xbox") >= 0 ? "Xbox 360" : t && t.model && "xbox" === t.model.toLowerCase() ? "Xbox" : r.indexOf("playstation 5") >= 0 ? "PlayStation 5" : r.indexOf("playstation 4") >= 0 ? "PlayStation 4" : r.indexOf("playstation 3") >= 0 ? "PlayStation 3" : r.indexOf("win") >= 0 ? "Windows" : r.indexOf("android") >= 0 ? "Android" : r.indexOf("linux") >= 0 ? "Linux" : r.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : r.indexOf("iphone") >= 0 || r.indexOf("ipad") >= 0 ? "iOS" : r.indexOf("mac") >= 0 ? "Mac" : "Unknown OS", n
      }

      function w() {
        let e = ["monospace", "sans-serif", "serif"],
          t = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
          n = document.getElementsByTagName("body")[0],
          r = document.createElement("div"),
          o = document.createElement("div"),
          a = {},
          i = {},
          c = function() {
            let e = document.createElement("span");
            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.innerHTML = "mmmmmmmmmmlli", e
          },
          s = function(e, t) {
            let n = c();
            return n.style.fontFamily = "'" + e + "'," + t, n
          },
          u = function(t) {
            let n = !1;
            for (let r = 0; r < e.length; r++)
              if (n = t[r].offsetWidth !== a[e[r]] || t[r].offsetHeight !== i[e[r]], n) return n;
            return n
          },
          l = function() {
            let t = [];
            for (let n = 0, o = e.length; n < o; n++) {
              let o = c();
              o.style.fontFamily = e[n], r.appendChild(o), t.push(o)
            }
            return t
          }();
        n.appendChild(r);
        for (let t = 0, n = e.length; t < n; t++) a[e[t]] = l[t].offsetWidth, i[e[t]] = l[t].offsetHeight;
        let d = function() {
          let n = {};
          for (let r = 0, a = t.length; r < a; r++) {
            let a = [];
            for (let n = 0, i = e.length; n < i; n++) {
              let i = s(t[r], e[n]);
              o.appendChild(i), a.push(i)
            }
            n[t[r]] = a
          }
          return n
        }();
        n.appendChild(o);
        let f = [];
        for (let e = 0, n = t.length; e < n; e++) u(d[t[e]]) && f.push(t[e]);
        return n.removeChild(o), n.removeChild(r), f
      }
      r = e.exports, Object.defineProperty(r, "__esModule", {
        value: !0,
        configurable: !0
      }), o = e.exports, a = () => x, Object.defineProperty(o, "default", {
        get: a,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
      let _ = null;
      const S = {
        get: function(e) {
          return _ || (_ = new Promise(t => {
            const n = function(e) {
                return e && e.__esModule ? e.default : e
              }(i).load({
                monitoring: !1
              }),
              r = navigator.userAgentData && navigator.userAgentData.getHighEntropyValues ? navigator.userAgentData.getHighEntropyValues(["model"]) : Promise.resolve({});
            Promise.all([n, r]).then(n => {
              const r = n[0],
                o = n[1];
              r.get().then(n => {
                const r = n.components,
                  a = {
                    fp: {
                      user_agent: m(navigator.userAgent),
                      language: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "",
                      pixel_ratio: window.devicePixelRatio || "",
                      timezone_offset: (new Date).getTimezoneOffset(),
                      session_storage: r.sessionStorage.value ? 1 : 0,
                      local_storage: r.localStorage.value ? 1 : 0,
                      indexed_db: r.indexedDB.value ? 1 : 0,
                      open_database: r.openDatabase.value ? 1 : 0,
                      cpu_class: r.cpuClass.value ? r.cpuClass.value : "unknown",
                      navigator_platform: r.platform.value ? r.platform.value : "unknown",
                      do_not_track: navigator.doNotTrack ? navigator.doNotTrack : "unknown",
                      regular_plugins: m(h(r.plugins.value).join(";")),
                      canvas: null,
                      webgl: null,
                      adblock: m(g()),
                      has_lied_os: v(o),
                      touch_support: [r.touchSupport.value.maxTouchPoints, r.touchSupport.value.touchEvent, r.touchSupport.value.touchStart].join(";"),
                      device_name: b(e, o),
                      js_fonts: m(w().join(";"))
                    }
                  };
                p() ? a.fp.canvas = m(function() {
                    let e = [],
                      t = document.createElement("canvas");
                    t.width = 2e3, t.height = 200, t.style.display = "inline";
                    let n = t.getContext("2d");
                    return n.rect(0, 0, 10, 10), n.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(125, 1, 62, 20), n.fillStyle = "#069", n.font = "11pt no-real-font-123", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), n.globalCompositeOperation = "multiply", n.fillStyle = "rgb(255,0,255)", n.beginPath(), n.arc(50, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(0,255,255)", n.beginPath(), n.arc(100, 50, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,255,0)", n.beginPath(), n.arc(75, 100, 50, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), n.fillStyle = "rgb(255,0,255)", n.arc(75, 75, 75, 0, 2 * Math.PI, !0), n.arc(75, 75, 25, 0, 2 * Math.PI, !0), n.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
                  }()) : delete a.fp.canvas,
                  function() {
                    if (!p()) return !1;
                    let e, t = document.createElement("canvas");
                    try {
                      e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                    } catch {
                      e = !1
                    }
                    return !!window.WebGLRenderingContext && !!e
                  }() ? a.fp.webgl = m(function() {
                    let e, t = function(t) {
                      return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                    };
                    if (e = function() {
                        let e = document.createElement("canvas"),
                          t = null;
                        try {
                          t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch {}
                        return t || (t = null), t
                      }(), !e) return null;
                    let n = [],
                      r = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, r);
                    let o = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW), r.itemSize = 3, r.numItems = 3;
                    let a = e.createProgram(),
                      i = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(i, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(i);
                    let c = e.createShader(e.FRAGMENT_SHADER);
                    return e.shaderSource(c, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(c), e.attachShader(a, i), e.attachShader(a, c), e.linkProgram(a), e.useProgram(a), a.vertexPosAttrib = e.getAttribLocation(a, "attrVertex"), a.offsetUniform = e.getUniformLocation(a, "uniformOffset"), e.enableVertexAttribArray(a.vertexPosArray), e.vertexAttribPointer(a.vertexPosAttrib, r.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(a.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, r.numItems), e.canvas && n.push(e.canvas.toDataURL()), n.push("extensions:" + e.getSupportedExtensions().join(";")), n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), n.push("webgl max anisotropy:" + function(e) {
                      let t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                      return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                    }(e)), n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), n.push("webgl red bits:" + e.getParameter(e.RED_BITS)), n.push("webgl renderer:" + e.getParameter(e.RENDERER)), n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), n.push("webgl vendor:" + e.getParameter(e.VENDOR)), n.push("webgl version:" + e.getParameter(e.VERSION)), e.getShaderPrecisionFormat ? (n.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), n.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), n.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), n.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), n.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), n.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), n.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), n.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), n.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), n.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), n.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), n.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), n.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), n.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), n.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), n.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), n.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), n.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), n.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), n.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), n.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), n.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), n.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), n.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), n.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), n.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), n.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), n.join("~")) : ("undefined" == typeof NODEBUG && console.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), n.join("~"))
                  }()) : delete a.fp.webgl;
                const i = JSON.stringify(a);
                t(i)
              })
            }).catch(e => console.error(e))
          })), _
        }
      };
      var x = S
    },
    78322: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        __addDisposableResource: () => k,
        __assign: () => a,
        __asyncDelegator: () => A,
        __asyncGenerator: () => E,
        __asyncValues: () => M,
        __await: () => x,
        __awaiter: () => h,
        __classPrivateFieldGet: () => I,
        __classPrivateFieldIn: () => O,
        __classPrivateFieldSet: () => F,
        __createBinding: () => g,
        __decorate: () => c,
        __disposeResources: () => D,
        __esDecorate: () => u,
        __exportStar: () => v,
        __extends: () => o,
        __generator: () => p,
        __importDefault: () => C,
        __importStar: () => P,
        __makeTemplateObject: () => R,
        __metadata: () => m,
        __param: () => s,
        __propKey: () => d,
        __read: () => y,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => W,
        __runInitializers: () => l,
        __setFunctionName: () => f,
        __spread: () => w,
        __spreadArray: () => S,
        __spreadArrays: () => _,
        __values: () => b,
        default: () => H
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function c(e, t, n, r) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      }

      function s(e, t) {
        return function(n, r) {
          t(n, r, e)
        }
      }

      function u(e, t, n, r, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, s = r.kind, u = "getter" === s ? "get" : "setter" === s ? "set" : "value", l = !t && e ? r.static ? e : e.prototype : null, d = t || (l ? Object.getOwnPropertyDescriptor(l, r.name) : {}), f = !1, m = n.length - 1; m >= 0; m--) {
          var h = {};
          for (var p in r) h[p] = "access" === p ? {} : r[p];
          for (var p in r.access) h.access[p] = r.access[p];
          h.addInitializer = function(e) {
            if (f) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var g = (0, n[m])("accessor" === s ? {
            get: d.get,
            set: d.set
          } : d[u], h);
          if ("accessor" === s) {
            if (void 0 === g) continue;
            if (null === g || "object" != typeof g) throw new TypeError("Object expected");
            (c = i(g.get)) && (d.get = c), (c = i(g.set)) && (d.set = c), (c = i(g.init)) && o.unshift(c)
          } else(c = i(g)) && ("field" === s ? o.unshift(c) : d[u] = c)
        }
        l && Object.defineProperty(l, r.name, d), f = !0
      }

      function l(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0
      }

      function d(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function f(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t
        })
      }

      function m(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function h(e, t, n, r) {
        return new(n || (n = Promise))(function(o, a) {
          function i(e) {
            try {
              s(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              s(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
              e(t)
            })).then(i, c)
          }
          s((r = r.apply(e, t || [])).next())
        })
      }

      function p(e, t) {
        var n, r, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function c(c) {
          return function(s) {
            return function(c) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      a.label = o[1], o = c;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(c);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = t.call(e, a)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, s])
          }
        }
      }
      var g = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[n]
          }
        }), Object.defineProperty(e, r, o)
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
      };

      function v(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || g(t, e, n)
      }

      function b(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function y(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function w() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
        return e
      }

      function _() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) r[o] = a[i];
        return r
      }

      function S(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }

      function x(e) {
        return this instanceof x ? (this.v = e, this) : new x(e)
      }

      function E(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []),
          a = [];
        return r = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        }), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function i(e, t) {
          o[e] && (r[e] = function(t) {
            return new Promise(function(n, r) {
              a.push([e, t, n, r]) > 1 || c(e, t)
            })
          }, t && (r[e] = t(r[e])))
        }

        function c(e, t) {
          try {
            (n = o[e](t)).value instanceof x ? Promise.resolve(n.value.v).then(s, u) : l(a[0][2], n)
          } catch (e) {
            l(a[0][3], e)
          }
          var n
        }

        function s(e) {
          c("next", e)
        }

        function u(e) {
          c("throw", e)
        }

        function l(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function A(e) {
        var t, n;
        return t = {}, r("next"), r("throw", function(e) {
          throw e
        }), r("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function r(r, o) {
          t[r] = e[r] ? function(t) {
            return (n = !n) ? {
              value: x(e[r](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function M(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = b(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function r(n) {
          t[n] = e[n] && function(t) {
            return new Promise(function(r, o) {
              ! function(e, t, n, r) {
                Promise.resolve(r).then(function(t) {
                  e({
                    value: t,
                    done: n
                  })
                }, t)
              }(r, o, (t = e[n](t)).done, t.value)
            })
          }
        }
      }

      function R(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var L = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
            return t
          }, T(e)
        };

      function P(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n = T(e), r = 0; r < n.length; r++) "default" !== n[r] && g(t, e, n[r]);
        return L(t, e), t
      }

      function C(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function I(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
      }

      function F(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
      }

      function O(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function k(e, t, n) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r, o;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose], n && (o = r)
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          o && (r = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: r,
            async: n
          })
        } else n && e.stack.push({
          async: !0
        });
        return t
      }
      var V = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function D(e) {
        function t(t) {
          e.error = e.hasError ? new V(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var n, r = 0;
        return function o() {
          for (; n = e.stack.pop();) try {
            if (!n.async && 1 === r) return r = 0, e.stack.push(n), Promise.resolve().then(o);
            if (n.dispose) {
              var a = n.dispose.call(n.value);
              if (n.async) return r |= 2, Promise.resolve(a).then(o, function(e) {
                return t(e), o()
              })
            } else r |= 1
          } catch (e) {
            t(e)
          }
          if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function W(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, n, r, o, a) {
          return n ? t ? ".jsx" : ".js" : !r || o && a ? r + o + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const H = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: s,
        __esDecorate: u,
        __runInitializers: l,
        __propKey: d,
        __setFunctionName: f,
        __metadata: m,
        __awaiter: h,
        __generator: p,
        __createBinding: g,
        __exportStar: v,
        __values: b,
        __read: y,
        __spread: w,
        __spreadArrays: _,
        __spreadArray: S,
        __await: x,
        __asyncGenerator: E,
        __asyncDelegator: A,
        __asyncValues: M,
        __makeTemplateObject: R,
        __importStar: P,
        __importDefault: C,
        __classPrivateFieldGet: I,
        __classPrivateFieldSet: F,
        __classPrivateFieldIn: O,
        __addDisposableResource: k,
        __disposeResources: D,
        __rewriteRelativeImportExtension: W
      }
    },
    88989: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        componentsToDebugString: () => ae,
        default: () => le,
        getFullscreenElement: () => I,
        getScreenFrame: () => Z,
        hashComponents: () => ie,
        isAndroid: () => F,
        isChromium: () => L,
        isDesktopSafari: () => P,
        isEdgeHTML: () => R,
        isGecko: () => C,
        isTrident: () => M,
        isWebKit: () => T,
        load: () => ue,
        loadSources: () => E,
        murmurX64Hash128: () => de,
        prepareForSources: () => ce,
        sources: () => re,
        transformSource: () => A,
        withIframe: () => k
      });
      var r = n(78322),
        o = "3.4.2";

      function a(e, t) {
        return new Promise(function(n) {
          return setTimeout(n, e, t)
        })
      }

      function i(e) {
        return !!e && "function" == typeof e.then
      }

      function c(e, t) {
        try {
          var n = e();
          i(n) ? n.then(function(e) {
            return t(!0, e)
          }, function(e) {
            return t(!1, e)
          }) : t(!0, n)
        } catch (e) {
          t(!1, e)
        }
      }

      function s(e, t, n) {
        return void 0 === n && (n = 16), (0, r.__awaiter)(this, void 0, void 0, function() {
          var o, i, c, s;
          return (0, r.__generator)(this, function(r) {
            switch (r.label) {
              case 0:
                o = Array(e.length), i = Date.now(), c = 0, r.label = 1;
              case 1:
                return c < e.length ? (o[c] = t(e[c], c), (s = Date.now()) >= i + n ? (i = s, [4, a(0)]) : [3, 3]) : [3, 4];
              case 2:
                r.sent(), r.label = 3;
              case 3:
                return ++c, [3, 1];
              case 4:
                return [2, o]
            }
          })
        })
      }

      function u(e) {
        e.then(void 0, function() {})
      }

      function l(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function d(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var n = [0, 0, 0, 0];
        return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
      }

      function f(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function m(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function h(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function p(e) {
        return e = h(e, [0, e[0] >>> 1]), e = h(e = d(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), h(e = d(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function g(e, t) {
        t = t || 0;
        var n, r = (e = e || "").length % 16,
          o = e.length - r,
          a = [0, t],
          i = [0, t],
          c = [0, 0],
          s = [0, 0],
          u = [2277735313, 289559509],
          g = [1291169091, 658871167];
        for (n = 0; n < o; n += 16) c = [255 & e.charCodeAt(n + 4) | (255 & e.charCodeAt(n + 5)) << 8 | (255 & e.charCodeAt(n + 6)) << 16 | (255 & e.charCodeAt(n + 7)) << 24, 255 & e.charCodeAt(n) | (255 & e.charCodeAt(n + 1)) << 8 | (255 & e.charCodeAt(n + 2)) << 16 | (255 & e.charCodeAt(n + 3)) << 24], s = [255 & e.charCodeAt(n + 12) | (255 & e.charCodeAt(n + 13)) << 8 | (255 & e.charCodeAt(n + 14)) << 16 | (255 & e.charCodeAt(n + 15)) << 24, 255 & e.charCodeAt(n + 8) | (255 & e.charCodeAt(n + 9)) << 8 | (255 & e.charCodeAt(n + 10)) << 16 | (255 & e.charCodeAt(n + 11)) << 24], c = f(c = d(c, u), 31), a = l(a = f(a = h(a, c = d(c, g)), 27), i), a = l(d(a, [0, 5]), [0, 1390208809]), s = f(s = d(s, g), 33), i = l(i = f(i = h(i, s = d(s, u)), 31), a), i = l(d(i, [0, 5]), [0, 944331445]);
        switch (c = [0, 0], s = [0, 0], r) {
          case 15:
            s = h(s, m([0, e.charCodeAt(n + 14)], 48));
          case 14:
            s = h(s, m([0, e.charCodeAt(n + 13)], 40));
          case 13:
            s = h(s, m([0, e.charCodeAt(n + 12)], 32));
          case 12:
            s = h(s, m([0, e.charCodeAt(n + 11)], 24));
          case 11:
            s = h(s, m([0, e.charCodeAt(n + 10)], 16));
          case 10:
            s = h(s, m([0, e.charCodeAt(n + 9)], 8));
          case 9:
            s = d(s = h(s, [0, e.charCodeAt(n + 8)]), g), i = h(i, s = d(s = f(s, 33), u));
          case 8:
            c = h(c, m([0, e.charCodeAt(n + 7)], 56));
          case 7:
            c = h(c, m([0, e.charCodeAt(n + 6)], 48));
          case 6:
            c = h(c, m([0, e.charCodeAt(n + 5)], 40));
          case 5:
            c = h(c, m([0, e.charCodeAt(n + 4)], 32));
          case 4:
            c = h(c, m([0, e.charCodeAt(n + 3)], 24));
          case 3:
            c = h(c, m([0, e.charCodeAt(n + 2)], 16));
          case 2:
            c = h(c, m([0, e.charCodeAt(n + 1)], 8));
          case 1:
            c = d(c = h(c, [0, e.charCodeAt(n)]), u), a = h(a, c = d(c = f(c, 31), g))
        }
        return a = l(a = h(a, [0, e.length]), i = h(i, [0, e.length])), i = l(i, a), a = l(a = p(a), i = p(i)), i = l(i, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
      }

      function v(e) {
        return parseInt(e)
      }

      function b(e) {
        return parseFloat(e)
      }

      function y(e, t) {
        return "number" == typeof e && isNaN(e) ? t : e
      }

      function w(e) {
        return e.reduce(function(e, t) {
          return e + (t ? 1 : 0)
        }, 0)
      }

      function _(e, t) {
        if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
        var n = 1 / t;
        return Math.round(e * n) / n
      }

      function S(e) {
        return e && "object" == typeof e && "message" in e ? e : {
          message: e
        }
      }

      function x(e) {
        return "function" != typeof e
      }

      function E(e, t, n) {
        var o = Object.keys(e).filter(function(e) {
            return ! function(e, t) {
              for (var n = 0, r = e.length; n < r; ++n)
                if (e[n] === t) return !0;
              return !1
            }(n, e)
          }),
          a = s(o, function(n) {
            return function(e, t) {
              var n = new Promise(function(n) {
                var r = Date.now();
                c(e.bind(null, t), function() {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  var o = Date.now() - r;
                  if (!e[0]) return n(function() {
                    return {
                      error: S(e[1]),
                      duration: o
                    }
                  });
                  var a = e[1];
                  if (x(a)) return n(function() {
                    return {
                      value: a,
                      duration: o
                    }
                  });
                  n(function() {
                    return new Promise(function(e) {
                      var t = Date.now();
                      c(a, function() {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var a = o + Date.now() - t;
                        if (!n[0]) return e({
                          error: S(n[1]),
                          duration: a
                        });
                        e({
                          value: n[1],
                          duration: a
                        })
                      })
                    })
                  })
                })
              });
              return u(n),
                function() {
                  return n.then(function(e) {
                    return e()
                  })
                }
            }(e[n], t)
          });
        return u(a),
          function() {
            return (0, r.__awaiter)(this, void 0, void 0, function() {
              var e, t, n, i;
              return (0, r.__generator)(this, function(r) {
                switch (r.label) {
                  case 0:
                    return [4, a];
                  case 1:
                    return [4, s(r.sent(), function(e) {
                      var t = e();
                      return u(t), t
                    })];
                  case 2:
                    return e = r.sent(), [4, Promise.all(e)];
                  case 3:
                    for (t = r.sent(), n = {}, i = 0; i < o.length; ++i) n[o[i]] = t[i];
                    return [2, n]
                }
              })
            })
          }
      }

      function A(e, t) {
        var n = function(e) {
          return x(e) ? t(e) : function() {
            var n = e();
            return i(n) ? n.then(t) : t(n)
          }
        };
        return function(t) {
          var r = e(t);
          return i(r) ? r.then(n) : n(r)
        }
      }

      function M() {
        var e = window,
          t = navigator;
        return w(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
      }

      function R() {
        var e = window,
          t = navigator;
        return w(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !M()
      }

      function L() {
        var e = window,
          t = navigator;
        return w(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
      }

      function T() {
        var e = window,
          t = navigator;
        return w(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
      }

      function P() {
        var e = window;
        return w(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
      }

      function C() {
        var e, t, n = window;
        return w(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]) >= 4
      }

      function I() {
        var e = document;
        return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
      }

      function F() {
        var e = L(),
          t = C();
        if (!e && !t) return !1;
        var n = window;
        return w(["onorientationchange" in n, "orientation" in n, e && !("SharedWorker" in n), t && /android/i.test(navigator.appVersion)]) >= 2
      }

      function O(e) {
        var t = new Error(e);
        return t.name = e, t
      }

      function k(e, t, n) {
        var o, i, c;
        return void 0 === n && (n = 50), (0, r.__awaiter)(this, void 0, void 0, function() {
          var s, u;
          return (0, r.__generator)(this, function(r) {
            switch (r.label) {
              case 0:
                s = document, r.label = 1;
              case 1:
                return s.body ? [3, 3] : [4, a(n)];
              case 2:
                return r.sent(), [3, 1];
              case 3:
                u = s.createElement("iframe"), r.label = 4;
              case 4:
                return r.trys.push([4, , 10, 11]), [4, new Promise(function(e, n) {
                  var r = !1,
                    o = function() {
                      r = !0, e()
                    };
                  u.onload = o, u.onerror = function(e) {
                    r = !0, n(e)
                  };
                  var a = u.style;
                  a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", t && "srcdoc" in u ? u.srcdoc = t : u.src = "about:blank", s.body.appendChild(u);
                  var i = function() {
                    var e, t;
                    r || ("complete" === (null === (t = null === (e = u.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(i, 10))
                  };
                  i()
                })];
              case 5:
                r.sent(), r.label = 6;
              case 6:
                return (null === (i = null === (o = u.contentWindow) || void 0 === o ? void 0 : o.document) || void 0 === i ? void 0 : i.body) ? [3, 8] : [4, a(n)];
              case 7:
                return r.sent(), [3, 6];
              case 8:
                return [4, e(u, u.contentWindow)];
              case 9:
                return [2, r.sent()];
              case 10:
                return null === (c = u.parentNode) || void 0 === c || c.removeChild(u), [7];
              case 11:
                return [2]
            }
          })
        })
      }

      function V(e) {
        for (var t = function(e) {
            for (var t, n, r = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), a = o[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, s = function(e, t) {
                i[e] = i[e] || [], i[e].push(t)
              };;) {
              var u = c.exec(o[2]);
              if (!u) break;
              var l = u[0];
              switch (l[0]) {
                case ".":
                  s("class", l.slice(1));
                  break;
                case "#":
                  s("id", l.slice(1));
                  break;
                case "[":
                  var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                  if (!d) throw new Error(r);
                  s(d[1], null !== (n = null !== (t = d[4]) && void 0 !== t ? t : d[5]) && void 0 !== n ? n : "");
                  break;
                default:
                  throw new Error(r)
              }
            }
            return [a, i]
          }(e), n = t[0], r = t[1], o = document.createElement(null != n ? n : "div"), a = 0, i = Object.keys(r); a < i.length; a++) {
          var c = i[a],
            s = r[c].join(" ");
          "style" === c ? D(o.style, s) : o.setAttribute(c, s)
        }
        return o
      }

      function D(e, t) {
        for (var n = 0, r = t.split(";"); n < r.length; n++) {
          var o = r[n],
            a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
          if (a) {
            var i = a[1],
              c = a[2],
              s = a[4];
            e.setProperty(i, c, s || "")
          }
        }
      }
      var W = ["monospace", "sans-serif", "serif"],
        H = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

      function j(e) {
        return e.toDataURL()
      }
      var G, N, X = 2500;

      function Z() {
        var e = this;
        return function() {
            if (void 0 === N) {
              var e = function() {
                var t = Y();
                B(t) ? N = setTimeout(e, X) : (G = t, N = void 0)
              };
              e()
            }
          }(),
          function() {
            return (0, r.__awaiter)(e, void 0, void 0, function() {
              var e;
              return (0, r.__generator)(this, function(t) {
                switch (t.label) {
                  case 0:
                    return B(e = Y()) ? G ? [2, (0, r.__spreadArray)([], G, !0)] : I() ? [4, (n = document, (n.exitFullscreen || n.msExitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen).call(n))] : [3, 2] : [3, 2];
                  case 1:
                    t.sent(), e = Y(), t.label = 2;
                  case 2:
                    return B(e) || (G = e), [2, e]
                }
                var n
              })
            })
          }
      }

      function Y() {
        var e = screen;
        return [y(b(e.availTop), null), y(b(e.width) - b(e.availWidth) - y(b(e.availLeft), 0), null), y(b(e.height) - b(e.availHeight) - y(b(e.availTop), 0), null), y(b(e.availLeft), null)]
      }

      function B(e) {
        for (var t = 0; t < 4; ++t)
          if (e[t]) return !1;
        return !0
      }

      function U(e) {
        var t;
        return (0, r.__awaiter)(this, void 0, void 0, function() {
          var n, o, i, c, s, u, l;
          return (0, r.__generator)(this, function(r) {
            switch (r.label) {
              case 0:
                for (n = document, o = n.createElement("div"), i = new Array(e.length), c = {}, z(o), l = 0; l < e.length; ++l) "DIALOG" === (s = V(e[l])).tagName && s.show(), z(u = n.createElement("div")), u.appendChild(s), o.appendChild(u), i[l] = s;
                r.label = 1;
              case 1:
                return n.body ? [3, 3] : [4, a(50)];
              case 2:
                return r.sent(), [3, 1];
              case 3:
                n.body.appendChild(o);
                try {
                  for (l = 0; l < e.length; ++l) i[l].offsetParent || (c[e[l]] = !0)
                } finally {
                  null === (t = o.parentNode) || void 0 === t || t.removeChild(o)
                }
                return [2, c]
            }
          })
        })
      }

      function z(e) {
        e.style.setProperty("display", "block", "important")
      }

      function J(e) {
        return matchMedia("(inverted-colors: ".concat(e, ")")).matches
      }

      function Q(e) {
        return matchMedia("(forced-colors: ".concat(e, ")")).matches
      }

      function K(e) {
        return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
      }

      function q(e) {
        return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
      }

      function $(e) {
        return matchMedia("(dynamic-range: ".concat(e, ")")).matches
      }
      var ee = Math,
        te = function() {
          return 0
        },
        ne = {
          default: [],
          apple: [{
            font: "-apple-system-body"
          }],
          serif: [{
            fontFamily: "serif"
          }],
          sans: [{
            fontFamily: "sans-serif"
          }],
          mono: [{
            fontFamily: "monospace"
          }],
          min: [{
            fontSize: "1px"
          }],
          system: [{
            fontFamily: "system-ui"
          }]
        },
        re = {
          fonts: function() {
            return k(function(e, t) {
              var n = t.document,
                r = n.body;
              r.style.fontSize = "48px";
              var o = n.createElement("div"),
                a = {},
                i = {},
                c = function(e) {
                  var t = n.createElement("span"),
                    r = t.style;
                  return r.position = "absolute", r.top = "0", r.left = "0", r.fontFamily = e, t.textContent = "mmMwWLliI0O&1", o.appendChild(t), t
                },
                s = W.map(c),
                u = function() {
                  for (var e = {}, t = function(t) {
                      e[t] = W.map(function(e) {
                        return function(e, t) {
                          return c("'".concat(e, "',").concat(t))
                        }(t, e)
                      })
                    }, n = 0, r = H; n < r.length; n++) t(r[n]);
                  return e
                }();
              r.appendChild(o);
              for (var l = 0; l < W.length; l++) a[W[l]] = s[l].offsetWidth, i[W[l]] = s[l].offsetHeight;
              return H.filter(function(e) {
                return t = u[e], W.some(function(e, n) {
                  return t[n].offsetWidth !== a[e] || t[n].offsetHeight !== i[e]
                });
                var t
              })
            })
          },
          domBlockers: function(e) {
            var t = (void 0 === e ? {} : e).debug;
            return (0, r.__awaiter)(this, void 0, void 0, function() {
              var e, n, o, a, i;
              return (0, r.__generator)(this, function(r) {
                switch (r.label) {
                  case 0:
                    return T() || F() ? (c = atob, e = {
                      abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', c("I0JveC1CYW5uZXItYWRz")],
                      abpvn: [".quangcao", "#mobileCatfish", c("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                      adBlockFinland: [".mainostila", c("LnNwb25zb3JpdA=="), ".ylamainos", c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                      adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                      adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", c("LmhlYWRlci1ibG9ja2VkLWFk"), c("I2FkX2Jsb2NrZXI=")],
                      adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                      adGuardBase: [".BetterJsPopOverlay", c("I2FkXzMwMFgyNTA="), c("I2Jhbm5lcmZsb2F0MjI="), c("I2NhbXBhaWduLWJhbm5lcg=="), c("I0FkLUNvbnRlbnQ=")],
                      adGuardChinese: [c("LlppX2FkX2FfSA=="), c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                      adGuardFrench: ["#pavePub", c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", c("LmFkc19iYW4=")],
                      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                      adGuardJapanese: ["#kauli_yad_1", c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), c("LmFkZ29vZ2xl"), c("Ll9faXNib29zdFJldHVybkFk")],
                      adGuardMobile: [c("YW1wLWF1dG8tYWRz"), c("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", c("I2FkX2ludmlld19hcmVh")],
                      adGuardRussian: [c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), c("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                      adGuardSocial: [c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                      adGuardTrackingProtection: ["#qoo-counter", c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                      adGuardTurkish: ["#backkapat", c("I3Jla2xhbWk="), c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                      bulgarian: [c("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                      easyList: [".yb-floorad", c("LndpZGdldF9wb19hZHNfd2lkZ2V0"), c("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                      easyListChina: [c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), c("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                      easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", c("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                      easyListCzechSlovak: ["#onlajny-stickers", c("I3Jla2xhbW5pLWJveA=="), c("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                      easyListDutch: [c("I2FkdmVydGVudGll"), c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                      easyListGermany: ["#SSpotIMPopSlider", c("LnNwb25zb3JsaW5rZ3J1ZW4="), c("I3dlcmJ1bmdza3k="), c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                      easyListItaly: [c("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                      easyListLithuania: [c("LnJla2xhbW9zX3RhcnBhcw=="), c("LnJla2xhbW9zX251b3JvZG9z"), c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                      estonian: [c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                      fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                      frellwitSwedish: [c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", c("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                      greekAdBlock: [c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                      hungarian: ["#cemp_doboz", ".optimonk-iframe-container", c("LmFkX19tYWlu"), c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                      iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                      icelandicAbp: [c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                      latvian: [c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                      listKr: [c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), c("I2xpdmVyZUFkV3JhcHBlcg=="), c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), c("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                      listeAr: [c("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                      listeFr: [c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                      officialPolish: ["#ceneo-placeholder-ceneo-12", c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), c("ZGl2I3NrYXBpZWNfYWQ=")],
                      ro: [c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                      ruAd: [c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                      thaiAds: ["a[href*=macau-uta-popup]", c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), c("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                      webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", c("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                    }, n = Object.keys(e), [4, U((i = []).concat.apply(i, n.map(function(t) {
                      return e[t]
                    })))]) : [2, void 0];
                  case 1:
                    return o = r.sent(), t && function(e, t) {
                      for (var n = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
                        var a = o[r];
                        n += "\n".concat(a, ":");
                        for (var i = 0, c = e[a]; i < c.length; i++) {
                          var s = c[i];
                          n += "\n  ".concat(t[s] ? "🚫" : "➡️", " ").concat(s)
                        }
                      }
                      console.log("".concat(n, "\n```"))
                    }(e, o), (a = n.filter(function(t) {
                      var n = e[t];
                      return w(n.map(function(e) {
                        return o[e]
                      })) > .6 * n.length
                    })).sort(), [2, a]
                }
                var c
              })
            })
          },
          fontPreferences: function() {
            return void 0 === e && (e = 4e3), k(function(t, n) {
              var o = n.document,
                a = o.body,
                i = a.style;
              i.width = "".concat(e, "px"), i.webkitTextSizeAdjust = i.textSizeAdjust = "none", L() ? a.style.zoom = "".concat(1 / n.devicePixelRatio) : T() && (a.style.zoom = "reset");
              var c = o.createElement("div");
              return c.textContent = (0, r.__spreadArray)([], Array(e / 20 | 0), !0).map(function() {
                  return "word"
                }).join(" "), a.appendChild(c),
                function(e, t) {
                  for (var n = {}, r = {}, o = 0, a = Object.keys(ne); o < a.length; o++) {
                    var i = a[o],
                      c = ne[i],
                      s = c[0],
                      u = void 0 === s ? {} : s,
                      l = c[1],
                      d = void 0 === l ? "mmMwWLliI0fiflO&1" : l,
                      f = e.createElement("span");
                    f.textContent = d, f.style.whiteSpace = "nowrap";
                    for (var m = 0, h = Object.keys(u); m < h.length; m++) {
                      var p = h[m],
                        g = u[p];
                      void 0 !== g && (f.style[p] = g)
                    }
                    n[i] = f, t.appendChild(e.createElement("br")), t.appendChild(f)
                  }
                  for (var v = 0, b = Object.keys(ne); v < b.length; v++) r[i = b[v]] = n[i].getBoundingClientRect().width;
                  return r
                }(o, a)
            }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
            var e
          },
          audio: function() {
            var e = window,
              t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!t) return -2;
            if (T() && !P() && ! function() {
                var e = window;
                return w(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
              }()) return -1;
            var n = new t(1, 5e3, 44100),
              r = n.createOscillator();
            r.type = "triangle", r.frequency.value = 1e4;
            var o = n.createDynamicsCompressor();
            o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, r.connect(o), o.connect(n.destination), r.start(0);
            var a = function(e) {
                var t = function() {};
                return [new Promise(function(n, r) {
                  var o = !1,
                    a = 0,
                    c = 0;
                  e.oncomplete = function(e) {
                    return n(e.renderedBuffer)
                  };
                  var s = function() {
                      setTimeout(function() {
                        return r(O("timeout"))
                      }, Math.min(500, c + 5e3 - Date.now()))
                    },
                    l = function() {
                      try {
                        var t = e.startRendering();
                        switch (i(t) && u(t), e.state) {
                          case "running":
                            c = Date.now(), o && s();
                            break;
                          case "suspended":
                            document.hidden || a++, o && a >= 3 ? r(O("suspended")) : setTimeout(l, 500)
                        }
                      } catch (e) {
                        r(e)
                      }
                    };
                  l(), t = function() {
                    o || (o = !0, c > 0 && s())
                  }
                }), t]
              }(n),
              c = a[0],
              s = a[1],
              l = c.then(function(e) {
                return function(e) {
                  for (var t = 0, n = 0; n < e.length; ++n) t += Math.abs(e[n]);
                  return t
                }(e.getChannelData(0).subarray(4500))
              }, function(e) {
                if ("timeout" === e.name || "suspended" === e.name) return -3;
                throw e
              });
            return u(l),
              function() {
                return s(), l
              }
          },
          screenFrame: function() {
            var e = this,
              t = Z();
            return function() {
              return (0, r.__awaiter)(e, void 0, void 0, function() {
                var e, n;
                return (0, r.__generator)(this, function(r) {
                  switch (r.label) {
                    case 0:
                      return [4, t()];
                    case 1:
                      return e = r.sent(), [2, [(n = function(e) {
                        return null === e ? null : _(e, 10)
                      })(e[0]), n(e[1]), n(e[2]), n(e[3])]]
                  }
                })
              })
            }
          },
          osCpu: function() {
            return navigator.oscpu
          },
          languages: function() {
            var e, t = navigator,
              n = [],
              r = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
            if (void 0 !== r && n.push([r]), Array.isArray(t.languages)) L() && w([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || n.push(t.languages);
            else if ("string" == typeof t.languages) {
              var o = t.languages;
              o && n.push(o.split(","))
            }
            return n
          },
          colorDepth: function() {
            return window.screen.colorDepth
          },
          deviceMemory: function() {
            return y(b(navigator.deviceMemory), void 0)
          },
          screenResolution: function() {
            var e = screen,
              t = function(e) {
                return y(v(e), null)
              },
              n = [t(e.width), t(e.height)];
            return n.sort().reverse(), n
          },
          hardwareConcurrency: function() {
            return y(v(navigator.hardwareConcurrency), void 0)
          },
          timezone: function() {
            var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
            if (t) {
              var n = (new t).resolvedOptions().timeZone;
              if (n) return n
            }
            var r, o = (r = (new Date).getFullYear(), -Math.max(b(new Date(r, 0, 1).getTimezoneOffset()), b(new Date(r, 6, 1).getTimezoneOffset())));
            return "UTC".concat(o >= 0 ? "+" : "").concat(Math.abs(o))
          },
          sessionStorage: function() {
            try {
              return !!window.sessionStorage
            } catch (e) {
              return !0
            }
          },
          localStorage: function() {
            try {
              return !!window.localStorage
            } catch (e) {
              return !0
            }
          },
          indexedDB: function() {
            if (!M() && !R()) try {
              return !!window.indexedDB
            } catch (e) {
              return !0
            }
          },
          openDatabase: function() {
            return !!window.openDatabase
          },
          cpuClass: function() {
            return navigator.cpuClass
          },
          platform: function() {
            var e = navigator.platform;
            return "MacIntel" === e && T() && !P() ? function() {
              if ("iPad" === navigator.platform) return !0;
              var e = screen,
                t = e.width / e.height;
              return w(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
            }() ? "iPad" : "iPhone" : e
          },
          plugins: function() {
            var e = navigator.plugins;
            if (e) {
              for (var t = [], n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r) {
                  for (var o = [], a = 0; a < r.length; ++a) {
                    var i = r[a];
                    o.push({
                      type: i.type,
                      suffixes: i.suffixes
                    })
                  }
                  t.push({
                    name: r.name,
                    description: r.description,
                    mimeTypes: o
                  })
                }
              }
              return t
            }
          },
          canvas: function() {
            var e, t, n = !1,
              r = function() {
                var e = document.createElement("canvas");
                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
              }(),
              o = r[0],
              a = r[1];
            if (function(e, t) {
                return !(!t || !e.toDataURL)
              }(o, a)) {
              n = function(e) {
                  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
                }(a),
                function(e, t) {
                  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                  var n = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                  t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(n, 4, 45)
                }(o, a);
              var i = j(o);
              i !== j(o) ? e = t = "unstable" : (t = i, function(e, t) {
                e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                for (var n = 0, r = [
                    ["#f2f", 40, 40],
                    ["#2ff", 80, 40],
                    ["#ff2", 60, 80]
                  ]; n < r.length; n++) {
                  var o = r[n],
                    a = o[0],
                    i = o[1],
                    c = o[2];
                  t.fillStyle = a, t.beginPath(), t.arc(i, c, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                }
                t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
              }(o, a), e = j(o))
            } else e = t = "";
            return {
              winding: n,
              geometry: e,
              text: t
            }
          },
          touchSupport: function() {
            var e, t = navigator,
              n = 0;
            void 0 !== t.maxTouchPoints ? n = v(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (n = t.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), e = !0
            } catch (t) {
              e = !1
            }
            return {
              maxTouchPoints: n,
              touchEvent: e,
              touchStart: "ontouchstart" in window
            }
          },
          vendor: function() {
            return navigator.vendor || ""
          },
          vendorFlavors: function() {
            for (var e = [], t = 0, n = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < n.length; t++) {
              var r = n[t],
                o = window[r];
              o && "object" == typeof o && e.push(r)
            }
            return e.sort()
          },
          cookiesEnabled: function() {
            var e = document;
            try {
              e.cookie = "cookietest=1; SameSite=Strict;";
              var t = -1 !== e.cookie.indexOf("cookietest=");
              return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
            } catch (e) {
              return !1
            }
          },
          colorGamut: function() {
            for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
              var n = t[e];
              if (matchMedia("(color-gamut: ".concat(n, ")")).matches) return n
            }
          },
          invertedColors: function() {
            return !!J("inverted") || !J("none") && void 0
          },
          forcedColors: function() {
            return !!Q("active") || !Q("none") && void 0
          },
          monochrome: function() {
            if (matchMedia("(min-monochrome: 0)").matches) {
              for (var e = 0; e <= 100; ++e)
                if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
              throw new Error("Too high value")
            }
          },
          contrast: function() {
            return K("no-preference") ? 0 : K("high") || K("more") ? 1 : K("low") || K("less") ? -1 : K("forced") ? 10 : void 0
          },
          reducedMotion: function() {
            return !!q("reduce") || !q("no-preference") && void 0
          },
          hdr: function() {
            return !!$("high") || !$("standard") && void 0
          },
          math: function() {
            var e, t = ee.acos || te,
              n = ee.acosh || te,
              r = ee.asin || te,
              o = ee.asinh || te,
              a = ee.atanh || te,
              i = ee.atan || te,
              c = ee.sin || te,
              s = ee.sinh || te,
              u = ee.cos || te,
              l = ee.cosh || te,
              d = ee.tan || te,
              f = ee.tanh || te,
              m = ee.exp || te,
              h = ee.expm1 || te,
              p = ee.log1p || te;
            return {
              acos: t(.12312423423423424),
              acosh: n(1e308),
              acoshPf: (e = 1e154, ee.log(e + ee.sqrt(e * e - 1))),
              asin: r(.12312423423423424),
              asinh: o(1),
              asinhPf: ee.log(1 + ee.sqrt(2)),
              atanh: a(.5),
              atanhPf: ee.log(3) / 2,
              atan: i(.5),
              sin: c(-1e300),
              sinh: s(1),
              sinhPf: ee.exp(1) - 1 / ee.exp(1) / 2,
              cos: u(10.000000000123),
              cosh: l(1),
              coshPf: (ee.exp(1) + 1 / ee.exp(1)) / 2,
              tan: d(-1e300),
              tanh: f(1),
              tanhPf: (ee.exp(2) - 1) / (ee.exp(2) + 1),
              exp: m(1),
              expm1: h(1),
              expm1Pf: ee.exp(1) - 1,
              log1p: p(10),
              log1pPf: ee.log(11),
              powPI: ee.pow(ee.PI, -100)
            }
          },
          videoCard: function() {
            var e, t = document.createElement("canvas"),
              n = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
            if (n && "getExtension" in n) {
              var r = n.getExtension("WEBGL_debug_renderer_info");
              if (r) return {
                vendor: (n.getParameter(r.UNMASKED_VENDOR_WEBGL) || "").toString(),
                renderer: (n.getParameter(r.UNMASKED_RENDERER_WEBGL) || "").toString()
              }
            }
          },
          pdfViewerEnabled: function() {
            return navigator.pdfViewerEnabled
          },
          architecture: function() {
            var e = new Float32Array(1),
              t = new Uint8Array(e.buffer);
            return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
          }
        },
        oe = "$ if upgrade to Pro: https://fpjs.dev/pro";

      function ae(e) {
        return JSON.stringify(e, function(e, t) {
          return t instanceof Error ? (n = t, (0, r.__assign)({
            name: n.name,
            message: n.message,
            stack: null === (o = n.stack) || void 0 === o ? void 0 : o.split("\n")
          }, n)) : t;
          var n, o
        }, 2)
      }

      function ie(e) {
        return g(function(e) {
          for (var t = "", n = 0, r = Object.keys(e).sort(); n < r.length; n++) {
            var o = r[n],
              a = e[o],
              i = a.error ? "error" : JSON.stringify(a.value);
            t += "".concat(t ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(i)
          }
          return t
        }(e))
      }

      function ce(e) {
        return void 0 === e && (e = 50),
          function(e, t) {
            void 0 === t && (t = 1 / 0);
            var n = window.requestIdleCallback;
            return n ? new Promise(function(e) {
              return n.call(window, function() {
                return e()
              }, {
                timeout: t
              })
            }) : a(Math.min(e, t))
          }(e, 2 * e)
      }

      function se(e, t) {
        var n = Date.now();
        return {
          get: function(a) {
            return (0, r.__awaiter)(this, void 0, void 0, function() {
              var i, c, s;
              return (0, r.__generator)(this, function(r) {
                switch (r.label) {
                  case 0:
                    return i = Date.now(), [4, e()];
                  case 1:
                    return c = r.sent(), s = function(e) {
                      var t, n = function(e) {
                        var t = function(e) {
                            if (F()) return .4;
                            if (T()) return P() ? .5 : .3;
                            var t = e.platform.value || "";
                            return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
                          }(e),
                          n = function(e) {
                            return _(.99 + .01 * e, 1e-4)
                          }(t);
                        return {
                          score: t,
                          comment: oe.replace(/\$/g, "".concat(n))
                        }
                      }(e);
                      return {
                        get visitorId() {
                          return void 0 === t && (t = ie(this.components)), t
                        },
                        set visitorId(e) {
                          t = e
                        },
                        confidence: n,
                        components: e,
                        version: o
                      }
                    }(c), (t || (null == a ? void 0 : a.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(s.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(i - n, "\nvisitorId: ").concat(s.visitorId, "\ncomponents: ").concat(ae(c), "\n```")), [2, s]
                }
              })
            })
          }
        }
      }

      function ue(e) {
        var t = void 0 === e ? {} : e,
          n = t.delayFallback,
          a = t.debug,
          i = t.monitoring,
          c = void 0 === i || i;
        return (0, r.__awaiter)(this, void 0, void 0, function() {
          return (0, r.__generator)(this, function(e) {
            switch (e.label) {
              case 0:
                return c && function() {
                  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                    var e = new XMLHttpRequest;
                    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(o, "/npm-monitoring"), !0), e.send()
                  } catch (e) {
                    console.error(e)
                  }
                }(), [4, ce(n)];
              case 1:
                return e.sent(), [2, se(E(re, {
                  debug: a
                }, []), a)]
            }
          })
        })
      }
      var le = {
          load: ue,
          hashComponents: ie,
          componentsToDebugString: ae
        },
        de = g
    }
  }
]);