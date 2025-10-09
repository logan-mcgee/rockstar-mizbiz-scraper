try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7de948f4-0f10-45d4-a024-4fcfa28c7a0e", e._sentryDebugIdIdentifier = "sentry-dbid-7de948f4-0f10-45d4-a024-4fcfa28c7a0e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9166], {
    88842: (e, t, a) => {
      a.d(t, {
        A: () => Zs
      });
      var r = a(42295),
        s = a(81788),
        n = a(2918),
        o = a(95966),
        i = a(60438),
        l = a(71127);
      class c extends l.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, r.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, r.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var d = a(52542),
        u = a(79867);
      const g = (0, l.createContext)({
          environment: {
            id: "",
            sites: {
              www: "",
              socialClub: "",
              support: "",
              store: "",
              supportNew: "supportNew"
            },
            cookieIdentifier: ""
          },
          navigationData: {
            site: "",
            brand: "rockstar",
            links: [],
            appearancePaths: ["/*"]
          },
          location: window.location,
          onNavigate: () => {},
          locale: "",
          rockstarUser: {
            id: 0,
            avatar: "",
            profile_link: "",
            nickname: "",
            crews: [],
            characters: {
              gtao: []
            }
          },
          openedDropdown: null,
          setOpenedDropdown: () => {},
          routeOptions: {
            isSearchPage: !1,
            forceSearch: !1
          },
          searchConfig: {
            targets: []
          }
        }),
        h = ({
          navData: e,
          location: t,
          onNavigate: a,
          routeOptions: o,
          children: i,
          searchConfig: c
        }) => {
          const [d, h] = (0, l.useState)(null), [p, m] = (0, l.useMemo)((() => (0, s.getLocale)()), []), {
            hash: f
          } = t, {
            data: b
          } = (0, n.useRockstarUser)(), v = (0, u.A)(), x = (0, l.useMemo)((() => {
            const r = {
              ...t,
              ...window.location
            };
            return {
              navigationData: e,
              onNavigate: a,
              environment: v,
              location: r,
              locale: p,
              rockstarUser: b,
              openedDropdown: d,
              setOpenedDropdown: h,
              routeOptions: o,
              searchConfig: c
            }
          }), [e, p, JSON.stringify(t), v, d, o, b]);
          return (0, l.useEffect)((() => {
            m(p.iso);
            const e = () => h(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, l.useEffect)((() => {
            const e = f?.replace("#", "");
            if (!e) return () => {};
            const t = setInterval((() => {
                const a = document.getElementById(e);
                a && (clearInterval(t), window.scrollTo({
                  top: a.offsetTop,
                  behavior: "smooth"
                }))
              }), 200),
              a = setTimeout((() => clearInterval(t)), 1e4);
            return () => {
              clearTimeout(a), clearInterval(t)
            }
          }), [f]), (0, r.jsx)(g.Provider, {
            value: x,
            children: i
          })
        },
        p = () => {
          const e = (0, l.useContext)(g);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        m = () => {
          const e = (0, l.useContext)(g);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        f = () => {
          const e = (0, l.useContext)(g);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: t,
            setOpenedDropdown: a
          } = e;
          return [t, e => {
            a(e === t ? null : e)
          }]
        },
        b = () => {
          const e = (0, l.useContext)(g);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        v = () => {
          const e = (0, l.useContext)(g);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        x = () => {
          const e = (0, l.useContext)(g);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        y = () => {
          const e = (0, l.useContext)(g);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        };
      var k = a(13581);
      let w, _, T, C, j, S, M, E, N, A, O, I, P, R, B = () => w || "undefined" != typeof window && (w = window.gsap) && w.registerPlugin && w,
        L = 1,
        D = [],
        F = [],
        z = [],
        Y = Date.now,
        $ = (e, t) => t,
        X = (e, t) => ~z.indexOf(e) && z[z.indexOf(e) + 1][t],
        q = e => !!~O.indexOf(e),
        H = (e, t, a, r, s) => e.addEventListener(t, a, {
          passive: !r,
          capture: !!s
        }),
        U = (e, t, a, r) => e.removeEventListener(t, a, !!r),
        W = "scrollLeft",
        K = "scrollTop",
        V = () => I && I.isPressed || F.cache++,
        G = (e, t) => {
          let a = r => {
            if (r || 0 === r) {
              L && (C.history.scrollRestoration = "manual");
              let t = I && I.isPressed;
              r = a.v = Math.round(r) || (I && I.iOS ? 1 : 0), e(r), a.cacheID = F.cache, t && $("ss", r)
            } else(t || F.cache !== a.cacheID || $("ref")) && (a.cacheID = F.cache, a.v = e());
            return a.v + a.offset
          };
          return a.offset = 0, e && a
        },
        Q = {
          s: W,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: G((function(e) {
            return arguments.length ? C.scrollTo(e, J.sc()) : C.pageXOffset || j[W] || S[W] || M[W] || 0
          }))
        },
        J = {
          s: K,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Q,
          sc: G((function(e) {
            return arguments.length ? C.scrollTo(Q.sc(), e) : C.pageYOffset || j[K] || S[K] || M[K] || 0
          }))
        },
        Z = (e, t) => (t && t._ctx && t._ctx.selector || w.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== w.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        ee = (e, {
          s: t,
          sc: a
        }) => {
          q(e) && (e = j.scrollingElement || S);
          let r = F.indexOf(e),
            s = a === J.sc ? 1 : 2;
          !~r && (r = F.push(e) - 1), F[r + s] || H(e, "scroll", V);
          let n = F[r + s],
            o = n || (F[r + s] = G(X(e, t), !0) || (q(e) ? a : G((function(a) {
              return arguments.length ? e[t] = a : e[t]
            }))));
          return o.target = e, n || (o.smooth = "smooth" === w.getProperty(e, "scrollBehavior")), o
        },
        te = (e, t, a) => {
          let r = e,
            s = e,
            n = Y(),
            o = n,
            i = t || 50,
            l = Math.max(500, 3 * i),
            c = (e, t) => {
              let l = Y();
              t || l - n > i ? (s = r, r = e, o = n, n = l) : a ? r += e : r = s + (e - s) / (l - o) * (n - o)
            };
          return {
            update: c,
            reset: () => {
              s = r = a ? 0 : r, o = n = 0
            },
            getVelocity: e => {
              let t = o,
                i = s,
                d = Y();
              return (e || 0 === e) && e !== r && c(e), n === o || d - o > l ? 0 : (r + (a ? i : -i)) / ((a ? d : n) - t) * 1e3
            }
          }
        },
        ae = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        re = e => {
          let t = Math.max(...e),
            a = Math.min(...e);
          return Math.abs(t) >= Math.abs(a) ? t : a
        },
        se = () => {
          A = w.core.globals().ScrollTrigger, A && A.core && (() => {
            let e = A.core,
              t = e.bridge || {},
              a = e._scrollers,
              r = e._proxies;
            a.push(...F), r.push(...z), F = a, z = r, $ = (e, a) => t[e](a)
          })()
        },
        ne = e => (w = e || B(), w && "undefined" != typeof document && document.body && (C = window, j = document, S = j.documentElement, M = j.body, O = [C, j, S, M], T = w.utils.clamp, R = w.core.context || function() {}, N = "onpointerenter" in M ? "pointer" : "mouse", E = oe.isTouch = C.matchMedia && C.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in C || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, P = oe.eventTypes = ("ontouchstart" in S ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in S ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => L = 0), 500), se(), _ = 1), _);
      Q.op = J, F.cache = 0;
      class oe {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          _ || ne(w) || console.warn("Please gsap.registerPlugin(Observer)"), A || se();
          let {
            tolerance: t,
            dragMinimum: a,
            type: r,
            target: s,
            lineHeight: n,
            debounce: o,
            preventDefault: i,
            onStop: l,
            onStopDelay: c,
            ignore: d,
            wheelSpeed: u,
            event: g,
            onDragStart: h,
            onDragEnd: p,
            onDrag: m,
            onPress: f,
            onRelease: b,
            onRight: v,
            onLeft: x,
            onUp: y,
            onDown: k,
            onChangeX: T,
            onChangeY: O,
            onChange: B,
            onToggleX: L,
            onToggleY: F,
            onHover: z,
            onHoverEnd: $,
            onMove: X,
            ignoreCheck: W,
            isNormalizer: K,
            onGestureStart: G,
            onGestureEnd: oe,
            onWheel: ie,
            onEnable: le,
            onDisable: ce,
            onClick: de,
            scrollSpeed: ue,
            capture: ge,
            allowClicks: he,
            lockAxis: pe,
            onLockAxis: me
          } = e;
          this.target = s = Z(s) || S, this.vars = e, d && (d = w.utils.toArray(d)), t = t || 1e-9, a = a || 0, u = u || 1, ue = ue || 1, r = r || "wheel,touch,pointer", o = !1 !== o, n || (n = parseFloat(C.getComputedStyle(M).lineHeight) || 22);
          let fe, be, ve, xe, ye, ke, we, _e = this,
            Te = 0,
            Ce = 0,
            je = ee(s, Q),
            Se = ee(s, J),
            Me = je(),
            Ee = Se(),
            Ne = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === P[0],
            Ae = q(s),
            Oe = s.ownerDocument || j,
            Ie = [0, 0, 0],
            Pe = [0, 0, 0],
            Re = 0,
            Be = () => Re = Y(),
            Le = (e, t) => (_e.event = e) && d && ~d.indexOf(e.target) || t && Ne && "touch" !== e.pointerType || W && W(e, t),
            De = () => {
              let e = _e.deltaX = re(Ie),
                a = _e.deltaY = re(Pe),
                r = Math.abs(e) >= t,
                s = Math.abs(a) >= t;
              B && (r || s) && B(_e, e, a, Ie, Pe), r && (v && _e.deltaX > 0 && v(_e), x && _e.deltaX < 0 && x(_e), T && T(_e), L && _e.deltaX < 0 != Te < 0 && L(_e), Te = _e.deltaX, Ie[0] = Ie[1] = Ie[2] = 0), s && (k && _e.deltaY > 0 && k(_e), y && _e.deltaY < 0 && y(_e), O && O(_e), F && _e.deltaY < 0 != Ce < 0 && F(_e), Ce = _e.deltaY, Pe[0] = Pe[1] = Pe[2] = 0), (xe || ve) && (X && X(_e), ve && (m(_e), ve = !1), xe = !1), ke && !(ke = !1) && me && me(_e), ye && (ie(_e), ye = !1), fe = 0
            },
            Fe = (e, t, a) => {
              Ie[a] += e, Pe[a] += t, _e._vx.update(e), _e._vy.update(t), o ? fe || (fe = requestAnimationFrame(De)) : De()
            },
            ze = (e, t) => {
              pe && !we && (_e.axis = we = Math.abs(e) > Math.abs(t) ? "x" : "y", ke = !0), "y" !== we && (Ie[2] += e, _e._vx.update(e, !0)), "x" !== we && (Pe[2] += t, _e._vy.update(t, !0)), o ? fe || (fe = requestAnimationFrame(De)) : De()
            },
            Ye = e => {
              if (Le(e, 1)) return;
              let t = (e = ae(e, i)).clientX,
                r = e.clientY,
                s = t - _e.x,
                n = r - _e.y,
                o = _e.isDragging;
              _e.x = t, _e.y = r, (o || Math.abs(_e.startX - t) >= a || Math.abs(_e.startY - r) >= a) && (m && (ve = !0), o || (_e.isDragging = !0), ze(s, n), o || h && h(_e))
            },
            $e = _e.onPress = e => {
              Le(e, 1) || e && e.button || (_e.axis = we = null, be.pause(), _e.isPressed = !0, e = ae(e), Te = Ce = 0, _e.startX = _e.x = e.clientX, _e.startY = _e.y = e.clientY, _e._vx.reset(), _e._vy.reset(), H(K ? s : Oe, P[1], Ye, i, !0), _e.deltaX = _e.deltaY = 0, f && f(_e))
            },
            Xe = _e.onRelease = e => {
              if (Le(e, 1)) return;
              U(K ? s : Oe, P[1], Ye, !0);
              let t = !isNaN(_e.y - _e.startY),
                a = _e.isDragging && (Math.abs(_e.x - _e.startX) > 3 || Math.abs(_e.y - _e.startY) > 3),
                r = ae(e);
              !a && t && (_e._vx.reset(), _e._vy.reset(), i && he && w.delayedCall(.08, (() => {
                if (Y() - Re > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Oe.createEvent) {
                  let t = Oe.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, C, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), _e.isDragging = _e.isGesturing = _e.isPressed = !1, l && !K && be.restart(!0), p && a && p(_e), b && b(_e, a)
            },
            qe = e => e.touches && e.touches.length > 1 && (_e.isGesturing = !0) && G(e, _e.isDragging),
            He = () => (_e.isGesturing = !1) || oe(_e),
            Ue = e => {
              if (Le(e)) return;
              let t = je(),
                a = Se();
              Fe((t - Me) * ue, (a - Ee) * ue, 1), Me = t, Ee = a, l && be.restart(!0)
            },
            We = e => {
              if (Le(e)) return;
              e = ae(e, i), ie && (ye = !0);
              let t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? C.innerHeight : 1) * u;
              Fe(e.deltaX * t, e.deltaY * t, 0), l && !K && be.restart(!0)
            },
            Ke = e => {
              if (Le(e)) return;
              let t = e.clientX,
                a = e.clientY,
                r = t - _e.x,
                s = a - _e.y;
              _e.x = t, _e.y = a, xe = !0, (r || s) && ze(r, s)
            },
            Ve = e => {
              _e.event = e, z(_e)
            },
            Ge = e => {
              _e.event = e, $(_e)
            },
            Qe = e => Le(e) || ae(e, i) && de(_e);
          be = _e._dc = w.delayedCall(c || .25, (() => {
            _e._vx.reset(), _e._vy.reset(), be.pause(), l && l(_e)
          })).pause(), _e.deltaX = _e.deltaY = 0, _e._vx = te(0, 50, !0), _e._vy = te(0, 50, !0), _e.scrollX = je, _e.scrollY = Se, _e.isDragging = _e.isGesturing = _e.isPressed = !1, R(this), _e.enable = e => (_e.isEnabled || (H(Ae ? Oe : s, "scroll", V), r.indexOf("scroll") >= 0 && H(Ae ? Oe : s, "scroll", Ue, i, ge), r.indexOf("wheel") >= 0 && H(s, "wheel", We, i, ge), (r.indexOf("touch") >= 0 && E || r.indexOf("pointer") >= 0) && (H(s, P[0], $e, i, ge), H(Oe, P[2], Xe), H(Oe, P[3], Xe), he && H(s, "click", Be, !1, !0), de && H(s, "click", Qe), G && H(Oe, "gesturestart", qe), oe && H(Oe, "gestureend", He), z && H(s, N + "enter", Ve), $ && H(s, N + "leave", Ge), X && H(s, N + "move", Ke)), _e.isEnabled = !0, e && e.type && $e(e), le && le(_e)), _e), _e.disable = () => {
            _e.isEnabled && (D.filter((e => e !== _e && q(e.target))).length || U(Ae ? Oe : s, "scroll", V), _e.isPressed && (_e._vx.reset(), _e._vy.reset(), U(K ? s : Oe, P[1], Ye, !0)), U(Ae ? Oe : s, "scroll", Ue, ge), U(s, "wheel", We, ge), U(s, P[0], $e, ge), U(Oe, P[2], Xe), U(Oe, P[3], Xe), U(s, "click", Be, !0), U(s, "click", Qe), U(Oe, "gesturestart", qe), U(Oe, "gestureend", He), U(s, N + "enter", Ve), U(s, N + "leave", Ge), U(s, N + "move", Ke), _e.isEnabled = _e.isPressed = _e.isDragging = !1, ce && ce(_e))
          }, _e.kill = _e.revert = () => {
            _e.disable();
            let e = D.indexOf(_e);
            e >= 0 && D.splice(e, 1), I === _e && (I = 0)
          }, D.push(_e), K && q(s) && (I = _e), _e.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      oe.version = "3.12.2", oe.create = e => new oe(e), oe.register = ne, oe.getAll = () => D.slice(), oe.getById = e => D.filter((t => t.vars.id === e))[0], B() && w.registerPlugin(oe);
      let ie, le, ce, de, ue, ge, he, pe, me, fe, be, ve, xe, ye, ke, we, _e, Te, Ce, je, Se, Me, Ee, Ne, Ae, Oe, Ie, Pe, Re, Be, Le, De, Fe, ze, Ye, $e, Xe = 1,
        qe = Date.now,
        He = qe(),
        Ue = 0,
        We = 0,
        Ke = (e, t, a) => {
          let r = lt(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return a["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Ve = (e, t) => !t || lt(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Ge = () => We && requestAnimationFrame(Ge),
        Qe = () => ye = 1,
        Je = () => ye = 0,
        Ze = e => e,
        et = e => Math.round(1e5 * e) / 1e5 || 0,
        tt = () => "undefined" != typeof window,
        at = () => ie || tt() && (ie = window.gsap) && ie.registerPlugin && ie,
        rt = e => !!~he.indexOf(e),
        st = e => ("Height" === e ? Le : ce["inner" + e]) || ue["client" + e] || ge["client" + e],
        nt = e => X(e, "getBoundingClientRect") || (rt(e) ? () => (ba.width = ce.innerWidth, ba.height = Le, ba) : () => At(e)),
        ot = (e, {
          s: t,
          d2: a,
          d: r,
          a: s
        }) => Math.max(0, (t = "scroll" + a) && (s = X(e, t)) ? s() - nt(e)()[r] : rt(e) ? (ue[t] || ge[t]) - st(a) : e[t] - e["offset" + a]),
        it = (e, t) => {
          for (let a = 0; a < Ce.length; a += 3)(!t || ~t.indexOf(Ce[a + 1])) && e(Ce[a], Ce[a + 1], Ce[a + 2])
        },
        lt = e => "string" == typeof e,
        ct = e => "function" == typeof e,
        dt = e => "number" == typeof e,
        ut = e => "object" == typeof e,
        gt = (e, t, a) => e && e.progress(t ? 0 : 1) && a && e.pause(),
        ht = (e, t) => {
          if (e.enabled) {
            let a = t(e);
            a && a.totalTime && (e.callbackAnimation = a)
          }
        },
        pt = Math.abs,
        mt = "left",
        ft = "right",
        bt = "bottom",
        vt = "width",
        xt = "height",
        yt = "Right",
        kt = "Left",
        wt = "Top",
        _t = "Bottom",
        Tt = "padding",
        Ct = "margin",
        jt = "Width",
        St = "Height",
        Mt = "px",
        Et = e => ce.getComputedStyle(e),
        Nt = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        At = (e, t) => {
          let a = t && "matrix(1, 0, 0, 1, 0, 0)" !== Et(e)[ke] && ie.to(e, {
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
            r = e.getBoundingClientRect();
          return a && a.progress(0).kill(), r
        },
        Ot = (e, {
          d2: t
        }) => e["offset" + t] || e["client" + t] || 0,
        It = e => {
          let t, a = [],
            r = e.labels,
            s = e.duration();
          for (t in r) a.push(r[t] / s);
          return a
        },
        Pt = e => {
          let t = ie.utils.snap(e),
            a = Array.isArray(e) && e.slice(0).sort(((e, t) => e - t));
          return a ? (e, r, s = .001) => {
            let n;
            if (!r) return t(e);
            if (r > 0) {
              for (e -= s, n = 0; n < a.length; n++)
                if (a[n] >= e) return a[n];
              return a[n - 1]
            }
            for (n = a.length, e += s; n--;)
              if (a[n] <= e) return a[n];
            return a[0]
          } : (a, r, s = .001) => {
            let n = t(a);
            return !r || Math.abs(n - a) < s || n - a < 0 == r < 0 ? n : t(r < 0 ? a - e : a + e)
          }
        },
        Rt = (e, t, a, r) => a.split(",").forEach((a => e(t, a, r))),
        Bt = (e, t, a, r, s) => e.addEventListener(t, a, {
          passive: !r,
          capture: !!s
        }),
        Lt = (e, t, a, r) => e.removeEventListener(t, a, !!r),
        Dt = (e, t, a) => {
          (a = a && a.wheelHandler) && (e(t, "wheel", a), e(t, "touchmove", a))
        },
        Ft = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        zt = {
          toggleActions: "play",
          anticipatePin: 0
        },
        Yt = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        $t = (e, t) => {
          if (lt(e)) {
            let a = e.indexOf("="),
              r = ~a ? +(e.charAt(a - 1) + 1) * parseFloat(e.substr(a + 1)) : 0;
            ~a && (e.indexOf("%") > a && (r *= t / 100), e = e.substr(0, a - 1)), e = r + (e in Yt ? Yt[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        Xt = (e, t, a, r, {
          startColor: s,
          endColor: n,
          fontSize: o,
          indent: i,
          fontWeight: l
        }, c, d, u) => {
          let g = de.createElement("div"),
            h = rt(a) || "fixed" === X(a, "pinType"),
            p = -1 !== e.indexOf("scroller"),
            m = h ? ge : a,
            f = -1 !== e.indexOf("start"),
            b = f ? s : n,
            v = "border-color:" + b + ";font-size:" + o + ";color:" + b + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return v += "position:" + ((p || u) && h ? "fixed;" : "absolute;"), (p || u || !h) && (v += (r === J ? ft : bt) + ":" + (c + parseFloat(i)) + "px;"), d && (v += "box-sizing:border-box;text-align:left;width:" + d.offsetWidth + "px;"), g._isStart = f, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = v, g.innerText = t || 0 === t ? e + "-" + t : e, m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g), g._offset = g["offset" + r.op.d2], qt(g, 0, r, f), g
        },
        qt = (e, t, a, r) => {
          let s = {
              display: "block"
            },
            n = a[r ? "os2" : "p2"],
            o = a[r ? "p2" : "os2"];
          e._isFlipped = r, s[a.a + "Percent"] = r ? -100 : 0, s[a.a] = r ? "1px" : 0, s["border" + n + jt] = 1, s["border" + o + jt] = 0, s[a.p] = t + "px", ie.set(e, s)
        },
        Ht = [],
        Ut = {},
        Wt = () => qe() - Ue > 34 && (Fe || (Fe = requestAnimationFrame(da))),
        Kt = () => {
          (!Ee || !Ee.isPressed || Ee.startX > ge.clientWidth) && (F.cache++, Ee ? Fe || (Fe = requestAnimationFrame(da)) : da(), Ue || ea("scrollStart"), Ue = qe())
        },
        Vt = () => {
          Oe = ce.innerWidth, Ae = ce.innerHeight
        },
        Gt = () => {
          F.cache++, !xe && !Me && !de.fullscreenElement && !de.webkitFullscreenElement && (!Ne || Oe !== ce.innerWidth || Math.abs(ce.innerHeight - Ae) > .25 * ce.innerHeight) && pe.restart(!0)
        },
        Qt = {},
        Jt = [],
        Zt = () => Lt(Ta, "scrollEnd", Zt) || ia(!0),
        ea = e => Qt[e] && Qt[e].map((e => e())) || Jt,
        ta = [],
        aa = e => {
          for (let t = 0; t < ta.length; t += 5)(!e || ta[t + 4] && ta[t + 4].query === e) && (ta[t].style.cssText = ta[t + 1], ta[t].getBBox && ta[t].setAttribute("transform", ta[t + 2] || ""), ta[t + 3].uncache = 1)
        },
        ra = (e, t) => {
          let a;
          for (we = 0; we < Ht.length; we++) a = Ht[we], !a || t && a._ctx !== t || (e ? a.kill(1) : a.revert(!0, !0));
          t && aa(t), t || ea("revert")
        },
        sa = (e, t) => {
          F.cache++, (t || !ze) && F.forEach((e => ct(e) && e.cacheID++ && (e.rec = 0))), lt(e) && (ce.history.scrollRestoration = Re = e)
        },
        na = 0,
        oa = () => {
          ge.appendChild(Be), Le = Be.offsetHeight || ce.innerHeight, ge.removeChild(Be)
        },
        ia = (e, t) => {
          if (Ue && !e) return void Bt(Ta, "scrollEnd", Zt);
          oa(), ze = Ta.isRefreshing = !0, F.forEach((e => ct(e) && ++e.cacheID && (e.rec = e())));
          let a = ea("refreshInit");
          je && Ta.sort(), t || ra(), F.forEach((e => {
            ct(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Ht.slice(0).forEach((e => e.refresh())), Ht.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                a = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - a), e.refresh()
            }
          })), Ht.forEach((e => {
            let t = ot(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), a.forEach((e => e && e.render && e.render(-1))), F.forEach((e => {
            ct(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), sa(Re, 1), pe.pause(), na++, ze = 2, da(2), Ht.forEach((e => ct(e.vars.onRefresh) && e.vars.onRefresh(e))), ze = Ta.isRefreshing = !1, ea("refresh")
        },
        la = 0,
        ca = 1,
        da = e => {
          if (!ze || 2 === e) {
            Ta.isUpdating = !0, $e && $e.update(0);
            let e = Ht.length,
              t = qe(),
              a = t - He >= 50,
              r = e && Ht[0].scroll();
            if (ca = la > r ? -1 : 1, ze || (la = r), a && (Ue && !ye && t - Ue > 200 && (Ue = 0, ea("scrollEnd")), be = He, He = t), ca < 0) {
              for (we = e; we-- > 0;) Ht[we] && Ht[we].update(0, a);
              ca = 1
            } else
              for (we = 0; we < e; we++) Ht[we] && Ht[we].update(0, a);
            Ta.isUpdating = !1
          }
          Fe = 0
        },
        ua = [mt, "top", bt, ft, Ct + _t, Ct + yt, Ct + wt, Ct + kt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ga = ua.concat([vt, xt, "boxSizing", "max" + jt, "max" + St, "position", Ct, Tt, Tt + wt, Tt + yt, Tt + _t, Tt + kt]),
        ha = (e, t, a, r) => {
          if (!e._gsap.swappedIn) {
            let s, n = ua.length,
              o = t.style,
              i = e.style;
            for (; n--;) s = ua[n], o[s] = a[s];
            o.position = "absolute" === a.position ? "absolute" : "relative", "inline" === a.display && (o.display = "inline-block"), i[bt] = i[ft] = "auto", o.flexBasis = a.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[vt] = Ot(e, Q) + Mt, o[xt] = Ot(e, J) + Mt, o[Tt] = i[Ct] = i.top = i[mt] = "0", ma(r), i[vt] = i["max" + jt] = a[vt], i[xt] = i["max" + St] = a[xt], i[Tt] = a[Tt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        pa = /([A-Z])/g,
        ma = e => {
          if (e) {
            let t, a, r = e.t.style,
              s = e.length,
              n = 0;
            for ((e.t._gsap || ie.core.getCache(e.t)).uncache = 1; n < s; n += 2) a = e[n + 1], t = e[n], a ? r[t] = a : r[t] && r.removeProperty(t.replace(pa, "-$1").toLowerCase())
          }
        },
        fa = e => {
          let t = ga.length,
            a = e.style,
            r = [],
            s = 0;
          for (; s < t; s++) r.push(ga[s], a[ga[s]]);
          return r.t = e, r
        },
        ba = {
          left: 0,
          top: 0
        },
        va = (e, t, a, r, s, n, o, i, l, c, d, u, g, h) => {
          ct(e) && (e = e(i)), lt(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? $t("0" + e.substr(3), a) : 0));
          let p, m, f, b = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), dt(e)) g && (e = ie.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, u, e)), o && qt(o, a, r, !0);
          else {
            ct(t) && (t = t(i));
            let n, d, u, g, h = (e || "0").split(" ");
            f = Z(t, i) || ge, n = At(f) || {}, n && (n.left || n.top) || "none" !== Et(f).display || (g = f.style.display, f.style.display = "block", n = At(f), g ? f.style.display = g : f.style.removeProperty("display")), d = $t(h[0], n[r.d]), u = $t(h[1] || "0", a), e = n[r.p] - l[r.p] - c + d + s - u, o && qt(o, u, r, a - u < 20 || o._isStart && u > 20), a -= a - u
          }
          if (h && (i[h] = e || -.001, e < 0 && (e = 0)), n) {
            let t = e + a,
              s = n._isStart;
            p = "scroll" + r.d2, qt(n, t, r, s && t > 20 || !s && (d ? Math.max(ge[p], ue[p]) : n.parentNode[p]) <= t + 1), d && (l = At(o), d && (n.style[r.op.p] = l[r.op.p] - r.op.m - n._offset + Mt))
          }
          return g && f && (p = At(f), g.seek(u), m = At(f), g._caScrollDist = p[r.p] - m[r.p], e = e / g._caScrollDist * u), g && g.seek(b), g ? e : Math.round(e)
        },
        xa = /(webkit|moz|length|cssText|inset)/i,
        ya = (e, t, a, r) => {
          if (e.parentNode !== t) {
            let s, n, o = e.style;
            if (t === ge) {
              for (s in e._stOrig = o.cssText, n = Et(e), n) + s || xa.test(s) || !n[s] || "string" != typeof o[s] || "0" === s || (o[s] = n[s]);
              o.top = a, o.left = r
            } else o.cssText = e._stOrig;
            ie.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        ka = (e, t, a) => {
          let r = t,
            s = r;
          return t => {
            let n = Math.round(e());
            return n !== r && n !== s && Math.abs(n - r) > 3 && Math.abs(n - s) > 3 && (t = n, a && a()), s = r, r = t, t
          }
        },
        wa = (e, t, a) => {
          let r = {};
          r[t.p] = "+=" + a, ie.set(e, r)
        },
        _a = (e, t) => {
          let a = ee(e, t),
            r = "_scroll" + t.p2,
            s = (t, n, o, i, l) => {
              let c = s.tween,
                d = n.onComplete,
                u = {};
              o = o || a();
              let g = ka(a, o, (() => {
                c.kill(), s.tween = 0
              }));
              return l = i && l || 0, i = i || t - o, c && c.kill(), n[r] = t, n.modifiers = u, u[r] = () => g(o + i * c.ratio + l * c.ratio * c.ratio), n.onUpdate = () => {
                F.cache++, da()
              }, n.onComplete = () => {
                s.tween = 0, d && d.call(c)
              }, c = s.tween = ie.to(e, n), c
            };
          return e[r] = a, a.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0), Bt(e, "wheel", a.wheelHandler), Ta.isTouch && Bt(e, "touchmove", a.wheelHandler), s
        };
      class Ta {
        constructor(e, t) {
          le || Ta.register(ie) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), Pe(this), this.init(e, t)
        }
        init(e, t) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !We) return void(this.update = this.refresh = this.kill = Ze);
          e = Nt(lt(e) || dt(e) || e.nodeType ? {
            trigger: e
          } : e, zt);
          let a, r, s, n, o, i, l, c, d, u, g, h, p, m, f, b, v, x, y, k, w, _, T, C, j, S, M, E, N, A, O, I, P, R, B, L, D, Y, $, {
              onUpdate: q,
              toggleClass: H,
              id: U,
              onToggle: W,
              onRefresh: K,
              scrub: V,
              trigger: G,
              pin: te,
              pinSpacing: ae,
              invalidateOnRefresh: re,
              anticipatePin: se,
              onScrubComplete: ne,
              onSnapComplete: oe,
              once: le,
              snap: he,
              pinReparent: pe,
              pinSpacer: ve,
              containerAnimation: ke,
              fastScrollEnd: _e,
              preventOverlaps: Te
            } = e,
            Ce = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Q : J,
            Me = !V && 0 !== V,
            Ee = Z(e.scroller || ce),
            Ne = ie.core.getCache(Ee),
            Ae = rt(Ee),
            Oe = "fixed" === ("pinType" in e ? e.pinType : X(Ee, "pinType") || Ae && "fixed"),
            Ie = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            Pe = Me && e.toggleActions.split(" "),
            Re = "markers" in e ? e.markers : zt.markers,
            Be = Ae ? 0 : parseFloat(Et(Ee)["border" + Ce.p2 + jt]) || 0,
            Le = this,
            Fe = e.onRefreshInit && (() => e.onRefreshInit(Le)),
            He = ((e, t, {
              d: a,
              d2: r,
              a: s
            }) => (s = X(e, "getBoundingClientRect")) ? () => s()[a] : () => (t ? st(r) : e["client" + r]) || 0)(Ee, Ae, Ce),
            Ge = ((e, t) => !t || ~z.indexOf(e) ? nt(e) : () => ba)(Ee, Ae),
            Qe = 0,
            Je = 0,
            tt = 0,
            at = ee(Ee, Ce);
          var it;
          if (Le._startClamp = Le._endClamp = !1, Le._dir = Ce, se *= 45, Le.scroller = Ee, Le.scroll = ke ? ke.time.bind(ke) : at, n = at(), Le.vars = e, t = t || e.animation, "refreshPriority" in e && (je = 1, -9999 === e.refreshPriority && ($e = Le)), Ne.tweenScroll = Ne.tweenScroll || {
              top: _a(Ee, J),
              left: _a(Ee, Q)
            }, Le.tweenTo = a = Ne.tweenScroll[Ce.p], Le.scrubDuration = e => {
              P = dt(e) && e, P ? I ? I.duration(e) : I = ie.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: P,
                paused: !0,
                onComplete: () => ne && ne(Le)
              }) : (I && I.progress(1).kill(), I = 0)
            }, t && (t.vars.lazy = !1, t._initted && !Le.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), Le.animation = t.pause(), t.scrollTrigger = Le, Le.scrubDuration(V), A = 0, U || (U = t.vars.id)), he && (ut(he) && !he.push || (he = {
              snapTo: he
            }), "scrollBehavior" in ge.style && ie.set(Ae ? [ge, ue] : Ee, {
              scrollBehavior: "auto"
            }), F.forEach((e => ct(e) && e.target === (Ae ? de.scrollingElement || ue : Ee) && (e.smooth = !1))), s = ct(he.snapTo) ? he.snapTo : "labels" === he.snapTo ? (e => t => ie.utils.snap(It(e), t))(t) : "labelsDirectional" === he.snapTo ? (it = t, (e, t) => Pt(It(it))(e, t.direction)) : !1 !== he.directional ? (e, t) => Pt(he.snapTo)(e, qe() - Je < 500 ? 0 : t.direction) : ie.utils.snap(he.snapTo), R = he.duration || {
              min: .1,
              max: 2
            }, R = ut(R) ? fe(R.min, R.max) : fe(R, R), B = ie.delayedCall(he.delay || P / 2 || .1, (() => {
              let e = at(),
                r = qe() - Je < 500,
                n = a.tween;
              if (!(r || Math.abs(Le.getVelocity()) < 10) || n || ye || Qe === e) Le.isActive && Qe !== e && B.restart(!0);
              else {
                let o = (e - i) / m,
                  c = t && !Me ? t.totalProgress() : o,
                  d = r ? 0 : (c - O) / (qe() - be) * 1e3 || 0,
                  u = ie.utils.clamp(-o, 1 - o, pt(d / 2) * d / .185),
                  g = o + (!1 === he.inertia ? 0 : u),
                  h = fe(0, 1, s(g, Le)),
                  p = Math.round(i + h * m),
                  {
                    onStart: f,
                    onInterrupt: b,
                    onComplete: v
                  } = he;
                if (e <= l && e >= i && p !== e) {
                  if (n && !n._initted && n.data <= pt(p - e)) return;
                  !1 === he.inertia && (u = h - o), a(p, {
                    duration: R(pt(.185 * Math.max(pt(g - c), pt(h - c)) / d / .05 || 0)),
                    ease: he.ease || "power3",
                    data: pt(p - e),
                    onInterrupt: () => B.restart(!0) && b && b(Le),
                    onComplete: () => {
                      Le.update(), Qe = at(), A = O = t && !Me ? t.totalProgress() : Le.progress, oe && oe(Le), v && v(Le)
                    }
                  }, e, u * m, p - e - u * m), f && f(Le, a.tween)
                }
              }
            })).pause()), U && (Ut[U] = Le), G = Le.trigger = Z(G || !0 !== te && te), $ = G && G._gsap && G._gsap.stRevert, $ && ($ = $(Le)), te = !0 === te ? G : Z(te), lt(H) && (H = {
              targets: G,
              className: H
            }), te && (!1 === ae || ae === Ct || (ae = !(!ae && te.parentNode && te.parentNode.style && "flex" === Et(te.parentNode).display) && Tt), Le.pin = te, r = ie.core.getCache(te), r.spacer ? f = r.pinState : (ve && (ve = Z(ve), ve && !ve.nodeType && (ve = ve.current || ve.nativeElement), r.spacerIsNative = !!ve, ve && (r.spacerState = fa(ve))), r.spacer = x = ve || de.createElement("div"), x.classList.add("pin-spacer"), U && x.classList.add("pin-spacer-" + U), r.pinState = f = fa(te)), !1 !== e.force3D && ie.set(te, {
              force3D: !0
            }), Le.spacer = x = r.spacer, N = Et(te), C = N[ae + Ce.os2], k = ie.getProperty(te), w = ie.quickSetter(te, Ce.a, Mt), ha(te, x, N), v = fa(te)), Re) {
            h = ut(Re) ? Nt(Re, Ft) : Ft, u = Xt("scroller-start", U, Ee, Ce, h, 0), g = Xt("scroller-end", U, Ee, Ce, h, 0, u), y = u["offset" + Ce.op.d2];
            let e = Z(X(Ee, "content") || Ee);
            c = this.markerStart = Xt("start", U, e, Ce, h, y, 0, ke), d = this.markerEnd = Xt("end", U, e, Ce, h, y, 0, ke), ke && (Y = ie.quickSetter([c, d], Ce.a, Mt)), Oe || z.length && !0 === X(Ee, "fixedMarkers") || ((e => {
              let t = Et(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(Ae ? ge : Ee), ie.set([u, g], {
              force3D: !0
            }), S = ie.quickSetter(u, Ce.a, Mt), E = ie.quickSetter(g, Ce.a, Mt))
          }
          if (ke) {
            let e = ke.vars.onUpdate,
              t = ke.vars.onUpdateParams;
            ke.eventCallback("onUpdate", (() => {
              Le.update(0, 0, 1), e && e.apply(ke, t || [])
            }))
          }
          if (Le.previous = () => Ht[Ht.indexOf(Le) - 1], Le.next = () => Ht[Ht.indexOf(Le) + 1], Le.revert = (e, a) => {
              if (!a) return Le.kill(!0);
              let r = !1 !== e || !Le.enabled,
                s = xe;
              r !== Le.isReverted && (r && (L = Math.max(at(), Le.scroll.rec || 0), tt = Le.progress, D = t && t.progress()), c && [c, d, u, g].forEach((e => e.style.display = r ? "none" : "block")), r && (xe = Le, Le.update(r)), !te || pe && Le.isActive || (r ? ((e, t, a) => {
                ma(a);
                let r = e._gsap;
                if (r.spacerIsNative) ma(r.spacerState);
                else if (e._gsap.swappedIn) {
                  let a = t.parentNode;
                  a && (a.insertBefore(e, t), a.removeChild(t))
                }
                e._gsap.swappedIn = !1
              })(te, x, f) : ha(te, x, Et(te), j)), r || Le.update(r), xe = s, Le.isReverted = r)
            }, Le.refresh = (r, s, h, y) => {
              if ((xe || !Le.enabled) && !s) return;
              if (te && r && Ue) return void Bt(Ta, "scrollEnd", Zt);
              !ze && Fe && Fe(Le), xe = Le, a.tween && !h && (a.tween.kill(), a.tween = 0), I && I.pause(), re && t && t.revert({
                kill: !1
              }).invalidate(), Le.isReverted || Le.revert(!0, !0), Le._subPinOffset = !1;
              let w, C, S, E, N, A, O, P, R, F, z, Y, $, X = He(),
                q = Ge(),
                H = ke ? ke.duration() : ot(Ee, Ce),
                U = m <= .01,
                W = 0,
                V = y || 0,
                se = ut(h) ? h.end : e.end,
                ne = e.endTrigger || G,
                oe = ut(h) ? h.start : e.start || (0 !== e.start && G ? te ? "0 0" : "0 100%" : 0),
                le = Le.pinnedContainer = e.pinnedContainer && Z(e.pinnedContainer, Le),
                ce = G && Math.max(0, Ht.indexOf(Le)) || 0,
                he = ce;
              for (Re && ut(h) && (Y = ie.getProperty(u, Ce.p), $ = ie.getProperty(g, Ce.p)); he--;) A = Ht[he], A.end || A.refresh(0, 1) || (xe = Le), O = A.pin, !O || O !== G && O !== te && O !== le || A.isReverted || (F || (F = []), F.unshift(A), A.revert(!0, !0)), A !== Ht[he] && (ce--, he--);
              for (ct(oe) && (oe = oe(Le)), oe = Ke(oe, "start", Le), i = va(oe, G, X, Ce, at(), c, u, Le, q, Be, Oe, H, ke, Le._startClamp && "_startClamp") || (te ? -.001 : 0), ct(se) && (se = se(Le)), lt(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (lt(oe) ? oe.split(" ")[0] : "") + se : (W = $t(se.substr(2), X), se = lt(oe) ? oe : (ke ? ie.utils.mapRange(0, ke.duration(), ke.scrollTrigger.start, ke.scrollTrigger.end, i) : i) + W, ne = G)), se = Ke(se, "end", Le), l = Math.max(i, va(se || (ne ? "100% 0" : H), ne, X, Ce, at() + W, d, g, Le, q, Be, Oe, H, ke, Le._endClamp && "_endClamp")) || -.001, W = 0, he = ce; he--;) A = Ht[he], O = A.pin, O && A.start - A._pinPush <= i && !ke && A.end > 0 && (w = A.end - (Le._startClamp ? Math.max(0, A.start) : A.start), (O === G && A.start - A._pinPush < i || O === le) && isNaN(oe) && (W += w * (1 - A.progress)), O === te && (V += w));
              if (i += W, l += W, Le._startClamp && (Le._startClamp += W), Le._endClamp && !ze && (Le._endClamp = l || -.001, l = Math.min(l, ot(Ee, Ce))), m = l - i || (i -= .01) && .001, U && (tt = ie.utils.clamp(0, 1, ie.utils.normalize(i, l, L))), Le._pinPush = V, c && W && (w = {}, w[Ce.a] = "+=" + W, le && (w[Ce.p] = "-=" + at()), ie.set([c, d], w)), te) w = Et(te), E = Ce === J, S = at(), _ = parseFloat(k(Ce.a)) + V, !H && l > 1 && (z = (Ae ? de.scrollingElement || ue : Ee).style, z = {
                style: z,
                value: z["overflow" + Ce.a.toUpperCase()]
              }, Ae && "scroll" !== Et(ge)["overflow" + Ce.a.toUpperCase()] && (z.style["overflow" + Ce.a.toUpperCase()] = "scroll")), ha(te, x, w), v = fa(te), C = At(te, !0), P = Oe && ee(Ee, E ? Q : J)(), ae && (j = [ae + Ce.os2, m + V + Mt], j.t = x, he = ae === Tt ? Ot(te, Ce) + m + V : 0, he && j.push(Ce.d, he + Mt), ma(j), le && Ht.forEach((e => {
                e.pin === le && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), Oe && at(L)), Oe && (N = {
                top: C.top + (E ? S - i : P) + Mt,
                left: C.left + (E ? P : S - i) + Mt,
                boxSizing: "border-box",
                position: "fixed"
              }, N[vt] = N["max" + jt] = Math.ceil(C.width) + Mt, N[xt] = N["max" + St] = Math.ceil(C.height) + Mt, N[Ct] = N[Ct + wt] = N[Ct + yt] = N[Ct + _t] = N[Ct + kt] = "0", N[Tt] = w[Tt], N[Tt + wt] = w[Tt + wt], N[Tt + yt] = w[Tt + yt], N[Tt + _t] = w[Tt + _t], N[Tt + kt] = w[Tt + kt], b = ((e, t, a) => {
                let r, s = [],
                  n = e.length,
                  o = a ? 8 : 0;
                for (; o < n; o += 2) r = e[o], s.push(r, r in t ? t[r] : e[o + 1]);
                return s.t = e.t, s
              })(f, N, pe), ze && at(0)), t ? (R = t._initted, Se(1), t.render(t.duration(), !0, !0), T = k(Ce.a) - _ + m + V, M = Math.abs(m - T) > 1, Oe && M && b.splice(b.length - 2, 2), t.render(0, !0, !0), R || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), Se(0)) : T = m, z && (z.value ? z.style["overflow" + Ce.a.toUpperCase()] = z.value : z.style.removeProperty("overflow-" + Ce.a));
              else if (G && at() && !ke)
                for (C = G.parentNode; C && C !== ge;) C._pinOffset && (i -= C._pinOffset, l -= C._pinOffset), C = C.parentNode;
              F && F.forEach((e => e.revert(!1, !0))), Le.start = i, Le.end = l, n = o = ze ? L : at(), ke || ze || (n < L && at(L), Le.scroll.rec = 0), Le.revert(!1, !0), Je = qe(), B && (Qe = -1, B.restart(!0)), xe = 0, t && Me && (t._initted || D) && t.progress() !== D && t.progress(D || 0, !0).render(t.time(), !0, !0), (U || tt !== Le.progress || ke) && (t && !Me && t.totalProgress(ke && i < -.001 && !tt ? ie.utils.normalize(i, l, 0) : tt, !0), Le.progress = U || (n - i) / m === tt ? 0 : tt), te && ae && (x._pinOffset = Math.round(Le.progress * T)), I && I.invalidate(), isNaN(Y) || (Y -= ie.getProperty(u, Ce.p), $ -= ie.getProperty(g, Ce.p), wa(u, Ce, Y), wa(c, Ce, Y - (y || 0)), wa(g, Ce, $), wa(d, Ce, $ - (y || 0))), U && !ze && Le.update(), !K || ze || p || (p = !0, K(Le), p = !1)
            }, Le.getVelocity = () => (at() - o) / (qe() - be) * 1e3 || 0, Le.endAnimation = () => {
              gt(Le.callbackAnimation), t && (I ? I.progress(1) : t.paused() ? Me || gt(t, Le.direction < 0, 1) : gt(t, t.reversed()))
            }, Le.labelToScroll = e => t && t.labels && (i || Le.refresh() || i) + t.labels[e] / t.duration() * m || 0, Le.getTrailing = e => {
              let t = Ht.indexOf(Le),
                a = Le.direction > 0 ? Ht.slice(0, t).reverse() : Ht.slice(t + 1);
              return (lt(e) ? a.filter((t => t.vars.preventOverlaps === e)) : a).filter((e => Le.direction > 0 ? e.end <= i : e.start >= l))
            }, Le.update = (e, r, s) => {
              if (ke && !s && !e) return;
              let c, d, g, h, p, f, y, k, j = !0 === ze ? L : Le.scroll(),
                N = e ? 0 : (j - i) / m,
                P = N < 0 ? 0 : N > 1 ? 1 : N || 0,
                R = Le.progress;
              if (r && (o = n, n = ke ? at() : j, he && (O = A, A = t && !Me ? t.totalProgress() : P)), se && !P && te && !xe && !Xe && Ue && i < j + (j - o) / (qe() - be) * se && (P = 1e-4), P !== R && Le.enabled) {
                if (c = Le.isActive = !!P && P < 1, d = !!R && R < 1, f = c !== d, p = f || !!P != !!R, Le.direction = P > R ? 1 : -1, Le.progress = P, p && !xe && (g = P && !R ? 0 : 1 === P ? 1 : 1 === R ? 2 : 3, Me && (h = !f && "none" !== Pe[g + 1] && Pe[g + 1] || Pe[g], k = t && ("complete" === h || "reset" === h || h in t))), Te && (f || k) && (k || V || !t) && (ct(Te) ? Te(Le) : Le.getTrailing(Te).forEach((e => e.endAnimation()))), Me || (!I || xe || Xe ? t && t.totalProgress(P, !(!xe || !Je && !e)) : (I._dp._time - I._start !== I._time && I.render(I._dp._time - I._start), I.resetTo ? I.resetTo("totalProgress", P, t._tTime / t._tDur) : (I.vars.totalProgress = P, I.invalidate().restart()))), te)
                  if (e && ae && (x.style[ae + Ce.os2] = C), Oe) {
                    if (p) {
                      if (y = !e && P > R && l + 1 > j && j + 1 >= ot(Ee, Ce), pe)
                        if (e || !c && !y) ya(te, x);
                        else {
                          let e = At(te, !0),
                            t = j - i;
                          ya(te, ge, e.top + (Ce === J ? t : 0) + Mt, e.left + (Ce === J ? 0 : t) + Mt)
                        } ma(c || y ? b : v), M && P < 1 && c || w(_ + (1 !== P || y ? 0 : T))
                    }
                  } else w(et(_ + T * P));
                he && !a.tween && !xe && !Xe && B.restart(!0), H && (f || le && P && (P < 1 || !De)) && me(H.targets).forEach((e => e.classList[c || le ? "add" : "remove"](H.className))), q && !Me && !e && q(Le), p && !xe ? (Me && (k && ("complete" === h ? t.pause().totalProgress(1) : "reset" === h ? t.restart(!0).pause() : "restart" === h ? t.restart(!0) : t[h]()), q && q(Le)), !f && De || (W && f && ht(Le, W), Ie[g] && ht(Le, Ie[g]), le && (1 === P ? Le.kill(!1, 1) : Ie[g] = 0), f || (g = 1 === P ? 1 : 3, Ie[g] && ht(Le, Ie[g]))), _e && !c && Math.abs(Le.getVelocity()) > (dt(_e) ? _e : 2500) && (gt(Le.callbackAnimation), I ? I.progress(1) : gt(t, "reverse" === h ? 1 : !P, 1))) : Me && q && !xe && q(Le)
              }
              if (E) {
                let e = ke ? j / ke.duration() * (ke._caScrollDist || 0) : j;
                S(e + (u._isFlipped ? 1 : 0)), E(e)
              }
              Y && Y(-j / ke.duration() * (ke._caScrollDist || 0))
            }, Le.enable = (e, t) => {
              Le.enabled || (Le.enabled = !0, Bt(Ee, "resize", Gt), Ae || Bt(Ee, "scroll", Kt), Fe && Bt(Ta, "refreshInit", Fe), !1 !== e && (Le.progress = tt = 0, n = o = Qe = at()), !1 !== t && Le.refresh())
            }, Le.getTween = e => e && a ? a.tween : I, Le.setPositions = (e, t, a, r) => {
              if (ke) {
                let a = ke.scrollTrigger,
                  r = ke.duration(),
                  s = a.end - a.start;
                e = a.start + s * e / r, t = a.start + s * t / r
              }
              Le.refresh(!1, !1, {
                start: Ve(e, a && !!Le._startClamp),
                end: Ve(t, a && !!Le._endClamp)
              }, r), Le.update()
            }, Le.adjustPinSpacing = e => {
              if (j && e) {
                let t = j.indexOf(Ce.d) + 1;
                j[t] = parseFloat(j[t]) + e + Mt, j[1] = parseFloat(j[1]) + e + Mt, ma(j)
              }
            }, Le.disable = (e, t) => {
              if (Le.enabled && (!1 !== e && Le.revert(!0, !0), Le.enabled = Le.isActive = !1, t || I && I.pause(), L = 0, r && (r.uncache = 1), Fe && Lt(Ta, "refreshInit", Fe), B && (B.pause(), a.tween && a.tween.kill() && (a.tween = 0)), !Ae)) {
                let e = Ht.length;
                for (; e--;)
                  if (Ht[e].scroller === Ee && Ht[e] !== Le) return;
                Lt(Ee, "resize", Gt), Ae || Lt(Ee, "scroll", Kt)
              }
            }, Le.kill = (a, s) => {
              Le.disable(a, s), I && !s && I.kill(), U && delete Ut[U];
              let n = Ht.indexOf(Le);
              n >= 0 && Ht.splice(n, 1), n === we && ca > 0 && we--, n = 0, Ht.forEach((e => e.scroller === Le.scroller && (n = 1))), n || ze || (Le.scroll.rec = 0), t && (t.scrollTrigger = null, a && t.revert({
                kill: !1
              }), s || t.kill()), c && [c, d, u, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), $e === Le && ($e = 0), te && (r && (r.uncache = 1), n = 0, Ht.forEach((e => e.pin === te && n++)), n || (r.spacer = 0)), e.onKill && e.onKill(Le)
            }, Ht.push(Le), Le.enable(!1, !1), $ && $(Le), t && t.add && !m) {
            let e = Le.update;
            Le.update = () => {
              Le.update = e, i || l || Le.refresh()
            }, ie.delayedCall(.01, Le.update), m = .01, i = l = 0
          } else Le.refresh();
          te && (() => {
            if (Ye !== na) {
              let e = Ye = na;
              requestAnimationFrame((() => e === na && ia(!0)))
            }
          })()
        }
        static register(e) {
          return le || (ie = e || at(), tt() && window.document && Ta.enable(), le = We), le
        }
        static defaults(e) {
          if (e)
            for (let t in e) zt[t] = e[t];
          return zt
        }
        static disable(e, t) {
          We = 0, Ht.forEach((a => a[t ? "kill" : "disable"](e))), Lt(ce, "wheel", Kt), Lt(de, "scroll", Kt), clearInterval(ve), Lt(de, "touchcancel", Ze), Lt(ge, "touchstart", Ze), Rt(Lt, de, "pointerdown,touchstart,mousedown", Qe), Rt(Lt, de, "pointerup,touchend,mouseup", Je), pe.kill(), it(Lt);
          for (let e = 0; e < F.length; e += 3) Dt(Lt, F[e], F[e + 1]), Dt(Lt, F[e], F[e + 2])
        }
        static enable() {
          if (ce = window, de = document, ue = de.documentElement, ge = de.body, ie && (me = ie.utils.toArray, fe = ie.utils.clamp, Pe = ie.core.context || Ze, Se = ie.core.suppressOverwrites || Ze, Re = ce.history.scrollRestoration || "auto", la = ce.pageYOffset, ie.core.globals("ScrollTrigger", Ta), ge)) {
            We = 1, Be = document.createElement("div"), Be.style.height = "100vh", Be.style.position = "absolute", oa(), Ge(), oe.register(ie), Ta.isTouch = oe.isTouch, Ie = oe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Bt(ce, "wheel", Kt), he = [ce, de, ue, ge], ie.matchMedia ? (Ta.matchMedia = e => {
              let t, a = ie.matchMedia();
              for (t in e) a.add(t, e[t]);
              return a
            }, ie.addEventListener("matchMediaInit", (() => ra())), ie.addEventListener("matchMediaRevert", (() => aa())), ie.addEventListener("matchMedia", (() => {
              ia(0, 1), ea("matchMedia")
            })), ie.matchMedia("(orientation: portrait)", (() => (Vt(), Vt)))) : console.warn("Requires GSAP 3.11.0 or later"), Vt(), Bt(de, "scroll", Kt);
            let e, t, a = ge.style,
              r = a.borderTopStyle,
              s = ie.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), a.borderTopStyle = "solid", e = At(ge), J.m = Math.round(e.top + J.sc()) || 0, Q.m = Math.round(e.left + Q.sc()) || 0, r ? a.borderTopStyle = r : a.removeProperty("border-top-style"), ve = setInterval(Wt, 250), ie.delayedCall(.5, (() => Xe = 0)), Bt(de, "touchcancel", Ze), Bt(ge, "touchstart", Ze), Rt(Bt, de, "pointerdown,touchstart,mousedown", Qe), Rt(Bt, de, "pointerup,touchend,mouseup", Je), ke = ie.utils.checkPrefix("transform"), ga.push(ke), le = qe(), pe = ie.delayedCall(.2, ia).pause(), Ce = [de, "visibilitychange", () => {
                let e = ce.innerWidth,
                  t = ce.innerHeight;
                de.hidden ? (_e = e, Te = t) : _e === e && Te === t || Gt()
              }, de, "DOMContentLoaded", ia, ce, "load", ia, ce, "resize", Gt], it(Bt), Ht.forEach((e => e.enable(0, 1))), t = 0; t < F.length; t += 3) Dt(Lt, F[t], F[t + 1]), Dt(Lt, F[t], F[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (De = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(ve) || (ve = t) && setInterval(Wt, t), "ignoreMobileResize" in e && (Ne = 1 === Ta.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (it(Lt) || it(Bt, e.autoRefreshEvents || "none"), Me = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let a = Z(e),
            r = F.indexOf(a),
            s = rt(a);
          ~r && F.splice(r, s ? 6 : 2), t && (s ? z.unshift(ce, t, ge, t, ue, t) : z.unshift(a, t))
        }
        static clearMatchMedia(e) {
          Ht.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, a) {
          let r = (lt(e) ? Z(e) : e).getBoundingClientRect(),
            s = r[a ? vt : xt] * t || 0;
          return a ? r.right - s > 0 && r.left + s < ce.innerWidth : r.bottom - s > 0 && r.top + s < ce.innerHeight
        }
        static positionInViewport(e, t, a) {
          lt(e) && (e = Z(e));
          let r = e.getBoundingClientRect(),
            s = r[a ? vt : xt],
            n = null == t ? s / 2 : t in Yt ? Yt[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
          return a ? (r.left + n) / ce.innerWidth : (r.top + n) / ce.innerHeight
        }
        static killAll(e) {
          if (Ht.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Qt.killAll || [];
            Qt = {}, e.forEach((e => e()))
          }
        }
      }
      Ta.version = "3.12.2", Ta.saveStyles = e => e ? me(e).forEach((e => {
        if (e && e.style) {
          let t = ta.indexOf(e);
          t >= 0 && ta.splice(t, 5), ta.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), ie.core.getCache(e), Pe())
        }
      })) : ta, Ta.revert = (e, t) => ra(!e, t), Ta.create = (e, t) => new Ta(e, t), Ta.refresh = e => e ? Gt() : (le || Ta.register()) && ia(!0), Ta.update = e => ++F.cache && da(!0 === e ? 2 : 0), Ta.clearScrollMemory = sa, Ta.maxScroll = (e, t) => ot(e, t ? Q : J), Ta.getScrollFunc = (e, t) => ee(Z(e), t ? Q : J), Ta.getById = e => Ut[e], Ta.getAll = () => Ht.filter((e => "ScrollSmoother" !== e.vars.id)), Ta.isScrolling = () => !!Ue, Ta.snapDirectional = Pt, Ta.addEventListener = (e, t) => {
        let a = Qt[e] || (Qt[e] = []);
        ~a.indexOf(t) || a.push(t)
      }, Ta.removeEventListener = (e, t) => {
        let a = Qt[e],
          r = a && a.indexOf(t);
        r >= 0 && a.splice(r, 1)
      }, Ta.batch = (e, t) => {
        let a, r = [],
          s = {},
          n = t.interval || .016,
          o = t.batchMax || 1e9,
          i = (e, t) => {
            let a = [],
              r = [],
              s = ie.delayedCall(n, (() => {
                t(a, r), a = [], r = []
              })).pause();
            return e => {
              a.length || s.restart(!0), a.push(e.trigger), r.push(e), o <= a.length && s.progress(1)
            }
          };
        for (a in t) s[a] = "on" === a.substr(0, 2) && ct(t[a]) && "onRefreshInit" !== a ? i(0, t[a]) : t[a];
        return ct(o) && (o = o(), Bt(Ta, "refresh", (() => o = t.batchMax()))), me(e).forEach((e => {
          let t = {};
          for (a in s) t[a] = s[a];
          t.trigger = e, r.push(Ta.create(t))
        })), r
      };
      let Ca, ja = (e, t, a, r) => (t > r ? e(r) : t < 0 && e(0), a > r ? (r - t) / (a - t) : a < 0 ? t / (t - a) : 1),
        Sa = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (oe.isTouch ? " pinch-zoom" : "") : "none", e === ue && Sa(ge, t)
        },
        Ma = {
          auto: 1,
          scroll: 1
        },
        Ea = ({
          event: e,
          target: t,
          axis: a
        }) => {
          let r, s = (e.changedTouches ? e.changedTouches[0] : e).target,
            n = s._gsap || ie.core.getCache(s),
            o = qe();
          if (!n._isScrollT || o - n._isScrollT > 2e3) {
            for (; s && s !== ge && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !Ma[(r = Et(s)).overflowY] && !Ma[r.overflowX]);) s = s.parentNode;
            n._isScroll = s && s !== t && !rt(s) && (Ma[(r = Et(s)).overflowY] || Ma[r.overflowX]), n._isScrollT = o
          }(n._isScroll || "x" === a) && (e.stopPropagation(), e._gsapAllow = !0)
        },
        Na = (e, t, a, r) => oe.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: r = r && Ea,
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: () => a && Bt(de, oe.eventTypes[0], Oa, !1, !0),
          onDisable: () => Lt(de, oe.eventTypes[0], Oa, !0)
        }),
        Aa = /(input|label|select|textarea)/i,
        Oa = e => {
          let t = Aa.test(e.target.tagName);
          (t || Ca) && (e._gsapAllow = !0, Ca = t)
        };
      Ta.sort = e => Ht.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), Ta.observe = e => new oe(e), Ta.normalizeScroll = e => {
        if (void 0 === e) return Ee;
        if (!0 === e && Ee) return Ee.enable();
        if (!1 === e) return Ee && Ee.kill();
        let t = e instanceof oe ? e : (e => {
          ut(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let t, a, r, s, n, o, i, l, {
              normalizeScrollX: c,
              momentum: d,
              allowNestedScroll: u,
              onRelease: g
            } = e,
            h = Z(e.target) || ue,
            p = ie.core.globals().ScrollSmoother,
            m = p && p.get(),
            f = Ie && (e.content && Z(e.content) || m && !1 !== e.content && !m.smooth() && m.content()),
            b = ee(h, J),
            v = ee(h, Q),
            x = 1,
            y = (oe.isTouch && ce.visualViewport ? ce.visualViewport.scale * ce.visualViewport.width : ce.outerWidth) / ce.innerWidth,
            k = 0,
            w = ct(d) ? () => d(t) : () => d || 2.8,
            _ = Na(h, e.type, !0, u),
            T = () => s = !1,
            C = Ze,
            j = Ze,
            S = () => {
              a = ot(h, J), j = fe(Ie ? 1 : 0, a), c && (C = fe(0, ot(h, Q))), r = na
            },
            M = () => {
              f._gsap.y = et(parseFloat(f._gsap.y) + b.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
            },
            E = () => {
              S(), n.isActive() && n.vars.scrollY > a && (b() > a ? n.progress(1) && b(a) : n.resetTo("scrollY", a))
            };
          return f && ie.set(f, {
            y: "+=0"
          }), e.ignoreCheck = e => Ie && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(T);
              let e = et(t.deltaY / 2),
                a = j(b.v - e);
              if (f && a !== b.v + b.offset) {
                b.offset = a - b.v;
                let e = et((parseFloat(f && f._gsap.y) || 0) - b.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", f._gsap.y = e + "px", b.cacheID = F.cache, da()
              }
              return !0
            }
            b.offset && M(), s = !0
          })() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = x;
            x = et((ce.visualViewport && ce.visualViewport.scale || 1) / y), n.pause(), e !== x && Sa(h, x > 1.01 || !c && "x"), o = v(), i = b(), S(), r = na
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (b.offset && M(), t) {
              F.cache++;
              let t, r, s = w();
              c && (t = v(), r = t + .05 * s * -e.velocityX / .227, s *= ja(v, t, r, ot(h, Q)), n.vars.scrollX = C(r)), t = b(), r = t + .05 * s * -e.velocityY / .227, s *= ja(b, t, r, ot(h, J)), n.vars.scrollY = j(r), n.invalidate().duration(s).play(.01), (Ie && n.vars.scrollY >= a || t >= a - 1) && ie.to({}, {
                onUpdate: E,
                duration: s
              })
            } else l.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            n._ts && n.pause(), qe() - k > 1e3 && (r = 0, k = qe())
          }, e.onChange = (e, t, a, s, n) => {
            if (na !== r && S(), t && c && v(C(s[2] === t ? o + (e.startX - e.x) : v() + t - s[1])), a) {
              b.offset && M();
              let t = n[2] === a,
                r = t ? i + e.startY - e.y : b() + a - n[1],
                s = j(r);
              t && r !== s && (i += s - r), b(s)
            }(a || t) && da()
          }, e.onEnable = () => {
            Sa(h, !c && "x"), Ta.addEventListener("refresh", E), Bt(ce, "resize", E), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = v.smooth = !1), _.enable()
          }, e.onDisable = () => {
            Sa(h, !0), Lt(ce, "resize", E), Ta.removeEventListener("refresh", E), _.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new oe(e), t.iOS = Ie, Ie && !b() && b(1), Ie && ie.ticker.add(Ze), l = t._dc, n = ie.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ka(b, b(), (() => n.pause()))
            },
            onUpdate: da,
            onComplete: l.vars.onComplete
          }), t
        })(e);
        return Ee && Ee.target === t.target && Ee.kill(), rt(t.target) && (Ee = t), t
      }, Ta.core = {
        _getVelocityProp: te,
        _inputObserver: Na,
        _scrollers: F,
        _proxies: z,
        bridge: {
          ss: () => {
            Ue || ea("scrollStart"), Ue = qe()
          },
          ref: () => xe
        }
      }, at() && ie.registerPlugin(Ta);
      let Ia, Pa, Ra, Ba, La, Da, Fa, za, Ya, $a, Xa, qa, Ha, Ua, Wa, Ka, Va = () => "undefined" != typeof window,
        Ga = () => Ia || Va() && (Ia = window.gsap) && Ia.registerPlugin && Ia,
        Qa = e => $a.maxScroll(e || Ra);
      class Ja {
        constructor(e) {
          Pa || Ja.register(Ia) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Xa && Xa.kill(), Xa = this, Wa(this);
          let t, a, r, s, n, o, i, l, c, d, u, g, h, p, m, {
              smoothTouch: f,
              onUpdate: b,
              onStop: v,
              smooth: x,
              onFocusIn: y,
              normalizeScroll: k,
              wholePixels: w
            } = e,
            _ = this,
            T = e.effectsPrefix || "",
            C = $a.getScrollFunc(Ra),
            j = 1 === $a.isTouch ? !0 === f ? .8 : parseFloat(f) || 0 : 0 === x || !1 === x ? 0 : parseFloat(x) || .8,
            S = j && +e.speed || 1,
            M = 0,
            E = 0,
            N = 1,
            A = Ha(0),
            O = () => A.update(-M),
            I = {
              y: 0
            },
            P = () => t.style.overflow = "visible",
            R = e => {
              e.update();
              let t = e.getTween();
              t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), p = !1, e.animation.progress(e.progress, !0)
            },
            B = (e, a) => {
              (e !== M && !d || a) && (w && (e = Math.round(e)), j && (t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", t._gsap.y = e + "px"), E = e - M, M = e, $a.isUpdating || Ja.isRefreshing || $a.update())
            },
            L = function(e) {
              return arguments.length ? (e < 0 && (e = 0), I.y = -e, p = !0, d ? M = -e : B(-e), $a.isRefreshing ? s.update() : C(e / S), this) : -M
            },
            D = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!$a.isRefreshing) {
                let e = Qa(a) * S;
                e < -M && L(e), Ka.restart(!0)
              }
            })),
            F = e => {
              a.scrollTop = 0, e.target.contains && e.target.contains(a) || y && !1 === y(this, e) || ($a.isInViewport(e.target) || e.target === m || this.scrollTo(e.target, !1, "center center"), m = e.target)
            },
            z = (e, t) => {
              if (e < t.start) return e;
              let a = isNaN(t.ratio) ? 1 : t.ratio,
                r = t.end - t.start,
                s = e - t.start,
                n = t.offset || 0,
                o = t.pins || [],
                i = o.offset || 0,
                l = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === Qa() ? 1 : .5;
              return o.forEach((t => {
                r -= t.distance, t.nativeStart <= e && (s -= t.distance)
              })), i && (s *= (r - i / a) / r), e + (s - n * l) / a - s
            },
            Y = (e, t, a) => {
              a || (e.pins.length = e.pins.offset = 0);
              let r, s, n, o, i, l, c, d, u = e.pins,
                g = e.markers;
              for (c = 0; c < t.length; c++)
                if (d = t[c], e.trigger && d.trigger && e !== d && (d.trigger === e.trigger || d.pinnedContainer === e.trigger || e.trigger.contains(d.trigger)) && (i = d._startNative || d._startClamp || d.start, l = d._endNative || d._endClamp || d.end, n = z(i, e), o = d.pin && l > 0 ? n + (l - i) : z(l, e), d.setPositions(n, o, !0, (d._startClamp ? Math.max(0, n) : n) - i), d.markerStart && g.push(Ia.quickSetter([d.markerStart, d.markerEnd], "y", "px")), d.pin && d.end > 0 && !a)) {
                  if (r = d.end - d.start, s = e._startClamp && d.start < 0, s) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void Y(e, t);
                    r += d.start, u.offset = -d.start
                  }
                  u.push({
                    start: d.start,
                    nativeStart: i,
                    end: d.end,
                    distance: r,
                    trig: d
                  }), e.setPositions(e.start, e.end + (s ? -d.start : r), !0)
                }
            },
            $ = (e, t) => {
              n.forEach((a => Y(a, e, t)))
            },
            X = () => {
              P(), requestAnimationFrame(P), n && ($a.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), n.forEach((e => {
                let t = e._startClamp || e.start,
                  a = e.autoSpeed ? Math.min(Qa(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                  r = a - e.end;
                if (t -= r / 2, a -= r / 2, t > a) {
                  let e = t;
                  t = a, a = e
                }
                e._startClamp && t < 0 ? (a = e.ratio < 0 ? Qa() : e.end / e.ratio, r = a - e.end, t = 0) : (e.ratio < 0 || e._endClamp && a >= Qa()) && (a = Qa(), t = e.ratio < 0 || e.ratio > 1 ? 0 : a - (a - e.start) / e.ratio, r = (a - t) * e.ratio - (e.end - e.start)), e.offset = r || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, a, !0)
              })), $($a.sort())), A.reset()
            },
            q = () => $a.addEventListener("refresh", X),
            H = () => n && n.forEach((e => e.vars.onRefresh(e))),
            U = () => (n && n.forEach((e => e.vars.onRefreshInit(e))), H),
            W = (e, t, a, r) => () => {
              let s = "function" == typeof t ? t(a, r) : t;
              s || 0 === s || (s = r.getAttribute("data-" + T + e) || ("speed" === e ? 1 : 0)), r.setAttribute("data-" + T + e, s);
              let n = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: n,
                value: n ? s.substr(6, s.length - 7) : s
              }
            },
            K = (e, t, r, s, o) => {
              o = ("function" == typeof o ? o(s, e) : o) || 0;
              let i, l, c, d, u, g, h = W("speed", t, s, e),
                p = W("lag", r, s, e),
                m = Ia.getProperty(e, "y"),
                f = e._gsap,
                b = [],
                v = () => {
                  t = h(), r = parseFloat(p().value), i = parseFloat(t.value) || 1, c = "auto" === t.value, u = c || l && l._startClamp && l.start <= 0 || b.offset ? 0 : l && l._endClamp && l.end === Qa() ? 1 : .5, d && d.kill(), d = r && Ia.to(e, {
                    ease: qa,
                    overwrite: !1,
                    y: "+=0",
                    duration: r
                  }), l && (l.ratio = i, l.autoSpeed = c)
                },
                x = () => {
                  f.y = m + "px", f.renderTransform(1), v()
                },
                y = [],
                k = 0,
                w = t => {
                  if (c) {
                    x();
                    let a = ((e, t) => {
                      let a, r, s = e.parentNode || La,
                        n = e.getBoundingClientRect(),
                        o = s.getBoundingClientRect(),
                        i = o.top - n.top,
                        l = o.bottom - n.bottom,
                        c = (Math.abs(i) > Math.abs(l) ? i : l) / (1 - t),
                        d = -c * t;
                      return c > 0 && (a = o.height / (Ra.innerHeight + o.height), r = .5 === a ? 2 * o.height : 2 * Math.min(o.height, Math.abs(-c * a / (2 * a - 1))) * (t || 1), d += t ? -r * t : -r / 2, c += r), {
                        change: c,
                        offset: d
                      }
                    })(e, Ya(0, 1, -t.start / (t.end - t.start)));
                    k = a.change, g = a.offset
                  } else g = b.offset || 0, k = (t.end - t.start - g) * (1 - i);
                  b.forEach((e => k -= e.distance * (1 - i))), t.offset = k || .001, t.vars.onUpdate(t), d && d.progress(1)
                };
              return v(), (1 !== i || c || d) && (l = $a.create({
                trigger: c ? e.parentNode : e,
                start: () => t.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o,
                end: () => t.value < 0 ? "max" : t.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o,
                scroller: a,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: x,
                onRefresh: w,
                onKill: e => {
                  let t = n.indexOf(e);
                  t >= 0 && n.splice(t, 1), x()
                },
                onUpdate: e => {
                  let t, a, r, s = m + k * (e.progress - u),
                    n = b.length,
                    o = 0;
                  if (e.offset) {
                    if (n) {
                      for (a = -M, r = e.end; n--;) {
                        if (t = b[n], t.trig.isActive || a >= t.start && a <= t.end) return void(d && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), d.resetTo("y", parseFloat(f.y), -E, !0), N && d.progress(1)));
                        a > t.end && (o += t.distance), r -= t.distance
                      }
                      s = m + o + k * ((Ia.utils.clamp(e.start, e.end, a) - e.start - o) / (r - e.start) - u)
                    }
                    y.length && !c && y.forEach((e => e(s - o))), i = s + g, s = Math.round(1e5 * i) / 1e5 || 0, d ? (d.resetTo("y", s, -E, !0), N && d.progress(1)) : (f.y = s + "px", f.renderTransform(1))
                  }
                  var i
                }
              }), w(l), Ia.core.getCache(l.trigger).stRevert = U, l.startY = m, l.pins = b, l.markers = y, l.ratio = i, l.autoSpeed = c, e.style.willChange = "transform"), l
            };

          function V() {
            return r = t.clientHeight, t.style.overflow = "visible", Da.style.height = Ra.innerHeight + (r - Ra.innerHeight) / S + "px", r - Ra.innerHeight
          }
          q(), $a.addEventListener("killAll", q), Ia.delayedCall(.5, (() => N = 0)), this.scrollTop = L, this.scrollTo = (e, t, a) => {
            let r = Ia.utils.clamp(0, Qa(), isNaN(e) ? this.offset(e, a) : +e);
            t ? d ? Ia.to(this, {
              duration: j,
              scrollTop: r,
              overwrite: "auto",
              ease: qa
            }) : C(r) : L(r)
          }, this.offset = (e, t) => {
            let a, r = (e = za(e)[0]).style.cssText,
              s = $a.create({
                trigger: e,
                start: t || "top top"
              });
            return n && (N ? $a.refresh() : $([s], !0)), a = s.start / S, s.kill(!1), e.style.cssText = r, Ia.core.getCache(e).uncache = 1, a
          }, this.content = function(e) {
            if (arguments.length) {
              let a = za(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Da.children[0];
              return a !== t && (t = a, c = t.getAttribute("style") || "", D && D.observe(t), Ia.set(t, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), j || Ia.set(t, {
                clearProps: "transform"
              })), this
            }
            return t
          }, this.wrapper = function(e) {
            return arguments.length ? (a = za(e || "#smooth-wrapper")[0] || (e => {
              let t = Ba.querySelector(".ScrollSmoother-wrapper");
              return t || (t = Ba.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            })(t), l = a.getAttribute("style") || "", V(), Ia.set(a, j ? {
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
            }), this) : a
          }, this.effects = (e, t) => {
            if (n || (n = []), !e) return n.slice(0);
            (e = za(e)).forEach((e => {
              let t = n.length;
              for (; t--;) n[t].trigger === e && n[t].kill()
            })), t = t || {};
            let a, r, {
                speed: s,
                lag: o,
                effectsPadding: i
              } = t,
              l = [];
            for (a = 0; a < e.length; a++) r = K(e[a], s, o, a, i), r && l.push(r);
            return n.push(...l), l
          }, this.sections = (e, t) => {
            if (o || (o = []), !e) return o.slice(0);
            let a = za(e).map((e => $a.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: t => {
                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
              }
            })));
            return t && t.add ? o.push(...a) : o = a.slice(0), a
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => B(e || 0 === e ? e : M), this.getVelocity = () => A.getVelocity(-M), $a.scrollerProxy(a, {
            scrollTop: L,
            scrollHeight: () => V() && Da.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!j,
            content: t,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: Ra.innerWidth,
              height: Ra.innerHeight
            })
          }), $a.defaults({
            scroller: a
          });
          let G = $a.getAll().filter((e => e.scroller === Ra || e.scroller === a));
          G.forEach((e => e.revert(!0, !0))), s = $a.create({
            animation: Ia.fromTo(I, {
              y: 0
            }, {
              y: () => -V(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = p;
                  e && (R(s), I.y = M), B(I.y, e), O(), b && !d && b(_)
                }
              }
            }),
            onRefreshInit: e => {
              if (Ja.isRefreshing) return;
              if (Ja.isRefreshing = !0, n) {
                let e = $a.getAll().filter((e => !!e.pin));
                n.forEach((t => {
                  t.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(t.trigger)) {
                      let a = t.vars;
                      a.pinnedContainer = e.pin, t.vars = null, t.init(a, t.animation)
                    }
                  }))
                }))
              }
              let t = e.getTween();
              h = t && t._end > t._dp._time, g = M, I.y = 0, j && (1 === $a.isTouch && (a.style.position = "absolute"), a.scrollTop = 0, 1 === $a.isTouch && (a.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, V() / S), h || R(e), I.y = -C() * S, B(I.y), N || e.animation.progress(Ia.utils.clamp(0, 1, g / S / -e.end)), h && (e.progress -= .001, e.update()), Ja.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: Ra,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => V() / S,
            onScrubComplete: () => {
              A.reset(), v && v(this)
            },
            scrub: j || !0
          }), this.smooth = function(t) {
            return arguments.length && (j = t || 0, S = j && +e.speed || 1, s.scrubDuration(t)), s.getTween() ? s.getTween().duration() : 0
          }, s.getTween() && (s.getTween().vars.ease = e.ease || qa), this.scrollTrigger = s, e.effects && this.effects(!0 === e.effects ? "[data-" + T + "speed], [data-" + T + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), G.forEach((e => {
            e.vars.scroller = a, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, t) {
            return arguments.length ? (!!d !== e && (e ? (s.getTween() && s.getTween().pause(), C(-M / S), A.reset(), u = $a.normalizeScroll(), u && u.disable(), d = $a.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => L(-M)
            }), d.nested = Ua(La, "wheel,touch,scroll", !0, !1 !== t)) : (d.nested.kill(), d.kill(), d = 0, u && u.enable(), s.progress = (-M / S - s.start) / (s.end - s.start), R(s))), this) : !!d
          }, this.kill = this.revert = () => {
            this.paused(!1), R(s), s.kill();
            let e = (n || []).concat(o || []),
              r = e.length;
            for (; r--;) e[r].kill();
            $a.scrollerProxy(a), $a.removeEventListener("killAll", q), $a.removeEventListener("refresh", X), a.style.cssText = l, t.style.cssText = c;
            let d = $a.defaults({});
            d && d.scroller === a && $a.defaults({
              scroller: Ra
            }), this.normalizer && $a.normalizeScroll(!1), clearInterval(i), Xa = null, D && D.disconnect(), Da.style.removeProperty("height"), Ra.removeEventListener("focusin", F)
          }, this.refresh = (e, t) => s.refresh(e, t), k && (this.normalizer = $a.normalizeScroll(!0 === k ? {
            debounce: !0,
            content: !j && t
          } : k)), $a.config(e), "overscrollBehavior" in Ra.getComputedStyle(Da) && Ia.set([Da, La], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in Ra.getComputedStyle(Da) && Ia.set([Da, La], {
            scrollBehavior: "auto"
          }), Ra.addEventListener("focusin", F), i = setInterval(O, 250), "loading" === Ba.readyState || requestAnimationFrame((() => $a.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return Pa || (Ia = e || Ga(), Va() && window.document && (Ra = window, Ba = document, La = Ba.documentElement, Da = Ba.body), Ia && (za = Ia.utils.toArray, Ya = Ia.utils.clamp, qa = Ia.parseEase("expo"), Wa = Ia.core.context || function() {}, $a = Ia.core.globals().ScrollTrigger, Ia.core.globals("ScrollSmoother", Ja), Da && $a && (Ka = Ia.delayedCall(.2, (() => $a.isRefreshing || Xa && Xa.refresh())).pause(), Fa = [Ra, Ba, La, Da], Ha = $a.core._getVelocityProp, Ua = $a.core._inputObserver, Ja.refresh = $a.refresh, Pa = 1))), Pa
        }
      }
      Ja.version = "3.12.2", Ja.create = e => Xa && e && Xa.content() === za(e.content)[0] ? Xa : new Ja(e), Ja.get = () => Xa, Ga() && Ia.registerPlugin(Ja);
      let Za, er, tr, ar, rr, sr, nr, or, ir = () => "undefined" != typeof window,
        lr = () => Za || ir() && (Za = window.gsap) && Za.registerPlugin && Za,
        cr = e => "string" == typeof e,
        dr = e => "function" == typeof e,
        ur = (e, t) => {
          let a = "x" === t ? "Width" : "Height",
            r = "scroll" + a,
            s = "client" + a;
          return e === tr || e === ar || e === rr ? Math.max(ar[r], rr[r]) - (tr["inner" + a] || ar[s] || rr[s]) : e[r] - e["offset" + a]
        },
        gr = (e, t) => {
          let a = "scroll" + ("x" === t ? "Left" : "Top");
          return e === tr && (null != e.pageXOffset ? a = "page" + t.toUpperCase() + "Offset" : e = null != ar[a] ? ar : rr), () => e[a]
        },
        hr = (e, t) => {
          if (!(e = sr(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let a = e.getBoundingClientRect(),
            r = !t || t === tr || t === rr,
            s = r ? {
              top: ar.clientTop - (tr.pageYOffset || ar.scrollTop || rr.scrollTop || 0),
              left: ar.clientLeft - (tr.pageXOffset || ar.scrollLeft || rr.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            n = {
              x: a.left - s.left,
              y: a.top - s.top
            };
          return !r && t && (n.x += gr(t, "x")(), n.y += gr(t, "y")()), n
        },
        pr = (e, t, a, r, s) => isNaN(e) || "object" == typeof e ? cr(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - s : "max" === e ? ur(t, a) - s : Math.min(ur(t, a), hr(e, t)[a] - s) : parseFloat(e) - s,
        mr = () => {
          Za = lr(), ir() && Za && "undefined" != typeof document && document.body && (tr = window, rr = document.body, ar = document.documentElement, sr = Za.utils.toArray, Za.config({
            autoKillThreshold: 7
          }), nr = Za.config(), er = 1)
        };
      const fr = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          Za = e, mr()
        },
        init(e, t, a, r, s) {
          er || mr();
          let n = this,
            o = Za.getProperty(e, "scrollSnapType");
          n.isWin = e === tr, n.target = e, n.tween = a, t = ((e, t, a, r) => {
            if (dr(e) && (e = e(t, a, r)), "object" != typeof e) return cr(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let s, n = {};
              for (s in e) n[s] = "onAutoKill" !== s && dr(e[s]) ? e[s](t, a, r) : e[s];
              return n
            }
          })(t, r, e, s), n.vars = t, n.autoKill = !!t.autoKill, n.getX = gr(e, "x"), n.getY = gr(e, "y"), n.x = n.xPrev = n.getX(), n.y = n.yPrev = n.getY(), or || (or = Za.core.globals().ScrollTrigger), "smooth" === Za.getProperty(e, "scrollBehavior") && Za.set(e, {
            scrollBehavior: "auto"
          }), o && "none" !== o && (n.snap = 1, n.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (n.add(n, "x", n.x, pr(t.x, e, "x", n.x, t.offsetX || 0), r, s), n._props.push("scrollTo_x")) : n.skipX = 1, null != t.y ? (n.add(n, "y", n.y, pr(t.y, e, "y", n.y, t.offsetY || 0), r, s), n._props.push("scrollTo_y")) : n.skipY = 1
        },
        render(e, t) {
          let a, r, s, n, o, i = t._pt,
            {
              target: l,
              tween: c,
              autoKill: d,
              xPrev: u,
              yPrev: g,
              isWin: h,
              snap: p,
              snapInline: m
            } = t;
          for (; i;) i.r(e, i.d), i = i._next;
          a = h || !t.skipX ? t.getX() : u, r = h || !t.skipY ? t.getY() : g, s = r - g, n = a - u, o = nr.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), d && (!t.skipX && (n > o || n < -o) && a < ur(l, "x") && (t.skipX = 1), !t.skipY && (s > o || s < -o) && r < ur(l, "y") && (t.skipY = 1), t.skipX && t.skipY && (c.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))), h ? tr.scrollTo(t.skipX ? a : t.x, t.skipY ? r : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)), !p || 1 !== e && 0 !== e || (r = l.scrollTop, a = l.scrollLeft, m ? l.style.scrollSnapType = m : l.style.removeProperty("scroll-snap-type"), l.scrollTop = r + 1, l.scrollLeft = a + 1, l.scrollTop = r, l.scrollLeft = a), t.xPrev = t.x, t.yPrev = t.y, or && or.update()
        },
        kill(e) {
          let t = "scrollTo" === e;
          (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      fr.max = ur, fr.getOffset = hr, fr.buildGetter = gr, lr() && Za.registerPlugin(fr);
      const br = e => {
        const t = m(),
          a = (e, r) => r?.requiresAuth && !t?.nickname ? e : [...e, {
            ...r,
            ...r.children ? {
              children: r.children.reduce(a, [])
            } : []
          }];
        return (0, l.useMemo)((() => e.reduce(a, [])), [e, t?.nickname])
      };
      var vr = a(20270),
        xr = a(3860);
      const yr = (e, t, a, r) => ({
          event: e || "nav_click",
          link_url: t,
          text: a,
          element_placement: `Global Nav > ${r}`?.toLowerCase()
        }),
        kr = () => {
          const e = (0, u.A)(),
            [t] = (0, s.getLocale)(),
            a = m();
          return r => {
            if (!r.path) return r.domain;
            const n = [
                ["username", a?.nickname]
              ],
              o = ((e, t) => t.reduce(((e, [t, a]) => e.replaceAll(`{${t}}`, a)), e))(r.path, n),
              i = "www" === r.domain && "www" !== e.currentSite?.site ? ((e, t) => {
                if (!t || t.iso === s.englishLocale.iso) return e;
                const a = t.subdomaincom;
                return "/" === e[0] ? a + e : `${a}/${e}`
              })(o, t) : o;
            return r.domain + i
          }
        },
        wr = "nav-internal",
        _r = "nav-external",
        Tr = "nav-dropdown",
        Cr = "nav-no-link",
        jr = "games-menu";
      var Sr = a(50097);
      const Mr = ({
          children: e,
          location: t,
          className: a,
          isLegacy: i,
          label: c,
          type: d,
          target: u,
          gaEvent: g,
          gaText: h,
          gaBreadCrumb: p,
          dataTestId: m,
          onClick: f,
          ...b
        }) => {
          const v = (0, s.useIntl)(),
            {
              track: x
            } = (0, n.useGtmTrack)(),
            k = kr(),
            {
              dispatch: w
            } = (0, o.useRockstarEventDispatcher)(),
            _ = y(),
            T = (0, l.useMemo)((() => {
              const e = {};
              return "_blank" === u && (e["aria-label"] = v.formatMessage(Sr.A.nav_opens_in_new_window, {
                text: c
              }), e.rel = "noopener"), e
            }), [c, u]);
          if (!t && d === Cr && m) {
            const t = () => {
              x(yr(g, "", h, p)), w(m)
            };
            return (0, r.jsx)("button", {
              type: "button",
              className: a,
              onClick: () => t(),
              "data-testid": m,
              ...b,
              ...T,
              children: e
            })
          }
          if (!t) return null;
          const C = k(t),
            j = Boolean(d === _r || i || document.documentElement.classList.contains("legacyPage"));
          return (0, r.jsx)(xr.A, {
            className: a,
            target: u,
            to: C,
            onClick: () => (f?.(), void x(yr(g, C.toString(), h, p))),
            onNavigate: _,
            reloadDocument: j,
            "data-testid": m,
            ...b,
            ...T,
            children: e
          })
        },
        Er = {
          callToAction: "rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770",
          highlight: "rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316"
        },
        Nr = ({
          children: e,
          dataTestId: t,
          location: a,
          variant: s,
          gaEvent: n,
          gaText: o,
          target: i,
          onClick: l
        }) => (0, r.jsx)("div", {
          className: Er.callToActionContainer,
          children: (0, r.jsx)(Mr, {
            className: [Er.callToAction, s ? Er[s] : ""].join(" "),
            dataTestId: t,
            location: a,
            gaEvent: n,
            gaText: o,
            gaBreadCrumb: o,
            onClick: l,
            target: i,
            children: e
          })
        });
      var Ar = a(63582);
      const Or = {
          quickFade: {
            duration: .1
          },
          staggerFade: {
            ease: "easeOut",
            duration: .4
          },
          springOpen: {
            type: "spring",
            stiffness: 300,
            damping: 35
          },
          springClose: {
            type: "spring",
            stiffness: 400,
            damping: 40
          },
          hamburgerOpen: {
            type: "spring",
            duration: .6,
            bounce: 0
          },
          hamburgerClose: {
            type: "spring",
            duration: .4,
            bounce: 0
          }
        },
        Ir = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        Pr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        Rr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg",
        Br = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg",
        Lr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg",
        Dr = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg",
        Fr = {
          pillBtn: "rockstargames-modules-core-headerecd71270dd8adfe9e0213f9075d7b3ac",
          pillButton: "rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f",
          selected: "rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e"
        },
        zr = ({
          children: e,
          selected: t,
          ...a
        }) => (0, r.jsx)("button", {
          type: "button",
          className: [Fr.pillButton, t ? Fr.selected : ""].join(" "),
          ...a,
          children: e
        });
      var Yr = a(75971);
      const $r = {
          fadeIn: "rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb",
          pillBtn: "rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513",
          selected: "rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a",
          subMenu: "rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7"
        },
        Xr = {
          enter: {
            opacity: 1,
            zIndex: 101,
            visibility: "visible"
          },
          exit: {
            opacity: 0,
            zIndex: 100,
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        qr = ({
          openerRef: e,
          isOpen: t,
          isMobile: a,
          children: s
        }) => {
          const [n, o] = (0, l.useState)(null), {
            styles: i,
            attributes: c,
            forceUpdate: d
          } = (0, Yr.usePopper)(e, n, {
            placement: "bottom-start",
            modifiers: [{
              name: "offset",
              enabled: !0,
              options: {
                offset: [0, 4]
              }
            }, {
              name: "preventOverflow",
              options: {
                padding: 8,
                altAxis: !a
              }
            }]
          });
          return (0, l.useEffect)((() => {
            Promise.resolve().then(d)
          }), [e, t, a]), (0, r.jsx)(Ar.motion.div, {
            initial: "exit",
            animate: t ? "enter" : "exit",
            transition: Or.quickFade,
            variants: Xr,
            className: [$r.subMenu].join(" "),
            style: {
              ...i.popper
            },
            ref: o,
            ...c.popper,
            children: s
          })
        },
        Hr = ({
          children: e,
          ...t
        }) => (0, r.jsx)("button", {
          type: "button",
          className: "rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13",
          ...t,
          children: e
        }),
        Ur = {
          backgroundElevation: "rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6",
          backgroundOverlay: "rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820",
          backgroundVisible: "rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb"
        },
        Wr = ({
          children: e,
          isOpen: t,
          onClose: a,
          visible: s
        }) => t ? (0, r.jsxs)("div", {
          className: [Ur.backgroundElevation].join(" "),
          onClick: a,
          children: [(0, r.jsx)("div", {
            className: [Ur.backgroundOverlay, s ? Ur.backgroundVisible : ""].join(" ")
          }), e]
        }) : null,
        Kr = ({
          target: e,
          selected: t,
          selectedTarget: a,
          onClick: n,
          isMobile: o,
          ...i
        }) => {
          const c = (0, s.useIntl)(),
            [d, u] = (0, l.useState)(!1),
            [g, h] = (0, l.useState)(null);
          return e.type === Tr ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              ref: h,
              children: (0, r.jsxs)(zr, {
                "aria-label": c.formatMessage(Sr.A.search_target_aria_label, {
                  target: a && e?.targets?.indexOf(a) >= 0 ? a.text : e.text
                }),
                selected: t,
                onClick: () => u(!d),
                ...i,
                children: [a && e?.targets?.indexOf(a) >= 0 ? a.text : e.text, (0, r.jsx)("img", {
                  src: Br,
                  alt: ""
                })]
              }, e.gaText)
            }), (0, r.jsx)(Wr, {
              isOpen: d,
              onClose: () => u(!1),
              children: (0, r.jsx)(qr, {
                isOpen: d,
                openerRef: g,
                isMobile: o,
                children: e.targets?.map((e => (0, r.jsx)(Hr, {
                  "aria-label": c.formatMessage(Sr.A.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => n(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, r.jsx)(zr, {
            "aria-label": c.formatMessage(Sr.A.search_target_aria_label, {
              target: e.text
            }),
            selected: t,
            onClick: () => n(e),
            ...i,
            children: e.text
          }, e.tab)
        },
        Vr = {
          open: "rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345",
          secondaryNavigationSlide: "rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335"
        },
        Gr = ({
          children: e,
          isOpen: t,
          onMouseClick: a,
          onEscapeKey: s,
          onMouseAway: n,
          style: o
        }) => {
          const i = t ? [Vr.open] : [],
            c = e => {
              "Escape" === e.key && s?.()
            };
          return (0, l.useEffect)((() => (t ? window.addEventListener("keyup", c) : window.removeEventListener("keyup", c), () => window.removeEventListener("keyup", c))), [c, t]), t ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              className: [Vr.secondaryNavigationOverlay, ...i].join(" "),
              onClick: a,
              onMouseEnter: n,
              style: o
            }), e && (0, r.jsx)("div", {
              className: [Vr.secondaryNavigationSlide, ...i].join(" "),
              children: e
            })]
          }) : null
        },
        Qr = ({
          handleSearch: e,
          handleSearchKeypress: t,
          handleSearchTargetSelect: a,
          setIsSearchOpen: n,
          setSearchQuery: o,
          isSearchOpen: i,
          searchQuery: c,
          selectedTarget: d,
          selectedTargetIndex: u,
          isSearchPage: g,
          searchError: h,
          maxSearchLength: p
        }) => {
          const m = (0, s.useIntl)(),
            f = b(),
            v = (0, l.useRef)(null),
            x = () => {
              n(), g || o(""), v?.current?.focus()
            },
            y = () => {
              g || n()
            };
          return (0, l.useEffect)((() => {
            i ? v?.current?.focus() : v?.current?.blur()
          }), [i]), (0, r.jsxs)("div", {
            children: [(0, r.jsx)("button", {
              className: "rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60",
              type: "button",
              onClick: x,
              "data-testid": "searchToggle",
              children: (0, r.jsx)("img", {
                src: Pr,
                alt: m.formatMessage(i ? Sr.A.search_close_button : Sr.A.search_open_button)
              })
            }), (0, r.jsx)(Ar.AnimatePresence, {
              children: i && (0, r.jsxs)("div", {
                children: [(0, r.jsx)(Gr, {
                  isOpen: !g,
                  onEscapeKey: y,
                  onMouseClick: y
                }), (0, r.jsxs)(Ar.motion.div, {
                  className: "rockstargames-modules-core-headerce9e8c7dd9562ae75b9543b27f740642",
                  initial: {
                    height: 0,
                    overflow: "hidden"
                  },
                  animate: {
                    height: "auto",
                    overflow: "initial"
                  },
                  exit: {
                    height: 0,
                    overflow: "hidden",
                    transition: Or.springClose
                  },
                  transition: Or.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, r.jsxs)(Ar.motion.div, {
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    exit: {
                      opacity: 0,
                      transition: {
                        duration: .1,
                        ease: "easeOut"
                      }
                    },
                    transition: {
                      duration: .3,
                      ease: "easeIn",
                      delay: .1
                    },
                    className: "rockstargames-modules-core-headerb6ffd9ebe8ffa3ac0f4e248ca522036b",
                    children: [(0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        onClick: e,
                        children: (0, r.jsx)("img", {
                          src: Pr,
                          alt: m.formatMessage(Sr.A.search_action)
                        })
                      })
                    }), (0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f",
                      children: (0, r.jsx)("input", {
                        type: "textfield",
                        value: c,
                        onChange: e => o(e.target.value),
                        onKeyUp: t,
                        placeholder: m.formatMessage(Sr.A.search_placeholder),
                        ref: v,
                        enterKeyHint: "search",
                        maxLength: p
                      })
                    }), (0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa",
                      children: f.targets.map(((e, t) => (0, r.jsx)(Kr, {
                        target: e,
                        onClick: e => a(e, t),
                        selected: u === t,
                        selectedTarget: d
                      }, e.tab)))
                    }), !g && (0, r.jsx)("div", {
                      className: "rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd",
                      children: (0, r.jsx)("button", {
                        type: "button",
                        onClick: x,
                        children: (0, r.jsx)("img", {
                          src: Rr,
                          alt: m.formatMessage(Sr.A.search_close_button)
                        })
                      })
                    })]
                  }), h && (0, r.jsx)("div", {
                    className: "rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6",
                    "aria-live": "polite",
                    children: h
                  })]
                })]
              })
            })]
          })
        },
        Jr = {
          errorMessage: "rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa",
          hasScroll: "rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8",
          search: "rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1",
          targets: "rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746",
          targetsOuter: "rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd"
        },
        Zr = ({
          handleSearch: e,
          handleSearchKeypress: t,
          handleSearchTargetSelect: a,
          setIsSearchOpen: n,
          setSearchQuery: o,
          isSearchOpen: i,
          searchQuery: c,
          selectedTarget: d,
          selectedTargetIndex: u,
          isSearchPage: g,
          searchError: h,
          maxSearchLength: p
        }) => {
          const m = (0, s.useIntl)(),
            f = b(),
            v = (0, l.useRef)(null),
            [x, y] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            let e, t, a = !1;
            const r = r => {
                v && v.current && (r.preventDefault(), a = !0, e = r.pageX - v.current.offsetLeft, t = v.current.scrollLeft)
              },
              s = () => {
                a = !1
              },
              n = r => {
                if (a && (r.preventDefault(), v && v.current)) {
                  const a = r.pageX - v.current.offsetLeft - e;
                  v.current.scrollLeft = t - a
                }
              },
              o = () => {
                if (v && v.current) {
                  const e = v.current.scrollLeft;
                  y(e > 20)
                }
              };
            if (v && v.current) {
              const e = v.current;
              e.addEventListener("mousedown", r), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", n), e.addEventListener("scroll", o)
            }
            return () => {
              v && v.current && (v.current.removeEventListener("mousedown", r), v.current.removeEventListener("mouseup", s), v.current.removeEventListener("mouseleave", s), v.current.removeEventListener("mousemove", n), v.current.removeEventListener("scroll", o))
            }
          })), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(Ar.motion.div, {
              className: Jr.search,
              variants: Ir,
              transition: Or.staggerFade,
              "data-testid": "searchBar",
              children: [(0, r.jsx)("button", {
                type: "button",
                onClick: () => i ? e() : n(!0),
                children: (0, r.jsx)("img", {
                  src: Pr,
                  alt: m.formatMessage(Sr.A.search_action)
                })
              }), (0, r.jsx)("input", {
                type: "text",
                value: c,
                onChange: e => o(e.target.value),
                onFocus: () => n(!0),
                onKeyUp: t,
                placeholder: m.formatMessage(Sr.A.search_placeholder),
                enterKeyHint: "search",
                maxLength: p
              }), i && !g && (0, r.jsx)("button", {
                type: "button",
                onClick: () => n(!1),
                children: (0, r.jsx)("img", {
                  src: Rr,
                  alt: m.formatMessage(Sr.A.search_close_button)
                })
              })]
            }), i && (0, r.jsxs)("div", {
              className: [Jr.targetsOuter, x ? Jr.hasScroll : ""].join(" "),
              children: [(0, r.jsx)("div", {
                className: Jr.targets,
                ref: v,
                children: f.targets.map(((e, t) => (0, r.jsx)(Kr, {
                  target: e,
                  selected: u === t,
                  selectedTarget: d,
                  onClick: e => a(e, t),
                  isMobile: !0
                }, e.tab)))
              }), h && (0, r.jsx)("div", {
                className: Jr.errorMessage,
                "aria-live": "polite",
                children: h
              })]
            })]
          })
        };
      var es = a(16188),
        ts = a.n(es);
      const as = "global-nav-search",
        rs = ({
          ...e
        }) => {
          const {
            windowWidth: t
          } = (0, o.useWindowResize)(), {
            pathname: a,
            search: n
          } = x(), i = b(), [c, d] = (0, l.useState)(""), [u, g] = f(), [h, p] = (0, l.useState)(0), [m, k] = (0, l.useState)(i.targets[0]), [w, _] = (0, l.useState)(""), T = (() => {
            const e = kr(),
              t = y();
            return (a, r) => {
              const s = new URLSearchParams(r.params),
                n = r.path?.replace("{term}", a);
              s.forEach(((e, t) => {
                "{query}" === e && s.set(t, a)
              }));
              const o = s.toString() ? `?${s.toString()}` : "",
                i = {
                  domain: r.domain,
                  path: n + o
                },
                l = e(i);
              l ? i.domain ? window.location.href = l : t ? t(l) : window.history.pushState({}, "", l) : console.error(`No search url could be constructed from ${r.domain} and ${r.path}`)
            }
          })(), {
            isSearchPage: C,
            forceSearch: j
          } = v(), S = (0, s.useIntl)(), M = t < 1024, E = C && j || u === as, N = e => {
            if ("" === c) return !1;
            e.length > m.searchOptions.max && d(e.substring(0, m.searchOptions.max));
            const t = m.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < m.searchOptions.min)) ? (_(S.formatMessage(Sr.A.nav_search_error_too_short, {
              count: m.searchOptions.min
            })), !1) : t ? (_(S.formatMessage(Sr.A.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (_(""), !0)
          }, A = () => {
            N(c) && T(c, m.location)
          }, O = (e, t) => {
            let a;
            const r = new URLSearchParams(e);
            return new URLSearchParams(t).forEach(((e, t) => {
              const s = r.get(t);
              "{query}" === e && s ? (a = !0, d(s), N(s)) : a = s === e && !1 !== a
            })), a
          }, I = (e, t) => {
            if (!t) return !1;
            const a = e.split(/[/?]+/),
              r = t.split(/[/?]+/);
            if (r.every(((e, t) => e === a[t] || "{term}" === e || "" === e))) {
              const e = r.findIndex((e => "{term}" === e));
              return e && d(a[e]), !0
            }
            return !1
          };
          (0, l.useEffect)((() => {
            C || (p(0), k(i.targets[0]));
            const e = i.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && a.startsWith(e.location.path) && O(n, e.location.params)) return k(e), !0;
                if (!e.location.params && I(a, e.location.path)) return k(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const t = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && a.startsWith(e.location.path) && O(n, e.location.params)) return k(e), !0;
                    if (I(a, e.location.path)) return k(e), !0
                  }
                  return !1
                }));
                return !ts().isNil(t) && t >= 0
              }
            }));
            p(e)
          }), [a, n, C]);
          const P = {
            handleSearch: A,
            handleSearchKeypress: e => {
              _(""), "Enter" === e.key && A()
            },
            handleSearchTargetSelect: (e, t) => {
              k(e), p(t), N(c) && T(c, e.location)
            },
            setIsSearchOpen: () => g(as),
            setSearchQuery: d,
            isSearchOpen: E,
            searchQuery: c,
            selectedTarget: m,
            selectedTargetIndex: h,
            isSearchPage: C,
            searchError: w,
            maxSearchLength: m.searchOptions.max
          };
          return M ? (0, r.jsx)(Zr, {
            ...P,
            ...e
          }) : (0, r.jsx)(Qr, {
            ...P
          })
        },
        ss = ({
          cta: e,
          includeSearch: t = !0,
          isMobile: a
        }) => {
          const s = x(),
            n = y(),
            [, o] = f();
          return (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c",
            "data-testid": "actions",
            children: [e && (0, r.jsx)("div", {
              children: (0, r.jsx)(Nr, {
                variant: e.variant,
                location: e.location,
                dataTestId: e.dataTestId,
                gaEvent: e.ga,
                gaText: e.text,
                target: e.target,
                children: e.text
              })
            }), t && (0, r.jsx)(rs, {}), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(vr.MenuButton, {
                setOtherHeaderDropdowns: o
              }), !a && (0, r.jsx)(vr.Menu, {
                location: s,
                onNavigate: n
              })]
            })]
          })
        },
        ns = {
          active: "rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95",
          navigationItem: "rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558"
        },
        os = e => e.replace(/\?.*$/, ""),
        is = (e, t) => e === t,
        ls = e => {
          const {
            pathname: t,
            hostname: a
          } = x();
          return e && e.length ? e.map((({
            domain: e,
            path: r,
            additionalPathMatches: s
          }) => {
            if (e !== a && "" !== e) return null;
            const n = os(r || ""),
              o = is(n, os(t));
            let i;
            return s && (i = is(s, os(t))), Boolean(o || i)
          })) : []
        },
        cs = ({
          text: e,
          type: t,
          location: a,
          isLegacy: s,
          gaText: n,
          gaBreadCrumb: o,
          dataTestId: i,
          target: l,
          ...c
        }) => {
          const [d] = ls(a ? [{
            domain: a?.domain,
            path: a?.path,
            end: "nav-internal" === t,
            additionalPathMatches: a?.additionalPathMatches
          }] : []), u = t === _r;
          return (0, r.jsxs)(Mr, {
            className: [ns.navigationItem, d ? ns.active : ""].join(" "),
            location: a,
            isLegacy: s,
            type: t,
            target: l,
            gaText: n,
            gaBreadCrumb: o,
            dataTestId: i,
            label: e,
            ...c,
            children: [e, u && (0, r.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        ds = {
          active: "rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68",
          navigationDropdownButton: "rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b",
          open: "rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91"
        },
        us = ({
          text: e,
          isOpen: t,
          onClick: a,
          buttonRef: s,
          navChildren: o,
          gaText: i,
          gaBreadCrumb: c,
          dataTestId: d
        }) => {
          const {
            track: u
          } = (0, n.useGtmTrack)(), g = (0, l.useCallback)((() => {
            u(yr(void 0, "", i, c)), a()
          }), [i, c, t, a]), h = (0, l.useMemo)((() => {
            if (!o) return;
            const e = (t, a) => {
              let r;
              return r = a.children ? a.children.reduce(e, []) : a?.location ? [a.location] : [], [...t, ...r]
            };
            return o.reduce(e, [])
          }), [o]), p = ls(h), m = p?.some(Boolean);
          return (0, r.jsx)("div", {
            className: ds.navigationDropdown,
            ref: s,
            children: (0, r.jsxs)("button", {
              className: [ds.navigationDropdownButton, m ? ds.active : "", t ? ds.open : ""].join(" "),
              type: "button",
              "data-testid": d || "navDropdown",
              onClick: g,
              children: [e, (0, r.jsx)("img", {
                src: Br,
                alt: ""
              })]
            })
          })
        };
      var gs = a(18670);
      const hs = ({
          title: e,
          titleSlug: t,
          location: a,
          gaText: s,
          gaBreadCrumb: n,
          dataTestId: o,
          ...i
        }) => (0, r.jsx)("div", {
          className: "rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7",
          children: (0, r.jsx)(Mr, {
            location: a,
            gaText: s,
            gaBreadCrumb: n,
            dataTestId: o,
            ...i,
            children: (0, r.jsx)(gs.A, {
              title: e,
              titleSlug: t
            })
          })
        }, e),
        ps = (e, t) => {
          const a = t.currentSite?.site === u.C.www ? "" : `https://${t.sites[u.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: a,
              path: "/games"
            },
            games: [{
              titleSlug: "VI",
              text: e.formatMessage(Sr.A.games_menu_vi),
              gaText: "Grand Theft Auto VI",
              location: {
                domain: a,
                path: "/VI"
              },
              isLegacy: !0,
              dataTestId: "VI"
            }, {
              titleSlug: "gta-v",
              text: e.formatMessage(Sr.A.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: a,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(Sr.A.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: a,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(Sr.A.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: a,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(Sr.A.games_menu_rdr),
              gaText: "Red Dead Redemption",
              location: {
                domain: a,
                path: "/reddeadredemption"
              },
              dataTestId: "rdr"
            }]
          }
        },
        ms = () => {
          const e = (0, s.useIntl)(),
            t = p(),
            {
              viewAllLocation: a,
              games: n
            } = ps(e, t);
          return (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1",
            "data-testid": "gamesMenu",
            children: [(0, r.jsxs)("div", {
              className: "rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31",
              children: [(0, r.jsx)("div", {
                children: (0, r.jsx)("h2", {
                  className: "rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994",
                  children: e.formatMessage(Sr.A.games_menu_featured)
                })
              }), (0, r.jsx)("div", {
                children: (0, r.jsxs)(Mr, {
                  className: "rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095",
                  gaText: Sr.A.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${Sr.A.games_menu_view_all.defaultMessage}`,
                  location: a,
                  children: [e.formatMessage(Sr.A.games_menu_view_all), (0, r.jsx)("img", {
                    src: Dr,
                    alt: e.formatMessage(Sr.A.nav_view_all_games)
                  })]
                })
              })]
            }), (0, r.jsx)("div", {
              className: "rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0",
              children: n.map((e => (0, r.jsx)(hs, {
                title: e.text,
                titleSlug: e.titleSlug,
                gaText: e.gaText,
                gaBreadCrumb: `Games > ${e.gaText}`,
                location: e.location,
                dataTestId: e.dataTestId,
                isLegacy: e.isLegacy
              }, e.titleSlug)))
            })]
          })
        },
        fs = {
          nested: "rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e",
          open: "rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11",
          openChevron: "rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5",
          subMenuDropdownButton: "rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8",
          subMenuDropdownContainer: "rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2",
          subMenuDropdownItems: "rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e"
        },
        bs = {
          nested: "rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b",
          subMenuItem: "rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5"
        },
        vs = {
          active: "rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9",
          navigationLink: "rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641"
        },
        xs = e => [vs.navigationLink, e ? vs.active : ""].join(" "),
        ys = ({
          text: e,
          type: t,
          location: a,
          className: s,
          isLegacy: n,
          target: o,
          nested: i,
          gaText: l,
          gaBreadCrumb: c,
          dataTestId: d,
          ...u
        }) => {
          const g = t === _r,
            h = a ? [{
              ...a,
              end: t === wr
            }] : [],
            [p] = ls(h);
          return (0, r.jsxs)(Mr, {
            className: [xs(Boolean(p)), bs.subMenuItem, i ? bs.nested : "", s].join(" "),
            location: a,
            isLegacy: n,
            type: t,
            target: o,
            gaText: l,
            gaBreadCrumb: c,
            dataTestId: d,
            label: e,
            "data-ui-name": "sub-menu-item",
            ...u,
            children: [e, g && (0, r.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        ks = "nav-dropdown",
        ws = ({
          text: e,
          navChildren: t,
          gaText: a,
          gaBreadCrumb: s,
          nested: o,
          dataTestId: i,
          subMenuId: c,
          toggleOpen: d,
          isOpen: u,
          ...g
        }) => {
          const [h] = f(), {
            track: p
          } = (0, n.useGtmTrack)(), m = (0, l.useRef)(null), [b, v] = (0, l.useState)(null);
          (0, l.useEffect)((() => {
            null === h && d(null)
          }), [h]);
          const x = e => {
              p(yr(void 0, "", a, s)), d(e ? c : null)
            },
            y = e => {
              "ArrowLeft" === e.code && (x(!1), m?.current?.focus())
            };
          return (0, r.jsxs)("div", {
            className: [fs.subMenuDropdownContainer, o ? fs.nested : ""].join(" "),
            ...g,
            "data-ui-name": "sub-menu-item",
            children: [(0, r.jsxs)("button", {
              type: "button",
              className: [fs.subMenuDropdownButton, o ? fs.nested : "", u ? fs.open : ""].join(" "),
              onClick: () => x(!u),
              onKeyUp: e => {
                "Enter" === e.code && x(!0), "ArrowRight" === e.code && x(!0), "ArrowLeft" === e.code && x(!1)
              },
              ref: m,
              "data-testid": i,
              children: [e, (0, r.jsx)("img", {
                src: Br,
                className: fs.openChevron,
                alt: ""
              })]
            }), (0, r.jsx)(Ar.AnimatePresence, {
              children: u && t && (0, r.jsx)(Ar.motion.div, {
                className: fs.subMenuDropdownItems,
                variants: {
                  open: {
                    height: "auto",
                    opacity: 1,
                    marginBottom: "revert-layer"
                  },
                  closed: {
                    height: 0,
                    opacity: 0,
                    marginBottom: "auto"
                  }
                },
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Or.springOpen,
                children: t.map((e => e.type === ks ? (0, r.jsx)(ws, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${s} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: b === `desktop-submenu-${e.gaText}`,
                  toggleOpen: v
                }, e.gaText) : (0, r.jsx)(ys, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${s} > ${e.gaText}`,
                  onKeyUp: y,
                  isLegacy: e.isLegacy,
                  dataTestId: e.dataTestId,
                  nested: !0
                }, e.gaText)))
              })
            })]
          })
        },
        _s = ws,
        Ts = {
          show: {
            height: "auto",
            zIndex: 101,
            display: "block",
            visibility: "visible",
            transition: {
              ...Or.springOpen
            }
          },
          hidden: {
            height: 0,
            zIndex: 100,
            overflow: "hidden",
            transitionEnd: {
              visibility: "hidden",
              display: "none"
            },
            transition: {
              ...Or.springClose
            }
          }
        },
        Cs = ({
          text: e,
          gaText: t,
          type: a,
          location: s,
          navChildren: n,
          isLegacy: o,
          target: i,
          gaBreadCrumb: c,
          navKey: d,
          isHidden: u,
          dataTestId: g,
          ...h
        }) => {
          const [p, m] = (0, l.useState)(null), b = x(), [v, y] = f(), [k, w] = (0, l.useState)(null), _ = v === d, T = {
            ..._ ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, l.useEffect)((() => {
            y(null)
          }), [b.pathname, b.key]);
          const C = c ? `${c} > ${t}` : t ?? e;
          return a === Tr ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(us, {
              text: e,
              gaText: t,
              gaBreadCrumb: C,
              onClick: () => y(d),
              isOpen: _,
              buttonRef: u ? void 0 : m,
              navChildren: n,
              dataTestId: g,
              ...h
            }), !u && (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(Gr, {
                isOpen: _,
                onMouseClick: () => y(null),
                onEscapeKey: () => y(null)
              }), (0, r.jsx)(qr, {
                isOpen: _,
                openerRef: p,
                children: n?.map((e => e.type === Tr ? (0, r.jsx)(_s, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${C} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: k === `desktop-submenu-${e.gaText}`,
                  toggleOpen: w
                }, `desktop-submenu-${e.text}`) : (0, r.jsx)(ys, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${C} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : a === jr ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(us, {
              text: e,
              gaText: e,
              gaBreadCrumb: c ? `${c} > ${t}` : t,
              onClick: () => y(d),
              isOpen: _,
              dataTestId: g,
              ...h
            }), !u && (0, r.jsx)(Gr, {
              isOpen: !0,
              onMouseClick: () => y(null),
              onEscapeKey: () => y(null),
              style: T,
              children: (0, r.jsx)(Ar.motion.div, {
                initial: "hidden",
                animate: _ ? "show" : "hidden",
                variants: Ts,
                children: (0, r.jsx)(ms, {})
              })
            })]
          }) : s || a === Cr ? (0, r.jsx)(cs, {
            location: s,
            type: a,
            text: e,
            isLegacy: o,
            target: i,
            gaText: t,
            gaBreadCrumb: c ? `${c} > ${t}` : t,
            dataTestId: g,
            ...h
          }) : null
        },
        js = ({
          links: e
        }) => {
          const t = (0, s.useIntl)(),
            [a, n] = (0, l.useState)(e),
            [o, i] = (0, l.useState)([]),
            c = (0, l.useRef)(null),
            d = (0, l.useRef)(null),
            u = (0, l.useCallback)((() => {
              const t = d.current;
              if (!t || !e.length) return;
              const {
                children: a
              } = t;
              let r = 0;
              const s = Array.from(a).map(((e, t) => {
                  const a = e.getBoundingClientRect().top;
                  return 0 === t && (r = a), a
                })),
                o = s.filter((e => e !== r)).length,
                l = s.findIndex((e => e > r));
              let c = l;
              l > 0 && (c = l - 1), o ? (n(e.slice(0, c)), i(e.slice(c))) : (n(e), i([]))
            }), [e, d?.current]);
          (0, l.useEffect)((() => {
            const e = new ResizeObserver(u);
            return d?.current && e.observe(d.current), () => {
              d?.current && e.unobserve(d.current)
            }
          }), [e, d?.current]);
          const g = (0, l.useMemo)((() => (0, r.jsx)("ul", {
            ref: d,
            className: "rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0",
            "aria-hidden": "true",
            children: e.map((e => (0, r.jsx)("li", {
              children: (0, r.jsx)(Cs, {
                text: e.text,
                type: e.type,
                target: e.target,
                location: e.location,
                navChildren: e.children,
                navKey: e.text,
                isHidden: !0
              })
            }, `desktop-main-dropdown-hidden-${e.text}`)))
          })), [e]);
          return 0 === e.length ? null : (0, r.jsxs)("nav", {
            className: "rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73",
            children: [(0, r.jsxs)("ul", {
              ref: c,
              children: [a.map((e => (0, r.jsx)("li", {
                children: (0, r.jsx)(Cs, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  gaText: e.gaText,
                  dataTestId: e?.dataTestId
                })
              }, e.text))), o.length > 0 && (0, r.jsx)("li", {
                children: (0, r.jsx)(Cs, {
                  text: t.formatMessage(Sr.A.nav_more_dropdown),
                  type: Tr,
                  navChildren: o,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), g]
          })
        },
        Ss = () => (0, r.jsx)("div", {
          className: "rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a"
        }),
        Ms = {
          link: "rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876",
          quickAccess: "rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a"
        },
        Es = () => {
          const {
            windowWidth: e
          } = (0, o.useWindowResize)(), t = p(), a = t.currentSite?.site === u.C.www ? "" : `https://${t.sites[u.C.www]}.rockstargames.com`, n = e < 1024, i = {
            hidden: {
              y: "100%",
              transition: Or.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...Or.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * Or.hamburgerOpen.duration
              }
            }
          }, l = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: Or.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: Or.staggerFade
            }
          }, c = (0, s.useIntl)(), d = {
            home: {
              domain: a,
              path: "/"
            },
            games: {
              domain: a,
              path: "/games"
            },
            newswire: {
              domain: a,
              path: "/newswire"
            }
          }, g = "Quick Access";
          return (0, r.jsxs)(Ar.motion.ul, {
            className: Ms.quickAccess,
            variants: n ? i : Ir,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: n ? null : Or.quickFade,
            children: [(0, r.jsx)(Ar.motion.li, {
              variants: n ? l : null,
              children: (0, r.jsxs)(Mr, {
                location: d.home,
                className: [xs(), Ms.link].join(" "),
                gaText: Sr.A.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${g} > ${Sr.A.nav_quick_access_home.defaultMessage}`,
                children: [(0, r.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, r.jsx)(s.FormattedMessage, {
                  ...Sr.A.nav_quick_access_home
                })]
              })
            }), (0, r.jsx)(Ar.motion.li, {
              variants: n ? l : null,
              children: (0, r.jsxs)(Mr, {
                location: d.games,
                className: [xs(), Ms.link].join(" "),
                gaText: Sr.A.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${g} > ${Sr.A.nav_quick_access_games.defaultMessage}`,
                children: [(0, r.jsx)("img", {
                  alt: c.formatMessage(Sr.A.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, r.jsx)(s.FormattedMessage, {
                  ...Sr.A.nav_quick_access_games
                })]
              })
            }), (0, r.jsx)(Ar.motion.li, {
              variants: n ? l : null,
              children: (0, r.jsxs)(Mr, {
                location: d.newswire,
                className: [xs(), Ms.link].join(" "),
                gaText: Sr.A.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${g} > ${Sr.A.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, r.jsx)("img", {
                  alt: c.formatMessage(Sr.A.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, r.jsx)(s.FormattedMessage, {
                  ...Sr.A.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        Ns = "quick-access-menu",
        As = ({
          site: e,
          brand: t,
          hideRockstarBrand: a,
          hideQuickAccess: n
        }) => {
          const i = (0, s.useIntl)(),
            {
              windowWidth: c
            } = (0, o.useWindowResize)(),
            [d, g] = (0, l.useState)(null),
            [h, m] = (0, l.useState)(null),
            [b, v] = f(),
            x = p(),
            y = b === Ns,
            k = n ? Sr.A.nav_rockstargames_home : Sr.A.nav_rockstargames_logo,
            w = {
              domain: x.currentSite?.site === u.C.www ? "" : `https://${x.sites[u.C.www]}.rockstargames.com`,
              path: "/"
            },
            _ = c < 1024,
            {
              styles: T,
              attributes: C,
              forceUpdate: j
            } = (0, Yr.usePopper)(d, h, {
              placement: "bottom-start",
              modifiers: [{
                name: "offset",
                enabled: !0,
                options: {
                  offset: [0, 30]
                }
              }, {
                name: "preventOverflow",
                options: {
                  padding: 8,
                  altAxis: !0
                }
              }]
            });
          return (0, l.useEffect)((() => {
            Promise.resolve().then(j)
          }), [d, y]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d",
            children: [!a && (0, r.jsxs)("div", {
              className: "rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1",
              children: [(_ || n) && (0, r.jsx)(Mr, {
                location: w,
                gaText: Sr.A.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: Sr.A.nav_rockstargames_home.defaultMessage,
                "aria-label": i.formatMessage(k),
                children: (0, r.jsx)(Ss, {})
              }), !_ && !n && (0, r.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c",
                onClick: () => v(Ns),
                "aria-label": i.formatMessage(k),
                ref: g,
                children: (0, r.jsx)(Ss, {})
              }), y && !n && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(Gr, {
                  isOpen: y,
                  onEscapeKey: () => v(null),
                  onMouseClick: () => v(null)
                }), (0, r.jsx)("div", {
                  className: "rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca",
                  style: {
                    ...T.popper
                  },
                  ref: m,
                  ...C.popper,
                  children: (0, r.jsx)(Es, {})
                })]
              })]
            }), t && (0, r.jsxs)(r.Fragment, {
              children: [!a && (0, r.jsx)("div", {
                className: "rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8"
              }), (0, r.jsx)("div", {
                className: "rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a",
                children: (0, r.jsx)("img", {
                  className: "rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e",
                  "data-brand": e,
                  alt: e,
                  src: t
                })
              })]
            })]
          })
        },
        Os = {
          fixed: "rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa",
          fluid: "rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8",
          header: "rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069",
          quickAccessWrapper: "rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e",
          title: "rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b"
        },
        Is = ({
          headerRef: e,
          data: t
        }) => {
          const a = (0, l.useMemo)((() => {
              const {
                currentSite: e
              } = (0, u.A)();
              if (e?.site === u.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            s = br(t.links);
          return (0, r.jsxs)("header", {
            ref: e,
            className: [Os.header, Os.fixed].join(" "),
            style: a,
            children: [(0, r.jsx)("div", {
              className: Os.title,
              children: (0, r.jsx)(As, {
                site: t.site,
                brand: t.brand,
                hideQuickAccess: t.hideQuickAccess || !1
              })
            }), (0, r.jsx)("div", {
              className: Os.fluid,
              children: (0, r.jsx)(js, {
                links: s
              })
            }), (0, r.jsx)("div", {
              className: Os.fixed,
              children: (0, r.jsx)(ss, {
                cta: t.cta,
                includeSearch: !t.hideSearch
              })
            })]
          })
        },
        Ps = {
          hamburger: "rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052",
          open: "rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b"
        },
        Rs = ({
          toggle: e,
          isMenuOpen: t
        }) => {
          const {
            track: a
          } = (0, n.useGtmTrack)();
          return (0, r.jsx)("div", {
            className: [Ps.hamburger, t ? Ps.open : ""].join(" "),
            children: (0, r.jsxs)("button", {
              onClick: () => {
                a({
                  event: t ? "nav_close" : "nav_open",
                  element_placement: "global nav"
                }), e?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
            })
          })
        },
        Bs = {
          fullMenuOpen: "rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b",
          header: "rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3",
          nav: "rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627",
          navContainer: "rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4",
          overlay: "rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d",
          searchOpen: "rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b",
          title: "rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8"
        };
      var Ls = a(32654);
      const Ds = ({
          text: e
        }) => {
          const {
            isMobile: t
          } = (0, o.useWindowResize)(), a = (0, s.useIntl)(), n = p(), {
            viewAllLocation: i,
            games: c
          } = ps(a, n), [d, u] = (0, l.useState)(2.5);
          return (0, l.useEffect)((() => {
            u(t ? 2.5 : 3.5)
          }), [t]), (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d",
            "data-testid": "gamesMenu",
            children: [(0, r.jsxs)("div", {
              className: "rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764",
              children: [(0, r.jsx)("h2", {
                children: e
              }), (0, r.jsxs)(Mr, {
                gaText: Sr.A.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${Sr.A.nav_view_all_games.defaultMessage}`,
                location: i,
                className: vs.navigationLink,
                children: [(0, r.jsx)(s.FormattedMessage, {
                  ...Sr.A.nav_view_all_games
                }), (0, r.jsx)("img", {
                  src: Dr,
                  alt: a.formatMessage(Sr.A.nav_view_all_games)
                })]
              })]
            }), (0, r.jsx)(Ls.RC, {
              className: "rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: d,
              speed: 700,
              children: c.map((e => (0, r.jsx)(Ls.qr, {
                className: "rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1",
                children: (0, r.jsx)(hs, {
                  titleSlug: e.titleSlug,
                  title: e.text,
                  gaText: e.gaText,
                  gaBreadCrumb: `Games > ${e.gaText}`,
                  location: e.location,
                  dataTestId: e.dataTestId,
                  isLegacy: e.isLegacy
                })
              }, e.gaText)))
            })]
          })
        },
        Fs = ({
          children: e,
          isOpen: t
        }) => (0, r.jsx)(Ar.AnimatePresence, {
          children: t && (0, r.jsx)(Ar.motion.div, {
            className: "rockstargames-modules-core-headerad11bebe60eb9c08d9bb91f941f50d2a",
            variants: {
              open: {
                height: "auto",
                opacity: 1
              },
              closed: {
                height: 0,
                opacity: 0
              }
            },
            animate: "open",
            initial: "closed",
            exit: "closed",
            transition: Or.springOpen,
            children: e
          })
        }),
        zs = {
          open: "rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d",
          subMenuDropdownButton: "rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc",
          subMenuDropdownContainer: "rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016",
          subMenuDropdownItems: "rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0"
        },
        Ys = {},
        $s = ({
          text: e,
          dataTestId: t,
          type: a,
          target: s,
          location: n,
          className: o,
          gaText: i,
          gaBreadCrumb: l,
          isLegacy: c,
          onClick: d,
          ...u
        }) => {
          const [g] = ls(n ? [n] : []), h = a === _r;
          return (0, r.jsxs)(Mr, {
            className: [xs(Boolean(g)), Ys.subMenuItem, o].join(" "),
            dataTestId: t,
            location: n,
            type: a,
            target: s,
            gaText: i,
            gaBreadCrumb: l,
            onClick: d,
            isLegacy: c,
            label: e,
            ...u,
            children: [e, h && (0, r.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        Xs = ({
          text: e,
          dataTestId: t,
          navChildren: a,
          gaText: s,
          gaBreadCrumb: o,
          onClick: i,
          isSubMenuOpen: l,
          toggleMenuOpen: c,
          ...d
        }) => {
          const {
            track: u
          } = (0, n.useGtmTrack)();
          return (0, r.jsxs)("div", {
            className: zs.subMenuDropdownContainer,
            ...d,
            children: [(0, r.jsxs)("button", {
              type: "button",
              "data-testid": t,
              className: [zs.subMenuDropdownButton, l ? zs.open : ""].join(" "),
              onClick: () => {
                u(yr(void 0, "", s, o)), c()
              },
              children: [e, (0, r.jsx)("img", {
                src: Br,
                alt: ""
              })]
            }), (0, r.jsx)(Ar.AnimatePresence, {
              children: l && (0, r.jsx)(Ar.motion.div, {
                className: zs.subMenuDropdownItems,
                variants: {
                  open: {
                    height: "auto",
                    opacity: 1
                  },
                  closed: {
                    height: 0,
                    opacity: 0
                  }
                },
                animate: "open",
                initial: "closed",
                exit: "closed",
                transition: Or.springOpen,
                children: a.map((e => (0, r.jsx)($s, {
                  text: e.text,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${o} > ${e.gaText}`,
                  onClick: i,
                  isLegacy: e.isLegacy
                }, e.gaText)))
              })
            })]
          })
        },
        qs = ({
          dataTestId: e,
          type: t,
          target: a,
          location: s,
          navChildren: n,
          gaBreadCrumb: o,
          onClick: i,
          isOpen: c,
          setIsOpen: d,
          text: u,
          gaText: g,
          ...h
        }) => {
          const [p, m] = (0, l.useState)(null), [f] = ls(s ? [s] : []), b = o ? `${o} > ${g}` : g;
          if (t === Tr) return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(us, {
              text: u,
              dataTestId: e,
              gaText: g,
              gaBreadCrumb: b,
              onClick: () => d(),
              isOpen: c,
              ...h
            }), (0, r.jsx)(Fs, {
              isOpen: c,
              children: n?.map(((e, t) => e.type === Tr ? (0, r.jsx)(Xs, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${b} > ${e.gaText}`,
                onClick: i,
                isSubMenuOpen: p === t,
                toggleMenuOpen: () => m(p !== t ? t : null)
              }, e.gaText) : (0, r.jsx)($s, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${b} > ${e.gaText}`,
                onClick: i
              }, e.gaText)))
            })]
          });
          if (t === jr) return (0, r.jsx)(Ds, {
            text: u
          });
          const v = t === _r;
          return (0, r.jsxs)(Mr, {
            location: s,
            dataTestId: e,
            type: t,
            target: a,
            gaText: g,
            gaBreadCrumb: b,
            className: [xs(Boolean(f)), f ? "rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956" : ""].join(" "),
            label: u,
            ...h,
            children: [u, v && (0, r.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        Hs = ({
          links: e,
          cta: t,
          onClick: a
        }) => {
          const [s, n] = (0, l.useState)(null);
          return (0, r.jsx)("div", {
            className: "rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb",
            children: (0, r.jsxs)("ul", {
              children: [e.map(((e, t) => (0, r.jsx)(Ar.motion.li, {
                variants: Ir,
                transition: Or.staggerFade,
                children: (0, r.jsx)(qs, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: a,
                  isOpen: s === t,
                  setIsOpen: () => n(s !== t ? t : null)
                })
              }, e.text))), t && (0, r.jsx)(Ar.motion.li, {
                className: "rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3",
                variants: Ir,
                transition: Or.staggerFade,
                children: (0, r.jsx)(Nr, {
                  variant: t.variant,
                  dataTestId: t.dataTestId,
                  location: t.location,
                  gaEvent: t.ga,
                  gaText: t.gaText,
                  onClick: a,
                  children: t.text
                })
              })]
            })
          })
        },
        Us = ({
          headerRef: e,
          data: t
        }) => {
          const [a, s] = (0, l.useState)(!1), [n, i] = (0, l.useState)(!1), {
            isSearchPage: c,
            forceSearch: d
          } = v(), g = x(), {
            pathname: h,
            hash: m,
            search: f
          } = g, b = y(), {
            currentSite: k
          } = p(), w = br(t.links), {
            setBodyIsLocked: _
          } = (0, o.useBodyScrollable)("HeaderMobile"), T = {
            show: {
              height: "auto",
              paddingBottom: a && t.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...Or.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: Or.hamburgerClose
            }
          };
          return (0, l.useEffect)((() => {
            _(!!a)
          }), [a]), (0, l.useEffect)((() => {
            i(!1), s(!1)
          }), [h, m, f]), (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("header", {
              ref: e,
              className: Bs.header,
              children: [(0, r.jsx)(Rs, {
                toggle: () => {
                  s(!a), i(!1)
                },
                isMenuOpen: a
              }), (0, r.jsx)("div", {
                className: Bs.title,
                children: (0, r.jsx)(As, {
                  site: t.site,
                  brand: t.brand,
                  hideRockstarBrand: !!t.brand
                })
              }), (0, r.jsx)("div", {
                children: (0, r.jsx)(ss, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, r.jsx)(Ar.AnimatePresence, {
              children: (a || n || c && k?.site === u.C.www) && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(Ar.motion.nav, {
                  className: [Bs.nav, a && t.brand ? Bs.paddingBottom : "", a ? Bs.fullMenuOpen : ""].join(" "),
                  variants: T,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!t.hideSearch && (0, r.jsx)(rs, {
                    isSearchOpen: n || c && d,
                    setIsSearchOpen: i
                  }), a && (0, r.jsx)("div", {
                    className: [Bs.navContainer, n ? Bs.searchOpen : ""].join(" "),
                    children: (0, r.jsx)(Hs, {
                      links: w,
                      cta: t.cta,
                      onClick: () => {
                        s(!1), i(!1)
                      }
                    })
                  })]
                }), a && t.brand && !t.hideQuickAccess && (0, r.jsx)(Es, {}), !c && (0, r.jsx)(Ar.motion.div, {
                  className: Bs.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: Or.hamburgerClose
                  },
                  transition: Or.hamburgerOpen
                })]
              })
            }), (0, r.jsx)(vr.Menu, {
              location: g,
              onNavigate: b
            })]
          })
        };
      a(79952);
      const Ws = () => {
          const e = (0, l.useRef)(null),
            t = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, l.useEffect)((() => {
            t && t.enableExperimentalAPIs(!0)
          }), []), (0, r.jsx)("button", {
            ref: e,
            className: "rockstargames-modules-core-headere0e27fbcd7bb62793ad72aa4562e8b53",
            onClick: () => {
              const a = document.querySelector("header");
              if (t && a) {
                const r = t.findCandidates(a, "down", {
                  mode: "all"
                });
                if (r !== a) {
                  const t = r.filter((t => {
                    if (a.contains(t) || e.current === t) return !1;
                    const r = t.getAttribute("tabindex"),
                      s = null === r || parseInt(r, 10) >= 0,
                      n = null !== t.offsetParent && "hidden" !== getComputedStyle(t).visibility;
                    return s && n
                  }));
                  t.length > 0 && t[0].focus()
                }
              }
            },
            children: (0, r.jsx)(s.FormattedMessage, {
              ...Sr.A.accessibility_skip_button
            })
          })
        },
        Ks = {
          badge: "rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2",
          globalNavigationRoot: "rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953",
          globalNavigationSpacer: "rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e",
          large: "rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79",
          pillBtn: "rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e",
          selected: "rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12"
        };
      k.gsap.registerPlugin(Ta, Ja, fr);
      const Vs = () => {
          const e = (0, l.useRef)(null),
            t = (0, o.useScroll)(),
            a = t?.freezeUserShouldSeeMore,
            {
              windowWidth: s
            } = (0, o.useWindowResize)(),
            n = (() => {
              const e = (0, l.useContext)(g);
              if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
              return e.navigationData
            })(),
            i = x(),
            {
              isSearchPage: c,
              forceSearch: d
            } = v(),
            u = s < 1024,
            [h, p] = (0, l.useState)(!1),
            m = (0, l.useRef)(null),
            f = (0, l.useRef)(null);
          (0, l.useEffect)((() => {
            p(!0)
          }), []), (0, l.useEffect)((() => {
            const t = "data-show-more-content";
            document.body.removeAttribute(t), e?.current?.removeAttribute(t)
          }), [i.pathname]);
          const b = (0, l.useCallback)((t => {
            if (a) return;
            const r = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            t.direction === m?.current || r ? r && t?.animation?.pause() : -1 === t.direction ? t.animation?.reverse() : t.animation?.play();
            const s = "data-show-more-content";
            1 === t.direction ? (document.body.setAttribute(s, ""), e?.current?.setAttribute(s, "")) : (document.body.removeAttribute(s), e?.current?.removeAttribute(s)), m.current = t.direction
          }), [a]);
          (0, l.useEffect)((() => {
            const e = k.gsap.context((() => {
              f?.current && k.gsap.set(f.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    b(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [a, f?.current]);
          const y = (0, l.useMemo)((() => u ? (0, r.jsx)(Us, {
            headerRef: f,
            data: n
          }) : (0, r.jsx)(Is, {
            headerRef: f,
            data: n
          })), [n, u]);
          return (0, r.jsxs)("div", {
            className: Ks.globalNavigationRoot,
            "data-header-initialized": h,
            ref: e,
            children: [(0, r.jsx)(Ws, {}), (0, r.jsx)("div", {
              className: [Ks.globalNavigationSpacer, c && d ? Ks.globalNavigationSearchSpacer : ""].join(" ")
            }), y]
          })
        },
        {
          graphEnv: Gs
        } = (0, o.getConfigForDomain)(),
        Qs = ({
          navData: e,
          searchConfig: t,
          routeOptions: a,
          location: s,
          onNavigate: n
        }) => (0, r.jsx)("div", {
          className: "siteHeaderContainer",
          children: (0, r.jsx)(o.ResizeProvider, {
            children: (0, r.jsx)(i.UN, {
              children: (0, r.jsx)(h, {
                navData: e,
                location: s,
                onNavigate: n,
                searchConfig: t,
                routeOptions: a,
                children: (0, r.jsx)(Vs, {})
              })
            })
          })
        }),
        Js = (0, o.withRockstarGraph)((({
          navData: e,
          searchConfig: t,
          routeOptions: a,
          location: n,
          onNavigate: l,
          privateToken: c
        }) => {
          const [{
            iso: d
          }] = (0, s.getLocale)();
          return (0, r.jsx)("div", {
            className: "siteHeaderContainer",
            children: (0, r.jsx)(o.ResizeProvider, {
              children: (0, r.jsx)(i.iR, {
                privateToken: c,
                children: (0, r.jsx)(i.UN, {
                  children: (0, r.jsx)(h, {
                    navData: e,
                    location: n,
                    onNavigate: l,
                    searchConfig: t,
                    routeOptions: a,
                    children: (0, r.jsx)(Vs, {})
                  })
                })
              })
            })
          })
        }), {
          env: Gs
        }),
        Zs = ((e, t = null, a = !1) => function(s) {
          return (0, r.jsx)(c, {
            header: t,
            hidden: a,
            children: (0, r.jsx)(e, {
              ...s
            })
          })
        })((0, s.withIntl)((({
          ...e
        }) => {
          const {
            hasProvider: t
          } = (0, n.useRockstarUser)();
          return t ? (0, r.jsx)(Qs, {
            ...e
          }) : (0, r.jsx)(Js, {
            ...e
          })
        }), d), null, !0)
    }
  }
]);