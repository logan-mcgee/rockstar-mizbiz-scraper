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
        c = a(9929),
        l = a(3657),
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
      const x = e => $.find((t => {
          let {
            id: a
          } = t;
          return a === e
        })),
        w = e => $.find((t => {
          let {
            name: a
          } = t;
          return a.toLowerCase() === e.toLowerCase()
        })),
        E = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        P = () => window.innerWidth < z.lg,
        S = () => window.innerHeight > .75 * window.innerWidth,
        _ = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= z.xxl:
              return 25;
            case e >= z.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= z.lg:
              return 40;
            default:
              return 100
          }
        },
        T = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= z.xl:
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
            case e >= z.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= z.lg:
              return 5;
            case e >= z.md:
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
          plateHeight: c,
          plateWidth: l,
          rowGap: d,
          columnGap: u
        } = r.gridOptions, {
          top: m,
          left: p,
          bottom: f
        } = r.gridDimensions.margins.pixels, b = Math.floor(e / i), g = e % i, y = c * o + d * (o - 1), h = l * i + u * (i - 1), v = s - n.x - 2 * p, x = a - n.y - m - f, w = x * (c / y), E = v * (l / h), P = b * (c + d) / y, S = {
          x: v * (g * (l + u) / h) + p + n.x,
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
          onStart: c,
          is3D: l
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
          onStart: c ? () => {
            c()
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
              t.material && l && (t.material.opacity = d.MathUtils.lerp(v.plateOpacity[a].start, v.plateOpacity[a].end, e))
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
        B = {
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
          LP_GRID_3D: "lpGrid3d",
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
        $ = [{
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
        z = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        H = 0,
        U = 2,
        F = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: H
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
        ce = 4.52,
        le = {
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
        Be = (0, s.makeVar)([]),
        $e = (0, s.makeVar)(!1),
        ze = (0, s.makeVar)(!!P()),
        He = (0, s.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        Ue = (0, s.makeVar)($),
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
            l = (0, s.useReactiveVar)(Ee),
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
            _ = (0, c.useLocale)(),
            [T, R] = (0, r.useState)(""),
            I = (0, s.useReactiveVar)(De),
            N = (0, s.useReactiveVar)(We),
            O = (0, s.useReactiveVar)(Ye),
            A = (0, s.useReactiveVar)(Be),
            C = (0, s.useReactiveVar)(He),
            k = (0, s.useReactiveVar)(Ue),
            L = (0, s.useReactiveVar)(ge),
            j = (0, s.useReactiveVar)(Fe),
            M = (0, i.useScConfig)(),
            V = (0, s.useReactiveVar)(Xe),
            D = (0, s.useReactiveVar)(qe),
            W = (0, s.useReactiveVar)(ze),
            Y = (0, s.useReactiveVar)($e),
            B = (0, s.useReactiveVar)(Ze),
            $ = (0, s.useReactiveVar)(Ke);
          return (0, r.useEffect)((() => {
            const e = (0, c.toScLocaleString)(_),
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
              currentView: l,
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
              three: B,
              vehicles: $
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
            setPlateNumberStatus: He,
            setPlateStyles: Ue,
            setPlateTextures: Be,
            setRefs: Ge,
            setRefsInternal: Fe,
            setSelectedStyle: Xe,
            setSelectedVehicle: qe,
            setShouldForce2D: ze,
            setShouldRenderScene: $e,
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
          a(B.FOOTER, i)
        }), [i.current]), (0, Qe.jsx)("div", {
          className: "d06e542631e1fcd1dfb5b2acf94c1bee2c37",
          ref: i,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, Qe.jsxs)("div", {
            className: "d06e542631e1fcd1e85531fe4eae0ee625c1",
            children: [(0, Qe.jsxs)("div", {
              className: "d06e542631e1fcd1ed35c6f20ece33d1283f",
              children: [(0, Qe.jsx)(y.LanguageSelector, {}), (0, Qe.jsxs)("div", {
                className: "d06e542631e1fcd1fd7206567c293e3054b0",
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
              className: "d06e542631e1fcd1bb8ac13e4a077787384b",
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })
        })
      };
      var tt = a(9708),
        at = a(5667);
      const rt = e => {
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
      var nt = a(7151);
      const st = "#898989",
        it = "#000000",
        ot = ["0.05", "0.15", "0.4"],
        ct = ["0.0", "0.5", "1.0"],
        lt = ["0.299", "0.587", "0.114"],
        dt = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        ut = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= z.sm ? t = 1 / 4 : a <= z.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        mt = {
          bumpMap: ut(),
          map: ut(),
          roughnessMap: ut()
        },
        pt = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: n,
            plateIndex: s,
            position: i = [0, 0, 0],
            width: o = 2
          } = e;
          const {
            state: c,
            setCurrentView: l,
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
          } = c, S = 0 === s && "number" == typeof w, [_, T] = (0, r.useState)(x(S ? w : n.style.id)), R = [0, 0, 0], I = [1, 1, 1], [N] = (0, r.useState)(0 === n.index), [O, k] = (0, r.useState)({}), L = (0, r.useRef)(), j = y.filter((e => {
            let {
              faux: t
            } = e;
            return !t
          })).length >= 30;
          (0, r.useEffect)((() => {
            L.current && 0 === L.current.userData.index && m(B.FIRST_PLATE_MESH, L)
          }), [L.current]);
          const M = (0, r.useRef)(),
            V = (0, r.useCallback)((e => {
              !n.index && j || A(0, p)
            }), [p]),
            D = (0, r.useCallback)((e => {
              if (!_) return [];
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete mt.bumpMap, mt.bumpMap = ut();
                  const a = mt.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= z.sm ? r = 1 / 4 : n <= z.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const i = 5 * r;
                  return dt || (a.filter = `blur(${i}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), dt && nt.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * i), new d.CanvasTexture(a.canvas)
                })(a, _),
                n = ((e, t) => {
                  delete mt.map, mt.map = ut();
                  const a = mt.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= z.sm ? r = 1 / 4 : n <= z.md && (r = .5);
                  const s = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new d.CanvasTexture(a.canvas)
                })(a, _),
                s = v ? void 0 : ((e, t) => {
                  delete mt.roughnessMap, mt.roughnessMap = ut();
                  const a = mt.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= z.sm ? r = 1 / 4 : n <= z.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = it, a.fillStyle = it, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = st, a.fillStyle = st, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new d.CanvasTexture(a.canvas)
                })(a, _);
              return [r, n, s]
            }), [_]),
            W = (0, r.useCallback)((e => {
              var t;
              N && (e.uniforms.saturation = F.saturation, e.uniforms.fade = F.fade, e.uniforms.shaderIndex = F.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == ${U}) {\n            float opacity = mix(0.01, 1.0, saturation);\n            float desaturationOpacity = gl_FragColor.a * (opacity);\n            vec3 desaturationColor = vec3(\n                ${lt[0]},\n                ${lt[1]},\n                ${lt[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, gl_FragColor.a);\n\n        } else if (shaderIndex == ${H}) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=h?ot:ct)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [N, h, b]);
          return (0, r.useEffect)((() => {
            N && (n.plateText = g)
          }), [N ? g : null]), (0, r.useEffect)((() => {
            if (N && _ && _.id !== w) {
              const e = x(w);
              T(e)
            }
          }), [N, w]), (0, r.useEffect)((() => {
            F.shaderIndex.value = h ? b ? H : U : H, M.current && (M.current.bumpScale = .015 * E, M.current.needsUpdate = !0)
          }), [M.current, b, h, E]), (0, r.useEffect)((() => {
            if (O.map && P[s] !== O.map) {
              const e = [...P];
              e[s] = O.map, u(e)
            }
          }), [O, P]), (0, r.useEffect)((() => {
            const [e, t, a] = D(N ? g : n.plateText);
            k({
              map: t,
              bumpMap: e,
              roughnessMap: a
            })
          }), [N ? g : void 0, N ? _ : void 0]), (0, r.useMemo)((() => f && O.map && O.bumpMap ? (0, Qe.jsxs)("mesh", {
            name: fe.LP,
            visible: !0,
            userData: {
              index: s
            },
            position: i,
            rotation: R,
            scale: I,
            ref: L,
            onPointerOver: v ? void 0 : () => {
              h && l() === pe.LIST_PLATES && L.current && V(L.current)
            },
            onPointerOut: v ? void 0 : () => {
              var e;
              h && L.current && (e = L.current, !n.index && j || C(e))
            },
            children: [(0, Qe.jsx)("planeBufferGeometry", {
              args: [o, a, o, a]
            }), (0, Qe.jsx)("meshPhysicalMaterial", {
              onBeforeCompile: 0 === s ? W : void 0,
              alphaMap: n.alphaMap,
              bumpMap: O.bumpMap,
              opacity: 0,
              bumpScale: .015,
              depthTest: !1,
              envMap: t,
              envMapIntensity: ue,
              map: O.map,
              metalness: .4,
              ref: M,
              roughness: .3,
              roughnessMap: O.roughnessMap,
              transparent: !0
            })]
          }) : null), [h, v, O])
        },
        ft = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const [s, o, c, l] = [2, 1, 2, 1, [0, 0, 0]], {
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
            scene: $,
            gl: z
          } = (0, n.useThree)(), [H, U] = (0, r.useState)(new d.Vector3(p.x, p.y, p.z)), [F, G] = (0, r.useState)(0), [X, q] = (0, r.useState)(0), {
            track: Z
          } = (0, i.useGtmTrack)(), K = {
            view_name: "license plate creator - landing page logged " + (N ? "in" : "out")
          }, [J, Q] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            _ === pe.LIST_PLATES && Z({
              ...K,
              event: "virtualPageview",
              display_type: O ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (N ? "in" : "out")
            })
          }), [_]);
          const ee = (0, r.useCallback)((() => {
            if (M) {
              const e = c * g + b * (g - 1),
                a = Math.abs(p.z) * Math.tan((0, at.Id)(Y.fov / 2)) * 2,
                r = t.gridDimensions.margins.meters.top,
                n = t.gridDimensions.margins.meters.bottom,
                s = t.gridDimensions.width,
                i = s / e,
                o = t.gridDimensions.height,
                l = o / a;
              q((o - a + r + n).toFixed(4)), E(i), (e => {
                pe.LIST_PLATES;
                const t = z.domElement.offsetHeight,
                  a = l * t + v * t + f * t,
                  r = T(),
                  n = C[B.ROOT]?.current;
                n && (n.style.height = `${a}px`), Q({
                  canvasHeight: t,
                  rootHeight: a
                }), w(`${Math.round(a)}px`);
                const o = Math.round(c * i / s * (z.domElement.offsetWidth - 2 * r));
                G(o)
              })()
            }
          }), [Y.fov, M, g, _, O, p, I, o, $, v, k, j]);
          (0, r.useEffect)((() => {
            p && U(p), ee()
          }), [p, M]);
          const te = (0, r.useMemo)((() => I?.map((e => {
              if (0 === F) return null;
              const {
                index: t
              } = e, a = -1 * s / 2 + .251953125 * s, r = (y ? t % g * (s + b) : Math.floor(t / g) * (s + b)) + s / 2, n = (y ? Math.floor(t / g) * (o + h) * -1 : t % g * (o + h) * -1) + a;
              return (0, Qe.jsx)(pt, {
                envMap: u,
                height: l,
                position: [r, n, 0],
                plate: e,
                plateIndex: e.index,
                width: c
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [F, I]),
            ae = (0, r.useCallback)((() => {
              const e = C[B.ROOT].current,
                t = document.body;
              e && (e.style.touchAction = "auto"), L() || requestAnimationFrame((() => {
                t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, V)
              }))
            }), [O, V, D]),
            re = (0, r.useCallback)((() => {
              const e = C[B.ROOT].current,
                t = document.body,
                a = window.scrollY;
              P(a), e && (e.style.touchAction = "none"), L() || (window.scrollTo(0, a), requestAnimationFrame((() => {
                t.style.position = "fixed", t.style.top = `-${a}px`
              })))
            }), [O, C, D, V]);
          (0, r.useEffect)((() => {
            D ? ae() : re()
          }), [D]), (0, r.useEffect)((() => () => {
            ae()
          }), []);
          const ne = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (S() === pe.LIST_PLATES || e) {
              const e = C[B.ROOT]?.current;
              if (!e || !J) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = J, r = O && I.length <= 2 ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = H.y + X * n;
              W?.current?.position?.set(H.x, Number(s.toFixed(3)), H.z)
            }
          }), [W.current, H, C, X, I, J, N, O]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ne(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [W.current, N, H, p, A, C, X, J]), (0, r.useEffect)((() => {
            if (!W.current || !$) return;
            const e = $.getObjectByName("Scene");
            W.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [W.current, $]), (0, r.useMemo)((() => (0, Qe.jsx)("group", {
            name: fe.LP_GRID,
            ref: W,
            position: p,
            scale: R,
            children: 0 !== F && te
          })), [R, te, F])
        },
        bt = e => {
          let {
            name: t,
            color: a,
            intensity: r,
            distance: n,
            decay: s,
            position: i,
            rotation: o,
            mapSize: c,
            ref: l,
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
              "shadow-mapSize-height": c,
              "shadow-mapSize-width": 2 * c,
              "shadow-radius": 4,
              "shadow-bias": -35e-5
            }), d && (0, Qe.jsx)("pointLightHelper", {
              light: l,
              sphereSize: 1
            })]
          })
        },
        gt = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, Qe.jsxs)("group", {
            name: "Lights",
            children: [(0, Qe.jsx)(bt, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [q, Z, K],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(bt, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [J, Q, ee],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(bt, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [ae, re, ne],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(bt, {
              name: "Light4",
              color: 16777215,
              intensity: 0,
              distance: 50,
              decay: 2,
              position: [ie, oe, ce],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, n.extend)({
        OrbitControls: tt.z
      });
      const yt = {
          leftMargin: 200,
          topMargin: 200,
          columns: 3,
          isVertical: !0,
          columnGap: .1,
          rowGap: .1,
          depth: 5,
          plateHeight: 1,
          plateWidth: 2
        },
        ht = e => {
          let {
            loadedAssets: t
          } = e;
          const {
            state: a,
            setIsSceneLoaded: s,
            setThree: i,
            setGridState: o
          } = Je(), {
            gridState: c,
            isLoggedIn: l,
            is3D: u,
            shouldForce2D: m,
            isSceneLoaded: p,
            plates: f,
            plateStyles: b,
            three: y,
            canvasDimensions: h,
            shouldRenderScene: v,
            refs: x
          } = a, [w, P, S] = (0, n.useThree)((e => {
            let {
              camera: t,
              gl: a,
              scene: r
            } = e;
            return [t, a, r]
          })), _ = (0, r.useRef)(), [R, I] = (0, r.useState)(!1), [N, O] = (0, r.useState)(null), A = () => {
            if (P.domElement.style.opacity = 1, P.domElement.style.position = "absolute", P.domElement.style.top = 0, P.domElement.style.left = 0, P.domElement.style.right = 0, P.domElement.style.bottom = 0, P.domElement.style.touchAction = "auto", !p) {
              const e = new d.Vector3,
                t = new d.Vector3;
              _.current.target.copy(t), i({
                scene: S,
                camera: w,
                renderer: P,
                controls: _,
                originalCameraFov: w.fov,
                originalCameraPosition: e,
                originalControlsTarget: t
              })
            }
            s(!0)
          };
          (0, r.useEffect)((() => {
            f.length && N && C(N.width)
          }), [N, f]), (0, r.useEffect)((() => (O({
            height: P.domElement.offsetHeight,
            width: P.domElement.offsetWidth
          }), () => {
            s(!1)
          })), []), (0, r.useEffect)((() => {
            t && f?.length && null !== l && I(!0)
          }), [t, f, l]), (0, r.useEffect)((() => {
            t && t?.environmentMap && b?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
          }), [t, b]);
          const C = (0, r.useCallback)((e => {
            const t = document.getElementById("list-plates-sidebar");
            if (!w || !t || !N) return;
            const a = T(),
              {
                plateWidth: r,
                plateHeight: n,
                columnGap: s,
                rowGap: i,
                depth: c
              } = yt,
              l = c * Math.tan((0, at.Id)(17.5)),
              u = -1 * w.aspect * l,
              m = window.innerWidth < z.lg ? t.offsetHeight + a : a,
              p = a,
              b = P.domElement.offsetWidth,
              g = P.domElement.offsetHeight,
              y = (() => {
                const e = window.innerWidth;
                switch (!0) {
                  case e >= z.xxl:
                    return E(11);
                  case e >= z.xl:
                    return E(12);
                  case e >= z.md:
                    return E(13);
                  default:
                    return E(20)
                }
              })(),
              h = p / b,
              v = u - u * h * 2,
              x = m / g,
              S = l - l * x * 2,
              _ = y / g,
              R = new d.Vector3(v, S, -c),
              I = f.length > 1 ? (e => {
                const t = window.innerWidth;
                switch (!0) {
                  case t >= z.xxl:
                    return 3;
                  case t >= z.lg && t <= 1280:
                    return 1;
                  case e >= 600:
                    return 2;
                  default:
                    return 1
                }
              })(e) : 1,
              O = Math.ceil(f.length / I),
              A = r * I + s * (I - 1),
              C = n * Math.ceil(f.length / I) + i * (Math.ceil(f.length / I) - 1),
              k = Math.abs(R.z) * Math.tan((0, at.Id)(w.fov / 2)) * 2,
              L = h * (k * (b / g)),
              j = x * k,
              M = _ * k,
              V = Math.abs(2 * R.x),
              D = V / A * C;
            o({
              gridPosition: R,
              gridOptions: {
                ...yt,
                columns: I,
                rows: O,
                topMarginAsRatio: x,
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
          }), [f, x?.[B.SIDEBAR]?.current, w, N, l]);
          (0, r.useEffect)((() => {
            y && _.current && !y?.controlsInit && i({
              ...y,
              controls: _,
              controlsInit: !0
            })
          }), [_.current, y]), (0, r.useEffect)((() => {
            y?.scene && _?.current && (_.current.enabled = v)
          }), [v, y]), (0, r.useEffect)((() => {
            _?.current && (!m && u || (_.current.enabled = !1))
          }), [m, u]), (0, n.useFrame)((() => {
            v && (_?.current?.update(), P.render(S, w))
          }), 1);
          const k = (0, r.useCallback)(g().debounce((() => {
            const e = x[B.CANVAS_WRAP]?.current;
            e && O({
              width: e.offsetWidth,
              height: e.offsetHeight
            })
          }), 100), [w, x]);
          (0, r.useEffect)((() => (k(), window.addEventListener("resize", k, !0), () => window.removeEventListener("resize", k, !0))), [h]);
          const L = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, Qe.jsx)(rt, {
              position: [0, -4.05, -11.76],
              envMap: t.environmentMap,
              envModel: t.environmentModel,
              onLoad: A
            }) : null), [t]),
            j = (0, r.useMemo)((() => (0, Qe.jsx)(gt, {
              baseIntensity: de,
              mapSize: 1024
            })), []),
            M = (0, r.useMemo)((() => (0, Qe.jsx)(ft, {
              gridState: c,
              loadedAssets: t
            })), [c, t]),
            V = (0, r.useMemo)((() => (0, Qe.jsx)("orbitControls", {
              ref: _,
              screenSpacePanning: !0,
              args: [w, P.domElement],
              enableDamping: !0,
              enableZoom: !1,
              enablePan: !1,
              maxPolarAngle: X.plateView.maxPolarAngle,
              minPolarAngle: X.plateView.minPolarAngle,
              maxAzimuthAngle: X.plateView.maxAzimuthAngle,
              minAzimuthAngle: X.plateView.minAzimuthAngle,
              minDistance: -1,
              maxDistance: 100
            })), [w, _, P]);
          return (0, Qe.jsxs)(Qe.Fragment, {
            children: [j, L, R && c ? M : "", V]
          })
        };
      var vt = a(1722),
        xt = a(4431),
        wt = a(4903);
      const Et = e => {
          let {
            isVisible: t = !1,
            top: a,
            bottom: n,
            onDrag: s,
            onHide: i,
            onShow: o,
            children: c,
            onTap: l,
            drawerY: d,
            mobileSidebarHeight: u
          } = e;
          const {
            state: m
          } = Je(), {
            currentView: p
          } = m, f = (0, r.useRef)(null), b = (0, r.useState)(D), g = d?.get ? d.get() : 0, y = (0, xt.useSpring)({
            y: t ? g : u,
            config: {
              easing: xt.easings.easeInOutQuart,
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
          const E = (0, r.useCallback)((0, wt.useDrag)((e => {
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
                w.current = !0, l({
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
          return (0, r.useMemo)((() => (0, Qe.jsxs)(xt.animated.div, {
            ...E(),
            ref: f,
            style: y ? {
              y: y.y
            } : void 0,
            className: "d06e542631e1fcd1f8e313637e581e34230c",
            children: [(0, Qe.jsx)("hr", {
              className: "d06e542631e1fcd1a91faa3cca1b0eb5ec05",
              onClick: P,
              "aria-hidden": "true"
            }), c]
          })), [y.y.get(), P, c])
        },
        Pt = e => {
          let {
            onClick: t
          } = e;
          return (0, Qe.jsx)("button", {
            type: "button",
            onClick: t,
            className: "d06e542631e1fcd1c5cb6a9ee116fb9038cc",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        St = () => (0, Qe.jsx)("div", {
          className: "d06e542631e1fcd1cfff519ec96d725939ed",
          "aria-label": "Los Santos Customs"
        }),
        _t = e => {
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
            className: "d06e542631e1fcd1cf5bbe6406012d6190c3",
            disabled: r,
            onClick: e => (e => {
              n && n(e), s(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, Qe.jsx)("p", {
              className: "d06e542631e1fcd1e89f1318679b1cb5b981",
              children: t
            }), a && (0, Qe.jsx)("div", {
              className: "d06e542631e1fcd1bf51cc3522627ca3b7f9"
            })]
          })
        },
        Tt = e => {
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
            onClose: c = (() => {})
          } = e;
          const l = (0, r.useRef)(null),
            {
              track: d
            } = (0, i.useGtmTrack)(),
            {
              state: {
                isMobile: u
              }
            } = Je();
          return (0, r.useEffect)((() => {
            o && l.current && (l.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [o]), (0, Qe.jsxs)("dialog", {
            ref: l,
            className: "d06e542631e1fcd1c6fb99519e95f8eba227",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), c()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            children: [t && (0, Qe.jsx)("i", {
              className: "d06e542631e1fcd1c53fac5b3efe1b1fa592"
            }), (0, Qe.jsxs)("div", {
              className: "d06e542631e1fcd1c1c74e2339197a57da41",
              children: [(0, Qe.jsx)("h3", {
                children: a
              }), n && (0, Qe.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, Qe.jsx)("div", {
              className: "d06e542631e1fcd1d9f6892c7824cf07e386",
              children: s.splice(0, 2).map((e => (0, Qe.jsx)(_t, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (l.current?.close(), void c())
              }, e.buttonText)))
            })]
          })
        },
        Rt = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, Qe.jsxs)("div", {
            className: "d06e542631e1fcd1efe5eaeb5559423002bc",
            children: [(0, Qe.jsx)("p", {
              className: "d06e542631e1fcd1c827db6a5956e0dea5a1",
              children: t
            }), (0, Qe.jsx)("p", {
              className: "d06e542631e1fcd1ee9baad67e97f93898e3",
              children: a
            })]
          })
        },
        It = {
          viewPlate: "d06e542631e1fcd1fe4f06af3be1ba7039f2",
          expanded: "d06e542631e1fcd1fb234ef972f920eb5df5",
          plateInfo: "d06e542631e1fcd1baa84d7c179d06b87a6d",
          vehicles: "d06e542631e1fcd1db3b0344524596cc220a",
          deleteBtnContainer: "d06e542631e1fcd1ea0ed621bc121bbaca85",
          deleteBtn: "d06e542631e1fcd1a53ceb90b9f76b2f8842",
          noDeleteClarification: "d06e542631e1fcd1c34f5b7b7d6e07714fec",
          drawerHandle: "d06e542631e1fcd1e9dfcfe6d0e822e998c6",
          sidebar: "d06e542631e1fcd1e71c5fb1062cc71167b7",
          landingPage: "d06e542631e1fcd1e6f4b08bc9a17586535c",
          ui: "d06e542631e1fcd1da92a60b60b090d88478",
          uiBottom: "d06e542631e1fcd1c2f48e5cf94c3ff17567",
          noVehicles: "d06e542631e1fcd1bc3f43fa5e19a47eeb0f"
        },
        Nt = "visible",
        Ot = (0, c.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, s.useRockstarTokenPing)(),
            {
              loggedIn: n
            } = (0, i.useRockstarUser)(),
            {
              setCurrentView: o,
              setShouldRenderScene: l,
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
              refs: $,
              three: z
            } = f,
            [H, U] = (0, r.useState)(E === pe.VIEW_PLATE),
            [F, q] = (0, r.useState)([]),
            [Z, K] = (0, r.useState)(!1),
            [J, Q] = (0, r.useState)(!1),
            ee = (0, r.useRef)(null),
            te = (0, r.useRef)(null),
            ae = (0, r.useRef)(null),
            re = (0, r.useRef)(null),
            ne = (0, r.useRef)(35),
            se = (0, r.useRef)(null),
            [ie, oe] = (0, r.useState)(.4 * window.innerHeight),
            [ce, de] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [ue, me] = (0, r.useState)(0),
            be = (0, r.useRef)(ie),
            ge = (0, r.useRef)(null),
            [ye, he] = (0, r.useState)(null),
            ve = (0, r.useRef)(null),
            xe = (0, r.useRef)(null),
            we = (0, r.useRef)(null),
            Ee = (0, r.useRef)(0),
            [Pe, Se] = (0, r.useState)(null),
            {
              track: _e
            } = (0, i.useGtmTrack)(),
            Te = {
              view_name: "license plate creator - view plate"
            },
            Re = E === pe.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            E !== pe.VIEW_PLATE && J && Q(!1)
          }), [E, J]);
          const Ie = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(x) || (Ie.current = x)
          }), [x]);
          const Ne = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            E && (Ne.current = E), E === pe.VIEW_PLATE && (we.current = !1)
          }), [E]);
          const Oe = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            _ && (Oe.current = _)
          }), [_]), (0, r.useEffect)((() => {
            h?.[0]?.current && E === pe.NEW_PLATE && Se(N(h[0].parentElement))
          }), [h, E]);
          const Ae = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Pe && (Ae.current = Pe)
          }), [Pe]);
          const Ce = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (Ne.current !== pe.VIEW_PLATE) return;
            const {
              renderer: r
            } = z;
            k({
              plateIndex: Ie.current,
              three: z,
              timeline: e,
              gridScale: t
            }, {
              onStart: () => {
                C ? document.body.style.touchAction = "none" : b(!1)
              },
              onComplete: e => {
                e?.three?.camera && (ee.current = new d.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), re?.current?.children && re.current.querySelectorAll("button").forEach((e => {
                  e.style.pointerEvents = "all"
                })), C && (r.domElement.style.touchAction = "none", L && setTimeout((() => {
                  document.body.style.touchAction = "auto", b(!1)
                }), 200), ge.current = N(r.domElement).y)
              },
              tweenPosition: 0,
              isResize: a,
              is3D: I
            })
          }), [z, x, E, T, M, C, I, L]);
          (0, r.useEffect)((() => {
            if (!z?.controls || !H) return;
            const {
              controls: e
            } = z, t = v().timeline({
              duration: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            Ce(t, _, !0)
          }), [_, z]), (0, r.useEffect)((() => {
            Ee.current = j
          }), [j]);
          const ke = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!z?.controls || !h?.[x]) return;
              const {
                controls: a
              } = z, r = e || v().timeline({
                defaults: {
                  duration: 0,
                  ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = R(), s = C && E === pe.CONFIRM_ORDER ? 1.5 : 1, i = !S() || C ? n * _ * s : 1.6 * n * _, c = $[B.ROOT].current, l = document.getElementById("list-plates-sidebar"), d = $[B.CANVAS_WRAP].current, u = h[x].current;
              if (c && l && u && d) {
                const e = O(x, c, Number(V.replace("px", "")), T, C ? void 0 : {
                    x: l.offsetWidth,
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
                  f = C || o() !== pe.CONFIRM_ORDER ? 0 : -1 * l.offsetWidth,
                  b = {
                    x: m.x - e.x + f,
                    y: m.y - e.y - 80 + (t.isResize ? Ee.current : window.scrollY)
                  },
                  g = {
                    current: 0
                  },
                  y = h.map((e => Number(getComputedStyle(e?.current)?.getPropertyValue("opacity"))));
                r.to(g, {
                  current: 1,
                  ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  onComplete: () => {
                    Se(N(u.parentElement))
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = g, r = (0, at.t7)(Number(s.x), b.x, a), n = (0, at.t7)(Number(s.y), b.y + (C ? .4 * window.innerHeight / -2 : 0), a), i = (0, at.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${i})`, t.isResize || h.forEach(((e, t) => {
                      if (t !== x && e?.current) {
                        const r = (0, at.t7)(y[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r.toFixed(2)
                      }
                    }))
                  }
                }, "<")
              }
            }), [x, T, C, E, V, z, h, $, ie, j]),
            Le = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
              if (!z?.camera || !ee.current) return;
              const {
                camera: t,
                controls: a,
                renderer: r
              } = z;
              if (v().to(t.position, {
                  x: Number(ee.current.x),
                  y: Number(ee.current.y),
                  z: Number(ee.current.z),
                  ease: G.toggleView.camera.ease,
                  duration: G.toggleView.camera.duration,
                  onStart: () => {
                    a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1, a.current.enabled = !1)
                  },
                  onComplete: () => {
                    o(pe.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.maxPolarAngle = X.plateView.maxPolarAngle, a.current.minPolarAngle = X.plateView.minPolarAngle, a.current.maxAzimuthAngle = X.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = X.plateView.minAzimuthAngle, a.current.enableZoom = !1), be.current = 0, e?.onComplete && e.onComplete()
                  }
                }), C) {
                const e = r.domElement;
                v().to(e.style, {
                  opacity: 1,
                  duration: G.toggleView.reset.duration,
                  ease: G.toggleView.reset.ease
                })
              }
              _e({
                ...Te,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "view plate",
                view_name: "license plate creator - view plate"
              })
            }), [C, z, ee]);
          (0, r.useEffect)((() => {
            m(B.VIEW_PLATE, se)
          }), [se.current]), (0, r.useEffect)((() => {
            q(M?.[x]?.vehicles ?? [])
          }), [x, M]), (0, r.useEffect)((() => {
            U(E === pe.VIEW_PLATE)
          }), [E]), (0, r.useEffect)((() => {
            z?.scene && re?.current && (e => {
              const {
                scene: t,
                controls: a
              } = z, r = [];
              t.traverse((e => {
                e.name === fe.LP && r.push(e), e.userData.index === Number(x) && (te.current = e)
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
                case Nt: {
                  Ce(n, Oe.current, !1);
                  const e = $[B.ROOT]?.current,
                    t = $[B.SIDEBAR]?.current,
                    a = h[x].current,
                    r = $?.[B.CANVAS_WRAP]?.current;
                  e && t && a && r && ke(n), xe?.current && n.to([re.current, xe.current, C ? void 0 : ae.current], {
                    autoAlpha: 1,
                    duration: G.sidebar.in.duration,
                    ease: G.sidebar.in.ease,
                    delay: G.sidebar.in.delay,
                    onComplete: () => {
                      xe?.current && (xe.current.style.pointerEvents = "all"), ae?.current && (ae.current.style.pointerEvents = "all")
                    }
                  }, 0), z?.camera && C && !ne.current && (ne.current = z.camera.fov);
                  break
                }
                default:
                  ae.current && v().to(ae.current, {
                    pointerEvents: "none"
                  }), re.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(re.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), !C && ae.current ? (v().to(ae.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), v().to(xe.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay,
                    onComplete: () => {
                      xe.current.style.pointerEvents = "none"
                    }
                  })) : v().to(xe.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay,
                    onComplete: () => {
                      xe.current.style.pointerEvents = "none"
                    }
                  }), a?.current && (a.current.minDistance = 0)
              }
            })(H ? Nt : "hidden")
          }), [xe.current, z, H]);
          const je = (0, r.useCallback)((() => {
            if (C && se.current) {
              const e = se.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              me(a - 48 - t), oe(a), de(-1 * (.6 * e - 80))
            }
          }), [C, se.current]);
          (0, r.useEffect)((() => {
            je()
          }), [C, se.current]);
          const Me = (0, r.useRef)(null),
            Ve = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Me.current = H
          }), [H]), (0, r.useEffect)((() => {
            Ve.current = z
          }), [z]);
          const De = (0, r.useCallback)(g().debounce((() => {
            if (!0 !== Me.current) return;
            const {
              renderer: e
            } = Ve.current;
            Ne.current === pe.VIEW_PLATE && (P() ? e.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : e.domElement.style.transform = "translateY(0px)", ae?.current && (ae.current.style.opacity = "1", ae.current.style.visibility = "visible", ae.current.style.pointerEvents = "all"), ke(null, {
              isResize: !0
            }), je())
          }), 100), [C, H, E, z, ce, V, T]);
          (0, r.useEffect)((() => {
            _ && (Oe.current = _), o() === pe.VIEW_PLATE ? De() : P() && (je(), he(.4 * window.innerHeight))
          }), [_]), (0, r.useEffect)((() => {
            if (!z?.scene) return;
            if (!z?.scene || !h?.[0]?.current) return;
            const {
              scene: e
            } = z, t = [], a = [], r = h[x].current;
            if (e.traverse((e => {
                e.name === fe.LP && e.material ? a[e.userData.index] = e.material : t.push(e.material)
              })), o() === pe.VIEW_PLATE)
              if (I) {
                const t = a[x];
                if (v().to(t, {
                    opacity: 1,
                    delay: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    duration: C ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    ease: C ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                    onStart: () => {
                      l(!0), v().to(r.style, {
                        opacity: 0,
                        duration: G.accessibilePlate.duration,
                        ease: G.accessibilePlate.ease,
                        onUpdate: () => {}
                      })
                    }
                  }), !we.current) {
                  const t = e.getObjectByName("Light4"),
                    a = new d.Vector3;
                  te?.current && (te.current.getWorldPosition(a), v().to(t.position, {
                    x: le.x,
                    y: a.y + le.y,
                    z: le.z,
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
                  }), we.current = !0
                }
              } else {
                const e = a[x];
                v().to(r.style, {
                  opacity: 1,
                  duration: G.accessibilePlate.duration,
                  ease: G.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: G.accessibilePlate.duration,
                      ease: G.accessibilePlate.ease,
                      onComplete: () => {
                        l(!1)
                      }
                    })
                  }
                })
              }
          }), [I, C, z]);
          const We = (0, Qe.jsxs)(Qe.Fragment, {
              children: [!C && (0, Qe.jsx)("hr", {
                className: It.drawerHandle,
                onClick: () => {
                  u(!A)
                },
                "aria-hidden": "true"
              }), (0, Qe.jsx)("div", {
                className: It.plateInfo,
                children: (0, Qe.jsxs)("section", {
                  className: It.vehiclesApplied,
                  children: [(0, Qe.jsx)("label", {
                    htmlFor: "vehicles",
                    className: F.length ? "" : `${It.noVehicles}`,
                    children: F.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, Qe.jsx)("div", {
                    className: It.vehicles,
                    children: F.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, Qe.jsx)(Rt, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            Ye = (0, r.useCallback)((e => {
              if (!z) return;
              const {
                drawerStateRef: t
              } = e, a = h?.[0].current;
              if (a) {
                const e = N(a.parentElement),
                  {
                    renderer: r,
                    camera: n
                  } = z,
                  s = r.domElement,
                  i = {
                    buttonWrapOpacity: ve.current.style.opacity,
                    buttonWrapTranslateY: N(ve.current).y,
                    canvasWrapOpacity: s.style.opacity,
                    canvasHeight: s.offsetHeight,
                    canvasTranslateY: Number(N(s).y),
                    fov: n.fov,
                    accessiblePlateX: Number(e.x),
                    accessiblePlateY: Number(e.y),
                    accessiblePlateScale: Number(e.scale)
                  },
                  o = {};
                t.current === D ? (o.buttonWrapOpacity = 0, o.buttonWrapTranslateY = ce, o.canvasWrapOpacity = 0, o.canvasHeight = -ce, o.canvasTranslateY = ge.current, o.fov = ne.current, o.accessiblePlateX = Ae.current.x, o.accessiblePlateY = Ae.current.y, o.accessiblePlateScale = Ae.current.scale, s.style.pointerEvents = "none") : (t.current === W || t.current === Y) && (o.buttonWrapOpacity = 1, o.buttonWrapTranslateY = 0, o.canvasWrapOpacity = 1, o.canvasHeight = -ce, o.canvasTranslateY = ge.current, o.fov = ne.current, o.accessiblePlateX = Ae.current.x, o.accessiblePlateY = Ae.current.y, o.accessiblePlateScale = Ae.current.scale, s.style.pointerEvents = "all"), v().to(i, {
                  buttonWrapOpacity: o.buttonWrapOpacity,
                  buttonWrapTranslateY: o.buttonWrapTranslateY,
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
                    s.style.opacity = i.canvasWrapOpacity, ve.current.style.opacity = i.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${i.buttonWrapTranslateY}px)`, a && (a.parentElement.style.opacity = i.canvasWrapOpacity, a.parentElement.style.transform = `translate(${i.accessiblePlateX}px,\n                            ${i.accessiblePlateY}px) scale(${i.accessiblePlateScale})`), n.fov = i.fov, n.updateProjectionMatrix(), s.style.transform = `translateY(${i.canvasTranslateY}px)`
                  }
                })
              }
            }), [z, ie, ce, h]),
            Be = (0, r.useCallback)((e => {
              if (!z) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: i,
                renderer: o
              } = z, c = o.domElement, l = h?.[0]?.current, d = -ce + .4 * window.innerHeight - 48;
              if (l)
                if (t.dragging) {
                  const e = (0, at.ii)(0, n, r.get()),
                    o = (0, at.t7)(0, 1, 1 - e);
                  c.style.opacity = o, ve.current.style.opacity = o, ve.current.style.transform = `translateY(${r.get()}px)`;
                  const d = (0, at.t7)(0, 1, 1 - 3 * e);
                  if (l.parentElement.style.opacity = d, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                    const e = (0, at.ii)(0, s, r.get()),
                      a = (0, at.t7)(ne.current, 40, e);
                    i.fov = a;
                    const n = Number(N(c).y) + t.delta[1] / 2;
                    if (c.style.transform = `translateY(${n}px)`, l) {
                      const e = N(l.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(N(l.parentElement).y) + t.delta[1] / 2;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                    i.updateProjectionMatrix()
                  }
                } else {
                  const e = {
                    buttonWrapOpacity: ve.current.style.opacity,
                    canvasWrapOpacity: c.style.opacity,
                    fov: i.fov,
                    uiButtonsTransformY: N(ve.current).y,
                    canvasHeight: c.offsetHeight,
                    canvasTranslateY: Number(N(c).y),
                    accessibilityPlateY: Number(N(l.parentElement).y),
                    accessibilityPlateOpacity: l.parentElement.style.opacity
                  };
                  a.current < ce / 2 ? (c.style.pointerEvents = "none", v().to(e, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    uiButtonsTransformY: ce,
                    canvasHeight: d,
                    accessibilityPlateOpacity: 0,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, ve.current.style.opacity = e.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, l.parentElement.style.opacity = e.accessibilityPlateOpacity
                    }
                  })) : a.current > s / 2 ? (c.style.pointerEvents = "all", v().to(e, {
                    buttonWrapOpacity: 1,
                    uiButtonsTransformY: s,
                    canvasWrapOpacity: 1,
                    fov: 40,
                    canvasHeight: d,
                    canvasTranslateY: Number(ge.current) + s / 2,
                    accessibilityPlateY: Number(Ae.current.y) + s / 2,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, ve.current.style.opacity = e.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, i.fov = e.fov, i.updateProjectionMatrix(), c.style.transform = `translateY(${e.canvasTranslateY}px)`, l.parentElement.style.transform = `translate(${Ae.current.x}px,\n                                ${e.accessibilityPlateY}px) scale(${Ae.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (c.style.pointerEvents = "all", v().to(e, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    uiButtonsTransformY: 0,
                    fov: ne.current,
                    canvasHeight: -ce,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Ae.current.y),
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = e.canvasWrapOpacity, ve.current.style.opacity = e.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px`, l.parentElement.style.opacity = e.accessibilityPlateOpacity, i.fov = e.fov, i.updateProjectionMatrix(), c.style.transform = `translateY(${e.canvasTranslateY}px)`;
                      const t = N(l.parentElement),
                        a = Number(t.x),
                        r = Number(t.scale),
                        n = e.accessibilityPlateY;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }))
                }
            }), [z, ve.current, ce, h, ie, Pe]),
            $e = (0, r.useCallback)((e => {
              const t = $[B.UI]?.current;
              if (!t || !z?.scene || !e) return;
              const {
                camera: a,
                renderer: r
              } = z, n = r.domElement, {
                y: s,
                sidebarRef: i
              } = e, o = t.offsetHeight, c = {
                mobileSidebarHeight: s.get(),
                opacity: i.current.style.opacity,
                height: n.offsetHeight,
                fov: a.fov
              };
              v().to(c, {
                opacity: 1,
                height: o,
                mobileSidebarHeight: .4 * window.innerHeight,
                fov: ne.current,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  i.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, i.current.style.opacity = c.opacity, ve.current.style.opacity = c.opacity, n.style.height = c.height, s.set(c.mobileSidebarHeight), a && (a.fov = c.fov, a.updateProjectionMatrix())
                },
                onComplete: () => {
                  n.style.pointerEvents = "all"
                }
              }), i.current.style.pointerEvents = "none"
            }), [$, z, ie]),
            ze = (0, r.useCallback)((e => {
              if (!z?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === ye && he(r);
              const {
                renderer: n
              } = z;
              t.current.style.pointerEvents = "all";
              const s = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              v().to(s, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: .4 * window.innerHeight / 2,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), ve.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, xe.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [ye, z]),
            He = (0, r.useMemo)((() => C ? (0, Qe.jsx)(Et, {
              isVisible: H,
              top: ce,
              bottom: ue,
              onTap: Ye,
              onDrag: Be,
              onHide: $e,
              onShow: ze,
              mobileSidebarHeight: ie,
              children: We
            }) : (0, Qe.jsx)("div", {
              ref: ae,
              className: It.sidebar,
              children: We
            })), [ve.current, xe.current, A, ie, C, H, $, ae.current, F, ce, ue]);
          return (0, Qe.jsxs)("div", {
            className: It.viewPlate,
            ref: se,
            children: [(0, Qe.jsx)(Tt, {
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
                      Q(!0);
                      const {
                        error: t,
                        status: r
                      } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        pingBearer: a,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      if (t) throw Object.assign(new Error(""), t);
                      r && y(x), Le()
                    } catch (e) {
                      p(["api", e])
                    }
                  })(), _e({
                    ...Te,
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
                  _e({
                    ...Te,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${t("lp.modal.delete.cancel").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${t("lp.modal.delete.title").toLowerCase()}`
                  })
                }
              }],
              showModal: Z,
              onClose: () => K(!1)
            }), He, (0, Qe.jsxs)("div", {
              ref: re,
              className: It.ui,
              children: [(0, Qe.jsx)(Pt, {
                onClick: Le
              }), (0, Qe.jsx)(xt.animated.div, {
                ref: ve,
                className: It.uiBottom,
                style: ye ? {
                  y: ye
                } : void 0,
                children: (0, Qe.jsx)(St, {})
              })]
            }), (0, Qe.jsxs)("div", {
              className: It.deleteBtnContainer,
              ref: xe,
              children: [(0, Qe.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: It.deleteBtn,
                disabled: w?.noDelete || J,
                onClick: () => {
                  w?.noDelete || J || (_e({
                    ...Te,
                    event: "license_plate_delete_click",
                    event_category: "license_plate",
                    event_action: "delete",
                    event_label: "click",
                    text: t("lp.modal.delete.title").toLowerCase()
                  }), K(!0))
                },
                tabIndex: Re,
                type: "button"
              }), w?.noDelete && (0, Qe.jsx)("label", {
                htmlFor: "nodelete",
                className: It.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        At = (0, c.withTranslations)((e => {
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
            className: "d06e542631e1fcd1fbe02591dfe1e747a935 d06e542631e1fcd1ae971d2586817570fa25 " + (!1 === r ? "d06e542631e1fcd1e98c19a935da3321df72" : ""),
            children: n(o)
          })
        })),
        Ct = {
          lpStyleOption: "d06e542631e1fcd1fdb659ff7c0f2e33fda0",
          selected: "d06e542631e1fcd1c5c9b2d5655a4e556a50",
          lpStyleOptionImage: "d06e542631e1fcd1add00686bede52167de6"
        },
        kt = e => {
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
          } = n, c = (0, r.useCallback)((() => {
            $.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [i, t]);
          return (0, Qe.jsx)("button", {
            className: [Ct.lpStyleOption, o === t.id ? Ct.selected : ""].join(" "),
            onClick: () => c(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, Qe.jsx)("img", {
              className: Ct.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        Lt = (0, c.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: n
          } = e;
          const {
            loggedIn: o
          } = (0, i.useRockstarUser)(), l = (0, s.useRockstarTokenPing)(), {
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
            f(B.NEW_PLATE_FORM, N)
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
                  } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/validate", {
                    pingBearer: l,
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
          const L = (0, r.useMemo)((() => y?.map((e => (0, Qe.jsx)(kt, {
            style: e,
            tabIndex: C
          }, e.id)))), [y, g]);
          return (0, Qe.jsxs)("form", {
            ref: N,
            className: "d06e542631e1fcd1c03fbea909908002e429",
            onSubmit: e => {
              e.preventDefault(), A.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, Qe.jsxs)("section", {
              children: [(0, Qe.jsx)("label", {
                htmlFor: "plate-text-input",
                ref: R,
                children: n("lp.create.title")
              }), (0, Qe.jsxs)("div", {
                ref: I,
                className: "d06e542631e1fcd1f16c8dbd6025471f52d4",
                children: [(0, Qe.jsx)("i", {
                  className: "" + (!1 === P ? "d06e542631e1fcd1a85e9791453fdcfdfaae" : "")
                }), (0, Qe.jsx)("input", {
                  id: "plate-text-input",
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
                  pattern: "[a-zA-Z0-9]{4,10}",
                  type: "text",
                  onKeyDown: e => {
                    "Enter" === e.code && A.current && A.current.blur()
                  },
                  value: S,
                  ref: A
                }), (0, Qe.jsx)(At, {
                  plateNumberStatus: v
                })]
              })]
            }), (0, Qe.jsx)("hr", {
              className: "d06e542631e1fcd1a88bd201bfcf6276af22"
            }), (0, Qe.jsxs)("section", {
              children: [(0, Qe.jsx)("label", {
                htmlFor: "plate-style-selector",
                children: n("lp.create.bgselector")
              }), (0, Qe.jsx)("div", {
                id: "plate-style-selector",
                ref: O,
                className: "d06e542631e1fcd1f7ff0013c2f3d7d85637",
                children: L
              })]
            })]
          })
        })),
        jt = e => {
          let {
            buttons: t,
            refName: a = B.SIDEBAR_BUTTONS,
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
            className: "d06e542631e1fcd1bc9136e36a81df297fc4",
            ref: i,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, Qe.jsx)("button", {
                className: [a ? "d06e542631e1fcd1a60bffb039fc99fb5f49" : "", n ? "d06e542631e1fcd1e057143f90593c9abfd0" : ""].join(" ").trim(),
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
        Mt = "d06e542631e1fcd1f6d40457decba9555a4f",
        Vt = "d06e542631e1fcd1c8d97f812f2cf3e6fef7",
        Dt = (0, c.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            is3DToggle: a = !1,
            t: n
          } = e;
          const [s, o] = (0, r.useState)(!1), [c, l] = (0, r.useState)(!1), {
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
            l(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            a || u(B.TOGGLE_VIEW_BUTTON, h)
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
            className: "d06e542631e1fcd1df4382d03fcd3bc980fa",
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
              className: Mt,
              children: (0, Qe.jsx)("p", {
                className: c ? Vt : "",
                children: a ? v.dimensionToggle.twoDimensions : v.carViewToggle.plateView
              })
            }), (0, Qe.jsx)("div", {
              className: Mt,
              children: (0, Qe.jsx)("p", {
                className: c ? Vt : "",
                children: a ? v.dimensionToggle.threeDimensions : v.carViewToggle.carView
              })
            }), (0, Qe.jsx)("span", {
              className: "d06e542631e1fcd1b2453a03192c6ddc36d4"
            })]
          })
        })),
        Wt = {
          orderConfirmed: "d06e542631e1fcd1cf7e5e0923b8256a2323",
          visible: "d06e542631e1fcd1f49f2ce6c0c2c3078641",
          background: "d06e542631e1fcd1f6e84201dac89879fbbd",
          content: "d06e542631e1fcd1fe4db11268b7cc20a4a9",
          secondaryWrap: "d06e542631e1fcd1ac46f0f3e93dcb543606",
          contentHeading: "d06e542631e1fcd1cb52c60771f4dedd7631",
          plateRedemptionInstructions: "d06e542631e1fcd1e2d9a88190e1e3de5bb6",
          backToPlatesButton: "d06e542631e1fcd1b7ac25abe12168157046",
          hover: "d06e542631e1fcd1d6fcaa3a9d4229d26b6c",
          ctaText: "d06e542631e1fcd1d2ccddbaa18bbe20a426",
          isWindows: "d06e542631e1fcd1b236dd886c9982522324"
        },
        Yt = (0, c.withTranslations)((e => {
          let {
            isVisible: t,
            vehicleModel: a,
            t: n,
            top: s,
            drawerY: o,
            tabIndex: c
          } = e;
          const {
            setCurrentView: l,
            setIsExpanded: d,
            setRefs: u,
            state: m
          } = Je(), {
            currentView: p,
            isExpanded: f,
            refs: b,
            three: g,
            isMobile: y,
            accessiblePlates: x
          } = m, w = (0, r.useRef)(null), E = (0, r.useRef)(null), P = (0, r.useRef)(null), S = (0, r.useRef)(null), T = (0, r.useRef)(null), {
            track: R
          } = (0, i.useGtmTrack)(), I = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(B.ORDER_BG, T)
          }), [T.current]);
          const N = b[B.CONFIRM_CONTENT]?.current,
            O = b[B.CONFIRM_SIDEBAR]?.current,
            A = b[B.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            C = b[B.CONFIRM_SIDEBAR_BUTTONS]?.current,
            k = b[B.NEW_PLATE_SIDEBAR]?.current,
            L = b[B.CANVAS_WRAP]?.current,
            j = b[B.SIDEBAR_BUTTONS]?.current,
            M = T.current,
            V = w.current,
            D = P.current,
            W = S.current,
            Y = E.current,
            $ = b[B.UI]?.current,
            z = b[B.NEW_PLATE_UI]?.current,
            H = b[B.SIDEBAR]?.current,
            U = b[B.ACCESSIBLE_PLATE_GRID]?.current,
            X = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            X.current = x
          }), [x]);
          const q = (0, r.useCallback)((() => {
            l(pe.LIST_PLATES), R({
              ...I,
              event: "cta_return_page",
              event_category: "cta",
              event_action: "return_page",
              text: n("lp.success.cta").toLowerCase()
            })
          }), []);
          return (0, r.useEffect)((() => {
            if (!g || !X?.current) return;
            const {
              renderer: e,
              camera: a,
              originalCameraPosition: r,
              originalCameraFov: n,
              controls: i,
              originalControlsTarget: c
            } = g;
            if (!(e && M && N && U)) return;
            const l = _();
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
              if (v().to([e.domElement, H], {
                  autoAlpha: 1,
                  ease: G.transaction.fade.landingPage.ease,
                  duration: G.transaction.fade.landingPage.duration
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
                    M.style.transform = `translateY(${t}px)`, M.style.opacity = e.opacity
                  }
                }, 0)
              } else t.to(M, {
                autoAlpha: 0
              }, 0).to([V, D, W], {
                autoAlpha: 0
              }), t.to(N, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), t.to(M, {
                x: "-100vw"
              }, 0), v().set([k, z], {
                x: 0
              }), v().set(O, {
                left: "revert"
              })
            } else if (t) {
              const t = v().timeline({
                defaults: {
                  ease: G.transaction.confirmOrder.ease,
                  duration: G.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), v().set(L, {
                    x: 0
                  }), g.scene.traverse((e => {
                    e.name === fe.LP && 0 === e.userData.index && e.material && (e.material.opacity = 0)
                  })), a.position.set(r.x, r.y, r.z), i?.current && (i.current.minDistance = 0, i.current.target.set(c.x, c.y, c.z)), $ && (a.fov = n, a.updateProjectionMatrix(), F.saturation.value = 0)
                },
                onStart: () => {
                  v().set(Y, {
                    height: 0
                  })
                }
              });
              if (t.to(e.domElement, {
                  autoAlpha: 0
                }, 0), X.current.forEach(((e, t) => {
                  v().to(e.current.style, {
                    opacity: 0,
                    onComplete: 0 === t ? () => {
                      U.style.transform = "none"
                    } : void 0
                  })
                })), t.to(V, {
                  autoAlpha: 1,
                  ease: h.Power1.easeIn,
                  duration: .3
                }, "<1").to(Y, {
                  height: "auto",
                  ease: h.Power2.easeInOut,
                  duration: .4
                }, "<1").to([D, W], {
                  autoAlpha: 1,
                  ease: h.Power1.easeIn,
                  duration: .3,
                  stagger: .1
                }, "<0.2"), y) {
                if (o) {
                  v().set(M, {
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
                      M.style.transform = `translateY(${s-e.drawerHeight}px`, o.set(e.drawerHeight), C && (C.style.pointerEvents = "none", C.style.opacity = String(1 - e.lerp), C.style.transform = `translateY(${100*e.lerp}%)`), A && (A.style.pointerEvents = "none", A.style.opacity = String(1 - e.lerp)), t.to(j, {
                        autoAlpha: 0
                      }, "<"), M.style.opacity = e.lerp
                    }
                  }, 0)
                }
              } else t.to(N, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(M, {
                x: 0
              }, 0).to(M, {
                autoAlpha: 1
              }, 0).to(O, {
                autoAlpha: 0,
                ease: G.transaction.fade.out.ease,
                duration: G.transaction.fade.out.duration
              }, 0).set(M, {
                pointerEvents: "all"
              }), O && t.to(O, {
                left: 100 - l + "vw"
              }, 0);
              R({
                ...I,
                event: "virtualPageview",
                display_type: y ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, T.current, g, p, y ? o : void 0]), (0, Qe.jsx)("div", {
            className: [Wt.orderConfirmed, f ? Wt.visible : ""].join(" "),
            children: (0, Qe.jsx)("div", {
              ref: T,
              className: Wt.background,
              children: (0, Qe.jsxs)("div", {
                className: Wt.content,
                children: [(0, Qe.jsx)("h1", {
                  ref: w,
                  className: Wt.contentHeading,
                  children: n("lp.success.title")
                }), (0, Qe.jsxs)("div", {
                  ref: E,
                  className: Wt.secondaryWrap,
                  children: [(0, Qe.jsx)("p", {
                    ref: P,
                    className: Wt.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: n("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, Qe.jsx)("button", {
                    ref: S,
                    type: "button",
                    className: Wt.backToPlatesButton,
                    onClick: () => {
                      q()
                    },
                    "aria-label": n("lp.success.cta"),
                    tabIndex: c,
                    children: (0, Qe.jsx)("span", {
                      className: Wt.ctaText,
                      children: n("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        })),
        Bt = (0, c.withTranslations)((e => {
          let {
            t,
            top: a,
            drawerY: n
          } = e;
          const {
            state: o,
            setError: l,
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
            track: $
          } = (0, i.useGtmTrack)(), z = {
            view_name: "license plate creator - confirm order"
          }, H = b === pe.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p(B.CONFIRM_SIDEBAR, W)
          }), [W.current]), (0, r.useEffect)((() => {
            p(B.CONFIRM_CONTENT, Y)
          }), [Y.current]);
          const U = S[B.ORDER_BG]?.current,
            F = S[B.CONFIRM_CONTENT]?.current,
            X = S[B.CONFIRM_SIDEBAR]?.current,
            q = S[B.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            Z = S[B.CONFIRM_SIDEBAR_BUTTONS]?.current,
            K = S[B.ACCESSIBLE_PLATE_GRID]?.current,
            J = S[B.NEW_PLATE_SIDEBAR]?.current,
            Q = S[B.CANVAS_WRAP]?.current,
            ee = S[B.SIDEBAR_BUTTONS]?.current,
            te = S[B.NEW_PLATE_UI]?.current;

          function ae() {
            if ($({
                ...z,
                event: "virtualPageview",
                display_type: P ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(E?.camera && F && X && Q && U && K)) return;
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
            ee && v().set(ee, {
              pointerEvents: "all"
            }), P ? t.to(ee, {
              autoAlpha: 1
            }, "<") : (X && t.to(X, {
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
                } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/order", {
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
                } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: k,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (i) throw Object.assign(new Error(""), i);
                o[`character${a}Pending`] && m(o)
              } catch (e) {
                l(["api", e])
              }
            })()
          }), [C, A, w?.[0]?.plateText, g, V, R]);
          (0, r.useEffect)((() => {
            if (b !== pe.CONFIRM_ORDER || I) {
              if (P && !I) {
                ee && v().set(ee, {
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
                }), X && v().to(X, {
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
              if (!(E?.camera && F && X && Q && U && K)) return;
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
              if (ee && v().set(ee, {
                  pointerEvents: "none"
                }), P && (a.ease = G.sidebar.mobile.drawer.ease, a.duration = G.sidebar.mobile.drawer.duration, a.delay = G.sidebar.mobile.drawer.duration / 2, r.ease = G.sidebar.mobile.drawer.ease, r.duration = G.sidebar.mobile.drawer.duration, X && t.to(X, a, 0), K)) {
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
                }, "<"), X && t.to(X, {
                  autoAlpha: 1
                }, "<"), t.to(J, {
                  autoAlpha: 0
                }, "<"), t.set(U, {
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
              f(t), $({
                ...z,
                event: "license_plate_select_vehicle",
                event_category: "license_plate",
                event_action: "select_vehicle",
                position: e.target.selectedIndex
              })
            }), [T]),
            se = (0, Qe.jsx)(jt, {
              refName: B.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: V,
                onClick: () => {
                  d(pe.NEW_PLATE), ae(), $({
                    ...z,
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
                  re(), $({
                    ...z,
                    event: "license_plate_create_confirm",
                    event_category: "license_plate",
                    event_action: "create",
                    event_label: "confirm",
                    text: t("lp.confirm.next").toLowerCase()
                  })
                }
              }],
              isLoading: V,
              tabIndex: H
            });
          let ie;
          return P && (ie = q ? (0, vt.createPortal)(se, q) : null), (0, Qe.jsx)("div", {
            className: "d06e542631e1fcd1be866f32eab934537631",
            "aria-hidden": b !== pe.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, Qe.jsxs)("div", {
              className: "d06e542631e1fcd1a09e457783ba70411b6a",
              ref: Y,
              children: [(0, Qe.jsx)("span", {}), (0, Qe.jsxs)("div", {
                className: "d06e542631e1fcd1bdb2b5b5d19f7f44f6d7",
                ref: W,
                children: [(0, Qe.jsxs)("form", {
                  className: "d06e542631e1fcd1e6e66ce12aa2d8d190ef",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, Qe.jsxs)("div", {
                    className: "d06e542631e1fcd1e5564bc6d848a683537c",
                    children: [(0, Qe.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, Qe.jsxs)("section", {
                      children: [(0, Qe.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, Qe.jsx)("div", {
                        className: "d06e542631e1fcd1e7c896dad22669956489",
                        children: (0, Qe.jsx)("select", {
                          value: g?.id ?? "null",
                          onChange: ne,
                          required: !0,
                          tabIndex: H,
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
                        className: "d06e542631e1fcd1d566190b33aa234ddd80",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, Qe.jsx)("p", {
                    className: "d06e542631e1fcd1d6bae7e0151e183d3293",
                    children: t("lp.confirm.info")
                  })]
                }), P ? ie : se]
              }), (0, Qe.jsx)(Yt, {
                drawerY: n,
                top: a,
                isVisible: I,
                vehicleModel: `${g?.manufacturer} ${g?.name}`,
                tabIndex: I ? H : -1
              })]
            })
          })
        })),
        $t = {
          CTAWrap: "d06e542631e1fcd1c4cbaa699036913808c4",
          loggedOut: "d06e542631e1fcd1bdbaf49f96c03c82c5e4",
          newOrder: "d06e542631e1fcd1d02e731e64c1749dab46",
          loggedOutShader: "d06e542631e1fcd1ed5de935649b7487addc",
          pendingOrderShader: "d06e542631e1fcd1a4b9759cde644be1c94b",
          visible: "d06e542631e1fcd1e83d87e82c84a46d86c5",
          createNewPlate: "d06e542631e1fcd1b78b65ece97c489311aa",
          signIn: "d06e542631e1fcd1d09aecd4d58aeb14e15e",
          hover: "d06e542631e1fcd1c13648f71e994e0f8458",
          ctaText: "d06e542631e1fcd1f2ab95570f791dbca865",
          isWindows: "d06e542631e1fcd1fc1a5cb44b899b14a45e",
          tryWithoutSigningIn: "d06e542631e1fcd1f70b0bf7f92aef13ca2c",
          firstPlateLoggedIn: "d06e542631e1fcd1ba18e8d268032703bc27",
          maxPlatesReached: "d06e542631e1fcd1a00f9428dc1e65319e6b",
          hidden: "d06e542631e1fcd1cfe744f3b51090d0f4c5",
          loggedOutCTA: "d06e542631e1fcd1c9286346492d0d5b10a5",
          ctaIcon: "d06e542631e1fcd1ba5988c6f9002e713b3d"
        },
        zt = "hidden",
        Ht = "visible",
        Ut = (0, c.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setShouldRenderScene: a,
            setShouldForce2D: n,
            state: s,
            setCurrentView: o,
            setLastView: c,
            setIsScrollEnabled: l,
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
            realHeight: $,
            shouldForce2D: z
          } = s, [H, U] = (0, r.useState)(0), [q, Z] = (0, r.useState)(!1), [K, re] = (0, r.useState)(!1), [ne, ie] = (0, r.useState)(.4 * window.innerHeight), [oe, ce] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), be = (0, r.useRef)(ne), [ge, ye] = (0, r.useState)(null), [he, ve] = (0, r.useState)(!1), [xe, we] = (0, r.useState)(null), Ee = (0, r.useRef)(null), Pe = (0, r.useRef)(null), Se = (0, r.useRef)(null), _e = (0, r.useRef)(null), Te = (0, r.useRef)(null), Re = (0, r.useRef)(!1), Ie = (0, r.useRef)(!1), [Ne, Oe] = (0, r.useState)(null), Ae = (0, r.useRef)(Ne), Ce = (0, r.useRef)(null), ke = (0, r.useRef)(null), Le = (0, r.useRef)(null), je = (0, r.useRef)(null), Me = (0, r.useRef)(null), Ve = (0, r.useRef)(null), De = (0, r.useRef)(null), We = (0, r.useRef)(null), Ye = (0, r.useRef)(null), Be = (0, r.useRef)(null), $e = (0, r.useRef)(null), ze = (0, r.useRef)(null), {
            track: He
          } = (0, i.useGtmTrack)(), Ue = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            f?.[0]?.current && b === pe.NEW_PLATE && we(N(f[0].parentElement))
          }), [f, b]);
          const Fe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            xe && (Fe.current = xe)
          }), [xe]), (0, r.useEffect)((() => {
            const e = b === pe.NEW_PLATE || !(!P() || b !== pe.CONFIRM_ORDER);
            q !== e && Z(e), e || ve(!1)
          }), [b, P()]);
          const Ge = (0, r.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!V) return;
            const {
              scene: a,
              camera: r,
              controls: n,
              renderer: s
            } = V, i = a.getObjectByName("Scene");
            if (!i) return;
            const o = R(),
              c = E && b === pe.CONFIRM_ORDER ? 1.5 : 1,
              u = !S() || E ? o * g * c : 1.6 * o * g,
              m = [];
            a.traverse((e => {
              0 === e.userData.index && ($e.current = e, i.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === fe.LP && m.push(e)
            }));
            const y = E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              h = v().timeline({
                defaults: {
                  duration: y,
                  ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                },
                onStart: () => {
                  Ae.current || (n.current.minDistance = 0)
                }
              });
            switch (e) {
              case Ht: {
                const e = M[B.CTA_SHADER]?.current;
                if (!n.current || !e) return;
                const i = new d.Vector3;
                $e?.current && $e.current.getWorldPosition(i);
                const o = M[B.ROOT].current,
                  y = document.getElementById("list-plates-sidebar"),
                  x = M[B.CANVAS_WRAP].current,
                  P = f?.[0].current;
                o && (y || E) && P && x && (b === pe.NEW_PLATE || E && b === pe.CONFIRM_ORDER) && qe(h, t);
                const S = (new d.Vector3).copy(i);
                Ae.current && (S.z = i.z - 5 * g);
                const R = {
                  cameraPosition: {
                    start: (new d.Vector3).copy(r.position),
                    end: new d.Vector3(i.x, i.y, i.z + u)
                  },
                  controlsTarget: {
                    start: (new d.Vector3).copy(n.current.target),
                    end: S
                  },
                  plateOpacity: m.map(((e, t) => ({
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
                    start: r.fov,
                    end: E && b === pe.CONFIRM_ORDER ? 1.2 * Te.current : Te.current
                  },
                  ctaShaderOpacity: {
                    start: e.style.opacity,
                    end: 0
                  }
                };
                if (E && P) {
                  const e = N(P.parentElement);
                  R.translateY = {
                    start: b === pe.NEW_PLATE ? ze?.current?.offsetHeight : 0,
                    end: b === pe.NEW_PLATE ? 0 : ze?.current?.offsetHeight
                  }, R.startingDrawerHeight = Ee.current ? Ee.current.get() : 0, R.startingCanvasHeight = Number(N(s.domElement).y), R.canvasWidth = s.domElement.offsetWidth, R.canvasY = {
                    start: Number(N(s.domElement).y),
                    end: .4 * window.innerHeight / -2
                  }, R.canvasYConfirmOrder = {
                    start: Number(N(s.domElement).y),
                    end: oe / 1.5
                  }, R.accessiblePlateGridYConfirmOrder = {
                    start: Number(e.y),
                    end: Number(e.y) + (R.canvasYConfirmOrder.end - R.canvasYConfirmOrder.start)
                  }, R.accessiblePlateGridXConfirmOrder = {
                    start: Number(e.x),
                    end: Number(e.x)
                  }, R.accessiblePlateGridScaleConfirmOrder = {
                    start: Number(N(P.parentElement).scale),
                    end: Number(N(P.parentElement).scale) / c
                  }, R.drawerHeight = {
                    start: Ee.current ? Ee.current.get() : 0,
                    end: b === pe.NEW_PLATE ? 0 : oe / (_ ? 1 : 2)
                  }, R.cameraFov = {
                    start: r.fov,
                    end: b === pe.CONFIRM_ORDER ? 1.2 * Te.current : Te.current
                  }, R.canvasOpacity = {
                    start: s.domElement.style.opacity,
                    end: 1
                  }
                }
                const I = {
                  current: 0
                };
                if (b === pe.NEW_PLATE) {
                  const i = P.querySelector("canvas");
                  h.to(I, {
                    current: 1,
                    duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                    onUpdate: () => {
                      const a = t ? 1 : I.current,
                        o = R.cameraPosition.start.clone().lerp(R.cameraPosition.end, a);
                      r.position.set(o.x, o.y, o.z);
                      const c = R.controlsTarget.start.clone().lerp(R.controlsTarget.end, a);
                      n.current.target.x = c.x, n.current.target.y = c.y, n.current.target.z = c.z, m.forEach(((e, t) => {
                        e.material && (e.material.opacity = (0, at.t7)(R.plateOpacity[t].start, R.plateOpacity[t].end, a))
                      }));
                      const l = (0, at.t7)(R.firstPlateSaturation.start, R.firstPlateSaturation.end, a);
                      if (F.saturation.value = l, p && !C && i) {
                        const e = !!C,
                          t = (0, at.t7)(R.firstPlateOpacity.start, R.firstPlateOpacity.end, a);
                        i.style.filter = `saturate(${l})${!e&&` opacity(${t})`}`
                      }
                      if (e) {
                        const t = (0, at.t7)(R.ctaShaderOpacity.start, R.ctaShaderOpacity.end, a);
                        e.style.opacity = t
                      }
                      if (R.cameraFov.start !== R.cameraFov.end && r.updateProjectionMatrix(), E) {
                        if (ze.current) {
                          const e = (0, at.t7)(R.translateY.start, R.translateY.end, a);
                          ze.current.style.transform = `translateY(${e}px)`, ze.current.style.opacity = String(a), ze.current.style.pointerEvents = "all"
                        }
                        Ee.current && Ee.current.set((0, at.t7)(R.drawerHeight.start, R.drawerHeight.end, a));
                        const e = (0, at.t7)(R.canvasY.start, R.canvasY.end, a);
                        s.domElement.style.transform = `translateY(${e}px)`
                      }
                    },
                    onStart: () => {
                      E ? document.body.style.touchAction = "none" : l(!1)
                    },
                    onComplete: () => {
                      b === pe.NEW_PLATE && (o && (o.style.touchAction = "none"), _e.current = new d.Vector3(r.position.x, r.position.y, r.position.z), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      })), E && (s.domElement.style.touchAction = "none", T && setTimeout((() => {
                        l(!1), document.body.style.touchAction = "auto"
                      }), 200), Se.current = N(s.domElement).y), i && i.classList.remove($t.newOrder), s.render(a, r))
                    }
                  }, 0), E && h.to(M[B.NEW_PLATE_FORM].current, {
                    autoAlpha: 1,
                    duration: t ? 0 : G.sidebar.mobile.drawer.duration,
                    ease: G.sidebar.mobile.drawer.ease,
                    delay: G.sidebar.mobile.drawer.duration / 2,
                    onStart: () => {
                      ze.current && (ze.current.style.pointerEvents = "all", ze.current.style.visibility = "visible")
                    }
                  }, 0), h.to([Ve.current, E ? void 0 : Me.current], {
                    autoAlpha: 1,
                    duration: t ? 0 : G.sidebar.in.duration,
                    ease: G.sidebar.in.ease,
                    delay: G.sidebar.in.delay,
                    onStart: () => {
                      De.current && (De.current.style.transform = "translateY(0px)")
                    },
                    onComplete: () => {
                      E || v().set([Me.current, M[B.SIDEBAR_BUTTONS]?.current], {
                        pointerEvents: "all"
                      }), Ve.current && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      }))
                    }
                  }, "<")
                } else b === pe.CONFIRM_ORDER && (!0 === Ae.current && ot(), E && (h.to(I, {
                  current: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = I;
                    if (ze.current) {
                      Ee.current && Ee.current.set((0, at.t7)(R.drawerHeight.start, R.drawerHeight.end, e));
                      const t = R.cameraPosition.start.clone().lerp(R.cameraPosition.end, e);
                      r.position.set(t.x, t.y, t.z), s.domElement.style.opacity = (0, at.t7)(R.canvasOpacity.start, R.canvasOpacity.end, e), Ve?.current?.style && (Ve.current.style.opacity = String(1 - e));
                      const a = (0, at.t7)(R.translateY.start, R.translateY.end, e);
                      ze.current.style.transform = `translateY(${a}px)`, ze.current.style.pointerEvents = "none";
                      const n = (0, at.t7)(R.canvasYConfirmOrder.start, R.canvasYConfirmOrder.end, e);
                      s.domElement.style.transform = `translateY(${n}px)`;
                      const i = (0, at.t7)(R.accessiblePlateGridXConfirmOrder.start, R.accessiblePlateGridXConfirmOrder.end, e),
                        o = (0, at.t7)(R.accessiblePlateGridYConfirmOrder.start, R.accessiblePlateGridYConfirmOrder.end, e),
                        c = (0, at.t7)(R.accessiblePlateGridScaleConfirmOrder.start, R.accessiblePlateGridScaleConfirmOrder.end, e);
                      P?.parentElement && (P.parentElement.style.transform = `translate(${i}px,\n                                        ${o}px) scale(${c})`)
                    }
                  }
                }, 0), h.to(M[B.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(Ve.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), E && ze?.current) {
                  const e = {
                    transform: 0,
                    translateY: N(ze.current).y,
                    drawerHeight: Ee.current ? Ee.current.get() : 0,
                    fov: r.fov
                  };
                  v().to(e, {
                    translateY: ze?.current?.offsetHeight,
                    duration: G.sidebar.mobile.drawer.duration,
                    drawerHeight: .4 * window.innerHeight,
                    fov: Te.current,
                    ease: G.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      ze.current && (Ee.current && Ee.current.set(e.drawerHeight), ze.current.style.transform = `translateY(${e.translateY}px)`, ze.current.style.pointerEvents = "none", r.fov = e.fov, r.updateProjectionMatrix())
                    }
                  })
                }
                if (b === pe.CONFIRM_ORDER ? _ || 1 == !Ae.current && v().to(r.position, {
                    x: Number(_e.current.x),
                    y: Number(_e.current.y),
                    z: 0,
                    ease: G.transaction.confirmOrder.ease,
                    duration: G.transaction.confirmOrder.duration
                  }) : v().to(Me.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), b === pe.LIST_PLATES) {
                  const e = M[B.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                n?.current && (n.current.minDistance = 0), Ae.current = !1, Oe(!1)
            }
          }), [b, V, M, E, C, g, h, I, A, $, ge, oe, Ee.current, Ae.current, w]);
          (0, r.useEffect)((() => {
            M?.[B.SIDEBAR_BUTTONS]?.current && (ze.current = M[B.SIDEBAR_BUTTONS].current)
          }), [M]), (0, r.useEffect)((() => {
            m(B.NEW_PLATE, Ye)
          }), [Ye.current]), (0, r.useEffect)((() => {
            m(B.CONFIRM_SIDEBAR_BUTTONS_PORTAL, We)
          }), [We.current]), (0, r.useEffect)((() => {
            m(B.NEW_PLATE_SIDEBAR, Me)
          }), [Me.current]), (0, r.useEffect)((() => {
            m(B.NEW_PLATE_UI, Ve)
          }), [Ve.current]);
          const Xe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Xe.current = V
          }), [V]), (0, r.useEffect)((() => {
            Pe.current = I
          }), [I]);
          const qe = (0, r.useCallback)((function(e) {
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
              }), n = R(), s = E && b === pe.CONFIRM_ORDER ? 1.5 : 1, i = !S() || E ? n * g * s : 1.6 * n * g, c = M[B.ROOT].current, l = document.getElementById("list-plates-sidebar"), d = M[B.CANVAS_WRAP].current, u = f[0].current;
              if (c && (E || l) && u && d) {
                const e = O(0, c, Number($.replace("px", "")), h, E ? void 0 : {
                    x: l.offsetWidth,
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
                  b = E || o() !== pe.CONFIRM_ORDER ? 0 : -1 * l.offsetWidth,
                  g = {
                    x: m.x - e.x + b,
                    y: m.y - e.y - 80 + (A === pe.CONFIRM_ORDER || t ? I : window.scrollY)
                  },
                  y = {
                    current: 0
                  },
                  v = f.map((e => Number(getComputedStyle(e?.current).getPropertyValue("opacity")))),
                  x = A === pe.CONFIRM_ORDER ? G.transaction.confirmOrder.ease : G.clickPlate.ease,
                  w = A === pe.CONFIRM_ORDER ? G.transaction.confirmOrder.duration : G.clickPlate.duration,
                  P = .4 * window.innerHeight,
                  S = E ? G.sidebar.mobile.drawer.duration : w,
                  _ = t ? 0 : S;
                r.to(y, {
                  current: 1,
                  ease: E ? G.sidebar.mobile.drawer.ease : x,
                  duration: _,
                  onComplete: () => {
                    we(N(u.parentElement)), ve(!0)
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = y, r = (0, at.t7)(Number(s.x), g.x, a), n = (0, at.t7)(Number(s.y), g.y + (E ? P / -2 : 0), a), i = (0, at.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${i})`, t || f.forEach(((e, t) => {
                      if (0 !== t && e?.current) {
                        const r = (0, at.t7)(v[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r
                      }
                    }))
                  }
                }, "<")
              }
            }), [h, $, E, b, ne, V, f, M, A, Le?.current, I]),
            Ze = (0, r.useCallback)((() => {
              if (!V?.controls) return;
              const {
                controls: e,
                scene: t
              } = V, a = v().timeline({
                duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                onStart: () => {
                  e?.current && !Ae.current && (e.current.minDistance = 0)
                }
              });
              let r;
              rt(a, g, !0), t.traverse((e => {
                0 === e.userData.index && (r = e)
              })), r && v().to(r.material, {
                duration: 0,
                ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                opacity: w ? 1 : 0
              });
              const {
                renderer: n
              } = Xe.current;
              q ? (b === pe.NEW_PLATE && (P() ? n.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : n.domElement.style.transform = "translateY(0px)", Me?.current && (Me.current.style.opacity = "1", Me.current.style.visibility = "visible", Me.current.style.pointerEvents = "all")), b === pe.CONFIRM_ORDER && P() && (n.domElement.style.transform = `translateY(${oe/1.5}px)`)) : b !== pe.CONFIRM_ORDER || P() || (n.domElement.style.transform = "translateY(0px)"), o() !== pe.NEW_PLATE && o() !== pe.CONFIRM_ORDER || qe(null, !0), P() && et(), Ae.current && it({
                isResize: !0,
                onComplete: null,
                delay: 0
              })
            }), [P(), q, w, b, V, Me.current, g, I]),
            Ke = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!$e?.current || !_e.current || !V?.camera) return;
              He({
                ...Ue,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "new plate",
                view_name: "license plate creator - new plate form"
              }), He({
                ...Ue,
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
              } = V, i = r.getObjectByName("Scene"), o = r.getObjectByName("Light1"), c = r.getObjectByName("Light2"), l = r.getObjectByName("Light3"), d = s.domElement, u = v().timeline({
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
              });
              u.to(a.position, {
                x: Number(_e.current.x),
                y: Number(_e.current.y),
                z: Number(_e.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to($e.current.rotation, {
                x: 0
              }, "<").to(o, {
                intensity: 0
              }, "<").to([c, l], {
                intensity: de
              }, "<").to(c.position, {
                x: J,
                y: Q,
                z: ee
              }, "<").to(l.position, {
                x: ae
              }, "<").set($e.current, {
                receiveShadow: !1
              }, .4).set($e.current.material, {
                depthTest: !1
              }, "<"), $e?.current?.material && u.to($e.current.material, {
                envMapIntensity: ue
              }, "<"), i.traverse((e => {
                e.material && v().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : G.toggleView.fadeOut.duration,
                  ease: G.toggleView.fadeOut.ease
                })
              }))
            }), [$e.current, _e.current, V]);
          (0, r.useEffect)((() => {
            V?.scene && !Te.current && (Te.current = V.camera.fov)
          }), [Te.current, V]), (0, r.useEffect)((() => {
            V?.scene && ze.current && Ge(q ? Ht : zt)
          }), [V, q, b === pe.CONFIRM_ORDER, A]), (0, r.useEffect)((() => {
            V?.scene && ze.current && Ge(q ? Ht : zt, !0)
          }), [E]);
          const et = (0, r.useCallback)((() => {
            if (ze?.current && E && Ye.current) {
              const e = Ye.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              U(a - 48 - ze.current.offsetHeight - t), ie(a), ce(-1 * (.6 * e - 80)), ze.current.style.transform = `translateY${ze.current.offsetHeight}px`
            }
          }), [ze.current, E, Ye.current]);
          (0, r.useEffect)((() => {
            et()
          }), [ze.current, E, Ye.current]), (0, r.useEffect)((() => {
            ke.current || (ke.current = b), Le.current || (Le.current = ke.current), b && (Le.current = ke.current, c(ke.current), ke.current = b), b === pe.LIST_PLATES && Ae.current && Ke({}, !0), b === pe.NEW_PLATE && (je.current = !1)
          }), [b]), (0, r.useEffect)((() => {
            const e = E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              t = he ? 0 : e;
            if (!V?.scene) return;
            if (!V?.scene || !f?.[0]?.current) return;
            const {
              scene: r,
              renderer: n,
              camera: s
            } = V, i = [], c = [], l = f[0].current;
            if (r.traverse((e => {
                e.name === fe.LP && e.material ? c[e.userData.index] = e.material : i.push(e.material)
              })), o() === pe.NEW_PLATE)
              if (w) {
                const e = c[0];
                if (v().to(e, {
                    opacity: 1,
                    delay: t,
                    duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                    ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                    onStart: () => {
                      a(!0), v().to(l.style, {
                        opacity: 0,
                        duration: G.accessibilePlate.duration,
                        ease: G.accessibilePlate.ease,
                        onComplete: () => {
                          Ie.current = !1
                        }
                      })
                    }
                  }), !je.current) {
                  const e = r.getObjectByName("Light4"),
                    a = new d.Vector3;
                  $e?.current && ($e.current.getWorldPosition(a), v().to(e.position, {
                    x: le.x,
                    y: a.y + le.y,
                    z: le.z,
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
                  }), je.current = !0
                }
              } else {
                const e = c[0];
                v().to(l.style, {
                  opacity: 1,
                  duration: G.accessibilePlate.duration,
                  ease: G.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: G.accessibilePlate.duration,
                      ease: G.accessibilePlate.ease,
                      onComplete: () => {
                        a(!1), Ie.current = !1, n.render(r, s)
                      }
                    })
                  }
                })
              }
          }), [w, E, V, f]), (0, r.useEffect)((() => {
            if (o() === pe.NEW_PLATE && he && V?.camera) {
              const {
                camera: e
              } = V, t = w ? 0 : .5;
              w || v().to(e.position, {
                duration: t,
                x: Number(_e.current.x),
                y: Number(_e.current.y),
                z: Number(_e.current.z)
              })
            }
          }), [w, V]);
          const tt = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            g && (tt.current = g), o() === pe.NEW_PLATE || o() === pe.CONFIRM_ORDER ? Ze() : P() && (et(), ye(window.innerHeight), ze.current && (ze.current.style.transform = `translateY(${ze.current.offsetHeight}px`))
          }), [g]);
          const rt = (0, r.useCallback)((function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (ke.current !== pe.NEW_PLATE && ke.current !== pe.CONFIRM_ORDER) return;
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
                  e?.three?.camera && (_e.current = new d.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), E && (r.domElement.style.touchAction = "none")
                },
                tweenPosition: 0,
                isResize: a
              })
            }), [V, b]),
            nt = (0, r.useCallback)((e => {
              if (!V?.scene) return;
              const {
                drawerStateRef: t
              } = e, a = f?.[0]?.current;
              if (a) {
                const {
                  renderer: e,
                  camera: r
                } = V, n = e.domElement, s = N(a.parentElement), i = {
                  buttonWrapOpacity: De.current.style.opacity,
                  canvasWrapOpacity: n.style.opacity,
                  fov: r.fov,
                  canvasTranslateY: Number(N(n).y),
                  accessiblePlateX: Number(s.x),
                  accessiblePlateY: Number(s.y),
                  accessiblePlateScale: Number(s.scale)
                }, o = {}, c = Ve.current.querySelectorAll("button");
                t.current === D ? (o.buttonWrapOpacity = 0, o.canvasWrapOpacity = 0, o.fov = Te.current, o.canvasTranslateY = Se.current, o.accessiblePlateX = Fe.current.x, o.accessiblePlateY = Fe.current.y, o.accessiblePlateScale = Fe.current.scale, n.style.pointerEvents = "all", c.forEach((e => {
                  e.style.pointerEvents = "none"
                }))) : (t.current === W || t.current === Y) && (o.buttonWrapOpacity = 1, o.canvasWrapOpacity = 1, o.fov = Te.current, o.canvasTranslateY = Se.current, o.accessiblePlateX = Fe.current.x, o.accessiblePlateY = Fe.current.y, o.accessiblePlateScale = Fe.current.scale, n.style.pointerEvents = "all", c.forEach((e => {
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
                    n.style.opacity = i.canvasWrapOpacity, De.current.style.opacity = i.buttonWrapOpacity, a && (a.parentElement.style.opacity = i.canvasWrapOpacity, a.parentElement.style.transform = `translate(${i.accessiblePlateX}px,\n                            ${i.accessiblePlateY}px) scale(${i.accessiblePlateScale})`), r.fov = i.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${i.canvasTranslateY}px)`
                  }
                })
              }
            }), [V, ne, f, Se.current]),
            st = (0, r.useCallback)((e => {
              if (!V?.scene || !ze.current) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: i,
                renderer: o
              } = V, c = o.domElement, l = f?.[0]?.current;
              if (l)
                if (t.dragging) {
                  const e = (0, at.ii)(0, n, r.get()),
                    o = (0, at.t7)(0, 1, 1 - e);
                  c.style.opacity = o;
                  const d = (0, at.t7)(0, 1, 1 - 3 * e);
                  if (l.parentElement.style.opacity = d, De.current.style.opacity = o, Ve.current.querySelectorAll("button").forEach((e => {
                      e.style.pointerEvents = r.get() >= 0 ? "all" : "none"
                    })), De.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                    const e = (0, at.ii)(0, s, r.get()),
                      a = Ae.current ? 60 : 40,
                      n = (0, at.t7)(Te.current, a, e);
                    i.fov = n, i.updateProjectionMatrix();
                    const o = Number(N(c).y) + t.delta[1] / 2;
                    if (c.style.transform = `translateY(${o}px)`, l) {
                      const e = N(l.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(N(l.parentElement).y) + t.delta[1] / 2;
                      l.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }
                } else {
                  const e = Number(N(c).y),
                    t = {
                      buttonWrapOpacity: De.current.style.opacity,
                      canvasWrapOpacity: c.style.opacity,
                      fov: i.fov,
                      canvasTranslateY: e,
                      accessibilityPlateY: Number(N(l.parentElement).y),
                      accessibilityPlateOpacity: l.parentElement.style.opacity
                    };
                  a.current < n / 2 ? (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(t, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    accessibilityPlateOpacity: 0,
                    fov: Ae.current ? 60 : 40,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = t.canvasWrapOpacity, l.parentElement.style.opacity = t.accessibilityPlateOpacity, De.current.style.opacity = t.buttonWrapOpacity
                    }
                  })) : a.current > s / 2 ? (c.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), v().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateY: Number(Fe.current.y) + s / 2,
                    canvasTranslateY: Number(Se.current) + s / 2,
                    fov: Ae.current ? 60 : 40,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      c.style.opacity = t.canvasWrapOpacity, De.current.style.opacity = t.buttonWrapOpacity, i.fov = t.fov, i.updateProjectionMatrix(), c.style.transform = `translateY(${t.canvasTranslateY}px)`, l.parentElement.style.transform = `translate(${Fe.current.x}px,\n                                ${t.accessibilityPlateY}px) scale(${Fe.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (c.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), v().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Fe.current.y),
                    fov: Te.current,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    duration: G.sidebar.mobile.drawerSnap.duration,
                    ease: G.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      if (c.style.opacity = t.canvasWrapOpacity, De.current.style.opacity = t.buttonWrapOpacity, l.parentElement.style.opacity = t.accessibilityPlateOpacity, i.fov = t.fov, i.updateProjectionMatrix(), a.current > 0) {
                        c.style.transform = `translateY(${t.canvasTranslateY}px)`;
                        const e = N(l.parentElement),
                          a = Number(e.x),
                          r = Number(e.scale),
                          n = t.accessibilityPlateY;
                        l.parentElement.style.transform = `translate(${a}px,\n                                    ${n}px) scale(${r})`
                      }
                    }
                  }))
                }
            }), [V, ze.current, ne, f, Se.current, xe]),
            it = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                isResize: !1,
                onComplete: null,
                delay: 0
              };
              const {
                isResize: t,
                delay: a
              } = e, {
                scene: r,
                camera: n,
                controls: s
              } = V, i = r.getObjectByName("Scene"), o = r.getObjectByName("Light1"), c = r.getObjectByName("Light2"), l = r.getObjectByName("Light3");
              let u = null;
              const m = [];
              i.traverse((e => {
                e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), m.push(e.material))
              })), r.traverse((e => {
                e.name === fe.LP && 0 === e.userData.index && (u = e)
              }));
              const p = new d.Vector3;
              $e.current.getWorldPosition(p);
              const f = {
                camPositionY: n.position.y,
                camPositionZ: n.position.z,
                controlsTargetZ: s.current.target.z,
                plateRotationX: $e.current.rotation.x,
                light1Intensity: o.intensity,
                light2Intensity: c.intensity,
                light2PositionX: c.position.x,
                light2PositionY: c.position.y,
                light2PositionZ: c.position.z,
                light3Intensity: l.intensity,
                light3PositionX: l.position.x,
                envMapIntensity: $e?.current?.material?.envMapIntensity
              };
              v().to(f, {
                camPositionY: n.position.y + 2.5 * g,
                camPositionZ: n.position.z + (E ? 24 * g : 12 * g),
                controlsTargetZ: s.current.target.z - 5 * g,
                plateRotationX: -.16,
                light1Intensity: de,
                light2Intensity: .2,
                light2PositionX: te.x,
                light2PositionY: te.y,
                light2PositionZ: te.z,
                light3Intensity: de,
                light3PositionX: se.x,
                delay: a,
                envMapIntensity: me,
                duration: t ? 0 : G.toggleView.camera.duration,
                ease: G.toggleView.camera.ease,
                onStart: () => {
                  const e = E ? 52 * g : 26 * g;
                  s.current.enableZoom = !0, s.current.maxPolarAngle = X.carView.maxPolarAngle, s.current.minPolarAngle = X.carView.minPolarAngle, s.current.maxAzimuthAngle = X.carView.maxAzimuthAngle, s.current.minAzimuthAngle = X.carView.minAzimuthAngle, s.current.maxDistance = e, i.visible = !0, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none"
                },
                onUpdate: () => {
                  n.position.set(n.position.x, f.camPositionY, f.camPositionZ), s.current.target.z = f.controlsTargetZ, $e.current.rotation.x = f.plateRotationX, $e.current?.material && ($e.current.material.envMapIntensity = f.envMapIntensity), o.intensity = f.light1Intensity, c.intensity = f.light2Intensity, c.position.set(f.light2PositionX, f.light2PositionY, f.light2PositionZ), l.intensity = f.light3Intensity, l.position.x = f.light3PositionX
                },
                onComplete: () => {
                  Re.current = !1, s.current.minDistance = E ? 20 * g : 10 * g, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                }
              });
              const b = {
                opacity: 0
              };
              v().to(b, {
                opacity: 1,
                duration: t ? 0 : G.toggleView.fadeOut.duration,
                ease: G.toggleView.fadeOut.ease,
                delay: a,
                onUpdate: () => {
                  m.forEach((e => {
                    e.opacity = b.opacity
                  }))
                }
              }), u && v().to(u, {
                duration: 0,
                delay: t ? 0 : .4 + a,
                onComplete: () => {
                  u.material && (u.receiveShadow = !0, u.material.depthTest = !1, u.renderOrder = 99998)
                }
              })
            }), [V, Ae.current, $e, $e?.current, g, E, z, w]),
            ot = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                delay: 0,
                onComplete: null
              };
              if (!V?.scene || !V?.controls?.current || !$e || !$e?.current || Re.current) return;
              const {
                scene: t,
                camera: a,
                controls: r
              } = V, s = e.delay || 0, i = t.getObjectByName("Scene"), o = t.getObjectByName("Light1"), c = t.getObjectByName("Light2"), l = t.getObjectByName("Light3"), u = R(), m = !S() || E ? u * g : 1.6 * u * g;
              if (i && r && !Re.current && !Ie.current) {
                const t = [];
                if (i.traverse((e => {
                    e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), t.push(e.material))
                  })), Ae.current) {
                  const n = new d.Vector3;
                  if ($e.current.getWorldPosition(n), setTimeout((() => {
                      $e.current.receiveShadow = !1, $e.current.material.depthTest = !1
                    }), 400), !Re.current) {
                    const s = {
                      camPositionX: a.position.x,
                      camPositionY: a.position.y,
                      camPositionZ: a.position.z,
                      controlsTargetX: r.current.target.x,
                      controlsTargetY: r.current.target.y,
                      controlsTargetZ: r.current.target.z,
                      plateRotationX: $e.current.rotation.x,
                      light1Intensity: o.intensity,
                      light2Intensity: c.intensity,
                      light2PositionX: c.position.x,
                      light2PositionY: c.position.y,
                      light2PositionZ: c.position.z,
                      light3Intensity: l.intensity,
                      light3PositionX: l.position.x,
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
                        r.current.minDistance = 2, r.current.enableZoom = !1, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = v().timeline({
                          duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                          ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                        });
                        rt(e, g)
                      },
                      onUpdate: () => {
                        $e.current.rotation.x = s.plateRotationX, $e.current?.material && ($e.current.material.envMapIntensity = s.envMapIntensity), o.intensity = s.light1Intensity, c.intensity = s.light2Intensity, c.position.set(s.light2PositionX, s.light2PositionY, s.light2PositionZ), l.intensity = s.light3Intensity, l.position.x = s.light3PositionX
                      },
                      onComplete: () => {
                        Re.current = !1, i.visible = !1, r.current.maxPolarAngle = X.plateView.maxPolarAngle, r.current.minPolarAngle = X.plateView.minPolarAngle, r.current.maxAzimuthAngle = X.plateView.maxAzimuthAngle, r.current.minAzimuthAngle = X.plateView.minAzimuthAngle, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all", e.onComplete && e.onComplete()
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
                } else Re.current || (z && n(!1), it({
                  isResize: !1,
                  onComplete: null,
                  delay: s
                }));
                Ae.current = !Ae.current
              }
            }), [V, Ae.current, $e, $e?.current, g, z, w]),
            ct = (0, r.useCallback)((e => {
              if (!V?.scene || !ze?.current || !De.current) return;
              const t = M[B.UI]?.current;
              if (t) {
                const {
                  camera: a,
                  renderer: r
                } = V, n = r.domElement, {
                  y: s,
                  sidebarRef: i
                } = e, o = t.offsetHeight, c = {
                  submitOrderTranslateY: 0,
                  mobileSidebarHeight: s.get(),
                  opacity: i.current.style.opacity,
                  fov: a.fov,
                  height: n.offsetHeight
                };
                v().to(c, {
                  opacity: 1,
                  height: o,
                  mobileSidebarHeight: .4 * window.innerHeight,
                  fov: Te.current,
                  submitOrderTranslateY: ze.current.offsetHeight,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    i.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, i.current.style.opacity = c.opacity, ze.current.style.transform = `translateY(${c.submitOrderTranslateY}px)`, De.current.style.opacity = c.opacity, n.style.height = c.height, s.set(c.mobileSidebarHeight), a && (a.fov = c.fov, a.updateProjectionMatrix())
                  },
                  onComplete: () => {
                    n.style.pointerEvents = "all"
                  }
                }), i.current.style.pointerEvents = "none"
              }
            }), [M, Me?.current, ze?.current, V, ne]),
            lt = e => {
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
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity
              };
              v().to(o, {
                opacity: 1,
                duration: s,
                ease: i,
                onUpdate: () => {
                  t.current.style.opacity = o.opacity, t.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`, a.current = o.mobileSidebarHeight, r.set(a.current), De.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`
                }
              })
            },
            dt = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = j, r = K ? (0, Qe.jsx)(y.LoadingAnimation, {}) : t("lp.create.next");
              return (0, Qe.jsx)(jt, {
                buttons: [{
                  buttonText: p ? r : t("lp.create.signin"),
                  isDisabled: !!p && (K || !L || !e && L === a),
                  onClick: async () => {
                    Ce?.current?.(), p || (He({
                      ...Ue,
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
            }), [L, b, p, q, j, Ce.current, K]),
            ut = (0, r.useCallback)((() => {
              u(!_)
            }), [_]),
            mt = (0, r.useMemo)((() => E ? (0, Qe.jsxs)(Et, {
              bottom: H,
              isVisible: q,
              onDrag: st,
              onHide: ct,
              onShow: lt,
              onTap: nt,
              top: oe,
              drawerY: ge,
              mobileSidebarHeight: ne,
              children: [(0, Qe.jsx)(Lt, {
                validateFnRef: Ce,
                setIsLoading: re
              }), (0, Qe.jsx)(Bt, {
                top: oe,
                drawerY: ge
              })]
            }) : (0, Qe.jsxs)("div", {
              ref: Me,
              className: "d06e542631e1fcd1b3a55298ca91e26e9b33",
              children: [(0, Qe.jsx)("hr", {
                className: "d06e542631e1fcd1da92b2273d68a97e2a78",
                onClick: () => {
                  ut()
                },
                "aria-hidden": "true"
              }), (0, Qe.jsx)(Lt, {
                validateFnRef: Ce,
                setIsLoading: re
              }), dt]
            })), [L, H, _, E, q, Ee.current, Me.current, oe, ge, K, ne]);
          return (0, Qe.jsxs)("div", {
            ref: Ye,
            className: "d06e542631e1fcd1caf43b491abf74b06503",
            children: [mt, (0, Qe.jsxs)("div", {
              ref: Ve,
              className: "d06e542631e1fcd1b36e465c1f658cb32f90",
              children: [(0, Qe.jsx)(Pt, {
                onClick: () => {
                  Re.current || Ke({
                    onComplete: () => {
                      ve(!1), o(pe.LIST_PLATES)
                    }
                  })
                }
              }), (0, Qe.jsxs)(xt.animated.div, {
                ref: De,
                className: "d06e542631e1fcd1a180f06a190df3e373ca",
                style: ge ? {
                  y: ge
                } : void 0,
                children: [(0, Qe.jsx)(Dt, {
                  is3DToggle: !0,
                  onToggleView: () => {
                    Ie.current || Re.current || (Ae.current && !z ? ot({
                      onComplete: () => {
                        n(!z), Oe(!1)
                      }
                    }) : n(!z), Ie.current = !0)
                  }
                }), (0, Qe.jsx)(Dt, {
                  is3DToggle: !1,
                  onToggleView: e => {
                    if (!Re.current && !Ie.current) {
                      const t = E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                        a = w ? 0 : t;
                      "function" == typeof e?.onStart && e.onStart(), ot({
                        delay: a
                      }), Re.current = !0
                    }
                  }
                })]
              })]
            }), (0, Qe.jsxs)("div", {
              ref: Be,
              className: "d06e542631e1fcd1b04b9fd973ab818135a5",
              children: [E && dt, E && (0, Qe.jsx)("div", {
                className: "d06e542631e1fcd1b1913cd00efde6aa558c",
                ref: We
              })]
            })]
          })
        })),
        Ft = "d06e542631e1fcd1fb5e7986231a3b2e1905",
        Gt = "d06e542631e1fcd1eade32da81574d4b6ca7",
        Xt = "d06e542631e1fcd1f09ca3dd068fb4f0cd0a",
        qt = (0, c.withTranslations)((e => {
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
            isMobile: c
          } = s, l = (0, r.useRef)(null), d = (0, r.useRef)(null), u = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            n(B.SIDEBAR, l)
          }), [l.current, c]), (0, r.useEffect)((() => {
            n(B.PLATE_COUNT, u)
          }), [u.current, c]), (0, r.useEffect)((() => {
            n(B.SIDEBAR_BUTTONS_LOADING_ANIMATION, d)
          }), [d.current]), (0, Qe.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: l,
            className: "d06e542631e1fcd1e5e3abc19ffd80dd3bcf",
            children: [(0, Qe.jsx)("div", {
              className: "d06e542631e1fcd1d3fd7c681c3a0e077bfd",
              children: (0, Qe.jsx)(St, {})
            }), (0, Qe.jsxs)("div", {
              className: "d06e542631e1fcd1e34b13392437e67c024e",
              children: [(0, Qe.jsxs)("div", {
                className: "d06e542631e1fcd1a9630d965666bd9a0dca",
                children: [(0, Qe.jsx)("h1", {
                  className: "d06e542631e1fcd1ff661f315c83ec384d82",
                  children: t("lp.landing.title")
                }), (0, Qe.jsx)("p", {
                  className: "d06e542631e1fcd1be91057254fd4da9b396",
                  children: t("lp.landing.description")
                }), (0, Qe.jsx)("div", {
                  className: "d06e542631e1fcd1d46b09270858ddec7470",
                  children: (0, Qe.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, Qe.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), a && (0, Qe.jsxs)("div", {
                className: "d06e542631e1fcd1ece6d2c94e93da11315a",
                children: [(0, Qe.jsx)("h5", {
                  children: t("lp.landing.plates")
                }), (0, Qe.jsxs)("span", {
                  className: "d06e542631e1fcd1a0d05ceada404843b055",
                  children: [(0, Qe.jsxs)("span", {
                    className: "d06e542631e1fcd1b2b7f5dbc7c91066f920",
                    children: [(0, Qe.jsx)("span", {
                      ref: d,
                      className: "d06e542631e1fcd1b00be5267e4e3e70e97f",
                      children: (0, Qe.jsx)(y.LoadingAnimation, {
                        type: "THREE_DOTS"
                      })
                    }), (0, Qe.jsx)("span", {
                      ref: u,
                      className: "d06e542631e1fcd1c8177c0c51aa4a3017cf",
                      children: o?.filter((e => {
                        let {
                          faux: t = !1
                        } = e;
                        return !t
                      }))?.length ?? 0
                    })]
                  }), (0, Qe.jsx)("span", {
                    className: "d06e542631e1fcd1e2bf820b93754f519b30"
                  }), (0, Qe.jsx)("span", {
                    className: "d06e542631e1fcd1fa031aa78c091080b40e",
                    children: "owned plates out of a maximum of"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Zt = "d06e542631e1fcd1eb0df59dc5cb7bf90dce",
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
            accessiblePlates: c,
            pendingOrder: l,
            currentPlateIndex: u,
            currentView: m,
            is3D: p,
            three: f,
            isMobile: b,
            isLoading: g,
            refs: y,
            gridScale: h,
            deletedPlateIndex: x,
            plates: w
          } = e, {
            loggedIn: E
          } = (0, i.useRockstarUser)(), {
            selectedCharacterTuple: P
          } = (0, i.useRockstarUserState)(), S = (0, r.useRef)(null), [_, T] = (0, r.useState)(m === pe.LIST_PLATES), R = y?.[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            Qt && (Qt.pause(), Qt = null), ea = !1
          }), [P]), (0, r.useEffect)((() => {
            T(m === pe.LIST_PLATES)
          }), [m]);
          const I = (0, r.useCallback)((e => {
            if (!f) return;
            const {
              camera: r,
              controls: i,
              originalCameraPosition: m,
              originalControlsTarget: p,
              renderer: h,
              scene: P
            } = f, {
              clickPlate: _,
              sidebar: T,
              deletePlate: I
            } = G, O = y[B.FOOTER].current, A = y[B.SIDEBAR].current, C = y[B.LOADING_SCREEN].current, k = y[B.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, L = y[B.PLATE_COUNT].current, j = c?.[u]?.current || null, M = c?.[0]?.current || null, V = y[B.CTA_SHADER]?.current || null, D = [];
            switch (P.traverse((e => {
                e.name === fe.LP && D.push(e)
              })), Qt = v().timeline({
                duration: b ? T.mobile.drawer.duration : _.duration,
                ease: b ? T.mobile.drawer.ease : _.ease
              }), e) {
              case Jt: {
                if (!i.current || c.filter((e => null === e.current)).length > 0 || !M || !V) return;
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
                    accessiblePlateOpacity: c.map((e => ({
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
                      start: Number(N(S.current).y),
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
                    duration: b ? T.mobile.drawer.duration : _.duration,
                    ease: b ? T.mobile.drawer.ease : _.ease,
                    onComplete: () => {
                      b && (h.domElement.style.touchAction = "auto"), t(!1);
                      const e = P.getObjectByName("Light4");
                      v().to(e.position, {
                        x: ie - 20,
                        y: oe,
                        z: ce
                      })
                    },
                    onStart: () => {
                      e.current = 0, A && (A.style.pointerEvents = "all"), h.render(P, r), a(!0)
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
                      if (F.saturation.value = s, E && !l && f) {
                        const e = Kt(u.firstPlateOpacity.start, u.firstPlateOpacity.end, t),
                          a = !!l;
                        f.style.filter = `saturate(${s})${!a&&` opacity(${e})`}`
                      }
                      if (V) {
                        const e = Kt(u.ctaShaderOpacity.start, u.ctaShaderOpacity.end, t);
                        V.style.opacity = e
                      }
                      if (b) {
                        const e = Kt(u.canvasTranslateY.start, u.canvasTranslateY.end, t);
                        if (h.domElement.style.transform = `translateY(${e}px)`, S.current) {
                          const e = Kt(u.drawerHeight.start, u.drawerHeight.end, t);
                          S.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), (c.length === w.length && c?.[0]?.current || E && !g && c[0].current && c?.filter((e => e?.current)).length === w.length && 0 !== w.length && 0 !== c.length) && !ea) {
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
                      c.forEach(((e, a) => {
                        if (e.current && u.accessiblePlateOpacity[a]) {
                          const r = Kt(u.accessiblePlateOpacity[a].start, u.accessiblePlateOpacity[a].end, 2.5 * (t - .6));
                          e.current.style.opacity = r
                        }
                        if (D[a] && D[a].material) {
                          const e = Kt(u.plateOpacity[a].start, u.plateOpacity[a].end, t);
                          D[a].material.opacity = e
                        }
                      }))
                    }
                  }, 0);
                  const t = Number(getComputedStyle(c[0].current.parentElement).opacity);
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
                        c[0].current.parentElement.style.opacity = t
                      }
                    }, "<")
                  }
                }
                if ("number" == typeof x) {
                  const e = D.find((e => e.userData.index === x)),
                    t = c[x].current;
                  if (e && t) {
                    const a = {
                        current: 0
                      },
                      r = {
                        plateOpacity: {
                          start: e.material.opacity,
                          end: 0
                        },
                        accessiblePlateOpacity: {
                          start: 1,
                          end: 0
                        }
                      };
                    Qt.to(a, {
                      current: 1,
                      duration: I.duration,
                      ease: I.ease,
                      onUpdate: () => {
                        const {
                          current: n
                        } = a, s = Kt(r.plateOpacity.start, r.plateOpacity.end, n), i = Kt(r.accessiblePlateOpacity.start, r.accessiblePlateOpacity.end, n);
                        e?.material && (e.material.opacity = s), t.style.opacity = i
                      }
                    }, ">");
                    const i = D.filter((e => e.userData.index >= x)).map((e => e.position)),
                      l = c.filter(((e, t) => t >= x)).map((e => {
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
                      u = l.map(((e, t) => ({
                        x: l[Math.max(t - 1, 0)].x - l[t].x,
                        y: l[Math.max(t - 1, 0)].y - l[t].y
                      })));
                    Qt.to(i.slice(1), {
                      x: e => d[e].x,
                      y: e => d[e].y,
                      z: e => d[e].z,
                      stagger: {
                        each: .03
                      },
                      onComplete: () => {
                        e.removeFromParent(), e.userData.index = void 0, P.remove(e)
                      }
                    }, "<25%");
                    const m = c.filter(((e, t) => t >= x)),
                      p = l.map((() => ({
                        x: 0,
                        y: 0
                      })));
                    p.forEach(((e, t) => {
                      Qt.to(e, {
                        x: u[t].x,
                        y: u[t].y,
                        duration: I.duration,
                        ease: I.ease,
                        delay: 1 + .03 * t,
                        onUpdate: () => {
                          const a = m[t]?.current;
                          a && (a.style.transform = `translate(${e.x}px, ${e.y}px)`)
                        },
                        onComplete: () => {
                          if (t === p.length - 1) {
                            const e = c.filter(((e, t) => t !== x));
                            n(e), s(null);
                            const t = w.filter((e => e.index !== x));
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
                }, 0), b && (R && v().set(R.style, {
                  visibility: "visible"
                }), A && (A.style.pointerEvents = "all"));
                break
              }
              default:
                if (v().to(O, {
                    autoAlpha: 0,
                    duration: b ? T.mobile.footer.out.duration : T.out.duration,
                    ease: b ? T.mobile.footer.out.ease : T.out.ease
                  }), R && v().set(R.style, {
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
                      S.current.style.transform = `translateY(${e.current}px)`
                    }
                  })
                } else v().to(A, {
                  autoAlpha: 0,
                  duration: T.out.duration,
                  ease: T.out.ease,
                  delay: T.out.delay
                })
            }
          }), [c, u, x, p, f, g, l, E, b, y, h, ea]);
          return (0, r.useEffect)((() => {
            y && y?.[B.FOOTER]?.current && y?.[B.SIDEBAR]?.current && y?.[B.UI]?.current && y?.[B.LOADING_SCREEN]?.current && S.current && f?.scene && f?.controls && I(_ ? Jt : "hidden")
          }), [y, _, S.current, p, f, b, g, y?.[B.FOOTER]?.current, y?.[B.SIDEBAR]?.current]), (0, Qe.jsx)("div", {
            ref: S,
            className: "d06e542631e1fcd1fe2f56dce20f2cc23636",
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
            refs: c
          } = s, l = (0, r.useRef)(null), d = c[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              n(B.UI, l)
            }), [l.current]), !o) return null;
          let u;
          return t && (u = d ? (0, vt.createPortal)((0, Qe.jsx)(ta, {}), d) : null), (0, Qe.jsxs)("div", {
            ref: l,
            className: "d06e542631e1fcd1cf4e3950dff0bf598a46",
            children: [a && !t && (0, Qe.jsx)(Bt, {}), t ? u : (0, Qe.jsx)(ta, {}), a && (0, Qe.jsx)(Ot, {}), (0, Qe.jsx)(Ut, {})]
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
            [o, c] = (0, r.useState)(null),
            [l, d] = (0, r.useState)(null),
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
            if (!n) return c(null), void d(null);
            c(n[0]), d(n[1] ?? a)
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
            className: "d06e542631e1fcd1edb361b16208ea39b04d",
            children: [(0, Qe.jsxs)("div", {
              className: "d06e542631e1fcd1f989292c56d125a42b05",
              children: [(0, Qe.jsxs)("div", {
                className: "d06e542631e1fcd1d8a0031e9fbf468e335f",
                children: [(0, Qe.jsx)("i", {}), (0, Qe.jsx)("h4", {
                  children: u[o] || t("lp.error.unexpected.description")
                }), l?.code && (0, Qe.jsxs)("div", {
                  className: "d06e542631e1fcd1e79427410b0638c42413",
                  children: [(0, Qe.jsx)("p", {
                    children: `Code: ${l.code}`
                  }), l?.logId && (0, Qe.jsx)("p", {
                    children: `LogID: ${l?.logId}`
                  })]
                })]
              }), (0, Qe.jsx)(m.NavLink, {
                to: "character" !== o ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, Qe.jsx)("button", {
                  className: "d06e542631e1fcd1e93e0cb9f21eac83e021",
                  type: "button",
                  tabIndex: 0,
                  children: (0, Qe.jsx)("span", {
                    className: "d06e542631e1fcd1b0922946a512c5c777b2",
                    children: p[o]
                  })
                })
              })]
            }), (0, Qe.jsx)("div", {
              className: "d06e542631e1fcd1d7b9f55b7895c5fc08c6"
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
            s && t(B.LOADING_SCREEN, s)
          }), [s]);
          const i = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = document.querySelectorAll('[aria-label="animation"]');
            e.length && e.forEach((e => {
              e.tabIndex = -1
            }))
          }), []), (0, r.useEffect)((() => {
            if (n && a?.[B.SIDEBAR]?.current && i.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                n = a?.[B.SIDEBAR].current.offsetHeight,
                s = n + (r - n) / 2 - t / 2;
              i.current && (i.current.style.top = `${s}px`)
            } else i.current && (i.current.style.top = "unset")
          }), [n, a]), (0, Qe.jsx)("div", {
            ref: s,
            className: "d06e542631e1fcd1a76020cf52b63db690ab",
            children: (0, Qe.jsx)("div", {
              ref: i,
              className: "d06e542631e1fcd1c62ab050cb79d2037711",
              children: (0, Qe.jsx)(y.LoadingAnimation, {})
            })
          })
        },
        sa = {
          orderInProgressCTA: "d06e542631e1fcd1a33e9cc54c59f4165751",
          expanded: "d06e542631e1fcd1e4a93c76d496871dace2",
          backToPlatesButton: "d06e542631e1fcd1e2e2eee2c661c4dbd09a",
          contentHeading: "d06e542631e1fcd1e539864e63d1a4ab0870",
          plateRedemptionInstructions: "d06e542631e1fcd1ceeafcf9e6c295dea1a7",
          hidden: "d06e542631e1fcd1b64ce673d0fce1813ea4",
          orderInstructions: "d06e542631e1fcd1b97c15f1f2e891588f33",
          buttonWrap: "d06e542631e1fcd1f55a2a90573ac015425e",
          ctaText: "d06e542631e1fcd1feb57e679bed534fda36",
          isWindows: "d06e542631e1fcd1a1c5d794c0b065b51321"
        },
        ia = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: n,
            t: o
          } = e;
          const [l, d] = (0, r.useState)(!1), {
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
              } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/order", {
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
            }), (0, Qe.jsx)(Tt, {
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
              showModal: l,
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
            onClickPlate: c,
            t: l
          } = e;
          return (0, Qe.jsx)("button", {
            type: "button",
            tabIndex: s,
            className: $t.firstPlateLoggedOut,
            style: {
              background: "none",
              border: "none",
              opacity: r === pe.LIST_PLATES ? 1 : 0,
              width: `${a}px`,
              height: a / 2 + "px",
              pointerEvents: r === pe.LIST_PLATES ? "all" : "none"
            },
            children: (0, Qe.jsxs)("div", {
              className: [$t.loggedOutCTA, r !== pe.LIST_PLATES ? $t.hidden : ""].join(" "),
              children: [(0, Qe.jsx)("button", {
                type: "button",
                onClick: () => {
                  n && (i({
                    event: "cta_login",
                    event_category: "cta",
                    event_action: "login",
                    event_label: "welcome to the lp creator",
                    text: l("lp.landing.signup").toLowerCase(),
                    link_url: n
                  }), window.location.href = n)
                },
                className: [$t.signIn, r !== pe.LIST_PLATES ? $t.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Qe.jsx)("span", {
                  className: $t.ctaText,
                  children: l("lp.landing.signup")
                })
              }), (0, Qe.jsx)("button", {
                type: "button",
                onClick: () => {
                  i({
                    ...o,
                    event: "license_plate_try",
                    event_category: "license_plate",
                    event_action: "try",
                    text: l("lp.landing.tryit").toLowerCase()
                  }), c(t.index)
                },
                className: [$t.tryWithoutSigningIn, $t.firstLoad, r !== pe.LIST_PLATES ? $t.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Qe.jsx)("span", {
                  className: $t.ctaText,
                  children: l("lp.landing.tryit")
                })
              })]
            })
          })
        },
        ca = e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, i.useRockstarUser)(), {
            state: n,
            setCurrentView: s,
            setCurrentPlate: o,
            setCurrentPlateIndex: c,
            setRefs: l
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
          const [S, _] = (0, r.useState)(null), [T, R] = (0, r.useState)(null), N = h[B.FIRST_PLATE_MESH], k = h[B.ROOT], L = (0, r.useRef)(null), j = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = h[B.SIDEBAR];
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
            l(B.CTA_WRAP, L)
          }), [L.current]), (0, r.useEffect)((() => {
            l(B.CTA_SHADER, j)
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
                })), o(y[e]), c(e), s(t)
              }
            }), [y]),
            $ = (0, r.useCallback)((e => {
              A(0, d)
            }), [d]),
            z = (0, r.useMemo)((() => S ? (0, Qe.jsx)(oa, {
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
            H = (0, r.useMemo)((() => void 0 !== y ? I(b, y) ? (0, Qe.jsx)(ia, {
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
              className: [$t.maxPlatesReached, d !== pe.LIST_PLATES ? $t.hidden : ""].join(" "),
              children: [(0, Qe.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === y.length ? null : (0, Qe.jsxs)("div", {
              type: "button",
              style: {
                pointerEvents: d === pe.LIST_PLATES ? "all" : "none"
              },
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "keypress",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(T.index))
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
                N?.current && $(N?.current)
              },
              onPointerOut: v ? void 0 : () => {
                var e;
                N?.current && (e = N?.current, C(e))
              },
              className: [$t.createNewPlate, d !== pe.LIST_PLATES ? $t.hidden : ""].join(" "),
              ref: D,
              tabIndex: W,
              children: [(0, Qe.jsx)("span", {
                className: `${$t.ctaText} ${E?$t.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, Qe.jsx)("div", {
                className: $t.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [d, b, h, S, y, v]),
            U = (0, r.useMemo)((() => void 0 !== b && S ? (0, Qe.jsx)("div", {
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "keypress",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(T.index))
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
              type: "button",
              tabIndex: W,
              className: $t.firstPlateLoggedIn,
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
              children: H
            }) : null), [d, b, S, h, T, H, v]);
          return (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              if (e && L.current) {
                const t = L.current.querySelector("canvas");
                t && L.current.removeChild(t), e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.opacity = 1, e.style.transition = "transform 0.25s ease-out", a && !b && d === pe.LIST_PLATES && e.classList.add($t.newOrder), L.current.append(e)
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
            const e = I(b, y) ? $t.pendingOrderShader : "",
              t = a ? e : $t.loggedOutShader,
              {
                width: r,
                height: n
              } = S,
              {
                top: s,
                left: i,
                right: o,
                bottom: c
              } = S.rect;
            return (0, Qe.jsxs)("div", {
              ref: L,
              className: [$t.CTAWrap, a ? "" : $t.loggedOut].join(" "),
              style: {
                top: s,
                left: i,
                bottom: c,
                right: o,
                width: r,
                height: n
              },
              children: [(0, Qe.jsx)("div", {
                ref: j,
                className: t
              }), a ? U : z]
            })
          }), [S, T, m, a, d, b, H, y, w, v])
        },
        la = e => {
          let {
            plate: t,
            index: a,
            accessiblePlateRefs: n,
            details: s,
            tabIndex: o,
            texture: c
          } = e;
          const {
            loggedIn: l
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
            view_name: "license plate creator - landing page logged " + (l ? "in" : "out")
          }, E = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            !n.current[a + 1]?.current && E && (n.current[a + 1] = E)
          }), [E.current, g, f]), (0, r.useEffect)((() => {
            if (c && E.current) {
              const e = E.current.querySelector("canvas");
              e && E.current.removeChild(e), c.style.width = "100%", c.style.height = "100%", c.style.position = "absolute", c.style.opacity = 1, c.style.top = "0px", c.style.left = "0px", c.style.pointerEvents = "none", c.style.transition = "transform 0.25s ease-out", c.classList.add("d06e542631e1fcd1c38e114ef9f04fbb60c0"), E.current.append(c)
            }
          }), [b, c, E.current]), (0, r.useMemo)((() => (0, Qe.jsx)("button", {
            "aria-label": `${t?.style?.displayName||""} license plate ${t.plateText?`with the number ${t.plateText}`:""}`.trim(),
            className: "d06e542631e1fcd1dfcce6149acc6235b802",
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
          })), [t, c, s, v, p])
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
              plates: c,
              realHeight: l,
              refs: d,
              isMobile: u,
              plateTextures: m
            }
          } = Je(), {
            loggedIn: p
          } = (0, i.useRockstarUser)(), [f, b] = (0, r.useState)([]), g = (0, r.useRef)(null), y = (0, r.useRef)([]);
          return (0, r.useEffect)((() => {
            y.current && c.length > 0 && y.current.length === c.length && a(y.current)
          }), [y.current?.length, c]), (0, r.useEffect)((() => {
            n(B.ACCESSIBLE_PLATE_GRID, g)
          }), [g.current]), (0, r.useEffect)((() => {
            const e = d[B.ROOT]?.current,
              t = d?.[B.SIDEBAR]?.current,
              a = [];
            e && t && o && (c.forEach(((r, n) => {
              if (n) {
                const r = O(n, e, Number(l.replace("px", "")), o, u ? void 0 : {
                    x: t.offsetWidth,
                    y: 0
                  }),
                  {
                    height: s,
                    width: i,
                    rect: {
                      top: c,
                      left: d
                    }
                  } = r;
                s && i && s < i && a.push({
                  width: i,
                  height: s,
                  top: c,
                  left: d
                })
              }
            })), b([...a]))
          }), [o, m, l, d && d?.[B.SIDEBAR]?.current, d[B.ROOT]?.current?.offsetHeight]), (0, r.useMemo)((() => p && !f.length ? null : (y.current.forEach((e => {
            e.current && (e.current.style.transform = "none")
          })), (0, Qe.jsxs)("div", {
            ref: g,
            className: Ft,
            children: [(0, Qe.jsx)(ca, {
              t
            }), c.filter(((e, t) => t)).map(((e, t) => (0, Qe.jsx)(la, {
              accessiblePlateRefs: y,
              plate: e,
              index: t,
              details: f[t],
              tabIndex: s === pe.LIST_PLATES ? 0 : -1,
              texture: m[t + 1]?.image
            }, e.plateText + e.vehicles.toString())))]
          }))), [f, m, p, s, u])
        },
        ua = (0, c.withTranslations)((e => {
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
            shouldForce2D: z,
            isLoading: H
          } = L, {
            setCustomFooter: U
          } = (0, l.useRockstarLocalState)(), {
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
              if (!c.supportedBrowsers.test(navigator.userAgent)) throw new Error("browser");
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
          (0, r.useEffect)((() => (re(), window.addEventListener("resize", re, !0), () => window.removeEventListener("resize", re, !0))), [W]), (0, r.useEffect)((() => ((0, l.setFreezeUserShouldSeeMore)(!0), U(!0), () => {
            (0, l.setFreezeUserShouldSeeMore)(!1), U(!1), h(pe.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            A(B.CANVAS_WRAP, q)
          }), [q.current]), (0, r.useEffect)((() => {
            A(B.ROOT, Z)
          }), [Z.current]), (0, r.useEffect)((() => {
            A(B.MOBILE_SIDEBAR_PORTAL_TARGET, K)
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
                } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/owned", {
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
                  } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                    pingBearer: X,
                    query: {
                      character: a,
                      platform: t
                    }
                  });
                if (i) throw Object.assign(new Error(""), i);
                const l = g().uniqBy(o?.vehicles ?? [], (e => {
                  let {
                    id: t
                  } = e;
                  return t
                }));
                if (!l.length) return x(["vehicles"]), void S(!1);
                k(l);
                const {
                  error: d,
                  result: u
                } = await (0, c.coreScApiFetch)("games/gtao/licensePlates/order", {
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
            if (J || !$ || j || !te) return;
            const e = ee.get("envUrl") || a(3924),
              t = new d.LoadingManager((() => {
                Q({
                  environmentMap: l,
                  environmentModel: c,
                  plateTextures: m
                })
              })),
              r = new u.E(t),
              n = new p._(t),
              s = new f.a(t);
            n.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.3/"), r.setDRACOLoader(n), s.detectSupport(new d.WebGLRenderer), s.setTranscoderPath("https://unpkg.com/three@0.134.0/examples/js/libs/basis/"), r.setKTX2Loader(s);
            const i = new d.TextureLoader(t),
              o = new d.CubeTextureLoader(t);
            let c;
            r.load(e, (e => {
              c = e
            }), void 0, (e => console.log("err", e)));
            const l = o.load([a(8220), a(8130), a(5377), a(6491), a(1984), a(3445)]),
              m = $.map((e => {
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
          }), [J, $, j, te]), (0, r.useEffect)((() => {
            const e = Y !== pe.LIST_PLATES && !z;
            E(e)
          }), [Y, z]);
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
              children: (0, Qe.jsx)(ht, {
                loadedAssets: J
              })
            })
          })), [J, F]);
          return te && null !== F ? j ? (0, Qe.jsx)(ra, {
            t
          }) : (0, Qe.jsxs)("div", {
            ref: Z,
            className: "d06e542631e1fcd1bbf483f378bf9b124fa4",
            children: [D && (0, Qe.jsx)("div", {
              className: "d06e542631e1fcd1bf1276a16c42d8d88c6b",
              ref: K,
              children: (0, Qe.jsx)(na, {
                isLoading: H
              })
            }), (0, Qe.jsxs)("div", {
              className: "d06e542631e1fcd1e679d5c0c7e82b869590",
              children: [(0, Qe.jsx)(aa, {
                isMobile: D
              }), (0, Qe.jsxs)("div", {
                className: "d06e542631e1fcd1d171b6e11feaaa0e6b49",
                ref: q,
                children: [ne, !D && (0, Qe.jsx)(na, {
                  isLoading: H
                })]
              })]
            }), (0, Qe.jsx)("span", {
              className: "d06e542631e1fcd1c23379ba67d2aa3b2d3d"
            }), (0, Qe.jsx)(da, {
              t
            }), (0, Qe.jsx)(et, {
              t
            })]
          }) : null
        }))
    },
    3924: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/glb/68917a4431a44b5c4d17.glb"
    },
    8130: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/66325873bcd945e9636b.png"
    },
    6491: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/4f0399f84f560d6677d6.png"
    },
    3445: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/0a5f36124fc10f0e29be.png"
    },
    8220: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c48def1269c5e97af351.png"
    },
    5377: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ac5d453a442f68e74eda.png"
    },
    1984: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/661ce2fdc55ff6baaf45.png"
    },
    3493: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/d11ed33c2c7ab0524f2f.jpg"
    },
    7934: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/2a944f778fccaf313a98.png"
    },
    6050: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b97d334cf40f9cc47bf8.jpg"
    },
    9233: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/81203010ebb91f70e61c.jpg"
    },
    8928: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cec5d10cba12094e6295.png"
    },
    8642: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/eb305935c13910350d7c.jpg"
    },
    754: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3b0fe4906cdc54c83cd4.jpg"
    },
    4517: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b8f31c4768db251ef13d.jpg"
    },
    2548: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/7505236478b7dc0dd183.png"
    },
    2423: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/a8143cb90f5e6b14fcd5.jpg"
    },
    6879: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b0f55254491396fdf1d9.jpg"
    },
    1358: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/d60ffe929915c087749b.png"
    },
    4360: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/15feb1c56b980b6cd87d.jpg"
    },
    3983: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/51121fb731a69474a1f0.png"
    },
    4495: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/ef1c03bc1fd669926066.jpg"
    },
    5987: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c5dfcdf6bdb37bf9b50d.jpg"
    },
    1765: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/4659f6abf3ae0ccf0460.jpg"
    }
  }
]);