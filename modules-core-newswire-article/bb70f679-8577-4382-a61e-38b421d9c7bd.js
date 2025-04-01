! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bb70f679-8577-4382-a61e-38b421d9c7bd", e._sentryDebugIdIdentifier = "sentry-dbid-bb70f679-8577-4382-a61e-38b421d9c7bd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1269, 2781, 3855], {
    53178: e => {
      "use strict";
      var t = [];

      function n(e) {
        for (var n = -1, r = 0; r < t.length; r++)
          if (t[r].identifier === e) {
            n = r;
            break
          } return n
      }

      function r(e, r) {
        for (var i = {}, a = [], u = 0; u < e.length; u++) {
          var s = e[u],
            c = r.base ? s[0] + r.base : s[0],
            l = i[c] || 0,
            f = "".concat(c, " ").concat(l);
          i[c] = l + 1;
          var d = n(f),
            p = {
              css: s[1],
              media: s[2],
              sourceMap: s[3],
              supports: s[4],
              layer: s[5]
            };
          if (-1 !== d) t[d].references++, t[d].updater(p);
          else {
            var h = o(p, r);
            r.byIndex = u, t.splice(u, 0, {
              identifier: f,
              updater: h,
              references: 1
            })
          }
          a.push(f)
        }
        return a
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
        var i = r(e = e || [], o = o || {});
        return function(e) {
          e = e || [];
          for (var a = 0; a < i.length; a++) {
            var u = n(i[a]);
            t[u].references--
          }
          for (var s = r(e, o), c = 0; c < i.length; c++) {
            var l = n(i[c]);
            0 === t[l].references && (t[l].updater(), t.splice(l, 1))
          }
          i = s
        }
      }
    },
    17529: e => {
      "use strict";
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
      "use strict";
      e.exports = function(e) {
        var t = document.createElement("style");
        return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
      }
    },
    72162: (e, t, n) => {
      "use strict";
      e.exports = function(e) {
        var t = n.nc;
        t && e.setAttribute("nonce", t)
      }
    },
    27835: e => {
      "use strict";
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
              var o = void 0 !== n.layer;
              o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
              var i = n.sourceMap;
              i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(r, e, t.options)
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
      "use strict";
      e.exports = function(e, t) {
        if (t.styleSheet) t.styleSheet.cssText = e;
        else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e))
        }
      }
    },
    31674: e => {
      function t(e, t) {
        return Object.keys(t).forEach((function(n) {
          "default" === n || "__esModule" === n || e.hasOwnProperty(n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        })), e
      }

      function n(e, t, n, r) {
        Object.defineProperty(e, t, {
          get: n,
          set: r,
          enumerable: !0,
          configurable: !0
        })
      }
      var r = {};
      n(r, "ONETRUST_LOADED_EVENT", (() => i)), n(r, "WRAPPER_CALLED_EVENT", (() => a)), n(r, "CONSENT_CHANGED_EVENT", (() => u)), n(r, "init", (() => c));
      const o = window.document.currentScript?.nonce,
        i = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        u = "CONSENT_CHANGED_EVENT";
      let s = !0;

      function c(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), o && (n.nonce = o), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          s && (s = !1, window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(u, {
              bubbles: !0
            }))
          }))
        }
      }
      var l = {};
      n(l, "NoChoiceTransactionType", (() => f)), n(l, "ConfirmedTransactionType", (() => d)), n(l, "canStoreCookie", (() => h));
      const f = "NO_CHOICE",
        d = "CONFIRMED",
        p = {
          AlwaysActive: "always active"
        };

      function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          r = n.Groups.find((t => t.Cookies.some((t => t.Name === e))));
        if (!r) {
          const n = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(n), !1
        }
        if (r.Status === p.AlwaysActive) return !0;
        const o = n.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === r.PurposeId));
        return o?.TransactionType === d
      }
      t(e.exports, r), t(e.exports, l)
    },
    15081: e => {
      "use strict";
      e.exports = function(e) {
        var t = [];
        return t.toString = function() {
          return this.map((function(t) {
            var n = "",
              r = void 0 !== t[5];
            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
          })).join("")
        }, t.i = function(e, n, r, o, i) {
          "string" == typeof e && (e = [
            [null, e, void 0]
          ]);
          var a = {};
          if (r)
            for (var u = 0; u < this.length; u++) {
              var s = this[u][0];
              null != s && (a[s] = !0)
            }
          for (var c = 0; c < e.length; c++) {
            var l = [].concat(e[c]);
            r && a[l[0]] || (void 0 !== i && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = i), n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n) : l[2] = n), o && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = o) : l[4] = "".concat(o)), t.push(l))
          }
        }, t
      }
    },
    79908: e => {
      "use strict";
      e.exports = function(e, t) {
        return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
      }
    },
    42587: e => {
      "use strict";
      e.exports = function(e) {
        var t = e[1],
          n = e[3];
        if (!n) return t;
        if ("function" == typeof btoa) {
          var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
            o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),
            i = "/*# ".concat(o, " */");
          return [t].concat([i]).join("\n")
        }
        return [t].join("\n")
      }
    },
    18113: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          n = i
        }
      }();
      var u, s = [],
        c = !1,
        l = -1;

      function f() {
        c && u && (c = !1, u.length ? s = u.concat(s) : l = -1, s.length && d())
      }

      function d() {
        if (!c) {
          var e = a(f);
          c = !0;
          for (var t = s.length; t;) {
            for (u = s, s = []; ++l < t;) u && u[l].run();
            l = -1, t = s.length
          }
          u = null, c = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function h() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new p(e, t)), 1 !== s.length || c || a(d)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    4797: (e, t, n) => {
      "use strict";
      var r = n(43790);

      function o() {}

      function i() {}
      i.resetWarningCache = o, e.exports = function() {
        function e(e, t, n, o, i, a) {
          if (a !== r) {
            var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw u.name = "Invariant Violation", u
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var n = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: i,
          resetWarningCache: o
        };
        return n.PropTypes = n, n
      }
    },
    72817: (e, t, n) => {
      e.exports = n(4797)()
    },
    43790: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    37186: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
        o = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        i = p(n(62229)),
        a = p(n(72817)),
        u = p(n(14332)),
        s = p(n(85177)),
        c = p(n(94613)),
        l = p(n(74844)),
        f = p(n(54762)),
        d = n(71319);

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function y(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var m = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var n = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.state = {
            fontSize: null,
            ready: !1
          }, n.handleWindowResize = function() {
            n.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), n.handleWindowResize = (0, l.default)(n.handleWindowResize, e.throttle), n
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), o(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, u.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, f.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              n = t.min,
              r = t.max,
              o = t.mode,
              i = t.forceSingleModeWidth,
              a = t.onReady,
              u = this._parent,
              l = this._child,
              p = (0, d.innerWidth)(u),
              m = (0, d.innerHeight)(u);
            if (m <= 0 || isNaN(m)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (p <= 0 || isNaN(p)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var v = (0, f.default)();
              this.pid = v;
              var b = function() {
                  return v !== e.pid
                },
                w = "multi" === o ? function() {
                  return y(l, m)
                } : function() {
                  return h(l, p)
                },
                g = "multi" === o ? function() {
                  return h(l, p)
                } : function() {
                  return y(l, m)
                },
                _ = void 0,
                T = n,
                E = r;
              this.setState({
                ready: !1
              }), (0, s.default)([function(t) {
                return (0, c.default)((function() {
                  return T <= E
                }), (function(t) {
                  if (b()) return t(!0);
                  _ = parseInt((T + E) / 2, 10), e.setState({
                    fontSize: _
                  }, (function() {
                    return b() ? t(!0) : (w() ? T = _ + 1 : E = _ - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === o && i || g() ? t() : (T = n, E = _, (0, c.default)((function() {
                  return T < E
                }), (function(t) {
                  if (b()) return t(!0);
                  _ = parseInt((T + E) / 2, 10), e.setState({
                    fontSize: _
                  }, (function() {
                    return v !== e.pid ? t(!0) : (g() ? T = _ + 1 : E = _ - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (_ = Math.min(T, E), _ = Math.max(_, n), _ = Math.min(_, r), _ = Math.max(_, 0), b()) return t(!0);
                e.setState({
                  fontSize: _
                }, t)
              }], (function(t) {
                t || b() || e.setState({
                  ready: !0
                }, (function() {
                  return a(_)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              n = t.children,
              o = t.text,
              a = t.style,
              u = (t.min, t.max, t.mode),
              s = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              c = this.state,
              l = c.fontSize,
              f = c.ready,
              d = r({}, a, {
                fontSize: l
              }),
              p = {
                display: f ? "block" : "inline-block"
              };
            return "single" === u && (p.whiteSpace = "nowrap"), i.default.createElement("div", r({
              ref: function(t) {
                return e._parent = t
              },
              style: d
            }, s), i.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: p
            }, o && "function" == typeof n ? f ? n(o) : o : n))
          }
        }]), t
      }(i.default.Component);
      m.propTypes = {
        children: a.default.node,
        text: a.default.string,
        min: a.default.number,
        max: a.default.number,
        mode: a.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: a.default.bool,
        throttle: a.default.number,
        onReady: a.default.func
      }, m.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = m
    },
    21308: (e, t, n) => {
      "use strict";
      t.zb = void 0;
      var r, o = (r = n(37186)) && r.__esModule ? r : {
        default: r
      };
      t.zb = o.default, o.default
    },
    71319: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
      }, t.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
      }
    },
    85177: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = [],
          r = 0,
          i = !0;

        function a(e) {
          function r() {
            t && t(e, n)
          }
          i ? o.default.nextTick(r) : r()
        }
        e.length > 0 ? e[0]((function t(o, i) {
          n.push(i), ++r >= e.length || o ? a(o) : e[r](t)
        })) : a(null), i = !1
      };
      var r, o = (r = n(18113)) && r.__esModule ? r : {
        default: r
      }
    },
    14332: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var o = Object.prototype.hasOwnProperty, i = 0; i < n.length; i++)
          if (!o.call(t, n[i]) || e[n[i]] !== t[n[i]]) return !1;
        return !0
      }
    },
    74844: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = void 0,
          r = void 0,
          o = void 0,
          i = void 0,
          a = 0;

        function u() {
          i = 0, a = +new Date, o = e.apply(n, r), n = null, r = null
        }
        return function() {
          n = this, r = arguments;
          var e = new Date - a;
          return i || (e >= t ? u() : i = setTimeout(u, t - e)), o
        }
      }
    },
    54762: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return n++
      };
      var n = 0
    },
    94613: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        e() ? t((function n(o) {
          for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) a[u - 1] = arguments[u];
          o ? r(o) : e.apply(this, a) ? t(n) : r(null)
        })) : r(null)
      };
      var n = function() {}
    },
    32469: (e, t, n) => {
      "use strict";
      var r = n(62229),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, n) {
        var r, i = {},
          c = null,
          l = null;
        for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: l,
          props: i,
          _owner: u.current
        }
      }
      t.Fragment = i, t.jsx = c, t.jsxs = c
    },
    73855: (e, t, n) => {
      "use strict";
      e.exports = n(32469)
    }
  }
]);