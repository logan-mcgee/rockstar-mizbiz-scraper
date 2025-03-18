! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3b310208-91cf-42e6-b797-2defa6020994", e._sentryDebugIdIdentifier = "sentry-dbid-3b310208-91cf-42e6-b797-2defa6020994")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [5345, 7726], {
    27726: (e, t, a) => {
      a.r(t), a.d(t, {
        Any: () => r.FS,
        BailSignal: () => r.zP,
        Controller: () => r.xI,
        FrameValue: () => r.jY,
        Globals: () => r.RV,
        Interpolation: () => r.lc,
        Spring: () => r.c7,
        SpringContext: () => r.rQ,
        SpringRef: () => r.$9,
        SpringValue: () => r.tQ,
        Trail: () => r.X0,
        Transition: () => r.eB,
        a: () => _,
        animated: () => _,
        config: () => r.$W,
        createInterpolator: () => r.kx,
        easings: () => r.le,
        inferTo: () => r.Yc,
        interpolate: () => r.GW,
        to: () => r.to,
        update: () => r.yo,
        useChain: () => r.n$,
        useInView: () => r.Wx,
        useIsomorphicLayoutEffect: () => r.Es,
        useReducedMotion: () => r.Ib,
        useResize: () => r.st,
        useScroll: () => r.Ll,
        useSpring: () => r.zh,
        useSpringRef: () => r.U2,
        useSpringValue: () => r.Sn,
        useSprings: () => r.mX,
        useTrail: () => r.wR,
        useTransition: () => r.pn
      });
      var r = a(34874),
        o = a(44853),
        s = a(67538),
        n = a(41039),
        i = /^--/;

      function l(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || i.test(e) || p.hasOwnProperty(e) && p[e] ? ("" + t).trim() : t + "px"
      }
      var d = {},
        p = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        u = ["Webkit", "Ms", "Moz", "O"];
      p = Object.keys(p).reduce(((e, t) => (u.forEach((a => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(a, t)] = e[t])), e)), p);
      var c = /^(matrix|translate|scale|rotate|skew)/,
        f = /^(translate)/,
        g = /^(rotate|skew)/,
        b = (e, t) => s.is.num(e) && 0 !== e ? e + t : e,
        m = (e, t) => s.is.arr(e) ? e.every((e => m(e, t))) : s.is.num(e) ? e === t : parseFloat(e) === t,
        h = class extends n.$s {
          constructor({
            x: e,
            y: t,
            z: a,
            ...r
          }) {
            const o = [],
              n = [];
            (e || t || a) && (o.push([e || 0, t || 0, a || 0]), n.push((e => [`translate3d(${e.map((e=>b(e,"px"))).join(",")})`, m(e, 0)]))), (0, s.FI)(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), n.push((e => [e, "" === e]));
              else if (c.test(t)) {
                if (delete r[t], s.is.und(e)) return;
                const a = f.test(t) ? "px" : g.test(t) ? "deg" : "";
                o.push((0, s.$r)(e)), n.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${b(o,a)})`, m(o, 0)] : e => [`${t}(${e.map((e=>b(e,a))).join(",")})`, m(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new y(o, n)), super(r)
          }
        },
        y = class extends s.aq {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return (0, s.__)(this.inputs, ((a, r) => {
              const o = (0, s.oq)(a[0]),
                [n, i] = this.transforms[r](s.is.arr(o) ? o : a.map(s.oq));
              e += " " + n, t = t && i
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && (0, s.__)(this.inputs, (e => (0, s.__)(e, (e => (0, s.at)(e) && (0, s.Ec)(e, this)))))
          }
          observerRemoved(e) {
            0 == e && (0, s.__)(this.inputs, (e => (0, s.__)(e, (e => (0, s.at)(e) && (0, s.DV)(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), (0, s.MI)(this, e)
          }
        };
      r.RV.assign({
        batchedUpdates: o.unstable_batchedUpdates,
        createStringInterpolator: s.Rs,
        colors: s.Tj
      });
      var _ = (0, n.De)(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          const a = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
            {
              className: r,
              style: o,
              children: s,
              scrollTop: n,
              scrollLeft: p,
              viewBox: u,
              ...c
            } = t,
            f = Object.values(c),
            g = Object.keys(c).map((t => a || e.hasAttribute(t) ? t : d[t] || (d[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
          void 0 !== s && (e.textContent = s);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const a = l(t, o[t]);
              i.test(t) ? e.style.setProperty(t, a) : e.style[t] = a
            } g.forEach(((t, a) => {
            e.setAttribute(t, f[a])
          })), void 0 !== r && (e.className = r), void 0 !== n && (e.scrollTop = n), void 0 !== p && (e.scrollLeft = p), void 0 !== u && e.setAttribute("viewBox", u)
        },
        createAnimatedStyle: e => new h(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...a
        }) => a
      }).animated
    }
  }
]);