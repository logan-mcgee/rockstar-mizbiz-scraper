! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b2ad7bde-d5be-4450-9007-bc3cd74b49a9", e._sentryDebugIdIdentifier = "sentry-dbid-b2ad7bde-d5be-4450-9007-bc3cd74b49a9")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [191, 2572], {
    40191: (e, t, n) => {
      n.r(t), n.d(t, {
        InView: () => u,
        defaultFallbackInView: () => h,
        observe: () => b,
        useInView: () => c
      });
      var i = n(62229),
        o = Object.defineProperty,
        s = (e, t, n) => ((e, t, n) => t in e ? o(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: n
        }) : e[t] = n)(e, "symbol" != typeof t ? t + "" : t, n),
        r = new Map,
        a = new WeakMap,
        l = 0,
        d = void 0;

      function h(e) {
        d = e
      }

      function b(e, t, n = {}, i = d) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const o = e.getBoundingClientRect();
          return t(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: o,
            intersectionRect: o,
            rootBounds: o
          }), () => {}
        }
        const {
          id: o,
          observer: s,
          elements: h
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(n=e.root,n?(a.has(n)||(l+=1,a.set(n,l.toString())),a.get(n)):"0"):e[t]}`;
              var n
            })).toString()
          }(e);
          let n = r.get(t);
          if (!n) {
            const i = new Map;
            let o;
            const s = new IntersectionObserver((t => {
              t.forEach((t => {
                var n;
                const s = t.isIntersecting && o.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = s), null == (n = i.get(t.target)) || n.forEach((e => {
                  e(s, t)
                }))
              }))
            }), e);
            o = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
              id: t,
              observer: s,
              elements: i
            }, r.set(t, n)
          }
          return n
        }(n), b = h.get(e) || [];
        return h.has(e) || h.set(e, b), b.push(t), s.observe(e),
          function() {
            b.splice(b.indexOf(t), 1), 0 === b.length && (h.delete(e), s.unobserve(e)), 0 === h.size && (s.disconnect(), r.delete(o))
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
            delay: o,
            fallbackInView: s
          } = this.props;
          this._unobserveCb = b(this.node, this.handleChange, {
            threshold: e,
            root: t,
            rootMargin: n,
            trackVisibility: i,
            delay: o
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
            threshold: o,
            root: s,
            rootMargin: r,
            onChange: a,
            skip: l,
            trackVisibility: d,
            delay: h,
            initialInView: b,
            fallbackInView: u,
            ...c
          } = this.props;
          return i.createElement(t || "div", {
            ref: this.handleNode,
            ...c
          }, e)
        }
      };

      function c({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: o,
        root: s,
        triggerOnce: r,
        skip: a,
        initialInView: l,
        fallbackInView: d,
        onChange: h
      } = {}) {
        var u;
        const [c, p] = i.useState(null), f = i.useRef(h), [g, y] = i.useState({
          inView: !!l,
          entry: void 0
        });
        f.current = h, i.useEffect((() => {
          if (a || !c) return;
          let i;
          return i = b(c, ((e, t) => {
            y({
              inView: e,
              entry: t
            }), f.current && f.current(e, t), t.isIntersecting && r && i && (i(), i = void 0)
          }), {
            root: s,
            rootMargin: o,
            threshold: e,
            trackVisibility: n,
            delay: t
          }, d), () => {
            i && i()
          }
        }), [Array.isArray(e) ? e.toString() : e, c, s, o, r, a, n, d, t]);
        const v = null == (u = g.entry) ? void 0 : u.target,
          w = i.useRef(void 0);
        c || !v || r || a || w.current === v || (w.current = v, y({
          inView: !!l,
          entry: void 0
        }));
        const M = [p, g.inView, g.entry];
        return M.ref = M[0], M.inView = M[1], M.entry = M[2], M
      }
    }
  }
]);