(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [90], {
    7265: (e, a, i) => {
      "use strict";
      i.r(a), i(7842);
      var n = i(6331),
        t = i(4690),
        s = i.n(t),
        r = i(7598),
        l = i(289),
        d = i(8530),
        c = i(8976),
        o = i(8008),
        m = i(5269),
        u = i.n(m),
        k = i(4859),
        g = i(9929),
        f = i(1968),
        v = i(1458),
        b = i(6711),
        p = i(9475),
        h = i(9817);
      const N = e => {
        let {
          locales: a,
          lang: i,
          children: n
        } = e;
        const t = (0, l.useMemo)((() => function(e) {
            const a = e.split(/[-_]/);
            return a[a.length - 1] = a[a.length - 1].toLowerCase(), a
          }(i)), [i]),
          s = (0, l.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, t[1])), [i, a]);
        return (0, h.jsx)(p.Z, {
          messages: s,
          locale: t[0],
          defaultLocale: "en",
          children: n
        }, t[0])
      };
      var S = i(3657),
        x = i(1570),
        j = i(9296);
      const y = "@rockstargames-sites-rockstargames-2f41663b9c098a92d6f18ca5eb38255a12f2",
        w = "@rockstargames-sites-rockstargames-2f41663b9c098a92b9bb09c7276c243a56c3";
      var F = i(8469);
      const V = e => {
          let {
            games: a,
            t: i
          } = e;
          return (0, h.jsxs)("section", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92d4fbf3aecb2463732aad",
            "data-testid": "featured-games",
            children: [(0, h.jsx)("h3", {
              className: y,
              children: (0, h.jsx)(c.A, {
                to: "newswire",
                "aria-label": i("Featured Games"),
                children: i("Featured Games")
              })
            }), (0, h.jsx)("div", {
              className: w,
              children: a.map((e => (0, h.jsx)(c.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, h.jsx)(c.Button, {
              role: "link",
              "aria-label": "Latest Games",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest Games",
              "data-gtm-label": "More Click",
              "data-testid": "view-more",
              to: "games",
              context: "secondary",
              children: i("View More")
            })]
          })
        },
        _ = e => {
          let {
            posts: a,
            t: i
          } = e;
          return (0, h.jsxs)("section", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92dbbf6e442299737a36e0",
            "data-testid": "newswire",
            children: [(0, h.jsx)("h3", {
              className: y,
              children: (0, h.jsx)(c.A, {
                to: "newswire",
                "aria-label": i("Newswire"),
                children: i("Newswire")
              })
            }), (0, h.jsx)(c.NewswireBlocks, {
              className: w,
              posts: a,
              noSpecialOrder: !0
            }), (0, h.jsx)(c.Button, {
              role: "link",
              "aria-label": "Latest News",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest News",
              "data-gtm-label": "More Click",
              "data-testid": "view-more",
              to: "newswire",
              context: "secondary",
              children: i("View More")
            })]
          })
        },
        T = (0, g.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, k.useQuery)(F.Home, {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            games: n,
            posts: t,
            videos: s
          } = i;
          return (0, h.jsxs)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92c4b20405ad56a3b4dd00",
            children: [(0, h.jsx)(c.VideoCarousel, {
              videos: s.results,
              t: a
            }), (0, h.jsxs)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f9563b32021f220a9ca2",
              children: [(0, h.jsx)(_, {
                posts: t.results,
                t: a
              }), (0, h.jsx)(V, {
                games: n.results,
                t: a
              })]
            })]
          })
        })),
        A = (0, g.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setNormalLogo: n
          } = (0, S.useRockstarLocalState)();
          return (0, l.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            n(!0), i()
          })), []), (0, h.jsx)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f7903f781c69344545c0",
            "data-testid": "newswire-list",
            children: (0, h.jsx)(c.NewswireList, {
              t: a
            })
          })
        }));
      var E = i(4524),
        D = i.n(E);
      const $ = (0, g.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, d.useParams)(),
            {
              setBreadcrumb: n,
              setNormalLogo: t
            } = (0, S.useRockstarLocalState)();
          return (0, l.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), n()
          })), []), (0, h.jsx)(D(), {
            idHash: String(i.articleId)
          })
        })),
        I = "@rockstargames-sites-rockstargames-2f41663b9c098a92cf17a6d004f287e319c2";
      var L = i(3623),
        C = i.n(L);
      const G = (0, g.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i,
          setNormalLogo: n
        } = (0, S.useRockstarLocalState)(), t = (0, g.useQueryParams)(), [s, r] = (0, l.useState)({}), {
          data: d
        } = (0, k.useQuery)(C(), {
          variables: s,
          skip: !Object.entries(s).length,
          autoSetLoading: !0
        });
        if ((0, l.useEffect)((() => (i([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            i()
          })), []), (0, l.useEffect)((() => {
            r({
              ...s,
              type: t.get("type"),
              gameId: parseInt(t.get("gameId") ?? 0),
              index: null === t.get("type")
            })
          }), [t.get("type"), t.get("gameId")]), (0, l.useEffect)((() => (n(!1), () => n(!0))), []), !d) return null;
        if (d?.game && d?.gameVideos) return (0, h.jsx)("div", {
          className: I,
          children: (0, h.jsx)(c.VideoList, {
            vids: d.gameVideos.results,
            title: a("Videos from %s").replace("%s", d.game.title)
          })
        });
        const {
          games: o,
          gtao: m,
          gtaosessions: u,
          latest: f,
          rdo: v
        } = d;
        return (0, h.jsx)("div", {
          className: I,
          children: s.type ? "" : (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(c.VideoCarousel, {
              videos: f.results,
              t: a
            }), (0, h.jsxs)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f8094f84e208d7bd6984",
              children: [(0, h.jsx)(c.VideoList, {
                vids: v.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, h.jsx)(c.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, h.jsx)(c.VideoList, {
                vids: u.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, h.jsx)(c.VideoList, {
                games: o,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var q = i(4224);
      const P = (0, g.withTranslations)((e => {
        let {
          t: a
        } = e;
        const i = (0, d.useNavigate)(),
          {
            setNormalLogo: n,
            setBreadcrumb: t,
            setTitle: s
          } = (0, S.useRockstarLocalState)(),
          {
            videoId: r
          } = (0, d.useParams)(),
          {
            video: o,
            related: m
          } = (0, q.useVideoData)({
            id: Number(r)
          });
        return (0, l.useEffect)((() => (t([{
          href: "/videos",
          title: a("Videos")
        }]), n(!1), () => {
          n(!0), t()
        })), []), (0, l.useEffect)((() => {
          o && s(`${o.game.title} - ${o.title}`)
        }), [o]), o ? (0, h.jsxs)(h.Fragment, {
          children: [(0, h.jsx)(q.PlayerWithInfo, {
            videoId: Number(r),
            videoChangeCallback: e => {
              i(`../videos/${e}`)
            }
          }), m?.results?.length ? (0, h.jsx)(c.VideoList, {
            vids: m.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }));
      var O = i(8842),
        B = i.n(O);
      const R = (0, g.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i
        } = (0, S.useRockstarLocalState)(), {
          data: n
        } = (0, k.useQuery)(B(), {
          autoSetLoading: !0
        }), t = n?.games ?? null;
        return (0, l.useEffect)((() => (i([{
          href: "/games",
          title: a("Games")
        }]), () => i())), [t]), t ? (0, h.jsx)("div", {
          className: "@rockstargames-sites-rockstargames-2f41663b9c098a92bcb5b082e1fa4d2e670f",
          children: t.results.map((e => (0, h.jsx)(c.GameCard.Link, {
            game: e
          }, e.title_slug)))
        }) : null
      }));
      var M = i(6930),
        z = i.n(M);
      const U = e => {
          let {
            game: a,
            t: i
          } = e;
          const {
            purchases: n,
            digital_purchases: t
          } = a, s = n.length + t.length;
          if (0 === s) return null;
          const r = (0, h.jsx)(h.Fragment, {
              children: t.map((e => (0, h.jsx)(c.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            l = (0, h.jsx)(h.Fragment, {
              children: n.map((e => (0, h.jsx)(c.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (s > 1) return (0, h.jsxs)(c.Dropdown, {
            title: i("Buy Now"),
            children: [r, l]
          });
          const d = n.length ? n[0] : t[0];
          return d?.href ? (0, h.jsx)(c.Button, {
            to: d.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: i("Buy Now")
          }) : null
        },
        H = e => {
          let {
            game: a
          } = e;
          return (0, h.jsx)("h2", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92b458fb38d5d5e7c6f8db",
            children: a.title
          })
        },
        Q = e => {
          let {
            game: a,
            t: i
          } = e;
          const n = [],
            t = [],
            s = ["libertycitystories", "vicecitystories"].includes(a.title_slug);
          return a.developers.map((e => {
            t.push(e.title)
          })), a.platforms.map((e => {
            n.push(e.name)
          })), (0, h.jsx)(X, {
            title: i("Specifications"),
            children: (0, h.jsxs)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92ba71fbd1ce867d9f1b0e",
              children: [(0, h.jsx)(Z, {
                title: i("Developer"),
                children: t.join(", ")
              }), (0, h.jsx)(Z, {
                title: i("Platform"),
                children: n.join(", ")
              }), (0, h.jsx)(Z, {
                title: i("Release Date"),
                children: a.release_date_in_words
              }), (0, h.jsxs)("dl", {
                className: "@rockstargames-sites-rockstargames-2f41663b9c098a92e2d41c68ae18421e2a5f",
                children: [(0, h.jsx)("dt", {
                  children: i("Rating")
                }), (0, h.jsxs)("dd", {
                  className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f3cff5f2b25aed04854d",
                  children: [(0, h.jsx)(c.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), s ? (0, h.jsx)("div", {
                    className: "@rockstargames-sites-rockstargames-2f41663b9c098a92c2050488c218a41dd0ae"
                  }) : ""]
                })]
              })]
            })
          })
        },
        K = e => {
          let {
            screens: a,
            t: i
          } = e;
          return (0, h.jsx)(X, {
            c: !0,
            title: i("Screens"),
            children: (0, h.jsx)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92b470979231a9d33f7cc0",
              children: a.map((e => (0, h.jsx)("div", {
                style: {
                  backgroundImage: `url(${e.file})`
                }
              }, e.file)))
            })
          })
        },
        W = e => {
          let {
            game: a,
            t: i
          } = e;
          const [n, t] = (0, l.useState)(!1), s = "<br>", r = (0, h.jsx)("p", {
            dangerouslySetInnerHTML: {
              __html: a.description
            }
          }), d = a.description.includes(s);
          return (0, h.jsx)(X, {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f5fbd22d717e2808c737",
            title: i("Game Description"),
            children: d ? (0, h.jsxs)(h.Fragment, {
              children: [n ? r : (0, h.jsx)("p", {
                children: a.description.split(s)[0]
              }), " ", (0, h.jsx)(c.Button, {
                context: "secondary",
                onClick: () => t(!n),
                children: i(n ? "Read Less" : "Read More")
              })]
            }) : r
          })
        },
        Y = e => {
          let {
            game: a,
            posts: i,
            t: n
          } = e;
          return (0, h.jsxs)(X, {
            title: n("Latest News"),
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92b4f97b4f531812bfd9e6",
            children: [(0, h.jsx)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92d1ad1a52007bd6cbf951",
              children: i.map((e => (0, h.jsx)(c.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, h.jsx)(c.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": `${a.title} - More Click`,
              to: `/newswire?tag_id=${a.tags[0].id}`,
              context: "secondary",
              children: n("Read more at the Rockstar Newswire")
            })]
          })
        },
        J = e => {
          let {
            game: a,
            videos: i,
            t: n
          } = e;
          return (0, h.jsxs)(X, {
            title: n("Latest Videos"),
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92d2a4e35a02a6f60bc3c2",
            children: [(0, h.jsx)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f881b1c3b2f5ba8065fc",
              children: i.map((e => (0, h.jsx)(c.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, h.jsx)(c.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: n("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        Z = e => {
          let {
            children: a,
            title: i,
            className: n = ""
          } = e;
          return (0, h.jsxs)("dl", {
            className: n,
            children: [(0, h.jsx)("dt", {
              children: i
            }), (0, h.jsx)("dd", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          })
        },
        X = e => {
          let {
            title: a,
            className: i = "",
            children: n,
            style: t = {}
          } = e;
          return (0, h.jsxs)("section", {
            className: i,
            style: t,
            children: [a ? (0, h.jsx)("h4", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92c06aca25ab017de6a9ff",
              children: a
            }) : "", n]
          })
        },
        ee = (0, g.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setTitle: n
          } = (0, S.useRockstarLocalState)(), t = (0, d.useParams)(), {
            data: s
          } = (0, k.useQuery)(z(), {
            variables: {
              titleSlug: t.gameTitlelug
            },
            autoSetLoading: !0
          }), r = s?.game ?? null;
          return (0, l.useEffect)((() => (r && n(r.title), i([{
            href: "/games",
            title: a("Games")
          }]), () => {
            i()
          })), [r]), r ? (0, h.jsxs)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92ea5fa63b89a62219113d",
            children: [(0, h.jsxs)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92e3dd0b8721e5b51d0e97",
              children: [(0, h.jsxs)("div", {
                className: "@rockstargames-sites-rockstargames-2f41663b9c098a92b76354fb05b980942662",
                children: [(0, h.jsx)(H, {
                  game: r,
                  t: a
                }), (0, h.jsxs)("div", {
                  className: "@rockstargames-sites-rockstargames-2f41663b9c098a92e80d6fc21095d8e57319",
                  children: [(0, h.jsx)(U, {
                    game: r,
                    t: a
                  }), r.has_official_site && (0, h.jsx)(c.Button, {
                    to: r.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": r.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, h.jsx)(c.GameCard.Art, {
                imgSrc: r.fob_1280,
                titleSlug: r.title_slug
              })]
            }), (0, h.jsxs)("div", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92be5ed38ac3168dd2df67",
              children: [(0, h.jsx)(W, {
                game: r,
                t: a
              }), r.tags.length && r.tags[0].videos.length ? (0, h.jsx)(J, {
                game: r,
                videos: r.tags[0].videos,
                t: a
              }) : "", r.tags.length && r.tags[0].posts.length ? (0, h.jsx)(Y, {
                game: r,
                posts: r.tags[0].posts,
                t: a
              }) : "", r.screens.length ? (0, h.jsx)(K, {
                screens: r.screens,
                t: a
              }) : "", (0, h.jsx)(Q, {
                game: r,
                t: a
              })]
            })]
          }) : null
        })),
        ae = "@rockstargames-sites-rockstargames-2f41663b9c098a92be66077bb086d9ba252e",
        ie = "@rockstargames-sites-rockstargames-2f41663b9c098a92a4315a4e64cdce6b042d";
      var ne = i(389),
        te = i.n(ne);
      const se = e => {
          let {
            loading: a,
            searchResponse: i,
            searchTerm: n,
            activeTab: t,
            t: s
          } = e;
          const [r, l] = (0, d.useSearchParams)();
          let o;
          switch (t) {
            case "posts":
              o = i.posts.results.map((e => (0, h.jsx)(c.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              o = i.games.results.map((e => (0, h.jsx)(c.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              o = i.videos.results.map((e => (0, h.jsx)(c.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              o = null
          }
          return (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)("section", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92e8d247c95ca7e14d1e5e",
              children: Object.entries(i).map((e => {
                let [a, i] = e;
                return i?.paging?.count > 0 ? (0, h.jsx)(re, {
                  tabName: a,
                  activeTab: t,
                  searchTerm: n,
                  count: i?.paging?.count,
                  t: s
                }, a) : ""
              }))
            }), a ? "" : (0, h.jsx)("section", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92fc198d45f7f447c595e1",
              children: (0, h.jsx)("div", {
                className: "@rockstargames-sites-rockstargames-2f41663b9c098a92e64c63abd1c1f6848ef5",
                children: o
              })
            }), i[t]?.paging ? (0, h.jsx)("section", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92a16d89b2b769baa98922",
              children: (0, h.jsx)(c.Paging, {
                data: i[t].paging,
                onPageUpdate: e => {
                  l({
                    ...Object.fromEntries([...r]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        re = e => {
          let {
            activeTab: a,
            count: i,
            searchTerm: n,
            tabName: t,
            t: s
          } = e;
          return (0, h.jsxs)(c.A, {
            className: a === t ? "@rockstargames-sites-rockstargames-2f41663b9c098a92b573a6a73e91f0b15e2f" : "",
            to: `/search?q=${n}&tab=${t}&sort=__searchScore&page=1`,
            children: [s(t), " ", (0, h.jsxs)("span", {
              children: ["(", i, ")"]
            })]
          }, t)
        },
        le = (0, g.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              search: i
            },
            setSearch: n,
            setTitle: t
          } = (0, S.useRockstarLocalState)(), s = (0, g.useQueryParams)(), [r, d] = (0, l.useState)(null), [o, m] = (0, l.useState)({}), [u, f] = (0, l.useState)(s.get("tab") ?? null), {
            data: v = {},
            loading: b
          } = (0, k.useQuery)(te(), {
            variables: o,
            skip: !Object.entries(o).length || !o.q,
            autoSetLoading: !0
          });
          return (0, l.useEffect)((() => {
            const e = {
              q: s.get("q"),
              page: Number(s.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            m(e), n(s.get("q"))
          }), [s.get("q"), s.get("page"), s.get("tab"), u]), (0, l.useEffect)((() => {
            const e = Object.entries(v).find((e => {
              let [a, i] = e;
              return i?.paging?.count > 0
            }))?.[0];
            f(s.get("tab") ?? e ?? null)
          }), [v, s.get("tab")]), (0, l.useEffect)((() => {
            void 0 !== v?.games?.paging?.count && (d((v?.games?.paging?.count ?? 0) + (v?.videos?.paging?.count ?? 0) + (v?.posts?.paging?.count ?? 0)), t(v?.meta?.title.replace("%s", i)))
          }), [v, u]), Object.entries(o).length ? o.q ? null === r ? null : (0, h.jsxs)("div", {
            className: ae,
            children: [(0, h.jsxs)("section", {
              className: ie,
              children: [(0, h.jsxs)("div", {
                className: "@rockstargames-sites-rockstargames-2f41663b9c098a92ed56a1f8c70a89879ed0",
                children: [(0, h.jsxs)("h4", {
                  children: [b ? a("search-active") : "", b || r ? b ? "" : a("Search results for:") : a("search-over-empty")]
                }), (0, h.jsx)("h1", {
                  children: a("%s").replace("%s", s.get("q"))
                })]
              }), (0, h.jsx)(c.SearchBox, {})]
            }), !b && r ? (0, h.jsx)(se, {
              searchResponse: v,
              searchTerm: i,
              activeTab: u,
              t: a
            }) : ""]
          }) : (0, h.jsx)("div", {
            className: ae,
            children: (0, h.jsxs)("section", {
              className: ie,
              children: [(0, h.jsx)("h3", {
                children: a("Search")
              }), (0, h.jsx)(c.SearchBox, {})]
            })
          }) : null
        }));
      var de = i(2327),
        ce = i.n(de);
      const oe = {
        companyInfo: "@rockstargames-sites-rockstargames-2f41663b9c098a92fdf7ad7390432425a3f9",
        top: "@rockstargames-sites-rockstargames-2f41663b9c098a92c9f0c63e60bbcb56c5a8",
        content: "@rockstargames-sites-rockstargames-2f41663b9c098a92f2feda0369c0c992f672",
        nav: "@rockstargames-sites-rockstargames-2f41663b9c098a92e7fac1a1100cb55ef25e",
        us: "@rockstargames-sites-rockstargames-2f41663b9c098a92cc4fee3b0281f4452e44",
        br: "@rockstargames-sites-rockstargames-2f41663b9c098a92de53608056aadcab2de7",
        cz: "@rockstargames-sites-rockstargames-2f41663b9c098a92d90e2a3649251d9f9b74",
        de: "@rockstargames-sites-rockstargames-2f41663b9c098a92f379ae83b1d2e5e3667a",
        es: "@rockstargames-sites-rockstargames-2f41663b9c098a92f53ac2b87e4b0e88f4cb",
        fr: "@rockstargames-sites-rockstargames-2f41663b9c098a92a43c6a887dd3b7128b40",
        it: "@rockstargames-sites-rockstargames-2f41663b9c098a92dd4e51987c1ff36db3f4",
        jp: "@rockstargames-sites-rockstargames-2f41663b9c098a92f78303397afb6f93d0e1",
        kr: "@rockstargames-sites-rockstargames-2f41663b9c098a92b3454c6030e73489775f",
        mx: "@rockstargames-sites-rockstargames-2f41663b9c098a92dd782b5cd8629ed94814",
        nl: "@rockstargames-sites-rockstargames-2f41663b9c098a92c8c30c11b7bbbc152ebb",
        pl: "@rockstargames-sites-rockstargames-2f41663b9c098a92bf12aa0dd14556d0b41d",
        ru: "@rockstargames-sites-rockstargames-2f41663b9c098a92ff19da6ef088e11bf9fa",
        sa: "@rockstargames-sites-rockstargames-2f41663b9c098a92a226907c61648019cded",
        tw: "@rockstargames-sites-rockstargames-2f41663b9c098a92bce44d59902ad4e6d892",
        zh: "@rockstargames-sites-rockstargames-2f41663b9c098a92a0f363760a76977e97a8",
        cookieSettingsButton: "@rockstargames-sites-rockstargames-2f41663b9c098a92f5a3056a97f4f3ca6674",
        cookieSettingsModal: "@rockstargames-sites-rockstargames-2f41663b9c098a92c61473be173bf0339bad",
        open: "@rockstargames-sites-rockstargames-2f41663b9c098a92ed6ad495e3a2c0172a9d",
        settings: "@rockstargames-sites-rockstargames-2f41663b9c098a92b94a8986c7c72543b62b",
        setting: "@rockstargames-sites-rockstargames-2f41663b9c098a92d53fc16a5d83bbd0112f",
        optional: "@rockstargames-sites-rockstargames-2f41663b9c098a92a4ac7a6cb5436b3df4d7",
        dot: "@rockstargames-sites-rockstargames-2f41663b9c098a92ba066f4a55aa02437346",
        optionalOn: "@rockstargames-sites-rockstargames-2f41663b9c098a92b39dcb057d9e64f3ffa9",
        rtl: "@rockstargames-sites-rockstargames-2f41663b9c098a92ae70ef252c5b38a62b36"
      };
      var me = i(4438),
        ue = i.n(me);
      const ke = (0, c.withSearchbarErrorBoundary)((0, g.withTranslations)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: i,
            titleKey: n,
            jsonType: t,
            t: s
          } = e;
          const r = (0, d.useNavigate)(),
            o = (0, d.useLocation)(),
            m = (0, g.useLocale)(),
            u = (0, g.useQueryParams)(),
            f = (0, l.useRef)(),
            v = (e, a) => {
              const i = a ?? e.target.hash,
                n = document.getElementById(i.replace("#", "")),
                t = document.getElementsByName(i.replace("#", ""))?.[0],
                s = n ?? t ?? null,
                l = u.get("country");
              if (e) {
                const a = `${o.pathname}${u.get("country")?`?country=${l}`:""}${i}`;
                r(a), e.preventDefault()
              }
              s && window.scroll(0, s.offsetTop - f.current.getBoundingClientRect().height - 60)
            },
            [b, p] = (0, l.useState)({}),
            {
              data: N,
              loading: S
            } = (0, k.useQuery)(ue(), {
              variables: b,
              skip: !Object.entries(b).length,
              autoSetLoading: !0
            });
          (0, l.useEffect)((() => {
            const e = u.get("country") ?? u.get("locale") ?? null,
              a = void 0 === i,
              n = a && null !== e ? e : a && m.split("_").length > 1 ? "hans" === m.split("_")[1] ? m.split("_")[0] : m.split("_")[1] : m;
            p({
              jsonType: t,
              jsonLocale: n || "us",
              metaUrl: `/${t}`
            })
          }), [u.get("country"), u.get("locale")]), (0, l.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = u.get("country"),
                    i = e.href.split("#")[1],
                    n = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${n}${o.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${i}`)
                }
              })(e), e.addEventListener("click", (e => {
                v(e, !1)
              }))
            })), "" !== o.hash && setTimeout((() => {
              v(!1, o.hash)
            }), 10)
          }), [N]);
          const {
            content: x
          } = N?.companyInfo ?? "";
          return (0, h.jsxs)("div", {
            className: oe.companyInfo,
            "data-locale": b.jsonLocale,
            children: [(0, h.jsxs)("section", {
              className: oe.top,
              ref: f,
              children: [(0, h.jsx)("h1", {
                children: s(n)
              }), "undefined" !== i && i ? "" : (0, h.jsx)("nav", {
                className: oe.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => (0, h.jsx)(c.A, {
                  to: `${o.pathname}?country=${e}`,
                  className: oe[e]
                }, a)))
              })]
            }), N && !S ? (0, h.jsx)("section", {
              className: oe.content,
              "data-json-type": t,
              children: "cookies" === t && N ? (0, h.jsx)(ce(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: x,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, h.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: x
                }
              })
            }) : ""]
          })
        }))),
        ge = () => (0, h.jsx)(ke, {
          jsonType: "conduct",
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
        fe = () => (0, h.jsx)(ke, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        ve = () => (0, h.jsx)(ke, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        be = () => (0, h.jsx)(ke, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        pe = () => (0, h.jsx)(ke, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        he = () => (0, h.jsx)(ke, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        Ne = e => {
          let {
            t: a
          } = e;
          return (0, h.jsx)(c.Button, {
            className: oe.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        Se = () => (0, h.jsx)(ke, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, g.withTranslations)(Ne)
        }),
        xe = () => (0, h.jsx)(ke, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        je = {
          manuals: "@rockstargames-sites-rockstargames-2f41663b9c098a92cb1e49cfce02bacb9f17",
          list: "@rockstargames-sites-rockstargames-2f41663b9c098a92cad229be0a8aebc584fc",
          item: "@rockstargames-sites-rockstargames-2f41663b9c098a92a23570e3dc54680009c2",
          img: "@rockstargames-sites-rockstargames-2f41663b9c098a92e8c3fb8a8209b3eee363",
          dropdown: "@rockstargames-sites-rockstargames-2f41663b9c098a92dd56d911b8cdb77d58ac",
          items: "@rockstargames-sites-rockstargames-2f41663b9c098a92f272cf6b78b0c58e91b4",
          detail: "@rockstargames-sites-rockstargames-2f41663b9c098a92e70fb589a8d25388ea11",
          rockstar: "@rockstargames-sites-rockstargames-2f41663b9c098a92f764d9f6eaabdd8fb5d9",
          music: "@rockstargames-sites-rockstargames-2f41663b9c098a92f56cc1d0797f336c02d2",
          gtaiv: "@rockstargames-sites-rockstargames-2f41663b9c098a92c9907907754a9559d40c",
          vcs: "@rockstargames-sites-rockstargames-2f41663b9c098a92fb05aabbc5e1455d7480",
          tlad: "@rockstargames-sites-rockstargames-2f41663b9c098a92f9bfee3c5e28e43c64db",
          bogt: "@rockstargames-sites-rockstargames-2f41663b9c098a92cb2a17541d6a5bd379eb",
          eflc: "@rockstargames-sites-rockstargames-2f41663b9c098a92f07f9a54f3303e5b5ae8",
          gameLogo: "@rockstargames-sites-rockstargames-2f41663b9c098a92c9a38509f2c92a5147f2",
          warriors: "@rockstargames-sites-rockstargames-2f41663b9c098a92a1f9c97ab4ced426b353",
          album: "@rockstargames-sites-rockstargames-2f41663b9c098a92e360a0996dbc6ecb942e",
          driver: "@rockstargames-sites-rockstargames-2f41663b9c098a92fafd97e9fd79d732d317",
          criticize: "@rockstargames-sites-rockstargames-2f41663b9c098a92da6b4fb69c4004d8f01f",
          footsteps: "@rockstargames-sites-rockstargames-2f41663b9c098a92e3e5e16c132e3b9c2821",
          begood: "@rockstargames-sites-rockstargames-2f41663b9c098a92ab21b38bc89aeb88c185",
          wheelsofsteel: "@rockstargames-sites-rockstargames-2f41663b9c098a92b1f8c9ea0fc9ccc113e6",
          cantgetenough: "@rockstargames-sites-rockstargames-2f41663b9c098a92eeb089740623c21af506",
          theweekend: "@rockstargames-sites-rockstargames-2f41663b9c098a92fa49e05daf31f1c45c3e",
          acid: "@rockstargames-sites-rockstargames-2f41663b9c098a92fdd8024aa3200c9956b0",
          elmalo: "@rockstargames-sites-rockstargames-2f41663b9c098a92aa298aa7d7fd61084a76",
          ilikeit: "@rockstargames-sites-rockstargames-2f41663b9c098a92f1ca69668402acbcef57",
          migente: "@rockstargames-sites-rockstargames-2f41663b9c098a92ca18bb258a10bc38f4e1",
          quimbara: "@rockstargames-sites-rockstargames-2f41663b9c098a92e9d7c1ef8f88dc30ccf7",
          revolt: "@rockstargames-sites-rockstargames-2f41663b9c098a92da38e55d1db4a04fbd28",
          credit: "@rockstargames-sites-rockstargames-2f41663b9c098a92e6d33865a2b0cad13fec",
          additional: "@rockstargames-sites-rockstargames-2f41663b9c098a92df339a04f89bce71682c",
          logo: "@rockstargames-sites-rockstargames-2f41663b9c098a92d27c7daf84749f7294f4",
          beat: "@rockstargames-sites-rockstargames-2f41663b9c098a92b7019cc7b55154c7c941",
          "liberty-rock": "@rockstargames-sites-rockstargames-2f41663b9c098a92b430d6e0f9853ce8f1f2",
          lchc: "@rockstargames-sites-rockstargames-2f41663b9c098a92c5358f1cedf67dc7b2c7",
          "electro-choc": "@rockstargames-sites-rockstargames-2f41663b9c098a92b153f575c5a660bd557b",
          "international-funk": "@rockstargames-sites-rockstargames-2f41663b9c098a92c369082539a25e34be34",
          vladivostok: "@rockstargames-sites-rockstargames-2f41663b9c098a92d4c5c5f2354590da1636",
          vibe: "@rockstargames-sites-rockstargames-2f41663b9c098a92fb2433804efe7f8c491d",
          "tuff-gong": "@rockstargames-sites-rockstargames-2f41663b9c098a92c45db70705fdc737c9e9",
          "san-juan": "@rockstargames-sites-rockstargames-2f41663b9c098a92d96f42fbcea4d72f1c0f",
          "radio-broker": "@rockstargames-sites-rockstargames-2f41663b9c098a92e6f72eaee100fcba344b",
          "massive-b": "@rockstargames-sites-rockstargames-2f41663b9c098a92b9dd6ebae49e77d70669",
          k109: "@rockstargames-sites-rockstargames-2f41663b9c098a92f2d174eff39585d633c5",
          journey: "@rockstargames-sites-rockstargames-2f41663b9c098a92eee7a9a9f87346a5a789",
          jnr: "@rockstargames-sites-rockstargames-2f41663b9c098a92d58773295424fd4a6474",
          interiors: "@rockstargames-sites-rockstargames-2f41663b9c098a92f2ca04a38a7c73476b21",
          fusion: "@rockstargames-sites-rockstargames-2f41663b9c098a92aa9ec3778aec504b5e38",
          classics: "@rockstargames-sites-rockstargames-2f41663b9c098a92b330bd79e5c1e2c90c06",
          "vice-city": "@rockstargames-sites-rockstargames-2f41663b9c098a92f0c4d20e395d68c01223",
          "self-actualization": "@rockstargames-sites-rockstargames-2f41663b9c098a92dab79bc3639900734ce8",
          ramjam: "@rockstargames-sites-rockstargames-2f41663b9c098a92dabfc6a419fe0ff69d7e",
          emotion: "@rockstargames-sites-rockstargames-2f41663b9c098a92e647bab5e3e97ebd0c3a",
          flash: "@rockstargames-sites-rockstargames-2f41663b9c098a92a11a4a48b2cce90a0b23",
          fresh: "@rockstargames-sites-rockstargames-2f41663b9c098a92c9c555c3cd312db2e22e",
          paradise: "@rockstargames-sites-rockstargames-2f41663b9c098a92cfb4122309bf4c994515",
          espantoso: "@rockstargames-sites-rockstargames-2f41663b9c098a92d2880c00a8e7c29e0ada",
          vcfl: "@rockstargames-sites-rockstargames-2f41663b9c098a92c384e124115da4ff0c8d",
          vrock: "@rockstargames-sites-rockstargames-2f41663b9c098a92c84a7ace91a9cf1fd8c8",
          wave: "@rockstargames-sites-rockstargames-2f41663b9c098a92d0fedaf40b08ec500883",
          warriorsCredit: "@rockstargames-sites-rockstargames-2f41663b9c098a92aee6d517dc62f3032703"
        };
      var ye = i(3310),
        we = i.n(ye);
      const Fe = (0, g.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          data: i
        } = (0, k.useQuery)(we(), {
          autoSetLoading: !0
        });
        if (!i) return null;
        const {
          manuals: n
        } = i;
        return (0, h.jsxs)("div", {
          className: je.manuals,
          children: [(0, h.jsx)("h2", {
            children: a("Manuals")
          }), (0, h.jsx)("div", {
            className: je.list,
            children: n.map((e => (0, h.jsxs)("div", {
              className: je.item,
              children: [(0, h.jsx)("div", {
                className: je.img,
                style: {
                  backgroundImage: `url(${e.game.fob_640})`
                }
              }), (0, h.jsx)(c.Dropdown, {
                title: e.game.title,
                className: je.dropdown,
                children: e.manuals_platforms.map((e => (0, h.jsxs)("p", {
                  children: [(0, h.jsx)("span", {
                    children: e.platform
                  }), e.manuals_links.map((e => (0, h.jsx)("a", {
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
      var Ve = i(9696),
        _e = i.n(Ve);
      const Te = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: i
          } = _e();
          return (0, h.jsxs)("div", {
            className: je.detail,
            children: [(0, h.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: i(a.content)
              }
            }), a.album_cover ? (0, h.jsx)("div", {
              className: [je.album, je[a.album_cover]].join(" ")
            }) : "", (0, h.jsx)(c.A, {
              to: "/",
              children: (0, h.jsx)("div", {
                className: je.rockstar
              })
            })]
          })
        },
        Ae = (0, g.withTranslations)((e => {
          let {
            stations: a,
            gameId: i,
            t: n
          } = e;
          const {
            sanitize: t
          } = _e();
          return (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)("h1", {
              children: n("Music Credits")
            }), a && 55 === a[0].game_id ? (0, h.jsxs)("div", {
              className: je.warriorsCredit,
              children: [(0, h.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, h.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, h.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, h.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, h.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, h.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, h.jsx)("div", {
              className: [je.list, a && 55 === a[0].game_id ? je.warriors : ""].join(" "),
              children: a && a.map(((e, s) => (0, h.jsxs)("div", {
                className: je.station,
                children: [55 !== e.game_id ? (0, h.jsx)("div", {
                  className: [je.logo, je[e.slug]].join(" ")
                }) : (0, h.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, h.jsxs)("div", {
                  className: je.credit,
                  children: [(0, h.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, h.jsx)("p", {
                    children: e.written_by
                  }), (0, h.jsx)("p", {
                    children: e.published_by
                  }), (0, h.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, h.jsx)("p", {
                    className: je.additional,
                    children: (0, h.jsx)(c.A, {
                      to: `music?gameId=${i}&stationId=${a[s].id}&songId=${e.id}`,
                      children: n("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var Ee = i(8735),
        De = i.n(Ee);
      const $e = () => {
          const e = (0, g.useQueryParams)(),
            a = Number(e.get("gameId")),
            i = Number(e.get("songId")),
            n = Number(e.get("stationId"));
          let t = !1;
          const {
            data: s
          } = (0, k.useQuery)(De(), {
            variables: {
              gameId: a
            },
            autoSetLoading: !0
          });
          if (!s) return null;
          const {
            musicStations: r
          } = s;
          return Object.keys(r).length, r.map((e => {
            e.id === n && e.music_credits.map((e => {
              e.id === i && (t = e.music_detail)
            }))
          })), (0, h.jsxs)("div", {
            className: [je.music, 25 === a ? je.gtaiv : 26 === a ? je.tlad : 32 === a ? je.bogt : 28 === a ? je.eflc : 34 === a ? je.vcs : ""].join(" "),
            children: [(0, h.jsx)("div", {
              className: [je.gameLogo, 26 === a ? je.tlad : 32 === a ? je.bogt : 28 === a ? je.eflc : 25 === a ? je.gtaiv : 34 === a ? je.vcs : 55 === a ? je.warriors : ""].join(" ")
            }), a && r ? n && i && t ? (0, h.jsx)(Te, {
              detail: t
            }) : (0, h.jsx)(Ae, {
              stations: r,
              gameId: a
            }) : null]
          })
        },
        Ie = (0, g.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, h.jsxs)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92f5a3fd19ef32d4a7c9fb",
            children: [(0, h.jsx)("section", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92d6cad5cd00b5df35f739",
              children: (0, h.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, h.jsxs)("section", {
              className: "@rockstargames-sites-rockstargames-2f41663b9c098a92fcf7d4f6f4fee3e8dc0e",
              children: [(0, h.jsx)("p", {
                children: a("contact.intro")
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.technical")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.career")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.legal")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, h.jsxs)("p", {
                children: [(0, h.jsx)("span", {
                  children: a("contact.latest")
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, h.jsx)("br", {}), (0, h.jsx)(c.A, {
                  to: "https://www.youtube.com/user/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Youtube Site",
                  children: "https://www.youtube.com/user/RockstarGames"
                })]
              }), (0, h.jsx)("br", {})]
            })]
          })
        })),
        Le = {
          maint: "@rockstargames-sites-rockstargames-2f41663b9c098a92be0ddcc1c6860acb4d98",
          content: "@rockstargames-sites-rockstargames-2f41663b9c098a92a8c1a7d64263dcfa3aed",
          logo: "@rockstargames-sites-rockstargames-2f41663b9c098a92e1d82fca0195b898bef7"
        },
        Ce = () => (0, h.jsx)("div", {
          className: Le.maint,
          children: (0, h.jsxs)("div", {
            className: Le.content,
            children: [(0, h.jsx)("div", {
              className: Le.logo
            }), (0, h.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, h.jsx)("a", {
              className: Le.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        Ge = () => (0, h.jsxs)("div", {
          className: "@rockstargames-sites-rockstargames-2f41663b9c098a92b39a5d752efba84c2088",
          children: [(0, h.jsx)("div", {
            className: "@rockstargames-sites-rockstargames-2f41663b9c098a92abd863939e037fa8cd4a"
          }), (0, h.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        qe = {
          jpwrapper: "@rockstargames-sites-rockstargames-2f41663b9c098a92fbda6fcc564319f2ca50",
          body: "@rockstargames-sites-rockstargames-2f41663b9c098a92dcc96769ee1b492b6afe",
          responsiveImage: "@rockstargames-sites-rockstargames-2f41663b9c098a92b31b08939302d5fba3aa",
          link: "@rockstargames-sites-rockstargames-2f41663b9c098a92b417335127cf0ebe3b7d",
          bodyPadding: "@rockstargames-sites-rockstargames-2f41663b9c098a92f9397a5cae04363543aa",
          headline_3: "@rockstargames-sites-rockstargames-2f41663b9c098a92e8e3444e36b6af29999e",
          headline_2: "@rockstargames-sites-rockstargames-2f41663b9c098a92f7091f9a7f368c272038",
          disclaimer: "@rockstargames-sites-rockstargames-2f41663b9c098a92c874530844841de0223d"
        },
        Pe = c.framer.withFadeIn((() => (0, h.jsxs)("div", {
          className: qe.jpwrapper,
          children: [(0, h.jsx)(c.MultiSourceImage, {
            className: qe.responsiveImage,
            image: {
              desktop: i(6019)
            }
          }), (0, h.jsxs)(c.Grid, {
            className: [qe.body, qe.inner, qe.gap_sm].join(" "),
            children: [(0, h.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, h.jsxs)("p", {
              children: [(0, h.jsx)("a", {
                className: qe.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, h.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, h.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, h.jsx)(c.MultiSourceImage, {
              image: {
                desktop: i(2143)
              }
            }), (0, h.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, h.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, h.jsx)(c.MultiSourceImage, {
              className: qe.bodyPadding,
              image: {
                desktop: i(6836)
              }
            }), (0, h.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, h.jsx)(c.MultiSourceImage, {
              className: qe.bodyPadding,
              image: {
                desktop: i(9319)
              }
            }), (0, h.jsxs)("p", {
              children: ["さらなる詳細は、", (0, h.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: qe.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, h.jsx)("p", {
              className: qe.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, h.jsx)(c.Rating, {
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })]
        }))),
        Oe = {
          "frontline-heroes": (0, l.lazy)((() => i.e(38).then(i.bind(i, 7038)))),
          "gta-tv": (0, l.lazy)((() => i.e(414).then(i.t.bind(i, 3414, 23)))),
          "modules-core-gif-viewer": (0, l.lazy)((() => i.e(774).then(i.t.bind(i, 2774, 23)))),
          "modules-core-videoplayer": (0, l.lazy)((() => Promise.resolve().then(i.t.bind(i, 4224, 23)))),
          "rockstar-tv": (0, l.lazy)((() => i.e(107).then(i.t.bind(i, 4107, 23)))),
          "screenshot-viewer": (0, l.lazy)((() => i.e(142).then(i.t.bind(i, 1142, 23)))),
          "sites-careers": (0, l.lazy)((() => i.e(710).then(i.t.bind(i, 1710, 23)))),
          "sites-gta-gen9": (0, l.lazy)((() => i.e(291).then(i.t.bind(i, 6291, 23)))),
          "sites-gta-trilogy": (0, l.lazy)((() => i.e(829).then(i.t.bind(i, 3829, 23)))),
          "sites-red-dead-online": (0, l.lazy)((() => i.e(308).then(i.t.bind(i, 308, 23)))),
          "sites-red-dead-redemption": (0, l.lazy)((() => i.e(295).then(i.t.bind(i, 5295, 23)))),
          "sites-rockstargames-downloads": (0, l.lazy)((() => i.e(70).then(i.t.bind(i, 1070, 23))))
        },
        Be = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const i = Oe[e],
            {
              setHeaderHidden: n
            } = (0, S.useRockstarLocalState)();
          return (0, h.jsx)(l.Suspense, {
            fallback: "",
            children: (0, h.jsx)(i, {
              setHeaderHidden: n,
              config: a
            })
          })
        },
        Re = (0, c.withSearchbarErrorBoundary)((() => {
          const e = [{
            path: "/",
            element: (0, h.jsx)(T, {})
          }, {
            path: "/careers-privacy",
            element: (0, h.jsx)(pe, {})
          }, {
            path: "/ccpa",
            element: (0, h.jsx)(xe, {})
          }, {
            path: "/conduct",
            element: (0, h.jsx)(ge, {})
          }, {
            path: "/contact",
            element: (0, h.jsx)(Ie, {})
          }, {
            path: "/cookies",
            element: (0, h.jsx)(Se, {})
          }, {
            path: "/corpinfo",
            element: (0, h.jsx)(fe, {})
          }, {
            path: "/eula",
            element: (0, h.jsx)(ve, {})
          }, {
            path: "/games",
            element: (0, h.jsx)(R, {})
          }, {
            path: "/games/:gameTitlelug",
            element: (0, h.jsx)(ee, {})
          }, {
            path: "/legal",
            element: (0, h.jsx)(be, {})
          }, {
            path: "/gta-v/thankyou",
            element: (0, h.jsx)(j.Credits, {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: (0, h.jsx)(Ge, {})
          }, {
            path: "/community_event",
            element: (0, h.jsx)(Pe, {})
          }, {
            path: "/reddeadredemption/*",
            element: Be("sites-red-dead-redemption")
          }, {
            path: "/reddeadonline/thankyou",
            element: (0, h.jsx)(j.Credits, {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Be("sites-careers")
          }, {
            path: "/downloads/*",
            element: Be("sites-rockstargames-downloads")
          }, {
            path: "/reddeadonline/*",
            element: Be("sites-red-dead-online")
          }, {
            path: "/frontline-heroes",
            element: Be("frontline-heroes")
          }, {
            path: "/gifs/:hashId",
            element: Be("modules-core-gif-viewer")
          }, {
            path: "/gta-v/*",
            element: Be("sites-gta-gen9", {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Be("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: Be("sites-gta-gen9", {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy",
            element: Be("sites-gta-trilogy")
          }, {
            path: "/gtatv/*",
            element: Be("gta-tv")
          }, {
            path: "/manuals",
            element: (0, h.jsx)(Fe, {})
          }, {
            path: "/manuals/music",
            element: (0, h.jsx)($e, {})
          }, {
            path: "/newswire",
            element: (0, h.jsx)(A, {})
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: (0, h.jsx)($, {})
          }, {
            path: "/old-privacy",
            element: (0, h.jsx)(he, {})
          }, {
            path: "/privacy",
            element: (0, h.jsx)(he, {})
          }, {
            path: "/rockstartv/*",
            element: Be("rockstar-tv")
          }, {
            path: "/screenshot-viewer/*",
            element: Be("screenshot-viewer")
          }, {
            path: "/search",
            element: (0, h.jsx)(le, {})
          }, {
            path: "/socialclubmaintenance",
            element: (0, h.jsx)(Ce, {})
          }, {
            path: "/videoplayer",
            element: Be("modules-core-videoplayer")
          }, {
            path: "/videos",
            element: (0, h.jsx)(G, {})
          }, {
            path: "/videos/:videoId",
            element: (0, h.jsx)(P, {})
          }, {
            path: "*",
            element: (0, h.jsx)(c.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, d.useRoutes)(e)
        })),
        Me = {
          main: "@rockstargames-sites-rockstargames-2f41663b9c098a92aaf63b52008f75924bfd",
          gameSite: "@rockstargames-sites-rockstargames-2f41663b9c098a92cd11032e8b42a51c2e09",
          "theme-std": "@rockstargames-sites-rockstargames-2f41663b9c098a92a11e15134625e6be7114",
          headerHidden: "@rockstargames-sites-rockstargames-2f41663b9c098a92cb24ea20571cdd3eeb64",
          standalone: "@rockstargames-sites-rockstargames-2f41663b9c098a92c7d686e28fbcff5e154b"
        },
        ze = (0, n.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, S.useRockstarLocalState)();
          return (0, l.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, h.jsx)("main", {
            role: "main",
            id: "main",
            className: [Me.main, a ? Me.standalone : "", e ? Me.headerHidden : ""].join(" "),
            children: (0, h.jsx)(Re, {})
          })
        })),
        Ue = ((0, k.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        He = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: !1,
          standalone: (["/careers", "/gifs", "/frontline-heroes", "/gtatv", "/rockstartv", "/screenshot-viewer", "/videoplayer"].find((e => Ue.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        Qe = (0, k.makeVar)(He),
        Ke = window?.env?.graphEnv ?? "prod",
        We = e => {
          let {
            standalone: a,
            customFooter: i
          } = e;
          const [n] = (0, o.useModal)(), t = ((0, d.useNavigate)(), (0, g.useLocale)());
          return (0, h.jsx)(N, {
            locales: x.intlMessages,
            lang: t,
            children: (0, h.jsx)(v.RockstarUserProvider, {
              children: (0, h.jsx)(v.GtmProvider, {
                children: (0, h.jsxs)(c.ScrollTracker, {
                  threshold: [25, 50, 75, 90, 100],
                  children: [(0, h.jsx)(j.AccessibilityButton, {}), n, (0, h.jsx)(c.ScrollToTop, {}), a ? "" : (0, h.jsx)(j.Header, {}), (0, h.jsx)(b.Menu, {}), (0, h.jsx)(ze, {}), a || i ? "" : (0, h.jsx)(j.FooterNav, {})]
                })
              })
            })
          })
        },
        Ye = e => {
          let {
            standalone: a,
            customFooter: i
          } = e;
          return (0, h.jsx)(o.ModalProvider, {
            children: (0, h.jsx)(We, {
              standalone: a,
              customFooter: i
            })
          })
        },
        {
          pingBearer: Je
        } = (0, g.getScConfigForOrigin)(),
        Ze = (0, k.withReactiveState)((() => {
          const e = (0, k.useBase)(),
            {
              state: {
                standalone: a,
                customFooter: i
              },
              setLoading: n,
              setTitle: t
            } = (0, g.useRockstarLocalState)();
          return (0, l.useEffect)((() => {
            window.addEventListener("message", (e => {
              const a = e.data?.type ?? null;
              "graph.titleUpdate" === a && t(e.data.title), "graph.loadingUpdate" === a && n(e.data.loading)
            }))
          }), [n, t]), (0, h.jsx)(g.ResizeProvider, {
            children: (0, h.jsx)(f.ScrollProvider, {
              children: (0, h.jsx)(d.BrowserRouter, {
                basename: e,
                children: (0, h.jsx)(Ye, {
                  standalone: a,
                  customFooter: i
                })
              })
            })
          })
        }), {
          state: Qe
        }),
        Xe = (0, k.withRockstarGraph)(Ze, {
          env: Ke,
          token: (0, k.makeVar)(null),
          tokenPing: Je,
          tokenPingExpires: (0, k.makeVar)(null),
          typePolicies: {
            ...u()
          }
        }),
        ea = window?.env?.gtmId ?? null,
        aa = window?.env?.oneTrustId ?? null;
      (0, n.init)({
        id: ea
      }), s()({
        id: aa,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, r.s)(e).render((0, h.jsx)(Xe, {}))
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
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
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.CompanyInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "CompanyInfo")
    },
    8469: (e, a, i) => {
      var n = {
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
      n.loc.source = {
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

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(i(6077).definitions)), n.definitions = n.definitions.concat(s(i(6921).definitions));
      var l = {};

      function d(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.Home = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = l[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
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
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "Home")
    },
    389: (e, a, i) => {
      var n = {
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
      n.loc.source = {
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

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(i(6077).definitions)), n.definitions = n.definitions.concat(s(i(6921).definitions)), n.definitions = n.definitions.concat(s(i(9349).definitions));
      var l = {};

      function d(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.Search = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = l[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
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
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "Search")
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
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
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.GamesIndex = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "GamesIndex")
    },
    6930: (e, a, i) => {
      var n = {
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
      n.loc.source = {
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

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      n.definitions = n.definitions.concat(s(i(6077).definitions)), n.definitions = n.definitions.concat(s(i(6921).definitions));
      var l = {};

      function d(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), l[e.name.value] = a
        }
      })), e.exports = n, e.exports.GameInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = l[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
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
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "GameInfo")
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
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
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.Manuals = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
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
      var n = {};

      function t(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.MusicStations = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [t(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[a] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "MusicStations")
    },
    3623: (e, a, i) => {
      var n = {
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
      n.loc.source = {
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
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      n.definitions = n.definitions.concat(i(6921).definitions.filter((function(e) {
        if ("FragmentDefinition" !== e.kind) return !0;
        var a = e.name.value;
        return !t[a] && (t[a] = !0, !0)
      })));
      var r = {};

      function l(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = n, e.exports.VideosList = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = r[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(e) {
            t.has(e) || (t.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = l(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "VideosList")
    },
    2143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e1f58ea5b8df59623fc3.png"
    },
    6019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/d0fe9cb3778a777b0f52.jpg"
    },
    6836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/1ba2f48bf7bc17c02191.png"
    },
    9319: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3d2ca16a4361072c4401.png"
    }
  }
]);
//# sourceMappingURL=f3f06c6787d350b689a7.js.map