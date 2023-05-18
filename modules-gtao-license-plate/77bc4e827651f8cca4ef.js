"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [98], {
    7098: (e, t, a) => {
      a.d(t, {
        Z: () => Qt
      });
      var r = a(822),
        n = a(2178),
        s = a(4859),
        i = a(6711),
        o = a(2435),
        l = a(3657),
        c = a(4553),
        d = a(3750),
        u = a(7814),
        m = a(7257),
        p = a(301),
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
        E = () => window.innerWidth < H.lg,
        _ = () => window.innerHeight > .75 * window.innerWidth,
        S = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= H.xxl:
              return 25;
            case e >= H.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= H.lg:
              return 40;
            default:
              return 100
          }
        },
        T = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= H.xl:
              return w(4);
            case e >= 1440:
              return w(3);
            default:
              return w(2)
          }
        },
        P = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= H.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= H.lg:
              return 5;
            case e >= H.md:
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

      function k(e) {
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
          top: m,
          left: p,
          bottom: f
        } = r.gridDimensions.margins.pixels, g = Math.floor(e / i), h = e % i, b = l * o + d * (o - 1), y = c * i + u * (i - 1), v = s - n.x - 2 * p, x = a - n.y - m - f, w = x * (l / b) - 1, E = v * (c / y) - 1, _ = g * (l + d) / b, S = {
          x: v * (h * (c + u) / y) + p + n.x + 1,
          y: x * _ + m + n.y
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
      const N = (e, t) => {
          const a = 1.025;
          t === le.LIST_PLATES && (document.body.style.cursor = "pointer", y().to(e.scale, {
            x: a,
            y: a,
            z: a,
            duration: G.plateHover.duration,
            ease: G.plateHover.ease
          }))
        },
        A = e => {
          document.body.style.cursor = "auto", y().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: G.plateHover.duration,
            ease: G.plateHover.ease
          })
        };

      function O(e, t) {
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
        } = n, m = P(), p = !_() || E() ? m * s : 1.6 * m * s, f = [];
        let g = null;
        l.traverse((e => {
          e.name === ce.LP && f.push(e), e.userData.index === a && (g = e)
        }));
        const h = new c.Vector3;
        g && g.getWorldPosition(h);
        const b = {
            cameraPosition: {
              start: (new c.Vector3).copy(d.position),
              end: new c.Vector3(h.x, h.y, h.z + p)
            },
            controlsTarget: {
              start: (new c.Vector3).copy(u.current.target),
              end: h
            },
            plateOpacity: f.map(((e, t) => ({
              start: e.material.opacity,
              end: f[t].userData.index === a ? 1 : 0
            })))
          },
          y = {
            current: 0
          };
        let v = 0;
        return t.isResize || (v = E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration), r.to(y, {
          current: 1,
          duration: v,
          ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = y, t = b.cameraPosition.start.clone().lerp(b.cameraPosition.end, e);
            d.position.set(t.x, t.y, t.z);
            const a = b.controlsTarget.start.clone().lerp(b.controlsTarget.end, e);
            u.current.target.x = a.x, u.current.target.y = a.y, u.current.target.z = a.z
          },
          onComplete: i ? () => {
            i(e)
          } : void 0
        }, o || 0), y.current = 0, r.to(y, {
          current: 1,
          duration: E ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
          ease: E ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = y;
            f.forEach(((t, a) => {
              t.material && (t.material.opacity = c.MathUtils.lerp(b.plateOpacity[a].start, b.plateOpacity[a].end, e))
            }))
          }
        }, "<")
      }

      function C() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      }
      const j = "GTALicensePlatesRegular",
        L = 620,
        M = a(4495),
        V = "initial",
        W = "top",
        D = "bottom",
        B = {
          CANVAS_WRAP: "canvasWrap",
          CONFIRM_CONTENT: "confirmContent",
          CONFIRM_SIDEBAR: "confirmSidebar",
          CONFIRM_SIDEBAR_BUTTONS: "confirmOrderSidebarButtons",
          CONFIRM_SIDEBAR_BUTTONS_PORTAL: "confirmOrderSidebarButtonsPortal",
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
          TOGGLE_VIEW_BUTTON: "toggleViewButton"
        },
        U = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        z = [{
          id: 0,
          name: "BlueWhite2",
          displayName: "Blue on White 2",
          alphaImageUrl: M,
          albedoImageUrl: a(6050),
          roughnessImageUrl: a(8642),
          bumpImageUrl: a(9233),
          previewUrl: a(8928),
          image: null,
          fontColor: "#2C317E",
          fontSize: L,
          fontName: j,
          selected: !1
        }, {
          id: 1,
          name: "YellowBlack",
          displayName: "Yellow on Black",
          alphaImageUrl: M,
          albedoImageUrl: a(4360),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(3983),
          image: null,
          fontColor: "#D29D17",
          fontSize: L,
          fontName: j,
          selected: !1
        }, {
          id: 2,
          name: "OrangeBlue",
          displayName: "Orange on Blue",
          alphaImageUrl: M,
          albedoImageUrl: a(6879),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(1358),
          image: null,
          fontColor: "#CD7600",
          fontSize: L,
          fontName: j,
          selected: !1
        }, {
          id: 3,
          name: "BlueWhite1",
          displayName: "Blue on White 1",
          alphaImageUrl: M,
          albedoImageUrl: a(3493),
          roughnessImageUrl: a(1765),
          bumpImageUrl: a(5987),
          previewUrl: a(7934),
          image: null,
          fontColor: "#2C317E",
          fontSize: L,
          fontName: j,
          selected: !1
        }, {
          id: 4,
          name: "BlueWhite3",
          displayName: "Blue on White 3",
          alphaImageUrl: M,
          albedoImageUrl: a(754),
          roughnessImageUrl: a(2423),
          bumpImageUrl: a(4517),
          previewUrl: a(2548),
          image: null,
          fontColor: "#2C317E",
          fontSize: L,
          fontName: j,
          selected: !1
        }],
        H = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        Y = 0,
        F = 2,
        $ = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: Y
          }
        },
        G = {
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
        Z = {
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
        J = -10.68,
        K = 10.4,
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
        ie = .4,
        oe = .3,
        le = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        ce = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        de = {
          faux: !0,
          index: 0,
          mpPlate: !1,
          noDelete: !1,
          spPlate: !1,
          plateText: "",
          style: x("BlueWhite2"),
          vehicles: []
        },
        ue = (0, s.makeVar)(""),
        me = (0, s.makeVar)(null),
        pe = (0, s.makeVar)(null),
        fe = (0, s.makeVar)(null),
        ge = (0, s.makeVar)(0),
        he = (0, s.makeVar)(le.LIST_PLATES),
        be = (0, s.makeVar)(null),
        ye = (0, s.makeVar)(null),
        ve = (0, s.makeVar)(1),
        xe = (0, s.makeVar)(null),
        we = (0, s.makeVar)(!1),
        Ee = (0, s.makeVar)(!0),
        _e = (0, s.makeVar)(E()),
        Se = (0, s.makeVar)(!1),
        Te = (0, s.makeVar)(!1),
        Pe = (0, s.makeVar)(void 0),
        Ie = (0, s.makeVar)(""),
        ke = (0, s.makeVar)([]),
        Re = (0, s.makeVar)(null),
        Ne = (0, s.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        Ae = (0, s.makeVar)(z),
        Oe = (0, s.makeVar)({}),
        Ce = (e, t) => {
          const a = {
            ...Oe(),
            [e]: t
          };
          Oe(a)
        },
        je = (0, s.makeVar)(0),
        Le = (0, s.makeVar)(null),
        Me = (0, s.makeVar)(null),
        Ve = (0, s.makeVar)(null),
        We = () => {
          const e = (0, s.useReactiveVar)(me),
            t = (0, s.useReactiveVar)(pe),
            a = (0, s.useReactiveVar)(fe),
            n = (0, s.useReactiveVar)(ge),
            l = (0, s.useReactiveVar)(he),
            c = (0, s.useReactiveVar)(Re),
            d = (0, s.useReactiveVar)(be),
            u = (0, s.useReactiveVar)(ye),
            m = (0, s.useReactiveVar)(ve),
            p = (0, s.useReactiveVar)(xe),
            f = (0, s.useReactiveVar)(_e),
            g = (0, s.useReactiveVar)(we),
            h = (0, s.useReactiveVar)(Ee),
            b = (0, s.useReactiveVar)(Se),
            y = (0, s.useReactiveVar)(Te),
            v = (0, o.useLocale)(),
            [x, w] = (0, r.useState)(""),
            E = (0, s.useReactiveVar)(Pe),
            _ = (0, s.useReactiveVar)(Ie),
            S = (0, s.useReactiveVar)(ke),
            T = (0, s.useReactiveVar)(Ne),
            P = (0, s.useReactiveVar)(Ae),
            I = (0, s.useReactiveVar)(ue),
            k = (0, s.useReactiveVar)(Oe),
            R = (0, i.useScConfig)(),
            N = (0, s.useReactiveVar)(je),
            A = (0, s.useReactiveVar)(Le),
            O = (0, s.useReactiveVar)(Me),
            C = (0, s.useReactiveVar)(Ve);
          return (0, r.useEffect)((() => {
            const e = (0, o.toScLocaleString)(v),
              t = `${document.location.pathname}${document.location.search}`,
              a = `${R.login}?returnUrl=${t}&lang=${e}`;
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
              isLoading: h,
              gridScale: m,
              gridState: p,
              pendingOrder: E,
              plates: S,
              realHeight: I,
              isExpanded: g,
              isMobile: f,
              isSceneLoaded: y,
              loginUrl: x,
              isOrderConfirmed: b,
              plateNumber: _,
              plateNumberStatus: T,
              plateStyles: P,
              refs: k,
              selectedStyle: N,
              selectedVehicle: A,
              three: O,
              vehicles: C
            },
            setCanvasDimensions: me,
            setCharacter: pe,
            setCurrentPlate: fe,
            setCurrentPlateIndex: ge,
            setCurrentView: he,
            setDeletedPlateIndex: Re,
            setError: be,
            setFirstPlateMesh: ye,
            setGridState: xe,
            setIsLoading: Ee,
            setIsOrderConfirmed: Se,
            setPendingOrder: Pe,
            setPlates: ke,
            realHeightReactive: ue,
            setIsExpanded: we,
            setIsMobile: _e,
            setIsSceneLoaded: Te,
            setGridScale: ve,
            setPlateNumber: Ie,
            setPlateNumberStatus: Ne,
            setPlateStyles: Ae,
            setRefs: Ce,
            setRefsInternal: Oe,
            setSelectedStyle: je,
            setSelectedVehicle: Le,
            setThree: Me,
            setVehicles: Ve
          }
        };
      var De = a(9706);
      const Be = e => {
        let {
          t
        } = e;
        const {
          setRefs: a,
          state: n
        } = We(), {
          realHeight: s
        } = n, i = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          a(B.FOOTER, i)
        }), [i.current]), (0, De.jsx)("div", {
          className: "dfb5b2acf94c1bee2c37",
          ref: i,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, De.jsxs)("div", {
            className: "e85531fe4eae0ee625c1",
            children: [(0, De.jsxs)("div", {
              className: "ed35c6f20ece33d1283f",
              children: [(0, De.jsx)(h.LanguageSelector, {}), (0, De.jsxs)("div", {
                className: "fd7206567c293e3054b0",
                children: [(0, De.jsx)(h.A, {
                  to: "/corpinfo",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info",
                  children: t("Corporate")
                }), (0, De.jsx)(h.A, {
                  to: "/privacy",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy",
                  children: t("Privacy")
                }), (0, De.jsx)(h.A, {
                  onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie settings",
                  children: t("Cookie Settings")
                }), (0, De.jsx)(h.A, {
                  to: "/cookies",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie policy",
                  children: t("Cookie Policy")
                }), (0, De.jsx)(h.A, {
                  to: "/legal",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal",
                  children: t("Legal")
                }), (0, De.jsx)(h.A, {
                  to: "/ccpa",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "CCPA Link",
                  "data-gtm-label": "View CCPA Info",
                  children: t("Do Not Sell My Info")
                })]
              })]
            }), (0, De.jsx)(h.Rating, {
              className: "bb8ac13e4a077787384b",
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })
        })
      };
      var Ue = a(6929),
        ze = a(5561);
      const He = {
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
        Ye = e => {
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
          }), []), (0, De.jsx)("primitive", {
            position: s,
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            object: i
          })
        };
      var Fe = a(7028);
      const $e = "#898989",
        Ge = "#000000",
        Ze = ["0.05", "0.15", "0.4"],
        Xe = ["0.0", "0.5", "1.0"],
        qe = ["0.299", "0.587", "0.114"],
        Je = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        Ke = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= H.sm ? t = 1 / 4 : a <= H.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        Qe = {
          bumpMap: Ke(),
          map: Ke(),
          roughnessMap: Ke()
        },
        et = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: n,
            plateIndex: s,
            position: o = [0, 0, 0],
            width: l = 2
          } = e;
          const {
            loggedIn: d
          } = (0, i.useRockstarUser)(), {
            state: u,
            setCurrentView: m,
            setCurrentPlate: p,
            setCurrentPlateIndex: f,
            setRefs: g
          } = We(), {
            currentView: h,
            isSceneLoaded: b,
            pendingOrder: y,
            plateNumber: x,
            plates: w,
            isMobile: E,
            selectedStyle: _,
            gridScale: S
          } = u, [T, P] = (0, r.useState)(v(n.style.id)), I = [0, 0, 0], k = [1, 1, 1], [R] = (0, r.useState)(0 === n.index), O = (0, r.useRef)(), C = w.filter((e => {
            let {
              faux: t
            } = e;
            return !t
          })).length >= 30;
          (0, r.useEffect)((() => {
            O.current && 0 === O.current.userData.index && g(B.FIRST_PLATE_MESH, O)
          }), [O.current]);
          const j = (0, r.useRef)(),
            L = (0, r.useRef)(null),
            {
              track: M
            } = (0, i.useGtmTrack)(),
            V = {
              view_name: "license plate creator - landing page logged " + (d ? "in" : "out")
            },
            W = (0, r.useCallback)((e => {
              !n.index && C || N(e, h)
            }), [h]),
            D = (0, r.useCallback)((e => {
              if (m() === le.LIST_PLATES) {
                const t = 0 === e ? le.NEW_PLATE : le.VIEW_PLATE;
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
                  display_type: E ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                }), p(w[e]), f(e)), m(t)
              }
            }), [w]),
            U = (0, r.useCallback)((e => {
              var t;
              R && (e.uniforms.saturation = $.saturation, e.uniforms.fade = $.fade, e.uniforms.shaderIndex = $.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == ${F}) {\n            float desaturationOpacity = gl_FragColor.a * (saturation + 0.3);\n            vec3 desaturationColor = vec3(\n                ${qe[0]},\n                ${qe[1]},\n                ${qe[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, desaturationOpacity);\n\n        } else if (shaderIndex == ${Y}) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=d?Ze:Xe)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [R, d, y]);
          return (0, r.useEffect)((() => {
            R && (n.plateText = x)
          }), [R ? x : null]), (0, r.useEffect)((() => {
            if (R && T && T.id !== _) {
              const e = v(_);
              P(e)
            }
          }), [R, _]), (0, r.useEffect)((() => {
            $.shaderIndex.value = d ? y ? Y : F : Y, j.current && (j.current.bumpScale = .015 * S, j.current.needsUpdate = !0)
          }), [j.current, y, d, S]), (0, r.useMemo)((() => {
            if (!b) return null;
            const [e, r, i] = (e => {
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete Qe.bumpMap, Qe.bumpMap = Ke();
                  const a = Qe.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= H.sm ? r = 1 / 4 : n <= H.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const i = 5 * r;
                  return Je || (a.filter = `blur(${i}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), Je && Fe.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * i), new c.CanvasTexture(a.canvas)
                })(a, T),
                n = ((e, t) => {
                  delete Qe.map, Qe.map = Ke();
                  const a = Qe.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= H.sm ? r = 1 / 4 : n <= H.md && (r = .5);
                  const s = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new c.CanvasTexture(a.canvas)
                })(a, T),
                s = E ? void 0 : ((e, t) => {
                  delete Qe.roughnessMap, Qe.roughnessMap = Ke();
                  const a = Qe.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= H.sm ? r = 1 / 4 : n <= H.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = Ge, a.fillStyle = Ge, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = $e, a.fillStyle = $e, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new c.CanvasTexture(a.canvas)
                })(a, T);
              return [r, n, s]
            })(R ? x : n.plateText);
            return (0, De.jsxs)("mesh", {
              name: ce.LP,
              visible: !0,
              userData: {
                index: s
              },
              position: o,
              rotation: I,
              scale: k,
              ref: O,
              onClick: () => {
                d && (!n.index && C || D(n.index))
              },
              onPointerOver: E ? void 0 : () => {
                d && m() === le.LIST_PLATES && O.current && W(O.current)
              },
              onPointerOut: E ? void 0 : () => {
                var e;
                d && O.current && (e = O.current, !n.index && C || A(e))
              },
              children: [(0, De.jsx)("planeBufferGeometry", {
                args: [l, a, l, a]
              }), (0, De.jsx)("meshPhysicalMaterial", {
                alphaMap: n.alphaMap,
                bumpMap: e,
                opacity: 0,
                bumpScale: .015,
                depthTest: !1,
                envMap: t,
                envMapIntensity: ie,
                map: r,
                metalness: .4,
                onBeforeCompile: R && U || void 0,
                ref: j,
                roughness: .3,
                roughnessMap: i,
                transparent: !0
              })]
            })
          }), [R ? L.current : void 0, R, d, E, b, n, R ? x : void 0, R ? T : void 0])
        },
        tt = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const {
            loggedIn: s
          } = (0, i.useRockstarUser)(), [o, l, d, u] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: m
          } = a, {
            gridOptions: p,
            gridPosition: f
          } = t, {
            bottomMarginAsRatio: g,
            columnGap: h,
            columns: b,
            isVertical: y,
            rowGap: v,
            topMarginAsRatio: x
          } = p, {
            state: w,
            realHeightReactive: E,
            setGridScale: _,
            setCurrentView: S
          } = We(), {
            currentView: P,
            gridScale: I,
            plates: k,
            isMobile: R,
            realHeight: N,
            refs: A,
            currentPlateIndex: O,
            three: j,
            canvasDimensions: L
          } = w, M = (0, r.useRef)(null), {
            camera: V,
            scene: W,
            gl: D
          } = (0, n.useThree)(), [U, z] = (0, r.useState)(new c.Vector3(f.x, f.y, f.z)), [H, Y] = (0, r.useState)(0), [F, $] = (0, r.useState)(0), [G, Z] = (0, r.useState)(0), [X, q] = (0, r.useState)(!0), [J, K] = (0, r.useState)(null), {
            track: Q
          } = (0, i.useGtmTrack)(), ee = {
            view_name: "license plate creator - landing page logged " + (s ? "in" : "out")
          }, [te, ae] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            P === le.LIST_PLATES && Q({
              ...ee,
              event: "virtualPageview",
              display_type: R ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (s ? "in" : "out")
            })
          }), [P]);
          const re = (0, r.useCallback)((() => {
            if (L) {
              const {
                width: e,
                height: a
              } = L, r = d * b + h * (b - 1), n = Math.abs(f.z) * Math.tan((0, ze.Id)(V.fov / 2)) * 2, s = t.gridDimensions.margins.meters.top, i = t.gridDimensions.margins.meters.bottom, o = t.gridDimensions.width, l = o / r, c = t.gridDimensions.height, u = c / n;
              $((c - n + s + i).toFixed(4)), _(l), K({
                width: e,
                height: a
              }), (e => {
                le.LIST_PLATES;
                const t = D.domElement.offsetHeight,
                  a = u * t + x * t + g * t,
                  r = T(),
                  n = A[B.ROOT]?.current;
                n && (n.style.height = `${a}px`), ae({
                  canvasHeight: t,
                  rootHeight: a
                }), E(`${Math.round(a)}px`);
                const s = Math.round(d * l / o * (D.domElement.offsetWidth - 2 * r));
                Y(s)
              })()
            }
          }), [V.fov, L, J, b, P, R, f, k, l, W, x, O, j]);
          (0, r.useEffect)((() => {
            f && z(f), re()
          }), [f, L]);
          const ne = (0, r.useMemo)((() => k?.map((e => {
              if (0 === H) return null;
              const {
                index: t
              } = e, a = -1 * o / 2 + .251953125 * o, r = (y ? t % b * (o + h) : Math.floor(t / b) * (o + h)) + o / 2, n = (y ? Math.floor(t / b) * (l + v) * -1 : t % b * (l + v) * -1) + a;
              return (0, De.jsx)(et, {
                envMap: m,
                height: u,
                position: [r, n, 0],
                plate: e,
                plateIndex: e.index,
                width: d
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [H, k]),
            se = (0, r.useCallback)((function() {
              if (!X || arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) {
                const e = A[B.ROOT].current,
                  t = document.body;
                t.style.removeProperty("overflow"), e && (e.style.touchAction = "auto"), C() || requestAnimationFrame((() => {
                  t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, G)
                })), q(!0)
              }
            }), [R, G, X]),
            ie = (0, r.useCallback)((() => {
              if (X) {
                const e = A[B.ROOT].current,
                  t = document.body;
                if (e && (e.style.touchAction = "none", t.style.overflow = "hidden"), !C()) {
                  const e = window.scrollY;
                  requestAnimationFrame((() => {
                    t.style.position = "fixed", t.style.top = `-${e}px`, Z(e)
                  }))
                }
                q(!1)
              }
            }), [R, A, X]);
          (0, r.useEffect)((() => {
            P !== le.LIST_PLATES ? ie() : se()
          }), [P]), (0, r.useEffect)((() => () => {
            se(!0)
          }), []);
          const oe = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (S() === le.LIST_PLATES || e) {
              const e = A[B.ROOT]?.current;
              if (!e || !te) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = te, r = R && k.length <= 2 ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = U.y + F * n;
              M?.current?.position?.set(U.x, Number(s.toFixed(3)), U.z)
            }
          }), [M.current, U, A, F, k, te, s, R]);
          return (0, r.useEffect)((() => {
            const e = e => {
              oe(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [M.current, s, U, f, N, A, F, te]), (0, r.useEffect)((() => {
            if (!M.current || !W) return;
            const e = W.getObjectByName("Scene");
            M.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [M.current, W]), (0, r.useMemo)((() => (0, De.jsx)("group", {
            name: ce.LP_GRID,
            ref: M,
            position: f,
            scale: I,
            children: 0 !== H && ne
          })), [I, ne, H])
        },
        at = e => {
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
          return (0, De.jsxs)(De.Fragment, {
            children: [(0, De.jsx)("pointLight", {
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
            }), d && (0, De.jsx)("pointLightHelper", {
              light: c,
              sphereSize: 1
            })]
          })
        },
        rt = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, De.jsxs)("group", {
            name: "Lights",
            children: [(0, De.jsx)(at, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [X, q, J],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, De.jsx)(at, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [K, Q, ee],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, De.jsx)(at, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [ae, re, ne],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, n.extend)({
        OrbitControls: Ue.z
      });
      const nt = {
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
      let st = window.innerWidth;
      const it = e => {
        let {
          loadedAssets: t
        } = e;
        const {
          loggedIn: a
        } = (0, i.useRockstarUser)(), {
          state: s,
          setIsSceneLoaded: o,
          setThree: l,
          setGridState: d
        } = We(), {
          gridState: u,
          isSceneLoaded: m,
          plates: p,
          plateStyles: f,
          three: h,
          refs: b
        } = s, [y, v, x] = (0, n.useThree)((e => {
          let {
            camera: t,
            gl: a,
            scene: r
          } = e;
          return [t, a, r]
        })), E = (0, r.useRef)(), [_, S] = (0, r.useState)(!1), [P, I] = (0, r.useState)(null), k = () => {
          if (v.domElement.style.opacity = 1, v.domElement.style.position = "absolute", v.domElement.style.top = 0, v.domElement.style.left = 0, v.domElement.style.right = 0, v.domElement.style.bottom = 0, v.domElement.style.touchAction = "auto", !m) {
            const e = new c.Vector3,
              t = new c.Vector3;
            E.current.target.copy(t), l({
              scene: x,
              camera: y,
              renderer: v,
              controls: E,
              originalCameraFov: y.fov,
              originalCameraPosition: e,
              originalControlsTarget: t
            })
          }
          o(!0)
        };
        (0, r.useEffect)((() => {
          p.length && P && R(P.width)
        }), [P, p]), (0, r.useEffect)((() => (I({
          height: v.domElement.offsetHeight,
          width: v.domElement.offsetWidth
        }), () => {
          o(!1)
        })), []), (0, r.useEffect)((() => {
          t && p?.length && null !== a && S(!0)
        }), [t, p, a]), (0, r.useEffect)((() => {
          t && t?.environmentMap && f?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
        }), [t, f]);
        const R = (0, r.useCallback)((e => {
          const t = document.getElementById("list-plates-sidebar");
          if (!y || !t || !P) return;
          const r = T(),
            {
              plateWidth: n,
              plateHeight: s,
              columnGap: i,
              rowGap: o,
              depth: l
            } = nt,
            u = l * Math.tan((0, ze.Id)(17.5)),
            m = -1 * y.aspect * u,
            f = window.innerWidth < H.lg ? t.offsetHeight + r : r,
            g = r,
            h = v.domElement.offsetWidth,
            b = v.domElement.offsetHeight,
            x = (() => {
              const e = window.innerWidth;
              switch (!0) {
                case e >= H.xxl:
                  return w(11);
                case e >= H.xl:
                  return w(12);
                case e >= H.md:
                  return w(13);
                default:
                  return w(20)
              }
            })(),
            E = g / h,
            _ = m - m * E * 2,
            S = f / b,
            I = u - u * S * 2,
            k = x / b,
            R = new c.Vector3(_, I, -l),
            N = a ? (e => {
              const t = window.innerWidth;
              switch (!0) {
                case t >= H.xxl:
                  return 3;
                case t >= H.lg && t <= 1280:
                  return 1;
                case e >= 600:
                  return 2;
                default:
                  return 1
              }
            })(e) : 1,
            A = Math.ceil(p.length / N),
            O = n * N + i * (N - 1),
            C = s * Math.ceil(p.length / N) + o * (Math.ceil(p.length / N) - 1),
            j = Math.abs(R.z) * Math.tan((0, ze.Id)(y.fov / 2)) * 2,
            L = E * (j * (h / b)),
            M = S * j,
            V = k * j,
            W = Math.abs(2 * R.x),
            D = W / O * C;
          d({
            gridPosition: R,
            gridOptions: {
              ...nt,
              columns: N,
              rows: A,
              topMarginAsRatio: S,
              bottomMarginAsRatio: k,
              leftMarginAsRatio: E
            },
            gridDimensions: {
              margins: {
                meters: {
                  top: M,
                  left: L,
                  bottom: V
                },
                pixels: {
                  top: f,
                  left: g,
                  bottom: x
                }
              },
              height: D,
              width: W
            }
          })
        }), [p, b?.[B.SIDEBAR]?.current, y, P, a]);
        (0, r.useEffect)((() => {
          p.length && E.current && (E.current.enabled = !0)
        }), [E.current, p]), (0, r.useEffect)((() => {
          h && E.current && !h?.controlsInit && l({
            ...h,
            controls: E,
            controlsInit: !0
          })
        }), [E.current, h]), (0, n.useFrame)((() => {
          E?.current?.update()
        }));
        const N = (0, r.useCallback)(g().debounce((() => {
          const e = b[B.CANVAS_WRAP]?.current;
          if (!e) return;
          const t = b[B.CTA_WRAP]?.current,
            a = window.innerWidth;
          t && a !== st && (t.classList.remove(He.visible), st = a), I({
            width: e.offsetWidth,
            height: e.offsetHeight
          })
        }), 100), [y, b]);
        (0, r.useEffect)((() => (N(), window.addEventListener("resize", N, !0), () => window.removeEventListener("resize", N, !0))), [y, b]);
        const A = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, De.jsx)(Ye, {
            position: [0, -4.05, -11.76],
            envMap: t.environmentMap,
            envModel: t.environmentModel,
            onLoad: k
          }) : null), [t]),
          O = (0, r.useMemo)((() => (0, De.jsx)(rt, {
            baseIntensity: .6,
            mapSize: 1024
          })), []),
          C = (0, r.useMemo)((() => (0, De.jsx)(tt, {
            gridState: u,
            loadedAssets: t
          })), [u, t]),
          j = (0, r.useMemo)((() => (0, De.jsx)("orbitControls", {
            ref: E,
            screenSpacePanning: !0,
            args: [y, v.domElement],
            enableDamping: !0,
            enableZoom: !1,
            enablePan: !1,
            maxPolarAngle: Z.plateView.maxPolarAngle,
            minPolarAngle: Z.plateView.minPolarAngle,
            maxAzimuthAngle: Z.plateView.maxAzimuthAngle,
            minAzimuthAngle: Z.plateView.minAzimuthAngle,
            minDistance: -1,
            maxDistance: 100
          })), [y, E, v]);
        return (0, De.jsxs)(De.Fragment, {
          children: [O, A, _ && u ? C : "", j]
        })
      };
      var ot = a(3468),
        lt = a(1633),
        ct = a(621);
      const dt = e => {
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
          } = We(), {
            currentView: p
          } = m, f = (0, r.useRef)(null), g = (0, r.useState)(V), h = d?.get() || 0, b = (0, lt.useSpring)({
            y: t ? h : u,
            config: {
              easing: lt.easings.easeInOutQuart,
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
          const E = (0, r.useCallback)((0, ct.useDrag)((e => {
              if (p !== le.CONFIRM_ORDER) {
                if (!w.current)
                  if (v.current = Math.max(a, Math.min(n, b.y.get() + e.delta[1])), x.current = e.movement[1], e.dragging) b.y.set(v.current);
                  else {
                    const e = {
                      y: b.y.get()
                    };
                    if (v.current < a / 2) {
                      const t = y().to(e, {
                        y: a,
                        duration: G.sidebar.mobile.drawerSnap.duration,
                        ease: G.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = W
                    } else if (v.current > n / 2) {
                      const t = y().to(e, {
                        y: n,
                        duration: G.sidebar.mobile.drawerSnap.duration,
                        ease: G.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = D
                    } else {
                      const t = y().to(e, {
                        y: 0,
                        ease: G.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          w.current ? t.kill() : b.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = V
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
            })), [p, a, n]),
            _ = () => {
              if (Math.abs(x.current) < 3) {
                w.current = !0, c({
                  drawerStateRef: g
                });
                const e = {
                    y: b.y.get()
                  },
                  t = {};
                g.current === V ? (t.y = a, f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = W) : (g.current === W || g.current === D) && (t.y = 0, f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = V), y().to(e, {
                  y: t.y,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    b.y.set(e.y)
                  },
                  onComplete: () => {
                    w.current = !1, v.current = b.y.get()
                  }
                })
              }
            };
          return (0, r.useMemo)((() => (0, De.jsxs)(lt.animated.div, {
            ...E(),
            ref: f,
            style: b ? {
              y: b.y
            } : void 0,
            className: "f8e313637e581e34230c",
            children: [(0, De.jsx)("hr", {
              className: "a91faa3cca1b0eb5ec05",
              onClick: _,
              "aria-hidden": "true"
            }), l]
          })), [b.y.get(), _, l])
        },
        ut = e => {
          let {
            onClick: t
          } = e;
          return (0, De.jsx)("button", {
            type: "button",
            onClick: t,
            className: "c5cb6a9ee116fb9038cc",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        mt = () => (0, De.jsx)("div", {
          className: "cfff519ec96d725939ed",
          "aria-label": "Los Santos Customs"
        }),
        pt = e => {
          let {
            button: {
              buttonText: t,
              buttonIcon: a,
              isDisabled: r,
              onClick: n
            },
            closeModal: s
          } = e;
          return (0, De.jsxs)("button", {
            className: "cf5bbe6406012d6190c3",
            disabled: r,
            onClick: () => (n && n(), void s()),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, De.jsx)("p", {
              className: "e89f1318679b1cb5b981",
              children: t
            }), a && (0, De.jsx)("div", {
              className: "bf51cc3522627ca3b7f9"
            })]
          })
        },
        ft = e => {
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
            } = We();
          return (0, r.useEffect)((() => {
            o && c.current && (c.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [o]), (0, De.jsxs)("dialog", {
            ref: c,
            className: "c6fb99519e95f8eba227",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), l())
            })(e),
            children: [t && (0, De.jsx)("i", {
              className: "c53fac5b3efe1b1fa592"
            }), (0, De.jsxs)("div", {
              className: "c1c74e2339197a57da41",
              children: [(0, De.jsx)("h3", {
                children: a
              }), n && (0, De.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, De.jsx)("div", {
              className: "d9f6892c7824cf07e386",
              children: s.splice(0, 2).map((e => (0, De.jsx)(pt, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (c.current?.close(), void l())
              }, e.buttonText)))
            })]
          })
        },
        gt = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, De.jsxs)("div", {
            className: "efe5eaeb5559423002bc",
            children: [(0, De.jsx)("p", {
              className: "c827db6a5956e0dea5a1",
              children: t
            }), (0, De.jsx)("p", {
              className: "ee9baad67e97f93898e3",
              children: a
            })]
          })
        },
        ht = {
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
        bt = "visible",
        yt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, s.useRockstarTokenPing)(),
            {
              loggedIn: n
            } = (0, i.useRockstarUser)(),
            {
              setCurrentView: l,
              setIsExpanded: d,
              setRefs: u,
              setError: m,
              state: p,
              setDeletedPlateIndex: f
            } = We(),
            {
              currentPlateIndex: h,
              currentPlate: b,
              currentView: v,
              gridScale: x,
              gridState: w,
              isExpanded: _,
              isMobile: S,
              plates: T,
              refs: P,
              three: I
            } = p,
            [R, N] = (0, r.useState)(v === le.VIEW_PLATE),
            [A, C] = (0, r.useState)([]),
            [j, L] = (0, r.useState)(!1),
            [M, U] = (0, r.useState)(!1),
            z = (0, r.useRef)(null),
            H = (0, r.useRef)(null),
            Y = (0, r.useRef)(null),
            F = (0, r.useRef)(null),
            $ = (0, r.useRef)(35),
            Z = (0, r.useRef)(null),
            [X, q] = (0, r.useState)(.4 * window.innerHeight),
            [J, K] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [Q, ee] = (0, r.useState)(0),
            te = (0, r.useRef)(X),
            [ae, re] = (0, r.useState)(null),
            ne = (0, r.useRef)(null),
            se = (0, r.useRef)(null),
            {
              track: ie
            } = (0, i.useGtmTrack)(),
            oe = {
              view_name: "license plate creator - view plate"
            },
            de = v === le.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            v !== le.VIEW_PLATE && M && U(!1)
          }), [v, M]);
          const ue = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(h) || (ue.current = h)
          }), [h]);
          const me = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            v && (me.current = v)
          }), [v]);
          const pe = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            x && (pe.current = x)
          }), [x]);
          const fe = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (me.current !== le.VIEW_PLATE) return;
            const {
              renderer: r
            } = I;
            O({
              plateIndex: ue.current,
              three: I,
              timeline: e,
              gridScale: t
            }, {
              onComplete: e => {
                e?.three?.camera && (z.current = new c.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), F?.current?.children && y().to(F.current.children, {
                  pointerEvents: "all"
                }), S && (r.domElement.style.touchAction = "none")
              },
              tweenPosition: 0,
              isResize: a
            })
          }), [I, h, v, w, T]);
          (0, r.useEffect)((() => {
            if (!I?.controls || !R) return;
            const {
              controls: e
            } = I, t = y().timeline({
              duration: S ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              ease: S ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            fe(t, x, !0)
          }), [x, I]);
          const ge = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!I?.camera || !z.current) return;
            const {
              camera: t,
              controls: a,
              renderer: r
            } = I;
            if (y().to(t.position, {
                x: Number(z.current.x),
                y: Number(z.current.y),
                z: Number(z.current.z),
                duration: G.toggleView.reset.duration,
                ease: G.toggleView.reset.ease,
                onStart: () => {
                  a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1)
                },
                onComplete: () => {
                  l(le.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.enableZoom = !1), te.current = 0, e?.onComplete && e.onComplete()
                }
              }), S) {
              const e = r.domElement;
              y().to(e.style, {
                opacity: 1,
                duration: G.toggleView.reset.duration,
                ease: G.toggleView.reset.ease
              })
            }
            ie({
              ...oe,
              event: "modal_close",
              event_category: "modal",
              event_action: "close",
              event_label: "view plate",
              view_name: "license plate creator - view plate"
            })
          }), [S, I, z]);
          (0, r.useEffect)((() => {
            u(B.VIEW_PLATE, Z)
          }), [Z.current]), (0, r.useEffect)((() => {
            C(T?.[h]?.vehicles ?? [])
          }), [h, T]), (0, r.useEffect)((() => {
            N(v === le.VIEW_PLATE)
          }), [v]), (0, r.useEffect)((() => {
            I?.scene && F?.current && (e => {
              const {
                scene: t,
                controls: a
              } = I, r = [];
              t.traverse((e => {
                e.name === ce.LP && r.push(e), e.userData.index === Number(h) && (H.current = e)
              }));
              const n = y().timeline({
                duration: S ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                ease: S ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              e === bt ? (fe(n, pe.current, !1), se?.current && n.to([F.current, se.current, S ? void 0 : Y.current], {
                autoAlpha: 1,
                duration: G.sidebar.in.duration,
                ease: G.sidebar.in.ease,
                delay: G.sidebar.in.delay,
                onComplete: () => {
                  se?.current && (se.current.style.pointerEvents = "all"), Y?.current && (Y.current.style.pointerEvents = "all")
                }
              }, 0), I?.camera && S && !$.current && ($.current = I.camera.fov)) : (Y.current && y().to(Y.current, {
                pointerEvents: "none"
              }), y().to(F.current.children, {
                pointerEvents: "none"
              }), y().to(F.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay
              }), !S && Y.current ? (y().to(Y.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay
              }), y().to(se.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay,
                onComplete: () => {
                  se.current.style.pointerEvents = "none"
                }
              })) : y().to(se.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay,
                onComplete: () => {
                  se.current.style.pointerEvents = "none"
                }
              }), a?.current && (a.current.minDistance = 0))
            })(R ? bt : "hidden")
          }), [se.current, I, R]), (0, r.useEffect)((() => {
            if (S && Z.current) {
              const e = Z.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              ee(a - 48 - t), q(a), K(-1 * (.6 * e - 80))
            }
          }), [S, Z.current]);
          const he = (0, r.useRef)(null),
            be = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            he.current = R
          }), [R]), (0, r.useEffect)((() => {
            be.current = I
          }), [I]);
          const ye = (0, r.useCallback)(g().debounce((() => {
            if (!0 !== he.current) return;
            const {
              renderer: e
            } = be.current;
            me.current === le.VIEW_PLATE && (E() ? e.domElement.style.transform = `translateY(${X/-2}px)` : e.domElement.style.transform = "translateY(0px)", Y.current.style.opacity = "1", Y.current.style.visibility = "visible", Y.current.style.pointerEvents = "all"), me.current === le.CONFIRM_ORDER && (E() ? e.domElement.style.transform = `translateY(${J/1.5}px)` : e.domElement.style.transform = "translateY(0px)")
          }), 100), [S, R, v, I, J]);
          (0, r.useEffect)((() => (window.addEventListener("resize", ye, !0), () => window.removeEventListener("resize", ye, !0))), [S, R, v, I, J]);
          const ve = (0, De.jsxs)(De.Fragment, {
              children: [!S && (0, De.jsx)("hr", {
                className: ht.drawerHandle,
                onClick: () => {
                  d(!_)
                },
                "aria-hidden": "true"
              }), (0, De.jsx)("div", {
                className: ht.plateInfo,
                children: (0, De.jsxs)("section", {
                  className: ht.vehiclesApplied,
                  children: [(0, De.jsx)("label", {
                    className: A.length ? "" : `${ht.noVehicles}`,
                    children: A.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, De.jsx)("div", {
                    className: ht.vehicles,
                    children: A.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, De.jsx)(gt, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            xe = (0, r.useCallback)((e => {
              if (!I) return;
              const {
                drawerStateRef: t
              } = e, {
                renderer: a,
                camera: r
              } = I, n = a.domElement, s = {
                buttonWrapOpacity: ne.current.style.opacity,
                canvasWrapOpacity: n.style.opacity,
                canvasHeight: n.offsetHeight,
                canvasTranslateY: Number(k(n).y),
                fov: r.fov
              }, i = {};
              t.current === V ? (i.buttonWrapOpacity = 0, i.canvasWrapOpacity = 0, i.canvasHeight = -J, i.canvasTranslateY = X / -2, i.fov = $.current, n.style.pointerEvents = "none", ne.current.style.pointerEvents = "none") : (t.current === W || t.current === D) && (i.buttonWrapOpacity = 1, i.canvasWrapOpacity = 1, i.canvasHeight = -J, i.canvasTranslateY = X / -2, i.fov = $.current, n.style.pointerEvents = "all", ne.current.style.pointerEvents = "all"), y().to(s, {
                buttonWrapOpacity: i.buttonWrapOpacity,
                canvasWrapOpacity: i.canvasWrapOpacity,
                canvasHeight: i.canvasHeight,
                canvasTranslateY: i.canvasTranslateY,
                fov: i.fov,
                duration: G.sidebar.mobile.drawerSnap.duration,
                ease: G.sidebar.mobile.drawerSnap.ease,
                onUpdate: () => {
                  n.style.opacity = s.canvasWrapOpacity, ne.current.style.opacity = s.buttonWrapOpacity, r.fov = s.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${s.canvasTranslateY}px)`
                }
              })
            }), [I, X, J]),
            we = (0, r.useCallback)((e => {
              if (!I) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: i,
                renderer: o
              } = I, l = o.domElement, c = -J + X - 48;
              if (t.dragging) {
                const e = (0, ze.ii)(0, n, r.get()),
                  o = (0, ze.t7)(0, 1, 1 - e);
                if (l.style.opacity = o, ne.current.style.opacity = o, ne.current.style.pointerEvents = r.get() >= 0 ? "all" : "none", ne.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                  const e = (0, ze.ii)(0, s, r.get()),
                    a = (0, ze.t7)($.current, 40, e);
                  i.fov = a;
                  const n = Number(k(l).y) + t.delta[1] / 2;
                  l.style.transform = `translateY(${n}px)`, i.updateProjectionMatrix()
                }
              } else {
                const e = {
                  buttonWrapOpacity: ne.current.style.opacity,
                  canvasWrapOpacity: l.style.opacity,
                  fov: i.fov,
                  canvasHeight: l.offsetHeight,
                  canvasTranslateY: Number(k(l).y)
                };
                a.current < J / 2 ? (l.style.pointerEvents = "none", ne.current.style.pointerEvents = "none", y().to(e, {
                  buttonWrapOpacity: 0,
                  canvasWrapOpacity: 0,
                  canvasHeight: c,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ne.current.style.opacity = e.buttonWrapOpacity, ne.current.style.opacity = e.buttonWrapOpacity
                  }
                })) : a.current > s / 2 ? (l.style.pointerEvents = "all", ne.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: 40,
                  canvasHeight: c,
                  canvasTranslateY: -48,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ne.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                })) : (l.style.pointerEvents = "all", ne.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: $.current,
                  canvasHeight: -J,
                  canvasTranslateY: X / -2,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ne.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                }))
              }
            }), [I, ne.current, J]),
            Ee = (0, r.useCallback)((e => {
              const t = P[B.UI]?.current;
              if (!t || !I?.scene) return;
              const {
                scene: a,
                camera: r,
                renderer: n
              } = I, s = n.domElement, {
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
                mobileSidebarHeight: X,
                fov: $.current,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, ne.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                },
                onComplete: () => {
                  s.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [P, I, X]),
            _e = (0, r.useCallback)((e => {
              if (!I?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === ae && re(r);
              const {
                renderer: n
              } = I;
              t.current.style.pointerEvents = "all";
              const s = {
                mobileSidebarHeight: X,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              y().to(s, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: X / 2,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), ne.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, se.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [ae, I, X]),
            Se = (0, r.useMemo)((() => S ? (0, De.jsx)(dt, {
              isVisible: R,
              top: J,
              bottom: Q,
              onTap: xe,
              onDrag: we,
              onHide: Ee,
              onShow: _e,
              mobileSidebarHeight: X,
              children: ve
            }) : (0, De.jsx)("div", {
              ref: Y,
              className: ht.sidebar,
              children: ve
            })), [ne.current, se.current, _, X, S, R, P, Y.current, A, J, Q]);
          return (0, De.jsxs)("div", {
            className: ht.viewPlate,
            ref: Z,
            children: [(0, De.jsx)(ft, {
              title: t("lp.modal.delete.title"),
              secondaryText: t("lp.modal.delete.description").replace("{plateText}", b?.plateText ?? ""),
              buttons: [{
                buttonText: t("lp.modal.delete.confirm"),
                onClick: () => {
                  (async () => {
                    try {
                      if (!b || !n) return;
                      const {
                        plateText: e
                      } = b;
                      U(!0);
                      const {
                        error: t,
                        status: r
                      } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        pingBearer: a,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      if (t) throw Object.assign(new Error(""), t);
                      r && f(h), ge()
                    } catch (e) {
                      m(["api", e])
                    }
                  })(), ie({
                    ...oe,
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
                  ie({
                    ...oe,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${t("lp.modal.delete.cancel").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${t("lp.modal.delete.title").toLowerCase()}`
                  })
                }
              }],
              showModal: j,
              onClose: () => L(!1)
            }), Se, (0, De.jsxs)("div", {
              ref: F,
              className: ht.ui,
              children: [(0, De.jsx)(ut, {
                onClick: ge
              }), (0, De.jsx)(lt.animated.div, {
                ref: ne,
                className: ht.uiBottom,
                style: ae ? {
                  y: ae
                } : void 0,
                children: (0, De.jsx)(mt, {})
              })]
            }), (0, De.jsxs)("div", {
              className: ht.deleteBtnContainer,
              ref: se,
              children: [(0, De.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: ht.deleteBtn,
                disabled: b?.noDelete || M,
                onClick: () => {
                  b?.noDelete || M || (ie({
                    ...oe,
                    event: "license_plate_delete_click",
                    event_category: "license_plate",
                    event_action: "delete",
                    event_label: "click",
                    text: t("lp.modal.delete.title").toLowerCase()
                  }), L(!0))
                },
                tabIndex: de,
                type: "button"
              }), b?.noDelete && (0, De.jsx)("label", {
                className: ht.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        vt = (0, o.withTranslations)((e => {
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
          }), (0, De.jsx)("p", {
            className: "fbe02591dfe1e747a935 ae971d2586817570fa25 " + (!1 === r ? "e98c19a935da3321df72" : ""),
            children: n(o)
          })
        })),
        xt = {
          lpStyleOption: "fdb659ff7c0f2e33fda0",
          selected: "c5c9b2d5655a4e556a50",
          lpStyleOptionImage: "add00686bede52167de6"
        },
        wt = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: n,
            setSelectedStyle: s
          } = We(), {
            plates: i,
            selectedStyle: o
          } = n, l = (0, r.useCallback)((() => {
            z.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [i, t]);
          return (0, De.jsx)("button", {
            className: [xt.lpStyleOption, o === t.id ? xt.selected : ""].join(" "),
            onClick: () => l(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, De.jsx)("img", {
              className: xt.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        Et = (0, o.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: n
          } = e;
          const {
            loggedIn: l
          } = (0, i.useRockstarUser)(), c = (0, s.useRockstarTokenPing)(), {
            setCurrentView: d,
            setPlateNumber: u,
            setPlateNumberStatus: m,
            setError: p,
            setRefs: f,
            state: g
          } = We(), {
            currentView: h,
            plateStyles: b,
            plateNumber: y,
            plateNumberStatus: v,
            isMobile: x
          } = g, [w, E] = (0, r.useState)(0), {
            isValid: _
          } = v, S = (0, r.useMemo)((() => y), [y]), {
            track: T
          } = (0, i.useGtmTrack)(), P = {
            view_name: "license plate creator - " + (l ? "create plate form" : "try lp editor")
          }, I = (0, r.useRef)(null), k = (0, r.useRef)(null), R = (0, r.useRef)(null), N = (0, r.useRef)(null), A = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            f(B.NEW_PLATE_FORM, R)
          }), [R.current]), (0, r.useEffect)((() => {
            h === le.NEW_PLATE && document.activeElement === A.current && A.current?.setSelectionRange(w, w)
          }), [w]);
          const O = h === le.NEW_PLATE ? 0 : -1,
            C = (0, r.useCallback)((() => {
              (async () => {
                if (l && y) try {
                  t(!0);
                  const {
                    error: e,
                    result: a
                  } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/validate", {
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
                    isValid: i
                  } = a;
                  m({
                    isValid: i,
                    isMalformed: r,
                    isProfane: n,
                    isReserved: s,
                    statusPlateNumberBasis: y
                  }), i && (d(le.CONFIRM_ORDER), T({
                    ...P,
                    event: "virtualPageview",
                    display_type: x ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  p(["api", e])
                }
              })()
            }), [l, y]);
          (0, r.useEffect)((() => {
            a && (a.current = C)
          }), [C, a]);
          const j = (0, r.useMemo)((() => b?.map((e => (0, De.jsx)(wt, {
            style: e,
            tabIndex: O
          }, e.id)))), [b, h]);
          return (0, De.jsxs)("form", {
            ref: R,
            className: "c03fbea909908002e429",
            onSubmit: e => {
              e.preventDefault(), A.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, De.jsxs)("section", {
              children: [(0, De.jsx)("label", {
                ref: I,
                children: n("lp.create.title")
              }), (0, De.jsxs)("div", {
                ref: k,
                className: "f16c8dbd6025471f52d4",
                children: [(0, De.jsx)("i", {
                  className: "" + (!1 === _ ? "a85e9791453fdcfdfaae" : "")
                }), (0, De.jsx)("input", {
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: e => {
                    const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
                    u(t), E(e.target.selectionStart || 0), v.isValid || m({
                      isValid: !0,
                      isMalformed: !1,
                      isProfane: !1,
                      isReserved: !1,
                      statusPlateNumberBasis: y
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
                }), (0, De.jsx)(vt, {
                  plateNumberStatus: v
                })]
              })]
            }), (0, De.jsx)("hr", {
              className: "a88bd201bfcf6276af22"
            }), (0, De.jsxs)("section", {
              children: [(0, De.jsx)("label", {
                children: n("lp.create.bgselector")
              }), (0, De.jsx)("div", {
                ref: N,
                className: "f7ff0013c2f3d7d85637",
                children: j
              })]
            })]
          })
        })),
        _t = e => {
          let {
            buttons: t,
            refName: a = B.SIDEBAR_BUTTONS,
            isLoading: n,
            tabIndex: s
          } = e;
          const i = (0, r.useRef)(null),
            {
              setRefs: o
            } = We();
          return (0, r.useEffect)((() => {
            o(a, i)
          }), [i.current]), (0, De.jsx)("div", {
            className: "bc9136e36a81df297fc4",
            ref: i,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, De.jsx)("button", {
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
        St = "ce05d9898b38a31c3fe9",
        Tt = "db3c4b65429b61ddff96",
        Pt = (0, o.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            t: a
          } = e;
          const [n, s] = (0, r.useState)(!1), [o, l] = (0, r.useState)(!1), {
            state: c,
            setRefs: d
          } = We(), {
            currentView: u,
            isMobile: m
          } = c, {
            track: p
          } = (0, i.useGtmTrack)(), f = {
            view_name: "license plate creator - create plate form"
          }, g = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            l(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            d(B.TOGGLE_VIEW_BUTTON, g)
          }), [g.current]), (0, r.useEffect)((() => {
            u === le.NEW_PLATE && (n ? (p({
              ...f,
              event: "virtualPageview",
              display_type: m ? "mobile" : "desktop",
              view_name: "license plate creator - car view"
            }), p({
              ...f,
              event: "license_plate_preview_car",
              event_category: "license_plate",
              event_action: "preview_car",
              text: a("lp.create.carview").toLowerCase()
            })) : p({
              ...f,
              event: "virtualPageview",
              display_type: m ? "mobile" : "desktop"
            }))
          }), [n, u]), (0, De.jsxs)("button", {
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
            children: [(0, De.jsx)("div", {
              className: St,
              children: (0, De.jsx)("p", {
                className: o ? Tt : "",
                children: a("lp.create.plateview")
              })
            }), (0, De.jsx)("div", {
              className: St,
              children: (0, De.jsx)("p", {
                className: o ? Tt : "",
                children: a("lp.create.carview")
              })
            }), (0, De.jsx)("span", {
              className: "ac1419f5f7d4f893d8e0"
            })]
          })
        })),
        It = {
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
        kt = (0, o.withTranslations)((e => {
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
          } = We(), {
            currentView: p,
            isExpanded: f,
            refs: g,
            three: h,
            isMobile: v
          } = m, x = (0, r.useRef)(null), w = (0, r.useRef)(null), E = (0, r.useRef)(null), _ = (0, r.useRef)(null), T = (0, r.useRef)(null), {
            track: P
          } = (0, i.useGtmTrack)(), I = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(B.ORDER_BG, T)
          }), [T.current]);
          const k = g[B.CONFIRM_CONTENT]?.current,
            R = g[B.CONFIRM_SIDEBAR]?.current,
            N = g[B.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            A = g[B.CONFIRM_SIDEBAR_BUTTONS]?.current,
            O = g[B.NEW_PLATE_SIDEBAR]?.current,
            C = g[B.CANVAS_WRAP]?.current,
            j = g[B.SIDEBAR_BUTTONS]?.current,
            L = T.current,
            M = x.current,
            V = E.current,
            W = _.current,
            D = w.current,
            U = g[B.UI]?.current,
            z = g[B.NEW_PLATE_UI]?.current,
            H = g[B.SIDEBAR]?.current,
            Y = (0, r.useCallback)((() => {
              c(le.LIST_PLATES), P({
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
            if (!e || !L || !k) return;
            const c = S();
            if (f && p === le.LIST_PLATES) {
              const t = y().timeline({
                defaults: {
                  ease: G.transaction.confirmOrder.ease,
                  duration: G.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (y().to([e.domElement, H], {
                  autoAlpha: 1,
                  ease: G.transaction.fade.landingPage.ease,
                  duration: G.transaction.fade.landingPage.duration
                }), v) {
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
                    L.style.transform = `translateY(${t}px)`, L.style.opacity = e.opacity
                  }
                }, 0)
              } else t.to(L, {
                autoAlpha: 0
              }, 0).to([M, V, W], {
                autoAlpha: 0
              }), t.to(k, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), t.to(L, {
                x: "-100vw"
              }, 0), y().set([O, z], {
                x: 0
              }), y().set(R, {
                left: "revert"
              })
            } else if (t) {
              const t = y().timeline({
                defaults: {
                  ease: G.transaction.confirmOrder.ease,
                  duration: G.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), y().set(C, {
                    x: 0
                  }), a.position.set(r.x, r.y, r.z), i?.current && (i.current.minDistance = 0, i.current.target.set(l.x, l.y, l.z)), U && (a.fov = n, a.updateProjectionMatrix(), $.saturation.value = 0)
                },
                onStart: () => {
                  y().set(D, {
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
                }, "<1").to(D, {
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
              } else t.to(k, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(R, {
                left: 100 - c + "vw"
              }, 0).to(L, {
                x: 0
              }, 0).to(L, {
                autoAlpha: 1
              }, 0).to(R, {
                autoAlpha: 0,
                ease: G.transaction.fade.out.ease,
                duration: G.transaction.fade.out.duration
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
          }), [t, T.current, h, p, v ? o : void 0]), (0, De.jsx)("div", {
            className: [It.orderConfirmed, f ? It.visible : ""].join(" "),
            children: (0, De.jsx)("div", {
              ref: T,
              className: It.background,
              children: (0, De.jsxs)("div", {
                className: It.content,
                children: [(0, De.jsx)("h1", {
                  ref: x,
                  className: It.contentHeading,
                  children: n("lp.success.title")
                }), (0, De.jsxs)("div", {
                  ref: w,
                  className: It.secondaryWrap,
                  children: [(0, De.jsx)("p", {
                    ref: E,
                    className: It.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: n("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, De.jsx)("button", {
                    ref: _,
                    type: "button",
                    className: It.backToPlatesButton,
                    onClick: () => {
                      Y()
                    },
                    "aria-label": n("lp.success.cta"),
                    tabIndex: l,
                    children: (0, De.jsx)("span", {
                      className: It.ctaText,
                      children: n("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        }));
      var Rt = a(2973),
        Nt = a.n(Rt);
      const At = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        Ot = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Ct = e => {
          let t, {
            type: a = U.SPINNING
          } = e;
          switch (a) {
            case U.THREE_DOTS:
              t = Ot;
              break;
            case U.SPINNING:
            default:
              t = At
          }
          return (0, De.jsx)(Nt(), {
            options: {
              loop: !0,
              autoplay: !0,
              animationData: t,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            },
            height: 50,
            width: 50
          })
        },
        jt = (0, o.withTranslations)((e => {
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
            setPendingOrder: m,
            setRefs: p,
            setSelectedVehicle: f
          } = We(), {
            currentView: g,
            selectedVehicle: h,
            plates: b,
            three: x,
            isMobile: w,
            refs: E,
            vehicles: _,
            selectedStyle: T,
            isOrderConfirmed: P,
            isExpanded: I
          } = l, {
            selectedCharacterTuple: k
          } = (0, i.useRockstarUserState)(), {
            loggedIn: R
          } = (0, i.useRockstarUser)(), N = (0, s.useRockstarTokenPing)(), A = g === le.CONFIRM_ORDER, [O, C] = (0, r.useState)(I), [j, L] = (0, r.useState)(!1), M = (0, r.useRef)(null), V = (0, r.useRef)(null), {
            track: W
          } = (0, i.useGtmTrack)(), D = {
            view_name: "license plate creator - confirm order"
          }, U = g === le.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p(B.CONFIRM_SIDEBAR, M)
          }), [M.current]), (0, r.useEffect)((() => {
            p(B.CONFIRM_CONTENT, V)
          }), [V.current]);
          const z = E[B.ORDER_BG]?.current,
            H = E[B.CONFIRM_CONTENT]?.current,
            Y = E[B.CONFIRM_SIDEBAR]?.current,
            F = E[B.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            $ = E[B.CONFIRM_SIDEBAR_BUTTONS]?.current,
            Z = E[B.NEW_PLATE_SIDEBAR]?.current,
            X = E[B.CANVAS_WRAP]?.current,
            q = E[B.SIDEBAR_BUTTONS]?.current,
            J = E[B.NEW_PLATE_UI]?.current;

          function K() {
            if (W({
                ...D,
                event: "virtualPageview",
                display_type: w ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(x?.camera && H && Y && X && z)) return;
            const e = {
                ease: w ? G.sidebar.mobile.drawer.ease : G.transaction.confirmOrder.ease,
                duration: w ? G.sidebar.mobile.drawer.duration : G.transaction.confirmOrder.duration
              },
              t = y().timeline({
                defaults: {
                  ...e
                },
                onComplete: () => {
                  C(!1)
                }
              });
            y().set(q, {
              pointerEvents: "all"
            }), w ? t.to(q, {
              autoAlpha: 1
            }, "<") : (t.to(Y, {
              autoAlpha: 0
            }, 0), g === le.NEW_PLATE && t.to(Z, {
              autoAlpha: 1
            }, "<"), t.to([Z, X, J], {
              x: 0
            }, "<"), t.to(H, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            g === le.LIST_PLATES && O && K()
          }), [g, O]);
          const Q = (0, r.useCallback)((() => {
            (async () => {
              try {
                const e = v(T);
                if (!(R && h && e?.name && k)) return;
                const [t, a] = k, {
                  index: r
                } = h, n = {
                  vehicleIndex: r,
                  plateText: b?.[0]?.plateText,
                  plateStyle: e.name
                };
                L(!0);
                const {
                  error: s
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: N,
                  fetchOptions: {
                    body: JSON.stringify(n),
                    method: "POST"
                  },
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (L(!1), s) throw Object.assign(new Error(""), s);
                u(!0);
                const {
                  error: i,
                  result: l
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: N,
                  query: {
                    platform: t
                  }
                });
                if (i) throw Object.assign(new Error(""), i);
                l[`character${a}Pending`] && m(l)
              } catch (e) {
                c(["api", e])
              }
            })()
          }), [R, String(k), b?.[0]?.plateText, h, j, T]);
          (0, r.useEffect)((() => {
            if (g !== le.CONFIRM_ORDER || P) {
              if (w && !P) {
                y().set(q, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                y().to(e, {
                  lerp: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    $ && ($.style.opacity = "" + (1 - e.lerp), $.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), y().to(Y, {
                  autoAlpha: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }), F && (F.style.pointerEvents = "none", y().to(F.style, {
                  opacity: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(x?.camera && H && Y && X && z)) return;
              let e = S();
              w || 100 !== e || (e = 0);
              const t = y().timeline({
                  defaults: {
                    ease: G.transaction.confirmOrder.ease,
                    duration: G.transaction.confirmOrder.duration
                  },
                  onComplete: () => {
                    C(!0)
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
                }), w && (a.ease = G.sidebar.mobile.drawer.ease, a.duration = G.sidebar.mobile.drawer.duration, a.delay = G.sidebar.mobile.drawer.duration / 2, r.ease = G.sidebar.mobile.drawer.ease, r.duration = G.sidebar.mobile.drawer.duration, t.to(Y, a, 0)), w) {
                if ($) {
                  $.style.pointerEvents = "all", y().set($.style, {
                    visibility: "visible"
                  });
                  const e = {
                    lerp: 0
                  };
                  y().to(e, {
                    lerp: 1,
                    duration: G.sidebar.mobile.drawer.duration,
                    ease: G.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      $.style.opacity = e.lerp, $.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                F && (F.style.pointerEvents = "all", y().set(F.style, {
                  visibility: "visible"
                }), y().to(F.style, {
                  opacity: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                })), t.to(q, {
                  autoAlpha: 0
                }, "<")
              } else Z && X && t.to([Z, X, J], {
                x: -1 * e + "vw"
              }, "<"), t.to(H, {
                x: 100 - e + "vw"
              }, "<"), t.to(Y, {
                autoAlpha: 1
              }, "<"), t.to(Z, {
                autoAlpha: 0
              }, "<"), t.set(z, {
                x: `${-100+e}vw`
              }, "<")
            }
            O && !A && P && u(!1)
          }), [x, g, w, $, P, F, S()]), (0, r.useEffect)((() => {
            g !== le.CONFIRM_ORDER && f(null)
          }), [_]);
          const ee = (0, r.useCallback)((e => {
              if (!_?.length) return;
              const t = _.find((t => {
                let {
                  id: a
                } = t;
                return a === Number(e.target.value)
              })) ?? null;
              f(t), W({
                ...D,
                event: "license_plate_select_vehicle",
                event_category: "license_plate",
                event_action: "select_vehicle",
                position: e.target.selectedIndex
              })
            }), [_]),
            te = (0, De.jsx)(_t, {
              refName: B.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: j,
                onClick: () => {
                  d(le.NEW_PLATE), K(), W({
                    ...D,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: t("lp.confirm.cancel").toLowerCase()
                  })
                }
              }, {
                buttonText: j ? (0, De.jsx)(Ct, {}) : t("lp.confirm.next"),
                isDisabled: !R || !h || j,
                onClick: () => {
                  Q(), W({
                    ...D,
                    event: "license_plate_create_confirm",
                    event_category: "license_plate",
                    event_action: "create",
                    event_label: "confirm",
                    text: t("lp.confirm.next").toLowerCase()
                  })
                }
              }],
              isLoading: j,
              tabIndex: U
            });
          let ae;
          return w && (ae = F ? (0, ot.createPortal)(te, F) : null), (0, De.jsx)("div", {
            className: "be866f32eab934537631",
            "aria-hidden": g !== le.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, De.jsxs)("div", {
              className: "a09e457783ba70411b6a",
              ref: V,
              children: [(0, De.jsx)("span", {}), (0, De.jsxs)("div", {
                className: "bdb2b5b5d19f7f44f6d7",
                ref: M,
                children: [(0, De.jsxs)("form", {
                  className: "e6e66ce12aa2d8d190ef",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, De.jsxs)("div", {
                    className: "e5564bc6d848a683537c",
                    children: [(0, De.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, De.jsxs)("section", {
                      children: [(0, De.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, De.jsx)("div", {
                        className: "e7c896dad22669956489",
                        children: (0, De.jsxs)("select", {
                          value: h?.id ?? "null",
                          onChange: ee,
                          required: !0,
                          tabIndex: U,
                          "aria-label": t("lp.confirm.selector"),
                          children: [(0, De.jsx)("option", {
                            value: "null",
                            disabled: !0,
                            children: "--"
                          }), _?.map(((e, t) => {
                            let {
                              id: a,
                              manufacturer: r,
                              name: n
                            } = e;
                            return (0, De.jsx)("option", {
                              value: a,
                              children: `${r} ${n}`
                            }, t)
                          }))]
                        })
                      }), (0, De.jsx)("p", {
                        className: "d566190b33aa234ddd80",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, De.jsx)("p", {
                    className: "d6bae7e0151e183d3293",
                    children: t("lp.confirm.info")
                  })]
                }), w ? ae : te]
              }), (0, De.jsx)(kt, {
                drawerY: n,
                top: a,
                isVisible: P,
                vehicleModel: `${h?.manufacturer} ${h?.name}`,
                tabIndex: P ? U : -1
              })]
            })
          })
        })),
        Lt = "visible",
        Mt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            state: a,
            setCurrentView: n,
            setIsExpanded: s,
            setRefs: o
          } = We(), {
            loggedIn: l
          } = (0, i.useRockstarUser)(), {
            currentView: d,
            gridScale: u,
            loginUrl: m,
            isMobile: p,
            isExpanded: f,
            plateNumber: g,
            plateNumberStatus: h,
            refs: b,
            three: v
          } = a, [x, w] = (0, r.useState)(0), [S, T] = (0, r.useState)(!1), [I, R] = (0, r.useState)(!1), [N, A] = (0, r.useState)(.4 * window.innerHeight), [C, j] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), L = (0, r.useRef)(N), [M, U] = (0, r.useState)(null), z = (0, r.useRef)(null), H = (0, r.useRef)(null), Y = (0, r.useRef)(null), F = (0, r.useRef)(!1), [X, q] = (0, r.useState)(null), J = (0, r.useRef)(X), re = (0, r.useRef)(null), ne = (0, r.useRef)(null), de = (0, r.useRef)(null), ue = (0, r.useRef)(null), me = (0, r.useRef)(null), pe = (0, r.useRef)(null), fe = (0, r.useRef)(null), ge = (0, r.useRef)(null), he = (0, r.useRef)(null), {
            track: be
          } = (0, i.useGtmTrack)(), ye = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            const e = d === le.NEW_PLATE || !(!E() || d !== le.CONFIRM_ORDER);
            S !== e && T(e)
          }), [d, E()]);
          const ve = (0, r.useCallback)((e => {
            if (!v) return;
            const {
              scene: t,
              camera: a,
              controls: r,
              renderer: n
            } = v, s = t.getObjectByName("Scene");
            if (!s) return;
            const i = P(),
              o = !_() || p ? i * u : 1.6 * i * u,
              l = [];
            t.traverse((e => {
              0 === e.userData.index && (ge.current = e, s.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === ce.LP && l.push(e)
            }));
            const m = y().timeline({
              duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
              onStart: () => {
                r.current.minDistance = 0
              }
            });
            switch (e) {
              case Lt: {
                if (!r.current) return;
                const e = new c.Vector3;
                ge?.current && ge.current.getWorldPosition(e);
                const t = {
                  cameraPosition: {
                    start: (new c.Vector3).copy(a.position),
                    end: new c.Vector3(e.x, e.y, e.z + o)
                  },
                  controlsTarget: {
                    start: (new c.Vector3).copy(r.current.target),
                    end: e
                  },
                  plateOpacity: l.map(((e, t) => ({
                    start: e.material.opacity,
                    end: 0 === t ? 1 : 0
                  }))),
                  firstPlateSaturation: {
                    start: $.saturation.value,
                    end: 1
                  },
                  cameraFov: {
                    start: a.fov,
                    end: p && d === le.CONFIRM_ORDER ? 1.2 * Y.current : Y.current
                  }
                };
                p && (t.translateY = {
                  start: d === le.NEW_PLATE ? he?.current?.offsetHeight : 0,
                  end: d === le.NEW_PLATE ? 0 : he?.current?.offsetHeight
                }, t.startingDrawerHeight = z.current ? z.current.get() : 0, t.startingCanvasHeight = Number(k(n.domElement).y), t.canvasWidth = n.domElement.offsetWidth, t.canvasY = {
                  start: Number(k(n.domElement).y),
                  end: N / -2
                }, t.canvasYConfirmOrder = {
                  start: Number(k(n.domElement).y),
                  end: C / 1.5
                }, t.drawerHeight = {
                  start: z.current ? z.current.get() : 0,
                  end: d === le.NEW_PLATE ? 0 : C / (f ? 1 : 2)
                }, t.cameraFov = {
                  start: a.fov,
                  end: d === le.CONFIRM_ORDER ? 1.2 * Y.current : Y.current
                }, t.canvasOpacity = {
                  start: n.domElement.style.opacity,
                  end: 1
                });
                const s = {
                  current: 0
                };
                d === le.NEW_PLATE ? (m.to(s, {
                  current: 1,
                  duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                  ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = s, i = t.cameraPosition.start.clone().lerp(t.cameraPosition.end, e);
                    a.position.set(i.x, i.y, i.z);
                    const o = t.controlsTarget.start.clone().lerp(t.controlsTarget.end, e);
                    if (r.current.target.x = o.x, r.current.target.y = o.y, r.current.target.z = o.z, l.forEach(((a, r) => {
                        a.material && (a.material.opacity = (0, ze.t7)(t.plateOpacity[r].start, t.plateOpacity[r].end, e))
                      })), $.saturation.value = (0, ze.t7)(t.firstPlateSaturation.start, t.firstPlateSaturation.end, e), t.cameraFov.start !== t.cameraFov.end) {
                      const {
                        cameraFov: r
                      } = t;
                      a.fov = (0, ze.t7)(r.start, r.end, e), a.updateProjectionMatrix()
                    }
                    if (p) {
                      if (he.current) {
                        const a = (0, ze.t7)(t.translateY.start, t.translateY.end, e);
                        he.current.style.transform = `translateY(${a}px)`, he.current.style.opacity = String(e), he.current.style.pointerEvents = "all"
                      }
                      z.current && z.current.set((0, ze.t7)(t.drawerHeight.start, t.drawerHeight.end, e));
                      const a = (0, ze.t7)(t.canvasY.start, t.canvasY.end, e);
                      n.domElement.style.transform = `translateY(${a}px)`
                    }
                  },
                  onComplete: () => {
                    if (d === le.NEW_PLATE) {
                      const e = b[B.ROOT].current;
                      e && (e.style.touchAction = "none"), H.current = new c.Vector3(a.position.x, a.position.y, a.position.z), de?.current?.children && y().to(de.current.children, {
                        pointerEvents: "all"
                      }), p && (n.domElement.style.touchAction = "none")
                    }
                  }
                }, 0), p && m.to(b[B.NEW_PLATE_FORM].current, {
                  autoAlpha: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  delay: G.sidebar.mobile.drawer.duration / 2,
                  onStart: () => {
                    he.current && (he.current.style.pointerEvents = "all", he.current.style.visibility = "visible")
                  }
                }, 0), m.to([de.current, p ? void 0 : ne.current], {
                  autoAlpha: 1,
                  duration: G.sidebar.in.duration,
                  ease: G.sidebar.in.ease,
                  delay: G.sidebar.in.delay,
                  onStart: () => {
                    ue.current && (ue.current.style.transform = "translateY(0px)")
                  },
                  onComplete: () => {
                    p || y().set([ne.current, b[B.SIDEBAR_BUTTONS]?.current], {
                      pointerEvents: "all"
                    }), de.current && y().to(de.current.children, {
                      pointerEvents: "all"
                    })
                  }
                }, "<")) : d === le.CONFIRM_ORDER && (!0 === J.current && ke(), p && (m.to(s, {
                  current: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = s;
                    if (he.current) {
                      z.current && z.current.set((0, ze.t7)(t.drawerHeight.start, t.drawerHeight.end, e)), a.fov = (0, ze.t7)(t.cameraFov.start, t.cameraFov.end, e), a.updateProjectionMatrix(), n.domElement.style.opacity = (0, ze.t7)(t.canvasOpacity.start, t.canvasOpacity.end, e), de?.current?.style && (de.current.style.opacity = String(1 - e));
                      const r = (0, ze.t7)(t.translateY.start, t.translateY.end, e);
                      he.current.style.transform = `translateY(${r}px)`, he.current.style.pointerEvents = "none";
                      const s = (0, ze.t7)(t.canvasYConfirmOrder.start, t.canvasYConfirmOrder.end, e);
                      n.domElement.style.transform = `translateY(${s}px)`
                    }
                  }
                }, 0), m.to(b[B.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (y().to([de.current.children, ne.current], {
                    pointerEvents: "none"
                  }), y().to(de.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), p) {
                  const e = {
                    transform: 0,
                    drawerHeight: z.current ? z.current.get() : 0,
                    fov: a.fov
                  };
                  y().to(e, {
                    translateY: he?.current?.offsetHeight,
                    duration: G.sidebar.mobile.drawer.duration,
                    drawerHeight: N,
                    fov: Y.current,
                    ease: G.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      he.current && (z.current && z.current.set(e.drawerHeight), he.current.style.transform = `translateY(${e.translateY}px)`, he.current.style.pointerEvents = "none", a.fov = e.fov, a.updateProjectionMatrix())
                    }
                  })
                }
                if (d === le.CONFIRM_ORDER ? f || 1 == !J.current && y().to(a.position, {
                    x: Number(H.current.x),
                    y: Number(H.current.y),
                    z: 0,
                    ease: G.transaction.confirmOrder.ease,
                    duration: G.transaction.confirmOrder.duration
                  }) : y().to(ne.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), d === le.LIST_PLATES) {
                  const e = b[B.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                r?.current && (r.current.minDistance = 0), J.current = !1, q(!1)
            }
          }), [d, v, p, u, M, C, z.current, J.current]);
          (0, r.useEffect)((() => {
            b?.[B.SIDEBAR_BUTTONS]?.current && (he.current = b[B.SIDEBAR_BUTTONS].current)
          }), [b]), (0, r.useEffect)((() => {
            o(B.NEW_PLATE, pe)
          }), [pe.current]), (0, r.useEffect)((() => {
            o(B.CONFIRM_SIDEBAR_BUTTONS_PORTAL, me)
          }), [me.current]), (0, r.useEffect)((() => {
            o(B.NEW_PLATE_SIDEBAR, ne)
          }), [ne.current]), (0, r.useEffect)((() => {
            o(B.NEW_PLATE_UI, de)
          }), [de.current]);
          const xe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            xe.current = v
          }), [v]);
          const we = (0, r.useCallback)((() => {
              if (!v?.controls) return;
              const {
                controls: e,
                scene: t
              } = v;
              if (J.current) {
                let e;
                t.traverse((t => {
                  0 === t.userData.index && (e = t)
                })), y().to(e?.material, {
                  duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                  ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  opacity: 1
                })
              } else {
                const t = y().timeline({
                  duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                  ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  onStart: () => {
                    e?.current && (e.current.minDistance = 0)
                  }
                });
                Te(t, u, !0)
              }
              const {
                renderer: a
              } = xe.current;
              S ? (d === le.NEW_PLATE && (E() ? a.domElement.style.transform = `translateY(${N/-2}px)` : a.domElement.style.transform = "translateY(0px)", ne.current && (ne.current.style.opacity = "1", ne.current.style.visibility = "visible", ne.current.style.pointerEvents = "all")), d === le.CONFIRM_ORDER && E() && (a.domElement.style.transform = `translateY(${C/1.5}px)`)) : d !== le.CONFIRM_ORDER || E() || (a.domElement.style.transform = "translateY(0px)")
            }), [E(), S, d, v, ne.current, u]),
            Ee = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!ge?.current || !H.current || !v?.camera) return;
              be({
                ...ye,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "new plate",
                view_name: "license plate creator - new plate form"
              }), be({
                ...ye,
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
                  ease: G.toggleView.camera.ease,
                  duration: t ? 0 : G.toggleView.camera.duration
                },
                onStart: () => {
                  n?.current && (n.current.minDistance = 2, n.current.enableZoom = !1)
                },
                onComplete: () => {
                  n?.current && (n.current.minDistance = 0, n.current.maxPolarAngle = Z.plateView.maxPolarAngle, n.current.minPolarAngle = Z.plateView.minPolarAngle, n.current.maxAzimuthAngle = Z.plateView.maxAzimuthAngle, n.current.minAzimuthAngle = Z.plateView.minAzimuthAngle, n.current.enableZoom = !1), L.current = 0, e.onComplete && e.onComplete()
                }
              }).to(a.position, {
                x: Number(H.current.x),
                y: Number(H.current.y),
                z: Number(H.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to(ge.current.rotation, {
                x: 0
              }, "<").to(o, {
                intensity: 0
              }, "<").to([l, c], {
                intensity: .6
              }, "<").to(l.position, {
                x: K,
                y: Q,
                z: ee
              }, "<").to(c.position, {
                x: ae
              }, "<").to(ge.current.material, {
                envMapIntensity: ie
              }, "<").set(ge.current, {
                receiveShadow: !1
              }, .4).set(ge.current.material, {
                depthTest: !1
              }, "<"), i.traverse((e => {
                e.material && y().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : G.toggleView.fadeOut.duration,
                  ease: G.toggleView.fadeOut.ease
                })
              }))
            }), [ge.current, H.current, v]);
          (0, r.useEffect)((() => {
            v?.scene && !Y.current && (Y.current = v.camera.fov)
          }), [Y.current, v]), (0, r.useEffect)((() => {
            v?.scene && he.current && ve(S ? Lt : "hidden")
          }), [v, S, d === le.CONFIRM_ORDER]), (0, r.useEffect)((() => {
            if (he?.current && p && pe.current) {
              const e = pe.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              w(a - 48 - he.current.offsetHeight - t), A(a), j(-1 * (.6 * e - 80)), he.current.style.transform = `translateY${he.current.offsetHeight}px`
            }
          }), [he.current, p, pe.current]);
          const _e = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            d && (_e.current = d), d === le.LIST_PLATES && J.current && Ee({}, !0)
          }), [d]);
          const Se = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            u && (Se.current = u)
          }), [u]);
          const Te = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (_e.current !== le.NEW_PLATE && _e.current !== le.CONFIRM_ORDER) return;
            const {
              renderer: r
            } = v;
            O({
              plateIndex: 0,
              three: v,
              timeline: e,
              gridScale: t
            }, {
              onComplete: e => {
                e?.three?.camera && (H.current = new c.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), de?.current?.children && y().to(de.current.children, {
                  pointerEvents: "all"
                }), p && (r.domElement.style.touchAction = "none")
              },
              tweenPosition: 0,
              isResize: a
            })
          }), [v, d]);
          (0, r.useEffect)((() => {
            we()
          }), [u]);
          const Pe = (0, r.useCallback)((e => {
              if (!v?.scene) return;
              const {
                drawerStateRef: t
              } = e;
              if (v) {
                const {
                  renderer: e,
                  camera: a
                } = v, r = e.domElement, n = {
                  buttonWrapOpacity: ue.current.style.opacity,
                  canvasWrapOpacity: r.style.opacity,
                  fov: a.fov,
                  canvasTranslateY: Number(k(r).y)
                }, s = {};
                t.current === V ? (s.buttonWrapOpacity = 0, s.canvasWrapOpacity = 0, s.fov = Y.current, s.canvasTranslateY = N / -2, r.style.pointerEvents = "all", ue.current.style.pointerEvents = "all") : (t.current === W || t.current === D) && (s.buttonWrapOpacity = 1, s.canvasWrapOpacity = 1, s.fov = Y.current, s.canvasTranslateY = N / -2, r.style.pointerEvents = "all", ue.current.style.pointerEvents = "all"), y().to(n, {
                  buttonWrapOpacity: s.buttonWrapOpacity,
                  canvasWrapOpacity: s.canvasWrapOpacity,
                  fov: s.fov,
                  canvasTranslateY: s.canvasTranslateY,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    r.style.opacity = n.canvasWrapOpacity, ue.current.style.opacity = n.buttonWrapOpacity, a.fov = n.fov, a.updateProjectionMatrix(), r.style.transform = `translateY(${n.canvasTranslateY}px)`
                  }
                })
              }
            }), [v, N]),
            Ie = (0, r.useCallback)((e => {
              if (!v?.scene || !he.current) return;
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
                const e = (0, ze.ii)(0, n, r.get()),
                  o = (0, ze.t7)(0, 1, 1 - e);
                if (l.style.opacity = o, ue.current.style.opacity = o, ue.current.style.pointerEvents = r.get() >= 0 ? "all" : "none", ue.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                  const e = (0, ze.ii)(0, s, r.get()),
                    a = J.current ? 60 : 40,
                    n = (0, ze.t7)(Y.current, a, e);
                  i.fov = n, i.updateProjectionMatrix();
                  const o = Number(k(l).y) + t.delta[1] / 2;
                  l.style.transform = `translateY(${o}px)`
                }
              } else {
                const e = {
                  buttonWrapOpacity: ue.current.style.opacity,
                  canvasWrapOpacity: l.style.opacity,
                  fov: i.fov,
                  canvasTranslateY: Number(k(l).y)
                };
                a.current < n / 2 ? (ue.current.style.pointerEvents = "none", y().to(e, {
                  buttonWrapOpacity: 0,
                  canvasWrapOpacity: 0,
                  fov: J.current ? 60 : 40,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ue.current.style.opacity = e.buttonWrapOpacity
                  }
                })) : a.current > s / 2 ? (l.style.pointerEvents = "all", ue.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  canvasTranslateY: -.5 * (48 + he.current.offsetHeight),
                  fov: J.current ? 60 : 40,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ue.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                })) : Math.abs(a.current) > 0 && (l.style.pointerEvents = "all", ue.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: Y.current,
                  canvasTranslateY: N / -2,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ue.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), a.current > 0 && (l.style.transform = `translateY(${e.canvasTranslateY}px)`)
                  }
                }))
              }
            }), [v, he.current, N]),
            ke = (0, r.useCallback)((() => {
              if (!(v?.scene && v?.controls?.current && ge && ge?.current)) return;
              const {
                scene: e,
                camera: t,
                controls: a
              } = v, r = e.getObjectByName("Scene"), n = e.getObjectByName("Light1"), s = e.getObjectByName("Light2"), i = e.getObjectByName("Light3"), o = P(), l = !_() || p ? o * u : 1.6 * o * u;
              if (r && a && !F.current) {
                const e = [];
                if (r.traverse((t => {
                    t.material && (t.material.transparent = !0, t.material.mesh = t, "Banshee_Interior_LightMap" === t.material.name && (t.renderOrder = 99999), e.push(t.material))
                  })), J.current) {
                  const o = new c.Vector3;
                  if (ge.current.getWorldPosition(o), setTimeout((() => {
                      ge.current.receiveShadow = !1, ge.current.material.depthTest = !1
                    }), 400), !F.current) {
                    const c = {
                      camPositionX: t.position.x,
                      camPositionY: t.position.y,
                      camPositionZ: t.position.z,
                      controlsTargetX: a.current.target.x,
                      controlsTargetY: a.current.target.y,
                      controlsTargetZ: a.current.target.z,
                      plateRotationX: ge.current.rotation.x,
                      light1Intensity: n.intensity,
                      light2Intensity: s.intensity,
                      light2PositionX: s.position.x,
                      light2PositionY: s.position.y,
                      light2PositionZ: s.position.z,
                      light3Intensity: i.intensity,
                      light3PositionX: i.position.x,
                      envMapIntensity: ge?.current?.material?.envMapIntensity
                    };
                    y().to(c, {
                      camPositionX: o.x,
                      camPositionY: o.y,
                      camPositionZ: o.z + l,
                      controlsTargetX: o.x,
                      controlsTargetY: o.y,
                      controlsTargetZ: o.z,
                      plateRotationX: 0,
                      light1Intensity: 0,
                      light2Intensity: .6,
                      light2PositionX: K,
                      light2PositionY: Q,
                      light2PositionZ: ee,
                      light3Intensity: .6,
                      light3PositionX: ae,
                      envMapIntensity: ie,
                      duration: G.toggleView.camera.duration,
                      ease: G.toggleView.camera.ease,
                      onStart: () => {
                        a.current.minDistance = 2, a.current.enableZoom = !1, F.current = !0, b[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = y().timeline({
                          duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                          ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                        });
                        Te(e, u)
                      },
                      onUpdate: () => {
                        ge.current.rotation.x = c.plateRotationX, ge.current?.material && (ge.current.material.envMapIntensity = c.envMapIntensity), n.intensity = c.light1Intensity, s.intensity = c.light2Intensity, s.position.set(c.light2PositionX, c.light2PositionY, c.light2PositionZ), i.intensity = c.light3Intensity, i.position.x = c.light3PositionX
                      },
                      onComplete: () => {
                        F.current = !1, r.visible = !1, a.current.maxPolarAngle = Z.plateView.maxPolarAngle, a.current.minPolarAngle = Z.plateView.minPolarAngle, a.current.maxAzimuthAngle = Z.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = Z.plateView.minAzimuthAngle, b[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                      }
                    });
                    const d = {
                      opacity: 1
                    };
                    y().to(d, {
                      opacity: 0,
                      duration: G.toggleView.fadeOut.duration,
                      ease: G.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        e.forEach((e => {
                          e.opacity = d.opacity
                        }))
                      }
                    })
                  }
                } else if (!F.current) {
                  const o = {
                    camPositionY: t.position.y,
                    camPositionZ: t.position.z,
                    controlsTargetZ: a.current.target.z,
                    plateRotationX: ge.current.rotation.x,
                    light1Intensity: n.intensity,
                    light2Intensity: s.intensity,
                    light2PositionX: s.position.x,
                    light2PositionY: s.position.y,
                    light2PositionZ: s.position.z,
                    light3Intensity: i.intensity,
                    light3PositionX: i.position.x,
                    envMapIntensity: ge?.current?.material?.envMapIntensity
                  };
                  y().to(o, {
                    camPositionY: t.position.y + 2.5 * u,
                    camPositionZ: t.position.z + (p ? 24 * u : 12 * u),
                    controlsTargetZ: a.current.target.z - 5 * u,
                    plateRotationX: -.16,
                    light1Intensity: .6,
                    light2Intensity: .2,
                    light2PositionX: te.x,
                    light2PositionY: te.y,
                    light2PositionZ: te.z,
                    light3Intensity: .6,
                    light3PositionX: se.x,
                    envMapIntensity: oe,
                    duration: G.toggleView.camera.duration,
                    ease: G.toggleView.camera.ease,
                    onStart: () => {
                      const e = p ? 52 * u : 26 * u;
                      a.current.enableZoom = !0, a.current.maxPolarAngle = Z.carView.maxPolarAngle, a.current.minPolarAngle = Z.carView.minPolarAngle, a.current.maxAzimuthAngle = Z.carView.maxAzimuthAngle, a.current.minAzimuthAngle = Z.carView.minAzimuthAngle, a.current.maxDistance = e, r.visible = !0, b[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none", F.current = !0
                    },
                    onUpdate: () => {
                      t.position.set(t.position.x, o.camPositionY, o.camPositionZ), a.current.target.z = o.controlsTargetZ, ge.current.rotation.x = o.plateRotationX, ge.current?.material && (ge.current.material.envMapIntensity = o.envMapIntensity), n.intensity = o.light1Intensity, s.intensity = o.light2Intensity, s.position.set(o.light2PositionX, o.light2PositionY, o.light2PositionZ), i.intensity = o.light3Intensity, i.position.x = o.light3PositionX
                    },
                    onComplete: () => {
                      F.current = !1, a.current.minDistance = p ? 20 * u : 10 * u, b[B.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                    }
                  });
                  const l = {
                    opacity: 0
                  };
                  y().to(l, {
                    opacity: 1,
                    duration: G.toggleView.fadeOut.duration,
                    ease: G.toggleView.fadeOut.ease,
                    onUpdate: () => {
                      e.forEach((e => {
                        e.opacity = l.opacity
                      }))
                    }
                  }), y().to(ge.current, {
                    duration: 0,
                    delay: .4,
                    onComplete: () => {
                      ge.current.receiveShadow = !0, ge.current.material.depthTest = !0
                    }
                  })
                }
                J.current = !J.current
              }
            }), [v, J.current, ge, ge?.current, u]),
            Re = (0, r.useCallback)((e => {
              if (!(v?.scene && he?.current && ne.current && ue.current)) return;
              const t = b[B.UI]?.current;
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
                  mobileSidebarHeight: N,
                  fov: Y.current,
                  submitOrderTranslateY: he.current.offsetHeight,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, he.current.style.transform = `translateY(${c.submitOrderTranslateY}px)`, ue.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                  },
                  onComplete: () => {
                    s.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [b, ne.current, he.current, v, N]),
            Ne = e => {
              if (!v?.scene) return;
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
              U(r), z.current = r, t.current.style.pointerEvents = "all";
              const o = {
                mobileSidebarHeight: N,
                opacity: t.current.style.opacity
              };
              y().to(o, {
                opacity: 1,
                mobileSidebarHeight: 0,
                duration: s,
                ease: i,
                onUpdate: () => {
                  t.current.style.opacity = o.opacity, t.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`, a.current = o.mobileSidebarHeight, r.set(a.current), ue.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`
                }
              })
            },
            Ae = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = h, r = I ? (0, De.jsx)(Ct, {}) : t("lp.create.next");
              return (0, De.jsx)(_t, {
                buttons: [{
                  buttonText: l ? r : t("lp.create.signin"),
                  isDisabled: !!l && (I || !g || !e && g === a),
                  onClick: async () => {
                    re?.current?.(), l || (be({
                      ...ye,
                      event: "cta_login",
                      event_category: "cta",
                      event_action: "login",
                      event_label: "sidebar",
                      text: t("lp.create.signin").toLowerCase(),
                      link_url: m
                    }), window.location.href = m)
                  }
                }],
                isLoading: I,
                isVisible: [le.NEW_PLATE, le.CONFIRM_ORDER].includes(d),
                tabIndex: d === le.NEW_PLATE ? 0 : -1
              })
            }), [g, d, l, S, h, re.current, I]),
            Oe = (0, r.useCallback)((() => {
              s(!f)
            }), [f]),
            Ce = (0, r.useMemo)((() => p ? (0, De.jsxs)(dt, {
              bottom: x,
              isVisible: S,
              onDrag: Ie,
              onHide: Re,
              onShow: Ne,
              onTap: Pe,
              top: C,
              drawerY: M,
              mobileSidebarHeight: N,
              children: [(0, De.jsx)(Et, {
                validateFnRef: re,
                setIsLoading: R
              }), (0, De.jsx)(jt, {
                top: C,
                drawerY: M
              })]
            }) : (0, De.jsxs)("div", {
              ref: ne,
              className: "b3a55298ca91e26e9b33",
              children: [(0, De.jsx)("hr", {
                className: "da92b2273d68a97e2a78",
                onClick: () => {
                  Oe()
                },
                "aria-hidden": "true"
              }), (0, De.jsx)(Et, {
                validateFnRef: re,
                setIsLoading: R
              }), Ae]
            })), [g, x, f, p, S, ne.current, C, M, I, N]);
          return (0, De.jsxs)("div", {
            ref: pe,
            className: "caf43b491abf74b06503",
            children: [Ce, (0, De.jsxs)("div", {
              ref: de,
              className: "b36e465c1f658cb32f90",
              children: [(0, De.jsx)(ut, {
                onClick: () => {
                  Ee({
                    onComplete: () => n(le.LIST_PLATES)
                  })
                }
              }), (0, De.jsx)(lt.animated.div, {
                ref: ue,
                className: "a180f06a190df3e373ca",
                style: M ? {
                  y: M
                } : void 0,
                children: (0, De.jsx)(Pt, {
                  onToggleView: ke
                })
              })]
            }), (0, De.jsxs)("div", {
              ref: fe,
              className: "b04b9fd973ab818135a5",
              children: [p && Ae, p && (0, De.jsx)("div", {
                className: "b1913cd00efde6aa558c",
                ref: me
              })]
            })]
          })
        })),
        Vt = "eade32da81574d4b6ca7",
        Wt = "f09ca3dd068fb4f0cd0a",
        Dt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            loggedIn: a
          } = (0, i.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = We(), {
            plates: o,
            isMobile: l
          } = s, c = (0, r.useRef)(null), d = (0, r.useRef)(null), u = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            n(B.SIDEBAR, c)
          }), [c.current, l]), (0, r.useEffect)((() => {
            n(B.PLATE_COUNT, u)
          }), [u.current, l]), (0, r.useEffect)((() => {
            n(B.SIDEBAR_BUTTONS_LOADING_ANIMATION, d)
          }), [d.current]), (0, De.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: c,
            className: "e5e3abc19ffd80dd3bcf",
            children: [(0, De.jsx)("div", {
              className: "d3fd7c681c3a0e077bfd",
              children: (0, De.jsx)(mt, {})
            }), (0, De.jsxs)("div", {
              className: "e34b13392437e67c024e",
              children: [(0, De.jsxs)("div", {
                className: "a9630d965666bd9a0dca",
                children: [(0, De.jsx)("h1", {
                  className: "ff661f315c83ec384d82",
                  children: t("lp.landing.title")
                }), (0, De.jsx)("p", {
                  className: "be91057254fd4da9b396",
                  children: t("lp.landing.description")
                }), (0, De.jsx)("div", {
                  className: "d46b09270858ddec7470",
                  children: (0, De.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, De.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), a && (0, De.jsxs)("div", {
                className: "ece6d2c94e93da11315a",
                children: [(0, De.jsx)("h5", {
                  children: t("lp.landing.plates")
                }), (0, De.jsxs)("span", {
                  className: "a0d05ceada404843b055",
                  children: [(0, De.jsxs)("span", {
                    className: "b2b7f5dbc7c91066f920",
                    children: [(0, De.jsx)("span", {
                      ref: d,
                      className: "b00be5267e4e3e70e97f",
                      children: (0, De.jsx)(Ct, {
                        type: U.THREE_DOTS
                      })
                    }), (0, De.jsx)("span", {
                      ref: u,
                      className: "c8177c0c51aa4a3017cf",
                      children: o?.filter((e => {
                        let {
                          faux: t = !1
                        } = e;
                        return !t
                      }))?.length ?? 0
                    })]
                  }), (0, De.jsx)("span", {
                    className: "e2bf820b93754f519b30"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Bt = "eb0df59dc5cb7bf90dce",
        {
          lerp: Ut
        } = c.MathUtils,
        zt = "visible",
        Ht = () => {
          const {
            state: e,
            setDeletedPlateIndex: t,
            setPlates: a
          } = We(), {
            currentView: n,
            three: s,
            isMobile: i,
            isLoading: o,
            refs: l,
            deletedPlateIndex: d,
            plates: u
          } = e, m = (0, r.useRef)(null), [p, f] = (0, r.useState)(n === le.LIST_PLATES), g = l?.[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            f(n === le.LIST_PLATES)
          }), [n]);
          const h = (0, r.useCallback)((e => {
            if (!s) return;
            const {
              camera: r,
              controls: n,
              originalCameraPosition: p,
              originalControlsTarget: f,
              renderer: h,
              scene: b
            } = s, {
              clickPlate: v,
              sidebar: x,
              deletePlate: w
            } = G, E = l[B.FOOTER].current, _ = l[B.SIDEBAR].current, S = l[B.LOADING_SCREEN].current, T = l[B.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, P = l[B.PLATE_COUNT].current, I = [];
            b.traverse((e => {
              e.name === ce.LP && I.push(e)
            }));
            const R = y().timeline({
              duration: i ? x.mobile.drawer.duration : v.duration,
              ease: i ? x.mobile.drawer.ease : v.ease
            });
            switch (e) {
              case zt: {
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
                      end: f
                    },
                    plateOpacity: I.map((e => ({
                      start: e.material.opacity,
                      end: 1
                    }))),
                    firstPlateSaturation: {
                      start: $.saturation.value,
                      end: 0
                    },
                    canvasTranslateY: {
                      start: Number(k(h.domElement).y),
                      end: 0
                    },
                    canvasWidth: h.domElement.offsetWidth,
                    drawerHeight: {
                      start: Number(k(m.current).y),
                      end: 0
                    }
                  };
                if (R.to(e, {
                    current: 1,
                    duration: i ? x.mobile.drawer.duration : v.duration,
                    ease: i ? x.mobile.drawer.ease : v.ease,
                    onComplete: () => {
                      i && (h.domElement.style.touchAction = "auto");
                      const e = l[B.CTA_WRAP]?.current;
                      e && e.classList.add(He.visible)
                    },
                    onStart: () => {
                      _ && (_.style.pointerEvents = "all")
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e, a = s.cameraPosition.start.clone().lerp(s.cameraPosition.end, t);
                      r.position.set(a.x, a.y, a.z);
                      const o = s.controlsTarget.start.clone().lerp(s.controlsTarget.end, t);
                      if (n.current.target.x = o.x, n.current.target.y = o.y, n.current.target.z = o.z, I.forEach(((e, a) => {
                          e.material && (e.material.opacity = Ut(s.plateOpacity[a].start, s.plateOpacity[a].end, t))
                        })), $.saturation.value = Ut(s.firstPlateSaturation.start, s.firstPlateSaturation.end, t), i) {
                        const e = Ut(s.canvasTranslateY.start, s.canvasTranslateY.end, t);
                        if (h.domElement.style.transform = `translateY(${e}px)`, m.current) {
                          const e = Ut(s.drawerHeight.start, s.drawerHeight.end, t);
                          m.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), "number" == typeof d) {
                  const e = I.find((e => e.userData.index === d));
                  if (e) {
                    R.to(e.material, {
                      opacity: 0,
                      duration: w.duration,
                      ease: w.ease
                    }, ">");
                    const r = I.filter((e => e.userData.index >= d)).map((e => e.position)),
                      n = r.map((e => e.clone()));
                    R.to(r.slice(1), {
                      x: e => n[e].x,
                      y: e => n[e].y,
                      z: e => n[e].z,
                      stagger: {
                        each: .03
                      },
                      onComplete: () => {
                        e.removeFromParent(), e.userData.index = void 0, b.remove(e);
                        const r = u.filter((e => e.index !== d));
                        r.forEach(((e, t) => {
                          e.index = t
                        })), a(r), t(null)
                      }
                    }, "<25%")
                  }
                }
                R.to(E, {
                  autoAlpha: 1,
                  duration: i ? x.mobile.footer.in.duration : x.in.duration,
                  ease: i ? x.mobile.footer.in.ease : x.in.ease,
                  delay: i ? x.mobile.footer.in.delay : x.in.delay
                }, 0), R.to(_, {
                  autoAlpha: 1,
                  duration: i ? x.mobile.fadeHeader.in.duration : x.in.duration,
                  ease: i ? x.mobile.fadeHeader.in.ease : x.in.ease,
                  delay: i ? x.mobile.fadeHeader.in.delay : x.in.delay,
                  onStart: () => {
                    S && (o ? (S.classList.add(Bt), T && T.classList.add(Vt), P && P.classList.remove(Wt)) : (S.classList.remove(Bt), T && T.classList.remove(Vt), P && P.classList.add(Wt)))
                  }
                }, 0), i && (g && y().set(g.style, {
                  visibility: "visible"
                }), _ && (_.style.pointerEvents = "all"));
                break
              }
              default:
                if (y().to(E, {
                    autoAlpha: 0,
                    duration: i ? x.mobile.footer.out.duration : x.out.duration,
                    ease: i ? x.mobile.footer.out.ease : x.out.ease
                  }), g && y().set(g.style, {
                    visibility: "hidden"
                  }), _ && (_.style.pointerEvents = "none"), i) {
                  const e = {
                    current: k(_).y
                  };
                  y().to(_, {
                    opacity: 0,
                    duration: x.mobile.fadeHeader.out.duration,
                    ease: x.mobile.fadeHeader.out.ease
                  }), y().to(e, {
                    current: -1 * _.offsetHeight,
                    duration: x.mobile.drawer.duration,
                    ease: x.mobile.drawer.ease,
                    onUpdate: () => {
                      m.current.style.transform = `translateY(${e.current}px)`
                    }
                  })
                } else y().to(_, {
                  autoAlpha: 0,
                  duration: x.out.duration,
                  ease: x.out.ease,
                  delay: x.out.delay
                })
            }
          }), [d, s, i, l, o]);
          return (0, r.useEffect)((() => {
            l && l?.[B.FOOTER]?.current && l?.[B.SIDEBAR]?.current && l?.[B.UI]?.current && l?.[B.LOADING_SCREEN]?.current && m.current && s?.scene && s?.controls && h(p ? zt : "hidden")
          }), [l, p, m.current, s, i, o, l?.[B.FOOTER]?.current, l?.[B.SIDEBAR]?.current]), (0, De.jsx)("div", {
            ref: m,
            className: "fe2f56dce20f2cc23636",
            children: (0, De.jsx)(Dt, {})
          })
        },
        Yt = e => {
          let {
            isMobile: t
          } = e;
          const {
            loggedIn: a
          } = (0, i.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = We(), {
            plates: o,
            refs: l
          } = s, c = (0, r.useRef)(null), d = l[B.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              n(B.UI, c)
            }), [c.current]), !o) return null;
          let u;
          return t && (u = d ? (0, ot.createPortal)((0, De.jsx)(Ht, {}), d) : null), (0, De.jsxs)("div", {
            ref: c,
            className: "cf4e3950dff0bf598a46",
            children: [a && !t && (0, De.jsx)(jt, {}), t ? u : (0, De.jsx)(Ht, {}), a && (0, De.jsx)(yt, {}), (0, De.jsx)(Mt, {})]
          })
        },
        Ft = {
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
        $t = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: n,
            t: l
          } = e;
          const [c, d] = (0, r.useState)(!1), {
            loggedIn: u
          } = (0, i.useRockstarUser)(), m = (0, s.useRockstarTokenPing)(), {
            setPlates: p,
            setPendingOrder: f,
            setPlateNumber: g,
            setSelectedStyle: h,
            setError: b,
            state: y
          } = We(), {
            character: v,
            plates: w,
            currentView: E
          } = y, {
            track: _
          } = (0, i.useGtmTrack)(), S = {
            view_name: "license plate creator - landing page logged in"
          }, T = E === le.LIST_PLATES ? 0 : -1, P = (0, r.useCallback)((() => {
            (async () => {
              if (!u || !v) return;
              const [e] = v, {
                error: t
              } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                pingBearer: m,
                fetchOptions: {
                  method: "DELETE"
                },
                query: {
                  platform: e
                }
              });
              if (t) return void b(["api", t]);
              const a = [de, ...w.slice(1, w.length)];
              p(a), f(null), g(""), h(x(de.style.name).id), _({
                ...S,
                event: "cta_cancel",
                event_category: "cta",
                event_action: "cancel",
                text: `modal: ${l("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${l("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, v, w]);
          return (0, De.jsxs)("div", {
            className: [Ft.orderInProgressCTA, n ? "" : Ft.hidden].join(" "),
            children: [(0, De.jsx)("h1", {
              className: Ft.contentHeading,
              children: l("lp.inprogress.title")
            }), (0, De.jsx)("p", {
              className: Ft.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: l("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${Ft.vehicleName}>${t}</span>`)
              }
            }), (0, De.jsxs)("div", {
              className: Ft.buttonWrap,
              children: [(0, De.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": l("lp.inprogress.edit"),
                tabIndex: T,
                children: (0, De.jsx)("span", {
                  className: Ft.ctaText,
                  children: l("lp.inprogress.edit")
                })
              }), (0, De.jsx)("button", {
                type: "button",
                onClick: () => d(!0),
                "aria-label": l("lp.inprogress.cancel"),
                tabIndex: T,
                children: (0, De.jsx)("span", {
                  className: Ft.ctaText,
                  children: l("lp.inprogress.cancel")
                })
              })]
            }), (0, De.jsx)(ft, {
              title: l("lp.modal.order-cancel.title"),
              secondaryText: l("lp.modal.order-cancel.description").replace("{plateText}", w[0]?.plateText ?? "this plate"),
              buttons: [{
                buttonText: l("lp.modal.order-cancel.confirm"),
                onClick: () => P()
              }, {
                buttonText: l("lp.modal.order-cancel.close"),
                onClick: () => {
                  _({
                    ...S,
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
        Gt = e => {
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
          return (0, De.jsx)("div", {
            style: {
              width: `${a}px`,
              height: a / 2 + "px",
              pointerEvents: "none"
            },
            children: (0, De.jsxs)("div", {
              className: [He.loggedOutCTA, r !== le.LIST_PLATES ? He.hidden : ""].join(" "),
              children: [(0, De.jsx)("button", {
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
                className: [He.signIn, r !== le.LIST_PLATES ? He.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, De.jsx)("span", {
                  className: He.ctaText,
                  children: c("lp.landing.signup")
                })
              }), (0, De.jsx)("button", {
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
                className: [He.tryWithoutSigningIn, He.firstLoad, r !== le.LIST_PLATES ? He.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, De.jsx)("span", {
                  className: He.ctaText,
                  children: c("lp.landing.tryit")
                })
              })]
            })
          })
        },
        Zt = e => {
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
          } = We(), {
            currentView: d,
            gridState: u,
            loginUrl: m,
            pendingOrder: p,
            plates: f,
            refs: g,
            isMobile: h,
            realHeight: b
          } = n, [y, v] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            v(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            f.length && _(f[0])
          }), [f]);
          const [x, w] = (0, r.useState)(null), [E, _] = (0, r.useState)(null), S = g[B.FIRST_PLATE_MESH], T = g[B.ROOT], P = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = g[B.SIDEBAR];
            if (!(e?.current && T?.current && u?.gridOptions && E)) return;
            const t = e.current,
              a = {
                x: h ? 0 : t.offsetWidth,
                y: 0
              },
              r = R(E.index, T.current, Number(b.replace("px", "")), u, a);
            w(r)
          }), [u, T?.current, E, g, P.current, b]);
          const {
            track: k
          } = (0, i.useGtmTrack)(), O = {
            view_name: "license plate creator - landing page logged " + (a ? "in" : "out")
          }, C = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c(B.CTA_WRAP, P)
          }), [P.current]);
          const j = d === le.LIST_PLATES ? 0 : -1,
            L = (0, r.useCallback)((e => {
              if (s() === le.LIST_PLATES) {
                const t = 0 === e ? le.NEW_PLATE : le.VIEW_PLATE;
                e && (k({
                  ...O,
                  event: "license_plate_open",
                  event_category: "license_plate",
                  event_action: "open",
                  view_name: "list plates",
                  position: e
                }), k({
                  ...O,
                  event: "virtualPageview",
                  display_type: h ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                })), o(f[e]), l(e), s(t)
              }
            }), [f]),
            M = (0, r.useCallback)((e => {
              N(e, d)
            }), [d]),
            V = (0, r.useMemo)((() => x ? (0, De.jsx)(Gt, {
              plateData: E,
              plateWidthInPixels: x.width,
              currentView: d,
              loginUrl: m,
              inputTabIndex: j,
              track: k,
              trackingPresets: O,
              onClickPlate: L,
              t
            }) : null), [d, m, x]),
            W = (0, r.useMemo)((() => void 0 !== f ? I(p, f) ? (0, De.jsx)($t, {
              t,
              vehicleName: `${p.manufacturerName} ${p.vehicleName}`,
              onClickEdit: () => {
                k({
                  ...O,
                  event: "license_plate_edit_click",
                  event_category: "license_plate",
                  event_action: "edit",
                  event_label: "click",
                  text: t("lp.inprogress.edit").toLowerCase()
                }), L(E.index)
              },
              isVisible: d === le.LIST_PLATES
            }) : f.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30 ? (0, De.jsxs)("div", {
              className: [He.maxPlatesReached, d !== le.LIST_PLATES ? He.hidden : ""].join(" "),
              children: [(0, De.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === f.length ? null : (0, De.jsxs)("button", {
              type: "button",
              onClick: () => {
                k({
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
                S?.current && (e = S?.current, A(e))
              },
              className: [He.createNewPlate, d !== le.LIST_PLATES ? He.hidden : ""].join(" "),
              ref: C,
              tabIndex: j,
              children: [(0, De.jsx)("span", {
                className: `${He.ctaText} ${y?He.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, De.jsx)("div", {
                className: He.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [d, p, g, x, f, h]),
            D = (0, r.useMemo)((() => void 0 !== p && x ? (0, De.jsx)("div", {
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
            }) : null), [d, p, x, g, W, h]);
          return (0, r.useMemo)((() => {
            if (!x || !E || !u?.gridOptions) return null;
            const {
              width: e,
              height: t
            } = x, {
              top: r,
              left: n,
              right: s,
              bottom: i
            } = x.rect;
            return (0, De.jsx)("div", {
              ref: P,
              className: He.CTAWrap,
              style: {
                top: r,
                left: n,
                bottom: i,
                right: s,
                width: e,
                height: t
              },
              children: a ? D : V
            })
          }), [x, E, u, a, d, W, f, h])
        },
        Xt = e => {
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
            } = We(),
            [o, l] = (0, r.useState)(null),
            [c, d] = (0, r.useState)(null),
            m = {
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
              data: g
            } = (0, i.useRockstarUser)(),
            h = {
              member_id: g?.user ? g.user?.id : void 0,
              view_name: "license plate creator - error screen"
            };
          return (0, r.useEffect)((() => {
            if (!n) return l(null), void d(null);
            l(n[0]), d(n[1] ?? a)
          }), [String(n)]), (0, r.useEffect)((() => {
            f({
              ...h,
              event: "alert_error",
              event_category: "alert",
              event_action: "error",
              text: m[o] || t("lp.error.unexpected.description")
            }), f({
              ...h,
              event: "trackPageview",
              display_type: s ? "mobile" : "desktop"
            })
          }), []), o ? (0, De.jsxs)("div", {
            className: "edb361b16208ea39b04d",
            children: [(0, De.jsxs)("div", {
              className: "f989292c56d125a42b05",
              children: [(0, De.jsxs)("div", {
                className: "d8a0031e9fbf468e335f",
                children: [(0, De.jsx)("i", {}), (0, De.jsx)("h4", {
                  children: m[o] || t("lp.error.unexpected.description")
                }), c?.code && (0, De.jsxs)("div", {
                  className: "e79427410b0638c42413",
                  children: [(0, De.jsx)("p", {
                    children: `Code: ${c.code}`
                  }), c?.logId && (0, De.jsx)("p", {
                    children: `LogID: ${c?.logId}`
                  })]
                })]
              }), (0, De.jsx)(u.NavLink, {
                to: "character" !== o ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, De.jsx)("button", {
                  className: "e93e0cb9f21eac83e021",
                  type: "button",
                  tabIndex: 0,
                  children: (0, De.jsx)("span", {
                    className: "b0922946a512c5c777b2",
                    children: p[o]
                  })
                })
              })]
            }), (0, De.jsx)("div", {
              className: "d7b9f55b7895c5fc08c6"
            })]
          }) : null
        },
        qt = () => {
          const {
            state: e,
            setRefs: t
          } = We(), {
            refs: a,
            isMobile: n
          } = e, s = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            s && t(B.LOADING_SCREEN, s)
          }), [s]);
          const i = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            if (n && a?.[B.SIDEBAR]?.current && i.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                n = a?.[B.SIDEBAR].current.offsetHeight,
                s = n + (r - n) / 2 - t / 2;
              i.current && (i.current.style.top = `${s}px`)
            } else i.current && (i.current.style.top = "unset")
          }), [n, a]), (0, De.jsx)("div", {
            ref: s,
            className: "a76020cf52b63db690ab",
            children: (0, De.jsx)("div", {
              ref: i,
              className: "c62ab050cb79d2037711",
              children: (0, De.jsx)(Ct, {})
            })
          })
        },
        Jt = e => {
          let {
            plate: t,
            index: a,
            details: r,
            tabIndex: n
          } = e;
          const {
            loggedIn: s
          } = (0, i.useRockstarUser)(), {
            setCurrentView: o,
            setCurrentPlate: l,
            setCurrentPlateIndex: c,
            state: {
              isMobile: d
            }
          } = We(), {
            track: u
          } = (0, i.useGtmTrack)(), m = {
            view_name: "license plate creator - landing page logged " + (s ? "in" : "out")
          };
          return (0, De.jsx)("button", {
            "aria-label": `${t?.style?.displayName||""} license plate ${t.plateText?`with the number ${t.plateText}`:""}`.trim(),
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
                ...m,
                event: "license_plate_open",
                event_category: "license_plate",
                event_action: "open",
                view_name: "list plates",
                position: a
              }), u({
                ...m,
                event: "virtualPageview",
                display_type: d ? "mobile" : "desktop",
                view_name: "license plate creator - view plate"
              }), l(t), c(a), o(le.VIEW_PLATE)
            }
          })
        },
        Kt = () => {
          const {
            state: {
              gridState: e,
              plates: t,
              realHeight: a,
              currentView: n,
              refs: s,
              isMobile: i
            }
          } = We(), [o, l] = (0, r.useState)([]);
          return (0, r.useEffect)((() => {
            const r = s[B.ROOT]?.current,
              n = s?.[B.SIDEBAR]?.current,
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
          }), [e, t, a, s[B.ROOT]?.current?.offsetHeight]), o.length ? (0, De.jsx)(De.Fragment, {
            children: t.filter(((e, t) => t)).map(((e, t) => (0, De.jsx)(Jt, {
              plate: e,
              index: t,
              details: o[t],
              tabIndex: n === le.LIST_PLATES ? 0 : -1
            }, e.plateText + e.vehicles.toString())))
          }) : null
        },
        Qt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: f,
            setCharacter: h,
            setCurrentView: b,
            setError: y,
            setIsLoading: v,
            setIsMobile: w,
            setPendingOrder: _,
            setPlateNumber: S,
            setPlates: T,
            setRefs: P,
            setSelectedStyle: k,
            setVehicles: R,
            state: N
          } = We(), {
            error: A,
            plates: O,
            pendingOrder: C,
            isMobile: j,
            three: L,
            isLoading: M
          } = N, {
            setCustomFooter: V
          } = (0, l.useRockstarLocalState)(), {
            loggedIn: W
          } = (0, i.useRockstarUser)(), {
            selectedCharacterTuple: D
          } = (0, i.useRockstarUserState)(), U = (0, s.useRockstarTokenPing)(), H = (0, r.useRef)(null), Y = (0, r.useRef)(null), F = (0, r.useRef)(null), [$, G] = (0, r.useState)(null), [Z] = (0, u.useSearchParams)(), [X, q] = (0, r.useState)(!1);
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
              y([e?.message])
            } finally {
              q(!0)
            }
          }), []);
          const J = (0, r.useCallback)(g().debounce((() => {
            if (L?.renderer) {
              const {
                renderer: e
              } = L, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              f({
                width: t,
                height: a
              })
            }
            w(E())
          }), 100), [L]);
          (0, r.useEffect)((() => (J(), window.addEventListener("resize", J, !0), () => window.removeEventListener("resize", J, !0))), [L]), (0, r.useEffect)((() => ((0, l.setFreezeUserShouldSeeMore)(!0), V(!0), () => {
            (0, l.setFreezeUserShouldSeeMore)(!1), V(!1), b(le.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            P(B.CANVAS_WRAP, H)
          }), [H.current]), (0, r.useEffect)((() => {
            P(B.ROOT, Y)
          }), [Y.current]), (0, r.useEffect)((() => {
            P(B.MOBILE_SIDEBAR_PORTAL_TARGET, F)
          }), [F.current]), (0, r.useEffect)((() => {
            if (!X || "webgl" === A || "browser" === A) return;
            y(null), h(D), b(le.LIST_PLATES), _(null);
            const e = (W ? [] : [de]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== W && (T(e), !1 === W && v(!1)), R([]), (async () => {
              try {
                W && v(!0);
                const e = y();
                if (!W || null === D || e) return;
                if (!1 === D) return void y(["character"]);
                const [t, a] = D, {
                  error: r = null,
                  result: n
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  pingBearer: U,
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (r) throw Object.assign(new Error(""), r);
                const s = n?.plates?.map((e => {
                    const t = x(e?.vehicles?.[0]?.plateStyle ?? "YellowBlack") ?? x("YellowBlack");
                    return {
                      ...e,
                      style: t
                    }
                  })) ?? [],
                  {
                    error: i = null,
                    result: l
                  } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                    pingBearer: U,
                    query: {
                      character: a,
                      platform: t
                    }
                  });
                if (i) throw Object.assign(new Error(""), i);
                const c = g().uniqBy(l?.vehicles ?? [], (e => {
                  let {
                    id: t
                  } = e;
                  return t
                }));
                if (!c.length) return y(["vehicles"]), void v(!1);
                R(c);
                const {
                  error: d,
                  result: u
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: U,
                  query: {
                    platform: t
                  }
                });
                if (d) throw Object.assign(new Error(""), d);
                const m = I(u, O);
                let p = [de, ...s];
                p = p.map(((e, t) => ({
                  ...e,
                  index: t
                }))), m ? (_(u), k(de.style.id)) : _(null), S(de.plateText), v(!1), T(p)
              } catch (e) {
                y(["api", e]), v(!1)
              }
            })()
          }), [String(D), W, X]), (0, r.useEffect)((() => {
            I(C, O) && (k(x(C.plateStyle).id), S(C.plateText))
          }), [C, O]), (0, r.useEffect)((() => {
            if ($ || !z || A || !X) return;
            const e = Z.get("envUrl") || a(3924),
              t = new c.LoadingManager((() => {
                G({
                  environmentMap: u,
                  environmentModel: l,
                  plateTextures: f
                })
              })),
              r = new d.E(t),
              n = new m._(t),
              s = new p.a(t);
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
          }), [$, z, A, X]);
          const K = (0, r.useMemo)((() => (0, De.jsx)(n.Canvas, {
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
            children: (0, De.jsx)(it, {
              loadedAssets: $
            })
          })), [$]);
          return X && null !== W ? A ? (0, De.jsx)(Xt, {
            t
          }) : (0, De.jsxs)("div", {
            ref: Y,
            className: "bbf483f378bf9b124fa4",
            children: [j && (0, De.jsx)("div", {
              className: "bf1276a16c42d8d88c6b",
              ref: F,
              children: (0, De.jsx)(qt, {
                isLoading: M
              })
            }), (0, De.jsxs)("div", {
              className: "e679d5c0c7e82b869590",
              children: [(0, De.jsx)(Yt, {
                isMobile: j
              }), (0, De.jsxs)("div", {
                className: "d171b6e11feaaa0e6b49",
                ref: H,
                children: [K, !j && (0, De.jsx)(qt, {
                  isLoading: M
                })]
              })]
            }), (0, De.jsx)("span", {
              className: "c23379ba67d2aa3b2d3d"
            }), (0, De.jsx)(Zt, {
              t
            }), (0, De.jsx)(Kt, {}), (0, De.jsx)(Be, {
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