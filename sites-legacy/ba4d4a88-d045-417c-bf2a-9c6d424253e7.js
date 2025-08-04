try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ba4d4a88-d045-417c-bf2a-9c6d424253e7", e._sentryDebugIdIdentifier = "sentry-dbid-ba4d4a88-d045-417c-bf2a-9c6d424253e7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [844, 8463], {
    40844: (e, t, i) => {
      i.r(t), i.d(t, {
        InView: () => u,
        defaultFallbackInView: () => c,
        observe: () => h,
        useInView: () => f
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
        d = 0,
        l = void 0;

      function c(e) {
        l = e
      }

      function h(e, t, i = {}, n = l) {
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
          elements: c
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(i=e.root,i?(a.has(i)||(d+=1,a.set(i,d.toString())),a.get(i)):"0"):e[t]}`;
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
        }(i), h = c.get(e) || [];
        return c.has(e) || c.set(e, h), h.push(t), r.observe(e),
          function() {
            h.splice(h.indexOf(t), 1), 0 === h.length && (c.delete(e), r.unobserve(e)), 0 === c.size && (r.disconnect(), o.delete(s))
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
          this._unobserveCb = h(this.node, this.handleChange, {
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
            skip: d,
            trackVisibility: l,
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
        rootMargin: s,
        root: r,
        triggerOnce: o,
        skip: a,
        initialInView: d,
        fallbackInView: l,
        onChange: c
      } = {}) {
        var u;
        const [f, p] = n.useState(null), b = n.useRef(c), [g, y] = n.useState({
          inView: !!d,
          entry: void 0
        });
        b.current = c, n.useEffect((() => {
          if (a || !f) return;
          let n;
          return n = h(f, ((e, t) => {
            y({
              inView: e,
              entry: t
            }), b.current && b.current(e, t), t.isIntersecting && o && n && (n(), n = void 0)
          }), {
            root: r,
            rootMargin: s,
            threshold: e,
            trackVisibility: i,
            delay: t
          }, l), () => {
            n && n()
          }
        }), [Array.isArray(e) ? e.toString() : e, f, r, s, o, a, i, l, t]);
        const w = null == (u = g.entry) ? void 0 : u.target,
          v = n.useRef(void 0);
        f || !w || o || a || v.current === w || (v.current = w, y({
          inView: !!d,
          entry: void 0
        }));
        const k = [p, g.inView, g.entry];
        return k.ref = k[0], k.inView = k[1], k.entry = k[2], k
      }
    }
  }
]);