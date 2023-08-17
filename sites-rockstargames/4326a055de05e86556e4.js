(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [245], {
    4015: (e, a, n) => {
      "use strict";
      n.r(a), n(7842);
      var i = n(6331),
        t = n(4690),
        s = n.n(t),
        l = n(170),
        d = n(6035),
        r = n(2293),
        o = n(8976),
        c = n(8008),
        m = n(5269),
        u = n.n(m),
        k = n(4859),
        v = n(9929),
        f = n(1968),
        g = n(1458),
        b = n(6711),
        p = n(1570),
        h = n(247),
        N = n(3657);
      const S = "_7185b668a703e593d6f18ca5eb38255a12f2",
        x = "_7185b668a703e593b9bb09c7276c243a56c3";
      var y = n(8469),
        j = n(6160);
      const _ = e => {
          let {
            games: a,
            t: n
          } = e;
          return (0, j.jsxs)("section", {
            className: "_7185b668a703e593d4fbf3aecb2463732aad",
            children: [(0, j.jsx)("h3", {
              className: S,
              children: (0, j.jsx)(o.A, {
                to: "newswire",
                "aria-label": n("Featured Games"),
                children: n("Featured Games")
              })
            }), (0, j.jsx)("div", {
              className: x,
              children: a.map((e => (0, j.jsx)(o.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, j.jsx)(o.Button, {
              role: "link",
              "aria-label": "Latest Games",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest Games",
              "data-gtm-label": "More Click",
              to: "games",
              context: "secondary",
              children: n("View More")
            })]
          })
        },
        w = e => {
          let {
            posts: a,
            t: n
          } = e;
          return (0, j.jsxs)("section", {
            className: "_7185b668a703e593dbbf6e442299737a36e0",
            children: [(0, j.jsx)("h3", {
              className: S,
              children: (0, j.jsx)(o.A, {
                to: "newswire",
                "aria-label": n("Newswire"),
                children: n("Newswire")
              })
            }), (0, j.jsx)(o.NewswireBlocks, {
              className: x,
              posts: a,
              noSpecialOrder: !0
            }), (0, j.jsx)(o.Button, {
              role: "link",
              "aria-label": "Latest News",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest News",
              "data-gtm-label": "More Click",
              to: "newswire",
              context: "secondary",
              children: n("View More")
            })]
          })
        },
        F = (0, v.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: n
          } = (0, k.useQuery)(y.Home, {
            autoSetLoading: !0
          });
          if (!n) return null;
          const {
            games: i,
            posts: t,
            videos: s
          } = n;
          return (0, j.jsxs)("div", {
            className: "_7185b668a703e593c4b20405ad56a3b4dd00",
            children: [(0, j.jsx)(o.VideoCarousel, {
              videos: s.results,
              t: a
            }), (0, j.jsxs)("div", {
              className: "_7185b668a703e593f9563b32021f220a9ca2",
              children: [(0, j.jsx)(w, {
                posts: t.results,
                t: a
              }), (0, j.jsx)(_, {
                games: i.results,
                t: a
              })]
            })]
          })
        })),
        V = (0, v.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: n,
            setNormalLogo: i
          } = (0, N.useRockstarLocalState)();
          return (0, d.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            i(!0), n()
          })), []), (0, j.jsx)("div", {
            className: "_7185b668a703e593f7903f781c69344545c0",
            children: (0, j.jsx)(o.NewswireList, {
              t: a
            })
          })
        }));
      var T = n(4524),
        E = n.n(T);
      const A = (0, v.withTranslations)((e => {
          let {
            t: a
          } = e;
          const n = (0, r.useParams)(),
            {
              setBreadcrumb: i,
              setNormalLogo: t
            } = (0, N.useRockstarLocalState)();
          return (0, d.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), i()
          })), []), (0, j.jsx)(E(), {
            idHash: String(n.articleId)
          })
        })),
        D = "_7185b668a703e593cf17a6d004f287e319c2";
      var $ = n(3623),
        L = n.n($);
      const I = (0, v.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: n,
          setNormalLogo: i
        } = (0, N.useRockstarLocalState)(), t = (0, v.useQueryParams)(), [s, l] = (0, d.useState)({}), {
          data: r
        } = (0, k.useQuery)(L(), {
          variables: s,
          skip: !Object.entries(s).length,
          autoSetLoading: !0
        });
        if ((0, d.useEffect)((() => (n([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            n()
          })), []), (0, d.useEffect)((() => {
            l({
              ...s,
              type: t.get("type"),
              gameId: parseInt(t.get("gameId") ?? 0),
              index: null === t.get("type")
            })
          }), [t.get("type"), t.get("gameId")]), (0, d.useEffect)((() => (i(!1), () => i(!0))), []), !r) return null;
        if (r?.game && r?.gameVideos) return (0, j.jsx)("div", {
          className: D,
          children: (0, j.jsx)(o.VideoList, {
            vids: r.gameVideos.results,
            title: a("Videos from %s").replace("%s", r.game.title)
          })
        });
        const {
          games: c,
          gtao: m,
          gtaosessions: u,
          latest: f,
          rdo: g
        } = r;
        return (0, j.jsx)("div", {
          className: D,
          children: s.type ? "" : (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(o.VideoCarousel, {
              videos: f.results,
              t: a
            }), (0, j.jsxs)("div", {
              className: "_7185b668a703e593f8094f84e208d7bd6984",
              children: [(0, j.jsx)(o.VideoList, {
                vids: g.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, j.jsx)(o.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, j.jsx)(o.VideoList, {
                vids: u.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, j.jsx)(o.VideoList, {
                games: c,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var C = n(4224);
      const q = (0, v.withTranslations)((e => {
        let {
          t: a
        } = e;
        const n = (0, r.useNavigate)(),
          {
            setNormalLogo: i,
            setBreadcrumb: t,
            setTitle: s
          } = (0, N.useRockstarLocalState)(),
          {
            videoId: l
          } = (0, r.useParams)(),
          {
            video: c,
            related: m
          } = (0, C.useVideoData)({
            id: Number(l)
          });
        return (0, d.useEffect)((() => (t([{
          href: "/videos",
          title: a("Videos")
        }]), i(!1), () => {
          i(!0), t()
        })), []), (0, d.useEffect)((() => {
          c && s(`${c.game.title} - ${c.title}`)
        }), [c]), c ? (0, j.jsxs)(j.Fragment, {
          children: [(0, j.jsx)(C.PlayerWithInfo, {
            videoId: Number(l),
            videoChangeCallback: e => {
              n(`../videos/${e}`)
            }
          }), m?.results?.length ? (0, j.jsx)(o.VideoList, {
            vids: m.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }));
      var P = n(8842),
        G = n.n(P);
      const O = (0, v.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: n
        } = (0, N.useRockstarLocalState)(), {
          data: i
        } = (0, k.useQuery)(G(), {
          autoSetLoading: !0
        }), t = i?.games ?? null;
        return (0, d.useEffect)((() => (n([{
          href: "/games",
          title: a("Games")
        }]), () => n())), [t]), t ? (0, j.jsx)("div", {
          className: "_7185b668a703e593bcb5b082e1fa4d2e670f",
          children: t.results.map((e => (0, j.jsx)(o.GameCard.Link, {
            game: e
          }, e.title_slug)))
        }) : null
      }));
      var B = n(6930),
        R = n.n(B);
      const z = e => {
          let {
            game: a,
            t: n
          } = e;
          const {
            purchases: i,
            digital_purchases: t
          } = a, s = i.length + t.length;
          if (0 === s) return null;
          const l = (0, j.jsx)(j.Fragment, {
              children: t.map((e => (0, j.jsx)(o.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            d = (0, j.jsx)(j.Fragment, {
              children: i.map((e => (0, j.jsx)(o.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (s > 1) return (0, j.jsxs)(o.Dropdown, {
            title: n("Buy Now"),
            children: [l, d]
          });
          const r = i.length ? i[0] : t[0];
          return r?.href ? (0, j.jsx)(o.Button, {
            to: r.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: n("Buy Now")
          }) : null
        },
        U = e => {
          let {
            game: a
          } = e;
          return (0, j.jsx)("h2", {
            className: "_7185b668a703e593b458fb38d5d5e7c6f8db",
            children: a.title
          })
        },
        M = e => {
          let {
            game: a,
            t: n
          } = e;
          const i = [],
            t = [],
            s = ["libertycitystories", "vicecitystories"].includes(a.title_slug);
          return a.developers.map((e => {
            t.push(e.title)
          })), a.platforms.map((e => {
            i.push(e.name)
          })), (0, j.jsx)(Y, {
            title: n("Specifications"),
            children: (0, j.jsxs)("div", {
              className: "_7185b668a703e593ba71fbd1ce867d9f1b0e",
              children: [(0, j.jsx)(J, {
                title: n("Developer"),
                children: t.join(", ")
              }), (0, j.jsx)(J, {
                title: n("Platform"),
                children: i.join(", ")
              }), (0, j.jsx)(J, {
                title: n("Release Date"),
                children: a.release_date_in_words
              }), (0, j.jsxs)("dl", {
                className: "_7185b668a703e593e2d41c68ae18421e2a5f",
                children: [(0, j.jsx)("dt", {
                  children: n("Rating")
                }), (0, j.jsxs)("dd", {
                  className: "_7185b668a703e593f3cff5f2b25aed04854d",
                  children: [(0, j.jsx)(o.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), s ? (0, j.jsx)("div", {
                    className: "_7185b668a703e593c2050488c218a41dd0ae"
                  }) : ""]
                })]
              })]
            })
          })
        },
        H = e => {
          let {
            screens: a,
            t: n
          } = e;
          return (0, j.jsx)(Y, {
            c: !0,
            title: n("Screens"),
            children: (0, j.jsx)("div", {
              className: "_7185b668a703e593b470979231a9d33f7cc0",
              children: a.map((e => (0, j.jsx)("div", {
                style: {
                  backgroundImage: `url(${e.file})`
                }
              }, e.file)))
            })
          })
        },
        Q = e => {
          let {
            game: a,
            t: n
          } = e;
          const [i, t] = (0, d.useState)(!1), s = "<br>", l = (0, j.jsx)("p", {
            dangerouslySetInnerHTML: {
              __html: a.description
            }
          }), r = a.description.includes(s);
          return (0, j.jsx)(Y, {
            className: "_7185b668a703e593f5fbd22d717e2808c737",
            title: n("Game Description"),
            children: r ? (0, j.jsxs)(j.Fragment, {
              children: [i ? l : (0, j.jsx)("p", {
                children: a.description.split(s)[0]
              }), " ", (0, j.jsx)(o.Button, {
                context: "secondary",
                onClick: () => t(!i),
                children: n(i ? "Read Less" : "Read More")
              })]
            }) : l
          })
        },
        K = e => {
          let {
            game: a,
            posts: n,
            t: i
          } = e;
          return (0, j.jsxs)(Y, {
            title: i("Latest News"),
            className: "_7185b668a703e593b4f97b4f531812bfd9e6",
            children: [(0, j.jsx)("div", {
              className: "_7185b668a703e593d1ad1a52007bd6cbf951",
              children: n.map((e => (0, j.jsx)(o.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, j.jsx)(o.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": `${a.title} - More Click`,
              to: `/newswire?tag_id=${a.tags[0].id}`,
              context: "secondary",
              children: i("Read more at the Rockstar Newswire")
            })]
          })
        },
        W = e => {
          let {
            game: a,
            videos: n,
            t: i
          } = e;
          return (0, j.jsxs)(Y, {
            title: i("Latest Videos"),
            className: "_7185b668a703e593d2a4e35a02a6f60bc3c2",
            children: [(0, j.jsx)("div", {
              className: "_7185b668a703e593f881b1c3b2f5ba8065fc",
              children: n.map((e => (0, j.jsx)(o.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, j.jsx)(o.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: i("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        J = e => {
          let {
            children: a,
            title: n,
            className: i = ""
          } = e;
          return (0, j.jsxs)("dl", {
            className: i,
            children: [(0, j.jsx)("dt", {
              children: n
            }), (0, j.jsx)("dd", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          })
        },
        Y = e => {
          let {
            title: a,
            className: n = "",
            children: i,
            style: t = {}
          } = e;
          return (0, j.jsxs)("section", {
            className: n,
            style: t,
            children: [a ? (0, j.jsx)("h4", {
              className: "_7185b668a703e593c06aca25ab017de6a9ff",
              children: a
            }) : "", i]
          })
        },
        X = (0, v.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: n,
            setTitle: i
          } = (0, N.useRockstarLocalState)(), t = (0, r.useParams)(), {
            data: s
          } = (0, k.useQuery)(R(), {
            variables: {
              titleSlug: t.gameTitlelug
            },
            autoSetLoading: !0
          }), l = s?.game ?? null;
          return (0, d.useEffect)((() => (l && i(l.title), n([{
            href: "/games",
            title: a("Games")
          }]), () => {
            n()
          })), [l]), l ? (0, j.jsxs)("div", {
            className: "_7185b668a703e593ea5fa63b89a62219113d",
            children: [(0, j.jsxs)("div", {
              className: "_7185b668a703e593e3dd0b8721e5b51d0e97",
              children: [(0, j.jsxs)("div", {
                className: "_7185b668a703e593b76354fb05b980942662",
                children: [(0, j.jsx)(U, {
                  game: l,
                  t: a
                }), (0, j.jsxs)("div", {
                  className: "_7185b668a703e593e80d6fc21095d8e57319",
                  children: [(0, j.jsx)(z, {
                    game: l,
                    t: a
                  }), l.has_official_site && (0, j.jsx)(o.Button, {
                    to: l.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": l.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, j.jsx)(o.GameCard.Art, {
                imgSrc: l.fob_1280,
                titleSlug: l.title_slug
              })]
            }), (0, j.jsxs)("div", {
              className: "_7185b668a703e593be5ed38ac3168dd2df67",
              children: [(0, j.jsx)(Q, {
                game: l,
                t: a
              }), l.tags.length && l.tags[0].videos.length ? (0, j.jsx)(W, {
                game: l,
                videos: l.tags[0].videos,
                t: a
              }) : "", l.tags.length && l.tags[0].posts.length ? (0, j.jsx)(K, {
                game: l,
                posts: l.tags[0].posts,
                t: a
              }) : "", l.screens.length ? (0, j.jsx)(H, {
                screens: l.screens,
                t: a
              }) : "", (0, j.jsx)(M, {
                game: l,
                t: a
              })]
            })]
          }) : null
        })),
        Z = "_7185b668a703e593be66077bb086d9ba252e",
        ee = "_7185b668a703e593a4315a4e64cdce6b042d";
      var ae = n(389),
        ne = n.n(ae);
      const ie = e => {
          let {
            loading: a,
            searchResponse: n,
            searchTerm: i,
            activeTab: t,
            t: s
          } = e;
          const [l, d] = (0, r.useSearchParams)();
          let c;
          switch (t) {
            case "posts":
              c = n.posts.results.map((e => (0, j.jsx)(o.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              c = n.games.results.map((e => (0, j.jsx)(o.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              c = n.videos.results.map((e => (0, j.jsx)(o.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              c = null
          }
          return (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)("section", {
              className: "_7185b668a703e593e8d247c95ca7e14d1e5e",
              children: Object.entries(n).map((e => {
                let [a, n] = e;
                return n?.paging?.count > 0 ? (0, j.jsx)(te, {
                  tabName: a,
                  activeTab: t,
                  searchTerm: i,
                  count: n?.paging?.count,
                  t: s
                }, a) : ""
              }))
            }), a ? "" : (0, j.jsx)("section", {
              className: "_7185b668a703e593fc198d45f7f447c595e1",
              children: (0, j.jsx)("div", {
                className: "_7185b668a703e593e64c63abd1c1f6848ef5",
                children: c
              })
            }), n[t]?.paging ? (0, j.jsx)("section", {
              className: "_7185b668a703e593a16d89b2b769baa98922",
              children: (0, j.jsx)(o.Paging, {
                data: n[t].paging,
                onPageUpdate: e => {
                  d({
                    ...Object.fromEntries([...l]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        te = e => {
          let {
            activeTab: a,
            count: n,
            searchTerm: i,
            tabName: t,
            t: s
          } = e;
          return (0, j.jsxs)(o.A, {
            className: a === t ? "_7185b668a703e593b573a6a73e91f0b15e2f" : "",
            to: `/search?q=${i}&tab=${t}&sort=__searchScore&page=1`,
            children: [s(t), " ", (0, j.jsxs)("span", {
              children: ["(", n, ")"]
            })]
          }, t)
        },
        se = (0, v.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              search: n
            },
            setSearch: i,
            setTitle: t
          } = (0, N.useRockstarLocalState)(), s = (0, v.useQueryParams)(), [l, r] = (0, d.useState)(null), [c, m] = (0, d.useState)({}), [u, f] = (0, d.useState)(s.get("tab") ?? null), {
            data: g = {},
            loading: b
          } = (0, k.useQuery)(ne(), {
            variables: c,
            skip: !Object.entries(c).length || !c.q,
            autoSetLoading: !0
          });
          return (0, d.useEffect)((() => {
            const e = {
              q: s.get("q"),
              page: Number(s.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            m(e), i(s.get("q"))
          }), [s.get("q"), s.get("page"), s.get("tab"), u]), (0, d.useEffect)((() => {
            const e = Object.entries(g).find((e => {
              let [a, n] = e;
              return n?.paging?.count > 0
            }))?.[0];
            f(s.get("tab") ?? e ?? null)
          }), [g, s.get("tab")]), (0, d.useEffect)((() => {
            void 0 !== g?.games?.paging?.count && (r((g?.games?.paging?.count ?? 0) + (g?.videos?.paging?.count ?? 0) + (g?.posts?.paging?.count ?? 0)), t(g?.meta?.title.replace("%s", n)))
          }), [g, u]), Object.entries(c).length ? c.q ? null === l ? null : (0, j.jsxs)("div", {
            className: Z,
            children: [(0, j.jsxs)("section", {
              className: ee,
              children: [(0, j.jsxs)("div", {
                className: "_7185b668a703e593ed56a1f8c70a89879ed0",
                children: [(0, j.jsxs)("h4", {
                  children: [b ? a("search-active") : "", b || l ? b ? "" : a("Search results for:") : a("search-over-empty")]
                }), (0, j.jsx)("h1", {
                  children: a("%s").replace("%s", s.get("q"))
                })]
              }), (0, j.jsx)(o.SearchBox, {})]
            }), !b && l ? (0, j.jsx)(ie, {
              searchResponse: g,
              searchTerm: n,
              activeTab: u,
              t: a
            }) : ""]
          }) : (0, j.jsx)("div", {
            className: Z,
            children: (0, j.jsxs)("section", {
              className: ee,
              children: [(0, j.jsx)("h3", {
                children: a("Search")
              }), (0, j.jsx)(o.SearchBox, {})]
            })
          }) : null
        }));
      var le = n(7628),
        de = n.n(le);
      const re = {
        companyInfo: "_7185b668a703e593fdf7ad7390432425a3f9",
        top: "_7185b668a703e593c9f0c63e60bbcb56c5a8",
        content: "_7185b668a703e593f2feda0369c0c992f672",
        nav: "_7185b668a703e593e7fac1a1100cb55ef25e",
        us: "_7185b668a703e593cc4fee3b0281f4452e44",
        br: "_7185b668a703e593de53608056aadcab2de7",
        cz: "_7185b668a703e593d90e2a3649251d9f9b74",
        de: "_7185b668a703e593f379ae83b1d2e5e3667a",
        es: "_7185b668a703e593f53ac2b87e4b0e88f4cb",
        fr: "_7185b668a703e593a43c6a887dd3b7128b40",
        it: "_7185b668a703e593dd4e51987c1ff36db3f4",
        jp: "_7185b668a703e593f78303397afb6f93d0e1",
        kr: "_7185b668a703e593b3454c6030e73489775f",
        mx: "_7185b668a703e593dd782b5cd8629ed94814",
        nl: "_7185b668a703e593c8c30c11b7bbbc152ebb",
        pl: "_7185b668a703e593bf12aa0dd14556d0b41d",
        ru: "_7185b668a703e593ff19da6ef088e11bf9fa",
        sa: "_7185b668a703e593a226907c61648019cded",
        tw: "_7185b668a703e593bce44d59902ad4e6d892",
        zh: "_7185b668a703e593a0f363760a76977e97a8",
        cookieSettingsButton: "_7185b668a703e593f5a3056a97f4f3ca6674",
        cookieSettingsModal: "_7185b668a703e593c61473be173bf0339bad",
        open: "_7185b668a703e593ed6ad495e3a2c0172a9d",
        settings: "_7185b668a703e593b94a8986c7c72543b62b",
        setting: "_7185b668a703e593d53fc16a5d83bbd0112f",
        optional: "_7185b668a703e593a4ac7a6cb5436b3df4d7",
        dot: "_7185b668a703e593ba066f4a55aa02437346",
        optionalOn: "_7185b668a703e593b39dcb057d9e64f3ffa9",
        rtl: "_7185b668a703e593ae70ef252c5b38a62b36"
      };
      var oe = n(4438),
        ce = n.n(oe);
      const me = (0, o.withSearchbarErrorBoundary)((0, v.withTranslations)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: n,
            titleKey: i,
            jsonType: t,
            t: s
          } = e;
          const l = (0, r.useNavigate)(),
            c = (0, r.useLocation)(),
            m = (0, v.useLocale)(),
            u = (0, v.useQueryParams)(),
            f = (0, d.useRef)(),
            g = (e, a) => {
              const n = a ?? e.target.hash,
                i = document.getElementById(n.replace("#", "")),
                t = document.getElementsByName(n.replace("#", ""))?.[0],
                s = i ?? t ?? null,
                d = u.get("country");
              if (e) {
                const a = `${c.pathname}${u.get("country")?`?country=${d}`:""}${n}`;
                l(a), e.preventDefault()
              }
              s && window.scroll(0, s.offsetTop - f.current.getBoundingClientRect().height - 60)
            },
            [b, p] = (0, d.useState)({}),
            {
              data: h,
              loading: N
            } = (0, k.useQuery)(ce(), {
              variables: b,
              skip: !Object.entries(b).length,
              autoSetLoading: !0
            });
          (0, d.useEffect)((() => {
            const e = u.get("country") ?? u.get("locale") ?? null,
              a = void 0 === n,
              i = a && null !== e ? e : a && m.split("_").length > 1 ? "hans" === m.split("_")[1] ? m.split("_")[0] : m.split("_")[1] : m;
            p({
              jsonType: t,
              jsonLocale: i || "us",
              metaUrl: `/${t}`
            })
          }), [u.get("country"), u.get("locale")]), (0, d.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = u.get("country"),
                    n = e.href.split("#")[1],
                    i = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${i}${c.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${n}`)
                }
              })(e), e.addEventListener("click", (e => {
                g(e, !1)
              }))
            })), "" !== c.hash && setTimeout((() => {
              g(!1, c.hash)
            }), 10)
          }), [h]);
          const {
            content: S
          } = h?.companyInfo ?? "";
          return (0, j.jsxs)("div", {
            className: re.companyInfo,
            "data-locale": b.jsonLocale,
            children: [(0, j.jsxs)("section", {
              className: re.top,
              ref: f,
              children: [(0, j.jsx)("h1", {
                children: s(i)
              }), "undefined" !== n && n ? "" : (0, j.jsx)("nav", {
                className: re.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => (0, j.jsx)(o.A, {
                  to: `${c.pathname}?country=${e}`,
                  className: re[e]
                }, a)))
              })]
            }), h && !N ? (0, j.jsx)("section", {
              className: re.content,
              "data-json-type": t,
              children: "cookies" === t && h ? (0, j.jsx)(de(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: S,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, j.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: S
                }
              })
            }) : ""]
          })
        }))),
        ue = () => (0, j.jsx)(me, {
          jsonType: "conduct",
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
        ke = () => (0, j.jsx)(me, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        ve = () => (0, j.jsx)(me, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        fe = () => (0, j.jsx)(me, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        ge = () => (0, j.jsx)(me, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        be = () => (0, j.jsx)(me, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        pe = e => {
          let {
            t: a
          } = e;
          return (0, j.jsx)(o.Button, {
            className: re.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        he = () => (0, j.jsx)(me, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, v.withTranslations)(pe)
        }),
        Ne = () => (0, j.jsx)(me, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        Se = {
          manuals: "_7185b668a703e593cb1e49cfce02bacb9f17",
          list: "_7185b668a703e593cad229be0a8aebc584fc",
          item: "_7185b668a703e593a23570e3dc54680009c2",
          img: "_7185b668a703e593e8c3fb8a8209b3eee363",
          dropdown: "_7185b668a703e593dd56d911b8cdb77d58ac",
          items: "_7185b668a703e593f272cf6b78b0c58e91b4",
          detail: "_7185b668a703e593e70fb589a8d25388ea11",
          rockstar: "_7185b668a703e593f764d9f6eaabdd8fb5d9",
          music: "_7185b668a703e593f56cc1d0797f336c02d2",
          gtaiv: "_7185b668a703e593c9907907754a9559d40c",
          vcs: "_7185b668a703e593fb05aabbc5e1455d7480",
          tlad: "_7185b668a703e593f9bfee3c5e28e43c64db",
          bogt: "_7185b668a703e593cb2a17541d6a5bd379eb",
          eflc: "_7185b668a703e593f07f9a54f3303e5b5ae8",
          gameLogo: "_7185b668a703e593c9a38509f2c92a5147f2",
          warriors: "_7185b668a703e593a1f9c97ab4ced426b353",
          album: "_7185b668a703e593e360a0996dbc6ecb942e",
          driver: "_7185b668a703e593fafd97e9fd79d732d317",
          criticize: "_7185b668a703e593da6b4fb69c4004d8f01f",
          footsteps: "_7185b668a703e593e3e5e16c132e3b9c2821",
          begood: "_7185b668a703e593ab21b38bc89aeb88c185",
          wheelsofsteel: "_7185b668a703e593b1f8c9ea0fc9ccc113e6",
          cantgetenough: "_7185b668a703e593eeb089740623c21af506",
          theweekend: "_7185b668a703e593fa49e05daf31f1c45c3e",
          acid: "_7185b668a703e593fdd8024aa3200c9956b0",
          elmalo: "_7185b668a703e593aa298aa7d7fd61084a76",
          ilikeit: "_7185b668a703e593f1ca69668402acbcef57",
          migente: "_7185b668a703e593ca18bb258a10bc38f4e1",
          quimbara: "_7185b668a703e593e9d7c1ef8f88dc30ccf7",
          revolt: "_7185b668a703e593da38e55d1db4a04fbd28",
          credit: "_7185b668a703e593e6d33865a2b0cad13fec",
          additional: "_7185b668a703e593df339a04f89bce71682c",
          logo: "_7185b668a703e593d27c7daf84749f7294f4",
          beat: "_7185b668a703e593b7019cc7b55154c7c941",
          "liberty-rock": "_7185b668a703e593b430d6e0f9853ce8f1f2",
          lchc: "_7185b668a703e593c5358f1cedf67dc7b2c7",
          "electro-choc": "_7185b668a703e593b153f575c5a660bd557b",
          "international-funk": "_7185b668a703e593c369082539a25e34be34",
          vladivostok: "_7185b668a703e593d4c5c5f2354590da1636",
          vibe: "_7185b668a703e593fb2433804efe7f8c491d",
          "tuff-gong": "_7185b668a703e593c45db70705fdc737c9e9",
          "san-juan": "_7185b668a703e593d96f42fbcea4d72f1c0f",
          "radio-broker": "_7185b668a703e593e6f72eaee100fcba344b",
          "massive-b": "_7185b668a703e593b9dd6ebae49e77d70669",
          k109: "_7185b668a703e593f2d174eff39585d633c5",
          journey: "_7185b668a703e593eee7a9a9f87346a5a789",
          jnr: "_7185b668a703e593d58773295424fd4a6474",
          interiors: "_7185b668a703e593f2ca04a38a7c73476b21",
          fusion: "_7185b668a703e593aa9ec3778aec504b5e38",
          classics: "_7185b668a703e593b330bd79e5c1e2c90c06",
          "vice-city": "_7185b668a703e593f0c4d20e395d68c01223",
          "self-actualization": "_7185b668a703e593dab79bc3639900734ce8",
          ramjam: "_7185b668a703e593dabfc6a419fe0ff69d7e",
          emotion: "_7185b668a703e593e647bab5e3e97ebd0c3a",
          flash: "_7185b668a703e593a11a4a48b2cce90a0b23",
          fresh: "_7185b668a703e593c9c555c3cd312db2e22e",
          paradise: "_7185b668a703e593cfb4122309bf4c994515",
          espantoso: "_7185b668a703e593d2880c00a8e7c29e0ada",
          vcfl: "_7185b668a703e593c384e124115da4ff0c8d",
          vrock: "_7185b668a703e593c84a7ace91a9cf1fd8c8",
          wave: "_7185b668a703e593d0fedaf40b08ec500883",
          warriorsCredit: "_7185b668a703e593aee6d517dc62f3032703"
        };
      var xe = n(3310),
        ye = n.n(xe);
      const je = (0, v.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          data: n
        } = (0, k.useQuery)(ye(), {
          autoSetLoading: !0
        });
        if (!n) return null;
        const {
          manuals: i
        } = n;
        return (0, j.jsxs)("div", {
          className: Se.manuals,
          children: [(0, j.jsx)("h2", {
            children: a("Manuals")
          }), (0, j.jsx)("div", {
            className: Se.list,
            children: i.map((e => (0, j.jsxs)("div", {
              className: Se.item,
              children: [(0, j.jsx)("div", {
                className: Se.img,
                style: {
                  backgroundImage: `url(${e.game.fob_640})`
                }
              }), (0, j.jsx)(o.Dropdown, {
                title: e.game.title,
                className: Se.dropdown,
                children: e.manuals_platforms.map((e => (0, j.jsxs)("p", {
                  children: [(0, j.jsx)("span", {
                    children: e.platform
                  }), e.manuals_links.map((e => (0, j.jsx)("a", {
                    href: e.href,
                    target: "_blank",
                    rel: "noreferrer",
                    children: e.label
                  }, e.label)))]
                }, e.platform)))
              })]
            }, e.id)))
          })]
        })
      }));
      var _e = n(3205),
        we = n.n(_e);
      const Fe = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: n
          } = we();
          return (0, j.jsxs)("div", {
            className: Se.detail,
            children: [(0, j.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: n(a.content)
              }
            }), a.album_cover ? (0, j.jsx)("div", {
              className: [Se.album, Se[a.album_cover]].join(" ")
            }) : "", (0, j.jsx)(o.A, {
              to: "/",
              children: (0, j.jsx)("div", {
                className: Se.rockstar
              })
            })]
          })
        },
        Ve = (0, v.withTranslations)((e => {
          let {
            stations: a,
            gameId: n,
            t: i
          } = e;
          const {
            sanitize: t
          } = we();
          return (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)("h1", {
              children: i("Music Credits")
            }), a && 55 === a[0].game_id ? (0, j.jsxs)("div", {
              className: Se.warriorsCredit,
              children: [(0, j.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, j.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, j.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, j.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, j.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, j.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, j.jsx)("div", {
              className: [Se.list, a && 55 === a[0].game_id ? Se.warriors : ""].join(" "),
              children: a && a.map(((e, s) => (0, j.jsxs)("div", {
                className: Se.station,
                children: [55 !== e.game_id ? (0, j.jsx)("div", {
                  className: [Se.logo, Se[e.slug]].join(" ")
                }) : (0, j.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, j.jsxs)("div", {
                  className: Se.credit,
                  children: [(0, j.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, j.jsx)("p", {
                    children: e.written_by
                  }), (0, j.jsx)("p", {
                    children: e.published_by
                  }), (0, j.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, j.jsx)("p", {
                    className: Se.additional,
                    children: (0, j.jsx)(o.A, {
                      to: `music?gameId=${n}&stationId=${a[s].id}&songId=${e.id}`,
                      children: i("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var Te = n(8735),
        Ee = n.n(Te);
      const Ae = () => {
          const e = (0, v.useQueryParams)(),
            a = Number(e.get("gameId")),
            n = Number(e.get("songId")),
            i = Number(e.get("stationId"));
          let t = !1;
          const {
            data: s
          } = (0, k.useQuery)(Ee(), {
            variables: {
              gameId: a
            },
            autoSetLoading: !0
          });
          if (!s) return null;
          const {
            musicStations: l
          } = s;
          return Object.keys(l).length, l.map((e => {
            e.id === i && e.music_credits.map((e => {
              e.id === n && (t = e.music_detail)
            }))
          })), (0, j.jsxs)("div", {
            className: [Se.music, 25 === a ? Se.gtaiv : 26 === a ? Se.tlad : 32 === a ? Se.bogt : 28 === a ? Se.eflc : 34 === a ? Se.vcs : ""].join(" "),
            children: [(0, j.jsx)("div", {
              className: [Se.gameLogo, 26 === a ? Se.tlad : 32 === a ? Se.bogt : 28 === a ? Se.eflc : 25 === a ? Se.gtaiv : 34 === a ? Se.vcs : 55 === a ? Se.warriors : ""].join(" ")
            }), a && l ? i && n && t ? (0, j.jsx)(Fe, {
              detail: t
            }) : (0, j.jsx)(Ve, {
              stations: l,
              gameId: a
            }) : null]
          })
        },
        De = (0, v.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, j.jsxs)("div", {
            className: "_7185b668a703e593f5a3fd19ef32d4a7c9fb",
            children: [(0, j.jsx)("section", {
              className: "_7185b668a703e593d6cad5cd00b5df35f739",
              children: (0, j.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, j.jsxs)("section", {
              className: "_7185b668a703e593fcf7d4f6f4fee3e8dc0e",
              children: [(0, j.jsx)("p", {
                children: a("contact.intro")
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.technical")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.career")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.legal")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.latest")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(o.A, {
                  to: "https://www.youtube.com/user/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Youtube Site",
                  children: "https://www.youtube.com/user/RockstarGames"
                })]
              }), (0, j.jsx)("br", {})]
            })]
          })
        })),
        $e = {
          maint: "_7185b668a703e593be0ddcc1c6860acb4d98",
          content: "_7185b668a703e593a8c1a7d64263dcfa3aed",
          logo: "_7185b668a703e593e1d82fca0195b898bef7"
        },
        Le = () => (0, j.jsx)("div", {
          className: $e.maint,
          children: (0, j.jsxs)("div", {
            className: $e.content,
            children: [(0, j.jsx)("div", {
              className: $e.logo
            }), (0, j.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, j.jsx)("a", {
              className: $e.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        Ie = () => (0, j.jsxs)("div", {
          className: "_7185b668a703e593b39a5d752efba84c2088",
          children: [(0, j.jsx)("div", {
            className: "_7185b668a703e593abd863939e037fa8cd4a"
          }), (0, j.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        Ce = {
          "frontline-heroes": (0, d.lazy)((() => n.e(536).then(n.bind(n, 2536)))),
          "gta-tv": (0, d.lazy)((() => n.e(414).then(n.t.bind(n, 3414, 23)))),
          "modules-core-gif-viewer": (0, d.lazy)((() => n.e(774).then(n.t.bind(n, 2774, 23)))),
          "modules-core-videoplayer": (0, d.lazy)((() => Promise.resolve().then(n.t.bind(n, 4224, 23)))),
          "rockstar-tv": (0, d.lazy)((() => n.e(107).then(n.t.bind(n, 4107, 23)))),
          "screenshot-viewer": (0, d.lazy)((() => n.e(142).then(n.t.bind(n, 1142, 23)))),
          "sites-careers": (0, d.lazy)((() => n.e(710).then(n.t.bind(n, 1710, 23)))),
          "sites-gta-gen9": (0, d.lazy)((() => n.e(291).then(n.t.bind(n, 6291, 23)))),
          "sites-gta-trilogy": (0, d.lazy)((() => n.e(829).then(n.t.bind(n, 3829, 23)))),
          "sites-red-dead-online": (0, d.lazy)((() => n.e(308).then(n.t.bind(n, 308, 23)))),
          "sites-red-dead-redemption": (0, d.lazy)((() => n.e(295).then(n.t.bind(n, 5295, 23)))),
          "sites-rockstargames-downloads": (0, d.lazy)((() => n.e(70).then(n.t.bind(n, 1070, 23))))
        },
        qe = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = Ce[e],
            {
              setHeaderHidden: i
            } = (0, N.useRockstarLocalState)();
          return (0, j.jsx)(d.Suspense, {
            fallback: "",
            children: (0, j.jsx)(n, {
              setHeaderHidden: i,
              config: a
            })
          })
        },
        Pe = (0, o.withSearchbarErrorBoundary)((() => {
          const e = [{
            path: "/",
            element: (0, j.jsx)(F, {})
          }, {
            path: "/careers-privacy",
            element: (0, j.jsx)(ge, {})
          }, {
            path: "/ccpa",
            element: (0, j.jsx)(Ne, {})
          }, {
            path: "/conduct",
            element: (0, j.jsx)(ue, {})
          }, {
            path: "/contact",
            element: (0, j.jsx)(De, {})
          }, {
            path: "/cookies",
            element: (0, j.jsx)(he, {})
          }, {
            path: "/corpinfo",
            element: (0, j.jsx)(ke, {})
          }, {
            path: "/eula",
            element: (0, j.jsx)(ve, {})
          }, {
            path: "/games",
            element: (0, j.jsx)(O, {})
          }, {
            path: "/games/:gameTitlelug",
            element: (0, j.jsx)(X, {})
          }, {
            path: "/legal",
            element: (0, j.jsx)(fe, {})
          }, {
            path: "/gta-v/thankyou",
            element: (0, j.jsx)(h.Credits, {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: (0, j.jsx)(Ie, {})
          }, {
            path: "/reddeadredemption/*",
            element: qe("sites-red-dead-redemption")
          }, {
            path: "/reddeadonline/thankyou",
            element: (0, j.jsx)(h.Credits, {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: qe("sites-careers")
          }, {
            path: "/downloads/*",
            element: qe("sites-rockstargames-downloads")
          }, {
            path: "/reddeadonline/*",
            element: qe("sites-red-dead-online")
          }, {
            path: "/frontline-heroes",
            element: qe("frontline-heroes")
          }, {
            path: "/gifs/:hashId",
            element: qe("modules-core-gif-viewer")
          }, {
            path: "/gta-v/*",
            element: qe("sites-gta-gen9", {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: qe("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: qe("sites-gta-gen9", {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy",
            element: qe("sites-gta-trilogy")
          }, {
            path: "/gtatv/*",
            element: qe("gta-tv")
          }, {
            path: "/manuals",
            element: (0, j.jsx)(je, {})
          }, {
            path: "/manuals/music",
            element: (0, j.jsx)(Ae, {})
          }, {
            path: "/newswire",
            element: (0, j.jsx)(V, {})
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: (0, j.jsx)(A, {})
          }, {
            path: "/old-privacy",
            element: (0, j.jsx)(be, {})
          }, {
            path: "/privacy",
            element: (0, j.jsx)(be, {})
          }, {
            path: "/rockstartv/*",
            element: qe("rockstar-tv")
          }, {
            path: "/screenshot-viewer/*",
            element: qe("screenshot-viewer")
          }, {
            path: "/search",
            element: (0, j.jsx)(se, {})
          }, {
            path: "/socialclubmaintenance",
            element: (0, j.jsx)(Le, {})
          }, {
            path: "/videoplayer",
            element: qe("modules-core-videoplayer")
          }, {
            path: "/videos",
            element: (0, j.jsx)(I, {})
          }, {
            path: "/videos/:videoId",
            element: (0, j.jsx)(q, {})
          }, {
            path: "*",
            element: (0, j.jsx)(o.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, r.useRoutes)(e)
        })),
        Ge = {
          main: "_7185b668a703e593aaf63b52008f75924bfd",
          gameSite: "_7185b668a703e593cd11032e8b42a51c2e09",
          "theme-std": "_7185b668a703e593a11e15134625e6be7114",
          headerHidden: "_7185b668a703e593cb24ea20571cdd3eeb64",
          standalone: "_7185b668a703e593c7d686e28fbcff5e154b"
        },
        Oe = (0, i.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, N.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, j.jsx)("main", {
            role: "main",
            id: "main",
            className: [Ge.main, a ? Ge.standalone : "", e ? Ge.headerHidden : ""].join(" "),
            children: (0, j.jsx)(Pe, {})
          })
        })),
        Be = ((0, k.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        Re = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: !1,
          standalone: (["/careers", "/gifs", "/frontline-heroes", "/gtatv", "/rockstartv", "/screenshot-viewer", "/videoplayer"].find((e => Be.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        ze = (0, k.makeVar)(Re),
        Ue = window?.env?.graphEnv ?? "prod",
        Me = e => {
          let {
            standalone: a,
            customFooter: n
          } = e;
          const [i] = (0, c.useModal)();
          return (0, j.jsx)(p.IntlProvider, {
            children: (0, j.jsx)(g.RockstarUserProvider, {
              children: (0, j.jsx)(g.GtmProvider, {
                children: (0, j.jsxs)(o.ScrollTracker, {
                  threshold: [25, 50, 75, 90, 100],
                  children: [(0, j.jsx)(h.AccessibilityButton, {}), i, (0, j.jsx)(o.ScrollToTop, {}), a ? "" : (0, j.jsx)(h.Header, {}), (0, j.jsx)(b.Menu, {}), (0, j.jsx)(Oe, {}), a || n ? "" : (0, j.jsx)(h.FooterNav, {})]
                })
              })
            })
          })
        },
        He = e => {
          let {
            standalone: a,
            customFooter: n
          } = e;
          return (0, j.jsx)(c.ModalProvider, {
            children: (0, j.jsx)(Me, {
              standalone: a,
              customFooter: n
            })
          })
        },
        {
          pingBearer: Qe
        } = (0, v.getScConfigForOrigin)(),
        Ke = (0, k.withReactiveState)((() => {
          const e = (0, k.useBase)(),
            {
              state: {
                standalone: a,
                customFooter: n
              },
              setLoading: i,
              setTitle: t
            } = (0, v.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("message", (e => {
              const a = e.data?.type ?? null;
              "graph.titleUpdate" === a && t(e.data.title), "graph.loadingUpdate" === a && i(e.data.loading)
            }))
          }), [i, t]), (0, j.jsx)(v.ResizeProvider, {
            children: (0, j.jsx)(f.ScrollProvider, {
              children: (0, j.jsx)(r.BrowserRouter, {
                basename: e,
                children: (0, j.jsx)(He, {
                  standalone: a,
                  customFooter: n
                })
              })
            })
          })
        }), {
          state: ze
        }),
        We = (0, k.withRockstarGraph)(Ke, {
          env: Ue,
          token: (0, k.makeVar)(null),
          tokenPing: Qe,
          tokenPingExpires: (0, k.makeVar)(null),
          typePolicies: {
            ...u()
          }
        }),
        Je = window?.env?.gtmId ?? null,
        Ye = window?.env?.oneTrustId ?? null;
      (0, i.init)({
        id: Je
      }), s()({
        id: Ye,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, l.s)(e).render((0, j.jsx)(We, {}))
        }
      })
    },
    4438: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "CompanyInfo"
          },
          variableDefinitions: [{
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
                value: "jsonLocale"
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
                value: "jsonType"
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
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "companyInfo"
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
                    value: "jsonType"
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
                    value: "jsonLocale"
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
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "locale"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "content"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
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
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
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
                    value: "title"
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
          end: 308
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: 'query CompanyInfo(\n    $locale: String!\n    $jsonLocale: String!\n    $jsonType: String!\n    $metaUrl: String\n) {\n    companyInfo(type: $jsonType, locale: $jsonLocale) {\n        type\n        locale\n        content\n    }\n    meta: metaUrl(url: $metaUrl, domain: "www", locale: $locale) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.CompanyInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = i[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "CompanyInfo")
    },
    8469: (e, a, n) => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Home"
          },
          variableDefinitions: [{
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
                  value: "url"
                },
                value: {
                  kind: "StringValue",
                  value: "/",
                  block: !1
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
                value: "games"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "site_in_rockstar"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "6"
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "4"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "featured",
                  block: !1
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
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 675
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery Home($locale: String!) {\n    meta: metaUrl(url: "/", domain: "www", locale: $locale) {\n        title\n    }\n    games(limit: 4, locale: $locale) {\n        results {\n            id\n            title\n            title_slug\n            site_in_rockstar\n            fob_640\n        }\n    }\n    posts(limit: 6, locale: $locale) {\n        results {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, limit: 4, finder: "featured") {\n        results {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
        }))
      }

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      i.definitions = i.definitions.concat(s(n(6077).definitions)), i.definitions = i.definitions.concat(s(n(6921).definitions));
      var d = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), d[e.name.value] = a
        }
      })), e.exports = i, e.exports.Home = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = r(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "Home")
    },
    389: (e, a, n) => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Search"
          },
          variableDefinitions: [{
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
                value: "q"
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
                value: "page"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "withPosts"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "withGames"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "withVideos"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                  kind: "StringValue",
                  value: "/search/query",
                  block: !1
                }
              }],
              directives: [],
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
                value: "games"
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
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
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
                          value: "withGames"
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
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "site_in_rockstar"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "posts"
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
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hideExpired"
                },
                value: {
                  kind: "BooleanValue",
                  value: !1
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
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
                          value: "withPosts"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "postFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "page"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "page"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "q"
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
                    value: "paging"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "paging"
                      },
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
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
                          value: "withVideos"
                        }
                      }
                    }]
                  }],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1130
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n#import "@rockstargames/graph-client/operations/fragments/paging.graphql"\n\nquery Search(\n    $locale: String!\n    $q: String!\n    $page: Int!\n    $withPosts: Boolean!\n    $withGames: Boolean!\n    $withVideos: Boolean!\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/search/query") {\n        title\n    }\n    games(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withGames) {\n            id\n            title\n            title_slug\n            site_in_rockstar\n            fob_640\n        }\n    }\n    posts(locale: $locale, page: $page, q: $q, hideExpired: false) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withPosts) {\n            ...postFields\n        }\n    }\n    videos(locale: $locale, page: $page, q: $q) {\n        paging {\n            ...paging\n        }\n        results @include(if: $withVideos) {\n            ...videoFields\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
        }))
      }

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      i.definitions = i.definitions.concat(s(n(6077).definitions)), i.definitions = i.definitions.concat(s(n(6921).definitions)), i.definitions = i.definitions.concat(s(n(9349).definitions));
      var d = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), d[e.name.value] = a
        }
      })), e.exports = i, e.exports.Search = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = r(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "Search")
    },
    8842: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GamesIndex"
          },
          variableDefinitions: [{
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
                  kind: "StringValue",
                  value: "/games",
                  block: !1
                }
              }],
              directives: [],
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
                value: "games"
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "100"
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
                      name: {
                        kind: "Name",
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "site_in_rockstar"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 273
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GamesIndex($locale: String!) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/games") {\n        title\n    }\n    games(locale: $locale, limit: 100) {\n        results {\n            title_slug\n            site_in_rockstar\n            fob_640\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.GamesIndex = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = i[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "GamesIndex")
    },
    6930: (e, a, n) => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameInfo"
          },
          variableDefinitions: [{
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
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
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "fob_1280"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "url_official"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "release_date_in_words"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "img_rating"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_descriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "rating_footer"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "url_rating"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "has_official_site"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "developers"
                  },
                  arguments: [],
                  directives: [],
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
                    value: "platforms"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "digital_purchases"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform_name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform_id"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "purchases"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "href"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "name"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "screens"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "file"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tags"
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
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "videos"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "FragmentSpread",
                          name: {
                            kind: "Name",
                            value: "videoFields"
                          },
                          directives: []
                        }]
                      }
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "posts"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "FragmentSpread",
                          name: {
                            kind: "Name",
                            value: "postFields"
                          },
                          directives: []
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
          end: 1043
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/newswire-post.graphql"\n#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery GameInfo($locale: String!, $titleSlug: String!) {\n    game(locale: $locale, titleSlug: $titleSlug) {\n        id\n        title\n        title_slug\n        fob_1280\n        description\n        url_official\n        release_date_in_words\n        img_rating\n        rating_descriptors\n        rating_footer\n        url_rating\n        has_official_site\n        developers {\n            title\n        }\n        platforms {\n            name\n        }\n        digital_purchases {\n            platform_name\n            platform_id\n        }\n        purchases {\n            href\n            platform {\n                name\n            }\n        }\n        screens {\n            file\n        }\n        tags {\n            id\n            name\n            videos {\n                ...videoFields\n            }\n            posts {\n                ...postFields\n            }\n        }\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e) {
        return e.filter((function(e) {
          if ("FragmentDefinition" !== e.kind) return !0;
          var a = e.name.value;
          return !t[a] && (t[a] = !0, !0)
        }))
      }

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
        }))
      }
      i.definitions = i.definitions.concat(s(n(6077).definitions)), i.definitions = i.definitions.concat(s(n(6921).definitions));
      var d = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), d[e.name.value] = a
        }
      })), e.exports = i, e.exports.GameInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = r(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "GameInfo")
    },
    3310: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Manuals"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
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
              value: !0
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
                value: "manuals"
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
                    value: "game"
                  },
                  arguments: [],
                  directives: [],
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "manuals_platforms"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "platform"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "manuals_links"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "label"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "href"
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
        }],
        loc: {
          start: 0,
          end: 280
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: "query Manuals($cache: Boolean = true) {\n    manuals {\n        id\n        game {\n            title\n            fob_640\n        }\n        manuals_platforms {\n            platform\n            manuals_links {\n                label\n                href\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.Manuals = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = i[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "Manuals")
    },
    8735: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MusicStations"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
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
              value: !0
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "gameId"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int"
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
                value: "musicStations"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "gameId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
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
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "slug"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "music_credits"
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
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "written_by"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "published_by"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "courtesy_of"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "music_detail"
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
                            value: "content"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "album_cover"
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
        }],
        loc: {
          start: 0,
          end: 395
        }
      };

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
        }))
      }
      a.loc.source = {
        body: "query MusicStations($cache: Boolean = true, $gameId: Int!) {\n    musicStations(gameId: $gameId) {\n        id\n        title\n        slug\n        music_credits {\n            id\n            title\n            written_by\n            published_by\n            courtesy_of\n            music_detail {\n                id\n                content\n                album_cover\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function t(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.MusicStations = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = i[a] || new Set,
          l = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "MusicStations")
    },
    3623: (e, a, n) => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "VideosList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "gameId"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
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
                value: "index"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                  kind: "StringValue",
                  value: "/videos",
                  block: !1
                }
              }],
              directives: [],
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
              alias: {
                kind: "Name",
                value: "latest"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "3"
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "trailers",
                  block: !1
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
                      value: "index"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "rdo"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "tagId"
                },
                value: {
                  kind: "IntValue",
                  value: "736"
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
                      value: "index"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtao"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "tagId"
                },
                value: {
                  kind: "IntValue",
                  value: "702"
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
                      value: "index"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gtaosessions"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "grandTheftAutoOnlineSesssionsEpisodesVideos",
                  block: !1
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
                      value: "index"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "games"
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
                  value: "finder"
                },
                value: {
                  kind: "StringValue",
                  value: "hasVideos",
                  block: !1
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
                      value: "index"
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
                    value: "results"
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
                        value: "title_slug"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "fob_640"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }, {
              kind: "Field",
              alias: {
                kind: "Name",
                value: "gameVideos"
              },
              name: {
                kind: "Name",
                value: "videos"
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
                  value: "gameId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "skip"
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
                      value: "index"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "FragmentSpread",
                      name: {
                        kind: "Name",
                        value: "videoFields"
                      },
                      directives: []
                    }]
                  }
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
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "gameId"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "skip"
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
                      value: "index"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1239
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery VideosList($gameId: Int, $locale: String!, $index: Boolean!) {\n    meta: metaUrl(locale: $locale, domain: "www", url: "/videos") {\n        title\n    }\n    latest: videos(locale: $locale, limit: 3, finder: "trailers")\n        @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    rdo: videos(locale: $locale, tagId: 736) @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtao: videos(locale: $locale, tagId: 702) @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    gtaosessions: videos(\n        locale: $locale\n        finder: "grandTheftAutoOnlineSesssionsEpisodesVideos"\n    ) @include(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    games(locale: $locale, finder: "hasVideos") @include(if: $index) {\n        results {\n            id\n            title_slug\n            fob_640\n        }\n    }\n    gameVideos: videos(locale: $locale, gameId: $gameId) @skip(if: $index) {\n        results {\n            ...videoFields\n        }\n    }\n    game(locale: $locale, id: $gameId) @skip(if: $index) {\n        title\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      i.definitions = i.definitions.concat(n(6921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var l = {};

      function d(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), l[e.name.value] = a
        }
      })), e.exports = i, e.exports.VideosList = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = l[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (l[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = d(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "VideosList")
    }
  }
]);