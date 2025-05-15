! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "728e9a01-60a9-4923-84f4-6ccaf8b5277f", t._sentryDebugIdIdentifier = "sentry-dbid-728e9a01-60a9-4923-84f4-6ccaf8b5277f")
  } catch (t) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [8728], {
    58728: (t, e, i) => {
      i.r(e), i.d(e, {
        Back: () => zi,
        Bounce: () => Bi,
        CSSPlugin: () => as,
        Circ: () => Yi,
        Cubic: () => Di,
        Elastic: () => Ri,
        Expo: () => Li,
        Linear: () => Ci,
        Power0: () => xi,
        Power1: () => wi,
        Power2: () => Mi,
        Power3: () => ki,
        Power4: () => Oi,
        Quad: () => Ai,
        Quart: () => Ei,
        Quint: () => Si,
        Sine: () => Ii,
        SteppedEase: () => Fi,
        Strong: () => Pi,
        TimelineLite: () => Ie,
        TimelineMax: () => Ie,
        TweenLite: () => We,
        TweenMax: () => os,
        default: () => ns,
        gsap: () => ns
      });
      let r, s, a, n, o, l, h, d, _, p, u, f = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
            lineHeight: ""
          }
        },
        m = {
          duration: .5,
          overwrite: !1,
          delay: 0
        },
        g = 1e8,
        c = 1e-8,
        y = 2 * Math.PI,
        v = y / 4,
        b = 0,
        T = Math.sqrt,
        x = Math.cos,
        w = Math.sin,
        M = t => "string" == typeof t,
        k = t => "function" == typeof t,
        O = t => "number" == typeof t,
        C = t => void 0 === t,
        A = t => "object" == typeof t,
        D = t => !1 !== t,
        E = () => "undefined" != typeof window,
        S = t => k(t) || M(t),
        P = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        R = Array.isArray,
        z = /(?:-?\.?\d|\.)+/gi,
        F = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        B = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        I = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        L = /[+-]=-?[.\d]+/,
        Y = /[^,'"\[\]\s]+/gi,
        N = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        U = {},
        X = {},
        q = t => (X = yt(t, U)) && Ti,
        G = (t, e) => console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()"),
        V = (t, e) => !e && console.warn(t),
        j = (t, e) => t && (U[t] = e) && X && (X[t] = e) || U,
        Q = () => 0,
        W = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
        },
        H = {
          suppressEvents: !0,
          kill: !1
        },
        Z = {
          suppressEvents: !0
        },
        $ = {},
        J = [],
        K = {},
        tt = {},
        et = {},
        it = 30,
        rt = [],
        st = "",
        at = t => {
          let e, i, r = t[0];
          if (A(r) || k(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
            for (i = rt.length; i-- && !rt[i].targetTest(r););
            e = rt[i]
          }
          for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Fe(t[i], e))) || t.splice(i, 1);
          return t
        },
        nt = t => t._gsap || at(Ht(t))[0]._gsap,
        ot = (t, e, i) => (i = t[e]) && k(i) ? t[e]() : C(i) && t.getAttribute && t.getAttribute(e) || i,
        lt = (t, e) => (t = t.split(",")).forEach(e) || t,
        ht = t => Math.round(1e5 * t) / 1e5 || 0,
        dt = t => Math.round(1e7 * t) / 1e7 || 0,
        _t = (t, e) => {
          let i = e.charAt(0),
            r = parseFloat(e.substr(2));
          return t = parseFloat(t), "+" === i ? t + r : "-" === i ? t - r : "*" === i ? t * r : t / r
        },
        pt = (t, e) => {
          let i = e.length,
            r = 0;
          for (; t.indexOf(e[r]) < 0 && ++r < i;);
          return r < i
        },
        ut = () => {
          let t, e, i = J.length,
            r = J.slice(0);
          for (K = {}, J.length = 0, t = 0; t < i; t++) e = r[t], e && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        ft = (t, e, i, r) => {
          J.length && !s && ut(), t.render(e, i, r || s && e < 0 && (t._initted || t._startAt)), J.length && !s && ut()
        },
        mt = t => {
          let e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(Y).length < 2 ? e : M(t) ? t.trim() : t
        },
        gt = t => t,
        ct = (t, e) => {
          for (let i in e) i in t || (t[i] = e[i]);
          return t
        },
        yt = (t, e) => {
          for (let i in e) t[i] = e[i];
          return t
        },
        vt = (t, e) => {
          for (let i in e) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = A(e[i]) ? vt(t[i] || (t[i] = {}), e[i]) : e[i]);
          return t
        },
        bt = (t, e) => {
          let i, r = {};
          for (i in t) i in e || (r[i] = t[i]);
          return r
        },
        Tt = t => {
          let e = t.parent || n,
            i = t.keyframes ? (r = R(t.keyframes), (t, e) => {
              for (let i in e) i in t || "duration" === i && r || "ease" === i || (t[i] = e[i])
            }) : ct;
          var r;
          if (D(t.inherit))
            for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
          return t
        },
        xt = function(t, e) {
          let i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            a = arguments.length > 4 ? arguments[4] : void 0,
            n = t[s];
          if (a)
            for (i = e[a]; n && n[a] > i;) n = n._prev;
          return n ? (e._next = n._next, n._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[s] = e, e._prev = n, e.parent = e._dp = t, e
        },
        wt = function(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "_first",
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "_last",
            s = e._prev,
            a = e._next;
          s ? s._next = a : t[i] === e && (t[i] = a), a ? a._prev = s : t[r] === e && (t[r] = s), e._next = e._prev = e.parent = null
        },
        Mt = (t, e) => {
          t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
        },
        kt = (t, e) => {
          if (t && (!e || e._end > t._dur || e._start < 0)) {
            let e = t;
            for (; e;) e._dirty = 1, e = e.parent
          }
          return t
        },
        Ot = (t, e, i, r) => t._startAt && (s ? t._startAt.revert(H) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r)),
        Ct = t => !t || t._ts && Ct(t.parent),
        At = t => t._repeat ? Dt(t._tTime, t = t.duration() + t._rDelay) * t : 0,
        Dt = (t, e) => {
          let i = Math.floor(t /= e);
          return t && i === t ? i - 1 : i
        },
        Et = (t, e) => (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur),
        St = t => t._end = dt(t._start + (t._tDur / Math.abs(t._ts || t._rts || c) || 0)),
        Pt = (t, e) => {
          let i = t._dp;
          return i && i.smoothChildTiming && t._ts && (t._start = dt(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), St(t), i._dirty || kt(i, t)), t
        },
        Rt = (t, e) => {
          let i;
          if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Et(t.rawTime(), e), (!e._dur || Vt(0, e.totalDuration(), i) - e._tTime > c) && e.render(i, !0)), kt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
              for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
            t._zTime = -1e-8
          }
        },
        zt = (t, e, i, r) => (e.parent && Mt(e), e._start = dt((O(i) ? i : i || t !== n ? Xt(t, i, e) : t._time) + e._delay), e._end = dt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), xt(t, e, "_first", "_last", t._sort ? "_start" : 0), Lt(e) || (t._recent = e), r || Rt(t, e), t._ts < 0 && Pt(t, t._tTime), t),
        Ft = (t, e) => (U.ScrollTrigger || G("scrollTrigger", e)) && U.ScrollTrigger.create(e, t),
        Bt = (t, e, i, r, a) => (qe(t, e, a), t._initted ? !i && t._pt && !s && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && _ !== xe.frame ? (J.push(t), t._lazy = [a, r], 1) : void 0 : 1),
        It = t => {
          let {
            parent: e
          } = t;
          return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || It(e))
        },
        Lt = t => {
          let {
            data: e
          } = t;
          return "isFromStart" === e || "isStart" === e
        },
        Yt = (t, e, i, r) => {
          let s = t._repeat,
            a = dt(e) || 0,
            n = t._tTime / t._tDur;
          return n && !r && (t._time *= a / t._dur), t._dur = a, t._tDur = s ? s < 0 ? 1e10 : dt(a * (s + 1) + t._rDelay * s) : a, n > 0 && !r && Pt(t, t._tTime = t._tDur * n), t.parent && St(t), i || kt(t.parent, t), t
        },
        Nt = t => t instanceof Ie ? kt(t) : Yt(t, t._dur),
        Ut = {
          _start: 0,
          endTime: Q,
          totalDuration: Q
        },
        Xt = (t, e, i) => {
          let r, s, a, n = t.labels,
            o = t._recent || Ut,
            l = t.duration() >= g ? o.endTime(!1) : t._dur;
          return M(e) && (isNaN(e) || e in n) ? (s = e.charAt(0), a = "%" === e.substr(-1), r = e.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (e = e.replace(/=/, "")), ("<" === s ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (a ? (r < 0 ? o : i).totalDuration() / 100 : 1)) : r < 0 ? (e in n || (n[e] = l), n[e]) : (s = parseFloat(e.charAt(r - 1) + e.substr(r + 1)), a && i && (s = s / 100 * (R(i) ? i[0] : i).totalDuration()), r > 1 ? Xt(t, e.substr(0, r - 1), i) + s : l + s)) : null == e ? l : +e
        },
        qt = (t, e, i) => {
          let r, s, a = O(e[1]),
            n = (a ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[n];
          if (a && (o.duration = e[1]), o.parent = i, t) {
            for (r = o, s = i; s && !("immediateRender" in r);) r = s.vars.defaults || {}, s = D(s.vars.inherit) && s.parent;
            o.immediateRender = D(r.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[n - 1]
          }
          return new We(e[0], o, e[n + 1])
        },
        Gt = (t, e) => t || 0 === t ? e(t) : e,
        Vt = (t, e, i) => i < t ? t : i > e ? e : i,
        jt = (t, e) => M(t) && (e = N.exec(t)) ? e[1] : "",
        Qt = [].slice,
        Wt = (t, e) => t && A(t) && "length" in t && (!e && !t.length || t.length - 1 in t && A(t[0])) && !t.nodeType && t !== o,
        Ht = (t, e, i) => a && !e && a.selector ? a.selector(t) : !M(t) || i || !l && we() ? R(t) ? function(t, e) {
          let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return t.forEach((t => M(t) && !e || Wt(t, 1) ? i.push(...Ht(t)) : i.push(t))) || i
        }(t, i) : Wt(t) ? Qt.call(t, 0) : t ? [t] : [] : Qt.call((e || h).querySelectorAll(t), 0),
        Zt = t => (t = Ht(t)[0] || V("Invalid scope") || {}, e => {
          let i = t.current || t.nativeElement || t;
          return Ht(e, i.querySelectorAll ? i : i === t ? V("Invalid scope") || h.createElement("div") : t)
        }),
        $t = t => t.sort((() => .5 - Math.random())),
        Jt = t => {
          if (k(t)) return t;
          let e = A(t) ? t : {
              each: t
            },
            i = Ee(e.ease),
            r = e.from || 0,
            s = parseFloat(e.base) || 0,
            a = {},
            n = r > 0 && r < 1,
            o = isNaN(r) || n,
            l = e.axis,
            h = r,
            d = r;
          return M(r) ? h = d = {
            center: .5,
            edges: .5,
            end: 1
          } [r] || 0 : !n && o && (h = r[0], d = r[1]), (t, n, _) => {
            let p, u, f, m, c, y, v, b, x, w = (_ || e).length,
              M = a[w];
            if (!M) {
              if (x = "auto" === e.grid ? 0 : (e.grid || [1, g])[1], !x) {
                for (v = -g; v < (v = _[x++].getBoundingClientRect().left) && x < w;);
                x--
              }
              for (M = a[w] = [], p = o ? Math.min(x, w) * h - .5 : r % x, u = x === g ? 0 : o ? w * d / x - .5 : r / x | 0, v = 0, b = g, y = 0; y < w; y++) f = y % x - p, m = u - (y / x | 0), M[y] = c = l ? Math.abs("y" === l ? m : f) : T(f * f + m * m), c > v && (v = c), c < b && (b = c);
              "random" === r && $t(M), M.max = v - b, M.min = b, M.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : l ? "y" === l ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === r ? -1 : 1), M.b = w < 0 ? s - w : s, M.u = jt(e.amount || e.each) || 0, i = i && w < 0 ? Ae(i) : i
            }
            return w = (M[t] - M.min) / M.max || 0, dt(M.b + (i ? i(w) : w) * M.v) + M.u
          }
        },
        Kt = t => {
          let e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return i => {
            let r = dt(Math.round(parseFloat(i) / t) * t * e);
            return (r - r % 1) / e + (O(i) ? 0 : jt(i))
          }
        },
        te = (t, e) => {
          let i, r, s = R(t);
          return !s && A(t) && (i = s = t.radius || g, t.values ? (t = Ht(t.values), (r = !O(t[0])) && (i *= i)) : t = Kt(t.increment)), Gt(e, s ? k(t) ? e => (r = t(e), Math.abs(r - e) <= i ? r : e) : e => {
            let s, a, n = parseFloat(r ? e.x : e),
              o = parseFloat(r ? e.y : 0),
              l = g,
              h = 0,
              d = t.length;
            for (; d--;) r ? (s = t[d].x - n, a = t[d].y - o, s = s * s + a * a) : s = Math.abs(t[d] - n), s < l && (l = s, h = d);
            return h = !i || l <= i ? t[h] : e, r || h === e || O(e) ? h : h + jt(e)
          } : Kt(t))
        },
        ee = (t, e, i, r) => Gt(R(t) ? !e : !0 === i ? !!(i = 0) : !r, (() => R(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? 10 ** ((i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * r) / r)),
        ie = (t, e, i) => Gt(i, (i => t[~~e(i)])),
        re = function(t, e, i) {
          let r = e - t;
          return R(t) ? ie(t, re(0, t.length), e) : Gt(i, (e => (r + (e - t) % r) % r + t))
        },
        se = (t, e, i) => {
          let r = e - t,
            s = 2 * r;
          return R(t) ? ie(t, se(0, t.length - 1), e) : Gt(i, (e => t + ((e = (s + (e - t) % s) % s || 0) > r ? s - e : e)))
        },
        ae = t => {
          let e, i, r, s, a = 0,
            n = "";
          for (; ~(e = t.indexOf("random(", a));) r = t.indexOf(")", e), s = "[" === t.charAt(e + 7), i = t.substr(e + 7, r - e - 7).match(s ? Y : z), n += t.substr(a, e - a) + ee(s ? i : +i[0], s ? 0 : +i[1], +i[2] || 1e-5), a = r + 1;
          return n + t.substr(a, t.length - a)
        },
        ne = (t, e, i, r, s) => {
          let a = e - t,
            n = r - i;
          return Gt(s, (e => i + ((e - t) / a * n || 0)))
        },
        oe = (t, e, i, r) => {
          let s = isNaN(t + e) ? 0 : i => (1 - i) * t + i * e;
          if (!s) {
            let a, n, o, l, h, d = M(t),
              _ = {};
            if (!0 === i && (r = 1) && (i = null), d) t = {
              p: t
            }, e = {
              p: e
            };
            else if (R(t) && !R(e)) {
              for (o = [], l = t.length, h = l - 2, n = 1; n < l; n++) o.push(oe(t[n - 1], t[n]));
              l--, s = t => {
                t *= l;
                let e = Math.min(h, ~~t);
                return o[e](t - e)
              }, i = e
            } else r || (t = yt(R(t) ? [] : {}, t));
            if (!o) {
              for (a in e) Ue.call(_, t, a, "get", e[a]);
              s = e => ri(e, _) || (d ? t.p : t)
            }
          }
          return Gt(i, s)
        },
        le = (t, e, i) => {
          let r, s, a, n = t.labels,
            o = g;
          for (r in n) s = n[r] - e, s < 0 == !!i && s && o > (s = Math.abs(s)) && (a = r, o = s);
          return a
        },
        he = (t, e, i) => {
          let r, s, n, o = t.vars,
            l = o[e],
            h = a,
            d = t._ctx;
          if (l) return r = o[e + "Params"], s = o.callbackScope || t, i && J.length && ut(), d && (a = d), n = r ? l.apply(s, r) : l.call(s), a = h, n
        },
        de = t => (Mt(t), t.scrollTrigger && t.scrollTrigger.kill(!!s), t.progress() < 1 && he(t, "onInterrupt"), t),
        _e = [],
        pe = t => {
          if (E() && t) {
            let e = (t = !t.name && t.default || t).name,
              i = k(t),
              r = e && !i && t.init ? function() {
                this._props = []
              } : t,
              s = {
                init: Q,
                render: ri,
                add: Ue,
                kill: ai,
                modifier: si,
                rawVars: 0
              },
              a = {
                targetTest: 0,
                get: 0,
                getSetter: Ke,
                aliases: {},
                register: 0
              };
            if (we(), t !== r) {
              if (tt[e]) return;
              ct(r, ct(bt(t, s), a)), yt(r.prototype, yt(s, bt(t, a))), tt[r.prop = e] = r, t.targetTest && (rt.push(r), $[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            j(e, r), t.register && t.register(Ti, r, li)
          } else t && _e.push(t)
        },
        ue = 255,
        fe = {
          aqua: [0, ue, ue],
          lime: [0, ue, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, ue],
          navy: [0, 0, 128],
          white: [ue, ue, ue],
          olive: [128, 128, 0],
          yellow: [ue, ue, 0],
          orange: [ue, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [ue, 0, 0],
          pink: [ue, 192, 203],
          cyan: [0, ue, ue],
          transparent: [ue, ue, ue, 0]
        },
        me = (t, e, i) => (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * ue + .5 | 0,
        ge = (t, e, i) => {
          let r, s, a, n, o, l, h, d, _, p, u = t ? O(t) ? [t >> 16, t >> 8 & ue, t & ue] : 0 : fe.black;
          if (!u) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), fe[t]) u = fe[t];
            else if ("#" === t.charAt(0)) {
              if (t.length < 6 && (r = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + r + r + s + s + a + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return u = parseInt(t.substr(1, 6), 16), [u >> 16, u >> 8 & ue, u & ue, parseInt(t.substr(7), 16) / 255];
              u = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & ue, t & ue]
            } else if ("hsl" === t.substr(0, 3))
              if (u = p = t.match(z), e) {
                if (~t.indexOf("=")) return u = t.match(F), i && u.length < 4 && (u[3] = 1), u
              } else n = +u[0] % 360 / 360, o = +u[1] / 100, l = +u[2] / 100, s = l <= .5 ? l * (o + 1) : l + o - l * o, r = 2 * l - s, u.length > 3 && (u[3] *= 1), u[0] = me(n + 1 / 3, r, s), u[1] = me(n, r, s), u[2] = me(n - 1 / 3, r, s);
            else u = t.match(z) || fe.transparent;
            u = u.map(Number)
          }
          return e && !p && (r = u[0] / ue, s = u[1] / ue, a = u[2] / ue, h = Math.max(r, s, a), d = Math.min(r, s, a), l = (h + d) / 2, h === d ? n = o = 0 : (_ = h - d, o = l > .5 ? _ / (2 - h - d) : _ / (h + d), n = h === r ? (s - a) / _ + (s < a ? 6 : 0) : h === s ? (a - r) / _ + 2 : (r - s) / _ + 4, n *= 60), u[0] = ~~(n + .5), u[1] = ~~(100 * o + .5), u[2] = ~~(100 * l + .5)), i && u.length < 4 && (u[3] = 1), u
        },
        ce = t => {
          let e = [],
            i = [],
            r = -1;
          return t.split(ve).forEach((t => {
            let s = t.match(B) || [];
            e.push(...s), i.push(r += s.length + 1)
          })), e.c = i, e
        },
        ye = (t, e, i) => {
          let r, s, a, n, o = "",
            l = (t + o).match(ve),
            h = e ? "hsla(" : "rgba(",
            d = 0;
          if (!l) return t;
          if (l = l.map((t => (t = ge(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")")), i && (a = ce(t), r = i.c, r.join(o) !== a.c.join(o)))
            for (s = t.replace(ve, "1").split(B), n = s.length - 1; d < n; d++) o += s[d] + (~r.indexOf(d) ? l.shift() || h + "0,0,0,0)" : (a.length ? a : l.length ? l : i).shift());
          if (!s)
            for (s = t.split(ve), n = s.length - 1; d < n; d++) o += s[d] + l[d];
          return o + s[n]
        },
        ve = function() {
          let t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in fe) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
        }(),
        be = /hsl[a]?\(/,
        Te = t => {
          let e, i = t.join(" ");
          if (ve.lastIndex = 0, ve.test(i)) return e = be.test(i), t[1] = ye(t[1], e), t[0] = ye(t[0], e, ce(t[1])), !0
        },
        xe = function() {
          let t, e, i, r, s, a, n = Date.now,
            _ = 500,
            p = 33,
            f = n(),
            m = f,
            g = 1e3 / 240,
            c = g,
            y = [],
            v = i => {
              let o, l, h, d, u = n() - m,
                b = !0 === i;
              if (u > _ && (f += u - p), m += u, h = m - f, o = h - c, (o > 0 || b) && (d = ++r.frame, s = h - 1e3 * r.time, r.time = h /= 1e3, c += o + (o >= g ? 4 : g - o), l = 1), b || (t = e(v)), l)
                for (a = 0; a < y.length; a++) y[a](h, s, d, i)
            };
          return r = {
            time: 0,
            frame: 0,
            tick() {
              v(!0)
            },
            deltaRatio: t => s / (1e3 / (t || 60)),
            wake() {
              d && (!l && E() && (o = l = window, h = o.document || {}, U.gsap = Ti, (o.gsapVersions || (o.gsapVersions = [])).push(Ti.version), q(X || o.GreenSockGlobals || !o.gsap && o || {}), i = o.requestAnimationFrame, _e.forEach(pe)), t && r.sleep(), e = i || (t => setTimeout(t, c - 1e3 * r.time + 1 | 0)), u = 1, v(2))
            },
            sleep() {
              (i ? o.cancelAnimationFrame : clearTimeout)(t), u = 0, e = Q
            },
            lagSmoothing(t, e) {
              _ = t || 1 / 0, p = Math.min(e || 33, _)
            },
            fps(t) {
              g = 1e3 / (t || 240), c = 1e3 * r.time + g
            },
            add(t, e, i) {
              let s = e ? (e, i, a, n) => {
                t(e, i, a, n), r.remove(s)
              } : t;
              return r.remove(t), y[i ? "unshift" : "push"](s), we(), s
            },
            remove(t, e) {
              ~(e = y.indexOf(t)) && y.splice(e, 1) && a >= e && a--
            },
            _listeners: y
          }, r
        }(),
        we = () => !u && xe.wake(),
        Me = {},
        ke = /^[\d.\-M][\d.\-,\s]/,
        Oe = /["']/g,
        Ce = t => {
          let e, i, r, s = {},
            a = t.substr(1, t.length - 3).split(":"),
            n = a[0],
            o = 1,
            l = a.length;
          for (; o < l; o++) i = a[o], e = o !== l - 1 ? i.lastIndexOf(",") : i.length, r = i.substr(0, e), s[n] = isNaN(r) ? r.replace(Oe, "").trim() : +r, n = i.substr(e + 1).trim();
          return s
        },
        Ae = t => e => 1 - t(1 - e),
        De = (t, e) => {
          let i, r = t._first;
          for (; r;) r instanceof Ie ? De(r, e) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === e || (r.timeline ? De(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next
        },
        Ee = (t, e) => t && (k(t) ? t : Me[t] || (t => {
          let e = (t + "").split("("),
            i = Me[e[0]];
          return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Ce(e[1])] : (t => {
            let e = t.indexOf("(") + 1,
              i = t.indexOf(")"),
              r = t.indexOf("(", e);
            return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
          })(t).split(",").map(mt)) : Me._CE && ke.test(t) ? Me._CE("", t) : i
        })(t)) || e,
        Se = function(t, e) {
          let i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t => 1 - e(1 - t),
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t => t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2,
            a = {
              easeIn: e,
              easeOut: r,
              easeInOut: s
            };
          return lt(t, (t => {
            Me[t] = U[t] = a, Me[i = t.toLowerCase()] = r;
            for (let e in a) Me[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Me[t + "." + e] = a[e]
          })), a
        },
        Pe = t => e => e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2,
        Re = (t, e, i) => {
          let r = e >= 1 ? e : 1,
            s = (i || (t ? .3 : .45)) / (e < 1 ? e : 1),
            a = s / y * (Math.asin(1 / r) || 0),
            n = t => 1 === t ? 1 : r * 2 ** (-10 * t) * w((t - a) * s) + 1,
            o = "out" === t ? n : "in" === t ? t => 1 - n(1 - t) : Pe(n);
          return s = y / s, o.config = (e, i) => Re(t, e, i), o
        },
        ze = function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1.70158,
            i = t => t ? --t * t * ((e + 1) * t + e) + 1 : 0,
            r = "out" === t ? i : "in" === t ? t => 1 - i(1 - t) : Pe(i);
          return r.config = e => ze(t, e), r
        };
      lt("Linear,Quad,Cubic,Quart,Quint,Strong", ((t, e) => {
        let i = e < 5 ? e + 1 : e;
        Se(t + ",Power" + (i - 1), e ? t => t ** i : t => t, (t => 1 - (1 - t) ** i), (t => t < .5 ? (2 * t) ** i / 2 : 1 - (2 * (1 - t)) ** i / 2))
      })), Me.Linear.easeNone = Me.none = Me.Linear.easeIn, Se("Elastic", Re("in"), Re("out"), Re()), ((t, e) => {
        let i = 1 / e,
          r = 2 * i,
          s = 2.5 * i,
          a = a => a < i ? t * a * a : a < r ? t * (a - 1.5 / e) ** 2 + .75 : a < s ? t * (a -= 2.25 / e) * a + .9375 : t * (a - 2.625 / e) ** 2 + .984375;
        Se("Bounce", (t => 1 - a(1 - t)), a)
      })(7.5625, 2.75), Se("Expo", (t => t ? 2 ** (10 * (t - 1)) : 0)), Se("Circ", (t => -(T(1 - t * t) - 1))), Se("Sine", (t => 1 === t ? 1 : 1 - x(t * v))), Se("Back", ze("in"), ze("out"), ze()), Me.SteppedEase = Me.steps = U.SteppedEase = {
        config() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            e = arguments.length > 1 ? arguments[1] : void 0,
            i = 1 / t,
            r = t + (e ? 0 : 1),
            s = e ? 1 : 0;
          return t => ((r * Vt(0, .99999999, t) | 0) + s) * i
        }
      }, m.ease = Me["quad.out"], lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (t => st += t + "," + t + "Params,"));
      class Fe {
        constructor(t, e) {
          this.id = b++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ot, this.set = e ? e.getSetter : Ke
        }
      }
      class Be {
        constructor(t) {
          this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Yt(this, +t.duration, 1, 1), this.data = t.data, a && (this._ctx = a, a.data.push(this)), u || xe.wake()
        }
        delay(t) {
          return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }
        duration(t) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        totalDuration(t) {
          return arguments.length ? (this._dirty = 0, Yt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        totalTime(t, e) {
          if (we(), !arguments.length) return this._tTime;
          let i = this._dp;
          if (i && i.smoothChildTiming && this._ts) {
            for (Pt(this, t), !i._dp || i.parent || Rt(i, this); i && i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && zt(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === c || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ft(this, t, e)), this
        }
        time(t, e) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + At(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        totalProgress(t, e) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        progress(t, e) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + At(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        iteration(t, e) {
          let i = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Dt(this._tTime, i) + 1 : 1
        }
        timeScale(t) {
          if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
          if (this._rts === t) return this;
          let e = this.parent && this._ts ? Et(this.parent._time, this) : this._tTime;
          return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, this.totalTime(Vt(-Math.abs(this._delay), this._tDur, e), !0), St(this), (t => {
            let e = t.parent;
            for (; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
          })(this)
        }
        paused(t) {
          return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (we(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== c && (this._tTime -= c)))), this) : this._ps
        }
        startTime(t) {
          if (arguments.length) {
            this._start = t;
            let e = this.parent || this._dp;
            return e && (e._sort || !this.parent) && zt(e, this, t - this._delay), this
          }
          return this._start
        }
        endTime(t) {
          return this._start + (D(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        rawTime(t) {
          let e = this.parent || this._dp;
          return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Et(e.rawTime(t), this) : this._tTime : this._tTime
        }
        revert() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
            e = s;
          return s = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), s = e, this
        }
        globalTime(t) {
          let e = this,
            i = arguments.length ? t : e.rawTime();
          for (; e;) i = e._start + i / (e._ts || 1), e = e._dp;
          return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(t) : i
        }
        repeat(t) {
          return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Nt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        repeatDelay(t) {
          if (arguments.length) {
            let e = this._time;
            return this._rDelay = t, Nt(this), e ? this.time(e) : this
          }
          return this._rDelay
        }
        yoyo(t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }
        seek(t, e) {
          return this.totalTime(Xt(this, t), D(e))
        }
        restart(t, e) {
          return this.play().totalTime(t ? -this._delay : 0, D(e))
        }
        play(t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }
        reverse(t, e) {
          return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }
        pause(t, e) {
          return null != t && this.seek(t, e), this.paused(!0)
        }
        resume() {
          return this.paused(!1)
        }
        reversed(t) {
          return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
        }
        invalidate() {
          return this._initted = this._act = 0, this._zTime = -1e-8, this
        }
        isActive() {
          let t, e = this.parent || this._dp,
            i = this._start;
          return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - c))
        }
        eventCallback(t, e, i) {
          let r = this.vars;
          return arguments.length > 1 ? (e ? (r[t] = e, i && (r[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
        }
        then(t) {
          let e = this;
          return new Promise((i => {
            let r = k(t) ? t : gt,
              s = () => {
                let t = e.then;
                e.then = null, k(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), i(r), e.then = t
              };
            e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
          }))
        }
        kill() {
          de(this)
        }
      }
      ct(Be.prototype, {
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
      class Ie extends Be {
        constructor() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
          super(t), this.labels = {}, this.smoothChildTiming = !!t.smoothChildTiming, this.autoRemoveChildren = !!t.autoRemoveChildren, this._sort = D(t.sortChildren), n && zt(t.parent || n, this, e), t.reversed && this.reverse(), t.paused && this.paused(!0), t.scrollTrigger && Ft(this, t.scrollTrigger)
        }
        to(t, e, i) {
          return qt(0, arguments, this), this
        }
        from(t, e, i) {
          return qt(1, arguments, this), this
        }
        fromTo(t, e, i, r) {
          return qt(2, arguments, this), this
        }
        set(t, e, i) {
          return e.duration = 0, e.parent = this, Tt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new We(t, e, Xt(this, i), 1), this
        }
        call(t, e, i) {
          return zt(this, We.delayedCall(0, t, e), i)
        }
        staggerTo(t, e, i, r, s, a, n) {
          return i.duration = e, i.stagger = i.stagger || r, i.onComplete = a, i.onCompleteParams = n, i.parent = this, new We(t, i, Xt(this, s)), this
        }
        staggerFrom(t, e, i, r, s, a, n) {
          return i.runBackwards = 1, Tt(i).immediateRender = D(i.immediateRender), this.staggerTo(t, e, i, r, s, a, n)
        }
        staggerFromTo(t, e, i, r, s, a, n, o) {
          return r.startAt = i, Tt(r).immediateRender = D(r.immediateRender), this.staggerTo(t, e, r, s, a, n, o)
        }
        render(t, e, i) {
          let r, a, o, l, h, d, _, p, u, f, m, g, y = this._time,
            v = this._dirty ? this.totalDuration() : this._tDur,
            b = this._dur,
            T = t <= 0 ? 0 : dt(t),
            x = this._zTime < 0 != t < 0 && (this._initted || !b);
          if (this !== n && T > v && t >= 0 && (T = v), T !== this._tTime || i || x) {
            if (y !== this._time && b && (T += this._time - y, t += this._time - y), r = T, u = this._start, p = this._ts, d = !p, x && (b || (y = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
              if (m = this._yoyo, h = b + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * h + t, e, i);
              if (r = dt(T % h), T === v ? (l = this._repeat, r = b) : (l = ~~(T / h), l && l === T / h && (r = b, l--), r > b && (r = b)), f = Dt(this._tTime, h), !y && this._tTime && f !== l && this._tTime - f * h - this._dur <= 0 && (f = l), m && 1 & l && (r = b - r, g = 1), l !== f && !this._lock) {
                let t = m && 1 & f,
                  i = t === (m && 1 & l);
                if (l < f && (t = !t), y = t ? 0 : T % b ? b : T, this._lock = 1, this.render(y || (g ? 0 : dt(l * h)), e, !b)._lock = 0, this._tTime = T, !e && this.parent && he(this, "onRepeat"), this.vars.repeatRefresh && !g && (this.invalidate()._lock = 1), y && y !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                if (b = this._dur, v = this._tDur, i && (this._lock = 2, y = t ? b : -1e-4, this.render(y, !0), this.vars.repeatRefresh && !g && this.invalidate()), this._lock = 0, !this._ts && !d) return this;
                De(this, g)
              }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (_ = ((t, e, i) => {
                let r;
                if (i > e)
                  for (r = t._first; r && r._start <= i;) {
                    if ("isPause" === r.data && r._start > e) return r;
                    r = r._next
                  } else
                    for (r = t._last; r && r._start >= i;) {
                      if ("isPause" === r.data && r._start < e) return r;
                      r = r._prev
                    }
              })(this, dt(y), dt(r)), _ && (T -= r - (r = _._start))), this._tTime = T, this._time = r, this._act = !p, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, y = 0), !y && r && !e && !l && (he(this, "onStart"), this._tTime !== T)) return this;
            if (r >= y && t >= 0)
              for (a = this._first; a;) {
                if (o = a._next, (a._act || r >= a._start) && a._ts && _ !== a) {
                  if (a.parent !== this) return this.render(t, e, i);
                  if (a.render(a._ts > 0 ? (r - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (r - a._start) * a._ts, e, i), r !== this._time || !this._ts && !d) {
                    _ = 0, o && (T += this._zTime = -1e-8);
                    break
                  }
                }
                a = o
              } else {
                a = this._last;
                let n = t < 0 ? t : r;
                for (; a;) {
                  if (o = a._prev, (a._act || n <= a._end) && a._ts && _ !== a) {
                    if (a.parent !== this) return this.render(t, e, i);
                    if (a.render(a._ts > 0 ? (n - a._start) * a._ts : (a._dirty ? a.totalDuration() : a._tDur) + (n - a._start) * a._ts, e, i || s && (a._initted || a._startAt)), r !== this._time || !this._ts && !d) {
                      _ = 0, o && (T += this._zTime = n ? -1e-8 : c);
                      break
                    }
                  }
                  a = o
                }
              }
            if (_ && !e && (this.pause(), _.render(r >= y ? 0 : -1e-8)._zTime = r >= y ? 1 : -1, this._ts)) return this._start = u, St(this), this.render(t, e, i);
            this._onUpdate && !e && he(this, "onUpdate", !0), (T === v && this._tTime >= this.totalDuration() || !T && y) && (u !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((t || !b) && (T === v && this._ts > 0 || !T && this._ts < 0) && Mt(this, 1), e || t < 0 && !y || !T && !y && v || (he(this, T === v && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(T < v && this.timeScale() > 0) && this._prom())))
          }
          return this
        }
        add(t, e) {
          if (O(e) || (e = Xt(this, e, t)), !(t instanceof Be)) {
            if (R(t)) return t.forEach((t => this.add(t, e))), this;
            if (M(t)) return this.addLabel(t, e);
            if (!k(t)) return this;
            t = We.delayedCall(0, t)
          }
          return this !== t ? zt(this, t, e) : this
        }
        getChildren() {
          let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -g,
            s = [],
            a = this._first;
          for (; a;) a._start >= r && (a instanceof We ? e && s.push(a) : (i && s.push(a), t && s.push(...a.getChildren(!0, e, i)))), a = a._next;
          return s
        }
        getById(t) {
          let e = this.getChildren(1, 1, 1),
            i = e.length;
          for (; i--;)
            if (e[i].vars.id === t) return e[i]
        }
        remove(t) {
          return M(t) ? this.removeLabel(t) : k(t) ? this.killTweensOf(t) : (wt(this, t), t === this._recent && (this._recent = this._last), kt(this))
        }
        totalTime(t, e) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = dt(xe.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), super.totalTime(t, e), this._forcing = 0, this) : this._tTime
        }
        addLabel(t, e) {
          return this.labels[t] = Xt(this, e), this
        }
        removeLabel(t) {
          return delete this.labels[t], this
        }
        addPause(t, e, i) {
          let r = We.delayedCall(0, e || Q, i);
          return r.data = "isPause", this._hasPause = 1, zt(this, r, Xt(this, t))
        }
        removePause(t) {
          let e = this._first;
          for (t = Xt(this, t); e;) e._start === t && "isPause" === e.data && Mt(e), e = e._next
        }
        killTweensOf(t, e, i) {
          let r = this.getTweensOf(t, i),
            s = r.length;
          for (; s--;) Le !== r[s] && r[s].kill(t, e);
          return this
        }
        getTweensOf(t, e) {
          let i, r = [],
            s = Ht(t),
            a = this._first,
            n = O(e);
          for (; a;) a instanceof We ? pt(a._targets, s) && (n ? (!Le || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && r.push(a) : (i = a.getTweensOf(s, e)).length && r.push(...i), a = a._next;
          return r
        }
        tweenTo(t, e) {
          e = e || {};
          let i, r = this,
            s = Xt(r, t),
            {
              startAt: a,
              onStart: n,
              onStartParams: o,
              immediateRender: l
            } = e,
            h = We.to(r, ct({
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: s,
              overwrite: "auto",
              duration: e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || c,
              onStart: () => {
                if (r.pause(), !i) {
                  let t = e.duration || Math.abs((s - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                  h._dur !== t && Yt(h, t, 0, 1).render(h._time, !0, !0), i = 1
                }
                n && n.apply(h, o || [])
              }
            }, e));
          return l ? h.render(0) : h
        }
        tweenFromTo(t, e, i) {
          return this.tweenTo(e, ct({
            startAt: {
              time: Xt(this, t)
            }
          }, i))
        }
        recent() {
          return this._recent
        }
        nextLabel() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return le(this, Xt(this, t))
        }
        previousLabel() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._time;
          return le(this, Xt(this, t), 1)
        }
        currentLabel(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + c)
        }
        shiftChildren(t, e) {
          let i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            s = this._first,
            a = this.labels;
          for (; s;) s._start >= r && (s._start += t, s._end += t), s = s._next;
          if (e)
            for (i in a) a[i] >= r && (a[i] += t);
          return kt(this)
        }
        invalidate(t) {
          let e = this._first;
          for (this._lock = 0; e;) e.invalidate(t), e = e._next;
          return super.invalidate(t)
        }
        clear() {
          let t, e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            i = this._first;
          for (; i;) t = i._next, this.remove(i), i = t;
          return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), kt(this)
        }
        totalDuration(t) {
          let e, i, r, s = 0,
            a = this,
            o = a._last,
            l = g;
          if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
          if (a._dirty) {
            for (r = a.parent; o;) e = o._prev, o._dirty && o.totalDuration(), i = o._start, i > l && a._sort && o._ts && !a._lock ? (a._lock = 1, zt(a, o, i - o._delay, 1)._lock = 0) : l = i, i < 0 && o._ts && (s -= i, (!r && !a._dp || r && r.smoothChildTiming) && (a._start += i / a._ts, a._time -= i, a._tTime -= i), a.shiftChildren(-i, !1, -Infinity), l = 0), o._end > s && o._ts && (s = o._end), o = e;
            Yt(a, a === n && a._time > s ? a._time : s, 1, 1), a._dirty = 0
          }
          return a._tDur
        }
        static updateRoot(t) {
          if (n._ts && (ft(n, Et(t, n)), _ = xe.frame), xe.frame >= it) {
            it += f.autoSleep || 120;
            let t = n._first;
            if ((!t || !t._ts) && f.autoSleep && xe._listeners.length < 2) {
              for (; t && !t._ts;) t = t._next;
              t || xe.sleep()
            }
          }
        }
      }
      ct(Ie.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
      });
      let Le, Ye, Ne = function(t, e, i, r, s, a, n) {
          let o, l, h, d, _, p, u, f, m = new li(this._pt, t, e, 0, 1, ii, null, s),
            g = 0,
            c = 0;
          for (m.b = i, m.e = r, i += "", (u = ~(r += "").indexOf("random(")) && (r = ae(r)), a && (f = [i, r], a(f, t, e), i = f[0], r = f[1]), l = i.match(I) || []; o = I.exec(r);) d = o[0], _ = r.substring(g, o.index), h ? h = (h + 1) % 5 : "rgba(" === _.substr(-5) && (h = 1), d !== l[c++] && (p = parseFloat(l[c - 1]) || 0, m._pt = {
            _next: m._pt,
            p: _ || 1 === c ? _ : ",",
            s: p,
            c: "=" === d.charAt(1) ? _t(p, d) - p : parseFloat(d) - p,
            m: h && h < 4 ? Math.round : 0
          }, g = I.lastIndex);
          return m.c = g < r.length ? r.substring(g, r.length) : "", m.fp = n, (L.test(r) || u) && (m.e = 0), this._pt = m, m
        },
        Ue = function(t, e, i, r, s, a, n, o, l, h) {
          k(r) && (r = r(s || 0, t, a));
          let d, _ = t[e],
            p = "get" !== i ? i : k(_) ? l ? t[e.indexOf("set") || !k(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : _,
            u = k(_) ? l ? $e : Ze : He;
          if (M(r) && (~r.indexOf("random(") && (r = ae(r)), "=" === r.charAt(1) && (d = _t(p, r) + (jt(p) || 0), (d || 0 === d) && (r = d))), !h || p !== r || Ye) return isNaN(p * r) || "" === r ? (!_ && !(e in t) && G(e, r), Ne.call(this, t, e, p, r, u, o || f.stringFilter, l)) : (d = new li(this._pt, t, e, +p || 0, r - (p || 0), "boolean" == typeof _ ? ei : ti, 0, u), l && (d.fp = l), n && d.modifier(n, this, t), this._pt = d)
        },
        Xe = (t, e, i, r, s, a) => {
          let n, o, l, h;
          if (tt[t] && !1 !== (n = new tt[t]).init(s, n.rawVars ? e[t] : ((t, e, i, r, s) => {
              if (k(t) && (t = Ve(t, s, e, i, r)), !A(t) || t.style && t.nodeType || R(t) || P(t)) return M(t) ? Ve(t, s, e, i, r) : t;
              let a, n = {};
              for (a in t) n[a] = Ve(t[a], s, e, i, r);
              return n
            })(e[t], r, s, a, i), i, r, a) && (i._pt = o = new li(i._pt, s, t, 0, 1, n.render, n, 0, n.priority), i !== p))
            for (l = i._ptLookup[i._targets.indexOf(s)], h = n._props.length; h--;) l[n._props[h]] = o;
          return n
        },
        qe = (t, e, i) => {
          let a, o, l, h, d, _, p, u, f, y, v, b, T, x = t.vars,
            {
              ease: w,
              startAt: M,
              immediateRender: k,
              lazy: O,
              onUpdate: C,
              onUpdateParams: A,
              callbackScope: E,
              runBackwards: S,
              yoyoEase: P,
              keyframes: R,
              autoRevert: z
            } = x,
            F = t._dur,
            B = t._startAt,
            I = t._targets,
            L = t.parent,
            Y = L && "nested" === L.data ? L.vars.targets : I,
            N = "auto" === t._overwrite && !r,
            U = t.timeline;
          if (U && (!R || !w) && (w = "none"), t._ease = Ee(w, m.ease), t._yEase = P ? Ae(Ee(!0 === P ? w : P, m.ease)) : 0, P && t._yoyo && !t._repeat && (P = t._yEase, t._yEase = t._ease, t._ease = P), t._from = !U && !!x.runBackwards, !U || R && !x.stagger) {
            if (u = I[0] ? nt(I[0]).harness : 0, b = u && x[u.prop], a = bt(x, $), B && (B._zTime < 0 && B.progress(1), e < 0 && S && k && !z ? B.render(-1, !0) : B.revert(S && F ? H : W), B._lazy = 0), M) {
              if (Mt(t._startAt = We.set(I, ct({
                  data: "isStart",
                  overwrite: !1,
                  parent: L,
                  immediateRender: !0,
                  lazy: !B && D(O),
                  startAt: null,
                  delay: 0,
                  onUpdate: C,
                  onUpdateParams: A,
                  callbackScope: E,
                  stagger: 0
                }, M))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (s || !k && !z) && t._startAt.revert(H), k && F && e <= 0 && i <= 0) return void(e && (t._zTime = e))
            } else if (S && F && !B)
              if (e && (k = !1), l = ct({
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: k && !B && D(O),
                  immediateRender: k,
                  stagger: 0,
                  parent: L
                }, a), b && (l[u.prop] = b), Mt(t._startAt = We.set(I, l)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (s ? t._startAt.revert(H) : t._startAt.render(-1, !0)), t._zTime = e, k) {
                if (!e) return
              } else qe(t._startAt, c, c);
            for (t._pt = t._ptCache = 0, O = F && D(O) || O && !F, o = 0; o < I.length; o++) {
              if (d = I[o], p = d._gsap || at(I)[o]._gsap, t._ptLookup[o] = y = {}, K[p.id] && J.length && ut(), v = Y === I ? o : Y.indexOf(d), u && !1 !== (f = new u).init(d, b || a, t, v, Y) && (t._pt = h = new li(t._pt, d, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((t => {
                  y[t] = h
                })), f.priority && (_ = 1)), !u || b)
                for (l in a) tt[l] && (f = Xe(l, a, t, v, d, Y)) ? f.priority && (_ = 1) : y[l] = h = Ue.call(t, d, l, "get", a[l], v, Y, 0, x.stringFilter);
              t._op && t._op[o] && t.kill(d, t._op[o]), N && t._pt && (Le = t, n.killTweensOf(d, y, t.globalTime(e)), T = !t.parent, Le = 0), t._pt && O && (K[p.id] = 1)
            }
            _ && oi(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = C, t._initted = (!t._op || t._pt) && !T, R && e <= 0 && U.render(g, !0, !0)
        },
        Ge = (t, e, i, r) => {
          let s, a, n = e.ease || r || "power1.inOut";
          if (R(e)) a = i[t] || (i[t] = []), e.forEach(((t, i) => a.push({
            t: i / (e.length - 1) * 100,
            v: t,
            e: n
          })));
          else
            for (s in e) a = i[s] || (i[s] = []), "ease" === s || a.push({
              t: parseFloat(t),
              v: e[s],
              e: n
            })
        },
        Ve = (t, e, i, r, s) => k(t) ? t.call(e, i, r, s) : M(t) && ~t.indexOf("random(") ? ae(t) : t,
        je = st + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Qe = {};
      lt(je + ",id,stagger,delay,duration,paused,scrollTrigger", (t => Qe[t] = 1));
      class We extends Be {
        constructor(t, e, i, s) {
          "number" == typeof e && (i.duration = e, e = i, i = null), super(s ? e : Tt(e));
          let a, o, l, h, d, _, p, u, {
              duration: m,
              delay: g,
              immediateRender: c,
              stagger: y,
              overwrite: v,
              keyframes: b,
              defaults: T,
              scrollTrigger: x,
              yoyoEase: w
            } = this.vars,
            M = e.parent || n,
            k = (R(t) || P(t) ? O(t[0]) : "length" in e) ? [t] : Ht(t);
          if (this._targets = k.length ? at(k) : V("GSAP target " + t + " not found. https://greensock.com", !f.nullTargetWarn) || [], this._ptLookup = [], this._overwrite = v, b || y || S(m) || S(g)) {
            if (e = this.vars, a = this.timeline = new Ie({
                data: "nested",
                defaults: T || {},
                targets: M && "nested" === M.data ? M.vars.targets : k
              }), a.kill(), a.parent = a._dp = this, a._start = 0, y || S(m) || S(g)) {
              if (h = k.length, p = y && Jt(y), A(y))
                for (d in y) ~je.indexOf(d) && (u || (u = {}), u[d] = y[d]);
              for (o = 0; o < h; o++) l = bt(e, Qe), l.stagger = 0, w && (l.yoyoEase = w), u && yt(l, u), _ = k[o], l.duration = +Ve(m, this, o, _, k), l.delay = (+Ve(g, this, o, _, k) || 0) - this._delay, !y && 1 === h && l.delay && (this._delay = g = l.delay, this._start += g, l.delay = 0), a.to(_, l, p ? p(o, _, k) : 0), a._ease = Me.none;
              a.duration() ? m = g = 0 : this.timeline = 0
            } else if (b) {
              Tt(ct(a.vars.defaults, {
                ease: "none"
              })), a._ease = Ee(b.ease || e.ease || "none");
              let t, i, r, s = 0;
              if (R(b)) b.forEach((t => a.to(k, t, ">"))), a.duration();
              else {
                for (d in l = {}, b) "ease" === d || "easeEach" === d || Ge(d, b[d], l, b.easeEach);
                for (d in l)
                  for (t = l[d].sort(((t, e) => t.t - e.t)), s = 0, o = 0; o < t.length; o++) i = t[o], r = {
                    ease: i.e,
                    duration: (i.t - (o ? t[o - 1].t : 0)) / 100 * m
                  }, r[d] = i.v, a.to(k, r, s), s += r.duration;
                a.duration() < m && a.to({}, {
                  duration: m - a.duration()
                })
              }
            }
            m || this.duration(m = a.duration())
          } else this.timeline = 0;
          !0 !== v || r || (Le = this, n.killTweensOf(k), Le = 0), zt(M, this, i), e.reversed && this.reverse(), e.paused && this.paused(!0), (c || !m && !b && this._start === dt(M._time) && D(c) && Ct(this) && "nested" !== M.data) && (this._tTime = -1e-8, this.render(Math.max(0, -g) || 0)), x && Ft(this, x)
        }
        render(t, e, i) {
          let r, a, n, o, l, h, d, _, p, u = this._time,
            f = this._tDur,
            m = this._dur,
            g = t < 0,
            y = t > f - c && !g ? f : t < c ? 0 : t;
          if (m) {
            if (y !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== g) {
              if (r = y, _ = this.timeline, this._repeat) {
                if (o = m + this._rDelay, this._repeat < -1 && g) return this.totalTime(100 * o + t, e, i);
                if (r = dt(y % o), y === f ? (n = this._repeat, r = m) : (n = ~~(y / o), n && n === y / o && (r = m, n--), r > m && (r = m)), h = this._yoyo && 1 & n, h && (p = this._yEase, r = m - r), l = Dt(this._tTime, o), r === u && !i && this._initted) return this._tTime = y, this;
                n !== l && (_ && this._yEase && De(_, h), !this.vars.repeatRefresh || h || this._lock || (this._lock = i = 1, this.render(dt(o * n), !0).invalidate()._lock = 0))
              }
              if (!this._initted) {
                if (Bt(this, g ? t : r, i, e, y)) return this._tTime = 0, this;
                if (u !== this._time) return this;
                if (m !== this._dur) return this.render(t, e, i)
              }
              if (this._tTime = y, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = d = (p || this._ease)(r / m), this._from && (this.ratio = d = 1 - d), r && !u && !e && !n && (he(this, "onStart"), this._tTime !== y)) return this;
              for (a = this._pt; a;) a.r(d, a.d), a = a._next;
              _ && _.render(t < 0 ? t : !r && h ? -1e-8 : _._dur * _._ease(r / this._dur), e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (g && Ot(this, t, 0, i), he(this, "onUpdate")), this._repeat && n !== l && this.vars.onRepeat && !e && this.parent && he(this, "onRepeat"), y !== this._tDur && y || this._tTime !== y || (g && !this._onUpdate && Ot(this, t, 0, !0), (t || !m) && (y === this._tDur && this._ts > 0 || !y && this._ts < 0) && Mt(this, 1), e || g && !u || !(y || u || h) || (he(this, y === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < f && this.timeScale() > 0) && this._prom()))
            }
          } else((t, e, i, r) => {
            let a, n, o, l = t.ratio,
              h = e < 0 || !e && (!t._start && It(t) && (t._initted || !Lt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Lt(t)) ? 0 : 1,
              d = t._rDelay,
              _ = 0;
            if (d && t._repeat && (_ = Vt(0, t._tDur, e), n = Dt(_, d), t._yoyo && 1 & n && (h = 1 - h), n !== Dt(t._tTime, d) && (l = 1 - h, t.vars.repeatRefresh && t._initted && t.invalidate())), h !== l || s || r || t._zTime === c || !e && t._zTime) {
              if (!t._initted && Bt(t, e, r, i, _)) return;
              for (o = t._zTime, t._zTime = e || (i ? c : 0), i || (i = e && !o), t.ratio = h, t._from && (h = 1 - h), t._time = 0, t._tTime = _, a = t._pt; a;) a.r(h, a.d), a = a._next;
              e < 0 && Ot(t, e, 0, !0), t._onUpdate && !i && he(t, "onUpdate"), _ && t._repeat && !i && t.parent && he(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === h && (h && Mt(t, 1), i || s || (he(t, h ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
            } else t._zTime || (t._zTime = e)
          })(this, t, e, i);
          return this
        }
        targets() {
          return this._targets
        }
        invalidate(t) {
          return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), super.invalidate(t)
        }
        resetTo(t, e, i, r) {
          u || xe.wake(), this._ts || this.play();
          let s, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || qe(this, a), s = this._ease(a / this._dur), ((t, e, i, r, s, a, n) => {
            let o, l, h, d, _ = (t._pt && t._ptCache || (t._ptCache = {}))[e];
            if (!_)
              for (_ = t._ptCache[e] = [], h = t._ptLookup, d = t._targets.length; d--;) {
                if (o = h[d][e], o && o.d && o.d._pt)
                  for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                if (!o) return Ye = 1, t.vars[e] = "+=0", qe(t, n), Ye = 0, 1;
                _.push(o)
              }
            for (d = _.length; d--;) l = _[d], o = l._pt || l, o.s = !r && 0 !== r || s ? o.s + (r || 0) + a * o.c : r, o.c = i - o.s, l.e && (l.e = ht(i) + jt(l.e)), l.b && (l.b = o.s + jt(l.b))
          })(this, t, e, i, r, s, a) ? this.resetTo(t, e, i, r) : (Pt(this, 0), this.parent || xt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }
        kill(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
          if (!(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? de(this) : this;
          if (this.timeline) {
            let i = this.timeline.totalDuration();
            return this.timeline.killTweensOf(t, e, Le && !0 !== Le.vars.overwrite)._first || de(this), this.parent && i !== this.timeline.totalDuration() && Yt(this, this._dur * this.timeline._tDur / i, 0, 1), this
          }
          let i, r, s, a, n, o, l, h = this._targets,
            d = t ? Ht(t) : h,
            _ = this._ptLookup,
            p = this._pt;
          if ((!e || "all" === e) && ((t, e) => {
              let i = t.length,
                r = i === e.length;
              for (; r && i-- && t[i] === e[i];);
              return i < 0
            })(h, d)) return "all" === e && (this._pt = 0), de(this);
          for ((i = this._op = this._op || [], "all" !== e && (M(e) && (n = {}, lt(e, (t => n[t] = 1)), e = n), e = ((t, e) => {
              let i, r, s, a, n = t[0] ? nt(t[0]).harness : 0,
                o = n && n.aliases;
              if (!o) return e;
              for (r in i = yt({}, e), o)
                if (r in i)
                  for (a = o[r].split(","), s = a.length; s--;) i[a[s]] = i[r];
              return i
            })(h, e)), l = h.length); l--;)
            if (~d.indexOf(h[l]))
              for (n in r = _[l], "all" === e ? (i[l] = e, a = r, s = {}) : (s = i[l] = i[l] || {}, a = e), a) o = r && r[n], o && ("kill" in o.d && !0 !== o.d.kill(n) || wt(this, o, "_pt"), delete r[n]), "all" !== s && (s[n] = 1);
          return this._initted && !this._pt && p && de(this), this
        }
        static to(t, e) {
          return new We(t, e, arguments[2])
        }
        static from(t, e) {
          return qt(1, arguments)
        }
        static delayedCall(t, e, i, r) {
          return new We(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: i,
            onReverseCompleteParams: i,
            callbackScope: r
          })
        }
        static fromTo(t, e, i) {
          return qt(2, arguments)
        }
        static set(t, e) {
          return e.duration = 0, e.repeatDelay || (e.repeat = 0), new We(t, e)
        }
        static killTweensOf(t, e, i) {
          return n.killTweensOf(t, e, i)
        }
      }
      ct(We.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }), lt("staggerTo,staggerFrom,staggerFromTo", (t => {
        We[t] = function() {
          let e = new Ie,
            i = Qt.call(arguments, 0);
          return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
      }));
      let He = (t, e, i) => t[e] = i,
        Ze = (t, e, i) => t[e](i),
        $e = (t, e, i, r) => t[e](r.fp, i),
        Je = (t, e, i) => t.setAttribute(e, i),
        Ke = (t, e) => k(t[e]) ? Ze : C(t[e]) && t.setAttribute ? Je : He,
        ti = (t, e) => e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e),
        ei = (t, e) => e.set(e.t, e.p, !!(e.s + e.c * t), e),
        ii = function(t, e) {
          let i = e._pt,
            r = "";
          if (!t && e.b) r = e.b;
          else if (1 === t && e.e) r = e.e;
          else {
            for (; i;) r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + r, i = i._next;
            r += e.c
          }
          e.set(e.t, e.p, r, e)
        },
        ri = function(t, e) {
          let i = e._pt;
          for (; i;) i.r(t, i.d), i = i._next
        },
        si = function(t, e, i, r) {
          let s, a = this._pt;
          for (; a;) s = a._next, a.p === r && a.modifier(t, e, i), a = s
        },
        ai = function(t) {
          let e, i, r = this._pt;
          for (; r;) i = r._next, r.p === t && !r.op || r.op === t ? wt(this, r, "_pt") : r.dep || (e = 1), r = i;
          return !e
        },
        ni = (t, e, i, r) => {
          r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
        },
        oi = t => {
          let e, i, r, s, a = t._pt;
          for (; a;) {
            for (e = a._next, i = r; i && i.pr > a.pr;) i = i._next;
            (a._prev = i ? i._prev : s) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : s = a, a = e
          }
          t._pt = r
        };
      class li {
        constructor(t, e, i, r, s, a, n, o, l) {
          this.t = e, this.s = r, this.c = s, this.p = i, this.r = a || ti, this.d = n || this, this.set = o || He, this.pr = l || 0, this._next = t, t && (t._prev = this)
        }
        modifier(t, e, i) {
          this.mSet = this.mSet || this.set, this.set = ni, this.m = t, this.mt = i, this.tween = e
        }
      }
      lt(st + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (t => $[t] = 1)), U.TweenMax = U.TweenLite = We, U.TimelineLite = U.TimelineMax = Ie, n = new Ie({
        sortChildren: !1,
        defaults: m,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
      }), f.stringFilter = Te;
      let hi = [],
        di = {},
        _i = [],
        pi = 0,
        ui = 0,
        fi = t => (di[t] || _i).map((t => t())),
        mi = () => {
          let t = Date.now(),
            e = [];
          t - pi > 2 && (fi("matchMediaInit"), hi.forEach((t => {
            let i, r, s, a, n = t.queries,
              l = t.conditions;
            for (r in n) i = o.matchMedia(n[r]).matches, i && (s = 1), i !== l[r] && (l[r] = i, a = 1);
            a && (t.revert(), s && e.push(t))
          })), fi("matchMediaRevert"), e.forEach((t => t.onMatch(t))), pi = t, fi("matchMedia"))
        };
      class gi {
        constructor(t, e) {
          this.selector = e && Zt(e), this.data = [], this._r = [], this.isReverted = !1, this.id = ui++, t && this.add(t)
        }
        add(t, e, i) {
          k(t) && (i = e, e = t, t = k);
          let r = this,
            s = function() {
              let t, s = a,
                n = r.selector;
              return s && s !== r && s.data.push(r), i && (r.selector = Zt(i)), a = r, t = e.apply(r, arguments), k(t) && r._r.push(t), a = s, r.selector = n, r.isReverted = !1, t
            };
          return r.last = s, t === k ? s(r) : t ? r[t] = s : s
        }
        ignore(t) {
          let e = a;
          a = null, t(this), a = e
        }
        getTweens() {
          let t = [];
          return this.data.forEach((e => e instanceof gi ? t.push(...e.getTweens()) : e instanceof We && !(e.parent && "nested" === e.parent.data) && t.push(e))), t
        }
        clear() {
          this._r.length = this.data.length = 0
        }
        kill(t, e) {
          if (t) {
            let e = this.getTweens();
            this.data.forEach((t => {
              "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach((t => e.splice(e.indexOf(t), 1))))
            })), e.map((t => ({
              g: t.globalTime(0),
              t
            }))).sort(((t, e) => e.g - t.g || -1 / 0)).forEach((e => e.t.revert(t))), this.data.forEach((e => !(e instanceof We) && e.revert && e.revert(t))), this._r.forEach((e => e(t, this))), this.isReverted = !0
          } else this.data.forEach((t => t.kill && t.kill()));
          if (this.clear(), e) {
            let t = hi.length;
            for (; t--;) hi[t].id === this.id && hi.splice(t, 1)
          }
        }
        revert(t) {
          this.kill(t || {})
        }
      }
      class ci {
        constructor(t) {
          this.contexts = [], this.scope = t
        }
        add(t, e, i) {
          A(t) || (t = {
            matches: t
          });
          let r, s, n, l = new gi(0, i || this.scope),
            h = l.conditions = {};
          for (s in a && !l.selector && (l.selector = a.selector), this.contexts.push(l), e = l.add("onMatch", e), l.queries = t, t) "all" === s ? n = 1 : (r = o.matchMedia(t[s]), r && (hi.indexOf(l) < 0 && hi.push(l), (h[s] = r.matches) && (n = 1), r.addListener ? r.addListener(mi) : r.addEventListener("change", mi)));
          return n && e(l), this
        }
        revert(t) {
          this.kill(t || {})
        }
        kill(t) {
          this.contexts.forEach((e => e.kill(t, !0)))
        }
      }
      const yi = {
        registerPlugin() {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
          e.forEach((t => pe(t)))
        },
        timeline: t => new Ie(t),
        getTweensOf: (t, e) => n.getTweensOf(t, e),
        getProperty(t, e, i, r) {
          M(t) && (t = Ht(t)[0]);
          let s = nt(t || {}).get,
            a = i ? gt : mt;
          return "native" === i && (i = ""), t ? e ? a((tt[e] && tt[e].get || s)(t, e, i, r)) : (e, i, r) => a((tt[e] && tt[e].get || s)(t, e, i, r)) : t
        },
        quickSetter(t, e, i) {
          if ((t = Ht(t)).length > 1) {
            let r = t.map((t => Ti.quickSetter(t, e, i))),
              s = r.length;
            return t => {
              let e = s;
              for (; e--;) r[e](t)
            }
          }
          t = t[0] || {};
          let r = tt[e],
            s = nt(t),
            a = s.harness && (s.harness.aliases || {})[e] || e,
            n = r ? e => {
              let s = new r;
              p._pt = 0, s.init(t, i ? e + i : e, p, 0, [t]), s.render(1, s), p._pt && ri(1, p)
            } : s.set(t, a);
          return r ? n : e => n(t, a, i ? e + i : e, s, 1)
        },
        quickTo(t, e, i) {
          let r = Ti.to(t, yt({
              [e]: "+=0.1",
              paused: !0
            }, i || {})),
            s = (t, i, s) => r.resetTo(e, t, i, s);
          return s.tween = r, s
        },
        isTweening: t => n.getTweensOf(t, !0).length > 0,
        defaults: t => (t && t.ease && (t.ease = Ee(t.ease, m.ease)), vt(m, t || {})),
        config: t => vt(f, t || {}),
        registerEffect(t) {
          let {
            name: e,
            effect: i,
            plugins: r,
            defaults: s,
            extendTimeline: a
          } = t;
          (r || "").split(",").forEach((t => t && !tt[t] && !U[t] && V(e + " effect requires " + t + " plugin."))), et[e] = (t, e, r) => i(Ht(t), ct(e || {}, s), r), a && (Ie.prototype[e] = function(t, i, r) {
            return this.add(et[e](t, A(i) ? i : (r = i) && {}, this), r)
          })
        },
        registerEase(t, e) {
          Me[t] = Ee(e)
        },
        parseEase(t, e) {
          return arguments.length ? Ee(t, e) : Me
        },
        getById: t => n.getById(t),
        exportRoot() {
          let t, e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            r = arguments.length > 1 ? arguments[1] : void 0,
            s = new Ie(i);
          for (s.smoothChildTiming = D(i.smoothChildTiming), n.remove(s), s._dp = 0, s._time = s._tTime = n._time, t = n._first; t;) e = t._next, !r && !t._dur && t instanceof We && t.vars.onComplete === t._targets[0] || zt(s, t, t._start - t._delay), t = e;
          return zt(n, s, 0), s
        },
        context: (t, e) => t ? new gi(t, e) : a,
        matchMedia: t => new ci(t),
        matchMediaRefresh: () => hi.forEach((t => {
          let e, i, r = t.conditions;
          for (i in r) r[i] && (r[i] = !1, e = 1);
          e && t.revert()
        })) || mi(),
        addEventListener(t, e) {
          let i = di[t] || (di[t] = []);
          ~i.indexOf(e) || i.push(e)
        },
        removeEventListener(t, e) {
          let i = di[t],
            r = i && i.indexOf(e);
          r >= 0 && i.splice(r, 1)
        },
        utils: {
          wrap: re,
          wrapYoyo: se,
          distribute: Jt,
          random: ee,
          snap: te,
          normalize: (t, e, i) => ne(t, e, 0, 1, i),
          getUnit: jt,
          clamp: (t, e, i) => Gt(i, (i => Vt(t, e, i))),
          splitColor: ge,
          toArray: Ht,
          selector: Zt,
          mapRange: ne,
          pipe: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return t => e.reduce(((t, e) => e(t)), t)
          },
          unitize: (t, e) => i => t(parseFloat(i)) + (e || jt(i)),
          interpolate: oe,
          shuffle: $t
        },
        install: q,
        effects: et,
        ticker: xe,
        updateRoot: Ie.updateRoot,
        plugins: tt,
        globalTimeline: n,
        core: {
          PropTween: li,
          globals: j,
          Tween: We,
          Timeline: Ie,
          Animation: Be,
          getCache: nt,
          _removeLinkedListItem: wt,
          reverting: () => s,
          context: t => (t && a && (a.data.push(t), t._ctx = a), a),
          suppressOverwrites: t => r = t
        }
      };
      lt("to,from,fromTo,delayedCall,set,killTweensOf", (t => yi[t] = We[t])), xe.add(Ie.updateRoot), p = yi.to({}, {
        duration: 0
      });
      let vi = (t, e) => {
          let i = t._pt;
          for (; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
          return i
        },
        bi = (t, e) => ({
          name: t,
          rawVars: 1,
          init(t, i, r) {
            r._onInit = t => {
              let r, s;
              if (M(i) && (r = {}, lt(i, (t => r[t] = 1)), i = r), e) {
                for (s in r = {}, i) r[s] = e(i[s]);
                i = r
              }((t, e) => {
                let i, r, s, a = t._targets;
                for (i in e)
                  for (r = a.length; r--;) s = t._ptLookup[r][i], s && (s = s.d) && (s._pt && (s = vi(s, i)), s && s.modifier && s.modifier(e[i], t, a[r], i))
              })(t, i)
            }
          }
        });
      const Ti = yi.registerPlugin({
        name: "attr",
        init(t, e, i, r, s) {
          let a, n, o;
          for (a in this.tween = i, e) o = t.getAttribute(a) || "", n = this.add(t, "setAttribute", (o || 0) + "", e[a], r, s, 0, 0, a), n.op = a, n.b = o, this._props.push(a)
        },
        render(t, e) {
          let i = e._pt;
          for (; i;) s ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next
        }
      }, {
        name: "endArray",
        init(t, e) {
          let i = e.length;
          for (; i--;) this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
        }
      }, bi("roundProps", Kt), bi("modifiers"), bi("snap", te)) || yi;
      We.version = Ie.version = Ti.version = "3.12.2", d = 1, E() && we();
      const {
        Power0: xi,
        Power1: wi,
        Power2: Mi,
        Power3: ki,
        Power4: Oi,
        Linear: Ci,
        Quad: Ai,
        Cubic: Di,
        Quart: Ei,
        Quint: Si,
        Strong: Pi,
        Elastic: Ri,
        Back: zi,
        SteppedEase: Fi,
        Bounce: Bi,
        Sine: Ii,
        Expo: Li,
        Circ: Yi
      } = Me;
      let Ni, Ui, Xi, qi, Gi, Vi, ji, Qi, Wi, Hi = {},
        Zi = 180 / Math.PI,
        $i = Math.PI / 180,
        Ji = Math.atan2,
        Ki = /([A-Z])/g,
        tr = /(left|right|width|margin|padding|x)/i,
        er = /[\s,\(]\S/,
        ir = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
        },
        rr = (t, e) => e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e),
        sr = (t, e) => e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e),
        ar = (t, e) => e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e),
        nr = (t, e) => {
          let i = e.s + e.c * t;
          e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        },
        or = (t, e) => e.set(e.t, e.p, t ? e.e : e.b, e),
        lr = (t, e) => e.set(e.t, e.p, 1 !== t ? e.b : e.e, e),
        hr = (t, e, i) => t.style[e] = i,
        dr = (t, e, i) => t.style.setProperty(e, i),
        _r = (t, e, i) => t._gsap[e] = i,
        pr = (t, e, i) => t._gsap.scaleX = t._gsap.scaleY = i,
        ur = (t, e, i, r, s) => {
          let a = t._gsap;
          a.scaleX = a.scaleY = i, a.renderTransform(s, a)
        },
        fr = (t, e, i, r, s) => {
          let a = t._gsap;
          a[e] = i, a.renderTransform(s, a)
        },
        mr = "transform",
        gr = mr + "Origin",
        cr = function(t, e) {
          let i = this.target,
            r = i.style;
          if (t in Hi && r) {
            if (this.tfm = this.tfm || {}, "transform" === t) return ir.transform.split(",").forEach((t => cr.call(this, t, e)));
            if (~(t = ir[t] || t).indexOf(",") ? t.split(",").forEach((t => this.tfm[t] = Fr(i, t))) : this.tfm[t] = i._gsap.x ? i._gsap[t] : Fr(i, t), this.props.indexOf(mr) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(gr, e, "")), t = mr
          }(r || e) && this.props.push(t, e, r[t])
        },
        yr = t => {
          t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
        },
        vr = function() {
          let t, e, i = this.props,
            r = this.target,
            s = r.style,
            a = r._gsap;
          for (t = 0; t < i.length; t += 3) i[t + 1] ? r[i[t]] = i[t + 2] : i[t + 2] ? s[i[t]] = i[t + 2] : s.removeProperty("--" === i[t].substr(0, 2) ? i[t] : i[t].replace(Ki, "-$1").toLowerCase());
          if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), t = Qi(), t && t.isStart || s[mr] || (yr(s), a.uncache = 1)
          }
        },
        br = (t, e) => {
          let i = {
            target: t,
            props: [],
            revert: vr,
            save: cr
          };
          return t._gsap || Ti.core.getCache(t), e && e.split(",").forEach((t => i.save(t))), i
        },
        Tr = (t, e) => {
          let i = Ui.createElementNS ? Ui.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ui.createElement(t);
          return i.style ? i : Ui.createElement(t)
        },
        xr = (t, e, i) => {
          let r = getComputedStyle(t);
          return r[e] || r.getPropertyValue(e.replace(Ki, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && xr(t, Mr(e) || e, 1) || ""
        },
        wr = "O,Moz,ms,Ms,Webkit".split(","),
        Mr = (t, e, i) => {
          let r = (e || Gi).style,
            s = 5;
          if (t in r && !i) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(wr[s] + t in r););
          return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? wr[s] : "") + t
        },
        kr = () => {
          "undefined" != typeof window && window.document && (Ni = window, Ui = Ni.document, Xi = Ui.documentElement, Gi = Tr("div") || {
            style: {}
          }, Vi = Tr("div"), mr = Mr(mr), gr = mr + "Origin", Gi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Wi = !!Mr("perspective"), Qi = Ti.core.reverting, qi = 1)
        },
        Or = function(t) {
          let e, i = Tr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            s = this.nextSibling,
            a = this.style.cssText;
          if (Xi.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Or
          } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
          return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Xi.removeChild(i), this.style.cssText = a, e
        },
        Cr = (t, e) => {
          let i = e.length;
          for (; i--;)
            if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        },
        Ar = t => {
          let e;
          try {
            e = t.getBBox()
          } catch (i) {
            e = Or.call(t, !0)
          }
          return e && (e.width || e.height) || t.getBBox === Or || (e = Or.call(t, !0)), !e || e.width || e.x || e.y ? e : {
            x: +Cr(t, ["x", "cx", "x1"]) || 0,
            y: +Cr(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
          }
        },
        Dr = t => !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Ar(t)),
        Er = (t, e) => {
          if (e) {
            let i = t.style;
            e in Hi && e !== gr && (e = mr), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(Ki, "-$1").toLowerCase())) : i.removeAttribute(e)
          }
        },
        Sr = (t, e, i, r, s, a) => {
          let n = new li(t._pt, e, i, 0, 1, a ? lr : or);
          return t._pt = n, n.b = r, n.e = s, t._props.push(i), n
        },
        Pr = {
          deg: 1,
          rad: 1,
          turn: 1
        },
        Rr = {
          grid: 1,
          flex: 1
        },
        zr = (t, e, i, r) => {
          let s, a, n, o, l = parseFloat(i) || 0,
            h = (i + "").trim().substr((l + "").length) || "px",
            d = Gi.style,
            _ = tr.test(e),
            p = "svg" === t.tagName.toLowerCase(),
            u = (p ? "client" : "offset") + (_ ? "Width" : "Height"),
            f = 100,
            m = "px" === r,
            g = "%" === r;
          return r === h || !l || Pr[r] || Pr[h] ? l : ("px" !== h && !m && (l = zr(t, e, i, "px")), o = t.getCTM && Dr(t), !g && "%" !== h || !Hi[e] && !~e.indexOf("adius") ? (d[_ ? "width" : "height"] = f + (m ? h : r), a = ~e.indexOf("adius") || "em" === r && t.appendChild && !p ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ui && a.appendChild || (a = Ui.body), n = a._gsap, n && g && n.width && _ && n.time === xe.time && !n.uncache ? ht(l / n.width * f) : ((g || "%" === h) && !Rr[xr(a, "display")] && (d.position = xr(t, "position")), a === t && (d.position = "static"), a.appendChild(Gi), s = Gi[u], a.removeChild(Gi), d.position = "absolute", _ && g && (n = nt(a), n.time = xe.time, n.width = a[u]), ht(m ? s * l / f : s && l ? f / s * l : 0))) : (s = o ? t.getBBox()[_ ? "width" : "height"] : t[u], ht(g ? l / s * f : l / 100 * s)))
        },
        Fr = (t, e, i, r) => {
          let s;
          return qi || kr(), e in ir && "transform" !== e && ~(e = ir[e]).indexOf(",") && (e = e.split(",")[0]), Hi[e] && "transform" !== e ? (s = Qr(t, r), s = "transformOrigin" !== e ? s[e] : s.svg ? s.origin : Wr(xr(t, gr)) + " " + s.zOrigin + "px") : (s = t.style[e], (!s || "auto" === s || r || ~(s + "").indexOf("calc(")) && (s = Nr[e] && Nr[e](t, e, i) || xr(t, e) || ot(t, e) || ("opacity" === e ? 1 : 0))), i && !~(s + "").trim().indexOf(" ") ? zr(t, e, s, i) + i : s
        },
        Br = function(t, e, i, r) {
          if (!i || "none" === i) {
            let r = Mr(e, t, 1),
              s = r && xr(t, r, 1);
            s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = xr(t, "borderTopColor"))
          }
          let s, a, n, o, l, h, d, _, p, u, m, g, c = new li(this._pt, t.style, e, 0, 1, ii),
            y = 0,
            v = 0;
          if (c.b = i, c.e = r, i += "", "auto" == (r += "") && (t.style[e] = r, r = xr(t, e) || r, t.style[e] = i), s = [i, r], Te(s), r = s[1], n = (i = s[0]).match(B) || [], g = r.match(B) || [], g.length) {
            for (; a = B.exec(r);) d = a[0], p = r.substring(y, a.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (h = n[v++] || "") && (o = parseFloat(h) || 0, m = h.substr((o + "").length), "=" === d.charAt(1) && (d = _t(o, d) + m), _ = parseFloat(d), u = d.substr((_ + "").length), y = B.lastIndex - u.length, u || (u = u || f.units[e] || m, y === r.length && (r += u, c.e += u)), m !== u && (o = zr(t, e, h, u) || 0), c._pt = {
              _next: c._pt,
              p: p || 1 === v ? p : ",",
              s: o,
              c: _ - o,
              m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            c.c = y < r.length ? r.substring(y, r.length) : ""
          } else c.r = "display" === e && "none" === r ? lr : or;
          return L.test(r) && (c.e = 0), this._pt = c, c
        },
        Ir = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
        },
        Lr = t => {
          let e = t.split(" "),
            i = e[0],
            r = e[1] || "50%";
          return "top" !== i && "bottom" !== i && "left" !== r && "right" !== r || (t = i, i = r, r = t), e[0] = Ir[i] || i, e[1] = Ir[r] || r, e.join(" ")
        },
        Yr = (t, e) => {
          if (e.tween && e.tween._time === e.tween._dur) {
            let t, i, r, s = e.t,
              a = s.style,
              n = e.u,
              o = s._gsap;
            if ("all" === n || !0 === n) a.cssText = "", i = 1;
            else
              for (n = n.split(","), r = n.length; --r > -1;) t = n[r], Hi[t] && (i = 1, t = "transformOrigin" === t ? gr : mr), Er(s, t);
            i && (Er(s, mr), o && (o.svg && s.removeAttribute("transform"), Qr(s, 1), o.uncache = 1, yr(a)))
          }
        },
        Nr = {
          clearProps(t, e, i, r, s) {
            if ("isFromStart" !== s.data) {
              let a = t._pt = new li(t._pt, e, i, 0, 0, Yr);
              return a.u = r, a.pr = -10, a.tween = s, t._props.push(i), 1
            }
          }
        },
        Ur = [1, 0, 0, 1, 0, 0],
        Xr = {},
        qr = t => "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t,
        Gr = t => {
          let e = xr(t, mr);
          return qr(e) ? Ur : e.substr(7).match(F).map(ht)
        },
        Vr = (t, e) => {
          let i, r, s, a, n = t._gsap || nt(t),
            o = t.style,
            l = Gr(t);
          return n.svg && t.getAttribute("transform") ? (s = t.transform.baseVal.consolidate().matrix, l = [s.a, s.b, s.c, s.d, s.e, s.f], "1,0,0,1,0,0" === l.join(",") ? Ur : l) : (l !== Ur || t.offsetParent || t === Xi || n.svg || (s = o.display, o.display = "block", i = t.parentNode, i && t.offsetParent || (a = 1, r = t.nextElementSibling, Xi.appendChild(t)), l = Gr(t), s ? o.display = s : Er(t, "display"), a && (r ? i.insertBefore(t, r) : i ? i.appendChild(t) : Xi.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        jr = (t, e, i, r, s, a) => {
          let n, o, l, h, d = t._gsap,
            _ = s || Vr(t, !0),
            p = d.xOrigin || 0,
            u = d.yOrigin || 0,
            f = d.xOffset || 0,
            m = d.yOffset || 0,
            g = _[0],
            c = _[1],
            y = _[2],
            v = _[3],
            b = _[4],
            T = _[5],
            x = e.split(" "),
            w = parseFloat(x[0]) || 0,
            M = parseFloat(x[1]) || 0;
          i ? _ !== Ur && (o = g * v - c * y) && (l = w * (v / o) + M * (-y / o) + (y * T - v * b) / o, h = w * (-c / o) + M * (g / o) - (g * T - c * b) / o, w = l, M = h) : (n = Ar(t), w = n.x + (~x[0].indexOf("%") ? w / 100 * n.width : w), M = n.y + (~(x[1] || x[0]).indexOf("%") ? M / 100 * n.height : M)), r || !1 !== r && d.smooth ? (b = w - p, T = M - u, d.xOffset = f + (b * g + T * y) - b, d.yOffset = m + (b * c + T * v) - T) : d.xOffset = d.yOffset = 0, d.xOrigin = w, d.yOrigin = M, d.smooth = !!r, d.origin = e, d.originIsAbsolute = !!i, t.style[gr] = "0px 0px", a && (Sr(a, d, "xOrigin", p, w), Sr(a, d, "yOrigin", u, M), Sr(a, d, "xOffset", f, d.xOffset), Sr(a, d, "yOffset", m, d.yOffset)), t.setAttribute("data-svg-origin", w + " " + M)
        },
        Qr = (t, e) => {
          let i = t._gsap || new Fe(t);
          if ("x" in i && !e && !i.uncache) return i;
          let r, s, a, n, o, l, h, d, _, p, u, m, g, c, y, v, b, T, x, w, M, k, O, C, A, D, E, S, P, R, z, F, B = t.style,
            I = i.scaleX < 0,
            L = "px",
            Y = "deg",
            N = getComputedStyle(t),
            U = xr(t, gr) || "0";
          return r = s = a = l = h = d = _ = p = u = 0, n = o = 1, i.svg = !(!t.getCTM || !Dr(t)), N.translate && ("none" === N.translate && "none" === N.scale && "none" === N.rotate || (B[mr] = ("none" !== N.translate ? "translate3d(" + (N.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== N.rotate ? "rotate(" + N.rotate + ") " : "") + ("none" !== N.scale ? "scale(" + N.scale.split(" ").join(",") + ") " : "") + ("none" !== N[mr] ? N[mr] : "")), B.scale = B.rotate = B.translate = "none"), c = Vr(t, i.svg), i.svg && (i.uncache ? (A = t.getBBox(), U = i.xOrigin - A.x + "px " + (i.yOrigin - A.y) + "px", C = "") : C = !e && t.getAttribute("data-svg-origin"), jr(t, C || U, !!C || i.originIsAbsolute, !1 !== i.smooth, c)), m = i.xOrigin || 0, g = i.yOrigin || 0, c !== Ur && (T = c[0], x = c[1], w = c[2], M = c[3], r = k = c[4], s = O = c[5], 6 === c.length ? (n = Math.sqrt(T * T + x * x), o = Math.sqrt(M * M + w * w), l = T || x ? Ji(x, T) * Zi : 0, _ = w || M ? Ji(w, M) * Zi + l : 0, _ && (o *= Math.abs(Math.cos(_ * $i))), i.svg && (r -= m - (m * T + g * w), s -= g - (m * x + g * M))) : (F = c[6], R = c[7], E = c[8], S = c[9], P = c[10], z = c[11], r = c[12], s = c[13], a = c[14], y = Ji(F, P), h = y * Zi, y && (v = Math.cos(-y), b = Math.sin(-y), C = k * v + E * b, A = O * v + S * b, D = F * v + P * b, E = k * -b + E * v, S = O * -b + S * v, P = F * -b + P * v, z = R * -b + z * v, k = C, O = A, F = D), y = Ji(-w, P), d = y * Zi, y && (v = Math.cos(-y), b = Math.sin(-y), C = T * v - E * b, A = x * v - S * b, D = w * v - P * b, z = M * b + z * v, T = C, x = A, w = D), y = Ji(x, T), l = y * Zi, y && (v = Math.cos(y), b = Math.sin(y), C = T * v + x * b, A = k * v + O * b, x = x * v - T * b, O = O * v - k * b, T = C, k = A), h && Math.abs(h) + Math.abs(l) > 359.9 && (h = l = 0, d = 180 - d), n = ht(Math.sqrt(T * T + x * x + w * w)), o = ht(Math.sqrt(O * O + F * F)), y = Ji(k, O), _ = Math.abs(y) > 2e-4 ? y * Zi : 0, u = z ? 1 / (z < 0 ? -z : z) : 0), i.svg && (C = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !qr(xr(t, mr)), C && t.setAttribute("transform", C))), Math.abs(_) > 90 && Math.abs(_) < 270 && (I ? (n *= -1, _ += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (o *= -1, _ += _ <= 0 ? 180 : -180)), e = e || i.uncache, i.x = r - ((i.xPercent = r && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + L, i.y = s - ((i.yPercent = s && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-s) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + L, i.z = a + L, i.scaleX = ht(n), i.scaleY = ht(o), i.rotation = ht(l) + Y, i.rotationX = ht(h) + Y, i.rotationY = ht(d) + Y, i.skewX = _ + Y, i.skewY = p + Y, i.transformPerspective = u + L, (i.zOrigin = parseFloat(U.split(" ")[2]) || 0) && (B[gr] = Wr(U)), i.xOffset = i.yOffset = 0, i.force3D = f.force3D, i.renderTransform = i.svg ? es : Wi ? ts : Zr, i.uncache = 0, i
        },
        Wr = t => (t = t.split(" "))[0] + " " + t[1],
        Hr = (t, e, i) => {
          let r = jt(e);
          return ht(parseFloat(e) + parseFloat(zr(t, "x", i + "px", r))) + r
        },
        Zr = (t, e) => {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ts(t, e)
        },
        $r = "0deg",
        Jr = "0px",
        Kr = ") ",
        ts = function(t, e) {
          let {
            xPercent: i,
            yPercent: r,
            x: s,
            y: a,
            z: n,
            rotation: o,
            rotationY: l,
            rotationX: h,
            skewX: d,
            skewY: _,
            scaleX: p,
            scaleY: u,
            transformPerspective: f,
            force3D: m,
            target: g,
            zOrigin: c
          } = e || this, y = "", v = "auto" === m && t && 1 !== t || !0 === m;
          if (c && (h !== $r || l !== $r)) {
            let t, e = parseFloat(l) * $i,
              i = Math.sin(e),
              r = Math.cos(e);
            e = parseFloat(h) * $i, t = Math.cos(e), s = Hr(g, s, i * t * -c), a = Hr(g, a, -Math.sin(e) * -c), n = Hr(g, n, r * t * -c + c)
          }
          f !== Jr && (y += "perspective(" + f + Kr), (i || r) && (y += "translate(" + i + "%, " + r + "%) "), (v || s !== Jr || a !== Jr || n !== Jr) && (y += n !== Jr || v ? "translate3d(" + s + ", " + a + ", " + n + ") " : "translate(" + s + ", " + a + Kr), o !== $r && (y += "rotate(" + o + Kr), l !== $r && (y += "rotateY(" + l + Kr), h !== $r && (y += "rotateX(" + h + Kr), d === $r && _ === $r || (y += "skew(" + d + ", " + _ + Kr), 1 === p && 1 === u || (y += "scale(" + p + ", " + u + Kr), g.style[mr] = y || "translate(0, 0)"
        },
        es = function(t, e) {
          let i, r, s, a, n, {
              xPercent: o,
              yPercent: l,
              x: h,
              y: d,
              rotation: _,
              skewX: p,
              skewY: u,
              scaleX: f,
              scaleY: m,
              target: g,
              xOrigin: c,
              yOrigin: y,
              xOffset: v,
              yOffset: b,
              forceCSS: T
            } = e || this,
            x = parseFloat(h),
            w = parseFloat(d);
          _ = parseFloat(_), p = parseFloat(p), u = parseFloat(u), u && (u = parseFloat(u), p += u, _ += u), _ || p ? (_ *= $i, p *= $i, i = Math.cos(_) * f, r = Math.sin(_) * f, s = Math.sin(_ - p) * -m, a = Math.cos(_ - p) * m, p && (u *= $i, n = Math.tan(p - u), n = Math.sqrt(1 + n * n), s *= n, a *= n, u && (n = Math.tan(u), n = Math.sqrt(1 + n * n), i *= n, r *= n)), i = ht(i), r = ht(r), s = ht(s), a = ht(a)) : (i = f, a = m, r = s = 0), (x && !~(h + "").indexOf("px") || w && !~(d + "").indexOf("px")) && (x = zr(g, "x", h, "px"), w = zr(g, "y", d, "px")), (c || y || v || b) && (x = ht(x + c - (c * i + y * s) + v), w = ht(w + y - (c * r + y * a) + b)), (o || l) && (n = g.getBBox(), x = ht(x + o / 100 * n.width), w = ht(w + l / 100 * n.height)), n = "matrix(" + i + "," + r + "," + s + "," + a + "," + x + "," + w + ")", g.setAttribute("transform", n), T && (g.style[mr] = n)
        },
        is = function(t, e, i, r, s) {
          let a, n, o = 360,
            l = M(s),
            h = parseFloat(s) * (l && ~s.indexOf("rad") ? Zi : 1) - r,
            d = r + h + "deg";
          return l && (a = s.split("_")[1], "short" === a && (h %= o, h !== h % 180 && (h += h < 0 ? o : -360)), "cw" === a && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === a && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)), t._pt = n = new li(t._pt, e, i, r, h, sr), n.e = d, n.u = "deg", t._props.push(i), n
        },
        rs = (t, e) => {
          for (let i in e) t[i] = e[i];
          return t
        },
        ss = (t, e, i) => {
          let r, s, a, n, o, l, h, d, _ = rs({}, i._gsap),
            p = i.style;
          for (s in _.svg ? (a = i.getAttribute("transform"), i.setAttribute("transform", ""), p[mr] = e, r = Qr(i, 1), Er(i, mr), i.setAttribute("transform", a)) : (a = getComputedStyle(i)[mr], p[mr] = e, r = Qr(i, 1), p[mr] = a), Hi) a = _[s], n = r[s], a !== n && "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 && (h = jt(a), d = jt(n), o = h !== d ? zr(i, s, a, d) : parseFloat(a), l = parseFloat(n), t._pt = new li(t._pt, r, s, o, l - o, rr), t._pt.u = d || 0, t._props.push(s));
          rs(r, _)
        };
      lt("padding,margin,Width,Radius", ((t, e) => {
        let i = "Top",
          r = "Right",
          s = "Bottom",
          a = "Left",
          n = (e < 3 ? [i, r, s, a] : [i + a, i + r, s + r, s + a]).map((i => e < 2 ? t + i : "border" + i + t));
        Nr[e > 1 ? "border" + t : t] = function(t, e, i, r, s) {
          let a, o;
          if (arguments.length < 4) return a = n.map((e => Fr(t, e, i))), o = a.join(" "), 5 === o.split(a[0]).length ? a[0] : o;
          a = (r + "").split(" "), o = {}, n.forEach(((t, e) => o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0])), t.init(e, o, s)
        }
      }));
      const as = {
        name: "css",
        register: kr,
        targetTest: t => t.style && t.nodeType,
        init(t, e, i, r, s) {
          let a, n, o, l, h, d, _, p, u, m, g, c, y, v, b, T, x = this._props,
            w = t.style,
            k = i.vars.startAt;
          for (_ in qi || kr(), this.styles = this.styles || br(t), T = this.styles.props, this.tween = i, e)
            if ("autoRound" !== _ && (n = e[_], !tt[_] || !Xe(_, e, i, r, t, s)))
              if (h = typeof n, d = Nr[_], "function" === h && (n = n.call(i, r, t, s), h = typeof n), "string" === h && ~n.indexOf("random(") && (n = ae(n)), d) d(this, t, _, n, i) && (b = 1);
              else if ("--" === _.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(_) + "").trim(), n += "", ve.lastIndex = 0, ve.test(a) || (p = jt(a), u = jt(n)), u ? p !== u && (a = zr(t, _, a, u) + u) : p && (n += p), this.add(w, "setProperty", a, n, r, s, 0, 0, _), x.push(_), T.push(_, 0, w[_]);
          else if ("undefined" !== h) {
            if (k && _ in k ? (a = "function" == typeof k[_] ? k[_].call(i, r, t, s) : k[_], M(a) && ~a.indexOf("random(") && (a = ae(a)), jt(a + "") || (a += f.units[_] || jt(Fr(t, _)) || ""), "=" === (a + "").charAt(1) && (a = Fr(t, _))) : a = Fr(t, _), l = parseFloat(a), m = "string" === h && "=" === n.charAt(1) && n.substr(0, 2), m && (n = n.substr(2)), o = parseFloat(n), _ in ir && ("autoAlpha" === _ && (1 === l && "hidden" === Fr(t, "visibility") && o && (l = 0), T.push("visibility", 0, w.visibility), Sr(this, w, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== _ && "transform" !== _ && (_ = ir[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), g = _ in Hi, g)
              if (this.styles.save(_), c || (y = t._gsap, y.renderTransform && !e.parseTransform || Qr(t, e.parseTransform), v = !1 !== e.smoothOrigin && y.smooth, c = this._pt = new li(this._pt, w, mr, 0, 1, y.renderTransform, y, 0, -1), c.dep = 1), "scale" === _) this._pt = new li(this._pt, y, "scaleY", y.scaleY, (m ? _t(y.scaleY, m + o) : o) - y.scaleY || 0, rr), this._pt.u = 0, x.push("scaleY", _), _ += "X";
              else {
                if ("transformOrigin" === _) {
                  T.push(gr, 0, w[gr]), n = Lr(n), y.svg ? jr(t, n, 0, v, 0, this) : (u = parseFloat(n.split(" ")[2]) || 0, u !== y.zOrigin && Sr(this, y, "zOrigin", y.zOrigin, u), Sr(this, w, _, Wr(a), Wr(n)));
                  continue
                }
                if ("svgOrigin" === _) {
                  jr(t, n, 1, v, 0, this);
                  continue
                }
                if (_ in Xr) {
                  is(this, y, _, l, m ? _t(l, m + n) : n);
                  continue
                }
                if ("smoothOrigin" === _) {
                  Sr(this, y, "smooth", y.smooth, n);
                  continue
                }
                if ("force3D" === _) {
                  y[_] = n;
                  continue
                }
                if ("transform" === _) {
                  ss(this, n, t);
                  continue
                }
              }
            else _ in w || (_ = Mr(_) || _);
            if (g || (o || 0 === o) && (l || 0 === l) && !er.test(n) && _ in w) p = (a + "").substr((l + "").length), o || (o = 0), u = jt(n) || (_ in f.units ? f.units[_] : p), p !== u && (l = zr(t, _, a, u)), this._pt = new li(this._pt, g ? y : w, _, l, (m ? _t(l, m + o) : o) - l, g || "px" !== u && "zIndex" !== _ || !1 === e.autoRound ? rr : nr), this._pt.u = u || 0, p !== u && "%" !== u && (this._pt.b = a, this._pt.r = ar);
            else if (_ in w) Br.call(this, t, _, a, m ? m + n : n);
            else if (_ in t) this.add(t, _, a || t[_], m ? m + n : n, r, s);
            else if ("parseTransform" !== _) {
              G(_, n);
              continue
            }
            g || (_ in w ? T.push(_, 0, w[_]) : T.push(_, 1, a || t[_])), x.push(_)
          }
          b && oi(this)
        },
        render(t, e) {
          if (e.tween._time || !Qi()) {
            let i = e._pt;
            for (; i;) i.r(t, i.d), i = i._next
          } else e.styles.revert()
        },
        get: Fr,
        aliases: ir,
        getSetter(t, e, i) {
          let r = ir[e];
          return r && r.indexOf(",") < 0 && (e = r), e in Hi && e !== gr && (t._gsap.x || Fr(t, "x")) ? i && ji === i ? "scale" === e ? pr : _r : (ji = i || {}) && ("scale" === e ? ur : fr) : t.style && !C(t.style[e]) ? hr : ~e.indexOf("-") ? dr : Ke(t, e)
        },
        core: {
          _removeProperty: Er,
          _getMatrix: Vr
        }
      };
      Ti.utils.checkPrefix = Mr, Ti.core.getStyleSaver = br,
        function(t, e) {
          let i = lt(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (t => {
            Hi[t] = 1
          }));
          lt(e, (t => {
            f.units[t] = "deg", Xr[t] = 1
          })), ir[i[13]] = t + "," + e, lt("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (t => {
            let e = t.split(":");
            ir[e[1]] = i[e[0]]
          }))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"), lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (t => {
          f.units[t] = "px"
        })), Ti.registerPlugin(as);
      const ns = Ti.registerPlugin(as) || Ti,
        os = ns.core.Tween
    }
  }
]);