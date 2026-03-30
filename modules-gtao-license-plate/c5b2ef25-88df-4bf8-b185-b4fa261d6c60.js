try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c5b2ef25-88df-4bf8-b185-b4fa261d6c60", e._sentryDebugIdIdentifier = "sentry-dbid-c5b2ef25-88df-4bf8-b185-b4fa261d6c60")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [3751, 6132], {
    53751: (e, t, a) => {
      a.r(t), a.d(t, {
        Any: () => s.FS,
        BailSignal: () => s.zP,
        Controller: () => s.xI,
        FrameValue: () => s.jY,
        Globals: () => s.RV,
        Interpolation: () => s.lc,
        Spring: () => s.c7,
        SpringContext: () => s.rQ,
        SpringRef: () => s.$9,
        SpringValue: () => s.tQ,
        Trail: () => s.X0,
        Transition: () => s.eB,
        a: () => w,
        animated: () => w,
        config: () => s.$W,
        createInterpolator: () => s.kx,
        easings: () => s.le,
        inferTo: () => s.Yc,
        interpolate: () => s.GW,
        to: () => s.to,
        update: () => s.yo,
        useChain: () => s.n$,
        useInView: () => s.Wx,
        useIsomorphicLayoutEffect: () => s.Es,
        useReducedMotion: () => s.Ib,
        useResize: () => s.st,
        useScroll: () => s.Ll,
        useSpring: () => s.zh,
        useSpringRef: () => s.U2,
        useSpringValue: () => s.Sn,
        useSprings: () => s.mX,
        useTrail: () => s.wR,
        useTransition: () => s.pn
      });
      var s = a(84049),
        o = a(18429),
        r = a(50464),
        n = a(31250),
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
      p = Object.keys(p).reduce((e, t) => (u.forEach(a => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(a, t)] = e[t]), e), p);
      var c = /^(matrix|translate|scale|rotate|skew)/,
        f = /^(translate)/,
        b = /^(rotate|skew)/,
        g = (e, t) => r.is.num(e) && 0 !== e ? e + t : e,
        h = (e, t) => r.is.arr(e) ? e.every(e => h(e, t)) : r.is.num(e) ? e === t : parseFloat(e) === t,
        m = class extends n.$s {
          constructor({
            x: e,
            y: t,
            z: a,
            ...s
          }) {
            const o = [],
              n = [];
            (e || t || a) && (o.push([e || 0, t || 0, a || 0]), n.push(e => [`translate3d(${e.map(e=>g(e,"px")).join(",")})`, h(e, 0)])), (0, r.FI)(s, (e, t) => {
              if ("transform" === t) o.push([e || ""]), n.push(e => [e, "" === e]);
              else if (c.test(t)) {
                if (delete s[t], r.is.und(e)) return;
                const a = f.test(t) ? "px" : b.test(t) ? "deg" : "";
                o.push((0, r.$r)(e)), n.push("rotate3d" === t ? ([e, t, s, o]) => [`rotate3d(${e},${t},${s},${g(o,a)})`, h(o, 0)] : e => [`${t}(${e.map(e=>g(e,a)).join(",")})`, h(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), o.length && (s.transform = new y(o, n)), super(s)
          }
        },
        y = class extends r.aq {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return (0, r.__)(this.inputs, (a, s) => {
              const o = (0, r.oq)(a[0]),
                [n, i] = this.transforms[s](r.is.arr(o) ? o : a.map(r.oq));
              e += " " + n, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && (0, r.__)(this.inputs, e => (0, r.__)(e, e => (0, r.at)(e) && (0, r.Ec)(e, this)))
          }
          observerRemoved(e) {
            0 == e && (0, r.__)(this.inputs, e => (0, r.__)(e, e => (0, r.at)(e) && (0, r.DV)(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), (0, r.MI)(this, e)
          }
        };
      s.RV.assign({
        batchedUpdates: o.unstable_batchedUpdates,
        createStringInterpolator: r.Rs,
        colors: r.Tj
      });
      var w = (0, n.De)(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
        applyAnimatedValues: function(e, t) {
          if (!e.nodeType || !e.setAttribute) return !1;
          const a = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
            {
              className: s,
              style: o,
              children: r,
              scrollTop: n,
              scrollLeft: p,
              viewBox: u,
              ...c
            } = t,
            f = Object.values(c),
            b = Object.keys(c).map(t => a || e.hasAttribute(t) ? t : d[t] || (d[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
          void 0 !== r && (e.textContent = r);
          for (const t in o)
            if (o.hasOwnProperty(t)) {
              const a = l(t, o[t]);
              i.test(t) ? e.style.setProperty(t, a) : e.style[t] = a
            } b.forEach((t, a) => {
            e.setAttribute(t, f[a])
          }), void 0 !== s && (e.className = s), void 0 !== n && (e.scrollTop = n), void 0 !== p && (e.scrollLeft = p), void 0 !== u && e.setAttribute("viewBox", u)
        },
        createAnimatedStyle: e => new m(e),
        getComponentProps: ({
          scrollTop: e,
          scrollLeft: t,
          ...a
        }) => a
      }).animated
    }
  }
]);