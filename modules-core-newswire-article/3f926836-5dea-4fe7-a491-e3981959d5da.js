try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3f926836-5dea-4fe7-a491-e3981959d5da", t._sentryDebugIdIdentifier = "sentry-dbid-3f926836-5dea-4fe7-a491-e3981959d5da")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t.SENTRY_RELEASE = {
    id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
  }
}(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [916], {
    1816: (t, e, i) => {
      "use strict";
      i.d(e, {
        J: () => ot
      });
      var r = i(33307),
        s = i(97992),
        n = i(40296),
        a = i(15582),
        o = i(3052),
        h = i(21763),
        l = i(44645),
        p = i(4175),
        c = i(19203),
        f = i(74496),
        u = i(4826),
        m = i(84273),
        d = i(32576),
        y = i(4208),
        g = i(29525);
      const v = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        b = t => v.has(t),
        x = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        S = t => t === y.ai || t === g.px;
      var P;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(P || (P = {}));
      const E = (t, e) => parseFloat(t.split(", ")[e]),
        C = (t, e) => (i, {
          transform: r
        }) => {
          if ("none" === r || !r) return 0;
          const s = r.match(/^matrix3d\((.+)\)$/);
          if (s) return E(s[1], e); {
            const e = r.match(/^matrix\((.+)\)$/);
            return e ? E(e[1], t) : 0
          }
        },
        A = new Set(["x", "y", "z"]),
        T = n.U.filter((t => !A.has(t))),
        M = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: i = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: i = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, {
            top: e
          }) => parseFloat(e),
          left: (t, {
            left: e
          }) => parseFloat(e),
          bottom: ({
            y: t
          }, {
            top: e
          }) => parseFloat(e) + (t.max - t.min),
          right: ({
            x: t
          }, {
            left: e
          }) => parseFloat(e) + (t.max - t.min),
          x: C(4, 13),
          y: C(5, 14)
        };

      function k(t, e, i, r) {
        return (t => Object.keys(t).some(b))(e) ? ((t, e, i = {}, r = {}) => {
          e = {
            ...e
          }, r = {
            ...r
          };
          const s = Object.keys(e).filter(b);
          let n = [],
            a = !1;
          const o = [];
          if (s.forEach((s => {
              const h = t.getValue(s);
              if (!t.hasValue(s)) return;
              let l = i[s],
                p = (0, m.n)(l);
              const c = e[s];
              let d;
              if ((0, f.p)(c)) {
                const t = c.length,
                  e = null === c[0] ? 1 : 0;
                l = c[e], p = (0, m.n)(l);
                for (let i = e; i < t; i++) d ? (0, u.V)((0, m.n)(c[i]) === d, "All keyframes must be of the same type") : (d = (0, m.n)(c[i]), (0, u.V)(d === p || S(p) && S(d), "Keyframes must be of the same dimension as the current value"))
              } else d = (0, m.n)(c);
              if (p !== d)
                if (S(p) && S(d)) {
                  const t = h.get();
                  "string" == typeof t && h.set(parseFloat(t)), "string" == typeof c ? e[s] = parseFloat(c) : Array.isArray(c) && d === g.px && (e[s] = c.map(parseFloat))
                } else(null == p ? void 0 : p.transform) && (null == d ? void 0 : d.transform) && (0 === l || 0 === c) ? 0 === l ? h.set(d.transform(l)) : e[s] = p.transform(c) : (a || (n = function(t) {
                  const e = [];
                  return T.forEach((i => {
                    const r = t.getValue(i);
                    void 0 !== r && (e.push([i, r.get()]), r.set(i.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), a = !0), o.push(s), r[s] = void 0 !== r[s] ? r[s] : e[s], x(h, c))
            })), o.length) {
            const i = o.indexOf("height") >= 0 ? window.pageYOffset : null,
              s = ((t, e, i) => {
                const r = e.measureViewportBox(),
                  s = e.current,
                  n = getComputedStyle(s),
                  {
                    display: a
                  } = n,
                  o = {};
                "none" === a && e.setStaticValue("display", t.display || "block"), i.forEach((t => {
                  o[t] = M[t](r, n)
                })), e.render();
                const h = e.measureViewportBox();
                return i.forEach((i => {
                  const r = e.getValue(i);
                  x(r, o[i]), t[i] = M[i](h, n)
                })), t
              })(e, t, o);
            return n.length && n.forEach((([e, i]) => {
              t.getValue(e).set(i)
            })), t.render(), d.B && null !== i && window.scrollTo({
              top: i
            }), {
              target: s,
              transitionEnd: r
            }
          }
          return {
            target: e,
            transitionEnd: r
          }
        })(t, e, i, r) : {
          target: e,
          transitionEnd: r
        }
      }
      var w = i(80890),
        _ = i(62229),
        D = i(54012),
        F = i(79242),
        I = i(69569),
        V = i(39318);
      const B = {
          current: null
        },
        R = {
          current: !1
        };
      var L = i(78558),
        O = i(6273),
        z = i(54165),
        N = i(29592),
        G = i(88091),
        j = i(57077),
        H = i(71031),
        q = i(98405);
      const W = Object.keys(D.B),
        $ = W.length,
        U = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class Y {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: i,
          visualState: r
        }, s = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => w.OH.render(this.render, !1, !0);
          const {
            latestValues: n,
            renderState: a
          } = r;
          this.latestValues = n, this.baseTarget = {
            ...n
          }, this.initialValues = e.initial ? {
            ...n
          } : {}, this.renderState = a, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = s, this.isControllingVariants = (0, j.e)(e), this.isVariantNode = (0, j.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: o,
            ...h
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in h) {
            const e = h[t];
            void 0 !== n[t] && (0, N.S)(e) && (e.set(n[t], !1), (0, z.k)(o) && o.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), R.current || function() {
            if (R.current = !0, d.B)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => B.current = t.matches;
                t.addListener(e), e()
              } else B.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || B.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, i;
          null === (t = this.projection) || void 0 === t || t.unmount(), w.eO.update(this.notifyUpdate), w.eO.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (i = this.parent) || void 0 === i || i.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const i = n.f.has(t),
            r = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && w.OH.update(this.notifyUpdate, !1, !0), i && this.projection && (this.projection.isTransformDirty = !0)
            })),
            s = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            r(), s()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, i, r, s, n) {
          const a = [];
          "production" !== V._ && i && e && (0, u.V)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < $; e++) {
            const i = W[e],
              {
                isEnabled: r,
                Component: s
              } = D.B[i];
            r(t) && s && a.push((0, _.createElement)(s, {
              key: i,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && s) {
            this.projection = new s(r, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: i,
              drag: a,
              dragConstraints: o,
              layoutScroll: h
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: i,
              alwaysMeasureLayout: Boolean(a) || o && (0, I.X)(o),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: n,
              layoutScroll: h
            })
          }
          return a
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, F.ge)()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e)
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
          for (let e = 0; e < U.length; e++) {
            const i = U[e];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r))
          }
          this.prevMotionValues = function(t, e, i) {
            const {
              willChange: r
            } = e;
            for (const s in e) {
              const n = e[s],
                a = i[s];
              if ((0, N.S)(n)) t.addValue(s, n), (0, z.k)(r) && r.add(s);
              else if ((0, N.S)(a)) t.addValue(s, (0, O.O)(n, {
                owner: t
              })), (0, z.k)(r) && r.remove(s);
              else if (a !== n)
                if (t.hasValue(s)) {
                  const e = t.getValue(s);
                  !e.hasAnimated && e.set(n)
                } else {
                  const e = t.getStaticValue(s);
                  t.addValue(s, (0, O.O)(void 0 !== e ? e : n))
                }
            }
            for (const r in i) void 0 === e[r] && t.removeValue(r);
            return e
          }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
        }
        getVariantContext(t = !1) {
          var e, i;
          if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t = (null === (i = this.parent) || void 0 === i ? void 0 : i.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const r = {};
          for (let t = 0; t < J; t++) {
            const e = X[t],
              i = this.props[e];
            ((0, H.w)(i) || !1 === i) && (r[e] = i)
          }
          return r
        }
        addVariantChild(t) {
          var e;
          const i = this.getClosestVariantNode();
          if (i) return null === (e = i.variantChildren) || void 0 === e || e.add(t), () => i.variantChildren.delete(t)
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latestValues[t] = e.get(), this.bindToMotionValue(t, e)
        }
        removeValue(t) {
          var e;
          this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let i = this.values.get(t);
          return void 0 === i && void 0 !== e && (i = (0, O.O)(e, {
            owner: this
          }), this.addValue(t, i)), i
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          var e;
          const {
            initial: i
          } = this.props, r = "string" == typeof i || "object" == typeof i ? null === (e = (0, q.a)(this.props, i)) || void 0 === e ? void 0 : e[t] : void 0;
          if (i && void 0 !== r) return r;
          const s = this.getBaseTargetFromProps(this.props, t);
          return void 0 === s || (0, N.S)(s) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : s
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new L.v), this.events[t].add(e)
        }
        notify(t, ...e) {
          var i;
          null === (i = this.events[t]) || void 0 === i || i.notify(...e)
        }
      }
      const X = ["initial", ...G.US],
        J = X.length;
      class K extends Y {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          var i;
          return null === (i = t.style) || void 0 === i ? void 0 : i[e]
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: i
        }) {
          delete e[t], delete i[t]
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...i
        }, {
          transformValues: r
        }, s) {
          let n = (0, p.$z)(i, t || {}, this);
          if (r && (e && (e = r(e)), i && (i = r(i)), n && (n = r(n))), s) {
            (0, p.TM)(this, i, n);
            const t = ((t, e, i, r) => {
              const s = (0, c.d9)(t, e, r);
              return k(t, e = s.target, i, r = s.transitionEnd)
            })(this, i, n, e);
            e = t.transitionEnd, i = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...i
          }
        }
      }
      class Z extends K {
        readValueFromInstance(t, e) {
          if (n.f.has(e)) {
            const t = (0, h.D)(e);
            return t && t.default || 0
          } {
            const r = (i = t, window.getComputedStyle(i)),
              n = ((0, s.Y)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof n ? n.trim() : n
          }
          var i
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return (0, l.m)(t, e)
        }
        build(t, e, i, s) {
          (0, r.O)(t, e, i, s.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return (0, a.x)(t)
        }
        renderInstance(t, e, i, r) {
          (0, o.e)(t, e, i, r)
        }
      }
      var Q = i(81721),
        tt = i(85404),
        et = i(37774),
        it = i(51991),
        rt = i(42967),
        st = i(97641);
      class nt extends K {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var i;
          return n.f.has(e) ? (null === (i = (0, h.D)(e)) || void 0 === i ? void 0 : i.default) || 0 : (e = it.e.has(e) ? e : (0, et.I)(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return (0, F.ge)()
        }
        scrapeMotionValuesFromProps(t) {
          return (0, Q.x)(t)
        }
        build(t, e, i, r) {
          (0, tt.B)(t, e, i, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(t, e, i, r) {
          (0, rt.d)(t, e, i, r)
        }
        mount(t) {
          this.isSVGTag = (0, st.n)(t.tagName), super.mount(t)
        }
      }
      var at = i(19155);
      const ot = (t, e) => (0, at.Q)(t) ? new nt(e, {
        enableHardwareAcceleration: !1
      }) : new Z(e, {
        enableHardwareAcceleration: !0
      })
    },
    3052: (t, e, i) => {
      "use strict";

      function r(t, {
        style: e,
        vars: i
      }, r, s) {
        Object.assign(t.style, e, s && s.getProjectionStyles(r));
        for (const e in i) t.style.setProperty(e, i[e])
      }
      i.d(e, {
        e: () => r
      })
    },
    3902: (t, e, i) => {
      "use strict";
      i.d(e, {
        Q: () => n,
        k: () => s
      });
      var r = i(62229);

      function s(t, e, i, r = {
        passive: !0
      }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i)
      }

      function n(t, e, i, n) {
        (0, r.useEffect)((() => {
          const r = t.current;
          if (i && r) return s(r, e, i, n)
        }), [t, e, i, n])
      }
    },
    4175: (t, e, i) => {
      "use strict";
      i.d(e, {
        TM: () => g,
        $z: () => b,
        Uo: () => y
      });
      const r = t => /^\-?\d*\.?\d+$/.test(t),
        s = t => /^0[^.\s]+$/.test(t);
      var n = i(60885),
        a = i(6273),
        o = i(81982),
        h = i(14680),
        l = i(34219),
        p = i(84273),
        c = i(26161);
      const f = [...p.T, l.y, o.f],
        u = t => f.find((0, c.w)(t));
      var m = i(62369);

      function d(t, e, i) {
        t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, a.O)(i))
      }

      function y(t, e) {
        const i = (0, m.K)(t, e);
        let {
          transitionEnd: r = {},
          transition: s = {},
          ...a
        } = i ? t.makeTargetAnimatable(i, !1) : {};
        a = {
          ...a,
          ...r
        };
        for (const e in a) d(t, e, (0, n.K)(a[e]))
      }

      function g(t, e, i) {
        var n, l;
        const p = Object.keys(e).filter((e => !t.hasValue(e))),
          c = p.length;
        if (c)
          for (let f = 0; f < c; f++) {
            const c = p[f],
              m = e[c];
            let d = null;
            Array.isArray(m) && (d = m[0]), null === d && (d = null !== (l = null !== (n = i[c]) && void 0 !== n ? n : t.readValue(c)) && void 0 !== l ? l : e[c]), null != d && ("string" == typeof d && (r(d) || s(d)) ? d = parseFloat(d) : !u(d) && o.f.test(m) && (d = (0, h.J)(c, m)), t.addValue(c, (0, a.O)(d, {
              owner: t
            })), void 0 === i[c] && (i[c] = d), null !== d && t.setBaseTarget(c, d))
          }
      }

      function v(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function b(t, e, i) {
        var r;
        const s = {};
        for (const n in t) {
          const t = v(n, e);
          s[n] = void 0 !== t ? t : null === (r = i.getValue(n)) || void 0 === r ? void 0 : r.get()
        }
        return s
      }
    },
    4208: (t, e, i) => {
      "use strict";
      i.d(e, {
        X4: () => n,
        ai: () => s,
        hs: () => a
      });
      var r = i(25168);
      const s = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        n = {
          ...s,
          transform: t => (0, r.q)(0, 1, t)
        },
        a = {
          ...s,
          default: 1
        }
    },
    4826: (t, e, i) => {
      "use strict";
      i.d(e, {
        $: () => r,
        V: () => s
      });
      var r = function() {},
        s = function() {}
    },
    6128: (t, e, i) => {
      "use strict";
      i.d(e, {
        Y: () => r
      });
      const r = (0, i(62229).createContext)({
        strict: !1
      })
    },
    6273: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => h
      });
      var r = i(9581),
        s = i(80890),
        n = i(78558),
        a = i(22729);
      class o {
        constructor(t, e = {}) {
          var i;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: i,
              timestamp: n
            } = r.u;
            this.lastUpdated !== n && (this.timeDelta = i, this.lastUpdated = n, s.OH.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => s.OH.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (i = this.current, !isNaN(parseFloat(i))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new n.v), this.events[t].add(e)
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t) {
          this.passiveEffect = t
        }
        set(t, e = !0) {
          e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, i) {
          this.set(e), this.prev = t, this.timeDelta = i
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, a.f)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
          return this.stop(), new Promise((e => {
            this.hasAnimated = !0, this.stopAnimation = t(e), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function h(t, e) {
        return new o(t, e)
      }
    },
    6417: (t, e, i) => {
      "use strict";
      i.d(e, {
        A: () => s,
        f: () => n
      });
      var r = i(62229);
      const s = (0, r.createContext)({});

      function n() {
        return (0, r.useContext)(s).visualElement
      }
    },
    7593: (t, e, i) => {
      "use strict";
      i.d(e, {
        M: () => s
      });
      var r = i(62229);

      function s(t) {
        const e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
    },
    8935: (t, e, i) => {
      "use strict";
      i.d(e, {
        P: () => I
      });
      var r = i(19155),
        s = i(62229),
        n = i(13517),
        a = i(29592),
        o = i(33307);
      const h = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function l(t, e, i) {
        for (const r in e)(0, a.S)(e[r]) || (0, n.z)(r, i) || (t[r] = e[r])
      }

      function p(t, e, i) {
        const r = {},
          n = function(t, e, i) {
            const r = {};
            return l(r, t.style || {}, t), Object.assign(r, function({
              transformTemplate: t
            }, e, i) {
              return (0, s.useMemo)((() => {
                const r = h();
                return (0, o.O)(r, e, {
                  enableHardwareAcceleration: !i
                }, t), Object.assign({}, r.vars, r.style)
              }), [e])
            }(t, e, i)), t.transformValues ? t.transformValues(r) : r
          }(t, e, i);
        return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), r.style = n, r
      }
      const c = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function f(t) {
        return c.has(t)
      }
      let u = t => !f(t);
      try {
        (m = require("@emotion/is-prop-valid").default) && (u = t => t.startsWith("on") ? !f(t) : m(t))
      } catch (t) {}
      var m, d = i(85404);
      const y = () => ({
        ...h(),
        attrs: {}
      });
      var g = i(97641);

      function v(t, e, i, r) {
        const n = (0, s.useMemo)((() => {
          const i = y();
          return (0, d.B)(i, e, {
            enableHardwareAcceleration: !1
          }, (0, g.n)(r), t.transformTemplate), {
            ...i.attrs,
            style: {
              ...i.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          l(e, t.style, t), n.style = {
            ...e,
            ...n.style
          }
        }
        return n
      }

      function b(t = !1) {
        return (e, i, n, a, {
          latestValues: o
        }, h) => {
          const l = ((0, r.Q)(e) ? v : p)(i, o, h, e),
            c = function(t, e, i) {
              const r = {};
              for (const s in t)(u(s) || !0 === i && f(s) || !e && !f(s) || t.draggable && s.startsWith("onDrag")) && (r[s] = t[s]);
              return r
            }(i, "string" == typeof e, t),
            m = {
              ...c,
              ...l,
              ref: a
            };
          return n && (m["data-projection-id"] = n), (0, s.createElement)(e, m)
        }
      }
      var x = i(42967),
        S = i(81721),
        P = i(24866),
        E = i(64143),
        C = i(98405),
        A = i(7593),
        T = i(78466),
        M = i(6417),
        k = i(57077);
      const w = t => (e, i) => {
        const r = (0, s.useContext)(M.A),
          n = (0, s.useContext)(E.t),
          a = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: i
          }, r, s, n) {
            const a = {
              latestValues: _(r, s, n, t),
              renderState: e()
            };
            return i && (a.mount = t => i(r, t, a)), a
          }(t, e, r, n);
        return i ? a() : (0, A.M)(a)
      };

      function _(t, e, i, r) {
        const s = {},
          n = r(t);
        for (const t in n) s[t] = (0, T.u)(n[t]);
        let {
          initial: a,
          animate: o
        } = t;
        const h = (0, k.e)(t),
          l = (0, k.O)(t);
        e && l && !h && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === o && (o = e.animate));
        let p = !!i && !1 === i.initial;
        p = p || !1 === a;
        const c = p ? o : a;
        return c && "boolean" != typeof c && !(0, P.N)(c) && (Array.isArray(c) ? c : [c]).forEach((e => {
          const i = (0, C.a)(t, e);
          if (!i) return;
          const {
            transitionEnd: r,
            transition: n,
            ...a
          } = i;
          for (const t in a) {
            let e = a[t];
            Array.isArray(e) && (e = e[p ? e.length - 1 : 0]), null !== e && (s[t] = e)
          }
          for (const t in r) s[t] = r[t]
        })), s
      }
      const D = {
          useVisualState: w({
            scrapeMotionValuesFromProps: S.x,
            createRenderState: y,
            onMount: (t, e, {
              renderState: i,
              latestValues: r
            }) => {
              try {
                i.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                i.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }(0, d.B)(i, r, {
                enableHardwareAcceleration: !1
              }, (0, g.n)(e.tagName), t.transformTemplate), (0, x.d)(e, i)
            }
          })
        },
        F = {
          useVisualState: w({
            scrapeMotionValuesFromProps: i(15582).x,
            createRenderState: h
          })
        };

      function I(t, {
        forwardMotionProps: e = !1
      }, i, s, n) {
        return {
          ...(0, r.Q)(t) ? D : F,
          preloadedFeatures: i,
          useRender: b(e),
          createVisualElement: s,
          projectionNodeConstructor: n,
          Component: t
        }
      }
    },
    9581: (t, e, i) => {
      "use strict";
      i.d(e, {
        u: () => r
      });
      const r = {
        delta: 0,
        timestamp: 0
      }
    },
    10631: (t, e, i) => {
      "use strict";
      i.d(e, {
        j: () => r
      });
      const r = (t, e, i) => -i * t + i * e + t
    },
    12273: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(t) {
            _useWebWorker = !!t
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(t) {
            locationHref = t
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(t) {
          return document.createElement(t)
        }

        function extendPrototype(t, e) {
          var i, r, s = t.length;
          for (i = 0; i < s; i += 1)
            for (var n in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, n) && (e.prototype[n] = r[n])
        }

        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
          function e() {}
          return e.prototype = t, e
        }
        var audioControllerFactory = function() {
            function t(t) {
              this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(t) {
                  this.audios.push(t)
                },
                pause: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause()
                },
                resume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume()
                },
                setRate: function(t) {
                  var e, i = this.audios.length;
                  for (e = 0; e < i; e += 1) this.audios[e].setRate(t)
                },
                createAudio: function(t) {
                  return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                    src: [t]
                  }) : {
                    isPlaying: !1,
                    play: function() {
                      this.isPlaying = !0
                    },
                    seek: function() {
                      this.isPlaying = !1
                    },
                    playing: function() {},
                    rate: function() {},
                    setVolume: function() {}
                  }
                },
                setAudioFactory: function(t) {
                  this.audioFactory = t
                },
                setVolume: function(t) {
                  this._volume = t, this._updateVolume()
                },
                mute: function() {
                  this._isMuted = !0, this._updateVolume()
                },
                unmute: function() {
                  this._isMuted = !1, this._updateVolume()
                },
                getVolume: function() {
                  return this._volume
                },
                _updateVolume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new t
              }
          }(),
          createTypedArray = function() {
            function t(t, e) {
              var i, r = 0,
                s = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  i = 1;
                  break;
                default:
                  i = 1.1
              }
              for (r = 0; r < e; r += 1) s.push(i);
              return s
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
              return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i)
            } : t
          }();

        function createSizedArray(t) {
          return Array.apply(null, {
            length: t
          })
        }

        function _typeof$6(t) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$6(t)
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};

        function ProjectInterface$1() {
          return {}
        }! function() {
          var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            i = e.length;
          for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, i = createSizedArray(t.length),
              r = t.length;
            for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
            return i
          }
          return Math.abs(t)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(t) {
          _shouldRoundValues = !!t
        }

        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
          t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, i, r) {
          this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, i, r) {
          this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, i) {
          this.type = t, this.firstFrame = e, this.totalFrames = i
        }

        function BMDestroyEvent(t, e) {
          this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
          this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
          this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
          this.type = t, this.nativeError = e
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(t, e, i) {
          var r, s, n, a, o, h, l, p;
          switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (a = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), a % 6) {
            case 0:
              r = i, s = p, n = h;
              break;
            case 1:
              r = l, s = i, n = h;
              break;
            case 2:
              r = h, s = i, n = p;
              break;
            case 3:
              r = h, s = l, n = i;
              break;
            case 4:
              r = p, s = h, n = i;
              break;
            case 5:
              r = i, s = h, n = l
          }
          return [r, s, n]
        }

        function RGBtoHSV(t, e, i) {
          var r, s = Math.max(t, e, i),
            n = Math.min(t, e, i),
            a = s - n,
            o = 0 === s ? 0 : a / s,
            h = s / 255;
          switch (s) {
            case n:
              r = 0;
              break;
            case t:
              r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
              break;
            case e:
              r = i - t + 2 * a, r /= 6 * a;
              break;
            case i:
              r = t - e + 4 * a, r /= 6 * a
          }
          return [r, o, h]
        }

        function addSaturationToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addBrightnessToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
        }

        function addHueToRGB(t, e) {
          var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
        }
        var rgbToHex = function() {
            var t, e, i = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, r) {
              return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
            }
          }(),
          setSubframeEnabled = function(t) {
            subframeEnabled = !!t
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(t) {
            expressionsPlugin = t
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(t) {
            expressionsInterfaces = t
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(t) {
            defaultCurveSegments = t
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(t) {
            idPrefix$1 = t
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(t) {
          return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$5(t)
        }
        var dataManager = function() {
            var t, e, i = 1,
              r = [],
              s = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              n = {
                postMessage: function(t) {
                  s.onmessage({
                    data: t
                  })
                }
              };

            function a() {
              e || (e = function(e) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var i = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                      type: "text/javascript"
                    }),
                    r = URL.createObjectURL(i);
                  return new Worker(r)
                }
                return t = e, s
              }((function(t) {
                if (n.dataManager || (n.dataManager = function() {
                    function t(s, n) {
                      var a, o, h, l, p, c, f, u = s.length;
                      for (o = 0; o < u; o += 1)
                        if ("ks" in (a = s[o]) && !a.completed) {
                          if (a.completed = !0, a.hasMask) {
                            var m = a.masksProperties;
                            for (l = m.length, h = 0; h < l; h += 1)
                              if (m[h].pt.k.i) r(m[h].pt.k);
                              else
                                for (c = m[h].pt.k.length, p = 0; p < c; p += 1) m[h].pt.k[p].s && r(m[h].pt.k[p].s[0]), m[h].pt.k[p].e && r(m[h].pt.k[p].e[0])
                          }
                          0 === a.ty ? (a.layers = e(a.refId, n), t(a.layers, n)) : 4 === a.ty ? i(a.shapes) : 5 === a.ty && (0 === (f = a).t.a.length && f.t.p)
                        }
                    }

                    function e(t, e) {
                      var i = function(t, e) {
                        for (var i = 0, r = e.length; i < r;) {
                          if (e[i].id === t) return e[i];
                          i += 1
                        }
                        return null
                      }(t, e);
                      return i ? i.layers.__used ? JSON.parse(JSON.stringify(i.layers)) : (i.layers.__used = !0, i.layers) : null
                    }

                    function i(t) {
                      var e, s, n;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) r(t[e].ks.k);
                          else
                            for (n = t[e].ks.k.length, s = 0; s < n; s += 1) t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
                      else "gr" === t[e].ty && i(t[e].it)
                    }

                    function r(t) {
                      var e, i = t.i.length;
                      for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function s(t, e) {
                      var i = e ? e.split(".") : [100, 100, 100];
                      return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && null))
                    }
                    var n, a = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, i, r, s = t.length;
                          for (e = 0; e < s; e += 1) 5 === t[e].ty && (void 0, r = (i = t[e]).t.d, i.t.d = {
                            k: [{
                              s: r,
                              t: 0
                            }]
                          })
                        }
                        return function(i) {
                          if (s(t, i.v) && (e(i.layers), i.assets)) {
                            var r, n = i.assets.length;
                            for (r = 0; r < n; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                          }
                        }
                      }(),
                      o = (n = [4, 7, 99], function(t) {
                        if (t.chars && !s(n, t.v)) {
                          var e, r = t.chars.length;
                          for (e = 0; e < r; e += 1) {
                            var a = t.chars[e];
                            a.data && a.data.shapes && (i(a.data.shapes), a.data.ip = 0, a.data.op = 99999, a.data.st = 0, a.data.sr = 1, a.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, t.chars[e].t || (a.data.shapes.push({
                              ty: "no"
                            }), a.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }),
                      h = function() {
                        var t = [5, 7, 15];

                        function e(t) {
                          var e, i, r = t.length;
                          for (e = 0; e < r; e += 1) 5 === t[e].ty && (i = void 0, "number" == typeof(i = t[e].t.p).a && (i.a = {
                            a: 0,
                            k: i.a
                          }), "number" == typeof i.p && (i.p = {
                            a: 0,
                            k: i.p
                          }), "number" == typeof i.r && (i.r = {
                            a: 0,
                            k: i.r
                          }))
                        }
                        return function(i) {
                          if (s(t, i.v) && (e(i.layers), i.assets)) {
                            var r, n = i.assets.length;
                            for (r = 0; r < n; r += 1) i.assets[r].layers && e(i.assets[r].layers)
                          }
                        }
                      }(),
                      l = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var i, r, s, n = t.length;
                          for (i = 0; i < n; i += 1)
                            if ("gr" === t[i].ty) e(t[i].it);
                            else if ("fl" === t[i].ty || "st" === t[i].ty)
                            if (t[i].c.k && t[i].c.k[0].i)
                              for (s = t[i].c.k.length, r = 0; r < s; r += 1) t[i].c.k[r].s && (t[i].c.k[r].s[0] /= 255, t[i].c.k[r].s[1] /= 255, t[i].c.k[r].s[2] /= 255, t[i].c.k[r].s[3] /= 255), t[i].c.k[r].e && (t[i].c.k[r].e[0] /= 255, t[i].c.k[r].e[1] /= 255, t[i].c.k[r].e[2] /= 255, t[i].c.k[r].e[3] /= 255);
                            else t[i].c.k[0] /= 255, t[i].c.k[1] /= 255, t[i].c.k[2] /= 255, t[i].c.k[3] /= 255
                        }

                        function i(t) {
                          var i, r = t.length;
                          for (i = 0; i < r; i += 1) 4 === t[i].ty && e(t[i].shapes)
                        }
                        return function(e) {
                          if (s(t, e.v) && (i(e.layers), e.assets)) {
                            var r, n = e.assets.length;
                            for (r = 0; r < n; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                          }
                        }
                      }(),
                      p = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var i, r, s;
                          for (i = t.length - 1; i >= 0; i -= 1)
                            if ("sh" === t[i].ty)
                              if (t[i].ks.k.i) t[i].ks.k.c = t[i].closed;
                              else
                                for (s = t[i].ks.k.length, r = 0; r < s; r += 1) t[i].ks.k[r].s && (t[i].ks.k[r].s[0].c = t[i].closed), t[i].ks.k[r].e && (t[i].ks.k[r].e[0].c = t[i].closed);
                          else "gr" === t[i].ty && e(t[i].it)
                        }

                        function i(t) {
                          var i, r, s, n, a, o, h = t.length;
                          for (r = 0; r < h; r += 1) {
                            if ((i = t[r]).hasMask) {
                              var l = i.masksProperties;
                              for (n = l.length, s = 0; s < n; s += 1)
                                if (l[s].pt.k.i) l[s].pt.k.c = l[s].cl;
                                else
                                  for (o = l[s].pt.k.length, a = 0; a < o; a += 1) l[s].pt.k[a].s && (l[s].pt.k[a].s[0].c = l[s].cl), l[s].pt.k[a].e && (l[s].pt.k[a].e[0].c = l[s].cl)
                            }
                            4 === i.ty && e(i.shapes)
                          }
                        }
                        return function(e) {
                          if (s(t, e.v) && (i(e.layers), e.assets)) {
                            var r, n = e.assets.length;
                            for (r = 0; r < n; r += 1) e.assets[r].layers && i(e.assets[r].layers)
                          }
                        }
                      }();
                    var c = {
                      completeData: function(i) {
                        i.__complete || (l(i), a(i), o(i), h(i), p(i), t(i.layers, i.assets), function(i, r) {
                          if (i) {
                            var s = 0,
                              n = i.length;
                            for (s = 0; s < n; s += 1) 1 === i[s].t && (i[s].data.layers = e(i[s].data.refId, r), t(i[s].data.layers, r))
                          }
                        }(i.chars, i.assets), i.__complete = !0)
                      }
                    };
                    return c.checkColors = l, c.checkChars = o, c.checkPathProperties = h, c.checkShapes = p, c.completeLayers = t, c
                  }()), n.assetLoader || (n.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, i, r, s) {
                        var n, a = new XMLHttpRequest;
                        try {
                          a.responseType = "json"
                        } catch (t) {}
                        a.onreadystatechange = function() {
                          if (4 === a.readyState)
                            if (200 === a.status) n = t(a), r(n);
                            else try {
                              n = t(a), r(n)
                            } catch (t) {
                              s && s(t)
                            }
                        };
                        try {
                          a.open(["G", "E", "T"].join(""), e, !0)
                        } catch (t) {
                          a.open(["G", "E", "T"].join(""), i + "/" + e, !0)
                        }
                        a.send()
                      }
                    }
                  }()), "loadAnimation" === t.data.type) n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  n.dataManager.completeData(e), n.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  n.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === t.data.type) {
                  var e = t.data.animation;
                  n.dataManager.completeData(e), n.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                } else "loadData" === t.data.type && n.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  n.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  n.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }))
              })), e.onmessage = function(t) {
                var e = t.data,
                  i = e.id,
                  s = r[i];
                r[i] = null, "success" === e.status ? s.onComplete(e.payload) : s.onError && s.onError()
              })
            }

            function o(t, e) {
              var s = "processId_" + (i += 1);
              return r[s] = {
                onComplete: t,
                onError: e
              }, s
            }
            return {
              loadAnimation: function(t, i, r) {
                a();
                var s = o(i, r);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: s
                })
              },
              loadData: function(t, i, r) {
                a();
                var s = o(i, r);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: s
                })
              },
              completeAnimation: function(t, i, r) {
                a();
                var s = o(i, r);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: s
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var t = function() {
              var t = createTag("canvas");
              t.width = 1, t.height = 1;
              var e = t.getContext("2d");
              return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function e() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function i() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r(t, e, i) {
              var r = "";
              if (t.e) r = t.p;
              else if (e) {
                var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), r = e + s
              } else r = i, r += t.u ? t.u : "", r += t.p;
              return r
            }

            function s(t) {
              var e = 0,
                i = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(i)), e += 1
                }.bind(this), 50)
            }

            function n(t) {
              var e = {
                  assetData: t
                },
                i = r(t, this.assetsPath, this.path);
              return dataManager.loadData(i, function(t) {
                e.img = t, this._footageLoaded()
              }.bind(this), function() {
                e.img = {}, this._footageLoaded()
              }.bind(this)), e
            }

            function a() {
              this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = n.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return a.prototype = {
              loadAssets: function(t, e) {
                var i;
                this.imagesLoadedCb = e;
                var r = t.length;
                for (i = 0; i < r; i += 1) t[i].layers || (t[i].t && "seq" !== t[i].t ? 3 === t[i].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[i]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[i]))))
              },
              setAssetsPath: function(t) {
                this.assetsPath = t || ""
              },
              setPath: function(t) {
                this.path = t || ""
              },
              loadedImages: function() {
                return this.totalImages === this.loadedAssets
              },
              loadedFootages: function() {
                return this.totalFootages === this.loadedFootagesCount
              },
              destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0
              },
              getAsset: function(t) {
                for (var e = 0, i = this.images.length; e < i;) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1
                }
                return null
              },
              createImgData: function(e) {
                var i = r(e, this.assetsPath, this.path),
                  s = createTag("img");
                s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                  n.img = t, this._imageLoaded()
                }.bind(this), !1), s.src = i;
                var n = {
                  img: s,
                  assetData: e
                };
                return n
              },
              createImageData: function(e) {
                var i = r(e, this.assetsPath, this.path),
                  s = createNS("image");
                isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1), s.addEventListener("error", function() {
                  n.img = t, this._imageLoaded()
                }.bind(this), !1), s.setAttributeNS("http://www.w3.org/1999/xlink", "href", i), this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                var n = {
                  img: s,
                  assetData: e
                };
                return n
              },
              imageLoaded: e,
              footageLoaded: i,
              setCacheType: function(t, e) {
                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, a
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e)
          },
          addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
              function() {
                this.removeEventListener(t, e)
              }.bind(this)
          },
          removeEventListener: function(t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        };
        var markerParser = function() {
            function t(t) {
              for (var e, i = t.split("\r\n"), r = {}, s = 0, n = 0; n < i.length; n += 1) 2 === (e = i[n].split(":")).length && (r[e[0]] = e[1].trim(), s += 1);
              if (0 === s) throw new Error;
              return r
            }
            return function(e) {
              for (var i = [], r = 0; r < e.length; r += 1) {
                var s = e[r],
                  n = {
                    time: s.tm,
                    duration: s.dr
                  };
                try {
                  n.payload = JSON.parse(e[r].cm)
                } catch (i) {
                  try {
                    n.payload = t(e[r].cm)
                  } catch (t) {
                    n.payload = {
                      name: e[r].cm
                    }
                  }
                }
                i.push(n)
              }
              return i
            }
          }(),
          ProjectInterface = function() {
            function t(t) {
              this.compositions.push(t)
            }
            return function() {
              function e(t) {
                for (var e = 0, i = this.compositions.length; e < i;) {
                  if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                  e += 1
                }
                return null
              }
              return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
          }(),
          renderers = {},
          registerRenderer = function(t, e) {
            renderers[t] = e
          };

        function getRenderer(t) {
          return renderers[t]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var t in renderers)
            if (renderers[t]) return t;
          return ""
        }

        function _typeof$4(t) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$4(t)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? e = t.animType : t.renderer && (e = t.renderer);
          var i = getRenderer(e);
          this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var i = {
              wrapper: t,
              animationData: e
            },
            r = t.attributes;
          i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
          "false" === s ? i.loop = !1 : "true" === s ? i.loop = !0 : "" !== s && (i.loop = parseInt(s, 10));
          var n = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
          i.autoplay = "false" !== n, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, i, r = this.animationData.layers,
            s = r.length,
            n = t.layers,
            a = n.length;
          for (i = 0; i < a; i += 1)
            for (e = 0; e < s;) {
              if (r[e].id === n[i].id) {
                r[e] = n[i];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
          if (this.renderer) try {
            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (t) {
            this.triggerConfigError(t)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(t, e) {
          var i = "number" == typeof t ? t : void 0,
            r = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(i, r)
        }, AnimationItem.prototype.setSubframe = function(t) {
          this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (t) {
            this.triggerRenderFrameError(t)
          }
        }, AnimationItem.prototype.play = function(t) {
          t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
          t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
          t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
          for (var e, i = 0; i < this.markers.length; i += 1)
            if ((e = this.markers[i]).payload && e.payload.name === t) return e;
          return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
          if (!i || this.name === i) {
            var r = Number(t);
            if (isNaN(r)) {
              var s = this.getMarkerData(t);
              s && this.goToAndStop(s.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
          if (!i || this.name === i) {
            var r = Number(t);
            if (isNaN(r)) {
              var s = this.getMarkerData(t);
              s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
            } else this.goToAndStop(r, e, i);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              i = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var i = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var i, r = t.length;
            for (i = 0; i < r; i += 1) this.segments.push(t[i])
          } else this.segments.push(t);
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
          this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
          this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
          this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
          e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
          t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
          t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, i = this.assets.length; e < i;) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, i) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, i)
          } catch (t) {}
        }, AnimationItem.prototype.trigger = function(t) {
          if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
              this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(t, new BMDestroyEvent(t, this));
              break;
            default:
              this.triggerEvent(t)
          }
          "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
            var t = {},
              e = [],
              i = 0,
              r = 0,
              s = 0,
              n = !0,
              a = !1;

            function o(t) {
              for (var i = 0, s = t.target; i < r;) e[i].animation === s && (e.splice(i, 1), i -= 1, r -= 1, s.isPaused || p()), i += 1
            }

            function h(t, i) {
              if (!t) return null;
              for (var s = 0; s < r;) {
                if (e[s].elem === t && null !== e[s].elem) return e[s].animation;
                s += 1
              }
              var n = new AnimationItem;
              return c(n, t), n.setData(t, i), n
            }

            function l() {
              s += 1, m()
            }

            function p() {
              s -= 1
            }

            function c(t, i) {
              t.addEventListener("destroy", o), t.addEventListener("_active", l), t.addEventListener("_idle", p), e.push({
                elem: i,
                animation: t
              }), r += 1
            }

            function f(t) {
              var o, h = t - i;
              for (o = 0; o < r; o += 1) e[o].animation.advanceTime(h);
              i = t, s && !a ? window.requestAnimationFrame(f) : n = !0
            }

            function u(t) {
              i = t, window.requestAnimationFrame(f)
            }

            function m() {
              !a && s && n && (window.requestAnimationFrame(u), n = !1)
            }
            return t.registerAnimation = h, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return c(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, i) {
              var s;
              for (s = 0; s < r; s += 1) e[s].animation.setSpeed(t, i)
            }, t.setDirection = function(t, i) {
              var s;
              for (s = 0; s < r; s += 1) e[s].animation.setDirection(t, i)
            }, t.play = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.play(t)
            }, t.pause = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.pause(t)
            }, t.stop = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.stop(t)
            }, t.togglePause = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, i) {
              var r, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                n = s.length;
              for (r = 0; r < n; r += 1) i && s[r].setAttribute("data-bm-type", i), h(s[r], t);
              if (e && 0 === n) {
                i || (i = "svg");
                var a = document.getElementsByTagName("body")[0];
                a.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", i), a.appendChild(o), h(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < r; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, i, s) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.goToAndStop(t, i, s)
            }, t.destroy = function(t) {
              var i;
              for (i = r - 1; i >= 0; i -= 1) e[i].animation.destroy(t)
            }, t.freeze = function() {
              a = !0
            }, t.unfreeze = function() {
              a = !1, m()
            }, t.setVolume = function(t, i) {
              var s;
              for (s = 0; s < r; s += 1) e[s].animation.setVolume(t, i)
            }, t.mute = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.mute(t)
            }, t.unmute = function(t) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.unmute(t)
            }, t.getRegisteredAnimations = function() {
              var t, i = e.length,
                r = [];
              for (t = 0; t < i; t += 1) r.push(e[t].animation);
              return r
            }, t
          }(),
          BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, i, r, s, n) {
                  var a = n || ("bez_" + t + "_" + i + "_" + r + "_" + s).replace(/\./g, "p");
                  if (e[a]) return e[a];
                  var o = new p([t, i, r, s]);
                  return e[a] = o, o
                }
              },
              e = {},
              i = 11,
              r = 1 / (i - 1),
              s = "function" == typeof Float32Array;

            function n(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function a(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function h(t, e, i) {
              return ((n(e, i) * t + a(e, i)) * t + o(e)) * t
            }

            function l(t, e, i) {
              return 3 * n(e, i) * t * t + 2 * a(e, i) * t + o(e)
            }

            function p(t) {
              this._p = t, this._mSampleValues = s ? new Float32Array(i) : new Array(i), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return p.prototype = {
              get: function(t) {
                var e = this._p[0],
                  i = this._p[1],
                  r = this._p[2],
                  s = this._p[3];
                return this._precomputed || this._precompute(), e === i && r === s ? t : 0 === t ? 0 : 1 === t ? 1 : h(this._getTForX(t), i, s)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  i = this._p[2],
                  r = this._p[3];
                this._precomputed = !0, t === e && i === r || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], s = 0; s < i; ++s) this._mSampleValues[s] = h(s * r, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], s = this._p[2], n = this._mSampleValues, a = 0, o = 1, p = i - 1; o !== p && n[o] <= t; ++o) a += r;
                var c = a + (t - n[--o]) / (n[o + 1] - n[o]) * r,
                  f = l(c, e, s);
                return f >= .001 ? function(t, e, i, r) {
                  for (var s = 0; s < 4; ++s) {
                    var n = l(e, i, r);
                    if (0 === n) return e;
                    e -= (h(e, i, r) - t) / n
                  }
                  return e
                }(t, c, e, s) : 0 === f ? c : function(t, e, i, r, s) {
                  var n, a, o = 0;
                  do {
                    (n = h(a = e + (i - e) / 2, r, s) - t) > 0 ? i = a : e = a
                  } while (Math.abs(n) > 1e-7 && ++o < 10);
                  return a
                }(t, a, a + r, e, s)
              }
            }, t
          }(),
          pooling = {
            double: function(t) {
              return t.concat(createSizedArray(t.length))
            }
          },
          poolFactory = function(t, e, i) {
            var r = 0,
              s = t,
              n = createSizedArray(s);
            return {
              newElement: function() {
                return r ? n[r -= 1] : e()
              },
              release: function(t) {
                r === s && (n = pooling.double(n), s *= 2), i && i(t), n[r] = t, r += 1
              }
            }
          },
          bezierLengthPool = poolFactory(8, (function() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          })),
          segmentsLengthPool = poolFactory(8, (function() {
            return {
              lengths: [],
              totalLength: 0
            }
          }), (function(t) {
            var e, i = t.lengths.length;
            for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
          }));

        function bezFunction() {
          var t = Math;

          function e(t, e, i, r, s, n) {
            var a = t * r + e * s + i * n - s * r - n * t - i * e;
            return a > -.001 && a < .001
          }
          var i = function(t, e, i, r) {
            var s, n, a, o, h, l, p = getDefaultCurveSegments(),
              c = 0,
              f = [],
              u = [],
              m = bezierLengthPool.newElement();
            for (a = i.length, s = 0; s < p; s += 1) {
              for (h = s / (p - 1), l = 0, n = 0; n < a; n += 1) o = bmPow(1 - h, 3) * t[n] + 3 * bmPow(1 - h, 2) * h * i[n] + 3 * (1 - h) * bmPow(h, 2) * r[n] + bmPow(h, 3) * e[n], f[n] = o, null !== u[n] && (l += bmPow(f[n] - u[n], 2)), u[n] = f[n];
              l && (c += l = bmSqrt(l)), m.percents[s] = h, m.lengths[s] = c
            }
            return m.addedLength = c, m
          };

          function r(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function s(t, e) {
            this.partialLength = t, this.point = e
          }
          var n, a = (n = {}, function(t, i, a, o) {
            var h = (t[0] + "_" + t[1] + "_" + i[0] + "_" + i[1] + "_" + a[0] + "_" + a[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!n[h]) {
              var l, p, c, f, u, m, d, y = getDefaultCurveSegments(),
                g = 0,
                v = null;
              2 === t.length && (t[0] !== i[0] || t[1] !== i[1]) && e(t[0], t[1], i[0], i[1], t[0] + a[0], t[1] + a[1]) && e(t[0], t[1], i[0], i[1], i[0] + o[0], i[1] + o[1]) && (y = 2);
              var b = new r(y);
              for (c = a.length, l = 0; l < y; l += 1) {
                for (d = createSizedArray(c), u = l / (y - 1), m = 0, p = 0; p < c; p += 1) f = bmPow(1 - u, 3) * t[p] + 3 * bmPow(1 - u, 2) * u * (t[p] + a[p]) + 3 * (1 - u) * bmPow(u, 2) * (i[p] + o[p]) + bmPow(u, 3) * i[p], d[p] = f, null !== v && (m += bmPow(d[p] - v[p], 2));
                g += m = bmSqrt(m), b.points[l] = new s(m, d), v = d
              }
              b.segmentLength = g, n[h] = b
            }
            return n[h]
          });

          function o(t, e) {
            var i = e.percents,
              r = e.lengths,
              s = i.length,
              n = bmFloor((s - 1) * t),
              a = t * e.addedLength,
              o = 0;
            if (n === s - 1 || 0 === n || a === r[n]) return i[n];
            for (var h = r[n] > a ? -1 : 1, l = !0; l;)
              if (r[n] <= a && r[n + 1] > a ? (o = (a - r[n]) / (r[n + 1] - r[n]), l = !1) : n += h, n < 0 || n >= s - 1) {
                if (n === s - 1) return i[n];
                l = !1
              } return i[n] + (i[n + 1] - i[n]) * o
          }
          var h = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, r = segmentsLengthPool.newElement(),
                s = t.c,
                n = t.v,
                a = t.o,
                o = t.i,
                h = t._length,
                l = r.lengths,
                p = 0;
              for (e = 0; e < h - 1; e += 1) l[e] = i(n[e], n[e + 1], a[e], o[e + 1]), p += l[e].addedLength;
              return s && h && (l[e] = i(n[e], n[0], a[e], o[0]), p += l[e].addedLength), r.totalLength = p, r
            },
            getNewSegment: function(e, i, r, s, n, a, l) {
              n < 0 ? n = 0 : n > 1 && (n = 1);
              var p, c = o(n, l),
                f = o(a = a > 1 ? 1 : a, l),
                u = e.length,
                m = 1 - c,
                d = 1 - f,
                y = m * m * m,
                g = c * m * m * 3,
                v = c * c * m * 3,
                b = c * c * c,
                x = m * m * d,
                S = c * m * d + m * c * d + m * m * f,
                P = c * c * d + m * c * f + c * m * f,
                E = c * c * f,
                C = m * d * d,
                A = c * d * d + m * f * d + m * d * f,
                T = c * f * d + m * f * f + c * d * f,
                M = c * f * f,
                k = d * d * d,
                w = f * d * d + d * f * d + d * d * f,
                _ = f * f * d + d * f * f + f * d * f,
                D = f * f * f;
              for (p = 0; p < u; p += 1) h[4 * p] = t.round(1e3 * (y * e[p] + g * r[p] + v * s[p] + b * i[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (x * e[p] + S * r[p] + P * s[p] + E * i[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (C * e[p] + A * r[p] + T * s[p] + M * i[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (k * e[p] + w * r[p] + _ * s[p] + D * i[p])) / 1e3;
              return h
            },
            getPointInSegment: function(e, i, r, s, n, a) {
              var h = o(n, a),
                l = 1 - h;
              return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * r[0] + (h * h * l + l * h * h + h * l * h) * s[0] + h * h * h * i[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * r[1] + (h * h * l + l * h * h + h * l * h) * s[1] + h * h * h * i[1])) / 1e3]
            },
            buildBezierData: a,
            pointOnLine2D: e,
            pointOnLine3D: function(i, r, s, n, a, o, h, l, p) {
              if (0 === s && 0 === o && 0 === p) return e(i, r, n, a, h, l);
              var c, f = t.sqrt(t.pow(n - i, 2) + t.pow(a - r, 2) + t.pow(o - s, 2)),
                u = t.sqrt(t.pow(h - i, 2) + t.pow(l - r, 2) + t.pow(p - s, 2)),
                m = t.sqrt(t.pow(h - n, 2) + t.pow(l - a, 2) + t.pow(p - o, 2));
              return (c = f > u ? f > m ? f - u - m : m - u - f : m > u ? m - u - f : u - f - m) > -1e-4 && c < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(t, e) {
          var i, r = this.offsetTime;
          "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
          for (var s, n, a, o, h, l, p, c, f, u = e.lastIndex, m = u, d = this.keyframes.length - 1, y = !0; y;) {
            if (s = this.keyframes[m], n = this.keyframes[m + 1], m === d - 1 && t >= n.t - r) {
              s.h && (s = n), u = 0;
              break
            }
            if (n.t - r > t) {
              u = m;
              break
            }
            m < d - 1 ? m += 1 : (u = 0, y = !1)
          }
          a = this.keyframesMetadata[m] || {};
          var g, v = n.t - r,
            b = s.t - r;
          if (s.to) {
            a.bezierData || (a.bezierData = bez.buildBezierData(s.s, n.s || s.e, s.to, s.ti));
            var x = a.bezierData;
            if (t >= v || t < b) {
              var S = t >= v ? x.points.length - 1 : 0;
              for (h = x.points[S].point.length, o = 0; o < h; o += 1) i[o] = x.points[S].point[o]
            } else {
              a.__fnct ? f = a.__fnct : (f = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, a.__fnct = f), l = f((t - b) / (v - b));
              var P, E = x.segmentLength * l,
                C = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, y = !0, p = x.points.length; y;) {
                if (C += x.points[c].partialLength, 0 === E || 0 === l || c === x.points.length - 1) {
                  for (h = x.points[c].point.length, o = 0; o < h; o += 1) i[o] = x.points[c].point[o];
                  break
                }
                if (E >= C && E < C + x.points[c + 1].partialLength) {
                  for (P = (E - C) / x.points[c + 1].partialLength, h = x.points[c].point.length, o = 0; o < h; o += 1) i[o] = x.points[c].point[o] + (x.points[c + 1].point[o] - x.points[c].point[o]) * P;
                  break
                }
                c < p - 1 ? c += 1 : y = !1
              }
              e._lastPoint = c, e._lastAddedLength = C - x.points[c].partialLength, e._lastKeyframeIndex = m
            }
          } else {
            var A, T, M, k, w;
            if (d = s.s.length, g = n.s || s.e, this.sh && 1 !== s.h) t >= v ? (i[0] = g[0], i[1] = g[1], i[2] = g[2]) : t <= b ? (i[0] = s.s[0], i[1] = s.s[1], i[2] = s.s[2]) : quaternionToEuler(i, slerp(createQuaternion(s.s), createQuaternion(g), (t - b) / (v - b)));
            else
              for (m = 0; m < d; m += 1) 1 !== s.h && (t >= v ? l = 1 : t < b ? l = 0 : (s.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[m] ? f = a.__fnct[m] : (A = void 0 === s.o.x[m] ? s.o.x[0] : s.o.x[m], T = void 0 === s.o.y[m] ? s.o.y[0] : s.o.y[m], M = void 0 === s.i.x[m] ? s.i.x[0] : s.i.x[m], k = void 0 === s.i.y[m] ? s.i.y[0] : s.i.y[m], f = BezierFactory.getBezierEasing(A, T, M, k).get, a.__fnct[m] = f)) : a.__fnct ? f = a.__fnct : (A = s.o.x, T = s.o.y, M = s.i.x, k = s.i.y, f = BezierFactory.getBezierEasing(A, T, M, k).get, s.keyframeMetadata = f), l = f((t - b) / (v - b)))), g = n.s || s.e, w = 1 === s.h ? s.s[m] : s.s[m] + (g[m] - s.s[m]) * l, "multidimensional" === this.propType ? i[m] = w : i = w
          }
          return e.lastIndex = u, i
        }

        function slerp(t, e, i) {
          var r, s, n, a, o, h = [],
            l = t[0],
            p = t[1],
            c = t[2],
            f = t[3],
            u = e[0],
            m = e[1],
            d = e[2],
            y = e[3];
          return (s = l * u + p * m + c * d + f * y) < 0 && (s = -s, u = -u, m = -m, d = -d, y = -y), 1 - s > 1e-6 ? (r = Math.acos(s), n = Math.sin(r), a = Math.sin((1 - i) * r) / n, o = Math.sin(i * r) / n) : (a = 1 - i, o = i), h[0] = a * l + o * u, h[1] = a * p + o * m, h[2] = a * c + o * d, h[3] = a * f + o * y, h
        }

        function quaternionToEuler(t, e) {
          var i = e[0],
            r = e[1],
            s = e[2],
            n = e[3],
            a = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s),
            o = Math.asin(2 * i * r + 2 * s * n),
            h = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s);
          t[0] = a / degToRads, t[1] = o / degToRads, t[2] = h / degToRads
        }

        function createQuaternion(t) {
          var e = t[0] * degToRads,
            i = t[1] * degToRads,
            r = t[2] * degToRads,
            s = Math.cos(e / 2),
            n = Math.cos(i / 2),
            a = Math.cos(r / 2),
            o = Math.sin(e / 2),
            h = Math.sin(i / 2),
            l = Math.sin(r / 2);
          return [o * h * a + s * n * l, o * n * a + s * h * l, s * h * a - o * n * l, s * n * a - o * h * l]
        }

        function getValueAtCurrentTime() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var r = this.interpolateValue(t, this._caching);
            this.pv = r
          }
          return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
          var e;
          if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
          else
            for (var i = 0, r = this.v.length; i < r;) e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var t;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length,
                i = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
              this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, i, r) {
          this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, i, r) {
          var s;
          this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var n = e.k.length;
          for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), s = 0; s < n; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, i, r) {
          this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, i, r) {
          var s;
          this.propType = "multidimensional";
          var n, a, o, h, l = e.k.length;
          for (s = 0; s < l - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, a = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === n.length && (n[0] !== a[0] || n[1] !== a[1]) && bez.pointOnLine2D(n[0], n[1], a[0], a[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], a[0], a[1], a[0] + h[0], a[1] + h[1]) || 3 === n.length && (n[0] !== a[0] || n[1] !== a[1] || n[2] !== a[2]) && bez.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], a[0], a[1], a[2], a[0] + h[0], a[1] + h[1], a[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === a[0] && n[1] === a[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === n.length || n[2] === a[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var p = e.k[0].s.length;
          for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", p)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(t, e, i, r, s) {
            var n;
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              if ("number" == typeof e.k[0]) n = new MultiDimensionalProperty(t, e, r, s);
              else switch (i) {
                case 0:
                  n = new KeyframedValueProperty(t, e, r, s);
                  break;
                case 1:
                  n = new KeyframedMultidimensionalProperty(t, e, r, s)
              } else n = new ValueProperty(t, e, r, s);
            return n.effectsSequence.length && s.addDynamicProperty(n), n
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
          this.c = t, this.setLength(e);
          for (var i = 0; i < e;) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t;) this.doubleArrayLength();
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
          var n;
          switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
            case "v":
              n = this.v;
              break;
            case "i":
              n = this.i;
              break;
            case "o":
              n = this.o;
              break;
            default:
              n = []
          }(!n[r] || n[r] && !s) && (n[r] = pointPool.newElement()), n[r][0] = t, n[r][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, n, a, o) {
          this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(s, n, "i", a, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            i = this.o,
            r = this.i,
            s = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), s = 1);
          var n, a = this._length - 1,
            o = this._length;
          for (n = s; n < o; n += 1) t.setTripleAt(e[a][0], e[a][1], r[a][0], r[a][1], i[a][0], i[a][1], n, !1), a -= 1;
          return t
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(t) {
            var e, i = t._length;
            for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
          })), factory.clone = function(t) {
            var e, i = factory.newElement(),
              r = void 0 === t._length ? t.v.length : t._length;
            for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return i
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var t;
          for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(t) {
              var e, i = t._length;
              for (e = 0; e < i; e += 1) shapePool.release(t.shapes[e]);
              t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var t = -999999;

            function e(t, e, i) {
              var r, s, n, a, o, h, l, p, c, f = i.lastIndex,
                u = this.keyframes;
              if (t < u[0].t - this.offsetTime) r = u[0].s[0], n = !0, f = 0;
              else if (t >= u[u.length - 1].t - this.offsetTime) r = u[u.length - 1].s ? u[u.length - 1].s[0] : u[u.length - 2].e[0], n = !0;
              else {
                for (var m, d, y, g = f, v = u.length - 1, b = !0; b && (m = u[g], !((d = u[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : b = !1;
                if (y = this.keyframesMetadata[g] || {}, f = g, !(n = 1 === m.h)) {
                  if (t >= d.t - this.offsetTime) p = 1;
                  else if (t < m.t - this.offsetTime) p = 0;
                  else {
                    var x;
                    y.__fnct ? x = y.__fnct : (x = BezierFactory.getBezierEasing(m.o.x, m.o.y, m.i.x, m.i.y).get, y.__fnct = x), p = x((t - (m.t - this.offsetTime)) / (d.t - this.offsetTime - (m.t - this.offsetTime)))
                  }
                  s = d.s ? d.s[0] : m.e[0]
                }
                r = m.s[0]
              }
              for (h = e._length, l = r.i[0].length, i.lastIndex = f, a = 0; a < h; a += 1)
                for (o = 0; o < l; o += 1) c = n ? r.i[a][o] : r.i[a][o] + (s.i[a][o] - r.i[a][o]) * p, e.i[a][o] = c, c = n ? r.o[a][o] : r.o[a][o] + (s.o[a][o] - r.o[a][o]) * p, e.o[a][o] = c, c = n ? r.v[a][o] : r.v[a][o] + (s.v[a][o] - r.v[a][o]) * p, e.v[a][o] = c
            }

            function i() {
              var e = this.comp.renderedFrame - this.offsetTime,
                i = this.keyframes[0].t - this.offsetTime,
                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                s = this._caching.lastFrame;
              return s !== t && (s < i && e < i || s > r && e > r) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function r() {
              this.paths = this.localShapeCollection
            }

            function s(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var i, r = t._length;
                for (i = 0; i < r; i += 1)
                  if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
                return !0
              })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function n() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var i = this.effectsSequence.length;
                    for (e = 0; e < i; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function a(t, e, i) {
              this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
              var s = 3 === i ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function h(e, s, n) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === n ? s.pt.k : s.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var a = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [i.bind(this)]
            }
            a.prototype.interpolateShape = e, a.prototype.getValue = n, a.prototype.setVValue = s, a.prototype.addEffect = o, h.prototype.getValue = n, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = o;
            var l = function() {
                var t = roundCorner;

                function e(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return e.prototype = {
                  reset: r,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var e = this.p.v[0],
                      i = this.p.v[1],
                      r = this.s.v[0] / 2,
                      s = this.s.v[1] / 2,
                      n = 3 !== this.d,
                      a = this.v;
                    a.v[0][0] = e, a.v[0][1] = i - s, a.v[1][0] = n ? e + r : e - r, a.v[1][1] = i, a.v[2][0] = e, a.v[2][1] = i + s, a.v[3][0] = n ? e - r : e + r, a.v[3][1] = i, a.i[0][0] = n ? e - r * t : e + r * t, a.i[0][1] = i - s, a.i[1][0] = n ? e + r : e - r, a.i[1][1] = i - s * t, a.i[2][0] = n ? e + r * t : e - r * t, a.i[2][1] = i + s, a.i[3][0] = n ? e - r : e + r, a.i[3][1] = i + s * t, a.o[0][0] = n ? e + r * t : e - r * t, a.o[0][1] = i - s, a.o[1][0] = n ? e + r : e - r, a.o[1][1] = i + s * t, a.o[2][0] = n ? e - r * t : e + r * t, a.o[2][1] = i + s, a.o[3][0] = n ? e - r : e + r, a.o[3][1] = i - s * t
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              p = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return t.prototype = {
                  reset: r,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var t, e, i, r, s = 2 * Math.floor(this.pt.v),
                      n = 2 * Math.PI / s,
                      a = !0,
                      o = this.or.v,
                      h = this.ir.v,
                      l = this.os.v,
                      p = this.is.v,
                      c = 2 * Math.PI * o / (2 * s),
                      f = 2 * Math.PI * h / (2 * s),
                      u = -Math.PI / 2;
                    u += this.r.v;
                    var m = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < s; t += 1) {
                      i = a ? l : p, r = a ? c : f;
                      var d = (e = a ? o : h) * Math.cos(u),
                        y = e * Math.sin(u),
                        g = 0 === d && 0 === y ? 0 : y / Math.sqrt(d * d + y * y),
                        v = 0 === d && 0 === y ? 0 : -d / Math.sqrt(d * d + y * y);
                      d += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(d, y, d - g * r * i * m, y - v * r * i * m, d + g * r * i * m, y + v * r * i * m, t, !0), a = !a, u += n * m
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      i = 2 * Math.PI / e,
                      r = this.or.v,
                      s = this.os.v,
                      n = 2 * Math.PI * r / (4 * e),
                      a = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var h = r * Math.cos(a),
                        l = r * Math.sin(a),
                        p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                        c = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                      h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * n * s * o, l - c * n * s * o, h + p * n * s * o, l + c * n * s * o, t, !0), a += i * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              c = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return t.prototype = {
                  convertRectToPath: function() {
                    var t = this.p.v[0],
                      e = this.p.v[1],
                      i = this.s.v[0] / 2,
                      r = this.s.v[1] / 2,
                      s = bmMin(i, r, this.r.v),
                      n = s * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + n, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - n, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - n, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + n, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + n, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + n, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - n, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + n, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + n, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + n, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - n, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + n, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + n, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + n, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - n, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - n, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + n, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - n, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - n, e + r, t + i, e + r, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: r
                }, extendPrototype([DynamicPropertyContainer], t), t
              }();
            return {
              getShapeProp: function(t, e, i) {
                var r;
                return 3 === i || 4 === i ? r = (3 === i ? e.pt : e.ks).k.length ? new h(t, e, i) : new a(t, e, i) : 5 === i ? r = new c(t, e) : 6 === i ? r = new l(t, e) : 7 === i && (r = new p(t, e)), r.k && t.addDynamicProperty(r), r
              },
              getConstructorFunction: function() {
                return a
              },
              getKeyframedConstructorFunction: function() {
                return h
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              i = Math.tan,
              r = Math.round;

            function s() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function n(i) {
              if (0 === i) return this;
              var r = t(i),
                s = e(i);
              return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function a(i) {
              if (0 === i) return this;
              var r = t(i),
                s = e(i);
              return this._t(1, 0, 0, 0, 0, r, -s, 0, 0, s, r, 0, 0, 0, 0, 1)
            }

            function o(i) {
              if (0 === i) return this;
              var r = t(i),
                s = e(i);
              return this._t(r, 0, s, 0, 0, 1, 0, 0, -s, 0, r, 0, 0, 0, 0, 1)
            }

            function h(i) {
              if (0 === i) return this;
              var r = t(i),
                s = e(i);
              return this._t(r, -s, 0, 0, s, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function l(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function p(t, e) {
              return this.shear(i(t), i(e))
            }

            function c(r, s) {
              var n = t(s),
                a = e(s);
              return this._t(n, a, 0, 0, -a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(n, -a, 0, 0, a, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function f(t, e, i) {
              return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
            }

            function u(t, e, i, r, s, n, a, o, h, l, p, c, f, u, m, d) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = n, this.props[6] = a, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = c, this.props[12] = f, this.props[13] = u, this.props[14] = m, this.props[15] = d, this
            }

            function m(t, e, i) {
              return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
            }

            function d(t, e, i, r, s, n, a, o, h, l, p, c, f, u, m, d) {
              var y = this.props;
              if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === n && 0 === a && 0 === o && 0 === h && 0 === l && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * n + y[15] * u, y[14] = y[14] * p + y[15] * m, y[15] *= d, this._identityCalculated = !1, this;
              var g = y[0],
                v = y[1],
                b = y[2],
                x = y[3],
                S = y[4],
                P = y[5],
                E = y[6],
                C = y[7],
                A = y[8],
                T = y[9],
                M = y[10],
                k = y[11],
                w = y[12],
                _ = y[13],
                D = y[14],
                F = y[15];
              return y[0] = g * t + v * s + b * h + x * f, y[1] = g * e + v * n + b * l + x * u, y[2] = g * i + v * a + b * p + x * m, y[3] = g * r + v * o + b * c + x * d, y[4] = S * t + P * s + E * h + C * f, y[5] = S * e + P * n + E * l + C * u, y[6] = S * i + P * a + E * p + C * m, y[7] = S * r + P * o + E * c + C * d, y[8] = A * t + T * s + M * h + k * f, y[9] = A * e + T * n + M * l + k * u, y[10] = A * i + T * a + M * p + k * m, y[11] = A * r + T * o + M * c + k * d, y[12] = w * t + _ * s + D * h + F * f, y[13] = w * e + _ * n + D * l + F * u, y[14] = w * i + _ * a + D * p + F * m, y[15] = w * r + _ * o + D * c + F * d, this._identityCalculated = !1, this
            }

            function y(t) {
              var e = t.props;
              return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            }

            function g() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function v(t) {
              for (var e = 0; e < 16;) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1
              }
              return !0
            }

            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t
            }

            function x(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function S(t, e, i) {
              return {
                x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
              }
            }

            function P(t, e, i) {
              return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
            }

            function E(t, e, i) {
              return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
            }

            function C(t, e, i) {
              return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
            }

            function A() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                i = -this.props[1] / t,
                r = -this.props[4] / t,
                s = this.props[0] / t,
                n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = i, o.props[4] = r, o.props[5] = s, o.props[12] = n, o.props[13] = a, o
            }

            function T(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function M(t) {
              var e, i = t.length,
                r = [];
              for (e = 0; e < i; e += 1) r[e] = T(t[e]);
              return r
            }

            function k(t, e, i) {
              var r = createTypedArray("float32", 6);
              if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = i[0], r[5] = i[1];
              else {
                var s = this.props[0],
                  n = this.props[1],
                  a = this.props[4],
                  o = this.props[5],
                  h = this.props[12],
                  l = this.props[13];
                r[0] = t[0] * s + t[1] * a + h, r[1] = t[0] * n + t[1] * o + l, r[2] = e[0] * s + e[1] * a + h, r[3] = e[0] * n + e[1] * o + l, r[4] = i[0] * s + i[1] * a + h, r[5] = i[0] * n + i[1] * o + l
              }
              return r
            }

            function w(t, e, i) {
              return this.isIdentity() ? [t, e, i] : [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
            }

            function _(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var i = this.props;
              return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100
            }

            function D() {
              for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) i += r(1e4 * e[t]) / 1e4, i += 15 === t ? ")" : ",", t += 1;
              return i
            }

            function F(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
            }

            function I() {
              var t = this.props;
              return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")"
            }
            return function() {
              this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = c, this.shear = l, this.scale = f, this.setTransform = u, this.translate = m, this.transform = d, this.multiply = y, this.applyToPoint = S, this.applyToX = P, this.applyToY = E, this.applyToZ = C, this.applyToPointArray = w, this.applyToTriplePoints = k, this.applyToPointStringified = _, this.toCSS = D, this.to2dCSS = I, this.clone = b, this.cloneFromProps = x, this.equals = v, this.inversePoints = M, this.inversePoint = T, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(t) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$3(t)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(t) {
          setLocationHref(t)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
          setSubframeEnabled(t)
        }

        function setPrefix(t) {
          setIdPrefix(t)
        }

        function loadAnimation(t) {
          return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
          if ("string" == typeof t) switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null
          }
        }

        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
          for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
            var r = e[i].split("=");
            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
          }
          return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
              src: ""
            };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && __webpack_require__.amdO
        } catch (t) {}
        var ShapeModifiers = function() {
          var t = {},
            e = {};
          return t.registerModifier = function(t, i) {
            e[t] || (e[t] = i)
          }, t.getModifier = function(t, i, r) {
            return new e[t](i, r)
          }, t
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
          t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
          var n = [];
          e <= 1 ? n.push({
            s: t,
            e
          }) : t >= 1 ? n.push({
            s: t - 1,
            e: e - 1
          }) : (n.push({
            s: t,
            e: 1
          }), n.push({
            s: 0,
            e: e - 1
          }));
          var a, o, h = [],
            l = n.length;
          for (a = 0; a < l; a += 1) {
            var p, c;
            (o = n[a]).e * s < r || o.s * s > r + i || (p = o.s * s <= r ? 0 : (o.s * s - r) / i, c = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, c]))
          }
          return h.length || h.push([0, 0]), h
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, i, r, s;
          if (this._mdf || t) {
            var n = this.o.v % 360 / 360;
            if (n < 0 && (n += 1), (e = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) > (i = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n)) {
              var a = e;
              e = i, i = a
            }
            e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i
          } else e = this.sValue, i = this.eValue;
          var o, h, l, p, c, f = this.shapes.length,
            u = 0;
          if (i === e)
            for (s = 0; s < f; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
          else if (1 === i && 0 === e || 0 === i && 1 === e) {
            if (this._mdf)
              for (s = 0; s < f; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = !0
          } else {
            var m, d, y = [];
            for (s = 0; s < f; s += 1)
              if ((m = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (h = (r = m.shape.paths)._length, c = 0, !m.shape._mdf && m.pathsData.length) c = m.totalShapeLength;
                else {
                  for (l = this.releasePathsData(m.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(r.shapes[o]), l.push(p), c += p.totalLength;
                  m.totalShapeLength = c, m.pathsData = l
                }
                u += c, m.shape._mdf = !0
              } else m.shape.paths = m.localShapeCollection;
            var g, v = e,
              b = i,
              x = 0;
            for (s = f - 1; s >= 0; s -= 1)
              if ((m = this.shapes[s]).shape._mdf) {
                for ((d = m.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, i, m.totalShapeLength, x, u), x += m.totalShapeLength) : g = [
                    [v, b]
                  ], h = g.length, o = 0; o < h; o += 1) {
                  v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                    s: m.totalShapeLength * v,
                    e: m.totalShapeLength * b
                  }) : v >= 1 ? y.push({
                    s: m.totalShapeLength * (v - 1),
                    e: m.totalShapeLength * (b - 1)
                  }) : (y.push({
                    s: m.totalShapeLength * v,
                    e: m.totalShapeLength
                  }), y.push({
                    s: 0,
                    e: m.totalShapeLength * (b - 1)
                  }));
                  var S = this.addShapes(m, y[0]);
                  if (y[0].s !== y[0].e) {
                    if (y.length > 1)
                      if (m.shape.paths.shapes[m.shape.paths._length - 1].c) {
                        var P = S.pop();
                        this.addPaths(S, d), S = this.addShapes(m, y[1], P)
                      } else this.addPaths(S, d), S = this.addShapes(m, y[1]);
                    this.addPaths(S, d)
                  }
                }
                m.shape.paths = d
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1) e.addShape(t[i])
        }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, n, a) {
          s.setXYAt(e[0], e[1], "o", n), s.setXYAt(i[0], i[1], "i", n + 1), a && s.setXYAt(t[0], t[1], "v", n), s.setXYAt(r[0], r[1], "v", n + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
          e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, i) {
          var r, s, n, a, o, h, l, p, c = t.pathsData,
            f = t.shape.paths.shapes,
            u = t.shape.paths._length,
            m = 0,
            d = [],
            y = !0;
          for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), d.push(i), r = 0; r < u; r += 1) {
            for (h = c[r].lengths, i.c = f[r].c, n = f[r].c ? h.length : h.length + 1, s = 1; s < n; s += 1)
              if (m + (a = h[s - 1]).addedLength < e.s) m += a.addedLength, i.c = !1;
              else {
                if (m > e.e) {
                  i.c = !1;
                  break
                }
                e.s <= m && e.e >= m + a.addedLength ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[s], f[r].v[s], i, o, y), y = !1) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[s], f[r].o[s - 1], f[r].i[s], (e.s - m) / a.addedLength, (e.e - m) / a.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1), m += a.addedLength, o += 1
              } if (f[r].c && h.length) {
              if (a = h[s - 1], m <= e.e) {
                var g = h[s - 1].addedLength;
                e.s <= m && e.e >= m + g ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[0], f[r].v[0], i, o, y), y = !1) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[0], f[r].o[s - 1], f[r].i[0], (e.s - m) / g, (e.e - m) / g, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = !1, i.c = !1)
              } else i.c = !1;
              m += a.addedLength, o += 1
            }
            if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), m > e.e) break;
            r < u - 1 && (i = shapePool.newElement(), y = !0, d.push(i), o = 0)
          }
          return d
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var i = e / 100,
            r = [0, 0],
            s = t._length,
            n = 0;
          for (n = 0; n < s; n += 1) r[0] += t.v[n][0], r[1] += t.v[n][1];
          r[0] /= s, r[1] /= s;
          var a, o, h, l, p, c, f = shapePool.newElement();
          for (f.c = t.c, n = 0; n < s; n += 1) a = t.v[n][0] + (r[0] - t.v[n][0]) * i, o = t.v[n][1] + (r[1] - t.v[n][1]) * i, h = t.o[n][0] + (r[0] - t.o[n][0]) * -i, l = t.o[n][1] + (r[1] - t.o[n][1]) * -i, p = t.i[n][0] + (r[0] - t.i[n][0]) * -i, c = t.i[n][1] + (r[1] - t.i[n][1]) * -i, f.setTripleAt(a, o, h, l, p, c, n);
          return f
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, i, r, s, n, a, o = this.shapes.length,
            h = this.amount.v;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h));
              n.shape.paths = n.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];

          function e(t, e, i) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
              }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var r, s = e.or.k.length;
                for (r = 0; r < s; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
              k: [100, 100, 100]
            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return e.prototype = {
            applyToMatrix: function(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(e) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                  var i;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var r, s;
                    if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      r = [], s = [];
                      var n = this.px,
                        a = this.py;
                      n._caching.lastFrame + n.offsetTime <= n.keyframes[0].t ? (r[0] = n.getValueAtTime((n.keyframes[0].t + .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), s[0] = n.getValueAtTime(n.keyframes[0].t / i, 0), s[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : n._caching.lastFrame + n.offsetTime >= n.keyframes[n.keyframes.length - 1].t ? (r[0] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), s[0] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / i, 0), s[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (r = [n.pv, a.pv], s[0] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / i, n.offsetTime), s[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                    } else r = s = t;
                    this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function() {
              if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function() {}
          }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(t, i, r) {
              return new e(t, i, r)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
          return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, i) {
          return t * (1 - i) + e * i
        }

        function lerpPoint(t, e, i) {
          return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)]
        }

        function quadRoots(t, e, i) {
          if (0 === t) return [];
          var r = e * e - 4 * t * i;
          if (r < 0) return [];
          var s = -e / (2 * t);
          if (0 === r) return [s];
          var n = Math.sqrt(r) / (2 * t);
          return [s - n, s + n]
        }

        function polynomialCoefficients(t, e, i, r) {
          return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, i, r, s) {
          s && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), s && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
          var n = polynomialCoefficients(t[0], e[0], i[0], r[0]),
            a = polynomialCoefficients(t[1], e[1], i[1], r[1]);
          this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, i, r]
        }

        function extrema(t, e) {
          var i = t.points[0][e],
            r = t.points[t.points.length - 1][e];
          if (i > r) {
            var s = r;
            r = i, i = s
          }
          for (var n = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1)
            if (n[a] > 0 && n[a] < 1) {
              var o = t.point(n[a])[e];
              o < i ? i = o : o > r && (r = o)
            } return {
            min: i,
            max: r
          }
        }

        function intersectData(t, e, i) {
          var r = t.boundingBox();
          return {
            cx: r.cx,
            cy: r.cy,
            width: r.width,
            height: r.height,
            bez: t,
            t: (e + i) / 2,
            t1: e,
            t2: i
          }
        }

        function splitData(t) {
          var e = t.bez.split(.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, i, r, s, n) {
          if (boxIntersect(t, e))
            if (i >= n || t.width <= r && t.height <= r && e.width <= r && e.height <= r) s.push([t.t, e.t]);
            else {
              var a = splitData(t),
                o = splitData(e);
              intersectsImpl(a[0], o[0], i + 1, r, s, n), intersectsImpl(a[0], o[1], i + 1, r, s, n), intersectsImpl(a[1], o[0], i + 1, r, s, n), intersectsImpl(a[1], o[1], i + 1, r, s, n)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, i, r) {
          var s = [t[0], t[1], 1],
            n = [e[0], e[1], 1],
            a = [i[0], i[1], 1],
            o = [r[0], r[1], 1],
            h = crossProduct(crossProduct(s, n), crossProduct(a, o));
          return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]]
        }

        function polarOffset(t, e, i) {
          return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i]
        }

        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}

        function setPoint(t, e, i, r, s, n, a) {
          var o = i - Math.PI / 2,
            h = i + Math.PI / 2,
            l = e[0] + Math.cos(i) * r * s,
            p = e[1] - Math.sin(i) * r * s;
          t.setTripleAt(l, p, l + Math.cos(o) * n, p - Math.sin(o) * n, l + Math.cos(h) * a, p - Math.sin(h) * a, t.length())
        }

        function getPerpendicularVector(t, e) {
          var i = [e[0] - t[0], e[1] - t[1]],
            r = .5 * -Math.PI;
          return [Math.cos(r) * i[0] - Math.sin(r) * i[1], Math.sin(r) * i[0] + Math.cos(r) * i[1]]
        }

        function getProjectingAngle(t, e) {
          var i = 0 === e ? t.length() - 1 : e - 1,
            r = (e + 1) % t.length(),
            s = getPerpendicularVector(t.v[i], t.v[r]);
          return Math.atan2(0, 1) - Math.atan2(s[1], s[0])
        }

        function zigZagCorner(t, e, i, r, s, n, a) {
          var o = getProjectingAngle(e, i),
            h = e.v[i % e._length],
            l = e.v[0 === i ? e._length - 1 : i - 1],
            p = e.v[(i + 1) % e._length],
            c = 2 === n ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0,
            f = 2 === n ? Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2)) : 0;
          setPoint(t, e.v[i % e._length], o, a, r, f / (2 * (s + 1)), c / (2 * (s + 1)), n)
        }

        function zigZagSegment(t, e, i, r, s, n) {
          for (var a = 0; a < r; a += 1) {
            var o = (a + 1) / (r + 1),
              h = 2 === s ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              l = e.normalAngle(o);
            setPoint(t, e.point(o), l, n, i, h / (2 * (r + 1)), h / (2 * (r + 1)), s), n = -n
          }
          return n
        }

        function linearOffset(t, e, i) {
          var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, r, i), polarOffset(e, r, i)]
        }

        function offsetSegment(t, e) {
          var i, r, s, n, a, o, h;
          i = (h = linearOffset(t.points[0], t.points[1], e))[0], r = h[1], s = (h = linearOffset(t.points[1], t.points[2], e))[0], n = h[1], a = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1];
          var l = lineIntersection(i, r, s, n);
          null === l && (l = r);
          var p = lineIntersection(a, o, s, n);
          return null === p && (p = a), new PolynomialBezier(i, l, p, o)
        }

        function joinLines(t, e, i, r, s) {
          var n = e.points[3],
            a = i.points[0];
          if (3 === r) return n;
          if (pointEqual(n, a)) return n;
          if (2 === r) {
            var o = -e.tangentAngle(1),
              h = -i.tangentAngle(0) + Math.PI,
              l = lineIntersection(n, polarOffset(n, o + Math.PI / 2, 100), a, polarOffset(a, o + Math.PI / 2, 100)),
              p = l ? pointDistance(l, n) : pointDistance(n, a) / 2,
              c = polarOffset(n, o, 2 * p * roundCorner);
            return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(a, h, 2 * p * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], c[0], c[1], t.length()), a
          }
          var f = lineIntersection(pointEqual(n, e.points[2]) ? e.points[0] : e.points[2], n, a, pointEqual(a, i.points[1]) ? i.points[3] : i.points[1]);
          return f && pointDistance(f, n) < s ? (t.setTripleAt(f[0], f[1], f[0], f[1], f[0], f[1], t.length()), f) : n
        }

        function getIntersection(t, e) {
          var i = t.intersections(e);
          return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var i = t.slice(),
            r = e.slice(),
            s = getIntersection(t[t.length - 1], e[0]);
          return s && (i[t.length - 1] = t[t.length - 1].split(s[0])[0], r[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(s[0])[0]],
            [e[e.length - 1].split(s[1])[1]]
          ] : [i, r]
        }

        function pruneIntersections(t) {
          for (var e, i = 1; i < t.length; i += 1) e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var i, r, s, n, a = t.inflectionPoints();
          if (0 === a.length) return [offsetSegment(t, e)];
          if (1 === a.length || floatEqual(a[1], 1)) return i = (s = t.split(a[0]))[0], r = s[1], [offsetSegment(i, e), offsetSegment(r, e)];
          i = (s = t.split(a[0]))[0];
          var o = (a[1] - a[0]) / (1 - a[0]);
          return n = (s = s[1].split(o))[0], r = s[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(r, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, n = 0; n < s; n += 1) switch (e[n].toLowerCase()) {
            case "italic":
              r = "italic";
              break;
            case "bold":
              i = "700";
              break;
            case "black":
              i = "900";
              break;
            case "medium":
              i = "500";
              break;
            case "regular":
            case "normal":
              i = "400";
              break;
            case "light":
            case "thin":
              i = "200"
          }
          return {
            style: r,
            weight: t.fWeight || i
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, n) {
          var a = n ? -1 : 1,
            o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
            h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
          t.translate(r.p.v[0] * a * s, r.p.v[1] * a * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(n ? 1 / o : o, n ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, i, r) {
          for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0;) i -= 1, this._elements.unshift(e[i]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, i, r, s, n, a = !1;
          if (this._mdf || t) {
            var o, h = Math.ceil(this.c.v);
            if (this._groups.length < h) {
              for (; this._groups.length < h;) {
                var l = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                l.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1
              }
              this.elem.reloadShapes(), a = !0
            }
            for (n = 0, r = 0; r <= this._groups.length - 1; r += 1) {
              if (o = n < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                var p = this.elemsData[r].it,
                  c = p[p.length - 1];
                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
              }
              n += 1
            }
            this._currentCopies = h;
            var f = this.o.v,
              u = f % 1,
              m = f > 0 ? Math.floor(f) : Math.ceil(f),
              d = this.pMatrix.props,
              y = this.rMatrix.props,
              g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var v, b, x = 0;
            if (f > 0) {
              for (; x < m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
              u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, u, !1), x += u)
            } else if (f < 0) {
              for (; x > m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
              u && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -u, !0), x -= u)
            }
            for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, n = this._currentCopies; n;) {
              if (b = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
              x += 1, n -= 1, r += s
            }
          } else
            for (n = this._currentCopies, r = 0, s = 1; n;) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, n -= 1, r += s;
          return a
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var i, r = shapePool.newElement();
          r.c = t.c;
          var s, n, a, o, h, l, p, c, f, u, m, d, y = t._length,
            g = 0;
          for (i = 0; i < y; i += 1) s = t.v[i], a = t.o[i], n = t.i[i], s[0] === a[0] && s[1] === a[1] && s[0] === n[0] && s[1] === n[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = m = s[0] + (o[0] - s[0]) * l, c = d = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, u = c - (c - s[1]) * roundCorner, r.setTripleAt(p, c, f, u, m, d, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, c = u = s[1] + (o[1] - s[1]) * l, m = p - (p - s[0]) * roundCorner, d = c - (c - s[1]) * roundCorner, r.setTripleAt(p, c, f, u, m, d, g), g += 1) : (r.setTripleAt(s[0], s[1], a[0], a[1], n[0], n[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
          return r
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, i, r, s, n, a, o = this.shapes.length,
            h = this.rd.v;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h));
              n.shape.paths = n.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
            i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (i < 0) return [];
          var r = Math.sqrt(i);
          return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter((function(t) {
            return t > 0 && t < 1
          }))
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            i = lerpPoint(this.points[1], this.points[2], t),
            r = lerpPoint(this.points[2], this.points[3], t),
            s = lerpPoint(e, i, t),
            n = lerpPoint(i, r, t),
            a = lerpPoint(s, n, t);
          return [new PolynomialBezier(this.points[0], e, s, a, !0), new PolynomialBezier(a, n, r, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(t, e, i) {
          void 0 === e && (e = 2), void 0 === i && (i = 7);
          var r = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var i = (e + 1) % t.length();
          return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(t, e, i, r) {
          var s = t._length,
            n = shapePool.newElement();
          if (n.c = t.c, t.c || (s -= 1), 0 === s) return n;
          var a = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(n, t, 0, e, i, r, a);
          for (var h = 0; h < s; h += 1) a = zigZagSegment(n, o, e, i, r, -a), o = h !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % s) : null, zigZagCorner(n, t, h + 1, e, i, r, a);
          return n
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, i, r, s, n, a, o = this.shapes.length,
            h = this.amplitude.v,
            l = Math.max(0, Math.round(this.frequency.v)),
            p = this.pointsType.v;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h, l, p));
              n.shape.paths = n.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
          var s = shapePool.newElement();
          s.c = t.c;
          var n, a, o, h = t.length();
          t.c || (h -= 1);
          var l = [];
          for (n = 0; n < h; n += 1) o = PolynomialBezier.shapeSegment(t, n), l.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (n = h - 1; n >= 0; n -= 1) o = PolynomialBezier.shapeSegmentInverted(t, n), l.push(offsetSegmentSplit(o, e));
          l = pruneIntersections(l);
          var p = null,
            c = null;
          for (n = 0; n < l.length; n += 1) {
            var f = l[n];
            for (c && (p = joinLines(s, c, f[0], i, r)), c = f[f.length - 1], a = 0; a < f.length; a += 1) o = f[a], p && pointEqual(o.points[0], p) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), p = o.points[3]
          }
          return l.length && joinLines(s, c, l[0][0], i, r), s
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, i, r, s, n, a, o = this.shapes.length,
            h = this.amount.v,
            l = this.miterLimit.v,
            p = this.lineJoin;
          if (0 !== h)
            for (i = 0; i < o; i += 1) {
              if (a = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t)
                for (a.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, s = n.shape.paths._length, r = 0; r < s; r += 1) a.addShape(this.processPath(e[r], h, p, l));
              n.shape.paths = n.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var t = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            e = [];
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var i = 127988,
            r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function s(t, e) {
            var i = createTag("span");
            i.setAttribute("aria-hidden", !0), i.style.fontFamily = e;
            var r = createTag("span");
            r.innerText = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
            var s = r.offsetWidth;
            return r.style.fontFamily = function(t) {
              var e, i = t.split(","),
                r = i.length,
                s = [];
              for (e = 0; e < r; e += 1) "sans-serif" !== i[e] && "monospace" !== i[e] && s.push(i[e]);
              return s.join(",")
            }(t) + ", " + e, {
              node: r,
              w: s,
              parent: i
            }
          }

          function n(t, e) {
            var i, r = document.body && e ? "svg" : "canvas",
              s = getFontProperties(t);
            if ("svg" === r) {
              var n = createNS("text");
              n.style.fontSize = "100px", n.setAttribute("font-family", t.fFamily), n.setAttribute("font-style", s.style), n.setAttribute("font-weight", s.weight), n.textContent = "1", t.fClass ? (n.style.fontFamily = "inherit", n.setAttribute("class", t.fClass)) : n.style.fontFamily = t.fFamily, e.appendChild(n), i = n
            } else {
              var a = new OffscreenCanvas(500, 500).getContext("2d");
              a.font = s.style + " " + s.weight + " 100px " + t.fFamily, i = a
            }
            return {
              measureText: function(t) {
                return "svg" === r ? (i.textContent = t, i.getComputedTextLength()) : i.measureText(t).width
              }
            }
          }

          function a(t) {
            var e = 0,
              i = t.charCodeAt(0);
            if (i >= 55296 && i <= 56319) {
              var r = t.charCodeAt(1);
              r >= 56320 && r <= 57343 && (e = 1024 * (i - 55296) + r - 56320 + 65536)
            }
            return e
          }

          function o(t) {
            var e = a(t);
            return e >= 127462 && e <= 127487
          }
          var h = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          h.isModifier = function(t, e) {
            var i = t.toString(16) + e.toString(16);
            return -1 !== r.indexOf(i)
          }, h.isZeroWidthJoiner = function(t) {
            return 8205 === t
          }, h.isFlagEmoji = function(t) {
            return o(t.substr(0, 2)) && o(t.substr(2, 2))
          }, h.isRegionalCode = o, h.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          }, h.isRegionalFlag = function(t, e) {
            var r = a(t.substr(e, 2));
            if (r !== i) return !1;
            var s = 0;
            for (e += 2; s < 5;) {
              if ((r = a(t.substr(e, 2))) < 917601 || r > 917626) return !1;
              s += 1, e += 2
            }
            return 917631 === a(t.substr(e, 2))
          }, h.isVariationSelector = function(t) {
            return 65039 === t
          }, h.BLACK_FLAG_CODE_POINT = i;
          var l = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var i, r, s = t.length,
                  n = this.chars.length;
                for (e = 0; e < s; e += 1) {
                  for (i = 0, r = !1; i < n;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
                  r || (this.chars.push(t[e]), n += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = n(t), t.cache = {}
                })), void(this.fonts = t.list);
                var i, r = t.list,
                  a = r.length,
                  o = a;
                for (i = 0; i < a; i += 1) {
                  var h, l, p = !0;
                  if (r[i].loaded = !1, r[i].monoCase = s(r[i].fFamily, "monospace"), r[i].sansCase = s(r[i].fFamily, "sans-serif"), r[i].fPath) {
                    if ("p" === r[i].fOrigin || 3 === r[i].origin) {
                      if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[i].fFamily + '"], style[f-origin="3"][f-family="' + r[i].fFamily + '"]')).length > 0 && (p = !1), p) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", r[i].fOrigin), c.setAttribute("f-origin", r[i].origin), c.setAttribute("f-family", r[i].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + r[i].fFamily + "; font-style: normal; src: url('" + r[i].fPath + "');}", e.appendChild(c)
                      }
                    } else if ("g" === r[i].fOrigin || 1 === r[i].origin) {
                      for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) - 1 !== h[l].href.indexOf(r[i].fPath) && (p = !1);
                      if (p) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", r[i].fOrigin), f.setAttribute("f-origin", r[i].origin), f.type = "text/css", f.rel = "stylesheet", f.href = r[i].fPath, document.body.appendChild(f)
                      }
                    } else if ("t" === r[i].fOrigin || 2 === r[i].origin) {
                      for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) r[i].fPath === h[l].src && (p = !1);
                      if (p) {
                        var u = createTag("link");
                        u.setAttribute("f-forigin", r[i].fOrigin), u.setAttribute("f-origin", r[i].origin), u.setAttribute("rel", "stylesheet"), u.setAttribute("href", r[i].fPath), e.appendChild(u)
                      }
                    }
                  } else r[i].loaded = !0, o -= 1;
                  r[i].helper = n(r[i], e), r[i].cache = {}, this.fonts.push(r[i])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, i, r) {
              for (var s = 0, n = this.chars.length; s < n;) {
                if (this.chars[s].ch === e && this.chars[s].style === i && this.chars[s].fFamily === r) return this.chars[s];
                s += 1
              }
              return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, i, r)), t
            },
            getFontByName: function(t) {
              for (var e = 0, i = this.fonts.length; e < i;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function(t, e, i) {
              var r = this.getFontByName(e),
                s = t;
              if (!r.cache[s]) {
                var n = r.helper;
                if (" " === t) {
                  var a = n.measureText("|" + t + "|"),
                    o = n.measureText("||");
                  r.cache[s] = (a - o) / 100
                } else r.cache[s] = n.measureText(t) / 100
              }
              return r.cache[s] * i
            },
            checkLoadedFonts: function() {
              var t, e, i, r = this.fonts.length,
                s = r;
              for (t = 0; t < r; t += 1) this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, i = this.fonts[t].monoCase.w, e.offsetWidth !== i ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, i = this.fonts[t].sansCase.w, e.offsetWidth !== i && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return h.prototype = l, h
        }();

        function SlotManager(t) {
          this.animationData = t
        }

        function slotFactory(t) {
          return new SlotManager(t)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(t) {
          return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
          },
          removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
          },
          prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            }
          },
          getLayerSize: function() {
            return 5 === this.data.ty ? {
              w: this.data.textData.width,
              h: this.data.textData.height
            } : {
              w: this.data.width,
              h: this.data.height
            }
          }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          }, function(t) {
            return blendModeEnums[t] || ""
          }),
          blendModeEnums;

        function SliderEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function AngleEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function ColorEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function PointEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
        }

        function LayerIndexEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function MaskIndexEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function CheckboxEffect(t, e, i) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(t, e) {
          var i, r = t.ef || [];
          this.effectElements = [];
          var s, n = r.length;
          for (i = 0; i < n; i += 1) s = new GroupEffect(r[i], e), this.effectElements.push(s)
        }

        function GroupEffect(t, e) {
          this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i)
        }

        function AudioElement(t, e, i) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
          var r = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var i;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var r, s = this.data.ef.length,
            n = this.data.ef;
          for (i = 0; i < s; i += 1) {
            switch (r = null, n[i].ty) {
              case 0:
                r = new SliderEffect(n[i], e, this);
                break;
              case 1:
                r = new AngleEffect(n[i], e, this);
                break;
              case 2:
                r = new ColorEffect(n[i], e, this);
                break;
              case 3:
                r = new PointEffect(n[i], e, this);
                break;
              case 4:
              case 7:
                r = new CheckboxEffect(n[i], e, this);
                break;
              case 10:
                r = new LayerIndexEffect(n[i], e, this);
                break;
              case 11:
                r = new MaskIndexEffect(n[i], e, this);
                break;
              case 5:
                r = new EffectsManager(n[i], e, this);
                break;
              default:
                r = new NoValueEffect(n[i], e, this)
            }
            r && this.effectElements.push(r)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
              if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
              t += 1
            }
            return !1
          },
          initExpressions: function() {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("layer"),
                i = t("effects"),
                r = t("shape"),
                s = t("text"),
                n = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var a = i.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(a), 0 === this.data.ty || this.data.xt ? this.compInterface = n(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
          },
          initBaseData: function(t, e, i) {
            this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(t, e) {
            var i, r = this.dynamicProperties.length;
            for (i = 0; i < r; i += 1)(e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(t) {
          if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e
          }
          this._volume = this.lv.v[0];
          var i = this._volume * this._volumeMultiplier;
          this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
          this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
          var e, i, r = this.layers.length;
          for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
          return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
          return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
          var e;
          this.completeLayers = !1;
          var i, r = t.length,
            s = this.layers.length;
          for (e = 0; e < r; e += 1)
            for (i = 0; i < s;) {
              if (this.layers[i].id === t[e].id) {
                this.layers[i] = t[e];
                break
              }
              i += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
          for (var r = this.elements, s = this.layers, n = 0, a = s.length; n < a;) s[n].ind == e && (r[n] && !0 !== r[n] ? (i.push(r[n]), r[n].setAsParent(), void 0 !== s[n].parent ? this.buildElementParenting(t, s[n].parent, i) : t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1)
            if (t[e].xt) {
              var r = this.createComp(t[e]);
              r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, i = this.elements.length;
          for (e = 0; e < i; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, i = t.shift();
          if ("number" == typeof i) e = this.elements[i];
          else {
            var r, s = this.elements.length;
            for (r = 0; r < s; r += 1)
              if (this.elements[r].data.nm === i) {
                e = this.elements[r];
                break
              }
          }
          return 0 === t.length ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(t, e, i) {
          this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var r, s, n = this.globalData.defs,
            a = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(a), this.solidPath = "";
          var o, h, l, p, c, f, u = this.masksProperties,
            m = 0,
            d = [],
            y = createElementID(),
            g = "clipPath",
            v = "clip-path";
          for (r = 0; r < a; r += 1)
            if (("a" !== u[r].mode && "n" !== u[r].mode || u[r].inv || 100 !== u[r].o.k || u[r].o.x) && (g = "mask", v = "mask"), "s" !== u[r].mode && "i" !== u[r].mode || 0 !== m ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), d.push(l)), s = createNS("path"), "n" === u[r].mode) this.viewData[r] = {
              op: PropertyFactory.getProp(this.element, u[r].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, u[r], 3),
              elem: s,
              lastPath: ""
            }, n.appendChild(s);
            else {
              var b;
              if (m += 1, s.setAttribute("fill", "s" === u[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== u[r].x.k ? (g = "mask", v = "mask", f = PropertyFactory.getProp(this.element, u[r].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), n.appendChild(p), s.setAttribute("stroke", "s" === u[r].mode ? "#000000" : "#ffffff")) : (c = null, f = null), this.storedData[r] = {
                  elem: s,
                  x: f,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === u[r].mode) {
                h = d.length;
                var x = createNS("g");
                for (o = 0; o < h; o += 1) x.appendChild(d[o]);
                var S = createNS("mask");
                S.setAttribute("mask-type", "alpha"), S.setAttribute("id", y + "_" + m), S.appendChild(s), n.appendChild(S), x.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + m + ")"), d.length = 0, d.push(x)
              } else d.push(s);
              u[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                elem: s,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, u[r].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, u[r], 3),
                invRect: l
              }, this.viewData[r].prop.k || this.drawPath(u[r], this.viewData[r].prop.v, this.viewData[r])
            } for (this.maskElement = createNS(g), a = d.length, r = 0; r < a; r += 1) this.maskElement.appendChild(d[r]);
          m > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var t = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: t,
              localMat: t,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var t, e = this.finalTransform.mat,
                i = 0,
                r = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; i < r;) {
                  if (this.hierarchy[i].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  i += 1
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var t = 0,
                e = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
              if (this.finalTransform._localMatMdf) {
                var i = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                  var r = this.localTransforms[t].matrix;
                  i.multiply(r)
                }
                i.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var s = this.finalTransform.localOpacity;
                for (t = 0; t < e; t += 1) s *= .01 * this.localTransforms[t].opacity;
                this.finalTransform.localOpacity = s
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (t.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var e = 0,
                  i = t.length;
                for (e = 0; e < i; e += 1) this.localTransforms.push(t[e])
              }
            }
          },
          globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var i, r = !0, s = this.comp; r;) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = !1;
            var n, a = e.length;
            for (i = 0; i < a; i += 1) n = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
            return t
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, i = this.element.finalTransform.mat,
            r = this.masksProperties.length;
          for (e = 0; e < r; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var s = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, i) {
          var r, s, n = " M" + e.v[0][0] + "," + e.v[0][1];
          for (s = e._length, r = 1; r < s; r += 1) n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
          if (e.c && s > 1 && (n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== n) {
            var a = "";
            i.elem && (e.c && (a = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", a)), i.lastPath = n
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(t, e) {
              var i = createNS("filter");
              return i.setAttribute("id", t), !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")), i
            },
            createAlphaToLuminanceFilter: function() {
              var t = createNS("feColorMatrix");
              return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
          },
          featureSupport = function() {
            var t = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(t) {
          var e, i, r = "SourceGraphic",
            s = t.data.ef ? t.data.ef.length : 0,
            n = createElementID(),
            a = filtersFactory.createFilter(n, !0),
            o = 0;
          for (this.filters = [], e = 0; e < s; e += 1) {
            i = null;
            var h = t.data.ef[e].ty;
            registeredEffects$1[h] && (i = new(0, registeredEffects$1[h].effect)(a, t.effectsManager.effectElements[e], t, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[h].countsAsEffect && (o += 1)), i && this.filters.push(i)
          }
          o && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect$1(t, e, i) {
          registeredEffects$1[t] = {
            effect: e,
            countsAsEffect: i
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(t, e) {
          this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(t) {
          var e, i = this.filters.length;
          for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function(t) {
          var e, i = this.filters.length,
            r = [];
          for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
          return r
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t = null;
            if (this.data.td) {
              this.matteMasks = {};
              var e = createNS("g");
              e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var i = createNS("clipPath"),
                r = createNS("path");
              r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var s = createElementID();
              if (i.setAttribute("id", s), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
                var n = createNS("g");
                n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), n.appendChild(this.layerElement), this.transformedElement = n, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
          },
          destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
          },
          getMatte: function(t) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
              var e, i, r, s, n = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var a = createNS("mask");
                a.setAttribute("id", n), a.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), a.appendChild(r), this.globalData.defs.appendChild(a), featureSupport.maskType || 1 !== t || (a.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (s = createNS("g")).appendChild(r), a.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", n), o.setAttribute("mask-type", "alpha");
                var h = createNS("g");
                o.appendChild(h), e = createElementID(), i = filtersFactory.createFilter(e);
                var l = createNS("feComponentTransfer");
                l.setAttribute("in", "SourceGraphic"), i.appendChild(l);
                var p = createNS("feFuncA");
                p.setAttribute("type", "table"), p.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p), this.globalData.defs.appendChild(i);
                var c = createNS("rect");
                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(c), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(r), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(c), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = n
            }
            return this.matteMasks[t]
          },
          setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(t) {
            this.hierarchy = t
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(t, e, i) {
            this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
          },
          show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(t) {
            var e, i = this.shapeModifiers.length;
            for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
          },
          isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e;)
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var t, e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
            }
          },
          searchProcessedElement: function(t) {
            for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
              if (e[i].elem === t) return e[i].pos;
              i += 1
            }
            return 0
          },
          addProcessedElement: function(t, e) {
            for (var i = this.processedElements, r = i.length; r;)
              if (i[r -= 1].elem === t) return void(i[r].pos = e);
            i.push(new ProcessedElement(t, e))
          },
          prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
          }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
          },
          lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
          };

        function SVGShapeData(t, e, i) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
          for (var r = 0, s = t.length; r < s;) {
            if (t[r].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            r += 1
          }
        }

        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, i, r) {
          var s;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
          var n, a = e.length || 0;
          for (s = 0; s < a; s += 1) n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
            n: e[s].n,
            p: n
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i
        }

        function SVGNoStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i
        }

        function GradientProperty(t, e, i) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i)
        }

        function SVGGradientStrokeStyleData(t, e, i) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, i) {
          this.transform = {
            mProps: t,
            op: e,
            container: i
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
              i = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var i = 0, r = this.o.length / 2; i < r;) {
            if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > .01) return !1;
            i += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e;) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
              t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(t) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            var e, i, r, s = 4 * this.data.p;
            for (e = 0; e < s; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
            if (this.o.length)
              for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
          this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var i = createElementID(),
            r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
          var s, n, a, o = [];
          for (a = 4 * e.g.p, n = 0; n < a; n += 4) s = createNS("stop"), r.appendChild(s), o.push(s);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var i, r, s, n = createNS("mask"),
              a = createNS("path");
            n.appendChild(a);
            var o = createElementID(),
              h = createElementID();
            n.setAttribute("id", h);
            var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (r = 4 * t.g.p; r < s; r += 2)(i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
            a.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = n, this.ost = p, this.maskId = h, e.msElem = a
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, i, r) {
            if (0 === e) return "";
            var s, n = t.o,
              a = t.i,
              o = t.v,
              h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
            for (s = 1; s < e; s += 1) h += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[s][0], a[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
            return i && e && (h += " C" + r.applyToPointStringified(n[s - 1][0], n[s - 1][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function i(t, e, i) {
              (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function r() {}

            function s(i, r, s) {
              var n, a, o, h, l, p, c, f, u, m, d = r.styles.length,
                y = r.lvl;
              for (p = 0; p < d; p += 1) {
                if (h = r.sh._mdf || s, r.styles[p].lvl < y) {
                  for (f = e.reset(), u = y - r.styles[p].lvl, m = r.transformers.length - 1; !h && u > 0;) h = r.transformers[m].mProps._mdf || h, u -= 1, m -= 1;
                  if (h)
                    for (u = y - r.styles[p].lvl, m = r.transformers.length - 1; u > 0;) f.multiply(r.transformers[m].mProps.v), u -= 1, m -= 1
                } else f = t;
                if (a = (c = r.sh.paths)._length, h) {
                  for (o = "", n = 0; n < a; n += 1)(l = c.shapes[n]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                  r.caches[p] = o
                } else o = r.caches[p];
                r.styles[p].d += !0 === i.hd ? "" : o, r.styles[p]._mdf = h || r.styles[p]._mdf
              }
            }

            function n(t, e, i) {
              var r = e.style;
              (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function a(t, e, i) {
              o(t, e, i), h(0, e, i)
            }

            function o(t, e, i) {
              var r, s, n, a, o, h = e.gf,
                l = e.g._hasOpacity,
                p = e.s.v,
                c = e.e.v;
              if (e.o._mdf || i) {
                var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(f, e.o.v)
              }
              if (e.s._mdf || i) {
                var u = 1 === t.t ? "x1" : "cx",
                  m = "x1" === u ? "y1" : "cy";
                h.setAttribute(u, p[0]), h.setAttribute(m, p[1]), l && !e.g._collapsable && (e.of.setAttribute(u, p[0]), e.of.setAttribute(m, p[1]))
              }
              if (e.g._cmdf || i) {
                r = e.cst;
                var d = e.g.c;
                for (n = r.length, s = 0; s < n; s += 1)(a = r[s]).setAttribute("offset", d[4 * s] + "%"), a.setAttribute("stop-color", "rgb(" + d[4 * s + 1] + "," + d[4 * s + 2] + "," + d[4 * s + 3] + ")")
              }
              if (l && (e.g._omdf || i)) {
                var y = e.g.o;
                for (n = (r = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < n; s += 1) a = r[s], e.g._collapsable || a.setAttribute("offset", y[2 * s] + "%"), a.setAttribute("stop-opacity", y[2 * s + 1])
              }
              if (1 === t.t)(e.e._mdf || i) && (h.setAttribute("x2", c[0]), h.setAttribute("y2", c[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
              else if ((e.s._mdf || e.e._mdf || i) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || i) {
                o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                  v = e.h.v;
                v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                var b = o * v,
                  x = Math.cos(g + e.a.v) * b + p[0],
                  S = Math.sin(g + e.a.v) * b + p[1];
                h.setAttribute("fx", x), h.setAttribute("fy", S), l && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", S))
              }
            }

            function h(t, e, i) {
              var r = e.style,
                s = e.d;
              s && (s._mdf || i) && s.dashStr && (r.pElem.setAttribute("stroke-dasharray", s.dashStr), r.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return n;
                  case "gf":
                    return o;
                  case "gs":
                    return a;
                  case "st":
                    return h;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return s;
                  case "tr":
                    return i;
                  case "no":
                    return r;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = []
        }

        function LetterProps(t, e, i, r, s, n) {
          this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = n, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!i,
            fc: !!r,
            m: !0,
            p: !0
          }
        }

        function TextProperty(t, e) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var t, e, i, r, s = this.shapes.length,
            n = this.stylesList.length,
            a = [],
            o = !1;
          for (i = 0; i < n; i += 1) {
            for (r = this.stylesList[i], o = !1, a.length = 0, t = 0; t < s; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (a.push(e), o = e._isAnimated || o);
            a.length > 1 && o && this.setShapesAsAnimated(a)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var i, r = new SVGStyleData(t, e),
            s = r.pElem;
          return "st" === t.ty ? i = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? i = new SVGFillStyleData(this, t, r) : "gf" === t.ty || "gs" === t.ty ? (i = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))) : "no" === t.ty && (i = new SVGNoStyleData(this, t, r)), "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData;
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var i = TransformPropertyFactory.getTransformProperty(this, t, this),
            r = new SVGTransformData(i, i.o, e);
          return this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
          var r = 4;
          "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
          var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
          return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var i = 0, r = this.animatedContents.length; i < r;) {
            if (this.animatedContents[i].element === e) return;
            i += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
          })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, i = t.styles,
            r = this.stylesList.length;
          for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, n, a) {
          var o, h, l, p, c, f, u = [].concat(n),
            m = t.length - 1,
            d = [],
            y = [];
          for (o = m; o >= 0; o -= 1) {
            if ((f = this.searchProcessedElement(t[o])) ? e[o] = i[f - 1] : t[o]._render = a, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), d.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (f)
                for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, u, a), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, u.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], u, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (f ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === t[o].ty && (f ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), a = !1), y.push(c));
            this.addProcessedElement(t[o], o + 1)
          }
          for (m = d.length, o = 0; o < m; o += 1) d[o].closed = !0;
          for (m = y.length, o = 0; o < m; o += 1) y[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var t, e, i = this.animatedContents.length;
          for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, i, r, s, n) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var a = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, a = !0), this.m !== s && (this.m = s, this._mdf.m = !0, a = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this._mdf.p = !0, a = !0), a
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t
        }, TextProperty.prototype.setCurrentData = function(t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              i = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var r;
              this.lock = !0, this._mdf = !1;
              var s = this.effectsSequence.length,
                n = t || this.data.d.k[this.keysIndex].s;
              for (r = 0; r < s; r += 1) n = i !== this.keysIndex ? this.effectsSequence[r](n, n.t) : this.effectsSequence[r](this.currentData, n.t);
              e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
          return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, i, r = [], s = 0, n = t.length, a = !1, o = !1, h = ""; s < n;) a = o, o = !1, e = t.charCodeAt(s), h = t.charAt(s), FontManager.isCombinedCharacter(e) ? a = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, s) ? h = t.substr(s, 14) : (i = t.charCodeAt(s + 1)) >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (h = t.substr(s, 2), a = !0) : h = FontManager.isFlagEmoji(t.substr(s, 4)) ? t.substr(s, 4) : t.substr(s, 2)) : e > 56319 ? (i = t.charCodeAt(s + 1), FontManager.isVariationSelector(e) && (a = !0)) : FontManager.isZeroWidthJoiner(e) && (a = !0, o = !0), a ? (r[r.length - 1] += h, a = !1) : r.push(h), s += h.length;
          return r
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, i, r, s, n, a, o, h = this.elem.globalData.fontManager,
            l = this.data,
            p = [],
            c = 0,
            f = l.m.g,
            u = 0,
            m = 0,
            d = 0,
            y = [],
            g = 0,
            v = 0,
            b = h.getFontByName(t.f),
            x = 0,
            S = getFontProperties(b);
          t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
          var P, E = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var C, A, T = !0, M = t.sz[0], k = t.sz[1]; T;) {
              C = 0, g = 0, i = (A = this.buildFinalText(t.t)).length, E = t.tr / 1e3 * t.finalSize;
              var w = -1;
              for (e = 0; e < i; e += 1) P = A[e].charCodeAt(0), r = !1, " " === A[e] ? w = e : 13 !== P && 3 !== P || (g = 0, r = !0, C += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(A[e], b.fStyle, b.fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = h.measureText(A[e], t.f, t.finalSize), g + x > M && " " !== A[e] ? (-1 === w ? i += 1 : e = w, C += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, w === e ? 1 : 0, "\r"), w = -1, g = 0) : (g += x, g += E);
              C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, i = t.finalText.length, T = !1)
            }
          g = -E, x = 0;
          var _, D = 0;
          for (e = 0; e < i; e += 1)
            if (r = !1, 13 === (P = (_ = t.finalText[e]).charCodeAt(0)) || 3 === P ? (D = 0, y.push(g), v = g > v ? g : v, g = -2 * E, s = "", r = !0, d += 1) : s = _, h.chars ? (o = h.getCharData(_, b.fStyle, h.getFontByName(t.f).fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = h.measureText(s, t.f, t.finalSize), " " === _ ? D += x + E : (g += x + E + D, D = 0), p.push({
                l: x,
                an: x,
                add: u,
                n: r,
                anIndexes: [],
                val: s,
                line: d,
                animatorJustifyOffset: 0
              }), 2 == f) {
              if (u += x, "" === s || " " === s || e === i - 1) {
                for ("" !== s && " " !== s || (u -= x); m <= e;) p[m].an = u, p[m].ind = c, p[m].extra = x, m += 1;
                c += 1, u = 0
              }
            } else if (3 == f) {
            if (u += x, "" === s || e === i - 1) {
              for ("" === s && (u -= x); m <= e;) p[m].an = u, p[m].ind = c, p[m].extra = x, m += 1;
              u = 0, c += 1
            }
          } else p[c].ind = c, p[c].extra = 0, c += 1;
          if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else switch (t.boxWidth = v, t.j) {
            case 1:
              t.justifyOffset = -t.boxWidth;
              break;
            case 2:
              t.justifyOffset = -t.boxWidth / 2;
              break;
            default:
              t.justifyOffset = 0
          }
          t.lineWidths = y;
          var F, I, V, B, R = l.a;
          a = R.length;
          var L = [];
          for (n = 0; n < a; n += 1) {
            for ((F = R[n]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), B = 0, V = F.s.b, e = 0; e < i; e += 1)(I = p[e]).anIndexes[n] = B, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == i - 1) || 4 == V && (I.n || e == i - 1)) && (1 === F.s.rn && L.push(B), B += 1);
            l.a[n].s.totalChars = B;
            var O, z = -1;
            if (1 === F.s.rn)
              for (e = 0; e < i; e += 1) z != (I = p[e]).anIndexes[n] && (z = I.anIndexes[n], O = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[n] = O
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var i = this.copyData({}, this.data.d.k[e].s);
          i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
          var e = this.data.d.k[t].s;
          e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var t = Math.max,
            e = Math.min,
            i = Math.floor;

          function r(t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(t, e.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return r.prototype = {
            getMult: function(r) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var s = 0,
                n = 0,
                a = 1,
                o = 1;
              this.ne.v > 0 ? s = this.ne.v / 100 : n = -this.ne.v / 100, this.xe.v > 0 ? a = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var h = BezierFactory.getBezierEasing(s, n, a, o).get,
                l = 0,
                p = this.finalS,
                c = this.finalE,
                f = this.data.sh;
              if (2 === f) l = h(l = c === p ? r >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (r - p) / (c - p), 1)));
              else if (3 === f) l = h(l = c === p ? r >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (r - p) / (c - p), 1)));
              else if (4 === f) c === p ? l = 0 : (l = t(0, e(.5 / (c - p) + (r - p) / (c - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5), l = h(l);
              else if (5 === f) {
                if (c === p) l = 0;
                else {
                  var u = c - p,
                    m = -u / 2 + (r = e(t(0, r + .5 - p), c - p)),
                    d = u / 2;
                  l = Math.sqrt(1 - m * m / (d * d))
                }
                l = h(l)
              } else 6 === f ? (c === p ? l = 0 : (r = e(t(0, r + .5 - p), c - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (c - p))) / 2), l = h(l)) : (r >= i(p) && (l = t(0, e(r - p < 0 ? e(c, 1) - (p - r) : c - r, 1))), l = h(l));
              if (100 !== this.sm.v) {
                var y = .01 * this.sm.v;
                0 === y && (y = 1e-8);
                var g = .5 - .5 * y;
                l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1)
              }
              return l * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                i = this.o.v / e,
                r = this.s.v / e + i,
                s = this.e.v / e + i;
              if (r > s) {
                var n = r;
                r = s, s = n
              }
              this.finalS = r, this.finalE = s
            }
          }, extendPrototype([DynamicPropertyContainer], r), {
            getTextSelectorProp: function(t, e, i) {
              return new r(t, e, i)
            }
          }
        }();

        function TextAnimatorDataProperty(t, e, i) {
          var r = {
              propType: !1
            },
            s = PropertyFactory.getProp,
            n = e.a;
          this.a = {
            r: n.r ? s(t, n.r, 0, degToRads, i) : r,
            rx: n.rx ? s(t, n.rx, 0, degToRads, i) : r,
            ry: n.ry ? s(t, n.ry, 0, degToRads, i) : r,
            sk: n.sk ? s(t, n.sk, 0, degToRads, i) : r,
            sa: n.sa ? s(t, n.sa, 0, degToRads, i) : r,
            s: n.s ? s(t, n.s, 1, .01, i) : r,
            a: n.a ? s(t, n.a, 1, 0, i) : r,
            o: n.o ? s(t, n.o, 0, .01, i) : r,
            p: n.p ? s(t, n.p, 1, 0, i) : r,
            sw: n.sw ? s(t, n.sw, 0, 0, i) : r,
            sc: n.sc ? s(t, n.sc, 1, 0, i) : r,
            fc: n.fc ? s(t, n.fc, 1, 0, i) : r,
            fh: n.fh ? s(t, n.fh, 0, 0, i) : r,
            fs: n.fs ? s(t, n.fs, 0, .01, i) : r,
            fb: n.fb ? s(t, n.fb, 0, .01, i) : r,
            t: n.t ? s(t, n.t, 0, 0, i) : r
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, i) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, i = this._textData.a.length,
            r = PropertyFactory.getProp;
          for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: r(this._elem, this._textData.p.a, 0, 0, this),
            f: r(this._elem, this._textData.p.f, 0, 0, this),
            l: r(this._elem, this._textData.p.l, 0, 0, this),
            r: r(this._elem, this._textData.p.r, 0, 0, this),
            p: r(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var i, r, s, n, a, o, h, l, p, c, f, u, m, d, y, g, v, b, x, S = this._moreOptions.alignment.v,
              P = this._animatorsData,
              E = this._textData,
              C = this.mHelper,
              A = this._renderType,
              T = this.renderedLetters.length,
              M = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var k, w = x.v;
                for (this._pathData.r.v && (w = w.reverse()), a = {
                    tLength: 0,
                    segments: []
                  }, n = w._length - 1, g = 0, s = 0; s < n; s += 1) k = bez.buildBezierData(w.v[s], w.v[s + 1], [w.o[s][0] - w.v[s][0], w.o[s][1] - w.v[s][1]], [w.i[s + 1][0] - w.v[s + 1][0], w.i[s + 1][1] - w.v[s + 1][1]]), a.tLength += k.segmentLength, a.segments.push(k), g += k.segmentLength;
                s = n, x.v.c && (k = bez.buildBezierData(w.v[s], w.v[0], [w.o[s][0] - w.v[s][0], w.o[s][1] - w.v[s][1]], [w.i[0][0] - w.v[0][0], w.i[0][1] - w.v[0][1]]), a.tLength += k.segmentLength, a.segments.push(k), g += k.segmentLength), this._pathData.pi = a
              }
              if (a = this._pathData.pi, o = this._pathData.f.v, f = 0, c = 1, l = 0, p = !0, d = a.segments, o < 0 && x.v.c)
                for (a.tLength < Math.abs(o) && (o = -Math.abs(o) % a.tLength), c = (m = d[f = d.length - 1].points).length - 1; o < 0;) o += m[c].partialLength, (c -= 1) < 0 && (c = (m = d[f -= 1].points).length - 1);
              u = (m = d[f].points)[c - 1], y = (h = m[c]).partialLength
            }
            n = M.length, i = 0, r = 0;
            var _, D, F, I, V, B = 1.2 * t.finalSize * .714,
              R = !0;
            F = P.length;
            var L, O, z, N, G, j, H, q, W, $, U, Y, X = -1,
              J = o,
              K = f,
              Z = c,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var it = 0,
                rt = 0,
                st = 2 === t.j ? -.5 : -1,
                nt = 0,
                at = !0;
              for (s = 0; s < n; s += 1)
                if (M[s].n) {
                  for (it && (it += rt); nt < s;) M[nt].animatorJustifyOffset = it, nt += 1;
                  it = 0, at = !0
                } else {
                  for (D = 0; D < F; D += 1)(_ = P[D].a).t.propType && (at && 2 === t.j && (rt += _.t.v * st), (V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars)).length ? it += _.t.v * V[0] * st : it += _.t.v * V * st);
                  at = !1
                } for (it && (it += rt); nt < s;) M[nt].animatorJustifyOffset = it, nt += 1
            }
            for (s = 0; s < n; s += 1) {
              if (C.reset(), N = 1, M[s].n) i = 0, r += t.yOffset, r += R ? 1 : 0, o = J, R = !1, this._hasMaskedPath && (c = Z, u = (m = d[f = K].points)[c - 1], y = (h = m[c]).partialLength, l = 0), tt = "", U = "", W = "", Y = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== M[s].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[M[s].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[M[s].line]) / 2
                    }
                    Q = M[s].line
                  }
                  X !== M[s].ind && (M[X] && (o += M[X].extra), o += M[s].an / 2, X = M[s].ind), o += S[0] * M[s].an * .005;
                  var ot = 0;
                  for (D = 0; D < F; D += 1)(_ = P[D].a).p.propType && ((V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars)).length ? ot += _.p.v[0] * V[0] : ot += _.p.v[0] * V), _.a.propType && ((V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars)).length ? ot += _.a.v[0] * V[0] : ot += _.a.v[0] * V);
                  for (p = !0, this._pathData.a.v && (o = .5 * M[0].an + (g - this._pathData.f.v - .5 * M[0].an - .5 * M[M.length - 1].an) * X / (n - 1), o += this._pathData.f.v); p;) l + y >= o + ot || !m ? (v = (o + ot - l) / h.partialLength, O = u.point[0] + (h.point[0] - u.point[0]) * v, z = u.point[1] + (h.point[1] - u.point[1]) * v, C.translate(-S[0] * M[s].an * .005, -S[1] * B * .01), p = !1) : m && (l += h.partialLength, (c += 1) >= m.length && (c = 0, d[f += 1] ? m = d[f].points : x.v.c ? (c = 0, m = d[f = 0].points) : (l -= h.partialLength, m = null)), m && (u = h, y = (h = m[c]).partialLength));
                  L = M[s].an / 2 - M[s].add, C.translate(-L, 0, 0)
                } else L = M[s].an / 2 - M[s].add, C.translate(-L, 0, 0), C.translate(-S[0] * M[s].an * .005, -S[1] * B * .01, 0);
                for (D = 0; D < F; D += 1)(_ = P[D].a).t.propType && (V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? V.length ? o += _.t.v * V[0] : o += _.t.v * V : V.length ? i += _.t.v * V[0] : i += _.t.v * V));
                for (t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (G = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1)(_ = P[D].a).a.propType && ((V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars)).length ? C.translate(-_.a.v[0] * V[0], -_.a.v[1] * V[1], _.a.v[2] * V[2]) : C.translate(-_.a.v[0] * V, -_.a.v[1] * V, _.a.v[2] * V));
                for (D = 0; D < F; D += 1)(_ = P[D].a).s.propType && ((V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars)).length ? C.scale(1 + (_.s.v[0] - 1) * V[0], 1 + (_.s.v[1] - 1) * V[1], 1) : C.scale(1 + (_.s.v[0] - 1) * V, 1 + (_.s.v[1] - 1) * V, 1));
                for (D = 0; D < F; D += 1) {
                  if (_ = P[D].a, V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars), _.sk.propType && (V.length ? C.skewFromAxis(-_.sk.v * V[0], _.sa.v * V[1]) : C.skewFromAxis(-_.sk.v * V, _.sa.v * V)), _.r.propType && (V.length ? C.rotateZ(-_.r.v * V[2]) : C.rotateZ(-_.r.v * V)), _.ry.propType && (V.length ? C.rotateY(_.ry.v * V[1]) : C.rotateY(_.ry.v * V)), _.rx.propType && (V.length ? C.rotateX(_.rx.v * V[0]) : C.rotateX(_.rx.v * V)), _.o.propType && (V.length ? N += (_.o.v * V[0] - N) * V[0] : N += (_.o.v * V - N) * V), t.strokeWidthAnim && _.sw.propType && (V.length ? j += _.sw.v * V[0] : j += _.sw.v * V), t.strokeColorAnim && _.sc.propType)
                    for (q = 0; q < 3; q += 1) V.length ? G[q] += (_.sc.v[q] - G[q]) * V[0] : G[q] += (_.sc.v[q] - G[q]) * V;
                  if (t.fillColorAnim && t.fc) {
                    if (_.fc.propType)
                      for (q = 0; q < 3; q += 1) V.length ? H[q] += (_.fc.v[q] - H[q]) * V[0] : H[q] += (_.fc.v[q] - H[q]) * V;
                    _.fh.propType && (H = V.length ? addHueToRGB(H, _.fh.v * V[0]) : addHueToRGB(H, _.fh.v * V)), _.fs.propType && (H = V.length ? addSaturationToRGB(H, _.fs.v * V[0]) : addSaturationToRGB(H, _.fs.v * V)), _.fb.propType && (H = V.length ? addBrightnessToRGB(H, _.fb.v * V[0]) : addBrightnessToRGB(H, _.fb.v * V))
                  }
                }
                for (D = 0; D < F; D += 1)(_ = P[D].a).p.propType && (V = P[D].s.getMult(M[s].anIndexes[D], E.a[D].s.totalChars), this._hasMaskedPath ? V.length ? C.translate(0, _.p.v[1] * V[0], -_.p.v[2] * V[1]) : C.translate(0, _.p.v[1] * V, -_.p.v[2] * V) : V.length ? C.translate(_.p.v[0] * V[0], _.p.v[1] * V[1], -_.p.v[2] * V[2]) : C.translate(_.p.v[0] * V, _.p.v[1] * V, -_.p.v[2] * V));
                if (t.strokeWidthAnim && (W = j < 0 ? 0 : j), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (C.translate(0, -t.ls), C.translate(0, S[1] * B * .01 + r, 0), this._pathData.p.v) {
                    b = (h.point[1] - u.point[1]) / (h.point[0] - u.point[0]);
                    var ht = 180 * Math.atan(b) / Math.PI;
                    h.point[0] < u.point[0] && (ht += 180), C.rotate(-ht * Math.PI / 180)
                  }
                  C.translate(O, z, 0), o -= S[0] * M[s].an * .005, M[s + 1] && X !== M[s + 1].ind && (o += M[s].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (C.translate(i, r, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      C.translate(M[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[s].line]), 0, 0);
                      break;
                    case 2:
                      C.translate(M[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[M[s].line]) / 2, 0, 0)
                  }
                  C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(S[0] * M[s].an * .005, S[1] * B * .01, 0), i += M[s].l + .001 * t.tr * t.finalSize
                }
                "html" === A ? tt = C.toCSS() : "svg" === A ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], Y = N
              }
              T <= s ? (I = new LetterProps(Y, W, $, U, tt, et), this.renderedLetters.push(I), T += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(Y, W, $, U, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, i) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var i, r, s = e.length,
            n = "";
          for (i = 0; i < s; i += 1) "sh" === e[i].ty && (r = e[i].ks.k, n += buildShapeString(r, r.i.length, !0, t));
          return n
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
          }
          e.translate(r, s, 0)
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(t, e, i) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i)
        }

        function ISolidElement(t, e, i) {
          this.initElement(t, e, i)
        }

        function NullElement(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, i) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var i = "";
          if (e && e.title) {
            var r = createNS("title"),
              s = createElementID();
            r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s
          }
          if (e && e.description) {
            var n = createNS("desc"),
              a = createElementID();
            n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + a
          }
          i && this.svgElement.setAttribute("aria-labelledby", i);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var h = createNS("g");
          this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            id: e && e.id || "",
            focusable: e && e.focusable,
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "100%",
              height: e && e.filterSize && e.filterSize.height || "100%",
              x: e && e.filterSize && e.filterSize.x || "0%",
              y: e && e.filterSize && e.filterSize.y || "0%"
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
          for (var e = 0, i = t.length, r = [], s = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
          return r.push(s), r
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var i = t.shapes[0];
            if (i.it) {
              var r = i.it[i.it.length - 1];
              r.s && (r.s.k[0] = e, r.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var i = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
          var r = this.globalData.fontManager.getFontByName(i.f);
          if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
          else {
            this.layerElement.setAttribute("font-family", r.fFamily);
            var s = i.fWeight,
              n = i.fStyle;
            this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s)
          }
          this.layerElement.setAttribute("aria-label", i.t);
          var a, o = i.l || [],
            h = !!this.globalData.fontManager.chars;
          e = o.length;
          var l = this.mHelper,
            p = this.data.singleShape,
            c = 0,
            f = 0,
            u = !0,
            m = .001 * i.tr * i.finalSize;
          if (!p || h || i.sz) {
            var d, y = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !h || !p || 0 === t) {
                if (a = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
                  if (a.setAttribute("stroke-linecap", "butt"), a.setAttribute("stroke-linejoin", "round"), a.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = a, h) {
                    var g = createNS("g");
                    a.appendChild(g), this.textSpans[t].childSpan = g
                  }
                  this.textSpans[t].span = a, this.layerElement.appendChild(a)
                }
                a.style.display = "inherit"
              }
              if (l.reset(), p && (o[t].n && (c = -m, f += i.yOffset, f += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(i, l, o[t].line, c, f), c += o[t].l || 0, c += m), h) {
                var v;
                if (1 === (d = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t) v = new SVGCompElement(d.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  d.data && d.data.shapes && (b = this.buildShapeData(d.data, i.finalSize)), v = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                }
                this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === d.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")")
              } else p && a.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), a.textContent = o[t].val, a.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            p && a && a.setAttribute("d", "")
          } else {
            var S = this.textContainer,
              P = "start";
            switch (i.j) {
              case 1:
                P = "end";
                break;
              case 2:
                P = "middle";
                break;
              default:
                P = "start"
            }
            S.setAttribute("text-anchor", P), S.setAttribute("letter-spacing", m);
            var E = this.buildTextContents(i.finalText);
            for (e = E.length, f = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)(a = this.textSpans[t].span || createNS("tspan")).textContent = E[t], a.setAttribute("x", 0), a.setAttribute("y", f), a.style.display = "inherit", S.appendChild(a), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = a, f += i.finalLineHeight;
            this.layerElement.appendChild(S)
          }
          for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var t, e, i = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var i, r, s, n = this.textAnimator.renderedLetters,
              a = this.textProperty.currentData.l;
            for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = n[t], r = this.textSpans[t].span, (s = this.textSpans[t].glyph) && s.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
          return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
          return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
          return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
          return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
          return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
          var i = createNS("clipPath"),
            r = createNS("rect");
          r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
          var s = createElementID();
          i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0,
            i = this.layers.length;
          for (e = 0; e < i; e += 1)
            if (this.layers[e].ind === t) return e;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var i = this.createItem(this.layers[t]);
            if (e[t] = i, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
              var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === r) return;
              if (this.elements[r] && !0 !== this.elements[r]) {
                var s = e[r].getMatte(this.layers[t].tt);
                i.setMatte(s)
              } else this.buildItem(r), this.addPendingElement(i)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, i = this.elements.length; e < i;) {
                if (this.elements[e] === t) {
                  var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    s = this.elements[r].getMatte(this.layers[e].tt);
                  t.setMatte(s);
                  break
                }
                e += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var i = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < i; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var i = t.getBaseElement();
          if (i) {
            for (var r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
            r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var i, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
          this.elements = t
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(t) {
            var e, i = t.length,
              r = "_";
            for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
            var s = this.sequences[r];
            return s || (s = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[r] = s, this.sequenceList.push(s)), s
          },
          processSequence: function(t, e) {
            for (var i = 0, r = t.transforms.length, s = e; i < r && !e;) {
              if (t.transforms[i].transform.mProps._mdf) {
                s = !0;
                break
              }
              i += 1
            }
            if (s)
              for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
            t._mdf = s
          },
          processSequences: function(t) {
            var e, i = this.sequenceList.length;
            for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer",
            e = null,
            i = null,
            r = null;

          function s() {
            var s, n, a;
            e || (s = createNS("svg"), n = createNS("filter"), a = createNS("feColorMatrix"), n.setAttribute("id", t), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), n.appendChild(a), s.appendChild(n), s.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (s.style.display = "none"), r = s, document.body.appendChild(r), e = createTag("canvas"), (i = e.getContext("2d")).filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1))
          }
          return {
            load: s,
            get: function(r) {
              return e || s(), e.width = r.width, e.height = r.height, i.filter = "url(#" + t + ")", e
            }
          }
        };

        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
          var i = createTag("canvas");
          return i.width = t, i.height = e, i
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(t) {
          var e, i, r = t.data.ef ? t.data.ef.length : 0;
          for (this.filters = [], e = 0; e < r; e += 1) {
            i = null;
            var s = t.data.ef[e].ty;
            registeredEffects[s] && (i = new(0, registeredEffects[s].effect)(t.effectsManager.effectElements[e], t)), i && this.filters.push(i)
          }
          this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e) {
          registeredEffects[t] = {
            effect: e
          }
        }

        function CVMaskElement(t, e) {
          var i;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var r = this.masksProperties.length,
            s = !1;
          for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (s = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
          this.hasMasks = s, s && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(t) {
          var e, i = this.filters.length;
          for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function(t) {
          var e, i = this.filters.length,
            r = [];
          for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
          return r
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, i, r, s = this.element.finalTransform.mat,
              n = this.element.canvasContext,
              a = this.masksProperties.length;
            for (n.beginPath(), t = 0; t < a; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compSize.w, 0), n.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), n.lineTo(0, this.element.globalData.compSize.h), n.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), n.moveTo(e[0], e[1]);
                var h = r._length;
                for (o = 1; o < h; o += 1) i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5])
              } this.element.globalData.renderer.save(!0), n.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null
        };
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };

        function CVShapeData(t, e, i, r) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var s, n = 4;
          "rc" === e.ty ? n = 5 : "el" === e.ty ? n = 6 : "sr" === e.ty && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
          var a, o = i.length;
          for (s = 0; s < o; s += 1) i[s].closed || (a = {
            transforms: r.addTransformSequence(i[s].transforms),
            trNodes: []
          }, this.styledShapes.push(a), i[s].elements.push(a))
        }

        function CVShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, i)
        }

        function CVTextElement(t, e, i) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(t, e, i)
        }

        function CVImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i)
        }

        function CVSolidElement(t, e, i) {
          this.initElement(t, e, i)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var t;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
            var e = new CanvasContext;
            this.stack[t] = e
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(t, e, i) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            className: e && e.className || "",
            id: e && e.id || "",
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(t, e, i) {
          this.initElement(t, e, i)
        }

        function HShapeElement(t, e, i) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(t, e, i) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i)
        }

        function HCameraElement(t, e, i) {
          this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
          var r = PropertyFactory.getProp;
          if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var s, n = t.ks.or.k.length;
            for (s = 0; s < n; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
          }
          this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(t, e, i) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i)
        }

        function HybridRendererBase(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, i) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            },
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        CVBaseElement.prototype = {
          createElements: function() {},
          initRendererElement: function() {},
          createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var t = this.globalData.canvasContext,
                e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(e);
              var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e
            }
          },
          createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
          },
          hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function(t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[0].getContext("2d");
              this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[1],
                e = t.getContext("2d");
              if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var i = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                i.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(i, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(t) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var e = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
          var i = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd
            },
            r = {};
          if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
              k: 0
            }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
              k: 0
            }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
            if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
              var s = new DashProperty(this, t.d, "canvas", this);
              r.d = s, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0])
            }
          } else i.r = 2 === t.r ? "evenodd" : "nonzero";
          return this.stylesList.push(i), r.style = i, r
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
          var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
          return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
          var e, i = this.stylesList.length;
          for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var t, e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
          var e, i = t.length;
          for (e = 0; e < i; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, s) {
          var n, a, o, h, l, p, c = t.length - 1,
            f = [],
            u = [],
            m = [].concat(s);
          for (n = c; n >= 0; n -= 1) {
            if ((h = this.searchProcessedElement(t[n])) ? e[n] = i[h - 1] : t[n]._shouldRender = r, "fl" === t[n].ty || "st" === t[n].ty || "gf" === t[n].ty || "gs" === t[n].ty) h ? e[n].style.closed = !1 : e[n] = this.createStyleElement(t[n], m), f.push(e[n].style);
            else if ("gr" === t[n].ty) {
              if (h)
                for (o = e[n].it.length, a = 0; a < o; a += 1) e[n].prevViewData[a] = e[n].it[a];
              else e[n] = this.createGroupElement(t[n]);
              this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, r, m)
            } else "tr" === t[n].ty ? (h || (p = this.createTransformElement(t[n]), e[n] = p), m.push(e[n]), this.addTransformToStyleList(e[n])) : "sh" === t[n].ty || "rc" === t[n].ty || "el" === t[n].ty || "sr" === t[n].ty ? h || (e[n] = this.createShapeElement(t[n])) : "tm" === t[n].ty || "rd" === t[n].ty || "pb" === t[n].ty || "zz" === t[n].ty || "op" === t[n].ty ? (h ? (l = e[n]).closed = !1 : ((l = ShapeModifiers.getModifier(t[n].ty)).init(this, t[n]), e[n] = l, this.shapeModifiers.push(l)), u.push(l)) : "rp" === t[n].ty && (h ? (l = e[n]).closed = !0 : (l = ShapeModifiers.getModifier(t[n].ty), e[n] = l, l.init(this, t, n, e), this.shapeModifiers.push(l), r = !1), u.push(l));
            this.addProcessedElement(t[n], n + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(f), c = u.length, n = 0; n < c; n += 1) u[n].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, i, r, s, n, a, o, h, l = this.stylesList.length,
            p = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (t = 0; t < l; t += 1)
            if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (p.save(), n = h.elements, "st" === o || "gs" === o ? (p.ctxStrokeStyle("st" === o ? h.co : h.grd), p.ctxLineWidth(h.wi), p.ctxLineCap(h.lc), p.ctxLineJoin(h.lj), p.ctxMiterLimit(h.ml || 0)) : p.ctxFillStyle("fl" === o ? h.co : h.grd), p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = n.length, e = 0; e < i; e += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), h.da && (c.setLineDash(h.da), c.lineDashOffset = h.do)), s = (a = n[e].trNodes).length, r = 0; r < s; r += 1) "m" === a[r].t ? c.moveTo(a[r].p[0], a[r].p[1]) : "c" === a[r].t ? c.bezierCurveTo(a[r].pts[0], a[r].pts[1], a[r].pts[2], a[r].pts[3], a[r].pts[4], a[r].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (p.ctxStroke(), h.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(h.r), p.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
          var s, n;
          for (n = t, s = e.length - 1; s >= 0; s -= 1) "tr" === e[s].ty ? (n = i[s].transform, this.renderShapeTransform(t, n)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], i[s]) : "fl" === e[s].ty ? this.renderFill(e[s], i[s], n) : "st" === e[s].ty ? this.renderStroke(e[s], i[s], n) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], i[s], n) : "gr" === e[s].ty ? this.renderShape(n, e[s].it, i[s].it) : e[s].ty;
          r && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var i, r, s, n = t.trNodes,
              a = e.paths,
              o = a._length;
            n.length = 0;
            var h = t.transforms.finalTransform;
            for (s = 0; s < o; s += 1) {
              var l = a.shapes[s];
              if (l && l.v) {
                for (r = l._length, i = 1; i < r; i += 1) 1 === i && n.push({
                  t: "m",
                  p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                }), n.push({
                  t: "c",
                  pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i])
                });
                1 === r && n.push({
                  t: "m",
                  p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                }), l.c && r && (n.push({
                  t: "c",
                  pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0])
                }), n.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = n
          }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var i, r = e.styledShapes.length;
            for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(t, e, i) {
          var r = e.style;
          (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
          var r, s = e.style;
          if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var n, a = this.globalData.canvasContext,
              o = e.s.v,
              h = e.e.v;
            if (1 === t.t) r = a.createLinearGradient(o[0], o[1], h[0], h[1]);
            else {
              var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)),
                p = Math.atan2(h[1] - o[1], h[0] - o[0]),
                c = e.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var f = l * c,
                u = Math.cos(p + e.a.v) * f + o[0],
                m = Math.sin(p + e.a.v) * f + o[1];
              r = a.createRadialGradient(u, m, 0, o[0], o[1], l)
            }
            var d = t.g.p,
              y = e.g.c,
              g = 1;
            for (n = 0; n < d; n += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * n + 1]), r.addColorStop(y[4 * n] / 100, "rgba(" + y[4 * n + 1] + "," + y[4 * n + 2] + "," + y[4 * n + 3] + "," + g + ")");
            s.grd = r
          }
          s.coOp = e.o.v * i.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
          var r = e.style,
            s = e.d;
          s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var i = !1;
          t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var r, s, n, a, o, h, l, p, c, f, u, m, d = this.globalData.fontManager.getFontByName(t.f),
            y = t.l,
            g = this.mHelper;
          this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
          var v = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            x = 0,
            S = 0,
            P = !0,
            E = 0;
          for (r = 0; r < s; r += 1) {
            a = (n = this.globalData.fontManager.getCharData(t.finalText[r], d.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && n.data || {}, g.reset(), v && y[r].n && (x = -b, S += t.yOffset, S += P ? 1 : 0, P = !1), c = (l = a.shapes ? a.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[r].line, x, S), u = createSizedArray(c - 1);
            var C = 0;
            for (p = 0; p < c; p += 1)
              if ("sh" === l[p].ty) {
                for (h = l[p].ks.k.i.length, f = l[p].ks.k, m = [], o = 1; o < h; o += 1) 1 === o && m.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), m.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[o][0], f.i[o][1], 0), g.applyToY(f.i[o][0], f.i[o][1], 0), g.applyToX(f.v[o][0], f.v[o][1], 0), g.applyToY(f.v[o][0], f.v[o][1], 0));
                m.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), u[C] = m, C += 1
              } v && (x += y[r].l, x += b), this.textSpans[E] ? this.textSpans[E].elem = u : this.textSpans[E] = {
              elem: u
            }, E += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, i, r, s, n;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var a, o = this.textAnimator.renderedLetters,
            h = this.textProperty.currentData.l;
          e = h.length;
          var l, p, c = null,
            f = null,
            u = null,
            m = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!h[t].n) {
              if ((a = o[t]) && (m.save(), m.ctxTransform(a.p), m.ctxOpacity(a.o)), this.fill) {
                for (a && a.fc ? c !== a.fc && (m.ctxFillStyle(a.fc), c = a.fc) : c !== this.values.fill && (c = this.values.fill, m.ctxFillStyle(this.values.fill)), r = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                  for (n = (p = l[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < n; s += 6) this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
                this.globalData.canvasContext.closePath(), m.ctxFill()
              }
              if (this.stroke) {
                for (a && a.sw ? u !== a.sw && (u = a.sw, m.ctxLineWidth(a.sw)) : u !== this.values.sWidth && (u = this.values.sWidth, m.ctxLineWidth(this.values.sWidth)), a && a.sc ? f !== a.sc && (f = a.sc, m.ctxStrokeStyle(a.sc)) : f !== this.values.stroke && (f = this.values.stroke, m.ctxStrokeStyle(this.values.stroke)), r = (l = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1)
                  for (n = (p = l[i]).length, this.globalData.canvasContext.moveTo(p[0], p[1]), s = 2; s < n; s += 6) this.globalData.canvasContext.bezierCurveTo(p[s], p[s + 1], p[s + 2], p[s + 3], p[s + 4], p[s + 5]);
                this.globalData.canvasContext.closePath(), m.ctxStroke()
              }
              a && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, i, r = t.getContext("2d"),
              s = this.img.width,
              n = this.img.height,
              a = s / n,
              o = this.assetData.w / this.assetData.h,
              h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            a > o && "xMidYMid slice" === h || a < o && "xMidYMid slice" !== h ? e = (i = n) * o : i = (e = s) / o, r.drawImage(this.img, (s - e) / 2, (n - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
          return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
          return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
          return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
          return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
          1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
          this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
          this.canvasContext.fillStyle = t
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
          this.canvasContext.strokeStyle = t
        }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
          this.canvasContext.lineWidth = t
        }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
          this.canvasContext.lineCap = t
        }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
          this.canvasContext.lineJoin = t
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
          this.canvasContext.miterLimit = t
        }, CanvasRendererBase.prototype.ctxFill = function(t) {
          this.canvasContext.fill(t)
        }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, i, r) {
          this.canvasContext.fillRect(t, e, i, r)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(t) {
          this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            e.width = "100%", e.height = "100%";
            var i = "0px 0px 0px";
            e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
          var i, r, s, n;
          if (this.reset(), t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var a = this.renderConfig.preserveAspectRatio.split(" "),
              o = a[1] || "meet",
              h = a[0] || "xMidYMid",
              l = h.substr(0, 4),
              p = h.substr(4);
            s = i / r, (n = this.transformCanvas.w / this.transformCanvas.h) > s && "meet" === o || n < s && "slice" === o ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === l && (n < s && "meet" === o || n > s && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (n < s && "meet" === o || n > s && "slice" === o) ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p && (n > s && "meet" === o || n < s && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p && (n > s && "meet" === o || n < s && "slice" === o) ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var t;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            var i;
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1)(this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var i = this.createItem(this.layers[t], this, this.globalData);
            e[t] = i, i.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var t = 2 * this._length,
            e = 0;
          for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
          this._length = t
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(t) {
          this.cArrPos -= 1;
          var e, i = this.stack[this.cArrPos],
            r = i.transform,
            s = this.cTr.props;
          for (e = 0; e < 16; e += 1) s[e] = r[e];
          if (t) {
            this.nativeContext.restore();
            var n = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit
          }
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || -1 !== i.opacity && this.currentOpacity !== i.opacity) && (this.nativeContext.globalAlpha = i.opacity, this.currentOpacity = i.opacity), this.currentFillStyle = i.fillStyle, this.currentStrokeStyle = i.strokeStyle, this.currentLineWidth = i.lineWidth, this.currentLineCap = i.lineCap, this.currentLineJoin = i.lineJoin, this.currentMiterLimit = i.miterLimit
        }, CVContextData.prototype.save = function(t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var i, r = this.stack[this.cArrPos];
          for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
          this.cArrPos += 1;
          var s = this.stack[this.cArrPos];
          s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit
        }, CVContextData.prototype.setOpacity = function(t) {
          this.stack[this.cArrPos].opacity = t
        }, CVContextData.prototype.setContext = function(t) {
          this.nativeContext = t
        }, CVContextData.prototype.fillStyle = function(t) {
          this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
        }, CVContextData.prototype.strokeStyle = function(t) {
          this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
        }, CVContextData.prototype.lineWidth = function(t) {
          this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
        }, CVContextData.prototype.lineCap = function(t) {
          this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
        }, CVContextData.prototype.lineJoin = function(t) {
          this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
        }, CVContextData.prototype.miterLimit = function(t) {
          this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
        }, CVContextData.prototype.transform = function(t) {
          this.transformMat.cloneFromProps(t);
          var e = this.cTr;
          this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
          var i = e.props;
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13])
        }, CVContextData.prototype.opacity = function(t) {
          var e = this.stack[this.cArrPos].opacity;
          e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function(t) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function(t, e, i, r) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, i, r)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var t, e = this.canvasContext;
          for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var t = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              t.transform = e, t.webkitTransform = e
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function() {},
          setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
          var t;
          this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var t;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
          var i, r, s, n, a, o = t.sh.v,
            h = t.transformers,
            l = o._length;
          if (!(l <= 1)) {
            for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), n = this.getTransformedPoint(h, o.i[i + 1]), a = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, n, a, e);
            o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), n = this.getTransformedPoint(h, o.i[0]), a = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, n, a, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, i, r, s) {
          this.getBoundsOfCurve(t, e, i, r);
          var n = this.shapeBoundingBox;
          s.x = bmMin(n.left, s.x), s.xMax = bmMax(n.right, s.xMax), s.y = bmMin(n.top, s.y), s.yMax = bmMax(n.bottom, s.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
          for (var s, n, a, o, h, l, p, c = [
              [t[0], r[0]],
              [t[1], r[1]]
            ], f = 0; f < 2; ++f) n = 6 * t[f] - 12 * e[f] + 6 * i[f], s = -3 * t[f] + 9 * e[f] - 9 * i[f] + 3 * r[f], a = 3 * e[f] - 3 * t[f], n |= 0, a |= 0, 0 == (s |= 0) && 0 === n || (0 === s ? (o = -a / n) > 0 && o < 1 && c[f].push(this.calculateF(o, t, e, i, r, f)) : (h = n * n - 4 * a * s) >= 0 && ((l = (-n + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && c[f].push(this.calculateF(l, t, e, i, r, f)), (p = (-n - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && c[f].push(this.calculateF(p, t, e, i, r, f))));
          this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(t, e, i, r, s, n) {
          return bmPow(1 - t, 3) * e[n] + 3 * bmPow(1 - t, 2) * t * i[n] + 3 * (1 - t) * bmPow(t, 2) * r[n] + bmPow(t, 3) * s[n]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var i, r = t.length;
          for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var i = 0;
          if (t.keyframes) {
            for (var r = 0; r < t.keyframes.length; r += 1) {
              var s = t.keyframes[r].s;
              s > i && (i = s)
            }
            i *= t.mult
          } else i = t.v * t.mult;
          e.x -= i, e.xMax += i, e.y -= i, e.yMax += i
        }, HShapeElement.prototype.currentBoxContains = function(t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var i = !1;
            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var r = this.shapeCont.style,
                s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              r.transform = s, r.webkitTransform = s
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), this.innerElem = t
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
          var r, s, n = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass;
            else {
              e.fontFamily = n.fFamily;
              var a = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = a
            } var h, l, p, c = t.l;
          s = c.length;
          var f, u = this.mHelper,
            m = "",
            d = 0;
          for (r = 0; r < s; r += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? p = (l = this.textSpans[d]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (l = this.textSpans[d], h = this.textPaths[d]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
              var y, g = this.globalData.fontManager.getCharData(t.finalText[r], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (y = g ? g.data : null, u.reset(), y && y.shapes && y.shapes.length && (f = y.shapes[0].it, u.scale(t.finalSize / 100, t.finalSize / 100), m = this.createPathShape(u, f), h.setAttribute("d", m)), this.isMasked) this.innerElem.appendChild(h);
              else {
                if (this.innerElem.appendChild(l), y && y.shapes) {
                  document.body.appendChild(p);
                  var v = p.getBBox();
                  p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                  var b = p.style,
                    x = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                  b.transform = x, b.webkitTransform = x, c[r].yOffset = v.y - 1
                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                l.appendChild(p)
              }
            } else if (h.textContent = c[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
            else {
              this.innerElem.appendChild(l);
              var S = h.style,
                P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              S.transform = P, S.webkitTransform = P
            }
            this.isMasked ? this.textSpans[d] = h : this.textSpans[d] = l, this.textSpans[d].style.display = "block", this.textPaths[d] = h, d += 1
          }
          for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var t;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
              var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              t.transform = e, t.webkitTransform = e
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var i, r, s, n, a, o = 0,
              h = this.textAnimator.renderedLetters,
              l = this.textProperty.currentData.l;
            for (r = l.length, i = 0; i < r; i += 1) l[i].n ? o += 1 : (n = this.textSpans[i], a = this.textPaths[i], s = h[o], o += 1, s._mdf.m && (this.isMasked ? n.setAttribute("transform", s.m) : (n.style.webkitTransform = s.m, n.style.transform = s.m)), n.style.opacity = s.o, s.sw && s._mdf.sw && a.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && a.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (a.setAttribute("fill", s.fc), a.style.color = s.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var p = this.innerElem.getBBox();
              if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                t.transform = c, t.webkitTransform = c
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var t, e, i, r, s = this.comp.threeDElements.length;
          for (t = 0; t < s; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              i = e.perspectiveElem.style, r = e.container.style;
              var n = this.pe.v + "px",
                a = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              i.perspective = n, i.webkitPerspective = n, r.transformOrigin = a, r.mozTransformOrigin = a, r.webkitTransformOrigin = a, i.transform = o, i.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var t, e, i = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
          if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var r = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var s;
              s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var n = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                a = [s[0] / n, s[1] / n, s[2] / n],
                o = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                h = Math.atan2(a[1], o),
                l = Math.atan2(a[0], -a[2]);
              this.mat.rotateY(l).rotateX(-h)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
              var c, f, u;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                  if (p) {
                    var m = this.mat.toCSS();
                    (u = c.container.style).transform = m, u.webkitTransform = m
                  }
                  this.pe._mdf && ((f = c.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
          var i = t.getBaseElement();
          if (i) {
            var r = this.layers[e];
            if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
            else if (this.threeDElements) this.addTo3dContainer(i, e);
            else {
              for (var s, n, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a], s = (this.layers[a].ddd ? this.getThreeDContainerByPos(a) : n.getBaseElement()) || s), a += 1;
              s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(t) {
          return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
          return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
          return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
          return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
          return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
          for (var e = 0, i = this.threeDElements.length; e < i;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
          var i, r, s = createTag("div");
          styleDiv(s);
          var n = createTag("div");
          if (styleDiv(n), "3d" === e) {
            (i = s.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
            var a = "50% 50%";
            i.webkitTransformOrigin = a, i.mozTransformOrigin = a, i.transformOrigin = a;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (r = n.style).transform = o, r.webkitTransform = o
          }
          s.appendChild(n);
          var h = {
            container: n,
            perspectiveElem: s,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(h), h
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, i = this.layers.length,
            r = "";
          for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var i = 0, r = this.threeDElements.length; i < r;) {
            if (e <= this.threeDElements[i].endPos) {
              for (var s, n = this.threeDElements[i].startPos; n < e;) this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n].getBaseElement()), n += 1;
              s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
              break
            }
            i += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            i = this.animationItem.wrapper,
            r = e.style;
          r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
          var s = createNS("svg");
          s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
          var n = createNS("defs");
          s.appendChild(n), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, i, r, s = this.animationItem.wrapper.offsetWidth,
            n = this.animationItem.wrapper.offsetHeight,
            a = s / n;
          this.globalData.compSize.w / this.globalData.compSize.h > a ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (n - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = n / this.globalData.compSize.h, e = n / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (n / this.globalData.compSize.h)) / 2, r = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var t, e = this.globalData.compSize.w,
              i = this.globalData.compSize.h,
              r = this.threeDElements.length;
            for (t = 0; t < r; t += 1) {
              var s = this.threeDElements[t].perspectiveElem.style;
              s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", s.perspective = s.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, i = t.length,
            r = createTag("div");
          for (e = 0; e < i; e += 1)
            if (t[e].xt) {
              var s = this.createComp(t[e], r, this.globalData.comp, null);
              s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
          for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
          i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function(t) {
          function e(e) {
            for (var i = 0, r = t.layers.length; i < r;) {
              if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
              i += 1
            }
            return null
          }
          return Object.defineProperty(e, "_name", {
            value: t.data.nm
          }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
        };

        function _typeof$2(t) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$2(t)
        }

        function seedRandom(t, e) {
          var i = this,
            r = 256,
            s = "random",
            n = e.pow(r, 6),
            a = e.pow(2, 52),
            o = 2 * a,
            h = 255;

          function l(t) {
            var e, i = t.length,
              s = this,
              n = 0,
              a = s.i = s.j = 0,
              o = s.S = [];
            for (i || (t = [i++]); n < r;) o[n] = n++;
            for (n = 0; n < r; n++) o[n] = o[a = h & a + t[n % i] + (e = o[n])], o[a] = e;
            s.g = function(t) {
              for (var e, i = 0, n = s.i, a = s.j, o = s.S; t--;) e = o[n = h & n + 1], i = i * r + o[h & (o[n] = o[a = h & a + e]) + (o[a] = e)];
              return s.i = n, s.j = a, i
            }
          }

          function p(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function c(t, e) {
            var i, r = [],
              s = _typeof$2(t);
            if (e && "object" == s)
              for (i in t) try {
                r.push(c(t[i], e - 1))
              } catch (t) {}
            return r.length ? r : "string" == s ? t : t + "\0"
          }

          function f(t, e) {
            for (var i, r = t + "", s = 0; s < r.length;) e[h & s] = h & (i ^= 19 * e[h & s]) + r.charCodeAt(s++);
            return u(e)
          }

          function u(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + s] = function(h, m, d) {
            var y = [],
              g = f(c((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [h, u(t)] : null === h ? function() {
                try {
                  var e = new Uint8Array(r);
                  return (i.crypto || i.msCrypto).getRandomValues(e), u(e)
                } catch (e) {
                  var s = i.navigator,
                    n = s && s.plugins;
                  return [+new Date, i, n, i.screen, u(t)]
                }
              }() : h, 3), y),
              v = new l(y),
              b = function() {
                for (var t = v.g(6), e = n, i = 0; t < a;) t = (t + i) * r, e *= r, i = v.g(1);
                for (; t >= o;) t /= 2, e /= 2, i >>>= 1;
                return (t + i) / e
              };
            return b.int32 = function() {
              return 0 | v.g(4)
            }, b.quick = function() {
              return v.g(4) / 4294967296
            }, b.double = b, f(u(v.S), t), (m.pass || d || function(t, i, r, n) {
              return n && (n.S && p(n, v), t.state = function() {
                return p(v, {})
              }), r ? (e[s] = t, i) : t
            })(b, g, "global" in m ? m.global : this == e, m.state)
          }, f(e.random(), t)
        }

        function initialize$2(t) {
          seedRandom([], t)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(t) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$1(t)
        }
        var ExpressionManager = function() {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null,
              _lottieGlobal = {};

            function resetFrame() {
              _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
              return "number" === t || e instanceof Number || "boolean" === t || "string" === t
            }

            function $bm_neg(t) {
              var e = _typeof$1(t);
              if ("number" === e || t instanceof Number || "boolean" === e) return -t;
              if ($bm_isInstanceOfArray(t)) {
                var i, r = t.length,
                  s = [];
                for (i = 0; i < r; i += 1) s[i] = -t[i];
                return s
              }
              return t.propType ? t.v : -t
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
              var i = _typeof$1(t),
                r = _typeof$1(e);
              if (isNumerable(i, t) && isNumerable(r, e) || "string" === i || "string" === r) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
              if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var s = 0, n = t.length, a = e.length, o = []; s < n || s < a;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(t, e) {
              var i = _typeof$1(t),
                r = _typeof$1(e);
              if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var s = 0, n = t.length, a = e.length, o = []; s < n || s < a;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var i, r, s, n = _typeof$1(t),
                a = _typeof$1(e);
              if (isNumerable(n, t) && isNumerable(a, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] * e;
                return i
              }
              if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t * e[r];
                return i
              }
              return 0
            }

            function div(t, e) {
              var i, r, s, n = _typeof$1(t),
                a = _typeof$1(e);
              if (isNumerable(n, t) && isNumerable(a, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] / e;
                return i
              }
              if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
                for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t / e[r];
                return i
              }
              return 0
            }

            function mod(t, e) {
              return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(t, e, i) {
              if (e > i) {
                var r = i;
                i = e, e = r
              }
              return Math.min(Math.max(t, e), i)
            }

            function radiansToDegrees(t) {
              return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
              return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
              if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
              var i;
              e || (e = helperLengthArray);
              var r = Math.min(t.length, e.length),
                s = 0;
              for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
              return Math.sqrt(s)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, i, r = t[0],
                s = t[1],
                n = t[2],
                a = Math.max(r, s, n),
                o = Math.min(r, s, n),
                h = (a + o) / 2;
              if (a === o) e = 0, i = 0;
              else {
                var l = a - o;
                switch (i = h > .5 ? l / (2 - a - o) : l / (a + o), a) {
                  case r:
                    e = (s - n) / l + (s < n ? 6 : 0);
                    break;
                  case s:
                    e = (n - r) / l + 2;
                    break;
                  case n:
                    e = (r - s) / l + 4
                }
                e /= 6
              }
              return [e, i, h, t[3]]
            }

            function hue2rgb(t, e, i) {
              return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function hslToRgb(t) {
              var e, i, r, s = t[0],
                n = t[1],
                a = t[2];
              if (0 === n) e = a, r = a, i = a;
              else {
                var o = a < .5 ? a * (1 + n) : a + n - a * n,
                  h = 2 * a - o;
                e = hue2rgb(h, o, s + 1 / 3), i = hue2rgb(h, o, s), r = hue2rgb(h, o, s - 1 / 3)
              }
              return [e, i, r, t[3]]
            }

            function linear(t, e, i, r, s) {
              if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
                var n = i;
                i = e, e = n
              }
              if (t <= e) return r;
              if (t >= i) return s;
              var a, o = i === e ? 0 : (t - e) / (i - e);
              if (!r.length) return r + (s - r) * o;
              var h = r.length,
                l = createTypedArray("float32", h);
              for (a = 0; a < h; a += 1) l[a] = r[a] + (s[a] - r[a]) * o;
              return l
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var i, r = e.length;
                t || (t = createTypedArray("float32", r));
                var s = createTypedArray("float32", r),
                  n = BMMath.random();
                for (i = 0; i < r; i += 1) s[i] = t[i] + n * (e[i] - t[i]);
                return s
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, i, r) {
              var s, n = t.length,
                a = shapePool.newElement();
              a.setPathData(!!r, n);
              var o, h, l = [0, 0];
              for (s = 0; s < n; s += 1) o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, a.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
              return a
            }

            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                  return thisProperty.v
                }
              }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function(t, e) {
                  var i, r, s = this.pv.length ? this.pv.length : 1,
                    n = createTypedArray("float32", s),
                    a = Math.floor(5 * time);
                  for (i = 0, r = 0; i < a;) {
                    for (r = 0; r < s; r += 1) n[r] += -e + 2 * e * BMMath.random();
                    i += 1
                  }
                  var o = 5 * time,
                    h = o - Math.floor(o),
                    l = createTypedArray("float32", s);
                  if (s > 1) {
                    for (r = 0; r < s; r += 1) l[r] = this.pv[r] + n[r] + (-e + 2 * e * BMMath.random()) * h;
                    return l
                  }
                  return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * h
                }.bind(this);

              function loopInDuration(t, e) {
                return loopIn(t, e, !0)
              }

              function loopOutDuration(t, e) {
                return loopOut(t, e, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(t, e) {
                var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
                return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
              }

              function easeOut(t, e, i, r, s) {
                return applyEase(easeOutBez, t, e, i, r, s)
              }

              function easeIn(t, e, i, r, s) {
                return applyEase(easeInBez, t, e, i, r, s)
              }

              function ease(t, e, i, r, s) {
                return applyEase(easeInOutBez, t, e, i, r, s)
              }

              function applyEase(t, e, i, r, s, n) {
                void 0 === s ? (s = i, n = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
                var a = t(e);
                if ($bm_isInstanceOfArray(s)) {
                  var o, h = s.length,
                    l = createTypedArray("float32", h);
                  for (o = 0; o < h; o += 1) l[o] = (n[o] - s[o]) * a + s[o];
                  return l
                }
                return (n - s) * a + s
              }

              function nearestKey(t) {
                var e, i, r, s = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
                  else {
                    for (e = 0; e < s - 1; e += 1) {
                      if (t === data.k[e].t) {
                        i = e + 1, r = data.k[e].t;
                        break
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                        break
                      }
                    } - 1 === i && (i = e + 1, r = data.k[e].t)
                  }
                else i = 0, r = 0;
                var n = {};
                return n.index = i, n.time = r / elem.comp.globalData.frameRate, n
              }

              function key(t) {
                var e, i, r;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (r = s.length, i = 0; i < r; i += 1) e[i] = s[i], e.value[i] = s[i];
                return e
              }

              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e
              }

              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
              }

              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
              }

              function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
              }

              function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(t) {
                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var t = {
              initExpressions: function(t) {
                var e = 0,
                  i = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                  e += 1
                }, t.renderer.globalData.popExpression = function() {
                  0 == (e -= 1) && function() {
                    var t, e = i.length;
                    for (t = 0; t < e; t += 1) i[t].release();
                    i.length = 0
                  }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                  -1 === i.indexOf(t) && i.push(t)
                }
              }
            };
            return t.resetFrame = ExpressionManager.resetFrame, t
          }(),
          MaskManagerInterface = function() {
            function t(t, e) {
              this._mask = t, this._data = e
            }
            return Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(e) {
                var i, r = createSizedArray(e.viewData.length),
                  s = e.viewData.length;
                for (i = 0; i < s; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
                return function(t) {
                  for (i = 0; i < s;) {
                    if (e.masksProperties[i].nm === t) return r[i];
                    i += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
              },
              e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function i(t, e, i) {
              Object.defineProperty(t, "velocity", {
                get: function() {
                  return e.getVelocityAtTime(e.comp.currentFrame)
                }
              }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                if (!t.numKeys) return 0;
                var s;
                s = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                var n = "unidimensional" === i ? new Number(s) : Object.assign({}, s);
                return n.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, n.value = "unidimensional" === i ? s[0] : s, n
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function r() {
              return t
            }
            return function(s) {
              return s ? "unidimensional" === s.propType ? function(e) {
                e && "pv" in e || (e = t);
                var r = 1 / e.mult,
                  s = e.pv * r,
                  n = new Number(s);
                return n.value = s, i(n, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), s = e.v * r, n.value !== s && ((n = new Number(s)).value = s, i(n, e, "unidimensional")), n
                  }
              }(s) : function(t) {
                t && "pv" in t || (t = e);
                var r = 1 / t.mult,
                  s = t.data && t.data.l || t.pv.length,
                  n = createTypedArray("float32", s),
                  a = createTypedArray("float32", s);
                return n.value = a, i(n, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < s; e += 1) a[e] = t.v[e] * r, n[e] = a[e];
                    return n
                  }
              }(s) : r
            }
          }(),
          TransformExpressionInterface = function(t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null
              }
            }
            var i, r, s, n;
            return Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz)
            }), Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r)
            }), Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx)
            }), Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry)
            }), Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s)
            }), t.p ? n = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? n() : [i(), r(), s ? s() : 0]
              }
            }), Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px)
            }), Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py)
            }), Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz)
            }), Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a)
            }), Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o)
            }), Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk)
            }), Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa)
            }), Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or)
            }), e
          },
          LayerExpressionInterface = function() {
            function t(t) {
              var e = new Matrix;
              return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
            }

            function e(t, e) {
              var i = this.getMatrix(e);
              return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.applyPoint(i, t)
            }

            function i(t, e) {
              var i = this.getMatrix(e);
              return this.applyPoint(i, t)
            }

            function r(t, e) {
              var i = this.getMatrix(e);
              return i.props[12] = 0, i.props[13] = 0, i.props[14] = 0, this.invertPoint(i, t)
            }

            function s(t, e) {
              var i = this.getMatrix(e);
              return this.invertPoint(i, t)
            }

            function n(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, r = this._elem.hierarchy.length;
                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, r = this._elem.hierarchy.length;
                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(t)
              }
              return t.inversePoint(e)
            }

            function o(t) {
              var e = new Matrix;
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var i, r = this._elem.hierarchy.length;
                for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t)
              }
              return e.inversePoint(t)
            }

            function h() {
              return [1, 1, 1, 1]
            }
            return function(l) {
              var p;

              function c(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return c.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return p;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return c.effect;
                  case "ADBE Text Properties":
                    return c.textInterface;
                  default:
                    return null
                }
              }
              c.getMatrix = t, c.invertPoint = a, c.applyPoint = n, c.toWorld = i, c.toWorldVec = e, c.fromWorld = s, c.fromWorldVec = r, c.toComp = i, c.fromComp = o, c.sampleImage = h, c.sourceRectAtTime = l.sourceRectAtTime.bind(l), c._elem = l;
              var f = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(c, {
                hasParent: {
                  get: function() {
                    return l.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return l.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(p, "rotation"),
                scale: getDescriptor(p, "scale"),
                position: getDescriptor(p, "position"),
                opacity: getDescriptor(p, "opacity"),
                anchorPoint: f,
                anchor_point: f,
                transform: {
                  get: function() {
                    return p
                  }
                },
                active: {
                  get: function() {
                    return l.isInRange
                  }
                }
              }), c.startTime = l.data.st, c.index = l.data.ind, c.source = l.data.refId, c.height = 0 === l.data.ty ? l.data.h : 100, c.width = 0 === l.data.ty ? l.data.w : 100, c.inPoint = l.data.ip / l.comp.globalData.frameRate, c.outPoint = l.data.op / l.comp.globalData.frameRate, c._name = l.data.nm, c.registerMaskInterface = function(t) {
                c.mask = new MaskManagerInterface(t, l)
              }, c.registerEffectsInterface = function(t) {
                c.effect = t
              }, c
            }
          }(),
          propertyGroupFactory = function(t, e) {
            return function(i) {
              return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1)
            }
          },
          PropertyInterface = function(t, e) {
            var i = {
              _name: t
            };
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function t(i, r, s, n) {
              function a(t) {
                for (var e = i.ef, r = 0, s = e.length; r < s;) {
                  if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? l[r] : l[r]();
                  r += 1
                }
                throw new Error
              }
              var o, h = propertyGroupFactory(a, s),
                l = [],
                p = i.ef.length;
              for (o = 0; o < p; o += 1) 5 === i.ef[o].ty ? l.push(t(i.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, n)) : l.push(e(r.effectElements[o], i.ef[o].ty, n, h));
              return "ADBE Color Control" === i.mn && Object.defineProperty(a, "color", {
                get: function() {
                  return l[0]()
                }
              }), Object.defineProperties(a, {
                numProperties: {
                  get: function() {
                    return i.np
                  }
                },
                _name: {
                  value: i.nm
                },
                propertyGroup: {
                  value: h
                }
              }), a.enabled = 0 !== i.en, a.active = a.enabled, a
            }

            function e(t, e, i, r) {
              var s = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                function() {
                  return 10 === e ? i.comp.compInterface(t.p.v) : s()
                }
            }
            return {
              createEffectsInterface: function(e, i) {
                if (e.effectsManager) {
                  var r, s = [],
                    n = e.data.ef,
                    a = e.effectsManager.effectElements.length;
                  for (r = 0; r < a; r += 1) s.push(t(n[r], e.effectsManager.effectElements[r], i, e));
                  var o = e.data.ef || [],
                    h = function(t) {
                      for (r = 0, a = o.length; r < a;) {
                        if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return s[r];
                        r += 1
                      }
                      return null
                    };
                  return Object.defineProperty(h, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), h
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(t, e, i) {
            var r = e.sh;

            function s(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null
            }
            var n = propertyGroupFactory(s, i);
            return r.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(s, {
              path: {
                get: function() {
                  return r.k && r.getValue(), r
                }
              },
              shape: {
                get: function() {
                  return r.k && r.getValue(), r
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: i
              }
            }), s
          },
          ShapeExpressionInterface = function() {
            function t(t, a, f) {
              var u, m = [],
                d = t ? t.length : 0;
              for (u = 0; u < d; u += 1) "gr" === t[u].ty ? m.push(e(t[u], a[u], f)) : "fl" === t[u].ty ? m.push(i(t[u], a[u], f)) : "st" === t[u].ty ? m.push(s(t[u], a[u], f)) : "tm" === t[u].ty ? m.push(n(t[u], a[u], f)) : "tr" === t[u].ty || ("el" === t[u].ty ? m.push(o(t[u], a[u], f)) : "sr" === t[u].ty ? m.push(h(t[u], a[u], f)) : "sh" === t[u].ty ? m.push(ShapePathInterface(t[u], a[u], f)) : "rc" === t[u].ty ? m.push(l(t[u], a[u], f)) : "rd" === t[u].ty ? m.push(p(t[u], a[u], f)) : "rp" === t[u].ty ? m.push(c(t[u], a[u], f)) : "gf" === t[u].ty ? m.push(r(t[u], a[u], f)) : m.push((t[u], a[u], function() {
                return null
              })));
              return m
            }

            function e(e, i, r) {
              var s = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return s.content;
                  default:
                    return s.transform
                }
              };
              s.propertyGroup = propertyGroupFactory(s, r);
              var n = function(e, i, r) {
                  var s, n = function(t) {
                    for (var e = 0, i = s.length; e < i;) {
                      if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t) return s[e];
                      e += 1
                    }
                    return "number" == typeof t ? s[t - 1] : null
                  };
                  n.propertyGroup = propertyGroupFactory(n, r), s = t(e.it, i.it, n.propertyGroup), n.numProperties = s.length;
                  var o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], n.propertyGroup);
                  return n.transform = o, n.propertyIndex = e.cix, n._name = e.nm, n
                }(e, i, s.propertyGroup),
                o = a(e.it[e.it.length - 1], i.it[i.it.length - 1], s.propertyGroup);
              return s.content = n, s.transform = o, Object.defineProperty(s, "_name", {
                get: function() {
                  return e.nm
                }
              }), s.numProperties = e.np, s.propertyIndex = e.ix, s.nm = e.nm, s.mn = e.mn, s
            }

            function i(t, e, i) {
              function r(t) {
                return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
              }
              return Object.defineProperties(r, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
            }

            function r(t, e, i) {
              function r(t) {
                return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
              }
              return Object.defineProperties(r, {
                startPoint: {
                  get: ExpressionPropertyInterface(e.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(e.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.s.setGroupProperty(PropertyInterface("Start Point", i)), e.e.setGroupProperty(PropertyInterface("End Point", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), r
            }

            function s(t, e, i) {
              var r, s = propertyGroupFactory(l, i),
                n = propertyGroupFactory(h, s);

              function a(i) {
                Object.defineProperty(h, t.d[i].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[i].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                h = {};
              for (r = 0; r < o; r += 1) a(r), e.d.dataProps[r].p.setGroupProperty(n);

              function l(t) {
                return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
              }
              return Object.defineProperties(l, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(e.w)
                },
                dash: {
                  get: function() {
                    return h
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", s)), e.o.setGroupProperty(PropertyInterface("Opacity", s)), e.w.setGroupProperty(PropertyInterface("Stroke Width", s)), l
            }

            function n(t, e, i) {
              function r(e) {
                return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
              }
              var s = propertyGroupFactory(r, i);
              return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", s)), e.e.setGroupProperty(PropertyInterface("End", s)), e.o.setGroupProperty(PropertyInterface("Offset", s)), r.propertyIndex = t.ix, r.propertyGroup = i, Object.defineProperties(r, {
                start: {
                  get: ExpressionPropertyInterface(e.s)
                },
                end: {
                  get: ExpressionPropertyInterface(e.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function a(t, e, i) {
              function r(e) {
                return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
              }
              var s = propertyGroupFactory(r, i);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)), Object.defineProperties(r, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa)
                },
                _name: {
                  value: t.nm
                }
              }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = i, r
            }

            function o(t, e, i) {
              function r(e) {
                return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
              }
              var s = propertyGroupFactory(r, i);
              r.propertyIndex = t.ix;
              var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return n.s.setGroupProperty(PropertyInterface("Size", s)), n.p.setGroupProperty(PropertyInterface("Position", s)), Object.defineProperties(r, {
                size: {
                  get: ExpressionPropertyInterface(n.s)
                },
                position: {
                  get: ExpressionPropertyInterface(n.p)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function h(t, e, i) {
              function r(e) {
                return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
              }
              var s = propertyGroupFactory(r, i),
                n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return r.propertyIndex = t.ix, n.or.setGroupProperty(PropertyInterface("Outer Radius", s)), n.os.setGroupProperty(PropertyInterface("Outer Roundness", s)), n.pt.setGroupProperty(PropertyInterface("Points", s)), n.p.setGroupProperty(PropertyInterface("Position", s)), n.r.setGroupProperty(PropertyInterface("Rotation", s)), t.ir && (n.ir.setGroupProperty(PropertyInterface("Inner Radius", s)), n.is.setGroupProperty(PropertyInterface("Inner Roundness", s))), Object.defineProperties(r, {
                position: {
                  get: ExpressionPropertyInterface(n.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(n.r)
                },
                points: {
                  get: ExpressionPropertyInterface(n.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(n.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(n.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(n.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(n.is)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function l(t, e, i) {
              function r(e) {
                return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
              }
              var s = propertyGroupFactory(r, i),
                n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return r.propertyIndex = t.ix, n.p.setGroupProperty(PropertyInterface("Position", s)), n.s.setGroupProperty(PropertyInterface("Size", s)), n.r.setGroupProperty(PropertyInterface("Rotation", s)), Object.defineProperties(r, {
                position: {
                  get: ExpressionPropertyInterface(n.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(n.r)
                },
                size: {
                  get: ExpressionPropertyInterface(n.s)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function p(t, e, i) {
              function r(e) {
                return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
              }
              var s = propertyGroupFactory(r, i),
                n = e;
              return r.propertyIndex = t.ix, n.rd.setGroupProperty(PropertyInterface("Radius", s)), Object.defineProperties(r, {
                radius: {
                  get: ExpressionPropertyInterface(n.rd)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function c(t, e, i) {
              function r(e) {
                return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
              }
              var s = propertyGroupFactory(r, i),
                n = e;
              return r.propertyIndex = t.ix, n.c.setGroupProperty(PropertyInterface("Copies", s)), n.o.setGroupProperty(PropertyInterface("Offset", s)), Object.defineProperties(r, {
                copies: {
                  get: ExpressionPropertyInterface(n.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(n.o)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }
            return function(e, i, r) {
              var s;

              function n(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : s[t - 1];
                for (var e = 0, i = s.length; e < i;) {
                  if (s[e]._name === t) return s[e];
                  e += 1
                }
                return null
              }
              return n.propertyGroup = propertyGroupFactory(n, (function() {
                return r
              })), s = t(e, i, n.propertyGroup), n.numProperties = s.length, n._name = "Contents", n
            }
          }(),
          TextExpressionInterface = function(t) {
            var e;

            function i(t) {
              return "ADBE Text Document" === t ? i.sourceText : null
            }
            return Object.defineProperty(i, "sourceText", {
              get: function() {
                t.textProperty.getValue();
                var i = t.textProperty.currentData.t;
                return e && i === e.value || ((e = new String(i)).value = i || new String(i), Object.defineProperty(e, "style", {
                  get: function() {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    }
                  }
                })), e
              }
            }), i
          };

        function _typeof(t) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof(t)
        }
        var FootageInterface = (dataInterfaceFactory = function(t) {
            function e(t) {
              return "Outline" === t ? e.outlineInterface() : null
            }
            return e._name = "Outline", e.outlineInterface = function(t) {
              var e = "",
                i = t.getFootageData();

              function r(t) {
                if (i[t]) return e = t, "object" === _typeof(i = i[t]) ? r : i;
                var s = t.indexOf(e);
                if (-1 !== s) {
                  var n = parseInt(t.substr(s + e.length), 10);
                  return "object" === _typeof(i = i[n]) ? r : i
                }
                return ""
              }
              return function() {
                return e = "", i = t.getFootageData(), r
              }
            }(t), e
          }, function(t) {
            function e(t) {
              return "Data" === t ? e.dataInterface : null
            }
            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(t) {
          return interfaces[t] || null
        }
        var expressionHelpers = {
          searchExpressions: function(t, e, i) {
            e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)))
          },
          getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t),
              i = this.getValueAtTime(t + -.01),
              r = 0;
            if (e.length) {
              var s;
              for (s = 0; s < e.length; s += 1) r += Math.pow(i[s] - e[s], 2);
              r = 100 * Math.sqrt(r)
            } else r = 0;
            return r
          },
          getVelocityAtTime: function(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, i, r = -.001,
              s = this.getValueAtTime(t),
              n = this.getValueAtTime(t + r);
            if (s.length)
              for (e = createTypedArray("float32", s.length), i = 0; i < s.length; i += 1) e[i] = (n[i] - s[i]) / r;
            else e = (n - s) / r;
            return e
          },
          getValueAtTime: function(t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(t) {
            this.propertyGroup = t
          }
        };

        function addPropertyDecorator() {
          function t(t, e, i) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r, s, n, a, o, h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[l.length - 1].t;
            if (h <= p) return this.pv;
            if (i ? s = p - (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((h - s) / r) % 2 != 0) return this.getValueAtTime((r - (h - s) % r + s) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0),
                  m = Math.floor((h - s) / r);
                if (this.pv.length) {
                  for (a = (o = new Array(c.length)).length, n = 0; n < a; n += 1) o[n] = (f[n] - c[n]) * m + u[n];
                  return o
                }
                return (f - c) * m + u
              }
              if ("continue" === t) {
                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (a = (o = new Array(d.length)).length, n = 0; n < a; n += 1) o[n] = d[n] + (d[n] - y[n]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return d + (h - p) / .001 * (d - y)
              }
            }
            return this.getValueAtTime(((h - s) % r + s) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, i) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r, s, n, a, o, h = this.comp.renderedFrame,
              l = this.keyframes,
              p = l[0].t;
            if (h >= p) return this.pv;
            if (i ? s = p + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), r = (s = l[e].t) - p), "pingpong" === t) {
              if (Math.floor((p - h) / r) % 2 == 0) return this.getValueAtTime(((p - h) % r + p) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime((r - (p - h) % r + p) / this.comp.globalData.frameRate, 0),
                  m = Math.floor((p - h) / r) + 1;
                if (this.pv.length) {
                  for (a = (o = new Array(c.length)).length, n = 0; n < a; n += 1) o[n] = u[n] - (f[n] - c[n]) * m;
                  return o
                }
                return u - (f - c) * m
              }
              if ("continue" === t) {
                var d = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                  y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (a = (o = new Array(d.length)).length, n = 0; n < a; n += 1) o[n] = d[n] + (d[n] - y[n]) * (p - h) / .001;
                  return o
                }
                return d + (d - y) * (p - h) / .001
              }
            }
            return this.getValueAtTime((r - ((p - h) % r + p)) / this.comp.globalData.frameRate, 0)
          }

          function i(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var i, r, s = this.comp.renderedFrame / this.comp.globalData.frameRate,
              n = s - t,
              a = e > 1 ? (s + t - n) / (e - 1) : 1,
              o = 0,
              h = 0;
            for (i = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (r = this.getValueAtTime(n + o * a), this.pv.length)
                for (h = 0; h < this.pv.length; h += 1) i[h] += r[h];
              else i += r;
              o += 1
            }
            if (this.pv.length)
              for (h = 0; h < this.pv.length; h += 1) i[h] /= e;
            else i /= e;
            return i
          }

          function r(t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var i = this.a.getValueAtTime(t);
              e.translate(-i[0] * this.a.mult, -i[1] * this.a.mult, i[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var r = this.s.getValueAtTime(t);
              e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var s = this.sk.getValueAtTime(t),
                n = this.sa.getValueAtTime(t);
              e.skewFromAxis(-s * this.sk.mult, n * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var a = this.r.getValueAtTime(t);
              e.rotate(-a * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                h = this.ry.getValueAtTime(t),
                l = this.rx.getValueAtTime(t),
                p = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(t),
                f = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var u = this.pz.getValueAtTime(t);
                e.translate(c * this.px.mult, f * this.py.mult, -u * this.pz.mult)
              } else e.translate(c * this.px.mult, f * this.py.mult, 0)
            } else {
              var m = this.p.getValueAtTime(t);
              e.translate(m[0] * this.p.mult, m[1] * this.p.mult, -m[2] * this.p.mult)
            }
            return e
          }

          function s() {
            return this.v.clone(new Matrix)
          }
          var n = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, i) {
            var a = n(t, e, i);
            return a.dynamicProperties.length ? a.getValueAtTime = r.bind(a) : a.getValueAtTime = s.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a
          };
          var a = PropertyFactory.getProp;
          PropertyFactory.getProp = function(r, s, n, o, h) {
            var l = a(r, s, n, o, h);
            l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = i, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = 1 === s.a ? s.k.length : 0, l.propertyIndex = s.ix;
            var p = 0;
            return 0 !== n && (p = createTypedArray("float32", 1 === s.a ? s.k[0].s.length : s.k.length)), l._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: p
            }, expressionHelpers.searchExpressions(r, s, l), l.k && h.addDynamicProperty(l), l
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            h = ShapePropertyFactory.getKeyframedConstructorFunction();

          function l() {}
          l.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var i, r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0));
              var s = r._length,
                n = r[t],
                a = r.v,
                o = createSizedArray(s);
              for (i = 0; i < s; i += 1) o[i] = "i" === t || "o" === t ? [n[i][0] - a[i][0], n[i][1] - a[i][1]] : [n[i][0], n[i][1]];
              return o
            },
            points: function(t) {
              return this.vertices("v", t)
            },
            inTangents: function(t) {
              return this.vertices("i", t)
            },
            outTangents: function(t) {
              return this.vertices("o", t)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(t, e) {
              var i = this.v;
              void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
              for (var r, s = this._segmentsLength, n = s.lengths, a = s.totalLength * t, o = 0, h = n.length, l = 0; o < h;) {
                if (l + n[o].addedLength > a) {
                  var p = o,
                    c = i.c && o === h - 1 ? 0 : o + 1,
                    f = (a - l) / n[o].addedLength;
                  r = bez.getPointInSegment(i.v[p], i.v[c], i.o[p], i.i[c], f, n[o]);
                  break
                }
                l += n[o].addedLength, o += 1
              }
              return r || (r = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), r
            },
            vectorOnPath: function(t, e, i) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var r = this.pointOnPath(t, e),
                s = this.pointOnPath(t + .001, e),
                n = s[0] - r[0],
                a = s[1] - r[1],
                o = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
              return 0 === o ? [0, 0] : "tangent" === i ? [n / o, a / o] : [-a / o, n / o]
            },
            tangentOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var p = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, i, r, s) {
            var n = p(t, e, i, r, s);
            return n.propertyIndex = e.ix, n.lock = !1, 3 === i ? expressionHelpers.searchExpressions(t, e.pt, n) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, n), n.k && t.addDynamicProperty(n), n
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(t, e) {
            var i = this.calculateExpression(e);
            if (t.t !== i) {
              var r = {};
              return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r
            }
            return t
          }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
              e = this.searchExpressions();
            return this.kf = t || e, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(t, e) {
            var i, r, s = createNS("feMerge");
            for (s.setAttribute("result", t), r = 0; r < e.length; r += 1)(i = createNS("feMergeNode")).setAttribute("in", e[r]), s.appendChild(i), s.appendChild(i);
            return s
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, i, r, s) {
          this.filterManager = e;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", r + "_tint_1"), t.appendChild(n), (n = createNS("feColorMatrix")).setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", r + "_tint_2"), t.appendChild(n), this.matrixFilter = n;
          var a = this.createMergeNode(r, [s, r + "_tint_1", r + "_tint_2"]);
          t.appendChild(a)
        }

        function SVGFillFilter(t, e, i, r) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", r), t.appendChild(s), this.matrixFilter = s
        }

        function SVGStrokeEffect(t, e, i) {
          this.initialized = !1, this.filterManager = e, this.elem = i, this.paths = []
        }

        function SVGTritoneFilter(t, e, i, r) {
          this.filterManager = e;
          var s = createNS("feColorMatrix");
          s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
          var n = createNS("feComponentTransfer");
          n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", r), this.matrixFilter = n;
          var a = createNS("feFuncR");
          a.setAttribute("type", "table"), n.appendChild(a), this.feFuncR = a;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), n.appendChild(o), this.feFuncG = o;
          var h = createNS("feFuncB");
          h.setAttribute("type", "table"), n.appendChild(h), this.feFuncB = h, t.appendChild(n)
        }

        function SVGProLevelsFilter(t, e, i, r) {
          this.filterManager = e;
          var s = this.filterManager.effectElements,
            n = createNS("feComponentTransfer");
          (s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n)), (s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && ((n = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", r), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
        }

        function SVGDropShadowEffect(t, e, i, r, s) {
          var n = e.container.globalData.renderConfig.filterSize,
            a = e.data.fs || n;
          t.setAttribute("x", a.x || n.x), t.setAttribute("y", a.y || n.y), t.setAttribute("width", a.width || n.width), t.setAttribute("height", a.height || n.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", r + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var h = createNS("feOffset");
          h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", r + "_drop_shadow_1"), h.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
          var l = createNS("feFlood");
          l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
          var p = createNS("feComposite");
          p.setAttribute("in", r + "_drop_shadow_3"), p.setAttribute("in2", r + "_drop_shadow_2"), p.setAttribute("operator", "in"), p.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(p);
          var c = this.createMergeNode(r, [r + "_drop_shadow_4", s]);
          t.appendChild(c)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              i = this.filterManager.effectElements[1].p.v,
              r = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"), this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              i = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var t, e, i, r, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = 1 + (i = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: i
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var n = createNS("mask"),
              a = createElementID();
            n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); s[0];) o.appendChild(s[0]);
            this.elem.layerElement.appendChild(o), this.masker = n, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) this.elem.layerElement.removeChild(s[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var i, r, s = this.paths.length;
          for (e = 0; e < s; e += 1)
            if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
              var n;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var a = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  h = r.getTotalLength();
                n = "0 0 0 " + h * a + " ";
                var l, p = h * (o - a),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  f = Math.floor(p / c);
                for (l = 0; l < f; l += 1) n += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                n += "0 " + 10 * h + " 0 0"
              } else n = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              r.setAttribute("stroke-dasharray", n)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var u = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * u[0]) + "," + bmFloor(255 * u[1]) + "," + bmFloor(255 * u[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              i = this.filterManager.effectElements[1].p.v,
              r = this.filterManager.effectElements[2].p.v,
              s = r[0] + " " + i[0] + " " + e[0],
              n = r[1] + " " + i[1] + " " + e[1],
              a = r[2] + " " + i[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var i = createNS(t);
          return i.setAttribute("type", "table"), e.appendChild(i), i
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, s) {
          for (var n, a, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
              length: 256
            }), c = 0, f = s - r, u = e - t; o <= 256;) a = (n = o / 256) <= h ? u < 0 ? s : r : n >= l ? u < 0 ? r : s : r + f * Math.pow((n - t) / u, 1 / i), p[c] = a, c += 1, o += 256 / 255;
          return p.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e, i = this.filterManager.effectElements;
            this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var i = this.filterManager.effectElements[3].p.v,
                r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                s = i * Math.cos(r),
                n = i * Math.sin(r);
              this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", n)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, i) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
        }

        function SVGGaussianBlurEffect(t, e, i, r) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var s = createNS("feGaussianBlur");
          s.setAttribute("result", r), t.appendChild(s), this.feGaussianBlur = s
        }

        function TransformEffect() {}

        function SVGTransformEffect(t, e) {
          this.init(e)
        }

        function CVTransformEffect(t) {
          this.init(t)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(t) {
          for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
          var i = t.layerElement.parentNode;
          if (i) {
            for (var r, s = i.children, n = 0, a = s.length; n < a && s[n] !== t.layerElement;) n += 1;
            n <= a - 2 && (r = s[n + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var i = createElementID(),
              r = createNS("mask");
            r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var s = t.globalData.defs;
            s.appendChild(r);
            var n = createNS("symbol");
            n.setAttribute("id", i), this.replaceInParent(e, i), n.appendChild(e.layerElement), s.appendChild(n);
            var a = createNS("use");
            a.setAttribute("href", "#" + i), r.appendChild(a), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
              i = this.filterManager.effectElements[1].p.v,
              r = 3 == i ? 0 : e,
              s = 2 == i ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
            var n = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", n)
          }
        }, TransformEffect.prototype.init = function(t) {
          this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
          if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
            var e = this.effectsManager.effectElements,
              i = e[0].p.v,
              r = e[1].p.v,
              s = 1 === e[2].p.v,
              n = e[3].p.v,
              a = s ? n : e[4].p.v,
              o = e[5].p.v,
              h = e[6].p.v,
              l = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(.01 * a, .01 * n, 1), this.matrix.rotate(-l * degToRads), this.matrix.skewFromAxis(-o * degToRads, (h + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    13517: (t, e, i) => {
      "use strict";
      i.d(e, {
        z: () => n
      });
      var r = i(70181),
        s = i(40296);

      function n(t, {
        layout: e,
        layoutId: i
      }) {
        return s.f.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!r.H[t] || "opacity" === t)
      }
    },
    14646: (t, e, i) => {
      "use strict";

      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function s(t, e) {
        const i = t.indexOf(e);
        i > -1 && t.splice(i, 1)
      }
      i.d(e, {
        Ai: () => s,
        Kq: () => r
      })
    },
    14680: (t, e, i) => {
      "use strict";
      i.d(e, {
        J: () => a
      });
      var r = i(81982),
        s = i(53580),
        n = i(21763);

      function a(t, e) {
        var i;
        let a = (0, n.D)(t);
        return a !== s.p && (a = r.f), null === (i = a.getAnimatableNone) || void 0 === i ? void 0 : i.call(a, e)
      }
    },
    15582: (t, e, i) => {
      "use strict";
      i.d(e, {
        x: () => n
      });
      var r = i(13517),
        s = i(29592);

      function n(t) {
        const {
          style: e
        } = t, i = {};
        for (const n in e)((0, s.S)(e[n]) || (0, r.z)(n, t)) && (i[n] = e[n]);
        return i
      }
    },
    15634: (t, e, i) => {
      "use strict";
      i.d(e, {
        Y: () => s
      });
      var r = i(54012);

      function s(t) {
        for (const e in t) "projectionNodeConstructor" === e ? r.B.projectionNodeConstructor = t[e] : r.B[e].Component = t[e]
      }
    },
    15822: (t, e, i) => {
      "use strict";

      function r(t) {
        return void 0 === t || 1 === t
      }

      function s({
        scale: t,
        scaleX: e,
        scaleY: i
      }) {
        return !r(t) || !r(e) || !r(i)
      }

      function n(t) {
        return s(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function a(t) {
        return o(t.x) || o(t.y)
      }

      function o(t) {
        return t && "0%" !== t
      }
      i.d(e, {
        HD: () => n,
        vF: () => a,
        vk: () => s
      })
    },
    16660: (t, e, i) => {
      "use strict";
      i.d(e, {
        po: () => n,
        tn: () => o,
        yT: () => a
      });
      var r = i(41585),
        s = i(90306);
      const n = t => 1 - Math.sin(Math.acos(t)),
        a = (0, s.G)(n),
        o = (0, r.V)(a)
    },
    17761: (t, e, i) => {
      "use strict";
      i.d(e, {
        f: () => r
      });
      const r = t => 1e3 * t
    },
    19155: (t, e, i) => {
      "use strict";
      i.d(e, {
        Q: () => s
      });
      const r = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function s(t) {
        return "string" == typeof t && !t.includes("-") && !!(r.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
    },
    19203: (t, e, i) => {
      "use strict";
      i.d(e, {
        d9: () => h,
        z2: () => n
      });
      var r = i(4826);

      function s(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const n = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        a = 4;

      function o(t, e, i = 1) {
        (0, r.V)(i <= a, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [h, l] = function(t) {
          const e = n.exec(t);
          if (!e) return [, ];
          const [, i, r] = e;
          return [i, r]
        }(t);
        if (!h) return;
        const p = window.getComputedStyle(e).getPropertyValue(h);
        return p ? p.trim() : s(l) ? o(l, e, i + 1) : l
      }

      function h(t, {
        ...e
      }, i) {
        const r = t.current;
        if (!(r instanceof Element)) return {
          target: e,
          transitionEnd: i
        };
        i && (i = {
          ...i
        }), t.values.forEach((t => {
          const e = t.get();
          if (!s(e)) return;
          const i = o(e, r);
          i && t.set(i)
        }));
        for (const t in e) {
          const n = e[t];
          if (!s(n)) continue;
          const a = o(n, r);
          a && (e[t] = a, i && void 0 === i[t] && (i[t] = n))
        }
        return {
          target: e,
          transitionEnd: i
        }
      }
    },
    19651: (t, e, i) => {
      "use strict";
      i.d(e, {
        l: () => s
      });
      var r = i(62229);

      function s(t) {
        return (0, r.useEffect)((() => () => t()), [])
      }
    },
    20928: (t, e, i) => {
      "use strict";

      function r({
        top: t,
        left: e,
        right: i,
        bottom: r
      }) {
        return {
          x: {
            min: e,
            max: i
          },
          y: {
            min: t,
            max: r
          }
        }
      }

      function s({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        }
      }

      function n(t, e) {
        if (!e) return t;
        const i = e({
            x: t.left,
            y: t.top
          }),
          r = e({
            x: t.right,
            y: t.bottom
          });
        return {
          top: i.y,
          left: i.x,
          bottom: r.y,
          right: r.x
        }
      }
      i.d(e, {
        FY: () => r,
        bS: () => n,
        pA: () => s
      })
    },
    21763: (t, e, i) => {
      "use strict";
      i.d(e, {
        D: () => a
      });
      var r = i(34219),
        s = i(53580);
      const n = {
          ...i(59782).W,
          color: r.y,
          backgroundColor: r.y,
          outlineColor: r.y,
          fill: r.y,
          stroke: r.y,
          borderColor: r.y,
          borderTopColor: r.y,
          borderRightColor: r.y,
          borderBottomColor: r.y,
          borderLeftColor: r.y,
          filter: s.p,
          WebkitFilter: s.p
        },
        a = t => n[t]
    },
    22729: (t, e, i) => {
      "use strict";

      function r(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      i.d(e, {
        f: () => r
      })
    },
    24718: (t, e, i) => {
      "use strict";
      i.d(e, {
        n: () => E
      });
      var r = i(80985),
        s = i(3902),
        n = i(77863),
        a = i(53372),
        o = i(81298);

      function h(t, e, i) {
        return (s, a) => {
          (0, n.E)(s) && !(0, o.D3)() && (t.animationState && t.animationState.setActive(r.J.Hover, e), i && i(s, a))
        }
      }
      var l = i(62229);
      const p = (t, e) => !!e && (t === e || p(t, e.parentElement));
      var c = i(19651),
        f = i(95611),
        u = i(39318);
      const m = new Set,
        d = new WeakMap,
        y = new WeakMap,
        g = t => {
          const e = d.get(t.target);
          e && e(t)
        },
        v = t => {
          t.forEach(g)
        };
      const b = {
        some: 0,
        all: 1
      };

      function x(t, e, i, {
        root: s,
        margin: n,
        amount: a = "some",
        once: o
      }) {
        (0, l.useEffect)((() => {
          if (!t || !i.current) return;
          const h = {
            root: null == s ? void 0 : s.current,
            rootMargin: n,
            threshold: "number" == typeof a ? a : b[a]
          };
          return function(t, e, i) {
            const r = function({
              root: t,
              ...e
            }) {
              const i = t || document;
              y.has(i) || y.set(i, {});
              const r = y.get(i),
                s = JSON.stringify(e);
              return r[s] || (r[s] = new IntersectionObserver(v, {
                root: t,
                ...e
              })), r[s]
            }(e);
            return d.set(t, i), r.observe(t), () => {
              d.delete(t), r.unobserve(t)
            }
          }(i.current, h, (t => {
            const {
              isIntersecting: s
            } = t;
            if (e.isInView === s) return;
            if (e.isInView = s, o && !s && e.hasEnteredView) return;
            s && (e.hasEnteredView = !0), i.animationState && i.animationState.setActive(r.J.InView, s);
            const n = i.getProps(),
              a = s ? n.onViewportEnter : n.onViewportLeave;
            a && a(t)
          }))
        }), [t, s, n, a])
      }

      function S(t, e, i, {
        fallback: s = !0
      }) {
        (0, l.useEffect)((() => {
          var n;
          t && s && ("production" !== u._ && (n = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", m.has(n) || (console.warn(n), m.add(n))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = i.getProps();
            t && t(null), i.animationState && i.animationState.setActive(r.J.InView, !0)
          })))
        }), [t])
      }
      var P = i(56822);
      const E = {
        inView: (0, P.n)((function({
          visualElement: t,
          whileInView: e,
          onViewportEnter: i,
          onViewportLeave: r,
          viewport: s = {}
        }) {
          const n = (0, l.useRef)({
            hasEnteredView: !1,
            isInView: !1
          });
          let a = Boolean(e || i || r);
          s.once && n.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? S : x)(a, n.current, t, s)
        })),
        tap: (0, P.n)((function({
          onTap: t,
          onTapStart: e,
          onTapCancel: i,
          whileTap: s,
          visualElement: n
        }) {
          const h = t || e || i || s,
            u = (0, l.useRef)(!1),
            m = (0, l.useRef)(null),
            d = {
              passive: !(e || t || i || x)
            };

          function y() {
            m.current && m.current(), m.current = null
          }

          function g() {
            return y(), u.current = !1, n.animationState && n.animationState.setActive(r.J.Tap, !1), !(0, o.D3)()
          }

          function v(e, r) {
            g() && (p(n.current, e.target) ? t && t(e, r) : i && i(e, r))
          }

          function b(t, e) {
            g() && i && i(t, e)
          }

          function x(t, i) {
            y(), u.current || (u.current = !0, m.current = (0, f.F)((0, a.h)(window, "pointerup", v, d), (0, a.h)(window, "pointercancel", b, d)), n.animationState && n.animationState.setActive(r.J.Tap, !0), e && e(t, i))
          }(0, a.B)(n, "pointerdown", h ? x : void 0, d), (0, c.l)(y)
        })),
        focus: (0, P.n)((function({
          whileFocus: t,
          visualElement: e
        }) {
          const {
            animationState: i
          } = e;
          (0, s.Q)(e, "focus", t ? () => {
            i && i.setActive(r.J.Focus, !0)
          } : void 0), (0, s.Q)(e, "blur", t ? () => {
            i && i.setActive(r.J.Focus, !1)
          } : void 0)
        })),
        hover: (0, P.n)((function({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: i,
          visualElement: r
        }) {
          (0, a.B)(r, "pointerenter", t || i ? h(r, !0, t) : void 0, {
            passive: !t
          }), (0, a.B)(r, "pointerleave", e || i ? h(r, !1, e) : void 0, {
            passive: !e
          })
        }))
      }
    },
    24866: (t, e, i) => {
      "use strict";

      function r(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      i.d(e, {
        N: () => r
      })
    },
    25168: (t, e, i) => {
      "use strict";
      i.d(e, {
        q: () => r
      });
      const r = (t, e, i) => Math.min(Math.max(i, t), e)
    },
    26161: (t, e, i) => {
      "use strict";
      i.d(e, {
        w: () => r
      });
      const r = t => e => e.test(t)
    },
    28761: (t, e, i) => {
      "use strict";
      i.d(e, {
        OU: () => l,
        Ql: () => c,
        Ww: () => d,
        hq: () => n,
        o4: () => h
      });
      var r = i(10631),
        s = i(15822);

      function n(t, e, i) {
        return i + e * (t - i)
      }

      function a(t, e, i, r, s) {
        return void 0 !== s && (t = n(t, s, r)), n(t, i, r) + e
      }

      function o(t, e = 0, i = 1, r, s) {
        t.min = a(t.min, e, i, r, s), t.max = a(t.max, e, i, r, s)
      }

      function h(t, {
        x: e,
        y: i
      }) {
        o(t.x, e.translate, e.scale, e.originPoint), o(t.y, i.translate, i.scale, i.originPoint)
      }

      function l(t, e, i, r = !1) {
        var n, a;
        const o = i.length;
        if (!o) return;
        let l, c;
        e.x = e.y = 1;
        for (let p = 0; p < o; p++) l = i[p], c = l.projectionDelta, "contents" !== (null === (a = null === (n = l.instance) || void 0 === n ? void 0 : n.style) || void 0 === a ? void 0 : a.display) && (r && l.options.layoutScroll && l.scroll && l !== l.root && d(t, {
          x: -l.scroll.offset.x,
          y: -l.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, h(t, c)), r && (0, s.HD)(l.latestValues) && d(t, l.latestValues));
        e.x = p(e.x), e.y = p(e.y)
      }

      function p(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function c(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function f(t, e, [i, s, n]) {
        const a = void 0 !== e[n] ? e[n] : .5,
          h = (0, r.j)(t.min, t.max, a);
        o(t, e[i], e[s], h, e.scale)
      }
      const u = ["x", "scaleX", "originX"],
        m = ["y", "scaleY", "originY"];

      function d(t, e) {
        f(t.x, e, u), f(t.y, e, m)
      }
    },
    29525: (t, e, i) => {
      "use strict";
      i.d(e, {
        KN: () => a,
        gQ: () => p,
        px: () => o,
        uj: () => n,
        vh: () => h,
        vw: () => l
      });
      var r = i(98416);
      const s = t => ({
          test: e => (0, r.Kg)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        n = s("deg"),
        a = s("%"),
        o = s("px"),
        h = s("vh"),
        l = s("vw"),
        p = {
          ...a,
          parse: t => a.parse(t) / 100,
          transform: t => a.transform(100 * t)
        }
    },
    29592: (t, e, i) => {
      "use strict";
      i.d(e, {
        S: () => r
      });
      const r = t => !!(null == t ? void 0 : t.getVelocity)
    },
    32576: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => r
      });
      const r = "undefined" != typeof document
    },
    33307: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => l
      });
      var r = i(40296);
      const s = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        n = (t, e) => r.U.indexOf(t) - r.U.indexOf(e);
      var a = i(97992);
      const o = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
      var h = i(59782);

      function l(t, e, i, l) {
        const {
          style: p,
          vars: c,
          transform: f,
          transformKeys: u,
          transformOrigin: m
        } = t;
        u.length = 0;
        let d = !1,
          y = !1,
          g = !0;
        for (const t in e) {
          const i = e[t];
          if ((0, a.Y)(t)) {
            c[t] = i;
            continue
          }
          const s = h.W[t],
            n = o(i, s);
          if (r.f.has(t)) {
            if (d = !0, f[t] = n, u.push(t), !g) continue;
            i !== (s.default || 0) && (g = !1)
          } else t.startsWith("origin") ? (y = !0, m[t] = n) : p[t] = n
        }
        if (e.transform || (d || l ? p.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: i = !0,
            allowTransformNone: r = !0
          }, a, o) {
            let h = "";
            e.sort(n);
            for (const i of e) h += `${s[i]||i}(${t[i]}) `;
            return i && !t.z && (h += "translateZ(0)"), h = h.trim(), o ? h = o(t, a ? "" : h) : r && a && (h = "none"), h
          }(t, i, g, l) : p.transform && (p.transform = "none")), y) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: i = 0
          } = m;
          p.transformOrigin = `${t} ${e} ${i}`
        }
      }
    },
    33491: (t, e, i) => {
      "use strict";
      i.d(e, {
        W: () => p
      });
      var r = i(62229),
        s = i(24866),
        n = i(88944),
        a = i(64143),
        o = i(88091),
        h = i(80985),
        l = i(56822);
      const p = {
        animation: (0, l.n)((({
          visualElement: t,
          animate: e
        }) => {
          t.animationState || (t.animationState = (0, o.ci)(t)), (0, s.N)(e) && (0, r.useEffect)((() => e.subscribe(t)), [e])
        })),
        exit: (0, l.n)((t => {
          const {
            custom: e,
            visualElement: i
          } = t, [s, o] = (0, n.xQ)(), l = (0, r.useContext)(a.t);
          (0, r.useEffect)((() => {
            i.isPresent = s;
            const t = i.animationState && i.animationState.setActive(h.J.Exit, !s, {
              custom: l && l.custom || e
            });
            t && !s && t.then(o)
          }), [s])
        }))
      }
    },
    33556: (t, e, i) => {
      "use strict";
      i.d(e, {
        u: () => s
      });
      var r = i(77719);
      const s = {
        test: (0, i(74848).$)("#"),
        parse: function(t) {
          let e = "",
            i = "",
            r = "",
            s = "";
          return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), r = t.substring(5, 7), s = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), r = t.substring(3, 4), s = t.substring(4, 5), e += e, i += i, r += r, s += s), {
            red: parseInt(e, 16),
            green: parseInt(i, 16),
            blue: parseInt(r, 16),
            alpha: s ? parseInt(s, 16) / 255 : 1
          }
        },
        transform: r.B.transform
      }
    },
    34045: function(t, e, i) {
      ! function(t, e, i) {
        "use strict";

        function r(t) {
          return t && "object" == typeof t && "default" in t ? t : {
            default: t
          }
        }
        var s = r(e),
          n = r(i);

        function a(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var i = 0, r = Array(e); i < e; i++) r[i] = t[i];
          return r
        }

        function o(t, e, i) {
          return (e = function(t) {
            var e = function(t, e) {
              if ("object" != typeof t || !t) return t;
              var i = t[Symbol.toPrimitive];
              if (void 0 !== i) {
                var r = i.call(t, e || "default");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == typeof e ? e : e + ""
          }(e)) in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = i, t
        }

        function h(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, r)
          }
          return i
        }

        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? h(Object(i), !0).forEach((function(e) {
              o(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
          }
          return t
        }

        function p(t, e) {
          if (null == t) return {};
          var i, r, s = function(t, e) {
            if (null == t) return {};
            var i = {};
            for (var r in t)
              if ({}.hasOwnProperty.call(t, r)) {
                if (e.includes(r)) continue;
                i[r] = t[r]
              } return i
          }(t, e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            for (r = 0; r < n.length; r++) i = n[r], e.includes(i) || {}.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
          }
          return s
        }

        function c(t, e) {
          return function(t) {
            if (Array.isArray(t)) return t
          }(t) || function(t, e) {
            var i = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != i) {
              var r, s, n, a, o = [],
                h = !0,
                l = !1;
              try {
                if (n = (i = i.call(t)).next, 0 === e) {
                  if (Object(i) !== i) return;
                  h = !1
                } else
                  for (; !(h = (r = n.call(i)).done) && (o.push(r.value), o.length !== e); h = !0);
              } catch (t) {
                l = !0, s = t
              } finally {
                try {
                  if (!h && null != i.return && (a = i.return(), Object(a) !== a)) return
                } finally {
                  if (l) throw s
                }
              }
              return o
            }
          }(t, e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return a(t, e);
              var i = {}.toString.call(t).slice(8, -1);
              return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(t, e) : void 0
            }
          }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }
        var f = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"],
          u = function(t, e) {
            var r = t.animationData,
              a = t.loop,
              o = t.autoplay,
              h = t.initialSegment,
              u = t.onComplete,
              m = t.onLoopComplete,
              d = t.onEnterFrame,
              y = t.onSegmentStart,
              g = t.onConfigReady,
              v = t.onDataReady,
              b = t.onDataFailed,
              x = t.onLoadedImages,
              S = t.onDOMLoaded,
              P = t.onDestroy;
            t.lottieRef, t.renderer, t.name, t.assetsPath, t.rendererSettings;
            var E = p(t, f),
              C = c(i.useState(!1), 2),
              A = C[0],
              T = C[1],
              M = i.useRef(),
              k = i.useRef(null);
            return i.useEffect((function() {
              var e = function() {
                var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (k.current) {
                  null === (e = M.current) || void 0 === e || e.destroy();
                  var r = l(l(l({}, t), i), {}, {
                    container: k.current
                  });
                  return M.current = s.default.loadAnimation(r), T(!!M.current),
                    function() {
                      var t;
                      null === (t = M.current) || void 0 === t || t.destroy(), M.current = void 0
                    }
                }
              }();
              return function() {
                return null == e ? void 0 : e()
              }
            }), [r, a]), i.useEffect((function() {
              M.current && (M.current.autoplay = !!o)
            }), [o]), i.useEffect((function() {
              M.current && (h ? Array.isArray(h) && h.length && ((M.current.currentRawFrame < h[0] || M.current.currentRawFrame > h[1]) && (M.current.currentRawFrame = h[0]), M.current.setSegment(h[0], h[1])) : M.current.resetSegments(!0))
            }), [h]), i.useEffect((function() {
              var t = [{
                name: "complete",
                handler: u
              }, {
                name: "loopComplete",
                handler: m
              }, {
                name: "enterFrame",
                handler: d
              }, {
                name: "segmentStart",
                handler: y
              }, {
                name: "config_ready",
                handler: g
              }, {
                name: "data_ready",
                handler: v
              }, {
                name: "data_failed",
                handler: b
              }, {
                name: "loaded_images",
                handler: x
              }, {
                name: "DOMLoaded",
                handler: S
              }, {
                name: "destroy",
                handler: P
              }].filter((function(t) {
                return null != t.handler
              }));
              if (t.length) {
                var e = t.map((function(t) {
                  var e;
                  return null === (e = M.current) || void 0 === e || e.addEventListener(t.name, t.handler),
                    function() {
                      var e;
                      null === (e = M.current) || void 0 === e || e.removeEventListener(t.name, t.handler)
                    }
                }));
                return function() {
                  e.forEach((function(t) {
                    return t()
                  }))
                }
              }
            }), [u, m, d, y, g, v, b, x, S, P]), {
              View: n.default.createElement("div", l({
                style: e,
                ref: k
              }, E)),
              play: function() {
                var t;
                null === (t = M.current) || void 0 === t || t.play()
              },
              stop: function() {
                var t;
                null === (t = M.current) || void 0 === t || t.stop()
              },
              pause: function() {
                var t;
                null === (t = M.current) || void 0 === t || t.pause()
              },
              setSpeed: function(t) {
                var e;
                null === (e = M.current) || void 0 === e || e.setSpeed(t)
              },
              goToAndStop: function(t, e) {
                var i;
                null === (i = M.current) || void 0 === i || i.goToAndStop(t, e)
              },
              goToAndPlay: function(t, e) {
                var i;
                null === (i = M.current) || void 0 === i || i.goToAndPlay(t, e)
              },
              setDirection: function(t) {
                var e;
                null === (e = M.current) || void 0 === e || e.setDirection(t)
              },
              playSegments: function(t, e) {
                var i;
                null === (i = M.current) || void 0 === i || i.playSegments(t, e)
              },
              setSubframe: function(t) {
                var e;
                null === (e = M.current) || void 0 === e || e.setSubframe(t)
              },
              getDuration: function(t) {
                var e;
                return null === (e = M.current) || void 0 === e ? void 0 : e.getDuration(t)
              },
              destroy: function() {
                var t;
                null === (t = M.current) || void 0 === t || t.destroy(), M.current = void 0
              },
              animationContainerRef: k,
              animationLoaded: A,
              animationItem: M.current
            }
          };
        var m = function(t) {
            var e = t.wrapperRef,
              r = t.animationItem,
              s = t.mode,
              n = t.actions;
            i.useEffect((function() {
              var t, i, a, o, h, l = e.current;
              if (l && r && n.length) {
                r.stop();
                switch (s) {
                  case "scroll":
                    return o = null, h = function() {
                        var t, e, i, s = (e = (t = l.getBoundingClientRect()).top, i = t.height, (window.innerHeight - e) / (window.innerHeight + i)),
                          a = n.find((function(t) {
                            var e = t.visibility;
                            return e && s >= e[0] && s <= e[1]
                          }));
                        if (a) {
                          if ("seek" === a.type && a.visibility && 2 === a.frames.length) {
                            var h = a.frames[0] + Math.ceil((s - a.visibility[0]) / (a.visibility[1] - a.visibility[0]) * a.frames[1]);
                            r.goToAndStop(h - r.firstFrame - 1, !0)
                          }
                          "loop" === a.type && (null === o || o !== a.frames || r.isPaused) && (r.playSegments(a.frames, !0), o = a.frames), "play" === a.type && r.isPaused && (r.resetSegments(!0), r.play()), "stop" === a.type && r.goToAndStop(a.frames[0] - r.firstFrame - 1, !0)
                        }
                      }, document.addEventListener("scroll", h),
                      function() {
                        document.removeEventListener("scroll", h)
                      };
                  case "cursor":
                    return t = function(t, e) {
                        var i, s, a, o, h = t,
                          p = e;
                        if (-1 !== h && -1 !== p) {
                          var c = (i = h, s = p, o = (a = l.getBoundingClientRect()).top, {
                            x: (i - a.left) / a.width,
                            y: (s - o) / a.height
                          });
                          h = c.x, p = c.y
                        }
                        var f = n.find((function(t) {
                          var e = t.position;
                          return e && Array.isArray(e.x) && Array.isArray(e.y) ? h >= e.x[0] && h <= e.x[1] && p >= e.y[0] && p <= e.y[1] : !(!e || Number.isNaN(e.x) || Number.isNaN(e.y)) && h === e.x && p === e.y
                        }));
                        if (f) {
                          if ("seek" === f.type && f.position && Array.isArray(f.position.x) && Array.isArray(f.position.y) && 2 === f.frames.length) {
                            var u = (h - f.position.x[0]) / (f.position.x[1] - f.position.x[0]),
                              m = (p - f.position.y[0]) / (f.position.y[1] - f.position.y[0]);
                            r.playSegments(f.frames, !0), r.goToAndStop(Math.ceil((u + m) / 2 * (f.frames[1] - f.frames[0])), !0)
                          }
                          "loop" === f.type && r.playSegments(f.frames, !0), "play" === f.type && (r.isPaused && r.resetSegments(!1), r.playSegments(f.frames)), "stop" === f.type && r.goToAndStop(f.frames[0], !0)
                        }
                      }, i = function(e) {
                        t(e.clientX, e.clientY)
                      }, a = function() {
                        t(-1, -1)
                      }, l.addEventListener("mousemove", i), l.addEventListener("mouseout", a),
                      function() {
                        l.removeEventListener("mousemove", i), l.removeEventListener("mouseout", a)
                      }
                }
              }
            }), [s, r])
          },
          d = function(t) {
            var e = t.actions,
              i = t.mode,
              r = t.lottieObj,
              s = r.animationItem,
              n = r.View,
              a = r.animationContainerRef;
            return m({
              actions: e,
              animationItem: s,
              mode: i,
              wrapperRef: a
            }), n
          },
          y = ["style", "interactivity"];
        Object.defineProperty(t, "LottiePlayer", {
          enumerable: !0,
          get: function() {
            return s.default
          }
        }), t.default = function(t) {
          var e, r, s, n = t.style,
            a = t.interactivity,
            o = p(t, y),
            h = u(o, n),
            l = h.View,
            c = h.play,
            f = h.stop,
            m = h.pause,
            g = h.setSpeed,
            v = h.goToAndStop,
            b = h.goToAndPlay,
            x = h.setDirection,
            S = h.playSegments,
            P = h.setSubframe,
            E = h.getDuration,
            C = h.destroy,
            A = h.animationContainerRef,
            T = h.animationLoaded,
            M = h.animationItem;
          return i.useEffect((function() {
            t.lottieRef && (t.lottieRef.current = {
              play: c,
              stop: f,
              pause: m,
              setSpeed: g,
              goToAndPlay: b,
              goToAndStop: v,
              setDirection: x,
              playSegments: S,
              setSubframe: P,
              getDuration: E,
              destroy: C,
              animationContainerRef: A,
              animationLoaded: T,
              animationItem: M
            })
          }), [null === (e = t.lottieRef) || void 0 === e ? void 0 : e.current]), d({
            lottieObj: {
              View: l,
              play: c,
              stop: f,
              pause: m,
              setSpeed: g,
              goToAndStop: v,
              goToAndPlay: b,
              setDirection: x,
              playSegments: S,
              setSubframe: P,
              getDuration: E,
              destroy: C,
              animationContainerRef: A,
              animationLoaded: T,
              animationItem: M
            },
            actions: null !== (r = null == a ? void 0 : a.actions) && void 0 !== r ? r : [],
            mode: null !== (s = null == a ? void 0 : a.mode) && void 0 !== s ? s : "scroll"
          })
        }, t.useLottie = u, t.useLottieInteractivity = d, Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }(e, i(12273), i(62229))
    },
    34219: (t, e, i) => {
      "use strict";
      i.d(e, {
        y: () => o
      });
      var r = i(98416),
        s = i(33556),
        n = i(66603),
        a = i(77719);
      const o = {
        test: t => a.B.test(t) || s.u.test(t) || n.V.test(t),
        parse: t => a.B.test(t) ? a.B.parse(t) : n.V.test(t) ? n.V.parse(t) : s.u.parse(t),
        transform: t => (0, r.Kg)(t) ? t : t.hasOwnProperty("red") ? a.B.transform(t) : n.V.transform(t)
      }
    },
    36763: (t, e, i) => {
      "use strict";
      i.d(e, {
        l: () => r
      });
      const r = t => t
    },
    37774: (t, e, i) => {
      "use strict";
      i.d(e, {
        I: () => r
      });
      const r = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    39318: (t, e, i) => {
      "use strict";
      i.d(e, {
        _: () => s
      });
      var r = i(13404);
      const s = (void 0 === r || r.env, "production")
    },
    40216: (t, e, i) => {
      "use strict";
      i.d(e, {
        J: () => h,
        e: () => o
      });
      var r = i(77863);
      const s = {
        pageX: 0,
        pageY: 0
      };

      function n(t, e = "page") {
        const i = t.touches[0] || t.changedTouches[0] || s;
        return {
          x: i[e + "X"],
          y: i[e + "Y"]
        }
      }

      function a(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function o(t, e = "page") {
        return {
          point: (0, r.k)(t) ? n(t, e) : a(t, e)
        }
      }
      const h = (t, e = !1) => {
        const i = e => t(e, o(e));
        return e ? (r = i, t => {
          const e = t instanceof MouseEvent;
          (!e || e && 0 === t.button) && r(t)
        }) : i;
        var r
      }
    },
    40296: (t, e, i) => {
      "use strict";
      i.d(e, {
        U: () => r,
        f: () => s
      });
      const r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        s = new Set(r)
    },
    40844: (t, e, i) => {
      "use strict";
      i.d(e, {
        Wx: () => f,
        pL: () => c
      });
      var r = i(62229),
        s = Object.defineProperty,
        n = (t, e, i) => ((t, e, i) => e in t ? s(t, e, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: i
        }) : t[e] = i)(t, "symbol" != typeof e ? e + "" : e, i),
        a = new Map,
        o = new WeakMap,
        h = 0,
        l = void 0;

      function p(t, e, i = {}, r = l) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
          const s = t.getBoundingClientRect();
          return e(r, {
            isIntersecting: r,
            target: t,
            intersectionRatio: "number" == typeof i.threshold ? i.threshold : 0,
            time: 0,
            boundingClientRect: s,
            intersectionRect: s,
            rootBounds: s
          }), () => {}
        }
        const {
          id: s,
          observer: n,
          elements: p
        } = function(t) {
          const e = function(t) {
            return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
              return `${e}_${"root"===e?(i=t.root,i?(o.has(i)||(h+=1,o.set(i,h.toString())),o.get(i)):"0"):t[e]}`;
              var i
            })).toString()
          }(t);
          let i = a.get(e);
          if (!i) {
            const r = new Map;
            let s;
            const n = new IntersectionObserver((e => {
              e.forEach((e => {
                var i;
                const n = e.isIntersecting && s.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = n), null == (i = r.get(e.target)) || i.forEach((t => {
                  t(n, e)
                }))
              }))
            }), t);
            s = n.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), i = {
              id: e,
              observer: n,
              elements: r
            }, a.set(e, i)
          }
          return i
        }(i), c = p.get(t) || [];
        return p.has(t) || p.set(t, c), c.push(e), n.observe(t),
          function() {
            c.splice(c.indexOf(e), 1), 0 === c.length && (p.delete(t), n.unobserve(t)), 0 === p.size && (n.disconnect(), a.delete(s))
          }
      }
      var c = class extends r.Component {
        constructor(t) {
          super(t), n(this, "node", null), n(this, "_unobserveCb", null), n(this, "handleNode", (t => {
            this.node && (this.unobserve(), t || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = t || null, this.observeNode()
          })), n(this, "handleChange", ((t, e) => {
            t && this.props.triggerOnce && this.unobserve(),
              function(t) {
                return "function" != typeof t.children
              }(this.props) || this.setState({
                inView: t,
                entry: e
              }), this.props.onChange && this.props.onChange(t, e)
          })), this.state = {
            inView: !!t.initialInView,
            entry: void 0
          }
        }
        componentDidMount() {
          this.unobserve(), this.observeNode()
        }
        componentDidUpdate(t) {
          t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve()
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: t,
            root: e,
            rootMargin: i,
            trackVisibility: r,
            delay: s,
            fallbackInView: n
          } = this.props;
          this._unobserveCb = p(this.node, this.handleChange, {
            threshold: t,
            root: e,
            rootMargin: i,
            trackVisibility: r,
            delay: s
          }, n)
        }
        unobserve() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
          const {
            children: t
          } = this.props;
          if ("function" == typeof t) {
            const {
              inView: e,
              entry: i
            } = this.state;
            return t({
              inView: e,
              entry: i,
              ref: this.handleNode
            })
          }
          const {
            as: e,
            triggerOnce: i,
            threshold: s,
            root: n,
            rootMargin: a,
            onChange: o,
            skip: h,
            trackVisibility: l,
            delay: p,
            initialInView: c,
            fallbackInView: f,
            ...u
          } = this.props;
          return r.createElement(e || "div", {
            ref: this.handleNode,
            ...u
          }, t)
        }
      };

      function f({
        threshold: t,
        delay: e,
        trackVisibility: i,
        rootMargin: s,
        root: n,
        triggerOnce: a,
        skip: o,
        initialInView: h,
        fallbackInView: l,
        onChange: c
      } = {}) {
        var f;
        const [u, m] = r.useState(null), d = r.useRef(c), [y, g] = r.useState({
          inView: !!h,
          entry: void 0
        });
        d.current = c, r.useEffect((() => {
          if (o || !u) return;
          let r;
          return r = p(u, ((t, e) => {
            g({
              inView: t,
              entry: e
            }), d.current && d.current(t, e), e.isIntersecting && a && r && (r(), r = void 0)
          }), {
            root: n,
            rootMargin: s,
            threshold: t,
            trackVisibility: i,
            delay: e
          }, l), () => {
            r && r()
          }
        }), [Array.isArray(t) ? t.toString() : t, u, n, s, a, o, i, l, e]);
        const v = null == (f = y.entry) ? void 0 : f.target,
          b = r.useRef(void 0);
        u || !v || a || o || b.current === v || (b.current = v, g({
          inView: !!h,
          entry: void 0
        }));
        const x = [m, y.inView, y.entry];
        return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
      }
    },
    41585: (t, e, i) => {
      "use strict";
      i.d(e, {
        V: () => r
      });
      const r = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    42967: (t, e, i) => {
      "use strict";
      i.d(e, {
        d: () => a
      });
      var r = i(37774),
        s = i(3052),
        n = i(51991);

      function a(t, e, i, a) {
        (0, s.e)(t, e, void 0, a);
        for (const i in e.attrs) t.setAttribute(n.e.has(i) ? i : (0, r.I)(i), e.attrs[i])
      }
    },
    44645: (t, e, i) => {
      "use strict";
      i.d(e, {
        L: () => a,
        m: () => n
      });
      var r = i(20928),
        s = i(28761);

      function n(t, e) {
        return (0, r.FY)((0, r.bS)(t.getBoundingClientRect(), e))
      }

      function a(t, e, i) {
        const r = n(t, i),
          {
            scroll: a
          } = e;
        return a && ((0, s.Ql)(r.x, a.offset.x), (0, s.Ql)(r.y, a.offset.y)), r
      }
    },
    44736: (t, e, i) => {
      "use strict";
      i.d(e, {
        H: () => A
      });
      var r = i(62229),
        s = i(83014),
        n = i(6417),
        a = i(64143),
        o = i(32576);
      const h = o.B ? r.useLayoutEffect : r.useEffect;
      var l = i(6128),
        p = i(69569),
        c = i(71031),
        f = i(57077);

      function u(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var m = i(54012),
        d = i(15634),
        y = i(7593),
        g = i(67207);
      let v = 1;
      var b = i(91281);
      class x extends r.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: t,
            props: e
          } = this.props;
          return t && t.setProps(e), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      var S = i(83413);
      const P = Symbol.for("motionComponentSymbol");

      function E({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: i,
        useRender: b,
        useVisualState: E,
        Component: A
      }) {
        t && (0, d.Y)(t);
        const T = (0, r.forwardRef)((function(d, P) {
          const T = {
              ...(0, r.useContext)(s.Q),
              ...d,
              layoutId: C(d)
            },
            {
              isStatic: M
            } = T;
          let k = null;
          const w = function(t) {
              const {
                initial: e,
                animate: i
              } = function(t, e) {
                if ((0, f.e)(t)) {
                  const {
                    initial: e,
                    animate: i
                  } = t;
                  return {
                    initial: !1 === e || (0, c.w)(e) ? e : void 0,
                    animate: (0, c.w)(i) ? i : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, r.useContext)(n.A));
              return (0, r.useMemo)((() => ({
                initial: e,
                animate: i
              })), [u(e), u(i)])
            }(d),
            _ = M ? void 0 : (0, y.M)((() => {
              if (g.w.hasEverUpdated) return v++
            })),
            D = E(d, M);
          if (!M && o.B) {
            w.visualElement = function(t, e, i, o) {
              const p = (0, n.f)(),
                c = (0, r.useContext)(l.Y),
                f = (0, r.useContext)(a.t),
                u = (0, r.useContext)(s.Q).reducedMotion,
                m = (0, r.useRef)();
              o = o || c.renderer, !m.current && o && (m.current = o(t, {
                visualState: e,
                parent: p,
                props: i,
                presenceId: f ? f.id : void 0,
                blockInitialAnimation: !!f && !1 === f.initial,
                reducedMotionConfig: u
              }));
              const d = m.current;
              return h((() => {
                d && d.render()
              })), h((() => {
                d && d.animationState && d.animationState.animateChanges()
              })), h((() => () => d && d.notify("Unmount")), []), d
            }(A, D, T, e);
            const o = (0, r.useContext)(l.Y).strict,
              p = (0, r.useContext)(S.N);
            w.visualElement && (k = w.visualElement.loadFeatures(T, o, t, _, i || m.B.projectionNodeConstructor, p))
          }
          return r.createElement(x, {
            visualElement: w.visualElement,
            props: T
          }, k, r.createElement(n.A.Provider, {
            value: w
          }, b(A, d, _, function(t, e, i) {
            return (0, r.useCallback)((r => {
              r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), i && ("function" == typeof i ? i(r) : (0, p.X)(i) && (i.current = r))
            }), [e])
          }(D, w.visualElement, P), D, M, w.visualElement)))
        }));
        return T[P] = A, T
      }

      function C({
        layoutId: t
      }) {
        const e = (0, r.useContext)(b.L).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function A(t) {
        function e(e, i = {}) {
          return E(t(e, i))
        }
        if ("undefined" == typeof Proxy) return e;
        const i = new Map;
        return new Proxy(e, {
          get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r))
        })
      }
    },
    47402: (t, e, i) => {
      "use strict";
      i.d(e, {
        D2: () => s,
        RL: () => a,
        be: () => n,
        rU: () => o
      });
      var r = i(14680);

      function s({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: r,
        staggerDirection: s,
        repeat: n,
        repeatType: a,
        repeatDelay: o,
        from: h,
        ...l
      }) {
        return !!Object.keys(l).length
      }

      function n(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function a(t) {
        return "number" == typeof t ? 0 : (0, r.J)("", t)
      }

      function o(t, e) {
        return t[e] || t.default || t
      }
    },
    51991: (t, e, i) => {
      "use strict";
      i.d(e, {
        e: () => r
      });
      const r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    53372: (t, e, i) => {
      "use strict";
      i.d(e, {
        h: () => f,
        B: () => u
      });
      var r = i(3902),
        s = i(40216),
        n = i(32576);
      const a = () => n.B && null === window.onpointerdown,
        o = () => n.B && null === window.ontouchstart,
        h = () => n.B && null === window.onmousedown,
        l = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        p = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function c(t) {
        return a() ? t : o() ? p[t] : h() ? l[t] : t
      }

      function f(t, e, i, n) {
        return (0, r.k)(t, c(e), (0, s.J)(i, "pointerdown" === e), n)
      }

      function u(t, e, i, n) {
        return (0, r.Q)(t, c(e), i && (0, s.J)(i, "pointerdown" === e), n)
      }
    },
    53580: (t, e, i) => {
      "use strict";
      i.d(e, {
        p: () => h
      });
      var r = i(81982),
        s = i(98416);
      const n = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function a(t) {
        const [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = i.match(s.SY) || [];
        if (!r) return t;
        const a = i.replace(r, "");
        let o = n.has(e) ? 1 : 0;
        return r !== i && (o *= 100), e + "(" + o + a + ")"
      }
      const o = /([a-z-]*)\(.*?\)/g,
        h = {
          ...r.f,
          getAnimatableNone: t => {
            const e = t.match(o);
            return e ? e.map(a).join(" ") : t
          }
        }
    },
    54012: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => s
      });
      const r = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        s = {
          measureLayout: r(["layout", "layoutId", "drag"]),
          animation: r(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: r(["exit"]),
          drag: r(["drag", "dragControls"]),
          focus: r(["whileFocus"]),
          hover: r(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: r(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: r(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: r(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
    },
    54165: (t, e, i) => {
      "use strict";
      i.d(e, {
        k: () => s
      });
      var r = i(29592);

      function s(t) {
        return Boolean((0, r.S)(t) && t.add)
      }
    },
    56822: (t, e, i) => {
      "use strict";
      i.d(e, {
        n: () => r
      });
      const r = t => e => (t(e), null)
    },
    57077: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => o,
        e: () => a
      });
      var r = i(24866),
        s = i(71031);
      const n = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function a(t) {
        return (0, r.N)(t.animate) || n.some((e => (0, s.w)(t[e])))
      }

      function o(t) {
        return Boolean(a(t) || t.variants)
      }
    },
    59782: (t, e, i) => {
      "use strict";
      i.d(e, {
        W: () => a
      });
      var r = i(4208),
        s = i(29525);
      const n = {
          ...r.ai,
          transform: Math.round
        },
        a = {
          borderWidth: s.px,
          borderTopWidth: s.px,
          borderRightWidth: s.px,
          borderBottomWidth: s.px,
          borderLeftWidth: s.px,
          borderRadius: s.px,
          radius: s.px,
          borderTopLeftRadius: s.px,
          borderTopRightRadius: s.px,
          borderBottomRightRadius: s.px,
          borderBottomLeftRadius: s.px,
          width: s.px,
          maxWidth: s.px,
          height: s.px,
          maxHeight: s.px,
          size: s.px,
          top: s.px,
          right: s.px,
          bottom: s.px,
          left: s.px,
          padding: s.px,
          paddingTop: s.px,
          paddingRight: s.px,
          paddingBottom: s.px,
          paddingLeft: s.px,
          margin: s.px,
          marginTop: s.px,
          marginRight: s.px,
          marginBottom: s.px,
          marginLeft: s.px,
          rotate: s.uj,
          rotateX: s.uj,
          rotateY: s.uj,
          rotateZ: s.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: s.uj,
          skewX: s.uj,
          skewY: s.uj,
          distance: s.px,
          translateX: s.px,
          translateY: s.px,
          translateZ: s.px,
          x: s.px,
          y: s.px,
          z: s.px,
          perspective: s.px,
          transformPerspective: s.px,
          opacity: r.X4,
          originX: s.gQ,
          originY: s.gQ,
          originZ: s.px,
          zIndex: n,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: n
        }
    },
    60885: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => s,
        K: () => n
      });
      var r = i(74496);
      const s = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        n = t => (0, r.p)(t) ? t[t.length - 1] || 0 : t
    },
    62369: (t, e, i) => {
      "use strict";
      i.d(e, {
        K: () => s
      });
      var r = i(98405);

      function s(t, e, i) {
        const s = t.getProps();
        return (0, r.a)(s, e, void 0 !== i ? i : s.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, i) => e[i] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, i) => e[i] = t.getVelocity())), e
        }(t))
      }
    },
    64143: (t, e, i) => {
      "use strict";
      i.d(e, {
        t: () => r
      });
      const r = (0, i(62229).createContext)(null)
    },
    66603: (t, e, i) => {
      "use strict";
      i.d(e, {
        V: () => o
      });
      var r = i(4208),
        s = i(29525),
        n = i(98416),
        a = i(74848);
      const o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({
          hue: t,
          saturation: e,
          lightness: i,
          alpha: a = 1
        }) => "hsla(" + Math.round(t) + ", " + s.KN.transform((0, n.aj)(e)) + ", " + s.KN.transform((0, n.aj)(i)) + ", " + (0, n.aj)(r.X4.transform(a)) + ")"
      }
    },
    67026: (t, e, i) => {
      "use strict";
      i.d(e, {
        q: () => r
      });
      const r = (t, e, i) => {
        const r = e - t;
        return 0 === r ? 1 : (i - t) / r
      }
    },
    67207: (t, e, i) => {
      "use strict";
      i.d(e, {
        w: () => r
      });
      const r = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      }
    },
    69569: (t, e, i) => {
      "use strict";

      function r(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      i.d(e, {
        X: () => r
      })
    },
    70181: (t, e, i) => {
      "use strict";
      i.d(e, {
        $: () => s,
        H: () => r
      });
      const r = {};

      function s(t) {
        Object.assign(r, t)
      }
    },
    71031: (t, e, i) => {
      "use strict";

      function r(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      i.d(e, {
        w: () => r
      })
    },
    74496: (t, e, i) => {
      "use strict";
      i.d(e, {
        p: () => r
      });
      const r = t => Array.isArray(t)
    },
    74848: (t, e, i) => {
      "use strict";
      i.d(e, {
        $: () => s,
        q: () => n
      });
      var r = i(98416);
      const s = (t, e) => i => Boolean((0, r.Kg)(i) && r.Fl.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
        n = (t, e, i) => s => {
          if (!(0, r.Kg)(s)) return s;
          const [n, a, o, h] = s.match(r.SY);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(a),
            [i]: parseFloat(o),
            alpha: void 0 !== h ? parseFloat(h) : 1
          }
        }
    },
    77719: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => h
      });
      var r = i(25168),
        s = i(4208),
        n = i(98416),
        a = i(74848);
      const o = {
          ...s.ai,
          transform: t => Math.round((t => (0, r.q)(0, 255, t))(t))
        },
        h = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: i,
            alpha: r = 1
          }) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(i) + ", " + (0, n.aj)(s.X4.transform(r)) + ")"
        }
    },
    77863: (t, e, i) => {
      "use strict";

      function r(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function s(t) {
        return !!t.touches
      }
      i.d(e, {
        E: () => r,
        k: () => s
      })
    },
    78466: (t, e, i) => {
      "use strict";
      i.d(e, {
        u: () => n
      });
      var r = i(60885),
        s = i(29592);

      function n(t) {
        const e = (0, s.S)(t) ? t.get() : t;
        return (0, r.B)(e) ? e.toValue() : e
      }
    },
    78558: (t, e, i) => {
      "use strict";
      i.d(e, {
        v: () => s
      });
      var r = i(14646);
      class s {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return (0, r.Kq)(this.subscriptions, t), () => (0, r.Ai)(this.subscriptions, t)
        }
        notify(t, e, i) {
          const r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < r; s++) {
                const r = this.subscriptions[s];
                r && r(t, e, i)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
    },
    79242: (t, e, i) => {
      "use strict";
      i.d(e, {
        ge: () => s,
        xU: () => r
      });
      const r = () => ({
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          }
        }),
        s = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        })
    },
    80890: (t, e, i) => {
      "use strict";
      i.d(e, {
        eO: () => u,
        qX: () => m,
        OH: () => f
      });
      const r = 1 / 60 * 1e3,
        s = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        n = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(s())), r);
      var a = i(9581);
      let o = !0,
        h = !1,
        l = !1;
      const p = ["read", "update", "preRender", "render", "postRender"],
        c = p.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            i = [],
            r = 0,
            s = !1,
            n = !1;
          const a = new WeakSet,
            o = {
              schedule: (t, n = !1, o = !1) => {
                const h = o && s,
                  l = h ? e : i;
                return n && a.add(t), -1 === l.indexOf(t) && (l.push(t), h && s && (r = e.length)), t
              },
              cancel: t => {
                const e = i.indexOf(t); - 1 !== e && i.splice(e, 1), a.delete(t)
              },
              process: h => {
                if (s) n = !0;
                else {
                  if (s = !0, [e, i] = [i, e], i.length = 0, r = e.length, r)
                    for (let i = 0; i < r; i++) {
                      const r = e[i];
                      r(h), a.has(r) && (o.schedule(r), t())
                    }
                  s = !1, n && (n = !1, o.process(h))
                }
              }
            };
          return o
        }((() => h = !0)), t)), {}),
        f = p.reduce(((t, e) => {
          const i = c[e];
          return t[e] = (t, e = !1, r = !1) => (h || g(), i.schedule(t, e, r)), t
        }), {}),
        u = p.reduce(((t, e) => (t[e] = c[e].cancel, t)), {}),
        m = p.reduce(((t, e) => (t[e] = () => c[e].process(a.u), t)), {}),
        d = t => c[t].process(a.u),
        y = t => {
          h = !1, a.u.delta = o ? r : Math.max(Math.min(t - a.u.timestamp, 40), 1), a.u.timestamp = t, l = !0, p.forEach(d), l = !1, h && (o = !1, n(y))
        },
        g = () => {
          h = !0, o = !0, l || n(y)
        }
    },
    80985: (t, e, i) => {
      "use strict";
      var r;
      i.d(e, {
          J: () => r
        }),
        function(t) {
          t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
        }(r || (r = {}))
    },
    81298: (t, e, i) => {
      "use strict";

      function r(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      i.d(e, {
        D3: () => o,
        nQ: () => a
      });
      const s = r("dragHorizontal"),
        n = r("dragVertical");

      function a(t) {
        let e = !1;
        if ("y" === t) e = n();
        else if ("x" === t) e = s();
        else {
          const t = s(),
            i = n();
          t && i ? e = () => {
            t(), i()
          } : (t && t(), i && i())
        }
        return e
      }

      function o() {
        const t = a(!0);
        return !t || (t(), !1)
      }
    },
    81721: (t, e, i) => {
      "use strict";
      i.d(e, {
        x: () => n
      });
      var r = i(29592),
        s = i(15582);

      function n(t) {
        const e = (0, s.x)(t);
        for (const i in t)(0, r.S)(t[i]) && (e["x" === i || "y" === i ? "attr" + i.toUpperCase() : i] = t[i]);
        return e
      }
    },
    81982: (t, e, i) => {
      "use strict";
      i.d(e, {
        V: () => h,
        f: () => f
      });
      var r = i(34219),
        s = i(4208),
        n = i(98416);
      const a = "${c}",
        o = "${n}";

      function h(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let i = 0,
          h = 0;
        const l = t.match(n.ne);
        l && (i = l.length, t = t.replace(n.ne, a), e.push(...l.map(r.y.parse)));
        const p = t.match(n.SY);
        return p && (h = p.length, t = t.replace(n.SY, o), e.push(...p.map(s.ai.parse))), {
          values: e,
          numColors: i,
          numNumbers: h,
          tokenised: t
        }
      }

      function l(t) {
        return h(t).values
      }

      function p(t) {
        const {
          values: e,
          numColors: i,
          tokenised: s
        } = h(t), l = e.length;
        return t => {
          let e = s;
          for (let s = 0; s < l; s++) e = e.replace(s < i ? a : o, s < i ? r.y.transform(t[s]) : (0, n.aj)(t[s]));
          return e
        }
      }
      const c = t => "number" == typeof t ? 0 : t,
        f = {
          test: function(t) {
            var e, i;
            return isNaN(t) && (0, n.Kg)(t) && ((null === (e = t.match(n.SY)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (i = t.match(n.ne)) || void 0 === i ? void 0 : i.length) || 0) > 0
          },
          parse: l,
          createTransformer: p,
          getAnimatableNone: function(t) {
            const e = l(t);
            return p(t)(e.map(c))
          }
        }
    },
    82448: (t, e, i) => {
      "use strict";
      i.d(e, {
        c: () => s
      });
      var r = i(80890);

      function s(t, e) {
        const i = performance.now(),
          s = ({
            timestamp: n
          }) => {
            const a = n - i;
            a >= e && (r.eO.read(s), t(a - e))
          };
        return r.OH.read(s, !0), () => r.eO.read(s)
      }
    },
    82752: (t, e, i) => {
      "use strict";
      i.d(e, {
        P: () => Ee
      });
      var r = i(44736),
        s = i(8935),
        n = i(24718),
        a = i(33491),
        o = i(62229),
        h = i(4826),
        l = i(77863),
        p = i(40216),
        c = i(80890),
        f = i(17761),
        u = i(53372),
        m = i(95611);
      const d = (t, e) => Math.abs(t - e);
      var y = i(9581);
      class g {
        constructor(t, e, {
          transformPagePoint: i
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = x(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i = function(t, e) {
                  const i = d(t.x, e.x),
                    r = d(t.y, e.y);
                  return Math.sqrt(i ** 2 + r ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !i) return;
              const {
                point: r
              } = t, {
                timestamp: s
              } = y.u;
              this.history.push({
                ...r,
                timestamp: s
              });
              const {
                onStart: n,
                onMove: a
              } = this.handlers;
              e || (n && n(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = v(e, this.transformPagePoint), (0, l.E)(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : c.OH.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: i,
                onSessionEnd: r
              } = this.handlers, s = x(v(e, this.transformPagePoint), this.history);
              this.startEvent && i && i(t, s), r && r(t, s)
            }, (0, l.k)(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = i;
          const r = v((0, p.e)(t), this.transformPagePoint),
            {
              point: s
            } = r,
            {
              timestamp: n
            } = y.u;
          this.history = [{
            ...s,
            timestamp: n
          }];
          const {
            onSessionStart: a
          } = e;
          a && a(t, x(r, this.history)), this.removeListeners = (0, m.F)((0, u.h)(window, "pointermove", this.handlePointerMove), (0, u.h)(window, "pointerup", this.handlePointerUp), (0, u.h)(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), c.eO.update(this.updatePoint)
        }
      }

      function v(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function b(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function x({
        point: t
      }, e) {
        return {
          point: t,
          delta: b(t, P(e)),
          offset: b(t, S(e)),
          velocity: E(e, .1)
        }
      }

      function S(t) {
        return t[0]
      }

      function P(t) {
        return t[t.length - 1]
      }

      function E(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let i = t.length - 1,
          r = null;
        const s = P(t);
        for (; i >= 0 && (r = t[i], !(s.timestamp - r.timestamp > (0, f.f)(e)));) i--;
        if (!r) return {
          x: 0,
          y: 0
        };
        const n = (s.timestamp - r.timestamp) / 1e3;
        if (0 === n) return {
          x: 0,
          y: 0
        };
        const a = {
          x: (s.x - r.x) / n,
          y: (s.y - r.y) / n
        };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
      }
      var C = i(81298),
        A = i(69569),
        T = i(67026),
        M = i(10631);

      function k(t) {
        return t.max - t.min
      }

      function w(t, e = 0, i = .01) {
        return Math.abs(t - e) <= i
      }

      function _(t, e, i, r = .5) {
        t.origin = r, t.originPoint = (0, M.j)(e.min, e.max, t.origin), t.scale = k(i) / k(e), (w(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, M.j)(i.min, i.max, t.origin) - t.originPoint, (w(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function D(t, e, i, r) {
        _(t.x, e.x, i.x, null == r ? void 0 : r.originX), _(t.y, e.y, i.y, null == r ? void 0 : r.originY)
      }

      function F(t, e, i) {
        t.min = i.min + e.min, t.max = t.min + k(e)
      }

      function I(t, e, i) {
        t.min = e.min - i.min, t.max = t.min + k(e)
      }

      function V(t, e, i) {
        I(t.x, e.x, i.x), I(t.y, e.y, i.y)
      }
      var B = i(25168);

      function R(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
      }

      function L(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, r] = [r, i]), {
          min: i,
          max: r
        }
      }
      const O = .35;

      function z(t, e, i) {
        return {
          min: N(t, e),
          max: N(t, i)
        }
      }

      function N(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      var G = i(80985),
        j = i(79242);

      function H(t) {
        return [t("x"), t("y")]
      }
      var q = i(44645),
        W = i(20928),
        $ = i(3902),
        U = i(29525),
        Y = i(83698);
      const X = new WeakMap;
      class J {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, j.ge)(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new g(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor((0, p.e)(t, "page").point)
            },
            onStart: (t, e) => {
              var i;
              const {
                drag: r,
                dragPropagation: s,
                onDragStart: n
              } = this.getProps();
              (!r || s || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, C.nQ)(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((t => {
                var e, i;
                let r = this.getAxisMotionValue(t).get() || 0;
                if (U.KN.test(r)) {
                  const s = null === (i = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === i ? void 0 : i.layoutBox[t];
                  s && (r = k(s) * (parseFloat(r) / 100))
                }
                this.originPoint[t] = r
              })), null == n || n(t, e), null === (i = this.visualElement.animationState) || void 0 === i || i.setActive(G.J.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: i,
                dragDirectionLock: r,
                onDirectionLock: s,
                onDrag: n
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              const {
                offset: a
              } = e;
              if (r && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let i = null;
                return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
              }(a), void(null !== this.currentDirection && (null == s || s(this.currentDirection)));
              this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), null == n || n(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(t, e) {
          const i = this.isDragging;
          if (this.cancel(), !i) return;
          const {
            velocity: r
          } = e;
          this.startAnimation(r);
          const {
            onDragEnd: s
          } = this.getProps();
          null == s || s(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: i
          } = this.getProps();
          !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(G.J.Drag, !1)
        }
        updateAxis(t, e, i) {
          const {
            drag: r
          } = this.getProps();
          if (!i || !K(t, r, this.currentDirection)) return;
          const s = this.getAxisMotionValue(t);
          let n = this.originPoint[t] + i[t];
          this.constraints && this.constraints[t] && (n = function(t, {
            min: e,
            max: i
          }, r) {
            return void 0 !== e && t < e ? t = r ? (0, M.j)(e, t, r.min) : Math.max(t, e) : void 0 !== i && t > i && (t = r ? (0, M.j)(i, t, r.max) : Math.min(t, i)), t
          }(n, this.constraints[t], this.elastic[t])), s.set(n)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: i
          } = this.visualElement.projection || {}, r = this.constraints;
          t && (0, A.X)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !i) && function(t, {
            top: e,
            left: i,
            bottom: r,
            right: s
          }) {
            return {
              x: R(t.x, i, s),
              y: R(t.y, e, r)
            }
          }(i.layoutBox, t), this.elastic = function(t = O) {
            return !1 === t ? t = 0 : !0 === t && (t = O), {
              x: z(t, "left", "right"),
              y: z(t, "top", "bottom")
            }
          }(e), r !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && H((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const i = {};
              return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
            }(i.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !(0, A.X)(t)) return !1;
          const i = t.current;
          (0, h.V)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: r
          } = this.visualElement;
          if (!r || !r.layout) return !1;
          const s = (0, q.L)(i, r.root, this.visualElement.getTransformPagePoint());
          let n = function(t, e) {
            return {
              x: L(t.x, e.x),
              y: L(t.y, e.y)
            }
          }(r.layout.layoutBox, s);
          if (e) {
            const t = e((0, W.pA)(n));
            this.hasMutatedConstraints = !!t, t && (n = (0, W.FY)(t))
          }
          return n
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: i,
            dragElastic: r,
            dragTransition: s,
            dragSnapToOrigin: n,
            onDragTransitionEnd: a
          } = this.getProps(), o = this.constraints || {}, h = H((a => {
            if (!K(a, e, this.currentDirection)) return;
            let h = (null == o ? void 0 : o[a]) || {};
            n && (h = {
              min: 0,
              max: 0
            });
            const l = r ? 200 : 1e6,
              p = r ? 40 : 1e7,
              c = {
                type: "inertia",
                velocity: i ? t[a] : 0,
                bounceStiffness: l,
                bounceDamping: p,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...h
              };
            return this.startAxisValueAnimation(a, c)
          }));
          return Promise.all(h).then(a)
        }
        startAxisValueAnimation(t, e) {
          const i = this.getAxisMotionValue(t);
          return i.start((0, Y.O)(t, i, 0, e))
        }
        stopAnimation() {
          H((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const i = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[i] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          H((e => {
            const {
              drag: i
            } = this.getProps();
            if (!K(e, i, this.currentDirection)) return;
            const {
              projection: r
            } = this.visualElement, s = this.getAxisMotionValue(e);
            if (r && r.layout) {
              const {
                min: i,
                max: n
              } = r.layout.layoutBox[e];
              s.set(t[e] - (0, M.j)(i, n, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: i
          } = this.getProps(), {
            projection: r
          } = this.visualElement;
          if (!(0, A.X)(i) || !r || !this.constraints) return;
          this.stopAnimation();
          const s = {
            x: 0,
            y: 0
          };
          H((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const i = e.get();
              s[t] = function(t, e) {
                let i = .5;
                const r = k(t),
                  s = k(e);
                return s > r ? i = (0, T.q)(e.min, e.max - r, t.min) : r > s && (i = (0, T.q)(t.min, t.max - s, e.min)), (0, B.q)(0, 1, i)
              }({
                min: i,
                max: i
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: n
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = n ? n({}, "") : "none", null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout(), this.resolveConstraints(), H((t => {
            if (!K(t, e, null)) return;
            const i = this.getAxisMotionValue(t),
              {
                min: r,
                max: n
              } = this.constraints[t];
            i.set((0, M.j)(r, n, s[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          X.set(this.visualElement, this);
          const e = this.visualElement.current,
            i = (0, u.h)(e, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: i = !0
              } = this.getProps();
              e && i && this.start(t)
            })),
            r = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              (0, A.X)(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: s
            } = this.visualElement,
            n = s.addEventListener("measure", r);
          s && !s.layout && (null === (t = s.root) || void 0 === t || t.updateScroll(), s.updateLayout()), r();
          const a = (0, $.k)(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = s.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (H((e => {
                const i = this.getAxisMotionValue(e);
                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            a(), i(), n(), null == o || o()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: s = !1,
              dragElastic: n = O,
              dragMomentum: a = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: s,
            dragElastic: n,
            dragMomentum: a
          }
        }
      }

      function K(t, e, i) {
        return !(!0 !== e && e !== t || null !== i && i !== t)
      }
      var Z = i(7593),
        Q = i(83014),
        tt = i(19651),
        et = i(56822);
      const it = {
        pan: (0, et.n)((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: i,
          onPanSessionStart: r,
          visualElement: s
        }) {
          const n = t || e || i || r,
            a = (0, o.useRef)(null),
            {
              transformPagePoint: h
            } = (0, o.useContext)(Q.Q),
            l = {
              onSessionStart: r,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                a.current = null, i && i(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== a.current && a.current.updateHandlers(l)
          })), (0, u.B)(s, "pointerdown", n && function(t) {
            a.current = new g(t, l, {
              transformPagePoint: h
            })
          }), (0, tt.l)((() => a.current && a.current.end()))
        })),
        drag: (0, et.n)((function(t) {
          const {
            dragControls: e,
            visualElement: i
          } = t, r = (0, Z.M)((() => new J(i)));
          (0, o.useEffect)((() => e && e.subscribe(r)), [r, e]), (0, o.useEffect)((() => r.addListeners()), [r])
        }))
      };
      var rt = i(1816),
        st = i(88944),
        nt = i(91281),
        at = i(83413),
        ot = i(67207);

      function ht(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const lt = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!U.px.test(t)) return t;
            t = parseFloat(t)
          }
          return `${ht(t,e.target.x)}% ${ht(t,e.target.y)}%`
        }
      };
      var pt = i(19203),
        ct = i(81982);
      const ft = "_$css",
        ut = {
          correct: (t, {
            treeScale: e,
            projectionDelta: i
          }) => {
            const r = t,
              s = t.includes("var("),
              n = [];
            s && (t = t.replace(pt.z2, (t => (n.push(t), ft))));
            const a = ct.f.parse(t);
            if (a.length > 5) return r;
            const o = ct.f.createTransformer(t),
              h = "number" != typeof a[0] ? 1 : 0,
              l = i.x.scale * e.x,
              p = i.y.scale * e.y;
            a[0 + h] /= l, a[1 + h] /= p;
            const c = (0, M.j)(l, p, .5);
            "number" == typeof a[2 + h] && (a[2 + h] /= c), "number" == typeof a[3 + h] && (a[3 + h] /= c);
            let f = o(a);
            if (s) {
              let t = 0;
              f = f.replace(ft, (() => {
                const e = n[t];
                return t++, e
              }))
            }
            return f
          }
        };
      var mt = i(70181);
      class dt extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: i,
            layoutId: r
          } = this.props, {
            projection: s
          } = t;
          (0, mt.$)(yt), s && (e.group && e.group.add(s), i && i.register && r && i.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
          })), ot.w.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: i,
            drag: r,
            isPresent: s
          } = this.props, n = i.projection;
          return n ? (n.isPresent = s, r || t.layoutDependency !== e || void 0 === e ? n.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? n.promote() : n.relegate() || c.OH.postRender((() => {
            var t;
            (null === (t = n.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: i
          } = this.props, {
            projection: r
          } = t;
          r && (r.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(r), (null == i ? void 0 : i.deregister) && i.deregister(r))
        }
        safeToRemove() {
          const {
            safeToRemove: t
          } = this.props;
          null == t || t()
        }
        render() {
          return null
        }
      }
      const yt = {
          borderRadius: {
            ...lt,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: lt,
          borderTopRightRadius: lt,
          borderBottomLeftRadius: lt,
          borderBottomRightRadius: lt,
          boxShadow: ut
        },
        gt = {
          measureLayout: function(t) {
            const [e, i] = (0, st.xQ)(), r = (0, o.useContext)(nt.L);
            return o.createElement(dt, {
              ...t,
              layoutGroup: r,
              switchLayoutGroup: (0, o.useContext)(at.N),
              isPresent: e,
              safeToRemove: i
            })
          }
        };
      var vt = i(6273),
        bt = i(29592),
        xt = i(78558),
        St = i(16660),
        Pt = i(36763);
      const Et = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ct = Et.length,
        At = t => "string" == typeof t ? parseFloat(t) : t,
        Tt = t => "number" == typeof t || U.px.test(t);

      function Mt(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const kt = _t(0, .5, St.yT),
        wt = _t(.5, .95, Pt.l);

      function _t(t, e, i) {
        return r => r < t ? 0 : r > e ? 1 : i((0, T.q)(t, e, r))
      }

      function Dt(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Ft(t, e) {
        Dt(t.x, e.x), Dt(t.y, e.y)
      }
      var It = i(28761);

      function Vt(t, e, i, r, s) {
        return t -= e, t = (0, It.hq)(t, 1 / i, r), void 0 !== s && (t = (0, It.hq)(t, 1 / s, r)), t
      }

      function Bt(t, e, [i, r, s], n, a) {
        ! function(t, e = 0, i = 1, r = .5, s, n = t, a = t) {
          if (U.KN.test(e) && (e = parseFloat(e), e = (0, M.j)(a.min, a.max, e / 100) - a.min), "number" != typeof e) return;
          let o = (0, M.j)(n.min, n.max, r);
          t === n && (o -= e), t.min = Vt(t.min, e, i, o, s), t.max = Vt(t.max, e, i, o, s)
        }(t, e[i], e[r], e[s], e.scale, n, a)
      }
      const Rt = ["x", "scaleX", "originX"],
        Lt = ["y", "scaleY", "originY"];

      function Ot(t, e, i, r) {
        Bt(t.x, e, Rt, null == i ? void 0 : i.x, null == r ? void 0 : r.x), Bt(t.y, e, Lt, null == i ? void 0 : i.y, null == r ? void 0 : r.y)
      }
      var zt = i(47402);

      function Nt(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function Gt(t) {
        return Nt(t.x) && Nt(t.y)
      }

      function jt(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Ht(t) {
        return k(t.x) / k(t.y)
      }
      var qt = i(14646);
      class Wt {
        constructor() {
          this.members = []
        }
        add(t) {
          (0, qt.Kq)(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if ((0, qt.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e => t === e));
          if (0 === e) return !1;
          let i;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
              i = e;
              break
            }
          }
          return !!i && (this.promote(i), !0)
        }
        promote(t, e) {
          var i;
          const r = this.lead;
          if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), (null === (i = t.root) || void 0 === i ? void 0 : i.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: s
            } = t.options;
            !1 === s && r.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, i, r, s, n;
            null === (i = (e = t.options).onExitComplete) || void 0 === i || i.call(e), null === (n = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (s = r.options).onExitComplete) || void 0 === n || n.call(s)
          }))
        }
        scheduleRender() {
          this.members.forEach((t => {
            t.instance && t.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function $t(t, e, i) {
        let r = "";
        const s = t.x.translate / e.x,
          n = t.y.translate / e.y;
        if ((s || n) && (r = `translate3d(${s}px, ${n}px, 0) `), 1 === e.x && 1 === e.y || (r += `scale(${1/e.x}, ${1/e.y}) `), i) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: s
          } = i;
          t && (r += `rotate(${t}deg) `), e && (r += `rotateX(${e}deg) `), s && (r += `rotateY(${s}deg) `)
        }
        const a = t.x.scale * e.x,
          o = t.y.scale * e.y;
        return 1 === a && 1 === o || (r += `scale(${a}, ${o})`), r || "none"
      }
      var Ut = i(15822);
      const Yt = (t, e) => t.depth - e.depth;
      class Xt {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          (0, qt.Kq)(this.children, t), this.isDirty = !0
        }
        remove(t) {
          (0, qt.Ai)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Yt), this.isDirty = !1, this.children.forEach(t)
        }
      }
      var Jt = i(78466),
        Kt = i(82448);
      const Zt = ["", "X", "Y", "Z"];
      let Qt = 0;

      function te({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: s
      }) {
        return class {
          constructor(t, i = {}, r = (null == e ? void 0 : e())) {
            this.id = Qt++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(re), this.nodes.forEach(he), this.nodes.forEach(le)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = i, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Xt)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new xt.v), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const i = this.eventHandlers.get(t);
            null == i || i.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e)
          }
          mount(e, i = !1) {
            var r;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: s,
              layout: n,
              visualElement: a
            } = this.options;
            if (a && !a.current && a.mount(e), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), i && (n || s) && (this.isLayoutDirty = !0), t) {
              let i;
              const r = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, i && i(), i = (0, Kt.c)(r, 250), ot.w.hasAnimatedSinceResize && (ot.w.hasAnimatedSinceResize = !1, this.nodes.forEach(oe))
              }))
            }
            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && a && (s || n) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: i,
              layout: r
            }) => {
              var s, n, o, h, l;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const p = null !== (n = null !== (s = this.options.transition) && void 0 !== s ? s : a.getDefaultTransition()) && void 0 !== n ? n : de,
                {
                  onLayoutAnimationStart: c,
                  onLayoutAnimationComplete: f
                } = a.getProps(),
                u = !this.targetLayout || !jt(this.targetLayout, r) || i,
                m = !e && i;
              if ((null === (o = this.resumeFrom) || void 0 === o ? void 0 : o.instance) || m || e && (u || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, m);
                const e = {
                  ...(0, zt.rU)(p, "layout"),
                  onPlay: c,
                  onComplete: f
                };
                a.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || oe(this), this.isLead() && (null === (l = (h = this.options).onExitComplete) || void 0 === l || l.call(h));
              this.targetLayout = r
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, c.eO.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var t;
            return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var t;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(pe), this.animationId++)
          }
          willUpdate(t = !0) {
            var e, i, r;
            if (this.root.isUpdateBlocked()) return void(null === (i = (e = this.options).onExitComplete) || void 0 === i || i.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: s,
              layout: n
            } = this.options;
            if (void 0 === s && !n) return;
            const a = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == a ? void 0 : a(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ne);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ye), this.potentialNodes.clear()), this.nodes.forEach(ae), this.nodes.forEach(ee), this.nodes.forEach(ie), this.clearAllSnapshots(), c.qX.update(), c.qX.preRender(), c.qX.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(se), this.sharedNodes.forEach(ce)
          }
          scheduleUpdateProjection() {
            c.OH.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            c.OH.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var t;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = (0, j.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: r(this.instance),
              offset: i(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!s) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              i = this.projectionDelta && !Gt(this.projectionDelta),
              r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              n = null == r ? void 0 : r(this.latestValues, ""),
              a = n !== this.prevTransformTemplateValue;
            e && (i || (0, Ut.HD)(this.latestValues) || a) && (s(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let i = this.removeElementScroll(e);
            var r;
            return t && (i = this.removeTransform(i)), ge((r = i).x), ge(r.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: i,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return (0, j.ge)();
            const e = t.measureViewportBox(),
              {
                scroll: i
              } = this.root;
            return i && ((0, It.Ql)(e.x, i.offset.x), (0, It.Ql)(e.y, i.offset.y)), e
          }
          removeElementScroll(t) {
            const e = (0, j.ge)();
            Ft(e, t);
            for (let i = 0; i < this.path.length; i++) {
              const r = this.path[i],
                {
                  scroll: s,
                  options: n
                } = r;
              if (r !== this.root && s && n.layoutScroll) {
                if (s.isRoot) {
                  Ft(e, t);
                  const {
                    scroll: i
                  } = this.root;
                  i && ((0, It.Ql)(e.x, -i.offset.x), (0, It.Ql)(e.y, -i.offset.y))
                }(0, It.Ql)(e.x, s.offset.x), (0, It.Ql)(e.y, s.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const i = (0, j.ge)();
            Ft(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const r = this.path[t];
              !e && r.options.layoutScroll && r.scroll && r !== r.root && (0, It.Ww)(i, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y
              }), (0, Ut.HD)(r.latestValues) && (0, It.Ww)(i, r.latestValues)
            }
            return (0, Ut.HD)(this.latestValues) && (0, It.Ww)(i, this.latestValues), i
          }
          removeTransform(t) {
            var e;
            const i = (0, j.ge)();
            Ft(i, t);
            for (let t = 0; t < this.path.length; t++) {
              const r = this.path[t];
              if (!r.instance) continue;
              if (!(0, Ut.HD)(r.latestValues)) continue;
              (0, Ut.vk)(r.latestValues) && r.updateSnapshot();
              const s = (0, j.ge)();
              Ft(s, r.measurePageBox()), Ot(i, r.latestValues, null === (e = r.snapshot) || void 0 === e ? void 0 : e.layoutBox, s)
            }
            return (0, Ut.HD)(this.latestValues) && Ot(i, this.latestValues), i
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          resolveTargetDelta() {
            var t;
            const e = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: i,
              layoutId: r
            } = this.options;
            if (this.layout && (i || r)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, j.ge)(), this.relativeTargetOrigin = (0, j.ge)(), V(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var s, n, a;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, j.ge)(), this.targetWithTransforms = (0, j.ge)()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (s = this.target, n = this.relativeTarget, a = this.relativeParent.target, F(s.x, n.x, a.x), F(s.y, n.y, a.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Ft(this.target, this.layout.layoutBox), (0, It.o4)(this.target, this.targetDelta)) : Ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, j.ge)(), this.relativeTargetOrigin = (0, j.ge)(), V(this.relativeTargetOrigin, this.target, t.target), Ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !(0, Ut.vk)(this.parent.latestValues) && !(0, Ut.vF)(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: i
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const r = this.getLead(),
              s = Boolean(this.resumingFrom) || this !== r;
            let n = !0;
            if (e && (n = !1), s && i && (n = !1), n) return;
            const {
              layout: a,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !a && !o) return;
            Ft(this.layoutCorrected, this.layout.layoutBox), (0, It.OU)(this.layoutCorrected, this.treeScale, this.path, s);
            const {
              target: h
            } = r;
            if (!h) return;
            this.projectionDelta || (this.projectionDelta = (0, j.xU)(), this.projectionDeltaWithTransform = (0, j.xU)());
            const l = this.treeScale.x,
              p = this.treeScale.y,
              c = this.projectionTransform;
            D(this.projectionDelta, this.layoutCorrected, h, this.latestValues), this.projectionTransform = $t(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === l && this.treeScale.y === p || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, i, r;
            null === (i = (e = this.options).scheduleRender) || void 0 === i || i.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var i, r;
            const s = this.snapshot,
              n = (null == s ? void 0 : s.latestValues) || {},
              a = {
                ...this.latestValues
              },
              o = (0, j.xU)();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const h = (0, j.ge)(),
              l = (null == s ? void 0 : s.source) !== (null === (i = this.layout) || void 0 === i ? void 0 : i.source),
              p = ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0) <= 1,
              c = Boolean(l && !p && !0 === this.options.crossfade && !this.path.some(me));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var i;
              const r = e / 1e3;
              var s, f, u, m;
              fe(o.x, t.x, r), fe(o.y, t.y, r), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (i = this.relativeParent) || void 0 === i ? void 0 : i.layout) && (V(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), s = this.relativeTarget, f = this.relativeTargetOrigin, u = h, m = r, ue(s.x, f.x, u.x, m), ue(s.y, f.y, u.y, m)), l && (this.animationValues = a, function(t, e, i, r, s, n) {
                s ? (t.opacity = (0, M.j)(0, void 0 !== i.opacity ? i.opacity : 1, kt(r)), t.opacityExit = (0, M.j)(void 0 !== e.opacity ? e.opacity : 1, 0, wt(r))) : n && (t.opacity = (0, M.j)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, r));
                for (let s = 0; s < Ct; s++) {
                  const n = `border${Et[s]}Radius`;
                  let a = Mt(e, n),
                    o = Mt(i, n);
                  void 0 === a && void 0 === o || (a || (a = 0), o || (o = 0), 0 === a || 0 === o || Tt(a) === Tt(o) ? (t[n] = Math.max((0, M.j)(At(a), At(o), r), 0), (U.KN.test(o) || U.KN.test(a)) && (t[n] += "%")) : t[n] = o)
                }(e.rotate || i.rotate) && (t.rotate = (0, M.j)(e.rotate || 0, i.rotate || 0, r))
              }(a, n, this.latestValues, r, c, p)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, i;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (i = this.resumingFrom.currentAnimation) || void 0 === i || i.stop()), this.pendingAnimation && (c.eO.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = c.OH.update((() => {
              ot.w.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, i = {}) {
                const r = (0, bt.S)(t) ? t : (0, vt.O)(t);
                return r.start((0, Y.O)("", r, e, i)), {
                  stop: () => r.stop(),
                  isAnimating: () => r.isAnimating()
                }
              }(0, 1e3, {
                ...t,
                onUpdate: e => {
                  var i;
                  this.mixTargetDelta(e), null === (i = t.onUpdate) || void 0 === i || i.call(t, e)
                },
                onComplete: () => {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var t;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var t;
            this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: i,
              layout: r,
              latestValues: s
            } = t;
            if (e && i && r) {
              if (this !== t && this.layout && r && ve(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                i = this.target || (0, j.ge)();
                const e = k(this.layout.layoutBox.x);
                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                const r = k(this.layout.layoutBox.y);
                i.y.min = t.target.y.min, i.y.max = i.y.min + r
              }
              Ft(e, i), (0, It.Ww)(e, s), D(this.projectionDeltaWithTransform, this.layoutCorrected, e, s)
            }
          }
          registerSharedNode(t, e) {
            var i, r, s;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Wt), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.transition,
              preserveFollowOpacity: null === (s = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === s ? void 0 : s.call(r, e)
            })
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this
          }
          getLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
          }
          getPrevLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i
          } = {}) {
            const r = this.getStack();
            r && r.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
              transition: e
            })
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
              latestValues: i
            } = t;
            if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
            const r = {};
            for (let e = 0; e < Zt.length; e++) {
              const s = "rotate" + Zt[e];
              i[s] && (r[s] = i[s], t.setStaticValue(s, 0))
            }
            null == t || t.render();
            for (const e in r) t.setStaticValue(e, r[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, i, r;
            const s = {};
            if (!this.instance || this.isSVG) return s;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            s.visibility = "";
            const n = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = (0, Jt.u)(t.pointerEvents) || "", s.transform = n ? n(this.latestValues, "") : "none", s;
            const a = this.getLead();
            if (!this.projectionDelta || !this.layout || !a.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, Jt.u)(t.pointerEvents) || ""), this.hasProjected && !(0, Ut.HD)(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1), e
            }
            const o = a.animationValues || a.latestValues;
            this.applyTransformsToTarget(), s.transform = $t(this.projectionDeltaWithTransform, this.treeScale, o), n && (s.transform = n(o, s.transform));
            const {
              x: h,
              y: l
            } = this.projectionDelta;
            s.transformOrigin = `${100*h.origin}% ${100*l.origin}% 0`, a.animationValues ? s.opacity = a === this ? null !== (r = null !== (i = o.opacity) && void 0 !== i ? i : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : s.opacity = a === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const t in mt.H) {
              if (void 0 === o[t]) continue;
              const {
                correct: e,
                applyTo: i
              } = mt.H[t], r = e(o[t], a);
              if (i) {
                const t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = r
              } else s[t] = r
            }
            return this.options.layoutId && (s.pointerEvents = a === this ? (0, Jt.u)(t.pointerEvents) || "" : "none"), s
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(ne), this.root.sharedNodes.clear()
          }
        }
      }

      function ee(t) {
        t.updateLayout()
      }

      function ie(t) {
        var e, i, r;
        const s = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && s && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: i
          } = t.layout, {
            animationType: r
          } = t.options, n = s.source !== t.layout.source;
          "size" === r ? H((t => {
            const i = n ? s.measuredBox[t] : s.layoutBox[t],
              r = k(i);
            i.min = e[t].min, i.max = i.min + r
          })) : ve(r, s.layoutBox, e) && H((t => {
            const i = n ? s.measuredBox[t] : s.layoutBox[t],
              r = k(e[t]);
            i.max = i.min + r
          }));
          const a = (0, j.xU)();
          D(a, e, s.layoutBox);
          const o = (0, j.xU)();
          n ? D(o, t.applyTransform(i, !0), s.measuredBox) : D(o, e, s.layoutBox);
          const h = !Gt(a);
          let l = !1;
          if (!t.resumeFrom) {
            const i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              const {
                snapshot: t,
                layout: r
              } = i;
              if (t && r) {
                const i = (0, j.ge)();
                V(i, s.layoutBox, t.layoutBox);
                const n = (0, j.ge)();
                V(n, e, r.layoutBox), jt(i, n) || (l = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: s,
            delta: o,
            layoutDelta: a,
            hasLayoutChanged: h,
            hasRelativeTargetChanged: l
          })
        } else t.isLead() && (null === (r = (i = t.options).onExitComplete) || void 0 === r || r.call(i));
        t.options.transition = void 0
      }

      function re(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function se(t) {
        t.clearSnapshot()
      }

      function ne(t) {
        t.clearMeasurements()
      }

      function ae(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function oe(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function he(t) {
        t.resolveTargetDelta()
      }

      function le(t) {
        t.calcProjection()
      }

      function pe(t) {
        t.resetRotation()
      }

      function ce(t) {
        t.removeLeadSnapshot()
      }

      function fe(t, e, i) {
        t.translate = (0, M.j)(e.translate, 0, i), t.scale = (0, M.j)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function ue(t, e, i, r) {
        t.min = (0, M.j)(e.min, i.min, r), t.max = (0, M.j)(e.max, i.max, r)
      }

      function me(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const de = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function ye(t, e) {
        let i = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            i = t.path[e];
            break
          } const r = (i && i !== t.root ? i.instance : document).querySelector(`[data-projection-id="${e}"]`);
        r && t.mount(r, !0)
      }

      function ge(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function ve(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !w(Ht(e), Ht(i), .2)
      }
      const be = te({
          attachResizeListener: (t, e) => (0, $.k)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        xe = {
          current: void 0
        },
        Se = te({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!xe.current) {
              const t = new be(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), xe.current = t
            }
            return xe.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Pe = {
          ...a.W,
          ...n.n,
          ...it,
          ...gt
        },
        Ee = (0, r.H)(((t, e) => (0, s.P)(t, e, Pe, rt.J, Se)))
    },
    83014: (t, e, i) => {
      "use strict";
      i.d(e, {
        Q: () => r
      });
      const r = (0, i(62229).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    83413: (t, e, i) => {
      "use strict";
      i.d(e, {
        N: () => r
      });
      const r = (0, i(62229).createContext)({})
    },
    83698: (t, e, i) => {
      "use strict";
      i.d(e, {
        O: () => vt
      });
      var r = i(4826),
        s = i(17761);
      var n = i(80890),
        a = i(41585),
        o = i(90306);
      const h = t => t * t,
        l = (0, o.G)(h),
        p = (0, a.V)(h);
      var c = i(34219),
        f = i(25168),
        u = i(10631);

      function m(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
      }
      var d = i(33556),
        y = i(77719),
        g = i(66603);
      const v = (t, e, i) => {
          const r = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - r) + r))
        },
        b = [d.u, y.B, g.V];

      function x(t) {
        const e = (i = t, b.find((t => t.test(i))));
        var i;
        (0, r.V)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let s = e.parse(t);
        return e === g.V && (s = function({
          hue: t,
          saturation: e,
          lightness: i,
          alpha: r
        }) {
          t /= 360, i /= 100;
          let s = 0,
            n = 0,
            a = 0;
          if (e /= 100) {
            const r = i < .5 ? i * (1 + e) : i + e - i * e,
              o = 2 * i - r;
            s = m(o, r, t + 1 / 3), n = m(o, r, t), a = m(o, r, t - 1 / 3)
          } else s = n = a = i;
          return {
            red: Math.round(255 * s),
            green: Math.round(255 * n),
            blue: Math.round(255 * a),
            alpha: r
          }
        }(s)), s
      }
      const S = (t, e) => {
        const i = x(t),
          r = x(e),
          s = {
            ...i
          };
        return t => (s.red = v(i.red, r.red, t), s.green = v(i.green, r.green, t), s.blue = v(i.blue, r.blue, t), s.alpha = (0, u.j)(i.alpha, r.alpha, t), y.B.transform(s))
      };
      var P = i(95611),
        E = i(81982);

      function C(t, e) {
        return "number" == typeof t ? i => (0, u.j)(t, e, i) : c.y.test(t) ? S(t, e) : M(t, e)
      }
      const A = (t, e) => {
          const i = [...t],
            r = i.length,
            s = t.map(((t, i) => C(t, e[i])));
          return t => {
            for (let e = 0; e < r; e++) i[e] = s[e](t);
            return i
          }
        },
        T = (t, e) => {
          const i = {
              ...t,
              ...e
            },
            r = {};
          for (const s in i) void 0 !== t[s] && void 0 !== e[s] && (r[s] = C(t[s], e[s]));
          return t => {
            for (const e in r) i[e] = r[e](t);
            return i
          }
        },
        M = (t, e) => {
          const i = E.f.createTransformer(e),
            s = (0, E.V)(t),
            n = (0, E.V)(e);
          return s.numColors === n.numColors && s.numNumbers >= n.numNumbers ? (0, P.F)(A(s.values, n.values), i) : ((0, r.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), i => `${i>0?e:t}`)
        };
      var k = i(67026);
      const w = (t, e) => i => (0, u.j)(t, e, i);

      function _(t, e, {
        clamp: i = !0,
        ease: s,
        mixer: n
      } = {}) {
        const a = t.length;
        (0, r.V)(a === e.length, "Both input and output ranges must be the same length"), (0, r.V)(!s || !Array.isArray(s) || s.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const o = function(t, e, i) {
            const r = [],
              s = i || ("number" == typeof(n = t[0]) ? w : "string" == typeof n ? c.y.test(n) ? S : M : Array.isArray(n) ? A : "object" == typeof n ? T : w);
            var n;
            const a = t.length - 1;
            for (let i = 0; i < a; i++) {
              let n = s(t[i], t[i + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[i] : e;
                n = (0, P.F)(t, n)
              }
              r.push(n)
            }
            return r
          }(e, s, n),
          h = o.length,
          l = e => {
            let i = 0;
            if (h > 1)
              for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            const r = (0, k.q)(t[i], t[i + 1], e);
            return o[i](r)
          };
        return i ? e => l((0, f.q)(t[0], t[a - 1], e)) : l
      }
      var D = i(36763);
      const F = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

      function I(t, e, i, r) {
        if (t === e && i === r) return D.l;
        return s => 0 === s || 1 === s ? s : F(function(t, e, i, r, s) {
          let n, a, o = 0;
          do {
            a = e + (i - e) / 2, n = F(a, r, s) - t, n > 0 ? i = a : e = a
          } while (Math.abs(n) > 1e-7 && ++o < 12);
          return a
        }(s, 0, 1, t, i), e, r)
      }
      var V = i(16660);
      const B = I(.33, 1.53, .69, .99),
        R = (0, o.G)(B),
        L = (0, a.V)(R),
        O = {
          linear: D.l,
          easeIn: h,
          easeInOut: p,
          easeOut: l,
          circIn: V.po,
          circInOut: V.tn,
          circOut: V.yT,
          backIn: R,
          backInOut: L,
          backOut: B,
          anticipate: t => (t *= 2) < 1 ? .5 * R(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        z = t => {
          if (Array.isArray(t)) {
            (0, r.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, i, s, n] = t;
            return I(e, i, s, n)
          }
          return "string" == typeof t ? ((0, r.V)(void 0 !== O[t], `Invalid easing type '${t}'`), O[t]) : t
        };

      function N({
        keyframes: t,
        ease: e = p,
        times: i,
        duration: r = 300
      }) {
        t = [...t];
        const s = N[0],
          n = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(z) : z(e),
          a = {
            done: !1,
            value: s
          },
          o = function(t, e) {
            return t.map((t => t * e))
          }(i && i.length === N.length ? i : function(t) {
            const e = t.length;
            return t.map(((t, i) => 0 !== i ? i / (e - 1) : 0))
          }(t), r);

        function h() {
          return _(o, t, {
            ease: Array.isArray(n) ? n : (e = t, i = n, e.map((() => i || p)).splice(0, e.length - 1))
          });
          var e, i
        }
        let l = h();
        return {
          next: t => (a.value = l(t), a.done = t >= r, a),
          flipTarget: () => {
            t.reverse(), l = h()
          }
        }
      }
      const G = 12;

      function j(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      var H = i(22729);
      const q = ["duration", "bounce"],
        W = ["stiffness", "damping", "mass"];

      function $(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function U({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: i = .01,
        ...s
      }) {
        let n = t[0],
          a = t[t.length - 1];
        const o = {
            done: !1,
            value: n
          },
          {
            stiffness: h,
            damping: l,
            mass: p,
            velocity: c,
            duration: u,
            isResolvedFromDuration: m
          } = function(t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!$(t, W) && $(t, q)) {
              const i = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: i = 0,
                mass: s = 1
              }) {
                let n, a;
                (0, r.$)(t <= 1e4, "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                o = (0, f.q)(.05, 1, o), t = (0, f.q)(.01, 10, t / 1e3), o < 1 ? (n = e => {
                  const r = e * o,
                    s = r * t;
                  return .001 - (r - i) / j(e, o) * Math.exp(-s)
                }, a = e => {
                  const r = e * o * t,
                    s = r * i + i,
                    a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                    h = Math.exp(-r),
                    l = j(Math.pow(e, 2), o);
                  return (.001 - n(e) > 0 ? -1 : 1) * ((s - a) * h) / l
                }) : (n = e => Math.exp(-e * t) * ((e - i) * t + 1) - .001, a = e => Math.exp(-e * t) * (t * t * (i - e)));
                const h = function(t, e, i) {
                  let r = i;
                  for (let i = 1; i < G; i++) r -= t(r) / e(r);
                  return r
                }(n, a, 5 / t);
                if (t *= 1e3, isNaN(h)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(h, 2) * s;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(s * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }(s);
        let d = Y,
          y = c ? -c / 1e3 : 0;
        const g = l / (2 * Math.sqrt(h * p));

        function v() {
          const t = a - n,
            e = Math.sqrt(h / p) / 1e3;
          if (void 0 === i && (i = Math.min(Math.abs(a - n) / 100, .4)), g < 1) {
            const i = j(e, g);
            d = r => {
              const s = Math.exp(-g * e * r);
              return a - s * ((y + g * e * t) / i * Math.sin(i * r) + t * Math.cos(i * r))
            }
          } else if (1 === g) d = i => a - Math.exp(-e * i) * (t + (y + e * t) * i);
          else {
            const i = e * Math.sqrt(g * g - 1);
            d = r => {
              const s = Math.exp(-g * e * r),
                n = Math.min(i * r, 300);
              return a - s * ((y + g * e * t) * Math.sinh(n) + i * t * Math.cosh(n)) / i
            }
          }
        }
        return v(), {
          next: t => {
            const r = d(t);
            if (m) o.done = t >= u;
            else {
              let s = y;
              if (0 !== t)
                if (g < 1) {
                  const e = Math.max(0, t - 5);
                  s = (0, H.f)(r - d(e), t - e)
                } else s = 0;
              const n = Math.abs(s) <= e,
                h = Math.abs(a - r) <= i;
              o.done = n && h
            }
            return o.value = o.done ? a : r, o
          },
          flipTarget: () => {
            y = -y, [n, a] = [a, n], v()
          }
        }
      }
      U.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const Y = t => 0,
        X = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: i = .8,
            timeConstant: r = 350,
            restDelta: s = .5,
            modifyTarget: n
          }) {
            const a = t[0],
              o = {
                done: !1,
                value: a
              };
            let h = i * e;
            const l = a + h,
              p = void 0 === n ? l : n(l);
            return p !== l && (h = p - a), {
              next: t => {
                const e = -h * Math.exp(-t / r);
                return o.done = !(e > s || e < -s), o.value = o.done ? p : p + e, o
              },
              flipTarget: () => {}
            }
          },
          keyframes: N,
          tween: N,
          spring: U
        };

      function J(t, e, i = 0) {
        return t - e - i
      }
      const K = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => n.OH.update(e, !0),
          stop: () => n.eO.update(e)
        }
      };

      function Z({
        duration: t,
        driver: e = K,
        elapsed: i = 0,
        repeat: r = 0,
        repeatType: s = "loop",
        repeatDelay: n = 0,
        keyframes: a,
        autoplay: o = !0,
        onPlay: h,
        onStop: l,
        onComplete: p,
        onRepeat: c,
        onUpdate: f,
        type: u = "keyframes",
        ...m
      }) {
        var d, y;
        let g, v, b, x = 0,
          S = t,
          P = !1,
          E = !0;
        const C = X[a.length > 2 ? "keyframes" : u],
          A = a[0],
          T = a[a.length - 1];
        (null === (y = (d = C).needsInterpolation) || void 0 === y ? void 0 : y.call(d, A, T)) && (b = _([0, 100], [A, T], {
          clamp: !1
        }), a = [0, 100]);
        const M = C({
          ...m,
          duration: t,
          keyframes: a
        });
        return o && (h && h(), g = e((function(t) {
          if (E || (t = -t), i += t, !P) {
            const t = M.next(Math.max(0, i));
            v = t.value, b && (v = b(v)), P = E ? t.done : i <= 0
          }
          f && f(v), P && (0 === x && (S = void 0 !== S ? S : i), x < r ? function(t, e, i, r) {
            return r ? t >= e + i : t <= -i
          }(i, S, n, E) && (x++, "reverse" === s ? (E = x % 2 == 0, i = function(t, e = 0, i = 0, r = !0) {
            return r ? J(e + -t, e, i) : e - (t - e) + i
          }(i, S, n, E)) : (i = J(i, S, n), "mirror" === s && M.flipTarget()), P = !1, c && c()) : (g.stop(), p && p()))
        })), g.start()), {
          stop: () => {
            l && l(), g.stop()
          },
          sample: t => M.next(Math.max(0, t))
        }
      }
      const Q = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        tt = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: Q([0, .65, .55, 1]),
          circOut: Q([.55, 0, 1, .45]),
          backIn: Q([.31, .01, .66, -.59]),
          backOut: Q([.33, 1.53, .69, .99])
        };

      function et(t) {
        if (t) return Array.isArray(t) ? Q(t) : tt[t]
      }
      var it = i(82448);

      function rt({
        keyframes: t,
        elapsed: e,
        onUpdate: i,
        onComplete: r
      }) {
        const s = () => (i && i(t[t.length - 1]), r && r(), () => {});
        return e ? (0, it.c)(s, -e) : s()
      }
      var st = i(9581);
      const nt = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        at = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        ot = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        ht = {
          type: "keyframes",
          duration: .8
        },
        lt = {
          x: nt,
          y: nt,
          z: nt,
          rotate: nt,
          rotateX: nt,
          rotateY: nt,
          rotateZ: nt,
          scaleX: at,
          scaleY: at,
          scale: at,
          opacity: ot,
          backgroundColor: ot,
          color: ot,
          default: at
        },
        pt = (t, {
          keyframes: e
        }) => e.length > 2 ? ht : (lt[t] || lt.default)(e[1]),
        ct = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !E.f.test(e) || e.startsWith("url(")));
      var ft = i(14680),
        ut = i(47402);
      const mt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        dt = {},
        yt = {};
      for (const t in mt) yt[t] = () => (void 0 === dt[t] && (dt[t] = mt[t]()), dt[t]);
      const gt = new Set(["opacity"]),
        vt = (t, e, i, a = {}) => o => {
          const h = (0, ut.rU)(a, t) || {},
            l = h.delay || a.delay || 0;
          let {
            elapsed: p = 0
          } = a;
          p -= (0, s.f)(l);
          const c = function(t, e, i, r) {
              const s = ct(e, i);
              let n = void 0 !== r.from ? r.from : t.get();
              return "none" === n && s && "string" == typeof i ? n = (0, ft.J)(e, i) : (0, ut.be)(n) && "string" == typeof i ? n = (0, ut.RL)(i) : !Array.isArray(i) && (0, ut.be)(i) && "string" == typeof n && (i = (0, ut.RL)(n)), Array.isArray(i) ? (null === i[0] && (i[0] = n), i) : [n, i]
            }(e, t, i, h),
            f = c[0],
            u = c[c.length - 1],
            m = ct(t, f),
            d = ct(t, u);
          (0, r.$)(m === d, `You are trying to animate ${t} from "${f}" to "${u}". ${f} is not an animatable value - to enable this animation set ${f} to a value animatable to ${u} via the \`style\` property.`);
          let y = {
            keyframes: c,
            velocity: e.getVelocity(),
            ...h,
            elapsed: p,
            onUpdate: t => {
              e.set(t), h.onUpdate && h.onUpdate(t)
            },
            onComplete: () => {
              o(), h.onComplete && h.onComplete()
            }
          };
          if (!m || !d || !1 === h.type) return rt(y);
          if ("inertia" === h.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: i,
              max: r,
              power: s = .8,
              timeConstant: n = 750,
              bounceStiffness: a = 500,
              bounceDamping: o = 10,
              restDelta: h = 1,
              modifyTarget: l,
              driver: p,
              onUpdate: c,
              onComplete: f,
              onStop: u
            }) {
              const m = t[0];
              let d;

              function y(t) {
                return void 0 !== i && t < i || void 0 !== r && t > r
              }

              function g(t) {
                return void 0 === i ? r : void 0 === r || Math.abs(i - t) < Math.abs(r - t) ? i : r
              }

              function v(t) {
                null == d || d.stop(), d = Z({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...t,
                  driver: p,
                  onUpdate: e => {
                    var i;
                    null == c || c(e), null === (i = t.onUpdate) || void 0 === i || i.call(t, e)
                  },
                  onComplete: f,
                  onStop: u
                })
              }

              function b(t) {
                v({
                  type: "spring",
                  stiffness: a,
                  damping: o,
                  restDelta: h,
                  ...t
                })
              }
              if (y(m)) b({
                velocity: e,
                keyframes: [m, g(m)]
              });
              else {
                let t = s * e + m;
                void 0 !== l && (t = l(t));
                const r = g(t),
                  a = r === i ? -1 : 1;
                let o, p;
                const c = t => {
                  o = p, p = t, e = (0, H.f)(t - o, st.u.delta), (1 === a && t > r || -1 === a && t < r) && b({
                    keyframes: [t, r],
                    velocity: e
                  })
                };
                v({
                  type: "decay",
                  keyframes: [m, 0],
                  velocity: e,
                  timeConstant: n,
                  power: s,
                  restDelta: h,
                  modifyTarget: l,
                  onUpdate: y(t) ? c : void 0
                })
              }
              return {
                stop: () => null == d ? void 0 : d.stop()
              }
            }(y);
            return () => t.stop()
          }(0, ut.D2)(h) || (y = {
            ...y,
            ...pt(t, y)
          }), y.duration && (y.duration = (0, s.f)(y.duration)), y.repeatDelay && (y.repeatDelay = (0, s.f)(y.repeatDelay));
          const g = e.owner,
            v = g && g.current;
          if (yt.waapi() && gt.has(t) && !y.repeatDelay && "mirror" !== y.repeatType && 0 !== y.damping && g && v instanceof HTMLElement && !g.getProps().onUpdate) return function(t, e, {
            onUpdate: i,
            onComplete: r,
            ...s
          }) {
            let {
              keyframes: a,
              duration: o = .3,
              elapsed: h = 0,
              ease: l
            } = s;
            if ("spring" === s.type || !(!(p = s.ease) || Array.isArray(p) || "string" == typeof p && tt[p])) {
              const t = Z(s);
              let e = {
                done: !1,
                value: a[0]
              };
              const i = [];
              let r = 0;
              for (; !e.done;) e = t.sample(r), i.push(e.value), r += 10;
              a = i, o = r - 10, l = "linear"
            }
            var p;
            const c = function(t, e, i, {
              delay: r = 0,
              duration: s,
              repeat: n = 0,
              repeatType: a = "loop",
              ease: o,
              times: h
            } = {}) {
              return t.animate({
                [e]: i,
                offset: h
              }, {
                delay: r,
                duration: s,
                easing: et(o),
                fill: "both",
                iterations: n + 1,
                direction: "reverse" === a ? "alternate" : "normal"
              })
            }(t.owner.current, e, a, {
              ...s,
              delay: -h,
              duration: o,
              ease: l
            });
            return c.onfinish = () => {
              t.set(a[a.length - 1]), r && r()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const i = Z(s);
                t.setWithVelocity(i.sample(e - 10).value, i.sample(e).value, 10)
              }
              n.OH.update((() => c.cancel()))
            }
          }(e, t, y); {
            const t = Z(y);
            return () => t.stop()
          }
        }
    },
    84082: (t, e) => {
      var i;
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function s() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var i = arguments[e];
            i && (t = a(t, n(i)))
          }
          return t
        }

        function n(t) {
          if ("string" == typeof t || "number" == typeof t) return t;
          if ("object" != typeof t) return "";
          if (Array.isArray(t)) return s.apply(null, t);
          if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
          var e = "";
          for (var i in t) r.call(t, i) && t[i] && (e = a(e, i));
          return e
        }

        function a(t, e) {
          return e ? t ? t + " " + e : t + e : t
        }
        t.exports ? (s.default = s, t.exports = s) : void 0 === (i = function() {
          return s
        }.apply(e, [])) || (t.exports = i)
      }()
    },
    84273: (t, e, i) => {
      "use strict";
      i.d(e, {
        T: () => a,
        n: () => o
      });
      var r = i(4208),
        s = i(29525),
        n = i(26161);
      const a = [r.ai, s.px, s.KN, s.uj, s.vw, s.vh, {
          test: t => "auto" === t,
          parse: t => t
        }],
        o = t => a.find((0, n.w)(t))
    },
    85404: (t, e, i) => {
      "use strict";
      i.d(e, {
        B: () => h
      });
      var r = i(33307),
        s = i(29525);

      function n(t, e, i) {
        return "string" == typeof t ? t : s.px.transform(e + i * t)
      }
      const a = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        o = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function h(t, {
        attrX: e,
        attrY: i,
        originX: h,
        originY: l,
        pathLength: p,
        pathSpacing: c = 1,
        pathOffset: f = 0,
        ...u
      }, m, d, y) {
        if ((0, r.O)(t, u, m, y), d) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: g,
          style: v,
          dimensions: b
        } = t;
        g.transform && (b && (v.transform = g.transform), delete g.transform), b && (void 0 !== h || void 0 !== l || v.transform) && (v.transformOrigin = function(t, e, i) {
          return `${n(e,t.x,t.width)} ${n(i,t.y,t.height)}`
        }(b, void 0 !== h ? h : .5, void 0 !== l ? l : .5)), void 0 !== e && (g.x = e), void 0 !== i && (g.y = i), void 0 !== p && function(t, e, i = 1, r = 0, n = !0) {
          t.pathLength = 1;
          const h = n ? a : o;
          t[h.offset] = s.px.transform(-r);
          const l = s.px.transform(e),
            p = s.px.transform(i);
          t[h.array] = `${l} ${p}`
        }(g, p, c, f, !1)
      }
    },
    88091: (t, e, i) => {
      "use strict";
      i.d(e, {
        ci: () => C,
        US: () => S
      });
      var r = i(24866),
        s = i(74496);

      function n(t, e) {
        if (!Array.isArray(e)) return !1;
        const i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++)
          if (e[r] !== t[r]) return !1;
        return !0
      }
      var a = i(4175),
        o = i(62369),
        h = i(40296),
        l = i(54165),
        p = i(80890);
      const c = (t, e) => `${t}: ${e}`;

      function f(t, e) {
        const {
          MotionAppearAnimations: i
        } = window, r = c(t, h.f.has(e) ? "transform" : e), s = i && i.get(r);
        return s ? (p.OH.render((() => {
          try {
            s.cancel(), i.delete(r)
          } catch (t) {}
        })), s.currentTime || 0) : 0
      }
      const u = "data-" + (0, i(37774).I)("framerAppearId");
      var m = i(83698);

      function d(t, e, i = {}) {
        var r;
        const s = (0, o.K)(t, e, i.custom);
        let {
          transition: n = t.getDefaultTransition() || {}
        } = s || {};
        i.transitionOverride && (n = i.transitionOverride);
        const a = s ? () => y(t, s, i) : () => Promise.resolve(),
          h = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
            const {
              delayChildren: s = 0,
              staggerChildren: a,
              staggerDirection: o
            } = n;
            return function(t, e, i = 0, r = 0, s = 1, n) {
              const a = [],
                o = (t.variantChildren.size - 1) * r,
                h = 1 === s ? (t = 0) => t * r : (t = 0) => o - t * r;
              return Array.from(t.variantChildren).sort(g).forEach(((t, r) => {
                a.push(d(t, e, {
                  ...n,
                  delay: i + h(r)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(a)
            }(t, e, s + r, a, o, i)
          } : () => Promise.resolve(),
          {
            when: l
          } = n;
        if (l) {
          const [t, e] = "beforeChildren" === l ? [a, h] : [h, a];
          return t().then(e)
        }
        return Promise.all([a(), h(i.delay)])
      }

      function y(t, e, {
        delay: i = 0,
        transitionOverride: r,
        type: s
      } = {}) {
        var n;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: p,
          ...c
        } = t.makeTargetAnimatable(e);
        const d = t.getValue("willChange");
        r && (o = r);
        const y = [],
          g = s && (null === (n = t.animationState) || void 0 === n ? void 0 : n.getState()[s]);
        for (const e in c) {
          const r = t.getValue(e),
            s = c[e];
          if (!r || void 0 === s || g && v(g, e)) continue;
          let n = {
            delay: i,
            elapsed: 0,
            ...o
          };
          if (t.shouldReduceMotion && h.f.has(e) && (n = {
              ...n,
              type: !1,
              delay: 0
            }), !r.hasAnimated) {
            const i = t.getProps()[u];
            i && (n.elapsed = f(i, e))
          }
          let a = r.start((0, m.O)(e, r, s, n));
          (0, l.k)(d) && (d.add(e), a = a.then((() => d.remove(e)))), y.push(a)
        }
        return Promise.all(y).then((() => {
          p && (0, a.Uo)(t, p)
        }))
      }

      function g(t, e) {
        return t.sortNodePosition(e)
      }

      function v({
        protectedKeys: t,
        needsAnimating: e
      }, i) {
        const r = t.hasOwnProperty(i) && !0 !== e[i];
        return e[i] = !1, r
      }
      var b = i(71031),
        x = i(80985);
      const S = [x.J.Animate, x.J.InView, x.J.Focus, x.J.Hover, x.J.Tap, x.J.Drag, x.J.Exit],
        P = [...S].reverse(),
        E = S.length;

      function C(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: i
          }) => function(t, e, i = {}) {
            let r;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const s = e.map((e => d(t, e, i)));
              r = Promise.all(s)
            } else if ("string" == typeof e) r = d(t, e, i);
            else {
              const s = "function" == typeof e ? (0, o.K)(t, e, i.custom) : e;
              r = y(t, s, i)
            }
            return r.then((() => t.notify("AnimationComplete", e)))
          }(t, e, i))))
        }(t);
        const i = {
          [x.J.Animate]: A(!0),
          [x.J.InView]: A(),
          [x.J.Hover]: A(),
          [x.J.Tap]: A(),
          [x.J.Drag]: A(),
          [x.J.Focus]: A(),
          [x.J.Exit]: A()
        };
        let a = !0;
        const h = (e, i) => {
          const r = (0, o.K)(t, i);
          if (r) {
            const {
              transition: t,
              transitionEnd: i,
              ...s
            } = r;
            e = {
              ...e,
              ...s,
              ...i
            }
          }
          return e
        };

        function l(o, l) {
          const p = t.getProps(),
            c = t.getVariantContext(!0) || {},
            f = [],
            u = new Set;
          let m = {},
            d = 1 / 0;
          for (let e = 0; e < E; e++) {
            const v = P[e],
              x = i[v],
              S = void 0 !== p[v] ? p[v] : c[v],
              E = (0, b.w)(S),
              C = v === l ? x.isActive : null;
            !1 === C && (d = e);
            let A = S === c[v] && S !== p[v] && E;
            if (A && a && t.manuallyAnimateOnMount && (A = !1), x.protectedKeys = {
                ...m
              }, !x.isActive && null === C || !S && !x.prevProp || (0, r.N)(S) || "boolean" == typeof S) continue;
            const T = (y = x.prevProp, "string" == typeof(g = S) ? g !== y : !!Array.isArray(g) && !n(g, y));
            let M = T || v === l && x.isActive && !A && E || e > d && E;
            const k = Array.isArray(S) ? S : [S];
            let w = k.reduce(h, {});
            !1 === C && (w = {});
            const {
              prevResolvedValues: _ = {}
            } = x, D = {
              ..._,
              ...w
            }, F = t => {
              M = !0, u.delete(t), x.needsAnimating[t] = !0
            };
            for (const t in D) {
              const e = w[t],
                i = _[t];
              m.hasOwnProperty(t) || (e !== i ? (0, s.p)(e) && (0, s.p)(i) ? !n(e, i) || T ? F(t) : x.protectedKeys[t] = !0 : void 0 !== e ? F(t) : u.add(t) : void 0 !== e && u.has(t) ? F(t) : x.protectedKeys[t] = !0)
            }
            x.prevProp = S, x.prevResolvedValues = w, x.isActive && (m = {
              ...m,
              ...w
            }), a && t.blockInitialAnimation && (M = !1), M && !A && f.push(...k.map((t => ({
              animation: t,
              options: {
                type: v,
                ...o
              }
            }))))
          }
          var y, g;
          if (u.size) {
            const e = {};
            u.forEach((i => {
              const r = t.getBaseTarget(i);
              void 0 !== r && (e[i] = r)
            })), f.push({
              animation: e
            })
          }
          let v = Boolean(f.length);
          return a && !1 === p.initial && !t.manuallyAnimateOnMount && (v = !1), a = !1, v ? e(f) : Promise.resolve()
        }
        return {
          animateChanges: l,
          setActive: function(e, r, s) {
            var n;
            if (i[e].isActive === r) return Promise.resolve();
            null === (n = t.variantChildren) || void 0 === n || n.forEach((t => {
              var i;
              return null === (i = t.animationState) || void 0 === i ? void 0 : i.setActive(e, r)
            })), i[e].isActive = r;
            const a = l(s, e);
            for (const t in i) i[t].protectedKeys = {};
            return a
          },
          setAnimateFunction: function(i) {
            e = i(t)
          },
          getState: () => i
        }
      }

      function A(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
    },
    88944: (t, e, i) => {
      "use strict";
      i.d(e, {
        xQ: () => n
      });
      var r = i(62229),
        s = i(64143);

      function n() {
        const t = (0, r.useContext)(s.t);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: i,
          register: n
        } = t, a = (0, r.useId)();
        return (0, r.useEffect)((() => n(a)), []), !e && i ? [!1, () => i && i(a)] : [!0]
      }
    },
    90306: (t, e, i) => {
      "use strict";
      i.d(e, {
        G: () => r
      });
      const r = t => e => 1 - t(1 - e)
    },
    91281: (t, e, i) => {
      "use strict";
      i.d(e, {
        L: () => r
      });
      const r = (0, i(62229).createContext)({})
    },
    95611: (t, e, i) => {
      "use strict";
      i.d(e, {
        F: () => s
      });
      const r = (t, e) => i => e(t(i)),
        s = (...t) => t.reduce(r)
    },
    97641: (t, e, i) => {
      "use strict";
      i.d(e, {
        n: () => r
      });
      const r = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    97992: (t, e, i) => {
      "use strict";

      function r(t) {
        return t.startsWith("--")
      }
      i.d(e, {
        Y: () => r
      })
    },
    98405: (t, e, i) => {
      "use strict";

      function r(t, e, i, r = {}, s = {}) {
        return "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, s)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, s)), e
      }
      i.d(e, {
        a: () => r
      })
    },
    98416: (t, e, i) => {
      "use strict";
      i.d(e, {
        Fl: () => a,
        Kg: () => o,
        SY: () => s,
        aj: () => r,
        ne: () => n
      });
      const r = t => Math.round(1e5 * t) / 1e5,
        s = /(-)?([\d]*\.?[\d])+/g,
        n = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        a = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function o(t) {
        return "string" == typeof t
      }
    }
  }
]);