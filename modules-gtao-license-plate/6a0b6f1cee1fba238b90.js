"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [401], {
    9401: (e, t, a) => {
      a.d(t, {
        Z: () => ua
      });
      var r = a(4932),
        n = a(3572),
        s = a(4859),
        i = a(6711),
        o = a(1458),
        l = a(9929),
        c = a(3657),
        d = a(6206),
        u = a(241),
        m = a(3102),
        p = a(9674),
        f = a(3918),
        b = a(4926),
        g = a.n(b),
        y = a(8976),
        h = a(1595),
        v = a.n(h);
      const x = e => B.find((t => {
          let {
            id: a
          } = t;
          return a === e
        })),
        w = e => B.find((t => {
          let {
            name: a
          } = t;
          return a.toLowerCase() === e.toLowerCase()
        })),
        E = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        P = () => window.innerWidth < U.lg,
        S = () => window.innerHeight > .75 * window.innerWidth,
        _ = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= U.xxl:
              return 25;
            case e >= U.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= U.lg:
              return 40;
            default:
              return 100
          }
        },
        T = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= U.xl:
              return E(4);
            case e >= 1440:
              return E(3);
            default:
              return E(2)
          }
        },
        R = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= U.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= U.lg:
              return 5;
            case e >= U.md:
            default:
              return 8
          }
        },
        I = (e, t) => e?.plateText && t.length ? !t.some(((t, a) => {
          let {
            plateText: r
          } = t;
          return a && r === e.plateText
        })) : !!e?.plateText;

      function N(e) {
        const t = {
          x: 0,
          y: 0,
          z: 0,
          scale: 1
        };
        if (!e) return t;
        const a = window.getComputedStyle(e).transform;
        if ("none" === a || void 0 === a) return t;
        const r = a.includes("3d") ? "3d" : "2d",
          n = a.match(/matrix.*\((.+)\)/);
        let s;
        if (n && (s = n[1].split(", ")), s) {
          if ("2d" === r) return {
            x: s[4],
            y: s[5],
            z: 0,
            scale: s[0]
          };
          if ("3d" === r) return {
            x: s[12],
            y: s[13],
            z: s[14],
            scale: s[0]
          }
        }
        return t
      }

      function O(e, t, a, r) {
        let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
          x: 0,
          y: 0
        };
        const {
          offsetWidth: s
        } = t, {
          columns: i,
          rows: o,
          plateHeight: l,
          plateWidth: c,
          rowGap: d,
          columnGap: u
        } = r.gridOptions, {
          top: m,
          left: p,
          bottom: f
        } = r.gridDimensions.margins.pixels, b = Math.floor(e / i), g = e % i, y = l * o + d * (o - 1), h = c * i + u * (i - 1), v = s - n.x - 2 * p, x = a - n.y - m - f, w = x * (l / y), E = v * (c / h), P = b * (l + d) / y, S = {
          x: v * (g * (c + u) / h) + p + n.x,
          y: x * P + m + n.y
        };
        return {
          rect: {
            top: S.y,
            left: S.x,
            right: S.x + E,
            bottom: S.y + w,
            center: {
              x: S.x + E / 2,
              y: S.y + w / 2
            }
          },
          height: w,
          width: E
        }
      }
      const A = (e, t) => {
          t === pe.LIST_PLATES && (document.body.style.cursor = "pointer")
        },
        C = e => {
          document.body.style.cursor = "auto", v().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: G.plateHover.duration,
            ease: G.plateHover.ease
          })
        };

      function k(e, t) {
        const {
          plateIndex: a,
          timeline: r,
          three: n,
          gridScale: s
        } = e, {
          onComplete: i,
          tweenPosition: o,
          onStart: l,
          is3D: c
        } = t;
        if (Number.isNaN(a) || !n || !r || !s || !n?.controls?.current) return null;
        const {
          scene: u,
          camera: m,
          controls: p
        } = n, f = R(), b = !S() || P() ? f * s : 1.6 * f * s, g = [];
        let y = null;
        u.traverse((e => {
          e.name === fe.LP && g.push(e), e.userData.index === a && (y = e)
        }));
        const h = new d.Vector3;
        y && y.getWorldPosition(h);
        const v = {
            cameraPosition: {
              start: (new d.Vector3).copy(m.position),
              end: new d.Vector3(h.x, h.y, h.z + b)
            },
            controlsTarget: {
              start: (new d.Vector3).copy(p.current.target),
              end: h
            },
            plateOpacity: g.map(((e, t) => ({
              start: e.material.opacity,
              end: g[t].userData.index === a ? 1 : 0
            })))
          },
          x = {
            current: 0
          };
        let w = 0;
        return t.isResize || (w = P() ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration), r.to(x, {
          current: 1,
          duration: w,
          ease: P() ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = x, t = v.cameraPosition.start.clone().lerp(v.cameraPosition.end, e);
            m.position.set(t.x, t.y, t.z);
            const a = v.controlsTarget.start.clone().lerp(v.controlsTarget.end, e);
            p.current.target.x = a.x, p.current.target.y = a.y, p.current.target.z = a.z
          },
          onStart: l ? () => {
            l()
          } : void 0,
          onComplete: i ? () => {
            i(e)
          } : void 0
        }, o || 0), x.current = 0, r.to(x, {
          current: 1,
          duration: P ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
          ease: P ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = x;
            g.forEach(((t, a) => {
              t.material && c && (t.material.opacity = d.MathUtils.lerp(v.plateOpacity[a].start, v.plateOpacity[a].end, e))
            }))
          }
        }, "<")
      }

      function L() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      }
      const j = "GTALicensePlatesRegular",
        M = 620,
        V = a(4495),
        D = "initial",
        W = "top",
        Y = "bottom",
        $ = {
          ACCESSIBLE_PLATE_GRID: "accessiblePlateGrid",
          ACCESSIBLE_PLATES: "accessiblePlates",
          CANVAS_WRAP: "canvasWrap",
          CONFIRM_CONTENT: "confirmContent",
          CONFIRM_SIDEBAR: "confirmSidebar",
          CONFIRM_SIDEBAR_BUTTONS: "confirmOrderSidebarButtons",
          CONFIRM_SIDEBAR_BUTTONS_PORTAL: "confirmOrderSidebarButtonsPortal",
          CTA_SHADER: "ctaShader",
          CTA_WRAP: "ctaWrap",
          FIRST_PLATE_MESH: "firstPlateMesh",
          FOOTER: "footer",
          LOADING_SCREEN: "loadingScreen",
          MOBILE_SIDEBAR_PORTAL_TARGET: "mobileSidebarPortalTarget",
          NEW_PLATE: "newPlate",
          NEW_PLATE_FORM: "newPlateForm",
          NEW_PLATE_SIDEBAR: "newPlateSidebar",
          NEW_PLATE_UI: "newPlateUI",
          ORDER_BG: "orderBg",
          PLATE_COUNT: "plateCount",
          ROOT: "root",
          SIDEBAR: "sidebar",
          SIDEBAR_BUTTONS: "sidebarButtons",
          SIDEBAR_BUTTONS_LOADING_ANIMATION: "sidebarButtonsLoadingAnimation",
          UI: "ui",
          VIEW_PLATE: "viewPlate",
          TOGGLE_3D_BUTTON: "toggle3DButton",
          TOGGLE_VIEW_BUTTON: "toggleViewButton"
        },
        B = [{
          id: 0,
          name: "BlueWhite2",
          displayName: "Blue on White 2",
          alphaImageUrl: V,
          albedoImageUrl: a(6050),
          roughnessImageUrl: a(8642),
          bumpImageUrl: a(9233),
          previewUrl: a(8928),
          image: null,
          fontColor: "#2C317E",
          fontSize: M,
          fontName: j,
          selected: !1
        }, {
          id: 1,
          name: "YellowBlack",
          displayName: "Yellow on Black",
          alphaImageUrl: V,
          albedoImageUrl: a(4360),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(3983),
          image: null,
          fontColor: "#D29D17",
          fontSize: M,
          fontName: j,
          selected: !1
        }, {
          id: 2,
          name: "OrangeBlue",
          displayName: "Orange on Blue",
          alphaImageUrl: V,
          albedoImageUrl: a(6879),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(1358),
          image: null,
          fontColor: "#CD7600",
          fontSize: M,
          fontName: j,
          selected: !1
        }, {
          id: 3,
          name: "BlueWhite1",
          displayName: "Blue on White 1",
          alphaImageUrl: V,
          albedoImageUrl: a(3493),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(7934),
          image: null,
          fontColor: "#2C317E",
          fontSize: M,
          fontName: j,
          selected: !1
        }, {
          id: 4,
          name: "BlueWhite3",
          displayName: "Blue on White 3",
          alphaImageUrl: V,
          albedoImageUrl: a(754),
          roughnessImageUrl: a(2423),
          bumpImageUrl: a(4517),
          previewUrl: a(2548),
          image: null,
          fontColor: "#2C317E",
          fontSize: M,
          fontName: j,
          selected: !1
        }],
        U = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        z = 0,
        H = 2,
        F = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: z
          }
        },
        G = {
          plateHover: {
            duration: .25,
            ease: h.Power1.easeOut
          },
          clickPlate: {
            duration: .9,
            ease: h.Power4.easeInOut
          },
          deletePlate: {
            duration: .6,
            ease: h.Power4.easeInOut,
            delay: .005
          },
          sidebar: {
            in: {
              duration: .35,
              ease: h.Power2.easeIn,
              delay: .65
            },
            out: {
              duration: .3,
              ease: h.Power2.easeIn,
              delay: 0
            },
            mobile: {
              drawer: {
                duration: .9,
                ease: h.Power4.easeInOut
              },
              drawerSnap: {
                duration: .4,
                ease: h.Power4.easeOut
              },
              fadeHeader: {
                in: {
                  duration: .6,
                  ease: h.Power2.easeInOut,
                  delay: .3
                },
                out: {
                  duration: .7,
                  ease: h.Power2.easeInOut
                }
              },
              footer: {
                in: {
                  duration: .4,
                  ease: h.Cubic.easeIn,
                  delay: .9
                },
                out: {
                  duration: .4,
                  ease: h.Cubic.easeOut
                }
              }
            }
          },
          toggleView: {
            camera: {
              duration: .75,
              ease: h.Cubic.easeInOut
            },
            fadeIn: {
              duration: .5,
              ease: h.Power2.easeIn
            },
            fadeOut: {
              duration: .5,
              ease: h.Power2.easeIn
            },
            reset: {
              duration: .375,
              ease: h.Cubic.easeInOut
            }
          },
          transaction: {
            confirmOrder: {
              duration: .9,
              ease: h.Power3.easeInOut
            },
            fade: {
              in: {
                duration: .4,
                ease: h.Cubic.easeIn
              },
              out: {
                duration: .4,
                ease: h.Cubic.easeOut
              },
              landingPage: {
                duration: 1.15,
                ease: h.Cubic.easeInOut
              }
            }
          },
          plateShimmer: {
            duration: 2,
            ease: h.Power2.easeOut
          },
          accessibilePlate: {
            duration: .5,
            ease: h.Power2.easeIn
          }
        },
        X = {
          plateView: {
            maxPolarAngle: Math.PI - .9,
            minPolarAngle: .9,
            maxAzimuthAngle: Math.PI / 4,
            minAzimuthAngle: Math.PI / -4
          },
          carView: {
            maxPolarAngle: Math.PI - 1.55,
            minPolarAngle: 1.2,
            maxAzimuthAngle: Math.PI / 4,
            minAzimuthAngle: Math.PI / -4
          }
        },
        q = -9.72,
        Z = 5,
        K = -10.68,
        J = 10.4,
        Q = 5,
        ee = 4.52,
        te = {
          x: 0,
          y: 14.4,
          z: 4.9
        },
        ae = -4.52,
        re = 10,
        ne = 6.8,
        se = {
          x: -14.52
        },
        ie = -15,
        oe = 7,
        le = 4.52,
        ce = {
          x: 6,
          y: 5,
          z: 5
        },
        de = .6,
        ue = .4,
        me = .3,
        pe = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        fe = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        be = {
          faux: !0,
          index: 0,
          mpPlate: !1,
          noDelete: !1,
          spPlate: !1,
          plateText: "",
          style: w("BlueWhite2"),
          vehicles: []
        },
        ge = (0, s.makeVar)(""),
        ye = (0, s.makeVar)([]),
        he = (0, s.makeVar)(null),
        ve = (0, s.makeVar)(null),
        xe = (0, s.makeVar)(null),
        we = (0, s.makeVar)(0),
        Ee = (0, s.makeVar)(pe.LIST_PLATES),
        Pe = (0, s.makeVar)(null),
        Se = (0, s.makeVar)(null),
        _e = (0, s.makeVar)(null),
        Te = (0, s.makeVar)(1),
        Re = (0, s.makeVar)(null),
        Ie = (0, s.makeVar)(!1),
        Ne = (0, s.makeVar)(!1),
        Oe = (0, s.makeVar)(!0),
        Ae = (0, s.makeVar)(null),
        Ce = (0, s.makeVar)(P()),
        ke = (0, s.makeVar)(!1),
        Le = (0, s.makeVar)(!0),
        je = (0, s.makeVar)(!1),
        Me = (0, s.makeVar)(0),
        Ve = (0, s.makeVar)(pe.LIST_PLATES),
        De = (0, s.makeVar)(void 0),
        We = (0, s.makeVar)(""),
        Ye = (0, s.makeVar)([]),
        $e = (0, s.makeVar)([]),
        Be = (0, s.makeVar)(!1),
        Ue = (0, s.makeVar)(!!P()),
        ze = (0, s.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        He = (0, s.makeVar)(B),
        Fe = (0, s.makeVar)({}),
        Ge = (e, t) => {
          const a = {
            ...Fe(),
            [e]: t
          };
          Fe(a)
        },
        Xe = (0, s.makeVar)(0),
        qe = (0, s.makeVar)(null),
        Ze = (0, s.makeVar)(null),
        Ke = (0, s.makeVar)(null),
        Je = () => {
          const e = (0, s.useReactiveVar)(ye),
            t = (0, s.useReactiveVar)(he),
            a = (0, s.useReactiveVar)(ve),
            n = (0, s.useReactiveVar)(xe),
            o = (0, s.useReactiveVar)(we),
            c = (0, s.useReactiveVar)(Ee),
            d = (0, s.useReactiveVar)(Pe),
            u = (0, s.useReactiveVar)(Se),
            m = (0, s.useReactiveVar)(_e),
            p = (0, s.useReactiveVar)(Te),
            f = (0, s.useReactiveVar)(Re),
            b = (0, s.useReactiveVar)(Ie),
            g = (0, s.useReactiveVar)(Ce),
            y = (0, s.useReactiveVar)(Ne),
            h = (0, s.useReactiveVar)(Oe),
            v = (0, s.useReactiveVar)(Ae),
            x = (0, s.useReactiveVar)(ke),
            w = (0, s.useReactiveVar)(je),
            E = (0, s.useReactiveVar)(Le),
            P = (0, s.useReactiveVar)(Me),
            S = (0, s.useReactiveVar)(Ve),
            _ = (0, l.useLocale)(),
            [T, R] = (0, r.useState)(""),
            I = (0, s.useReactiveVar)(De),
            N = (0, s.useReactiveVar)(We),
            O = (0, s.useReactiveVar)(Ye),
            A = (0, s.useReactiveVar)($e),
            C = (0, s.useReactiveVar)(ze),
            k = (0, s.useReactiveVar)(He),
            L = (0, s.useReactiveVar)(ge),
            j = (0, s.useReactiveVar)(Fe),
            M = (0, i.useScConfig)(),
            V = (0, s.useReactiveVar)(Xe),
            D = (0, s.useReactiveVar)(qe),
            W = (0, s.useReactiveVar)(Ue),
            Y = (0, s.useReactiveVar)(Be),
            $ = (0, s.useReactiveVar)(Ze),
            B = (0, s.useReactiveVar)(Ke);
          return (0, r.useEffect)((() => {
            const e = (0, l.toScLocaleString)(_),
              t = `${document.location.pathname}${document.location.search}`,
              a = `${M.login}?returnUrl=${t}&lang=${e}`;
            R(a)
          }), []), {
            state: {
              accessiblePlates: e,
              canvasDimensions: t,
              character: a,
              currentPlate: n,
              currentPlateIndex: o,
              currentView: c,
              deletedPlateIndex: d,
              error: u,
              firstPlateMesh: m,
              isLoading: h,
              isScrollEnabled: E,
              gridScale: p,
              gridState: f,
              lastScrollY: P,
              pendingOrder: I,
              plates: O,
              plateTextures: A,
              realHeight: L,
              is3D: b,
              isExpanded: y,
              isLoggedIn: v,
              isMobile: g,
              isSceneLoaded: w,
              loginUrl: T,
              isOrderConfirmed: x,
              lastView: S,
              plateNumber: N,
              plateNumberStatus: C,
              plateStyles: k,
              refs: j,
              selectedStyle: V,
              selectedVehicle: D,
              shouldForce2D: W,
              shouldRenderScene: Y,
              three: $,
              vehicles: B
            },
            setAccessiblePlates: ye,
            setCanvasDimensions: he,
            setCharacter: ve,
            setCurrentPlate: xe,
            setCurrentPlateIndex: we,
            setCurrentView: Ee,
            setDeletedPlateIndex: Pe,
            setError: Se,
            setFirstPlateMesh: _e,
            setGridState: Re,
            setIsLoading: Oe,
            setIsLoggedIn: Ae,
            setIsOrderConfirmed: ke,
            setLastScrollY: Me,
            setLastView: Ve,
            setPendingOrder: De,
            setPlates: Ye,
            realHeightReactive: ge,
            setIs3D: Ie,
            setIsExpanded: Ne,
            setIsMobile: Ce,
            setIsSceneLoaded: je,
            setIsScrollEnabled: Le,
            setGridScale: Te,
            setPlateNumber: We,
            setPlateNumberStatus: ze,
            setPlateStyles: He,
            setPlateTextures: $e,
            setRefs: Ge,
            setRefsInternal: Fe,
            setSelectedStyle: Xe,
            setSelectedVehicle: qe,
            setShouldForce2D: Ue,
            setShouldRenderScene: Be,
            setThree: Ze,
            setVehicles: Ke
          }
        };
      var Qe = a(6160);
      const et = e => {
        let {
          t
        } = e;
        const {
          setRefs: a,
          state: n
        } = Je(), {
          realHeight: s
        } = n, i = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          a($.FOOTER, i)
        }), [i.current]), (0, Qe.jsx)("div", {
          className: "fd13848ae40e6d65dfb5b2acf94c1bee2c37",
          ref: i,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, Qe.jsxs)("div", {
            className: "fd13848ae40e6d65e85531fe4eae0ee625c1",
            children: [(0, Qe.jsxs)("div", {
              className: "fd13848ae40e6d65ed35c6f20ece33d1283f",
              children: [(0, Qe.jsx)(y.LanguageSelector, {}), (0, Qe.jsxs)("div", {
                className: "fd13848ae40e6d65fd7206567c293e3054b0",
                children: [(0, Qe.jsx)(y.A, {
                  to: "/corpinfo",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info",
                  children: t("Corporate")
                }), (0, Qe.jsx)(y.A, {
                  to: "/privacy",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy",
                  children: t("Privacy")
                }), (0, Qe.jsx)(y.A, {
                  onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie settings",
                  children: t("Cookie Settings")
                }), (0, Qe.jsx)(y.A, {
                  to: "/cookies",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie policy",
                  children: t("Cookie Policy")
                }), (0, Qe.jsx)(y.A, {
                  to: "/legal",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal",
                  children: t("Legal")
                }), (0, Qe.jsx)(y.A, {
                  to: "/ccpa",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "CCPA Link",
                  "data-gtm-label": "View CCPA Info",
                  children: t("Do Not Sell My Info")
                })]
              })]
            }), (0, Qe.jsx)(y.Rating, {
              className: "fd13848ae40e6d65bb8ac13e4a077787384b",
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })
        })
      };
      var tt = a(9708),
        at = a(5667);
      const rt = {
          CTAWrap: "fd13848ae40e6d65c4cbaa699036913808c4",
          loggedOut: "fd13848ae40e6d65bdbaf49f96c03c82c5e4",
          newOrder: "fd13848ae40e6d65d02e731e64c1749dab46",
          loggedOutShader: "fd13848ae40e6d65ed5de935649b7487addc",
          pendingOrderShader: "fd13848ae40e6d65a4b9759cde644be1c94b",
          visible: "fd13848ae40e6d65e83d87e82c84a46d86c5",
          createNewPlate: "fd13848ae40e6d65b78b65ece97c489311aa",
          signIn: "fd13848ae40e6d65d09aecd4d58aeb14e15e",
          hover: "fd13848ae40e6d65c13648f71e994e0f8458",
          ctaText: "fd13848ae40e6d65f2ab95570f791dbca865",
          isWindows: "fd13848ae40e6d65fc1a5cb44b899b14a45e",
          tryWithoutSigningIn: "fd13848ae40e6d65f70b0bf7f92aef13ca2c",
          firstPlateLoggedIn: "fd13848ae40e6d65ba18e8d268032703bc27",
          maxPlatesReached: "fd13848ae40e6d65a00f9428dc1e65319e6b",
          hidden: "fd13848ae40e6d65cfe744f3b51090d0f4c5",
          loggedOutCTA: "fd13848ae40e6d65c9286346492d0d5b10a5",
          ctaIcon: "fd13848ae40e6d65ba5988c6f9002e713b3d"
        },
        nt = e => {
          let {
            envMap: t,
            envModel: a,
            onLoad: n,
            position: s = [0, 0, 0]
          } = e;
          const {
            scene: i
          } = a;
          return (0, r.useEffect)((() => {
            i.traverse((e => {
              e instanceof d.Mesh && (e.material.opacity = 0, e.material.transparent = !0, e.material.map && (e.material.map.encoding = d.LinearEncoding, e.material.map.needsUpdate = !0)), "Car_ShadowPlane" !== e.name && "banshee_HD_Glass_SingleLayer" !== e.name && "banshee_HD_Shells_VertexPaint_Cage" !== e.name || (e.renderOrder = 1, e instanceof d.Mesh && (e.material.depthWrite = !0))
            })), i.getObjectByName("Car_Banshee_LOD_VertexColors")?.traverse((e => {
              e.castShadow = !0, e instanceof d.Mesh && (e.material.envMap = t, e.material.envMapIntensity = 1)
            })), i.visible = !1
          }), [a]), (0, r.useEffect)((() => {
            n && n()
          }), []), (0, Qe.jsx)("primitive", {
            position: s,
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            object: i
          })
        };
      var st = a(7151);
      const it = "#898989",
        ot = "#000000",
        lt = ["0.05", "0.15", "0.4"],
        ct = ["0.0", "0.5", "1.0"],
        dt = ["0.299", "0.587", "0.114"],
        ut = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        mt = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= U.sm ? t = 1 / 4 : a <= U.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        pt = {
          bumpMap: mt(),
          map: mt(),
          roughnessMap: mt()
        },
        ft = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: n,
            plateIndex: s,
            position: i = [0, 0, 0],
            width: o = 2
          } = e;
          const {
            state: l,
            setCurrentView: c,
            setPlateTextures: u,
            setRefs: m
          } = Je(), {
            currentView: p,
            isSceneLoaded: f,
            pendingOrder: b,
            plateNumber: g,
            plates: y,
            isLoggedIn: h,
            isMobile: v,
            selectedStyle: w,
            gridScale: E,
            plateTextures: P
          } = l, [S, _] = (0, r.useState)(x(n.style.id)), T = [0, 0, 0], R = [1, 1, 1], [I] = (0, r.useState)(0 === n.index), N = (0, r.useRef)(), O = y.filter((e => {
            let {
              faux: t
            } = e;
            return !t
          })).length >= 30;
          (0, r.useEffect)((() => {
            N.current && 0 === N.current.userData.index && m($.FIRST_PLATE_MESH, N)
          }), [N.current]);
          const k = (0, r.useRef)(),
            L = (0, r.useRef)(null),
            j = (0, r.useCallback)((e => {
              !n.index && O || A(0, p)
            }), [p]),
            M = (0, r.useCallback)((e => {
              var t;
              I && (e.uniforms.saturation = F.saturation, e.uniforms.fade = F.fade, e.uniforms.shaderIndex = F.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == ${H}) {\n            float opacity = mix(0.01, 1.0, saturation);\n            float desaturationOpacity = gl_FragColor.a * (opacity);\n            vec3 desaturationColor = vec3(\n                ${dt[0]},\n                ${dt[1]},\n                ${dt[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, opacity);\n\n        } else if (shaderIndex == ${z}) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=h?lt:ct)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [I, h, b]);
          return (0, r.useEffect)((() => {
            I && (n.plateText = g)
          }), [I ? g : null]), (0, r.useEffect)((() => {
            if (I && S && S.id !== w) {
              const e = x(w);
              _(e)
            }
          }), [I, w]), (0, r.useEffect)((() => {
            F.shaderIndex.value = h ? b ? z : H : z, k.current && (k.current.bumpScale = .015 * E, k.current.needsUpdate = !0)
          }), [k.current, b, h, E]), (0, r.useMemo)((() => {
            if (!f) return null;
            const [e, r, l] = (e => {
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete pt.bumpMap, pt.bumpMap = mt();
                  const a = pt.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= U.sm ? r = 1 / 4 : n <= U.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const i = 5 * r;
                  return ut || (a.filter = `blur(${i}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), ut && st.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * i), new d.CanvasTexture(a.canvas)
                })(a, S),
                n = ((e, t) => {
                  delete pt.map, pt.map = mt();
                  const a = pt.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= U.sm ? r = 1 / 4 : n <= U.md && (r = .5);
                  const s = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new d.CanvasTexture(a.canvas)
                })(a, S),
                s = v ? void 0 : ((e, t) => {
                  delete pt.roughnessMap, pt.roughnessMap = mt();
                  const a = pt.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= U.sm ? r = 1 / 4 : n <= U.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = ot, a.fillStyle = ot, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = it, a.fillStyle = it, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new d.CanvasTexture(a.canvas)
                })(a, S);
              return [r, n, s]
            })(I ? g : n.plateText);
            if (r) {
              const e = [...P];
              e[s] = r, u(e)
            }
            return (0, Qe.jsxs)("mesh", {
              name: fe.LP,
              visible: !0,
              userData: {
                index: s
              },
              position: i,
              rotation: T,
              scale: R,
              ref: N,
              onPointerOver: v ? void 0 : () => {
                h && c() === pe.LIST_PLATES && N.current && j(N.current)
              },
              onPointerOut: v ? void 0 : () => {
                var e;
                h && N.current && (e = N.current, !n.index && O || C(e))
              },
              children: [(0, Qe.jsx)("planeBufferGeometry", {
                args: [o, a, o, a]
              }), (0, Qe.jsx)("meshPhysicalMaterial", {
                onBeforeCompile: 0 === s ? M : void 0,
                alphaMap: n.alphaMap,
                bumpMap: e,
                opacity: 0,
                bumpScale: .015,
                depthTest: !1,
                envMap: t,
                envMapIntensity: ue,
                map: r,
                metalness: .4,
                ref: k,
                roughness: .3,
                roughnessMap: l,
                transparent: !0
              })]
            })
          }), [I ? L.current : void 0, I, h, v, f, n, I ? g : void 0, I ? S : void 0])
        },
        bt = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const [s, o, l, c] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: u
          } = a, {
            gridOptions: m,
            gridPosition: p
          } = t, {
            bottomMarginAsRatio: f,
            columnGap: b,
            columns: g,
            isVertical: y,
            rowGap: h,
            topMarginAsRatio: v
          } = m, {
            state: x,
            realHeightReactive: w,
            setGridScale: E,
            setLastScrollY: P,
            setCurrentView: S
          } = Je(), {
            currentView: _,
            gridScale: R,
            plates: I,
            isLoggedIn: N,
            isMobile: O,
            realHeight: A,
            refs: C,
            currentPlateIndex: k,
            three: j,
            canvasDimensions: M,
            lastScrollY: V,
            isScrollEnabled: D
          } = x, W = (0, r.useRef)(null), {
            camera: Y,
            scene: B,
            gl: U
          } = (0, n.useThree)(), [z, H] = (0, r.useState)(new d.Vector3(p.x, p.y, p.z)), [F, G] = (0, r.useState)(0), [X, q] = (0, r.useState)(0), [Z, K] = (0, r.useState)(null), {
            track: J
          } = (0, i.useGtmTrack)(), Q = {
            view_name: "license plate creator - landing page logged " + (N ? "in" : "out")
          }, [ee, te] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            _ === pe.LIST_PLATES && J({
              ...Q,
              event: "virtualPageview",
              display_type: O ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (N ? "in" : "out")
            })
          }), [_]);
          const ae = (0, r.useCallback)((() => {
            if (M) {
              const {
                width: e,
                height: a
              } = M, r = l * g + b * (g - 1), n = Math.abs(p.z) * Math.tan((0, at.Id)(Y.fov / 2)) * 2, s = t.gridDimensions.margins.meters.top, i = t.gridDimensions.margins.meters.bottom, o = t.gridDimensions.width, c = o / r, d = t.gridDimensions.height, u = d / n;
              q((d - n + s + i).toFixed(4)), E(c), K({
                width: e,
                height: a
              }), (e => {
                pe.LIST_PLATES;
                const t = U.domElement.offsetHeight,
                  a = u * t + v * t + f * t,
                  r = T(),
                  n = C[$.ROOT]?.current;
                n && (n.style.height = `${a}px`), te({
                  canvasHeight: t,
                  rootHeight: a
                }), w(`${Math.round(a)}px`);
                const s = Math.round(l * c / o * (U.domElement.offsetWidth - 2 * r));
                G(s)
              })()
            }
          }), [Y.fov, M, Z, g, _, O, p, I, o, B, v, k, j]);
          (0, r.useEffect)((() => {
            p && H(p), ae()
          }), [p, M]);
          const re = (0, r.useMemo)((() => I?.map((e => {
              if (0 === F) return null;
              const {
                index: t
              } = e, a = -1 * s / 2 + .251953125 * s, r = (y ? t % g * (s + b) : Math.floor(t / g) * (s + b)) + s / 2, n = (y ? Math.floor(t / g) * (o + h) * -1 : t % g * (o + h) * -1) + a;
              return (0, Qe.jsx)(ft, {
                envMap: u,
                height: c,
                position: [r, n, 0],
                plate: e,
                plateIndex: e.index,
                width: l
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [F, I]),
            ne = (0, r.useCallback)((() => {
              const e = C[$.ROOT].current,
                t = document.body;
              e && (e.style.touchAction = "auto"), L() || requestAnimationFrame((() => {
                t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, V)
              }))
            }), [O, V, D]),
            se = (0, r.useCallback)((() => {
              const e = C[$.ROOT].current,
                t = document.body,
                a = window.scrollY;
              P(a), e && (e.style.touchAction = "none"), L() || (window.scrollTo(0, a), requestAnimationFrame((() => {
                t.style.position = "fixed", t.style.top = `-${a}px`
              })))
            }), [O, C, D, V]);
          (0, r.useEffect)((() => {
            D ? ne() : se()
          }), [D]), (0, r.useEffect)((() => () => {
            ne()
          }), []);
          const ie = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (S() === pe.LIST_PLATES || e) {
              const e = C[$.ROOT]?.current;
              if (!e || !ee) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = ee, r = O && I.length <= 2 ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = z.y + X * n;
              W?.current?.position?.set(z.x, Number(s.toFixed(3)), z.z)
            }
          }), [W.current, z, C, X, I, ee, N, O]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ie(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [W.current, N, z, p, A, C, X, ee]), (0, r.useEffect)((() => {
            if (!W.current || !B) return;
            const e = B.getObjectByName("Scene");
            W.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [W.current, B]), (0, r.useMemo)((() => (0, Qe.jsx)("group", {
            name: fe.LP_GRID,
            ref: W,
            position: p,
            scale: R,
            children: 0 !== F && re
          })), [R, re, F])
        },
        gt = e => {
          let {
            name: t,
            color: a,
            intensity: r,
            distance: n,
            decay: s,
            position: i,
            rotation: o,
            mapSize: l,
            ref: c,
            withHelper: d = !1
          } = e;
          return (0, Qe.jsxs)(Qe.Fragment, {
            children: [(0, Qe.jsx)("pointLight", {
              name: t,
              color: a,
              intensity: r,
              distance: n,
              decay: s,
              position: i,
              rotation: o,
              castShadow: !0,
              "shadow-mapSize-height": l,
              "shadow-mapSize-width": 2 * l,
              "shadow-radius": 4,
              "shadow-bias": -35e-5
            }), d && (0, Qe.jsx)("pointLightHelper", {
              light: c,
              sphereSize: 1
            })]
          })
        },
        yt = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, Qe.jsxs)("group", {
            name: "Lights",
            children: [(0, Qe.jsx)(gt, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [q, Z, K],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(gt, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [J, Q, ee],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(gt, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [ae, re, ne],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(gt, {
              name: "Light4",
              color: 16777215,
              intensity: 0,
              distance: 50,
              decay: 2,
              position: [ie, oe, le],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, n.extend)({
        OrbitControls: tt.z
      });
      const ht = {
        leftMargin: 200,
        topMargin: 200,
        columns: 3,
        isVertical: !0,
        columnGap: .1,
        rowGap: .1,
        depth: 5,
        plateHeight: 1,
        plateWidth: 2
      };
      let vt = window.innerWidth;
      const xt = e => {
        let {
          loadedAssets: t
        } = e;
        const {
          state: a,
          setIsSceneLoaded: s,
          setThree: i,
          setGridState: o
        } = Je(), {
          gridState: l,
          isLoggedIn: c,
          is3D: u,
          shouldForce2D: m,
          isSceneLoaded: p,
          plates: f,
          plateStyles: b,
          three: y,
          shouldRenderScene: h,
          refs: v
        } = a, [x, w, P] = (0, n.useThree)((e => {
          let {
            camera: t,
            gl: a,
            scene: r
          } = e;
          return [t, a, r]
        })), S = (0, r.useRef)(), [_, R] = (0, r.useState)(!1), [I, N] = (0, r.useState)(null), O = () => {
          if (w.domElement.style.opacity = 1, w.domElement.style.position = "absolute", w.domElement.style.top = 0, w.domElement.style.left = 0, w.domElement.style.right = 0, w.domElement.style.bottom = 0, w.domElement.style.touchAction = "auto", !p) {
            const e = new d.Vector3,
              t = new d.Vector3;
            S.current.target.copy(t), i({
              scene: P,
              camera: x,
              renderer: w,
              controls: S,
              originalCameraFov: x.fov,
              originalCameraPosition: e,
              originalControlsTarget: t
            })
          }
          s(!0)
        };
        (0, r.useEffect)((() => {
          f.length && I && A(I.width)
        }), [I, f]), (0, r.useEffect)((() => (N({
          height: w.domElement.offsetHeight,
          width: w.domElement.offsetWidth
        }), () => {
          s(!1)
        })), []), (0, r.useEffect)((() => {
          t && f?.length && null !== c && R(!0)
        }), [t, f, c]), (0, r.useEffect)((() => {
          t && t?.environmentMap && b?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
        }), [t, b]);
        const A = (0, r.useCallback)((e => {
          const t = document.getElementById("list-plates-sidebar");
          if (!x || !t || !I) return;
          const a = T(),
            {
              plateWidth: r,
              plateHeight: n,
              columnGap: s,
              rowGap: i,
              depth: l
            } = ht,
            c = l * Math.tan((0, at.Id)(17.5)),
            u = -1 * x.aspect * c,
            m = window.innerWidth < U.lg ? t.offsetHeight + a : a,
            p = a,
            b = w.domElement.offsetWidth,
            g = w.domElement.offsetHeight,
            y = (() => {
              const e = window.innerWidth;
              switch (!0) {
                case e >= U.xxl:
                  return E(11);
                case e >= U.xl:
                  return E(12);
                case e >= U.md:
                  return E(13);
                default:
                  return E(20)
              }
            })(),
            h = p / b,
            v = u - u * h * 2,
            P = m / g,
            S = c - c * P * 2,
            _ = y / g,
            R = new d.Vector3(v, S, -l),
            N = f.length > 1 ? (e => {
              const t = window.innerWidth;
              switch (!0) {
                case t >= U.xxl:
                  return 3;
                case t >= U.lg && t <= 1280:
                  return 1;
                case e >= 600:
                  return 2;
                default:
                  return 1
              }
            })(e) : 1,
            O = Math.ceil(f.length / N),
            A = r * N + s * (N - 1),
            C = n * Math.ceil(f.length / N) + i * (Math.ceil(f.length / N) - 1),
            k = Math.abs(R.z) * Math.tan((0, at.Id)(x.fov / 2)) * 2,
            L = h * (k * (b / g)),
            j = P * k,
            M = _ * k,
            V = Math.abs(2 * R.x),
            D = V / A * C;
          o({
            gridPosition: R,
            gridOptions: {
              ...ht,
              columns: N,
              rows: O,
              topMarginAsRatio: P,
              bottomMarginAsRatio: _,
              leftMarginAsRatio: h
            },
            gridDimensions: {
              margins: {
                meters: {
                  top: j,
                  left: L,
                  bottom: M
                },
                pixels: {
                  top: m,
                  left: p,
                  bottom: y
                }
              },
              height: D,
              width: V
            }
          })
        }), [f, v?.[$.SIDEBAR]?.current, x, I, c]);
        (0, r.useEffect)((() => {
          y && S.current && !y?.controlsInit && i({
            ...y,
            controls: S,
            controlsInit: !0
          })
        }), [S.current, y]), (0, r.useEffect)((() => {
          y?.scene && S?.current && (S.current.enabled = h)
        }), [h, y]), (0, r.useEffect)((() => {
          S?.current && (!m && u || (S.current.enabled = !1))
        }), [m, u]), (0, n.useFrame)((() => {
          h && (S?.current?.update(), w.render(P, x))
        }), 1);
        const C = (0, r.useCallback)(g().debounce((() => {
          const e = v[$.CANVAS_WRAP]?.current;
          if (!e) return;
          const t = v[$.CTA_WRAP]?.current,
            a = window.innerWidth;
          t && a !== vt && (t.classList.remove(rt.visible), vt = a), N({
            width: e.offsetWidth,
            height: e.offsetHeight
          })
        }), 100), [x, v]);
        (0, r.useEffect)((() => (C(), window.addEventListener("resize", C, !0), () => window.removeEventListener("resize", C, !0))), [x, v]);
        const k = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, Qe.jsx)(nt, {
            position: [0, -4.05, -11.76],
            envMap: t.environmentMap,
            envModel: t.environmentModel,
            onLoad: O
          }) : null), [t]),
          L = (0, r.useMemo)((() => (0, Qe.jsx)(yt, {
            baseIntensity: de,
            mapSize: 1024
          })), []),
          j = (0, r.useMemo)((() => (0, Qe.jsx)(bt, {
            gridState: l,
            loadedAssets: t
          })), [l, t]),
          M = (0, r.useMemo)((() => (0, Qe.jsx)("orbitControls", {
            ref: S,
            screenSpacePanning: !0,
            args: [x, w.domElement],
            enableDamping: !0,
            enableZoom: !1,
            enablePan: !1,
            maxPolarAngle: X.plateView.maxPolarAngle,
            minPolarAngle: X.plateView.minPolarAngle,
            maxAzimuthAngle: X.plateView.maxAzimuthAngle,
            minAzimuthAngle: X.plateView.minAzimuthAngle,
            minDistance: -1,
            maxDistance: 100
          })), [x, S, w]);
        return (0, Qe.jsxs)(Qe.Fragment, {
          children: [L, k, _ && l ? j : "", M]
        })
      };
      var wt = a(1722),
        Et = a(4431),
        Pt = a(4903);
      const St = e => {
          let {
            isVisible: t = !1,
            top: a,
            bottom: n,
            onDrag: s,
            onHide: i,
            onShow: o,
            children: l,
            onTap: c,
            drawerY: d,
            mobileSidebarHeight: u
          } = e;
          const {
            state: m
          } = Je(), {
            currentView: p
          } = m, f = (0, r.useRef)(null), b = (0, r.useState)(D), g = d?.get() || 0, y = (0, Et.useSpring)({
            y: t ? g : u,
            config: {
              easing: Et.easings.easeInOutQuart,
              duration: 900
            }
          }), h = (0, r.useRef)(u), x = (0, r.useRef)(0), w = (0, r.useRef)(!1);
          (0, r.useEffect)((() => {
            const e = {
              top: a,
              bottom: n,
              y: y.y,
              offset: h,
              sidebarRef: f
            };
            f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", t ? o(e) : i(e)
          }), [t]);
          const E = (0, r.useCallback)((0, Pt.useDrag)((e => {
              if (p !== pe.CONFIRM_ORDER) {
                if (!w.current)
                  if (h.current = Math.max(a, Math.min(n, y.y.get() + e.delta[1])), x.current = e.movement[1], e.dragging) y.y.set(h.current);
                  else {
                    const e = {
                      y: y.y.get()
                    };
                    if (h.current < a / 2) {
                      const t = v().to(e, {
                        y: a,
                        duration: G.sidebar.mobile.drawerSnap.duration,
                        ease: G.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", b.current = W
                    } else if (h.current > n / 2) {
                      const t = v().to(e, {
                        y: n,
                        duration: G.sidebar.mobile.drawerSnap.duration,
                        ease: G.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", b.current = Y
                    } else {
                      const t = v().to(e, {
                        y: 0,
                        ease: G.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", b.current = D
                    }
                    h.current = y.y.get()
                  } const t = {
                  top: a,
                  bottom: n,
                  y: y.y,
                  offset: h,
                  sidebarRef: f,
                  dragParams: e
                };
                s(t)
              }
            })), [p, a, n]),
            P = () => {
              if (Math.abs(x.current) < 3) {
                w.current = !0, c({
                  drawerStateRef: b
                });
                const e = {
                    y: y.y.get()
                  },
                  t = {};
                b.current === D ? (t.y = a, f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", b.current = W) : (b.current === W || b.current === Y) && (t.y = 0, f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", b.current = D), v().to(e, {
                  y: t.y,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    y.y.set(e.y)
                  },
                  onComplete: () => {
                    w.current = !1, h.current = y.y.get()
                  }
                })
              }
            };
          return (0, r.useMemo)((() => (0, Qe.jsxs)(Et.animated.div, {
            ...E(),
            ref: f,
            style: y ? {
              y: y.y
            } : void 0,
            className: "fd13848ae40e6d65f8e313637e581e34230c",
            children: [(0, Qe.jsx)("hr", {
              className: "fd13848ae40e6d65a91faa3cca1b0eb5ec05",
              onClick: P,
              "aria-hidden": "true"
            }), l]
          })), [y.y.get(), P, l])
        },
        _t = e => {
          let {
            onClick: t
          } = e;
          return (0, Qe.jsx)("button", {
            type: "button",
            onClick: t,
            className: "fd13848ae40e6d65c5cb6a9ee116fb9038cc",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        Tt = () => (0, Qe.jsx)("div", {
          className: "fd13848ae40e6d65cfff519ec96d725939ed",
          "aria-label": "Los Santos Customs"
        }),
        Rt = e => {
          let {
            button: {
              buttonText: t,
              buttonIcon: a,
              isDisabled: r,
              onClick: n
            },
            closeModal: s
          } = e;
          return (0, Qe.jsxs)("button", {
            className: "fd13848ae40e6d65cf5bbe6406012d6190c3",
            disabled: r,
            onClick: e => (e => {
              n && n(e), s(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, Qe.jsx)("p", {
              className: "fd13848ae40e6d65e89f1318679b1cb5b981",
              children: t
            }), a && (0, Qe.jsx)("div", {
              className: "fd13848ae40e6d65bf51cc3522627ca3b7f9"
            })]
          })
        },
        It = e => {
          let {
            icon: t = !1,
            title: a = "Lorem ipsum dolor sit amet consectetur.",
            secondaryText: n = "Lorem ipsum dolor amet, consectetur adipiscing elit.",
            buttons: s = [{
              buttonText: "Lorem Ipsum"
            }, {
              buttonText: "No, go back"
            }],
            showModal: o = !1,
            onClose: l = (() => {})
          } = e;
          const c = (0, r.useRef)(null),
            {
              track: d
            } = (0, i.useGtmTrack)(),
            {
              state: {
                isMobile: u
              }
            } = Je();
          return (0, r.useEffect)((() => {
            o && c.current && (c.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [o]), (0, Qe.jsxs)("dialog", {
            ref: c,
            className: "fd13848ae40e6d65c6fb99519e95f8eba227",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), l()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            children: [t && (0, Qe.jsx)("i", {
              className: "fd13848ae40e6d65c53fac5b3efe1b1fa592"
            }), (0, Qe.jsxs)("div", {
              className: "fd13848ae40e6d65c1c74e2339197a57da41",
              children: [(0, Qe.jsx)("h3", {
                children: a
              }), n && (0, Qe.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, Qe.jsx)("div", {
              className: "fd13848ae40e6d65d9f6892c7824cf07e386",
              children: s.splice(0, 2).map((e => (0, Qe.jsx)(Rt, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (c.current?.close(), void l())
              }, e.buttonText)))
            })]
          })
        },
        Nt = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, Qe.jsxs)("div", {
            className: "fd13848ae40e6d65efe5eaeb5559423002bc",
            children: [(0, Qe.jsx)("p", {
              className: "fd13848ae40e6d65c827db6a5956e0dea5a1",
              children: t
            }), (0, Qe.jsx)("p", {
              className: "fd13848ae40e6d65ee9baad67e97f93898e3",
              children: a
            })]
          })
        },
        Ot = {
          viewPlate: "fd13848ae40e6d65fe4f06af3be1ba7039f2",
          expanded: "fd13848ae40e6d65fb234ef972f920eb5df5",
          plateInfo: "fd13848ae40e6d65baa84d7c179d06b87a6d",
          vehicles: "fd13848ae40e6d65db3b0344524596cc220a",
          deleteBtnContainer: "fd13848ae40e6d65ea0ed621bc121bbaca85",
          deleteBtn: "fd13848ae40e6d65a53ceb90b9f76b2f8842",
          noDeleteClarification: "fd13848ae40e6d65c34f5b7b7d6e07714fec",
          drawerHandle: "fd13848ae40e6d65e9dfcfe6d0e822e998c6",
          sidebar: "fd13848ae40e6d65e71c5fb1062cc71167b7",
          landingPage: "fd13848ae40e6d65e6f4b08bc9a17586535c",
          ui: "fd13848ae40e6d65da92a60b60b090d88478",
          uiBottom: "fd13848ae40e6d65c2f48e5cf94c3ff17567",
          noVehicles: "fd13848ae40e6d65bc3f43fa5e19a47eeb0f"
        },
        At = "visible",
        Ct = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, s.useRockstarTokenPing)(),
            {
              loggedIn: n
            } = (0, i.useRockstarUser)(),
            {
              setCurrentView: o,
              setShouldRenderScene: c,
              setIsExpanded: u,
              setRefs: m,
              setError: p,
              state: f,
              setIsScrollEnabled: b,
              setDeletedPlateIndex: y
            } = Je(),
            {
              accessiblePlates: h,
              currentPlateIndex: x,
              currentPlate: w,
              currentView: E,
              gridScale: _,
              gridState: T,
              is3D: I,
              isExpanded: A,
              isMobile: C,
              isScrollEnabled: L,
              lastScrollY: j,
              plates: M,
              realHeight: V,
              refs: B,
              three: U
            } = f,
            [z, H] = (0, r.useState)(E === pe.VIEW_PLATE),
            [F, X] = (0, r.useState)([]),
            [q, Z] = (0, r.useState)(!1),
            [K, J] = (0, r.useState)(!1),
            Q = (0, r.useRef)(null),
            ee = (0, r.useRef)(null),
            te = (0, r.useRef)(null),
            ae = (0, r.useRef)(null),
            re = (0, r.useRef)(35),
            ne = (0, r.useRef)(null),
            [se, ie] = (0, r.useState)(.4 * window.innerHeight),
            [oe, le] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [de, ue] = (0, r.useState)(0),
            me = (0, r.useRef)(se),
            be = (0, r.useRef)(null),
            [ge, ye] = (0, r.useState)(null),
            he = (0, r.useRef)(null),
            ve = (0, r.useRef)(null),
            xe = (0, r.useRef)(null),
            [we, Ee] = (0, r.useState)(null),
            {
              track: Pe
            } = (0, i.useGtmTrack)(),
            Se = {
              view_name: "license plate creator - view plate"
            },
            _e = E === pe.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            E !== pe.VIEW_PLATE && K && J(!1)
          }), [E, K]);
          const Te = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(x) || (Te.current = x)
          }), [x]);
          const Re = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            E && (Re.current = E), E === pe.VIEW_PLATE && (xe.current = !1)
          }), [E]);
          const Ie = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            _ && (Ie.current = _)
          }), [_]), (0, r.useEffect)((() => {
            h?.[0]?.current && E === pe.NEW_PLATE && Ee(N(h[0].parentElement))
          }), [h, E]);
          const Ne = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            we && (Ne.current = we)
          }), [we]);
          const Oe = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (Re.current !== pe.VIEW_PLATE) return;
            const {
              renderer: r
            } = U;
            k({
              plateIndex: Te.current,
              three: U,
              timeline: e,
              gridScale: t
            }, {
              onStart: () => {
                C && (document.body.style.touchAction = "none"), b(!1)
              },
              onComplete: e => {
                e?.three?.camera && (Q.current = new d.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), ae?.current?.children && ae.current.querySelectorAll("button").forEach((e => {
                  e.style.pointerEvents = "all"
                })), C && (r.domElement.style.touchAction = "none", L && setTimeout((() => {
                  document.body.style.touchAction = "auto"
                }), 200), be.current = N(r.domElement).y)
              },
              tweenPosition: 0,
              isResize: a,
              is3D: I
            })
          }), [U, x, E, T, M, C, I, L]);
          (0, r.useEffect)((() => {
            if (!U?.controls || !z) return;
            const {
              controls: e
            } = U, t = v().timeline({
              duration: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            Oe(t, _, !0)
          }), [_, U]);
          const Ae = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!U?.controls || !h?.[x]) return;
              const {
                controls: a
              } = U, r = e || v().timeline({
                defaults: {
                  duration: 0,
                  ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = R(), s = C && E === pe.CONFIRM_ORDER ? 1.5 : 1, i = !S() || C ? n * _ * s : 1.6 * n * _, l = B[$.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = B[$.CANVAS_WRAP].current, u = h[x].current;
              if (l && c && u && d) {
                const e = O(x, l, Number(V.replace("px", "")), T, C ? void 0 : {
                    x: c.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  n = N(d),
                  s = N(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(n.x),
                    y: a.top + a.height / 2 - Number(n.y)
                  },
                  p = 5 / i,
                  f = C || o() !== pe.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
                  b = {
                    x: m.x - e.x + f,
                    y: m.y - e.y - 80 + window.scrollY
                  },
                  g = {
                    current: 0
                  },
                  y = h.map((e => Number(getComputedStyle(e?.current)?.getPropertyValue("opacity"))));
                r.to(g, {
                  current: 1,
                  ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  onComplete: () => {
                    Ee(N(u.parentElement))
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = g, r = (0, at.t7)(Number(s.x), b.x, a), n = (0, at.t7)(Number(s.y), b.y + (C ? se / -2 : 0), a), i = (0, at.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${i})`, t.isResize || h.forEach(((e, t) => {
                      if (t !== x && e?.current) {
                        const r = (0, at.t7)(y[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r.toFixed(2)
                      }
                    }))
                  }
                }, "<")
              }
            }), [x, T, V, C, E, U, h, B, se, j]),
            Ce = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
              if (!U?.camera || !Q.current) return;
              const {
                camera: t,
                controls: a,
                renderer: r
              } = U;
              if (v().to(t.position, {
                  x: Number(Q.current.x),
                  y: Number(Q.current.y),
                  z: Number(Q.current.z),
                  ease: G.toggleView.camera.ease,
                  duration: G.toggleView.camera.duration,
                  onStart: () => {
                    a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1, a.current.enabled = !1)
                  },
                  onComplete: () => {
                    o(pe.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.enableZoom = !1), me.current = 0, e?.onComplete && e.onComplete()
                  }
                }), C) {
                const e = r.domElement;
                v().to(e.style, {
                  opacity: 1,
                  duration: G.toggleView.reset.duration,
                  ease: G.toggleView.reset.ease
                })
              }
              Pe({
                ...Se,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "view plate",
                view_name: "license plate creator - view plate"
              })
            }), [C, U, Q]);
          (0, r.useEffect)((() => {
            m($.VIEW_PLATE, ne)
          }), [ne.current]), (0, r.useEffect)((() => {
            X(M?.[x]?.vehicles ?? [])
          }), [x, M]), (0, r.useEffect)((() => {
            H(E === pe.VIEW_PLATE)
          }), [E]), (0, r.useEffect)((() => {
            U?.scene && ae?.current && (U.renderer.render(U.scene, U.camera), (e => {
              const {
                scene: t,
                controls: a
              } = U, r = [];
              t.traverse((e => {
                e.name === fe.LP && r.push(e), e.userData.index === Number(x) && (ee.current = e)
              }));
              const n = v().timeline({
                defaults: {
                  duration: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                  ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                },
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              switch (e) {
                case At: {
                  Oe(n, Ie.current, !1);
                  const e = B[$.ROOT]?.current,
                    t = B[$.SIDEBAR]?.current,
                    a = h[x].current,
                    r = B?.[$.CANVAS_WRAP]?.current;
                  e && t && a && r && Ae(n), ve?.current && n.to([ae.current, ve.current, C ? void 0 : te.current], {
                    autoAlpha: 1,
                    duration: G.sidebar.in.duration,
                    ease: G.sidebar.in.ease,
                    delay: G.sidebar.in.delay,
                    onComplete: () => {
                      ve?.current && (ve.current.style.pointerEvents = "all"), te?.current && (te.current.style.pointerEvents = "all")
                    }
                  }, 0), U?.camera && C && !re.current && (re.current = U.camera.fov);
                  break
                }
                default:
                  te.current && v().to(te.current, {
                    pointerEvents: "none"
                  }), ae.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(ae.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), !C && te.current ? (v().to(te.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), v().to(ve.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay,
                    onComplete: () => {
                      ve.current.style.pointerEvents = "none"
                    }
                  })) : v().to(ve.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay,
                    onComplete: () => {
                      ve.current.style.pointerEvents = "none"
                    }
                  }), a?.current && (a.current.minDistance = 0)
              }
            })(z ? At : "hidden"))
          }), [ve.current, U, z]), (0, r.useEffect)((() => {
            if (C && ne.current) {
              const e = ne.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              ue(a - 48 - t), ie(a), le(-1 * (.6 * e - 80))
            }
          }), [C, ne.current]);
          const ke = (0, r.useRef)(null),
            Le = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            ke.current = z
          }), [z]), (0, r.useEffect)((() => {
            Le.current = U
          }), [U]);
          const je = (0, r.useCallback)(g().debounce((() => {
            if (!0 !== ke.current) return;
            const {
              renderer: e
            } = Le.current;
            Re.current === pe.VIEW_PLATE && (P() ? e.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : e.domElement.style.transform = "translateY(0px)", te?.current && (te.current.style.opacity = "1", te.current.style.visibility = "visible", te.current.style.pointerEvents = "all"), Ae({
              isResize: !0
            })), Re.current === pe.CONFIRM_ORDER && (P() ? e.domElement.style.transform = `translateY(${oe/1.5}px)` : e.domElement.style.transform = "translateY(0px)")
          }), 100), [C, z, E, U, oe]);
          (0, r.useEffect)((() => (window.addEventListener("resize", je, !0), () => window.removeEventListener("resize", je, !0))), [C, z, E, U, oe]), (0, r.useEffect)((() => {
            if (!U?.scene) return;
            if (!U?.scene || !h?.[0]?.current) return;
            const {
              scene: e,
              renderer: t,
              camera: a
            } = U, r = [], n = [], s = h[x].current;
            if (e.traverse((e => {
                e.name === fe.LP && e.material ? n[e.userData.index] = e.material : r.push(e.material)
              })), o() === pe.VIEW_PLATE)
              if (I) {
                const r = n[x];
                if (v().to(r, {
                    opacity: 1,
                    delay: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    duration: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                    onStart: () => {
                      c(!0), v().to(s.style, {
                        opacity: 0,
                        duration: G.accessibilePlate.duration,
                        ease: G.accessibilePlate.ease,
                        onUpdate: () => {
                          e.visible = !0, t.render(e, a)
                        }
                      })
                    }
                  }), !xe.current) {
                  const t = e.getObjectByName("Light4"),
                    a = new d.Vector3;
                  ee?.current && (ee.current.getWorldPosition(a), v().to(t.position, {
                    x: ce.x,
                    y: a.y + ce.y,
                    z: ce.z,
                    delay: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    duration: G.plateShimmer.duration,
                    ease: G.plateShimmer.ease
                  }));
                  const r = {
                    current: 0
                  };
                  v().to(r, {
                    current: 1,
                    delay: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    duration: G.plateShimmer.duration,
                    ease: G.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: e
                      } = r, a = (0, at.t7)(0, Math.PI, e);
                      t.intensity = .3 * Math.sin(a), t.color = new d.Color(a, .9 * a, a)
                    }
                  }), xe.current = !0
                }
              } else {
                const e = n[x];
                v().to(s.style, {
                  opacity: 1,
                  duration: G.accessibilePlate.duration,
                  ease: G.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: G.accessibilePlate.duration,
                      ease: G.accessibilePlate.ease,
                      onComplete: () => {
                        c(!1)
                      }
                    })
                  }
                })
              }
          }), [I, C, U]);
          const Me = (0, Qe.jsxs)(Qe.Fragment, {
              children: [!C && (0, Qe.jsx)("hr", {
                className: Ot.drawerHandle,
                onClick: () => {
                  u(!A)
                },
                "aria-hidden": "true"
              }), (0, Qe.jsx)("div", {
                className: Ot.plateInfo,
                children: (0, Qe.jsxs)("section", {
                  className: Ot.vehiclesApplied,
                  children: [(0, Qe.jsx)("label", {
                    htmlFor: "vehicles",
                    className: F.length ? "" : `${Ot.noVehicles}`,
                    children: F.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, Qe.jsx)("div", {
                    className: Ot.vehicles,
                    children: F.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, Qe.jsx)(Nt, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            Ve = (0, r.useCallback)((e => {
              if (!U) return;
              const {
                drawerStateRef: t
              } = e, a = h?.[0].current;
              if (a) {
                const e = N(a.parentElement),
                  {
                    renderer: r,
                    camera: n
                  } = U,
                  s = r.domElement,
                  i = {
                    buttonWrapOpacity: he.current.style.opacity,
                    canvasWrapOpacity: s.style.opacity,
                    canvasHeight: s.offsetHeight,
                    canvasTranslateY: Number(N(s).y),
                    fov: n.fov,
                    accessiblePlateX: Number(e.x),
                    accessiblePlateY: Number(e.y),
                    accessiblePlateScale: Number(e.scale)
                  },
                  o = {};
                t.current === D ? (o.buttonWrapOpacity = 0, o.canvasWrapOpacity = 0, o.canvasHeight = -oe, o.canvasTranslateY = be.current, o.fov = re.current, o.accessiblePlateX = Ne.current.x, o.accessiblePlateY = Ne.current.y, o.accessiblePlateScale = Ne.current.scale, s.style.pointerEvents = "none") : (t.current === W || t.current === Y) && (o.buttonWrapOpacity = 1, o.canvasWrapOpacity = 1, o.canvasHeight = -oe, o.canvasTranslateY = be.current, o.fov = re.current, o.accessiblePlateX = Ne.current.x, o.accessiblePlateY = Ne.current.y, o.accessiblePlateScale = Ne.current.scale, s.style.pointerEvents = "all"), v().to(i, {
                  buttonWrapOpacity: o.buttonWrapOpacity,
                  canvasWrapOpacity: o.canvasWrapOpacity,
                  canvasHeight: o.canvasHeight,
                  canvasTranslateY: o.canvasTranslateY,
                  fov: o.fov,
                  accessiblePlateX: o.accessiblePlateX,
                  accessiblePlateY: o.accessiblePlateY,
                  accessiblePlateScale: o.accessiblePlateScale,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    s.style.opacity = i.canvasWrapOpacity, he.current.style.opacity = i.buttonWrapOpacity, a && (a.parentElement.style.opacity = i.canvasWrapOpacity, a.parentElement.style.transform = `translate(${i.accessiblePlateX}px,\n                            ${i.accessiblePlateY}px) scale(${i.accessiblePlateScale})`), n.fov = i.fov, n.updateProjectionMatrix(), s.style.transform = `translateY(${i.canvasTranslateY}px)`
                  }
                })
              }
            }), [U, se, oe, h]),
            De = (0, r.useCallback)((e => {
              if (!U) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: i,
                renderer: o
              } = U, l = o.domElement, c = h?.[0]?.current, d = -oe + .4 * window.innerHeight - 48;
              if (c)
                if (t.dragging) {
                  const e = (0, at.ii)(0, n, r.get()),
                    o = (0, at.t7)(0, 1, 1 - e);
                  l.style.opacity = o, he.current.style.opacity = o, he.current.style.transform = `translateY(${r.get()}px)`;
                  const d = (0, at.t7)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                    const e = (0, at.ii)(0, s, r.get()),
                      a = (0, at.t7)(re.current, 40, e);
                    i.fov = a;
                    const n = Number(N(l).y) + t.delta[1] / 2;
                    if (l.style.transform = `translateY(${n}px)`, c) {
                      const e = N(c.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(N(c.parentElement).y) + t.delta[1] / 2;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                    i.updateProjectionMatrix()
                  }
                } else {
                  const e = {
                    buttonWrapOpacity: he.current.style.opacity,
                    canvasWrapOpacity: l.style.opacity,
                    fov: i.fov,
                    canvasHeight: l.offsetHeight,
                    canvasTranslateY: Number(N(l).y),
                    accessibilityPlateY: Number(N(c.parentElement).y),
                    accessibilityPlateOpacity: c.parentElement.style.opacity
                  };
                  a.current < oe / 2 ? (l.style.pointerEvents = "none", v().to(e, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    canvasHeight: d,
                    accessibilityPlateOpacity: 0,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = e.canvasWrapOpacity, he.current.style.opacity = e.buttonWrapOpacity, c.parentElement.style.opacity = e.accessibilityPlateOpacity
                    }
                  })) : a.current > s / 2 ? (l.style.pointerEvents = "all", v().to(e, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    fov: 40,
                    canvasHeight: d,
                    canvasTranslateY: Number(be.current) + s / 2,
                    accessibilityPlateY: Number(Ne.current.y) + s / 2,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = e.canvasWrapOpacity, he.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`, c.parentElement.style.transform = `translate(${Ne.current.x}px,\n                                ${e.accessibilityPlateY}px) scale(${Ne.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (l.style.pointerEvents = "all", v().to(e, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    fov: re.current,
                    canvasHeight: -oe,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Ne.current.y),
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = e.canvasWrapOpacity, he.current.style.opacity = e.buttonWrapOpacity, c.parentElement.style.opacity = e.accessibilityPlateOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`;
                      const t = N(c.parentElement),
                        a = Number(t.x),
                        r = Number(t.scale),
                        n = e.accessibilityPlateY;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }))
                }
            }), [U, he.current, oe, h, se, we]),
            We = (0, r.useCallback)((e => {
              const t = B[$.UI]?.current;
              if (!t || !U?.scene) return;
              const {
                scene: a,
                camera: r,
                renderer: n
              } = U, s = n.domElement, {
                y: i,
                sidebarRef: o
              } = e, l = t.offsetHeight, c = {
                mobileSidebarHeight: i.get(),
                opacity: o.current.style.opacity,
                height: s.offsetHeight,
                fov: r.fov
              };
              v().to(c, {
                opacity: 1,
                height: l,
                mobileSidebarHeight: se,
                fov: re.current,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, he.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                },
                onComplete: () => {
                  s.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [B, U, se]),
            Ye = (0, r.useCallback)((e => {
              if (!U?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === ge && ye(r);
              const {
                renderer: n
              } = U;
              t.current.style.pointerEvents = "all";
              const s = {
                mobileSidebarHeight: se,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              v().to(s, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: se / 2,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), he.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, ve.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [ge, U]),
            $e = (0, r.useMemo)((() => C ? (0, Qe.jsx)(St, {
              isVisible: z,
              top: oe,
              bottom: de,
              onTap: Ve,
              onDrag: De,
              onHide: We,
              onShow: Ye,
              mobileSidebarHeight: se,
              children: Me
            }) : (0, Qe.jsx)("div", {
              ref: te,
              className: Ot.sidebar,
              children: Me
            })), [he.current, ve.current, A, se, C, z, B, te.current, F, oe, de]);
          return (0, Qe.jsxs)("div", {
            className: Ot.viewPlate,
            ref: ne,
            children: [(0, Qe.jsx)(It, {
              title: t("lp.modal.delete.title"),
              secondaryText: t("lp.modal.delete.description").replace("{plateText}", w?.plateText ?? ""),
              buttons: [{
                buttonText: t("lp.modal.delete.confirm"),
                onClick: () => {
                  (async () => {
                    try {
                      if (!w || !n) return;
                      const {
                        plateText: e
                      } = w;
                      J(!0);
                      const {
                        error: t,
                        status: r
                      } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        pingBearer: a,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      if (t) throw Object.assign(new Error(""), t);
                      r && y(x), Ce()
                    } catch (e) {
                      p(["api", e])
                    }
                  })(), Pe({
                    ...Se,
                    event: "license_plate_delete_confirm",
                    event_category: "license_plate",
                    event_action: "delete",
                    event_label: "confirm",
                    text: `license plate creator - modal: ${t("lp.modal.delete.confirm").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${t("lp.modal.delete.title").toLowerCase()}`
                  })
                }
              }, {
                buttonText: t("lp.modal.delete.cancel"),
                onClick: () => {
                  Pe({
                    ...Se,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${t("lp.modal.delete.cancel").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${t("lp.modal.delete.title").toLowerCase()}`
                  })
                }
              }],
              showModal: q,
              onClose: () => Z(!1)
            }), $e, (0, Qe.jsxs)("div", {
              ref: ae,
              className: Ot.ui,
              children: [(0, Qe.jsx)(_t, {
                onClick: Ce
              }), (0, Qe.jsx)(Et.animated.div, {
                ref: he,
                className: Ot.uiBottom,
                style: ge ? {
                  y: ge
                } : void 0,
                children: (0, Qe.jsx)(Tt, {})
              })]
            }), (0, Qe.jsxs)("div", {
              className: Ot.deleteBtnContainer,
              ref: ve,
              children: [(0, Qe.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: Ot.deleteBtn,
                disabled: w?.noDelete || K,
                onClick: () => {
                  w?.noDelete || K || (Pe({
                    ...Se,
                    event: "license_plate_delete_click",
                    event_category: "license_plate",
                    event_action: "delete",
                    event_label: "click",
                    text: t("lp.modal.delete.title").toLowerCase()
                  }), Z(!0))
                },
                tabIndex: _e,
                type: "button"
              }), w?.noDelete && (0, Qe.jsx)("label", {
                htmlFor: "nodelete",
                className: Ot.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        kt = (0, l.withTranslations)((e => {
          let {
            plateNumberStatus: {
              isProfane: t,
              isReserved: a,
              isValid: r
            },
            t: n
          } = e;
          const {
            track: s
          } = (0, i.useGtmTrack)(), o = (t ? "lp.create.valid-profane" : a && "lp.create.valid-reserved") || "lp.create.helper";
          return (t || a) && s({
            view_name: "license plate creator - create plate form",
            event: "alert_error",
            event_category: "alert",
            event_action: "error",
            text: o
          }), (0, Qe.jsx)("p", {
            className: "fd13848ae40e6d65fbe02591dfe1e747a935 fd13848ae40e6d65ae971d2586817570fa25 " + (!1 === r ? "fd13848ae40e6d65e98c19a935da3321df72" : ""),
            children: n(o)
          })
        })),
        Lt = {
          lpStyleOption: "fd13848ae40e6d65fdb659ff7c0f2e33fda0",
          selected: "fd13848ae40e6d65c5c9b2d5655a4e556a50",
          lpStyleOptionImage: "fd13848ae40e6d65add00686bede52167de6"
        },
        jt = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: n,
            setSelectedStyle: s
          } = Je(), {
            plates: i,
            selectedStyle: o
          } = n, l = (0, r.useCallback)((() => {
            B.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [i, t]);
          return (0, Qe.jsx)("button", {
            className: [Lt.lpStyleOption, o === t.id ? Lt.selected : ""].join(" "),
            onClick: () => l(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, Qe.jsx)("img", {
              className: Lt.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        Mt = (0, l.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: n
          } = e;
          const {
            loggedIn: o
          } = (0, i.useRockstarUser)(), c = (0, s.useRockstarTokenPing)(), {
            setCurrentView: d,
            setPlateNumber: u,
            setPlateNumberStatus: m,
            setError: p,
            setRefs: f,
            state: b
          } = Je(), {
            currentView: g,
            plateStyles: y,
            plateNumber: h,
            plateNumberStatus: v,
            isMobile: x
          } = b, [w, E] = (0, r.useState)(0), {
            isValid: P
          } = v, S = (0, r.useMemo)((() => h), [h]), {
            track: _
          } = (0, i.useGtmTrack)(), T = {
            view_name: "license plate creator - " + (o ? "create plate form" : "try lp editor")
          }, R = (0, r.useRef)(null), I = (0, r.useRef)(null), N = (0, r.useRef)(null), O = (0, r.useRef)(null), A = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            f($.NEW_PLATE_FORM, N)
          }), [N.current]), (0, r.useEffect)((() => {
            g === pe.NEW_PLATE && document.activeElement === A.current && A.current?.setSelectionRange(w, w)
          }), [w]);
          const C = g === pe.NEW_PLATE ? 0 : -1,
            k = (0, r.useCallback)((() => {
              (async () => {
                if (o && h) try {
                  t(!0);
                  const {
                    error: e,
                    result: a
                  } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/validate", {
                    pingBearer: c,
                    fetchOptions: {
                      method: "POST"
                    },
                    query: {
                      plateText: h
                    }
                  });
                  if (t(!1), e) throw Object.assign(new Error(""), e);
                  const {
                    isMalformed: r,
                    isProfane: n,
                    isReserved: s,
                    isValid: i
                  } = a;
                  m({
                    isValid: i,
                    isMalformed: r,
                    isProfane: n,
                    isReserved: s,
                    statusPlateNumberBasis: h
                  }), i && (d(pe.CONFIRM_ORDER), _({
                    ...T,
                    event: "virtualPageview",
                    display_type: x ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  p(["api", e])
                }
              })()
            }), [o, h]);
          (0, r.useEffect)((() => {
            a && (a.current = k)
          }), [k, a]);
          const L = (0, r.useMemo)((() => y?.map((e => (0, Qe.jsx)(jt, {
            style: e,
            tabIndex: C
          }, e.id)))), [y, g]);
          return (0, Qe.jsxs)("form", {
            ref: N,
            className: "fd13848ae40e6d65c03fbea909908002e429",
            onSubmit: e => {
              e.preventDefault(), A.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, Qe.jsxs)("section", {
              children: [(0, Qe.jsx)("label", {
                ref: R,
                children: n("lp.create.title")
              }), (0, Qe.jsxs)("div", {
                ref: I,
                className: "fd13848ae40e6d65f16c8dbd6025471f52d4",
                children: [(0, Qe.jsx)("i", {
                  className: "" + (!1 === P ? "fd13848ae40e6d65a85e9791453fdcfdfaae" : "")
                }), (0, Qe.jsx)("input", {
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: e => {
                    const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
                    u(t), E(e.target.selectionStart || 0), v.isValid || m({
                      isValid: !0,
                      isMalformed: !1,
                      isProfane: !1,
                      isReserved: !1,
                      statusPlateNumberBasis: h
                    })
                  },
                  placeholder: "LOSANTOS",
                  pattern: "[a-zA-Z0-9_-]{4,10}",
                  type: "text",
                  onKeyDown: e => {
                    "Enter" === e.code && A.current && A.current.blur()
                  },
                  value: S,
                  ref: A
                }), (0, Qe.jsx)(kt, {
                  plateNumberStatus: v
                })]
              })]
            }), (0, Qe.jsx)("hr", {
              className: "fd13848ae40e6d65a88bd201bfcf6276af22"
            }), (0, Qe.jsxs)("section", {
              children: [(0, Qe.jsx)("label", {
                children: n("lp.create.bgselector")
              }), (0, Qe.jsx)("div", {
                ref: O,
                className: "fd13848ae40e6d65f7ff0013c2f3d7d85637",
                children: L
              })]
            })]
          })
        })),
        Vt = e => {
          let {
            buttons: t,
            refName: a = $.SIDEBAR_BUTTONS,
            isLoading: n,
            tabIndex: s
          } = e;
          const i = (0, r.useRef)(null),
            {
              setRefs: o
            } = Je();
          return (0, r.useEffect)((() => {
            o(a, i)
          }), [i.current]), (0, Qe.jsx)("div", {
            className: "fd13848ae40e6d65bc9136e36a81df297fc4",
            ref: i,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, Qe.jsx)("button", {
                className: [a ? "fd13848ae40e6d65a60bffb039fc99fb5f49" : "", n ? "fd13848ae40e6d65e057143f90593c9abfd0" : ""].join(" ").trim(),
                disabled: a,
                onClick: r,
                type: "button",
                tabIndex: s,
                "aria-label": t,
                children: t
              }, t)
            }))
          })
        },
        Dt = "fd13848ae40e6d65f6d40457decba9555a4f",
        Wt = "fd13848ae40e6d65c8d97f812f2cf3e6fef7",
        Yt = (0, l.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            is3DToggle: a = !1,
            t: n
          } = e;
          const [s, o] = (0, r.useState)(!1), [l, c] = (0, r.useState)(!1), {
            state: d,
            setRefs: u
          } = Je(), {
            currentView: m,
            isMobile: p,
            is3D: f,
            shouldForce2D: b
          } = d, {
            track: g
          } = (0, i.useGtmTrack)(), y = {
            view_name: "license plate creator - create plate form"
          }, h = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            a || u($.TOGGLE_VIEW_BUTTON, h)
          }), [h.current, a]), (0, r.useEffect)((() => {
            m === pe.NEW_PLATE && b && o(!1)
          }), [b, m]), (0, r.useEffect)((() => {
            a || (m === pe.NEW_PLATE ? s ? (g({
              ...y,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop",
              view_name: "license plate creator - car view"
            }), g({
              ...y,
              event: "license_plate_preview_car",
              event_category: "license_plate",
              event_action: "preview_car",
              text: n("lp.create.carview").toLowerCase()
            })) : g({
              ...y,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop"
            }) : o(!1))
          }), [s, m]);
          const v = {
              carViewToggle: {
                plateView: n("lp.create.plateview"),
                carView: n("lp.create.carview")
              },
              dimensionToggle: {
                threeDimensions: "3D",
                twoDimensions: "2D"
              }
            },
            x = a ? "Switch between 2D and 3D views" : "Switch between viewing the plate on a car and by itself";
          return (0, Qe.jsxs)("button", {
            ref: h,
            type: "button",
            role: "switch",
            "aria-checked": a ? f : s,
            className: "fd13848ae40e6d65df4382d03fcd3bc980fa",
            onClick: () => {
              t({
                onStart: () => {
                  o(!s)
                }
              })
            },
            tabIndex: "0",
            "aria-label": x,
            children: [(0, Qe.jsx)("div", {
              className: Dt,
              children: (0, Qe.jsx)("p", {
                className: l ? Wt : "",
                children: a ? v.dimensionToggle.twoDimensions : v.carViewToggle.plateView
              })
            }), (0, Qe.jsx)("div", {
              className: Dt,
              children: (0, Qe.jsx)("p", {
                className: l ? Wt : "",
                children: a ? v.dimensionToggle.threeDimensions : v.carViewToggle.carView
              })
            }), (0, Qe.jsx)("span", {
              className: "fd13848ae40e6d65b2453a03192c6ddc36d4"
            })]
          })
        })),
        $t = {
          orderConfirmed: "fd13848ae40e6d65cf7e5e0923b8256a2323",
          visible: "fd13848ae40e6d65f49f2ce6c0c2c3078641",
          background: "fd13848ae40e6d65f6e84201dac89879fbbd",
          content: "fd13848ae40e6d65fe4db11268b7cc20a4a9",
          secondaryWrap: "fd13848ae40e6d65ac46f0f3e93dcb543606",
          contentHeading: "fd13848ae40e6d65cb52c60771f4dedd7631",
          plateRedemptionInstructions: "fd13848ae40e6d65e2d9a88190e1e3de5bb6",
          backToPlatesButton: "fd13848ae40e6d65b7ac25abe12168157046",
          hover: "fd13848ae40e6d65d6fcaa3a9d4229d26b6c",
          ctaText: "fd13848ae40e6d65d2ccddbaa18bbe20a426",
          isWindows: "fd13848ae40e6d65b236dd886c9982522324"
        },
        Bt = (0, l.withTranslations)((e => {
          let {
            isVisible: t,
            vehicleModel: a,
            t: n,
            top: s,
            drawerY: o,
            tabIndex: l
          } = e;
          const {
            setCurrentView: c,
            setIsExpanded: d,
            setRefs: u,
            state: m
          } = Je(), {
            currentView: p,
            isExpanded: f,
            refs: b,
            three: g,
            isMobile: y
          } = m, x = (0, r.useRef)(null), w = (0, r.useRef)(null), E = (0, r.useRef)(null), P = (0, r.useRef)(null), S = (0, r.useRef)(null), {
            track: T
          } = (0, i.useGtmTrack)(), R = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u($.ORDER_BG, S)
          }), [S.current]);
          const I = b[$.CONFIRM_CONTENT]?.current,
            N = b[$.CONFIRM_SIDEBAR]?.current,
            O = b[$.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            A = b[$.CONFIRM_SIDEBAR_BUTTONS]?.current,
            C = b[$.NEW_PLATE_SIDEBAR]?.current,
            k = b[$.CANVAS_WRAP]?.current,
            L = b[$.SIDEBAR_BUTTONS]?.current,
            j = S.current,
            M = x.current,
            V = E.current,
            D = P.current,
            W = w.current,
            Y = b[$.UI]?.current,
            B = b[$.NEW_PLATE_UI]?.current,
            U = b[$.SIDEBAR]?.current,
            z = b[$.ACCESSIBLE_PLATE_GRID]?.current,
            H = (0, r.useCallback)((() => {
              c(pe.LIST_PLATES), T({
                ...R,
                event: "cta_return_page",
                event_category: "cta",
                event_action: "return_page",
                text: n("lp.success.cta").toLowerCase()
              })
            }), []);
          return (0, r.useEffect)((() => {
            if (!g) return;
            const {
              renderer: e,
              camera: a,
              originalCameraPosition: r,
              originalCameraFov: n,
              controls: i,
              originalControlsTarget: l
            } = g;
            if (!(e && j && I && z)) return;
            const c = _();
            if (f && p === pe.LIST_PLATES) {
              const t = v().timeline({
                defaults: {
                  ease: G.transaction.confirmOrder.ease,
                  duration: G.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (v().to([e.domElement, U], {
                  autoAlpha: 1,
                  ease: G.transaction.fade.landingPage.ease,
                  duration: G.transaction.fade.landingPage.duration
                }), v().to(z, {
                  autoAlpha: 1,
                  ease: G.transaction.fade.landingPage.ease,
                  duration: G.transaction.fade.landingPage.duration,
                  delay: .3
                }), y) {
                const e = {
                  opacity: 1
                };
                t.to(e, {
                  drawerHeight: s,
                  opacity: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const t = s - o.get();
                    j.style.transform = `translateY(${t}px)`, j.style.opacity = e.opacity
                  }
                }, 0)
              } else t.to(j, {
                autoAlpha: 0
              }, 0).to([M, V, D], {
                autoAlpha: 0
              }), t.to(I, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), t.to(j, {
                x: "-100vw"
              }, 0), v().set([C, B], {
                x: 0
              }), v().set(N, {
                left: "revert"
              })
            } else if (t) {
              const t = v().timeline({
                defaults: {
                  ease: G.transaction.confirmOrder.ease,
                  duration: G.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), v().set(k, {
                    x: 0
                  }), g.scene.traverse((e => {
                    e.name === fe.LP && 0 === e.userData.index && e.material && (e.material.opacity = 0)
                  })), a.position.set(r.x, r.y, r.z), i?.current && (i.current.minDistance = 0, i.current.target.set(l.x, l.y, l.z)), Y && (a.fov = n, a.updateProjectionMatrix(), F.saturation.value = 0)
                },
                onStart: () => {
                  v().set(W, {
                    height: 0
                  })
                }
              });
              if (t.to(e.domElement, {
                  autoAlpha: 0
                }, 0), t.to(z, {
                  autoAlpha: 0,
                  onComplete: () => {
                    z.style.transform = "none"
                  }
                }, 0), t.to(M, {
                  autoAlpha: 1,
                  ease: h.Power1.easeIn,
                  duration: .3
                }, "<1").to(W, {
                  height: "auto",
                  ease: h.Power2.easeInOut,
                  duration: .4
                }, "<1").to([V, D], {
                  autoAlpha: 1,
                  ease: h.Power1.easeIn,
                  duration: .3,
                  stagger: .1
                }, "<0.2"), y) {
                if (o) {
                  v().set(j, {
                    y: s - o.get(),
                    zIndex: 100,
                    pointerEvents: "all",
                    visibility: "visible"
                  });
                  const e = {
                    drawerHeight: o.get(),
                    y: s,
                    lerp: 0
                  };
                  t.to(e, {
                    y: 0,
                    drawerHeight: s,
                    lerp: 1,
                    onUpdate: () => {
                      j.style.transform = `translateY(${s-e.drawerHeight}px`, o.set(e.drawerHeight), A && (A.style.pointerEvents = "none", A.style.opacity = String(1 - e.lerp), A.style.transform = `translateY(${100*e.lerp}%)`), O && (O.style.pointerEvents = "none", O.style.opacity = String(1 - e.lerp)), t.to(L, {
                        autoAlpha: 0
                      }, "<"), j.style.opacity = e.lerp
                    }
                  }, 0)
                }
              } else t.to(I, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(N, {
                left: 100 - c + "vw"
              }, 0).to(j, {
                x: 0
              }, 0).to(j, {
                autoAlpha: 1
              }, 0).to(N, {
                autoAlpha: 0,
                ease: G.transaction.fade.out.ease,
                duration: G.transaction.fade.out.duration
              }, 0).set(j, {
                pointerEvents: "all"
              });
              T({
                ...R,
                event: "virtualPageview",
                display_type: y ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, S.current, g, p, y ? o : void 0]), (0, Qe.jsx)("div", {
            className: [$t.orderConfirmed, f ? $t.visible : ""].join(" "),
            children: (0, Qe.jsx)("div", {
              ref: S,
              className: $t.background,
              children: (0, Qe.jsxs)("div", {
                className: $t.content,
                children: [(0, Qe.jsx)("h1", {
                  ref: x,
                  className: $t.contentHeading,
                  children: n("lp.success.title")
                }), (0, Qe.jsxs)("div", {
                  ref: w,
                  className: $t.secondaryWrap,
                  children: [(0, Qe.jsx)("p", {
                    ref: E,
                    className: $t.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: n("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, Qe.jsx)("button", {
                    ref: P,
                    type: "button",
                    className: $t.backToPlatesButton,
                    onClick: () => {
                      H()
                    },
                    "aria-label": n("lp.success.cta"),
                    tabIndex: l,
                    children: (0, Qe.jsx)("span", {
                      className: $t.ctaText,
                      children: n("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        })),
        Ut = (0, l.withTranslations)((e => {
          let {
            t,
            top: a,
            drawerY: n
          } = e;
          const {
            state: o,
            setError: c,
            setCurrentView: d,
            setIsOrderConfirmed: u,
            setPendingOrder: m,
            setRefs: p,
            setSelectedVehicle: f
          } = Je(), {
            currentView: b,
            selectedVehicle: g,
            pendingOrder: h,
            plates: w,
            three: E,
            isMobile: P,
            refs: S,
            vehicles: T,
            selectedStyle: R,
            isOrderConfirmed: I,
            isExpanded: O
          } = o, {
            selectedCharacterTuple: A
          } = (0, i.useRockstarUserState)(), {
            loggedIn: C
          } = (0, i.useRockstarUser)(), k = (0, s.useRockstarTokenPing)(), L = b === pe.CONFIRM_ORDER, [j, M] = (0, r.useState)(O), [V, D] = (0, r.useState)(!1), W = (0, r.useRef)(null), Y = (0, r.useRef)(null), {
            track: B
          } = (0, i.useGtmTrack)(), U = {
            view_name: "license plate creator - confirm order"
          }, z = b === pe.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p($.CONFIRM_SIDEBAR, W)
          }), [W.current]), (0, r.useEffect)((() => {
            p($.CONFIRM_CONTENT, Y)
          }), [Y.current]);
          const H = S[$.ORDER_BG]?.current,
            F = S[$.CONFIRM_CONTENT]?.current,
            X = S[$.CONFIRM_SIDEBAR]?.current,
            q = S[$.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            Z = S[$.CONFIRM_SIDEBAR_BUTTONS]?.current,
            K = S[$.ACCESSIBLE_PLATE_GRID]?.current,
            J = S[$.NEW_PLATE_SIDEBAR]?.current,
            Q = S[$.CANVAS_WRAP]?.current,
            ee = S[$.SIDEBAR_BUTTONS]?.current,
            te = S[$.NEW_PLATE_UI]?.current;

          function ae() {
            if (B({
                ...U,
                event: "virtualPageview",
                display_type: P ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(E?.camera && F && X && Q && H && K)) return;
            const e = {
                ease: P ? G.sidebar.mobile.drawer.ease : G.transaction.confirmOrder.ease,
                duration: P ? G.sidebar.mobile.drawer.duration : G.transaction.confirmOrder.duration
              },
              t = v().timeline({
                defaults: {
                  ...e
                },
                onComplete: () => {
                  M(!1)
                }
              });
            v().set(ee, {
              pointerEvents: "all"
            }), P ? t.to(ee, {
              autoAlpha: 1
            }, "<") : (t.to(X, {
              autoAlpha: 0
            }, 0), b === pe.NEW_PLATE && t.to(J, {
              autoAlpha: 1
            }, "<"), t.to([J, Q, te], {
              x: 0
            }, "<"), t.to(F, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            b === pe.LIST_PLATES && j && ae()
          }), [b, j]);
          const re = (0, r.useCallback)((() => {
            (async () => {
              try {
                const e = x(R);
                if (!(C && g && e?.name && A)) return;
                const [t, a] = A, {
                  index: r
                } = g, n = {
                  vehicleIndex: r,
                  plateText: w?.[0]?.plateText,
                  plateStyle: e.name
                };
                D(!0);
                const {
                  error: s
                } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: k,
                  fetchOptions: {
                    body: JSON.stringify(n),
                    method: "POST"
                  },
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (D(!1), s) throw Object.assign(new Error(""), s);
                u(!0);
                const {
                  error: i,
                  result: o
                } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: k,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (i) throw Object.assign(new Error(""), i);
                o[`character${a}Pending`] && m(o)
              } catch (e) {
                c(["api", e])
              }
            })()
          }), [C, A, w?.[0]?.plateText, g, V, R]);
          (0, r.useEffect)((() => {
            if (b !== pe.CONFIRM_ORDER || I) {
              if (P && !I) {
                v().set(ee, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                v().to(e, {
                  lerp: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    Z && (Z.style.opacity = "" + (1 - e.lerp), Z.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), v().to(X, {
                  autoAlpha: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }), q && (q.style.pointerEvents = "none", v().to(q.style, {
                  opacity: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(E?.camera && F && X && Q && H && K)) return;
              let e = _();
              P || 100 !== e || (e = 0);
              const t = v().timeline({
                  defaults: {
                    ease: G.transaction.confirmOrder.ease,
                    duration: G.transaction.confirmOrder.duration
                  },
                  onComplete: () => {
                    M(!0)
                  }
                }),
                a = {
                  autoAlpha: 1
                },
                r = {
                  autoAlpha: 0
                };
              if (v().set(ee, {
                  pointerEvents: "none"
                }), P && (a.ease = G.sidebar.mobile.drawer.ease, a.duration = G.sidebar.mobile.drawer.duration, a.delay = G.sidebar.mobile.drawer.duration / 2, r.ease = G.sidebar.mobile.drawer.ease, r.duration = G.sidebar.mobile.drawer.duration, t.to(X, a, 0), K)) {
                const e = {
                    current: 0
                  },
                  a = {
                    start: Number(getComputedStyle(K).opacity),
                    end: 1
                  };
                t.to(e, {
                  current: 1,
                  delay: G.sidebar.mobile.drawer.duration / 2,
                  onUpdate: () => {
                    const {
                      current: t
                    } = e, r = (0, at.t7)(a.start, a.end, t);
                    K.style.opacity = r
                  }
                }, 0)
              }
              if (P) {
                if (Z) {
                  Z.style.pointerEvents = "all", v().set(Z.style, {
                    visibility: "visible"
                  });
                  const e = {
                    lerp: 0
                  };
                  v().to(e, {
                    lerp: 1,
                    duration: G.sidebar.mobile.drawer.duration,
                    ease: G.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Z.style.opacity = e.lerp, Z.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                q && (q.style.pointerEvents = "all", v().set(q.style, {
                  visibility: "visible"
                }), v().to(q.style, {
                  opacity: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                })), t.to(ee, {
                  autoAlpha: 0
                }, "<")
              } else {
                if (J && Q && (t.to([J, Q, te], {
                    x: -1 * e + "vw"
                  }, "<"), K)) {
                  const {
                    x: a,
                    y: r,
                    scale: n
                  } = N(K), s = {
                    x: {
                      start: Number(a),
                      end: Number(a) + -e / 100 * window.innerWidth
                    },
                    y: {
                      start: Number(r),
                      end: Number(r)
                    },
                    scale: {
                      start: n,
                      end: 1
                    }
                  }, i = {
                    current: 0
                  };
                  t.to(i, {
                    current: 1,
                    onUpdate: () => {
                      const {
                        current: e
                      } = i, t = `translate(${(0,at.t7)(s.x.start,s.x.end,e)}px, ${(0,at.t7)(s.y.start,s.y.end,e)}px) scale(${(0,at.t7)(s.scale.start,s.scale.end,e)})`;
                      K.style.transform = t
                    }
                  }, "<")
                }
                t.to(F, {
                  x: 100 - e + "vw"
                }, "<"), t.to(X, {
                  autoAlpha: 1
                }, "<"), t.to(J, {
                  autoAlpha: 0
                }, "<"), t.set(H, {
                  x: `${-100+e}vw`
                }, "<")
              }
            }
            j && !L && I && u(!1)
          }), [E, b, P, Z, I, q, _()]), (0, r.useEffect)((() => {
            if (b !== pe.CONFIRM_ORDER && T?.length) {
              let e = T[0];
              h && (e = T.find((e => {
                let {
                  manufacturer: t,
                  name: a
                } = e;
                return t === h.manufacturerName && a === h.vehicleName
              }))), f(e)
            }
          }), [T, h]);
          const ne = (0, r.useCallback)((e => {
              if (!T?.length) return;
              const t = T.find((t => {
                let {
                  id: a
                } = t;
                return a === Number(e.target.value)
              })) ?? null;
              f(t), B({
                ...U,
                event: "license_plate_select_vehicle",
                event_category: "license_plate",
                event_action: "select_vehicle",
                position: e.target.selectedIndex
              })
            }), [T]),
            se = (0, Qe.jsx)(Vt, {
              refName: $.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: V,
                onClick: () => {
                  d(pe.NEW_PLATE), ae(), B({
                    ...U,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: t("lp.confirm.cancel").toLowerCase()
                  })
                }
              }, {
                buttonText: V ? (0, Qe.jsx)(y.LoadingAnimation, {}) : t("lp.confirm.next"),
                isDisabled: !C || !g || V,
                onClick: () => {
                  re(), B({
                    ...U,
                    event: "license_plate_create_confirm",
                    event_category: "license_plate",
                    event_action: "create",
                    event_label: "confirm",
                    text: t("lp.confirm.next").toLowerCase()
                  })
                }
              }],
              isLoading: V,
              tabIndex: z
            });
          let ie;
          return P && (ie = q ? (0, wt.createPortal)(se, q) : null), (0, Qe.jsx)("div", {
            className: "fd13848ae40e6d65be866f32eab934537631",
            "aria-hidden": b !== pe.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, Qe.jsxs)("div", {
              className: "fd13848ae40e6d65a09e457783ba70411b6a",
              ref: Y,
              children: [(0, Qe.jsx)("span", {}), (0, Qe.jsxs)("div", {
                className: "fd13848ae40e6d65bdb2b5b5d19f7f44f6d7",
                ref: W,
                children: [(0, Qe.jsxs)("form", {
                  className: "fd13848ae40e6d65e6e66ce12aa2d8d190ef",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, Qe.jsxs)("div", {
                    className: "fd13848ae40e6d65e5564bc6d848a683537c",
                    children: [(0, Qe.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, Qe.jsxs)("section", {
                      children: [(0, Qe.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, Qe.jsx)("div", {
                        className: "fd13848ae40e6d65e7c896dad22669956489",
                        children: (0, Qe.jsx)("select", {
                          value: g?.id ?? "null",
                          onChange: ne,
                          required: !0,
                          tabIndex: z,
                          "aria-label": t("lp.confirm.selector"),
                          children: T?.map(((e, t) => {
                            let {
                              id: a,
                              manufacturer: r,
                              name: n
                            } = e;
                            return (0, Qe.jsx)("option", {
                              value: a,
                              children: `${r} ${n}`
                            }, t)
                          }))
                        })
                      }), (0, Qe.jsx)("p", {
                        className: "fd13848ae40e6d65d566190b33aa234ddd80",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, Qe.jsx)("p", {
                    className: "fd13848ae40e6d65d6bae7e0151e183d3293",
                    children: t("lp.confirm.info")
                  })]
                }), P ? ie : se]
              }), (0, Qe.jsx)(Bt, {
                drawerY: n,
                top: a,
                isVisible: I,
                vehicleModel: `${g?.manufacturer} ${g?.name}`,
                tabIndex: I ? z : -1
              })]
            })
          })
        })),
        zt = "visible",
        Ht = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setShouldRenderScene: a,
            setShouldForce2D: n,
            state: s,
            setCurrentView: o,
            setLastView: l,
            setIsScrollEnabled: c,
            setIsExpanded: u,
            setRefs: m
          } = Je(), {
            loggedIn: p
          } = (0, i.useRockstarUser)(), {
            accessiblePlates: f,
            currentView: b,
            gridScale: g,
            gridState: h,
            loginUrl: x,
            is3D: w,
            isMobile: E,
            isExpanded: _,
            isScrollEnabled: T,
            lastScrollY: I,
            lastView: A,
            pendingOrder: C,
            plateNumber: L,
            plateNumberStatus: j,
            refs: M,
            three: V,
            realHeight: B,
            shouldForce2D: U
          } = s, [z, H] = (0, r.useState)(0), [q, Z] = (0, r.useState)(!1), [K, re] = (0, r.useState)(!1), [ne, ie] = (0, r.useState)(.4 * window.innerHeight), [oe, le] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), be = (0, r.useRef)(ne), [ge, ye] = (0, r.useState)(null), [he, ve] = (0, r.useState)(!1), [xe, we] = (0, r.useState)(null), Ee = (0, r.useRef)(null), Pe = (0, r.useRef)(null), Se = (0, r.useRef)(null), _e = (0, r.useRef)(null), Te = (0, r.useRef)(!1), Re = (0, r.useRef)(!1), [Ie, Ne] = (0, r.useState)(null), Oe = (0, r.useRef)(Ie), Ae = (0, r.useRef)(null), Ce = (0, r.useRef)(null), ke = (0, r.useRef)(null), Le = (0, r.useRef)(null), je = (0, r.useRef)(null), Me = (0, r.useRef)(null), Ve = (0, r.useRef)(null), De = (0, r.useRef)(null), We = (0, r.useRef)(null), Ye = (0, r.useRef)(null), $e = (0, r.useRef)(null), Be = (0, r.useRef)(null), {
            track: Ue
          } = (0, i.useGtmTrack)(), ze = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            f?.[0]?.current && b === pe.NEW_PLATE && we(N(f[0].parentElement))
          }), [f, b]);
          const He = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            xe && (He.current = xe)
          }), [xe]), (0, r.useEffect)((() => {
            const e = b === pe.NEW_PLATE || !(!P() || b !== pe.CONFIRM_ORDER);
            q !== e && Z(e)
          }), [b, P()]);
          const Fe = (0, r.useCallback)((e => {
            if (!V) return;
            const {
              scene: t,
              camera: a,
              controls: r,
              renderer: n
            } = V, s = t.getObjectByName("Scene");
            if (!s) return;
            const i = R(),
              o = E && b === pe.CONFIRM_ORDER ? 1.5 : 1,
              l = !S() || E ? i * g * o : 1.6 * i * g,
              u = [];
            t.traverse((e => {
              0 === e.userData.index && ($e.current = e, s.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === fe.LP && u.push(e)
            }));
            const m = v().timeline({
              defaults: {
                duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
              },
              onStart: () => {
                r.current.minDistance = 0
              }
            });
            switch (e) {
              case zt: {
                const e = M[$.CTA_SHADER]?.current;
                if (!r.current || !e) return;
                const t = new d.Vector3;
                $e?.current && $e.current.getWorldPosition(t);
                const s = M[$.ROOT].current,
                  i = document.getElementById("list-plates-sidebar"),
                  g = M[$.CANVAS_WRAP].current,
                  y = f?.[0].current;
                s && (i || E) && y && g && b === pe.NEW_PLATE && Xe(m);
                const h = {
                  cameraPosition: {
                    start: (new d.Vector3).copy(a.position),
                    end: new d.Vector3(t.x, t.y, t.z + l)
                  },
                  controlsTarget: {
                    start: (new d.Vector3).copy(r.current.target),
                    end: t
                  },
                  plateOpacity: u.map(((e, t) => ({
                    start: e.material.opacity,
                    end: 0 === t && w ? 1 : 0
                  }))),
                  firstPlateSaturation: {
                    start: F.saturation.value,
                    end: 1
                  },
                  firstPlateOpacity: {
                    start: A === pe.LIST_PLATES ? .2 : 1,
                    end: 1
                  },
                  cameraFov: {
                    start: a.fov,
                    end: E && b === pe.CONFIRM_ORDER ? 1.2 * _e.current : _e.current
                  },
                  ctaShaderOpacity: {
                    start: e.style.opacity,
                    end: 0
                  }
                };
                if (E && y) {
                  const e = N(y.parentElement);
                  h.translateY = {
                    start: b === pe.NEW_PLATE ? Be?.current?.offsetHeight : 0,
                    end: b === pe.NEW_PLATE ? 0 : Be?.current?.offsetHeight
                  }, h.startingDrawerHeight = Ee.current ? Ee.current.get() : 0, h.startingCanvasHeight = Number(N(n.domElement).y), h.canvasWidth = n.domElement.offsetWidth, h.canvasY = {
                    start: Number(N(n.domElement).y),
                    end: ne / -2
                  }, h.canvasYConfirmOrder = {
                    start: Number(N(n.domElement).y),
                    end: oe / 1.5
                  }, h.accessiblePlateGridYConfirmOrder = {
                    start: Number(e.y),
                    end: Number(e.y) + (h.canvasYConfirmOrder.end - h.canvasYConfirmOrder.start)
                  }, h.accessiblePlateGridXConfirmOrder = {
                    start: Number(e.x),
                    end: Number(e.x)
                  }, h.accessiblePlateGridScaleConfirmOrder = {
                    start: Number(N(y.parentElement).scale),
                    end: Number(N(y.parentElement).scale) / o
                  }, h.drawerHeight = {
                    start: Ee.current ? Ee.current.get() : 0,
                    end: b === pe.NEW_PLATE ? 0 : oe / (_ ? 1 : 2)
                  }, h.cameraFov = {
                    start: a.fov,
                    end: b === pe.CONFIRM_ORDER ? 1.2 * _e.current : _e.current
                  }, h.canvasOpacity = {
                    start: n.domElement.style.opacity,
                    end: 1
                  }
                }
                const x = {
                  current: 0
                };
                if (b === pe.NEW_PLATE) {
                  const t = y.querySelector("canvas");
                  m.to(x, {
                    current: 1,
                    duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                    onUpdate: () => {
                      const {
                        current: s
                      } = x, i = h.cameraPosition.start.clone().lerp(h.cameraPosition.end, s);
                      a.position.set(i.x, i.y, i.z);
                      const o = h.controlsTarget.start.clone().lerp(h.controlsTarget.end, s);
                      r.current.target.x = o.x, r.current.target.y = o.y, r.current.target.z = o.z, w && u.forEach(((e, t) => {
                        e.material && (e.material.opacity = (0, at.t7)(h.plateOpacity[t].start, h.plateOpacity[t].end, s))
                      }));
                      const l = (0, at.t7)(h.firstPlateSaturation.start, h.firstPlateSaturation.end, s);
                      if (F.saturation.value = l, p && !C && t) {
                        const e = !!C,
                          a = (0, at.t7)(h.firstPlateOpacity.start, h.firstPlateOpacity.end, s);
                        t.style.filter = `saturate(${l})${!e&&` opacity(${a})`}`
                      }
                      if (e) {
                        const t = (0, at.t7)(h.ctaShaderOpacity.start, h.ctaShaderOpacity.end, s);
                        e.style.opacity = t
                      }
                      if (h.cameraFov.start !== h.cameraFov.end && a.updateProjectionMatrix(), E) {
                        if (Be.current) {
                          const e = (0, at.t7)(h.translateY.start, h.translateY.end, s);
                          Be.current.style.transform = `translateY(${e}px)`, Be.current.style.opacity = String(s), Be.current.style.pointerEvents = "all"
                        }
                        Ee.current && Ee.current.set((0, at.t7)(h.drawerHeight.start, h.drawerHeight.end, s));
                        const e = (0, at.t7)(h.canvasY.start, h.canvasY.end, s);
                        n.domElement.style.transform = `translateY(${e}px)`
                      }
                    },
                    onStart: () => {
                      E ? document.body.style.touchAction = "none" : c(!1)
                    },
                    onComplete: () => {
                      b === pe.NEW_PLATE && (s && (s.style.touchAction = "none"), Se.current = new d.Vector3(a.position.x, a.position.y, a.position.z), Me?.current?.children && Me.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      })), E && (n.domElement.style.touchAction = "none", T && setTimeout((() => {
                        c(!1), document.body.style.touchAction = "auto"
                      }), 200), Pe.current = N(n.domElement).y), t && t.classList.remove(rt.newOrder))
                    }
                  }, 0), E && m.to(M[$.NEW_PLATE_FORM].current, {
                    autoAlpha: 1,
                    duration: G.sidebar.mobile.drawer.duration,
                    ease: G.sidebar.mobile.drawer.ease,
                    delay: G.sidebar.mobile.drawer.duration / 2,
                    onStart: () => {
                      Be.current && (Be.current.style.pointerEvents = "all", Be.current.style.visibility = "visible")
                    }
                  }, 0), m.to([Me.current, E ? void 0 : je.current], {
                    autoAlpha: 1,
                    duration: G.sidebar.in.duration,
                    ease: G.sidebar.in.ease,
                    delay: G.sidebar.in.delay,
                    onStart: () => {
                      Ve.current && (Ve.current.style.transform = "translateY(0px)")
                    },
                    onComplete: () => {
                      E || v().set([je.current, M[$.SIDEBAR_BUTTONS]?.current], {
                        pointerEvents: "all"
                      }), Me.current && Me.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      }))
                    }
                  }, "<")
                } else b === pe.CONFIRM_ORDER && (!0 === Oe.current && st(), E && (m.to(x, {
                  current: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = x;
                    if (Be.current) {
                      Ee.current && Ee.current.set((0, at.t7)(h.drawerHeight.start, h.drawerHeight.end, e));
                      const t = h.cameraPosition.start.clone().lerp(h.cameraPosition.end, e);
                      a.position.set(t.x, t.y, t.z), n.domElement.style.opacity = (0, at.t7)(h.canvasOpacity.start, h.canvasOpacity.end, e), Me?.current?.style && (Me.current.style.opacity = String(1 - e));
                      const r = (0, at.t7)(h.translateY.start, h.translateY.end, e);
                      Be.current.style.transform = `translateY(${r}px)`, Be.current.style.pointerEvents = "none";
                      const s = (0, at.t7)(h.canvasYConfirmOrder.start, h.canvasYConfirmOrder.end, e);
                      n.domElement.style.transform = `translateY(${s}px)`;
                      const i = (0, at.t7)(h.accessiblePlateGridXConfirmOrder.start, h.accessiblePlateGridXConfirmOrder.end, e),
                        o = (0, at.t7)(h.accessiblePlateGridYConfirmOrder.start, h.accessiblePlateGridYConfirmOrder.end, e),
                        l = (0, at.t7)(h.accessiblePlateGridScaleConfirmOrder.start, h.accessiblePlateGridScaleConfirmOrder.end, e);
                      y?.parentElement && (y.parentElement.style.transform = `translate(${i}px,\n                                        ${o}px) scale(${l})`)
                    }
                  }
                }, 0), m.to(M[$.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (Me.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(Me.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), E && Be?.current) {
                  const e = {
                    transform: 0,
                    translateY: N(Be.current).y,
                    drawerHeight: Ee.current ? Ee.current.get() : 0,
                    fov: a.fov
                  };
                  v().to(e, {
                    translateY: Be?.current?.offsetHeight,
                    duration: G.sidebar.mobile.drawer.duration,
                    drawerHeight: .4 * window.innerHeight,
                    fov: _e.current,
                    ease: G.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Be.current && (Ee.current && Ee.current.set(e.drawerHeight), Be.current.style.transform = `translateY(${e.translateY}px)`, Be.current.style.pointerEvents = "none", a.fov = e.fov, a.updateProjectionMatrix())
                    }
                  })
                }
                if (b === pe.CONFIRM_ORDER ? _ || 1 == !Oe.current && v().to(a.position, {
                    x: Number(Se.current.x),
                    y: Number(Se.current.y),
                    z: 0,
                    ease: G.transaction.confirmOrder.ease,
                    duration: G.transaction.confirmOrder.duration
                  }) : v().to(je.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), b === pe.LIST_PLATES) {
                  const e = M[$.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                r?.current && (r.current.minDistance = 0), Oe.current = !1, Ne(!1)
            }
          }), [b, V, M, E, C, g, h, I, A, B, ge, oe, Ee.current, Oe.current, w]);
          (0, r.useEffect)((() => {
            M?.[$.SIDEBAR_BUTTONS]?.current && (Be.current = M[$.SIDEBAR_BUTTONS].current)
          }), [M]), (0, r.useEffect)((() => {
            m($.NEW_PLATE, We)
          }), [We.current]), (0, r.useEffect)((() => {
            m($.CONFIRM_SIDEBAR_BUTTONS_PORTAL, De)
          }), [De.current]), (0, r.useEffect)((() => {
            m($.NEW_PLATE_SIDEBAR, je)
          }), [je.current]), (0, r.useEffect)((() => {
            m($.NEW_PLATE_UI, Me)
          }), [Me.current]);
          const Ge = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Ge.current = V
          }), [V]);
          const Xe = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!V?.controls || !f?.[0]) return;
              const {
                controls: a
              } = V, r = e || v().timeline({
                defaults: {
                  duration: 0,
                  ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = R(), s = E && b === pe.CONFIRM_ORDER ? 1.5 : 1, i = !S() || E ? n * g * s : 1.6 * n * g, l = M[$.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = M[$.CANVAS_WRAP].current, u = f[0].current;
              if (l && (E || c) && u && d) {
                const e = O(0, l, Number(B.replace("px", "")), h, E ? void 0 : {
                    x: c.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  n = N(d),
                  s = N(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(n.x),
                    y: a.top + a.height / 2 - Number(n.y)
                  },
                  p = 5 / i,
                  b = E || o() !== pe.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
                  g = {
                    x: m.x - e.x + b,
                    y: m.y - e.y - 80 + (A === pe.CONFIRM_ORDER ? I : window.scrollY)
                  },
                  y = {
                    current: 0
                  },
                  v = f.map((e => Number(getComputedStyle(e?.current).getPropertyValue("opacity")))),
                  x = A === pe.CONFIRM_ORDER ? G.transaction.confirmOrder.ease : G.clickPlate.ease,
                  w = A === pe.CONFIRM_ORDER ? G.transaction.confirmOrder.duration : G.clickPlate.duration,
                  P = E ? G.sidebar.mobile.drawer.duration : w,
                  S = t ? 0 : P;
                r.to(y, {
                  current: 1,
                  ease: E ? G.sidebar.mobile.drawer.ease : x,
                  duration: S,
                  onComplete: () => {
                    we(N(u.parentElement)), ve(!0)
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = y, r = (0, at.t7)(Number(s.x), g.x, a), n = (0, at.t7)(Number(s.y), g.y + (E ? ne / -2 : 0), a), i = (0, at.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${i})`, t || f.forEach(((e, t) => {
                      if (0 !== t && e?.current) {
                        const r = (0, at.t7)(v[t], 0, a);
                        e.current.style.opacity = r
                      }
                    }))
                  }
                }, "<")
              }
            }), [h, B, E, b, ne, V, f, M, A, ke?.current, I]),
            qe = (0, r.useCallback)((() => {
              if (!V?.controls) return;
              const {
                controls: e,
                scene: t
              } = V;
              if (o() !== pe.NEW_PLATE && o() !== pe.CONFIRM_ORDER || Xe(null, !0), Oe.current) {
                let e;
                t.traverse((t => {
                  0 === t.userData.index && (e = t)
                })), v().to(e?.material, {
                  duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                  ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  opacity: 1
                })
              } else {
                const t = v().timeline({
                  duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                  ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  onStart: () => {
                    e?.current && (e.current.minDistance = 0)
                  }
                });
                et(t, g, !0)
              }
              const {
                renderer: a
              } = Ge.current;
              q ? (b === pe.NEW_PLATE && (P() ? a.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : a.domElement.style.transform = "translateY(0px)", je?.current && (je.current.style.opacity = "1", je.current.style.visibility = "visible", je.current.style.pointerEvents = "all")), b === pe.CONFIRM_ORDER && P() && (a.domElement.style.transform = `translateY(${oe/1.5}px)`)) : b !== pe.CONFIRM_ORDER || P() || (a.domElement.style.transform = "translateY(0px)")
            }), [P(), q, b, V, je.current, g]),
            Ze = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!$e?.current || !Se.current || !V?.camera) return;
              Ue({
                ...ze,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "new plate",
                view_name: "license plate creator - new plate form"
              }), Ue({
                ...ze,
                event: "cta_return_page",
                event_category: "cta",
                event_action: "return_page",
                event_label: "(close button)",
                text: "(close button)"
              });
              const {
                camera: a,
                scene: r,
                controls: n,
                renderer: s
              } = V, i = r.getObjectByName("Scene"), o = r.getObjectByName("Light1"), l = r.getObjectByName("Light2"), c = r.getObjectByName("Light3"), d = s.domElement;
              v().timeline({
                defaults: {
                  ease: G.toggleView.camera.ease,
                  duration: t ? 0 : G.toggleView.camera.duration
                },
                onStart: () => {
                  n?.current && (n.current.minDistance = 2, n.current.enableZoom = !1, n.current.enabled = !1)
                },
                onComplete: () => {
                  n?.current && (n.current.minDistance = 0, n.current.maxPolarAngle = X.plateView.maxPolarAngle, n.current.minPolarAngle = X.plateView.minPolarAngle, n.current.maxAzimuthAngle = X.plateView.maxAzimuthAngle, n.current.minAzimuthAngle = X.plateView.minAzimuthAngle, n.current.enableZoom = !1), be.current = 0, e.onComplete && e.onComplete()
                }
              }).to(a.position, {
                x: Number(Se.current.x),
                y: Number(Se.current.y),
                z: Number(Se.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to($e.current.rotation, {
                x: 0
              }, "<").to(o, {
                intensity: 0
              }, "<").to([l, c], {
                intensity: de
              }, "<").to(l.position, {
                x: J,
                y: Q,
                z: ee
              }, "<").to(c.position, {
                x: ae
              }, "<").to($e.current.material, {
                envMapIntensity: ue
              }, "<").set($e.current, {
                receiveShadow: !1
              }, .4).set($e.current.material, {
                depthTest: !1
              }, "<"), i.traverse((e => {
                e.material && v().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : G.toggleView.fadeOut.duration,
                  ease: G.toggleView.fadeOut.ease
                })
              }))
            }), [$e.current, Se.current, V]);
          (0, r.useEffect)((() => {
            V?.scene && !_e.current && (_e.current = V.camera.fov)
          }), [_e.current, V]), (0, r.useEffect)((() => {
            V?.scene && Be.current && Fe(q ? zt : "hidden")
          }), [V, E, q, b === pe.CONFIRM_ORDER, A]), (0, r.useEffect)((() => {
            if (Be?.current && E && We.current) {
              const e = We.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              H(a - 48 - Be.current.offsetHeight - t), ie(a), le(-1 * (.6 * e - 80)), Be.current.style.transform = `translateY${Be.current.offsetHeight}px`
            }
          }), [Be.current, E, We.current]), (0, r.useEffect)((() => {
            Ce.current || (Ce.current = b), ke.current || (ke.current = Ce.current), b && (ke.current = Ce.current, l(Ce.current), Ce.current = b), b === pe.LIST_PLATES && Oe.current && Ze({}, !0), b === pe.NEW_PLATE && (Le.current = !1)
          }), [b]), (0, r.useEffect)((() => {
            const e = E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              t = he ? 0 : e;
            if (!V?.scene) return;
            if (!V?.scene || !f?.[0]?.current) return;
            const {
              scene: r
            } = V, n = [], s = [], i = f[0].current;
            if (r.traverse((e => {
                e.name === fe.LP && e.material ? s[e.userData.index] = e.material : n.push(e.material)
              })), o() === pe.NEW_PLATE)
              if (w) {
                const e = s[0];
                if (v().to(e, {
                    opacity: 1,
                    delay: t,
                    duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                    onStart: () => {
                      a(!0), v().to(i.style, {
                        opacity: 0,
                        duration: G.accessibilePlate.duration,
                        ease: G.accessibilePlate.ease,
                        onComplete: () => {
                          Re.current = !1
                        }
                      })
                    }
                  }), !Le.current) {
                  const e = r.getObjectByName("Light4"),
                    a = new d.Vector3;
                  $e?.current && ($e.current.getWorldPosition(a), v().to(e.position, {
                    x: ce.x,
                    y: a.y + ce.y,
                    z: ce.z,
                    delay: t,
                    duration: G.plateShimmer.duration,
                    ease: G.plateShimmer.ease
                  }));
                  const n = {
                    current: 0
                  };
                  v().to(n, {
                    current: 1,
                    delay: t,
                    duration: G.plateShimmer.duration,
                    ease: G.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: t
                      } = n, a = (0, at.t7)(0, Math.PI, t);
                      e.intensity = .3 * Math.sin(a), e.color = new d.Color(a, .9 * a, a)
                    }
                  }), Le.current = !0
                }
              } else {
                const e = s[0];
                v().to(i.style, {
                  opacity: 1,
                  duration: G.accessibilePlate.duration,
                  ease: G.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: G.accessibilePlate.duration,
                      ease: G.accessibilePlate.ease,
                      onComplete: () => {
                        a(!1), Re.current = !1
                      }
                    })
                  }
                })
              }
          }), [w, E, V, f]), (0, r.useEffect)((() => {
            if (he && V?.camera) {
              const {
                camera: e
              } = V, t = w ? 0 : .5;
              w || v().to(e.position, {
                duration: t,
                x: Number(Se.current.x),
                y: Number(Se.current.y),
                z: Number(Se.current.z)
              })
            }
          }), [w, V]);
          const Ke = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            g && (Ke.current = g), qe()
          }), [g]);
          const et = (0, r.useCallback)((function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (Ce.current !== pe.NEW_PLATE && Ce.current !== pe.CONFIRM_ORDER) return;
              const {
                renderer: r
              } = V;
              k({
                plateIndex: 0,
                three: V,
                timeline: e,
                gridScale: t
              }, {
                onComplete: e => {
                  e?.three?.camera && (Se.current = new d.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), Me?.current?.children && Me.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), E && (r.domElement.style.touchAction = "none")
                },
                tweenPosition: 0,
                isResize: a
              })
            }), [V, b]),
            tt = (0, r.useCallback)((e => {
              if (!V?.scene) return;
              const {
                drawerStateRef: t
              } = e, a = f?.[0]?.current;
              if (a) {
                const {
                  renderer: e,
                  camera: r
                } = V, n = e.domElement, s = N(a.parentElement), i = {
                  buttonWrapOpacity: Ve.current.style.opacity,
                  canvasWrapOpacity: n.style.opacity,
                  fov: r.fov,
                  canvasTranslateY: Number(N(n).y),
                  accessiblePlateX: Number(s.x),
                  accessiblePlateY: Number(s.y),
                  accessiblePlateScale: Number(s.scale)
                }, o = {}, l = Me.current.querySelectorAll("button");
                t.current === D ? (o.buttonWrapOpacity = 0, o.canvasWrapOpacity = 0, o.fov = _e.current, o.canvasTranslateY = Pe.current, o.accessiblePlateX = He.current.x, o.accessiblePlateY = He.current.y, o.accessiblePlateScale = He.current.scale, n.style.pointerEvents = "all", l.forEach((e => {
                  e.style.pointerEvents = "none"
                }))) : (t.current === W || t.current === Y) && (o.buttonWrapOpacity = 1, o.canvasWrapOpacity = 1, o.fov = _e.current, o.canvasTranslateY = Pe.current, o.accessiblePlateX = He.current.x, o.accessiblePlateY = He.current.y, o.accessiblePlateScale = He.current.scale, n.style.pointerEvents = "all", l.forEach((e => {
                  e.style.pointerEvents = "all"
                }))), v().to(i, {
                  buttonWrapOpacity: o.buttonWrapOpacity,
                  canvasWrapOpacity: o.canvasWrapOpacity,
                  fov: o.fov,
                  accessiblePlateX: o.accessiblePlateX,
                  accessiblePlateY: o.accessiblePlateY,
                  accessiblePlateScale: o.accessiblePlateScale,
                  canvasTranslateY: o.canvasTranslateY,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    n.style.opacity = i.canvasWrapOpacity, Ve.current.style.opacity = i.buttonWrapOpacity, a && (a.parentElement.style.opacity = i.canvasWrapOpacity, a.parentElement.style.transform = `translate(${i.accessiblePlateX}px,\n                            ${i.accessiblePlateY}px) scale(${i.accessiblePlateScale})`), r.fov = i.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${i.canvasTranslateY}px)`
                  }
                })
              }
            }), [V, ne, f, Pe.current]),
            nt = (0, r.useCallback)((e => {
              if (!V?.scene || !Be.current) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: i,
                renderer: o
              } = V, l = o.domElement, c = f?.[0]?.current;
              if (c)
                if (t.dragging) {
                  const e = (0, at.ii)(0, n, r.get()),
                    o = (0, at.t7)(0, 1, 1 - e);
                  l.style.opacity = o;
                  const d = (0, at.t7)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, Ve.current.style.opacity = o, Me.current.querySelectorAll("button").forEach((e => {
                      e.style.pointerEvents = r.get() >= 0 ? "all" : "none"
                    })), Ve.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                    const e = (0, at.ii)(0, s, r.get()),
                      a = Oe.current ? 60 : 40,
                      n = (0, at.t7)(_e.current, a, e);
                    i.fov = n, i.updateProjectionMatrix();
                    const o = Number(N(l).y) + t.delta[1] / 2;
                    if (l.style.transform = `translateY(${o}px)`, c) {
                      const e = N(c.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(N(c.parentElement).y) + t.delta[1] / 2;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }
                } else {
                  const e = Number(N(l).y),
                    t = {
                      buttonWrapOpacity: Ve.current.style.opacity,
                      canvasWrapOpacity: l.style.opacity,
                      fov: i.fov,
                      canvasTranslateY: e,
                      accessibilityPlateY: Number(N(c.parentElement).y),
                      accessibilityPlateOpacity: c.parentElement.style.opacity
                    };
                  a.current < n / 2 ? (Me.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(t, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    accessibilityPlateOpacity: 0,
                    fov: Oe.current ? 60 : 40,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = t.canvasWrapOpacity, c.parentElement.style.opacity = t.accessibilityPlateOpacity, Ve.current.style.opacity = t.buttonWrapOpacity
                    }
                  })) : a.current > s / 2 ? (l.style.pointerEvents = "all", Me.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), v().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateY: Number(He.current.y) + s / 2,
                    canvasTranslateY: Number(Pe.current) + s / 2,
                    fov: Oe.current ? 60 : 40,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = t.canvasWrapOpacity, Ve.current.style.opacity = t.buttonWrapOpacity, i.fov = t.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${t.canvasTranslateY}px)`, c.parentElement.style.transform = `translate(${He.current.x}px,\n                                ${t.accessibilityPlateY}px) scale(${He.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (l.style.pointerEvents = "all", Me.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), v().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(He.current.y),
                    fov: _e.current,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      if (l.style.opacity = t.canvasWrapOpacity, Ve.current.style.opacity = t.buttonWrapOpacity, c.parentElement.style.opacity = t.accessibilityPlateOpacity, i.fov = t.fov, i.updateProjectionMatrix(), a.current > 0) {
                        l.style.transform = `translateY(${t.canvasTranslateY}px)`;
                        const e = N(c.parentElement),
                          a = Number(e.x),
                          r = Number(e.scale),
                          n = t.accessibilityPlateY;
                        c.parentElement.style.transform = `translate(${a}px,\n                                    ${n}px) scale(${r})`
                      }
                    }
                  }))
                }
            }), [V, Be.current, ne, f, Pe.current, xe]),
            st = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                delay: 0,
                onComplete: null
              };
              if (!V?.scene || !V?.controls?.current || !$e || !$e?.current || Te.current) return;
              const {
                scene: t,
                camera: a,
                controls: r
              } = V, s = e.delay || 0, i = t.getObjectByName("Scene"), o = t.getObjectByName("Light1"), l = t.getObjectByName("Light2"), c = t.getObjectByName("Light3"), u = R(), m = !S() || E ? u * g : 1.6 * u * g;
              if (i && r && !Te.current && !Re.current) {
                const t = [];
                if (i.traverse((e => {
                    e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), t.push(e.material))
                  })), Oe.current) {
                  const n = new d.Vector3;
                  if ($e.current.getWorldPosition(n), setTimeout((() => {
                      $e.current.receiveShadow = !1, $e.current.material.depthTest = !1
                    }), 400), !Te.current) {
                    const s = {
                      camPositionX: a.position.x,
                      camPositionY: a.position.y,
                      camPositionZ: a.position.z,
                      controlsTargetX: r.current.target.x,
                      controlsTargetY: r.current.target.y,
                      controlsTargetZ: r.current.target.z,
                      plateRotationX: $e.current.rotation.x,
                      light1Intensity: o.intensity,
                      light2Intensity: l.intensity,
                      light2PositionX: l.position.x,
                      light2PositionY: l.position.y,
                      light2PositionZ: l.position.z,
                      light3Intensity: c.intensity,
                      light3PositionX: c.position.x,
                      envMapIntensity: $e?.current?.material?.envMapIntensity
                    };
                    v().to(s, {
                      camPositionX: n.x,
                      camPositionY: n.y,
                      camPositionZ: n.z + m,
                      controlsTargetX: n.x,
                      controlsTargetY: n.y,
                      controlsTargetZ: n.z,
                      plateRotationX: 0,
                      light1Intensity: 0,
                      light2Intensity: de,
                      light2PositionX: J,
                      light2PositionY: Q,
                      light2PositionZ: ee,
                      light3Intensity: de,
                      light3PositionX: ae,
                      envMapIntensity: ue,
                      duration: G.toggleView.camera.duration,
                      ease: G.toggleView.camera.ease,
                      onStart: () => {
                        r.current.minDistance = 2, r.current.enableZoom = !1, M[$.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = v().timeline({
                          duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                          ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                        });
                        et(e, g)
                      },
                      onUpdate: () => {
                        $e.current.rotation.x = s.plateRotationX, $e.current?.material && ($e.current.material.envMapIntensity = s.envMapIntensity), o.intensity = s.light1Intensity, l.intensity = s.light2Intensity, l.position.set(s.light2PositionX, s.light2PositionY, s.light2PositionZ), c.intensity = s.light3Intensity, c.position.x = s.light3PositionX
                      },
                      onComplete: () => {
                        Te.current = !1, i.visible = !1, r.current.maxPolarAngle = X.plateView.maxPolarAngle, r.current.minPolarAngle = X.plateView.minPolarAngle, r.current.maxAzimuthAngle = X.plateView.maxAzimuthAngle, r.current.minAzimuthAngle = X.plateView.minAzimuthAngle, M[$.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all", e.onComplete && e.onComplete()
                      }
                    });
                    const d = {
                      opacity: 1
                    };
                    v().to(d, {
                      opacity: 0,
                      duration: G.toggleView.fadeOut.duration,
                      ease: G.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        t.forEach((e => {
                          e.opacity = d.opacity
                        }))
                      }
                    })
                  }
                } else if (!Te.current) {
                  U && n(!1);
                  const e = {
                    camPositionY: a.position.y,
                    camPositionZ: a.position.z,
                    controlsTargetZ: r.current.target.z,
                    plateRotationX: $e.current.rotation.x,
                    light1Intensity: o.intensity,
                    light2Intensity: l.intensity,
                    light2PositionX: l.position.x,
                    light2PositionY: l.position.y,
                    light2PositionZ: l.position.z,
                    light3Intensity: c.intensity,
                    light3PositionX: c.position.x,
                    envMapIntensity: $e?.current?.material?.envMapIntensity
                  };
                  v().to(e, {
                    camPositionY: a.position.y + 2.5 * g,
                    camPositionZ: a.position.z + (E ? 24 * g : 12 * g),
                    controlsTargetZ: r.current.target.z - 5 * g,
                    plateRotationX: -.16,
                    light1Intensity: de,
                    light2Intensity: .2,
                    light2PositionX: te.x,
                    light2PositionY: te.y,
                    light2PositionZ: te.z,
                    light3Intensity: de,
                    light3PositionX: se.x,
                    envMapIntensity: me,
                    duration: G.toggleView.camera.duration,
                    delay: s,
                    ease: G.toggleView.camera.ease,
                    onStart: () => {
                      const e = E ? 52 * g : 26 * g;
                      r.current.enableZoom = !0, r.current.maxPolarAngle = X.carView.maxPolarAngle, r.current.minPolarAngle = X.carView.minPolarAngle, r.current.maxAzimuthAngle = X.carView.maxAzimuthAngle, r.current.minAzimuthAngle = X.carView.minAzimuthAngle, r.current.maxDistance = e, i.visible = !0, M[$.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none"
                    },
                    onUpdate: () => {
                      a.position.set(a.position.x, e.camPositionY, e.camPositionZ), r.current.target.z = e.controlsTargetZ, $e.current.rotation.x = e.plateRotationX, $e.current?.material && ($e.current.material.envMapIntensity = e.envMapIntensity), o.intensity = e.light1Intensity, l.intensity = e.light2Intensity, l.position.set(e.light2PositionX, e.light2PositionY, e.light2PositionZ), c.intensity = e.light3Intensity, c.position.x = e.light3PositionX
                    },
                    onComplete: () => {
                      Te.current = !1, r.current.minDistance = E ? 20 * g : 10 * g, M[$.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                    }
                  });
                  const d = {
                    opacity: 0
                  };
                  v().to(d, {
                    opacity: 1,
                    duration: G.toggleView.fadeOut.duration,
                    ease: G.toggleView.fadeOut.ease,
                    delay: s,
                    onUpdate: () => {
                      t.forEach((e => {
                        e.opacity = d.opacity
                      }))
                    }
                  }), v().to($e.current, {
                    duration: 0,
                    delay: .4 + s,
                    onComplete: () => {
                      $e.current.receiveShadow = !0, $e.current.material.depthTest = !0
                    }
                  })
                }
                Oe.current = !Oe.current
              }
            }), [V, Oe.current, $e, $e?.current, g, U, w]),
            it = (0, r.useCallback)((e => {
              if (!(V?.scene && Be?.current && je.current && Ve.current)) return;
              const t = M[$.UI]?.current;
              if (t) {
                const {
                  scene: a,
                  camera: r,
                  renderer: n
                } = V, s = n.domElement, {
                  y: i,
                  sidebarRef: o
                } = e, l = t.offsetHeight, c = {
                  submitOrderTranslateY: 0,
                  mobileSidebarHeight: i.get(),
                  opacity: o.current.style.opacity,
                  fov: r.fov,
                  height: s.offsetHeight
                };
                v().to(c, {
                  opacity: 1,
                  height: l,
                  mobileSidebarHeight: ne,
                  fov: _e.current,
                  submitOrderTranslateY: Be.current.offsetHeight,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, Be.current.style.transform = `translateY(${c.submitOrderTranslateY}px)`, Ve.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                  },
                  onComplete: () => {
                    s.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [M, je.current, Be.current, V, ne]),
            ot = e => {
              if (!V?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e, {
                sidebar: n
              } = G, {
                duration: s,
                ease: i
              } = n.mobile.drawer;
              ye(r), Ee.current = r, t.current.style.pointerEvents = "all";
              const o = {
                mobileSidebarHeight: ne,
                opacity: t.current.style.opacity
              };
              v().to(o, {
                opacity: 1,
                duration: s,
                ease: i,
                onUpdate: () => {
                  t.current.style.opacity = o.opacity, t.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`, a.current = o.mobileSidebarHeight, r.set(a.current), Ve.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`
                }
              })
            },
            lt = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = j, r = K ? (0, Qe.jsx)(y.LoadingAnimation, {}) : t("lp.create.next");
              return (0, Qe.jsx)(Vt, {
                buttons: [{
                  buttonText: p ? r : t("lp.create.signin"),
                  isDisabled: !!p && (K || !L || !e && L === a),
                  onClick: async () => {
                    Ae?.current?.(), p || (Ue({
                      ...ze,
                      event: "cta_login",
                      event_category: "cta",
                      event_action: "login",
                      event_label: "sidebar",
                      text: t("lp.create.signin").toLowerCase(),
                      link_url: x
                    }), window.location.href = x)
                  }
                }],
                isLoading: K,
                isVisible: [pe.NEW_PLATE, pe.CONFIRM_ORDER].includes(b),
                tabIndex: b === pe.NEW_PLATE ? 0 : -1
              })
            }), [L, b, p, q, j, Ae.current, K]),
            ct = (0, r.useCallback)((() => {
              u(!_)
            }), [_]),
            dt = (0, r.useMemo)((() => E ? (0, Qe.jsxs)(St, {
              bottom: z,
              isVisible: q,
              onDrag: nt,
              onHide: it,
              onShow: ot,
              onTap: tt,
              top: oe,
              drawerY: ge,
              mobileSidebarHeight: ne,
              children: [(0, Qe.jsx)(Mt, {
                validateFnRef: Ae,
                setIsLoading: re
              }), (0, Qe.jsx)(Ut, {
                top: oe,
                drawerY: ge
              })]
            }) : (0, Qe.jsxs)("div", {
              ref: je,
              className: "fd13848ae40e6d65b3a55298ca91e26e9b33",
              children: [(0, Qe.jsx)("hr", {
                className: "fd13848ae40e6d65da92b2273d68a97e2a78",
                onClick: () => {
                  ct()
                },
                "aria-hidden": "true"
              }), (0, Qe.jsx)(Mt, {
                validateFnRef: Ae,
                setIsLoading: re
              }), lt]
            })), [L, z, _, E, q, je.current, oe, ge, K, ne]);
          return (0, Qe.jsxs)("div", {
            ref: We,
            className: "fd13848ae40e6d65caf43b491abf74b06503",
            children: [dt, (0, Qe.jsxs)("div", {
              ref: Me,
              className: "fd13848ae40e6d65b36e465c1f658cb32f90",
              children: [(0, Qe.jsx)(_t, {
                onClick: () => {
                  Ze({
                    onComplete: () => {
                      ve(!1), o(pe.LIST_PLATES)
                    }
                  })
                }
              }), (0, Qe.jsxs)(Et.animated.div, {
                ref: Ve,
                className: "fd13848ae40e6d65a180f06a190df3e373ca",
                style: ge ? {
                  y: ge
                } : void 0,
                children: [(0, Qe.jsx)(Yt, {
                  is3DToggle: !0,
                  onToggleView: () => {
                    Re.current || Te.current || (Oe.current && !U ? st({
                      onComplete: () => {
                        n(!U), Ne(!1)
                      }
                    }) : n(!U), Re.current = !0)
                  }
                }), (0, Qe.jsx)(Yt, {
                  is3DToggle: !1,
                  onToggleView: e => {
                    if (!Te.current && !Re.current) {
                      const t = E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                        a = w ? 0 : t;
                      "function" == typeof e?.onStart && e.onStart(), st({
                        delay: a
                      }), Te.current = !0
                    }
                  }
                })]
              })]
            }), (0, Qe.jsxs)("div", {
              ref: Ye,
              className: "fd13848ae40e6d65b04b9fd973ab818135a5",
              children: [E && lt, E && (0, Qe.jsx)("div", {
                className: "fd13848ae40e6d65b1913cd00efde6aa558c",
                ref: De
              })]
            })]
          })
        })),
        Ft = "fd13848ae40e6d65fb5e7986231a3b2e1905",
        Gt = "fd13848ae40e6d65eade32da81574d4b6ca7",
        Xt = "fd13848ae40e6d65f09ca3dd068fb4f0cd0a",
        qt = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, i.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = Je(), {
            plates: o,
            isMobile: l
          } = s, c = (0, r.useRef)(null), d = (0, r.useRef)(null), u = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            n($.SIDEBAR, c)
          }), [c.current, l]), (0, r.useEffect)((() => {
            n($.PLATE_COUNT, u)
          }), [u.current, l]), (0, r.useEffect)((() => {
            n($.SIDEBAR_BUTTONS_LOADING_ANIMATION, d)
          }), [d.current]), (0, Qe.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: c,
            className: "fd13848ae40e6d65e5e3abc19ffd80dd3bcf",
            children: [(0, Qe.jsx)("div", {
              className: "fd13848ae40e6d65d3fd7c681c3a0e077bfd",
              children: (0, Qe.jsx)(Tt, {})
            }), (0, Qe.jsxs)("div", {
              className: "fd13848ae40e6d65e34b13392437e67c024e",
              children: [(0, Qe.jsxs)("div", {
                className: "fd13848ae40e6d65a9630d965666bd9a0dca",
                children: [(0, Qe.jsx)("h1", {
                  className: "fd13848ae40e6d65ff661f315c83ec384d82",
                  children: t("lp.landing.title")
                }), (0, Qe.jsx)("p", {
                  className: "fd13848ae40e6d65be91057254fd4da9b396",
                  children: t("lp.landing.description")
                }), (0, Qe.jsx)("div", {
                  className: "fd13848ae40e6d65d46b09270858ddec7470",
                  children: (0, Qe.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, Qe.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), a && (0, Qe.jsxs)("div", {
                className: "fd13848ae40e6d65ece6d2c94e93da11315a",
                children: [(0, Qe.jsx)("h5", {
                  children: t("lp.landing.plates")
                }), (0, Qe.jsxs)("span", {
                  className: "fd13848ae40e6d65a0d05ceada404843b055",
                  children: [(0, Qe.jsxs)("span", {
                    className: "fd13848ae40e6d65b2b7f5dbc7c91066f920",
                    children: [(0, Qe.jsx)("span", {
                      ref: d,
                      className: "fd13848ae40e6d65b00be5267e4e3e70e97f",
                      children: (0, Qe.jsx)(y.LoadingAnimation, {
                        type: "THREE_DOTS"
                      })
                    }), (0, Qe.jsx)("span", {
                      ref: u,
                      className: "fd13848ae40e6d65c8177c0c51aa4a3017cf",
                      children: o?.filter((e => {
                        let {
                          faux: t = !1
                        } = e;
                        return !t
                      }))?.length ?? 0
                    })]
                  }), (0, Qe.jsx)("span", {
                    className: "fd13848ae40e6d65e2bf820b93754f519b30"
                  }), (0, Qe.jsx)("span", {
                    className: "fd13848ae40e6d65fa031aa78c091080b40e",
                    children: "owned plates out of a maximum of"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Zt = "fd13848ae40e6d65eb0df59dc5cb7bf90dce",
        {
          lerp: Kt
        } = d.MathUtils,
        Jt = "visible";
      let Qt, ea = !1;
      const ta = () => {
          const {
            state: e,
            setShouldRenderScene: t,
            setIsScrollEnabled: a,
            setAccessiblePlates: n,
            setDeletedPlateIndex: s,
            setPlates: o
          } = Je(), {
            accessiblePlates: l,
            pendingOrder: c,
            currentPlateIndex: u,
            currentView: m,
            is3D: p,
            three: f,
            isMobile: b,
            isLoading: g,
            refs: y,
            gridScale: h,
            lastView: x,
            deletedPlateIndex: w,
            plates: E
          } = e, {
            loggedIn: P
          } = (0, i.useRockstarUser)(), {
            selectedCharacterTuple: S
          } = (0, i.useRockstarUserState)(), _ = (0, r.useRef)(null), [T, R] = (0, r.useState)(m === pe.LIST_PLATES), I = y?.[$.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            Qt && (Qt.pause(), Qt = null), ea = !1
          }), [S]), (0, r.useEffect)((() => {
            R(m === pe.LIST_PLATES)
          }), [m]);
          const O = (0, r.useCallback)((e => {
            if (!f) return;
            const {
              camera: r,
              controls: i,
              originalCameraPosition: m,
              originalControlsTarget: p,
              renderer: h,
              scene: x
            } = f, {
              clickPlate: S,
              sidebar: T,
              deletePlate: R
            } = G, O = y[$.FOOTER].current, A = y[$.SIDEBAR].current, C = y[$.LOADING_SCREEN].current, k = y[$.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, L = y[$.PLATE_COUNT].current, j = l?.[u]?.current || null, M = l?.[0]?.current || null, V = y[$.CTA_SHADER]?.current || null, D = [];
            switch (x.traverse((e => {
                e.name === fe.LP && D.push(e)
              })), Qt = v().timeline({
                duration: b ? T.mobile.drawer.duration : S.duration,
                ease: b ? T.mobile.drawer.ease : S.ease
              }), e) {
              case Jt: {
                if (!i.current || l.filter((e => null === e.current)).length > 0 || !M || !V) return;
                const e = {
                    current: 0
                  },
                  u = {
                    cameraPosition: {
                      start: (new d.Vector3).copy(r.position),
                      end: m
                    },
                    controlsTarget: {
                      start: (new d.Vector3).copy(i.current.target),
                      end: p
                    },
                    plateOpacity: D.map((e => ({
                      start: e.material.opacity,
                      end: 0
                    }))),
                    accessiblePlateOpacity: l.map((e => ({
                      start: getComputedStyle(e.current).opacity,
                      end: 1
                    }))),
                    firstPlateSaturation: {
                      start: F.saturation.value,
                      end: 0
                    },
                    firstPlateOpacity: {
                      start: 1,
                      end: .2
                    },
                    canvasTranslateY: {
                      start: Number(N(h.domElement).y),
                      end: 0
                    },
                    canvasWidth: h.domElement.offsetWidth,
                    drawerHeight: {
                      start: Number(N(_.current).y),
                      end: 0
                    },
                    ctaShaderOpacity: {
                      start: V.style.opacity,
                      end: 1
                    }
                  };
                j?.parentElement && (u.currentAccessibilityPlateTransform = {
                  start: {
                    x: Number(N(j.parentElement).x),
                    y: Number(N(j.parentElement).y),
                    scale: Number(N(j.parentElement).scale)
                  },
                  end: {
                    x: 0,
                    y: 0,
                    scale: 1
                  }
                });
                const f = M.querySelector("canvas");
                if (Qt.to(e, {
                    current: 1,
                    duration: b ? T.mobile.drawer.duration : S.duration,
                    ease: b ? T.mobile.drawer.ease : S.ease,
                    onComplete: () => {
                      b && (h.domElement.style.touchAction = "auto"), t(!1);
                      const e = x.getObjectByName("Light4");
                      v().to(e.position, {
                        x: ie - 20,
                        y: oe,
                        z: le
                      })
                    },
                    onStart: () => {
                      e.current = 0, A && (A.style.pointerEvents = "all"), h.render(x, r), a(!0)
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e, a = u.cameraPosition.start.clone().lerp(u.cameraPosition.end, t);
                      r.position.set(a.x, a.y, a.z);
                      const n = u.controlsTarget.start.clone().lerp(u.controlsTarget.end, t);
                      if (i.current.target.x = n.x, i.current.target.y = n.y, i.current.target.z = n.z, j && j.parentElement?.classList?.contains(Ft)) {
                        const e = Kt(u.currentAccessibilityPlateTransform.start.x, u.currentAccessibilityPlateTransform.end.x, t),
                          a = Kt(u.currentAccessibilityPlateTransform.start.y, u.currentAccessibilityPlateTransform.end.y, t),
                          r = Kt(u.currentAccessibilityPlateTransform.start.scale, u.currentAccessibilityPlateTransform.end.scale, t);
                        j.parentElement.style.transform = `translate(${e}px,\n                            ${a}px) scale(${r})`
                      }
                      const s = Kt(u.firstPlateSaturation.start, u.firstPlateSaturation.end, t);
                      if (F.saturation.value = s, P && !c && f) {
                        const e = Kt(u.firstPlateOpacity.start, u.firstPlateOpacity.end, t),
                          a = !!c;
                        f.style.filter = `saturate(${s})${!a&&` opacity(${e})`}`
                      }
                      if (V) {
                        const e = Kt(u.ctaShaderOpacity.start, u.ctaShaderOpacity.end, t);
                        V.style.opacity = e
                      }
                      if (b) {
                        const e = Kt(u.canvasTranslateY.start, u.canvasTranslateY.end, t);
                        if (h.domElement.style.transform = `translateY(${e}px)`, _.current) {
                          const e = Kt(u.drawerHeight.start, u.drawerHeight.end, t);
                          _.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), (l.length === E.length && l?.[0]?.current || P && !g && l[0].current && l?.filter((e => e?.current)).length === E.length && 0 !== E.length && 0 !== l.length) && !ea) {
                  const e = {
                    current: 0
                  };
                  ea = !0, Qt.to(e, {
                    current: 1,
                    duration: b ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    ease: b ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                    onStart: () => {
                      ea = !0
                    },
                    onComplete: () => {
                      ea = !1
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e;
                      l.forEach(((e, a) => {
                        if (e.current && u.accessiblePlateOpacity[a]) {
                          const r = Kt(u.accessiblePlateOpacity[a].start, u.accessiblePlateOpacity[a].end, 2.5 * (t - .6));
                          e.current.style.opacity = r
                        }
                        if (D[a] && D[a].material) {
                          const e = Kt(u.plateOpacity[a].start, u.plateOpacity[a].end, 20 * (t - .95));
                          D[a].material.opacity = e, h.render(x, r)
                        }
                      }))
                    }
                  }, 0);
                  const t = Number(getComputedStyle(l[0].current.parentElement).opacity);
                  if (t < 1) {
                    const e = {
                        start: t,
                        end: 1
                      },
                      a = {
                        current: 0
                      };
                    Qt.to(a, {
                      current: 1,
                      duration: b ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                      ease: b ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                      onUpdate: () => {
                        const t = Kt(e.start, e.end, a.current);
                        l[0].current.parentElement.style.opacity = t
                      }
                    }, "<")
                  }
                }
                if ("number" == typeof w) {
                  const e = D.find((e => e.userData.index === w)),
                    t = l[w].current;
                  if (e && t) {
                    const a = {
                        current: 0
                      },
                      r = {
                        plateOpacity: {
                          start: e.material.opacity,
                          end: 0
                        }
                      };
                    Qt.to(a, {
                      current: 1,
                      duration: R.duration,
                      ease: R.ease,
                      onUpdate: () => {
                        const {
                          current: n
                        } = a, s = Kt(r.plateOpacity.start, r.plateOpacity.end, n);
                        e?.material && (e.material.opacity = s), t.style.opacity = s
                      }
                    }, ">");
                    const i = D.filter((e => e.userData.index >= w)).map((e => e.position)),
                      c = l.filter(((e, t) => t >= w)).map((e => {
                        const {
                          top: t,
                          left: a
                        } = getComputedStyle(e.current), r = e.current.offsetHeight, n = e.current.offsetWidth, s = Number(t.replace("px", ""));
                        return {
                          x: Number(a.replace("px", "")) + n / 2,
                          y: s + r / 2
                        }
                      })),
                      d = i.map((e => e.clone())),
                      u = c.map(((e, t) => ({
                        x: c[Math.max(t - 1, 0)].x - c[t].x,
                        y: c[Math.max(t - 1, 0)].y - c[t].y
                      })));
                    Qt.to(i.slice(1), {
                      x: e => d[e].x,
                      y: e => d[e].y,
                      z: e => d[e].z,
                      stagger: {
                        each: .03
                      },
                      onComplete: () => {
                        e.removeFromParent(), e.userData.index = void 0, x.remove(e)
                      }
                    }, "<25%");
                    const m = l.filter(((e, t) => t >= w)),
                      p = c.map((() => ({
                        x: 0,
                        y: 0
                      })));
                    p.forEach(((e, t) => {
                      Qt.to(e, {
                        x: u[t].x,
                        y: u[t].y,
                        duration: R.duration,
                        ease: R.ease,
                        delay: 1 + .03 * t,
                        onUpdate: () => {
                          const a = m[t]?.current;
                          a && (a.style.transform = `translate(${e.x}px, ${e.y}px)`)
                        },
                        onComplete: () => {
                          if (t === p.length - 1) {
                            const e = l.filter(((e, t) => t !== w));
                            n(e), s(null);
                            const t = E.filter((e => e.index !== w));
                            t.forEach(((e, t) => {
                              e.index = t
                            })), o(t)
                          }
                        }
                      }, 0)
                    }))
                  }
                }
                Qt.to(O, {
                  autoAlpha: 1,
                  duration: b ? T.mobile.footer.in.duration : T.in.duration,
                  ease: b ? T.mobile.footer.in.ease : T.in.ease,
                  delay: b ? T.mobile.footer.in.delay : T.in.delay
                }, 0), Qt.to(A, {
                  autoAlpha: 1,
                  duration: b ? T.mobile.fadeHeader.in.duration : T.in.duration,
                  ease: b ? T.mobile.fadeHeader.in.ease : T.in.ease,
                  delay: b ? T.mobile.fadeHeader.in.delay : T.in.delay,
                  onStart: () => {
                    C && (g ? (C.classList.add(Zt), k && k.classList.add(Gt), L && L.classList.remove(Xt)) : (C.classList.remove(Zt), k && k.classList.remove(Gt), L && L.classList.add(Xt)))
                  }
                }, 0), b && (I && v().set(I.style, {
                  visibility: "visible"
                }), A && (A.style.pointerEvents = "all"));
                break
              }
              default:
                if (v().to(O, {
                    autoAlpha: 0,
                    duration: b ? T.mobile.footer.out.duration : T.out.duration,
                    ease: b ? T.mobile.footer.out.ease : T.out.ease
                  }), I && v().set(I.style, {
                    visibility: "hidden"
                  }), A && (A.style.pointerEvents = "none"), b) {
                  const e = {
                    current: N(A).y
                  };
                  v().to(A, {
                    opacity: 0,
                    duration: T.mobile.fadeHeader.out.duration,
                    ease: T.mobile.fadeHeader.out.ease
                  }), v().to(e, {
                    current: -1 * A.offsetHeight,
                    duration: T.mobile.drawer.duration,
                    ease: T.mobile.drawer.ease,
                    onUpdate: () => {
                      _.current.style.transform = `translateY(${e.current}px)`
                    }
                  })
                } else v().to(A, {
                  autoAlpha: 0,
                  duration: T.out.duration,
                  ease: T.out.ease,
                  delay: T.out.delay
                })
            }
          }), [l, u, w, p, x, f, g, c, P, b, y, h, ea]);
          return (0, r.useEffect)((() => {
            y && y?.[$.FOOTER]?.current && y?.[$.SIDEBAR]?.current && y?.[$.UI]?.current && y?.[$.LOADING_SCREEN]?.current && _.current && f?.scene && f?.controls && O(T ? Jt : "hidden")
          }), [y, T, _.current, p, f, b, g, y?.[$.FOOTER]?.current, y?.[$.SIDEBAR]?.current]), (0, Qe.jsx)("div", {
            ref: _,
            className: "fd13848ae40e6d65fe2f56dce20f2cc23636",
            children: (0, Qe.jsx)(qt, {})
          })
        },
        aa = e => {
          let {
            isMobile: t
          } = e;
          const {
            loggedIn: a
          } = (0, i.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = Je(), {
            plates: o,
            refs: l
          } = s, c = (0, r.useRef)(null), d = l[$.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              n($.UI, c)
            }), [c.current]), !o) return null;
          let u;
          return t && (u = d ? (0, wt.createPortal)((0, Qe.jsx)(ta, {}), d) : null), (0, Qe.jsxs)("div", {
            ref: c,
            className: "fd13848ae40e6d65cf4e3950dff0bf598a46",
            children: [a && !t && (0, Qe.jsx)(Ut, {}), t ? u : (0, Qe.jsx)(ta, {}), a && (0, Qe.jsx)(Ct, {}), (0, Qe.jsx)(Ht, {})]
          })
        },
        ra = e => {
          let {
            t
          } = e;
          const a = {
              code: null,
              logId: null
            },
            {
              state: {
                error: n,
                isMobile: s
              }
            } = Je(),
            [o, l] = (0, r.useState)(null),
            [c, d] = (0, r.useState)(null),
            u = {
              api: t("lp.error.api.description"),
              browser: t("lp.error.browser.description"),
              character: t("lp.error.nocharacter.description"),
              vehicles: t("lp.error.novehicle.description"),
              webgl: t("lp.error.webgl.description")
            },
            p = {
              api: t("lp.error.api.cta"),
              browser: t("lp.error.browser.cta"),
              character: t("lp.error.nocharacter.cta"),
              vehicles: t("lp.error.api.cta"),
              webgl: t("lp.error.api.cta")
            },
            {
              track: f
            } = (0, i.useGtmTrack)(),
            {
              data: b
            } = (0, i.useRockstarUser)(),
            g = {
              member_id: b?.user ? b.user?.id : void 0,
              view_name: "license plate creator - error screen"
            };
          return (0, r.useEffect)((() => {
            if (!n) return l(null), void d(null);
            l(n[0]), d(n[1] ?? a)
          }), [String(n)]), (0, r.useEffect)((() => {
            f({
              ...g,
              event: "alert_error",
              event_category: "alert",
              event_action: "error",
              text: u[o] || t("lp.error.unexpected.description")
            }), f({
              ...g,
              event: "trackPageview",
              display_type: s ? "mobile" : "desktop"
            })
          }), []), o ? (0, Qe.jsxs)("div", {
            className: "fd13848ae40e6d65edb361b16208ea39b04d",
            children: [(0, Qe.jsxs)("div", {
              className: "fd13848ae40e6d65f989292c56d125a42b05",
              children: [(0, Qe.jsxs)("div", {
                className: "fd13848ae40e6d65d8a0031e9fbf468e335f",
                children: [(0, Qe.jsx)("i", {}), (0, Qe.jsx)("h4", {
                  children: u[o] || t("lp.error.unexpected.description")
                }), c?.code && (0, Qe.jsxs)("div", {
                  className: "fd13848ae40e6d65e79427410b0638c42413",
                  children: [(0, Qe.jsx)("p", {
                    children: `Code: ${c.code}`
                  }), c?.logId && (0, Qe.jsx)("p", {
                    children: `LogID: ${c?.logId}`
                  })]
                })]
              }), (0, Qe.jsx)(m.NavLink, {
                to: "character" !== o ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, Qe.jsx)("button", {
                  className: "fd13848ae40e6d65e93e0cb9f21eac83e021",
                  type: "button",
                  tabIndex: 0,
                  children: (0, Qe.jsx)("span", {
                    className: "fd13848ae40e6d65b0922946a512c5c777b2",
                    children: p[o]
                  })
                })
              })]
            }), (0, Qe.jsx)("div", {
              className: "fd13848ae40e6d65d7b9f55b7895c5fc08c6"
            })]
          }) : null
        },
        na = () => {
          const {
            state: e,
            setRefs: t
          } = Je(), {
            refs: a,
            isMobile: n
          } = e, s = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            s && t($.LOADING_SCREEN, s)
          }), [s]);
          const i = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = document.querySelectorAll('[aria-label="animation"]');
            e.length && e.forEach((e => {
              e.tabIndex = -1
            }))
          }), []), (0, r.useEffect)((() => {
            if (n && a?.[$.SIDEBAR]?.current && i.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                n = a?.[$.SIDEBAR].current.offsetHeight,
                s = n + (r - n) / 2 - t / 2;
              i.current && (i.current.style.top = `${s}px`)
            } else i.current && (i.current.style.top = "unset")
          }), [n, a]), (0, Qe.jsx)("div", {
            ref: s,
            className: "fd13848ae40e6d65a76020cf52b63db690ab",
            children: (0, Qe.jsx)("div", {
              ref: i,
              className: "fd13848ae40e6d65c62ab050cb79d2037711",
              children: (0, Qe.jsx)(y.LoadingAnimation, {})
            })
          })
        },
        sa = {
          orderInProgressCTA: "fd13848ae40e6d65a33e9cc54c59f4165751",
          expanded: "fd13848ae40e6d65e4a93c76d496871dace2",
          backToPlatesButton: "fd13848ae40e6d65e2e2eee2c661c4dbd09a",
          contentHeading: "fd13848ae40e6d65e539864e63d1a4ab0870",
          plateRedemptionInstructions: "fd13848ae40e6d65ceeafcf9e6c295dea1a7",
          hidden: "fd13848ae40e6d65b64ce673d0fce1813ea4",
          orderInstructions: "fd13848ae40e6d65b97c15f1f2e891588f33",
          buttonWrap: "fd13848ae40e6d65f55a2a90573ac015425e",
          ctaText: "fd13848ae40e6d65feb57e679bed534fda36",
          isWindows: "fd13848ae40e6d65a1c5d794c0b065b51321"
        },
        ia = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: n,
            t: o
          } = e;
          const [c, d] = (0, r.useState)(!1), {
            loggedIn: u
          } = (0, i.useRockstarUser)(), m = (0, s.useRockstarTokenPing)(), {
            setPlates: p,
            setPendingOrder: f,
            setPlateNumber: b,
            setSelectedStyle: g,
            setError: y,
            state: h
          } = Je(), {
            character: v,
            plates: x,
            currentView: E
          } = h, {
            track: P
          } = (0, i.useGtmTrack)(), S = {
            view_name: "license plate creator - landing page logged in"
          }, _ = E === pe.LIST_PLATES ? 0 : -1, T = (0, r.useCallback)((() => {
            (async () => {
              if (!u || !v) return;
              const [e] = v, {
                error: t
              } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/order", {
                pingBearer: m,
                fetchOptions: {
                  method: "DELETE"
                },
                query: {
                  platform: e
                }
              });
              if (t) return void y(["api", t]);
              const a = [be, ...x.slice(1, x.length)];
              p(a), f(null), b(""), g(w(be.style.name).id), P({
                ...S,
                event: "cta_cancel",
                event_category: "cta",
                event_action: "cancel",
                text: `modal: ${o("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${o("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, v, x]);
          return (0, Qe.jsxs)("div", {
            className: [sa.orderInProgressCTA, n ? "" : sa.hidden].join(" "),
            children: [(0, Qe.jsx)("h1", {
              className: sa.contentHeading,
              children: o("lp.inprogress.title")
            }), (0, Qe.jsx)("p", {
              className: sa.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: o("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${sa.vehicleName}>${t}</span>`)
              }
            }), (0, Qe.jsxs)("div", {
              className: sa.buttonWrap,
              children: [(0, Qe.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": o("lp.inprogress.edit"),
                tabIndex: _,
                children: (0, Qe.jsx)("span", {
                  className: sa.ctaText,
                  children: o("lp.inprogress.edit")
                })
              }), (0, Qe.jsx)("button", {
                type: "button",
                onClick: e => {
                  d(!0), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                },
                "aria-label": o("lp.inprogress.cancel"),
                tabIndex: _,
                children: (0, Qe.jsx)("span", {
                  className: sa.ctaText,
                  children: o("lp.inprogress.cancel")
                })
              })]
            }), (0, Qe.jsx)(It, {
              title: o("lp.modal.order-cancel.title"),
              secondaryText: o("lp.modal.order-cancel.description").replace("{plateText}", x?.[0]?.plateText ?? "this plate"),
              buttons: [{
                buttonText: o("lp.modal.order-cancel.confirm"),
                onClick: e => T(e)
              }, {
                buttonText: o("lp.modal.order-cancel.close"),
                onClick: () => {
                  P({
                    ...S,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${o("lp.modal.order-cancel.close").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${o("lp.modal.order-cancel.title").toLowerCase()}`
                  })
                }
              }],
              showModal: c,
              onClose: () => d(!1),
              t: o
            })]
          })
        },
        oa = e => {
          let {
            plateData: t,
            plateWidthInPixels: a,
            currentView: r,
            loginUrl: n,
            inputTabIndex: s,
            track: i,
            trackingPresets: o,
            onClickPlate: l,
            t: c
          } = e;
          return (0, Qe.jsx)("button", {
            type: "button",
            tabIndex: s,
            onClick: () => {
              i({
                ...o,
                event: "license_plate_try",
                event_category: "license_plate",
                event_action: "try",
                text: c("lp.landing.tryit").toLowerCase()
              }), l(t.index)
            },
            className: rt.firstPlateLoggedOut,
            style: {
              background: "none",
              border: "none",
              opacity: r === pe.LIST_PLATES ? 1 : 0,
              width: `${a}px`,
              height: a / 2 + "px",
              pointerEvents: r === pe.LIST_PLATES ? "all" : "none"
            },
            children: (0, Qe.jsxs)("div", {
              className: [rt.loggedOutCTA, r !== pe.LIST_PLATES ? rt.hidden : ""].join(" "),
              children: [(0, Qe.jsx)("button", {
                type: "button",
                onClick: () => {
                  n && (i({
                    event: "cta_login",
                    event_category: "cta",
                    event_action: "login",
                    event_label: "welcome to the lp creator",
                    text: c("lp.landing.signup").toLowerCase(),
                    link_url: n
                  }), window.location.href = n)
                },
                className: [rt.signIn, r !== pe.LIST_PLATES ? rt.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Qe.jsx)("span", {
                  className: rt.ctaText,
                  children: c("lp.landing.signup")
                })
              }), (0, Qe.jsx)("button", {
                type: "button",
                onClick: () => {
                  i({
                    ...o,
                    event: "license_plate_try",
                    event_category: "license_plate",
                    event_action: "try",
                    text: c("lp.landing.tryit").toLowerCase()
                  }), l(t.index)
                },
                className: [rt.tryWithoutSigningIn, rt.firstLoad, r !== pe.LIST_PLATES ? rt.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Qe.jsx)("span", {
                  className: rt.ctaText,
                  children: c("lp.landing.tryit")
                })
              })]
            })
          })
        },
        la = e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, i.useRockstarUser)(), {
            state: n,
            setCurrentView: s,
            setCurrentPlate: o,
            setCurrentPlateIndex: l,
            setRefs: c
          } = Je(), {
            currentView: d,
            accessiblePlates: u,
            gridState: m,
            is3D: p,
            loginUrl: f,
            pendingOrder: b,
            three: g,
            plates: y,
            refs: h,
            isMobile: v,
            realHeight: x,
            plateTextures: w
          } = n, [E, P] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            P(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            y?.length && R(y[0])
          }), [y]);
          const [S, _] = (0, r.useState)(null), [T, R] = (0, r.useState)(null), N = h[$.FIRST_PLATE_MESH], k = h[$.ROOT], L = (0, r.useRef)(null), j = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = h[$.SIDEBAR];
            if (!(e?.current && k?.current && m?.gridOptions && T)) return;
            const t = e.current,
              a = {
                x: v ? 0 : t.offsetWidth,
                y: 0
              },
              r = O(T.index, k.current, Number(x.replace("px", "")), m, a);
            _(r)
          }), [m, k?.current, T, h, L.current, x]);
          const {
            track: M
          } = (0, i.useGtmTrack)(), V = {
            view_name: "license plate creator - landing page logged " + (a ? "in" : "out")
          }, D = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c($.CTA_WRAP, L)
          }), [L.current]), (0, r.useEffect)((() => {
            c($.CTA_SHADER, j)
          }), [j.current]);
          const W = d === pe.LIST_PLATES ? 0 : -1,
            Y = (0, r.useCallback)((e => {
              if (s() === pe.LIST_PLATES) {
                const t = 0 === e ? pe.NEW_PLATE : pe.VIEW_PLATE;
                e && (M({
                  ...V,
                  event: "license_plate_open",
                  event_category: "license_plate",
                  event_action: "open",
                  view_name: "list plates",
                  position: e
                }), M({
                  ...V,
                  event: "virtualPageview",
                  display_type: v ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                })), o(y[e]), l(e), s(t)
              }
            }), [y]),
            B = (0, r.useCallback)((e => {
              A(0, d)
            }), [d]),
            U = (0, r.useMemo)((() => S ? (0, Qe.jsx)(oa, {
              plateData: T,
              plateWidthInPixels: S.width,
              currentView: d,
              loginUrl: f,
              inputTabIndex: W,
              track: M,
              trackingPresets: V,
              onClickPlate: Y,
              t
            }) : null), [d, f, S]),
            z = (0, r.useMemo)((() => void 0 !== y ? I(b, y) ? (0, Qe.jsx)(ia, {
              t,
              vehicleName: `${b.manufacturerName} ${b.vehicleName}`,
              onClickEdit: () => {
                M({
                  ...V,
                  event: "license_plate_edit_click",
                  event_category: "license_plate",
                  event_action: "edit",
                  event_label: "click",
                  text: t("lp.inprogress.edit").toLowerCase()
                }), Y(T.index)
              },
              isVisible: d === pe.LIST_PLATES
            }) : y.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30 ? (0, Qe.jsxs)("div", {
              className: [rt.maxPlatesReached, d !== pe.LIST_PLATES ? rt.hidden : ""].join(" "),
              children: [(0, Qe.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === y.length ? null : (0, Qe.jsxs)("button", {
              type: "button",
              style: {
                pointerEvents: d === pe.LIST_PLATES ? "all" : "none"
              },
              onClick: () => {
                M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "click",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(T.index)
              },
              onPointerOver: v ? void 0 : () => {
                N?.current && B(N?.current)
              },
              onPointerOut: v ? void 0 : () => {
                var e;
                N?.current && (e = N?.current, C(e))
              },
              className: [rt.createNewPlate, d !== pe.LIST_PLATES ? rt.hidden : ""].join(" "),
              ref: D,
              tabIndex: W,
              children: [(0, Qe.jsx)("span", {
                className: `${rt.ctaText} ${E?rt.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, Qe.jsx)("div", {
                className: rt.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [d, b, h, S, y, v]),
            H = (0, r.useMemo)((() => void 0 !== b && S ? (0, Qe.jsx)("button", {
              onClick: () => {
                M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "click",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(T.index)
              },
              type: "button",
              tabIndex: W,
              className: rt.firstPlateLoggedIn,
              style: {
                width: `${S.width}px`,
                height: S.width / 2 + "px",
                pointerEvents: d === pe.LIST_PLATES ? "all" : "none",
                fontSize: S.width / 2 * .075 + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
              },
              children: z
            }) : null), [d, b, S, h, T, z, v]);
          return (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              if (e && L.current) {
                const t = L.current.querySelector("canvas");
                t && L.current.removeChild(t), e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.opacity = 1, e.style.transition = "transform 0.25s ease-out", a && !b && d === pe.LIST_PLATES && e.classList.add(rt.newOrder), L.current.append(e)
              }
            }
          }), [w, L.current, b, a, d]), (0, r.useEffect)((() => {
            u?.[0]?.current || L.current && (u[0] = L)
          }), [u, L.current]), (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              e && g?.scene && (e.style.transition = "transform 0.25s ease-out")
            }
          }), [p, g, w]), (0, r.useMemo)((() => {
            if (!S || !T || !m?.gridOptions) return null;
            const e = I(b, y) ? rt.pendingOrderShader : "",
              t = a ? e : rt.loggedOutShader,
              {
                width: r,
                height: n
              } = S,
              {
                top: s,
                left: i,
                right: o,
                bottom: l
              } = S.rect;
            return (0, Qe.jsxs)("div", {
              ref: L,
              className: [rt.CTAWrap, a ? "" : rt.loggedOut].join(" "),
              style: {
                top: s,
                left: i,
                bottom: l,
                right: o,
                width: r,
                height: n
              },
              children: [(0, Qe.jsx)("div", {
                ref: j,
                className: t
              }), a ? H : U]
            })
          }), [S, T, m, a, d, b, z, y, w, v])
        },
        ca = e => {
          let {
            plate: t,
            index: a,
            accessiblePlateRefs: n,
            details: s,
            tabIndex: o,
            texture: l
          } = e;
          const {
            loggedIn: c
          } = (0, i.useRockstarUser)(), {
            setCurrentView: d,
            setCurrentPlate: u,
            setCurrentPlateIndex: m,
            state: {
              currentView: p,
              isLoading: f,
              plateTextures: b,
              plates: g,
              deletedPlateIndex: y,
              isMobile: h,
              shouldRenderScene: v
            }
          } = Je(), {
            track: x
          } = (0, i.useGtmTrack)(), w = {
            view_name: "license plate creator - landing page logged " + (c ? "in" : "out")
          }, E = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            !n.current[a + 1]?.current && E && (n.current[a + 1] = E)
          }), [E.current, g, f]), (0, r.useEffect)((() => {
            if (l && E.current) {
              const e = E.current.querySelector("canvas");
              e && E.current.removeChild(e), l.style.width = "100%", l.style.height = "100%", l.style.position = "absolute", l.style.opacity = 1, l.style.top = "0px", l.style.left = "0px", l.style.pointerEvents = "none", l.style.transition = "transform 0.25s ease-out", l.classList.add("fd13848ae40e6d65c38e114ef9f04fbb60c0"), E.current.append(l)
            }
          }), [b, l, E.current]), (0, r.useMemo)((() => (0, Qe.jsx)("button", {
            "aria-label": `${t?.style?.displayName||""} license plate ${t.plateText?`with the number ${t.plateText}`:""}`.trim(),
            className: "fd13848ae40e6d65dfcce6149acc6235b802",
            ref: E,
            id: `keyboard-accessible-license-plate-${a}`,
            style: {
              position: "absolute",
              height: `${s.height+1}px`,
              width: `${s.width}px`,
              top: s.top - 1 + "px",
              left: `${s.left}px`,
              transformOrigin: "center",
              pointerEvents: p !== pe.LIST_PLATES || "number" == typeof y || v ? "none" : "all"
            },
            tabIndex: o,
            type: "button",
            onClick: e => {
              e.target.blur(), x({
                ...w,
                event: "license_plate_open",
                event_category: "license_plate",
                event_action: "open",
                view_name: "list plates",
                position: a
              }), x({
                ...w,
                event: "virtualPageview",
                display_type: h ? "mobile" : "desktop",
                view_name: "license plate creator - view plate"
              }), u(t), m(a + 1), d(pe.VIEW_PLATE)
            }
          })), [t, l, s, v, p])
        },
        da = e => {
          let {
            t
          } = e;
          const {
            setAccessiblePlates: a,
            setRefs: n,
            state: {
              currentView: s,
              gridState: o,
              plates: l,
              realHeight: c,
              refs: d,
              isMobile: u,
              plateTextures: m
            }
          } = Je(), {
            loggedIn: p
          } = (0, i.useRockstarUser)(), [f, b] = (0, r.useState)([]), g = (0, r.useRef)(null), y = (0, r.useRef)([]);
          return (0, r.useEffect)((() => {
            y.current && l.length > 0 && y.current.length === l.length && a(y.current)
          }), [y.current?.length, l]), (0, r.useEffect)((() => {
            n($.ACCESSIBLE_PLATE_GRID, g)
          }), [g.current]), (0, r.useEffect)((() => {
            const e = d[$.ROOT]?.current,
              t = d?.[$.SIDEBAR]?.current,
              a = [];
            e && t && o && (l.forEach(((r, n) => {
              if (n) {
                const r = O(n, e, Number(c.replace("px", "")), o, u ? void 0 : {
                    x: t.offsetWidth,
                    y: 0
                  }),
                  {
                    height: s,
                    width: i,
                    rect: {
                      top: l,
                      left: d
                    }
                  } = r;
                s && i && s < i && a.push({
                  width: i,
                  height: s,
                  top: l,
                  left: d
                })
              }
            })), b([...a]))
          }), [o, l, m, c, d[$.ROOT]?.current?.offsetHeight]), (0, r.useMemo)((() => p && !f.length ? null : (y.current.forEach((e => {
            e.current && (e.current.style.transform = "none")
          })), (0, Qe.jsxs)("div", {
            ref: g,
            className: Ft,
            children: [(0, Qe.jsx)(la, {
              t
            }), l.filter(((e, t) => t)).map(((e, t) => (0, Qe.jsx)(ca, {
              accessiblePlateRefs: y,
              plate: e,
              index: t,
              details: f[t],
              tabIndex: s === pe.LIST_PLATES ? 0 : -1,
              texture: m[t + 1]?.image
            }, e.plateText + e.vehicles.toString())))]
          }))), [f, m, p, s])
        },
        ua = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: b,
            setCharacter: y,
            setCurrentView: h,
            setDeletedPlateIndex: v,
            setError: x,
            setIs3D: E,
            setIsLoading: S,
            setIsLoggedIn: _,
            setIsMobile: T,
            setPendingOrder: R,
            setPlateNumber: N,
            setPlates: O,
            setRefs: A,
            setSelectedStyle: C,
            setVehicles: k,
            state: L
          } = Je(), {
            error: j,
            plates: M,
            pendingOrder: V,
            isMobile: D,
            three: W,
            currentView: Y,
            shouldForce2D: U,
            isLoading: z
          } = L, {
            setCustomFooter: H
          } = (0, c.useRockstarLocalState)(), {
            loggedIn: F
          } = (0, i.useRockstarUser)();
          (0, r.useEffect)((() => {
            _(F)
          }), [F]);
          const {
            selectedCharacterTuple: G
          } = (0, i.useRockstarUserState)(), X = (0, s.useRockstarTokenPing)(), q = (0, r.useRef)(null), Z = (0, r.useRef)(null), K = (0, r.useRef)(null), [J, Q] = (0, r.useState)(null), [ee] = (0, m.useSearchParams)(), [te, ae] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            try {
              if (!l.supportedBrowsers.test(navigator.userAgent)) throw new Error("browser");
              const e = document.createElement("canvas"),
                t = ["webgl2", "webgl", "experimental-webgl", "moz-webgl", "webkit-3d"].some((t => {
                  const a = e.getContext(t);
                  return a && "function" == typeof a?.getParameter
                }));
              if (!window.WebGLRenderingContext || !t) throw new Error("webgl")
            } catch (e) {
              x([e?.message])
            } finally {
              ae(!0)
            }
          }), []);
          const re = (0, r.useCallback)(g().debounce((() => {
            if (W?.renderer) {
              const {
                renderer: e
              } = W, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              b({
                width: t,
                height: a
              })
            }
            T(P())
          }), 100), [W]);
          (0, r.useEffect)((() => (re(), window.addEventListener("resize", re, !0), () => window.removeEventListener("resize", re, !0))), [W]), (0, r.useEffect)((() => ((0, c.setFreezeUserShouldSeeMore)(!0), H(!0), () => {
            (0, c.setFreezeUserShouldSeeMore)(!1), H(!1), h(pe.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            A($.CANVAS_WRAP, q)
          }), [q.current]), (0, r.useEffect)((() => {
            A($.ROOT, Z)
          }), [Z.current]), (0, r.useEffect)((() => {
            A($.MOBILE_SIDEBAR_PORTAL_TARGET, K)
          }), [K.current]), (0, r.useEffect)((() => {
            if (!te || "webgl" === j || "browser" === j) return;
            x(null), y(G), h(pe.LIST_PLATES), R(null), v(null);
            const e = (F ? [] : [be]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== F && (O(e), !1 === F && S(!1)), k([]), (async () => {
              try {
                F && S(!0);
                const e = x();
                if (!F || null === G || e) return;
                if (!1 === G) return void x(["character"]);
                const [t, a] = G, {
                  error: r = null,
                  result: n
                } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  pingBearer: X,
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (r) throw Object.assign(new Error(""), r);
                const s = n?.plates?.map((e => {
                    const t = w(e?.vehicles?.[0]?.plateStyle ?? "YellowBlack") ?? w("YellowBlack");
                    return {
                      ...e,
                      style: t
                    }
                  })) ?? [],
                  {
                    error: i = null,
                    result: o
                  } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                    pingBearer: X,
                    query: {
                      character: a,
                      platform: t
                    }
                  });
                if (i) throw Object.assign(new Error(""), i);
                const c = g().uniqBy(o?.vehicles ?? [], (e => {
                  let {
                    id: t
                  } = e;
                  return t
                }));
                if (!c.length) return x(["vehicles"]), void S(!1);
                k(c);
                const {
                  error: d,
                  result: u
                } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: X,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (d) throw Object.assign(new Error(""), d);
                const m = I(u, M);
                let p = [be, ...s];
                p = p.map(((e, t) => ({
                  ...e,
                  index: t
                }))), m ? (R(u), C(be.style.id)) : R(null), N(be.plateText), S(!1), O(p)
              } catch (e) {
                x(["api", e]), S(!1)
              }
            })()
          }), [String(G), F, te]), (0, r.useEffect)((() => {
            I(V, M) && (C(w(V.plateStyle).id), N(V.plateText))
          }), [V, M]), (0, r.useEffect)((() => {
            if (J || !B || j || !te) return;
            const e = ee.get("envUrl") || a(3924),
              t = new d.LoadingManager((() => {
                Q({
                  environmentMap: c,
                  environmentModel: l,
                  plateTextures: m
                })
              })),
              r = new u.E(t),
              n = new p._(t),
              s = new f.a(t);
            n.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.3/"), r.setDRACOLoader(n), s.detectSupport(new d.WebGLRenderer), s.setTranscoderPath("https://unpkg.com/three@0.134.0/examples/js/libs/basis/"), r.setKTX2Loader(s);
            const i = new d.TextureLoader(t),
              o = new d.CubeTextureLoader(t);
            let l;
            r.load(e, (e => {
              l = e
            }), void 0, (e => console.log("err", e)));
            const c = o.load([a(8220), a(8130), a(5377), a(6491), a(1984), a(3445)]),
              m = B.map((e => {
                const {
                  fontColor: t,
                  fontSize: a
                } = e, [r, n, s, o] = [e.albedoImageUrl, e.alphaImageUrl, e.bumpImageUrl, e.roughnessImageUrl].map((e => i.load(e)));
                return {
                  albedoMap: r,
                  alphaMap: n,
                  bumpMap: s,
                  roughnessMap: o,
                  fontColor: t,
                  fontSize: a
                }
              }))
          }), [J, B, j, te]), (0, r.useEffect)((() => {
            const e = Y !== pe.LIST_PLATES && !U;
            E(e)
          }), [Y, U]);
          const ne = (0, r.useMemo)((() => (0, Qe.jsx)(n.Canvas, {
            shadows: !P(),
            linear: !0,
            flat: !0,
            dpr: window.devicePixelRatio,
            camera: {
              position: [0, 0, 0],
              fov: 35
            },
            onCreated: e => {
              let {
                gl: t
              } = e;
              t.setClearColor(0, 0)
            },
            children: (0, Qe.jsx)(o.GtmProvider, {
              children: (0, Qe.jsx)(xt, {
                loadedAssets: J
              })
            })
          })), [J, F]);
          return te && null !== F ? j ? (0, Qe.jsx)(ra, {
            t
          }) : (0, Qe.jsxs)("div", {
            ref: Z,
            className: "fd13848ae40e6d65bbf483f378bf9b124fa4",
            children: [D && (0, Qe.jsx)("div", {
              className: "fd13848ae40e6d65bf1276a16c42d8d88c6b",
              ref: K,
              children: (0, Qe.jsx)(na, {
                isLoading: z
              })
            }), (0, Qe.jsxs)("div", {
              className: "fd13848ae40e6d65e679d5c0c7e82b869590",
              children: [(0, Qe.jsx)(aa, {
                isMobile: D
              }), (0, Qe.jsxs)("div", {
                className: "fd13848ae40e6d65d171b6e11feaaa0e6b49",
                ref: q,
                children: [ne, !D && (0, Qe.jsx)(na, {
                  isLoading: z
                })]
              })]
            }), (0, Qe.jsx)("span", {
              className: "fd13848ae40e6d65c23379ba67d2aa3b2d3d"
            }), (0, Qe.jsx)(da, {
              t
            }), (0, Qe.jsx)(et, {
              t
            })]
          }) : null
        }))
    },
    3924: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/glb/68917a4431a44b5c4d17.glb"
    },
    8130: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/66325873bcd945e9636b.png"
    },
    6491: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/4f0399f84f560d6677d6.png"
    },
    3445: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/0a5f36124fc10f0e29be.png"
    },
    8220: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c48def1269c5e97af351.png"
    },
    5377: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ac5d453a442f68e74eda.png"
    },
    1984: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/661ce2fdc55ff6baaf45.png"
    },
    3493: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/d11ed33c2c7ab0524f2f.jpg"
    },
    7934: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/2a944f778fccaf313a98.png"
    },
    6050: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b97d334cf40f9cc47bf8.jpg"
    },
    9233: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/81203010ebb91f70e61c.jpg"
    },
    8928: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cec5d10cba12094e6295.png"
    },
    8642: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/eb305935c13910350d7c.jpg"
    },
    754: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3b0fe4906cdc54c83cd4.jpg"
    },
    4517: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b8f31c4768db251ef13d.jpg"
    },
    2548: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/7505236478b7dc0dd183.png"
    },
    2423: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/a8143cb90f5e6b14fcd5.jpg"
    },
    6879: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b0f55254491396fdf1d9.jpg"
    },
    1358: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/d60ffe929915c087749b.png"
    },
    4360: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/15feb1c56b980b6cd87d.jpg"
    },
    3983: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/51121fb731a69474a1f0.png"
    },
    4495: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/ef1c03bc1fd669926066.jpg"
    },
    5987: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c5dfcdf6bdb37bf9b50d.jpg"
    },
    1765: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/4659f6abf3ae0ccf0460.jpg"
    }
  }
]);