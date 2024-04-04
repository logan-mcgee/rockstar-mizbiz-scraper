! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c1ce5054-6df7-4f72-a12e-1cafc1e87f2e", e._sentryDebugIdIdentifier = "sentry-dbid-c1ce5054-6df7-4f72-a12e-1cafc1e87f2e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-career-progress-hub",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_career_progress_hub = self.webpackChunk_rockstargames_modules_gtao_career_progress_hub || []).push([
  [140, 760], {
    35140: (e, t, n) => {
      n.r(t), n.d(t, {
        InView: () => h,
        default: () => h,
        defaultFallbackInView: () => c,
        observe: () => u,
        useInView: () => b
      });
      var r = n(51664);

      function i() {
        return i = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, i.apply(this, arguments)
      }

      function o(e, t) {
        return o = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, o(e, t)
      }
      var s = new Map,
        a = new WeakMap,
        l = 0,
        d = void 0;

      function c(e) {
        d = e
      }

      function u(e, t, n, r) {
        if (void 0 === n && (n = {}), void 0 === r && (r = d), void 0 === window.IntersectionObserver && void 0 !== r) {
          var i = e.getBoundingClientRect();
          return t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i
            }),
            function() {}
        }
        var o = function(e) {
            var t = function(e) {
                return Object.keys(e).sort().filter((function(t) {
                  return void 0 !== e[t]
                })).map((function(t) {
                  return t + "_" + ("root" === t ? (n = e.root) ? (a.has(n) || (l += 1, a.set(n, l.toString())), a.get(n)) : "0" : e[t]);
                  var n
                })).toString()
              }(e),
              n = s.get(t);
            if (!n) {
              var r, i = new Map,
                o = new IntersectionObserver((function(t) {
                  t.forEach((function(t) {
                    var n, o = t.isIntersecting && r.some((function(e) {
                      return t.intersectionRatio >= e
                    }));
                    e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((function(e) {
                      e(o, t)
                    }))
                  }))
                }), e);
              r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
                id: t,
                observer: o,
                elements: i
              }, s.set(t, n)
            }
            return n
          }(n),
          c = o.id,
          u = o.observer,
          f = o.elements,
          p = f.get(e) || [];
        return f.has(e) || f.set(e, p), p.push(t), u.observe(e),
          function() {
            p.splice(p.indexOf(t), 1), 0 === p.length && (f.delete(e), u.unobserve(e)), 0 === f.size && (u.disconnect(), s.delete(c))
          }
      }
      var f = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];

      function p(e) {
        return "function" != typeof e.children
      }
      var h = function(e) {
        var t, n;

        function s(t) {
          var n;
          return (n = e.call(this, t) || this).node = null, n._unobserveCb = null, n.handleNode = function(e) {
            n.node && (n.unobserve(), e || n.props.triggerOnce || n.props.skip || n.setState({
              inView: !!n.props.initialInView,
              entry: void 0
            })), n.node = e || null, n.observeNode()
          }, n.handleChange = function(e, t) {
            e && n.props.triggerOnce && n.unobserve(), p(n.props) || n.setState({
              inView: e,
              entry: t
            }), n.props.onChange && n.props.onChange(e, t)
          }, n.state = {
            inView: !!t.initialInView,
            entry: void 0
          }, n
        }
        n = e, (t = s).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n);
        var a = s.prototype;
        return a.componentDidUpdate = function(e) {
          e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }, a.componentWillUnmount = function() {
          this.unobserve(), this.node = null
        }, a.observeNode = function() {
          if (this.node && !this.props.skip) {
            var e = this.props,
              t = e.threshold,
              n = e.root,
              r = e.rootMargin,
              i = e.trackVisibility,
              o = e.delay,
              s = e.fallbackInView;
            this._unobserveCb = u(this.node, this.handleChange, {
              threshold: t,
              root: n,
              rootMargin: r,
              trackVisibility: i,
              delay: o
            }, s)
          }
        }, a.unobserve = function() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }, a.render = function() {
          if (!p(this.props)) {
            var e = this.state,
              t = e.inView,
              n = e.entry;
            return this.props.children({
              inView: t,
              entry: n,
              ref: this.handleNode
            })
          }
          var o = this.props,
            s = o.children,
            a = o.as,
            l = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(o, f);
          return r.createElement(a || "div", i({
            ref: this.handleNode
          }, l), s)
        }, s
      }(r.Component);

      function b(e) {
        var t = void 0 === e ? {} : e,
          n = t.threshold,
          i = t.delay,
          o = t.trackVisibility,
          s = t.rootMargin,
          a = t.root,
          l = t.triggerOnce,
          d = t.skip,
          c = t.initialInView,
          f = t.fallbackInView,
          p = r.useRef(),
          h = r.useState({
            inView: !!c
          }),
          b = h[0],
          g = h[1],
          y = r.useCallback((function(e) {
            void 0 !== p.current && (p.current(), p.current = void 0), d || e && (p.current = u(e, (function(e, t) {
              g({
                inView: e,
                entry: t
              }), t.isIntersecting && l && p.current && (p.current(), p.current = void 0)
            }), {
              root: a,
              rootMargin: s,
              threshold: n,
              trackVisibility: o,
              delay: i
            }, f))
          }), [Array.isArray(n) ? n.toString() : n, a, s, l, d, o, f, i]);
        (0, r.useEffect)((function() {
          p.current || !b.entry || l || d || g({
            inView: !!c
          })
        }));
        var v = [y, b.inView, b.entry];
        return v.ref = v[0], v.inView = v[1], v.entry = v[2], v
      }
      h.displayName = "InView", h.defaultProps = {
        threshold: 0,
        triggerOnce: !1,
        initialInView: !1
      }
    }
  }
]);