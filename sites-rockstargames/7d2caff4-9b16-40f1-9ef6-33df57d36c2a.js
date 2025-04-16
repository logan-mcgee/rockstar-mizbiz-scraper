! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d2caff4-9b16-40f1-9ef6-33df57d36c2a", e._sentryDebugIdIdentifier = "sentry-dbid-7d2caff4-9b16-40f1-9ef6-33df57d36c2a")
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
  [1201, 3855, 3582], {
    53178: e => {
      var t = [];

      function n(e) {
        for (var n = -1, r = 0; r < t.length; r++)
          if (t[r].identifier === e) {
            n = r;
            break
          } return n
      }

      function r(e, r) {
        for (var o = {}, s = [], c = 0; c < e.length; c++) {
          var i = e[c],
            d = r.base ? i[0] + r.base : i[0],
            l = o[d] || 0,
            u = "".concat(d, " ").concat(l);
          o[d] = l + 1;
          var f = n(u),
            p = {
              css: i[1],
              media: i[2],
              sourceMap: i[3],
              supports: i[4],
              layer: i[5]
            };
          if (-1 !== f) t[f].references++, t[f].updater(p);
          else {
            var m = a(p, r);
            r.byIndex = c, t.splice(c, 0, {
              identifier: u,
              updater: m,
              references: 1
            })
          }
          s.push(u)
        }
        return s
      }

      function a(e, t) {
        var n = t.domAPI(t);
        return n.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t)
            } else n.remove()
          }
      }
      e.exports = function(e, a) {
        var o = r(e = e || [], a = a || {});
        return function(e) {
          e = e || [];
          for (var s = 0; s < o.length; s++) {
            var c = n(o[s]);
            t[c].references--
          }
          for (var i = r(e, a), d = 0; d < o.length; d++) {
            var l = n(o[d]);
            0 === t[l].references && (t[l].updater(), t.splice(l, 1))
          }
          o = i
        }
      }
    },
    17529: e => {
      var t = {};
      e.exports = function(e, n) {
        var r = function(e) {
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
        if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        r.appendChild(n)
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
              var r = "";
              n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
              var a = void 0 !== n.layer;
              a && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, a && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
              var o = n.sourceMap;
              o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleTagTransform(r, e, t.options)
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
              r = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
          })).join("")
        }, t.i = function(e, n, r, a, o) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var s = {};
          if (r)
            for (var c = 0; c < this.length; c++) {
              var i = this[c][0];
              null != i && (s[i] = !0)
            }
          for (var d = 0; d < e.length; d++) {
            var l = [].concat(e[d]);
            r && s[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = o), n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n) : l[2] = n), a && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = a) : l[4] = "".concat(a)), t.push(l))
          }
        }, t
      }
    },
    42587: e => {
      e.exports = function(e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            a = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
            o = "/*# ".concat(a, " */");
          return [t].concat([o]).join("\n")
        }
        return [t].join("\n")
      }
    },
    32469: (e, t, n) => {
      var r = n(62229),
        a = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, n) {
        var r, o = {},
          d = null,
          l = null;
        for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (o[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: d,
          ref: l,
          props: o,
          _owner: c.current
        }
      }
      t.Fragment = o, t.jsx = d, t.jsxs = d
    },
    73855: (e, t, n) => {
      e.exports = n(32469)
    },
    71201: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => w
      });
      var r = n(9623),
        a = n(53178),
        o = n.n(a),
        s = n(27835),
        c = n.n(s),
        i = n(17529),
        d = n.n(i),
        l = n(72162),
        u = n.n(l),
        f = n(82510),
        p = n.n(f),
        m = n(90675),
        v = n.n(m),
        g = n(84045),
        y = {};
      y.styleTagTransform = v(), y.setAttributes = u(), y.insert = d().bind(null, "head"), y.domAPI = c(), y.insertStyleElement = p(), o()(g.A, y);
      const b = g.A && g.A.locals ? g.A.locals : void 0;
      var h = n(73855);
      const w = () => {
        const [e] = (0, r.useSearchParams)(), t = e.get("src") ?? null;
        if (!t) return null;
        const {
          hostname: n
        } = new URL(t);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(n) ? (0, h.jsx)("div", {
          className: b.viewer,
          children: (0, h.jsx)("div", {
            className: b.img,
            style: {
              background: `url(${t}) no-repeat center/contain`
            }
          })
        }) : null
      }
    },
    84045: (e, t, n) => {
      n.d(t, {
        A: () => c
      });
      var r = n(42587),
        a = n.n(r),
        o = n(15081),
        s = n.n(o)()(a());
      s.push([e.id, ".rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e{background:#000;display:flex;flex:1}.rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8{width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/modules-core-screenshot-viewer/src/components/Root/index.less"],
        names: [],
        mappings: "AAAA,mEAEI,eAAA,CACA,YAAA,CAFA,MAGJ,CAEA,mEACI,UAAJ",
        sourcesContent: [".viewer {\n    flex: 1;\n    background: black;\n    display: flex;\n}\n\n.img {\n    width: 100%;\n}\n"],
        sourceRoot: ""
      }]), s.locals = {
        viewer: "rockstargames-sites-rockstargamesd3d06437c2c029c4d95e42b4b1690f8e",
        img: "rockstargames-sites-rockstargamescb8ab5c6a510d8d025142e899a0588f8"
      };
      const c = s
    }
  }
]);