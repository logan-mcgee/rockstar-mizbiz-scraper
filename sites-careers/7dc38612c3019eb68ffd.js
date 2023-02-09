(self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [342], {
    5753: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => ae
      });
      var i = a(5026),
        s = a(8976);
      var t = a(5668);
      const o = () => (0, t.jsx)("footer", {
        className: "cc49415d2df0352f357b",
        children: (0, t.jsxs)("div", {
          className: "a2e740a3e030726b8f4c",
          children: [(0, t.jsxs)("div", {
            className: "cb79e97ad0b101a112c0",
            children: [(0, t.jsx)("span", {
              children: "Follow Rockstar Games Careers:"
            }), (0, t.jsx)(s.A, {
              to: "https://twitter.com/RockstarCareers",
              target: "_blank",
              className: "b59ba2a782ff31e356d4"
            }), (0, t.jsx)(s.A, {
              to: "https://www.linkedin.com/company/rockstar-games",
              target: "_blank",
              className: "f8d5e01c2aff097b658c"
            })]
          }), (0, t.jsx)(s.A, {
            to: "https://www.rockstargames.com",
            className: "a0a17b83b90d4f570f12"
          }), (0, t.jsxs)("div", {
            className: "fe31733e3d4248f2ef25",
            children: [(0, t.jsx)(s.A, {
              to: "https://www.rockstargames.com/corpinfo",
              children: "Corporate"
            }), (0, t.jsx)(s.A, {
              to: "https://www.rockstargames.com/privacy",
              children: "Privacy"
            }), (0, t.jsx)(s.A, {
              to: "https://www.rockstargames.com/legal",
              children: "Legal"
            }), (0, t.jsx)(s.A, {
              to: "./accessibility",
              children: "Accessibility"
            })]
          })]
        })
      });
      var r = a(822),
        l = a(9929);
      const c = (0, l.withTranslations)((e => {
        let {
          t: n
        } = e;
        const [a, i] = (0, r.useState)(Boolean(sessionStorage.getItem("careersHeaderMsgOpen")));
        return (0, r.useEffect)((() => {
          sessionStorage.setItem("careersHeaderMsgOpen", String(Boolean(a)))
        }), [a]), (0, t.jsxs)("header", {
          className: "cb012e66821114145092",
          children: [a && (0, t.jsxs)("div", {
            className: "f42c0dcfb3945c2e9276",
            children: [(0, t.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: n("careers.header_msg")
              }
            }), (0, t.jsx)("button", {
              className: "f6f33a8c231b4c033e07",
              "aria-label": "Close Banner Message Button",
              onClick: () => i(!1),
              type: "button"
            })]
          }), (0, t.jsxs)(s.A, {
            className: "fc43abc4727024afd74e",
            to: ".",
            children: [(0, t.jsx)("div", {
              className: "b2fdd72e271098917bf0"
            }), (0, t.jsx)("h1", {
              children: "Rockstar Games Careers"
            })]
          })]
        })
      }));
      var d = a(1163),
        m = a(4859),
        u = a(5130);
      const p = (0, l.withTranslations)((e => {
          let {
            openModal: n = !1,
            setOpenModal: a
          } = e;
          const [s, o] = (0, r.useState)(null), l = (0, r.useRef)(), c = (0, r.useRef)(), d = (0, r.useRef)(), [p] = (0, m.useMutation)(u.ContactUs), [f, h] = (0, r.useState)("");
          return n ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
              className: "bd9fd462473d65e8877e",
              onClick: () => a(!1)
            }), (0, t.jsxs)("div", {
              className: "f35f70180df47063a0b5",
              children: [(0, t.jsx)("button", {
                className: "e08d6e6928d1b9b75c6b",
                "aria-label": "Close Contact Us Modal Button",
                onClick: () => a(!1),
                type: "button"
              }), (0, t.jsxs)("div", {
                className: "ee528068e83ff0d87716",
                children: [(0, t.jsx)("h1", {
                  className: "bdc30d6b402baeead010",
                  children: "Contact Us"
                }), f || (0, t.jsxs)("form", {
                  onSubmit: e => (async e => {
                    e.preventDefault();
                    const n = {
                      recaptcha_token: s,
                      data: {
                        name: l.current.value,
                        email: c.current.value,
                        message: d.current.value
                      }
                    };
                    try {
                      await p({
                        variables: n
                      }), h("Your message has been received.")
                    } catch (e) {
                      h("Something went wrong. Please try again later.")
                    }
                  })(e),
                  className: "ab500f1c3a138fcd138f",
                  children: [f, (0, t.jsx)("input", {
                    type: "text",
                    id: "name",
                    name: "name",
                    placeholder: "Name",
                    ref: l,
                    required: !0
                  }), (0, t.jsx)("input", {
                    type: "email",
                    id: "email",
                    name: "email",
                    placeholder: "Email Address",
                    ref: c,
                    required: !0
                  }), (0, t.jsx)("textarea", {
                    id: "message",
                    name: "message",
                    placeholder: "Talk to Us",
                    ref: d,
                    required: !0
                  }), (0, t.jsx)(i.mP, {
                    onVerify: e => {
                      o(e)
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
        f = "feee4a61825bca411ac5",
        h = (0, l.withTranslations)((e => {
          let {
            t: n
          } = e;
          const {
            pathname: a
          } = (0, d.useLocation)(), i = (0, r.useRef)(), o = (0, d.useNavigate)(), [l, c] = (0, r.useState)(!1), [m] = (0, d.useSearchParams)(), u = m.get("q");
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("nav", {
              className: "e12575564fe9725b362a",
              children: [(0, t.jsx)(s.A, {
                to: ".",
                className: "/" === a ? f : "",
                children: n("Home")
              }), (0, t.jsx)(s.A, {
                to: "./openings",
                className: "/openings" === a ? f : "",
                children: n("Openings")
              }), (0, t.jsx)(s.A, {
                to: "#",
                onClick: () => c(!l),
                children: n("Contact Us")
              }), (0, t.jsx)("form", {
                onSubmit: e => (e => {
                  e.preventDefault();
                  const n = i.current.value ?? null,
                    a = "./openings" + (n ? `?q=${n}` : "");
                  document.activeElement.blur(), o(a)
                })(e),
                children: (0, t.jsx)("input", {
                  placeholder: "Search...",
                  ref: i,
                  defaultValue: u
                })
              })]
            }), (0, t.jsx)(p, {
              openModal: l,
              setOpenModal: c
            })]
          })
        })),
        v = "a082a5bca00c4d9981dc",
        g = () => (0, t.jsxs)("div", {
          className: "a2c4281c8f43d5c2c491",
          children: [(0, t.jsxs)("h2", {
            children: ["Accessibility Policy", (0, t.jsx)("br", {}), " ", "& Multi-Year Accessibility Plan for Rockstar Games Toronto ULC"]
          }), (0, t.jsxs)("p", {
            children: ["In 2005, the Ontario Government set the goal of a “barrier-free Ontario” for people with disabilities by creating the Accessibility for Ontarians with Disabilities Act, 2005 (“the Act” or “AODA”). Regulations were created which set out the steps that organizations, including", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Games Toronto ULC (“Rockstar Toronto”)."
            }), ", must take to meet this laudable goal. These Regulations cover accessibility standards in customer service, information and communications, employment, transportation and the built environment."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will or is in the process of creating internal policies, practices and procedures, which recognize the role", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will play in making Ontario more accessible."]
          }), (0, t.jsxs)("p", {
            children: ["This Accessibility Policy and Multi-Year Accessibility Plan outline the policies, procedures and actions that", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will put or has put in place to comply with the requirements of the Act and its Regulations"]
          }), (0, t.jsx)("h3", {
            children: "Statement of Commitment"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "is committed to improving accessibility for individuals with disabilities and treating all people in a way that allows them to maintain their dignity and independence.", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will continue to meet the needs of people with disabilities in a timely manner, and will do so by preventing and removing barriers to accessibility and meeting accessibility requirements under the Act and its Regulations."]
          }), (0, t.jsx)("h3", {
            children: "Barrier Assessment"
          }), (0, t.jsxs)("p", {
            children: ["In accordance with AODA and", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto’s"
            }), " ", "goal of providing an inclusive workplace, this Accessibility Policy and Multi-Year Accessibility Plan seeks to eliminate and prevent barriers to accessibility. Typical barriers experienced by individuals with disabilities include physical, communication and technology, attitudinal and systemic barriers."]
          }), (0, t.jsx)("h3", {
            children: "Accessible Customer Service"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "is committed to accessible customer service in keeping with the principles of dignity, independence, integration and equal opportunity."]
          }), (0, t.jsxs)("p", {
            children: ["Employees will be trained on", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto’s"
            }), " ", "Customer Service Standard Policy."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), " ", (0, t.jsx)("br", {}), "Effective", " ", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Accessible Emergency Information"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "is committed to providing its customers with publicly available emergency information, in an accessible way, upon request."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will also provide disabled employees with individualized emergency response information and create Individual Emergency Response Information Plans when necessary."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "Effective", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Training"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will provide training to employees relating to people with disabilities. Training will be provided in a way that best suits the duties of", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "employees being trained."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto Inc."
            }), " ", "will take the following steps to ensure employees and volunteers are provided with the training needed to meet Ontario’s accessible laws:"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will review current training materials to determine whether any existing materials can be built upon and used for AODA training;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will provide Customer Service Training for all employees who deal with members of the public and/or any other third parties;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
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
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will continue to provide training as required under AODA for all new employees and/or if there is a substantial change to", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto’s"
              }), " ", "Accessibility or other related policy."]
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "Effective", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Information And Communications"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "is committed to meeting the information and communication needs of people with disabilities."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all information publically available in Ontario is made accessible upon request by", " ", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2016"
            }), ":"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will consult with disabled customers to determine their specific needs;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests for accessible information as soon as practicable; and,"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will provide customers with information in an accessible format, upon request."]
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any new website and new web content, specific to Ontario, conform to WCAG 2.0, Level A by", " ", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2014"
            }), ":"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: ["any new", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "website applicable to Ontario will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, t.jsxs)("li", {
              children: ["any new", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "web content applicable to Ontario will be assessed and evaluated for accessibility conformance;"]
            }), (0, t.jsxs)("li", {
              children: ["if conformance with WCAG 2.0 Level A is an issue,", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will consult with its internal IT department regarding necessary changes to its new website and new web content so as to come into compliance;"]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will engage services of its internal IT department to implement improvements to its website and web content so as to meet the compliance standards."]
            }), " "]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any public website and web content specific to Ontario conform to WCAG 2.0, Level AA by", " ", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2021"
            }), ":"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto’s"
              }), " ", "Ontario web page will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, t.jsx)("li", {
              children: "public web content in Ontario will be assessed and evaluated for accessibility conformance;"
            }), (0, t.jsxs)("li", {
              children: ["if not in conformance with WCAG 2.0 Level A,", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto Inc."
              }), " ", "will consult with its internal IT department regarding necessary changes to bring to the website and web content into compliance;"]
            }), (0, t.jsx)("li", {
              children: "services of an external website consultant will be engaged to make the above improvements to the website and web content, if the internal IT department is unable to make the necessary changes; and,"
            }), (0, t.jsx)("li", {
              children: "necessary improvements to the website and content will be made to ensure compliance."
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2014"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Feedback"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make ensure existing feedback processes are accessible to people with disabilities upon request by", " ", (0, t.jsx)("span", {
              className: v,
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
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all publicly available information is made accessible upon request by", " ", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2016:"
            })]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will provide its customers and members of the public with information in an accessible format upon request."]
            }), (0, t.jsxs)("li", {
              children: [(0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests as soon as practicable."]
            })]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Employment"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "is committed to fair and accessible employment practices."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps by", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2016"
            }), " ", "to notify the public and staff that it will accommodate people with disabilities during the recruitment and assessment processes and when hired:"]
          }), (0, t.jsxs)("ul", {
            children: [(0, t.jsxs)("li", {
              children: ["include a statement in any job advertisements that", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities and will provide accommodations during the hiring process;"]
            }), (0, t.jsxs)("li", {
              children: ["if a job applicant requests accommodation,", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will consult with the individual and make adjustments that best suit his/her needs to the extent required by law;"]
            }), (0, t.jsxs)("li", {
              children: ["confirm, in any interview, that", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities;"]
            }), (0, t.jsxs)("li", {
              children: ["notify successful applicants of", " ", (0, t.jsx)("span", {
                className: v,
                children: "Rockstar Toronto’s"
              }), " ", "policies for accommodating employees with disabilities;"]
            }), (0, t.jsxs)("li", {
              children: ["include in the", " ", (0, t.jsx)("span", {
                className: v,
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
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to develop and put in place a process for designing individual accommodation plans and return-to-work policies for employees that have been absent due to a disability:"]
          }), (0, t.jsx)("ul", {
            children: (0, t.jsx)("li", {
              children: "review existing policies and procedures and if necessary, augment processes for people with disabilities on the development of accommodation plans and return to work processes."
            })
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to ensure the accessibility needs of employees with disabilities are taken into account if", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "uses a career development and redeployment processes:"]
          }), (0, t.jsx)("ul", {
            children: (0, t.jsx)("li", {
              children: "review existing policies and procedures and amend where necessary to ensure accessibility considerations."
            })
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to prevent and remove other accessibility barriers identified:"]
          }), (0, t.jsx)("ul", {
            children: (0, t.jsx)("li", {
              children: "assess, review, and alter (if required) policies and procedures to ensure compliance with the AODA."
            })
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Service Disruptions"
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "has put procedures in place to prevent service disruptions to its accessible parts of its public spaces."]
          }), (0, t.jsxs)("p", {
            children: ["In the event of a service disruption,", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will notify the public of the service disruption and alternatives available."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "Effective immediately and ongoing."]
          }), (0, t.jsx)("h3", {
            children: "Policy Review"
          }), (0, t.jsxs)("p", {
            children: ["The Multi-Year Accessibility Plan is a tool for", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "to communicate its accessibility initiatives internally and to the public.", " ", (0, t.jsx)("span", {
              className: v,
              children: "Rockstar Toronto"
            }), " ", "will review and update this Plan at least once every five (5) years. The first version of this Plan will be reviewed no later than", " ", (0, t.jsx)("span", {
              className: v,
              children: "January 1, 2019"
            }), "."]
          }), (0, t.jsxs)("p", {
            children: [(0, t.jsx)("span", {
              className: v,
              children: "Implementation Timeframe:"
            }), (0, t.jsx)("br", {}), " ", "By", (0, t.jsx)("span", {
              className: v,
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
      var k = a(3492);
      const b = {
          home: "c4b20405ad56a3b4dd00",
          offices: "df8abe33c6a249e3cb46",
          blurb: "f60af5cbf6af7455edea",
          viewOpeningsButtonContainer: "d3fede0908a77a291bfc",
          viewOpeningsButton: "d79b2040f206df1a46a0"
        },
        j = () => {
          const {
            data: e
          } = (0, m.useQuery)(k.HomeData);
          return e ? (0, t.jsxs)("div", {
            className: b.home,
            children: [(0, t.jsx)("div", {
              className: b.offices,
              children: e.jobsOffices.map((e => (0, t.jsxs)(s.A, {
                to: `./offices/${e.seo_url}`,
                className: b.office,
                children: [(0, t.jsx)("dt", {
                  children: e.name
                }), (0, t.jsx)("dd", {
                  children: e.location
                })]
              }, e.name)))
            }), (0, t.jsxs)("div", {
              className: b.blurb,
              children: [(0, t.jsx)("p", {
                children: "Want to be a part of a tight-knit team responsible for creating and publishing some of the most popular and critically acclaimed games in the world, including such videogame franchises as Grand Theft Auto, Max Payne and Red Dead?"
              }), (0, t.jsx)("p", {
                children: "At Rockstar Games, we focus intently on quality and content to proudly produce exactly the kind of games we would want to play ourselves."
              }), (0, t.jsx)("p", {
                children: "A career at Rockstar Games is about passion and commitment, to the projects and to each other, all the while working on some of the most creatively rewarding and challenging projects to be found in any entertainment medium with some of the most talented people in the industry."
              }), (0, t.jsx)("p", {
                children: "We offer successful candidates a highly competitive salary and compensation package, including a comprehensive benefits package for all eligible employees. Rockstar Games is an equal opportunity employer."
              }), (0, t.jsxs)("p", {
                children: ["Follow", " ", (0, t.jsx)("a", {
                  href: "https://twitter.com/RockstarCareers",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "@rockstarcareers"
                }), " ", "on Twitter."]
              })]
            }), (0, t.jsx)(s.A, {
              className: b.viewOpeningsButtonContainer,
              to: "./openings",
              children: (0, t.jsx)("button", {
                className: b.viewOpeningsButton,
                children: "View All Openings"
              })
            })]
          }) : null
        },
        x = e => {
          let {
            headType: n,
            positions: a,
            title: i,
            openingsLinkRelative: o = "./",
            positionLinkRelative: r = "./",
            officesLinkRelative: l = "../"
          } = e;
          return (0, t.jsxs)("div", {
            className: "d6a6d2483c7a19b86881",
            children: [(0, t.jsx)("h4", {
              children: (0, t.jsx)(s.A, {
                to: "department" === n ? `${o}?department=${encodeURIComponent(i)}` : `${l}offices/${a[0].company.seo_url}`,
                children: i
              })
            }), (0, t.jsx)("div", {
              className: "f0a715c25c7b91159874",
              children: a.map((e => {
                let {
                  id: n,
                  title: a
                } = e;
                return (0, t.jsx)(s.A, {
                  to: `${r}position/${n}`,
                  children: a
                }, n)
              }))
            })]
          })
        };
      var y = a(735),
        w = a.n(y);
      const N = e => {
          let {
            positions: n,
            key: a
          } = e;
          return w()(n).groupBy((e => e[a])).map(((e, n) => ({
            [a]: n,
            positions: e
          }))).value()
        },
        _ = e => {
          let {
            positions: n,
            key: a
          } = e;
          return w().orderBy(n, [a], ["asc"])
        };
      var S = a(2144);
      const C = {
        office: "fbfa556311cc0fcc0906",
        positionGroups: "a857fc1889ba5b594104"
      };
      (0, l.importAll)(a(5683));
      const T = () => {
        const {
          office_seo: e
        } = (0, d.useParams)(), {
          data: n
        } = (0, m.useQuery)(S.OfficeData, {
          variables: {
            companySlug: e
          }
        }), [i, s] = (0, r.useState)(null);
        return (0, r.useEffect)((() => {
          if (!n) return;
          const e = N({
              key: "department",
              positions: n.jobsPositionList
            }),
            a = _({
              key: "department",
              positions: e
            });
          s(a)
        }), [n]), i ? (0, t.jsxs)("div", {
          className: C.office,
          children: [(0, t.jsx)("div", {
            className: C.mapImg,
            style: {
              background: `url(${a(670)(`./${e}.jpg`)}) no-repeat center/contain`,
              "--aspect-ratio": 1920 / 867
            }
          }), (0, t.jsx)("div", {
            className: C.positionGroups,
            children: i.map((e => {
              let {
                department: n,
                positions: a
              } = e;
              return (0, t.jsx)(x, {
                positions: a,
                title: n,
                headType: "department",
                openingsLinkRelative: "../openings/",
                positionLinkRelative: "../openings/"
              }, n)
            }))
          })]
        }) : null
      };
      (0, l.importAll)(a(8415));
      const R = (0, s.withSimpleErrorBoundary)((e => {
        let {
          officeSeo: n
        } = e;
        return (0, t.jsx)("div", {
          style: {
            background: `url(${a(1597)(`./${n}.svg`)}) no-repeat center/contain`,
            "--aspect-ratio": 60.91 / 56.07
          }
        })
      }));
      var A = a(6434);
      const O = {
          openings: "cb2070ba798f70a24146",
          sort: "ea48bb4e8e134b65a96b",
          sortButtons: "e51b8f0742c0138ffeab",
          activeSort: "eb8cffa4fdd3ba4f582a",
          heirarchy: "af07421b41d05eb636c2",
          primaryGrid: "ea49c15802a4484e8380",
          primaryHeaderH: "b7866b1d6c0afbba8ab8",
          primaryIsCompany: "f18c31e32012b32cd0f9",
          searchHeader: "a9283744e85061b646c0",
          viewOpeningsButton: "f75b666913554bd8839f"
        },
        D = e => {
          let {
            positions: n,
            key: a
          } = e;
          return _({
            positions: N({
              positions: n,
              key: a
            }),
            key: a
          })
        },
        F = () => {
          const [e, n] = (0, r.useState)("companyName"), [a, i] = (0, r.useState)("department"), [o, l] = (0, r.useState)(null), [c, u] = (0, r.useState)(null), [p, f] = (0, r.useState)(null), [h, v] = (0, r.useState)(null), [g, k] = (0, r.useState)(!0), {
            refetch: b
          } = (0, m.useQuery)(A.OpeningsData, {
            skip: !0
          }), [j] = (0, d.useSearchParams)(), y = j.get("department"), w = j.get("q"), N = e => {
            n(e), i("companyName" === e ? "department" : "companyName")
          };
          return (0, r.useEffect)((() => {
            f({
              department: y ?? null,
              query: w ?? null
            })
          }), [y, w]), (0, r.useEffect)((() => {
            p && (u(null), v(null), k(!0), (async () => {
              try {
                const {
                  data: e
                } = await b(p);
                u(e.jobsPositionList ?? [])
              } catch (e) {
                v(String(e))
              }
            })(), k(!1))
          }), [p]), (0, r.useEffect)((() => {
            c && l((e => {
              let {
                positions: n,
                primary: a,
                secondary: i
              } = e;
              return (0, t.jsx)("div", {
                className: O.heirarchy,
                children: D({
                  key: a,
                  positions: n
                }).map((e => {
                  let {
                    [a]: n, positions: o
                  } = e;
                  return (0, t.jsxs)("div", {
                    className: O.primaryGrid,
                    children: [(0, t.jsx)("h3", {
                      className: [O.primaryHeaderH, "companyName" === a ? O.primaryIsCompany : ""].join(" "),
                      children: (0, t.jsxs)(s.A, {
                        to: "companyName" === a ? `../offices/${o[0].company.seo_url}` : `?department=${o[0].department}`,
                        children: ["companyName" === a ? (0, t.jsx)(R, {
                          officeSeo: o[0].company.seo_url
                        }) : "", n]
                      })
                    }), D({
                      key: i,
                      positions: o
                    }).map((e => {
                      let {
                        [i]: a, positions: s
                      } = e;
                      return (0, t.jsx)(x, {
                        positions: s,
                        title: a,
                        headType: i,
                        openingsLinkRelative: "",
                        positionLinkRelative: "./",
                        officesLinkRelative: "../"
                      }, `${n}-${a}`)
                    }))]
                  }, n)
                }))
              })
            })({
              positions: c,
              primary: e,
              secondary: a
            }))
          }), [c, e, a]), (0, t.jsxs)("div", {
            className: O.openings,
            children: [h || "", !h && g ? "Searching..." : "", h || g || !c || !y && !w ? "" : (0, t.jsxs)("p", {
              className: O.searchHeader,
              children: [`${c.length} positions found ${w?` matching "${w}"`:""}${y?` in the ${y} department`:""}.`, (0, t.jsx)(s.A, {
                to: "./",
                children: (0, t.jsx)("button", {
                  className: O.viewOpeningsButton,
                  children: "View All Openings"
                })
              })]
            }), c?.length ? (0, t.jsxs)("div", {
              className: O.sort,
              children: [(0, t.jsx)("span", {
                children: "Sort positions:"
              }), (0, t.jsxs)("div", {
                className: O.sortButtons,
                children: [(0, t.jsx)("button", {
                  className: "companyName" === e ? O.activeSort : "",
                  onClick: () => N("companyName"),
                  type: "button",
                  children: "By Location"
                }), (0, t.jsx)("button", {
                  className: "department" === e ? O.activeSort : "",
                  onClick: () => N("department"),
                  type: "button",
                  children: "By Department"
                })]
              })]
            }) : "", c?.length && o ? o : ""]
          })
        };
      var E = a(6741);
      const L = "ce5d984f9667741c4c32",
        P = "fea46db119d2e97b0b46",
        q = e => {
          let {
            position: n
          } = e;
          return (0, t.jsxs)("footer", {
            className: "cfd7f46eb3ca403b2b3b",
            children: [(0, t.jsx)(s.A, {
              to: n.apply_href,
              target: "_blank",
              className: "e17065c171512c1dafd3",
              children: "Apply now"
            }), (0, t.jsx)(s.A, {
              to: `../offices/${n.company.seo_url}`,
              className: P,
              children: `See all ${n.company.name} positions`
            }), (0, t.jsx)(s.A, {
              to: `../openings?department=${encodeURIComponent(n.department)}`,
              className: P,
              children: `See all ${n.department} positions`
            }), (0, t.jsx)(s.A, {
              to: "https://www.linkedin.com/company/rockstar-games",
              target: "_blank",
              className: "b64e6b84a06e62e54a4f",
              children: "FOLLOW ROCKSTAR GAMES CAREERS"
            })]
          })
        },
        I = (0, s.withSimpleErrorBoundary)((() => {
          const {
            position_id: e
          } = (0, d.useParams)(), {
            data: n
          } = (0, m.useQuery)(E.PositionData, {
            variables: {
              positionId: Number(e)
            }
          });
          if (!n) return (0, t.jsx)("div", {
            className: L,
            children: "Loading..."
          });
          const {
            jobsPosition: a
          } = n;
          return (0, t.jsxs)("div", {
            className: L,
            children: [(0, t.jsxs)("header", {
              className: "fb7497900f485b7f2086",
              children: [(0, t.jsx)(R, {
                officeSeo: a.company.seo_url
              }), (0, t.jsxs)("div", {
                className: "d40469300f9aab709d5e",
                children: [(0, t.jsxs)("div", {
                  className: "ae80613c743d77803e5c",
                  children: [(0, t.jsx)(s.A, {
                    to: `../offices/${a.company.seo_url}`,
                    children: a.company.name
                  }), " . ", (0, t.jsx)(s.A, {
                    to: `../openings?department=${encodeURIComponent(a.department)}`,
                    children: a.department
                  })]
                }), (0, t.jsx)("h2", {
                  children: a.title
                })]
              })]
            }), (0, t.jsx)("div", {
              className: "a8e5419aed657e6b6256",
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            }), (0, t.jsx)(q, {
              position: a
            })]
          })
        }), "That position was not found."),
        V = () => (0, t.jsxs)("svg", {
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
        $ = "fee3148629e4a9bd084a",
        H = "b09c4ae80bd36eb2c441",
        G = "a41fe732485a09be51ab",
        M = e => {
          let {
            label: n,
            clarification: a,
            name: i,
            placeholder: s,
            type: o = "text",
            required: r = !0,
            onChange: l
          } = e;
          return r ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("label", {
              htmlFor: n,
              className: $,
              children: [n, (0, t.jsx)("span", {
                className: "a15491b3c8142330c17a",
                children: "*"
              })]
            }), a && (0, t.jsx)("span", {
              className: H,
              children: a
            }), (0, t.jsx)("input", {
              type: o,
              name: i,
              placeholder: s,
              className: G,
              required: !0,
              onChange: l
            })]
          }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("label", {
              htmlFor: n,
              className: $,
              children: n
            }), a && (0, t.jsx)("span", {
              className: H,
              children: a
            }), (0, t.jsx)("input", {
              type: o,
              name: n,
              placeholder: s,
              className: G,
              onChange: l
            })]
          })
        };
      var B = a(6982);
      const U = e => {
          let {
            label: n,
            clarification: a,
            name: i,
            data: s,
            placeholder: o,
            required: l = !0,
            update: c
          } = e;
          const d = (0, r.useRef)(),
            [m, u] = (0, r.useState)("");
          return s ? (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("label", {
              htmlFor: i,
              className: "f5c85d286962da6fdd15",
              children: [n, l && (0, t.jsx)("span", {
                className: "da9cd3edc5a2fddefa4f",
                children: "*"
              })]
            }), a && (0, t.jsx)("span", {
              className: "bd054d54bd430c1bf9e6",
              children: a
            }), (0, t.jsx)(B.ZP, {
              className: "bfecebe5f04004c49b2b",
              isClearable: !0,
              isSearchable: !0,
              name: i,
              placeholder: o,
              options: s,
              ref: d,
              onChange: e => (e => {
                u(e || ""), c(e)
              })(e)
            }), l && (0, t.jsx)("input", {
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
              value: m,
              onFocus: () => {
                d.current && d.current.focus()
              },
              required: l
            })]
          }) : null
        },
        J = e => {
          let {
            data: n,
            update: a
          } = e;
          const [i, s] = (0, r.useState)(Array(n?.length).fill(!1)), [o, l] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            3 === i.filter((e => e)).length ? l(!0) : o && l(!1);
            const e = n?.custom_field_options?.filter(((e, n) => i[n])).map((e => {
              let {
                value: n
              } = e;
              return n
            }));
            a && a({
              selectedSkills: e
            })
          }), [i]);
          const c = n?.custom_field_options?.map(((e, a) => {
            let {
              label: r,
              value: l
            } = e;
            return (0, t.jsxs)("div", {
              className: "f419982fdd5039f80de1",
              children: [(0, t.jsx)("input", {
                type: "checkbox",
                name: n.name,
                value: l,
                defaultChecked: i[a],
                onClick: () => (e => {
                  if (i[e]) {
                    const n = [...i];
                    return n[e] = !1, void s([...n])
                  }
                  if (!i[e] && 3 === i.filter((e => e)).length) return;
                  const n = [...i];
                  n[e] = !0, s([...n])
                })(a),
                disabled: !i[a] && o
              }), (0, t.jsx)("label", {
                className: "b2950d17eaed43a8b7f2",
                htmlFor: r.toLowerCase(),
                children: r
              })]
            }, r.toLowerCase())
          }));
          return (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)("legend", {
              className: "a334a0b7778699e0fc53",
              children: ["Which option(s) best represents your strongest skillset? Choose up to 3", (0, t.jsx)("span", {
                className: "dcfafd97d95614518ef8",
                children: "*"
              })]
            }), (0, t.jsx)("div", {
              className: "d29e4424fa1bbceb2b53",
              children: c
            })]
          })
        },
        W = "a828213ca8d78518eb96",
        Z = e => {
          let {
            label: n,
            seasonsData: a,
            required: i = !0,
            updateSeason: s,
            updateYear: o
          } = e;
          const l = (0, r.useRef)(),
            c = (0, r.useRef)(),
            [d, m] = (0, r.useState)(""),
            [u, p] = (0, r.useState)(""),
            f = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
              const n = (new Date).getFullYear(),
                a = [];
              for (let i = n + e; i >= n - e; i -= 1) a.push({
                label: `${i}`,
                value: i
              });
              return a
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
              className: "bc7ee1b96cf660d8c238",
              children: [n, i && (0, t.jsx)("span", {
                className: "ea2f1b952d254615ee74",
                children: "*"
              })]
            }), (0, t.jsxs)("div", {
              className: "e0139f5ad8198c40ed53",
              children: [(0, t.jsx)(B.ZP, {
                className: W,
                isClearable: !0,
                isSearchable: !0,
                name: "anticipated_graduation_season",
                placeholder: "Select season",
                options: a,
                ref: l,
                onChange: e => (e => {
                  s(e), m(e ?? "")
                })(e)
              }), (0, t.jsx)(B.ZP, {
                className: W,
                isClearable: !0,
                isSearchable: !0,
                name: "anticipated_graduation_year",
                placeholder: "Select year",
                options: f,
                ref: c,
                onChange: e => (e => {
                  o(e), p(e ?? "")
                })(e)
              }), i && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: h,
                  onChange: () => null,
                  value: d,
                  onFocus: () => {
                    l.current && l.current.focus()
                  },
                  required: i
                }), (0, t.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: h,
                  onChange: () => null,
                  value: u,
                  onFocus: () => {
                    c.current && c.current.focus()
                  },
                  required: i
                })]
              })]
            })]
          })
        };
      var Y = a(5284);
      const Q = "c90a2471b2d08d28d174",
        z = () => (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)(V, {}), (0, t.jsxs)("div", {
            className: "c531f9581fb248c52d76",
            children: [(0, t.jsxs)("p", {
              className: "fd1c19854a1b7ea70bf7",
              children: ["Thank you for your interest in Rockstar Games. If you'd like us to stay in touch with you regarding future opportunities, please submit your information below. To view our current job openings, please", " ", (0, t.jsx)(s.A, {
                to: "../openings",
                className: Q,
                children: "visit our careers site"
              }), "."]
            }), (0, t.jsxs)("p", {
              className: "e25fe9ee1b69e16adbf1",
              children: [(0, t.jsx)("span", {
                className: "b5e808c4c275fa083850",
                children: "*"
              }), "indicates a required field"]
            })]
          })]
        }),
        K = () => (0, t.jsxs)("p", {
          className: "d955037116162c716986",
          children: ["For all information on how we use your personal data please see our", " ", (0, t.jsx)(s.A, {
            to: "https://www.rockstargames.com/careers-privacy",
            className: Q,
            children: "applicant privacy policy"
          }), "."]
        }),
        X = () => (0, t.jsxs)("span", {
          children: ["Thank you for your interest in Rockstar Games. Your information has submitted successfully. To view our current job openings, please", " ", (0, t.jsx)(s.A, {
            to: "../openings",
            className: Q,
            children: "visit our careers site"
          }), "."]
        }),
        ee = (0, m.withRockstarGraph)((() => {
          const [e, n] = (0, r.useState)(null), [a, s] = (0, r.useState)({}), [o, l] = (0, r.useState)(!1), [c, d] = (0, r.useState)(!1), [u, p] = (0, r.useState)(""), [f, h] = (0, r.useState)(!1), [v, g] = (0, r.useState)(!1), {
            data: k
          } = (0, m.useQuery)(Y.greenhouseData), [b] = (0, m.useMutation)(Y.AddProspect), j = i => {
            let {
              key: s,
              value: t
            } = i;
            const o = [...e?.custom_fields?.filter((e => e.id && e.id !== a[s]?.id)) ?? []];
            x(a[s]?.id, t), n({
              ...e,
              custom_fields: [...o, {
                id: a[s]?.id,
                value: t
              }]
            })
          }, x = (e, n) => {
            const i = a.university_sponsored_event?.id,
              s = a.university_sponsored_event?.custom_field_options.find((e => "Project Review" === e.label)).value;
            i && e === i && (s && n === s ? d(!0) : (d(!1), j({
              key: "project_review_game_name",
              value: void 0
            })))
          };
          (0, r.useEffect)((() => {
            if (!k) return;
            const {
              greenhouseApiCustomFields: e
            } = k;
            s({
              anticipated_graduation_season: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "anticipated_graduation_season" === n
              })),
              anticipated_graduation_year: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "anticipated_graduation_year" === n
              })),
              degree: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "degree__university_" === n
              })),
              discipline: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "current_major__university__candidate_1663010161.6894388" === n
              })),
              school_name: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "school_name" === n
              })),
              skills: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "skills" === n
              })),
              university_sponsored_event: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "university_sponsored_event" === n
              })),
              project_review_game_name: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "project_review_game_name" === n
              })),
              preferred_work_location: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "preferred_location__university_" === n
              })),
              attended_university_event: e.find((e => {
                let {
                  name_key: n
                } = e;
                return "attended_university_event___university_" === n
              }))
            })
          }), [k]), (0, r.useEffect)((() => {
            k && (o || j({
              key: "university_sponsored_event",
              value: void 0
            }))
          }), [o]);
          const y = (0, r.useCallback)((e => {
            p(e)
          }), []);
          return k || a ? v ? (0, t.jsx)(X, {}) : (0, t.jsxs)("form", {
            className: "e59e698571114c58efb8",
            onSubmit: n => (async n => {
              n.preventDefault();
              const a = {
                recaptcha_token: u,
                data: e
              };
              if (a.recaptcha_token) try {
                await b({
                  variables: a
                }), h((e => !e)), g(!0)
              } catch (e) {
                console.error(e)
              }
            })(n),
            children: [(0, t.jsx)(z, {}), (0, t.jsx)(M, {
              label: "First Name",
              placeholder: "Enter first name",
              name: "first_name",
              onChange: a => n({
                ...e,
                first_name: a.target.value
              })
            }), (0, t.jsx)(M, {
              label: "Last Name",
              placeholder: "Enter last name",
              name: "last_name",
              onChange: a => n({
                ...e,
                last_name: a.target.value
              })
            }), (0, t.jsx)(M, {
              label: "Email Address",
              placeholder: "Enter email address",
              name: "email",
              type: "email_addresses",
              onChange: a => n({
                ...e,
                email_addresses: [{
                  type: "personal",
                  value: a.target.value
                }]
              })
            }), (0, t.jsx)(U, {
              label: "Please indicate your preferred studio location.",
              clarification: "Note: Please only select locations where you currently have a legal right to work.",
              placeholder: "Select your preferred work location",
              name: "preferred_location__university_",
              data: a.preferred_work_location?.custom_field_options,
              update: e => j({
                key: "preferred_work_location",
                value: e ? e.value : void 0
              })
            }), (0, t.jsx)(U, {
              label: "What school do you currently attend?",
              placeholder: "Select your school",
              name: "school_name",
              data: a.school_name?.custom_field_options,
              update: a => a ? n({
                ...e,
                educations: [{
                  ...e?.educations?.[0] ?? {},
                  school_id: a.value
                }]
              }) : null
            }), (0, t.jsx)(M, {
              label: a.discipline?.description,
              placeholder: "Enter major/course subject",
              name: "discipline",
              onChange: e => j({
                key: "discipline",
                value: e.target.value
              })
            }), (0, t.jsx)(U, {
              label: a.degree?.description,
              placeholder: "Select your degree level",
              name: "degree",
              data: a.degree?.custom_field_options,
              update: e => j({
                key: "degree",
                value: e ? e.value : void 0
              })
            }), (0, t.jsx)(Z, {
              label: "When do you anticipate graduating?",
              seasonsData: a.anticipated_graduation_season?.custom_field_options,
              updateSeason: e => j({
                key: "anticipated_graduation_season",
                value: e ? e.value : void 0
              }),
              updateYear: e => j({
                key: "anticipated_graduation_year",
                value: e ? e.value : void 0
              })
            }), (0, t.jsx)(U, {
              label: "Have you recently attended a university-sponsored event with Rockstar Games?",
              placeholder: "Select yes or no",
              name: "attended_university_event",
              data: a.attended_university_event?.custom_field_options,
              update: e => {
                l(!!e && "Yes" === e.label), j({
                  key: "attended_university_event",
                  value: e ? e.value : void 0
                })
              }
            }), o && (0, t.jsx)(U, {
              label: "What event did you attend?",
              data: a.university_sponsored_event?.custom_field_options,
              name: "university_sponsored_event",
              placeholder: "Select a Rockstar event",
              update: e => j({
                key: "university_sponsored_event",
                value: e ? e.value : void 0
              })
            }), o && c && (0, t.jsx)(M, {
              label: "What is the game you are working on?",
              placeholder: "Enter game name",
              name: "project_review_game_name",
              onChange: e => j({
                key: "project_review_game_name",
                value: e ? e?.target?.value : void 0
              })
            }), (0, t.jsx)(J, {
              data: a.skills,
              update: e => {
                let {
                  selectedSkills: n
                } = e;
                return j({
                  key: "skills",
                  value: n
                })
              }
            }), (0, t.jsx)(M, {
              label: "Please submit a link to your website/portfolio.",
              placeholder: "Enter URL",
              name: "website_addresses",
              required: !1,
              type: "url",
              onChange: a => n({
                ...e,
                website_addresses: [{
                  type: "personal",
                  value: a.target.value
                }]
              })
            }), (0, t.jsx)(K, {}), (0, t.jsx)(i.mP, {
              onVerify: y,
              refreshReCaptcha: f
            }), (0, t.jsx)("input", {
              type: "submit",
              className: "e3b0872ac475e352fd57"
            })]
          }) : "Loading..."
        }), {
          env: "prod"
        }),
        ne = () => {
          const e = [{
            path: "/",
            element: (0, t.jsx)(j, {})
          }, {
            path: "/accessibility",
            element: (0, t.jsx)(g, {})
          }, {
            path: "/offices/:office_seo",
            element: (0, t.jsx)(T, {})
          }, {
            path: "/openings",
            element: (0, t.jsx)(F, {})
          }, {
            path: "/openings/position/:position_id",
            element: (0, t.jsx)(I, {})
          }, {
            path: "/register",
            element: (0, t.jsx)(ee, {})
          }];
          return (0, d.useRoutes)(e)
        },
        ae = () => (0, t.jsx)(i.pm, {
          reCaptchaKey: "6LcY_tohAAAAACJJTRGxlkVO89ud1jP0WbeHftvL",
          children: (0, t.jsx)("div", {
            className: "beba36ec69e024d112b8",
            children: (0, t.jsxs)("div", {
              className: "e0c63f1c13c0922fcf66",
              children: [(0, t.jsx)(c, {}), (0, t.jsx)(h, {}), (0, t.jsx)("div", {
                className: "e3e3144f8074bf13ff68",
                children: (0, t.jsx)(ne, {})
              }), (0, t.jsx)(o, {})]
            })
          })
        })
    },
    5130: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "mutation ContactUs($data: RockstarGames_Jobs_Form_ContactForm_i!, $recaptcha_token: String!) {\n  careersContactUs(data: $data, recaptcha_token: $recaptcha_token) {\n    sent\n  }\n}",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.ContactUs = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = i[n] || new Set,
          o = new Set,
          r = new Set;
        for (t.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var i = s(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "ContactUs")
    },
    3492: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query HomeData {\n    jobsOffices {\n        name\n        location\n        seo_url\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.HomeData = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = i[n] || new Set,
          o = new Set,
          r = new Set;
        for (t.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var i = s(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "HomeData")
    },
    2144: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query OfficeData($companySlug: String!) {\n    jobsOffices(company_slug: $companySlug) {\n        name\n        location\n        seo_url\n    }\n    jobsPositionList(company_slug: $companySlug) {\n        department\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.OfficeData = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = i[n] || new Set,
          o = new Set,
          r = new Set;
        for (t.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var i = s(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "OfficeData")
    },
    6434: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query OpeningsData($department: String, $query: String) {\n    jobsPositionList(department: $department, q: $query) {\n        company {\n            seo_url\n        }\n        companyName: company_name\n        department\n        department_slug\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.OpeningsData = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = i[n] || new Set,
          o = new Set,
          r = new Set;
        for (t.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var i = s(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "OpeningsData")
    },
    6741: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query PositionData($positionId: Float!) {\n    jobsPosition(id: $positionId) {\n        apply_href\n        company {\n            name\n            seo_url\n        }\n        department\n        description\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.PositionData = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = i[n] || new Set,
          o = new Set,
          r = new Set;
        for (t.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var i = s(e, n);
          i && a.definitions.push(i)
        })), a
      }(n, "PositionData")
    },
    5284: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && n.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query greenhouseData {\n    greenhouseApiCustomFields {\n        id\n        name\n        description\n        name_key\n        custom_field_options {\n            value: id\n            label: name\n        }\n    }\n}\n\nmutation AddProspect(\n    $data: RockstarGames_Jobs_GreenhouseResponseTypes_Prospect_i!\n    $recaptcha_token: String!\n) {\n    greenhouseApiAddProspect(data: $data, recaptcha_token: $recaptcha_token) {\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function s(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == n) return i
        }
      }

      function t(e, n) {
        var a = {
          kind: e.kind,
          definitions: [s(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = i[n] || new Set,
          o = new Set,
          r = new Set;
        for (t.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var i = s(e, n);
          i && a.definitions.push(i)
        })), a
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), i[e.name.value] = n
        }
      })), e.exports = n, e.exports.greenhouseData = t(n, "greenhouseData"), e.exports.AddProspect = t(n, "AddProspect")
    },
    8415: (e, n, a) => {
      var i = {
        "./rockstar-dundee.svg": 2331,
        "./rockstar-india.svg": 8879,
        "./rockstar-international.svg": 6623,
        "./rockstar-leeds.svg": 9004,
        "./rockstar-lincoln.svg": 450,
        "./rockstar-london.svg": 4056,
        "./rockstar-new-england.svg": 6018,
        "./rockstar-new-york.svg": 2372,
        "./rockstar-north.svg": 918,
        "./rockstar-outline-white.svg": 7597,
        "./rockstar-san-diego.svg": 1148,
        "./rockstar-toronto.svg": 6320,
        "./rockstar-yellow.svg": 1627,
        "components/OfficeLogo/img/rockstar-dundee.svg": 2331,
        "components/OfficeLogo/img/rockstar-india.svg": 8879,
        "components/OfficeLogo/img/rockstar-international.svg": 6623,
        "components/OfficeLogo/img/rockstar-leeds.svg": 9004,
        "components/OfficeLogo/img/rockstar-lincoln.svg": 450,
        "components/OfficeLogo/img/rockstar-london.svg": 4056,
        "components/OfficeLogo/img/rockstar-new-england.svg": 6018,
        "components/OfficeLogo/img/rockstar-new-york.svg": 2372,
        "components/OfficeLogo/img/rockstar-north.svg": 918,
        "components/OfficeLogo/img/rockstar-outline-white.svg": 7597,
        "components/OfficeLogo/img/rockstar-san-diego.svg": 1148,
        "components/OfficeLogo/img/rockstar-toronto.svg": 6320,
        "components/OfficeLogo/img/rockstar-yellow.svg": 1627
      };

      function s(e) {
        var n = t(e);
        return a(n)
      }

      function t(e) {
        if (!a.o(i, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = t, e.exports = s, s.id = 8415
    },
    1597: (e, n, a) => {
      var i = {
        "./rockstar-dundee.svg": 2331,
        "./rockstar-india.svg": 8879,
        "./rockstar-international.svg": 6623,
        "./rockstar-leeds.svg": 9004,
        "./rockstar-lincoln.svg": 450,
        "./rockstar-london.svg": 4056,
        "./rockstar-new-england.svg": 6018,
        "./rockstar-new-york.svg": 2372,
        "./rockstar-north.svg": 918,
        "./rockstar-outline-white.svg": 7597,
        "./rockstar-san-diego.svg": 1148,
        "./rockstar-toronto.svg": 6320,
        "./rockstar-yellow.svg": 1627
      };

      function s(e) {
        var n = t(e);
        return a(n)
      }

      function t(e) {
        if (!a.o(i, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = t, e.exports = s, s.id = 1597
    },
    5683: (e, n, a) => {
      var i = {
        "./rockstar-dundee.jpg": 8343,
        "./rockstar-india.jpg": 2027,
        "./rockstar-international.jpg": 6552,
        "./rockstar-leeds.jpg": 6033,
        "./rockstar-lincoln.jpg": 6261,
        "./rockstar-london.jpg": 2631,
        "./rockstar-new-england.jpg": 4598,
        "./rockstar-new-york.jpg": 9429,
        "./rockstar-north.jpg": 7953,
        "./rockstar-san-diego.jpg": 6566,
        "./rockstar-toronto.jpg": 112,
        "pages/OfficeIndex/img/rockstar-dundee.jpg": 8343,
        "pages/OfficeIndex/img/rockstar-india.jpg": 2027,
        "pages/OfficeIndex/img/rockstar-international.jpg": 6552,
        "pages/OfficeIndex/img/rockstar-leeds.jpg": 6033,
        "pages/OfficeIndex/img/rockstar-lincoln.jpg": 6261,
        "pages/OfficeIndex/img/rockstar-london.jpg": 2631,
        "pages/OfficeIndex/img/rockstar-new-england.jpg": 4598,
        "pages/OfficeIndex/img/rockstar-new-york.jpg": 9429,
        "pages/OfficeIndex/img/rockstar-north.jpg": 7953,
        "pages/OfficeIndex/img/rockstar-san-diego.jpg": 6566,
        "pages/OfficeIndex/img/rockstar-toronto.jpg": 112
      };

      function s(e) {
        var n = t(e);
        return a(n)
      }

      function t(e) {
        if (!a.o(i, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = t, e.exports = s, s.id = 5683
    },
    670: (e, n, a) => {
      var i = {
        "./rockstar-dundee.jpg": 8343,
        "./rockstar-india.jpg": 2027,
        "./rockstar-international.jpg": 6552,
        "./rockstar-leeds.jpg": 6033,
        "./rockstar-lincoln.jpg": 6261,
        "./rockstar-london.jpg": 2631,
        "./rockstar-new-england.jpg": 4598,
        "./rockstar-new-york.jpg": 9429,
        "./rockstar-north.jpg": 7953,
        "./rockstar-san-diego.jpg": 6566,
        "./rockstar-toronto.jpg": 112
      };

      function s(e) {
        var n = t(e);
        return a(n)
      }

      function t(e) {
        if (!a.o(i, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        return i[e]
      }
      s.keys = function() {
        return Object.keys(i)
      }, s.resolve = t, e.exports = s, s.id = 670
    },
    2331: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/e6432521ca423fd9a141.svg"
    },
    8879: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/93a2b588d3b38eb7e123.svg"
    },
    6623: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/880d9c746d9ff10e4304.svg"
    },
    9004: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/37cc40d4ef2d9b25a70b.svg"
    },
    450: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/1b8d16497a3105a5af67.svg"
    },
    4056: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/c26751a87817a13fd333.svg"
    },
    6018: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/f17a4f751a3f1cce36f8.svg"
    },
    2372: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/880d9c746d9ff10e4304.svg"
    },
    918: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/6599e50ff7d8673de657.svg"
    },
    7597: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/14c8563f8e71d467d28c.svg"
    },
    1148: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/f2ef344225a60474bb8a.svg"
    },
    6320: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/33aea96ec33078fb9b41.svg"
    },
    1627: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/b065bce3c3a592f16be6.svg"
    },
    8343: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/4298a90fc793951fc4df.jpg"
    },
    2027: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/e9aa978d8753bc57f05c.jpg"
    },
    6552: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/328ad7f285e11b29d6db.jpg"
    },
    6033: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/b2548299acd0f9ad3f7f.jpg"
    },
    6261: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/ed648b968f247f8e8d04.jpg"
    },
    2631: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/e0ca0e55780e400d6f44.jpg"
    },
    4598: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/e42a0b9bd401ad51a7aa.jpg"
    },
    9429: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/4415394cdbe9c03b6554.jpg"
    },
    7953: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/e57f0b93dcbf03df29da.jpg"
    },
    6566: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/bc80460ae45fbb891aa3.jpg"
    },
    112: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/e2ad5836764f14dc88fd.jpg"
    }
  }
]);