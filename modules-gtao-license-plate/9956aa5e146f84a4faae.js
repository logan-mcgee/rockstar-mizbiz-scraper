"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [572], {
    5572: (e, t, a) => {
      a.d(t, {
        Z: () => Lt
      });
      var r = a(822),
        n = a(2178),
        s = a(4859),
        i = a(6711),
        o = a(9929),
        l = a(3657),
        c = a(4553),
        d = a(5555),
        u = a(7814),
        p = a(8933),
        m = a(9643),
        f = a(4439),
        g = a.n(f),
        h = a(8976),
        b = a(9878),
        y = a.n(b);
      const v = e => z.find((t => {
          let {
            id: a
          } = t;
          return a === e
        })),
        x = e => z.find((t => {
          let {
            name: a
          } = t;
          return a.toLowerCase() === e.toLowerCase()
        })),
        w = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        E = () => window.innerWidth < B.lg,
        _ = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= B.xxl:
              return 25;
            case e >= B.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= B.lg:
              return 40;
            default:
              return 100
          }
        },
        S = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= B.xl:
              return w(4);
            case e >= 1440:
              return w(3);
            default:
              return w(2)
          }
        },
        T = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= B.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= B.lg:
              return 5;
            case e >= B.md:
            default:
              return 8
          }
        },
        P = (e, t) => e?.plateText && t.length ? !t.some(((t, a) => {
          let {
            plateText: r
          } = t;
          return a && r === e.plateText
        })) : !!e?.plateText;

      function I(e) {
        const t = {
          x: 0,
          y: 0,
          z: 0
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
            z: 0
          };
          if ("3d" === r) return {
            x: s[12],
            y: s[13],
            z: s[14]
          }
        }
        return t
      }

      function R(e, t, a, r) {
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
          top: p,
          left: m,
          bottom: f
        } = r.gridDimensions.margins.pixels, g = Math.floor(e / i), h = e % i, b = l * o + d * (o - 1), y = c * i + u * (i - 1), v = s - n.x - 2 * m, x = a - n.y - p - f, w = x * (l / b) - 1, E = v * (c / y) - 1, _ = g * (l + d) / b, S = {
          x: v * (h * (c + u) / y) + m + n.x + 1,
          y: x * _ + p + n.y
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
      const C = (e, t) => {
          const a = 1.025;
          t === Z.LIST_PLATES && (document.body.style.cursor = "pointer", y().to(e.scale, {
            x: a,
            y: a,
            z: a,
            duration: F.plateHover.duration,
            ease: F.plateHover.ease
          }))
        },
        N = e => {
          document.body.style.cursor = "auto", y().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: F.plateHover.duration,
            ease: F.plateHover.ease
          })
        };

      function A(e, t) {
        const {
          plateIndex: a,
          timeline: r,
          three: n,
          gridScale: s
        } = e, {
          onComplete: i,
          tweenPosition: o
        } = t;
        if (Number.isNaN(a) || !n || !r || !s || !n?.controls?.current) return null;
        const {
          scene: l,
          camera: d,
          controls: u
        } = n, p = T() * s, m = [];
        let f = null;
        l.traverse((e => {
          e.name === X.LP && m.push(e), e.userData.index === a && (f = e)
        }));
        const g = new c.Vector3;
        f && f.getWorldPosition(g);
        const h = {
            cameraPosition: {
              start: (new c.Vector3).copy(d.position),
              end: new c.Vector3(g.x, g.y, g.z + p)
            },
            controlsTarget: {
              start: (new c.Vector3).copy(u.current.target),
              end: g
            },
            plateOpacity: m.map(((e, t) => ({
              start: e.material.opacity,
              end: m[t].userData.index === a ? 1 : 0
            })))
          },
          b = {
            current: 0
          };
        let y = 0;
        return t.isResize || (y = E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration), r.to(b, {
          current: 1,
          duration: y,
          ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = b, t = h.cameraPosition.start.clone().lerp(h.cameraPosition.end, e);
            d.position.set(t.x, t.y, t.z);
            const a = h.controlsTarget.start.clone().lerp(h.controlsTarget.end, e);
            u.current.target.x = a.x, u.current.target.y = a.y, u.current.target.z = a.z
          },
          onComplete: i ? () => {
            i(e)
          } : void 0
        }, o || 0), b.current = 0, r.to(b, {
          current: 1,
          duration: E ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
          ease: E ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = b;
            m.forEach(((t, a) => {
              t.material && (t.material.opacity = c.MathUtils.lerp(h.plateOpacity[a].start, h.plateOpacity[a].end, e))
            }))
          }
        }, "<")
      }

      function O() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      }
      const k = "GTALicensePlatesRegular",
        j = 620,
        L = a(4495),
        M = "initial",
        V = "top",
        W = "bottom",
        D = {
          CANVAS_WRAP: "canvasWrap",
          CONFIRM_CONTENT: "confirmContent",
          CONFIRM_SIDEBAR: "confirmSidebar",
          CONFIRM_SIDEBAR_BUTTONS: "confirmOrderSidebarButtons",
          CONFIRM_SIDEBAR_BUTTONS_PORTAL: "confirmOrderSidebarButtonsPortal",
          CTA_WRAP: "ctaWrap",
          FIRST_PLATE_MESH: "firstPlateMesh",
          FOOTER: "footer",
          MOBILE_SIDEBAR_PORTAL_TARGET: "mobileSidebarPortalTarget",
          NEW_PLATE: "newPlate",
          NEW_PLATE_FORM: "newPlateForm",
          NEW_PLATE_SIDEBAR: "newPlateSidebar",
          NEW_PLATE_UI: "newPlateUI",
          ORDER_BG: "orderBg",
          ROOT: "root",
          SIDEBAR: "sidebar",
          SIDEBAR_BUTTONS: "sidebarButtons",
          UI: "ui",
          VIEW_PLATE: "viewPlate",
          TOGGLE_VIEW_BUTTON: "toggleViewButton"
        },
        z = [{
          id: 0,
          name: "BlueWhite2",
          displayName: "Blue on White 2",
          alphaImageUrl: L,
          albedoImageUrl: a(6050),
          roughnessImageUrl: a(8642),
          bumpImageUrl: a(9233),
          previewUrl: a(8928),
          image: null,
          fontColor: "#2C317E",
          fontSize: j,
          fontName: k,
          selected: !1
        }, {
          id: 1,
          name: "YellowBlack",
          displayName: "Yellow on Black",
          alphaImageUrl: L,
          albedoImageUrl: a(4360),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(3983),
          image: null,
          fontColor: "#D29D17",
          fontSize: j,
          fontName: k,
          selected: !1
        }, {
          id: 2,
          name: "OrangeBlue",
          displayName: "Orange on Blue",
          alphaImageUrl: L,
          albedoImageUrl: a(6879),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(1358),
          image: null,
          fontColor: "#CD7600",
          fontSize: j,
          fontName: k,
          selected: !1
        }, {
          id: 3,
          name: "BlueWhite1",
          displayName: "Blue on White 1",
          alphaImageUrl: L,
          albedoImageUrl: a(3493),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(7934),
          image: null,
          fontColor: "#2C317E",
          fontSize: j,
          fontName: k,
          selected: !1
        }, {
          id: 4,
          name: "BlueWhite3",
          displayName: "Blue on White 3",
          alphaImageUrl: L,
          albedoImageUrl: a(754),
          roughnessImageUrl: a(2423),
          bumpImageUrl: a(4517),
          previewUrl: a(2548),
          image: null,
          fontColor: "#2C317E",
          fontSize: j,
          fontName: k,
          selected: !1
        }],
        B = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        H = 0,
        Y = 2,
        U = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: H
          }
        },
        F = {
          plateHover: {
            duration: .25,
            ease: b.Power1.easeOut
          },
          clickPlate: {
            duration: .9,
            ease: b.Power4.easeInOut
          },
          deletePlate: {
            duration: .6,
            ease: b.Power4.easeInOut,
            delay: .005
          },
          sidebar: {
            in: {
              duration: .35,
              ease: b.Power2.easeIn,
              delay: .65
            },
            out: {
              duration: .3,
              ease: b.Power2.easeIn,
              delay: 0
            },
            mobile: {
              drawer: {
                duration: .9,
                ease: b.Power4.easeInOut
              },
              drawerSnap: {
                duration: .4,
                ease: b.Power4.easeOut
              },
              fadeHeader: {
                in: {
                  duration: .6,
                  ease: b.Power2.easeInOut,
                  delay: .3
                },
                out: {
                  duration: .7,
                  ease: b.Power2.easeInOut
                }
              },
              footer: {
                in: {
                  duration: .4,
                  ease: b.Cubic.easeIn,
                  delay: .9
                },
                out: {
                  duration: .4,
                  ease: b.Cubic.easeOut
                }
              }
            }
          },
          toggleView: {
            camera: {
              duration: .75,
              ease: b.Cubic.easeInOut
            },
            fadeIn: {
              duration: .5,
              ease: b.Power2.easeIn
            },
            fadeOut: {
              duration: .5,
              ease: b.Power2.easeIn
            },
            reset: {
              duration: .375,
              ease: b.Cubic.easeInOut
            }
          },
          transaction: {
            confirmOrder: {
              duration: .9,
              ease: b.Power3.easeInOut
            },
            fade: {
              in: {
                duration: .4,
                ease: b.Cubic.easeIn
              },
              out: {
                duration: .4,
                ease: b.Cubic.easeOut
              },
              landingPage: {
                duration: 1.15,
                ease: b.Cubic.easeInOut
              }
            }
          }
        },
        $ = {
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
        G = {
          light1: {
            x: -9.72,
            y: 5,
            z: -10.68
          },
          light2: {
            x: 10.4,
            y: 5,
            z: 4.52,
            carView: {
              x: 0,
              y: 14.4,
              z: 4.9
            }
          },
          light3: {
            x: -4.52,
            y: 10,
            z: 6.8,
            carView: {
              x: -14.52
            }
          },
          envMapIntensity: {
            plateView: .4,
            carView: .3
          }
        },
        Z = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        X = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        q = {
          faux: !0,
          index: 0,
          mpPlate: !1,
          noDelete: !1,
          spPlate: !1,
          plateText: "",
          style: x("BlueWhite2"),
          vehicles: []
        },
        K = (0, s.makeVar)(""),
        J = (0, s.makeVar)(null),
        Q = (0, s.makeVar)(null),
        ee = (0, s.makeVar)(null),
        te = (0, s.makeVar)(0),
        ae = (0, s.makeVar)(Z.LIST_PLATES),
        re = (0, s.makeVar)(null),
        ne = (0, s.makeVar)(null),
        se = (0, s.makeVar)(1),
        ie = (0, s.makeVar)(null),
        oe = (0, s.makeVar)(!1),
        le = (0, s.makeVar)(null),
        ce = (0, s.makeVar)(E()),
        de = (0, s.makeVar)(!1),
        ue = (0, s.makeVar)(!1),
        pe = (0, s.makeVar)(void 0),
        me = (0, s.makeVar)(""),
        fe = (0, s.makeVar)([]),
        ge = (0, s.makeVar)(null),
        he = (0, s.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        be = (0, s.makeVar)(z),
        ye = (0, s.makeVar)({}),
        ve = (e, t) => {
          const a = {
            ...ye(),
            [e]: t
          };
          ye(a)
        },
        xe = (0, s.makeVar)(0),
        we = (0, s.makeVar)(null),
        Ee = (0, s.makeVar)(null),
        _e = (0, s.makeVar)(null),
        Se = () => {
          const e = (0, s.useReactiveVar)(J),
            t = (0, s.useReactiveVar)(Q),
            a = (0, s.useReactiveVar)(ee),
            n = (0, s.useReactiveVar)(te),
            l = (0, s.useReactiveVar)(ae),
            c = (0, s.useReactiveVar)(ge),
            d = (0, s.useReactiveVar)(re),
            u = (0, s.useReactiveVar)(ne),
            p = (0, s.useReactiveVar)(se),
            m = (0, s.useReactiveVar)(ie),
            f = (0, s.useReactiveVar)(ce),
            g = (0, s.useReactiveVar)(oe),
            h = (0, s.useReactiveVar)(le),
            b = (0, s.useReactiveVar)(de),
            y = (0, s.useReactiveVar)(ue),
            v = (0, o.useLocale)(),
            [x, w] = (0, r.useState)(""),
            E = (0, s.useReactiveVar)(pe),
            _ = (0, s.useReactiveVar)(me),
            S = (0, s.useReactiveVar)(fe),
            T = (0, s.useReactiveVar)(he),
            P = (0, s.useReactiveVar)(be),
            I = (0, s.useReactiveVar)(K),
            R = (0, s.useReactiveVar)(ye),
            C = (0, i.useScConfig)(),
            N = (0, s.useReactiveVar)(xe),
            A = (0, s.useReactiveVar)(we),
            O = (0, s.useReactiveVar)(Ee),
            k = (0, s.useReactiveVar)(_e);
          return (0, r.useEffect)((() => {
            const e = (0, o.toScLocaleString)(v),
              t = `${document.location.pathname}${document.location.search}`,
              a = `${C.login}?returnUrl=${t}&lang=${e}`;
            w(a)
          }), []), {
            state: {
              canvasDimensions: e,
              character: t,
              currentPlate: a,
              currentPlateIndex: n,
              currentView: l,
              deletedPlateIndex: c,
              error: d,
              firstPlateMesh: u,
              gridScale: p,
              gridState: m,
              pendingOrder: E,
              plates: S,
              realHeight: I,
              isExpanded: g,
              isLoggedIn: h,
              isMobile: f,
              isSceneLoaded: y,
              loginUrl: x,
              isOrderConfirmed: b,
              plateNumber: _,
              plateNumberStatus: T,
              plateStyles: P,
              refs: R,
              selectedStyle: N,
              selectedVehicle: A,
              three: O,
              vehicles: k
            },
            setCanvasDimensions: J,
            setCharacter: Q,
            setCurrentPlate: ee,
            setCurrentPlateIndex: te,
            setCurrentView: ae,
            setDeletedPlateIndex: ge,
            setError: re,
            setFirstPlateMesh: ne,
            setGridState: ie,
            setIsOrderConfirmed: de,
            setPendingOrder: pe,
            setPlates: fe,
            realHeightReactive: K,
            setIsExpanded: oe,
            setIsLoggedIn: le,
            setIsMobile: ce,
            setIsSceneLoaded: ue,
            setGridScale: se,
            setPlateNumber: me,
            setPlateNumberStatus: he,
            setPlateStyles: be,
            setRefs: ve,
            setRefsInternal: ye,
            setSelectedStyle: xe,
            setSelectedVehicle: we,
            setThree: Ee,
            setVehicles: _e
          }
        };
      var Te = a(3322);
      const Pe = e => {
        let {
          t
        } = e;
        const {
          setRefs: a,
          state: n
        } = Se(), {
          realHeight: s
        } = n, i = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          a(D.FOOTER, i)
        }), [i.current]), (0, Te.jsx)("div", {
          className: "dfb5b2acf94c1bee2c37",
          ref: i,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, Te.jsxs)("div", {
            className: "e85531fe4eae0ee625c1",
            children: [(0, Te.jsxs)("div", {
              className: "ed35c6f20ece33d1283f",
              children: [(0, Te.jsx)(h.LanguageSelector, {}), (0, Te.jsxs)("div", {
                className: "fd7206567c293e3054b0",
                children: [(0, Te.jsx)(h.A, {
                  to: "/corpinfo",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info",
                  children: t("Corporate")
                }), (0, Te.jsx)(h.A, {
                  to: "/privacy",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy",
                  children: t("Privacy")
                }), (0, Te.jsx)(h.A, {
                  onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie settings",
                  children: t("Cookie Settings")
                }), (0, Te.jsx)(h.A, {
                  to: "/cookies",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie policy",
                  children: t("Cookie Policy")
                }), (0, Te.jsx)(h.A, {
                  to: "/legal",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal",
                  children: t("Legal")
                }), (0, Te.jsx)(h.A, {
                  to: "/ccpa",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "CCPA Link",
                  "data-gtm-label": "View CCPA Info",
                  children: t("Do Not Sell My Info")
                })]
              })]
            }), (0, Te.jsx)(h.Rating, {
              className: "bb8ac13e4a077787384b",
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })
        })
      };
      var Ie = a(6952),
        Re = a(6368);
      const Ce = {
          CTAWrap: "c4cbaa699036913808c4",
          visible: "e83d87e82c84a46d86c5",
          createNewPlate: "b78b65ece97c489311aa",
          signIn: "d09aecd4d58aeb14e15e",
          hover: "c13648f71e994e0f8458",
          ctaText: "f2ab95570f791dbca865",
          isWindows: "fc1a5cb44b899b14a45e",
          tryWithoutSigningIn: "f70b0bf7f92aef13ca2c",
          maxPlatesReached: "a00f9428dc1e65319e6b",
          hidden: "cfe744f3b51090d0f4c5",
          loggedOutCTA: "c9286346492d0d5b10a5",
          ctaIcon: "ba5988c6f9002e713b3d"
        },
        Ne = e => {
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
              e instanceof c.Mesh && (e.material.opacity = 0, e.material.transparent = !0, e.material.map && (e.material.map.encoding = c.LinearEncoding, e.material.map.needsUpdate = !0)), "Car_ShadowPlane" !== e.name && "banshee_HD_Glass_SingleLayer" !== e.name && "banshee_HD_Shells_VertexPaint_Cage" !== e.name || (e.renderOrder = 1, e instanceof c.Mesh && (e.material.depthWrite = !0))
            })), i.getObjectByName("Car_Banshee_LOD_VertexColors")?.traverse((e => {
              e.castShadow = !0, e instanceof c.Mesh && (e.material.envMap = t, e.material.envMapIntensity = 1)
            })), i.visible = !1
          }), [a]), (0, r.useEffect)((() => {
            n && n()
          }), []), (0, Te.jsx)("primitive", {
            position: s,
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            object: i
          })
        };
      var Ae = a(7028);
      const Oe = "#898989",
        ke = "#000000",
        je = ["0.05", "0.15", "0.4"],
        Le = ["0.0", "0.5", "1.0"],
        Me = ["0.299", "0.587", "0.114"],
        Ve = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        We = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= B.sm ? t = 1 / 4 : a <= B.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        De = {
          bumpMap: We(),
          map: We(),
          roughnessMap: We()
        },
        ze = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: n,
            plateIndex: s,
            plateWidthInPixels: o,
            position: l = [0, 0, 0],
            width: d = 2
          } = e;
          const {
            state: u,
            setCurrentView: p,
            setCurrentPlate: m,
            setCurrentPlateIndex: f,
            setRefs: g
          } = Se(), {
            currentView: h,
            isLoggedIn: b,
            isSceneLoaded: y,
            pendingOrder: x,
            plateNumber: w,
            plates: E,
            isMobile: _,
            selectedStyle: S,
            gridScale: T
          } = u, [P, I] = (0, r.useState)(v(n.style.id)), R = [0, 0, 0], A = [1, 1, 1], [O] = (0, r.useState)(0 === n.index), k = (0, r.useRef)(), j = E.filter((e => {
            let {
              faux: t
            } = e;
            return !t
          })).length >= 30;
          (0, r.useEffect)((() => {
            k.current && 0 === k.current.userData.index && g(D.FIRST_PLATE_MESH, k)
          }), [k.current]);
          const L = (0, r.useRef)(),
            M = (0, r.useRef)(null),
            {
              track: V
            } = (0, i.useGtmTrack)(),
            W = {
              view_name: "license plate creator - landing page logged " + (b ? "in" : "out")
            },
            z = (0, r.useCallback)((e => {
              !n.index && j || C(e, h)
            }), [h]),
            F = (0, r.useCallback)((e => {
              if (p() === Z.LIST_PLATES) {
                const t = 0 === e ? Z.NEW_PLATE : Z.VIEW_PLATE;
                e && (V({
                  ...W,
                  event: "license_plate_open",
                  event_category: "license_plate",
                  event_action: "open",
                  view_name: "list plates",
                  position: e
                }), V({
                  ...W,
                  event: "virtualPageview",
                  display_type: _ ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                }), m(E[e]), f(e)), p(t)
              }
            }), [E]),
            $ = (0, r.useCallback)((e => {
              var t;
              O && (e.uniforms.saturation = U.saturation, e.uniforms.fade = U.fade, e.uniforms.shaderIndex = U.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == ${Y}) {\n            float desaturationOpacity = gl_FragColor.a * (saturation + 0.3);\n            vec3 desaturationColor = vec3(\n                ${Me[0]},\n                ${Me[1]},\n                ${Me[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, desaturationOpacity);\n\n        } else if (shaderIndex == ${H}) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=b?je:Le)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [O, b, x]);
          return (0, r.useEffect)((() => {
            O && (n.plateText = w)
          }), [O ? w : null]), (0, r.useEffect)((() => {
            if (O && P && P.id !== S) {
              const e = v(S);
              I(e)
            }
          }), [O, S]), (0, r.useEffect)((() => {
            U.shaderIndex.value = b ? x ? H : Y : H, L.current && (L.current.bumpScale = .015 * T, L.current.needsUpdate = !0)
          }), [L.current, x, b, T]), (0, r.useMemo)((() => {
            if (!y) return null;
            const [e, r, i] = (e => {
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete De.bumpMap, De.bumpMap = We();
                  const a = De.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= B.sm ? r = 1 / 4 : n <= B.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const i = 5 * r;
                  return Ve || (a.filter = `blur(${i}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), Ve && Ae.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * i), new c.CanvasTexture(a.canvas)
                })(a, P),
                n = ((e, t) => {
                  delete De.map, De.map = We();
                  const a = De.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= B.sm ? r = 1 / 4 : n <= B.md && (r = .5);
                  const s = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new c.CanvasTexture(a.canvas)
                })(a, P),
                s = _ ? void 0 : ((e, t) => {
                  delete De.roughnessMap, De.roughnessMap = We();
                  const a = De.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= B.sm ? r = 1 / 4 : n <= B.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = ke, a.fillStyle = ke, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = Oe, a.fillStyle = Oe, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new c.CanvasTexture(a.canvas)
                })(a, P);
              return [r, n, s]
            })(O ? w : n.plateText);
            return (0, Te.jsxs)("mesh", {
              name: X.LP,
              visible: !0,
              userData: {
                index: s
              },
              position: l,
              rotation: R,
              scale: A,
              ref: k,
              onClick: () => {
                b && (!n.index && j || F(n.index))
              },
              onPointerOver: _ ? void 0 : () => {
                b && p() === Z.LIST_PLATES && k.current && z(k.current)
              },
              onPointerOut: _ ? void 0 : () => {
                var e;
                b && k.current && (e = k.current, !n.index && j || N(e))
              },
              children: [(0, Te.jsx)("planeBufferGeometry", {
                args: [d, a, d, a]
              }), (0, Te.jsx)("meshPhysicalMaterial", {
                alphaMap: n.alphaMap,
                bumpMap: e,
                opacity: 0,
                bumpScale: .015,
                depthTest: !1,
                envMap: t,
                envMapIntensity: G.envMapIntensity.plateView,
                map: r,
                metalness: .4,
                onBeforeCompile: O && $ || void 0,
                ref: L,
                roughness: .3,
                roughnessMap: i,
                transparent: !0
              })]
            })
          }), [O ? M.current : void 0, O, b, _, y, n, o, O ? w : void 0, O ? P : void 0])
        },
        Be = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const [s, o, l, d] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: u
          } = a, {
            gridOptions: p,
            gridPosition: m
          } = t, {
            bottomMarginAsRatio: f,
            columnGap: g,
            columns: h,
            isVertical: b,
            rowGap: y,
            topMarginAsRatio: v
          } = p, {
            state: x,
            realHeightReactive: w,
            setGridScale: E,
            setCurrentView: _
          } = Se(), {
            currentView: T,
            gridScale: P,
            plates: I,
            isLoggedIn: R,
            isMobile: C,
            realHeight: N,
            refs: A,
            currentPlateIndex: k,
            three: j,
            canvasDimensions: L
          } = x, M = (0, r.useRef)(null), {
            camera: V,
            scene: W,
            gl: z
          } = (0, n.useThree)(), [B, H] = (0, r.useState)(new c.Vector3(m.x, m.y, m.z)), [Y, U] = (0, r.useState)(0), [F, $] = (0, r.useState)(0), [G, q] = (0, r.useState)(0), [K, J] = (0, r.useState)(!0), [Q, ee] = (0, r.useState)(null), {
            track: te
          } = (0, i.useGtmTrack)(), ae = {
            view_name: "license plate creator - landing page logged " + (R ? "in" : "out")
          }, [re, ne] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            T === Z.LIST_PLATES && te({
              ...ae,
              event: "virtualPageview",
              display_type: C ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (R ? "in" : "out")
            })
          }), [T]);
          const se = (0, r.useCallback)((() => {
            if (L) {
              const {
                width: e,
                height: a
              } = L, n = l * h + g * (h - 1), s = Math.abs(m.z) * Math.tan((0, Re.Id)(V.fov / 2)) * 2, i = t.gridDimensions.margins.meters.top, o = t.gridDimensions.margins.meters.bottom, c = t.gridDimensions.width, d = c / n, u = t.gridDimensions.height, p = u / s;
              $((u - s + i + o).toFixed(4)), E(d), ee({
                width: e,
                height: a
              }), Z.LIST_PLATES, (0, r.startTransition)((() => {
                const e = z.domElement.offsetHeight,
                  t = p * e + v * e + f * e,
                  a = S(),
                  r = A[D.ROOT]?.current;
                r && (r.style.height = `${t}px`), ne({
                  canvasHeight: e,
                  rootHeight: t
                }), w(`${Math.round(t)}px`);
                const n = Math.round(l * d / c * (z.domElement.offsetWidth - 2 * a));
                U(n)
              }))
            }
          }), [V.fov, L, Q, h, T, C, m, I, o, W, v, k, j]);
          (0, r.useEffect)((() => {
            m && H(m), se()
          }), [m, L]);
          const ie = (0, r.useMemo)((() => I?.map((e => {
              if (0 === Y) return;
              const {
                index: t
              } = e, a = -1 * s / 2 + .251953125 * s, r = (b ? t % h * (s + g) : Math.floor(t / h) * (s + g)) + s / 2, n = (b ? Math.floor(t / h) * (o + y) * -1 : t % h * (o + y) * -1) + a;
              return (0, Te.jsx)(ze, {
                envMap: u,
                height: d,
                position: [r, n, 0],
                plateWidthInPixels: Y,
                plate: e,
                plateIndex: e.index,
                width: l
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [Y, I]),
            oe = (0, r.useCallback)((function() {
              if (!K || arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) {
                const e = A[D.ROOT].current,
                  t = document.body;
                t.style.removeProperty("overflow"), e && (e.style.touchAction = "auto"), O() || requestAnimationFrame((() => {
                  t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, G)
                })), J(!0)
              }
            }), [C, G, K]),
            le = (0, r.useCallback)((() => {
              if (K) {
                const e = A[D.ROOT].current,
                  t = document.body;
                if (e && (e.style.touchAction = "none", t.style.overflow = "hidden"), !O()) {
                  const e = window.scrollY;
                  requestAnimationFrame((() => {
                    t.style.position = "fixed", t.style.top = `-${e}px`, q(e)
                  }))
                }
                J(!1)
              }
            }), [C, A, K]);
          (0, r.useEffect)((() => {
            T !== Z.LIST_PLATES ? le() : oe()
          }), [T]), (0, r.useEffect)((() => () => {
            oe(!0)
          }), []);
          const ce = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (_() === Z.LIST_PLATES || e) {
              const e = A[D.ROOT]?.current;
              if (!e || !re) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = re, r = C && !R ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = B.y + F * n;
              M?.current?.position?.set(B.x, Number(s.toFixed(3)), B.z)
            }
          }), [M.current, B, A, F, re, R, C]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ce(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [M.current, R, B, m, N, A, F, re]), (0, r.useEffect)((() => {
            if (!M.current || !W) return;
            const e = W.getObjectByName("Scene");
            M.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [M.current, W]), (0, r.useMemo)((() => (0, Te.jsx)("group", {
            name: X.LP_GRID,
            ref: M,
            position: m,
            scale: P,
            children: 0 !== Y && ie
          })), [P, ie, Y])
        },
        He = e => {
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
          return (0, Te.jsxs)(Te.Fragment, {
            children: [(0, Te.jsx)("pointLight", {
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
            }), d && (0, Te.jsx)("pointLightHelper", {
              light: c,
              sphereSize: 1
            })]
          })
        },
        Ye = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, Te.jsxs)("group", {
            name: "Lights",
            children: [(0, Te.jsx)(He, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [G.light1.x, G.light1.y, G.light1.z],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Te.jsx)(He, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [G.light2.x, G.light2.y, G.light2.z],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, Te.jsx)(He, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [G.light3.x, G.light3.y, G.light3.z],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, n.extend)({
        OrbitControls: Ie.z
      });
      const Ue = {
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
      let Fe = window.innerWidth;
      const $e = e => {
        let {
          loadedAssets: t
        } = e;
        const {
          state: a,
          setIsSceneLoaded: s,
          setThree: i,
          setGridState: o
        } = Se(), {
          gridState: l,
          isSceneLoaded: d,
          plates: u,
          plateStyles: p,
          isLoggedIn: m,
          three: f,
          refs: h
        } = a, [b, y, v] = (0, n.useThree)((e => {
          let {
            camera: t,
            gl: a,
            scene: r
          } = e;
          return [t, a, r]
        })), x = (0, r.useRef)(), [E, _] = (0, r.useState)(!1), [T, P] = (0, r.useState)(null), I = () => {
          if (y.domElement.style.opacity = 1, y.domElement.style.position = "absolute", y.domElement.style.top = 0, y.domElement.style.left = 0, y.domElement.style.right = 0, y.domElement.style.bottom = 0, y.domElement.style.touchAction = "auto", !d) {
            const e = new c.Vector3,
              t = new c.Vector3;
            x.current.target.copy(t), i({
              scene: v,
              camera: b,
              renderer: y,
              controls: x,
              originalCameraFov: b.fov,
              originalCameraPosition: e,
              originalControlsTarget: t
            })
          }
          s(!0)
        };
        (0, r.useEffect)((() => {
          u.length && T && R()
        }), [T, u]), (0, r.useEffect)((() => (P({
          height: y.domElement.offsetHeight,
          width: y.domElement.offsetWidth
        }), () => {
          s(!1)
        })), []), (0, r.useEffect)((() => {
          t && u?.length && null !== m && _(!0)
        }), [t, u, m]), (0, r.useEffect)((() => {
          t && t?.environmentMap && p?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
        }), [t, p]);
        const R = (0, r.useCallback)((() => {
          const e = document.getElementById("list-plates-sidebar");
          if (!b || !e || !T) return;
          const t = S(),
            {
              plateWidth: a,
              plateHeight: r,
              columnGap: n,
              rowGap: s,
              depth: i
            } = Ue,
            l = i * Math.tan((0, Re.Id)(17.5)),
            d = -1 * b.aspect * l,
            p = window.innerWidth < B.lg ? e.offsetHeight + t : t,
            f = t,
            g = y.domElement.offsetWidth,
            h = y.domElement.offsetHeight,
            v = (() => {
              const e = window.innerWidth;
              switch (!0) {
                case e >= B.xxl:
                  return w(11);
                case e >= B.xl:
                  return w(12);
                case e >= B.md:
                  return w(13);
                default:
                  return w(20)
              }
            })(),
            x = f / g,
            E = d - d * x * 2,
            _ = p / h,
            P = l - l * _ * 2,
            I = v / h,
            R = new c.Vector3(E, P, -i),
            C = m ? (() => {
              const e = window.innerWidth;
              switch (!0) {
                case e >= B.xxl:
                  return 3;
                case e >= B.lg && e <= 1280:
                  return 1;
                case e >= 600:
                  return 2;
                default:
                  return 1
              }
            })() : 1,
            N = Math.ceil(u.length / C),
            A = a * C + n * (C - 1),
            O = r * Math.ceil(u.length / C) + s * (Math.ceil(u.length / C) - 1),
            k = Math.abs(R.z) * Math.tan((0, Re.Id)(b.fov / 2)) * 2,
            j = x * (k * (g / h)),
            L = _ * k,
            M = I * k,
            V = Math.abs(2 * R.x),
            W = V / A * O;
          o({
            gridPosition: R,
            gridOptions: {
              ...Ue,
              columns: C,
              rows: N,
              topMarginAsRatio: _,
              bottomMarginAsRatio: I,
              leftMarginAsRatio: x
            },
            gridDimensions: {
              margins: {
                meters: {
                  top: L,
                  left: j,
                  bottom: M
                },
                pixels: {
                  top: p,
                  left: f,
                  bottom: v
                }
              },
              height: W,
              width: V
            }
          })
        }), [u, h?.[D.SIDEBAR]?.current, b, T, m]);
        (0, r.useEffect)((() => {
          u.length && x.current && (x.current.enabled = !0)
        }), [x.current, u]), (0, r.useEffect)((() => {
          f && x.current && !f?.controlsInit && i({
            ...f,
            controls: x,
            controlsInit: !0
          })
        }), [x.current, f]), (0, n.useFrame)((() => {
          x?.current?.update()
        }));
        const C = (0, r.useCallback)(g().debounce((() => {
          const e = h[D.CANVAS_WRAP]?.current;
          if (!e) return;
          const t = h[D.CTA_WRAP]?.current,
            a = window.innerWidth;
          t && a !== Fe && (t.classList.remove(Ce.visible), Fe = a), P({
            width: e.offsetHeight,
            height: e.offsetWidth
          })
        }), 100), [b, h]);
        (0, r.useEffect)((() => (C(), window.addEventListener("resize", C, !0), () => window.removeEventListener("resize", C, !0))), [b, h]);
        const N = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, Te.jsx)(Ne, {
            position: [0, -4.05, -11.76],
            envMap: t.environmentMap,
            envModel: t.environmentModel,
            onLoad: I
          }) : null), [t]),
          A = (0, r.useMemo)((() => (0, Te.jsx)(Ye, {
            baseIntensity: .6,
            mapSize: 1024
          })), []),
          O = (0, r.useMemo)((() => (0, Te.jsx)(Be, {
            gridState: l,
            loadedAssets: t
          })), [l, t]),
          k = (0, r.useMemo)((() => (0, Te.jsx)("orbitControls", {
            ref: x,
            screenSpacePanning: !0,
            args: [b, y.domElement],
            enableDamping: !0,
            enableZoom: !1,
            enablePan: !1,
            maxPolarAngle: $.plateView.maxPolarAngle,
            minPolarAngle: $.plateView.minPolarAngle,
            maxAzimuthAngle: $.plateView.maxAzimuthAngle,
            minAzimuthAngle: $.plateView.minAzimuthAngle,
            minDistance: -1,
            maxDistance: 100
          })), [b, x, y]);
        return (0, Te.jsxs)(Te.Fragment, {
          children: [A, N, E && l ? O : "", k]
        })
      };
      var Ge = a(3468),
        Ze = a(1467),
        Xe = a(621);
      const qe = e => {
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
            state: p
          } = Se(), {
            currentView: m
          } = p, f = (0, r.useRef)(null), g = (0, r.useState)(M), h = d?.get() || 0, b = (0, Ze.useSpring)({
            y: t ? h : u,
            config: {
              easing: Ze.easings.easeInOutQuart,
              duration: 900
            }
          }), v = (0, r.useRef)(u), x = (0, r.useRef)(0), w = (0, r.useRef)(!1);
          (0, r.useEffect)((() => {
            const e = {
              top: a,
              bottom: n,
              y: b.y,
              offset: v,
              sidebarRef: f
            };
            f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", t ? o(e) : i(e)
          }), [t]);
          const E = (0, r.useCallback)((0, Xe.useDrag)((e => {
              if (m !== Z.CONFIRM_ORDER) {
                if (!w.current)
                  if (v.current = Math.max(a, Math.min(n, b.y.get() + e.delta[1])), x.current = e.movement[1], e.dragging) b.y.set(v.current);
                  else {
                    const e = {
                      y: b.y.get()
                    };
                    if (v.current < a / 2) {
                      const t = y().to(e, {
                        y: a,
                        duration: F.sidebar.mobile.drawerSnap.duration,
                        ease: F.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = V
                    } else if (v.current > n / 2) {
                      const t = y().to(e, {
                        y: n,
                        duration: F.sidebar.mobile.drawerSnap.duration,
                        ease: F.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = W
                    } else {
                      const t = y().to(e, {
                        y: 0,
                        ease: F.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = M
                    }
                    v.current = b.y.get()
                  } const t = {
                  top: a,
                  bottom: n,
                  y: b.y,
                  offset: v,
                  sidebarRef: f,
                  dragParams: e
                };
                s(t)
              }
            })), [m, a, n]),
            _ = () => {
              if (Math.abs(x.current) < 3) {
                w.current = !0, c({
                  drawerStateRef: g
                });
                const e = {
                    y: b.y.get()
                  },
                  t = {};
                g.current === M ? (t.y = a, f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = V) : (g.current === V || g.current === W) && (t.y = 0, f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = M), y().to(e, {
                  y: t.y,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    b.y.set(e.y)
                  },
                  onComplete: () => {
                    w.current = !1, v.current = b.y.get()
                  }
                })
              }
            };
          return (0, r.useMemo)((() => (0, Te.jsxs)(Ze.animated.div, {
            ...E(),
            ref: f,
            style: b ? {
              y: b.y
            } : void 0,
            className: "f8e313637e581e34230c",
            children: [(0, Te.jsx)("hr", {
              className: "a91faa3cca1b0eb5ec05",
              onClick: _,
              "aria-hidden": "true"
            }), l]
          })), [b.y.get(), _, l])
        },
        Ke = e => {
          let {
            onClick: t
          } = e;
          return (0, Te.jsx)("button", {
            type: "button",
            onClick: t,
            className: "c5cb6a9ee116fb9038cc",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        Je = () => (0, Te.jsx)("div", {
          className: "cfff519ec96d725939ed",
          "aria-label": "Los Santos Customs"
        }),
        Qe = e => {
          let {
            button: {
              buttonText: t,
              buttonIcon: a,
              isDisabled: r,
              onClick: n
            },
            closeModal: s
          } = e;
          return (0, Te.jsxs)("button", {
            className: "cf5bbe6406012d6190c3",
            disabled: r,
            onClick: () => (n && n(), void s()),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, Te.jsx)("p", {
              className: "e89f1318679b1cb5b981",
              children: t
            }), a && (0, Te.jsx)("div", {
              className: "bf51cc3522627ca3b7f9"
            })]
          })
        },
        et = e => {
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
            } = Se();
          return (0, r.useEffect)((() => {
            o && c.current && (c.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [o]), (0, Te.jsxs)("dialog", {
            ref: c,
            className: "c6fb99519e95f8eba227",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), l())
            })(e),
            children: [t && (0, Te.jsx)("i", {
              className: "c53fac5b3efe1b1fa592"
            }), (0, Te.jsxs)("div", {
              className: "c1c74e2339197a57da41",
              children: [(0, Te.jsx)("h3", {
                children: a
              }), n && (0, Te.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, Te.jsx)("div", {
              className: "d9f6892c7824cf07e386",
              children: s.splice(0, 2).map((e => (0, Te.jsx)(Qe, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (c.current?.close(), void l())
              }, e.buttonText)))
            })]
          })
        },
        tt = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, Te.jsxs)("div", {
            className: "efe5eaeb5559423002bc",
            children: [(0, Te.jsx)("p", {
              className: "c827db6a5956e0dea5a1",
              children: t
            }), (0, Te.jsx)("p", {
              className: "ee9baad67e97f93898e3",
              children: a
            })]
          })
        },
        at = {
          viewPlate: "fe4f06af3be1ba7039f2",
          expanded: "fb234ef972f920eb5df5",
          plateInfo: "baa84d7c179d06b87a6d",
          vehicles: "db3b0344524596cc220a",
          deleteBtnContainer: "ea0ed621bc121bbaca85",
          deleteBtn: "a53ceb90b9f76b2f8842",
          noDeleteClarification: "c34f5b7b7d6e07714fec",
          drawerHandle: "e9dfcfe6d0e822e998c6",
          sidebar: "e71c5fb1062cc71167b7",
          landingPage: "e6f4b08bc9a17586535c",
          ui: "da92a60b60b090d88478",
          uiBottom: "c2f48e5cf94c3ff17567",
          noVehicles: "bc3f43fa5e19a47eeb0f"
        },
        rt = "visible",
        nt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, s.useUserBearerToken)(),
            {
              setCurrentView: n,
              setIsExpanded: l,
              setRefs: d,
              setError: u,
              state: p,
              setDeletedPlateIndex: m
            } = Se(),
            {
              currentPlateIndex: f,
              currentPlate: h,
              currentView: b,
              gridScale: v,
              gridState: x,
              isExpanded: w,
              isMobile: _,
              plates: S,
              refs: T,
              three: P
            } = p,
            [R, C] = (0, r.useState)(b === Z.VIEW_PLATE),
            [N, O] = (0, r.useState)([]),
            [k, j] = (0, r.useState)(!1),
            [L, z] = (0, r.useState)(!1),
            B = (0, r.useRef)(null),
            H = (0, r.useRef)(null),
            Y = (0, r.useRef)(null),
            U = (0, r.useRef)(null),
            $ = (0, r.useRef)(35),
            G = (0, r.useRef)(null),
            [q, K] = (0, r.useState)(.4 * window.innerHeight),
            [J, Q] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [ee, te] = (0, r.useState)(0),
            ae = (0, r.useRef)(q),
            [re, ne] = (0, r.useState)(null),
            se = (0, r.useRef)(null),
            ie = (0, r.useRef)(null),
            {
              track: oe
            } = (0, i.useGtmTrack)(),
            le = {
              view_name: "license plate creator - view plate"
            },
            ce = b === Z.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            b !== Z.VIEW_PLATE && L && z(!1)
          }), [b, L]);
          const de = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(f) || (de.current = f)
          }), [f]);
          const ue = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            b && (ue.current = b)
          }), [b]);
          const pe = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            v && (pe.current = v)
          }), [v]);
          const me = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (ue.current !== Z.VIEW_PLATE) return;
            const {
              renderer: r
            } = P;
            A({
              plateIndex: de.current,
              three: P,
              timeline: e,
              gridScale: t
            }, {
              onComplete: e => {
                e?.three?.camera && (B.current = new c.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), U?.current?.children && y().to(U.current.children, {
                  pointerEvents: "all"
                }), _ && (r.domElement.style.touchAction = "none")
              },
              tweenPosition: 0,
              isResize: a
            })
          }), [P, f, b, x, S]);
          (0, r.useEffect)((() => {
            if (!P?.controls || !R) return;
            const {
              controls: e
            } = P, t = y().timeline({
              duration: _ ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
              ease: _ ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            me(t, v, !0)
          }), [v, P]);
          const fe = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!P?.camera || !B.current) return;
            const {
              camera: t,
              controls: a,
              renderer: r
            } = P;
            if (y().to(t.position, {
                x: Number(B.current.x),
                y: Number(B.current.y),
                z: Number(B.current.z),
                duration: F.toggleView.reset.duration,
                ease: F.toggleView.reset.ease,
                onStart: () => {
                  a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1)
                },
                onComplete: () => {
                  n(Z.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.enableZoom = !1), ae.current = 0, e?.onComplete && e.onComplete()
                }
              }), _) {
              const e = r.domElement;
              y().to(e.style, {
                opacity: 1,
                duration: F.toggleView.reset.duration,
                ease: F.toggleView.reset.ease
              })
            }
            oe({
              ...le,
              event: "modal_close",
              event_category: "modal",
              event_action: "close",
              event_label: "view plate",
              view_name: "license plate creator - view plate"
            })
          }), [_, P, B]);
          (0, r.useEffect)((() => {
            d(D.VIEW_PLATE, G)
          }), [G.current]), (0, r.useEffect)((() => {
            O(S?.[f]?.vehicles ?? [])
          }), [f, S]), (0, r.useEffect)((() => {
            C(b === Z.VIEW_PLATE)
          }), [b]), (0, r.useEffect)((() => {
            P?.scene && U?.current && (e => {
              const {
                scene: t,
                controls: a
              } = P, r = [];
              t.traverse((e => {
                e.name === X.LP && r.push(e), e.userData.index === Number(f) && (H.current = e)
              }));
              const n = y().timeline({
                duration: _ ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                ease: _ ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              e === rt ? (me(n, pe.current, !1), ie?.current && n.to([U.current, ie.current, _ ? void 0 : Y.current], {
                autoAlpha: 1,
                duration: F.sidebar.in.duration,
                ease: F.sidebar.in.ease,
                delay: F.sidebar.in.delay,
                onComplete: () => {
                  ie?.current && (ie.current.style.pointerEvents = "all"), Y?.current && (Y.current.style.pointerEvents = "all")
                }
              }, 0), P?.camera && _ && !$.current && ($.current = P.camera.fov)) : (Y.current && y().to(Y.current, {
                pointerEvents: "none"
              }), y().to(U.current.children, {
                pointerEvents: "none"
              }), y().to(U.current, {
                autoAlpha: 0,
                duration: F.sidebar.out.duration,
                ease: F.sidebar.out.ease,
                delay: F.sidebar.out.delay
              }), !_ && Y.current ? (y().to(Y.current, {
                autoAlpha: 0,
                duration: F.sidebar.out.duration,
                ease: F.sidebar.out.ease,
                delay: F.sidebar.out.delay
              }), y().to(ie.current, {
                autoAlpha: 0,
                duration: F.sidebar.out.duration,
                ease: F.sidebar.out.ease,
                delay: F.sidebar.out.delay,
                onComplete: () => {
                  ie.current.style.pointerEvents = "none"
                }
              })) : y().to(ie.current, {
                autoAlpha: 0,
                duration: F.sidebar.out.duration,
                ease: F.sidebar.out.ease,
                delay: F.sidebar.out.delay,
                onComplete: () => {
                  ie.current.style.pointerEvents = "none"
                }
              }), a?.current && (a.current.minDistance = 0))
            })(R ? rt : "hidden")
          }), [ie.current, P, R]), (0, r.useEffect)((() => {
            if (_ && G.current) {
              const e = G.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              te(a - 48 - t), K(a), Q(-1 * (.6 * e - 80))
            }
          }), [_, G.current]);
          const ge = (0, r.useRef)(null),
            he = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            ge.current = R
          }), [R]), (0, r.useEffect)((() => {
            he.current = P
          }), [P]);
          const be = (0, r.useCallback)(g().debounce((() => {
            if (!0 !== ge.current) return;
            const {
              renderer: e
            } = he.current;
            ue.current === Z.VIEW_PLATE && (E() ? e.domElement.style.transform = `translateY(${q/-2}px)` : e.domElement.style.transform = "translateY(0px)", Y.current.style.opacity = "1", Y.current.style.visibility = "visible", Y.current.style.pointerEvents = "all"), ue.current === Z.CONFIRM_ORDER && (E() ? e.domElement.style.transform = `translateY(${J/1.5}px)` : e.domElement.style.transform = "translateY(0px)")
          }), 100), [_, R, b, P, J]);
          (0, r.useEffect)((() => (window.addEventListener("resize", be, !0), () => window.removeEventListener("resize", be, !0))), [_, R, b, P, J]);
          const ye = (0, Te.jsxs)(Te.Fragment, {
              children: [!_ && (0, Te.jsx)("hr", {
                className: at.drawerHandle,
                onClick: () => {
                  l(!w)
                },
                "aria-hidden": "true"
              }), (0, Te.jsx)("div", {
                className: at.plateInfo,
                children: (0, Te.jsxs)("section", {
                  className: at.vehiclesApplied,
                  children: [(0, Te.jsx)("label", {
                    className: N.length ? "" : `${at.noVehicles}`,
                    children: N.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, Te.jsx)("div", {
                    className: at.vehicles,
                    children: N.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, Te.jsx)(tt, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            ve = (0, r.useCallback)((e => {
              if (!P) return;
              const {
                drawerStateRef: t
              } = e, {
                renderer: a,
                camera: r
              } = P, n = a.domElement, s = {
                buttonWrapOpacity: se.current.style.opacity,
                canvasWrapOpacity: n.style.opacity,
                canvasHeight: n.offsetHeight,
                canvasTranslateY: Number(I(n).y),
                fov: r.fov
              }, i = {};
              t.current === M ? (i.buttonWrapOpacity = 0, i.canvasWrapOpacity = 0, i.canvasHeight = -J, i.canvasTranslateY = q / -2, i.fov = $.current, n.style.pointerEvents = "none", se.current.style.pointerEvents = "none") : (t.current === V || t.current === W) && (i.buttonWrapOpacity = 1, i.canvasWrapOpacity = 1, i.canvasHeight = -J, i.canvasTranslateY = q / -2, i.fov = $.current, n.style.pointerEvents = "all", se.current.style.pointerEvents = "all"), y().to(s, {
                buttonWrapOpacity: i.buttonWrapOpacity,
                canvasWrapOpacity: i.canvasWrapOpacity,
                canvasHeight: i.canvasHeight,
                canvasTranslateY: i.canvasTranslateY,
                fov: i.fov,
                duration: F.sidebar.mobile.drawerSnap.duration,
                ease: F.sidebar.mobile.drawerSnap.ease,
                onUpdate: () => {
                  n.style.opacity = s.canvasWrapOpacity, se.current.style.opacity = s.buttonWrapOpacity, r.fov = s.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${s.canvasTranslateY}px)`
                }
              })
            }), [P, q, J]),
            xe = (0, r.useCallback)((e => {
              if (!P) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: i,
                renderer: o
              } = P, l = o.domElement, c = -J + q - 48;
              if (t.dragging) {
                const e = (0, Re.ii)(0, n, r.get()),
                  o = (0, Re.t7)(0, 1, 1 - e);
                if (l.style.opacity = o, se.current.style.opacity = o, se.current.style.pointerEvents = r.get() >= 0 ? "all" : "none", se.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                  const e = (0, Re.ii)(0, s, r.get()),
                    a = (0, Re.t7)($.current, 40, e);
                  i.fov = a;
                  const n = Number(I(l).y) + t.delta[1] / 2;
                  l.style.transform = `translateY(${n}px)`, i.updateProjectionMatrix()
                }
              } else {
                const e = {
                  buttonWrapOpacity: se.current.style.opacity,
                  canvasWrapOpacity: l.style.opacity,
                  fov: i.fov,
                  canvasHeight: l.offsetHeight,
                  canvasTranslateY: Number(I(l).y)
                };
                a.current < J / 2 ? (l.style.pointerEvents = "none", se.current.style.pointerEvents = "none", y().to(e, {
                  buttonWrapOpacity: 0,
                  canvasWrapOpacity: 0,
                  canvasHeight: c,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity
                  }
                })) : a.current > s / 2 ? (l.style.pointerEvents = "all", se.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: 40,
                  canvasHeight: c,
                  canvasTranslateY: -48,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                })) : (l.style.pointerEvents = "all", se.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: $.current,
                  canvasHeight: -J,
                  canvasTranslateY: q / -2,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                }))
              }
            }), [P, se.current, J]),
            we = (0, r.useCallback)((e => {
              const t = T[D.UI]?.current;
              if (!t || !P?.scene) return;
              const {
                scene: a,
                camera: r,
                renderer: n
              } = P, s = n.domElement, {
                y: i,
                sidebarRef: o
              } = e, l = t.offsetHeight, c = {
                mobileSidebarHeight: i.get(),
                opacity: o.current.style.opacity,
                height: s.offsetHeight,
                fov: r.fov
              };
              y().to(c, {
                opacity: 1,
                height: l,
                mobileSidebarHeight: q,
                fov: $.current,
                duration: F.sidebar.mobile.drawer.duration,
                ease: F.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, se.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                },
                onComplete: () => {
                  s.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [T, P, q]),
            Ee = (0, r.useCallback)((e => {
              if (!P?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === re && ne(r);
              const {
                renderer: n
              } = P;
              t.current.style.pointerEvents = "all";
              const s = {
                mobileSidebarHeight: q,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              y().to(s, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: q / 2,
                duration: F.sidebar.mobile.drawer.duration,
                ease: F.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), se.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, ie.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [re, P, q]),
            _e = (0, r.useMemo)((() => _ ? (0, Te.jsx)(qe, {
              isVisible: R,
              top: J,
              bottom: ee,
              onTap: ve,
              onDrag: xe,
              onHide: we,
              onShow: Ee,
              mobileSidebarHeight: q,
              children: ye
            }) : (0, Te.jsx)("div", {
              ref: Y,
              className: at.sidebar,
              children: ye
            })), [se.current, ie.current, w, q, _, R, T, Y.current, N, J, ee]);
          return (0, Te.jsxs)("div", {
            className: at.viewPlate,
            ref: G,
            children: [(0, Te.jsx)(et, {
              title: t("lp.modal.delete.title"),
              secondaryText: t("lp.modal.delete.description").replace("{plateText}", h?.plateText ?? ""),
              buttons: [{
                buttonText: t("lp.modal.delete.confirm"),
                onClick: () => {
                  (async () => {
                    try {
                      if (!h) return;
                      const {
                        plateText: e
                      } = h;
                      if (!a) return;
                      z(!0);
                      const {
                        status: t
                      } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        bearerToken: a,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      t && m(f), fe()
                    } catch (e) {
                      u("api")
                    }
                  })(), oe({
                    ...le,
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
                  oe({
                    ...le,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${t("lp.modal.delete.cancel").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${t("lp.modal.delete.title").toLowerCase()}`
                  })
                }
              }],
              showModal: k,
              onClose: () => j(!1)
            }), _e, (0, Te.jsxs)("div", {
              ref: U,
              className: at.ui,
              children: [(0, Te.jsx)(Ke, {
                onClick: fe
              }), (0, Te.jsx)(Ze.animated.div, {
                ref: se,
                className: at.uiBottom,
                style: re ? {
                  y: re
                } : void 0,
                children: (0, Te.jsx)(Je, {})
              })]
            }), (0, Te.jsxs)("div", {
              className: at.deleteBtnContainer,
              ref: ie,
              children: [(0, Te.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: at.deleteBtn,
                disabled: h?.noDelete || L,
                onClick: () => {
                  h?.noDelete || L || (oe({
                    ...le,
                    event: "license_plate_delete_click",
                    event_category: "license_plate",
                    event_action: "delete",
                    event_label: "click",
                    text: t("lp.modal.delete.title").toLowerCase()
                  }), j(!0))
                },
                tabIndex: ce,
                type: "button"
              }), h?.noDelete && (0, Te.jsx)("label", {
                className: at.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        st = (0, o.withTranslations)((e => {
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
          }), (0, Te.jsx)("p", {
            className: "fbe02591dfe1e747a935 ae971d2586817570fa25 " + (!1 === r ? "e98c19a935da3321df72" : ""),
            children: n(o)
          })
        })),
        it = {
          lpStyleOption: "fdb659ff7c0f2e33fda0",
          selected: "c5c9b2d5655a4e556a50",
          lpStyleOptionImage: "add00686bede52167de6"
        },
        ot = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: n,
            setSelectedStyle: s
          } = Se(), {
            plates: i,
            selectedStyle: o
          } = n, l = (0, r.useCallback)((() => {
            z.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [i, t]);
          return (0, Te.jsx)("button", {
            className: [it.lpStyleOption, o === t.id ? it.selected : ""].join(" "),
            onClick: () => l(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, Te.jsx)("img", {
              className: it.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        lt = "a85e9791453fdcfdfaae",
        ct = (0, o.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: n
          } = e;
          const l = (0, s.useUserBearerToken)(),
            {
              setCurrentView: c,
              setPlateNumber: d,
              setPlateNumberStatus: u,
              setError: p,
              setRefs: m,
              state: f
            } = Se(),
            {
              currentView: g,
              isLoggedIn: h,
              plateStyles: b,
              plateNumber: y,
              plateNumberStatus: v,
              isMobile: x
            } = f,
            [w, E] = (0, r.useState)(0),
            {
              isValid: _
            } = v,
            S = (0, r.useMemo)((() => y), [y]),
            {
              track: T
            } = (0, i.useGtmTrack)(),
            P = {
              view_name: "license plate creator - " + (h ? "create plate form" : "try lp editor")
            },
            I = (0, r.useRef)(null),
            R = (0, r.useRef)(null),
            C = (0, r.useRef)(null),
            N = (0, r.useRef)(null),
            A = (0, r.useRef)(null),
            O = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            m(D.NEW_PLATE_FORM, C)
          }), [C.current]), (0, r.useEffect)((() => {
            g === Z.NEW_PLATE && document.activeElement === (x ? O.current : A.current) && A.current?.setSelectionRange(w, w)
          }), [w]);
          const k = e => {
              const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
              d(t), E(e.target.selectionStart || 0), v.isValid || u({
                isValid: !0,
                isMalformed: !1,
                isProfane: !1,
                isReserved: !1,
                statusPlateNumberBasis: y
              })
            },
            j = e => {
              "Enter" === e.code && (O.current && O.current.blur(), A.current && A.current.blur())
            },
            L = g === Z.NEW_PLATE ? 0 : -1,
            M = (0, r.useCallback)((() => {
              (async () => {
                if (l && y) try {
                  t(!0);
                  const {
                    error: e,
                    result: a
                  } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/validate", {
                    bearerToken: l,
                    fetchOptions: {
                      method: "POST"
                    },
                    query: {
                      plateText: y
                    }
                  });
                  t(!1), e?.code;
                  const {
                    isMalformed: r,
                    isProfane: n,
                    isReserved: s,
                    isValid: i
                  } = a;
                  u({
                    isValid: i,
                    isMalformed: r,
                    isProfane: n,
                    isReserved: s,
                    statusPlateNumberBasis: y
                  }), i && (c(Z.CONFIRM_ORDER), T({
                    ...P,
                    event: "virtualPageview",
                    display_type: x ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  p("api"), console.error("Error:", e)
                }
              })()
            }), [l, h, y]);
          (0, r.useEffect)((() => {
            a && (a.current = M)
          }), [M, a]);
          const V = (0, r.useMemo)((() => b?.map((e => (0, Te.jsx)(ot, {
            style: e,
            tabIndex: L
          }, e.id)))), [b, g]);
          return (0, Te.jsxs)("form", {
            ref: C,
            className: "c03fbea909908002e429",
            onSubmit: e => {
              e.preventDefault(), O.current?.blur(), A.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, Te.jsxs)("section", {
              children: [(0, Te.jsx)("label", {
                ref: I,
                children: n("lp.create.title")
              }), (0, Te.jsxs)("div", {
                ref: R,
                className: "f16c8dbd6025471f52d4",
                children: [(0, Te.jsx)("i", {
                  className: `${!1===_?lt:""}`
                }), (0, Te.jsx)("input", {
                  autoComplete: "off",
                  name: "plate_number",
                  className: `${!1===_?lt:""}`,
                  maxLength: 8,
                  onInput: k,
                  onFocusCapture: e => {
                    x && A?.current && (A?.current.focus({
                      preventScroll: !0
                    }), e.preventDefault(), e.stopPropagation())
                  },
                  placeholder: "LOSANTOS",
                  pattern: "[a-zA-Z0-9_-]{4,10}",
                  type: "text",
                  value: S,
                  tabIndex: L,
                  onKeyDown: j,
                  ref: x ? O : A
                }), x && (0, Te.jsx)("input", {
                  style: {
                    position: "absolute",
                    top: -10 * window.innerHeight + "px"
                  },
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: k,
                  onFocus: e => {
                    e.preventDefault(), e.stopPropagation()
                  },
                  placeholder: "LOSANTOS",
                  pattern: "[a-zA-Z0-9_-]{4,10}",
                  type: "text",
                  onKeyDown: j,
                  value: S,
                  ref: A
                }), (0, Te.jsx)(st, {
                  plateNumberStatus: v
                })]
              })]
            }), (0, Te.jsx)("hr", {
              className: "a88bd201bfcf6276af22"
            }), (0, Te.jsxs)("section", {
              children: [(0, Te.jsx)("label", {
                children: n("lp.create.bgselector")
              }), (0, Te.jsx)("div", {
                ref: N,
                className: "f7ff0013c2f3d7d85637",
                children: V
              })]
            })]
          })
        })),
        dt = e => {
          let {
            buttons: t,
            refName: a = D.SIDEBAR_BUTTONS,
            isLoading: n,
            tabIndex: s
          } = e;
          const i = (0, r.useRef)(null),
            {
              setRefs: o
            } = Se();
          return (0, r.useEffect)((() => {
            o(a, i)
          }), [i.current]), (0, Te.jsx)("div", {
            className: "bc9136e36a81df297fc4",
            ref: i,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, Te.jsx)("button", {
                className: [a ? "a60bffb039fc99fb5f49" : "", n ? "e057143f90593c9abfd0" : ""].join(" ").trim(),
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
        ut = "ce05d9898b38a31c3fe9",
        pt = "db3c4b65429b61ddff96",
        mt = (0, o.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            t: a
          } = e;
          const [n, s] = (0, r.useState)(!1), [o, l] = (0, r.useState)(!1), {
            state: c,
            setRefs: d
          } = Se(), {
            currentView: u,
            isMobile: p
          } = c, {
            track: m
          } = (0, i.useGtmTrack)(), f = {
            view_name: "license plate creator - create plate form"
          }, g = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            l(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            d(D.TOGGLE_VIEW_BUTTON, g)
          }), [g.current]), (0, r.useEffect)((() => {
            u === Z.NEW_PLATE && (n ? (m({
              ...f,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop",
              view_name: "license plate creator - car view"
            }), m({
              ...f,
              event: "license_plate_preview_car",
              event_category: "license_plate",
              event_action: "preview_car",
              text: a("lp.create.carview").toLowerCase()
            })) : m({
              ...f,
              event: "virtualPageview",
              display_type: p ? "mobile" : "desktop"
            }))
          }), [n, u]), (0, Te.jsxs)("button", {
            ref: g,
            type: "button",
            role: "switch",
            "aria-checked": n,
            className: "b6a7586175bf01b715d6",
            onClick: () => {
              t(), s(!n)
            },
            tabIndex: 0,
            "aria-label": "Switch between viewing the plate on a car and by itself",
            children: [(0, Te.jsx)("div", {
              className: `${ut} ${o?pt:""}`,
              children: (0, Te.jsx)("p", {
                children: a("lp.create.plateview")
              })
            }), (0, Te.jsx)("div", {
              className: `${ut} ${o?pt:""}`,
              children: (0, Te.jsx)("p", {
                children: a("lp.create.carview")
              })
            }), (0, Te.jsx)("span", {
              className: "ac1419f5f7d4f893d8e0"
            })]
          })
        })),
        ft = {
          orderConfirmed: "cf7e5e0923b8256a2323",
          visible: "f49f2ce6c0c2c3078641",
          background: "f6e84201dac89879fbbd",
          content: "fe4db11268b7cc20a4a9",
          secondaryWrap: "ac46f0f3e93dcb543606",
          contentHeading: "cb52c60771f4dedd7631",
          plateRedemptionInstructions: "e2d9a88190e1e3de5bb6",
          backToPlatesButton: "b7ac25abe12168157046",
          hover: "d6fcaa3a9d4229d26b6c",
          ctaText: "d2ccddbaa18bbe20a426",
          isWindows: "b236dd886c9982522324"
        },
        gt = (0, o.withTranslations)((e => {
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
            state: p
          } = Se(), {
            currentView: m,
            isExpanded: f,
            refs: g,
            three: h,
            isMobile: v
          } = p, x = (0, r.useRef)(null), w = (0, r.useRef)(null), E = (0, r.useRef)(null), S = (0, r.useRef)(null), T = (0, r.useRef)(null), {
            track: P
          } = (0, i.useGtmTrack)(), I = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(D.ORDER_BG, T)
          }), [T.current]);
          const R = g[D.CONFIRM_CONTENT]?.current,
            C = g[D.CONFIRM_SIDEBAR]?.current,
            N = g[D.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            A = g[D.CONFIRM_SIDEBAR_BUTTONS]?.current,
            O = g[D.NEW_PLATE_SIDEBAR]?.current,
            k = g[D.CANVAS_WRAP]?.current,
            j = g[D.SIDEBAR_BUTTONS]?.current,
            L = T.current,
            M = x.current,
            V = E.current,
            W = S.current,
            z = w.current,
            B = g[D.UI]?.current,
            H = g[D.NEW_PLATE_UI]?.current,
            Y = g[D.SIDEBAR]?.current,
            $ = (0, r.useCallback)((() => {
              c(Z.LIST_PLATES), P({
                ...I,
                event: "cta_return_page",
                event_category: "cta",
                event_action: "return_page",
                text: n("lp.success.cta").toLowerCase()
              })
            }), []);
          return (0, r.useEffect)((() => {
            if (!h) return;
            const {
              renderer: e,
              camera: a,
              originalCameraPosition: r,
              originalCameraFov: n,
              controls: i,
              originalControlsTarget: l
            } = h;
            if (!e || !L || !R) return;
            const c = _();
            if (f && m === Z.LIST_PLATES) {
              const t = y().timeline({
                defaults: {
                  ease: F.transaction.confirmOrder.ease,
                  duration: F.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (y().to([e.domElement, Y], {
                  autoAlpha: 1,
                  ease: F.transaction.fade.landingPage.ease,
                  duration: F.transaction.fade.landingPage.duration
                }), v) {
                const e = {
                  opacity: 1
                };
                t.to(e, {
                  drawerHeight: s,
                  opacity: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const t = s - o.get();
                    L.style.transform = `translateY(${t}px)`, L.style.opacity = e.opacity
                  }
                }, 0)
              } else t.to(L, {
                autoAlpha: 0
              }, 0).to([M, V, W], {
                autoAlpha: 0
              }), t.to(R, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), t.to(L, {
                x: "-100vw"
              }, 0), y().set([O, H], {
                x: 0
              }), y().set(C, {
                left: "revert"
              })
            } else if (t) {
              const t = y().timeline({
                defaults: {
                  ease: F.transaction.confirmOrder.ease,
                  duration: F.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), y().set(k, {
                    x: 0
                  }), a.position.set(r.x, r.y, r.z), i?.current && (i.current.minDistance = 0, i.current.target.set(l.x, l.y, l.z)), B && (a.fov = n, a.updateProjectionMatrix(), U.saturation.value = 0)
                },
                onStart: () => {
                  y().set(z, {
                    height: 0
                  })
                }
              });
              if (t.to(e.domElement, {
                  autoAlpha: 0
                }, 0), t.to(M, {
                  autoAlpha: 1,
                  ease: b.Power1.easeIn,
                  duration: .3
                }, "<1").to(z, {
                  height: "auto",
                  ease: b.Power2.easeInOut,
                  duration: .4
                }, "<1").to([V, W], {
                  autoAlpha: 1,
                  ease: b.Power1.easeIn,
                  duration: .3,
                  stagger: .1
                }, "<0.2"), v) {
                if (o) {
                  y().set(L, {
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
                      L.style.transform = `translateY(${s-e.drawerHeight}px`, o.set(e.drawerHeight), A && (A.style.pointerEvents = "none", A.style.opacity = String(1 - e.lerp), A.style.transform = `translateY(${100*e.lerp}%)`), N && (N.style.pointerEvents = "none", N.style.opacity = String(1 - e.lerp)), t.to(j, {
                        autoAlpha: 0
                      }, "<"), L.style.opacity = e.lerp
                    }
                  }, 0)
                }
              } else t.to(R, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(C, {
                left: 100 - c + "vw"
              }, 0).to(L, {
                x: 0
              }, 0).to(L, {
                autoAlpha: 1
              }, 0).to(C, {
                autoAlpha: 0,
                ease: F.transaction.fade.out.ease,
                duration: F.transaction.fade.out.duration
              }, 0).set(L, {
                pointerEvents: "all"
              });
              P({
                ...I,
                event: "virtualPageview",
                display_type: v ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, T.current, h, m, v ? o : void 0]), (0, Te.jsx)("div", {
            className: [ft.orderConfirmed, f ? ft.visible : ""].join(" "),
            children: (0, Te.jsx)("div", {
              ref: T,
              className: ft.background,
              children: (0, Te.jsxs)("div", {
                className: ft.content,
                children: [(0, Te.jsx)("h1", {
                  ref: x,
                  className: ft.contentHeading,
                  children: n("lp.success.title")
                }), (0, Te.jsxs)("div", {
                  ref: w,
                  className: ft.secondaryWrap,
                  children: [(0, Te.jsx)("p", {
                    ref: E,
                    className: ft.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: n("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, Te.jsx)("button", {
                    ref: S,
                    type: "button",
                    className: ft.backToPlatesButton,
                    onClick: () => {
                      $()
                    },
                    "aria-label": n("lp.success.cta"),
                    tabIndex: l,
                    children: (0, Te.jsx)("span", {
                      className: ft.ctaText,
                      children: n("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        }));
      var ht = a(2973),
        bt = a.n(ht);
      const yt = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        vt = () => (0, Te.jsx)(bt(), {
          options: {
            loop: !0,
            autoplay: !0,
            animationData: yt,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          },
          height: 50,
          width: 50
        }),
        xt = (0, o.withTranslations)((e => {
          let {
            t,
            top: a,
            drawerY: n
          } = e;
          const {
            state: l,
            setError: c,
            setCurrentView: d,
            setIsOrderConfirmed: u,
            setPendingOrder: p,
            setRefs: m,
            setSelectedVehicle: f
          } = Se(), {
            currentView: g,
            selectedVehicle: h,
            plates: b,
            three: x,
            isMobile: w,
            refs: E,
            vehicles: S,
            selectedStyle: T,
            isOrderConfirmed: P,
            isExpanded: I
          } = l, {
            selectedCharacterTuple: R
          } = (0, i.useRockstarUser)(), C = (0, s.useUserBearerToken)(), N = g === Z.CONFIRM_ORDER, [A, O] = (0, r.useState)(I), [k, j] = (0, r.useState)(!1), L = (0, r.useRef)(null), M = (0, r.useRef)(null), {
            track: V
          } = (0, i.useGtmTrack)(), W = {
            view_name: "license plate creator - confirm order"
          }, z = g === Z.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            m(D.CONFIRM_SIDEBAR, L)
          }), [L.current]), (0, r.useEffect)((() => {
            m(D.CONFIRM_CONTENT, M)
          }), [M.current]);
          const B = E[D.ORDER_BG]?.current,
            H = E[D.CONFIRM_CONTENT]?.current,
            Y = E[D.CONFIRM_SIDEBAR]?.current,
            U = E[D.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            $ = E[D.CONFIRM_SIDEBAR_BUTTONS]?.current,
            G = E[D.NEW_PLATE_SIDEBAR]?.current,
            X = E[D.CANVAS_WRAP]?.current,
            q = E[D.SIDEBAR_BUTTONS]?.current,
            K = E[D.NEW_PLATE_UI]?.current;

          function J() {
            if (V({
                ...W,
                event: "virtualPageview",
                display_type: w ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(x?.camera && H && Y && X && B)) return;
            const e = {
                ease: w ? F.sidebar.mobile.drawer.ease : F.transaction.confirmOrder.ease,
                duration: w ? F.sidebar.mobile.drawer.duration : F.transaction.confirmOrder.duration
              },
              t = y().timeline({
                defaults: {
                  ...e
                },
                onComplete: () => {
                  O(!1)
                }
              });
            y().set(q, {
              pointerEvents: "all"
            }), w ? t.to(q, {
              autoAlpha: 1
            }, "<") : (t.to(Y, {
              autoAlpha: 0
            }, 0), g === Z.NEW_PLATE && t.to(G, {
              autoAlpha: 1
            }, "<"), t.to([G, X, K], {
              x: 0
            }, "<"), t.to(H, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            g === Z.LIST_PLATES && A && J()
          }), [g, A]);
          const Q = (0, r.useCallback)((() => {
            (async () => {
              const e = v(T);
              if (!(C && h && e?.name && R)) return;
              const [t, a] = R, {
                index: r
              } = h, n = {
                vehicleIndex: r,
                plateText: b?.[0]?.plateText,
                plateStyle: e.name
              };
              j(!0);
              const {
                status: s
              } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                bearerToken: C,
                fetchOptions: {
                  body: JSON.stringify(n),
                  method: "POST"
                },
                query: {
                  character: a,
                  platform: t
                }
              });
              if (s) {
                j(!1), u(!0);
                const {
                  result: e
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                  bearerToken: C,
                  query: {
                    platform: t
                  }
                });
                e ? e[`character${a}Pending`] && p(e) : c("api")
              } else j(!1), c("api")
            })()
          }), [C, String(R), b?.[0]?.plateText, h, k, T]);
          (0, r.useEffect)((() => {
            if (g !== Z.CONFIRM_ORDER || P) {
              if (w && !P) {
                y().set(q, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                y().to(e, {
                  lerp: 1,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    $ && ($.style.opacity = "" + (1 - e.lerp), $.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), y().to(Y, {
                  autoAlpha: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
                }), U && (U.style.pointerEvents = "none", y().to(U.style, {
                  opacity: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(x?.camera && H && Y && X && B)) return;
              let e = _();
              w || 100 !== e || (e = 0);
              const t = y().timeline({
                  defaults: {
                    ease: F.transaction.confirmOrder.ease,
                    duration: F.transaction.confirmOrder.duration
                  },
                  onComplete: () => {
                    O(!0)
                  }
                }),
                a = {
                  autoAlpha: 1
                },
                r = {
                  autoAlpha: 0
                };
              if (y().set(q, {
                  pointerEvents: "none"
                }), w && (a.ease = F.sidebar.mobile.drawer.ease, a.duration = F.sidebar.mobile.drawer.duration, a.delay = F.sidebar.mobile.drawer.duration / 2, r.ease = F.sidebar.mobile.drawer.ease, r.duration = F.sidebar.mobile.drawer.duration, t.to(Y, a, 0)), w) {
                if ($) {
                  $.style.pointerEvents = "all", y().set($.style, {
                    visibility: "visible"
                  });
                  const e = {
                    lerp: 0
                  };
                  y().to(e, {
                    lerp: 1,
                    duration: F.sidebar.mobile.drawer.duration,
                    ease: F.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      $.style.opacity = e.lerp, $.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                U && (U.style.pointerEvents = "all", y().set(U.style, {
                  visibility: "visible"
                }), y().to(U.style, {
                  opacity: 1,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
                })), t.to(q, {
                  autoAlpha: 0
                }, "<")
              } else G && X && t.to([G, X, K], {
                x: -1 * e + "vw"
              }, "<"), t.to(H, {
                x: 100 - e + "vw"
              }, "<"), t.to(Y, {
                autoAlpha: 1
              }, "<"), t.to(G, {
                autoAlpha: 0
              }, "<"), t.set(B, {
                x: `${-100+e}vw`
              }, "<")
            }
            A && !N && P && u(!1)
          }), [x, g, w, $, P, U, _()]), (0, r.useEffect)((() => {
            g !== Z.CONFIRM_ORDER && f(null)
          }), [S]);
          const ee = (0, r.useCallback)((e => {
              if (!S?.length) return;
              const t = S.find((t => {
                let {
                  id: a
                } = t;
                return a === Number(e.target.value)
              })) ?? null;
              f(t), V({
                ...W,
                event: "license_plate_select_vehicle",
                event_category: "license_plate",
                event_action: "select_vehicle",
                position: e.target.selectedIndex
              })
            }), [S]),
            te = (0, Te.jsx)(dt, {
              refName: D.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: k,
                onClick: () => {
                  d(Z.NEW_PLATE), J(), V({
                    ...W,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: t("lp.confirm.cancel").toLowerCase()
                  })
                }
              }, {
                buttonText: k ? (0, Te.jsx)(vt, {}) : t("lp.confirm.next"),
                isDisabled: !C || !h || k,
                onClick: () => {
                  Q(), V({
                    ...W,
                    event: "license_plate_create_confirm",
                    event_category: "license_plate",
                    event_action: "create",
                    event_label: "confirm",
                    text: t("lp.confirm.next").toLowerCase()
                  })
                }
              }],
              isLoading: k,
              tabIndex: z
            });
          let ae;
          return w && (ae = U ? (0, Ge.createPortal)(te, U) : null), (0, Te.jsx)("div", {
            className: "be866f32eab934537631",
            "aria-hidden": g !== Z.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, Te.jsxs)("div", {
              className: "a09e457783ba70411b6a",
              ref: M,
              children: [(0, Te.jsx)("span", {}), (0, Te.jsxs)("div", {
                className: "bdb2b5b5d19f7f44f6d7",
                ref: L,
                children: [(0, Te.jsxs)("form", {
                  className: "e6e66ce12aa2d8d190ef",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, Te.jsxs)("div", {
                    className: "e5564bc6d848a683537c",
                    children: [(0, Te.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, Te.jsxs)("section", {
                      children: [(0, Te.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, Te.jsx)("div", {
                        className: "e7c896dad22669956489",
                        children: (0, Te.jsxs)("select", {
                          value: h?.id ?? "null",
                          onChange: ee,
                          required: !0,
                          tabIndex: z,
                          "aria-label": t("lp.confirm.selector"),
                          children: [(0, Te.jsx)("option", {
                            value: "null",
                            disabled: !0,
                            children: "--"
                          }), S?.map(((e, t) => {
                            let {
                              id: a,
                              manufacturer: r,
                              name: n
                            } = e;
                            return (0, Te.jsx)("option", {
                              value: a,
                              children: `${r} ${n}`
                            }, t)
                          }))]
                        })
                      }), (0, Te.jsx)("p", {
                        className: "d566190b33aa234ddd80",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, Te.jsx)("p", {
                    className: "d6bae7e0151e183d3293",
                    children: t("lp.confirm.info")
                  })]
                }), w ? ae : te]
              }), (0, Te.jsx)(gt, {
                drawerY: n,
                top: a,
                isVisible: P,
                vehicleModel: `${h?.manufacturer} ${h?.name}`,
                tabIndex: P ? z : -1
              })]
            })
          })
        })),
        wt = "visible",
        Et = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            state: a,
            setCurrentView: n,
            setIsExpanded: s,
            setRefs: o
          } = Se(), {
            currentView: l,
            gridScale: d,
            loginUrl: u,
            isLoggedIn: p,
            isMobile: m,
            isExpanded: f,
            plateNumber: g,
            plateNumberStatus: h,
            refs: b,
            three: v
          } = a, [x, w] = (0, r.useState)(0), [_, S] = (0, r.useState)(!1), [P, R] = (0, r.useState)(!1), [C, N] = (0, r.useState)(.4 * window.innerHeight), [O, k] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), j = (0, r.useRef)(C), [L, z] = (0, r.useState)(null), B = (0, r.useRef)(null), H = (0, r.useRef)(null), Y = (0, r.useRef)(null), q = (0, r.useRef)(!1), [K, J] = (0, r.useState)(null), Q = (0, r.useRef)(K), ee = (0, r.useRef)(null), te = (0, r.useRef)(null), ae = (0, r.useRef)(null), re = (0, r.useRef)(null), ne = (0, r.useRef)(null), se = (0, r.useRef)(null), ie = (0, r.useRef)(null), oe = (0, r.useRef)(null), le = (0, r.useRef)(null), {
            track: ce
          } = (0, i.useGtmTrack)(), de = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            const e = l === Z.NEW_PLATE || !(!E() || l !== Z.CONFIRM_ORDER);
            _ !== e && S(e)
          }), [l, E()]);
          const ue = (0, r.useCallback)((e => {
            if (!v) return;
            const {
              scene: t,
              camera: a,
              controls: r,
              renderer: n
            } = v, s = t.getObjectByName("Scene");
            if (!s) return;
            const i = T() * d,
              o = [];
            t.traverse((e => {
              0 === e.userData.index && (oe.current = e, s.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === X.LP && o.push(e)
            }));
            const u = y().timeline({
              duration: m ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
              ease: m ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
              onStart: () => {
                r.current.minDistance = 0
              }
            });
            switch (e) {
              case wt: {
                if (!r.current) return;
                const e = new c.Vector3;
                oe?.current && oe.current.getWorldPosition(e);
                const t = {
                  cameraPosition: {
                    start: (new c.Vector3).copy(a.position),
                    end: new c.Vector3(e.x, e.y, e.z + i)
                  },
                  controlsTarget: {
                    start: (new c.Vector3).copy(r.current.target),
                    end: e
                  },
                  plateOpacity: o.map(((e, t) => ({
                    start: e.material.opacity,
                    end: 0 === t ? 1 : 0
                  }))),
                  firstPlateSaturation: {
                    start: U.saturation.value,
                    end: 1
                  },
                  cameraFov: {
                    start: a.fov,
                    end: m && l === Z.CONFIRM_ORDER ? 1.2 * Y.current : Y.current
                  }
                };
                m && (t.translateY = {
                  start: l === Z.NEW_PLATE ? le?.current?.offsetHeight : 0,
                  end: l === Z.NEW_PLATE ? 0 : le?.current?.offsetHeight
                }, t.startingDrawerHeight = B.current ? B.current.get() : 0, t.startingCanvasHeight = Number(I(n.domElement).y), t.canvasWidth = n.domElement.offsetWidth, t.canvasY = {
                  start: Number(I(n.domElement).y),
                  end: C / -2
                }, t.canvasYConfirmOrder = {
                  start: Number(I(n.domElement).y),
                  end: O / 1.5
                }, t.drawerHeight = {
                  start: B.current ? B.current.get() : 0,
                  end: l === Z.NEW_PLATE ? 0 : O / (f ? 1 : 2)
                }, t.cameraFov = {
                  start: a.fov,
                  end: l === Z.CONFIRM_ORDER ? 1.2 * Y.current : Y.current
                }, t.canvasOpacity = {
                  start: n.domElement.style.opacity,
                  end: 1
                });
                const s = {
                  current: 0
                };
                l === Z.NEW_PLATE ? (u.to(s, {
                  current: 1,
                  duration: m ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                  ease: m ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = s, i = t.cameraPosition.start.clone().lerp(t.cameraPosition.end, e);
                    a.position.set(i.x, i.y, i.z);
                    const l = t.controlsTarget.start.clone().lerp(t.controlsTarget.end, e);
                    if (r.current.target.x = l.x, r.current.target.y = l.y, r.current.target.z = l.z, o.forEach(((a, r) => {
                        a.material && (a.material.opacity = (0, Re.t7)(t.plateOpacity[r].start, t.plateOpacity[r].end, e))
                      })), U.saturation.value = (0, Re.t7)(t.firstPlateSaturation.start, t.firstPlateSaturation.end, e), t.cameraFov.start !== t.cameraFov.end) {
                      const {
                        cameraFov: r
                      } = t;
                      a.fov = (0, Re.t7)(r.start, r.end, e), a.updateProjectionMatrix()
                    }
                    if (m) {
                      if (le.current) {
                        const a = (0, Re.t7)(t.translateY.start, t.translateY.end, e);
                        le.current.style.transform = `translateY(${a}px)`, le.current.style.opacity = String(e), le.current.style.pointerEvents = "all"
                      }
                      B.current && B.current.set((0, Re.t7)(t.drawerHeight.start, t.drawerHeight.end, e));
                      const a = (0, Re.t7)(t.canvasY.start, t.canvasY.end, e);
                      n.domElement.style.transform = `translateY(${a}px)`
                    }
                  },
                  onComplete: () => {
                    if (l === Z.NEW_PLATE) {
                      const e = b[D.ROOT].current;
                      e && (e.style.touchAction = "none"), H.current = new c.Vector3(a.position.x, a.position.y, a.position.z), ae?.current?.children && y().to(ae.current.children, {
                        pointerEvents: "all"
                      }), m && (n.domElement.style.touchAction = "none")
                    }
                  }
                }, 0), m && u.to(b[D.NEW_PLATE_FORM].current, {
                  autoAlpha: 1,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  delay: F.sidebar.mobile.drawer.duration / 2,
                  onStart: () => {
                    le.current && (le.current.style.pointerEvents = "all", le.current.style.visibility = "visible")
                  }
                }, 0), u.to([ae.current, m ? void 0 : te.current], {
                  autoAlpha: 1,
                  duration: F.sidebar.in.duration,
                  ease: F.sidebar.in.ease,
                  delay: F.sidebar.in.delay,
                  onStart: () => {
                    re.current && (re.current.style.transform = "translateY(0px)")
                  },
                  onComplete: () => {
                    m || y().set([te.current, b[D.SIDEBAR_BUTTONS]?.current], {
                      pointerEvents: "all"
                    }), ae.current && y().to(ae.current.children, {
                      pointerEvents: "all"
                    })
                  }
                }, "<")) : l === Z.CONFIRM_ORDER && (!0 === Q.current && xe(), m && (u.to(s, {
                  current: 1,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = s;
                    if (le.current) {
                      B.current && B.current.set((0, Re.t7)(t.drawerHeight.start, t.drawerHeight.end, e)), a.fov = (0, Re.t7)(t.cameraFov.start, t.cameraFov.end, e), a.updateProjectionMatrix(), n.domElement.style.opacity = (0, Re.t7)(t.canvasOpacity.start, t.canvasOpacity.end, e), ae?.current?.style && (ae.current.style.opacity = String(1 - e));
                      const r = (0, Re.t7)(t.translateY.start, t.translateY.end, e);
                      le.current.style.transform = `translateY(${r}px)`, le.current.style.pointerEvents = "none";
                      const s = (0, Re.t7)(t.canvasYConfirmOrder.start, t.canvasYConfirmOrder.end, e);
                      n.domElement.style.transform = `translateY(${s}px)`
                    }
                  }
                }, 0), u.to(b[D.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (y().to([ae.current.children, te.current], {
                    pointerEvents: "none"
                  }), y().to(ae.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay
                  }), m) {
                  const e = {
                    transform: 0,
                    drawerHeight: B.current ? B.current.get() : 0,
                    fov: a.fov
                  };
                  y().to(e, {
                    translateY: le?.current?.offsetHeight,
                    duration: F.sidebar.mobile.drawer.duration,
                    drawerHeight: C,
                    fov: Y.current,
                    ease: F.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      le.current && (B.current && B.current.set(e.drawerHeight), le.current.style.transform = `translateY(${e.translateY}px)`, le.current.style.pointerEvents = "none", a.fov = e.fov, a.updateProjectionMatrix())
                    }
                  })
                }
                if (l === Z.CONFIRM_ORDER ? f || 1 == !Q.current && y().to(a.position, {
                    x: Number(H.current.x),
                    y: Number(H.current.y),
                    z: 0,
                    ease: F.transaction.confirmOrder.ease,
                    duration: F.transaction.confirmOrder.duration
                  }) : y().to(te.current, {
                    autoAlpha: 0,
                    duration: F.sidebar.out.duration,
                    ease: F.sidebar.out.ease,
                    delay: F.sidebar.out.delay
                  }), l === Z.LIST_PLATES) {
                  const e = b[D.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                r?.current && (r.current.minDistance = 0), Q.current = !1, J(!1)
            }
          }), [l, v, m, d, L, O, B.current, Q.current]);
          (0, r.useEffect)((() => {
            b?.[D.SIDEBAR_BUTTONS]?.current && (le.current = b[D.SIDEBAR_BUTTONS].current)
          }), [b]), (0, r.useEffect)((() => {
            o(D.NEW_PLATE, se)
          }), [se.current]), (0, r.useEffect)((() => {
            o(D.CONFIRM_SIDEBAR_BUTTONS_PORTAL, ne)
          }), [ne.current]), (0, r.useEffect)((() => {
            o(D.NEW_PLATE_SIDEBAR, te)
          }), [te.current]), (0, r.useEffect)((() => {
            o(D.NEW_PLATE_UI, ae)
          }), [ae.current]);
          const pe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            pe.current = v
          }), [v]);
          const me = (0, r.useCallback)((() => {
              if (!v?.controls) return;
              const {
                controls: e,
                scene: t
              } = v;
              if (Q.current) {
                let e;
                t.traverse((t => {
                  0 === t.userData.index && (e = t)
                })), y().to(e?.material, {
                  duration: m ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                  ease: m ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                  opacity: 1
                })
              } else {
                const t = y().timeline({
                  duration: m ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                  ease: m ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease,
                  onStart: () => {
                    e?.current && (e.current.minDistance = 0)
                  }
                });
                be(t, d, !0)
              }
              const {
                renderer: a
              } = pe.current;
              _ ? (l === Z.NEW_PLATE && (E() ? a.domElement.style.transform = `translateY(${C/-2}px)` : a.domElement.style.transform = "translateY(0px)", te.current && (te.current.style.opacity = "1", te.current.style.visibility = "visible", te.current.style.pointerEvents = "all")), l === Z.CONFIRM_ORDER && E() && (a.domElement.style.transform = `translateY(${O/1.5}px)`)) : l !== Z.CONFIRM_ORDER || E() || (a.domElement.style.transform = "translateY(0px)")
            }), [E(), _, l, v, te.current, d]),
            fe = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!oe?.current || !H.current || !v?.camera) return;
              ce({
                ...de,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "new plate",
                view_name: "license plate creator - new plate form"
              }), ce({
                ...de,
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
              } = v, i = r.getObjectByName("Scene"), o = r.getObjectByName("Light1"), l = r.getObjectByName("Light2"), c = r.getObjectByName("Light3"), d = s.domElement;
              y().timeline({
                defaults: {
                  ease: F.toggleView.camera.ease,
                  duration: t ? 0 : F.toggleView.camera.duration
                },
                onStart: () => {
                  n?.current && (n.current.minDistance = 2, n.current.enableZoom = !1)
                },
                onComplete: () => {
                  n?.current && (n.current.minDistance = 0, n.current.maxPolarAngle = $.plateView.maxPolarAngle, n.current.minPolarAngle = $.plateView.minPolarAngle, n.current.maxAzimuthAngle = $.plateView.maxAzimuthAngle, n.current.minAzimuthAngle = $.plateView.minAzimuthAngle, n.current.enableZoom = !1), j.current = 0, e.onComplete && e.onComplete()
                }
              }).to(a.position, {
                x: Number(H.current.x),
                y: Number(H.current.y),
                z: Number(H.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to(oe.current.rotation, {
                x: 0
              }, "<").to(o, {
                intensity: 0
              }, "<").to([l, c], {
                intensity: .6
              }, "<").to(l.position, {
                x: G.light2.x,
                y: G.light2.y,
                z: G.light2.z
              }, "<").to(c.position, {
                x: G.light3.x
              }, "<").to(oe.current.material, {
                envMapIntensity: G.envMapIntensity.plateView
              }, "<").set(oe.current, {
                receiveShadow: !1
              }, .4).set(oe.current.material, {
                depthTest: !1
              }, "<"), i.traverse((e => {
                e.material && y().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : F.toggleView.fadeOut.duration,
                  ease: F.toggleView.fadeOut.ease
                })
              }))
            }), [oe.current, H.current, v]);
          (0, r.useEffect)((() => {
            v?.scene && !Y.current && (Y.current = v.camera.fov)
          }), [Y.current, v]), (0, r.useEffect)((() => {
            v?.scene && le.current && ue(_ ? wt : "hidden")
          }), [v, _, l === Z.CONFIRM_ORDER]), (0, r.useEffect)((() => {
            if (le?.current && m && se.current) {
              const e = se.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              w(a - 48 - le.current.offsetHeight - t), N(a), k(-1 * (.6 * e - 80)), le.current.style.transform = `translateY${le.current.offsetHeight}px`
            }
          }), [le.current, m, se.current]);
          const ge = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            l && (ge.current = l), l === Z.LIST_PLATES && Q.current && fe({}, !0)
          }), [l]);
          const he = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            d && (he.current = d)
          }), [d]);
          const be = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (ge.current !== Z.NEW_PLATE && ge.current !== Z.CONFIRM_ORDER) return;
            const {
              renderer: r
            } = v;
            A({
              plateIndex: 0,
              three: v,
              timeline: e,
              gridScale: t
            }, {
              onComplete: e => {
                e?.three?.camera && (H.current = new c.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), ae?.current?.children && y().to(ae.current.children, {
                  pointerEvents: "all"
                }), m && (r.domElement.style.touchAction = "none")
              },
              tweenPosition: 0,
              isResize: a
            })
          }), [v, l]);
          (0, r.useEffect)((() => {
            me()
          }), [d]);
          const ye = (0, r.useCallback)((e => {
              if (!v?.scene) return;
              const {
                drawerStateRef: t
              } = e;
              if (v) {
                const {
                  renderer: e,
                  camera: a
                } = v, r = e.domElement, n = {
                  buttonWrapOpacity: re.current.style.opacity,
                  canvasWrapOpacity: r.style.opacity,
                  fov: a.fov,
                  canvasTranslateY: Number(I(r).y)
                }, s = {};
                t.current === M ? (s.buttonWrapOpacity = 0, s.canvasWrapOpacity = 0, s.fov = Y.current, s.canvasTranslateY = C / -2, r.style.pointerEvents = "all", re.current.style.pointerEvents = "all") : (t.current === V || t.current === W) && (s.buttonWrapOpacity = 1, s.canvasWrapOpacity = 1, s.fov = Y.current, s.canvasTranslateY = C / -2, r.style.pointerEvents = "all", re.current.style.pointerEvents = "all"), y().to(n, {
                  buttonWrapOpacity: s.buttonWrapOpacity,
                  canvasWrapOpacity: s.canvasWrapOpacity,
                  fov: s.fov,
                  canvasTranslateY: s.canvasTranslateY,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    r.style.opacity = n.canvasWrapOpacity, re.current.style.opacity = n.buttonWrapOpacity, a.fov = n.fov, a.updateProjectionMatrix(), r.style.transform = `translateY(${n.canvasTranslateY}px)`
                  }
                })
              }
            }), [v, C]),
            ve = (0, r.useCallback)((e => {
              if (!v?.scene || !le.current) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: i,
                renderer: o
              } = v, l = o.domElement;
              if (t.dragging) {
                const e = (0, Re.ii)(0, n, r.get()),
                  o = (0, Re.t7)(0, 1, 1 - e);
                if (l.style.opacity = o, re.current.style.opacity = o, re.current.style.pointerEvents = r.get() >= 0 ? "all" : "none", re.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                  const e = (0, Re.ii)(0, s, r.get()),
                    a = Q.current ? 60 : 40,
                    n = (0, Re.t7)(Y.current, a, e);
                  i.fov = n, i.updateProjectionMatrix();
                  const o = Number(I(l).y) + t.delta[1] / 2;
                  l.style.transform = `translateY(${o}px)`
                }
              } else {
                const e = {
                  buttonWrapOpacity: re.current.style.opacity,
                  canvasWrapOpacity: l.style.opacity,
                  fov: i.fov,
                  canvasTranslateY: Number(I(l).y)
                };
                a.current < n / 2 ? (re.current.style.pointerEvents = "none", y().to(e, {
                  buttonWrapOpacity: 0,
                  canvasWrapOpacity: 0,
                  fov: Q.current ? 60 : 40,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, re.current.style.opacity = e.buttonWrapOpacity
                  }
                })) : a.current > s / 2 ? (l.style.pointerEvents = "all", re.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  canvasTranslateY: -.5 * (48 + le.current.offsetHeight),
                  fov: Q.current ? 60 : 40,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, re.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                })) : Math.abs(a.current) > 0 && (l.style.pointerEvents = "all", re.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: Y.current,
                  canvasTranslateY: C / -2,
                  duration: F.sidebar.mobile.drawerSnap.duration,
                  ease: F.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, re.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), a.current > 0 && (l.style.transform = `translateY(${e.canvasTranslateY}px)`)
                  }
                }))
              }
            }), [v, le.current, C]),
            xe = (0, r.useCallback)((() => {
              if (!(v?.scene && v?.controls?.current && oe && oe?.current)) return;
              const {
                scene: e,
                camera: t,
                controls: a
              } = v, r = e.getObjectByName("Scene"), n = e.getObjectByName("Light1"), s = e.getObjectByName("Light2"), i = e.getObjectByName("Light3"), o = T() * d;
              if (r && a && !q.current) {
                const e = [];
                if (r.traverse((t => {
                    t.material && (t.material.transparent = !0, t.material.mesh = t, "Banshee_Interior_LightMap" === t.material.name && (t.renderOrder = 99999), e.push(t.material))
                  })), Q.current) {
                  const l = new c.Vector3;
                  if (oe.current.getWorldPosition(l), setTimeout((() => {
                      oe.current.receiveShadow = !1, oe.current.material.depthTest = !1
                    }), 400), !q.current) {
                    const c = {
                      camPositionX: t.position.x,
                      camPositionY: t.position.y,
                      camPositionZ: t.position.z,
                      controlsTargetX: a.current.target.x,
                      controlsTargetY: a.current.target.y,
                      controlsTargetZ: a.current.target.z,
                      plateRotationX: oe.current.rotation.x,
                      light1Intensity: n.intensity,
                      light2Intensity: s.intensity,
                      light2PositionX: s.position.x,
                      light2PositionY: s.position.y,
                      light2PositionZ: s.position.z,
                      light3Intensity: i.intensity,
                      light3PositionX: i.position.x,
                      envMapIntensity: oe?.current?.material?.envMapIntensity
                    };
                    y().to(c, {
                      camPositionX: l.x,
                      camPositionY: l.y,
                      camPositionZ: l.z + o,
                      controlsTargetX: l.x,
                      controlsTargetY: l.y,
                      controlsTargetZ: l.z,
                      plateRotationX: 0,
                      light1Intensity: 0,
                      light2Intensity: .6,
                      light2PositionX: G.light2.x,
                      light2PositionY: G.light2.y,
                      light2PositionZ: G.light2.z,
                      light3Intensity: .6,
                      light3PositionX: G.light3.x,
                      envMapIntensity: G.envMapIntensity.plateView,
                      duration: F.toggleView.camera.duration,
                      ease: F.toggleView.camera.ease,
                      onStart: () => {
                        a.current.minDistance = 2, a.current.enableZoom = !1, q.current = !0, b[D.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = y().timeline({
                          duration: m ? F.sidebar.mobile.drawer.duration : F.clickPlate.duration,
                          ease: m ? F.sidebar.mobile.drawer.ease : F.clickPlate.ease
                        });
                        be(e, d)
                      },
                      onUpdate: () => {
                        oe.current.rotation.x = c.plateRotationX, oe.current?.material && (oe.current.material.envMapIntensity = c.envMapIntensity), n.intensity = c.light1Intensity, s.intensity = c.light2Intensity, s.position.set(c.light2PositionX, c.light2PositionY, c.light2PositionZ), i.intensity = c.light3Intensity, i.position.x = c.light3PositionX
                      },
                      onComplete: () => {
                        q.current = !1, r.visible = !1, a.current.maxPolarAngle = $.plateView.maxPolarAngle, a.current.minPolarAngle = $.plateView.minPolarAngle, a.current.maxAzimuthAngle = $.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = $.plateView.minAzimuthAngle, b[D.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                      }
                    });
                    const u = {
                      opacity: 1
                    };
                    y().to(u, {
                      opacity: 0,
                      duration: F.toggleView.fadeOut.duration,
                      ease: F.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        e.forEach((e => {
                          e.opacity = u.opacity
                        }))
                      }
                    })
                  }
                } else if (!q.current) {
                  const o = {
                    camPositionY: t.position.y,
                    camPositionZ: t.position.z,
                    controlsTargetZ: a.current.target.z,
                    plateRotationX: oe.current.rotation.x,
                    light1Intensity: n.intensity,
                    light2Intensity: s.intensity,
                    light2PositionX: s.position.x,
                    light2PositionY: s.position.y,
                    light2PositionZ: s.position.z,
                    light3Intensity: i.intensity,
                    light3PositionX: i.position.x,
                    envMapIntensity: oe?.current?.material?.envMapIntensity
                  };
                  y().to(o, {
                    camPositionY: t.position.y + 2.5 * d,
                    camPositionZ: t.position.z + (m ? 24 * d : 12 * d),
                    controlsTargetZ: a.current.target.z - 5 * d,
                    plateRotationX: -.16,
                    light1Intensity: .6,
                    light2Intensity: .2,
                    light2PositionX: G.light2.carView.x,
                    light2PositionY: G.light2.carView.y,
                    light2PositionZ: G.light2.carView.z,
                    light3Intensity: .6,
                    light3PositionX: G.light3.carView.x,
                    envMapIntensity: G.envMapIntensity.carView,
                    duration: F.toggleView.camera.duration,
                    ease: F.toggleView.camera.ease,
                    onStart: () => {
                      const e = m ? 52 * d : 26 * d;
                      a.current.enableZoom = !0, a.current.maxPolarAngle = $.carView.maxPolarAngle, a.current.minPolarAngle = $.carView.minPolarAngle, a.current.maxAzimuthAngle = $.carView.maxAzimuthAngle, a.current.minAzimuthAngle = $.carView.minAzimuthAngle, a.current.maxDistance = e, r.visible = !0, b[D.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none", q.current = !0
                    },
                    onUpdate: () => {
                      t.position.set(t.position.x, o.camPositionY, o.camPositionZ), a.current.target.z = o.controlsTargetZ, oe.current.rotation.x = o.plateRotationX, oe.current?.material && (oe.current.material.envMapIntensity = o.envMapIntensity), n.intensity = o.light1Intensity, s.intensity = o.light2Intensity, s.position.set(o.light2PositionX, o.light2PositionY, o.light2PositionZ), i.intensity = o.light3Intensity, i.position.x = o.light3PositionX
                    },
                    onComplete: () => {
                      q.current = !1, a.current.minDistance = m ? 20 * d : 10 * d, b[D.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                    }
                  });
                  const l = {
                    opacity: 0
                  };
                  y().to(l, {
                    opacity: 1,
                    duration: F.toggleView.fadeOut.duration,
                    ease: F.toggleView.fadeOut.ease,
                    onUpdate: () => {
                      e.forEach((e => {
                        e.opacity = l.opacity
                      }))
                    }
                  }), y().to(oe.current, {
                    duration: 0,
                    delay: .4,
                    onComplete: () => {
                      oe.current.receiveShadow = !0, oe.current.material.depthTest = !0
                    }
                  })
                }
                Q.current = !Q.current
              }
            }), [v, Q.current, oe, oe?.current, d]),
            we = (0, r.useCallback)((e => {
              if (!(v?.scene && le?.current && te.current && re.current)) return;
              const t = b[D.UI]?.current;
              if (t) {
                const {
                  scene: a,
                  camera: r,
                  renderer: n
                } = v, s = n.domElement, {
                  y: i,
                  sidebarRef: o
                } = e, l = t.offsetHeight, c = {
                  submitOrderTranslateY: 0,
                  mobileSidebarHeight: i.get(),
                  opacity: o.current.style.opacity,
                  fov: r.fov,
                  height: s.offsetHeight
                };
                y().to(c, {
                  opacity: 1,
                  height: l,
                  mobileSidebarHeight: C,
                  fov: Y.current,
                  submitOrderTranslateY: le.current.offsetHeight,
                  duration: F.sidebar.mobile.drawer.duration,
                  ease: F.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, le.current.style.transform = `translateY(${c.submitOrderTranslateY}px)`, re.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                  },
                  onComplete: () => {
                    s.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [b, te.current, le.current, v, C]),
            Ee = e => {
              if (!v?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e, {
                sidebar: n
              } = F, {
                duration: s,
                ease: i
              } = n.mobile.drawer;
              z(r), B.current = r, t.current.style.pointerEvents = "all";
              const o = {
                mobileSidebarHeight: C,
                opacity: t.current.style.opacity
              };
              y().to(o, {
                opacity: 1,
                mobileSidebarHeight: 0,
                duration: s,
                ease: i,
                onUpdate: () => {
                  t.current.style.opacity = o.opacity, t.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`, a.current = o.mobileSidebarHeight, r.set(a.current), re.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`
                }
              })
            },
            _e = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = h, r = P ? (0, Te.jsx)(vt, {}) : t("lp.create.next");
              return (0, Te.jsx)(dt, {
                buttons: [{
                  buttonText: p ? r : t("lp.create.signin"),
                  isDisabled: !!p && (P || !g || !e && g === a),
                  onClick: async () => {
                    ee?.current?.(), p || (ce({
                      ...de,
                      event: "cta_login",
                      event_category: "cta",
                      event_action: "login",
                      event_label: "sidebar",
                      text: t("lp.create.signin").toLowerCase(),
                      link_url: u
                    }), window.location.href = u)
                  }
                }],
                isLoading: P,
                isVisible: [Z.NEW_PLATE, Z.CONFIRM_ORDER].includes(l),
                tabIndex: l === Z.NEW_PLATE ? 0 : -1
              })
            }), [g, l, p, _, h, ee.current, P]),
            Pe = (0, r.useCallback)((() => {
              s(!f)
            }), [f]),
            Ie = (0, r.useMemo)((() => m ? (0, Te.jsxs)(qe, {
              bottom: x,
              isVisible: _,
              onDrag: ve,
              onHide: we,
              onShow: Ee,
              onTap: ye,
              top: O,
              drawerY: L,
              mobileSidebarHeight: C,
              children: [(0, Te.jsx)(ct, {
                validateFnRef: ee,
                setIsLoading: R
              }), (0, Te.jsx)(xt, {
                top: O,
                drawerY: L
              })]
            }) : (0, Te.jsxs)("div", {
              ref: te,
              className: "b3a55298ca91e26e9b33",
              children: [(0, Te.jsx)("hr", {
                className: "da92b2273d68a97e2a78",
                onClick: () => {
                  Pe()
                },
                "aria-hidden": "true"
              }), (0, Te.jsx)(ct, {
                validateFnRef: ee,
                setIsLoading: R
              }), _e]
            })), [g, x, f, m, _, te.current, O, L, P, C]);
          return (0, Te.jsxs)("div", {
            ref: se,
            className: "caf43b491abf74b06503",
            children: [Ie, (0, Te.jsxs)("div", {
              ref: ae,
              className: "b36e465c1f658cb32f90",
              children: [(0, Te.jsx)(Ke, {
                onClick: () => {
                  fe({
                    onComplete: () => n(Z.LIST_PLATES)
                  })
                }
              }), (0, Te.jsx)(Ze.animated.div, {
                ref: re,
                className: "a180f06a190df3e373ca",
                style: L ? {
                  y: L
                } : void 0,
                children: (0, Te.jsx)(mt, {
                  onToggleView: xe
                })
              })]
            }), (0, Te.jsxs)("div", {
              ref: ie,
              className: "b04b9fd973ab818135a5",
              children: [m && _e, m && (0, Te.jsx)("div", {
                className: "b1913cd00efde6aa558c",
                ref: ne
              })]
            })]
          })
        })),
        _t = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setRefs: a,
            state: n
          } = Se(), {
            plates: s,
            isLoggedIn: i,
            isMobile: o
          } = n, l = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            a(D.SIDEBAR, l)
          }), [l.current, o]), (0, Te.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: l,
            className: "e5e3abc19ffd80dd3bcf",
            children: [(0, Te.jsx)("div", {
              className: "d3fd7c681c3a0e077bfd",
              children: (0, Te.jsx)(Je, {})
            }), (0, Te.jsxs)("div", {
              className: "e34b13392437e67c024e",
              children: [(0, Te.jsxs)("div", {
                className: "a9630d965666bd9a0dca",
                children: [(0, Te.jsx)("h1", {
                  className: "ff661f315c83ec384d82",
                  children: t("lp.landing.title")
                }), (0, Te.jsx)("p", {
                  className: "be91057254fd4da9b396",
                  children: t("lp.landing.description")
                }), (0, Te.jsx)("div", {
                  className: "d46b09270858ddec7470",
                  children: (0, Te.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, Te.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), i && (0, Te.jsxs)("div", {
                className: "ece6d2c94e93da11315a",
                children: [(0, Te.jsx)("h5", {
                  children: t("lp.landing.plates")
                }), (0, Te.jsxs)("span", {
                  className: "a0d05ceada404843b055",
                  children: [(0, Te.jsx)("span", {
                    className: "b2b7f5dbc7c91066f920",
                    children: s?.filter((e => {
                      let {
                        faux: t = !1
                      } = e;
                      return !t
                    }))?.length ?? 0
                  }), (0, Te.jsx)("span", {
                    className: "e2bf820b93754f519b30"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        {
          lerp: St
        } = c.MathUtils,
        Tt = "visible",
        Pt = () => {
          const {
            state: e,
            setDeletedPlateIndex: t,
            setPlates: a
          } = Se(), {
            currentView: n,
            three: s,
            isMobile: i,
            refs: o,
            deletedPlateIndex: l,
            plates: d
          } = e, u = (0, r.useRef)(null), [p, m] = (0, r.useState)(n === Z.LIST_PLATES), f = o?.[D.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            m(n === Z.LIST_PLATES)
          }), [n]);
          const g = (0, r.useCallback)((e => {
            if (!s) return;
            const {
              camera: r,
              controls: n,
              originalCameraPosition: p,
              originalControlsTarget: m,
              renderer: g,
              scene: h
            } = s, {
              clickPlate: b,
              sidebar: v,
              deletePlate: x
            } = F, w = o[D.FOOTER].current, E = o[D.SIDEBAR].current, _ = [];
            h.traverse((e => {
              e.name === X.LP && _.push(e)
            }));
            const S = y().timeline({
              duration: i ? v.mobile.drawer.duration : b.duration,
              ease: i ? v.mobile.drawer.ease : b.ease
            });
            switch (e) {
              case Tt: {
                if (!n.current) return;
                const e = {
                    current: 0
                  },
                  s = {
                    cameraPosition: {
                      start: (new c.Vector3).copy(r.position),
                      end: p
                    },
                    controlsTarget: {
                      start: (new c.Vector3).copy(n.current.target),
                      end: m
                    },
                    plateOpacity: _.map((e => ({
                      start: e.material.opacity,
                      end: 1
                    }))),
                    firstPlateSaturation: {
                      start: U.saturation.value,
                      end: 0
                    },
                    canvasTranslateY: {
                      start: Number(I(g.domElement).y),
                      end: 0
                    },
                    canvasWidth: g.domElement.offsetWidth,
                    drawerHeight: {
                      start: Number(I(u.current).y),
                      end: 0
                    }
                  };
                if (S.to(e, {
                    current: 1,
                    duration: i ? v.mobile.drawer.duration : b.duration,
                    ease: i ? v.mobile.drawer.ease : b.ease,
                    onComplete: () => {
                      i && (g.domElement.style.touchAction = "auto");
                      const e = o[D.CTA_WRAP]?.current;
                      e && e.classList.add(Ce.visible)
                    },
                    onStart: () => {
                      E && (E.style.pointerEvents = "all")
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e, a = s.cameraPosition.start.clone().lerp(s.cameraPosition.end, t);
                      r.position.set(a.x, a.y, a.z);
                      const o = s.controlsTarget.start.clone().lerp(s.controlsTarget.end, t);
                      if (n.current.target.x = o.x, n.current.target.y = o.y, n.current.target.z = o.z, _.forEach(((e, a) => {
                          e.material && (e.material.opacity = St(s.plateOpacity[a].start, s.plateOpacity[a].end, t))
                        })), U.saturation.value = St(s.firstPlateSaturation.start, s.firstPlateSaturation.end, t), i) {
                        const e = St(s.canvasTranslateY.start, s.canvasTranslateY.end, t);
                        if (g.domElement.style.transform = `translateY(${e}px)`, u.current) {
                          const e = St(s.drawerHeight.start, s.drawerHeight.end, t);
                          u.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), "number" == typeof l) {
                  const e = _.find((e => e.userData.index === l));
                  if (e) {
                    S.to(e.material, {
                      opacity: 0,
                      duration: x.duration,
                      ease: x.ease
                    }, ">");
                    const r = _.filter((e => e.userData.index >= l)).map((e => e.position)),
                      n = r.map((e => e.clone()));
                    S.to(r.slice(1), {
                      x: e => n[e].x,
                      y: e => n[e].y,
                      z: e => n[e].z,
                      stagger: {
                        each: .03
                      },
                      onComplete: () => {
                        e.removeFromParent(), e.userData.index = void 0, h.remove(e);
                        const r = d.filter((e => e.index !== l));
                        r.forEach(((e, t) => {
                          e.index = t
                        })), a(r), t(null)
                      }
                    }, "<25%")
                  }
                }
                S.to(w, {
                  autoAlpha: 1,
                  duration: i ? v.mobile.footer.in.duration : v.in.duration,
                  ease: i ? v.mobile.footer.in.ease : v.in.ease,
                  delay: i ? v.mobile.footer.in.delay : v.in.delay
                }, 0), S.to(E, {
                  autoAlpha: 1,
                  duration: i ? v.mobile.fadeHeader.in.duration : v.in.duration,
                  ease: i ? v.mobile.fadeHeader.in.ease : v.in.ease,
                  delay: i ? v.mobile.fadeHeader.in.delay : v.in.delay
                }, 0), i && (f && y().set(f.style, {
                  visibility: "visible"
                }), E && (E.style.pointerEvents = "all"));
                break
              }
              default:
                if (y().to(w, {
                    autoAlpha: 0,
                    duration: i ? v.mobile.footer.out.duration : v.out.duration,
                    ease: i ? v.mobile.footer.out.ease : v.out.ease
                  }), f && y().set(f.style, {
                    visibility: "hidden"
                  }), E && (E.style.pointerEvents = "none"), i) {
                  const e = {
                    current: I(E).y
                  };
                  y().to(E, {
                    opacity: 0,
                    duration: v.mobile.fadeHeader.out.duration,
                    ease: v.mobile.fadeHeader.out.ease
                  }), y().to(e, {
                    current: -1 * E.offsetHeight,
                    duration: v.mobile.drawer.duration,
                    ease: v.mobile.drawer.ease,
                    onUpdate: () => {
                      u.current.style.transform = `translateY(${e.current}px)`
                    }
                  })
                } else y().to(E, {
                  autoAlpha: 0,
                  duration: v.out.duration,
                  ease: v.out.ease,
                  delay: v.out.delay
                })
            }
          }), [l, s, i, o]);
          return (0, r.useEffect)((() => {
            o && o?.[D.FOOTER]?.current && o?.[D.SIDEBAR]?.current && o?.[D.UI]?.current && u.current && s?.scene && s?.controls && g(p ? Tt : "hidden")
          }), [o, p, u.current, s, i, o?.[D.FOOTER]?.current, o?.[D.SIDEBAR]?.current]), (0, Te.jsx)("div", {
            ref: u,
            className: "fe2f56dce20f2cc23636",
            children: (0, Te.jsx)(_t, {})
          })
        },
        It = e => {
          let {
            isMobile: t
          } = e;
          const {
            setRefs: a,
            state: n
          } = Se(), {
            plates: s,
            isLoggedIn: i,
            refs: o
          } = n, l = (0, r.useRef)(null), c = o[D.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              a(D.UI, l)
            }), [l.current]), !s) return null;
          let d;
          return t && (d = c ? (0, Ge.createPortal)((0, Te.jsx)(Pt, {}), c) : null), (0, Te.jsxs)("div", {
            ref: l,
            className: "cf4e3950dff0bf598a46",
            children: [i && !t && (0, Te.jsx)(xt, {}), t ? d : (0, Te.jsx)(Pt, {}), i && (0, Te.jsx)(nt, {}), (0, Te.jsx)(Et, {})]
          })
        },
        Rt = {
          orderInProgressCTA: "a33e9cc54c59f4165751",
          expanded: "e4a93c76d496871dace2",
          backToPlatesButton: "e2e2eee2c661c4dbd09a",
          contentHeading: "e539864e63d1a4ab0870",
          plateRedemptionInstructions: "ceeafcf9e6c295dea1a7",
          hidden: "b64ce673d0fce1813ea4",
          orderInstructions: "b97c15f1f2e891588f33",
          buttonWrap: "f55a2a90573ac015425e",
          ctaText: "feb57e679bed534fda36",
          isWindows: "a1c5d794c0b065b51321"
        },
        Ct = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: n,
            t: l
          } = e;
          const [c, d] = (0, r.useState)(!1), u = (0, s.useUserBearerToken)(), {
            setPlates: p,
            setPendingOrder: m,
            setPlateNumber: f,
            setSelectedStyle: g,
            setError: h,
            state: b
          } = Se(), {
            character: y,
            plates: v,
            currentView: w
          } = b, {
            track: E
          } = (0, i.useGtmTrack)(), _ = {
            view_name: "license plate creator - landing page logged in"
          }, S = w === Z.LIST_PLATES ? 0 : -1, T = (0, r.useCallback)((() => {
            (async () => {
              if (!u || !y) return;
              const [e] = y, {
                status: t
              } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                bearerToken: u,
                fetchOptions: {
                  method: "DELETE"
                },
                query: {
                  platform: e
                }
              });
              if (t) {
                const e = [q, ...v.slice(1, v.length)];
                p(e), m(null), f(""), g(x(q.style.name).id)
              } else h("api");
              E({
                ..._,
                event: "cta_cancel",
                event_category: "cta",
                event_action: "cancel",
                text: `modal: ${l("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${l("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, y, v]);
          return (0, Te.jsxs)("div", {
            className: [Rt.orderInProgressCTA, n ? "" : Rt.hidden].join(" "),
            children: [(0, Te.jsx)("h1", {
              className: Rt.contentHeading,
              children: l("lp.inprogress.title")
            }), (0, Te.jsx)("p", {
              className: Rt.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: l("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${Rt.vehicleName}>${t}</span>`)
              }
            }), (0, Te.jsxs)("div", {
              className: Rt.buttonWrap,
              children: [(0, Te.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": l("lp.inprogress.edit"),
                tabIndex: S,
                children: (0, Te.jsx)("span", {
                  className: Rt.ctaText,
                  children: l("lp.inprogress.edit")
                })
              }), (0, Te.jsx)("button", {
                type: "button",
                onClick: () => d(!0),
                "aria-label": l("lp.inprogress.cancel"),
                tabIndex: S,
                children: (0, Te.jsx)("span", {
                  className: Rt.ctaText,
                  children: l("lp.inprogress.cancel")
                })
              })]
            }), (0, Te.jsx)(et, {
              title: l("lp.modal.order-cancel.title"),
              secondaryText: l("lp.modal.order-cancel.description").replace("{plateText}", v[0]?.plateText ?? "this plate"),
              buttons: [{
                buttonText: l("lp.modal.order-cancel.confirm"),
                onClick: () => T()
              }, {
                buttonText: l("lp.modal.order-cancel.close"),
                onClick: () => {
                  E({
                    ..._,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${l("lp.modal.order-cancel.close").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${l("lp.modal.order-cancel.title").toLowerCase()}`
                  })
                }
              }],
              showModal: c,
              onClose: () => d(!1),
              t: l
            })]
          })
        },
        Nt = e => {
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
          return (0, Te.jsx)("div", {
            style: {
              width: `${a}px`,
              height: a / 2 + "px",
              pointerEvents: "none"
            },
            children: (0, Te.jsxs)("div", {
              className: [Ce.loggedOutCTA, r !== Z.LIST_PLATES ? Ce.hidden : ""].join(" "),
              children: [(0, Te.jsx)("button", {
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
                className: [Ce.signIn, r !== Z.LIST_PLATES ? Ce.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Te.jsx)("span", {
                  className: Ce.ctaText,
                  children: c("lp.landing.signup")
                })
              }), (0, Te.jsx)("button", {
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
                className: [Ce.tryWithoutSigningIn, Ce.firstLoad, r !== Z.LIST_PLATES ? Ce.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, Te.jsx)("span", {
                  className: Ce.ctaText,
                  children: c("lp.landing.tryit")
                })
              })]
            })
          })
        },
        At = e => {
          let {
            t
          } = e;
          const {
            state: a,
            setCurrentView: n,
            setCurrentPlate: s,
            setCurrentPlateIndex: o,
            setRefs: l
          } = Se(), {
            currentView: c,
            gridState: d,
            isLoggedIn: u,
            loginUrl: p,
            pendingOrder: m,
            plates: f,
            refs: g,
            isMobile: h,
            realHeight: b
          } = a, [y, v] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            v(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            f.length && _(f[0])
          }), [f]);
          const [x, w] = (0, r.useState)(null), [E, _] = (0, r.useState)(null), S = g[D.FIRST_PLATE_MESH], T = g[D.ROOT], I = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = g[D.SIDEBAR];
            if (!(e?.current && T?.current && d?.gridOptions && E)) return;
            const t = e.current,
              a = {
                x: h ? 0 : t.offsetWidth,
                y: 0
              },
              r = R(E.index, T.current, Number(b.replace("px", "")), d, a);
            w(r)
          }), [d, T?.current, E, g, I.current, b]);
          const {
            track: A
          } = (0, i.useGtmTrack)(), O = {
            view_name: "license plate creator - landing page logged " + (u ? "in" : "out")
          }, k = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            l(D.CTA_WRAP, I)
          }), [I.current]);
          const j = c === Z.LIST_PLATES ? 0 : -1,
            L = (0, r.useCallback)((e => {
              if (n() === Z.LIST_PLATES) {
                const t = 0 === e ? Z.NEW_PLATE : Z.VIEW_PLATE;
                e && (A({
                  ...O,
                  event: "license_plate_open",
                  event_category: "license_plate",
                  event_action: "open",
                  view_name: "list plates",
                  position: e
                }), A({
                  ...O,
                  event: "virtualPageview",
                  display_type: h ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                })), s(f[e]), o(e), n(t)
              }
            }), [f]),
            M = (0, r.useCallback)((e => {
              C(e, c)
            }), [c]),
            V = (0, r.useMemo)((() => x ? (0, Te.jsx)(Nt, {
              plateData: E,
              plateWidthInPixels: x.width,
              currentView: c,
              loginUrl: p,
              inputTabIndex: j,
              track: A,
              trackingPresets: O,
              onClickPlate: L,
              t
            }) : null), [c, p, x]),
            W = (0, r.useMemo)((() => void 0 !== f ? P(m, f) ? (0, Te.jsx)(Ct, {
              t,
              vehicleName: `${m.manufacturerName} ${m.vehicleName}`,
              onClickEdit: () => {
                A({
                  ...O,
                  event: "license_plate_edit_click",
                  event_category: "license_plate",
                  event_action: "edit",
                  event_label: "click",
                  text: t("lp.inprogress.edit").toLowerCase()
                }), L(E.index)
              },
              isVisible: c === Z.LIST_PLATES
            }) : f.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30 ? (0, Te.jsxs)("div", {
              className: [Ce.maxPlatesReached, c !== Z.LIST_PLATES ? Ce.hidden : ""].join(" "),
              children: [(0, Te.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === f.length ? null : (0, Te.jsxs)("button", {
              type: "button",
              onClick: () => {
                A({
                  ...O,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "click",
                  text: t("lp.landing.newcta").toLowerCase()
                }), L(E.index)
              },
              onPointerOver: h ? void 0 : () => {
                S?.current && M(S?.current)
              },
              onPointerOut: h ? void 0 : () => {
                var e;
                S?.current && (e = S?.current, N(e))
              },
              className: [Ce.createNewPlate, c !== Z.LIST_PLATES ? Ce.hidden : ""].join(" "),
              ref: k,
              tabIndex: j,
              children: [(0, Te.jsx)("span", {
                className: `${Ce.ctaText} ${y?Ce.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, Te.jsx)("div", {
                className: Ce.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [c, m, g, x, f, h]),
            z = (0, r.useMemo)((() => void 0 !== m && x ? (0, Te.jsx)("div", {
              style: {
                width: `${x.width}px`,
                height: x.width / 2 + "px",
                pointerEvents: "none",
                fontSize: x.width / 2 * .075 + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: W
            }) : null), [c, m, x, g, W, h]);
          return (0, r.useMemo)((() => {
            if (!x || !E || !d?.gridOptions) return null;
            const {
              width: e,
              height: t
            } = x, {
              top: a,
              left: r,
              right: n,
              bottom: s
            } = x.rect;
            return (0, Te.jsx)("div", {
              ref: I,
              className: Ce.CTAWrap,
              style: {
                top: a,
                left: r,
                bottom: s,
                right: n,
                width: e,
                height: t
              },
              children: u ? z : V
            })
          }), [x, E, d, u, c, W, f, h])
        },
        Ot = e => {
          let {
            t
          } = e;
          const {
            state: {
              error: a,
              isMobile: n
            }
          } = Se(), s = {
            api: t("lp.error.api.description"),
            browser: t("lp.error.browser.description"),
            character: t("lp.error.nocharacter.description"),
            vehicles: t("lp.error.novehicle.description"),
            webgl: t("lp.error.webgl.description")
          }, o = {
            api: t("lp.error.api.cta"),
            browser: t("lp.error.browser.cta"),
            character: t("lp.error.nocharacter.cta"),
            vehicles: t("lp.error.api.cta"),
            webgl: t("lp.error.api.cta")
          }, {
            track: l
          } = (0, i.useGtmTrack)(), {
            data: c
          } = (0, i.useRockstarUser)(), d = {
            member_id: c?.user ? c.user?.id : void 0,
            view_name: "license plate creator - error screen"
          };
          return (0, r.useEffect)((() => {
            l({
              ...d,
              event: "alert_error",
              event_category: "alert",
              event_action: "error",
              text: s[a] || t("lp.error.unexpected.description")
            }), l({
              ...d,
              event: "trackPageview",
              display_type: n ? "mobile" : "desktop"
            })
          }), []), (0, Te.jsxs)("div", {
            className: "edb361b16208ea39b04d",
            children: [(0, Te.jsxs)("div", {
              className: "f989292c56d125a42b05",
              children: [(0, Te.jsxs)("div", {
                className: "d8a0031e9fbf468e335f",
                children: [(0, Te.jsx)("i", {}), (0, Te.jsx)("h4", {
                  children: s[a] || t("lp.error.unexpected.description")
                })]
              }), (0, Te.jsx)(u.NavLink, {
                to: "character" !== a ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, Te.jsx)("button", {
                  className: "e93e0cb9f21eac83e021",
                  type: "button",
                  tabIndex: 0,
                  children: (0, Te.jsx)("span", {
                    className: "b0922946a512c5c777b2",
                    children: o[a]
                  })
                })
              })]
            }), (0, Te.jsx)("div", {
              className: "d7b9f55b7895c5fc08c6"
            })]
          })
        },
        kt = e => {
          let {
            plate: t,
            index: a,
            details: r,
            tabIndex: n
          } = e;
          const {
            setCurrentView: s,
            setCurrentPlate: o,
            setCurrentPlateIndex: l,
            state: {
              isLoggedIn: c,
              isMobile: d
            }
          } = Se(), {
            track: u
          } = (0, i.useGtmTrack)(), p = {
            view_name: "license plate creator - landing page logged " + (c ? "in" : "out")
          };
          return (0, Te.jsx)("button", {
            "aria-label": `${t.style.displayName||""} license plate ${t.plateText?`with the number ${t.plateText}`:""}`.trim(),
            className: "dfcce6149acc6235b802",
            id: `keyboard-accessible-license-plate-${a}`,
            style: {
              position: "absolute",
              height: `${r.height}px`,
              width: `${r.width}px`,
              top: `${r.top}px`,
              left: `${r.left}px`
            },
            tabIndex: n,
            type: "button",
            onClick: e => {
              e.target.blur(), u({
                ...p,
                event: "license_plate_open",
                event_category: "license_plate",
                event_action: "open",
                view_name: "list plates",
                position: a
              }), u({
                ...p,
                event: "virtualPageview",
                display_type: d ? "mobile" : "desktop",
                view_name: "license plate creator - view plate"
              }), o(t), l(a), s(Z.VIEW_PLATE)
            }
          })
        },
        jt = () => {
          const {
            state: {
              gridState: e,
              plates: t,
              realHeight: a,
              currentView: n,
              refs: s,
              isMobile: i
            }
          } = Se(), [o, l] = (0, r.useState)([]);
          return (0, r.useEffect)((() => {
            const r = s[D.ROOT]?.current,
              n = s?.[D.SIDEBAR]?.current,
              o = [];
            r && n && e && (t.forEach(((t, s) => {
              if (s) {
                const t = R(s, r, Number(a.replace("px", "")), e, i ? void 0 : {
                    x: n.offsetWidth,
                    y: 0
                  }),
                  {
                    height: l,
                    width: c,
                    rect: {
                      top: d,
                      left: u
                    }
                  } = t;
                l && c && l < c && o.push({
                  width: c,
                  height: l,
                  top: d,
                  left: u
                })
              }
            })), l([...o]))
          }), [e, t, a, s[D.ROOT]?.current?.offsetHeight]), o.length ? (0, Te.jsx)(Te.Fragment, {
            children: t.filter(((e, t) => t)).map(((e, t) => (0, Te.jsx)(kt, {
              plate: e,
              index: t,
              details: o[t],
              tabIndex: n === Z.LIST_PLATES ? 0 : -1
            }, e.plateText + e.vehicles.toString())))
          }) : null
        },
        Lt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: f,
            setCharacter: h,
            setCurrentView: b,
            setError: y,
            setIsLoggedIn: v,
            setIsMobile: w,
            setPendingOrder: _,
            setPlateNumber: S,
            setPlates: T,
            setRefs: I,
            setSelectedStyle: R,
            setVehicles: C,
            state: N
          } = Se(), {
            isLoggedIn: A,
            error: O,
            plates: k,
            pendingOrder: j,
            isMobile: L,
            three: M
          } = N, V = (0, s.useUserBearerToken)(), {
            setCustomFooter: W
          } = (0, l.useRockstarLocalState)(), {
            loggedIn: B,
            selectedCharacterTuple: H
          } = (0, i.useRockstarUser)(), Y = (0, r.useRef)(null), U = (0, r.useRef)(null), F = (0, r.useRef)(null), [$, G] = (0, r.useState)(null), [X] = (0, u.useSearchParams)(), [K, J] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            try {
              if (!o.supportedBrowsers.test(navigator.userAgent)) throw new Error("browser");
              const e = document.createElement("canvas"),
                t = ["webgl2", "webgl", "experimental-webgl", "moz-webgl", "webkit-3d"].some((t => {
                  const a = e.getContext(t);
                  return a && "function" == typeof a?.getParameter
                }));
              if (!window.WebGLRenderingContext || !t) throw new Error("webgl")
            } catch (e) {
              y(e?.message)
            } finally {
              J(!0)
            }
          }), []);
          const Q = (0, r.useCallback)(g().debounce((() => {
            if (M?.renderer) {
              const {
                renderer: e
              } = M, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              f({
                width: t,
                height: a
              })
            }
            w(E())
          }), 100), [M]);
          (0, r.useEffect)((() => (Q(), window.addEventListener("resize", Q, !0), () => window.removeEventListener("resize", Q, !0))), [M]), (0, r.useEffect)((() => ((0, l.setFreezeUserShouldSeeMore)(!0), W(!0), () => {
            (0, l.setFreezeUserShouldSeeMore)(!1), W(!1), b(Z.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            I(D.CANVAS_WRAP, Y)
          }), [Y.current]), (0, r.useEffect)((() => {
            I(D.ROOT, U)
          }), [U.current]), (0, r.useEffect)((() => {
            I(D.MOBILE_SIDEBAR_PORTAL_TARGET, F)
          }), [F.current]), (0, r.useEffect)((() => {
            if (!K || "webgl" === O || "browser" === O) return;
            y(null), h(H), b(Z.LIST_PLATES), _(null);
            const e = (B ? [] : [q]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== A && T(e), C([]), (async () => {
              try {
                const e = y();
                if (!V || null === H || e) return;
                if (!1 === H) return void y("character");
                const [t, a] = H, r = await (0, o.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  bearerToken: V,
                  query: {
                    character: a,
                    platform: t
                  }
                }), n = r?.result?.plates?.map((e => {
                  const t = x(e?.vehicles?.[0]?.plateStyle ?? "YellowBlack");
                  return {
                    ...e,
                    style: t
                  }
                })) ?? [], s = await (0, o.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                  bearerToken: V,
                  query: {
                    character: a,
                    platform: t
                  }
                }), i = g().uniqBy(s?.result?.vehicles ?? [], (e => {
                  let {
                    id: t
                  } = e;
                  return t
                }));
                if (!i.length) return void y("vehicles");
                C(i);
                const l = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                    bearerToken: V,
                    query: {
                      platform: t
                    }
                  }),
                  {
                    result: c
                  } = l,
                  d = P(c, k);
                let u = [q, ...n];
                u = u.map(((e, t) => ({
                  ...e,
                  index: t
                }))), d ? (_(c), R(q.style.id)) : _(null), S(q.plateText), T(u)
              } catch (e) {
                y("api")
              }
            })()
          }), [typeof V, String(H), A, K]), (0, r.useEffect)((() => {
            P(j, k) && (R(x(j.plateStyle).id), S(j.plateText))
          }), [j, k]), (0, r.useEffect)((() => {
            v(!!B)
          }), [B]), (0, r.useEffect)((() => {
            if ($ || !z || O || !K) return;
            const e = X.get("envUrl") || a(3924),
              t = new c.LoadingManager((() => {
                G({
                  environmentMap: u,
                  environmentModel: l,
                  plateTextures: f
                })
              })),
              r = new d.E(t),
              n = new p._(t),
              s = new m.a(t);
            n.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.3/"), r.setDRACOLoader(n), s.detectSupport(new c.WebGLRenderer), s.setTranscoderPath("https://unpkg.com/three@0.134.0/examples/js/libs/basis/"), r.setKTX2Loader(s);
            const i = new c.TextureLoader(t),
              o = new c.CubeTextureLoader(t);
            let l;
            r.load(e, (e => {
              l = e
            }), void 0, (e => console.log("err", e)));
            const u = o.load([a(8220), a(8130), a(5377), a(6491), a(1984), a(3445)]),
              f = z.map((e => {
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
          }), [$, z, O, K]);
          const ee = (0, r.useMemo)((() => (0, Te.jsx)(n.Canvas, {
            shadows: !E(),
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
            children: (0, Te.jsx)($e, {
              loadedAssets: $
            })
          })), [$]);
          return K && null !== B ? O ? (0, Te.jsx)(Ot, {
            t
          }) : (0, Te.jsxs)("div", {
            ref: U,
            className: "bbf483f378bf9b124fa4",
            children: [L && (0, Te.jsx)("div", {
              className: "bf1276a16c42d8d88c6b",
              ref: F
            }), (0, Te.jsxs)("div", {
              className: "e679d5c0c7e82b869590",
              children: [(0, Te.jsx)(It, {
                isMobile: L
              }), (0, Te.jsx)("div", {
                className: "d171b6e11feaaa0e6b49",
                ref: Y,
                children: ee
              })]
            }), (0, Te.jsx)("span", {
              className: "c23379ba67d2aa3b2d3d"
            }), (0, Te.jsx)(At, {
              t
            }), (0, Te.jsx)(jt, {}), (0, Te.jsx)(Pe, {
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