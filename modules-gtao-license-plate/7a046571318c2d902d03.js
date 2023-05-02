"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [784], {
    9784: (e, t, a) => {
      a.d(t, {
        Z: () => Ht
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
        m = a(8933),
        p = a(9643),
        f = a(4439),
        g = a.n(f),
        h = a(8976),
        b = a(9878),
        y = a.n(b);
      const v = e => H.find((t => {
          let {
            id: a
          } = t;
          return a === e
        })),
        x = e => H.find((t => {
          let {
            name: a
          } = t;
          return a.toLowerCase() === e.toLowerCase()
        })),
        w = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        E = () => window.innerWidth < Y.lg,
        _ = () => window.innerHeight > .75 * window.innerWidth,
        S = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= Y.xxl:
              return 25;
            case e >= Y.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= Y.lg:
              return 40;
            default:
              return 100
          }
        },
        T = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= Y.xl:
              return w(4);
            case e >= 1440:
              return w(3);
            default:
              return w(2)
          }
        },
        I = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= Y.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= Y.lg:
              return 5;
            case e >= Y.md:
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

      function N(e, t, a, r) {
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
      const R = (e, t) => {
          const a = 1.025;
          t === q.LIST_PLATES && (document.body.style.cursor = "pointer", y().to(e.scale, {
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
        } = n, m = I(), p = !_() || E() ? m * s : 1.6 * m * s, f = [];
        let g = null;
        l.traverse((e => {
          e.name === J.LP && f.push(e), e.userData.index === a && (g = e)
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
        z = {
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
        B = {
          SPINNING: "spinning",
          THREE_DOTS: "threeDots"
        },
        H = [{
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
        Y = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        U = 0,
        F = 2,
        $ = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: U
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
        X = {
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
        q = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        J = {
          LP: "licensePlate",
          LP_GRID: "licensePlateGrid"
        },
        K = {
          faux: !0,
          index: 0,
          mpPlate: !1,
          noDelete: !1,
          spPlate: !1,
          plateText: "",
          style: x("BlueWhite2"),
          vehicles: []
        },
        Q = (0, s.makeVar)(""),
        ee = (0, s.makeVar)(null),
        te = (0, s.makeVar)(null),
        ae = (0, s.makeVar)(null),
        re = (0, s.makeVar)(0),
        ne = (0, s.makeVar)(q.LIST_PLATES),
        se = (0, s.makeVar)(null),
        ie = (0, s.makeVar)(null),
        oe = (0, s.makeVar)(1),
        le = (0, s.makeVar)(null),
        ce = (0, s.makeVar)(!1),
        de = (0, s.makeVar)(!0),
        ue = (0, s.makeVar)(null),
        me = (0, s.makeVar)(E()),
        pe = (0, s.makeVar)(!1),
        fe = (0, s.makeVar)(!1),
        ge = (0, s.makeVar)(void 0),
        he = (0, s.makeVar)(""),
        be = (0, s.makeVar)([]),
        ye = (0, s.makeVar)(null),
        ve = (0, s.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        xe = (0, s.makeVar)(H),
        we = (0, s.makeVar)({}),
        Ee = (e, t) => {
          const a = {
            ...we(),
            [e]: t
          };
          we(a)
        },
        _e = (0, s.makeVar)(0),
        Se = (0, s.makeVar)(null),
        Te = (0, s.makeVar)(null),
        Ie = (0, s.makeVar)(null),
        Pe = () => {
          const e = (0, s.useReactiveVar)(ee),
            t = (0, s.useReactiveVar)(te),
            a = (0, s.useReactiveVar)(ae),
            n = (0, s.useReactiveVar)(re),
            l = (0, s.useReactiveVar)(ne),
            c = (0, s.useReactiveVar)(ye),
            d = (0, s.useReactiveVar)(se),
            u = (0, s.useReactiveVar)(ie),
            m = (0, s.useReactiveVar)(oe),
            p = (0, s.useReactiveVar)(le),
            f = (0, s.useReactiveVar)(me),
            g = (0, s.useReactiveVar)(ce),
            h = (0, s.useReactiveVar)(de),
            b = (0, s.useReactiveVar)(ue),
            y = (0, s.useReactiveVar)(pe),
            v = (0, s.useReactiveVar)(fe),
            x = (0, o.useLocale)(),
            [w, E] = (0, r.useState)(""),
            _ = (0, s.useReactiveVar)(ge),
            S = (0, s.useReactiveVar)(he),
            T = (0, s.useReactiveVar)(be),
            I = (0, s.useReactiveVar)(ve),
            P = (0, s.useReactiveVar)(xe),
            k = (0, s.useReactiveVar)(Q),
            N = (0, s.useReactiveVar)(we),
            R = (0, i.useScConfig)(),
            A = (0, s.useReactiveVar)(_e),
            O = (0, s.useReactiveVar)(Se),
            C = (0, s.useReactiveVar)(Te),
            j = (0, s.useReactiveVar)(Ie);
          return (0, r.useEffect)((() => {
            const e = (0, o.toScLocaleString)(x),
              t = `${document.location.pathname}${document.location.search}`,
              a = `${R.login}?returnUrl=${t}&lang=${e}`;
            E(a)
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
              pendingOrder: _,
              plates: T,
              realHeight: k,
              isExpanded: g,
              isLoggedIn: b,
              isMobile: f,
              isSceneLoaded: v,
              loginUrl: w,
              isOrderConfirmed: y,
              plateNumber: S,
              plateNumberStatus: I,
              plateStyles: P,
              refs: N,
              selectedStyle: A,
              selectedVehicle: O,
              three: C,
              vehicles: j
            },
            setCanvasDimensions: ee,
            setCharacter: te,
            setCurrentPlate: ae,
            setCurrentPlateIndex: re,
            setCurrentView: ne,
            setDeletedPlateIndex: ye,
            setError: se,
            setFirstPlateMesh: ie,
            setGridState: le,
            setIsLoading: de,
            setIsOrderConfirmed: pe,
            setPendingOrder: ge,
            setPlates: be,
            realHeightReactive: Q,
            setIsExpanded: ce,
            setIsLoggedIn: ue,
            setIsMobile: me,
            setIsSceneLoaded: fe,
            setGridScale: oe,
            setPlateNumber: he,
            setPlateNumberStatus: ve,
            setPlateStyles: xe,
            setRefs: Ee,
            setRefsInternal: we,
            setSelectedStyle: _e,
            setSelectedVehicle: Se,
            setThree: Te,
            setVehicles: Ie
          }
        };
      var ke = a(3322);
      const Ne = e => {
        let {
          t
        } = e;
        const {
          setRefs: a,
          state: n
        } = Pe(), {
          realHeight: s
        } = n, i = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          a(z.FOOTER, i)
        }), [i.current]), (0, ke.jsx)("div", {
          className: "dfb5b2acf94c1bee2c37",
          ref: i,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, ke.jsxs)("div", {
            className: "e85531fe4eae0ee625c1",
            children: [(0, ke.jsxs)("div", {
              className: "ed35c6f20ece33d1283f",
              children: [(0, ke.jsx)(h.LanguageSelector, {}), (0, ke.jsxs)("div", {
                className: "fd7206567c293e3054b0",
                children: [(0, ke.jsx)(h.A, {
                  to: "/corpinfo",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info",
                  children: t("Corporate")
                }), (0, ke.jsx)(h.A, {
                  to: "/privacy",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy",
                  children: t("Privacy")
                }), (0, ke.jsx)(h.A, {
                  onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie settings",
                  children: t("Cookie Settings")
                }), (0, ke.jsx)(h.A, {
                  to: "/cookies",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie policy",
                  children: t("Cookie Policy")
                }), (0, ke.jsx)(h.A, {
                  to: "/legal",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal",
                  children: t("Legal")
                }), (0, ke.jsx)(h.A, {
                  to: "/ccpa",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "CCPA Link",
                  "data-gtm-label": "View CCPA Info",
                  children: t("Do Not Sell My Info")
                })]
              })]
            }), (0, ke.jsx)(h.Rating, {
              className: "bb8ac13e4a077787384b",
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })
        })
      };
      var Re = a(6952),
        Ae = a(6368);
      const Oe = {
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
        Ce = e => {
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
          }), []), (0, ke.jsx)("primitive", {
            position: s,
            scale: [1, 1, 1],
            rotation: [0, 0, 0],
            object: i
          })
        };
      var je = a(7028);
      const Le = "#898989",
        Me = "#000000",
        Ve = ["0.05", "0.15", "0.4"],
        We = ["0.0", "0.5", "1.0"],
        De = ["0.299", "0.587", "0.114"],
        ze = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        Be = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= Y.sm ? t = 1 / 4 : a <= Y.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        He = {
          bumpMap: Be(),
          map: Be(),
          roughnessMap: Be()
        },
        Ye = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: n,
            plateIndex: s,
            position: o = [0, 0, 0],
            width: l = 2
          } = e;
          const {
            state: d,
            setCurrentView: u,
            setCurrentPlate: m,
            setCurrentPlateIndex: p,
            setRefs: f
          } = Pe(), {
            currentView: g,
            isLoggedIn: h,
            isSceneLoaded: b,
            pendingOrder: y,
            plateNumber: x,
            plates: w,
            isMobile: E,
            selectedStyle: _,
            gridScale: S
          } = d, [T, I] = (0, r.useState)(v(n.style.id)), P = [0, 0, 0], k = [1, 1, 1], [N] = (0, r.useState)(0 === n.index), O = (0, r.useRef)(), C = w.filter((e => {
            let {
              faux: t
            } = e;
            return !t
          })).length >= 30;
          (0, r.useEffect)((() => {
            O.current && 0 === O.current.userData.index && f(z.FIRST_PLATE_MESH, O)
          }), [O.current]);
          const j = (0, r.useRef)(),
            L = (0, r.useRef)(null),
            {
              track: M
            } = (0, i.useGtmTrack)(),
            V = {
              view_name: "license plate creator - landing page logged " + (h ? "in" : "out")
            },
            W = (0, r.useCallback)((e => {
              !n.index && C || R(e, g)
            }), [g]),
            D = (0, r.useCallback)((e => {
              if (u() === q.LIST_PLATES) {
                const t = 0 === e ? q.NEW_PLATE : q.VIEW_PLATE;
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
                }), m(w[e]), p(e)), u(t)
              }
            }), [w]),
            B = (0, r.useCallback)((e => {
              var t;
              N && (e.uniforms.saturation = $.saturation, e.uniforms.fade = $.fade, e.uniforms.shaderIndex = $.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == ${F}) {\n            float desaturationOpacity = gl_FragColor.a * (saturation + 0.3);\n            vec3 desaturationColor = vec3(\n                ${De[0]},\n                ${De[1]},\n                ${De[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, desaturationOpacity);\n\n        } else if (shaderIndex == ${U}) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=h?Ve:We)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [N, h, y]);
          return (0, r.useEffect)((() => {
            N && (n.plateText = x)
          }), [N ? x : null]), (0, r.useEffect)((() => {
            if (N && T && T.id !== _) {
              const e = v(_);
              I(e)
            }
          }), [N, _]), (0, r.useEffect)((() => {
            $.shaderIndex.value = h ? y ? U : F : U, j.current && (j.current.bumpScale = .015 * S, j.current.needsUpdate = !0)
          }), [j.current, y, h, S]), (0, r.useMemo)((() => {
            if (!b) return null;
            const [e, r, i] = (e => {
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete He.bumpMap, He.bumpMap = Be();
                  const a = He.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= Y.sm ? r = 1 / 4 : n <= Y.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const i = 5 * r;
                  return ze || (a.filter = `blur(${i}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), ze && je.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * i), new c.CanvasTexture(a.canvas)
                })(a, T),
                n = ((e, t) => {
                  delete He.map, He.map = Be();
                  const a = He.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= Y.sm ? r = 1 / 4 : n <= Y.md && (r = .5);
                  const s = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new c.CanvasTexture(a.canvas)
                })(a, T),
                s = E ? void 0 : ((e, t) => {
                  delete He.roughnessMap, He.roughnessMap = Be();
                  const a = He.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= Y.sm ? r = 1 / 4 : n <= Y.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = Me, a.fillStyle = Me, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = Le, a.fillStyle = Le, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new c.CanvasTexture(a.canvas)
                })(a, T);
              return [r, n, s]
            })(N ? x : n.plateText);
            return (0, ke.jsxs)("mesh", {
              name: J.LP,
              visible: !0,
              userData: {
                index: s
              },
              position: o,
              rotation: P,
              scale: k,
              ref: O,
              onClick: () => {
                h && (!n.index && C || D(n.index))
              },
              onPointerOver: E ? void 0 : () => {
                h && u() === q.LIST_PLATES && O.current && W(O.current)
              },
              onPointerOut: E ? void 0 : () => {
                var e;
                h && O.current && (e = O.current, !n.index && C || A(e))
              },
              children: [(0, ke.jsx)("planeBufferGeometry", {
                args: [l, a, l, a]
              }), (0, ke.jsx)("meshPhysicalMaterial", {
                alphaMap: n.alphaMap,
                bumpMap: e,
                opacity: 0,
                bumpScale: .015,
                depthTest: !1,
                envMap: t,
                envMapIntensity: X.envMapIntensity.plateView,
                map: r,
                metalness: .4,
                onBeforeCompile: N && B || void 0,
                ref: j,
                roughness: .3,
                roughnessMap: i,
                transparent: !0
              })]
            })
          }), [N ? L.current : void 0, N, h, E, b, n, N ? x : void 0, N ? T : void 0])
        },
        Ue = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const [s, o, l, d] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: u
          } = a, {
            gridOptions: m,
            gridPosition: p
          } = t, {
            bottomMarginAsRatio: f,
            columnGap: g,
            columns: h,
            isVertical: b,
            rowGap: y,
            topMarginAsRatio: v
          } = m, {
            state: x,
            realHeightReactive: w,
            setGridScale: E,
            setCurrentView: _
          } = Pe(), {
            currentView: S,
            gridScale: I,
            plates: P,
            isLoggedIn: k,
            isMobile: N,
            realHeight: R,
            refs: A,
            currentPlateIndex: O,
            three: j,
            canvasDimensions: L
          } = x, M = (0, r.useRef)(null), {
            camera: V,
            scene: W,
            gl: D
          } = (0, n.useThree)(), [B, H] = (0, r.useState)(new c.Vector3(p.x, p.y, p.z)), [Y, U] = (0, r.useState)(0), [F, $] = (0, r.useState)(0), [G, Z] = (0, r.useState)(0), [X, K] = (0, r.useState)(!0), [Q, ee] = (0, r.useState)(null), {
            track: te
          } = (0, i.useGtmTrack)(), ae = {
            view_name: "license plate creator - landing page logged " + (k ? "in" : "out")
          }, [re, ne] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            S === q.LIST_PLATES && te({
              ...ae,
              event: "virtualPageview",
              display_type: N ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (k ? "in" : "out")
            })
          }), [S]);
          const se = (0, r.useCallback)((() => {
            if (L) {
              const {
                width: e,
                height: a
              } = L, r = l * h + g * (h - 1), n = Math.abs(p.z) * Math.tan((0, Ae.Id)(V.fov / 2)) * 2, s = t.gridDimensions.margins.meters.top, i = t.gridDimensions.margins.meters.bottom, o = t.gridDimensions.width, c = o / r, d = t.gridDimensions.height, u = d / n;
              $((d - n + s + i).toFixed(4)), E(c), ee({
                width: e,
                height: a
              }), (e => {
                q.LIST_PLATES;
                const t = D.domElement.offsetHeight,
                  a = u * t + v * t + f * t,
                  r = T(),
                  n = A[z.ROOT]?.current;
                n && (n.style.height = `${a}px`), ne({
                  canvasHeight: t,
                  rootHeight: a
                }), w(`${Math.round(a)}px`);
                const s = Math.round(l * c / o * (D.domElement.offsetWidth - 2 * r));
                U(s)
              })()
            }
          }), [V.fov, L, Q, h, S, N, p, P, o, W, v, O, j]);
          (0, r.useEffect)((() => {
            p && H(p), se()
          }), [p, L]);
          const ie = (0, r.useMemo)((() => P?.map((e => {
              if (0 === Y) return null;
              const {
                index: t
              } = e, a = -1 * s / 2 + .251953125 * s, r = (b ? t % h * (s + g) : Math.floor(t / h) * (s + g)) + s / 2, n = (b ? Math.floor(t / h) * (o + y) * -1 : t % h * (o + y) * -1) + a;
              return (0, ke.jsx)(Ye, {
                envMap: u,
                height: d,
                position: [r, n, 0],
                plate: e,
                plateIndex: e.index,
                width: l
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [Y, P]),
            oe = (0, r.useCallback)((function() {
              if (!X || arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) {
                const e = A[z.ROOT].current,
                  t = document.body;
                t.style.removeProperty("overflow"), e && (e.style.touchAction = "auto"), C() || requestAnimationFrame((() => {
                  t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, G)
                })), K(!0)
              }
            }), [N, G, X]),
            le = (0, r.useCallback)((() => {
              if (X) {
                const e = A[z.ROOT].current,
                  t = document.body;
                if (e && (e.style.touchAction = "none", t.style.overflow = "hidden"), !C()) {
                  const e = window.scrollY;
                  requestAnimationFrame((() => {
                    t.style.position = "fixed", t.style.top = `-${e}px`, Z(e)
                  }))
                }
                K(!1)
              }
            }), [N, A, X]);
          (0, r.useEffect)((() => {
            S !== q.LIST_PLATES ? le() : oe()
          }), [S]), (0, r.useEffect)((() => () => {
            oe(!0)
          }), []);
          const ce = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (_() === q.LIST_PLATES || e) {
              const e = A[z.ROOT]?.current;
              if (!e || !re) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = re, r = N && P.length <= 2 ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = B.y + F * n;
              M?.current?.position?.set(B.x, Number(s.toFixed(3)), B.z)
            }
          }), [M.current, B, A, F, P, re, k, N]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ce(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [M.current, k, B, p, R, A, F, re]), (0, r.useEffect)((() => {
            if (!M.current || !W) return;
            const e = W.getObjectByName("Scene");
            M.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [M.current, W]), (0, r.useMemo)((() => (0, ke.jsx)("group", {
            name: J.LP_GRID,
            ref: M,
            position: p,
            scale: I,
            children: 0 !== Y && ie
          })), [I, ie, Y])
        },
        Fe = e => {
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
          return (0, ke.jsxs)(ke.Fragment, {
            children: [(0, ke.jsx)("pointLight", {
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
            }), d && (0, ke.jsx)("pointLightHelper", {
              light: c,
              sphereSize: 1
            })]
          })
        },
        $e = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, ke.jsxs)("group", {
            name: "Lights",
            children: [(0, ke.jsx)(Fe, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [X.light1.x, X.light1.y, X.light1.z],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, ke.jsx)(Fe, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [X.light2.x, X.light2.y, X.light2.z],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, ke.jsx)(Fe, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [X.light3.x, X.light3.y, X.light3.z],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, n.extend)({
        OrbitControls: Re.z
      });
      const Ge = {
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
      let Ze = window.innerWidth;
      const Xe = e => {
        let {
          loadedAssets: t
        } = e;
        const {
          state: a,
          setIsSceneLoaded: s,
          setThree: i,
          setGridState: o
        } = Pe(), {
          gridState: l,
          isSceneLoaded: d,
          plates: u,
          plateStyles: m,
          isLoggedIn: p,
          three: f,
          refs: h
        } = a, [b, y, v] = (0, n.useThree)((e => {
          let {
            camera: t,
            gl: a,
            scene: r
          } = e;
          return [t, a, r]
        })), x = (0, r.useRef)(), [E, _] = (0, r.useState)(!1), [S, I] = (0, r.useState)(null), P = () => {
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
          u.length && S && k(S.width)
        }), [S, u]), (0, r.useEffect)((() => (I({
          height: y.domElement.offsetHeight,
          width: y.domElement.offsetWidth
        }), () => {
          s(!1)
        })), []), (0, r.useEffect)((() => {
          t && u?.length && null !== p && _(!0)
        }), [t, u, p]), (0, r.useEffect)((() => {
          t && t?.environmentMap && m?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
        }), [t, m]);
        const k = (0, r.useCallback)((e => {
          const t = document.getElementById("list-plates-sidebar");
          if (!b || !t || !S) return;
          const a = T(),
            {
              plateWidth: r,
              plateHeight: n,
              columnGap: s,
              rowGap: i,
              depth: l
            } = Ge,
            d = l * Math.tan((0, Ae.Id)(17.5)),
            m = -1 * b.aspect * d,
            f = window.innerWidth < Y.lg ? t.offsetHeight + a : a,
            g = a,
            h = y.domElement.offsetWidth,
            v = y.domElement.offsetHeight,
            x = (() => {
              const e = window.innerWidth;
              switch (!0) {
                case e >= Y.xxl:
                  return w(11);
                case e >= Y.xl:
                  return w(12);
                case e >= Y.md:
                  return w(13);
                default:
                  return w(20)
              }
            })(),
            E = g / h,
            _ = m - m * E * 2,
            I = f / v,
            P = d - d * I * 2,
            k = x / v,
            N = new c.Vector3(_, P, -l),
            R = p ? (e => {
              const t = window.innerWidth;
              switch (!0) {
                case t >= Y.xxl:
                  return 3;
                case t >= Y.lg && t <= 1280:
                  return 1;
                case e >= 600:
                  return 2;
                default:
                  return 1
              }
            })(e) : 1,
            A = Math.ceil(u.length / R),
            O = r * R + s * (R - 1),
            C = n * Math.ceil(u.length / R) + i * (Math.ceil(u.length / R) - 1),
            j = Math.abs(N.z) * Math.tan((0, Ae.Id)(b.fov / 2)) * 2,
            L = E * (j * (h / v)),
            M = I * j,
            V = k * j,
            W = Math.abs(2 * N.x),
            D = W / O * C;
          o({
            gridPosition: N,
            gridOptions: {
              ...Ge,
              columns: R,
              rows: A,
              topMarginAsRatio: I,
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
        }), [u, h?.[z.SIDEBAR]?.current, b, S, p]);
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
        const N = (0, r.useCallback)(g().debounce((() => {
          const e = h[z.CANVAS_WRAP]?.current;
          if (!e) return;
          const t = h[z.CTA_WRAP]?.current,
            a = window.innerWidth;
          t && a !== Ze && (t.classList.remove(Oe.visible), Ze = a), I({
            width: e.offsetWidth,
            height: e.offsetHeight
          })
        }), 100), [b, h]);
        (0, r.useEffect)((() => (N(), window.addEventListener("resize", N, !0), () => window.removeEventListener("resize", N, !0))), [b, h]);
        const R = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, ke.jsx)(Ce, {
            position: [0, -4.05, -11.76],
            envMap: t.environmentMap,
            envModel: t.environmentModel,
            onLoad: P
          }) : null), [t]),
          A = (0, r.useMemo)((() => (0, ke.jsx)($e, {
            baseIntensity: .6,
            mapSize: 1024
          })), []),
          O = (0, r.useMemo)((() => (0, ke.jsx)(Ue, {
            gridState: l,
            loadedAssets: t
          })), [l, t]),
          C = (0, r.useMemo)((() => (0, ke.jsx)("orbitControls", {
            ref: x,
            screenSpacePanning: !0,
            args: [b, y.domElement],
            enableDamping: !0,
            enableZoom: !1,
            enablePan: !1,
            maxPolarAngle: Z.plateView.maxPolarAngle,
            minPolarAngle: Z.plateView.minPolarAngle,
            maxAzimuthAngle: Z.plateView.maxAzimuthAngle,
            minAzimuthAngle: Z.plateView.minAzimuthAngle,
            minDistance: -1,
            maxDistance: 100
          })), [b, x, y]);
        return (0, ke.jsxs)(ke.Fragment, {
          children: [A, R, E && l ? O : "", C]
        })
      };
      var qe = a(3468),
        Je = a(1467),
        Ke = a(621);
      const Qe = e => {
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
          } = Pe(), {
            currentView: p
          } = m, f = (0, r.useRef)(null), g = (0, r.useState)(V), h = d?.get() || 0, b = (0, Je.useSpring)({
            y: t ? h : u,
            config: {
              easing: Je.easings.easeInOutQuart,
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
          const E = (0, r.useCallback)((0, Ke.useDrag)((e => {
              if (p !== q.CONFIRM_ORDER) {
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
          return (0, r.useMemo)((() => (0, ke.jsxs)(Je.animated.div, {
            ...E(),
            ref: f,
            style: b ? {
              y: b.y
            } : void 0,
            className: "f8e313637e581e34230c",
            children: [(0, ke.jsx)("hr", {
              className: "a91faa3cca1b0eb5ec05",
              onClick: _,
              "aria-hidden": "true"
            }), l]
          })), [b.y.get(), _, l])
        },
        et = e => {
          let {
            onClick: t
          } = e;
          return (0, ke.jsx)("button", {
            type: "button",
            onClick: t,
            className: "c5cb6a9ee116fb9038cc",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        tt = () => (0, ke.jsx)("div", {
          className: "cfff519ec96d725939ed",
          "aria-label": "Los Santos Customs"
        }),
        at = e => {
          let {
            button: {
              buttonText: t,
              buttonIcon: a,
              isDisabled: r,
              onClick: n
            },
            closeModal: s
          } = e;
          return (0, ke.jsxs)("button", {
            className: "cf5bbe6406012d6190c3",
            disabled: r,
            onClick: () => (n && n(), void s()),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, ke.jsx)("p", {
              className: "e89f1318679b1cb5b981",
              children: t
            }), a && (0, ke.jsx)("div", {
              className: "bf51cc3522627ca3b7f9"
            })]
          })
        },
        rt = e => {
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
            } = Pe();
          return (0, r.useEffect)((() => {
            o && c.current && (c.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [o]), (0, ke.jsxs)("dialog", {
            ref: c,
            className: "c6fb99519e95f8eba227",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), l())
            })(e),
            children: [t && (0, ke.jsx)("i", {
              className: "c53fac5b3efe1b1fa592"
            }), (0, ke.jsxs)("div", {
              className: "c1c74e2339197a57da41",
              children: [(0, ke.jsx)("h3", {
                children: a
              }), n && (0, ke.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, ke.jsx)("div", {
              className: "d9f6892c7824cf07e386",
              children: s.splice(0, 2).map((e => (0, ke.jsx)(at, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (c.current?.close(), void l())
              }, e.buttonText)))
            })]
          })
        },
        nt = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, ke.jsxs)("div", {
            className: "efe5eaeb5559423002bc",
            children: [(0, ke.jsx)("p", {
              className: "c827db6a5956e0dea5a1",
              children: t
            }), (0, ke.jsx)("p", {
              className: "ee9baad67e97f93898e3",
              children: a
            })]
          })
        },
        st = {
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
        it = "visible",
        ot = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, s.useRockstarToken)(),
            {
              setCurrentView: n,
              setIsExpanded: l,
              setRefs: d,
              setError: u,
              state: m,
              setDeletedPlateIndex: p
            } = Pe(),
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
              three: I
            } = m,
            [P, N] = (0, r.useState)(b === q.VIEW_PLATE),
            [R, A] = (0, r.useState)([]),
            [C, j] = (0, r.useState)(!1),
            [L, M] = (0, r.useState)(!1),
            B = (0, r.useRef)(null),
            H = (0, r.useRef)(null),
            Y = (0, r.useRef)(null),
            U = (0, r.useRef)(null),
            F = (0, r.useRef)(35),
            $ = (0, r.useRef)(null),
            [Z, X] = (0, r.useState)(.4 * window.innerHeight),
            [K, Q] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [ee, te] = (0, r.useState)(0),
            ae = (0, r.useRef)(Z),
            [re, ne] = (0, r.useState)(null),
            se = (0, r.useRef)(null),
            ie = (0, r.useRef)(null),
            {
              track: oe
            } = (0, i.useGtmTrack)(),
            le = {
              view_name: "license plate creator - view plate"
            },
            ce = b === q.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            b !== q.VIEW_PLATE && L && M(!1)
          }), [b, L]);
          const de = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(f) || (de.current = f)
          }), [f]);
          const ue = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            b && (ue.current = b)
          }), [b]);
          const me = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            v && (me.current = v)
          }), [v]);
          const pe = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (ue.current !== q.VIEW_PLATE) return;
            const {
              renderer: r
            } = I;
            O({
              plateIndex: de.current,
              three: I,
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
          }), [I, f, b, x, S]);
          (0, r.useEffect)((() => {
            if (!I?.controls || !P) return;
            const {
              controls: e
            } = I, t = y().timeline({
              duration: _ ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              ease: _ ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            pe(t, v, !0)
          }), [v, I]);
          const fe = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!I?.camera || !B.current) return;
            const {
              camera: t,
              controls: a,
              renderer: r
            } = I;
            if (y().to(t.position, {
                x: Number(B.current.x),
                y: Number(B.current.y),
                z: Number(B.current.z),
                duration: G.toggleView.reset.duration,
                ease: G.toggleView.reset.ease,
                onStart: () => {
                  a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1)
                },
                onComplete: () => {
                  n(q.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.enableZoom = !1), ae.current = 0, e?.onComplete && e.onComplete()
                }
              }), _) {
              const e = r.domElement;
              y().to(e.style, {
                opacity: 1,
                duration: G.toggleView.reset.duration,
                ease: G.toggleView.reset.ease
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
          }), [_, I, B]);
          (0, r.useEffect)((() => {
            d(z.VIEW_PLATE, $)
          }), [$.current]), (0, r.useEffect)((() => {
            A(S?.[f]?.vehicles ?? [])
          }), [f, S]), (0, r.useEffect)((() => {
            N(b === q.VIEW_PLATE)
          }), [b]), (0, r.useEffect)((() => {
            I?.scene && U?.current && (e => {
              const {
                scene: t,
                controls: a
              } = I, r = [];
              t.traverse((e => {
                e.name === J.LP && r.push(e), e.userData.index === Number(f) && (H.current = e)
              }));
              const n = y().timeline({
                duration: _ ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                ease: _ ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              e === it ? (pe(n, me.current, !1), ie?.current && n.to([U.current, ie.current, _ ? void 0 : Y.current], {
                autoAlpha: 1,
                duration: G.sidebar.in.duration,
                ease: G.sidebar.in.ease,
                delay: G.sidebar.in.delay,
                onComplete: () => {
                  ie?.current && (ie.current.style.pointerEvents = "all"), Y?.current && (Y.current.style.pointerEvents = "all")
                }
              }, 0), I?.camera && _ && !F.current && (F.current = I.camera.fov)) : (Y.current && y().to(Y.current, {
                pointerEvents: "none"
              }), y().to(U.current.children, {
                pointerEvents: "none"
              }), y().to(U.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay
              }), !_ && Y.current ? (y().to(Y.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay
              }), y().to(ie.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay,
                onComplete: () => {
                  ie.current.style.pointerEvents = "none"
                }
              })) : y().to(ie.current, {
                autoAlpha: 0,
                duration: G.sidebar.out.duration,
                ease: G.sidebar.out.ease,
                delay: G.sidebar.out.delay,
                onComplete: () => {
                  ie.current.style.pointerEvents = "none"
                }
              }), a?.current && (a.current.minDistance = 0))
            })(P ? it : "hidden")
          }), [ie.current, I, P]), (0, r.useEffect)((() => {
            if (_ && $.current) {
              const e = $.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              te(a - 48 - t), X(a), Q(-1 * (.6 * e - 80))
            }
          }), [_, $.current]);
          const ge = (0, r.useRef)(null),
            he = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            ge.current = P
          }), [P]), (0, r.useEffect)((() => {
            he.current = I
          }), [I]);
          const be = (0, r.useCallback)(g().debounce((() => {
            if (!0 !== ge.current) return;
            const {
              renderer: e
            } = he.current;
            ue.current === q.VIEW_PLATE && (E() ? e.domElement.style.transform = `translateY(${Z/-2}px)` : e.domElement.style.transform = "translateY(0px)", Y.current.style.opacity = "1", Y.current.style.visibility = "visible", Y.current.style.pointerEvents = "all"), ue.current === q.CONFIRM_ORDER && (E() ? e.domElement.style.transform = `translateY(${K/1.5}px)` : e.domElement.style.transform = "translateY(0px)")
          }), 100), [_, P, b, I, K]);
          (0, r.useEffect)((() => (window.addEventListener("resize", be, !0), () => window.removeEventListener("resize", be, !0))), [_, P, b, I, K]);
          const ye = (0, ke.jsxs)(ke.Fragment, {
              children: [!_ && (0, ke.jsx)("hr", {
                className: st.drawerHandle,
                onClick: () => {
                  l(!w)
                },
                "aria-hidden": "true"
              }), (0, ke.jsx)("div", {
                className: st.plateInfo,
                children: (0, ke.jsxs)("section", {
                  className: st.vehiclesApplied,
                  children: [(0, ke.jsx)("label", {
                    className: R.length ? "" : `${st.noVehicles}`,
                    children: R.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, ke.jsx)("div", {
                    className: st.vehicles,
                    children: R.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, ke.jsx)(nt, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            ve = (0, r.useCallback)((e => {
              if (!I) return;
              const {
                drawerStateRef: t
              } = e, {
                renderer: a,
                camera: r
              } = I, n = a.domElement, s = {
                buttonWrapOpacity: se.current.style.opacity,
                canvasWrapOpacity: n.style.opacity,
                canvasHeight: n.offsetHeight,
                canvasTranslateY: Number(k(n).y),
                fov: r.fov
              }, i = {};
              t.current === V ? (i.buttonWrapOpacity = 0, i.canvasWrapOpacity = 0, i.canvasHeight = -K, i.canvasTranslateY = Z / -2, i.fov = F.current, n.style.pointerEvents = "none", se.current.style.pointerEvents = "none") : (t.current === W || t.current === D) && (i.buttonWrapOpacity = 1, i.canvasWrapOpacity = 1, i.canvasHeight = -K, i.canvasTranslateY = Z / -2, i.fov = F.current, n.style.pointerEvents = "all", se.current.style.pointerEvents = "all"), y().to(s, {
                buttonWrapOpacity: i.buttonWrapOpacity,
                canvasWrapOpacity: i.canvasWrapOpacity,
                canvasHeight: i.canvasHeight,
                canvasTranslateY: i.canvasTranslateY,
                fov: i.fov,
                duration: G.sidebar.mobile.drawerSnap.duration,
                ease: G.sidebar.mobile.drawerSnap.ease,
                onUpdate: () => {
                  n.style.opacity = s.canvasWrapOpacity, se.current.style.opacity = s.buttonWrapOpacity, r.fov = s.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${s.canvasTranslateY}px)`
                }
              })
            }), [I, Z, K]),
            xe = (0, r.useCallback)((e => {
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
              } = I, l = o.domElement, c = -K + Z - 48;
              if (t.dragging) {
                const e = (0, Ae.ii)(0, n, r.get()),
                  o = (0, Ae.t7)(0, 1, 1 - e);
                if (l.style.opacity = o, se.current.style.opacity = o, se.current.style.pointerEvents = r.get() >= 0 ? "all" : "none", se.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                  const e = (0, Ae.ii)(0, s, r.get()),
                    a = (0, Ae.t7)(F.current, 40, e);
                  i.fov = a;
                  const n = Number(k(l).y) + t.delta[1] / 2;
                  l.style.transform = `translateY(${n}px)`, i.updateProjectionMatrix()
                }
              } else {
                const e = {
                  buttonWrapOpacity: se.current.style.opacity,
                  canvasWrapOpacity: l.style.opacity,
                  fov: i.fov,
                  canvasHeight: l.offsetHeight,
                  canvasTranslateY: Number(k(l).y)
                };
                a.current < K / 2 ? (l.style.pointerEvents = "none", se.current.style.pointerEvents = "none", y().to(e, {
                  buttonWrapOpacity: 0,
                  canvasWrapOpacity: 0,
                  canvasHeight: c,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity
                  }
                })) : a.current > s / 2 ? (l.style.pointerEvents = "all", se.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: 40,
                  canvasHeight: c,
                  canvasTranslateY: -48,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                })) : (l.style.pointerEvents = "all", se.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: F.current,
                  canvasHeight: -K,
                  canvasTranslateY: Z / -2,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, se.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                }))
              }
            }), [I, se.current, K]),
            we = (0, r.useCallback)((e => {
              const t = T[z.UI]?.current;
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
                mobileSidebarHeight: Z,
                fov: F.current,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, se.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                },
                onComplete: () => {
                  s.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [T, I, Z]),
            Ee = (0, r.useCallback)((e => {
              if (!I?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === re && ne(r);
              const {
                renderer: n
              } = I;
              t.current.style.pointerEvents = "all";
              const s = {
                mobileSidebarHeight: Z,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              y().to(s, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: Z / 2,
                duration: G.sidebar.mobile.drawer.duration,
                ease: G.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), se.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, ie.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [re, I, Z]),
            _e = (0, r.useMemo)((() => _ ? (0, ke.jsx)(Qe, {
              isVisible: P,
              top: K,
              bottom: ee,
              onTap: ve,
              onDrag: xe,
              onHide: we,
              onShow: Ee,
              mobileSidebarHeight: Z,
              children: ye
            }) : (0, ke.jsx)("div", {
              ref: Y,
              className: st.sidebar,
              children: ye
            })), [se.current, ie.current, w, Z, _, P, T, Y.current, R, K, ee]);
          return (0, ke.jsxs)("div", {
            className: st.viewPlate,
            ref: $,
            children: [(0, ke.jsx)(rt, {
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
                      M(!0);
                      const {
                        error: t,
                        status: r
                      } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        bearerToken: a,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      if (t) throw Object.assign(new Error(""), t);
                      r && p(f), fe()
                    } catch (e) {
                      u(["api", e])
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
              showModal: C,
              onClose: () => j(!1)
            }), _e, (0, ke.jsxs)("div", {
              ref: U,
              className: st.ui,
              children: [(0, ke.jsx)(et, {
                onClick: fe
              }), (0, ke.jsx)(Je.animated.div, {
                ref: se,
                className: st.uiBottom,
                style: re ? {
                  y: re
                } : void 0,
                children: (0, ke.jsx)(tt, {})
              })]
            }), (0, ke.jsxs)("div", {
              className: st.deleteBtnContainer,
              ref: ie,
              children: [(0, ke.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: st.deleteBtn,
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
              }), h?.noDelete && (0, ke.jsx)("label", {
                className: st.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        lt = (0, o.withTranslations)((e => {
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
          }), (0, ke.jsx)("p", {
            className: "fbe02591dfe1e747a935 ae971d2586817570fa25 " + (!1 === r ? "e98c19a935da3321df72" : ""),
            children: n(o)
          })
        })),
        ct = {
          lpStyleOption: "fdb659ff7c0f2e33fda0",
          selected: "c5c9b2d5655a4e556a50",
          lpStyleOptionImage: "add00686bede52167de6"
        },
        dt = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: n,
            setSelectedStyle: s
          } = Pe(), {
            plates: i,
            selectedStyle: o
          } = n, l = (0, r.useCallback)((() => {
            H.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [i, t]);
          return (0, ke.jsx)("button", {
            className: [ct.lpStyleOption, o === t.id ? ct.selected : ""].join(" "),
            onClick: () => l(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, ke.jsx)("img", {
              className: ct.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        ut = (0, o.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: n
          } = e;
          const l = (0, s.useRockstarToken)(),
            {
              setCurrentView: c,
              setPlateNumber: d,
              setPlateNumberStatus: u,
              setError: m,
              setRefs: p,
              state: f
            } = Pe(),
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
            I = {
              view_name: "license plate creator - " + (h ? "create plate form" : "try lp editor")
            },
            P = (0, r.useRef)(null),
            k = (0, r.useRef)(null),
            N = (0, r.useRef)(null),
            R = (0, r.useRef)(null),
            A = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            p(z.NEW_PLATE_FORM, N)
          }), [N.current]), (0, r.useEffect)((() => {
            g === q.NEW_PLATE && document.activeElement === A.current && A.current?.setSelectionRange(w, w)
          }), [w]);
          const O = g === q.NEW_PLATE ? 0 : -1,
            C = (0, r.useCallback)((() => {
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
                  if (t(!1), e) throw Object.assign(new Error(""), e);
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
                  }), i && (c(q.CONFIRM_ORDER), T({
                    ...I,
                    event: "virtualPageview",
                    display_type: x ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  m(["api", e])
                }
              })()
            }), [l, h, y]);
          (0, r.useEffect)((() => {
            a && (a.current = C)
          }), [C, a]);
          const j = (0, r.useMemo)((() => b?.map((e => (0, ke.jsx)(dt, {
            style: e,
            tabIndex: O
          }, e.id)))), [b, g]);
          return (0, ke.jsxs)("form", {
            ref: N,
            className: "c03fbea909908002e429",
            onSubmit: e => {
              e.preventDefault(), A.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, ke.jsxs)("section", {
              children: [(0, ke.jsx)("label", {
                ref: P,
                children: n("lp.create.title")
              }), (0, ke.jsxs)("div", {
                ref: k,
                className: "f16c8dbd6025471f52d4",
                children: [(0, ke.jsx)("i", {
                  className: "" + (!1 === _ ? "a85e9791453fdcfdfaae" : "")
                }), (0, ke.jsx)("input", {
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: e => {
                    const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
                    d(t), E(e.target.selectionStart || 0), v.isValid || u({
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
                }), (0, ke.jsx)(lt, {
                  plateNumberStatus: v
                })]
              })]
            }), (0, ke.jsx)("hr", {
              className: "a88bd201bfcf6276af22"
            }), (0, ke.jsxs)("section", {
              children: [(0, ke.jsx)("label", {
                children: n("lp.create.bgselector")
              }), (0, ke.jsx)("div", {
                ref: R,
                className: "f7ff0013c2f3d7d85637",
                children: j
              })]
            })]
          })
        })),
        mt = e => {
          let {
            buttons: t,
            refName: a = z.SIDEBAR_BUTTONS,
            isLoading: n,
            tabIndex: s
          } = e;
          const i = (0, r.useRef)(null),
            {
              setRefs: o
            } = Pe();
          return (0, r.useEffect)((() => {
            o(a, i)
          }), [i.current]), (0, ke.jsx)("div", {
            className: "bc9136e36a81df297fc4",
            ref: i,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, ke.jsx)("button", {
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
        pt = "ce05d9898b38a31c3fe9",
        ft = "db3c4b65429b61ddff96",
        gt = (0, o.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            t: a
          } = e;
          const [n, s] = (0, r.useState)(!1), [o, l] = (0, r.useState)(!1), {
            state: c,
            setRefs: d
          } = Pe(), {
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
            d(z.TOGGLE_VIEW_BUTTON, g)
          }), [g.current]), (0, r.useEffect)((() => {
            u === q.NEW_PLATE && (n ? (p({
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
          }), [n, u]), (0, ke.jsxs)("button", {
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
            children: [(0, ke.jsx)("div", {
              className: pt,
              children: (0, ke.jsx)("p", {
                className: o ? ft : "",
                children: a("lp.create.plateview")
              })
            }), (0, ke.jsx)("div", {
              className: pt,
              children: (0, ke.jsx)("p", {
                className: o ? ft : "",
                children: a("lp.create.carview")
              })
            }), (0, ke.jsx)("span", {
              className: "ac1419f5f7d4f893d8e0"
            })]
          })
        })),
        ht = {
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
        bt = (0, o.withTranslations)((e => {
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
          } = Pe(), {
            currentView: p,
            isExpanded: f,
            refs: g,
            three: h,
            isMobile: v
          } = m, x = (0, r.useRef)(null), w = (0, r.useRef)(null), E = (0, r.useRef)(null), _ = (0, r.useRef)(null), T = (0, r.useRef)(null), {
            track: I
          } = (0, i.useGtmTrack)(), P = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(z.ORDER_BG, T)
          }), [T.current]);
          const k = g[z.CONFIRM_CONTENT]?.current,
            N = g[z.CONFIRM_SIDEBAR]?.current,
            R = g[z.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            A = g[z.CONFIRM_SIDEBAR_BUTTONS]?.current,
            O = g[z.NEW_PLATE_SIDEBAR]?.current,
            C = g[z.CANVAS_WRAP]?.current,
            j = g[z.SIDEBAR_BUTTONS]?.current,
            L = T.current,
            M = x.current,
            V = E.current,
            W = _.current,
            D = w.current,
            B = g[z.UI]?.current,
            H = g[z.NEW_PLATE_UI]?.current,
            Y = g[z.SIDEBAR]?.current,
            U = (0, r.useCallback)((() => {
              c(q.LIST_PLATES), I({
                ...P,
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
            if (f && p === q.LIST_PLATES) {
              const t = y().timeline({
                defaults: {
                  ease: G.transaction.confirmOrder.ease,
                  duration: G.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (y().to([e.domElement, Y], {
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
              }, 0), y().set([O, H], {
                x: 0
              }), y().set(N, {
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
                  }), a.position.set(r.x, r.y, r.z), i?.current && (i.current.minDistance = 0, i.current.target.set(l.x, l.y, l.z)), B && (a.fov = n, a.updateProjectionMatrix(), $.saturation.value = 0)
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
                      L.style.transform = `translateY(${s-e.drawerHeight}px`, o.set(e.drawerHeight), A && (A.style.pointerEvents = "none", A.style.opacity = String(1 - e.lerp), A.style.transform = `translateY(${100*e.lerp}%)`), R && (R.style.pointerEvents = "none", R.style.opacity = String(1 - e.lerp)), t.to(j, {
                        autoAlpha: 0
                      }, "<"), L.style.opacity = e.lerp
                    }
                  }, 0)
                }
              } else t.to(k, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(N, {
                left: 100 - c + "vw"
              }, 0).to(L, {
                x: 0
              }, 0).to(L, {
                autoAlpha: 1
              }, 0).to(N, {
                autoAlpha: 0,
                ease: G.transaction.fade.out.ease,
                duration: G.transaction.fade.out.duration
              }, 0).set(L, {
                pointerEvents: "all"
              });
              I({
                ...P,
                event: "virtualPageview",
                display_type: v ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, T.current, h, p, v ? o : void 0]), (0, ke.jsx)("div", {
            className: [ht.orderConfirmed, f ? ht.visible : ""].join(" "),
            children: (0, ke.jsx)("div", {
              ref: T,
              className: ht.background,
              children: (0, ke.jsxs)("div", {
                className: ht.content,
                children: [(0, ke.jsx)("h1", {
                  ref: x,
                  className: ht.contentHeading,
                  children: n("lp.success.title")
                }), (0, ke.jsxs)("div", {
                  ref: w,
                  className: ht.secondaryWrap,
                  children: [(0, ke.jsx)("p", {
                    ref: E,
                    className: ht.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: n("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, ke.jsx)("button", {
                    ref: _,
                    type: "button",
                    className: ht.backToPlatesButton,
                    onClick: () => {
                      U()
                    },
                    "aria-label": n("lp.success.cta"),
                    tabIndex: l,
                    children: (0, ke.jsx)("span", {
                      className: ht.ctaText,
                      children: n("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        }));
      var yt = a(2973),
        vt = a.n(yt);
      const xt = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        wt = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        Et = e => {
          let t, {
            type: a = B.SPINNING
          } = e;
          switch (a) {
            case B.THREE_DOTS:
              t = wt;
              break;
            case B.SPINNING:
            default:
              t = xt
          }
          return (0, ke.jsx)(vt(), {
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
        _t = (0, o.withTranslations)((e => {
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
          } = Pe(), {
            currentView: g,
            selectedVehicle: h,
            plates: b,
            three: x,
            isMobile: w,
            refs: E,
            vehicles: _,
            selectedStyle: T,
            isOrderConfirmed: I,
            isExpanded: P
          } = l, {
            selectedCharacterTuple: k
          } = (0, i.useRockstarUser)(), N = (0, s.useRockstarToken)(), R = g === q.CONFIRM_ORDER, [A, O] = (0, r.useState)(P), [C, j] = (0, r.useState)(!1), L = (0, r.useRef)(null), M = (0, r.useRef)(null), {
            track: V
          } = (0, i.useGtmTrack)(), W = {
            view_name: "license plate creator - confirm order"
          }, D = g === q.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p(z.CONFIRM_SIDEBAR, L)
          }), [L.current]), (0, r.useEffect)((() => {
            p(z.CONFIRM_CONTENT, M)
          }), [M.current]);
          const B = E[z.ORDER_BG]?.current,
            H = E[z.CONFIRM_CONTENT]?.current,
            Y = E[z.CONFIRM_SIDEBAR]?.current,
            U = E[z.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            F = E[z.CONFIRM_SIDEBAR_BUTTONS]?.current,
            $ = E[z.NEW_PLATE_SIDEBAR]?.current,
            Z = E[z.CANVAS_WRAP]?.current,
            X = E[z.SIDEBAR_BUTTONS]?.current,
            J = E[z.NEW_PLATE_UI]?.current;

          function K() {
            if (V({
                ...W,
                event: "virtualPageview",
                display_type: w ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(x?.camera && H && Y && Z && B)) return;
            const e = {
                ease: w ? G.sidebar.mobile.drawer.ease : G.transaction.confirmOrder.ease,
                duration: w ? G.sidebar.mobile.drawer.duration : G.transaction.confirmOrder.duration
              },
              t = y().timeline({
                defaults: {
                  ...e
                },
                onComplete: () => {
                  O(!1)
                }
              });
            y().set(X, {
              pointerEvents: "all"
            }), w ? t.to(X, {
              autoAlpha: 1
            }, "<") : (t.to(Y, {
              autoAlpha: 0
            }, 0), g === q.NEW_PLATE && t.to($, {
              autoAlpha: 1
            }, "<"), t.to([$, Z, J], {
              x: 0
            }, "<"), t.to(H, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            g === q.LIST_PLATES && A && K()
          }), [g, A]);
          const Q = (0, r.useCallback)((() => {
            (async () => {
              try {
                const e = v(T);
                if (!(N && h && e?.name && k)) return;
                const [t, a] = k, {
                  index: r
                } = h, n = {
                  vehicleIndex: r,
                  plateText: b?.[0]?.plateText,
                  plateStyle: e.name
                };
                j(!0);
                const {
                  error: s
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                  bearerToken: N,
                  fetchOptions: {
                    body: JSON.stringify(n),
                    method: "POST"
                  },
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (j(!1), s) throw Object.assign(new Error(""), s);
                u(!0);
                const {
                  error: i,
                  result: l
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                  bearerToken: N,
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
          }), [N, String(k), b?.[0]?.plateText, h, C, T]);
          (0, r.useEffect)((() => {
            if (g !== q.CONFIRM_ORDER || I) {
              if (w && !I) {
                y().set(X, {
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
                    F && (F.style.opacity = "" + (1 - e.lerp), F.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), y().to(Y, {
                  autoAlpha: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }), U && (U.style.pointerEvents = "none", y().to(U.style, {
                  opacity: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(x?.camera && H && Y && Z && B)) return;
              let e = S();
              w || 100 !== e || (e = 0);
              const t = y().timeline({
                  defaults: {
                    ease: G.transaction.confirmOrder.ease,
                    duration: G.transaction.confirmOrder.duration
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
              if (y().set(X, {
                  pointerEvents: "none"
                }), w && (a.ease = G.sidebar.mobile.drawer.ease, a.duration = G.sidebar.mobile.drawer.duration, a.delay = G.sidebar.mobile.drawer.duration / 2, r.ease = G.sidebar.mobile.drawer.ease, r.duration = G.sidebar.mobile.drawer.duration, t.to(Y, a, 0)), w) {
                if (F) {
                  F.style.pointerEvents = "all", y().set(F.style, {
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
                      F.style.opacity = e.lerp, F.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                U && (U.style.pointerEvents = "all", y().set(U.style, {
                  visibility: "visible"
                }), y().to(U.style, {
                  opacity: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                })), t.to(X, {
                  autoAlpha: 0
                }, "<")
              } else $ && Z && t.to([$, Z, J], {
                x: -1 * e + "vw"
              }, "<"), t.to(H, {
                x: 100 - e + "vw"
              }, "<"), t.to(Y, {
                autoAlpha: 1
              }, "<"), t.to($, {
                autoAlpha: 0
              }, "<"), t.set(B, {
                x: `${-100+e}vw`
              }, "<")
            }
            A && !R && I && u(!1)
          }), [x, g, w, F, I, U, S()]), (0, r.useEffect)((() => {
            g !== q.CONFIRM_ORDER && f(null)
          }), [_]);
          const ee = (0, r.useCallback)((e => {
              if (!_?.length) return;
              const t = _.find((t => {
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
            }), [_]),
            te = (0, ke.jsx)(mt, {
              refName: z.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: C,
                onClick: () => {
                  d(q.NEW_PLATE), K(), V({
                    ...W,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: t("lp.confirm.cancel").toLowerCase()
                  })
                }
              }, {
                buttonText: C ? (0, ke.jsx)(Et, {}) : t("lp.confirm.next"),
                isDisabled: !N || !h || C,
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
              isLoading: C,
              tabIndex: D
            });
          let ae;
          return w && (ae = U ? (0, qe.createPortal)(te, U) : null), (0, ke.jsx)("div", {
            className: "be866f32eab934537631",
            "aria-hidden": g !== q.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, ke.jsxs)("div", {
              className: "a09e457783ba70411b6a",
              ref: M,
              children: [(0, ke.jsx)("span", {}), (0, ke.jsxs)("div", {
                className: "bdb2b5b5d19f7f44f6d7",
                ref: L,
                children: [(0, ke.jsxs)("form", {
                  className: "e6e66ce12aa2d8d190ef",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, ke.jsxs)("div", {
                    className: "e5564bc6d848a683537c",
                    children: [(0, ke.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, ke.jsxs)("section", {
                      children: [(0, ke.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, ke.jsx)("div", {
                        className: "e7c896dad22669956489",
                        children: (0, ke.jsxs)("select", {
                          value: h?.id ?? "null",
                          onChange: ee,
                          required: !0,
                          tabIndex: D,
                          "aria-label": t("lp.confirm.selector"),
                          children: [(0, ke.jsx)("option", {
                            value: "null",
                            disabled: !0,
                            children: "--"
                          }), _?.map(((e, t) => {
                            let {
                              id: a,
                              manufacturer: r,
                              name: n
                            } = e;
                            return (0, ke.jsx)("option", {
                              value: a,
                              children: `${r} ${n}`
                            }, t)
                          }))]
                        })
                      }), (0, ke.jsx)("p", {
                        className: "d566190b33aa234ddd80",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, ke.jsx)("p", {
                    className: "d6bae7e0151e183d3293",
                    children: t("lp.confirm.info")
                  })]
                }), w ? ae : te]
              }), (0, ke.jsx)(bt, {
                drawerY: n,
                top: a,
                isVisible: I,
                vehicleModel: `${h?.manufacturer} ${h?.name}`,
                tabIndex: I ? D : -1
              })]
            })
          })
        })),
        St = "visible",
        Tt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            state: a,
            setCurrentView: n,
            setIsExpanded: s,
            setRefs: o
          } = Pe(), {
            currentView: l,
            gridScale: d,
            loginUrl: u,
            isLoggedIn: m,
            isMobile: p,
            isExpanded: f,
            plateNumber: g,
            plateNumberStatus: h,
            refs: b,
            three: v
          } = a, [x, w] = (0, r.useState)(0), [S, T] = (0, r.useState)(!1), [P, N] = (0, r.useState)(!1), [R, A] = (0, r.useState)(.4 * window.innerHeight), [C, j] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), L = (0, r.useRef)(R), [M, B] = (0, r.useState)(null), H = (0, r.useRef)(null), Y = (0, r.useRef)(null), U = (0, r.useRef)(null), F = (0, r.useRef)(!1), [K, Q] = (0, r.useState)(null), ee = (0, r.useRef)(K), te = (0, r.useRef)(null), ae = (0, r.useRef)(null), re = (0, r.useRef)(null), ne = (0, r.useRef)(null), se = (0, r.useRef)(null), ie = (0, r.useRef)(null), oe = (0, r.useRef)(null), le = (0, r.useRef)(null), ce = (0, r.useRef)(null), {
            track: de
          } = (0, i.useGtmTrack)(), ue = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            const e = l === q.NEW_PLATE || !(!E() || l !== q.CONFIRM_ORDER);
            S !== e && T(e)
          }), [l, E()]);
          const me = (0, r.useCallback)((e => {
            if (!v) return;
            const {
              scene: t,
              camera: a,
              controls: r,
              renderer: n
            } = v, s = t.getObjectByName("Scene");
            if (!s) return;
            const i = I(),
              o = !_() || p ? i * d : 1.6 * i * d,
              u = [];
            t.traverse((e => {
              0 === e.userData.index && (le.current = e, s.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === J.LP && u.push(e)
            }));
            const m = y().timeline({
              duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
              ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
              onStart: () => {
                r.current.minDistance = 0
              }
            });
            switch (e) {
              case St: {
                if (!r.current) return;
                const e = new c.Vector3;
                le?.current && le.current.getWorldPosition(e);
                const t = {
                  cameraPosition: {
                    start: (new c.Vector3).copy(a.position),
                    end: new c.Vector3(e.x, e.y, e.z + o)
                  },
                  controlsTarget: {
                    start: (new c.Vector3).copy(r.current.target),
                    end: e
                  },
                  plateOpacity: u.map(((e, t) => ({
                    start: e.material.opacity,
                    end: 0 === t ? 1 : 0
                  }))),
                  firstPlateSaturation: {
                    start: $.saturation.value,
                    end: 1
                  },
                  cameraFov: {
                    start: a.fov,
                    end: p && l === q.CONFIRM_ORDER ? 1.2 * U.current : U.current
                  }
                };
                p && (t.translateY = {
                  start: l === q.NEW_PLATE ? ce?.current?.offsetHeight : 0,
                  end: l === q.NEW_PLATE ? 0 : ce?.current?.offsetHeight
                }, t.startingDrawerHeight = H.current ? H.current.get() : 0, t.startingCanvasHeight = Number(k(n.domElement).y), t.canvasWidth = n.domElement.offsetWidth, t.canvasY = {
                  start: Number(k(n.domElement).y),
                  end: R / -2
                }, t.canvasYConfirmOrder = {
                  start: Number(k(n.domElement).y),
                  end: C / 1.5
                }, t.drawerHeight = {
                  start: H.current ? H.current.get() : 0,
                  end: l === q.NEW_PLATE ? 0 : C / (f ? 1 : 2)
                }, t.cameraFov = {
                  start: a.fov,
                  end: l === q.CONFIRM_ORDER ? 1.2 * U.current : U.current
                }, t.canvasOpacity = {
                  start: n.domElement.style.opacity,
                  end: 1
                });
                const s = {
                  current: 0
                };
                l === q.NEW_PLATE ? (m.to(s, {
                  current: 1,
                  duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                  ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = s, i = t.cameraPosition.start.clone().lerp(t.cameraPosition.end, e);
                    a.position.set(i.x, i.y, i.z);
                    const o = t.controlsTarget.start.clone().lerp(t.controlsTarget.end, e);
                    if (r.current.target.x = o.x, r.current.target.y = o.y, r.current.target.z = o.z, u.forEach(((a, r) => {
                        a.material && (a.material.opacity = (0, Ae.t7)(t.plateOpacity[r].start, t.plateOpacity[r].end, e))
                      })), $.saturation.value = (0, Ae.t7)(t.firstPlateSaturation.start, t.firstPlateSaturation.end, e), t.cameraFov.start !== t.cameraFov.end) {
                      const {
                        cameraFov: r
                      } = t;
                      a.fov = (0, Ae.t7)(r.start, r.end, e), a.updateProjectionMatrix()
                    }
                    if (p) {
                      if (ce.current) {
                        const a = (0, Ae.t7)(t.translateY.start, t.translateY.end, e);
                        ce.current.style.transform = `translateY(${a}px)`, ce.current.style.opacity = String(e), ce.current.style.pointerEvents = "all"
                      }
                      H.current && H.current.set((0, Ae.t7)(t.drawerHeight.start, t.drawerHeight.end, e));
                      const a = (0, Ae.t7)(t.canvasY.start, t.canvasY.end, e);
                      n.domElement.style.transform = `translateY(${a}px)`
                    }
                  },
                  onComplete: () => {
                    if (l === q.NEW_PLATE) {
                      const e = b[z.ROOT].current;
                      e && (e.style.touchAction = "none"), Y.current = new c.Vector3(a.position.x, a.position.y, a.position.z), re?.current?.children && y().to(re.current.children, {
                        pointerEvents: "all"
                      }), p && (n.domElement.style.touchAction = "none")
                    }
                  }
                }, 0), p && m.to(b[z.NEW_PLATE_FORM].current, {
                  autoAlpha: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  delay: G.sidebar.mobile.drawer.duration / 2,
                  onStart: () => {
                    ce.current && (ce.current.style.pointerEvents = "all", ce.current.style.visibility = "visible")
                  }
                }, 0), m.to([re.current, p ? void 0 : ae.current], {
                  autoAlpha: 1,
                  duration: G.sidebar.in.duration,
                  ease: G.sidebar.in.ease,
                  delay: G.sidebar.in.delay,
                  onStart: () => {
                    ne.current && (ne.current.style.transform = "translateY(0px)")
                  },
                  onComplete: () => {
                    p || y().set([ae.current, b[z.SIDEBAR_BUTTONS]?.current], {
                      pointerEvents: "all"
                    }), re.current && y().to(re.current.children, {
                      pointerEvents: "all"
                    })
                  }
                }, "<")) : l === q.CONFIRM_ORDER && (!0 === ee.current && we(), p && (m.to(s, {
                  current: 1,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = s;
                    if (ce.current) {
                      H.current && H.current.set((0, Ae.t7)(t.drawerHeight.start, t.drawerHeight.end, e)), a.fov = (0, Ae.t7)(t.cameraFov.start, t.cameraFov.end, e), a.updateProjectionMatrix(), n.domElement.style.opacity = (0, Ae.t7)(t.canvasOpacity.start, t.canvasOpacity.end, e), re?.current?.style && (re.current.style.opacity = String(1 - e));
                      const r = (0, Ae.t7)(t.translateY.start, t.translateY.end, e);
                      ce.current.style.transform = `translateY(${r}px)`, ce.current.style.pointerEvents = "none";
                      const s = (0, Ae.t7)(t.canvasYConfirmOrder.start, t.canvasYConfirmOrder.end, e);
                      n.domElement.style.transform = `translateY(${s}px)`
                    }
                  }
                }, 0), m.to(b[z.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (y().to([re.current.children, ae.current], {
                    pointerEvents: "none"
                  }), y().to(re.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), p) {
                  const e = {
                    transform: 0,
                    drawerHeight: H.current ? H.current.get() : 0,
                    fov: a.fov
                  };
                  y().to(e, {
                    translateY: ce?.current?.offsetHeight,
                    duration: G.sidebar.mobile.drawer.duration,
                    drawerHeight: R,
                    fov: U.current,
                    ease: G.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      ce.current && (H.current && H.current.set(e.drawerHeight), ce.current.style.transform = `translateY(${e.translateY}px)`, ce.current.style.pointerEvents = "none", a.fov = e.fov, a.updateProjectionMatrix())
                    }
                  })
                }
                if (l === q.CONFIRM_ORDER ? f || 1 == !ee.current && y().to(a.position, {
                    x: Number(Y.current.x),
                    y: Number(Y.current.y),
                    z: 0,
                    ease: G.transaction.confirmOrder.ease,
                    duration: G.transaction.confirmOrder.duration
                  }) : y().to(ae.current, {
                    autoAlpha: 0,
                    duration: G.sidebar.out.duration,
                    ease: G.sidebar.out.ease,
                    delay: G.sidebar.out.delay
                  }), l === q.LIST_PLATES) {
                  const e = b[z.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                r?.current && (r.current.minDistance = 0), ee.current = !1, Q(!1)
            }
          }), [l, v, p, d, M, C, H.current, ee.current]);
          (0, r.useEffect)((() => {
            b?.[z.SIDEBAR_BUTTONS]?.current && (ce.current = b[z.SIDEBAR_BUTTONS].current)
          }), [b]), (0, r.useEffect)((() => {
            o(z.NEW_PLATE, ie)
          }), [ie.current]), (0, r.useEffect)((() => {
            o(z.CONFIRM_SIDEBAR_BUTTONS_PORTAL, se)
          }), [se.current]), (0, r.useEffect)((() => {
            o(z.NEW_PLATE_SIDEBAR, ae)
          }), [ae.current]), (0, r.useEffect)((() => {
            o(z.NEW_PLATE_UI, re)
          }), [re.current]);
          const pe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            pe.current = v
          }), [v]);
          const fe = (0, r.useCallback)((() => {
              if (!v?.controls) return;
              const {
                controls: e,
                scene: t
              } = v;
              if (ee.current) {
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
                ye(t, d, !0)
              }
              const {
                renderer: a
              } = pe.current;
              S ? (l === q.NEW_PLATE && (E() ? a.domElement.style.transform = `translateY(${R/-2}px)` : a.domElement.style.transform = "translateY(0px)", ae.current && (ae.current.style.opacity = "1", ae.current.style.visibility = "visible", ae.current.style.pointerEvents = "all")), l === q.CONFIRM_ORDER && E() && (a.domElement.style.transform = `translateY(${C/1.5}px)`)) : l !== q.CONFIRM_ORDER || E() || (a.domElement.style.transform = "translateY(0px)")
            }), [E(), S, l, v, ae.current, d]),
            ge = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!le?.current || !Y.current || !v?.camera) return;
              de({
                ...ue,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "new plate",
                view_name: "license plate creator - new plate form"
              }), de({
                ...ue,
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
                x: Number(Y.current.x),
                y: Number(Y.current.y),
                z: Number(Y.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to(le.current.rotation, {
                x: 0
              }, "<").to(o, {
                intensity: 0
              }, "<").to([l, c], {
                intensity: .6
              }, "<").to(l.position, {
                x: X.light2.x,
                y: X.light2.y,
                z: X.light2.z
              }, "<").to(c.position, {
                x: X.light3.x
              }, "<").to(le.current.material, {
                envMapIntensity: X.envMapIntensity.plateView
              }, "<").set(le.current, {
                receiveShadow: !1
              }, .4).set(le.current.material, {
                depthTest: !1
              }, "<"), i.traverse((e => {
                e.material && y().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : G.toggleView.fadeOut.duration,
                  ease: G.toggleView.fadeOut.ease
                })
              }))
            }), [le.current, Y.current, v]);
          (0, r.useEffect)((() => {
            v?.scene && !U.current && (U.current = v.camera.fov)
          }), [U.current, v]), (0, r.useEffect)((() => {
            v?.scene && ce.current && me(S ? St : "hidden")
          }), [v, S, l === q.CONFIRM_ORDER]), (0, r.useEffect)((() => {
            if (ce?.current && p && ie.current) {
              const e = ie.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              w(a - 48 - ce.current.offsetHeight - t), A(a), j(-1 * (.6 * e - 80)), ce.current.style.transform = `translateY${ce.current.offsetHeight}px`
            }
          }), [ce.current, p, ie.current]);
          const he = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            l && (he.current = l), l === q.LIST_PLATES && ee.current && ge({}, !0)
          }), [l]);
          const be = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            d && (be.current = d)
          }), [d]);
          const ye = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (he.current !== q.NEW_PLATE && he.current !== q.CONFIRM_ORDER) return;
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
                e?.three?.camera && (Y.current = new c.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), re?.current?.children && y().to(re.current.children, {
                  pointerEvents: "all"
                }), p && (r.domElement.style.touchAction = "none")
              },
              tweenPosition: 0,
              isResize: a
            })
          }), [v, l]);
          (0, r.useEffect)((() => {
            fe()
          }), [d]);
          const ve = (0, r.useCallback)((e => {
              if (!v?.scene) return;
              const {
                drawerStateRef: t
              } = e;
              if (v) {
                const {
                  renderer: e,
                  camera: a
                } = v, r = e.domElement, n = {
                  buttonWrapOpacity: ne.current.style.opacity,
                  canvasWrapOpacity: r.style.opacity,
                  fov: a.fov,
                  canvasTranslateY: Number(k(r).y)
                }, s = {};
                t.current === V ? (s.buttonWrapOpacity = 0, s.canvasWrapOpacity = 0, s.fov = U.current, s.canvasTranslateY = R / -2, r.style.pointerEvents = "all", ne.current.style.pointerEvents = "all") : (t.current === W || t.current === D) && (s.buttonWrapOpacity = 1, s.canvasWrapOpacity = 1, s.fov = U.current, s.canvasTranslateY = R / -2, r.style.pointerEvents = "all", ne.current.style.pointerEvents = "all"), y().to(n, {
                  buttonWrapOpacity: s.buttonWrapOpacity,
                  canvasWrapOpacity: s.canvasWrapOpacity,
                  fov: s.fov,
                  canvasTranslateY: s.canvasTranslateY,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    r.style.opacity = n.canvasWrapOpacity, ne.current.style.opacity = n.buttonWrapOpacity, a.fov = n.fov, a.updateProjectionMatrix(), r.style.transform = `translateY(${n.canvasTranslateY}px)`
                  }
                })
              }
            }), [v, R]),
            xe = (0, r.useCallback)((e => {
              if (!v?.scene || !ce.current) return;
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
                const e = (0, Ae.ii)(0, n, r.get()),
                  o = (0, Ae.t7)(0, 1, 1 - e);
                if (l.style.opacity = o, ne.current.style.opacity = o, ne.current.style.pointerEvents = r.get() >= 0 ? "all" : "none", ne.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && i && a.current < s) {
                  const e = (0, Ae.ii)(0, s, r.get()),
                    a = ee.current ? 60 : 40,
                    n = (0, Ae.t7)(U.current, a, e);
                  i.fov = n, i.updateProjectionMatrix();
                  const o = Number(k(l).y) + t.delta[1] / 2;
                  l.style.transform = `translateY(${o}px)`
                }
              } else {
                const e = {
                  buttonWrapOpacity: ne.current.style.opacity,
                  canvasWrapOpacity: l.style.opacity,
                  fov: i.fov,
                  canvasTranslateY: Number(k(l).y)
                };
                a.current < n / 2 ? (ne.current.style.pointerEvents = "none", y().to(e, {
                  buttonWrapOpacity: 0,
                  canvasWrapOpacity: 0,
                  fov: ee.current ? 60 : 40,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ne.current.style.opacity = e.buttonWrapOpacity
                  }
                })) : a.current > s / 2 ? (l.style.pointerEvents = "all", ne.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  canvasTranslateY: -.5 * (48 + ce.current.offsetHeight),
                  fov: ee.current ? 60 : 40,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ne.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), l.style.transform = `translateY(${e.canvasTranslateY}px)`
                  }
                })) : Math.abs(a.current) > 0 && (l.style.pointerEvents = "all", ne.current.style.pointerEvents = "all", y().to(e, {
                  buttonWrapOpacity: 1,
                  canvasWrapOpacity: 1,
                  fov: U.current,
                  canvasTranslateY: R / -2,
                  duration: G.sidebar.mobile.drawerSnap.duration,
                  ease: G.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    l.style.opacity = e.canvasWrapOpacity, ne.current.style.opacity = e.buttonWrapOpacity, i.fov = e.fov, i.updateProjectionMatrix(), a.current > 0 && (l.style.transform = `translateY(${e.canvasTranslateY}px)`)
                  }
                }))
              }
            }), [v, ce.current, R]),
            we = (0, r.useCallback)((() => {
              if (!(v?.scene && v?.controls?.current && le && le?.current)) return;
              const {
                scene: e,
                camera: t,
                controls: a
              } = v, r = e.getObjectByName("Scene"), n = e.getObjectByName("Light1"), s = e.getObjectByName("Light2"), i = e.getObjectByName("Light3"), o = I(), l = !_() || p ? o * d : 1.6 * o * d;
              if (r && a && !F.current) {
                const e = [];
                if (r.traverse((t => {
                    t.material && (t.material.transparent = !0, t.material.mesh = t, "Banshee_Interior_LightMap" === t.material.name && (t.renderOrder = 99999), e.push(t.material))
                  })), ee.current) {
                  const o = new c.Vector3;
                  if (le.current.getWorldPosition(o), setTimeout((() => {
                      le.current.receiveShadow = !1, le.current.material.depthTest = !1
                    }), 400), !F.current) {
                    const c = {
                      camPositionX: t.position.x,
                      camPositionY: t.position.y,
                      camPositionZ: t.position.z,
                      controlsTargetX: a.current.target.x,
                      controlsTargetY: a.current.target.y,
                      controlsTargetZ: a.current.target.z,
                      plateRotationX: le.current.rotation.x,
                      light1Intensity: n.intensity,
                      light2Intensity: s.intensity,
                      light2PositionX: s.position.x,
                      light2PositionY: s.position.y,
                      light2PositionZ: s.position.z,
                      light3Intensity: i.intensity,
                      light3PositionX: i.position.x,
                      envMapIntensity: le?.current?.material?.envMapIntensity
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
                      light2PositionX: X.light2.x,
                      light2PositionY: X.light2.y,
                      light2PositionZ: X.light2.z,
                      light3Intensity: .6,
                      light3PositionX: X.light3.x,
                      envMapIntensity: X.envMapIntensity.plateView,
                      duration: G.toggleView.camera.duration,
                      ease: G.toggleView.camera.ease,
                      onStart: () => {
                        a.current.minDistance = 2, a.current.enableZoom = !1, F.current = !0, b[z.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = y().timeline({
                          duration: p ? G.sidebar.mobile.drawer.duration : G.clickPlate.duration,
                          ease: p ? G.sidebar.mobile.drawer.ease : G.clickPlate.ease
                        });
                        ye(e, d)
                      },
                      onUpdate: () => {
                        le.current.rotation.x = c.plateRotationX, le.current?.material && (le.current.material.envMapIntensity = c.envMapIntensity), n.intensity = c.light1Intensity, s.intensity = c.light2Intensity, s.position.set(c.light2PositionX, c.light2PositionY, c.light2PositionZ), i.intensity = c.light3Intensity, i.position.x = c.light3PositionX
                      },
                      onComplete: () => {
                        F.current = !1, r.visible = !1, a.current.maxPolarAngle = Z.plateView.maxPolarAngle, a.current.minPolarAngle = Z.plateView.minPolarAngle, a.current.maxAzimuthAngle = Z.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = Z.plateView.minAzimuthAngle, b[z.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                      }
                    });
                    const u = {
                      opacity: 1
                    };
                    y().to(u, {
                      opacity: 0,
                      duration: G.toggleView.fadeOut.duration,
                      ease: G.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        e.forEach((e => {
                          e.opacity = u.opacity
                        }))
                      }
                    })
                  }
                } else if (!F.current) {
                  const o = {
                    camPositionY: t.position.y,
                    camPositionZ: t.position.z,
                    controlsTargetZ: a.current.target.z,
                    plateRotationX: le.current.rotation.x,
                    light1Intensity: n.intensity,
                    light2Intensity: s.intensity,
                    light2PositionX: s.position.x,
                    light2PositionY: s.position.y,
                    light2PositionZ: s.position.z,
                    light3Intensity: i.intensity,
                    light3PositionX: i.position.x,
                    envMapIntensity: le?.current?.material?.envMapIntensity
                  };
                  y().to(o, {
                    camPositionY: t.position.y + 2.5 * d,
                    camPositionZ: t.position.z + (p ? 24 * d : 12 * d),
                    controlsTargetZ: a.current.target.z - 5 * d,
                    plateRotationX: -.16,
                    light1Intensity: .6,
                    light2Intensity: .2,
                    light2PositionX: X.light2.carView.x,
                    light2PositionY: X.light2.carView.y,
                    light2PositionZ: X.light2.carView.z,
                    light3Intensity: .6,
                    light3PositionX: X.light3.carView.x,
                    envMapIntensity: X.envMapIntensity.carView,
                    duration: G.toggleView.camera.duration,
                    ease: G.toggleView.camera.ease,
                    onStart: () => {
                      const e = p ? 52 * d : 26 * d;
                      a.current.enableZoom = !0, a.current.maxPolarAngle = Z.carView.maxPolarAngle, a.current.minPolarAngle = Z.carView.minPolarAngle, a.current.maxAzimuthAngle = Z.carView.maxAzimuthAngle, a.current.minAzimuthAngle = Z.carView.minAzimuthAngle, a.current.maxDistance = e, r.visible = !0, b[z.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none", F.current = !0
                    },
                    onUpdate: () => {
                      t.position.set(t.position.x, o.camPositionY, o.camPositionZ), a.current.target.z = o.controlsTargetZ, le.current.rotation.x = o.plateRotationX, le.current?.material && (le.current.material.envMapIntensity = o.envMapIntensity), n.intensity = o.light1Intensity, s.intensity = o.light2Intensity, s.position.set(o.light2PositionX, o.light2PositionY, o.light2PositionZ), i.intensity = o.light3Intensity, i.position.x = o.light3PositionX
                    },
                    onComplete: () => {
                      F.current = !1, a.current.minDistance = p ? 20 * d : 10 * d, b[z.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
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
                  }), y().to(le.current, {
                    duration: 0,
                    delay: .4,
                    onComplete: () => {
                      le.current.receiveShadow = !0, le.current.material.depthTest = !0
                    }
                  })
                }
                ee.current = !ee.current
              }
            }), [v, ee.current, le, le?.current, d]),
            Ee = (0, r.useCallback)((e => {
              if (!(v?.scene && ce?.current && ae.current && ne.current)) return;
              const t = b[z.UI]?.current;
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
                  mobileSidebarHeight: R,
                  fov: U.current,
                  submitOrderTranslateY: ce.current.offsetHeight,
                  duration: G.sidebar.mobile.drawer.duration,
                  ease: G.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${c.mobileSidebarHeight}px)`, o.current.style.opacity = c.opacity, ce.current.style.transform = `translateY(${c.submitOrderTranslateY}px)`, ne.current.style.opacity = c.opacity, s.style.height = c.height, i.set(c.mobileSidebarHeight), r && (r.fov = c.fov, r.updateProjectionMatrix(), n.render(a, r))
                  },
                  onComplete: () => {
                    s.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [b, ae.current, ce.current, v, R]),
            _e = e => {
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
              B(r), H.current = r, t.current.style.pointerEvents = "all";
              const o = {
                mobileSidebarHeight: R,
                opacity: t.current.style.opacity
              };
              y().to(o, {
                opacity: 1,
                mobileSidebarHeight: 0,
                duration: s,
                ease: i,
                onUpdate: () => {
                  t.current.style.opacity = o.opacity, t.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`, a.current = o.mobileSidebarHeight, r.set(a.current), ne.current.style.transform = `translateY(${o.mobileSidebarHeight}px)`
                }
              })
            },
            Se = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = h, r = P ? (0, ke.jsx)(Et, {}) : t("lp.create.next");
              return (0, ke.jsx)(mt, {
                buttons: [{
                  buttonText: m ? r : t("lp.create.signin"),
                  isDisabled: !!m && (P || !g || !e && g === a),
                  onClick: async () => {
                    te?.current?.(), m || (de({
                      ...ue,
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
                isVisible: [q.NEW_PLATE, q.CONFIRM_ORDER].includes(l),
                tabIndex: l === q.NEW_PLATE ? 0 : -1
              })
            }), [g, l, m, S, h, te.current, P]),
            Te = (0, r.useCallback)((() => {
              s(!f)
            }), [f]),
            Ie = (0, r.useMemo)((() => p ? (0, ke.jsxs)(Qe, {
              bottom: x,
              isVisible: S,
              onDrag: xe,
              onHide: Ee,
              onShow: _e,
              onTap: ve,
              top: C,
              drawerY: M,
              mobileSidebarHeight: R,
              children: [(0, ke.jsx)(ut, {
                validateFnRef: te,
                setIsLoading: N
              }), (0, ke.jsx)(_t, {
                top: C,
                drawerY: M
              })]
            }) : (0, ke.jsxs)("div", {
              ref: ae,
              className: "b3a55298ca91e26e9b33",
              children: [(0, ke.jsx)("hr", {
                className: "da92b2273d68a97e2a78",
                onClick: () => {
                  Te()
                },
                "aria-hidden": "true"
              }), (0, ke.jsx)(ut, {
                validateFnRef: te,
                setIsLoading: N
              }), Se]
            })), [g, x, f, p, S, ae.current, C, M, P, R]);
          return (0, ke.jsxs)("div", {
            ref: ie,
            className: "caf43b491abf74b06503",
            children: [Ie, (0, ke.jsxs)("div", {
              ref: re,
              className: "b36e465c1f658cb32f90",
              children: [(0, ke.jsx)(et, {
                onClick: () => {
                  ge({
                    onComplete: () => n(q.LIST_PLATES)
                  })
                }
              }), (0, ke.jsx)(Je.animated.div, {
                ref: ne,
                className: "a180f06a190df3e373ca",
                style: M ? {
                  y: M
                } : void 0,
                children: (0, ke.jsx)(gt, {
                  onToggleView: we
                })
              })]
            }), (0, ke.jsxs)("div", {
              ref: oe,
              className: "b04b9fd973ab818135a5",
              children: [p && Se, p && (0, ke.jsx)("div", {
                className: "b1913cd00efde6aa558c",
                ref: se
              })]
            })]
          })
        })),
        It = "eade32da81574d4b6ca7",
        Pt = "f09ca3dd068fb4f0cd0a",
        kt = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setRefs: a,
            state: n
          } = Pe(), {
            plates: s,
            isLoggedIn: i,
            isMobile: o
          } = n, l = (0, r.useRef)(null), c = (0, r.useRef)(null), d = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            a(z.SIDEBAR, l)
          }), [l.current, o]), (0, r.useEffect)((() => {
            a(z.PLATE_COUNT, d)
          }), [d.current, o]), (0, r.useEffect)((() => {
            a(z.SIDEBAR_BUTTONS_LOADING_ANIMATION, c)
          }), [c.current]), (0, ke.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: l,
            className: "e5e3abc19ffd80dd3bcf",
            children: [(0, ke.jsx)("div", {
              className: "d3fd7c681c3a0e077bfd",
              children: (0, ke.jsx)(tt, {})
            }), (0, ke.jsxs)("div", {
              className: "e34b13392437e67c024e",
              children: [(0, ke.jsxs)("div", {
                className: "a9630d965666bd9a0dca",
                children: [(0, ke.jsx)("h1", {
                  className: "ff661f315c83ec384d82",
                  children: t("lp.landing.title")
                }), (0, ke.jsx)("p", {
                  className: "be91057254fd4da9b396",
                  children: t("lp.landing.description")
                }), (0, ke.jsx)("div", {
                  className: "d46b09270858ddec7470",
                  children: (0, ke.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, ke.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), i && (0, ke.jsxs)("div", {
                className: "ece6d2c94e93da11315a",
                children: [(0, ke.jsx)("h5", {
                  children: t("lp.landing.plates")
                }), (0, ke.jsxs)("span", {
                  className: "a0d05ceada404843b055",
                  children: [(0, ke.jsxs)("span", {
                    className: "b2b7f5dbc7c91066f920",
                    children: [(0, ke.jsx)("span", {
                      ref: c,
                      className: "b00be5267e4e3e70e97f",
                      children: (0, ke.jsx)(Et, {
                        type: B.THREE_DOTS
                      })
                    }), (0, ke.jsx)("span", {
                      ref: d,
                      className: "c8177c0c51aa4a3017cf",
                      children: s?.filter((e => {
                        let {
                          faux: t = !1
                        } = e;
                        return !t
                      }))?.length ?? 0
                    })]
                  }), (0, ke.jsx)("span", {
                    className: "e2bf820b93754f519b30"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Nt = "eb0df59dc5cb7bf90dce",
        {
          lerp: Rt
        } = c.MathUtils,
        At = "visible",
        Ot = () => {
          const {
            state: e,
            setDeletedPlateIndex: t,
            setPlates: a
          } = Pe(), {
            currentView: n,
            three: s,
            isMobile: i,
            isLoading: o,
            refs: l,
            deletedPlateIndex: d,
            plates: u
          } = e, m = (0, r.useRef)(null), [p, f] = (0, r.useState)(n === q.LIST_PLATES), g = l?.[z.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            f(n === q.LIST_PLATES)
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
            } = G, E = l[z.FOOTER].current, _ = l[z.SIDEBAR].current, S = l[z.LOADING_SCREEN].current, T = l[z.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, I = l[z.PLATE_COUNT].current, P = [];
            b.traverse((e => {
              e.name === J.LP && P.push(e)
            }));
            const N = y().timeline({
              duration: i ? x.mobile.drawer.duration : v.duration,
              ease: i ? x.mobile.drawer.ease : v.ease
            });
            switch (e) {
              case At: {
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
                    plateOpacity: P.map((e => ({
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
                if (N.to(e, {
                    current: 1,
                    duration: i ? x.mobile.drawer.duration : v.duration,
                    ease: i ? x.mobile.drawer.ease : v.ease,
                    onComplete: () => {
                      i && (h.domElement.style.touchAction = "auto");
                      const e = l[z.CTA_WRAP]?.current;
                      e && e.classList.add(Oe.visible)
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
                      if (n.current.target.x = o.x, n.current.target.y = o.y, n.current.target.z = o.z, P.forEach(((e, a) => {
                          e.material && (e.material.opacity = Rt(s.plateOpacity[a].start, s.plateOpacity[a].end, t))
                        })), $.saturation.value = Rt(s.firstPlateSaturation.start, s.firstPlateSaturation.end, t), i) {
                        const e = Rt(s.canvasTranslateY.start, s.canvasTranslateY.end, t);
                        if (h.domElement.style.transform = `translateY(${e}px)`, m.current) {
                          const e = Rt(s.drawerHeight.start, s.drawerHeight.end, t);
                          m.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), "number" == typeof d) {
                  const e = P.find((e => e.userData.index === d));
                  if (e) {
                    N.to(e.material, {
                      opacity: 0,
                      duration: w.duration,
                      ease: w.ease
                    }, ">");
                    const r = P.filter((e => e.userData.index >= d)).map((e => e.position)),
                      n = r.map((e => e.clone()));
                    N.to(r.slice(1), {
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
                N.to(E, {
                  autoAlpha: 1,
                  duration: i ? x.mobile.footer.in.duration : x.in.duration,
                  ease: i ? x.mobile.footer.in.ease : x.in.ease,
                  delay: i ? x.mobile.footer.in.delay : x.in.delay
                }, 0), N.to(_, {
                  autoAlpha: 1,
                  duration: i ? x.mobile.fadeHeader.in.duration : x.in.duration,
                  ease: i ? x.mobile.fadeHeader.in.ease : x.in.ease,
                  delay: i ? x.mobile.fadeHeader.in.delay : x.in.delay,
                  onStart: () => {
                    S && (o ? (S.classList.add(Nt), T && T.classList.add(It), I && I.classList.remove(Pt)) : (S.classList.remove(Nt), T && T.classList.remove(It), I && I.classList.add(Pt)))
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
            l && l?.[z.FOOTER]?.current && l?.[z.SIDEBAR]?.current && l?.[z.UI]?.current && l?.[z.LOADING_SCREEN]?.current && m.current && s?.scene && s?.controls && h(p ? At : "hidden")
          }), [l, p, m.current, s, i, o, l?.[z.FOOTER]?.current, l?.[z.SIDEBAR]?.current]), (0, ke.jsx)("div", {
            ref: m,
            className: "fe2f56dce20f2cc23636",
            children: (0, ke.jsx)(kt, {})
          })
        },
        Ct = e => {
          let {
            isMobile: t
          } = e;
          const {
            setRefs: a,
            state: n
          } = Pe(), {
            plates: s,
            isLoggedIn: i,
            refs: o
          } = n, l = (0, r.useRef)(null), c = o[z.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              a(z.UI, l)
            }), [l.current]), !s) return null;
          let d;
          return t && (d = c ? (0, qe.createPortal)((0, ke.jsx)(Ot, {}), c) : null), (0, ke.jsxs)("div", {
            ref: l,
            className: "cf4e3950dff0bf598a46",
            children: [i && !t && (0, ke.jsx)(_t, {}), t ? d : (0, ke.jsx)(Ot, {}), i && (0, ke.jsx)(ot, {}), (0, ke.jsx)(Tt, {})]
          })
        },
        jt = {
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
        Lt = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: n,
            t: l
          } = e;
          const [c, d] = (0, r.useState)(!1), u = (0, s.useRockstarToken)(), {
            setPlates: m,
            setPendingOrder: p,
            setPlateNumber: f,
            setSelectedStyle: g,
            setError: h,
            state: b
          } = Pe(), {
            character: y,
            plates: v,
            currentView: w
          } = b, {
            track: E
          } = (0, i.useGtmTrack)(), _ = {
            view_name: "license plate creator - landing page logged in"
          }, S = w === q.LIST_PLATES ? 0 : -1, T = (0, r.useCallback)((() => {
            (async () => {
              if (!u || !y) return;
              const [e] = y, {
                error: t
              } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/order", {
                bearerToken: u,
                fetchOptions: {
                  method: "DELETE"
                },
                query: {
                  platform: e
                }
              });
              if (t) return void h(["api", t]);
              const a = [K, ...v.slice(1, v.length)];
              m(a), p(null), f(""), g(x(K.style.name).id), E({
                ..._,
                event: "cta_cancel",
                event_category: "cta",
                event_action: "cancel",
                text: `modal: ${l("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${l("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, y, v]);
          return (0, ke.jsxs)("div", {
            className: [jt.orderInProgressCTA, n ? "" : jt.hidden].join(" "),
            children: [(0, ke.jsx)("h1", {
              className: jt.contentHeading,
              children: l("lp.inprogress.title")
            }), (0, ke.jsx)("p", {
              className: jt.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: l("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${jt.vehicleName}>${t}</span>`)
              }
            }), (0, ke.jsxs)("div", {
              className: jt.buttonWrap,
              children: [(0, ke.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": l("lp.inprogress.edit"),
                tabIndex: S,
                children: (0, ke.jsx)("span", {
                  className: jt.ctaText,
                  children: l("lp.inprogress.edit")
                })
              }), (0, ke.jsx)("button", {
                type: "button",
                onClick: () => d(!0),
                "aria-label": l("lp.inprogress.cancel"),
                tabIndex: S,
                children: (0, ke.jsx)("span", {
                  className: jt.ctaText,
                  children: l("lp.inprogress.cancel")
                })
              })]
            }), (0, ke.jsx)(rt, {
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
        Mt = e => {
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
          return (0, ke.jsx)("div", {
            style: {
              width: `${a}px`,
              height: a / 2 + "px",
              pointerEvents: "none"
            },
            children: (0, ke.jsxs)("div", {
              className: [Oe.loggedOutCTA, r !== q.LIST_PLATES ? Oe.hidden : ""].join(" "),
              children: [(0, ke.jsx)("button", {
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
                className: [Oe.signIn, r !== q.LIST_PLATES ? Oe.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, ke.jsx)("span", {
                  className: Oe.ctaText,
                  children: c("lp.landing.signup")
                })
              }), (0, ke.jsx)("button", {
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
                className: [Oe.tryWithoutSigningIn, Oe.firstLoad, r !== q.LIST_PLATES ? Oe.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, ke.jsx)("span", {
                  className: Oe.ctaText,
                  children: c("lp.landing.tryit")
                })
              })]
            })
          })
        },
        Vt = e => {
          let {
            t
          } = e;
          const {
            state: a,
            setCurrentView: n,
            setCurrentPlate: s,
            setCurrentPlateIndex: o,
            setRefs: l
          } = Pe(), {
            currentView: c,
            gridState: d,
            isLoggedIn: u,
            loginUrl: m,
            pendingOrder: p,
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
          const [x, w] = (0, r.useState)(null), [E, _] = (0, r.useState)(null), S = g[z.FIRST_PLATE_MESH], T = g[z.ROOT], I = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = g[z.SIDEBAR];
            if (!(e?.current && T?.current && d?.gridOptions && E)) return;
            const t = e.current,
              a = {
                x: h ? 0 : t.offsetWidth,
                y: 0
              },
              r = N(E.index, T.current, Number(b.replace("px", "")), d, a);
            w(r)
          }), [d, T?.current, E, g, I.current, b]);
          const {
            track: k
          } = (0, i.useGtmTrack)(), O = {
            view_name: "license plate creator - landing page logged " + (u ? "in" : "out")
          }, C = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            l(z.CTA_WRAP, I)
          }), [I.current]);
          const j = c === q.LIST_PLATES ? 0 : -1,
            L = (0, r.useCallback)((e => {
              if (n() === q.LIST_PLATES) {
                const t = 0 === e ? q.NEW_PLATE : q.VIEW_PLATE;
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
                })), s(f[e]), o(e), n(t)
              }
            }), [f]),
            M = (0, r.useCallback)((e => {
              R(e, c)
            }), [c]),
            V = (0, r.useMemo)((() => x ? (0, ke.jsx)(Mt, {
              plateData: E,
              plateWidthInPixels: x.width,
              currentView: c,
              loginUrl: m,
              inputTabIndex: j,
              track: k,
              trackingPresets: O,
              onClickPlate: L,
              t
            }) : null), [c, m, x]),
            W = (0, r.useMemo)((() => void 0 !== f ? P(p, f) ? (0, ke.jsx)(Lt, {
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
              isVisible: c === q.LIST_PLATES
            }) : f.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30 ? (0, ke.jsxs)("div", {
              className: [Oe.maxPlatesReached, c !== q.LIST_PLATES ? Oe.hidden : ""].join(" "),
              children: [(0, ke.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === f.length ? null : (0, ke.jsxs)("button", {
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
              className: [Oe.createNewPlate, c !== q.LIST_PLATES ? Oe.hidden : ""].join(" "),
              ref: C,
              tabIndex: j,
              children: [(0, ke.jsx)("span", {
                className: `${Oe.ctaText} ${y?Oe.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, ke.jsx)("div", {
                className: Oe.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [c, p, g, x, f, h]),
            D = (0, r.useMemo)((() => void 0 !== p && x ? (0, ke.jsx)("div", {
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
            }) : null), [c, p, x, g, W, h]);
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
            return (0, ke.jsx)("div", {
              ref: I,
              className: Oe.CTAWrap,
              style: {
                top: a,
                left: r,
                bottom: s,
                right: n,
                width: e,
                height: t
              },
              children: u ? D : V
            })
          }), [x, E, d, u, c, W, f, h])
        },
        Wt = e => {
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
            } = Pe(),
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
          }), []), o ? (0, ke.jsxs)("div", {
            className: "edb361b16208ea39b04d",
            children: [(0, ke.jsxs)("div", {
              className: "f989292c56d125a42b05",
              children: [(0, ke.jsxs)("div", {
                className: "d8a0031e9fbf468e335f",
                children: [(0, ke.jsx)("i", {}), (0, ke.jsx)("h4", {
                  children: m[o] || t("lp.error.unexpected.description")
                }), c?.code && (0, ke.jsxs)("div", {
                  className: "e79427410b0638c42413",
                  children: [(0, ke.jsx)("p", {
                    children: `Code: ${c.code}`
                  }), c?.logId && (0, ke.jsx)("p", {
                    children: `LogID: ${c?.logId}`
                  })]
                })]
              }), (0, ke.jsx)(u.NavLink, {
                to: "character" !== o ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, ke.jsx)("button", {
                  className: "e93e0cb9f21eac83e021",
                  type: "button",
                  tabIndex: 0,
                  children: (0, ke.jsx)("span", {
                    className: "b0922946a512c5c777b2",
                    children: p[o]
                  })
                })
              })]
            }), (0, ke.jsx)("div", {
              className: "d7b9f55b7895c5fc08c6"
            })]
          }) : null
        },
        Dt = () => {
          const {
            state: e,
            setRefs: t
          } = Pe(), {
            refs: a,
            isMobile: n
          } = e, s = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            s && t(z.LOADING_SCREEN, s)
          }), [s]);
          const i = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            if (n && a?.[z.SIDEBAR]?.current && i.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                n = a?.[z.SIDEBAR].current.offsetHeight,
                s = n + (r - n) / 2 - t / 2;
              i.current && (i.current.style.top = `${s}px`)
            } else i.current && (i.current.style.top = "unset")
          }), [n, a]), (0, ke.jsx)("div", {
            ref: s,
            className: "a76020cf52b63db690ab",
            children: (0, ke.jsx)("div", {
              ref: i,
              className: "c62ab050cb79d2037711",
              children: (0, ke.jsx)(Et, {})
            })
          })
        },
        zt = e => {
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
          } = Pe(), {
            track: u
          } = (0, i.useGtmTrack)(), m = {
            view_name: "license plate creator - landing page logged " + (c ? "in" : "out")
          };
          return (0, ke.jsx)("button", {
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
              }), o(t), l(a), s(q.VIEW_PLATE)
            }
          })
        },
        Bt = () => {
          const {
            state: {
              gridState: e,
              plates: t,
              realHeight: a,
              currentView: n,
              refs: s,
              isMobile: i
            }
          } = Pe(), [o, l] = (0, r.useState)([]);
          return (0, r.useEffect)((() => {
            const r = s[z.ROOT]?.current,
              n = s?.[z.SIDEBAR]?.current,
              o = [];
            r && n && e && (t.forEach(((t, s) => {
              if (s) {
                const t = N(s, r, Number(a.replace("px", "")), e, i ? void 0 : {
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
          }), [e, t, a, s[z.ROOT]?.current?.offsetHeight]), o.length ? (0, ke.jsx)(ke.Fragment, {
            children: t.filter(((e, t) => t)).map(((e, t) => (0, ke.jsx)(zt, {
              plate: e,
              index: t,
              details: o[t],
              tabIndex: n === q.LIST_PLATES ? 0 : -1
            }, e.plateText + e.vehicles.toString())))
          }) : null
        },
        Ht = (0, o.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: f,
            setCharacter: h,
            setCurrentView: b,
            setError: y,
            setIsLoading: v,
            setIsLoggedIn: w,
            setIsMobile: _,
            setPendingOrder: S,
            setPlateNumber: T,
            setPlates: I,
            setRefs: k,
            setSelectedStyle: N,
            setVehicles: R,
            state: A
          } = Pe(), {
            isLoggedIn: O,
            error: C,
            plates: j,
            pendingOrder: L,
            isMobile: M,
            three: V,
            isLoading: W
          } = A, D = (0, s.useRockstarToken)(), {
            setCustomFooter: B
          } = (0, l.useRockstarLocalState)(), {
            loggedIn: Y,
            selectedCharacterTuple: U
          } = (0, i.useRockstarUser)(), F = (0, r.useRef)(null), $ = (0, r.useRef)(null), G = (0, r.useRef)(null), [Z, X] = (0, r.useState)(null), [J] = (0, u.useSearchParams)(), [Q, ee] = (0, r.useState)(!1);
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
              ee(!0)
            }
          }), []);
          const te = (0, r.useCallback)(g().debounce((() => {
            if (V?.renderer) {
              const {
                renderer: e
              } = V, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              f({
                width: t,
                height: a
              })
            }
            _(E())
          }), 100), [V]);
          (0, r.useEffect)((() => (te(), window.addEventListener("resize", te, !0), () => window.removeEventListener("resize", te, !0))), [V]), (0, r.useEffect)((() => ((0, l.setFreezeUserShouldSeeMore)(!0), B(!0), () => {
            (0, l.setFreezeUserShouldSeeMore)(!1), B(!1), b(q.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            k(z.CANVAS_WRAP, F)
          }), [F.current]), (0, r.useEffect)((() => {
            k(z.ROOT, $)
          }), [$.current]), (0, r.useEffect)((() => {
            k(z.MOBILE_SIDEBAR_PORTAL_TARGET, G)
          }), [G.current]), (0, r.useEffect)((() => {
            if (!Q || "webgl" === C || "browser" === C) return;
            y(null), h(U), b(q.LIST_PLATES), S(null);
            const e = (Y ? [] : [K]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== O && (I(e), !1 === O && v(!1)), R([]), (async () => {
              try {
                Y && v(!0);
                const e = y();
                if (!D || null === U || e) return;
                if (!1 === U) return void y(["character"]);
                const [t, a] = U, {
                  error: r = null,
                  result: n
                } = await (0, o.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  bearerToken: D,
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
                    bearerToken: D,
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
                  bearerToken: D,
                  query: {
                    platform: t
                  }
                });
                if (d) throw Object.assign(new Error(""), d);
                const m = P(u, j);
                let p = [K, ...s];
                p = p.map(((e, t) => ({
                  ...e,
                  index: t
                }))), m ? (S(u), N(K.style.id)) : S(null), T(K.plateText), v(!1), I(p)
              } catch (e) {
                y(["api", e]), v(!1)
              }
            })()
          }), [typeof D, String(U), O, Q]), (0, r.useEffect)((() => {
            P(L, j) && (N(x(L.plateStyle).id), T(L.plateText))
          }), [L, j]), (0, r.useEffect)((() => {
            w(!!Y)
          }), [Y]), (0, r.useEffect)((() => {
            if (Z || !H || C || !Q) return;
            const e = J.get("envUrl") || a(3924),
              t = new c.LoadingManager((() => {
                X({
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
              f = H.map((e => {
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
          }), [Z, H, C, Q]);
          const ae = (0, r.useMemo)((() => (0, ke.jsx)(n.Canvas, {
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
            children: (0, ke.jsx)(Xe, {
              loadedAssets: Z
            })
          })), [Z]);
          return Q && null !== Y ? C ? (0, ke.jsx)(Wt, {
            t
          }) : (0, ke.jsxs)("div", {
            ref: $,
            className: "bbf483f378bf9b124fa4",
            children: [M && (0, ke.jsx)("div", {
              className: "bf1276a16c42d8d88c6b",
              ref: G,
              children: (0, ke.jsx)(Dt, {
                isLoading: W
              })
            }), (0, ke.jsxs)("div", {
              className: "e679d5c0c7e82b869590",
              children: [(0, ke.jsx)(Ct, {
                isMobile: M
              }), (0, ke.jsxs)("div", {
                className: "d171b6e11feaaa0e6b49",
                ref: F,
                children: [ae, !M && (0, ke.jsx)(Dt, {
                  isLoading: W
                })]
              })]
            }), (0, ke.jsx)("span", {
              className: "c23379ba67d2aa3b2d3d"
            }), (0, ke.jsx)(Vt, {
              t
            }), (0, ke.jsx)(Bt, {}), (0, ke.jsx)(Ne, {
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