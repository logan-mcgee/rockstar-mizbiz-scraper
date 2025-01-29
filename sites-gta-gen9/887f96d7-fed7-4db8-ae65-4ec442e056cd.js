! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "887f96d7-fed7-4db8-ae65-4ec442e056cd", e._sentryDebugIdIdentifier = "sentry-dbid-887f96d7-fed7-4db8-ae65-4ec442e056cd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2117, 4498], {
    44498: (e, t, n) => {
      n.r(t), n.d(t, {
        InView: () => u,
        defaultFallbackInView: () => c,
        observe: () => h,
        useInView: () => f
      });
      var i = n(62229),
        r = Object.defineProperty,
        s = (e, t, n) => (((e, t, n) => {
          t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : e[t] = n
        })(e, "symbol" != typeof t ? t + "" : t, n), n),
        o = new Map,
        a = new WeakMap,
        d = 0,
        l = void 0;

      function c(e) {
        l = e
      }

      function h(e, t, n = {}, i = l) {
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
          observer: s,
          elements: c
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(n=e.root,n?(a.has(n)||(d+=1,a.set(n,d.toString())),a.get(n)):"0"):e[t]}`;
              var n
            })).toString()
          }(e);
          let n = o.get(t);
          if (!n) {
            const i = new Map;
            let r;
            const s = new IntersectionObserver((t => {
              t.forEach((t => {
                var n;
                const s = t.isIntersecting && r.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = s), null == (n = i.get(t.target)) || n.forEach((e => {
                  e(s, t)
                }))
              }))
            }), e);
            r = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
              id: t,
              observer: s,
              elements: i
            }, o.set(t, n)
          }
          return n
        }(n), h = c.get(e) || [];
        return c.has(e) || c.set(e, h), h.push(t), s.observe(e),
          function() {
            h.splice(h.indexOf(t), 1), 0 === h.length && (c.delete(e), s.unobserve(e)), 0 === c.size && (s.disconnect(), o.delete(r))
          }
      }
      var u = class extends i.Component {
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
            rootMargin: n,
            trackVisibility: i,
            delay: r,
            fallbackInView: s
          } = this.props;
          this._unobserveCb = h(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
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
            root: s,
            rootMargin: o,
            onChange: a,
            skip: d,
            trackVisibility: l,
            delay: c,
            initialInView: h,
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
        root: s,
        triggerOnce: o,
        skip: a,
        initialInView: d,
        fallbackInView: l,
        onChange: c
      } = {}) {
        var u;
        const [f, b] = i.useState(null), p = i.useRef(), [g, y] = i.useState({
          inView: !!d,
          entry: void 0
        });
        p.current = c, i.useEffect((() => {
          if (a || !f) return;
          let i;
          return i = h(f, ((e, t) => {
            y({
              inView: e,
              entry: t
            }), p.current && p.current(e, t), t.isIntersecting && o && i && (i(), i = void 0)
          }), {
            root: s,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t
          }, l), () => {
            i && i()
          }
        }), [Array.isArray(e) ? e.toString() : e, f, s, r, o, a, n, l, t]);
        const v = null == (u = g.entry) ? void 0 : u.target,
          w = i.useRef();
        f || !v || o || a || w.current === v || (w.current = v, y({
          inView: !!d,
          entry: void 0
        }));
        const k = [b, g.inView, g.entry];
        return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
      }
    }
  }
]);