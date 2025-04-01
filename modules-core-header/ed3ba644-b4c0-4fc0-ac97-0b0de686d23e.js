! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ed3ba644-b4c0-4fc0-ac97-0b0de686d23e", e._sentryDebugIdIdentifier = "sentry-dbid-ed3ba644-b4c0-4fc0-ac97-0b0de686d23e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4999, 1365, 3855, 6236, 9093, 1474, 3820], {
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
        for (var a = {}, s = [], c = 0; c < e.length; c++) {
          var i = e[c],
            u = r.base ? i[0] + r.base : i[0],
            l = a[u] || 0,
            d = "".concat(u, " ").concat(l);
          a[u] = l + 1;
          var f = n(d),
            p = {
              css: i[1],
              media: i[2],
              sourceMap: i[3],
              supports: i[4],
              layer: i[5]
            };
          if (-1 !== f) t[f].references++, t[f].updater(p);
          else {
            var b = o(p, r);
            r.byIndex = c, t.splice(c, 0, {
              identifier: d,
              updater: b,
              references: 1
            })
          }
          s.push(d)
        }
        return s
      }

      function o(e, t) {
        var n = t.domAPI(t);
        return n.update(e),
          function(t) {
            if (t) {
              if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
              n.update(e = t)
            } else n.remove()
          }
      }
      e.exports = function(e, o) {
        var a = r(e = e || [], o = o || {});
        return function(e) {
          e = e || [];
          for (var s = 0; s < a.length; s++) {
            var c = n(a[s]);
            t[c].references--
          }
          for (var i = r(e, o), u = 0; u < a.length; u++) {
            var l = n(a[u]);
            0 === t[l].references && (t[l].updater(), t.splice(l, 1))
          }
          a = i
        }
      }
    },
    82510: e => {
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    31610: e => {
      e.exports = function(e, t) {
        Object.keys(t).forEach((function(n) {
          e.setAttribute(n, t[n])
        }))
      }
    },
    94566: e => {
      var t, n = (t = [], function(e, n) {
        return t[e] = n, t.filter(Boolean).join("\n")
      });

      function r(e, t, r, o) {
        var a;
        if (r) a = "";
        else {
          a = "", o.supports && (a += "@supports (".concat(o.supports, ") {")), o.media && (a += "@media ".concat(o.media, " {"));
          var s = void 0 !== o.layer;
          s && (a += "@layer".concat(o.layer.length > 0 ? " ".concat(o.layer) : "", " {")), a += o.css, s && (a += "}"), o.media && (a += "}"), o.supports && (a += "}")
        }
        if (e.styleSheet) e.styleSheet.cssText = n(t, a);
        else {
          var c = document.createTextNode(a),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(c, i[t]) : e.appendChild(c)
        }
      }
      var o = {
        singleton: null,
        singletonCounter: 0
      };
      e.exports = function(e) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var t = o.singletonCounter++,
          n = o.singleton || (o.singleton = e.insertStyleElement(e));
        return {
          update: function(e) {
            r(n, t, !1, e)
          },
          remove: function(e) {
            r(n, t, !0, e)
          }
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
        }, t.i = function(e, n, r, o, a) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var s = {};
          if (r)
            for (var c = 0; c < this.length; c++) {
              var i = this[c][0];
              null != i && (s[i] = !0)
            }
          for (var u = 0; u < e.length; u++) {
            var l = [].concat(e[u]);
            r && s[l[0]] || (void 0 !== a && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = a), n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n) : l[2] = n), o && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = o) : l[4] = "".concat(o)), t.push(l))
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
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
            a = "/*# ".concat(o, " */");
          return [t].concat([a]).join("\n")
        }
        return [t].join("\n")
      }
    },
    32469: (e, t, n) => {
      var r = n(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        s = Object.prototype.hasOwnProperty,
        c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, a = {},
          u = null,
          l = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !i.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: l,
          props: a,
          _owner: c.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    73855: (e, t, n) => {
      e.exports = n(32469)
    },
    35449: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      var r = n(73855);
      const o = e => {
        let {
          to: t,
          target: n,
          className: o,
          onNavigate: a,
          onClick: s,
          reloadDocument: c,
          children: i,
          ...u
        } = e;
        const l = t?.startsWith("http");
        return (0, r.jsx)("a", {
          href: t,
          className: o,
          onClick: e => {
            s?.(e), l || c || (a ? (e.preventDefault(), a(t)) : (e.preventDefault(), window.history.pushState({}, "", t)))
          },
          target: n,
          ...u,
          children: i
        })
      }
    },
    30062: (e, t, n) => {
      n.d(t, {
        A: () => a,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        o = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: t
          } = window, n = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = o.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, o] = t;
            return o === n && (e = {
              site: r,
              subDomain: o
            }, !0)
          })) >= 0)), a = o[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    }
  }
]);