(self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [139], {
    1484: (e, a, s) => {
      "use strict";
      s.d(a, {
        Z: () => ne
      });
      var n = s(3740),
        i = s(8976);
      var t = s(3705);
      const r = () => (0, t.jsx)("footer", {
        className: "rockstargames-sites-careersc53ad9d1fd6c026a47a8227868e37595",
        children: (0, t.jsxs)("div", {
          className: "rockstargames-sites-careersa44b5a869124fd887db605e663bb3d34",
          children: [(0, t.jsxs)("div", {
            className: "rockstargames-sites-careersb20d6c570d6f227630bcd0b7bea41719",
            children: [(0, t.jsx)("span", {
              children: "Follow Rockstar Games Careers:"
            }), (0, t.jsxs)("div", {
              className: "rockstargames-sites-careersd4b1f9ce61e39521cd03a10d2a3c59b2",
              children: [(0, t.jsx)(i.A, {
                to: "https://twitter.com/RockstarCareers",
                target: "_blank",
                className: "rockstargames-sites-careersef41c76578fcd07e3cd62c114781543d"
              }), (0, t.jsx)(i.A, {
                to: "https://www.linkedin.com/company/rockstar-games",
                target: "_blank",
                className: "rockstargames-sites-careersba433d3d909c8cd6679cbe33fdcd7764"
              })]
            })]
          }), (0, t.jsx)(i.A, {
            to: "https://www.rockstargames.com",
            className: "rockstargames-sites-careersf387aed0e6ea44a251df4b546f67d76e"
          }), (0, t.jsxs)("div", {
            className: "rockstargames-sites-careersdbe6185e4c20570cc2df9bb25c342054",
            children: [(0, t.jsx)(i.A, {
              to: "https://www.rockstargames.com/corpinfo",
              children: "Corporate"
            }), (0, t.jsx)(i.A, {
              to: "https://www.rockstargames.com/privacy",
              children: "Privacy"
            }), (0, t.jsx)(i.A, {
              to: "https://www.rockstargames.com/legal",
              children: "Legal"
            }), (0, t.jsx)(i.A, {
              to: "./accessibility",
              children: "Accessibility"
            })]
          })]
        })
      });
      var o = s(927),
        c = s(9929),
        l = s(4175),
        d = s(4859),
        m = s(712);
      const u = (0, c.withTranslations)((e => {
          let {
            openModal: a = !1,
            setOpenModal: s
          } = e;
          const [i, r] = (0, o.useState)(null), c = (0, o.useRef)(), l = (0, o.useRef)(), u = (0, o.useRef)(), [p] = (0, d.useMutation)(m.ContactUs), [f, h] = (0, o.useState)("");
          return a ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
              className: "rockstargames-sites-careersfae9b567af24e4140c9f3d27a421a324",
              onClick: () => s(!1)
            }), (0, t.jsxs)("div", {
              className: "rockstargames-sites-careersa25468ea4a0a89353b24c4ad263a1cbb",
              children: [(0, t.jsx)("button", {
                className: "rockstargames-sites-careersb6700c1a5ea441499b79dfa36c37ead0",
                "aria-label": "Close Contact Us Modal Button",
                onClick: () => s(!1),
                type: "button"
              }), (0, t.jsxs)("div", {
                className: "rockstargames-sites-careersacc24fe13cbbd745c3d811221c455349",
                children: [(0, t.jsx)("h1", {
                  className: "rockstargames-sites-careersf325097ad152459094b10acf03ea752c",
                  children: "Contact Us"
                }), f || (0, t.jsxs)("form", {
                  onSubmit: e => (async e => {
                    e.preventDefault();
                    const a = {
                      recaptcha_token: i,
                      data: {
                        name: c.current.value,
                        email: l.current.value,
                        message: u.current.value
                      }
                    };
                    try {
                      await p({
                        variables: a
                      }), h("Your message has been received.")
                    } catch (e) {
                      h("Something went wrong. Please try again later.")
                    }
                  })(e),
                  className: "rockstargames-sites-careerscc09b534fe673f01e24794832891ad00",
                  children: [f, (0, t.jsx)("input", {
                    type: "text",
                    id: "name",
                    name: "name",
                    placeholder: "Name",
                    ref: c,
                    required: !0
                  }), (0, t.jsx)("input", {
                    type: "email",
                    id: "email",
                    name: "email",
                    placeholder: "Email Address",
                    ref: l,
                    required: !0
                  }), (0, t.jsx)("textarea", {
                    id: "message",
                    name: "message",
                    placeholder: "Talk to Us",
                    ref: u,
                    required: !0
                  }), (0, t.jsx)(n.mP, {
                    onVerify: e => {
                      r(e)
                    }
                  }), (0, t.jsx)("input", {
                    type: "submit",
                    value: "Submit"
                  })]
                })]
              })]
            })]
          }) : null
        })),
        p = {
          siteNav: "rockstargames-sites-careersa4138be3e4698bedba1c1186019aeba9",
          activeNavLink: "rockstargames-sites-careerscabb07245cc031ee455c50804a689b0b"
        },
        f = (0, c.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            pathname: s
          } = (0, l.useLocation)(), n = (0, o.useRef)(), r = (0, l.useNavigate)(), [c, d] = (0, o.useState)(!1), [m] = (0, l.useSearchParams)(), f = m.get("q");
          return (0, t.jsxs)("div", {
            className: p.siteNav,
            children: [(0, t.jsxs)("nav", {
              className: p.links,
              children: [(0, t.jsx)(i.A, {
                to: ".",
                className: "/" === s ? p.activeNavLink : "",
                children: a("Home")
              }), (0, t.jsx)(i.A, {
                to: "./openings",
                className: "/openings" === s ? p.activeNavLink : "",
                children: a("Openings")
              }), (0, t.jsx)(i.A, {
                to: "#",
                onClick: () => d(!c),
                children: a("Contact Us")
              })]
            }), (0, t.jsx)("form", {
              onSubmit: e => (e => {
                e.preventDefault();
                const a = n.current.value ?? null,
                  s = "./openings" + (a ? `?q=${a}` : "");
                document.activeElement.blur(), r(s)
              })(e),
              children: (0, t.jsx)("input", {
                placeholder: "Search",
                ref: n,
                defaultValue: f,
                enterKeyHint: "search"
              })
            }), (0, t.jsx)(u, {
              openModal: c,
              setOpenModal: d
            })]
          })
        })),
        h = (0, c.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s, n] = (0, o.useState)(Boolean(sessionStorage.getItem("careersHeaderMsgOpen")));
          return (0, o.useEffect)((() => {
            sessionStorage.setItem("careersHeaderMsgOpen", String(Boolean(s)))
          }), [s]), (0, t.jsxs)("header", {
            className: "rockstargames-sites-careersd625a1a325dfcfd5189c5dc6d2c26d78",
            children: [s && (0, t.jsxs)("div", {
              className: "rockstargames-sites-careerscb003795f5db7babed8b5d7bcfcafaca",
              children: [(0, t.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a("careers.header_msg")
                }
              }), (0, t.jsx)("button", {
                className: "rockstargames-sites-careersa09c9217219b00d19350a335d7ebd249",
                "aria-label": "Close Banner Message Button",
                onClick: () => n(!1),
                type: "button"
              })]
            }), (0, t.jsxs)("div", {
              className: "rockstargames-sites-careersc1b8b949cb8f5aac4992a6bf6d24b7d2",
              children: [(0, t.jsxs)(i.A, {
                className: "rockstargames-sites-careersa3545003e596b61f5e29fbf6b936bfef",
                to: ".",
                children: [(0, t.jsx)("div", {
                  className: "rockstargames-sites-careerse9153b24f41d1b00d10a82c9917acb9b"
                }), (0, t.jsx)("h1", {
                  children: "Rockstar Games Careers"
                })]
              }), (0, t.jsx)(f, {})]
            })]
          })
        })),
        b = "rockstargames-sites-careersefc921382bffaff8db3c2b11b341e6c7",
        k = () => (0, t.jsxs)("div", {
          className: "rockstargames-sites-careersb04933d288c14d1c0c7308bab0b03a90",
          children: [(0, t.jsxs)("h2", {
            children: ["Accessibility Policy", (0, t.jsx)("br", {}), " ", "& Multi-Year Accessibility Plan for Rockstar Games Toronto ULC"]
          }), (0, t.jsxs)("p", {
            children: ["In 2005, the Ontario Government set the goal of a “barrier-free Ontario” for people with disabilities by creating the Accessibility for Ontarians with Disabilities Act, 2005 (“the Act” or “AODA”). Regulations were created which set out the steps that organizations, including", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Games Toronto ULC (“Rockstar Toronto”)."
            }), ", must take to meet this laudable goal. These Regulations cover accessibility standards in customer service, information and communications, employment, transportation and the built environment."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will or is in the process of creating internal policies, practices and procedures, which recognize the role", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will play in making Ontario more accessible."]
          }), (0, t.jsxs)("p", {
            children: ["This Accessibility Policy and Multi-Year Accessibility Plan outline the policies, procedures and actions that", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will put or has put in place to comply with the requirements of the Act and its Regulations"]
          }), (0, t.jsx)("h3", {
            children: "Statement of Commitment"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "is committed to improving accessibility for individuals with disabilities and treating all people in a way that allows them to maintain their dignity and independence.", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will continue to meet the needs of people with disabilities in a timely manner, and will do so by preventing and removing barriers to accessibility and meeting accessibility requirements under the Act and its Regulations."]
          }), (0, t.jsx)("h3", {
            children: "Barrier Assessment"
          }), (0, t.jsxs)("p", {
            children: ["In accordance with AODA and", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto’s"
            }), " ", "goal of providing an inclusive workplace, this Accessibility Policy and Multi-Year Accessibility Plan seeks to eliminate and prevent barriers to accessibility. Typical barriers experienced by individuals with disabilities include physical, communication and technology, attitudinal and systemic barriers."]
          }), (0, t.jsx)("h3", {
            children: "Accessible Customer Service"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "is committed to accessible customer service in keeping with the principles of dignity, independence, integration and equal opportunity."]
          }), (0, t.jsxs)("p", {
            children: ["Employees will be trained on", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto’s"
            }), " ", "Customer Service Standard Policy."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), " ", (0, t.jsx)("br", {}), "Effective", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Accessible Emergency Information"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "is committed to providing its customers with publicly available emergency information, in an accessible way, upon request."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will also provide disabled employees with individualized emergency response information and create Individual Emergency Response Information Plans when necessary."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "Effective", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Training"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will provide training to employees relating to people with disabilities. Training will be provided in a way that best suits the duties of", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "employees being trained."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto Inc."
            }), " ", "will take the following steps to ensure employees and volunteers are provided with the training needed to meet Ontario’s accessible laws:"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will review current training materials to determine whether any existing materials can be built upon and used for AODA training;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will provide Customer Service Training for all employees who deal with members of the public and/or any other third parties;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will provide training on:"]
            }), (0, t.jsxs)("ul", {
              children: [(0, t.jsx)("li", {
                children: "(1) The requirements of the accessibility standards referred to in the Integrated Accessibility Standard, O. Reg. 119/11; and"
              }), (0, t.jsx)("li", {
                children: "(2) The requirements of the Human Rights Code (“the Code”) as it pertains to persons with disabilities; and,"
              })]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will continue to provide training as required under AODA for all new employees and/or if there is a substantial change to", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto’s"
              }), " ", "Accessibility or other related policy."]
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "Effective", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Information And Communications"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "is committed to meeting the information and communication needs of people with disabilities."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all information publically available in Ontario is made accessible upon request by", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2016"
            }), ":"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will consult with disabled customers to determine their specific needs;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests for accessible information as soon as practicable; and,"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will provide customers with information in an accessible format, upon request."]
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any new website and new web content, specific to Ontario, conform to WCAG 2.0, Level A by", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2014"
            }), ":"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: ["any new", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "website applicable to Ontario will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, t.jsxs)("li", {
              children: ["any new", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "web content applicable to Ontario will be assessed and evaluated for accessibility conformance;"]
            }), (0, t.jsxs)("li", {
              children: ["if conformance with WCAG 2.0 Level A is an issue,", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will consult with its internal IT department regarding necessary changes to its new website and new web content so as to come into compliance;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will engage services of its internal IT department to implement improvements to its website and web content so as to meet the compliance standards."]
            }), " "]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any public website and web content specific to Ontario conform to WCAG 2.0, Level AA by", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2021"
            }), ":"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto’s"
              }), " ", "Ontario web page will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, t.jsx)("li", {
              children: "public web content in Ontario will be assessed and evaluated for accessibility conformance;"
            }), (0, t.jsxs)("li", {
              children: ["if not in conformance with WCAG 2.0 Level A,", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto Inc."
              }), " ", "will consult with its internal IT department regarding necessary changes to bring to the website and web content into compliance;"]
            }), (0, t.jsx)("li", {
              children: "services of an external website consultant will be engaged to make the above improvements to the website and web content, if the internal IT department is unable to make the necessary changes; and,"
            }), (0, t.jsx)("li", {
              children: "necessary improvements to the website and content will be made to ensure compliance."
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2014"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Feedback"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make ensure existing feedback processes are accessible to people with disabilities upon request by", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2015:"
            })]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsx)("li", {
              children: "make the provision of feedback accessible on its website or other location as appropriate;"
            }), (0, t.jsxs)("li", {
              children: ["advise customers and clients that feedback can be given in person, by mail, by phone, by fax or by e-mail to:", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Telephone: 905-829-2203, ext. 222", (0, t.jsx)("br", {}), "Facsimile: 905-829-2246", (0, t.jsx)("br", {}), "E-mail:", " ", (0, t.jsx)("a", {
                href: "mailto:aoda@rockstartoronto.com",
                children: "aoda@rockstartoronto.com"
              }), (0, t.jsx)("br", {}), (0, t.jsx)("br", {})]
            }), (0, t.jsx)("li", {
              children: "ensure the public that supports are available to facilitate the submission of feedback; and,"
            }), (0, t.jsx)("li", {
              children: "commit to responding to feedback as soon as practicable."
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all publicly available information is made accessible upon request by", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2016:"
            })]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will provide its customers and members of the public with information in an accessible format upon request."]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests as soon as practicable."]
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Employment"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "is committed to fair and accessible employment practices."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps by", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2016"
            }), " ", "to notify the public and staff that it will accommodate people with disabilities during the recruitment and assessment processes and when hired:"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: ["include a statement in any job advertisements that", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities and will provide accommodations during the hiring process;"]
            }), (0, t.jsxs)("li", {
              children: ["if a job applicant requests accommodation,", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will consult with the individual and make adjustments that best suit his/her needs to the extent required by law;"]
            }), (0, t.jsxs)("li", {
              children: ["confirm, in any interview, that", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities;"]
            }), (0, t.jsxs)("li", {
              children: ["notify successful applicants of", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto’s"
              }), " ", "policies for accommodating employees with disabilities;"]
            }), (0, t.jsxs)("li", {
              children: ["include in the", " ", (0, t.jsx)("span", {
                className: b,
                children: "Rockstar Toronto new hire"
              }), " ", "training program a section on accessibility and the Code, as appropriate;"]
            }), (0, t.jsx)("li", {
              children: "advise current employees of the policies on accessibility and the Code;"
            }), (0, t.jsx)("li", {
              children: "advise employees when any changes are made to the above policies; and,"
            }), (0, t.jsx)("li", {
              children: "review existing policies and procedures, and where necessary, augment processes for people with disabilities."
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to develop and put in place a process for designing individual accommodation plans and return-to-work policies for employees that have been absent due to a disability:"]
          }), (0, t.jsx)("ul", {
            children: (0, t.jsx)("li", {
              children: "review existing policies and procedures and if necessary, augment processes for people with disabilities on the development of accommodation plans and return to work processes."
            })
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to ensure the accessibility needs of employees with disabilities are taken into account if", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "uses a career development and redeployment processes:"]
          }), (0, t.jsx)("ul", {
            children: (0, t.jsx)("li", {
              children: "review existing policies and procedures and amend where necessary to ensure accessibility considerations."
            })
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to prevent and remove other accessibility barriers identified:"]
          }), (0, t.jsx)("ul", {
            children: (0, t.jsx)("li", {
              children: "assess, review, and alter (if required) policies and procedures to ensure compliance with the AODA."
            })
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Service Disruptions"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "has put procedures in place to prevent service disruptions to its accessible parts of its public spaces."]
          }), (0, t.jsxs)("p", {
            children: ["In the event of a service disruption,", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will notify the public of the service disruption and alternatives available."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "Effective immediately and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Policy Review"
          }), (0, t.jsxs)("p", {
            children: ["The Multi-Year Accessibility Plan is a tool for", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "to communicate its accessibility initiatives internally and to the public.", " ", (0, t.jsx)("span", {
              className: b,
              children: "Rockstar Toronto"
            }), " ", "will review and update this Plan at least once every five (5) years. The first version of this Plan will be reviewed no later than", " ", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2019"
            }), "."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: b,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", (0, t.jsx)("span", {
              className: b,
              children: "January 1, 2019"
            }), " ", "and ongoing."]
          }), (0, t.jsxs)("p", {
            children: ["For more information on this accessibility plan, please contact us at 905-829-2203, ext. 222 or", " ", (0, t.jsx)("a", {
              href: "mailto:aoda@rockstartoronto.com",
              children: "aoda@rockstartoronto.com"
            }), "."]
          }), (0, t.jsx)("p", {
            children: "Please note accessible formats of this Accessibility Policy and Multi-Year Accessibility Plan are available free upon request at the contacts listed above."
          })]
        });
      var v = s(3903);
      s(3657);
      var g = s(3111),
        j = s(176);
      const y = {
          home: "rockstargames-sites-careersdcf817f11d19ae0ef32bf4b753d292a2",
          offices: "rockstargames-sites-careersdfa78440e609539a6d5eeca25c4ca08b",
          blurb: "rockstargames-sites-careersb76f323a7b8cda1218249dd765293574",
          viewOpeningsButtonContainer: "rockstargames-sites-careersc0c88f1a633625ccd041c29a75c24460",
          viewOpeningsButton: "rockstargames-sites-careersc5be62ee13e9d538f71f7749612aab18",
          secondary: "rockstargames-sites-careersb4a3bce7cee9a5b16f904a9d0a548e6a"
        },
        x = () => {
          const {
            formatMessage: e
          } = (0, v.Z)(), {
            data: a
          } = (0, d.useQuery)(j.HomeData);
          return a ? (0, t.jsxs)("div", {
            className: y.home,
            children: [(0, t.jsxs)("div", {
              className: y.offices,
              children: [a.jobsOffices.map((e => (0, t.jsxs)(i.A, {
                to: `./offices/${e.seo_url}`,
                className: y.office,
                children: [(0, t.jsx)("dt", {
                  children: e.name
                }), (0, t.jsx)("dd", {
                  children: e.location
                })]
              }, e.name))), (0, t.jsx)(i.A, {
                className: y.viewOpeningsButtonContainer,
                to: "./openings",
                children: (0, t.jsx)("button", {
                  className: y.viewOpeningsButton,
                  type: "button",
                  children: "View All Openings"
                })
              })]
            }), (0, t.jsx)("div", {
              className: y.blurb,
              dangerouslySetInnerHTML: {
                __html: e(g.sitesCareers.careers_home_msg)
              }
            })]
          }) : null
        },
        N = e => {
          let {
            headType: a,
            positions: s,
            title: n,
            openingsLinkRelative: r = "./",
            positionLinkRelative: o = "./",
            officesLinkRelative: c = "../"
          } = e;
          return (0, t.jsxs)("div", {
            className: "rockstargames-sites-careerseaeeb9897e04ec9a73cda75eb72e48cf",
            children: [(0, t.jsx)("h4", {
              children: (0, t.jsx)(i.A, {
                to: "department" === a ? `${r}?department=${encodeURIComponent(n)}` : `${c}offices/${s[0].company.seo_url}`,
                children: n
              })
            }), (0, t.jsx)("div", {
              className: "rockstargames-sites-careerseed8de799b71fdd0d767f2c184145b96",
              children: s.map((e => {
                let {
                  id: a,
                  title: s
                } = e;
                return (0, t.jsx)(i.A, {
                  to: `${o}position/${a}`,
                  children: s
                }, a)
              }))
            })]
          })
        };
      var w = s(5370),
        _ = s.n(w);
      const S = e => {
          let {
            positions: a,
            key: s
          } = e;
          return _()(a).groupBy((e => e[s])).map(((e, a) => ({
            [s]: a,
            positions: e
          }))).value()
        },
        C = e => {
          let {
            positions: a,
            key: s
          } = e;
          return _().orderBy(a, [s], ["asc"])
        };
      var T = s(8827);
      const R = {
          positionGroups: "rockstargames-sites-careersabafe83bdbbc12323cfebd8be1c20549",
          positionGroupsRendered: "rockstargames-sites-careersf559486307c49de485c57f86a4da2322",
          mapImg: "rockstargames-sites-careersee42d230cd52ae95f8134611fc94dab3",
          office: "rockstargames-sites-careersc299e3a3cc95d7389dab026e87979b05"
        },
        A = () => {
          const {
            office_seo: e
          } = (0, l.useParams)(), {
            data: a,
            loading: s
          } = (0, d.useQuery)(T.OfficeData, {
            variables: {
              companySlug: e
            }
          }), [n, i] = (0, o.useState)(null), [r, c] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            c(!1), setTimeout((() => {
              c(!0)
            }), 1e3)
          }), [s]), (0, o.useEffect)((() => {
            if (!a) return;
            const e = S({
                key: "department",
                positions: a.jobsPositionList
              }),
              s = C({
                key: "department",
                positions: e
              });
            i(s)
          }), [a]), n ? (0, t.jsxs)("div", {
            className: R.office,
            children: [(0, t.jsx)("h2", {
              children: a?.jobsOffices[0]?.name
            }), (0, t.jsx)("div", {
              className: [R.positionGroups, r ? R.positionGroupsRendered : ""].join(" "),
              children: n.map((e => {
                let {
                  department: a,
                  positions: s
                } = e;
                return (0, t.jsx)(N, {
                  positions: s,
                  title: a,
                  headType: "department",
                  openingsLinkRelative: "../openings/",
                  positionLinkRelative: "../openings/"
                }, a)
              }))
            })]
          }) : null
        };
      var D = s(9849);
      const F = {
          openings: "rockstargames-sites-careersca4cbf659df273865c682d539156bbab",
          sort: "rockstargames-sites-careersb4798ff5e057831c279c9d6e5e5961b9",
          sortButtons: "rockstargames-sites-careersc809a9ce2e22ae3b992ed89d483999be",
          secondary: "rockstargames-sites-careersfe46b8fe8acfd32125a0c4c8c1774fa3",
          activeSort: "rockstargames-sites-careersbb8ca9321dca11edb5d794849eab478f",
          heirarchy: "rockstargames-sites-careersca7579f1b66993733771344941d85bf6",
          heirarchyRendered: "rockstargames-sites-careersf35f90ebed0755b7b959824a47dd00c4",
          primaryGrid: "rockstargames-sites-careersb35e29f1d04c90e60d4fe13fac9de03e",
          primaryHeaderH: "rockstargames-sites-careersef1540733063018be551d9f458050643",
          primaryIsCompany: "rockstargames-sites-careerscf9454681985d2f030debb7f37819460",
          searchHeader: "rockstargames-sites-careersd66e7beb5b61084116912074bb06525b",
          viewOpeningsButton: "rockstargames-sites-careersa3f7a9813dd1deef534d1ec8684d839e"
        },
        E = e => {
          let {
            positions: a,
            key: s
          } = e;
          return C({
            positions: S({
              positions: a,
              key: s
            }),
            key: s
          })
        };
      var O = s(9228);
      const L = "rockstargames-sites-careersd609da80d38334b92bc11246a08e7e4d",
        P = "rockstargames-sites-careersa675aaaf52c42c894d21af4fd47c1658",
        q = e => {
          let {
            position: a
          } = e;
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(i.A, {
              to: a.apply_href,
              target: "_blank",
              className: "rockstargames-sites-careersdbb902e05f92f9e0488c3bfa0a389510",
              children: "Apply now"
            }), (0, t.jsxs)("footer", {
              className: "rockstargames-sites-careersd3ccb05b214f2af996e2f515fb0aa3be",
              children: [(0, t.jsxs)(i.A, {
                to: `../offices/${a.company.seo_url}`,
                className: P,
                children: ["See all", (0, t.jsx)("b", {
                  children: a.company.name
                }), "positions"]
              }), (0, t.jsxs)(i.A, {
                to: `../openings?department=${encodeURIComponent(a.department)}`,
                className: P,
                children: ["See all", (0, t.jsx)("b", {
                  children: a.department
                }), "positions"]
              })]
            })]
          })
        },
        V = (0, i.withSimpleErrorBoundary)((() => {
          const {
            position_id: e
          } = (0, l.useParams)(), {
            data: a
          } = (0, d.useQuery)(O.PositionData, {
            variables: {
              positionId: Number(e)
            }
          });
          if (!a) return (0, t.jsx)("div", {
            className: L,
            children: "Loading..."
          });
          const {
            jobsPosition: s
          } = a;
          return (0, t.jsxs)("div", {
            className: L,
            children: [(0, t.jsxs)("header", {
              className: "rockstargames-sites-careersb6ff0681d1861708f1329d3c69c33457",
              children: [(0, t.jsxs)("div", {
                className: "rockstargames-sites-careersc00e9b9bac3ddb18cb0e1bbeeb26d94c",
                children: [(0, t.jsx)(i.A, {
                  to: `../offices/${s.company.seo_url}`,
                  children: s.company.name
                }), (0, t.jsx)(i.A, {
                  to: `../openings?department=${encodeURIComponent(s.department)}`,
                  children: s.department
                })]
              }), (0, t.jsx)("h1", {
                children: s.title
              })]
            }), (0, t.jsx)("div", {
              className: "rockstargames-sites-careersc64e7796247d489417e8ec65a5b59e3d",
              dangerouslySetInnerHTML: {
                __html: s.description
              }
            }), (0, t.jsx)(q, {
              position: s
            })]
          })
        }), "That position was not found."),
        H = () => (0, t.jsxs)("svg", {
          width: "100",
          height: "92",
          viewBox: "0 0 100 92",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, t.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M98.1426 88.6095C98.0342 88.5468 97.8592 88.5168 97.6074 88.5168H97.2245V89.4122H97.6268C97.8157 89.4122 97.9592 89.3946 98.0546 89.354C98.2301 89.2908 98.3162 89.1603 98.3162 88.9712C98.3162 88.7894 98.2588 88.6713 98.1426 88.6095ZM97.6634 88.2012C97.9791 88.2012 98.2102 88.2317 98.3551 88.2935C98.6176 88.4024 98.7453 88.6127 98.7453 88.9283C98.7453 89.1511 98.6694 89.3185 98.4995 89.4251C98.4129 89.4772 98.2907 89.5206 98.137 89.5446C98.3342 89.5745 98.4759 89.6548 98.5676 89.7877C98.6583 89.9205 98.7064 90.0478 98.7064 90.1724V90.3546C98.7064 90.4137 98.7111 90.4755 98.7129 90.5433C98.7129 90.6097 98.7222 90.6498 98.7282 90.6706L98.7453 90.7024H98.3352C98.3342 90.6969 98.3342 90.6849 98.3301 90.6808C98.3301 90.6706 98.3264 90.6632 98.3264 90.6498L98.3162 90.5719V90.3763C98.3162 90.0875 98.2375 89.8938 98.0731 89.8047C97.9791 89.7521 97.8157 89.724 97.5791 89.724H97.2245V90.7024H96.7842V88.2012H97.6634ZM96.3088 88.073C95.9291 88.4568 95.7384 88.92 95.7384 89.4597C95.7384 90.0049 95.9245 90.4695 96.3088 90.8528C96.6944 91.2389 97.1537 91.4308 97.7074 91.4308C98.256 91.4308 98.7222 91.2389 99.1051 90.8528C99.4842 90.4695 99.6764 90.0049 99.6764 89.4597C99.6764 88.92 99.4842 88.4568 99.1051 88.073C98.7171 87.6915 98.256 87.4982 97.7074 87.4982C97.1639 87.4982 96.6953 87.6915 96.3088 88.073ZM99.3277 91.0733C98.8842 91.5226 98.3426 91.7454 97.7074 91.7454C97.0727 91.7454 96.531 91.5226 96.0916 91.0733C95.649 90.6291 95.4236 90.0917 95.4236 89.4583C95.4236 88.8305 95.649 88.2935 96.094 87.8479C96.5398 87.406 97.0777 87.185 97.7074 87.185C98.3426 87.185 98.8842 87.406 99.3277 87.8479C99.7759 88.2935 100 88.8277 100 89.4583C100 90.0875 99.7759 90.6291 99.3277 91.0733Z",
            fill: "#FFFFFE"
          }), (0, t.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M98.0292 74.7408C98.0292 83.2121 91.1838 89.8466 82.4426 89.8466H17.5532C8.81667 89.8466 1.96898 83.2121 1.96898 74.7408V17.303C1.96898 8.8026 8.8875 2.14784 17.7139 2.14784H82.6065C91.2537 2.14784 98.0292 8.8026 98.0292 17.303V74.7408ZM82.6065 0.184998H17.7139C7.94722 0.184998 0 7.868 0 17.3067V74.744C0 84.3147 7.70741 91.8117 17.5532 91.8117H82.4426C92.2884 91.8117 100 84.3147 100 74.744V17.3067C100 7.707 92.362 0.184998 82.6065 0.184998Z",
            fill: "black"
          }), (0, t.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M82.6065 2.14782H17.7139C8.88751 2.14782 1.96899 8.80258 1.96899 17.303V74.7407C1.96899 83.2121 8.81668 89.8466 17.5533 89.8466H82.4426C91.1838 89.8466 98.0292 83.2121 98.0292 74.7407V17.303C98.0292 8.80258 91.2537 2.14782 82.6065 2.14782Z",
            fill: "#FCAF17"
          }), (0, t.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M50.094 33.3356H42.238L44.12 24.3956H51.4292C54.0315 24.3956 56.738 25.0695 56.738 28.2428C56.738 32.2423 53.6556 33.3356 50.094 33.3356ZM85.8769 54.7128H73.3487L71.3616 42.2673L64.0195 54.6257H62.6464C61.8139 53.1952 61.4834 51.1004 61.4834 49.8189C61.4834 47.6927 61.6371 45.6187 61.6371 42.9215C61.6371 39.3427 60.5815 37.4223 57.7639 36.7474V36.6408C63.7561 35.8114 66.4723 31.8613 66.4723 26.3003C66.4723 18.4 61.1973 16.6867 54.2857 16.6867H35.6866L27.8269 53.7736H37.7102L40.5709 40.2791H47.1408C50.645 40.2791 52.0783 41.9887 52.0783 45.258C52.0783 47.7453 51.8186 49.7146 51.8186 51.6309C51.8186 52.3394 51.9792 53.9863 52.4598 54.6257C52.4542 54.6257 59.6038 62.1375 59.6038 62.1375L53.457 75.3068C53.457 75.3068 53.457 75.3068 66.6033 67.5241L76.3991 75.0231L74.5709 62.5979L85.8769 54.7128Z",
            fill: "black"
          }), (0, t.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M80.1088 56.5253H71.7944L70.3588 47.5147L65.0579 56.4372H56.6782L61.775 61.7855L57.5833 70.7537L66.7398 65.3366L73.9523 70.863L72.6129 61.7514L80.1088 56.5253Z",
            fill: "white"
          })]
        }),
        I = "rockstargames-sites-careersd7320ade289756fc8512a8cb4fd1e271",
        $ = "rockstargames-sites-careerseb5fe5fd94a29526f4335437ca1b9cc9",
        G = "rockstargames-sites-careersdfdb9cd846ad174704743fe5d9ce1f51",
        M = e => {
          let {
            label: a,
            clarification: s,
            name: n,
            placeholder: i,
            type: r = "text",
            required: o = !0,
            onChange: c
          } = e;
          return o ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("label", {
              htmlFor: a,
              className: I,
              children: [a, (0, t.jsx)("span", {
                className: "rockstargames-sites-careersc856ba13adaa342ef50d10c65eba2b3b",
                children: "*"
              })]
            }), s && (0, t.jsx)("span", {
              className: $,
              children: s
            }), (0, t.jsx)("input", {
              type: r,
              name: n,
              placeholder: i,
              className: G,
              required: !0,
              onChange: c
            })]
          }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("label", {
              htmlFor: a,
              className: I,
              children: a
            }), s && (0, t.jsx)("span", {
              className: $,
              children: s
            }), (0, t.jsx)("input", {
              type: r,
              name: a,
              placeholder: i,
              className: G,
              onChange: c
            })]
          })
        };
      var z = s(9484);
      const B = e => {
          let {
            label: a,
            clarification: s,
            name: n,
            data: i,
            placeholder: r,
            required: c = !0,
            update: l,
            isMulti: d
          } = e;
          const m = (0, o.useRef)(),
            [u, p] = (0, o.useState)("");
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("label", {
              htmlFor: n,
              className: "rockstargames-sites-careersec0f6c66c9a7e7b2f5e23c7d2c57e2d5",
              children: [a, c && (0, t.jsx)("span", {
                className: "rockstargames-sites-careersa0dca8a51f5263442ee347a5ff9a7d59",
                children: "*"
              })]
            }), s && (0, t.jsx)("span", {
              className: "rockstargames-sites-careerse0502b8009cf94dce559b89e1d6deb84",
              children: s
            }), (0, t.jsx)(z.ZP, {
              className: "rockstargames-sites-careersaad57dc707acdff4b20fadf065eb7a22",
              isClearable: !0,
              isSearchable: !0,
              styles: {
                placeholder: e => ({
                  ...e,
                  color: "#747474",
                  opacity: "0.8"
                })
              },
              name: n,
              placeholder: r,
              isOptionDisabled: e => "Loading..." === e.label,
              options: i ?? [{
                value: void 0,
                label: "Loading..."
              }],
              ref: m,
              onChange: e => (e => {
                p(e || ""), l(e)
              })(e),
              isMulti: d || !1
            }), c && (0, t.jsx)("input", {
              tabIndex: -1,
              autoComplete: "off",
              style: {
                opacity: 0,
                width: "100%",
                height: 0,
                position: "absolute",
                padding: 0,
                border: 0
              },
              onChange: () => null,
              value: u,
              onFocus: () => {
                m.current && m.current.focus()
              },
              required: c
            })]
          })
        },
        J = e => {
          let {
            data: a,
            update: s
          } = e;
          const [n, i] = (0, o.useState)(Array(a?.length).fill(!1)), [r, c] = (0, o.useState)(!1);
          (0, o.useEffect)((() => {
            3 === n.filter((e => e)).length ? c(!0) : r && c(!1);
            const e = a?.custom_field_options?.filter(((e, a) => n[a])).map((e => {
              let {
                value: a
              } = e;
              return a
            }));
            s && s({
              selectedSkills: e
            })
          }), [n]);
          const l = a?.custom_field_options?.map(((e, a) => {
            let {
              label: s,
              value: o
            } = e;
            return (0, t.jsxs)("div", {
              className: "rockstargames-sites-careersd2a73e2d3255d44d41f077f562949f0f",
              children: [(0, t.jsx)("input", {
                type: "checkbox",
                id: s.toLowerCase(),
                name: s.toLowerCase(),
                value: o,
                defaultChecked: n[a],
                onClick: () => (e => {
                  if (n[e]) {
                    const a = [...n];
                    return a[e] = !1, void i([...a])
                  }
                  if (!n[e] && 3 === n.filter((e => e)).length) return;
                  const a = [...n];
                  a[e] = !0, i([...a])
                })(a),
                disabled: !n[a] && r
              }), (0, t.jsx)("label", {
                className: "rockstargames-sites-careersf2b644d433a5fc2109297c8fa997e82c",
                htmlFor: s.toLowerCase(),
                children: s
              })]
            }, s.toLowerCase())
          }));
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("legend", {
              className: "rockstargames-sites-careerscd7f1583af3e41d0c10d8fd0675867a2",
              children: ["Which option(s) best represents your strongest skillset? Choose up to 3", (0, t.jsx)("span", {
                className: "rockstargames-sites-careersda5bb73168905a55b819e071b8957d62",
                children: "*"
              })]
            }), (0, t.jsx)("div", {
              className: "rockstargames-sites-careersd099082f2f305ec5f3abeb119e5d6fa4",
              children: l
            })]
          })
        },
        U = "rockstargames-sites-careersd5506aa3a5b4592eb47ac7c0a60fedcc",
        Z = e => {
          let {
            label: a,
            seasonsData: s,
            required: n = !0,
            updateSeason: i,
            updateYear: r
          } = e;
          const c = (0, o.useRef)(),
            l = (0, o.useRef)(),
            [d, m] = (0, o.useState)(""),
            [u, p] = (0, o.useState)(""),
            f = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
              const a = (new Date).getFullYear(),
                s = [];
              for (let n = a + e; n >= a - e; n -= 1) s.push({
                label: `${n}`,
                value: n
              });
              return s
            }(),
            h = {
              opacity: 0,
              width: "100%",
              height: 0,
              position: "absolute",
              padding: 0,
              border: 0
            };
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("label", {
              className: "rockstargames-sites-careersbc12b10cc755ff4301d52a74a82ccc14",
              htmlFor: "anticipated_graduation",
              children: [a, n && (0, t.jsx)("span", {
                className: "rockstargames-sites-careersa185d14e06ab300bd9abdf3be2a9223e",
                children: "*"
              })]
            }), (0, t.jsxs)("div", {
              className: "rockstargames-sites-careersa64250e56c3da9b4e8d35dc6a12c64d5",
              children: [(0, t.jsx)(z.ZP, {
                className: U,
                isClearable: !0,
                isSearchable: !0,
                styles: {
                  placeholder: e => ({
                    ...e,
                    color: "#747474",
                    opacity: "0.8"
                  })
                },
                name: "anticipated_graduation_season",
                placeholder: "Select season",
                options: s,
                ref: c,
                onChange: e => (e => {
                  i(e), m(e ?? "")
                })(e)
              }), (0, t.jsx)(z.ZP, {
                className: U,
                isClearable: !0,
                isSearchable: !0,
                styles: {
                  placeholder: e => ({
                    ...e,
                    color: "#747474",
                    opacity: "0.8"
                  })
                },
                name: "anticipated_graduation_year",
                placeholder: "Select year",
                options: f,
                ref: l,
                onChange: e => (e => {
                  r(e), p(e ?? "")
                })(e)
              }), n && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: h,
                  onChange: () => null,
                  value: d,
                  onFocus: () => {
                    c.current && c.current.focus()
                  },
                  required: n
                }), (0, t.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: h,
                  onChange: () => null,
                  value: u,
                  onFocus: () => {
                    l.current && l.current.focus()
                  },
                  required: n
                })]
              })]
            })]
          })
        };
      var W = s(1839);
      const Y = "rockstargames-sites-careerscc195f280984da7e156baea83a20e7dc",
        Q = () => (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(H, {}), (0, t.jsxs)("div", {
            className: "rockstargames-sites-careersb500b0ca7184e89c9d09bf1c6ce62525",
            children: [(0, t.jsxs)("p", {
              className: "rockstargames-sites-careersd7d667278bcf29d3327fef5ffcb8659a",
              children: ["Thank you for your interest in Rockstar Games. If you'd like us to stay in touch with you regarding future opportunities, please submit your information below. To view our current job openings, please", " ", (0, t.jsx)(i.A, {
                to: "../openings",
                className: Y,
                children: "visit our careers site"
              }), "."]
            }), (0, t.jsxs)("p", {
              className: "rockstargames-sites-careersb8a116287e1d33d4f9f2f44ebccec4dd",
              children: [(0, t.jsx)("span", {
                className: "rockstargames-sites-careersabcf7c17c455744ab02384e56efd1a7f",
                children: "*"
              }), "indicates a required field"]
            })]
          })]
        }),
        K = () => (0, t.jsxs)("p", {
          className: "rockstargames-sites-careersf740c9ee6bc2d9d32ea69b59df0678e6",
          children: ["For all information on how we use your personal data please see our", " ", (0, t.jsx)(i.A, {
            to: "https://www.rockstargames.com/careers-privacy",
            className: Y,
            children: "applicant privacy policy"
          }), "."]
        }),
        X = () => (0, t.jsxs)("span", {
          children: ["Thank you for your interest in Rockstar Games. Your information has submitted successfully. To view our current job openings, please", " ", (0, t.jsx)(i.A, {
            to: "../openings",
            className: Y,
            children: "visit our careers site"
          }), "."]
        }),
        ee = () => {
          const [e, a] = (0, o.useState)(null), [s, i] = (0, o.useState)({}), [r, c] = (0, o.useState)(!1), [l, m] = (0, o.useState)(!1), [u, p] = (0, o.useState)(""), [f, h] = (0, o.useState)(!1), [b, k] = (0, o.useState)(!1), [v, g] = (0, o.useState)(!1), {
            data: j
          } = (0, d.useQuery)(W.greenhouseData), [y] = (0, d.useMutation)(W.AddProspect), x = n => {
            let {
              key: i,
              value: t
            } = n;
            const r = [...e?.custom_fields?.filter((e => e.id && e.id !== s[i]?.id)) ?? []];
            N(s[i]?.id, t), a({
              ...e,
              custom_fields: [...r, {
                id: s[i]?.id,
                value: t
              }]
            })
          }, N = (e, a) => {
            const n = s.university_sponsored_event?.id,
              i = s.university_sponsored_event?.custom_field_options.find((e => "Project Review" === e.label)).value;
            n && e === n && (i && a === i ? m(!0) : (m(!1), x({
              key: "project_review_game_name",
              value: void 0
            })))
          };
          (0, o.useEffect)((() => {
            if (!j) return;
            const {
              greenhouseApiCustomFields: e
            } = j;
            i({
              anticipated_graduation_season: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "anticipated_graduation_season" === a
              })),
              anticipated_graduation_year: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "anticipated_graduation_year" === a
              })),
              degree: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "degree__university_" === a
              })),
              discipline: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "current_major__university__candidate_1663010161.6894388" === a
              })),
              school_name: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "school_name" === a
              })),
              skills: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "skills" === a
              })),
              university_sponsored_event: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "university_sponsored_event" === a
              })),
              project_review_game_name: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "project_review_game_name" === a
              })),
              preferred_work_location: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "preferred_location__university_multi_" === a
              })),
              attended_university_event: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "attended_university_event___university_" === a
              }))
            })
          }), [j]), (0, o.useEffect)((() => {
            j && (r || x({
              key: "university_sponsored_event",
              value: void 0
            }))
          }), [r]);
          const w = (0, o.useCallback)((e => {
            p(e)
          }), []);
          return j || s ? b ? (0, t.jsx)(X, {}) : (0, t.jsxs)("form", {
            className: "rockstargames-sites-careersd592d267686feae7252dba7a67902673",
            onSubmit: a => (async a => {
              a.preventDefault();
              const s = {
                recaptcha_token: u,
                data: e
              };
              if (s.recaptcha_token) try {
                g(!0), await y({
                  variables: s
                }), h((e => !e)), g(!1), k(!0)
              } catch (e) {
                console.error(e)
              }
            })(a),
            children: [(0, t.jsx)(Q, {}), (0, t.jsx)(M, {
              label: "First Name",
              placeholder: "Enter first name",
              name: "first_name",
              onChange: s => a({
                ...e,
                first_name: s.target.value
              })
            }), (0, t.jsx)(M, {
              label: "Last Name",
              placeholder: "Enter last name",
              name: "last_name",
              onChange: s => a({
                ...e,
                last_name: s.target.value
              })
            }), (0, t.jsx)(M, {
              label: "Email Address",
              placeholder: "Enter email address",
              name: "email",
              type: "email_addresses",
              onChange: s => a({
                ...e,
                email_addresses: [{
                  type: "personal",
                  value: s.target.value
                }]
              })
            }), (0, t.jsx)(B, {
              label: "Please indicate your preferred studio location.",
              clarification: "Note: Please only select locations where you currently have a legal right to work.",
              placeholder: "Select your preferred work location",
              name: "preferred_location__university_multi_",
              data: s.preferred_work_location?.custom_field_options,
              update: e => {
                x({
                  key: "preferred_work_location",
                  value: e.length && e[0].value ? e.map((e => {
                    let {
                      value: a
                    } = e;
                    return a
                  })) : []
                })
              },
              isMulti: !0
            }), (0, t.jsx)(B, {
              label: "What school do you currently attend?",
              placeholder: "Select your school",
              name: "school_name",
              data: s.school_name?.custom_field_options,
              update: s => s ? a({
                ...e,
                educations: [{
                  ...e?.educations?.[0] ?? {},
                  school_id: s.value
                }]
              }) : null
            }), (0, t.jsx)(M, {
              label: s.discipline?.description,
              placeholder: "Enter major/course subject",
              name: "discipline",
              onChange: e => x({
                key: "discipline",
                value: e.target.value
              })
            }), (0, t.jsx)(B, {
              label: s.degree?.description,
              placeholder: "Select your degree level",
              name: "degree",
              data: s.degree?.custom_field_options,
              update: e => x({
                key: "degree",
                value: e ? e.value : void 0
              })
            }), (0, t.jsx)(Z, {
              label: "When do you anticipate graduating?",
              seasonsData: s.anticipated_graduation_season?.custom_field_options,
              updateSeason: e => x({
                key: "anticipated_graduation_season",
                value: e ? e.value : void 0
              }),
              updateYear: e => x({
                key: "anticipated_graduation_year",
                value: e ? e.value : void 0
              })
            }), (0, t.jsx)(B, {
              label: "Have you recently attended a university-sponsored event with Rockstar Games?",
              placeholder: "Select yes or no",
              name: "attended_university_event",
              data: s.attended_university_event?.custom_field_options,
              update: e => {
                c(!!e && "Yes" === e.label), x({
                  key: "attended_university_event",
                  value: e ? e.value : void 0
                })
              }
            }), r && (0, t.jsx)(B, {
              label: "What event did you attend?",
              data: s.university_sponsored_event?.custom_field_options,
              name: "university_sponsored_event",
              placeholder: "Select a Rockstar event",
              update: e => x({
                key: "university_sponsored_event",
                value: e ? e.value : void 0
              })
            }), r && l && (0, t.jsx)(M, {
              label: "What is the game you are working on?",
              placeholder: "Enter game name",
              name: "project_review_game_name",
              onChange: e => x({
                key: "project_review_game_name",
                value: e ? e?.target?.value : void 0
              })
            }), (0, t.jsx)(J, {
              data: s.skills,
              update: e => {
                let {
                  selectedSkills: a
                } = e;
                return x({
                  key: "skills",
                  value: a
                })
              }
            }), (0, t.jsx)(M, {
              label: "Please submit a link to your website/portfolio.",
              placeholder: "Enter URL",
              name: "website_addresses",
              required: !1,
              type: "url",
              onChange: s => a({
                ...e,
                website_addresses: [{
                  type: "personal",
                  value: s.target.value
                }]
              })
            }), (0, t.jsx)(K, {}), (0, t.jsx)(n.mP, {
              onVerify: w,
              refreshReCaptcha: f
            }), (0, t.jsx)("input", {
              type: "submit",
              className: "rockstargames-sites-careersa031cdac97dbcae4203ebae66bcc7411",
              disabled: v
            })]
          }) : "Loading..."
        };
      let ae;
      ae = () => {
        const [e, a] = (0, o.useState)("companyName"), [s, n] = (0, o.useState)("department"), [r, c] = (0, o.useState)(null), [m, u] = (0, o.useState)(null), [p, f] = (0, o.useState)(null), [h, b] = (0, o.useState)(null), [k, v] = (0, o.useState)(!0), {
          refetch: g
        } = (0, d.useQuery)(D.OpeningsData, {
          skip: !0
        }), [j] = (0, l.useSearchParams)(), y = j.get("department"), x = j.get("q"), w = e => {
          a(e), n("companyName" === e ? "department" : "companyName")
        }, [_, S] = (0, o.useState)(!1);
        return (0, o.useEffect)((() => {
          S(!1), setTimeout((() => {
            S(!0)
          }), 1e3)
        }), [k, e]), (0, o.useEffect)((() => {
          f({
            department: y ?? null,
            query: x ?? null
          })
        }), [y, x]), (0, o.useEffect)((() => {
          p && (u(null), b(null), v(!0), (async () => {
            try {
              const {
                data: e
              } = await g(p);
              u(e.jobsPositionList ?? [])
            } catch (e) {
              b(String(e))
            }
          })(), v(!1))
        }), [p]), (0, o.useEffect)((() => {
          m && c((e => {
            let {
              positions: a,
              primary: s,
              secondary: n,
              rendered: r
            } = e;
            return (0, t.jsx)("div", {
              className: [F.heirarchy, r ? F.heirarchyRendered : ""].join(" "),
              children: E({
                key: s,
                positions: a
              }).map((e => {
                let {
                  [s]: a, positions: r
                } = e;
                return (0, t.jsxs)("div", {
                  className: F.primaryGrid,
                  children: [(0, t.jsx)("h3", {
                    className: [F.primaryHeaderH, "companyName" === s ? F.primaryIsCompany : ""].join(" "),
                    children: (0, t.jsx)(i.A, {
                      to: "companyName" === s ? `../offices/${r[0].company.seo_url}` : `?department=${escape(r[0].department)}`,
                      children: a
                    })
                  }), E({
                    key: n,
                    positions: r
                  }).map((e => {
                    let {
                      [n]: s, positions: i
                    } = e;
                    return (0, t.jsx)(N, {
                      positions: i,
                      title: s,
                      headType: n,
                      openingsLinkRelative: "",
                      positionLinkRelative: "./",
                      officesLinkRelative: "../"
                    }, `${a}-${s}`)
                  }))]
                }, a)
              }))
            })
          })({
            positions: m,
            primary: e,
            secondary: s,
            rendered: _
          }))
        }), [m, e, s, _]), (0, t.jsxs)("div", {
          className: F.openings,
          children: [h || "", !h && k ? "Searching..." : "", h || k || !m || !y && !x ? "" : (0, t.jsxs)("p", {
            className: F.searchHeader,
            children: [`${m.length} positions found ${x?` matching "${x}"`:""}${y?` in the ${y} department`:""}.`, (0, t.jsx)(i.A, {
              to: "./",
              children: (0, t.jsx)("button", {
                className: F.viewOpeningsButton,
                type: "button",
                children: "View All Openings"
              })
            })]
          }), m?.length ? (0, t.jsxs)("div", {
            className: F.sort,
            children: [(0, t.jsx)("span", {
              children: "Sort by:"
            }), (0, t.jsxs)("div", {
              className: F.sortButtons,
              children: [(0, t.jsx)("button", {
                className: "companyName" === e ? F.activeSort : "",
                onClick: () => w("companyName"),
                type: "button",
                children: "Location"
              }), (0, t.jsx)("button", {
                className: "department" === e ? F.activeSort : "",
                onClick: () => w("department"),
                type: "button",
                children: "Department"
              })]
            })]
          }) : "", m?.length && r ? r : ""]
        })
      };
      const se = () => {
          const e = [{
            path: "/",
            element: (0, t.jsx)(x, {})
          }, {
            path: "/accessibility",
            element: (0, t.jsx)(k, {})
          }, {
            path: "/offices/:office_seo",
            element: (0, t.jsx)(A, {})
          }, {
            path: "/openings",
            element: (0, t.jsx)(ae, {})
          }, {
            path: "/openings/position/:position_id",
            element: (0, t.jsx)(V, {})
          }, {
            path: "/register",
            element: (0, t.jsx)(ee, {})
          }];
          return (0, l.useRoutes)(e)
        },
        ne = () => (0, t.jsx)(n.pm, {
          reCaptchaKey: "6LcY_tohAAAAACJJTRGxlkVO89ud1jP0WbeHftvL",
          children: (0, t.jsx)("div", {
            className: "rockstargames-sites-careersfcabccb77d3afc104ec677b683d15f2d",
            children: (0, t.jsxs)("div", {
              className: "rockstargames-sites-careersf5df5c42f1b4ecb3eea339f0101d7bc9",
              children: [(0, t.jsx)(h, {}), (0, t.jsx)("div", {
                className: "rockstargames-sites-careersa089b814cf413051c57d2f057374d046",
                children: (0, t.jsx)(se, {})
              }), (0, t.jsx)(r, {})]
            })
          })
        })
    },
    712: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "ContactUs"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "data"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "RockstarGames_Jobs_Form_ContactForm_i"
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
                value: "recaptcha_token"
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
                value: "careersContactUs"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "data"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "data"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "recaptcha_token"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "recaptcha_token"
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
                    value: "sent"
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
          end: 178
        }
      };

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
      a.loc.source = {
        body: "mutation ContactUs($data: RockstarGames_Jobs_Form_ContactForm_i!, $recaptcha_token: String!) {\n  careersContactUs(data: $data, recaptcha_token: $recaptcha_token) {\n    sent\n  }\n}",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.ContactUs = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "ContactUs")
    },
    176: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "HomeData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "jobsOffices"
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
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "location"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "seo_url"
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
          end: 89
        }
      };

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
      a.loc.source = {
        body: "query HomeData {\n    jobsOffices {\n        name\n        location\n        seo_url\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.HomeData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "HomeData")
    },
    8827: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "OfficeData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "companySlug"
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
                value: "jobsOffices"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "company_slug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "companySlug"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "location"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "seo_url"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "jobsPositionList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "company_slug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "companySlug"
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
                    value: "department"
                  },
                  arguments: [],
                  directives: []
                }, {
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 243
        }
      };

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
      a.loc.source = {
        body: "query OfficeData($companySlug: String!) {\n    jobsOffices(company_slug: $companySlug) {\n        name\n        location\n        seo_url\n    }\n    jobsPositionList(company_slug: $companySlug) {\n        department\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.OfficeData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "OfficeData")
    },
    9849: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "OpeningsData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "department"
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
                value: "query"
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
                value: "jobsPositionList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "department"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "department"
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
                    value: "query"
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
                    value: "company"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "seo_url"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "companyName"
                  },
                  name: {
                    kind: "Name",
                    value: "company_name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "department"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "department_slug"
                  },
                  arguments: [],
                  directives: []
                }, {
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 275
        }
      };

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
      a.loc.source = {
        body: "query OpeningsData($department: String, $query: String) {\n    jobsPositionList(department: $department, q: $query) {\n        company {\n            seo_url\n        }\n        companyName: company_name\n        department\n        department_slug\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.OpeningsData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "OpeningsData")
    },
    9228: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "PositionData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "positionId"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Float"
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
                value: "jobsPosition"
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
                    value: "positionId"
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
                    value: "apply_href"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "company"
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
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "seo_url"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "department"
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
          end: 223
        }
      };

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
      a.loc.source = {
        body: "query PositionData($positionId: Float!) {\n    jobsPosition(id: $positionId) {\n        apply_href\n        company {\n            name\n            seo_url\n        }\n        department\n        description\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.PositionData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "PositionData")
    },
    1839: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "greenhouseData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "greenhouseApiCustomFields"
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
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "custom_field_options"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "value"
                      },
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "label"
                      },
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
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "AddProspect"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "data"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "RockstarGames_Jobs_GreenhouseResponseTypes_Prospect_i"
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
                value: "recaptcha_token"
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
                value: "greenhouseApiAddProspect"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "data"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "data"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "recaptcha_token"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "recaptcha_token"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 432
        }
      };

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
      a.loc.source = {
        body: "query greenhouseData {\n    greenhouseApiCustomFields {\n        id\n        name\n        description\n        name_key\n        custom_field_options {\n            value: id\n            label: name\n        }\n    }\n}\n\nmutation AddProspect(\n    $data: RockstarGames_Jobs_GreenhouseResponseTypes_Prospect_i!\n    $recaptcha_token: String!\n) {\n    greenhouseApiAddProspect(data: $data, recaptcha_token: $recaptcha_token) {\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }

      function t(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.greenhouseData = t(a, "greenhouseData"), e.exports.AddProspect = t(a, "AddProspect")
    },
    670: (e, a, s) => {
      var n = {
        "./rockstar-dundee.jpg": 8343,
        "./rockstar-india.jpg": 2027,
        "./rockstar-international.jpg": 6552,
        "./rockstar-la.jpg": 6245,
        "./rockstar-leeds.jpg": 6033,
        "./rockstar-lincoln.jpg": 6261,
        "./rockstar-london.jpg": 2631,
        "./rockstar-new-england.jpg": 4598,
        "./rockstar-new-york-zoom-out.jpg": 3008,
        "./rockstar-new-york.jpg": 9429,
        "./rockstar-north-zoom-out.jpg": 473,
        "./rockstar-north.jpg": 7953,
        "./rockstar-san-diego.jpg": 6566,
        "./rockstar-toronto.jpg": 112
      };

      function i(e) {
        var a = t(e);
        return s(a)
      }

      function t(e) {
        if (!s.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      i.keys = function() {
        return Object.keys(n)
      }, i.resolve = t, e.exports = i, i.id = 670
    },
    8343: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    2027: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    6552: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    6245: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    6033: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    6261: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    2631: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    4598: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    3008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a9ea8219b28cb2c2eb66db8e1a49ac2.jpg"
    },
    9429: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f8abb9ddd98782fa585fc1159fbfa897.jpg"
    },
    473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bbb385391b0544e535e6fb70b10d0ec6.jpg"
    },
    7953: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c97b14d3d58fbd5a77e4a20c8f3e22ab.jpg"
    },
    6566: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    },
    112: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b51100cf10d46149364581e7883e5183.jpg"
    }
  }
]);