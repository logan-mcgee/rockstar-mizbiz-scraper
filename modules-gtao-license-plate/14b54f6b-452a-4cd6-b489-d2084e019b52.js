! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "14b54f6b-452a-4cd6-b489-d2084e019b52", e._sentryDebugIdIdentifier = "sentry-dbid-14b54f6b-452a-4cd6-b489-d2084e019b52")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [712], {
    50712: (e, t, a) => {
      a.d(t, {
        c: () => fa
      });
      var r = a(51664),
        n = a(41272);
      const s = JSON.parse('{"us":{"lpe_sidebar_total_owned_plates":"{total} owned plates out of a maximum of {max}"},"de":{"lpe_sidebar_total_owned_plates":"Nummernschilder in Besitz: {total} von {max}"},"es":{"lpe_sidebar_total_owned_plates":"Tienes {total} matrículas de un máximo de {max}"},"mx":{"lpe_sidebar_total_owned_plates":"Tienes {total} placas de un máximo de {max}."},"fr":{"lpe_sidebar_total_owned_plates":"{total} plaques possédées sur le maximum de {max}"},"it":{"lpe_sidebar_total_owned_plates":"Targhe possedute: {total}/{max}"},"jp":{"lpe_sidebar_total_owned_plates":"最大{max}枚のうち{total}枚のプレートを所有"},"kr":{"lpe_sidebar_total_owned_plates":"최대 {max}개의 번호판 중 {total}개 소유"},"pl":{"lpe_sidebar_total_owned_plates":"Liczba posiadanych tablic: {total} z {max}"},"br":{"lpe_sidebar_total_owned_plates":"Tem {total} placas de um máximo de {max}"},"ru":{"lpe_sidebar_total_owned_plates":"Количество номерных знаков, которыми вы владеете: {total} из {max}"},"hans":{"lpe_sidebar_total_owned_plates":"已拥有 {total} 张车牌（最多 {max} 张）"},"tw":{"lpe_sidebar_total_owned_plates":"擁有 {total} 個車牌（最多 {max} 個）"}}');
      var o = a(1328),
        l = a(33052),
        i = a(42836),
        c = a(42708),
        d = a(45792),
        u = a(3061),
        m = a(68224),
        p = a(49976),
        f = a(57013),
        g = a(6176),
        b = a(55200),
        y = a(73660),
        h = a.n(y),
        x = a(9860),
        v = a(67356),
        w = a.n(v);
      const E = e => H.find((t => {
          let {
            id: a
          } = t;
          return a === e
        })),
        _ = e => H.find((t => {
          let {
            name: a
          } = t;
          return a.toLowerCase() === e.toLowerCase()
        })),
        P = e => e * parseFloat(getComputedStyle(document.documentElement).fontSize),
        S = () => window.innerWidth < F.lg,
        k = () => window.innerHeight > .75 * window.innerWidth,
        T = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= F.xxl:
              return 25;
            case e >= F.xl:
              return 30;
            case e >= 1440:
              return 32.5;
            case e >= 1280:
              return 35;
            case e >= F.lg:
              return 40;
            default:
              return 100
          }
        },
        C = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= F.xl:
              return P(4);
            case e >= 1440:
              return P(3);
            default:
              return P(2)
          }
        },
        R = () => {
          const e = window.innerWidth;
          switch (!0) {
            case e >= F.xl:
              return 4;
            case e >= 1280:
              return 4.5;
            case e >= F.lg:
              return 5;
            case e >= F.md:
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
          columns: o,
          rows: l,
          plateHeight: i,
          plateWidth: c,
          rowGap: d,
          columnGap: u
        } = r.gridOptions, {
          top: m,
          left: p,
          bottom: f
        } = r.gridDimensions.margins.pixels, g = Math.floor(e / o), b = e % o, y = i * l + d * (l - 1), h = c * o + u * (o - 1), x = s - n.x - 2 * p, v = a - n.y - m - f, w = v * (i / y), E = x * (c / h), _ = g * (i + d) / y, P = {
          x: x * (b * (c + u) / h) + p + n.x,
          y: v * _ + m + n.y
        };
        return {
          rect: {
            top: P.y,
            left: P.x,
            right: P.x + E,
            bottom: P.y + w,
            center: {
              x: P.x + E / 2,
              y: P.y + w / 2
            }
          },
          height: w,
          width: E
        }
      }
      const A = (e, t) => {
          t === fe.LIST_PLATES && (document.body.style.cursor = "pointer")
        },
        L = e => {
          document.body.style.cursor = "auto", w().to(e.scale, {
            x: 1,
            y: 1,
            z: 1,
            duration: q.plateHover.duration,
            ease: q.plateHover.ease
          })
        };

      function j(e, t) {
        const {
          plateIndex: a,
          timeline: r,
          three: n,
          gridScale: s
        } = e, {
          onComplete: o,
          tweenPosition: l,
          onStart: i,
          is3D: c
        } = t;
        if (Number.isNaN(a) || !n || !r || !s || !n?.controls?.current) return null;
        const {
          scene: d,
          camera: u,
          controls: p
        } = n, f = R(), g = !k() || S() ? f * s : 1.6 * f * s, b = [];
        let y = null;
        d.traverse((e => {
          e.name === ge.LP && b.push(e), e.userData.index === a && (y = e)
        }));
        const h = new m.Vector3;
        y && y.getWorldPosition(h);
        const x = {
            cameraPosition: {
              start: (new m.Vector3).copy(u.position),
              end: new m.Vector3(h.x, h.y, h.z + g)
            },
            controlsTarget: {
              start: (new m.Vector3).copy(p.current.target),
              end: h
            },
            plateOpacity: b.map(((e, t) => ({
              start: e.material.opacity,
              end: b[t].userData.index === a ? 1 : 0
            })))
          },
          v = {
            current: 0
          };
        let w = 0;
        return t.isResize || (w = S() ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration), r.to(v, {
          current: 1,
          duration: w,
          ease: S() ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = v, t = x.cameraPosition.start.clone().lerp(x.cameraPosition.end, e);
            u.position.set(t.x, t.y, t.z);
            const a = x.controlsTarget.start.clone().lerp(x.controlsTarget.end, e);
            p.current.target.x = a.x, p.current.target.y = a.y, p.current.target.z = a.z
          },
          onStart: i ? () => {
            i()
          } : void 0,
          onComplete: o ? () => {
            o(e)
          } : void 0
        }, l || 0), v.current = 0, r.to(v, {
          current: 1,
          duration: S ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
          ease: S ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
          onUpdate: () => {
            const {
              current: e
            } = v;
            b.forEach(((t, a) => {
              t.material && c && (t.material.opacity = m.MathUtils.lerp(x.plateOpacity[a].start, x.plateOpacity[a].end, e))
            }))
          }
        }, "<")
      }

      function M() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
      }
      const V = "GTALicensePlatesRegular",
        D = 620,
        W = a(88568),
        Y = "initial",
        B = "top",
        z = "bottom",
        U = {
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
      let $;
      $ = [{
        id: 0,
        name: "eCola",
        displayName: "eCola",
        alphaImageUrl: W,
        albedoImageUrl: a(4164),
        roughnessImageUrl: a(76160),
        bumpImageUrl: a(34888),
        previewUrl: a(4236),
        image: null,
        fontColor: "#FFFFFF",
        fontSize: D,
        fontName: V,
        selected: !1,
        isXmas2023Plate: !0
      }, {
        id: 1,
        name: "sprunk",
        displayName: "Sprunk",
        alphaImageUrl: W,
        albedoImageUrl: a(94736),
        roughnessImageUrl: a(33988),
        bumpImageUrl: a(79120),
        previewUrl: a(45092),
        image: null,
        fontColor: "#FFFFFF",
        fontSize: D,
        fontName: V,
        selected: !1,
        isXmas2023Plate: !0
      }, {
        id: 2,
        name: "BlueWhite2",
        displayName: "Blue on White 2",
        alphaImageUrl: W,
        albedoImageUrl: a(93572),
        roughnessImageUrl: a(19252),
        bumpImageUrl: a(23964),
        previewUrl: a(22552),
        image: null,
        fontColor: "#2C317E",
        fontSize: D,
        fontName: V,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 3,
        name: "YellowBlack",
        displayName: "Yellow on Black",
        alphaImageUrl: W,
        albedoImageUrl: a(2876),
        roughnessImageUrl: a(82912),
        bumpImageUrl: a(94888),
        previewUrl: a(44124),
        image: null,
        fontColor: "#D29D17",
        fontSize: D,
        fontName: V,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 4,
        name: "OrangeBlue",
        displayName: "Orange on Blue",
        alphaImageUrl: W,
        albedoImageUrl: a(6216),
        roughnessImageUrl: a(82912),
        bumpImageUrl: a(94888),
        previewUrl: a(55468),
        image: null,
        fontColor: "#CD7600",
        fontSize: D,
        fontName: V,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 5,
        name: "BlueWhite1",
        displayName: "Blue on White 1",
        alphaImageUrl: W,
        albedoImageUrl: a(72500),
        roughnessImageUrl: a(82912),
        bumpImageUrl: a(94888),
        previewUrl: a(1112),
        image: null,
        fontColor: "#2C317E",
        fontSize: D,
        fontName: V,
        selected: !1,
        isXmas2023Plate: !1
      }, {
        id: 6,
        name: "BlueWhite3",
        displayName: "Blue on White 3",
        alphaImageUrl: W,
        albedoImageUrl: a(61580),
        roughnessImageUrl: a(12124),
        bumpImageUrl: a(90372),
        previewUrl: a(75224),
        image: null,
        fontColor: "#2C317E",
        fontSize: D,
        fontName: V,
        selected: !1,
        isXmas2023Plate: !1
      }];
      const H = $,
        F = {
          sm: 430,
          md: 768,
          lg: 1024,
          xl: 1920,
          xxl: 2560
        },
        G = {
          saturation: {
            value: 0
          },
          shaderIndex: {
            value: 0
          }
        },
        q = {
          plateHover: {
            duration: .25,
            ease: v.Power1.easeOut
          },
          clickPlate: {
            duration: .9,
            ease: v.Power4.easeInOut
          },
          deletePlate: {
            duration: .6,
            ease: v.Power4.easeInOut,
            delay: .005
          },
          sidebar: {
            in: {
              duration: .35,
              ease: v.Power2.easeIn,
              delay: .65
            },
            out: {
              duration: .3,
              ease: v.Power2.easeIn,
              delay: 0
            },
            mobile: {
              drawer: {
                duration: .9,
                ease: v.Power4.easeInOut
              },
              drawerSnap: {
                duration: .4,
                ease: v.Power4.easeOut
              },
              fadeHeader: {
                in: {
                  duration: .6,
                  ease: v.Power2.easeInOut,
                  delay: .3
                },
                out: {
                  duration: .7,
                  ease: v.Power2.easeInOut
                }
              },
              footer: {
                in: {
                  duration: .4,
                  ease: v.Cubic.easeIn,
                  delay: .9
                },
                out: {
                  duration: .4,
                  ease: v.Cubic.easeOut
                }
              }
            }
          },
          toggleView: {
            camera: {
              duration: .75,
              ease: v.Cubic.easeInOut
            },
            fadeIn: {
              duration: .5,
              ease: v.Power2.easeIn
            },
            fadeOut: {
              duration: .5,
              ease: v.Power2.easeIn
            },
            reset: {
              duration: .375,
              ease: v.Cubic.easeInOut
            }
          },
          transaction: {
            confirmOrder: {
              duration: .9,
              ease: v.Power3.easeInOut
            },
            fade: {
              in: {
                duration: .4,
                ease: v.Cubic.easeIn
              },
              out: {
                duration: .4,
                ease: v.Cubic.easeOut
              },
              landingPage: {
                duration: 1.15,
                ease: v.Cubic.easeInOut
              }
            }
          },
          plateShimmer: {
            duration: 2,
            ease: v.Power2.easeOut
          },
          accessibilePlate: {
            duration: .5,
            ease: v.Power2.easeIn
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
        Z = -9.72,
        K = 5,
        J = -10.68,
        Q = 10.4,
        ee = 5,
        te = 4.52,
        ae = {
          x: 0,
          y: 14.4,
          z: 4.9
        },
        re = -4.52,
        ne = 10,
        se = 6.8,
        oe = {
          x: -14.52
        },
        le = -15,
        ie = 7,
        ce = 4.52,
        de = {
          x: 6,
          y: 5,
          z: 5
        },
        ue = .6,
        me = .4,
        pe = .3,
        fe = {
          LIST_PLATES: "list",
          VIEW_PLATE: "view",
          NEW_PLATE: "new",
          CONFIRM_ORDER: "confirm-order"
        },
        ge = {
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
          style: _("BlueWhite2"),
          vehicles: []
        },
        ye = (0, l.makeVar)(""),
        he = (0, l.makeVar)([]),
        xe = (0, l.makeVar)(null),
        ve = (0, l.makeVar)(null),
        we = (0, l.makeVar)(null),
        Ee = (0, l.makeVar)(0),
        _e = (0, l.makeVar)(fe.LIST_PLATES),
        Pe = (0, l.makeVar)(null),
        Se = (0, l.makeVar)(null),
        ke = (0, l.makeVar)(null),
        Te = (0, l.makeVar)(1),
        Ce = (0, l.makeVar)(null),
        Re = (0, l.makeVar)(!1),
        Ie = (0, l.makeVar)(!1),
        Ne = (0, l.makeVar)(!0),
        Oe = (0, l.makeVar)(null),
        Ae = (0, l.makeVar)(S()),
        Le = (0, l.makeVar)(!1),
        je = (0, l.makeVar)(!0),
        Me = (0, l.makeVar)(!1),
        Ve = (0, l.makeVar)(0),
        De = (0, l.makeVar)(fe.LIST_PLATES),
        We = (0, l.makeVar)(void 0),
        Ye = (0, l.makeVar)(""),
        Be = (0, l.makeVar)([]),
        ze = (0, l.makeVar)([]),
        Ue = (0, l.makeVar)(!1),
        $e = (0, l.makeVar)(!!S()),
        He = (0, l.makeVar)(!1),
        Fe = (0, l.makeVar)({
          isValid: !0,
          isMalformed: !1,
          isProfane: !1,
          isReserved: !1,
          statusPlateNumberBasis: ""
        }),
        Ge = (0, l.makeVar)(H),
        qe = (0, l.makeVar)({}),
        Xe = (e, t) => {
          const a = {
            ...qe(),
            [e]: t
          };
          qe(a)
        },
        Ze = (0, l.makeVar)(be.style?.id),
        Ke = (0, l.makeVar)(null),
        Je = (0, l.makeVar)(null),
        Qe = (0, l.makeVar)(null),
        et = () => {
          const e = (0, l.useReactiveVar)(he),
            t = (0, l.useReactiveVar)(xe),
            a = (0, l.useReactiveVar)(ve),
            n = (0, l.useReactiveVar)(we),
            s = (0, l.useReactiveVar)(Ee),
            o = (0, l.useReactiveVar)(_e),
            c = (0, l.useReactiveVar)(Pe),
            u = (0, l.useReactiveVar)(Se),
            m = (0, l.useReactiveVar)(ke),
            p = (0, l.useReactiveVar)(Te),
            f = (0, l.useReactiveVar)(Ce),
            g = (0, l.useReactiveVar)(Re),
            b = (0, l.useReactiveVar)(Ae),
            y = (0, l.useReactiveVar)(Ie),
            h = (0, l.useReactiveVar)(Ne),
            x = (0, l.useReactiveVar)(Oe),
            v = (0, l.useReactiveVar)(Le),
            w = (0, l.useReactiveVar)(Me),
            E = (0, l.useReactiveVar)(je),
            _ = (0, l.useReactiveVar)(Ve),
            P = (0, l.useReactiveVar)(De),
            S = (0, d.useLocale)(),
            [k, T] = (0, r.useState)(""),
            C = (0, l.useReactiveVar)(We),
            R = (0, l.useReactiveVar)(Ye),
            I = (0, l.useReactiveVar)(Be),
            N = (0, l.useReactiveVar)(ze),
            O = (0, l.useReactiveVar)(Fe),
            A = (0, l.useReactiveVar)(Ge),
            L = (0, l.useReactiveVar)(ye),
            j = (0, l.useReactiveVar)(qe),
            M = (0, i.useScConfig)(),
            V = (0, l.useReactiveVar)(Ze),
            D = (0, l.useReactiveVar)(Ke),
            W = (0, l.useReactiveVar)($e),
            Y = (0, l.useReactiveVar)(Ue),
            B = (0, l.useReactiveVar)(Je),
            z = (0, l.useReactiveVar)(Qe),
            U = (0, l.useReactiveVar)(He);
          return (0, r.useEffect)((() => {
            const e = (0, d.toScLocaleString)(S),
              t = `${document.location.pathname}${document.location.search}`,
              a = `${M.login}?returnUrl=${t}&lang=${e}`;
            T(a)
          }), []), {
            state: {
              accessiblePlates: e,
              canvasDimensions: t,
              character: a,
              currentPlate: n,
              currentPlateIndex: s,
              currentView: o,
              deletedPlateIndex: c,
              error: u,
              firstPlateMesh: m,
              isLoading: h,
              isScrollEnabled: E,
              gridScale: p,
              gridState: f,
              lastScrollY: _,
              pendingOrder: C,
              plates: I,
              plateTextures: N,
              realHeight: L,
              is3D: g,
              isExpanded: y,
              isLoggedIn: x,
              isMobile: b,
              isSceneLoaded: w,
              loginUrl: k,
              isOrderConfirmed: v,
              lastView: P,
              plateNumber: R,
              plateNumberStatus: O,
              plateStyles: A,
              refs: j,
              selectedStyle: V,
              selectedVehicle: D,
              shouldForce2D: W,
              shouldRenderScene: Y,
              three: B,
              vehicles: z,
              xmas23PlatesAllowed: U
            },
            setAccessiblePlates: he,
            setCanvasDimensions: xe,
            setCharacter: ve,
            setCurrentPlate: we,
            setCurrentPlateIndex: Ee,
            setCurrentView: _e,
            setDeletedPlateIndex: Pe,
            setError: Se,
            setFirstPlateMesh: ke,
            setGridState: Ce,
            setIsLoading: Ne,
            setIsLoggedIn: Oe,
            setIsOrderConfirmed: Le,
            setLastScrollY: Ve,
            setLastView: De,
            setPendingOrder: We,
            setPlates: Be,
            realHeightReactive: ye,
            setIs3D: Re,
            setIsExpanded: Ie,
            setIsMobile: Ae,
            setIsSceneLoaded: Me,
            setIsScrollEnabled: je,
            setGridScale: Te,
            setPlateNumber: Ye,
            setPlateNumberStatus: Fe,
            setPlateStyles: Ge,
            setPlateTextures: ze,
            setRefs: Xe,
            setRefsInternal: qe,
            setSelectedStyle: Ze,
            setSelectedVehicle: Ke,
            setShouldForce2D: $e,
            setShouldRenderScene: Ue,
            setThree: Je,
            setVehicles: Qe,
            setXmas23PlatesAllowed: He
          }
        };
      var tt = a(95240);
      const at = e => {
        let {
          t
        } = e;
        const {
          setRefs: a,
          state: n
        } = et(), {
          realHeight: s
        } = n, o = (0, r.useRef)(null);
        return (0, r.useEffect)((() => {
          a(U.FOOTER, o)
        }), [o.current]), (0, tt.jsx)("div", {
          className: "rockstargames-modules-gtao-license-plateb6e8553eec1a920ae9f7612fc67f679d",
          ref: o,
          style: {
            display: s ? "block" : "none"
          },
          children: (0, tt.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platea42faae94ba9f609acbd4f25fe7040df",
            children: [(0, tt.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platebaaac365214984fcde58c80e665b93a5",
              children: [(0, tt.jsx)(x.LanguageSelector, {}), (0, tt.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateb1ab2aefcb2ea7b94f3b16e8751de23e",
                children: [(0, tt.jsx)(x.A, {
                  to: "/corpinfo",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Corporate Info",
                  children: t("Corporate")
                }), (0, tt.jsx)(x.A, {
                  to: "/privacy",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Privacy",
                  children: t("Privacy")
                }), (0, tt.jsx)(x.A, {
                  onClick: () => window.OneTrust?.ToggleInfoDisplay(),
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie settings",
                  children: t("Cookie Settings")
                }), (0, tt.jsx)(x.A, {
                  to: "/cookies",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Cookie policy",
                  children: t("Cookie Policy")
                }), (0, tt.jsx)(x.A, {
                  to: "/legal",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Legal",
                  children: t("Legal")
                }), (0, tt.jsx)(x.A, {
                  to: "/ccpa",
                  "data-gtm-category": "Footer",
                  "data-gtm-action": "CCPA Link",
                  "data-gtm-label": "View CCPA Info",
                  children: t("Do Not Sell My Info")
                })]
              })]
            }), (0, tt.jsx)(x.Rating, {
              className: "rockstargames-modules-gtao-license-platef11dcd708c3e9261a6f3ffa655c18840",
              condensed: !0,
              titleSlug: "gta-online"
            })]
          })
        })
      };
      var rt = a(90188),
        nt = a(64548);
      const st = e => {
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
            e instanceof m.Mesh && (e.material.opacity = 0, e.material.transparent = !0, e.material.map && (e.material.map.encoding = m.LinearEncoding, e.material.map.needsUpdate = !0)), "Car_ShadowPlane" !== e.name && "banshee_HD_Glass_SingleLayer" !== e.name && "banshee_HD_Shells_VertexPaint_Cage" !== e.name || (e.renderOrder = 1, e instanceof m.Mesh && (e.material.depthWrite = !0))
          })), o.getObjectByName("Car_Banshee_LOD_VertexColors")?.traverse((e => {
            e.castShadow = !0, e instanceof m.Mesh && (e.material.envMap = t, e.material.envMapIntensity = 1)
          })), o.visible = !1
        }), [a]), (0, r.useEffect)((() => {
          n && n()
        }), []), (0, tt.jsx)("primitive", {
          position: s,
          scale: [1, 1, 1],
          rotation: [0, 0, 0],
          object: o
        })
      };
      var ot = a(6628);
      const lt = "#898989",
        it = "#000000",
        ct = ["0.05", "0.15", "0.4"],
        dt = ["0.0", "0.5", "1.0"],
        ut = ["0.299", "0.587", "0.114"],
        mt = (() => {
          const {
            userAgent: e
          } = window.navigator;
          return e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome")
        })(),
        pt = () => {
          const e = document.createElement("canvas").getContext("2d", {
            alpha: !1
          });
          let t = 1;
          const {
            innerWidth: a
          } = window;
          return a <= F.sm ? t = 1 / 4 : a <= F.md && (t = .5), e.canvas.width = 2048 * t, e.canvas.height = 1024 * t, e.textAlign = "center", e.textBaseline = "middle", e
        },
        ft = {
          bumpMap: pt(),
          map: pt(),
          roughnessMap: pt()
        },
        gt = e => {
          let {
            envMap: t,
            height: a = 1,
            plate: n,
            plateIndex: s,
            position: o = [0, 0, 0],
            width: l = 2
          } = e;
          const {
            state: i,
            setCurrentView: c,
            setPlateTextures: d,
            setRefs: u
          } = et(), {
            currentView: p,
            isSceneLoaded: f,
            pendingOrder: g,
            plateNumber: b,
            plates: y,
            isLoggedIn: h,
            isMobile: x,
            selectedStyle: v,
            gridScale: w,
            plateTextures: _
          } = i, P = 0 === s && "number" == typeof v, [S, k] = (0, r.useState)(E(P ? v : n.style.id)), T = [0, 0, 0], C = [1, 1, 1], [R] = (0, r.useState)(0 === n.index), [I, N] = (0, r.useState)({}), O = (0, r.useRef)(), j = y.filter((e => {
            let {
              faux: t
            } = e;
            return !t
          })).length >= 30;
          (0, r.useEffect)((() => {
            O.current && 0 === O.current.userData.index && u(U.FIRST_PLATE_MESH, O)
          }), [O.current]);
          const M = (0, r.useRef)(),
            V = (0, r.useCallback)((e => {
              !n.index && j || A(0, p)
            }), [p]),
            D = (0, r.useCallback)((e => {
              if (!S) return [];
              const t = String.fromCharCode(8202).repeat(0),
                a = e.split("")?.join(t) ?? "",
                r = ((e, t) => {
                  delete ft.bumpMap, ft.bumpMap = pt();
                  const a = ft.bumpMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= F.sm ? r = 1 / 4 : n <= F.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = "white", a.fillStyle = "white", a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  const o = 5 * r;
                  return mt || (a.filter = `blur(${o}px)`), t?.bumpMap?.image && a.drawImage(t.bumpMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), mt && ot.canvasRGB(a.canvas, 0, 0, a.canvas.width, a.canvas.height, 3 * o), new m.CanvasTexture(a.canvas)
                })(a, S),
                n = ((e, t) => {
                  delete ft.map, ft.map = pt();
                  const a = ft.map;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= F.sm ? r = 1 / 4 : n <= F.md && (r = .5);
                  const s = t.fontSize * r;
                  return a.clearRect(0, 0, a.canvas.width, a.canvas.height), a.fillStyle = "white", a.fillRect(0, 0, a.canvas.width, a.canvas.height), t?.albedoMap?.image && a.drawImage(t.albedoMap.image, 0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`, a.fillStyle = t.fontColor, a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7), new m.CanvasTexture(a.canvas)
                })(a, S),
                s = x ? void 0 : ((e, t) => {
                  delete ft.roughnessMap, ft.roughnessMap = pt();
                  const a = ft.roughnessMap;
                  let r = 1;
                  const {
                    innerWidth: n
                  } = window;
                  n <= F.sm ? r = 1 / 4 : n <= F.md && (r = .5);
                  const s = t.fontSize * r;
                  a.strokeStyle = it, a.fillStyle = it, a.fillRect(0, 0, a.canvas.width, a.canvas.height), a.font = `${s}px ${t.fontName}`;
                  for (let r = 1; r < 2; r += 1) t?.roughnessMap?.image && a.drawImage(t.roughnessMap.image, 0, 0, a.canvas.width, a.canvas.height), a.strokeStyle = lt, a.fillStyle = lt, a.strokeText(e, a.canvas.width / 2, a.canvas.height / 1.7), a.fillText(e, a.canvas.width / 2, a.canvas.height / 1.7);
                  return new m.CanvasTexture(a.canvas)
                })(a, S);
              return [r, n, s]
            }), [S]),
            W = (0, r.useCallback)((e => {
              var t;
              R && (e.uniforms.saturation = G.saturation, e.uniforms.fade = G.fade, e.uniforms.shaderIndex = G.shaderIndex, e.fragmentShader = `uniform float saturation;\nuniform float fade;\nuniform int shaderIndex;\n${e.fragmentShader}`, e.fragmentShader = e.fragmentShader.replace("#include <dithering_fragment>", `\n        #include <dithering_fragment>\n\n        vec3 lerpedColor;\n\n        if (shaderIndex == 2) {\n            float opacity = mix(0.01, 1.0, saturation);\n            float desaturationOpacity = gl_FragColor.a * (opacity);\n            vec3 desaturationColor = vec3(\n                ${ut[0]},\n                ${ut[1]},\n                ${ut[2]}\n            );\n            lerpedColor =  mix(\n                vec3(dot(gl_FragColor.rgb, desaturationColor)),\n                gl_FragColor.rgb,\n                saturation\n            );\n            gl_FragColor = vec4(lerpedColor, gl_FragColor.a);\n\n        } else if (shaderIndex == 0) {\n            float gradient;\n                if (vUv.y < 0.5) {\n                    gradient = mix(${(t=h?ct:dt)[0]}, ${t[1]}, vUv.y * 2.0);\n                } else {\n                    gradient = mix(${t[1]}, ${t[2]}, ((vUv.y - 0.5) * 2.0));\n                }\n                lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - gradient);\n\n                float lerpedAlpha = mix(gl_FragColor.a * 0.8, gl_FragColor.a, saturation);\n\n                gl_FragColor = vec4(lerpedColor, lerpedAlpha);\n\n        } else {\n            lerpedColor = mix(gl_FragColor.rgb, gl_FragColor.rgb * saturation, 1.0 - vUv.y);\n\n            gl_FragColor = vec4(lerpedColor, 1);\n\n        }\n    `))
            }), [R, h, g]);
          return (0, r.useEffect)((() => {
            R && (n.plateText = b)
          }), [R ? b : null]), (0, r.useEffect)((() => {
            if (R && S && S.id !== v) {
              const e = E(v);
              k(e)
            }
          }), [R, v]), (0, r.useEffect)((() => {
            G.shaderIndex.value = h ? g ? 0 : 2 : 0, M.current && (M.current.bumpScale = .015 * w, M.current.needsUpdate = !0)
          }), [M.current, g, h, w]), (0, r.useEffect)((() => {
            if (I.map && _[s] !== I.map) {
              const e = [..._];
              e[s] = I.map, d(e)
            }
          }), [I, _]), (0, r.useEffect)((() => {
            const [e, t, a] = D(R ? b : n.plateText);
            N({
              map: t,
              bumpMap: e,
              roughnessMap: a
            })
          }), [R ? b : void 0, R ? S : void 0]), (0, r.useMemo)((() => f && I.map && I.bumpMap ? (0, tt.jsxs)("mesh", {
            name: ge.LP,
            visible: !0,
            userData: {
              index: s
            },
            position: o,
            rotation: T,
            scale: C,
            ref: O,
            onPointerOver: x ? void 0 : () => {
              h && c() === fe.LIST_PLATES && O.current && V(O.current)
            },
            onPointerOut: x ? void 0 : () => {
              var e;
              h && O.current && (e = O.current, !n.index && j || L(e))
            },
            children: [(0, tt.jsx)("planeBufferGeometry", {
              args: [l, a, l, a]
            }), (0, tt.jsx)("meshPhysicalMaterial", {
              onBeforeCompile: 0 === s ? W : void 0,
              alphaMap: n.alphaMap,
              bumpMap: I.bumpMap,
              opacity: 0,
              bumpScale: .015,
              depthTest: !1,
              envMap: t,
              envMapIntensity: me,
              map: I.map,
              metalness: .4,
              ref: M,
              roughness: .3,
              roughnessMap: I.roughnessMap,
              transparent: !0
            })]
          }) : null), [h, x, I])
        },
        bt = e => {
          let {
            gridState: t,
            loadedAssets: a
          } = e;
          const [n, s, l, c] = [2, 1, 2, 1, [0, 0, 0]], {
            environmentMap: d
          } = a, {
            gridOptions: u,
            gridPosition: p
          } = t, {
            bottomMarginAsRatio: f,
            columnGap: g,
            columns: b,
            isVertical: y,
            rowGap: h,
            topMarginAsRatio: x
          } = u, {
            state: v,
            realHeightReactive: w,
            setGridScale: E,
            setLastScrollY: _,
            setCurrentView: P
          } = et(), {
            currentView: S,
            gridScale: k,
            plates: T,
            isLoggedIn: R,
            isMobile: I,
            realHeight: N,
            refs: O,
            currentPlateIndex: A,
            three: L,
            canvasDimensions: j,
            lastScrollY: V,
            isScrollEnabled: D
          } = v, W = (0, r.useRef)(null), {
            camera: Y,
            scene: B,
            gl: z
          } = (0, o.useThree)(), [$, H] = (0, r.useState)(new m.Vector3(p.x, p.y, p.z)), [F, G] = (0, r.useState)(0), [q, X] = (0, r.useState)(0), {
            track: Z
          } = (0, i.useGtmTrack)(), K = {
            view_name: "license plate creator - landing page logged " + (R ? "in" : "out")
          }, [J, Q] = (0, r.useState)(null);
          (0, r.useEffect)((() => {
            S === fe.LIST_PLATES && Z({
              ...K,
              event: "virtualPageview",
              display_type: I ? "mobile" : "desktop",
              view_name: "license plate creator - landing page logged " + (R ? "in" : "out")
            })
          }), [S]);
          const ee = (0, r.useCallback)((() => {
            if (j) {
              const e = l * b + g * (b - 1),
                a = Math.abs(p.z) * Math.tan((0, nt.qy)(Y.fov / 2)) * 2,
                r = t.gridDimensions.margins.meters.top,
                n = t.gridDimensions.margins.meters.bottom,
                s = t.gridDimensions.width,
                o = s / e,
                i = t.gridDimensions.height,
                c = i / a;
              X((i - a + r + n).toFixed(4)), E(o), (e => {
                fe.LIST_PLATES;
                const t = z.domElement.offsetHeight,
                  a = c * t + x * t + f * t,
                  r = C(),
                  n = O[U.ROOT]?.current;
                n && (n.style.height = `${a}px`), Q({
                  canvasHeight: t,
                  rootHeight: a
                }), w(`${Math.round(a)}px`);
                const i = Math.round(l * o / s * (z.domElement.offsetWidth - 2 * r));
                G(i)
              })()
            }
          }), [Y.fov, j, b, S, I, p, T, s, B, x, A, L]);
          (0, r.useEffect)((() => {
            p && H(p), ee()
          }), [p, j]);
          const te = (0, r.useMemo)((() => T?.map((e => {
              if (0 === F) return null;
              const {
                index: t
              } = e, a = -1 * n / 2 + .251953125 * n, r = (y ? t % b * (n + g) : Math.floor(t / b) * (n + g)) + n / 2, o = (y ? Math.floor(t / b) * (s + h) * -1 : t % b * (s + h) * -1) + a;
              return (0, tt.jsx)(gt, {
                envMap: d,
                height: c,
                position: [r, o, 0],
                plate: e,
                plateIndex: e.index,
                width: l
              }, `${e.index}-${Math.random()}`)
            })) ?? null), [F, T]),
            ae = (0, r.useCallback)((() => {
              const e = O[U.ROOT].current,
                t = document.body;
              e && (e.style.touchAction = "auto"), M() || requestAnimationFrame((() => {
                t.style.removeProperty("position"), t.style.removeProperty("top"), window.scrollTo(0, V)
              }))
            }), [I, V, D]),
            re = (0, r.useCallback)((() => {
              const e = O[U.ROOT].current,
                t = document.body,
                a = window.scrollY;
              _(a), e && (e.style.touchAction = "none"), M() || (window.scrollTo(0, a), requestAnimationFrame((() => {
                t.style.position = "fixed", t.style.top = `-${a}px`
              })))
            }), [I, O, D, V]);
          (0, r.useEffect)((() => {
            D ? ae() : re()
          }), [D]), (0, r.useEffect)((() => () => {
            ae()
          }), []);
          const ne = (0, r.useCallback)((function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (P() === fe.LIST_PLATES || e) {
              const e = O[U.ROOT]?.current;
              if (!e || !J) return;
              const {
                canvasHeight: t,
                rootHeight: a
              } = J, r = I && T.length <= 2 ? 2 : 1;
              let n = Number(Math.min(window.scrollY / (a - t), r).toFixed(4));
              (Number.isNaN(n) || a === t) && (n = 0);
              const s = $.y + q * n;
              W?.current?.position?.set($.x, Number(s.toFixed(3)), $.z)
            }
          }), [W.current, $, O, q, T, J, R, I]);
          return (0, r.useEffect)((() => {
            const e = e => {
              ne(!1), e && (e.stopPropagation(), e.preventDefault())
            };
            return 0 !== window.scrollY && e(null), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
          }), [W.current, R, $, p, N, O, q, J]), (0, r.useEffect)((() => {
            if (!W.current || !B) return;
            const e = B.getObjectByName("Scene");
            W.current.add(e), e && e.scale.set(6.5, 6.5, 6.5)
          }), [W.current, B]), (0, r.useMemo)((() => (0, tt.jsx)("group", {
            name: ge.LP_GRID,
            ref: W,
            position: p,
            scale: k,
            children: 0 !== F && te
          })), [k, te, F])
        },
        yt = e => {
          let {
            name: t,
            color: a,
            intensity: r,
            distance: n,
            decay: s,
            position: o,
            rotation: l,
            mapSize: i,
            ref: c,
            withHelper: d = !1
          } = e;
          return (0, tt.jsxs)(tt.Fragment, {
            children: [(0, tt.jsx)("pointLight", {
              name: t,
              color: a,
              intensity: r,
              distance: n,
              decay: s,
              position: o,
              rotation: l,
              castShadow: !0,
              "shadow-mapSize-height": i,
              "shadow-mapSize-width": 2 * i,
              "shadow-radius": 4,
              "shadow-bias": -35e-5
            }), d && (0, tt.jsx)("pointLightHelper", {
              light: c,
              sphereSize: 1
            })]
          })
        },
        ht = e => {
          let {
            baseIntensity: t,
            mapSize: a
          } = e;
          return (0, r.useMemo)((() => (0, tt.jsxs)("group", {
            name: "Lights",
            children: [(0, tt.jsx)(yt, {
              name: "Light1",
              color: 16777215,
              intensity: 0,
              distance: 0,
              decay: 2,
              position: [Z, K, J],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, tt.jsx)(yt, {
              name: "Light2",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [Q, ee, te],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, tt.jsx)(yt, {
              name: "Light3",
              color: 16777215,
              intensity: t,
              distance: 0,
              decay: 2,
              position: [re, ne, se],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            }), (0, tt.jsx)(yt, {
              name: "Light4",
              color: 16777215,
              intensity: 0,
              distance: 50,
              decay: 2,
              position: [le, ie, ce],
              rotation: [-Math.PI / 2, 0, 0],
              mapSize: a
            })]
          })), [t, a])
        };
      (0, o.extend)({
        OrbitControls: rt.g
      });
      const xt = {
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
        vt = e => {
          let {
            loadedAssets: t
          } = e;
          const {
            state: a,
            setIsSceneLoaded: n,
            setThree: s,
            setGridState: l
          } = et(), {
            gridState: i,
            isLoggedIn: c,
            is3D: d,
            shouldForce2D: u,
            isSceneLoaded: p,
            plates: f,
            plateStyles: g,
            three: b,
            canvasDimensions: y,
            shouldRenderScene: x,
            refs: v
          } = a, [w, E, _] = (0, o.useThree)((e => {
            let {
              camera: t,
              gl: a,
              scene: r
            } = e;
            return [t, a, r]
          })), S = (0, r.useRef)(), [k, T] = (0, r.useState)(!1), [R, I] = (0, r.useState)(null), N = () => {
            if (E.domElement.style.opacity = 1, E.domElement.style.position = "absolute", E.domElement.style.top = 0, E.domElement.style.left = 0, E.domElement.style.right = 0, E.domElement.style.bottom = 0, E.domElement.style.touchAction = "auto", !p) {
              const e = new m.Vector3,
                t = new m.Vector3;
              S.current.target.copy(t), s({
                scene: _,
                camera: w,
                renderer: E,
                controls: S,
                originalCameraFov: w.fov,
                originalCameraPosition: e,
                originalControlsTarget: t
              })
            }
            n(!0)
          };
          (0, r.useEffect)((() => {
            f.length && R && O(R.width)
          }), [R, f]), (0, r.useEffect)((() => (I({
            height: E.domElement.offsetHeight,
            width: E.domElement.offsetWidth
          }), () => {
            n(!1)
          })), []), (0, r.useEffect)((() => {
            t && f?.length && null !== c && T(!0)
          }), [t, f, c]), (0, r.useEffect)((() => {
            t && t?.environmentMap && g?.map(((e, a) => (e.albedoMap = t.plateTextures[a].albedoMap, e.alphaMap = t.plateTextures[a].alphaMap, e.bumpMap = t.plateTextures[a].bumpMap, e.roughnessMap = t.plateTextures[a].roughnessMap, e.envMap = t.environmentMap, e)))
          }), [t, g]);
          const O = (0, r.useCallback)((e => {
            const t = document.getElementById("list-plates-sidebar");
            if (!w || !t || !R) return;
            const a = C(),
              {
                plateWidth: r,
                plateHeight: n,
                columnGap: s,
                rowGap: o,
                depth: i
              } = xt,
              c = i * Math.tan((0, nt.qy)(17.5)),
              d = -1 * w.aspect * c,
              u = window.innerWidth < F.lg ? t.offsetHeight + a : a,
              p = a,
              g = E.domElement.offsetWidth,
              b = E.domElement.offsetHeight,
              y = (() => {
                const e = window.innerWidth;
                switch (!0) {
                  case e >= F.xxl:
                    return P(11);
                  case e >= F.xl:
                    return P(12);
                  case e >= F.md:
                    return P(13);
                  default:
                    return P(20)
                }
              })(),
              h = p / g,
              x = d - d * h * 2,
              v = u / b,
              _ = c - c * v * 2,
              S = y / b,
              k = new m.Vector3(x, _, -i),
              T = f.length > 1 ? (e => {
                const t = window.innerWidth;
                switch (!0) {
                  case t >= F.xxl:
                    return 3;
                  case t >= F.lg && t <= 1280:
                    return 1;
                  case e >= 600:
                    return 2;
                  default:
                    return 1
                }
              })(e) : 1,
              I = Math.ceil(f.length / T),
              N = r * T + s * (T - 1),
              O = n * Math.ceil(f.length / T) + o * (Math.ceil(f.length / T) - 1),
              A = Math.abs(k.z) * Math.tan((0, nt.qy)(w.fov / 2)) * 2,
              L = h * (A * (g / b)),
              j = v * A,
              M = S * A,
              V = Math.abs(2 * k.x),
              D = V / N * O;
            l({
              gridPosition: k,
              gridOptions: {
                ...xt,
                columns: T,
                rows: I,
                topMarginAsRatio: v,
                bottomMarginAsRatio: S,
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
                    top: u,
                    left: p,
                    bottom: y
                  }
                },
                height: D,
                width: V
              }
            })
          }), [f, v?.[U.SIDEBAR]?.current, w, R, c]);
          (0, r.useEffect)((() => {
            b && S.current && !b?.controlsInit && s({
              ...b,
              controls: S,
              controlsInit: !0
            })
          }), [S.current, b]), (0, r.useEffect)((() => {
            b?.scene && S?.current && (S.current.enabled = x)
          }), [x, b]), (0, r.useEffect)((() => {
            S?.current && (!u && d || (S.current.enabled = !1))
          }), [u, d]), (0, o.useFrame)((() => {
            x && (S?.current?.update(), E.render(_, w))
          }), 1);
          const A = (0, r.useCallback)(h().debounce((() => {
            const e = v[U.CANVAS_WRAP]?.current;
            e && I({
              width: e.offsetWidth,
              height: e.offsetHeight
            })
          }), 100), [w, v]);
          (0, r.useEffect)((() => (A(), window.addEventListener("resize", A, !0), () => window.removeEventListener("resize", A, !0))), [y]);
          const L = (0, r.useMemo)((() => t?.environmentMap && t?.environmentModel ? (0, tt.jsx)(st, {
              position: [0, -4.05, -11.76],
              envMap: t.environmentMap,
              envModel: t.environmentModel,
              onLoad: N
            }) : null), [t]),
            j = (0, r.useMemo)((() => (0, tt.jsx)(ht, {
              baseIntensity: ue,
              mapSize: 1024
            })), []),
            M = (0, r.useMemo)((() => (0, tt.jsx)(bt, {
              gridState: i,
              loadedAssets: t
            })), [i, t]),
            V = (0, r.useMemo)((() => (0, tt.jsx)("orbitControls", {
              ref: S,
              screenSpacePanning: !0,
              args: [w, E.domElement],
              enableDamping: !0,
              enableZoom: !1,
              enablePan: !1,
              maxPolarAngle: X.plateView.maxPolarAngle,
              minPolarAngle: X.plateView.minPolarAngle,
              maxAzimuthAngle: X.plateView.maxAzimuthAngle,
              minAzimuthAngle: X.plateView.minAzimuthAngle,
              minDistance: -1,
              maxDistance: 100
            })), [w, S, E]);
          return (0, tt.jsxs)(tt.Fragment, {
            children: [j, L, k && i ? M : "", V]
          })
        };
      var wt = a(77364),
        Et = a(24372),
        _t = a(59641);
      const Pt = e => {
          let {
            isVisible: t = !1,
            top: a,
            bottom: n,
            onDrag: s,
            onHide: o,
            onShow: l,
            children: i,
            onTap: c,
            drawerY: d,
            mobileSidebarHeight: u
          } = e;
          const {
            state: m
          } = et(), {
            currentView: p
          } = m, f = (0, r.useRef)(null), g = (0, r.useState)(Y), b = d?.get ? d.get() : 0, y = (0, Et.useSpring)({
            y: t ? b : u,
            config: {
              easing: Et.easings.easeInOutQuart,
              duration: 900
            }
          }), h = (0, r.useRef)(u), x = (0, r.useRef)(0), v = (0, r.useRef)(!1);
          (0, r.useEffect)((() => {
            const e = {
              top: a,
              bottom: n,
              y: y.y,
              offset: h,
              sidebarRef: f
            };
            f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", t ? l(e) : o(e)
          }), [t]);
          const E = (0, r.useCallback)((0, _t.useDrag)((e => {
              if (p !== fe.CONFIRM_ORDER) {
                if (!v.current)
                  if (h.current = Math.max(a, Math.min(n, y.y.get() + e.delta[1])), x.current = e.movement[1], e.dragging) y.y.set(h.current);
                  else {
                    const e = {
                      y: y.y.get()
                    };
                    if (h.current < a / 2) {
                      const t = w().to(e, {
                        y: a,
                        duration: q.sidebar.mobile.drawerSnap.duration,
                        ease: q.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          v.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = B
                    } else if (h.current > n / 2) {
                      const t = w().to(e, {
                        y: n,
                        duration: q.sidebar.mobile.drawerSnap.duration,
                        ease: q.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          v.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = z
                    } else {
                      const t = w().to(e, {
                        y: 0,
                        ease: q.sidebar.mobile.drawerSnap.ease,
                        onUpdate: () => {
                          v.current ? t.kill() : y.y.set(e.y)
                        }
                      });
                      f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = Y
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
            _ = () => {
              if (Math.abs(x.current) < 3) {
                v.current = !0, c({
                  drawerStateRef: g
                });
                const e = {
                    y: y.y.get()
                  },
                  t = {};
                g.current === Y ? (t.y = a, f.current.style.touchAction = "auto", f.current.style.overflowY = "auto", g.current = B) : (g.current === B || g.current === z) && (t.y = 0, f.current.style.touchAction = "none", f.current.style.overflowY = "hidden", g.current = Y), w().to(e, {
                  y: t.y,
                  duration: q.sidebar.mobile.drawerSnap.duration,
                  ease: q.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    y.y.set(e.y)
                  },
                  onComplete: () => {
                    v.current = !1, h.current = y.y.get()
                  }
                })
              }
            };
          return (0, r.useMemo)((() => (0, tt.jsxs)(Et.animated.div, {
            ...E(),
            ref: f,
            style: y ? {
              y: y.y
            } : void 0,
            className: "rockstargames-modules-gtao-license-platea30996f8fb210e2e4010c217dbf0437e",
            children: [(0, tt.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateec1d03a84ec2e328b48748348a2f8bb4",
              onClick: _,
              "aria-hidden": "true"
            }), i]
          })), [y.y.get(), _, i])
        },
        St = e => {
          let {
            onClick: t
          } = e;
          return (0, tt.jsx)("button", {
            type: "button",
            onClick: t,
            className: "rockstargames-modules-gtao-license-platea81788a7f11c282c9a7e4bceac6d4ce1",
            "aria-label": "Close",
            tabIndex: 0
          })
        },
        kt = () => (0, tt.jsx)("div", {
          className: "rockstargames-modules-gtao-license-platec116bf746553bf7c8d6b5e3b6f0b1209",
          "aria-label": "Los Santos Customs"
        }),
        Tt = e => {
          let {
            button: {
              buttonText: t,
              buttonIcon: a,
              isDisabled: r,
              onClick: n
            },
            closeModal: s
          } = e;
          return (0, tt.jsxs)("button", {
            className: "rockstargames-modules-gtao-license-platee9574ac462682ed4f394fb8076428ae1",
            disabled: r,
            onClick: e => (e => {
              n && n(e), s(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            type: "button",
            value: "cancel",
            "aria-label": t,
            children: [(0, tt.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec9e74afa7b083c2db33e84befcc09927",
              children: t
            }), a && (0, tt.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platebf69c5632ee8bf0e79067600546eb003"
            })]
          })
        },
        Ct = e => {
          let {
            icon: t = !1,
            title: a = "Cats are the world chase dog then run away yet while happily ignoring when being called meow.",
            secondaryText: n = "Meow to be let in hide from vacuum cleaner but try to hold own back foot to clean it but foot reflexively kicks you in face.",
            buttons: s = [{
              buttonText: "Cat mojo"
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
            } = et();
          return (0, r.useEffect)((() => {
            o && c.current && (c.current.showModal(), d({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `license plate creator - modal: ${a.toLowerCase()}`
            }))
          }), [o]), (0, tt.jsxs)("dialog", {
            ref: c,
            className: "rockstargames-modules-gtao-license-plateaefb6cdd2d770689d66db28e09c748f7",
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (e.currentTarget.close(), l()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            })(e),
            children: [t && (0, tt.jsx)("i", {
              className: "rockstargames-modules-gtao-license-platefc678c80791b7bec94a2c7743aefb2c4"
            }), (0, tt.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec82a7d998d77f05fedd84c490e9c6b90",
              children: [(0, tt.jsx)("h3", {
                children: a
              }), n && (0, tt.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, tt.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platee728a2fcfc9abbc5984c9245721af997",
              children: s.splice(0, 2).map((e => (0, tt.jsx)(Tt, {
                button: e,
                onClick: () => e.onClick,
                closeModal: () => (c.current?.close(), void l())
              }, e.buttonText)))
            })]
          })
        },
        Rt = e => {
          let {
            vehicleName: t,
            vehicleClass: a
          } = e;
          return (0, tt.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platec8ae2c220065654efd13996c8290a0fa",
            children: [(0, tt.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec5250ca53556e76b38b62f7732ec6e52",
              children: t
            }), a && (0, tt.jsx)("p", {
              className: "rockstargames-modules-gtao-license-platec71387432404f4698fbf646c43e14c7c",
              children: a
            })]
          })
        },
        It = {
          pillBtn: "rockstargames-modules-gtao-license-platee5eaab6cff219b841cee7db39554e5ef",
          selected: "rockstargames-modules-gtao-license-plateea64a31b2cfdb028b51ec9bdcc09f847",
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
        Nt = "visible",
        Ot = (0, d.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, l.useRockstarTokenPing)(),
            {
              loggedIn: n
            } = (0, i.useRockstarUser)(),
            {
              setCurrentView: s,
              setShouldRenderScene: o,
              setIsExpanded: c,
              setRefs: u,
              setError: p,
              state: f,
              setIsScrollEnabled: g,
              setDeletedPlateIndex: b
            } = et(),
            {
              accessiblePlates: y,
              currentPlateIndex: x,
              currentPlate: v,
              currentView: E,
              gridScale: _,
              gridState: P,
              is3D: T,
              isExpanded: C,
              isMobile: I,
              isScrollEnabled: A,
              lastScrollY: L,
              plates: M,
              realHeight: V,
              refs: D,
              three: W
            } = f,
            [$, H] = (0, r.useState)(E === fe.VIEW_PLATE),
            [F, G] = (0, r.useState)([]),
            [Z, K] = (0, r.useState)(!1),
            [J, Q] = (0, r.useState)(!1),
            ee = (0, r.useRef)(null),
            te = (0, r.useRef)(null),
            ae = (0, r.useRef)(null),
            re = (0, r.useRef)(null),
            ne = (0, r.useRef)(35),
            se = (0, r.useRef)(null),
            [oe, le] = (0, r.useState)(.4 * window.innerHeight),
            [ie, ce] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)),
            [ue, me] = (0, r.useState)(0),
            pe = (0, r.useRef)(oe),
            be = (0, r.useRef)(null),
            [ye, he] = (0, r.useState)(null),
            xe = (0, r.useRef)(null),
            ve = (0, r.useRef)(null),
            we = (0, r.useRef)(null),
            Ee = (0, r.useRef)(0),
            [_e, Pe] = (0, r.useState)(null),
            {
              track: Se
            } = (0, i.useGtmTrack)(),
            ke = {
              view_name: "license plate creator - view plate"
            },
            Te = E === fe.VIEW_PLATE ? 0 : -1;
          (0, r.useEffect)((() => {
            E !== fe.VIEW_PLATE && J && Q(!1)
          }), [E, J]);
          const Ce = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            Number.isNaN(x) || (Ce.current = x)
          }), [x]);
          const Re = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            E && (Re.current = E), E === fe.VIEW_PLATE && (we.current = !1)
          }), [E]);
          const Ie = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            _ && (Ie.current = _)
          }), [_]), (0, r.useEffect)((() => {
            y?.[0]?.current && E === fe.NEW_PLATE && Pe(N(y[0].parentElement))
          }), [y, E]);
          const Ne = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            _e && (Ne.current = _e)
          }), [_e]);
          const Oe = (0, r.useCallback)((function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (Re.current !== fe.VIEW_PLATE) return;
            const {
              renderer: r
            } = W;
            j({
              plateIndex: Ce.current,
              three: W,
              timeline: e,
              gridScale: t
            }, {
              onStart: () => {
                I ? document.body.style.touchAction = "none" : g(!1)
              },
              onComplete: e => {
                e?.three?.camera && (ee.current = new m.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), re?.current?.children && re.current.querySelectorAll("button").forEach((e => {
                  e.style.pointerEvents = "all"
                })), I && (r.domElement.style.touchAction = "none", A && setTimeout((() => {
                  document.body.style.touchAction = "auto", g(!1)
                }), 200), be.current = N(r.domElement).y)
              },
              tweenPosition: 0,
              isResize: a,
              is3D: T
            })
          }), [W, x, E, P, M, I, T, A]);
          (0, r.useEffect)((() => {
            if (!W?.controls || !$) return;
            const {
              controls: e
            } = W, t = w().timeline({
              duration: I ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
              ease: I ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
              onStart: () => {
                e?.current && (e.current.minDistance = 0)
              }
            });
            Oe(t, _, !0)
          }), [_, W]), (0, r.useEffect)((() => {
            Ee.current = L
          }), [L]);
          const Ae = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
              if (!W?.controls || !y?.[x]) return;
              const {
                controls: a
              } = W, r = e || w().timeline({
                defaults: {
                  duration: 0,
                  ease: I ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = R(), o = I && E === fe.CONFIRM_ORDER ? 1.5 : 1, l = !k() || I ? n * _ * o : 1.6 * n * _, i = D[U.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = D[U.CANVAS_WRAP].current, u = y[x].current;
              if (i && c && u && d) {
                const e = O(x, i, Number(V.replace("px", "")), P, I ? void 0 : {
                    x: c.offsetWidth,
                    y: 0
                  }).rect.center,
                  a = d.getBoundingClientRect(),
                  n = N(d),
                  o = N(u.parentElement),
                  m = {
                    x: a.left + a.width / 2 - Number(n.x),
                    y: a.top + a.height / 2 - Number(n.y)
                  },
                  p = 5 / l,
                  f = I || s() !== fe.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
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
                  ease: I ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                  onComplete: () => {
                    Pe(N(u.parentElement))
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = b, r = (0, nt.Cq)(Number(o.x), g.x, a), n = (0, nt.Cq)(Number(o.y), g.y + (I ? .4 * window.innerHeight / -2 : 0), a), s = (0, nt.Cq)(Number(o.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${s})`, t.isResize || y.forEach(((e, t) => {
                      if (t !== x && e?.current) {
                        const r = (0, nt.Cq)(h[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r.toFixed(2)
                      }
                    }))
                  }
                }, "<")
              }
            }), [x, P, I, E, V, W, y, D, oe, L]),
            Le = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
              if (!W?.camera || !ee.current) return;
              const {
                camera: t,
                controls: a,
                renderer: r
              } = W;
              if (w().to(t.position, {
                  x: Number(ee.current.x),
                  y: Number(ee.current.y),
                  z: Number(ee.current.z),
                  ease: q.toggleView.camera.ease,
                  duration: q.toggleView.camera.duration,
                  onStart: () => {
                    a?.current && (a.current.minDistance = 2, a.current.enableZoom = !1, a.current.enabled = !1)
                  },
                  onComplete: () => {
                    s(fe.LIST_PLATES), a?.current && (a.current.minDistance = 0, a.current.maxPolarAngle = X.plateView.maxPolarAngle, a.current.minPolarAngle = X.plateView.minPolarAngle, a.current.maxAzimuthAngle = X.plateView.maxAzimuthAngle, a.current.minAzimuthAngle = X.plateView.minAzimuthAngle, a.current.enableZoom = !1), pe.current = 0, e?.onComplete && e.onComplete()
                  }
                }), I) {
                const e = r.domElement;
                w().to(e.style, {
                  opacity: 1,
                  duration: q.toggleView.reset.duration,
                  ease: q.toggleView.reset.ease
                })
              }
              Se({
                ...ke,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "view plate",
                element_placement: "view plate",
                view_name: "license plate creator - view plate"
              })
            }), [I, W, ee]);
          (0, r.useEffect)((() => {
            u(U.VIEW_PLATE, se)
          }), [se.current]), (0, r.useEffect)((() => {
            G(M?.[x]?.vehicles ?? [])
          }), [x, M]), (0, r.useEffect)((() => {
            H(E === fe.VIEW_PLATE)
          }), [E]), (0, r.useEffect)((() => {
            W?.scene && re?.current && (e => {
              const {
                scene: t,
                controls: a
              } = W, r = [];
              t.traverse((e => {
                e.name === ge.LP && r.push(e), e.userData.index === Number(x) && (te.current = e)
              }));
              const n = w().timeline({
                defaults: {
                  duration: I ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                  ease: I ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease
                },
                onStart: () => {
                  a?.current && (a.current.minDistance = 0)
                }
              });
              switch (e) {
                case Nt: {
                  Oe(n, Ie.current, !1);
                  const e = D[U.ROOT]?.current,
                    t = D[U.SIDEBAR]?.current,
                    a = y[x].current,
                    r = D?.[U.CANVAS_WRAP]?.current;
                  e && t && a && r && Ae(n), ve?.current && n.to([re.current, ve.current, I ? void 0 : ae.current], {
                    autoAlpha: 1,
                    duration: q.sidebar.in.duration,
                    ease: q.sidebar.in.ease,
                    delay: q.sidebar.in.delay,
                    onComplete: () => {
                      ve?.current && (ve.current.style.pointerEvents = "all"), ae?.current && (ae.current.style.pointerEvents = "all")
                    }
                  }, 0), W?.camera && I && !ne.current && (ne.current = W.camera.fov);
                  break
                }
                default:
                  ae.current && w().to(ae.current, {
                    pointerEvents: "none"
                  }), re.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), w().to(re.current, {
                    autoAlpha: 0,
                    duration: q.sidebar.out.duration,
                    ease: q.sidebar.out.ease,
                    delay: q.sidebar.out.delay
                  }), !I && ae.current ? (w().to(ae.current, {
                    autoAlpha: 0,
                    duration: q.sidebar.out.duration,
                    ease: q.sidebar.out.ease,
                    delay: q.sidebar.out.delay
                  }), w().to(ve.current, {
                    autoAlpha: 0,
                    duration: q.sidebar.out.duration,
                    ease: q.sidebar.out.ease,
                    delay: q.sidebar.out.delay,
                    onComplete: () => {
                      ve.current.style.pointerEvents = "none"
                    }
                  })) : w().to(ve.current, {
                    autoAlpha: 0,
                    duration: q.sidebar.out.duration,
                    ease: q.sidebar.out.ease,
                    delay: q.sidebar.out.delay,
                    onComplete: () => {
                      ve.current.style.pointerEvents = "none"
                    }
                  }), a?.current && (a.current.minDistance = 0)
              }
            })($ ? Nt : "hidden")
          }), [ve.current, W, $]);
          const je = (0, r.useCallback)((() => {
            if (I && se.current) {
              const e = se.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              me(a - 48 - t), le(a), ce(-1 * (.6 * e - 80))
            }
          }), [I, se.current]);
          (0, r.useEffect)((() => {
            je()
          }), [I, se.current]);
          const Me = (0, r.useRef)(null),
            Ve = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            Me.current = $
          }), [$]), (0, r.useEffect)((() => {
            Ve.current = W
          }), [W]);
          const De = (0, r.useCallback)(h().debounce((() => {
            if (!0 !== Me.current) return;
            const {
              renderer: e
            } = Ve.current;
            Re.current === fe.VIEW_PLATE && (S() ? e.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : e.domElement.style.transform = "translateY(0px)", ae?.current && (ae.current.style.opacity = "1", ae.current.style.visibility = "visible", ae.current.style.pointerEvents = "all"), Ae(null, {
              isResize: !0
            }), je())
          }), 100), [I, $, E, W, ie, V, P]);
          (0, r.useEffect)((() => {
            _ && (Ie.current = _), s() === fe.VIEW_PLATE ? De() : S() && (je(), he(.4 * window.innerHeight))
          }), [_]), (0, r.useEffect)((() => {
            if (!W?.scene) return;
            if (!W?.scene || !y?.[0]?.current) return;
            const {
              scene: e
            } = W, t = [], a = [], r = y[x].current;
            if (e.traverse((e => {
                e.name === ge.LP && e.material ? a[e.userData.index] = e.material : t.push(e.material)
              })), s() === fe.VIEW_PLATE)
              if (T) {
                const t = a[x];
                if (w().to(t, {
                    opacity: 1,
                    delay: I ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                    duration: I ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                    ease: I ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                    onStart: () => {
                      o(!0), w().to(r.style, {
                        opacity: 0,
                        duration: q.accessibilePlate.duration,
                        ease: q.accessibilePlate.ease,
                        onUpdate: () => {}
                      })
                    }
                  }), !we.current) {
                  const t = e.getObjectByName("Light4"),
                    a = new m.Vector3;
                  te?.current && (te.current.getWorldPosition(a), w().to(t.position, {
                    x: de.x,
                    y: a.y + de.y,
                    z: de.z,
                    delay: I ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                    duration: q.plateShimmer.duration,
                    ease: q.plateShimmer.ease
                  }));
                  const r = {
                    current: 0
                  };
                  w().to(r, {
                    current: 1,
                    delay: I ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                    duration: q.plateShimmer.duration,
                    ease: q.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: e
                      } = r, a = (0, nt.Cq)(0, Math.PI, e);
                      t.intensity = .3 * Math.sin(a), t.color = new m.Color(a, .9 * a, a)
                    }
                  }), we.current = !0
                }
              } else {
                const e = a[x];
                w().to(r.style, {
                  opacity: 1,
                  duration: q.accessibilePlate.duration,
                  ease: q.accessibilePlate.ease,
                  onStart: () => {
                    w().to(e, {
                      opacity: 0,
                      duration: q.accessibilePlate.duration,
                      ease: q.accessibilePlate.ease,
                      onComplete: () => {
                        o(!1)
                      }
                    })
                  }
                })
              }
          }), [T, I, W]);
          const We = (0, tt.jsxs)(tt.Fragment, {
              children: [!I && (0, tt.jsx)("hr", {
                className: It.drawerHandle,
                onClick: () => {
                  c(!C)
                },
                "aria-hidden": "true"
              }), (0, tt.jsx)("div", {
                className: It.plateInfo,
                children: (0, tt.jsxs)("section", {
                  className: It.vehiclesApplied,
                  children: [(0, tt.jsx)("label", {
                    htmlFor: "vehicles",
                    className: F.length ? "" : `${It.noVehicles}`,
                    children: F.length ? t("lp.view.title.vehicles") : t("lp.view.title.novehicles")
                  }), (0, tt.jsx)("div", {
                    className: It.vehicles,
                    children: F.map(((e, t) => {
                      let {
                        modelName: a,
                        manufacturerName: r
                      } = e;
                      return (0, tt.jsx)(Rt, {
                        vehicleName: a,
                        vehicleClass: r
                      }, t)
                    }))
                  })]
                })
              })]
            }),
            Ye = (0, r.useCallback)((e => {
              if (!W) return;
              const {
                drawerStateRef: t
              } = e, a = y?.[0].current;
              if (a) {
                const e = N(a.parentElement),
                  {
                    renderer: r,
                    camera: n
                  } = W,
                  s = r.domElement,
                  o = {
                    buttonWrapOpacity: xe.current.style.opacity,
                    buttonWrapTranslateY: N(xe.current).y,
                    canvasWrapOpacity: s.style.opacity,
                    canvasHeight: s.offsetHeight,
                    canvasTranslateY: Number(N(s).y),
                    fov: n.fov,
                    accessiblePlateX: Number(e.x),
                    accessiblePlateY: Number(e.y),
                    accessiblePlateScale: Number(e.scale)
                  },
                  l = {};
                t.current === Y ? (l.buttonWrapOpacity = 0, l.buttonWrapTranslateY = ie, l.canvasWrapOpacity = 0, l.canvasHeight = -ie, l.canvasTranslateY = be.current, l.fov = ne.current, l.accessiblePlateX = Ne.current.x, l.accessiblePlateY = Ne.current.y, l.accessiblePlateScale = Ne.current.scale, s.style.pointerEvents = "none") : (t.current === B || t.current === z) && (l.buttonWrapOpacity = 1, l.buttonWrapTranslateY = 0, l.canvasWrapOpacity = 1, l.canvasHeight = -ie, l.canvasTranslateY = be.current, l.fov = ne.current, l.accessiblePlateX = Ne.current.x, l.accessiblePlateY = Ne.current.y, l.accessiblePlateScale = Ne.current.scale, s.style.pointerEvents = "all"), w().to(o, {
                  buttonWrapOpacity: l.buttonWrapOpacity,
                  buttonWrapTranslateY: l.buttonWrapTranslateY,
                  canvasWrapOpacity: l.canvasWrapOpacity,
                  canvasHeight: l.canvasHeight,
                  canvasTranslateY: l.canvasTranslateY,
                  fov: l.fov,
                  accessiblePlateX: l.accessiblePlateX,
                  accessiblePlateY: l.accessiblePlateY,
                  accessiblePlateScale: l.accessiblePlateScale,
                  duration: q.sidebar.mobile.drawerSnap.duration,
                  ease: q.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    s.style.opacity = o.canvasWrapOpacity, xe.current.style.opacity = o.buttonWrapOpacity, xe.current.style.transform = `translate(0px, ${o.buttonWrapTranslateY}px)`, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), n.fov = o.fov, n.updateProjectionMatrix(), s.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [W, oe, ie, y]),
            Be = (0, r.useCallback)((e => {
              if (!W) return;
              const {
                dragParams: t,
                offset: a,
                y: r,
                top: n,
                bottom: s
              } = e, {
                camera: o,
                renderer: l
              } = W, i = l.domElement, c = y?.[0]?.current, d = -ie + .4 * window.innerHeight - 48;
              if (c)
                if (t.dragging) {
                  const e = (0, nt.WC)(0, n, r.get()),
                    l = (0, nt.Cq)(0, 1, 1 - e);
                  i.style.opacity = l, xe.current.style.opacity = l, xe.current.style.transform = `translateY(${r.get()}px)`;
                  const d = (0, nt.Cq)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < s) {
                    const e = (0, nt.WC)(0, s, r.get()),
                      a = (0, nt.Cq)(ne.current, 40, e);
                    o.fov = a;
                    const n = Number(N(i).y) + t.delta[1] / 2;
                    if (i.style.transform = `translateY(${n}px)`, c) {
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
                    buttonWrapOpacity: xe.current.style.opacity,
                    canvasWrapOpacity: i.style.opacity,
                    fov: o.fov,
                    uiButtonsTransformY: N(xe.current).y,
                    canvasHeight: i.offsetHeight,
                    canvasTranslateY: Number(N(i).y),
                    accessibilityPlateY: Number(N(c.parentElement).y),
                    accessibilityPlateOpacity: c.parentElement.style.opacity
                  };
                  a.current < ie / 2 ? (i.style.pointerEvents = "none", w().to(e, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    uiButtonsTransformY: ie,
                    canvasHeight: d,
                    accessibilityPlateOpacity: 0,
                    duration: q.sidebar.mobile.drawerSnap.duration,
                    ease: q.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      i.style.opacity = e.canvasWrapOpacity, xe.current.style.opacity = e.buttonWrapOpacity, xe.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, c.parentElement.style.opacity = e.accessibilityPlateOpacity
                    }
                  })) : a.current > s / 2 ? (i.style.pointerEvents = "all", w().to(e, {
                    buttonWrapOpacity: 1,
                    uiButtonsTransformY: s,
                    canvasWrapOpacity: 1,
                    fov: 40,
                    canvasHeight: d,
                    canvasTranslateY: Number(be.current) + s / 2,
                    accessibilityPlateY: Number(Ne.current.y) + s / 2,
                    duration: q.sidebar.mobile.drawerSnap.duration,
                    ease: q.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      i.style.opacity = e.canvasWrapOpacity, xe.current.style.opacity = e.buttonWrapOpacity, xe.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px)`, o.fov = e.fov, o.updateProjectionMatrix(), i.style.transform = `translateY(${e.canvasTranslateY}px)`, c.parentElement.style.transform = `translate(${Ne.current.x}px,\n                                ${e.accessibilityPlateY}px) scale(${Ne.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (i.style.pointerEvents = "all", w().to(e, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    uiButtonsTransformY: 0,
                    fov: ne.current,
                    canvasHeight: -ie,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Ne.current.y),
                    duration: q.sidebar.mobile.drawerSnap.duration,
                    ease: q.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      i.style.opacity = e.canvasWrapOpacity, xe.current.style.opacity = e.buttonWrapOpacity, xe.current.style.transform = `translate(0px, ${e.uiButtonsTransformY}px`, c.parentElement.style.opacity = e.accessibilityPlateOpacity, o.fov = e.fov, o.updateProjectionMatrix(), i.style.transform = `translateY(${e.canvasTranslateY}px)`;
                      const t = N(c.parentElement),
                        a = Number(t.x),
                        r = Number(t.scale),
                        n = e.accessibilityPlateY;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }))
                }
            }), [W, xe.current, ie, y, oe, _e]),
            ze = (0, r.useCallback)((e => {
              const t = D[U.UI]?.current;
              if (!t || !W?.scene || !e) return;
              const {
                camera: a,
                renderer: r
              } = W, n = r.domElement, {
                y: s,
                sidebarRef: o
              } = e, l = t.offsetHeight, i = {
                mobileSidebarHeight: s.get(),
                opacity: o.current.style.opacity,
                height: n.offsetHeight,
                fov: a.fov
              };
              w().to(i, {
                opacity: 1,
                height: l,
                mobileSidebarHeight: .4 * window.innerHeight,
                fov: ne.current,
                duration: q.sidebar.mobile.drawer.duration,
                ease: q.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  o.current.style.transform = `translateY(${i.mobileSidebarHeight}px)`, o.current.style.opacity = i.opacity, xe.current.style.opacity = i.opacity, n.style.height = i.height, s.set(i.mobileSidebarHeight), a && (a.fov = i.fov, a.updateProjectionMatrix())
                },
                onComplete: () => {
                  n.style.pointerEvents = "all"
                }
              }), o.current.style.pointerEvents = "none"
            }), [D, W, oe]),
            Ue = (0, r.useCallback)((e => {
              if (!W?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e;
              null === ye && he(r);
              const {
                renderer: n
              } = W;
              t.current.style.pointerEvents = "all";
              const s = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity,
                canvasY: 0
              };
              w().to(s, {
                opacity: 1,
                mobileSidebarHeight: 0,
                canvasY: .4 * window.innerHeight / 2,
                duration: q.sidebar.mobile.drawer.duration,
                ease: q.sidebar.mobile.drawer.ease,
                onUpdate: () => {
                  t.current.style.opacity = s.opacity, t.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, a.current = s.mobileSidebarHeight, r.set(a.current), xe.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, ve.current.style.transform = `translateY(${s.mobileSidebarHeight}px)`, n.domElement.style.transform = `translateY(${-1*s.canvasY}px)`
                }
              })
            }), [ye, W]),
            $e = (0, r.useMemo)((() => I ? (0, tt.jsx)(Pt, {
              isVisible: $,
              top: ie,
              bottom: ue,
              onTap: Ye,
              onDrag: Be,
              onHide: ze,
              onShow: Ue,
              mobileSidebarHeight: oe,
              children: We
            }) : (0, tt.jsx)("div", {
              ref: ae,
              className: It.sidebar,
              children: We
            })), [xe.current, ve.current, C, oe, I, $, D, ae.current, F, ie, ue]);
          return (0, tt.jsxs)("div", {
            className: It.viewPlate,
            ref: se,
            children: [(0, tt.jsx)(Ct, {
              title: t("lp.modal.delete.title"),
              secondaryText: t("lp.modal.delete.description").replace("{plateText}", v?.plateText ?? ""),
              buttons: [{
                buttonText: t("lp.modal.delete.confirm"),
                onClick: () => {
                  (async () => {
                    try {
                      if (!v || !n) return;
                      const {
                        plateText: e
                      } = v;
                      Q(!0);
                      const {
                        error: t,
                        status: r
                      } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/plate", {
                        pingBearer: a,
                        fetchOptions: {
                          method: "DELETE"
                        },
                        query: {
                          plateText: e
                        }
                      });
                      if (t) throw Object.assign(new Error(""), t);
                      r && b(x), Le()
                    } catch (e) {
                      p(["api", e])
                    }
                  })(), Se({
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
                  Se({
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
            }), $e, (0, tt.jsxs)("div", {
              ref: re,
              className: It.ui,
              children: [(0, tt.jsx)(St, {
                onClick: Le
              }), (0, tt.jsx)(Et.animated.div, {
                ref: xe,
                className: It.uiBottom,
                style: ye ? {
                  y: ye
                } : void 0,
                children: (0, tt.jsx)(kt, {})
              })]
            }), (0, tt.jsxs)("div", {
              className: It.deleteBtnContainer,
              ref: ve,
              children: [(0, tt.jsx)("button", {
                "aria-label": t("lp.modal.delete.title"),
                className: It.deleteBtn,
                disabled: v?.noDelete || J,
                onClick: () => {
                  v?.noDelete || J || (Se({
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
              }), v?.noDelete && (0, tt.jsx)("label", {
                htmlFor: "nodelete",
                className: It.noDeleteClarification,
                children: t("lp.view.nodelete")
              })]
            })]
          })
        })),
        At = (0, d.withTranslations)((e => {
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
          }), (0, tt.jsx)("p", {
            className: "rockstargames-modules-gtao-license-plated8dc05f054396924b408e16dea1c411f rockstargames-modules-gtao-license-platef12013d76eb62b07523fe96d62fef0f1 " + (!1 === r ? "rockstargames-modules-gtao-license-plateb5883ece595313dbdebb2bdcc0f19992" : ""),
            children: n(o)
          })
        })),
        Lt = {
          pillBtn: "rockstargames-modules-gtao-license-plateb83c41648f428d0c335575cfda0ad68b",
          selected: "rockstargames-modules-gtao-license-platecb72e49e43291fc3fa35d73ebc93a020",
          lpStyleOption: "rockstargames-modules-gtao-license-platef9c4c46735ea44a8fd03b964aa9cfdd1",
          lpStyleOptionImage: "rockstargames-modules-gtao-license-platea848dacaa90a9ece96907bdfb6e97a30"
        },
        jt = e => {
          let {
            style: t,
            tabIndex: a
          } = e;
          const {
            state: n,
            setSelectedStyle: s
          } = et(), {
            plates: o,
            selectedStyle: l
          } = n, i = (0, r.useCallback)((() => {
            H.forEach((e => ({
              ...e,
              selected: !0
            }))), s(t.id)
          }), [o, t]);
          return (0, tt.jsx)("button", {
            className: [Lt.lpStyleOption, l === t.id ? Lt.selected : ""].join(" "),
            onClick: () => i(),
            type: "button",
            tabIndex: a,
            "aria-label": `${t.displayName} plate style`,
            children: (0, tt.jsx)("img", {
              className: Lt.lpStyleOptionImage,
              src: t.previewUrl,
              alt: t.displayName
            })
          })
        },
        Mt = (0, d.withTranslations)((e => {
          let {
            setIsLoading: t,
            validateFnRef: a,
            t: n
          } = e;
          const {
            loggedIn: s
          } = (0, i.useRockstarUser)(), o = (0, l.useRockstarTokenPing)(), {
            setCurrentView: c,
            setPlateNumber: u,
            setPlateNumberStatus: m,
            setError: p,
            setRefs: f,
            state: g
          } = et(), {
            currentView: b,
            plateStyles: y,
            plateNumber: h,
            plateNumberStatus: x,
            isMobile: v,
            xmas23PlatesAllowed: w
          } = g, [E, _] = (0, r.useState)(0), {
            isValid: P
          } = x, S = (0, r.useMemo)((() => h), [h]), {
            track: k
          } = (0, i.useGtmTrack)(), T = {
            view_name: "license plate creator - " + (s ? "create plate form" : "try lp editor")
          }, C = (0, r.useRef)(null), R = (0, r.useRef)(null), I = (0, r.useRef)(null), N = (0, r.useRef)(null), O = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            f(U.NEW_PLATE_FORM, I)
          }), [I.current]), (0, r.useEffect)((() => {
            b === fe.NEW_PLATE && document.activeElement === O.current && O.current?.setSelectionRange(E, E)
          }), [E]);
          const A = b === fe.NEW_PLATE ? 0 : -1,
            L = (0, r.useCallback)((() => {
              (async () => {
                if (s && h) try {
                  t(!0);
                  const {
                    error: e,
                    result: a
                  } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/validate", {
                    pingBearer: o,
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
                    isValid: l
                  } = a;
                  m({
                    isValid: l,
                    isMalformed: r,
                    isProfane: n,
                    isReserved: s,
                    statusPlateNumberBasis: h
                  }), l && (c(fe.CONFIRM_ORDER), k({
                    ...T,
                    event: "virtualPageview",
                    display_type: v ? "mobile" : "desktop",
                    view_name: "license plate creator - confirm order"
                  }))
                } catch (e) {
                  p(["api", e])
                }
              })()
            }), [s, h]);
          let j;
          return (0, r.useEffect)((() => {
            a && (a.current = L)
          }), [L, a]), j = (0, r.useMemo)((() => y?.filter((e => !e.isXmas2023Plate || e.isXmas2023Plate && w)).map((e => (0, tt.jsx)(jt, {
            style: e,
            tabIndex: A
          }, e.id)))), [y, b]), (0, tt.jsxs)("form", {
            ref: I,
            className: "rockstargames-modules-gtao-license-plated0ddb8fd0986a7382551faea1fad24fa",
            onSubmit: e => {
              e.preventDefault(), O.current?.blur()
            },
            onFocusCapture: e => e.preventDefault(),
            children: [(0, tt.jsxs)("section", {
              children: [(0, tt.jsx)("label", {
                htmlFor: "plate-text-input",
                ref: C,
                children: n("lp.create.title")
              }), (0, tt.jsxs)("div", {
                ref: R,
                className: "rockstargames-modules-gtao-license-plateef9da71cf1e6161bfcff7856d32e9639",
                children: [(0, tt.jsx)("i", {
                  className: "" + (!1 === P ? "rockstargames-modules-gtao-license-platec748df3952867c76489727613f414305" : "")
                }), (0, tt.jsx)("input", {
                  id: "plate-text-input",
                  autoComplete: "off",
                  maxLength: 8,
                  onInput: e => {
                    const t = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").toUpperCase().slice(0, 8);
                    u(t), _(e.target.selectionStart || 0), x.isValid || m({
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
                }), (0, tt.jsx)(At, {
                  plateNumberStatus: x
                })]
              })]
            }), (0, tt.jsx)("hr", {
              className: "rockstargames-modules-gtao-license-plateadd724ae5e86972d7020c3691280e5f6"
            }), (0, tt.jsxs)("section", {
              children: [(0, tt.jsx)("label", {
                htmlFor: "plate-style-selector",
                children: n("lp.create.bgselector")
              }), (0, tt.jsx)("div", {
                id: "plate-style-selector",
                ref: N,
                className: "rockstargames-modules-gtao-license-platecca6b8628101d08d64c8c82655607660",
                children: j
              })]
            })]
          })
        })),
        Vt = e => {
          let {
            buttons: t,
            refName: a = U.SIDEBAR_BUTTONS,
            isLoading: n,
            tabIndex: s
          } = e;
          const o = (0, r.useRef)(null),
            {
              setRefs: l
            } = et();
          return (0, r.useEffect)((() => {
            l(a, o)
          }), [o.current]), (0, tt.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platecf91a67855e8fd02c5c67f9329f2e17a",
            ref: o,
            children: t.slice(0, 2).map((e => {
              let {
                buttonText: t,
                isDisabled: a,
                onClick: r
              } = e;
              return (0, tt.jsx)("button", {
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
        Dt = "rockstargames-modules-gtao-license-plateb8ee1e50e3ee7d2a0c64ff5766f1d90d",
        Wt = "rockstargames-modules-gtao-license-platef5a6ad5cfb833ab500b3a27252e51e07",
        Yt = (0, d.withTranslations)((e => {
          let {
            onToggleView: t = (() => {}),
            is3DToggle: a = !1,
            t: n
          } = e;
          const [s, o] = (0, r.useState)(!1), [l, c] = (0, r.useState)(!1), {
            state: d,
            setRefs: u
          } = et(), {
            currentView: m,
            isMobile: p,
            is3D: f,
            shouldForce2D: g
          } = d, {
            track: b
          } = (0, i.useGtmTrack)(), y = {
            view_name: "license plate creator - create plate form"
          }, h = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            a || u(U.TOGGLE_VIEW_BUTTON, h)
          }), [h.current, a]), (0, r.useEffect)((() => {
            m === fe.NEW_PLATE && g && o(!1)
          }), [g, m]), (0, r.useEffect)((() => {
            a || (m === fe.NEW_PLATE ? s ? (b({
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
            }) : o(!1))
          }), [s, m]);
          const x = {
              carViewToggle: {
                plateView: n("lp.create.plateview"),
                carView: n("lp.create.carview")
              },
              dimensionToggle: {
                threeDimensions: "3D",
                twoDimensions: "2D"
              }
            },
            v = a ? "Switch between 2D and 3D views" : "Switch between viewing the plate on a car and by itself";
          let w = "";
          return w = a ? f ? x.dimensionToggle.threeDimensions : x.dimensionToggle.twoDimensions : s ? x.carViewToggle.carView : x.carViewToggle.plateView, (0, tt.jsxs)(tt.Fragment, {
            children: [(0, tt.jsxs)("button", {
              ref: h,
              type: "button",
              "data-checked": a ? f : s,
              className: "rockstargames-modules-gtao-license-platec79db25e7b0cf79a342e235bf34ad560",
              onClick: () => {
                t({
                  onStart: () => {
                    o(!s)
                  }
                })
              },
              tabIndex: 0,
              "aria-label": v,
              children: [(0, tt.jsx)("div", {
                className: Dt,
                children: (0, tt.jsx)("p", {
                  className: l ? Wt : "",
                  children: a ? x.dimensionToggle.twoDimensions : x.carViewToggle.plateView
                })
              }), (0, tt.jsx)("div", {
                className: Dt,
                children: (0, tt.jsx)("p", {
                  className: l ? Wt : "",
                  children: a ? x.dimensionToggle.threeDimensions : x.carViewToggle.carView
                })
              }), (0, tt.jsx)("span", {
                className: "rockstargames-modules-gtao-license-platecb346dd2e906d02e1fbafcc66427844f"
              })]
            }), (0, tt.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platef3e0c00d2db570ef55ff1ed63a627bad",
              "aria-live": "polite",
              children: w
            })]
          })
        })),
        Bt = {
          pillBtn: "rockstargames-modules-gtao-license-platee6fa8687abc44601278f108849868880",
          selected: "rockstargames-modules-gtao-license-platee89e587c75d075af96e3abee025d758d",
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
        zt = (0, d.withTranslations)((e => {
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
          } = et(), {
            currentView: p,
            isExpanded: f,
            refs: g,
            three: b,
            isMobile: y,
            accessiblePlates: h
          } = m, x = (0, r.useRef)(null), E = (0, r.useRef)(null), _ = (0, r.useRef)(null), P = (0, r.useRef)(null), S = (0, r.useRef)(null), {
            track: k
          } = (0, i.useGtmTrack)(), C = {
            view_name: "license plate creator - order confirmed"
          };
          (0, r.useEffect)((() => {
            u(U.ORDER_BG, S)
          }), [S.current]);
          const R = g[U.CONFIRM_CONTENT]?.current,
            I = g[U.CONFIRM_SIDEBAR]?.current,
            N = g[U.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            O = g[U.CONFIRM_SIDEBAR_BUTTONS]?.current,
            A = g[U.NEW_PLATE_SIDEBAR]?.current,
            L = g[U.CANVAS_WRAP]?.current,
            j = g[U.SIDEBAR_BUTTONS]?.current,
            M = S.current,
            V = x.current,
            D = _.current,
            W = P.current,
            Y = E.current,
            B = g[U.UI]?.current,
            z = g[U.NEW_PLATE_UI]?.current,
            $ = g[U.SIDEBAR]?.current,
            H = g[U.ACCESSIBLE_PLATE_GRID]?.current,
            F = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            F.current = h
          }), [h]);
          const X = (0, r.useCallback)((() => {
            c(fe.LIST_PLATES), k({
              ...C,
              event: "cta_return_page",
              event_category: "cta",
              event_action: "return_page",
              text: n("lp.success.cta").toLowerCase()
            })
          }), []);
          return (0, r.useEffect)((() => {
            if (!b || !F?.current) return;
            const {
              renderer: e,
              camera: a,
              originalCameraPosition: r,
              originalCameraFov: n,
              controls: l,
              originalControlsTarget: i
            } = b;
            if (!(e && M && R && H)) return;
            const c = T();
            if (f && p === fe.LIST_PLATES) {
              const t = w().timeline({
                defaults: {
                  ease: q.transaction.confirmOrder.ease,
                  duration: q.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!1)
                }
              });
              if (w().to([e.domElement, $], {
                  autoAlpha: 1,
                  ease: q.transaction.fade.landingPage.ease,
                  duration: q.transaction.fade.landingPage.duration
                }), y) {
                const e = {
                  opacity: 1
                };
                t.to(e, {
                  drawerHeight: s,
                  opacity: 0,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const t = s - o.get();
                    M.style.transform = `translateY(${t}px)`, M.style.opacity = e.opacity
                  }
                }, 0)
              } else t.to(M, {
                autoAlpha: 0
              }, 0).to([V, D, W], {
                autoAlpha: 0
              }), t.to(R, {
                x: "100vw",
                pointerEvents: "none",
                zIndex: "revert"
              }, 0), t.to(M, {
                x: "-100vw"
              }, 0), w().set([A, z], {
                x: 0
              }), w().set(I, {
                left: "revert"
              })
            } else if (t) {
              const t = w().timeline({
                defaults: {
                  ease: q.transaction.confirmOrder.ease,
                  duration: q.transaction.confirmOrder.duration
                },
                onComplete: () => {
                  d(!0), w().set(L, {
                    x: 0
                  }), b.scene.traverse((e => {
                    e.name === ge.LP && 0 === e.userData.index && e.material && (e.material.opacity = 0)
                  })), a.position.set(r.x, r.y, r.z), l?.current && (l.current.minDistance = 0, l.current.target.set(i.x, i.y, i.z)), B && (a.fov = n, a.updateProjectionMatrix(), G.saturation.value = 0)
                },
                onStart: () => {
                  w().set(Y, {
                    height: 0
                  })
                }
              });
              if (t.to(e.domElement, {
                  autoAlpha: 0
                }, 0), F.current.forEach(((e, t) => {
                  w().to(e.current.style, {
                    opacity: 0,
                    onComplete: 0 === t ? () => {
                      H.style.transform = "none"
                    } : void 0
                  })
                })), t.to(V, {
                  autoAlpha: 1,
                  ease: v.Power1.easeIn,
                  duration: .3,
                  onComplete: () => {
                    V.focus()
                  }
                }, "<1").to(Y, {
                  height: "auto",
                  ease: v.Power2.easeInOut,
                  duration: .4
                }, "<1").to([D, W], {
                  autoAlpha: 1,
                  ease: v.Power1.easeIn,
                  duration: .3,
                  stagger: .1
                }, "<0.2"), y) {
                if (o) {
                  w().set(M, {
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
                      M.style.transform = `translateY(${s-e.drawerHeight}px`, o.set(e.drawerHeight), O && (O.style.pointerEvents = "none", O.style.opacity = String(1 - e.lerp), O.style.transform = `translateY(${100*e.lerp}%)`), N && (N.style.pointerEvents = "none", N.style.opacity = String(1 - e.lerp)), t.to(j, {
                        autoAlpha: 0
                      }, "<"), M.style.opacity = e.lerp
                    }
                  }, 0)
                }
              } else t.to(R, {
                x: 0,
                pointerEvents: "all",
                zIndex: "3"
              }, 0).to(M, {
                x: 0
              }, 0).to(M, {
                autoAlpha: 1
              }, 0).to(I, {
                autoAlpha: 0,
                ease: q.transaction.fade.out.ease,
                duration: q.transaction.fade.out.duration
              }, 0).set(M, {
                pointerEvents: "all"
              }), I && t.to(I, {
                left: 100 - c + "vw"
              }, 0);
              k({
                ...C,
                event: "virtualPageview",
                display_type: y ? "mobile" : "desktop",
                view_name: "license plate creator - order received"
              })
            }
          }), [t, S.current, b, p, y ? o : void 0]), (0, tt.jsx)("div", {
            className: [Bt.orderConfirmed, f ? Bt.visible : ""].join(" "),
            children: (0, tt.jsx)("div", {
              ref: S,
              className: Bt.background,
              children: (0, tt.jsxs)("div", {
                className: Bt.content,
                children: [(0, tt.jsx)("h1", {
                  ref: x,
                  className: Bt.contentHeading,
                  tabIndex: -1,
                  children: n("lp.success.title")
                }), (0, tt.jsxs)("div", {
                  ref: E,
                  className: Bt.secondaryWrap,
                  children: [(0, tt.jsx)("p", {
                    ref: _,
                    className: Bt.plateRedemptionInstructions,
                    dangerouslySetInnerHTML: {
                      __html: n("lp.success.description").replace("{car_name}", a)
                    }
                  }), (0, tt.jsx)("button", {
                    ref: P,
                    type: "button",
                    className: Bt.backToPlatesButton,
                    onClick: () => {
                      X()
                    },
                    "aria-label": n("lp.success.cta"),
                    tabIndex: l,
                    children: (0, tt.jsx)("span", {
                      className: Bt.ctaText,
                      children: n("lp.success.cta")
                    })
                  })]
                })]
              })
            })
          })
        })),
        Ut = (0, d.withTranslations)((e => {
          let {
            t,
            top: a,
            drawerY: n
          } = e;
          const {
            state: s,
            setError: o,
            setCurrentView: c,
            setIsOrderConfirmed: u,
            setPendingOrder: m,
            setRefs: p,
            setSelectedVehicle: f
          } = et(), {
            currentView: g,
            selectedVehicle: b,
            pendingOrder: y,
            plates: h,
            three: v,
            isMobile: _,
            refs: P,
            vehicles: S,
            selectedStyle: k,
            isOrderConfirmed: C,
            isExpanded: R
          } = s, {
            selectedCharacterTuple: I
          } = (0, i.useRockstarUserState)(), {
            loggedIn: O
          } = (0, i.useRockstarUser)(), A = (0, l.useRockstarTokenPing)(), L = g === fe.CONFIRM_ORDER, [j, M] = (0, r.useState)(R), [V, D] = (0, r.useState)(!1), W = (0, r.useRef)(null), Y = (0, r.useRef)(null), B = (0, r.useRef)(null), {
            track: z
          } = (0, i.useGtmTrack)(), $ = {
            view_name: "license plate creator - confirm order"
          }, H = g === fe.CONFIRM_ORDER ? 0 : -1;
          (0, r.useEffect)((() => {
            p(U.CONFIRM_SIDEBAR, W)
          }), [W.current]), (0, r.useEffect)((() => {
            p(U.CONFIRM_CONTENT, Y)
          }), [Y.current]);
          const F = P[U.ORDER_BG]?.current,
            G = P[U.CONFIRM_CONTENT]?.current,
            X = P[U.CONFIRM_SIDEBAR]?.current,
            Z = P[U.CONFIRM_SIDEBAR_BUTTONS_PORTAL]?.current,
            K = P[U.CONFIRM_SIDEBAR_BUTTONS]?.current,
            J = P[U.ACCESSIBLE_PLATE_GRID]?.current,
            Q = P[U.NEW_PLATE_SIDEBAR]?.current,
            ee = P[U.CANVAS_WRAP]?.current,
            te = P[U.SIDEBAR_BUTTONS]?.current,
            ae = P[U.NEW_PLATE_UI]?.current;

          function re() {
            if (z({
                ...$,
                event: "virtualPageview",
                display_type: _ ? "mobile" : "desktop",
                view_name: "license plate creator - create plate form"
              }), !(v?.camera && G && X && ee && F && J)) return;
            const e = {
                ease: _ ? q.sidebar.mobile.drawer.ease : q.transaction.confirmOrder.ease,
                duration: _ ? q.sidebar.mobile.drawer.duration : q.transaction.confirmOrder.duration
              },
              t = w().timeline({
                defaults: {
                  ...e
                },
                onComplete: () => {
                  M(!1)
                }
              });
            te && w().set(te, {
              pointerEvents: "all"
            }), _ ? t.to(te, {
              autoAlpha: 1
            }, "<") : (X && t.to(X, {
              autoAlpha: 0
            }, 0), g === fe.NEW_PLATE && t.to(Q, {
              autoAlpha: 1
            }, "<"), t.to([Q, ee, ae], {
              x: 0
            }, "<"), t.to(G, {
              x: "100vw"
            }, "<"))
          }(0, r.useEffect)((() => {
            g === fe.LIST_PLATES && j && re()
          }), [g, j]);
          const ne = (0, r.useCallback)((() => {
            (async () => {
              try {
                const e = E(k);
                if (!(O && b && e?.name && I)) return;
                const [t, a] = I, {
                  index: r
                } = b, n = {
                  vehicleIndex: r,
                  plateText: h?.[0]?.plateText,
                  plateStyle: e.name
                };
                D(!0);
                const {
                  error: s
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: A,
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
                  result: l
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: A,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (o) throw Object.assign(new Error(""), o);
                l[`character${a}Pending`] && m(l)
              } catch (e) {
                o(["api", e])
              }
            })()
          }), [O, I, h?.[0]?.plateText, b, V, k]);
          (0, r.useEffect)((() => {
            if (g !== fe.CONFIRM_ORDER || C) {
              if (_ && !C) {
                te && w().set(te, {
                  pointerEvents: "all"
                });
                const e = {
                  lerp: 0
                };
                w().to(e, {
                  lerp: 1,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    K && (K.style.opacity = "" + (1 - e.lerp), K.style.transform = `translateY(${100*e.lerp}%`)
                  }
                }), X && w().to(X, {
                  autoAlpha: 0,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease
                }), Z && (Z.style.pointerEvents = "none", w().to(Z.style, {
                  opacity: 0,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease
                }))
              }
            } else {
              if (!(v?.camera && G && X && ee && F && J)) return;
              let e = T();
              _ || 100 !== e || (e = 0);
              const t = w().timeline({
                  defaults: {
                    ease: q.transaction.confirmOrder.ease,
                    duration: q.transaction.confirmOrder.duration
                  },
                  onComplete: () => {
                    M(!0), B.current?.focus()
                  }
                }),
                a = {
                  autoAlpha: 1
                },
                r = {
                  autoAlpha: 0
                };
              if (te && w().set(te, {
                  pointerEvents: "none"
                }), _ && (a.ease = q.sidebar.mobile.drawer.ease, a.duration = q.sidebar.mobile.drawer.duration, a.delay = q.sidebar.mobile.drawer.duration / 2, r.ease = q.sidebar.mobile.drawer.ease, r.duration = q.sidebar.mobile.drawer.duration, X && t.to(X, a, 0), J)) {
                const e = {
                    current: 0
                  },
                  a = {
                    start: Number(getComputedStyle(J).opacity),
                    end: 1
                  };
                t.to(e, {
                  current: 1,
                  delay: q.sidebar.mobile.drawer.duration / 2,
                  onUpdate: () => {
                    const {
                      current: t
                    } = e, r = (0, nt.Cq)(a.start, a.end, t);
                    J.style.opacity = r
                  }
                }, 0)
              }
              if (_) {
                if (K) {
                  K.style.pointerEvents = "all", w().set(K.style, {
                    visibility: "visible"
                  });
                  const e = {
                    lerp: 0
                  };
                  w().to(e, {
                    lerp: 1,
                    duration: q.sidebar.mobile.drawer.duration,
                    ease: q.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      K.style.opacity = e.lerp, K.style.transform = `translateY(${100*(1-e.lerp)}%`
                    }
                  })
                }
                Z && (Z.style.pointerEvents = "all", w().set(Z.style, {
                  visibility: "visible"
                }), w().to(Z.style, {
                  opacity: 1,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease
                })), t.to(te, {
                  autoAlpha: 0
                }, "<")
              } else {
                if (Q && ee && (t.to([Q, ee, ae], {
                    x: -1 * e + "vw"
                  }, "<"), J)) {
                  const {
                    x: a,
                    y: r,
                    scale: n
                  } = N(J), s = {
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
                      } = o, t = `translate(${(0,nt.Cq)(s.x.start,s.x.end,e)}px, ${(0,nt.Cq)(s.y.start,s.y.end,e)}px) scale(${(0,nt.Cq)(s.scale.start,s.scale.end,e)})`;
                      J.style.transform = t
                    }
                  }, "<")
                }
                t.to(G, {
                  x: 100 - e + "vw"
                }, "<"), X && t.to(X, {
                  autoAlpha: 1
                }, "<"), t.to(Q, {
                  autoAlpha: 0
                }, "<"), t.set(F, {
                  x: `${-100+e}vw`
                }, "<")
              }
            }
            j && !L && C && u(!1)
          }), [v, g, _, K, C, Z, T()]), (0, r.useEffect)((() => {
            if (g !== fe.CONFIRM_ORDER && S?.length) {
              let e = S[0];
              if (y) {
                const t = S.find((e => {
                  let {
                    manufacturer: t,
                    name: a
                  } = e;
                  return t === y.manufacturerName && a === y.vehicleName
                }));
                t && (e = t)
              }
              f(e)
            }
          }), [S, y]);
          const se = (0, r.useCallback)((e => {
              if (!S?.length) return;
              const t = S.find((t => {
                let {
                  id: a
                } = t;
                return a === Number(e.target.value)
              })) ?? null;
              f(t), z({
                ...$,
                event: "license_plate_select_vehicle",
                event_category: "license_plate",
                event_action: "select_vehicle",
                position: e.target.selectedIndex
              })
            }), [S]),
            oe = (0, tt.jsx)(Vt, {
              refName: U.CONFIRM_SIDEBAR_BUTTONS,
              buttons: [{
                buttonText: t("lp.confirm.cancel"),
                isDisabled: V,
                onClick: () => {
                  c(fe.NEW_PLATE), re(), z({
                    ...$,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: t("lp.confirm.cancel").toLowerCase()
                  })
                }
              }, {
                buttonText: V ? (0, tt.jsx)(x.LoadingAnimation, {}) : t("lp.confirm.next"),
                isDisabled: !O || !b || V,
                onClick: () => {
                  ne(), z({
                    ...$,
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
          let le;
          return _ && (le = Z ? (0, wt.createPortal)(oe, Z) : null), (0, tt.jsx)("div", {
            className: "rockstargames-modules-gtao-license-platea29469cb6841adfdb317c0863c552ee1",
            "aria-hidden": g !== fe.CONFIRM_ORDER,
            tabIndex: -1,
            children: (0, tt.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plateab4356b7d6ef5a4a6201db746fc5a985",
              ref: Y,
              children: [(0, tt.jsx)("span", {}), (0, tt.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateccf3da9613752077116fd5ec0338c7a9",
                ref: W,
                children: [(0, tt.jsxs)("form", {
                  className: "rockstargames-modules-gtao-license-platef11b2e09ddb486e97daf0b4e6d31e0a0",
                  onSubmit: e => e.preventDefault(),
                  children: [(0, tt.jsxs)("div", {
                    className: "rockstargames-modules-gtao-license-plateac9d03dae4df339b590e83d075364ece",
                    children: [(0, tt.jsx)("h2", {
                      children: t("lp.confirm.title")
                    }), (0, tt.jsxs)("section", {
                      children: [(0, tt.jsx)("label", {
                        htmlFor: "cars",
                        children: t("lp.confirm.selector")
                      }), (0, tt.jsx)("div", {
                        className: "rockstargames-modules-gtao-license-platece60e8e785ccb4092aab63da0a0cf30c",
                        children: (0, tt.jsx)("select", {
                          ref: B,
                          value: b?.id ?? "null",
                          onChange: se,
                          required: !0,
                          tabIndex: H,
                          "aria-label": t("lp.confirm.selector"),
                          children: S?.map(((e, t) => {
                            let {
                              id: a,
                              manufacturer: r,
                              name: n
                            } = e;
                            return (0, tt.jsx)("option", {
                              value: a,
                              children: `${r||""} ${n}`.trim()
                            }, t)
                          }))
                        })
                      }), (0, tt.jsx)("p", {
                        className: "rockstargames-modules-gtao-license-platedbaabca0190273add141f7d25c2ed3ed",
                        children: t("lp.confirm.helper")
                      })]
                    })]
                  }), (0, tt.jsx)("p", {
                    className: "rockstargames-modules-gtao-license-plateb5fcb2ced6788958d5dbbc1284fbbda3",
                    children: t("lp.confirm.info")
                  })]
                }), _ ? le : oe]
              }), (0, tt.jsx)(zt, {
                drawerY: n,
                top: a,
                isVisible: C,
                vehicleModel: `${b?.manufacturer||""} ${b?.name}`.trim(),
                tabIndex: C ? H : -1
              })]
            })
          })
        })),
        $t = {
          pillBtn: "rockstargames-modules-gtao-license-plateb335eb9f369d01bb23e18b2ac61a1465",
          selected: "rockstargames-modules-gtao-license-platefb4227f64cf16cbe0ecb0353adeb2909",
          CTAWrap: "rockstargames-modules-gtao-license-platecafeb080e640b040ecda82ddea315db4",
          loggedOut: "rockstargames-modules-gtao-license-plateeda8b08aa17ebb271744399f20c1a14c",
          maxPlatesReachedWrap: "rockstargames-modules-gtao-license-platece0c4b63b7795c479ee0445aeabd0780",
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
          maxPlatesReached: "rockstargames-modules-gtao-license-plateab8e37b20f2464b273824d5efe215a76",
          hidden: "rockstargames-modules-gtao-license-platebe7765facc4eb66343cc0134b0d77235",
          loggedOutCTA: "rockstargames-modules-gtao-license-platea33805ac05cfcc38a4af2065c5405781",
          ctaIcon: "rockstargames-modules-gtao-license-platea9e9fc421475bea28dbe3e806f715c89"
        },
        Ht = "hidden",
        Ft = "visible",
        Gt = (0, d.withTranslations)((e => {
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
            setIsExpanded: d,
            setRefs: u
          } = et(), {
            loggedIn: p
          } = (0, i.useRockstarUser)(), {
            accessiblePlates: f,
            currentView: g,
            gridScale: b,
            gridState: y,
            loginUrl: h,
            is3D: v,
            isMobile: E,
            isExpanded: _,
            isScrollEnabled: P,
            lastScrollY: T,
            lastView: C,
            pendingOrder: I,
            plateNumber: A,
            plateNumberStatus: L,
            refs: M,
            three: V,
            realHeight: D,
            shouldForce2D: W
          } = s, [$, H] = (0, r.useState)(0), [F, Z] = (0, r.useState)(!1), [K, J] = (0, r.useState)(!1), [ne, se] = (0, r.useState)(.4 * window.innerHeight), [le, ie] = (0, r.useState)(-1 * (.6 * window.innerHeight - 80)), ce = (0, r.useRef)(ne), [be, ye] = (0, r.useState)(null), [he, xe] = (0, r.useState)(!1), [ve, we] = (0, r.useState)(null), Ee = (0, r.useRef)(null), _e = (0, r.useRef)(null), Pe = (0, r.useRef)(null), Se = (0, r.useRef)(null), ke = (0, r.useRef)(null), Te = (0, r.useRef)(!1), Ce = (0, r.useRef)(!1), [Re, Ie] = (0, r.useState)(null), Ne = (0, r.useRef)(Re), Oe = (0, r.useRef)(null), Ae = (0, r.useRef)(null), Le = (0, r.useRef)(null), je = (0, r.useRef)(null), Me = (0, r.useRef)(null), Ve = (0, r.useRef)(null), De = (0, r.useRef)(null), We = (0, r.useRef)(null), Ye = (0, r.useRef)(null), Be = (0, r.useRef)(null), ze = (0, r.useRef)(null), Ue = (0, r.useRef)(null), {
            track: $e
          } = (0, i.useGtmTrack)(), He = {
            view_name: "license plate creator - create plate form"
          };
          (0, r.useEffect)((() => {
            f?.[0]?.current && g === fe.NEW_PLATE && we(N(f[0].parentElement))
          }), [f, g]);
          const Fe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            ve && (Fe.current = ve)
          }), [ve]), (0, r.useEffect)((() => {
            const e = g === fe.NEW_PLATE || !(!S() || g !== fe.CONFIRM_ORDER);
            F !== e && Z(e), e || xe(!1)
          }), [g, S()]);
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
            const l = R(),
              i = E && g === fe.CONFIRM_ORDER ? 1.5 : 1,
              d = !k() || E ? l * b * i : 1.6 * l * b,
              u = [];
            a.traverse((e => {
              0 === e.userData.index && (ze.current = e, o.position.set(e.position.x, e.position.y + -4.58, e.position.z + -13.77)), e.name === ge.LP && u.push(e)
            }));
            const y = E ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
              h = w().timeline({
                defaults: {
                  duration: y,
                  ease: E ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease
                },
                onStart: () => {
                  Ne.current || (n.current.minDistance = 0)
                }
              });
            switch (e) {
              case Ft: {
                const e = M[U.CTA_SHADER]?.current;
                if (!n.current || !e) return;
                const o = new m.Vector3;
                ze?.current && ze.current.getWorldPosition(o);
                const l = M[U.ROOT].current,
                  y = document.getElementById("list-plates-sidebar"),
                  x = M[U.CANVAS_WRAP].current,
                  S = f?.[0].current;
                l && (y || E) && S && x && (g === fe.NEW_PLATE || E && g === fe.CONFIRM_ORDER) && Xe(h, t);
                const k = (new m.Vector3).copy(o);
                Ne.current && (k.z = o.z - 5 * b);
                const T = {
                  cameraPosition: {
                    start: (new m.Vector3).copy(r.position),
                    end: new m.Vector3(o.x, o.y, o.z + d)
                  },
                  controlsTarget: {
                    start: (new m.Vector3).copy(n.current.target),
                    end: k
                  },
                  plateOpacity: u.map(((e, t) => ({
                    start: e.material.opacity,
                    end: 0 === t && v ? 1 : 0
                  }))),
                  firstPlateSaturation: {
                    start: G.saturation.value,
                    end: 1
                  },
                  firstPlateOpacity: {
                    start: C === fe.LIST_PLATES ? .2 : 1,
                    end: 1
                  },
                  cameraFov: {
                    start: r.fov,
                    end: E && g === fe.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  },
                  ctaShaderOpacity: {
                    start: e.style.opacity,
                    end: 0
                  }
                };
                if (E && S) {
                  const e = N(S.parentElement);
                  T.translateY = {
                    start: g === fe.NEW_PLATE ? Ue?.current?.offsetHeight : 0,
                    end: g === fe.NEW_PLATE ? 0 : Ue?.current?.offsetHeight
                  }, T.startingDrawerHeight = Ee.current ? Ee.current.get() : 0, T.startingCanvasHeight = Number(N(s.domElement).y), T.canvasWidth = s.domElement.offsetWidth, T.canvasY = {
                    start: Number(N(s.domElement).y),
                    end: .4 * window.innerHeight / -2
                  }, T.canvasYConfirmOrder = {
                    start: Number(N(s.domElement).y),
                    end: le / 1.5
                  }, T.accessiblePlateGridYConfirmOrder = {
                    start: Number(e.y),
                    end: Number(e.y) + (T.canvasYConfirmOrder.end - T.canvasYConfirmOrder.start)
                  }, T.accessiblePlateGridXConfirmOrder = {
                    start: Number(e.x),
                    end: Number(e.x)
                  }, T.accessiblePlateGridScaleConfirmOrder = {
                    start: Number(N(S.parentElement).scale),
                    end: Number(N(S.parentElement).scale) / i
                  }, T.drawerHeight = {
                    start: Ee.current ? Ee.current.get() : 0,
                    end: g === fe.NEW_PLATE ? 0 : le / (_ ? 1 : 2)
                  }, T.cameraFov = {
                    start: r.fov,
                    end: g === fe.CONFIRM_ORDER ? 1.2 * ke.current : ke.current
                  }, T.canvasOpacity = {
                    start: s.domElement.style.opacity,
                    end: 1
                  }
                }
                const R = {
                  current: 0
                };
                if (g === fe.NEW_PLATE) {
                  const o = S.querySelector("canvas");
                  h.to(R, {
                    current: 1,
                    duration: E ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                    ease: E ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                    onUpdate: () => {
                      const a = t ? 1 : R.current,
                        l = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, a);
                      r.position.set(l.x, l.y, l.z);
                      const i = T.controlsTarget.start.clone().lerp(T.controlsTarget.end, a);
                      n.current.target.x = i.x, n.current.target.y = i.y, n.current.target.z = i.z, u.forEach(((e, t) => {
                        e.material && (e.material.opacity = (0, nt.Cq)(T.plateOpacity[t].start, T.plateOpacity[t].end, a))
                      }));
                      const c = (0, nt.Cq)(T.firstPlateSaturation.start, T.firstPlateSaturation.end, a);
                      if (G.saturation.value = c, p && !I && o) {
                        const e = !!I,
                          t = (0, nt.Cq)(T.firstPlateOpacity.start, T.firstPlateOpacity.end, a);
                        o.style.filter = `saturate(${c})${!e&&` opacity(${t})`}`
                      }
                      if (e) {
                        const t = (0, nt.Cq)(T.ctaShaderOpacity.start, T.ctaShaderOpacity.end, a);
                        e.style.opacity = t
                      }
                      if (T.cameraFov.start !== T.cameraFov.end && r.updateProjectionMatrix(), E) {
                        if (Ue.current) {
                          const e = (0, nt.Cq)(T.translateY.start, T.translateY.end, a);
                          Ue.current.style.transform = `translateY(${e}px)`, Ue.current.style.opacity = String(a), Ue.current.style.pointerEvents = "all"
                        }
                        Ee.current && Ee.current.set((0, nt.Cq)(T.drawerHeight.start, T.drawerHeight.end, a));
                        const e = (0, nt.Cq)(T.canvasY.start, T.canvasY.end, a);
                        s.domElement.style.transform = `translateY(${e}px)`
                      }
                    },
                    onStart: () => {
                      E ? document.body.style.touchAction = "none" : c(!1)
                    },
                    onComplete: () => {
                      g === fe.NEW_PLATE && (l && (l.style.touchAction = "none"), Se.current = new m.Vector3(r.position.x, r.position.y, r.position.z), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      })), E && (s.domElement.style.touchAction = "none", P && setTimeout((() => {
                        c(!1), document.body.style.touchAction = "auto"
                      }), 200), Pe.current = N(s.domElement).y), o && o.classList.remove($t.newOrder), s.render(a, r))
                    }
                  }, 0), E && h.to(M[U.NEW_PLATE_FORM].current, {
                    autoAlpha: 1,
                    duration: t ? 0 : q.sidebar.mobile.drawer.duration,
                    ease: q.sidebar.mobile.drawer.ease,
                    delay: q.sidebar.mobile.drawer.duration / 2,
                    onStart: () => {
                      Ue.current && (Ue.current.style.pointerEvents = "all", Ue.current.style.visibility = "visible")
                    }
                  }, 0), h.to([Ve.current, E ? void 0 : Me.current], {
                    autoAlpha: 1,
                    duration: t ? 0 : q.sidebar.in.duration,
                    ease: q.sidebar.in.ease,
                    delay: q.sidebar.in.delay,
                    onStart: () => {
                      De.current && (De.current.style.transform = "translateY(0px)")
                    },
                    onComplete: () => {
                      E || w().set([Me.current, M[U.SIDEBAR_BUTTONS]?.current], {
                        pointerEvents: "all"
                      }), Ve.current && Ve.current.querySelectorAll("button").forEach((e => {
                        e.style.pointerEvents = "all"
                      }))
                    }
                  }, "<")
                } else g === fe.CONFIRM_ORDER && (!0 === Ne.current && lt(), E && (h.to(R, {
                  current: 1,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    const {
                      current: e
                    } = R;
                    if (Ue.current) {
                      Ee.current && Ee.current.set((0, nt.Cq)(T.drawerHeight.start, T.drawerHeight.end, e));
                      const t = T.cameraPosition.start.clone().lerp(T.cameraPosition.end, e);
                      r.position.set(t.x, t.y, t.z), s.domElement.style.opacity = (0, nt.Cq)(T.canvasOpacity.start, T.canvasOpacity.end, e), Ve?.current?.style && (Ve.current.style.opacity = String(1 - e));
                      const a = (0, nt.Cq)(T.translateY.start, T.translateY.end, e);
                      Ue.current.style.transform = `translateY(${a}px)`, Ue.current.style.pointerEvents = "none";
                      const n = (0, nt.Cq)(T.canvasYConfirmOrder.start, T.canvasYConfirmOrder.end, e);
                      s.domElement.style.transform = `translateY(${n}px)`;
                      const o = (0, nt.Cq)(T.accessiblePlateGridXConfirmOrder.start, T.accessiblePlateGridXConfirmOrder.end, e),
                        l = (0, nt.Cq)(T.accessiblePlateGridYConfirmOrder.start, T.accessiblePlateGridYConfirmOrder.end, e),
                        i = (0, nt.Cq)(T.accessiblePlateGridScaleConfirmOrder.start, T.accessiblePlateGridScaleConfirmOrder.end, e);
                      S?.parentElement && (S.parentElement.style.transform = `translate(${o}px,\n                                        ${l}px) scale(${i})`)
                    }
                  }
                }, 0), h.to(M[U.NEW_PLATE_FORM].current, {
                  autoAlpha: 0,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease
                }, 0)));
                break
              }
              default:
                if (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), w().to(Ve.current, {
                    autoAlpha: 0,
                    duration: q.sidebar.out.duration,
                    ease: q.sidebar.out.ease,
                    delay: q.sidebar.out.delay
                  }), E && Ue?.current) {
                  const e = {
                    transform: 0,
                    translateY: N(Ue.current).y,
                    drawerHeight: Ee.current ? Ee.current.get() : 0,
                    fov: r.fov
                  };
                  w().to(e, {
                    translateY: Ue?.current?.offsetHeight,
                    duration: q.sidebar.mobile.drawer.duration,
                    drawerHeight: .4 * window.innerHeight,
                    fov: ke.current,
                    ease: q.sidebar.mobile.drawer.ease,
                    onUpdate: () => {
                      Ue.current && (Ee.current && Ee.current.set(e.drawerHeight), Ue.current.style.transform = `translateY(${e.translateY}px)`, Ue.current.style.pointerEvents = "none", r.fov = e.fov, r.updateProjectionMatrix())
                    }
                  })
                }
                if (g === fe.CONFIRM_ORDER ? _ || 1 == !Ne.current && w().to(r.position, {
                    x: Number(Se.current.x),
                    y: Number(Se.current.y),
                    z: 0,
                    ease: q.transaction.confirmOrder.ease,
                    duration: q.transaction.confirmOrder.duration
                  }) : w().to(Me.current, {
                    autoAlpha: 0,
                    duration: q.sidebar.out.duration,
                    ease: q.sidebar.out.ease,
                    delay: q.sidebar.out.delay
                  }), g === fe.LIST_PLATES) {
                  const e = M[U.ROOT].current;
                  e && (e.style.touchAction = "auto")
                }
                n?.current && (n.current.minDistance = 0), Ne.current = !1, Ie(!1)
            }
          }), [g, V, M, E, I, b, y, T, C, D, be, le, Ee.current, Ne.current, v]);
          (0, r.useEffect)((() => {
            M?.[U.SIDEBAR_BUTTONS]?.current && (Ue.current = M[U.SIDEBAR_BUTTONS].current)
          }), [M]), (0, r.useEffect)((() => {
            u(U.NEW_PLATE, Ye)
          }), [Ye.current]), (0, r.useEffect)((() => {
            u(U.CONFIRM_SIDEBAR_BUTTONS_PORTAL, We)
          }), [We.current]), (0, r.useEffect)((() => {
            u(U.NEW_PLATE_SIDEBAR, Me)
          }), [Me.current]), (0, r.useEffect)((() => {
            u(U.NEW_PLATE_UI, Ve)
          }), [Ve.current]);
          const qe = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            qe.current = V
          }), [V]), (0, r.useEffect)((() => {
            _e.current = T
          }), [T]);
          const Xe = (0, r.useCallback)((function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!V?.controls || !f?.[0]) return;
              const {
                controls: a
              } = V, r = e || w().timeline({
                defaults: {
                  duration: 0,
                  ease: E ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease
                },
                onStart: () => {
                  a.current.minDistance = 0
                }
              }), n = R(), s = E && g === fe.CONFIRM_ORDER ? 1.5 : 1, l = !k() || E ? n * b * s : 1.6 * n * b, i = M[U.ROOT].current, c = document.getElementById("list-plates-sidebar"), d = M[U.CANVAS_WRAP].current, u = f[0].current;
              if (i && (E || c) && u && d) {
                const e = O(0, i, Number(D.replace("px", "")), y, E ? void 0 : {
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
                  p = 5 / l,
                  g = E || o() !== fe.CONFIRM_ORDER ? 0 : -1 * c.offsetWidth,
                  b = {
                    x: m.x - e.x + g,
                    y: m.y - e.y - 80 + (C === fe.CONFIRM_ORDER || t ? T : window.scrollY)
                  },
                  h = {
                    current: 0
                  },
                  x = f.map((e => Number(getComputedStyle(e?.current).getPropertyValue("opacity")))),
                  v = C === fe.CONFIRM_ORDER ? q.transaction.confirmOrder.ease : q.clickPlate.ease,
                  w = C === fe.CONFIRM_ORDER ? q.transaction.confirmOrder.duration : q.clickPlate.duration,
                  _ = .4 * window.innerHeight,
                  P = E ? q.sidebar.mobile.drawer.duration : w,
                  S = t ? 0 : P;
                r.to(h, {
                  current: 1,
                  ease: E ? q.sidebar.mobile.drawer.ease : v,
                  duration: S,
                  onComplete: () => {
                    we(N(u.parentElement)), xe(!0)
                  },
                  onUpdate: () => {
                    const {
                      current: a
                    } = h, r = (0, nt.Cq)(Number(s.x), b.x, a), n = (0, nt.Cq)(Number(s.y), b.y + (E ? _ / -2 : 0), a), o = (0, nt.Cq)(Number(s.scale), p, a);
                    u.parentElement.style.transformOrigin = `${e.x}px ${e.y}px`, u.parentElement.style.transform = `translate(${r}px, ${n}px) scale(${o})`, t || f.forEach(((e, t) => {
                      if (0 !== t && e?.current) {
                        const r = (0, nt.Cq)(x[t], 0, Math.min(1, 20 * a));
                        e.current.style.opacity = r
                      }
                    }))
                  }
                }, "<")
              }
            }), [y, D, E, g, ne, V, f, M, C, Le?.current, T]),
            Ze = (0, r.useCallback)((() => {
              if (!V?.controls) return;
              const {
                controls: e,
                scene: t
              } = V, a = w().timeline({
                duration: E ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                ease: E ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                onStart: () => {
                  e?.current && !Ne.current && (e.current.minDistance = 0)
                }
              });
              let r;
              at(a, b, !0), t.traverse((e => {
                0 === e.userData.index && (r = e)
              })), r && w().to(r.material, {
                duration: 0,
                ease: E ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                opacity: v ? 1 : 0
              });
              const {
                renderer: n
              } = qe.current;
              F ? (g === fe.NEW_PLATE && (S() ? n.domElement.style.transform = `translateY(${.4*window.innerHeight/-2}px)` : n.domElement.style.transform = "translateY(0px)", Me?.current && (Me.current.style.opacity = "1", Me.current.style.visibility = "visible", Me.current.style.pointerEvents = "all")), g === fe.CONFIRM_ORDER && S() && (n.domElement.style.transform = `translateY(${le/1.5}px)`)) : g !== fe.CONFIRM_ORDER || S() || (n.domElement.style.transform = "translateY(0px)"), o() !== fe.NEW_PLATE && o() !== fe.CONFIRM_ORDER || Xe(null, !0), S() && Je(), Ne.current && ot({
                isResize: !0,
                onComplete: null,
                delay: 0
              })
            }), [S(), F, v, g, V, Me.current, b, T]),
            Ke = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!ze?.current || !Se.current || !V?.camera) return;
              $e({
                ...He,
                event: "modal_close",
                event_category: "modal",
                event_action: "close",
                event_label: "new plate",
                element_placement: "new plate",
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
              } = V, o = r.getObjectByName("Scene"), l = r.getObjectByName("Light1"), i = r.getObjectByName("Light2"), c = r.getObjectByName("Light3"), d = s.domElement, u = w().timeline({
                defaults: {
                  ease: q.toggleView.camera.ease,
                  duration: t ? 0 : q.toggleView.camera.duration
                },
                onStart: () => {
                  n?.current && (n.current.minDistance = 2, n.current.enableZoom = !1, n.current.enabled = !1)
                },
                onComplete: () => {
                  n?.current && (n.current.minDistance = 0, n.current.maxPolarAngle = X.plateView.maxPolarAngle, n.current.minPolarAngle = X.plateView.minPolarAngle, n.current.maxAzimuthAngle = X.plateView.maxAzimuthAngle, n.current.minAzimuthAngle = X.plateView.minAzimuthAngle, n.current.enableZoom = !1), ce.current = 0, e.onComplete && e.onComplete()
                }
              });
              u.to(a.position, {
                x: Number(Se.current.x),
                y: Number(Se.current.y),
                z: Number(Se.current.z)
              }, 0).to(d.style, {
                opacity: 1
              }, "<").to(ze.current.rotation, {
                x: 0
              }, "<").to(l, {
                intensity: 0
              }, "<").to([i, c], {
                intensity: ue
              }, "<").to(i.position, {
                x: Q,
                y: ee,
                z: te
              }, "<").to(c.position, {
                x: re
              }, "<").set(ze.current, {
                receiveShadow: !1
              }, .4).set(ze.current.material, {
                depthTest: !1
              }, "<"), ze?.current?.material && u.to(ze.current.material, {
                envMapIntensity: me
              }, "<"), o.traverse((e => {
                e.material && w().to(e.material, {
                  opacity: 0,
                  duration: t ? 0 : q.toggleView.fadeOut.duration,
                  ease: q.toggleView.fadeOut.ease
                })
              }))
            }), [ze.current, Se.current, V]);
          (0, r.useEffect)((() => {
            V?.scene && !ke.current && (ke.current = V.camera.fov)
          }), [ke.current, V]), (0, r.useEffect)((() => {
            V?.scene && Ue.current && Ge(F ? Ft : Ht)
          }), [V, F, g === fe.CONFIRM_ORDER, C]), (0, r.useEffect)((() => {
            V?.scene && Ue.current && Ge(F ? Ft : Ht, !0)
          }), [E]);
          const Je = (0, r.useCallback)((() => {
            if (Ue?.current && E && Ye.current) {
              const e = Ye.current.offsetHeight + 80,
                t = e - window.innerHeight,
                a = .4 * e;
              H(a - 48 - Ue.current.offsetHeight - t), se(a), ie(-1 * (.6 * e - 80)), Ue.current.style.transform = `translateY${Ue.current.offsetHeight}px`
            }
          }), [Ue.current, E, Ye.current]);
          (0, r.useEffect)((() => {
            Je()
          }), [Ue.current, E, Ye.current]), (0, r.useEffect)((() => {
            Ae.current || (Ae.current = g), Le.current || (Le.current = Ae.current), g && (Le.current = Ae.current, l(Ae.current), Ae.current = g), g === fe.LIST_PLATES && Ne.current && Ke({}, !0), g === fe.NEW_PLATE && (je.current = !1)
          }), [g]), (0, r.useEffect)((() => {
            const e = E ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
              t = he ? 0 : e;
            if (!V?.scene) return;
            if (!V?.scene || !f?.[0]?.current) return;
            const {
              scene: r,
              renderer: n,
              camera: s
            } = V, l = [], i = [], c = f[0].current;
            if (r.traverse((e => {
                e.name === ge.LP && e.material ? i[e.userData.index] = e.material : l.push(e.material)
              })), o() === fe.NEW_PLATE)
              if (v) {
                const e = i[0];
                if (w().to(e, {
                    opacity: 1,
                    delay: t,
                    duration: E ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                    ease: E ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                    onStart: () => {
                      a(!0), w().to(c.style, {
                        opacity: 0,
                        duration: q.accessibilePlate.duration,
                        ease: q.accessibilePlate.ease,
                        onComplete: () => {
                          Ce.current = !1
                        }
                      })
                    }
                  }), !je.current) {
                  const e = r.getObjectByName("Light4"),
                    a = new m.Vector3;
                  ze?.current && (ze.current.getWorldPosition(a), w().to(e.position, {
                    x: de.x,
                    y: a.y + de.y,
                    z: de.z,
                    delay: t,
                    duration: q.plateShimmer.duration,
                    ease: q.plateShimmer.ease
                  }));
                  const n = {
                    current: 0
                  };
                  w().to(n, {
                    current: 1,
                    delay: t,
                    duration: q.plateShimmer.duration,
                    ease: q.plateShimmer.ease,
                    onUpdate: () => {
                      const {
                        current: t
                      } = n, a = (0, nt.Cq)(0, Math.PI, t);
                      e.intensity = .3 * Math.sin(a), e.color = new m.Color(a, .9 * a, a)
                    }
                  }), je.current = !0
                }
              } else {
                const e = i[0];
                w().to(c.style, {
                  opacity: 1,
                  duration: q.accessibilePlate.duration,
                  ease: q.accessibilePlate.ease,
                  onStart: () => {
                    w().to(e, {
                      opacity: 0,
                      duration: q.accessibilePlate.duration,
                      ease: q.accessibilePlate.ease,
                      onComplete: () => {
                        a(!1), Ce.current = !1, n.render(r, s)
                      }
                    })
                  }
                })
              }
          }), [v, E, V, f]), (0, r.useEffect)((() => {
            if (o() === fe.NEW_PLATE && he && V?.camera) {
              const {
                camera: e
              } = V, t = v ? 0 : .5;
              v || w().to(e.position, {
                duration: t,
                x: Number(Se.current.x),
                y: Number(Se.current.y),
                z: Number(Se.current.z)
              })
            }
          }), [v, V]);
          const Qe = (0, r.useRef)(0);
          (0, r.useEffect)((() => {
            b && (Qe.current = b), o() === fe.NEW_PLATE || o() === fe.CONFIRM_ORDER ? Ze() : S() && (Je(), ye(window.innerHeight), Ue.current && (Ue.current.style.transform = `translateY(${Ue.current.offsetHeight}px`))
          }), [b]);
          const at = (0, r.useCallback)((function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              if (Ae.current !== fe.NEW_PLATE && Ae.current !== fe.CONFIRM_ORDER) return;
              const {
                renderer: r
              } = V;
              j({
                plateIndex: 0,
                three: V,
                timeline: e,
                gridScale: t
              }, {
                onComplete: e => {
                  e?.three?.camera && (Se.current = new m.Vector3(e.three.camera.position.x, e.three.camera.position.y, e.three.camera.position.z)), Ve?.current?.children && Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), E && (r.domElement.style.touchAction = "none")
                },
                tweenPosition: 0,
                isResize: a
              })
            }), [V, g]),
            rt = (0, r.useCallback)((e => {
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
                }, l = {}, i = Ve.current.querySelectorAll("button");
                t.current === Y ? (l.buttonWrapOpacity = 0, l.canvasWrapOpacity = 0, l.fov = ke.current, l.canvasTranslateY = Pe.current, l.accessiblePlateX = Fe.current.x, l.accessiblePlateY = Fe.current.y, l.accessiblePlateScale = Fe.current.scale, n.style.pointerEvents = "all", i.forEach((e => {
                  e.style.pointerEvents = "none"
                }))) : (t.current === B || t.current === z) && (l.buttonWrapOpacity = 1, l.canvasWrapOpacity = 1, l.fov = ke.current, l.canvasTranslateY = Pe.current, l.accessiblePlateX = Fe.current.x, l.accessiblePlateY = Fe.current.y, l.accessiblePlateScale = Fe.current.scale, n.style.pointerEvents = "all", i.forEach((e => {
                  e.style.pointerEvents = "all"
                }))), w().to(o, {
                  buttonWrapOpacity: l.buttonWrapOpacity,
                  canvasWrapOpacity: l.canvasWrapOpacity,
                  fov: l.fov,
                  accessiblePlateX: l.accessiblePlateX,
                  accessiblePlateY: l.accessiblePlateY,
                  accessiblePlateScale: l.accessiblePlateScale,
                  canvasTranslateY: l.canvasTranslateY,
                  duration: q.sidebar.mobile.drawerSnap.duration,
                  ease: q.sidebar.mobile.drawerSnap.ease,
                  onUpdate: () => {
                    n.style.opacity = o.canvasWrapOpacity, De.current.style.opacity = o.buttonWrapOpacity, a && (a.parentElement.style.opacity = o.canvasWrapOpacity, a.parentElement.style.transform = `translate(${o.accessiblePlateX}px,\n                            ${o.accessiblePlateY}px) scale(${o.accessiblePlateScale})`), r.fov = o.fov, r.updateProjectionMatrix(), n.style.transform = `translateY(${o.canvasTranslateY}px)`
                  }
                })
              }
            }), [V, ne, f, Pe.current]),
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
                renderer: l
              } = V, i = l.domElement, c = f?.[0]?.current;
              if (c)
                if (t.dragging) {
                  const e = (0, nt.WC)(0, n, r.get()),
                    l = (0, nt.Cq)(0, 1, 1 - e);
                  i.style.opacity = l;
                  const d = (0, nt.Cq)(0, 1, 1 - 3 * e);
                  if (c.parentElement.style.opacity = d, De.current.style.opacity = l, Ve.current.querySelectorAll("button").forEach((e => {
                      e.style.pointerEvents = r.get() >= 0 ? "all" : "none"
                    })), De.current.style.transform = `translateY(${r.get()}px)`, a.current > 0 && Math.abs(t.delta[1]) > 0 && o && a.current < s) {
                    const e = (0, nt.WC)(0, s, r.get()),
                      a = Ne.current ? 60 : 40,
                      n = (0, nt.Cq)(ke.current, a, e);
                    o.fov = n, o.updateProjectionMatrix();
                    const l = Number(N(i).y) + t.delta[1] / 2;
                    if (i.style.transform = `translateY(${l}px)`, c) {
                      const e = N(c.parentElement),
                        a = Number(e.x),
                        r = Number(e.scale),
                        n = Number(N(c.parentElement).y) + t.delta[1] / 2;
                      c.parentElement.style.transform = `translate(${a}px,\n                                ${n}px) scale(${r})`
                    }
                  }
                } else {
                  const e = Number(N(i).y),
                    t = {
                      buttonWrapOpacity: De.current.style.opacity,
                      canvasWrapOpacity: i.style.opacity,
                      fov: o.fov,
                      canvasTranslateY: e,
                      accessibilityPlateY: Number(N(c.parentElement).y),
                      accessibilityPlateOpacity: c.parentElement.style.opacity
                    };
                  a.current < n / 2 ? (Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "none"
                  })), w().to(t, {
                    buttonWrapOpacity: 0,
                    canvasWrapOpacity: 0,
                    accessibilityPlateOpacity: 0,
                    fov: Ne.current ? 60 : 40,
                    duration: q.sidebar.mobile.drawerSnap.duration,
                    ease: q.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      i.style.opacity = t.canvasWrapOpacity, c.parentElement.style.opacity = t.accessibilityPlateOpacity, De.current.style.opacity = t.buttonWrapOpacity
                    }
                  })) : a.current > s / 2 ? (i.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), w().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateY: Number(Fe.current.y) + s / 2,
                    canvasTranslateY: Number(Pe.current) + s / 2,
                    fov: Ne.current ? 60 : 40,
                    duration: q.sidebar.mobile.drawerSnap.duration,
                    ease: q.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      i.style.opacity = t.canvasWrapOpacity, De.current.style.opacity = t.buttonWrapOpacity, o.fov = t.fov, o.updateProjectionMatrix(), i.style.transform = `translateY(${t.canvasTranslateY}px)`, c.parentElement.style.transform = `translate(${Fe.current.x}px,\n                                ${t.accessibilityPlateY}px) scale(${Fe.current.scale})`
                    }
                  })) : Math.abs(a.current) > 0 && (i.style.pointerEvents = "all", Ve.current.querySelectorAll("button").forEach((e => {
                    e.style.pointerEvents = "all"
                  })), w().to(t, {
                    buttonWrapOpacity: 1,
                    canvasWrapOpacity: 1,
                    accessibilityPlateOpacity: 1,
                    accessibilityPlateY: Number(Fe.current.y),
                    fov: ke.current,
                    canvasTranslateY: .4 * window.innerHeight / -2,
                    duration: q.sidebar.mobile.drawerSnap.duration,
                    ease: q.sidebar.mobile.drawerSnap.ease,
                    onUpdate: () => {
                      if (i.style.opacity = t.canvasWrapOpacity, De.current.style.opacity = t.buttonWrapOpacity, c.parentElement.style.opacity = t.accessibilityPlateOpacity, o.fov = t.fov, o.updateProjectionMatrix(), a.current > 0) {
                        i.style.transform = `translateY(${t.canvasTranslateY}px)`;
                        const e = N(c.parentElement),
                          a = Number(e.x),
                          r = Number(e.scale),
                          n = t.accessibilityPlateY;
                        c.parentElement.style.transform = `translate(${a}px,\n                                    ${n}px) scale(${r})`
                      }
                    }
                  }))
                }
            }), [V, Ue.current, ne, f, Pe.current, ve]),
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
              } = V, o = r.getObjectByName("Scene"), l = r.getObjectByName("Light1"), i = r.getObjectByName("Light2"), c = r.getObjectByName("Light3");
              let d = null;
              const u = [];
              o.traverse((e => {
                e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), u.push(e.material))
              })), r.traverse((e => {
                e.name === ge.LP && 0 === e.userData.index && (d = e)
              }));
              const p = new m.Vector3;
              ze.current.getWorldPosition(p);
              const f = {
                camPositionY: n.position.y,
                camPositionZ: n.position.z,
                controlsTargetZ: s.current.target.z,
                plateRotationX: ze.current.rotation.x,
                light1Intensity: l.intensity,
                light2Intensity: i.intensity,
                light2PositionX: i.position.x,
                light2PositionY: i.position.y,
                light2PositionZ: i.position.z,
                light3Intensity: c.intensity,
                light3PositionX: c.position.x,
                envMapIntensity: ze?.current?.material?.envMapIntensity
              };
              w().to(f, {
                camPositionY: n.position.y + 2.5 * b,
                camPositionZ: n.position.z + (E ? 24 * b : 12 * b),
                controlsTargetZ: s.current.target.z - 5 * b,
                plateRotationX: -.16,
                light1Intensity: ue,
                light2Intensity: .2,
                light2PositionX: ae.x,
                light2PositionY: ae.y,
                light2PositionZ: ae.z,
                light3Intensity: ue,
                light3PositionX: oe.x,
                delay: a,
                envMapIntensity: pe,
                duration: t ? 0 : q.toggleView.camera.duration,
                ease: q.toggleView.camera.ease,
                onStart: () => {
                  const e = E ? 52 * b : 26 * b;
                  s.current.enableZoom = !0, s.current.maxPolarAngle = X.carView.maxPolarAngle, s.current.minPolarAngle = X.carView.minPolarAngle, s.current.maxAzimuthAngle = X.carView.maxAzimuthAngle, s.current.minAzimuthAngle = X.carView.minAzimuthAngle, s.current.maxDistance = e, o.visible = !0, M[U.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none"
                },
                onUpdate: () => {
                  n.position.set(n.position.x, f.camPositionY, f.camPositionZ), s.current.target.z = f.controlsTargetZ, ze.current.rotation.x = f.plateRotationX, ze.current?.material && (ze.current.material.envMapIntensity = f.envMapIntensity), l.intensity = f.light1Intensity, i.intensity = f.light2Intensity, i.position.set(f.light2PositionX, f.light2PositionY, f.light2PositionZ), c.intensity = f.light3Intensity, c.position.x = f.light3PositionX
                },
                onComplete: () => {
                  Te.current = !1, s.current.minDistance = E ? 20 * b : 10 * b, M[U.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all"
                }
              });
              const g = {
                opacity: 0
              };
              w().to(g, {
                opacity: 1,
                duration: t ? 0 : q.toggleView.fadeOut.duration,
                ease: q.toggleView.fadeOut.ease,
                delay: a,
                onUpdate: () => {
                  u.forEach((e => {
                    e.opacity = g.opacity
                  }))
                }
              }), d && w().to(d, {
                duration: 0,
                delay: t ? 0 : .4 + a,
                onComplete: () => {
                  d.material && (d.receiveShadow = !0, d.material.depthTest = !1, d.renderOrder = 99998)
                }
              })
            }), [V, Ne.current, ze, ze?.current, b, E, W, v]),
            lt = (0, r.useCallback)((function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                delay: 0,
                onComplete: null
              };
              if (!V?.scene || !V?.controls?.current || !ze || !ze?.current || Te.current) return;
              const {
                scene: t,
                camera: a,
                controls: r
              } = V, s = e.delay || 0, o = t.getObjectByName("Scene"), l = t.getObjectByName("Light1"), i = t.getObjectByName("Light2"), c = t.getObjectByName("Light3"), d = R(), u = !k() || E ? d * b : 1.6 * d * b;
              if (o && r && !Te.current && !Ce.current) {
                const t = [];
                if (o.traverse((e => {
                    e.material && (e.material.transparent = !0, e.material.mesh = e, "Banshee_Interior_LightMap" === e.material.name && (e.renderOrder = 99999), t.push(e.material))
                  })), Ne.current) {
                  const n = new m.Vector3;
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
                      light1Intensity: l.intensity,
                      light2Intensity: i.intensity,
                      light2PositionX: i.position.x,
                      light2PositionY: i.position.y,
                      light2PositionZ: i.position.z,
                      light3Intensity: c.intensity,
                      light3PositionX: c.position.x,
                      envMapIntensity: ze?.current?.material?.envMapIntensity
                    };
                    w().to(s, {
                      camPositionX: n.x,
                      camPositionY: n.y,
                      camPositionZ: n.z + u,
                      controlsTargetX: n.x,
                      controlsTargetY: n.y,
                      controlsTargetZ: n.z,
                      plateRotationX: 0,
                      light1Intensity: 0,
                      light2Intensity: ue,
                      light2PositionX: Q,
                      light2PositionY: ee,
                      light2PositionZ: te,
                      light3Intensity: ue,
                      light3PositionX: re,
                      envMapIntensity: me,
                      duration: q.toggleView.camera.duration,
                      ease: q.toggleView.camera.ease,
                      onStart: () => {
                        r.current.minDistance = 2, r.current.enableZoom = !1, M[U.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "none";
                        const e = w().timeline({
                          duration: E ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                          ease: E ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease
                        });
                        at(e, b)
                      },
                      onUpdate: () => {
                        ze.current.rotation.x = s.plateRotationX, ze.current?.material && (ze.current.material.envMapIntensity = s.envMapIntensity), l.intensity = s.light1Intensity, i.intensity = s.light2Intensity, i.position.set(s.light2PositionX, s.light2PositionY, s.light2PositionZ), c.intensity = s.light3Intensity, c.position.x = s.light3PositionX
                      },
                      onComplete: () => {
                        Te.current = !1, o.visible = !1, r.current.maxPolarAngle = X.plateView.maxPolarAngle, r.current.minPolarAngle = X.plateView.minPolarAngle, r.current.maxAzimuthAngle = X.plateView.maxAzimuthAngle, r.current.minAzimuthAngle = X.plateView.minAzimuthAngle, M[U.TOGGLE_VIEW_BUTTON].current.style.pointerEvents = "all", e.onComplete && e.onComplete()
                      }
                    });
                    const d = {
                      opacity: 1
                    };
                    w().to(d, {
                      opacity: 0,
                      duration: q.toggleView.fadeOut.duration,
                      ease: q.toggleView.fadeOut.ease,
                      onUpdate: () => {
                        t.forEach((e => {
                          e.opacity = d.opacity
                        }))
                      }
                    })
                  }
                } else Te.current || (W && n(!1), ot({
                  isResize: !1,
                  onComplete: null,
                  delay: s
                }));
                Ne.current = !Ne.current
              }
            }), [V, Ne.current, ze, ze?.current, b, W, v]),
            it = (0, r.useCallback)((e => {
              if (!V?.scene || !Ue?.current || !De.current) return;
              const t = M[U.UI]?.current;
              if (t) {
                const {
                  camera: a,
                  renderer: r
                } = V, n = r.domElement, {
                  y: s,
                  sidebarRef: o
                } = e, l = t.offsetHeight, i = {
                  submitOrderTranslateY: 0,
                  mobileSidebarHeight: s.get(),
                  opacity: o.current.style.opacity,
                  fov: a.fov,
                  height: n.offsetHeight
                };
                w().to(i, {
                  opacity: 1,
                  height: l,
                  mobileSidebarHeight: .4 * window.innerHeight,
                  fov: ke.current,
                  submitOrderTranslateY: Ue.current.offsetHeight,
                  duration: q.sidebar.mobile.drawer.duration,
                  ease: q.sidebar.mobile.drawer.ease,
                  onUpdate: () => {
                    o.current.style.transform = `translateY(${i.mobileSidebarHeight}px)`, o.current.style.opacity = i.opacity, Ue.current.style.transform = `translateY(${i.submitOrderTranslateY}px)`, De.current.style.opacity = i.opacity, n.style.height = i.height, s.set(i.mobileSidebarHeight), a && (a.fov = i.fov, a.updateProjectionMatrix())
                  },
                  onComplete: () => {
                    n.style.pointerEvents = "all"
                  }
                }), o.current.style.pointerEvents = "none"
              }
            }), [M, Me?.current, Ue?.current, V, ne]),
            ct = e => {
              if (!V?.scene) return;
              const {
                sidebarRef: t,
                offset: a,
                y: r
              } = e, {
                sidebar: n
              } = q, {
                duration: s,
                ease: o
              } = n.mobile.drawer;
              ye(r), Ee.current = r, t.current.style.pointerEvents = "all";
              const l = {
                mobileSidebarHeight: .4 * window.innerHeight,
                opacity: t.current.style.opacity
              };
              w().to(l, {
                opacity: 1,
                duration: s,
                ease: o,
                onUpdate: () => {
                  t.current.style.opacity = l.opacity, t.current.style.transform = `translateY(${l.mobileSidebarHeight}px)`, a.current = l.mobileSidebarHeight, r.set(a.current), De.current.style.transform = `translateY(${l.mobileSidebarHeight}px)`
                }
              })
            },
            dt = (0, r.useMemo)((() => {
              const {
                isValid: e,
                statusPlateNumberBasis: a
              } = L, r = K ? (0, tt.jsx)(x.LoadingAnimation, {}) : t("lp.create.next");
              return (0, tt.jsx)(Vt, {
                buttons: [{
                  buttonText: p ? r : t("lp.create.signin"),
                  isDisabled: !!p && (K || !A || !e && A === a),
                  onClick: async () => {
                    Oe?.current?.(), p || ($e({
                      ...He,
                      event: "cta_login",
                      event_category: "cta",
                      event_action: "login",
                      event_label: "sidebar",
                      text: t("lp.create.signin").toLowerCase(),
                      link_url: h
                    }), window.location.href = h)
                  }
                }],
                isLoading: K,
                isVisible: [fe.NEW_PLATE, fe.CONFIRM_ORDER].includes(g),
                tabIndex: g === fe.NEW_PLATE ? 0 : -1
              })
            }), [A, g, p, F, L, Oe.current, K]),
            ut = (0, r.useCallback)((() => {
              d(!_)
            }), [_]),
            mt = (0, r.useMemo)((() => E ? (0, tt.jsxs)(Pt, {
              bottom: $,
              isVisible: F,
              onDrag: st,
              onHide: it,
              onShow: ct,
              onTap: rt,
              top: le,
              drawerY: be,
              mobileSidebarHeight: ne,
              children: [(0, tt.jsx)(Mt, {
                validateFnRef: Oe,
                setIsLoading: J
              }), (0, tt.jsx)(Ut, {
                top: le,
                drawerY: be
              })]
            }) : (0, tt.jsxs)("div", {
              ref: Me,
              className: "rockstargames-modules-gtao-license-plateb1a08a76cb74203a9c8e97f759697f47",
              children: [(0, tt.jsx)("hr", {
                className: "rockstargames-modules-gtao-license-platefb62db34cd26ac9882218fa9e8c572d0",
                onClick: () => {
                  ut()
                },
                "aria-hidden": "true"
              }), (0, tt.jsx)(Mt, {
                validateFnRef: Oe,
                setIsLoading: J
              }), dt]
            })), [A, $, _, E, F, Ee.current, Me.current, le, be, K, ne]);
          return (0, tt.jsxs)("div", {
            ref: Ye,
            className: "rockstargames-modules-gtao-license-platee14286ef5f5dc6a8ca6bf6ce3ffb02be",
            children: [mt, (0, tt.jsxs)("div", {
              ref: Ve,
              className: "rockstargames-modules-gtao-license-plateb2352c29df7ddb34a50813fe7bc95c6e",
              children: [(0, tt.jsx)(St, {
                onClick: () => {
                  Te.current || Ke({
                    onComplete: () => {
                      xe(!1), o(fe.LIST_PLATES)
                    }
                  })
                }
              }), (0, tt.jsxs)(Et.animated.div, {
                ref: De,
                className: "rockstargames-modules-gtao-license-plateb7250523e6ae363c8f2aee0651a92b46",
                style: be ? {
                  y: be
                } : void 0,
                children: [(0, tt.jsx)(Yt, {
                  is3DToggle: !0,
                  onToggleView: () => {
                    Ce.current || Te.current || (Ne.current && !W ? lt({
                      onComplete: () => {
                        n(!W), Ie(!1)
                      }
                    }) : n(!W), Ce.current = !0)
                  }
                }), (0, tt.jsx)(Yt, {
                  is3DToggle: !1,
                  onToggleView: e => {
                    if (!Te.current && !Ce.current) {
                      const t = E ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                        a = v ? 0 : t;
                      "function" == typeof e?.onStart && e.onStart(), lt({
                        delay: a
                      }), Te.current = !0
                    }
                  }
                })]
              })]
            }), (0, tt.jsxs)("div", {
              ref: Be,
              className: "rockstargames-modules-gtao-license-platee615f2b03c1f76d06a2862cb3aab1afd",
              children: [E && dt, E && (0, tt.jsx)("div", {
                className: "rockstargames-modules-gtao-license-platea37b793effdd9688699a77ea3bd02976",
                ref: We
              })]
            })]
          })
        })),
        qt = "rockstargames-modules-gtao-license-plateba2215c87866e0b4c5739e49512b96ef",
        Xt = (0, n.defineMessages)({
          lpe_sidebar_total_plates_text: {
            id: "lpe_sidebar_total_owned_plates",
            defaultMessage: "{total} owned plates out of a maximum of {max}"
          }
        }),
        Zt = "rockstargames-modules-gtao-license-plateb05e3890eab129885f9a617d22a4bdda",
        Kt = "rockstargames-modules-gtao-license-platefd6b39e70965987eb91338b9ab71ef06",
        Jt = (0, d.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, n.useIntl)(),
            {
              loggedIn: s
            } = (0, i.useRockstarUser)(),
            {
              setRefs: o,
              state: l
            } = et(),
            {
              plates: c,
              isMobile: d
            } = l,
            u = (0, r.useRef)(null),
            m = (0, r.useRef)(null),
            p = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            o(U.SIDEBAR, u)
          }), [u.current, d]), (0, r.useEffect)((() => {
            o(U.PLATE_COUNT, p)
          }), [p.current, d]), (0, r.useEffect)((() => {
            o(U.SIDEBAR_BUTTONS_LOADING_ANIMATION, m)
          }), [m.current]);
          const f = c?.filter((e => {
            let {
              faux: t = !1
            } = e;
            return !t
          }))?.length ?? 0;
          return (0, tt.jsxs)("div", {
            id: "list-plates-sidebar",
            ref: u,
            className: "rockstargames-modules-gtao-license-platef5e31de74db53bedd63dace5d7038d67",
            children: [(0, tt.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platedf5d7bc0760f699d1c8e26596267b7c0",
              children: (0, tt.jsx)(kt, {})
            }), (0, tt.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platec3b30bed11d2e7b8ce600fbbd7629875",
              children: [(0, tt.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platec4382993beb9898b4d04eff6d21944bb",
                children: [(0, tt.jsx)("h1", {
                  className: "rockstargames-modules-gtao-license-platee753118af7cef32ddccb849c5845a1d9",
                  children: t("lp.landing.title")
                }), (0, tt.jsx)("p", {
                  className: "rockstargames-modules-gtao-license-plateb7f49651a3bab5cb72869a16d60c64ee",
                  children: t("lp.landing.description")
                }), (0, tt.jsx)("div", {
                  className: "rockstargames-modules-gtao-license-plateb120b933ab5873984ca4626fc8b326c4",
                  children: (0, tt.jsxs)("div", {
                    children: [" ", t("lp.landing.helper.intro"), (0, tt.jsx)("a", {
                      target: "_blank",
                      href: "https://support.rockstargames.com/articles/15666547278355",
                      children: t("lp.landing.helper.link")
                    })]
                  })
                })]
              }), s && (0, tt.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platee0dd0de0d13ab389fbd3ac25184c0557",
                children: [(0, tt.jsx)("h5", {
                  "aria-hidden": !0,
                  children: t("lp.landing.plates")
                }), (0, tt.jsx)("span", {
                  className: "rockstargames-modules-gtao-license-platedd3a0c1fa96710ebf11322ea3d496dc7",
                  children: a.formatMessage(Xt.lpe_sidebar_total_plates_text, {
                    total: f,
                    max: 30
                  })
                }), (0, tt.jsxs)("span", {
                  className: "rockstargames-modules-gtao-license-platea85e818dc3383486634bd7d437612039",
                  "aria-hidden": !0,
                  children: [(0, tt.jsxs)("span", {
                    className: "rockstargames-modules-gtao-license-platec3fb0b6e4481dc788c19f32e1d57155a",
                    children: [m?.current && (0, tt.jsx)("span", {
                      ref: m,
                      className: "rockstargames-modules-gtao-license-platee671a67ec4f57b3d0b0d69daf8181d6b",
                      children: (0, tt.jsx)(x.LoadingAnimation, {
                        type: "THREE_DOTS"
                      })
                    }), (0, tt.jsx)("span", {
                      ref: p,
                      className: "rockstargames-modules-gtao-license-plateb57f68949c7a8c6412a10113788f02d1",
                      children: f
                    })]
                  }), (0, tt.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-plated92b79d7b5b7acd43b97aea1fa09f53d"
                  }), 30]
                })]
              })]
            })]
          })
        })),
        Qt = "rockstargames-modules-gtao-license-plateef5ba014e1e3a01aa5c8e25fa6540276",
        {
          lerp: ea
        } = m.MathUtils,
        ta = "visible";
      let aa, ra = !1;
      const na = () => {
          const {
            state: e,
            setShouldRenderScene: t,
            setIsScrollEnabled: a,
            setAccessiblePlates: n,
            setDeletedPlateIndex: s,
            setPlates: o
          } = et(), {
            accessiblePlates: l,
            pendingOrder: c,
            currentPlateIndex: d,
            currentView: u,
            is3D: p,
            three: f,
            isMobile: g,
            isLoading: b,
            refs: y,
            gridScale: h,
            deletedPlateIndex: x,
            plates: v
          } = e, {
            loggedIn: E
          } = (0, i.useRockstarUser)(), {
            selectedCharacterTuple: _
          } = (0, i.useRockstarUserState)(), P = (0, r.useRef)(null), [S, k] = (0, r.useState)(u === fe.LIST_PLATES), T = y?.[U.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          (0, r.useEffect)((() => {
            aa && (aa.pause(), aa = null), ra = !1
          }), [_]), (0, r.useEffect)((() => {
            k(u === fe.LIST_PLATES)
          }), [u]);
          const C = (0, r.useCallback)((e => {
            if (!f) return;
            const {
              camera: r,
              controls: i,
              originalCameraPosition: u,
              originalControlsTarget: p,
              renderer: h,
              scene: _
            } = f, {
              clickPlate: S,
              sidebar: k,
              deletePlate: C
            } = q, R = y[U.FOOTER].current, I = y[U.SIDEBAR].current, O = y[U.LOADING_SCREEN].current, A = y[U.SIDEBAR_BUTTONS_LOADING_ANIMATION].current, L = y[U.PLATE_COUNT].current, j = l?.[d]?.current || null, M = l?.[0]?.current || null, V = y[U.CTA_SHADER]?.current || null, D = [];
            switch (_.traverse((e => {
                e.name === ge.LP && D.push(e)
              })), aa = w().timeline({
                duration: g ? k.mobile.drawer.duration : S.duration,
                ease: g ? k.mobile.drawer.ease : S.ease
              }), e) {
              case ta: {
                if (!i.current || l.filter((e => null === e.current)).length > 0 || !M || !V) return;
                const e = {
                    current: 0
                  },
                  d = {
                    cameraPosition: {
                      start: (new m.Vector3).copy(r.position),
                      end: u
                    },
                    controlsTarget: {
                      start: (new m.Vector3).copy(i.current.target),
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
                      start: G.saturation.value,
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
                      start: Number(N(P.current).y),
                      end: 0
                    },
                    ctaShaderOpacity: {
                      start: V.style.opacity,
                      end: 1
                    }
                  };
                j?.parentElement && (d.currentAccessibilityPlateTransform = {
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
                if (aa.to(e, {
                    current: 1,
                    duration: g ? k.mobile.drawer.duration : S.duration,
                    ease: g ? k.mobile.drawer.ease : S.ease,
                    onComplete: () => {
                      g && (h.domElement.style.touchAction = "auto"), t(!1);
                      const e = _.getObjectByName("Light4");
                      w().to(e.position, {
                        x: le - 20,
                        y: ie,
                        z: ce
                      })
                    },
                    onStart: () => {
                      e.current = 0, I && (I.style.pointerEvents = "all"), h.render(_, r), a(!0)
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e, a = d.cameraPosition.start.clone().lerp(d.cameraPosition.end, t);
                      r.position.set(a.x, a.y, a.z);
                      const n = d.controlsTarget.start.clone().lerp(d.controlsTarget.end, t);
                      if (i.current.target.x = n.x, i.current.target.y = n.y, i.current.target.z = n.z, j && j.parentElement?.classList?.contains(qt)) {
                        const e = ea(d.currentAccessibilityPlateTransform.start.x, d.currentAccessibilityPlateTransform.end.x, t),
                          a = ea(d.currentAccessibilityPlateTransform.start.y, d.currentAccessibilityPlateTransform.end.y, t),
                          r = ea(d.currentAccessibilityPlateTransform.start.scale, d.currentAccessibilityPlateTransform.end.scale, t);
                        j.parentElement.style.transform = `translate(${e}px,\n                            ${a}px) scale(${r})`
                      }
                      const s = ea(d.firstPlateSaturation.start, d.firstPlateSaturation.end, t);
                      if (G.saturation.value = s, E && !c && f) {
                        const e = ea(d.firstPlateOpacity.start, d.firstPlateOpacity.end, t),
                          a = !!c;
                        f.style.filter = `saturate(${s})${!a&&` opacity(${e})`}`
                      }
                      if (V) {
                        const e = ea(d.ctaShaderOpacity.start, d.ctaShaderOpacity.end, t);
                        V.style.opacity = e
                      }
                      if (g) {
                        const e = ea(d.canvasTranslateY.start, d.canvasTranslateY.end, t);
                        if (h.domElement.style.transform = `translateY(${e}px)`, P.current) {
                          const e = ea(d.drawerHeight.start, d.drawerHeight.end, t);
                          P.current.style.transform = `translateY(${e}px)`
                        }
                      }
                    }
                  }, 0), (l.length === v.length && l?.[0]?.current || E && !b && l[0].current && l?.filter((e => e?.current)).length === v.length && 0 !== v.length && 0 !== l.length) && !ra) {
                  const e = {
                    current: 0
                  };
                  ra = !0, aa.to(e, {
                    current: 1,
                    duration: g ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                    ease: g ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                    onStart: () => {
                      ra = !0
                    },
                    onComplete: () => {
                      ra = !1
                    },
                    onUpdate: () => {
                      const {
                        current: t
                      } = e;
                      l.forEach(((e, a) => {
                        if (e.current && d.accessiblePlateOpacity[a]) {
                          const r = ea(d.accessiblePlateOpacity[a].start, d.accessiblePlateOpacity[a].end, 2.5 * (t - .6));
                          e.current.style.opacity = r
                        }
                        if (D[a] && D[a].material) {
                          const e = ea(d.plateOpacity[a].start, d.plateOpacity[a].end, t);
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
                    aa.to(a, {
                      current: 1,
                      duration: g ? q.sidebar.mobile.drawer.duration : q.clickPlate.duration,
                      ease: g ? q.sidebar.mobile.drawer.ease : q.clickPlate.ease,
                      onUpdate: () => {
                        const t = ea(e.start, e.end, a.current);
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
                    aa.to(a, {
                      current: 1,
                      duration: C.duration,
                      ease: C.ease,
                      onUpdate: () => {
                        const {
                          current: n
                        } = a, s = ea(r.plateOpacity.start, r.plateOpacity.end, n), o = ea(r.accessiblePlateOpacity.start, r.accessiblePlateOpacity.end, n);
                        e?.material && (e.material.opacity = s), t.style.opacity = o
                      }
                    }, ">");
                    const i = D.filter((e => e.userData.index >= x)).map((e => e.position)),
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
                      d = i.map((e => e.clone())),
                      u = c.map(((e, t) => ({
                        x: c[Math.max(t - 1, 0)].x - c[t].x,
                        y: c[Math.max(t - 1, 0)].y - c[t].y
                      })));
                    aa.to(i.slice(1), {
                      x: e => d[e].x,
                      y: e => d[e].y,
                      z: e => d[e].z,
                      stagger: {
                        each: .03
                      },
                      onComplete: () => {
                        e.removeFromParent(), e.userData.index = void 0, _.remove(e)
                      }
                    }, "<25%");
                    const m = l.filter(((e, t) => t >= x)),
                      p = c.map((() => ({
                        x: 0,
                        y: 0
                      })));
                    p.forEach(((e, t) => {
                      aa.to(e, {
                        x: u[t].x,
                        y: u[t].y,
                        duration: C.duration,
                        ease: C.ease,
                        delay: 1 + .03 * t,
                        onUpdate: () => {
                          const a = m[t]?.current;
                          a && (a.style.transform = `translate(${e.x}px, ${e.y}px)`)
                        },
                        onComplete: () => {
                          if (t === p.length - 1) {
                            const e = l.filter(((e, t) => t !== x));
                            n(e), s(null);
                            const t = v.filter((e => e.index !== x));
                            t.forEach(((e, t) => {
                              e.index = t
                            })), o(t)
                          }
                        }
                      }, 0)
                    }))
                  }
                }
                aa.to(R, {
                  autoAlpha: 1,
                  duration: g ? k.mobile.footer.in.duration : k.in.duration,
                  ease: g ? k.mobile.footer.in.ease : k.in.ease,
                  delay: g ? k.mobile.footer.in.delay : k.in.delay
                }, 0), aa.to(I, {
                  autoAlpha: 1,
                  duration: g ? k.mobile.fadeHeader.in.duration : k.in.duration,
                  ease: g ? k.mobile.fadeHeader.in.ease : k.in.ease,
                  delay: g ? k.mobile.fadeHeader.in.delay : k.in.delay,
                  onStart: () => {
                    O && (b ? (O.classList.add(Qt), A && A.classList.add(Zt), L && L.classList.remove(Kt)) : (O.classList.remove(Qt), A && A.classList.remove(Zt), L && L.classList.add(Kt)))
                  }
                }, 0), g && (T && w().set(T.style, {
                  visibility: "visible"
                }), I && (I.style.pointerEvents = "all"));
                break
              }
              default:
                if (w().to(R, {
                    autoAlpha: 0,
                    duration: g ? k.mobile.footer.out.duration : k.out.duration,
                    ease: g ? k.mobile.footer.out.ease : k.out.ease
                  }), T && w().set(T.style, {
                    visibility: "hidden"
                  }), I && (I.style.pointerEvents = "none"), g) {
                  const e = {
                    current: N(I).y
                  };
                  w().to(I, {
                    opacity: 0,
                    duration: k.mobile.fadeHeader.out.duration,
                    ease: k.mobile.fadeHeader.out.ease
                  }), w().to(e, {
                    current: -1 * I.offsetHeight,
                    duration: k.mobile.drawer.duration,
                    ease: k.mobile.drawer.ease,
                    onUpdate: () => {
                      P.current.style.transform = `translateY(${e.current}px)`
                    }
                  })
                } else w().to(I, {
                  autoAlpha: 0,
                  duration: k.out.duration,
                  ease: k.out.ease,
                  delay: k.out.delay
                })
            }
          }), [l, d, x, p, f, b, c, E, g, y, h, ra]);
          return (0, r.useEffect)((() => {
            y && y?.[U.FOOTER]?.current && y?.[U.SIDEBAR]?.current && y?.[U.UI]?.current && y?.[U.LOADING_SCREEN]?.current && P.current && f?.scene && f?.controls && C(S ? ta : "hidden")
          }), [y, S, P.current, p, f, g, b, y?.[U.FOOTER]?.current, y?.[U.SIDEBAR]?.current]), (0, tt.jsx)("div", {
            ref: P,
            className: "rockstargames-modules-gtao-license-plateaa4cb56d97a9d885e644c0af2b3e81ce",
            children: (0, tt.jsx)(Jt, {})
          })
        },
        sa = e => {
          let {
            isMobile: t
          } = e;
          const {
            loggedIn: a
          } = (0, i.useRockstarUser)(), {
            setRefs: n,
            state: s
          } = et(), {
            plates: o,
            refs: l
          } = s, c = (0, r.useRef)(null), d = l[U.MOBILE_SIDEBAR_PORTAL_TARGET]?.current;
          if ((0, r.useEffect)((() => {
              n(U.UI, c)
            }), [c.current]), !o) return null;
          let u;
          return t && (u = d ? (0, wt.createPortal)((0, tt.jsx)(na, {}), d) : null), (0, tt.jsxs)("div", {
            ref: c,
            className: "rockstargames-modules-gtao-license-plated1beae8d7c28603a3bdf0a34ca457352",
            children: [a && !t && (0, tt.jsx)(Ut, {}), t ? u : (0, tt.jsx)(na, {}), a && (0, tt.jsx)(Ot, {}), (0, tt.jsx)(Gt, {})]
          })
        },
        oa = e => {
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
            } = et(),
            [o, l] = (0, r.useState)(null),
            [c, d] = (0, r.useState)(null),
            u = {
              api: t("lp.error.api.description"),
              browser: t("lp.error.browser.description"),
              character: t("lp.error.nocharacter.description"),
              vehicles: t("lp.error.novehicle.description"),
              webgl: t("lp.error.webgl.description")
            },
            m = {
              api: t("lp.error.api.cta"),
              browser: t("lp.error.browser.cta"),
              character: t("lp.error.nocharacter.cta"),
              vehicles: t("lp.error.api.cta"),
              webgl: t("lp.error.api.cta")
            },
            {
              track: p
            } = (0, i.useGtmTrack)(),
            {
              data: g
            } = (0, i.useRockstarUser)(),
            b = {
              member_id: g?.user ? g.user?.id : void 0,
              view_name: "license plate creator - error screen"
            };
          return (0, r.useEffect)((() => {
            if (!n) return l(null), void d(null);
            l(n[0]), d(n[1] ?? a)
          }), [String(n)]), (0, r.useEffect)((() => {
            p({
              ...b,
              event: "alert_error",
              event_category: "alert",
              event_action: "error",
              text: u[o] || t("lp.error.unexpected.description")
            }), p({
              ...b,
              event: "trackPageview",
              display_type: s ? "mobile" : "desktop"
            })
          }), []), o ? (0, tt.jsxs)("div", {
            className: "rockstargames-modules-gtao-license-platee268c88b0ad13ec9b70662c1cd3ed9a6",
            children: [(0, tt.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-platea62175a9470bdefca29061355225053b",
              children: [(0, tt.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-plateff9acc08c36ee5477bfa008495fe1016",
                children: [(0, tt.jsx)("i", {}), (0, tt.jsx)("h4", {
                  children: u[o] || t("lp.error.unexpected.description")
                }), c?.code && (0, tt.jsxs)("div", {
                  className: "rockstargames-modules-gtao-license-platecbb8e56d4071adb16682a06f7d167c4b",
                  children: [(0, tt.jsx)("p", {
                    children: `Code: ${c.code}`
                  }), c?.logId && (0, tt.jsx)("p", {
                    children: `LogID: ${c?.logId}`
                  })]
                })]
              }), (0, tt.jsx)(f.NavLink, {
                to: "character" !== o ? "/gta-online" : "https://socialclub.rockstargames.com/settings/linkedaccounts",
                children: (0, tt.jsx)("button", {
                  className: "rockstargames-modules-gtao-license-platebee018ef543141528e263e23cd43ae1e",
                  type: "button",
                  tabIndex: 0,
                  children: (0, tt.jsx)("span", {
                    className: "rockstargames-modules-gtao-license-platee346703179f552bd647459ea2eee8aca",
                    children: m[o]
                  })
                })
              })]
            }), (0, tt.jsx)("div", {
              className: "rockstargames-modules-gtao-license-plateba7922fbecef8aac8fbfb43466d714df"
            })]
          }) : null
        },
        la = () => {
          const {
            state: e,
            setRefs: t
          } = et(), {
            refs: a,
            isMobile: n
          } = e, s = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            s && t(U.LOADING_SCREEN, s)
          }), [s]);
          const o = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            const e = document.querySelectorAll('[aria-label="animation"]');
            e.length && e.forEach((e => {
              e.tabIndex = -1
            }))
          }), []), (0, r.useEffect)((() => {
            if (n && a?.[U.SIDEBAR]?.current && o.current) {
              const e = 80,
                t = 50,
                r = window.innerHeight - e,
                n = a?.[U.SIDEBAR].current.offsetHeight,
                s = n + (r - n) / 2 - t / 2;
              o.current && (o.current.style.top = `${s}px`)
            } else o.current && (o.current.style.top = "unset")
          }), [n, a]), (0, tt.jsx)("div", {
            ref: s,
            className: "rockstargames-modules-gtao-license-plateccf53583787aff7c3f2ac6b8d97c03b4",
            children: (0, tt.jsx)("div", {
              ref: o,
              className: "rockstargames-modules-gtao-license-platea88fc625cf8ed28c9173313577588fed",
              children: (0, tt.jsx)(x.LoadingAnimation, {})
            })
          })
        },
        ia = {
          pillBtn: "rockstargames-modules-gtao-license-platef1cc6b324fb5666ea554c421a89c85e2",
          selected: "rockstargames-modules-gtao-license-platecf7c7f87a50f7e2e4514afc35792becb",
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
        ca = e => {
          let {
            vehicleName: t,
            onClickEdit: a,
            isVisible: n,
            t: s
          } = e;
          const [o, c] = (0, r.useState)(!1), {
            loggedIn: u
          } = (0, i.useRockstarUser)(), m = (0, l.useRockstarTokenPing)(), {
            setPlates: p,
            setPendingOrder: f,
            setPlateNumber: g,
            setSelectedStyle: b,
            setError: y,
            state: h
          } = et(), {
            character: x,
            plates: v,
            currentView: w
          } = h, {
            track: E
          } = (0, i.useGtmTrack)(), P = {
            view_name: "license plate creator - landing page logged in"
          }, S = w === fe.LIST_PLATES ? 0 : -1, k = (0, r.useCallback)((() => {
            (async () => {
              if (!u || !x) return;
              const [e] = x, {
                error: t
              } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                pingBearer: m,
                fetchOptions: {
                  method: "DELETE"
                },
                query: {
                  platform: e
                }
              });
              if (t) return void y(["api", t]);
              const a = [be, ...v.slice(1, v.length)];
              p(a), f(null), g(""), b(_(be.style.name).id), E({
                ...P,
                event: "cta_cancel",
                event_category: "cta",
                event_action: "cancel",
                text: `modal: ${s("lp.modal.order-cancel.confirm")}`,
                view_name: `license plate creator - modal: ${s("lp.modal.order-cancel.title").toLowerCase()}`
              })
            })()
          }), [u, x, v]);
          return (0, tt.jsxs)("div", {
            className: [ia.orderInProgressCTA, n ? "" : ia.hidden].join(" "),
            children: [(0, tt.jsx)("h1", {
              className: ia.contentHeading,
              children: s("lp.inprogress.title")
            }), (0, tt.jsx)("p", {
              className: ia.orderInstructions,
              dangerouslySetInnerHTML: {
                __html: s("lp.inprogress.description").replace("<span>{car_name}</span>", `<span className=${ia.vehicleName}>${t}</span>`)
              }
            }), (0, tt.jsxs)("div", {
              className: ia.buttonWrap,
              children: [(0, tt.jsx)("button", {
                type: "button",
                onClick: a,
                "aria-label": s("lp.inprogress.edit"),
                tabIndex: S,
                children: (0, tt.jsx)("span", {
                  className: ia.ctaText,
                  children: s("lp.inprogress.edit")
                })
              }), (0, tt.jsx)("button", {
                type: "button",
                onClick: e => {
                  c(!0), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                },
                "aria-label": s("lp.inprogress.cancel"),
                tabIndex: S,
                children: (0, tt.jsx)("span", {
                  className: ia.ctaText,
                  children: s("lp.inprogress.cancel")
                })
              })]
            }), (0, tt.jsx)(Ct, {
              title: s("lp.modal.order-cancel.title"),
              secondaryText: s("lp.modal.order-cancel.description").replace("{plateText}", v?.[0]?.plateText ?? "this plate"),
              buttons: [{
                buttonText: s("lp.modal.order-cancel.confirm"),
                onClick: e => k(e)
              }, {
                buttonText: s("lp.modal.order-cancel.close"),
                onClick: () => {
                  E({
                    ...P,
                    event: "cta_cancel",
                    event_category: "cta",
                    event_action: "cancel",
                    text: `license plate creator - modal: ${s("lp.modal.order-cancel.close").toLowerCase()}`,
                    view_name: `license plate creator - modal: ${s("lp.modal.order-cancel.title").toLowerCase()}`
                  })
                }
              }],
              showModal: o,
              onClose: () => c(!1),
              t: s
            })]
          })
        },
        da = e => {
          let {
            plateData: t,
            plateWidthInPixels: a,
            currentView: r,
            loginUrl: n,
            inputTabIndex: s,
            track: o,
            trackingPresets: l,
            onClickPlate: i,
            t: c
          } = e;
          return (0, tt.jsx)("div", {
            className: $t.firstPlateLoggedOut,
            style: {
              background: "none",
              border: "none",
              opacity: r === fe.LIST_PLATES ? 1 : 0,
              width: `${a}px`,
              height: a / 2 + "px"
            },
            children: (0, tt.jsxs)("div", {
              className: [$t.loggedOutCTA, r !== fe.LIST_PLATES ? $t.hidden : ""].join(" "),
              children: [(0, tt.jsx)("button", {
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
                className: [$t.signIn, r !== fe.LIST_PLATES ? $t.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, tt.jsx)("span", {
                  className: $t.ctaText,
                  children: c("lp.landing.signup")
                })
              }), (0, tt.jsx)("button", {
                type: "button",
                onClick: () => {
                  o({
                    ...l,
                    event: "license_plate_try",
                    event_category: "license_plate",
                    event_action: "try",
                    text: c("lp.landing.tryit").toLowerCase()
                  }), i(t.index)
                },
                className: [$t.tryWithoutSigningIn, $t.firstLoad, r !== fe.LIST_PLATES ? $t.hidden : ""].join(" "),
                tabIndex: s,
                children: (0, tt.jsx)("span", {
                  className: $t.ctaText,
                  children: c("lp.landing.tryit")
                })
              })]
            })
          })
        },
        ua = e => {
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
          } = et(), {
            currentView: d,
            accessiblePlates: u,
            gridState: m,
            is3D: p,
            loginUrl: f,
            pendingOrder: g,
            three: b,
            plates: y,
            refs: h,
            isMobile: x,
            realHeight: v,
            plateTextures: w
          } = n, [E, _] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            _(/([wW]in)/i.test(window.navigator.userAgent))
          }), []), (0, r.useEffect)((() => {
            y?.length && (T(y[0]), R(y.filter((e => {
              let {
                faux: t
              } = e;
              return !t
            })).length >= 30))
          }), [y]);
          const [P, S] = (0, r.useState)(null), [k, T] = (0, r.useState)(null), [C, R] = (0, r.useState)(!1), N = h[U.FIRST_PLATE_MESH], j = h[U.ROOT], M = (0, r.useRef)(null), V = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            const e = h[U.SIDEBAR];
            if (!(e?.current && j?.current && m?.gridOptions && k)) return;
            const t = e.current,
              a = {
                x: x ? 0 : t.offsetWidth,
                y: 0
              },
              r = O(k.index, j.current, Number(v.replace("px", "")), m, a);
            S(r)
          }), [h]);
          const {
            track: D
          } = (0, i.useGtmTrack)(), W = {
            view_name: "license plate creator - landing page logged " + (a ? "in" : "out")
          }, Y = (0, r.useRef)(null);
          (0, r.useEffect)((() => {
            c(U.CTA_WRAP, M)
          }), [M.current]), (0, r.useEffect)((() => {
            c(U.CTA_SHADER, V)
          }), [V.current]);
          const B = d === fe.LIST_PLATES ? 0 : -1,
            z = (0, r.useCallback)((e => {
              if (s() === fe.LIST_PLATES) {
                const t = 0 === e ? fe.NEW_PLATE : fe.VIEW_PLATE;
                e && (D({
                  ...W,
                  event: "license_plate_open",
                  event_category: "license_plate",
                  event_action: "open",
                  view_name: "list plates",
                  position: e
                }), D({
                  ...W,
                  event: "virtualPageview",
                  display_type: x ? "mobile" : "desktop",
                  view_name: "license plate creator - view plate"
                })), o(y[e]), l(e), s(t)
              }
            }), [y]),
            $ = (0, r.useCallback)((e => {
              A(0, d)
            }), [d]),
            H = (0, r.useMemo)((() => P ? (0, tt.jsx)(da, {
              plateData: k,
              plateWidthInPixels: P.width,
              currentView: d,
              loginUrl: f,
              inputTabIndex: B,
              track: D,
              trackingPresets: W,
              onClickPlate: z,
              t
            }) : null), [d, f, P]),
            F = (0, r.useMemo)((() => void 0 !== y ? I(g, y) ? (0, tt.jsx)(ca, {
              t,
              vehicleName: `${g?.manufacturerName||""} ${g?.vehicleName||""}`.trim(),
              onClickEdit: () => {
                D({
                  ...W,
                  event: "license_plate_edit_click",
                  event_category: "license_plate",
                  event_action: "edit",
                  event_label: "click",
                  text: t("lp.inprogress.edit").toLowerCase()
                }), z(k.index)
              },
              isVisible: d === fe.LIST_PLATES
            }) : C ? (0, tt.jsxs)("div", {
              className: [$t.maxPlatesReached, d !== fe.LIST_PLATES ? $t.hidden : ""].join(" "),
              children: [(0, tt.jsx)("i", {}), t("lp.notify.max-plates")]
            }) : 0 === y.length ? null : (0, tt.jsxs)("div", {
              type: "button",
              style: {
                pointerEvents: d === fe.LIST_PLATES ? "all" : "none"
              },
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (D({
                  ...W,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "keypress",
                  text: t("lp.landing.newcta").toLowerCase()
                }), z(k.index))
              },
              onClick: () => {
                D({
                  ...W,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "click",
                  text: t("lp.landing.newcta").toLowerCase()
                }), z(k.index)
              },
              onPointerOver: x ? void 0 : () => {
                N?.current && $(N?.current)
              },
              onPointerOut: x ? void 0 : () => {
                var e;
                N?.current && (e = N?.current, L(e))
              },
              className: [$t.createNewPlate, d !== fe.LIST_PLATES ? $t.hidden : ""].join(" "),
              ref: Y,
              tabIndex: B,
              children: [(0, tt.jsx)("span", {
                className: `${$t.ctaText} ${E?$t.isWindows:""}`,
                children: t("lp.landing.newcta")
              }), (0, tt.jsx)("div", {
                className: $t.ctaIcon,
                role: "presentation",
                "aria-label": "Plus Icon"
              })]
            }) : null), [P, d, C]),
            G = (0, r.useMemo)((() => void 0 !== g && P ? (0, tt.jsx)("div", {
              onKeyPress: e => {
                "Space" !== e.code && "Enter" !== e.code || (D({
                  ...W,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "keypress",
                  text: t("lp.landing.newcta").toLowerCase()
                }), C || z(k.index))
              },
              onClick: () => {
                D({
                  ...W,
                  event: "license_plate_create_click",
                  event_category: "license_plate",
                  event_action: "create",
                  event_label: "click",
                  text: t("lp.landing.newcta").toLowerCase()
                }), C || z(k.index)
              },
              type: "button",
              tabIndex: B,
              style: {
                width: `${P.width}px`,
                height: P.width / 2 + "px",
                pointerEvents: d === fe.LIST_PLATES ? "all" : "none",
                fontSize: P.width / 2 * .075 + "px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                border: "none",
                boxShadow: "none"
              },
              children: F
            }) : null), [d, g, P, h, k, F, x, C]);
          return (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              if (e && M.current) {
                const t = M.current.querySelector("canvas");
                t && M.current.removeChild(t), e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", e.style.opacity = 1, e.style.transition = "transform 0.25s ease-out", a && !g && d === fe.LIST_PLATES && e.classList.add($t.newOrder), M.current.append(e)
              }
            }
          }), [w, M.current, g, a, d]), (0, r.useEffect)((() => {
            u?.[0]?.current || M.current && (u[0] = M)
          }), [u, M.current]), (0, r.useEffect)((() => {
            if (w?.[0]) {
              const e = w[0].image;
              e && b?.scene && (e.style.transition = "transform 0.25s ease-out")
            }
          }), [p, b, w]), (0, r.useMemo)((() => {
            if (!P || !k || !m?.gridOptions) return null;
            const e = I(g, y) ? $t.pendingOrderShader : "",
              t = a ? e : $t.loggedOutShader,
              {
                width: r,
                height: n
              } = P,
              {
                top: s,
                left: o,
                right: l,
                bottom: i
              } = P.rect,
              c = [$t.CTAWrap];
            return a || c.push($t.loggedOut), a && C && c.push($t.maxPlatesReachedWrap), (0, tt.jsxs)("div", {
              ref: M,
              className: c.join(" "),
              style: {
                top: s,
                left: o,
                bottom: i,
                right: l,
                width: r,
                height: n
              },
              children: [(0, tt.jsx)("div", {
                ref: V,
                className: t
              }), a ? G : H]
            })
          }), [F, C, a])
        },
        ma = e => {
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
              plateTextures: g,
              plates: b,
              deletedPlateIndex: y,
              isMobile: h,
              shouldRenderScene: x
            }
          } = et(), {
            track: v
          } = (0, i.useGtmTrack)(), w = {
            view_name: "license plate creator - landing page logged " + (c ? "in" : "out")
          }, E = (0, r.useRef)(null);
          return (0, r.useEffect)((() => {
            !n.current[a + 1]?.current && E && (n.current[a + 1] = E)
          }), [E.current, b, f]), (0, r.useEffect)((() => {
            if (l && E.current) {
              const e = E.current.querySelector("canvas");
              e && E.current.removeChild(e), l.style.width = "100%", l.style.height = "100%", l.style.position = "absolute", l.style.opacity = 1, l.style.top = "0px", l.style.left = "0px", l.style.pointerEvents = "none", l.style.transition = "transform 0.25s ease-out", l.classList.add("rockstargames-modules-gtao-license-platefdedf6af97ba01b09fe912dfd53b3b15"), E.current.append(l)
            }
          }), [g, l, E.current]), (0, r.useMemo)((() => (0, tt.jsx)("button", {
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
              pointerEvents: p !== fe.LIST_PLATES || "number" == typeof y || x ? "none" : "all"
            },
            tabIndex: o,
            type: "button",
            onClick: e => {
              e.target.blur(), v({
                ...w,
                event: "license_plate_open",
                event_category: "license_plate",
                event_action: "open",
                view_name: "list plates",
                position: a
              }), v({
                ...w,
                event: "virtualPageview",
                display_type: h ? "mobile" : "desktop",
                view_name: "license plate creator - view plate"
              }), u(t), m(a + 1), d(fe.VIEW_PLATE)
            }
          })), [t, l, s, x, p])
        },
        pa = e => {
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
          } = et(), {
            loggedIn: p
          } = (0, i.useRockstarUser)(), [f, g] = (0, r.useState)([]), b = (0, r.useRef)(null), y = (0, r.useRef)([]);
          return (0, r.useEffect)((() => {
            y.current && l.length > 0 && y.current.length === l.length && a(y.current)
          }), [y.current?.length, l]), (0, r.useEffect)((() => {
            n(U.ACCESSIBLE_PLATE_GRID, b)
          }), [b.current]), (0, r.useEffect)((() => {
            const e = d[U.ROOT]?.current,
              t = d?.[U.SIDEBAR]?.current,
              a = [];
            e && t && o && (l.forEach(((r, n) => {
              if (n) {
                const r = O(n, e, Number(c.replace("px", "")), o, u ? void 0 : {
                    x: t.offsetWidth,
                    y: 0
                  }),
                  {
                    height: s,
                    width: l,
                    rect: {
                      top: i,
                      left: d
                    }
                  } = r;
                s && l && s < l && a.push({
                  width: l,
                  height: s,
                  top: i,
                  left: d
                })
              }
            })), g([...a]))
          }), [m, d && d?.[U.SIDEBAR]?.current]), (0, r.useMemo)((() => p && !f.length ? null : (y.current.forEach((e => {
            e.current && (e.current.style.transform = "none")
          })), (0, tt.jsxs)("div", {
            ref: b,
            className: qt,
            children: [(0, tt.jsx)(ua, {
              t
            }), l.filter(((e, t) => t)).map(((e, t) => (0, tt.jsx)(ma, {
              accessiblePlateRefs: y,
              plate: e,
              index: t,
              details: f[t],
              tabIndex: s === fe.LIST_PLATES ? 0 : -1,
              texture: m[t + 1]?.image
            }, e.plateText + e.vehicles.toString())))]
          }))), [f])
        },
        fa = (0, n.withIntl)((0, d.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            setCanvasDimensions: n,
            setCharacter: s,
            setCurrentView: y,
            setDeletedPlateIndex: x,
            setError: v,
            setIs3D: w,
            setIsLoading: E,
            setIsLoggedIn: P,
            setIsMobile: k,
            setPendingOrder: T,
            setPlateNumber: C,
            setPlates: R,
            setRefs: N,
            setSelectedStyle: O,
            setVehicles: A,
            setXmas23PlatesAllowed: L,
            state: j
          } = et(), {
            error: M,
            plates: V,
            pendingOrder: D,
            isMobile: W,
            three: Y,
            currentView: B,
            shouldForce2D: z,
            isLoading: $
          } = j, {
            setCustomFooter: F
          } = (0, u.useRockstarLocalState)(), {
            loggedIn: G
          } = (0, i.useRockstarUser)();
          (0, r.useEffect)((() => {
            P(G)
          }), [G]);
          const {
            selectedCharacterTuple: q
          } = (0, i.useRockstarUserState)(), X = (0, l.useRockstarTokenPing)(), Z = (0, r.useRef)(null), K = (0, r.useRef)(null), J = (0, r.useRef)(null), [Q, ee] = (0, r.useState)(null), [te] = (0, f.useSearchParams)(), [ae, re] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            try {
              if (!d.supportedBrowsers.test(navigator.userAgent)) throw new Error("browser");
              const e = document.createElement("canvas"),
                t = ["webgl2", "webgl", "experimental-webgl", "moz-webgl", "webkit-3d"].some((t => {
                  const a = e.getContext(t);
                  return a && "function" == typeof a?.getParameter
                }));
              if (!window.WebGLRenderingContext || !t) throw new Error("webgl")
            } catch (e) {
              v([e?.message])
            } finally {
              re(!0)
            }
          }), []);
          const ne = (0, r.useCallback)(h().debounce((() => {
            if (Y?.renderer) {
              const {
                renderer: e
              } = Y, {
                clientWidth: t,
                clientHeight: a
              } = e.domElement;
              n({
                width: t,
                height: a
              })
            }
            k(S())
          }), 100), [Y]);
          (0, r.useEffect)((() => (ne(), window.addEventListener("resize", ne, !0), () => window.removeEventListener("resize", ne, !0))), [Y]), (0, r.useEffect)((() => ((0, u.setFreezeUserShouldSeeMore)(!0), F(!0), () => {
            (0, u.setFreezeUserShouldSeeMore)(!1), F(!1), y(fe.LIST_PLATES)
          })), []), (0, r.useEffect)((() => {
            N(U.CANVAS_WRAP, Z)
          }), [Z.current]), (0, r.useEffect)((() => {
            N(U.ROOT, K)
          }), [K.current]), (0, r.useEffect)((() => {
            N(U.MOBILE_SIDEBAR_PORTAL_TARGET, J)
          }), [J.current]), (0, r.useEffect)((() => {
            if (!ae || "webgl" === M || "browser" === M) return;
            v(null), s(q), y(fe.LIST_PLATES), O(be.style?.id), T(null), x(null);
            const e = (G ? [] : [be]).map(((e, t) => ({
              ...e,
              index: t
            })));
            null !== G && (R(e), !1 === G && E(!1)), A([]), (async () => {
              try {
                G && E(!0);
                const e = v();
                if (!G || null === q || e) return;
                if (!1 === q) return void v(["character"]);
                const [t, a] = q, {
                  error: r = null,
                  result: n
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/owned", {
                  pingBearer: X,
                  query: {
                    character: a,
                    platform: t
                  }
                });
                if (r) throw Object.assign(new Error(""), r);
                L(n?.xmas23PlatesAllowed);
                const s = n?.plates?.map((e => {
                    const t = _(e?.vehicles?.[0]?.plateStyle ?? "YellowBlack") ?? _("YellowBlack");
                    return {
                      ...e,
                      style: t
                    }
                  })) ?? [],
                  {
                    error: o = null,
                    result: l
                  } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/availableVehicles", {
                    pingBearer: X,
                    query: {
                      character: a,
                      platform: t
                    }
                  });
                if (o) throw Object.assign(new Error(""), o);
                const i = h().uniqBy(l?.vehicles ?? [], (e => {
                  let {
                    id: t
                  } = e;
                  return t
                }));
                if (!i.length) return v(["vehicles"]), void E(!1);
                A(i);
                const {
                  error: c,
                  result: u
                } = await (0, d.coreScApiFetch)("games/gtao/licensePlates/order", {
                  pingBearer: X,
                  query: {
                    platform: t
                  },
                  useCache: !1
                });
                if (c) throw Object.assign(new Error(""), c);
                const m = I(u, V);
                let p = [be, ...s];
                p = p.map(((e, t) => ({
                  ...e,
                  index: t
                }))), m ? (T(u), O(be.style.id)) : T(null), C(be.plateText), E(!1), R(p)
              } catch (e) {
                v(["api", e]), E(!1)
              }
            })()
          }), [String(q), G, ae]), (0, r.useEffect)((() => {
            if (I(D, V)) {
              const e = _(D.plateStyle);
              "number" == typeof e?.id && O(e.id), C(D.plateText)
            }
          }), [D, V]), (0, r.useEffect)((() => {
            if (Q || !H || M || !ae) return;
            const e = te.get("envUrl") || a(68696),
              t = new m.LoadingManager((() => {
                ee({
                  environmentMap: c,
                  environmentModel: i,
                  plateTextures: d
                })
              })),
              r = new p.y(t),
              n = new g.E(t),
              s = new b.g(t);
            n.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.3/"), r.setDRACOLoader(n), s.detectSupport(new m.WebGLRenderer), s.setTranscoderPath("https://unpkg.com/three@0.134.0/examples/js/libs/basis/"), r.setKTX2Loader(s);
            const o = new m.TextureLoader(t),
              l = new m.CubeTextureLoader(t);
            let i;
            r.load(e, (e => {
              i = e
            }), void 0, (e => console.log("err", e)));
            const c = l.load([a(9964), a(77149), a(9600), a(69128), a(87728), a(27616)]),
              d = H.map((e => {
                const {
                  fontColor: t,
                  fontSize: a
                } = e, [r, n, s, l] = [e.albedoImageUrl, e.alphaImageUrl, e.bumpImageUrl, e.roughnessImageUrl].map((e => o.load(e)));
                return {
                  albedoMap: r,
                  alphaMap: n,
                  bumpMap: s,
                  roughnessMap: l,
                  fontColor: t,
                  fontSize: a
                }
              }))
          }), [Q, H, M, ae]), (0, r.useEffect)((() => {
            const e = B !== fe.LIST_PLATES && !z;
            w(e)
          }), [B, z]);
          const se = (0, r.useMemo)((() => (0, tt.jsx)(o.Canvas, {
            shadows: !S(),
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
            children: (0, tt.jsx)(c.GtmProvider, {
              checkUser: !1,
              children: (0, tt.jsx)(vt, {
                loadedAssets: Q
              })
            })
          })), [Q, G]);
          return ae && null !== G ? M ? (0, tt.jsx)(oa, {
            t
          }) : (0, tt.jsxs)("div", {
            ref: K,
            className: "rockstargames-modules-gtao-license-platee77939e1820c318536a581396891c6d8",
            children: [W && (0, tt.jsx)("div", {
              className: "rockstargames-modules-gtao-license-platecb41956b83afc8b368f030e3ac9efd58",
              ref: J,
              children: (0, tt.jsx)(la, {
                isLoading: $
              })
            }), (0, tt.jsxs)("div", {
              className: "rockstargames-modules-gtao-license-plated84d9facb1ce367777aeb61cfb594eb8",
              children: [(0, tt.jsx)(sa, {
                isMobile: W
              }), (0, tt.jsxs)("div", {
                className: "rockstargames-modules-gtao-license-platebca268dc1d11ae6823b1bc5b48b364ca",
                ref: Z,
                children: [se, !W && (0, tt.jsx)(la, {
                  isLoading: $
                })]
              })]
            }), (0, tt.jsx)("span", {
              className: "rockstargames-modules-gtao-license-platea9a516aab758a9651e41554f2e2a0890"
            }), (0, tt.jsx)(pa, {
              t
            }), (0, tt.jsx)(at, {
              t
            })]
          }) : null
        })), s)
    },
    68696: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/glb/1843b92a5b0f80dbad5ac625e18712c9.glb"
    },
    77149: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/310aae02f3b729401148b00e21e63680.png"
    },
    69128: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/080f77652dad3eab9c63ae40289bc2cd.png"
    },
    27616: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/696c6c8a65f80cb1ddef34af304bbea3.png"
    },
    9964: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/22c93544bb6cc43f1456250955025b44.png"
    },
    9600: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b6102d9185c58dfe8a1da872c7e27558.png"
    },
    87728: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5970684d704507ab7282e32cc69cd04b.png"
    },
    72500: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e842fb4993c970ad9f99c54f66dc23f1.jpg"
    },
    1112: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1911068b624e9ad6e24e0b5af557ca98.png"
    },
    93572: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f00c086b0ccf0f5e143a07d6c397af01.jpg"
    },
    23964: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/81c8bf8e8f3845940a1ddf505a9dbb2e.jpg"
    },
    22552: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ad86726bf1f59ba9e72f48ec3d909510.png"
    },
    19252: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/24ace1d97bcf47f10b248854b28723fb.jpg"
    },
    61580: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/eeeb3b31a594a9c0b399af3296c3caed.jpg"
    },
    90372: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27588e10169bb7555bed1fe99963ddf4.jpg"
    },
    75224: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a5907832294f4292975a7428408031.png"
    },
    12124: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/318db7582cb10a2b660aafa45a49ec13.jpg"
    },
    4164: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/582604393d5f75a3b9b1943b1fdb856f.jpg"
    },
    34888: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f698f122632ac925fa54df7fd371035.jpg"
    },
    4236: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9ff7cef42d4c37cc4a158aadd7bf9e70.png"
    },
    76160: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/306a9606a4773a61342b14618e5e4165.jpg"
    },
    6216: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e41a5143c3d0ae5a16573064ee1e309a.jpg"
    },
    55468: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca6a8bfc39e4bff84d6f31176074b342.png"
    },
    94736: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ed129e5ac2d871dddf75daba04816bc0.jpg"
    },
    79120: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4235e82a6662cc6c700deee2b5aa28b2.jpg"
    },
    45092: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fcdc388bebc3a656c2584e90c1f4a6bf.png"
    },
    33988: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5f90e389f2e4dbec1782e382c2e0efd.jpg"
    },
    2876: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/58af63f198dffe524132d43c57561d1c.jpg"
    },
    44124: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1525b482fdcab1ad0e483f4346b0f5a.png"
    },
    88568: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cc712e262f7a46085049a07d1ca145ea.jpg"
    },
    94888: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/858ed8fe9a4aaed2e385023aac516ede.jpg"
    },
    82912: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99e28a3c5885ec460aa556591903f67f.jpg"
    }
  }
]);