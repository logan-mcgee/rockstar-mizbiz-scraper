try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e32e2f36-18fc-48ef-a2f7-0600c36f5b4f", t._sentryDebugIdIdentifier = "sentry-dbid-e32e2f36-18fc-48ef-a2f7-0600c36f5b4f")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [7090], {
    87090: (t, e, r) => {
      function i(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function n(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
      }
      r.r(e), r.d(e, {
        Back: () => Zr,
        Bounce: () => Jr,
        CSSPlugin: () => mn,
        Circ: () => ei,
        Cubic: () => jr,
        Elastic: () => Hr,
        Expo: () => ti,
        Linear: () => qr,
        Power0: () => Br,
        Power1: () => Yr,
        Power2: () => Nr,
        Power3: () => Xr,
        Power4: () => Ur,
        Quad: () => Vr,
        Quart: () => Qr,
        Quint: () => Wr,
        Sine: () => Kr,
        SteppedEase: () => $r,
        Strong: () => Gr,
        TimelineLite: () => je,
        TimelineMax: () => je,
        TweenLite: () => rr,
        TweenMax: () => vn,
        default: () => gn,
        gsap: () => gn
      });
      var s, a, o, u, h, f, l, c, p, d, _, m, g, v, y, T, b, w = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        x = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        M = 1e8,
        k = 1e-8,
        O = 2 * Math.PI,
        C = O / 4,
        A = 0,
        D = Math.sqrt,
        E = Math.cos,
        P = Math.sin,
        S = function(t) {
          return "string" == typeof t
        },
        z = function(t) {
          return "function" == typeof t
        },
        R = function(t) {
          return "number" == typeof t
        },
        F = function(t) {
          return void 0 === t
        },
        I = function(t) {
          return "object" == typeof t
        },
        L = function(t) {
          return !1 !== t
        },
        B = function() {
          return "undefined" != typeof window
        },
        Y = function(t) {
          return z(t) || S(t)
        },
        N = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        X = Array.isArray,
        U = /random\([^)]+\)/g,
        q = /,\s*/g,
        V = /(?:-?\.?\d|\.)+/gi,
        j = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Q = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        W = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        G = /[+-]=-?[.\d]+/,
        H = /[^,'"\[\]\s]+/gi,
        Z = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        $ = {},
        J = {},
        K = function(t) {
          return (J = Dt(t, $)) && Dr
        },
        tt = function(t, e) {
          return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        et = function(t, e) {
          return !e && console.warn(t)
        },
        rt = function(t, e) {
          return t && ($[t] = e) && J && (J[t] = e) || $
        },
        it = function() {
          return 0
        },
        nt = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        st = {
          suppressEvents: !0,
          kill: !1
        },
        at = {
          suppressEvents: !0
        },
        ot = {},
        ut = [],
        ht = {},
        ft = {},
        lt = {},
        ct = 30,
        pt = [],
        dt = "",
        _t = function(t) {
          var e, r, i = t[0];
          if (I(i) || z(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = pt.length; r-- && !pt[r].targetTest(i););
            e = pt[r]
          }
          for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new qe(t[r], e))) || t.splice(r, 1);
          return t
        },
        mt = function(t) {
          return t._gsap || _t(ae(t))[0]._gsap
        },
        gt = function(t, e, r) {
          return (r = t[e]) && z(r) ? t[e]() : F(r) && t.getAttribute && t.getAttribute(e) || r
        },
        vt = function(t, e) {
          return (t = t.split(",")).forEach(e) || t
        },
        yt = function(t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        Tt = function(t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        bt = function(t, e) {
          var r = e.charAt(0),
            i = parseFloat(e.substr(2));
          return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        },
        wt = function(t, e) {
          for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
          return i < r
        },
        xt = function() {
          var t, e, r = ut.length,
            i = ut.slice(0);
          for (ht = {}, ut.length = 0, t = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        Mt = function(t) {
          return !!(t._initted || t._startAt || t.add)
        },
        kt = function(t, e, r, i) {
          ut.length && !a && xt(), t.render(e, r, i || !!(a && e < 0 && Mt(t))), ut.length && !a && xt()
        },
        Ot = function(t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(H).length < 2 ? e : S(t) ? t.trim() : t
        },
        Ct = function(t) {
          return t
        },
        At = function(t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t
        },
        Dt = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
        },
        Et = function t(e, r) {
          for (var i in r) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = I(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
          return e
        },
        Pt = function(t, e) {
          var r, i = {};
          for (r in t) r in e || (i[r] = t[r]);
          return i
        },
        St = function(t) {
          var e, r = t.parent || u,
            i = t.keyframes ? (e = X(t.keyframes), function(t, r) {
              for (var i in r) i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
            }) : At;
          if (L(t.inherit))
            for (; r;) i(t, r.vars.defaults), r = r.parent || r._dp;
          return t
        },
        zt = function(t, e, r, i, n) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var s, a = t[i];
          if (n)
            for (s = e[n]; a && a[n] > s;) a = a._prev;
          return a ? (e._next = a._next, a._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = a, e.parent = e._dp = t, e
        },
        Rt = function(t, e, r, i) {
          void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
          var n = e._prev,
            s = e._next;
          n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
        },
        Ft = function(t, e) {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        It = function(t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
          return t
        },
        Lt = function(t, e, r, i) {
          return t._startAt && (a ? t._startAt.revert(st) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
        },
        Bt = function t(e) {
          return !e || e._ts && t(e.parent)
        },
        Yt = function(t) {
          return t._repeat ? Nt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Nt = function(t, e) {
          var r = Math.floor(t = Tt(t / e));
          return t && r === t ? r - 1 : r
        },
        Xt = function(t, e) {
          return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Ut = function(t) {
          return t._end = Tt(t._start + (t._tDur / Math.abs(t._ts || t._rts || k) || 0))
        },
        qt = function(t, e) {
          var r = t._dp;
          return r && r.smoothChildTiming && t._ts && (t._start = Tt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ut(t), r._dirty || It(r, t)), t
        },
        Vt = function(t, e) {
          var r;
          if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Xt(t.rawTime(), e), (!e._dur || re(0, e.totalDuration(), r) - e._tTime > k) && e.render(r, !0)), It(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (r = t; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -1e-8
          }
        },
        jt = function(t, e, r, i) {
          return e.parent && Ft(e), e._start = Tt((R(r) ? r : r || t !== u ? Kt(t, r, e) : t._time) + e._delay), e._end = Tt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), zt(t, e, "_first", "_last", t._sort ? "_start" : 0), Ht(e) || (t._recent = e), i || Vt(t, e), t._ts < 0 && qt(t, t._tTime), t
        },
        Qt = function(t, e) {
          return ($.ScrollTrigger || tt("scrollTrigger", e)) && $.ScrollTrigger.create(e, t)
        },
        Wt = function(t, e, r, i, n) {
          return $e(t, e, n), t._initted ? !r && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== Ee.frame ? (ut.push(t), t._lazy = [n, i], 1) : void 0 : 1
        },
        Gt = function t(e) {
          var r = e.parent;
          return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        },
        Ht = function(t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
        },
        Zt = function(t, e, r, i) {
          var n = t._repeat,
            s = Tt(e) || 0,
            a = t._tTime / t._tDur;
          return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : Tt(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && qt(t, t._tTime = t._tDur * a), t.parent && Ut(t), r || It(t.parent, t), t
        },
        $t = function(t) {
          return t instanceof je ? It(t) : Zt(t, t._dur)
        },
        Jt = {
          _start: 0,
          endTime: it,
          totalDuration: it
        },
        Kt = function t(e, r, i) {
          var n, s, a, o = e.labels,
            u = e._recent || Jt,
            h = e.duration() >= M ? u.endTime(!1) : e._dur;
          return S(r) && (isNaN(r) || r in o) ? (s = r.charAt(0), a = "%" === r.substr(-1), n = r.indexOf("="), "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")), ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h), o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)), a && i && (s = s / 100 * (X(i) ? i[0] : i).totalDuration()), n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
        },
        te = function(t, e, r) {
          var i, n, s = R(e[1]),
            a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[a];
          if (s && (o.duration = e[1]), o.parent = r, t) {
            for (i = o, n = r; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = L(n.vars.inherit) && n.parent;
            o.immediateRender = L(i.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
          }
          return new rr(e[0], o, e[a + 1])
        },
        ee = function(t, e) {
          return t || 0 === t ? e(t) : e
        },
        re = function(t, e, r) {
          return r < t ? t : r > e ? e : r
        },
        ie = function(t, e) {
          return S(t) && (e = Z.exec(t)) ? e[1] : ""
        },
        ne = [].slice,
        se = function(t, e) {
          return t && I(t) && "length" in t && (!e && !t.length || t.length - 1 in t && I(t[0])) && !t.nodeType && t !== h
        },
        ae = function(t, e, r) {
          return o && !e && o.selector ? o.selector(t) : !S(t) || r || !f && Pe() ? X(t) ? function(t, e, r) {
            return void 0 === r && (r = []), t.forEach(function(t) {
              var i;
              return S(t) && !e || se(t, 1) ? (i = r).push.apply(i, ae(t)) : r.push(t)
            }) || r
          }(t, r) : se(t) ? ne.call(t, 0) : t ? [t] : [] : ne.call((e || l).querySelectorAll(t), 0)
        },
        oe = function(t) {
          return t = ae(t)[0] || et("Invalid scope") || {},
            function(e) {
              var r = t.current || t.nativeElement || t;
              return ae(e, r.querySelectorAll ? r : r === t ? et("Invalid scope") || l.createElement("div") : t)
            }
        },
        ue = function(t) {
          return t.sort(function() {
            return .5 - Math.random()
          })
        },
        he = function(t) {
          if (z(t)) return t;
          var e = I(t) ? t : {
              each: t
            },
            r = Be(e.ease),
            i = e.from || 0,
            n = parseFloat(e.base) || 0,
            s = {},
            a = i > 0 && i < 1,
            o = isNaN(i) || a,
            u = e.axis,
            h = i,
            f = i;
          return S(i) ? h = f = {
              center: .5,
              edges: .5,
              end: 1
            } [i] || 0 : !a && o && (h = i[0], f = i[1]),
            function(t, a, l) {
              var c, p, d, _, m, g, v, y, T, b = (l || e).length,
                w = s[b];
              if (!w) {
                if (!(T = "auto" === e.grid ? 0 : (e.grid || [1, M])[1])) {
                  for (v = -M; v < (v = l[T++].getBoundingClientRect().left) && T < b;);
                  T < b && T--
                }
                for (w = s[b] = [], c = o ? Math.min(T, b) * h - .5 : i % T, p = T === M ? 0 : o ? b * f / T - .5 : i / T | 0, v = 0, y = M, g = 0; g < b; g++) d = g % T - c, _ = p - (g / T | 0), w[g] = m = u ? Math.abs("y" === u ? _ : d) : D(d * d + _ * _), m > v && (v = m), m < y && (y = m);
                "random" === i && ue(w), w.max = v - y, w.min = y, w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (T > b ? b - 1 : u ? "y" === u ? b / T : T : Math.max(T, b / T)) || 0) * ("edges" === i ? -1 : 1), w.b = b < 0 ? n - b : n, w.u = ie(e.amount || e.each) || 0, r = r && b < 0 ? Ie(r) : r
              }
              return b = (w[t] - w.min) / w.max || 0, Tt(w.b + (r ? r(b) : b) * w.v) + w.u
            }
        },
        fe = function(t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function(r) {
            var i = Tt(Math.round(parseFloat(r) / t) * t * e);
            return (i - i % 1) / e + (R(r) ? 0 : ie(r))
          }
        },
        le = function(t, e) {
          var r, i, n = X(t);
          return !n && I(t) && (r = n = t.radius || M, t.values ? (t = ae(t.values), (i = !R(t[0])) && (r *= r)) : t = fe(t.increment)), ee(e, n ? z(t) ? function(e) {
            return i = t(e), Math.abs(i - e) <= r ? i : e
          } : function(e) {
            for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = M, h = 0, f = t.length; f--;)(n = i ? (n = t[f].x - a) * n + (s = t[f].y - o) * s : Math.abs(t[f] - a)) < u && (u = n, h = f);
            return h = !r || u <= r ? t[h] : e, i || h === e || R(e) ? h : h + ie(e)
          } : fe(t))
        },
        ce = function(t, e, r, i) {
          return ee(X(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return X(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
          })
        },
        pe = function(t, e, r) {
          return ee(r, function(r) {
            return t[~~e(r)]
          })
        },
        de = function(t) {
          return t.replace(U, function(t) {
            var e = t.indexOf("[") + 1,
              r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(q);
            return ce(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
          })
        },
        _e = function(t, e, r, i, n) {
          var s = e - t,
            a = i - r;
          return ee(n, function(e) {
            return r + ((e - t) / s * a || 0)
          })
        },
        me = function(t, e, r) {
          var i, n, s, a = t.labels,
            o = M;
          for (i in a)(n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i, o = n);
          return s
        },
        ge = function(t, e, r) {
          var i, n, s, a = t.vars,
            u = a[e],
            h = o,
            f = t._ctx;
          if (u) return i = a[e + "Params"], n = a.callbackScope || t, r && ut.length && xt(), f && (o = f), s = i ? u.apply(n, i) : u.call(n), o = h, s
        },
        ve = function(t) {
          return Ft(t), t.scrollTrigger && t.scrollTrigger.kill(!!a), t.progress() < 1 && ge(t, "onInterrupt"), t
        },
        ye = [],
        Te = function(t) {
          if (t)
            if (t = !t.name && t.default || t, B() || t.headless) {
              var e = t.name,
                r = z(t),
                i = e && !r && t.init ? function() {
                  this._props = []
                } : t,
                n = {
                  init: it,
                  render: lr,
                  add: He,
                  kill: pr,
                  modifier: cr,
                  rawVars: 0
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: or,
                  aliases: {},
                  register: 0
                };
              if (Pe(), t !== i) {
                if (ft[e]) return;
                At(i, At(Pt(t, n), s)), Dt(i.prototype, Dt(n, Pt(t, s))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ot[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
              }
              rt(e, i), t.register && t.register(Dr, i, mr)
            } else ye.push(t)
        },
        be = 255,
        we = {
          aqua: [0, be, be],
          lime: [0, be, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, be],
          navy: [0, 0, 128],
          white: [be, be, be],
          olive: [128, 128, 0],
          yellow: [be, be, 0],
          orange: [be, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [be, 0, 0],
          pink: [be, 192, 203],
          cyan: [0, be, be],
          transparent: [be, be, be, 0]
        },
        xe = function(t, e, r) {
          return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * be + .5 | 0
        },
        Me = function(t, e, r) {
          var i, n, s, a, o, u, h, f, l, c, p = t ? R(t) ? [t >> 16, t >> 8 & be, t & be] : 0 : we.black;
          if (!p) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), we[t]) p = we[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (i = t.charAt(1), n = t.charAt(2), s = t.charAt(3), t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & be, p & be, parseInt(t.substr(7), 16) / 255];
              p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & be, t & be]
            } else if ("hsl" === t.substr(0, 3))
              if (p = c = t.match(V), e) {
                if (~t.indexOf("=")) return p = t.match(j), r && p.length < 4 && (p[3] = 1), p
              } else a = +p[0] % 360 / 360, o = +p[1] / 100, i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), p.length > 3 && (p[3] *= 1), p[0] = xe(a + 1 / 3, i, n), p[1] = xe(a, i, n), p[2] = xe(a - 1 / 3, i, n);
            else p = t.match(V) || we.transparent;
            p = p.map(Number)
          }
          return e && !c && (i = p[0] / be, n = p[1] / be, s = p[2] / be, u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2, h === f ? a = o = 0 : (l = h - f, o = u > .5 ? l / (2 - h - f) : l / (h + f), a = h === i ? (n - s) / l + (n < s ? 6 : 0) : h === n ? (s - i) / l + 2 : (i - n) / l + 4, a *= 60), p[0] = ~~(a + .5), p[1] = ~~(100 * o + .5), p[2] = ~~(100 * u + .5)), r && p.length < 4 && (p[3] = 1), p
        },
        ke = function(t) {
          var e = [],
            r = [],
            i = -1;
          return t.split(Ce).forEach(function(t) {
            var n = t.match(Q) || [];
            e.push.apply(e, n), r.push(i += n.length + 1)
          }), e.c = r, e
        },
        Oe = function(t, e, r) {
          var i, n, s, a, o = "",
            u = (t + o).match(Ce),
            h = e ? "hsla(" : "rgba(",
            f = 0;
          if (!u) return t;
          if (u = u.map(function(t) {
              return (t = Me(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (s = ke(t), (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(Ce, "1").split(Q)).length - 1; f < a; f++) o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
          if (!n)
            for (a = (n = t.split(Ce)).length - 1; f < a; f++) o += n[f] + u[f];
          return o + n[a]
        },
        Ce = function() {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in we) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        Ae = /hsl[a]?\(/,
        De = function(t) {
          var e, r = t.join(" ");
          if (Ce.lastIndex = 0, Ce.test(r)) return e = Ae.test(r), t[1] = Oe(t[1], e), t[0] = Oe(t[0], e, ke(t[1])), !0
        },
        Ee = function() {
          var t, e, r, i, n, s, a = Date.now,
            o = 500,
            u = 33,
            p = a(),
            d = p,
            m = 1e3 / 240,
            g = m,
            v = [],
            y = function r(h) {
              var f, l, c, _, y = a() - d,
                T = !0 === h;
              if ((y > o || y < 0) && (p += y - u), ((f = (c = (d += y) - p) - g) > 0 || T) && (_ = ++i.frame, n = c - 1e3 * i.time, i.time = c /= 1e3, g += f + (f >= m ? 4 : m - f), l = 1), T || (t = e(r)), l)
                for (s = 0; s < v.length; s++) v[s](c, n, _, h)
            };
          return i = {
            time: 0,
            frame: 0,
            tick: function() {
              y(!0)
            },
            deltaRatio: function(t) {
              return n / (1e3 / (t || 60))
            },
            wake: function() {
              c && (!f && B() && (h = f = window, l = h.document || {}, $.gsap = Dr, (h.gsapVersions || (h.gsapVersions = [])).push(Dr.version), K(J || h.GreenSockGlobals || !h.gsap && h || {}), ye.forEach(Te)), r = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, t && i.sleep(), e = r || function(t) {
                return setTimeout(t, g - 1e3 * i.time + 1 | 0)
              }, _ = 1, y(2))
            },
            sleep: function() {
              (r ? cancelAnimationFrame : clearTimeout)(t), _ = 0, e = it
            },
            lagSmoothing: function(t, e) {
              o = t || 1 / 0, u = Math.min(e || 33, o)
            },
            fps: function(t) {
              m = 1e3 / (t || 240), g = 1e3 * i.time + m
            },
            add: function(t, e, r) {
              var n = e ? function(e, r, s, a) {
                t(e, r, s, a), i.remove(n)
              } : t;
              return i.remove(t), v[r ? "unshift" : "push"](n), Pe(), n
            },
            remove: function(t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--
            },
            _listeners: v
          }
        }(),
        Pe = function() {
          return !_ && Ee.wake()
        },
        Se = {},
        ze = /^[\d.\-M][\d.\-,\s]/,
        Re = /["']/g,
        Fe = function(t) {
          for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++) r = s[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[a] = isNaN(i) ? i.replace(Re, "").trim() : +i, a = r.substr(e + 1).trim();
          return n
        },
        Ie = function(t) {
          return function(e) {
            return 1 - t(1 - e)
          }
        },
        Le = function t(e, r) {
          for (var i, n = e._first; n;) n instanceof je ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease, n._ease = n._yEase, n._yEase = i, n._yoyo = r)), n = n._next
        },
        Be = function(t, e) {
          return t && (z(t) ? t : Se[t] || function(t) {
            var e, r, i, n, s = (t + "").split("("),
              a = Se[s[0]];
            return a && s.length > 1 && a.config ? a.config.apply(null, ~t.indexOf("{") ? [Fe(s[1])] : (e = t, r = e.indexOf("(") + 1, i = e.indexOf(")"), n = e.indexOf("(", r), e.substring(r, ~n && n < i ? e.indexOf(")", i + 1) : i)).split(",").map(Ot)) : Se._CE && ze.test(t) ? Se._CE("", t) : a
          }(t)) || e
        },
        Ye = function(t, e, r, i) {
          void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
          }), void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
          });
          var n, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
          };
          return vt(t, function(t) {
            for (var e in Se[t] = $[t] = s, Se[n = t.toLowerCase()] = r, s) Se[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Se[t + "." + e] = s[e]
          }), s
        },
        Ne = function(t) {
          return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
          }
        },
        Xe = function t(e, r, i) {
          var n = r >= 1 ? r : 1,
            s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1),
            a = s / O * (Math.asin(1 / n) || 0),
            o = function(t) {
              return 1 === t ? 1 : n * Math.pow(2, -10 * t) * P((t - a) * s) + 1
            },
            u = "out" === e ? o : "in" === e ? function(t) {
              return 1 - o(1 - t)
            } : Ne(o);
          return s = O / s, u.config = function(r, i) {
            return t(e, r, i)
          }, u
        },
        Ue = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var i = function(t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            n = "out" === e ? i : "in" === e ? function(t) {
              return 1 - i(1 - t)
            } : Ne(i);
          return n.config = function(r) {
            return t(e, r)
          }, n
        };
      vt("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Ye(t + ",Power" + (r - 1), e ? function(t) {
          return Math.pow(t, r)
        } : function(t) {
          return t
        }, function(t) {
          return 1 - Math.pow(1 - t, r)
        }, function(t) {
          return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
      }), Se.Linear.easeNone = Se.none = Se.Linear.easeIn, Ye("Elastic", Xe("in"), Xe("out"), Xe()), m = 7.5625, y = 2 * (v = 1 / (g = 2.75)), T = 2.5 * v, Ye("Bounce", function(t) {
        return 1 - b(1 - t)
      }, b = function(t) {
        return t < v ? m * t * t : t < y ? m * Math.pow(t - 1.5 / g, 2) + .75 : t < T ? m * (t -= 2.25 / g) * t + .9375 : m * Math.pow(t - 2.625 / g, 2) + .984375
      }), Ye("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
      }), Ye("Circ", function(t) {
        return -(D(1 - t * t) - 1)
      }), Ye("Sine", function(t) {
        return 1 === t ? 1 : 1 - E(t * C)
      }), Ye("Back", Ue("in"), Ue("out"), Ue()), Se.SteppedEase = Se.steps = $.SteppedEase = {
        config: function(t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
            i = t + (e ? 0 : 1),
            n = e ? 1 : 0;
          return function(t) {
            return ((i * re(0, .99999999, t) | 0) + n) * r
          }
        }
      }, x.ease = Se["quad.out"], vt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return dt += t + "," + t + "Params,"
      });
      var qe = function(t, e) {
          this.id = A++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : gt, this.set = e ? e.getSetter : or
        },
        Ve = function() {
          function t(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Zt(this, +t.duration, 1, 1), this.data = t.data, o && (this._ctx = o, o.data.push(this)), _ || Ee.wake()
          }
          var e = t.prototype;
          return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
          }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
          }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, Zt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
          }, e.totalTime = function(t, e) {
            if (Pe(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (qt(this, t), !r._dp || r.parent || Vt(r, this); r && r.parent;) r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && jt(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === k || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), kt(this, t, e)), this
          }, e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Yt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
          }, e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
          }, e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Yt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
          }, e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Nt(this._tTime, r) + 1 : 1
          }, e.timeScale = function(t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var r = this.parent && this._ts ? Xt(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(re(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), Ut(this),
              function(t) {
                for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                return t
              }(this)
          }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== k && (this._tTime -= k)))), this) : this._ps
          }, e.startTime = function(t) {
            if (arguments.length) {
              this._start = Tt(t);
              var e = this.parent || this._dp;
              return e && (e._sort || !this.parent) && jt(e, this, this._start - this._delay), this
            }
            return this._start
          }, e.endTime = function(t) {
            return this._start + (L(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
          }, e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Xt(e.rawTime(t), this) : this._tTime : this._tTime
          }, e.revert = function(t) {
            void 0 === t && (t = at);
            var e = a;
            return a = t, Mt(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), a = e, this
          }, e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : r
          }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, $t(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
          }, e.repeatDelay = function(t) {
            if (arguments.length) {
              var e = this._time;
              return this._rDelay = t, $t(this), e ? this.time(e) : this
            }
            return this._rDelay
          }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
          }, e.seek = function(t, e) {
            return this.totalTime(Kt(this, t), L(e))
          }, e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, L(e)), this._dur || (this._zTime = -1e-8), this
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
              r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - k))
          }, e.eventCallback = function(t, e, r) {
            var i = this.vars;
            return arguments.length > 1 ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
          }, e.then = function(t) {
            var e = this,
              r = e._prom;
            return new Promise(function(i) {
              var n = z(t) ? t : Ct,
                s = function() {
                  var t = e.then;
                  e.then = null, r && r(), z(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
                };
              e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
            })
          }, e.kill = function() {
            ve(this)
          }, t
        }();
      At(Ve.prototype, {
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
      var je = function(t) {
        function e(e, r) {
          var n;
          return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = L(e.sortChildren), u && jt(e.parent || u, i(n), r), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Qt(i(n), e.scrollTrigger), n
        }
        n(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
          return te(0, arguments, this), this
        }, r.from = function(t, e, r) {
          return te(1, arguments, this), this
        }, r.fromTo = function(t, e, r, i) {
          return te(2, arguments, this), this
        }, r.set = function(t, e, r) {
          return e.duration = 0, e.parent = this, St(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new rr(t, e, Kt(this, r), 1), this
        }, r.call = function(t, e, r) {
          return jt(this, rr.delayedCall(0, t, e), r)
        }, r.staggerTo = function(t, e, r, i, n, s, a) {
          return r.duration = e, r.stagger = r.stagger || i, r.onComplete = s, r.onCompleteParams = a, r.parent = this, new rr(t, r, Kt(this, n)), this
        }, r.staggerFrom = function(t, e, r, i, n, s, a) {
          return r.runBackwards = 1, St(r).immediateRender = L(r.immediateRender), this.staggerTo(t, e, r, i, n, s, a)
        }, r.staggerFromTo = function(t, e, r, i, n, s, a, o) {
          return i.startAt = r, St(i).immediateRender = L(i.immediateRender), this.staggerTo(t, e, i, n, s, a, o)
        }, r.render = function(t, e, r) {
          var i, n, s, o, h, f, l, c, p, d, _, m, g = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            y = this._dur,
            T = t <= 0 ? 0 : Tt(t),
            b = this._zTime < 0 != t < 0 && (this._initted || !y);
          if (this !== u && T > v && t >= 0 && (T = v), T !== this._tTime || r || b) {
            if (g !== this._time && y && (T += this._time - g, t += this._time - g), i = T, p = this._start, f = !(c = this._ts), b && (y || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (_ = this._yoyo, h = y + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, r);
              if (i = Tt(T % h), T === v ? (o = this._repeat, i = y) : ((o = ~~(d = Tt(T / h))) && o === d && (i = y, o--), i > y && (i = y)), d = Nt(this._tTime, h), !g && this._tTime && d !== o && this._tTime - d * h - this._dur <= 0 && (d = o), _ && 1 & o && (i = y - i, m = 1), o !== d && !this._lock) {
                var w = _ && 1 & d,
                  x = w === (_ && 1 & o);
                if (o < d && (w = !w), g = w ? 0 : T % y ? y : T, this._lock = 1, this.render(g || (m ? 0 : Tt(o * h)), e, !y)._lock = 0, this._tTime = T, !e && this.parent && ge(this, "onRepeat"), this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1, d = o), g && g !== this._time || f !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (y = this._dur, v = this._tDur, x && (this._lock = 2, g = w ? y : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !m && this.invalidate()), this._lock = 0, !this._ts && !f) return this;
                Le(this, m)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, r) {
                var i;
                if (r > e)
                  for (i = t._first; i && i._start <= r;) {
                    if ("isPause" === i.data && i._start > e) return i;
                    i = i._next
                  } else
                    for (i = t._last; i && i._start >= r;) {
                      if ("isPause" === i.data && i._start < e) return i;
                      i = i._prev
                    }
              }(this, Tt(g), Tt(i)), l && (T -= i - (i = l._start))), this._tTime = T, this._time = i, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && T && y && !e && !d && (ge(this, "onStart"), this._tTime !== T)) return this;
            if (i >= g && t >= 0)
              for (n = this._first; n;) {
                if (s = n._next, (n._act || i >= n._start) && n._ts && l !== n) {
                  if (n.parent !== this) return this.render(t, e, r);
                  if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !f) {
                    l = 0, s && (T += this._zTime = -1e-8);
                    break
                  }
                }
                n = s
              } else {
                n = this._last;
                for (var M = t < 0 ? t : i; n;) {
                  if (s = n._prev, (n._act || M <= n._end) && n._ts && l !== n) {
                    if (n.parent !== this) return this.render(t, e, r);
                    if (n.render(n._ts > 0 ? (M - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (M - n._start) * n._ts, e, r || a && Mt(n)), i !== this._time || !this._ts && !f) {
                      l = 0, s && (T += this._zTime = M ? -1e-8 : k);
                      break
                    }
                  }
                  n = s
                }
              }
            if (l && !e && (this.pause(), l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1, this._ts)) return this._start = p, Ut(this), this.render(t, e, r);
            this._onUpdate && !e && ge(this, "onUpdate", !0), (T === v && this._tTime >= this.totalDuration() || !T && g) && (p !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !y) && (T === v && this._ts > 0 || !T && this._ts < 0) && Ft(this, 1), e || t < 0 && !g || !T && !g && v || (ge(this, T === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(T < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }, r.add = function(t, e) {
          var r = this;
          if (R(e) || (e = Kt(this, e, t)), !(t instanceof Ve)) {
            if (X(t)) return t.forEach(function(t) {
              return r.add(t, e)
            }), this;
            if (S(t)) return this.addLabel(t, e);
            if (!z(t)) return this;
            t = rr.delayedCall(0, t)
          }
          return this !== t ? jt(this, t, e) : this
        }, r.getChildren = function(t, e, r, i) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -M);
          for (var n = [], s = this._first; s;) s._start >= i && (s instanceof rr ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))), s = s._next;
          return n
        }, r.getById = function(t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
            if (e[r].vars.id === t) return e[r]
        }, r.remove = function(t) {
          return S(t) ? this.removeLabel(t) : z(t) ? this.killTweensOf(t) : (t.parent === this && Rt(this, t), t === this._recent && (this._recent = this._last), It(this))
        }, r.totalTime = function(e, r) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Tt(Ee.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, r), this._forcing = 0, this) : this._tTime
        }, r.addLabel = function(t, e) {
          return this.labels[t] = Kt(this, e), this
        }, r.removeLabel = function(t) {
          return delete this.labels[t], this
        }, r.addPause = function(t, e, r) {
          var i = rr.delayedCall(0, e || it, r);
          return i.data = "isPause", this._hasPause = 1, jt(this, i, Kt(this, t))
        }, r.removePause = function(t) {
          var e = this._first;
          for (t = Kt(this, t); e;) e._start === t && "isPause" === e.data && Ft(e), e = e._next
        }, r.killTweensOf = function(t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--;) Qe !== i[n] && i[n].kill(t, e);
          return this
        }, r.getTweensOf = function(t, e) {
          for (var r, i = [], n = ae(t), s = this._first, a = R(e); s;) s instanceof rr ? wt(s._targets, n) && (a ? (!Qe || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r), s = s._next;
          return i
        }, r.tweenTo = function(t, e) {
          e = e || {};
          var r, i = this,
            n = Kt(i, t),
            s = e,
            a = s.startAt,
            o = s.onStart,
            u = s.onStartParams,
            h = s.immediateRender,
            f = rr.to(i, At({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: n,
              overwrite: "auto",
              duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || k,
              onStart: function() {
                if (i.pause(), !r) {
                  var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                  f._dur !== t && Zt(f, t, 0, 1).render(f._time, !0, !0), r = 1
                }
                o && o.apply(f, u || [])
              }
            }, e));
          return h ? f.render(0) : f
        }, r.tweenFromTo = function(t, e, r) {
          return this.tweenTo(e, At({
            startAt: {
              time: Kt(this, t)
            }
          }, r))
        }, r.recent = function() {
          return this._recent
        }, r.nextLabel = function(t) {
          return void 0 === t && (t = this._time), me(this, Kt(this, t))
        }, r.previousLabel = function(t) {
          return void 0 === t && (t = this._time), me(this, Kt(this, t), 1)
        }, r.currentLabel = function(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + k)
        }, r.shiftChildren = function(t, e, r) {
          void 0 === r && (r = 0);
          var i, n = this._first,
            s = this.labels;
          for (t = Tt(t); n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
          if (e)
            for (i in s) s[i] >= r && (s[i] += t);
          return It(this)
        }, r.invalidate = function(e) {
          var r = this._first;
          for (this._lock = 0; r;) r.invalidate(e), r = r._next;
          return t.prototype.invalidate.call(this, e)
        }, r.clear = function(t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), It(this)
        }, r.totalDuration = function(t) {
          var e, r, i, n = 0,
            s = this,
            a = s._last,
            o = M;
          if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
          if (s._dirty) {
            for (i = s.parent; a;) e = a._prev, a._dirty && a.totalDuration(), (r = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1, jt(s, a, r - a._delay, 1)._lock = 0) : o = r, r < 0 && a._ts && (n -= r, (!i && !s._dp || i && i.smoothChildTiming) && (s._start += Tt(r / s._ts), s._time -= r, s._tTime -= r), s.shiftChildren(-r, !1, -Infinity), o = 0), a._end > n && a._ts && (n = a._end), a = e;
            Zt(s, s === u && s._time > n ? s._time : n, 1, 1), s._dirty = 0
          }
          return s._tDur
        }, e.updateRoot = function(t) {
          if (u._ts && (kt(u, Xt(t, u)), p = Ee.frame), Ee.frame >= ct) {
            ct += w.autoSleep || 120;
            var e = u._first;
            if ((!e || !e._ts) && w.autoSleep && Ee._listeners.length < 2) {
              for (; e && !e._ts;) e = e._next;
              e || Ee.sleep()
            }
          }
        }, e
      }(Ve);
      At(je.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      var Qe, We, Ge = function(t, e, r, i, n, s, a) {
          var o, u, h, f, l, c, p, d, _ = new mr(this._pt, t, e, 0, 1, fr, null, n),
            m = 0,
            g = 0;
          for (_.b = r, _.e = i, r += "", (p = ~(i += "").indexOf("random(")) && (i = de(i)), s && (s(d = [r, i], t, e), r = d[0], i = d[1]), u = r.match(W) || []; o = W.exec(i);) f = o[0], l = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1), f !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
            _next: _._pt,
            p: l || 1 === g ? l : ",",
            s: c,
            c: "=" === f.charAt(1) ? bt(c, f) - c : parseFloat(f) - c,
            m: h && h < 4 ? Math.round : 0
          }, m = W.lastIndex);
          return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = a, (G.test(i) || p) && (_.e = 0), this._pt = _, _
        },
        He = function(t, e, r, i, n, s, a, o, u, h) {
          z(i) && (i = i(n || 0, t, s));
          var f, l = t[e],
            c = "get" !== r ? r : z(l) ? u ? t[e.indexOf("set") || !z(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l,
            p = z(l) ? u ? sr : nr : ir;
          if (S(i) && (~i.indexOf("random(") && (i = de(i)), "=" === i.charAt(1) && ((f = bt(c, i) + (ie(c) || 0)) || 0 === f) && (i = f)), !h || c !== i || We) return isNaN(c * i) || "" === i ? (!l && !(e in t) && tt(e, i), Ge.call(this, t, e, c, i, p, o || w.stringFilter, u)) : (f = new mr(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof l ? hr : ur, 0, p), u && (f.fp = u), a && f.modifier(a, this, t), this._pt = f)
        },
        Ze = function(t, e, r, i, n, s) {
          var a, o, u, h;
          if (ft[t] && !1 !== (a = new ft[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
              if (z(t) && (t = Ke(t, n, e, r, i)), !I(t) || t.style && t.nodeType || X(t) || N(t)) return S(t) ? Ke(t, n, e, r, i) : t;
              var s, a = {};
              for (s in t) a[s] = Ke(t[s], n, e, r, i);
              return a
            }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new mr(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== d))
            for (u = r._ptLookup[r._targets.indexOf(n)], h = a._props.length; h--;) u[a._props[h]] = o;
          return a
        },
        $e = function t(e, r, i) {
          var n, o, h, f, l, c, p, d, _, m, g, v, y, T = e.vars,
            b = T.ease,
            w = T.startAt,
            O = T.immediateRender,
            C = T.lazy,
            A = T.onUpdate,
            D = T.runBackwards,
            E = T.yoyoEase,
            P = T.keyframes,
            S = T.autoRevert,
            z = e._dur,
            R = e._startAt,
            F = e._targets,
            I = e.parent,
            B = I && "nested" === I.data ? I.vars.targets : F,
            Y = "auto" === e._overwrite && !s,
            N = e.timeline;
          if (N && (!P || !b) && (b = "none"), e._ease = Be(b, x.ease), e._yEase = E ? Ie(Be(!0 === E ? b : E, x.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !N && !!T.runBackwards, !N || P && !T.stagger) {
            if (v = (d = F[0] ? mt(F[0]).harness : 0) && T[d.prop], n = Pt(T, ot), R && (R._zTime < 0 && R.progress(1), r < 0 && D && O && !S ? R.render(-1, !0) : R.revert(D && z ? st : nt), R._lazy = 0), w) {
              if (Ft(e._startAt = rr.set(F, At({
                  data: "isStart",
                  overwrite: !1,
                  parent: I,
                  immediateRender: !0,
                  lazy: !R && L(C),
                  startAt: null,
                  delay: 0,
                  onUpdate: A && function() {
                    return ge(e, "onUpdate")
                  },
                  stagger: 0
                }, w))), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a || !O && !S) && e._startAt.revert(st), O && z && r <= 0 && i <= 0) return void(r && (e._zTime = r))
            } else if (D && z && !R)
              if (r && (O = !1), h = At({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: O && !R && L(C),
                  immediateRender: O,
                  stagger: 0,
                  parent: I
                }, n), v && (h[d.prop] = v), Ft(e._startAt = rr.set(F, h)), e._startAt._dp = 0, e._startAt._sat = e, r < 0 && (a ? e._startAt.revert(st) : e._startAt.render(-1, !0)), e._zTime = r, O) {
                if (!r) return
              } else t(e._startAt, k, k);
            for (e._pt = e._ptCache = 0, C = z && L(C) || C && !z, o = 0; o < F.length; o++) {
              if (p = (l = F[o])._gsap || _t(F)[o]._gsap, e._ptLookup[o] = m = {}, ht[p.id] && ut.length && xt(), g = B === F ? o : B.indexOf(l), d && !1 !== (_ = new d).init(l, v || n, e, g, B) && (e._pt = f = new mr(e._pt, l, _.name, 0, 1, _.render, _, 0, _.priority), _._props.forEach(function(t) {
                  m[t] = f
                }), _.priority && (c = 1)), !d || v)
                for (h in n) ft[h] && (_ = Ze(h, n, e, g, l, B)) ? _.priority && (c = 1) : m[h] = f = He.call(e, l, h, "get", n[h], g, B, 0, T.stringFilter);
              e._op && e._op[o] && e.kill(l, e._op[o]), Y && e._pt && (Qe = e, u.killTweensOf(l, m, e.globalTime(r)), y = !e.parent, Qe = 0), e._pt && C && (ht[p.id] = 1)
            }
            c && _r(e), e._onInit && e._onInit(e)
          }
          e._onUpdate = A, e._initted = (!e._op || e._pt) && !y, P && r <= 0 && N.render(M, !0, !0)
        },
        Je = function(t, e, r, i) {
          var n, s, a = e.ease || i || "power1.inOut";
          if (X(e)) s = r[t] || (r[t] = []), e.forEach(function(t, r) {
            return s.push({
              t: r / (e.length - 1) * 100,
              v: t,
              e: a
            })
          });
          else
            for (n in e) s = r[n] || (r[n] = []), "ease" === n || s.push({
              t: parseFloat(t),
              v: e[n],
              e: a
            })
        },
        Ke = function(t, e, r, i, n) {
          return z(t) ? t.call(e, r, i, n) : S(t) && ~t.indexOf("random(") ? de(t) : t
        },
        tr = dt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        er = {};
      vt(tr + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return er[t] = 1
      });
      var rr = function(t) {
        function e(e, r, n, a) {
          var o;
          "number" == typeof r && (n.duration = r, r = n, n = null);
          var h, f, l, c, p, d, _, m, g = (o = t.call(this, a ? r : St(r)) || this).vars,
            v = g.duration,
            y = g.delay,
            T = g.immediateRender,
            b = g.stagger,
            x = g.overwrite,
            M = g.keyframes,
            k = g.defaults,
            O = g.scrollTrigger,
            C = g.yoyoEase,
            A = r.parent || u,
            D = (X(e) || N(e) ? R(e[0]) : "length" in r) ? [e] : ae(e);
          if (o._targets = D.length ? _t(D) : et("GSAP target " + e + " not found. https://gsap.com", !w.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = x, M || b || Y(v) || Y(y)) {
            if (r = o.vars, (h = o.timeline = new je({
                data: "nested",
                defaults: k || {},
                targets: A && "nested" === A.data ? A.vars.targets : D
              })).kill(), h.parent = h._dp = i(o), h._start = 0, b || Y(v) || Y(y)) {
              if (c = D.length, _ = b && he(b), I(b))
                for (p in b) ~tr.indexOf(p) && (m || (m = {}), m[p] = b[p]);
              for (f = 0; f < c; f++)(l = Pt(r, er)).stagger = 0, C && (l.yoyoEase = C), m && Dt(l, m), d = D[f], l.duration = +Ke(v, i(o), f, d, D), l.delay = (+Ke(y, i(o), f, d, D) || 0) - o._delay, !b && 1 === c && l.delay && (o._delay = y = l.delay, o._start += y, l.delay = 0), h.to(d, l, _ ? _(f, d, D) : 0), h._ease = Se.none;
              h.duration() ? v = y = 0 : o.timeline = 0
            } else if (M) {
              St(At(h.vars.defaults, {
                ease: "none"
              })), h._ease = Be(M.ease || r.ease || "none");
              var E, P, S, z = 0;
              if (X(M)) M.forEach(function(t) {
                return h.to(D, t, ">")
              }), h.duration();
              else {
                for (p in l = {}, M) "ease" === p || "easeEach" === p || Je(p, M[p], l, M.easeEach);
                for (p in l)
                  for (E = l[p].sort(function(t, e) {
                      return t.t - e.t
                    }), z = 0, f = 0; f < E.length; f++)(S = {
                    ease: (P = E[f]).e,
                    duration: (P.t - (f ? E[f - 1].t : 0)) / 100 * v
                  })[p] = P.v, h.to(D, S, z), z += S.duration;
                h.duration() < v && h.to({}, {
                  duration: v - h.duration()
                })
              }
            }
            v || o.duration(v = h.duration())
          } else o.timeline = 0;
          return !0 !== x || s || (Qe = i(o), u.killTweensOf(D), Qe = 0), jt(A, i(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (T || !v && !M && o._start === Tt(A._time) && L(T) && Bt(i(o)) && "nested" !== A.data) && (o._tTime = -1e-8, o.render(Math.max(0, -y) || 0)), O && Qt(i(o), O), o
        }
        n(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
          var i, n, s, o, u, h, f, l, c, p = this._time,
            d = this._tDur,
            _ = this._dur,
            m = t < 0,
            g = t > d - k && !m ? d : t < k ? 0 : t;
          if (_) {
            if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m || this._lazy) {
              if (i = g, l = this.timeline, this._repeat) {
                if (o = _ + this._rDelay, this._repeat < -1 && m) return this.totalTime(100 * o + t, e, r);
                if (i = Tt(g % o), g === d ? (s = this._repeat, i = _) : (s = ~~(u = Tt(g / o))) && s === u ? (i = _, s--) : i > _ && (i = _), (h = this._yoyo && 1 & s) && (c = this._yEase, i = _ - i), u = Nt(this._tTime, o), i === p && !r && this._initted && s === u) return this._tTime = g, this;
                s !== u && (l && this._yEase && Le(l, h), this.vars.repeatRefresh && !h && !this._lock && i !== o && this._initted && (this._lock = r = 1, this.render(Tt(o * s), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Wt(this, m ? t : i, r, e, g)) return this._tTime = 0, this;
                if (!(p === this._time || r && this.vars.repeatRefresh && s !== u)) return this;
                if (_ !== this._dur) return this.render(t, e, r)
              }
              if (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = f = (c || this._ease)(i / _), this._from && (this.ratio = f = 1 - f), !p && g && !e && !u && (ge(this, "onStart"), this._tTime !== g)) return this;
              for (n = this._pt; n;) n.r(f, n.d), n = n._next;
              l && l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (m && Lt(this, t, 0, r), ge(this, "onUpdate")), this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && ge(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && Lt(this, t, 0, !0), (t || !_) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Ft(this, 1), e || m && !p || !(g || p || h) || (ge(this, g === d ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < d && this.timeScale() > 0) && this._prom()))
            }
          } else ! function(t, e, r, i) {
            var n, s, o, u = t.ratio,
              h = e < 0 || !e && (!t._start && Gt(t) && (t._initted || !Ht(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ht(t)) ? 0 : 1,
              f = t._rDelay,
              l = 0;
            if (f && t._repeat && (l = re(0, t._tDur, e), s = Nt(l, f), t._yoyo && 1 & s && (h = 1 - h), s !== Nt(t._tTime, f) && (u = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== u || a || i || t._zTime === k || !e && t._zTime) {
              if (!t._initted && Wt(t, e, i, r, l)) return;
              for (o = t._zTime, t._zTime = e || (r ? k : 0), r || (r = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(h, n.d), n = n._next;
              e < 0 && Lt(t, e, 0, !0), t._onUpdate && !r && ge(t, "onUpdate"), l && t._repeat && !r && t.parent && ge(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Ft(t, 1), r || a || (ge(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          }(this, t, e, r);
          return this
        }, r.targets = function() {
          return this._targets
        }, r.invalidate = function(e) {
          return (!e || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e), t.prototype.invalidate.call(this, e)
        }, r.resetTo = function(t, e, r, i, n) {
          _ || Ee.wake(), this._ts || this.play();
          var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || $e(this, s),
            function(t, e, r, i, n, s, a, o) {
              var u, h, f, l, c = (t._pt && t._ptCache || (t._ptCache = {}))[e];
              if (!c)
                for (c = t._ptCache[e] = [], f = t._ptLookup, l = t._targets.length; l--;) {
                  if ((u = f[l][e]) && u.d && u.d._pt)
                    for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                  if (!u) return We = 1, t.vars[e] = "+=0", $e(t, a), We = 0, o ? et(e + " not eligible for reset") : 1;
                  c.push(u)
                }
              for (l = c.length; l--;)(u = (h = c[l])._pt || h).s = !i && 0 !== i || n ? u.s + (i || 0) + s * u.c : i, u.c = r - u.s, h.e && (h.e = yt(r) + ie(h.e)), h.b && (h.b = u.s + ie(h.b))
            }(this, t, e, r, i, this._ease(s / this._dur), s, n) ? this.resetTo(t, e, r, i, 1) : (qt(this, 0), this.parent || zt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, r.kill = function(t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ve(this) : this.scrollTrigger && this.scrollTrigger.kill(!!a), this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Qe && !0 !== Qe.vars.overwrite)._first || ve(this), this.parent && r !== this.timeline.totalDuration() && Zt(this, this._dur * this.timeline._tDur / r, 0, 1), this
          }
          var i, n, s, o, u, h, f, l = this._targets,
            c = t ? ae(t) : l,
            p = this._ptLookup,
            d = this._pt;
          if ((!e || "all" === e) && function(t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
              return r < 0
            }(l, c)) return "all" === e && (this._pt = 0), ve(this);
          for (i = this._op = this._op || [], "all" !== e && (S(e) && (u = {}, vt(e, function(t) {
              return u[t] = 1
            }), e = u), e = function(t, e) {
              var r, i, n, s, a = t[0] ? mt(t[0]).harness : 0,
                o = a && a.aliases;
              if (!o) return e;
              for (i in r = Dt({}, e), o)
                if (i in r)
                  for (n = (s = o[i].split(",")).length; n--;) r[s[n]] = r[i];
              return r
            }(l, e)), f = l.length; f--;)
            if (~c.indexOf(l[f]))
              for (u in n = p[f], "all" === e ? (i[f] = e, o = n, s = {}) : (s = i[f] = i[f] || {}, o = e), o)(h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || Rt(this, h, "_pt"), delete n[u]), "all" !== s && (s[u] = 1);
          return this._initted && !this._pt && d && ve(this), this
        }, e.to = function(t, r) {
          return new e(t, r, arguments[2])
        }, e.from = function(t, e) {
          return te(1, arguments)
        }, e.delayedCall = function(t, r, i, n) {
          return new e(r, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: n
          })
        }, e.fromTo = function(t, e, r) {
          return te(2, arguments)
        }, e.set = function(t, r) {
          return r.duration = 0, r.repeatDelay || (r.repeat = 0), new e(t, r)
        }, e.killTweensOf = function(t, e, r) {
          return u.killTweensOf(t, e, r)
        }, e
      }(Ve);
      At(rr.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), vt("staggerTo,staggerFrom,staggerFromTo", function(t) {
        rr[t] = function() {
          var e = new je,
            r = ne.call(arguments, 0);
          return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
        }
      });
      var ir = function(t, e, r) {
          return t[e] = r
        },
        nr = function(t, e, r) {
          return t[e](r)
        },
        sr = function(t, e, r, i) {
          return t[e](i.fp, r)
        },
        ar = function(t, e, r) {
          return t.setAttribute(e, r)
        },
        or = function(t, e) {
          return z(t[e]) ? nr : F(t[e]) && t.setAttribute ? ar : ir
        },
        ur = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        hr = function(t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        fr = function(t, e) {
          var r = e._pt,
            i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
            i += e.c
          }
          e.set(e.t, e.p, i, e)
        },
        lr = function(t, e) {
          for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        cr = function(t, e, r, i) {
          for (var n, s = this._pt; s;) n = s._next, s.p === i && s.modifier(t, e, r), s = n
        },
        pr = function(t) {
          for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? Rt(this, i, "_pt") : i.dep || (e = 1), i = r;
          return !e
        },
        dr = function(t, e, r, i) {
          i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        },
        _r = function(t) {
          for (var e, r, i, n, s = t._pt; s;) {
            for (e = s._next, r = i; r && r.pr > s.pr;) r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s: i = s, (s._next = r) ? r._prev = s : n = s, s = e
          }
          t._pt = i
        },
        mr = function() {
          function t(t, e, r, i, n, s, a, o, u) {
            this.t = e, this.s = i, this.c = n, this.p = r, this.r = s || ur, this.d = a || this, this.set = o || ir, this.pr = u || 0, this._next = t, t && (t._prev = this)
          }
          return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = dr, this.m = t, this.mt = r, this.tween = e
          }, t
        }();
      vt(dt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ot[t] = 1
      }), $.TweenMax = $.TweenLite = rr, $.TimelineLite = $.TimelineMax = je, u = new je({
        sortChildren: !1,
        defaults: x,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), w.stringFilter = De;
      var gr = [],
        vr = {},
        yr = [],
        Tr = 0,
        br = 0,
        wr = function(t) {
          return (vr[t] || yr).map(function(t) {
            return t()
          })
        },
        xr = function() {
          var t = Date.now(),
            e = [];
          t - Tr > 2 && (wr("matchMediaInit"), gr.forEach(function(t) {
            var r, i, n, s, a = t.queries,
              o = t.conditions;
            for (i in a)(r = h.matchMedia(a[i]).matches) && (n = 1), r !== o[i] && (o[i] = r, s = 1);
            s && (t.revert(), n && e.push(t))
          }), wr("matchMediaRevert"), e.forEach(function(t) {
            return t.onMatch(t, function(e) {
              return t.add(null, e)
            })
          }), Tr = t, wr("matchMedia"))
        },
        Mr = function() {
          function t(t, e) {
            this.selector = e && oe(e), this.data = [], this._r = [], this.isReverted = !1, this.id = br++, t && this.add(t)
          }
          var e = t.prototype;
          return e.add = function(t, e, r) {
            z(t) && (r = e, e = t, t = z);
            var i = this,
              n = function() {
                var t, n = o,
                  s = i.selector;
                return n && n !== i && n.data.push(i), r && (i.selector = oe(r)), o = i, t = e.apply(i, arguments), z(t) && i._r.push(t), o = n, i.selector = s, i.isReverted = !1, t
              };
            return i.last = n, t === z ? n(i, function(t) {
              return i.add(null, t)
            }) : t ? i[t] = n : n
          }, e.ignore = function(t) {
            var e = o;
            o = null, t(this), o = e
          }, e.getTweens = function() {
            var e = [];
            return this.data.forEach(function(r) {
              return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof rr && !(r.parent && "nested" === r.parent.data) && e.push(r)
            }), e
          }, e.clear = function() {
            this._r.length = this.data.length = 0
          }, e.kill = function(t, e) {
            var r = this;
            if (t ? function() {
                for (var e, i = r.getTweens(), n = r.data.length; n--;) "isFlip" === (e = r.data[n]).data && (e.revert(), e.getChildren(!0, !0, !1).forEach(function(t) {
                  return i.splice(i.indexOf(t), 1)
                }));
                for (i.map(function(t) {
                    return {
                      g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                      t
                    }
                  }).sort(function(t, e) {
                    return e.g - t.g || -1 / 0
                  }).forEach(function(e) {
                    return e.t.revert(t)
                  }), n = r.data.length; n--;)(e = r.data[n]) instanceof je ? "nested" !== e.data && (e.scrollTrigger && e.scrollTrigger.revert(), e.kill()) : !(e instanceof rr) && e.revert && e.revert(t);
                r._r.forEach(function(e) {
                  return e(t, r)
                }), r.isReverted = !0
              }() : this.data.forEach(function(t) {
                return t.kill && t.kill()
              }), this.clear(), e)
              for (var i = gr.length; i--;) gr[i].id === this.id && gr.splice(i, 1)
          }, e.revert = function(t) {
            this.kill(t || {})
          }, t
        }(),
        kr = function() {
          function t(t) {
            this.contexts = [], this.scope = t, o && o.data.push(this)
          }
          var e = t.prototype;
          return e.add = function(t, e, r) {
            I(t) || (t = {
              matches: t
            });
            var i, n, s, a = new Mr(0, r || this.scope),
              u = a.conditions = {};
            for (n in o && !a.selector && (a.selector = o.selector), this.contexts.push(a), e = a.add("onMatch", e), a.queries = t, t) "all" === n ? s = 1 : (i = h.matchMedia(t[n])) && (gr.indexOf(a) < 0 && gr.push(a), (u[n] = i.matches) && (s = 1), i.addListener ? i.addListener(xr) : i.addEventListener("change", xr));
            return s && e(a, function(t) {
              return a.add(null, t)
            }), this
          }, e.revert = function(t) {
            this.kill(t || {})
          }, e.kill = function(t) {
            this.contexts.forEach(function(e) {
              return e.kill(t, !0)
            })
          }, t
        }(),
        Or = {
          registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
              return Te(t)
            })
          },
          timeline: function(t) {
            return new je(t)
          },
          getTweensOf: function(t, e) {
            return u.getTweensOf(t, e)
          },
          getProperty: function(t, e, r, i) {
            S(t) && (t = ae(t)[0]);
            var n = mt(t || {}).get,
              s = r ? Ct : Ot;
            return "native" === r && (r = ""), t ? e ? s((ft[e] && ft[e].get || n)(t, e, r, i)) : function(e, r, i) {
              return s((ft[e] && ft[e].get || n)(t, e, r, i))
            } : t
          },
          quickSetter: function(t, e, r) {
            if ((t = ae(t)).length > 1) {
              var i = t.map(function(t) {
                  return Dr.quickSetter(t, e, r)
                }),
                n = i.length;
              return function(t) {
                for (var e = n; e--;) i[e](t)
              }
            }
            t = t[0] || {};
            var s = ft[e],
              a = mt(t),
              o = a.harness && (a.harness.aliases || {})[e] || e,
              u = s ? function(e) {
                var i = new s;
                d._pt = 0, i.init(t, r ? e + r : e, d, 0, [t]), i.render(1, i), d._pt && lr(1, d)
              } : a.set(t, o);
            return s ? u : function(e) {
              return u(t, o, r ? e + r : e, a, 1)
            }
          },
          quickTo: function(t, e, r) {
            var i, n = Dr.to(t, At(((i = {})[e] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})),
              s = function(t, r, i) {
                return n.resetTo(e, t, r, i)
              };
            return s.tween = n, s
          },
          isTweening: function(t) {
            return u.getTweensOf(t, !0).length > 0
          },
          defaults: function(t) {
            return t && t.ease && (t.ease = Be(t.ease, x.ease)), Et(x, t || {})
          },
          config: function(t) {
            return Et(w, t || {})
          },
          registerEffect: function(t) {
            var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
            (i || "").split(",").forEach(function(t) {
              return t && !ft[t] && !$[t] && et(e + " effect requires " + t + " plugin.")
            }), lt[e] = function(t, e, i) {
              return r(ae(t), At(e || {}, n), i)
            }, s && (je.prototype[e] = function(t, r, i) {
              return this.add(lt[e](t, I(r) ? r : (i = r) && {}, this), i)
            })
          },
          registerEase: function(t, e) {
            Se[t] = Be(e)
          },
          parseEase: function(t, e) {
            return arguments.length ? Be(t, e) : Se
          },
          getById: function(t) {
            return u.getById(t)
          },
          exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new je(t);
            for (n.smoothChildTiming = L(t.smoothChildTiming), u.remove(n), n._dp = 0, n._time = n._tTime = u._time, r = u._first; r;) i = r._next, !e && !r._dur && r instanceof rr && r.vars.onComplete === r._targets[0] || jt(n, r, r._start - r._delay), r = i;
            return jt(u, n, 0), n
          },
          context: function(t, e) {
            return t ? new Mr(t, e) : o
          },
          matchMedia: function(t) {
            return new kr(t)
          },
          matchMediaRefresh: function() {
            return gr.forEach(function(t) {
              var e, r, i = t.conditions;
              for (r in i) i[r] && (i[r] = !1, e = 1);
              e && t.revert()
            }) || xr()
          },
          addEventListener: function(t, e) {
            var r = vr[t] || (vr[t] = []);
            ~r.indexOf(e) || r.push(e)
          },
          removeEventListener: function(t, e) {
            var r = vr[t],
              i = r && r.indexOf(e);
            i >= 0 && r.splice(i, 1)
          },
          utils: {
            wrap: function t(e, r, i) {
              var n = r - e;
              return X(e) ? pe(e, t(0, e.length), r) : ee(i, function(t) {
                return (n + (t - e) % n) % n + e
              })
            },
            wrapYoyo: function t(e, r, i) {
              var n = r - e,
                s = 2 * n;
              return X(e) ? pe(e, t(0, e.length - 1), r) : ee(i, function(t) {
                return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
              })
            },
            distribute: he,
            random: ce,
            snap: le,
            normalize: function(t, e, r) {
              return _e(t, e, 0, 1, r)
            },
            getUnit: ie,
            clamp: function(t, e, r) {
              return ee(r, function(r) {
                return re(t, e, r)
              })
            },
            splitColor: Me,
            toArray: ae,
            selector: oe,
            mapRange: _e,
            pipe: function() {
              for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              return function(t) {
                return e.reduce(function(t, e) {
                  return e(t)
                }, t)
              }
            },
            unitize: function(t, e) {
              return function(r) {
                return t(parseFloat(r)) + (e || ie(r))
              }
            },
            interpolate: function t(e, r, i, n) {
              var s = isNaN(e + r) ? 0 : function(t) {
                return (1 - t) * e + t * r
              };
              if (!s) {
                var a, o, u, h, f, l = S(e),
                  c = {};
                if (!0 === i && (n = 1) && (i = null), l) e = {
                  p: e
                }, r = {
                  p: r
                };
                else if (X(e) && !X(r)) {
                  for (u = [], h = e.length, f = h - 2, o = 1; o < h; o++) u.push(t(e[o - 1], e[o]));
                  h--, s = function(t) {
                    t *= h;
                    var e = Math.min(f, ~~t);
                    return u[e](t - e)
                  }, i = r
                } else n || (e = Dt(X(e) ? [] : {}, e));
                if (!u) {
                  for (a in r) He.call(c, e, a, "get", r[a]);
                  s = function(t) {
                    return lr(t, c) || (l ? e.p : e)
                  }
                }
              }
              return ee(i, s)
            },
            shuffle: ue
          },
          install: K,
          effects: lt,
          ticker: Ee,
          updateRoot: je.updateRoot,
          plugins: ft,
          globalTimeline: u,
          core: {
            PropTween: mr,
            globals: rt,
            Tween: rr,
            Timeline: je,
            Animation: Ve,
            getCache: mt,
            _removeLinkedListItem: Rt,
            reverting: function() {
              return a
            },
            context: function(t) {
              return t && o && (o.data.push(t), t._ctx = o), o
            },
            suppressOverwrites: function(t) {
              return s = t
            }
          }
        };
      vt("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Or[t] = rr[t]
      }), Ee.add(je.updateRoot), d = Or.to({}, {
        duration: 0
      });
      var Cr = function(t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
          return r
        },
        Ar = function(t, e) {
          return {
            name: t,
            headless: 1,
            rawVars: 1,
            init: function(t, r, i) {
              i._onInit = function(t) {
                var i, n;
                if (S(r) && (i = {}, vt(r, function(t) {
                    return i[t] = 1
                  }), r = i), e) {
                  for (n in i = {}, r) i[n] = e(r[n]);
                  r = i
                }! function(t, e) {
                  var r, i, n, s = t._targets;
                  for (r in e)
                    for (i = s.length; i--;)(n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = Cr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r))
                }(t, r)
              }
            }
          }
        },
        Dr = Or.registerPlugin({
          name: "attr",
          init: function(t, e, r, i, n) {
            var s, a, o;
            for (s in this.tween = r, e) o = t.getAttribute(s) || "", (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s, a.b = o, this._props.push(s)
          },
          render: function(t, e) {
            for (var r = e._pt; r;) a ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
          }
        }, {
          name: "endArray",
          headless: 1,
          init: function(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
          }
        }, Ar("roundProps", fe), Ar("modifiers"), Ar("snap", le)) || Or;
      rr.version = je.version = Dr.version = "3.14.2", c = 1, B() && Pe();
      var Er, Pr, Sr, zr, Rr, Fr, Ir, Lr, Br = Se.Power0,
        Yr = Se.Power1,
        Nr = Se.Power2,
        Xr = Se.Power3,
        Ur = Se.Power4,
        qr = Se.Linear,
        Vr = Se.Quad,
        jr = Se.Cubic,
        Qr = Se.Quart,
        Wr = Se.Quint,
        Gr = Se.Strong,
        Hr = Se.Elastic,
        Zr = Se.Back,
        $r = Se.SteppedEase,
        Jr = Se.Bounce,
        Kr = Se.Sine,
        ti = Se.Expo,
        ei = Se.Circ,
        ri = {},
        ii = 180 / Math.PI,
        ni = Math.PI / 180,
        si = Math.atan2,
        ai = /([A-Z])/g,
        oi = /(left|right|width|margin|padding|x)/i,
        ui = /[\s,\(]\S/,
        hi = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        fi = function(t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        li = function(t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        ci = function(t, e) {
          return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        pi = function(t, e) {
          return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        di = function(t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        },
        _i = function(t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        mi = function(t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        gi = function(t, e, r) {
          return t.style[e] = r
        },
        vi = function(t, e, r) {
          return t.style.setProperty(e, r)
        },
        yi = function(t, e, r) {
          return t._gsap[e] = r
        },
        Ti = function(t, e, r) {
          return t._gsap.scaleX = t._gsap.scaleY = r
        },
        bi = function(t, e, r, i, n) {
          var s = t._gsap;
          s.scaleX = s.scaleY = r, s.renderTransform(n, s)
        },
        wi = function(t, e, r, i, n) {
          var s = t._gsap;
          s[e] = r, s.renderTransform(n, s)
        },
        xi = "transform",
        Mi = xi + "Origin",
        ki = function t(e, r) {
          var i = this,
            n = this.target,
            s = n.style,
            a = n._gsap;
          if (e in ri && s) {
            if (this.tfm = this.tfm || {}, "transform" === e) return hi.transform.split(",").forEach(function(e) {
              return t.call(i, e, r)
            });
            if (~(e = hi[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                return i.tfm[t] = qi(n, t)
              }) : this.tfm[e] = a.x ? a[e] : qi(n, e), e === Mi && (this.tfm.zOrigin = a.zOrigin), this.props.indexOf(xi) >= 0) return;
            a.svg && (this.svgo = n.getAttribute("data-svg-origin"), this.props.push(Mi, r, "")), e = xi
          }(s || r) && this.props.push(e, r, s[e])
        },
        Oi = function(t) {
          t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        Ci = function() {
          var t, e, r = this.props,
            i = this.target,
            n = i.style,
            s = i._gsap;
          for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? i[r[t]](r[t + 2]) : i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ai, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg && (s.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Ir()) && t.isStart || n[xi] || (Oi(n), s.zOrigin && n[Mi] && (n[Mi] += " " + s.zOrigin + "px", s.zOrigin = 0, s.renderTransform()), s.uncache = 1)
          }
        },
        Ai = function(t, e) {
          var r = {
            target: t,
            props: [],
            revert: Ci,
            save: ki
          };
          return t._gsap || Dr.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
            return r.save(t)
          }), r
        },
        Di = function(t, e) {
          var r = Pr.createElementNS ? Pr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Pr.createElement(t);
          return r && r.style ? r : Pr.createElement(t)
        },
        Ei = function t(e, r, i) {
          var n = getComputedStyle(e);
          return n[r] || n.getPropertyValue(r.replace(ai, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, Si(r) || r, 1) || ""
        },
        Pi = "O,Moz,ms,Ms,Webkit".split(","),
        Si = function(t, e, r) {
          var i = (e || Rr).style,
            n = 5;
          if (t in i && !r) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Pi[n] + t in i););
          return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? Pi[n] : "") + t
        },
        zi = function() {
          "undefined" != typeof window && window.document && (Er = window, Pr = Er.document, Sr = Pr.documentElement, Rr = Di("div") || {
            style: {}
          }, Di("div"), xi = Si(xi), Mi = xi + "Origin", Rr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Lr = !!Si("perspective"), Ir = Dr.core.reverting, zr = 1)
        },
        Ri = function(t) {
          var e, r = t.ownerSVGElement,
            i = Di("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = t.cloneNode(!0);
          n.style.display = "block", i.appendChild(n), Sr.appendChild(i);
          try {
            e = n.getBBox()
          } catch (t) {}
          return i.removeChild(n), Sr.removeChild(i), e
        },
        Fi = function(t, e) {
          for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        Ii = function(t) {
          var e, r;
          try {
            e = t.getBBox()
          } catch (i) {
            e = Ri(t), r = 1
          }
          return e && (e.width || e.height) || r || (e = Ri(t)), !e || e.width || e.x || e.y ? e : {
            x: +Fi(t, ["x", "cx", "x1"]) || 0,
            y: +Fi(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Li = function(t) {
          return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ii(t))
        },
        Bi = function(t, e) {
          if (e) {
            var r, i = t.style;
            e in ri && e !== Mi && (e = xi), i.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(ai, "-$1").toLowerCase())) : i.removeAttribute(e)
          }
        },
        Yi = function(t, e, r, i, n, s) {
          var a = new mr(t._pt, e, r, 0, 1, s ? mi : _i);
          return t._pt = a, a.b = i, a.e = n, t._props.push(r), a
        },
        Ni = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Xi = {
          grid: 1,
          flex: 1
        },
        Ui = function t(e, r, i, n) {
          var s, a, o, u, h = parseFloat(i) || 0,
            f = (i + "").trim().substr((h + "").length) || "px",
            l = Rr.style,
            c = oi.test(r),
            p = "svg" === e.tagName.toLowerCase(),
            d = (p ? "client" : "offset") + (c ? "Width" : "Height"),
            _ = 100,
            m = "px" === n,
            g = "%" === n;
          if (n === f || !h || Ni[n] || Ni[f]) return h;
          if ("px" !== f && !m && (h = t(e, r, i, "px")), u = e.getCTM && Li(e), (g || "%" === f) && (ri[r] || ~r.indexOf("adius"))) return s = u ? e.getBBox()[c ? "width" : "height"] : e[d], yt(g ? h / s * _ : h / 100 * s);
          if (l[c ? "width" : "height"] = _ + (m ? f : n), a = "rem" !== n && ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode, u && (a = (e.ownerSVGElement || {}).parentNode), a && a !== Pr && a.appendChild || (a = Pr.body), (o = a._gsap) && g && o.width && c && o.time === Ee.time && !o.uncache) return yt(h / o.width * _);
          if (!g || "height" !== r && "width" !== r)(g || "%" === f) && !Xi[Ei(a, "display")] && (l.position = Ei(e, "position")), a === e && (l.position = "static"), a.appendChild(Rr), s = Rr[d], a.removeChild(Rr), l.position = "absolute";
          else {
            var v = e.style[r];
            e.style[r] = _ + n, s = e[d], v ? e.style[r] = v : Bi(e, r)
          }
          return c && g && ((o = mt(a)).time = Ee.time, o.width = a[d]), yt(m ? s * h / _ : s && h ? _ / s * h : 0)
        },
        qi = function(t, e, r, i) {
          var n;
          return zr || zi(), e in hi && "transform" !== e && ~(e = hi[e]).indexOf(",") && (e = e.split(",")[0]), ri[e] && "transform" !== e ? (n = en(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : rn(Ei(t, Mi)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = Gi[e] && Gi[e](t, e, r) || Ei(t, e) || gt(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Ui(t, e, n, r) + r : n
        },
        Vi = function(t, e, r, i) {
          if (!r || "none" === r) {
            var n = Si(e, t, 1),
              s = n && Ei(t, n, 1);
            s && s !== r ? (e = n, r = s) : "borderColor" === e && (r = Ei(t, "borderTopColor"))
          }
          var a, o, u, h, f, l, c, p, d, _, m, g = new mr(this._pt, t.style, e, 0, 1, fr),
            v = 0,
            y = 0;
          if (g.b = r, g.e = i, r += "", "var(--" === (i += "").substring(0, 6) && (i = Ei(t, i.substring(4, i.indexOf(")")))), "auto" === i && (l = t.style[e], t.style[e] = i, i = Ei(t, e) || i, l ? t.style[e] = l : Bi(t, e)), De(a = [r, i]), i = a[1], u = (r = a[0]).match(Q) || [], (i.match(Q) || []).length) {
            for (; o = Q.exec(i);) c = o[0], d = i.substring(v, o.index), f ? f = (f + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (f = 1), c !== (l = u[y++] || "") && (h = parseFloat(l) || 0, m = l.substr((h + "").length), "=" === c.charAt(1) && (c = bt(h, c) + m), p = parseFloat(c), _ = c.substr((p + "").length), v = Q.lastIndex - _.length, _ || (_ = _ || w.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Ui(t, e, l, _) || 0), g._pt = {
              _next: g._pt,
              p: d || 1 === y ? d : ",",
              s: h,
              c: p - h,
              m: f && f < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
          } else g.r = "display" === e && "none" === i ? mi : _i;
          return G.test(i) && (g.e = 0), this._pt = g, g
        },
        ji = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Qi = function(t) {
          var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
          return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = ji[r] || r, e[1] = ji[i] || i, e.join(" ")
        },
        Wi = function(t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t,
              a = s.style,
              o = e.u,
              u = s._gsap;
            if ("all" === o || !0 === o) a.cssText = "", i = 1;
            else
              for (n = (o = o.split(",")).length; --n > -1;) r = o[n], ri[r] && (i = 1, r = "transformOrigin" === r ? Mi : xi), Bi(s, r);
            i && (Bi(s, xi), u && (u.svg && s.removeAttribute("transform"), a.scale = a.rotate = a.translate = "none", en(s, 1), u.uncache = 1, Oi(a)))
          }
        },
        Gi = {
          clearProps: function(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
              var s = t._pt = new mr(t._pt, e, r, 0, 0, Wi);
              return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1
            }
          }
        },
        Hi = [1, 0, 0, 1, 0, 0],
        Zi = {},
        $i = function(t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        Ji = function(t) {
          var e = Ei(t, xi);
          return $i(e) ? Hi : e.substr(7).match(j).map(yt)
        },
        Ki = function(t, e) {
          var r, i, n, s, a = t._gsap || mt(t),
            o = t.style,
            u = Ji(t);
          return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Hi : u : (u !== Hi || t.offsetParent || t === Sr || a.svg || (n = o.display, o.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (s = 1, i = t.nextElementSibling, Sr.appendChild(t)), u = Ji(t), n ? o.display = n : Bi(t, "display"), s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Sr.removeChild(t))), e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        tn = function(t, e, r, i, n, s) {
          var a, o, u, h = t._gsap,
            f = n || Ki(t, !0),
            l = h.xOrigin || 0,
            c = h.yOrigin || 0,
            p = h.xOffset || 0,
            d = h.yOffset || 0,
            _ = f[0],
            m = f[1],
            g = f[2],
            v = f[3],
            y = f[4],
            T = f[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
          r ? f !== Hi && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (a = Ii(t)).x + (~b[0].indexOf("%") ? w / 100 * a.width : w), x = a.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * a.height : x)), i || !1 !== i && h.smooth ? (y = w - l, T = x - c, h.xOffset = p + (y * _ + T * g) - y, h.yOffset = d + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Mi] = "0px 0px", s && (Yi(s, h, "xOrigin", l, w), Yi(s, h, "yOrigin", c, x), Yi(s, h, "xOffset", p, h.xOffset), Yi(s, h, "yOffset", d, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
        },
        en = function(t, e) {
          var r = t._gsap || new qe(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i, n, s, a, o, u, h, f, l, c, p, d, _, m, g, v, y, T, b, x, M, k, O, C, A, D, E, P, S, z, R, F, I = t.style,
            L = r.scaleX < 0,
            B = "px",
            Y = "deg",
            N = getComputedStyle(t),
            X = Ei(t, Mi) || "0";
          return i = n = s = u = h = f = l = c = p = 0, a = o = 1, r.svg = !(!t.getCTM || !Li(t)), N.translate && ("none" === N.translate && "none" === N.scale && "none" === N.rotate || (I[xi] = ("none" !== N.translate ? "translate3d(" + (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") + ("none" !== N.scale ? "scale(" + N.scale.split(" ").join(",") + ") " : "") + ("none" !== N[xi] ? N[xi] : "")), I.scale = I.rotate = I.translate = "none"), m = Ki(t, r.svg), r.svg && (r.uncache ? (A = t.getBBox(), X = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", C = "") : C = !e && t.getAttribute("data-svg-origin"), tn(t, C || X, !!C || r.originIsAbsolute, !1 !== r.smooth, m)), d = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Hi && (T = m[0], b = m[1], x = m[2], M = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (a = Math.sqrt(T * T + b * b), o = Math.sqrt(M * M + x * x), u = T || b ? si(b, T) * ii : 0, (l = x || M ? si(x, M) * ii + u : 0) && (o *= Math.abs(Math.cos(l * ni))), r.svg && (i -= d - (d * T + _ * x), n -= _ - (d * b + _ * M))) : (F = m[6], z = m[7], E = m[8], P = m[9], S = m[10], R = m[11], i = m[12], n = m[13], s = m[14], h = (g = si(F, S)) * ii, g && (C = k * (v = Math.cos(-g)) + E * (y = Math.sin(-g)), A = O * v + P * y, D = F * v + S * y, E = k * -y + E * v, P = O * -y + P * v, S = F * -y + S * v, R = z * -y + R * v, k = C, O = A, F = D), f = (g = si(-x, S)) * ii, g && (v = Math.cos(-g), R = M * (y = Math.sin(-g)) + R * v, T = C = T * v - E * y, b = A = b * v - P * y, x = D = x * v - S * y), u = (g = si(b, T)) * ii, g && (C = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), A = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = C, k = A), h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0, f = 180 - f), a = yt(Math.sqrt(T * T + b * b + x * x)), o = yt(Math.sqrt(O * O + F * F)), g = si(k, O), l = Math.abs(g) > 2e-4 ? g * ii : 0, p = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (C = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !$i(Ei(t, xi)), C && t.setAttribute("transform", C))), Math.abs(l) > 90 && Math.abs(l) < 270 && (L ? (a *= -1, l += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, l += l <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + B, r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + B, r.z = s + B, r.scaleX = yt(a), r.scaleY = yt(o), r.rotation = yt(u) + Y, r.rotationX = yt(h) + Y, r.rotationY = yt(f) + Y, r.skewX = l + Y, r.skewY = c + Y, r.transformPerspective = p + B, (r.zOrigin = parseFloat(X.split(" ")[2]) || !e && r.zOrigin || 0) && (I[Mi] = rn(X)), r.xOffset = r.yOffset = 0, r.force3D = w.force3D, r.renderTransform = r.svg ? fn : Lr ? hn : sn, r.uncache = 0, r
        },
        rn = function(t) {
          return (t = t.split(" "))[0] + " " + t[1]
        },
        nn = function(t, e, r) {
          var i = ie(e);
          return yt(parseFloat(e) + parseFloat(Ui(t, "x", r + "px", i))) + i
        },
        sn = function(t, e) {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, hn(t, e)
        },
        an = "0deg",
        on = "0px",
        un = ") ",
        hn = function(t, e) {
          var r = e || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            a = r.y,
            o = r.z,
            u = r.rotation,
            h = r.rotationY,
            f = r.rotationX,
            l = r.skewX,
            c = r.skewY,
            p = r.scaleX,
            d = r.scaleY,
            _ = r.transformPerspective,
            m = r.force3D,
            g = r.target,
            v = r.zOrigin,
            y = "",
            T = "auto" === m && t && 1 !== t || !0 === m;
          if (v && (f !== an || h !== an)) {
            var b, w = parseFloat(h) * ni,
              x = Math.sin(w),
              M = Math.cos(w);
            w = parseFloat(f) * ni, b = Math.cos(w), s = nn(g, s, x * b * -v), a = nn(g, a, -Math.sin(w) * -v), o = nn(g, o, M * b * -v + v)
          }
          _ !== on && (y += "perspective(" + _ + un), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), (T || s !== on || a !== on || o !== on) && (y += o !== on || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + un), u !== an && (y += "rotate(" + u + un), h !== an && (y += "rotateY(" + h + un), f !== an && (y += "rotateX(" + f + un), l === an && c === an || (y += "skew(" + l + ", " + c + un), 1 === p && 1 === d || (y += "scale(" + p + ", " + d + un), g.style[xi] = y || "translate(0, 0)"
        },
        fn = function(t, e) {
          var r, i, n, s, a, o = e || this,
            u = o.xPercent,
            h = o.yPercent,
            f = o.x,
            l = o.y,
            c = o.rotation,
            p = o.skewX,
            d = o.skewY,
            _ = o.scaleX,
            m = o.scaleY,
            g = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            T = o.xOffset,
            b = o.yOffset,
            w = o.forceCSS,
            x = parseFloat(f),
            M = parseFloat(l);
          c = parseFloat(c), p = parseFloat(p), (d = parseFloat(d)) && (p += d = parseFloat(d), c += d), c || p ? (c *= ni, p *= ni, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - p) * -m, s = Math.cos(c - p) * m, p && (d *= ni, a = Math.tan(p - d), n *= a = Math.sqrt(1 + a * a), s *= a, d && (a = Math.tan(d), r *= a = Math.sqrt(1 + a * a), i *= a)), r = yt(r), i = yt(i), n = yt(n), s = yt(s)) : (r = _, s = m, i = n = 0), (x && !~(f + "").indexOf("px") || M && !~(l + "").indexOf("px")) && (x = Ui(g, "x", f, "px"), M = Ui(g, "y", l, "px")), (v || y || T || b) && (x = yt(x + v - (v * r + y * n) + T), M = yt(M + y - (v * i + y * s) + b)), (u || h) && (a = g.getBBox(), x = yt(x + u / 100 * a.width), M = yt(M + h / 100 * a.height)), a = "matrix(" + r + "," + i + "," + n + "," + s + "," + x + "," + M + ")", g.setAttribute("transform", a), w && (g.style[xi] = a)
        },
        ln = function(t, e, r, i, n) {
          var s, a, o = 360,
            u = S(n),
            h = parseFloat(n) * (u && ~n.indexOf("rad") ? ii : 1) - i,
            f = i + h + "deg";
          return u && ("short" === (s = n.split("_")[1]) && (h %= o) !== h % 180 && (h += h < 0 ? o : -360), "cw" === s && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === s && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = a = new mr(t._pt, e, r, i, h, li), a.e = f, a.u = "deg", t._props.push(r), a
        },
        cn = function(t, e) {
          for (var r in e) t[r] = e[r];
          return t
        },
        pn = function(t, e, r) {
          var i, n, s, a, o, u, h, f = cn({}, r._gsap),
            l = r.style;
          for (n in f.svg ? (s = r.getAttribute("transform"), r.setAttribute("transform", ""), l[xi] = e, i = en(r, 1), Bi(r, xi), r.setAttribute("transform", s)) : (s = getComputedStyle(r)[xi], l[xi] = e, i = en(r, 1), l[xi] = s), ri)(s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = ie(s) !== (h = ie(a)) ? Ui(r, n, s, h) : parseFloat(s), u = parseFloat(a), t._pt = new mr(t._pt, i, n, o, u - o, fi), t._pt.u = h || 0, t._props.push(n));
          cn(i, f)
        };
      vt("padding,margin,Width,Radius", function(t, e) {
        var r = "Top",
          i = "Right",
          n = "Bottom",
          s = "Left",
          a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map(function(r) {
            return e < 2 ? t + r : "border" + r + t
          });
        Gi[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
          var s, o;
          if (arguments.length < 4) return s = a.map(function(e) {
            return qi(t, e, r)
          }), 5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
          s = (i + "").split(" "), o = {}, a.forEach(function(t, e) {
            return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
          }), t.init(e, o, n)
        }
      });
      var dn, _n, mn = {
        name: "css",
        register: zi,
        targetTest: function(t) {
          return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
          var s, a, o, u, h, f, l, c, p, d, _, m, g, v, y, T, b, x = this._props,
            M = t.style,
            k = r.vars.startAt;
          for (l in zr || zi(), this.styles = this.styles || Ai(t), T = this.styles.props, this.tween = r, e)
            if ("autoRound" !== l && (a = e[l], !ft[l] || !Ze(l, e, r, i, t, n)))
              if (h = typeof a, f = Gi[l], "function" === h && (h = typeof(a = a.call(r, i, t, n))), "string" === h && ~a.indexOf("random(") && (a = de(a)), f) f(this, t, l, a, r) && (y = 1);
              else if ("--" === l.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(l) + "").trim(), a += "", Ce.lastIndex = 0, Ce.test(s) || (c = ie(s), (p = ie(a)) ? c !== p && (s = Ui(t, l, s, p) + p) : c && (a += c)), this.add(M, "setProperty", s, a, i, n, 0, 0, l), x.push(l), T.push(l, 0, M[l]);
          else if ("undefined" !== h) {
            if (k && l in k ? (s = "function" == typeof k[l] ? k[l].call(r, i, t, n) : k[l], S(s) && ~s.indexOf("random(") && (s = de(s)), ie(s + "") || "auto" === s || (s += w.units[l] || ie(qi(t, l)) || ""), "=" === (s + "").charAt(1) && (s = qi(t, l))) : s = qi(t, l), u = parseFloat(s), (d = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)), o = parseFloat(a), l in hi && ("autoAlpha" === l && (1 === u && "hidden" === qi(t, "visibility") && o && (u = 0), T.push("visibility", 0, M.visibility), Yi(this, M, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== l && "transform" !== l && ~(l = hi[l]).indexOf(",") && (l = l.split(",")[0])), _ = l in ri) {
              if (this.styles.save(l), b = a, "string" === h && "var(--" === a.substring(0, 6)) {
                if ("calc(" === (a = Ei(t, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                  var O = t.style.perspective;
                  t.style.perspective = a, a = Ei(t, "perspective"), O ? t.style.perspective = O : Bi(t, "perspective")
                }
                o = parseFloat(a)
              }
              if (m || ((g = t._gsap).renderTransform && !e.parseTransform || en(t, e.parseTransform), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new mr(this._pt, M, xi, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === l) this._pt = new mr(this._pt, g, "scaleY", g.scaleY, (d ? bt(g.scaleY, d + o) : o) - g.scaleY || 0, fi), this._pt.u = 0, x.push("scaleY", l), l += "X";
              else {
                if ("transformOrigin" === l) {
                  T.push(Mi, 0, M[Mi]), a = Qi(a), g.svg ? tn(t, a, 0, v, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin && Yi(this, g, "zOrigin", g.zOrigin, p), Yi(this, M, l, rn(s), rn(a)));
                  continue
                }
                if ("svgOrigin" === l) {
                  tn(t, a, 1, v, 0, this);
                  continue
                }
                if (l in Zi) {
                  ln(this, g, l, u, d ? bt(u, d + a) : a);
                  continue
                }
                if ("smoothOrigin" === l) {
                  Yi(this, g, "smooth", g.smooth, a);
                  continue
                }
                if ("force3D" === l) {
                  g[l] = a;
                  continue
                }
                if ("transform" === l) {
                  pn(this, a, t);
                  continue
                }
              }
            } else l in M || (l = Si(l) || l);
            if (_ || (o || 0 === o) && (u || 0 === u) && !ui.test(a) && l in M) o || (o = 0), (c = (s + "").substr((u + "").length)) !== (p = ie(a) || (l in w.units ? w.units[l] : c)) && (u = Ui(t, l, s, p)), this._pt = new mr(this._pt, _ ? g : M, l, u, (d ? bt(u, d + o) : o) - u, _ || "px" !== p && "zIndex" !== l || !1 === e.autoRound ? fi : di), this._pt.u = p || 0, _ && b !== a ? (this._pt.b = s, this._pt.e = b, this._pt.r = pi) : c !== p && "%" !== p && (this._pt.b = s, this._pt.r = ci);
            else if (l in M) Vi.call(this, t, l, s, d ? d + a : a);
            else if (l in t) this.add(t, l, s || t[l], d ? d + a : a, i, n);
            else if ("parseTransform" !== l) {
              tt(l, a);
              continue
            }
            _ || (l in M ? T.push(l, 0, M[l]) : "function" == typeof t[l] ? T.push(l, 2, t[l]()) : T.push(l, 1, s || t[l])), x.push(l)
          }
          y && _r(this)
        },
        render: function(t, e) {
          if (e.tween._time || !Ir())
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
          else e.styles.revert()
        },
        get: qi,
        aliases: hi,
        getSetter: function(t, e, r) {
          var i = hi[e];
          return i && i.indexOf(",") < 0 && (e = i), e in ri && e !== Mi && (t._gsap.x || qi(t, "x")) ? r && Fr === r ? "scale" === e ? Ti : yi : (Fr = r || {}) && ("scale" === e ? bi : wi) : t.style && !F(t.style[e]) ? gi : ~e.indexOf("-") ? vi : or(t, e)
        },
        core: {
          _removeProperty: Bi,
          _getMatrix: Ki
        }
      };
      Dr.utils.checkPrefix = Si, Dr.core.getStyleSaver = Ai, _n = vt("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (dn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        ri[t] = 1
      }), vt(dn, function(t) {
        w.units[t] = "deg", Zi[t] = 1
      }), hi[_n[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + dn, vt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        hi[e[1]] = _n[e[0]]
      }), vt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        w.units[t] = "px"
      }), Dr.registerPlugin(mn);
      var gn = Dr.registerPlugin(mn) || Dr,
        vn = gn.core.Tween
    }
  }
]);