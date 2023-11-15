(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [38], {
    3639: (e, a, i) => {
      "use strict";
      i.r(a), i(7842);
      var n = i(6331),
        t = i(4690),
        s = i.n(t),
        r = i(441),
        d = i(279),
        l = i(398),
        o = i(7199);
      const c = "__MFE_GLOBAL_HOOK__",
        m = () => {
          const e = window;
          e[c]?.history || (e[c] = Object.assign(e[c] || {}, {
            history: (0, o.lX)()
          }))
        };
      var u = i(8976),
        k = i(8008),
        g = i(5269),
        v = i.n(g),
        f = i(4859),
        b = i(9929),
        p = i(1968),
        h = i(1458),
        N = i(1093),
        S = i(3705);
      const x = e => {
        let {
          locales: a,
          lang: i,
          children: n
        } = e;
        const t = (0, d.useMemo)((() => function(e) {
            const a = e.split(/[-_]/);
            return a[a.length - 1] = a[a.length - 1].toLowerCase(), a
          }(i)), [i]),
          s = (0, d.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, t[1])), [i, a]);
        return (0, S.jsx)(N.Z, {
          messages: s,
          locale: t[0],
          defaultLocale: "en",
          children: n
        }, t[0])
      };
      var j = i(3657),
        y = i(1570),
        w = i(6711),
        F = i(4172),
        V = i(9097);
      const _ = "rockstargames-sites-rockstargamesf75798e3984014f9cd35c5956e94fbb3",
        T = "rockstargames-sites-rockstargamesaa6bc8070e5e81ea0594636575db8fd6";
      var A = i(176);
      const E = e => {
          let {
            games: a,
            t: i
          } = e;
          return (0, S.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbec4f690ea94ae150d36b6be04b7011d",
            "data-testid": "featuredGames",
            children: [(0, S.jsx)("h3", {
              className: _,
              children: (0, S.jsx)(u.A, {
                to: "newswire",
                "aria-label": i("Featured Games"),
                "data-testid": "featuredGamesHeader",
                children: i("Featured Games")
              })
            }), (0, S.jsx)("div", {
              className: T,
              children: a.map((e => (0, S.jsx)(u.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, S.jsx)(u.Button, {
              role: "link",
              "aria-label": "Latest Games",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest Games",
              "data-gtm-label": "More Click",
              to: "games",
              context: "secondary",
              "data-testid": "viewMoreButton",
              children: i("View More")
            })]
          })
        },
        D = e => {
          let {
            posts: a,
            t: i
          } = e;
          return (0, S.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbc6c5d345fb1cccca402fd4a97a8bef8",
            "data-testid": "newswire",
            children: [(0, S.jsx)("h3", {
              className: _,
              children: (0, S.jsx)(u.A, {
                to: "newswire",
                "aria-label": i("Newswire"),
                "data-testid": "newswireHeader",
                children: i("Newswire")
              })
            }), (0, S.jsx)(u.NewswireBlocks, {
              className: T,
              posts: a,
              noSpecialOrder: !0
            }), (0, S.jsx)(u.Button, {
              role: "link",
              "aria-label": "Latest News",
              "data-gtm-category": "Home",
              "data-gtm-action": "Latest News",
              "data-gtm-label": "More Click",
              to: "newswire",
              context: "secondary",
              "data-testid": "viewMoreButton",
              children: i("View More")
            })]
          })
        },
        L = (0, b.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, f.useQuery)(A.Home, {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            games: n,
            posts: t,
            videos: s
          } = i;
          return (0, S.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesdcf817f11d19ae0ef32bf4b753d292a2",
            "data-testid": "homepageBody",
            children: [(0, S.jsx)(u.VideoCarousel, {
              videos: s.results,
              t: a
            }), (0, S.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesd04358d9e38bc205e1c35dee36efcaa1",
              children: [(0, S.jsx)(D, {
                posts: t.results,
                t: a
              }), (0, S.jsx)(E, {
                games: n.results,
                t: a
              })]
            })]
          })
        })),
        $ = (0, b.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setNormalLogo: n
          } = (0, j.useRockstarLocalState)();
          return (0, d.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            n(!0), i()
          })), []), (0, S.jsx)("div", {
            className: "rockstargames-sites-rockstargamesb7f93a0d98bb3eaac82ba7d6aef63890",
            "data-testid": "newswire-list",
            children: (0, S.jsx)(u.NewswireList, {
              t: a
            })
          })
        }));
      var I = i(4524),
        C = i.n(I);
      const G = (0, b.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, l.useParams)(),
            {
              setBreadcrumb: n,
              setNormalLogo: t
            } = (0, j.useRockstarLocalState)();
          return (0, d.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), n()
          })), []), (0, S.jsx)(C(), {
            idHash: String(i.articleId)
          })
        })),
        P = "rockstargames-sites-rockstargamese6a4f8b4027dadd3be8f848d9b846bc3";
      var q = i(1028),
        B = i.n(q);
      const O = (0, b.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i,
          setNormalLogo: n
        } = (0, j.useRockstarLocalState)(), t = (0, b.useQueryParams)(), [s, r] = (0, d.useState)({}), {
          data: l
        } = (0, f.useQuery)(B(), {
          variables: s,
          skip: !Object.entries(s).length,
          autoSetLoading: !0
        });
        if ((0, d.useEffect)((() => (i([{
            href: "/videos",
            title: a("Videos")
          }]), () => {
            i()
          })), []), (0, d.useEffect)((() => {
            r({
              ...s,
              type: t.get("type"),
              gameId: parseInt(t.get("gameId") ?? 0),
              index: null === t.get("type")
            })
          }), [t.get("type"), t.get("gameId")]), (0, d.useEffect)((() => (n(!1), () => n(!0))), []), !l) return null;
        if (l?.game && l?.gameVideos) return (0, S.jsx)("div", {
          className: P,
          children: (0, S.jsx)(u.VideoList, {
            vids: l.gameVideos.results,
            title: a("Videos from %s").replace("%s", l.game.title)
          })
        });
        const {
          games: o,
          gtao: c,
          gtaosessions: m,
          latest: k,
          rdo: g
        } = l;
        return (0, S.jsx)("div", {
          className: P,
          children: s.type ? "" : (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)(u.VideoCarousel, {
              videos: k.results,
              t: a
            }), (0, S.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesb9a5297e3e78f65221054aa1f6d77597",
              children: [(0, S.jsx)(u.VideoList, {
                vids: g.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, S.jsx)(u.VideoList, {
                vids: c.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, S.jsx)(u.VideoList, {
                vids: m.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, S.jsx)(u.VideoList, {
                games: o,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var R = i(4224);
      const M = (0, b.withTranslations)((e => {
        let {
          t: a
        } = e;
        const i = (0, l.useNavigate)(),
          {
            setNormalLogo: n,
            setBreadcrumb: t,
            setTitle: s
          } = (0, j.useRockstarLocalState)(),
          {
            videoId: r
          } = (0, l.useParams)(),
          {
            video: o,
            related: c
          } = (0, R.useVideoData)({
            id: Number(r)
          });
        return (0, d.useEffect)((() => (t([{
          href: "/videos",
          title: a("Videos")
        }]), n(!1), () => {
          n(!0), t()
        })), []), (0, d.useEffect)((() => {
          o && s(`${o.game.title} - ${o.title}`)
        }), [o]), o ? (0, S.jsxs)(S.Fragment, {
          children: [(0, S.jsx)(R.PlayerWithInfo, {
            videoId: Number(r),
            videoChangeCallback: e => {
              i(`../videos/${e}`)
            }
          }), c?.results?.length ? (0, S.jsx)(u.VideoList, {
            vids: c.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }));
      var z = i(1326),
        U = i.n(z);
      const H = (0, b.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i
        } = (0, j.useRockstarLocalState)(), {
          data: n
        } = (0, f.useQuery)(U(), {
          autoSetLoading: !0
        }), t = n?.games ?? null;
        return (0, d.useEffect)((() => (i([{
          href: "/games",
          title: a("Games")
        }]), () => i())), [t]), t ? (0, S.jsx)("div", {
          className: "rockstargames-sites-rockstargamese688ae11bba38a9723018b024df142ee",
          "data-testid": "gamesBody",
          children: t.results.map((e => (0, S.jsx)(u.GameCard.Link, {
            game: e
          }, e.title_slug)))
        }) : null
      }));
      var Q = i(4336),
        K = i.n(Q);
      const W = e => {
          let {
            game: a,
            t: i
          } = e;
          const {
            purchases: n,
            digital_purchases: t
          } = a, s = n.length + t.length;
          if (0 === s) return null;
          const r = (0, S.jsx)(S.Fragment, {
              children: t.map((e => (0, S.jsx)(u.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            d = (0, S.jsx)(S.Fragment, {
              children: n.map((e => (0, S.jsx)(u.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (s > 1) return (0, S.jsxs)(u.Dropdown, {
            title: i("Buy Now"),
            children: [r, d]
          });
          const l = n.length ? n[0] : t[0];
          return l?.href ? (0, S.jsx)(u.Button, {
            to: l.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: i("Buy Now")
          }) : null
        },
        Y = e => {
          let {
            game: a
          } = e;
          return (0, S.jsx)("h2", {
            className: "rockstargames-sites-rockstargamesd999c131d523164f20bad2d6c322c7b0",
            children: a.title
          })
        },
        Z = e => {
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
          })), (0, S.jsx)(ne, {
            title: i("Specifications"),
            children: (0, S.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesa3be2ad0c6089bcc99dc39a07f1c8556",
              children: [(0, S.jsx)(ie, {
                title: i("Developer"),
                children: t.join(", ")
              }), (0, S.jsx)(ie, {
                title: i("Platform"),
                children: n.join(", ")
              }), (0, S.jsx)(ie, {
                title: i("Release Date"),
                children: a.release_date_in_words
              }), (0, S.jsxs)("dl", {
                className: "rockstargames-sites-rockstargamesb2e21b26b02b2f01abbfafaa61d2132f",
                children: [(0, S.jsx)("dt", {
                  children: i("Rating")
                }), (0, S.jsxs)("dd", {
                  className: "rockstargames-sites-rockstargamesbb187beb63c639e6ee81536d2ec853cc",
                  children: [(0, S.jsx)(u.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), s ? (0, S.jsx)("div", {
                    className: "rockstargames-sites-rockstargamesf6106c12ee39ddbd58cb459de26ba30f"
                  }) : ""]
                })]
              })]
            })
          })
        },
        J = e => {
          let {
            screens: a,
            t: i
          } = e;
          return (0, S.jsx)(ne, {
            c: !0,
            title: i("Screens"),
            children: (0, S.jsx)("div", {
              className: "rockstargames-sites-rockstargamesdf799e57a036664e01d8b1c28918f7e7",
              children: a.map((e => (0, S.jsx)("div", {
                style: {
                  backgroundImage: `url(${e.file})`
                }
              }, e.file)))
            })
          })
        },
        X = e => {
          let {
            game: a,
            t: i
          } = e;
          const [n, t] = (0, d.useState)(!1), s = "<br>", r = (0, S.jsx)("p", {
            dangerouslySetInnerHTML: {
              __html: a.description
            }
          }), l = a.description.includes(s);
          return (0, S.jsx)(ne, {
            className: "rockstargames-sites-rockstargamesbb3bcfffbb0324212ca756bbcf0b331d",
            title: i("Game Description"),
            children: l ? (0, S.jsxs)(S.Fragment, {
              children: [n ? r : (0, S.jsx)("p", {
                children: a.description.split(s)[0]
              }), " ", (0, S.jsx)(u.Button, {
                context: "secondary",
                onClick: () => t(!n),
                children: i(n ? "Read Less" : "Read More")
              })]
            }) : r
          })
        },
        ee = e => {
          let {
            game: a,
            posts: i,
            t: n
          } = e;
          return (0, S.jsxs)(ne, {
            title: n("Latest News"),
            className: "rockstargames-sites-rockstargamesae6f169b7d8b535785cbab042d17b2f3",
            children: [(0, S.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf4370b320e728cb6f2ebfe098d24dd9a",
              children: i.map((e => (0, S.jsx)(u.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, S.jsx)(u.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": `${a.title} - More Click`,
              to: `/newswire?tag_id=${a.tags[0].id}`,
              context: "secondary",
              children: n("Read more at the Rockstar Newswire")
            })]
          })
        },
        ae = e => {
          let {
            game: a,
            videos: i,
            t: n
          } = e;
          return (0, S.jsxs)(ne, {
            title: n("Latest Videos"),
            className: "rockstargames-sites-rockstargamesea974aced4784cc236949e23461151c5",
            children: [(0, S.jsx)("div", {
              className: "rockstargames-sites-rockstargamese1adbaf782c177537eee8ed7acdb33a9",
              children: i.map((e => (0, S.jsx)(u.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, S.jsx)(u.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: n("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        ie = e => {
          let {
            children: a,
            title: i,
            className: n = ""
          } = e;
          return (0, S.jsxs)("dl", {
            className: n,
            children: [(0, S.jsx)("dt", {
              children: i
            }), (0, S.jsx)("dd", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          })
        },
        ne = e => {
          let {
            title: a,
            className: i = "",
            children: n,
            style: t = {}
          } = e;
          return (0, S.jsxs)("section", {
            className: i,
            style: t,
            children: [a ? (0, S.jsx)("h4", {
              className: "rockstargames-sites-rockstargamesd3ae0f7bea78620d460ed1de4bfb1546",
              children: a
            }) : "", n]
          })
        },
        te = (0, b.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setTitle: n
          } = (0, j.useRockstarLocalState)(), t = (0, l.useParams)(), {
            data: s
          } = (0, f.useQuery)(K(), {
            variables: {
              titleSlug: t.gameTitlelug
            },
            autoSetLoading: !0
          }), r = s?.game ?? null;
          return (0, d.useEffect)((() => (r && n(r.title), i([{
            href: "/games",
            title: a("Games")
          }]), () => {
            i()
          })), [r]), r ? (0, S.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesf3214996ae18b839cbe8d74436e33569",
            children: [(0, S.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesad748c74afaaac7ae3742ea01deb9327",
              children: [(0, S.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesb12200c67941853e210bfa8ec2a2151b",
                children: [(0, S.jsx)(Y, {
                  game: r,
                  t: a
                }), (0, S.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamese117d55b425e388a7f3ef0036fad9045",
                  children: [(0, S.jsx)(W, {
                    game: r,
                    t: a
                  }), r.has_official_site && (0, S.jsx)(u.Button, {
                    to: r.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": r.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, S.jsx)(u.GameCard.Art, {
                imgSrc: r.fob_1280,
                titleSlug: r.title_slug
              })]
            }), (0, S.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesce487783cab9e36402d70d80e6d9d778",
              children: [(0, S.jsx)(X, {
                game: r,
                t: a
              }), r.tags.length && r.tags[0].videos.length ? (0, S.jsx)(ae, {
                game: r,
                videos: r.tags[0].videos,
                t: a
              }) : "", r.tags.length && r.tags[0].posts.length ? (0, S.jsx)(ee, {
                game: r,
                posts: r.tags[0].posts,
                t: a
              }) : "", r.screens.length ? (0, S.jsx)(J, {
                screens: r.screens,
                t: a
              }) : "", (0, S.jsx)(Z, {
                game: r,
                t: a
              })]
            })]
          }) : null
        })),
        se = "rockstargames-sites-rockstargamesa6b96f1aa331851eea3b9fad5cb04a8f",
        re = "rockstargames-sites-rockstargamescdc8dd93ce6946707dab221c0a16845e";
      var de = i(4187),
        le = i.n(de);
      const oe = e => {
          let {
            loading: a,
            searchResponse: i,
            searchTerm: n,
            activeTab: t,
            t: s
          } = e;
          const [r, d] = (0, l.useSearchParams)();
          let o;
          switch (t) {
            case "posts":
              o = i.posts.results.map((e => (0, S.jsx)(u.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              o = i.games.results.map((e => (0, S.jsx)(u.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              o = i.videos.results.map((e => (0, S.jsx)(u.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              o = null
          }
          return (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)("section", {
              className: "rockstargames-sites-rockstargamesa72fe9961d3a58ad57509263ccc9668e",
              children: Object.entries(i).map((e => {
                let [a, i] = e;
                return i?.paging?.count > 0 ? (0, S.jsx)(ce, {
                  tabName: a,
                  activeTab: t,
                  searchTerm: n,
                  count: i?.paging?.count,
                  t: s
                }, a) : ""
              }))
            }), a ? "" : (0, S.jsx)("section", {
              className: "rockstargames-sites-rockstargamesb6a41ef752e979cced54d95e69679ae9",
              children: (0, S.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc0e4a01d8eeef3f28aaaeea0249d53e8",
                children: o
              })
            }), i[t]?.paging ? (0, S.jsx)("section", {
              className: "rockstargames-sites-rockstargamesc024862ad35278cedeff9669a4045d22",
              children: (0, S.jsx)(u.Paging, {
                data: i[t].paging,
                onPageUpdate: e => {
                  d({
                    ...Object.fromEntries([...r]),
                    page: e
                  }), window.scrollTo(0, 0)
                }
              })
            }) : ""]
          })
        },
        ce = e => {
          let {
            activeTab: a,
            count: i,
            searchTerm: n,
            tabName: t,
            t: s
          } = e;
          return (0, S.jsxs)(u.A, {
            className: a === t ? "rockstargames-sites-rockstargamesbd51c8a3e1ef36541ede6a6f86a73fbb" : "",
            to: `/search?q=${n}&tab=${t}&sort=__searchScore&page=1`,
            children: [s(t), " ", (0, S.jsxs)("span", {
              children: ["(", i, ")"]
            })]
          }, t)
        },
        me = (0, b.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              search: i
            },
            setSearch: n,
            setTitle: t
          } = (0, j.useRockstarLocalState)(), s = (0, b.useQueryParams)(), [r, l] = (0, d.useState)(null), [o, c] = (0, d.useState)({}), [m, k] = (0, d.useState)(s.get("tab") ?? null), {
            data: g = {},
            loading: v
          } = (0, f.useQuery)(le(), {
            variables: o,
            skip: !Object.entries(o).length || !o.q,
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
            c(e), n(s.get("q"))
          }), [s.get("q"), s.get("page"), s.get("tab"), m]), (0, d.useEffect)((() => {
            const e = Object.entries(g).find((e => {
              let [, a] = e;
              return a?.paging?.count > 0
            }))?.[0];
            k(s.get("tab") ?? e ?? null)
          }), [g, s.get("tab")]), (0, d.useEffect)((() => {
            void 0 !== g?.games?.paging?.count && (l((g?.games?.paging?.count ?? 0) + (g?.videos?.paging?.count ?? 0) + (g?.posts?.paging?.count ?? 0)), t(g?.meta?.title.replace("%s", i)))
          }), [g, m]), Object.entries(o).length ? o.q ? null === r ? null : (0, S.jsx)(S.Fragment, {
            children: (0, S.jsxs)("div", {
              className: se,
              children: [(0, S.jsxs)("section", {
                className: re,
                children: [(0, S.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamesdb7089be3c829293f97a953a4211ae13",
                  children: [(0, S.jsxs)("h4", {
                    children: [v ? a("search-active") : "", v || r ? v ? "" : a("Search results for:") : a("search-over-empty")]
                  }), (0, S.jsx)("h1", {
                    children: a("%s").replace("%s", s.get("q"))
                  })]
                }), (0, S.jsx)(u.SearchBox, {})]
              }), !v && r ? (0, S.jsx)(oe, {
                searchResponse: g,
                searchTerm: i,
                activeTab: m,
                t: a
              }) : ""]
            })
          }) : (0, S.jsx)("div", {
            className: se,
            children: (0, S.jsxs)("section", {
              className: re,
              children: [(0, S.jsx)("h3", {
                children: a("Search")
              }), (0, S.jsx)(u.SearchBox, {})]
            })
          }) : null
        }));
      var ue = i(3891),
        ke = i.n(ue);
      const ge = {
        companyInfo: "rockstargames-sites-rockstargamesf943a5b3222952639b355b692cd3738d",
        top: "rockstargames-sites-rockstargamesedf5a2c3edb9d28aa5e78792b12733b5",
        content: "rockstargames-sites-rockstargamesef8cad83a641466bdee771139faed62e",
        nav: "rockstargames-sites-rockstargamesf68cfd32b045dc7e95232d7faf79a284",
        us: "rockstargames-sites-rockstargamesf1d1f759d6618c8dd40f01be8aeedc00",
        br: "rockstargames-sites-rockstargamesa598d7e1c1aecb739f2d9b06fad80918",
        cz: "rockstargames-sites-rockstargamese1625f58afa3e3fdb476a97278eb674e",
        de: "rockstargames-sites-rockstargamesf4113889029180b03cb313ec3a165a5f",
        es: "rockstargames-sites-rockstargamesc17ca09c7a65aef8aff0ff91f7bb6892",
        fr: "rockstargames-sites-rockstargamesd7d0b8fbf9d0c537c86194da1e4d1e5b",
        it: "rockstargames-sites-rockstargamesd7029ad0b1cf35481b65da9be0061cf1",
        jp: "rockstargames-sites-rockstargamesa402493348ae0ed58bc84c3b9627a5a3",
        kr: "rockstargames-sites-rockstargamesc66819179b5fd85bbc46ad9a5ab961ad",
        mx: "rockstargames-sites-rockstargamesd92adf4512ff6a95a7f23079948fa6b2",
        nl: "rockstargames-sites-rockstargamesca887a9fec01cf48dc95a367688ef8c8",
        pl: "rockstargames-sites-rockstargamese9b8aab773e489c22c1948e5b5d3b4b2",
        ru: "rockstargames-sites-rockstargamesb6ccaa11bf9d4f6dd02948f1620a40c5",
        sa: "rockstargames-sites-rockstargamese7b9353b61ab3484a46736ea041219ff",
        tw: "rockstargames-sites-rockstargamesddc2bb738d6bce068b401f506cfe93e7",
        zh: "rockstargames-sites-rockstargamese1524848cf231a25c7bf2ba45974f498",
        cookieSettingsButton: "rockstargames-sites-rockstargamesc268c7156142f3275c243f31cc232ae5",
        cookieSettingsModal: "rockstargames-sites-rockstargamesefd3f6904fd12431580823e02744ad5d",
        open: "rockstargames-sites-rockstargamesf0b2945ddb98d457b9fce95f91e28344",
        settings: "rockstargames-sites-rockstargamesda10ad30238ec98939e1bcc84f49ef6e",
        setting: "rockstargames-sites-rockstargamesd7951bf06699a3e55c9971827284450a",
        optional: "rockstargames-sites-rockstargamesbe268b47e37393ac1f8a8a3f2d82aa8e",
        dot: "rockstargames-sites-rockstargamesc8bc5f37684843cea9695d5833509e18",
        optionalOn: "rockstargames-sites-rockstargamese066e619e216c7660f555fa8fd2f5abc",
        rtl: "rockstargames-sites-rockstargamesf7037a458b3d6fd80ea26847cfea33e9"
      };
      var ve = i(4929),
        fe = i.n(ve);
      const be = (0, u.withSearchbarErrorBoundary)((0, b.withTranslations)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: i,
            titleKey: n,
            jsonType: t,
            t: s
          } = e;
          const r = (0, l.useNavigate)(),
            o = (0, l.useLocation)(),
            c = (0, b.useLocale)(),
            m = (0, b.useQueryParams)(),
            k = (0, d.useRef)(),
            g = (e, a) => {
              const i = a ?? e.target.hash,
                n = document.getElementById(i.replace("#", "")),
                t = document.getElementsByName(i.replace("#", ""))?.[0],
                s = n ?? t ?? null,
                d = m.get("country");
              if (e) {
                const a = `${o.pathname}${m.get("country")?`?country=${d}`:""}${i}`;
                r(a), e.preventDefault()
              }
              s && window.scroll(0, s.offsetTop - k.current.getBoundingClientRect().height - 60)
            },
            [v, p] = (0, d.useState)({}),
            {
              data: h,
              loading: N
            } = (0, f.useQuery)(fe(), {
              variables: v,
              skip: !Object.entries(v).length,
              autoSetLoading: !0
            });
          (0, d.useEffect)((() => {
            const e = m.get("country") ?? m.get("locale") ?? null,
              a = void 0 === i,
              n = a && null !== e ? e : a && c.split("_").length > 1 ? "hans" === c.split("_")[1] ? c.split("_")[0] : c.split("_")[1] : c;
            p({
              jsonType: t,
              jsonLocale: n || "us",
              metaUrl: `/${t}`
            })
          }), [m.get("country"), m.get("locale")]), (0, d.useEffect)((() => {
            document.querySelectorAll(".scrollToLink").forEach((e => {
              (e => {
                if (e) {
                  const a = m.get("country"),
                    i = e.href.split("#")[1],
                    n = document.getElementsByTagName("base")[0]?.getAttribute("href");
                  e.setAttribute("href", `${n}${o.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${i}`)
                }
              })(e), e.addEventListener("click", (e => {
                g(e, !1)
              }))
            })), "" !== o.hash && setTimeout((() => {
              g(!1, o.hash)
            }), 10)
          }), [h]);
          const {
            content: x
          } = h?.companyInfo ?? "";
          return (0, S.jsxs)("div", {
            className: ge.companyInfo,
            "data-locale": v.jsonLocale,
            children: [(0, S.jsxs)("section", {
              className: ge.top,
              ref: k,
              children: [(0, S.jsx)("h1", {
                children: s(n)
              }), "undefined" !== i && i ? "" : (0, S.jsx)("nav", {
                className: ge.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => (0, S.jsx)(u.A, {
                  to: `${o.pathname}?country=${e}`,
                  className: ge[e]
                }, a)))
              })]
            }), h && !N ? (0, S.jsx)("section", {
              className: ge.content,
              "data-json-type": t,
              children: "cookies" === t && h ? (0, S.jsx)(ke(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: x,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, S.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: x
                }
              })
            }) : ""]
          })
        }))),
        pe = () => (0, S.jsx)(be, {
          jsonType: "conduct",
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
        he = () => (0, S.jsx)(be, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        Ne = () => (0, S.jsx)(be, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        Se = () => (0, S.jsx)(be, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        xe = () => (0, S.jsx)(be, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        je = () => (0, S.jsx)(be, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        ye = e => {
          let {
            t: a
          } = e;
          return (0, S.jsx)(u.Button, {
            className: ge.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        we = () => (0, S.jsx)(be, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, b.withTranslations)(ye)
        }),
        Fe = () => (0, S.jsx)(be, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        Ve = {
          manuals: "rockstargames-sites-rockstargamesd366f1535618977c9069ab44ed0bd2d4",
          list: "rockstargames-sites-rockstargamesebdbff5c268a40fcdd09c5738f9cb3f6",
          item: "rockstargames-sites-rockstargameseddd4442eabbeb01f7a33e84439fec06",
          img: "rockstargames-sites-rockstargamesaaaf6f13ef1c4248e48b772ff13a3ec2",
          dropdown: "rockstargames-sites-rockstargamesa097e5237ea4f58077c4b173a060af63",
          items: "rockstargames-sites-rockstargamesd216c8f3cea7aa52a0425773ed8ce3de",
          detail: "rockstargames-sites-rockstargamesf96273be7a357953000cb08c1929187e",
          rockstar: "rockstargames-sites-rockstargamese6757323962a726a229c781add11aff9",
          music: "rockstargames-sites-rockstargamesb377d8c5ecc4faa508b0edd8a13cf1c7",
          gtaiv: "rockstargames-sites-rockstargamesf54af395872837e54fa5cdcc017a8b78",
          vcs: "rockstargames-sites-rockstargamesdd3c7060d7078b88a44ff7bf1522302d",
          tlad: "rockstargames-sites-rockstargamesb900b403d8ff1af48f946bbb905ddea6",
          bogt: "rockstargames-sites-rockstargamesa45583258c6a317fd0e4b1a510d4dfe5",
          eflc: "rockstargames-sites-rockstargamesdbeaa00ed7de5ffbb3bda1d5e0d2df37",
          gameLogo: "rockstargames-sites-rockstargamesf1528d3bd79039eb1c1c195fdc660bc9",
          warriors: "rockstargames-sites-rockstargamesb2ca55a944280f00f04243db15b10a5a",
          album: "rockstargames-sites-rockstargamesd54ea769accf6abc53a9fe6892d00ec3",
          driver: "rockstargames-sites-rockstargamese3ee70504a874203ed575eb6c2d53c6b",
          criticize: "rockstargames-sites-rockstargamesc7caf0bf3d0e016dd01146455020791e",
          footsteps: "rockstargames-sites-rockstargamesefd34659a5d9540e68f3a26db67a238c",
          begood: "rockstargames-sites-rockstargamesbe5d894aff9566cc3e48ec35d30098f7",
          wheelsofsteel: "rockstargames-sites-rockstargamesf4f27b9bddb1c6a74ac5d8f8002d2fdf",
          cantgetenough: "rockstargames-sites-rockstargamesb44b874e865dacac2d70385e5ed2dbe9",
          theweekend: "rockstargames-sites-rockstargamesadd852d190a421797c945110b3f6414e",
          acid: "rockstargames-sites-rockstargamesb64adb1a8a6305dd5056f3bc3ce8ca2c",
          elmalo: "rockstargames-sites-rockstargamescfacba437372d8cea5d5115625208fd4",
          ilikeit: "rockstargames-sites-rockstargamesc5178e4cadd35df860589ad3693b9847",
          migente: "rockstargames-sites-rockstargamesa690039a2d4653771385fdfb9acfb2ab",
          quimbara: "rockstargames-sites-rockstargamesfc6b7f85919fb39485ceb01da6835012",
          revolt: "rockstargames-sites-rockstargamese159095009958ab9e2bac01249607d94",
          credit: "rockstargames-sites-rockstargamesdb1580d7a4cecbbf72211cf8ffce89ca",
          additional: "rockstargames-sites-rockstargamesa0d4de92597ec0fb66cfc08a37ce554f",
          logo: "rockstargames-sites-rockstargamesc13987459881ff93489031b6438e8b3e",
          beat: "rockstargames-sites-rockstargamesf866be94c61633fbb070b541215ab178",
          "liberty-rock": "rockstargames-sites-rockstargamesdcec78bdf2af899b3c3a9e33e406d245",
          lchc: "rockstargames-sites-rockstargamesac82c4099ad92d7aa5e21a81d12a9825",
          "electro-choc": "rockstargames-sites-rockstargamese36c3a393b666cc783b6da0193941b51",
          "international-funk": "rockstargames-sites-rockstargamesf8816edff983c4c355d145eb5168dab9",
          vladivostok: "rockstargames-sites-rockstargamesee6cea3c69872da53ccc1bb8452f547c",
          vibe: "rockstargames-sites-rockstargamesd140a7bb5d71adce49ebba088ef90b1c",
          "tuff-gong": "rockstargames-sites-rockstargamesda7100a433c32b29a764548c0438ff8e",
          "san-juan": "rockstargames-sites-rockstargamesa03f6abaf495dad626d1c6203d59d3d4",
          "radio-broker": "rockstargames-sites-rockstargamesb2aa17a643b615fe152b5cf95dcd933d",
          "massive-b": "rockstargames-sites-rockstargamesa546560279ccd7024f6d0139de2e930b",
          k109: "rockstargames-sites-rockstargamese428b797ee6d106e6f5cafd5808c3a1e",
          journey: "rockstargames-sites-rockstargamesaa890f195c58ae8473b92d046379d68a",
          jnr: "rockstargames-sites-rockstargamescc35cdfae6e608e745ead0c657a71c17",
          interiors: "rockstargames-sites-rockstargamese973dd509394ab7f75be0e1333896c23",
          fusion: "rockstargames-sites-rockstargamesa0bb8d4b8f9379e6aaa963b955068656",
          classics: "rockstargames-sites-rockstargamesbb0bd1f794a6629ef7f263616ae448d3",
          "vice-city": "rockstargames-sites-rockstargamese36e9bc8f64a27c46ebaffba48737016",
          "self-actualization": "rockstargames-sites-rockstargamesf79a76b4508e55968345add724a9c53c",
          ramjam: "rockstargames-sites-rockstargamesac75e7c529e6822e3c321c2db0a93941",
          emotion: "rockstargames-sites-rockstargamesaafb2148f4cc12c97fee7c75352fc905",
          flash: "rockstargames-sites-rockstargamesd2adf88d548f3d85f426f5fce338f6ca",
          fresh: "rockstargames-sites-rockstargamesf692d050da8daca639b2bd00a2a5ad58",
          paradise: "rockstargames-sites-rockstargamese2ff9f40025bd5a3baa71f0f6aeb9ee1",
          espantoso: "rockstargames-sites-rockstargamesf5cde0476926d5717dbe5775d9d2f3c8",
          vcfl: "rockstargames-sites-rockstargamesd52d83e3218646aa702df200cda382c0",
          vrock: "rockstargames-sites-rockstargamesadb55f57e5d3fc124160809ab41ee130",
          wave: "rockstargames-sites-rockstargamesd4ab4de6125afb16136d7c34b8829cf2",
          warriorsCredit: "rockstargames-sites-rockstargamesc73dbe223b5a37cc86f32feeb506ca61"
        };
      var _e = i(2239),
        Te = i.n(_e);
      const Ae = (0, b.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          data: i
        } = (0, f.useQuery)(Te(), {
          autoSetLoading: !0
        });
        if (!i) return null;
        const {
          manuals: n
        } = i;
        return (0, S.jsxs)("div", {
          className: Ve.manuals,
          children: [(0, S.jsx)("h2", {
            children: a("Manuals")
          }), (0, S.jsx)("div", {
            className: Ve.list,
            children: n.map((e => (0, S.jsxs)("div", {
              className: Ve.item,
              children: [(0, S.jsx)("div", {
                className: Ve.img,
                style: {
                  backgroundImage: `url(${e.game.fob_640})`
                }
              }), (0, S.jsx)(u.Dropdown, {
                title: e.game.title,
                className: Ve.dropdown,
                children: e.manuals_platforms.map((e => (0, S.jsxs)("p", {
                  children: [(0, S.jsx)("span", {
                    children: e.platform
                  }), e.manuals_links.map((e => (0, S.jsx)("a", {
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
      var Ee = i(9885),
        De = i.n(Ee);
      const Le = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: i
          } = De();
          return (0, S.jsxs)("div", {
            className: Ve.detail,
            children: [(0, S.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: i(a.content)
              }
            }), a.album_cover ? (0, S.jsx)("div", {
              className: [Ve.album, Ve[a.album_cover]].join(" ")
            }) : "", (0, S.jsx)(u.A, {
              to: "/",
              children: (0, S.jsx)("div", {
                className: Ve.rockstar
              })
            })]
          })
        },
        $e = (0, b.withTranslations)((e => {
          let {
            stations: a,
            gameId: i,
            t: n
          } = e;
          const {
            sanitize: t
          } = De();
          return (0, S.jsxs)(S.Fragment, {
            children: [(0, S.jsx)("h1", {
              children: n("Music Credits")
            }), a && 55 === a[0].game_id ? (0, S.jsxs)("div", {
              className: Ve.warriorsCredit,
              children: [(0, S.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, S.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, S.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, S.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, S.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, S.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, S.jsx)("div", {
              className: [Ve.list, a && 55 === a[0].game_id ? Ve.warriors : ""].join(" "),
              children: a && a.map(((e, s) => (0, S.jsxs)("div", {
                className: Ve.station,
                children: [55 !== e.game_id ? (0, S.jsx)("div", {
                  className: [Ve.logo, Ve[e.slug]].join(" ")
                }) : (0, S.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, S.jsxs)("div", {
                  className: Ve.credit,
                  children: [(0, S.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, S.jsx)("p", {
                    children: e.written_by
                  }), (0, S.jsx)("p", {
                    children: e.published_by
                  }), (0, S.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, S.jsx)("p", {
                    className: Ve.additional,
                    children: (0, S.jsx)(u.A, {
                      to: `music?gameId=${i}&stationId=${a[s].id}&songId=${e.id}`,
                      children: n("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var Ie = i(8213),
        Ce = i.n(Ie);
      const Ge = () => {
          const e = (0, b.useQueryParams)(),
            a = Number(e.get("gameId")),
            i = Number(e.get("songId")),
            n = Number(e.get("stationId"));
          let t = !1;
          const {
            data: s
          } = (0, f.useQuery)(Ce(), {
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
          })), (0, S.jsxs)("div", {
            className: [Ve.music, 25 === a ? Ve.gtaiv : 26 === a ? Ve.tlad : 32 === a ? Ve.bogt : 28 === a ? Ve.eflc : 34 === a ? Ve.vcs : ""].join(" "),
            children: [(0, S.jsx)("div", {
              className: [Ve.gameLogo, 26 === a ? Ve.tlad : 32 === a ? Ve.bogt : 28 === a ? Ve.eflc : 25 === a ? Ve.gtaiv : 34 === a ? Ve.vcs : 55 === a ? Ve.warriors : ""].join(" ")
            }), a && r ? n && i && t ? (0, S.jsx)(Le, {
              detail: t
            }) : (0, S.jsx)($e, {
              stations: r,
              gameId: a
            }) : null]
          })
        },
        Pe = (0, b.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, S.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesabdecdd87f2cf4b8194c0091fdd0b4a0",
            children: [(0, S.jsx)("section", {
              className: "rockstargames-sites-rockstargamesd13bb1cebcd96c067a01aee27efccfed",
              children: (0, S.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, S.jsxs)("section", {
              className: "rockstargames-sites-rockstargamesb58b960fc23a48600bdbc8a2777aa5f3",
              children: [(0, S.jsx)("p", {
                children: a("contact.intro")
              }), (0, S.jsxs)("p", {
                children: [(0, S.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, S.jsxs)("p", {
                children: [(0, S.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, S.jsxs)("p", {
                children: [(0, S.jsx)("span", {
                  children: a("contact.technical")
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, S.jsxs)("p", {
                children: [(0, S.jsx)("span", {
                  children: a("contact.career")
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, S.jsxs)("p", {
                children: [(0, S.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, S.jsxs)("p", {
                children: [(0, S.jsx)("span", {
                  children: a("contact.legal")
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, S.jsxs)("p", {
                children: [(0, S.jsx)("span", {
                  children: a("contact.latest")
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, S.jsx)("br", {}), (0, S.jsx)(u.A, {
                  to: "https://www.youtube.com/user/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Youtube Site",
                  children: "https://www.youtube.com/user/RockstarGames"
                })]
              }), (0, S.jsx)("br", {})]
            })]
          })
        })),
        qe = {
          maint: "rockstargames-sites-rockstargamesee5e5a68eb125090583fe5d4f8ce03df",
          content: "rockstargames-sites-rockstargamesf5aef392e680073f8fed78567c8dbb4e",
          logo: "rockstargames-sites-rockstargamesda2fe3ab2392b09ff23958abdf602eb4"
        },
        Be = () => (0, S.jsx)("div", {
          className: qe.maint,
          children: (0, S.jsxs)("div", {
            className: qe.content,
            children: [(0, S.jsx)("div", {
              className: qe.logo
            }), (0, S.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, S.jsx)("a", {
              className: qe.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        Oe = () => (0, S.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesc4061150feb48d282a2363b7cbed6ac5",
          children: [(0, S.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa026b866e5e33e40478c738b8a6714fd"
          }), (0, S.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        Re = {
          jpwrapper: "rockstargames-sites-rockstargamesba6d4394dc71688a882bb545fc08beb4",
          body: "rockstargames-sites-rockstargamesdd0895660ec10bf279836cd110070640",
          responsiveImage: "rockstargames-sites-rockstargamesfb8048b514e49776135df91d47ef29db",
          link: "rockstargames-sites-rockstargamesac320620a02a8d3897d310cf288855ab",
          bodyPadding: "rockstargames-sites-rockstargamesd13a76b87f08d8fdbc47d45cd7450dd1",
          headline_3: "rockstargames-sites-rockstargamesa12bcaa8e0eec396547de0cae798278a",
          headline_2: "rockstargames-sites-rockstargamese2c90393cdf11f29befc2038de073e48",
          disclaimer: "rockstargames-sites-rockstargamesa88581f8d3bc749026f10eb47ec6aeb2"
        },
        Me = u.framer.withFadeIn((() => (0, S.jsxs)("div", {
          className: Re.jpwrapper,
          children: [(0, S.jsx)(u.MultiSourceImage, {
            className: Re.responsiveImage,
            image: {
              desktop: i(6019)
            }
          }), (0, S.jsxs)(u.Grid, {
            className: [Re.body, Re.inner, Re.gap_sm].join(" "),
            children: [(0, S.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, S.jsxs)("p", {
              children: [(0, S.jsx)("a", {
                className: Re.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, S.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, S.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, S.jsx)(u.MultiSourceImage, {
              image: {
                desktop: i(2143)
              }
            }), (0, S.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, S.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, S.jsx)(u.MultiSourceImage, {
              className: Re.bodyPadding,
              image: {
                desktop: i(6836)
              }
            }), (0, S.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, S.jsx)(u.MultiSourceImage, {
              className: Re.bodyPadding,
              image: {
                desktop: i(9319)
              }
            }), (0, S.jsxs)("p", {
              children: ["さらなる詳細は、", (0, S.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: Re.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, S.jsx)("p", {
              className: Re.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, S.jsx)(u.Rating, {
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })]
        }))),
        ze = {
          "frontline-heroes": (0, d.lazy)((() => i.e(910).then(i.bind(i, 7910)))),
          "gta-tv": (0, d.lazy)((() => i.e(414).then(i.t.bind(i, 3414, 23)))),
          "modules-core-gif-viewer": (0, d.lazy)((() => i.e(774).then(i.t.bind(i, 2774, 23)))),
          "modules-core-videoplayer": (0, d.lazy)((() => Promise.resolve().then(i.t.bind(i, 4224, 23)))),
          "rockstar-tv": (0, d.lazy)((() => i.e(107).then(i.t.bind(i, 4107, 23)))),
          "screenshot-viewer": (0, d.lazy)((() => i.e(142).then(i.t.bind(i, 1142, 23)))),
          "sites-careers": (0, d.lazy)((() => i.e(710).then(i.t.bind(i, 1710, 23)))),
          "sites-gta-gen9": (0, d.lazy)((() => i.e(291).then(i.t.bind(i, 6291, 23)))),
          "sites-gta-trilogy": (0, d.lazy)((() => i.e(829).then(i.t.bind(i, 3829, 23)))),
          "sites-red-dead-online": (0, d.lazy)((() => i.e(308).then(i.t.bind(i, 308, 23)))),
          "sites-red-dead-redemption": (0, d.lazy)((() => i.e(295).then(i.t.bind(i, 5295, 23)))),
          "sites-rockstargames-downloads": (0, d.lazy)((() => i.e(70).then(i.t.bind(i, 1070, 23))))
        },
        Ue = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const i = ze[e],
            {
              setHeaderHidden: n
            } = (0, j.useRockstarLocalState)();
          return (0, S.jsx)(d.Suspense, {
            fallback: "",
            children: (0, S.jsx)(i, {
              setHeaderHidden: n,
              config: a
            })
          })
        },
        He = (0, u.withSearchbarErrorBoundary)((() => {
          const e = [{
            path: "/",
            element: (0, S.jsx)(L, {})
          }, {
            path: "/careers-privacy",
            element: (0, S.jsx)(xe, {})
          }, {
            path: "/ccpa",
            element: (0, S.jsx)(Fe, {})
          }, {
            path: "/conduct",
            element: (0, S.jsx)(pe, {})
          }, {
            path: "/contact",
            element: (0, S.jsx)(Pe, {})
          }, {
            path: "/cookies",
            element: (0, S.jsx)(we, {})
          }, {
            path: "/corpinfo",
            element: (0, S.jsx)(he, {})
          }, {
            path: "/eula",
            element: (0, S.jsx)(Ne, {})
          }, {
            path: "/games",
            element: (0, S.jsx)(H, {})
          }, {
            path: "/games/:gameTitlelug",
            element: (0, S.jsx)(te, {})
          }, {
            path: "/legal",
            element: (0, S.jsx)(Se, {})
          }, {
            path: "/gta-v/thankyou",
            element: (0, S.jsx)(V.Credits, {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: (0, S.jsx)(Oe, {})
          }, {
            path: "/community_event",
            element: (0, S.jsx)(Me, {})
          }, {
            path: "/reddeadredemption/*",
            element: Ue("sites-red-dead-redemption")
          }, {
            path: "/reddeadonline/thankyou",
            element: (0, S.jsx)(V.Credits, {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Ue("sites-careers")
          }, {
            path: "/downloads/*",
            element: Ue("sites-rockstargames-downloads")
          }, {
            path: "/reddeadonline/*",
            element: Ue("sites-red-dead-online")
          }, {
            path: "/frontline-heroes",
            element: Ue("frontline-heroes")
          }, {
            path: "/gifs/:hashId",
            element: Ue("modules-core-gif-viewer")
          }, {
            path: "/gta-v/*",
            element: Ue("sites-gta-gen9", {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Ue("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: Ue("sites-gta-gen9", {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy",
            element: Ue("sites-gta-trilogy")
          }, {
            path: "/gtatv/*",
            element: Ue("gta-tv")
          }, {
            path: "/manuals",
            element: (0, S.jsx)(Ae, {})
          }, {
            path: "/manuals/music",
            element: (0, S.jsx)(Ge, {})
          }, {
            path: "/newswire",
            element: (0, S.jsx)($, {})
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: (0, S.jsx)(G, {})
          }, {
            path: "/old-privacy",
            element: (0, S.jsx)(je, {})
          }, {
            path: "/privacy",
            element: (0, S.jsx)(je, {})
          }, {
            path: "/rockstartv/*",
            element: Ue("rockstar-tv")
          }, {
            path: "/screenshot-viewer/*",
            element: Ue("screenshot-viewer")
          }, {
            path: "/search",
            element: (0, S.jsx)(me, {})
          }, {
            path: "/socialclubmaintenance",
            element: (0, S.jsx)(Be, {})
          }, {
            path: "/videoplayer",
            element: Ue("modules-core-videoplayer")
          }, {
            path: "/videos",
            element: (0, S.jsx)(O, {})
          }, {
            path: "/videos/:videoId",
            element: (0, S.jsx)(M, {})
          }, {
            path: "*",
            element: (0, S.jsx)(u.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, l.useRoutes)(e)
        })),
        Qe = {
          main: "rockstargames-sites-rockstargamesf1aef688b1fb7db52825ffe602919893",
          gameSite: "rockstargames-sites-rockstargamesd94349e6082443747b43bfb1b3572894",
          "theme-std": "rockstargames-sites-rockstargamesc96f36a0f4271c94bc947959cc6f339d",
          headerHidden: "rockstargames-sites-rockstargamesd477842bf331a57b7775dad383937ca6",
          standalone: "rockstargames-sites-rockstargamesf25a9c90e12ca706e97edcb4d8824b69"
        },
        Ke = (0, n.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, j.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, S.jsx)("main", {
            role: "main",
            id: "main",
            className: [Qe.main, a ? Qe.standalone : "", e ? Qe.headerHidden : ""].join(" "),
            children: (0, S.jsx)(He, {})
          })
        })),
        We = ((0, f.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        Ye = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: !1,
          standalone: (["/careers", "/gifs", "/frontline-heroes", "/gtatv", "/rockstartv", "/screenshot-viewer", "/videoplayer"].find((e => We.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        Ze = (0, f.makeVar)(Ye),
        Je = (0, f.makeVarNamespace)("rockstar-root"),
        Xe = window?.env?.graphEnv ?? "prod";
      m(), (() => {
        const e = window;
        if (e[c]?.history || m(), e[c]?.history) return e[c].history;
        throw new Error("Browser History has not been initialised")
      })();
      const ea = () => {
          const {
            state: {
              standalone: e,
              customFooter: a
            }
          } = (0, b.useRockstarLocalState)(), [i] = (0, k.useModal)(), n = (0, b.useLocale)();
          return (0, S.jsx)(x, {
            locales: y.intlMessages,
            lang: n,
            children: (0, S.jsx)(h.GtmProvider, {
              children: (0, S.jsxs)(u.ScrollTracker, {
                threshold: [25, 50, 75, 90, 100],
                children: [(0, S.jsx)(V.AccessibilityButton, {}), i, (0, S.jsx)(u.ScrollToTop, {}), (0, S.jsxs)(S.Fragment, {
                  children: [(0, S.jsx)(F.Z, {}), (0, S.jsx)(w.Menu, {})]
                }), (0, S.jsx)(Ke, {}), e || a ? "" : (0, S.jsx)(V.FooterNav, {})]
              })
            })
          })
        },
        aa = () => (0, S.jsx)(k.ModalProvider, {
          children: (0, S.jsx)(ea, {})
        }),
        {
          pingBearer: ia
        } = (0, b.getScConfigForOrigin)(),
        na = (0, f.withReactiveState)((() => {
          const e = (0, f.useBase)(),
            {
              setLoading: a,
              setTitle: i
            } = (0, b.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("message", (e => {
              const n = e.data?.type ?? null;
              "graph.titleUpdate" === n && i(e.data.title), "graph.loadingUpdate" === n && a(e.data.loading)
            }))
          }), [a, i]), (0, S.jsx)(b.ResizeProvider, {
            children: (0, S.jsx)(p.ScrollProvider, {
              children: (0, S.jsx)(h.RockstarUserProvider, {
                children: (0, S.jsx)(l.BrowserRouter, {
                  basename: e,
                  children: (0, S.jsx)(aa, {})
                })
              })
            })
          })
        }), {
          state: Ze
        }),
        ta = (0, f.withRockstarGraph)(na, {
          env: Xe,
          token: Je("token", null),
          tokenPing: ia,
          tokenPingExpires: Je("tokenPingExpires", null),
          typePolicies: {
            ...v()
          }
        }),
        sa = window?.env?.oneTrustId ?? null,
        ra = window?.env?.gtmId ?? null;
      (0, n.init)({
        id: ra
      }), s()({
        id: sa,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, r.s)(e).render((0, S.jsx)(ta, {}))
        }
      })
    },
    4929: e => {
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
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "CompanyInfo")
    },
    176: (e, a, i) => {
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
      var d = {};

      function l(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), d[e.name.value] = a
        }
      })), e.exports = n, e.exports.Home = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = l(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "Home")
    },
    4187: (e, a, i) => {
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
      var d = {};

      function l(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), d[e.name.value] = a
        }
      })), e.exports = n, e.exports.Search = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = l(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "Search")
    },
    1326: e => {
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
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "GamesIndex")
    },
    4336: (e, a, i) => {
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
      var d = {};

      function l(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == a) return n
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          r(e, a), d[e.name.value] = a
        }
      })), e.exports = n, e.exports.GameInfo = function(e, a) {
        var i = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = d[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            t.has(e) || (t.add(e), (d[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = l(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "GameInfo")
    },
    2239: e => {
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
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "Manuals")
    },
    8213: e => {
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
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = t(e, a);
          n && i.definitions.push(n)
        })), i
      }(a, "MusicStations")
    },
    1028: (e, a, i) => {
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

      function d(e, a) {
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
          definitions: [d(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var n = r[a] || new Set,
          t = new Set,
          s = new Set;
        for (n.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(e) {
            t.has(e) || (t.add(e), (r[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return t.forEach((function(a) {
          var n = d(e, a);
          n && i.definitions.push(n)
        })), i
      }(n, "VideosList")
    },
    2143: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1ed2a51b04e0bb000bcf1496dcd3f784.png"
    },
    6019: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca34dd285d3d7a6cf9a329c73a274599.jpg"
    },
    6836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/442e7c26891ff37ae957573626516d06.png"
    },
    9319: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8ae4db5a481080ebfd341e18dbfb2277.png"
    }
  }
]);