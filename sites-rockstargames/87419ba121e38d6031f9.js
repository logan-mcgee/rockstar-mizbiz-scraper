(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [948], {
    7087: (e, a, n) => {
      "use strict";
      n.r(a), n(7842);
      var i = n(6331),
        t = n(4690),
        d = n.n(t),
        l = n(1224),
        s = n(6026),
        r = n(2916),
        c = n(8976),
        o = n(8008),
        m = n(5269),
        u = n.n(m),
        f = n(4859),
        k = n(9929),
        v = n(1968),
        g = n(1458),
        b = n(6711),
        p = n(1570),
        h = n(585),
        N = n(3657);
      const S = "f4b487106fc9db70d6f18ca5eb38255a12f2",
        y = "f4b487106fc9db70b9bb09c7276c243a56c3";
      var x = n(9657),
        j = n(9706);
      const w = e => {
          let {
            games: a,
            t: n
          } = e;
          return (0, j.jsxs)("section", {
            className: "f4b487106fc9db70d4fbf3aecb2463732aad",
            children: [(0, j.jsx)("h3", {
              className: S,
              children: (0, j.jsx)(c.A, {
                to: "newswire",
                "aria-label": n("Featured Games"),
                children: n("Featured Games")
              })
            }), (0, j.jsx)("div", {
              className: y,
              children: a.map((e => (0, j.jsx)(c.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, j.jsx)(c.Button, {
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
        F = e => {
          let {
            posts: a,
            t: n
          } = e;
          return (0, j.jsxs)("section", {
            className: "f4b487106fc9db70dbbf6e442299737a36e0",
            children: [(0, j.jsx)("h3", {
              className: S,
              children: (0, j.jsx)(c.A, {
                to: "newswire",
                "aria-label": n("Newswire"),
                children: n("Newswire")
              })
            }), (0, j.jsx)(c.NewswireBlocks, {
              className: y,
              posts: a,
              noSpecialOrder: !0
            }), (0, j.jsx)(c.Button, {
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
        V = (0, k.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: n
          } = (0, f.useQuery)(x.Home, {
            autoSetLoading: !0
          });
          if (!n) return null;
          const {
            games: i,
            posts: t,
            videos: d
          } = n;
          return (0, j.jsxs)("div", {
            className: "f4b487106fc9db70c4b20405ad56a3b4dd00",
            children: [(0, j.jsx)(c.VideoCarousel, {
              videos: d.results,
              t: a
            }), (0, j.jsxs)("div", {
              className: "f4b487106fc9db70f9563b32021f220a9ca2",
              children: [(0, j.jsx)(F, {
                posts: t.results,
                t: a
              }), (0, j.jsx)(w, {
                games: i.results,
                t: a
              })]
            })]
          })
        })),
        _ = (0, k.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: n,
            setNormalLogo: i
          } = (0, N.useRockstarLocalState)();
          return (0, s.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            i(!0), n()
          })), []), (0, j.jsx)("div", {
            className: "f4b487106fc9db70f7903f781c69344545c0",
            children: (0, j.jsx)(c.NewswireList, {
              t: a
            })
          })
        }));
      var T = n(4524),
        E = n.n(T);
      const A = (0, k.withTranslations)((e => {
          let {
            t: a
          } = e;
          const n = (0, r.useParams)(),
            {
              setBreadcrumb: i,
              setNormalLogo: t
            } = (0, N.useRockstarLocalState)();
          return (0, s.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), i()
          })), []), (0, j.jsx)(E(), {
            idHash: String(n.articleId)
          })
        })),
        D = "f4b487106fc9db70cf17a6d004f287e319c2";
      var $ = n(8265),
        I = n.n($);
      const L = (0, k.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: n,
          setNormalLogo: i
        } = (0, N.useRockstarLocalState)(), t = (0, k.useQueryParams)(), [d, l] = (0, s.useState)({}), {
          data: r
        } = (0, f.useQuery)(I(), {
          variables: d,
          skip: !Object.entries(d).length,
          autoSetLoading: !0
        });
        if ((0, s.useEffect)((() => (n([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            n()
          })), []), (0, s.useEffect)((() => {
            l({
              ...d,
              type: t.get("type"),
              gameId: parseInt(t.get("gameId") ?? 0),
              index: null === t.get("type")
            })
          }), [t.get("type"), t.get("gameId")]), (0, s.useEffect)((() => (i(!1), () => i(!0))), []), !r) return null;
        if (r?.game && r?.gameVideos) return (0, j.jsx)("div", {
          className: D,
          children: (0, j.jsx)(c.VideoList, {
            vids: r.gameVideos.results,
            title: a("Videos from %s").replace("%s", r.game.title)
          })
        });
        const {
          games: o,
          gtao: m,
          gtaosessions: u,
          latest: v,
          rdo: g
        } = r;
        return (0, j.jsx)("div", {
          className: D,
          children: d.type ? "" : (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)(c.VideoCarousel, {
              videos: v.results,
              t: a
            }), (0, j.jsxs)("div", {
              className: "f4b487106fc9db70f8094f84e208d7bd6984",
              children: [(0, j.jsx)(c.VideoList, {
                vids: g.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, j.jsx)(c.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, j.jsx)(c.VideoList, {
                vids: u.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, j.jsx)(c.VideoList, {
                games: o,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var C = n(4224),
        q = n(5810);
      const G = (0, k.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setNormalLogo: n,
          setBreadcrumb: i,
          setTitle: t
        } = (0, N.useRockstarLocalState)(), {
          videoId: d
        } = (0, r.useParams)(), {
          data: l
        } = (0, f.useQuery)(q.Video, {
          variables: {
            id: Number(d)
          },
          autoSetLoading: !0
        });
        if ((0, s.useEffect)((() => (i([{
            href: "/videos",
            title: a("Videos")
          }]), n(!1), () => {
            n(!0), i()
          })), []), (0, s.useEffect)((() => {
            l && t(`${l.video.game.title} - ${l.video.title}`)
          }), [l]), !l) return null;
        const {
          video: o,
          related: m
        } = l;
        return (0, j.jsxs)(j.Fragment, {
          children: [(0, j.jsx)(C.PlayerWithInfo, {
            video: o,
            wrapper: !1
          }), m?.results?.length ? (0, j.jsx)(c.VideoList, {
            vids: m.results,
            title: a("Related Videos")
          }) : ""]
        })
      }));
      var O = n(4171),
        P = n.n(O);
      const B = (0, k.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: n
        } = (0, N.useRockstarLocalState)(), {
          data: i
        } = (0, f.useQuery)(P(), {
          autoSetLoading: !0
        }), t = i?.games ?? null;
        return (0, s.useEffect)((() => (n([{
          href: "/games",
          title: a("Games")
        }]), () => n())), [t]), t ? (0, j.jsx)("div", {
          className: "f4b487106fc9db70bcb5b082e1fa4d2e670f",
          children: t.results.map((e => (0, j.jsx)(c.GameCard.Link, {
            game: e
          }, e.title_slug)))
        }) : null
      }));
      var R = n(6345),
        z = n.n(R);
      const U = e => {
          let {
            game: a,
            t: n
          } = e;
          const {
            purchases: i,
            digital_purchases: t
          } = a, d = i.length + t.length;
          if (0 === d) return null;
          const l = (0, j.jsx)(j.Fragment, {
              children: t.map((e => (0, j.jsx)(c.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            s = (0, j.jsx)(j.Fragment, {
              children: i.map((e => (0, j.jsx)(c.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (d > 1) return (0, j.jsxs)(c.Dropdown, {
            title: n("Buy Now"),
            children: [l, s]
          });
          const r = i.length ? i[0] : t[0];
          return r?.href ? (0, j.jsx)(c.Button, {
            to: r.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: n("Buy Now")
          }) : null
        },
        M = e => {
          let {
            game: a
          } = e;
          return (0, j.jsx)("h2", {
            className: "f4b487106fc9db70b458fb38d5d5e7c6f8db",
            children: a.title
          })
        },
        H = e => {
          let {
            game: a,
            t: n
          } = e;
          const i = [],
            t = [],
            d = ["libertycitystories", "vicecitystories"].includes(a.title_slug);
          return a.developers.map((e => {
            t.push(e.title)
          })), a.platforms.map((e => {
            i.push(e.name)
          })), (0, j.jsx)(X, {
            title: n("Specifications"),
            children: (0, j.jsxs)("div", {
              className: "f4b487106fc9db70ba71fbd1ce867d9f1b0e",
              children: [(0, j.jsx)(Y, {
                title: n("Developer"),
                children: t.join(", ")
              }), (0, j.jsx)(Y, {
                title: n("Platform"),
                children: i.join(", ")
              }), (0, j.jsx)(Y, {
                title: n("Release Date"),
                children: a.release_date_in_words
              }), (0, j.jsxs)("dl", {
                className: "f4b487106fc9db70e2d41c68ae18421e2a5f",
                children: [(0, j.jsx)("dt", {
                  children: n("Rating")
                }), (0, j.jsxs)("dd", {
                  className: "f4b487106fc9db70f3cff5f2b25aed04854d",
                  children: [(0, j.jsx)(c.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), d ? (0, j.jsx)("div", {
                    className: "f4b487106fc9db70c2050488c218a41dd0ae"
                  }) : ""]
                })]
              })]
            })
          })
        },
        Q = e => {
          let {
            screens: a,
            t: n
          } = e;
          return (0, j.jsx)(X, {
            c: !0,
            title: n("Screens"),
            children: (0, j.jsx)("div", {
              className: "f4b487106fc9db70b470979231a9d33f7cc0",
              children: a.map((e => (0, j.jsx)("div", {
                style: {
                  backgroundImage: `url(${e.file})`
                }
              }, e.file)))
            })
          })
        },
        K = e => {
          let {
            game: a,
            t: n
          } = e;
          const [i, t] = (0, s.useState)(!1), d = "<br>", l = (0, j.jsx)("p", {
            dangerouslySetInnerHTML: {
              __html: a.description
            }
          }), r = a.description.includes(d);
          return (0, j.jsx)(X, {
            className: "f4b487106fc9db70f5fbd22d717e2808c737",
            title: n("Game Description"),
            children: r ? (0, j.jsxs)(j.Fragment, {
              children: [i ? l : (0, j.jsx)("p", {
                children: a.description.split(d)[0]
              }), " ", (0, j.jsx)(c.Button, {
                context: "secondary",
                onClick: () => t(!i),
                children: n(i ? "Read Less" : "Read More")
              })]
            }) : l
          })
        },
        W = e => {
          let {
            game: a,
            posts: n,
            t: i
          } = e;
          return (0, j.jsxs)(X, {
            title: i("Latest News"),
            className: "f4b487106fc9db70b4f97b4f531812bfd9e6",
            children: [(0, j.jsx)("div", {
              className: "f4b487106fc9db70d1ad1a52007bd6cbf951",
              children: n.map((e => (0, j.jsx)(c.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, j.jsx)(c.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": `${a.title} - More Click`,
              to: `/newswire?tag_id=${a.tags[0].id}`,
              context: "secondary",
              children: i("Read more at the Rockstar Newswire")
            })]
          })
        },
        J = e => {
          let {
            game: a,
            videos: n,
            t: i
          } = e;
          return (0, j.jsxs)(X, {
            title: i("Latest Videos"),
            className: "f4b487106fc9db70d2a4e35a02a6f60bc3c2",
            children: [(0, j.jsx)("div", {
              className: "f4b487106fc9db70f881b1c3b2f5ba8065fc",
              children: n.map((e => (0, j.jsx)(c.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, j.jsx)(c.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: i("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        Y = e => {
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
        X = e => {
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
              className: "f4b487106fc9db70c06aca25ab017de6a9ff",
              children: a
            }) : "", i]
          })
        },
        Z = (0, k.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: n,
            setTitle: i
          } = (0, N.useRockstarLocalState)(), t = (0, r.useParams)(), {
            data: d
          } = (0, f.useQuery)(z(), {
            variables: {
              titleSlug: t.gameTitlelug
            },
            autoSetLoading: !0
          }), l = d?.game ?? null;
          return (0, s.useEffect)((() => (l && i(l.title), n([{
            href: "/games",
            title: a("Games")
          }]), () => {
            n()
          })), [l]), l ? (0, j.jsxs)("div", {
            className: "f4b487106fc9db70ea5fa63b89a62219113d",
            children: [(0, j.jsxs)("div", {
              className: "f4b487106fc9db70e3dd0b8721e5b51d0e97",
              children: [(0, j.jsxs)("div", {
                className: "f4b487106fc9db70b76354fb05b980942662",
                children: [(0, j.jsx)(M, {
                  game: l,
                  t: a
                }), (0, j.jsxs)("div", {
                  className: "f4b487106fc9db70e80d6fc21095d8e57319",
                  children: [(0, j.jsx)(U, {
                    game: l,
                    t: a
                  }), l.has_official_site && (0, j.jsx)(c.Button, {
                    to: l.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": l.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, j.jsx)(c.GameCard.Art, {
                imgSrc: l.fob_1280,
                titleSlug: l.title_slug
              })]
            }), (0, j.jsxs)("div", {
              className: "f4b487106fc9db70be5ed38ac3168dd2df67",
              children: [(0, j.jsx)(K, {
                game: l,
                t: a
              }), l.tags.length && l.tags[0].videos.length ? (0, j.jsx)(J, {
                game: l,
                videos: l.tags[0].videos,
                t: a
              }) : "", l.tags.length && l.tags[0].posts.length ? (0, j.jsx)(W, {
                game: l,
                posts: l.tags[0].posts,
                t: a
              }) : "", l.screens.length ? (0, j.jsx)(Q, {
                screens: l.screens,
                t: a
              }) : "", (0, j.jsx)(H, {
                game: l,
                t: a
              })]
            })]
          }) : null
        })),
        ee = "f4b487106fc9db70be66077bb086d9ba252e",
        ae = "f4b487106fc9db70a4315a4e64cdce6b042d";
      var ne = n(923),
        ie = n.n(ne);
      const te = e => {
          let {
            loading: a,
            searchResponse: n,
            searchTerm: i,
            activeTab: t,
            t: d
          } = e;
          const [l, s] = (0, r.useSearchParams)();
          let o;
          switch (t) {
            case "posts":
              o = n.posts.results.map((e => (0, j.jsx)(c.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              o = n.games.results.map((e => (0, j.jsx)(c.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              o = n.videos.results.map((e => (0, j.jsx)(c.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              o = null
          }
          return (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)("section", {
              className: "f4b487106fc9db70e8d247c95ca7e14d1e5e",
              children: Object.entries(n).map((e => {
                let [a, n] = e;
                return n?.paging?.count > 0 ? (0, j.jsx)(de, {
                  tabName: a,
                  activeTab: t,
                  searchTerm: i,
                  count: n?.paging?.count,
                  t: d
                }, a) : ""
              }))
            }), a ? "" : (0, j.jsx)("section", {
              className: "f4b487106fc9db70fc198d45f7f447c595e1",
              children: (0, j.jsx)("div", {
                className: "f4b487106fc9db70e64c63abd1c1f6848ef5",
                children: o
              })
            }), n[t]?.paging ? (0, j.jsx)("section", {
              className: "f4b487106fc9db70a16d89b2b769baa98922",
              children: (0, j.jsx)(c.Paging, {
                data: n[t].paging,
                onPageUpdate: e => {
                  s({
                    ...Object.fromEntries([...l]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        de = e => {
          let {
            activeTab: a,
            count: n,
            searchTerm: i,
            tabName: t,
            t: d
          } = e;
          return (0, j.jsxs)(c.A, {
            className: a === t ? "f4b487106fc9db70b573a6a73e91f0b15e2f" : "",
            to: `/search?q=${i}&tab=${t}&sort=__searchScore&page=1`,
            children: [d(t), " ", (0, j.jsxs)("span", {
              children: ["(", n, ")"]
            })]
          }, t)
        },
        le = (0, k.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              search: n
            },
            setSearch: i,
            setTitle: t
          } = (0, N.useRockstarLocalState)(), d = (0, k.useQueryParams)(), [l, r] = (0, s.useState)(null), [o, m] = (0, s.useState)({}), [u, v] = (0, s.useState)(d.get("tab") ?? null), {
            data: g = {},
            loading: b
          } = (0, f.useQuery)(ie(), {
            variables: o,
            skip: !Object.entries(o).length || !o.q,
            autoSetLoading: !0
          });
          return (0, s.useEffect)((() => {
            const e = {
              q: d.get("q"),
              page: Number(d.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            m(e), i(d.get("q"))
          }), [d.get("q"), d.get("page"), d.get("tab"), u]), (0, s.useEffect)((() => {
            const e = Object.entries(g).find((e => {
              let [a, n] = e;
              return n?.paging?.count > 0
            }))?.[0];
            v(d.get("tab") ?? e ?? null)
          }), [g, d.get("tab")]), (0, s.useEffect)((() => {
            void 0 !== g?.games?.paging?.count && (r((g?.games?.paging?.count ?? 0) + (g?.videos?.paging?.count ?? 0) + (g?.posts?.paging?.count ?? 0)), t(g?.meta?.title.replace("%s", n)))
          }), [g, u]), Object.entries(o).length ? o.q ? null === l ? null : (0, j.jsxs)("div", {
            className: ee,
            children: [(0, j.jsxs)("section", {
              className: ae,
              children: [(0, j.jsxs)("div", {
                className: "f4b487106fc9db70ed56a1f8c70a89879ed0",
                children: [(0, j.jsxs)("h4", {
                  children: [b ? a("search-active") : "", b || l ? b ? "" : a("Search results for:") : a("search-over-empty")]
                }), (0, j.jsx)("h1", {
                  children: a("%s").replace("%s", d.get("q"))
                })]
              }), (0, j.jsx)(c.SearchBox, {})]
            }), !b && l ? (0, j.jsx)(te, {
              searchResponse: g,
              searchTerm: n,
              activeTab: u,
              t: a
            }) : ""]
          }) : (0, j.jsx)("div", {
            className: ee,
            children: (0, j.jsxs)("section", {
              className: ae,
              children: [(0, j.jsx)("h3", {
                children: a("Search")
              }), (0, j.jsx)(c.SearchBox, {})]
            })
          }) : null
        }));
      var se = n(1719),
        re = n.n(se);
      const ce = {
        companyInfo: "f4b487106fc9db70fdf7ad7390432425a3f9",
        top: "f4b487106fc9db70c9f0c63e60bbcb56c5a8",
        content: "f4b487106fc9db70f2feda0369c0c992f672",
        nav: "f4b487106fc9db70e7fac1a1100cb55ef25e",
        us: "f4b487106fc9db70cc4fee3b0281f4452e44",
        br: "f4b487106fc9db70de53608056aadcab2de7",
        cz: "f4b487106fc9db70d90e2a3649251d9f9b74",
        de: "f4b487106fc9db70f379ae83b1d2e5e3667a",
        es: "f4b487106fc9db70f53ac2b87e4b0e88f4cb",
        fr: "f4b487106fc9db70a43c6a887dd3b7128b40",
        it: "f4b487106fc9db70dd4e51987c1ff36db3f4",
        jp: "f4b487106fc9db70f78303397afb6f93d0e1",
        kr: "f4b487106fc9db70b3454c6030e73489775f",
        mx: "f4b487106fc9db70dd782b5cd8629ed94814",
        nl: "f4b487106fc9db70c8c30c11b7bbbc152ebb",
        pl: "f4b487106fc9db70bf12aa0dd14556d0b41d",
        ru: "f4b487106fc9db70ff19da6ef088e11bf9fa",
        sa: "f4b487106fc9db70a226907c61648019cded",
        tw: "f4b487106fc9db70bce44d59902ad4e6d892",
        zh: "f4b487106fc9db70a0f363760a76977e97a8",
        cookieSettingsButton: "f4b487106fc9db70f5a3056a97f4f3ca6674",
        cookieSettingsModal: "f4b487106fc9db70c61473be173bf0339bad",
        open: "f4b487106fc9db70ed6ad495e3a2c0172a9d",
        settings: "f4b487106fc9db70b94a8986c7c72543b62b",
        setting: "f4b487106fc9db70d53fc16a5d83bbd0112f",
        optional: "f4b487106fc9db70a4ac7a6cb5436b3df4d7",
        dot: "f4b487106fc9db70ba066f4a55aa02437346",
        optionalOn: "f4b487106fc9db70b39dcb057d9e64f3ffa9",
        rtl: "f4b487106fc9db70ae70ef252c5b38a62b36"
      };
      var oe = n(8138),
        me = n.n(oe);
      const ue = (0, c.withSearchbarErrorBoundary)((0, k.withTranslations)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: n,
            titleKey: i,
            jsonType: t,
            t: d
          } = e;
          const l = (0, r.useNavigate)(),
            o = (0, r.useLocation)(),
            m = (0, k.useLocale)(),
            u = (0, k.useQueryParams)(),
            v = (0, s.useRef)(),
            g = (e, a) => {
              const n = a ?? e.target.hash,
                i = document.getElementById(n.replace("#", "")),
                t = document.getElementsByName(n.replace("#", ""))?.[0],
                d = i ?? t ?? null,
                s = u.get("country");
              if (e) {
                const a = `${o.pathname}${u.get("country")?`?country=${s}`:""}${n}`;
                l(a), e.preventDefault()
              }
              d && window.scroll(0, d.offsetTop - v.current.getBoundingClientRect().height - 60)
            },
            [b, p] = (0, s.useState)({}),
            {
              data: h,
              loading: N
            } = (0, f.useQuery)(me(), {
              variables: b,
              skip: !Object.entries(b).length,
              autoSetLoading: !0
            });
          (0, s.useEffect)((() => {
            const e = u.get("country") ?? u.get("locale") ?? null,
              a = void 0 === n,
              i = a && null !== e ? e : a && m.split("_").length > 1 ? "hans" === m.split("_")[1] ? m.split("_")[0] : m.split("_")[1] : m;
            p({
              jsonType: t,
              jsonLocale: i || "us",
              metaUrl: `/${t}`
            })
          }), [u.get("country"), u.get("locale")]), (0, s.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = u.get("country"),
                    n = e.href.split("#")[1],
                    i = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${i}${o.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${n}`)
                }
              })(e), e.addEventListener("click", (e => {
                g(e, !1)
              }))
            })), "" !== o.hash && setTimeout((() => {
              g(!1, o.hash)
            }), 10)
          }), [h]);
          const {
            content: S
          } = h?.companyInfo ?? "";
          return (0, j.jsxs)("div", {
            className: ce.companyInfo,
            "data-locale": b.jsonLocale,
            children: [(0, j.jsxs)("section", {
              className: ce.top,
              ref: v,
              children: [(0, j.jsx)("h1", {
                children: d(i)
              }), "undefined" !== n && n ? "" : (0, j.jsx)("nav", {
                className: ce.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => (0, j.jsx)(c.A, {
                  to: `${o.pathname}?country=${e}`,
                  className: ce[e]
                }, a)))
              })]
            }), h && !N ? (0, j.jsx)("section", {
              className: ce.content,
              children: "cookies" === t && h ? (0, j.jsx)(re(), {
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
        fe = () => (0, j.jsx)(ue, {
          jsonType: "conduct",
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
        ke = () => (0, j.jsx)(ue, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        ve = () => (0, j.jsx)(ue, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        ge = () => (0, j.jsx)(ue, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        be = () => (0, j.jsx)(ue, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        pe = () => (0, j.jsx)(ue, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        he = e => {
          let {
            t: a
          } = e;
          return (0, j.jsx)(c.Button, {
            className: ce.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        Ne = () => (0, j.jsx)(ue, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, k.withTranslations)(he)
        }),
        Se = () => (0, j.jsx)(ue, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        ye = {
          manuals: "f4b487106fc9db70cb1e49cfce02bacb9f17",
          list: "f4b487106fc9db70cad229be0a8aebc584fc",
          item: "f4b487106fc9db70a23570e3dc54680009c2",
          img: "f4b487106fc9db70e8c3fb8a8209b3eee363",
          dropdown: "f4b487106fc9db70dd56d911b8cdb77d58ac",
          items: "f4b487106fc9db70f272cf6b78b0c58e91b4",
          detail: "f4b487106fc9db70e70fb589a8d25388ea11",
          rockstar: "f4b487106fc9db70f764d9f6eaabdd8fb5d9",
          music: "f4b487106fc9db70f56cc1d0797f336c02d2",
          gtaiv: "f4b487106fc9db70c9907907754a9559d40c",
          vcs: "f4b487106fc9db70fb05aabbc5e1455d7480",
          tlad: "f4b487106fc9db70f9bfee3c5e28e43c64db",
          bogt: "f4b487106fc9db70cb2a17541d6a5bd379eb",
          eflc: "f4b487106fc9db70f07f9a54f3303e5b5ae8",
          gameLogo: "f4b487106fc9db70c9a38509f2c92a5147f2",
          warriors: "f4b487106fc9db70a1f9c97ab4ced426b353",
          album: "f4b487106fc9db70e360a0996dbc6ecb942e",
          driver: "f4b487106fc9db70fafd97e9fd79d732d317",
          criticize: "f4b487106fc9db70da6b4fb69c4004d8f01f",
          footsteps: "f4b487106fc9db70e3e5e16c132e3b9c2821",
          begood: "f4b487106fc9db70ab21b38bc89aeb88c185",
          wheelsofsteel: "f4b487106fc9db70b1f8c9ea0fc9ccc113e6",
          cantgetenough: "f4b487106fc9db70eeb089740623c21af506",
          theweekend: "f4b487106fc9db70fa49e05daf31f1c45c3e",
          acid: "f4b487106fc9db70fdd8024aa3200c9956b0",
          elmalo: "f4b487106fc9db70aa298aa7d7fd61084a76",
          ilikeit: "f4b487106fc9db70f1ca69668402acbcef57",
          migente: "f4b487106fc9db70ca18bb258a10bc38f4e1",
          quimbara: "f4b487106fc9db70e9d7c1ef8f88dc30ccf7",
          revolt: "f4b487106fc9db70da38e55d1db4a04fbd28",
          credit: "f4b487106fc9db70e6d33865a2b0cad13fec",
          additional: "f4b487106fc9db70df339a04f89bce71682c",
          logo: "f4b487106fc9db70d27c7daf84749f7294f4",
          beat: "f4b487106fc9db70b7019cc7b55154c7c941",
          "liberty-rock": "f4b487106fc9db70b430d6e0f9853ce8f1f2",
          lchc: "f4b487106fc9db70c5358f1cedf67dc7b2c7",
          "electro-choc": "f4b487106fc9db70b153f575c5a660bd557b",
          "international-funk": "f4b487106fc9db70c369082539a25e34be34",
          vladivostok: "f4b487106fc9db70d4c5c5f2354590da1636",
          vibe: "f4b487106fc9db70fb2433804efe7f8c491d",
          "tuff-gong": "f4b487106fc9db70c45db70705fdc737c9e9",
          "san-juan": "f4b487106fc9db70d96f42fbcea4d72f1c0f",
          "radio-broker": "f4b487106fc9db70e6f72eaee100fcba344b",
          "massive-b": "f4b487106fc9db70b9dd6ebae49e77d70669",
          k109: "f4b487106fc9db70f2d174eff39585d633c5",
          journey: "f4b487106fc9db70eee7a9a9f87346a5a789",
          jnr: "f4b487106fc9db70d58773295424fd4a6474",
          interiors: "f4b487106fc9db70f2ca04a38a7c73476b21",
          fusion: "f4b487106fc9db70aa9ec3778aec504b5e38",
          classics: "f4b487106fc9db70b330bd79e5c1e2c90c06",
          "vice-city": "f4b487106fc9db70f0c4d20e395d68c01223",
          "self-actualization": "f4b487106fc9db70dab79bc3639900734ce8",
          ramjam: "f4b487106fc9db70dabfc6a419fe0ff69d7e",
          emotion: "f4b487106fc9db70e647bab5e3e97ebd0c3a",
          flash: "f4b487106fc9db70a11a4a48b2cce90a0b23",
          fresh: "f4b487106fc9db70c9c555c3cd312db2e22e",
          paradise: "f4b487106fc9db70cfb4122309bf4c994515",
          espantoso: "f4b487106fc9db70d2880c00a8e7c29e0ada",
          vcfl: "f4b487106fc9db70c384e124115da4ff0c8d",
          vrock: "f4b487106fc9db70c84a7ace91a9cf1fd8c8",
          wave: "f4b487106fc9db70d0fedaf40b08ec500883",
          warriorsCredit: "f4b487106fc9db70aee6d517dc62f3032703"
        };
      var xe = n(3051),
        je = n.n(xe);
      const we = (0, k.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          data: n
        } = (0, f.useQuery)(je(), {
          autoSetLoading: !0
        });
        if (!n) return null;
        const {
          manuals: i
        } = n;
        return (0, j.jsxs)("div", {
          className: ye.manuals,
          children: [(0, j.jsx)("h2", {
            children: a("Manuals")
          }), (0, j.jsx)("div", {
            className: ye.list,
            children: i.map((e => (0, j.jsxs)("div", {
              className: ye.item,
              children: [(0, j.jsx)("div", {
                className: ye.img,
                style: {
                  backgroundImage: `url(${e.game.fob_640})`
                }
              }), (0, j.jsx)(c.Dropdown, {
                title: e.game.title,
                className: ye.dropdown,
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
      var Fe = n(3046),
        Ve = n.n(Fe);
      const _e = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: n
          } = Ve();
          return (0, j.jsxs)("div", {
            className: ye.detail,
            children: [(0, j.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: n(a.content)
              }
            }), a.album_cover ? (0, j.jsx)("div", {
              className: [ye.album, ye[a.album_cover]].join(" ")
            }) : "", (0, j.jsx)(c.A, {
              to: "/",
              children: (0, j.jsx)("div", {
                className: ye.rockstar
              })
            })]
          })
        },
        Te = (0, k.withTranslations)((e => {
          let {
            stations: a,
            gameId: n,
            t: i
          } = e;
          const {
            sanitize: t
          } = Ve();
          return (0, j.jsxs)(j.Fragment, {
            children: [(0, j.jsx)("h1", {
              children: i("Music Credits")
            }), a && 55 === a[0].game_id ? (0, j.jsxs)("div", {
              className: ye.warriorsCredit,
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
              className: [ye.list, a && 55 === a[0].game_id ? ye.warriors : ""].join(" "),
              children: a && a.map(((e, d) => (0, j.jsxs)("div", {
                className: ye.station,
                children: [55 !== e.game_id ? (0, j.jsx)("div", {
                  className: [ye.logo, ye[e.slug]].join(" ")
                }) : (0, j.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, j.jsxs)("div", {
                  className: ye.credit,
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
                    className: ye.additional,
                    children: (0, j.jsx)(c.A, {
                      to: `music?gameId=${n}&stationId=${a[d].id}&songId=${e.id}`,
                      children: i("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var Ee = n(3499),
        Ae = n.n(Ee);
      const De = () => {
          const e = (0, k.useQueryParams)(),
            a = Number(e.get("gameId")),
            n = Number(e.get("songId")),
            i = Number(e.get("stationId"));
          let t = !1;
          const {
            data: d
          } = (0, f.useQuery)(Ae(), {
            variables: {
              gameId: a
            },
            autoSetLoading: !0
          });
          if (!d) return null;
          const {
            musicStations: l
          } = d;
          return Object.keys(l).length, l.map((e => {
            e.id === i && e.music_credits.map((e => {
              e.id === n && (t = e.music_detail)
            }))
          })), (0, j.jsxs)("div", {
            className: [ye.music, 25 === a ? ye.gtaiv : 26 === a ? ye.tlad : 32 === a ? ye.bogt : 28 === a ? ye.eflc : 34 === a ? ye.vcs : ""].join(" "),
            children: [(0, j.jsx)("div", {
              className: [ye.gameLogo, 26 === a ? ye.tlad : 32 === a ? ye.bogt : 28 === a ? ye.eflc : 25 === a ? ye.gtaiv : 34 === a ? ye.vcs : 55 === a ? ye.warriors : ""].join(" ")
            }), a && l ? i && n && t ? (0, j.jsx)(_e, {
              detail: t
            }) : (0, j.jsx)(Te, {
              stations: l,
              gameId: a
            }) : null]
          })
        },
        $e = (0, k.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, j.jsxs)("div", {
            className: "f4b487106fc9db70f5a3fd19ef32d4a7c9fb",
            children: [(0, j.jsx)("section", {
              className: "f4b487106fc9db70d6cad5cd00b5df35f739",
              children: (0, j.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, j.jsxs)("section", {
              className: "f4b487106fc9db70fcf7d4f6f4fee3e8dc0e",
              children: [(0, j.jsx)("p", {
                children: a("contact.intro")
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.technical")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.career")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.legal")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, j.jsxs)("p", {
                children: [(0, j.jsx)("span", {
                  children: a("contact.latest")
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, j.jsx)("br", {}), (0, j.jsx)(c.A, {
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
        Ie = {
          maint: "f4b487106fc9db70be0ddcc1c6860acb4d98",
          content: "f4b487106fc9db70a8c1a7d64263dcfa3aed",
          logo: "f4b487106fc9db70e1d82fca0195b898bef7"
        },
        Le = () => (0, j.jsx)("div", {
          className: Ie.maint,
          children: (0, j.jsxs)("div", {
            className: Ie.content,
            children: [(0, j.jsx)("div", {
              className: Ie.logo
            }), (0, j.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, j.jsx)("a", {
              className: Ie.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        Ce = () => (0, j.jsxs)("div", {
          className: "f4b487106fc9db70b39a5d752efba84c2088",
          children: [(0, j.jsx)("div", {
            className: "f4b487106fc9db70abd863939e037fa8cd4a"
          }), (0, j.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        qe = {
          "frontline-heroes": (0, s.lazy)((() => n.e(471).then(n.bind(n, 9471)))),
          "gta-tv": (0, s.lazy)((() => n.e(414).then(n.t.bind(n, 3414, 23)))),
          "modules-core-gif-viewer": (0, s.lazy)((() => n.e(774).then(n.t.bind(n, 2774, 23)))),
          "modules-core-videoplayer": (0, s.lazy)((() => n.e(876).then(n.t.bind(n, 9876, 23)))),
          "rockstar-tv": (0, s.lazy)((() => n.e(107).then(n.t.bind(n, 4107, 23)))),
          "screenshot-viewer": (0, s.lazy)((() => n.e(142).then(n.t.bind(n, 1142, 23)))),
          "sites-careers": (0, s.lazy)((() => n.e(710).then(n.t.bind(n, 1710, 23)))),
          "sites-gta-gen9": (0, s.lazy)((() => n.e(291).then(n.t.bind(n, 6291, 23)))),
          "sites-gta-trilogy": (0, s.lazy)((() => n.e(829).then(n.t.bind(n, 3829, 23)))),
          "sites-red-dead-online": (0, s.lazy)((() => n.e(308).then(n.t.bind(n, 308, 23)))),
          "sites-rockstargames-downloads": (0, s.lazy)((() => n.e(70).then(n.t.bind(n, 1070, 23))))
        },
        Ge = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = qe[e],
            {
              setHeaderHidden: i
            } = (0, N.useRockstarLocalState)();
          return (0, j.jsx)(s.Suspense, {
            fallback: "",
            children: (0, j.jsx)(n, {
              setHeaderHidden: i,
              config: a
            })
          })
        },
        Oe = (0, c.withSearchbarErrorBoundary)((() => {
          const e = [{
            path: "/",
            element: (0, j.jsx)(V, {})
          }, {
            path: "/careers-privacy",
            element: (0, j.jsx)(be, {})
          }, {
            path: "/ccpa",
            element: (0, j.jsx)(Se, {})
          }, {
            path: "/conduct",
            element: (0, j.jsx)(fe, {})
          }, {
            path: "/contact",
            element: (0, j.jsx)($e, {})
          }, {
            path: "/cookies",
            element: (0, j.jsx)(Ne, {})
          }, {
            path: "/corpinfo",
            element: (0, j.jsx)(ke, {})
          }, {
            path: "/eula",
            element: (0, j.jsx)(ve, {})
          }, {
            path: "/games",
            element: (0, j.jsx)(B, {})
          }, {
            path: "/games/:gameTitlelug",
            element: (0, j.jsx)(Z, {})
          }, {
            path: "/legal",
            element: (0, j.jsx)(ge, {})
          }, {
            path: "/gta-v/thankyou",
            element: (0, j.jsx)(h.Credits, {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: (0, j.jsx)(Ce, {})
          }, {
            path: "/reddeadonline/thankyou",
            element: (0, j.jsx)(h.Credits, {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Ge("sites-careers")
          }, {
            path: "/downloads/*",
            element: Ge("sites-rockstargames-downloads")
          }, {
            path: "/reddeadonline/*",
            element: Ge("sites-red-dead-online")
          }, {
            path: "/frontline-heroes",
            element: Ge("frontline-heroes")
          }, {
            path: "/gifs/:hashId",
            element: Ge("modules-core-gif-viewer")
          }, {
            path: "/gta-v/*",
            element: Ge("sites-gta-gen9", {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Ge("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: Ge("sites-gta-gen9", {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy",
            element: Ge("sites-gta-trilogy")
          }, {
            path: "/gtatv/*",
            element: Ge("gta-tv")
          }, {
            path: "/manuals",
            element: (0, j.jsx)(we, {})
          }, {
            path: "/manuals/music",
            element: (0, j.jsx)(De, {})
          }, {
            path: "/newswire",
            element: (0, j.jsx)(_, {})
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: (0, j.jsx)(A, {})
          }, {
            path: "/old-privacy",
            element: (0, j.jsx)(pe, {})
          }, {
            path: "/privacy",
            element: (0, j.jsx)(pe, {})
          }, {
            path: "/rockstartv/*",
            element: Ge("rockstar-tv")
          }, {
            path: "/screenshot-viewer/*",
            element: Ge("screenshot-viewer")
          }, {
            path: "/search",
            element: (0, j.jsx)(le, {})
          }, {
            path: "/socialclubmaintenance",
            element: (0, j.jsx)(Le, {})
          }, {
            path: "/videoplayer",
            element: Ge("modules-core-videoplayer")
          }, {
            path: "/videos",
            element: (0, j.jsx)(L, {})
          }, {
            path: "/videos/:videoId",
            element: (0, j.jsx)(G, {})
          }, {
            path: "*",
            element: (0, j.jsx)(c.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, r.useRoutes)(e)
        })),
        Pe = {
          main: "f4b487106fc9db70aaf63b52008f75924bfd",
          gameSite: "f4b487106fc9db70cd11032e8b42a51c2e09",
          "theme-std": "f4b487106fc9db70a11e15134625e6be7114",
          standalone: "f4b487106fc9db70c7d686e28fbcff5e154b",
          headerHidden: "f4b487106fc9db70cb24ea20571cdd3eeb64"
        },
        Be = (0, i.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, N.useRockstarLocalState)();
          return (0, s.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, j.jsx)("main", {
            role: "main",
            id: "main",
            className: [Pe.main, a ? Pe.standalone : "", e ? Pe.headerHidden : ""].join(" "),
            children: (0, j.jsx)(Oe, {})
          })
        })),
        Re = ((0, f.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        ze = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: !1,
          standalone: (["/careers", "/gifs", "/frontline-heroes", "/gtatv", "/rockstartv", "/screenshot-viewer", "/videoplayer"].find((e => Re.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        Ue = (0, f.makeVar)(ze),
        Me = window?.env?.graphEnv ?? "prod",
        He = e => {
          let a, {
            children: n
          } = e;
          return a = !0, (0, j.jsx)(c.ScrollTracker, {
            threshold: [25, 50, 75, 90, 100],
            children: n
          })
        },
        Qe = () => {
          const [e] = (0, o.useModal)(), a = (0, f.useBase)(), {
            state: {
              standalone: n,
              customFooter: i
            },
            setLoading: t,
            setTitle: d
          } = (0, k.useRockstarLocalState)();
          return (0, s.useEffect)((() => {
            window.addEventListener("message", (e => {
              const a = e.data?.type ?? null;
              "graph.titleUpdate" === a && d(e.data.title), "graph.loadingUpdate" === a && t(e.data.loading)
            }))
          }), [t, d]), (0, j.jsx)(He, {
            children: (0, j.jsx)(k.ResizeProvider, {
              children: (0, j.jsx)(v.ScrollProvider, {
                children: (0, j.jsx)(r.BrowserRouter, {
                  basename: a,
                  children: (0, j.jsx)(p.IntlProvider, {
                    children: (0, j.jsxs)(g.RockstarUserProvider, {
                      children: [(0, j.jsx)(h.AccessibilityButton, {}), e, (0, j.jsx)(c.ScrollToTop, {}), n ? "" : (0, j.jsx)(h.Header, {}), (0, j.jsx)(b.Menu, {}), (0, j.jsx)(Be, {}), n || i ? "" : (0, j.jsx)(h.FooterNav, {})]
                    })
                  })
                })
              })
            })
          })
        },
        {
          pingBearer: Ke
        } = (0, k.getScConfigForOrigin)(),
        We = (0, f.withReactiveState)((() => (0, j.jsx)(o.ModalProvider, {
          children: (0, j.jsx)(Qe, {})
        })), {
          state: Ue
        }),
        Je = (0, f.withRockstarGraph)(We, {
          env: Me,
          token: (0, f.makeVar)(null),
          tokenPing: Ke,
          tokenPingExpires: (0, f.makeVar)(null),
          typePolicies: {
            ...u()
          }
        }),
        Ye = window?.env?.gtmId ?? null,
        Xe = window?.env?.oneTrustId ?? null;
      (0, i.init)({
        id: Ye
      }), d()({
        id: Xe,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, l.s)(e).render((0, j.jsx)(Je, {}))
        }
      })
    },
    8138: e => {
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
        var d = i[a] || new Set,
          l = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "CompanyInfo")
    },
    9657: (e, a, n) => {
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

      function d(e) {
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
      i.definitions = i.definitions.concat(d(n(6077).definitions)), i.definitions = i.definitions.concat(d(n(6921).definitions));
      var s = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), s[e.name.value] = a
        }
      })), e.exports = i, e.exports.Home = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = s[a] || new Set,
          t = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = r(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "Home")
    },
    923: (e, a, n) => {
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

      function d(e) {
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
      i.definitions = i.definitions.concat(d(n(6077).definitions)), i.definitions = i.definitions.concat(d(n(6921).definitions)), i.definitions = i.definitions.concat(d(n(9349).definitions));
      var s = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), s[e.name.value] = a
        }
      })), e.exports = i, e.exports.Search = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = s[a] || new Set,
          t = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = r(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "Search")
    },
    4171: e => {
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
        var d = i[a] || new Set,
          l = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "GamesIndex")
    },
    6345: (e, a, n) => {
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

      function d(e) {
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
      i.definitions = i.definitions.concat(d(n(6077).definitions)), i.definitions = i.definitions.concat(d(n(6921).definitions));
      var s = {};

      function r(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), s[e.name.value] = a
        }
      })), e.exports = i, e.exports.GameInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [r(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = s[a] || new Set,
          t = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (s[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = r(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "GameInfo")
    },
    3051: e => {
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
        var d = i[a] || new Set,
          l = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "Manuals")
    },
    3499: e => {
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
        var d = i[a] || new Set,
          l = new Set,
          s = new Set;
        for (d.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            l.has(e) || (l.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return l.forEach((function(a) {
          var i = t(e, a);
          i && n.definitions.push(i)
        })), n
      }(a, "MusicStations")
    },
    8265: (e, a, n) => {
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

      function d(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          d(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          d(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          d(e, a)
        }))
      }
      i.definitions = i.definitions.concat(n(6921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var l = {};

      function s(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          d(e, a), l[e.name.value] = a
        }
      })), e.exports = i, e.exports.VideosList = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = l[a] || new Set,
          t = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (l[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = s(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "VideosList")
    },
    5810: (e, a, n) => {
      var i = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "Video"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
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
                value: "withTranslations"
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
            defaultValue: {
              kind: "BooleanValue",
              value: !1
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
                value: "video"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: "videoFields"
                  },
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created_formatted"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "created"
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
                    value: "agegated"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "group_type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "youtube_id"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "files"
                  },
                  name: {
                    kind: "Name",
                    value: "files_processed"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "resolution"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "sprite"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "src"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "default"
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
                value: "related"
              },
              name: {
                kind: "Name",
                value: "videos"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "relatedToId"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "limit"
                },
                value: {
                  kind: "IntValue",
                  value: "50"
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
                        value: "created_formatted"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "created"
                      },
                      arguments: [],
                      directives: []
                    }, {
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
                value: "translations"
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
                  value: "config"
                },
                value: {
                  kind: "StringValue",
                  value: "default",
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
                      value: "withTranslations"
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
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
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
          end: 774
        }
      };
      i.loc.source = {
        body: '#import "@rockstargames/graph-client/operations/fragments/video-fields.graphql"\n\nquery Video($id: Int!, $locale: String!, $withTranslations: Boolean! = false) {\n    video(id: $id, locale: $locale) {\n        ...videoFields\n        created_formatted\n        created\n        description\n        agegated\n        group_type\n        youtube_id\n        files: files_processed {\n            resolution\n            sprite\n            src\n            default\n        }\n    }\n    related: videos(relatedToId: $id, locale: $locale, limit: 50) {\n        results {\n            created_formatted\n            created\n            ...videoFields\n        }\n    }\n    translations(locale: $locale, config: "default")\n        @include(if: $withTranslations) {\n        key\n        value\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function d(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          d(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          d(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          d(e, a)
        }))
      }
      i.definitions = i.definitions.concat(n(6921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var l = {};

      function s(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          d(e, a), l[e.name.value] = a
        }
      })), e.exports = i, e.exports.Video = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = l[a] || new Set,
          t = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (l[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = s(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "Video")
    }
  }
]);