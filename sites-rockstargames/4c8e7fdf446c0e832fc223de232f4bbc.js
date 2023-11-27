(self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [928], {
    6469: (e, a, i) => {
      "use strict";
      i.r(a), i(7842);
      var n = i(6331),
        t = i(4690),
        s = i.n(t),
        r = i(441),
        d = i(279),
        l = i(3747),
        o = i(3705);
      const c = e => {
        let {
          basename: a,
          children: i,
          history: n
        } = e;
        const [t, s] = (0, d.useState)({
          action: n.action,
          location: n.location
        });
        return (0, d.useLayoutEffect)((() => n.listen(((e, a) => {
          s({
            location: e,
            action: a
          })
        }))), [n]), (0, o.jsx)(l.Router, {
          basename: a,
          location: t.location,
          navigationType: t.action,
          navigator: n,
          children: i
        })
      };
      var m = i(7199);
      const u = "__MFE_GLOBAL_HOOK__",
        k = () => {
          const e = window;
          e[u]?.history || (e[u] = Object.assign(e[u] || {}, {
            history: (0, m.lX)()
          }))
        };
      var g = i(8976),
        v = i(8008),
        f = i(5269),
        b = i.n(f),
        p = i(4859),
        h = i(9929),
        N = i(1968),
        S = i(1458),
        x = i(9089),
        j = i(2596),
        y = i(9894);
      const w = e => {
        let {
          locales: a,
          lang: i,
          children: n
        } = e;
        const t = (0, d.useMemo)((() => function(e) {
            let [a, i] = e.split(/[-_]/);
            return i = i.toLowerCase(), "cn" === i && (i = "hans"), [a, i]
          }(i)), [i]),
          s = (0, d.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, t[1])), [i, a]);
        return (0, o.jsx)(y.Z, {
          messages: s,
          locale: t[0],
          defaultLocale: "en",
          children: n
        }, t[0])
      };
      var F = i(3657),
        _ = i(1570),
        V = i(8038),
        T = i.n(V),
        A = i(6670),
        E = i(398);
      const D = "rockstargames-sites-rockstargamesf75798e3984014f9cd35c5956e94fbb3",
        L = "rockstargames-sites-rockstargamesaa6bc8070e5e81ea0594636575db8fd6";
      var I = i(176);
      const $ = e => {
          let {
            games: a,
            t: i
          } = e;
          return (0, o.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbec4f690ea94ae150d36b6be04b7011d",
            "data-testid": "featuredGames",
            children: [(0, o.jsx)("h3", {
              className: D,
              children: (0, o.jsx)(g.A, {
                to: "newswire",
                "aria-label": i("Featured Games"),
                "data-testid": "featuredGamesHeader",
                children: i("Featured Games")
              })
            }), (0, o.jsx)("div", {
              className: L,
              children: a.map((e => (0, o.jsx)(g.GameCard.Link, {
                game: e
              }, e.id)))
            }), (0, o.jsx)(g.Button, {
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
        C = e => {
          let {
            posts: a,
            t: i
          } = e;
          return (0, o.jsxs)("section", {
            className: "rockstargames-sites-rockstargamesbc6c5d345fb1cccca402fd4a97a8bef8",
            "data-testid": "newswire",
            children: [(0, o.jsx)("h3", {
              className: D,
              children: (0, o.jsx)(g.A, {
                to: "newswire",
                "aria-label": i("Newswire"),
                "data-testid": "newswireHeader",
                children: i("Newswire")
              })
            }), (0, o.jsx)(g.NewswireBlocks, {
              className: L,
              posts: a,
              noSpecialOrder: !0
            }), (0, o.jsx)(g.Button, {
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
        G = (0, h.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            data: i
          } = (0, p.useQuery)(I.Home, {
            autoSetLoading: !0
          });
          if (!i) return null;
          const {
            games: n,
            posts: t,
            videos: s
          } = i;
          return (0, o.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesdcf817f11d19ae0ef32bf4b753d292a2",
            "data-testid": "homepageBody",
            children: [(0, o.jsx)(g.VideoCarousel, {
              videos: s.results,
              t: a
            }), (0, o.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesd04358d9e38bc205e1c35dee36efcaa1",
              children: [(0, o.jsx)(C, {
                posts: t.results,
                t: a
              }), (0, o.jsx)($, {
                games: n.results,
                t: a
              })]
            })]
          })
        })),
        P = (0, h.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setNormalLogo: n
          } = (0, F.useRockstarLocalState)();
          return (0, d.useEffect)((() => (i([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            n(!0), i()
          })), []), (0, o.jsx)("div", {
            className: "rockstargames-sites-rockstargamesb7f93a0d98bb3eaac82ba7d6aef63890",
            "data-testid": "newswire-list",
            children: (0, o.jsx)(g.NewswireList, {
              t: a
            })
          })
        }));
      var q = i(4524),
        O = i.n(q);
      const B = (0, h.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, E.useParams)(),
            {
              setBreadcrumb: n,
              setNormalLogo: t
            } = (0, F.useRockstarLocalState)();
          return (0, d.useEffect)((() => (n([{
            href: "/newswire",
            title: a("Newswire")
          }], ""), () => {
            t(!0), n()
          })), []), (0, o.jsx)(O(), {
            idHash: String(i.articleId)
          })
        })),
        R = "rockstargames-sites-rockstargamese6a4f8b4027dadd3be8f848d9b846bc3";
      var M = i(1028),
        z = i.n(M);
      const U = (0, h.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i,
          setNormalLogo: n
        } = (0, F.useRockstarLocalState)(), t = (0, h.useQueryParams)(), [s, r] = (0, d.useState)({}), {
          data: l
        } = (0, p.useQuery)(z(), {
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
        if (l?.game && l?.gameVideos) return (0, o.jsx)("div", {
          className: R,
          children: (0, o.jsx)(g.VideoList, {
            vids: l.gameVideos.results,
            title: a("Videos from %s").replace("%s", l.game.title)
          })
        });
        const {
          games: c,
          gtao: m,
          gtaosessions: u,
          latest: k,
          rdo: v
        } = l;
        return (0, o.jsx)("div", {
          className: R,
          children: s.type ? "" : (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(g.VideoCarousel, {
              videos: k.results,
              t: a
            }), (0, o.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesb9a5297e3e78f65221054aa1f6d77597",
              children: [(0, o.jsx)(g.VideoList, {
                vids: v.results,
                title: a("Videos from %s").replace("%s", "Red Dead Online")
              }), (0, o.jsx)(g.VideoList, {
                vids: m.results,
                title: a("Videos from %s").replace("%s", "GTA Online")
              }), (0, o.jsx)(g.VideoList, {
                vids: u.results,
                title: a("GTA Online Sessions Episodes")
              }), (0, o.jsx)(g.VideoList, {
                games: c,
                title: a("By Game")
              })]
            })]
          })
        })
      }));
      var H = i(4224);
      const Q = (0, h.withTranslations)((e => {
        let {
          t: a
        } = e;
        const i = (0, E.useNavigate)(),
          {
            setNormalLogo: n,
            setBreadcrumb: t,
            setTitle: s
          } = (0, F.useRockstarLocalState)(),
          {
            videoId: r
          } = (0, E.useParams)(),
          {
            video: l,
            related: c
          } = (0, H.useVideoData)({
            id: Number(r)
          });
        return (0, d.useEffect)((() => (t([{
          href: "/videos",
          title: a("Videos")
        }]), n(!1), () => {
          n(!0), t()
        })), []), (0, d.useEffect)((() => {
          l && s(`${l.game.title} - ${l.title}`)
        }), [l]), l ? (0, o.jsxs)(o.Fragment, {
          children: [(0, o.jsx)(H.PlayerWithInfo, {
            videoId: Number(r),
            videoChangeCallback: e => {
              i(`../videos/${e}`)
            }
          }), c?.results?.length ? (0, o.jsx)(g.VideoList, {
            vids: c.results,
            title: a("Related Videos")
          }) : ""]
        }) : null
      }));
      var K = i(1326),
        W = i.n(K);
      const Z = (0, h.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          setBreadcrumb: i
        } = (0, F.useRockstarLocalState)(), {
          data: n
        } = (0, p.useQuery)(W(), {
          autoSetLoading: !0
        }), t = n?.games ?? null;
        return (0, d.useEffect)((() => (i([{
          href: "/games",
          title: a("Games")
        }]), () => i())), [t]), t ? (0, o.jsx)("div", {
          className: "rockstargames-sites-rockstargamese688ae11bba38a9723018b024df142ee",
          "data-testid": "gamesBody",
          children: t.results.map((e => (0, o.jsx)(g.GameCard.Link, {
            game: e
          }, e.title_slug)))
        }) : null
      }));
      var Y = i(4336),
        J = i.n(Y);
      const X = e => {
          let {
            game: a,
            t: i
          } = e;
          const {
            purchases: n,
            digital_purchases: t
          } = a, s = n.length + t.length;
          if (0 === s) return null;
          const r = (0, o.jsx)(o.Fragment, {
              children: t.map((e => (0, o.jsx)(g.A, {
                target: "_blank",
                to: `/game-digital-purchase?game=${a.id}&platform=${e.platform_id}`,
                children: `${e.platform_name} - Digital`
              }, e.platform_name)))
            }),
            d = (0, o.jsx)(o.Fragment, {
              children: n.map((e => (0, o.jsx)(g.A, {
                target: "_blank",
                to: e.href,
                children: `${e.platform.name} - Physical`
              }, e.href)))
            });
          if (s > 1) return (0, o.jsxs)(g.Dropdown, {
            title: i("Buy Now"),
            children: [r, d]
          });
          const l = n.length ? n[0] : t[0];
          return l?.href ? (0, o.jsx)(g.Button, {
            to: l.href,
            context: "secondary",
            target: "_blank",
            "data-gtm-category": "Games",
            "data-gtm-action": "Buy Now",
            "data-gtm-label": a.title,
            children: i("Buy Now")
          }) : null
        },
        ee = e => {
          let {
            game: a
          } = e;
          return (0, o.jsx)("h2", {
            className: "rockstargames-sites-rockstargamesd999c131d523164f20bad2d6c322c7b0",
            children: a.title
          })
        },
        ae = e => {
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
          })), (0, o.jsx)(de, {
            title: i("Specifications"),
            children: (0, o.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesa3be2ad0c6089bcc99dc39a07f1c8556",
              children: [(0, o.jsx)(re, {
                title: i("Developer"),
                children: t.join(", ")
              }), (0, o.jsx)(re, {
                title: i("Platform"),
                children: n.join(", ")
              }), (0, o.jsx)(re, {
                title: i("Release Date"),
                children: a.release_date_in_words
              }), (0, o.jsxs)("dl", {
                className: "rockstargames-sites-rockstargamesb2e21b26b02b2f01abbfafaa61d2132f",
                children: [(0, o.jsx)("dt", {
                  children: i("Rating")
                }), (0, o.jsxs)("dd", {
                  className: "rockstargames-sites-rockstargamesbb187beb63c639e6ee81536d2ec853cc",
                  children: [(0, o.jsx)(g.Rating, {
                    href: a.url_rating,
                    img: a.img_rating,
                    descriptors: a.rating_descriptors
                  }), s ? (0, o.jsx)("div", {
                    className: "rockstargames-sites-rockstargamesf6106c12ee39ddbd58cb459de26ba30f"
                  }) : ""]
                })]
              })]
            })
          })
        },
        ie = e => {
          let {
            screens: a,
            t: i
          } = e;
          return (0, o.jsx)(de, {
            c: !0,
            title: i("Screens"),
            children: (0, o.jsx)("div", {
              className: "rockstargames-sites-rockstargamesdf799e57a036664e01d8b1c28918f7e7",
              children: a.map((e => (0, o.jsx)("div", {
                style: {
                  backgroundImage: `url(${e.file})`
                }
              }, e.file)))
            })
          })
        },
        ne = e => {
          let {
            game: a,
            t: i
          } = e;
          const [n, t] = (0, d.useState)(!1), s = "<br>", r = (0, o.jsx)("p", {
            dangerouslySetInnerHTML: {
              __html: a.description
            }
          }), l = a.description.includes(s);
          return (0, o.jsx)(de, {
            className: "rockstargames-sites-rockstargamesbb3bcfffbb0324212ca756bbcf0b331d",
            title: i("Game Description"),
            children: l ? (0, o.jsxs)(o.Fragment, {
              children: [n ? r : (0, o.jsx)("p", {
                children: a.description.split(s)[0]
              }), " ", (0, o.jsx)(g.Button, {
                context: "secondary",
                onClick: () => t(!n),
                children: i(n ? "Read Less" : "Read More")
              })]
            }) : r
          })
        },
        te = e => {
          let {
            game: a,
            posts: i,
            t: n
          } = e;
          return (0, o.jsxs)(de, {
            title: n("Latest News"),
            className: "rockstargames-sites-rockstargamesae6f169b7d8b535785cbab042d17b2f3",
            children: [(0, o.jsx)("div", {
              className: "rockstargames-sites-rockstargamesf4370b320e728cb6f2ebfe098d24dd9a",
              children: i.map((e => (0, o.jsx)(g.NewswireCard, {
                noSpecialOrder: !0,
                post: e
              }, e.id)))
            }), (0, o.jsx)(g.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest News",
              "data-gtm-label": `${a.title} - More Click`,
              to: `/newswire?tag_id=${a.tags[0].id}`,
              context: "secondary",
              children: n("Read more at the Rockstar Newswire")
            })]
          })
        },
        se = e => {
          let {
            game: a,
            videos: i,
            t: n
          } = e;
          return (0, o.jsxs)(de, {
            title: n("Latest Videos"),
            className: "rockstargames-sites-rockstargamesea974aced4784cc236949e23461151c5",
            children: [(0, o.jsx)("div", {
              className: "rockstargames-sites-rockstargamese1adbaf782c177537eee8ed7acdb33a9",
              children: i.map((e => (0, o.jsx)(g.VideoCard.Link, {
                video: e,
                gameTitleNecessary: !1
              }, e.id)))
            }), (0, o.jsx)(g.Button, {
              "data-gtm-category": "Games",
              "data-gtm-action": "Latest Videos",
              "data-gtm-label": `${a.title} - View All Click`,
              to: `/videos?type=game&gameId=${a.id}`,
              context: "secondary",
              children: n("See all %s videos").replace("%s", a.title)
            })]
          })
        },
        re = e => {
          let {
            children: a,
            title: i,
            className: n = ""
          } = e;
          return (0, o.jsxs)("dl", {
            className: n,
            children: [(0, o.jsx)("dt", {
              children: i
            }), (0, o.jsx)("dd", {
              dangerouslySetInnerHTML: {
                __html: a
              }
            })]
          })
        },
        de = e => {
          let {
            title: a,
            className: i = "",
            children: n,
            style: t = {}
          } = e;
          return (0, o.jsxs)("section", {
            className: i,
            style: t,
            children: [a ? (0, o.jsx)("h4", {
              className: "rockstargames-sites-rockstargamesd3ae0f7bea78620d460ed1de4bfb1546",
              children: a
            }) : "", n]
          })
        },
        le = (0, h.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            setBreadcrumb: i,
            setTitle: n
          } = (0, F.useRockstarLocalState)(), t = (0, E.useParams)(), {
            data: s
          } = (0, p.useQuery)(J(), {
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
          })), [r]), r ? (0, o.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesf3214996ae18b839cbe8d74436e33569",
            children: [(0, o.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesad748c74afaaac7ae3742ea01deb9327",
              children: [(0, o.jsxs)("div", {
                className: "rockstargames-sites-rockstargamesb12200c67941853e210bfa8ec2a2151b",
                children: [(0, o.jsx)(ee, {
                  game: r,
                  t: a
                }), (0, o.jsxs)("div", {
                  className: "rockstargames-sites-rockstargamese117d55b425e388a7f3ef0036fad9045",
                  children: [(0, o.jsx)(X, {
                    game: r,
                    t: a
                  }), r.has_official_site && (0, o.jsx)(g.Button, {
                    to: r.url_official,
                    context: "secondary",
                    target: "_blank",
                    "data-gtm-category": "Games",
                    "data-gtm-action": "Official Site Click-through",
                    "data-gtm-label": r.title,
                    children: a("Official Site")
                  })]
                })]
              }), (0, o.jsx)(g.GameCard.Art, {
                imgSrc: r.fob_1280,
                titleSlug: r.title_slug
              })]
            }), (0, o.jsxs)("div", {
              className: "rockstargames-sites-rockstargamesce487783cab9e36402d70d80e6d9d778",
              children: [(0, o.jsx)(ne, {
                game: r,
                t: a
              }), r.tags.length && r.tags[0].videos.length ? (0, o.jsx)(se, {
                game: r,
                videos: r.tags[0].videos,
                t: a
              }) : "", r.tags.length && r.tags[0].posts.length ? (0, o.jsx)(te, {
                game: r,
                posts: r.tags[0].posts,
                t: a
              }) : "", r.screens.length ? (0, o.jsx)(ie, {
                screens: r.screens,
                t: a
              }) : "", (0, o.jsx)(ae, {
                game: r,
                t: a
              })]
            })]
          }) : null
        }));
      var oe = i(3111);
      const ce = "rockstargames-sites-rockstargamesfb53bedab2c55d1a3c602f6d22cbf878";
      var me = i(4187),
        ue = i.n(me);
      const ke = e => {
          let {
            loading: a,
            searchResponse: i,
            searchTerm: n,
            activeTab: t,
            t: s
          } = e;
          const [r, d] = (0, E.useSearchParams)();
          let l;
          switch (t) {
            case "posts":
              l = i.posts.results.map((e => (0, o.jsx)(g.NewswireCard, {
                post: e,
                noSpecialOrder: !0
              }, e.id)));
              break;
            case "games":
              l = i.games.results.map((e => (0, o.jsx)(g.GameCard.Link, {
                game: e
              }, e.id)));
              break;
            case "videos":
              l = i.videos.results.map((e => (0, o.jsx)(g.VideoCard.Link, {
                video: e
              }, e.id)));
              break;
            default:
              l = null
          }
          return (0, o.jsxs)(o.Fragment, {
            children: [a ? "" : (0, o.jsx)("section", {
              className: "rockstargames-sites-rockstargamesb6a41ef752e979cced54d95e69679ae9",
              children: (0, o.jsx)("div", {
                className: "rockstargames-sites-rockstargamesc0e4a01d8eeef3f28aaaeea0249d53e8",
                children: l
              })
            }), i[t]?.paging ? (0, o.jsx)("section", {
              className: "rockstargames-sites-rockstargamesc024862ad35278cedeff9669a4045d22",
              children: (0, o.jsx)(g.Paging, {
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
        ge = (0, h.withTranslations)((e => {
          let {
            t: a
          } = e;
          const i = (0, j.Z)(),
            {
              state: {
                search: n
              },
              setSearch: t,
              setTitle: s
            } = (0, F.useRockstarLocalState)(),
            r = (0, h.useQueryParams)(),
            [l, c] = (0, d.useState)(null),
            [m, u] = (0, d.useState)({}),
            [k, v] = (0, d.useState)(r.get("tab") ?? null),
            {
              data: f = {},
              loading: b
            } = (0, p.useQuery)(ue(), {
              variables: m,
              skip: !Object.entries(m).length || !m.q,
              autoSetLoading: !0
            });
          return (0, d.useEffect)((() => {
            const e = {
              q: r.get("q"),
              page: Number(r.get("page") ?? 1),
              withGames: !0,
              withPosts: !0,
              withVideos: !0
            };
            u(e), t(r.get("q"))
          }), [r.get("q"), r.get("page"), r.get("tab"), k]), (0, d.useEffect)((() => {
            const e = Object.entries(f).find((e => {
              let [, a] = e;
              return a?.paging?.count > 0
            }))?.[0];
            v(r.get("tab") ?? e ?? null)
          }), [f, r.get("tab")]), (0, d.useEffect)((() => {
            void 0 !== f?.games?.paging?.count && (c((f?.games?.paging?.count ?? 0) + (f?.videos?.paging?.count ?? 0) + (f?.posts?.paging?.count ?? 0)), s(f?.meta?.title.replace("%s", n)))
          }), [f, k]), Object.entries(m).length ? m.q ? null === l || b ? null : (0, o.jsx)(o.Fragment, {
            children: f[k].results.length ? (0, o.jsxs)("div", {
              className: ce,
              children: [(0, o.jsx)("section", {
                className: "rockstargames-sites-rockstargamesb54a20d6c2a28171fc3b24fa6d2df86f",
                children: (0, o.jsx)("h4", {
                  children: (0, o.jsx)(x.Z, {
                    ...oe.sitesRockstar.rsg_total_results_message,
                    values: {
                      Tab: (0, o.jsx)("span", {
                        className: "rockstargames-sites-rockstargamesc396a7460982460f718f495155de8358",
                        children: r.get("tab")
                      }),
                      Query: (0, o.jsx)("span", {
                        children: r.get("q")
                      })
                    }
                  })
                })
              }), b ? "" : (0, o.jsx)(ke, {
                searchResponse: f,
                searchTerm: n,
                activeTab: k,
                t: a
              })]
            }) : (0, o.jsx)("div", {
              className: ce,
              children: (0, o.jsxs)("section", {
                className: "rockstargames-sites-rockstargamesb408f6bebfeb1b3462c8dabcb36e0d9b",
                children: [(0, o.jsx)("div", {
                  className: "rockstargames-sites-rockstargamesc6f00c8492b7f5d1a7ae1cc143faa1ae"
                }), (0, o.jsx)("h4", {
                  children: i.formatMessage(oe.sitesRockstar.rsg_no_results)
                })]
              })
            })
          }) : (0, o.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa6b96f1aa331851eea3b9fad5cb04a8f",
            children: (0, o.jsxs)("section", {
              className: "rockstargames-sites-rockstargamescdc8dd93ce6946707dab221c0a16845e",
              children: [(0, o.jsx)("h3", {
                children: a("Search")
              }), (0, o.jsx)(g.SearchBox, {})]
            })
          }) : null
        }));
      var ve = i(3891),
        fe = i.n(ve);
      const be = {
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
      var pe = i(4929),
        he = i.n(pe);
      const Ne = (0, g.withSearchbarErrorBoundary)((0, h.withTranslations)((e => {
          let {
            CookieSettingsModal: a,
            noCountrySelector: i,
            titleKey: n,
            jsonType: t,
            t: s
          } = e;
          const r = (0, E.useNavigate)(),
            l = (0, E.useLocation)(),
            c = (0, h.useLocale)(),
            m = (0, h.useQueryParams)(),
            u = (0, d.useRef)(),
            k = (e, a) => {
              const i = a ?? e.target.hash,
                n = document.getElementById(i.replace("#", "")),
                t = document.getElementsByName(i.replace("#", ""))?.[0],
                s = n ?? t ?? null,
                d = m.get("country");
              if (e) {
                const a = `${l.pathname}${m.get("country")?`?country=${d}`:""}${i}`;
                r(a), e.preventDefault()
              }
              s && window.scroll(0, s.offsetTop - u.current.getBoundingClientRect().height - 60)
            },
            [v, f] = (0, d.useState)({}),
            {
              data: b,
              loading: N
            } = (0, p.useQuery)(he(), {
              variables: v,
              skip: !Object.entries(v).length,
              autoSetLoading: !0
            });
          (0, d.useEffect)((() => {
            const e = m.get("country") ?? m.get("locale") ?? null,
              a = void 0 === i,
              n = a && null !== e ? e : a && c.split("_").length > 1 ? "hans" === c.split("_")[1] ? c.split("_")[0] : c.split("_")[1] : c;
            f({
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
                  e.setAttribute("href", `${n}${l.pathname.replace("/","")}${null!==a?`?country=${a}`:""}#${i}`)
                }
              })(e), e.addEventListener("click", (e => {
                k(e, !1)
              }))
            })), "" !== l.hash && setTimeout((() => {
              k(!1, l.hash)
            }), 10)
          }), [b]);
          const {
            content: S
          } = b?.companyInfo ?? "";
          return (0, o.jsxs)("div", {
            className: be.companyInfo,
            "data-locale": v.jsonLocale,
            children: [(0, o.jsxs)("section", {
              className: be.top,
              ref: u,
              children: [(0, o.jsx)("h1", {
                children: s(n)
              }), "undefined" !== i && i ? "" : (0, o.jsx)("nav", {
                className: be.nav,
                children: ["us", "br", "cz", "de", "es", "fr", "it", "jp", "kr", "mx", "nl", "pl", "ru", "sa", "tw", "zh"].map(((e, a) => (0, o.jsx)(g.A, {
                  to: `${l.pathname}?country=${e}`,
                  className: be[e]
                }, a)))
              })]
            }), b && !N ? (0, o.jsx)("section", {
              className: be.content,
              "data-json-type": t,
              children: "cookies" === t && b ? (0, o.jsx)(fe(), {
                renderInWrapper: !1,
                components: {
                  CookieSettingsModal: a
                },
                jsx: S,
                onError: e => {
                  console.error("jsx error in companyinfo", e)
                }
              }) : (0, o.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: S
                }
              })
            }) : ""]
          })
        }))),
        Se = () => (0, o.jsx)(Ne, {
          jsonType: "conduct",
          titleKey: "conduct-title",
          noCountrySelector: !0
        }),
        xe = () => (0, o.jsx)(Ne, {
          jsonType: "corpinfo",
          titleKey: "Corporate Information",
          noCountrySelector: !0
        }),
        je = () => (0, o.jsx)(Ne, {
          jsonType: "eula",
          titleKey: "eula-title"
        }),
        ye = () => (0, o.jsx)(Ne, {
          jsonType: "legal",
          titleKey: "Terms of Service"
        }),
        we = () => (0, o.jsx)(Ne, {
          jsonType: "careers-privacy",
          titleKey: "Privacy Policy"
        }),
        Fe = () => (0, o.jsx)(Ne, {
          jsonType: "privacy",
          titleKey: "Privacy Policy"
        }),
        _e = e => {
          let {
            t: a
          } = e;
          return (0, o.jsx)(g.Button, {
            className: be.cookieSettingsButton,
            onClick: () => window.OneTrust?.ToggleInfoDisplay(),
            children: a("gdpr-settings-button-title")
          })
        },
        Ve = () => (0, o.jsx)(Ne, {
          jsonType: "cookies",
          titleKey: "Cookie Policy",
          CookieSettingsModal: (0, h.withTranslations)(_e)
        }),
        Te = () => (0, o.jsx)(Ne, {
          jsonType: "ccpa",
          titleKey: "ccpa-title",
          noCountrySelector: !0
        }),
        Ae = {
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
      var Ee = i(2239),
        De = i.n(Ee);
      const Le = (0, h.withTranslations)((e => {
        let {
          t: a
        } = e;
        const {
          data: i
        } = (0, p.useQuery)(De(), {
          autoSetLoading: !0
        });
        if (!i) return null;
        const {
          manuals: n
        } = i;
        return (0, o.jsxs)("div", {
          className: Ae.manuals,
          children: [(0, o.jsx)("h2", {
            children: a("Manuals")
          }), (0, o.jsx)("div", {
            className: Ae.list,
            children: n.map((e => (0, o.jsxs)("div", {
              className: Ae.item,
              children: [(0, o.jsx)("div", {
                className: Ae.img,
                style: {
                  backgroundImage: `url(${e.game.fob_640})`
                }
              }), (0, o.jsx)(g.Dropdown, {
                title: e.game.title,
                className: Ae.dropdown,
                children: e.manuals_platforms.map((e => (0, o.jsxs)("p", {
                  children: [(0, o.jsx)("span", {
                    children: e.platform
                  }), e.manuals_links.map((e => (0, o.jsx)("a", {
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
      var Ie = i(9885),
        $e = i.n(Ie);
      const Ce = e => {
          let {
            detail: a
          } = e;
          const {
            sanitize: i
          } = $e();
          return (0, o.jsxs)("div", {
            className: Ae.detail,
            children: [(0, o.jsx)("div", {
              dangerouslySetInnerHTML: {
                __html: i(a.content)
              }
            }), a.album_cover ? (0, o.jsx)("div", {
              className: [Ae.album, Ae[a.album_cover]].join(" ")
            }) : "", (0, o.jsx)(g.A, {
              to: "/",
              children: (0, o.jsx)("div", {
                className: Ae.rockstar
              })
            })]
          })
        },
        Ge = (0, h.withTranslations)((e => {
          let {
            stations: a,
            gameId: i,
            t: n
          } = e;
          const {
            sanitize: t
          } = $e();
          return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("h1", {
              children: n("Music Credits")
            }), a && 55 === a[0].game_id ? (0, o.jsxs)("div", {
              className: Ae.warriorsCredit,
              children: [(0, o.jsx)("p", {
                children: "Score by Steve Donohoe and Neveroddoreven"
              }), (0, o.jsx)("p", {
                children: "Russell Simpson - Guitar"
              }), (0, o.jsx)("p", {
                children: "Jeff Scale - Bass"
              }), (0, o.jsx)("p", {
                children: "Brian Vella - Drums"
              }), (0, o.jsx)("p", {
                children: "Recorded at Metalworks Studios, Toronto"
              }), (0, o.jsx)("p", {
                children: "Engineered by Ian Bodzasi"
              })]
            }) : "", (0, o.jsx)("div", {
              className: [Ae.list, a && 55 === a[0].game_id ? Ae.warriors : ""].join(" "),
              children: a && a.map(((e, s) => (0, o.jsxs)("div", {
                className: Ae.station,
                children: [55 !== e.game_id ? (0, o.jsx)("div", {
                  className: [Ae.logo, Ae[e.slug]].join(" ")
                }) : (0, o.jsx)("h3", {
                  children: e.title
                }), e.music_credits && e.music_credits.map((e => (0, o.jsxs)("div", {
                  className: Ae.credit,
                  children: [(0, o.jsx)("h5", {
                    dangerouslySetInnerHTML: {
                      __html: t(e.title)
                    }
                  }), (0, o.jsx)("p", {
                    children: e.written_by
                  }), (0, o.jsx)("p", {
                    children: e.published_by
                  }), (0, o.jsx)("p", {
                    children: e.courtesy_of
                  }), e?.music_detail ? (0, o.jsx)("p", {
                    className: Ae.additional,
                    children: (0, o.jsx)(g.A, {
                      to: `music?gameId=${i}&stationId=${a[s].id}&songId=${e.id}`,
                      children: n("Lyrics/Info")
                    })
                  }) : ""]
                }, e.title)))]
              }, e.id)))
            })]
          })
        }));
      var Pe = i(8213),
        qe = i.n(Pe);
      const Oe = () => {
          const e = (0, h.useQueryParams)(),
            a = Number(e.get("gameId")),
            i = Number(e.get("songId")),
            n = Number(e.get("stationId"));
          let t = !1;
          const {
            data: s
          } = (0, p.useQuery)(qe(), {
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
          })), (0, o.jsxs)("div", {
            className: [Ae.music, 25 === a ? Ae.gtaiv : 26 === a ? Ae.tlad : 32 === a ? Ae.bogt : 28 === a ? Ae.eflc : 34 === a ? Ae.vcs : ""].join(" "),
            children: [(0, o.jsx)("div", {
              className: [Ae.gameLogo, 26 === a ? Ae.tlad : 32 === a ? Ae.bogt : 28 === a ? Ae.eflc : 25 === a ? Ae.gtaiv : 34 === a ? Ae.vcs : 55 === a ? Ae.warriors : ""].join(" ")
            }), a && r ? n && i && t ? (0, o.jsx)(Ce, {
              detail: t
            }) : (0, o.jsx)(Ge, {
              stations: r,
              gameId: a
            }) : null]
          })
        },
        Be = (0, h.withTranslations)((e => {
          let {
            t: a
          } = e;
          return (0, o.jsxs)("div", {
            className: "rockstargames-sites-rockstargamesabdecdd87f2cf4b8194c0091fdd0b4a0",
            children: [(0, o.jsx)("section", {
              className: "rockstargames-sites-rockstargamesd13bb1cebcd96c067a01aee27efccfed",
              children: (0, o.jsx)("h1", {
                children: "Contact Us"
              })
            }), (0, o.jsxs)("section", {
              className: "rockstargames-sites-rockstargamesb58b960fc23a48600bdbc8a2777aa5f3",
              children: [(0, o.jsx)("p", {
                children: a("contact.intro")
              }), (0, o.jsxs)("p", {
                children: [(0, o.jsx)("span", {
                  children: a("contact.gtao-feedback")
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://www.rockstargames.com/GTAOnline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press GTAOnline Feedback",
                  children: "https://www.rockstargames.com/GTAOnline/feedback"
                })]
              }), (0, o.jsxs)("p", {
                children: [(0, o.jsx)("span", {
                  children: a("contact.rdo-feedback")
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://www.rockstargames.com/reddeadonline/feedback",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press RDO Feedback",
                  children: "https://www.rockstargames.com/reddeadonline/feedback"
                })]
              }), (0, o.jsxs)("p", {
                children: [(0, o.jsx)("span", {
                  children: a("contact.technical")
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://support.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Support",
                  children: "https://support.rockstargames.com/"
                })]
              }), (0, o.jsxs)("p", {
                children: [(0, o.jsx)("span", {
                  children: a("contact.career")
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://www.rockstargames.com/careers/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Careers",
                  children: "https://www.rockstargames.com/careers/"
                })]
              }), (0, o.jsxs)("p", {
                children: [(0, o.jsx)("span", {
                  children: a("contact.copyright")
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Policy",
                  children: "https://support.rockstargames.com/articles/200153756/Policy-on-posting-copyrighted-Rockstar-Games-material"
                })]
              }), (0, o.jsxs)("p", {
                children: [(0, o.jsx)("span", {
                  children: a("contact.legal")
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "mailto:Copyright@take2games.com",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Copyright Email",
                  children: "Copyright@take2games.com"
                })]
              }), (0, o.jsxs)("p", {
                children: [(0, o.jsx)("span", {
                  children: a("contact.latest")
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://www.rockstargames.com/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Rockstar Games Site",
                  children: "https://www.rockstargames.com/"
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://twitter.com/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Twitter Site",
                  children: "https://twitter.com/RockstarGames"
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://www.instagram.com/rockstargames/",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Instagram Site",
                  children: "https://www.instagram.com/rockstargames/"
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://www.facebook.com/rockstargames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Facebook Site",
                  children: "https://www.facebook.com/rockstargames"
                }), (0, o.jsx)("br", {}), (0, o.jsx)(g.A, {
                  to: "https://www.youtube.com/user/RockstarGames",
                  "data-gtm-category": "Contact Us",
                  "data-gtm-action": "Link Click",
                  "data-gtm-label": "Press Youtube Site",
                  children: "https://www.youtube.com/user/RockstarGames"
                })]
              }), (0, o.jsx)("br", {})]
            })]
          })
        })),
        Re = {
          maint: "rockstargames-sites-rockstargamesee5e5a68eb125090583fe5d4f8ce03df",
          content: "rockstargames-sites-rockstargamesf5aef392e680073f8fed78567c8dbb4e",
          logo: "rockstargames-sites-rockstargamesda2fe3ab2392b09ff23958abdf602eb4"
        },
        Me = () => (0, o.jsx)("div", {
          className: Re.maint,
          children: (0, o.jsxs)("div", {
            className: Re.content,
            children: [(0, o.jsx)("div", {
              className: Re.logo
            }), (0, o.jsx)("p", {
              children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
            }), (0, o.jsx)("a", {
              className: Re.support,
              href: "https://support.rockstargames.com/",
              children: "https://support.rockstargames.com/"
            })]
          })
        }),
        ze = () => (0, o.jsxs)("div", {
          className: "rockstargames-sites-rockstargamesc4061150feb48d282a2363b7cbed6ac5",
          children: [(0, o.jsx)("div", {
            className: "rockstargames-sites-rockstargamesa026b866e5e33e40478c738b8a6714fd"
          }), (0, o.jsx)("h3", {
            children: "Standard Deviation is now a part of Rockstar Games."
          })]
        }),
        Ue = {
          jpwrapper: "rockstargames-sites-rockstargamesba6d4394dc71688a882bb545fc08beb4",
          body: "rockstargames-sites-rockstargamesdd0895660ec10bf279836cd110070640",
          responsiveImage: "rockstargames-sites-rockstargamesfb8048b514e49776135df91d47ef29db",
          link: "rockstargames-sites-rockstargamesac320620a02a8d3897d310cf288855ab",
          bodyPadding: "rockstargames-sites-rockstargamesd13a76b87f08d8fdbc47d45cd7450dd1",
          headline_3: "rockstargames-sites-rockstargamesa12bcaa8e0eec396547de0cae798278a",
          headline_2: "rockstargames-sites-rockstargamese2c90393cdf11f29befc2038de073e48",
          disclaimer: "rockstargames-sites-rockstargamesa88581f8d3bc749026f10eb47ec6aeb2"
        },
        He = g.framer.withFadeIn((() => (0, o.jsxs)("div", {
          className: Ue.jpwrapper,
          children: [(0, o.jsx)(g.MultiSourceImage, {
            className: Ue.responsiveImage,
            image: {
              desktop: i(6019)
            }
          }), (0, o.jsxs)(g.Grid, {
            className: [Ue.body, Ue.inner, Ue.gap_sm].join(" "),
            children: [(0, o.jsx)("h1", {
              children: "GTAマネーを最大250万ドル獲得しよう"
            }), (0, o.jsxs)("p", {
              children: [(0, o.jsx)("a", {
                className: Ue.link,
                href: "https://www.rockstargames.com/jp/newswire/article/175k8294o31ooo/gta-online-san-andreas-mercenaries-now-available",
                children: "「GTAオンライン：サンアンドレアスの傭兵」"
              }), "のリリースを記念して、日本のプレイヤーだけが参加できる初めてのコミュニティチャレンジを開催します。"]
            }), (0, o.jsx)("p", {
              children: "今から9月7日までに密輸貨物の売却ミッションに参加して密輸貨物をさばき、合計GTAマネー3億ドルを売り上げ、GTAマネー50万ドルを解除しましょう。"
            }), (0, o.jsx)("p", {
              children: "密輸貨物を入手すると、格納庫内のパソコンからフリートレード運送のサイトを使って売却ミッションを開始できるようになります。"
            }), (0, o.jsx)(g.MultiSourceImage, {
              image: {
                desktop: i(2143)
              }
            }), (0, o.jsx)("h1", {
              children: "お気に入りのクリエイターを応援しよう"
            }), (0, o.jsx)("p", {
              children: "YouTubeとTwitchで活躍する日本のトップクリエイターたちが、8月31日から9月3日まで4日間のライブストリーミングイベントに参加します。 クリエイターには毎日チャレンジが課せられ、成功すれば日本のプレイヤー全員に追加でGTAマネー200万ドルが贈られます。"
            }), (0, o.jsx)(g.MultiSourceImage, {
              className: Ue.bodyPadding,
              image: {
                desktop: i(6836)
              }
            }), (0, o.jsx)("p", {
              children: "各チームは最近追加されたキャリア進行状況メニューを使って自分たちの成績を記録し、 条件に到達すれば下記のボーナスGTAマネーが日本のプレイヤー全員に贈られます。"
            }), (0, o.jsx)(g.MultiSourceImage, {
              className: Ue.bodyPadding,
              image: {
                desktop: i(9319)
              }
            }), (0, o.jsxs)("p", {
              children: ["さらなる詳細は、", (0, o.jsx)("a", {
                href: "https://www.twitch.tv/dasoku_aniki",
                className: Ue.link,
                children: "Twitch"
              }), "で8月31日午後6時(日本時間)にイベントMCの蛇足の配信を視聴してください。"]
            }), (0, o.jsx)("p", {
              className: Ue.disclaimer,
              children: "チャレンジは2023年9月7日午後6時(日本時間)に終了します。日本にお住いのプレイヤーに限ります。 Social Clubアカウント1つにつき最大でGTAマネー250万ドルが贈られます。コミュニティ報酬はチャレンジ参加者限定です。 コミュニティの目標に到達した場合、報酬はゲーム内で受け取る必要があります。コンソールでオンラインをプレイするには別に有料のサブスクリプションが必要です。 規約が適用されます。可能な限り、イベント終了後72時間以内にプレイヤーのアカウントに贈られます。"
            }), (0, o.jsx)(g.Rating, {
              condensed: !0,
              titleSlug: "GTAOnline"
            })]
          })]
        }))),
        Qe = {
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
          "sites-red-dead-redemption-2": (0, d.lazy)((() => i.e(570).then(i.t.bind(i, 2570, 23)))),
          "sites-red-dead-redemption": (0, d.lazy)((() => i.e(295).then(i.t.bind(i, 5295, 23)))),
          "sites-rockstargames-downloads": (0, d.lazy)((() => i.e(70).then(i.t.bind(i, 1070, 23))))
        },
        Ke = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const i = Qe[e],
            {
              setHeaderHidden: n
            } = (0, F.useRockstarLocalState)();
          return (0, o.jsx)(d.Suspense, {
            fallback: "",
            children: (0, o.jsx)(i, {
              setHeaderHidden: n,
              config: a
            })
          })
        },
        We = (0, g.withSearchbarErrorBoundary)((() => {
          const e = [{
            path: "/",
            element: (0, o.jsx)(G, {})
          }, {
            path: "/careers-privacy",
            element: (0, o.jsx)(we, {})
          }, {
            path: "/ccpa",
            element: (0, o.jsx)(Te, {})
          }, {
            path: "/conduct",
            element: (0, o.jsx)(Se, {})
          }, {
            path: "/contact",
            element: (0, o.jsx)(Be, {})
          }, {
            path: "/cookies",
            element: (0, o.jsx)(Ve, {})
          }, {
            path: "/corpinfo",
            element: (0, o.jsx)(xe, {})
          }, {
            path: "/eula",
            element: (0, o.jsx)(je, {})
          }, {
            path: "/games",
            element: (0, o.jsx)(Z, {})
          }, {
            path: "/games/:gameTitlelug",
            element: (0, o.jsx)(le, {})
          }, {
            path: "/legal",
            element: (0, o.jsx)(ye, {})
          }, {
            path: "/gta-v/thankyou",
            element: (0, o.jsx)(A.Credits, {
              title: "v"
            })
          }, {
            path: "/standarddeviation",
            element: (0, o.jsx)(ze, {})
          }, {
            path: "/community_event",
            element: (0, o.jsx)(He, {})
          }, {
            path: "/reddeadredemption2/*",
            element: Ke("sites-red-dead-redemption-2")
          }, {
            path: "/reddeadredemption/*",
            element: Ke("sites-red-dead-redemption")
          }, {
            path: "/reddeadonline/thankyou",
            element: (0, o.jsx)(A.Credits, {
              title: "rdr2"
            })
          }, {
            path: "/careers/*",
            element: Ke("sites-careers")
          }, {
            path: "/downloads/*",
            element: Ke("sites-rockstargames-downloads")
          }, {
            path: "/reddeadonline/*",
            element: Ke("sites-red-dead-online")
          }, {
            path: "/frontline-heroes",
            element: Ke("frontline-heroes")
          }, {
            path: "/gifs/:hashId",
            element: Ke("modules-core-gif-viewer")
          }, {
            path: "/gta-v/*",
            element: Ke("sites-gta-gen9", {
              routeRoot: "/gta-v"
            })
          }, {
            path: "/gta-plus/*",
            element: Ke("sites-gta-gen9", {
              routeRoot: "/gta-plus"
            })
          }, {
            path: "/gta-online/*",
            element: Ke("sites-gta-gen9", {
              routeRoot: "/gta-online"
            })
          }, {
            path: "/GTATrilogy",
            element: Ke("sites-gta-trilogy")
          }, {
            path: "/gtatv/*",
            element: Ke("gta-tv")
          }, {
            path: "/manuals",
            element: (0, o.jsx)(Le, {})
          }, {
            path: "/manuals/music",
            element: (0, o.jsx)(Oe, {})
          }, {
            path: "/newswire",
            element: (0, o.jsx)(P, {})
          }, {
            path: "/newswire/article/:articleId/:articleSlug",
            element: (0, o.jsx)(B, {})
          }, {
            path: "/old-privacy",
            element: (0, o.jsx)(Fe, {})
          }, {
            path: "/privacy",
            element: (0, o.jsx)(Fe, {})
          }, {
            path: "/rockstartv/*",
            element: Ke("rockstar-tv")
          }, {
            path: "/screenshot-viewer/*",
            element: Ke("screenshot-viewer")
          }, {
            path: "/search",
            element: (0, o.jsx)(ge, {})
          }, {
            path: "/socialclubmaintenance",
            element: (0, o.jsx)(Me, {})
          }, {
            path: "/videoplayer",
            element: Ke("modules-core-videoplayer")
          }, {
            path: "/videos",
            element: (0, o.jsx)(U, {})
          }, {
            path: "/videos/:videoId",
            element: (0, o.jsx)(Q, {})
          }, {
            path: "*",
            element: (0, o.jsx)(g.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, E.useRoutes)(e)
        })),
        Ze = {
          main: "rockstargames-sites-rockstargamesf1aef688b1fb7db52825ffe602919893",
          gameSite: "rockstargames-sites-rockstargamesd94349e6082443747b43bfb1b3572894",
          "theme-std": "rockstargames-sites-rockstargamesc96f36a0f4271c94bc947959cc6f339d",
          headerHidden: "rockstargames-sites-rockstargamesd477842bf331a57b7775dad383937ca6",
          standalone: "rockstargames-sites-rockstargamesf25a9c90e12ca706e97edcb4d8824b69"
        },
        Ye = (0, n.withAutoRouteTracking)((() => {
          const {
            state: {
              headerHidden: e,
              standalone: a
            }
          } = (0, F.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("resize", (() => {
              document.body.height = window.innerHeight
            }))
          }), []), (0, o.jsx)("main", {
            role: "main",
            id: "main",
            className: [Ze.main, a ? Ze.standalone : "", e ? Ze.headerHidden : ""].join(" "),
            children: (0, o.jsx)(We, {})
          })
        })),
        Je = ((0, p.makeVar)({
          base: "",
          navOpen: !1
        }), document.location.pathname),
        Xe = {
          search: "",
          navOpen: !1,
          navHidden: !1,
          gameSiteNavOpen: !1,
          normalLogo: !0,
          loading: !1,
          headerHidden: !1,
          standalone: (["/gifs", "/screenshot-viewer", "/videoplayer"].find((e => Je.includes(e))) ?? []).length > 0,
          error: {
            message: window?.errorFromServer?.message ?? null,
            code: window?.errorFromServer?.code ?? null
          },
          breadcrumb: {
            links: [],
            filter: ""
          }
        },
        ea = (0, p.makeVar)(Xe),
        aa = (0, p.makeVarNamespace)("rockstar-root"),
        ia = window?.env?.graphEnv ?? "prod";
      k();
      const na = (() => {
          const e = window;
          if (e[u]?.history || k(), e[u]?.history) return e[u].history;
          throw new Error("Browser History has not been initialised")
        })(),
        ta = () => {
          const {
            state: {
              standalone: e,
              customFooter: a
            }
          } = (0, h.useRockstarLocalState)(), [i] = (0, v.useModal)(), n = (0, h.useLocale)();
          return (0, o.jsx)(w, {
            locales: _.intlMessages,
            lang: n,
            children: (0, o.jsx)(S.GtmProvider, {
              children: (0, o.jsxs)(g.ScrollTracker, {
                threshold: [25, 50, 75, 90, 100],
                children: [i, (0, o.jsx)(g.ScrollToTop, {}), (0, o.jsx)(Ye, {}), e || a ? "" : (0, o.jsx)(A.FooterNav, {})]
              })
            })
          })
        },
        sa = () => (0, o.jsx)(v.ModalProvider, {
          children: (0, o.jsx)(ta, {})
        }),
        {
          pingBearer: ra
        } = (0, h.getScConfigForOrigin)(),
        da = (0, p.withReactiveState)((() => {
          const e = (0, p.useBase)(),
            {
              setLoading: a,
              setTitle: i,
              state: {
                standalone: n
              }
            } = (0, h.useRockstarLocalState)();
          return (0, d.useEffect)((() => {
            window.addEventListener("message", (e => {
              const n = e.data?.type ?? null;
              "graph.titleUpdate" === n && i(e.data.title), "graph.loadingUpdate" === n && a(e.data.loading)
            }))
          }), [a, i]), (0, o.jsx)(h.ResizeProvider, {
            children: (0, o.jsx)(N.ScrollProvider, {
              children: (0, o.jsxs)(S.RockstarUserProvider, {
                children: [!n && (0, o.jsx)(T(), {
                  baseName: e
                }), (0, o.jsx)(c, {
                  history: na,
                  basename: e,
                  children: (0, o.jsx)(sa, {})
                })]
              })
            })
          })
        }), {
          state: ea
        }),
        la = (0, p.withRockstarGraph)(da, {
          env: ia,
          token: aa("token", null),
          tokenPing: ra,
          tokenPingExpires: aa("tokenPingExpires", null),
          typePolicies: {
            ...b()
          }
        }),
        oa = window?.env?.oneTrustId ?? null,
        ca = window?.env?.gtmId ?? null;
      (0, n.init)({
        id: ca
      }), s()({
        id: oa,
        init: () => {
          const e = document.createElement("div");
          document.body.appendChild(e), (0, r.s)(e).render((0, o.jsx)(la, {}))
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