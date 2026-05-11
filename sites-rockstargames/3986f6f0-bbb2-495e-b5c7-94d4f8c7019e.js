try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3986f6f0-bbb2-495e-b5c7-94d4f8c7019e", t._sentryDebugIdIdentifier = "sentry-dbid-3986f6f0-bbb2-495e-b5c7-94d4f8c7019e")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6045], {
    44154(t, e, n) {
      n.d(e, {
        L: () => l
      });
      var r = n(71127),
        i = n(79719);
      let o = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect,
        s = t => t && !Array.isArray(t) && "object" == typeof t,
        a = [],
        u = {},
        c = i.Ay;
      const l = (t, e = a) => {
        let n = u;
        s(t) ? (n = t, t = null, e = "dependencies" in n ? n.dependencies : a) : s(e) && (n = e, e = "dependencies" in n ? n.dependencies : a), t && "function" != typeof t && console.warn("First parameter must be a function or config object");
        const {
          scope: i,
          revertOnUpdate: l
        } = n, f = (0, r.useRef)(!1), d = (0, r.useRef)(c.context(() => {}, i)), h = (0, r.useRef)(t => d.current.add(null, t)), p = e && e.length && !l;
        return p && o(() => (f.current = !0, () => d.current.revert()), a), o(() => {
          if (t && d.current.add(t, i), !p || !f.current) return () => d.current.revert()
        }, e), {
          context: d.current,
          contextSafe: h.current
        }
      };
      l.register = t => {
        c = t
      }, l.headless = !0
    },
    94926(t, e, n) {
      n.d(e, {
        Eq: () => u
      });
      var r = new WeakMap,
        i = new WeakMap,
        o = {},
        s = 0,
        a = function(t) {
          return t && (t.host || a(t.parentNode))
        },
        u = function(t, e, n) {
          void 0 === n && (n = "data-aria-hidden");
          var u = Array.from(Array.isArray(t) ? t : [t]),
            c = e || function(t) {
              return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body
            }(t);
          return c ? (u.push.apply(u, Array.from(c.querySelectorAll("[aria-live], script"))), function(t, e, n, u) {
            var c = function(t, e) {
              return e.map(function(e) {
                if (t.contains(e)) return e;
                var n = a(e);
                return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
              }).filter(function(t) {
                return Boolean(t)
              })
            }(e, Array.isArray(t) ? t : [t]);
            o[n] || (o[n] = new WeakMap);
            var l = o[n],
              f = [],
              d = new Set,
              h = new Set(c),
              p = function(t) {
                t && !d.has(t) && (d.add(t), p(t.parentNode))
              };
            c.forEach(p);
            var m = function(t) {
              t && !h.has(t) && Array.prototype.forEach.call(t.children, function(t) {
                if (d.has(t)) m(t);
                else try {
                  var e = t.getAttribute(u),
                    o = null !== e && "false" !== e,
                    s = (r.get(t) || 0) + 1,
                    a = (l.get(t) || 0) + 1;
                  r.set(t, s), l.set(t, a), f.push(t), 1 === s && o && i.set(t, !0), 1 === a && t.setAttribute(n, "true"), o || t.setAttribute(u, "true")
                } catch (e) {
                  console.error("aria-hidden: cannot operate on ", t, e)
                }
              })
            };
            return m(e), d.clear(), s++,
              function() {
                f.forEach(function(t) {
                  var e = r.get(t) - 1,
                    o = l.get(t) - 1;
                  r.set(t, e), l.set(t, o), e || (i.has(t) || t.removeAttribute(u), i.delete(t)), o || t.removeAttribute(n)
                }), --s || (r = new WeakMap, r = new WeakMap, i = new WeakMap, o = {})
              }
          }(u, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    79719(t, e, n) {
      function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
      }
      n.d(e, {
        Ay: () => Hr,
        os: () => Hr
      });
      var o, s, a, u, c, l, f, d, h, p, m, _, g, v, y, b, w, x = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        T = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        E = 1e8,
        O = 1e-8,
        D = 2 * Math.PI,
        M = D / 4,
        C = 0,
        A = Math.sqrt,
        S = Math.cos,
        k = Math.sin,
        R = function(t) {
          return "string" == typeof t
        },
        P = function(t) {
          return "function" == typeof t
        },
        F = function(t) {
          return "number" == typeof t
        },
        N = function(t) {
          return void 0 === t
        },
        I = function(t) {
          return "object" == typeof t
        },
        L = function(t) {
          return !1 !== t
        },
        z = function() {
          return "undefined" != typeof window
        },
        j = function(t) {
          return P(t) || R(t)
        },
        B = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        W = Array.isArray,
        U = /(?:-?\.?\d|\.)+/gi,
        V = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        $ = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        Y = /[+-]=-?[.\d]+/,
        X = /[^,'"\[\]\s]+/gi,
        G = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        H = {},
        K = {},
        Q = function(t) {
          return (K = Dt(t, H)) && Mn
        },
        Z = function(t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        J = function(t, e) {
          return !e && console.warn(t)
        },
        tt = function(t, e) {
          return t && (H[t] = e) && K && (K[t] = e) || H
        },
        et = function() {
          return 0
        },
        nt = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        rt = {
          suppressEvents: !0,
          kill: !1
        },
        it = {
          suppressEvents: !0
        },
        ot = {},
        st = [],
        at = {},
        ut = {},
        ct = {},
        lt = 30,
        ft = [],
        dt = "",
        ht = function(t) {
          var e, n, r = t[0];
          if (I(r) || P(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
            for (n = ft.length; n-- && !ft[n].targetTest(r););
            e = ft[n]
          }
          for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Be(t[n], e))) || t.splice(n, 1);
          return t
        },
        pt = function(t) {
          return t._gsap || ht(re(t))[0]._gsap
        },
        mt = function(t, e, n) {
          return (n = t[e]) && P(n) ? t[e]() : N(n) && t.getAttribute && t.getAttribute(e) || n
        },
        _t = function(t, e) {
          return (t = t.split(",")).forEach(e) || t
        },
        gt = function(t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        vt = function(t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        yt = function(t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2));
          return t = parseFloat(t), "+" === n ? t + r : "-" === n ? t - r : "*" === n ? t * r : t / r
        },
        bt = function(t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
          return r < n
        },
        wt = function() {
          var t, e, n = st.length,
            r = st.slice(0);
          for (at = {}, st.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        xt = function(t, e, n, r) {
          st.length && !s && wt(), t.render(e, n, r || s && e < 0 && (t._initted || t._startAt)), st.length && !s && wt()
        },
        Tt = function(t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(X).length < 2 ? e : R(t) ? t.trim() : t
        },
        Et = function(t) {
          return t
        },
        Ot = function(t, e) {
          for (var n in e) n in t || (t[n] = e[n]);
          return t
        },
        Dt = function(t, e) {
          for (var n in e) t[n] = e[n];
          return t
        },
        Mt = function t(e, n) {
          for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = I(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
          return e
        },
        Ct = function(t, e) {
          var n, r = {};
          for (n in t) n in e || (r[n] = t[n]);
          return r
        },
        At = function(t) {
          var e, n = t.parent || u,
            r = t.keyframes ? (e = W(t.keyframes), function(t, n) {
              for (var r in n) r in t || "duration" === r && e || "ease" === r || (t[r] = n[r])
            }) : Ot;
          if (L(t.inherit))
            for (; n;) r(t, n.vars.defaults), n = n.parent || n._dp;
          return t
        },
        St = function(t, e, n, r, i) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var o, s = t[r];
          if (i)
            for (o = e[i]; s && s[i] > o;) s = s._prev;
          return s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e
        },
        kt = function(t, e, n, r) {
          void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
          var i = e._prev,
            o = e._next;
          i ? i._next = o : t[n] === e && (t[n] = o), o ? o._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
        },
        Rt = function(t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        Pt = function(t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n;) n._dirty = 1, n = n.parent;
          return t
        },
        Ft = function(t, e, n, r) {
          return t._startAt && (s ? t._startAt.revert(rt) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
        },
        Nt = function t(e) {
          return !e || e._ts && t(e.parent)
        },
        It = function(t) {
          return t._repeat ? Lt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Lt = function(t, e) {
          var n = Math.floor(t /= e);
          return t && n === t ? n - 1 : n
        },
        zt = function(t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        jt = function(t) {
          return t._end = vt(t._start + (t._tDur / Math.abs(t._ts || t._rts || O) || 0))
        },
        Bt = function(t, e) {
          var n = t._dp;
          return n && n.smoothChildTiming && t._ts && (t._start = vt(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), jt(t), n._dirty || Pt(n, t)), t
        },
        Wt = function(t, e) {
          var n;
          if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = zt(t.rawTime(), e), (!e._dur || Jt(0, e.totalDuration(), n) - e._tTime > O) && e.render(n, !0)), Pt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
            t._zTime = -1e-8
          }
        },
        Ut = function(t, e, n, r) {
          return e.parent && Rt(e), e._start = vt((F(n) ? n : n || t !== u ? Kt(t, n, e) : t._time) + e._delay), e._end = vt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), St(t, e, "_first", "_last", t._sort ? "_start" : 0), Yt(e) || (t._recent = e), r || Wt(t, e), t._ts < 0 && Bt(t, t._tTime), t
        },
        Vt = function(t, e) {
          return (H.ScrollTrigger || Z("scrollTrigger", e)) && H.ScrollTrigger.create(e, t)
        },
        qt = function(t, e, n, r, i) {
          return Ge(t, e, i), t._initted ? !n && t._pt && !s && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && h !== Me.frame ? (st.push(t), t._lazy = [i, r], 1) : void 0 : 1
        },
        $t = function t(e) {
          var n = e.parent;
          return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
        },
        Yt = function(t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
        },
        Xt = function(t, e, n, r) {
          var i = t._repeat,
            o = vt(e) || 0,
            s = t._tTime / t._tDur;
          return s && !r && (t._time *= o / t._dur), t._dur = o, t._tDur = i ? i < 0 ? 1e10 : vt(o * (i + 1) + t._rDelay * i) : o, s > 0 && !r && Bt(t, t._tTime = t._tDur * s), t.parent && jt(t), n || Pt(t.parent, t), t
        },
        Gt = function(t) {
          return t instanceof Ue ? Pt(t) : Xt(t, t._dur)
        },
        Ht = {
          _start: 0,
          endTime: et,
          totalDuration: et
        },
        Kt = function t(e, n, r) {
          var i, o, s, a = e.labels,
            u = e._recent || Ht,
            c = e.duration() >= E ? u.endTime(!1) : e._dur;
          return R(n) && (isNaN(n) || n in a) ? (o = n.charAt(0), s = "%" === n.substr(-1), i = n.indexOf("="), "<" === o || ">" === o ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === o ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (n in a || (a[n] = c), a[n]) : (o = parseFloat(n.charAt(i - 1) + n.substr(i + 1)), s && r && (o = o / 100 * (W(r) ? r[0] : r).totalDuration()), i > 1 ? t(e, n.substr(0, i - 1), r) + o : c + o)) : null == n ? c : +n
        },
        Qt = function(t, e, n) {
          var r, i, o = F(e[1]),
            s = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[s];
          if (o && (a.duration = e[1]), a.parent = n, t) {
            for (r = a, i = n; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = L(i.vars.inherit) && i.parent;
            a.immediateRender = L(r.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[s - 1]
          }
          return new Je(e[0], a, e[s + 1])
        },
        Zt = function(t, e) {
          return t || 0 === t ? e(t) : e
        },
        Jt = function(t, e, n) {
          return n < t ? t : n > e ? e : n
        },
        te = function(t, e) {
          return R(t) && (e = G.exec(t)) ? e[1] : ""
        },
        ee = [].slice,
        ne = function(t, e) {
          return t && I(t) && "length" in t && (!e && !t.length || t.length - 1 in t && I(t[0])) && !t.nodeType && t !== c
        },
        re = function(t, e, n) {
          return a && !e && a.selector ? a.selector(t) : !R(t) || n || !l && Ce() ? W(t) ? function(t, e, n) {
            return void 0 === n && (n = []), t.forEach(function(t) {
              var r;
              return R(t) && !e || ne(t, 1) ? (r = n).push.apply(r, re(t)) : n.push(t)
            }) || n
          }(t, n) : ne(t) ? ee.call(t, 0) : t ? [t] : [] : ee.call((e || f).querySelectorAll(t), 0)
        },
        ie = function(t) {
          return t = re(t)[0] || J("Invalid scope") || {},
            function(e) {
              var n = t.current || t.nativeElement || t;
              return re(e, n.querySelectorAll ? n : n === t ? J("Invalid scope") || f.createElement("div") : t)
            }
        },
        oe = function(t) {
          return t.sort(function() {
            return .5 - Math.random()
          })
        },
        se = function(t) {
          if (P(t)) return t;
          var e = I(t) ? t : {
              each: t
            },
            n = Ne(e.ease),
            r = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            s = r > 0 && r < 1,
            a = isNaN(r) || s,
            u = e.axis,
            c = r,
            l = r;
          return R(r) ? c = l = {
              center: .5,
              edges: .5,
              end: 1
            } [r] || 0 : !s && a && (c = r[0], l = r[1]),
            function(t, s, f) {
              var d, h, p, m, _, g, v, y, b, w = (f || e).length,
                x = o[w];
              if (!x) {
                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, E])[1])) {
                  for (v = -E; v < (v = f[b++].getBoundingClientRect().left) && b < w;);
                  b < w && b--
                }
                for (x = o[w] = [], d = a ? Math.min(b, w) * c - .5 : r % b, h = b === E ? 0 : a ? w * l / b - .5 : r / b | 0, v = 0, y = E, g = 0; g < w; g++) p = g % b - d, m = h - (g / b | 0), x[g] = _ = u ? Math.abs("y" === u ? m : p) : A(p * p + m * m), _ > v && (v = _), _ < y && (y = _);
                "random" === r && oe(x), x.max = v - y, x.min = y, x.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : u ? "y" === u ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === r ? -1 : 1), x.b = w < 0 ? i - w : i, x.u = te(e.amount || e.each) || 0, n = n && w < 0 ? Pe(n) : n
              }
              return w = (x[t] - x.min) / x.max || 0, vt(x.b + (n ? n(w) : w) * x.v) + x.u
            }
        },
        ae = function(t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function(n) {
            var r = vt(Math.round(parseFloat(n) / t) * t * e);
            return (r - r % 1) / e + (F(n) ? 0 : te(n))
          }
        },
        ue = function(t, e) {
          var n, r, i = W(t);
          return !i && I(t) && (n = i = t.radius || E, t.values ? (t = re(t.values), (r = !F(t[0])) && (n *= n)) : t = ae(t.increment)), Zt(e, i ? P(t) ? function(e) {
            return r = t(e), Math.abs(r - e) <= n ? r : e
          } : function(e) {
            for (var i, o, s = parseFloat(r ? e.x : e), a = parseFloat(r ? e.y : 0), u = E, c = 0, l = t.length; l--;)(i = r ? (i = t[l].x - s) * i + (o = t[l].y - a) * o : Math.abs(t[l] - s)) < u && (u = i, c = l);
            return c = !n || u <= n ? t[c] : e, r || c === e || F(e) ? c : c + te(e)
          } : ae(t))
        },
        ce = function(t, e, n, r) {
          return Zt(W(t) ? !e : !0 === n ? !!(n = 0) : !r, function() {
            return W(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
          })
        },
        le = function(t, e, n) {
          return Zt(n, function(n) {
            return t[~~e(n)]
          })
        },
        fe = function(t) {
          for (var e, n, r, i, o = 0, s = ""; ~(e = t.indexOf("random(", o));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? X : U), s += t.substr(o, e - o) + ce(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), o = r + 1;
          return s + t.substr(o, t.length - o)
        },
        de = function(t, e, n, r, i) {
          var o = e - t,
            s = r - n;
          return Zt(i, function(e) {
            return n + ((e - t) / o * s || 0)
          })
        },
        he = function(t, e, n) {
          var r, i, o, s = t.labels,
            a = E;
          for (r in s)(i = s[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (o = r, a = i);
          return o
        },
        pe = function(t, e, n) {
          var r, i, o, s = t.vars,
            u = s[e],
            c = a,
            l = t._ctx;
          if (u) return r = s[e + "Params"], i = s.callbackScope || t, n && st.length && wt(), l && (a = l), o = r ? u.apply(i, r) : u.call(i), a = c, o
        },
        me = function(t) {
          return Rt(t), t.scrollTrigger && t.scrollTrigger.kill(!!s), t.progress() < 1 && pe(t, "onInterrupt"), t
        },
        _e = [],
        ge = function(t) {
          if (t)
            if (t = !t.name && t.default || t, z() || t.headless) {
              var e = t.name,
                n = P(t),
                r = e && !n && t.init ? function() {
                  this._props = []
                } : t,
                i = {
                  init: et,
                  render: cn,
                  add: Ye,
                  kill: fn,
                  modifier: ln,
                  rawVars: 0
                },
                o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: on,
                  aliases: {},
                  register: 0
                };
              if (Ce(), t !== r) {
                if (ut[e]) return;
                Ot(r, Ot(Ct(t, i), o)), Dt(r.prototype, Dt(i, Ct(t, o))), ut[r.prop = e] = r, t.targetTest && (ft.push(r), ot[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
              }
              tt(e, r), t.register && t.register(Mn, r, pn)
            } else _e.push(t)
        },
        ve = 255,
        ye = {
          aqua: [0, ve, ve],
          lime: [0, ve, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ve],
          navy: [0, 0, 128],
          white: [ve, ve, ve],
          olive: [128, 128, 0],
          yellow: [ve, ve, 0],
          orange: [ve, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ve, 0, 0],
          pink: [ve, 192, 203],
          cyan: [0, ve, ve],
          transparent: [ve, ve, ve, 0]
        },
        be = function(t, e, n) {
          return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * ve + .5 | 0
        },
        we = function(t, e, n) {
          var r, i, o, s, a, u, c, l, f, d, h = t ? F(t) ? [t >> 16, t >> 8 & ve, t & ve] : 0 : ye.black;
          if (!h) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) h = ye[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (r = t.charAt(1), i = t.charAt(2), o = t.charAt(3), t = "#" + r + r + i + i + o + o + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(h = parseInt(t.substr(1, 6), 16)) >> 16, h >> 8 & ve, h & ve, parseInt(t.substr(7), 16) / 255];
              h = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ve, t & ve]
            } else if ("hsl" === t.substr(0, 3))
              if (h = d = t.match(U), e) {
                if (~t.indexOf("=")) return h = t.match(V), n && h.length < 4 && (h[3] = 1), h
              } else s = +h[0] % 360 / 360, a = +h[1] / 100, r = 2 * (u = +h[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a), h.length > 3 && (h[3] *= 1), h[0] = be(s + 1 / 3, r, i), h[1] = be(s, r, i), h[2] = be(s - 1 / 3, r, i);
            else h = t.match(U) || ye.transparent;
            h = h.map(Number)
          }
          return e && !d && (r = h[0] / ve, i = h[1] / ve, o = h[2] / ve, u = ((c = Math.max(r, i, o)) + (l = Math.min(r, i, o))) / 2, c === l ? s = a = 0 : (f = c - l, a = u > .5 ? f / (2 - c - l) : f / (c + l), s = c === r ? (i - o) / f + (i < o ? 6 : 0) : c === i ? (o - r) / f + 2 : (r - i) / f + 4, s *= 60), h[0] = ~~(s + .5), h[1] = ~~(100 * a + .5), h[2] = ~~(100 * u + .5)), n && h.length < 4 && (h[3] = 1), h
        },
        xe = function(t) {
          var e = [],
            n = [],
            r = -1;
          return t.split(Ee).forEach(function(t) {
            var i = t.match(q) || [];
            e.push.apply(e, i), n.push(r += i.length + 1)
          }), e.c = n, e
        },
        Te = function(t, e, n) {
          var r, i, o, s, a = "",
            u = (t + a).match(Ee),
            c = e ? "hsla(" : "rgba(",
            l = 0;
          if (!u) return t;
          if (u = u.map(function(t) {
              return (t = we(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), n && (o = xe(t), (r = n.c).join(a) !== o.c.join(a)))
            for (s = (i = t.replace(Ee, "1").split(q)).length - 1; l < s; l++) a += i[l] + (~r.indexOf(l) ? u.shift() || c + "0,0,0,0)" : (o.length ? o : u.length ? u : n).shift());
          if (!i)
            for (s = (i = t.split(Ee)).length - 1; l < s; l++) a += i[l] + u[l];
          return a + i[s]
        },
        Ee = function() {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ye) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        Oe = /hsl[a]?\(/,
        De = function(t) {
          var e, n = t.join(" ");
          if (Ee.lastIndex = 0, Ee.test(n)) return e = Oe.test(n), t[1] = Te(t[1], e), t[0] = Te(t[0], e, xe(t[1])), !0
        },
        Me = function() {
          var t, e, n, r, i, o, s = Date.now,
            a = 500,
            u = 33,
            h = s(),
            p = h,
            _ = 1e3 / 240,
            g = _,
            v = [],
            y = function n(c) {
              var l, f, d, m, y = s() - p,
                b = !0 === c;
              if ((y > a || y < 0) && (h += y - u), ((l = (d = (p += y) - h) - g) > 0 || b) && (m = ++r.frame, i = d - 1e3 * r.time, r.time = d /= 1e3, g += l + (l >= _ ? 4 : _ - l), f = 1), b || (t = e(n)), f)
                for (o = 0; o < v.length; o++) v[o](d, i, m, c)
            };
          return r = {
            time: 0,
            frame: 0,
            tick: function() {
              y(!0)
            },
            deltaRatio: function(t) {
              return i / (1e3 / (t || 60))
            },
            wake: function() {
              d && (!l && z() && (c = l = window, f = c.document || {}, H.gsap = Mn, (c.gsapVersions || (c.gsapVersions = [])).push(Mn.version), Q(K || c.GreenSockGlobals || !c.gsap && c || {}), _e.forEach(ge)), n = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && r.sleep(), e = n || function(t) {
                return setTimeout(t, g - 1e3 * r.time + 1 | 0)
              }, m = 1, y(2))
            },
            sleep: function() {
              (n ? cancelAnimationFrame : clearTimeout)(t), m = 0, e = et
            },
            lagSmoothing: function(t, e) {
              a = t || 1 / 0, u = Math.min(e || 33, a)
            },
            fps: function(t) {
              _ = 1e3 / (t || 240), g = 1e3 * r.time + _
            },
            add: function(t, e, n) {
              var i = e ? function(e, n, o, s) {
                t(e, n, o, s), r.remove(i)
              } : t;
              return r.remove(t), v[n ? "unshift" : "push"](i), Ce(), i
            },
            remove: function(t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && o >= e && o--
            },
            _listeners: v
          }
        }(),
        Ce = function() {
          return !m && Me.wake()
        },
        Ae = {},
        Se = /^[\d.\-M][\d.\-,\s]/,
        ke = /["']/g,
        Re = function(t) {
          for (var e, n, r, i = {}, o = t.substr(1, t.length - 3).split(":"), s = o[0], a = 1, u = o.length; a < u; a++) n = o[a], e = a !== u - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[s] = isNaN(r) ? r.replace(ke, "").trim() : +r, s = n.substr(e + 1).trim();
          return i
        },
        Pe = function(t) {
          return function(e) {
            return 1 - t(1 - e)
          }
        },
        Fe = function t(e, n) {
          for (var r, i = e._first; i;) i instanceof Ue ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
        },
        Ne = function(t, e) {
          return t && (P(t) ? t : Ae[t] || function(t) {
            var e, n, r, i, o = (t + "").split("("),
              s = Ae[o[0]];
            return s && o.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Re(o[1])] : (e = t, n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(Tt)) : Ae._CE && Se.test(t) ? Ae._CE("", t) : s
          }(t)) || e
        },
        Ie = function(t, e, n, r) {
          void 0 === n && (n = function(t) {
            return 1 - e(1 - t)
          }), void 0 === r && (r = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
          });
          var i, o = {
            easeIn: e,
            easeOut: n,
            easeInOut: r
          };
          return _t(t, function(t) {
            for (var e in Ae[t] = H[t] = o, Ae[i = t.toLowerCase()] = n, o) Ae[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ae[t + "." + e] = o[e]
          }), o
        },
        Le = function(t) {
          return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
          }
        },
        ze = function t(e, n, r) {
          var i = n >= 1 ? n : 1,
            o = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
            s = o / D * (Math.asin(1 / i) || 0),
            a = function(t) {
              return 1 === t ? 1 : i * Math.pow(2, -10 * t) * k((t - s) * o) + 1
            },
            u = "out" === e ? a : "in" === e ? function(t) {
              return 1 - a(1 - t)
            } : Le(a);
          return o = D / o, u.config = function(n, r) {
            return t(e, n, r)
          }, u
        },
        je = function t(e, n) {
          void 0 === n && (n = 1.70158);
          var r = function(t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0
            },
            i = "out" === e ? r : "in" === e ? function(t) {
              return 1 - r(1 - t)
            } : Le(r);
          return i.config = function(n) {
            return t(e, n)
          }, i
        };
      _t("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var n = e < 5 ? e + 1 : e;
        Ie(t + ",Power" + (n - 1), e ? function(t) {
          return Math.pow(t, n)
        } : function(t) {
          return t
        }, function(t) {
          return 1 - Math.pow(1 - t, n)
        }, function(t) {
          return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        })
      }), Ae.Linear.easeNone = Ae.none = Ae.Linear.easeIn, Ie("Elastic", ze("in"), ze("out"), ze()), _ = 7.5625, y = 2 * (v = 1 / (g = 2.75)), b = 2.5 * v, Ie("Bounce", function(t) {
        return 1 - w(1 - t)
      }, w = function(t) {
        return t < v ? _ * t * t : t < y ? _ * Math.pow(t - 1.5 / g, 2) + .75 : t < b ? _ * (t -= 2.25 / g) * t + .9375 : _ * Math.pow(t - 2.625 / g, 2) + .984375
      }), Ie("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
      }), Ie("Circ", function(t) {
        return -(A(1 - t * t) - 1)
      }), Ie("Sine", function(t) {
        return 1 === t ? 1 : 1 - S(t * M)
      }), Ie("Back", je("in"), je("out"), je()), Ae.SteppedEase = Ae.steps = H.SteppedEase = {
        config: function(t, e) {
          void 0 === t && (t = 1);
          var n = 1 / t,
            r = t + (e ? 0 : 1),
            i = e ? 1 : 0;
          return function(t) {
            return ((r * Jt(0, .99999999, t) | 0) + i) * n
          }
        }
      }, T.ease = Ae["quad.out"], _t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return dt += t + "," + t + "Params,"
      });
      var Be = function(t, e) {
          this.id = C++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mt, this.set = e ? e.getSetter : on
        },
        We = function() {
          function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Xt(this, +t.duration, 1, 1), this.data = t.data, a && (this._ctx = a, a.data.push(this)), m || Me.wake()
          }
          var e = t.prototype;
          return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
          }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, Xt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, e.totalTime = function(t, e) {
            if (Ce(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
              for (Bt(this, t), !n._dp || n.parent || Wt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Ut(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === O || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), xt(this, t, e)), this
          }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + It(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
          }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0
          }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + It(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, e.iteration = function(t, e) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Lt(this._tTime, n) + 1 : 1
          }, e.timeScale = function(t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var n = this.parent && this._ts ? zt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Jt(-Math.abs(this._delay), this._tDur, n), !1 !== e), jt(this),
              function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
              }(this)
          }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ce(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== O && (this._tTime -= O)))), this) : this._ps
          }, e.startTime = function(t) {
            if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && Ut(e, this, t - this._delay), this
            }
            return this._start
          }, e.endTime = function(t) {
            return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? zt(e.rawTime(t), this) : this._tTime : this._tTime
          }, e.revert = function(t) {
            void 0 === t && (t = it);
            var e = s;
            return s = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), s = e, this
          }, e.globalTime = function(t) {
            for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (Math.abs(e._ts) || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : n
          }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Gt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, e.repeatDelay = function(t) {
            if (arguments.length) {
              var e = this._time;
              return this._rDelay = t, Gt(this), e ? this.time(e) : this
            }
            return this._rDelay
          }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
          }, e.seek = function(t, e) {
            return this.totalTime(Kt(this, t), L(e))
          }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, L(e))
          }, e.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, e.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
          }, e.resume = function() {
            return this.paused(!1)
          }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
          }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -1e-8, this
          }, e.isActive = function() {
            var t, e = this.parent || this._dp,
              n = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - O))
          }, e.eventCallback = function(t, e, n) {
            var r = this.vars;
            return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
          }, e.then = function(t) {
            var e = this;
            return new Promise(function(n) {
              var r = P(t) ? t : Et,
                i = function() {
                  var t = e.then;
                  e.then = null, P(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
                };
              e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
            })
          }, e.kill = function() {
            me(this)
          }, t
        }();
      Ot(We.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      });
      var Ue = function(t) {
        function e(e, n) {
          var i;
          return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = L(e.sortChildren), u && Ut(e.parent || u, r(i), n), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Vt(r(i), e.scrollTrigger), i
        }
        i(e, t);
        var n = e.prototype;
        return n.to = function(t, e, n) {
          return Qt(0, arguments, this), this
        }, n.from = function(t, e, n) {
          return Qt(1, arguments, this), this
        }, n.fromTo = function(t, e, n, r) {
          return Qt(2, arguments, this), this
        }, n.set = function(t, e, n) {
          return e.duration = 0, e.parent = this, At(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Je(t, e, Kt(this, n), 1), this
        }, n.call = function(t, e, n) {
          return Ut(this, Je.delayedCall(0, t, e), n)
        }, n.staggerTo = function(t, e, n, r, i, o, s) {
          return n.duration = e, n.stagger = n.stagger || r, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new Je(t, n, Kt(this, i)), this
        }, n.staggerFrom = function(t, e, n, r, i, o, s) {
          return n.runBackwards = 1, At(n).immediateRender = L(n.immediateRender), this.staggerTo(t, e, n, r, i, o, s)
        }, n.staggerFromTo = function(t, e, n, r, i, o, s, a) {
          return r.startAt = n, At(r).immediateRender = L(r.immediateRender), this.staggerTo(t, e, r, i, o, s, a)
        }, n.render = function(t, e, n) {
          var r, i, o, a, c, l, f, d, h, p, m, _, g = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            b = t <= 0 ? 0 : vt(t),
            w = this._zTime < 0 != t < 0 && (this._initted || !y);
          if (this !== u && b > v && t >= 0 && (b = v), b !== this._tTime || n || w) {
            if (g !== this._time && y && (b += this._time - g, t += this._time - g), r = b, h = this._start, l = !(d = this._ts), w && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (m = this._yoyo, c = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * c + t, e, n);
              if (r = vt(b % c), b === v ? (a = this._repeat, r = y) : ((a = ~~(b / c)) && a === b / c && (r = y, a--), r > y && (r = y)), p = Lt(this._tTime, c), !g && this._tTime && p !== a && this._tTime - p * c - this._dur <= 0 && (p = a), m && 1 & a && (r = y - r, _ = 1), a !== p && !this._lock) {
                var x = m && 1 & p,
                  T = x === (m && 1 & a);
                if (a < p && (x = !x), g = x ? 0 : b % y ? y : b, this._lock = 1, this.render(g || (_ ? 0 : vt(a * c)), e, !y)._lock = 0, this._tTime = b, !e && this.parent && pe(this, "onRepeat"), this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, T && (this._lock = 2, g = x ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !_ && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                Fe(this, _)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (f = function(t, e, n) {
                var r;
                if (n > e)
                  for (r = t._first; r && r._start <= n;) {
                    if ("isPause" === r.data && r._start > e) return r;
                    r = r._next
                  } else
                    for (r = t._last; r && r._start >= n;) {
                      if ("isPause" === r.data && r._start < e) return r;
                      r = r._prev
                    }
              }(this, vt(g), vt(r)), f && (b -= r - (r = f._start))), this._tTime = b, this._time = r, this._act = !d, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && r && !e && !a && (pe(this, "onStart"), this._tTime !== b)) return this;
            if (r >= g && t >= 0)
              for (i = this._first; i;) {
                if (o = i._next, (i._act || r >= i._start) && i._ts && f !== i) {
                  if (i.parent !== this) return this.render(t, e, n);
                  if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                    f = 0, o && (b += this._zTime = -1e-8);
                    break
                  }
                }
                i = o
              } else {
                i = this._last;
                for (var E = t < 0 ? t : r; i;) {
                  if (o = i._prev, (i._act || E <= i._end) && i._ts && f !== i) {
                    if (i.parent !== this) return this.render(t, e, n);
                    if (i.render(i._ts > 0 ? (E - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (E - i._start) * i._ts, e, n || s && (i._initted || i._startAt)), r !== this._time || !this._ts && !l) {
                      f = 0, o && (b += this._zTime = E ? -1e-8 : O);
                      break
                    }
                  }
                  i = o
                }
              }
            if (f && !e && (this.pause(), f.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = h, jt(this), this.render(t, e, n);
            this._onUpdate && !e && pe(this, "onUpdate", !0), (b === v && this._tTime >= this.totalDuration() || !b && g) && (h !== this._start && Math.abs(d) === Math.abs(this._ts) || this._lock || ((t || !y) && (b === v && this._ts > 0 || !b && this._ts < 0) && Rt(this, 1), e || t < 0 && !g || !b && !g && v || (pe(this, b === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(b < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, n.add = function(t, e) {
          var n = this;
          if (F(e) || (e = Kt(this, e, t)), !(t instanceof We)) {
            if (W(t)) return t.forEach(function(t) {
              return n.add(t, e)
            }), this;
            if (R(t)) return this.addLabel(t, e);
            if (!P(t)) return this;
            t = Je.delayedCall(0, t)
          }
          return this !== t ? Ut(this, t, e) : this
        }, n.getChildren = function(t, e, n, r) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -E);
          for (var i = [], o = this._first; o;) o._start >= r && (o instanceof Je ? e && i.push(o) : (n && i.push(o), t && i.push.apply(i, o.getChildren(!0, e, n)))), o = o._next;
          return i
        }, n.getById = function(t) {
          for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
            if (e[n].vars.id === t) return e[n]
        }, n.remove = function(t) {
          return R(t) ? this.removeLabel(t) : P(t) ? this.killTweensOf(t) : (kt(this, t), t === this._recent && (this._recent = this._last), Pt(this))
        }, n.totalTime = function(e, n) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = vt(Me.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(t, e) {
          return this.labels[t] = Kt(this, e), this
        }, n.removeLabel = function(t) {
          return delete this.labels[t], this
        }, n.addPause = function(t, e, n) {
          var r = Je.delayedCall(0, e || et, n);
          return r.data = "isPause", this._hasPause = 1, Ut(this, r, Kt(this, t))
        }, n.removePause = function(t) {
          var e = this._first;
          for (t = Kt(this, t); e;) e._start === t && "isPause" === e.data && Rt(e), e = e._next
        }, n.killTweensOf = function(t, e, n) {
          for (var r = this.getTweensOf(t, n), i = r.length; i--;) Ve !== r[i] && r[i].kill(t, e);
          return this
        }, n.getTweensOf = function(t, e) {
          for (var n, r = [], i = re(t), o = this._first, s = F(e); o;) o instanceof Je ? bt(o._targets, i) && (s ? (!Ve || o._initted && o._ts) && o.globalTime(0) <= e && o.globalTime(o.totalDuration()) > e : !e || o.isActive()) && r.push(o) : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n), o = o._next;
          return r
        }, n.tweenTo = function(t, e) {
          e = e || {};
          var n, r = this,
            i = Kt(r, t),
            o = e,
            s = o.startAt,
            a = o.onStart,
            u = o.onStartParams,
            c = o.immediateRender,
            l = Je.to(r, Ot({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: i,
              overwrite: "auto",
              duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || O,
              onStart: function() {
                if (r.pause(), !n) {
                  var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                  l._dur !== t && Xt(l, t, 0, 1).render(l._time, !0, !0), n = 1
                }
                a && a.apply(l, u || [])
              }
            }, e));
          return c ? l.render(0) : l
        }, n.tweenFromTo = function(t, e, n) {
          return this.tweenTo(e, Ot({
            startAt: {
              time: Kt(this, t)
            }
          }, n))
        }, n.recent = function() {
          return this._recent
        }, n.nextLabel = function(t) {
          return void 0 === t && (t = this._time), he(this, Kt(this, t))
        }, n.previousLabel = function(t) {
          return void 0 === t && (t = this._time), he(this, Kt(this, t), 1)
        }, n.currentLabel = function(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + O)
        }, n.shiftChildren = function(t, e, n) {
          void 0 === n && (n = 0);
          for (var r, i = this._first, o = this.labels; i;) i._start >= n && (i._start += t, i._end += t), i = i._next;
          if (e)
            for (r in o) o[r] >= n && (o[r] += t);
          return Pt(this)
        }, n.invalidate = function(e) {
          var n = this._first;
          for (this._lock = 0; n;) n.invalidate(e), n = n._next;
          return t.prototype.invalidate.call(this, e)
        }, n.clear = function(t) {
          void 0 === t && (t = !0);
          for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Pt(this)
        }, n.totalDuration = function(t) {
          var e, n, r, i = 0,
            o = this,
            s = o._last,
            a = E;
          if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -t : t));
          if (o._dirty) {
            for (r = o.parent; s;) e = s._prev, s._dirty && s.totalDuration(), (n = s._start) > a && o._sort && s._ts && !o._lock ? (o._lock = 1, Ut(o, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (i -= n, (!r && !o._dp || r && r.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -1 / 0), a = 0), s._end > i && s._ts && (i = s._end), s = e;
            Xt(o, o === u && o._time > i ? o._time : i, 1, 1), o._dirty = 0
          }
          return o._tDur
        }, e.updateRoot = function(t) {
          if (u._ts && (xt(u, zt(t, u)), h = Me.frame), Me.frame >= lt) {
            lt += x.autoSleep || 120;
            var e = u._first;
            if ((!e || !e._ts) && x.autoSleep && Me._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Me.sleep()
            }
          }
        }, e
      }(We);
      Ot(Ue.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Ve, qe, $e = function(t, e, n, r, i, o, s) {
          var a, u, c, l, f, d, h, p, m = new pn(this._pt, t, e, 0, 1, un, null, i),
            _ = 0,
            g = 0;
          for (m.b = n, m.e = r, n += "", (h = ~(r += "").indexOf("random(")) && (r = fe(r)), o && (o(p = [n, r], t, e), n = p[0], r = p[1]), u = n.match($) || []; a = $.exec(r);) l = a[0], f = r.substring(_, a.index), c ? c = (c + 1) % 5 : "rgba(" === f.substr(-5) && (c = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, m._pt = {
            _next: m._pt,
            p: f || 1 === g ? f : ",",
            s: d,
            c: "=" === l.charAt(1) ? yt(d, l) - d : parseFloat(l) - d,
            m: c && c < 4 ? Math.round : 0
          }, _ = $.lastIndex);
          return m.c = _ < r.length ? r.substring(_, r.length) : "", m.fp = s, (Y.test(r) || h) && (m.e = 0), this._pt = m, m
        },
        Ye = function(t, e, n, r, i, o, s, a, u, c) {
          P(r) && (r = r(i || 0, t, o));
          var l, f = t[e],
            d = "get" !== n ? n : P(f) ? u ? t[e.indexOf("set") || !P(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : f,
            h = P(f) ? u ? nn : en : tn;
          if (R(r) && (~r.indexOf("random(") && (r = fe(r)), "=" === r.charAt(1) && ((l = yt(d, r) + (te(d) || 0)) || 0 === l) && (r = l)), !c || d !== r || qe) return isNaN(d * r) || "" === r ? (!f && !(e in t) && Z(e, r), $e.call(this, t, e, d, r, h, a || x.stringFilter, u)) : (l = new pn(this._pt, t, e, +d || 0, r - (d || 0), "boolean" == typeof f ? an : sn, 0, h), u && (l.fp = u), s && l.modifier(s, this, t), this._pt = l)
        },
        Xe = function(t, e, n, r, i, o) {
          var s, a, u, c;
          if (ut[t] && !1 !== (s = new ut[t]).init(i, s.rawVars ? e[t] : function(t, e, n, r, i) {
              if (P(t) && (t = Ke(t, i, e, n, r)), !I(t) || t.style && t.nodeType || W(t) || B(t)) return R(t) ? Ke(t, i, e, n, r) : t;
              var o, s = {};
              for (o in t) s[o] = Ke(t[o], i, e, n, r);
              return s
            }(e[t], r, i, o, n), n, r, o) && (n._pt = a = new pn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority), n !== p))
            for (u = n._ptLookup[n._targets.indexOf(i)], c = s._props.length; c--;) u[s._props[c]] = a;
          return s
        },
        Ge = function t(e, n, r) {
          var i, a, c, l, f, d, h, p, m, _, g, v, y, b = e.vars,
            w = b.ease,
            x = b.startAt,
            D = b.immediateRender,
            M = b.lazy,
            C = b.onUpdate,
            A = b.runBackwards,
            S = b.yoyoEase,
            k = b.keyframes,
            R = b.autoRevert,
            P = e._dur,
            F = e._startAt,
            N = e._targets,
            I = e.parent,
            z = I && "nested" === I.data ? I.vars.targets : N,
            j = "auto" === e._overwrite && !o,
            B = e.timeline;
          if (B && (!k || !w) && (w = "none"), e._ease = Ne(w, T.ease), e._yEase = S ? Pe(Ne(!0 === S ? w : S, T.ease)) : 0, S && e._yoyo && !e._repeat && (S = e._yEase, e._yEase = e._ease, e._ease = S), e._from = !B && !!b.runBackwards, !B || k && !b.stagger) {
            if (v = (p = N[0] ? pt(N[0]).harness : 0) && b[p.prop], i = Ct(b, ot), F && (F._zTime < 0 && F.progress(1), n < 0 && A && D && !R ? F.render(-1, !0) : F.revert(A && P ? rt : nt), F._lazy = 0), x) {
              if (Rt(e._startAt = Je.set(N, Ot({
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: !F && L(M),
                  startAt: null,
                  delay: 0,
                  onUpdate: C && function() {
                    return pe(e, "onUpdate")
                  },
                  stagger: 0
                }, x))), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (s || !D && !R) && e._startAt.revert(rt), D && P && n <= 0 && r <= 0) return void(n && (e._zTime = n))
            } else if (A && P && !F)
              if (n && (D = !1), c = Ot({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: D && !F && L(M),
                  immediateRender: D,
                  stagger: 0,
                  parent: I
                }, i), v && (c[p.prop] = v), Rt(e._startAt = Je.set(N, c)), e._startAt._dp = 0, e._startAt._sat = e, n < 0 && (s ? e._startAt.revert(rt) : e._startAt.render(-1, !0)), e._zTime = n, D) {
                if (!n) return
              } else t(e._startAt, O, O);
            for (e._pt = e._ptCache = 0, M = P && L(M) || M && !P, a = 0; a < N.length; a++) {
              if (h = (f = N[a])._gsap || ht(N)[a]._gsap, e._ptLookup[a] = _ = {}, at[h.id] && st.length && wt(), g = z === N ? a : z.indexOf(f), p && !1 !== (m = new p).init(f, v || i, e, g, z) && (e._pt = l = new pn(e._pt, f, m.name, 0, 1, m.render, m, 0, m.priority), m._props.forEach(function(t) {
                  _[t] = l
                }), m.priority && (d = 1)), !p || v)
                for (c in i) ut[c] && (m = Xe(c, i, e, g, f, z)) ? m.priority && (d = 1) : _[c] = l = Ye.call(e, f, c, "get", i[c], g, z, 0, b.stringFilter);
              e._op && e._op[a] && e.kill(f, e._op[a]), j && e._pt && (Ve = e, u.killTweensOf(f, _, e.globalTime(n)), y = !e.parent, Ve = 0), e._pt && M && (at[h.id] = 1)
            }
            d && hn(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = C, e._initted = (!e._op || e._pt) && !y, k && n <= 0 && B.render(E, !0, !0)
        },
        He = function(t, e, n, r) {
          var i, o, s = e.ease || r || "power1.inOut";
          if (W(e)) o = n[t] || (n[t] = []), e.forEach(function(t, n) {
            return o.push({
              t: n / (e.length - 1) * 100,
              v: t,
              e: s
            })
          });
          else
            for (i in e) o = n[i] || (n[i] = []), "ease" === i || o.push({
              t: parseFloat(t),
              v: e[i],
              e: s
            })
        },
        Ke = function(t, e, n, r, i) {
          return P(t) ? t.call(e, n, r, i) : R(t) && ~t.indexOf("random(") ? fe(t) : t
        },
        Qe = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ze = {};
      _t(Qe + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ze[t] = 1
      });
      var Je = function(t) {
        function e(e, n, i, s) {
          var a;
          "number" == typeof n && (i.duration = n, n = i, i = null);
          var c, l, f, d, h, p, m, _, g = (a = t.call(this, s ? n : At(n)) || this).vars,
            v = g.duration,
            y = g.delay,
            b = g.immediateRender,
            w = g.stagger,
            T = g.overwrite,
            E = g.keyframes,
            O = g.defaults,
            D = g.scrollTrigger,
            M = g.yoyoEase,
            C = n.parent || u,
            A = (W(e) || B(e) ? F(e[0]) : "length" in n) ? [e] : re(e);
          if (a._targets = A.length ? ht(A) : J("GSAP target " + e + " not found. https://gsap.com", !x.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = T, E || w || j(v) || j(y)) {
            if (n = a.vars, (c = a.timeline = new Ue({
                data: "nested",
                defaults: O || {},
                targets: C && "nested" === C.data ? C.vars.targets : A
              })).kill(), c.parent = c._dp = r(a), c._start = 0, w || j(v) || j(y)) {
              if (d = A.length, m = w && se(w), I(w))
                for (h in w) ~Qe.indexOf(h) && (_ || (_ = {}), _[h] = w[h]);
              for (l = 0; l < d; l++)(f = Ct(n, Ze)).stagger = 0, M && (f.yoyoEase = M), _ && Dt(f, _), p = A[l], f.duration = +Ke(v, r(a), l, p, A), f.delay = (+Ke(y, r(a), l, p, A) || 0) - a._delay, !w && 1 === d && f.delay && (a._delay = y = f.delay, a._start += y, f.delay = 0), c.to(p, f, m ? m(l, p, A) : 0), c._ease = Ae.none;
              c.duration() ? v = y = 0 : a.timeline = 0
            } else if (E) {
              At(Ot(c.vars.defaults, {
                ease: "none"
              })), c._ease = Ne(E.ease || n.ease || "none");
              var S, k, R, P = 0;
              if (W(E)) E.forEach(function(t) {
                return c.to(A, t, ">")
              }), c.duration();
              else {
                for (h in f = {}, E) "ease" === h || "easeEach" === h || He(h, E[h], f, E.easeEach);
                for (h in f)
                  for (S = f[h].sort(function(t, e) {
                      return t.t - e.t
                    }), P = 0, l = 0; l < S.length; l++)(R = {
                    ease: (k = S[l]).e,
                    duration: (k.t - (l ? S[l - 1].t : 0)) / 100 * v
                  })[h] = k.v, c.to(A, R, P), P += R.duration;
                c.duration() < v && c.to({}, {
                  duration: v - c.duration()
                })
              }
            }
            v || a.duration(v = c.duration())
          } else a.timeline = 0;
          return !0 !== T || o || (Ve = r(a), u.killTweensOf(A), Ve = 0), Ut(C, r(a), i), n.reversed && a.reverse(), n.paused && a.paused(!0), (b || !v && !E && a._start === vt(C._time) && L(b) && Nt(r(a)) && "nested" !== C.data) && (a._tTime = -1e-8, a.render(Math.max(0, -y) || 0)), D && Vt(r(a), D), a
        }
        i(e, t);
        var n = e.prototype;
        return n.render = function(t, e, n) {
          var r, i, o, a, u, c, l, f, d, h = this._time,
            p = this._tDur,
            m = this._dur,
            _ = t < 0,
            g = t > p - O && !_ ? p : t < O ? 0 : t;
          if (m) {
            if (g !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
              if (r = g, f = this.timeline, this._repeat) {
                if (a = m + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * a + t, e, n);
                if (r = vt(g % a), g === p ? (o = this._repeat, r = m) : ((o = ~~(g / a)) && o === vt(g / a) && (r = m, o--), r > m && (r = m)), (c = this._yoyo && 1 & o) && (d = this._yEase, r = m - r), u = Lt(this._tTime, a), r === h && !n && this._initted && o === u) return this._tTime = g, this;
                o !== u && (f && this._yEase && Fe(f, c), this.vars.repeatRefresh && !c && !this._lock && this._time !== a && this._initted && (this._lock = n = 1, this.render(vt(a * o), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (qt(this, _ ? t : r, n, e, g)) return this._tTime = 0, this;
                if (!(h === this._time || n && this.vars.repeatRefresh && o !== u)) return this;
                if (m !== this._dur) return this.render(t, e, n)
              }
              if (this._tTime = g, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (d || this._ease)(r / m), this._from && (this.ratio = l = 1 - l), r && !h && !e && !o && (pe(this, "onStart"), this._tTime !== g)) return this;
              for (i = this._pt; i;) i.r(l, i.d), i = i._next;
              f && f.render(t < 0 ? t : f._dur * f._ease(r / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ft(this, t, 0, n), pe(this, "onUpdate")), this._repeat && o !== u && this.vars.onRepeat && !e && this.parent && pe(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (_ && !this._onUpdate && Ft(this, t, 0, !0), (t || !m) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Rt(this, 1), e || _ && !h || !(g || h || c) || (pe(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(t, e, n, r) {
            var i, o, a, u = t.ratio,
              c = e < 0 || !e && (!t._start && $t(t) && (t._initted || !Yt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Yt(t)) ? 0 : 1,
              l = t._rDelay,
              f = 0;
            if (l && t._repeat && (f = Jt(0, t._tDur, e), o = Lt(f, l), t._yoyo && 1 & o && (c = 1 - c), o !== Lt(t._tTime, l) && (u = 1 - c, t.vars.repeatRefresh && t._initted && t.invalidate())), c !== u || s || r || t._zTime === O || !e && t._zTime) {
              if (!t._initted && qt(t, e, r, n, f)) return;
              for (a = t._zTime, t._zTime = e || (n ? O : 0), n || (n = e && !a), t.ratio = c, t._from && (c = 1 - c), t._time = 0, t._tTime = f, i = t._pt; i;) i.r(c, i.d), i = i._next;
              e < 0 && Ft(t, e, 0, !0), t._onUpdate && !n && pe(t, "onUpdate"), f && t._repeat && !n && t.parent && pe(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === c && (c && Rt(t, 1), n || s || (pe(t, c ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          }(this, t, e, n);
          return this
        }, n.targets = function() {
          return this._targets
        }, n.invalidate = function(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, n.resetTo = function(t, e, n, r, i) {
          m || Me.wake(), this._ts || this.play();
          var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ge(this, o),
            function(t, e, n, r, i, o, s, a) {
              var u, c, l, f, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
              if (!d)
                for (d = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length; f--;) {
                  if ((u = l[f][e]) && u.d && u.d._pt)
                    for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                  if (!u) return qe = 1, t.vars[e] = "+=0", Ge(t, s), qe = 0, a ? J(e + " not eligible for reset") : 1;
                  d.push(u)
                }
              for (f = d.length; f--;)(u = (c = d[f])._pt || c).s = !r && 0 !== r || i ? u.s + (r || 0) + o * u.c : r, u.c = n - u.s, c.e && (c.e = gt(n) + te(c.e)), c.b && (c.b = u.s + te(c.b))
            }(this, t, e, n, r, this._ease(o / this._dur), o, i) ? this.resetTo(t, e, n, r, 1) : (Bt(this, 0), this.parent || St(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? me(this) : this;
          if (this.timeline) {
            var n = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Ve && !0 !== Ve.vars.overwrite)._first || me(this), this.parent && n !== this.timeline.totalDuration() && Xt(this, this._dur * this.timeline._tDur / n, 0, 1), this
          }
          var r, i, o, s, a, u, c, l = this._targets,
            f = t ? re(t) : l,
            d = this._ptLookup,
            h = this._pt;
          if ((!e || "all" === e) && function(t, e) {
              for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
              return n < 0
            }(l, f)) return "all" === e && (this._pt = 0), me(this);
          for (r = this._op = this._op || [], "all" !== e && (R(e) && (a = {}, _t(e, function(t) {
              return a[t] = 1
            }), e = a), e = function(t, e) {
              var n, r, i, o, s = t[0] ? pt(t[0]).harness : 0,
                a = s && s.aliases;
              if (!a) return e;
              for (r in n = Dt({}, e), a)
                if (r in n)
                  for (i = (o = a[r].split(",")).length; i--;) n[o[i]] = n[r];
              return n
            }(l, e)), c = l.length; c--;)
            if (~f.indexOf(l[c]))
              for (a in i = d[c], "all" === e ? (r[c] = e, s = i, o = {}) : (o = r[c] = r[c] || {}, s = e), s)(u = i && i[a]) && ("kill" in u.d && !0 !== u.d.kill(a) || kt(this, u, "_pt"), delete i[a]), "all" !== o && (o[a] = 1);
          return this._initted && !this._pt && h && me(this), this
        }, e.to = function(t, n) {
          return new e(t, n, arguments[2])
        }, e.from = function(t, e) {
          return Qt(1, arguments)
        }, e.delayedCall = function(t, n, r, i) {
          return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i
          })
        }, e.fromTo = function(t, e, n) {
          return Qt(2, arguments)
        }, e.set = function(t, n) {
          return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
        }, e.killTweensOf = function(t, e, n) {
          return u.killTweensOf(t, e, n)
        }, e
      }(We);
      Ot(Je.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), _t("staggerTo,staggerFrom,staggerFromTo", function(t) {
        Je[t] = function() {
          var e = new Ue,
            n = ee.call(arguments, 0);
          return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
      });
      var tn = function(t, e, n) {
          return t[e] = n
        },
        en = function(t, e, n) {
          return t[e](n)
        },
        nn = function(t, e, n, r) {
          return t[e](r.fp, n)
        },
        rn = function(t, e, n) {
          return t.setAttribute(e, n)
        },
        on = function(t, e) {
          return P(t[e]) ? en : N(t[e]) && t.setAttribute ? rn : tn
        },
        sn = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        an = function(t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        un = function(t, e) {
          var n = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
            r += e.c
          }
          e.set(e.t, e.p, r, e)
        },
        cn = function(t, e) {
          for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        ln = function(t, e, n, r) {
          for (var i, o = this._pt; o;) i = o._next, o.p === r && o.modifier(t, e, n), o = i
        },
        fn = function(t) {
          for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? kt(this, r, "_pt") : r.dep || (e = 1), r = n;
          return !e
        },
        dn = function(t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        },
        hn = function(t) {
          for (var e, n, r, i, o = t._pt; o;) {
            for (e = o._next, n = r; n && n.pr > o.pr;) n = n._next;
            (o._prev = n ? n._prev : i) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : i = o, o = e
          }
          t._pt = r
        },
        pn = function() {
          function t(t, e, n, r, i, o, s, a, u) {
            this.t = e, this.s = r, this.c = i, this.p = n, this.r = o || sn, this.d = s || this, this.set = a || tn, this.pr = u || 0, this._next = t, t && (t._prev = this)
          }
          return t.prototype.modifier = function(t, e, n) {
            this.mSet = this.mSet || this.set, this.set = dn, this.m = t, this.mt = n, this.tween = e
          }, t
        }();
      _t(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ot[t] = 1
      }), H.TweenMax = H.TweenLite = Je, H.TimelineLite = H.TimelineMax = Ue, u = new Ue({
        sortChildren: !1,
        defaults: T,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), x.stringFilter = De;
      var mn = [],
        _n = {},
        gn = [],
        vn = 0,
        yn = 0,
        bn = function(t) {
          return (_n[t] || gn).map(function(t) {
            return t()
          })
        },
        wn = function() {
          var t = Date.now(),
            e = [];
          t - vn > 2 && (bn("matchMediaInit"), mn.forEach(function(t) {
            var n, r, i, o, s = t.queries,
              a = t.conditions;
            for (r in s)(n = c.matchMedia(s[r]).matches) && (i = 1), n !== a[r] && (a[r] = n, o = 1);
            o && (t.revert(), i && e.push(t))
          }), bn("matchMediaRevert"), e.forEach(function(t) {
            return t.onMatch(t, function(e) {
              return t.add(null, e)
            })
          }), vn = t, bn("matchMedia"))
        },
        xn = function() {
          function t(t, e) {
            this.selector = e && ie(e), this.data = [], this._r = [], this.isReverted = !1, this.id = yn++, t && this.add(t)
          }
          var e = t.prototype;
          return e.add = function(t, e, n) {
            P(t) && (n = e, e = t, t = P);
            var r = this,
              i = function() {
                var t, i = a,
                  o = r.selector;
                return i && i !== r && i.data.push(r), n && (r.selector = ie(n)), a = r, t = e.apply(r, arguments), P(t) && r._r.push(t), a = i, r.selector = o, r.isReverted = !1, t
              };
            return r.last = i, t === P ? i(r, function(t) {
              return r.add(null, t)
            }) : t ? r[t] = i : i
          }, e.ignore = function(t) {
            var e = a;
            a = null, t(this), a = e
          }, e.getTweens = function() {
            var e = [];
            return this.data.forEach(function(n) {
              return n instanceof t ? e.push.apply(e, n.getTweens()) : n instanceof Je && !(n.parent && "nested" === n.parent.data) && e.push(n)
            }), e
          }, e.clear = function() {
            this._r.length = this.data.length = 0
          }, e.kill = function(t, e) {
            var n = this;
            if (t ? function() {
                for (var e, r = n.getTweens(), i = n.data.length; i--;) "isFlip" === (e = n.data[i]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach(function(t) {
                  return r.splice(r.indexOf(t), 1)
                }));
                for (r.map(function(t) {
                    return {
                      g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                      t
                    }
                  }).sort(function(t, e) {
                    return e.g - t.g || -1 / 0
                  }).forEach(function(e) {
                    return e.t.revert(t)
                  }), i = n.data.length; i--;)(e = n.data[i]) instanceof Ue ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof Je) && e.revert && e.revert(t);
                n._r.forEach(function(e) {
                  return e(t, n)
                }), n.isReverted = !0
              }() : this.data.forEach(function(t) {
                return t.kill && t.kill()
              }), this.clear(), e)
              for (var r = mn.length; r--;) mn[r].id === this.id && mn.splice(r, 1)
          }, e.revert = function(t) {
            this.kill(t || {})
          }, t
        }(),
        Tn = function() {
          function t(t) {
            this.contexts = [], this.scope = t, a && a.data.push(this)
          }
          var e = t.prototype;
          return e.add = function(t, e, n) {
            I(t) || (t = {
              matches: t
            });
            var r, i, o, s = new xn(0, n || this.scope),
              u = s.conditions = {};
            for (i in a && !s.selector && (s.selector = a.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t, t) "all" === i ? o = 1 : (r = c.matchMedia(t[i])) && (mn.indexOf(s) < 0 && mn.push(s), (u[i] = r.matches) && (o = 1), r.addListener ? r.addListener(wn) : r.addEventListener("change", wn));
            return o && e(s, function(t) {
              return s.add(null, t)
            }), this
          }, e.revert = function(t) {
            this.kill(t || {})
          }, e.kill = function(t) {
            this.contexts.forEach(function(e) {
              return e.kill(t, !0)
            })
          }, t
        }(),
        En = {
          registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach(function(t) {
              return ge(t)
            })
          },
          timeline: function(t) {
            return new Ue(t)
          },
          getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
          },
          getProperty: function(t, e, n, r) {
            R(t) && (t = re(t)[0]);
            var i = pt(t || {}).get,
              o = n ? Et : Tt;
            return "native" === n && (n = ""), t ? e ? o((ut[e] && ut[e].get || i)(t, e, n, r)) : function(e, n, r) {
              return o((ut[e] && ut[e].get || i)(t, e, n, r))
            } : t
          },
          quickSetter: function(t, e, n) {
            if ((t = re(t)).length > 1) {
              var r = t.map(function(t) {
                  return Mn.quickSetter(t, e, n)
                }),
                i = r.length;
              return function(t) {
                for (var e = i; e--;) r[e](t)
              }
            }
            t = t[0] || {};
            var o = ut[e],
              s = pt(t),
              a = s.harness && (s.harness.aliases || {})[e] || e,
              u = o ? function(e) {
                var r = new o;
                p._pt = 0, r.init(t, n ? e + n : e, p, 0, [t]), r.render(1, r), p._pt && cn(1, p)
              } : s.set(t, a);
            return o ? u : function(e) {
              return u(t, a, n ? e + n : e, s, 1)
            }
          },
          quickTo: function(t, e, n) {
            var r, i = Mn.to(t, Dt(((r = {})[e] = "+=0.1", r.paused = !0, r), n || {})),
              o = function(t, n, r) {
                return i.resetTo(e, t, n, r)
              };
            return o.tween = i, o
          },
          isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
          },
          defaults: function(t) {
            return t && t.ease && (t.ease = Ne(t.ease, T.ease)), Mt(T, t || {})
          },
          config: function(t) {
            return Mt(x, t || {})
          },
          registerEffect: function(t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              i = t.defaults,
              o = t.extendTimeline;
            (r || "").split(",").forEach(function(t) {
              return t && !ut[t] && !H[t] && J(e + " effect requires " + t + " plugin.")
            }), ct[e] = function(t, e, r) {
              return n(re(t), Ot(e || {}, i), r)
            }, o && (Ue.prototype[e] = function(t, n, r) {
              return this.add(ct[e](t, I(n) ? n : (r = n) && {}, this), r)
            })
          },
          registerEase: function(t, e) {
            Ae[t] = Ne(e)
          },
          parseEase: function(t, e) {
            return arguments.length ? Ne(t, e) : Ae
          },
          getById: function(t) {
            return u.getById(t)
          },
          exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var n, r, i = new Ue(t);
            for (i.smoothChildTiming = L(t.smoothChildTiming), u.remove(i), i._dp = 0, i._time = i._tTime = u._time, n = u._first; n;) r = n._next, !e && !n._dur && n instanceof Je && n.vars.onComplete === n._targets[0] || Ut(i, n, n._start - n._delay), n = r;
            return Ut(u, i, 0), i
          },
          context: function(t, e) {
            return t ? new xn(t, e) : a
          },
          matchMedia: function(t) {
            return new Tn(t)
          },
          matchMediaRefresh: function() {
            return mn.forEach(function(t) {
              var e, n, r = t.conditions;
              for (n in r) r[n] && (r[n] = !1, e = 1);
              e && t.revert()
            }) || wn()
          },
          addEventListener: function(t, e) {
            var n = _n[t] || (_n[t] = []);
            ~n.indexOf(e) || n.push(e)
          },
          removeEventListener: function(t, e) {
            var n = _n[t],
              r = n && n.indexOf(e);
            r >= 0 && n.splice(r, 1)
          },
          utils: {
            wrap: function t(e, n, r) {
              var i = n - e;
              return W(e) ? le(e, t(0, e.length), n) : Zt(r, function(t) {
                return (i + (t - e) % i) % i + e
              })
            },
            wrapYoyo: function t(e, n, r) {
              var i = n - e,
                o = 2 * i;
              return W(e) ? le(e, t(0, e.length - 1), n) : Zt(r, function(t) {
                return e + ((t = (o + (t - e) % o) % o || 0) > i ? o - t : t)
              })
            },
            distribute: se,
            random: ce,
            snap: ue,
            normalize: function(t, e, n) {
              return de(t, e, 0, 1, n)
            },
            getUnit: te,
            clamp: function(t, e, n) {
              return Zt(n, function(n) {
                return Jt(t, e, n)
              })
            },
            splitColor: we,
            toArray: re,
            selector: ie,
            mapRange: de,
            pipe: function() {
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
              return function(t) {
                return e.reduce(function(t, e) {
                  return e(t)
                }, t)
              }
            },
            unitize: function(t, e) {
              return function(n) {
                return t(parseFloat(n)) + (e || te(n))
              }
            },
            interpolate: function t(e, n, r, i) {
              var o = isNaN(e + n) ? 0 : function(t) {
                return (1 - t) * e + t * n
              };
              if (!o) {
                var s, a, u, c, l, f = R(e),
                  d = {};
                if (!0 === r && (i = 1) && (r = null), f) e = {
                  p: e
                }, n = {
                  p: n
                };
                else if (W(e) && !W(n)) {
                  for (u = [], c = e.length, l = c - 2, a = 1; a < c; a++) u.push(t(e[a - 1], e[a]));
                  c--, o = function(t) {
                    t *= c;
                    var e = Math.min(l, ~~t);
                    return u[e](t - e)
                  }, r = n
                } else i || (e = Dt(W(e) ? [] : {}, e));
                if (!u) {
                  for (s in n) Ye.call(d, e, s, "get", n[s]);
                  o = function(t) {
                    return cn(t, d) || (f ? e.p : e)
                  }
                }
              }
              return Zt(r, o)
            },
            shuffle: oe
          },
          install: Q,
          effects: ct,
          ticker: Me,
          updateRoot: Ue.updateRoot,
          plugins: ut,
          globalTimeline: u,
          core: {
            PropTween: pn,
            globals: tt,
            Tween: Je,
            Timeline: Ue,
            Animation: We,
            getCache: pt,
            _removeLinkedListItem: kt,
            reverting: function() {
              return s
            },
            context: function(t) {
              return t && a && (a.data.push(t), t._ctx = a), a
            },
            suppressOverwrites: function(t) {
              return o = t
            }
          }
        };
      _t("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return En[t] = Je[t]
      }), Me.add(Ue.updateRoot), p = En.to({}, {
        duration: 0
      });
      var On = function(t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
          return n
        },
        Dn = function(t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function(t, n, r) {
              r._onInit = function(t) {
                var r, i;
                if (R(n) && (r = {}, _t(n, function(t) {
                    return r[t] = 1
                  }), n = r), e) {
                  for (i in r = {}, n) r[i] = e(n[i]);
                  n = r
                }! function(t, e) {
                  var n, r, i, o = t._targets;
                  for (n in e)
                    for (r = o.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = On(i, n)), i && i.modifier && i.modifier(e[n], t, o[r], n))
                }(t, n)
              }
            }
          }
        },
        Mn = En.registerPlugin({
          name: "attr",
          init: function(t, e, n, r, i) {
            var o, s, a;
            for (o in this.tween = n, e) a = t.getAttribute(o) || "", (s = this.add(t, "setAttribute", (a || 0) + "", e[o], r, i, 0, 0, o)).op = o, s.b = a, this._props.push(o)
          },
          render: function(t, e) {
            for (var n = e._pt; n;) s ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), n = n._next
          }
        }, {
          name: "endArray",
          init: function(t, e) {
            for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
          }
        }, Dn("roundProps", ae), Dn("modifiers"), Dn("snap", ue)) || En;
      Je.version = Ue.version = Mn.version = "3.12.5", d = 1, z() && Ce(), Ae.Power0, Ae.Power1, Ae.Power2, Ae.Power3, Ae.Power4, Ae.Linear, Ae.Quad, Ae.Cubic, Ae.Quart, Ae.Quint, Ae.Strong, Ae.Elastic, Ae.Back, Ae.SteppedEase, Ae.Bounce, Ae.Sine, Ae.Expo, Ae.Circ;
      var Cn, An, Sn, kn, Rn, Pn, Fn, Nn, In = {},
        Ln = 180 / Math.PI,
        zn = Math.PI / 180,
        jn = Math.atan2,
        Bn = /([A-Z])/g,
        Wn = /(left|right|width|margin|padding|x)/i,
        Un = /[\s,\(]\S/,
        Vn = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        qn = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        $n = function(t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Yn = function(t, e) {
          return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Xn = function(t, e) {
          var n = e.s + e.c * t;
          e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        Gn = function(t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Hn = function(t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Kn = function(t, e, n) {
          return t.style[e] = n
        },
        Qn = function(t, e, n) {
          return t.style.setProperty(e, n)
        },
        Zn = function(t, e, n) {
          return t._gsap[e] = n
        },
        Jn = function(t, e, n) {
          return t._gsap.scaleX = t._gsap.scaleY = n
        },
        tr = function(t, e, n, r, i) {
          var o = t._gsap;
          o.scaleX = o.scaleY = n, o.renderTransform(i, o)
        },
        er = function(t, e, n, r, i) {
          var o = t._gsap;
          o[e] = n, o.renderTransform(i, o)
        },
        nr = "transform",
        rr = nr + "Origin",
        ir = function t(e, n) {
          var r = this,
            i = this.target,
            o = i.style,
            s = i._gsap;
          if (e in In && o) {
            if (this.tfm = this.tfm || {}, "transform" === e) return Vn.transform.split(",").forEach(function(e) {
              return t.call(r, e, n)
            });
            if (~(e = Vn[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                return r.tfm[t] = xr(i, t)
              }) : this.tfm[e] = s.x ? s[e] : xr(i, e), e === rr && (this.tfm.zOrigin = s.zOrigin), this.props.indexOf(nr) >= 0) return;
            s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(rr, n, "")), e = nr
          }(o || n) && this.props.push(e, n, o[e])
        },
        or = function(t) {
          t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        sr = function() {
          var t, e, n = this.props,
            r = this.target,
            i = r.style,
            o = r._gsap;
          for (t = 0; t < n.length; t += 3) n[t + 1] ? r[n[t]] = n[t + 2] : n[t + 2] ? i[n[t]] = n[t + 2] : i.removeProperty("--" === n[t].substr(0, 2) ? n[t] : n[t].replace(Bn, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) o[e] = this.tfm[e];
            o.svg && (o.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), (t = Fn()) && t.isStart || i[nr] || (or(i), o.zOrigin && i[rr] && (i[rr] += " " + o.zOrigin + "px", o.zOrigin = 0, o.renderTransform()), o.uncache = 1)
          }
        },
        ar = function(t, e) {
          var n = {
            target: t,
            props: [],
            revert: sr,
            save: ir
          };
          return t._gsap || Mn.core.getCache(t), e && e.split(",").forEach(function(t) {
            return n.save(t)
          }), n
        },
        ur = function(t, e) {
          var n = An.createElementNS ? An.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : An.createElement(t);
          return n && n.style ? n : An.createElement(t)
        },
        cr = function t(e, n, r) {
          var i = getComputedStyle(e);
          return i[n] || i.getPropertyValue(n.replace(Bn, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, fr(n) || n, 1) || ""
        },
        lr = "O,Moz,ms,Ms,Webkit".split(","),
        fr = function(t, e, n) {
          var r = (e || Rn).style,
            i = 5;
          if (t in r && !n) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(lr[i] + t in r););
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? lr[i] : "") + t
        },
        dr = function() {
          "undefined" != typeof window && window.document && (Cn = window, An = Cn.document, Sn = An.documentElement, Rn = ur("div") || {
            style: {}
          }, ur("div"), nr = fr(nr), rr = nr + "Origin", Rn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Nn = !!fr("perspective"), Fn = Mn.core.reverting, kn = 1)
        },
        hr = function t(e) {
          var n, r = ur("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            o = this.nextSibling,
            s = this.style.cssText;
          if (Sn.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
            n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
          } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
          return i && (o ? i.insertBefore(this, o) : i.appendChild(this)), Sn.removeChild(r), this.style.cssText = s, n
        },
        pr = function(t, e) {
          for (var n = e.length; n--;)
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        mr = function(t) {
          var e;
          try {
            e = t.getBBox()
          } catch (n) {
            e = hr.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === hr || (e = hr.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +pr(t, ["x", "cx", "x1"]) || 0,
            y: +pr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        _r = function(t) {
          return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !mr(t))
        },
        gr = function(t, e) {
          if (e) {
            var n, r = t.style;
            e in In && e !== rr && (e = nr), r.removeProperty ? ("ms" !== (n = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty("--" === n ? e : e.replace(Bn, "-$1").toLowerCase())) : r.removeAttribute(e)
          }
        },
        vr = function(t, e, n, r, i, o) {
          var s = new pn(t._pt, e, n, 0, 1, o ? Hn : Gn);
          return t._pt = s, s.b = r, s.e = i, t._props.push(n), s
        },
        yr = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        br = {
          grid: 1,
          flex: 1
        },
        wr = function t(e, n, r, i) {
          var o, s, a, u, c = parseFloat(r) || 0,
            l = (r + "").trim().substr((c + "").length) || "px",
            f = Rn.style,
            d = Wn.test(n),
            h = "svg" === e.tagName.toLowerCase(),
            p = (h ? "client" : "offset") + (d ? "Width" : "Height"),
            m = 100,
            _ = "px" === i,
            g = "%" === i;
          if (i === l || !c || yr[i] || yr[l]) return c;
          if ("px" !== l && !_ && (c = t(e, n, r, "px")), u = e.getCTM && _r(e), (g || "%" === l) && (In[n] || ~n.indexOf("adius"))) return o = u ? e.getBBox()[d ? "width" : "height"] : e[p], gt(g ? c / o * m : c / 100 * o);
          if (f[d ? "width" : "height"] = m + (_ ? l : i), s = ~n.indexOf("adius") || "em" === i && e.appendChild && !h ? e : e.parentNode, u && (s = (e.ownerSVGElement || {}).parentNode), s && s !== An && s.appendChild || (s = An.body), (a = s._gsap) && g && a.width && d && a.time === Me.time && !a.uncache) return gt(c / a.width * m);
          if (!g || "height" !== n && "width" !== n)(g || "%" === l) && !br[cr(s, "display")] && (f.position = cr(e, "position")), s === e && (f.position = "static"), s.appendChild(Rn), o = Rn[p], s.removeChild(Rn), f.position = "absolute";
          else {
            var v = e.style[n];
            e.style[n] = m + i, o = e[p], v ? e.style[n] = v : gr(e, n)
          }
          return d && g && ((a = pt(s)).time = Me.time, a.width = s[p]), gt(_ ? o * c / m : o && c ? m / o * c : 0)
        },
        xr = function(t, e, n, r) {
          var i;
          return kn || dr(), e in Vn && "transform" !== e && ~(e = Vn[e]).indexOf(",") && (e = e.split(",")[0]), In[e] && "transform" !== e ? (i = Fr(t, r), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : Nr(cr(t, rr)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = Mr[e] && Mr[e](t, e, n) || cr(t, e) || mt(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? wr(t, e, i, n) + n : i
        },
        Tr = function(t, e, n, r) {
          if (!n || "none" === n) {
            var i = fr(e, t, 1),
              o = i && cr(t, i, 1);
            o && o !== n ? (e = i, n = o) : "borderColor" === e && (n = cr(t, "borderTopColor"))
          }
          var s, a, u, c, l, f, d, h, p, m, _, g = new pn(this._pt, t.style, e, 0, 1, un),
            v = 0,
            y = 0;
          if (g.b = n, g.e = r, n += "", "auto" == (r += "") && (f = t.style[e], t.style[e] = r, r = cr(t, e) || r, f ? t.style[e] = f : gr(t, e)), De(s = [n, r]), r = s[1], u = (n = s[0]).match(q) || [], (r.match(q) || []).length) {
            for (; a = q.exec(r);) d = a[0], p = r.substring(v, a.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (c = parseFloat(f) || 0, _ = f.substr((c + "").length), "=" === d.charAt(1) && (d = yt(c, d) + _), h = parseFloat(d), m = d.substr((h + "").length), v = q.lastIndex - m.length, m || (m = m || x.units[e] || _, v === r.length && (r += m, g.e += m)), _ !== m && (c = wr(t, e, f, m) || 0), g._pt = {
              _next: g._pt,
              p: p || 1 === y ? p : ",",
              s: c,
              c: h - c,
              m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < r.length ? r.substring(v, r.length) : ""
          } else g.r = "display" === e && "none" === r ? Hn : Gn;
          return Y.test(r) && (g.e = 0), this._pt = g, g
        },
        Er = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Or = function(t) {
          var e = t.split(" "),
            n = e[0],
            r = e[1] || "50%";
          return "top" !== n && "bottom" !== n && "left" !== r && "right" !== r || (t = n, n = r, r = t), e[0] = Er[n] || n, e[1] = Er[r] || r, e.join(" ")
        },
        Dr = function(t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n, r, i, o = e.t,
              s = o.style,
              a = e.u,
              u = o._gsap;
            if ("all" === a || !0 === a) s.cssText = "", r = 1;
            else
              for (i = (a = a.split(",")).length; --i > -1;) n = a[i], In[n] && (r = 1, n = "transformOrigin" === n ? rr : nr), gr(o, n);
            r && (gr(o, nr), u && (u.svg && o.removeAttribute("transform"), Fr(o, 1), u.uncache = 1, or(s)))
          }
        },
        Mr = {
          clearProps: function(t, e, n, r, i) {
            if ("isFromStart" !== i.data) {
              var o = t._pt = new pn(t._pt, e, n, 0, 0, Dr);
              return o.u = r, o.pr = -10, o.tween = i, t._props.push(n), 1
            }
          }
        },
        Cr = [1, 0, 0, 1, 0, 0],
        Ar = {},
        Sr = function(t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        kr = function(t) {
          var e = cr(t, nr);
          return Sr(e) ? Cr : e.substr(7).match(V).map(gt)
        },
        Rr = function(t, e) {
          var n, r, i, o, s = t._gsap || pt(t),
            a = t.style,
            u = kr(t);
          return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? Cr : u : (u !== Cr || t.offsetParent || t === Sn || s.svg || (i = a.display, a.display = "block", (n = t.parentNode) && t.offsetParent || (o = 1, r = t.nextElementSibling, Sn.appendChild(t)), u = kr(t), i ? a.display = i : gr(t, "display"), o && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : Sn.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Pr = function(t, e, n, r, i, o) {
          var s, a, u, c = t._gsap,
            l = i || Rr(t, !0),
            f = c.xOrigin || 0,
            d = c.yOrigin || 0,
            h = c.xOffset || 0,
            p = c.yOffset || 0,
            m = l[0],
            _ = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            b = l[5],
            w = e.split(" "),
            x = parseFloat(w[0]) || 0,
            T = parseFloat(w[1]) || 0;
          n ? l !== Cr && (a = m * v - _ * g) && (u = x * (-_ / a) + T * (m / a) - (m * b - _ * y) / a, x = x * (v / a) + T * (-g / a) + (g * b - v * y) / a, T = u) : (x = (s = mr(t)).x + (~w[0].indexOf("%") ? x / 100 * s.width : x), T = s.y + (~(w[1] || w[0]).indexOf("%") ? T / 100 * s.height : T)), r || !1 !== r && c.smooth ? (y = x - f, b = T - d, c.xOffset = h + (y * m + b * g) - y, c.yOffset = p + (y * _ + b * v) - b) : c.xOffset = c.yOffset = 0, c.xOrigin = x, c.yOrigin = T, c.smooth = !!r, c.origin = e, c.originIsAbsolute = !!n, t.style[rr] = "0px 0px", o && (vr(o, c, "xOrigin", f, x), vr(o, c, "yOrigin", d, T), vr(o, c, "xOffset", h, c.xOffset), vr(o, c, "yOffset", p, c.yOffset)), t.setAttribute("data-svg-origin", x + " " + T)
        },
        Fr = function(t, e) {
          var n = t._gsap || new Be(t);
          if ("x" in n && !e && !n.uncache) return n;
          var r, i, o, s, a, u, c, l, f, d, h, p, m, _, g, v, y, b, w, T, E, O, D, M, C, A, S, k, R, P, F, N, I = t.style,
            L = n.scaleX < 0,
            z = "px",
            j = "deg",
            B = getComputedStyle(t),
            W = cr(t, rr) || "0";
          return r = i = o = u = c = l = f = d = h = 0, s = a = 1, n.svg = !(!t.getCTM || !_r(t)), B.translate && ("none" === B.translate && "none" === B.scale && "none" === B.rotate || (I[nr] = ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") + ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + ("none" !== B[nr] ? B[nr] : "")), I.scale = I.rotate = I.translate = "none"), _ = Rr(t, n.svg), n.svg && (n.uncache ? (C = t.getBBox(), W = n.xOrigin - C.x + "px " + (n.yOrigin - C.y) + "px", M = "") : M = !e && t.getAttribute("data-svg-origin"), Pr(t, M || W, !!M || n.originIsAbsolute, !1 !== n.smooth, _)), p = n.xOrigin || 0, m = n.yOrigin || 0, _ !== Cr && (b = _[0], w = _[1], T = _[2], E = _[3], r = O = _[4], i = D = _[5], 6 === _.length ? (s = Math.sqrt(b * b + w * w), a = Math.sqrt(E * E + T * T), u = b || w ? jn(w, b) * Ln : 0, (f = T || E ? jn(T, E) * Ln + u : 0) && (a *= Math.abs(Math.cos(f * zn))), n.svg && (r -= p - (p * b + m * T), i -= m - (p * w + m * E))) : (N = _[6], P = _[7], S = _[8], k = _[9], R = _[10], F = _[11], r = _[12], i = _[13], o = _[14], c = (g = jn(N, R)) * Ln, g && (M = O * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), C = D * v + k * y, A = N * v + R * y, S = O * -y + S * v, k = D * -y + k * v, R = N * -y + R * v, F = P * -y + F * v, O = M, D = C, N = A), l = (g = jn(-T, R)) * Ln, g && (v = Math.cos(-g), F = E * (y = Math.sin(-g)) + F * v, b = M = b * v - S * y, w = C = w * v - k * y, T = A = T * v - R * y), u = (g = jn(w, b)) * Ln, g && (M = b * (v = Math.cos(g)) + w * (y = Math.sin(g)), C = O * v + D * y, w = w * v - b * y, D = D * v - O * y, b = M, O = C), c && Math.abs(c) + Math.abs(u) > 359.9 && (c = u = 0, l = 180 - l), s = gt(Math.sqrt(b * b + w * w + T * T)), a = gt(Math.sqrt(D * D + N * N)), g = jn(O, D), f = Math.abs(g) > 2e-4 ? g * Ln : 0, h = F ? 1 / (F < 0 ? -F : F) : 0), n.svg && (M = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Sr(cr(t, nr)), M && t.setAttribute("transform", M))), Math.abs(f) > 90 && Math.abs(f) < 270 && (L ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (a *= -1, f += f <= 0 ? 180 : -180)), e = e || n.uncache, n.x = r - ((n.xPercent = r && (!e && n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + z, n.y = i - ((n.yPercent = i && (!e && n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + z, n.z = o + z, n.scaleX = gt(s), n.scaleY = gt(a), n.rotation = gt(u) + j, n.rotationX = gt(c) + j, n.rotationY = gt(l) + j, n.skewX = f + j, n.skewY = d + j, n.transformPerspective = h + z, (n.zOrigin = parseFloat(W.split(" ")[2]) || !e && n.zOrigin || 0) && (I[rr] = Nr(W)), n.xOffset = n.yOffset = 0, n.force3D = x.force3D, n.renderTransform = n.svg ? Ur : Nn ? Wr : Lr, n.uncache = 0, n
        },
        Nr = function(t) {
          return (t = t.split(" "))[0] + " " + t[1]
        },
        Ir = function(t, e, n) {
          var r = te(e);
          return gt(parseFloat(e) + parseFloat(wr(t, "x", n + "px", r))) + r
        },
        Lr = function(t, e) {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Wr(t, e)
        },
        zr = "0deg",
        jr = "0px",
        Br = ") ",
        Wr = function(t, e) {
          var n = e || this,
            r = n.xPercent,
            i = n.yPercent,
            o = n.x,
            s = n.y,
            a = n.z,
            u = n.rotation,
            c = n.rotationY,
            l = n.rotationX,
            f = n.skewX,
            d = n.skewY,
            h = n.scaleX,
            p = n.scaleY,
            m = n.transformPerspective,
            _ = n.force3D,
            g = n.target,
            v = n.zOrigin,
            y = "",
            b = "auto" === _ && t && 1 !== t || !0 === _;
          if (v && (l !== zr || c !== zr)) {
            var w, x = parseFloat(c) * zn,
              T = Math.sin(x),
              E = Math.cos(x);
            x = parseFloat(l) * zn, w = Math.cos(x), o = Ir(g, o, T * w * -v), s = Ir(g, s, -Math.sin(x) * -v), a = Ir(g, a, E * w * -v + v)
          }
          m !== jr && (y += "perspective(" + m + Br), (r || i) && (y += "translate(" + r + "%, " + i + "%) "), (b || o !== jr || s !== jr || a !== jr) && (y += a !== jr || b ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + Br), u !== zr && (y += "rotate(" + u + Br), c !== zr && (y += "rotateY(" + c + Br), l !== zr && (y += "rotateX(" + l + Br), f === zr && d === zr || (y += "skew(" + f + ", " + d + Br), 1 === h && 1 === p || (y += "scale(" + h + ", " + p + Br), g.style[nr] = y || "translate(0, 0)"
        },
        Ur = function(t, e) {
          var n, r, i, o, s, a = e || this,
            u = a.xPercent,
            c = a.yPercent,
            l = a.x,
            f = a.y,
            d = a.rotation,
            h = a.skewX,
            p = a.skewY,
            m = a.scaleX,
            _ = a.scaleY,
            g = a.target,
            v = a.xOrigin,
            y = a.yOrigin,
            b = a.xOffset,
            w = a.yOffset,
            x = a.forceCSS,
            T = parseFloat(l),
            E = parseFloat(f);
          d = parseFloat(d), h = parseFloat(h), (p = parseFloat(p)) && (h += p = parseFloat(p), d += p), d || h ? (d *= zn, h *= zn, n = Math.cos(d) * m, r = Math.sin(d) * m, i = Math.sin(d - h) * -_, o = Math.cos(d - h) * _, h && (p *= zn, s = Math.tan(h - p), i *= s = Math.sqrt(1 + s * s), o *= s, p && (s = Math.tan(p), n *= s = Math.sqrt(1 + s * s), r *= s)), n = gt(n), r = gt(r), i = gt(i), o = gt(o)) : (n = m, o = _, r = i = 0), (T && !~(l + "").indexOf("px") || E && !~(f + "").indexOf("px")) && (T = wr(g, "x", l, "px"), E = wr(g, "y", f, "px")), (v || y || b || w) && (T = gt(T + v - (v * n + y * i) + b), E = gt(E + y - (v * r + y * o) + w)), (u || c) && (s = g.getBBox(), T = gt(T + u / 100 * s.width), E = gt(E + c / 100 * s.height)), s = "matrix(" + n + "," + r + "," + i + "," + o + "," + T + "," + E + ")", g.setAttribute("transform", s), x && (g.style[nr] = s)
        },
        Vr = function(t, e, n, r, i) {
          var o, s, a = 360,
            u = R(i),
            c = parseFloat(i) * (u && ~i.indexOf("rad") ? Ln : 1) - r,
            l = r + c + "deg";
          return u && ("short" === (o = i.split("_")[1]) && (c %= a) !== c % 180 && (c += c < 0 ? a : -360), "cw" === o && c < 0 ? c = (c + 36e9) % a - ~~(c / a) * a : "ccw" === o && c > 0 && (c = (c - 36e9) % a - ~~(c / a) * a)), t._pt = s = new pn(t._pt, e, n, r, c, $n), s.e = l, s.u = "deg", t._props.push(n), s
        },
        qr = function(t, e) {
          for (var n in e) t[n] = e[n];
          return t
        },
        $r = function(t, e, n) {
          var r, i, o, s, a, u, c, l = qr({}, n._gsap),
            f = n.style;
          for (i in l.svg ? (o = n.getAttribute("transform"), n.setAttribute("transform", ""), f[nr] = e, r = Fr(n, 1), gr(n, nr), n.setAttribute("transform", o)) : (o = getComputedStyle(n)[nr], f[nr] = e, r = Fr(n, 1), f[nr] = o), In)(o = l[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (a = te(o) !== (c = te(s)) ? wr(n, i, o, c) : parseFloat(o), u = parseFloat(s), t._pt = new pn(t._pt, r, i, a, u - a, qn), t._pt.u = c || 0, t._props.push(i));
          qr(r, l)
        };
      _t("padding,margin,Width,Radius", function(t, e) {
        var n = "Top",
          r = "Right",
          i = "Bottom",
          o = "Left",
          s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function(n) {
            return e < 2 ? t + n : "border" + n + t
          });
        Mr[e > 1 ? "border" + t : t] = function(t, e, n, r, i) {
          var o, a;
          if (arguments.length < 4) return o = s.map(function(e) {
            return xr(t, e, n)
          }), 5 === (a = o.join(" ")).split(o[0]).length ? o[0] : a;
          o = (r + "").split(" "), a = {}, s.forEach(function(t, e) {
            return a[t] = o[e] = o[e] || o[(e - 1) / 2 | 0]
          }), t.init(e, a, i)
        }
      });
      var Yr, Xr, Gr = {
        name: "css",
        register: dr,
        targetTest: function(t) {
          return t.style && t.nodeType
        },
        init: function(t, e, n, r, i) {
          var o, s, a, u, c, l, f, d, h, p, m, _, g, v, y, b, w = this._props,
            T = t.style,
            E = n.vars.startAt;
          for (f in kn || dr(), this.styles = this.styles || ar(t), b = this.styles.props, this.tween = n, e)
            if ("autoRound" !== f && (s = e[f], !ut[f] || !Xe(f, e, n, r, t, i)))
              if (c = typeof s, l = Mr[f], "function" === c && (c = typeof(s = s.call(n, r, t, i))), "string" === c && ~s.indexOf("random(") && (s = fe(s)), l) l(this, t, f, s, n) && (y = 1);
              else if ("--" === f.substr(0, 2)) o = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", Ee.lastIndex = 0, Ee.test(o) || (d = te(o), h = te(s)), h ? d !== h && (o = wr(t, f, o, h) + h) : d && (s += d), this.add(T, "setProperty", o, s, r, i, 0, 0, f), w.push(f), b.push(f, 0, T[f]);
          else if ("undefined" !== c) {
            if (E && f in E ? (o = "function" == typeof E[f] ? E[f].call(n, r, t, i) : E[f], R(o) && ~o.indexOf("random(") && (o = fe(o)), te(o + "") || "auto" === o || (o += x.units[f] || te(xr(t, f)) || ""), "=" === (o + "").charAt(1) && (o = xr(t, f))) : o = xr(t, f), u = parseFloat(o), (p = "string" === c && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), a = parseFloat(s), f in Vn && ("autoAlpha" === f && (1 === u && "hidden" === xr(t, "visibility") && a && (u = 0), b.push("visibility", 0, T.visibility), vr(this, T, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== f && "transform" !== f && ~(f = Vn[f]).indexOf(",") && (f = f.split(",")[0])), m = f in In)
              if (this.styles.save(f), _ || ((g = t._gsap).renderTransform && !e.parseTransform || Fr(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (_ = this._pt = new pn(this._pt, T, nr, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new pn(this._pt, g, "scaleY", g.scaleY, (p ? yt(g.scaleY, p + a) : a) - g.scaleY || 0, qn), this._pt.u = 0, w.push("scaleY", f), f += "X";
              else {
                if ("transformOrigin" === f) {
                  b.push(rr, 0, T[rr]), s = Or(s), g.svg ? Pr(t, s, 0, v, 0, this) : ((h = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && vr(this, g, "zOrigin", g.zOrigin, h), vr(this, T, f, Nr(o), Nr(s)));
                  continue
                }
                if ("svgOrigin" === f) {
                  Pr(t, s, 1, v, 0, this);
                  continue
                }
                if (f in Ar) {
                  Vr(this, g, f, u, p ? yt(u, p + s) : s);
                  continue
                }
                if ("smoothOrigin" === f) {
                  vr(this, g, "smooth", g.smooth, s);
                  continue
                }
                if ("force3D" === f) {
                  g[f] = s;
                  continue
                }
                if ("transform" === f) {
                  $r(this, s, t);
                  continue
                }
              }
            else f in T || (f = fr(f) || f);
            if (m || (a || 0 === a) && (u || 0 === u) && !Un.test(s) && f in T) a || (a = 0), (d = (o + "").substr((u + "").length)) !== (h = te(s) || (f in x.units ? x.units[f] : d)) && (u = wr(t, f, o, h)), this._pt = new pn(this._pt, m ? g : T, f, u, (p ? yt(u, p + a) : a) - u, m || "px" !== h && "zIndex" !== f || !1 === e.autoRound ? qn : Xn), this._pt.u = h || 0, d !== h && "%" !== h && (this._pt.b = o, this._pt.r = Yn);
            else if (f in T) Tr.call(this, t, f, o, p ? p + s : s);
            else if (f in t) this.add(t, f, o || t[f], p ? p + s : s, r, i);
            else if ("parseTransform" !== f) {
              Z(f, s);
              continue
            }
            m || (f in T ? b.push(f, 0, T[f]) : b.push(f, 1, o || t[f])), w.push(f)
          }
          y && hn(this)
        },
        render: function(t, e) {
          if (e.tween._time || !Fn())
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next;
          else e.styles.revert()
        },
        get: xr,
        aliases: Vn,
        getSetter: function(t, e, n) {
          var r = Vn[e];
          return r && r.indexOf(",") < 0 && (e = r), e in In && e !== rr && (t._gsap.x || xr(t, "x")) ? n && Pn === n ? "scale" === e ? Jn : Zn : (Pn = n || {}) && ("scale" === e ? tr : er) : t.style && !N(t.style[e]) ? Kn : ~e.indexOf("-") ? Qn : on(t, e)
        },
        core: {
          _removeProperty: gr,
          _getMatrix: Rr
        }
      };
      Mn.utils.checkPrefix = fr, Mn.core.getStyleSaver = ar, Xr = _t("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Yr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        In[t] = 1
      }), _t(Yr, function(t) {
        x.units[t] = "deg", Ar[t] = 1
      }), Vn[Xr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Yr, _t("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        Vn[e[1]] = Xr[e[0]]
      }), _t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        x.units[t] = "px"
      }), Mn.registerPlugin(Gr);
      var Hr = Mn.registerPlugin(Gr) || Mn;
      Hr.core.Tween
    },
    25778(t, e, n) {
      n.d(e, {
        m: () => o
      });
      var r = n(86825);
      const i = t => "dark" === t ? r.xW.dark : r.xW.light,
        o = (t, e) => [r.xW.tokens, r.xW.typography, r.xW.grid, i(t)].join(" ")
    },
    94118(t, e, n) {
      function r(t, e, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (t?.(r), !1 === n || !r.defaultPrevented) return e?.(r)
        }
      }
      n.d(e, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    85426(t, e, n) {
      n.d(e, {
        A: () => s,
        q: () => o
      });
      var r = n(71127),
        i = n(42295);

      function o(t, e) {
        const n = r.createContext(e),
          o = t => {
            const {
              children: e,
              ...o
            } = t, s = r.useMemo(() => o, Object.values(o));
            return (0, i.jsx)(n.Provider, {
              value: s,
              children: e
            })
          };
        return o.displayName = t + "Provider", [o, function(i) {
          const o = r.useContext(n);
          if (o) return o;
          if (void 0 !== e) return e;
          throw new Error(`\`${i}\` must be used within \`${t}\``)
        }]
      }

      function s(t, e = []) {
        let n = [];
        const o = () => {
          const e = n.map(t => r.createContext(t));
          return function(n) {
            const i = n?.[t] || e;
            return r.useMemo(() => ({
              [`__scope${t}`]: {
                ...n,
                [t]: i
              }
            }), [n, i])
          }
        };
        return o.scopeName = t, [function(e, o) {
          const s = r.createContext(o),
            a = n.length;
          n = [...n, o];
          const u = e => {
            const {
              scope: n,
              children: o,
              ...u
            } = e, c = n?.[t]?.[a] || s, l = r.useMemo(() => u, Object.values(u));
            return (0, i.jsx)(c.Provider, {
              value: l,
              children: o
            })
          };
          return u.displayName = e + "Provider", [u, function(n, i) {
            const u = i?.[t]?.[a] || s,
              c = r.useContext(u);
            if (c) return c;
            if (void 0 !== o) return o;
            throw new Error(`\`${n}\` must be used within \`${e}\``)
          }]
        }, a(o, ...e)]
      }

      function a(...t) {
        const e = t[0];
        if (1 === t.length) return e;
        const n = () => {
          const n = t.map(t => ({
            useScope: t(),
            scopeName: t.scopeName
          }));
          return function(t) {
            const i = n.reduce((e, {
              useScope: n,
              scopeName: r
            }) => ({
              ...e,
              ...n(t)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${e.scopeName}`]: i
            }), [i])
          }
        };
        return n.scopeName = e.scopeName, n
      }
    },
    53245(t, e, n) {
      n.d(e, {
        bm: () => yt,
        UC: () => _t,
        VY: () => vt,
        hJ: () => mt,
        ZL: () => pt,
        bL: () => dt,
        hE: () => gt,
        l9: () => ht
      });
      var r = n(71127),
        i = n(94118),
        o = n(95362),
        s = n(85426),
        a = n(86126),
        u = n(53054),
        c = n(1573),
        l = n(62228),
        f = n(76286),
        d = n(42295),
        h = "focusScope.autoFocusOnMount",
        p = "focusScope.autoFocusOnUnmount",
        m = {
          bubbles: !1,
          cancelable: !0
        },
        _ = r.forwardRef((t, e) => {
          const {
            loop: n = !1,
            trapped: i = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: a,
            ...u
          } = t, [c, _] = r.useState(null), y = (0, f.c)(s), x = (0, f.c)(a), T = r.useRef(null), E = (0, o.s)(e, t => _(t)), O = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (i) {
              let t = function(t) {
                  if (O.paused || !c) return;
                  const e = t.target;
                  c.contains(e) ? T.current = e : b(T.current, {
                    select: !0
                  })
                },
                e = function(t) {
                  if (O.paused || !c) return;
                  const e = t.relatedTarget;
                  null !== e && (c.contains(e) || b(T.current, {
                    select: !0
                  }))
                },
                n = function(t) {
                  if (document.activeElement === document.body)
                    for (const e of t) e.removedNodes.length > 0 && b(c)
                };
              document.addEventListener("focusin", t), document.addEventListener("focusout", e);
              const r = new MutationObserver(n);
              return c && r.observe(c, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", t), document.removeEventListener("focusout", e), r.disconnect()
              }
            }
          }, [i, c, O.paused]), r.useEffect(() => {
            if (c) {
              w.add(O);
              const t = document.activeElement;
              if (!c.contains(t)) {
                const e = new CustomEvent(h, m);
                c.addEventListener(h, y), c.dispatchEvent(e), e.defaultPrevented || (function(t, {
                  select: e = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of t)
                    if (b(r, {
                        select: e
                      }), document.activeElement !== n) return
                }(g(c).filter(t => "A" !== t.tagName), {
                  select: !0
                }), document.activeElement === t && b(c))
              }
              return () => {
                c.removeEventListener(h, y), setTimeout(() => {
                  const e = new CustomEvent(p, m);
                  c.addEventListener(p, x), c.dispatchEvent(e), e.defaultPrevented || b(t ?? document.body, {
                    select: !0
                  }), c.removeEventListener(p, x), w.remove(O)
                }, 0)
              }
            }
          }, [c, y, x, O]);
          const D = r.useCallback(t => {
            if (!n && !i) return;
            if (O.paused) return;
            const e = "Tab" === t.key && !t.altKey && !t.ctrlKey && !t.metaKey,
              r = document.activeElement;
            if (e && r) {
              const e = t.currentTarget,
                [i, o] = function(t) {
                  const e = g(t);
                  return [v(e, t), v(e.reverse(), t)]
                }(e);
              i && o ? t.shiftKey || r !== o ? t.shiftKey && r === i && (t.preventDefault(), n && b(o, {
                select: !0
              })) : (t.preventDefault(), n && b(i, {
                select: !0
              })) : r === e && t.preventDefault()
            }
          }, [n, i, O.paused]);
          return (0, d.jsx)(l.sG.div, {
            tabIndex: -1,
            ...u,
            ref: E,
            onKeyDown: D
          })
        });

      function g(t) {
        const e = [],
          n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
            acceptNode: t => {
              const e = "INPUT" === t.tagName && "hidden" === t.type;
              return t.disabled || t.hidden || e ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) e.push(n.currentNode);
        return e
      }

      function v(t, e) {
        for (const n of t)
          if (!y(n, {
              upTo: e
            })) return n
      }

      function y(t, {
        upTo: e
      }) {
        if ("hidden" === getComputedStyle(t).visibility) return !0;
        for (; t;) {
          if (void 0 !== e && t === e) return !1;
          if ("none" === getComputedStyle(t).display) return !0;
          t = t.parentElement
        }
        return !1
      }

      function b(t, {
        select: e = !1
      } = {}) {
        if (t && t.focus) {
          const n = document.activeElement;
          t.focus({
            preventScroll: !0
          }), t !== n && function(t) {
            return t instanceof HTMLInputElement && "select" in t
          }(t) && e && t.select()
        }
      }
      _.displayName = "FocusScope";
      var w = function() {
        let t = [];
        return {
          add(e) {
            const n = t[0];
            e !== n && n?.pause(), t = x(t, e), t.unshift(e)
          },
          remove(e) {
            t = x(t, e), t[0]?.resume()
          }
        }
      }();

      function x(t, e) {
        const n = [...t],
          r = n.indexOf(e);
        return -1 !== r && n.splice(r, 1), n
      }
      var T = n(18429),
        E = n(63155),
        O = r.forwardRef((t, e) => {
          const {
            container: n,
            ...i
          } = t, [o, s] = r.useState(!1);
          (0, E.N)(() => s(!0), []);
          const a = n || o && globalThis?.document?.body;
          return a ? T.createPortal((0, d.jsx)(l.sG.div, {
            ...i,
            ref: e
          }), a) : null
        });
      O.displayName = "Portal";
      var D = n(53146),
        M = n(15234),
        C = n(97359),
        A = n(94926);

      function S(t) {
        const e = r.forwardRef((t, e) => {
          const {
            children: n,
            ...i
          } = t;
          if (r.isValidElement(n)) {
            const t = function(t) {
                let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
                  n = e && "isReactWarning" in e && e.isReactWarning;
                return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
              }(n),
              s = function(t, e) {
                const n = {
                  ...e
                };
                for (const r in e) {
                  const i = t[r],
                    o = e[r];
                  /^on[A-Z]/.test(r) ? i && o ? n[r] = (...t) => {
                    const e = o(...t);
                    return i(...t), e
                  } : i && (n[r] = i) : "style" === r ? n[r] = {
                    ...i,
                    ...o
                  } : "className" === r && (n[r] = [i, o].filter(Boolean).join(" "))
                }
                return {
                  ...t,
                  ...n
                }
              }(i, n.props);
            return n.type !== r.Fragment && (s.ref = e ? (0, o.t)(e, t) : t), r.cloneElement(n, s)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return e.displayName = `${t}.SlotClone`, e
      }
      var k = Symbol("radix.slottable");

      function R(t) {
        return r.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === k
      }
      var P = "Dialog",
        [F, N] = (0, s.A)(P),
        [I, L] = F(P),
        z = t => {
          const {
            __scopeDialog: e,
            children: n,
            open: i,
            defaultOpen: o,
            onOpenChange: s,
            modal: c = !0
          } = t, l = r.useRef(null), f = r.useRef(null), [h, p] = (0, u.i)({
            prop: i,
            defaultProp: o ?? !1,
            onChange: s,
            caller: P
          });
          return (0, d.jsx)(I, {
            scope: e,
            triggerRef: l,
            contentRef: f,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: h,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(t => !t), [p]),
            modal: c,
            children: n
          })
        };
      z.displayName = P;
      var j = "DialogTrigger",
        B = r.forwardRef((t, e) => {
          const {
            __scopeDialog: n,
            ...r
          } = t, s = L(j, n), a = (0, o.s)(e, s.triggerRef);
          return (0, d.jsx)(l.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": st(s.open),
            ...r,
            ref: a,
            onClick: (0, i.mK)(t.onClick, s.onOpenToggle)
          })
        });
      B.displayName = j;
      var W = "DialogPortal",
        [U, V] = F(W, {
          forceMount: void 0
        }),
        q = t => {
          const {
            __scopeDialog: e,
            forceMount: n,
            children: i,
            container: o
          } = t, s = L(W, e);
          return (0, d.jsx)(U, {
            scope: e,
            forceMount: n,
            children: r.Children.map(i, t => (0, d.jsx)(D.C, {
              present: n || s.open,
              children: (0, d.jsx)(O, {
                asChild: !0,
                container: o,
                children: t
              })
            }))
          })
        };
      q.displayName = W;
      var $ = "DialogOverlay",
        Y = r.forwardRef((t, e) => {
          const n = V($, t.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...i
            } = t,
            o = L($, t.__scopeDialog);
          return o.modal ? (0, d.jsx)(D.C, {
            present: r || o.open,
            children: (0, d.jsx)(G, {
              ...i,
              ref: e
            })
          }) : null
        });
      Y.displayName = $;
      var X = function(t) {
          const e = S(t),
            n = r.forwardRef((t, n) => {
              const {
                children: i,
                ...o
              } = t, s = r.Children.toArray(i), a = s.find(R);
              if (a) {
                const t = a.props.children,
                  i = s.map(e => e === a ? r.Children.count(t) > 1 ? r.Children.only(null) : r.isValidElement(t) ? t.props.children : null : e);
                return (0, d.jsx)(e, {
                  ...o,
                  ref: n,
                  children: r.isValidElement(t) ? r.cloneElement(t, void 0, i) : null
                })
              }
              return (0, d.jsx)(e, {
                ...o,
                ref: n,
                children: i
              })
            });
          return n.displayName = `${t}.Slot`, n
        }("DialogOverlay.RemoveScroll"),
        G = r.forwardRef((t, e) => {
          const {
            __scopeDialog: n,
            ...r
          } = t, i = L($, n);
          return (0, d.jsx)(C.A, {
            as: X,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, d.jsx)(l.sG.div, {
              "data-state": st(i.open),
              ...r,
              ref: e,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        H = "DialogContent",
        K = r.forwardRef((t, e) => {
          const n = V(H, t.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...i
            } = t,
            o = L(H, t.__scopeDialog);
          return (0, d.jsx)(D.C, {
            present: r || o.open,
            children: o.modal ? (0, d.jsx)(Q, {
              ...i,
              ref: e
            }) : (0, d.jsx)(Z, {
              ...i,
              ref: e
            })
          })
        });
      K.displayName = H;
      var Q = r.forwardRef((t, e) => {
          const n = L(H, t.__scopeDialog),
            s = r.useRef(null),
            a = (0, o.s)(e, n.contentRef, s);
          return r.useEffect(() => {
            const t = s.current;
            if (t) return (0, A.Eq)(t)
          }, []), (0, d.jsx)(J, {
            ...t,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, i.mK)(t.onCloseAutoFocus, t => {
              t.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, i.mK)(t.onPointerDownOutside, t => {
              const e = t.detail.originalEvent,
                n = 0 === e.button && !0 === e.ctrlKey;
              (2 === e.button || n) && t.preventDefault()
            }),
            onFocusOutside: (0, i.mK)(t.onFocusOutside, t => t.preventDefault())
          })
        }),
        Z = r.forwardRef((t, e) => {
          const n = L(H, t.__scopeDialog),
            i = r.useRef(!1),
            o = r.useRef(!1);
          return (0, d.jsx)(J, {
            ...t,
            ref: e,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: e => {
              t.onCloseAutoFocus?.(e), e.defaultPrevented || (i.current || n.triggerRef.current?.focus(), e.preventDefault()), i.current = !1, o.current = !1
            },
            onInteractOutside: e => {
              t.onInteractOutside?.(e), e.defaultPrevented || (i.current = !0, "pointerdown" === e.detail.originalEvent.type && (o.current = !0));
              const r = e.target,
                s = n.triggerRef.current?.contains(r);
              s && e.preventDefault(), "focusin" === e.detail.originalEvent.type && o.current && e.preventDefault()
            }
          })
        }),
        J = r.forwardRef((t, e) => {
          const {
            __scopeDialog: n,
            trapFocus: i,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...u
          } = t, l = L(H, n), f = r.useRef(null), h = (0, o.s)(e, f);
          return (0, M.Oh)(), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(_, {
              asChild: !0,
              loop: !0,
              trapped: i,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, d.jsx)(c.qW, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": st(l.open),
                ...u,
                ref: h,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)(lt, {
                titleId: l.titleId
              }), (0, d.jsx)(ft, {
                contentRef: f,
                descriptionId: l.descriptionId
              })]
            })]
          })
        }),
        tt = "DialogTitle",
        et = r.forwardRef((t, e) => {
          const {
            __scopeDialog: n,
            ...r
          } = t, i = L(tt, n);
          return (0, d.jsx)(l.sG.h2, {
            id: i.titleId,
            ...r,
            ref: e
          })
        });
      et.displayName = tt;
      var nt = "DialogDescription",
        rt = r.forwardRef((t, e) => {
          const {
            __scopeDialog: n,
            ...r
          } = t, i = L(nt, n);
          return (0, d.jsx)(l.sG.p, {
            id: i.descriptionId,
            ...r,
            ref: e
          })
        });
      rt.displayName = nt;
      var it = "DialogClose",
        ot = r.forwardRef((t, e) => {
          const {
            __scopeDialog: n,
            ...r
          } = t, o = L(it, n);
          return (0, d.jsx)(l.sG.button, {
            type: "button",
            ...r,
            ref: e,
            onClick: (0, i.mK)(t.onClick, () => o.onOpenChange(!1))
          })
        });

      function st(t) {
        return t ? "open" : "closed"
      }
      ot.displayName = it;
      var at = "DialogTitleWarning",
        [ut, ct] = (0, s.q)(at, {
          contentName: H,
          titleName: tt,
          docsSlug: "dialog"
        }),
        lt = ({
          titleId: t
        }) => {
          const e = ct(at),
            n = `\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;
          return r.useEffect(() => {
            t && (document.getElementById(t) || console.error(n))
          }, [n, t]), null
        },
        ft = ({
          contentRef: t,
          descriptionId: e
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ct("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = t.current?.getAttribute("aria-describedby");
            e && r && (document.getElementById(e) || console.warn(n))
          }, [n, t, e]), null
        },
        dt = z,
        ht = B,
        pt = q,
        mt = Y,
        _t = K,
        gt = et,
        vt = rt,
        yt = ot
    },
    1573(t, e, n) {
      n.d(e, {
        lg: () => g,
        qW: () => d,
        bL: () => _
      });
      var r, i = n(71127),
        o = n(94118),
        s = n(62228),
        a = n(95362),
        u = n(76286),
        c = n(42295),
        l = "dismissableLayer.update",
        f = i.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        d = i.forwardRef((t, e) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: d,
            onPointerDownOutside: h,
            onFocusOutside: _,
            onInteractOutside: g,
            onDismiss: v,
            ...y
          } = t, b = i.useContext(f), [w, x] = i.useState(null), T = w?.ownerDocument ?? globalThis?.document, [, E] = i.useState({}), O = (0, a.s)(e, t => x(t)), D = Array.from(b.layers), [M] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1), C = D.indexOf(M), A = w ? D.indexOf(w) : -1, S = b.layersWithOutsidePointerEventsDisabled.size > 0, k = A >= C, R = function(t, e = globalThis?.document) {
            const n = (0, u.c)(t),
              r = i.useRef(!1),
              o = i.useRef(() => {});
            return i.useEffect(() => {
              const t = t => {
                  if (t.target && !r.current) {
                    let r = function() {
                      m("dismissableLayer.pointerDownOutside", n, i, {
                        discrete: !0
                      })
                    };
                    const i = {
                      originalEvent: t
                    };
                    "touch" === t.pointerType ? (e.removeEventListener("click", o.current), o.current = r, e.addEventListener("click", o.current, {
                      once: !0
                    })) : r()
                  } else e.removeEventListener("click", o.current);
                  r.current = !1
                },
                i = window.setTimeout(() => {
                  e.addEventListener("pointerdown", t)
                }, 0);
              return () => {
                window.clearTimeout(i), e.removeEventListener("pointerdown", t), e.removeEventListener("click", o.current)
              }
            }, [e, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }(t => {
            const e = t.target,
              n = [...b.branches].some(t => t.contains(e));
            k && !n && (h?.(t), g?.(t), t.defaultPrevented || v?.())
          }, T), P = function(t, e = globalThis?.document) {
            const n = (0, u.c)(t),
              r = i.useRef(!1);
            return i.useEffect(() => {
              const t = t => {
                t.target && !r.current && m("dismissableLayer.focusOutside", n, {
                  originalEvent: t
                }, {
                  discrete: !1
                })
              };
              return e.addEventListener("focusin", t), () => e.removeEventListener("focusin", t)
            }, [e, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(t => {
            const e = t.target;
            [...b.branches].some(t => t.contains(e)) || (_?.(t), g?.(t), t.defaultPrevented || v?.())
          }, T);
          return function(t, e = globalThis?.document) {
            const n = (0, u.c)(t);
            i.useEffect(() => {
              const t = t => {
                "Escape" === t.key && n(t)
              };
              return e.addEventListener("keydown", t, {
                capture: !0
              }), () => e.removeEventListener("keydown", t, {
                capture: !0
              })
            }, [n, e])
          }(t => {
            A === b.layers.size - 1 && (d?.(t), !t.defaultPrevented && v && (t.preventDefault(), v()))
          }, T), i.useEffect(() => {
            if (w) return n && (0 === b.layersWithOutsidePointerEventsDisabled.size && (r = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(w)), b.layers.add(w), p(), () => {
              n && 1 === b.layersWithOutsidePointerEventsDisabled.size && (T.body.style.pointerEvents = r)
            }
          }, [w, T, n, b]), i.useEffect(() => () => {
            w && (b.layers.delete(w), b.layersWithOutsidePointerEventsDisabled.delete(w), p())
          }, [w, b]), i.useEffect(() => {
            const t = () => E({});
            return document.addEventListener(l, t), () => document.removeEventListener(l, t)
          }, []), (0, c.jsx)(s.sG.div, {
            ...y,
            ref: O,
            style: {
              pointerEvents: S ? k ? "auto" : "none" : void 0,
              ...t.style
            },
            onFocusCapture: (0, o.mK)(t.onFocusCapture, P.onFocusCapture),
            onBlurCapture: (0, o.mK)(t.onBlurCapture, P.onBlurCapture),
            onPointerDownCapture: (0, o.mK)(t.onPointerDownCapture, R.onPointerDownCapture)
          })
        });
      d.displayName = "DismissableLayer";
      var h = i.forwardRef((t, e) => {
        const n = i.useContext(f),
          r = i.useRef(null),
          o = (0, a.s)(e, r);
        return i.useEffect(() => {
          const t = r.current;
          if (t) return n.branches.add(t), () => {
            n.branches.delete(t)
          }
        }, [n.branches]), (0, c.jsx)(s.sG.div, {
          ...t,
          ref: o
        })
      });

      function p() {
        const t = new CustomEvent(l);
        document.dispatchEvent(t)
      }

      function m(t, e, n, {
        discrete: r
      }) {
        const i = n.originalEvent.target,
          o = new CustomEvent(t, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        e && i.addEventListener(t, e, {
          once: !0
        }), r ? (0, s.hO)(i, o) : i.dispatchEvent(o)
      }
      h.displayName = "DismissableLayerBranch";
      var _ = d,
        g = h
    },
    15234(t, e, n) {
      n.d(e, {
        Oh: () => o
      });
      var r = n(71127),
        i = 0;

      function o() {
        r.useEffect(() => {
          const t = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", t[0] ?? s()), document.body.insertAdjacentElement("beforeend", t[1] ?? s()), i++, () => {
            1 === i && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), i--
          }
        }, [])
      }

      function s() {
        const t = document.createElement("span");
        return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t
      }
    },
    86126(t, e, n) {
      var r;
      n.d(e, {
        B: () => u
      });
      var i = n(71127),
        o = n(63155),
        s = (r || (r = n.t(i, 2)))[" useId ".trim().toString()] || (() => {}),
        a = 0;

      function u(t) {
        const [e, n] = i.useState(s());
        return (0, o.N)(() => {
          t || n(t => t ?? String(a++))
        }, [t]), t || (e ? `radix-${e}` : "")
      }
    },
    53146(t, e, n) {
      n.d(e, {
        C: () => s
      });
      var r = n(71127),
        i = n(95362),
        o = n(63155),
        s = t => {
          const {
            present: e,
            children: n
          } = t, s = function(t) {
            const [e, n] = r.useState(), i = r.useRef(null), s = r.useRef(t), u = r.useRef("none"), c = t ? "mounted" : "unmounted", [l, f] = function(t, e) {
              return r.useReducer((t, n) => e[t][n] ?? t, t)
            }(c, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return r.useEffect(() => {
              const t = a(i.current);
              u.current = "mounted" === l ? t : "none"
            }, [l]), (0, o.N)(() => {
              const e = i.current,
                n = s.current;
              if (n !== t) {
                const r = u.current,
                  i = a(e);
                f(t ? "MOUNT" : "none" === i || "none" === e?.display ? "UNMOUNT" : n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), s.current = t
              }
            }, [t, f]), (0, o.N)(() => {
              if (e) {
                let t;
                const n = e.ownerDocument.defaultView ?? window,
                  r = r => {
                    const o = a(i.current).includes(CSS.escape(r.animationName));
                    if (r.target === e && o && (f("ANIMATION_END"), !s.current)) {
                      const r = e.style.animationFillMode;
                      e.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                        "forwards" === e.style.animationFillMode && (e.style.animationFillMode = r)
                      })
                    }
                  },
                  o = t => {
                    t.target === e && (u.current = a(i.current))
                  };
                return e.addEventListener("animationstart", o), e.addEventListener("animationcancel", r), e.addEventListener("animationend", r), () => {
                  n.clearTimeout(t), e.removeEventListener("animationstart", o), e.removeEventListener("animationcancel", r), e.removeEventListener("animationend", r)
                }
              }
              f("ANIMATION_END")
            }, [e, f]), {
              isPresent: ["mounted", "unmountSuspended"].includes(l),
              ref: r.useCallback(t => {
                i.current = t ? getComputedStyle(t) : null, n(t)
              }, [])
            }
          }(e), u = "function" == typeof n ? n({
            present: s.isPresent
          }) : r.Children.only(n), c = (0, i.s)(s.ref, function(t) {
            let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
              n = e && "isReactWarning" in e && e.isReactWarning;
            return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
          }(u));
          return "function" == typeof n || s.isPresent ? r.cloneElement(u, {
            ref: c
          }) : null
        };

      function a(t) {
        return t?.animationName || "none"
      }
      s.displayName = "Presence"
    },
    62228(t, e, n) {
      n.d(e, {
        sG: () => l,
        hO: () => f
      });
      var r = n(71127),
        i = n(18429),
        o = n(95362),
        s = n(42295);

      function a(t) {
        const e = r.forwardRef((t, e) => {
          const {
            children: n,
            ...i
          } = t;
          if (r.isValidElement(n)) {
            const t = function(t) {
                let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
                  n = e && "isReactWarning" in e && e.isReactWarning;
                return n ? t.ref : (e = Object.getOwnPropertyDescriptor(t, "ref")?.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref)
              }(n),
              s = function(t, e) {
                const n = {
                  ...e
                };
                for (const r in e) {
                  const i = t[r],
                    o = e[r];
                  /^on[A-Z]/.test(r) ? i && o ? n[r] = (...t) => {
                    const e = o(...t);
                    return i(...t), e
                  } : i && (n[r] = i) : "style" === r ? n[r] = {
                    ...i,
                    ...o
                  } : "className" === r && (n[r] = [i, o].filter(Boolean).join(" "))
                }
                return {
                  ...t,
                  ...n
                }
              }(i, n.props);
            return n.type !== r.Fragment && (s.ref = e ? (0, o.t)(e, t) : t), r.cloneElement(n, s)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return e.displayName = `${t}.SlotClone`, e
      }
      var u = Symbol("radix.slottable");

      function c(t) {
        return r.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === u
      }
      var l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((t, e) => {
        const n = function(t) {
            const e = a(t),
              n = r.forwardRef((t, n) => {
                const {
                  children: i,
                  ...o
                } = t, a = r.Children.toArray(i), u = a.find(c);
                if (u) {
                  const t = u.props.children,
                    i = a.map(e => e === u ? r.Children.count(t) > 1 ? r.Children.only(null) : r.isValidElement(t) ? t.props.children : null : e);
                  return (0, s.jsx)(e, {
                    ...o,
                    ref: n,
                    children: r.isValidElement(t) ? r.cloneElement(t, void 0, i) : null
                  })
                }
                return (0, s.jsx)(e, {
                  ...o,
                  ref: n,
                  children: i
                })
              });
            return n.displayName = `${t}.Slot`, n
          }(`Primitive.${e}`),
          i = r.forwardRef((t, r) => {
            const {
              asChild: i,
              ...o
            } = t, a = i ? n : e;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, s.jsx)(a, {
              ...o,
              ref: r
            })
          });
        return i.displayName = `Primitive.${e}`, {
          ...t,
          [e]: i
        }
      }, {});

      function f(t, e) {
        t && i.flushSync(() => t.dispatchEvent(e))
      }
    },
    76286(t, e, n) {
      n.d(e, {
        c: () => i
      });
      var r = n(71127);

      function i(t) {
        const e = r.useRef(t);
        return r.useEffect(() => {
          e.current = t
        }), r.useMemo(() => (...t) => e.current?.(...t), [])
      }
    },
    53054(t, e, n) {
      var r;
      n.d(e, {
        i: () => a
      });
      var i = n(71127),
        o = n(63155),
        s = (r || (r = n.t(i, 2)))[" useInsertionEffect ".trim().toString()] || o.N;

      function a({
        prop: t,
        defaultProp: e,
        onChange: n = () => {},
        caller: r
      }) {
        const [o, a, u] = function({
          defaultProp: t,
          onChange: e
        }) {
          const [n, r] = i.useState(t), o = i.useRef(n), a = i.useRef(e);
          return s(() => {
            a.current = e
          }, [e]), i.useEffect(() => {
            o.current !== n && (a.current?.(n), o.current = n)
          }, [n, o]), [n, r, a]
        }({
          defaultProp: e,
          onChange: n
        }), c = void 0 !== t, l = c ? t : o; {
          const e = i.useRef(void 0 !== t);
          i.useEffect(() => {
            const t = e.current;
            if (t !== c) {
              const e = t ? "controlled" : "uncontrolled",
                n = c ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${e} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            e.current = c
          }, [c, r])
        }
        const f = i.useCallback(e => {
          if (c) {
            const n = function(t) {
              return "function" == typeof t
            }(e) ? e(t) : e;
            n !== t && u.current?.(n)
          } else a(e)
        }, [c, t, a, u]);
        return [l, f]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    63155(t, e, n) {
      n.d(e, {
        N: () => i
      });
      var r = n(71127),
        i = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    16675(t, e, n) {
      n.d(e, {
        A: () => z
      });
      var r = n(71127);

      function i(t) {
        return function(t) {
          return "[object Object]" === Object.prototype.toString.call(t)
        }(t) || Array.isArray(t)
      }

      function o(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        return n.length === r.length && (JSON.stringify(Object.keys(t.breakpoints || {})) === JSON.stringify(Object.keys(e.breakpoints || {})) && n.every(n => {
          const r = t[n],
            s = e[n];
          return "function" == typeof r ? `${r}` == `${s}` : i(r) && i(s) ? o(r, s) : r === s
        }))
      }

      function s(t) {
        return t.concat().sort((t, e) => t.name > e.name ? 1 : -1).map(t => t.options)
      }

      function a(t) {
        return "number" == typeof t
      }

      function u(t) {
        return "string" == typeof t
      }

      function c(t) {
        return "boolean" == typeof t
      }

      function l(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
      }

      function f(t) {
        return Math.abs(t)
      }

      function d(t) {
        return Math.sign(t)
      }

      function h(t, e) {
        return f(t - e)
      }

      function p(t) {
        return y(t).map(Number)
      }

      function m(t) {
        return t[_(t)]
      }

      function _(t) {
        return Math.max(0, t.length - 1)
      }

      function g(t, e) {
        return e === _(t)
      }

      function v(t, e = 0) {
        return Array.from(Array(t), (t, n) => e + n)
      }

      function y(t) {
        return Object.keys(t)
      }

      function b(t, e) {
        return [t, e].reduce((t, e) => (y(e).forEach(n => {
          const r = t[n],
            i = e[n],
            o = l(r) && l(i);
          t[n] = o ? b(r, i) : i
        }), t), {})
      }

      function w(t, e) {
        return void 0 !== e.MouseEvent && t instanceof e.MouseEvent
      }

      function x() {
        let t = [];
        const e = {
          add: function(n, r, i, o = {
            passive: !0
          }) {
            let s;
            if ("addEventListener" in n) n.addEventListener(r, i, o), s = () => n.removeEventListener(r, i, o);
            else {
              const t = n;
              t.addListener(i), s = () => t.removeListener(i)
            }
            return t.push(s), e
          },
          clear: function() {
            t = t.filter(t => t())
          }
        };
        return e
      }

      function T(t = 0, e = 0) {
        const n = f(t - e);

        function r(e) {
          return e < t
        }

        function i(t) {
          return t > e
        }

        function o(t) {
          return r(t) || i(t)
        }
        return {
          length: n,
          max: e,
          min: t,
          constrain: function(n) {
            return o(n) ? r(n) ? t : e : n
          },
          reachedAny: o,
          reachedMax: i,
          reachedMin: r,
          removeOffset: function(t) {
            return n ? t - n * Math.ceil((t - e) / n) : t
          }
        }
      }

      function E(t, e, n) {
        const {
          constrain: r
        } = T(0, t), i = t + 1;
        let o = s(e);

        function s(t) {
          return n ? f((i + t) % i) : r(t)
        }

        function a() {
          return o
        }

        function u() {
          return E(t, a(), n)
        }
        const c = {
          get: a,
          set: function(t) {
            return o = s(t), c
          },
          add: function(t) {
            return u().set(a() + t)
          },
          clone: u
        };
        return c
      }

      function O(t, e, n, r, i, o, s, a, u, l, p, m, _, g, v, y, b, E, O) {
        const {
          cross: D,
          direction: M
        } = t, C = ["INPUT", "SELECT", "TEXTAREA"], A = {
          passive: !1
        }, S = x(), k = x(), R = T(50, 225).constrain(g.measure(20)), P = {
          mouse: 300,
          touch: 400
        }, F = {
          mouse: 500,
          touch: 600
        }, N = v ? 43 : 25;
        let I = !1,
          L = 0,
          z = 0,
          j = !1,
          B = !1,
          W = !1,
          U = !1;

        function V(t) {
          if (!w(t, r) && t.touches.length >= 2) return q(t);
          const e = o.readPoint(t),
            n = o.readPoint(t, D),
            s = h(e, L),
            u = h(n, z);
          if (!B && !U) {
            if (!t.cancelable) return q(t);
            if (B = s > u, !B) return q(t)
          }
          const c = o.pointerMove(t);
          s > y && (W = !0), l.useFriction(.3).useDuration(.75), a.start(), i.add(M(c)), t.preventDefault()
        }

        function q(t) {
          const e = p.byDistance(0, !1).index !== m.get(),
            n = o.pointerUp(t) * (v ? F : P)[U ? "mouse" : "touch"],
            r = function(t, e) {
              const n = m.add(-1 * d(t)),
                r = p.byDistance(t, !v).distance;
              return v || f(t) < R ? r : b && e ? .5 * r : p.byIndex(n.get(), 0).distance
            }(M(n), e),
            i = function(t, e) {
              if (0 === t || 0 === e) return 0;
              if (f(t) <= f(e)) return 0;
              const n = h(f(t), f(e));
              return f(n / t)
            }(n, r),
            s = N - 10 * i,
            a = E + i / 50;
          B = !1, j = !1, k.clear(), l.useDuration(s).useFriction(a), u.distance(r, !v), U = !1, _.emit("pointerUp")
        }

        function $(t) {
          W && (t.stopPropagation(), t.preventDefault(), W = !1)
        }
        return {
          init: function(t) {
            if (!O) return;

            function a(a) {
              (c(O) || O(t, a)) && function(t) {
                const a = w(t, r);
                U = a, W = v && a && !t.buttons && I, I = h(i.get(), s.get()) >= 2, a && 0 !== t.button || function(t) {
                  const e = t.nodeName || "";
                  return C.includes(e)
                }(t.target) || (j = !0, o.pointerDown(t), l.useFriction(0).useDuration(0), i.set(s), function() {
                  const t = U ? n : e;
                  k.add(t, "touchmove", V, A).add(t, "touchend", q).add(t, "mousemove", V, A).add(t, "mouseup", q)
                }(), L = o.readPoint(t), z = o.readPoint(t, D), _.emit("pointerDown"))
              }(a)
            }
            const u = e;
            S.add(u, "dragstart", t => t.preventDefault(), A).add(u, "touchmove", () => {}, A).add(u, "touchend", () => {}).add(u, "touchstart", a).add(u, "mousedown", a).add(u, "touchcancel", q).add(u, "contextmenu", q).add(u, "click", $, !0)
          },
          destroy: function() {
            S.clear(), k.clear()
          },
          pointerDown: function() {
            return j
          }
        }
      }

      function D(t, e) {
        let n, r;

        function i(t) {
          return t.timeStamp
        }

        function o(n, r) {
          const i = "client" + ("x" === (r || t.scroll) ? "X" : "Y");
          return (w(n, e) ? n : n.touches[0])[i]
        }
        return {
          pointerDown: function(t) {
            return n = t, r = t, o(t)
          },
          pointerMove: function(t) {
            const e = o(t) - o(r),
              s = i(t) - i(n) > 170;
            return r = t, s && (n = t), e
          },
          pointerUp: function(t) {
            if (!n || !r) return 0;
            const e = o(r) - o(n),
              s = i(t) - i(n),
              a = i(t) - i(r) > 170,
              u = e / s;
            return s && !a && f(u) > .1 ? u : 0
          },
          readPoint: o
        }
      }

      function M(t, e, n, r, i, o, s) {
        const a = [t].concat(r);
        let u, l, d = [],
          h = !1;

        function p(t) {
          return i.measureSize(s.measure(t))
        }
        return {
          init: function(i) {
            o && (l = p(t), d = r.map(p), u = new ResizeObserver(n => {
              (c(o) || o(i, n)) && function(n) {
                for (const o of n) {
                  if (h) return;
                  const n = o.target === t,
                    s = r.indexOf(o.target),
                    a = n ? l : d[s];
                  if (f(p(n ? t : r[s]) - a) >= .5) {
                    i.reInit(), e.emit("resize");
                    break
                  }
                }
              }(n)
            }), n.requestAnimationFrame(() => {
              a.forEach(t => u.observe(t))
            }))
          },
          destroy: function() {
            h = !0, u && u.disconnect()
          }
        }
      }

      function C(t, e, n, r, i) {
        const o = i.measure(10),
          s = i.measure(50),
          a = T(.1, .99);
        let u = !1;

        function c() {
          return !u && !!t.reachedAny(n.get()) && !!t.reachedAny(e.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(i) {
            if (!c()) return;
            const u = t.reachedMin(e.get()) ? "min" : "max",
              l = f(t[u] - e.get()),
              d = n.get() - e.get(),
              h = a.constrain(l / s);
            n.subtract(d * h), !i && f(d) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(t) {
            u = !t
          }
        }
      }

      function A(t, e, n, r) {
        const i = e.min + .1,
          o = e.max + .1,
          {
            reachedMin: s,
            reachedMax: a
          } = T(i, o);
        return {
          loop: function(e) {
            if (! function(t) {
                return 1 === t ? a(n.get()) : -1 === t && s(n.get())
              }(e)) return;
            const i = t * (-1 * e);
            r.forEach(t => t.add(i))
          }
        }
      }

      function S(t) {
        let e = t;

        function n(t) {
          return a(t) ? t : t.get()
        }
        return {
          get: function() {
            return e
          },
          set: function(t) {
            e = n(t)
          },
          add: function(t) {
            e += n(t)
          },
          subtract: function(t) {
            e -= n(t)
          }
        }
      }

      function k(t, e) {
        const n = "x" === t.scroll ? function(t) {
            return `translate3d(${t}px,0px,0px)`
          } : function(t) {
            return `translate3d(0px,${t}px,0px)`
          },
          r = e.style;
        let i = null,
          o = !1;
        return {
          clear: function() {
            o || (r.transform = "", e.getAttribute("style") || e.removeAttribute("style"))
          },
          to: function(e) {
            if (o) return;
            const s = (a = t.direction(e), Math.round(100 * a) / 100);
            var a;
            s !== i && (r.transform = n(s), i = s)
          },
          toggleActive: function(t) {
            o = !t
          }
        }
      }

      function R(t, e, n, r, i, o, s, a, u) {
        const c = p(i),
          l = p(i).reverse(),
          f = function() {
            const t = s[0];
            return m(h(l, t), n, !1)
          }().concat(function() {
            const t = e - s[0] - 1;
            return m(h(c, t), -n, !0)
          }());

        function d(t, e) {
          return t.reduce((t, e) => t - i[e], e)
        }

        function h(t, e) {
          return t.reduce((t, n) => d(t, e) > 0 ? t.concat([n]) : t, [])
        }

        function m(i, s, c) {
          const l = function(t) {
            return o.map((n, i) => ({
              start: n - r[i] + .5 + t,
              end: n + e - .5 + t
            }))
          }(s);
          return i.map(e => {
            const r = c ? 0 : -n,
              i = c ? n : 0,
              o = c ? "end" : "start",
              s = l[e][o];
            return {
              index: e,
              loopPoint: s,
              slideLocation: S(-1),
              translate: k(t, u[e]),
              target: () => a.get() > s ? r : i
            }
          })
        }
        return {
          canLoop: function() {
            return f.every(({
              index: t
            }) => d(c.filter(e => e !== t), e) <= .1)
          },
          clear: function() {
            f.forEach(t => t.translate.clear())
          },
          loop: function() {
            f.forEach(t => {
              const {
                target: e,
                translate: n,
                slideLocation: r
              } = t, i = e();
              i !== r.get() && (n.to(i), r.set(i))
            })
          },
          loopPoints: f
        }
      }

      function P(t, e, n) {
        let r, i = !1;
        return {
          init: function(o) {
            n && (r = new MutationObserver(t => {
              i || (c(n) || n(o, t)) && function(t) {
                for (const n of t)
                  if ("childList" === n.type) {
                    o.reInit(), e.emit("slidesChanged");
                    break
                  }
              }(t)
            }), r.observe(t, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), i = !0
          }
        }
      }

      function F(t, e, n, r, i, o, s) {
        const {
          align: l,
          axis: b,
          direction: w,
          startIndex: F,
          loop: N,
          duration: I,
          dragFree: L,
          dragThreshold: z,
          inViewThreshold: j,
          slidesToScroll: B,
          skipSnaps: W,
          containScroll: U,
          watchResize: V,
          watchSlides: q,
          watchDrag: $,
          watchFocus: Y
        } = o, X = {
          measure: function(t) {
            const {
              offsetTop: e,
              offsetLeft: n,
              offsetWidth: r,
              offsetHeight: i
            } = t;
            return {
              top: e,
              right: n + r,
              bottom: e + i,
              left: n,
              width: r,
              height: i
            }
          }
        }, G = X.measure(e), H = n.map(X.measure), K = function(t, e) {
          const n = "rtl" === e,
            r = "y" === t,
            i = !r && n ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : n ? "right" : "left",
            endEdge: r ? "bottom" : n ? "left" : "right",
            measureSize: function(t) {
              const {
                height: e,
                width: n
              } = t;
              return r ? e : n
            },
            direction: function(t) {
              return t * i
            }
          }
        }(b, w), Q = K.measureSize(G), Z = function(t) {
          return {
            measure: function(e) {
              return t * (e / 100)
            }
          }
        }(Q), J = function(t, e) {
          const n = {
            start: function() {
              return 0
            },
            center: function(t) {
              return r(t) / 2
            },
            end: r
          };

          function r(t) {
            return e - t
          }
          return {
            measure: function(r, i) {
              return u(t) ? n[t](r) : t(e, r, i)
            }
          }
        }(l, Q), tt = !N && !!U, et = N || !!U, {
          slideSizes: nt,
          slideSizesWithGaps: rt,
          startGap: it,
          endGap: ot
        } = function(t, e, n, r, i, o) {
          const {
            measureSize: s,
            startEdge: a,
            endEdge: u
          } = t, c = n[0] && i, l = function() {
            if (!c) return 0;
            const t = n[0];
            return f(e[a] - t[a])
          }(), d = function() {
            if (!c) return 0;
            const t = o.getComputedStyle(m(r));
            return parseFloat(t.getPropertyValue(`margin-${u}`))
          }(), h = n.map(s), p = n.map((t, e, n) => {
            const r = !e,
              i = g(n, e);
            return r ? h[e] + l : i ? h[e] + d : n[e + 1][a] - t[a]
          }).map(f);
          return {
            slideSizes: h,
            slideSizesWithGaps: p,
            startGap: l,
            endGap: d
          }
        }(K, G, H, n, et, i), st = function(t, e, n, r, i, o, s, u, c) {
          const {
            startEdge: l,
            endEdge: d,
            direction: h
          } = t, g = a(n);
          return {
            groupSlides: function(t) {
              return g ? function(t, e) {
                return p(t).filter(t => t % e === 0).map(n => t.slice(n, n + e))
              }(t, n) : function(t) {
                return t.length ? p(t).reduce((n, a, p) => {
                  const g = m(n) || 0,
                    v = 0 === g,
                    y = a === _(t),
                    b = i[l] - o[g][l],
                    w = i[l] - o[a][d],
                    x = !r && v ? h(s) : 0,
                    T = f(w - (!r && y ? h(u) : 0) - (b + x));
                  return p && T > e + c && n.push(a), y && n.push(t.length), n
                }, []).map((e, n, r) => {
                  const i = Math.max(r[n - 1] || 0);
                  return t.slice(i, e)
                }) : []
              }(t)
            }
          }
        }(K, Q, B, N, G, H, it, ot, 2), {
          snaps: at,
          snapsAligned: ut
        } = function(t, e, n, r, i) {
          const {
            startEdge: o,
            endEdge: s
          } = t, {
            groupSlides: a
          } = i, u = a(r).map(t => m(t)[s] - t[0][o]).map(f).map(e.measure), c = r.map(t => n[o] - t[o]).map(t => -f(t)), l = a(c).map(t => t[0]).map((t, e) => t + u[e]);
          return {
            snaps: c,
            snapsAligned: l
          }
        }(K, J, G, H, st), ct = -m(at) + m(rt), {
          snapsContained: lt,
          scrollContainLimit: ft
        } = function(t, e, n, r) {
          const i = T(-e + t, 0),
            o = n.map((t, e) => {
              const {
                min: r,
                max: o
              } = i, s = i.constrain(t), u = !e, c = g(n, e);
              return u ? o : c || a(r, s) ? r : a(o, s) ? o : s
            }).map(t => parseFloat(t.toFixed(3))),
            s = function() {
              const t = o[0],
                e = m(o);
              return T(o.lastIndexOf(t), o.indexOf(e) + 1)
            }();

          function a(t, e) {
            return h(t, e) <= 1
          }
          return {
            snapsContained: function() {
              if (e <= t + 2) return [i.max];
              if ("keepSnaps" === r) return o;
              const {
                min: n,
                max: a
              } = s;
              return o.slice(n, a)
            }(),
            scrollContainLimit: s
          }
        }(Q, ct, ut, U), dt = tt ? lt : ut, {
          limit: ht
        } = function(t, e, n) {
          const r = e[0];
          return {
            limit: T(n ? r - t : m(e), r)
          }
        }(ct, dt, N), pt = E(_(dt), F, N), mt = pt.clone(), _t = p(n), gt = function(t, e, n, r) {
          const i = x(),
            o = 1e3 / 60;
          let s = null,
            a = 0,
            u = 0;

          function c(t) {
            if (!u) return;
            s || (s = t, n(), n());
            const i = t - s;
            for (s = t, a += i; a >= o;) n(), a -= o;
            r(a / o), u && (u = e.requestAnimationFrame(c))
          }

          function l() {
            e.cancelAnimationFrame(u), s = null, a = 0, u = 0
          }
          return {
            init: function() {
              i.add(t, "visibilitychange", () => {
                t.hidden && (s = null, a = 0)
              })
            },
            destroy: function() {
              l(), i.clear()
            },
            start: function() {
              u || (u = e.requestAnimationFrame(c))
            },
            stop: l,
            update: n,
            render: r
          }
        }(r, i, () => (({
          dragHandler: t,
          scrollBody: e,
          scrollBounds: n,
          options: {
            loop: r
          }
        }) => {
          r || n.constrain(t.pointerDown()), e.seek()
        })(kt), t => (({
          scrollBody: t,
          translate: e,
          location: n,
          offsetLocation: r,
          previousLocation: i,
          scrollLooper: o,
          slideLooper: s,
          dragHandler: a,
          animation: u,
          eventHandler: c,
          scrollBounds: l,
          options: {
            loop: f
          }
        }, d) => {
          const h = t.settled(),
            p = !l.shouldConstrain(),
            m = f ? h : h && p,
            _ = m && !a.pointerDown();
          _ && u.stop();
          const g = n.get() * d + i.get() * (1 - d);
          r.set(g), f && (o.loop(t.direction()), s.loop()), e.to(r.get()), _ && c.emit("settle"), m || c.emit("scroll")
        })(kt, t)), vt = dt[pt.get()], yt = S(vt), bt = S(vt), wt = S(vt), xt = S(vt), Tt = function(t, e, n, r, i) {
          let o = 0,
            s = 0,
            a = i,
            u = .68,
            c = t.get(),
            l = 0;

          function h(t) {
            return a = t, m
          }

          function p(t) {
            return u = t, m
          }
          const m = {
            direction: function() {
              return s
            },
            duration: function() {
              return a
            },
            velocity: function() {
              return o
            },
            seek: function() {
              const e = r.get() - t.get();
              let i = 0;
              return a ? (n.set(t), o += e / a, o *= u, c += o, t.add(o), i = c - l) : (o = 0, n.set(r), t.set(r), i = e), s = d(i), l = c, m
            },
            settled: function() {
              return f(r.get() - e.get()) < .001
            },
            useBaseFriction: function() {
              return p(.68)
            },
            useBaseDuration: function() {
              return h(i)
            },
            useFriction: p,
            useDuration: h
          };
          return m
        }(yt, wt, bt, xt, I), Et = function(t, e, n, r, i) {
          const {
            reachedAny: o,
            removeOffset: s,
            constrain: a
          } = r;

          function u(t) {
            return t.concat().sort((t, e) => f(t) - f(e))[0]
          }

          function c(e, r) {
            const i = [e, e + n, e - n];
            if (!t) return e;
            if (!r) return u(i);
            const o = i.filter(t => d(t) === r);
            return o.length ? u(o) : m(i) - n
          }
          return {
            byDistance: function(n, r) {
              const u = i.get() + n,
                {
                  index: l,
                  distance: d
                } = function(n) {
                  const r = t ? s(n) : a(n),
                    i = e.map((t, e) => ({
                      diff: c(t - r, 0),
                      index: e
                    })).sort((t, e) => f(t.diff) - f(e.diff)),
                    {
                      index: o
                    } = i[0];
                  return {
                    index: o,
                    distance: r
                  }
                }(u),
                h = !t && o(u);
              return !r || h ? {
                index: l,
                distance: n
              } : {
                index: l,
                distance: n + c(e[l] - d, 0)
              }
            },
            byIndex: function(t, n) {
              return {
                index: t,
                distance: c(e[t] - i.get(), n)
              }
            },
            shortcut: c
          }
        }(N, dt, ct, ht, xt), Ot = function(t, e, n, r, i, o, s) {
          function a(i) {
            const a = i.distance,
              u = i.index !== e.get();
            o.add(a), a && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), u && (n.set(e.get()), e.set(i.index), s.emit("select"))
          }
          return {
            distance: function(t, e) {
              a(i.byDistance(t, e))
            },
            index: function(t, n) {
              const r = e.clone().set(t);
              a(i.byIndex(r.get(), n))
            }
          }
        }(gt, pt, mt, Tt, Et, xt, s), Dt = function(t) {
          const {
            max: e,
            length: n
          } = t;
          return {
            get: function(t) {
              return n ? (t - e) / -n : 0
            }
          }
        }(ht), Mt = x(), Ct = function(t, e, n, r) {
          const i = {};
          let o, s = null,
            a = null,
            u = !1;
          return {
            init: function() {
              o = new IntersectionObserver(t => {
                u || (t.forEach(t => {
                  const n = e.indexOf(t.target);
                  i[n] = t
                }), s = null, a = null, n.emit("slidesInView"))
              }, {
                root: t.parentElement,
                threshold: r
              }), e.forEach(t => o.observe(t))
            },
            destroy: function() {
              o && o.disconnect(), u = !0
            },
            get: function(t = !0) {
              if (t && s) return s;
              if (!t && a) return a;
              const e = function(t) {
                return y(i).reduce((e, n) => {
                  const r = parseInt(n),
                    {
                      isIntersecting: o
                    } = i[r];
                  return (t && o || !t && !o) && e.push(r), e
                }, [])
              }(t);
              return t && (s = e), t || (a = e), e
            }
          }
        }(e, n, s, j), {
          slideRegistry: At
        } = function(t, e, n, r, i, o) {
          const {
            groupSlides: s
          } = i, {
            min: a,
            max: u
          } = r;
          return {
            slideRegistry: function() {
              const r = s(o),
                i = !t || "keepSnaps" === e;
              return 1 === n.length ? [o] : i ? r : r.slice(a, u).map((t, e, n) => {
                const r = !e,
                  i = g(n, e);
                return r ? v(m(n[0]) + 1) : i ? v(_(o) - m(n)[0] + 1, m(n)[0]) : t
              })
            }()
          }
        }(tt, U, dt, ft, st, _t), St = function(t, e, n, r, i, o, s, u) {
          const l = {
            passive: !0,
            capture: !0
          };
          let f = 0;

          function d(t) {
            "Tab" === t.code && (f = (new Date).getTime())
          }
          return {
            init: function(h) {
              u && (o.add(document, "keydown", d, !1), e.forEach((e, d) => {
                o.add(e, "focus", e => {
                  (c(u) || u(h, e)) && function(e) {
                    if ((new Date).getTime() - f > 10) return;
                    s.emit("slideFocusStart"), t.scrollLeft = 0;
                    const o = n.findIndex(t => t.includes(e));
                    a(o) && (i.useDuration(0), r.index(o, 0), s.emit("slideFocus"))
                  }(d)
                }, l)
              }))
            }
          }
        }(t, n, At, Ot, Tt, Mt, s, Y), kt = {
          ownerDocument: r,
          ownerWindow: i,
          eventHandler: s,
          containerRect: G,
          slideRects: H,
          animation: gt,
          axis: K,
          dragHandler: O(K, t, r, i, xt, D(K, i), yt, gt, Ot, Tt, Et, pt, s, Z, L, z, W, .68, $),
          eventStore: Mt,
          percentOfView: Z,
          index: pt,
          indexPrevious: mt,
          limit: ht,
          location: yt,
          offsetLocation: wt,
          previousLocation: bt,
          options: o,
          resizeHandler: M(e, s, i, n, K, V, X),
          scrollBody: Tt,
          scrollBounds: C(ht, wt, xt, Tt, Z),
          scrollLooper: A(ct, ht, wt, [yt, wt, bt, xt]),
          scrollProgress: Dt,
          scrollSnapList: dt.map(Dt.get),
          scrollSnaps: dt,
          scrollTarget: Et,
          scrollTo: Ot,
          slideLooper: R(K, Q, ct, nt, rt, at, dt, wt, n),
          slideFocus: St,
          slidesHandler: P(e, s, q),
          slidesInView: Ct,
          slideIndexes: _t,
          slideRegistry: At,
          slidesToScroll: st,
          target: xt,
          translate: k(K, e)
        };
        return kt
      }
      const N = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function I(t) {
        function e(t, e) {
          return b(t, e || {})
        }
        return {
          mergeOptions: e,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              i = y(r).filter(e => t.matchMedia(e).matches).map(t => r[t]).reduce((t, n) => e(t, n), {});
            return e(n, i)
          },
          optionsMediaQueries: function(e) {
            return e.map(t => y(t.breakpoints || {})).reduce((t, e) => t.concat(e), []).map(t.matchMedia)
          }
        }
      }

      function L(t, e, n) {
        const r = t.ownerDocument,
          i = r.defaultView,
          o = I(i),
          s = function(t) {
            let e = [];
            return {
              init: function(n, r) {
                return e = r.filter(({
                  options: e
                }) => !1 !== t.optionsAtMedia(e).active), e.forEach(e => e.init(n, t)), r.reduce((t, e) => Object.assign(t, {
                  [e.name]: e
                }), {})
              },
              destroy: function() {
                e = e.filter(t => t.destroy())
              }
            }
          }(o),
          a = x(),
          c = function() {
            let t, e = {};

            function n(t) {
              return e[t] || []
            }
            const r = {
              init: function(e) {
                t = e
              },
              emit: function(e) {
                return n(e).forEach(n => n(t, e)), r
              },
              off: function(t, i) {
                return e[t] = n(t).filter(t => t !== i), r
              },
              on: function(t, i) {
                return e[t] = n(t).concat([i]), r
              },
              clear: function() {
                e = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: l,
            optionsAtMedia: f,
            optionsMediaQueries: d
          } = o,
          {
            on: h,
            off: p,
            emit: m
          } = c,
          _ = C;
        let g, v, y, b, w = !1,
          T = l(N, L.globalOptions),
          E = l(T),
          O = [];

        function D(e) {
          const n = F(t, y, b, r, i, e, c);
          return e.loop && !n.slideLooper.canLoop() ? D(Object.assign({}, e, {
            loop: !1
          })) : n
        }

        function M(e, n) {
          w || (T = l(T, e), E = f(T), O = n || O, function() {
            const {
              container: e,
              slides: n
            } = E, r = u(e) ? t.querySelector(e) : e;
            y = r || t.children[0];
            const i = u(n) ? y.querySelectorAll(n) : n;
            b = [].slice.call(i || y.children)
          }(), g = D(E), d([T, ...O.map(({
            options: t
          }) => t)]).forEach(t => a.add(t, "change", C)), E.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(R), g.eventHandler.init(R), g.resizeHandler.init(R), g.slidesHandler.init(R), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(R), v = s.init(R, O)))
        }

        function C(t, e) {
          const n = k();
          A(), M(l({
            startIndex: n
          }, t), e), c.emit("reInit")
        }

        function A() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), s.destroy(), a.clear()
        }

        function S(t, e, n) {
          E.active && !w && (g.scrollBody.useBaseFriction().useDuration(!0 === e ? 0 : E.duration), g.scrollTo.index(t, n || 0))
        }

        function k() {
          return g.index.get()
        }
        const R = {
          canScrollNext: function() {
            return g.index.add(1).get() !== k()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== k()
          },
          containerNode: function() {
            return y
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            w || (w = !0, a.clear(), A(), c.emit("destroy"), c.clear())
          },
          off: p,
          on: h,
          emit: m,
          plugins: function() {
            return v
          },
          previousScrollSnap: function() {
            return g.indexPrevious.get()
          },
          reInit: _,
          rootNode: function() {
            return t
          },
          scrollNext: function(t) {
            S(g.index.add(1).get(), t, -1)
          },
          scrollPrev: function(t) {
            S(g.index.add(-1).get(), t, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: S,
          selectedScrollSnap: k,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return g.slidesInView.get()
          },
          slidesNotInView: function() {
            return g.slidesInView.get(!1)
          }
        };
        return M(e, n), setTimeout(() => c.emit("init"), 0), R
      }

      function z(t = {}, e = []) {
        const n = (0, r.useRef)(t),
          i = (0, r.useRef)(e),
          [a, u] = (0, r.useState)(),
          [c, l] = (0, r.useState)(),
          f = (0, r.useCallback)(() => {
            a && a.reInit(n.current, i.current)
          }, [a]);
        return (0, r.useEffect)(() => {
          o(n.current, t) || (n.current = t, f())
        }, [t, f]), (0, r.useEffect)(() => {
          (function(t, e) {
            if (t.length !== e.length) return !1;
            const n = s(t),
              r = s(e);
            return n.every((t, e) => o(t, r[e]))
          })(i.current, e) || (i.current = e, f())
        }, [e, f]), (0, r.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && c) {
            L.globalOptions = z.globalOptions;
            const t = L(c, n.current, i.current);
            return u(t), () => t.destroy()
          }
          u(void 0)
        }, [c, u]), [l, a]
      }
      L.globalOptions = void 0, z.globalOptions = void 0
    }
  }
]);