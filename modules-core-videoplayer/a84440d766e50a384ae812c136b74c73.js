! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e3ce42d2-d8f4-4141-9354-cc3f0bce661f", e._sentryDebugIdIdentifier = "sentry-dbid-e3ce42d2-d8f4-4141-9354-cc3f0bce661f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [132, 512], {
    41512: (e, t, i) => {
      i.r(t), i.d(t, {
        InView: () => u,
        defaultFallbackInView: () => c,
        observe: () => h,
        useInView: () => f
      });
      var n = i(51664),
        r = Object.defineProperty,
        o = (e, t, i) => (((e, t, i) => {
          t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
          }) : e[t] = i
        })(e, "symbol" != typeof t ? t + "" : t, i), i),
        s = new Map,
        a = new WeakMap,
        l = 0,
        d = void 0;

      function c(e) {
        d = e
      }

      function h(e, t, i = {}, n = d) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const r = e.getBoundingClientRect();
          return t(n, {
            isIntersecting: n,
            target: e,
            intersectionRatio: "number" == typeof i.threshold ? i.threshold : 0,
            time: 0,
            boundingClientRect: r,
            intersectionRect: r,
            rootBounds: r
          }), () => {}
        }
        const {
          id: r,
          observer: o,
          elements: c
        } = function(e) {
          let t = function(e) {
              return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                return `${t}_${"root"===t?(i=e.root,i?(a.has(i)||(l+=1,a.set(i,l.toString())),a.get(i)):"0"):e[t]}`;
                var i
              })).toString()
            }(e),
            i = s.get(t);
          if (!i) {
            const n = new Map;
            let r;
            const o = new IntersectionObserver((t => {
              t.forEach((t => {
                var i;
                const o = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (i = n.get(t.target)) || i.forEach((e => {
                  e(o, t)
                }))
              }))
            }), e);
            r = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
              id: t,
              observer: o,
              elements: n
            }, s.set(t, i)
          }
          return i
        }(i);
        let h = c.get(e) || [];
        return c.has(e) || c.set(e, h), h.push(t), o.observe(e),
          function() {
            h.splice(h.indexOf(t), 1), 0 === h.length && (c.delete(e), o.unobserve(e)), 0 === c.size && (o.disconnect(), s.delete(r))
          }
      }
      var u = class extends n.Component {
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
            rootMargin: i,
            trackVisibility: n,
            delay: r,
            fallbackInView: o
          } = this.props;
          this._unobserveCb = h(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: i,
            trackVisibility: n,
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
              entry: i
            } = this.state;
            return e({
              inView: t,
              entry: i,
              ref: this.handleNode
            })
          }
          const {
            as: t,
            triggerOnce: i,
            threshold: r,
            root: o,
            rootMargin: s,
            onChange: a,
            skip: l,
            trackVisibility: d,
            delay: c,
            initialInView: h,
            fallbackInView: u,
            ...f
          } = this.props;
          return n.createElement(t || "div", {
            ref: this.handleNode,
            ...f
          }, e)
        }
      };

      function f({
        threshold: e,
        delay: t,
        trackVisibility: i,
        rootMargin: r,
        root: o,
        triggerOnce: s,
        skip: a,
        initialInView: l,
        fallbackInView: d,
        onChange: c
      } = {}) {
        var u;
        const [f, b] = n.useState(null), p = n.useRef(), [g, y] = n.useState({
          inView: !!l,
          entry: void 0
        });
        p.current = c, n.useEffect((() => {
          if (a || !f) return;
          let n;
          return n = h(f, ((e, t) => {
            y({
              inView: e,
              entry: t
            }), p.current && p.current(e, t), t.isIntersecting && s && n && (n(), n = void 0)
          }), {
            root: o,
            rootMargin: r,
            threshold: e,
            trackVisibility: i,
            delay: t
          }, d), () => {
            n && n()
          }
        }), [Array.isArray(e) ? e.toString() : e, f, o, r, s, a, i, d, t]);
        const v = null == (u = g.entry) ? void 0 : u.target,
          w = n.useRef();
        f || !v || s || a || w.current === v || (w.current = v, y({
          inView: !!l,
          entry: void 0
        }));
        const k = [b, g.inView, g.entry];
        return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
      }
    }
  }
]);
//# sourceMappingURL=a84440d766e50a384ae812c136b74c73.js.map