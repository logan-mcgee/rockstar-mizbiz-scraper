"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [277], {
    1277: (e, t, a) => {
      a.d(t, {
        Z: () => ua
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
        h = a(8976),
        y = a(67),
        v = a.n(y);
      const x = e => U.find((t => {
          let {
            id: a
          } = t;
          return a === e
        })),
        w = e => U.find((t => {
          let {
            name: a
          } = t;
          return a.toLowerCase() === e.toLowerCase()
        })),
        E = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        P = () => window.innerWidth < $.lg,
        S = () => window.innerHeight > .75 * window.innerWidth,
        _ = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= $.xxl:
              return 25;
            case e >= $.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= $.lg:
              return 40;
            default:
              return 100
          }
        },
        k = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= $.xl:
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
            case e >= $.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= $.lg:
              return 5;
            case e >= $.md:
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

      function I(e) {
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

      function N(e, t, a, r) {
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
        } = r.gridDimensions.margins.pixels, g = Math.floor(e / o), b = e % o, h = l * i + d * (i - 1), y = c * o + u * (o - 1), v = s - n.x - 2 * p, x = a - n.y - m - f, w = x * (l / h), E = v * (c / y), P = g * (l + d) / h, S = {
          x: v * (b * (c + u) / y) + p + n.x,
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
          t === me.LIST_PLATES && (document.body.style.cursor = "pointer")
        },
        A = e => {
          document.body.style.cursor = "auto", v().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: F.plateHover.duration,
            ease: F.plateHover.ease
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
        let h = null;
        u.traverse((e => {
          e.name === pe.LP && b.push(e), e.userData.index === a && (h = e)
        }));
        const y = new d.Vector3;
        h && h.getWorldPosition(y);
        const v = {
            cameraPosition: {
              start: (new d.Vector3).copy(m.position),
              end: new d.Vector3(y.x, y.y, y.z + g)
            },
            controlsTarget: {
              start: (new d.Vector3).copy(p.current.target),
              end: y
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
        return t.isResize || (w = P() ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration), r.to(x, {
          current: 1,
          duration: w,
          ease: P() ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
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
          duration: P ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
          ease: P ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
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
        };
      let z;
      z = [{
        id: 0,
        name: "eCola",
        displayName: "eCola",
        alphaImageUrl: V,
        albedoImageUrl: a(568),
        roughnessImageUrl: a(7376),
        bumpImageUrl: a(1101),
        previewUrl: a(6638),
        image: null,
        fontColor: "#FFFFFF",
        fontSize: M,
        fontName: j,
        selected: !1,
        isXmas2023Plate: !0
      }, {
        id: 1,
        name: "sprunk",
        displayName: "Sprunk",
        alphaImageUrl: V,
        albedoImageUrl: a(7188),
        roughnessImageUrl: a(9305),
        bumpImageUrl: a(111),
        previewUrl: a(9615),
        image: null,
        fontColor: "#FFFFFF",
        fontSize: M,
        fontName: j,
        selected: !1,
        isXmas2023Plate: !0
      }, {
        id: 2,
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
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 3,
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
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 4,
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
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 5,
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
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 6,
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
        selected: !1,
        isXmas2023Plate: !1
      }];
      const U = z,
        $ = {
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
        F = {
          plateHover: {
            duration: .25,
            ease: y.Power1.easeOut
          },
          clickPlate: {
            duration: .9,
            ease: y.Power4.easeInOut
          },
          deletePlate: {
            duration: .6,
            ease: y.Power4.easeInOut,
            delay: .005
          },
          sidebar: {
            in: {
              duration: .35,
              ease: y.Power2.easeIn,
              delay: .65
            },
            out: {
              duration: .3,
              ease: y.Power2.easeIn,
              delay: 0
            },
            mobile: {
              drawer: {
                duration: .9,
                ease: y.Power4.easeInOut
              },
              drawerSnap: {
                duration: .4,
                ease: y.Power4.easeOut
              },
              fadeHeader: {
                in: {
                  duration: .6,
                  ease: y.Power2.easeInOut,
                  delay: .3
                },
                out: {
                  duration: .7,
                  ease: y.Power2.easeInOut
                }
              },
              footer: {
                in: {
                  duration: .4,
                  ease: y.Cubic.easeIn,
                  delay: .9
                },
                out: {
                  duration: .4,
                  ease: y.Cubic.easeOut
                }
              }
            }
          },
          toggleView: {
            camera: {
              duration: .75,
              ease: y.Cubic.easeInOut
            },
            fadeIn: {
              duration: .5,
              ease: y.Power2.easeIn
            },
            fadeOut: {
              duration: .5,
              ease: y.Power2.easeIn
            },
            reset: {
              duration: .375,
              ease: y.Cubic.easeInOut
            }
          },
          transaction: {
            confirmOrder: {
              duration: .9,
              ease: y.Power3.easeInOut
            },
            fade: {
              in: {
                duration: .4,
                ease: y.Cubic.easeIn
              },
              out: {
                duration: .4,
                ease: y.Cubic.easeOut
              },
              landingPage: {
                duration: 1.15,
                ease: y.Cubic.easeInOut
              }
            }
          },
          plateShimmer: {
            duration: 2,
            ease: y.Power2.easeOut
          },
          accessibilePlate: {
            duration: .5,
            ease: y.Power2.easeIn
          }
        },
        G = {
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
        X = -9.72,
        q = 5,
        Z = -10.68,
        K = 10.4,
        J = 5,
        Q = 4.52,
        ee = {
          x: 0,
          y: 14.4,
          z: 4.9
        },
        te = -4.52,
        ae = 10,
        re = 6.8,
        ne = {
          x: -14.52
        },
        se = -15,
        oe = 7,
        ie = 4.52,
        le = {
          x: 6,
          y: 5,
          z: 5
        },
        ce = .6,
        de = .4,
        ue = .3,
        me = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        pe = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        fe = {
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
        be = (0, s.makeVar)([]),
        he = (0, s.makeVar)(null),
        ye = (0, s.makeVar)(null),
        ve = (0, s.makeVar)(null),
        xe = (0, s.makeVar)(0),
        we = (0, s.makeVar)(me.LIST_PLATES),
        Ee = (0, s.makeVar)(null),
        Pe = (0, s.makeVar)(null),
        Se = (0, s.makeVar)(null),
        _e = (0, s.makeVar)(1),
        ke = (0, s.makeVar)(null),
        Te = (0, s.makeVar)(!1),
        Re = (0, s.makeVar)(!1),
        Ie = (0, s.makeVar)(!0),
        Ne = (0, s.makeVar)(null),
        Oe = (0, s.makeVar)(P()),
        Ae = (0, s.makeVar)(!1),
        Ce = (0, s.makeVar)(!0),
        Le = (0, s.makeVar)(!1),
        je = (0, s.makeVar)(0),
        Me = (0, s.makeVar)(me.LIST_PLATES),
        Ve = (0, s.makeVar)(void 0),
        De = (0, s.makeVar)(""),
        We = (0, s.makeVar)([]),
        Ye = (0, s.makeVar)([]),
        Be = (0, s.makeVar)(!1),
        ze = (0, s.makeVar)(!!P()),
        Ue = (0, s.makeVar)(!1),
        $e = (0, s.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        He = (0, s.makeVar)(U),
        Fe = (0, s.makeVar)({}),
        Ge = (e, t) => {
          const a = {
            ...Fe(),
            [e]: t
          };
          Fe(a)
        },
        Xe = (0, s.makeVar)(fe.style?.id),
        qe = (0, s.makeVar)(null),
        Ze = (0, s.makeVar)(null),
        Ke = (0, s.makeVar)(null),
        Je = () => {
          const e = (0, s.useReactiveVar)(be),
            t = (0, s.useReactiveVar)(he),
            a = (0, s.useReactiveVar)(ye),
            n = (0, s.useReactiveVar)(ve),
            i = (0, s.useReactiveVar)(xe),
            c = (0, s.useReactiveVar)(we),
            d = (0, s.useReactiveVar)(Ee),
            u = (0, s.useReactiveVar)(Pe),
            m = (0, s.useReactiveVar)(Se),
            p = (0, s.useReactiveVar)(_e),
            f = (0, s.useReactiveVar)(ke),
            g = (0, s.useReactiveVar)(Te),
            b = (0, s.useReactiveVar)(Oe),
            h = (0, s.useReactiveVar)(Re),
            y = (0, s.useReactiveVar)(Ie),
            v = (0, s.useReactiveVar)(Ne),
            x = (0, s.useReactiveVar)(Ae),
            w = (0, s.useReactiveVar)(Le),
            E = (0, s.useReactiveVar)(Ce),
            P = (0, s.useReactiveVar)(je),
            S = (0, s.useReactiveVar)(Me),
            _ = (0, l.useLocale)(),
            [k, T] = (0, r.useState)(""),
            R = (0, s.useReactiveVar)(Ve),
            I = (0, s.useReactiveVar)(De),
            N = (0, s.useReactiveVar)(We),
            O = (0, s.useReactiveVar)(Ye),
            A = (0, s.useReactiveVar)($e),
            C = (0, s.useReactiveVar)(He),
            L = (0, s.useReactiveVar)(ge),
            j = (0, s.useReactiveVar)(Fe),
            M = (0, o.useScConfig)(),
            V = (0, s.useReactiveVar)(Xe),
            D = (0, s.useReactiveVar)(qe),
            W = (0, s.useReactiveVar)(ze),
            Y = (0, s.useReactiveVar)(Be),
            B = (0, s.useReactiveVar)(Ze),
            z = (0, s.useReactiveVar)(Ke),
            U = (0, s.useReactiveVar)(Ue);
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
              isLoading: y,
              isScrollEnabled: E,
              gridScale: p,
              gridState: f,
              lastScrollY: P,
              pendingOrder: R,
              plates: N,
              plateTextures: O,
              realHeight: L,
              is3D: g,
              isExpanded: h,
              isLoggedIn: v,
              isMobile: b,
              isSceneLoaded: w,
              loginUrl: k,
              isOrderConfirmed: x,
              lastView: S,
              plateNumber: I,
              plateNumberStatus: A,
              plateStyles: C,
              refs: j,
              selectedStyle: V,
              selectedVehicle: D,
              shouldForce2D: W,
              shouldRenderScene: Y,
              three: B,
              vehicles: z,
              xmas23PlatesAllowed: U
            },
            setAccessiblePlates: be,
            setCanvasDimensions: he,
            setCharacter: ye,
            setCurrentPlate: ve,
            setCurrentPlateIndex: xe,
            setCurrentView: we,
            setDeletedPlateIndex: Ee,
            setError: Pe,
            setFirstPlateMesh: Se,
            setGridState: ke,
            setIsLoading: Ie,
            setIsLoggedIn: Ne,
            setIsOrderConfirmed: Ae,
            setLastScrollY: je,
            setLastView: Me,
            setPendingOrder: Ve,
            setPlates: We,
            realHeightReactive: ge,
            setIs3D: Te,
            setIsExpanded: Re,
            setIsMobile: Oe,
            setIsSceneLoaded: Le,
            setIsScrollEnabled: Ce,
            setGridScale: _e,
            setPlateNumber: De,
            setPlateNumberStatus: $e,
            setPlateStyles: He,
            setPlateTextures: Ye,
            setRefs: Ge,
            setRefsInternal: Fe,
            setSelectedStyle: Xe,
            setSelectedVehicle: qe,
            setShouldForce2D: ze,
            setShouldRenderScene: Be,
            setThree: Ze,
            setVehicles: Ke,
            setXmas23PlatesAllowed: Ue
          }
        };
      var Qe = a(3705);
      const et = e => {
        let {
          t
        } = e;
        const {
          setRefs: a,
          state: n
        } = Je(), {
          realHeight: s
        } = n, o = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          a(B.FOOTER, o)
        }), [o.current]), (0, Qe.jsx)("div", {
          className: "rockstargames-modules-gtao-license-plateb6e8553eec1a920ae9f7612fc67f679d",
          ref: o,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, Qe.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platea42faae94ba9f609acbd4f25fe7040df",
            children: [(0, Qe.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platebaaac365214984fcde58c80e665b93a5",
              children: [(0, Qe.jsx)(h.LanguageSelector, {}), (0, Qe.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateb1ab2aefcb2ea7b94f3b16e8751de23e",
                children: [(0, Qe.jsx)(h.A, {
                  to: "/corpinfo",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info",
                  children: t("Corporate")
                }), (0, Qe.jsx)(h.A, {
                  to: "/privacy",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy",
                  children: t("Privacy")
                }), (0, Qe.jsx)(h.A, {
                  onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie settings",
                  children: t("Cookie Settings")
                }), (0, Qe.jsx)(h.A, {
                  to: "/cookies",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie policy",
                  children: t("Cookie Policy")
                }), (0, Qe.jsx)(h.A, {
                  to: "/legal",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal",
                  children: t("Legal")
                }), (0, Qe.jsx)(h.A, {
                  to: "/ccpa",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "CCPA Link",
                  "data-gtm-label": "View CCPA Info",
                  children: t("Do Not Sell My Info")
                })]
              })]
            }), (0, Qe.jsx)(h.Rating, {
              className: "rockstargames-modules-gtao-license-platef11dcd708c3e9261a6f3ffa655c18840",
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })
        })
      };
      var tt = a(2960),
        at = a(975);
      const rt = e => {
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
        }), []), (0, Qe.jsx)("primitive", {
          position: s,
          scale: [1, 1, 1],
          rotation: [0, 0, 0],
          object: o
        })
      };
      var nt = a(5297);
      const st = "#898989",
        ot = "#000000",
        it = ["0.05", "0.15", "0.4"],
        lt = ["0.0", "0.5", "1.0"],
        ct = ["0.299", "0.587", "0.114"],
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
          return a <= $.sm ? t = 1 / 4 : a <= $.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
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
            position: o = [0, 0, 0],
            width: i = 2
          } = e;
          const {
            state: l,
            setCurrentView: c,
            setPlateTextures: u,
            setRefs: m
          } = Je(), {
            currentView: p,
            isSceneLoaded: f,
            pendingOrder: g,
            plateNumber: b,
            plates: h,
            isLoggedIn: y,
            isMobile: v,
            selectedStyle: w,
            gridScale: E,
            plateTextures: P
          } = l, S = 0 === s && "number" == typeof w, [_, k] = (0, r.useState)(x(S ? w : n.style.id)), T = [0, 0, 0], R = [1, 1, 1], [I] = (0, r.useState)(0 === n.index), [N, C] = (0, r.useState)({}), L = (0, r.useRef)(), j = h.filter((e => {
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
                  delete mt.bumpMap, mt.bumpMap = ut();
                  const a = mt.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= $.sm ? r = 1 / 4 : n <= $.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const o = 5 * r;
                  return dt || (a.filter = `blur(${o}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), dt && nt.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * o), new d.CanvasTexture(a.canvas)
                })(a, _),
                n = ((e, t) => {
                  delete mt.map, mt.map = ut();
                  const a = mt.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= $.sm ? r = 1 / 4 : n <= $.md && (r = .5);
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
                  n <= $.sm ? r = 1 / 4 : n <= $.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = ot, a.fillStyle = ot, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = st, a.fillStyle = st, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new d.CanvasTexture(a.canvas)
                })(a, _);
              return [r, n, s]
            }), [_]),
            W = (0, r.useCallback)((e => {
              var t;
              I && (e.uniforms.saturation = H.saturation, e.uniforms.fade = H.fade, e.uniforms.shaderIndex = H.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == 2) {\n            float opacity = mix(0.01, 1.0, saturation);\n            float desaturationOpacity = gl_FragColor.a * (opacity);\n            vec3 desaturationColor = vec3(\n                ${ct[0]},\n                ${ct[1]},\n                ${ct[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, gl_FragColor.a);\n\n        } else if (shaderIndex == 0) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=y?it:lt)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [I, y, g]);
          return (0, r.useEffect)((() => {
            I && (n.plateText = b)
          }), [I ? b : null]), (0, r.useEffect)((() => {
            if (I && _ && _.id !== w) {
              const e = x(w);
              k(e)
            }
          }), [I, w]), (0, r.useEffect)((() => {
            H.shaderIndex.value = y ? g ? 0 : 2 : 0, M.current && (M.current.bumpScale = .015 * E, M.current.needsUpdate = !0)
          }), [M.current, g, y, E]), (0, r.useEffect)((() => {
            if (N.map && P[s] !== N.map) {
              const e = [...P];
              e[s] = N.map, u(e)
            }
          }), [N, P]), (0, r.useEffect)((() => {
            const [e, t, a] = D(I ? b : n.plateText);
            C({
              map: t,
              bumpMap: e,
              roughnessMap: a
            })
          }), [I ? b : void 0, I ? _ : void 0]), (0, r.useMemo)((() => f && N.map && N.bumpMap ? (0, Qe.jsxs)("mesh", {
            name: pe.LP,
            visible: !0,
            userData: {
              index: s
            },
            position: o,
            rotation: T,
            scale: R,
            ref: L,
            onPointerOver: v ? void 0 : () => {
              y && c() === me.LIST_PLATES && L.current && V(L.current)
            },
            onPointerOut: v ? void 0 : () => {
              var e;
              y && L.current && (e = L.current, !n.index && j || A(e))
            },
            children: [(0, Qe.jsx)("planeBufferGeometry", {
              args: [i, a, i, a]
            }), (0, Qe.jsx)("meshPhysicalMaterial", {
              onBeforeCompile: 0 === s ? W : void 0,
              alphaMap: n.alphaMap,
              bumpMap: N.bumpMap,
              opacity: 0,
              bumpScale: .015,
              depthTest: !1,
              envMap: t,
              envMapIntensity: de,
              map: N.map,
              metalness: .4,
              ref: M,
              roughness: .3,
              roughnessMap: N.roughnessMap,
              transparent: !0
            })]
          }) : null), [y, v, N])
        },
        ft = e => {
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
            isVertical: h,
            rowGap: y,
            topMarginAsRatio: v
          } = m, {
            state: x,
            realHeightReactive: w,
            setGridScale: E,
            setLastScrollY: P,
            setCurrentView: S
          } = Je(), {
            currentView: _,
            gridScale: T,
            plates: R,
            isLoggedIn: I,
            isMobile: N,
            realHeight: O,
            refs: A,
            currentPlateIndex: C,
            three: j,
            canvasDimensions: M,
            lastScrollY: V,
            isScrollEnabled: D
          } = x, W = (0, r.useRef)(null), {
            camera: Y,
            scene: z,
            gl: U
          } = (0, n.useThree)(), [$, H] = (0, r.useState)(new d.Vector3(p.x, p.y, p.z)), [F, G] = (0, r.useState)(0), [X, q] = (0, r.useState)(0), {
            track: Z
          } = (0, o.useGtmTrack)(), K = {
            view_name: "license plate creator - landing page logged " + (I ? "in" : "out")
          }, [J, Q] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            _ === me.LIST_PLATES && Z({
              ...K,
              event: "virtualPageview",
              display_type: N ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (I ? "in" : "out")
            })
          }), [_]);
          const ee = (0, r.useCallback)((() => {
            if (M) {
              const e = l * b + g * (b - 1),
                a = Math.abs(p.z) * Math.tan((0, at.Id)(Y.fov / 2)) * 2,
                r = t.gridDimensions.margins.meters.top,
                n = t.gridDimensions.margins.meters.bottom,
                s = t.gridDimensions.width,
                o = s / e,
                i = t.gridDimensions.height,
                c = i / a;
              q((i - a + r + n).toFixed(4)), E(o), (e => {
                me.LIST_PLATES;
                const t = U.domElement.offsetHeight,
                  a = c * t + v * t + f * t,
                  r = k(),
                  n = A[B.ROOT]?.current;
                n && (n.style.height = `${a}px`), Q({
                  canvasHeight: t,
                  rootHeight: a
                }), w(`${Math.round(a)}px`);
                const i = Math.round(l * o / s * (U.domElement.offsetWidth - 2 * r));
                G(i)
              })()
            }
          }), [Y.fov, M, b, _, N, p, R, i, z, v, C, j]);
          (0, r.useEffect)((() => {
            p && H(p), ee()
          }), [p, M]);
          const te = (0, r.useMemo)((() => R?.map((e => {
              if (0 === F) return null;
              const {
                index: t
              } = e, a = -1 * s / 2 + .251953125 * s, r = (h ? t % b * (s + g) : Math.floor(t / b) * (s + g)) + s / 2, n = (h ? Math.floor(t / b) * (i + y) * -1 : t % b * (i + y) * -1) + a;
              return (0, Qe.jsx)(pt, {
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
            }), [N, V, D]),
            re = (0, r.useCallback)((() => {
              const e = A[B.ROOT].current,
                t = document.body,
                a = window.scrollY;
              P(a), e && (e.style.touchAction = "none"), L() || (window.scrollTo(0, a), requestAnimationFrame((() => {
                t.style.position = "fixed", t.style.top = `-${a}px`
              })))
            }), [N, A, D, V]);
          (0, r.useEffect)((() => {
            D ? ae() : re()
          }), [D]), (0, r.useEffect)((() => () => {
            ae()
          }), []);
          const ne = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (S() === me.LIST_PLATES || e) {
              const e = A[B.ROOT]?.current;
              if (!e || !J) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = J, r = N && R.length <= 2 ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = $.y + X * n;
              W?.current?.position?.set($.x, Number(s.toFixed(3)), $.z)
            }
          }), [W.current, $, A, X, R, J, I, N]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ne(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [W.current, I, $, p, O, A, X, J]), (0, r.useEffect)((() => {
            if (!W.current || !z) return;
            const e = z.getObjectByName("Scene");
            W.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [W.current, z]), (0, r.useMemo)((() => (0, Qe.jsx)("group", {
            name: pe.LP_GRID,
            ref: W,
            position: p,
            scale: T,
            children: 0 !== F && te
          })), [T, te, F])
        },
        gt = e => {
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
          return (0, Qe.jsxs)(Qe.Fragment, {
            children: [(0, Qe.jsx)("pointLight", {
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
            }), d && (0, Qe.jsx)("pointLightHelper", {
              light: c,
              sphereSize: 1
            })]
          })
        },
        bt = e => {
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
              position: [X, q, Z],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(gt, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [K, J, Q],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(gt, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [te, ae, re],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Qe.jsx)(gt, {
              name: "Light4",
              color: 16777215,
              intensity: 0,
              distance: 50,
              decay: 2,
              position: [se, oe, ie],
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
        },
        yt = e => {
          let {
            loadedAssets: t
          } = e;
          const {
            state: a,
            setIsSceneLoaded: s,
            setThree: o,
            setGridState: i
          } = Je(), {
            gridState: l,
            isLoggedIn: c,
            is3D: u,
            shouldForce2D: m,
            isSceneLoaded: p,
            plates: f,
            plateStyles: g,
            three: h,
            canvasDimensions: y,
            shouldRenderScene: v,
            refs: x
          } = a, [w, P, S] = (0, n.useThree)((e => {
            let {
              camera: t,
              gl: a,
              scene: r
            } = e;
            return [t, a, r]
          })), _ = (0, r.useRef)(), [T, R] = (0, r.useState)(!1), [I, N] = (0, r.useState)(null), O = () => {
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
            f.length && I && A(I.width)
          }), [I, f]), (0, r.useEffect)((() => (N({
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
            if (!w || !t || !I) return;
            const a = k(),
              {
                plateWidth: r,
                plateHeight: n,
                columnGap: s,
                rowGap: o,
                depth: l
              } = ht,
              c = l * Math.tan((0, at.Id)(17.5)),
              u = -1 * w.aspect * c,
              m = window.innerWidth < $.lg ? t.offsetHeight + a : a,
              p = a,
              g = P.domElement.offsetWidth,
              b = P.domElement.offsetHeight,
              h = (() => {
                const e = window.innerWidth;
                switch (!0) {
                  case e >= $.xxl:
                    return E(11);
                  case e >= $.xl:
                    return E(12);
                  case e >= $.md:
                    return E(13);
                  default:
                    return E(20)
                }
              })(),
              y = p / g,
              v = u - u * y * 2,
              x = m / b,
              S = c - c * x * 2,
              _ = h / b,
              T = new d.Vector3(v, S, -l),
              R = f.length > 1 ? (e => {
                const t = window.innerWidth;
                switch (!0) {
                  case t >= $.xxl:
                    return 3;
                  case t >= $.lg && t <= 1280:
                    return 1;
                  case e >= 600:
                    return 2;
                  default:
                    return 1
                }
              })(e) : 1,
              N = Math.ceil(f.length / R),
              O = r * R + s * (R - 1),
              A = n * Math.ceil(f.length / R) + o * (Math.ceil(f.length / R) - 1),
              C = Math.abs(T.z) * Math.tan((0, at.Id)(w.fov / 2)) * 2,
              L = y * (C * (g / b)),
              j = x * C,
              M = _ * C,
              V = Math.abs(2 * T.x),
              D = V / O * A;
            i({
              gridPosition: T,
              gridOptions: {
                ...ht,
                columns: R,
                rows: N,
                topMarginAsRatio: x,
                bottomMarginAsRatio: _,
                leftMarginAsRatio: y
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
                    bottom: h
                  }
                },
                height: D,
                width: V
              }
            })
          }), [f, x?.[B.SIDEBAR]?.current, w, I, c]);
          (0, r.useEffect)((() => {
            h && _.current && !h?.controlsInit && o({
              ...h,
              controls: _,
              controlsInit: !0
            })
          }), [_.current, h]), (0, r.useEffect)((() => {
            h?.scene && _?.current && (_.current.enabled = v)
          }), [v, h]), (0, r.useEffect)((() => {
            _?.current && (!m && u || (_.current.enabled = !1))
          }), [m, u]), (0, n.useFrame)((() => {
            v && (_?.current?.update(), P.render(S, w))
          }), 1);
          const C = (0, r.useCallback)(b().debounce((() => {
            const e = x[B.CANVAS_WRAP]?.current;
            e && N({
              width: e.offsetWidth,
              height: e.offsetHeight
            })
          }), 100), [w, x]);
          (0, r.useEffect)((() => (C(), window.addEventListener("resize", C, !0), () => window.removeEventListener("resize", C, !0))), [y]);
          const L = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, Qe.jsx)(rt, {
              position: [0, -4.05, -11.76],
              envMap: t.environmentMap,
              envModel: t.environmentModel,
              onLoad: O
            }) : null), [t]),
            j = (0, r.useMemo)((() => (0, Qe.jsx)(bt, {
              baseIntensity: ce,
              mapSize: 1024
            })), []),
            M = (0, r.useMemo)((() => (0, Qe.jsx)(ft, {
              gridState: l,
              loadedAssets: t
            })), [l, t]),
            V = (0, r.useMemo)((() => (0, Qe.jsx)("orbitControls", {
              ref: _,
              screenSpacePanning: !0,
              args: [w, P.domElement],
              enableDamping: !0,
              enableZoom: !1,
              enablePan: !1,
              maxPolarAngle: G.plateView.maxPolarAngle,
              minPolarAngle: G.plateView.minPolarAngle,
              maxAzimuthAngle: G.plateView.maxAzimuthAngle,
              minAzimuthAngle: G.plateView.minAzimuthAngle,
              minDistance: -1,
              maxDistance: 100
            })), [w, _, P]);
          return (0, Qe.jsxs)(Qe.Fragment, {
            children: [j, L, T && l ? M : "", V]
          })
        };
      var vt = a(6370),
        xt = a(814),
        wt = a(3627);
      const Et = e => {
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
          } = Je(), {
            currentView: p
          } = m, f = (0, r.useRef)(null), g = (0, r.useState)(D), b = d?.get ? d.get() : 0, h = (0, xt.useSpring)({
            y: t ? b : u,
            config: {
              easing: xt.easings.easeInOutQuart,
              duration: 900
            }
          }), y = (0, r.useRef)(u), x = (0, r.useRef)(0), w = (0, r.useRef)(!1);
          (0, r.useEffect)((() => {
            const e = {
              top: a,
              bottom: n,
              y: h.y,
              offset: y,
              sidebarRef: f
            };
            f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", t ? i(e) : o(e)
          }), [t]);
          const E = (0, r.useCallback)((0, wt.useDrag)((e => {
              if (p !== me.CONFIRM_ORDER) {
                if (!w.current)
                  if (y.current = Math.max(a, Math.min(n, h.y.get() + e.delta[1])), x.current = e.movement[1], e.dragging) h.y.set(y.current);
                  else {
                    const e = {
                      y: h.y.get()
                    };
                    if (y.current < a / 2) {
                      const t = v().to(e, {
                        y: a,
                        duration: F.sidebar.mobile.drawerSnap.duration,
                        ease: F.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : h.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = W
                    } else if (y.current > n / 2) {
                      const t = v().to(e, {
                        y: n,
                        duration: F.sidebar.mobile.drawerSnap.duration,
                        ease: F.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : h.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = Y
                    } else {
                      const t = v().to(e, {
                        y: 0,
                        ease: F.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : h.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = D
                    }
                    y.current = h.y.get()
                  } const t = {
                  top: a,
                  bottom: n,
                  y: h.y,
                  offset: y,
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
                    y: h.y.get()
                  },
                  t = {};
                g.current === D ? (t.y = a, f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = W) : (g.current === W || g.current === Y) && (t.y = 0, f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = D), v().to(e, {
                  y: t.y,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    h.y.set(e.y)
                  },
                  onComplete: () => {
                    w.current = !1, y.current = h.y.get()
                  }
                })
              }
            };
          return (0, r.useMemo)((() => (0, Qe.jsxs)(xt.animated.div, {
            ...E(),
            ref: f,
            style: h ? {
              y: h.y
            } : void 0,
            className: "rockstargames-modules-gtao-license-platea30996f8fb210e2e4010c217dbf0437e",
            children: [(0, Qe.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateec1d03a84ec2e328b48748348a2f8bb4",
              onClick: P,
              "aria-hidden": "true"
            }), l]
          })), [h.y.get(), P, l])
        },
        Pt = e => {
          let {
            onClick: t
          } = e;
          return (0, Qe.jsx)("button", {
            type: "button",
            onClick: t,
            className: "rockstargames-modules-gtao-license-platea81788a7f11c282c9a7e4bceac6d4ce1",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        St = () => (0, Qe.jsx)("div", {
          className: "rockstargames-modules-gtao-license-platec116bf746553bf7c8d6b5e3b6f0b1209",
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
            className: "rockstargames-modules-gtao-license-platee9574ac462682ed4f394fb8076428ae1",
            disabled: r,
            onClick: e => (e => {
              n && n(e), s(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, Qe.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec9e74afa7b083c2db33e84befcc09927",
              children: t
            }), a && (0, Qe.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platebf69c5632ee8bf0e79067600546eb003"
            })]
          })
        },
        kt = e => {
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
            } = Je();
          return (0, r.useEffect)((() => {
            i && c.current && (c.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [i]), (0, Qe.jsxs)("dialog", {
            ref: c,
            className: "rockstargames-modules-gtao-license-plateaefb6cdd2d770689d66db28e09c748f7",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), l()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            children: [t && (0, Qe.jsx)("i", {
              className: "rockstargames-modules-gtao-license-platefc678c80791b7bec94a2c7743aefb2c4"
            }), (0, Qe.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec82a7d998d77f05fedd84c490e9c6b90",
              children: [(0, Qe.jsx)("h3", {
                children: a
              }), n && (0, Qe.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, Qe.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platee728a2fcfc9abbc5984c9245721af997",
              children: s.splice(0, 2).map((e => (0, Qe.jsx)(_t, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (c.current?.close(), void l())
              }, e.buttonText)))
            })]
          })
        },
        Tt = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, Qe.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platec8ae2c220065654efd13996c8290a0fa",
            children: [(0, Qe.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec5250ca53556e76b38b62f7732ec6e52",
              children: t
            }), (0, Qe.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec71387432404f4698fbf646c43e14c7c",
              children: a
            })]
          })
        },
        Rt = {
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
        It = "visible",
        Nt = (0, l.withTranslations)((e => {
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
              setDeletedPlateIndex: h
            } = Je(),
            {
              accessiblePlates: y,
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
              refs: z,
              three: U
            } = f,
            [$, H] = (0, r.useState)(E === me.VIEW_PLATE),
            [X, q] = (0, r.useState)([]),
            [Z, K] = (0, r.useState)(!1),
            [J, Q] = (0, r.useState)(!1),
            ee = (0, r.useRef)(null),
            te = (0, r.useRef)(null),
            ae = (0, r.useRef)(null),
            re = (0, r.useRef)(null),
            ne = (0, r.useRef)(35),
            se = (0, r.useRef)(null),
            [oe, ie] = (0, r.useState)(.4 * window.innerHeight),
            [ce, de] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [ue, fe] = (0, r.useState)(0),
            ge = (0, r.useRef)(oe),
            be = (0, r.useRef)(null),
            [he, ye] = (0, r.useState)(null),
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
            Te = E === me.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            E !== me.VIEW_PLATE && J && Q(!1)
          }), [E, J]);
          const Re = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(x) || (Re.current = x)
          }), [x]);
          const Ie = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            E && (Ie.current = E), E === me.VIEW_PLATE && (we.current = !1)
          }), [E]);
          const Ne = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            _ && (Ne.current = _)
          }), [_]), (0, r.useEffect)((() => {
            y?.[0]?.current && E === me.NEW_PLATE && Se(I(y[0].parentElement))
          }), [y, E]);
          const Oe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Pe && (Oe.current = Pe)
          }), [Pe]);
          const Ae = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (Ie.current !== me.VIEW_PLATE) return;
            const {
              renderer: r
            } = U;
            C({
              plateIndex: Re.current,
              three: U,
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
                }), 200), be.current = I(r.domElement).y)
              },
              tweenPosition: 0,
              isResize: a,
              is3D: R
            })
          }), [U, x, E, k, M, A, R, L]);
          (0, r.useEffect)((() => {
            if (!U?.controls || !$) return;
            const {
              controls: e
            } = U, t = v().timeline({
              duration: A ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
              ease: A ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            Ae(t, _, !0)
          }), [_, U]), (0, r.useEffect)((() => {
            Ee.current = j
          }), [j]);
          const Ce = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!U?.controls || !y?.[x]) return;
              const {
                controls: a
              } = U, r = e || v().timeline({
                defaults: {
                  duration: 0,
                  ease: A ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = T(), s = A && E === me.CONFIRM_ORDER ? 1.5 : 1, o = !S() || A ? n * _ * s : 1.6 * n * _, l = z[B.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = z[B.CANVAS_WRAP].current, u = y[x].current;
              if (l && c && u && d) {
                const e = N(x, l, Number(V.replace("px", "")), k, A ? void 0 : {
                    x: c.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  n = I(d),
                  s = I(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(n.x),
                    y: a.top + a.height / 2 - Number(n.y)
                  },
                  p = 5 / o,
                  f = A || i() !== me.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
                  g = {
                    x: m.x - e.x + f,
                    y: m.y - e.y - 80 + (t.isResize ? Ee.current : window.scrollY)
                  },
                  b = {
                    current: 0
                  },
                  h = y.map((e => Number(getComputedStyle(e?.current)?.getPropertyValue("opacity"))));
                r.to(b, {
                  current: 1,
                  ease: A ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                  onComplete: () => {
                    Se(I(u.parentElement))
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = b, r = (0, at.t7)(Number(s.x), g.x, a), n = (0, at.t7)(Number(s.y), g.y + (A ? .4 * window.innerHeight / -2 : 0), a), o = (0, at.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${o})`, t.isResize || y.forEach(((e, t) => {
                      if (t !== x && e?.current) {
                        const r = (0, at.t7)(h[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r.toFixed(2)
                      }
                    }))
                  }
                }, "<")
              }
            }), [x, k, A, E, V, U, y, z, oe, j]),
            Le = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
              if (!U?.camera || !ee.current) return;
              const {
                camera: t,
                controls: a,
                renderer: r
              } = U;
              if (v().to(t.position, {
                  x: Number(ee.current.x),
                  y: Number(ee.current.y),
                  z: Number(ee.current.z),
                  ease: F.toggleView.camera.ease,
                  duration: F.toggleView.camera.duration,
                  onStart: () => {
                    a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1, a.current.enabled = !1)
                  },
                  onComplete: () => {
                    i(me.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.maxPolarAngle = G.plateView.maxPolarAngle, a.current.minPolarAngle = G.plateView.minPolarAngle, a.current.maxAzimuthAngle = G.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = G.plateView.minAzimuthAngle, a.current.enableZoom = !1), ge.current = 0, e?.onComplete && e.onComplete()
                  }
                }), A) {
                const e = r.domElement;
                v().to(e.style, {
                  opacity: 1,
                  duration: F.toggleView.reset.duration,
                  ease: F.toggleView.reset.ease
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
            }), [A, U, ee]);
          (0, r.useEffect)((() => {
            m(B.VIEW_PLATE, se)
          }), [se.current]), (0, r.useEffect)((() => {
            q(M?.[x]?.vehicles ?? [])
          }), [x, M]), (0, r.useEffect)((() => {
            H(E === me.VIEW_PLATE)
          }), [E]), (0, r.useEffect)((() => {
            U?.scene && re?.current && (e => {
              const {
                scene: t,
                controls: a
              } = U, r = [];
              t.traverse((e => {
                e.name === pe.LP && r.push(e), e.userData.index === Number(x) && (te.current = e)
              }));
              const n = v().timeline({
                defaults: {
                  duration: A ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                  ease: A ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease
                },
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              switch (e) {
                case It: {
                  Ae(n, Ne.current, !1);
                  const e = z[B.ROOT]?.current,
                    t = z[B.SIDEBAR]?.current,
                    a = y[x].current,
                    r = z?.[B.CANVAS_WRAP]?.current;
                  e && t && a && r && Ce(n), xe?.current && n.to([re.current, xe.current, A ? void 0 : ae.current], {
                    autoAlpha: 1,
                    duration: F.sidebar.in.duration,
                    ease: F.sidebar.in.ease,
                    delay: F.sidebar.in.delay,
                    onComplete: () => {
                      xe?.current && (xe.current.style.pointerEvents = "all"), ae?.current && (ae.current.style.pointerEvents = "all")
                    }
                  }, 0), U?.camera && A && !ne.current && (ne.current = U.camera.fov);
                  break
                }
                default:
                  ae.current && v().to(ae.current, {
                    pointerEvents: "none"
                  }), re.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(re.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay
                  }), !A && ae.current ? (v().to(ae.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay
                  }), v().to(xe.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay,
                    onComplete: () => {
                      xe.current.style.pointerEvents = "none"
                    }
                  })) : v().to(xe.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay,
                    onComplete: () => {
                      xe.current.style.pointerEvents = "none"
                    }
                  }), a?.current && (a.current.minDistance = 0)
              }
            })($ ? It : "hidden")
          }), [xe.current, U, $]);
          const je = (0, r.useCallback)((() => {
            if (A && se.current) {
              const e = se.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              fe(a - 48 - t), ie(a), de(-1 * (.6 * e - 80))
            }
          }), [A, se.current]);
          (0, r.useEffect)((() => {
            je()
          }), [A, se.current]);
          const Me = (0, r.useRef)(null),
            Ve = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Me.current = $
          }), [$]), (0, r.useEffect)((() => {
            Ve.current = U
          }), [U]);
          const De = (0, r.useCallback)(b().debounce((() => {
            if (!0 !== Me.current) return;
            const {
              renderer: e
            } = Ve.current;
            Ie.current === me.VIEW_PLATE && (P() ? e.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : e.domElement.style.transform = "translateY(0px)", ae?.current && (ae.current.style.opacity = "1", ae.current.style.visibility = "visible", ae.current.style.pointerEvents = "all"), Ce(null, {
              isResize: !0
            }), je())
          }), 100), [A, $, E, U, ce, V, k]);
          (0, r.useEffect)((() => {
            _ && (Ne.current = _), i() === me.VIEW_PLATE ? De() : P() && (je(), ye(.4 * window.innerHeight))
          }), [_]), (0, r.useEffect)((() => {
            if (!U?.scene) return;
            if (!U?.scene || !y?.[0]?.current) return;
            const {
              scene: e
            } = U, t = [], a = [], r = y[x].current;
            if (e.traverse((e => {
                e.name === pe.LP && e.material ? a[e.userData.index] = e.material : t.push(e.material)
              })), i() === me.VIEW_PLATE)
              if (R) {
                const t = a[x];
                if (v().to(t, {
                    opacity: 1,
                    delay: A ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                    duration: A ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                    ease: A ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                    onStart: () => {
                      c(!0), v().to(r.style, {
                        opacity: 0,
                        duration: F.accessibilePlate.duration,
                        ease: F.accessibilePlate.ease,
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
                    delay: A ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                    duration: F.plateShimmer.duration,
                    ease: F.plateShimmer.ease
                  }));
                  const r = {
                    current: 0
                  };
                  v().to(r, {
                    current: 1,
                    delay: A ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                    duration: F.plateShimmer.duration,
                    ease: F.plateShimmer.ease,
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
                  duration: F.accessibilePlate.duration,
                  ease: F.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: F.accessibilePlate.duration,
                      ease: F.accessibilePlate.ease,
                      onComplete: () => {
                        c(!1)
                      }
                    })
                  }
                })
              }
          }), [R, A, U]);
          const We = (0, Qe.jsxs)(Qe.Fragment, {
              children: [!A && (0, Qe.jsx)("hr", {
                className: Rt.drawerHandle,
                onClick: () => {
                  u(!O)
                },
                "aria-hidden": "true"
              }), (0, Qe.jsx)("div", {
                className: Rt.plateInfo,
                children: (0, Qe.jsxs)("section", {
                  className: Rt.vehiclesApplied,
                  children: [(0, Qe.jsx)("label", {
                    htmlFor: "vehicles",
                    className: X.length ? "" : `${Rt.noVehicles}`,
                    children: X.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, Qe.jsx)("div", {
                    className: Rt.vehicles,
                    children: X.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, Qe.jsx)(Tt, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            Ye = (0, r.useCallback)((e => {
              if (!U) return;
              const {
                drawerStateRef: t
              } = e, a = y?.[0].current;
              if (a) {
                const e = I(a.parentElement),
                  {
                    renderer: r,
                    camera: n
                  } = U,
                  s = r.domElement,
                  o = {
                    buttonWrapOpacity: ve.current.style.opacity,
                    buttonWrapTranslateY: I(ve.current).y,
                    canvasWrapOpacity: s.style.opacity,
                    canvasHeight: s.offsetHeight,
                    canvasTranslateY: Number(I(s).y),
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
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    s.style.opacity = o.canvasWrapOpacity, ve.current.style.opacity = o.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${o.buttonWrapTranslateY}px)`, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), n.fov = o.fov, n.updateProjectionMatrix(), s.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [U, oe, ce, y]),
            Be = (0, r.useCallback)((e => {
              if (!U) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: o,
                renderer: i
              } = U, l = i.domElement, c = y?.[0]?.current, d = -ce + .4 * window.innerHeight - 48;
              if (c)
                if (t.dragging) {
                  const e = (0, at.ii)(0, n, r.get()),
                    i = (0, at.t7)(0, 1, 1 - e);
                  l.style.opacity = i, ve.current.style.opacity = i, ve.current.style.transform = `translateY(${r.get()}px)`;
                  const d = (0, at.t7)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < s) {
                    const e = (0, at.ii)(0, s, r.get()),
                      a = (0, at.t7)(ne.current, 40, e);
                    o.fov = a;
                    const n = Number(I(l).y) + t.delta[1] / 2;
                    if (l.style.transform = `translateY(${n}px)`, c) {
                      const e = I(c.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(I(c.parentElement).y) + t.delta[1] / 2;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                    o.updateProjectionMatrix()
                  }
                } else {
                  const e = {
                    buttonWrapOpacity: ve.current.style.opacity,
                    canvasWrapOpacity: l.style.opacity,
                    fov: o.fov,
                    uiButtonsTransformY: I(ve.current).y,
                    canvasHeight: l.offsetHeight,
                    canvasTranslateY: Number(I(l).y),
                    accessibilityPlateY: Number(I(c.parentElement).y),
                    accessibilityPlateOpacity: c.parentElement.style.opacity
                  };
                  a.current < ce / 2 ? (l.style.pointerEvents = "none", v().to(e, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    uiButtonsTransformY: ce,
                    canvasHeight: d,
                    accessibilityPlateOpacity: 0,
                    duration: F.sidebar.mobile.drawerSnap.duration,
                    ease: F.sidebar.mobile.drawerSnap.ease,
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
                    duration: F.sidebar.mobile.drawerSnap.duration,
                    ease: F.sidebar.mobile.drawerSnap.ease,
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
                    duration: F.sidebar.mobile.drawerSnap.duration,
                    ease: F.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      l.style.opacity = e.canvasWrapOpacity, ve.current.style.opacity = e.buttonWrapOpacity, ve.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px`, c.parentElement.style.opacity = e.accessibilityPlateOpacity, o.fov = e.fov, o.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`;
                      const t = I(c.parentElement),
                        a = Number(t.x),
                        r = Number(t.scale),
                        n = e.accessibilityPlateY;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }))
                }
            }), [U, ve.current, ce, y, oe, Pe]),
            ze = (0, r.useCallback)((e => {
              const t = z[B.UI]?.current;
              if (!t || !U?.scene || !e) return;
              const {
                camera: a,
                renderer: r
              } = U, n = r.domElement, {
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
                duration: F.sidebar.mobile.drawer.duration,
                ease: F.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${l.mobileSidebarHeight}px)`, o.current.style.opacity = l.opacity, ve.current.style.opacity = l.opacity, n.style.height = l.height, s.set(l.mobileSidebarHeight), a && (a.fov = l.fov, a.updateProjectionMatrix())
                },
                onComplete: () => {
                  n.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [z, U, oe]),
            Ue = (0, r.useCallback)((e => {
              if (!U?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === he && ye(r);
              const {
                renderer: n
              } = U;
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
                duration: F.sidebar.mobile.drawer.duration,
                ease: F.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), ve.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, xe.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [he, U]),
            $e = (0, r.useMemo)((() => A ? (0, Qe.jsx)(Et, {
              isVisible: $,
              top: ce,
              bottom: ue,
              onTap: Ye,
              onDrag: Be,
              onHide: ze,
              onShow: Ue,
              mobileSidebarHeight: oe,
              children: We
            }) : (0, Qe.jsx)("div", {
              ref: ae,
              className: Rt.sidebar,
              children: We
            })), [ve.current, xe.current, O, oe, A, $, z, ae.current, X, ce, ue]);
          return (0, Qe.jsxs)("div", {
            className: Rt.viewPlate,
            ref: se,
            children: [(0, Qe.jsx)(kt, {
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
                      r && h(x), Le()
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
            }), $e, (0, Qe.jsxs)("div", {
              ref: re,
              className: Rt.ui,
              children: [(0, Qe.jsx)(Pt, {
                onClick: Le
              }), (0, Qe.jsx)(xt.animated.div, {
                ref: ve,
                className: Rt.uiBottom,
                style: he ? {
                  y: he
                } : void 0,
                children: (0, Qe.jsx)(St, {})
              })]
            }), (0, Qe.jsxs)("div", {
              className: Rt.deleteBtnContainer,
              ref: xe,
              children: [(0, Qe.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: Rt.deleteBtn,
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
              }), w?.noDelete && (0, Qe.jsx)("label", {
                htmlFor: "nodelete",
                className: Rt.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        Ot = (0, l.withTranslations)((e => {
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
          }), (0, Qe.jsx)("p", {
            className: "rockstargames-modules-gtao-license-plated8dc05f054396924b408e16dea1c411f rockstargames-modules-gtao-license-platef12013d76eb62b07523fe96d62fef0f1 " + (!1 === r ? "rockstargames-modules-gtao-license-plateb5883ece595313dbdebb2bdcc0f19992" : ""),
            children: n(i)
          })
        })),
        At = {
          lpStyleOption: "rockstargames-modules-gtao-license-platef9c4c46735ea44a8fd03b964aa9cfdd1",
          selected: "rockstargames-modules-gtao-license-platecb72e49e43291fc3fa35d73ebc93a020",
          lpStyleOptionImage: "rockstargames-modules-gtao-license-platea848dacaa90a9ece96907bdfb6e97a30"
        },
        Ct = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: n,
            setSelectedStyle: s
          } = Je(), {
            plates: o,
            selectedStyle: i
          } = n, l = (0, r.useCallback)((() => {
            U.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [o, t]);
          return (0, Qe.jsx)("button", {
            className: [At.lpStyleOption, i === t.id ? At.selected : ""].join(" "),
            onClick: () => l(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, Qe.jsx)("img", {
              className: At.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        Lt = (0, l.withTranslations)((e => {
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
          } = Je(), {
            currentView: b,
            plateStyles: h,
            plateNumber: y,
            plateNumberStatus: v,
            isMobile: x,
            xmas23PlatesAllowed: w
          } = g, [E, P] = (0, r.useState)(0), {
            isValid: S
          } = v, _ = (0, r.useMemo)((() => y), [y]), {
            track: k
          } = (0, o.useGtmTrack)(), T = {
            view_name: "license plate creator - " + (i ? "create plate form" : "try lp editor")
          }, R = (0, r.useRef)(null), I = (0, r.useRef)(null), N = (0, r.useRef)(null), O = (0, r.useRef)(null), A = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            f(B.NEW_PLATE_FORM, N)
          }), [N.current]), (0, r.useEffect)((() => {
            b === me.NEW_PLATE && document.activeElement === A.current && A.current?.setSelectionRange(E, E)
          }), [E]);
          const C = b === me.NEW_PLATE ? 0 : -1,
            L = (0, r.useCallback)((() => {
              (async () => {
                if (i && y) try {
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
                      plateText: y
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
                    statusPlateNumberBasis: y
                  }), o && (d(me.CONFIRM_ORDER), k({
                    ...T,
                    event: "virtualPageview",
                    display_type: x ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  p(["api", e])
                }
              })()
            }), [i, y]);
          let j;
          return (0, r.useEffect)((() => {
            a && (a.current = L)
          }), [L, a]), j = (0, r.useMemo)((() => h?.filter((e => !e.isXmas2023Plate || e.isXmas2023Plate && w)).map((e => (0, Qe.jsx)(Ct, {
            style: e,
            tabIndex: C
          }, e.id)))), [h, b]), (0, Qe.jsxs)("form", {
            ref: N,
            className: "rockstargames-modules-gtao-license-plated0ddb8fd0986a7382551faea1fad24fa",
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
                className: "rockstargames-modules-gtao-license-plateef9da71cf1e6161bfcff7856d32e9639",
                children: [(0, Qe.jsx)("i", {
                  className: "" + (!1 === S ? "rockstargames-modules-gtao-license-platec748df3952867c76489727613f414305" : "")
                }), (0, Qe.jsx)("input", {
                  id: "plate-text-input",
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: e => {
                    const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
                    u(t), P(e.target.selectionStart || 0), v.isValid || m({
                      isValid: !0,
                      isMalformed: !1,
                      isProfane: !1,
                      isReserved: !1,
                      statusPlateNumberBasis: y
                    })
                  },
                  placeholder: "LOSANTOS",
                  pattern: "[a-zA-Z0-9]{4,10}",
                  type: "text",
                  onKeyDown: e => {
                    "Enter" === e.code && A.current && A.current.blur()
                  },
                  value: _,
                  ref: A
                }), (0, Qe.jsx)(Ot, {
                  plateNumberStatus: v
                })]
              })]
            }), (0, Qe.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateadd724ae5e86972d7020c3691280e5f6"
            }), (0, Qe.jsxs)("section", {
              children: [(0, Qe.jsx)("label", {
                htmlFor: "plate-style-selector",
                children: n("lp.create.bgselector")
              }), (0, Qe.jsx)("div", {
                id: "plate-style-selector",
                ref: O,
                className: "rockstargames-modules-gtao-license-platecca6b8628101d08d64c8c82655607660",
                children: j
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
          const o = (0, r.useRef)(null),
            {
              setRefs: i
            } = Je();
          return (0, r.useEffect)((() => {
            i(a, o)
          }), [o.current]), (0, Qe.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platecf91a67855e8fd02c5c67f9329f2e17a",
            ref: o,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, Qe.jsx)("button", {
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
        Mt = "rockstargames-modules-gtao-license-plateb8ee1e50e3ee7d2a0c64ff5766f1d90d",
        Vt = "rockstargames-modules-gtao-license-platef5a6ad5cfb833ab500b3a27252e51e07",
        Dt = (0, l.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            is3DToggle: a = !1,
            t: n
          } = e;
          const [s, i] = (0, r.useState)(!1), [l, c] = (0, r.useState)(!1), {
            state: d,
            setRefs: u
          } = Je(), {
            currentView: m,
            isMobile: p,
            is3D: f,
            shouldForce2D: g
          } = d, {
            track: b
          } = (0, o.useGtmTrack)(), h = {
            view_name: "license plate creator - create plate form"
          }, y = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            a || u(B.TOGGLE_VIEW_BUTTON, y)
          }), [y.current, a]), (0, r.useEffect)((() => {
            m === me.NEW_PLATE && g && i(!1)
          }), [g, m]), (0, r.useEffect)((() => {
            a || (m === me.NEW_PLATE ? s ? (b({
              ...h,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop",
              view_name: "license plate creator - car view"
            }), b({
              ...h,
              event: "license_plate_preview_car",
              event_category: "license_plate",
              event_action: "preview_car",
              text: n("lp.create.carview").toLowerCase()
            })) : b({
              ...h,
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
          return (0, Qe.jsxs)("button", {
            ref: y,
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
            children: [(0, Qe.jsx)("div", {
              className: Mt,
              children: (0, Qe.jsx)("p", {
                className: l ? Vt : "",
                children: a ? v.dimensionToggle.twoDimensions : v.carViewToggle.plateView
              })
            }), (0, Qe.jsx)("div", {
              className: Mt,
              children: (0, Qe.jsx)("p", {
                className: l ? Vt : "",
                children: a ? v.dimensionToggle.threeDimensions : v.carViewToggle.carView
              })
            }), (0, Qe.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platecb346dd2e906d02e1fbafcc66427844f"
            })]
          })
        })),
        Wt = {
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
        Yt = (0, l.withTranslations)((e => {
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
          } = Je(), {
            currentView: p,
            isExpanded: f,
            refs: g,
            three: b,
            isMobile: h,
            accessiblePlates: x
          } = m, w = (0, r.useRef)(null), E = (0, r.useRef)(null), P = (0, r.useRef)(null), S = (0, r.useRef)(null), k = (0, r.useRef)(null), {
            track: T
          } = (0, o.useGtmTrack)(), R = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(B.ORDER_BG, k)
          }), [k.current]);
          const I = g[B.CONFIRM_CONTENT]?.current,
            N = g[B.CONFIRM_SIDEBAR]?.current,
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
            z = g[B.UI]?.current,
            U = g[B.NEW_PLATE_UI]?.current,
            $ = g[B.SIDEBAR]?.current,
            G = g[B.ACCESSIBLE_PLATE_GRID]?.current,
            X = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            X.current = x
          }), [x]);
          const q = (0, r.useCallback)((() => {
            c(me.LIST_PLATES), T({
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
            if (!(e && M && I && G)) return;
            const c = _();
            if (f && p === me.LIST_PLATES) {
              const t = v().timeline({
                defaults: {
                  ease: F.transaction.confirmOrder.ease,
                  duration: F.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (v().to([e.domElement, $], {
                  autoAlpha: 1,
                  ease: F.transaction.fade.landingPage.ease,
                  duration: F.transaction.fade.landingPage.duration
                }), h) {
                const e = {
                  opacity: 1
                };
                t.to(e, {
                  drawerHeight: s,
                  opacity: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const t = s - i.get();
                    M.style.transform = `translateY(${t}px)`, M.style.opacity = e.opacity
                  }
                }, 0)
              } else t.to(M, {
                autoAlpha: 0
              }, 0).to([V, D, W], {
                autoAlpha: 0
              }), t.to(I, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), t.to(M, {
                x: "-100vw"
              }, 0), v().set([C, U], {
                x: 0
              }), v().set(N, {
                left: "revert"
              })
            } else if (t) {
              const t = v().timeline({
                defaults: {
                  ease: F.transaction.confirmOrder.ease,
                  duration: F.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), v().set(L, {
                    x: 0
                  }), b.scene.traverse((e => {
                    e.name === pe.LP && 0 === e.userData.index && e.material && (e.material.opacity = 0)
                  })), a.position.set(r.x, r.y, r.z), o?.current && (o.current.minDistance = 0, o.current.target.set(l.x, l.y, l.z)), z && (a.fov = n, a.updateProjectionMatrix(), H.saturation.value = 0)
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
                  ease: y.Power1.easeIn,
                  duration: .3
                }, "<1").to(Y, {
                  height: "auto",
                  ease: y.Power2.easeInOut,
                  duration: .4
                }, "<1").to([D, W], {
                  autoAlpha: 1,
                  ease: y.Power1.easeIn,
                  duration: .3,
                  stagger: .1
                }, "<0.2"), h) {
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
              } else t.to(I, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(M, {
                x: 0
              }, 0).to(M, {
                autoAlpha: 1
              }, 0).to(N, {
                autoAlpha: 0,
                ease: F.transaction.fade.out.ease,
                duration: F.transaction.fade.out.duration
              }, 0).set(M, {
                pointerEvents: "all"
              }), N && t.to(N, {
                left: 100 - c + "vw"
              }, 0);
              T({
                ...R,
                event: "virtualPageview",
                display_type: h ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, k.current, b, p, h ? i : void 0]), (0, Qe.jsx)("div", {
            className: [Wt.orderConfirmed, f ? Wt.visible : ""].join(" "),
            children: (0, Qe.jsx)("div", {
              ref: k,
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
                    tabIndex: l,
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
        Bt = (0, l.withTranslations)((e => {
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
          } = Je(), {
            currentView: g,
            selectedVehicle: b,
            pendingOrder: y,
            plates: w,
            three: E,
            isMobile: P,
            refs: S,
            vehicles: k,
            selectedStyle: T,
            isOrderConfirmed: R,
            isExpanded: N
          } = i, {
            selectedCharacterTuple: O
          } = (0, o.useRockstarUserState)(), {
            loggedIn: A
          } = (0, o.useRockstarUser)(), C = (0, s.useRockstarTokenPing)(), L = g === me.CONFIRM_ORDER, [j, M] = (0, r.useState)(N), [V, D] = (0, r.useState)(!1), W = (0, r.useRef)(null), Y = (0, r.useRef)(null), {
            track: z
          } = (0, o.useGtmTrack)(), U = {
            view_name: "license plate creator - confirm order"
          }, $ = g === me.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p(B.CONFIRM_SIDEBAR, W)
          }), [W.current]), (0, r.useEffect)((() => {
            p(B.CONFIRM_CONTENT, Y)
          }), [Y.current]);
          const H = S[B.ORDER_BG]?.current,
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
            if (z({
                ...U,
                event: "virtualPageview",
                display_type: P ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(E?.camera && G && X && Q && H && K)) return;
            const e = {
                ease: P ? F.sidebar.mobile.drawer.ease : F.transaction.confirmOrder.ease,
                duration: P ? F.sidebar.mobile.drawer.duration : F.transaction.confirmOrder.duration
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
            }, 0), g === me.NEW_PLATE && t.to(J, {
              autoAlpha: 1
            }, "<"), t.to([J, Q, te], {
              x: 0
            }, "<"), t.to(G, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            g === me.LIST_PLATES && j && ae()
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
            if (g !== me.CONFIRM_ORDER || R) {
              if (P && !R) {
                ee && v().set(ee, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                v().to(e, {
                  lerp: 1,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    Z && (Z.style.opacity = "" + (1 - e.lerp), Z.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), X && v().to(X, {
                  autoAlpha: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
                }), q && (q.style.pointerEvents = "none", v().to(q.style, {
                  opacity: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(E?.camera && G && X && Q && H && K)) return;
              let e = _();
              P || 100 !== e || (e = 0);
              const t = v().timeline({
                  defaults: {
                    ease: F.transaction.confirmOrder.ease,
                    duration: F.transaction.confirmOrder.duration
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
                }), P && (a.ease = F.sidebar.mobile.drawer.ease, a.duration = F.sidebar.mobile.drawer.duration, a.delay = F.sidebar.mobile.drawer.duration / 2, r.ease = F.sidebar.mobile.drawer.ease, r.duration = F.sidebar.mobile.drawer.duration, X && t.to(X, a, 0), K)) {
                const e = {
                    current: 0
                  },
                  a = {
                    start: Number(getComputedStyle(K).opacity),
                    end: 1
                  };
                t.to(e, {
                  current: 1,
                  delay: F.sidebar.mobile.drawer.duration / 2,
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
                    duration: F.sidebar.mobile.drawer.duration,
                    ease: F.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Z.style.opacity = e.lerp, Z.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                q && (q.style.pointerEvents = "all", v().set(q.style, {
                  visibility: "visible"
                }), v().to(q.style, {
                  opacity: 1,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
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
                  } = I(K), s = {
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
                      } = o, t = `translate(${(0,at.t7)(s.x.start,s.x.end,e)}px, ${(0,at.t7)(s.y.start,s.y.end,e)}px) scale(${(0,at.t7)(s.scale.start,s.scale.end,e)})`;
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
                }, "<"), t.set(H, {
                  x: `${-100+e}vw`
                }, "<")
              }
            }
            j && !L && R && u(!1)
          }), [E, g, P, Z, R, q, _()]), (0, r.useEffect)((() => {
            if (g !== me.CONFIRM_ORDER && k?.length) {
              let e = k[0];
              y && (e = k.find((e => {
                let {
                  manufacturer: t,
                  name: a
                } = e;
                return t === y.manufacturerName && a === y.vehicleName
              }))), f(e)
            }
          }), [k, y]);
          const ne = (0, r.useCallback)((e => {
              if (!k?.length) return;
              const t = k.find((t => {
                let {
                  id: a
                } = t;
                return a === Number(e.target.value)
              })) ?? null;
              f(t), z({
                ...U,
                event: "license_plate_select_vehicle",
                event_category: "license_plate",
                event_action: "select_vehicle",
                position: e.target.selectedIndex
              })
            }), [k]),
            se = (0, Qe.jsx)(jt, {
              refName: B.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: V,
                onClick: () => {
                  d(me.NEW_PLATE), ae(), z({
                    ...U,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: t("lp.confirm.cancel").toLowerCase()
                  })
                }
              }, {
                buttonText: V ? (0, Qe.jsx)(h.LoadingAnimation, {}) : t("lp.confirm.next"),
                isDisabled: !A || !b || V,
                onClick: () => {
                  re(), z({
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
              tabIndex: $
            });
          let oe;
          return P && (oe = q ? (0, vt.createPortal)(se, q) : null), (0, Qe.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platea29469cb6841adfdb317c0863c552ee1",
            "aria-hidden": g !== me.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, Qe.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateab4356b7d6ef5a4a6201db746fc5a985",
              ref: Y,
              children: [(0, Qe.jsx)("span", {}), (0, Qe.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateccf3da9613752077116fd5ec0338c7a9",
                ref: W,
                children: [(0, Qe.jsxs)("form", {
                  className: "rockstargames-modules-gtao-license-platef11b2e09ddb486e97daf0b4e6d31e0a0",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, Qe.jsxs)("div", {
                    className: "rockstargames-modules-gtao-license-plateac9d03dae4df339b590e83d075364ece",
                    children: [(0, Qe.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, Qe.jsxs)("section", {
                      children: [(0, Qe.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, Qe.jsx)("div", {
                        className: "rockstargames-modules-gtao-license-platece60e8e785ccb4092aab63da0a0cf30c",
                        children: (0, Qe.jsx)("select", {
                          value: b?.id ?? "null",
                          onChange: ne,
                          required: !0,
                          tabIndex: $,
                          "aria-label": t("lp.confirm.selector"),
                          children: k?.map(((e, t) => {
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
                        className: "rockstargames-modules-gtao-license-platedbaabca0190273add141f7d25c2ed3ed",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, Qe.jsx)("p", {
                    className: "rockstargames-modules-gtao-license-plateb5fcb2ced6788958d5dbbc1284fbbda3",
                    children: t("lp.confirm.info")
                  })]
                }), P ? oe : se]
              }), (0, Qe.jsx)(Yt, {
                drawerY: n,
                top: a,
                isVisible: R,
                vehicleModel: `${b?.manufacturer} ${b?.name}`,
                tabIndex: R ? $ : -1
              })]
            })
          })
        })),
        zt = {
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
        Ut = "hidden",
        $t = "visible",
        Ht = (0, l.withTranslations)((e => {
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
          } = Je(), {
            loggedIn: p
          } = (0, o.useRockstarUser)(), {
            accessiblePlates: f,
            currentView: g,
            gridScale: b,
            gridState: y,
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
            realHeight: z,
            shouldForce2D: U
          } = s, [$, X] = (0, r.useState)(0), [q, Z] = (0, r.useState)(!1), [ae, re] = (0, r.useState)(!1), [se, oe] = (0, r.useState)(.4 * window.innerHeight), [ie, fe] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), ge = (0, r.useRef)(se), [be, he] = (0, r.useState)(null), [ye, ve] = (0, r.useState)(!1), [xe, we] = (0, r.useState)(null), Ee = (0, r.useRef)(null), Pe = (0, r.useRef)(null), Se = (0, r.useRef)(null), _e = (0, r.useRef)(null), ke = (0, r.useRef)(null), Te = (0, r.useRef)(!1), Re = (0, r.useRef)(!1), [Ie, Ne] = (0, r.useState)(null), Oe = (0, r.useRef)(Ie), Ae = (0, r.useRef)(null), Ce = (0, r.useRef)(null), Le = (0, r.useRef)(null), je = (0, r.useRef)(null), Me = (0, r.useRef)(null), Ve = (0, r.useRef)(null), De = (0, r.useRef)(null), We = (0, r.useRef)(null), Ye = (0, r.useRef)(null), Be = (0, r.useRef)(null), ze = (0, r.useRef)(null), Ue = (0, r.useRef)(null), {
            track: $e
          } = (0, o.useGtmTrack)(), He = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            f?.[0]?.current && g === me.NEW_PLATE && we(I(f[0].parentElement))
          }), [f, g]);
          const Fe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            xe && (Fe.current = xe)
          }), [xe]), (0, r.useEffect)((() => {
            const e = g === me.NEW_PLATE || !(!P() || g !== me.CONFIRM_ORDER);
            q !== e && Z(e), e || ve(!1)
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
              l = E && g === me.CONFIRM_ORDER ? 1.5 : 1,
              u = !S() || E ? i * b * l : 1.6 * i * b,
              m = [];
            a.traverse((e => {
              0 === e.userData.index && (ze.current = e, o.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === pe.LP && m.push(e)
            }));
            const h = E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
              y = v().timeline({
                defaults: {
                  duration: h,
                  ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease
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
                ze?.current && ze.current.getWorldPosition(o);
                const i = M[B.ROOT].current,
                  h = document.getElementById("list-plates-sidebar"),
                  x = M[B.CANVAS_WRAP].current,
                  P = f?.[0].current;
                i && (h || E) && P && x && (g === me.NEW_PLATE || E && g === me.CONFIRM_ORDER) && qe(y, t);
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
                    start: O === me.LIST_PLATES ? .2 : 1,
                    end: 1
                  },
                  cameraFov: {
                    start: r.fov,
                    end: E && g === me.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  },
                  ctaShaderOpacity: {
                    start: e.style.opacity,
                    end: 0
                  }
                };
                if (E && P) {
                  const e = I(P.parentElement);
                  T.translateY = {
                    start: g === me.NEW_PLATE ? Ue?.current?.offsetHeight : 0,
                    end: g === me.NEW_PLATE ? 0 : Ue?.current?.offsetHeight
                  }, T.startingDrawerHeight = Ee.current ? Ee.current.get() : 0, T.startingCanvasHeight = Number(I(s.domElement).y), T.canvasWidth = s.domElement.offsetWidth, T.canvasY = {
                    start: Number(I(s.domElement).y),
                    end: .4 * window.innerHeight / -2
                  }, T.canvasYConfirmOrder = {
                    start: Number(I(s.domElement).y),
                    end: ie / 1.5
                  }, T.accessiblePlateGridYConfirmOrder = {
                    start: Number(e.y),
                    end: Number(e.y) + (T.canvasYConfirmOrder.end - T.canvasYConfirmOrder.start)
                  }, T.accessiblePlateGridXConfirmOrder = {
                    start: Number(e.x),
                    end: Number(e.x)
                  }, T.accessiblePlateGridScaleConfirmOrder = {
                    start: Number(I(P.parentElement).scale),
                    end: Number(I(P.parentElement).scale) / l
                  }, T.drawerHeight = {
                    start: Ee.current ? Ee.current.get() : 0,
                    end: g === me.NEW_PLATE ? 0 : ie / (_ ? 1 : 2)
                  }, T.cameraFov = {
                    start: r.fov,
                    end: g === me.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  }, T.canvasOpacity = {
                    start: s.domElement.style.opacity,
                    end: 1
                  }
                }
                const R = {
                  current: 0
                };
                if (g === me.NEW_PLATE) {
                  const o = P.querySelector("canvas");
                  y.to(R, {
                    current: 1,
                    duration: E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                    ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                    onUpdate: () => {
                      const a = t ? 1 : R.current,
                        i = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, a);
                      r.position.set(i.x, i.y, i.z);
                      const l = T.controlsTarget.start.clone().lerp(T.controlsTarget.end, a);
                      n.current.target.x = l.x, n.current.target.y = l.y, n.current.target.z = l.z, m.forEach(((e, t) => {
                        e.material && (e.material.opacity = (0, at.t7)(T.plateOpacity[t].start, T.plateOpacity[t].end, a))
                      }));
                      const c = (0, at.t7)(T.firstPlateSaturation.start, T.firstPlateSaturation.end, a);
                      if (H.saturation.value = c, p && !A && o) {
                        const e = !!A,
                          t = (0, at.t7)(T.firstPlateOpacity.start, T.firstPlateOpacity.end, a);
                        o.style.filter = `saturate(${c})${!e&&` opacity(${t})`}`
                      }
                      if (e) {
                        const t = (0, at.t7)(T.ctaShaderOpacity.start, T.ctaShaderOpacity.end, a);
                        e.style.opacity = t
                      }
                      if (T.cameraFov.start !== T.cameraFov.end && r.updateProjectionMatrix(), E) {
                        if (Ue.current) {
                          const e = (0, at.t7)(T.translateY.start, T.translateY.end, a);
                          Ue.current.style.transform = `translateY(${e}px)`, Ue.current.style.opacity = String(a), Ue.current.style.pointerEvents = "all"
                        }
                        Ee.current && Ee.current.set((0, at.t7)(T.drawerHeight.start, T.drawerHeight.end, a));
                        const e = (0, at.t7)(T.canvasY.start, T.canvasY.end, a);
                        s.domElement.style.transform = `translateY(${e}px)`
                      }
                    },
                    onStart: () => {
                      E ? document.body.style.touchAction = "none" : c(!1)
                    },
                    onComplete: () => {
                      g === me.NEW_PLATE && (i && (i.style.touchAction = "none"), _e.current = new d.Vector3(r.position.x, r.position.y, r.position.z), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      })), E && (s.domElement.style.touchAction = "none", k && setTimeout((() => {
                        c(!1), document.body.style.touchAction = "auto"
                      }), 200), Se.current = I(s.domElement).y), o && o.classList.remove(zt.newOrder), s.render(a, r))
                    }
                  }, 0), E && y.to(M[B.NEW_PLATE_FORM].current, {
                    autoAlpha: 1,
                    duration: t ? 0 : F.sidebar.mobile.drawer.duration,
                    ease: F.sidebar.mobile.drawer.ease,
                    delay: F.sidebar.mobile.drawer.duration / 2,
                    onStart: () => {
                      Ue.current && (Ue.current.style.pointerEvents = "all", Ue.current.style.visibility = "visible")
                    }
                  }, 0), y.to([Ve.current, E ? void 0 : Me.current], {
                    autoAlpha: 1,
                    duration: t ? 0 : F.sidebar.in.duration,
                    ease: F.sidebar.in.ease,
                    delay: F.sidebar.in.delay,
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
                } else g === me.CONFIRM_ORDER && (!0 === Oe.current && it(), E && (y.to(R, {
                  current: 1,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = R;
                    if (Ue.current) {
                      Ee.current && Ee.current.set((0, at.t7)(T.drawerHeight.start, T.drawerHeight.end, e));
                      const t = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, e);
                      r.position.set(t.x, t.y, t.z), s.domElement.style.opacity = (0, at.t7)(T.canvasOpacity.start, T.canvasOpacity.end, e), Ve?.current?.style && (Ve.current.style.opacity = String(1 - e));
                      const a = (0, at.t7)(T.translateY.start, T.translateY.end, e);
                      Ue.current.style.transform = `translateY(${a}px)`, Ue.current.style.pointerEvents = "none";
                      const n = (0, at.t7)(T.canvasYConfirmOrder.start, T.canvasYConfirmOrder.end, e);
                      s.domElement.style.transform = `translateY(${n}px)`;
                      const o = (0, at.t7)(T.accessiblePlateGridXConfirmOrder.start, T.accessiblePlateGridXConfirmOrder.end, e),
                        i = (0, at.t7)(T.accessiblePlateGridYConfirmOrder.start, T.accessiblePlateGridYConfirmOrder.end, e),
                        l = (0, at.t7)(T.accessiblePlateGridScaleConfirmOrder.start, T.accessiblePlateGridScaleConfirmOrder.end, e);
                      P?.parentElement && (P.parentElement.style.transform = `translate(${o}px,\n                                        ${i}px) scale(${l})`)
                    }
                  }
                }, 0), y.to(M[B.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(Ve.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay
                  }), E && Ue?.current) {
                  const e = {
                    transform: 0,
                    translateY: I(Ue.current).y,
                    drawerHeight: Ee.current ? Ee.current.get() : 0,
                    fov: r.fov
                  };
                  v().to(e, {
                    translateY: Ue?.current?.offsetHeight,
                    duration: F.sidebar.mobile.drawer.duration,
                    drawerHeight: .4 * window.innerHeight,
                    fov: ke.current,
                    ease: F.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Ue.current && (Ee.current && Ee.current.set(e.drawerHeight), Ue.current.style.transform = `translateY(${e.translateY}px)`, Ue.current.style.pointerEvents = "none", r.fov = e.fov, r.updateProjectionMatrix())
                    }
                  })
                }
                if (g === me.CONFIRM_ORDER ? _ || 1 == !Oe.current && v().to(r.position, {
                    x: Number(_e.current.x),
                    y: Number(_e.current.y),
                    z: 0,
                    ease: F.transaction.confirmOrder.ease,
                    duration: F.transaction.confirmOrder.duration
                  }) : v().to(Me.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay
                  }), g === me.LIST_PLATES) {
                  const e = M[B.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                n?.current && (n.current.minDistance = 0), Oe.current = !1, Ne(!1)
            }
          }), [g, V, M, E, A, b, y, R, O, z, be, ie, Ee.current, Oe.current, w]);
          (0, r.useEffect)((() => {
            M?.[B.SIDEBAR_BUTTONS]?.current && (Ue.current = M[B.SIDEBAR_BUTTONS].current)
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
                  ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = T(), s = E && g === me.CONFIRM_ORDER ? 1.5 : 1, o = !S() || E ? n * b * s : 1.6 * n * b, l = M[B.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = M[B.CANVAS_WRAP].current, u = f[0].current;
              if (l && (E || c) && u && d) {
                const e = N(0, l, Number(z.replace("px", "")), y, E ? void 0 : {
                    x: c.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  n = I(d),
                  s = I(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(n.x),
                    y: a.top + a.height / 2 - Number(n.y)
                  },
                  p = 5 / o,
                  g = E || i() !== me.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
                  b = {
                    x: m.x - e.x + g,
                    y: m.y - e.y - 80 + (O === me.CONFIRM_ORDER || t ? R : window.scrollY)
                  },
                  h = {
                    current: 0
                  },
                  v = f.map((e => Number(getComputedStyle(e?.current).getPropertyValue("opacity")))),
                  x = O === me.CONFIRM_ORDER ? F.transaction.confirmOrder.ease : F.clickPlate.ease,
                  w = O === me.CONFIRM_ORDER ? F.transaction.confirmOrder.duration : F.clickPlate.duration,
                  P = .4 * window.innerHeight,
                  S = E ? F.sidebar.mobile.drawer.duration : w,
                  _ = t ? 0 : S;
                r.to(h, {
                  current: 1,
                  ease: E ? F.sidebar.mobile.drawer.ease : x,
                  duration: _,
                  onComplete: () => {
                    we(I(u.parentElement)), ve(!0)
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = h, r = (0, at.t7)(Number(s.x), b.x, a), n = (0, at.t7)(Number(s.y), b.y + (E ? P / -2 : 0), a), o = (0, at.t7)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${o})`, t || f.forEach(((e, t) => {
                      if (0 !== t && e?.current) {
                        const r = (0, at.t7)(v[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r
                      }
                    }))
                  }
                }, "<")
              }
            }), [y, z, E, g, se, V, f, M, O, Le?.current, R]),
            Ze = (0, r.useCallback)((() => {
              if (!V?.controls) return;
              const {
                controls: e,
                scene: t
              } = V, a = v().timeline({
                duration: E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                onStart: () => {
                  e?.current && !Oe.current && (e.current.minDistance = 0)
                }
              });
              let r;
              rt(a, b, !0), t.traverse((e => {
                0 === e.userData.index && (r = e)
              })), r && v().to(r.material, {
                duration: 0,
                ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                opacity: w ? 1 : 0
              });
              const {
                renderer: n
              } = Xe.current;
              q ? (g === me.NEW_PLATE && (P() ? n.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : n.domElement.style.transform = "translateY(0px)", Me?.current && (Me.current.style.opacity = "1", Me.current.style.visibility = "visible", Me.current.style.pointerEvents = "all")), g === me.CONFIRM_ORDER && P() && (n.domElement.style.transform = `translateY(${ie/1.5}px)`)) : g !== me.CONFIRM_ORDER || P() || (n.domElement.style.transform = "translateY(0px)"), i() !== me.NEW_PLATE && i() !== me.CONFIRM_ORDER || qe(null, !0), P() && et(), Oe.current && ot({
                isResize: !0,
                onComplete: null,
                delay: 0
              })
            }), [P(), q, w, g, V, Me.current, b, R]),
            Ke = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!ze?.current || !_e.current || !V?.camera) return;
              $e({
                ...He,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "new plate",
                view_name: "license plate creator - new plate form"
              }), $e({
                ...He,
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
                  ease: F.toggleView.camera.ease,
                  duration: t ? 0 : F.toggleView.camera.duration
                },
                onStart: () => {
                  n?.current && (n.current.minDistance = 2, n.current.enableZoom = !1, n.current.enabled = !1)
                },
                onComplete: () => {
                  n?.current && (n.current.minDistance = 0, n.current.maxPolarAngle = G.plateView.maxPolarAngle, n.current.minPolarAngle = G.plateView.minPolarAngle, n.current.maxAzimuthAngle = G.plateView.maxAzimuthAngle, n.current.minAzimuthAngle = G.plateView.minAzimuthAngle, n.current.enableZoom = !1), ge.current = 0, e.onComplete && e.onComplete()
                }
              });
              u.to(a.position, {
                x: Number(_e.current.x),
                y: Number(_e.current.y),
                z: Number(_e.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to(ze.current.rotation, {
                x: 0
              }, "<").to(i, {
                intensity: 0
              }, "<").to([l, c], {
                intensity: ce
              }, "<").to(l.position, {
                x: K,
                y: J,
                z: Q
              }, "<").to(c.position, {
                x: te
              }, "<").set(ze.current, {
                receiveShadow: !1
              }, .4).set(ze.current.material, {
                depthTest: !1
              }, "<"), ze?.current?.material && u.to(ze.current.material, {
                envMapIntensity: de
              }, "<"), o.traverse((e => {
                e.material && v().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : F.toggleView.fadeOut.duration,
                  ease: F.toggleView.fadeOut.ease
                })
              }))
            }), [ze.current, _e.current, V]);
          (0, r.useEffect)((() => {
            V?.scene && !ke.current && (ke.current = V.camera.fov)
          }), [ke.current, V]), (0, r.useEffect)((() => {
            V?.scene && Ue.current && Ge(q ? $t : Ut)
          }), [V, q, g === me.CONFIRM_ORDER, O]), (0, r.useEffect)((() => {
            V?.scene && Ue.current && Ge(q ? $t : Ut, !0)
          }), [E]);
          const et = (0, r.useCallback)((() => {
            if (Ue?.current && E && Ye.current) {
              const e = Ye.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              X(a - 48 - Ue.current.offsetHeight - t), oe(a), fe(-1 * (.6 * e - 80)), Ue.current.style.transform = `translateY${Ue.current.offsetHeight}px`
            }
          }), [Ue.current, E, Ye.current]);
          (0, r.useEffect)((() => {
            et()
          }), [Ue.current, E, Ye.current]), (0, r.useEffect)((() => {
            Ce.current || (Ce.current = g), Le.current || (Le.current = Ce.current), g && (Le.current = Ce.current, l(Ce.current), Ce.current = g), g === me.LIST_PLATES && Oe.current && Ke({}, !0), g === me.NEW_PLATE && (je.current = !1)
          }), [g]), (0, r.useEffect)((() => {
            const e = E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
              t = ye ? 0 : e;
            if (!V?.scene) return;
            if (!V?.scene || !f?.[0]?.current) return;
            const {
              scene: r,
              renderer: n,
              camera: s
            } = V, o = [], l = [], c = f[0].current;
            if (r.traverse((e => {
                e.name === pe.LP && e.material ? l[e.userData.index] = e.material : o.push(e.material)
              })), i() === me.NEW_PLATE)
              if (w) {
                const e = l[0];
                if (v().to(e, {
                    opacity: 1,
                    delay: t,
                    duration: E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                    ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                    onStart: () => {
                      a(!0), v().to(c.style, {
                        opacity: 0,
                        duration: F.accessibilePlate.duration,
                        ease: F.accessibilePlate.ease,
                        onComplete: () => {
                          Re.current = !1
                        }
                      })
                    }
                  }), !je.current) {
                  const e = r.getObjectByName("Light4"),
                    a = new d.Vector3;
                  ze?.current && (ze.current.getWorldPosition(a), v().to(e.position, {
                    x: le.x,
                    y: a.y + le.y,
                    z: le.z,
                    delay: t,
                    duration: F.plateShimmer.duration,
                    ease: F.plateShimmer.ease
                  }));
                  const n = {
                    current: 0
                  };
                  v().to(n, {
                    current: 1,
                    delay: t,
                    duration: F.plateShimmer.duration,
                    ease: F.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: t
                      } = n, a = (0, at.t7)(0, Math.PI, t);
                      e.intensity = .3 * Math.sin(a), e.color = new d.Color(a, .9 * a, a)
                    }
                  }), je.current = !0
                }
              } else {
                const e = l[0];
                v().to(c.style, {
                  opacity: 1,
                  duration: F.accessibilePlate.duration,
                  ease: F.accessibilePlate.ease,
                  onStart: () => {
                    v().to(e, {
                      opacity: 0,
                      duration: F.accessibilePlate.duration,
                      ease: F.accessibilePlate.ease,
                      onComplete: () => {
                        a(!1), Re.current = !1, n.render(r, s)
                      }
                    })
                  }
                })
              }
          }), [w, E, V, f]), (0, r.useEffect)((() => {
            if (i() === me.NEW_PLATE && ye && V?.camera) {
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
            b && (tt.current = b), i() === me.NEW_PLATE || i() === me.CONFIRM_ORDER ? Ze() : P() && (et(), he(window.innerHeight), Ue.current && (Ue.current.style.transform = `translateY(${Ue.current.offsetHeight}px`))
          }), [b]);
          const rt = (0, r.useCallback)((function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (Ce.current !== me.NEW_PLATE && Ce.current !== me.CONFIRM_ORDER) return;
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
                } = V, n = e.domElement, s = I(a.parentElement), o = {
                  buttonWrapOpacity: De.current.style.opacity,
                  canvasWrapOpacity: n.style.opacity,
                  fov: r.fov,
                  canvasTranslateY: Number(I(n).y),
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
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    n.style.opacity = o.canvasWrapOpacity, De.current.style.opacity = o.buttonWrapOpacity, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), r.fov = o.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [V, se, f, Se.current]),
            st = (0, r.useCallback)((e => {
              if (!V?.scene || !Ue.current) return;
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
                  const e = (0, at.ii)(0, n, r.get()),
                    i = (0, at.t7)(0, 1, 1 - e);
                  l.style.opacity = i;
                  const d = (0, at.t7)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, De.current.style.opacity = i, Ve.current.querySelectorAll("button").forEach((e => {
                      e.style.pointerEvents = r.get() >= 0 ? "all" : "none"
                    })), De.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < s) {
                    const e = (0, at.ii)(0, s, r.get()),
                      a = Oe.current ? 60 : 40,
                      n = (0, at.t7)(ke.current, a, e);
                    o.fov = n, o.updateProjectionMatrix();
                    const i = Number(I(l).y) + t.delta[1] / 2;
                    if (l.style.transform = `translateY(${i}px)`, c) {
                      const e = I(c.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(I(c.parentElement).y) + t.delta[1] / 2;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }
                } else {
                  const e = Number(I(l).y),
                    t = {
                      buttonWrapOpacity: De.current.style.opacity,
                      canvasWrapOpacity: l.style.opacity,
                      fov: o.fov,
                      canvasTranslateY: e,
                      accessibilityPlateY: Number(I(c.parentElement).y),
                      accessibilityPlateOpacity: c.parentElement.style.opacity
                    };
                  a.current < n / 2 ? (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), v().to(t, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    accessibilityPlateOpacity: 0,
                    fov: Oe.current ? 60 : 40,
                    duration: F.sidebar.mobile.drawerSnap.duration,
                    ease: F.sidebar.mobile.drawerSnap.ease,
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
                    duration: F.sidebar.mobile.drawerSnap.duration,
                    ease: F.sidebar.mobile.drawerSnap.ease,
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
                    duration: F.sidebar.mobile.drawerSnap.duration,
                    ease: F.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      if (l.style.opacity = t.canvasWrapOpacity, De.current.style.opacity = t.buttonWrapOpacity, c.parentElement.style.opacity = t.accessibilityPlateOpacity, o.fov = t.fov, o.updateProjectionMatrix(), a.current > 0) {
                        l.style.transform = `translateY(${t.canvasTranslateY}px)`;
                        const e = I(c.parentElement),
                          a = Number(e.x),
                          r = Number(e.scale),
                          n = t.accessibilityPlateY;
                        c.parentElement.style.transform = `translate(${a}px,\n                                    ${n}px) scale(${r})`
                      }
                    }
                  }))
                }
            }), [V, Ue.current, se, f, Se.current, xe]),
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
                e.name === pe.LP && 0 === e.userData.index && (u = e)
              }));
              const p = new d.Vector3;
              ze.current.getWorldPosition(p);
              const f = {
                camPositionY: n.position.y,
                camPositionZ: n.position.z,
                controlsTargetZ: s.current.target.z,
                plateRotationX: ze.current.rotation.x,
                light1Intensity: i.intensity,
                light2Intensity: l.intensity,
                light2PositionX: l.position.x,
                light2PositionY: l.position.y,
                light2PositionZ: l.position.z,
                light3Intensity: c.intensity,
                light3PositionX: c.position.x,
                envMapIntensity: ze?.current?.material?.envMapIntensity
              };
              v().to(f, {
                camPositionY: n.position.y + 2.5 * b,
                camPositionZ: n.position.z + (E ? 24 * b : 12 * b),
                controlsTargetZ: s.current.target.z - 5 * b,
                plateRotationX: -.16,
                light1Intensity: ce,
                light2Intensity: .2,
                light2PositionX: ee.x,
                light2PositionY: ee.y,
                light2PositionZ: ee.z,
                light3Intensity: ce,
                light3PositionX: ne.x,
                delay: a,
                envMapIntensity: ue,
                duration: t ? 0 : F.toggleView.camera.duration,
                ease: F.toggleView.camera.ease,
                onStart: () => {
                  const e = E ? 52 * b : 26 * b;
                  s.current.enableZoom = !0, s.current.maxPolarAngle = G.carView.maxPolarAngle, s.current.minPolarAngle = G.carView.minPolarAngle, s.current.maxAzimuthAngle = G.carView.maxAzimuthAngle, s.current.minAzimuthAngle = G.carView.minAzimuthAngle, s.current.maxDistance = e, o.visible = !0, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none"
                },
                onUpdate: () => {
                  n.position.set(n.position.x, f.camPositionY, f.camPositionZ), s.current.target.z = f.controlsTargetZ, ze.current.rotation.x = f.plateRotationX, ze.current?.material && (ze.current.material.envMapIntensity = f.envMapIntensity), i.intensity = f.light1Intensity, l.intensity = f.light2Intensity, l.position.set(f.light2PositionX, f.light2PositionY, f.light2PositionZ), c.intensity = f.light3Intensity, c.position.x = f.light3PositionX
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
                duration: t ? 0 : F.toggleView.fadeOut.duration,
                ease: F.toggleView.fadeOut.ease,
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
            }), [V, Oe.current, ze, ze?.current, b, E, U, w]),
            it = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                delay: 0,
                onComplete: null
              };
              if (!V?.scene || !V?.controls?.current || !ze || !ze?.current || Te.current) return;
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
                  if (ze.current.getWorldPosition(n), setTimeout((() => {
                      ze.current.receiveShadow = !1, ze.current.material.depthTest = !1
                    }), 400), !Te.current) {
                    const s = {
                      camPositionX: a.position.x,
                      camPositionY: a.position.y,
                      camPositionZ: a.position.z,
                      controlsTargetX: r.current.target.x,
                      controlsTargetY: r.current.target.y,
                      controlsTargetZ: r.current.target.z,
                      plateRotationX: ze.current.rotation.x,
                      light1Intensity: i.intensity,
                      light2Intensity: l.intensity,
                      light2PositionX: l.position.x,
                      light2PositionY: l.position.y,
                      light2PositionZ: l.position.z,
                      light3Intensity: c.intensity,
                      light3PositionX: c.position.x,
                      envMapIntensity: ze?.current?.material?.envMapIntensity
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
                      light2Intensity: ce,
                      light2PositionX: K,
                      light2PositionY: J,
                      light2PositionZ: Q,
                      light3Intensity: ce,
                      light3PositionX: te,
                      envMapIntensity: de,
                      duration: F.toggleView.camera.duration,
                      ease: F.toggleView.camera.ease,
                      onStart: () => {
                        r.current.minDistance = 2, r.current.enableZoom = !1, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = v().timeline({
                          duration: E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                          ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease
                        });
                        rt(e, b)
                      },
                      onUpdate: () => {
                        ze.current.rotation.x = s.plateRotationX, ze.current?.material && (ze.current.material.envMapIntensity = s.envMapIntensity), i.intensity = s.light1Intensity, l.intensity = s.light2Intensity, l.position.set(s.light2PositionX, s.light2PositionY, s.light2PositionZ), c.intensity = s.light3Intensity, c.position.x = s.light3PositionX
                      },
                      onComplete: () => {
                        Te.current = !1, o.visible = !1, r.current.maxPolarAngle = G.plateView.maxPolarAngle, r.current.minPolarAngle = G.plateView.minPolarAngle, r.current.maxAzimuthAngle = G.plateView.maxAzimuthAngle, r.current.minAzimuthAngle = G.plateView.minAzimuthAngle, M[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all", e.onComplete && e.onComplete()
                      }
                    });
                    const d = {
                      opacity: 1
                    };
                    v().to(d, {
                      opacity: 0,
                      duration: F.toggleView.fadeOut.duration,
                      ease: F.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        t.forEach((e => {
                          e.opacity = d.opacity
                        }))
                      }
                    })
                  }
                } else Te.current || (U && n(!1), ot({
                  isResize: !1,
                  onComplete: null,
                  delay: s
                }));
                Oe.current = !Oe.current
              }
            }), [V, Oe.current, ze, ze?.current, b, U, w]),
            lt = (0, r.useCallback)((e => {
              if (!V?.scene || !Ue?.current || !De.current) return;
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
                  submitOrderTranslateY: Ue.current.offsetHeight,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${l.mobileSidebarHeight}px)`, o.current.style.opacity = l.opacity, Ue.current.style.transform = `translateY(${l.submitOrderTranslateY}px)`, De.current.style.opacity = l.opacity, n.style.height = l.height, s.set(l.mobileSidebarHeight), a && (a.fov = l.fov, a.updateProjectionMatrix())
                  },
                  onComplete: () => {
                    n.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [M, Me?.current, Ue?.current, V, se]),
            ct = e => {
              if (!V?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e, {
                sidebar: n
              } = F, {
                duration: s,
                ease: o
              } = n.mobile.drawer;
              he(r), Ee.current = r, t.current.style.pointerEvents = "all";
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
              } = j, r = ae ? (0, Qe.jsx)(h.LoadingAnimation, {}) : t("lp.create.next");
              return (0, Qe.jsx)(jt, {
                buttons: [{
                  buttonText: p ? r : t("lp.create.signin"),
                  isDisabled: !!p && (ae || !L || !e && L === a),
                  onClick: async () => {
                    Ae?.current?.(), p || ($e({
                      ...He,
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
                isVisible: [me.NEW_PLATE, me.CONFIRM_ORDER].includes(g),
                tabIndex: g === me.NEW_PLATE ? 0 : -1
              })
            }), [L, g, p, q, j, Ae.current, ae]),
            ut = (0, r.useCallback)((() => {
              u(!_)
            }), [_]),
            mt = (0, r.useMemo)((() => E ? (0, Qe.jsxs)(Et, {
              bottom: $,
              isVisible: q,
              onDrag: st,
              onHide: lt,
              onShow: ct,
              onTap: nt,
              top: ie,
              drawerY: be,
              mobileSidebarHeight: se,
              children: [(0, Qe.jsx)(Lt, {
                validateFnRef: Ae,
                setIsLoading: re
              }), (0, Qe.jsx)(Bt, {
                top: ie,
                drawerY: be
              })]
            }) : (0, Qe.jsxs)("div", {
              ref: Me,
              className: "rockstargames-modules-gtao-license-plateb1a08a76cb74203a9c8e97f759697f47",
              children: [(0, Qe.jsx)("hr", {
                className: "rockstargames-modules-gtao-license-platefb62db34cd26ac9882218fa9e8c572d0",
                onClick: () => {
                  ut()
                },
                "aria-hidden": "true"
              }), (0, Qe.jsx)(Lt, {
                validateFnRef: Ae,
                setIsLoading: re
              }), dt]
            })), [L, $, _, E, q, Ee.current, Me.current, ie, be, ae, se]);
          return (0, Qe.jsxs)("div", {
            ref: Ye,
            className: "rockstargames-modules-gtao-license-platee14286ef5f5dc6a8ca6bf6ce3ffb02be",
            children: [mt, (0, Qe.jsxs)("div", {
              ref: Ve,
              className: "rockstargames-modules-gtao-license-plateb2352c29df7ddb34a50813fe7bc95c6e",
              children: [(0, Qe.jsx)(Pt, {
                onClick: () => {
                  Te.current || Ke({
                    onComplete: () => {
                      ve(!1), i(me.LIST_PLATES)
                    }
                  })
                }
              }), (0, Qe.jsxs)(xt.animated.div, {
                ref: De,
                className: "rockstargames-modules-gtao-license-plateb7250523e6ae363c8f2aee0651a92b46",
                style: be ? {
                  y: be
                } : void 0,
                children: [(0, Qe.jsx)(Dt, {
                  is3DToggle: !0,
                  onToggleView: () => {
                    Re.current || Te.current || (Oe.current && !U ? it({
                      onComplete: () => {
                        n(!U), Ne(!1)
                      }
                    }) : n(!U), Re.current = !0)
                  }
                }), (0, Qe.jsx)(Dt, {
                  is3DToggle: !1,
                  onToggleView: e => {
                    if (!Te.current && !Re.current) {
                      const t = E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                        a = w ? 0 : t;
                      "function" == typeof e?.onStart && e.onStart(), it({
                        delay: a
                      }), Te.current = !0
                    }
                  }
                })]
              })]
            }), (0, Qe.jsxs)("div", {
              ref: Be,
              className: "rockstargames-modules-gtao-license-platee615f2b03c1f76d06a2862cb3aab1afd",
              children: [E && dt, E && (0, Qe.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platea37b793effdd9688699a77ea3bd02976",
                ref: We
              })]
            })]
          })
        })),
        Ft = "rockstargames-modules-gtao-license-plateba2215c87866e0b4c5739e49512b96ef",
        Gt = "rockstargames-modules-gtao-license-plateb05e3890eab129885f9a617d22a4bdda",
        Xt = "rockstargames-modules-gtao-license-platefd6b39e70965987eb91338b9ab71ef06",
        qt = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, o.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = Je(), {
            plates: i,
            isMobile: l
          } = s, c = (0, r.useRef)(null), d = (0, r.useRef)(null), u = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            n(B.SIDEBAR, c)
          }), [c.current, l]), (0, r.useEffect)((() => {
            n(B.PLATE_COUNT, u)
          }), [u.current, l]), (0, r.useEffect)((() => {
            n(B.SIDEBAR_BUTTONS_LOADING_ANIMATION, d)
          }), [d.current]), (0, Qe.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: c,
            className: "rockstargames-modules-gtao-license-platef5e31de74db53bedd63dace5d7038d67",
            children: [(0, Qe.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platedf5d7bc0760f699d1c8e26596267b7c0",
              children: (0, Qe.jsx)(St, {})
            }), (0, Qe.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec3b30bed11d2e7b8ce600fbbd7629875",
              children: [(0, Qe.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platec4382993beb9898b4d04eff6d21944bb",
                children: [(0, Qe.jsx)("h1", {
                  className: "rockstargames-modules-gtao-license-platee753118af7cef32ddccb849c5845a1d9",
                  children: t("lp.landing.title")
                }), (0, Qe.jsx)("p", {
                  className: "rockstargames-modules-gtao-license-plateb7f49651a3bab5cb72869a16d60c64ee",
                  children: t("lp.landing.description")
                }), (0, Qe.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-plateb120b933ab5873984ca4626fc8b326c4",
                  children: (0, Qe.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, Qe.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), a && (0, Qe.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platee0dd0de0d13ab389fbd3ac25184c0557",
                children: [(0, Qe.jsx)("h5", {
                  children: t("lp.landing.plates")
                }), (0, Qe.jsxs)("span", {
                  className: "rockstargames-modules-gtao-license-platea85e818dc3383486634bd7d437612039",
                  children: [(0, Qe.jsxs)("span", {
                    className: "rockstargames-modules-gtao-license-platec3fb0b6e4481dc788c19f32e1d57155a",
                    children: [(0, Qe.jsx)("span", {
                      ref: d,
                      className: "rockstargames-modules-gtao-license-platee671a67ec4f57b3d0b0d69daf8181d6b",
                      children: (0, Qe.jsx)(h.LoadingAnimation, {
                        type: "THREE_DOTS"
                      })
                    }), (0, Qe.jsx)("span", {
                      ref: u,
                      className: "rockstargames-modules-gtao-license-plateb57f68949c7a8c6412a10113788f02d1",
                      children: i?.filter((e => {
                        let {
                          faux: t = !1
                        } = e;
                        return !t
                      }))?.length ?? 0
                    })]
                  }), (0, Qe.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-plated92b79d7b5b7acd43b97aea1fa09f53d"
                  }), (0, Qe.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-platedd3a0c1fa96710ebf11322ea3d496dc7",
                    children: "owned plates out of a maximum of"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Zt = "rockstargames-modules-gtao-license-plateef5ba014e1e3a01aa5c8e25fa6540276",
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
            setPlates: i
          } = Je(), {
            accessiblePlates: l,
            pendingOrder: c,
            currentPlateIndex: u,
            currentView: m,
            is3D: p,
            three: f,
            isMobile: g,
            isLoading: b,
            refs: h,
            gridScale: y,
            deletedPlateIndex: x,
            plates: w
          } = e, {
            loggedIn: E
          } = (0, o.useRockstarUser)(), {
            selectedCharacterTuple: P
          } = (0, o.useRockstarUserState)(), S = (0, r.useRef)(null), [_, k] = (0, r.useState)(m === me.LIST_PLATES), T = h?.[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            Qt && (Qt.pause(), Qt = null), ea = !1
          }), [P]), (0, r.useEffect)((() => {
            k(m === me.LIST_PLATES)
          }), [m]);
          const R = (0, r.useCallback)((e => {
            if (!f) return;
            const {
              camera: r,
              controls: o,
              originalCameraPosition: m,
              originalControlsTarget: p,
              renderer: y,
              scene: P
            } = f, {
              clickPlate: _,
              sidebar: k,
              deletePlate: R
            } = F, N = h[B.FOOTER].current, O = h[B.SIDEBAR].current, A = h[B.LOADING_SCREEN].current, C = h[B.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, L = h[B.PLATE_COUNT].current, j = l?.[u]?.current || null, M = l?.[0]?.current || null, V = h[B.CTA_SHADER]?.current || null, D = [];
            switch (P.traverse((e => {
                e.name === pe.LP && D.push(e)
              })), Qt = v().timeline({
                duration: g ? k.mobile.drawer.duration : _.duration,
                ease: g ? k.mobile.drawer.ease : _.ease
              }), e) {
              case Jt: {
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
                      start: Number(I(y.domElement).y),
                      end: 0
                    },
                    canvasWidth: y.domElement.offsetWidth,
                    drawerHeight: {
                      start: Number(I(S.current).y),
                      end: 0
                    },
                    ctaShaderOpacity: {
                      start: V.style.opacity,
                      end: 1
                    }
                  };
                j?.parentElement && (u.currentAccessibilityPlateTransform = {
                  start: {
                    x: Number(I(j.parentElement).x),
                    y: Number(I(j.parentElement).y),
                    scale: Number(I(j.parentElement).scale)
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
                    duration: g ? k.mobile.drawer.duration : _.duration,
                    ease: g ? k.mobile.drawer.ease : _.ease,
                    onComplete: () => {
                      g && (y.domElement.style.touchAction = "auto"), t(!1);
                      const e = P.getObjectByName("Light4");
                      v().to(e.position, {
                        x: se - 20,
                        y: oe,
                        z: ie
                      })
                    },
                    onStart: () => {
                      e.current = 0, O && (O.style.pointerEvents = "all"), y.render(P, r), a(!0)
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e, a = u.cameraPosition.start.clone().lerp(u.cameraPosition.end, t);
                      r.position.set(a.x, a.y, a.z);
                      const n = u.controlsTarget.start.clone().lerp(u.controlsTarget.end, t);
                      if (o.current.target.x = n.x, o.current.target.y = n.y, o.current.target.z = n.z, j && j.parentElement?.classList?.contains(Ft)) {
                        const e = Kt(u.currentAccessibilityPlateTransform.start.x, u.currentAccessibilityPlateTransform.end.x, t),
                          a = Kt(u.currentAccessibilityPlateTransform.start.y, u.currentAccessibilityPlateTransform.end.y, t),
                          r = Kt(u.currentAccessibilityPlateTransform.start.scale, u.currentAccessibilityPlateTransform.end.scale, t);
                        j.parentElement.style.transform = `translate(${e}px,\n                            ${a}px) scale(${r})`
                      }
                      const s = Kt(u.firstPlateSaturation.start, u.firstPlateSaturation.end, t);
                      if (H.saturation.value = s, E && !c && f) {
                        const e = Kt(u.firstPlateOpacity.start, u.firstPlateOpacity.end, t),
                          a = !!c;
                        f.style.filter = `saturate(${s})${!a&&` opacity(${e})`}`
                      }
                      if (V) {
                        const e = Kt(u.ctaShaderOpacity.start, u.ctaShaderOpacity.end, t);
                        V.style.opacity = e
                      }
                      if (g) {
                        const e = Kt(u.canvasTranslateY.start, u.canvasTranslateY.end, t);
                        if (y.domElement.style.transform = `translateY(${e}px)`, S.current) {
                          const e = Kt(u.drawerHeight.start, u.drawerHeight.end, t);
                          S.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), (l.length === w.length && l?.[0]?.current || E && !b && l[0].current && l?.filter((e => e?.current)).length === w.length && 0 !== w.length && 0 !== l.length) && !ea) {
                  const e = {
                    current: 0
                  };
                  ea = !0, Qt.to(e, {
                    current: 1,
                    duration: g ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                    ease: g ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
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
                          const e = Kt(u.plateOpacity[a].start, u.plateOpacity[a].end, t);
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
                    Qt.to(a, {
                      current: 1,
                      duration: g ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                      ease: g ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                      onUpdate: () => {
                        const t = Kt(e.start, e.end, a.current);
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
                    Qt.to(a, {
                      current: 1,
                      duration: R.duration,
                      ease: R.ease,
                      onUpdate: () => {
                        const {
                          current: n
                        } = a, s = Kt(r.plateOpacity.start, r.plateOpacity.end, n), o = Kt(r.accessiblePlateOpacity.start, r.accessiblePlateOpacity.end, n);
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
                    Qt.to(o.slice(1), {
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
                Qt.to(N, {
                  autoAlpha: 1,
                  duration: g ? k.mobile.footer.in.duration : k.in.duration,
                  ease: g ? k.mobile.footer.in.ease : k.in.ease,
                  delay: g ? k.mobile.footer.in.delay : k.in.delay
                }, 0), Qt.to(O, {
                  autoAlpha: 1,
                  duration: g ? k.mobile.fadeHeader.in.duration : k.in.duration,
                  ease: g ? k.mobile.fadeHeader.in.ease : k.in.ease,
                  delay: g ? k.mobile.fadeHeader.in.delay : k.in.delay,
                  onStart: () => {
                    A && (b ? (A.classList.add(Zt), C && C.classList.add(Gt), L && L.classList.remove(Xt)) : (A.classList.remove(Zt), C && C.classList.remove(Gt), L && L.classList.add(Xt)))
                  }
                }, 0), g && (T && v().set(T.style, {
                  visibility: "visible"
                }), O && (O.style.pointerEvents = "all"));
                break
              }
              default:
                if (v().to(N, {
                    autoAlpha: 0,
                    duration: g ? k.mobile.footer.out.duration : k.out.duration,
                    ease: g ? k.mobile.footer.out.ease : k.out.ease
                  }), T && v().set(T.style, {
                    visibility: "hidden"
                  }), O && (O.style.pointerEvents = "none"), g) {
                  const e = {
                    current: I(O).y
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
          }), [l, u, x, p, f, b, c, E, g, h, y, ea]);
          return (0, r.useEffect)((() => {
            h && h?.[B.FOOTER]?.current && h?.[B.SIDEBAR]?.current && h?.[B.UI]?.current && h?.[B.LOADING_SCREEN]?.current && S.current && f?.scene && f?.controls && R(_ ? Jt : "hidden")
          }), [h, _, S.current, p, f, g, b, h?.[B.FOOTER]?.current, h?.[B.SIDEBAR]?.current]), (0, Qe.jsx)("div", {
            ref: S,
            className: "rockstargames-modules-gtao-license-plateaa4cb56d97a9d885e644c0af2b3e81ce",
            children: (0, Qe.jsx)(qt, {})
          })
        },
        aa = e => {
          let {
            isMobile: t
          } = e;
          const {
            loggedIn: a
          } = (0, o.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = Je(), {
            plates: i,
            refs: l
          } = s, c = (0, r.useRef)(null), d = l[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              n(B.UI, c)
            }), [c.current]), !i) return null;
          let u;
          return t && (u = d ? (0, vt.createPortal)((0, Qe.jsx)(ta, {}), d) : null), (0, Qe.jsxs)("div", {
            ref: c,
            className: "rockstargames-modules-gtao-license-plated1beae8d7c28603a3bdf0a34ca457352",
            children: [a && !t && (0, Qe.jsx)(Bt, {}), t ? u : (0, Qe.jsx)(ta, {}), a && (0, Qe.jsx)(Nt, {}), (0, Qe.jsx)(Ht, {})]
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
          }), []), i ? (0, Qe.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platee268c88b0ad13ec9b70662c1cd3ed9a6",
            children: [(0, Qe.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platea62175a9470bdefca29061355225053b",
              children: [(0, Qe.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateff9acc08c36ee5477bfa008495fe1016",
                children: [(0, Qe.jsx)("i", {}), (0, Qe.jsx)("h4", {
                  children: u[i] || t("lp.error.unexpected.description")
                }), c?.code && (0, Qe.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platecbb8e56d4071adb16682a06f7d167c4b",
                  children: [(0, Qe.jsx)("p", {
                    children: `Code: ${c.code}`
                  }), c?.logId && (0, Qe.jsx)("p", {
                    children: `LogID: ${c?.logId}`
                  })]
                })]
              }), (0, Qe.jsx)(m.NavLink, {
                to: "character" !== i ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, Qe.jsx)("button", {
                  className: "rockstargames-modules-gtao-license-platebee018ef543141528e263e23cd43ae1e",
                  type: "button",
                  tabIndex: 0,
                  children: (0, Qe.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-platee346703179f552bd647459ea2eee8aca",
                    children: p[i]
                  })
                })
              })]
            }), (0, Qe.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateba7922fbecef8aac8fbfb43466d714df"
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
          }), [n, a]), (0, Qe.jsx)("div", {
            ref: s,
            className: "rockstargames-modules-gtao-license-plateccf53583787aff7c3f2ac6b8d97c03b4",
            children: (0, Qe.jsx)("div", {
              ref: o,
              className: "rockstargames-modules-gtao-license-platea88fc625cf8ed28c9173313577588fed",
              children: (0, Qe.jsx)(h.LoadingAnimation, {})
            })
          })
        },
        sa = {
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
        oa = e => {
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
            setError: h,
            state: y
          } = Je(), {
            character: v,
            plates: x,
            currentView: E
          } = y, {
            track: P
          } = (0, o.useGtmTrack)(), S = {
            view_name: "license plate creator - landing page logged in"
          }, _ = E === me.LIST_PLATES ? 0 : -1, k = (0, r.useCallback)((() => {
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
              if (t) return void h(["api", t]);
              const a = [fe, ...x.slice(1, x.length)];
              p(a), f(null), g(""), b(w(fe.style.name).id), P({
                ...S,
                event: "cta_cancel",
                event_category: "cta",
                event_action: "cancel",
                text: `modal: ${i("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${i("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, v, x]);
          return (0, Qe.jsxs)("div", {
            className: [sa.orderInProgressCTA, n ? "" : sa.hidden].join(" "),
            children: [(0, Qe.jsx)("h1", {
              className: sa.contentHeading,
              children: i("lp.inprogress.title")
            }), (0, Qe.jsx)("p", {
              className: sa.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: i("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${sa.vehicleName}>${t}</span>`)
              }
            }), (0, Qe.jsxs)("div", {
              className: sa.buttonWrap,
              children: [(0, Qe.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": i("lp.inprogress.edit"),
                tabIndex: _,
                children: (0, Qe.jsx)("span", {
                  className: sa.ctaText,
                  children: i("lp.inprogress.edit")
                })
              }), (0, Qe.jsx)("button", {
                type: "button",
                onClick: e => {
                  d(!0), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                },
                "aria-label": i("lp.inprogress.cancel"),
                tabIndex: _,
                children: (0, Qe.jsx)("span", {
                  className: sa.ctaText,
                  children: i("lp.inprogress.cancel")
                })
              })]
            }), (0, Qe.jsx)(kt, {
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
        ia = e => {
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
          return (0, Qe.jsx)("div", {
            className: zt.firstPlateLoggedOut,
            style: {
              background: "none",
              border: "none",
              opacity: r === me.LIST_PLATES ? 1 : 0,
              width: `${a}px`,
              height: a / 2 + "px"
            },
            children: (0, Qe.jsxs)("div", {
              className: [zt.loggedOutCTA, r !== me.LIST_PLATES ? zt.hidden : ""].join(" "),
              children: [(0, Qe.jsx)("button", {
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
                className: [zt.signIn, r !== me.LIST_PLATES ? zt.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Qe.jsx)("span", {
                  className: zt.ctaText,
                  children: c("lp.landing.signup")
                })
              }), (0, Qe.jsx)("button", {
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
                className: [zt.tryWithoutSigningIn, zt.firstLoad, r !== me.LIST_PLATES ? zt.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Qe.jsx)("span", {
                  className: zt.ctaText,
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
          } = (0, o.useRockstarUser)(), {
            state: n,
            setCurrentView: s,
            setCurrentPlate: i,
            setCurrentPlateIndex: l,
            setRefs: c
          } = Je(), {
            currentView: d,
            accessiblePlates: u,
            gridState: m,
            is3D: p,
            loginUrl: f,
            pendingOrder: g,
            three: b,
            plates: h,
            refs: y,
            isMobile: v,
            realHeight: x,
            plateTextures: w
          } = n, [E, P] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            P(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            h?.length && T(h[0])
          }), [h]);
          const [S, _] = (0, r.useState)(null), [k, T] = (0, r.useState)(null), I = y[B.FIRST_PLATE_MESH], C = y[B.ROOT], L = (0, r.useRef)(null), j = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = y[B.SIDEBAR];
            if (!(e?.current && C?.current && m?.gridOptions && k)) return;
            const t = e.current,
              a = {
                x: v ? 0 : t.offsetWidth,
                y: 0
              },
              r = N(k.index, C.current, Number(x.replace("px", "")), m, a);
            _(r)
          }), [y]);
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
          const W = d === me.LIST_PLATES ? 0 : -1,
            Y = (0, r.useCallback)((e => {
              if (s() === me.LIST_PLATES) {
                const t = 0 === e ? me.NEW_PLATE : me.VIEW_PLATE;
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
                })), i(h[e]), l(e), s(t)
              }
            }), [h]),
            z = (0, r.useCallback)((e => {
              O(0, d)
            }), [d]),
            U = (0, r.useMemo)((() => S ? (0, Qe.jsx)(ia, {
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
            $ = (0, r.useMemo)((() => void 0 !== h ? R(g, h) ? (0, Qe.jsx)(oa, {
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
              isVisible: d === me.LIST_PLATES
            }) : h.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30 ? (0, Qe.jsxs)("div", {
              className: [zt.maxPlatesReached, d !== me.LIST_PLATES ? zt.hidden : ""].join(" "),
              children: [(0, Qe.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === h.length ? null : (0, Qe.jsxs)("div", {
              type: "button",
              style: {
                pointerEvents: d === me.LIST_PLATES ? "all" : "none"
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
                I?.current && z(I?.current)
              },
              onPointerOut: v ? void 0 : () => {
                var e;
                I?.current && (e = I?.current, A(e))
              },
              className: [zt.createNewPlate, d !== me.LIST_PLATES ? zt.hidden : ""].join(" "),
              ref: D,
              tabIndex: W,
              children: [(0, Qe.jsx)("span", {
                className: `${zt.ctaText} ${E?zt.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, Qe.jsx)("div", {
                className: zt.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [S, d]),
            H = (0, r.useMemo)((() => void 0 !== g && S ? (0, Qe.jsx)("div", {
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
              className: zt.firstPlateLoggedIn,
              style: {
                width: `${S.width}px`,
                height: S.width / 2 + "px",
                pointerEvents: d === me.LIST_PLATES ? "all" : "none",
                fontSize: S.width / 2 * .075 + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
              },
              children: $
            }) : null), [d, g, S, y, k, $, v]);
          return (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              if (e && L.current) {
                const t = L.current.querySelector("canvas");
                t && L.current.removeChild(t), e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.opacity = 1, e.style.transition = "transform 0.25s ease-out", a && !g && d === me.LIST_PLATES && e.classList.add(zt.newOrder), L.current.append(e)
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
            const e = R(g, h) ? zt.pendingOrderShader : "",
              t = a ? e : zt.loggedOutShader,
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
            return (0, Qe.jsxs)("div", {
              ref: L,
              className: [zt.CTAWrap, a ? "" : zt.loggedOut].join(" "),
              style: {
                top: s,
                left: o,
                bottom: l,
                right: i,
                width: r,
                height: n
              },
              children: [(0, Qe.jsx)("div", {
                ref: j,
                className: t
              }), a ? H : U]
            })
          }), [$])
        },
        ca = e => {
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
              deletedPlateIndex: h,
              isMobile: y,
              shouldRenderScene: v
            }
          } = Je(), {
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
          }), [g, l, E.current]), (0, r.useMemo)((() => (0, Qe.jsx)("button", {
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
              pointerEvents: p !== me.LIST_PLATES || "number" == typeof h || v ? "none" : "all"
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
                display_type: y ? "mobile" : "desktop",
                view_name: "license plate creator - view plate"
              }), u(t), m(a + 1), d(me.VIEW_PLATE)
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
              gridState: i,
              plates: l,
              realHeight: c,
              refs: d,
              isMobile: u,
              plateTextures: m
            }
          } = Je(), {
            loggedIn: p
          } = (0, o.useRockstarUser)(), [f, g] = (0, r.useState)([]), b = (0, r.useRef)(null), h = (0, r.useRef)([]);
          return (0, r.useEffect)((() => {
            h.current && l.length > 0 && h.current.length === l.length && a(h.current)
          }), [h.current?.length, l]), (0, r.useEffect)((() => {
            n(B.ACCESSIBLE_PLATE_GRID, b)
          }), [b.current]), (0, r.useEffect)((() => {
            const e = d[B.ROOT]?.current,
              t = d?.[B.SIDEBAR]?.current,
              a = [];
            e && t && i && (l.forEach(((r, n) => {
              if (n) {
                const r = N(n, e, Number(c.replace("px", "")), i, u ? void 0 : {
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
          }), [m, d && d?.[B.SIDEBAR]?.current]), (0, r.useMemo)((() => p && !f.length ? null : (h.current.forEach((e => {
            e.current && (e.current.style.transform = "none")
          })), (0, Qe.jsxs)("div", {
            ref: b,
            className: Ft,
            children: [(0, Qe.jsx)(la, {
              t
            }), l.filter(((e, t) => t)).map(((e, t) => (0, Qe.jsx)(ca, {
              accessiblePlateRefs: h,
              plate: e,
              index: t,
              details: f[t],
              tabIndex: s === me.LIST_PLATES ? 0 : -1,
              texture: m[t + 1]?.image
            }, e.plateText + e.vehicles.toString())))]
          }))), [f])
        },
        ua = (0, l.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: g,
            setCharacter: h,
            setCurrentView: y,
            setDeletedPlateIndex: v,
            setError: x,
            setIs3D: E,
            setIsLoading: S,
            setIsLoggedIn: _,
            setIsMobile: k,
            setPendingOrder: T,
            setPlateNumber: I,
            setPlates: N,
            setRefs: O,
            setSelectedStyle: A,
            setVehicles: C,
            setXmas23PlatesAllowed: L,
            state: j
          } = Je(), {
            error: M,
            plates: V,
            pendingOrder: D,
            isMobile: W,
            three: Y,
            currentView: z,
            shouldForce2D: $,
            isLoading: H
          } = j, {
            setCustomFooter: F
          } = (0, c.useRockstarLocalState)(), {
            loggedIn: G
          } = (0, o.useRockstarUser)();
          (0, r.useEffect)((() => {
            _(G)
          }), [G]);
          const {
            selectedCharacterTuple: X
          } = (0, o.useRockstarUserState)(), q = (0, s.useRockstarTokenPing)(), Z = (0, r.useRef)(null), K = (0, r.useRef)(null), J = (0, r.useRef)(null), [Q, ee] = (0, r.useState)(null), [te] = (0, m.useSearchParams)(), [ae, re] = (0, r.useState)(!1);
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
              re(!0)
            }
          }), []);
          const ne = (0, r.useCallback)(b().debounce((() => {
            if (Y?.renderer) {
              const {
                renderer: e
              } = Y, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              g({
                width: t,
                height: a
              })
            }
            k(P())
          }), 100), [Y]);
          (0, r.useEffect)((() => (ne(), window.addEventListener("resize", ne, !0), () => window.removeEventListener("resize", ne, !0))), [Y]), (0, r.useEffect)((() => ((0, c.setFreezeUserShouldSeeMore)(!0), F(!0), () => {
            (0, c.setFreezeUserShouldSeeMore)(!1), F(!1), y(me.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            O(B.CANVAS_WRAP, Z)
          }), [Z.current]), (0, r.useEffect)((() => {
            O(B.ROOT, K)
          }), [K.current]), (0, r.useEffect)((() => {
            O(B.MOBILE_SIDEBAR_PORTAL_TARGET, J)
          }), [J.current]), (0, r.useEffect)((() => {
            if (!ae || "webgl" === M || "browser" === M) return;
            x(null), h(X), y(me.LIST_PLATES), A(fe.style?.id), T(null), v(null);
            const e = (G ? [] : [fe]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== G && (N(e), !1 === G && S(!1)), C([]), (async () => {
              try {
                G && S(!0);
                const e = x();
                if (!G || null === X || e) return;
                if (!1 === X) return void x(["character"]);
                const [t, a] = X, {
                  error: r = null,
                  result: n
                } = await (0, l.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  pingBearer: q,
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (r) throw Object.assign(new Error(""), r);
                L(n?.xmas23PlatesAllowed);
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
                    pingBearer: q,
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
                  pingBearer: q,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (d) throw Object.assign(new Error(""), d);
                const m = R(u, V);
                let p = [fe, ...s];
                p = p.map(((e, t) => ({
                  ...e,
                  index: t
                }))), m ? (T(u), A(fe.style.id)) : T(null), I(fe.plateText), S(!1), N(p)
              } catch (e) {
                x(["api", e]), S(!1)
              }
            })()
          }), [String(X), G, ae]), (0, r.useEffect)((() => {
            if (R(D, V)) {
              const e = w(D.plateStyle);
              "number" == typeof e?.id && A(e.id), I(D.plateText)
            }
          }), [D, V]), (0, r.useEffect)((() => {
            if (Q || !U || M || !ae) return;
            const e = te.get("envUrl") || a(3924),
              t = new d.LoadingManager((() => {
                ee({
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
              m = U.map((e => {
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
          }), [Q, U, M, ae]), (0, r.useEffect)((() => {
            const e = z !== me.LIST_PLATES && !$;
            E(e)
          }), [z, $]);
          const se = (0, r.useMemo)((() => (0, Qe.jsx)(n.Canvas, {
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
            children: (0, Qe.jsx)(i.GtmProvider, {
              children: (0, Qe.jsx)(yt, {
                loadedAssets: Q
              })
            })
          })), [Q, G]);
          return ae && null !== G ? M ? (0, Qe.jsx)(ra, {
            t
          }) : (0, Qe.jsxs)("div", {
            ref: K,
            className: "rockstargames-modules-gtao-license-platee77939e1820c318536a581396891c6d8",
            children: [W && (0, Qe.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platecb41956b83afc8b368f030e3ac9efd58",
              ref: J,
              children: (0, Qe.jsx)(na, {
                isLoading: H
              })
            }), (0, Qe.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plated84d9facb1ce367777aeb61cfb594eb8",
              children: [(0, Qe.jsx)(aa, {
                isMobile: W
              }), (0, Qe.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platebca268dc1d11ae6823b1bc5b48b364ca",
                ref: Z,
                children: [se, !W && (0, Qe.jsx)(na, {
                  isLoading: H
                })]
              })]
            }), (0, Qe.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platea9a516aab758a9651e41554f2e2a0890"
            }), (0, Qe.jsx)(da, {
              t
            }), (0, Qe.jsx)(et, {
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
    568: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/582604393d5f75a3b9b1943b1fdb856f.jpg"
    },
    1101: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f698f122632ac925fa54df7fd371035.jpg"
    },
    6638: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9ff7cef42d4c37cc4a158aadd7bf9e70.png"
    },
    7376: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/306a9606a4773a61342b14618e5e4165.jpg"
    },
    6879: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e41a5143c3d0ae5a16573064ee1e309a.jpg"
    },
    1358: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca6a8bfc39e4bff84d6f31176074b342.png"
    },
    7188: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ed129e5ac2d871dddf75daba04816bc0.jpg"
    },
    111: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4235e82a6662cc6c700deee2b5aa28b2.jpg"
    },
    9615: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fcdc388bebc3a656c2584e90c1f4a6bf.png"
    },
    9305: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5f90e389f2e4dbec1782e382c2e0efd.jpg"
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