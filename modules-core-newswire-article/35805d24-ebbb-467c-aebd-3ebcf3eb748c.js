try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "35805d24-ebbb-467c-aebd-3ebcf3eb748c", e._sentryDebugIdIdentifier = "sentry-dbid-35805d24-ebbb-467c-aebd-3ebcf3eb748c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7717], {
    23058(e) {
      function t(e, t) {
        return Object.keys(t).forEach(function(n) {
          "default" === n || "__esModule" === n || Object.prototype.hasOwnProperty.call(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        }), e
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
      n(r, "ONETRUST_LOADED_EVENT", () => i), n(r, "WRAPPER_CALLED_EVENT", () => a), n(r, "CONSENT_CHANGED_EVENT", () => u), n(r, "init", () => d);
      const o = window.document.currentScript?.nonce,
        i = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        u = "CONSENT_CHANGED_EVENT";
      let s = !0;

      function d(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), o && (n.nonce = o), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          s && (s = !1, window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged(() => {
            window.dispatchEvent(new CustomEvent(u, {
              bubbles: !0
            }))
          })
        }
      }
      var l = {};
      n(l, "NoChoiceTransactionType", () => c), n(l, "ConfirmedTransactionType", () => f), n(l, "canStoreCookie", () => p);
      const c = "NO_CHOICE",
        f = "CONFIRMED";

      function p(e, t = null) {
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          r = n.Groups.find(t => t.Cookies.some(t => t.Name === e));
        if (!r) {
          const n = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(n), !1
        }
        if ("always active" === r.Status) return !0;
        const o = n.ConsentIntegrationData?.consentPayload?.purposes?.find(e => e.Id === r.PurposeId);
        return o?.TransactionType === f
      }
      t(e.exports, r), t(e.exports, l)
    },
    97734(e, t, n) {
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
        i = p(n(93082)),
        a = p(n(60331)),
        u = p(n(48824)),
        s = p(n(4413)),
        d = p(n(88769)),
        l = p(n(47232)),
        c = p(n(40054)),
        f = n(42483);

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function b(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var y = function(e) {
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
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, c.default)()
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
              p = (0, f.innerWidth)(u),
              y = (0, f.innerHeight)(u);
            if (y <= 0 || isNaN(y)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (p <= 0 || isNaN(p)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var w = (0, c.default)();
              this.pid = w;
              var g = function() {
                  return w !== e.pid
                },
                m = "multi" === o ? function() {
                  return b(l, y)
                } : function() {
                  return h(l, p)
                },
                _ = "multi" === o ? function() {
                  return h(l, p)
                } : function() {
                  return b(l, y)
                },
                v = void 0,
                E = n,
                O = r;
              this.setState({
                ready: !1
              }), (0, s.default)([function(t) {
                return (0, d.default)(function() {
                  return E <= O
                }, function(t) {
                  if (g()) return t(!0);
                  v = parseInt((E + O) / 2, 10), e.setState({
                    fontSize: v
                  }, function() {
                    return g() ? t(!0) : (m() ? E = v + 1 : O = v - 1, t())
                  })
                }, t)
              }, function(t) {
                return "single" === o && i || _() ? t() : (E = n, O = v, (0, d.default)(function() {
                  return E < O
                }, function(t) {
                  if (g()) return t(!0);
                  v = parseInt((E + O) / 2, 10), e.setState({
                    fontSize: v
                  }, function() {
                    return w !== e.pid ? t(!0) : (_() ? E = v + 1 : O = v - 1, t())
                  })
                }, t))
              }, function(t) {
                if (v = Math.min(E, O), v = Math.max(v, n), v = Math.min(v, r), v = Math.max(v, 0), g()) return t(!0);
                e.setState({
                  fontSize: v
                }, t)
              }], function(t) {
                t || g() || e.setState({
                  ready: !0
                }, function() {
                  return a(v)
                })
              })
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
              d = this.state,
              l = d.fontSize,
              c = d.ready,
              f = r({}, a, {
                fontSize: l
              }),
              p = {
                display: c ? "block" : "inline-block"
              };
            return "single" === u && (p.whiteSpace = "nowrap"), i.default.createElement("div", r({
              ref: function(t) {
                return e._parent = t
              },
              style: f
            }, s), i.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: p
            }, o && "function" == typeof n ? c ? n(o) : o : n))
          }
        }]), t
      }(i.default.Component);
      y.propTypes = {
        children: a.default.node,
        text: a.default.string,
        min: a.default.number,
        max: a.default.number,
        mode: a.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: a.default.bool,
        throttle: a.default.number,
        onReady: a.default.func
      }, y.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = y
    },
    42816(e, t, n) {
      "use strict";
      t.zb = void 0;
      var r, o = (r = n(97734)) && r.__esModule ? r : {
        default: r
      };
      t.zb = o.default, o.default
    },
    42483(e, t) {
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
    4413(e, t, n) {
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
        e.length > 0 ? e[0](function t(o, i) {
          n.push(i), ++r >= e.length || o ? a(o) : e[r](t)
        }) : a(null), i = !1
      };
      var r, o = (r = n(43431)) && r.__esModule ? r : {
        default: r
      }
    },
    48824(e, t) {
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
    47232(e, t) {
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
    40054(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return n++
      };
      var n = 0
    },
    88769(e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        e() ? t(function n(o) {
          for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) a[u - 1] = arguments[u];
          o ? r(o) : e.apply(this, a) ? t(n) : r(null)
        }) : r(null)
      };
      var n = function() {}
    }
  }
]);