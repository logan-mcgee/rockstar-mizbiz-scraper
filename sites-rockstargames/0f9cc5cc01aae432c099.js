(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [90], {
    7265: (e, a, n) => {
      "use strict";
      n.r(a), n(7842);
      var i = n(6331),
        t = n(4690),
        s = n.n(t),
        r = n(7598),
        o = n(289),
        d = n(8530),
        c = n(8976),
        l = n(8008),
        m = n(5269),
        k = n.n(m),
        u = n(4859),
        f = n(9929),
        g = n(1968),
        v = n(1458),
        p = n(6711),
        h = n(9475),
        b = n(9817);
      const N = e => {
        let {
          locales: a,
          lang: n,
          children: i
        } = e;
        const t = (0, o.useMemo)((() => function(e) {
            const a = e.split(/[-_]/);
            return a[a.length - 1] = a[a.length - 1].toLowerCase(), a
          }(n)), [n]),
          s = (0, o.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, t[1])), [n, a]);
        return (0, b.jsx)(h.Z, {
          messages: s,
          locale: t[0],
          defaultLocale: "en",
          children: i
        }, t[0])
      };
      var y = n(3657),
        S = n(1570),
        x = n(9296);
      const j = "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d6f18ca5eb38255a12f2",
        w = "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b9bb09c7276c243a56c3";
      var F = n(8469);
      const U = e => {
          let {
            games: a,
            t: n
          } = e;
          return (0, b.jsxs)("section", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d4fbf3aecb2463732aad",
            "data-testid": "featured-games",
            children: [(0, b.jsx)("h3", {
              className: j,
              children: (0, b.jsx)(c.A, {
                to: "newswire",
                "aria-label": n("Featured Games"),
                children: n("Featured Games")
              })
            }), (0, b.jsx)("div", {
              className: w,
              children: a.map((e => (0, b.jsx)(c.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, b.jsx)(c.Button, {
              role: "link",
              "aria-label": "Latest Games",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest Games",
              "data-gtm-label": "More Click",
              "data-testid": "view-more",
              to: "games",
              context: "secondary",
              children: n("View More")
            })]
          })
        },
        V = e => {
          let {
            posts: a,
            t: n
          } = e;
          return (0, b.jsxs)("section", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593dbbf6e442299737a36e0",
            "data-testid": "newswire",
            children: [(0, b.jsx)("h3", {
              className: j,
              children: (0, b.jsx)(c.A, {
                to: "newswire",
                "aria-label": n("Newswire"),
                children: n("Newswire")
              })
            }), (0, b.jsx)(c.NewswireBlocks, {
              className: w,
              posts: a,
              noSpecialOrder: !0
            }), (0, b.jsx)(c.Button, {
              role: "link",
              "aria-label": "Latest News",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest News",
              "data-gtm-label": "More Click",
              "data-testid": "view-more",
              to: "newswire",
              context: "secondary",
              children: n("View More")
            })]
          })
        },
        _ = (0, f.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: n
          } = (0, u.useQuery)(F.Home, {
            autoSetLoading: !0
          });
          if (!n) return null;
          const {
            games: i,
            posts: t,
            videos: s
          } = n;
          return (0, b.jsxs)("div", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c4b20405ad56a3b4dd00",
            children: [(0, b.jsx)(c.VideoCarousel, {
              videos: s.results,
              t: a
            }), (0, b.jsxs)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f9563b32021f220a9ca2",
              children: [(0, b.jsx)(V, {
                posts: t.results,
                t: a
              }), (0, b.jsx)(U, {
                games: i.results,
                t: a
              })]
            })]
          })
        })),
        W = (0, f.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: n,
            setNormalLogo: i
          } = (0, y.useRockstarLocalState)();
          return (0, o.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            i(!0), n()
          })), []), (0, b.jsx)("div", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f7903f781c69344545c0",
            "data-testid": "newswire-list",
            children: (0, b.jsx)(c.NewswireList, {
              t: a
            })
          })
        }));
      var T = n(4524),
        A = n.n(T);
      const E = (0, f.withTranslations)((e => {
          let {
            t: a
          } = e;
          const n = (0, d.useParams)(),
            {
              setBreadcrumb: i,
              setNormalLogo: t
            } = (0, y.useRockstarLocalState)();
          return (0, o.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), i()
          })), []), (0, b.jsx)(A(), {
            idHash: String(n.articleId)
          })
        })),
        D = "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cf17a6d004f287e319c2";
      var $ = n(3623),
        I = n.n($);
      const L = (0, f.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: n,
          setNormalLogo: i
        } = (0, y.useRockstarLocalState)(), t = (0, f.useQueryParams)(), [s, r] = (0, o.useState)({}), {
          data: d
        } = (0, u.useQuery)(I(), {
          variables: s,
          skip: !Object.entries(s).length,
          autoSetLoading: !0
        });
        if ((0, o.useEffect)((() => (n([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            n()
          })), []), (0, o.useEffect)((() => {
            r({
              ...s,
              type: t.get("type"),
              gameId: parseInt(t.get("gameId") ?? 0),
              index: null === t.get("type")
            })
          }), [t.get("type"), t.get("gameId")]), (0, o.useEffect)((() => (i(!1), () => i(!0))), []), !d) return null;
        if (d?.game && d?.gameVideos) return (0, b.jsx)("div", {
          className: D,
          children: (0, b.jsx)(c.VideoList, {
            vids: d.gameVideos.results,
            title: a("Videos from %s").replace("%s", d.game.title)
          })
        });
        const {
          games: l,
          gtao: m,
          gtaosessions: k,
          latest: g,
          rdo: v
        } = d;
        return (0, b.jsx)("div", {
          className: D,
          children: s.type ? "" : (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)(c.VideoCarousel, {
              videos: g.results,
              t: a
            }), (0, b.jsxs)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f8094f84e208d7bd6984",
              children: [(0, b.jsx)(c.VideoList, {
                vids: v.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, b.jsx)(c.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, b.jsx)(c.VideoList, {
                vids: k.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, b.jsx)(c.VideoList, {
                games: l,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var C = n(4224);
      const G = (0, f.withTranslations)((e => {
        let {
          t: a
        } = e;
        const n = (0, d.useNavigate)(),
          {
            setNormalLogo: i,
            setBreadcrumb: t,
            setTitle: s
          } = (0, y.useRockstarLocalState)(),
          {
            videoId: r
          } = (0, d.useParams)(),
          {
            video: l,
            related: m
          } = (0, C.useVideoData)({
            id: Number(r)
          });
        return (0, o.useEffect)((() => (t([{
          href: "/videos",
          title: a("Videos")
        }]), i(!1), () => {
          i(!0), t()
        })), []), (0, o.useEffect)((() => {
          l && s(`${l.game.title} - ${l.title}`)
        }), [l]), l ? (0, b.jsxs)(b.Fragment, {
          children: [(0, b.jsx)(C.PlayerWithInfo, {
            videoId: Number(r),
            videoChangeCallback: e => {
              n(`../videos/${e}`)
            }
          }), m?.results?.length ? (0, b.jsx)(c.VideoList, {
            vids: m.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }));
      var q = n(8842),
        P = n.n(q);
      const O = (0, f.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: n
        } = (0, y.useRockstarLocalState)(), {
          data: i
        } = (0, u.useQuery)(P(), {
          autoSetLoading: !0
        }), t = i?.games ?? null;
        return (0, o.useEffect)((() => (n([{
          href: "/games",
          title: a("Games")
        }]), () => n())), [t]), t ? (0, b.jsx)("div", {
          className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593bcb5b082e1fa4d2e670f",
          children: t.results.map((e => (0, b.jsx)(c.GameCard.Link, {
            game: e
          }, e.title_slug)))
        }) : null
      }));
      var B = n(6930),
        R = n.n(B);
      const M = e => {
          let {
            game: a,
            t: n
          } = e;
          const {
            purchases: i,
            digital_purchases: t
          } = a, s = i.length + t.length;
          if (0 === s) return null;
          const r = (0, b.jsx)(b.Fragment, {
              children: t.map((e => (0, b.jsx)(c.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            o = (0, b.jsx)(b.Fragment, {
              children: i.map((e => (0, b.jsx)(c.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (s > 1) return (0, b.jsxs)(c.Dropdown, {
            title: n("Buy Now"),
            children: [r, o]
          });
          const d = i.length ? i[0] : t[0];
          return d?.href ? (0, b.jsx)(c.Button, {
            to: d.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: n("Buy Now")
          }) : null
        },
        z = e => {
          let {
            game: a
          } = e;
          return (0, b.jsx)("h2", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b458fb38d5d5e7c6f8db",
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
            s = ["libertycitystories", "vicecitystories"].includes(a.title_slug);
          return a.developers.map((e => {
            t.push(e.title)
          })), a.platforms.map((e => {
            i.push(e.name)
          })), (0, b.jsx)(X, {
            title: n("Specifications"),
            children: (0, b.jsxs)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ba71fbd1ce867d9f1b0e",
              children: [(0, b.jsx)(Z, {
                title: n("Developer"),
                children: t.join(", ")
              }), (0, b.jsx)(Z, {
                title: n("Platform"),
                children: i.join(", ")
              }), (0, b.jsx)(Z, {
                title: n("Release Date"),
                children: a.release_date_in_words
              }), (0, b.jsxs)("dl", {
                className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e2d41c68ae18421e2a5f",
                children: [(0, b.jsx)("dt", {
                  children: n("Rating")
                }), (0, b.jsxs)("dd", {
                  className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f3cff5f2b25aed04854d",
                  children: [(0, b.jsx)(c.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), s ? (0, b.jsx)("div", {
                    className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c2050488c218a41dd0ae"
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
          return (0, b.jsx)(X, {
            c: !0,
            title: n("Screens"),
            children: (0, b.jsx)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b470979231a9d33f7cc0",
              children: a.map((e => (0, b.jsx)("div", {
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
          const [i, t] = (0, o.useState)(!1), s = "<br>", r = (0, b.jsx)("p", {
            dangerouslySetInnerHTML: {
              __html: a.description
            }
          }), d = a.description.includes(s);
          return (0, b.jsx)(X, {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f5fbd22d717e2808c737",
            title: n("Game Description"),
            children: d ? (0, b.jsxs)(b.Fragment, {
              children: [i ? r : (0, b.jsx)("p", {
                children: a.description.split(s)[0]
              }), " ", (0, b.jsx)(c.Button, {
                context: "secondary",
                onClick: () => t(!i),
                children: n(i ? "Read Less" : "Read More")
              })]
            }) : r
          })
        },
        Y = e => {
          let {
            game: a,
            posts: n,
            t: i
          } = e;
          return (0, b.jsxs)(X, {
            title: i("Latest News"),
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b4f97b4f531812bfd9e6",
            children: [(0, b.jsx)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d1ad1a52007bd6cbf951",
              children: n.map((e => (0, b.jsx)(c.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, b.jsx)(c.Button, {
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
          return (0, b.jsxs)(X, {
            title: i("Latest Videos"),
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d2a4e35a02a6f60bc3c2",
            children: [(0, b.jsx)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f881b1c3b2f5ba8065fc",
              children: n.map((e => (0, b.jsx)(c.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, b.jsx)(c.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: i("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        Z = e => {
          let {
            children: a,
            title: n,
            className: i = ""
          } = e;
          return (0, b.jsxs)("dl", {
            className: i,
            children: [(0, b.jsx)("dt", {
              children: n
            }), (0, b.jsx)("dd", {
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
          return (0, b.jsxs)("section", {
            className: n,
            style: t,
            children: [a ? (0, b.jsx)("h4", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c06aca25ab017de6a9ff",
              children: a
            }) : "", i]
          })
        },
        ee = (0, f.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: n,
            setTitle: i
          } = (0, y.useRockstarLocalState)(), t = (0, d.useParams)(), {
            data: s
          } = (0, u.useQuery)(R(), {
            variables: {
              titleSlug: t.gameTitlelug
            },
            autoSetLoading: !0
          }), r = s?.game ?? null;
          return (0, o.useEffect)((() => (r && i(r.title), n([{
            href: "/games",
            title: a("Games")
          }]), () => {
            n()
          })), [r]), r ? (0, b.jsxs)("div", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ea5fa63b89a62219113d",
            children: [(0, b.jsxs)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e3dd0b8721e5b51d0e97",
              children: [(0, b.jsxs)("div", {
                className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b76354fb05b980942662",
                children: [(0, b.jsx)(z, {
                  game: r,
                  t: a
                }), (0, b.jsxs)("div", {
                  className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e80d6fc21095d8e57319",
                  children: [(0, b.jsx)(M, {
                    game: r,
                    t: a
                  }), r.has_official_site && (0, b.jsx)(c.Button, {
                    to: r.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": r.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, b.jsx)(c.GameCard.Art, {
                imgSrc: r.fob_1280,
                titleSlug: r.title_slug
              })]
            }), (0, b.jsxs)("div", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593be5ed38ac3168dd2df67",
              children: [(0, b.jsx)(K, {
                game: r,
                t: a
              }), r.tags.length && r.tags[0].videos.length ? (0, b.jsx)(J, {
                game: r,
                videos: r.tags[0].videos,
                t: a
              }) : "", r.tags.length && r.tags[0].posts.length ? (0, b.jsx)(Y, {
                game: r,
                posts: r.tags[0].posts,
                t: a
              }) : "", r.screens.length ? (0, b.jsx)(Q, {
                screens: r.screens,
                t: a
              }) : "", (0, b.jsx)(H, {
                game: r,
                t: a
              })]
            })]
          }) : null
        })),
        ae = "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593be66077bb086d9ba252e",
        ne = "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a4315a4e64cdce6b042d";
      var ie = n(389),
        te = n.n(ie);
      const se = e => {
          let {
            loading: a,
            searchResponse: n,
            searchTerm: i,
            activeTab: t,
            t: s
          } = e;
          const [r, o] = (0, d.useSearchParams)();
          let l;
          switch (t) {
            case "posts":
              l = n.posts.results.map((e => (0, b.jsx)(c.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              l = n.games.results.map((e => (0, b.jsx)(c.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              l = n.videos.results.map((e => (0, b.jsx)(c.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              l = null
          }
          return (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)("section", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e8d247c95ca7e14d1e5e",
              children: Object.entries(n).map((e => {
                let [a, n] = e;
                return n?.paging?.count > 0 ? (0, b.jsx)(re, {
                  tabName: a,
                  activeTab: t,
                  searchTerm: i,
                  count: n?.paging?.count,
                  t: s
                }, a) : ""
              }))
            }), a ? "" : (0, b.jsx)("section", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fc198d45f7f447c595e1",
              children: (0, b.jsx)("div", {
                className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e64c63abd1c1f6848ef5",
                children: l
              })
            }), n[t]?.paging ? (0, b.jsx)("section", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a16d89b2b769baa98922",
              children: (0, b.jsx)(c.Paging, {
                data: n[t].paging,
                onPageUpdate: e => {
                  o({
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
            count: n,
            searchTerm: i,
            tabName: t,
            t: s
          } = e;
          return (0, b.jsxs)(c.A, {
            className: a === t ? "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b573a6a73e91f0b15e2f" : "",
            to: `/search?q=${i}&tab=${t}&sort=__searchScore&page=1`,
            children: [s(t), " ", (0, b.jsxs)("span", {
              children: ["(", n, ")"]
            })]
          }, t)
        },
        oe = (0, f.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              search: n
            },
            setSearch: i,
            setTitle: t
          } = (0, y.useRockstarLocalState)(), s = (0, f.useQueryParams)(), [r, d] = (0, o.useState)(null), [l, m] = (0, o.useState)({}), [k, g] = (0, o.useState)(s.get("tab") ?? null), {
            data: v = {},
            loading: p
          } = (0, u.useQuery)(te(), {
            variables: l,
            skip: !Object.entries(l).length || !l.q,
            autoSetLoading: !0
          });
          return (0, o.useEffect)((() => {
            const e = {
              q: s.get("q"),
              page: Number(s.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            m(e), i(s.get("q"))
          }), [s.get("q"), s.get("page"), s.get("tab"), k]), (0, o.useEffect)((() => {
            const e = Object.entries(v).find((e => {
              let [a, n] = e;
              return n?.paging?.count > 0
            }))?.[0];
            g(s.get("tab") ?? e ?? null)
          }), [v, s.get("tab")]), (0, o.useEffect)((() => {
            void 0 !== v?.games?.paging?.count && (d((v?.games?.paging?.count ?? 0) + (v?.videos?.paging?.count ?? 0) + (v?.posts?.paging?.count ?? 0)), t(v?.meta?.title.replace("%s", n)))
          }), [v, k]), Object.entries(l).length ? l.q ? null === r ? null : (0, b.jsxs)("div", {
            className: ae,
            children: [(0, b.jsxs)("section", {
              className: ne,
              children: [(0, b.jsxs)("div", {
                className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ed56a1f8c70a89879ed0",
                children: [(0, b.jsxs)("h4", {
                  children: [p ? a("search-active") : "", p || r ? p ? "" : a("Search results for:") : a("search-over-empty")]
                }), (0, b.jsx)("h1", {
                  children: a("%s").replace("%s", s.get("q"))
                })]
              }), (0, b.jsx)(c.SearchBox, {})]
            }), !p && r ? (0, b.jsx)(se, {
              searchResponse: v,
              searchTerm: n,
              activeTab: k,
              t: a
            }) : ""]
          }) : (0, b.jsx)("div", {
            className: ae,
            children: (0, b.jsxs)("section", {
              className: ne,
              children: [(0, b.jsx)("h3", {
                children: a("Search")
              }), (0, b.jsx)(c.SearchBox, {})]
            })
          }) : null
        }));
      var de = n(2327),
        ce = n.n(de);
      const le = {
        companyInfo: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fdf7ad7390432425a3f9",
        top: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c9f0c63e60bbcb56c5a8",
        content: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f2feda0369c0c992f672",
        nav: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e7fac1a1100cb55ef25e",
        us: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cc4fee3b0281f4452e44",
        br: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593de53608056aadcab2de7",
        cz: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d90e2a3649251d9f9b74",
        de: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f379ae83b1d2e5e3667a",
        es: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f53ac2b87e4b0e88f4cb",
        fr: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a43c6a887dd3b7128b40",
        it: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593dd4e51987c1ff36db3f4",
        jp: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f78303397afb6f93d0e1",
        kr: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b3454c6030e73489775f",
        mx: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593dd782b5cd8629ed94814",
        nl: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c8c30c11b7bbbc152ebb",
        pl: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593bf12aa0dd14556d0b41d",
        ru: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ff19da6ef088e11bf9fa",
        sa: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a226907c61648019cded",
        tw: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593bce44d59902ad4e6d892",
        zh: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a0f363760a76977e97a8",
        cookieSettingsButton: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f5a3056a97f4f3ca6674",
        cookieSettingsModal: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c61473be173bf0339bad",
        open: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ed6ad495e3a2c0172a9d",
        settings: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b94a8986c7c72543b62b",
        setting: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d53fc16a5d83bbd0112f",
        optional: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a4ac7a6cb5436b3df4d7",
        dot: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ba066f4a55aa02437346",
        optionalOn: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b39dcb057d9e64f3ffa9",
        rtl: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ae70ef252c5b38a62b36"
      };
      var me = n(4438),
        ke = n.n(me);
      const ue = (0, c.withSearchbarErrorBoundary)((0, f.withTranslations)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: n,
            titleKey: i,
            jsonType: t,
            t: s
          } = e;
          const r = (0, d.useNavigate)(),
            l = (0, d.useLocation)(),
            m = (0, f.useLocale)(),
            k = (0, f.useQueryParams)(),
            g = (0, o.useRef)(),
            v = (e, a) => {
              const n = a ?? e.target.hash,
                i = document.getElementById(n.replace("#", "")),
                t = document.getElementsByName(n.replace("#", ""))?.[0],
                s = i ?? t ?? null,
                o = k.get("country");
              if (e) {
                const a = `${l.pathname}${k.get("country")?`?country=${o}`:""}${n}`;
                r(a), e.preventDefault()
              }
              s && window.scroll(0, s.offsetTop - g.current.getBoundingClientRect().height - 60)
            },
            [p, h] = (0, o.useState)({}),
            {
              data: N,
              loading: y
            } = (0, u.useQuery)(ke(), {
              variables: p,
              skip: !Object.entries(p).length,
              autoSetLoading: !0
            });
          (0, o.useEffect)((() => {
            const e = k.get("country") ?? k.get("locale") ?? null,
              a = void 0 === n,
              i = a && null !== e ? e : a && m.split("_").length > 1 ? "hans" === m.split("_")[1] ? m.split("_")[0] : m.split("_")[1] : m;
            h({
              jsonType: t,
              jsonLocale: i || "us",
              metaUrl: `/${t}`
            })
          }), [k.get("country"), k.get("locale")]), (0, o.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = k.get("country"),
                    n = e.href.split("#")[1],
                    i = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${i}${l.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${n}`)
                }
              })(e), e.addEventListener("click", (e => {
                v(e, !1)
              }))
            })), "" !== l.hash && setTimeout((() => {
              v(!1, l.hash)
            }), 10)
          }), [N]);
          const {
            content: S
          } = N?.companyInfo ?? "";
          return (0, b.jsxs)("div", {
            className: le.companyInfo,
            "data-locale": p.jsonLocale,
            children: [(0, b.jsxs)("section", {
              className: le.top,
              ref: g,
              children: [(0, b.jsx)("h1", {
                children: s(i)
              }), "undefined" !== n && n ? "" : (0, b.jsx)("nav", {
                className: le.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => (0, b.jsx)(c.A, {
                  to: `${l.pathname}?country=${e}`,
                  className: le[e]
                }, a)))
              })]
            }), N && !y ? (0, b.jsx)("section", {
              className: le.content,
              "data-json-type": t,
              children: "cookies" === t && N ? (0, b.jsx)(ce(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: S,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, b.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: S
                }
              })
            }) : ""]
          })
        }))),
        fe = () => (0, b.jsx)(ue, {
          jsonType: "conduct",
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
        ge = () => (0, b.jsx)(ue, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        ve = () => (0, b.jsx)(ue, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        pe = () => (0, b.jsx)(ue, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        he = () => (0, b.jsx)(ue, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        be = () => (0, b.jsx)(ue, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        Ne = e => {
          let {
            t: a
          } = e;
          return (0, b.jsx)(c.Button, {
            className: le.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        ye = () => (0, b.jsx)(ue, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, f.withTranslations)(Ne)
        }),
        Se = () => (0, b.jsx)(ue, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        xe = {
          manuals: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cb1e49cfce02bacb9f17",
          list: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cad229be0a8aebc584fc",
          item: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a23570e3dc54680009c2",
          img: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e8c3fb8a8209b3eee363",
          dropdown: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593dd56d911b8cdb77d58ac",
          items: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f272cf6b78b0c58e91b4",
          detail: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e70fb589a8d25388ea11",
          rockstar: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f764d9f6eaabdd8fb5d9",
          music: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f56cc1d0797f336c02d2",
          gtaiv: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c9907907754a9559d40c",
          vcs: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fb05aabbc5e1455d7480",
          tlad: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f9bfee3c5e28e43c64db",
          bogt: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cb2a17541d6a5bd379eb",
          eflc: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f07f9a54f3303e5b5ae8",
          gameLogo: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c9a38509f2c92a5147f2",
          warriors: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a1f9c97ab4ced426b353",
          album: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e360a0996dbc6ecb942e",
          driver: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fafd97e9fd79d732d317",
          criticize: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593da6b4fb69c4004d8f01f",
          footsteps: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e3e5e16c132e3b9c2821",
          begood: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ab21b38bc89aeb88c185",
          wheelsofsteel: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b1f8c9ea0fc9ccc113e6",
          cantgetenough: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593eeb089740623c21af506",
          theweekend: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fa49e05daf31f1c45c3e",
          acid: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fdd8024aa3200c9956b0",
          elmalo: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593aa298aa7d7fd61084a76",
          ilikeit: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f1ca69668402acbcef57",
          migente: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593ca18bb258a10bc38f4e1",
          quimbara: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e9d7c1ef8f88dc30ccf7",
          revolt: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593da38e55d1db4a04fbd28",
          credit: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e6d33865a2b0cad13fec",
          additional: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593df339a04f89bce71682c",
          logo: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d27c7daf84749f7294f4",
          beat: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b7019cc7b55154c7c941",
          "liberty-rock": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b430d6e0f9853ce8f1f2",
          lchc: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c5358f1cedf67dc7b2c7",
          "electro-choc": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b153f575c5a660bd557b",
          "international-funk": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c369082539a25e34be34",
          vladivostok: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d4c5c5f2354590da1636",
          vibe: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fb2433804efe7f8c491d",
          "tuff-gong": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c45db70705fdc737c9e9",
          "san-juan": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d96f42fbcea4d72f1c0f",
          "radio-broker": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e6f72eaee100fcba344b",
          "massive-b": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b9dd6ebae49e77d70669",
          k109: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f2d174eff39585d633c5",
          journey: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593eee7a9a9f87346a5a789",
          jnr: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d58773295424fd4a6474",
          interiors: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f2ca04a38a7c73476b21",
          fusion: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593aa9ec3778aec504b5e38",
          classics: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b330bd79e5c1e2c90c06",
          "vice-city": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f0c4d20e395d68c01223",
          "self-actualization": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593dab79bc3639900734ce8",
          ramjam: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593dabfc6a419fe0ff69d7e",
          emotion: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e647bab5e3e97ebd0c3a",
          flash: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a11a4a48b2cce90a0b23",
          fresh: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c9c555c3cd312db2e22e",
          paradise: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cfb4122309bf4c994515",
          espantoso: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d2880c00a8e7c29e0ada",
          vcfl: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c384e124115da4ff0c8d",
          vrock: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c84a7ace91a9cf1fd8c8",
          wave: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d0fedaf40b08ec500883",
          warriorsCredit: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593aee6d517dc62f3032703"
        };
      var je = n(3310),
        we = n.n(je);
      const Fe = (0, f.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          data: n
        } = (0, u.useQuery)(we(), {
          autoSetLoading: !0
        });
        if (!n) return null;
        const {
          manuals: i
        } = n;
        return (0, b.jsxs)("div", {
          className: xe.manuals,
          children: [(0, b.jsx)("h2", {
            children: a("Manuals")
          }), (0, b.jsx)("div", {
            className: xe.list,
            children: i.map((e => (0, b.jsxs)("div", {
              className: xe.item,
              children: [(0, b.jsx)("div", {
                className: xe.img,
                style: {
                  backgroundImage: `url(${e.game.fob_640})`
                }
              }), (0, b.jsx)(c.Dropdown, {
                title: e.game.title,
                className: xe.dropdown,
                children: e.manuals_platforms.map((e => (0, b.jsxs)("p", {
                  children: [(0, b.jsx)("span", {
                    children: e.platform
                  }), e.manuals_links.map((e => (0, b.jsx)("a", {
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
      var Ue = n(9696),
        Ve = n.n(Ue);
      const _e = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: n
          } = Ve();
          return (0, b.jsxs)("div", {
            className: xe.detail,
            children: [(0, b.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: n(a.content)
              }
            }), a.album_cover ? (0, b.jsx)("div", {
              className: [xe.album, xe[a.album_cover]].join(" ")
            }) : "", (0, b.jsx)(c.A, {
              to: "/",
              children: (0, b.jsx)("div", {
                className: xe.rockstar
              })
            })]
          })
        },
        We = (0, f.withTranslations)((e => {
          let {
            stations: a,
            gameId: n,
            t: i
          } = e;
          const {
            sanitize: t
          } = Ve();
          return (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)("h1", {
              children: i("Music Credits")
            }), a && 55 === a[0].game_id ? (0, b.jsxs)("div", {
              className: xe.warriorsCredit,
              children: [(0, b.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, b.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, b.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, b.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, b.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, b.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, b.jsx)("div", {
              className: [xe.list, a && 55 === a[0].game_id ? xe.warriors : ""].join(" "),
              children: a && a.map(((e, s) => (0, b.jsxs)("div", {
                className: xe.station,
                children: [55 !== e.game_id ? (0, b.jsx)("div", {
                  className: [xe.logo, xe[e.slug]].join(" ")
                }) : (0, b.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, b.jsxs)("div", {
                  className: xe.credit,
                  children: [(0, b.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, b.jsx)("p", {
                    children: e.written_by
                  }), (0, b.jsx)("p", {
                    children: e.published_by
                  }), (0, b.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, b.jsx)("p", {
                    className: xe.additional,
                    children: (0, b.jsx)(c.A, {
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
        Ae = n.n(Te);
      const Ee = () => {
          const e = (0, f.useQueryParams)(),
            a = Number(e.get("gameId")),
            n = Number(e.get("songId")),
            i = Number(e.get("stationId"));
          let t = !1;
          const {
            data: s
          } = (0, u.useQuery)(Ae(), {
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
            e.id === i && e.music_credits.map((e => {
              e.id === n && (t = e.music_detail)
            }))
          })), (0, b.jsxs)("div", {
            className: [xe.music, 25 === a ? xe.gtaiv : 26 === a ? xe.tlad : 32 === a ? xe.bogt : 28 === a ? xe.eflc : 34 === a ? xe.vcs : ""].join(" "),
            children: [(0, b.jsx)("div", {
              className: [xe.gameLogo, 26 === a ? xe.tlad : 32 === a ? xe.bogt : 28 === a ? xe.eflc : 25 === a ? xe.gtaiv : 34 === a ? xe.vcs : 55 === a ? xe.warriors : ""].join(" ")
            }), a && r ? i && n && t ? (0, b.jsx)(_e, {
              detail: t
            }) : (0, b.jsx)(We, {
              stations: r,
              gameId: a
            }) : null]
          })
        },
        De = (0, f.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, b.jsxs)("div", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f5a3fd19ef32d4a7c9fb",
            children: [(0, b.jsx)("section", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593d6cad5cd00b5df35f739",
              children: (0, b.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, b.jsxs)("section", {
              className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fcf7d4f6f4fee3e8dc0e",
              children: [(0, b.jsx)("p", {
                children: a("contact.intro")
              }), (0, b.jsxs)("p", {
                children: [(0, b.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, b.jsxs)("p", {
                children: [(0, b.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, b.jsxs)("p", {
                children: [(0, b.jsx)("span", {
                  children: a("contact.technical")
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, b.jsxs)("p", {
                children: [(0, b.jsx)("span", {
                  children: a("contact.career")
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, b.jsxs)("p", {
                children: [(0, b.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, b.jsxs)("p", {
                children: [(0, b.jsx)("span", {
                  children: a("contact.legal")
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, b.jsxs)("p", {
                children: [(0, b.jsx)("span", {
                  children: a("contact.latest")
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, b.jsx)("br", {}), (0, b.jsx)(c.A, {
                  to: "https://www.youtube.com/user/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Youtube Site",
                  children: "https://www.youtube.com/user/RockstarGames"
                })]
              }), (0, b.jsx)("br", {})]
            })]
          })
        })),
        $e = {
          maint: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593be0ddcc1c6860acb4d98",
          content: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a8c1a7d64263dcfa3aed",
          logo: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e1d82fca0195b898bef7"
        },
        Ie = () => (0, b.jsx)("div", {
          className: $e.maint,
          children: (0, b.jsxs)("div", {
            className: $e.content,
            children: [(0, b.jsx)("div", {
              className: $e.logo
            }), (0, b.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, b.jsx)("a", {
              className: $e.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        Le = () => (0, b.jsxs)("div", {
          className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b39a5d752efba84c2088",
          children: [(0, b.jsx)("div", {
            className: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593abd863939e037fa8cd4a"
          }), (0, b.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        Ce = {
          jpwrapper: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593fbda6fcc564319f2ca50",
          body: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593dcc96769ee1b492b6afe",
          responsiveImage: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b31b08939302d5fba3aa",
          link: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593b417335127cf0ebe3b7d",
          bodyPadding: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f9397a5cae04363543aa",
          headline_3: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593e8e3444e36b6af29999e",
          headline_2: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593f7091f9a7f368c272038",
          disclaimer: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c874530844841de0223d"
        },
        Ge = c.framer.withFadeIn((() => (0, b.jsxs)("div", {
          className: Ce.jpwrapper,
          children: [(0, b.jsx)(c.MultiSourceImage, {
            className: Ce.responsiveImage,
            image: {
              desktop: n(6019)
            }
          }), (0, b.jsxs)(c.Grid, {
            className: [Ce.body, Ce.inner, Ce.gap_sm].join(" "),
            children: [(0, b.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, b.jsxs)("p", {
              children: [(0, b.jsx)("a", {
                className: Ce.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, b.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, b.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, b.jsx)(c.MultiSourceImage, {
              image: {
                desktop: n(2143)
              }
            }), (0, b.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, b.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, b.jsx)(c.MultiSourceImage, {
              className: Ce.bodyPadding,
              image: {
                desktop: n(6836)
              }
            }), (0, b.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, b.jsx)(c.MultiSourceImage, {
              className: Ce.bodyPadding,
              image: {
                desktop: n(9319)
              }
            }), (0, b.jsxs)("p", {
              children: ["さらなる詳細は、", (0, b.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: Ce.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, b.jsx)("p", {
              className: Ce.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, b.jsx)(c.Rating, {
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })]
        }))),
        qe = {
          "frontline-heroes": (0, o.lazy)((() => n.e(38).then(n.bind(n, 7038)))),
          "gta-tv": (0, o.lazy)((() => n.e(414).then(n.t.bind(n, 3414, 23)))),
          "modules-core-gif-viewer": (0, o.lazy)((() => n.e(774).then(n.t.bind(n, 2774, 23)))),
          "modules-core-videoplayer": (0, o.lazy)((() => Promise.resolve().then(n.t.bind(n, 4224, 23)))),
          "rockstar-tv": (0, o.lazy)((() => n.e(107).then(n.t.bind(n, 4107, 23)))),
          "screenshot-viewer": (0, o.lazy)((() => n.e(142).then(n.t.bind(n, 1142, 23)))),
          "sites-careers": (0, o.lazy)((() => n.e(710).then(n.t.bind(n, 1710, 23)))),
          "sites-gta-gen9": (0, o.lazy)((() => n.e(291).then(n.t.bind(n, 6291, 23)))),
          "sites-gta-trilogy": (0, o.lazy)((() => n.e(829).then(n.t.bind(n, 3829, 23)))),
          "sites-red-dead-online": (0, o.lazy)((() => n.e(308).then(n.t.bind(n, 308, 23)))),
          "sites-red-dead-redemption": (0, o.lazy)((() => n.e(295).then(n.t.bind(n, 5295, 23)))),
          "sites-rockstargames-downloads": (0, o.lazy)((() => n.e(70).then(n.t.bind(n, 1070, 23))))
        },
        Pe = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = qe[e],
            {
              setHeaderHidden: i
            } = (0, y.useRockstarLocalState)();
          return (0, b.jsx)(o.Suspense, {
            fallback: "",
            children: (0, b.jsx)(n, {
              setHeaderHidden: i,
              config: a
            })
          })
        },
        Oe = (0, c.withSearchbarErrorBoundary)((() => {
          const e = [{
            path: "/",
            element: (0, b.jsx)(_, {})
          }, {
            path: "/careers-privacy",
            element: (0, b.jsx)(he, {})
          }, {
            path: "/ccpa",
            element: (0, b.jsx)(Se, {})
          }, {
            path: "/conduct",
            element: (0, b.jsx)(fe, {})
          }, {
            path: "/contact",
            element: (0, b.jsx)(De, {})
          }, {
            path: "/cookies",
            element: (0, b.jsx)(ye, {})
          }, {
            path: "/corpinfo",
            element: (0, b.jsx)(ge, {})
          }, {
            path: "/eula",
            element: (0, b.jsx)(ve, {})
          }, {
            path: "/games",
            element: (0, b.jsx)(O, {})
          }, {
            path: "/games/:gameTitlelug",
            element: (0, b.jsx)(ee, {})
          }, {
            path: "/legal",
            element: (0, b.jsx)(pe, {})
          }, {
            path: "/gta-v/thankyou",
            element: (0, b.jsx)(x.Credits, {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: (0, b.jsx)(Le, {})
          }, {
            path: "/community_event",
            element: (0, b.jsx)(Ge, {})
          }, {
            path: "/reddeadredemption/*",
            element: Pe("sites-red-dead-redemption")
          }, {
            path: "/reddeadonline/thankyou",
            element: (0, b.jsx)(x.Credits, {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Pe("sites-careers")
          }, {
            path: "/downloads/*",
            element: Pe("sites-rockstargames-downloads")
          }, {
            path: "/reddeadonline/*",
            element: Pe("sites-red-dead-online")
          }, {
            path: "/frontline-heroes",
            element: Pe("frontline-heroes")
          }, {
            path: "/gifs/:hashId",
            element: Pe("modules-core-gif-viewer")
          }, {
            path: "/gta-v/*",
            element: Pe("sites-gta-gen9", {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Pe("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: Pe("sites-gta-gen9", {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy",
            element: Pe("sites-gta-trilogy")
          }, {
            path: "/gtatv/*",
            element: Pe("gta-tv")
          }, {
            path: "/manuals",
            element: (0, b.jsx)(Fe, {})
          }, {
            path: "/manuals/music",
            element: (0, b.jsx)(Ee, {})
          }, {
            path: "/newswire",
            element: (0, b.jsx)(W, {})
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: (0, b.jsx)(E, {})
          }, {
            path: "/old-privacy",
            element: (0, b.jsx)(be, {})
          }, {
            path: "/privacy",
            element: (0, b.jsx)(be, {})
          }, {
            path: "/rockstartv/*",
            element: Pe("rockstar-tv")
          }, {
            path: "/screenshot-viewer/*",
            element: Pe("screenshot-viewer")
          }, {
            path: "/search",
            element: (0, b.jsx)(oe, {})
          }, {
            path: "/socialclubmaintenance",
            element: (0, b.jsx)(Ie, {})
          }, {
            path: "/videoplayer",
            element: Pe("modules-core-videoplayer")
          }, {
            path: "/videos",
            element: (0, b.jsx)(L, {})
          }, {
            path: "/videos/:videoId",
            element: (0, b.jsx)(G, {})
          }, {
            path: "*",
            element: (0, b.jsx)(c.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, d.useRoutes)(e)
        })),
        Be = {
          main: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593aaf63b52008f75924bfd",
          gameSite: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cd11032e8b42a51c2e09",
          "theme-std": "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593a11e15134625e6be7114",
          headerHidden: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593cb24ea20571cdd3eeb64",
          standalone: "-Users-pconroy-Work-void-heart-packages-frontend-micro-frontends-sites-rockstargames-7185b668a703e593c7d686e28fbcff5e154b"
        },
        Re = (0, i.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, y.useRockstarLocalState)();
          return (0, o.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, b.jsx)("main", {
            role: "main",
            id: "main",
            className: [Be.main, a ? Be.standalone : "", e ? Be.headerHidden : ""].join(" "),
            children: (0, b.jsx)(Oe, {})
          })
        })),
        Me = ((0, u.makeVar)({
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
          standalone: (["/careers", "/gifs", "/frontline-heroes", "/gtatv", "/rockstartv", "/screenshot-viewer", "/videoplayer"].find((e => Me.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        He = (0, u.makeVar)(ze),
        Qe = window?.env?.graphEnv ?? "prod",
        Ke = e => {
          let {
            standalone: a,
            customFooter: n
          } = e;
          const [i] = (0, l.useModal)(), t = ((0, d.useNavigate)(), (0, f.useLocale)());
          return (0, b.jsx)(N, {
            locales: S.intlMessages,
            lang: t,
            children: (0, b.jsx)(v.RockstarUserProvider, {
              children: (0, b.jsx)(v.GtmProvider, {
                children: (0, b.jsxs)(c.ScrollTracker, {
                  threshold: [25, 50, 75, 90, 100],
                  children: [(0, b.jsx)(x.AccessibilityButton, {}), i, (0, b.jsx)(c.ScrollToTop, {}), a ? "" : (0, b.jsx)(x.Header, {}), (0, b.jsx)(p.Menu, {}), (0, b.jsx)(Re, {}), a || n ? "" : (0, b.jsx)(x.FooterNav, {})]
                })
              })
            })
          })
        },
        Ye = e => {
          let {
            standalone: a,
            customFooter: n
          } = e;
          return (0, b.jsx)(l.ModalProvider, {
            children: (0, b.jsx)(Ke, {
              standalone: a,
              customFooter: n
            })
          })
        },
        {
          pingBearer: Je
        } = (0, f.getScConfigForOrigin)(),
        Ze = (0, u.withReactiveState)((() => {
          const e = (0, u.useBase)(),
            {
              state: {
                standalone: a,
                customFooter: n
              },
              setLoading: i,
              setTitle: t
            } = (0, f.useRockstarLocalState)();
          return (0, o.useEffect)((() => {
            window.addEventListener("message", (e => {
              const a = e.data?.type ?? null;
              "graph.titleUpdate" === a && t(e.data.title), "graph.loadingUpdate" === a && i(e.data.loading)
            }))
          }), [i, t]), (0, b.jsx)(f.ResizeProvider, {
            children: (0, b.jsx)(g.ScrollProvider, {
              children: (0, b.jsx)(d.BrowserRouter, {
                basename: e,
                children: (0, b.jsx)(Ye, {
                  standalone: a,
                  customFooter: n
                })
              })
            })
          })
        }), {
          state: He
        }),
        Xe = (0, u.withRockstarGraph)(Ze, {
          env: Qe,
          token: (0, u.makeVar)(null),
          tokenPing: Je,
          tokenPingExpires: (0, u.makeVar)(null),
          typePolicies: {
            ...k()
          }
        }),
        ea = window?.env?.gtmId ?? null,
        aa = window?.env?.oneTrustId ?? null;
      (0, i.init)({
        id: ea
      }), s()({
        id: aa,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, r.s)(e).render((0, b.jsx)(Xe, {}))
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
          r = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      i.definitions = i.definitions.concat(s(n(6077).definitions)), i.definitions = i.definitions.concat(s(n(6921).definitions));
      var o = {};

      function d(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = i, e.exports.Home = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = o[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (o[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = d(e, a);
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

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      i.definitions = i.definitions.concat(s(n(6077).definitions)), i.definitions = i.definitions.concat(s(n(6921).definitions)), i.definitions = i.definitions.concat(s(n(9349).definitions));
      var o = {};

      function d(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = i, e.exports.Search = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = o[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (o[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = d(e, a);
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
          r = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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

      function r(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          r(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          r(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          r(e, a)
        }))
      }
      i.definitions = i.definitions.concat(s(n(6077).definitions)), i.definitions = i.definitions.concat(s(n(6921).definitions));
      var o = {};

      function d(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), o[e.name.value] = a
        }
      })), e.exports = i, e.exports.GameInfo = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = o[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (o[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var i = d(e, a);
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
          r = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
          r = new Set,
          o = new Set;
        for (s.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var d = o;
          o = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
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
      var r = {};

      function o(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var i = e.definitions[n];
          if (i.name && i.name.value == a) return i
        }
      }
      i.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), r[e.name.value] = a
        }
      })), e.exports = i, e.exports.VideosList = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [o(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var i = r[a] || new Set,
          t = new Set,
          s = new Set;
        for (i.forEach((function(e) {
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
          var i = o(e, a);
          i && n.definitions.push(i)
        })), n
      }(i, "VideosList")
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
//# sourceMappingURL=0f9cc5cc01aae432c099.js.map