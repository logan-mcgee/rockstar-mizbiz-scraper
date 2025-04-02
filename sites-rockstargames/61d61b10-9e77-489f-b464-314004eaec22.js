! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "61d61b10-9e77-489f-b464-314004eaec22", e._sentryDebugIdIdentifier = "sentry-dbid-61d61b10-9e77-489f-b464-314004eaec22")
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
  [8764, 6383], {
    56383: (e, t, i) => {
      i.r(t), i.d(t, {
        InView: () => u,
        defaultFallbackInView: () => c,
        observe: () => h,
        useInView: () => b
      });
      var n = i(62229),
        r = Object.defineProperty,
        s = (e, t, i) => (((e, t, i) => {
          t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
          }) : e[t] = i
        })(e, "symbol" != typeof t ? t + "" : t, i), i),
        o = new Map,
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
          observer: s,
          elements: c
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(i=e.root,i?(a.has(i)||(l+=1,a.set(i,l.toString())),a.get(i)):"0"):e[t]}`;
              var i
            })).toString()
          }(e);
          let i = o.get(t);
          if (!i) {
            const n = new Map;
            let r;
            const s = new IntersectionObserver((t => {
              t.forEach((t => {
                var i;
                const s = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = s), null == (i = n.get(t.target)) || i.forEach((e => {
                  e(s, t)
                }))
              }))
            }), e);
            r = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
              id: t,
              observer: s,
              elements: n
            }, o.set(t, i)
          }
          return i
        }(i), h = c.get(e) || [];
        return c.has(e) || c.set(e, h), h.push(t), s.observe(e),
          function() {
            h.splice(h.indexOf(t), 1), 0 === h.length && (c.delete(e), s.unobserve(e)), 0 === c.size && (s.disconnect(), o.delete(r))
          }
      }
      var u = class extends n.Component {
        constructor(e) {
          super(e), s(this, "node", null), s(this, "_unobserveCb", null), s(this, "handleNode", (e => {
            this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = e || null, this.observeNode()
          })), s(this, "handleChange", ((e, t) => {
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
        componentDidMount() {
          this.unobserve(), this.observeNode()
        }
        componentDidUpdate(e) {
          e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve()
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: e,
            root: t,
            rootMargin: i,
            trackVisibility: n,
            delay: r,
            fallbackInView: s
          } = this.props;
          this._unobserveCb = h(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: i,
            trackVisibility: n,
            delay: r
          }, s)
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
            root: s,
            rootMargin: o,
            onChange: a,
            skip: l,
            trackVisibility: d,
            delay: c,
            initialInView: h,
            fallbackInView: u,
            ...b
          } = this.props;
          return n.createElement(t || "div", {
            ref: this.handleNode,
            ...b
          }, e)
        }
      };

      function b({
        threshold: e,
        delay: t,
        trackVisibility: i,
        rootMargin: r,
        root: s,
        triggerOnce: o,
        skip: a,
        initialInView: l,
        fallbackInView: d,
        onChange: c
      } = {}) {
        var u;
        const [b, p] = n.useState(null), f = n.useRef(), [g, y] = n.useState({
          inView: !!l,
          entry: void 0
        });
        f.current = c, n.useEffect((() => {
          if (a || !b) return;
          let n;
          return n = h(b, ((e, t) => {
            y({
              inView: e,
              entry: t
            }), f.current && f.current(e, t), t.isIntersecting && o && n && (n(), n = void 0)
          }), {
            root: s,
            rootMargin: r,
            threshold: e,
            trackVisibility: i,
            delay: t
          }, d), () => {
            n && n()
          }
        }), [Array.isArray(e) ? e.toString() : e, b, s, r, o, a, i, d, t]);
        const v = null == (u = g.entry) ? void 0 : u.target,
          w = n.useRef();
        b || !v || o || a || w.current === v || (w.current = v, y({
          inView: !!l,
          entry: void 0
        }));
        const k = [p, g.inView, g.entry];
        return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
      }
    }
  }
]);