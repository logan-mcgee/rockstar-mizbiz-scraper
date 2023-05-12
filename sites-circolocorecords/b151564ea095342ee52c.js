/*! For license information please see b151564ea095342ee52c.js.LICENSE.txt */
(self.webpackChunk_rockstargames_sites_circolocorecords = self.webpackChunk_rockstargames_sites_circolocorecords || []).push([
  [190], {
    3190: (e, s, r) => {
      "use strict";
      r.r(s), r(7842);
      var a = r(4690),
        l = r.n(a),
        i = r(1224),
        c = r(6310),
        t = r(8976),
        o = r(8008),
        n = r(4859),
        d = r(1853);
      const m = "f844af752a3329707dcc";
      var h = r(9706);
      const j = () => (0, h.jsxs)(t.Grid, {
        className: "e518924f0c8876b2b1b4",
        children: [(0, h.jsx)("h4", {
          children: "FOLLOW US"
        }), (0, h.jsxs)("div", {
          className: "a6b536a216a132f28256",
          children: [(0, h.jsx)("a", {
            href: "https://instagram.com/circolocorecords",
            target: "_blank",
            className: m,
            children: (0, h.jsx)("img", {
              src: r(7249),
              alt: "Instagram logo"
            })
          }), (0, h.jsx)("a", {
            href: "https://twitter.com/CircolocoRecs",
            target: "_blank",
            className: m,
            children: (0, h.jsx)("img", {
              src: r(6736),
              alt: "Twitter logo"
            })
          }), (0, h.jsx)("a", {
            href: "https://facebook.com/circolocorecords",
            target: "_blank",
            className: m,
            children: (0, h.jsx)("img", {
              src: r(9981),
              alt: "Facebook logo"
            })
          }), (0, h.jsx)("a", {
            href: "https://youtube.com/circolocorecords",
            target: "_blank",
            className: m,
            children: (0, h.jsx)("img", {
              src: r(3599),
              alt: "YouTube logo"
            })
          })]
        })]
      });
      var g = r(9929);
      const x = {},
        p = (0, g.withTranslations)((e => {
          let {
            t: s
          } = e;
          return (0, h.jsxs)("footer", {
            children: [(0, h.jsx)("a", {
              href: "mailto:pr@circolocorecords.com",
              target: "_blank",
              children: "Press"
            }), (0, h.jsx)(t.A, {
              to: "/submissions",
              className: x.link,
              children: "Submissions"
            }), (0, h.jsx)(t.A, {
              onClick: () => window.OneTrust?.ToggleInfoDisplay(),
              children: s("Cookie Settings")
            })]
          })
        }));
      var f = r(6156),
        b = r.n(f);
      const u = {
          gap_xs: "b8288658136e30f177ae",
          gap_sm: "fec3ce55c9428192cdd3",
          gap_md: "a7be8380a9456ba63e93",
          gap_lg: "a898d446a0196be87bfa",
          flex_row: "bee7490b9cc5902292f9",
          flex_column: "f7526413187ca159e624",
          flex_center: "e9acde7f75e8a4c45d6c",
          flex_end: "a2f5c2937b847cf45a39",
          no_margin: "b06314dfd9cc5f83111b",
          no_padding: "b9a07869038d3faff47b",
          link: "dea9d2cd8d06168eb56f",
          linkInline: "c45a7838bfb7e414bf02",
          lowercase: "edb320d68a3eeaa2375b",
          home: "a6dfbb8b6ca9675ebf3f",
          videoWrapper: "de08f37fb6b179e8cb44",
          logo: "be08874d42a7270adb09",
          intro: "f4060ee8db32e011af04",
          clr: "eaa3be911f0eb9cd4a85",
          twoColDesktop: "f89ff51f083226e640ad",
          fourColDesktop: "e8629126e0d53d78bac2",
          releases: "c24ef5798306dea7a717",
          grey: "b6e5b72b279ad96bb831",
          small: "cf433d81ba00db52423e",
          white: "f16555dc2057b6ab5e6c",
          featuring: "a1a951c0f2e2ca6d6370",
          featured: "ee4e726987b353cb47df",
          right: "af986709b758643b218a",
          eps: "c1f1c4a25a854fe69348",
          albumCover: "b0dc530270e6111835a0",
          logos: "a127c95e5fd13fb9deee",
          firstSingle: "d5f349893a0fb485cad8",
          comingSoon: "f01630d33a343b0e5495",
          clrVinylRelease: "dd57b6ae22046679b35e",
          button: "f8b466f8a011c9bbd5da",
          clrVinylReleaseButtonWrap: "edb98300c79badc79781",
          purchaseDisclaimer: "fb226c6ee21ac323845e"
        },
        k = e => {
          let {
            src: s
          } = e;
          return (0, h.jsx)("div", {
            className: u.left,
            style: {
              "--aspect-ratio": "16/9"
            },
            children: (0, h.jsx)("iframe", {
              src: s,
              title: "YouTube video player",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: !0
            })
          })
        },
        N = e => {
          let {
            artist: s = "",
            title: r = ""
          } = e;
          return (0, h.jsxs)("div", {
            className: [u.grey, u.featured, u.white].join(" "),
            children: [s, (0, h.jsxs)("span", {
              children: [" - ", r]
            })]
          })
        },
        _ = () => (0, h.jsxs)("div", {
          className: u.purchaseDisclaimer,
          children: ["VINYL AVAILABLE NOW ON", " ", (0, h.jsx)("a", {
            href: "https://store.circolocorecords.com/",
            target: "_blank",
            className: [u.link, u.linkInline].join(" "),
            rel: "noreferrer",
            children: "CIRCOLOCO RECORDS STORE"
          }), "."]
        }),
        w = () => {
          const [e, s] = (0, c.useSearchParams)(), [, a] = (0, o.useModal)();
          return (0, d.useEffect)((() => {
            e.get("info") && a({
              content: (0, h.jsx)(b(), {
                id: e.get("info")
              }),
              onClose: () => s({})
            })
          }), [e.get("info")]), (0, h.jsxs)("div", {
            className: u.home,
            children: [(0, h.jsx)("section", {
              children: (0, h.jsx)(t.Grid, {
                className: [u.inner, u.gap_lg].join(" "),
                children: (0, h.jsx)("img", {
                  className: u.logo,
                  src: r(1104),
                  alt: "CircoLoco Records logo"
                })
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: u.gap_lg,
                children: [(0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("h3", {
                        children: "CLR 006"
                      }), (0, h.jsx)("h2", {
                        children: "INTRO"
                      })]
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.twoColDesktop].join(" "),
                    children: [(0, h.jsx)(k, {
                      src: "https://www.youtube.com/embed/pwv8GAhGS7Y?controls=0"
                    }), (0, h.jsx)(t.Grid, {
                      className: [u.right, u.gap_sm].join(" "),
                      children: (0, h.jsxs)("div", {
                        className: "greys",
                        children: [(0, h.jsx)(N, {
                          artist: "CHLOÉ CAILLET",
                          title: "NYWTF feat. Mikhail Beltran"
                        }), (0, h.jsx)(N, {
                          artist: "CHLOÉ CAILLET",
                          title: "KNOW NOW FEAT. POTÉ"
                        }), (0, h.jsx)(N, {
                          artist: "CHLOÉ CAILLET",
                          title: "IN THE MIDDLE FEAT. FALLE NIOKE & WEKAFORÉ"
                        }), (0, h.jsx)(N, {
                          artist: "CHLOÉ CAILLET",
                          title: "QUIERES (PART 1)"
                        }), (0, h.jsx)(N, {
                          artist: "CHLOÉ CAILLET",
                          title: "QUIERES (PART 2) FEAT. KALETA"
                        })]
                      })
                    })]
                  })]
                }), (0, h.jsx)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: (0, h.jsx)("div", {
                    className: u.left,
                    children: (0, h.jsxs)(t.Grid, {
                      className: [u.whites, u.gap_xs, u.releases].join(" "),
                      children: [(0, h.jsx)("div", {
                        className: [u.white, u.grey].join(" "),
                        children: "LISTEN NOW"
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR006EP1",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(3969),
                            alt: "Beatport logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR006EP1",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(5848),
                            alt: "Bandcamp logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR006EP1",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2491),
                            alt: "Spotify logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR006EP1",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(8029),
                            alt: "Soundcloud logo"
                          })
                        })]
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR006EP1",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(4157),
                            alt: "Apple Music logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR006EP1",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2479),
                            alt: "iTunes logo"
                          })
                        })]
                      })]
                    })
                  })
                })]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: u.gap_lg,
                children: [(0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("h3", {
                        children: "CLR 007"
                      }), (0, h.jsx)("h2", {
                        children: "WORLD IS EMPTY"
                      })]
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.twoColDesktop].join(" "),
                    children: [(0, h.jsx)(k, {
                      src: "https://www.youtube.com/embed/dXMVkfqD4Lw"
                    }), (0, h.jsx)(t.Grid, {
                      className: [u.right, u.gap_sm].join(" "),
                      children: (0, h.jsxs)("div", {
                        className: "greys",
                        children: [(0, h.jsx)(N, {
                          artist: "SKREAM & JANSONS",
                          title: "WORLD IS EMPTY"
                        }), (0, h.jsx)(N, {
                          artist: "SKREAM & JANSONS",
                          title: "WORLD IS EMPTY - EXTENDED"
                        })]
                      })
                    })]
                  })]
                }), (0, h.jsx)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: (0, h.jsx)("div", {
                    className: u.left,
                    children: (0, h.jsxs)(t.Grid, {
                      className: [u.whites, u.gap_xs, u.releases].join(" "),
                      children: [(0, h.jsx)("div", {
                        children: (0, h.jsx)("div", {
                          className: [u.white, u.grey].join(" "),
                          children: "LISTEN NOW"
                        })
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR007",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(3969),
                            alt: "Beatport logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR007",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(5848),
                            alt: "Bandcamp logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR007",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2491),
                            alt: "Spotify logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR007",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(8029),
                            alt: "Soundcloud logo"
                          })
                        })]
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR007",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(4157),
                            alt: "Apple Music logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR007",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2479),
                            alt: "iTunes logo"
                          })
                        })]
                      })]
                    })
                  })
                })]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: u.gap_lg,
                children: [(0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("h3", {
                        children: "CLR 005"
                      }), (0, h.jsx)("h2", {
                        children: "IZA"
                      })]
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.twoColDesktop].join(" "),
                    children: [(0, h.jsx)(k, {
                      src: "https://www.youtube.com/embed/QZdRtwdb1XQ"
                    }), (0, h.jsx)(t.Grid, {
                      className: [u.right, u.gap_sm].join(" "),
                      children: (0, h.jsxs)("div", {
                        className: "greys",
                        children: [(0, h.jsx)(N, {
                          artist: "MAP.ACHE",
                          title: "IZA - EDIT"
                        }), (0, h.jsx)(N, {
                          artist: "MAP.ACHE",
                          title: "IZA"
                        })]
                      })
                    })]
                  })]
                }), (0, h.jsx)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: (0, h.jsx)("div", {
                    className: u.left,
                    children: (0, h.jsxs)(t.Grid, {
                      className: [u.whites, u.gap_xs, u.releases].join(" "),
                      children: [(0, h.jsx)("div", {
                        children: (0, h.jsx)("div", {
                          className: [u.white, u.grey].join(" "),
                          children: "LISTEN NOW"
                        })
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR005",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(3969),
                            alt: "Beatport logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR005",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(5848),
                            alt: "Bandcamp logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR005",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2491),
                            alt: "Spotify logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://soundcloud.com/circolocorecords/sets/map-ache-iza",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(8029),
                            alt: "Soundcloud logo"
                          })
                        })]
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR005",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(4157),
                            alt: "Apple Music logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR005",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2479),
                            alt: "iTunes logo"
                          })
                        })]
                      })]
                    })
                  })
                }), (0, h.jsx)(_, {})]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: u.gap_lg,
                children: [(0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("h3", {
                        children: "CLR 004"
                      }), (0, h.jsx)("h2", {
                        children: "ON MY OWN NOW"
                      })]
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.twoColDesktop].join(" "),
                    children: [(0, h.jsx)(k, {
                      src: "https://www.youtube.com/embed/ligAi00Mlt8"
                    }), (0, h.jsx)(t.Grid, {
                      className: [u.right, u.gap_sm].join(" "),
                      children: (0, h.jsxs)("div", {
                        className: "greys",
                        children: [(0, h.jsx)(N, {
                          artist: "DJ TENNIS & ASHEE",
                          title: "ON MY OWN NOW (FEAT. LADY DONLI)"
                        }), (0, h.jsx)(N, {
                          artist: "DJ TENNIS & ASHEE",
                          title: "ON MY OWN NOW (FEAT. LADY DONLI) - EXTENDED"
                        }), (0, h.jsx)(N, {
                          artist: "DJ TENNIS & ASHEE",
                          title: "ON MY OWN NOW (FEAT. LADY DONLI) - ACID DUB"
                        })]
                      })
                    })]
                  })]
                }), (0, h.jsx)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: (0, h.jsx)("div", {
                    className: u.left,
                    children: (0, h.jsxs)(t.Grid, {
                      className: [u.whites, u.gap_xs, u.releases].join(" "),
                      children: [(0, h.jsx)("div", {
                        children: (0, h.jsx)("div", {
                          className: [u.white, u.grey].join(" "),
                          children: "LISTEN NOW"
                        })
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0004",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(3969),
                            alt: "Beatport logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0004",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(5848),
                            alt: "Bandcamp logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0004",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2491),
                            alt: "Spotify logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://soundcloud.com/circolocorecords/sets/dj-tennis-ashee-lady-donli-on-my-own",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(8029),
                            alt: "Soundcloud logo"
                          })
                        })]
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0004",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(4157),
                            alt: "Apple Music logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0004",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2479),
                            alt: "iTunes logo"
                          })
                        })]
                      })]
                    })
                  })
                })]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: u.gap_lg,
                children: [(0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("h3", {
                        children: "CLR 003"
                      }), (0, h.jsx)("h2", {
                        children: "THE ATTENTION DEFICIT EP"
                      })]
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.twoColDesktop].join(" "),
                    children: [(0, h.jsx)(k, {
                      src: "https://www.youtube.com/embed/gYS2HWTNNdc"
                    }), (0, h.jsx)(t.Grid, {
                      className: [u.right, u.gap_sm].join(" "),
                      children: (0, h.jsxs)("div", {
                        className: "greys",
                        children: [(0, h.jsx)(N, {
                          artist: "Skream & Jackmaster",
                          title: "The Attention Deficit Track – Edit"
                        }), (0, h.jsx)(N, {
                          artist: "Skream & Jackmaster",
                          title: "The Attention Deficit Track – Terrace Mix"
                        }), (0, h.jsx)(N, {
                          artist: "Skream",
                          title: "Floral"
                        }), (0, h.jsx)(N, {
                          artist: "Skream & Jansons",
                          title: "Track 3"
                        })]
                      })
                    })]
                  })]
                }), (0, h.jsx)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: (0, h.jsx)("div", {
                    className: u.left,
                    children: (0, h.jsxs)(t.Grid, {
                      className: [u.whites, u.gap_xs, u.releases].join(" "),
                      children: [(0, h.jsx)("div", {
                        children: (0, h.jsx)("div", {
                          className: [u.white, u.grey].join(" "),
                          children: "LISTEN NOW"
                        })
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0003",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(3969),
                            alt: "Beataport logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0003",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2491),
                            alt: "Spotify logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://soundcloud.com/circolocorecords/sets/the-attention-deficit-ep",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(8029),
                            alt: "Soundcloud logo"
                          })
                        })]
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0003",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(4157),
                            alt: "Apple Music logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0003",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2479),
                            alt: "iTunes logo"
                          })
                        })]
                      })]
                    })
                  })
                }), (0, h.jsx)(_, {})]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: u.gap_lg,
                children: [(0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("h3", {
                        children: "CLR 002"
                      }), (0, h.jsx)("h2", {
                        children: "CIRCOLOCO RECORDS AND NEZ PRESENT A BRAND NEW EP"
                      })]
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.twoColDesktop].join(" "),
                    children: [(0, h.jsx)(k, {
                      src: "https://www.youtube.com/embed/tW_rwmCgy1M"
                    }), (0, h.jsx)(t.Grid, {
                      className: [u.right, u.gap_sm].join(" "),
                      children: (0, h.jsxs)("div", {
                        className: "greys",
                        children: [(0, h.jsx)("div", {
                          className: [u.grey, u.featuring, u.white].join(" "),
                          children: "FEATURING"
                        }), (0, h.jsx)(N, {
                          artist: "Nez",
                          title: "You Wanna?"
                        }), (0, h.jsx)(N, {
                          artist: "NEZ AND SCHOOLBOY Q",
                          title: "Let's Get it"
                        }), (0, h.jsx)(N, {
                          artist: "NEZ, Moodymann, and GANGSTA Boo",
                          title: "Freaks"
                        })]
                      })
                    })]
                  })]
                }), (0, h.jsx)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: (0, h.jsx)("div", {
                    className: u.left,
                    children: (0, h.jsxs)(t.Grid, {
                      className: [u.whites, u.gap_xs, u.releases].join(" "),
                      children: [(0, h.jsx)("div", {
                        children: (0, h.jsx)("div", {
                          className: [u.white, u.grey].join(" "),
                          children: "LISTEN NOW"
                        })
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://www.beatport.com/label/circoloco-records/96392",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(3969),
                            alt: "Beatport logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://circolocorecords.bandcamp.com/album/circoloco-records-nez-present-clr-002",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(5848),
                            alt: "Bandcamp logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0002",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2491),
                            alt: "Spotify logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://soundcloud.com/circolocorecords/sets/circoloco-records-nez-present-clr-002",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(8029),
                            alt: "Soundcloud logo"
                          })
                        })]
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://lnk.to/CLR0002",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(4157),
                            alt: "Apple Music logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://music.apple.com/us/album/circoloco-records-nez-present-clr-002-single/1609537407",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2479),
                            alt: "iTunes logo"
                          })
                        })]
                      })]
                    })
                  })
                }), (0, h.jsx)(_, {})]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: u.gap_lg,
                children: [(0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("h3", {
                        children: "CLR 001"
                      }), (0, h.jsx)("h2", {
                        children: "MONDAY DREAMIN'"
                      })]
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.twoColDesktop].join(" "),
                    children: [(0, h.jsx)("div", {
                      className: u.left,
                      children: (0, h.jsx)("img", {
                        src: r(7811),
                        alt: "Monday Dreamin' album art"
                      })
                    }), (0, h.jsx)(t.Grid, {
                      className: [u.right, u.gap_sm].join(" "),
                      children: (0, h.jsxs)("div", {
                        className: "greys",
                        children: [(0, h.jsx)("div", {
                          className: [u.grey, u.featuring, u.white].join(" "),
                          children: "FEATURING"
                        }), (0, h.jsx)(N, {
                          artist: "Lost Souls Of Saturn & TOKiMONSTA",
                          title: "Revision Of The Past"
                        }), (0, h.jsx)(N, {
                          artist: "RAMPA",
                          title: "THE CHURCH"
                        }), (0, h.jsx)(N, {
                          artist: "Moodymann",
                          title: "Keep On Coming feat. CD"
                        }), (0, h.jsx)(N, {
                          artist: "Butch",
                          title: "Raindrops feat. Kemelion"
                        }), (0, h.jsx)(N, {
                          artist: "Margaret Dygas",
                          title: "Wishing Well"
                        }), (0, h.jsx)(N, {
                          artist: "Carl Craig",
                          title: "Forever Free"
                        }), (0, h.jsx)(N, {
                          artist: "DEICHKIND",
                          title: "AUTONOM (DIXON EDIT)"
                        }), (0, h.jsx)(N, {
                          artist: "Adam Beyer",
                          title: "Break It Up"
                        }), (0, h.jsx)(N, {
                          artist: "tINI",
                          title: "What If, Then What? feat. Amiture"
                        }), (0, h.jsx)(N, {
                          artist: "Jamie Jones",
                          title: "Laser Lass"
                        }), (0, h.jsx)(N, {
                          artist: "SETH TROXLER",
                          title: "LUMARTES (Extended)"
                        }), (0, h.jsx)(N, {
                          artist: "Tale Of Us",
                          title: "Nova Two"
                        }), (0, h.jsx)(N, {
                          artist: "SAMA' ABDULHADI",
                          title: "REVERIE"
                        }), (0, h.jsx)(N, {
                          artist: "Luciano",
                          title: "Mantra For Lizzie"
                        }), (0, h.jsx)(N, {
                          artist: "DJ Tennis",
                          title: "Atlanta"
                        }), (0, h.jsx)(N, {
                          artist: "Mano Le Tough",
                          title: "As If To Say"
                        }), (0, h.jsx)(N, {
                          artist: "KERRI CHANDLER",
                          title: "YOU"
                        }), (0, h.jsx)(N, {
                          artist: "Damian Lazarus",
                          title: "The Future feat. Robert Owens"
                        }), (0, h.jsx)(N, {
                          artist: "Bedouin",
                          title: "Up In Flames"
                        }), (0, h.jsx)(N, {
                          artist: "Red Axes",
                          title: "Calib"
                        })]
                      })
                    })]
                  })]
                }), (0, h.jsx)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: (0, h.jsx)("div", {
                    className: u.left,
                    children: (0, h.jsxs)(t.Grid, {
                      className: [u.whites, u.gap_xs, u.releases].join(" "),
                      children: [(0, h.jsx)("div", {
                        children: (0, h.jsx)("div", {
                          className: [u.white, u.grey].join(" "),
                          children: "Listen Now"
                        })
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://www.beatport.com/release/monday-dreamin/3401744",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(3969),
                            alt: "Beatport logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://circolocorecords.bandcamp.com/album/monday-dreamin",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(5848),
                            alt: "Bandcamp logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://open.spotify.com/album/1RB4TQFdo8hijQ1bSuXl3j?si=hwI3aK2wTAyUuz7KWqfxew&dl_branch=1&nd=1",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2491),
                            alt: "Spotify logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://soundcloud.com/circolocorecords/sets/monday-dreamin",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(8029),
                            alt: "Soundcloud logo"
                          })
                        })]
                      }), (0, h.jsxs)("div", {
                        className: u.logos,
                        children: [(0, h.jsx)("a", {
                          href: "https://music.apple.com/us/album/monday-dreamin/1568798380",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(4157),
                            alt: "Apple Music logo"
                          })
                        }), (0, h.jsx)("a", {
                          href: "https://music.apple.com/us/album/monday-dreamin/1568798380",
                          target: "_blank",
                          className: u.link,
                          rel: "noreferrer",
                          children: (0, h.jsx)("img", {
                            src: r(2479),
                            alt: "iTunes logo"
                          })
                        })]
                      })]
                    })
                  })
                }), (0, h.jsxs)("div", {
                  className: u.purchaseDisclaimer,
                  children: ["VINYL AVAILABLE NOW AT CIRCOLOCO’S", " ", (0, h.jsx)("a", {
                    href: "https://www.no-soul-for-sale.com/",
                    target: "_blank",
                    className: [u.link, u.linkInline].join(" "),
                    rel: "noreferrer",
                    children: "NO SOUL FOR SALE"
                  }), " ", "STORE."]
                })]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsx)(t.Grid, {
                className: u.gap_lg,
                children: (0, h.jsxs)(t.Grid, {
                  className: [u.clr, u.inner, u.gap_md].join(" "),
                  children: [(0, h.jsx)(t.Grid, {
                    children: (0, h.jsx)("div", {
                      children: (0, h.jsxs)("h2", {
                        children: ["THE MONDAY DREAMIN' EP", (0, h.jsx)("span", {
                          className: u.lowercase,
                          children: "s"
                        })]
                      })
                    })
                  }), (0, h.jsxs)(t.Grid, {
                    className: [u.releases, u.fourColDesktop, u.eps].join(" "),
                    children: [(0, h.jsxs)("div", {
                      children: [(0, h.jsx)("div", {
                        className: [u.grey, u.white, u.featured].join(" "),
                        children: "Blue EP"
                      }), (0, h.jsx)("img", {
                        className: u.albumCover,
                        src: r(7058),
                        alt: "Blue EP album art"
                      }), (0, h.jsx)(t.Grid, {
                        className: [u.right, u.gap_sm, u.flex_end].join(" "),
                        children: (0, h.jsxs)(t.Grid, {
                          className: [u.whites, u.gap_xs].join(" "),
                          children: [(0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://www.beatport.com/release/monday-dreamin-blue-ep/3394511",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(9353),
                                alt: "Beatport logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://circolocorecords.bandcamp.com/album/monday-dreamin-blue-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(1346),
                                alt: "Bandcamp logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP1Spotify",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(7323),
                                alt: "Spotify logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://soundcloud.com/circolocorecords/sets/monday-dreamin-blue-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(8466),
                                alt: "Soundcloud logo"
                              })
                            })]
                          }), (0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP1AppleMusic",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(4157),
                                alt: "Apple Music logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP1AppleMusic",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(2479),
                                alt: "iTunes logo"
                              })
                            })]
                          })]
                        })
                      })]
                    }), (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("div", {
                        className: [u.grey, u.white, u.featured].join(" "),
                        children: "Green EP"
                      }), (0, h.jsx)("img", {
                        className: u.albumCover,
                        src: r(542),
                        alt: "Green EP album art"
                      }), (0, h.jsx)(t.Grid, {
                        className: [u.right, u.gap_sm, u.flex_end].join(" "),
                        children: (0, h.jsxs)(t.Grid, {
                          className: [u.whites, u.gap_xs].join(" "),
                          children: [(0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://www.beatport.com/release/monday-dreamin-green-ep/3400548",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(9353),
                                alt: "Beatport logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://circolocorecords.bandcamp.com/album/monday-dreamin-green-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(1346),
                                alt: "Bandcamp logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP2Spotify",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(7323),
                                alt: "Spotify logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://soundcloud.com/circolocorecords/sets/monday-dreamin-green-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(8466),
                                alt: "Soundcloud logo"
                              })
                            })]
                          }), (0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP2AppleMusic",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(4157),
                                alt: "Apple Music logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://music.apple.com/us/album/monday-dreamin-green/1568557189",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(2479),
                                alt: "iTunes logo"
                              })
                            })]
                          })]
                        })
                      })]
                    }), (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("div", {
                        className: [u.grey, u.white, u.featured].join(" "),
                        children: "Violet EP"
                      }), (0, h.jsx)("img", {
                        className: u.albumCover,
                        src: r(3383),
                        alt: "Violet EP album art"
                      }), (0, h.jsx)(t.Grid, {
                        className: [u.right, u.gap_sm, u.flex_end].join(" "),
                        children: (0, h.jsxs)(t.Grid, {
                          className: [u.whites, u.gap_xs].join(" "),
                          children: [(0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://www.beatport.com/release/monday-dreamin-violet-ep/3405375",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(9353),
                                alt: "Beatport logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://circolocorecords.bandcamp.com/album/monday-dreamin-violet-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(1346),
                                alt: "Bandcamp logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP3Spotify",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(7323),
                                alt: "Spotify logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://soundcloud.com/circolocorecords/sets/monday-dreamin-violet-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(8466),
                                alt: "Soundcloud logo"
                              })
                            })]
                          }), (0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP3AppleMusic",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(4157),
                                alt: "Apple Music logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://music.apple.com/us/album/monday-dreamin-violet/1569396700",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(2479),
                                alt: "iTunes logo"
                              })
                            })]
                          })]
                        })
                      })]
                    }), (0, h.jsxs)("div", {
                      children: [(0, h.jsx)("div", {
                        className: [u.grey, u.white, u.featured].join(" "),
                        children: "Black EP"
                      }), (0, h.jsx)("img", {
                        className: u.albumCover,
                        src: r(5593),
                        alt: "Black EP album art"
                      }), (0, h.jsx)(t.Grid, {
                        className: [u.right, u.gap_sm, u.flex_end].join(" "),
                        children: (0, h.jsxs)(t.Grid, {
                          className: [u.whites, u.gap_xs].join(" "),
                          children: [(0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://www.beatport.com/release/monday-dreamin-black-ep/3412780",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(9353),
                                alt: "Beatport logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://circolocorecords.bandcamp.com/album/monday-dreamin-black-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(1346),
                                alt: "Bandcamp logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP4Spotify",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(7323),
                                alt: "Spotify logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://soundcloud.com/circolocorecords/sets/monday-dreamin-black-ep",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(8466),
                                alt: "Soundcloud logo"
                              })
                            })]
                          }), (0, h.jsxs)("div", {
                            className: u.logos,
                            children: [(0, h.jsx)("a", {
                              href: "https://linktr.ee/CircoLocoRecordsEP4AppleMusic",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(4157),
                                alt: "Apple Music logo"
                              })
                            }), (0, h.jsx)("a", {
                              href: "https://music.apple.com/us/album/monday-dreamin-black/1570606406",
                              target: "_blank",
                              className: u.link,
                              rel: "noreferrer",
                              children: (0, h.jsx)("img", {
                                src: r(2479),
                                alt: "iTunes logo"
                              })
                            })]
                          })]
                        })
                      })]
                    })]
                  })]
                })
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsxs)(t.Grid, {
                className: [u.inner, u.gap_lg].join(" "),
                children: [(0, h.jsx)(t.Grid, {
                  className: [u.intro, u.gap_md].join(" "),
                  children: (0, h.jsx)("h2", {
                    children: "CIRCOLOCO AND ROCKSTAR GAMES LAUNCH A NEW LABEL"
                  })
                }), (0, h.jsx)("div", {
                  className: u.videoWrapper,
                  children: (0, h.jsx)("iframe", {
                    src: "https://www.youtube.com/embed/n_a0smOEjXo",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0
                  })
                })]
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsx)(t.Grid, {
                children: (0, h.jsx)("h4", {
                  children: (0, h.jsx)(t.A, {
                    to: "/about",
                    className: u.link,
                    children: "ABOUT US"
                  })
                })
              })
            }), (0, h.jsx)("section", {
              children: (0, h.jsx)(j, {})
            }), (0, h.jsx)(p, {})]
          })
        },
        v = {
          gap_xs: "b7e97a649c59f6726634",
          gap_sm: "dd4337788ca4c2abe67b",
          gap_md: "e4f7bfc4a7318d13787b",
          gap_lg: "f57defefa398a5925a8f",
          flex_row: "aef77deb891f765f09b7",
          flex_column: "e16c6e4bc3cbf657e28d",
          flex_center: "b534393589bac422b4c9",
          flex_end: "e0d70e4742d2f2de7cb4",
          no_margin: "e8ea7f5b2d7d26af5c38",
          no_padding: "f0f66b55dd6b07a5c5ab",
          link: "dfabe39fb8bec530eafc",
          linkInline: "c63723df0c59c8f01f7e",
          aboutUs: "bf2be00b9b5663c3ac1b",
          back: "f1128d5ef0ce82213f41",
          logo: "a30dc8db2087932c89b6",
          top: "b4711ed5e18fda5d7afa",
          about: "e7337ba9de25e9dff1ea"
        },
        E = () => (0, h.jsxs)("div", {
          className: v.aboutUs,
          children: [(0, h.jsx)("section", {
            children: (0, h.jsxs)(t.Grid, {
              className: v.gap_lg,
              children: [(0, h.jsx)(t.Grid, {
                className: [v.inner, v.gap_lg].join(" "),
                children: (0, h.jsxs)(t.Grid, {
                  className: [v.top, v.gap_md].join(" "),
                  children: [(0, h.jsx)(t.A, {
                    to: "/",
                    className: [v.back, v.link].join(" "),
                    children: "Back to Home"
                  }), (0, h.jsx)("img", {
                    className: v.logo,
                    src: r(8475),
                    alt: "CircoLoco Records logo"
                  })]
                })
              }), (0, h.jsxs)(t.Grid, {
                className: [v.about, v.inner, v.gap_sm].join(" "),
                children: [(0, h.jsxs)(t.Grid, {
                  className: v.gap_sm,
                  children: [(0, h.jsx)("h2", {
                    children: "About Us"
                  }), (0, h.jsx)("p", {
                    children: "CircoLoco Records is a partnership between CircoLoco, one of the most influential brands in global club culture and Rockstar Games, creators of some of the world’s most popular and critically acclaimed video games, with a view to supporting underground dance music culture worldwide in the physical and digital worlds."
                  })]
                }), (0, h.jsx)("p", {
                  children: "Representing house and techno for over 20 years through its parties at Ibiza’s DC10 and around the world, CircoLoco's dancefloor has become a principal intersection between underground dance music and elements of fashion, art and wider culture. The launch of CircoLoco Records reinforces CircoLoco’s commitment to championing forward-thinking dance music artists beyond the club."
                }), (0, h.jsx)("p", {
                  children: "Creators of some of the world’s most popular video games including the Grand Theft Auto and Red Dead Redemption series, Rockstar Games’ reputation for supporting music and club culture stretches back to the brand’s inception in 1998. Whether through the meticulously curated radio stations found in the Grand Theft Auto series or the virtual dance clubs of Grand Theft Auto Online featuring some of the world’s greatest DJ’s, Rockstar Games has consistently championed artists and club culture."
                }), (0, h.jsx)("p", {
                  children: "CircoLoco Records will break new ground in an effort to support dance music culture and represents an opportunity to elevate the scene through the collective power of these two entertainment brands."
                })]
              })]
            })
          }), (0, h.jsx)("section", {
            children: (0, h.jsx)(j, {})
          }), (0, h.jsx)(p, {})]
        }),
        L = {
          gap_xs: "d6537349ae5f62690010",
          gap_sm: "e9453b0eec46a013868a",
          gap_md: "c13ca0905c263590767e",
          gap_lg: "ed138bae21a21a5bd72b",
          flex_row: "e4f55f870d94426d164d",
          flex_column: "ec54c7de93817d9cec36",
          flex_center: "ecddde9b8aef48fb33cb",
          flex_end: "b9f53dacdd5615291776",
          no_margin: "bf8f5d0809e4bc10d334",
          no_padding: "c7a261fa5dbedb6d9a56",
          link: "c9d70db06da943d30184",
          linkInline: "fdf70a6ce511771637d0",
          submissions: "d93ab48581d43b0ce166",
          back: "df871b5d622f403f59ea",
          logo: "eb4e21632dac3be435a8",
          top: "fefce8e90f2035fd3062",
          about: "a67f64a89b2df509b47c"
        },
        C = () => (0, h.jsxs)("div", {
          className: L.submissions,
          children: [(0, h.jsx)("section", {
            children: (0, h.jsxs)(t.Grid, {
              className: L.gap_lg,
              children: [(0, h.jsx)(t.Grid, {
                className: [L.inner, L.gap_lg].join(" "),
                children: (0, h.jsxs)(t.Grid, {
                  className: [L.top, L.gap_md].join(" "),
                  children: [(0, h.jsx)(t.A, {
                    to: "/",
                    className: [L.back, L.link].join(" "),
                    children: "Back to Home"
                  }), (0, h.jsx)("img", {
                    className: L.logo,
                    src: r(9936),
                    alt: "CircoLoco Records logo"
                  })]
                })
              }), (0, h.jsxs)(t.Grid, {
                className: [L.about, L.inner, L.gap_sm].join(" "),
                children: [(0, h.jsxs)(t.Grid, {
                  className: L.gap_sm,
                  children: [(0, h.jsx)("h2", {
                    children: "Submissions"
                  }), (0, h.jsx)("p", {
                    children: "Thank you for your interest in submitting your music to CircoLoco Records."
                  })]
                }), (0, h.jsx)("p", {
                  children: "Please note there are a few guidelines to follow when submitting your music in order for it to be considered:"
                }), (0, h.jsxs)("ul", {
                  children: [(0, h.jsx)("li", {
                    children: "Only submit a total of three tracks via a downloadable SoundCloud link."
                  }), (0, h.jsx)("li", {
                    children: "Only one submission (up to three tracks) per person will be accepted."
                  }), (0, h.jsx)("li", {
                    children: "Please include a 1,000 characters or less description of yourself and any other personal info you would like the team to be aware of when reviewing your submission."
                  })]
                }), (0, h.jsx)("p", {
                  children: "Submissions that do not follow these guidelines will not be considered."
                }), (0, h.jsxs)("p", {
                  children: ["Send your submission to", " ", (0, h.jsx)("a", {
                    href: "mailto:submissions@circolocorecords.com?subject=Submissions",
                    target: "_blank",
                    className: L.link,
                    rel: "noreferrer",
                    children: "submissions@circolocorecords.com"
                  })]
                })]
              })]
            })
          }), (0, h.jsx)("section", {
            children: (0, h.jsx)(j, {})
          }), (0, h.jsx)(p, {})]
        }),
        y = [{
          path: "/about",
          element: (0, h.jsx)(E, {})
        }, {
          path: "/submissions",
          element: (0, h.jsx)(C, {})
        }, {
          path: "/",
          element: (0, h.jsx)(w, {})
        }],
        R = () => (0, c.useRoutes)(y),
        A = window?.env?.graphEnv ?? "prod",
        T = e => {
          let {
            basename: s
          } = e;
          const [r] = (0, o.useModal)();
          return (0, h.jsxs)(c.BrowserRouter, {
            basename: s,
            children: [r, (0, h.jsx)(t.ScrollToTop, {}), (0, h.jsx)(R, {})]
          })
        },
        S = (0, n.makeVar)({
          modalIsOpen: !1
        }),
        O = (0, n.withReactiveState)((e => {
          let {
            basename: s
          } = e;
          return (0, h.jsx)(o.ModalProvider, {
            children: (0, h.jsx)(T, {
              basename: s
            })
          })
        }), {
          state: S
        }),
        G = (0, n.withRockstarGraph)(O, {
          env: A
        }),
        I = window?.env?.oneTrustId ?? null;
      l()({
        id: I,
        init: () => {
          const e = document.createElement("div");
          e.id = "main", document.body.appendChild(e);
          const s = document.getElementsByTagName("base")[0]?.getAttribute("href");
          (0, i.s)(e).render((0, h.jsx)(G, {
            basename: s
          }))
        }
      })
    },
    6156: () => {},
    1224: (e, s, r) => {
      "use strict";
      var a = r(6591);
      s.s = a.createRoot, a.hydrateRoot
    },
    115: (e, s, r) => {
      "use strict";
      var a = r(1853),
        l = Symbol.for("react.element"),
        i = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        t = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function o(e, s, r) {
        var a, o = {},
          n = null,
          d = null;
        for (a in void 0 !== r && (n = "" + r), void 0 !== s.key && (n = "" + s.key), void 0 !== s.ref && (d = s.ref), s) i.call(s, a) && !t.hasOwnProperty(a) && (o[a] = s[a]);
        if (e && e.defaultProps)
          for (a in s = e.defaultProps) void 0 === o[a] && (o[a] = s[a]);
        return {
          $$typeof: l,
          type: e,
          key: n,
          ref: d,
          props: o,
          _owner: c.current
        }
      }
      s.jsx = o, s.jsxs = o
    },
    9706: (e, s, r) => {
      "use strict";
      e.exports = r(115)
    },
    9981: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/936ed43c6501ab9aaccd.svg"
    },
    7249: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bb1b28efd4fc95f3ad6c.svg"
    },
    6736: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/8523b22f16a5f693dfca.svg"
    },
    3599: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/760d4b4d618f09590944.svg"
    },
    8475: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1a1d39b5679ec8183ceb.svg"
    },
    4157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/46dae734e417de81af74.svg"
    },
    1346: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/41c51154644a25b39843.svg"
    },
    3969: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3ec3f65fc393b96eaaff.svg"
    },
    9353: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/711ca03f661fbeaef53c.svg"
    },
    1104: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1982cd8b219d5ef23547.svg"
    },
    8466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e64a55b5da04264cd815.svg"
    },
    2491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/6e25fae115d49f760552.svg"
    },
    7323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/571c164fdb78af39ec31.svg"
    },
    5848: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/5b63133a153764c0597d.svg"
    },
    5593: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3c43f060e2bd13b5e300.jpg"
    },
    7058: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/80d761cf762cddecc6ec.jpg"
    },
    542: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/948996b63c62133f3328.jpg"
    },
    7811: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/2635f2989864a106d36f.jpg"
    },
    3383: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/90ee939a9aea92dc4ec4.jpg"
    },
    2479: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/d95527a0287658017e73.svg"
    },
    8029: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b37458293e625b6229ba.svg"
    },
    9936: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1a1d39b5679ec8183ceb.svg"
    }
  }
]);