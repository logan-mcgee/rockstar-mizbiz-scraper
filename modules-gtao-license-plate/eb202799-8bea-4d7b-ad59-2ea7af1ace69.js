! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb202799-8bea-4d7b-ad59-2ea7af1ace69", e._sentryDebugIdIdentifier = "sentry-dbid-eb202799-8bea-4d7b-ad59-2ea7af1ace69")
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
  [4874], {
    41039: (e, t, n) => {
      n.d(t, {
        $s: () => p,
        Ao: () => o,
        De: () => w,
        SJ: () => g,
        nm: () => u,
        pS: () => d,
        rf: () => l,
        uX: () => a
      });
      var s = n(67538),
        r = n(62229),
        i = Symbol.for("Animated:node"),
        o = e => e && e[i],
        a = (e, t) => (0, s.OX)(e, i, t),
        u = e => e && e[i] && e[i].getPayload(),
        c = class {
          constructor() {
            a(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        l = class extends c {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, s.is.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new l(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return s.is.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, s.is.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        d = class extends l {
          constructor(e) {
            super(0), this._string = null, this._toString = (0, s.kx)({
              output: [e, e]
            })
          }
          static create(e) {
            return new d(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (s.is.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = (0, s.kx)({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        h = {
          dependencies: null
        },
        p = class extends c {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return (0, s.FI)(this.source, ((n, r) => {
              var o;
              (o = n) && o[i] === o ? t[r] = n.getValue(e) : (0, s.at)(n) ? t[r] = (0, s.oq)(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && (0, s.__)(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return (0, s.FI)(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            h.dependencies && (0, s.at)(e) && h.dependencies.add(e);
            const t = u(e);
            t && (0, s.__)(t, (e => this.add(e)))
          }
        },
        f = class extends p {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new f(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(m)), !0)
          }
        };

      function m(e) {
        return ((0, s.$7)(e) ? d : l).create(e)
      }

      function g(e) {
        const t = o(e);
        return t ? t.constructor : s.is.arr(e) ? f : (0, s.$7)(e) ? d : l
      }
      var _ = (e, t) => {
          const n = !s.is.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, r.forwardRef)(((i, o) => {
            const a = (0, r.useRef)(null),
              u = n && (0, r.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (s.is.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [c, l] = function(e, t) {
                const n = new Set;
                return h.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new p(e), h.dependencies = null, [e, n]
              }(i, t),
              d = (0, s.CH)(),
              f = () => {
                const e = a.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && d()
              },
              m = new y(f, l),
              g = (0, r.useRef)();
            (0, s.Es)((() => (g.current = m, (0, s.__)(l, (e => (0, s.Ec)(e, m))), () => {
              g.current && ((0, s.__)(g.current.deps, (e => (0, s.DV)(e, g.current))), s.er.cancel(g.current.update))
            }))), (0, r.useEffect)(f, []), (0, s.H5)((() => () => {
              const e = g.current;
              (0, s.__)(e.deps, (t => (0, s.DV)(t, e)))
            }));
            const _ = t.getComponentProps(c.getValue());
            return r.createElement(e, {
              ..._,
              ref: u
            })
          }))
        },
        y = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && s.er.write(this.update)
          }
        },
        v = Symbol.for("AnimatedComponent"),
        w = (e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: n = (e => new p(e)),
          getComponentProps: r = (e => e)
        } = {}) => {
          const i = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            o = e => {
              const t = b(e) || "Anonymous";
              return (e = s.is.str(e) ? o[e] || (o[e] = _(e, i)) : e[v] || (e[v] = _(e, i))).displayName = `Animated(${t})`, e
            };
          return (0, s.FI)(e, ((t, n) => {
            s.is.arr(e) && (n = b(t)), o[n] = o(t)
          })), {
            animated: o
          }
        },
        b = e => s.is.str(e) ? e : e && s.is.str(e.displayName) ? e.displayName : s.is.fun(e) && e.name || null
    },
    34874: (e, t, n) => {
      n.d(t, {
        FS: () => o,
        zP: () => $,
        xI: () => se,
        jY: () => Q,
        RV: () => s.RV,
        lc: () => Ve,
        c7: () => Se,
        rQ: () => pe,
        $9: () => me,
        tQ: () => X,
        X0: () => Ae,
        eB: () => Re,
        $W: () => k,
        kx: () => s.kx,
        le: () => s.le,
        Yc: () => m,
        GW: () => Fe,
        to: () => $e,
        yo: () => ze,
        n$: () => b,
        Wx: () => xe,
        Es: () => s.Es,
        Ib: () => s.Ib,
        st: () => Ee,
        Ll: () => Me,
        zh: () => _e,
        U2: () => ve,
        Sn: () => we,
        mX: () => ge,
        wR: () => be,
        pn: () => ke
      });
      var s = n(67538),
        r = n(62229),
        i = n(41039),
        o = class {};

      function a(e, ...t) {
        return s.is.fun(e) ? e(...t) : e
      }
      var u = (e, t) => !0 === e || !!(t && e && (s.is.fun(e) ? e(t) : (0, s.$r)(e).includes(t))),
        c = (e, t) => s.is.obj(e) ? t && e[t] : e,
        l = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        d = e => e,
        h = (e, t = d) => {
          let n = p;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const i of n) {
            const n = t(e[i], i);
            s.is.und(n) || (r[i] = n)
          }
          return r
        },
        p = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        f = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function m(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if ((0, s.FI)(e, ((e, s) => {
              f[s] || (t[s] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return (0, s.FI)(e, ((e, s) => s in t || (n[s] = e))), n
        }
        return {
          ...e
        }
      }

      function g(e) {
        return e = (0, s.oq)(e), s.is.arr(e) ? e.map(g) : (0, s.$7)(e) ? s.RV.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function _(e) {
        for (const t in e) return !0;
        return !1
      }

      function y(e) {
        return s.is.fun(e) || s.is.arr(e) && s.is.obj(e[0])
      }

      function v(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function w(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function b(e, t, n = 1e3) {
        (0, s.Es)((() => {
          if (t) {
            let r = 0;
            (0, s.__)(e, ((e, i) => {
              const o = e.current;
              if (o.length) {
                let u = n * t[i];
                isNaN(u) ? u = r : r = u, (0, s.__)(o, (e => {
                  (0, s.__)(e.queue, (e => {
                    const t = e.delay;
                    e.delay = e => u + a(t || 0, e)
                  }))
                })), e.start()
              }
            }))
          } else {
            let t = Promise.resolve();
            (0, s.__)(e, (e => {
              const n = e.current;
              if (n.length) {
                const r = n.map((e => {
                  const t = e.queue;
                  return e.queue = [], t
                }));
                t = t.then((() => ((0, s.__)(n, ((e, t) => (0, s.__)(r[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
              }
            }))
          }
        }))
      }
      var k = {
          default: {
            tension: 170,
            friction: 26
          },
          gentle: {
            tension: 120,
            friction: 14
          },
          wobbly: {
            tension: 180,
            friction: 12
          },
          stiff: {
            tension: 210,
            friction: 20
          },
          slow: {
            tension: 280,
            friction: 60
          },
          molasses: {
            tension: 280,
            friction: 120
          }
        },
        I = {
          ...k.default,
          mass: 1,
          damping: 1,
          easing: s.le.linear,
          clamp: !1
        },
        M = class {
          constructor() {
            this.velocity = 0, Object.assign(this, I)
          }
        };

      function E(e, t) {
        if (s.is.und(t.decay)) {
          const n = !s.is.und(t.tension) || !s.is.und(t.friction);
          !n && s.is.und(t.frequency) && s.is.und(t.damping) && s.is.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var P = [],
        x = class {
          constructor() {
            this.changed = !1, this.values = P, this.toValues = null, this.fromValues = P, this.config = new M, this.immediate = !1
          }
        };

      function S(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: i,
        actions: o
      }) {
        return new Promise(((c, l) => {
          let d, h, p = u(n.cancel ?? r?.cancel, t);
          if (p) g();
          else {
            s.is.und(n.pause) || (i.paused = u(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = i.paused || u(e, t)), d = a(n.delay || 0, t), e ? (i.resumeQueue.add(m), o.pause()) : (o.resume(), m())
          }

          function f() {
            i.resumeQueue.add(m), i.timeouts.delete(h), h.cancel(), d = h.time - s.er.now()
          }

          function m() {
            d > 0 && !s.RV.skipAnimation ? (i.delayed = !0, h = s.er.setTimeout(g, d), i.pauseQueue.add(f), i.timeouts.add(h)) : g()
          }

          function g() {
            i.delayed && (i.delayed = !1), i.pauseQueue.delete(f), i.timeouts.delete(h), e <= (i.cancelId || 0) && (p = !0);
            try {
              o.start({
                ...n,
                callId: e,
                cancel: p
              }, c)
            } catch (e) {
              l(e)
            }
          }
        }))
      }
      var A = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? C(e.get()) : t.every((e => e.noop)) ? R(e.get()) : V(e.get(), t.every((e => e.finished))),
        R = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        V = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        C = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function O(e, t, n, r) {
        const {
          callId: i,
          parentId: o,
          onRest: a
        } = t, {
          asyncTo: u,
          promise: c
        } = n;
        return o || e !== u || t.reset ? n.promise = (async () => {
          n.asyncId = i, n.asyncTo = e;
          const l = h(t, ((e, t) => "onRest" === t ? void 0 : e));
          let d, p;
          const f = new Promise(((e, t) => (d = e, p = t))),
            m = e => {
              const t = i <= (n.cancelId || 0) && C(r) || i !== n.asyncId && V(r, !1);
              if (t) throw e.result = t, p(e), e
            },
            g = (e, t) => {
              const o = new $,
                a = new F;
              return (async () => {
                if (s.RV.skipAnimation) throw q(n), a.result = V(r, !1), p(a), a;
                m(o);
                const u = s.is.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                u.parentId = i, (0, s.FI)(l, ((e, t) => {
                  s.is.und(u[t]) && (u[t] = e)
                }));
                const c = await r.start(u);
                return m(o), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), c
              })()
            };
          let _;
          if (s.RV.skipAnimation) return q(n), V(r, !1);
          try {
            let t;
            t = s.is.arr(e) ? (async e => {
              for (const t of e) await g(t)
            })(e) : Promise.resolve(e(g, r.stop.bind(r))), await Promise.all([t.then(d), f]), _ = V(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof $) _ = e.result;
            else {
              if (!(e instanceof F)) throw e;
              _ = e.result
            }
          } finally {
            i == n.asyncId && (n.asyncId = o, n.asyncTo = o ? u : void 0, n.promise = o ? c : void 0)
          }
          return s.is.fun(a) && s.er.batchedUpdates((() => {
            a(_, r, r.item)
          })), _
        })() : c
      }

      function q(e, t) {
        (0, s.bX)(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var $ = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        F = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        z = e => e instanceof Q,
        j = 1,
        Q = class extends s.aq {
          constructor() {
            super(...arguments), this.id = j++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = (0, i.Ao)(this);
            return e && e.getValue()
          }
          to(...e) {
            return s.RV.to(this, e)
          }
          interpolate(...e) {
            return (0, s.ZJ)(), s.RV.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            (0, s.MI)(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || s.WU.sort(this), (0, s.MI)(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        L = Symbol.for("SpringPhase"),
        T = e => (1 & e[L]) > 0,
        W = e => (2 & e[L]) > 0,
        D = e => (4 & e[L]) > 0,
        N = (e, t) => t ? e[L] |= 3 : e[L] &= -3,
        U = (e, t) => t ? e[L] |= 4 : e[L] &= -5,
        X = class extends Q {
          constructor(e, t) {
            if (super(), this.animation = new x, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !s.is.und(e) || !s.is.und(t)) {
              const n = s.is.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              s.is.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(W(this) || this._state.asyncTo) || D(this)
          }
          get goal() {
            return (0, s.oq)(this.animation.to)
          }
          get velocity() {
            const e = (0, i.Ao)(this);
            return e instanceof i.rf ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return T(this)
          }
          get isAnimating() {
            return W(this)
          }
          get isPaused() {
            return D(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: a
            } = r, u = (0, i.nm)(r.to);
            !u && (0, s.at)(r.to) && (o = (0, s.$r)((0, s.oq)(r.to))), r.values.forEach(((c, l) => {
              if (c.done) return;
              const d = c.constructor == i.pS ? 1 : u ? u[l].lastPosition : o[l];
              let h = r.immediate,
                p = d;
              if (!h) {
                if (p = c.lastPosition, a.tension <= 0) return void(c.done = !0);
                let t = c.elapsedTime += e;
                const n = r.fromValues[l],
                  i = null != c.v0 ? c.v0 : c.v0 = s.is.arr(a.velocity) ? a.velocity[l] : a.velocity;
                let o;
                const u = a.precision || (n == d ? .005 : Math.min(1, .001 * Math.abs(d - n)));
                if (s.is.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      s = Math.exp(-(1 - e) * t);
                    p = n + i / (1 - e) * (1 - s), h = Math.abs(c.lastPosition - p) <= u, o = i * s
                  } else {
                    o = null == c.lastVelocity ? i : c.lastVelocity;
                    const t = a.restVelocity || u / 10,
                      r = a.clamp ? 0 : a.bounce,
                      l = !s.is.und(r),
                      f = n == d ? c.v0 > 0 : n < d;
                    let m, g = !1;
                    const _ = 1,
                      y = Math.ceil(e / _);
                    for (let e = 0; e < y && (m = Math.abs(o) > t, m || (h = Math.abs(d - p) <= u, !h)); ++e) l && (g = p == d || p > d == f, g && (o = -o * r, p = d)), o += (1e-6 * -a.tension * (p - d) + .001 * -a.friction * o) / a.mass * _, p += o * _
                  }
                else {
                  let s = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, c.durationProgress > 0 && (c.elapsedTime = a.duration * c.durationProgress, t = c.elapsedTime += e)), s = (a.progress || 0) + t / this._memoizedDuration, s = s > 1 ? 1 : s < 0 ? 0 : s, c.durationProgress = s), p = n + a.easing(s) * (d - n), o = (p - c.lastPosition) / e, h = 1 == s
                }
                c.lastVelocity = o, Number.isNaN(p) && (console.warn("Got NaN while animating:", this), h = !0)
              }
              u && !u[l].done && (h = !1), h ? c.done = !0 : t = !1, c.setValue(p, a.round) && (n = !0)
            }));
            const c = (0, i.Ao)(this),
              l = c.getValue();
            if (t) {
              const e = (0, s.oq)(r.to);
              l === e && !n || a.decay ? n && a.decay && this._onChange(l) : (c.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return s.er.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (W(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              s.er.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return s.is.und(e) ? (n = this.queue || [], this.queue = []) : n = [s.is.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => A(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), q(this._state, e && this._lastCallId), s.er.batchedUpdates((() => this._stop(t, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: n,
              from: r
            } = e;
            n = s.is.obj(n) ? n[t] : n, (null == n || y(n)) && (n = void 0), r = s.is.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return T(this) || (e.reverse && ([n, r] = [r, n]), r = (0, s.oq)(r), s.is.und(r) ? (0, i.Ao)(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, h(e, ((e, t) => /^on/.test(t) ? c(e, n) : e))), K(this, e, "onProps"), ee(this, "onProps", e, this);
            const i = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const o = this._state;
            return S(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: o,
              actions: {
                pause: () => {
                  D(this) || (U(this, !0), (0, s.Wd)(o.pauseQueue), ee(this, "onPause", V(this, H(this, this.animation.to)), this))
                },
                resume: () => {
                  D(this) && (U(this, !1), W(this) && this._resume(), (0, s.Wd)(o.resumeQueue), ee(this, "onResume", V(this, H(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, i)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = B(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(C(this));
            const r = !s.is.und(e.to),
              o = !s.is.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(C(this));
              this._lastToId = t.callId
            }
            const {
              key: c,
              defaultProps: l,
              animation: d
            } = this, {
              to: h,
              from: p
            } = d;
            let {
              to: f = h,
              from: m = p
            } = e;
            !o || r || t.default && !s.is.und(f) || (f = m), t.reverse && ([f, m] = [m, f]);
            const _ = !(0, s.n4)(m, p);
            _ && (d.from = m), m = (0, s.oq)(m);
            const v = !(0, s.n4)(f, h);
            v && this._focus(f);
            const w = y(t.to),
              {
                config: b
              } = d,
              {
                decay: k,
                velocity: M
              } = b;
            (r || o) && (b.velocity = 0), t.config && !w && function(e, t, n) {
              n && (E(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), E(e, t), Object.assign(e, t);
              for (const t in I) null == e[t] && (e[t] = I[t]);
              let {
                frequency: r,
                damping: i
              } = e;
              const {
                mass: o
              } = e;
              s.is.und(r) || (r < .01 && (r = .01), i < 0 && (i = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * o, e.friction = 4 * Math.PI * i * o / r)
            }(b, a(t.config, c), t.config !== l.config ? a(l.config, c) : void 0);
            let P = (0, i.Ao)(this);
            if (!P || s.is.und(f)) return n(V(this, !0));
            const x = s.is.und(t.reset) ? o && !t.default : !s.is.und(m) && u(t.reset, c),
              S = x ? m : this.get(),
              A = g(f),
              q = s.is.num(A) || s.is.arr(A) || (0, s.$7)(A),
              $ = !w && (!q || u(l.immediate || t.immediate, c));
            if (v) {
              const e = (0, i.SJ)(f);
              if (e !== P.constructor) {
                if (!$) throw Error(`Cannot animate between ${P.constructor.name} and ${e.name}, as the "to" prop suggests`);
                P = this._set(A)
              }
            }
            const F = P.constructor;
            let z = (0, s.at)(f),
              j = !1;
            if (!z) {
              const e = x || !T(this) && _;
              (v || e) && (j = (0, s.n4)(g(S), A), z = !j), ((0, s.n4)(d.immediate, $) || $) && (0, s.n4)(b.decay, k) && (0, s.n4)(b.velocity, M) || (z = !0)
            }
            if (j && W(this) && (d.changed && !x ? z = !0 : z || this._stop(h)), !w && ((z || (0, s.at)(h)) && (d.values = P.getPayload(), d.toValues = (0, s.at)(f) ? null : F == i.pS ? [1] : (0, s.$r)(A)), d.immediate != $ && (d.immediate = $, $ || x || this._set(h)), z)) {
              const {
                onRest: e
              } = d;
              (0, s.__)(G, (e => K(this, t, e)));
              const r = V(this, H(this, h));
              (0, s.Wd)(this._pendingCalls, r), this._pendingCalls.add(n), d.changed && s.er.batchedUpdates((() => {
                d.changed = !x, e?.(r, this), x ? a(l.onRest, r) : d.onStart?.(r, this)
              }))
            }
            x && this._set(S), w ? n(O(t.to, t, this._state, this)) : z ? this._start() : W(this) && !v ? this._pendingCalls.add(n) : n(R(S))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && ((0, s.Wg)(this) && this._detach(), t.to = e, (0, s.Wg)(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            (0, s.at)(t) && ((0, s.Ec)(t, this), z(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            (0, s.at)(e) && (0, s.DV)(e, this)
          }
          _set(e, t = !0) {
            const n = (0, s.oq)(e);
            if (!s.is.und(n)) {
              const e = (0, i.Ao)(this);
              if (!e || !(0, s.n4)(n, e.getValue())) {
                const r = (0, i.SJ)(n);
                e && e.constructor == r ? e.setValue(n) : (0, i.uX)(this, r.create(n)), e && s.er.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return (0, i.Ao)(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, ee(this, "onStart", V(this, H(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), a(this.animation.onChange, e, this)), a(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            (0, i.Ao)(this).reset((0, s.oq)(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), W(this) || (N(this, !0), D(this) || this._resume())
          }
          _resume() {
            s.RV.skipAnimation ? this.finish() : s.WU.start(this)
          }
          _stop(e, t) {
            if (W(this)) {
              N(this, !1);
              const n = this.animation;
              (0, s.__)(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), (0, s.MI)(this, {
                type: "idle",
                parent: this
              });
              const r = t ? C(this.get()) : V(this.get(), H(this, e ?? n.to));
              (0, s.Wd)(this._pendingCalls, r), n.changed && (n.changed = !1, ee(this, "onRest", r, this))
            }
          }
        };

      function H(e, t) {
        const n = g(t),
          r = g(e.get());
        return (0, s.n4)(r, n)
      }

      function B(e, t = e.loop, n = e.to) {
        const s = a(t);
        if (s) {
          const r = !0 !== s && m(s),
            i = (r || e).reverse,
            o = !r || r.reset;
          return J({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || y(n) ? n : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...r
          })
        }
      }

      function J(e) {
        const {
          to: t,
          from: n
        } = e = m(e), r = new Set;
        return s.is.obj(t) && Z(t, r), s.is.obj(n) && Z(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function Y(e) {
        const t = J(e);
        return s.is.und(t.default) && (t.default = h(t)), t
      }

      function Z(e, t) {
        (0, s.FI)(e, ((e, n) => null != e && t.add(n)))
      }
      var G = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function K(e, t, n) {
        e.animation[n] = t[n] !== l(t, n) ? c(t[n], e.key) : void 0
      }

      function ee(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var te = ["onStart", "onChange", "onRest"],
        ne = 1,
        se = class {
          constructor(e, t) {
            this.id = ne++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((t, n) => e[n] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              s.is.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(J(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = (0, s.$r)(e).map(J) : this.queue = [], this._flush ? this._flush(this, t) : (le(this, t), re(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              (0, s.__)((0, s.$r)(t), (t => n[t].stop(!!e)))
            } else q(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (s.is.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              (0, s.__)((0, s.$r)(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (s.is.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              (0, s.__)((0, s.$r)(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            (0, s.FI)(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, i = this._changed.size > 0;
            (r && !this._started || i && !this._started) && (this._started = !0, (0, s.bX)(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const o = !r && this._started,
              a = i || o && n.size ? this.get() : null;
            i && t.size && (0, s.bX)(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), o && (this._started = !1, (0, s.bX)(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            s.er.onFrame(this._onFrame)
          }
        };

      function re(e, t) {
        return Promise.all(t.map((t => ie(e, t)))).then((t => A(e, t)))
      }
      async function ie(e, t, n) {
        const {
          keys: r,
          to: i,
          from: o,
          loop: a,
          onRest: u,
          onResolve: c
        } = t, d = s.is.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === i && (t.to = null), !1 === o && (t.from = null);
        const h = s.is.arr(i) || s.is.fun(i) ? i : void 0;
        h ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : (0, s.__)(te, (n => {
          const r = t[n];
          if (s.is.fun(r)) {
            const s = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = s.get(r);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : s.set(r, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, d && (d[n] = t[n])
          }
        }));
        const p = e._state;
        t.pause === !p.paused ? (p.paused = t.pause, (0, s.Wd)(t.pause ? p.pauseQueue : p.resumeQueue)) : p.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          m = !0 === t.cancel || !0 === l(t, "cancel");
        (h || m && p.asyncId) && f.push(S(++e._lastAsyncId, {
          props: t,
          state: p,
          actions: {
            pause: s.lQ,
            resume: s.lQ,
            start(t, n) {
              m ? (q(p, e._lastAsyncId), n(C(e))) : (t.onRest = u, n(O(h, t, p, e)))
            }
          }
        })), p.paused && await new Promise((e => {
          p.resumeQueue.add(e)
        }));
        const g = A(e, await Promise.all(f));
        if (a && g.finished && (!n || !g.noop)) {
          const n = B(t, a, i);
          if (n) return le(e, [n]), ie(e, n, !0)
        }
        return c && s.er.batchedUpdates((() => c(g, e, e.item))), g
      }

      function oe(e, t) {
        const n = {
          ...e.springs
        };
        return t && (0, s.__)((0, s.$r)(t), (e => {
          s.is.und(e.keys) && (e = J(e)), s.is.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ce(n, e, (e => ue(e)))
        })), ae(e, n), n
      }

      function ae(e, t) {
        (0, s.FI)(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, (0, s.Ec)(t, e))
        }))
      }

      function ue(e, t) {
        const n = new X;
        return n.key = e, t && (0, s.Ec)(n, t), n
      }

      function ce(e, t, n) {
        t.keys && (0, s.__)(t.keys, (s => {
          (e[s] || (e[s] = n(s)))._prepareNode(t)
        }))
      }

      function le(e, t) {
        (0, s.__)(t, (t => {
          ce(e.springs, t, (t => ue(t, e)))
        }))
      }
      var de, he, pe = ({
          children: e,
          ...t
        }) => {
          const n = (0, r.useContext)(fe),
            i = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = (0, s.MA)((() => ({
            pause: i,
            immediate: o
          })), [i, o]);
          const {
            Provider: a
          } = fe;
          return r.createElement(a, {
            value: t
          }, e)
        },
        fe = (de = pe, he = {}, Object.assign(de, r.createContext(he)), de.Provider._context = de, de.Consumer._context = de, de);
      pe.Provider = fe.Provider, pe.Consumer = fe.Consumer;
      var me = () => {
        const e = [],
          t = function(t) {
            (0, s.HX)();
            const r = [];
            return (0, s.__)(e, ((e, i) => {
              if (s.is.und(t)) r.push(e.start());
              else {
                const s = n(t, e, i);
                s && r.push(e.start(s))
              }
            })), r
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const n = e.indexOf(t);
          ~n && e.splice(n, 1)
        }, t.pause = function() {
          return (0, s.__)(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return (0, s.__)(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          (0, s.__)(e, ((e, n) => {
            const r = s.is.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return (0, s.__)(e, ((e, r) => {
            if (s.is.und(t)) n.push(e.start());
            else {
              const s = this._getProps(t, e, r);
              s && n.push(e.start(s))
            }
          })), n
        }, t.stop = function() {
          return (0, s.__)(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return (0, s.__)(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return s.is.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function ge(e, t, n) {
        const i = s.is.fun(t) && t;
        i && !n && (n = []);
        const o = (0, r.useMemo)((() => i || 3 == arguments.length ? me() : void 0), []),
          a = (0, r.useRef)(0),
          u = (0, s.CH)(),
          c = (0, r.useMemo)((() => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              const n = oe(e, t);
              return a.current > 0 && !c.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? re(e, t) : new Promise((s => {
                ae(e, n), c.queue.push((() => {
                  s(re(e, t))
                })), u()
              }))
            }
          })), []),
          l = (0, r.useRef)([...c.ctrls]),
          d = [],
          h = (0, s.NQ)(e) || 0;

        function p(e, n) {
          for (let s = e; s < n; s++) {
            const e = l.current[s] || (l.current[s] = new se(null, c.flush)),
              n = i ? i(s, e) : t[s];
            n && (d[s] = Y(n))
          }
        }(0, r.useMemo)((() => {
          (0, s.__)(l.current.slice(e, h), (e => {
            v(e, o), e.stop(!0)
          })), l.current.length = e, p(h, e)
        }), [e]), (0, r.useMemo)((() => {
          p(0, Math.min(h, e))
        }), n);
        const f = l.current.map(((e, t) => oe(e, d[t]))),
          m = (0, r.useContext)(pe),
          g = (0, s.NQ)(m),
          y = m !== g && _(m);
        (0, s.Es)((() => {
          a.current++, c.ctrls = l.current;
          const {
            queue: e
          } = c;
          e.length && (c.queue = [], (0, s.__)(e, (e => e()))), (0, s.__)(l.current, ((e, t) => {
            o?.add(e), y && e.start({
              default: m
            });
            const n = d[t];
            n && (w(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
          }))
        })), (0, s.H5)((() => () => {
          (0, s.__)(c.ctrls, (e => e.stop(!0)))
        }));
        const b = f.map((e => ({
          ...e
        })));
        return o ? [b, o] : b
      }

      function _e(e, t) {
        const n = s.is.fun(e),
          [
            [r], i
          ] = ge(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, i] : r
      }
      var ye = () => me(),
        ve = () => (0, r.useState)(ye)[0],
        we = (e, t) => {
          const n = (0, s.MF)((() => new X(e, t)));
          return (0, s.H5)((() => () => {
            n.stop()
          })), n
        };

      function be(e, t, n) {
        const r = s.is.fun(t) && t;
        r && !n && (n = []);
        let i, o = !0;
        const a = ge(e, ((e, n) => {
          const s = r ? r(e, n) : t;
          return i = s.ref, o = o && s.reverse, s
        }), n || [{}]);
        if ((0, s.Es)((() => {
            (0, s.__)(a[1].current, ((e, t) => {
              const n = a[1].current[t + (o ? 1 : -1)];
              w(e, i), e.ref ? n && e.update({
                to: n.springs
              }) : n ? e.start({
                to: n.springs
              }) : e.start()
            }))
          }), n), r || 3 == arguments.length) {
          const e = i ?? a[1];
          return e._getProps = (t, n, r) => {
            const i = s.is.fun(t) ? t(r, n) : t;
            if (i) {
              const t = e.current[r + (i.reverse ? 1 : -1)];
              return t && (i.to = t.springs), i
            }
          }, a
        }
        return a[0]
      }

      function ke(e, t, n) {
        const i = s.is.fun(t) && t,
          {
            reset: o,
            sort: u,
            trail: c = 0,
            expires: l = !0,
            exitBeforeEnter: d = !1,
            onDestroyed: p,
            ref: f,
            config: g
          } = i ? i() : t,
          y = (0, r.useMemo)((() => i || 3 == arguments.length ? me() : void 0), []),
          b = (0, s.$r)(e),
          k = [],
          I = (0, r.useRef)(null),
          M = o ? null : I.current;
        (0, s.Es)((() => {
          I.current = k
        })), (0, s.H5)((() => ((0, s.__)(k, (e => {
          y?.add(e.ctrl), e.ctrl.ref = y
        })), () => {
          (0, s.__)(I.current, (e => {
            e.expired && clearTimeout(e.expirationId), v(e.ctrl, y), e.ctrl.stop(!0)
          }))
        })));
        const E = function(e, {
            key: t,
            keys: n = t
          }, r) {
            if (null === n) {
              const t = new Set;
              return e.map((e => {
                const n = r && r.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                return n ? (t.add(n), n.key) : Ie++
              }))
            }
            return s.is.und(n) ? e : s.is.fun(n) ? e.map(n) : (0, s.$r)(n)
          }(b, i ? i() : t, M),
          P = o && I.current || [];
        (0, s.Es)((() => (0, s.__)(P, (({
          ctrl: e,
          item: t,
          key: n
        }) => {
          v(e, y), a(p, t, n)
        }))));
        const x = [];
        if (M && (0, s.__)(M, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), P.push(e)) : ~(t = x[t] = E.indexOf(e.key)) && (k[t] = e)
          })), (0, s.__)(b, ((e, t) => {
            k[t] || (k[t] = {
              key: E[t],
              item: e,
              phase: "mount",
              ctrl: new se
            }, k[t].ctrl.item = e)
          })), x.length) {
          let e = -1;
          const {
            leave: n
          } = i ? i() : t;
          (0, s.__)(x, ((t, s) => {
            const r = M[s];
            ~t ? (e = k.indexOf(r), k[e] = {
              ...r,
              item: b[t]
            }) : n && k.splice(++e, 0, r)
          }))
        }
        s.is.fun(u) && k.sort(((e, t) => u(e.item, t.item)));
        let S = -c;
        const A = (0, s.CH)(),
          R = h(t),
          V = new Map,
          C = (0, r.useRef)(new Map),
          O = (0, r.useRef)(!1);
        (0, s.__)(k, ((e, n) => {
          const r = e.key,
            o = e.phase,
            u = i ? i() : t;
          let h, p;
          const _ = a(u.delay || 0, r);
          if ("mount" == o) h = u.enter, p = "enter";
          else {
            const e = E.indexOf(r) < 0;
            if ("leave" != o)
              if (e) h = u.leave, p = "leave";
              else {
                if (!(h = u.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              h = u.enter, p = "enter"
            }
          }
          if (h = a(h, e.item, n), h = s.is.obj(h) ? m(h) : {
              to: h
            }, !h.config) {
            const t = g || R.config;
            h.config = a(t, e.item, n, p)
          }
          S += c;
          const y = {
            ...R,
            delay: _ + S,
            ref: f,
            immediate: u.immediate,
            reset: !1,
            ...h
          };
          if ("enter" == p && s.is.und(y.from)) {
            const r = i ? i() : t,
              o = s.is.und(r.initial) || M ? r.from : r.initial;
            y.from = a(o, e.item, n)
          }
          const {
            onResolve: v
          } = y;
          y.onResolve = e => {
            a(v, e);
            const t = I.current,
              n = t.find((e => e.key === r));
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every((e => e.ctrl.idle));
              if ("leave" == n.phase) {
                const t = a(l, n.item);
                if (!1 !== t) {
                  const s = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && s > 0) return void(s <= 2147483647 && (n.expirationId = setTimeout(A, s)))
                }
              }
              e && t.some((e => e.expired)) && (C.current.delete(n), d && (O.current = !0), A())
            }
          };
          const w = oe(e.ctrl, y);
          "leave" === p && d ? C.current.set(e, {
            phase: p,
            springs: w,
            payload: y
          }) : V.set(e, {
            phase: p,
            springs: w,
            payload: y
          })
        }));
        const q = (0, r.useContext)(pe),
          $ = (0, s.NQ)(q),
          F = q !== $ && _(q);
        (0, s.Es)((() => {
          F && (0, s.__)(k, (e => {
            e.ctrl.start({
              default: q
            })
          }))
        }), [q]), (0, s.__)(V, ((e, t) => {
          if (C.current.size) {
            const e = k.findIndex((e => e.key === t.key));
            k.splice(e, 1)
          }
        })), (0, s.Es)((() => {
          (0, s.__)(C.current.size ? C.current : V, (({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: s
            } = n;
            n.phase = e, y?.add(s), F && "enter" == e && s.start({
              default: q
            }), t && (w(s, t.ref), !s.ref && !y || O.current ? (s.start(t), O.current && (O.current = !1)) : s.update(t))
          }))
        }), o ? void 0 : n);
        const z = e => r.createElement(r.Fragment, null, k.map(((t, n) => {
          const {
            springs: i
          } = V.get(t) || t.ctrl, o = e({
            ...i
          }, t.item, t, n);
          return o && o.type ? r.createElement(o.type, {
            ...o.props,
            key: s.is.str(t.key) || s.is.num(t.key) ? t.key : t.ctrl.id,
            ref: o.ref
          }) : o
        })));
        return y ? [z, y] : z
      }
      var Ie = 1,
        Me = ({
          container: e,
          ...t
        } = {}) => {
          const [n, r] = _e((() => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t
          })), []);
          return (0, s.Es)((() => {
            const t = (0, s.nr)((({
              x: e,
              y: t
            }) => {
              r.start({
                scrollX: e.current,
                scrollXProgress: e.progress,
                scrollY: t.current,
                scrollYProgress: t.progress
              })
            }), {
              container: e?.current || void 0
            });
            return () => {
              (0, s.__)(Object.values(n), (e => e.stop())), t()
            }
          }), []), n
        },
        Ee = ({
          container: e,
          ...t
        }) => {
          const [n, r] = _e((() => ({
            width: 0,
            height: 0,
            ...t
          })), []);
          return (0, s.Es)((() => {
            const t = (0, s.EV)((({
              width: e,
              height: t
            }) => {
              r.start({
                width: e,
                height: t,
                immediate: 0 === n.width.get() || 0 === n.height.get()
              })
            }), {
              container: e?.current || void 0
            });
            return () => {
              (0, s.__)(Object.values(n), (e => e.stop())), t()
            }
          }), []), n
        },
        Pe = {
          any: 0,
          all: 1
        };

      function xe(e, t) {
        const [n, i] = (0, r.useState)(!1), o = (0, r.useRef)(), a = s.is.fun(e) && e, u = a ? a() : {}, {
          to: c = {},
          from: l = {},
          ...d
        } = u, h = a ? t : e, [p, f] = _e((() => ({
          from: l,
          ...d
        })), []);
        return (0, s.Es)((() => {
          const e = o.current,
            {
              root: t,
              once: r,
              amount: a = "any",
              ...u
            } = h ?? {};
          if (!e || r && n || "undefined" == typeof IntersectionObserver) return;
          const d = new WeakMap,
            p = new IntersectionObserver((e => {
              e.forEach((e => {
                const t = d.get(e.target);
                if (e.isIntersecting !== Boolean(t))
                  if (e.isIntersecting) {
                    const t = (c && f.start(c), i(!0), r ? void 0 : () => {
                      l && f.start(l), i(!1)
                    });
                    s.is.fun(t) ? d.set(e.target, t) : p.unobserve(e.target)
                  } else t && (t(), d.delete(e.target))
              }))
            }), {
              root: t && t.current || void 0,
              threshold: "number" == typeof a || Array.isArray(a) ? a : Pe[a],
              ...u
            });
          return p.observe(e), () => p.unobserve(e)
        }), [h]), a ? [o, p] : [o, n]
      }

      function Se({
        children: e,
        ...t
      }) {
        return e(_e(t))
      }

      function Ae({
        items: e,
        children: t,
        ...n
      }) {
        const r = be(e.length, n);
        return e.map(((e, n) => {
          const i = t(e, n);
          return s.is.fun(i) ? i(r[n]) : i
        }))
      }

      function Re({
        items: e,
        children: t,
        ...n
      }) {
        return ke(e, n)(t)
      }
      var Ve = class extends Q {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = (0, s.kx)(...t);
          const n = this._get(),
            r = (0, i.SJ)(n);
          (0, i.uX)(this, r.create(n))
        }
        advance(e) {
          const t = this._get(),
            n = this.get();
          (0, s.n4)(t, n) || ((0, i.Ao)(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Oe(this._active) && qe(this)
        }
        _get() {
          const e = s.is.arr(this.source) ? this.source.map(s.oq) : (0, s.$r)((0, s.oq)(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Oe(this._active) && (this.idle = !1, (0, s.__)((0, i.nm)(this), (e => {
            e.done = !1
          })), s.RV.skipAnimation ? (s.er.batchedUpdates((() => this.advance())), qe(this)) : s.WU.start(this))
        }
        _attach() {
          let e = 1;
          (0, s.__)((0, s.$r)(this.source), (t => {
            (0, s.at)(t) && (0, s.Ec)(t, this), z(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          (0, s.__)((0, s.$r)(this.source), (e => {
            (0, s.at)(e) && (0, s.DV)(e, this)
          })), this._active.clear(), qe(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = (0, s.$r)(this.source).reduce(((e, t) => Math.max(e, (z(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function Ce(e) {
        return !1 !== e.idle
      }

      function Oe(e) {
        return !e.size || Array.from(e).every(Ce)
      }

      function qe(e) {
        e.idle || (e.idle = !0, (0, s.__)((0, i.nm)(e), (e => {
          e.done = !0
        })), (0, s.MI)(e, {
          type: "idle",
          parent: e
        }))
      }
      var $e = (e, ...t) => new Ve(e, t),
        Fe = (e, ...t) => ((0, s.ZJ)(), new Ve(e, t));
      s.RV.assign({
        createStringInterpolator: s.Rs,
        to: (e, t) => new Ve(e, t)
      });
      var ze = s.WU.advance
    },
    67538: (e, t, n) => {
      n.d(t, {
        aq: () => Se,
        RV: () => I,
        Ec: () => Re,
        MI: () => xe,
        Tj: () => J,
        kx: () => fe,
        Rs: () => We,
        OX: () => E,
        HX: () => Je,
        ZJ: () => Xe,
        __: () => S,
        FI: () => A,
        le: () => be,
        bX: () => V,
        Wd: () => q,
        WU: () => N,
        Wg: () => Pe,
        oq: () => Ee,
        at: () => Me,
        is: () => P,
        $7: () => Ye,
        n4: () => x,
        lQ: () => M,
        EV: () => tt,
        nr: () => ut,
        er: () => r,
        DV: () => Ve,
        $r: () => R,
        MF: () => ct,
        CH: () => ht,
        Es: () => lt,
        MA: () => pt,
        H5: () => ft,
        NQ: () => gt,
        Ib: () => _t
      });
      var s = v(),
        r = e => m(e, s),
        i = v();
      r.write = e => m(e, i);
      var o = v();
      r.onStart = e => m(e, o);
      var a = v();
      r.onFrame = e => m(e, a);
      var u = v();
      r.onFinish = e => m(e, u);
      var c = [];
      r.setTimeout = (e, t) => {
        const n = r.now() + t,
          s = () => {
            const e = c.findIndex((e => e.cancel == s));
            ~e && c.splice(e, 1), p -= ~e ? 1 : 0
          },
          i = {
            time: n,
            handler: e,
            cancel: s
          };
        return c.splice(l(n), 0, i), p += 1, g(), i
      };
      var l = e => ~(~c.findIndex((t => t.time > e)) || ~c.length);
      r.cancel = e => {
        o.delete(e), a.delete(e), u.delete(e), s.delete(e), i.delete(e)
      }, r.sync = e => {
        f = !0, r.batchedUpdates(e), f = !1
      }, r.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function s(...e) {
          t = e, r.onStart(n)
        }
        return s.handler = e, s.cancel = () => {
          o.delete(n), t = null
        }, s
      };
      var d = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      r.use = e => d = e, r.now = "undefined" != typeof performance ? () => performance.now() : Date.now, r.batchedUpdates = e => e(), r.catch = console.error, r.frameLoop = "always", r.advance = () => {
        "demand" !== r.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : y()
      };
      var h = -1,
        p = 0,
        f = !1;

      function m(e, t) {
        f ? (t.delete(e), e(0)) : (t.add(e), g())
      }

      function g() {
        h < 0 && (h = 0, "demand" !== r.frameLoop && d(_))
      }

      function _() {
        ~h && (d(_), r.batchedUpdates(y))
      }

      function y() {
        const e = h;
        h = r.now();
        const t = l(h);
        t && (w(c.splice(0, t), (e => e.handler())), p -= t), p ? (o.flush(), s.flush(e ? Math.min(64, h - e) : 16.667), a.flush(), i.flush(), u.flush()) : h = -1
      }

      function v() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            p += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (p -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, p -= t.size, w(t, (t => t(n) && e.add(t))), p += e.size, t = e)
          }
        }
      }

      function w(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            r.catch(e)
          }
        }))
      }
      var b = n(62229),
        k = Object.defineProperty,
        I = {};

      function M() {}((e, t) => {
        for (var n in t) k(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(I, {
        assign: () => Q,
        colors: () => F,
        createStringInterpolator: () => C,
        skipAnimation: () => z,
        to: () => O,
        willAdvance: () => j
      });
      var E = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        P = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        };

      function x(e, t) {
        if (P.arr(e)) {
          if (!P.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var S = (e, t) => e.forEach(t);

      function A(e, t, n) {
        if (P.arr(e))
          for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else
          for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s)
      }
      var R = e => P.und(e) ? [] : P.arr(e) ? e : [e];

      function V(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), S(n, t)
        }
      }
      var C, O, q = (e, ...t) => V(e, (e => e(...t))),
        $ = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        F = null,
        z = !1,
        j = M,
        Q = e => {
          e.to && (O = e.to), e.now && (r.now = e.now), void 0 !== e.colors && (F = e.colors), null != e.skipAnimation && (z = e.skipAnimation), e.createStringInterpolator && (C = e.createStringInterpolator), e.requestAnimationFrame && r.use(e.requestAnimationFrame), e.batchedUpdates && (r.batchedUpdates = e.batchedUpdates), e.willAdvance && (j = e.willAdvance), e.frameLoop && (r.frameLoop = e.frameLoop)
        },
        L = new Set,
        T = [],
        W = [],
        D = 0,
        N = {
          get idle() {
            return !L.size && !T.length
          },
          start(e) {
            D > e.priority ? (L.add(e), r.onStart(U)) : (X(e), r(B))
          },
          advance: B,
          sort(e) {
            if (D) r.onFrame((() => N.sort(e)));
            else {
              const t = T.indexOf(e);
              ~t && (T.splice(t, 1), H(e))
            }
          },
          clear() {
            T = [], L.clear()
          }
        };

      function U() {
        L.forEach(X), L.clear(), r(B)
      }

      function X(e) {
        T.includes(e) || H(e)
      }

      function H(e) {
        T.splice(function(t, n) {
          const s = t.findIndex((t => t.priority > e.priority));
          return s < 0 ? t.length : s
        }(T), 0, e)
      }

      function B(e) {
        const t = W;
        for (let n = 0; n < T.length; n++) {
          const s = T[n];
          D = s.priority, s.idle || (j(s), s.advance(e), s.idle || t.push(s))
        }
        return D = 0, (W = T).length = 0, (T = t).length > 0
      }
      var J = {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        },
        Y = "[-+]?\\d*\\.?\\d+",
        Z = Y + "%";

      function G(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var K = new RegExp("rgb" + G(Y, Y, Y)),
        ee = new RegExp("rgba" + G(Y, Y, Y, Y)),
        te = new RegExp("hsl" + G(Y, Z, Z)),
        ne = new RegExp("hsla" + G(Y, Z, Z, Y)),
        se = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        re = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ie = /^#([0-9a-fA-F]{6})$/,
        oe = /^#([0-9a-fA-F]{8})$/;

      function ae(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function ue(e, t, n) {
        const s = n < .5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - s,
          i = ae(r, s, e + 1 / 3),
          o = ae(r, s, e),
          a = ae(r, s, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * o) << 16 | Math.round(255 * a) << 8
      }

      function ce(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function le(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function de(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function he(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function pe(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ie.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : F && void 0 !== F[e] ? F[e] : (t = K.exec(e)) ? (ce(t[1]) << 24 | ce(t[2]) << 16 | ce(t[3]) << 8 | 255) >>> 0 : (t = ee.exec(e)) ? (ce(t[1]) << 24 | ce(t[2]) << 16 | ce(t[3]) << 8 | de(t[4])) >>> 0 : (t = se.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = oe.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = re.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = te.exec(e)) ? (255 | ue(le(t[1]), he(t[2]), he(t[3]))) >>> 0 : (t = ne.exec(e)) ? (ue(le(t[1]), he(t[2]), he(t[3])) | de(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var fe = (e, t, n) => {
          if (P.fun(e)) return e;
          if (P.arr(e)) return fe({
            range: e,
            output: t,
            extrapolate: n
          });
          if (P.str(e.output[0])) return C(e);
          const s = e,
            r = s.output,
            i = s.range || [0, 1],
            o = s.extrapolateLeft || s.extrapolate || "extend",
            a = s.extrapolateRight || s.extrapolate || "extend",
            u = s.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, s, r, i, o, a, u) {
              let c = u ? u(e) : e;
              if (c < t) {
                if ("identity" === o) return c;
                "clamp" === o && (c = t)
              }
              if (c > n) {
                if ("identity" === a) return c;
                "clamp" === a && (c = n)
              }
              return s === r ? s : t === n ? e <= t ? s : r : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), s === -1 / 0 ? c = -c : r === 1 / 0 ? c += s : c = c * (r - s) + s, c)
            }(e, i[t], i[t + 1], r[t], r[t + 1], u, o, a, s.map)
          }
        },
        me = 1.70158,
        ge = 1.525 * me,
        _e = me + 1,
        ye = 2 * Math.PI / 3,
        ve = 2 * Math.PI / 4.5,
        we = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        be = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => _e * e * e * e - me * e * e,
          easeOutBack: e => 1 + _e * Math.pow(e - 1, 3) + me * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - ge) / 2 : (Math.pow(2 * e - 2, 2) * ((ge + 1) * (2 * e - 2) + ge) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ye),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ye) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ve) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ve) / 2 + 1,
          easeInBounce: e => 1 - we(1 - e),
          easeOutBounce: we,
          easeInOutBounce: e => e < .5 ? (1 - we(1 - 2 * e)) / 2 : (1 + we(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const s = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return 0, 1, r = ("end" === t ? Math.floor(s) : Math.ceil(s)) / e, Math.min(Math.max(r, 0), 1);
            var r
          }
        },
        ke = Symbol.for("FluidValue.get"),
        Ie = Symbol.for("FluidValue.observers"),
        Me = e => Boolean(e && e[ke]),
        Ee = e => e && e[ke] ? e[ke]() : e,
        Pe = e => e[Ie] || null;

      function xe(e, t) {
        const n = e[Ie];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Se = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ae(this, e)
          }
        },
        Ae = (e, t) => Oe(e, ke, t);

      function Re(e, t) {
        if (e[ke]) {
          let n = e[Ie];
          n || Oe(e, Ie, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Ve(e, t) {
        const n = e[Ie];
        if (n && n.has(t)) {
          const s = n.size - 1;
          s ? n.delete(t) : e[Ie] = null, e.observerRemoved && e.observerRemoved(s, t)
        }
      }
      var Ce, Oe = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        qe = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        $e = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Fe = new RegExp(`(${qe.source})(%|[a-z]+)`, "i"),
        ze = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        je = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Qe = e => {
          const [t, n] = Le(e);
          if (!t || $()) return e;
          const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (s) return s.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && je.test(n) ? Qe(n) : n || e
        },
        Le = e => {
          const t = je.exec(e);
          if (!t) return [, ];
          const [, n, s] = t;
          return [n, s]
        },
        Te = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        We = e => {
          Ce || (Ce = F ? new RegExp(`(${Object.keys(F).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Ee(e).replace(je, Qe).replace($e, pe).replace(Ce, pe))),
            n = t.map((e => e.match(qe).map(Number))),
            s = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => fe({
              ...e,
              output: t
            })));
          return e => {
            const n = !Fe.test(t[0]) && t.find((e => Fe.test(e)))?.replace(qe, "");
            let r = 0;
            return t[0].replace(qe, (() => `${s[r++](e)}${n||""}`)).replace(ze, Te)
          }
        },
        De = "react-spring: ",
        Ne = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${De}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Ue = Ne(console.warn);

      function Xe() {
        Ue(`${De}The "interpolate" function is deprecated in v9 (use "to" instead)`)
      }
      var He, Be = Ne(console.warn);

      function Je() {
        Be(`${De}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)
      }

      function Ye(e) {
        return P.str(e) && ("#" == e[0] || /\d/.test(e) || !$() && je.test(e) || e in (F || {}))
      }
      var Ze, Ge = new WeakMap,
        Ke = e => e.forEach((({
          target: e,
          contentRect: t
        }) => Ge.get(e)?.forEach((e => e(t))))),
        et = new Set,
        tt = (e, {
          container: t = document.documentElement
        } = {}) => t === document.documentElement ? (e => (et.add(e), Ze || (Ze = (() => {
          const e = () => {
            et.forEach((e => e({
              width: window.innerWidth,
              height: window.innerHeight
            })))
          };
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        })()), () => {
          et.delete(e), !et.size && Ze && (Ze(), Ze = void 0)
        }))(e) : function(e, t) {
          He || "undefined" != typeof ResizeObserver && (He = new ResizeObserver(Ke));
          let n = Ge.get(t);
          return n || (n = new Set, Ge.set(t, n)), n.add(e), He && He.observe(t), () => {
            const n = Ge.get(t);
            n && (n.delete(e), !n.size && He && He.unobserve(t))
          }
        }(e, t),
        nt = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        },
        st = class {
          constructor(e, t) {
            this.createAxis = () => ({
              current: 0,
              progress: 0,
              scrollLength: 0
            }), this.updateAxis = e => {
              const t = this.info[e],
                {
                  length: n,
                  position: s
                } = nt[e];
              var r, i;
              t.current = this.container[`scroll${s}`], t.scrollLength = this.container[`scroll${n}`] - this.container[`client${n}`], t.progress = (0, r = t.scrollLength, i = t.current, r - 0 == 0 ? 1 : (i - 0) / (r - 0))
            }, this.update = () => {
              this.updateAxis("x"), this.updateAxis("y")
            }, this.sendEvent = () => {
              this.callback(this.info)
            }, this.advance = () => {
              this.update(), this.sendEvent()
            }, this.callback = e, this.container = t, this.info = {
              time: 0,
              x: this.createAxis(),
              y: this.createAxis()
            }
          }
        },
        rt = new WeakMap,
        it = new WeakMap,
        ot = new WeakMap,
        at = e => e === document.documentElement ? window : e,
        ut = (e, {
          container: t = document.documentElement
        } = {}) => {
          let n = ot.get(t);
          n || (n = new Set, ot.set(t, n));
          const s = new st(e, t);
          if (n.add(s), !rt.has(t)) {
            const e = () => (n?.forEach((e => e.advance())), !0);
            rt.set(t, e);
            const s = at(t);
            window.addEventListener("resize", e, {
              passive: !0
            }), t !== document.documentElement && it.set(t, tt(e, {
              container: t
            })), s.addEventListener("scroll", e, {
              passive: !0
            })
          }
          const i = rt.get(t);
          return r(i), () => {
            r.cancel(i);
            const e = ot.get(t);
            if (!e) return;
            if (e.delete(s), e.size) return;
            const n = rt.get(t);
            rt.delete(t), n && (at(t).removeEventListener("scroll", n), window.removeEventListener("resize", n), it.get(t)?.())
          }
        };

      function ct(e) {
        const t = (0, b.useRef)(null);
        return null === t.current && (t.current = e()), t.current
      }
      var lt = $() ? b.useEffect : b.useLayoutEffect,
        dt = () => {
          const e = (0, b.useRef)(!1);
          return lt((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function ht() {
        const e = (0, b.useState)()[1],
          t = dt();
        return () => {
          t.current && e(Math.random())
        }
      }

      function pt(e, t) {
        const [n] = (0, b.useState)((() => ({
          inputs: t,
          result: e()
        }))), s = (0, b.useRef)(), r = s.current;
        let i = r;
        return i ? Boolean(t && i.inputs && function(e, t) {
          if (e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }(t, i.inputs)) || (i = {
          inputs: t,
          result: e()
        }) : i = n, (0, b.useEffect)((() => {
          s.current = i, r == n && (n.inputs = n.result = void 0)
        }), [i]), i.result
      }
      var ft = e => (0, b.useEffect)(e, mt),
        mt = [];

      function gt(e) {
        const t = (0, b.useRef)();
        return (0, b.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var _t = () => {
        const [e, t] = (0, b.useState)(null);
        return lt((() => {
          const e = window.matchMedia("(prefers-reduced-motion)"),
            n = e => {
              t(e.matches), Q({
                skipAnimation: e.matches
              })
            };
          return n(e), e.addEventListener ? e.addEventListener("change", n) : e.addListener(n), () => {
            e.removeEventListener ? e.removeEventListener("change", n) : e.removeListener(n)
          }
        }), []), e
      }
    }
  }
]);