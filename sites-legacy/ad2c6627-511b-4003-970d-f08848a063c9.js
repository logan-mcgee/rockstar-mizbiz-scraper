! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad2c6627-511b-4003-970d-f08848a063c9", e._sentryDebugIdIdentifier = "sentry-dbid-ad2c6627-511b-4003-970d-f08848a063c9")
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
  [972], {
    92710: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => Me
      });
      var t = s(71403),
        c = s(58407),
        r = s(96717),
        i = s(42756),
        o = s(49948),
        n = s(40207),
        d = s(60285);
      var m = s(46632);
      class l extends t.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null
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
          return this?.state?.error?.message ? (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacyf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, m.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, m.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var g = s(20066);
      const f = {
          rating: "rockstargames-sites-legacya1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-legacycba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-legacyff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-legacyd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        b = (0, r.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var p = s(85913);
      const u = void 0 !== p.GameData ? p.GameData : GameDataDefault;
      (0, i.importAll)(s(4905));
      const k = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(s) {
          return (0, m.jsx)(l, {
            header: a,
            children: (0, m.jsx)(e, {
              ...s
            })
          })
        }
      }((0, r.withIntl)((e => {
        let {
          descriptors: a = null,
          footer: l = null,
          href: g,
          img: p = null,
          titleSlug: k = null,
          style: v = {},
          className: _
        } = e;
        const [h, y] = (0, t.useState)(!1), {
          inView: x
        } = (0, o.useInView)({
          threshold: .6
        }), [j, N] = (0, t.useState)({
          ratingDescriptors: a,
          ratingFooter: l,
          ratingImg: p,
          ratingUrl: g
        }), {
          track: w
        } = (0, n.useGtmTrack)(), C = (0, r.useIntl)(), {
          data: I
        } = (0, c.useQuery)(u, {
          variables: {
            titleSlug: k
          },
          skip: !k
        });
        if ((0, t.useEffect)((() => {
            I && N(I?.game)
          }), [I]), (0, t.useEffect)((() => {
            x && !h && j.img_rating && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), y(!0))
          }), [x]), !j.ratingImg) return null;
        const z = !!j.ratingDescriptors;
        return (0, m.jsxs)("div", {
          className: [f.rating, z ? f.withDescriptors : f.withOutDescriptors, _ || ""].join(" "),
          style: (0, i.safeStyles)(v),
          children: [(0, m.jsx)(d.A, {
            to: j.ratingUrl,
            target: "_blank",
            children: (0, m.jsx)("img", {
              alt: C.formatMessage(b.components_ratings_link_alt, {
                rating: (S = j.ratingImg, S.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: s(73983)(`./${j.ratingImg}`)
            })
          }), z && (0, m.jsxs)("div", {
            className: f.text,
            children: [(0, m.jsx)("p", {
              className: f.descriptors,
              dangerouslySetInnerHTML: {
                __html: j?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), j.ratingFooter && (0, m.jsx)("hr", {}), j.ratingFooter && (0, m.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: j.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var S
      }), g));
      var v = s(66335),
        _ = s.n(v),
        h = s(17891);
      const y = (0, t.createContext)(void 0),
        x = e => {
          let {
            children: a
          } = e;
          const [s, c] = (0, t.useState)([]), r = e => {
            c(e)
          }, i = (0, t.useMemo)((() => ({
            collections: s,
            updateGalleryCollections: r
          })), [s]);
          return (0, m.jsx)(y.Provider, {
            value: i,
            children: a
          })
        };
      var j = s(31879),
        N = s.n(j),
        w = s(28089);
      const C = "rockstargames-sites-legacyeb64520e04e486931cd65dc5b3fa61e8",
        I = e => {
          let {
            alt: a,
            className: t,
            src: c,
            style: r
          } = e;
          const [o, n] = (0, i.usePreloadImg)(c);
          let d = c;
          !1 === o && ("rockstargames-sites-legacyee609f31f3685766122c2c6fc0ef0710" === t && (d = s(14572)), d = s(8820));
          const {
            width: l,
            height: g
          } = n, f = {
            "--aspect-ratio": Number.isNaN(l / g) ? "" : l / g,
            ...r
          };
          return (0, m.jsx)("img", {
            src: d,
            className: t ?? "",
            alt: a,
            style: f
          })
        },
        z = e => {
          let {
            className: a,
            style: t = {},
            image: c = {},
            imageStyle: r = {}
          } = e, {
            alt: o,
            src: n
          } = (0, w.useImageParser)(c);
          const {
            isMobile: d
          } = (0, i.useWindowResize)();
          return n.desktop || n.mobile || (o = "", n = {
            mobile: s(14572),
            desktop: s(8820)
          }), (0, m.jsx)("div", {
            className: c.frame ? `${c.frame} ${C}` : C,
            style: t,
            children: (0, m.jsx)(I, {
              style: {
                ...r,
                ...c?.style
              },
              src: d ? n.mobile || n.desktop : n?.desktop || n?.mobile,
              alt: o,
              className: a
            })
          })
        };
      var S = s(80791);
      (0, t.forwardRef)(((e, a) => {
        const {
          children: s,
          tag: t = "div"
        } = e, c = S.m[t];
        return (0, m.jsx)(S.LazyMotion, {
          features: S.domAnimation,
          children: (0, m.jsx)(c, {
            ref: a,
            ...e,
            children: s
          })
        })
      })).displayName = "LiteMotion";
      const L = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        B = {
          ease: "easeIn",
          duration: .4
        },
        D = e => {
          let {
            children: a
          } = e;
          return (0, m.jsx)(S.motion.div, Object.assign({
            className: "rockstargames-sites-legacyf0ee4e641f1ac92151be887c9ebb8392",
            variants: L,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: B
          }, {
            children: a
          }))
        },
        T = e => a => (0, m.jsx)(D, {
          children: (0, m.jsx)(e, Object.assign({}, a))
        });
      var P = s(74401),
        $ = s(70834);
      const M = {
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
        V = T((e => {
          let {
            title: a = "",
            headerLogo: s,
            body: c,
            footnote: r,
            image: i,
            videoId: o,
            customHeaderFont: d,
            setVideoAsDefault: l,
            large: g = !1,
            image_on_right: f = !1,
            style: b = {},
            className: p = "",
            ...u
          } = e;
          const {
            track: k
          } = (0, n.useGtmTrack)(), {
            ref: v,
            inView: _
          } = (0, $.useInView)({
            threshold: .6
          }), [h, y] = (0, t.useState)(!1), [x, j] = (0, t.useState)(!1), w = d ? M[d] : "", C = s?._memoq?.maxHeight || "auto", I = s?._memoq?.maxWidth || "auto";
          return (0, t.useEffect)((() => {
            j(s?.setLogoAsDefault || !1)
          }), []), (0, t.useEffect)((() => {
            _ && !h && (k({
              event: "page_section_impression",
              element_placement: u?._memoq?.title?.toLowerCase()
            }), y(!0))
          }), [_]), (0, m.jsxs)("div", {
            className: (0, P.classList)(M.container, g ? M.large : "", f ? M.flipped : "", i ? "" : M.singleColumn, p),
            style: b,
            ref: v,
            children: [l && o ? (0, m.jsx)(N(), {
              className: M.imgVideo,
              autoplay: !1,
              id: o
            }) : i ? (i.alt = i?.alt ?? i?._memoq?.alt ?? "", (0, m.jsx)(z, {
              className: M.imgVideo,
              image: i
            })) : null, (0, m.jsx)("div", {
              className: M.content,
              children: (0, m.jsxs)("div", {
                className: M.text,
                children: [(() => {
                  const e = s?.image,
                    t = s?.image?.alt ?? s?.image?._memoq?.alt,
                    c = a.replace(/\s+/g, "-").toLowerCase();
                  return s && (s.image.alt = t), x && e ? (0, m.jsxs)(m.Fragment, {
                    children: [(0, m.jsx)(z, {
                      className: M.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: C,
                        maxWidth: I,
                        margin: 0
                      }
                    }), (0, m.jsx)("h3", {
                      id: `${c}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, m.jsx)("h3", {
                    className: [M.title, w].join(" "),
                    tabIndex: 0,
                    children: a
                  })
                })(), c ? (0, m.jsxs)(m.Fragment, {
                  children: [(0, m.jsx)("div", {
                    className: M.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (S = c, S ? S.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), r && (0, m.jsx)("small", {
                    className: M.footnote,
                    dangerouslySetInnerHTML: {
                      __html: r
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var S
        })),
        E = {
          pillBtn: "rockstargames-sites-legacyf911d1a5e313009fd5aa802356519700",
          selected: "rockstargames-sites-legacyc298fc2a48eb605ace08e9ef5e8a466d",
          featureBlock: "rockstargames-sites-legacyd1c356d016267549c7e470423b24da6b",
          featuresContainer: "rockstargames-sites-legacyfb23cb40e1cae664d75b9489276d29e2"
        },
        G = e => {
          let {
            className: a,
            id: s,
            features: t
          } = e;
          return t.length ? (0, m.jsx)("section", {
            className: [E.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: s ?? "",
            children: (0, m.jsx)("div", {
              className: E.featuresContainer,
              children: t.map((e => (0, m.jsx)(V, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var A = s(25076);

      function W(e) {
        return e ? {
          "--gradient-start-color": F(q(e?.startColor), e?.startOpacity),
          "--gradient-end-color": F(q(e?.endColor), e?.endOpacity)
        } : {}
      }

      function q(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function F(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function O(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const U = {
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
        H = e => {
          let {
            title: a,
            subtitle: s,
            cardType: t,
            textColor: c,
            link: r,
            images: i,
            justifyContentHorizontally: o,
            justifyContentVertically: d,
            gradient: l
          } = e;
          const {
            track: g
          } = (0, n.useGtmTrack)(), f = (0, P.useGetCdnSource)(i?.mobile?.image?.full_src ?? i?.mobile?.image), b = (0, P.useGetCdnSource)(i?.desktop?.image?.full_src ?? f), p = {
            "--aspect-ratio-mobile": i?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": i?.desktop?.aspectRatio ?? "",
            justifyContent: o ?? ""
          }, u = {
            justifyContent: d ?? ""
          }, k = {
            color: c ?? "",
            fontWeight: 700
          }, v = {
            ...W(l),
            "--gradient-end-percentage": `${O(l?.endPercentage)}%`,
            "--gradient-angle": `${O(l?.angle)}deg`
          }, _ = {
            mobile: f,
            desktop: b,
            alt: a
          };
          return (0, m.jsxs)(A.NavLink, {
            to: r ?? "",
            className: U.button,
            style: {
              ...p,
              ...v
            },
            onClick: () => {
              g({
                event: "card_click",
                element_placement: a?.toLowerCase()
              })
            },
            children: [("audio" === t || "video" === t) && (0, m.jsx)("div", {
              className: U.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: U.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: U.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: U.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: U.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, m.jsx)("div", {
                    role: "button",
                    className: U.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(t), (0, m.jsx)(z, {
              className: U.imageBackground,
              image: _
            }), (0, m.jsxs)("div", {
              className: U.textContainer,
              style: u,
              children: [(0, m.jsx)("p", {
                className: U.text,
                style: k,
                children: (0, m.jsx)("span", {
                  children: s
                })
              }), (0, m.jsx)("h3", {
                className: U.heading,
                style: k,
                children: (0, m.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        R = {
          pillBtn: "rockstargames-sites-legacyd5a9c8c0159690a7a024fd9724875b73",
          selected: "rockstargames-sites-legacydcafd64d75b4d6df79702aae18dbae55",
          relatedLinksContainer: "rockstargames-sites-legacyad16a3fe9284f5e246d328f0a123c897",
          buttonContainer: "rockstargames-sites-legacyd4851614d71a6c5efd31350dacf3d2d2"
        },
        Z = e => {
          let {
            title: a,
            id: s,
            buttons: c = [],
            className: r,
            ...i
          } = e;
          const {
            track: o
          } = (0, n.useGtmTrack)(), {
            ref: d,
            inView: l
          } = (0, $.useInView)({
            threshold: .6
          }), [g, f] = (0, t.useState)(!1);
          return (0, t.useEffect)((() => {
            l && !g && (o({
              event: "page_section_impression",
              element_placement: `related links group - ${i?._memoq?.title}`.toLowerCase()
            }), f(!0))
          }), [l]), c?.length ? (0, m.jsxs)("section", {
            className: [R.relatedLinksContainer, r ?? ""].filter((e => e)).join(" "),
            id: s ?? "",
            ref: d,
            children: [(0, m.jsx)("h3", {
              children: a
            }), (0, m.jsx)("div", {
              className: R.buttonContainer,
              children: c.map((e => (0, m.jsx)(H, {
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
      var Q = s(13953),
        Y = s(72473);
      const J = {
          pillBtn: "rockstargames-sites-legacyb5ec5d76744acc1d2d32bb583fccfb38",
          selected: "rockstargames-sites-legacybab7278693f954cdaefdb24b9de107fd",
          tabControl: "rockstargames-sites-legacyeb06325d5873f8e5eb585c5b806fdc26",
          tabButton: "rockstargames-sites-legacybf5fd237d0ec1de987eb5364e09e4029",
          tabIconWrapper: "rockstargames-sites-legacydc7833948789552f2e834f72eec8f176",
          tabIcon: "rockstargames-sites-legacyce0f951e0b1e4e70466b4019c9205c8e",
          tabLabel: "rockstargames-sites-legacyc553e6681beb4e5abd2a02594bf1b0da",
          tabBackground: "rockstargames-sites-legacyd5e306caea049e695f1f393e0122d9f4",
          tabControlContainer: "rockstargames-sites-legacyb8f0bb480a94d4cbb36e9758142de89c"
        },
        X = e => {
          let {
            data: a,
            onClick: s,
            activeTab: t
          } = e;
          const {
            track: c
          } = (0, n.useGtmTrack)();
          return (0, m.jsx)("div", {
            className: J.tabControlContainer,
            children: (0, m.jsx)("div", {
              className: J.tabControl,
              children: a?.filter((e => {
                let {
                  isHidden: a
                } = e;
                return 1 !== a
              }))?.map(((e, r) => (0, m.jsxs)(Q.motion.button, {
                type: "button",
                className: [J.tabButton, r === t ? J.activeTabButton : ""].join(" "),
                onClick: () => (e => {
                  c({
                    event: "component_tab_click",
                    text: a[e].name ? a[e]?.name.toLowerCase() : void 0,
                    element_placement: "image gallery"
                  }), s && s(e)
                })(r),
                "aria-label": `View ${e?.name} Screens`,
                children: [e?.platform ? (0, m.jsx)("span", {
                  className: J.tabIconWrapper,
                  children: (0, m.jsx)("img", {
                    className: [J.tabIcon].join(" "),
                    src: (0, Y.A)(e?.platform) || "",
                    alt: e?.platform
                  })
                }) : (0, m.jsx)("span", {
                  className: J.tabLabel,
                  children: e?.name?.toUpperCase()
                }), r === t ? (0, m.jsx)(Q.motion.div, {
                  className: J.tabBackground,
                  layoutId: "tabBackground"
                }) : null]
              }, `pill-tab-${e?.name}-${e?.key}`)))
            })
          })
        };
      var K = s(79493);
      const ee = {
          pillBtn: "rockstargames-sites-legacyeea0db67b0aabf28288b288845324afe",
          selected: "rockstargames-sites-legacyd1d25362fd730ca979d5ad79de088f89",
          multiSourceContainer: "rockstargames-sites-legacydc538bbfc2f407ed9fe840097ccac819",
          multiSourceImage: "rockstargames-sites-legacyee782a29692a8eb06db1287a4984c243",
          animatePlaceholder: "rockstargames-sites-legacyfbd73f5f70c2ce64aa9c9bd398f1a3b5",
          "loader-keyframes": "rockstargames-sites-legacyf6040b2ae96a9b0dcdb2d283c9caff59"
        },
        ae = e => {
          let {
            imageUrl: a,
            className: s,
            alt: c,
            style: r,
            lazy: i = !1,
            decoding: o = "auto",
            sizes: n = [320, 480, 768, 1024, 1440, 1920, 2560]
          } = e;
          const [d, l] = (0, t.useState)(!1);
          return (0, m.jsxs)("div", {
            className: ee.multiSourceContainer,
            children: [!d && (0, m.jsx)("img", {
              className: [s, ee.animatePlaceholder].join(" "),
              src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              alt: "Loading...",
              style: r
            }), (0, m.jsx)("img", {
              className: [ee.multiSourceImage, s].join(" "),
              src: `${a}?im=Resize=1920`,
              srcSet: (g = a, n.map((e => `${g}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
              alt: c ?? "Multi-Source Image",
              style: r,
              onLoad: () => {
                l(!0)
              },
              loading: i ? "lazy" : "eager",
              decoding: o
            })]
          });
          var g
        },
        se = {
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
        te = e => {
          let {
            navigatePrevious: a,
            navigateNext: s,
            prevDisabled: t,
            nextDisabled: c
          } = e;
          return (0, m.jsxs)("div", {
            className: se.modalControls,
            children: [(0, m.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: se.modalPrevious,
              onClick: a,
              disabled: t
            }), (0, m.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: se.modalNext,
              onClick: s,
              disabled: c
            })]
          })
        },
        ce = e => {
          let {
            images: a,
            selectedImage: s,
            onClose: c
          } = e;
          const [r, i] = (0, t.useState)(!1), [o, d] = (0, t.useState)(!1), [l, g] = (0, t.useState)(a.findIndex((e => e?.image?.sources === s?.image?.sources))), {
            track: f
          } = (0, n.useGtmTrack)(), b = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, p = e => {
            if (!e.currentTarget) return;
            const s = e.currentTarget.getBoundingClientRect();
            (s.left > e.clientX || s.right < e.clientX || s.top > e.clientY || s.bottom < e.clientY) && (f({
              event: "modal_close",
              element_placement: "image gallery modal",
              card_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[l]?.key,
              position: l,
              view_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase()
            }), c()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
          }, u = (0, t.useCallback)((() => {
            const e = (l + 1) % a.length;
            e !== l && l !== a.length - 1 && (g(e), i(!1)), d(l === a.length - 1), f({
              event: "modal_next",
              element_placement: "image gallery modal",
              card_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[l]?.key,
              position: l,
              view_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [l, a.length]), k = (0, t.useCallback)((() => {
            const e = (l - 1 + a.length) % a.length;
            e !== l && 0 !== l && (g(e), d(!1)), i(0 === l), f({
              event: "modal_previous",
              element_placement: "image gallery modal",
              card_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[l]?.key,
              position: l,
              view_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [l, a.length]), v = a[l];
          return (0, t.useEffect)((() => {
            f({
              event: "trackPageview",
              view_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [l]), (0, t.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? k() : "ArrowRight" === e.key ? u() : "Escape" === e.key && (f({
                event: "modal_close",
                element_placement: "image gallery modal",
                card_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: a[l]?.key,
                position: l,
                view_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase()
              }), c())
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [l, k, u, c]), (0, m.jsx)(Q.AnimatePresence, {
            children: (0, m.jsx)(Q.motion.div, {
              role: "presentation",
              className: se.overlay,
              onClick: p,
              "aria-label": "dismiss modal",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: b,
              children: (0, m.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: se.masonryDialog,
                onClick: e => p(e),
                children: (0, m.jsxs)("div", {
                  className: se.masonryDialogWrapper,
                  children: [(0, m.jsxs)(Q.motion.div, {
                    className: se.controlsWrapper,
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
                    children: [(0, m.jsx)(te, {
                      navigatePrevious: k,
                      navigateNext: u,
                      prevDisabled: r,
                      nextDisabled: o
                    }), (0, m.jsx)("button", {
                      type: "button",
                      id: "close",
                      "aria-label": "close",
                      className: se.closeBtn,
                      onClick: () => {
                        f({
                          event: "modal_close",
                          element_placement: "image gallery modal",
                          card_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase(),
                          card_id: a[l]?.key,
                          position: l,
                          view_name: `${a[l]?.image?.name??"unnamed image"}`.toLowerCase()
                        }), c()
                      }
                    })]
                  }), (0, m.jsx)(Q.motion.div, {
                    className: se.modal,
                    initial: {
                      opacity: 0,
                      scale: .5
                    },
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: b,
                    children: (0, m.jsx)(z, {
                      className: [se.modalMultisourceImage, se.galleryImage].join(" "),
                      style: {
                        width: "100%",
                        height: "100%",
                        margin: 0
                      },
                      image: v?.image
                    })
                  })]
                })
              })
            })
          })
        },
        re = e => {
          let {
            image: a,
            item: s,
            handleImageClick: t
          } = e;
          const c = (0, P.useImageParser)(a?.image),
            r = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, m.jsx)(Q.motion.div, {
            className: "rockstargames-sites-legacydc288c973cc46eff0b18afdc7c1a2d55",
            onClick: () => t(a),
            variants: s,
            children: (0, m.jsx)(ae, {
              imageUrl: c?.src?.desktop,
              className: "rockstargames-sites-legacyfdb0ce7aa95e4780c4004cb01285dbc4",
              alt: r,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${a?.key}`)
        },
        ie = e => {
          let {
            images: a = [],
            gallery: s = []
          } = e;
          const [c, r] = (0, t.useState)(null), {
            track: i
          } = (0, n.useGtmTrack)(), o = s.flat(2), d = e => {
            i({
              event: "card_click",
              element_placement: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), r(e)
          }, l = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, m.jsx)("div", {
            className: "rockstargames-sites-legacyfe7788190b9cb04e85c4a1783a030749",
            children: (0, m.jsxs)(Q.motion.div, {
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
              children: [a?.map((e => (0, m.jsx)(re, {
                image: e,
                item: l,
                handleImageClick: d
              }, e?.key))), c && (0, K.createPortal)((0, m.jsx)(ce, {
                images: o,
                selectedImage: c,
                onClose: () => {
                  r(null)
                }
              }), document.body)]
            })
          })
        },
        oe = e => {
          let {
            image: a,
            item: s,
            handleImageClick: t
          } = e;
          const c = (0, P.useImageParser)(a?.image),
            r = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, m.jsx)(Q.motion.div, {
            className: "rockstargames-sites-legacyf07fcde2e2f6109fbbfdd6f62df8ed44",
            onClick: () => t(a),
            variants: s,
            initial: "hidden",
            animate: "show",
            children: (0, m.jsx)(ae, {
              imageUrl: c?.src?.desktop,
              className: "rockstargames-sites-legacya4625e54bd7c2b8ed599d8ecd45e957f",
              alt: r,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${a.key}`)
        },
        ne = e => {
          let {
            images: a = [],
            gallery: s = []
          } = e;
          const [c, r] = (0, t.useState)(null), {
            track: i
          } = (0, n.useGtmTrack)(), o = s.flat(2), d = e => {
            i({
              event: "card_click",
              card_name: c?.image?.name.toLowerCase() ? c?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), r(e)
          }, l = {
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
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-legacyf9e3f02888b417f6e3e2a85df60951ca",
            children: [a?.map((e => (0, m.jsx)(oe, {
              image: e,
              item: l,
              handleImageClick: d
            }, e?.key))), c && (0, K.createPortal)((0, m.jsx)(ce, {
              images: o,
              selectedImage: c,
              onClose: () => {
                r(null)
              }
            }), document.body)]
          })
        },
        de = "rockstargames-sites-legacyc6be48a89acd92cde0f692a4636e2018",
        me = e => {
          let {
            sectionsPerPage: a,
            totalSections: s,
            currentPage: t,
            previousPage: c,
            nextPage: r,
            paginationPosition: i
          } = e;
          const o = [],
            n = Math.ceil(s / a),
            d = {
              "--pagination-position": `${i}`
            };
          for (let e = 1; e <= Math.ceil(s / a); e++) o.push(e);
          return n > 1 && (0, m.jsx)("div", {
            className: "rockstargames-sites-legacyb82c76457191f53e54104dd37926e61f",
            style: d,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-sites-legacya028d7866aabd64309d2f16595a41dfc",
              style: {
                padding: 0
              },
              children: [(0, m.jsx)("div", {
                className: de,
                children: (0, m.jsx)("div", {
                  role: "button",
                  onClick: c,
                  className: "rockstargames-sites-legacyc1baf088087f1f7c909440c44829c4bc",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, m.jsxs)("div", {
                className: "rockstargames-sites-legacye59a35dbb51f4d4a13b02996dd7cd97e",
                children: [(0, m.jsx)("span", {
                  children: t
                }), (0, m.jsx)("span", {
                  className: "rockstargames-sites-legacyc222ed80e6253558dcf221b008b009aa"
                }), (0, m.jsx)("span", {
                  children: n
                })]
              }), (0, m.jsx)("div", {
                className: de,
                children: (0, m.jsx)("div", {
                  role: "button",
                  onClick: r,
                  className: "rockstargames-sites-legacya18fb737f34833b701f04bc55d3b9100",
                  "aria-label": "Next Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              })]
            })
          })
        },
        le = {
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
        ge = () => (0, m.jsx)("div", {
          className: le.noImagesContainer,
          children: (0, m.jsx)("div", {
            className: le.noImages,
            children: (0, m.jsx)("div", {
              className: le.heading,
              children: (0, m.jsxs)("span", {
                className: le.text,
                children: [(0, m.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, m.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        fe = e => {
          let {
            sections: a = [],
            paginationSettings: s
          } = e;
          const c = [],
            [r] = (0, t.useState)(s?.sectionsPerPage || 4),
            [i, o] = (0, t.useState)(1),
            n = i * r,
            d = n - r,
            l = a.slice(d, n);
          return 0 === a?.length ? (0, m.jsx)("div", {
            className: le.gallerWrapper,
            children: (0, m.jsx)("div", {
              className: le.noImages,
              children: (0, m.jsx)("div", {
                className: le.heading,
                children: (0, m.jsx)("span", {
                  className: le.text,
                  children: "No images available"
                })
              })
            })
          }) : (a?.map((e => c.push(e?.images))), (0, m.jsxs)(m.Fragment, {
            children: [(0, m.jsx)(Q.motion.div, {
              className: le.galleryWrapper,
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
                "--sections-per-page": r
              },
              children: l?.map(((e, a) => {
                let s;
                if ("1x1" === e?.type) s = ie;
                else {
                  if ("2x2" !== e?.type) return (0, m.jsx)(ge, {}, `unsupported-section-${a}`);
                  s = ne
                }
                return (0, m.jsx)(s, {
                  images: e?.images,
                  gallery: c
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), s?.paginationEnabled && (0, m.jsx)(me, {
              sectionsPerPage: r,
              totalSections: a.length,
              currentPage: i,
              previousPage: () => {
                o(1 !== i ? i - 1 : Math.ceil(a.length / r))
              },
              nextPage: () => {
                i !== Math.ceil(a.length / r) ? o(i + 1) : o(1)
              },
              paginationPosition: s?.paginationPosition || "center"
            })]
          }))
        },
        be = {
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
        pe = T((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: s
          } = (0, n.useGtmTrack)(), {
            ref: c,
            inView: r
          } = (0, $.useInView)({
            threshold: .6
          }), [i, o] = (0, t.useState)(!1), [d, l] = (0, t.useState)(0), g = a?.customHeaderFont ? be[a?.customHeaderFont] : "", {
            collections: f,
            updateGalleryCollections: b
          } = (() => {
            const e = (0, t.useContext)(y);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          (0, t.useEffect)((() => {
            b(a?.collections)
          }), [a]), (0, t.useEffect)((() => {
            r && !i && (s({
              event: "page_section_impression",
              element_placement: `image gallery - ${f[d]?.name}`.toLowerCase()
            }), o(!0))
          }), [r]);
          const p = f?.length > 0 && f.some((e => e?.name || e?.platform));
          return (0, m.jsx)("section", {
            className: be.sectionWrapper,
            ref: c,
            children: (0, m.jsxs)("div", {
              className: be.sectionContent,
              children: [(0, m.jsxs)("div", {
                className: be.actionBar,
                children: [(0, m.jsx)("h3", {
                  className: [be.heading, g].join(" "),
                  children: a?.title
                }), p && (0, m.jsx)(X, {
                  data: f,
                  onClick: e => {
                    l(e)
                  },
                  activeTab: d
                })]
              }), f[d]?.sections && (0, m.jsx)(fe, {
                sections: f[d]?.sections,
                paginationSettings: a?.paginationSettings
              }, f[d]?.name)]
            })
          })
        }));
      var ue = s(89779);
      const ke = {
          pillBtn: "rockstargames-sites-legacyb59962d0e68ccd73b5ee2e571528d469",
          selected: "rockstargames-sites-legacyf5c57dad202e0d6ff855d5a4aca2c804",
          plusButton: "rockstargames-sites-legacycffaf489342637258d28f9b3b718836a",
          small: "rockstargames-sites-legacyb8abf927f0ba0af0d8ac0e9c77690d34",
          btnText: "rockstargames-sites-legacye6e56461bfc2e426c4abc5451cd17284",
          btnTexticon: "rockstargames-sites-legacycef9f9ce913d167a1fe2e7118a407cdd",
          whiteBtn: "rockstargames-sites-legacyb257e0629b9f8e101791d7a948ed15be",
          blackBtn: "rockstargames-sites-legacycb03bccaee79394858682d2ce4d08253",
          transparentBtn: "rockstargames-sites-legacyd0460159a17533d4d23686d7dca76794",
          iconBtn: "rockstargames-sites-legacyac61186c3c22346c9a4ee2cd2820d341",
          link: "rockstargames-sites-legacyc5920e56149b82f20f4db2ad9d397495",
          xboxone: "rockstargames-sites-legacya7057f2e6d398341f57bc462716d0508",
          xboxseriesxs: "rockstargames-sites-legacya693ab5879f34d7dea1737d3172ed4e4",
          ps4: "rockstargames-sites-legacya029ff88fc9aef470aaeef8053f90436",
          ps5: "rockstargames-sites-legacye25638751cf3e7267db23c6a401fcc36",
          pc: "rockstargames-sites-legacye03d92653f19a7ae3c4b3d5137bc9909"
        },
        ve = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: c,
            ariaLabel: r
          } = e;
          return (0, m.jsx)("button", {
            className: s,
            onClick: t,
            style: c,
            type: "button",
            "aria-label": r,
            children: a
          })
        },
        _e = e => {
          let {
            children: a,
            className: s,
            onClick: t,
            style: c,
            to: r,
            ariaLabel: i
          } = e;
          return (0, m.jsx)(ue.NavLink, {
            className: s,
            onClick: t,
            style: c,
            to: r,
            "aria-label": i,
            children: a
          })
        },
        he = e => {
          let {
            btnColor: a = "#fff",
            className: s = "",
            consoleBtn: t,
            icon: c = "",
            img: r,
            labelColor: i = "#000",
            onClick: o,
            secondText: n,
            size: d,
            text: l,
            to: g,
            type: f = "",
            ariaLabel: b
          } = e;
          const p = [ke.plusButton, ke[f] ?? "", ke[d] ?? "", ke[t] ?? "", s].join(" "),
            u = {
              "--hvr-color": a ?? i,
              "--hvr-bg-color": i ?? a,
              "--hvr-border-color": a ?? i
            },
            k = (0, m.jsxs)(m.Fragment, {
              children: [r ? (0, m.jsx)("img", {
                src: r,
                alt: ""
              }) : "", (0, m.jsxs)("div", {
                className: ke.btnText,
                icon: c,
                children: [l, n ? (0, m.jsx)("span", {
                  children: n
                }) : ""]
              })]
            });
          if (g) {
            if (g.startsWith("http")) {
              const e = g.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, m.jsx)("span", {
                onClick: o,
                onKeyDown: o,
                className: p,
                role: "button",
                "aria-label": b,
                tabIndex: 0,
                children: (0, m.jsx)("a", {
                  href: g,
                  target: e,
                  children: k
                })
              })
            }
            return (0, m.jsx)(_e, {
              className: p,
              onClick: o,
              style: {
                ...u
              },
              to: g,
              ariaLabel: b,
              children: k
            })
          }
          return (0, m.jsx)(ve, {
            className: p,
            onClick: o,
            style: {
              ...u
            },
            ariaLabel: b,
            children: k
          })
        },
        ye = e => {
          let {
            buttons: a = [],
            className: s
          } = e;
          return a.length ? (0, m.jsx)("div", {
            className: (0, P.classList)("rockstargames-sites-legacyb411a36e7fd12ab75861fe560b31b206", s),
            children: a.map(((e, a) => {
              let {
                icon: s,
                title: t,
                to: c
              } = e;
              return t ? (0, m.jsx)(he, {
                icon: s,
                text: t,
                to: c
              }, a) : ""
            }))
          }) : null
        };
      var xe = s(72862),
        je = s.n(xe);
      const Ne = {
          type: "spring",
          stiffness: 650,
          damping: 45
        },
        we = {
          ease: "easeOut",
          duration: .9,
          delay: .3
        },
        Ce = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: we
          }
        },
        Ie = {
          open: {
            opacity: 1,
            display: "grid",
            height: "auto",
            transition: {
              opacity: we,
              height: {
                type: "spring",
                stiffness: 425,
                damping: 40
              }
            }
          },
          closed: {
            opacity: 0,
            height: 0,
            transition: {
              opacity: {
                ease: "easeOut",
                duration: .1
              },
              height: Ne
            },
            transitionEnd: {
              display: "none"
            }
          }
        },
        ze = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            padding: "var(--foundry-global-spacing-dimensions-200)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            padding: "var(--foundry-global-spacing-dimensions-300) var(--foundry-global-spacing-dimensions-600)",
            gridGap: 0,
            transition: Ne,
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        Se = {
          pillBtn: "rockstargames-sites-legacyba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-legacyc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-legacybfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-legacya1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-sites-legacyf692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-sites-legacyba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-sites-legacyc2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-sites-legacydd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-legacyc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-legacyd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-legacyb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-legacyfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-legacyb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-legacye23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-legacye0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-legacydcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-legacye047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-legacydaa32798c37b9055cd280b838972e63e",
          switch: "rockstargames-sites-legacyae7bc564778d8af6cf5f8a0491ef7dc8"
        },
        Le = e => {
          let {
            buttonText: a = "",
            link: t = "",
            platform: c = "",
            target: r = null,
            onClick: i
          } = e;
          const o = r ?? (t.startsWith(document.location.origin) ? "_self" : "_blank"),
            n = [Se.platformButton, Se[c]].join(" "),
            d = c ? s(52917)(`./${c}.svg`) : null,
            l = (0, m.jsxs)(m.Fragment, {
              children: [d ? (0, m.jsx)("img", {
                src: d,
                alt: a
              }) : "", !d && (0, m.jsx)("div", {
                className: Se.buttonText,
                children: a
              })]
            });
          return t.startsWith("http") ? (0, m.jsx)("a", {
            href: t,
            className: n,
            target: o,
            onClick: i,
            "aria-label": a,
            children: l
          }) : (0, m.jsx)(ue.NavLink, {
            className: n,
            onClick: i,
            to: t,
            "aria-label": a,
            children: l
          })
        },
        Be = e => {
          let {
            variant: a,
            buttonText: c = "Subscribe",
            buttonClassName: r,
            className: o,
            children: d,
            platformsAndLinks: l = [],
            trackingType: g = "buy",
            trackingParent: f,
            target: b = null,
            trackingOId: p = null
          } = e;
          const [u, k] = (0, t.useState)(!1), {
            track: v
          } = (0, n.useGtmTrack)(), _ = (0, t.useRef)(null), h = (0, t.useRef)(u);
          (0, t.useEffect)((() => {
            h.current = u
          }), [u]), (0, t.useEffect)((() => {
            const e = e => {
              h && !_?.current?.contains(e.target) && k(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []);
          const y = e => {
            let {
              href: a,
              platform: s
            } = e;
            return () => {
              v({
                element_placement: f,
                event: "cta_store_link",
                link_url: a,
                text: s
              })
            }
          };
          return (0, m.jsxs)("div", {
            className: (0, P.classList)(Se.container, o),
            children: [(0, m.jsx)(S.motion.div, {
              className: Se.content,
              animate: u ? "open" : "close",
              variants: Ce,
              "aria-hidden": !!u,
              children: d
            }), (0, m.jsxs)(S.motion.div, {
              "data-variant": a,
              className: je()(u ? Se.expandedButton : Se.unexpandedButton),
              animate: u ? "open" : "closed",
              variants: ze,
              initial: !1,
              ref: _,
              children: [(0, m.jsx)(S.motion.button, {
                className: je()(Se.buttonText, r),
                "aria-expanded": u,
                onClick: () => {
                  if (k(!u), !u) switch (g) {
                    case "select_platform":
                      v({
                        element_placement: f,
                        event: "select_platform",
                        text: c?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      v({
                        element_placement: f,
                        event: "cta_link_account",
                        o_id: p,
                        text: c?.toLowerCase()
                      });
                      break;
                    case "buy":
                      v({
                        element_placement: f,
                        event: "cta_buy",
                        text: c?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      v({
                        element_placement: f,
                        event: "cta_store_link",
                        text: c?.toLowerCase()
                      });
                      break;
                    case "other":
                      v({
                        element_placement: f,
                        event: "cta_other",
                        text: c?.toLowerCase()
                      })
                  }
                },
                tabIndex: u ? -1 : 0,
                children: "string" == typeof c ? c : "Subscribe"
              }), (0, m.jsx)(S.motion.div, {
                className: Se.expandedArea,
                animate: u ? "open" : "closed",
                variants: Ie,
                initial: !1,
                "aria-hidden": !u,
                children: (0, m.jsxs)("div", {
                  children: [(0, m.jsx)("button", {
                    className: Se.closeButton,
                    onClick: () => {
                      k(!1), v({
                        element_placement: f,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: u ? 0 : -1,
                    children: (0, m.jsx)("img", {
                      src: s(45537),
                      alt: "Close"
                    })
                  }), (0, m.jsx)("div", {
                    className: Se.platformButtons,
                    children: l.length ? l.map((e => (0, m.jsx)(Le, {
                      buttonText: e.buttonText ?? (0, i.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: y(e),
                      target: b,
                      tabIndex: u ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        };
      var De = s(99124);
      const Te = {
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
        Pe = e => {
          let {
            id: a,
            title: s,
            body: c,
            backgroundImageAndMask: r,
            expandingButton: o,
            image: d,
            ...l
          } = e;
          const [g] = (0, A.useSearchParams)(), f = (0, i.useLocale)(), b = d?.sources?.[f] ?? d?.sources?.en_us, p = b?.mobile ?? b?.desktop, {
            track: u
          } = (0, n.useGtmTrack)(), {
            ref: k,
            inView: v,
            entry: _
          } = (0, $.useInView)({
            threshold: .6
          }), [h, y] = (0, t.useState)(!1), [x, j] = (0, t.useState)(!1), N = o?.buttons, w = [], C = (0, P.useGetCdnSource)(p ?? null), I = (0, P.useGetCdnSource)(r?.backgroundImage?.mobile), z = (0, P.useGetCdnSource)(r?.backgroundImage?.desktop ?? I), S = (0, P.useGetCdnSource)(r?.backgroundImageMask?.mobile), L = (0, P.useGetCdnSource)(r?.backgroundImageMask?.desktop ?? S), B = r?.backgroundImage?._memoq?.backgroundAttachment || "", D = r?.backgroundImage?._memoq?.backgroundClip || "", T = r?.backgroundImage?._memoq?.backgroundColor || "", M = r?.backgroundImage?._memoq?.backgroundOrigin || "", V = r?.backgroundImage?._memoq?.backgroundPosition || "", E = r?.backgroundImage?._memoq?.backgroundRepeat || "", G = r?.backgroundImage?._memoq?.backgroundSize || "", W = {
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
          return (0, t.useEffect)((() => {
            _?.target && (0, i.detectIfWeShouldAnchorSomewhere)()
          }), [g.get("section"), _?.target]), (0, t.useEffect)((() => {
            v && !h && (u({
              event: "page_section_impression",
              element_placement: l?._memoq?.title?.toLowerCase()
            }), y(!0))
          }), [v]), (0, m.jsx)(Q.motion.div, {
            className: Te.fob,
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
            children: (0, m.jsx)("div", {
              className: Te.container,
              id: a ?? "",
              ref: k,
              style: {
                "--background-image-desktop": `url(${z})`,
                "--background-image-mobile": `url(${I})`,
                "--image-mask-desktop": `url(${L})`,
                "--image-mask-mobile": `url(${S})`,
                "--background-attachment": B,
                "--background-clip": D,
                "--background-color": T,
                "--background-origin": M,
                "--background-position": V,
                "--background-repeat": E,
                "--background-size": G
              },
              children: (0, m.jsxs)("div", {
                className: Te.inner,
                children: [(0, m.jsx)("div", {
                  className: Te.imgWrapper,
                  children: C && (0, m.jsx)("img", {
                    src: C,
                    alt: "Red Dead Redemption"
                  })
                }), (0, m.jsxs)("div", {
                  className: Te.content,
                  children: [(0, m.jsxs)("div", {
                    className: Te.titleAndCopy,
                    children: [(0, m.jsx)("h2", {
                      className: Te.fobTitle,
                      children: s
                    }), (0, m.jsx)("div", {
                      className: Te.description,
                      dangerouslySetInnerHTML: {
                        __html: (q = c, q ? q.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                      }
                    })]
                  }), (0, m.jsx)("div", {
                    className: [Te.platformLogos, x ? Te.togglePlatformLogos : ""].join(" "),
                    children: N?.map((e => {
                      const {
                        key: a,
                        platform: s
                      } = e, t = (0, De.N$)(s) || "";
                      return s ? (0, m.jsx)("div", {
                        children: (0, m.jsx)("img", {
                          className: [Te.platformIcon].join(" "),
                          src: t,
                          alt: s
                        })
                      }, `${s}-${a}`) : null
                    }))
                  }), o?.buttons?.length ? (0, m.jsx)(Q.motion.div, {
                    className: [Te.expandingButtonWrapper, Te.fobExpandingButton].join(" "),
                    variants: W,
                    onClick: () => {
                      j((e => !e))
                    },
                    children: (0, m.jsx)(Be, {
                      buttonText: o?.label,
                      buttonClassName: Te.buttonText,
                      platformsAndLinks: o?.buttons,
                      trackingType: "select_platform",
                      trackingParent: "fob",
                      children: (0, m.jsx)(Q.motion.div, {
                        variants: W,
                        style: {
                          marginBottom: 0
                        },
                        children: (0, m.jsx)(ye, {
                          buttons: w,
                          className: Te.buttonGroup
                        })
                      })
                    })
                  }) : (0, m.jsx)(Q.motion.div, {
                    variants: W,
                    children: (0, m.jsx)(ye, {
                      buttons: w,
                      className: Te.buttonGroup
                    })
                  })]
                })]
              })
            })
          });
          var q
        },
        $e = {
          pillBtn: "rockstargames-sites-legacyb5b173fdb18cf37bc4ce4dfa8a745f0b",
          selected: "rockstargames-sites-legacyec4282990ac91c940e8d6755eb454433",
          legacyPageTemplate: "rockstargames-sites-legacya13c0ce8a7efd4e4f37648f77daaa790",
          maxWidthContainer: "rockstargames-sites-legacyae8a92f14868d9bcc568f46fccc6a7ef",
          contentWrapper: "rockstargames-sites-legacya846c409f797ecc1ab63fd5d7844a2c0",
          disclaimerText: "rockstargames-sites-legacyede5c72da30ce43ed6ef51b57a81bb80",
          disclaimerTextWrapper: "rockstargames-sites-legacyfce5d4566890d45f66c4e81186395576",
          rdrUltra: "rockstargames-sites-legacye1b013c991b3fbbcf38770fd2e66a703",
          universalCyrillic: "rockstargames-sites-legacydcf410ae5672a94d3068188bd39afe56",
          helveticaNow: "rockstargames-sites-legacycf3ee436b39368db3d3559406e625350"
        },
        Me = e => {
          let {
            headerFont: a,
            hero: s,
            backgroundFields: t,
            disclaimer: c,
            featureBlockBackgroundImageGroup: r,
            features: i,
            fob: o,
            highlightCollection: n,
            imageGallery: d,
            legacyDeck: l,
            relatedLinks: g,
            titleSlug: f
          } = e;
          const b = a ? $e[a] : "";
          return (0, m.jsx)(x, {
            children: (0, m.jsxs)("div", {
              style: {},
              className: [$e.legacyPageTemplate, b].join(" "),
              children: [s && (0, m.jsx)(_(), {
                animated: s.animated,
                content: s.content,
                id: "hero",
                images: s.images,
                shardsSection: s.shardsSection,
                subHero: s.subHero,
                type: s.type
              }), i?.length && (0, m.jsx)(G, {
                id: "features",
                features: i,
                backgroundImageGroup: r
              }), (0, m.jsxs)("div", {
                className: $e.maxWidthContainer,
                children: [d?.collections?.length && (0, m.jsx)(pe, {
                  id: "imageGallery",
                  imageGallery: d
                }), n?.highlights && (0, m.jsx)("div", {
                  className: $e.contentWrapper,
                  children: (0, m.jsx)(h.Highlights, {
                    highlights: n?.highlights,
                    subtitle: n?.subtitle ?? n?._memoq?.subtitle
                  })
                }), o && (0, m.jsx)(Pe, {
                  id: "order",
                  ...o
                }), g && (0, m.jsx)(Z, {
                  id: "relatedLinks",
                  title: g?.title,
                  buttons: g?.buttons
                }), f && (0, m.jsx)(k, {
                  id: "rating",
                  titleSlug: f
                })]
              })]
            })
          })
        }
    },
    72473: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => c
      });
      const t = {
          ps3: s(7644),
          ps4: s(82275),
          xbox: s(19169),
          xboxone: s(47483),
          switch: s(73870),
          xbox360: s(6754),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          questionMark: s(38375),
          default: ""
        },
        c = e => t[e] || null
    },
    99124: (e, a, s) => {
      "use strict";
      s.d(a, {
        N$: () => o.A,
        IJ: () => i
      }), s(94566), (0, s(96717).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var t = s(58407);
      const c = (0, t.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        r = (e, a) => c({
          ...c(),
          [e]: a
        }),
        i = () => {
          const e = (0, t.useReactiveVar)(c);
          return {
            setState: r,
            state: e
          }
        };
      var o = s(72473)
    },
    85913: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "withMetaTitle"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function c(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var t = e.definitions[s];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [c(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var r = t[a] || new Set,
          i = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var n = o;
          o = new Set, n.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = c(e, a);
          t && s.definitions.push(t)
        })), s
      }(a, "GameData")
    },
    52917: (e, a, s) => {
      var t = {
        "./left.svg": 60900,
        "./pc.svg": 40648,
        "./ps.svg": 88504,
        "./ps3.svg": 38379,
        "./ps4.svg": 50052,
        "./ps5.svg": 1221,
        "./right.svg": 97195,
        "./switch.svg": 37551,
        "./x.svg": 45537,
        "./xbox.svg": 84484,
        "./xboxone.svg": 20920,
        "./xboxseriesxs.svg": 11128
      };

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 52917
    },
    4905: (e, a, s) => {
      var t = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 4905
    },
    73983: (e, a, s) => {
      var t = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function c(e) {
        var a = r(e);
        return s(a)
      }

      function r(e) {
        if (!s.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      c.keys = function() {
        return Object.keys(t)
      }, c.resolve = r, e.exports = c, c.id = 73983
    },
    60900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    40648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    88504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    38379: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    50052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    1221: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    97195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    37551: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    45537: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    84484: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    20920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    11128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    81229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    67073: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    31536: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    81071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    92628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    40393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    5251: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    53953: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    56623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    6141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    79835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    47173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    11524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    57902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    18287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    33396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    40871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    16938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    6960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    58473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    31470: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    40908: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    497: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    13175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    95219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    61482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    68341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    71824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    7361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    5560: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    45120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    24465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    42638: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    32875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    82574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    93911: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    37675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    58157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    78525: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    59109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    62569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    49809: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    58219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    28718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    94509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    90615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    37620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    87880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    83454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    93672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    96071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    69493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    47860: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    97852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    32628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    25757: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    80513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    69959: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    41514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    20507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    86196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    32008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    27582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    33813: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    77579: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    92674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    8820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);