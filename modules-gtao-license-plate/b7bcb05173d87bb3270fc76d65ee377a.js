"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [277], {
    1277: (e, t, a) => {
      a.d(t, {
        Z: () => ca
      });
      var r = a(927),
        n = a(3045),
        s = a(4859),
        o = a(6711),
        i = a(1458),
        l = a(9929),
        c = a(3657),
        d = a(505),
        u = a(9038),
        m = a(6237),
        p = a(8693),
        f = a(7039),
        g = a(7945),
        b = a.n(g),
        y = a(8976),
        h = a(67),
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
        k = () => {
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
        T = () => {
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
        R = (e, t) => e?.plateText && t.length ? !t.some(((t, a) => {
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

      function I(e, t, a, r) {
        let n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
          x: 0,
          y: 0
        };
        const {
          offsetWidth: s
        } = t, {
          columns: o,
          rows: i,
          plateHeight: l,
          plateWidth: c,
          rowGap: d,
          columnGap: u
        } = r.gridOptions, {
          top: m,
          left: p,
          bottom: f
        } = r.gridDimensions.margins.pixels, g = Math.floor(e / o), b = e % o, y = l * i + d * (i - 1), h = c * o + u * (o - 1), v = s - n.x - 2 * p, x = a - n.y - m - f, w = x * (l / y), E = v * (c / h), P = g * (l + d) / y, S = {
          x: v * (b * (c + u) / h) + p + n.x,
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
      const O = (e, t) => {
          t === ue.LIST_PLATES && (document.body.style.cursor = "pointer")
        },
        A = e => {
          document.body.style.cursor = "auto", v().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: U.plateHover.duration,
            ease: U.plateHover.ease
          })
        };

      function C(e, t) {
        const {
          plateIndex: a,
          timeline: r,
          three: n,
          gridScale: s
        } = e, {
          onComplete: o,
          tweenPosition: i,
          onStart: l,
          is3D: c
        } = t;
        if (Number.isNaN(a) || !n || !r || !s || !n?.controls?.current) return null;
        const {
          scene: u,
          camera: m,
          controls: p
        } = n, f = T(), g = !S() || P() ? f * s : 1.6 * f * s, b = [];
        let y = null;
        u.traverse((e => {
          e.name === me.LP && b.push(e), e.userData.index === a && (y = e)
        }));
        const h = new d.Vector3;
        y && y.getWorldPosition(h);
        const v = {
            cameraPosition: {
              start: (new d.Vector3).copy(m.position),
              end: new d.Vector3(h.x, h.y, h.z + g)
            },
            controlsTarget: {
              start: (new d.Vector3).copy(p.current.target),
              end: h
            },
            plateOpacity: b.map(((e, t) => ({
              start: e.material.opacity,
              end: b[t].userData.index === a ? 1 : 0
            })))
          },
          x = {
            current: 0
          };
        let w = 0;
        return t.isResize || (w = P() ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration), r.to(x, {
          current: 1,
          duration: w,
          ease: P() ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
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
          onComplete: o ? () => {
            o(e)
          } : void 0
        }, i || 0), x.current = 0, r.to(x, {
          current: 1,
          duration: P ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
          ease: P ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = x;
            b.forEach(((t, a) => {
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
        H = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: 0
          }
        },
        U = {
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
        F = {
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
        G = -9.72,
        X = 5,
        q = -10.68,
        Z = 10.4,
        K = 5,
        J = 4.52,
        Q = {
          x: 0,
          y: 14.4,
          z: 4.9
        },
        ee = -4.52,
        te = 10,
        ae = 6.8,
        re = {
          x: -14.52
        },
        ne = -15,
        se = 7,
        oe = 4.52,
        ie = {
          x: 6,
          y: 5,
          z: 5
        },
        le = .6,
        ce = .4,
        de = .3,
        ue = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        me = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        pe = {
          faux: !0,
          index: 0,
          mpPlate: !1,
          noDelete: !1,
          spPlate: !1,
          plateText: "",
          style: w("BlueWhite2"),
          vehicles: []
        },
        fe = (0, s.makeVar)(""),
        ge = (0, s.makeVar)([]),
        be = (0, s.makeVar)(null),
        ye = (0, s.makeVar)(null),
        he = (0, s.makeVar)(null),
        ve = (0, s.makeVar)(0),
        xe = (0, s.makeVar)(ue.LIST_PLATES),
        we = (0, s.makeVar)(null),
        Ee = (0, s.makeVar)(null),
        Pe = (0, s.makeVar)(null),
        Se = (0, s.makeVar)(1),
        _e = (0, s.makeVar)(null),
        ke = (0, s.makeVar)(!1),
        Te = (0, s.makeVar)(!1),
        Re = (0, s.makeVar)(!0),
        Ne = (0, s.makeVar)(null),
        Ie = (0, s.makeVar)(P()),
        Oe = (0, s.makeVar)(!1),
        Ae = (0, s.makeVar)(!0),
        Ce = (0, s.makeVar)(!1),
        Le = (0, s.makeVar)(0),
        je = (0, s.makeVar)(ue.LIST_PLATES),
        Me = (0, s.makeVar)(void 0),
        Ve = (0, s.makeVar)(""),
        De = (0, s.makeVar)([]),
        We = (0, s.makeVar)([]),
        Ye = (0, s.makeVar)(!1),
        Be = (0, s.makeVar)(!!P()),
        $e = (0, s.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        ze = (0, s.makeVar)($),
        He = (0, s.makeVar)({}),
        Ue = (e, t) => {
          const a = {
            ...He(),
            [e]: t
          };
          He(a)
        },
        Fe = (0, s.makeVar)(0),
        Ge = (0, s.makeVar)(null),
        Xe = (0, s.makeVar)(null),
        qe = (0, s.makeVar)(null),
        Ze = () => {
          const e = (0, s.useReactiveVar)(ge),
            t = (0, s.useReactiveVar)(be),
            a = (0, s.useReactiveVar)(ye),
            n = (0, s.useReactiveVar)(he),
            i = (0, s.useReactiveVar)(ve),
            c = (0, s.useReactiveVar)(xe),
            d = (0, s.useReactiveVar)(we),
            u = (0, s.useReactiveVar)(Ee),
            m = (0, s.useReactiveVar)(Pe),
            p = (0, s.useReactiveVar)(Se),
            f = (0, s.useReactiveVar)(_e),
            g = (0, s.useReactiveVar)(ke),
            b = (0, s.useReactiveVar)(Ie),
            y = (0, s.useReactiveVar)(Te),
            h = (0, s.useReactiveVar)(Re),
            v = (0, s.useReactiveVar)(Ne),
            x = (0, s.useReactiveVar)(Oe),
            w = (0, s.useReactiveVar)(Ce),
            E = (0, s.useReactiveVar)(Ae),
            P = (0, s.useReactiveVar)(Le),
            S = (0, s.useReactiveVar)(je),
            _ = (0, l.useLocale)(),
            [k, T] = (0, r.useState)(""),
            R = (0, s.useReactiveVar)(Me),
            N = (0, s.useReactiveVar)(Ve),
            I = (0, s.useReactiveVar)(De),
            O = (0, s.useReactiveVar)(We),
            A = (0, s.useReactiveVar)($e),
            C = (0, s.useReactiveVar)(ze),
            L = (0, s.useReactiveVar)(fe),
            j = (0, s.useReactiveVar)(He),
            M = (0, o.useScConfig)(),
            V = (0, s.useReactiveVar)(Fe),
            D = (0, s.useReactiveVar)(Ge),
            W = (0, s.useReactiveVar)(Be),
            Y = (0, s.useReactiveVar)(Ye),
            B = (0, s.useReactiveVar)(Xe),
            $ = (0, s.useReactiveVar)(qe);
          return (0, r.useEffect)((() => {
            const e = (0, l.toScLocaleString)(_),
              t = `${document.location.pathname}${document.location.search}`,
              a = `${M.login}?returnUrl=${t}&lang=${e}`;
            T(a)
          }), []), {
            state: {
              accessiblePlates: e,
              canvasDimensions: t,
              character: a,
              currentPlate: n,
              currentPlateIndex: i,
              currentView: c,
              deletedPlateIndex: d,
              error: u,
              firstPlateMesh: m,
              isLoading: h,
              isScrollEnabled: E,
              gridScale: p,
              gridState: f,
              lastScrollY: P,
              pendingOrder: R,
              plates: I,
              plateTextures: O,
              realHeight: L,
              is3D: g,
              isExpanded: y,
              isLoggedIn: v,
              isMobile: b,
              isSceneLoaded: w,
              loginUrl: k,
              isOrderConfirmed: x,
              lastView: S,
              plateNumber: N,
              plateNumberStatus: A,
              plateStyles: C,
              refs: j,
              selectedStyle: V,
              selectedVehicle: D,
              shouldForce2D: W,
              shouldRenderScene: Y,
              three: B,
              vehicles: $
            },
            setAccessiblePlates: ge,
            setCanvasDimensions: be,
            setCharacter: ye,
            setCurrentPlate: he,
            setCurrentPlateIndex: ve,
            setCurrentView: xe,
            setDeletedPlateIndex: we,
            setError: Ee,
            setFirstPlateMesh: Pe,
            setGridState: _e,
            setIsLoading: Re,
            setIsLoggedIn: Ne,
            setIsOrderConfirmed: Oe,
            setLastScrollY: Le,
            setLastView: je,
            setPendingOrder: Me,
            setPlates: De,
            realHeightReactive: fe,
            setIs3D: ke,
            setIsExpanded: Te,
            setIsMobile: Ie,
            setIsSceneLoaded: Ce,
            setIsScrollEnabled: Ae,
            setGridScale: Se,
            setPlateNumber: Ve,
            setPlateNumberStatus: $e,
            setPlateStyles: ze,
            setPlateTextures: We,
            setRefs: Ue,
            setRefsInternal: He,
            setSelectedStyle: Fe,
            setSelectedVehicle: Ge,
            setShouldForce2D: Be,
            setShouldRenderScene: Ye,
            setThree: Xe,
            setVehicles: qe
          }
        };
      var Ke = a(3705);
      const Je = e => {
        let {
          t
        } = e;
        const {
          setRefs: a,
          state: n
        } = Ze(), {
          realHeight: s
        } = n, o = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          a(B.FOOTER, o)
        }), [o.current]), (0, Ke.jsx)("div", {
          className: "rockstargames-modules-gtao-license-plateb6e8553eec1a920ae9f7612fc67f679d",
          ref: o,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, Ke.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platea42faae94ba9f609acbd4f25fe7040df",
            children: [(0, Ke.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platebaaac365214984fcde58c80e665b93a5",
              children: [(0, Ke.jsx)(y.LanguageSelector, {}), (0, Ke.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateb1ab2aefcb2ea7b94f3b16e8751de23e",
                children: [(0, Ke.jsx)(y.A, {
                  to: "/corpinfo",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info",
                  children: t("Corporate")
                }), (0, Ke.jsx)(y.A, {
                  to: "/privacy",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy",
                  children: t("Privacy")
                }), (0, Ke.jsx)(y.A, {
                  onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie settings",
                  children: t("Cookie Settings")
                }), (0, Ke.jsx)(y.A, {
                  to: "/cookies",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie policy",
                  children: t("Cookie Policy")
                }), (0, Ke.jsx)(y.A, {
                  to: "/legal",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal",
                  children: t("Legal")
                }), (0, Ke.jsx)(y.A, {
                  to: "/ccpa",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "CCPA Link",
                  "data-gtm-label": "View CCPA Info",
                  children: t("Do Not Sell My Info")
                })]
              })]
            }), (0, Ke.jsx)(y.Rating, {
              className: "rockstargames-modules-gtao-license-platef11dcd708c3e9261a6f3ffa655c18840",
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })
        })
      };
      var Qe = a(2960),
        et = a(975);
      const tt = e => {
        let {
          envMap: t,
          envModel: a,
          onLoad: n,
          position: s = [0, 0, 0]
        } = e;
        const {
          scene: o
        } = a;
        return (0, r.useEffect)((() => {
          o.traverse((e => {
            e instanceof d.Mesh && (e.material.opacity = 0, e.material.transparent = !0, e.material.map && (e.material.map.encoding = d.LinearEncoding, e.material.map.needsUpdate = !0)), "Car_ShadowPlane" !== e.name && "banshee_HD_Glass_SingleLayer" !== e.name && "banshee_HD_Shells_VertexPaint_Cage" !== e.name || (e.renderOrder = 1, e instanceof d.Mesh && (e.material.depthWrite = !0))
          })), o.getObjectByName("Car_Banshee_LOD_VertexColors")?.traverse((e => {
            e.castShadow = !0, e instanceof d.Mesh && (e.material.envMap = t, e.material.envMapIntensity = 1)
          })), o.visible = !1
        }), [a]), (0, r.useEffect)((() => {
          n && n()
        }), []), (0, Ke.jsx)("primitive", {
          position: s,
          scale: [1, 1, 1],
          rotation: [0, 0, 0],
          object: o
        })
      };
      var at = a(5297);
      const rt = "#898989",
        nt = "#000000",
        st = ["0.05", "0.15", "0.4"],
        ot = ["0.0", "0.5", "1.0"],
        it = ["0.299", "0.587", "0.114"],
        lt = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        ct = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= z.sm ? t = 1 / 4 : a <= z.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        dt = {
          bumpMap: ct(),
          map: ct(),
          roughnessMap: ct()
        },
        ut = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: n,
            plateIndex: s,
            position: o = [0, 0, 0],
            width: i = 2
          } = e;
          const {
            state: l,
            setCurrentView: c,
            setPlateTextures: u,
            setRefs: m
          } = Ze(), {
            currentView: p,
            isSceneLoaded: f,
            pendingOrder: g,
            plateNumber: b,
            plates: y,
            isLoggedIn: h,
            isMobile: v,
            selectedStyle: w,
            gridScale: E,
            plateTextures: P
          } = l, S = 0 === s && "number" == typeof w, [_, k] = (0, r.useState)(x(S ? w : n.style.id)), T = [0, 0, 0], R = [1, 1, 1], [N] = (0, r.useState)(0 === n.index), [I, C] = (0, r.useState)({}), L = (0, r.useRef)(), j = y.filter((e => {
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
              !n.index && j || O(0, p)
            }), [p]),
            D = (0, r.useCallback)((e => {
              if (!_) return [];
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete dt.bumpMap, dt.bumpMap = ct();
                  const a = dt.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= z.sm ? r = 1 / 4 : n <= z.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const o = 5 * r;
                  return lt || (a.filter = `blur(${o}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), lt && at.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * o), new d.CanvasTexture(a.canvas)
                })(a, _),
                n = ((e, t) => {
                  delete dt.map, dt.map = ct();
                  const a = dt.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= z.sm ? r = 1 / 4 : n <= z.md && (r = .5);
                  const s = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new d.CanvasTexture(a.canvas)
                })(a, _),
                s = v ? void 0 : ((e, t) => {
                  delete dt.roughnessMap, dt.roughnessMap = ct();
                  const a = dt.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= z.sm ? r = 1 / 4 : n <= z.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = nt, a.fillStyle = nt, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = rt, a.fillStyle = rt, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new d.CanvasTexture(a.canvas)
                })(a, _);
              return [r, n, s]
            }), [_]),
            W = (0, r.useCallback)((e => {
              var t;
              N && (e.uniforms.saturation = H.saturation, e.uniforms.fade = H.fade, e.uniforms.shaderIndex = H.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == 2) {\n            float opacity = mix(0.01, 1.0, saturation);\n            float desaturationOpacity = gl_FragColor.a * (opacity);\n            vec3 desaturationColor = vec3(\n                ${it[0]},\n                ${it[1]},\n                ${it[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, gl_FragColor.a);\n\n        } else if (shaderIndex == 0) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=h?st:ot)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [N, h, g]);
          return (0, r.useEffect)((() => {
            N && (n.plateText = b)
          }), [N ? b : null]), (0, r.useEffect)((() => {
            if (N && _ && _.id !== w) {
              const e = x(w);
              k(e)
            }
          }), [N, w]), (0, r.useEffect)((() => {
            H.shaderIndex.value = h ? g ? 0 : 2 : 0, M.current && (M.current.bumpScale = .015 * E, M.current.needsUpdate = !0)
          }), [M.current, g, h, E]), (0, r.useEffect)((() => {
            if (I.map && P[s] !== I.map) {
              const e = [...P];
              e[s] = I.map, u(e)
            }
          }), [I, P]), (0, r.useEffect)((() => {
            const [e, t, a] = D(N ? b : n.plateText);
            C({
              map: t,
              bumpMap: e,
              roughnessMap: a
            })
          }), [N ? b : void 0, N ? _ : void 0]), (0, r.useMemo)((() => f && I.map && I.bumpMap ? (0, Ke.jsxs)("mesh", {
            name: me.LP,
            visible: !0,
            userData: {
              index: s
            },
            position: o,
            rotation: T,
            scale: R,
            ref: L,
            onPointerOver: v ? void 0 : () => {
              h && c() === ue.LIST_PLATES && L.current && V(L.current)
            },
            onPointerOut: v ? void 0 : () => {
              var e;
              h && L.current && (e = L.current, !n.index && j || A(e))
            },
            children: [(0, Ke.jsx)("planeBufferGeometry", {
              args: [i, a, i, a]
            }), (0, Ke.jsx)("meshPhysicalMaterial", {
              onBeforeCompile: 0 === s ? W : void 0,
              alphaMap: n.alphaMap,
              bumpMap: I.bumpMap,
              opacity: 0,
              bumpScale: .015,
              depthTest: !1,
              envMap: t,
              envMapIntensity: ce,
              map: I.map,
              metalness: .4,
              ref: M,
              roughness: .3,
              roughnessMap: I.roughnessMap,
              transparent: !0
            })]
          }) : null), [h, v, I])
        },
        mt = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const [s, i, l, c] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: u
          } = a, {
            gridOptions: m,
            gridPosition: p
          } = t, {
            bottomMarginAsRatio: f,
            columnGap: g,
            columns: b,
            isVertical: y,
            rowGap: h,
            topMarginAsRatio: v
          } = m, {
            state: x,
            realHeightReactive: w,
            setGridScale: E,
            setLastScrollY: P,
            setCurrentView: S
          } = Ze(), {
            currentView: _,
            gridScale: T,
            plates: R,
            isLoggedIn: N,
            isMobile: I,
            realHeight: O,
            refs: A,
            currentPlateIndex: C,
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
          } = (0, o.useGtmTrack)(), K = {
            view_name: "license plate creator - landing page logged " + (N ? "in" : "out")
          }, [J, Q] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            _ === ue.LIST_PLATES && Z({
              ...K,
              event: "virtualPageview",
              display_type: I ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (N ? "in" : "out")
            })
          }), [_]);
          const ee = (0, r.useCallback)((() => {
            if (M) {
              const e = l * b + g * (b - 1),
                a = Math.abs(p.z) * Math.tan((0, et.Id)(Y.fov / 2)) * 2,
                r = t.gridDimensions.margins.meters.top,
                n = t.gridDimensions.margins.meters.bottom,
                s = t.gridDimensions.width,
                o = s / e,
                i = t.gridDimensions.height,
                c = i / a;
              q((i - a + r + n).toFixed(4)), E(o), (e => {
                ue.LIST_PLATES;
                const t = z.domElement.offsetHeight,
                  a = c * t + v * t + f * t,
                  r = k(),
                  n = A[B.ROOT]?.current;
                n && (n.style.height = `${a}px`), Q({
                  canvasHeight: t,
                  rootHeight: a
                }), w(`${Math.round(a)}px`);
                const i = Math.round(l * o / s * (z.domElement.offsetWidth - 2 * r));
                G(i)
              })()
            }
          }), [Y.fov, M, b, _, I, p, R, i, $, v, C, j]);
          (0, r.useEffect)((() => {
            p && U(p), ee()
          }), [p, M]);
          const te = (0, r.useMemo)((() => R?.map((e => {
              if (0 === F) return null;
              const {
                index: t
              } = e, a = -1 * s / 2 + .251953125 * s, r = (y ? t % b * (s + g) : Math.floor(t / b) * (s + g)) + s / 2, n = (y ? Math.floor(t / b) * (i + h) * -1 : t % b * (i + h) * -1) + a;
              return (0, Ke.jsx)(ut, {
                envMap: u,
                height: c,
                position: [r, n, 0],
                plate: e,
                plateIndex: e.index,
                width: l
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [F, R]),
            ae = (0, r.useCallback)((() => {
              const e = A[B.ROOT].current,
                t = document.body;
              e && (e.style.touchAction = "auto"), L() || requestAnimationFrame((() => {
                t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, V)
              }))
            }), [I, V, D]),
            re = (0, r.useCallback)((() => {
              const e = A[B.ROOT].current,
                t = document.body,
                a = window.scrollY;
              P(a), e && (e.style.touchAction = "none"), L() || (window.scrollTo(0, a), requestAnimationFrame((() => {
                t.style.position = "fixed", t.style.top = `-${a}px`
              })))
            }), [I, A, D, V]);
          (0, r.useEffect)((() => {
            D ? ae() : re()
          }), [D]), (0, r.useEffect)((() => () => {
            ae()
          }), []);
          const ne = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (S() === ue.LIST_PLATES || e) {
              const e = A[B.ROOT]?.current;
              if (!e || !J) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = J, r = I && R.length <= 2 ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = H.y + X * n;
              W?.current?.position?.set(H.x, Number(s.toFixed(3)), H.z)
            }
          }), [W.current, H, A, X, R, J, N, I]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ne(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [W.current, N, H, p, O, A, X, J]), (0, r.useEffect)((() => {
            if (!W.current || !$) return;
            const e = $.getObjectByName("Scene");
            W.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [W.current, $]), (0, r.useMemo)((() => (0, Ke.jsx)("group", {
            name: me.LP_GRID,
            ref: W,
            position: p,
            scale: T,
            children: 0 !== F && te
          })), [T, te, F])
        },
        pt = e => {
          let {
            name: t,
            color: a,
            intensity: r,
            distance: n,
            decay: s,
            position: o,
            rotation: i,
            mapSize: l,
            ref: c,
            withHelper: d = !1
          } = e;
          return (0, Ke.jsxs)(Ke.Fragment, {
            children: [(0, Ke.jsx)("pointLight", {
              name: t,
              color: a,
              intensity: r,
              distance: n,
              decay: s,
              position: o,
              rotation: i,
              castShadow: !0,
              "shadow-mapSize-height": l,
              "shadow-mapSize-width": 2 * l,
              "shadow-radius": 4,
              "shadow-bias": -35e-5
            }), d && (0, Ke.jsx)("pointLightHelper", {
              light: c,
              sphereSize: 1
            })]
          })
        },
        ft = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, Ke.jsxs)("group", {
            name: "Lights",
            children: [(0, Ke.jsx)(pt, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [G, X, q],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Ke.jsx)(pt, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [Z, K, J],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Ke.jsx)(pt, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [ee, te, ae],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Ke.jsx)(pt, {
              name: "Light4",
              color: 16777215,
              intensity: 0,
              distance: 50,
              decay: 2,
              position: [ne, se, oe],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, n.extend)({
        OrbitControls: Qe.z
      });
      const gt = {
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
        bt = e => {
          let {
            loadedAssets: t
          } = e;
          const {
            state: a,
            setIsSceneLoaded: s,
            setThree: o,
            setGridState: i
          } = Ze(), {
            gridState: l,
            isLoggedIn: c,
            is3D: u,
            shouldForce2D: m,
            isSceneLoaded: p,
            plates: f,
            plateStyles: g,
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
          })), _ = (0, r.useRef)(), [T, R] = (0, r.useState)(!1), [N, I] = (0, r.useState)(null), O = () => {
            if (P.domElement.style.opacity = 1, P.domElement.style.position = "absolute", P.domElement.style.top = 0, P.domElement.style.left = 0, P.domElement.style.right = 0, P.domElement.style.bottom = 0, P.domElement.style.touchAction = "auto", !p) {
              const e = new d.Vector3,
                t = new d.Vector3;
              _.current.target.copy(t), o({
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
            f.length && N && A(N.width)
          }), [N, f]), (0, r.useEffect)((() => (I({
            height: P.domElement.offsetHeight,
            width: P.domElement.offsetWidth
          }), () => {
            s(!1)
          })), []), (0, r.useEffect)((() => {
            t && f?.length && null !== c && R(!0)
          }), [t, f, c]), (0, r.useEffect)((() => {
            t && t?.environmentMap && g?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
          }), [t, g]);
          const A = (0, r.useCallback)((e => {
            const t = document.getElementById("list-plates-sidebar");
            if (!w || !t || !N) return;
            const a = k(),
              {
                plateWidth: r,
                plateHeight: n,
                columnGap: s,
                rowGap: o,
                depth: l
              } = gt,
              c = l * Math.tan((0, et.Id)(17.5)),
              u = -1 * w.aspect * c,
              m = window.innerWidth < z.lg ? t.offsetHeight + a : a,
              p = a,
              g = P.domElement.offsetWidth,
              b = P.domElement.offsetHeight,
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
              h = p / g,
              v = u - u * h * 2,
              x = m / b,
              S = c - c * x * 2,
              _ = y / b,
              T = new d.Vector3(v, S, -l),
              R = f.length > 1 ? (e => {
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
              I = Math.ceil(f.length / R),
              O = r * R + s * (R - 1),
              A = n * Math.ceil(f.length / R) + o * (Math.ceil(f.length / R) - 1),
              C = Math.abs(T.z) * Math.tan((0, et.Id)(w.fov / 2)) * 2,
              L = h * (C * (g / b)),
              j = x * C,
              M = _ * C,
              V = Math.abs(2 * T.x),
              D = V / O * A;
            i({
              gridPosition: T,
              gridOptions: {
                ...gt,
                columns: R,
                rows: I,
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
          }), [f, x?.[B.SIDEBAR]?.current, w, N, c]);
          (0, r.useEffect)((() => {
            y && _.current && !y?.controlsInit && o({
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
          const C = (0, r.useCallback)(b().debounce((() => {
            const e = x[B.CANVAS_WRAP]?.current;
            e && I({
              width: e.offsetWidth,
              height: e.offsetHeight
            })
          }), 100), [w, x]);
          (0, r.useEffect)((() => (C(), window.addEventListener("resize", C, !0), () => window.removeEventListener("resize", C, !0))), [h]);
          const L = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, Ke.jsx)(tt, {
              position: [0, -4.05, -11.76],
              envMap: t.environmentMap,
              envModel: t.environmentModel,
              onLoad: O
            }) : null), [t]),
            j = (0, r.useMemo)((() => (0, Ke.jsx)(ft, {
              baseIntensity: le,
              mapSize: 1024
            })), []),
            M = (0, r.useMemo)((() => (0, Ke.jsx)(mt, {
              gridState: l,
              loadedAssets: t
            })), [l, t]),
            V = (0, r.useMemo)((() => (0, Ke.jsx)("orbitControls", {
              ref: _,
              screenSpacePanning: !0,
              args: [w, P.domElement],
              enableDamping: !0,
              enableZoom: !1,
              enablePan: !1,
              maxPolarAngle: F.plateView.maxPolarAngle,
              minPolarAngle: F.plateView.minPolarAngle,
              maxAzimuthAngle: F.plateView.maxAzimuthAngle,
              minAzimuthAngle: F.plateView.minAzimuthAngle,
              minDistance: -1,
              maxDistance: 100
            })), [w, _, P]);
          return (0, Ke.jsxs)(Ke.Fragment, {
            children: [j, L, T && l ? M : "", V]
          })
        };
      var yt = a(6370),
        ht = a(814),
        vt = a(3627);
      const xt = e => {
          let {
            isVisible: t = !1,
            top: a,
            bottom: n,
            onDrag: s,
            onHide: o,
            onShow: i,
            children: l,
            onTap: c,
            drawerY: d,
            mobileSidebarHeight: u
          } = e;
          const {
            state: m
          } = Ze(), {
            currentView: p
          } = m, f = (0, r.useRef)(null), g = (0, r.useState)(D), b = d?.get ? d.get() : 0, y = (0, ht.useSpring)({
            y: t ? b : u,
            config: {
              easing: ht.easings.easeInOutQuart,
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
            f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", t ? i(e) : o(e)
          }), [t]);
          const E = (0, r.useCallback)((0, vt.useDrag)((e => {
              if (p !== ue.CONFIRM_ORDER) {
                if (!w.current)
                  if (h.current = Math.max(a, Math.min(n, y.y.get() + e.delta[1])), x.current = e.movement[1], e.dragging) y.y.set(h.current);
                  else {
                    const e = {
                      y: y.y.get()
                    };
                    if (h.current < a / 2) {
                      const t = v().to(e, {
                        y: a,
                        duration: U.sidebar.mobile.drawerSnap.duration,
                        ease: U.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = W
                    } else if (h.current > n / 2) {
                      const t = v().to(e, {
                        y: n,
                        duration: U.sidebar.mobile.drawerSnap.duration,
                        ease: U.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = Y
                    } else {
                      const t = v().to(e, {
                        y: 0,
                        ease: U.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = D
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
                  drawerStateRef: g
                });
                const e = {
                    y: y.y.get()
                  },
                  t = {};
                g.current === D ? (t.y = a, f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = W) : (g.current === W || g.current === Y) && (t.y = 0, f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = D), v().to(e, {
                  y: t.y,
                  duration: U.sidebar.mobile.drawerSnap.duration,
                  ease: U.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    y.y.set(e.y)
                  },
                  onComplete: () => {
                    w.current = !1, h.current = y.y.get()
                  }
                })
              }
            };
          return (0, r.useMemo)((() => (0, Ke.jsxs)(ht.animated.div, {
            ...E(),
            ref: f,
            style: y ? {
              y: y.y
            } : void 0,
            className: "rockstargames-modules-gtao-license-platea30996f8fb210e2e4010c217dbf0437e",
            children: [(0, Ke.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateec1d03a84ec2e328b48748348a2f8bb4",
              onClick: P,
              "aria-hidden": "true"
            }), l]
          })), [y.y.get(), P, l])
        },
        wt = e => {
          let {
            onClick: t
          } = e;
          return (0, Ke.jsx)("button", {
            type: "button",
            onClick: t,
            className: "rockstargames-modules-gtao-license-platea81788a7f11c282c9a7e4bceac6d4ce1",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        Et = () => (0, Ke.jsx)("div", {
          className: "rockstargames-modules-gtao-license-platec116bf746553bf7c8d6b5e3b6f0b1209",
          "aria-label": "Los Santos Customs"
        }),
        Pt = e => {
          let {
            button: {
              buttonText: t,
              buttonIcon: a,
              isDisabled: r,
              onClick: n
            },
            closeModal: s
          } = e;
          return (0, Ke.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-platee9574ac462682ed4f394fb8076428ae1",
            disabled: r,
            onClick: e => (e => {
              n && n(e), s(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, Ke.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec9e74afa7b083c2db33e84befcc09927",
              children: t
            }), a && (0, Ke.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platebf69c5632ee8bf0e79067600546eb003"
            })]
          })
        },
        St = e => {
          let {
            icon: t = !1,
            title: a = "Cats are the world chase dog then run away yet while happily ignoring when being called meow.",
            secondaryText: n = "Meow to be let in hide from vacuum cleaner but try to hold own back foot to clean it but foot reflexively kicks you in face.",
            buttons: s = [{
              buttonText: "Cat mojo"
            }, {
              buttonText: "No, go back"
            }],
            showModal: i = !1,
            onClose: l = (() => {})
          } = e;
          const c = (0, r.useRef)(null),
            {
              track: d
            } = (0, o.useGtmTrack)(),
            {
              state: {
                isMobile: u
              }
            } = Ze();
          return (0, r.useEffect)((() => {
            i && c.current && (c.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [i]), (0, Ke.jsxs)("dialog", {
            ref: c,
            className: "rockstargames-modules-gtao-license-plateaefb6cdd2d770689d66db28e09c748f7",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), l()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            children: [t && (0, Ke.jsx)("i", {
              className: "rockstargames-modules-gtao-license-platefc678c80791b7bec94a2c7743aefb2c4"
            }), (0, Ke.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec82a7d998d77f05fedd84c490e9c6b90",
              children: [(0, Ke.jsx)("h3", {
                children: a
              }), n && (0, Ke.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, Ke.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platee728a2fcfc9abbc5984c9245721af997",
              children: s.splice(0, 2).map((e => (0, Ke.jsx)(Pt, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (c.current?.close(), void l())
              }, e.buttonText)))
            })]
          })
        },
        _t = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, Ke.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platec8ae2c220065654efd13996c8290a0fa",
            children: [(0, Ke.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec5250ca53556e76b38b62f7732ec6e52",
              children: t
            }), (0, Ke.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec71387432404f4698fbf646c43e14c7c",
              children: a
            })]
          })
        },
        kt = {
          viewPlate: "rockstargames-modules-gtao-license-plated72ac3a6911a9036de7702eb5eb7276d",
          expanded: "rockstargames-modules-gtao-license-platec5b4f7b56f7a6436a91e0217a7986b91",
          plateInfo: "rockstargames-modules-gtao-license-plateb672b520eaa15b69fb343b73c1ee951e",
          vehicles: "rockstargames-modules-gtao-license-platebf07cd0478ffe73fc72edd77281588c2",
          deleteBtnContainer: "rockstargames-modules-gtao-license-plateca8185ce5f24b53971c67feac0c06e9e",
          deleteBtn: "rockstargames-modules-gtao-license-platec53cb21f982e1b3aefb1d551761cd4b2",
          noDeleteClarification: "rockstargames-modules-gtao-license-plateef369fe43a8bde656427ac175f7c0829",
          drawerHandle: "rockstargames-modules-gtao-license-platec56076f3d34adc4bb3dd7ea9a78fa66a",
          sidebar: "rockstargames-modules-gtao-license-platec0118043400cf0117fadfb999cf02b37",
          landingPage: "rockstargames-modules-gtao-license-plated11bc37722014d5bff02cc83057aa2ce",
          ui: "rockstargames-modules-gtao-license-platea08114e3f8147371ce9982d0f175d42b",
          uiBottom: "rockstargames-modules-gtao-license-plated9b07d407fc6a0cb2835f567ed500b1a",
          noVehicles: "rockstargames-modules-gtao-license-plateeac59b99e77897e051d2d8f8c1f261f8"
        },
        Tt = "visible",
        Rt = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, s.useRockstarTokenPing)(),
            {
              loggedIn: n
            } = (0, o.useRockstarUser)(),
            {
              setCurrentView: i,
              setShouldRenderScene: c,
              setIsExpanded: u,
              setRefs: m,
              setError: p,
              state: f,
              setIsScrollEnabled: g,
              setDeletedPlateIndex: y
            } = Ze(),
            {
              accessiblePlates: h,
              currentPlateIndex: x,
              currentPlate: w,
              currentView: E,
              gridScale: _,
              gridState: k,
              is3D: R,
              isExpanded: O,
              isMobile: A,
              isScrollEnabled: L,
              lastScrollY: j,
              plates: M,
              realHeight: V,
              refs: $,
              three: z
            } = f,
            [H, G] = (0, r.useState)(E === ue.VIEW_PLATE),
            [X, q] = (0, r.useState)([]),
            [Z, K] = (0, r.useState)(!1),
            [J, Q] = (0, r.useState)(!1),
            ee = (0, r.useRef)(null),
            te = (0, r.useRef)(null),
            ae = (0, r.useRef)(null),
            re = (0, r.useRef)(null),
            ne = (0, r.useRef)(35),
            se = (0, r.useRef)(null),
            [oe, le] = (0, r.useState)(.4 * window.innerHeight),
            [ce, de] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [pe, fe] = (0, r.useState)(0),
            ge = (0, r.useRef)(oe),
            be = (0, r.useRef)(null),
            [ye, he] = (0, r.useState)(null),
            ve = (0, r.useRef)(null),
            xe = (0, r.useRef)(null),
            we = (0, r.useRef)(null),
            Ee = (0, r.useRef)(0),
            [Pe, Se] = (0, r.useState)(null),
            {
              track: _e
            } = (0, o.useGtmTrack)(),
            ke = {
              view_name: "license plate creator - view plate"
            },
            Te = E === ue.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            E !== ue.VIEW_PLATE && J && Q(!1)
          }), [E, J]);
          const Re = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(x) || (Re.current = x)
          }), [x]);
          const Ne = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            E && (Ne.current = E), E === ue.VIEW_PLATE && (we.current = !1)
          }), [E]);
          const Ie = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            _ && (Ie.current = _)
          }), [_]), (0, r.useEffect)((() => {
            h?.[0]?.current && E === ue.NEW_PLATE && Se(N(h[0].parentElement))
          }), [h, E]);
          const Oe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Pe && (Oe.current = Pe)
          }), [Pe]);
          const Ae = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (Ne.current !== ue.VIEW_PLATE) return;
            const {
              renderer: r
            } = z;
            C({
              plateIndex: Re.current,
              three: z,
              timeline: e,
              gridScale: t
            }, {
              onStart: () => {
                A ? document.body.style.touchAction = "none" : g(!1)
              },
              onComplete: e => {
                e?.three?.camera && (ee.current = new d.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), re?.current?.children && re.current.querySelectorAll("button").forEach((e => {
                  e.style.pointerEvents = "all"
                })), A && (r.domElement.style.touchAction = "none", L && setTimeout((() => {
                  document.body.style.touchAction = "auto", g(!1)
                }), 200), be.current = N(r.domElement).y)
              },
              tweenPosition: 0,
              isResize: a,
              is3D: R
            })
          }), [z, x, E, k, M, A, R, L]);
          (0, r.useEffect)((() => {
            if (!z?.controls || !H) return;
            const {
              controls: e
            } = z, t = v().timeline({
              duration: A ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
              ease: A ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            Ae(t, _, !0)
          }), [_, z]), (0, r.useEffect)((() => {
            Ee.current = j
          }), [j]);
          const Ce = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!z?.controls || !h?.[x]) return;
              const {
                controls: a
              } = z, r = e || v().timeline({
                defaults: {
                  duration: 0,
                  ease: A ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = T(), s = A && E === ue.CONFIRM_ORDER ? 1.5 : 1, o = !S() || A ? n * _ * s : 1.6 * n * _, l = $[B.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = $[B.CANVAS_WRAP].current, u = h[x].current;
              if (l && c && u && d) {
                const e = I(x, l, Number(V.replace("px", "")), k, A ? void 0 : {
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
                  p = 5 / o,
                  f = A || i() !== ue.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
                  g = {
                    x: m.x - e.x + f,
                    y: m.y - e.y - 80 + (t.isResize ? Ee.current : window.scrollY)
                  },
                  b = {
                    current: 0
                  },
                  y = h.map((e => Number(getComputedStyle(e?.current)?.getPropertyValue("opacity"))));
                r.to(b, {
                  current: 1,
                  ease: A ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                  onComplete: () => {
                    Se(N(u.parentElement))
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = b, r = (0, et.t7)(Number(s.x), g.x, a), n = (0, et.t7)(Number(s.y), g.y + (A ? .4 * window.innerHeight / -2 : 0), a), o = (0, et.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${o})`, t.isResize || h.forEach(((e, t) => {
                      if (t !== x && e?.current) {
                        const r = (0, et.t7)(y[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r.toFixed(2)
                      }
                    }))
                  }
                }, "<")
              }
            }), [x, k, A, E, V, z, h, $, oe, j]),
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
                  ease: U.toggleView.camera.ease,
                  duration: U.toggleView.camera.duration,
                  onStart: () => {
                    a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1, a.current.enabled = !1)
                  },
                  onComplete: () => {
                    i(ue.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.maxPolarAngle = F.plateView.maxPolarAngle, a.current.minPolarAngle = F.plateView.minPolarAngle, a.current.maxAzimuthAngle = F.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = F.plateView.minAzimuthAngle, a.current.enableZoom = !1), ge.current = 0, e?.onComplete && e.onComplete()
                  }
                }), A) {
                const e = r.domElement;
                v().to(e.style, {
                  opacity: 1,
                  duration: U.toggleView.reset.duration,
                  ease: U.toggleView.reset.ease
                })
              }
              _e({
                ...ke,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "view plate",
                view_name: "license plate creator - view plate"
              })
            }), [A, z, ee]);
          (0, r.useEffect)((() => {
            m(B.VIEW_PLATE, se)
          }), [se.current]), (0, r.useEffect)((() => {
            q(M?.[x]?.vehicles ?? [])
          }), [x, M]), (0, r.useEffect)((() => {
            G(E === ue.VIEW_PLATE)
          }), [E]), (0, r.useEffect)((() => {
            z?.scene && re?.current && (e => {
              const {
                scene: t,
                controls: a
              } = z, r = [];
              t.traverse((e => {
                e.name === me.LP && r.push(e), e.userData.index === Number(x) && (te.current = e)
              }));
              const n = v().timeline({
                defaults: {
                  duration: A ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                  ease: A ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease
                },
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              switch (e) {
                case Tt: {
                  Ae(n, Ie.current, !1);
                  const e = $[B.ROOT]?.current,
                    t = $[B.SIDEBAR]?.current,
                    a = h[x].current,
                    r = $?.[B.CANVAS_WRAP]?.current;
                  e && t && a && r && Ce(n), xe?.current && n.to([re.current, xe.current, A ? void 0 : ae.current], {
                    autoAlpha: 1,
                    duration: U.sidebar.in.duration,
                    ease: U.sidebar.in.ease,
                    delay: U.sidebar.in.delay,
                    onComplete: () => {
                      xe?.current && (xe.current.style.pointerEvents = "all"), ae?.current && (ae.current.style.pointerEvents = "all")
                    }
                  }, 0), z?.camera && A && !ne.current && (ne.current = z.camera.fov);
                  break
                }
                default:
                  ae.current && v().to(ae.current, {
                    pointerEvents: "none"
                  }), re.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(re.current, {
                    autoAlpha: 0,
                    duration: U.sidebar.out.duration,
                    ease: U.sidebar.out.ease,
                    delay: U.sidebar.out.delay
                  }), !A && ae.current ? (v().to(ae.current, {
                    autoAlpha: 0,
                    duration: U.sidebar.out.duration,
                    ease: U.sidebar.out.ease,
                    delay: U.sidebar.out.delay
                  }), v().to(xe.current, {
                    autoAlpha: 0,
                    duration: U.sidebar.out.duration,
                    ease: U.sidebar.out.ease,
                    delay: U.sidebar.out.delay,
                    onComplete: () => {
                      xe.current.style.pointerEvents = "none"
                    }
                  })) : v().to(xe.current, {
                    autoAlpha: 0,
                    duration: U.sidebar.out.duration,
                    ease: U.sidebar.out.ease,
                    delay: U.sidebar.out.delay,
                    onComplete: () => {
                      xe.current.style.pointerEvents = "none"
                    }
                  }), a?.current && (a.current.minDistance = 0)
              }
            })(H ? Tt : "hidden")
          }), [xe.current, z, H]);
          const je = (0, r.useCallback)((() => {
            if (A && se.current) {
              const e = se.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              fe(a - 48 - t), le(a), de(-1 * (.6 * e - 80))
            }
          }), [A, se.current]);
          (0, r.useEffect)((() => {
            je()
          }), [A, se.current]);
          const Me = (0, r.useRef)(null),
            Ve = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Me.current = H
          }), [H]), (0, r.useEffect)((() => {
            Ve.current = z
          }), [z]);
          const De = (0, r.useCallback)(b().debounce((() => {
            if (!0 !== Me.current) return;
            const {
              renderer: e
            } = Ve.current;
            Ne.current === ue.VIEW_PLATE && (P() ? e.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : e.domElement.style.transform = "translateY(0px)", ae?.current && (ae.current.style.opacity = "1", ae.current.style.visibility = "visible", ae.current.style.pointerEvents = "all"), Ce(null, {
              isResize: !0
            }), je())
          }), 100), [A, H, E, z, ce, V, k]);
          (0, r.useEffect)((() => {
            _ && (Ie.current = _), i() === ue.VIEW_PLATE ? De() : P() && (je(), he(.4 * window.innerHeight))
          }), [_]), (0, r.useEffect)((() => {
            if (!z?.scene) return;
            if (!z?.scene || !h?.[0]?.current) return;
            const {
              scene: e
            } = z, t = [], a = [], r = h[x].current;
            if (e.traverse((e => {
                e.name === me.LP && e.material ? a[e.userData.index] = e.material : t.push(e.material)
              })), i() === ue.VIEW_PLATE)
              if (R) {
                const t = a[x];
                if (v().to(t, {
                    opacity: 1,
                    delay: A ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                    duration: A ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                    ease: A ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                    onStart: () => {
                      c(!0), v().to(r.style, {
                        opacity: 0,
                        duration: U.accessibilePlate.duration,
                        ease: U.accessibilePlate.ease,
                        onUpdate: () => {}
                      })
                    }
                  }), !we.current) {
                  const t = e.getObjectByName("Light4"),
                    a = new d.Vector3;
                  te?.current && (te.current.getWorldPosition(a), v().to(t.position, {
                    x: ie.x,
                    y: a.y + ie.y,
                    z: ie.z,
                    delay: A ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                    duration: U.plateShimmer.duration,
                    ease: U.plateShimmer.ease
                  }));
                  const r = {
                    current: 0
                  };
                  v().to(r, {
                    current: 1,
                    delay: A ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                    duration: U.plateShimmer.duration,
                    ease: U.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: e
                      } = r, a = (0, et.t7)(0, Math.PI, e);
                      t.intensity = .3 * Math.sin(a), t.color = new d.Color(a, .9 * a, a)
                    }
                  }), we.current = !0
                }
              } else {
                const e = a[x];
                v().to(r.style, {
                  opacity: 1,
                  duration: U.accessibilePlate.duration,
                  ease: U.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: U.accessibilePlate.duration,
                      ease: U.accessibilePlate.ease,
                      onComplete: () => {
                        c(!1)
                      }
                    })
                  }
                })
              }
          }), [R, A, z]);
          const We = (0, Ke.jsxs)(Ke.Fragment, {
              children: [!A && (0, Ke.jsx)("hr", {
                className: kt.drawerHandle,
                onClick: () => {
                  u(!O)
                },
                "aria-hidden": "true"
              }), (0, Ke.jsx)("div", {
                className: kt.plateInfo,
                children: (0, Ke.jsxs)("section", {
                  className: kt.vehiclesApplied,
                  children: [(0, Ke.jsx)("label", {
                    htmlFor: "vehicles",
                    className: X.length ? "" : `${kt.noVehicles}`,
                    children: X.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, Ke.jsx)("div", {
                    className: kt.vehicles,
                    children: X.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, Ke.jsx)(_t, {
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
                  o = {
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
                  i = {};
                t.current === D ? (i.buttonWrapOpacity = 0, i.buttonWrapTranslateY = ce, i.canvasWrapOpacity = 0, i.canvasHeight = -ce, i.canvasTranslateY = be.current, i.fov = ne.current, i.accessiblePlateX = Oe.current.x, i.accessiblePlateY = Oe.current.y, i.accessiblePlateScale = Oe.current.scale, s.style.pointerEvents = "none") : (t.current === W || t.current === Y) && (i.buttonWrapOpacity = 1, i.buttonWrapTranslateY = 0, i.canvasWrapOpacity = 1, i.canvasHeight = -ce, i.canvasTranslateY = be.current, i.fov = ne.current, i.accessiblePlateX = Oe.current.x, i.accessiblePlateY = Oe.current.y, i.accessiblePlateScale = Oe.current.scale, s.style.pointerEvents = "all"), v().to(o, {
                  buttonWrapOpacity: i.buttonWrapOpacity,
                  buttonWrapTranslateY: i.buttonWrapTranslateY,
                  canvasWrapOpacity: i.canvasWrapOpacity,
                  canvasHeight: i.canvasHeight,
                  canvasTranslateY: i.canvasTranslateY,
                  fov: i.fov,
                  accessiblePlateX: i.accessiblePlateX,
                  accessiblePlateY: i.accessiblePlateY,
                  accessiblePlateScale: i.accessiblePlateScale,
                  duration: U.sidebar.mobile.drawerSnap.duration,
                  ease: U.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    s.style.opacity = o.canvasWrapOpacity, ve.current.style.opacity = o.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${o.buttonWrapTranslateY}px)`, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), n.fov = o.fov, n.updateProjectionMatrix(), s.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [z, oe, ce, h]),
            Be = (0, r.useCallback)((e => {
              if (!z) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: o,
                renderer: i
              } = z, l = i.domElement, c = h?.[0]?.current, d = -ce + .4 * window.innerHeight - 48;
              if (c)
                if (t.dragging) {
                  const e = (0, et.ii)(0, n, r.get()),
                    i = (0, et.t7)(0, 1, 1 - e);
                  l.style.opacity = i, ve.current.style.opacity = i, ve.current.style.transform = `translateY(${r.get()}px)`;
                  const d = (0, et.t7)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < s) {
                    const e = (0, et.ii)(0, s, r.get()),
                      a = (0, et.t7)(ne.current, 40, e);
                    o.fov = a;
                    const n = Number(N(l).y) + t.delta[1] / 2;
                    if (l.style.transform = `translateY(${n}px)`, c) {
                      const e = N(c.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(N(c.parentElement).y) + t.delta[1] / 2;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                    o.updateProjectionMatrix()
                  }
                } else {
                  const e = {
                    buttonWrapOpacity: ve.current.style.opacity,
                    canvasWrapOpacity: l.style.opacity,
                    fov: o.fov,
                    uiButtonsTransformY: N(ve.current).y,
                    canvasHeight: l.offsetHeight,
                    canvasTranslateY: Number(N(l).y),
                    accessibilityPlateY: Number(N(c.parentElement).y),
                    accessibilityPlateOpacity: c.parentElement.style.opacity
                  };
                  a.current < ce / 2 ? (l.style.pointerEvents = "none", v().to(e, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    uiButtonsTransformY: ce,
                    canvasHeight: d,
                    accessibilityPlateOpacity: 0,
                    duration: U.sidebar.mobile.drawerSnap.duration,
                    ease: U.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = e.canvasWrapOpacity, ve.current.style.opacity = e.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, c.parentElement.style.opacity = e.accessibilityPlateOpacity
                    }
                  })) : a.current > s / 2 ? (l.style.pointerEvents = "all", v().to(e, {
                    buttonWrapOpacity: 1,
                    uiButtonsTransformY: s,
                    canvasWrapOpacity: 1,
                    fov: 40,
                    canvasHeight: d,
                    canvasTranslateY: Number(be.current) + s / 2,
                    accessibilityPlateY: Number(Oe.current.y) + s / 2,
                    duration: U.sidebar.mobile.drawerSnap.duration,
                    ease: U.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = e.canvasWrapOpacity, ve.current.style.opacity = e.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, o.fov = e.fov, o.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`, c.parentElement.style.transform = `translate(${Oe.current.x}px,\n                                ${e.accessibilityPlateY}px) scale(${Oe.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (l.style.pointerEvents = "all", v().to(e, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    uiButtonsTransformY: 0,
                    fov: ne.current,
                    canvasHeight: -ce,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Oe.current.y),
                    duration: U.sidebar.mobile.drawerSnap.duration,
                    ease: U.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = e.canvasWrapOpacity, ve.current.style.opacity = e.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px`, c.parentElement.style.opacity = e.accessibilityPlateOpacity, o.fov = e.fov, o.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`;
                      const t = N(c.parentElement),
                        a = Number(t.x),
                        r = Number(t.scale),
                        n = e.accessibilityPlateY;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }))
                }
            }), [z, ve.current, ce, h, oe, Pe]),
            $e = (0, r.useCallback)((e => {
              const t = $[B.UI]?.current;
              if (!t || !z?.scene || !e) return;
              const {
                camera: a,
                renderer: r
              } = z, n = r.domElement, {
                y: s,
                sidebarRef: o
              } = e, i = t.offsetHeight, l = {
                mobileSidebarHeight: s.get(),
                opacity: o.current.style.opacity,
                height: n.offsetHeight,
                fov: a.fov
              };
              v().to(l, {
                opacity: 1,
                height: i,
                mobileSidebarHeight: .4 * window.innerHeight,
                fov: ne.current,
                duration: U.sidebar.mobile.drawer.duration,
                ease: U.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${l.mobileSidebarHeight}px)`, o.current.style.opacity = l.opacity, ve.current.style.opacity = l.opacity, n.style.height = l.height, s.set(l.mobileSidebarHeight), a && (a.fov = l.fov, a.updateProjectionMatrix())
                },
                onComplete: () => {
                  n.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [$, z, oe]),
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
                duration: U.sidebar.mobile.drawer.duration,
                ease: U.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), ve.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, xe.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [ye, z]),
            He = (0, r.useMemo)((() => A ? (0, Ke.jsx)(xt, {
              isVisible: H,
              top: ce,
              bottom: pe,
              onTap: Ye,
              onDrag: Be,
              onHide: $e,
              onShow: ze,
              mobileSidebarHeight: oe,
              children: We
            }) : (0, Ke.jsx)("div", {
              ref: ae,
              className: kt.sidebar,
              children: We
            })), [ve.current, xe.current, O, oe, A, H, $, ae.current, X, ce, pe]);
          return (0, Ke.jsxs)("div", {
            className: kt.viewPlate,
            ref: se,
            children: [(0, Ke.jsx)(St, {
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
                      r && y(x), Le()
                    } catch (e) {
                      p(["api", e])
                    }
                  })(), _e({
                    ...ke,
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
                    ...ke,
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
            }), He, (0, Ke.jsxs)("div", {
              ref: re,
              className: kt.ui,
              children: [(0, Ke.jsx)(wt, {
                onClick: Le
              }), (0, Ke.jsx)(ht.animated.div, {
                ref: ve,
                className: kt.uiBottom,
                style: ye ? {
                  y: ye
                } : void 0,
                children: (0, Ke.jsx)(Et, {})
              })]
            }), (0, Ke.jsxs)("div", {
              className: kt.deleteBtnContainer,
              ref: xe,
              children: [(0, Ke.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: kt.deleteBtn,
                disabled: w?.noDelete || J,
                onClick: () => {
                  w?.noDelete || J || (_e({
                    ...ke,
                    event: "license_plate_delete_click",
                    event_category: "license_plate",
                    event_action: "delete",
                    event_label: "click",
                    text: t("lp.modal.delete.title").toLowerCase()
                  }), K(!0))
                },
                tabIndex: Te,
                type: "button"
              }), w?.noDelete && (0, Ke.jsx)("label", {
                htmlFor: "nodelete",
                className: kt.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        Nt = (0, l.withTranslations)((e => {
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
          } = (0, o.useGtmTrack)(), i = (t ? "lp.create.valid-profane" : a && "lp.create.valid-reserved") || "lp.create.helper";
          return (t || a) && s({
            view_name: "license plate creator - create plate form",
            event: "alert_error",
            event_category: "alert",
            event_action: "error",
            text: i
          }), (0, Ke.jsx)("p", {
            className: "rockstargames-modules-gtao-license-plated8dc05f054396924b408e16dea1c411f rockstargames-modules-gtao-license-platef12013d76eb62b07523fe96d62fef0f1 " + (!1 === r ? "rockstargames-modules-gtao-license-plateb5883ece595313dbdebb2bdcc0f19992" : ""),
            children: n(i)
          })
        })),
        It = {
          lpStyleOption: "rockstargames-modules-gtao-license-platef9c4c46735ea44a8fd03b964aa9cfdd1",
          selected: "rockstargames-modules-gtao-license-platecb72e49e43291fc3fa35d73ebc93a020",
          lpStyleOptionImage: "rockstargames-modules-gtao-license-platea848dacaa90a9ece96907bdfb6e97a30"
        },
        Ot = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: n,
            setSelectedStyle: s
          } = Ze(), {
            plates: o,
            selectedStyle: i
          } = n, l = (0, r.useCallback)((() => {
            $.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [o, t]);
          return (0, Ke.jsx)("button", {
            className: [It.lpStyleOption, i === t.id ? It.selected : ""].join(" "),
            onClick: () => l(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, Ke.jsx)("img", {
              className: It.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        At = (0, l.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: n
          } = e;
          const {
            loggedIn: i
          } = (0, o.useRockstarUser)(), c = (0, s.useRockstarTokenPing)(), {
            setCurrentView: d,
            setPlateNumber: u,
            setPlateNumberStatus: m,
            setError: p,
            setRefs: f,
            state: g
          } = Ze(), {
            currentView: b,
            plateStyles: y,
            plateNumber: h,
            plateNumberStatus: v,
            isMobile: x
          } = g, [w, E] = (0, r.useState)(0), {
            isValid: P
          } = v, S = (0, r.useMemo)((() => h), [h]), {
            track: _
          } = (0, o.useGtmTrack)(), k = {
            view_name: "license plate creator - " + (i ? "create plate form" : "try lp editor")
          }, T = (0, r.useRef)(null), R = (0, r.useRef)(null), N = (0, r.useRef)(null), I = (0, r.useRef)(null), O = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            f(B.NEW_PLATE_FORM, N)
          }), [N.current]), (0, r.useEffect)((() => {
            b === ue.NEW_PLATE && document.activeElement === O.current && O.current?.setSelectionRange(w, w)
          }), [w]);
          const A = b === ue.NEW_PLATE ? 0 : -1,
            C = (0, r.useCallback)((() => {
              (async () => {
                if (i && h) try {
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
                    isValid: o
                  } = a;
                  m({
                    isValid: o,
                    isMalformed: r,
                    isProfane: n,
                    isReserved: s,
                    statusPlateNumberBasis: h
                  }), o && (d(ue.CONFIRM_ORDER), _({
                    ...k,
                    event: "virtualPageview",
                    display_type: x ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  p(["api", e])
                }
              })()
            }), [i, h]);
          (0, r.useEffect)((() => {
            a && (a.current = C)
          }), [C, a]);
          const L = (0, r.useMemo)((() => y?.map((e => (0, Ke.jsx)(Ot, {
            style: e,
            tabIndex: A
          }, e.id)))), [y, b]);
          return (0, Ke.jsxs)("form", {
            ref: N,
            className: "rockstargames-modules-gtao-license-plated0ddb8fd0986a7382551faea1fad24fa",
            onSubmit: e => {
              e.preventDefault(), O.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, Ke.jsxs)("section", {
              children: [(0, Ke.jsx)("label", {
                htmlFor: "plate-text-input",
                ref: T,
                children: n("lp.create.title")
              }), (0, Ke.jsxs)("div", {
                ref: R,
                className: "rockstargames-modules-gtao-license-plateef9da71cf1e6161bfcff7856d32e9639",
                children: [(0, Ke.jsx)("i", {
                  className: "" + (!1 === P ? "rockstargames-modules-gtao-license-platec748df3952867c76489727613f414305" : "")
                }), (0, Ke.jsx)("input", {
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
                    "Enter" === e.code && O.current && O.current.blur()
                  },
                  value: S,
                  ref: O
                }), (0, Ke.jsx)(Nt, {
                  plateNumberStatus: v
                })]
              })]
            }), (0, Ke.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateadd724ae5e86972d7020c3691280e5f6"
            }), (0, Ke.jsxs)("section", {
              children: [(0, Ke.jsx)("label", {
                htmlFor: "plate-style-selector",
                children: n("lp.create.bgselector")
              }), (0, Ke.jsx)("div", {
                id: "plate-style-selector",
                ref: I,
                className: "rockstargames-modules-gtao-license-platecca6b8628101d08d64c8c82655607660",
                children: L
              })]
            })]
          })
        })),
        Ct = e => {
          let {
            buttons: t,
            refName: a = B.SIDEBAR_BUTTONS,
            isLoading: n,
            tabIndex: s
          } = e;
          const o = (0, r.useRef)(null),
            {
              setRefs: i
            } = Ze();
          return (0, r.useEffect)((() => {
            i(a, o)
          }), [o.current]), (0, Ke.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platecf91a67855e8fd02c5c67f9329f2e17a",
            ref: o,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, Ke.jsx)("button", {
                className: [a ? "rockstargames-modules-gtao-license-plateccb81fea118631a858202556b3cd2b00" : "", n ? "rockstargames-modules-gtao-license-platef3983e10eb76b520e409635d0f16a92f" : ""].join(" ").trim(),
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
        Lt = "rockstargames-modules-gtao-license-plateb8ee1e50e3ee7d2a0c64ff5766f1d90d",
        jt = "rockstargames-modules-gtao-license-platef5a6ad5cfb833ab500b3a27252e51e07",
        Mt = (0, l.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            is3DToggle: a = !1,
            t: n
          } = e;
          const [s, i] = (0, r.useState)(!1), [l, c] = (0, r.useState)(!1), {
            state: d,
            setRefs: u
          } = Ze(), {
            currentView: m,
            isMobile: p,
            is3D: f,
            shouldForce2D: g
          } = d, {
            track: b
          } = (0, o.useGtmTrack)(), y = {
            view_name: "license plate creator - create plate form"
          }, h = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            a || u(B.TOGGLE_VIEW_BUTTON, h)
          }), [h.current, a]), (0, r.useEffect)((() => {
            m === ue.NEW_PLATE && g && i(!1)
          }), [g, m]), (0, r.useEffect)((() => {
            a || (m === ue.NEW_PLATE ? s ? (b({
              ...y,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop",
              view_name: "license plate creator - car view"
            }), b({
              ...y,
              event: "license_plate_preview_car",
              event_category: "license_plate",
              event_action: "preview_car",
              text: n("lp.create.carview").toLowerCase()
            })) : b({
              ...y,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop"
            }) : i(!1))
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
          return (0, Ke.jsxs)("button", {
            ref: h,
            type: "button",
            role: "switch",
            "aria-checked": a ? f : s,
            className: "rockstargames-modules-gtao-license-platec79db25e7b0cf79a342e235bf34ad560",
            onClick: () => {
              t({
                onStart: () => {
                  i(!s)
                }
              })
            },
            tabIndex: "0",
            "aria-label": x,
            children: [(0, Ke.jsx)("div", {
              className: Lt,
              children: (0, Ke.jsx)("p", {
                className: l ? jt : "",
                children: a ? v.dimensionToggle.twoDimensions : v.carViewToggle.plateView
              })
            }), (0, Ke.jsx)("div", {
              className: Lt,
              children: (0, Ke.jsx)("p", {
                className: l ? jt : "",
                children: a ? v.dimensionToggle.threeDimensions : v.carViewToggle.carView
              })
            }), (0, Ke.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platecb346dd2e906d02e1fbafcc66427844f"
            })]
          })
        })),
        Vt = {
          orderConfirmed: "rockstargames-modules-gtao-license-platea3201b46675507cf815f8693188951bf",
          visible: "rockstargames-modules-gtao-license-platecc8040942e2a89ced64bf7bea8068168",
          background: "rockstargames-modules-gtao-license-platef0ea4a99a7042afcbf4b880eb0ace8ad",
          content: "rockstargames-modules-gtao-license-platee1472e99ea1f4f003f4316ebb892f011",
          secondaryWrap: "rockstargames-modules-gtao-license-platefd6005b1fee99cd35bedc530b25f15c0",
          contentHeading: "rockstargames-modules-gtao-license-plated924e0f65f0894d1be4a528943606c52",
          plateRedemptionInstructions: "rockstargames-modules-gtao-license-plateec9a8c7afbd7870b342d048aec9ca923",
          backToPlatesButton: "rockstargames-modules-gtao-license-platecddc8625c48ddbe3ed820a9690f027b8",
          hover: "rockstargames-modules-gtao-license-plated27d58c9e28d9d40bb9865204c9bae97",
          ctaText: "rockstargames-modules-gtao-license-platefa23d894a541a81230840520eba8d532",
          isWindows: "rockstargames-modules-gtao-license-plated4d11f8f71787a97fd7eee638ff06e83"
        },
        Dt = (0, l.withTranslations)((e => {
          let {
            isVisible: t,
            vehicleModel: a,
            t: n,
            top: s,
            drawerY: i,
            tabIndex: l
          } = e;
          const {
            setCurrentView: c,
            setIsExpanded: d,
            setRefs: u,
            state: m
          } = Ze(), {
            currentView: p,
            isExpanded: f,
            refs: g,
            three: b,
            isMobile: y,
            accessiblePlates: x
          } = m, w = (0, r.useRef)(null), E = (0, r.useRef)(null), P = (0, r.useRef)(null), S = (0, r.useRef)(null), k = (0, r.useRef)(null), {
            track: T
          } = (0, o.useGtmTrack)(), R = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(B.ORDER_BG, k)
          }), [k.current]);
          const N = g[B.CONFIRM_CONTENT]?.current,
            I = g[B.CONFIRM_SIDEBAR]?.current,
            O = g[B.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            A = g[B.CONFIRM_SIDEBAR_BUTTONS]?.current,
            C = g[B.NEW_PLATE_SIDEBAR]?.current,
            L = g[B.CANVAS_WRAP]?.current,
            j = g[B.SIDEBAR_BUTTONS]?.current,
            M = k.current,
            V = w.current,
            D = P.current,
            W = S.current,
            Y = E.current,
            $ = g[B.UI]?.current,
            z = g[B.NEW_PLATE_UI]?.current,
            F = g[B.SIDEBAR]?.current,
            G = g[B.ACCESSIBLE_PLATE_GRID]?.current,
            X = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            X.current = x
          }), [x]);
          const q = (0, r.useCallback)((() => {
            c(ue.LIST_PLATES), T({
              ...R,
              event: "cta_return_page",
              event_category: "cta",
              event_action: "return_page",
              text: n("lp.success.cta").toLowerCase()
            })
          }), []);
          return (0, r.useEffect)((() => {
            if (!b || !X?.current) return;
            const {
              renderer: e,
              camera: a,
              originalCameraPosition: r,
              originalCameraFov: n,
              controls: o,
              originalControlsTarget: l
            } = b;
            if (!(e && M && N && G)) return;
            const c = _();
            if (f && p === ue.LIST_PLATES) {
              const t = v().timeline({
                defaults: {
                  ease: U.transaction.confirmOrder.ease,
                  duration: U.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (v().to([e.domElement, F], {
                  autoAlpha: 1,
                  ease: U.transaction.fade.landingPage.ease,
                  duration: U.transaction.fade.landingPage.duration
                }), y) {
                const e = {
                  opacity: 1
                };
                t.to(e, {
                  drawerHeight: s,
                  opacity: 0,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const t = s - i.get();
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
              }, 0), v().set([C, z], {
                x: 0
              }), v().set(I, {
                left: "revert"
              })
            } else if (t) {
              const t = v().timeline({
                defaults: {
                  ease: U.transaction.confirmOrder.ease,
                  duration: U.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), v().set(L, {
                    x: 0
                  }), b.scene.traverse((e => {
                    e.name === me.LP && 0 === e.userData.index && e.material && (e.material.opacity = 0)
                  })), a.position.set(r.x, r.y, r.z), o?.current && (o.current.minDistance = 0, o.current.target.set(l.x, l.y, l.z)), $ && (a.fov = n, a.updateProjectionMatrix(), H.saturation.value = 0)
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
                      G.style.transform = "none"
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
                if (i) {
                  v().set(M, {
                    y: s - i.get(),
                    zIndex: 100,
                    pointerEvents: "all",
                    visibility: "visible"
                  });
                  const e = {
                    drawerHeight: i.get(),
                    y: s,
                    lerp: 0
                  };
                  t.to(e, {
                    y: 0,
                    drawerHeight: s,
                    lerp: 1,
                    onUpdate: () => {
                      M.style.transform = `translateY(${s-e.drawerHeight}px`, i.set(e.drawerHeight), A && (A.style.pointerEvents = "none", A.style.opacity = String(1 - e.lerp), A.style.transform = `translateY(${100*e.lerp}%)`), O && (O.style.pointerEvents = "none", O.style.opacity = String(1 - e.lerp)), t.to(j, {
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
              }, 0).to(I, {
                autoAlpha: 0,
                ease: U.transaction.fade.out.ease,
                duration: U.transaction.fade.out.duration
              }, 0).set(M, {
                pointerEvents: "all"
              }), I && t.to(I, {
                left: 100 - c + "vw"
              }, 0);
              T({
                ...R,
                event: "virtualPageview",
                display_type: y ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, k.current, b, p, y ? i : void 0]), (0, Ke.jsx)("div", {
            className: [Vt.orderConfirmed, f ? Vt.visible : ""].join(" "),
            children: (0, Ke.jsx)("div", {
              ref: k,
              className: Vt.background,
              children: (0, Ke.jsxs)("div", {
                className: Vt.content,
                children: [(0, Ke.jsx)("h1", {
                  ref: w,
                  className: Vt.contentHeading,
                  children: n("lp.success.title")
                }), (0, Ke.jsxs)("div", {
                  ref: E,
                  className: Vt.secondaryWrap,
                  children: [(0, Ke.jsx)("p", {
                    ref: P,
                    className: Vt.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: n("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, Ke.jsx)("button", {
                    ref: S,
                    type: "button",
                    className: Vt.backToPlatesButton,
                    onClick: () => {
                      q()
                    },
                    "aria-label": n("lp.success.cta"),
                    tabIndex: l,
                    children: (0, Ke.jsx)("span", {
                      className: Vt.ctaText,
                      children: n("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        })),
        Wt = (0, l.withTranslations)((e => {
          let {
            t,
            top: a,
            drawerY: n
          } = e;
          const {
            state: i,
            setError: c,
            setCurrentView: d,
            setIsOrderConfirmed: u,
            setPendingOrder: m,
            setRefs: p,
            setSelectedVehicle: f
          } = Ze(), {
            currentView: g,
            selectedVehicle: b,
            pendingOrder: h,
            plates: w,
            three: E,
            isMobile: P,
            refs: S,
            vehicles: k,
            selectedStyle: T,
            isOrderConfirmed: R,
            isExpanded: I
          } = i, {
            selectedCharacterTuple: O
          } = (0, o.useRockstarUserState)(), {
            loggedIn: A
          } = (0, o.useRockstarUser)(), C = (0, s.useRockstarTokenPing)(), L = g === ue.CONFIRM_ORDER, [j, M] = (0, r.useState)(I), [V, D] = (0, r.useState)(!1), W = (0, r.useRef)(null), Y = (0, r.useRef)(null), {
            track: $
          } = (0, o.useGtmTrack)(), z = {
            view_name: "license plate creator - confirm order"
          }, H = g === ue.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p(B.CONFIRM_SIDEBAR, W)
          }), [W.current]), (0, r.useEffect)((() => {
            p(B.CONFIRM_CONTENT, Y)
          }), [Y.current]);
          const F = S[B.ORDER_BG]?.current,
            G = S[B.CONFIRM_CONTENT]?.current,
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
              }), !(E?.camera && G && X && Q && F && K)) return;
            const e = {
                ease: P ? U.sidebar.mobile.drawer.ease : U.transaction.confirmOrder.ease,
                duration: P ? U.sidebar.mobile.drawer.duration : U.transaction.confirmOrder.duration
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
            }, 0), g === ue.NEW_PLATE && t.to(J, {
              autoAlpha: 1
            }, "<"), t.to([J, Q, te], {
              x: 0
            }, "<"), t.to(G, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            g === ue.LIST_PLATES && j && ae()
          }), [g, j]);
          const re = (0, r.useCallback)((() => {
            (async () => {
              try {
                const e = x(T);
                if (!(A && b && e?.name && O)) return;
                const [t, a] = O, {
                  index: r
                } = b, n = {
                  vehicleIndex: r,
                  plateText: w?.[0]?.plateText,
                  plateStyle: e.name
                };
                D(!0);
                const {
                  error: s
                } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: C,
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
                  error: o,
                  result: i
                } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: C,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (o) throw Object.assign(new Error(""), o);
                i[`character${a}Pending`] && m(i)
              } catch (e) {
                c(["api", e])
              }
            })()
          }), [A, O, w?.[0]?.plateText, b, V, T]);
          (0, r.useEffect)((() => {
            if (g !== ue.CONFIRM_ORDER || R) {
              if (P && !R) {
                ee && v().set(ee, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                v().to(e, {
                  lerp: 1,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    Z && (Z.style.opacity = "" + (1 - e.lerp), Z.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), X && v().to(X, {
                  autoAlpha: 0,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease
                }), q && (q.style.pointerEvents = "none", v().to(q.style, {
                  opacity: 0,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(E?.camera && G && X && Q && F && K)) return;
              let e = _();
              P || 100 !== e || (e = 0);
              const t = v().timeline({
                  defaults: {
                    ease: U.transaction.confirmOrder.ease,
                    duration: U.transaction.confirmOrder.duration
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
                }), P && (a.ease = U.sidebar.mobile.drawer.ease, a.duration = U.sidebar.mobile.drawer.duration, a.delay = U.sidebar.mobile.drawer.duration / 2, r.ease = U.sidebar.mobile.drawer.ease, r.duration = U.sidebar.mobile.drawer.duration, X && t.to(X, a, 0), K)) {
                const e = {
                    current: 0
                  },
                  a = {
                    start: Number(getComputedStyle(K).opacity),
                    end: 1
                  };
                t.to(e, {
                  current: 1,
                  delay: U.sidebar.mobile.drawer.duration / 2,
                  onUpdate: () => {
                    const {
                      current: t
                    } = e, r = (0, et.t7)(a.start, a.end, t);
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
                    duration: U.sidebar.mobile.drawer.duration,
                    ease: U.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Z.style.opacity = e.lerp, Z.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                q && (q.style.pointerEvents = "all", v().set(q.style, {
                  visibility: "visible"
                }), v().to(q.style, {
                  opacity: 1,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease
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
                  }, o = {
                    current: 0
                  };
                  t.to(o, {
                    current: 1,
                    onUpdate: () => {
                      const {
                        current: e
                      } = o, t = `translate(${(0,et.t7)(s.x.start,s.x.end,e)}px, ${(0,et.t7)(s.y.start,s.y.end,e)}px) scale(${(0,et.t7)(s.scale.start,s.scale.end,e)})`;
                      K.style.transform = t
                    }
                  }, "<")
                }
                t.to(G, {
                  x: 100 - e + "vw"
                }, "<"), X && t.to(X, {
                  autoAlpha: 1
                }, "<"), t.to(J, {
                  autoAlpha: 0
                }, "<"), t.set(F, {
                  x: `${-100+e}vw`
                }, "<")
              }
            }
            j && !L && R && u(!1)
          }), [E, g, P, Z, R, q, _()]), (0, r.useEffect)((() => {
            if (g !== ue.CONFIRM_ORDER && k?.length) {
              let e = k[0];
              h && (e = k.find((e => {
                let {
                  manufacturer: t,
                  name: a
                } = e;
                return t === h.manufacturerName && a === h.vehicleName
              }))), f(e)
            }
          }), [k, h]);
          const ne = (0, r.useCallback)((e => {
              if (!k?.length) return;
              const t = k.find((t => {
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
            }), [k]),
            se = (0, Ke.jsx)(Ct, {
              refName: B.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: V,
                onClick: () => {
                  d(ue.NEW_PLATE), ae(), $({
                    ...z,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: t("lp.confirm.cancel").toLowerCase()
                  })
                }
              }, {
                buttonText: V ? (0, Ke.jsx)(y.LoadingAnimation, {}) : t("lp.confirm.next"),
                isDisabled: !A || !b || V,
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
          let oe;
          return P && (oe = q ? (0, yt.createPortal)(se, q) : null), (0, Ke.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platea29469cb6841adfdb317c0863c552ee1",
            "aria-hidden": g !== ue.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, Ke.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateab4356b7d6ef5a4a6201db746fc5a985",
              ref: Y,
              children: [(0, Ke.jsx)("span", {}), (0, Ke.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateccf3da9613752077116fd5ec0338c7a9",
                ref: W,
                children: [(0, Ke.jsxs)("form", {
                  className: "rockstargames-modules-gtao-license-platef11b2e09ddb486e97daf0b4e6d31e0a0",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, Ke.jsxs)("div", {
                    className: "rockstargames-modules-gtao-license-plateac9d03dae4df339b590e83d075364ece",
                    children: [(0, Ke.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, Ke.jsxs)("section", {
                      children: [(0, Ke.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, Ke.jsx)("div", {
                        className: "rockstargames-modules-gtao-license-platece60e8e785ccb4092aab63da0a0cf30c",
                        children: (0, Ke.jsx)("select", {
                          value: b?.id ?? "null",
                          onChange: ne,
                          required: !0,
                          tabIndex: H,
                          "aria-label": t("lp.confirm.selector"),
                          children: k?.map(((e, t) => {
                            let {
                              id: a,
                              manufacturer: r,
                              name: n
                            } = e;
                            return (0, Ke.jsx)("option", {
                              value: a,
                              children: `${r} ${n}`
                            }, t)
                          }))
                        })
                      }), (0, Ke.jsx)("p", {
                        className: "rockstargames-modules-gtao-license-platedbaabca0190273add141f7d25c2ed3ed",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, Ke.jsx)("p", {
                    className: "rockstargames-modules-gtao-license-plateb5fcb2ced6788958d5dbbc1284fbbda3",
                    children: t("lp.confirm.info")
                  })]
                }), P ? oe : se]
              }), (0, Ke.jsx)(Dt, {
                drawerY: n,
                top: a,
                isVisible: R,
                vehicleModel: `${b?.manufacturer} ${b?.name}`,
                tabIndex: R ? H : -1
              })]
            })
          })
        })),
        Yt = {
          CTAWrap: "rockstargames-modules-gtao-license-platecafeb080e640b040ecda82ddea315db4",
          loggedOut: "rockstargames-modules-gtao-license-plateeda8b08aa17ebb271744399f20c1a14c",
          newOrder: "rockstargames-modules-gtao-license-plateea9331159694683cf27df89692246f78",
          loggedOutShader: "rockstargames-modules-gtao-license-plateac963f5692a153f6568bed137619a03d",
          pendingOrderShader: "rockstargames-modules-gtao-license-plateae1ef88377e4db0b3b80288e537b8dc8",
          visible: "rockstargames-modules-gtao-license-plateeee81a20e55e9d8d8a5832b564271a1c",
          createNewPlate: "rockstargames-modules-gtao-license-plated81f39414ae12cce855f3e34af37da9c",
          signIn: "rockstargames-modules-gtao-license-platee32d75ec6aecb2c7362668ef1b48b3d0",
          hover: "rockstargames-modules-gtao-license-platee6564750b865a4940e98058dde3d67b6",
          ctaText: "rockstargames-modules-gtao-license-platedaaf8fc79e1ce78d52e15d8b892ebfa4",
          isWindows: "rockstargames-modules-gtao-license-plated7c83336e3e27e98c8f8a725e275c1eb",
          tryWithoutSigningIn: "rockstargames-modules-gtao-license-plated596ae90e6cb9fa24eb00b42cd749ec7",
          firstPlateLoggedIn: "rockstargames-modules-gtao-license-platef080c931f1ae1c36c0ce57f3dd8baeb9",
          maxPlatesReached: "rockstargames-modules-gtao-license-plateab8e37b20f2464b273824d5efe215a76",
          hidden: "rockstargames-modules-gtao-license-platebe7765facc4eb66343cc0134b0d77235",
          loggedOutCTA: "rockstargames-modules-gtao-license-platea33805ac05cfcc38a4af2065c5405781",
          ctaIcon: "rockstargames-modules-gtao-license-platea9e9fc421475bea28dbe3e806f715c89"
        },
        Bt = "hidden",
        $t = "visible",
        zt = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setShouldRenderScene: a,
            setShouldForce2D: n,
            state: s,
            setCurrentView: i,
            setLastView: l,
            setIsScrollEnabled: c,
            setIsExpanded: u,
            setRefs: m
          } = Ze(), {
            loggedIn: p
          } = (0, o.useRockstarUser)(), {
            accessiblePlates: f,
            currentView: g,
            gridScale: b,
            gridState: h,
            loginUrl: x,
            is3D: w,
            isMobile: E,
            isExpanded: _,
            isScrollEnabled: k,
            lastScrollY: R,
            lastView: O,
            pendingOrder: A,
            plateNumber: L,
            plateNumberStatus: j,
            refs: M,
            three: V,
            realHeight: $,
            shouldForce2D: z
          } = s, [G, X] = (0, r.useState)(0), [q, te] = (0, r.useState)(!1), [ae, ne] = (0, r.useState)(!1), [se, oe] = (0, r.useState)(.4 * window.innerHeight), [pe, fe] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), ge = (0, r.useRef)(se), [be, ye] = (0, r.useState)(null), [he, ve] = (0, r.useState)(!1), [xe, we] = (0, r.useState)(null), Ee = (0, r.useRef)(null), Pe = (0, r.useRef)(null), Se = (0, r.useRef)(null), _e = (0, r.useRef)(null), ke = (0, r.useRef)(null), Te = (0, r.useRef)(!1), Re = (0, r.useRef)(!1), [Ne, Ie] = (0, r.useState)(null), Oe = (0, r.useRef)(Ne), Ae = (0, r.useRef)(null), Ce = (0, r.useRef)(null), Le = (0, r.useRef)(null), je = (0, r.useRef)(null), Me = (0, r.useRef)(null), Ve = (0, r.useRef)(null), De = (0, r.useRef)(null), We = (0, r.useRef)(null), Ye = (0, r.useRef)(null), Be = (0, r.useRef)(null), $e = (0, r.useRef)(null), ze = (0, r.useRef)(null), {
            track: He
          } = (0, o.useGtmTrack)(), Ue = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            f?.[0]?.current && g === ue.NEW_PLATE && we(N(f[0].parentElement))
          }), [f, g]);
          const Fe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            xe && (Fe.current = xe)
          }), [xe]), (0, r.useEffect)((() => {
            const e = g === ue.NEW_PLATE || !(!P() || g !== ue.CONFIRM_ORDER);
            q !== e && te(e), e || ve(!1)
          }), [g, P()]);
          const Ge = (0, r.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!V) return;
            const {
              scene: a,
              camera: r,
              controls: n,
              renderer: s
            } = V, o = a.getObjectByName("Scene");
            if (!o) return;
            const i = T(),
              l = E && g === ue.CONFIRM_ORDER ? 1.5 : 1,
              u = !S() || E ? i * b * l : 1.6 * i * b,
              m = [];
            a.traverse((e => {
              0 === e.userData.index && ($e.current = e, o.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === me.LP && m.push(e)
            }));
            const y = E ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
              h = v().timeline({
                defaults: {
                  duration: y,
                  ease: E ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease
                },
                onStart: () => {
                  Oe.current || (n.current.minDistance = 0)
                }
              });
            switch (e) {
              case $t: {
                const e = M[B.CTA_SHADER]?.current;
                if (!n.current || !e) return;
                const o = new d.Vector3;
                $e?.current && $e.current.getWorldPosition(o);
                const i = M[B.ROOT].current,
                  y = document.getElementById("list-plates-sidebar"),
                  x = M[B.CANVAS_WRAP].current,
                  P = f?.[0].current;
                i && (y || E) && P && x && (g === ue.NEW_PLATE || E && g === ue.CONFIRM_ORDER) && qe(h, t);
                const S = (new d.Vector3).copy(o);
                Oe.current && (S.z = o.z - 5 * b);
                const T = {
                  cameraPosition: {
                    start: (new d.Vector3).copy(r.position),
                    end: new d.Vector3(o.x, o.y, o.z + u)
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
                    start: H.saturation.value,
                    end: 1
                  },
                  firstPlateOpacity: {
                    start: O === ue.LIST_PLATES ? .2 : 1,
                    end: 1
                  },
                  cameraFov: {
                    start: r.fov,
                    end: E && g === ue.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  },
                  ctaShaderOpacity: {
                    start: e.style.opacity,
                    end: 0
                  }
                };
                if (E && P) {
                  const e = N(P.parentElement);
                  T.translateY = {
                    start: g === ue.NEW_PLATE ? ze?.current?.offsetHeight : 0,
                    end: g === ue.NEW_PLATE ? 0 : ze?.current?.offsetHeight
                  }, T.startingDrawerHeight = Ee.current ? Ee.current.get() : 0, T.startingCanvasHeight = Number(N(s.domElement).y), T.canvasWidth = s.domElement.offsetWidth, T.canvasY = {
                    start: Number(N(s.domElement).y),
                    end: .4 * window.innerHeight / -2
                  }, T.canvasYConfirmOrder = {
                    start: Number(N(s.domElement).y),
                    end: pe / 1.5
                  }, T.accessiblePlateGridYConfirmOrder = {
                    start: Number(e.y),
                    end: Number(e.y) + (T.canvasYConfirmOrder.end - T.canvasYConfirmOrder.start)
                  }, T.accessiblePlateGridXConfirmOrder = {
                    start: Number(e.x),
                    end: Number(e.x)
                  }, T.accessiblePlateGridScaleConfirmOrder = {
                    start: Number(N(P.parentElement).scale),
                    end: Number(N(P.parentElement).scale) / l
                  }, T.drawerHeight = {
                    start: Ee.current ? Ee.current.get() : 0,
                    end: g === ue.NEW_PLATE ? 0 : pe / (_ ? 1 : 2)
                  }, T.cameraFov = {
                    start: r.fov,
                    end: g === ue.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  }, T.canvasOpacity = {
                    start: s.domElement.style.opacity,
                    end: 1
                  }
                }
                const R = {
                  current: 0
                };
                if (g === ue.NEW_PLATE) {
                  const o = P.querySelector("canvas");
                  h.to(R, {
                    current: 1,
                    duration: E ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                    ease: E ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                    onUpdate: () => {
                      const a = t ? 1 : R.current,
                        i = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, a);
                      r.position.set(i.x, i.y, i.z);
                      const l = T.controlsTarget.start.clone().lerp(T.controlsTarget.end, a);
                      n.current.target.x = l.x, n.current.target.y = l.y, n.current.target.z = l.z, m.forEach(((e, t) => {
                        e.material && (e.material.opacity = (0, et.t7)(T.plateOpacity[t].start, T.plateOpacity[t].end, a))
                      }));
                      const c = (0, et.t7)(T.firstPlateSaturation.start, T.firstPlateSaturation.end, a);
                      if (H.saturation.value = c, p && !A && o) {
                        const e = !!A,
                          t = (0, et.t7)(T.firstPlateOpacity.start, T.firstPlateOpacity.end, a);
                        o.style.filter = `saturate(${c})${!e&&` opacity(${t})`}`
                      }
                      if (e) {
                        const t = (0, et.t7)(T.ctaShaderOpacity.start, T.ctaShaderOpacity.end, a);
                        e.style.opacity = t
                      }
                      if (T.cameraFov.start !== T.cameraFov.end && r.updateProjectionMatrix(), E) {
                        if (ze.current) {
                          const e = (0, et.t7)(T.translateY.start, T.translateY.end, a);
                          ze.current.style.transform = `translateY(${e}px)`, ze.current.style.opacity = String(a), ze.current.style.pointerEvents = "all"
                        }
                        Ee.current && Ee.current.set((0, et.t7)(T.drawerHeight.start, T.drawerHeight.end, a));
                        const e = (0, et.t7)(T.canvasY.start, T.canvasY.end, a);
                        s.domElement.style.transform = `translateY(${e}px)`
                      }
                    },
                    onStart: () => {
                      E ? document.body.style.touchAction = "none" : c(!1)
                    },
                    onComplete: () => {
                      g === ue.NEW_PLATE && (i && (i.style.touchAction = "none"), _e.current = new d.Vector3(r.position.x, r.position.y, r.position.z), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      })), E && (s.domElement.style.touchAction = "none", k && setTimeout((() => {
                        c(!1), document.body.style.touchAction = "auto"
                      }), 200), Se.current = N(s.domElement).y), o && o.classList.remove(Yt.newOrder), s.render(a, r))
                    }
                  }, 0), E && h.to(M[B.NEW_PLATE_FORM].current, {
                    autoAlpha: 1,
                    duration: t ? 0 : U.sidebar.mobile.drawer.duration,
                    ease: U.sidebar.mobile.drawer.ease,
                    delay: U.sidebar.mobile.drawer.duration / 2,
                    onStart: () => {
                      ze.current && (ze.current.style.pointerEvents = "all", ze.current.style.visibility = "visible")
                    }
                  }, 0), h.to([Ve.current, E ? void 0 : Me.current], {
                    autoAlpha: 1,
                    duration: t ? 0 : U.sidebar.in.duration,
                    ease: U.sidebar.in.ease,
                    delay: U.sidebar.in.delay,
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
                } else g === ue.CONFIRM_ORDER && (!0 === Oe.current && it(), E && (h.to(R, {
                  current: 1,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = R;
                    if (ze.current) {
                      Ee.current && Ee.current.set((0, et.t7)(T.drawerHeight.start, T.drawerHeight.end, e));
                      const t = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, e);
                      r.position.set(t.x, t.y, t.z), s.domElement.style.opacity = (0, et.t7)(T.canvasOpacity.start, T.canvasOpacity.end, e), Ve?.current?.style && (Ve.current.style.opacity = String(1 - e));
                      const a = (0, et.t7)(T.translateY.start, T.translateY.end, e);
                      ze.current.style.transform = `translateY(${a}px)`, ze.current.style.pointerEvents = "none";
                      const n = (0, et.t7)(T.canvasYConfirmOrder.start, T.canvasYConfirmOrder.end, e);
                      s.domElement.style.transform = `translateY(${n}px)`;
                      const o = (0, et.t7)(T.accessiblePlateGridXConfirmOrder.start, T.accessiblePlateGridXConfirmOrder.end, e),
                        i = (0, et.t7)(T.accessiblePlateGridYConfirmOrder.start, T.accessiblePlateGridYConfirmOrder.end, e),
                        l = (0, et.t7)(T.accessiblePlateGridScaleConfirmOrder.start, T.accessiblePlateGridScaleConfirmOrder.end, e);
                      P?.parentElement && (P.parentElement.style.transform = `translate(${o}px,\n                                        ${i}px) scale(${l})`)
                    }
                  }
                }, 0), h.to(M[B.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(Ve.current, {
                    autoAlpha: 0,
                    duration: U.sidebar.out.duration,
                    ease: U.sidebar.out.ease,
                    delay: U.sidebar.out.delay
                  }), E && ze?.current) {
                  const e = {
                    transform: 0,
                    translateY: N(ze.current).y,
                    drawerHeight: Ee.current ? Ee.current.get() : 0,
                    fov: r.fov
                  };
                  v().to(e, {
                    translateY: ze?.current?.offsetHeight,
                    duration: U.sidebar.mobile.drawer.duration,
                    drawerHeight: .4 * window.innerHeight,
                    fov: ke.current,
                    ease: U.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      ze.current && (Ee.current && Ee.current.set(e.drawerHeight), ze.current.style.transform = `translateY(${e.translateY}px)`, ze.current.style.pointerEvents = "none", r.fov = e.fov, r.updateProjectionMatrix())
                    }
                  })
                }
                if (g === ue.CONFIRM_ORDER ? _ || 1 == !Oe.current && v().to(r.position, {
                    x: Number(_e.current.x),
                    y: Number(_e.current.y),
                    z: 0,
                    ease: U.transaction.confirmOrder.ease,
                    duration: U.transaction.confirmOrder.duration
                  }) : v().to(Me.current, {
                    autoAlpha: 0,
                    duration: U.sidebar.out.duration,
                    ease: U.sidebar.out.ease,
                    delay: U.sidebar.out.delay
                  }), g === ue.LIST_PLATES) {
                  const e = M[B.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                n?.current && (n.current.minDistance = 0), Oe.current = !1, Ie(!1)
            }
          }), [g, V, M, E, A, b, h, R, O, $, be, pe, Ee.current, Oe.current, w]);
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
            Pe.current = R
          }), [R]);
          const qe = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!V?.controls || !f?.[0]) return;
              const {
                controls: a
              } = V, r = e || v().timeline({
                defaults: {
                  duration: 0,
                  ease: E ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = T(), s = E && g === ue.CONFIRM_ORDER ? 1.5 : 1, o = !S() || E ? n * b * s : 1.6 * n * b, l = M[B.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = M[B.CANVAS_WRAP].current, u = f[0].current;
              if (l && (E || c) && u && d) {
                const e = I(0, l, Number($.replace("px", "")), h, E ? void 0 : {
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
                  p = 5 / o,
                  g = E || i() !== ue.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
                  b = {
                    x: m.x - e.x + g,
                    y: m.y - e.y - 80 + (O === ue.CONFIRM_ORDER || t ? R : window.scrollY)
                  },
                  y = {
                    current: 0
                  },
                  v = f.map((e => Number(getComputedStyle(e?.current).getPropertyValue("opacity")))),
                  x = O === ue.CONFIRM_ORDER ? U.transaction.confirmOrder.ease : U.clickPlate.ease,
                  w = O === ue.CONFIRM_ORDER ? U.transaction.confirmOrder.duration : U.clickPlate.duration,
                  P = .4 * window.innerHeight,
                  S = E ? U.sidebar.mobile.drawer.duration : w,
                  _ = t ? 0 : S;
                r.to(y, {
                  current: 1,
                  ease: E ? U.sidebar.mobile.drawer.ease : x,
                  duration: _,
                  onComplete: () => {
                    we(N(u.parentElement)), ve(!0)
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = y, r = (0, et.t7)(Number(s.x), b.x, a), n = (0, et.t7)(Number(s.y), b.y + (E ? P / -2 : 0), a), o = (0, et.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${o})`, t || f.forEach(((e, t) => {
                      if (0 !== t && e?.current) {
                        const r = (0, et.t7)(v[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r
                      }
                    }))
                  }
                }, "<")
              }
            }), [h, $, E, g, se, V, f, M, O, Le?.current, R]),
            Je = (0, r.useCallback)((() => {
              if (!V?.controls) return;
              const {
                controls: e,
                scene: t
              } = V, a = v().timeline({
                duration: E ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                ease: E ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                onStart: () => {
                  e?.current && !Oe.current && (e.current.minDistance = 0)
                }
              });
              let r;
              rt(a, b, !0), t.traverse((e => {
                0 === e.userData.index && (r = e)
              })), r && v().to(r.material, {
                duration: 0,
                ease: E ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                opacity: w ? 1 : 0
              });
              const {
                renderer: n
              } = Xe.current;
              q ? (g === ue.NEW_PLATE && (P() ? n.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : n.domElement.style.transform = "translateY(0px)", Me?.current && (Me.current.style.opacity = "1", Me.current.style.visibility = "visible", Me.current.style.pointerEvents = "all")), g === ue.CONFIRM_ORDER && P() && (n.domElement.style.transform = `translateY(${pe/1.5}px)`)) : g !== ue.CONFIRM_ORDER || P() || (n.domElement.style.transform = "translateY(0px)"), i() !== ue.NEW_PLATE && i() !== ue.CONFIRM_ORDER || qe(null, !0), P() && tt(), Oe.current && ot({
                isResize: !0,
                onComplete: null,
                delay: 0
              })
            }), [P(), q, w, g, V, Me.current, b, R]),
            Qe = (0, r.useCallback)((function() {
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
              } = V, o = r.getObjectByName("Scene"), i = r.getObjectByName("Light1"), l = r.getObjectByName("Light2"), c = r.getObjectByName("Light3"), d = s.domElement, u = v().timeline({
                defaults: {
                  ease: U.toggleView.camera.ease,
                  duration: t ? 0 : U.toggleView.camera.duration
                },
                onStart: () => {
                  n?.current && (n.current.minDistance = 2, n.current.enableZoom = !1, n.current.enabled = !1)
                },
                onComplete: () => {
                  n?.current && (n.current.minDistance = 0, n.current.maxPolarAngle = F.plateView.maxPolarAngle, n.current.minPolarAngle = F.plateView.minPolarAngle, n.current.maxAzimuthAngle = F.plateView.maxAzimuthAngle, n.current.minAzimuthAngle = F.plateView.minAzimuthAngle, n.current.enableZoom = !1), ge.current = 0, e.onComplete && e.onComplete()
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
              }, "<").to(i, {
                intensity: 0
              }, "<").to([l, c], {
                intensity: le
              }, "<").to(l.position, {
                x: Z,
                y: K,
                z: J
              }, "<").to(c.position, {
                x: ee
              }, "<").set($e.current, {
                receiveShadow: !1
              }, .4).set($e.current.material, {
                depthTest: !1
              }, "<"), $e?.current?.material && u.to($e.current.material, {
                envMapIntensity: ce
              }, "<"), o.traverse((e => {
                e.material && v().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : U.toggleView.fadeOut.duration,
                  ease: U.toggleView.fadeOut.ease
                })
              }))
            }), [$e.current, _e.current, V]);
          (0, r.useEffect)((() => {
            V?.scene && !ke.current && (ke.current = V.camera.fov)
          }), [ke.current, V]), (0, r.useEffect)((() => {
            V?.scene && ze.current && Ge(q ? $t : Bt)
          }), [V, q, g === ue.CONFIRM_ORDER, O]), (0, r.useEffect)((() => {
            V?.scene && ze.current && Ge(q ? $t : Bt, !0)
          }), [E]);
          const tt = (0, r.useCallback)((() => {
            if (ze?.current && E && Ye.current) {
              const e = Ye.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              X(a - 48 - ze.current.offsetHeight - t), oe(a), fe(-1 * (.6 * e - 80)), ze.current.style.transform = `translateY${ze.current.offsetHeight}px`
            }
          }), [ze.current, E, Ye.current]);
          (0, r.useEffect)((() => {
            tt()
          }), [ze.current, E, Ye.current]), (0, r.useEffect)((() => {
            Ce.current || (Ce.current = g), Le.current || (Le.current = Ce.current), g && (Le.current = Ce.current, l(Ce.current), Ce.current = g), g === ue.LIST_PLATES && Oe.current && Qe({}, !0), g === ue.NEW_PLATE && (je.current = !1)
          }), [g]), (0, r.useEffect)((() => {
            const e = E ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
              t = he ? 0 : e;
            if (!V?.scene) return;
            if (!V?.scene || !f?.[0]?.current) return;
            const {
              scene: r,
              renderer: n,
              camera: s
            } = V, o = [], l = [], c = f[0].current;
            if (r.traverse((e => {
                e.name === me.LP && e.material ? l[e.userData.index] = e.material : o.push(e.material)
              })), i() === ue.NEW_PLATE)
              if (w) {
                const e = l[0];
                if (v().to(e, {
                    opacity: 1,
                    delay: t,
                    duration: E ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                    ease: E ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                    onStart: () => {
                      a(!0), v().to(c.style, {
                        opacity: 0,
                        duration: U.accessibilePlate.duration,
                        ease: U.accessibilePlate.ease,
                        onComplete: () => {
                          Re.current = !1
                        }
                      })
                    }
                  }), !je.current) {
                  const e = r.getObjectByName("Light4"),
                    a = new d.Vector3;
                  $e?.current && ($e.current.getWorldPosition(a), v().to(e.position, {
                    x: ie.x,
                    y: a.y + ie.y,
                    z: ie.z,
                    delay: t,
                    duration: U.plateShimmer.duration,
                    ease: U.plateShimmer.ease
                  }));
                  const n = {
                    current: 0
                  };
                  v().to(n, {
                    current: 1,
                    delay: t,
                    duration: U.plateShimmer.duration,
                    ease: U.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: t
                      } = n, a = (0, et.t7)(0, Math.PI, t);
                      e.intensity = .3 * Math.sin(a), e.color = new d.Color(a, .9 * a, a)
                    }
                  }), je.current = !0
                }
              } else {
                const e = l[0];
                v().to(c.style, {
                  opacity: 1,
                  duration: U.accessibilePlate.duration,
                  ease: U.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: U.accessibilePlate.duration,
                      ease: U.accessibilePlate.ease,
                      onComplete: () => {
                        a(!1), Re.current = !1, n.render(r, s)
                      }
                    })
                  }
                })
              }
          }), [w, E, V, f]), (0, r.useEffect)((() => {
            if (i() === ue.NEW_PLATE && he && V?.camera) {
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
          const at = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            b && (at.current = b), i() === ue.NEW_PLATE || i() === ue.CONFIRM_ORDER ? Je() : P() && (tt(), ye(window.innerHeight), ze.current && (ze.current.style.transform = `translateY(${ze.current.offsetHeight}px`))
          }), [b]);
          const rt = (0, r.useCallback)((function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (Ce.current !== ue.NEW_PLATE && Ce.current !== ue.CONFIRM_ORDER) return;
              const {
                renderer: r
              } = V;
              C({
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
            }), [V, g]),
            nt = (0, r.useCallback)((e => {
              if (!V?.scene) return;
              const {
                drawerStateRef: t
              } = e, a = f?.[0]?.current;
              if (a) {
                const {
                  renderer: e,
                  camera: r
                } = V, n = e.domElement, s = N(a.parentElement), o = {
                  buttonWrapOpacity: De.current.style.opacity,
                  canvasWrapOpacity: n.style.opacity,
                  fov: r.fov,
                  canvasTranslateY: Number(N(n).y),
                  accessiblePlateX: Number(s.x),
                  accessiblePlateY: Number(s.y),
                  accessiblePlateScale: Number(s.scale)
                }, i = {}, l = Ve.current.querySelectorAll("button");
                t.current === D ? (i.buttonWrapOpacity = 0, i.canvasWrapOpacity = 0, i.fov = ke.current, i.canvasTranslateY = Se.current, i.accessiblePlateX = Fe.current.x, i.accessiblePlateY = Fe.current.y, i.accessiblePlateScale = Fe.current.scale, n.style.pointerEvents = "all", l.forEach((e => {
                  e.style.pointerEvents = "none"
                }))) : (t.current === W || t.current === Y) && (i.buttonWrapOpacity = 1, i.canvasWrapOpacity = 1, i.fov = ke.current, i.canvasTranslateY = Se.current, i.accessiblePlateX = Fe.current.x, i.accessiblePlateY = Fe.current.y, i.accessiblePlateScale = Fe.current.scale, n.style.pointerEvents = "all", l.forEach((e => {
                  e.style.pointerEvents = "all"
                }))), v().to(o, {
                  buttonWrapOpacity: i.buttonWrapOpacity,
                  canvasWrapOpacity: i.canvasWrapOpacity,
                  fov: i.fov,
                  accessiblePlateX: i.accessiblePlateX,
                  accessiblePlateY: i.accessiblePlateY,
                  accessiblePlateScale: i.accessiblePlateScale,
                  canvasTranslateY: i.canvasTranslateY,
                  duration: U.sidebar.mobile.drawerSnap.duration,
                  ease: U.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    n.style.opacity = o.canvasWrapOpacity, De.current.style.opacity = o.buttonWrapOpacity, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), r.fov = o.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [V, se, f, Se.current]),
            st = (0, r.useCallback)((e => {
              if (!V?.scene || !ze.current) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: o,
                renderer: i
              } = V, l = i.domElement, c = f?.[0]?.current;
              if (c)
                if (t.dragging) {
                  const e = (0, et.ii)(0, n, r.get()),
                    i = (0, et.t7)(0, 1, 1 - e);
                  l.style.opacity = i;
                  const d = (0, et.t7)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, De.current.style.opacity = i, Ve.current.querySelectorAll("button").forEach((e => {
                      e.style.pointerEvents = r.get() >= 0 ? "all" : "none"
                    })), De.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < s) {
                    const e = (0, et.ii)(0, s, r.get()),
                      a = Oe.current ? 60 : 40,
                      n = (0, et.t7)(ke.current, a, e);
                    o.fov = n, o.updateProjectionMatrix();
                    const i = Number(N(l).y) + t.delta[1] / 2;
                    if (l.style.transform = `translateY(${i}px)`, c) {
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
                      buttonWrapOpacity: De.current.style.opacity,
                      canvasWrapOpacity: l.style.opacity,
                      fov: o.fov,
                      canvasTranslateY: e,
                      accessibilityPlateY: Number(N(c.parentElement).y),
                      accessibilityPlateOpacity: c.parentElement.style.opacity
                    };
                  a.current < n / 2 ? (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(t, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    accessibilityPlateOpacity: 0,
                    fov: Oe.current ? 60 : 40,
                    duration: U.sidebar.mobile.drawerSnap.duration,
                    ease: U.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = t.canvasWrapOpacity, c.parentElement.style.opacity = t.accessibilityPlateOpacity, De.current.style.opacity = t.buttonWrapOpacity
                    }
                  })) : a.current > s / 2 ? (l.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), v().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateY: Number(Fe.current.y) + s / 2,
                    canvasTranslateY: Number(Se.current) + s / 2,
                    fov: Oe.current ? 60 : 40,
                    duration: U.sidebar.mobile.drawerSnap.duration,
                    ease: U.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = t.canvasWrapOpacity, De.current.style.opacity = t.buttonWrapOpacity, o.fov = t.fov, o.updateProjectionMatrix(), l.style.transform = `translateY(${t.canvasTranslateY}px)`, c.parentElement.style.transform = `translate(${Fe.current.x}px,\n                                ${t.accessibilityPlateY}px) scale(${Fe.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (l.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), v().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Fe.current.y),
                    fov: ke.current,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    duration: U.sidebar.mobile.drawerSnap.duration,
                    ease: U.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      if (l.style.opacity = t.canvasWrapOpacity, De.current.style.opacity = t.buttonWrapOpacity, c.parentElement.style.opacity = t.accessibilityPlateOpacity, o.fov = t.fov, o.updateProjectionMatrix(), a.current > 0) {
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
            }), [V, ze.current, se, f, Se.current, xe]),
            ot = (0, r.useCallback)((function() {
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
              } = V, o = r.getObjectByName("Scene"), i = r.getObjectByName("Light1"), l = r.getObjectByName("Light2"), c = r.getObjectByName("Light3");
              let u = null;
              const m = [];
              o.traverse((e => {
                e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), m.push(e.material))
              })), r.traverse((e => {
                e.name === me.LP && 0 === e.userData.index && (u = e)
              }));
              const p = new d.Vector3;
              $e.current.getWorldPosition(p);
              const f = {
                camPositionY: n.position.y,
                camPositionZ: n.position.z,
                controlsTargetZ: s.current.target.z,
                plateRotationX: $e.current.rotation.x,
                light1Intensity: i.intensity,
                light2Intensity: l.intensity,
                light2PositionX: l.position.x,
                light2PositionY: l.position.y,
                light2PositionZ: l.position.z,
                light3Intensity: c.intensity,
                light3PositionX: c.position.x,
                envMapIntensity: $e?.current?.material?.envMapIntensity
              };
              v().to(f, {
                camPositionY: n.position.y + 2.5 * b,
                camPositionZ: n.position.z + (E ? 24 * b : 12 * b),
                controlsTargetZ: s.current.target.z - 5 * b,
                plateRotationX: -.16,
                light1Intensity: le,
                light2Intensity: .2,
                light2PositionX: Q.x,
                light2PositionY: Q.y,
                light2PositionZ: Q.z,
                light3Intensity: le,
                light3PositionX: re.x,
                delay: a,
                envMapIntensity: de,
                duration: t ? 0 : U.toggleView.camera.duration,
                ease: U.toggleView.camera.ease,
                onStart: () => {
                  const e = E ? 52 * b : 26 * b;
                  s.current.enableZoom = !0, s.current.maxPolarAngle = F.carView.maxPolarAngle, s.current.minPolarAngle = F.carView.minPolarAngle, s.current.maxAzimuthAngle = F.carView.maxAzimuthAngle, s.current.minAzimuthAngle = F.carView.minAzimuthAngle, s.current.maxDistance = e, o.visible = !0, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none"
                },
                onUpdate: () => {
                  n.position.set(n.position.x, f.camPositionY, f.camPositionZ), s.current.target.z = f.controlsTargetZ, $e.current.rotation.x = f.plateRotationX, $e.current?.material && ($e.current.material.envMapIntensity = f.envMapIntensity), i.intensity = f.light1Intensity, l.intensity = f.light2Intensity, l.position.set(f.light2PositionX, f.light2PositionY, f.light2PositionZ), c.intensity = f.light3Intensity, c.position.x = f.light3PositionX
                },
                onComplete: () => {
                  Te.current = !1, s.current.minDistance = E ? 20 * b : 10 * b, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                }
              });
              const g = {
                opacity: 0
              };
              v().to(g, {
                opacity: 1,
                duration: t ? 0 : U.toggleView.fadeOut.duration,
                ease: U.toggleView.fadeOut.ease,
                delay: a,
                onUpdate: () => {
                  m.forEach((e => {
                    e.opacity = g.opacity
                  }))
                }
              }), u && v().to(u, {
                duration: 0,
                delay: t ? 0 : .4 + a,
                onComplete: () => {
                  u.material && (u.receiveShadow = !0, u.material.depthTest = !1, u.renderOrder = 99998)
                }
              })
            }), [V, Oe.current, $e, $e?.current, b, E, z, w]),
            it = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                delay: 0,
                onComplete: null
              };
              if (!V?.scene || !V?.controls?.current || !$e || !$e?.current || Te.current) return;
              const {
                scene: t,
                camera: a,
                controls: r
              } = V, s = e.delay || 0, o = t.getObjectByName("Scene"), i = t.getObjectByName("Light1"), l = t.getObjectByName("Light2"), c = t.getObjectByName("Light3"), u = T(), m = !S() || E ? u * b : 1.6 * u * b;
              if (o && r && !Te.current && !Re.current) {
                const t = [];
                if (o.traverse((e => {
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
                      light1Intensity: i.intensity,
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
                      light2Intensity: le,
                      light2PositionX: Z,
                      light2PositionY: K,
                      light2PositionZ: J,
                      light3Intensity: le,
                      light3PositionX: ee,
                      envMapIntensity: ce,
                      duration: U.toggleView.camera.duration,
                      ease: U.toggleView.camera.ease,
                      onStart: () => {
                        r.current.minDistance = 2, r.current.enableZoom = !1, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = v().timeline({
                          duration: E ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                          ease: E ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease
                        });
                        rt(e, b)
                      },
                      onUpdate: () => {
                        $e.current.rotation.x = s.plateRotationX, $e.current?.material && ($e.current.material.envMapIntensity = s.envMapIntensity), i.intensity = s.light1Intensity, l.intensity = s.light2Intensity, l.position.set(s.light2PositionX, s.light2PositionY, s.light2PositionZ), c.intensity = s.light3Intensity, c.position.x = s.light3PositionX
                      },
                      onComplete: () => {
                        Te.current = !1, o.visible = !1, r.current.maxPolarAngle = F.plateView.maxPolarAngle, r.current.minPolarAngle = F.plateView.minPolarAngle, r.current.maxAzimuthAngle = F.plateView.maxAzimuthAngle, r.current.minAzimuthAngle = F.plateView.minAzimuthAngle, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all", e.onComplete && e.onComplete()
                      }
                    });
                    const d = {
                      opacity: 1
                    };
                    v().to(d, {
                      opacity: 0,
                      duration: U.toggleView.fadeOut.duration,
                      ease: U.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        t.forEach((e => {
                          e.opacity = d.opacity
                        }))
                      }
                    })
                  }
                } else Te.current || (z && n(!1), ot({
                  isResize: !1,
                  onComplete: null,
                  delay: s
                }));
                Oe.current = !Oe.current
              }
            }), [V, Oe.current, $e, $e?.current, b, z, w]),
            lt = (0, r.useCallback)((e => {
              if (!V?.scene || !ze?.current || !De.current) return;
              const t = M[B.UI]?.current;
              if (t) {
                const {
                  camera: a,
                  renderer: r
                } = V, n = r.domElement, {
                  y: s,
                  sidebarRef: o
                } = e, i = t.offsetHeight, l = {
                  submitOrderTranslateY: 0,
                  mobileSidebarHeight: s.get(),
                  opacity: o.current.style.opacity,
                  fov: a.fov,
                  height: n.offsetHeight
                };
                v().to(l, {
                  opacity: 1,
                  height: i,
                  mobileSidebarHeight: .4 * window.innerHeight,
                  fov: ke.current,
                  submitOrderTranslateY: ze.current.offsetHeight,
                  duration: U.sidebar.mobile.drawer.duration,
                  ease: U.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${l.mobileSidebarHeight}px)`, o.current.style.opacity = l.opacity, ze.current.style.transform = `translateY(${l.submitOrderTranslateY}px)`, De.current.style.opacity = l.opacity, n.style.height = l.height, s.set(l.mobileSidebarHeight), a && (a.fov = l.fov, a.updateProjectionMatrix())
                  },
                  onComplete: () => {
                    n.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [M, Me?.current, ze?.current, V, se]),
            ct = e => {
              if (!V?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e, {
                sidebar: n
              } = U, {
                duration: s,
                ease: o
              } = n.mobile.drawer;
              ye(r), Ee.current = r, t.current.style.pointerEvents = "all";
              const i = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity
              };
              v().to(i, {
                opacity: 1,
                duration: s,
                ease: o,
                onUpdate: () => {
                  t.current.style.opacity = i.opacity, t.current.style.transform = `translateY(${i.mobileSidebarHeight}px)`, a.current = i.mobileSidebarHeight, r.set(a.current), De.current.style.transform = `translateY(${i.mobileSidebarHeight}px)`
                }
              })
            },
            dt = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = j, r = ae ? (0, Ke.jsx)(y.LoadingAnimation, {}) : t("lp.create.next");
              return (0, Ke.jsx)(Ct, {
                buttons: [{
                  buttonText: p ? r : t("lp.create.signin"),
                  isDisabled: !!p && (ae || !L || !e && L === a),
                  onClick: async () => {
                    Ae?.current?.(), p || (He({
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
                isLoading: ae,
                isVisible: [ue.NEW_PLATE, ue.CONFIRM_ORDER].includes(g),
                tabIndex: g === ue.NEW_PLATE ? 0 : -1
              })
            }), [L, g, p, q, j, Ae.current, ae]),
            ut = (0, r.useCallback)((() => {
              u(!_)
            }), [_]),
            mt = (0, r.useMemo)((() => E ? (0, Ke.jsxs)(xt, {
              bottom: G,
              isVisible: q,
              onDrag: st,
              onHide: lt,
              onShow: ct,
              onTap: nt,
              top: pe,
              drawerY: be,
              mobileSidebarHeight: se,
              children: [(0, Ke.jsx)(At, {
                validateFnRef: Ae,
                setIsLoading: ne
              }), (0, Ke.jsx)(Wt, {
                top: pe,
                drawerY: be
              })]
            }) : (0, Ke.jsxs)("div", {
              ref: Me,
              className: "rockstargames-modules-gtao-license-plateb1a08a76cb74203a9c8e97f759697f47",
              children: [(0, Ke.jsx)("hr", {
                className: "rockstargames-modules-gtao-license-platefb62db34cd26ac9882218fa9e8c572d0",
                onClick: () => {
                  ut()
                },
                "aria-hidden": "true"
              }), (0, Ke.jsx)(At, {
                validateFnRef: Ae,
                setIsLoading: ne
              }), dt]
            })), [L, G, _, E, q, Ee.current, Me.current, pe, be, ae, se]);
          return (0, Ke.jsxs)("div", {
            ref: Ye,
            className: "rockstargames-modules-gtao-license-platee14286ef5f5dc6a8ca6bf6ce3ffb02be",
            children: [mt, (0, Ke.jsxs)("div", {
              ref: Ve,
              className: "rockstargames-modules-gtao-license-plateb2352c29df7ddb34a50813fe7bc95c6e",
              children: [(0, Ke.jsx)(wt, {
                onClick: () => {
                  Te.current || Qe({
                    onComplete: () => {
                      ve(!1), i(ue.LIST_PLATES)
                    }
                  })
                }
              }), (0, Ke.jsxs)(ht.animated.div, {
                ref: De,
                className: "rockstargames-modules-gtao-license-plateb7250523e6ae363c8f2aee0651a92b46",
                style: be ? {
                  y: be
                } : void 0,
                children: [(0, Ke.jsx)(Mt, {
                  is3DToggle: !0,
                  onToggleView: () => {
                    Re.current || Te.current || (Oe.current && !z ? it({
                      onComplete: () => {
                        n(!z), Ie(!1)
                      }
                    }) : n(!z), Re.current = !0)
                  }
                }), (0, Ke.jsx)(Mt, {
                  is3DToggle: !1,
                  onToggleView: e => {
                    if (!Te.current && !Re.current) {
                      const t = E ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                        a = w ? 0 : t;
                      "function" == typeof e?.onStart && e.onStart(), it({
                        delay: a
                      }), Te.current = !0
                    }
                  }
                })]
              })]
            }), (0, Ke.jsxs)("div", {
              ref: Be,
              className: "rockstargames-modules-gtao-license-platee615f2b03c1f76d06a2862cb3aab1afd",
              children: [E && dt, E && (0, Ke.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platea37b793effdd9688699a77ea3bd02976",
                ref: We
              })]
            })]
          })
        })),
        Ht = "rockstargames-modules-gtao-license-plateba2215c87866e0b4c5739e49512b96ef",
        Ut = "rockstargames-modules-gtao-license-plateb05e3890eab129885f9a617d22a4bdda",
        Ft = "rockstargames-modules-gtao-license-platefd6b39e70965987eb91338b9ab71ef06",
        Gt = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, o.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = Ze(), {
            plates: i,
            isMobile: l
          } = s, c = (0, r.useRef)(null), d = (0, r.useRef)(null), u = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            n(B.SIDEBAR, c)
          }), [c.current, l]), (0, r.useEffect)((() => {
            n(B.PLATE_COUNT, u)
          }), [u.current, l]), (0, r.useEffect)((() => {
            n(B.SIDEBAR_BUTTONS_LOADING_ANIMATION, d)
          }), [d.current]), (0, Ke.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: c,
            className: "rockstargames-modules-gtao-license-platef5e31de74db53bedd63dace5d7038d67",
            children: [(0, Ke.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platedf5d7bc0760f699d1c8e26596267b7c0",
              children: (0, Ke.jsx)(Et, {})
            }), (0, Ke.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec3b30bed11d2e7b8ce600fbbd7629875",
              children: [(0, Ke.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platec4382993beb9898b4d04eff6d21944bb",
                children: [(0, Ke.jsx)("h1", {
                  className: "rockstargames-modules-gtao-license-platee753118af7cef32ddccb849c5845a1d9",
                  children: t("lp.landing.title")
                }), (0, Ke.jsx)("p", {
                  className: "rockstargames-modules-gtao-license-plateb7f49651a3bab5cb72869a16d60c64ee",
                  children: t("lp.landing.description")
                }), (0, Ke.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-plateb120b933ab5873984ca4626fc8b326c4",
                  children: (0, Ke.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, Ke.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), a && (0, Ke.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platee0dd0de0d13ab389fbd3ac25184c0557",
                children: [(0, Ke.jsx)("h5", {
                  children: t("lp.landing.plates")
                }), (0, Ke.jsxs)("span", {
                  className: "rockstargames-modules-gtao-license-platea85e818dc3383486634bd7d437612039",
                  children: [(0, Ke.jsxs)("span", {
                    className: "rockstargames-modules-gtao-license-platec3fb0b6e4481dc788c19f32e1d57155a",
                    children: [(0, Ke.jsx)("span", {
                      ref: d,
                      className: "rockstargames-modules-gtao-license-platee671a67ec4f57b3d0b0d69daf8181d6b",
                      children: (0, Ke.jsx)(y.LoadingAnimation, {
                        type: "THREE_DOTS"
                      })
                    }), (0, Ke.jsx)("span", {
                      ref: u,
                      className: "rockstargames-modules-gtao-license-plateb57f68949c7a8c6412a10113788f02d1",
                      children: i?.filter((e => {
                        let {
                          faux: t = !1
                        } = e;
                        return !t
                      }))?.length ?? 0
                    })]
                  }), (0, Ke.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-plated92b79d7b5b7acd43b97aea1fa09f53d"
                  }), (0, Ke.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-platedd3a0c1fa96710ebf11322ea3d496dc7",
                    children: "owned plates out of a maximum of"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Xt = "rockstargames-modules-gtao-license-plateef5ba014e1e3a01aa5c8e25fa6540276",
        {
          lerp: qt
        } = d.MathUtils,
        Zt = "visible";
      let Kt, Jt = !1;
      const Qt = () => {
          const {
            state: e,
            setShouldRenderScene: t,
            setIsScrollEnabled: a,
            setAccessiblePlates: n,
            setDeletedPlateIndex: s,
            setPlates: i
          } = Ze(), {
            accessiblePlates: l,
            pendingOrder: c,
            currentPlateIndex: u,
            currentView: m,
            is3D: p,
            three: f,
            isMobile: g,
            isLoading: b,
            refs: y,
            gridScale: h,
            deletedPlateIndex: x,
            plates: w
          } = e, {
            loggedIn: E
          } = (0, o.useRockstarUser)(), {
            selectedCharacterTuple: P
          } = (0, o.useRockstarUserState)(), S = (0, r.useRef)(null), [_, k] = (0, r.useState)(m === ue.LIST_PLATES), T = y?.[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            Kt && (Kt.pause(), Kt = null), Jt = !1
          }), [P]), (0, r.useEffect)((() => {
            k(m === ue.LIST_PLATES)
          }), [m]);
          const R = (0, r.useCallback)((e => {
            if (!f) return;
            const {
              camera: r,
              controls: o,
              originalCameraPosition: m,
              originalControlsTarget: p,
              renderer: h,
              scene: P
            } = f, {
              clickPlate: _,
              sidebar: k,
              deletePlate: R
            } = U, I = y[B.FOOTER].current, O = y[B.SIDEBAR].current, A = y[B.LOADING_SCREEN].current, C = y[B.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, L = y[B.PLATE_COUNT].current, j = l?.[u]?.current || null, M = l?.[0]?.current || null, V = y[B.CTA_SHADER]?.current || null, D = [];
            switch (P.traverse((e => {
                e.name === me.LP && D.push(e)
              })), Kt = v().timeline({
                duration: g ? k.mobile.drawer.duration : _.duration,
                ease: g ? k.mobile.drawer.ease : _.ease
              }), e) {
              case Zt: {
                if (!o.current || l.filter((e => null === e.current)).length > 0 || !M || !V) return;
                const e = {
                    current: 0
                  },
                  u = {
                    cameraPosition: {
                      start: (new d.Vector3).copy(r.position),
                      end: m
                    },
                    controlsTarget: {
                      start: (new d.Vector3).copy(o.current.target),
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
                      start: H.saturation.value,
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
                if (Kt.to(e, {
                    current: 1,
                    duration: g ? k.mobile.drawer.duration : _.duration,
                    ease: g ? k.mobile.drawer.ease : _.ease,
                    onComplete: () => {
                      g && (h.domElement.style.touchAction = "auto"), t(!1);
                      const e = P.getObjectByName("Light4");
                      v().to(e.position, {
                        x: ne - 20,
                        y: se,
                        z: oe
                      })
                    },
                    onStart: () => {
                      e.current = 0, O && (O.style.pointerEvents = "all"), h.render(P, r), a(!0)
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e, a = u.cameraPosition.start.clone().lerp(u.cameraPosition.end, t);
                      r.position.set(a.x, a.y, a.z);
                      const n = u.controlsTarget.start.clone().lerp(u.controlsTarget.end, t);
                      if (o.current.target.x = n.x, o.current.target.y = n.y, o.current.target.z = n.z, j && j.parentElement?.classList?.contains(Ht)) {
                        const e = qt(u.currentAccessibilityPlateTransform.start.x, u.currentAccessibilityPlateTransform.end.x, t),
                          a = qt(u.currentAccessibilityPlateTransform.start.y, u.currentAccessibilityPlateTransform.end.y, t),
                          r = qt(u.currentAccessibilityPlateTransform.start.scale, u.currentAccessibilityPlateTransform.end.scale, t);
                        j.parentElement.style.transform = `translate(${e}px,\n                            ${a}px) scale(${r})`
                      }
                      const s = qt(u.firstPlateSaturation.start, u.firstPlateSaturation.end, t);
                      if (H.saturation.value = s, E && !c && f) {
                        const e = qt(u.firstPlateOpacity.start, u.firstPlateOpacity.end, t),
                          a = !!c;
                        f.style.filter = `saturate(${s})${!a&&` opacity(${e})`}`
                      }
                      if (V) {
                        const e = qt(u.ctaShaderOpacity.start, u.ctaShaderOpacity.end, t);
                        V.style.opacity = e
                      }
                      if (g) {
                        const e = qt(u.canvasTranslateY.start, u.canvasTranslateY.end, t);
                        if (h.domElement.style.transform = `translateY(${e}px)`, S.current) {
                          const e = qt(u.drawerHeight.start, u.drawerHeight.end, t);
                          S.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), (l.length === w.length && l?.[0]?.current || E && !b && l[0].current && l?.filter((e => e?.current)).length === w.length && 0 !== w.length && 0 !== l.length) && !Jt) {
                  const e = {
                    current: 0
                  };
                  Jt = !0, Kt.to(e, {
                    current: 1,
                    duration: g ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                    ease: g ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                    onStart: () => {
                      Jt = !0
                    },
                    onComplete: () => {
                      Jt = !1
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e;
                      l.forEach(((e, a) => {
                        if (e.current && u.accessiblePlateOpacity[a]) {
                          const r = qt(u.accessiblePlateOpacity[a].start, u.accessiblePlateOpacity[a].end, 2.5 * (t - .6));
                          e.current.style.opacity = r
                        }
                        if (D[a] && D[a].material) {
                          const e = qt(u.plateOpacity[a].start, u.plateOpacity[a].end, t);
                          D[a].material.opacity = e
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
                    Kt.to(a, {
                      current: 1,
                      duration: g ? U.sidebar.mobile.drawer.duration : U.clickPlate.duration,
                      ease: g ? U.sidebar.mobile.drawer.ease : U.clickPlate.ease,
                      onUpdate: () => {
                        const t = qt(e.start, e.end, a.current);
                        l[0].current.parentElement.style.opacity = t
                      }
                    }, "<")
                  }
                }
                if ("number" == typeof x) {
                  const e = D.find((e => e.userData.index === x)),
                    t = l[x].current;
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
                    Kt.to(a, {
                      current: 1,
                      duration: R.duration,
                      ease: R.ease,
                      onUpdate: () => {
                        const {
                          current: n
                        } = a, s = qt(r.plateOpacity.start, r.plateOpacity.end, n), o = qt(r.accessiblePlateOpacity.start, r.accessiblePlateOpacity.end, n);
                        e?.material && (e.material.opacity = s), t.style.opacity = o
                      }
                    }, ">");
                    const o = D.filter((e => e.userData.index >= x)).map((e => e.position)),
                      c = l.filter(((e, t) => t >= x)).map((e => {
                        const {
                          top: t,
                          left: a
                        } = getComputedStyle(e.current), r = e.current.offsetHeight, n = e.current.offsetWidth, s = Number(t.replace("px", ""));
                        return {
                          x: Number(a.replace("px", "")) + n / 2,
                          y: s + r / 2
                        }
                      })),
                      d = o.map((e => e.clone())),
                      u = c.map(((e, t) => ({
                        x: c[Math.max(t - 1, 0)].x - c[t].x,
                        y: c[Math.max(t - 1, 0)].y - c[t].y
                      })));
                    Kt.to(o.slice(1), {
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
                    const m = l.filter(((e, t) => t >= x)),
                      p = c.map((() => ({
                        x: 0,
                        y: 0
                      })));
                    p.forEach(((e, t) => {
                      Kt.to(e, {
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
                            const e = l.filter(((e, t) => t !== x));
                            n(e), s(null);
                            const t = w.filter((e => e.index !== x));
                            t.forEach(((e, t) => {
                              e.index = t
                            })), i(t)
                          }
                        }
                      }, 0)
                    }))
                  }
                }
                Kt.to(I, {
                  autoAlpha: 1,
                  duration: g ? k.mobile.footer.in.duration : k.in.duration,
                  ease: g ? k.mobile.footer.in.ease : k.in.ease,
                  delay: g ? k.mobile.footer.in.delay : k.in.delay
                }, 0), Kt.to(O, {
                  autoAlpha: 1,
                  duration: g ? k.mobile.fadeHeader.in.duration : k.in.duration,
                  ease: g ? k.mobile.fadeHeader.in.ease : k.in.ease,
                  delay: g ? k.mobile.fadeHeader.in.delay : k.in.delay,
                  onStart: () => {
                    A && (b ? (A.classList.add(Xt), C && C.classList.add(Ut), L && L.classList.remove(Ft)) : (A.classList.remove(Xt), C && C.classList.remove(Ut), L && L.classList.add(Ft)))
                  }
                }, 0), g && (T && v().set(T.style, {
                  visibility: "visible"
                }), O && (O.style.pointerEvents = "all"));
                break
              }
              default:
                if (v().to(I, {
                    autoAlpha: 0,
                    duration: g ? k.mobile.footer.out.duration : k.out.duration,
                    ease: g ? k.mobile.footer.out.ease : k.out.ease
                  }), T && v().set(T.style, {
                    visibility: "hidden"
                  }), O && (O.style.pointerEvents = "none"), g) {
                  const e = {
                    current: N(O).y
                  };
                  v().to(O, {
                    opacity: 0,
                    duration: k.mobile.fadeHeader.out.duration,
                    ease: k.mobile.fadeHeader.out.ease
                  }), v().to(e, {
                    current: -1 * O.offsetHeight,
                    duration: k.mobile.drawer.duration,
                    ease: k.mobile.drawer.ease,
                    onUpdate: () => {
                      S.current.style.transform = `translateY(${e.current}px)`
                    }
                  })
                } else v().to(O, {
                  autoAlpha: 0,
                  duration: k.out.duration,
                  ease: k.out.ease,
                  delay: k.out.delay
                })
            }
          }), [l, u, x, p, f, b, c, E, g, y, h, Jt]);
          return (0, r.useEffect)((() => {
            y && y?.[B.FOOTER]?.current && y?.[B.SIDEBAR]?.current && y?.[B.UI]?.current && y?.[B.LOADING_SCREEN]?.current && S.current && f?.scene && f?.controls && R(_ ? Zt : "hidden")
          }), [y, _, S.current, p, f, g, b, y?.[B.FOOTER]?.current, y?.[B.SIDEBAR]?.current]), (0, Ke.jsx)("div", {
            ref: S,
            className: "rockstargames-modules-gtao-license-plateaa4cb56d97a9d885e644c0af2b3e81ce",
            children: (0, Ke.jsx)(Gt, {})
          })
        },
        ea = e => {
          let {
            isMobile: t
          } = e;
          const {
            loggedIn: a
          } = (0, o.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = Ze(), {
            plates: i,
            refs: l
          } = s, c = (0, r.useRef)(null), d = l[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              n(B.UI, c)
            }), [c.current]), !i) return null;
          let u;
          return t && (u = d ? (0, yt.createPortal)((0, Ke.jsx)(Qt, {}), d) : null), (0, Ke.jsxs)("div", {
            ref: c,
            className: "rockstargames-modules-gtao-license-plated1beae8d7c28603a3bdf0a34ca457352",
            children: [a && !t && (0, Ke.jsx)(Wt, {}), t ? u : (0, Ke.jsx)(Qt, {}), a && (0, Ke.jsx)(Rt, {}), (0, Ke.jsx)(zt, {})]
          })
        },
        ta = e => {
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
            } = Ze(),
            [i, l] = (0, r.useState)(null),
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
            } = (0, o.useGtmTrack)(),
            {
              data: g
            } = (0, o.useRockstarUser)(),
            b = {
              member_id: g?.user ? g.user?.id : void 0,
              view_name: "license plate creator - error screen"
            };
          return (0, r.useEffect)((() => {
            if (!n) return l(null), void d(null);
            l(n[0]), d(n[1] ?? a)
          }), [String(n)]), (0, r.useEffect)((() => {
            f({
              ...b,
              event: "alert_error",
              event_category: "alert",
              event_action: "error",
              text: u[i] || t("lp.error.unexpected.description")
            }), f({
              ...b,
              event: "trackPageview",
              display_type: s ? "mobile" : "desktop"
            })
          }), []), i ? (0, Ke.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platee268c88b0ad13ec9b70662c1cd3ed9a6",
            children: [(0, Ke.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platea62175a9470bdefca29061355225053b",
              children: [(0, Ke.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateff9acc08c36ee5477bfa008495fe1016",
                children: [(0, Ke.jsx)("i", {}), (0, Ke.jsx)("h4", {
                  children: u[i] || t("lp.error.unexpected.description")
                }), c?.code && (0, Ke.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platecbb8e56d4071adb16682a06f7d167c4b",
                  children: [(0, Ke.jsx)("p", {
                    children: `Code: ${c.code}`
                  }), c?.logId && (0, Ke.jsx)("p", {
                    children: `LogID: ${c?.logId}`
                  })]
                })]
              }), (0, Ke.jsx)(m.NavLink, {
                to: "character" !== i ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, Ke.jsx)("button", {
                  className: "rockstargames-modules-gtao-license-platebee018ef543141528e263e23cd43ae1e",
                  type: "button",
                  tabIndex: 0,
                  children: (0, Ke.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-platee346703179f552bd647459ea2eee8aca",
                    children: p[i]
                  })
                })
              })]
            }), (0, Ke.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateba7922fbecef8aac8fbfb43466d714df"
            })]
          }) : null
        },
        aa = () => {
          const {
            state: e,
            setRefs: t
          } = Ze(), {
            refs: a,
            isMobile: n
          } = e, s = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            s && t(B.LOADING_SCREEN, s)
          }), [s]);
          const o = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = document.querySelectorAll('[aria-label="animation"]');
            e.length && e.forEach((e => {
              e.tabIndex = -1
            }))
          }), []), (0, r.useEffect)((() => {
            if (n && a?.[B.SIDEBAR]?.current && o.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                n = a?.[B.SIDEBAR].current.offsetHeight,
                s = n + (r - n) / 2 - t / 2;
              o.current && (o.current.style.top = `${s}px`)
            } else o.current && (o.current.style.top = "unset")
          }), [n, a]), (0, Ke.jsx)("div", {
            ref: s,
            className: "rockstargames-modules-gtao-license-plateccf53583787aff7c3f2ac6b8d97c03b4",
            children: (0, Ke.jsx)("div", {
              ref: o,
              className: "rockstargames-modules-gtao-license-platea88fc625cf8ed28c9173313577588fed",
              children: (0, Ke.jsx)(y.LoadingAnimation, {})
            })
          })
        },
        ra = {
          orderInProgressCTA: "rockstargames-modules-gtao-license-platebc40a92b57940decf0e3d650470c2e6e",
          expanded: "rockstargames-modules-gtao-license-plateacb72edc8e0c3c68b01530b66cf9fda8",
          backToPlatesButton: "rockstargames-modules-gtao-license-platecc6b5e28d88c74bcb3605232bd6316f8",
          contentHeading: "rockstargames-modules-gtao-license-platedbcbf1b51802e6bc6bd827b038b8a2a6",
          plateRedemptionInstructions: "rockstargames-modules-gtao-license-platef2d6bbeb3efe691a30789b8601ced154",
          hidden: "rockstargames-modules-gtao-license-plated58c71e7b6b64c9252c151d42443b020",
          orderInstructions: "rockstargames-modules-gtao-license-platee8f0d0af4b9f3e0046d78d256627078c",
          buttonWrap: "rockstargames-modules-gtao-license-plateabf8a411f86b82032f1a48a226c574d6",
          ctaText: "rockstargames-modules-gtao-license-plateb786d4a5375d49d301a7eabc0907a5e5",
          isWindows: "rockstargames-modules-gtao-license-platebeaf68a19e2cc214f99eda5678bb1174"
        },
        na = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: n,
            t: i
          } = e;
          const [c, d] = (0, r.useState)(!1), {
            loggedIn: u
          } = (0, o.useRockstarUser)(), m = (0, s.useRockstarTokenPing)(), {
            setPlates: p,
            setPendingOrder: f,
            setPlateNumber: g,
            setSelectedStyle: b,
            setError: y,
            state: h
          } = Ze(), {
            character: v,
            plates: x,
            currentView: E
          } = h, {
            track: P
          } = (0, o.useGtmTrack)(), S = {
            view_name: "license plate creator - landing page logged in"
          }, _ = E === ue.LIST_PLATES ? 0 : -1, k = (0, r.useCallback)((() => {
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
              const a = [pe, ...x.slice(1, x.length)];
              p(a), f(null), g(""), b(w(pe.style.name).id), P({
                ...S,
                event: "cta_cancel",
                event_category: "cta",
                event_action: "cancel",
                text: `modal: ${i("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${i("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, v, x]);
          return (0, Ke.jsxs)("div", {
            className: [ra.orderInProgressCTA, n ? "" : ra.hidden].join(" "),
            children: [(0, Ke.jsx)("h1", {
              className: ra.contentHeading,
              children: i("lp.inprogress.title")
            }), (0, Ke.jsx)("p", {
              className: ra.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: i("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${ra.vehicleName}>${t}</span>`)
              }
            }), (0, Ke.jsxs)("div", {
              className: ra.buttonWrap,
              children: [(0, Ke.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": i("lp.inprogress.edit"),
                tabIndex: _,
                children: (0, Ke.jsx)("span", {
                  className: ra.ctaText,
                  children: i("lp.inprogress.edit")
                })
              }), (0, Ke.jsx)("button", {
                type: "button",
                onClick: e => {
                  d(!0), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                },
                "aria-label": i("lp.inprogress.cancel"),
                tabIndex: _,
                children: (0, Ke.jsx)("span", {
                  className: ra.ctaText,
                  children: i("lp.inprogress.cancel")
                })
              })]
            }), (0, Ke.jsx)(St, {
              title: i("lp.modal.order-cancel.title"),
              secondaryText: i("lp.modal.order-cancel.description").replace("{plateText}", x?.[0]?.plateText ?? "this plate"),
              buttons: [{
                buttonText: i("lp.modal.order-cancel.confirm"),
                onClick: e => k(e)
              }, {
                buttonText: i("lp.modal.order-cancel.close"),
                onClick: () => {
                  P({
                    ...S,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${i("lp.modal.order-cancel.close").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${i("lp.modal.order-cancel.title").toLowerCase()}`
                  })
                }
              }],
              showModal: c,
              onClose: () => d(!1),
              t: i
            })]
          })
        },
        sa = e => {
          let {
            plateData: t,
            plateWidthInPixels: a,
            currentView: r,
            loginUrl: n,
            inputTabIndex: s,
            track: o,
            trackingPresets: i,
            onClickPlate: l,
            t: c
          } = e;
          return (0, Ke.jsx)("div", {
            className: Yt.firstPlateLoggedOut,
            style: {
              background: "none",
              border: "none",
              opacity: r === ue.LIST_PLATES ? 1 : 0,
              width: `${a}px`,
              height: a / 2 + "px"
            },
            children: (0, Ke.jsxs)("div", {
              className: [Yt.loggedOutCTA, r !== ue.LIST_PLATES ? Yt.hidden : ""].join(" "),
              children: [(0, Ke.jsx)("button", {
                type: "button",
                onClick: () => {
                  n && (o({
                    event: "cta_login",
                    event_category: "cta",
                    event_action: "login",
                    event_label: "welcome to the lp creator",
                    text: c("lp.landing.signup").toLowerCase(),
                    link_url: n
                  }), window.location.href = n)
                },
                className: [Yt.signIn, r !== ue.LIST_PLATES ? Yt.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Ke.jsx)("span", {
                  className: Yt.ctaText,
                  children: c("lp.landing.signup")
                })
              }), (0, Ke.jsx)("button", {
                type: "button",
                onClick: () => {
                  o({
                    ...i,
                    event: "license_plate_try",
                    event_category: "license_plate",
                    event_action: "try",
                    text: c("lp.landing.tryit").toLowerCase()
                  }), l(t.index)
                },
                className: [Yt.tryWithoutSigningIn, Yt.firstLoad, r !== ue.LIST_PLATES ? Yt.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Ke.jsx)("span", {
                  className: Yt.ctaText,
                  children: c("lp.landing.tryit")
                })
              })]
            })
          })
        },
        oa = e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, o.useRockstarUser)(), {
            state: n,
            setCurrentView: s,
            setCurrentPlate: i,
            setCurrentPlateIndex: l,
            setRefs: c
          } = Ze(), {
            currentView: d,
            accessiblePlates: u,
            gridState: m,
            is3D: p,
            loginUrl: f,
            pendingOrder: g,
            three: b,
            plates: y,
            refs: h,
            isMobile: v,
            realHeight: x,
            plateTextures: w
          } = n, [E, P] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            P(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            y?.length && T(y[0])
          }), [y]);
          const [S, _] = (0, r.useState)(null), [k, T] = (0, r.useState)(null), N = h[B.FIRST_PLATE_MESH], C = h[B.ROOT], L = (0, r.useRef)(null), j = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = h[B.SIDEBAR];
            if (!(e?.current && C?.current && m?.gridOptions && k)) return;
            const t = e.current,
              a = {
                x: v ? 0 : t.offsetWidth,
                y: 0
              },
              r = I(k.index, C.current, Number(x.replace("px", "")), m, a);
            _(r)
          }), [h]);
          const {
            track: M
          } = (0, o.useGtmTrack)(), V = {
            view_name: "license plate creator - landing page logged " + (a ? "in" : "out")
          }, D = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c(B.CTA_WRAP, L)
          }), [L.current]), (0, r.useEffect)((() => {
            c(B.CTA_SHADER, j)
          }), [j.current]);
          const W = d === ue.LIST_PLATES ? 0 : -1,
            Y = (0, r.useCallback)((e => {
              if (s() === ue.LIST_PLATES) {
                const t = 0 === e ? ue.NEW_PLATE : ue.VIEW_PLATE;
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
                })), i(y[e]), l(e), s(t)
              }
            }), [y]),
            $ = (0, r.useCallback)((e => {
              O(0, d)
            }), [d]),
            z = (0, r.useMemo)((() => S ? (0, Ke.jsx)(sa, {
              plateData: k,
              plateWidthInPixels: S.width,
              currentView: d,
              loginUrl: f,
              inputTabIndex: W,
              track: M,
              trackingPresets: V,
              onClickPlate: Y,
              t
            }) : null), [d, f, S]),
            H = (0, r.useMemo)((() => void 0 !== y ? R(g, y) ? (0, Ke.jsx)(na, {
              t,
              vehicleName: `${g.manufacturerName} ${g.vehicleName}`,
              onClickEdit: () => {
                M({
                  ...V,
                  event: "license_plate_edit_click",
                  event_category: "license_plate",
                  event_action: "edit",
                  event_label: "click",
                  text: t("lp.inprogress.edit").toLowerCase()
                }), Y(k.index)
              },
              isVisible: d === ue.LIST_PLATES
            }) : y.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30 ? (0, Ke.jsxs)("div", {
              className: [Yt.maxPlatesReached, d !== ue.LIST_PLATES ? Yt.hidden : ""].join(" "),
              children: [(0, Ke.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === y.length ? null : (0, Ke.jsxs)("div", {
              type: "button",
              style: {
                pointerEvents: d === ue.LIST_PLATES ? "all" : "none"
              },
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "keypress",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(k.index))
              },
              onClick: () => {
                M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "click",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(k.index)
              },
              onPointerOver: v ? void 0 : () => {
                N?.current && $(N?.current)
              },
              onPointerOut: v ? void 0 : () => {
                var e;
                N?.current && (e = N?.current, A(e))
              },
              className: [Yt.createNewPlate, d !== ue.LIST_PLATES ? Yt.hidden : ""].join(" "),
              ref: D,
              tabIndex: W,
              children: [(0, Ke.jsx)("span", {
                className: `${Yt.ctaText} ${E?Yt.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, Ke.jsx)("div", {
                className: Yt.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [S, d]),
            U = (0, r.useMemo)((() => void 0 !== g && S ? (0, Ke.jsx)("div", {
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "keypress",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(k.index))
              },
              onClick: () => {
                M({
                  ...V,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "click",
                  text: t("lp.landing.newcta").toLowerCase()
                }), Y(k.index)
              },
              type: "button",
              tabIndex: W,
              className: Yt.firstPlateLoggedIn,
              style: {
                width: `${S.width}px`,
                height: S.width / 2 + "px",
                pointerEvents: d === ue.LIST_PLATES ? "all" : "none",
                fontSize: S.width / 2 * .075 + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
              },
              children: H
            }) : null), [d, g, S, h, k, H, v]);
          return (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              if (e && L.current) {
                const t = L.current.querySelector("canvas");
                t && L.current.removeChild(t), e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.opacity = 1, e.style.transition = "transform 0.25s ease-out", a && !g && d === ue.LIST_PLATES && e.classList.add(Yt.newOrder), L.current.append(e)
              }
            }
          }), [w, L.current, g, a, d]), (0, r.useEffect)((() => {
            u?.[0]?.current || L.current && (u[0] = L)
          }), [u, L.current]), (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              e && b?.scene && (e.style.transition = "transform 0.25s ease-out")
            }
          }), [p, b, w]), (0, r.useMemo)((() => {
            if (!S || !k || !m?.gridOptions) return null;
            const e = R(g, y) ? Yt.pendingOrderShader : "",
              t = a ? e : Yt.loggedOutShader,
              {
                width: r,
                height: n
              } = S,
              {
                top: s,
                left: o,
                right: i,
                bottom: l
              } = S.rect;
            return (0, Ke.jsxs)("div", {
              ref: L,
              className: [Yt.CTAWrap, a ? "" : Yt.loggedOut].join(" "),
              style: {
                top: s,
                left: o,
                bottom: l,
                right: i,
                width: r,
                height: n
              },
              children: [(0, Ke.jsx)("div", {
                ref: j,
                className: t
              }), a ? U : z]
            })
          }), [H])
        },
        ia = e => {
          let {
            plate: t,
            index: a,
            accessiblePlateRefs: n,
            details: s,
            tabIndex: i,
            texture: l
          } = e;
          const {
            loggedIn: c
          } = (0, o.useRockstarUser)(), {
            setCurrentView: d,
            setCurrentPlate: u,
            setCurrentPlateIndex: m,
            state: {
              currentView: p,
              isLoading: f,
              plateTextures: g,
              plates: b,
              deletedPlateIndex: y,
              isMobile: h,
              shouldRenderScene: v
            }
          } = Ze(), {
            track: x
          } = (0, o.useGtmTrack)(), w = {
            view_name: "license plate creator - landing page logged " + (c ? "in" : "out")
          }, E = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            !n.current[a + 1]?.current && E && (n.current[a + 1] = E)
          }), [E.current, b, f]), (0, r.useEffect)((() => {
            if (l && E.current) {
              const e = E.current.querySelector("canvas");
              e && E.current.removeChild(e), l.style.width = "100%", l.style.height = "100%", l.style.position = "absolute", l.style.opacity = 1, l.style.top = "0px", l.style.left = "0px", l.style.pointerEvents = "none", l.style.transition = "transform 0.25s ease-out", l.classList.add("rockstargames-modules-gtao-license-platefdedf6af97ba01b09fe912dfd53b3b15"), E.current.append(l)
            }
          }), [g, l, E.current]), (0, r.useMemo)((() => (0, Ke.jsx)("button", {
            "aria-label": `${t?.style?.displayName||""} license plate ${t.plateText?`with the number ${t.plateText}`:""}`.trim(),
            className: "rockstargames-modules-gtao-license-platec7d0ee6491ccdc554552ffea411a56b1",
            ref: E,
            id: `keyboard-accessible-license-plate-${a}`,
            style: {
              position: "absolute",
              height: `${s.height+1}px`,
              width: `${s.width}px`,
              top: s.top - 1 + "px",
              left: `${s.left}px`,
              transformOrigin: "center",
              pointerEvents: p !== ue.LIST_PLATES || "number" == typeof y || v ? "none" : "all"
            },
            tabIndex: i,
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
              }), u(t), m(a + 1), d(ue.VIEW_PLATE)
            }
          })), [t, l, s, v, p])
        },
        la = e => {
          let {
            t
          } = e;
          const {
            setAccessiblePlates: a,
            setRefs: n,
            state: {
              currentView: s,
              gridState: i,
              plates: l,
              realHeight: c,
              refs: d,
              isMobile: u,
              plateTextures: m
            }
          } = Ze(), {
            loggedIn: p
          } = (0, o.useRockstarUser)(), [f, g] = (0, r.useState)([]), b = (0, r.useRef)(null), y = (0, r.useRef)([]);
          return (0, r.useEffect)((() => {
            y.current && l.length > 0 && y.current.length === l.length && a(y.current)
          }), [y.current?.length, l]), (0, r.useEffect)((() => {
            n(B.ACCESSIBLE_PLATE_GRID, b)
          }), [b.current]), (0, r.useEffect)((() => {
            const e = d[B.ROOT]?.current,
              t = d?.[B.SIDEBAR]?.current,
              a = [];
            e && t && i && (l.forEach(((r, n) => {
              if (n) {
                const r = I(n, e, Number(c.replace("px", "")), i, u ? void 0 : {
                    x: t.offsetWidth,
                    y: 0
                  }),
                  {
                    height: s,
                    width: o,
                    rect: {
                      top: l,
                      left: d
                    }
                  } = r;
                s && o && s < o && a.push({
                  width: o,
                  height: s,
                  top: l,
                  left: d
                })
              }
            })), g([...a]))
          }), [m, d && d?.[B.SIDEBAR]?.current]), (0, r.useMemo)((() => p && !f.length ? null : (y.current.forEach((e => {
            e.current && (e.current.style.transform = "none")
          })), (0, Ke.jsxs)("div", {
            ref: b,
            className: Ht,
            children: [(0, Ke.jsx)(oa, {
              t
            }), l.filter(((e, t) => t)).map(((e, t) => (0, Ke.jsx)(ia, {
              accessiblePlateRefs: y,
              plate: e,
              index: t,
              details: f[t],
              tabIndex: s === ue.LIST_PLATES ? 0 : -1,
              texture: m[t + 1]?.image
            }, e.plateText + e.vehicles.toString())))]
          }))), [f])
        },
        ca = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: g,
            setCharacter: y,
            setCurrentView: h,
            setDeletedPlateIndex: v,
            setError: x,
            setIs3D: E,
            setIsLoading: S,
            setIsLoggedIn: _,
            setIsMobile: k,
            setPendingOrder: T,
            setPlateNumber: N,
            setPlates: I,
            setRefs: O,
            setSelectedStyle: A,
            setVehicles: C,
            state: L
          } = Ze(), {
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
          } = (0, c.useRockstarLocalState)(), {
            loggedIn: F
          } = (0, o.useRockstarUser)();
          (0, r.useEffect)((() => {
            _(F)
          }), [F]);
          const {
            selectedCharacterTuple: G
          } = (0, o.useRockstarUserState)(), X = (0, s.useRockstarTokenPing)(), q = (0, r.useRef)(null), Z = (0, r.useRef)(null), K = (0, r.useRef)(null), [J, Q] = (0, r.useState)(null), [ee] = (0, m.useSearchParams)(), [te, ae] = (0, r.useState)(!1);
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
          const re = (0, r.useCallback)(b().debounce((() => {
            if (W?.renderer) {
              const {
                renderer: e
              } = W, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              g({
                width: t,
                height: a
              })
            }
            k(P())
          }), 100), [W]);
          (0, r.useEffect)((() => (re(), window.addEventListener("resize", re, !0), () => window.removeEventListener("resize", re, !0))), [W]), (0, r.useEffect)((() => ((0, c.setFreezeUserShouldSeeMore)(!0), U(!0), () => {
            (0, c.setFreezeUserShouldSeeMore)(!1), U(!1), h(ue.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            O(B.CANVAS_WRAP, q)
          }), [q.current]), (0, r.useEffect)((() => {
            O(B.ROOT, Z)
          }), [Z.current]), (0, r.useEffect)((() => {
            O(B.MOBILE_SIDEBAR_PORTAL_TARGET, K)
          }), [K.current]), (0, r.useEffect)((() => {
            if (!te || "webgl" === j || "browser" === j) return;
            x(null), y(G), h(ue.LIST_PLATES), T(null), v(null);
            const e = (F ? [] : [pe]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== F && (I(e), !1 === F && S(!1)), C([]), (async () => {
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
                    error: o = null,
                    result: i
                  } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                    pingBearer: X,
                    query: {
                      character: a,
                      platform: t
                    }
                  });
                if (o) throw Object.assign(new Error(""), o);
                const c = b().uniqBy(i?.vehicles ?? [], (e => {
                  let {
                    id: t
                  } = e;
                  return t
                }));
                if (!c.length) return x(["vehicles"]), void S(!1);
                C(c);
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
                const m = R(u, M);
                let p = [pe, ...s];
                p = p.map(((e, t) => ({
                  ...e,
                  index: t
                }))), m ? (T(u), A(pe.style.id)) : T(null), N(pe.plateText), S(!1), I(p)
              } catch (e) {
                x(["api", e]), S(!1)
              }
            })()
          }), [String(G), F, te]), (0, r.useEffect)((() => {
            R(V, M) && (A(w(V.plateStyle).id), N(V.plateText))
          }), [V, M]), (0, r.useEffect)((() => {
            if (J || !$ || j || !te) return;
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
            const o = new d.TextureLoader(t),
              i = new d.CubeTextureLoader(t);
            let l;
            r.load(e, (e => {
              l = e
            }), void 0, (e => console.log("err", e)));
            const c = i.load([a(8220), a(8130), a(5377), a(6491), a(1984), a(3445)]),
              m = $.map((e => {
                const {
                  fontColor: t,
                  fontSize: a
                } = e, [r, n, s, i] = [e.albedoImageUrl, e.alphaImageUrl, e.bumpImageUrl, e.roughnessImageUrl].map((e => o.load(e)));
                return {
                  albedoMap: r,
                  alphaMap: n,
                  bumpMap: s,
                  roughnessMap: i,
                  fontColor: t,
                  fontSize: a
                }
              }))
          }), [J, $, j, te]), (0, r.useEffect)((() => {
            const e = Y !== ue.LIST_PLATES && !z;
            E(e)
          }), [Y, z]);
          const ne = (0, r.useMemo)((() => (0, Ke.jsx)(n.Canvas, {
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
            children: (0, Ke.jsx)(i.GtmProvider, {
              children: (0, Ke.jsx)(bt, {
                loadedAssets: J
              })
            })
          })), [J, F]);
          return te && null !== F ? j ? (0, Ke.jsx)(ta, {
            t
          }) : (0, Ke.jsxs)("div", {
            ref: Z,
            className: "rockstargames-modules-gtao-license-platee77939e1820c318536a581396891c6d8",
            children: [D && (0, Ke.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platecb41956b83afc8b368f030e3ac9efd58",
              ref: K,
              children: (0, Ke.jsx)(aa, {
                isLoading: H
              })
            }), (0, Ke.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plated84d9facb1ce367777aeb61cfb594eb8",
              children: [(0, Ke.jsx)(ea, {
                isMobile: D
              }), (0, Ke.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platebca268dc1d11ae6823b1bc5b48b364ca",
                ref: q,
                children: [ne, !D && (0, Ke.jsx)(aa, {
                  isLoading: H
                })]
              })]
            }), (0, Ke.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platea9a516aab758a9651e41554f2e2a0890"
            }), (0, Ke.jsx)(la, {
              t
            }), (0, Ke.jsx)(Je, {
              t
            })]
          }) : null
        }))
    },
    3924: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/glb/1843b92a5b0f80dbad5ac625e18712c9.glb"
    },
    8130: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/310aae02f3b729401148b00e21e63680.png"
    },
    6491: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/080f77652dad3eab9c63ae40289bc2cd.png"
    },
    3445: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/696c6c8a65f80cb1ddef34af304bbea3.png"
    },
    8220: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22c93544bb6cc43f1456250955025b44.png"
    },
    5377: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6102d9185c58dfe8a1da872c7e27558.png"
    },
    1984: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5970684d704507ab7282e32cc69cd04b.png"
    },
    3493: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e842fb4993c970ad9f99c54f66dc23f1.jpg"
    },
    7934: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1911068b624e9ad6e24e0b5af557ca98.png"
    },
    6050: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f00c086b0ccf0f5e143a07d6c397af01.jpg"
    },
    9233: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81c8bf8e8f3845940a1ddf505a9dbb2e.jpg"
    },
    8928: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad86726bf1f59ba9e72f48ec3d909510.png"
    },
    8642: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/24ace1d97bcf47f10b248854b28723fb.jpg"
    },
    754: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eeeb3b31a594a9c0b399af3296c3caed.jpg"
    },
    4517: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27588e10169bb7555bed1fe99963ddf4.jpg"
    },
    2548: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a5907832294f4292975a7428408031.png"
    },
    2423: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/318db7582cb10a2b660aafa45a49ec13.jpg"
    },
    6879: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e41a5143c3d0ae5a16573064ee1e309a.jpg"
    },
    1358: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca6a8bfc39e4bff84d6f31176074b342.png"
    },
    4360: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/58af63f198dffe524132d43c57561d1c.jpg"
    },
    3983: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1525b482fdcab1ad0e483f4346b0f5a.png"
    },
    4495: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cc712e262f7a46085049a07d1ca145ea.jpg"
    },
    5987: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/858ed8fe9a4aaed2e385023aac516ede.jpg"
    },
    1765: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99e28a3c5885ec460aa556591903f67f.jpg"
    }
  }
]);