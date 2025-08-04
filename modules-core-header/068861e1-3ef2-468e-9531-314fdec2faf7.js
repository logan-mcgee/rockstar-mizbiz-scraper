try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "068861e1-3ef2-468e-9531-314fdec2faf7", e._sentryDebugIdIdentifier = "sentry-dbid-068861e1-3ef2-468e-9531-314fdec2faf7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5809, 8305], {
    21861: (e, t, a) => {
      a.d(t, {
        A: () => k,
        K: () => p
      });
      var r = a(95966);
      const s = (0, r.setMakeVarItem)({
          key: "navOpenReactive",
          value: (0, r.makeVar)(null)
        }),
        n = e => s(e),
        o = (0, r.setMakeVarItem)({
          key: "jumpScMenuFocusReactive",
          value: (0, r.makeVar)(!1)
        }),
        i = e => o(e),
        l = (0, r.setMakeVarItem)({
          key: "hasNotificationsReactive",
          value: (0, r.makeVar)(!1)
        }),
        c = e => l(e),
        d = (0, r.setMakeVarItem)({
          key: "currentCharIdReactive",
          value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
        }),
        u = e => d(e),
        g = (0, r.setMakeVarItem)({
          key: "selectedCharacterTupleReactive",
          value: (0, r.makeVar)(null)
        }),
        h = e => g(e),
        p = (0, r.setMakeVarItem)({
          key: "rockstarIdReactive",
          value: (0, r.makeVar)(null)
        }),
        m = (0, r.setMakeVarItem)({
          key: "charactersNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        f = e => m(e),
        v = (0, r.setMakeVarItem)({
          key: "crewsNeededReactive",
          value: (0, r.makeVar)(!1)
        }),
        b = e => v(e),
        x = (0, r.setMakeVarItem)({
          key: "userDataReactive",
          value: (0, r.makeVar)(null)
        }),
        y = e => x(e),
        k = () => {
          const e = (0, r.useReactiveVar)(m),
            t = (0, r.useReactiveVar)(v),
            a = (0, r.useReactiveVar)(d),
            p = (0, r.useReactiveVar)(s),
            k = (0, r.useReactiveVar)(l),
            w = (0, r.useReactiveVar)(g);
          return {
            charactersNeeded: e,
            crewsNeeded: t,
            currentCharId: a,
            hasNotifications: k,
            navOpen: p,
            userData: (0, r.useReactiveVar)(x),
            selectedCharacterTuple: w,
            jumpScMenuFocus: (0, r.useReactiveVar)(o),
            setCharactersNeeded: f,
            setCrewsNeeded: b,
            setCurrentCharId: u,
            setHasNotifications: c,
            setNavOpen: n,
            setSelectedCharacterTuple: h,
            setUserData: y,
            setJumpScMenuFocus: i
          }
        }
    },
    63473: (e, t, a) => {
      a.d(t, {
        A: () => Zs
      });
      var r = a(81788),
        s = a(2918),
        n = a(95966),
        o = a(83098),
        i = a(71127);
      var l = a(70954);
      class c extends i.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headerd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, l.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, l.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var d = a(52542),
        u = a(32779);
      const g = (0, i.createContext)({
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
        h = e => {
          let {
            navData: t,
            location: a,
            onNavigate: n,
            routeOptions: o,
            children: c,
            searchConfig: d
          } = e;
          const [h, p] = (0, i.useState)(null), [m, f] = (0, i.useMemo)((() => (0, r.getLocale)()), []), {
            hash: v
          } = a, {
            data: b
          } = (0, s.useRockstarUser)(), x = (0, u.A)(), y = (0, i.useMemo)((() => {
            const e = {
              ...a,
              ...window.location
            };
            return {
              navigationData: t,
              onNavigate: n,
              environment: x,
              location: e,
              locale: m,
              rockstarUser: b,
              openedDropdown: h,
              setOpenedDropdown: p,
              routeOptions: o,
              searchConfig: d
            }
          }), [t, m, JSON.stringify(a), x, h, o, b]);
          return (0, i.useEffect)((() => {
            f(m.iso);
            const e = () => p(null);
            return window.addEventListener("scroll", e, {
              passive: !0
            }), () => {
              window.removeEventListener("scroll", e)
            }
          }), []), (0, i.useEffect)((() => {
            const e = v?.replace("#", "");
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
          }), [v]), (0, l.jsx)(g.Provider, {
            value: y,
            children: c
          })
        },
        p = () => {
          const e = (0, i.useContext)(g);
          if (void 0 === e) throw new Error("useDomainEnvironment must be used within a Navigation Provider");
          return e.environment
        },
        m = () => {
          const e = (0, i.useContext)(g);
          if (void 0 === e) throw new Error("useRockstarUserProfile must be used within a Navigation Provider");
          return e.rockstarUser
        },
        f = () => {
          const e = (0, i.useContext)(g);
          if (void 0 === e) throw new Error("useOpenDropdown must be used within a Navigation Provider");
          const {
            openedDropdown: t,
            setOpenedDropdown: a
          } = e;
          return [t, e => {
            a(e === t ? null : e)
          }]
        },
        v = () => {
          const e = (0, i.useContext)(g);
          if (void 0 === e) throw new Error("useSearchConfig must be used within a Navigation Provider");
          return e.searchConfig
        },
        b = () => {
          const e = (0, i.useContext)(g);
          if (void 0 === e) throw new Error("useRouteOptions must be used within a Navigation Provider");
          return e.routeOptions
        },
        x = () => {
          const e = (0, i.useContext)(g);
          if (void 0 === e) throw new Error("useWindowLocation must be used within a Navigation Provider");
          return e.location
        },
        y = () => {
          const e = (0, i.useContext)(g);
          if (void 0 === e) throw new Error("useOnNavigate must be used within a Navigation Provider");
          return e.onNavigate
        };
      var k = a(13581);
      let w, _, T, C, S, j, M, E, A, N, I, O, P, R, B = () => w || "undefined" != typeof window && (w = window.gsap) && w.registerPlugin && w,
        L = 1,
        D = [],
        F = [],
        z = [],
        $ = Date.now,
        U = (e, t) => t,
        X = (e, t) => ~z.indexOf(e) && z[z.indexOf(e) + 1][t],
        V = e => !!~I.indexOf(e),
        Y = (e, t, a, r, s) => e.addEventListener(t, a, {
          passive: !r,
          capture: !!s
        }),
        q = (e, t, a, r) => e.removeEventListener(t, a, !!r),
        H = "scrollLeft",
        W = "scrollTop",
        K = () => O && O.isPressed || F.cache++,
        G = (e, t) => {
          let a = r => {
            if (r || 0 === r) {
              L && (C.history.scrollRestoration = "manual");
              let t = O && O.isPressed;
              r = a.v = Math.round(r) || (O && O.iOS ? 1 : 0), e(r), a.cacheID = F.cache, t && U("ss", r)
            } else(t || F.cache !== a.cacheID || U("ref")) && (a.cacheID = F.cache, a.v = e());
            return a.v + a.offset
          };
          return a.offset = 0, e && a
        },
        Q = {
          s: H,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: G((function(e) {
            return arguments.length ? C.scrollTo(e, J.sc()) : C.pageXOffset || S[H] || j[H] || M[H] || 0
          }))
        },
        J = {
          s: W,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: Q,
          sc: G((function(e) {
            return arguments.length ? C.scrollTo(Q.sc(), e) : C.pageYOffset || S[W] || j[W] || M[W] || 0
          }))
        },
        Z = (e, t) => (t && t._ctx && t._ctx.selector || w.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== w.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        ee = (e, {
          s: t,
          sc: a
        }) => {
          V(e) && (e = S.scrollingElement || j);
          let r = F.indexOf(e),
            s = a === J.sc ? 1 : 2;
          !~r && (r = F.push(e) - 1), F[r + s] || Y(e, "scroll", K);
          let n = F[r + s],
            o = n || (F[r + s] = G(X(e, t), !0) || (V(e) ? a : G((function(a) {
              return arguments.length ? e[t] = a : e[t]
            }))));
          return o.target = e, n || (o.smooth = "smooth" === w.getProperty(e, "scrollBehavior")), o
        },
        te = (e, t, a) => {
          let r = e,
            s = e,
            n = $(),
            o = n,
            i = t || 50,
            l = Math.max(500, 3 * i),
            c = (e, t) => {
              let l = $();
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
                d = $();
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
          N = w.core.globals().ScrollTrigger, N && N.core && (() => {
            let e = N.core,
              t = e.bridge || {},
              a = e._scrollers,
              r = e._proxies;
            a.push(...F), r.push(...z), F = a, z = r, U = (e, a) => t[e](a)
          })()
        },
        ne = e => (w = e || B(), w && "undefined" != typeof document && document.body && (C = window, S = document, j = S.documentElement, M = S.body, I = [C, S, j, M], T = w.utils.clamp, R = w.core.context || function() {}, A = "onpointerenter" in M ? "pointer" : "mouse", E = oe.isTouch = C.matchMedia && C.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in C || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, P = oe.eventTypes = ("ontouchstart" in j ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in j ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => L = 0), 500), se(), _ = 1), _);
      Q.op = J, F.cache = 0;
      class oe {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          _ || ne(w) || console.warn("Please gsap.registerPlugin(Observer)"), N || se();
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
            onRelease: v,
            onRight: b,
            onLeft: x,
            onUp: y,
            onDown: k,
            onChangeX: T,
            onChangeY: I,
            onChange: B,
            onToggleX: L,
            onToggleY: F,
            onHover: z,
            onHoverEnd: U,
            onMove: X,
            ignoreCheck: H,
            isNormalizer: W,
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
          this.target = s = Z(s) || j, this.vars = e, d && (d = w.utils.toArray(d)), t = t || 1e-9, a = a || 0, u = u || 1, ue = ue || 1, r = r || "wheel,touch,pointer", o = !1 !== o, n || (n = parseFloat(C.getComputedStyle(M).lineHeight) || 22);
          let fe, ve, be, xe, ye, ke, we, _e = this,
            Te = 0,
            Ce = 0,
            Se = ee(s, Q),
            je = ee(s, J),
            Me = Se(),
            Ee = je(),
            Ae = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === P[0],
            Ne = V(s),
            Ie = s.ownerDocument || S,
            Oe = [0, 0, 0],
            Pe = [0, 0, 0],
            Re = 0,
            Be = () => Re = $(),
            Le = (e, t) => (_e.event = e) && d && ~d.indexOf(e.target) || t && Ae && "touch" !== e.pointerType || H && H(e, t),
            De = () => {
              let e = _e.deltaX = re(Oe),
                a = _e.deltaY = re(Pe),
                r = Math.abs(e) >= t,
                s = Math.abs(a) >= t;
              B && (r || s) && B(_e, e, a, Oe, Pe), r && (b && _e.deltaX > 0 && b(_e), x && _e.deltaX < 0 && x(_e), T && T(_e), L && _e.deltaX < 0 != Te < 0 && L(_e), Te = _e.deltaX, Oe[0] = Oe[1] = Oe[2] = 0), s && (k && _e.deltaY > 0 && k(_e), y && _e.deltaY < 0 && y(_e), I && I(_e), F && _e.deltaY < 0 != Ce < 0 && F(_e), Ce = _e.deltaY, Pe[0] = Pe[1] = Pe[2] = 0), (xe || be) && (X && X(_e), be && (m(_e), be = !1), xe = !1), ke && !(ke = !1) && me && me(_e), ye && (ie(_e), ye = !1), fe = 0
            },
            Fe = (e, t, a) => {
              Oe[a] += e, Pe[a] += t, _e._vx.update(e), _e._vy.update(t), o ? fe || (fe = requestAnimationFrame(De)) : De()
            },
            ze = (e, t) => {
              pe && !we && (_e.axis = we = Math.abs(e) > Math.abs(t) ? "x" : "y", ke = !0), "y" !== we && (Oe[2] += e, _e._vx.update(e, !0)), "x" !== we && (Pe[2] += t, _e._vy.update(t, !0)), o ? fe || (fe = requestAnimationFrame(De)) : De()
            },
            $e = e => {
              if (Le(e, 1)) return;
              let t = (e = ae(e, i)).clientX,
                r = e.clientY,
                s = t - _e.x,
                n = r - _e.y,
                o = _e.isDragging;
              _e.x = t, _e.y = r, (o || Math.abs(_e.startX - t) >= a || Math.abs(_e.startY - r) >= a) && (m && (be = !0), o || (_e.isDragging = !0), ze(s, n), o || h && h(_e))
            },
            Ue = _e.onPress = e => {
              Le(e, 1) || e && e.button || (_e.axis = we = null, ve.pause(), _e.isPressed = !0, e = ae(e), Te = Ce = 0, _e.startX = _e.x = e.clientX, _e.startY = _e.y = e.clientY, _e._vx.reset(), _e._vy.reset(), Y(W ? s : Ie, P[1], $e, i, !0), _e.deltaX = _e.deltaY = 0, f && f(_e))
            },
            Xe = _e.onRelease = e => {
              if (Le(e, 1)) return;
              q(W ? s : Ie, P[1], $e, !0);
              let t = !isNaN(_e.y - _e.startY),
                a = _e.isDragging && (Math.abs(_e.x - _e.startX) > 3 || Math.abs(_e.y - _e.startY) > 3),
                r = ae(e);
              !a && t && (_e._vx.reset(), _e._vy.reset(), i && he && w.delayedCall(.08, (() => {
                if ($() - Re > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Ie.createEvent) {
                  let t = Ie.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, C, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), _e.isDragging = _e.isGesturing = _e.isPressed = !1, l && !W && ve.restart(!0), p && a && p(_e), v && v(_e, a)
            },
            Ve = e => e.touches && e.touches.length > 1 && (_e.isGesturing = !0) && G(e, _e.isDragging),
            Ye = () => (_e.isGesturing = !1) || oe(_e),
            qe = e => {
              if (Le(e)) return;
              let t = Se(),
                a = je();
              Fe((t - Me) * ue, (a - Ee) * ue, 1), Me = t, Ee = a, l && ve.restart(!0)
            },
            He = e => {
              if (Le(e)) return;
              e = ae(e, i), ie && (ye = !0);
              let t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? C.innerHeight : 1) * u;
              Fe(e.deltaX * t, e.deltaY * t, 0), l && !W && ve.restart(!0)
            },
            We = e => {
              if (Le(e)) return;
              let t = e.clientX,
                a = e.clientY,
                r = t - _e.x,
                s = a - _e.y;
              _e.x = t, _e.y = a, xe = !0, (r || s) && ze(r, s)
            },
            Ke = e => {
              _e.event = e, z(_e)
            },
            Ge = e => {
              _e.event = e, U(_e)
            },
            Qe = e => Le(e) || ae(e, i) && de(_e);
          ve = _e._dc = w.delayedCall(c || .25, (() => {
            _e._vx.reset(), _e._vy.reset(), ve.pause(), l && l(_e)
          })).pause(), _e.deltaX = _e.deltaY = 0, _e._vx = te(0, 50, !0), _e._vy = te(0, 50, !0), _e.scrollX = Se, _e.scrollY = je, _e.isDragging = _e.isGesturing = _e.isPressed = !1, R(this), _e.enable = e => (_e.isEnabled || (Y(Ne ? Ie : s, "scroll", K), r.indexOf("scroll") >= 0 && Y(Ne ? Ie : s, "scroll", qe, i, ge), r.indexOf("wheel") >= 0 && Y(s, "wheel", He, i, ge), (r.indexOf("touch") >= 0 && E || r.indexOf("pointer") >= 0) && (Y(s, P[0], Ue, i, ge), Y(Ie, P[2], Xe), Y(Ie, P[3], Xe), he && Y(s, "click", Be, !1, !0), de && Y(s, "click", Qe), G && Y(Ie, "gesturestart", Ve), oe && Y(Ie, "gestureend", Ye), z && Y(s, A + "enter", Ke), U && Y(s, A + "leave", Ge), X && Y(s, A + "move", We)), _e.isEnabled = !0, e && e.type && Ue(e), le && le(_e)), _e), _e.disable = () => {
            _e.isEnabled && (D.filter((e => e !== _e && V(e.target))).length || q(Ne ? Ie : s, "scroll", K), _e.isPressed && (_e._vx.reset(), _e._vy.reset(), q(W ? s : Ie, P[1], $e, !0)), q(Ne ? Ie : s, "scroll", qe, ge), q(s, "wheel", He, ge), q(s, P[0], Ue, ge), q(Ie, P[2], Xe), q(Ie, P[3], Xe), q(s, "click", Be, !0), q(s, "click", Qe), q(Ie, "gesturestart", Ve), q(Ie, "gestureend", Ye), q(s, A + "enter", Ke), q(s, A + "leave", Ge), q(s, A + "move", We), _e.isEnabled = _e.isPressed = _e.isDragging = !1, ce && ce(_e))
          }, _e.kill = _e.revert = () => {
            _e.disable();
            let e = D.indexOf(_e);
            e >= 0 && D.splice(e, 1), O === _e && (O = 0)
          }, D.push(_e), W && V(s) && (O = _e), _e.enable(g)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      oe.version = "3.12.2", oe.create = e => new oe(e), oe.register = ne, oe.getAll = () => D.slice(), oe.getById = e => D.filter((t => t.vars.id === e))[0], B() && w.registerPlugin(oe);
      let ie, le, ce, de, ue, ge, he, pe, me, fe, ve, be, xe, ye, ke, we, _e, Te, Ce, Se, je, Me, Ee, Ae, Ne, Ie, Oe, Pe, Re, Be, Le, De, Fe, ze, $e, Ue, Xe = 1,
        Ve = Date.now,
        Ye = Ve(),
        qe = 0,
        He = 0,
        We = (e, t, a) => {
          let r = lt(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return a["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Ke = (e, t) => !t || lt(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Ge = () => He && requestAnimationFrame(Ge),
        Qe = () => ye = 1,
        Je = () => ye = 0,
        Ze = e => e,
        et = e => Math.round(1e5 * e) / 1e5 || 0,
        tt = () => "undefined" != typeof window,
        at = () => ie || tt() && (ie = window.gsap) && ie.registerPlugin && ie,
        rt = e => !!~he.indexOf(e),
        st = e => ("Height" === e ? Le : ce["inner" + e]) || ue["client" + e] || ge["client" + e],
        nt = e => X(e, "getBoundingClientRect") || (rt(e) ? () => (va.width = ce.innerWidth, va.height = Le, va) : () => Nt(e)),
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
        vt = "bottom",
        bt = "width",
        xt = "height",
        yt = "Right",
        kt = "Left",
        wt = "Top",
        _t = "Bottom",
        Tt = "padding",
        Ct = "margin",
        St = "Width",
        jt = "Height",
        Mt = "px",
        Et = e => ce.getComputedStyle(e),
        At = (e, t) => {
          for (let a in t) a in e || (e[a] = t[a]);
          return e
        },
        Nt = (e, t) => {
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
        It = (e, {
          d2: t
        }) => e["offset" + t] || e["client" + t] || 0,
        Ot = e => {
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
        $t = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        Ut = (e, t) => {
          if (lt(e)) {
            let a = e.indexOf("="),
              r = ~a ? +(e.charAt(a - 1) + 1) * parseFloat(e.substr(a + 1)) : 0;
            ~a && (e.indexOf("%") > a && (r *= t / 100), e = e.substr(0, a - 1)), e = r + (e in $t ? $t[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
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
            v = f ? s : n,
            b = "border-color:" + v + ";font-size:" + o + ";color:" + v + ";font-weight:" + l + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((p || u) && h ? "fixed;" : "absolute;"), (p || u || !h) && (b += (r === J ? ft : vt) + ":" + (c + parseFloat(i)) + "px;"), d && (b += "box-sizing:border-box;text-align:left;width:" + d.offsetWidth + "px;"), g._isStart = f, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = b, g.innerText = t || 0 === t ? e + "-" + t : e, m.children[0] ? m.insertBefore(g, m.children[0]) : m.appendChild(g), g._offset = g["offset" + r.op.d2], Vt(g, 0, r, f), g
        },
        Vt = (e, t, a, r) => {
          let s = {
              display: "block"
            },
            n = a[r ? "os2" : "p2"],
            o = a[r ? "p2" : "os2"];
          e._isFlipped = r, s[a.a + "Percent"] = r ? -100 : 0, s[a.a] = r ? "1px" : 0, s["border" + n + St] = 1, s["border" + o + St] = 0, s[a.p] = t + "px", ie.set(e, s)
        },
        Yt = [],
        qt = {},
        Ht = () => Ve() - qe > 34 && (Fe || (Fe = requestAnimationFrame(da))),
        Wt = () => {
          (!Ee || !Ee.isPressed || Ee.startX > ge.clientWidth) && (F.cache++, Ee ? Fe || (Fe = requestAnimationFrame(da)) : da(), qe || ea("scrollStart"), qe = Ve())
        },
        Kt = () => {
          Ie = ce.innerWidth, Ne = ce.innerHeight
        },
        Gt = () => {
          F.cache++, !xe && !Me && !de.fullscreenElement && !de.webkitFullscreenElement && (!Ae || Ie !== ce.innerWidth || Math.abs(ce.innerHeight - Ne) > .25 * ce.innerHeight) && pe.restart(!0)
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
          for (we = 0; we < Yt.length; we++) a = Yt[we], !a || t && a._ctx !== t || (e ? a.kill(1) : a.revert(!0, !0));
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
          if (qe && !e) return void Bt(Ta, "scrollEnd", Zt);
          oa(), ze = Ta.isRefreshing = !0, F.forEach((e => ct(e) && ++e.cacheID && (e.rec = e())));
          let a = ea("refreshInit");
          Se && Ta.sort(), t || ra(), F.forEach((e => {
            ct(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Yt.slice(0).forEach((e => e.refresh())), Yt.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                a = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - a), e.refresh()
            }
          })), Yt.forEach((e => {
            let t = ot(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), a.forEach((e => e && e.render && e.render(-1))), F.forEach((e => {
            ct(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), sa(Re, 1), pe.pause(), na++, ze = 2, da(2), Yt.forEach((e => ct(e.vars.onRefresh) && e.vars.onRefresh(e))), ze = Ta.isRefreshing = !1, ea("refresh")
        },
        la = 0,
        ca = 1,
        da = e => {
          if (!ze || 2 === e) {
            Ta.isUpdating = !0, Ue && Ue.update(0);
            let e = Yt.length,
              t = Ve(),
              a = t - Ye >= 50,
              r = e && Yt[0].scroll();
            if (ca = la > r ? -1 : 1, ze || (la = r), a && (qe && !ye && t - qe > 200 && (qe = 0, ea("scrollEnd")), ve = Ye, Ye = t), ca < 0) {
              for (we = e; we-- > 0;) Yt[we] && Yt[we].update(0, a);
              ca = 1
            } else
              for (we = 0; we < e; we++) Yt[we] && Yt[we].update(0, a);
            Ta.isUpdating = !1
          }
          Fe = 0
        },
        ua = [mt, "top", vt, ft, Ct + _t, Ct + yt, Ct + wt, Ct + kt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ga = ua.concat([bt, xt, "boxSizing", "max" + St, "max" + jt, "position", Ct, Tt, Tt + wt, Tt + yt, Tt + _t, Tt + kt]),
        ha = (e, t, a, r) => {
          if (!e._gsap.swappedIn) {
            let s, n = ua.length,
              o = t.style,
              i = e.style;
            for (; n--;) s = ua[n], o[s] = a[s];
            o.position = "absolute" === a.position ? "absolute" : "relative", "inline" === a.display && (o.display = "inline-block"), i[vt] = i[ft] = "auto", o.flexBasis = a.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[bt] = It(e, Q) + Mt, o[xt] = It(e, J) + Mt, o[Tt] = i[Ct] = i.top = i[mt] = "0", ma(r), i[bt] = i["max" + St] = a[bt], i[xt] = i["max" + jt] = a[xt], i[Tt] = a[Tt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
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
        va = {
          left: 0,
          top: 0
        },
        ba = (e, t, a, r, s, n, o, i, l, c, d, u, g, h) => {
          ct(e) && (e = e(i)), lt(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Ut("0" + e.substr(3), a) : 0));
          let p, m, f, v = g ? g.time() : 0;
          if (g && g.seek(0), isNaN(e) || (e = +e), dt(e)) g && (e = ie.utils.mapRange(g.scrollTrigger.start, g.scrollTrigger.end, 0, u, e)), o && Vt(o, a, r, !0);
          else {
            ct(t) && (t = t(i));
            let n, d, u, g, h = (e || "0").split(" ");
            f = Z(t, i) || ge, n = Nt(f) || {}, n && (n.left || n.top) || "none" !== Et(f).display || (g = f.style.display, f.style.display = "block", n = Nt(f), g ? f.style.display = g : f.style.removeProperty("display")), d = Ut(h[0], n[r.d]), u = Ut(h[1] || "0", a), e = n[r.p] - l[r.p] - c + d + s - u, o && Vt(o, u, r, a - u < 20 || o._isStart && u > 20), a -= a - u
          }
          if (h && (i[h] = e || -.001, e < 0 && (e = 0)), n) {
            let t = e + a,
              s = n._isStart;
            p = "scroll" + r.d2, Vt(n, t, r, s && t > 20 || !s && (d ? Math.max(ge[p], ue[p]) : n.parentNode[p]) <= t + 1), d && (l = Nt(o), d && (n.style[r.op.p] = l[r.op.p] - r.op.m - n._offset + Mt))
          }
          return g && f && (p = Nt(f), g.seek(u), m = Nt(f), g._caScrollDist = p[r.p] - m[r.p], e = e / g._caScrollDist * u), g && g.seek(v), g ? e : Math.round(e)
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
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !He) return void(this.update = this.refresh = this.kill = Ze);
          e = At(lt(e) || dt(e) || e.nodeType ? {
            trigger: e
          } : e, zt);
          let a, r, s, n, o, i, l, c, d, u, g, h, p, m, f, v, b, x, y, k, w, _, T, C, S, j, M, E, A, N, I, O, P, R, B, L, D, $, U, {
              onUpdate: V,
              toggleClass: Y,
              id: q,
              onToggle: H,
              onRefresh: W,
              scrub: K,
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
              pinSpacer: be,
              containerAnimation: ke,
              fastScrollEnd: _e,
              preventOverlaps: Te
            } = e,
            Ce = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? Q : J,
            Me = !K && 0 !== K,
            Ee = Z(e.scroller || ce),
            Ae = ie.core.getCache(Ee),
            Ne = rt(Ee),
            Ie = "fixed" === ("pinType" in e ? e.pinType : X(Ee, "pinType") || Ne && "fixed"),
            Oe = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            Pe = Me && e.toggleActions.split(" "),
            Re = "markers" in e ? e.markers : zt.markers,
            Be = Ne ? 0 : parseFloat(Et(Ee)["border" + Ce.p2 + St]) || 0,
            Le = this,
            Fe = e.onRefreshInit && (() => e.onRefreshInit(Le)),
            Ye = ((e, t, {
              d: a,
              d2: r,
              a: s
            }) => (s = X(e, "getBoundingClientRect")) ? () => s()[a] : () => (t ? st(r) : e["client" + r]) || 0)(Ee, Ne, Ce),
            Ge = ((e, t) => !t || ~z.indexOf(e) ? nt(e) : () => va)(Ee, Ne),
            Qe = 0,
            Je = 0,
            tt = 0,
            at = ee(Ee, Ce);
          var it;
          if (Le._startClamp = Le._endClamp = !1, Le._dir = Ce, se *= 45, Le.scroller = Ee, Le.scroll = ke ? ke.time.bind(ke) : at, n = at(), Le.vars = e, t = t || e.animation, "refreshPriority" in e && (Se = 1, -9999 === e.refreshPriority && (Ue = Le)), Ae.tweenScroll = Ae.tweenScroll || {
              top: _a(Ee, J),
              left: _a(Ee, Q)
            }, Le.tweenTo = a = Ae.tweenScroll[Ce.p], Le.scrubDuration = e => {
              P = dt(e) && e, P ? O ? O.duration(e) : O = ie.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: P,
                paused: !0,
                onComplete: () => ne && ne(Le)
              }) : (O && O.progress(1).kill(), O = 0)
            }, t && (t.vars.lazy = !1, t._initted && !Le.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), Le.animation = t.pause(), t.scrollTrigger = Le, Le.scrubDuration(K), N = 0, q || (q = t.vars.id)), he && (ut(he) && !he.push || (he = {
              snapTo: he
            }), "scrollBehavior" in ge.style && ie.set(Ne ? [ge, ue] : Ee, {
              scrollBehavior: "auto"
            }), F.forEach((e => ct(e) && e.target === (Ne ? de.scrollingElement || ue : Ee) && (e.smooth = !1))), s = ct(he.snapTo) ? he.snapTo : "labels" === he.snapTo ? (e => t => ie.utils.snap(Ot(e), t))(t) : "labelsDirectional" === he.snapTo ? (it = t, (e, t) => Pt(Ot(it))(e, t.direction)) : !1 !== he.directional ? (e, t) => Pt(he.snapTo)(e, Ve() - Je < 500 ? 0 : t.direction) : ie.utils.snap(he.snapTo), R = he.duration || {
              min: .1,
              max: 2
            }, R = ut(R) ? fe(R.min, R.max) : fe(R, R), B = ie.delayedCall(he.delay || P / 2 || .1, (() => {
              let e = at(),
                r = Ve() - Je < 500,
                n = a.tween;
              if (!(r || Math.abs(Le.getVelocity()) < 10) || n || ye || Qe === e) Le.isActive && Qe !== e && B.restart(!0);
              else {
                let o = (e - i) / m,
                  c = t && !Me ? t.totalProgress() : o,
                  d = r ? 0 : (c - I) / (Ve() - ve) * 1e3 || 0,
                  u = ie.utils.clamp(-o, 1 - o, pt(d / 2) * d / .185),
                  g = o + (!1 === he.inertia ? 0 : u),
                  h = fe(0, 1, s(g, Le)),
                  p = Math.round(i + h * m),
                  {
                    onStart: f,
                    onInterrupt: v,
                    onComplete: b
                  } = he;
                if (e <= l && e >= i && p !== e) {
                  if (n && !n._initted && n.data <= pt(p - e)) return;
                  !1 === he.inertia && (u = h - o), a(p, {
                    duration: R(pt(.185 * Math.max(pt(g - c), pt(h - c)) / d / .05 || 0)),
                    ease: he.ease || "power3",
                    data: pt(p - e),
                    onInterrupt: () => B.restart(!0) && v && v(Le),
                    onComplete: () => {
                      Le.update(), Qe = at(), N = I = t && !Me ? t.totalProgress() : Le.progress, oe && oe(Le), b && b(Le)
                    }
                  }, e, u * m, p - e - u * m), f && f(Le, a.tween)
                }
              }
            })).pause()), q && (qt[q] = Le), G = Le.trigger = Z(G || !0 !== te && te), U = G && G._gsap && G._gsap.stRevert, U && (U = U(Le)), te = !0 === te ? G : Z(te), lt(Y) && (Y = {
              targets: G,
              className: Y
            }), te && (!1 === ae || ae === Ct || (ae = !(!ae && te.parentNode && te.parentNode.style && "flex" === Et(te.parentNode).display) && Tt), Le.pin = te, r = ie.core.getCache(te), r.spacer ? f = r.pinState : (be && (be = Z(be), be && !be.nodeType && (be = be.current || be.nativeElement), r.spacerIsNative = !!be, be && (r.spacerState = fa(be))), r.spacer = x = be || de.createElement("div"), x.classList.add("pin-spacer"), q && x.classList.add("pin-spacer-" + q), r.pinState = f = fa(te)), !1 !== e.force3D && ie.set(te, {
              force3D: !0
            }), Le.spacer = x = r.spacer, A = Et(te), C = A[ae + Ce.os2], k = ie.getProperty(te), w = ie.quickSetter(te, Ce.a, Mt), ha(te, x, A), b = fa(te)), Re) {
            h = ut(Re) ? At(Re, Ft) : Ft, u = Xt("scroller-start", q, Ee, Ce, h, 0), g = Xt("scroller-end", q, Ee, Ce, h, 0, u), y = u["offset" + Ce.op.d2];
            let e = Z(X(Ee, "content") || Ee);
            c = this.markerStart = Xt("start", q, e, Ce, h, y, 0, ke), d = this.markerEnd = Xt("end", q, e, Ce, h, y, 0, ke), ke && ($ = ie.quickSetter([c, d], Ce.a, Mt)), Ie || z.length && !0 === X(Ee, "fixedMarkers") || ((e => {
              let t = Et(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(Ne ? ge : Ee), ie.set([u, g], {
              force3D: !0
            }), j = ie.quickSetter(u, Ce.a, Mt), E = ie.quickSetter(g, Ce.a, Mt))
          }
          if (ke) {
            let e = ke.vars.onUpdate,
              t = ke.vars.onUpdateParams;
            ke.eventCallback("onUpdate", (() => {
              Le.update(0, 0, 1), e && e.apply(ke, t || [])
            }))
          }
          if (Le.previous = () => Yt[Yt.indexOf(Le) - 1], Le.next = () => Yt[Yt.indexOf(Le) + 1], Le.revert = (e, a) => {
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
              })(te, x, f) : ha(te, x, Et(te), S)), r || Le.update(r), xe = s, Le.isReverted = r)
            }, Le.refresh = (r, s, h, y) => {
              if ((xe || !Le.enabled) && !s) return;
              if (te && r && qe) return void Bt(Ta, "scrollEnd", Zt);
              !ze && Fe && Fe(Le), xe = Le, a.tween && !h && (a.tween.kill(), a.tween = 0), O && O.pause(), re && t && t.revert({
                kill: !1
              }).invalidate(), Le.isReverted || Le.revert(!0, !0), Le._subPinOffset = !1;
              let w, C, j, E, A, N, I, P, R, F, z, $, U, X = Ye(),
                V = Ge(),
                Y = ke ? ke.duration() : ot(Ee, Ce),
                q = m <= .01,
                H = 0,
                K = y || 0,
                se = ut(h) ? h.end : e.end,
                ne = e.endTrigger || G,
                oe = ut(h) ? h.start : e.start || (0 !== e.start && G ? te ? "0 0" : "0 100%" : 0),
                le = Le.pinnedContainer = e.pinnedContainer && Z(e.pinnedContainer, Le),
                ce = G && Math.max(0, Yt.indexOf(Le)) || 0,
                he = ce;
              for (Re && ut(h) && ($ = ie.getProperty(u, Ce.p), U = ie.getProperty(g, Ce.p)); he--;) N = Yt[he], N.end || N.refresh(0, 1) || (xe = Le), I = N.pin, !I || I !== G && I !== te && I !== le || N.isReverted || (F || (F = []), F.unshift(N), N.revert(!0, !0)), N !== Yt[he] && (ce--, he--);
              for (ct(oe) && (oe = oe(Le)), oe = We(oe, "start", Le), i = ba(oe, G, X, Ce, at(), c, u, Le, V, Be, Ie, Y, ke, Le._startClamp && "_startClamp") || (te ? -.001 : 0), ct(se) && (se = se(Le)), lt(se) && !se.indexOf("+=") && (~se.indexOf(" ") ? se = (lt(oe) ? oe.split(" ")[0] : "") + se : (H = Ut(se.substr(2), X), se = lt(oe) ? oe : (ke ? ie.utils.mapRange(0, ke.duration(), ke.scrollTrigger.start, ke.scrollTrigger.end, i) : i) + H, ne = G)), se = We(se, "end", Le), l = Math.max(i, ba(se || (ne ? "100% 0" : Y), ne, X, Ce, at() + H, d, g, Le, V, Be, Ie, Y, ke, Le._endClamp && "_endClamp")) || -.001, H = 0, he = ce; he--;) N = Yt[he], I = N.pin, I && N.start - N._pinPush <= i && !ke && N.end > 0 && (w = N.end - (Le._startClamp ? Math.max(0, N.start) : N.start), (I === G && N.start - N._pinPush < i || I === le) && isNaN(oe) && (H += w * (1 - N.progress)), I === te && (K += w));
              if (i += H, l += H, Le._startClamp && (Le._startClamp += H), Le._endClamp && !ze && (Le._endClamp = l || -.001, l = Math.min(l, ot(Ee, Ce))), m = l - i || (i -= .01) && .001, q && (tt = ie.utils.clamp(0, 1, ie.utils.normalize(i, l, L))), Le._pinPush = K, c && H && (w = {}, w[Ce.a] = "+=" + H, le && (w[Ce.p] = "-=" + at()), ie.set([c, d], w)), te) w = Et(te), E = Ce === J, j = at(), _ = parseFloat(k(Ce.a)) + K, !Y && l > 1 && (z = (Ne ? de.scrollingElement || ue : Ee).style, z = {
                style: z,
                value: z["overflow" + Ce.a.toUpperCase()]
              }, Ne && "scroll" !== Et(ge)["overflow" + Ce.a.toUpperCase()] && (z.style["overflow" + Ce.a.toUpperCase()] = "scroll")), ha(te, x, w), b = fa(te), C = Nt(te, !0), P = Ie && ee(Ee, E ? Q : J)(), ae && (S = [ae + Ce.os2, m + K + Mt], S.t = x, he = ae === Tt ? It(te, Ce) + m + K : 0, he && S.push(Ce.d, he + Mt), ma(S), le && Yt.forEach((e => {
                e.pin === le && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), Ie && at(L)), Ie && (A = {
                top: C.top + (E ? j - i : P) + Mt,
                left: C.left + (E ? P : j - i) + Mt,
                boxSizing: "border-box",
                position: "fixed"
              }, A[bt] = A["max" + St] = Math.ceil(C.width) + Mt, A[xt] = A["max" + jt] = Math.ceil(C.height) + Mt, A[Ct] = A[Ct + wt] = A[Ct + yt] = A[Ct + _t] = A[Ct + kt] = "0", A[Tt] = w[Tt], A[Tt + wt] = w[Tt + wt], A[Tt + yt] = w[Tt + yt], A[Tt + _t] = w[Tt + _t], A[Tt + kt] = w[Tt + kt], v = ((e, t, a) => {
                let r, s = [],
                  n = e.length,
                  o = a ? 8 : 0;
                for (; o < n; o += 2) r = e[o], s.push(r, r in t ? t[r] : e[o + 1]);
                return s.t = e.t, s
              })(f, A, pe), ze && at(0)), t ? (R = t._initted, je(1), t.render(t.duration(), !0, !0), T = k(Ce.a) - _ + m + K, M = Math.abs(m - T) > 1, Ie && M && v.splice(v.length - 2, 2), t.render(0, !0, !0), R || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), je(0)) : T = m, z && (z.value ? z.style["overflow" + Ce.a.toUpperCase()] = z.value : z.style.removeProperty("overflow-" + Ce.a));
              else if (G && at() && !ke)
                for (C = G.parentNode; C && C !== ge;) C._pinOffset && (i -= C._pinOffset, l -= C._pinOffset), C = C.parentNode;
              F && F.forEach((e => e.revert(!1, !0))), Le.start = i, Le.end = l, n = o = ze ? L : at(), ke || ze || (n < L && at(L), Le.scroll.rec = 0), Le.revert(!1, !0), Je = Ve(), B && (Qe = -1, B.restart(!0)), xe = 0, t && Me && (t._initted || D) && t.progress() !== D && t.progress(D || 0, !0).render(t.time(), !0, !0), (q || tt !== Le.progress || ke) && (t && !Me && t.totalProgress(ke && i < -.001 && !tt ? ie.utils.normalize(i, l, 0) : tt, !0), Le.progress = q || (n - i) / m === tt ? 0 : tt), te && ae && (x._pinOffset = Math.round(Le.progress * T)), O && O.invalidate(), isNaN($) || ($ -= ie.getProperty(u, Ce.p), U -= ie.getProperty(g, Ce.p), wa(u, Ce, $), wa(c, Ce, $ - (y || 0)), wa(g, Ce, U), wa(d, Ce, U - (y || 0))), q && !ze && Le.update(), !W || ze || p || (p = !0, W(Le), p = !1)
            }, Le.getVelocity = () => (at() - o) / (Ve() - ve) * 1e3 || 0, Le.endAnimation = () => {
              gt(Le.callbackAnimation), t && (O ? O.progress(1) : t.paused() ? Me || gt(t, Le.direction < 0, 1) : gt(t, t.reversed()))
            }, Le.labelToScroll = e => t && t.labels && (i || Le.refresh() || i) + t.labels[e] / t.duration() * m || 0, Le.getTrailing = e => {
              let t = Yt.indexOf(Le),
                a = Le.direction > 0 ? Yt.slice(0, t).reverse() : Yt.slice(t + 1);
              return (lt(e) ? a.filter((t => t.vars.preventOverlaps === e)) : a).filter((e => Le.direction > 0 ? e.end <= i : e.start >= l))
            }, Le.update = (e, r, s) => {
              if (ke && !s && !e) return;
              let c, d, g, h, p, f, y, k, S = !0 === ze ? L : Le.scroll(),
                A = e ? 0 : (S - i) / m,
                P = A < 0 ? 0 : A > 1 ? 1 : A || 0,
                R = Le.progress;
              if (r && (o = n, n = ke ? at() : S, he && (I = N, N = t && !Me ? t.totalProgress() : P)), se && !P && te && !xe && !Xe && qe && i < S + (S - o) / (Ve() - ve) * se && (P = 1e-4), P !== R && Le.enabled) {
                if (c = Le.isActive = !!P && P < 1, d = !!R && R < 1, f = c !== d, p = f || !!P != !!R, Le.direction = P > R ? 1 : -1, Le.progress = P, p && !xe && (g = P && !R ? 0 : 1 === P ? 1 : 1 === R ? 2 : 3, Me && (h = !f && "none" !== Pe[g + 1] && Pe[g + 1] || Pe[g], k = t && ("complete" === h || "reset" === h || h in t))), Te && (f || k) && (k || K || !t) && (ct(Te) ? Te(Le) : Le.getTrailing(Te).forEach((e => e.endAnimation()))), Me || (!O || xe || Xe ? t && t.totalProgress(P, !(!xe || !Je && !e)) : (O._dp._time - O._start !== O._time && O.render(O._dp._time - O._start), O.resetTo ? O.resetTo("totalProgress", P, t._tTime / t._tDur) : (O.vars.totalProgress = P, O.invalidate().restart()))), te)
                  if (e && ae && (x.style[ae + Ce.os2] = C), Ie) {
                    if (p) {
                      if (y = !e && P > R && l + 1 > S && S + 1 >= ot(Ee, Ce), pe)
                        if (e || !c && !y) ya(te, x);
                        else {
                          let e = Nt(te, !0),
                            t = S - i;
                          ya(te, ge, e.top + (Ce === J ? t : 0) + Mt, e.left + (Ce === J ? 0 : t) + Mt)
                        } ma(c || y ? v : b), M && P < 1 && c || w(_ + (1 !== P || y ? 0 : T))
                    }
                  } else w(et(_ + T * P));
                he && !a.tween && !xe && !Xe && B.restart(!0), Y && (f || le && P && (P < 1 || !De)) && me(Y.targets).forEach((e => e.classList[c || le ? "add" : "remove"](Y.className))), V && !Me && !e && V(Le), p && !xe ? (Me && (k && ("complete" === h ? t.pause().totalProgress(1) : "reset" === h ? t.restart(!0).pause() : "restart" === h ? t.restart(!0) : t[h]()), V && V(Le)), !f && De || (H && f && ht(Le, H), Oe[g] && ht(Le, Oe[g]), le && (1 === P ? Le.kill(!1, 1) : Oe[g] = 0), f || (g = 1 === P ? 1 : 3, Oe[g] && ht(Le, Oe[g]))), _e && !c && Math.abs(Le.getVelocity()) > (dt(_e) ? _e : 2500) && (gt(Le.callbackAnimation), O ? O.progress(1) : gt(t, "reverse" === h ? 1 : !P, 1))) : Me && V && !xe && V(Le)
              }
              if (E) {
                let e = ke ? S / ke.duration() * (ke._caScrollDist || 0) : S;
                j(e + (u._isFlipped ? 1 : 0)), E(e)
              }
              $ && $(-S / ke.duration() * (ke._caScrollDist || 0))
            }, Le.enable = (e, t) => {
              Le.enabled || (Le.enabled = !0, Bt(Ee, "resize", Gt), Ne || Bt(Ee, "scroll", Wt), Fe && Bt(Ta, "refreshInit", Fe), !1 !== e && (Le.progress = tt = 0, n = o = Qe = at()), !1 !== t && Le.refresh())
            }, Le.getTween = e => e && a ? a.tween : O, Le.setPositions = (e, t, a, r) => {
              if (ke) {
                let a = ke.scrollTrigger,
                  r = ke.duration(),
                  s = a.end - a.start;
                e = a.start + s * e / r, t = a.start + s * t / r
              }
              Le.refresh(!1, !1, {
                start: Ke(e, a && !!Le._startClamp),
                end: Ke(t, a && !!Le._endClamp)
              }, r), Le.update()
            }, Le.adjustPinSpacing = e => {
              if (S && e) {
                let t = S.indexOf(Ce.d) + 1;
                S[t] = parseFloat(S[t]) + e + Mt, S[1] = parseFloat(S[1]) + e + Mt, ma(S)
              }
            }, Le.disable = (e, t) => {
              if (Le.enabled && (!1 !== e && Le.revert(!0, !0), Le.enabled = Le.isActive = !1, t || O && O.pause(), L = 0, r && (r.uncache = 1), Fe && Lt(Ta, "refreshInit", Fe), B && (B.pause(), a.tween && a.tween.kill() && (a.tween = 0)), !Ne)) {
                let e = Yt.length;
                for (; e--;)
                  if (Yt[e].scroller === Ee && Yt[e] !== Le) return;
                Lt(Ee, "resize", Gt), Ne || Lt(Ee, "scroll", Wt)
              }
            }, Le.kill = (a, s) => {
              Le.disable(a, s), O && !s && O.kill(), q && delete qt[q];
              let n = Yt.indexOf(Le);
              n >= 0 && Yt.splice(n, 1), n === we && ca > 0 && we--, n = 0, Yt.forEach((e => e.scroller === Le.scroller && (n = 1))), n || ze || (Le.scroll.rec = 0), t && (t.scrollTrigger = null, a && t.revert({
                kill: !1
              }), s || t.kill()), c && [c, d, u, g].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Ue === Le && (Ue = 0), te && (r && (r.uncache = 1), n = 0, Yt.forEach((e => e.pin === te && n++)), n || (r.spacer = 0)), e.onKill && e.onKill(Le)
            }, Yt.push(Le), Le.enable(!1, !1), U && U(Le), t && t.add && !m) {
            let e = Le.update;
            Le.update = () => {
              Le.update = e, i || l || Le.refresh()
            }, ie.delayedCall(.01, Le.update), m = .01, i = l = 0
          } else Le.refresh();
          te && (() => {
            if ($e !== na) {
              let e = $e = na;
              requestAnimationFrame((() => e === na && ia(!0)))
            }
          })()
        }
        static register(e) {
          return le || (ie = e || at(), tt() && window.document && Ta.enable(), le = He), le
        }
        static defaults(e) {
          if (e)
            for (let t in e) zt[t] = e[t];
          return zt
        }
        static disable(e, t) {
          He = 0, Yt.forEach((a => a[t ? "kill" : "disable"](e))), Lt(ce, "wheel", Wt), Lt(de, "scroll", Wt), clearInterval(be), Lt(de, "touchcancel", Ze), Lt(ge, "touchstart", Ze), Rt(Lt, de, "pointerdown,touchstart,mousedown", Qe), Rt(Lt, de, "pointerup,touchend,mouseup", Je), pe.kill(), it(Lt);
          for (let e = 0; e < F.length; e += 3) Dt(Lt, F[e], F[e + 1]), Dt(Lt, F[e], F[e + 2])
        }
        static enable() {
          if (ce = window, de = document, ue = de.documentElement, ge = de.body, ie && (me = ie.utils.toArray, fe = ie.utils.clamp, Pe = ie.core.context || Ze, je = ie.core.suppressOverwrites || Ze, Re = ce.history.scrollRestoration || "auto", la = ce.pageYOffset, ie.core.globals("ScrollTrigger", Ta), ge)) {
            He = 1, Be = document.createElement("div"), Be.style.height = "100vh", Be.style.position = "absolute", oa(), Ge(), oe.register(ie), Ta.isTouch = oe.isTouch, Oe = oe.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Bt(ce, "wheel", Wt), he = [ce, de, ue, ge], ie.matchMedia ? (Ta.matchMedia = e => {
              let t, a = ie.matchMedia();
              for (t in e) a.add(t, e[t]);
              return a
            }, ie.addEventListener("matchMediaInit", (() => ra())), ie.addEventListener("matchMediaRevert", (() => aa())), ie.addEventListener("matchMedia", (() => {
              ia(0, 1), ea("matchMedia")
            })), ie.matchMedia("(orientation: portrait)", (() => (Kt(), Kt)))) : console.warn("Requires GSAP 3.11.0 or later"), Kt(), Bt(de, "scroll", Wt);
            let e, t, a = ge.style,
              r = a.borderTopStyle,
              s = ie.core.Animation.prototype;
            for (s.revert || Object.defineProperty(s, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), a.borderTopStyle = "solid", e = Nt(ge), J.m = Math.round(e.top + J.sc()) || 0, Q.m = Math.round(e.left + Q.sc()) || 0, r ? a.borderTopStyle = r : a.removeProperty("border-top-style"), be = setInterval(Ht, 250), ie.delayedCall(.5, (() => Xe = 0)), Bt(de, "touchcancel", Ze), Bt(ge, "touchstart", Ze), Rt(Bt, de, "pointerdown,touchstart,mousedown", Qe), Rt(Bt, de, "pointerup,touchend,mouseup", Je), ke = ie.utils.checkPrefix("transform"), ga.push(ke), le = Ve(), pe = ie.delayedCall(.2, ia).pause(), Ce = [de, "visibilitychange", () => {
                let e = ce.innerWidth,
                  t = ce.innerHeight;
                de.hidden ? (_e = e, Te = t) : _e === e && Te === t || Gt()
              }, de, "DOMContentLoaded", ia, ce, "load", ia, ce, "resize", Gt], it(Bt), Yt.forEach((e => e.enable(0, 1))), t = 0; t < F.length; t += 3) Dt(Lt, F[t], F[t + 1]), Dt(Lt, F[t], F[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (De = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(be) || (be = t) && setInterval(Ht, t), "ignoreMobileResize" in e && (Ae = 1 === Ta.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (it(Lt) || it(Bt, e.autoRefreshEvents || "none"), Me = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let a = Z(e),
            r = F.indexOf(a),
            s = rt(a);
          ~r && F.splice(r, s ? 6 : 2), t && (s ? z.unshift(ce, t, ge, t, ue, t) : z.unshift(a, t))
        }
        static clearMatchMedia(e) {
          Yt.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, a) {
          let r = (lt(e) ? Z(e) : e).getBoundingClientRect(),
            s = r[a ? bt : xt] * t || 0;
          return a ? r.right - s > 0 && r.left + s < ce.innerWidth : r.bottom - s > 0 && r.top + s < ce.innerHeight
        }
        static positionInViewport(e, t, a) {
          lt(e) && (e = Z(e));
          let r = e.getBoundingClientRect(),
            s = r[a ? bt : xt],
            n = null == t ? s / 2 : t in $t ? $t[t] * s : ~t.indexOf("%") ? parseFloat(t) * s / 100 : parseFloat(t) || 0;
          return a ? (r.left + n) / ce.innerWidth : (r.top + n) / ce.innerHeight
        }
        static killAll(e) {
          if (Yt.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
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
      })) : ta, Ta.revert = (e, t) => ra(!e, t), Ta.create = (e, t) => new Ta(e, t), Ta.refresh = e => e ? Gt() : (le || Ta.register()) && ia(!0), Ta.update = e => ++F.cache && da(!0 === e ? 2 : 0), Ta.clearScrollMemory = sa, Ta.maxScroll = (e, t) => ot(e, t ? Q : J), Ta.getScrollFunc = (e, t) => ee(Z(e), t ? Q : J), Ta.getById = e => qt[e], Ta.getAll = () => Yt.filter((e => "ScrollSmoother" !== e.vars.id)), Ta.isScrolling = () => !!qe, Ta.snapDirectional = Pt, Ta.addEventListener = (e, t) => {
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
      let Ca, Sa = (e, t, a, r) => (t > r ? e(r) : t < 0 && e(0), a > r ? (r - t) / (a - t) : a < 0 ? t / (t - a) : 1),
        ja = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (oe.isTouch ? " pinch-zoom" : "") : "none", e === ue && ja(ge, t)
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
            o = Ve();
          if (!n._isScrollT || o - n._isScrollT > 2e3) {
            for (; s && s !== ge && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !Ma[(r = Et(s)).overflowY] && !Ma[r.overflowX]);) s = s.parentNode;
            n._isScroll = s && s !== t && !rt(s) && (Ma[(r = Et(s)).overflowY] || Ma[r.overflowX]), n._isScrollT = o
          }(n._isScroll || "x" === a) && (e.stopPropagation(), e._gsapAllow = !0)
        },
        Aa = (e, t, a, r) => oe.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: r = r && Ea,
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: () => a && Bt(de, oe.eventTypes[0], Ia, !1, !0),
          onDisable: () => Lt(de, oe.eventTypes[0], Ia, !0)
        }),
        Na = /(input|label|select|textarea)/i,
        Ia = e => {
          let t = Na.test(e.target.tagName);
          (t || Ca) && (e._gsapAllow = !0, Ca = t)
        };
      Ta.sort = e => Yt.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), Ta.observe = e => new oe(e), Ta.normalizeScroll = e => {
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
            f = Oe && (e.content && Z(e.content) || m && !1 !== e.content && !m.smooth() && m.content()),
            v = ee(h, J),
            b = ee(h, Q),
            x = 1,
            y = (oe.isTouch && ce.visualViewport ? ce.visualViewport.scale * ce.visualViewport.width : ce.outerWidth) / ce.innerWidth,
            k = 0,
            w = ct(d) ? () => d(t) : () => d || 2.8,
            _ = Aa(h, e.type, !0, u),
            T = () => s = !1,
            C = Ze,
            S = Ze,
            j = () => {
              a = ot(h, J), S = fe(Oe ? 1 : 0, a), c && (C = fe(0, ot(h, Q))), r = na
            },
            M = () => {
              f._gsap.y = et(parseFloat(f._gsap.y) + v.offset) + "px", f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(f._gsap.y) + ", 0, 1)", v.offset = v.cacheID = 0
            },
            E = () => {
              j(), n.isActive() && n.vars.scrollY > a && (v() > a ? n.progress(1) && v(a) : n.resetTo("scrollY", a))
            };
          return f && ie.set(f, {
            y: "+=0"
          }), e.ignoreCheck = e => Oe && "touchmove" === e.type && (() => {
            if (s) {
              requestAnimationFrame(T);
              let e = et(t.deltaY / 2),
                a = S(v.v - e);
              if (f && a !== v.v + v.offset) {
                v.offset = a - v.v;
                let e = et((parseFloat(f && f._gsap.y) || 0) - v.offset);
                f.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", f._gsap.y = e + "px", v.cacheID = F.cache, da()
              }
              return !0
            }
            v.offset && M(), s = !0
          })() || x > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            s = !1;
            let e = x;
            x = et((ce.visualViewport && ce.visualViewport.scale || 1) / y), n.pause(), e !== x && ja(h, x > 1.01 || !c && "x"), o = b(), i = v(), j(), r = na
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (v.offset && M(), t) {
              F.cache++;
              let t, r, s = w();
              c && (t = b(), r = t + .05 * s * -e.velocityX / .227, s *= Sa(b, t, r, ot(h, Q)), n.vars.scrollX = C(r)), t = v(), r = t + .05 * s * -e.velocityY / .227, s *= Sa(v, t, r, ot(h, J)), n.vars.scrollY = S(r), n.invalidate().duration(s).play(.01), (Oe && n.vars.scrollY >= a || t >= a - 1) && ie.to({}, {
                onUpdate: E,
                duration: s
              })
            } else l.restart(!0);
            g && g(e)
          }, e.onWheel = () => {
            n._ts && n.pause(), Ve() - k > 1e3 && (r = 0, k = Ve())
          }, e.onChange = (e, t, a, s, n) => {
            if (na !== r && j(), t && c && b(C(s[2] === t ? o + (e.startX - e.x) : b() + t - s[1])), a) {
              v.offset && M();
              let t = n[2] === a,
                r = t ? i + e.startY - e.y : v() + a - n[1],
                s = S(r);
              t && r !== s && (i += s - r), v(s)
            }(a || t) && da()
          }, e.onEnable = () => {
            ja(h, !c && "x"), Ta.addEventListener("refresh", E), Bt(ce, "resize", E), v.smooth && (v.target.style.scrollBehavior = "auto", v.smooth = b.smooth = !1), _.enable()
          }, e.onDisable = () => {
            ja(h, !0), Lt(ce, "resize", E), Ta.removeEventListener("refresh", E), _.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new oe(e), t.iOS = Oe, Oe && !v() && v(1), Oe && ie.ticker.add(Ze), l = t._dc, n = ie.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: ka(v, v(), (() => n.pause()))
            },
            onUpdate: da,
            onComplete: l.vars.onComplete
          }), t
        })(e);
        return Ee && Ee.target === t.target && Ee.kill(), rt(t.target) && (Ee = t), t
      }, Ta.core = {
        _getVelocityProp: te,
        _inputObserver: Aa,
        _scrollers: F,
        _proxies: z,
        bridge: {
          ss: () => {
            qe || ea("scrollStart"), qe = Ve()
          },
          ref: () => xe
        }
      }, at() && ie.registerPlugin(Ta);
      let Oa, Pa, Ra, Ba, La, Da, Fa, za, $a, Ua, Xa, Va, Ya, qa, Ha, Wa, Ka = () => "undefined" != typeof window,
        Ga = () => Oa || Ka() && (Oa = window.gsap) && Oa.registerPlugin && Oa,
        Qa = e => Ua.maxScroll(e || Ra);
      class Ja {
        constructor(e) {
          Pa || Ja.register(Oa) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, Xa && Xa.kill(), Xa = this, Ha(this);
          let t, a, r, s, n, o, i, l, c, d, u, g, h, p, m, {
              smoothTouch: f,
              onUpdate: v,
              onStop: b,
              smooth: x,
              onFocusIn: y,
              normalizeScroll: k,
              wholePixels: w
            } = e,
            _ = this,
            T = e.effectsPrefix || "",
            C = Ua.getScrollFunc(Ra),
            S = 1 === Ua.isTouch ? !0 === f ? .8 : parseFloat(f) || 0 : 0 === x || !1 === x ? 0 : parseFloat(x) || .8,
            j = S && +e.speed || 1,
            M = 0,
            E = 0,
            A = 1,
            N = Ya(0),
            I = () => N.update(-M),
            O = {
              y: 0
            },
            P = () => t.style.overflow = "visible",
            R = e => {
              e.update();
              let t = e.getTween();
              t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), p = !1, e.animation.progress(e.progress, !0)
            },
            B = (e, a) => {
              (e !== M && !d || a) && (w && (e = Math.round(e)), S && (t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", t._gsap.y = e + "px"), E = e - M, M = e, Ua.isUpdating || Ja.isRefreshing || Ua.update())
            },
            L = function(e) {
              return arguments.length ? (e < 0 && (e = 0), O.y = -e, p = !0, d ? M = -e : B(-e), Ua.isRefreshing ? s.update() : C(e / j), this) : -M
            },
            D = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!Ua.isRefreshing) {
                let e = Qa(a) * j;
                e < -M && L(e), Wa.restart(!0)
              }
            })),
            F = e => {
              a.scrollTop = 0, e.target.contains && e.target.contains(a) || y && !1 === y(this, e) || (Ua.isInViewport(e.target) || e.target === m || this.scrollTo(e.target, !1, "center center"), m = e.target)
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
            $ = (e, t, a) => {
              a || (e.pins.length = e.pins.offset = 0);
              let r, s, n, o, i, l, c, d, u = e.pins,
                g = e.markers;
              for (c = 0; c < t.length; c++)
                if (d = t[c], e.trigger && d.trigger && e !== d && (d.trigger === e.trigger || d.pinnedContainer === e.trigger || e.trigger.contains(d.trigger)) && (i = d._startNative || d._startClamp || d.start, l = d._endNative || d._endClamp || d.end, n = z(i, e), o = d.pin && l > 0 ? n + (l - i) : z(l, e), d.setPositions(n, o, !0, (d._startClamp ? Math.max(0, n) : n) - i), d.markerStart && g.push(Oa.quickSetter([d.markerStart, d.markerEnd], "y", "px")), d.pin && d.end > 0 && !a)) {
                  if (r = d.end - d.start, s = e._startClamp && d.start < 0, s) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void $(e, t);
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
            U = (e, t) => {
              n.forEach((a => $(a, e, t)))
            },
            X = () => {
              P(), requestAnimationFrame(P), n && (Ua.getAll().forEach((e => {
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
              })), U(Ua.sort())), N.reset()
            },
            V = () => Ua.addEventListener("refresh", X),
            Y = () => n && n.forEach((e => e.vars.onRefresh(e))),
            q = () => (n && n.forEach((e => e.vars.onRefreshInit(e))), Y),
            H = (e, t, a, r) => () => {
              let s = "function" == typeof t ? t(a, r) : t;
              s || 0 === s || (s = r.getAttribute("data-" + T + e) || ("speed" === e ? 1 : 0)), r.setAttribute("data-" + T + e, s);
              let n = "clamp(" === (s + "").substr(0, 6);
              return {
                clamp: n,
                value: n ? s.substr(6, s.length - 7) : s
              }
            },
            W = (e, t, r, s, o) => {
              o = ("function" == typeof o ? o(s, e) : o) || 0;
              let i, l, c, d, u, g, h = H("speed", t, s, e),
                p = H("lag", r, s, e),
                m = Oa.getProperty(e, "y"),
                f = e._gsap,
                v = [],
                b = () => {
                  t = h(), r = parseFloat(p().value), i = parseFloat(t.value) || 1, c = "auto" === t.value, u = c || l && l._startClamp && l.start <= 0 || v.offset ? 0 : l && l._endClamp && l.end === Qa() ? 1 : .5, d && d.kill(), d = r && Oa.to(e, {
                    ease: Va,
                    overwrite: !1,
                    y: "+=0",
                    duration: r
                  }), l && (l.ratio = i, l.autoSpeed = c)
                },
                x = () => {
                  f.y = m + "px", f.renderTransform(1), b()
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
                    })(e, $a(0, 1, -t.start / (t.end - t.start)));
                    k = a.change, g = a.offset
                  } else g = v.offset || 0, k = (t.end - t.start - g) * (1 - i);
                  v.forEach((e => k -= e.distance * (1 - i))), t.offset = k || .001, t.vars.onUpdate(t), d && d.progress(1)
                };
              return b(), (1 !== i || c || d) && (l = Ua.create({
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
                    n = v.length,
                    o = 0;
                  if (e.offset) {
                    if (n) {
                      for (a = -M, r = e.end; n--;) {
                        if (t = v[n], t.trig.isActive || a >= t.start && a <= t.end) return void(d && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), d.resetTo("y", parseFloat(f.y), -E, !0), A && d.progress(1)));
                        a > t.end && (o += t.distance), r -= t.distance
                      }
                      s = m + o + k * ((Oa.utils.clamp(e.start, e.end, a) - e.start - o) / (r - e.start) - u)
                    }
                    y.length && !c && y.forEach((e => e(s - o))), i = s + g, s = Math.round(1e5 * i) / 1e5 || 0, d ? (d.resetTo("y", s, -E, !0), A && d.progress(1)) : (f.y = s + "px", f.renderTransform(1))
                  }
                  var i
                }
              }), w(l), Oa.core.getCache(l.trigger).stRevert = q, l.startY = m, l.pins = v, l.markers = y, l.ratio = i, l.autoSpeed = c, e.style.willChange = "transform"), l
            };

          function K() {
            return r = t.clientHeight, t.style.overflow = "visible", Da.style.height = Ra.innerHeight + (r - Ra.innerHeight) / j + "px", r - Ra.innerHeight
          }
          V(), Ua.addEventListener("killAll", V), Oa.delayedCall(.5, (() => A = 0)), this.scrollTop = L, this.scrollTo = (e, t, a) => {
            let r = Oa.utils.clamp(0, Qa(), isNaN(e) ? this.offset(e, a) : +e);
            t ? d ? Oa.to(this, {
              duration: S,
              scrollTop: r,
              overwrite: "auto",
              ease: Va
            }) : C(r) : L(r)
          }, this.offset = (e, t) => {
            let a, r = (e = za(e)[0]).style.cssText,
              s = Ua.create({
                trigger: e,
                start: t || "top top"
              });
            return n && (A ? Ua.refresh() : U([s], !0)), a = s.start / j, s.kill(!1), e.style.cssText = r, Oa.core.getCache(e).uncache = 1, a
          }, this.content = function(e) {
            if (arguments.length) {
              let a = za(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || Da.children[0];
              return a !== t && (t = a, c = t.getAttribute("style") || "", D && D.observe(t), Oa.set(t, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), S || Oa.set(t, {
                clearProps: "transform"
              })), this
            }
            return t
          }, this.wrapper = function(e) {
            return arguments.length ? (a = za(e || "#smooth-wrapper")[0] || (e => {
              let t = Ba.querySelector(".ScrollSmoother-wrapper");
              return t || (t = Ba.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            })(t), l = a.getAttribute("style") || "", K(), Oa.set(a, S ? {
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
            for (a = 0; a < e.length; a++) r = W(e[a], s, o, a, i), r && l.push(r);
            return n.push(...l), l
          }, this.sections = (e, t) => {
            if (o || (o = []), !e) return o.slice(0);
            let a = za(e).map((e => Ua.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: t => {
                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
              }
            })));
            return t && t.add ? o.push(...a) : o = a.slice(0), a
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => B(e || 0 === e ? e : M), this.getVelocity = () => N.getVelocity(-M), Ua.scrollerProxy(a, {
            scrollTop: L,
            scrollHeight: () => K() && Da.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!S,
            content: t,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: Ra.innerWidth,
              height: Ra.innerHeight
            })
          }), Ua.defaults({
            scroller: a
          });
          let G = Ua.getAll().filter((e => e.scroller === Ra || e.scroller === a));
          G.forEach((e => e.revert(!0, !0))), s = Ua.create({
            animation: Oa.fromTo(O, {
              y: 0
            }, {
              y: () => -K(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = p;
                  e && (R(s), O.y = M), B(O.y, e), I(), v && !d && v(_)
                }
              }
            }),
            onRefreshInit: e => {
              if (Ja.isRefreshing) return;
              if (Ja.isRefreshing = !0, n) {
                let e = Ua.getAll().filter((e => !!e.pin));
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
              h = t && t._end > t._dp._time, g = M, O.y = 0, S && (1 === Ua.isTouch && (a.style.position = "absolute"), a.scrollTop = 0, 1 === Ua.isTouch && (a.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, K() / j), h || R(e), O.y = -C() * j, B(O.y), A || e.animation.progress(Oa.utils.clamp(0, 1, g / j / -e.end)), h && (e.progress -= .001, e.update()), Ja.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: Ra,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => K() / j,
            onScrubComplete: () => {
              N.reset(), b && b(this)
            },
            scrub: S || !0
          }), this.smooth = function(t) {
            return arguments.length && (S = t || 0, j = S && +e.speed || 1, s.scrubDuration(t)), s.getTween() ? s.getTween().duration() : 0
          }, s.getTween() && (s.getTween().vars.ease = e.ease || Va), this.scrollTrigger = s, e.effects && this.effects(!0 === e.effects ? "[data-" + T + "speed], [data-" + T + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), G.forEach((e => {
            e.vars.scroller = a, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, t) {
            return arguments.length ? (!!d !== e && (e ? (s.getTween() && s.getTween().pause(), C(-M / j), N.reset(), u = Ua.normalizeScroll(), u && u.disable(), d = Ua.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => L(-M)
            }), d.nested = qa(La, "wheel,touch,scroll", !0, !1 !== t)) : (d.nested.kill(), d.kill(), d = 0, u && u.enable(), s.progress = (-M / j - s.start) / (s.end - s.start), R(s))), this) : !!d
          }, this.kill = this.revert = () => {
            this.paused(!1), R(s), s.kill();
            let e = (n || []).concat(o || []),
              r = e.length;
            for (; r--;) e[r].kill();
            Ua.scrollerProxy(a), Ua.removeEventListener("killAll", V), Ua.removeEventListener("refresh", X), a.style.cssText = l, t.style.cssText = c;
            let d = Ua.defaults({});
            d && d.scroller === a && Ua.defaults({
              scroller: Ra
            }), this.normalizer && Ua.normalizeScroll(!1), clearInterval(i), Xa = null, D && D.disconnect(), Da.style.removeProperty("height"), Ra.removeEventListener("focusin", F)
          }, this.refresh = (e, t) => s.refresh(e, t), k && (this.normalizer = Ua.normalizeScroll(!0 === k ? {
            debounce: !0,
            content: !S && t
          } : k)), Ua.config(e), "overscrollBehavior" in Ra.getComputedStyle(Da) && Oa.set([Da, La], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in Ra.getComputedStyle(Da) && Oa.set([Da, La], {
            scrollBehavior: "auto"
          }), Ra.addEventListener("focusin", F), i = setInterval(I, 250), "loading" === Ba.readyState || requestAnimationFrame((() => Ua.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return Pa || (Oa = e || Ga(), Ka() && window.document && (Ra = window, Ba = document, La = Ba.documentElement, Da = Ba.body), Oa && (za = Oa.utils.toArray, $a = Oa.utils.clamp, Va = Oa.parseEase("expo"), Ha = Oa.core.context || function() {}, Ua = Oa.core.globals().ScrollTrigger, Oa.core.globals("ScrollSmoother", Ja), Da && Ua && (Wa = Oa.delayedCall(.2, (() => Ua.isRefreshing || Xa && Xa.refresh())).pause(), Fa = [Ra, Ba, La, Da], Ya = Ua.core._getVelocityProp, qa = Ua.core._inputObserver, Ja.refresh = Ua.refresh, Pa = 1))), Pa
        }
      }
      Ja.version = "3.12.2", Ja.create = e => Xa && e && Xa.content() === za(e.content)[0] ? Xa : new Ja(e), Ja.get = () => Xa, Ga() && Oa.registerPlugin(Ja);
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
      const vr = e => {
        const t = m(),
          a = (e, r) => r?.requiresAuth && !t?.nickname ? e : [...e, {
            ...r,
            ...r.children ? {
              children: r.children.reduce(a, [])
            } : []
          }];
        return (0, i.useMemo)((() => e.reduce(a, [])), [e, t?.nickname])
      };
      var br = a(20270),
        xr = a(52612);
      const yr = (e, t, a, r) => ({
          event: e || "nav_click",
          link_url: t,
          text: a,
          element_placement: `Global Nav > ${r}`?.toLowerCase()
        }),
        kr = () => {
          const e = (0, u.A)(),
            [t] = (0, r.getLocale)(),
            a = m();
          return s => {
            if (!s.path) return s.domain;
            const n = [
                ["username", a?.nickname]
              ],
              o = ((e, t) => t.reduce(((e, t) => {
                let [a, r] = t;
                return e.replaceAll(`{${a}}`, r)
              }), e))(s.path, n),
              i = "www" === s.domain && "www" !== e.currentSite?.site ? ((e, t) => {
                if (!t || t.iso === r.englishLocale.iso) return e;
                const a = t.subdomaincom;
                return "/" === e[0] ? a + e : `${a}/${e}`
              })(o, t) : o;
            return s.domain + i
          }
        },
        wr = "nav-internal",
        _r = "nav-external",
        Tr = "nav-dropdown",
        Cr = "nav-no-link",
        Sr = "games-menu";
      var jr = a(98753);
      const Mr = e => {
          let {
            children: t,
            location: a,
            className: o,
            isLegacy: c,
            label: d,
            type: u,
            target: g,
            gaEvent: h,
            gaText: p,
            gaBreadCrumb: m,
            dataTestId: f,
            onClick: v,
            ...b
          } = e;
          const x = (0, r.useIntl)(),
            {
              track: k
            } = (0, s.useGtmTrack)(),
            w = kr(),
            {
              dispatch: _
            } = (0, n.useRockstarEventDispatcher)(),
            T = y(),
            C = (0, i.useMemo)((() => {
              const e = {};
              return "_blank" === g && (e["aria-label"] = x.formatMessage(jr.A.nav_opens_in_new_window, {
                text: d
              }), e.rel = "noopener"), e
            }), [d, g]);
          if (!a && u === Cr && f) {
            const e = () => {
              k(yr(h, "", p, m)), _(f)
            };
            return (0, l.jsx)("button", {
              type: "button",
              className: o,
              onClick: () => e(),
              "data-testid": f,
              ...b,
              ...C,
              children: t
            })
          }
          if (!a) return null;
          const S = w(a),
            j = Boolean(u === _r || c || document.documentElement.classList.contains("legacyPage"));
          return (0, l.jsx)(xr.A, {
            className: o,
            target: g,
            to: S,
            onClick: () => (v?.(), void k(yr(h, S.toString(), p, m))),
            onNavigate: T,
            reloadDocument: j,
            "data-testid": f,
            ...b,
            ...C,
            children: t
          })
        },
        Er = {
          callToAction: "rockstargames-modules-core-headera2806f1c9a39c71b6464ba985cd86770",
          highlight: "rockstargames-modules-core-headerd468a02858ad85269a394854bce5e316"
        },
        Ar = e => {
          let {
            children: t,
            dataTestId: a,
            location: r,
            variant: s,
            gaEvent: n,
            gaText: o,
            target: i,
            onClick: c
          } = e;
          return (0, l.jsx)("div", {
            className: Er.callToActionContainer,
            children: (0, l.jsx)(Mr, {
              className: [Er.callToAction, s ? Er[s] : ""].join(" "),
              dataTestId: a,
              location: r,
              gaEvent: n,
              gaText: o,
              gaBreadCrumb: o,
              onClick: c,
              target: i,
              children: t
            })
          })
        };
      var Nr = a(63582);
      const Ir = {
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
        Or = {
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
          selected: "rockstargames-modules-core-headere9b4458db1906df382fe2764193ecf4e",
          pillButton: "rockstargames-modules-core-headere6d22c6c22db5ddfb42f7a3b1859024f"
        },
        zr = e => {
          let {
            children: t,
            selected: a,
            ...r
          } = e;
          return (0, l.jsx)("button", {
            type: "button",
            className: [Fr.pillButton, a ? Fr.selected : ""].join(" "),
            ...r,
            children: t
          })
        };
      var $r = a(75971);
      const Ur = {
          pillBtn: "rockstargames-modules-core-headeredb6b291e3eb91be1dbdae8e82ccb513",
          selected: "rockstargames-modules-core-headerdc9de673c49d945b85a20bf5e859500a",
          subMenu: "rockstargames-modules-core-headerff97518f96615604850597c8a2505fc7",
          fadeIn: "rockstargames-modules-core-headerae886af8e4ee1f3fa82f58141f31dccb"
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
        Vr = e => {
          let {
            openerRef: t,
            isOpen: a,
            isMobile: r,
            children: s
          } = e;
          const [n, o] = (0, i.useState)(null), {
            styles: c,
            attributes: d,
            forceUpdate: u
          } = (0, $r.usePopper)(t, n, {
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
                altAxis: !r
              }
            }]
          });
          return (0, i.useEffect)((() => {
            Promise.resolve().then(u)
          }), [t, a, r]), (0, l.jsx)(Nr.motion.div, {
            initial: "exit",
            animate: a ? "enter" : "exit",
            transition: Ir.quickFade,
            variants: Xr,
            className: [Ur.subMenu].join(" "),
            style: {
              ...c.popper
            },
            ref: o,
            ...d.popper,
            children: s
          })
        },
        Yr = e => {
          let {
            children: t,
            ...a
          } = e;
          return (0, l.jsx)("button", {
            type: "button",
            className: "rockstargames-modules-core-headere641b0068c27f964bcaf3e3e342fcb13",
            ...a,
            children: t
          })
        },
        qr = {
          backgroundElevation: "rockstargames-modules-core-headerddaf896d4deca83f6d4a43dde2449ed6",
          backgroundOverlay: "rockstargames-modules-core-headere39052a22cbfec8136c7f57d9e910820",
          backgroundVisible: "rockstargames-modules-core-headerdd3818dff0e6f7bd2777880270cbdabb"
        },
        Hr = e => {
          let {
            children: t,
            isOpen: a,
            onClose: r,
            visible: s
          } = e;
          return a ? (0, l.jsxs)("div", {
            className: [qr.backgroundElevation].join(" "),
            onClick: r,
            children: [(0, l.jsx)("div", {
              className: [qr.backgroundOverlay, s ? qr.backgroundVisible : ""].join(" ")
            }), t]
          }) : null
        },
        Wr = e => {
          let {
            target: t,
            selected: a,
            selectedTarget: s,
            onClick: n,
            isMobile: o,
            ...c
          } = e;
          const d = (0, r.useIntl)(),
            [u, g] = (0, i.useState)(!1),
            [h, p] = (0, i.useState)(null);
          return t.type === Tr ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              ref: p,
              children: (0, l.jsxs)(zr, {
                "aria-label": d.formatMessage(jr.A.search_target_aria_label, {
                  target: s && t?.targets?.indexOf(s) >= 0 ? s.text : t.text
                }),
                selected: a,
                onClick: () => g(!u),
                ...c,
                children: [s && t?.targets?.indexOf(s) >= 0 ? s.text : t.text, (0, l.jsx)("img", {
                  src: Br,
                  alt: ""
                })]
              }, t.gaText)
            }), (0, l.jsx)(Hr, {
              isOpen: u,
              onClose: () => g(!1),
              children: (0, l.jsx)(Vr, {
                isOpen: u,
                openerRef: h,
                isMobile: o,
                children: t.targets?.map((e => (0, l.jsx)(Yr, {
                  "aria-label": d.formatMessage(jr.A.search_target_aria_label, {
                    target: e.text
                  }),
                  onClick: () => n(e),
                  children: e.text
                }, e.gaText)))
              })
            })]
          }) : (0, l.jsx)(zr, {
            "aria-label": d.formatMessage(jr.A.search_target_aria_label, {
              target: t.text
            }),
            selected: a,
            onClick: () => n(t),
            ...c,
            children: t.text
          }, t.tab)
        },
        Kr = {
          secondaryNavigationSlide: "rockstargames-modules-core-headerbf9f9a25ea6f9aa44b4b2ab52512e335",
          secondaryNavigationOverlay: "rockstargames-modules-core-headerbbd3cc8e4460000b11ca8ef9b0eee345",
          open: "rockstargames-modules-core-headerb5c4f53ad11e76bbf9b1324c766560ad"
        },
        Gr = e => {
          let {
            children: t,
            isOpen: a,
            onMouseClick: r,
            onEscapeKey: s,
            onMouseAway: n,
            style: o
          } = e;
          const c = a ? [Kr.open] : [],
            d = e => {
              "Escape" === e.key && s?.()
            };
          return (0, i.useEffect)((() => (a ? window.addEventListener("keyup", d) : window.removeEventListener("keyup", d), () => window.removeEventListener("keyup", d))), [d, a]), a ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)("div", {
              className: [Kr.secondaryNavigationOverlay, ...c].join(" "),
              onClick: r,
              onMouseEnter: n,
              style: o
            }), t && (0, l.jsx)("div", {
              className: [Kr.secondaryNavigationSlide, ...c].join(" "),
              children: t
            })]
          }) : null
        },
        Qr = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: s,
            setIsSearchOpen: n,
            setSearchQuery: o,
            isSearchOpen: c,
            searchQuery: d,
            selectedTarget: u,
            selectedTargetIndex: g,
            isSearchPage: h,
            searchError: p,
            maxSearchLength: m
          } = e;
          const f = (0, r.useIntl)(),
            b = v(),
            x = (0, i.useRef)(null),
            y = () => {
              n(), h || o(""), x?.current?.focus()
            },
            k = () => {
              h || n()
            };
          return (0, i.useEffect)((() => {
            c ? x?.current?.focus() : x?.current?.blur()
          }), [c]), (0, l.jsxs)("div", {
            children: [(0, l.jsx)("button", {
              className: "rockstargames-modules-core-headerb14c9a28c3b2b3a58eb8a465f480fd60",
              type: "button",
              onClick: y,
              "data-testid": "searchToggle",
              children: (0, l.jsx)("img", {
                src: Pr,
                alt: f.formatMessage(c ? jr.A.search_close_button : jr.A.search_open_button)
              })
            }), (0, l.jsx)(Nr.AnimatePresence, {
              children: c && (0, l.jsxs)("div", {
                children: [(0, l.jsx)(Gr, {
                  isOpen: !h,
                  onEscapeKey: k,
                  onMouseClick: k
                }), (0, l.jsxs)(Nr.motion.div, {
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
                    transition: Ir.springClose
                  },
                  transition: Ir.springOpen,
                  "data-testid": "searchBar",
                  children: [(0, l.jsxs)(Nr.motion.div, {
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
                    children: [(0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headerdeb8b97cd5fbb70486ad3c025601d43d",
                      children: (0, l.jsx)("button", {
                        type: "button",
                        onClick: t,
                        children: (0, l.jsx)("img", {
                          src: Pr,
                          alt: f.formatMessage(jr.A.search_action)
                        })
                      })
                    }), (0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headercc9aee7e7293a60ac3b1a08f7a83598f",
                      children: (0, l.jsx)("input", {
                        type: "textfield",
                        value: d,
                        onChange: e => o(e.target.value),
                        onKeyUp: a,
                        placeholder: f.formatMessage(jr.A.search_placeholder),
                        ref: x,
                        enterKeyHint: "search",
                        maxLength: m
                      })
                    }), (0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headerf1bedf210587b5186fca4d243f05a1aa",
                      children: b.targets.map(((e, t) => (0, l.jsx)(Wr, {
                        target: e,
                        onClick: e => s(e, t),
                        selected: g === t,
                        selectedTarget: u
                      }, e.tab)))
                    }), !h && (0, l.jsx)("div", {
                      className: "rockstargames-modules-core-headerea7dbbd5e60585f29ab22be3d18988fd",
                      children: (0, l.jsx)("button", {
                        type: "button",
                        onClick: y,
                        children: (0, l.jsx)("img", {
                          src: Rr,
                          alt: f.formatMessage(jr.A.search_close_button)
                        })
                      })
                    })]
                  }), p && (0, l.jsx)("div", {
                    className: "rockstargames-modules-core-headerc3e3363c5e7b53755b9c9afcc262ccb6",
                    "aria-live": "polite",
                    children: p
                  })]
                })]
              })
            })]
          })
        },
        Jr = {
          search: "rockstargames-modules-core-headere758ad80645c67f7566e2db7f0ba98b1",
          targetsOuter: "rockstargames-modules-core-headerb24efff03c7b1e1e459fde14955d14cd",
          hasScroll: "rockstargames-modules-core-headere3fe68b0501338fe7b3cbed75b1773c8",
          targets: "rockstargames-modules-core-headerc11370021ff4c9655878886a3a69c746",
          errorMessage: "rockstargames-modules-core-headerbf16fe605728a09b0a5c269d57371bfa"
        },
        Zr = e => {
          let {
            handleSearch: t,
            handleSearchKeypress: a,
            handleSearchTargetSelect: s,
            setIsSearchOpen: n,
            setSearchQuery: o,
            isSearchOpen: c,
            searchQuery: d,
            selectedTarget: u,
            selectedTargetIndex: g,
            isSearchPage: h,
            searchError: p,
            maxSearchLength: m
          } = e;
          const f = (0, r.useIntl)(),
            b = v(),
            x = (0, i.useRef)(null),
            [y, k] = (0, i.useState)(!1);
          return (0, i.useEffect)((() => {
            let e, t, a = !1;
            const r = r => {
                x && x.current && (r.preventDefault(), a = !0, e = r.pageX - x.current.offsetLeft, t = x.current.scrollLeft)
              },
              s = () => {
                a = !1
              },
              n = r => {
                if (a && (r.preventDefault(), x && x.current)) {
                  const a = r.pageX - x.current.offsetLeft - e;
                  x.current.scrollLeft = t - a
                }
              },
              o = () => {
                if (x && x.current) {
                  const e = x.current.scrollLeft;
                  k(e > 20)
                }
              };
            if (x && x.current) {
              const e = x.current;
              e.addEventListener("mousedown", r), e.addEventListener("mouseup", s), e.addEventListener("mouseleave", s), e.addEventListener("mousemove", n), e.addEventListener("scroll", o)
            }
            return () => {
              x && x.current && (x.current.removeEventListener("mousedown", r), x.current.removeEventListener("mouseup", s), x.current.removeEventListener("mouseleave", s), x.current.removeEventListener("mousemove", n), x.current.removeEventListener("scroll", o))
            }
          })), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)(Nr.motion.div, {
              className: Jr.search,
              variants: Or,
              transition: Ir.staggerFade,
              "data-testid": "searchBar",
              children: [(0, l.jsx)("button", {
                type: "button",
                onClick: () => c ? t() : n(!0),
                children: (0, l.jsx)("img", {
                  src: Pr,
                  alt: f.formatMessage(jr.A.search_action)
                })
              }), (0, l.jsx)("input", {
                type: "text",
                value: d,
                onChange: e => o(e.target.value),
                onFocus: () => n(!0),
                onKeyUp: a,
                placeholder: f.formatMessage(jr.A.search_placeholder),
                enterKeyHint: "search",
                maxLength: m
              }), c && !h && (0, l.jsx)("button", {
                type: "button",
                onClick: () => n(!1),
                children: (0, l.jsx)("img", {
                  src: Rr,
                  alt: f.formatMessage(jr.A.search_close_button)
                })
              })]
            }), c && (0, l.jsxs)("div", {
              className: [Jr.targetsOuter, y ? Jr.hasScroll : ""].join(" "),
              children: [(0, l.jsx)("div", {
                className: Jr.targets,
                ref: x,
                children: b.targets.map(((e, t) => (0, l.jsx)(Wr, {
                  target: e,
                  selected: g === t,
                  selectedTarget: u,
                  onClick: e => s(e, t),
                  isMobile: !0
                }, e.tab)))
              }), p && (0, l.jsx)("div", {
                className: Jr.errorMessage,
                "aria-live": "polite",
                children: p
              })]
            })]
          })
        };
      var es = a(16188),
        ts = a.n(es);
      const as = "global-nav-search",
        rs = e => {
          let {
            ...t
          } = e;
          const {
            windowWidth: a
          } = (0, n.useWindowResize)(), {
            pathname: s,
            search: o
          } = x(), c = v(), [d, u] = (0, i.useState)(""), [g, h] = f(), [p, m] = (0, i.useState)(0), [k, w] = (0, i.useState)(c.targets[0]), [_, T] = (0, i.useState)(""), C = (() => {
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
            isSearchPage: S,
            forceSearch: j
          } = b(), M = (0, r.useIntl)(), E = a < 1024, A = S && j || g === as, N = e => {
            if ("" === d) return !1;
            e.length > k.searchOptions.max && u(e.substring(0, k.searchOptions.max));
            const t = k.searchOptions.validationFunction?.(e);
            return e.split(/\s+/).every((e => e.length < k.searchOptions.min)) ? (T(M.formatMessage(jr.A.nav_search_error_too_short, {
              count: k.searchOptions.min
            })), !1) : t ? (T(M.formatMessage(jr.A.nav_search_error_invalid_chars, {
              invalidChars: [...new Set(t)].join(", ")
            })), !1) : (T(""), !0)
          }, I = () => {
            N(d) && C(d, k.location)
          }, O = (e, t) => {
            let a;
            const r = new URLSearchParams(e);
            return new URLSearchParams(t).forEach(((e, t) => {
              const s = r.get(t);
              "{query}" === e && s ? (a = !0, u(s), N(s)) : a = s === e && !1 !== a
            })), a
          }, P = (e, t) => {
            if (!t) return !1;
            const a = e.split(/[/?]+/),
              r = t.split(/[/?]+/);
            if (r.every(((e, t) => e === a[t] || "{term}" === e || "" === e))) {
              const e = r.findIndex((e => "{term}" === e));
              return e && u(a[e]), !0
            }
            return !1
          };
          (0, i.useEffect)((() => {
            S || (m(0), w(c.targets[0]));
            const e = c.targets.findIndex((e => {
              if ("" === e.type && e.location) {
                if (e.location.path && s.startsWith(e.location.path) && O(o, e.location.params)) return w(e), !0;
                if (!e.location.params && P(s, e.location.path)) return w(e), !0
              }
              if ("nav-dropdown" === e.type) {
                const t = e.targets?.findIndex((e => {
                  if ("" === e.type) {
                    if (e.location.path && s.startsWith(e.location.path) && O(o, e.location.params)) return w(e), !0;
                    if (P(s, e.location.path)) return w(e), !0
                  }
                  return !1
                }));
                return !ts().isNil(t) && t >= 0
              }
            }));
            m(e)
          }), [s, o, S]);
          const R = {
            handleSearch: I,
            handleSearchKeypress: e => {
              T(""), "Enter" === e.key && I()
            },
            handleSearchTargetSelect: (e, t) => {
              w(e), m(t), N(d) && C(d, e.location)
            },
            setIsSearchOpen: () => h(as),
            setSearchQuery: u,
            isSearchOpen: A,
            searchQuery: d,
            selectedTarget: k,
            selectedTargetIndex: p,
            isSearchPage: S,
            searchError: _,
            maxSearchLength: k.searchOptions.max
          };
          return E ? (0, l.jsx)(Zr, {
            ...R,
            ...t
          }) : (0, l.jsx)(Qr, {
            ...R
          })
        },
        ss = e => {
          let {
            cta: t,
            includeSearch: a = !0,
            isMobile: r
          } = e;
          const s = x(),
            n = y(),
            [, o] = f();
          return (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headerb5fce2c3384850553a25768f9fdbc74c",
            "data-testid": "actions",
            children: [t && (0, l.jsx)("div", {
              children: (0, l.jsx)(Ar, {
                variant: t.variant,
                location: t.location,
                dataTestId: t.dataTestId,
                gaEvent: t.ga,
                gaText: t.text,
                target: t.target,
                children: t.text
              })
            }), a && (0, l.jsx)(rs, {}), (0, l.jsxs)("div", {
              children: [(0, l.jsx)(br.MenuButton, {
                setOtherHeaderDropdowns: o
              }), !r && (0, l.jsx)(br.Menu, {
                location: s,
                onNavigate: n
              })]
            })]
          })
        },
        ns = {
          navigationItem: "rockstargames-modules-core-headerb5b521a5a634b6de434dbc5ee81a8558",
          active: "rockstargames-modules-core-headere6b2077f3b2a8ad9b1402ed6e0c25f95"
        },
        os = e => e.replace(/\?.*$/, ""),
        is = (e, t) => e === t,
        ls = e => {
          const {
            pathname: t,
            hostname: a
          } = x();
          return e && e.length ? e.map((e => {
            let {
              domain: r,
              path: s,
              additionalPathMatches: n
            } = e;
            if (r !== a && "" !== r) return null;
            const o = os(s || ""),
              i = is(o, os(t));
            let l;
            return n && (l = is(n, os(t))), Boolean(i || l)
          })) : []
        },
        cs = e => {
          let {
            text: t,
            type: a,
            location: r,
            isLegacy: s,
            gaText: n,
            gaBreadCrumb: o,
            dataTestId: i,
            target: c,
            ...d
          } = e;
          const [u] = ls(r ? [{
            domain: r?.domain,
            path: r?.path,
            end: "nav-internal" === a,
            additionalPathMatches: r?.additionalPathMatches
          }] : []), g = a === _r;
          return (0, l.jsxs)(Mr, {
            className: [ns.navigationItem, u ? ns.active : ""].join(" "),
            location: r,
            isLegacy: s,
            type: a,
            target: c,
            gaText: n,
            gaBreadCrumb: o,
            dataTestId: i,
            label: t,
            ...d,
            children: [t, g && (0, l.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        ds = {
          navigationDropdownButton: "rockstargames-modules-core-headerce93536b39a91e106f15d15434be038b",
          open: "rockstargames-modules-core-headere981dceef9b773c1a38070cf53b88f91",
          active: "rockstargames-modules-core-headere0aebf0d85eeab7cf262811136363f68"
        },
        us = e => {
          let {
            text: t,
            isOpen: a,
            onClick: r,
            buttonRef: n,
            navChildren: o,
            gaText: c,
            gaBreadCrumb: d,
            dataTestId: u
          } = e;
          const {
            track: g
          } = (0, s.useGtmTrack)(), h = (0, i.useCallback)((() => {
            g(yr(void 0, "", c, d)), r()
          }), [c, d, a, r]), p = (0, i.useMemo)((() => {
            if (!o) return;
            const e = (t, a) => {
              let r;
              return r = a.children ? a.children.reduce(e, []) : a?.location ? [a.location] : [], [...t, ...r]
            };
            return o.reduce(e, [])
          }), [o]), m = ls(p), f = m?.some(Boolean);
          return (0, l.jsx)("div", {
            className: ds.navigationDropdown,
            ref: n,
            children: (0, l.jsxs)("button", {
              className: [ds.navigationDropdownButton, f ? ds.active : "", a ? ds.open : ""].join(" "),
              type: "button",
              "data-testid": u || "navDropdown",
              onClick: h,
              children: [t, (0, l.jsx)("img", {
                src: Br,
                alt: ""
              })]
            })
          })
        };
      var gs = a(10670);
      const hs = e => {
          let {
            title: t,
            titleSlug: a,
            location: r,
            gaText: s,
            gaBreadCrumb: n,
            dataTestId: o,
            ...i
          } = e;
          return (0, l.jsx)("div", {
            className: "rockstargames-modules-core-headerb770338a477efa1c6a4016a5742219e7",
            children: (0, l.jsx)(Mr, {
              location: r,
              gaText: s,
              gaBreadCrumb: n,
              dataTestId: o,
              ...i,
              children: (0, l.jsx)(gs.A, {
                title: t,
                titleSlug: a
              })
            })
          }, t)
        },
        ps = (e, t) => {
          const a = t.currentSite?.site === u.C.www ? "" : `https://${t.sites[u.C.www]}.rockstargames.com`;
          return {
            viewAllLocation: {
              domain: a,
              path: "/games"
            },
            games: [{
              titleSlug: "VI",
              text: e.formatMessage(jr.A.games_menu_vi),
              gaText: "Grand Theft Auto VI",
              location: {
                domain: a,
                path: "/VI"
              },
              isLegacy: !0,
              dataTestId: "VI"
            }, {
              titleSlug: "gta-v",
              text: e.formatMessage(jr.A.games_menu_gta_v),
              gaText: "Grand Theft Auto V",
              location: {
                domain: a,
                path: "/gta-v"
              },
              dataTestId: "gtav"
            }, {
              titleSlug: "gta-online",
              text: e.formatMessage(jr.A.games_menu_gta_online),
              gaText: "Grand Theft Auto Online",
              location: {
                domain: a,
                path: "/gta-online"
              },
              dataTestId: "gtao"
            }, {
              titleSlug: "reddeadredemption2",
              text: e.formatMessage(jr.A.games_menu_rdr_2),
              gaText: "Red Dead Redemption 2",
              location: {
                domain: a,
                path: "/reddeadredemption2"
              },
              dataTestId: "rdr2"
            }, {
              titleSlug: "reddeadredemption",
              text: e.formatMessage(jr.A.games_menu_rdr),
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
          const e = (0, r.useIntl)(),
            t = p(),
            {
              viewAllLocation: a,
              games: s
            } = ps(e, t);
          return (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headerc44e1e859a7c882c94e4ab6659292df1",
            "data-testid": "gamesMenu",
            children: [(0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headere2bbd547f2ba115133620c57b8a6ad31",
              children: [(0, l.jsx)("div", {
                children: (0, l.jsx)("h2", {
                  className: "rockstargames-modules-core-headerdf107c2f64cafbee316afb5bf5d6c994",
                  children: e.formatMessage(jr.A.games_menu_featured)
                })
              }), (0, l.jsx)("div", {
                children: (0, l.jsxs)(Mr, {
                  className: "rockstargames-modules-core-headera9c20e94d8cd00159778729b0c3eb095",
                  gaText: jr.A.games_menu_view_all.defaultMessage,
                  gaBreadCrumb: `Games > ${jr.A.games_menu_view_all.defaultMessage}`,
                  location: a,
                  children: [e.formatMessage(jr.A.games_menu_view_all), (0, l.jsx)("img", {
                    src: Dr,
                    alt: e.formatMessage(jr.A.nav_view_all_games)
                  })]
                })
              })]
            }), (0, l.jsx)("div", {
              className: "rockstargames-modules-core-headerca5189f6c9b4274473d2cf9a8ace7bb0",
              children: s.map((e => (0, l.jsx)(hs, {
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
          subMenuDropdownContainer: "rockstargames-modules-core-headerbe98900eb9861a339ca26cd5c23795c2",
          nested: "rockstargames-modules-core-headerb83b9fbed333ffb6cc89eb40ce1f258e",
          subMenuDropdownButton: "rockstargames-modules-core-headera438fff028577732bd2c3f50e1d57fe8",
          open: "rockstargames-modules-core-headerb232c7352afb473e20d474f81db87a11",
          openChevron: "rockstargames-modules-core-headerb78556b7ba42b398bc55bf4720f9eee5",
          subMenuDropdownItems: "rockstargames-modules-core-headerf54f4c00ab7b5e6ab645951063e44b9e"
        },
        vs = {
          subMenuItem: "rockstargames-modules-core-headere29f912b302184c16c17015ad9b9afe5",
          nested: "rockstargames-modules-core-headera81cbcdbdd397a2a286c23049697987b"
        },
        bs = {
          navigationLink: "rockstargames-modules-core-headerd3c735402bcee1a2312337cfab447641",
          active: "rockstargames-modules-core-headerab8c1da57859a4347bb7cd9722832fb9"
        },
        xs = e => [bs.navigationLink, e ? bs.active : ""].join(" "),
        ys = e => {
          let {
            text: t,
            type: a,
            location: r,
            className: s,
            isLegacy: n,
            target: o,
            nested: i,
            gaText: c,
            gaBreadCrumb: d,
            dataTestId: u,
            ...g
          } = e;
          const h = a === _r,
            p = r ? [{
              ...r,
              end: a === wr
            }] : [],
            [m] = ls(p);
          return (0, l.jsxs)(Mr, {
            className: [xs(Boolean(m)), vs.subMenuItem, i ? vs.nested : "", s].join(" "),
            location: r,
            isLegacy: n,
            type: a,
            target: o,
            gaText: c,
            gaBreadCrumb: d,
            dataTestId: u,
            label: t,
            "data-ui-name": "sub-menu-item",
            ...g,
            children: [t, h && (0, l.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        ks = "nav-dropdown",
        ws = e => {
          let {
            text: t,
            navChildren: a,
            gaText: r,
            gaBreadCrumb: n,
            nested: o,
            dataTestId: c,
            subMenuId: d,
            toggleOpen: u,
            isOpen: g,
            ...h
          } = e;
          const [p] = f(), {
            track: m
          } = (0, s.useGtmTrack)(), v = (0, i.useRef)(null), [b, x] = (0, i.useState)(null);
          (0, i.useEffect)((() => {
            null === p && u(null)
          }), [p]);
          const y = e => {
              m(yr(void 0, "", r, n)), u(e ? d : null)
            },
            k = e => {
              "ArrowLeft" === e.code && (y(!1), v?.current?.focus())
            };
          return (0, l.jsxs)("div", {
            className: [fs.subMenuDropdownContainer, o ? fs.nested : ""].join(" "),
            ...h,
            "data-ui-name": "sub-menu-item",
            children: [(0, l.jsxs)("button", {
              type: "button",
              className: [fs.subMenuDropdownButton, o ? fs.nested : "", g ? fs.open : ""].join(" "),
              onClick: () => y(!g),
              onKeyUp: e => {
                "Enter" === e.code && y(!0), "ArrowRight" === e.code && y(!0), "ArrowLeft" === e.code && y(!1)
              },
              ref: v,
              "data-testid": c,
              children: [t, (0, l.jsx)("img", {
                src: Br,
                className: fs.openChevron,
                alt: ""
              })]
            }), (0, l.jsx)(Nr.AnimatePresence, {
              children: g && a && (0, l.jsx)(Nr.motion.div, {
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
                transition: Ir.springOpen,
                children: a.map((e => e.type === ks ? (0, l.jsx)(ws, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.gaText,
                  gaBreadCrumb: `${n} > ${e.gaText}`,
                  nested: !0,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: b === `desktop-submenu-${e.gaText}`,
                  toggleOpen: x
                }, e.gaText) : (0, l.jsx)(ys, {
                  text: e.text,
                  type: e.type,
                  location: e.location,
                  gaText: e.gaText,
                  gaBreadCrumb: `${n} > ${e.gaText}`,
                  onKeyUp: k,
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
              ...Ir.springOpen
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
              ...Ir.springClose
            }
          }
        },
        Cs = e => {
          let {
            text: t,
            gaText: a,
            type: r,
            location: s,
            navChildren: n,
            isLegacy: o,
            target: c,
            gaBreadCrumb: d,
            navKey: u,
            isHidden: g,
            dataTestId: h,
            ...p
          } = e;
          const [m, v] = (0, i.useState)(null), b = x(), [y, k] = f(), [w, _] = (0, i.useState)(null), T = y === u, C = {
            ...T ? {
              visibility: "visible",
              display: "block"
            } : {
              visibility: "hidden",
              display: "none"
            }
          };
          (0, i.useEffect)((() => {
            k(null)
          }), [b.pathname, b.key]);
          const S = d ? `${d} > ${a}` : a ?? t;
          return r === Tr ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(us, {
              text: t,
              gaText: a,
              gaBreadCrumb: S,
              onClick: () => k(u),
              isOpen: T,
              buttonRef: g ? void 0 : v,
              navChildren: n,
              dataTestId: h,
              ...p
            }), !g && (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(Gr, {
                isOpen: T,
                onMouseClick: () => k(null),
                onEscapeKey: () => k(null)
              }), (0, l.jsx)(Vr, {
                isOpen: T,
                openerRef: m,
                children: n?.map((e => e.type === Tr ? (0, l.jsx)(_s, {
                  text: e.text,
                  navChildren: e.children,
                  gaText: e.text,
                  gaBreadCrumb: `${S} > ${e.gaText}`,
                  dataTestId: e.dataTestId,
                  subMenuId: `desktop-submenu-${e.gaText}`,
                  isOpen: w === `desktop-submenu-${e.gaText}`,
                  toggleOpen: _
                }, `desktop-submenu-${e.text}`) : (0, l.jsx)(ys, {
                  location: e.location,
                  text: e.text,
                  type: e.type,
                  isLegacy: e.isLegacy,
                  target: e.target,
                  gaText: e.gaText,
                  gaBreadCrumb: `${S} > ${e.gaText}`,
                  dataTestId: e.dataTestId
                }, e.text)))
              })]
            })]
          }) : r === Sr ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(us, {
              text: t,
              gaText: t,
              gaBreadCrumb: d ? `${d} > ${a}` : a,
              onClick: () => k(u),
              isOpen: T,
              dataTestId: h,
              ...p
            }), !g && (0, l.jsx)(Gr, {
              isOpen: !0,
              onMouseClick: () => k(null),
              onEscapeKey: () => k(null),
              style: C,
              children: (0, l.jsx)(Nr.motion.div, {
                initial: "hidden",
                animate: T ? "show" : "hidden",
                variants: Ts,
                children: (0, l.jsx)(ms, {})
              })
            })]
          }) : s || r === Cr ? (0, l.jsx)(cs, {
            location: s,
            type: r,
            text: t,
            isLegacy: o,
            target: c,
            gaText: a,
            gaBreadCrumb: d ? `${d} > ${a}` : a,
            dataTestId: h,
            ...p
          }) : null
        },
        Ss = e => {
          let {
            links: t
          } = e;
          const a = (0, r.useIntl)(),
            [s, n] = (0, i.useState)(t),
            [o, c] = (0, i.useState)([]),
            d = (0, i.useRef)(null),
            u = (0, i.useRef)(null),
            g = (0, i.useCallback)((() => {
              const e = u.current;
              if (!e || !t.length) return;
              const {
                children: a
              } = e;
              let r = 0;
              const s = Array.from(a).map(((e, t) => {
                  const a = e.getBoundingClientRect().top;
                  return 0 === t && (r = a), a
                })),
                o = s.filter((e => e !== r)).length,
                i = s.findIndex((e => e > r));
              let l = i;
              i > 0 && (l = i - 1), o ? (n(t.slice(0, l)), c(t.slice(l))) : (n(t), c([]))
            }), [t, u?.current]);
          (0, i.useEffect)((() => {
            const e = new ResizeObserver(g);
            return u?.current && e.observe(u.current), () => {
              u?.current && e.unobserve(u.current)
            }
          }), [t, u?.current]);
          const h = (0, i.useMemo)((() => (0, l.jsx)("ul", {
            ref: u,
            className: "rockstargames-modules-core-headerdc3da34691ab5b1e333e3d37858767f0",
            "aria-hidden": "true",
            children: t.map((e => (0, l.jsx)("li", {
              children: (0, l.jsx)(Cs, {
                text: e.text,
                type: e.type,
                target: e.target,
                location: e.location,
                navChildren: e.children,
                navKey: e.text,
                isHidden: !0
              })
            }, `desktop-main-dropdown-hidden-${e.text}`)))
          })), [t]);
          return 0 === t.length ? null : (0, l.jsxs)("nav", {
            className: "rockstargames-modules-core-headere92969b01c7ecc3f45b726efcdd54e73",
            children: [(0, l.jsxs)("ul", {
              ref: d,
              children: [s.map((e => (0, l.jsx)("li", {
                children: (0, l.jsx)(Cs, {
                  text: e.text,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  navKey: e.text,
                  gaText: e.gaText,
                  dataTestId: e?.dataTestId
                })
              }, e.text))), o.length > 0 && (0, l.jsx)("li", {
                children: (0, l.jsx)(Cs, {
                  text: a.formatMessage(jr.A.nav_more_dropdown),
                  type: Tr,
                  navChildren: o,
                  navKey: "more",
                  dataTestId: "navMore"
                })
              })]
            }), h]
          })
        },
        js = () => (0, l.jsx)("div", {
          className: "rockstargames-modules-core-headerda487b6de58442100c2513ac095f3c6a"
        }),
        Ms = {
          quickAccess: "rockstargames-modules-core-headerc193b3b13725142edc17bb949a13e25a",
          link: "rockstargames-modules-core-headerd2e9d0f620fddd5d3ff8e2d571bf7876"
        },
        Es = () => {
          const {
            windowWidth: e
          } = (0, n.useWindowResize)(), t = p(), a = t.currentSite?.site === u.C.www ? "" : `https://${t.sites[u.C.www]}.rockstargames.com`, s = e < 1024, o = {
            hidden: {
              y: "100%",
              transition: Ir.hamburgerClose
            },
            show: {
              y: 0,
              transition: {
                ...Ir.hamburgerOpen,
                staggerChildren: .1,
                delayChildren: .6 * Ir.hamburgerOpen.duration
              }
            }
          }, i = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: Ir.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: Ir.staggerFade
            }
          }, c = (0, r.useIntl)(), d = {
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
          return (0, l.jsxs)(Nr.motion.ul, {
            className: Ms.quickAccess,
            variants: s ? o : Or,
            initial: "hidden",
            animate: "show",
            exit: "hidden",
            transition: s ? null : Ir.quickFade,
            children: [(0, l.jsx)(Nr.motion.li, {
              variants: s ? i : null,
              children: (0, l.jsxs)(Mr, {
                location: d.home,
                className: [xs(), Ms.link].join(" "),
                gaText: jr.A.nav_quick_access_home.defaultMessage,
                gaBreadCrumb: `${g} > ${jr.A.nav_quick_access_home.defaultMessage}`,
                children: [(0, l.jsx)("img", {
                  alt: "Rockstar Games",
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7384158b621d54ecf527a5f9dee06bbc.svg"
                }), (0, l.jsx)(r.FormattedMessage, {
                  ...jr.A.nav_quick_access_home
                })]
              })
            }), (0, l.jsx)(Nr.motion.li, {
              variants: s ? i : null,
              children: (0, l.jsxs)(Mr, {
                location: d.games,
                className: [xs(), Ms.link].join(" "),
                gaText: jr.A.nav_quick_access_games.defaultMessage,
                gaBreadCrumb: `${g} > ${jr.A.nav_quick_access_games.defaultMessage}`,
                children: [(0, l.jsx)("img", {
                  alt: c.formatMessage(jr.A.nav_quick_access_games),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7da6442859b09618cfe801ea3893c3fb.svg"
                }), (0, l.jsx)(r.FormattedMessage, {
                  ...jr.A.nav_quick_access_games
                })]
              })
            }), (0, l.jsx)(Nr.motion.li, {
              variants: s ? i : null,
              children: (0, l.jsxs)(Mr, {
                location: d.newswire,
                className: [xs(), Ms.link].join(" "),
                gaText: jr.A.nav_quick_access_newswire.defaultMessage,
                gaBreadCrumb: `${g} > ${jr.A.nav_quick_access_newswire.defaultMessage}`,
                children: [(0, l.jsx)("img", {
                  alt: c.formatMessage(jr.A.nav_quick_access_newswire),
                  src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/19e49c29158167ee504ea2946045293a.svg"
                }), (0, l.jsx)(r.FormattedMessage, {
                  ...jr.A.nav_quick_access_newswire
                })]
              })
            })]
          })
        },
        As = "quick-access-menu",
        Ns = e => {
          let {
            site: t,
            brand: a,
            hideRockstarBrand: s,
            hideQuickAccess: o
          } = e;
          const c = (0, r.useIntl)(),
            {
              windowWidth: d
            } = (0, n.useWindowResize)(),
            [g, h] = (0, i.useState)(null),
            [m, v] = (0, i.useState)(null),
            [b, x] = f(),
            y = p(),
            k = b === As,
            w = o ? jr.A.nav_rockstargames_home : jr.A.nav_rockstargames_logo,
            _ = {
              domain: y.currentSite?.site === u.C.www ? "" : `https://${y.sites[u.C.www]}.rockstargames.com`,
              path: "/"
            },
            T = d < 1024,
            {
              styles: C,
              attributes: S,
              forceUpdate: j
            } = (0, $r.usePopper)(g, m, {
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
          return (0, i.useEffect)((() => {
            Promise.resolve().then(j)
          }), [g, k]), (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headercc10478657fa254e4e3449bce7c07d2d",
            children: [!s && (0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headerd6ca505694953416f6cfd919ef1904e1",
              children: [(T || o) && (0, l.jsx)(Mr, {
                location: _,
                gaText: jr.A.nav_rockstargames_home.defaultMessage,
                gaBreadCrumb: jr.A.nav_rockstargames_home.defaultMessage,
                "aria-label": c.formatMessage(w),
                children: (0, l.jsx)(js, {})
              }), !T && !o && (0, l.jsx)("button", {
                type: "button",
                className: "rockstargames-modules-core-headera8caa9bacc7f74ef9bd86698de9ff08c",
                onClick: () => x(As),
                "aria-label": c.formatMessage(w),
                ref: h,
                children: (0, l.jsx)(js, {})
              }), k && !o && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(Gr, {
                  isOpen: k,
                  onEscapeKey: () => x(null),
                  onMouseClick: () => x(null)
                }), (0, l.jsx)("div", {
                  className: "rockstargames-modules-core-headerd6bd4cea9554313294cb18d1478da1ca",
                  style: {
                    ...C.popper
                  },
                  ref: v,
                  ...S.popper,
                  children: (0, l.jsx)(Es, {})
                })]
              })]
            }), a && (0, l.jsxs)(l.Fragment, {
              children: [!s && (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headerc2788a414e74cc6eecfa96c0dc4ffac8"
              }), (0, l.jsx)("div", {
                className: "rockstargames-modules-core-headeref547bd473dcff449cc4d72700b35e3a",
                children: (0, l.jsx)("img", {
                  className: "rockstargames-modules-core-headerde8083889316bf0ef81b4dfb318e257e",
                  "data-brand": t,
                  alt: t,
                  src: a
                })
              })]
            })]
          })
        },
        Is = {
          header: "rockstargames-modules-core-headerb9149341b2c77373002bd1b206231069",
          fluid: "rockstargames-modules-core-headerec46a8779f24ebce8cd66175dfa225f8",
          fixed: "rockstargames-modules-core-headere7388ff62f2c8d2f6ecfc70019310faa",
          title: "rockstargames-modules-core-headerbc99b8e4243957f58ee357454d77a14b",
          quickAccessWrapper: "rockstargames-modules-core-headera949a457f9b9536c84492c22ad8ab91e"
        },
        Os = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const r = (0, i.useMemo)((() => {
              const {
                currentSite: e
              } = (0, u.A)();
              if (e?.site === u.C.socialClub) return {
                zIndex: 8600
              }
            }), []),
            s = vr(a.links);
          return (0, l.jsxs)("header", {
            ref: t,
            className: [Is.header, Is.fixed].join(" "),
            style: r,
            children: [(0, l.jsx)("div", {
              className: Is.title,
              children: (0, l.jsx)(Ns, {
                site: a.site,
                brand: a.brand,
                hideQuickAccess: a.hideQuickAccess || !1
              })
            }), (0, l.jsx)("div", {
              className: Is.fluid,
              children: (0, l.jsx)(Ss, {
                links: s
              })
            }), (0, l.jsx)("div", {
              className: Is.fixed,
              children: (0, l.jsx)(ss, {
                cta: a.cta,
                includeSearch: !a.hideSearch
              })
            })]
          })
        },
        Ps = {
          hamburger: "rockstargames-modules-core-headerbd1381738e15a2d5165580a4c3a46052",
          open: "rockstargames-modules-core-headerbd080f06ee310dbeb7602106d104aa1b"
        },
        Rs = e => {
          let {
            toggle: t,
            isMenuOpen: a
          } = e;
          const {
            track: r
          } = (0, s.useGtmTrack)();
          return (0, l.jsx)("div", {
            className: [Ps.hamburger, a ? Ps.open : ""].join(" "),
            children: (0, l.jsxs)("button", {
              onClick: () => {
                r({
                  event: a ? "nav_close" : "nav_open",
                  element_placement: "global nav"
                }), t?.()
              },
              title: "Open Menu",
              type: "button",
              children: [(0, l.jsx)("span", {}), (0, l.jsx)("span", {}), (0, l.jsx)("span", {})]
            })
          })
        },
        Bs = {
          header: "rockstargames-modules-core-headercbc2da9b7528573d8d3000d28f95b3e3",
          title: "rockstargames-modules-core-headerb77426232e2ade0dcb72f4d2764215e8",
          nav: "rockstargames-modules-core-headerd6629e9cc98efe8997d0620a9275c627",
          fullMenuOpen: "rockstargames-modules-core-headeraa4c60d9207e8327ebc788a3e1d56d5b",
          navContainer: "rockstargames-modules-core-headerc5b9f47efbb73b2dfd9c68013ca5bed4",
          searchOpen: "rockstargames-modules-core-headerba19960a101d69f671900a795029cf7b",
          overlay: "rockstargames-modules-core-headerff8c8312206e01ca7503d1914e699e1d"
        };
      var Ls = a(11040);
      const Ds = e => {
          let {
            text: t
          } = e;
          const {
            isMobile: a
          } = (0, n.useWindowResize)(), s = (0, r.useIntl)(), o = p(), {
            viewAllLocation: c,
            games: d
          } = ps(s, o), [u, g] = (0, i.useState)(2.5);
          return (0, i.useEffect)((() => {
            g(a ? 2.5 : 3.5)
          }), [a]), (0, l.jsxs)("div", {
            className: "rockstargames-modules-core-headerdb0658c13a70dbc7df7d1ad6cafd1d0d",
            "data-testid": "gamesMenu",
            children: [(0, l.jsxs)("div", {
              className: "rockstargames-modules-core-headerf873fce6b1f56e66224b0c0147eae764",
              children: [(0, l.jsx)("h2", {
                children: t
              }), (0, l.jsxs)(Mr, {
                gaText: jr.A.nav_view_all_games.defaultMessage,
                gaBreadCrumb: `Games > ${jr.A.nav_view_all_games.defaultMessage}`,
                location: c,
                className: bs.navigationLink,
                children: [(0, l.jsx)(r.FormattedMessage, {
                  ...jr.A.nav_view_all_games
                }), (0, l.jsx)("img", {
                  src: Dr,
                  alt: s.formatMessage(jr.A.nav_view_all_games)
                })]
              })]
            }), (0, l.jsx)(Ls.RC, {
              className: "rockstargames-modules-core-headerc916087398dcb2ac0d81fc2541342f98",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: u,
              speed: 700,
              children: d.map((e => (0, l.jsx)(Ls.qr, {
                className: "rockstargames-modules-core-headerfb650180ffb26ef3af920b51a6e292b1",
                children: (0, l.jsx)(hs, {
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
        Fs = e => {
          let {
            children: t,
            isOpen: a
          } = e;
          return (0, l.jsx)(Nr.AnimatePresence, {
            children: a && (0, l.jsx)(Nr.motion.div, {
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
              transition: Ir.springOpen,
              children: t
            })
          })
        },
        zs = {
          subMenuDropdownContainer: "rockstargames-modules-core-headerc02f6922f08136a6e751eed320862016",
          subMenuDropdownButton: "rockstargames-modules-core-headerf24a7f458786bb57d5a3bc334c6355fc",
          open: "rockstargames-modules-core-headerbb4494f77dcd9ffda130e4e916bdb05d",
          subMenuDropdownItems: "rockstargames-modules-core-headerbf4e902d509c225732afae50338dd4c0"
        },
        $s = {},
        Us = e => {
          let {
            text: t,
            dataTestId: a,
            type: r,
            target: s,
            location: n,
            className: o,
            gaText: i,
            gaBreadCrumb: c,
            isLegacy: d,
            onClick: u,
            ...g
          } = e;
          const [h] = ls(n ? [n] : []), p = r === _r;
          return (0, l.jsxs)(Mr, {
            className: [xs(Boolean(h)), $s.subMenuItem, o].join(" "),
            dataTestId: a,
            location: n,
            type: r,
            target: s,
            gaText: i,
            gaBreadCrumb: c,
            onClick: u,
            isLegacy: d,
            label: t,
            ...g,
            children: [t, p && (0, l.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        Xs = e => {
          let {
            text: t,
            dataTestId: a,
            navChildren: r,
            gaText: n,
            gaBreadCrumb: o,
            onClick: i,
            isSubMenuOpen: c,
            toggleMenuOpen: d,
            ...u
          } = e;
          const {
            track: g
          } = (0, s.useGtmTrack)();
          return (0, l.jsxs)("div", {
            className: zs.subMenuDropdownContainer,
            ...u,
            children: [(0, l.jsxs)("button", {
              type: "button",
              "data-testid": a,
              className: [zs.subMenuDropdownButton, c ? zs.open : ""].join(" "),
              onClick: () => {
                g(yr(void 0, "", n, o)), d()
              },
              children: [t, (0, l.jsx)("img", {
                src: Br,
                alt: ""
              })]
            }), (0, l.jsx)(Nr.AnimatePresence, {
              children: c && (0, l.jsx)(Nr.motion.div, {
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
                transition: Ir.springOpen,
                children: r.map((e => (0, l.jsx)(Us, {
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
        Vs = e => {
          let {
            dataTestId: t,
            type: a,
            target: r,
            location: s,
            navChildren: n,
            gaBreadCrumb: o,
            onClick: c,
            isOpen: d,
            setIsOpen: u,
            text: g,
            gaText: h,
            ...p
          } = e;
          const [m, f] = (0, i.useState)(null), [v] = ls(s ? [s] : []), b = o ? `${o} > ${h}` : h;
          if (a === Tr) return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(us, {
              text: g,
              dataTestId: t,
              gaText: h,
              gaBreadCrumb: b,
              onClick: () => u(),
              isOpen: d,
              ...p
            }), (0, l.jsx)(Fs, {
              isOpen: d,
              children: n?.map(((e, t) => e.type === Tr ? (0, l.jsx)(Xs, {
                text: e.text,
                dataTestId: e.dataTestId,
                navChildren: e.children || [],
                gaText: e.gaText,
                gaBreadCrumb: `${b} > ${e.gaText}`,
                onClick: c,
                isSubMenuOpen: m === t,
                toggleMenuOpen: () => f(m !== t ? t : null)
              }, e.gaText) : (0, l.jsx)(Us, {
                location: e.location,
                dataTestId: e.dataTestId,
                target: e.target,
                text: e.text,
                type: e.type,
                gaText: e.gaText,
                gaBreadCrumb: `${b} > ${e.gaText}`,
                onClick: c
              }, e.gaText)))
            })]
          });
          if (a === Sr) return (0, l.jsx)(Ds, {
            text: g
          });
          const x = a === _r;
          return (0, l.jsxs)(Mr, {
            location: s,
            dataTestId: t,
            type: a,
            target: r,
            gaText: h,
            gaBreadCrumb: b,
            className: [xs(Boolean(v)), v ? "rockstargames-modules-core-headerf6daff7a849e2826ed2d1f41b9941956" : ""].join(" "),
            label: g,
            ...p,
            children: [g, x && (0, l.jsx)("img", {
              alt: "",
              src: Lr
            })]
          })
        },
        Ys = e => {
          let {
            links: t,
            cta: a,
            onClick: r
          } = e;
          const [s, n] = (0, i.useState)(null);
          return (0, l.jsx)("div", {
            className: "rockstargames-modules-core-headerb6afa349a14125fd2210278a4b958ebb",
            children: (0, l.jsxs)("ul", {
              children: [t.map(((e, t) => (0, l.jsx)(Nr.motion.li, {
                variants: Or,
                transition: Ir.staggerFade,
                children: (0, l.jsx)(Vs, {
                  text: e.text,
                  gaText: e.gaText,
                  dataTestId: e.dataTestId,
                  type: e.type,
                  target: e.target,
                  location: e.location,
                  navChildren: e.children,
                  onClick: r,
                  isOpen: s === t,
                  setIsOpen: () => n(s !== t ? t : null)
                })
              }, e.text))), a && (0, l.jsx)(Nr.motion.li, {
                className: "rockstargames-modules-core-headerc22ed7fb01d7e65a14a7913a0459a4e3",
                variants: Or,
                transition: Ir.staggerFade,
                children: (0, l.jsx)(Ar, {
                  variant: a.variant,
                  dataTestId: a.dataTestId,
                  location: a.location,
                  gaEvent: a.ga,
                  gaText: a.gaText,
                  onClick: r,
                  children: a.text
                })
              })]
            })
          })
        },
        qs = e => {
          let {
            headerRef: t,
            data: a
          } = e;
          const [r, s] = (0, i.useState)(!1), [o, c] = (0, i.useState)(!1), {
            isSearchPage: d,
            forceSearch: g
          } = b(), h = x(), {
            pathname: m,
            hash: f,
            search: v
          } = h, k = y(), {
            currentSite: w
          } = p(), _ = vr(a.links), {
            setBodyIsLocked: T
          } = (0, n.useBodyScrollable)("HeaderMobile"), C = {
            show: {
              height: "auto",
              paddingBottom: r && a.brand ? "var(--global-navigation-height)" : "",
              transition: {
                ...Ir.hamburgerOpen,
                staggerChildren: .05
              }
            },
            hidden: {
              height: 0,
              paddingBottom: 0,
              transition: Ir.hamburgerClose
            }
          };
          return (0, i.useEffect)((() => {
            T(!!r)
          }), [r]), (0, i.useEffect)((() => {
            c(!1), s(!1)
          }), [m, f, v]), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsxs)("header", {
              ref: t,
              className: Bs.header,
              children: [(0, l.jsx)(Rs, {
                toggle: () => {
                  s(!r), c(!1)
                },
                isMenuOpen: r
              }), (0, l.jsx)("div", {
                className: Bs.title,
                children: (0, l.jsx)(Ns, {
                  site: a.site,
                  brand: a.brand,
                  hideRockstarBrand: !!a.brand
                })
              }), (0, l.jsx)("div", {
                children: (0, l.jsx)(ss, {
                  includeSearch: !1,
                  isMobile: !0
                })
              })]
            }), (0, l.jsx)(Nr.AnimatePresence, {
              children: (r || o || d && w?.site === u.C.www) && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsxs)(Nr.motion.nav, {
                  className: [Bs.nav, r && a.brand ? Bs.paddingBottom : "", r ? Bs.fullMenuOpen : ""].join(" "),
                  variants: C,
                  animate: "show",
                  initial: "hidden",
                  exit: "hidden",
                  children: [!a.hideSearch && (0, l.jsx)(rs, {
                    isSearchOpen: o || d && g,
                    setIsSearchOpen: c
                  }), r && (0, l.jsx)("div", {
                    className: [Bs.navContainer, o ? Bs.searchOpen : ""].join(" "),
                    children: (0, l.jsx)(Ys, {
                      links: _,
                      cta: a.cta,
                      onClick: () => {
                        s(!1), c(!1)
                      }
                    })
                  })]
                }), r && a.brand && !a.hideQuickAccess && (0, l.jsx)(Es, {}), !d && (0, l.jsx)(Nr.motion.div, {
                  className: Bs.overlay,
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  exit: {
                    opacity: 0,
                    transition: Ir.hamburgerClose
                  },
                  transition: Ir.hamburgerOpen
                })]
              })
            }), (0, l.jsx)(br.Menu, {
              location: h,
              onNavigate: k
            })]
          })
        };
      a(79952);
      const Hs = () => {
          const e = (0, i.useRef)(null),
            t = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
          return (0, i.useEffect)((() => {
            t && t.enableExperimentalAPIs(!0)
          }), []), (0, l.jsx)("button", {
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
            children: (0, l.jsx)(r.FormattedMessage, {
              ...jr.A.accessibility_skip_button
            })
          })
        },
        Ws = {
          pillBtn: "rockstargames-modules-core-headeraaf554972849bcf378ff8b620c34f82e",
          selected: "rockstargames-modules-core-headere3891b1e9b084d58f6e1afb5fa14ab12",
          globalNavigationRoot: "rockstargames-modules-core-headera6f7f3c5e0aaf36cd52e1b4c44a3ac8b",
          large: "rockstargames-modules-core-headeree0bc2c2001c604d3aa4a7d890c0fd79",
          badge: "rockstargames-modules-core-headerab6bac3e7cd6aeeec5fe34375b77b1a2",
          globalNavigationSpacer: "rockstargames-modules-core-headerd45d3098c677dd2ec79f50475413ab8e",
          globalNavigationSearchSpacer: "rockstargames-modules-core-headere22f06c8b88ebe362a876f197dca5953"
        };
      k.gsap.registerPlugin(Ta, Ja, fr);
      const Ks = () => {
          const e = (0, i.useRef)(null),
            t = (0, n.useScroll)(),
            a = t?.freezeUserShouldSeeMore,
            {
              windowWidth: r
            } = (0, n.useWindowResize)(),
            s = (() => {
              const e = (0, i.useContext)(g);
              if (void 0 === e) throw new Error("useNavigationData must be used within a Navigation Provider");
              return e.navigationData
            })(),
            o = x(),
            {
              isSearchPage: c,
              forceSearch: d
            } = b(),
            u = r < 1024,
            [h, p] = (0, i.useState)(!1),
            m = (0, i.useRef)(null),
            f = (0, i.useRef)(null);
          (0, i.useEffect)((() => {
            p(!0)
          }), []), (0, i.useEffect)((() => {
            const t = "data-show-more-content";
            document.body.removeAttribute(t), e?.current?.removeAttribute(t)
          }), [o.pathname]);
          const v = (0, i.useCallback)((t => {
            if (a) return;
            const r = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
            t.direction === m?.current || r ? r && t?.animation?.pause() : -1 === t.direction ? t.animation?.reverse() : t.animation?.play();
            const s = "data-show-more-content";
            1 === t.direction ? (document.body.setAttribute(s, ""), e?.current?.setAttribute(s, "")) : (document.body.removeAttribute(s), e?.current?.removeAttribute(s)), m.current = t.direction
          }), [a]);
          (0, i.useEffect)((() => {
            const e = k.gsap.context((() => {
              f?.current && k.gsap.set(f.current, {
                paused: !0,
                scrollTrigger: {
                  onUpdate: e => {
                    v(e)
                  },
                  start: "140px",
                  end: 999999999
                }
              })
            }));
            return () => e.revert()
          }), [a, f?.current]);
          const y = (0, i.useMemo)((() => u ? (0, l.jsx)(qs, {
            headerRef: f,
            data: s
          }) : (0, l.jsx)(Os, {
            headerRef: f,
            data: s
          })), [s, u]);
          return (0, l.jsxs)("div", {
            className: Ws.globalNavigationRoot,
            "data-header-initialized": h,
            ref: e,
            children: [(0, l.jsx)(Hs, {}), (0, l.jsx)("div", {
              className: [Ws.globalNavigationSpacer, c && d ? Ws.globalNavigationSearchSpacer : ""].join(" ")
            }), y]
          })
        },
        {
          graphEnv: Gs
        } = (0, n.getConfigForDomain)(),
        Qs = e => {
          let {
            navData: t,
            searchConfig: a,
            routeOptions: r,
            location: s,
            onNavigate: i
          } = e;
          return (0, l.jsx)("div", {
            className: "siteHeaderContainer",
            children: (0, l.jsx)(n.ResizeProvider, {
              children: (0, l.jsx)(o.UN, {
                children: (0, l.jsx)(h, {
                  navData: t,
                  location: s,
                  onNavigate: i,
                  searchConfig: a,
                  routeOptions: r,
                  children: (0, l.jsx)(Ks, {})
                })
              })
            })
          })
        },
        Js = (0, n.withRockstarGraph)((e => {
          let {
            navData: t,
            searchConfig: a,
            routeOptions: s,
            location: i,
            onNavigate: c,
            privateToken: d
          } = e;
          const [{
            iso: u
          }] = (0, r.getLocale)();
          return (0, l.jsx)("div", {
            className: "siteHeaderContainer",
            children: (0, l.jsx)(n.ResizeProvider, {
              children: (0, l.jsx)(o.iR, {
                privateToken: d,
                children: (0, l.jsx)(o.UN, {
                  children: (0, l.jsx)(h, {
                    navData: t,
                    location: i,
                    onNavigate: c,
                    searchConfig: a,
                    routeOptions: s,
                    children: (0, l.jsx)(Ks, {})
                  })
                })
              })
            })
          })
        }), {
          env: Gs
        }),
        Zs = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(r) {
            return (0, l.jsx)(c, {
              header: t,
              hidden: a,
              children: (0, l.jsx)(e, {
                ...r
              })
            })
          }
        }((0, r.withIntl)((e => {
          let {
            ...t
          } = e;
          const {
            hasProvider: a
          } = (0, s.useRockstarUser)();
          return a ? (0, l.jsx)(Qs, {
            ...t
          }) : (0, l.jsx)(Js, {
            ...t
          })
        }), d), null, !0)
    },
    70344: (e, t, a) => {
      a.r(t), a.d(t, {
        GtmProvider: () => r.UN,
        RockstarUserProvider: () => r.iR,
        useGtmTrack: () => r.h,
        useRockstarUser: () => r.Wx,
        useRockstarUserState: () => s.A
      });
      var r = a(83098),
        s = a(21861)
    },
    83098: (e, t, a) => {
      a.d(t, {
        UN: () => d,
        iR: () => k,
        h: () => g,
        Wx: () => w
      });
      var r = a(71127),
        s = a(95966),
        n = a(70344),
        o = a(48539);
      const i = {
        pcalt: "PC",
        pc: "PC",
        ps4: "PS4",
        ps5: "PS5",
        xboxone: "XBOX ONE",
        xboxsx: "XBOX SERIES X|S"
      };
      var l = a(70954);
      const c = (0, s.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = e => {
          let {
            checkUser: t,
            children: a
          } = e;
          const d = function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              const [t, a] = (0, r.useState)([]), [l, c] = (0, r.useState)([]), [d, u] = (0, r.useState)(null), {
                data: g,
                loggedIn: h
              } = (0, n.useRockstarUser)(), {
                hasGtaPlus: p
              } = g ?? {}, m = (0, o.bn)(), f = (e, r) => {
                const n = [];
                e.forEach((e => {
                  if (-1 === t.indexOf(e)) {
                    const t = r ?? {};
                    (0, s.track)({
                      ...e,
                      ...t
                    }), n.push(e)
                  }
                })), a([...t, ...n])
              };
              (0, r.useEffect)((() => {
                if (g && null !== h) {
                  const e = v(g);
                  l.length && e && f(l, e), u(e)
                } else e || l.length && f(l)
              }), [g, h, l]), (0, r.useEffect)((() => {
                const e = l.filter((e => -1 === t.indexOf(e)));
                c(e)
              }), [t]);
              const v = e => {
                const t = [],
                  a = [],
                  r = [],
                  s = [];
                return Object.entries(e?.characters ?? []).forEach((e => {
                  let [n, o] = e;
                  o.length && o.forEach((e => {
                    const o = (e => "pcalt" === e ? "pc" : e.toString())(e.platform);
                    if ("gtao" === n) {
                      a.includes(o) || a.push(o), r.includes(o) || "1" !== e.stats?.overview?.hasGtaPlus?.value || r.push(o);
                      const t = `${n}_${e.platform}`;
                      s.includes(t) || s.push(t)
                    }
                    t.includes(o) || t.push(o)
                  }))
                })), Object.entries(e?.gamesPlayed ?? []).forEach((e => {
                  let [a, r] = e;
                  s.push(`${a}_${r}`), t.includes(r) || t.push(r)
                })), {
                  member_id: e.id ?? void 0,
                  login_state: h ?? !1,
                  gta_plus_active: !!h && Boolean(p),
                  platforms_played: t.length ? t.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  games_played: s.length ? s.join("|").toUpperCase() : void 0,
                  gtao_platforms_played: a.length ? a.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  gta_plus_platforms: r.length ? r.map((e => i[e] ?? e)).join("|").toUpperCase() : void 0,
                  use_enhanced_browser_features: m
                }
              };
              return {
                track: e => {
                  const t = "boolean" == typeof h,
                    a = Boolean(g && d);
                  if (!t || !0 === h && !a) {
                    const t = [...l];
                    return t.push({
                      ...e
                    }), c(t)
                  }
                  return (0, s.track)({
                    ...e,
                    ...d
                  })
                }
              }
            }(t),
            u = (0, r.useMemo)((() => d), [d, t]);
          return (0, l.jsx)(c.Provider, {
            value: u,
            children: a
          })
        },
        u = {
          track: () => null
        },
        g = () => (0, r.useContext)(c) ?? u;
      var h = a(21861);
      var p = a(17330),
        m = a.n(p);
      var f = a(39445),
        v = a(53643);
      const b = e => {
          let {
            privateToken: t
          } = e;
          const {
            charactersNeeded: a,
            crewsNeeded: n,
            currentCharId: o
          } = (0, h.A)(), i = (0, s.useRockstarToken)(), [l, c] = (0, r.useState)(), [d] = (0, s.useRockstarTokenReactive)(), u = (0, s.useRockstarTokenPing)(), [g, p] = (0, r.useState)(), [b, x] = (0, r.useState)(!1), y = void 0 === g, [k, w] = (0, r.useState)(1);
          return (0, r.useEffect)((() => {
            "gtao" !== a || l?.characters?.gtao || (c({
              ...l,
              accountSynced: !1
            }), w((e => e + 1)))
          }), [a, l?.characters?.gtao]), (0, r.useEffect)((() => {
            n && !l?.crews && (c({
              ...l,
              accountSynced: !1
            }), w((e => e + 1)))
          }), [n, l?.crews]), (0, r.useEffect)((() => {
            0 === k && c({
              ...l,
              accountSynced: !0
            })
          }), [k]), (0, r.useEffect)((() => {
            t && d(t)
          }), [t]), (0, r.useEffect)((() => {
            "" !== i || u()
          }), [i]), (0, r.useEffect)((() => {
            if ("" === i) return;
            const e = !!i;
            if (e || b || ((async () => {
                try {
                  await (async e => {
                    let {
                      token: t
                    } = e;
                    const {
                      gateway: a,
                      silentCheck: r
                    } = (0, s.getConfigForDomain)(), n = {
                      method: "POST",
                      body: `fingerprint=${await m().get().then((e=>e))}`,
                      credentials: "include",
                      headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                      }
                    }, o = await fetch(r, n);
                    if (200 !== o.status) return void t(!1);
                    const i = `${a}?code=${await o.json()}`,
                      l = await fetch(i, {
                        credentials: "include"
                      }),
                      {
                        bearerToken: c
                      } = await l.json();
                    return t(c), c
                  })({
                    token: d
                  })
                } catch (e) {}
              })(), x(!0)), !e && b && p(!1), e) {
              const e = (e => {
                let {
                  bearerToken: t
                } = e;
                const a = (0, f.s)(t),
                  {
                    host: r
                  } = (0, s.getConfigForDomain)(),
                  n = parseInt(a.nameid),
                  o = a["scAuth.Nickname"],
                  i = "True" === (a?.["scAuth.IsAMinor"] ?? "True"),
                  l = new Date(a["scAuth.MemberSince"]),
                  c = new Date,
                  d = (0, v.M)(c, l) < 12,
                  u = (new Date).getTime() / 1e3;
                return {
                  id: n,
                  nonExpiredToken: (a?.exp ?? 0) - u > 0,
                  avatar: a["scAuth.AvatarUrl"],
                  bearer_token_expired: a.exp > Date.now(),
                  isAMinor: i,
                  isNewAccount: d,
                  nickname: o,
                  profile_link: `https://${r}.rockstargames.com/member/${o}?id=${n}`
                }
              })({
                bearerToken: i
              });
              c({
                ...l,
                ...e
              })
            }
          }), [i, b]), (0, r.useEffect)((() => {
            (async () => {
              if (g && l && n && !l?.crews) {
                const e = await (async e => {
                  let {
                    pingBearer: t,
                    rockstarId: a
                  } = e;
                  const {
                    crews: r
                  } = await (0, s.coreScApiFetch)("crew/forMember", {
                    pingBearer: t,
                    query: {
                      userId: a
                    }
                  });
                  return r
                })({
                  pingBearer: u,
                  rockstarId: l.id
                });
                c({
                  ...l,
                  crews: e
                }), w((e => e - 1))
              }
            })()
          }), [l?.nickname, n, g]), (0, r.useEffect)((() => {
            (async () => {
              if (!g || !l || l?.gamesPlayed) return;
              const e = await (async e => {
                let {
                  pingBearer: t
                } = e;
                const {
                  all: a
                } = await (0, s.coreScApiFetch)("profile/lastPlayed", {
                  pingBearer: t
                });
                return a
              })({
                pingBearer: u
              });
              c({
                ...l,
                gamesPlayed: e
              }), w((e => e - 1))
            })()
          }), [l?.nickname, g]), (0, r.useEffect)((() => {
            (async () => {
              if (g && l && "gtao" === a && !l?.characters?.gtao) {
                const {
                  gtaoCharacters: e,
                  linkedAccounts: t
                } = await (async e => {
                  let {
                    pingBearer: t,
                    nickname: a,
                    rockstarId: r
                  } = e;
                  const n = [],
                    o = await (0, s.coreScApiFetch)("profile/playedplatforms?game=gtav", {
                      pingBearer: t
                    });
                  await (o?.platforms?.reduce((async (e, a) => {
                    if (await e, ["ps3", "xbox", "xbox360"].includes(a)) return;
                    const r = await (0, s.coreScApiFetch)(`games/gtao/characters?platform=${a}`, {
                      pingBearer: t
                    });
                    r?.status && r?.result?.map((e => {
                      const {
                        stats: t
                      } = e, {
                        overview: r
                      } = t, {
                        rank: s
                      } = r;
                      if ("0" === s.value) return;
                      const o = ["ps4", "ps5"].includes(a) ? e?.mugshotUrl.replace("cloud.rockstargames.com/", "ros.rockstargames.com/cloud/11/cloudservices/") : e?.mugshotUrl;
                      return n.push({
                        ...e,
                        mugshotUrl: o,
                        platform: a
                      }), e
                    }))
                  }), Promise.resolve()));
                  const {
                    status: i,
                    accounts: l
                  } = await (0, s.coreScApiFetch)(`profile/getprofile?nickname=${a}&maxFriends=0`, {
                    pingBearer: t
                  });
                  if (!i || !l.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  const c = l[0],
                    {
                      rockstarAccount: d,
                      linkedAccounts: u
                    } = c;
                  if (d?.rockstarId !== r) return {
                    gtaoCharacters: n,
                    linkedAccounts: []
                  };
                  if (!n.length) return {
                    gtaoCharacters: n,
                    linkedAccounts: c.linkedAccounts
                  };
                  const g = a;
                  let h = "",
                    p = "";
                  return u?.map((e => ("xbl" === e?.onlineService ? h = e.userName : "np" === e?.onlineService && (p = e.userName), e))), n.sort(((e, t) => Number(t.activeCharacter) - Number(e.activeCharacter))), n.map(((e, t) => (e.platformUsername = g, e.index = t, ["ps4", "ps5"].includes(e.platform) && (e.platformUsername = p || g), ["xboxone", "xboxsx"].includes(e.platform) && (e.platformUsername = h || g), e))), {
                    gtaoCharacters: n,
                    linkedAccounts: u
                  }
                })({
                  pingBearer: u,
                  nickname: l.nickname,
                  rockstarId: l.id
                });
                c({
                  ...l,
                  characters: {
                    ...l.characters,
                    gtao: e
                  },
                  linkedAccounts: t,
                  hasGtaPlus: "1" === e?.[o]?.stats?.overview?.hasGtaPlus?.value
                }), w((e => e - 1))
              }
            })()
          }), [a, l?.nickname, g]), (0, r.useEffect)((() => {
            l?.id && l?.nonExpiredToken && (p(!0), (0, h.K)(l.id))
          }), [JSON.stringify(l)]), {
            data: l,
            loggedIn: g,
            loading: y
          }
        },
        x = {},
        y = (0, s.setContextItem)({
          context: (0, r.createContext)(x),
          key: "userContext"
        }),
        k = e => {
          let {
            children: t,
            privateToken: a
          } = e;
          const s = b({
              privateToken: a
            }),
            n = (0, r.useMemo)((() => ({
              ...s,
              privateToken: a,
              hasProvider: !0
            })), [s]);
          return (0, l.jsx)(y.Provider, {
            value: n,
            children: t
          })
        },
        w = () => (0, r.useContext)(y)
    }
  }
]);