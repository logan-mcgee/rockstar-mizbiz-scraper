/*! For license information please see 6ab643d6ef0f507a7faeaadf36a207dd.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [964], {
    8269: (e, t, r) => {
      "use strict";
      r.d(t, {
        x: () => _
      });
      let a, s, o, i, n, l, c, d, p, u, f, g, h, m, v, y, b = () => "undefined" != typeof window,
        x = () => a || b() && (a = window.gsap) && a.registerPlugin && a,
        w = e => u.maxScroll(e || o);
      class _ {
        constructor(e) {
          s || _.register(a) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, f && f.kill(), f = this, v(this);
          let t, r, c, b, x, k, T, S, E, P, C, R, A, O, M, {
              smoothTouch: N,
              onUpdate: I,
              onStop: V,
              smooth: z,
              onFocusIn: L,
              normalizeScroll: D,
              wholePixels: Y
            } = e,
            j = this,
            B = e.effectsPrefix || "",
            F = u.getScrollFunc(o),
            X = 1 === u.isTouch ? !0 === N ? .8 : parseFloat(N) || 0 : 0 === z || !1 === z ? 0 : parseFloat(z) || .8,
            H = X && +e.speed || 1,
            W = 0,
            U = 0,
            q = 1,
            G = h(0),
            Z = () => G.update(-W),
            K = {
              y: 0
            },
            Q = () => t.style.overflow = "visible",
            $ = e => {
              e.update();
              let t = e.getTween();
              t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), O = !1, e.animation.progress(e.progress, !0)
            },
            J = (e, r) => {
              (e !== W && !P || r) && (Y && (e = Math.round(e)), X && (t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", t._gsap.y = e + "px"), U = e - W, W = e, u.isUpdating || _.isRefreshing || u.update())
            },
            ee = function(e) {
              return arguments.length ? (e < 0 && (e = 0), K.y = -e, O = !0, P ? W = -e : J(-e), u.isRefreshing ? b.update() : F(e / H), this) : -W
            },
            te = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!u.isRefreshing) {
                let e = w(r) * H;
                e < -W && ee(e), y.restart(!0)
              }
            })),
            re = e => {
              r.scrollTop = 0, e.target.contains && e.target.contains(r) || L && !1 === L(this, e) || (u.isInViewport(e.target) || e.target === M || this.scrollTo(e.target, !1, "center center"), M = e.target)
            },
            ae = (e, t) => {
              if (e < t.start) return e;
              let r = isNaN(t.ratio) ? 1 : t.ratio,
                a = t.end - t.start,
                s = e - t.start,
                o = t.offset || 0,
                i = t.pins || [],
                n = i.offset || 0,
                l = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === w() ? 1 : .5;
              return i.forEach((t => {
                a -= t.distance, t.nativeStart <= e && (s -= t.distance)
              })), n && (s *= (a - n / r) / a), e + (s - o * l) / r - s
            },
            se = (e, t, r) => {
              r || (e.pins.length = e.pins.offset = 0);
              let s, o, i, n, l, c, d, p, u = e.pins,
                f = e.markers;
              for (d = 0; d < t.length; d++)
                if (p = t[d], e.trigger && p.trigger && e !== p && (p.trigger === e.trigger || p.pinnedContainer === e.trigger || e.trigger.contains(p.trigger)) && (l = p._startNative || p._startClamp || p.start, c = p._endNative || p._endClamp || p.end, i = ae(l, e), n = p.pin && c > 0 ? i + (c - l) : ae(c, e), p.setPositions(i, n, !0, (p._startClamp ? Math.max(0, i) : i) - l), p.markerStart && f.push(a.quickSetter([p.markerStart, p.markerEnd], "y", "px")), p.pin && p.end > 0 && !r)) {
                  if (s = p.end - p.start, o = e._startClamp && p.start < 0, o) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void se(e, t);
                    s += p.start, u.offset = -p.start
                  }
                  u.push({
                    start: p.start,
                    nativeStart: l,
                    end: p.end,
                    distance: s,
                    trig: p
                  }), e.setPositions(e.start, e.end + (o ? -p.start : s), !0)
                }
            },
            oe = (e, t) => {
              x.forEach((r => se(r, e, t)))
            },
            ie = () => {
              Q(), requestAnimationFrame(Q), x && (u.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), x.forEach((e => {
                let t = e._startClamp || e.start,
                  r = e.autoSpeed ? Math.min(w(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                  a = r - e.end;
                if (t -= a / 2, r -= a / 2, t > r) {
                  let e = t;
                  t = r, r = e
                }
                e._startClamp && t < 0 ? (r = e.ratio < 0 ? w() : e.end / e.ratio, a = r - e.end, t = 0) : (e.ratio < 0 || e._endClamp && r >= w()) && (r = w(), t = e.ratio < 0 || e.ratio > 1 ? 0 : r - (r - e.start) / e.ratio, a = (r - t) * e.ratio - (e.end - e.start)), e.offset = a || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, r, !0)
              })), oe(u.sort())), G.reset()
            },
            ne = () => u.addEventListener("refresh", ie),
            le = () => x && x.forEach((e => e.vars.onRefresh(e))),
            ce = () => (x && x.forEach((e => e.vars.onRefreshInit(e))), le),
            de = (e, t, r, a) => () => {
              let s = "function" == typeof t ? t(r, a) : t;
              s || 0 === s || (s = a.getAttribute("data-" + B + e) || ("speed" === e ? 1 : 0)), a.setAttribute("data-" + B + e, s);
              let o = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: o,
                value: o ? s.substr(6, s.length - 7) : s
              }
            },
            pe = (e, t, s, i, l) => {
              l = ("function" == typeof l ? l(i, e) : l) || 0;
              let c, d, f, h, m, v, y = de("speed", t, i, e),
                b = de("lag", s, i, e),
                _ = a.getProperty(e, "y"),
                k = e._gsap,
                T = [],
                S = () => {
                  t = y(), s = parseFloat(b().value), c = parseFloat(t.value) || 1, f = "auto" === t.value, m = f || d && d._startClamp && d.start <= 0 || T.offset ? 0 : d && d._endClamp && d.end === w() ? 1 : .5, h && h.kill(), h = s && a.to(e, {
                    ease: g,
                    overwrite: !1,
                    y: "+=0",
                    duration: s
                  }), d && (d.ratio = c, d.autoSpeed = f)
                },
                E = () => {
                  k.y = _ + "px", k.renderTransform(1), S()
                },
                P = [],
                C = 0,
                R = t => {
                  if (f) {
                    E();
                    let r = ((e, t) => {
                      let r, a, s = e.parentNode || n,
                        i = e.getBoundingClientRect(),
                        l = s.getBoundingClientRect(),
                        c = l.top - i.top,
                        d = l.bottom - i.bottom,
                        p = (Math.abs(c) > Math.abs(d) ? c : d) / (1 - t),
                        u = -p * t;
                      return p > 0 && (r = l.height / (o.innerHeight + l.height), a = .5 === r ? 2 * l.height : 2 * Math.min(l.height, Math.abs(-p * r / (2 * r - 1))) * (t || 1), u += t ? -a * t : -a / 2, p += a), {
                        change: p,
                        offset: u
                      }
                    })(e, p(0, 1, -t.start / (t.end - t.start)));
                    C = r.change, v = r.offset
                  } else v = T.offset || 0, C = (t.end - t.start - v) * (1 - c);
                  T.forEach((e => C -= e.distance * (1 - c))), t.offset = C || .001, t.vars.onUpdate(t), h && h.progress(1)
                };
              return S(), (1 !== c || f || h) && (d = u.create({
                trigger: f ? e.parentNode : e,
                start: () => t.clamp ? "clamp(top bottom+=" + l + ")" : "top bottom+=" + l,
                end: () => t.value < 0 ? "max" : t.clamp ? "clamp(bottom top-=" + l + ")" : "bottom top-=" + l,
                scroller: r,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: E,
                onRefresh: R,
                onKill: e => {
                  let t = x.indexOf(e);
                  t >= 0 && x.splice(t, 1), E()
                },
                onUpdate: e => {
                  let t, r, s, o = _ + C * (e.progress - m),
                    i = T.length,
                    n = 0;
                  if (e.offset) {
                    if (i) {
                      for (r = -W, s = e.end; i--;) {
                        if (t = T[i], t.trig.isActive || r >= t.start && r <= t.end) return void(h && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), h.resetTo("y", parseFloat(k.y), -U, !0), q && h.progress(1)));
                        r > t.end && (n += t.distance), s -= t.distance
                      }
                      o = _ + n + C * ((a.utils.clamp(e.start, e.end, r) - e.start - n) / (s - e.start) - m)
                    }
                    P.length && !f && P.forEach((e => e(o - n))), l = o + v, o = Math.round(1e5 * l) / 1e5 || 0, h ? (h.resetTo("y", o, -U, !0), q && h.progress(1)) : (k.y = o + "px", k.renderTransform(1))
                  }
                  var l
                }
              }), R(d), a.core.getCache(d.trigger).stRevert = ce, d.startY = _, d.pins = T, d.markers = P, d.ratio = c, d.autoSpeed = f, e.style.willChange = "transform"), d
            };

          function ue() {
            return c = t.clientHeight, t.style.overflow = "visible", l.style.height = o.innerHeight + (c - o.innerHeight) / H + "px", c - o.innerHeight
          }
          ne(), u.addEventListener("killAll", ne), a.delayedCall(.5, (() => q = 0)), this.scrollTop = ee, this.scrollTo = (e, t, r) => {
            let s = a.utils.clamp(0, w(), isNaN(e) ? this.offset(e, r) : +e);
            t ? P ? a.to(this, {
              duration: X,
              scrollTop: s,
              overwrite: "auto",
              ease: g
            }) : F(s) : ee(s)
          }, this.offset = (e, t) => {
            let r, s = (e = d(e)[0]).style.cssText,
              o = u.create({
                trigger: e,
                start: t || "top top"
              });
            return x && (q ? u.refresh() : oe([o], !0)), r = o.start / H, o.kill(!1), e.style.cssText = s, a.core.getCache(e).uncache = 1, r
          }, this.content = function(e) {
            if (arguments.length) {
              let r = d(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || l.children[0];
              return r !== t && (t = r, E = t.getAttribute("style") || "", te && te.observe(t), a.set(t, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), X || a.set(t, {
                clearProps: "transform"
              })), this
            }
            return t
          }, this.wrapper = function(e) {
            return arguments.length ? (r = d(e || "#smooth-wrapper")[0] || (e => {
              let t = i.querySelector(".ScrollSmoother-wrapper");
              return t || (t = i.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            })(t), S = r.getAttribute("style") || "", ue(), a.set(r, X ? {
              overflow: "hidden",
              position: "fixed",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            } : {
              overflow: "visible",
              position: "relative",
              width: "100%",
              height: "auto",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto"
            }), this) : r
          }, this.effects = (e, t) => {
            if (x || (x = []), !e) return x.slice(0);
            (e = d(e)).forEach((e => {
              let t = x.length;
              for (; t--;) x[t].trigger === e && x[t].kill()
            })), t = t || {};
            let r, a, {
                speed: s,
                lag: o,
                effectsPadding: i
              } = t,
              n = [];
            for (r = 0; r < e.length; r++) a = pe(e[r], s, o, r, i), a && n.push(a);
            return x.push(...n), n
          }, this.sections = (e, t) => {
            if (k || (k = []), !e) return k.slice(0);
            let r = d(e).map((e => u.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: t => {
                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
              }
            })));
            return t && t.add ? k.push(...r) : k = r.slice(0), r
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => J(e || 0 === e ? e : W), this.getVelocity = () => G.getVelocity(-W), u.scrollerProxy(r, {
            scrollTop: ee,
            scrollHeight: () => ue() && l.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!X,
            content: t,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: o.innerWidth,
              height: o.innerHeight
            })
          }), u.defaults({
            scroller: r
          });
          let fe = u.getAll().filter((e => e.scroller === o || e.scroller === r));
          fe.forEach((e => e.revert(!0, !0))), b = u.create({
            animation: a.fromTo(K, {
              y: 0
            }, {
              y: () => -ue(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = O;
                  e && ($(b), K.y = W), J(K.y, e), Z(), I && !P && I(j)
                }
              }
            }),
            onRefreshInit: e => {
              if (_.isRefreshing) return;
              if (_.isRefreshing = !0, x) {
                let e = u.getAll().filter((e => !!e.pin));
                x.forEach((t => {
                  t.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(t.trigger)) {
                      let r = t.vars;
                      r.pinnedContainer = e.pin, t.vars = null, t.init(r, t.animation)
                    }
                  }))
                }))
              }
              let t = e.getTween();
              A = t && t._end > t._dp._time, R = W, K.y = 0, X && (1 === u.isTouch && (r.style.position = "absolute"), r.scrollTop = 0, 1 === u.isTouch && (r.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, ue() / H), A || $(e), K.y = -F() * H, J(K.y), q || e.animation.progress(a.utils.clamp(0, 1, R / H / -e.end)), A && (e.progress -= .001, e.update()), _.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: o,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => ue() / H,
            onScrubComplete: () => {
              G.reset(), V && V(this)
            },
            scrub: X || !0
          }), this.smooth = function(t) {
            return arguments.length && (X = t || 0, H = X && +e.speed || 1, b.scrubDuration(t)), b.getTween() ? b.getTween().duration() : 0
          }, b.getTween() && (b.getTween().vars.ease = e.ease || g), this.scrollTrigger = b, e.effects && this.effects(!0 === e.effects ? "[data-" + B + "speed], [data-" + B + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), fe.forEach((e => {
            e.vars.scroller = r, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, t) {
            return arguments.length ? (!!P !== e && (e ? (b.getTween() && b.getTween().pause(), F(-W / H), G.reset(), C = u.normalizeScroll(), C && C.disable(), P = u.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => ee(-W)
            }), P.nested = m(n, "wheel,touch,scroll", !0, !1 !== t)) : (P.nested.kill(), P.kill(), P = 0, C && C.enable(), b.progress = (-W / H - b.start) / (b.end - b.start), $(b))), this) : !!P
          }, this.kill = this.revert = () => {
            this.paused(!1), $(b), b.kill();
            let e = (x || []).concat(k || []),
              a = e.length;
            for (; a--;) e[a].kill();
            u.scrollerProxy(r), u.removeEventListener("killAll", ne), u.removeEventListener("refresh", ie), r.style.cssText = S, t.style.cssText = E;
            let s = u.defaults({});
            s && s.scroller === r && u.defaults({
              scroller: o
            }), this.normalizer && u.normalizeScroll(!1), clearInterval(T), f = null, te && te.disconnect(), l.style.removeProperty("height"), o.removeEventListener("focusin", re)
          }, this.refresh = (e, t) => b.refresh(e, t), D && (this.normalizer = u.normalizeScroll(!0 === D ? {
            debounce: !0,
            content: !X && t
          } : D)), u.config(e), "overscrollBehavior" in o.getComputedStyle(l) && a.set([l, n], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in o.getComputedStyle(l) && a.set([l, n], {
            scrollBehavior: "auto"
          }), o.addEventListener("focusin", re), T = setInterval(Z, 250), "loading" === i.readyState || requestAnimationFrame((() => u.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return s || (a = e || x(), b() && window.document && (o = window, i = document, n = i.documentElement, l = i.body), a && (d = a.utils.toArray, p = a.utils.clamp, g = a.parseEase("expo"), v = a.core.context || function() {}, u = a.core.globals().ScrollTrigger, a.core.globals("ScrollSmoother", _), l && u && (y = a.delayedCall(.2, (() => u.isRefreshing || f && f.refresh())).pause(), c = [o, i, n, l], h = u.core._getVelocityProp, m = u.core._inputObserver, _.refresh = u.refresh, s = 1))), s
        }
      }
      _.version = "3.12.2", _.create = e => f && e && f.content() === d(e.content)[0] ? f : new _(e), _.get = () => f, x() && a.registerPlugin(_)
    },
    2474: (e, t, r) => {
      "use strict";
      r.d(t, {
        L: () => x
      });
      let a, s, o, i, n, l, c, d, p = () => "undefined" != typeof window,
        u = () => a || p() && (a = window.gsap) && a.registerPlugin && a,
        f = e => "string" == typeof e,
        g = e => "function" == typeof e,
        h = (e, t) => {
          let r = "x" === t ? "Width" : "Height",
            a = "scroll" + r,
            s = "client" + r;
          return e === o || e === i || e === n ? Math.max(i[a], n[a]) - (o["inner" + r] || i[s] || n[s]) : e[a] - e["offset" + r]
        },
        m = (e, t) => {
          let r = "scroll" + ("x" === t ? "Left" : "Top");
          return e === o && (null != e.pageXOffset ? r = "page" + t.toUpperCase() + "Offset" : e = null != i[r] ? i : n), () => e[r]
        },
        v = (e, t) => {
          if (!(e = l(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let r = e.getBoundingClientRect(),
            a = !t || t === o || t === n,
            s = a ? {
              top: i.clientTop - (o.pageYOffset || i.scrollTop || n.scrollTop || 0),
              left: i.clientLeft - (o.pageXOffset || i.scrollLeft || n.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            c = {
              x: r.left - s.left,
              y: r.top - s.top
            };
          return !a && t && (c.x += m(t, "x")(), c.y += m(t, "y")()), c
        },
        y = (e, t, r, a, s) => isNaN(e) || "object" == typeof e ? f(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + a - s : "max" === e ? h(t, r) - s : Math.min(h(t, r), v(e, t)[r] - s) : parseFloat(e) - s,
        b = () => {
          a = u(), p() && a && "undefined" != typeof document && document.body && (o = window, n = document.body, i = document.documentElement, l = a.utils.toArray, a.config({
            autoKillThreshold: 7
          }), c = a.config(), s = 1)
        };
      const x = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          a = e, b()
        },
        init(e, t, r, i, n) {
          s || b();
          let l = this,
            c = a.getProperty(e, "scrollSnapType");
          l.isWin = e === o, l.target = e, l.tween = r, t = ((e, t, r, a) => {
            if (g(e) && (e = e(t, r, a)), "object" != typeof e) return f(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let s, o = {};
              for (s in e) o[s] = "onAutoKill" !== s && g(e[s]) ? e[s](t, r, a) : e[s];
              return o
            }
          })(t, i, e, n), l.vars = t, l.autoKill = !!t.autoKill, l.getX = m(e, "x"), l.getY = m(e, "y"), l.x = l.xPrev = l.getX(), l.y = l.yPrev = l.getY(), d || (d = a.core.globals().ScrollTrigger), "smooth" === a.getProperty(e, "scrollBehavior") && a.set(e, {
            scrollBehavior: "auto"
          }), c && "none" !== c && (l.snap = 1, l.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (l.add(l, "x", l.x, y(t.x, e, "x", l.x, t.offsetX || 0), i, n), l._props.push("scrollTo_x")) : l.skipX = 1, null != t.y ? (l.add(l, "y", l.y, y(t.y, e, "y", l.y, t.offsetY || 0), i, n), l._props.push("scrollTo_y")) : l.skipY = 1
        },
        render(e, t) {
          let r, a, s, i, n, l = t._pt,
            {
              target: p,
              tween: u,
              autoKill: f,
              xPrev: g,
              yPrev: m,
              isWin: v,
              snap: y,
              snapInline: b
            } = t;
          for (; l;) l.r(e, l.d), l = l._next;
          r = v || !t.skipX ? t.getX() : g, a = v || !t.skipY ? t.getY() : m, s = a - m, i = r - g, n = c.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), f && (!t.skipX && (i > n || i < -n) && r < h(p, "x") && (t.skipX = 1), !t.skipY && (s > n || s < -n) && a < h(p, "y") && (t.skipY = 1), t.skipX && t.skipY && (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))), v ? o.scrollTo(t.skipX ? r : t.x, t.skipY ? a : t.y) : (t.skipY || (p.scrollTop = t.y), t.skipX || (p.scrollLeft = t.x)), !y || 1 !== e && 0 !== e || (a = p.scrollTop, r = p.scrollLeft, b ? p.style.scrollSnapType = b : p.style.removeProperty("scroll-snap-type"), p.scrollTop = a + 1, p.scrollLeft = r + 1, p.scrollTop = a, p.scrollLeft = r), t.xPrev = t.x, t.yPrev = t.y, d && d.update()
        },
        kill(e) {
          let t = "scrollTo" === e;
          (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      x.max = h, x.getOffset = v, x.buildGetter = m, u() && a.registerPlugin(x)
    },
    5921: (e, t, r) => {
      "use strict";
      r.d(t, {
        i: () => or
      });
      let a, s, o, i, n, l, c, d, p, u, f, g, h, m, v = () => a || "undefined" != typeof window && (a = window.gsap) && a.registerPlugin && a,
        y = 1,
        b = [],
        x = [],
        w = [],
        _ = Date.now,
        k = (e, t) => t,
        T = (e, t) => ~w.indexOf(e) && w[w.indexOf(e) + 1][t],
        S = e => !!~f.indexOf(e),
        E = (e, t, r, a, s) => e.addEventListener(t, r, {
          passive: !a,
          capture: !!s
        }),
        P = (e, t, r, a) => e.removeEventListener(t, r, !!a),
        C = "scrollLeft",
        R = "scrollTop",
        A = () => g && g.isPressed || x.cache++,
        O = (e, t) => {
          let r = a => {
            if (a || 0 === a) {
              y && (i.history.scrollRestoration = "manual");
              let t = g && g.isPressed;
              a = r.v = Math.round(a) || (g && g.iOS ? 1 : 0), e(a), r.cacheID = x.cache, t && k("ss", a)
            } else(t || x.cache !== r.cacheID || k("ref")) && (r.cacheID = x.cache, r.v = e());
            return r.v + r.offset
          };
          return r.offset = 0, e && r
        },
        M = {
          s: C,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: O((function(e) {
            return arguments.length ? i.scrollTo(e, N.sc()) : i.pageXOffset || n[C] || l[C] || c[C] || 0
          }))
        },
        N = {
          s: R,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: M,
          sc: O((function(e) {
            return arguments.length ? i.scrollTo(M.sc(), e) : i.pageYOffset || n[R] || l[R] || c[R] || 0
          }))
        },
        I = (e, t) => (t && t._ctx && t._ctx.selector || a.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== a.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        V = (e, t) => {
          let {
            s: r,
            sc: s
          } = t;
          S(e) && (e = n.scrollingElement || l);
          let o = x.indexOf(e),
            i = s === N.sc ? 1 : 2;
          !~o && (o = x.push(e) - 1), x[o + i] || E(e, "scroll", A);
          let c = x[o + i],
            d = c || (x[o + i] = O(T(e, r), !0) || (S(e) ? s : O((function(t) {
              return arguments.length ? e[r] = t : e[r]
            }))));
          return d.target = e, c || (d.smooth = "smooth" === a.getProperty(e, "scrollBehavior")), d
        },
        z = (e, t, r) => {
          let a = e,
            s = e,
            o = _(),
            i = o,
            n = t || 50,
            l = Math.max(500, 3 * n),
            c = (e, t) => {
              let l = _();
              t || l - o > n ? (s = a, a = e, i = o, o = l) : r ? a += e : a = s + (e - s) / (l - i) * (o - i)
            };
          return {
            update: c,
            reset: () => {
              s = a = r ? 0 : a, i = o = 0
            },
            getVelocity: e => {
              let t = i,
                n = s,
                d = _();
              return (e || 0 === e) && e !== a && c(e), o === i || d - i > l ? 0 : (a + (r ? n : -n)) / ((r ? d : o) - t) * 1e3
            }
          }
        },
        L = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        D = e => {
          let t = Math.max(...e),
            r = Math.min(...e);
          return Math.abs(t) >= Math.abs(r) ? t : r
        },
        Y = () => {
          u = a.core.globals().ScrollTrigger, u && u.core && (() => {
            let e = u.core,
              t = e.bridge || {},
              r = e._scrollers,
              a = e._proxies;
            r.push(...x), a.push(...w), x = r, w = a, k = (e, r) => t[e](r)
          })()
        },
        j = e => (a = e || v(), a && "undefined" != typeof document && document.body && (i = window, n = document, l = n.documentElement, c = n.body, f = [i, n, l, c], o = a.utils.clamp, m = a.core.context || function() {}, p = "onpointerenter" in c ? "pointer" : "mouse", d = B.isTouch = i.matchMedia && i.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in i || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, h = B.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => y = 0), 500), Y(), s = 1), s);
      M.op = N, x.cache = 0;
      class B {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          s || j(a) || console.warn("Please gsap.registerPlugin(Observer)"), u || Y();
          let {
            tolerance: t,
            dragMinimum: r,
            type: o,
            target: f,
            lineHeight: v,
            debounce: y,
            preventDefault: x,
            onStop: w,
            onStopDelay: k,
            ignore: T,
            wheelSpeed: C,
            event: R,
            onDragStart: O,
            onDragEnd: B,
            onDrag: F,
            onPress: X,
            onRelease: H,
            onRight: W,
            onLeft: U,
            onUp: q,
            onDown: G,
            onChangeX: Z,
            onChangeY: K,
            onChange: Q,
            onToggleX: $,
            onToggleY: J,
            onHover: ee,
            onHoverEnd: te,
            onMove: re,
            ignoreCheck: ae,
            isNormalizer: se,
            onGestureStart: oe,
            onGestureEnd: ie,
            onWheel: ne,
            onEnable: le,
            onDisable: ce,
            onClick: de,
            scrollSpeed: pe,
            capture: ue,
            allowClicks: fe,
            lockAxis: ge,
            onLockAxis: he
          } = e;
          this.target = f = I(f) || l, this.vars = e, T && (T = a.utils.toArray(T)), t = t || 1e-9, r = r || 0, C = C || 1, pe = pe || 1, o = o || "wheel,touch,pointer", y = !1 !== y, v || (v = parseFloat(i.getComputedStyle(c).lineHeight) || 22);
          let me, ve, ye, be, xe, we, _e, ke = this,
            Te = 0,
            Se = 0,
            Ee = V(f, M),
            Pe = V(f, N),
            Ce = Ee(),
            Re = Pe(),
            Ae = ~o.indexOf("touch") && !~o.indexOf("pointer") && "pointerdown" === h[0],
            Oe = S(f),
            Me = f.ownerDocument || n,
            Ne = [0, 0, 0],
            Ie = [0, 0, 0],
            Ve = 0,
            ze = () => Ve = _(),
            Le = (e, t) => (ke.event = e) && T && ~T.indexOf(e.target) || t && Ae && "touch" !== e.pointerType || ae && ae(e, t),
            De = () => {
              let e = ke.deltaX = D(Ne),
                r = ke.deltaY = D(Ie),
                a = Math.abs(e) >= t,
                s = Math.abs(r) >= t;
              Q && (a || s) && Q(ke, e, r, Ne, Ie), a && (W && ke.deltaX > 0 && W(ke), U && ke.deltaX < 0 && U(ke), Z && Z(ke), $ && ke.deltaX < 0 != Te < 0 && $(ke), Te = ke.deltaX, Ne[0] = Ne[1] = Ne[2] = 0), s && (G && ke.deltaY > 0 && G(ke), q && ke.deltaY < 0 && q(ke), K && K(ke), J && ke.deltaY < 0 != Se < 0 && J(ke), Se = ke.deltaY, Ie[0] = Ie[1] = Ie[2] = 0), (be || ye) && (re && re(ke), ye && (F(ke), ye = !1), be = !1), we && !(we = !1) && he && he(ke), xe && (ne(ke), xe = !1), me = 0
            },
            Ye = (e, t, r) => {
              Ne[r] += e, Ie[r] += t, ke._vx.update(e), ke._vy.update(t), y ? me || (me = requestAnimationFrame(De)) : De()
            },
            je = (e, t) => {
              ge && !_e && (ke.axis = _e = Math.abs(e) > Math.abs(t) ? "x" : "y", we = !0), "y" !== _e && (Ne[2] += e, ke._vx.update(e, !0)), "x" !== _e && (Ie[2] += t, ke._vy.update(t, !0)), y ? me || (me = requestAnimationFrame(De)) : De()
            },
            Be = e => {
              if (Le(e, 1)) return;
              let t = (e = L(e, x)).clientX,
                a = e.clientY,
                s = t - ke.x,
                o = a - ke.y,
                i = ke.isDragging;
              ke.x = t, ke.y = a, (i || Math.abs(ke.startX - t) >= r || Math.abs(ke.startY - a) >= r) && (F && (ye = !0), i || (ke.isDragging = !0), je(s, o), i || O && O(ke))
            },
            Fe = ke.onPress = e => {
              Le(e, 1) || e && e.button || (ke.axis = _e = null, ve.pause(), ke.isPressed = !0, e = L(e), Te = Se = 0, ke.startX = ke.x = e.clientX, ke.startY = ke.y = e.clientY, ke._vx.reset(), ke._vy.reset(), E(se ? f : Me, h[1], Be, x, !0), ke.deltaX = ke.deltaY = 0, X && X(ke))
            },
            Xe = ke.onRelease = e => {
              if (Le(e, 1)) return;
              P(se ? f : Me, h[1], Be, !0);
              let t = !isNaN(ke.y - ke.startY),
                r = ke.isDragging && (Math.abs(ke.x - ke.startX) > 3 || Math.abs(ke.y - ke.startY) > 3),
                s = L(e);
              !r && t && (ke._vx.reset(), ke._vy.reset(), x && fe && a.delayedCall(.08, (() => {
                if (_() - Ve > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Me.createEvent) {
                  let t = Me.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, i, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), ke.isDragging = ke.isGesturing = ke.isPressed = !1, w && !se && ve.restart(!0), B && r && B(ke), H && H(ke, r)
            },
            He = e => e.touches && e.touches.length > 1 && (ke.isGesturing = !0) && oe(e, ke.isDragging),
            We = () => (ke.isGesturing = !1) || ie(ke),
            Ue = e => {
              if (Le(e)) return;
              let t = Ee(),
                r = Pe();
              Ye((t - Ce) * pe, (r - Re) * pe, 1), Ce = t, Re = r, w && ve.restart(!0)
            },
            qe = e => {
              if (Le(e)) return;
              e = L(e, x), ne && (xe = !0);
              let t = (1 === e.deltaMode ? v : 2 === e.deltaMode ? i.innerHeight : 1) * C;
              Ye(e.deltaX * t, e.deltaY * t, 0), w && !se && ve.restart(!0)
            },
            Ge = e => {
              if (Le(e)) return;
              let t = e.clientX,
                r = e.clientY,
                a = t - ke.x,
                s = r - ke.y;
              ke.x = t, ke.y = r, be = !0, (a || s) && je(a, s)
            },
            Ze = e => {
              ke.event = e, ee(ke)
            },
            Ke = e => {
              ke.event = e, te(ke)
            },
            Qe = e => Le(e) || L(e, x) && de(ke);
          ve = ke._dc = a.delayedCall(k || .25, (() => {
            ke._vx.reset(), ke._vy.reset(), ve.pause(), w && w(ke)
          })).pause(), ke.deltaX = ke.deltaY = 0, ke._vx = z(0, 50, !0), ke._vy = z(0, 50, !0), ke.scrollX = Ee, ke.scrollY = Pe, ke.isDragging = ke.isGesturing = ke.isPressed = !1, m(this), ke.enable = e => (ke.isEnabled || (E(Oe ? Me : f, "scroll", A), o.indexOf("scroll") >= 0 && E(Oe ? Me : f, "scroll", Ue, x, ue), o.indexOf("wheel") >= 0 && E(f, "wheel", qe, x, ue), (o.indexOf("touch") >= 0 && d || o.indexOf("pointer") >= 0) && (E(f, h[0], Fe, x, ue), E(Me, h[2], Xe), E(Me, h[3], Xe), fe && E(f, "click", ze, !1, !0), de && E(f, "click", Qe), oe && E(Me, "gesturestart", He), ie && E(Me, "gestureend", We), ee && E(f, p + "enter", Ze), te && E(f, p + "leave", Ke), re && E(f, p + "move", Ge)), ke.isEnabled = !0, e && e.type && Fe(e), le && le(ke)), ke), ke.disable = () => {
            ke.isEnabled && (b.filter((e => e !== ke && S(e.target))).length || P(Oe ? Me : f, "scroll", A), ke.isPressed && (ke._vx.reset(), ke._vy.reset(), P(se ? f : Me, h[1], Be, !0)), P(Oe ? Me : f, "scroll", Ue, ue), P(f, "wheel", qe, ue), P(f, h[0], Fe, ue), P(Me, h[2], Xe), P(Me, h[3], Xe), P(f, "click", ze, !0), P(f, "click", Qe), P(Me, "gesturestart", He), P(Me, "gestureend", We), P(f, p + "enter", Ze), P(f, p + "leave", Ke), P(f, p + "move", Ge), ke.isEnabled = ke.isPressed = ke.isDragging = !1, ce && ce(ke))
          }, ke.kill = ke.revert = () => {
            ke.disable();
            let e = b.indexOf(ke);
            e >= 0 && b.splice(e, 1), g === ke && (g = 0)
          }, b.push(ke), se && S(f) && (g = ke), ke.enable(R)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      B.version = "3.12.2", B.create = e => new B(e), B.register = j, B.getAll = () => b.slice(), B.getById = e => b.filter((t => t.vars.id === e))[0], v() && a.registerPlugin(B);
      let F, X, H, W, U, q, G, Z, K, Q, $, J, ee, te, re, ae, se, oe, ie, ne, le, ce, de, pe, ue, fe, ge, he, me, ve, ye, be, xe, we, _e, ke, Te = 1,
        Se = Date.now,
        Ee = Se(),
        Pe = 0,
        Ce = 0,
        Re = (e, t, r) => {
          let a = Xe(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return r["_" + t + "Clamp"] = a, a ? e.substr(6, e.length - 7) : e
        },
        Ae = (e, t) => !t || Xe(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Oe = () => Ce && requestAnimationFrame(Oe),
        Me = () => te = 1,
        Ne = () => te = 0,
        Ie = e => e,
        Ve = e => Math.round(1e5 * e) / 1e5 || 0,
        ze = () => "undefined" != typeof window,
        Le = () => F || ze() && (F = window.gsap) && F.registerPlugin && F,
        De = e => !!~G.indexOf(e),
        Ye = e => ("Height" === e ? ye : H["inner" + e]) || U["client" + e] || q["client" + e],
        je = e => T(e, "getBoundingClientRect") || (De(e) ? () => ($t.width = H.innerWidth, $t.height = ye, $t) : () => ut(e)),
        Be = (e, t) => {
          let {
            s: r,
            d2: a,
            d: s,
            a: o
          } = t;
          return Math.max(0, (r = "scroll" + a) && (o = T(e, r)) ? o() - je(e)()[s] : De(e) ? (U[r] || q[r]) - Ye(a) : e[r] - e["offset" + a])
        },
        Fe = (e, t) => {
          for (let r = 0; r < ie.length; r += 3)(!t || ~t.indexOf(ie[r + 1])) && e(ie[r], ie[r + 1], ie[r + 2])
        },
        Xe = e => "string" == typeof e,
        He = e => "function" == typeof e,
        We = e => "number" == typeof e,
        Ue = e => "object" == typeof e,
        qe = (e, t, r) => e && e.progress(t ? 0 : 1) && r && e.pause(),
        Ge = (e, t) => {
          if (e.enabled) {
            let r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
          }
        },
        Ze = Math.abs,
        Ke = "left",
        Qe = "right",
        $e = "bottom",
        Je = "width",
        et = "height",
        tt = "Right",
        rt = "Left",
        at = "Top",
        st = "Bottom",
        ot = "padding",
        it = "margin",
        nt = "Width",
        lt = "Height",
        ct = "px",
        dt = e => H.getComputedStyle(e),
        pt = (e, t) => {
          for (let r in t) r in e || (e[r] = t[r]);
          return e
        },
        ut = (e, t) => {
          let r = t && "matrix(1, 0, 0, 1, 0, 0)" !== dt(e)[re] && F.to(e, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0
            }).progress(1),
            a = e.getBoundingClientRect();
          return r && r.progress(0).kill(), a
        },
        ft = (e, t) => {
          let {
            d2: r
          } = t;
          return e["offset" + r] || e["client" + r] || 0
        },
        gt = e => {
          let t, r = [],
            a = e.labels,
            s = e.duration();
          for (t in a) r.push(a[t] / s);
          return r
        },
        ht = e => {
          let t = F.utils.snap(e),
            r = Array.isArray(e) && e.slice(0).sort(((e, t) => e - t));
          return r ? function(e, a) {
            let s, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!a) return t(e);
            if (a > 0) {
              for (e -= o, s = 0; s < r.length; s++)
                if (r[s] >= e) return r[s];
              return r[s - 1]
            }
            for (s = r.length, e += o; s--;)
              if (r[s] <= e) return r[s];
            return r[0]
          } : function(r, a) {
            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              o = t(r);
            return !a || Math.abs(o - r) < s || o - r < 0 == a < 0 ? o : t(a < 0 ? r - e : r + e)
          }
        },
        mt = (e, t, r, a) => r.split(",").forEach((r => e(t, r, a))),
        vt = (e, t, r, a, s) => e.addEventListener(t, r, {
          passive: !a,
          capture: !!s
        }),
        yt = (e, t, r, a) => e.removeEventListener(t, r, !!a),
        bt = (e, t, r) => {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
        },
        xt = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        wt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        _t = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        kt = (e, t) => {
          if (Xe(e)) {
            let r = e.indexOf("="),
              a = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (a *= t / 100), e = e.substr(0, r - 1)), e = a + (e in _t ? _t[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Tt = (e, t, r, a, s, o, i, n) => {
          let {
            startColor: l,
            endColor: c,
            fontSize: d,
            indent: p,
            fontWeight: u
          } = s, f = W.createElement("div"), g = De(r) || "fixed" === T(r, "pinType"), h = -1 !== e.indexOf("scroller"), m = g ? q : r, v = -1 !== e.indexOf("start"), y = v ? l : c, b = "border-color:" + y + ";font-size:" + d + ";color:" + y + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((h || n) && g ? "fixed;" : "absolute;"), (h || n || !g) && (b += (a === N ? Qe : $e) + ":" + (o + parseFloat(p)) + "px;"), i && (b += "box-sizing:border-box;text-align:left;width:" + i.offsetWidth + "px;"), f._isStart = v, f.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), f.style.cssText = b, f.innerText = t || 0 === t ? e + "-" + t : e, m.children[0] ? m.insertBefore(f, m.children[0]) : m.appendChild(f), f._offset = f["offset" + a.op.d2], St(f, 0, a, v), f
        },
        St = (e, t, r, a) => {
          let s = {
              display: "block"
            },
            o = r[a ? "os2" : "p2"],
            i = r[a ? "p2" : "os2"];
          e._isFlipped = a, s[r.a + "Percent"] = a ? -100 : 0, s[r.a] = a ? "1px" : 0, s["border" + o + nt] = 1, s["border" + i + nt] = 0, s[r.p] = t + "px", F.set(e, s)
        },
        Et = [],
        Pt = {},
        Ct = () => Se() - Pe > 34 && (xe || (xe = requestAnimationFrame(Wt))),
        Rt = () => {
          (!de || !de.isPressed || de.startX > q.clientWidth) && (x.cache++, de ? xe || (xe = requestAnimationFrame(Wt)) : Wt(), Pe || Vt("scrollStart"), Pe = Se())
        },
        At = () => {
          fe = H.innerWidth, ue = H.innerHeight
        },
        Ot = () => {
          x.cache++, !ee && !ce && !W.fullscreenElement && !W.webkitFullscreenElement && (!pe || fe !== H.innerWidth || Math.abs(H.innerHeight - ue) > .25 * H.innerHeight) && Z.restart(!0)
        },
        Mt = {},
        Nt = [],
        It = () => yt(or, "scrollEnd", It) || Ft(!0),
        Vt = e => Mt[e] && Mt[e].map((e => e())) || Nt,
        zt = [],
        Lt = e => {
          for (let t = 0; t < zt.length; t += 5)(!e || zt[t + 4] && zt[t + 4].query === e) && (zt[t].style.cssText = zt[t + 1], zt[t].getBBox && zt[t].setAttribute("transform", zt[t + 2] || ""), zt[t + 3].uncache = 1)
        },
        Dt = (e, t) => {
          let r;
          for (ae = 0; ae < Et.length; ae++) r = Et[ae], !r || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
          t && Lt(t), t || Vt("revert")
        },
        Yt = (e, t) => {
          x.cache++, (t || !we) && x.forEach((e => He(e) && e.cacheID++ && (e.rec = 0))), Xe(e) && (H.history.scrollRestoration = me = e)
        },
        jt = 0,
        Bt = () => {
          q.appendChild(ve), ye = ve.offsetHeight || H.innerHeight, q.removeChild(ve)
        },
        Ft = (e, t) => {
          if (Pe && !e) return void vt(or, "scrollEnd", It);
          Bt(), we = or.isRefreshing = !0, x.forEach((e => He(e) && ++e.cacheID && (e.rec = e())));
          let r = Vt("refreshInit");
          ne && or.sort(), t || Dt(), x.forEach((e => {
            He(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Et.slice(0).forEach((e => e.refresh())), Et.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
            }
          })), Et.forEach((e => {
            let t = Be(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), r.forEach((e => e && e.render && e.render(-1))), x.forEach((e => {
            He(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), Yt(me, 1), Z.pause(), jt++, we = 2, Wt(2), Et.forEach((e => He(e.vars.onRefresh) && e.vars.onRefresh(e))), we = or.isRefreshing = !1, Vt("refresh")
        },
        Xt = 0,
        Ht = 1,
        Wt = e => {
          if (!we || 2 === e) {
            or.isUpdating = !0, ke && ke.update(0);
            let e = Et.length,
              t = Se(),
              r = t - Ee >= 50,
              a = e && Et[0].scroll();
            if (Ht = Xt > a ? -1 : 1, we || (Xt = a), r && (Pe && !te && t - Pe > 200 && (Pe = 0, Vt("scrollEnd")), $ = Ee, Ee = t), Ht < 0) {
              for (ae = e; ae-- > 0;) Et[ae] && Et[ae].update(0, r);
              Ht = 1
            } else
              for (ae = 0; ae < e; ae++) Et[ae] && Et[ae].update(0, r);
            or.isUpdating = !1
          }
          xe = 0
        },
        Ut = [Ke, "top", $e, Qe, it + st, it + tt, it + at, it + rt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        qt = Ut.concat([Je, et, "boxSizing", "max" + nt, "max" + lt, "position", it, ot, ot + at, ot + tt, ot + st, ot + rt]),
        Gt = (e, t, r, a) => {
          if (!e._gsap.swappedIn) {
            let s, o = Ut.length,
              i = t.style,
              n = e.style;
            for (; o--;) s = Ut[o], i[s] = r[s];
            i.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (i.display = "inline-block"), n[$e] = n[Qe] = "auto", i.flexBasis = r.flexBasis || "auto", i.overflow = "visible", i.boxSizing = "border-box", i[Je] = ft(e, M) + ct, i[et] = ft(e, N) + ct, i[ot] = n[it] = n.top = n[Ke] = "0", Kt(a), n[Je] = n["max" + nt] = r[Je], n[et] = n["max" + lt] = r[et], n[ot] = r[ot], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Zt = /([A-Z])/g,
        Kt = e => {
          if (e) {
            let t, r, a = e.t.style,
              s = e.length,
              o = 0;
            for ((e.t._gsap || F.core.getCache(e.t)).uncache = 1; o < s; o += 2) r = e[o + 1], t = e[o], r ? a[t] = r : a[t] && a.removeProperty(t.replace(Zt, "-$1").toLowerCase())
          }
        },
        Qt = e => {
          let t = qt.length,
            r = e.style,
            a = [],
            s = 0;
          for (; s < t; s++) a.push(qt[s], r[qt[s]]);
          return a.t = e, a
        },
        $t = {
          left: 0,
          top: 0
        },
        Jt = (e, t, r, a, s, o, i, n, l, c, d, p, u, f) => {
          He(e) && (e = e(n)), Xe(e) && "max" === e.substr(0, 3) && (e = p + ("=" === e.charAt(4) ? kt("0" + e.substr(3), r) : 0));
          let g, h, m, v = u ? u.time() : 0;
          if (u && u.seek(0), isNaN(e) || (e = +e), We(e)) u && (e = F.utils.mapRange(u.scrollTrigger.start, u.scrollTrigger.end, 0, p, e)), i && St(i, r, a, !0);
          else {
            He(t) && (t = t(n));
            let o, d, p, u, f = (e || "0").split(" ");
            m = I(t, n) || q, o = ut(m) || {}, o && (o.left || o.top) || "none" !== dt(m).display || (u = m.style.display, m.style.display = "block", o = ut(m), u ? m.style.display = u : m.style.removeProperty("display")), d = kt(f[0], o[a.d]), p = kt(f[1] || "0", r), e = o[a.p] - l[a.p] - c + d + s - p, i && St(i, p, a, r - p < 20 || i._isStart && p > 20), r -= r - p
          }
          if (f && (n[f] = e || -.001, e < 0 && (e = 0)), o) {
            let t = e + r,
              s = o._isStart;
            g = "scroll" + a.d2, St(o, t, a, s && t > 20 || !s && (d ? Math.max(q[g], U[g]) : o.parentNode[g]) <= t + 1), d && (l = ut(i), d && (o.style[a.op.p] = l[a.op.p] - a.op.m - o._offset + ct))
          }
          return u && m && (g = ut(m), u.seek(p), h = ut(m), u._caScrollDist = g[a.p] - h[a.p], e = e / u._caScrollDist * p), u && u.seek(v), u ? e : Math.round(e)
        },
        er = /(webkit|moz|length|cssText|inset)/i,
        tr = (e, t, r, a) => {
          if (e.parentNode !== t) {
            let s, o, i = e.style;
            if (t === q) {
              for (s in e._stOrig = i.cssText, o = dt(e), o) + s || er.test(s) || !o[s] || "string" != typeof i[s] || "0" === s || (i[s] = o[s]);
              i.top = r, i.left = a
            } else i.cssText = e._stOrig;
            F.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        rr = (e, t, r) => {
          let a = t,
            s = a;
          return t => {
            let o = Math.round(e());
            return o !== a && o !== s && Math.abs(o - a) > 3 && Math.abs(o - s) > 3 && (t = o, r && r()), s = a, a = t, t
          }
        },
        ar = (e, t, r) => {
          let a = {};
          a[t.p] = "+=" + r, F.set(e, a)
        },
        sr = (e, t) => {
          let r = V(e, t),
            a = "_scroll" + t.p2,
            s = (t, o, i, n, l) => {
              let c = s.tween,
                d = o.onComplete,
                p = {};
              i = i || r();
              let u = rr(r, i, (() => {
                c.kill(), s.tween = 0
              }));
              return l = n && l || 0, n = n || t - i, c && c.kill(), o[a] = t, o.modifiers = p, p[a] = () => u(i + n * c.ratio + l * c.ratio * c.ratio), o.onUpdate = () => {
                x.cache++, Wt()
              }, o.onComplete = () => {
                s.tween = 0, d && d.call(c)
              }, c = s.tween = F.to(e, o), c
            };
          return e[a] = r, r.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), vt(e, "wheel", r.wheelHandler), or.isTouch && vt(e, "touchmove", r.wheelHandler), s
        };
      class or {
        constructor(e, t) {
          X || or.register(F) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), he(this), this.init(e, t)
        }
        init(e, t) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !Ce) return void(this.update = this.refresh = this.kill = Ie);
          e = pt(Xe(e) || We(e) || e.nodeType ? {
            trigger: e
          } : e, wt);
          let r, a, s, o, i, n, l, c, d, p, u, f, g, h, m, v, y, b, _, k, S, E, P, C, R, A, O, z, L, D, Y, j, B, X, G, Z, J, re, se, {
              onUpdate: oe,
              toggleClass: ie,
              id: ce,
              onToggle: de,
              onRefresh: pe,
              scrub: ue,
              trigger: fe,
              pin: ge,
              pinSpacing: he,
              invalidateOnRefresh: me,
              anticipatePin: ve,
              onScrubComplete: ye,
              onSnapComplete: xe,
              once: Ee,
              snap: Oe,
              pinReparent: Me,
              pinSpacer: Ne,
              containerAnimation: ze,
              fastScrollEnd: Le,
              preventOverlaps: Fe
            } = e,
            Ke = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? M : N,
            Qe = !ue && 0 !== ue,
            $e = I(e.scroller || H),
            mt = F.core.getCache($e),
            bt = De($e),
            _t = "fixed" === ("pinType" in e ? e.pinType : T($e, "pinType") || bt && "fixed"),
            St = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            Ct = Qe && e.toggleActions.split(" "),
            At = "markers" in e ? e.markers : wt.markers,
            Mt = bt ? 0 : parseFloat(dt($e)["border" + Ke.p2 + nt]) || 0,
            Nt = this,
            Vt = e.onRefreshInit && (() => e.onRefreshInit(Nt)),
            zt = ((e, t, r) => {
              let {
                d: a,
                d2: s,
                a: o
              } = r;
              return (o = T(e, "getBoundingClientRect")) ? () => o()[a] : () => (t ? Ye(s) : e["client" + s]) || 0
            })($e, bt, Ke),
            Lt = ((e, t) => !t || ~w.indexOf(e) ? je(e) : () => $t)($e, bt),
            Dt = 0,
            Yt = 0,
            Bt = 0,
            Xt = V($e, Ke);
          var Wt;
          if (Nt._startClamp = Nt._endClamp = !1, Nt._dir = Ke, ve *= 45, Nt.scroller = $e, Nt.scroll = ze ? ze.time.bind(ze) : Xt, o = Xt(), Nt.vars = e, t = t || e.animation, "refreshPriority" in e && (ne = 1, -9999 === e.refreshPriority && (ke = Nt)), mt.tweenScroll = mt.tweenScroll || {
              top: sr($e, N),
              left: sr($e, M)
            }, Nt.tweenTo = r = mt.tweenScroll[Ke.p], Nt.scrubDuration = e => {
              B = We(e) && e, B ? j ? j.duration(e) : j = F.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: B,
                paused: !0,
                onComplete: () => ye && ye(Nt)
              }) : (j && j.progress(1).kill(), j = 0)
            }, t && (t.vars.lazy = !1, t._initted && !Nt.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), Nt.animation = t.pause(), t.scrollTrigger = Nt, Nt.scrubDuration(ue), D = 0, ce || (ce = t.vars.id)), Oe && (Ue(Oe) && !Oe.push || (Oe = {
              snapTo: Oe
            }), "scrollBehavior" in q.style && F.set(bt ? [q, U] : $e, {
              scrollBehavior: "auto"
            }), x.forEach((e => He(e) && e.target === (bt ? W.scrollingElement || U : $e) && (e.smooth = !1))), s = He(Oe.snapTo) ? Oe.snapTo : "labels" === Oe.snapTo ? (e => t => F.utils.snap(gt(e), t))(t) : "labelsDirectional" === Oe.snapTo ? (Wt = t, (e, t) => ht(gt(Wt))(e, t.direction)) : !1 !== Oe.directional ? (e, t) => ht(Oe.snapTo)(e, Se() - Yt < 500 ? 0 : t.direction) : F.utils.snap(Oe.snapTo), X = Oe.duration || {
              min: .1,
              max: 2
            }, X = Ue(X) ? Q(X.min, X.max) : Q(X, X), G = F.delayedCall(Oe.delay || B / 2 || .1, (() => {
              let e = Xt(),
                a = Se() - Yt < 500,
                o = r.tween;
              if (!(a || Math.abs(Nt.getVelocity()) < 10) || o || te || Dt === e) Nt.isActive && Dt !== e && G.restart(!0);
              else {
                let i = (e - n) / h,
                  c = t && !Qe ? t.totalProgress() : i,
                  d = a ? 0 : (c - Y) / (Se() - $) * 1e3 || 0,
                  p = F.utils.clamp(-i, 1 - i, Ze(d / 2) * d / .185),
                  u = i + (!1 === Oe.inertia ? 0 : p),
                  f = Q(0, 1, s(u, Nt)),
                  g = Math.round(n + f * h),
                  {
                    onStart: m,
                    onInterrupt: v,
                    onComplete: y
                  } = Oe;
                if (e <= l && e >= n && g !== e) {
                  if (o && !o._initted && o.data <= Ze(g - e)) return;
                  !1 === Oe.inertia && (p = f - i), r(g, {
                    duration: X(Ze(.185 * Math.max(Ze(u - c), Ze(f - c)) / d / .05 || 0)),
                    ease: Oe.ease || "power3",
                    data: Ze(g - e),
                    onInterrupt: () => G.restart(!0) && v && v(Nt),
                    onComplete: () => {
                      Nt.update(), Dt = Xt(), D = Y = t && !Qe ? t.totalProgress() : Nt.progress, xe && xe(Nt), y && y(Nt)
                    }
                  }, e, p * h, g - e - p * h), m && m(Nt, r.tween)
                }
              }
            })).pause()), ce && (Pt[ce] = Nt), fe = Nt.trigger = I(fe || !0 !== ge && ge), se = fe && fe._gsap && fe._gsap.stRevert, se && (se = se(Nt)), ge = !0 === ge ? fe : I(ge), Xe(ie) && (ie = {
              targets: fe,
              className: ie
            }), ge && (!1 === he || he === it || (he = !(!he && ge.parentNode && ge.parentNode.style && "flex" === dt(ge.parentNode).display) && ot), Nt.pin = ge, a = F.core.getCache(ge), a.spacer ? m = a.pinState : (Ne && (Ne = I(Ne), Ne && !Ne.nodeType && (Ne = Ne.current || Ne.nativeElement), a.spacerIsNative = !!Ne, Ne && (a.spacerState = Qt(Ne))), a.spacer = b = Ne || W.createElement("div"), b.classList.add("pin-spacer"), ce && b.classList.add("pin-spacer-" + ce), a.pinState = m = Qt(ge)), !1 !== e.force3D && F.set(ge, {
              force3D: !0
            }), Nt.spacer = b = a.spacer, L = dt(ge), C = L[he + Ke.os2], k = F.getProperty(ge), S = F.quickSetter(ge, Ke.a, ct), Gt(ge, b, L), y = Qt(ge)), At) {
            f = Ue(At) ? pt(At, xt) : xt, p = Tt("scroller-start", ce, $e, Ke, f, 0), u = Tt("scroller-end", ce, $e, Ke, f, 0, p), _ = p["offset" + Ke.op.d2];
            let e = I(T($e, "content") || $e);
            c = this.markerStart = Tt("start", ce, e, Ke, f, _, 0, ze), d = this.markerEnd = Tt("end", ce, e, Ke, f, _, 0, ze), ze && (re = F.quickSetter([c, d], Ke.a, ct)), _t || w.length && !0 === T($e, "fixedMarkers") || ((e => {
              let t = dt(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(bt ? q : $e), F.set([p, u], {
              force3D: !0
            }), A = F.quickSetter(p, Ke.a, ct), z = F.quickSetter(u, Ke.a, ct))
          }
          if (ze) {
            let e = ze.vars.onUpdate,
              t = ze.vars.onUpdateParams;
            ze.eventCallback("onUpdate", (() => {
              Nt.update(0, 0, 1), e && e.apply(ze, t || [])
            }))
          }
          if (Nt.previous = () => Et[Et.indexOf(Nt) - 1], Nt.next = () => Et[Et.indexOf(Nt) + 1], Nt.revert = (e, r) => {
              if (!r) return Nt.kill(!0);
              let a = !1 !== e || !Nt.enabled,
                s = ee;
              a !== Nt.isReverted && (a && (Z = Math.max(Xt(), Nt.scroll.rec || 0), Bt = Nt.progress, J = t && t.progress()), c && [c, d, p, u].forEach((e => e.style.display = a ? "none" : "block")), a && (ee = Nt, Nt.update(a)), !ge || Me && Nt.isActive || (a ? ((e, t, r) => {
                Kt(r);
                let a = e._gsap;
                if (a.spacerIsNative) Kt(a.spacerState);
                else if (e._gsap.swappedIn) {
                  let r = t.parentNode;
                  r && (r.insertBefore(e, t), r.removeChild(t))
                }
                e._gsap.swappedIn = !1
              })(ge, b, m) : Gt(ge, b, dt(ge), R)), a || Nt.update(a), ee = s, Nt.isReverted = a)
            }, Nt.refresh = (a, s, f, x) => {
              if ((ee || !Nt.enabled) && !s) return;
              if (ge && a && Pe) return void vt(or, "scrollEnd", It);
              !we && Vt && Vt(Nt), ee = Nt, r.tween && !f && (r.tween.kill(), r.tween = 0), j && j.pause(), me && t && t.revert({
                kill: !1
              }).invalidate(), Nt.isReverted || Nt.revert(!0, !0), Nt._subPinOffset = !1;
              let w, _, T, S, C, A, z, L, D, Y, B, X, H, K = zt(),
                Q = Lt(),
                $ = ze ? ze.duration() : Be($e, Ke),
                te = h <= .01,
                re = 0,
                ae = x || 0,
                se = Ue(f) ? f.end : e.end,
                oe = e.endTrigger || fe,
                ie = Ue(f) ? f.start : e.start || (0 !== e.start && fe ? ge ? "0 0" : "0 100%" : 0),
                ne = Nt.pinnedContainer = e.pinnedContainer && I(e.pinnedContainer, Nt),
                ce = fe && Math.max(0, Et.indexOf(Nt)) || 0,
                de = ce;
              for (At && Ue(f) && (X = F.getProperty(p, Ke.p), H = F.getProperty(u, Ke.p)); de--;) A = Et[de], A.end || A.refresh(0, 1) || (ee = Nt), z = A.pin, !z || z !== fe && z !== ge && z !== ne || A.isReverted || (Y || (Y = []), Y.unshift(A), A.revert(!0, !0)), A !== Et[de] && (ce--, de--);
              for (He(ie) && (ie = ie(Nt)), ie = Re(ie, "start", Nt), n = Jt(ie, fe, K, Ke, Xt(), c, p, Nt, Q, Mt, _t, $, ze, Nt._startClamp && "_startClamp") || (ge ? -.001 : 0), He(se) && (se = se(Nt)), Xe(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (Xe(ie) ? ie.split(" ")[0] : "") + se : (re = kt(se.substr(2), K), se = Xe(ie) ? ie : (ze ? F.utils.mapRange(0, ze.duration(), ze.scrollTrigger.start, ze.scrollTrigger.end, n) : n) + re, oe = fe)), se = Re(se, "end", Nt), l = Math.max(n, Jt(se || (oe ? "100% 0" : $), oe, K, Ke, Xt() + re, d, u, Nt, Q, Mt, _t, $, ze, Nt._endClamp && "_endClamp")) || -.001, re = 0, de = ce; de--;) A = Et[de], z = A.pin, z && A.start - A._pinPush <= n && !ze && A.end > 0 && (w = A.end - (Nt._startClamp ? Math.max(0, A.start) : A.start), (z === fe && A.start - A._pinPush < n || z === ne) && isNaN(ie) && (re += w * (1 - A.progress)), z === ge && (ae += w));
              if (n += re, l += re, Nt._startClamp && (Nt._startClamp += re), Nt._endClamp && !we && (Nt._endClamp = l || -.001, l = Math.min(l, Be($e, Ke))), h = l - n || (n -= .01) && .001, te && (Bt = F.utils.clamp(0, 1, F.utils.normalize(n, l, Z))), Nt._pinPush = ae, c && re && (w = {}, w[Ke.a] = "+=" + re, ne && (w[Ke.p] = "-=" + Xt()), F.set([c, d], w)), ge) w = dt(ge), S = Ke === N, T = Xt(), E = parseFloat(k(Ke.a)) + ae, !$ && l > 1 && (B = (bt ? W.scrollingElement || U : $e).style, B = {
                style: B,
                value: B["overflow" + Ke.a.toUpperCase()]
              }, bt && "scroll" !== dt(q)["overflow" + Ke.a.toUpperCase()] && (B.style["overflow" + Ke.a.toUpperCase()] = "scroll")), Gt(ge, b, w), y = Qt(ge), _ = ut(ge, !0), L = _t && V($e, S ? M : N)(), he && (R = [he + Ke.os2, h + ae + ct], R.t = b, de = he === ot ? ft(ge, Ke) + h + ae : 0, de && R.push(Ke.d, de + ct), Kt(R), ne && Et.forEach((e => {
                e.pin === ne && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), _t && Xt(Z)), _t && (C = {
                top: _.top + (S ? T - n : L) + ct,
                left: _.left + (S ? L : T - n) + ct,
                boxSizing: "border-box",
                position: "fixed"
              }, C[Je] = C["max" + nt] = Math.ceil(_.width) + ct, C[et] = C["max" + lt] = Math.ceil(_.height) + ct, C[it] = C[it + at] = C[it + tt] = C[it + st] = C[it + rt] = "0", C[ot] = w[ot], C[ot + at] = w[ot + at], C[ot + tt] = w[ot + tt], C[ot + st] = w[ot + st], C[ot + rt] = w[ot + rt], v = ((e, t, r) => {
                let a, s = [],
                  o = e.length,
                  i = r ? 8 : 0;
                for (; i < o; i += 2) a = e[i], s.push(a, a in t ? t[a] : e[i + 1]);
                return s.t = e.t, s
              })(m, C, Me), we && Xt(0)), t ? (D = t._initted, le(1), t.render(t.duration(), !0, !0), P = k(Ke.a) - E + h + ae, O = Math.abs(h - P) > 1, _t && O && v.splice(v.length - 2, 2), t.render(0, !0, !0), D || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), le(0)) : P = h, B && (B.value ? B.style["overflow" + Ke.a.toUpperCase()] = B.value : B.style.removeProperty("overflow-" + Ke.a));
              else if (fe && Xt() && !ze)
                for (_ = fe.parentNode; _ && _ !== q;) _._pinOffset && (n -= _._pinOffset, l -= _._pinOffset), _ = _.parentNode;
              Y && Y.forEach((e => e.revert(!1, !0))), Nt.start = n, Nt.end = l, o = i = we ? Z : Xt(), ze || we || (o < Z && Xt(Z), Nt.scroll.rec = 0), Nt.revert(!1, !0), Yt = Se(), G && (Dt = -1, G.restart(!0)), ee = 0, t && Qe && (t._initted || J) && t.progress() !== J && t.progress(J || 0, !0).render(t.time(), !0, !0), (te || Bt !== Nt.progress || ze) && (t && !Qe && t.totalProgress(ze && n < -.001 && !Bt ? F.utils.normalize(n, l, 0) : Bt, !0), Nt.progress = te || (o - n) / h === Bt ? 0 : Bt), ge && he && (b._pinOffset = Math.round(Nt.progress * P)), j && j.invalidate(), isNaN(X) || (X -= F.getProperty(p, Ke.p), H -= F.getProperty(u, Ke.p), ar(p, Ke, X), ar(c, Ke, X - (x || 0)), ar(u, Ke, H), ar(d, Ke, H - (x || 0))), te && !we && Nt.update(), !pe || we || g || (g = !0, pe(Nt), g = !1)
            }, Nt.getVelocity = () => (Xt() - i) / (Se() - $) * 1e3 || 0, Nt.endAnimation = () => {
              qe(Nt.callbackAnimation), t && (j ? j.progress(1) : t.paused() ? Qe || qe(t, Nt.direction < 0, 1) : qe(t, t.reversed()))
            }, Nt.labelToScroll = e => t && t.labels && (n || Nt.refresh() || n) + t.labels[e] / t.duration() * h || 0, Nt.getTrailing = e => {
              let t = Et.indexOf(Nt),
                r = Nt.direction > 0 ? Et.slice(0, t).reverse() : Et.slice(t + 1);
              return (Xe(e) ? r.filter((t => t.vars.preventOverlaps === e)) : r).filter((e => Nt.direction > 0 ? e.end <= n : e.start >= l))
            }, Nt.update = (e, a, s) => {
              if (ze && !s && !e) return;
              let c, d, u, f, g, m, x, w, _ = !0 === we ? Z : Nt.scroll(),
                k = e ? 0 : (_ - n) / h,
                T = k < 0 ? 0 : k > 1 ? 1 : k || 0,
                R = Nt.progress;
              if (a && (i = o, o = ze ? Xt() : _, Oe && (Y = D, D = t && !Qe ? t.totalProgress() : T)), ve && !T && ge && !ee && !Te && Pe && n < _ + (_ - i) / (Se() - $) * ve && (T = 1e-4), T !== R && Nt.enabled) {
                if (c = Nt.isActive = !!T && T < 1, d = !!R && R < 1, m = c !== d, g = m || !!T != !!R, Nt.direction = T > R ? 1 : -1, Nt.progress = T, g && !ee && (u = T && !R ? 0 : 1 === T ? 1 : 1 === R ? 2 : 3, Qe && (f = !m && "none" !== Ct[u + 1] && Ct[u + 1] || Ct[u], w = t && ("complete" === f || "reset" === f || f in t))), Fe && (m || w) && (w || ue || !t) && (He(Fe) ? Fe(Nt) : Nt.getTrailing(Fe).forEach((e => e.endAnimation()))), Qe || (!j || ee || Te ? t && t.totalProgress(T, !(!ee || !Yt && !e)) : (j._dp._time - j._start !== j._time && j.render(j._dp._time - j._start), j.resetTo ? j.resetTo("totalProgress", T, t._tTime / t._tDur) : (j.vars.totalProgress = T, j.invalidate().restart()))), ge)
                  if (e && he && (b.style[he + Ke.os2] = C), _t) {
                    if (g) {
                      if (x = !e && T > R && l + 1 > _ && _ + 1 >= Be($e, Ke), Me)
                        if (e || !c && !x) tr(ge, b);
                        else {
                          let e = ut(ge, !0),
                            t = _ - n;
                          tr(ge, q, e.top + (Ke === N ? t : 0) + ct, e.left + (Ke === N ? 0 : t) + ct)
                        } Kt(c || x ? v : y), O && T < 1 && c || S(E + (1 !== T || x ? 0 : P))
                    }
                  } else S(Ve(E + P * T));
                Oe && !r.tween && !ee && !Te && G.restart(!0), ie && (m || Ee && T && (T < 1 || !be)) && K(ie.targets).forEach((e => e.classList[c || Ee ? "add" : "remove"](ie.className))), oe && !Qe && !e && oe(Nt), g && !ee ? (Qe && (w && ("complete" === f ? t.pause().totalProgress(1) : "reset" === f ? t.restart(!0).pause() : "restart" === f ? t.restart(!0) : t[f]()), oe && oe(Nt)), !m && be || (de && m && Ge(Nt, de), St[u] && Ge(Nt, St[u]), Ee && (1 === T ? Nt.kill(!1, 1) : St[u] = 0), m || (u = 1 === T ? 1 : 3, St[u] && Ge(Nt, St[u]))), Le && !c && Math.abs(Nt.getVelocity()) > (We(Le) ? Le : 2500) && (qe(Nt.callbackAnimation), j ? j.progress(1) : qe(t, "reverse" === f ? 1 : !T, 1))) : Qe && oe && !ee && oe(Nt)
              }
              if (z) {
                let e = ze ? _ / ze.duration() * (ze._caScrollDist || 0) : _;
                A(e + (p._isFlipped ? 1 : 0)), z(e)
              }
              re && re(-_ / ze.duration() * (ze._caScrollDist || 0))
            }, Nt.enable = (e, t) => {
              Nt.enabled || (Nt.enabled = !0, vt($e, "resize", Ot), bt || vt($e, "scroll", Rt), Vt && vt(or, "refreshInit", Vt), !1 !== e && (Nt.progress = Bt = 0, o = i = Dt = Xt()), !1 !== t && Nt.refresh())
            }, Nt.getTween = e => e && r ? r.tween : j, Nt.setPositions = (e, t, r, a) => {
              if (ze) {
                let r = ze.scrollTrigger,
                  a = ze.duration(),
                  s = r.end - r.start;
                e = r.start + s * e / a, t = r.start + s * t / a
              }
              Nt.refresh(!1, !1, {
                start: Ae(e, r && !!Nt._startClamp),
                end: Ae(t, r && !!Nt._endClamp)
              }, a), Nt.update()
            }, Nt.adjustPinSpacing = e => {
              if (R && e) {
                let t = R.indexOf(Ke.d) + 1;
                R[t] = parseFloat(R[t]) + e + ct, R[1] = parseFloat(R[1]) + e + ct, Kt(R)
              }
            }, Nt.disable = (e, t) => {
              if (Nt.enabled && (!1 !== e && Nt.revert(!0, !0), Nt.enabled = Nt.isActive = !1, t || j && j.pause(), Z = 0, a && (a.uncache = 1), Vt && yt(or, "refreshInit", Vt), G && (G.pause(), r.tween && r.tween.kill() && (r.tween = 0)), !bt)) {
                let e = Et.length;
                for (; e--;)
                  if (Et[e].scroller === $e && Et[e] !== Nt) return;
                yt($e, "resize", Ot), bt || yt($e, "scroll", Rt)
              }
            }, Nt.kill = (r, s) => {
              Nt.disable(r, s), j && !s && j.kill(), ce && delete Pt[ce];
              let o = Et.indexOf(Nt);
              o >= 0 && Et.splice(o, 1), o === ae && Ht > 0 && ae--, o = 0, Et.forEach((e => e.scroller === Nt.scroller && (o = 1))), o || we || (Nt.scroll.rec = 0), t && (t.scrollTrigger = null, r && t.revert({
                kill: !1
              }), s || t.kill()), c && [c, d, p, u].forEach((e => e.parentNode && e.parentNode.removeChild(e))), ke === Nt && (ke = 0), ge && (a && (a.uncache = 1), o = 0, Et.forEach((e => e.pin === ge && o++)), o || (a.spacer = 0)), e.onKill && e.onKill(Nt)
            }, Et.push(Nt), Nt.enable(!1, !1), se && se(Nt), t && t.add && !h) {
            let e = Nt.update;
            Nt.update = () => {
              Nt.update = e, n || l || Nt.refresh()
            }, F.delayedCall(.01, Nt.update), h = .01, n = l = 0
          } else Nt.refresh();
          ge && (() => {
            if (_e !== jt) {
              let e = _e = jt;
              requestAnimationFrame((() => e === jt && Ft(!0)))
            }
          })()
        }
        static register(e) {
          return X || (F = e || Le(), ze() && window.document && or.enable(), X = Ce), X
        }
        static defaults(e) {
          if (e)
            for (let t in e) wt[t] = e[t];
          return wt
        }
        static disable(e, t) {
          Ce = 0, Et.forEach((r => r[t ? "kill" : "disable"](e))), yt(H, "wheel", Rt), yt(W, "scroll", Rt), clearInterval(J), yt(W, "touchcancel", Ie), yt(q, "touchstart", Ie), mt(yt, W, "pointerdown,touchstart,mousedown", Me), mt(yt, W, "pointerup,touchend,mouseup", Ne), Z.kill(), Fe(yt);
          for (let e = 0; e < x.length; e += 3) bt(yt, x[e], x[e + 1]), bt(yt, x[e], x[e + 2])
        }
        static enable() {
          if (H = window, W = document, U = W.documentElement, q = W.body, F && (K = F.utils.toArray, Q = F.utils.clamp, he = F.core.context || Ie, le = F.core.suppressOverwrites || Ie, me = H.history.scrollRestoration || "auto", Xt = H.pageYOffset, F.core.globals("ScrollTrigger", or), q)) {
            Ce = 1, ve = document.createElement("div"), ve.style.height = "100vh", ve.style.position = "absolute", Bt(), Oe(), B.register(F), or.isTouch = B.isTouch, ge = B.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), vt(H, "wheel", Rt), G = [H, W, U, q], F.matchMedia ? (or.matchMedia = e => {
              let t, r = F.matchMedia();
              for (t in e) r.add(t, e[t]);
              return r
            }, F.addEventListener("matchMediaInit", (() => Dt())), F.addEventListener("matchMediaRevert", (() => Lt())), F.addEventListener("matchMedia", (() => {
              Ft(0, 1), Vt("matchMedia")
            })), F.matchMedia("(orientation: portrait)", (() => (At(), At)))) : console.warn("Requires GSAP 3.11.0 or later"), At(), vt(W, "scroll", Rt);
            let e, t, r = q.style,
              a = r.borderTopStyle,
              s = F.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), r.borderTopStyle = "solid", e = ut(q), N.m = Math.round(e.top + N.sc()) || 0, M.m = Math.round(e.left + M.sc()) || 0, a ? r.borderTopStyle = a : r.removeProperty("border-top-style"), J = setInterval(Ct, 250), F.delayedCall(.5, (() => Te = 0)), vt(W, "touchcancel", Ie), vt(q, "touchstart", Ie), mt(vt, W, "pointerdown,touchstart,mousedown", Me), mt(vt, W, "pointerup,touchend,mouseup", Ne), re = F.utils.checkPrefix("transform"), qt.push(re), X = Se(), Z = F.delayedCall(.2, Ft).pause(), ie = [W, "visibilitychange", () => {
                let e = H.innerWidth,
                  t = H.innerHeight;
                W.hidden ? (se = e, oe = t) : se === e && oe === t || Ot()
              }, W, "DOMContentLoaded", Ft, H, "load", Ft, H, "resize", Ot], Fe(vt), Et.forEach((e => e.enable(0, 1))), t = 0; t < x.length; t += 3) bt(yt, x[t], x[t + 1]), bt(yt, x[t], x[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (be = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(J) || (J = t) && setInterval(Ct, t), "ignoreMobileResize" in e && (pe = 1 === or.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Fe(yt) || Fe(vt, e.autoRefreshEvents || "none"), ce = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let r = I(e),
            a = x.indexOf(r),
            s = De(r);
          ~a && x.splice(a, s ? 6 : 2), t && (s ? w.unshift(H, t, q, t, U, t) : w.unshift(r, t))
        }
        static clearMatchMedia(e) {
          Et.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, r) {
          let a = (Xe(e) ? I(e) : e).getBoundingClientRect(),
            s = a[r ? Je : et] * t || 0;
          return r ? a.right - s > 0 && a.left + s < H.innerWidth : a.bottom - s > 0 && a.top + s < H.innerHeight
        }
        static positionInViewport(e, t, r) {
          Xe(e) && (e = I(e));
          let a = e.getBoundingClientRect(),
            s = a[r ? Je : et],
            o = null == t ? s / 2 : t in _t ? _t[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
          return r ? (a.left + o) / H.innerWidth : (a.top + o) / H.innerHeight
        }
        static killAll(e) {
          if (Et.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Mt.killAll || [];
            Mt = {}, e.forEach((e => e()))
          }
        }
      }
      or.version = "3.12.2", or.saveStyles = e => e ? K(e).forEach((e => {
        if (e && e.style) {
          let t = zt.indexOf(e);
          t >= 0 && zt.splice(t, 5), zt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), F.core.getCache(e), he())
        }
      })) : zt, or.revert = (e, t) => Dt(!e, t), or.create = (e, t) => new or(e, t), or.refresh = e => e ? Ot() : (X || or.register()) && Ft(!0), or.update = e => ++x.cache && Wt(!0 === e ? 2 : 0), or.clearScrollMemory = Yt, or.maxScroll = (e, t) => Be(e, t ? M : N), or.getScrollFunc = (e, t) => V(I(e), t ? M : N), or.getById = e => Pt[e], or.getAll = () => Et.filter((e => "ScrollSmoother" !== e.vars.id)), or.isScrolling = () => !!Pe, or.snapDirectional = ht, or.addEventListener = (e, t) => {
        let r = Mt[e] || (Mt[e] = []);
        ~r.indexOf(t) || r.push(t)
      }, or.removeEventListener = (e, t) => {
        let r = Mt[e],
          a = r && r.indexOf(t);
        a >= 0 && r.splice(a, 1)
      }, or.batch = (e, t) => {
        let r, a = [],
          s = {},
          o = t.interval || .016,
          i = t.batchMax || 1e9,
          n = (e, t) => {
            let r = [],
              a = [],
              s = F.delayedCall(o, (() => {
                t(r, a), r = [], a = []
              })).pause();
            return e => {
              r.length || s.restart(!0), r.push(e.trigger), a.push(e), i <= r.length && s.progress(1)
            }
          };
        for (r in t) s[r] = "on" === r.substr(0, 2) && He(t[r]) && "onRefreshInit" !== r ? n(0, t[r]) : t[r];
        return He(i) && (i = i(), vt(or, "refresh", (() => i = t.batchMax()))), K(e).forEach((e => {
          let t = {};
          for (r in s) t[r] = s[r];
          t.trigger = e, a.push(or.create(t))
        })), a
      };
      let ir, nr = (e, t, r, a) => (t > a ? e(a) : t < 0 && e(0), r > a ? (a - t) / (r - t) : r < 0 ? t / (t - r) : 1),
        lr = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (B.isTouch ? " pinch-zoom" : "") : "none", e === U && lr(q, t)
        },
        cr = {
          auto: 1,
          scroll: 1
        },
        dr = e => {
          let t, {
              event: r,
              target: a,
              axis: s
            } = e,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            i = o._gsap || F.core.getCache(o),
            n = Se();
          if (!i._isScrollT || n - i._isScrollT > 2e3) {
            for (; o && o !== q && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !cr[(t = dt(o)).overflowY] && !cr[t.overflowX]);) o = o.parentNode;
            i._isScroll = o && o !== a && !De(o) && (cr[(t = dt(o)).overflowY] || cr[t.overflowX]), i._isScrollT = n
          }(i._isScroll || "x" === s) && (r.stopPropagation(), r._gsapAllow = !0)
        },
        pr = (e, t, r, a) => B.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: a = a && dr,
          onPress: a,
          onDrag: a,
          onScroll: a,
          onEnable: () => r && vt(W, B.eventTypes[0], fr, !1, !0),
          onDisable: () => yt(W, B.eventTypes[0], fr, !0)
        }),
        ur = /(input|label|select|textarea)/i,
        fr = e => {
          let t = ur.test(e.target.tagName);
          (t || ir) && (e._gsapAllow = !0, ir = t)
        };
      or.sort = e => Et.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), or.observe = e => new B(e), or.normalizeScroll = e => {
        if (void 0 === e) return de;
        if (!0 === e && de) return de.enable();
        if (!1 === e) return de && de.kill();
        let t = e instanceof B ? e : (e => {
          Ue(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let t, r, a, s, o, i, n, l, {
              normalizeScrollX: c,
              momentum: d,
              allowNestedScroll: p,
              onRelease: u
            } = e,
            f = I(e.target) || U,
            g = F.core.globals().ScrollSmoother,
            h = g && g.get(),
            m = ge && (e.content && I(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            v = V(f, N),
            y = V(f, M),
            b = 1,
            w = (B.isTouch && H.visualViewport ? H.visualViewport.scale * H.visualViewport.width : H.outerWidth) / H.innerWidth,
            _ = 0,
            k = He(d) ? () => d(t) : () => d || 2.8,
            T = pr(f, e.type, !0, p),
            S = () => s = !1,
            E = Ie,
            P = Ie,
            C = () => {
              r = Be(f, N), P = Q(ge ? 1 : 0, r), c && (E = Q(0, Be(f, M))), a = jt
            },
            R = () => {
              m._gsap.y = Ve(parseFloat(m._gsap.y) + v.offset) + "px", m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(m._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
            },
            A = () => {
              C(), o.isActive() && o.vars.scrollY > r && (v() > r ? o.progress(1) && v(r) : o.resetTo("scrollY", r))
            };
          return m && F.set(m, {
            y: "+=0"
          }), e.ignoreCheck = e => ge && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(S);
              let e = Ve(t.deltaY / 2),
                r = P(v.v - e);
              if (m && r !== v.v + v.offset) {
                v.offset = r - v.v;
                let e = Ve((parseFloat(m && m._gsap.y) || 0) - v.offset);
                m.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", m._gsap.y = e + "px", v.cacheID = x.cache, Wt()
              }
              return !0
            }
            v.offset && R(), s = !0
          })() || b > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = b;
            b = Ve((H.visualViewport && H.visualViewport.scale || 1) / w), o.pause(), e !== b && lr(f, b > 1.01 || !c && "x"), i = y(), n = v(), C(), a = jt
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (v.offset && R(), t) {
              x.cache++;
              let t, a, s = k();
              c && (t = y(), a = t + .05 * s * -e.velocityX / .227, s *= nr(y, t, a, Be(f, M)), o.vars.scrollX = E(a)), t = v(), a = t + .05 * s * -e.velocityY / .227, s *= nr(v, t, a, Be(f, N)), o.vars.scrollY = P(a), o.invalidate().duration(s).play(.01), (ge && o.vars.scrollY >= r || t >= r - 1) && F.to({}, {
                onUpdate: A,
                duration: s
              })
            } else l.restart(!0);
            u && u(e)
          }, e.onWheel = () => {
            o._ts && o.pause(), Se() - _ > 1e3 && (a = 0, _ = Se())
          }, e.onChange = (e, t, r, s, o) => {
            if (jt !== a && C(), t && c && y(E(s[2] === t ? i + (e.startX - e.x) : y() + t - s[1])), r) {
              v.offset && R();
              let t = o[2] === r,
                a = t ? n + e.startY - e.y : v() + r - o[1],
                s = P(a);
              t && a !== s && (n += s - a), v(s)
            }(r || t) && Wt()
          }, e.onEnable = () => {
            lr(f, !c && "x"), or.addEventListener("refresh", A), vt(H, "resize", A), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = y.smooth = !1), T.enable()
          }, e.onDisable = () => {
            lr(f, !0), yt(H, "resize", A), or.removeEventListener("refresh", A), T.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new B(e), t.iOS = ge, ge && !v() && v(1), ge && F.ticker.add(Ie), l = t._dc, o = F.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: rr(v, v(), (() => o.pause()))
            },
            onUpdate: Wt,
            onComplete: l.vars.onComplete
          }), t
        })(e);
        return de && de.target === t.target && de.kill(), De(t.target) && (de = t), t
      }, or.core = {
        _getVelocityProp: z,
        _inputObserver: pr,
        _scrollers: x,
        _proxies: w,
        bridge: {
          ss: () => {
            Pe || Vt("scrollStart"), Pe = Se()
          },
          ref: () => ee
        }
      }, Le() && F.registerPlugin(or)
    },
    9342: (e, t, r) => {
      "use strict";
      r.d(t, {
        Z: () => i
      });
      var a = r(927);
      const s = {
        closeBtn: "rockstargames-sites-gtad44619e9e3a15034943e8c5484f4a4b5"
      };
      var o = r(3705);
      const i = e => {
        let {
          className: t,
          onClick: r,
          closeRef: i
        } = e;
        return (0, a.useEffect)((() => {
          const e = e => {
            "Escape" === e.key && r && r()
          };
          return window.addEventListener("keydown", e), () => {
            window.removeEventListener("keydown", e)
          }
        }), [r]), (0, o.jsx)("button", {
          ref: i,
          type: "button",
          className: [s.closeBtn, t || ""].join(" "),
          onClick: r,
          "aria-label": "close",
          disabled: !1
        })
      }
    },
    6820: (e, t, r) => {
      "use strict";
      r.d(t, {
        Z: () => x
      });
      var a = r(927),
        s = r(7661),
        o = r(2435),
        i = r(4463),
        n = r(2316),
        l = r(9929);
      var c = r(3705);
      const d = (0, a.forwardRef)(((e, t) => {
          const s = (0, a.useRef)(null),
            n = (0, a.useRef)(null),
            d = ((0, a.useRef)(null), (0, a.useRef)(null), (0, a.useRef)(null)),
            {
              isMobile: p
            } = (0, l.useWindowResize)(),
            [u, f] = (0, a.useState)("");
          (0, a.useEffect)((() => {
            f(r(p ? 9250 : 683))
          }), [p]), (0, a.useImperativeHandle)(t, (() => ({
            heroImagesRef: s,
            heroLogoRef: d
          })), [s?.current, d?.current]);
          const {
            timelines: g
          } = (0, i.TR)();
          (0, a.useLayoutEffect)((() => {
            g?.playVideoTimeline && g?.playVideoTimeline?.fromTo([s.current], {
              autoAlpha: 1,
              scale: 1
            }, {
              autoAlpha: 0,
              scale: .98,
              duration: o.th.playVideo.fadeOut,
              ease: o.QE.playVideo.fadeOut
            })
          }), [g?.playVideoTimeline]), (0, a.useLayoutEffect)((() => {
            g.introTimeline && g.introTimeline.from(n.current, {
              "--hero-image-height": "200%",
              "--hero-image-width": "200%"
            }, 0).set([n.current], {
              clearProps: "all"
            })
          }), [g.introTimeline]);
          let h = null;
          return h = (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)("img", {
              ref: n,
              className: "rockstargames-sites-gtae1e05b5b427db773ea2258bfa0ae8db5",
              src: u,
              alt: ""
            })
          }), (0, c.jsx)("div", {
            ref: s,
            className: "rockstargames-sites-gtadd3ae6eacc3a8861a95e554774c21320",
            children: h
          })
        })),
        p = "rockstargames-sites-gtab18cb97e1f1d77c07c7ae1ffc33dc5fd";
      var u = r(6711);
      const f = () => {
          const {
            ctaButtonRef: e,
            timelines: t,
            isExpanded: a,
            createYouTubePlayer: n,
            isStandalone: l,
            playButtonRef: d,
            playVideo: p,
            heroPlayerRef: f
          } = (0, i.TR)(), {
            track: g
          } = (0, u.useGtmTrack)();
          return (0, c.jsx)("button", {
            type: "button",
            ref: d,
            className: "rockstargames-sites-gtac3f7d7244282e6b26ca8bf71e1034182",
            onMouseEnter: e => {
              let {
                currentTarget: t
              } = e;
              s.gsap.to(t, {
                scale: 1.1,
                duration: .15,
                ease: s.Power1.easeOut
              })
            },
            onMouseLeave: e => {
              let {
                currentTarget: t
              } = e;
              s.gsap.to(t, {
                scale: 1,
                duration: .15,
                ease: s.Power1.easeOut
              })
            },
            onClick: () => {
              const r = () => {
                a && s.gsap.to(e.current, {
                  autoAlpha: 1,
                  duration: o.th.playVideo.cta,
                  ease: o.QE.playVideo.cta
                })
              };
              t.playVideoTimeline?.play(), setTimeout((async () => {
                await n({
                  onVideoComplete: r,
                  target: f,
                  id: "hero"
                }), await p()
              }), 2e3), g({
                event: "video_play",
                event_category: "video",
                event_action: "play",
                element_placement: l ? "landing_page_hero" : "banner",
                event_label: "manual",
                video_id: "promo_video",
                video_title: "promo_video"
              })
            },
            "aria-label": "Play Button",
            tabIndex: a || l ? void 0 : -1,
            children: (0, c.jsx)("img", {
              src: r(3648),
              alt: "",
              "aria-hidden": !0
            })
          })
        },
        g = e => {
          let {
            className: t
          } = e;
          return (0, c.jsx)("svg", {
            className: t || "",
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "12",
            viewBox: "0 0 32 12",
            fill: "none",
            children: (0, c.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.7948 1.60281C32.2537 2.47697 31.9171 3.55765 31.0429 4.01658L15.9054 11.9638L0.948843 4.01224C0.0770835 3.54878 -0.253903 2.46636 0.209564 1.5946C0.673031 0.722843 1.75545 0.391857 2.62721 0.855324L15.9159 7.92018L29.381 0.850985C30.2552 0.392054 31.3358 0.728659 31.7948 1.60281Z",
              fill: "white"
            })
          })
        },
        h = {
          logo: "rockstargames-sites-gtaf70b32537fa3218011136f164e4a409d"
        },
        m = (0, a.forwardRef)(((e, t) => {
          let {
            className: a,
            logoSource: s,
            text: o
          } = e;
          return (0, c.jsxs)("div", {
            className: [h.logo, a || ""].join(" "),
            ref: t,
            children: [(0, c.jsx)("img", {
              src: r(8511)(`./${s}`),
              alt: `${o} logo`
            }), (0, c.jsx)("p", {
              children: o
            })]
          })
        })),
        v = (0, a.forwardRef)(((e, t) => {
          let {
            secondPhase: r = !1
          } = e;
          const {
            loading: n,
            translation: l
          } = (0, i.T_)(), d = (0, a.useRef)(null), {
            timelines: u
          } = (0, i.TR)();
          (0, a.useImperativeHandle)(t, (() => d?.current), [d?.current]);
          let h = null,
            v = null,
            y = null;
          h = .5 * o.th.intro, v = "<75%", y = "cubic-bezier(0.42, 0, 0.58, 1)", (0, a.useLayoutEffect)((() => {
            u?.introTimeline && u?.introTimeline?.fromTo(d.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              ease: "cubic-bezier(0.42, 0, 0.58, 1)",
              duration: h,
              onComplete: () => {
                s.gsap.set(d?.current?.children, {
                  pointerEvents: "auto"
                })
              }
            }, "<75%")
          }), [u.introTimeline]), (0, a.useLayoutEffect)((() => {
            u?.playVideoTimeline && u?.playVideoTimeline?.fromTo(d.current, {
              autoAlpha: 1
            }, {
              autoAlpha: 0,
              immediateRender: !1
            }, "<")
          }), [u.playVideoTimeline]);
          let b = null;
          return b = (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(f, {}), r ? (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(m, {
                className: p,
                text: l("d2.destLogoMSG"),
                logoSource: "logo_secondary_stroke.svg"
              }), (0, c.jsx)(g, {
                className: "rockstargames-sites-gtaa160bf39f0ce8b054c03660b310be2a9"
              })]
            }) : (0, c.jsx)(m, {
              className: p,
              text: l("d2.tkoLogoMsg"),
              logoSource: "logo_secondary_stroke.svg"
            })]
          }), (0, c.jsx)("div", {
            ref: d,
            className: "rockstargames-sites-gtac88bbc32d1355db674ca15c36a948cf2",
            children: b
          })
        })),
        y = {
          hero: "rockstargames-sites-gtabdf8106449291381aa85bb1beeab8a09"
        },
        b = (0, a.forwardRef)(((e, t) => (0, c.jsx)("div", {
          className: "rockstargames-sites-gtae25677857e8132ec15a56de2de2f59f0",
          ref: t
        }))),
        x = (0, a.forwardRef)(((e, t) => {
          let {
            className: r,
            standalone: l = !1
          } = e;
          const p = (0, a.useRef)(null),
            u = (0, a.useRef)(null),
            f = (0, a.useRef)(null),
            g = (0, a.useRef)(null),
            {
              addTimeline: h,
              timelines: m,
              setIsVideoPlayerActive: x
            } = (0, i.TR)();
          return (0, a.useImperativeHandle)(t, (() => ({
            heroRef: u,
            heroUIRef: f,
            heroImagesRefs: g
          })), [u?.current, f?.current, g?.current]), (0, a.useLayoutEffect)((() => {
            const e = s.gsap.context((() => {
              const e = s.gsap.timeline({
                  paused: !0,
                  defaults: {
                    duration: o.th.intro,
                    ease: o.QE.intro,
                    force3D: !0
                  }
                }).to(p.current, {
                  autoAlpha: 0
                }),
                t = s.gsap.timeline({
                  paused: !0,
                  defaults: {
                    duration: o.th.default,
                    ease: o.QE.default,
                    force3D: !0
                  }
                });
              h("introTimeline", e), h("playVideoTimeline", t)
            }));
            return () => e.revert()
          }), []), (0, a.useEffect)((() => {
            p?.current && m?.introTimeline && m?.introTimeline.play()
          }), [p?.current, m?.introTimeline, l]), (0, a.useLayoutEffect)((() => {
            m?.playVideoTimeline && u?.current && (m.playVideoTimeline.eventCallback("onStart", (() => {
              m?.playVideoTimeline.timeScale(1), x(!0), s.gsap.set(u?.current, {
                background: "transparent"
              })
            })), m.playVideoTimeline.eventCallback("onReverseComplete", (() => {
              x(!1), s.gsap.set(u?.current, {
                clearProps: "background"
              })
            })))
          }), [x, u?.current, m?.playVideoTimeline, l]), (0, c.jsxs)("div", {
            ref: u,
            className: [y.hero, r || ""].join(" "),
            children: [(0, c.jsx)(b, {
              ref: p
            }), (0, c.jsx)(d, {
              ref: g
            }), (0, c.jsx)(v, {
              ref: f,
              secondPhase: l
            }), l ? null : (0, c.jsx)(n.Z, {})]
          })
        }))
    },
    2316: (e, t, r) => {
      "use strict";
      r.d(t, {
        Z: () => u
      });
      var a = r(6711),
        s = r(5921),
        o = r(927),
        i = r(7421),
        n = r(3509),
        l = r(4463),
        c = r(2435),
        d = r(9342);
      var p = r(3705);
      const u = e => {
        let {
          showCloseButton: t = !1
        } = e;
        const r = (0, o.useRef)(null),
          u = (0, o.useRef)(null),
          {
            track: f
          } = (0, a.useGtmTrack)(),
          {
            timelines: g,
            isVideoPlayerActive: h,
            youtubeRef: m,
            heroPlayerRef: v,
            resetVideo: y
          } = (0, l.TR)();
        let b;
        return b = "promo_banner2", (0, o.useLayoutEffect)((() => {
          g.playVideoTimeline?.fromTo(r.current, {
            autoAlpha: 0
          }, {
            autoAlpha: 1,
            duration: c.th.playVideo.fadeIn,
            ease: c.QE.playVideo.fadeIn
          }).fromTo(u.current, {
            autoAlpha: 0
          }, {
            autoAlpha: 1
          })
        }), [g.playVideoTimeline]), (0, o.useLayoutEffect)((() => () => {
          delete window.onYouTubeIframeAPIReady
        }), []), (0, o.useEffect)((() => {
          s.i.refresh()
        }), [h]), (0, p.jsx)(n.Z, {
          allowPinchZoom: !1,
          enabled: h,
          children: (0, p.jsxs)(i.ZP, {
            disabled: !h,
            ref: r,
            className: "rockstargames-sites-gtae39f01733b7a25ae96fabd1dce1abecd",
            children: [t && (0, p.jsx)(d.Z, {
              className: "rockstargames-sites-gtae474e3a7ab076933da4d4ba887b3502b",
              onClick: () => (m?.current && g.playVideoTimeline.timeScale(3).reverse(), y(), void f({
                event: "takeover_close",
                element_placement: "promo_banner2"
              })),
              closeRef: u
            }), h && (0, p.jsx)("div", {
              className: "rockstargames-sites-gtae69bd18b242f8bb80670c92cce2af186",
              ref: v
            })]
          })
        })
      }
    },
    2435: (e, t, r) => {
      "use strict";
      r.d(t, {
        Gg: () => c,
        QE: () => d,
        _Z: () => i,
        pb: () => o,
        th: () => p,
        x3: () => s
      });
      var a = r(7661);
      const s = {
          banner_collapsed: [/.*/],
          full_exclusion: [/^\/contact/, /agegate/, /privacy/, /legal/, /ccpa/, /corpinfo/, /cookies/, /^\/gta-online\/license-plates/, /.*\?info=.*/]
        },
        o = {
          banner_collapsed: [/.*/],
          full_exclusion: [/^\/activate/, /^\/settings/, /agegate/, /^\/Error.htm/, /^\/(photo|video|job)\/(rdr2|gtav)\/.*/, /^\/games\/maxpayne3/]
        };
      let i, n = null,
        l = null;
      i = "grtTKOExpanded", n = a.Expo.easeInOut, l = 2;
      const c = 60,
        d = {
          default: a.Power2.easeInOut,
          takeover: a.Power4.easeInOut,
          parallax: a.Power3.easeInOut,
          intro: n,
          playVideo: {
            fadeOut: a.Power2.easeIn,
            fadeIn: a.Power2.easeIn,
            cta: a.Power1.easeOut
          }
        },
        p = {
          default: .5,
          takeover: .8,
          parallax: .5,
          intro: 2,
          playVideo: {
            fadeOut: 2,
            fadeIn: 1,
            cta: .3
          }
        }
    },
    4463: (e, t, r) => {
      "use strict";
      r.d(t, {
        A1: () => g,
        on: () => a,
        TR: () => h,
        T_: () => i
      });
      const a = e => {
        let {
          onStateChange: t,
          playerVars: r = {},
          target: a,
          videoId: s,
          playerId: o
        } = e;
        return new Promise(((e, i) => {
          const n = `youtube-player-${o}`,
            l = document.createElement("div");
          l.id = n, a.appendChild(l);
          const c = () => new window.YT.Player(n, {
            videoId: s,
            width: "100%",
            height: "100%",
            playerVars: r,
            events: {
              onReady: async t => {
                try {
                  const r = await t.target;
                  e(r)
                } catch (e) {
                  i(e)
                }
              },
              onStateChange: t
            }
          });
          if (window.YT) c();
          else {
            const e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api", window.onYouTubeIframeAPIReady = () => {
              c()
            }, document.head.appendChild(e)
          }
        }))
      };
      var s = r(4859),
        o = r(1092);
      const i = () => {
        const {
          data: e,
          loading: t
        } = (0, s.useQuery)(o.abc123);
        return {
          data: e,
          loading: t,
          translation: t => e?.abc123?.find((e => e.key === t))?.value ?? ""
        }
      };
      var n = r(9929),
        l = r(2420),
        c = r(668),
        d = r(927),
        p = r(2435),
        u = r(3705);
      const f = (0, d.createContext)(void 0),
        g = e => {
          let {
            children: t
          } = e;
          const [r, s] = (0, d.useState)(!1), [o, g] = (0, d.useState)(), {
            data: h,
            translation: m
          } = i(), [v, y] = (0, d.useState)({}), [b, x] = (0, d.useState)(!1), [w, _] = (0, d.useState)(!1), k = (() => {
            const {
              lsSettings: e,
              mutateLSSettings: t
            } = (0, n.useRockstarWebLSSettings)(), {
              pathname: r,
              search: a
            } = (0, l.useLocation)(), s = (0, d.useRef)((0, c.Z)().currentSite?.site === c.z.socialClub ? p.pb : p.x3), o = () => ((e, t, r) => !e.full_exclusion.find((e => e.test(t + r))))(s.current, r, a), i = t => t && !(window?.env?.responseStatusCode && 200 !== window?.env?.responseStatusCode) && !((e, t, r) => e.banner_collapsed.some((e => "string" == typeof e ? t === e : e.test(t + r))))(s.current, r, a) && (e?.[p._Z] ?? !0), [u, f] = (0, d.useState)(o()), [g, h] = (0, d.useState)(i(u)), [m, v] = (0, d.useState)(g || !u);
            return (0, d.useEffect)((() => {
              const e = o(),
                t = i(e);
              h(t), f(e)
            }), [r, a, window.env]), (0, d.useEffect)((() => {
              !g && u && v(!1)
            }), [g]), (0, d.useEffect)((() => {
              void 0 === e?.[p._Z] && t({
                key: p._Z,
                value: !0
              })
            }), [e]), (0, d.useEffect)((() => {
              e?.[p._Z] || t({
                key: p._Z,
                value: g
              })
            }), [g]), (0, d.useEffect)((() => {
              document.documentElement.style.setProperty("--promo-banner-height", u ? `var(--header-height, ${p.Gg}px)` : "0px")
            }), [u]), {
              isExpanded: g,
              setIsExpanded: h,
              isInitialExpansion: m,
              doesPageDisplayBanner: u
            }
          })(), T = (0, d.useRef)(null), S = (0, d.useRef)(null), E = (0, d.useRef)(null), P = (0, d.useRef)(null), C = (0, d.useRef)(null), R = {
            createYouTubePlayer: async function() {
              let {
                onVideoComplete: e,
                target: t,
                id: r
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const s = await a({
                onStateChange: async t => {
                  switch (t.data) {
                    case window.YT.PlayerState.UNSTARTED:
                      await S.current.mute(), await S.current.playVideo();
                      break;
                    case window.YT.PlayerState.ENDED:
                      e?.();
                    case window.YT.PlayerState.PLAYING:
                  }
                },
                playerVars: {
                  rel: 0,
                  autoplay: 1,
                  playlist: o,
                  controls: 1
                },
                target: t.current,
                videoId: o,
                playerId: r
              });
              S.current = s
            },
            playVideo: async () => {
              await (S?.current?.playVideo())
            },
            pauseVideo: async () => {
              await (S?.current?.pauseVideo())
            },
            stopVideo: async () => {
              await (S?.current?.stopVideo())
            },
            resetVideo: async () => {
              await (S?.current?.pauseVideo()), await (S?.current?.seekTo(0))
            }
          }, A = (e, t) => {
            y((r => ({
              ...r,
              [e]: t
            })))
          }, O = () => {
            for (const e in v) Object.hasOwn(v, e) && v[e].reverse()
          };
          (0, d.useEffect)((() => {
            g(m("youtubeId"))
          }), [h]), (0, d.useEffect)((() => () => {
            O()
          }), [v]);
          const M = (0, d.useMemo)((() => ({
            ctaButtonRef: T,
            timelines: v,
            addTimeline: A,
            reverseAllTimelines: O,
            isStandalone: r,
            setIsStandalone: s,
            isModalOpen: w,
            setIsModalOpen: _,
            ...k,
            isVideoPlayerActive: b,
            setIsVideoPlayerActive: x,
            youtubeRef: S,
            heroPlayerRef: P,
            dialogPlayerRef: C,
            playButtonRef: E,
            ...R,
            videoId: o
          })), [T, h, v, A, O, k, b, x, S, P, C, E, R, o]);
          return (0, u.jsx)(f.Provider, {
            value: M,
            children: t
          })
        },
        h = () => {
          const e = (0, d.useContext)(f);
          if (void 0 === e) throw new Error("useGTA must be used within a GTAProvider");
          return e
        }
    },
    668: (e, t, r) => {
      "use strict";
      r.d(t, {
        Z: () => o,
        z: () => a
      });
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        o = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = s.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [a, s] = t;
            return s === r && (e = {
              site: a,
              subDomain: s
            }, !0)
          })) >= 0));
          return {
            ...s[a >= 0 ? a : 0],
            currentSite: e
          }
        }
    },
    1092: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "abc123"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "abc123"
              },
              name: {
                kind: "Name",
                value: "abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 183
        }
      };

      function r(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var a = e.type;
          "NamedType" === a.kind && t.add(a.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, t)
        }))
      }
      t.loc.source = {
        body: "query abc123($locale: String!) {\n    abc123: abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c(\n        locale: $locale\n    ) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function s(e, t) {
        for (var r = 0; r < e.definitions.length; r++) {
          var a = e.definitions[r];
          if (a.name && a.name.value == t) return a
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          r(e, t), a[e.name.value] = t
        }
      })), e.exports = t, e.exports.abc123 = function(e, t) {
        var r = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (r.loc = e.loc);
        var o = a[t] || new Set,
          i = new Set,
          n = new Set;
        for (o.forEach((function(e) {
            n.add(e)
          })); n.size > 0;) {
          var l = n;
          n = new Set, l.forEach((function(e) {
            i.has(e) || (i.add(e), (a[e] || new Set).forEach((function(e) {
              n.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
          var a = s(e, t);
          a && r.definitions.push(a)
        })), r
      }(t, "abc123")
    },
    8511: (e, t, r) => {
      var a = {
        "./hero-mobile.jpg": 9250,
        "./hero.jpg": 683,
        "./hero_0.jpg": 7820,
        "./hero_00.jpg": 7386,
        "./hero_00_L.png": 3598,
        "./hero_00_R.png": 1232,
        "./hero_1.png": 5296,
        "./hero_2.png": 2881,
        "./hero_3.png": 5582,
        "./hero_logo.png": 6764,
        "./logo_primary.svg": 9788,
        "./logo_rockstar.svg": 7479,
        "./logo_rockstar_gold.svg": 4640,
        "./logo_secondary_color.png": 4473,
        "./logo_secondary_mask.svg": 4481,
        "./logo_secondary_stroke.svg": 6164,
        "./play.svg": 3648,
        "./playstation.svg": 6314,
        "./xbox.svg": 7959
      };

      function s(e) {
        var t = o(e);
        return r(t)
      }

      function o(e) {
        if (!r.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return a[e]
      }
      s.keys = function() {
        return Object.keys(a)
      }, s.resolve = o, e.exports = s, s.id = 8511
    },
    9250: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
    },
    683: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f7eab33a4989ce5f0cd89c70723909b3.jpg"
    },
    7820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/309aa5a460fa7144f3633cf36159c417.jpg"
    },
    7386: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cff62fb2b8dc824b667505750129bd4d.jpg"
    },
    3598: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c762105ff73b658b9e0d5373b9f6a476.png"
    },
    1232: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1fd72e459fc90381589af486ab6b029.png"
    },
    5296: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/530ffb0c42c0c18dcacbeb49c6587895.png"
    },
    2881: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/52c0b621f342d970c1e7726a83094887.png"
    },
    5582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4bc6cd678f5391e5108a0e7fc1828436.png"
    },
    6764: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b3f050fed97a2b5bd571123c1a302593.png"
    },
    9788: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f37e3b93d105ed47dff3a5083ba21dd9.svg"
    },
    7479: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52ba580606a589f4ac105866012722.svg"
    },
    4640: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c151d539436aaf8c9460d25e88a9307a.svg"
    },
    4473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png"
    },
    4481: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa598c85c9406b0078e3db23e2b605a8.svg"
    },
    6164: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4933ca1111cda1074c52c3918dbfbaf2.svg"
    },
    3648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46b63430f04ecee9ad59d197168370a0.svg"
    },
    6314: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e47fca9e280c162468fe51d577f6db1.svg"
    },
    7959: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb63e6e7c7df7dcec0a9e0908e8b5d2.svg"
    }
  }
]);