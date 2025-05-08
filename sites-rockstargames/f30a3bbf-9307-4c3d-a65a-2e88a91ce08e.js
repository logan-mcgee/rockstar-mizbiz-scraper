! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f30a3bbf-9307-4c3d-a65a-2e88a91ce08e", e._sentryDebugIdIdentifier = "sentry-dbid-f30a3bbf-9307-4c3d-a65a-2e88a91ce08e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4967], {
    53178: e => {
      var t = [];

      function n(e) {
        for (var n = -1, a = 0; a < t.length; a++)
          if (t[a].identifier === e) {
            n = a;
            break
          } return n
      }

      function a(e, a) {
        for (var o = {}, c = [], s = 0; s < e.length; s++) {
          var i = e[s],
            d = a.base ? i[0] + a.base : i[0],
            u = o[d] || 0,
            f = "".concat(d, " ").concat(u);
          o[d] = u + 1;
          var l = n(f),
            p = {
              css: i[1],
              media: i[2],
              sourceMap: i[3],
              supports: i[4],
              layer: i[5]
            };
          if (-1 !== l) t[l].references++, t[l].updater(p);
          else {
            var b = r(p, a);
            a.byIndex = s, t.splice(s, 0, {
              identifier: f,
              updater: b,
              references: 1
            })
          }
          c.push(f)
        }
        return c
      }

      function r(e, t) {
        var n = t.domAPI(t);
        return n.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t)
            } else n.remove()
          }
      }
      e.exports = function(e, r) {
        var o = a(e = e || [], r = r || {});
        return function(e) {
          e = e || [];
          for (var c = 0; c < o.length; c++) {
            var s = n(o[c]);
            t[s].references--
          }
          for (var i = a(e, r), d = 0; d < o.length; d++) {
            var u = n(o[d]);
            0 === t[u].references && (t[u].updater(), t.splice(u, 1))
          }
          o = i
        }
      }
    },
    17529: e => {
      var t = {};
      e.exports = function(e, n) {
        var a = function(e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
              n = n.contentDocument.head
            } catch (e) {
              n = null
            }
            t[e] = n
          }
          return t[e]
        }(e);
        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        a.appendChild(n)
      }
    },
    82510: e => {
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    72162: (e, t, n) => {
      e.exports = function(e) {
        var t = n.nc;
        t && e.setAttribute("nonce", t)
      }
    },
    27835: e => {
      e.exports = function(e) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var t = e.insertStyleElement(e);
        return {
          update: function(n) {
            ! function(e, t, n) {
              var a = "";
              n.supports && (a += "@supports (".concat(n.supports, ") {")), n.media && (a += "@media ".concat(n.media, " {"));
              var r = void 0 !== n.layer;
              r && (a += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), a += n.css, r && (a += "}"), n.media && (a += "}"), n.supports && (a += "}");
              var o = n.sourceMap;
              o && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleTagTransform(a, e, t.options)
            }(t, e, n)
          },
          remove: function() {
            ! function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e)
            }(t)
          }
        }
      }
    },
    90675: e => {
      e.exports = function(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    },
    15081: e => {
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map((function(t) {
            var n = "",
              a = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), a && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), a && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
          })).join("")
        }, t.i = function(e, n, a, r, o) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var c = {};
          if (a)
            for (var s = 0; s < this.length; s++) {
              var i = this[s][0];
              null != i && (c[i] = !0)
            }
          for (var d = 0; d < e.length; d++) {
            var u = [].concat(e[d]);
            a && c[u[0]] || (void 0 !== o && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = o), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), t.push(u))
          }
        }, t
      }
    },
    79908: e => {
      e.exports = function(e, t) {
        return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
      }
    },
    42587: e => {
      e.exports = function(e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),
            o = "/*# ".concat(r, " */");
          return [t].concat([o]).join("\n")
        }
        return [t].join("\n")
      }
    }
  }
]);