try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "883ef794-694b-4c81-911e-a2e9eb90f140", e._sentryDebugIdIdentifier = "sentry-dbid-883ef794-694b-4c81-911e-a2e9eb90f140")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [191, 2572], {
    40191: (e, t, i) => {
      i.r(t), i.d(t, {
        InView: () => u,
        defaultFallbackInView: () => h,
        observe: () => c,
        useInView: () => b
      });
      var n = i(62229),
        s = Object.defineProperty,
        r = (e, t, i) => ((e, t, i) => t in e ? s(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: i
        }) : e[t] = i)(e, "symbol" != typeof t ? t + "" : t, i),
        o = new Map,
        a = new WeakMap,
        l = 0,
        d = void 0;

      function h(e) {
        d = e
      }

      function c(e, t, i = {}, n = d) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const s = e.getBoundingClientRect();
          return t(n, {
            isIntersecting: n,
            target: e,
            intersectionRatio: "number" == typeof i.threshold ? i.threshold : 0,
            time: 0,
            boundingClientRect: s,
            intersectionRect: s,
            rootBounds: s
          }), () => {}
        }
        const {
          id: s,
          observer: r,
          elements: h
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
            let s;
            const r = new IntersectionObserver((t => {
              t.forEach((t => {
                var i;
                const r = t.isIntersecting && s.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = r), null == (i = n.get(t.target)) || i.forEach((e => {
                  e(r, t)
                }))
              }))
            }), e);
            s = r.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), i = {
              id: t,
              observer: r,
              elements: n
            }, o.set(t, i)
          }
          return i
        }(i), c = h.get(e) || [];
        return h.has(e) || h.set(e, c), c.push(t), r.observe(e),
          function() {
            c.splice(c.indexOf(t), 1), 0 === c.length && (h.delete(e), r.unobserve(e)), 0 === h.size && (r.disconnect(), o.delete(s))
          }
      }
      var u = class extends n.Component {
        constructor(e) {
          super(e), r(this, "node", null), r(this, "_unobserveCb", null), r(this, "handleNode", (e => {
            this.node && (this.unobserve(), e || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = e || null, this.observeNode()
          })), r(this, "handleChange", ((e, t) => {
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
            delay: s,
            fallbackInView: r
          } = this.props;
          this._unobserveCb = c(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: i,
            trackVisibility: n,
            delay: s
          }, r)
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
            threshold: s,
            root: r,
            rootMargin: o,
            onChange: a,
            skip: l,
            trackVisibility: d,
            delay: h,
            initialInView: c,
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
        rootMargin: s,
        root: r,
        triggerOnce: o,
        skip: a,
        initialInView: l,
        fallbackInView: d,
        onChange: h
      } = {}) {
        var u;
        const [b, f] = n.useState(null), p = n.useRef(h), [g, y] = n.useState({
          inView: !!l,
          entry: void 0
        });
        p.current = h, n.useEffect((() => {
          if (a || !b) return;
          let n;
          return n = c(b, ((e, t) => {
            y({
              inView: e,
              entry: t
            }), p.current && p.current(e, t), t.isIntersecting && o && n && (n(), n = void 0)
          }), {
            root: r,
            rootMargin: s,
            threshold: e,
            trackVisibility: i,
            delay: t
          }, d), () => {
            n && n()
          }
        }), [Array.isArray(e) ? e.toString() : e, b, r, s, o, a, i, d, t]);
        const w = null == (u = g.entry) ? void 0 : u.target,
          v = n.useRef(void 0);
        b || !w || o || a || v.current === w || (v.current = w, y({
          inView: !!l,
          entry: void 0
        }));
        const k = [f, g.inView, g.entry];
        return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
      }
    }
  }
]);