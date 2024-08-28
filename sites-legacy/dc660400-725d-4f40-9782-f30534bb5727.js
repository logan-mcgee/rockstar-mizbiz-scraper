! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "dc660400-725d-4f40-9782-f30534bb5727", e._sentryDebugIdIdentifier = "sentry-dbid-dc660400-725d-4f40-9782-f30534bb5727")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [313], {
    60207: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(55140),
        i = t(73379);
      const n = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, s.NameField)(e), (0, s.translatedField)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, s.StyleField)(e)],
          defaultItem: () => (0, s.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, s.itemPropsWithKey)(e, {
            label: (0, i.stripHTML)(`${e?.name??e?.[s.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    93665: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => p,
        h: () => b
      });
      var s = t(71403),
        i = t(42756),
        n = t(64205),
        c = t(80791),
        r = t(74401),
        l = t(40207),
        o = t(89779);
      var d = t(46632);
      const m = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: i,
            height: m,
            onClose: g,
            rect: u = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: b = "",
            width: p,
            fadeIn: y = !0,
            cardIds: h,
            activeId: k,
            theme: x,
            title: v,
            gtm: j = {},
            aspectRatio: N = "default",
            cardDimensions: C
          } = a, {
            left: w,
            top: _
          } = u, P = h?.indexOf(k), [I, S] = (0, s.useState)(h?.length || 0), {
            track: T
          } = (0, l.useGtmTrack)(), L = null !== h && (h?.length || 0) > 1 && ("flag_bg" === x || "fob" === C?.size), [A, B] = (0, o.useSearchParams)(), [E, M] = (0, s.useState)(!1), [O, z] = (0, s.useState)(!1), [H, V] = (0, s.useState)(), $ = e => {
            "number" == typeof e && h && e < h.length && e > -1 && (console.log("navigating to: ", e), B({
              info: h[e].toString()
            }))
          }, D = () => {
            const e = P > -1 ? P - 1 : 0;
            $(e), T({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v,
              position: P
            })
          }, G = () => {
            const e = P > -1 ? P + 1 : 0;
            $(e), T({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: v,
              position: P
            })
          };
          (0, s.useEffect)((() => {
            S(h?.length || 0)
          }), [h?.length]), (0, s.useEffect)((() => {
            null !== P && null !== h && $(P)
          }), [P, h]), (0, s.useEffect)((() => {
            const e = h?.findIndex((e => e === k));
            "number" == typeof e && (z(e <= 0), M(e >= I - 1))
          }), [h, k]);
          const [W] = (0, s.useState)({
            y: _,
            x: w,
            top: 0,
            left: 0,
            width: p,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: L ? "0" : ""
          }), q = {
            opacity: 1
          }, F = (0, s.useRef)(null), R = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, U = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [K] = (0, s.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: L ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: R,
              y: R,
              top: R,
              left: R,
              width: R,
              height: R,
              border: R,
              background: {
                delay: .3
              }
            }
          }), [X, Y] = (0, s.useState)({
            initial: W,
            shown: K
          });
          (0, s.useEffect)((() => {
            Y({
              initial: W,
              shown: K
            })
          }), [W, K]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), T({
                event: "modal_close",
                element_placement: v,
                ...j
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Q = () => {
              "function" == typeof g && (g(), T({
                event: "modal_close",
                element_placement: v,
                ...j
              }))
            },
            J = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const s = e.children[t];
                if (s.scrollHeight > s.clientHeight) return s;
                const i = J(s, a - 1);
                if (i) return i
              }
              return null
            },
            Z = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return H?.queried ? a = H.element : (a = J(e, 2), V({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = y ? 0 : 1,
            ae = (0, s.useRef)(null),
            te = (0, d.jsx)(c.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: U,
              onClick: () => {
                Q()
              },
              onKeyDown: Z,
              onKeyUp: Z
            });
          let se = null;
          return se = n.Ay, (0, s.useMemo)((() => (0, d.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": L,
            "data-aspect-ratio": N,
            children: (0, d.jsx)(se, {
              children: (0, d.jsxs)("div", {
                children: [(0, d.jsx)(c.motion.div, {
                  className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: q,
                  transition: R,
                  onClick: () => Q()
                }), L && (0, d.jsxs)("div", {
                  className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, d.jsxs)(c.motion.div, {
                    className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: U,
                    children: [(0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: D,
                      disabled: O,
                      onKeyDown: Z,
                      onKeyUp: Z
                    }), (0, d.jsxs)("div", {
                      className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                      "data-theme": x,
                      children: [" ", P + 1, (0, d.jsx)("div", {
                        className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                      }), h?.length, " "]
                    }), (0, d.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: G,
                      disabled: E,
                      onKeyDown: Z,
                      onKeyUp: Z,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, d.jsx)(c.motion.div, {
                  className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                  ref: F,
                  initial: "initial",
                  animate: "shown",
                  variants: X,
                  transition: R,
                  style: f,
                  children: (0, d.jsxs)(c.motion.div, {
                    className: (0, r.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", i),
                    children: [!L && te, (0, d.jsx)(c.motion.div, {
                      className: (0, r.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", b),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: U,
                      ref: ae,
                      children: t
                    }), (0, d.jsx)("button", {
                      className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, P, f])
        },
        g = "modal-context",
        u = [null, () => null],
        f = window?.[g] ?? (window[g] = (0, s.createContext)(u)),
        b = () => (0, s.useContext)(f),
        p = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, s.useState)(u), {
            setBodyIsLocked: c
          } = (0, i.useBodyScrollable)("ModalProvider"), r = (0, s.useMemo)((() => t?.content ? (0, d.jsx)(m, {
            modal: t
          }) : null), [t]);
          return (0, s.useEffect)((() => {
            c(!!r)
          }), [r]), (0, d.jsx)(f.Provider, {
            value: [r, n],
            children: a
          })
        }
    },
    44313: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => Va
      });
      var s = t(84079),
        i = t(66335),
        n = t.n(i),
        c = t(17891),
        r = t(71403),
        l = t(46632);
      const o = (0, r.createContext)(void 0),
        d = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, r.useState)([]), i = e => {
            s(e)
          }, n = (0, r.useMemo)((() => ({
            collections: t,
            updateGalleryCollections: i
          })), [t]);
          return (0, l.jsx)(o.Provider, {
            value: n,
            children: a
          })
        };
      var m = t(74401),
        g = t(31879),
        u = t.n(g),
        f = t(2024),
        b = t(355),
        p = t(40207),
        y = t(70834);
      const h = {
          pillBtn: "rockstargames-sites-legacyb141beea308c3749c34ab64661bd85c1",
          selected: "rockstargames-sites-legacya6585d2a1bd4d314b6fdfc23a672f56f",
          container: "rockstargames-sites-legacydf5ea4a5af035a8163d804a8cdf68ebe",
          flipped: "rockstargames-sites-legacya5e6219f9e94da0ddc32db6157955b27",
          singleColumn: "rockstargames-sites-legacyec7889c9a1756bd738ed2c60980235de",
          large: "rockstargames-sites-legacyb00fed1ab4a38ee72bdd090fc8ccf579",
          imgVideo: "rockstargames-sites-legacyd287a65530a0979438e4faf8de287dca",
          content: "rockstargames-sites-legacyf41068d33b7b452cbb738957b5013622",
          title: "rockstargames-sites-legacyb46a2f962ed1e4678b99b8acfb86205e",
          headerLogo: "rockstargames-sites-legacye2b0e633ecf083151d9e2d5f9fdcf0bd",
          blurb: "rockstargames-sites-legacyb9744fcecb5ed02c5413d6ab530cfb1e",
          text: "rockstargames-sites-legacya1b4b206bf37247459ee82dee4121562",
          footnote: "rockstargames-sites-legacye3ade690d81b31192fb1f29b38d31211",
          rdrUltra: "rockstargames-sites-legacya1c4a1ca44e89c5ab32ef4e4a1cc06a6",
          universalCyrillic: "rockstargames-sites-legacyebc2801def19a848a9aa6f01927d6053"
        },
        k = b.withFadeIn((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: s,
            footnote: i,
            image: n,
            videoId: c,
            customHeaderFont: o,
            setVideoAsDefault: d,
            large: g = !1,
            image_on_right: b = !1,
            style: k = {},
            className: x = "",
            ...v
          } = e;
          const {
            track: j
          } = (0, p.useGtmTrack)(), {
            ref: N,
            inView: C
          } = (0, y.useInView)({
            threshold: .6
          }), [w, _] = (0, r.useState)(!1), [P, I] = (0, r.useState)(!1), S = o ? h[o] : "", T = t?._memoq?.maxHeight || "auto", L = t?._memoq?.maxWidth || "auto";
          return (0, r.useEffect)((() => {
            I(t?.setLogoAsDefault || !1)
          }), []), (0, r.useEffect)((() => {
            C && !w && (j({
              event: "page_section_impression",
              element_placement: v?._memoq?.title?.toLowerCase()
            }), _(!0))
          }), [C]), (0, l.jsxs)("div", {
            className: (0, m.classList)(h.container, g ? h.large : "", b ? h.flipped : "", n ? "" : h.singleColumn, x),
            style: k,
            ref: N,
            children: [d && c ? (0, l.jsx)(u(), {
              className: h.imgVideo,
              autoplay: !1,
              id: c
            }) : n ? (n.alt = n?.alt ?? n?._memoq?.alt ?? "", (0, l.jsx)(f.A, {
              className: h.imgVideo,
              image: n
            })) : null, (0, l.jsx)("div", {
              className: h.content,
              children: (0, l.jsxs)("div", {
                className: h.text,
                children: [(() => {
                  const e = t?.image,
                    s = t?.image?.alt ?? t?.image?._memoq?.alt,
                    i = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = s), P && e ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(f.A, {
                      className: h.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: T,
                        maxWidth: L,
                        margin: 0
                      }
                    }), (0, l.jsx)("h2", {
                      id: `${i}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, l.jsx)("h2", {
                    className: [h.title, S].join(" "),
                    children: a
                  })
                })(), s ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)("div", {
                    className: h.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (A = s, A ? A.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), i && (0, l.jsx)("small", {
                    className: h.footnote,
                    dangerouslySetInnerHTML: {
                      __html: i
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var A
        })),
        x = {
          pillBtn: "rockstargames-sites-legacyf911d1a5e313009fd5aa802356519700",
          selected: "rockstargames-sites-legacyc298fc2a48eb605ace08e9ef5e8a466d",
          featureBlock: "rockstargames-sites-legacyd1c356d016267549c7e470423b24da6b",
          featuresContainer: "rockstargames-sites-legacyfb23cb40e1cae664d75b9489276d29e2"
        },
        v = e => {
          let {
            className: a,
            id: t,
            features: s,
            backgroundImageGroup: i
          } = e;
          const n = (0, m.useGetCdnSource)(i?.desktop?.image),
            c = (0, m.useGetCdnSource)(i?.topMask?.mask),
            r = (0, m.useGetCdnSource)(i?.bottomMask?.mask),
            o = !!r,
            d = {
              "--fb-bg-image": `url(${n})`,
              "--fb-top-mask": `url(${c})`,
              "--fb-bottom-mask": `url(${r})`
            };
          return s.length ? (0, l.jsx)("section", {
            style: d,
            className: [x.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            "data-has-mask": o,
            children: (0, l.jsx)("div", {
              className: x.featuresContainer,
              children: s.map((e => (0, l.jsx)(k, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var j = t(25076);

      function N(e) {
        return e ? {
          "--gradient-start-color": w(C(e?.startColor), e?.startOpacity),
          "--gradient-end-color": w(C(e?.endColor), e?.endOpacity)
        } : {}
      }

      function C(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function w(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function _(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const P = {
          pillBtn: "rockstargames-sites-legacyb89c30e242bdf89d0e7259dd9dd945d6",
          selected: "rockstargames-sites-legacya17a1cbd00f6cdd8146dc110d1a50de0",
          button: "rockstargames-sites-legacye5b4ce409c50969f5b68ea7ef1b93839",
          imageBackground: "rockstargames-sites-legacycceeca79d01852e2a15b9195b5dcfeca",
          cardArtworkIcon: "rockstargames-sites-legacycfd487a9f20a7a29eff544a2a31905bc",
          cardDownloadIcon: "rockstargames-sites-legacya7f13d96c9c6451e1a6cba5b26134632",
          cardIcon: "rockstargames-sites-legacyea1f56154989c823c96d3bcfe3b12b6c",
          cardPlayIcon: "rockstargames-sites-legacye61b6f6fd72977c289fc2f7843a93102",
          cardShopIcon: "rockstargames-sites-legacyc716598a9353b12f9078a38244075153",
          textContainer: "rockstargames-sites-legacybc51f5de54c905471ea9b3dac3c3d995",
          heading: "rockstargames-sites-legacya1656771fa6019e4e1469faf9a7893a8"
        },
        I = e => {
          let {
            title: a,
            subtitle: t,
            cardType: s,
            textColor: i,
            link: n,
            images: c,
            justifyContentHorizontally: r,
            justifyContentVertically: o,
            gradient: d
          } = e;
          const {
            track: g
          } = (0, p.useGtmTrack)(), u = (0, m.useGetCdnSource)(c?.mobile?.image?.full_src ?? c?.mobile?.image), b = (0, m.useGetCdnSource)(c?.desktop?.image?.full_src ?? u), y = {
            "--aspect-ratio-mobile": c?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": c?.desktop?.aspectRatio ?? "",
            justifyContent: r ?? ""
          }, h = {
            justifyContent: o ?? ""
          }, k = {
            color: i ?? "",
            fontWeight: 700
          }, x = {
            ...N(d),
            "--gradient-end-percentage": `${_(d?.endPercentage)}%`,
            "--gradient-angle": `${_(d?.angle)}deg`
          }, v = {
            mobile: u,
            desktop: b,
            alt: a
          };
          return (0, l.jsxs)(j.NavLink, {
            to: n ?? "",
            className: P.button,
            style: {
              ...y,
              ...x
            },
            onClick: () => {
              g({
                event: "card_click",
                element_placement: a?.toLowerCase()
              })
            },
            children: [("audio" === s || "video" === s) && (0, l.jsx)("div", {
              className: P.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: P.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: P.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: P.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: P.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: P.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(s), (0, l.jsx)(f.A, {
              className: P.imageBackground,
              image: v
            }), (0, l.jsxs)("div", {
              className: P.textContainer,
              style: h,
              children: [(0, l.jsx)("p", {
                className: P.text,
                style: k,
                children: (0, l.jsx)("span", {
                  children: t
                })
              }), (0, l.jsx)("h3", {
                className: P.heading,
                style: k,
                children: (0, l.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        S = {
          pillBtn: "rockstargames-sites-legacyd5a9c8c0159690a7a024fd9724875b73",
          selected: "rockstargames-sites-legacydcafd64d75b4d6df79702aae18dbae55",
          relatedLinksContainer: "rockstargames-sites-legacyad16a3fe9284f5e246d328f0a123c897",
          buttonContainer: "rockstargames-sites-legacyd4851614d71a6c5efd31350dacf3d2d2"
        },
        T = e => {
          let {
            title: a,
            id: t,
            buttons: s = [],
            className: i,
            ...n
          } = e;
          const {
            track: c
          } = (0, p.useGtmTrack)(), {
            ref: o,
            inView: d
          } = (0, y.useInView)({
            threshold: .6
          }), [m, g] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            d && !m && (c({
              event: "page_section_impression",
              element_placement: `related links group - ${n?._memoq?.title}`.toLowerCase()
            }), g(!0))
          }), [d]), s?.length ? (0, l.jsxs)("section", {
            className: [S.relatedLinksContainer, i ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: o,
            children: [(0, l.jsx)("h2", {
              children: a
            }), (0, l.jsx)("div", {
              className: S.buttonContainer,
              children: s.map((e => (0, l.jsx)(I, {
                title: e?.title,
                subtitle: e?.subtitle,
                cardType: e?.cardType,
                textColor: e?.textColor,
                link: e?.link,
                images: e?.images,
                justifyContentHorizontally: e?.justifyContentHorizontally,
                justifyContentVertically: e?.justifyContentVertically,
                gradient: e?.gradient
              }, e.key)))
            })]
          }) : null
        };
      var L = t(13953),
        A = t(81902),
        B = t(7471),
        E = t(6098),
        M = t(26697);
      const O = {
          pillBtn: "rockstargames-sites-legacyb5ec5d76744acc1d2d32bb583fccfb38",
          selected: "rockstargames-sites-legacybab7278693f954cdaefdb24b9de107fd",
          tabControlContainer: "rockstargames-sites-legacyb8f0bb480a94d4cbb36e9758142de89c",
          tabControl: "rockstargames-sites-legacyeb06325d5873f8e5eb585c5b806fdc26",
          withScroll: "rockstargames-sites-legacybc05233bdd50d635a7025ba0c38579c6",
          pills: "rockstargames-sites-legacyda2b54ef7d5516af64b1d82e7b27d65f",
          tabButton: "rockstargames-sites-legacybf5fd237d0ec1de987eb5364e09e4029",
          tabIconWrapper: "rockstargames-sites-legacydc7833948789552f2e834f72eec8f176",
          tabIcon: "rockstargames-sites-legacyce0f951e0b1e4e70466b4019c9205c8e",
          tabIconActive: "rockstargames-sites-legacyb4b50583d9aec12f0f6e5e9c88365083",
          tabLabel: "rockstargames-sites-legacyc553e6681beb4e5abd2a02594bf1b0da",
          tabBackground: "rockstargames-sites-legacyd5e306caea049e695f1f393e0122d9f4",
          tabLabelActive: "rockstargames-sites-legacyfafecd01cd09ee517d155cf5230e7527",
          pillButton: "rockstargames-sites-legacyba13339225e3a6b2d51ce5917333b282",
          nextPillButton: "rockstargames-sites-legacyc46ad6f90589c4eff59418ab5e53f345",
          previousPillButton: "rockstargames-sites-legacya2fef546cdf430ae233885dcb0bd7a1a",
          nextPillIcon: "rockstargames-sites-legacya4fe7c63715b8270d31ddcdf52c9d4cd",
          previousPillIcon: "rockstargames-sites-legacyefb8b83ba5b892c891163983cfbcda37"
        },
        z = e => {
          let {
            data: a,
            onClick: t,
            activeTab: s
          } = e;
          const {
            track: i
          } = (0, p.useGtmTrack)(), n = (0, r.useRef)(null), [c, o] = (0, r.useState)(!1), [d, m] = (0, r.useState)(!1), [g, u] = (0, r.useState)(!1), f = e => () => {
            i({
              event: "component_tab_click",
              text: a[e]?.name?.toLowerCase() ?? void 0,
              element_placement: "image gallery"
            }), t && t(e)
          }, b = e => {
            e.isEnd ? o(!0) : o(!1), e.isBeginning ? m(!0) : m(!1)
          };
          return (0, r.useEffect)((() => {
            const e = () => {
              n.current && ((n.current.wrapperEl.clientWidth || 0) > (n.current.el.clientWidth || 0) ? (u(!0), n.current.params.centeredSlides = !0, n.current.params.centeredSlidesBounds = !0) : (u(!1), n.current.params.centeredSlides = !1, n.current.params.centeredSlidesBounds = !1), b(n.current))
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, l.jsxs)("div", {
            className: O.tabControlContainer,
            children: [!d && g && (0, l.jsx)("div", {
              className: O.previousPillButton,
              children: (0, l.jsx)("button", {
                type: "button",
                className: [O.previousPillIcon, O.pillButton].join(" "),
                onClick: () => {
                  n.current && (n.current?.slidePrev(), n.current.isBeginning ? m(!0) : m(!1), i({
                    event: "carousel_previous",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, l.jsx)(E.A, {})
              })
            }), (0, l.jsx)("div", {
              className: [O.tabControl, g ? O.withScroll : ""].join(" "),
              children: (0, l.jsx)(A.RC, {
                onBeforeInit: e => n.current = e,
                onInit: b,
                direction: "horizontal",
                grabCursor: !0,
                slidesPerView: "auto",
                onSlideChange: b,
                onResize: b,
                className: O.pills,
                children: a?.filter((e => {
                  let {
                    isHidden: a
                  } = e;
                  return 1 !== a
                }))?.map(((e, a) => (0, l.jsx)(A.qr, {
                  children: (0, l.jsxs)(L.motion.button, {
                    type: "button",
                    className: [O.tabButton, g ? O.withScroll : ""].join(" "),
                    onClick: f(a),
                    "aria-label": e?.name,
                    children: [e?.platform ? (0, l.jsx)("span", {
                      className: O.tabIconWrapper,
                      children: (0, l.jsx)("img", {
                        className: [O.tabIcon, a === s ? O.tabIconActive : ""].join(" "),
                        src: (0, B.A)(e?.platform) || "",
                        alt: e?.platform
                      })
                    }) : (0, l.jsx)("span", {
                      className: [O.tabLabel, a === s ? O.tabLabelActive : ""].join(" "),
                      children: e?.name?.toUpperCase()
                    }), a === s ? (0, l.jsx)(L.motion.div, {
                      className: O.tabBackground,
                      layoutId: "tabBackground"
                    }) : null]
                  }, `pill-tab-${e?.name}-${e?.key}`)
                }, `pill-tab-${e?.name}-${e?.key}`)))
              })
            }), !c && g && (0, l.jsx)("div", {
              className: O.nextPillButton,
              children: (0, l.jsx)("button", {
                type: "button",
                className: [O.nextPillIcon, O.pillButton].join(" "),
                onClick: () => {
                  n.current && (n.current?.slideNext(), n.current.isEnd ? o(!0) : o(!1), i({
                    event: "carousel_next",
                    element_placement: "image gallery"
                  }))
                },
                children: (0, l.jsx)(M.A, {})
              })
            })]
          })
        };
      var H = t(79493),
        V = t(42756),
        $ = t(97789),
        D = t(7117),
        G = t.n(D);
      const W = {
          pillBtn: "rockstargames-sites-legacycddfe17e502302696a2a18d38b9ea12f",
          selected: "rockstargames-sites-legacyaa44fea12f7cccaac28adcb6dccc8b2c",
          overlay: "rockstargames-sites-legacye00a5d3afa546f2988ea1e3f0feeff6f",
          masonryDialog: "rockstargames-sites-legacycf35b902a7b176b8f441a26cec541385",
          masonryDialogWrapper: "rockstargames-sites-legacye27cfa77c71ac022c368727cfb5939bf",
          modalSection: "rockstargames-sites-legacye150ff000957f1abdedd2f778a289252",
          modalContainer: "rockstargames-sites-legacyf9a84d1aa4a82466ed8c097268d0f17c",
          modal: "rockstargames-sites-legacyf0220f0ae8f7dbe70be0588b094ff2db",
          modalMultisourceImage: "rockstargames-sites-legacyde964ef7e9b0ee8b126c8e062f721c24",
          galleryImage: "rockstargames-sites-legacyb03a3422c768396560fed11ce8bbdfa2",
          modalItem: "rockstargames-sites-legacya2e590af7b85d8de35783152ecba70d3",
          controlsWrapper: "rockstargames-sites-legacyf0435986d9016c518358866d8c687f86",
          modalControls: "rockstargames-sites-legacya031b4a8e7e0bca9385fd9d72abe31d7",
          modalNext: "rockstargames-sites-legacyefacba3d9c9f56f20a4f1e6199300482",
          modalPrevious: "rockstargames-sites-legacya8eae0863b916b8c7fffade41630732e",
          closeBtn: "rockstargames-sites-legacya8828f6be03d0d658e9981173985dd09"
        },
        q = e => {
          let {
            navigatePrevious: a,
            navigateNext: t,
            prevDisabled: s,
            nextDisabled: i
          } = e;
          return (0, l.jsxs)("div", {
            className: W.modalControls,
            children: [(0, l.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: W.modalPrevious,
              onClick: a,
              disabled: s
            }), (0, l.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: W.modalNext,
              onClick: t,
              disabled: i
            })]
          })
        },
        F = e => {
          let {
            images: a,
            selectedImage: t,
            onClose: s
          } = e;
          const [i, n] = (0, r.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), [c, o] = (0, r.useState)(0 === i), [d, m] = (0, r.useState)(i + 1 >= a?.length), {
            track: g
          } = (0, p.useGtmTrack)(), u = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, b = (0, r.useCallback)((() => {
            const e = (i + 1) % a.length;
            e !== i && i !== a.length - 1 && (n(e), o(!1)), m(e === a.length - 1), g({
              event: "modal_next",
              element_placement: "image gallery modal",
              card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[i]?.key,
              position: i,
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i, a.length]), y = (0, r.useCallback)((() => {
            const e = (i - 1 + a.length) % a.length;
            e !== i && 0 !== i && (n(e), m(!1)), o(0 === e), g({
              event: "modal_previous",
              element_placement: "image gallery modal",
              card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[i]?.key,
              position: i,
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i, a.length]), h = a[i];
          return (0, r.useEffect)((() => {
            g({
              event: "trackPageview",
              view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [i]), (0, r.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? y() : "ArrowRight" === e.key ? b() : "Escape" === e.key && (g({
                event: "modal_close",
                element_placement: "image gallery modal",
                card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: a[i]?.key,
                position: i,
                view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
              }), s())
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [i, y, b, s]), (0, l.jsx)(L.AnimatePresence, {
            children: (0, l.jsx)(L.motion.div, {
              role: "presentation",
              className: W.overlay,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: u,
              children: (0, l.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: W.masonryDialog,
                onClick: e => (e => {
                  if (!e.currentTarget) return;
                  const t = e.currentTarget.getBoundingClientRect();
                  (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (g({
                    event: "modal_close",
                    element_placement: "image gallery modal",
                    card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                    card_id: a[i]?.key,
                    position: i,
                    view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
                  }), s()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                })(e),
                children: (0, l.jsx)(G(), {
                  active: !0,
                  focusTrapOptions: {
                    allowOutsideClick: !0
                  },
                  children: (0, l.jsxs)("div", {
                    className: W.masonryDialogWrapper,
                    children: [(0, l.jsxs)(L.motion.div, {
                      className: W.controlsWrapper,
                      initial: {
                        opacity: 0
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: {
                        ease: "easeIn",
                        duration: .3,
                        delay: .5
                      },
                      children: [(0, l.jsx)(q, {
                        navigatePrevious: y,
                        navigateNext: b,
                        prevDisabled: c,
                        nextDisabled: d
                      }), (0, l.jsx)("button", {
                        type: "button",
                        id: "close",
                        "aria-label": "close",
                        className: W.closeBtn,
                        onClick: () => {
                          g({
                            event: "modal_close",
                            element_placement: "image gallery modal",
                            card_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase(),
                            card_id: a[i]?.key,
                            position: i,
                            view_name: `${a[i]?.image?.name??"unnamed image"}`.toLowerCase()
                          }), s()
                        }
                      })]
                    }), (0, l.jsx)(L.motion.div, {
                      className: W.modal,
                      initial: {
                        opacity: 0,
                        scale: .5
                      },
                      animate: {
                        opacity: 1,
                        scale: 1
                      },
                      transition: u,
                      children: (0, l.jsx)(f.A, {
                        className: [W.modalMultisourceImage, W.galleryImage].join(" "),
                        style: {
                          width: "100%",
                          height: "100%",
                          margin: 0
                        },
                        image: h?.image
                      })
                    })]
                  })
                })
              })
            })
          })
        },
        R = e => {
          let {
            image: a,
            item: t,
            handleImageClick: s
          } = e;
          const i = (0, m.useImageParser)(a?.image),
            n = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, l.jsx)(L.motion.button, {
            className: "rockstargames-sites-legacydc288c973cc46eff0b18afdc7c1a2d55",
            onClick: () => s(a),
            variants: t,
            children: (0, l.jsx)($.A, {
              imageUrl: i?.src?.desktop,
              className: "rockstargames-sites-legacyfdb0ce7aa95e4780c4004cb01285dbc4",
              alt: n,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${a?.key}`)
        },
        U = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, i] = (0, r.useState)(null), {
            track: n
          } = (0, p.useGtmTrack)(), c = t.flat(2), {
            setBodyIsLocked: o
          } = (0, V.useBodyScrollable)("LegacyScreensModule"), d = e => {
            n({
              event: "card_click",
              element_placement: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), i(e), o(!0)
          }, m = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, l.jsx)("div", {
            className: "rockstargames-sites-legacyfe7788190b9cb04e85c4a1783a030749",
            children: (0, l.jsxs)(L.motion.div, {
              id: "rockstargames-sites-legacyc2800714e59f673ab1feb6dc33856d2f",
              className: "rockstargames-sites-legacyc68ed56cd26004d04a76ba9616bd7b7d",
              variants: {
                hidden: {
                  opacity: 0
                },
                show: {
                  opacity: 1,
                  transition: {
                    duration: .75
                  }
                }
              },
              initial: "hidden",
              animate: "show",
              children: [a?.map((e => (0, l.jsx)(R, {
                image: e,
                item: m,
                handleImageClick: d
              }, e?.key))), s && (0, H.createPortal)((0, l.jsx)(F, {
                images: c,
                selectedImage: s,
                onClose: () => {
                  i(null), o(!1)
                }
              }), document.body)]
            })
          })
        },
        K = e => {
          let {
            image: a,
            item: t,
            handleImageClick: s
          } = e;
          const i = (0, m.useImageParser)(a?.image),
            n = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, l.jsx)(L.motion.button, {
            className: "rockstargames-sites-legacyf07fcde2e2f6109fbbfdd6f62df8ed44",
            onClick: () => s(a),
            variants: t,
            initial: "hidden",
            animate: "show",
            children: (0, l.jsx)($.A, {
              imageUrl: i?.src?.desktop,
              className: "rockstargames-sites-legacya4625e54bd7c2b8ed599d8ecd45e957f",
              alt: n,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${a.key}`)
        },
        X = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, i] = (0, r.useState)(null), {
            track: n
          } = (0, p.useGtmTrack)(), c = t.flat(2), {
            setBodyIsLocked: o
          } = (0, V.useBodyScrollable)("LegacyScreensModule"), d = e => {
            n({
              event: "card_click",
              card_name: s?.image?.name.toLowerCase() ? s?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), i(e), o(!0)
          }, m = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1,
              transition: {
                duration: .75
              }
            }
          };
          return (0, l.jsxs)("div", {
            className: "rockstargames-sites-legacyf9e3f02888b417f6e3e2a85df60951ca",
            children: [a?.map((e => (0, l.jsx)(K, {
              image: e,
              item: m,
              handleImageClick: d
            }, e?.key))), s && (0, H.createPortal)((0, l.jsx)(F, {
              images: c,
              selectedImage: s,
              onClose: () => {
                i(null), o(!1)
              }
            }), document.body)]
          })
        },
        Y = "rockstargames-sites-legacyc6be48a89acd92cde0f692a4636e2018",
        Q = e => {
          let {
            sectionsPerPage: a,
            totalSections: t,
            currentPage: s,
            previousPage: i,
            nextPage: n,
            paginationPosition: c
          } = e;
          const r = [],
            o = Math.ceil(t / a),
            d = {
              "--pagination-position": `${c}`
            };
          for (let e = 1; e <= Math.ceil(t / a); e++) r.push(e);
          return o > 1 && (0, l.jsx)("div", {
            className: "rockstargames-sites-legacyb82c76457191f53e54104dd37926e61f",
            style: d,
            children: (0, l.jsxs)("div", {
              className: "rockstargames-sites-legacya028d7866aabd64309d2f16595a41dfc",
              style: {
                padding: 0
              },
              children: [(0, l.jsx)("div", {
                className: Y,
                children: (0, l.jsx)("div", {
                  role: "button",
                  onClick: i,
                  className: "rockstargames-sites-legacyc1baf088087f1f7c909440c44829c4bc",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, l.jsxs)("div", {
                className: "rockstargames-sites-legacye59a35dbb51f4d4a13b02996dd7cd97e",
                children: [(0, l.jsx)("span", {
                  children: s
                }), (0, l.jsx)("span", {
                  className: "rockstargames-sites-legacyc222ed80e6253558dcf221b008b009aa"
                }), (0, l.jsx)("span", {
                  children: o
                })]
              }), (0, l.jsx)("div", {
                className: Y,
                children: (0, l.jsx)("div", {
                  role: "button",
                  onClick: n,
                  className: "rockstargames-sites-legacya18fb737f34833b701f04bc55d3b9100",
                  "aria-label": "Next Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              })]
            })
          })
        },
        J = {
          pillBtn: "rockstargames-sites-legacye7b4fc51f52229f777f0e1e73bbdf272",
          selected: "rockstargames-sites-legacyf502c4a06616ae1d2c3fcd246546b117",
          tabControl: "rockstargames-sites-legacyed96eb2736423f33df991a2b0f1a4a44",
          galleryWrapper: "rockstargames-sites-legacyb2206cf025f10d7a479c5d1ec974b176",
          gridItemWrapper: "rockstargames-sites-legacya4dc6f6c719ebc2a3a653d41e531f6cc",
          noImagesContainer: "rockstargames-sites-legacyf8d203979ec2fae95f7d520e87a32937",
          noImages: "rockstargames-sites-legacye4465927e1fa74e8af9a3845de529b99",
          unsupportedSection: "rockstargames-sites-legacyf55fcb75f5431e8dcc27f6d447e0b720",
          heading: "rockstargames-sites-legacycd67d15f0f4fdf0894c1de7368e1d109"
        },
        Z = () => (0, l.jsx)("div", {
          className: J.noImagesContainer,
          children: (0, l.jsx)("div", {
            className: J.noImages,
            children: (0, l.jsx)("div", {
              className: J.heading,
              children: (0, l.jsxs)("span", {
                className: J.text,
                children: [(0, l.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, l.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        ee = e => {
          let {
            sections: a = [],
            paginationSettings: t
          } = e;
          const s = [],
            [i] = (0, r.useState)(t?.sectionsPerPage || 4),
            [n, c] = (0, r.useState)(1),
            o = n * i,
            d = o - i,
            m = a.slice(d, o);
          return 0 === a?.length ? (0, l.jsx)("div", {
            className: J.gallerWrapper,
            children: (0, l.jsx)("div", {
              className: J.noImages,
              children: (0, l.jsx)("div", {
                className: J.heading,
                children: (0, l.jsx)("span", {
                  className: J.text,
                  children: "No images available"
                })
              })
            })
          }) : (a?.map((e => s.push(e?.images))), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(L.motion.div, {
              className: J.galleryWrapper,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                ease: "easeIn",
                duration: .5
              },
              style: {
                "--sections-per-page": i
              },
              children: m?.map(((e, a) => {
                let t;
                if ("1x1" === e?.type) t = U;
                else {
                  if ("2x2" !== e?.type) return (0, l.jsx)(Z, {}, `unsupported-section-${a}`);
                  t = X
                }
                return (0, l.jsx)(t, {
                  images: e?.images,
                  gallery: s
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), t?.paginationEnabled && (0, l.jsx)(Q, {
              sectionsPerPage: i,
              totalSections: a.length,
              currentPage: n,
              previousPage: () => {
                c(1 !== n ? n - 1 : Math.ceil(a.length / i))
              },
              nextPage: () => {
                n !== Math.ceil(a.length / i) ? c(n + 1) : c(1)
              },
              paginationPosition: t?.paginationPosition || "center"
            })]
          }))
        },
        ae = {
          pillBtn: "rockstargames-sites-legacyed98e22563d8490eb0533160017b708c",
          selected: "rockstargames-sites-legacye85dd947b9804d525afd5cb324d773b0",
          sectionWrapper: "rockstargames-sites-legacyc4864c694e697cf6670fb02180eafb8b",
          sectionContent: "rockstargames-sites-legacye13073a5530131ed33650976b5cb2476",
          actionBar: "rockstargames-sites-legacyed6df74e4f0bd8f6dbd2f731e812031c",
          heading: "rockstargames-sites-legacyc64d30742a1f34b9c2d2b1db3ce95b08",
          tabControl: "rockstargames-sites-legacye2ea622bd1616255f4c27c3370c39eec",
          tabButton: "rockstargames-sites-legacya40c645ea4157d9849a8be796acaf1a9",
          activeTabButton: "rockstargames-sites-legacyb4b04984b191b5aaa71f03a398136d41",
          tabLabel: "rockstargames-sites-legacyd6f74ab203d3584f4b8bdca3d6ce59cb",
          tabBackground: "rockstargames-sites-legacyc7f65be92a1883a15d2c588cb7042042",
          rdrUltra: "rockstargames-sites-legacye746470dfd3e3c070a41bb4846b44a58",
          universalCyrillic: "rockstargames-sites-legacyf39368204eb24134b55790e846806916",
          helveticaNow: "rockstargames-sites-legacyc8b5986c219588bac8b87dbb162c3fda"
        },
        te = b.withFadeIn((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: t
          } = (0, p.useGtmTrack)(), {
            ref: s,
            inView: i
          } = (0, y.useInView)({
            threshold: .6
          }), [n, c] = (0, r.useState)(!1), [d, m] = (0, r.useState)(0), g = a?.customHeaderFont ? ae[a?.customHeaderFont] : "", {
            collections: u,
            updateGalleryCollections: f
          } = (() => {
            const e = (0, r.useContext)(o);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          (0, r.useEffect)((() => {
            f(a?.collections)
          }), [a]), (0, r.useEffect)((() => {
            i && !n && (t({
              event: "page_section_impression",
              element_placement: `image gallery - ${u[d]?.name}`.toLowerCase()
            }), c(!0))
          }), [i]);
          const b = u?.length > 0 && u.some((e => e?.name || e?.platform));
          return (0, l.jsx)("section", {
            className: ae.sectionWrapper,
            ref: s,
            children: (0, l.jsxs)("div", {
              className: ae.sectionContent,
              children: [(0, l.jsxs)("div", {
                className: ae.actionBar,
                children: [(0, l.jsx)("h2", {
                  className: [ae.heading, g].join(" "),
                  children: a?.title
                }), b && (0, l.jsx)(z, {
                  data: u,
                  onClick: e => {
                    m(e)
                  },
                  activeTab: d
                })]
              }), u[d]?.sections && (0, l.jsx)(ee, {
                sections: u[d]?.sections,
                paginationSettings: a?.paginationSettings
              }, u[d]?.name)]
            })
          })
        }));
      var se = t(25180),
        ie = t(87839),
        ne = t(8999),
        ce = t(21450),
        re = t(26371);
      const le = {
          padding: "rockstargames-sites-legacye1811c65983d2df02484c7bd49620f6d",
          carouselWrapper: "rockstargames-sites-legacydaf8d6c749fa379c43a098df8a842f62",
          carouselTitle: "rockstargames-sites-legacyffab2486abb58ef9090c19d6d5bdd44c"
        },
        oe = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            children: t
          }) : t
        },
        de = e => {
          let {
            items: a,
            text: t = {},
            style: s,
            className: i = "",
            id: n = null
          } = e;
          return a?.length ? (0, l.jsxs)("div", {
            id: n,
            children: [(0, l.jsx)(ce.A, {
              style: s,
              className: [i, le.carouselWrapper].join(" "),
              children: a.map((e => (0, l.jsxs)("div", {
                id: e?.id ?? null,
                children: [(0, l.jsx)(ne.A, {
                  image: e?.image,
                  badge: e?.badge ?? e?.image?.badge,
                  badgeType: "badge3",
                  role: e?.role ?? e?.image?.role,
                  splitter: e?.splitter ?? e?.image?.splitter,
                  type: e?.type,
                  ariaLabel: e?.image?.ariaLabel ?? e.description,
                  style: e?.style,
                  className: [le.img, e?.className].join(" ")
                }), e.title && (0, l.jsx)(oe, {
                  to: e?.to,
                  children: (0, l.jsx)("h4", {
                    className: le.carouselTitle,
                    children: e.title
                  })
                }), e.description && (0, l.jsx)("span", {
                  className: le.description,
                  dangerouslySetInnerHTML: {
                    __html: e.description
                  }
                })]
              }, e?.key ?? e?.title)))
            }), t?.title || t?.description ? (0, l.jsx)("div", {
              className: le.padding,
              style: t?.style ?? {},
              children: (0, l.jsx)(re.A, {
                item: t
              })
            }) : ""]
          }) : null
        };
      var me = t(14522);
      const ge = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, l.jsx)(me.H, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        ue = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, l.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        fe = e => {
          let {
            item: a
          } = e;
          return a?.videoId ? (0, l.jsx)(u(), {
            context: "site",
            autoplay: !1,
            id: a.videoId
          }) : (0, l.jsx)(ne.A, {
            image: a?.image,
            badge: a?.badge ?? a?.image?.badge,
            badgeType: "badge3",
            role: a?.role ?? a?.image?.role,
            splitter: a?.splitter ?? a?.image?.splitter,
            type: a?.type,
            ariaLabel: a?.image?.ariaLabel,
            style: a?.style,
            className: a?.className
          })
        },
        be = e => {
          let {
            items: a,
            style: t = {},
            className: s = "",
            id: i = null
          } = e;
          return (0, l.jsx)("div", {
            style: t,
            className: (0, m.classList)("rockstargames-sites-legacyfbb6b44c6d90c22144e4fbed29bc540b", s),
            id: i,
            children: a.map((e => (0, l.jsx)(ge, {
              impressionTracking: e?.impressionTracking,
              gtm: e?.gtm,
              children: (0, l.jsx)(ue, {
                to: e?.to,
                children: (0, l.jsxs)("div", {
                  className: (0, m.classList)("rockstargames-sites-legacyc6ef137c3cc0ba12d735aedb6db0cae3", e.className),
                  style: e?.style ?? {},
                  ...e?.props,
                  children: [e?.image || e?.videoId ? (0, l.jsx)(fe, {
                    item: e
                  }) : "", e.title || e.description ? (0, l.jsx)(re.A, {
                    item: e,
                    className: "rockstargames-sites-legacya953f78a1d15741f11ef44c196dbb9c4"
                  }) : ""]
                })
              })
            }, e.key)))
          })
        },
        pe = e => {
          let {
            children: a,
            text: t,
            items: s = [],
            renderTemplate: i,
            style: n,
            id: c = null,
            ...r
          } = e;
          if (!s.length) return null;
          switch (i) {
            case "carousel":
              return (0, l.jsx)(de, {
                text: t,
                items: s,
                style: n,
                id: c,
                children: a
              });
            case "carousel-panorama":
              return (0, l.jsx)(de, {
                text: t,
                items: s,
                style: n,
                className: "panorama",
                id: c,
                children: a
              });
            default:
              return (0, l.jsx)(be, {
                items: s,
                style: n,
                id: c,
                ...r,
                children: a
              })
          }
        };
      var ye = t(79429),
        he = t.n(ye),
        ke = t(61651),
        xe = t(71080);
      const ve = e => {
          let {
            hasTag: a = !1,
            tag: t = null,
            tagStyle: s = null,
            badges: i = []
          } = e;
          return a && t ? (0, l.jsx)("div", {
            className: "rockstargames-sites-legacybc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": s,
            children: t
          }) : a && i && i?.length > 0 ? (0, l.jsx)("div", {
            className: "rockstargames-sites-legacyd4a1a1e4fc4c16138d3c879bc1864227",
            children: i.map((e => (0, l.jsx)(xe.A, {
              ...e
            }, e?.text)))
          }) : null
        },
        je = {
          textOverlay: "rockstargames-sites-legacya9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-sites-legacyd35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: Ne,
          Animations: Ce
        } = b,
        {
          variants: we,
          transitions: _e
        } = Ce,
        Pe = e => {
          let {
            title: a,
            hasTag: t,
            tag: s,
            hasDescription: i,
            description: n,
            fadesOut: c = !1,
            badges: r
          } = e;
          return (0, l.jsx)(Ne, {
            initial: we.fade.out.initial,
            animate: {
              opacity: c ? 0 : 1
            },
            transition: _e.fade,
            className: je.textOverlay,
            children: (0, l.jsxs)("div", {
              className: je.content,
              children: [(0, l.jsx)(ve, {
                hasTag: t,
                tag: s,
                badges: r?.filter((e => e?.isPrimary))
              }), (0, l.jsx)("h3", {
                children: a
              }), i && n && (0, l.jsx)("div", {
                className: je.description,
                children: n
              })]
            })
          })
        },
        Ie = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            tag: i,
            tagStyle: n,
            discountPrice: c,
            originalPrice: o,
            setPricingContainerHeight: d = null
          } = e;
          const m = (0, r.createRef)();
          return (0, r.useEffect)((() => {
            const e = () => {
              m.current && null !== d && d(m.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [m]), (0, l.jsxs)("div", {
            className: "rockstargames-sites-legacyf721d7192d3e29e64567a729fd8d5985",
            ref: m,
            "data-show-background": s,
            children: [t && (0, l.jsx)("span", {
              className: "rockstargames-sites-legacyf390fe2c9338785ce412483a1bac624c",
              children: a
            }), (0, l.jsxs)("div", {
              className: "rockstargames-sites-legacyfc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, l.jsx)("span", {
                className: "rockstargames-sites-legacyb7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": n || "free",
                children: i
              }), (0, l.jsx)("span", {
                className: "rockstargames-sites-legacyd8c7408e6335e53326bc70a1a065f81b",
                children: c
              }), (0, l.jsx)("span", {
                className: "rockstargames-sites-legacya3632910b63514f6b49539fe45bcccb6",
                children: o
              })]
            })]
          })
        };
      var Se = t(90837),
        Te = t(82275),
        Le = t(44338),
        Ae = t(67245),
        Be = t(47483),
        Ee = t(19169),
        Me = t(96165),
        Oe = t(55837),
        ze = t(43365),
        He = t(73870);
      const Ve = {
          ps5: Le,
          ps4: Te,
          ps: Se,
          xboxone: Be,
          xbox: Ee,
          xboxseriesxs: Ae,
          nintendoswitch: He,
          pc: Me,
          googleplay: ze,
          applestore: Oe
        },
        $e = e => {
          let {
            title: a,
            showTitle: t = !0,
            showBackground: s = !0,
            platformOptions: i,
            setPricingContainerHeight: n = (() => {}),
            expandedView: c
          } = e;
          const o = (0, r.createRef)();
          return (0, r.useEffect)((() => {
            const e = () => {
              o.current && null !== n && n(o.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]), (0, l.jsxs)("div", {
            className: "rockstargames-sites-legacye754e3afc303a114f9e28e09c5519a30",
            ref: o,
            "data-show-background": s,
            "data-show-platforms": !c,
            children: [t && (0, l.jsx)("span", {
              className: "rockstargames-sites-legacyfd98e3d7af2a583d4338d802666901a5",
              children: a
            }), i?.platformsAndLinks && (0, l.jsxs)("div", {
              className: "rockstargames-sites-legacycbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, l.jsx)(ve, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, l.jsx)("div", {
                className: "rockstargames-sites-legacyb7de0e1798d1a020191fbe44b67f34d2",
                children: i.platformsAndLinks.map((e => {
                  let {
                    platform: a,
                    buttonText: t
                  } = e;
                  return (0, l.jsx)("img", {
                    className: "rockstargames-sites-legacyaa5f852c8932dcf689a97496d437f13b",
                    alt: t,
                    src: Ve[a]
                  }, a)
                }))
              })]
            })]
          })
        },
        De = e => {
          let {
            textOverlayProps: a,
            title: t,
            size: s,
            expandedView: i = !1,
            children: n,
            pricingOptions: c,
            setPricingContainerHeight: o,
            isCoverCard: d = !1,
            platformOptions: m
          } = e;
          const [g] = (e => {
            let {
              hasTextOverlay: a,
              tag: t,
              collapsedHasTag: s,
              description: i,
              collapsedHasDescription: n,
              size: c,
              title: o,
              expandedView: d,
              badges: m
            } = e;
            const [g, u] = (0, r.useState)(null), f = (0, r.useMemo)((() => {
              if (!a) return null;
              const e = "sm" !== c && n;
              return (0, l.jsx)(Pe, {
                title: o,
                hasTag: s,
                tag: t,
                hasDescription: e,
                description: i,
                fadesOut: d,
                badges: m
              })
            }), [a, t, s, i, n, c, o, d, m]);
            return (0, r.useEffect)((() => {
              u(f)
            }), [f]), [g, u]
          })({
            ...a,
            size: s,
            title: t,
            expandedView: i
          }), u = void 0 !== c?.hasPricingOptions || null !== m;
          return (0, l.jsxs)("header", {
            className: "rockstargames-sites-legacyc525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": d,
            "data-expanded-view": i,
            children: [r.Children.map(n, (e => (0, r.cloneElement)(e, {
              title: t,
              size: s,
              expandedView: i
            }))), g, u && (0, l.jsxs)(l.Fragment, {
              children: [!0 === m?.hasPlatformOptions && (0, l.jsx)($e, {
                title: t,
                platformOptions: m,
                pricingOptions: c,
                setPricingContainerHeight: o,
                expandedView: i
              }), !0 === c?.hasPricingOptions && (0, l.jsx)(Ie, {
                title: t,
                tag: c?._memoq?.tag,
                tagStyle: c?._memoq?.tagStyle || "free",
                discountPrice: c?._memoq?.discountPrice,
                originalPrice: c?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: Ge,
          Animations: We
        } = b,
        {
          transitions: qe
        } = We,
        Fe = e => {
          let {
            components: a,
            payload: t,
            prod: s,
            size: i,
            title: n,
            initial: c = "initial",
            animate: o = "animate",
            variants: d,
            type: g = null,
            context: u = null,
            textOverlayProps: f,
            className: b,
            children: p,
            theme: y = "none",
            id: h,
            pricingOptions: k,
            pricingContainerHeight: x,
            isCoverCard: v,
            platformOptions: j,
            isProductCard: N = !1
          } = e;
          const C = (0, r.useRef)(),
            w = (0, r.useRef)(),
            {
              tag: _,
              expandedHasTag: P,
              badges: I
            } = f;
          he().set(t, "meta.prod", s);
          const S = p?.props?.images.length > 0;
          let T = (0, l.jsx)("h1", {
            children: n
          });
          return v && (T = null), (0, r.useEffect)((() => {
            const e = () => {
              C.current && C.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (C.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, l.jsx)(V.DataLayerProvider, {
            card_id: h,
            card_name: n?.toLowerCase(),
            children: (0, l.jsx)(ke.A, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === g ? C : w,
              children: (0, l.jsxs)(Ge, {
                ref: C,
                initial: c,
                animate: o,
                variants: d.expanded,
                transition: qe.cardOpen,
                className: (0, m.classList)("rockstargames-sites-legacydcb84dcfd34616fb0089133acf0c4669", b),
                "data-type": g,
                "data-size": i,
                "data-product": N,
                "data-covercard": v || !1,
                "data-context": u,
                style: {
                  "--product-card-pricing-info-height": `${x||0}px`
                },
                children: [S && (0, l.jsx)(De, {
                  size: i,
                  title: n,
                  textOverlayProps: f,
                  expandedView: !0,
                  pricingOptions: k,
                  platformOptions: j,
                  isCoverCard: v,
                  children: p
                }), (0, l.jsxs)(Ge, {
                  ref: w,
                  className: "rockstargames-sites-legacyeaf357a8d0bae1199142949cbf24e7b9",
                  variants: d.expandedContents,
                  transition: qe.afterCardOpen,
                  "data-theme": y,
                  children: [(0, l.jsxs)("div", {
                    className: "rockstargames-sites-legacyfc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, l.jsx)(ve, {
                      hasTag: P,
                      tag: _,
                      badges: I
                    }), T, N && (0, l.jsxs)(l.Fragment, {
                      children: [!0 === j?.hasPlatformOptions && (0, l.jsx)("div", {
                        className: "rockstargames-sites-legacyb630c7c1f59f91f2ac304af525b6d081",
                        children: (0, l.jsx)(ve, {
                          hasTag: j?.hasPlatformOptions,
                          tag: j?._memoq?.platformTag,
                          tagStyle: j?._memoq?.platformTagStyle
                        })
                      }), !0 === k?.hasPricingOptions && (0, l.jsx)(Ie, {
                        title: n,
                        showTitle: !1,
                        showBackground: !1,
                        tag: k?._memoq?.tag,
                        tagStyle: k?.tagStyle || "free",
                        discountPrice: k?._memoq?.discountPrice,
                        originalPrice: k?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, l.jsx)(m.TinaParser, {
                    components: a,
                    tina: {
                      payload: t
                    }
                  })]
                })]
              })
            })
          })
        };
      var Re = t(96717),
        Ue = t(89779),
        Ke = t(93665);
      const Xe = (0, Re.defineMessages)({
          card_label_platforms: {
            id: "card_label_platforms",
            defaultMessage: "{title} on {platformList}"
          }
        }),
        Ye = e => {
          let {
            id: a,
            position: t,
            title: s,
            size: i = "md",
            sectionTitle: n = "",
            expandedType: c = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: d,
            children: m,
            isProductCard: g,
            cardIds: u = null,
            theme: f = "none",
            isCoverCard: b,
            platformOptions: y
          } = e;
          const {
            formatMessage: h,
            formatList: k
          } = (0, Re.useIntl)(), [x, v] = (0, Ue.useSearchParams)(), j = (0, r.useRef)(null), [, N] = (0, Ke.h)(), {
            track: C
          } = (0, p.useGtmTrack)(), [w, _] = (0, r.useState)(!1), P = () => {
            _(!1), N(null), v({}), C({
              event: "trackPageview"
            })
          }, I = () => {
            if (!o?.content || !j.current || !c || "linkout" === c) return;
            const e = j.current,
              n = window.getComputedStyle(e),
              r = parseInt(n.getPropertyValue("width"), 10),
              l = parseInt(n.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: b
              } = o,
              p = "fob" === i ? "fob" : "default";
            N({
              content: m,
              onClose: P,
              rect: d,
              width: r,
              height: l,
              className: g,
              contentClassName: b,
              fadeIn: !1,
              cardIds: u,
              theme: f,
              activeId: a,
              gtm: {
                card_id: a,
                card_name: s?.toLowerCase(),
                position: t
              },
              aspectRatio: p,
              cardDimensions: {
                size: i,
                type: c
              }
            }), C({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: a,
              card_name: s?.toLowerCase(),
              position: t
            })
          };
          (0, r.useEffect)((() => {
            w && I()
          }), [w]), (0, r.useEffect)((() => {
            _(x.get("info") === a)
          }), [x.get("info"), a]);
          const S = (0, r.useMemo)((() => {
            if (y?.platformsAndLinks?.length > 0) {
              const e = y?.platformsAndLinks?.map((e => {
                  let {
                    buttonText: a
                  } = e;
                  return a
                })),
                a = k(e, {
                  type: "conjunction"
                });
              return h(Xe.card_label_platforms, {
                title: s,
                platformList: a
              })
            }
            return s
          }), [y, s]);
          return b || "linkout" === c ? (0, l.jsx)("div", {
            ref: j,
            className: d,
            "data-size": i,
            "data-type": c,
            "data-product": g,
            role: "button",
            "aria-label": S,
            children: m
          }) : (0, l.jsx)("button", {
            ref: j,
            onClick: e => {
              e.preventDefault(), e.stopPropagation(), a ? v({
                info: a
              }) : I(), C({
                event: "card_click",
                element_placement: n?.toLowerCase(),
                position: t,
                card_id: a,
                card_name: s?.toLowerCase(),
                link_url: window.location.href
              })
            },
            className: d,
            "data-size": i,
            "data-type": c,
            "data-product": g,
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": S,
            type: "button",
            children: m
          })
        },
        Qe = {
          pillBtn: "rockstargames-sites-legacyebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-sites-legacyd058244e6f29505e3c05558039370b54",
          card: "rockstargames-sites-legacyc2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-sites-legacye268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-sites-legacyd19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-sites-legacybeee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-sites-legacyc823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-sites-legacyef72671ab95bb9290b80637cb3073d29"
        },
        Je = e => {
          let {
            payload: a,
            prod: t,
            images: s,
            size: i,
            title: n,
            initial: c,
            animate: o,
            variants: d,
            id: g,
            position: u,
            sectionTitle: f,
            expandedType: b,
            context: p,
            children: y,
            expandedCardContents: h,
            textOverlayProps: k = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: x = {},
            modalProps: v = [],
            theme: j,
            cardIds: N,
            pricingOptions: C,
            platformOptions: w = null,
            pricingContainerHeight: _,
            isCoverCard: P = !1,
            isProductCard: I = !1
          } = e;
          const S = (0, m.useTinaComponents)(),
            T = (0, r.useMemo)((() => ({
              ...S,
              HTMLElement: ie.A,
              ImageWithBadge: ne.A,
              Carousel: ce.A,
              GroupOfItems: pe
            })), [S]),
            L = (0, r.useMemo)((() => (0, l.jsx)(Fe, {
              type: b,
              components: T,
              payload: a,
              prod: t,
              images: s,
              size: i,
              title: n,
              context: p,
              textOverlayProps: k,
              initial: c,
              animate: o,
              variants: d,
              theme: j,
              cardIds: N,
              pricingOptions: C,
              id: g,
              pricingContainerHeight: _,
              isCoverCard: P,
              platformOptions: w,
              isProductCard: I,
              children: h
            })), [b, s, t, i, n, k, h, c, o, d, T, a, I]),
            A = [Qe.card, P ? Qe.coverCardWrapper : ""].join(" ");
          return (0, l.jsx)(Ye, {
            id: g,
            position: u,
            sectionTitle: f,
            title: n,
            size: i,
            expandedType: b,
            images: s,
            deckProps: x,
            modalProps: {
              content: L,
              ...v
            },
            className: A,
            isProductCard: I,
            cardIds: N,
            theme: j,
            isCoverCard: P,
            platformOptions: w,
            children: y
          })
        };
      var Ze = t(28089);
      const ea = {
          layeredImageFrame: "rockstargames-sites-legacyf4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-legacyf48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-legacyb52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-legacyf55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-legacyfa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-legacyb496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: aa,
          Animations: ta
        } = b,
        {
          getVariant: sa,
          variants: ia,
          transitions: na
        } = ta,
        ca = e => {
          let {
            image: a,
            i: t,
            prod: s
          } = e;
          const {
            alt: i,
            src: n
          } = (0, Ze.useImageParser)({
            ...a,
            prod: s
          });
          return (0, l.jsx)("img", {
            src: n.mobile,
            alt: i ?? "",
            style: {
              "--z-index": t
            }
          })
        },
        ra = e => {
          let {
            images: a = [],
            className: t = "",
            prod: s = !1,
            expandedView: i = !1,
            style: n = {}
          } = e;
          const [c, o] = (0, r.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, r.useEffect)((() => {
            function e() {
              o({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]);
          const d = (0, r.useMemo)((() => a?.length && 0 !== a.length ? a.map((e => (0, l.jsx)(aa, {
            className: (0, m.classList)(ea[e?.specialClass] ?? ea.imageMask, ea[e?.sizeClass], e?.className),
            variants: sa(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: na.cardOpen,
            children: (0, l.jsx)(ca, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [a, c, i, s]);
          return (0, l.jsx)(aa, {
            className: (0, m.classList)(ea.layeredImageFrame, a.length > 1 ? ea.layered : ea.flat, t),
            style: n,
            initial: ia.fade.in.initial,
            animate: ia.fade.in.animate,
            transition: na.instantFade,
            "data-expanded-view": i,
            children: d
          })
        };
      var la = t(60285);
      const oa = e => {
          let {
            expandedType: a,
            to: t,
            children: s,
            style: i,
            sectionTitle: n = "",
            id: c,
            cardTitle: o,
            position: d
          } = e;
          const {
            track: m
          } = (0, p.useGtmTrack)(), g = (0, r.useCallback)((() => {
            m({
              event: "card_click",
              link_url: t,
              card_id: c,
              card_name: o,
              element_placement: n.toLowerCase(),
              position: d
            })
          }), [n, t, c, o, n, d]);
          return "linkout" === a && t ? (0, l.jsx)(la.A, {
            to: t,
            style: i,
            target: t?.startsWith("http") ? "_blank" : "_self",
            onClick: g,
            children: s
          }) : s
        },
        da = {
          pillBtn: "rockstargames-sites-legacyc484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-sites-legacyd65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-sites-legacyc0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-sites-legacycebbc72d1229514723b9d664281b472f"
        },
        {
          variants: ma
        } = b.Animations,
        ga = e => {
          let {
            id: a,
            title: t,
            content: s,
            size: i = "md",
            expandedType: n = "short",
            textOverlayProps: c = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: o = [],
            deckProps: d = {},
            to: g = null,
            tina: u = {},
            position: f = 0,
            sectionTitle: b = "",
            theme: p,
            pricingOptions: y,
            cardIds: h,
            platformOptions: k = null
          } = e;
          const x = (0, m.useTinaPayload)(),
            v = u?.payload?.meta?.cdn ?? x?.meta?.prod ?? !1,
            [j, N] = (0, r.useState)(d?.size ?? i),
            [C, w] = (0, r.useState)(0),
            _ = void 0 !== y?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, r.useEffect)((() => {
            N(d?.size ?? i)
          }), [d?.size, i]), (0, l.jsx)(Je, {
            id: a,
            title: t,
            size: j,
            expandedType: n,
            images: o,
            deckProps: d,
            prod: v,
            payload: {
              content: s,
              meta: {}
            },
            variants: ma.plainCard,
            textOverlayProps: c,
            modalProps: {
              className: da.customModal,
              contentClassName: da.customModalContent
            },
            expandedCardContents: (0, l.jsx)(ra, {
              images: o,
              prod: v,
              expandedView: !0
            }),
            position: f,
            sectionTitle: b,
            theme: p,
            cardIds: h,
            pricingOptions: y,
            platformOptions: k,
            pricingContainerHeight: C,
            isProductCard: _,
            children: (0, l.jsx)(oa, {
              expandedType: n,
              to: g,
              sectionTitle: b,
              id: a,
              cardTitle: t,
              position: f,
              children: (0, l.jsx)("div", {
                className: da.content,
                "data-product": _,
                children: (0, l.jsx)(De, {
                  title: t,
                  size: j,
                  textOverlayProps: c,
                  pricingOptions: y,
                  platformOptions: k,
                  setPricingContainerHeight: w,
                  children: (0, l.jsx)(ra, {
                    images: o,
                    prod: v
                  })
                })
              })
            })
          })
        };
      t(66325), t(28606), t(55430), t(7607);
      const {
        variants: ua
      } = b.Animations;
      t(58407), t(72752);
      var fa = t(94566),
        ba = t(22778);
      const pa = {
          pillBtn: "rockstargames-sites-legacya50fca350d7dbc4340ad3c68f1da1960",
          selected: "rockstargames-sites-legacye6487295119cf4eafefadf26f76ed1f8",
          customModalContent: "rockstargames-sites-legacyf17bd90d5d11d511cc583e09ef7ea01e",
          content: "rockstargames-sites-legacyf11fa0818c5163565a0058b6a7aa2505",
          secondary: "rockstargames-sites-legacye8fd74f0c0a6e9b8855e4bd971e7bba8",
          logo: "rockstargames-sites-legacyc1524e116e11607f62a2d93b0b2e32bc"
        },
        {
          variants: ya
        } = b.Animations,
        ha = e => {
          let {
            id: a,
            logoImage: t = null,
            logoImageHeight: s = "auto",
            name: i = null,
            title: n,
            titleSizeClass: c = null,
            content: o,
            ctaText: d,
            ctaURL: g,
            size: u = "md",
            expandedType: f = "short",
            textOverlayProps: b = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: p = [],
            deckProps: y = {},
            to: h = null,
            tina: k = {},
            cardIds: x,
            theme: v
          } = e;
          const j = (0, Re.useIntl)(),
            N = (0, m.useTinaPayload)(),
            C = k?.payload?.meta?.cdn ?? N?.meta?.prod ?? !1,
            [w, _] = (0, r.useState)(y?.size ?? u),
            P = (0, m.useGetCdnSource)(t ?? null);
          let I = null;
          return N.content && (I = N?.content[0]?._memoq ? N?.content[0]?._memoq?.body : null), (0, r.useEffect)((() => {
            _(y?.size ?? u)
          }), [y?.size, u]), (0, l.jsx)(Je, {
            id: a,
            title: n,
            sectionTitle: i || n,
            size: w,
            expandedType: f,
            images: p,
            deckProps: y,
            prod: C,
            payload: {
              content: o,
              meta: {}
            },
            variants: ya.plainCard,
            textOverlayProps: b,
            modalProps: {
              className: pa.customModal,
              contentClassName: pa.customModalContent
            },
            expandedCardContents: (0, l.jsx)(ra, {
              images: p,
              prod: C,
              expandedView: !0
            }),
            theme: v,
            cardIds: x,
            isCoverCard: !0,
            children: (0, l.jsx)(oa, {
              expandedType: f,
              to: h,
              sectionTitle: i || n,
              children: (0, l.jsxs)("div", {
                className: pa.content,
                children: [t && (0, l.jsx)("img", {
                  className: pa.logo,
                  alt: "logo",
                  src: P,
                  style: {
                    height: `${s}`
                  }
                }), (0, l.jsx)("h2", {
                  className: c,
                  children: n
                }), null !== I && (0, l.jsx)("p", {
                  children: I
                }), (0, l.jsx)(ba.A, {
                  target: "newtab" === f ? "_blank" : "_self",
                  to: g || void 0,
                  children: d || j.formatMessage(fa.card.card_learn_more)
                })]
              })
            })
          })
        };
      var ka = t(22545);
      const xa = e => {
          let {
            images: a,
            title: t,
            expandedView: s,
            variants: i,
            transition: n
          } = e;
          const c = (0, r.useMemo)((() => a && 0 !== a?.length ? a.map((e => e?.image?.sources ? (0, l.jsx)(ne.A, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [a]);
          return !c?.length || c?.length < 1 ? null : 1 === c.length ? c : (0, l.jsx)(ka.A, {
            slideChildren: c,
            title: t,
            navigation: s,
            thumbsVisible: s,
            spaceBetween: 0,
            variants: i,
            transition: n
          })
        },
        va = {
          pillBtn: "rockstargames-sites-legacyd13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-sites-legacybcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-sites-legacyceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: ja,
          variants: Na
        } = b.Animations;
      var Ca = t(63672),
        wa = t(60207);
      var _a = t(20009);
      const {
        Gen9CoreCarousel: Pa,
        framer: Ia,
        useTinaModuleFetchByIds: Sa,
        withSimpleErrorBoundary: Ta
      } = _a, La = {
        Card: ga,
        CardWithImageGallery: e => {
          let {
            id: a,
            title: t,
            content: s,
            size: i = "md",
            expandedType: n = "gallery",
            textOverlayProps: c = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: o = [],
            deckProps: d = {},
            tina: g = {},
            payload: u,
            position: f = 0,
            sectionTitle: b = "",
            cardIds: p
          } = e;
          const y = (0, m.useTinaPayload)(),
            h = u ?? y,
            k = g?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            x = ((e, a) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: a
              }
            } : e)))(o, k),
            [v, j] = (0, r.useState)(d?.size ?? i),
            {
              parent: N,
              main: C,
              thumbs: w
            } = Na?.cardWithImageGallery?.gallery ?? {};
          return (0, r.useEffect)((() => {
            j(d?.size ?? i)
          }), [d?.size, i]), (0, l.jsx)(Je, {
            id: a,
            position: f,
            sectionTitle: b,
            payload: {
              content: s,
              meta: {},
              payload: h
            },
            title: t,
            size: v,
            expandedType: n,
            images: x,
            deckProps: d,
            prod: k,
            variants: Na.cardWithImageGallery,
            textOverlayProps: c,
            modalProps: {
              className: va.customModal,
              contentClassName: va.customModalContent
            },
            expandedCardContents: (0, l.jsx)(xa, {
              images: x,
              title: t,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: N,
                main: C,
                thumbs: w
              },
              transition: {
                parent: ja.cardOpen,
                main: ja.cardOpen,
                thumbs: ja.cardOpen
              }
            }),
            cardIds: p,
            children: (0, l.jsx)("div", {
              className: va.content,
              children: (0, l.jsx)(De, {
                title: t,
                size: v,
                textOverlayProps: c,
                children: (0, l.jsx)(xa, {
                  images: x,
                  title: t,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        TextCard: e => {
          let {
            title: a,
            content: t,
            size: s = "md",
            badgeText: i
          } = e;
          const n = {
            ...(0, m.useTinaComponents)(),
            HTMLElement: ie.A,
            UnorderedList: Ca.A,
            ListItem: wa.A
          };
          return (0, l.jsx)("div", {
            className: "rockstargames-sites-legacyd392587df58204b0910e721ef1f3c35c",
            "data-size": s,
            children: (0, l.jsxs)("div", {
              className: "rockstargames-sites-legacya002b98d034f1897c7e1f31327ff08dc",
              children: [i && (0, l.jsx)("div", {
                className: "rockstargames-sites-legacyd9901d1bb91e1fbc1e857964083fe496",
                children: i
              }), (0, l.jsxs)("div", {
                className: "rockstargames-sites-legacybea322f6e3afa31355668ad164496730",
                children: [a && (0, l.jsx)("h3", {
                  children: a
                }), (0, l.jsx)(m.TinaParser, {
                  components: n,
                  tina: {
                    payload: {
                      content: t
                    }
                  }
                })]
              })]
            })
          })
        },
        ..._a
      }, Aa = Ia.withFadeIn(Ta((e => {
        let {
          cards: a = [],
          size: t,
          name: s,
          title: i,
          description: n,
          disclaimer: c,
          customSlidesPerView: o = null,
          theme: d = "none",
          cardSizeBreakpoints: g = {},
          customAspectRatio: u = "3/1",
          titleBadge: f = null
        } = e;
        const b = (0, r.useRef)(null),
          p = he().map(a, "id"),
          y = Sa({
            ids: p
          }),
          [h, k] = (0, r.useState)(o),
          [x] = (0, Ue.useSearchParams)(),
          [v, j] = (0, r.useState)(!1);
        (0, r.useEffect)((() => {
          if ("fob" === t) {
            const e = x.get("section");
            if (e && "games" === e && !v && (j(!0), b.current)) {
              const e = 100;
              window.scrollTo(0, b.current.offsetTop - e)
            }
          }
        }), []), (0, r.useEffect)((() => {
          if (!b.current) return;
          const e = () => {
            const e = o || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
            k(e)
          };
          return window.addEventListener("resize", e), e(), () => {
            window.removeEventListener("resize", e)
          }
        }));
        const N = (0, r.useMemo)((() => {
          let e = 0;
          if (!y) return null;
          let a = "blank";
          return y.forEach((e => {
            "cover-card" === e?.tina?.payload?.meta?.type && (a = e?.id)
          })), y.reduce(((s, n) => {
            if (n) {
              const {
                id: c,
                tina: r
              } = n, o = he().clone(r);
              he().set(o, "payload.meta.id", c), s.push((0, l.jsx)(m.TinaParser, {
                components: La,
                tina: o,
                componentProps: {
                  deckProps: {
                    size: t
                  },
                  tina: o,
                  id: c,
                  position: e,
                  sectionTitle: i,
                  theme: d,
                  cardIds: p.filter((e => e !== a))
                }
              }, c)), e += 1
            }
            return s
          }), [])
        }), [y, t]);
        return (0, l.jsxs)("div", {
          className: "rockstargames-sites-legacycaf46db6464a84ad4990aed75ef74ff1",
          "data-theme": d,
          ref: b,
          children: [(0, l.jsx)(Pa, {
            description: n,
            size: t,
            cardSizeBreakpoints: g,
            slideChildren: N,
            title: i,
            name: s,
            customSlidesPerView: h,
            customAspectRatio: u,
            titleBadge: f,
            theme: d
          }), c && (0, l.jsx)("div", {
            className: "rockstargames-sites-legacye90de79e6e215bde4beeb973696fcc11",
            children: (0, l.jsx)("span", {
              className: "rockstargames-sites-legacyceba411e9462491a4758858884a7a601",
              children: (0, l.jsx)(_a.SafeHtml, {
                html: c
              })
            })
          })]
        })
      })));
      var Ba = t(32331),
        Ea = t(39695),
        Ma = t(99124);
      const Oa = {
          pillBtn: "rockstargames-sites-legacyde0c2997703aedc7531c188c83299b6c",
          selected: "rockstargames-sites-legacyc74da5042c5c0a67b7464272816db587",
          fob: "rockstargames-sites-legacya101ab31612092a6651ccb28a7984370",
          container: "rockstargames-sites-legacyd400b86c71927c2ebc6aaacb73b7d13b",
          inner: "rockstargames-sites-legacye6b9cd8b2bc3abe1fbe70c92ff7dd9c4",
          imgWrapper: "rockstargames-sites-legacye8251051f777c393af4877aa0e2d9dac",
          imgBackground: "rockstargames-sites-legacybbce508e079d72fad92670b8df501b7a",
          content: "rockstargames-sites-legacydcc4e9836cd849a1ee258158d8995e3b",
          text: "rockstargames-sites-legacyc96326cd9340864659f075367fe09f78",
          titleAndCopy: "rockstargames-sites-legacyd7b994429a569942c25fcbb342247620",
          fobTitle: "rockstargames-sites-legacydedc85eea080a94bf975505c44befc9f",
          expandingButtonWrapper: "rockstargames-sites-legacyaeb09d35261df32a1d60239501c46b56",
          description: "rockstargames-sites-legacyc2f636812f6059e8b19b077ac4ea7879",
          platformLogos: "rockstargames-sites-legacycc51425ee6f42fa447e1363033d52f1c",
          platformIcon: "rockstargames-sites-legacyad372f073c1a33b52d498a7b22fe11f3",
          togglePlatformLogos: "rockstargames-sites-legacycbf9c8565599bae3cd363d3b7627ebf8",
          buttonGroup: "rockstargames-sites-legacyaffe763b4cb88ccc5146cefab31c207f",
          descriptions: "rockstargames-sites-legacyef197399e5b52cd858cc2abdb12dbb61"
        },
        za = e => {
          let {
            id: a,
            title: t,
            body: s,
            backgroundImageAndMask: i,
            expandingButton: n,
            image: c,
            ...o
          } = e;
          const [d] = (0, j.useSearchParams)(), {
            key: g
          } = (0, j.useLocation)(), u = (0, V.useLocale)(), f = c?.sources?.[u] ?? c?.sources?.en_us, b = f?.mobile ?? f?.desktop, {
            track: h
          } = (0, p.useGtmTrack)(), {
            ref: k,
            inView: x,
            entry: v
          } = (0, y.useInView)({
            threshold: .6
          }), [N, C] = (0, r.useState)(!1), w = n?.buttons, _ = [], P = (0, m.useGetCdnSource)(b ?? null), I = (0, m.useGetCdnSource)(i?.backgroundImage?.mobile), S = (0, m.useGetCdnSource)(i?.backgroundImage?.desktop ?? I), T = (0, m.useGetCdnSource)(i?.backgroundImageMask?.mobile), A = (0, m.useGetCdnSource)(i?.backgroundImageMask?.desktop ?? T), B = !(!A && !T), E = i?.backgroundImage?._memoq?.backgroundAttachment || "", M = i?.backgroundImage?._memoq?.backgroundClip || "", O = i?.backgroundImage?._memoq?.backgroundColor || "", z = i?.backgroundImage?._memoq?.backgroundOrigin || "", H = i?.backgroundImage?._memoq?.backgroundPosition || "", $ = i?.backgroundImage?._memoq?.backgroundRepeat || "", D = i?.backgroundImage?._memoq?.backgroundSize || "", G = {
            visible: {
              opacity: 1,
              y: 0,
              height: "100%",
              width: "100%",
              transition: {
                ease: [.5, 0, 0, 1],
                duration: .75
              }
            },
            hidden: {
              opacity: 0,
              y: 100,
              height: "0%"
            }
          };
          return (0, r.useEffect)((() => {
            v?.target && d.get("section") && (0, V.detectIfWeShouldAnchorSomewhere)()
          }), [g, v?.target]), (0, r.useEffect)((() => {
            x && !N && (h({
              event: "page_section_impression",
              element_placement: o?._memoq?.title?.toLowerCase()
            }), C(!0))
          }), [x]), (0, l.jsx)(L.motion.div, {
            className: Oa.fob,
            initial: "hidden",
            animate: "visible",
            variants: {
              visible: {
                opacity: 1,
                width: "100%",
                transition: {
                  ease: [.5, 0, 0, 1],
                  duration: .75,
                  when: "beforeChildren",
                  delayChildren: .25,
                  staggerChildren: .1
                }
              },
              hidden: {
                opacity: 0
              }
            },
            "data-has-mask": B,
            children: (0, l.jsx)("div", {
              className: Oa.container,
              id: a ?? "",
              ref: k,
              style: {
                "--background-image-desktop": `url(${S})`,
                "--background-image-mobile": `url(${I})`,
                "--image-mask-desktop": `url(${A})`,
                "--image-mask-mobile": `url(${T})`,
                "--background-attachment": E,
                "--background-clip": M,
                "--background-color": O,
                "--background-origin": z,
                "--background-position": H,
                "--background-repeat": $,
                "--background-size": D
              },
              children: (0, l.jsxs)("div", {
                className: Oa.inner,
                children: [(0, l.jsx)("div", {
                  className: Oa.imgWrapper,
                  children: P && (0, l.jsx)("img", {
                    src: P,
                    alt: t
                  })
                }), (0, l.jsxs)("div", {
                  className: Oa.content,
                  children: [(0, l.jsxs)("div", {
                    className: Oa.titleAndCopy,
                    children: [(0, l.jsx)("h2", {
                      className: Oa.fobTitle,
                      children: t
                    }), s && (0, l.jsx)("div", {
                      className: Oa.description,
                      dangerouslySetInnerHTML: {
                        __html: (W = s, W ? W.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                      }
                    })]
                  }), n?.buttons?.length ? (0, l.jsx)(L.motion.div, {
                    className: [Oa.expandingButtonWrapper, Oa.fobExpandingButton].join(" "),
                    variants: G,
                    children: (0, l.jsxs)(Ea.A, {
                      buttonText: n?.label,
                      buttonClassName: Oa.buttonText,
                      platformsAndLinks: n?.buttons,
                      trackingType: "select_platform",
                      trackingParent: "fob",
                      variant: "white",
                      children: [(0, l.jsx)("div", {
                        className: [Oa.platformLogos].join(" "),
                        children: w?.map((e => {
                          const {
                            key: a,
                            platform: t
                          } = e, s = (0, Ma.N$)(t) || "";
                          return t ? (0, l.jsx)("div", {
                            children: (0, l.jsx)("img", {
                              className: [Oa.platformIcon].join(" "),
                              src: s,
                              alt: t
                            })
                          }, `${t}-${a}`) : null
                        }))
                      }), (0, l.jsx)(L.motion.div, {
                        variants: G,
                        style: {
                          marginBottom: 0
                        },
                        children: (0, l.jsx)(Ba.A, {
                          buttons: _,
                          className: Oa.buttonGroup
                        })
                      })]
                    })
                  }) : (0, l.jsx)(L.motion.div, {
                    variants: G,
                    children: (0, l.jsx)(Ba.A, {
                      buttons: _,
                      className: Oa.buttonGroup
                    })
                  })]
                })]
              })
            })
          });
          var W
        },
        Ha = {
          pillBtn: "rockstargames-sites-legacyb5b173fdb18cf37bc4ce4dfa8a745f0b",
          selected: "rockstargames-sites-legacyec4282990ac91c940e8d6755eb454433",
          legacyPageTemplate: "rockstargames-sites-legacya13c0ce8a7efd4e4f37648f77daaa790",
          maxWidthContainer: "rockstargames-sites-legacyae8a92f14868d9bcc568f46fccc6a7ef",
          contentWrapper: "rockstargames-sites-legacya846c409f797ecc1ab63fd5d7844a2c0",
          videosContainer: "rockstargames-sites-legacya38fb305b5045f5e7057c52637d633b0",
          videoPlayerContainer: "rockstargames-sites-legacye274fed7e274fcc975ab65ad290a0027",
          rdrUltra: "rockstargames-sites-legacye1b013c991b3fbbcf38770fd2e66a703",
          universalCyrillic: "rockstargames-sites-legacydcf410ae5672a94d3068188bd39afe56"
        },
        Va = e => {
          let {
            headerFont: a,
            hero: t,
            featureBlockBackgroundImageGroup: i,
            features: r,
            fob: o,
            highlightCollection: m,
            imageGallery: u,
            relatedLinks: f,
            titleSlug: b,
            backgroundFields: p,
            tinaModuleId: y,
            videoProps: h
          } = e;
          const k = a ? Ha[a] : "",
            x = {},
            j = {
              Deck: Aa,
              CoverCard: ha,
              Card: ga
            },
            N = h?.id || "",
            C = (0, V.useLocale)();
          return x["--playlist-background-color"] = h?.["--playlist-background-color"], x.backgroundColor = p?.style["--legacy-custom-background"] || p?.style["--legacy-background-color"] || "#161616", (0, l.jsx)(d, {
            children: (0, l.jsxs)("div", {
              className: [Ha.legacyPageTemplate, k].join(" "),
              "data-brand": b,
              style: x,
              children: [t && (0, l.jsx)(n(), {
                animated: t.animated,
                content: t.content,
                id: "hero",
                images: t.images,
                shardsSection: t.shardsSection,
                subHero: t.subHero,
                type: t.type
              }), r?.length && (0, l.jsx)(v, {
                id: "features",
                features: r,
                backgroundImageGroup: i
              }), (0, l.jsxs)("div", {
                className: Ha.maxWidthContainer,
                children: [u?.collections?.length && (0, l.jsx)(te, {
                  id: "imageGallery",
                  imageGallery: u
                }), m?.highlights && (0, l.jsx)("div", {
                  className: Ha.contentWrapper,
                  children: (0, l.jsx)(c.Highlights, {
                    highlights: m?.highlights,
                    subtitle: m?.subtitle ?? m?._memoq?.subtitle
                  })
                }), (0, l.jsx)(l.Fragment, {
                  children: h && N && (0, l.jsxs)("div", {
                    className: Ha.videosContainer,
                    children: [(0, l.jsx)("h2", {
                      children: h.sectionLabel
                    }), (0, l.jsx)("div", {
                      className: Ha.videoPlayerContainer,
                      children: (0, l.jsx)(g.VideoWithPlaylist, {
                        tagIds: [Number(h.videoTag ?? 0)],
                        className: Ha.legacyVideoStyles,
                        autoplay: !1,
                        locale: C,
                        playlistTitle: h.playlistTitle,
                        currentVideoId: N
                      })
                    })]
                  })
                }), o && (0, l.jsx)(za, {
                  id: "order",
                  ...o
                }), f && (0, l.jsx)(T, {
                  id: "relatedLinks",
                  title: f?.title,
                  buttons: f?.buttons
                })]
              }), (0, l.jsx)("div", {
                className: Ha.tinaModuleContainer,
                children: (0, l.jsx)(se.A, {
                  components: j,
                  id: y
                })
              }), (0, l.jsx)("div", {
                className: Ha.maxWidthContainer,
                children: b && (0, l.jsx)(s.A, {
                  id: "rating",
                  titleSlug: b
                })
              })]
            })
          })
        }
    },
    7471: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      const s = {
          pc: t(96165),
          ps: t(90837),
          ps3: t(7644),
          ps4: t(82275),
          xbox: t(19169),
          xboxone: t(47483),
          switch: t(73870),
          xbox360: t(6754),
          googleplay: t(43365),
          applestore: t(55837),
          questionMark: t(38375),
          default: ""
        },
        i = e => s[e] || null
    },
    99124: (e, a, t) => {
      "use strict";
      t.d(a, {
        N$: () => r.A,
        IJ: () => c
      }), t(94566), (0, t(96717).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var s = t(58407);
      const i = (0, s.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        n = (e, a) => i({
          ...i(),
          [e]: a
        }),
        c = () => {
          const e = (0, s.useReactiveVar)(i);
          return {
            setState: n,
            state: e
          }
        };
      var r = t(7471)
    },
    72752: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderBy"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderDirection"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = s[a] || new Set,
          c = new Set,
          r = new Set;
        for (n.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            c.has(e) || (c.add(e), (s[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesList")
    },
    55837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    43365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    }
  }
]);