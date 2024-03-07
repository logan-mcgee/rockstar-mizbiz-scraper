! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9bb515dd-da6e-48f0-b620-a7f93483f156", e._sentryDebugIdIdentifier = "sentry-dbid-9bb515dd-da6e-48f0-b620-a7f93483f156")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "4f9ddcadd6441a318358d91584450ac4e81dfd99",
  packageName: "@rockstargames/modules-core-engagement",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "4f9ddcadd6441a318358d91584450ac4e81dfd99"
}, (self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [912], {
    6532: (e, t, n) => {
      n.r(t), n.d(t, {
        InView: () => u,
        defaultFallbackInView: () => h,
        observe: () => c,
        useInView: () => f
      });
      var i = n(8200),
        r = Object.defineProperty,
        o = (e, t, n) => (((e, t, n) => {
          t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n
        })(e, "symbol" != typeof t ? t + "" : t, n), n),
        s = new Map,
        a = new WeakMap,
        d = 0,
        l = void 0;

      function h(e) {
        l = e
      }

      function c(e, t, n = {}, i = l) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const r = e.getBoundingClientRect();
          return t(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: r,
            intersectionRect: r,
            rootBounds: r
          }), () => {}
        }
        const {
          id: r,
          observer: o,
          elements: h
        } = function(e) {
          let t = function(e) {
              return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                return `${t}_${"root"===t?(n=e.root,n?(a.has(n)||(d+=1,a.set(n,d.toString())),a.get(n)):"0"):e[t]}`;
                var n
              })).toString()
            }(e),
            n = s.get(t);
          if (!n) {
            const i = new Map;
            let r;
            const o = new IntersectionObserver((t => {
              t.forEach((t => {
                var n;
                const o = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (n = i.get(t.target)) || n.forEach((e => {
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
        }(n);
        let c = h.get(e) || [];
        return h.has(e) || h.set(e, c), c.push(t), o.observe(e),
          function() {
            c.splice(c.indexOf(t), 1), 0 === c.length && (h.delete(e), o.unobserve(e)), 0 === h.size && (o.disconnect(), s.delete(r))
          }
      }
      var u = class extends i.Component {
        constructor(e) {
          super(e), o(this, "node", null), o(this, "_unobserveCb", null), o(this, "handleNode", (e => {
            this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = e || null, this.observeNode()
          })), o(this, "handleChange", ((e, t) => {
            e && this.props.triggerOnce && this.unobserve(),
              function(e) {
                return "function" != typeof e.children
              }(this.props) || this.setState({
                inView: e,
                entry: t
              }), this.props.onChange && this.props.onChange(e, t)
          })), this.state = {
            inView: !!e.initialInView,
            entry: void 0
          }
        }
        componentDidUpdate(e) {
          e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve(), this.node = null
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
            delay: r,
            fallbackInView: o
          } = this.props;
          this._unobserveCb = c(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
            delay: r
          }, o)
        }
        unobserve() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
          const {
            children: e
          } = this.props;
          if ("function" == typeof e) {
            const {
              inView: t,
              entry: n
            } = this.state;
            return e({
              inView: t,
              entry: n,
              ref: this.handleNode
            })
          }
          const {
            as: t,
            triggerOnce: n,
            threshold: r,
            root: o,
            rootMargin: s,
            onChange: a,
            skip: d,
            trackVisibility: l,
            delay: h,
            initialInView: c,
            fallbackInView: u,
            ...f
          } = this.props;
          return i.createElement(t || "div", {
            ref: this.handleNode,
            ...f
          }, e)
        }
      };

      function f({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: r,
        root: o,
        triggerOnce: s,
        skip: a,
        initialInView: d,
        fallbackInView: l,
        onChange: h
      } = {}) {
        var u;
        const [f, b] = i.useState(null), p = i.useRef(), [g, y] = i.useState({
          inView: !!d,
          entry: void 0
        });
        p.current = h, i.useEffect((() => {
          if (a || !f) return;
          let i;
          return i = c(f, ((e, t) => {
            y({
              inView: e,
              entry: t
            }), p.current && p.current(e, t), t.isIntersecting && s && i && (i(), i = void 0)
          }), {
            root: o,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t
          }, l), () => {
            i && i()
          }
        }), [Array.isArray(e) ? e.toString() : e, f, o, r, s, a, n, l, t]);
        const w = null == (u = g.entry) ? void 0 : u.target,
          v = i.useRef();
        f || !w || s || a || v.current === w || (v.current = w, y({
          inView: !!d,
          entry: void 0
        }));
        const k = [b, g.inView, g.entry];
        return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
      }
    }
  }
]);
//# sourceMappingURL=2bc59f8865a5b0c53617be852d8b4973.js.map