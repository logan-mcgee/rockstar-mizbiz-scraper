try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9ef97987-2066-46b5-807a-bb16d113fe4a", e._sentryDebugIdIdentifier = "sentry-dbid-9ef97987-2066-46b5-807a-bb16d113fe4a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [8219], {
    2906: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        },
        i = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
          }
          return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
          }
        }(),
        s = f(r(71127)),
        a = f(r(28793)),
        o = f(r(11524)),
        l = f(r(52321)),
        d = f(r(92701)),
        c = f(r(51364)),
        u = f(r(34738)),
        p = r(96143);

      function f(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function m(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function h(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var g = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, c.default)(r.handleWindowResize, e.throttle), r
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
        }(t, e), i(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, o.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, u.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              r = t.min,
              n = t.max,
              i = t.mode,
              s = t.forceSingleModeWidth,
              a = t.onReady,
              o = this._parent,
              c = this._child,
              f = (0, p.innerWidth)(o),
              g = (0, p.innerHeight)(o);
            if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var v = (0, u.default)();
              this.pid = v;
              var w = function() {
                  return v !== e.pid
                },
                y = "multi" === i ? function() {
                  return h(c, g)
                } : function() {
                  return m(c, f)
                },
                b = "multi" === i ? function() {
                  return m(c, f)
                } : function() {
                  return h(c, g)
                },
                S = void 0,
                T = r,
                E = n;
              this.setState({
                ready: !1
              }), (0, l.default)([function(t) {
                return (0, d.default)(function() {
                  return T <= E
                }, function(t) {
                  if (w()) return t(!0);
                  S = parseInt((T + E) / 2, 10), e.setState({
                    fontSize: S
                  }, function() {
                    return w() ? t(!0) : (y() ? T = S + 1 : E = S - 1, t())
                  })
                }, t)
              }, function(t) {
                return "single" === i && s || b() ? t() : (T = r, E = S, (0, d.default)(function() {
                  return T < E
                }, function(t) {
                  if (w()) return t(!0);
                  S = parseInt((T + E) / 2, 10), e.setState({
                    fontSize: S
                  }, function() {
                    return v !== e.pid ? t(!0) : (b() ? T = S + 1 : E = S - 1, t())
                  })
                }, t))
              }, function(t) {
                if (S = Math.min(T, E), S = Math.max(S, r), S = Math.min(S, n), S = Math.max(S, 0), w()) return t(!0);
                e.setState({
                  fontSize: S
                }, t)
              }], function(t) {
                t || w() || e.setState({
                  ready: !0
                }, function() {
                  return a(S)
                })
              })
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              i = t.text,
              a = t.style,
              o = (t.min, t.max, t.mode),
              l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              d = this.state,
              c = d.fontSize,
              u = d.ready,
              p = n({}, a, {
                fontSize: c
              }),
              f = {
                display: u ? "block" : "inline-block"
              };
            return "single" === o && (f.whiteSpace = "nowrap"), s.default.createElement("div", n({
              ref: function(t) {
                return e._parent = t
              },
              style: p
            }, l), s.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: f
            }, i && "function" == typeof r ? u ? r(i) : i : r))
          }
        }]), t
      }(s.default.Component);
      g.propTypes = {
        children: a.default.node,
        text: a.default.string,
        min: a.default.number,
        max: a.default.number,
        mode: a.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: a.default.bool,
        throttle: a.default.number,
        onReady: a.default.func
      }, g.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = g
    },
    9738: (e, t, r) => {
      var n = r(56130),
        i = r(28593),
        s = r(22909),
        a = Math.max,
        o = Math.min;
      e.exports = function(e, t, r) {
        var l, d, c, u, p, f, m = 0,
          h = !1,
          g = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function w(t) {
          var r = l,
            n = d;
          return l = d = void 0, m = t, u = e.apply(n, r)
        }

        function y(e) {
          var r = e - f;
          return void 0 === f || r >= t || r < 0 || g && e - m >= c
        }

        function b() {
          var e = i();
          if (y(e)) return S(e);
          p = setTimeout(b, function(e) {
            var r = t - (e - f);
            return g ? o(r, c - (e - m)) : r
          }(e))
        }

        function S(e) {
          return p = void 0, v && l ? w(e) : (l = d = void 0, u)
        }

        function T() {
          var e = i(),
            r = y(e);
          if (l = arguments, d = this, f = e, r) {
            if (void 0 === p) return function(e) {
              return m = e, p = setTimeout(b, t), h ? w(e) : u
            }(f);
            if (g) return clearTimeout(p), p = setTimeout(b, t), w(f)
          }
          return void 0 === p && (p = setTimeout(b, t)), u
        }
        return t = s(t) || 0, n(r) && (h = !!r.leading, c = (g = "maxWait" in r) ? a(s(r.maxWait) || 0, t) : c, v = "trailing" in r ? !!r.trailing : v), T.cancel = function() {
          void 0 !== p && clearTimeout(p), m = 0, l = f = d = p = void 0
        }, T.flush = function() {
          return void 0 === p ? u : S(i())
        }, T
      }
    },
    10439: (e, t, r) => {
      "use strict";

      function n(e) {
        var t, r, i = "";
        if ("string" == typeof e || "number" == typeof e) i += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++) e[t] && (r = n(e[t])) && (i && (i += " "), i += r)
          } else
            for (r in e) e[r] && (i && (i += " "), i += r);
        return i
      }
      r.d(t, {
        A: () => i
      });
      const i = function() {
        for (var e, t, r = 0, i = "", s = arguments.length; r < s; r++)(e = arguments[r]) && (t = n(e)) && (i && (i += " "), i += t);
        return i
      }
    },
    10533: (e, t, r) => {
      var n = r(86601);
      e.exports = function(e, t, r, i) {
        return i = "function" == typeof i ? i : void 0, null == e ? e : n(e, t, r, i)
      }
    },
    10613: (e, t, r) => {
      var n = r(23117);
      e.exports = function(e, t, r) {
        var i = null == e ? void 0 : n(e, t);
        return void 0 === i ? r : i
      }
    },
    11206: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => l
      });
      const n = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const s = new Uint8Array(16);

      function a() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(s)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const l = function(e, t, r) {
        if (n.randomUUID && !t && !e) return n.randomUUID();
        const i = (e = e || {}).random || (e.rng || a)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = i[e];
          return t
        }
        return function(e, t = 0) {
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(i)
      }
    },
    11524: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, s = 0; s < r.length; s++)
          if (!i.call(t, r[s]) || e[r[s]] !== t[r[s]]) return !1;
        return !0
      }
    },
    12919: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ub: () => s
      });
      var n = r(60211),
        i = r(71127);

      function s(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const s = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, o] = (0, i.useState)(() => r ? s(e) : t);

        function l() {
          o(s(e))
        }
        return (0, i.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }, [e]), a
      }
      r(51105)
    },
    17328: (e, t, r) => {
      "use strict";
      r.d(t, {
        fi: () => i
      }), r(60211);
      const n = e => e - .02,
        i = {
          mobile: `(min-width: 0px) and (max-width: ${n(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${n(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${n(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${n(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var s;
      r(51105), r(98312), r(41972), r(56265), r(31454), r(10533), r(10613), r(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag
    },
    22909: (e, t, r) => {
      var n = r(87625),
        i = r(56130),
        s = r(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (s(e)) return NaN;
        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = o.test(e);
        return r || l.test(e) ? d(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    24162: (e, t, r) => {
      "use strict";
      r.d(t, {
        RC: () => Q,
        qr: () => ee
      });
      var n = r(71127),
        i = r(60272),
        s = r(96501);
      let a, o, l;

      function d() {
        return a || (a = function() {
          const e = (0, i.a)(),
            t = (0, i.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), a
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = d(),
            n = (0, i.a)(),
            s = n.navigator.platform,
            a = t || n.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = n.screen.width,
            c = n.screen.height,
            u = a.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = a.match(/(iPad).*OS\s([\d_]+)/);
          const f = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            h = "Win32" === s;
          let g = "MacIntel" === s;
          return !p && g && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), g = !1), u && !h && (o.os = "android", o.android = !0), (p || m || f) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }

      function u() {
        return l || (l = function() {
          const e = (0, i.a)(),
            t = c();
          let r = !1;

          function n() {
            const t = e.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }
          if (n()) {
            const t = String(e.navigator.userAgent);
            if (t.includes("Version/")) {
              const [e, n] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
              r = e < 16 || 16 === e && n < 2
            }
          }
          const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
            a = n();
          return {
            isSafari: r || a,
            needPerspectiveFix: r,
            need3dFix: a || s && t.ios,
            isWebView: s
          }
        }()), l
      }
      var p = {
        on(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;
          const i = r ? "unshift" : "push";
          return e.split(" ").forEach(e => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
          }), n
        },
        once(e, t, r) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" != typeof t) return n;

          function i() {
            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
            t.apply(n, s)
          }
          return i.__emitterProxy = t, n.on(e, i, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const n = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach(e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach((n, i) => {
              (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
            })
          }), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, n;
          for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
          return "string" == typeof s[0] || Array.isArray(s[0]) ? (t = s[0], r = s.slice(1, s.length), n = e) : (t = s[0].events, r = s[0].data, n = s[0].context || e), r.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
              e.apply(n, [t, ...r])
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
              e.apply(n, r)
            })
          }), e
        }
      };
      const f = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        m = (e, t, r) => {
          t && !e.classList.contains(r) ? e.classList.add(r) : !t && e.classList.contains(r) && e.classList.remove(r)
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            })), t && t.remove()
          }
        },
        g = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        v = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = i,
              s = [r - t];
            return s.push(...Array.from({
              length: t
            }).map((e, t) => r + n + t)), void e.slides.forEach((t, r) => {
              s.includes(t.column) && g(e, r)
            })
          }
          const s = i + n - 1;
          if (e.params.rewind || e.params.loop)
            for (let n = i - t; n <= s + t; n += 1) {
              const t = (n % r + r) % r;
              (t < i || t > s) && g(e, t)
            } else
              for (let n = Math.max(i - t, 0); n <= Math.min(s + t, r - 1); n += 1) n !== i && (n > s || n < i) && g(e, n)
        };
      var w = {
        updateSize: function() {
          const e = this;
          let t, r;
          const n = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, s.q)(n, "padding-left") || 0, 10) - parseInt((0, s.q)(n, "padding-right") || 0, 10), r = r - parseInt((0, s.q)(n, "padding-top") || 0, 10) - parseInt((0, s.q)(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: n,
              slidesEl: i,
              size: a,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            d = e.virtual && r.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            u = (0, s.e)(i, `.${e.params.slideClass}, swiper-slide`),
            p = d ? e.virtual.slides.length : u.length;
          let f = [];
          const m = [],
            h = [];
          let g = r.slidesOffsetBefore;
          "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
          let v = r.slidesOffsetAfter;
          "function" == typeof v && (v = r.slidesOffsetAfter.call(e));
          const w = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = r.spaceBetween,
            S = -g,
            T = 0,
            E = 0;
          if (void 0 === a) return;
          "string" == typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * a : "string" == typeof b && (b = parseFloat(b)), e.virtualSize = -b, u.forEach(e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          }), r.centeredSlides && r.cssMode && ((0, s.a)(n, "--swiper-centered-offset-before", ""), (0, s.a)(n, "--swiper-centered-offset-after", ""));
          const x = r.grid && r.grid.rows > 1 && e.grid;
          let C;
          x ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
          const M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
          for (let n = 0; n < p; n += 1) {
            let i;
            if (C = 0, u[n] && (i = u[n]), x && e.grid.updateSlide(n, i, u), !u[n] || "none" !== (0, s.q)(i, "display")) {
              if ("auto" === r.slidesPerView) {
                M && (u[n].style[e.getDirectionLabel("width")] = "");
                const a = getComputedStyle(i),
                  o = i.style.transform,
                  l = i.style.webkitTransform;
                if (o && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), r.roundLengths) C = e.isHorizontal() ? (0, s.h)(i, "width", !0) : (0, s.h)(i, "height", !0);
                else {
                  const e = t(a, "width"),
                    r = t(a, "padding-left"),
                    n = t(a, "padding-right"),
                    s = t(a, "margin-left"),
                    o = t(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + s + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: a
                    } = i;
                    C = e + r + n + s + o + (a - t)
                  }
                }
                o && (i.style.transform = o), l && (i.style.webkitTransform = l), r.roundLengths && (C = Math.floor(C))
              } else C = (a - (r.slidesPerView - 1) * b) / r.slidesPerView, r.roundLengths && (C = Math.floor(C)), u[n] && (u[n].style[e.getDirectionLabel("width")] = `${C}px`);
              u[n] && (u[n].swiperSlideSize = C), h.push(C), r.centeredSlides ? (S = S + C / 2 + T / 2 + b, 0 === T && 0 !== n && (S = S - a / 2 - b), 0 === n && (S = S - a / 2 - b), Math.abs(S) < .001 && (S = 0), r.roundLengths && (S = Math.floor(S)), E % r.slidesPerGroup === 0 && f.push(S), m.push(S)) : (r.roundLengths && (S = Math.floor(S)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup === 0 && f.push(S), m.push(S), S = S + C + b), e.virtualSize += C + b, T = C, E += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, a) + v, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (n.style.width = `${e.virtualSize+b}px`), r.setWrapperSize && (n.style[e.getDirectionLabel("width")] = `${e.virtualSize+b}px`), x && e.grid.updateWrapperSize(C, f), !r.centeredSlides) {
            const t = [];
            for (let n = 0; n < f.length; n += 1) {
              let i = f[n];
              r.roundLengths && (i = Math.floor(i)), f[n] <= e.virtualSize - a && t.push(i)
            }
            f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
          }
          if (d && r.loop) {
            const t = h[0] + b;
            if (r.slidesPerGroup > 1) {
              const n = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                i = t * r.slidesPerGroup;
              for (let e = 0; e < n; e += 1) f.push(f[f.length - 1] + i)
            }
            for (let n = 0; n < e.virtual.slidesBefore + e.virtual.slidesAfter; n += 1) 1 === r.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
          }
          if (0 === f.length && (f = [0]), 0 !== b) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            u.filter((e, t) => !(r.cssMode && !r.loop) || t !== u.length - 1).forEach(e => {
              e.style[t] = `${b}px`
            })
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach(t => {
              e += t + (b || 0)
            }), e -= b;
            const t = e > a ? e - a : 0;
            f = f.map(e => e <= 0 ? -g : e > t ? t + v : e)
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            h.forEach(t => {
              e += t + (b || 0)
            }), e -= b;
            const t = (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
            if (e + t < a) {
              const r = (a - e - t) / 2;
              f.forEach((e, t) => {
                f[t] = e - r
              }), m.forEach((e, t) => {
                m[t] = e + r
              })
            }
          }
          if (Object.assign(e, {
              slides: u,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: h
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, s.a)(n, "--swiper-centered-offset-before", -f[0] + "px"), (0, s.a)(n, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map(e => e + t), e.slidesGrid = e.slidesGrid.map(e => e + r)
          }
          if (p !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== y && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(d || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.el.classList.contains(t);
            p <= r.maxBackfaceHiddenSlides ? n || e.el.classList.add(t) : n && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            n = t.virtual && t.params.virtual.enabled;
          let i, s = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const a = e => n ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach(e => {
              r.push(e)
            });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !n) break;
                r.push(a(e))
              } else r.push(a(t.activeIndex));
          for (i = 0; i < r.length; i += 1)
            if (void 0 !== r[i]) {
              const e = r[i].offsetHeight;
              s = e > s ? e : s
            }(s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: n,
              rtlTranslate: i,
              snapGrid: s
            } = t;
          if (0 === n.length) return;
          void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          i && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < n.length; e += 1) {
            const l = n[e];
            let d = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (d -= n[0].swiperSlideOffset);
            const c = (a + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              u = (a - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
              p = -(a - d),
              m = p + t.slidesSizesGrid[e],
              h = p >= 0 && p <= t.size - t.slidesSizesGrid[e],
              g = p >= 0 && p < t.size - 1 || m > 1 && m <= t.size || p <= 0 && m >= t.size;
            g && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e)), f(l, g, r.slideVisibleClass), f(l, h, r.slideFullyVisibleClass), l.progress = i ? -c : c, l.originalProgress = i ? -u : u
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            n = t.maxTranslate() - t.minTranslate();
          let {
            progress: i,
            isBeginning: s,
            isEnd: a,
            progressLoop: o
          } = t;
          const l = s,
            d = a;
          if (0 === n) i = 0, s = !0, a = !0;
          else {
            i = (e - t.minTranslate()) / n;
            const r = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            s = r || i <= 0, a = o || i >= 1, r && (i = 0), o && (i = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              n = t.getSlideIndexByData(t.slides.length - 1),
              i = t.slidesGrid[r],
              s = t.slidesGrid[n],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= i ? (l - i) / a : (l + a - s) / a, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: i,
            progressLoop: o,
            isBeginning: s,
            isEnd: a
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: n,
              activeIndex: i
            } = e,
            a = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            l = e => (0, s.e)(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let d, c, u;
          if (a)
            if (r.loop) {
              let t = i - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l(`[data-swiper-slide-index="${t}"]`)
            } else d = l(`[data-swiper-slide-index="${i}"]`);
          else o ? (d = t.find(e => e.column === i), u = t.find(e => e.column === i + 1), c = t.find(e => e.column === i - 1)) : d = t[i];
          d && (o || (u = (0, s.r)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && !u && (u = t[0]), c = (0, s.t)(d, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach(e => {
            m(e, e === d, r.slideActiveClass), m(e, e === u, r.slideNextClass), m(e, e === c, r.slidePrevClass)
          }), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: n,
              params: i,
              activeIndex: s,
              realIndex: a,
              snapIndex: o
            } = t;
          let l, d = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === d && (d = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, n = e.rtlTranslate ? e.translate : -e.translate;
              let i;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? n >= t[e] && n < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : n >= t[e] && n < t[e + 1] && (i = e + 1) : n >= t[e] && (i = e);
              return r.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
            }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);
          else {
            const e = Math.min(i.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / i.slidesPerGroup)
          }
          if (l >= n.length && (l = n.length - 1), d === s && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (d === s && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
          const u = t.grid && i.grid && i.grid.rows > 1;
          let p;
          if (t.virtual && i.virtual.enabled && i.loop) p = c(d);
          else if (u) {
            const e = t.slides.find(e => e.column === d);
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(r / i.grid.rows)
          } else if (t.slides[d]) {
            const e = t.slides[d].getAttribute("data-swiper-slide-index");
            p = e ? parseInt(e, 10) : d
          } else p = d;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: a,
            realIndex: p,
            previousIndex: s,
            activeIndex: d
          }), t.initialized && v(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== p && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            n = r.params;
          let i = e.closest(`.${n.slideClass}, swiper-slide`);
          !i && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
            !i && e.matches && e.matches(`.${n.slideClass}, swiper-slide`) && (i = e)
          });
          let s, a = !1;
          if (i)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === i) {
                a = !0, s = e;
                break
              } if (!i || !a) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = i, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = s, n.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function y(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: n,
          step: i
        } = e;
        const {
          activeIndex: s,
          previousIndex: a
        } = t;
        let o = n;
        o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${i}`), r && "reset" === o ? t.emit(`slideResetTransition${i}`) : r && s !== a && (t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`))
      }
      var b = {
          slideTo: function(e, t, r, n, i) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const a = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: d,
              slidesGrid: c,
              previousIndex: p,
              activeIndex: f,
              rtlTranslate: m,
              wrapperEl: h,
              enabled: g
            } = a;
            if (!g && !n && !i || a.destroyed || a.animating && l.preventInteractionOnTransition) return !1;
            void 0 === t && (t = a.params.speed);
            const v = Math.min(a.params.slidesPerGroupSkip, o);
            let w = v + Math.floor((o - v) / a.params.slidesPerGroup);
            w >= d.length && (w = d.length - 1);
            const y = -d[w];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * y),
                  r = Math.floor(100 * c[e]),
                  n = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= r && t < n - (n - r) / 2 ? o = e : t >= r && t < n && (o = e + 1) : t >= r && (o = e)
              }
            if (a.initialized && o !== f) {
              if (!a.allowSlideNext && (m ? y > a.translate && y > a.minTranslate() : y < a.translate && y < a.minTranslate())) return !1;
              if (!a.allowSlidePrev && y > a.translate && y > a.maxTranslate() && (f || 0) !== o) return !1
            }
            let b;
            o !== (p || 0) && r && a.emit("beforeSlideChangeStart"), a.updateProgress(y), b = o > f ? "next" : o < f ? "prev" : "reset";
            const S = a.virtual && a.params.virtual.enabled;
            if ((!S || !i) && (m && -y === a.translate || !m && y === a.translate)) return a.updateActiveIndex(o), l.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== l.effect && a.setTranslate(y), "reset" !== b && (a.transitionStart(r, b), a.transitionEnd(r, b)), !1;
            if (l.cssMode) {
              const e = a.isHorizontal(),
                r = m ? y : -y;
              if (0 === t) S && (a.wrapperEl.style.scrollSnapType = "none", a._immediateVirtual = !0), S && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0 ? (a._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                h[e ? "scrollLeft" : "scrollTop"] = r
              })) : h[e ? "scrollLeft" : "scrollTop"] = r, S && requestAnimationFrame(() => {
                a.wrapperEl.style.scrollSnapType = "", a._immediateVirtual = !1
              });
              else {
                if (!a.support.smoothScroll) return (0, s.u)({
                  swiper: a,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                h.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            const T = u().isSafari;
            return S && !i && T && a.isElement && a.virtual.update(!1, !1, o), a.setTransition(t), a.setTranslate(y), a.updateActiveIndex(o), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, n), a.transitionStart(r, b), 0 === t ? a.transitionEnd(r, b) : a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function(e) {
              a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(r, b))
            }), a.wrapperEl.addEventListener("transitionend", a.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, n) {
            void 0 === e && (e = 0), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const i = this;
            if (i.destroyed) return;
            void 0 === t && (t = i.params.speed);
            const s = i.grid && i.params.grid && i.params.grid.rows > 1;
            let a = e;
            if (i.params.loop)
              if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
              else {
                let e;
                if (s) {
                  const t = a * i.params.grid.rows;
                  e = i.slides.find(e => 1 * e.getAttribute("data-swiper-slide-index") === t).column
                } else e = i.getSlideIndexByData(a);
                const t = s ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                  {
                    centeredSlides: r
                  } = i.params;
                let o = i.params.slidesPerView;
                "auto" === o ? o = i.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(i.params.slidesPerView, 10)), r && o % 2 == 0 && (o += 1));
                let l = t - e < o;
                if (r && (l = l || e < Math.ceil(o / 2)), n && r && "auto" !== i.params.slidesPerView && !s && (l = !1), l) {
                  const n = r ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                  i.loopFix({
                    direction: n,
                    slideTo: !0,
                    activeSlideIndex: "next" === n ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === n ? i.realIndex : void 0
                  })
                }
                if (s) {
                  const e = a * i.params.grid.rows;
                  a = i.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e).column
                } else a = i.getSlideIndexByData(a)
              } return requestAnimationFrame(() => {
              i.slideTo(a, t, r, n)
            }), i
          },
          slideNext: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this,
              {
                enabled: i,
                params: s,
                animating: a
              } = n;
            if (!i || n.destroyed) return n;
            void 0 === e && (e = n.params.speed);
            let o = s.slidesPerGroup;
            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
            const l = n.activeIndex < s.slidesPerGroupSkip ? 1 : o,
              d = n.virtual && s.virtual.enabled;
            if (s.loop) {
              if (a && !d && s.loopPreventsSliding) return !1;
              if (n.loopFix({
                  direction: "next"
                }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && s.cssMode) return requestAnimationFrame(() => {
                n.slideTo(n.activeIndex + l, e, t, r)
              }), !0
            }
            return s.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this,
              {
                params: i,
                snapGrid: s,
                slidesGrid: a,
                rtlTranslate: o,
                enabled: l,
                animating: d
              } = n;
            if (!l || n.destroyed) return n;
            void 0 === e && (e = n.params.speed);
            const c = n.virtual && i.virtual.enabled;
            if (i.loop) {
              if (d && !c && i.loopPreventsSliding) return !1;
              n.loopFix({
                direction: "prev"
              }), n._clientLeft = n.wrapperEl.clientLeft
            }

            function u(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = u(o ? n.translate : -n.translate),
              f = s.map(e => u(e)),
              m = i.freeMode && i.freeMode.enabled;
            let h = s[f.indexOf(p) - 1];
            if (void 0 === h && (i.cssMode || m)) {
              let e;
              s.forEach((t, r) => {
                p >= t && (e = r)
              }), void 0 !== e && (h = m ? s[e] : s[e > 0 ? e - 1 : e])
            }
            let g = 0;
            if (void 0 !== h && (g = a.indexOf(h), g < 0 && (g = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (g = g - n.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), i.rewind && n.isBeginning) {
              const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
              return n.slideTo(i, e, t, r)
            }
            return i.loop && 0 === n.activeIndex && i.cssMode ? (requestAnimationFrame(() => {
              n.slideTo(g, e, t, r)
            }), !0) : n.slideTo(g, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === t && (t = !0);
            const n = this;
            if (!n.destroyed) return void 0 === e && (e = n.params.speed), n.slideTo(n.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, n) {
            void 0 === t && (t = !0), void 0 === n && (n = .5);
            const i = this;
            if (i.destroyed) return;
            void 0 === e && (e = i.params.speed);
            let s = i.activeIndex;
            const a = Math.min(i.params.slidesPerGroupSkip, s),
              o = a + Math.floor((s - a) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const e = i.snapGrid[o];
              l - e > (i.snapGrid[o + 1] - e) * n && (s += i.params.slidesPerGroup)
            } else {
              const e = i.snapGrid[o - 1];
              l - e <= (i.snapGrid[o] - e) * n && (s -= i.params.slidesPerGroup)
            }
            return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, a = e.getSlideIndexWhenGrid(e.clickedIndex);
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
              l = e.grid && e.params.grid && e.params.grid.rows > 1;
            if (t.loop) {
              if (e.animating) return;
              i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(i) : a > (l ? (e.slides.length - n) / 2 - (e.params.grid.rows - 1) : e.slides.length - n) ? (e.loopFix(), a = e.getSlideIndex((0, s.e)(r, `${o}[data-swiper-slide-index="${i}"]`)[0]), (0, s.n)(() => {
                e.slideTo(a)
              })) : e.slideTo(a)
            } else e.slideTo(a)
          }
        },
        S = {
          loopCreate: function(e, t) {
            const r = this,
              {
                params: n,
                slidesEl: i
              } = r;
            if (!n.loop || r.virtual && r.params.virtual.enabled) return;
            const a = () => {
                (0, s.e)(i, `.${n.slideClass}, swiper-slide`).forEach((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                })
              },
              o = r.grid && n.grid && n.grid.rows > 1;
            n.loopAddBlankSlides && (n.slidesPerGroup > 1 || o) && (() => {
              const e = (0, s.e)(i, `.${n.slideBlankClass}`);
              e.forEach(e => {
                e.remove()
              }), e.length > 0 && (r.recalcSlides(), r.updateSlides())
            })();
            const l = n.slidesPerGroup * (o ? n.grid.rows : 1),
              d = r.slides.length % l !== 0,
              c = o && r.slides.length % n.grid.rows !== 0,
              u = e => {
                for (let t = 0; t < e; t += 1) {
                  const e = r.isElement ? (0, s.c)("swiper-slide", [n.slideBlankClass]) : (0, s.c)("div", [n.slideClass, n.slideBlankClass]);
                  r.slidesEl.append(e)
                }
              };
            d ? (n.loopAddBlankSlides ? (u(l - r.slides.length % l), r.recalcSlides(), r.updateSlides()) : (0, s.v)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : c ? (n.loopAddBlankSlides ? (u(n.grid.rows - r.slides.length % n.grid.rows), r.recalcSlides(), r.updateSlides()) : (0, s.v)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), a()) : a(), r.loopFix({
              slideRealIndex: e,
              direction: n.centeredSlides ? void 0 : "next",
              initial: t
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: n,
              setTranslate: i,
              activeSlideIndex: a,
              initial: o,
              byController: l,
              byMousewheel: d
            } = void 0 === e ? {} : e;
            const c = this;
            if (!c.params.loop) return;
            c.emit("beforeLoopFix");
            const {
              slides: u,
              allowSlidePrev: p,
              allowSlideNext: f,
              slidesEl: m,
              params: h
            } = c, {
              centeredSlides: g,
              initialSlide: v
            } = h;
            if (c.allowSlidePrev = !0, c.allowSlideNext = !0, c.virtual && h.virtual.enabled) return r && (h.centeredSlides || 0 !== c.snapIndex ? h.centeredSlides && c.snapIndex < h.slidesPerView ? c.slideTo(c.virtual.slides.length + c.snapIndex, 0, !1, !0) : c.snapIndex === c.snapGrid.length - 1 && c.slideTo(c.virtual.slidesBefore, 0, !1, !0) : c.slideTo(c.virtual.slides.length, 0, !1, !0)), c.allowSlidePrev = p, c.allowSlideNext = f, void c.emit("loopFix");
            let w = h.slidesPerView;
            "auto" === w ? w = c.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(h.slidesPerView, 10)), g && w % 2 == 0 && (w += 1));
            const y = h.slidesPerGroupAuto ? w : h.slidesPerGroup;
            let b = g ? Math.max(y, Math.ceil(w / 2)) : y;
            b % y !== 0 && (b += y - b % y), b += h.loopAdditionalSlides, c.loopedSlides = b;
            const S = c.grid && h.grid && h.grid.rows > 1;
            u.length < w + b || "cards" === c.params.effect && u.length < w + 2 * b ? (0, s.v)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === h.grid.fill && (0, s.v)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const T = [],
              E = [],
              x = S ? Math.ceil(u.length / h.grid.rows) : u.length,
              C = o && x - v < w && !g;
            let M = C ? v : c.activeIndex;
            void 0 === a ? a = c.getSlideIndex(u.find(e => e.classList.contains(h.slideActiveClass))) : M = a;
            const _ = "next" === n || !n,
              k = "prev" === n || !n;
            let O = 0,
              L = 0;
            const A = (S ? u[a].column : a) + (g && void 0 === i ? -w / 2 + .5 : 0);
            if (A < b) {
              O = Math.max(b - A, y);
              for (let e = 0; e < b - A; e += 1) {
                const t = e - Math.floor(e / x) * x;
                if (S) {
                  const e = x - t - 1;
                  for (let t = u.length - 1; t >= 0; t -= 1) u[t].column === e && T.push(t)
                } else T.push(x - t - 1)
              }
            } else if (A + w > x - b) {
              L = Math.max(A - (x - 2 * b), y), C && (L = Math.max(L, w - x + v + 1));
              for (let e = 0; e < L; e += 1) {
                const t = e - Math.floor(e / x) * x;
                S ? u.forEach((e, r) => {
                  e.column === t && E.push(r)
                }) : E.push(t)
              }
            }
            if (c.__preventObserver__ = !0, requestAnimationFrame(() => {
                c.__preventObserver__ = !1
              }), "cards" === c.params.effect && u.length < w + 2 * b && (E.includes(a) && E.splice(E.indexOf(a), 1), T.includes(a) && T.splice(T.indexOf(a), 1)), k && T.forEach(e => {
                u[e].swiperLoopMoveDOM = !0, m.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
              }), _ && E.forEach(e => {
                u[e].swiperLoopMoveDOM = !0, m.append(u[e]), u[e].swiperLoopMoveDOM = !1
              }), c.recalcSlides(), "auto" === h.slidesPerView ? c.updateSlides() : S && (T.length > 0 && k || E.length > 0 && _) && c.slides.forEach((e, t) => {
                c.grid.updateSlide(t, e, c.slides)
              }), h.watchSlidesProgress && c.updateSlidesOffset(), r)
              if (T.length > 0 && k) {
                if (void 0 === t) {
                  const e = c.slidesGrid[M],
                    t = c.slidesGrid[M + O] - e;
                  d ? c.setTranslate(c.translate - t) : (c.slideTo(M + Math.ceil(O), 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
                } else if (i) {
                  const e = S ? T.length / h.grid.rows : T.length;
                  c.slideTo(c.activeIndex + e, 0, !1, !0), c.touchEventsData.currentTranslate = c.translate
                }
              } else if (E.length > 0 && _)
              if (void 0 === t) {
                const e = c.slidesGrid[M],
                  t = c.slidesGrid[M - L] - e;
                d ? c.setTranslate(c.translate - t) : (c.slideTo(M - L, 0, !1, !0), i && (c.touchEventsData.startTranslate = c.touchEventsData.startTranslate - t, c.touchEventsData.currentTranslate = c.touchEventsData.currentTranslate - t))
              } else {
                const e = S ? E.length / h.grid.rows : E.length;
                c.slideTo(c.activeIndex - e, 0, !1, !0)
              } if (c.allowSlidePrev = p, c.allowSlideNext = f, c.controller && c.controller.control && !l) {
              const e = {
                slideRealIndex: t,
                direction: n,
                setTranslate: i,
                activeSlideIndex: a,
                byController: !0
              };
              Array.isArray(c.controller.control) ? c.controller.control.forEach(t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === h.slidesPerView && r
                })
              }) : c.controller.control instanceof c.constructor && c.controller.control.params.loop && c.controller.control.loopFix({
                ...e,
                slideTo: c.controller.control.params.slidesPerView === h.slidesPerView && r
              })
            }
            c.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || !r || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const n = [];
            e.slides.forEach(e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              n[t] = e
            }), e.slides.forEach(e => {
              e.removeAttribute("data-swiper-slide-index")
            }), n.forEach(e => {
              r.append(e)
            }), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function T(e, t, r) {
        const n = (0, i.a)(),
          {
            params: s
          } = e,
          a = s.edgeSwipeDetection,
          o = s.edgeSwipeThreshold;
        return !a || !(r <= o || r >= n.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0)
      }

      function E(e) {
        const t = this,
          r = (0, i.g)();
        let n = e;
        n.originalEvent && (n = n.originalEvent);
        const a = t.touchEventsData;
        if ("pointerdown" === n.type) {
          if (null !== a.pointerId && a.pointerId !== n.pointerId) return;
          a.pointerId = n.pointerId
        } else "touchstart" === n.type && 1 === n.targetTouches.length && (a.touchId = n.targetTouches[0].identifier);
        if ("touchstart" === n.type) return void T(t, n, n.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: d
        } = t;
        if (!d) return;
        if (!o.simulateTouch && "mouse" === n.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = n.target;
        if ("wrapper" === o.touchEventsTarget && !(0, s.w)(c, t.wrapperEl)) return;
        if ("which" in n && 3 === n.which) return;
        if ("button" in n && n.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const u = !!o.noSwipingClass && "" !== o.noSwipingClass,
          p = n.composedPath ? n.composedPath() : n.path;
        u && n.target && n.target.shadowRoot && p && (c = p[0]);
        const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          m = !(!n.target || !n.target.shadowRoot);
        if (o.noSwiping && (m ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === (0, i.g)() || r === (0, i.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const n = r.closest(e);
                return n || r.getRootNode ? n || t(r.getRootNode().host) : null
              }(t)
          }(f, c) : c.closest(f))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = n.pageX, l.currentY = n.pageY;
        const h = l.currentX,
          g = l.currentY;
        if (!T(t, n, h)) return;
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = h, l.startY = g, a.touchStartTime = (0, s.f)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (a.allowThresholdMove = !1);
        let v = !0;
        c.matches(a.focusableElements) && (v = !1, "SELECT" === c.nodeName && (a.isTouched = !1)), r.activeElement && r.activeElement.matches(a.focusableElements) && r.activeElement !== c && ("mouse" === n.pointerType || "mouse" !== n.pointerType && !c.matches(a.focusableElements)) && r.activeElement.blur();
        const w = v && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !w || c.isContentEditable || n.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", n)
      }

      function x(e) {
        const t = (0, i.g)(),
          r = this,
          n = r.touchEventsData,
          {
            params: a,
            touches: o,
            rtlTranslate: l,
            enabled: d
          } = r;
        if (!d) return;
        if (!a.simulateTouch && "mouse" === e.pointerType) return;
        let c, u = e;
        if (u.originalEvent && (u = u.originalEvent), "pointermove" === u.type) {
          if (null !== n.touchId) return;
          if (u.pointerId !== n.pointerId) return
        }
        if ("touchmove" === u.type) {
          if (c = [...u.changedTouches].find(e => e.identifier === n.touchId), !c || c.identifier !== n.touchId) return
        } else c = u;
        if (!n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", u));
        const p = c.pageX,
          f = c.pageY;
        if (u.preventedByNestedSwiper) return o.startX = p, void(o.startY = f);
        if (!r.allowTouchMove) return u.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f
        }), n.touchStartTime = (0, s.f)()));
        if (a.touchReleaseOnEdges && !a.loop)
          if (r.isVertical()) {
            if (f < o.startY && r.translate <= r.maxTranslate() || f > o.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
          } else {
            if (l && (p > o.startX && -r.translate <= r.maxTranslate() || p < o.startX && -r.translate >= r.minTranslate())) return;
            if (!l && (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate())) return
          } if (t.activeElement && t.activeElement.matches(n.focusableElements) && t.activeElement !== u.target && "mouse" !== u.pointerType && t.activeElement.blur(), t.activeElement && u.target === t.activeElement && u.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
        n.allowTouchCallbacks && r.emit("touchMove", u), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = f;
        const m = o.currentX - o.startX,
          h = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(m ** 2 + h ** 2) < r.params.threshold) return;
        if (void 0 === n.isScrolling) {
          let e;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? n.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (n.isScrolling && r.emit("touchMoveOpposite", u), void 0 === n.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (n.startMoving = !0)), n.isScrolling || "touchmove" === u.type && n.preventTouchMoveFromPointerMove) return void(n.isTouched = !1);
        if (!n.startMoving) return;
        r.allowClick = !1, !a.cssMode && u.cancelable && u.preventDefault(), a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
        let g = r.isHorizontal() ? m : h,
          v = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        a.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), o.diff = g, g *= a.touchRatio, l && (g = -g, v = -v);
        const w = r.touchesDirection;
        r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = v > 0 ? "prev" : "next";
        const y = r.params.loop && !a.cssMode,
          b = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!n.isMoved) {
          if (y && b && r.loopFix({
              direction: r.swipeDirection
            }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: {
                bySwiperTouchMove: !0
              }
            });
            r.wrapperEl.dispatchEvent(e)
          }
          n.allowMomentumBounce = !1, !a.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", u)
        }
        if ((new Date).getTime(), !1 !== a._loopSwapReset && n.isMoved && n.allowThresholdMove && w !== r.touchesDirection && y && b && Math.abs(g) >= 1) return Object.assign(o, {
          startX: p,
          startY: f,
          currentX: p,
          currentY: f,
          startTranslate: n.currentTranslate
        }), n.loopSwapReset = !0, void(n.startTranslate = n.currentTranslate);
        r.emit("sliderMove", u), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
        let S = !0,
          T = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (T = 0), g > 0 ? (y && b && n.allowThresholdMove && n.currentTranslate > (a.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] - ("auto" !== a.slidesPerView && r.slides.length - a.slidesPerView >= 2 ? r.slidesSizesGrid[r.activeIndex + 1] + r.params.spaceBetween : 0) - r.params.spaceBetween : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), n.currentTranslate > r.minTranslate() && (S = !1, a.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + g) ** T))) : g < 0 && (y && b && n.allowThresholdMove && n.currentTranslate < (a.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween + ("auto" !== a.slidesPerView && r.slides.length - a.slidesPerView >= 2 ? r.slidesSizesGrid[r.slidesSizesGrid.length - 1] + r.params.spaceBetween : 0) : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === a.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
          }), n.currentTranslate < r.maxTranslate() && (S = !1, a.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - g) ** T))), S && (u.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), a.threshold > 0) {
          if (!(Math.abs(g) > a.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove) return n.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, n.currentTranslate = n.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && r.freeMode || a.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
      }

      function C(e) {
        const t = this,
          r = t.touchEventsData;
        let n, i = e;
        if (i.originalEvent && (i = i.originalEvent), "touchend" === i.type || "touchcancel" === i.type) {
          if (n = [...i.changedTouches].find(e => e.identifier === r.touchId), !n || n.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (i.pointerId !== r.pointerId) return;
          n = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && (!["pointercancel", "contextmenu"].includes(i.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: a,
          touches: o,
          rtlTranslate: l,
          slidesGrid: d,
          enabled: c
        } = t;
        if (!c) return;
        if (!a.simulateTouch && "mouse" === i.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", i), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && a.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        a.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = (0, s.f)(),
          p = u - r.touchStartTime;
        if (t.allowClick) {
          const e = i.path || i.composedPath && i.composedPath();
          t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), p < 300 && u - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (r.lastClickTime = (0, s.f)(), (0, s.n)(() => {
            t.destroyed || (t.allowClick = !0)
          }), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let f;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, f = a.followFinger ? l ? t.translate : -t.translate : -r.currentTranslate, a.cssMode) return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: f
        });
        const m = f >= -t.maxTranslate() && !t.params.loop;
        let h = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== d[e + t] ? (m || f >= d[e] && f < d[e + t]) && (h = e, g = d[e + t] - d[e]) : (m || f >= d[e]) && (h = e, g = d[d.length - 1] - d[d.length - 2])
        }
        let v = null,
          w = null;
        a.rewind && (t.isBeginning ? w = a.virtual && a.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
        const y = (f - d[h]) / g,
          b = h < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (p > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (y >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? v : h + b) : t.slideTo(h)), "prev" === t.swipeDirection && (y > 1 - a.longSwipesRatio ? t.slideTo(h + b) : null !== w && y < 0 && Math.abs(y) > a.longSwipesRatio ? t.slideTo(w) : t.slideTo(h))
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || i.target !== t.navigation.nextEl && i.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + b), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h)) : i.target === t.navigation.nextEl ? t.slideTo(h + b) : t.slideTo(h)
        }
      }

      function M() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: n,
          allowSlidePrev: i,
          snapGrid: s
        } = e, a = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }, 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
      }

      function _(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function k() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: n
          } = e;
        if (!n) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function O(e) {
        const t = this;
        h(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function L() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const A = (e, t) => {
          const r = (0, i.g)(),
            {
              params: n,
              el: s,
              wrapperEl: a,
              device: o
            } = e,
            l = !!n.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          s && "string" != typeof s && (r[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), s[d]("touchstart", e.onTouchStart, {
            passive: !1
          }), s[d]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[d]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[d]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[d]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (n.preventClicks || n.preventClicksPropagation) && s[d]("click", e.onClick, !0), n.cssMode && a[d]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", M, !0) : e[c]("observerUpdate", M, !0), s[d]("load", e.onLoad, {
            capture: !0
          }))
        },
        P = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var I = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function N(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const n = Object.keys(r)[0],
            i = r[n];
          "object" == typeof i && null !== i ? (!0 === e[n] && (e[n] = {
            enabled: !0
          }), "navigation" === n && e[n] && e[n].enabled && !e[n].prevEl && !e[n].nextEl && (e[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && e[n] && e[n].enabled && !e[n].el && (e[n].auto = !0), n in e && "enabled" in i ? ("object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
            enabled: !1
          }), (0, s.x)(t, r)) : (0, s.x)(t, r)) : (0, s.x)(t, r)
        }
      }
      const z = {
          eventsEmitter: p,
          update: w,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: n,
                wrapperEl: i
              } = this;
              if (t.virtualTranslate) return r ? -n : n;
              if (t.cssMode) return n;
              let a = (0, s.k)(i, e);
              return a += this.cssOverflowAdjustment(), r && (a = -a), a || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: n,
                  params: i,
                  wrapperEl: s,
                  progress: a
                } = r;
              let o, l = 0,
                d = 0;
              r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d, i.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : d -= r.cssOverflowAdjustment(), s.style.transform = `translate3d(${l}px, ${d}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, n, i) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === n && (n = !0);
              const a = this,
                {
                  params: o,
                  wrapperEl: l
                } = a;
              if (a.animating && o.preventInteractionOnTransition) return !1;
              const d = a.minTranslate(),
                c = a.maxTranslate();
              let u;
              if (u = n && e > d ? d : n && e < c ? c : e, a.updateProgress(u), o.cssMode) {
                const e = a.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -u;
                else {
                  if (!a.support.smoothScroll) return (0, s.u)({
                    swiper: a,
                    targetPosition: -u,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -u,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (a.setTransition(0), a.setTranslate(u), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(u), r && (a.emit("beforeTransitionStart", t, i), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                a && !a.destroyed && e.target === this && (a.wrapperEl.removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, a.animating = !1, r && a.emit("transitionEnd"))
              }), a.wrapperEl.addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              n.cssMode || (n.autoHeight && r.updateAutoHeight(), y({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: n
                } = r;
              r.animating = !1, n.cssMode || (r.setTransition(0), y({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: b,
          loop: S,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                t.__preventObserver__ = !1
              })
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                e.__preventObserver__ = !1
              }))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = E.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = C.bind(e), e.onDocumentTouchStart = L.bind(e), t.cssMode && (e.onScroll = k.bind(e)), e.onClick = _.bind(e), e.onLoad = O.bind(e), A(e, "on")
            },
            detachEvents: function() {
              A(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: r,
                  params: n,
                  el: a
                } = e,
                o = n.breakpoints;
              if (!o || o && 0 === Object.keys(o).length) return;
              const l = (0, i.g)(),
                d = "window" !== n.breakpointsBase && n.breakpointsBase ? "container" : n.breakpointsBase,
                c = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? e.el : l.querySelector(n.breakpointsBase),
                u = e.getBreakpoint(o, d, c);
              if (!u || e.currentBreakpoint === u) return;
              const p = (u in o ? o[u] : void 0) || e.originalParams,
                f = P(e, n),
                m = P(e, p),
                h = e.params.grabCursor,
                g = p.grabCursor,
                v = n.enabled;
              f && !m ? (a.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !f && m && (a.classList.add(`${n.containerModifierClass}grid`), (p.grid.fill && "column" === p.grid.fill || !p.grid.fill && "column" === n.grid.fill) && a.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !g ? e.unsetGrabCursor() : !h && g && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                if (void 0 === p[t]) return;
                const r = n[t] && n[t].enabled,
                  i = p[t] && p[t].enabled;
                r && !i && e[t].disable(), !r && i && e[t].enable()
              });
              const w = p.direction && p.direction !== n.direction,
                y = n.loop && (p.slidesPerView !== n.slidesPerView || w),
                b = n.loop;
              w && r && e.changeDirection(), (0, s.x)(e.params, p);
              const S = e.params.enabled,
                T = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), v && !S ? e.disable() : !v && S && e.enable(), e.currentBreakpoint = u, e.emit("_beforeBreakpoint", p), r && (y ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && T ? (e.loopCreate(t), e.updateSlides()) : b && !T && e.loopDestroy()), e.emit("breakpoint", p)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let n = !1;
              const s = (0, i.a)(),
                a = "window" === t ? s.innerHeight : r.clientHeight,
                o = Object.keys(e).map(e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: a * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                });
              o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: i,
                  value: a
                } = o[e];
                "window" === t ? s.matchMedia(`(min-width: ${a}px)`).matches && (n = i) : a <= r.clientWidth && (n = i)
              }
              return n || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: n
                } = r;
              if (n) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: n,
                  el: i,
                  device: s
                } = e,
                a = function(e, t) {
                  const r = [];
                  return e.forEach(e => {
                    "object" == typeof e ? Object.keys(e).forEach(n => {
                      e[n] && r.push(t + n)
                    }) : "string" == typeof e && r.push(t + e)
                  }), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: n
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: s.android
                }, {
                  ios: s.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              t.push(...a), i.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
            }
          }
        },
        D = {};
      class R {
        constructor() {
          let e, t;
          for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
          1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = (0, s.x)({}, t), e && !t.el && (t.el = e);
          const o = (0, i.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach(r => {
              const n = (0, s.x)({}, t, {
                el: r
              });
              e.push(new R(n))
            }), e
          }
          const l = this;
          l.__swiper__ = !0, l.support = d(), l.device = c({
            userAgent: t.userAgent
          }), l.browser = u(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
          const p = {};
          l.modules.forEach(e => {
            e({
              params: t,
              swiper: l,
              extendParams: N(t, p),
              on: l.on.bind(l),
              once: l.once.bind(l),
              off: l.off.bind(l),
              emit: l.emit.bind(l)
            })
          });
          const f = (0, s.x)({}, I, p);
          return l.params = (0, s.x)({}, f, D, t), l.originalParams = (0, s.x)({}, l.params), l.passedParams = (0, s.x)({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
            l.on(e, l.params.on[e])
          }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
            enabled: l.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === l.params.direction,
            isVertical: () => "vertical" === l.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: l.params.allowSlideNext,
            allowSlidePrev: l.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: l.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: l.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), l.emit("_swiper"), l.params.init && l.init(), l
        }
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: r
          } = this, n = (0, s.e)(t, `.${r.slideClass}, swiper-slide`), i = (0, s.i)(n[0]);
          return (0, s.i)(e) - i
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.find(t => 1 * t.getAttribute("data-swiper-slide-index") === e))
        }
        getSlideIndexWhenGrid(e) {
          return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, s.e)(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const n = r.minTranslate(),
            i = (r.maxTranslate() - n) * e + n;
          r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach(r => {
            const n = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: n
            }), e.emit("_slideClass", r, n)
          }), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: n,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: a,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = n[o] ? Math.ceil(n[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < n.length; r += 1) n[r] && !e && (t += Math.ceil(n[r].swiperSlideSize), l += 1, t > a && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < n.length; e += 1)(t ? i[e] + s[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function n() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let i;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(t => {
              t.complete && h(e, t)
            }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) n(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              i = e.slideTo(t.length - 1, 0, !1, !0)
            } else i = e.slideTo(e.activeIndex, 0, !1, !0);
            i || n()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            n = r.params.direction;
          return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach(t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          }), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let i = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(n()) : (0, s.e)(r, n())[0];
          return !i && t.params.createElements && (i = (0, s.c)("div", t.params.wrapperClass), r.append(i), (0, s.e)(r, `.${t.params.slideClass}`).forEach(e => {
            i.append(e)
          })), Object.assign(t, {
            el: r,
            wrapperEl: i,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : i,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, s.q)(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, s.q)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, s.q)(i, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach(e => {
            e.complete ? h(t, e) : e.addEventListener("load", e => {
              h(t, e.target)
            })
          }), v(t), t.initialized = !0, v(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: n,
              el: i,
              wrapperEl: a,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i && "string" != typeof i && i.removeAttribute("style"), a && a.removeAttribute("style"), o && o.length && o.forEach(e => {
            e.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          })), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(e => {
            r.off(e)
          }), !1 !== e && (r.el && "string" != typeof r.el && (r.el.swiper = null), (0, s.y)(r)), r.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, s.x)(D, e)
        }
        static get extendedDefaults() {
          return D
        }
        static get defaults() {
          return I
        }
        static installModule(e) {
          R.prototype.__modules__ || (R.prototype.__modules__ = []);
          const t = R.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach(e => R.installModule(e)), R) : (R.installModule(e), R)
        }
      }
      Object.keys(z).forEach(e => {
        Object.keys(z[e]).forEach(t => {
          R.prototype[t] = z[e][t]
        })
      }), R.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: n
        } = e;
        const s = (0, i.a)();
        let a = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
          },
          d = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
          };
        r("init", () => {
          t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver(e => {
            o = s.requestAnimationFrame(() => {
              const {
                width: r,
                height: n
              } = t;
              let i = r,
                s = n;
              e.forEach(e => {
                let {
                  contentBoxSize: r,
                  contentRect: n,
                  target: a
                } = e;
                a && a !== t.el || (i = n ? n.width : (r[0] || r).inlineSize, s = n ? n.height : (r[0] || r).blockSize)
              }), i === r && s === n || l()
            })
          }), a.observe(t.el)) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", d))
        }), r("destroy", () => {
          o && s.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
        })
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: n,
          emit: a
        } = e;
        const o = [],
          l = (0, i.a)(),
          d = function(e, r) {
            void 0 === r && (r = {});
            const n = new(l.MutationObserver || l.WebkitMutationObserver)(e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void a("observerUpdate", e[0]);
              const r = function() {
                a("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            });
            n.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: t.isElement || (void 0 === r.childList || r).childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(n)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), n("init", () => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, s.b)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) d(e[t])
            }
            d(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), d(t.wrapperEl, {
              attributes: !1
            })
          }
        }), n("destroy", () => {
          o.forEach(e => {
            e.disconnect()
          }), o.splice(0, o.length)
        })
      }]);
      const G = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function F(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function B(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => r.indexOf(e) < 0).forEach(r => {
          void 0 === e[r] ? e[r] = t[r] : F(t[r]) && F(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : B(e[r], t[r]) : e[r] = t[r]
        })
      }

      function j(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function $(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function H(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function V(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map(e => e.trim()).filter(e => !!e),
          r = [];
        return t.forEach(e => {
          r.indexOf(e) < 0 && r.push(e)
        }), r.join(" ")
      }

      function W(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function U() {
        return U = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, U.apply(this, arguments)
      }

      function q(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function Y(e) {
        const t = [];
        return n.Children.toArray(e).forEach(e => {
          q(e) ? t.push(e) : e.props && e.props.children && Y(e.props.children).forEach(e => t.push(e))
        }), t
      }

      function X(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return n.Children.toArray(e).forEach(e => {
          if (q(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const n = Y(e.props.children);
            n.length > 0 ? n.forEach(e => t.push(e)) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        }), {
          slides: t,
          slots: r
        }
      }

      function K(e, t) {
        return "undefined" == typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
      }
      const Z = (0, n.createContext)(null),
        J = (0, n.createContext)(null),
        Q = (0, n.forwardRef)(function(e, t) {
          let {
            className: r,
            tag: i = "div",
            wrapperTag: a = "div",
            children: o,
            onSwiper: l,
            ...d
          } = void 0 === e ? {} : e, c = !1;
          const [u, p] = (0, n.useState)("swiper"), [f, m] = (0, n.useState)(null), [h, g] = (0, n.useState)(!1), v = (0, n.useRef)(!1), w = (0, n.useRef)(null), y = (0, n.useRef)(null), b = (0, n.useRef)(null), S = (0, n.useRef)(null), T = (0, n.useRef)(null), E = (0, n.useRef)(null), x = (0, n.useRef)(null), C = (0, n.useRef)(null), {
            params: M,
            passedParams: _,
            rest: k,
            events: O
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              n = {},
              i = {};
            B(r, I), r._emitClasses = !0, r.init = !1;
            const s = {},
              a = G.map(e => e.replace(/_/, "")),
              o = Object.assign({}, e);
            return Object.keys(o).forEach(o => {
              void 0 !== e[o] && (a.indexOf(o) >= 0 ? F(e[o]) ? (r[o] = {}, i[o] = {}, B(r[o], e[o]), B(i[o], e[o])) : (r[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? n[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : s[o] = e[o])
            }), ["navigation", "pagination", "scrollbar"].forEach(e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            }), {
              params: r,
              passedParams: i,
              rest: s,
              events: n
            }
          }(d), {
            slides: L,
            slots: A
          } = X(o), P = () => {
            g(!h)
          };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              p(t)
            }
          });
          const N = () => {
            Object.assign(M.on, O), c = !0;
            const e = {
              ...M
            };
            if (delete e.wrapperClass, y.current = new R(e), y.current.virtual && y.current.params.virtual.enabled) {
              y.current.virtual.slides = L;
              const e = {
                cache: !1,
                slides: L,
                renderExternal: m,
                renderExternalUpdate: !1
              };
              B(y.current.params.virtual, e), B(y.current.originalParams.virtual, e)
            }
          };
          return w.current || N(), y.current && y.current.on("_beforeBreakpoint", P), (0, n.useEffect)(() => () => {
            y.current && y.current.off("_beforeBreakpoint", P)
          }), (0, n.useEffect)(() => {
            !v.current && y.current && (y.current.emitSlidesClasses(), v.current = !0)
          }), K(() => {
            if (t && (t.current = w.current), w.current) return y.current.destroyed && N(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: n,
                  prevEl: i,
                  paginationEl: s,
                  scrollbarEl: a,
                  swiper: o
                } = e;
                j(t) && n && i && (o.params.navigation.nextEl = n, o.originalParams.navigation.nextEl = n, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), $(t) && s && (o.params.pagination.el = s, o.originalParams.pagination.el = s), H(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(r)
              }({
                el: w.current,
                nextEl: T.current,
                prevEl: E.current,
                paginationEl: x.current,
                scrollbarEl: C.current,
                swiper: y.current
              }, M), l && !y.current.destroyed && l(y.current), () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
              }
          }, []), K(() => {
            !c && O && y.current && Object.keys(O).forEach(e => {
              y.current.on(e, O[e])
            });
            const e = function(e, t, r, n, i) {
              const s = [];
              if (!t) return s;
              const a = e => {
                s.indexOf(e) < 0 && s.push(e)
              };
              if (r && n) {
                const e = n.map(i),
                  t = r.map(i);
                e.join("") !== t.join("") && a("children"), n.length !== r.length && a("children")
              }
              return G.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(r => {
                if (r in e && r in t)
                  if (F(e[r]) && F(t[r])) {
                    const n = Object.keys(e[r]),
                      i = Object.keys(t[r]);
                    n.length !== i.length ? a(r) : (n.forEach(n => {
                      e[r][n] !== t[r][n] && a(r)
                    }), i.forEach(n => {
                      e[r][n] !== t[r][n] && a(r)
                    }))
                  } else e[r] !== t[r] && a(r)
              }), s
            }(_, b.current, L, S.current, e => e.key);
            return b.current = _, S.current = L, e.length && y.current && !y.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: n,
                changedParams: i,
                nextEl: a,
                prevEl: o,
                scrollbarEl: l,
                paginationEl: d
              } = e;
              const c = i.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                {
                  params: u,
                  pagination: p,
                  navigation: f,
                  scrollbar: m,
                  virtual: h,
                  thumbs: g
                } = t;
              let v, w, y, b, S, T, E, x;
              i.includes("thumbs") && n.thumbs && n.thumbs.swiper && !n.thumbs.swiper.destroyed && u.thumbs && (!u.thumbs.swiper || u.thumbs.swiper.destroyed) && (v = !0), i.includes("controller") && n.controller && n.controller.control && u.controller && !u.controller.control && (w = !0), i.includes("pagination") && n.pagination && (n.pagination.el || d) && (u.pagination || !1 === u.pagination) && p && !p.el && (y = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || l) && (u.scrollbar || !1 === u.scrollbar) && m && !m.el && (b = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || o) && (n.navigation.nextEl || a) && (u.navigation || !1 === u.navigation) && f && !f.prevEl && !f.nextEl && (S = !0);
              const C = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), u[e].prevEl = void 0, u[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), u[e].el = void 0, t[e].el = void 0))
              };
              i.includes("loop") && t.isElement && (u.loop && !n.loop ? T = !0 : !u.loop && n.loop ? E = !0 : x = !0), c.forEach(e => {
                if (F(u[e]) && F(n[e])) Object.assign(u[e], n[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in n[e]) || n[e].enabled || C(e);
                else {
                  const t = n[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = n[e] : !1 === t && C(e)
                }
              }), c.includes("controller") && !w && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), i.includes("children") && r && h && u.virtual.enabled ? (h.slides = r, h.update(!0)) : i.includes("virtual") && h && u.virtual.enabled && (r && (h.slides = r), h.update(!0)), i.includes("children") && r && u.loop && (x = !0), v && g.init() && g.update(!0), w && (t.controller.control = u.controller.control), y && (!t.isElement || d && "string" != typeof d || (d = document.createElement("div"), d.classList.add("swiper-pagination"), d.part.add("pagination"), t.el.appendChild(d)), d && (u.pagination.el = d), p.init(), p.render(), p.update()), b && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (u.scrollbar.el = l), m.init(), m.updateSize(), m.setTranslate()), S && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), (0, s.s)(a, t.hostEl.constructor.nextButtonSvg), a.part.add("button-next"), t.el.appendChild(a)), o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-button-prev"), (0, s.s)(o, t.hostEl.constructor.prevButtonSvg), o.part.add("button-prev"), t.el.appendChild(o))), a && (u.navigation.nextEl = a), o && (u.navigation.prevEl = o), f.init(), f.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), (T || x) && t.loopDestroy(), (E || x) && t.loopCreate(), t.update()
            }({
              swiper: y.current,
              slides: L,
              passedParams: _,
              changedParams: e,
              nextEl: T.current,
              prevEl: E.current,
              scrollbarEl: C.current,
              paginationEl: x.current
            }), () => {
              O && y.current && Object.keys(O).forEach(e => {
                y.current.off(e, O[e])
              })
            }
          }), K(() => {
            var e;
            !(e = y.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }, [f]), n.createElement(i, U({
            ref: w,
            className: V(`${u}${r?` ${r}`:""}`)
          }, k), n.createElement(J.Provider, {
            value: y.current
          }, A["container-start"], n.createElement(a, {
            className: W(M.wrapperClass)
          }, A["wrapper-start"], M.virtual ? function(e, t, r) {
            if (!r) return null;
            const i = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              s = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: a,
                to: o
              } = r,
              l = e.params.loop ? -t.length : 0,
              d = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < d; e += 1) e >= a && e <= o && c.push(t[i(e)]);
            return c.map((t, r) => n.cloneElement(t, {
              swiper: e,
              style: s,
              key: t.props.virtualIndex || t.key || `slide-${r}`
            }))
          }(y.current, L, f) : L.map((e, t) => n.cloneElement(e, {
            swiper: y.current,
            swiperSlideIndex: t
          })), A["wrapper-end"]), j(M) && n.createElement(n.Fragment, null, n.createElement("div", {
            ref: E,
            className: "swiper-button-prev"
          }), n.createElement("div", {
            ref: T,
            className: "swiper-button-next"
          })), H(M) && n.createElement("div", {
            ref: C,
            className: "swiper-scrollbar"
          }), $(M) && n.createElement("div", {
            ref: x,
            className: "swiper-pagination"
          }), A["container-end"]))
        });
      Q.displayName = "Swiper";
      const ee = (0, n.forwardRef)(function(e, t) {
        let {
          tag: r = "div",
          children: i,
          className: s = "",
          swiper: a,
          zoom: o,
          lazy: l,
          virtualIndex: d,
          swiperSlideIndex: c,
          ...u
        } = void 0 === e ? {} : e;
        const p = (0, n.useRef)(null),
          [f, m] = (0, n.useState)("swiper-slide"),
          [h, g] = (0, n.useState)(!1);

        function v(e, t, r) {
          t === p.current && m(r)
        }
        K(() => {
          if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && a) {
            if (!a.destroyed) return a.on("_slideClass", v), () => {
              a && a.off("_slideClass", v)
            };
            "swiper-slide" !== f && m("swiper-slide")
          }
        }), K(() => {
          a && p.current && !a.destroyed && m(a.getSlideClasses(p.current))
        }, [a]);
        const w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0
          },
          y = () => "function" == typeof i ? i(w) : i;
        return n.createElement(r, U({
          ref: p,
          className: V(`${f}${s?` ${s}`:""}`),
          "data-swiper-slide-index": d,
          onLoad: () => {
            g(!0)
          }
        }, u), o && n.createElement(Z.Provider, {
          value: w
        }, n.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, y(), l && !h && n.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && n.createElement(Z.Provider, {
          value: w
        }, y(), l && !h && n.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      });
      ee.displayName = "SwiperSlide"
    },
    27785: function(e) {
      e.exports = function() {
        "use strict";

        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, e(t)
        }

        function t(e, r) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, r)
        }

        function r(e, n, i) {
          return r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, r, n) {
            var i = [null];
            i.push.apply(i, r);
            var s = new(Function.bind.apply(e, i));
            return n && t(s, n.prototype), s
          }, r.apply(null, arguments)
        }

        function n(e) {
          return function(e) {
            if (Array.isArray(e)) return i(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return i(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function i(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n
        }
        var s = Object.hasOwnProperty,
          a = Object.setPrototypeOf,
          o = Object.isFrozen,
          l = Object.getPrototypeOf,
          d = Object.getOwnPropertyDescriptor,
          c = Object.freeze,
          u = Object.seal,
          p = Object.create,
          f = "undefined" != typeof Reflect && Reflect,
          m = f.apply,
          h = f.construct;
        m || (m = function(e, t, r) {
          return e.apply(t, r)
        }), c || (c = function(e) {
          return e
        }), u || (u = function(e) {
          return e
        }), h || (h = function(e, t) {
          return r(e, n(t))
        });
        var g, v = k(Array.prototype.forEach),
          w = k(Array.prototype.pop),
          y = k(Array.prototype.push),
          b = k(String.prototype.toLowerCase),
          S = k(String.prototype.toString),
          T = k(String.prototype.match),
          E = k(String.prototype.replace),
          x = k(String.prototype.indexOf),
          C = k(String.prototype.trim),
          M = k(RegExp.prototype.test),
          _ = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return h(g, t)
          });

        function k(e) {
          return function(t) {
            for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
            return m(e, t, n)
          }
        }

        function O(e, t, r) {
          var n;
          r = null !== (n = r) && void 0 !== n ? n : b, a && a(e, null);
          for (var i = t.length; i--;) {
            var s = t[i];
            if ("string" == typeof s) {
              var l = r(s);
              l !== s && (o(t) || (t[i] = l), s = l)
            }
            e[s] = !0
          }
          return e
        }

        function L(e) {
          var t, r = p(null);
          for (t in e) !0 === m(s, e, [t]) && (r[t] = e[t]);
          return r
        }

        function A(e, t) {
          for (; null !== e;) {
            var r = d(e, t);
            if (r) {
              if (r.get) return k(r.get);
              if ("function" == typeof r.value) return k(r.value)
            }
            e = l(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var P = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          I = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          N = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          z = c(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          D = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          R = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          G = c(["#text"]),
          F = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          B = c(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          j = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          $ = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          H = u(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          V = u(/<%[\w\W]*|[\w\W]*%>/gm),
          W = u(/\${[\w\W]*}/gm),
          U = u(/^data-[\-\w.\u00B7-\uFFFF]+$/),
          q = u(/^aria-[\-\w]+$/),
          Y = u(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          X = u(/^(?:\w+script|data):/i),
          K = u(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          Z = u(/^html$/i),
          J = u(/^[a-z][.\w]*(-[.\w]+)+$/i),
          Q = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q(),
            i = function(e) {
              return t(e)
            };
          if (i.version = "2.5.8", i.removed = [], !r || !r.document || 9 !== r.document.nodeType) return i.isSupported = !1, i;
          var s = r.document,
            a = r.document,
            o = r.DocumentFragment,
            l = r.HTMLTemplateElement,
            d = r.Node,
            u = r.Element,
            p = r.NodeFilter,
            f = r.NamedNodeMap,
            m = void 0 === f ? r.NamedNodeMap || r.MozNamedAttrMap : f,
            h = r.HTMLFormElement,
            g = r.DOMParser,
            k = r.trustedTypes,
            ee = u.prototype,
            te = A(ee, "cloneNode"),
            re = A(ee, "nextSibling"),
            ne = A(ee, "childNodes"),
            ie = A(ee, "parentNode");
          if ("function" == typeof l) {
            var se = a.createElement("template");
            se.content && se.content.ownerDocument && (a = se.content.ownerDocument)
          }
          var ae = function(t, r) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var n = null,
                i = "data-tt-policy-suffix";
              r.currentScript && r.currentScript.hasAttribute(i) && (n = r.currentScript.getAttribute(i));
              var s = "dompurify" + (n ? "#" + n : "");
              try {
                return t.createPolicy(s, {
                  createHTML: function(e) {
                    return e
                  },
                  createScriptURL: function(e) {
                    return e
                  }
                })
              } catch (e) {
                return console.warn("TrustedTypes policy " + s + " could not be created."), null
              }
            }(k, s),
            oe = ae ? ae.createHTML("") : "",
            le = a,
            de = le.implementation,
            ce = le.createNodeIterator,
            ue = le.createDocumentFragment,
            pe = le.getElementsByTagName,
            fe = s.importNode,
            me = {};
          try {
            me = L(a).documentMode ? a.documentMode : {}
          } catch (e) {}
          var he = {};
          i.isSupported = "function" == typeof ie && de && void 0 !== de.createHTMLDocument && 9 !== me;
          var ge, ve, we = H,
            ye = V,
            be = W,
            Se = U,
            Te = q,
            Ee = X,
            xe = K,
            Ce = J,
            Me = Y,
            _e = null,
            ke = O({}, [].concat(n(P), n(I), n(N), n(D), n(G))),
            Oe = null,
            Le = O({}, [].concat(n(F), n(B), n(j), n($))),
            Ae = Object.seal(Object.create(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
              }
            })),
            Pe = null,
            Ie = null,
            Ne = !0,
            ze = !0,
            De = !1,
            Re = !0,
            Ge = !1,
            Fe = !0,
            Be = !1,
            je = !1,
            $e = !1,
            He = !1,
            Ve = !1,
            We = !1,
            Ue = !0,
            qe = !1,
            Ye = !0,
            Xe = !1,
            Ke = {},
            Ze = null,
            Je = O({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            Qe = null,
            et = O({}, ["audio", "video", "img", "source", "image", "track"]),
            tt = null,
            rt = O({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            nt = "http://www.w3.org/1998/Math/MathML",
            it = "http://www.w3.org/2000/svg",
            st = "http://www.w3.org/1999/xhtml",
            at = st,
            ot = !1,
            lt = null,
            dt = O({}, [nt, it, st], S),
            ct = ["application/xhtml+xml", "text/html"],
            ut = null,
            pt = a.createElement("form"),
            ft = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            mt = function(t) {
              ut && ut === t || (t && "object" === e(t) || (t = {}), t = L(t), ge = ge = -1 === ct.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ve = "application/xhtml+xml" === ge ? S : b, _e = "ALLOWED_TAGS" in t ? O({}, t.ALLOWED_TAGS, ve) : ke, Oe = "ALLOWED_ATTR" in t ? O({}, t.ALLOWED_ATTR, ve) : Le, lt = "ALLOWED_NAMESPACES" in t ? O({}, t.ALLOWED_NAMESPACES, S) : dt, tt = "ADD_URI_SAFE_ATTR" in t ? O(L(rt), t.ADD_URI_SAFE_ATTR, ve) : rt, Qe = "ADD_DATA_URI_TAGS" in t ? O(L(et), t.ADD_DATA_URI_TAGS, ve) : et, Ze = "FORBID_CONTENTS" in t ? O({}, t.FORBID_CONTENTS, ve) : Je, Pe = "FORBID_TAGS" in t ? O({}, t.FORBID_TAGS, ve) : {}, Ie = "FORBID_ATTR" in t ? O({}, t.FORBID_ATTR, ve) : {}, Ke = "USE_PROFILES" in t && t.USE_PROFILES, Ne = !1 !== t.ALLOW_ARIA_ATTR, ze = !1 !== t.ALLOW_DATA_ATTR, De = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Re = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Ge = t.SAFE_FOR_TEMPLATES || !1, Fe = !1 !== t.SAFE_FOR_XML, Be = t.WHOLE_DOCUMENT || !1, He = t.RETURN_DOM || !1, Ve = t.RETURN_DOM_FRAGMENT || !1, We = t.RETURN_TRUSTED_TYPE || !1, $e = t.FORCE_BODY || !1, Ue = !1 !== t.SANITIZE_DOM, qe = t.SANITIZE_NAMED_PROPS || !1, Ye = !1 !== t.KEEP_CONTENT, Xe = t.IN_PLACE || !1, Me = t.ALLOWED_URI_REGEXP || Me, at = t.NAMESPACE || st, Ae = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ae.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ae.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ae.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ge && (ze = !1), Ve && (He = !0), Ke && (_e = O({}, n(G)), Oe = [], !0 === Ke.html && (O(_e, P), O(Oe, F)), !0 === Ke.svg && (O(_e, I), O(Oe, B), O(Oe, $)), !0 === Ke.svgFilters && (O(_e, N), O(Oe, B), O(Oe, $)), !0 === Ke.mathMl && (O(_e, D), O(Oe, j), O(Oe, $))), t.ADD_TAGS && (_e === ke && (_e = L(_e)), O(_e, t.ADD_TAGS, ve)), t.ADD_ATTR && (Oe === Le && (Oe = L(Oe)), O(Oe, t.ADD_ATTR, ve)), t.ADD_URI_SAFE_ATTR && O(tt, t.ADD_URI_SAFE_ATTR, ve), t.FORBID_CONTENTS && (Ze === Je && (Ze = L(Ze)), O(Ze, t.FORBID_CONTENTS, ve)), Ye && (_e["#text"] = !0), Be && O(_e, ["html", "head", "body"]), _e.table && (O(_e, ["tbody"]), delete Pe.tbody), c && c(t), ut = t)
            },
            ht = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
            gt = O({}, ["annotation-xml"]),
            vt = O({}, ["title", "style", "font", "a", "script"]),
            wt = O({}, I);
          O(wt, N), O(wt, z);
          var yt = O({}, D);
          O(yt, R);
          var bt = function(e) {
              y(i.removed, {
                element: e
              });
              try {
                e.parentNode.removeChild(e)
              } catch (t) {
                try {
                  e.outerHTML = oe
                } catch (t) {
                  e.remove()
                }
              }
            },
            St = function(e, t) {
              try {
                y(i.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                y(i.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !Oe[e])
                if (He || Ve) try {
                  bt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            Tt = function(e) {
              var t, r;
              if ($e) e = "<remove></remove>" + e;
              else {
                var n = T(e, /^[\r\n\t ]+/);
                r = n && n[0]
              }
              "application/xhtml+xml" === ge && at === st && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var i = ae ? ae.createHTML(e) : e;
              if (at === st) try {
                t = (new g).parseFromString(i, ge)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = de.createDocument(at, "template", null);
                try {
                  t.documentElement.innerHTML = ot ? oe : i
                } catch (e) {}
              }
              var s = t.body || t.documentElement;
              return e && r && s.insertBefore(a.createTextNode(r), s.childNodes[0] || null), at === st ? pe.call(t, Be ? "html" : "body")[0] : Be ? t.documentElement : s
            },
            Et = function(e) {
              return ce.call(e.ownerDocument || e, e, p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION, null, !1)
            },
            xt = function(e) {
              return e instanceof h && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof m) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
            },
            Ct = function(t) {
              return "object" === e(d) ? t instanceof d : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            Mt = function(e, t, r) {
              he[e] && v(he[e], function(e) {
                e.call(i, t, r, ut)
              })
            },
            _t = function(e) {
              var t;
              if (Mt("beforeSanitizeElements", e, null), xt(e)) return bt(e), !0;
              if (M(/[\u0080-\uFFFF]/, e.nodeName)) return bt(e), !0;
              var r = ve(e.nodeName);
              if (Mt("uponSanitizeElement", e, {
                  tagName: r,
                  allowedTags: _e
                }), e.hasChildNodes() && !Ct(e.firstElementChild) && (!Ct(e.content) || !Ct(e.content.firstElementChild)) && M(/<[/\w]/g, e.innerHTML) && M(/<[/\w]/g, e.textContent)) return bt(e), !0;
              if ("select" === r && M(/<template/i, e.innerHTML)) return bt(e), !0;
              if (7 === e.nodeType) return bt(e), !0;
              if (Fe && 8 === e.nodeType && M(/<[/\w]/g, e.data)) return bt(e), !0;
              if (!_e[r] || Pe[r]) {
                if (!Pe[r] && Ot(r)) {
                  if (Ae.tagNameCheck instanceof RegExp && M(Ae.tagNameCheck, r)) return !1;
                  if (Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(r)) return !1
                }
                if (Ye && !Ze[r]) {
                  var n = ie(e) || e.parentNode,
                    s = ne(e) || e.childNodes;
                  if (s && n)
                    for (var a = s.length - 1; a >= 0; --a) {
                      var o = te(s[a], !0);
                      o.__removalCount = (e.__removalCount || 0) + 1, n.insertBefore(o, re(e))
                    }
                }
                return bt(e), !0
              }
              return e instanceof u && ! function(e) {
                var t = ie(e);
                t && t.tagName || (t = {
                  namespaceURI: at,
                  tagName: "template"
                });
                var r = b(e.tagName),
                  n = b(t.tagName);
                return !!lt[e.namespaceURI] && (e.namespaceURI === it ? t.namespaceURI === st ? "svg" === r : t.namespaceURI === nt ? "svg" === r && ("annotation-xml" === n || ht[n]) : Boolean(wt[r]) : e.namespaceURI === nt ? t.namespaceURI === st ? "math" === r : t.namespaceURI === it ? "math" === r && gt[n] : Boolean(yt[r]) : e.namespaceURI === st ? !(t.namespaceURI === it && !gt[n]) && !(t.namespaceURI === nt && !ht[n]) && !yt[r] && (vt[r] || !wt[r]) : !("application/xhtml+xml" !== ge || !lt[e.namespaceURI]))
              }(e) ? (bt(e), !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !M(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ge && 3 === e.nodeType && (t = e.textContent, t = E(t, we, " "), t = E(t, ye, " "), t = E(t, be, " "), e.textContent !== t && (y(i.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), Mt("afterSanitizeElements", e, null), !1) : (bt(e), !0)
            },
            kt = function(e, t, r) {
              if (Ue && ("id" === t || "name" === t) && (r in a || r in pt)) return !1;
              if (ze && !Ie[t] && M(Se, t));
              else if (Ne && M(Te, t));
              else if (!Oe[t] || Ie[t]) {
                if (!(Ot(e) && (Ae.tagNameCheck instanceof RegExp && M(Ae.tagNameCheck, e) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(e)) && (Ae.attributeNameCheck instanceof RegExp && M(Ae.attributeNameCheck, t) || Ae.attributeNameCheck instanceof Function && Ae.attributeNameCheck(t)) || "is" === t && Ae.allowCustomizedBuiltInElements && (Ae.tagNameCheck instanceof RegExp && M(Ae.tagNameCheck, r) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(r)))) return !1
              } else if (tt[t]);
              else if (M(Me, E(r, xe, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== x(r, "data:") || !Qe[e])
                if (De && !M(Ee, E(r, xe, "")));
                else if (r) return !1;
              return !0
            },
            Ot = function(e) {
              return "annotation-xml" !== e && T(e, Ce)
            },
            Lt = function(t) {
              var r, n, s, a;
              Mt("beforeSanitizeAttributes", t, null);
              var o = t.attributes;
              if (o && !xt(t)) {
                var l = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: Oe
                };
                for (a = o.length; a--;) {
                  var d = r = o[a],
                    c = d.name,
                    u = d.namespaceURI;
                  if (n = "value" === c ? r.value : C(r.value), s = ve(c), l.attrName = s, l.attrValue = n, l.keepAttr = !0, l.forceKeepAttr = void 0, Mt("uponSanitizeAttribute", t, l), n = l.attrValue, !l.forceKeepAttr && (St(c, t), l.keepAttr))
                    if (Re || !M(/\/>/i, n)) {
                      Ge && (n = E(n, we, " "), n = E(n, ye, " "), n = E(n, be, " "));
                      var p = ve(t.nodeName);
                      if (kt(p, s, n))
                        if (!qe || "id" !== s && "name" !== s || (St(c, t), n = "user-content-" + n), Fe && M(/((--!?|])>)|<\/(style|title)/i, n)) St(c, t);
                        else {
                          if (ae && "object" === e(k) && "function" == typeof k.getAttributeType)
                            if (u);
                            else switch (k.getAttributeType(p, s)) {
                              case "TrustedHTML":
                                n = ae.createHTML(n);
                                break;
                              case "TrustedScriptURL":
                                n = ae.createScriptURL(n)
                            }
                          try {
                            u ? t.setAttributeNS(u, c, n) : t.setAttribute(c, n), xt(t) ? bt(t) : w(i.removed)
                          } catch (e) {}
                        }
                    } else St(c, t)
                }
                Mt("afterSanitizeAttributes", t, null)
              }
            },
            At = function e(t) {
              var r, n = Et(t);
              for (Mt("beforeSanitizeShadowDOM", t, null); r = n.nextNode();) Mt("uponSanitizeShadowNode", r, null), _t(r), Lt(r), r.content instanceof o && e(r.content);
              Mt("afterSanitizeShadowDOM", t, null)
            };
          return i.sanitize = function(t) {
            var n, a, l, c, u, p = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((ot = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !Ct(t)) {
              if ("function" != typeof t.toString) throw _("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw _("dirty is not a string, aborting")
            }
            if (!i.isSupported) {
              if ("object" === e(r.toStaticHTML) || "function" == typeof r.toStaticHTML) {
                if ("string" == typeof t) return r.toStaticHTML(t);
                if (Ct(t)) return r.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (je || mt(p), i.removed = [], "string" == typeof t && (Xe = !1), Xe) {
              if (t.nodeName) {
                var f = ve(t.nodeName);
                if (!_e[f] || Pe[f]) throw _("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof d) 1 === (a = (n = Tt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === a.nodeName || "HTML" === a.nodeName ? n = a : n.appendChild(a);
            else {
              if (!He && !Ge && !Be && -1 === t.indexOf("<")) return ae && We ? ae.createHTML(t) : t;
              if (!(n = Tt(t))) return He ? null : We ? oe : ""
            }
            n && $e && bt(n.firstChild);
            for (var m = Et(Xe ? t : n); l = m.nextNode();) 3 === l.nodeType && l === c || (_t(l), Lt(l), l.content instanceof o && At(l.content), c = l);
            if (c = null, Xe) return t;
            if (He) {
              if (Ve)
                for (u = ue.call(n.ownerDocument); n.firstChild;) u.appendChild(n.firstChild);
              else u = n;
              return (Oe.shadowroot || Oe.shadowrootmod) && (u = fe.call(s, u, !0)), u
            }
            var h = Be ? n.outerHTML : n.innerHTML;
            return Be && _e["!doctype"] && n.ownerDocument && n.ownerDocument.doctype && n.ownerDocument.doctype.name && M(Z, n.ownerDocument.doctype.name) && (h = "<!DOCTYPE " + n.ownerDocument.doctype.name + ">\n" + h), Ge && (h = E(h, we, " "), h = E(h, ye, " "), h = E(h, be, " ")), ae && We ? ae.createHTML(h) : h
          }, i.setConfig = function(e) {
            mt(e), je = !0
          }, i.clearConfig = function() {
            ut = null, je = !1
          }, i.isValidAttribute = function(e, t, r) {
            ut || mt({});
            var n = ve(e),
              i = ve(t);
            return kt(n, i, r)
          }, i.addHook = function(e, t) {
            "function" == typeof t && (he[e] = he[e] || [], y(he[e], t))
          }, i.removeHook = function(e) {
            if (he[e]) return w(he[e])
          }, i.removeHooks = function(e) {
            he[e] && (he[e] = [])
          }, i.removeAllHooks = function() {
            he = {}
          }, i
        }()
      }()
    },
    28593: (e, t, r) => {
      var n = r(15036);
      e.exports = function() {
        return n.Date.now()
      }
    },
    31454: (e, t, r) => {
      var n = r(49192);
      e.exports = function(e) {
        return n(e, 5)
      }
    },
    34738: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    42649: e => {
      var t, r, n = e.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
          t = i
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (e) {
          r = s
        }
      }();
      var o, l = [],
        d = !1,
        c = -1;

      function u() {
        d && o && (d = !1, o.length ? l = o.concat(l) : c = -1, l.length && p())
      }

      function p() {
        if (!d) {
          var e = a(u);
          d = !0;
          for (var t = l.length; t;) {
            for (o = l, l = []; ++c < t;) o && o[c].run();
            c = -1, t = l.length
          }
          o = null, d = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function f(e, t) {
        this.fun = e, this.array = t
      }

      function m() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new f(e, t)), 1 !== l.length || d || a(p)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = m, n.addListener = m, n.once = m, n.off = m, n.removeListener = m, n.removeAllListeners = m, n.emit = m, n.prependListener = m, n.prependOnceListener = m, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    },
    51105: (e, t, r) => {
      "use strict";
      new Map
    },
    51364: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          n = void 0,
          i = void 0,
          s = void 0,
          a = 0;

        function o() {
          s = 0, a = +new Date, i = e.apply(r, n), r = null, n = null
        }
        return function() {
          r = this, n = arguments;
          var e = new Date - a;
          return s || (e >= t ? o() : s = setTimeout(o, t - e)), i
        }
      }
    },
    52321: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          n = 0,
          s = !0;

        function a(e) {
          function n() {
            t && t(e, r)
          }
          s ? i.default.nextTick(n) : n()
        }
        e.length > 0 ? e[0](function t(i, s) {
          r.push(s), ++n >= e.length || i ? a(i) : e[n](t)
        }) : a(null), s = !1
      };
      var n, i = (n = r(42649)) && n.__esModule ? n : {
        default: n
      }
    },
    60211: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    60272: (e, t, r) => {
      "use strict";

      function n(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function i(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => r.indexOf(e) < 0).forEach(r => {
          void 0 === e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && i(e[r], t[r])
        })
      }
      r.d(t, {
        a: () => l,
        g: () => a
      });
      const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function a() {
        const e = "undefined" != typeof document ? document : {};
        return i(e, s), e
      }
      const o = {
        document: s,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return i(e, o), e
      }
    },
    64740: (e, t, r) => {
      "use strict";
      t.zb = void 0;
      var n, i = (n = r(2906)) && n.__esModule ? n : {
        default: n
      };
      t.zb = i.default, i.default
    },
    75888: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, n, i, s) {
        for (var a = -1, o = r(t((n - e) / (i || 1)), 0), l = Array(o); o--;) l[s ? o : ++a] = e, e += i;
        return l
      }
    },
    76327: (e, t, r) => {
      "use strict";
      r.d(t, {
        Wx: () => d
      });
      var n = r(71127),
        i = (Object.defineProperty, new Map),
        s = new WeakMap,
        a = 0,
        o = void 0;

      function l(e, t, r = {}, n = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const i = e.getBoundingClientRect();
          return t(n, {
            isIntersecting: n,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: l,
          observer: d,
          elements: c
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
              return `${t}_${"root"===t?(r=e.root,r?(s.has(r)||(a+=1,s.set(r,a.toString())),s.get(r)):"0"):e[t]}`;
              var r
            }).toString()
          }(e);
          let r = i.get(t);
          if (!r) {
            const n = new Map;
            let s;
            const a = new IntersectionObserver(t => {
              t.forEach(t => {
                var r;
                const i = t.isIntersecting && s.some(e => t.intersectionRatio >= e);
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (r = n.get(t.target)) || r.forEach(e => {
                  e(i, t)
                })
              })
            }, e);
            s = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
              id: t,
              observer: a,
              elements: n
            }, i.set(t, r)
          }
          return r
        }(r), u = c.get(e) || [];
        return c.has(e) || c.set(e, u), u.push(t), d.observe(e),
          function() {
            u.splice(u.indexOf(t), 1), 0 === u.length && (c.delete(e), d.unobserve(e)), 0 === c.size && (d.disconnect(), i.delete(l))
          }
      }

      function d({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: i,
        root: s,
        triggerOnce: a,
        skip: o,
        initialInView: d,
        fallbackInView: c,
        onChange: u
      } = {}) {
        var p;
        const [f, m] = n.useState(null), h = n.useRef(u), [g, v] = n.useState({
          inView: !!d,
          entry: void 0
        });
        h.current = u, n.useEffect(() => {
          if (o || !f) return;
          let n;
          return n = l(f, (e, t) => {
            v({
              inView: e,
              entry: t
            }), h.current && h.current(e, t), t.isIntersecting && a && n && (n(), n = void 0)
          }, {
            root: s,
            rootMargin: i,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            n && n()
          }
        }, [Array.isArray(e) ? e.toString() : e, f, s, i, a, o, r, c, t]);
        const w = null == (p = g.entry) ? void 0 : p.target,
          y = n.useRef(void 0);
        f || !w || a || o || y.current === w || (y.current = w, v({
          inView: !!d,
          entry: void 0
        }));
        const b = [m, g.inView, g.entry];
        return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
      }
      n.Component
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    85827: (e, t, r) => {
      "use strict";
      r.d(t, {
        dK: () => s
      }), r(60272);
      var n = r(96501);

      function i(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/()[\]])/g,"\\$1").replace(/ /g,".")}`
      }

      function s(e) {
        let {
          swiper: t,
          extendParams: r,
          on: s,
          emit: a
        } = e;
        const o = "swiper-pagination";
        let l;
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${o}-bullet`,
            bulletActiveClass: `${o}-bullet-active`,
            modifierClass: `${o}-`,
            currentClass: `${o}-current`,
            totalClass: `${o}-total`,
            hiddenClass: `${o}-hidden`,
            progressbarFillClass: `${o}-progressbar-fill`,
            progressbarOppositeClass: `${o}-progressbar-opposite`,
            clickableClass: `${o}-clickable`,
            lockClass: `${o}-lock`,
            horizontalClass: `${o}-horizontal`,
            verticalClass: `${o}-vertical`,
            paginationDisabledClass: `${o}-disabled`
          }
        }), t.pagination = {
          el: null,
          bullets: []
        };
        let d = 0;

        function c() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function u(e, r) {
          const {
            bulletActiveClass: n
          } = t.params.pagination;
          e && (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${n}-${r}`), (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${n}-${r}-${r}`))
        }

        function p(e) {
          const r = e.target.closest(i(t.params.pagination.bulletClass));
          if (!r) return;
          e.preventDefault();
          const s = (0, n.i)(r) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === s) return;
            const e = (a = t.realIndex, o = s, (o %= l = t.slides.length) === 1 + (a %= l) ? "next" : o === a - 1 ? "previous" : void 0);
            "next" === e ? t.slideNext() : "previous" === e ? t.slidePrev() : t.slideToLoop(s)
          } else t.slideTo(s);
          var a, o, l
        }

        function f() {
          const e = t.rtl,
            r = t.params.pagination;
          if (c()) return;
          let s, o, p = t.pagination.el;
          p = (0, n.m)(p);
          const f = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            m = t.params.loop ? Math.ceil(f / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (o = t.previousRealIndex || 0, s = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (s = t.snapIndex, o = t.previousSnapIndex) : (o = t.previousIndex || 0, s = t.activeIndex || 0), "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const i = t.pagination.bullets;
            let a, c, f;
            if (r.dynamicBullets && (l = (0, n.h)(i[0], t.isHorizontal() ? "width" : "height", !0), p.forEach(e => {
                e.style[t.isHorizontal() ? "width" : "height"] = l * (r.dynamicMainBullets + 4) + "px"
              }), r.dynamicMainBullets > 1 && void 0 !== o && (d += s - (o || 0), d > r.dynamicMainBullets - 1 ? d = r.dynamicMainBullets - 1 : d < 0 && (d = 0)), a = Math.max(s - d, 0), c = a + (Math.min(i.length, r.dynamicMainBullets) - 1), f = (c + a) / 2), i.forEach(e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${r.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...t)
              }), p.length > 1) i.forEach(e => {
              const i = (0, n.i)(e);
              i === s ? e.classList.add(...r.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), r.dynamicBullets && (i >= a && i <= c && e.classList.add(...`${r.bulletActiveClass}-main`.split(" ")), i === a && u(e, "prev"), i === c && u(e, "next"))
            });
            else {
              const e = i[s];
              if (e && e.classList.add(...r.bulletActiveClass.split(" ")), t.isElement && i.forEach((e, t) => {
                  e.setAttribute("part", t === s ? "bullet-active" : "bullet")
                }), r.dynamicBullets) {
                const e = i[a],
                  t = i[c];
                for (let e = a; e <= c; e += 1) i[e] && i[e].classList.add(...`${r.bulletActiveClass}-main`.split(" "));
                u(e, "prev"), u(t, "next")
              }
            }
            if (r.dynamicBullets) {
              const n = Math.min(i.length, r.dynamicMainBullets + 4),
                s = (l * n - l) / 2 - f * l,
                a = e ? "right" : "left";
              i.forEach(e => {
                e.style[t.isHorizontal() ? a : "top"] = `${s}px`
              })
            }
          }
          p.forEach((e, o) => {
            if ("fraction" === r.type && (e.querySelectorAll(i(r.currentClass)).forEach(e => {
                e.textContent = r.formatFractionCurrent(s + 1)
              }), e.querySelectorAll(i(r.totalClass)).forEach(e => {
                e.textContent = r.formatFractionTotal(m)
              })), "progressbar" === r.type) {
              let n;
              n = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const a = (s + 1) / m;
              let o = 1,
                l = 1;
              "horizontal" === n ? o = a : l = a, e.querySelectorAll(i(r.progressbarFillClass)).forEach(e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
              })
            }
            "custom" === r.type && r.renderCustom ? ((0, n.s)(e, r.renderCustom(t, s + 1, m)), 0 === o && a("paginationRender", e)) : (0 === o && a("paginationRender", e), a("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass)
          })
        }

        function m() {
          const e = t.params.pagination;
          if (c()) return;
          const r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let s = t.pagination.el;
          s = (0, n.m)(s);
          let o = "";
          if ("bullets" === e.type) {
            let n = t.params.loop ? Math.ceil(r / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && n > r && (n = r);
            for (let r = 0; r < n; r += 1) e.renderBullet ? o += e.renderBullet.call(t, r, e.bulletClass) : o += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (o = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (o = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], s.forEach(r => {
            "custom" !== e.type && (0, n.s)(r, o || ""), "bullets" === e.type && t.pagination.bullets.push(...r.querySelectorAll(i(e.bulletClass)))
          }), "custom" !== e.type && a("paginationRender", s[0])
        }

        function h() {
          t.params.pagination = function(e, t, r, i) {
            return e.params.createElements && Object.keys(i).forEach(s => {
              if (!r[s] && !0 === r.auto) {
                let a = (0, n.e)(e.el, `.${i[s]}`)[0];
                a || (a = (0, n.c)("div", i[s]), a.className = i[s], e.el.append(a)), r[s] = a, t[s] = a
              }
            }), r
          }(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let r;
          "string" == typeof e.el && t.isElement && (r = t.el.querySelector(e.el)), r || "string" != typeof e.el || (r = [...document.querySelectorAll(e.el)]), r || (r = e.el), r && 0 !== r.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(r) && r.length > 1 && (r = [...t.el.querySelectorAll(e.el)], r.length > 1 && (r = r.find(e => (0, n.b)(e, ".swiper")[0] === t.el))), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(t.pagination, {
            el: r
          }), r = (0, n.m)(r), r.forEach(r => {
            "bullets" === e.type && e.clickable && r.classList.add(...(e.clickableClass || "").split(" ")), r.classList.add(e.modifierClass + e.type), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (r.classList.add(`${e.modifierClass}${e.type}-dynamic`), d = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && r.classList.add(e.progressbarOppositeClass), e.clickable && r.addEventListener("click", p), t.enabled || r.classList.add(e.lockClass)
          }))
        }

        function g() {
          const e = t.params.pagination;
          if (c()) return;
          let r = t.pagination.el;
          r && (r = (0, n.m)(r), r.forEach(r => {
            r.classList.remove(e.hiddenClass), r.classList.remove(e.modifierClass + e.type), r.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (r.classList.remove(...(e.clickableClass || "").split(" ")), r.removeEventListener("click", p))
          })), t.pagination.bullets && t.pagination.bullets.forEach(t => t.classList.remove(...e.bulletActiveClass.split(" ")))
        }
        s("changeDirection", () => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: r
          } = t.pagination;
          r = (0, n.m)(r), r.forEach(r => {
            r.classList.remove(e.horizontalClass, e.verticalClass), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          })
        }), s("init", () => {
          !1 === t.params.pagination.enabled ? v() : (h(), m(), f())
        }), s("activeIndexChange", () => {
          void 0 === t.snapIndex && f()
        }), s("snapIndexChange", () => {
          f()
        }), s("snapGridLengthChange", () => {
          m(), f()
        }), s("destroy", () => {
          g()
        }), s("enable disable", () => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach(e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)))
        }), s("lock unlock", () => {
          f()
        }), s("click", (e, r) => {
          const i = r.target,
            s = (0, n.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && s && s.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
            const e = s[0].classList.contains(t.params.pagination.hiddenClass);
            a(!0 === e ? "paginationShow" : "paginationHide"), s.forEach(e => e.classList.toggle(t.params.pagination.hiddenClass))
          }
        });
        const v = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach(e => e.classList.add(t.params.pagination.paginationDisabledClass))), g()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, n.m)(e), e.forEach(e => e.classList.remove(t.params.pagination.paginationDisabledClass))), h(), m(), f()
          },
          disable: v,
          render: m,
          update: f,
          init: h,
          destroy: g
        })
      }
    },
    86601: (e, t, r) => {
      var n = r(56312),
        i = r(78328),
        s = r(21574),
        a = r(56130),
        o = r(81966);
      e.exports = function(e, t, r, l) {
        if (!a(e)) return e;
        for (var d = -1, c = (t = i(t, e)).length, u = c - 1, p = e; null != p && ++d < c;) {
          var f = o(t[d]),
            m = r;
          if ("__proto__" === f || "constructor" === f || "prototype" === f) return e;
          if (d != u) {
            var h = p[f];
            void 0 === (m = l ? l(h, f, p) : void 0) && (m = a(h) ? h : s(t[d + 1]) ? [] : {})
          }
          n(p, f, m), p = p[f]
        }
        return e
      }
    },
    87625: (e, t, r) => {
      var n = r(85531),
        i = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(i, "") : e
      }
    },
    92701: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t(function r(i) {
          for (var s = arguments.length, a = Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) a[o - 1] = arguments[o];
          i ? n(i) : e.apply(this, a) ? t(r) : n(null)
        }) : n(null)
      };
      var r = function() {}
    },
    95187: (e, t, r) => {
      var n = r(22909),
        i = 1 / 0;
      e.exports = function(e) {
        return e ? (e = n(e)) === i || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    96143: (e, t) => {
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
    96501: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => u,
        b: () => S,
        c: () => g,
        e: () => f,
        f: () => a,
        h: () => T,
        i: () => b,
        k: () => o,
        m: () => E,
        n: () => s,
        q: () => y,
        r: () => w,
        s: () => x,
        t: () => v,
        u: () => p,
        v: () => h,
        w: () => m,
        x: () => c,
        y: () => i
      });
      var n = r(60272);

      function i(e) {
        const t = e;
        Object.keys(t).forEach(e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        })
      }

      function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function a() {
        return Date.now()
      }

      function o(e, t) {
        void 0 === t && (t = "x");
        const r = (0, n.a)();
        let i, s, a;
        const o = function(e) {
          const t = (0, n.a)();
          let r;
          return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new r.WebKitCSSMatrix("none" === s ? "" : s)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (s = r.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = r.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function d(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
      }

      function c() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let r = 1; r < arguments.length; r += 1) {
          const n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
          if (null != n && !d(n)) {
            const r = Object.keys(Object(n)).filter(e => t.indexOf(e) < 0);
            for (let t = 0, i = r.length; t < i; t += 1) {
              const i = r[t],
                s = Object.getOwnPropertyDescriptor(n, i);
              void 0 !== s && s.enumerable && (l(e[i]) && l(n[i]) ? n[i].__swiper__ ? e[i] = n[i] : c(e[i], n[i]) : !l(e[i]) && l(n[i]) ? (e[i] = {}, n[i].__swiper__ ? e[i] = n[i] : c(e[i], n[i])) : e[i] = n[i])
            }
          }
        }
        return e
      }

      function u(e, t, r) {
        e.style.setProperty(t, r)
      }

      function p(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: i
        } = e;
        const s = (0, n.a)(),
          a = -t.translate;
        let o, l = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > a ? "next" : "prev",
          u = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          p = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / d, 1), 0),
              n = .5 - Math.cos(e * Math.PI) / 2;
            let c = a + n * (r - a);
            if (u(c, r) && (c = r), t.wrapperEl.scrollTo({
                [i]: c
              }), u(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [i]: c
              })
            }), void s.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = s.requestAnimationFrame(p)
          };
        p()
      }

      function f(e, t) {
        void 0 === t && (t = "");
        const r = (0, n.a)(),
          i = [...e.children];
        return r.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter(e => e.matches(t)) : i
      }

      function m(e, t) {
        const r = (0, n.a)();
        let i = t.contains(e);
        return !i && r.HTMLSlotElement && t instanceof HTMLSlotElement && (i = [...t.assignedElements()].includes(e), i || (i = function(e, t) {
          const r = [t];
          for (; r.length > 0;) {
            const t = r.shift();
            if (e === t) return !0;
            r.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
          }
        }(e, t))), i
      }

      function h(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function g(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter(e => !!e.trim())
        }(t)), r
      }

      function v(e, t) {
        const r = [];
        for (; e.previousElementSibling;) {
          const n = e.previousElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), e = n
        }
        return r
      }

      function w(e, t) {
        const r = [];
        for (; e.nextElementSibling;) {
          const n = e.nextElementSibling;
          t ? n.matches(t) && r.push(n) : r.push(n), e = n
        }
        return r
      }

      function y(e, t) {
        return (0, n.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function b(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function S(e, t) {
        const r = [];
        let n = e.parentElement;
        for (; n;) t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
        return r
      }

      function T(e, t, r) {
        const i = (0, n.a)();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function E(e) {
        return (Array.isArray(e) ? e : [e]).filter(e => !!e)
      }

      function x(e, t) {
        void 0 === t && (t = ""), "undefined" != typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
          createHTML: e => e
        }).createHTML(t) : e.innerHTML = t
      }
    },
    98312: (e, t, r) => {
      var n = r(99335)();
      e.exports = n
    },
    99335: (e, t, r) => {
      var n = r(75888),
        i = r(4661),
        s = r(95187);
      e.exports = function(e) {
        return function(t, r, a) {
          return a && "number" != typeof a && i(t, r, a) && (r = a = void 0), t = s(t), void 0 === r ? (r = t, t = 0) : r = s(r), a = void 0 === a ? t < r ? 1 : -1 : s(a), n(t, r, a, e)
        }
      }
    }
  }
]);