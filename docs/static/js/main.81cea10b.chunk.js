(this["webpackJsonplandingpage-react-template"] =
  this["webpackJsonplandingpage-react-template"] || []).push([
  [0],
  {
    14: function (e, a, s) {},
    19: function (e, a, s) {},
    20: function (e, a, s) {
      "use strict";
      s.r(a);
      var t = s(1),
        c = s.n(t),
        i = s(6),
        l = s.n(i),
        o = (s(14), s(3)),
        n = s(0),
        r = function (e) {
          return Object(n.jsx)("nav", {
            id: "menu",
            className: "navbar navbar-default navbar-fixed-top",
            children: Object(n.jsxs)("div", {
              className: "container",
              children: [
                Object(n.jsxs)("div", {
                  className: "navbar-header",
                  children: [
                    Object(n.jsxs)("button", {
                      type: "button",
                      className: "navbar-toggle collapsed",
                      "data-toggle": "collapse",
                      "data-target": "#bs-example-navbar-collapse-1",
                      children: [
                        " ",
                        Object(n.jsx)("span", {
                          className: "sr-only",
                          children: "Toggle navigation",
                        }),
                        " ",
                        Object(n.jsx)("span", { className: "icon-bar" }),
                        " ",
                        Object(n.jsx)("span", { className: "icon-bar" }),
                        " ",
                        Object(n.jsx)("span", { className: "icon-bar" }),
                        " ",
                      ],
                    }),
                    Object(n.jsxs)("a", {
                      className: "navbar-brand page-scroll",
                      href: "#page-top",
                      children: [
                        Object(n.jsx)("img", {
                          src: "img/soplica/soplica_logo.jpg",
                          className: "img-responsive",
                          alt: "",
                        }),
                        " ",
                      ],
                    }),
                    " ",
                  ],
                }),
                Object(n.jsx)("div", {
                  className: "collapse navbar-collapse",
                  id: "bs-example-navbar-collapse-1",
                  children: Object(n.jsxs)("ul", {
                    className: "nav navbar-nav navbar-right",
                    children: [
                      Object(n.jsx)("li", {
                        children: Object(n.jsx)("a", {
                          href: "#page-top",
                          className: "page-scroll",
                          children: "Nuestro Vodka",
                        }),
                      }),
                      Object(n.jsx)("li", {
                        children: Object(n.jsx)("a", {
                          href: "#about",
                          className: "page-scroll",
                          children: "Historia",
                        }),
                      }),
                      Object(n.jsx)("li", {
                        children: Object(n.jsx)("a", {
                          href: "#portfolio",
                          className: "page-scroll",
                          children: "Sabores",
                        }),
                      }),
                      Object(n.jsx)("li", {
                        children: Object(n.jsx)("a", {
                          href: "#features",
                          className: "page-scroll",
                          children: "Cocteles",
                        }),
                      }),
                      Object(n.jsx)("li", {
                        children: Object(n.jsx)("a", {
                          href: "#testimonials",
                          className: "page-scroll",
                          children: "Equipo",
                        }),
                      }),
                      Object(n.jsx)("li", {
                        children: Object(n.jsx)("a", {
                          href: "#contact",
                          className: "page-scroll",
                          children: "Contacto",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        d = function (e) {
          return Object(n.jsx)("header", {
            id: "header",
            children: Object(n.jsx)("div", {
              className: "intro",
              children: Object(n.jsx)("div", {
                className: "overlay",
                children: Object(n.jsx)("div", {
                  className: "container",
                  children: Object(n.jsx)("div", {
                    className: "row",
                    children: Object(n.jsxs)("div", {
                      className: "col-md-8 col-md-offset-2 intro-text",
                      children: [
                        Object(n.jsxs)("h1", {
                          children: [
                            e.data ? e.data.title : "Loading",
                            Object(n.jsx)("span", {}),
                          ],
                        }),
                        Object(n.jsx)("p", {
                          children: e.data ? e.data.paragraph : "Loading",
                        }),
                        Object(n.jsx)("a", {
                          href: "#portfolio",
                          className: "btn btn-custom btn-lg page-scroll",
                          children: "Nuestros sabores",
                        }),
                        " ",
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        m = function (e) {
          return Object(n.jsx)("div", {
            id: "features",
            className: "text-center",
            children: Object(n.jsxs)("div", {
              className: "container",
              children: [
                Object(n.jsxs)("div", {
                  className: "col-md-8 col-md-offset-2 section-title",
                  children: [
                    Object(n.jsx)("h2", { children: "Cocteles" }),
                    Object(n.jsx)("p", {
                      children: "\xbfC\xf3mo disfrutarlos?",
                    }),
                  ],
                }),
                Object(n.jsx)("div", {
                  id: "row",
                  children: e.data
                    ? e.data.map(function (e, a) {
                        return Object(n.jsx)(
                          "div",
                          {
                            className: "col-md-3 col-sm-6 team",
                            children: Object(n.jsxs)("div", {
                              className: "thumbnail",
                              children: [
                                " ",
                                Object(n.jsx)("img", {
                                  src: e.img,
                                  alt: "...",
                                  className: "team-img",
                                }),
                                Object(n.jsxs)("div", {
                                  className: "caption",
                                  children: [
                                    Object(n.jsx)("h4", { children: e.name }),
                                    Object(n.jsx)("p", { children: e.job }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          "".concat(e.name, "-").concat(a)
                        );
                      })
                    : "loading",
                }),
              ],
            }),
          });
        },
        j = function (e) {
          return Object(n.jsx)("div", {
            id: "about",
            children: Object(n.jsx)("div", {
              className: "container",
              children: Object(n.jsxs)("div", {
                className: "row",
                children: [
                  Object(n.jsx)("div", {
                    className: "col-md-10 col-md-offset-1 section-title",
                    children: Object(n.jsx)("h2", {
                      children: "Nuestra historia",
                    }),
                  }),
                  Object(n.jsxs)("div", {
                    className: "col-xs-12 col-md-6",
                    children: [
                      " ",
                      Object(n.jsx)("img", {
                        src: "img/soplica/logo_soplica.png",
                        className: "img-responsive",
                        alt: "",
                      }),
                      " ",
                    ],
                  }),
                  Object(n.jsx)("div", {
                    className: "col-xs-12 col-md-6",
                    children: Object(n.jsxs)("div", {
                      className: "about-text",
                      children: [
                        Object(n.jsx)("h2", { children: "1891" }),
                        Object(n.jsx)("p", {
                          children: e.data ? e.data.paragraph : "loading...",
                        }),
                        Object(n.jsx)("div", { className: "list-style" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        b = function (e) {
          var a = e.title,
            s = e.largeImage,
            t = e.smallImage;
          return Object(n.jsx)("div", {
            className: "portfolio-item",
            children: Object(n.jsxs)("div", {
              className: "hover-bg",
              children: [
                " ",
                Object(n.jsxs)("a", {
                  href: s,
                  title: a,
                  "data-lightbox-gallery": "gallery1",
                  children: [
                    Object(n.jsx)("div", {
                      className: "hover-text",
                      children: Object(n.jsx)("h4", { children: a }),
                    }),
                    Object(n.jsx)("img", {
                      src: t,
                      className: "img-responsive",
                      alt: a,
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
          });
        },
        p = function (e) {
          return Object(n.jsx)("div", {
            id: "portfolio",
            className: "text-center",
            children: Object(n.jsxs)("div", {
              className: "container",
              children: [
                Object(n.jsxs)("div", {
                  className: "section-title",
                  children: [
                    Object(n.jsx)("h2", { children: "Sabores" }),
                    Object(n.jsx)("p", {
                      children:
                        "Nuestros vodkas con los toques m\xe1s naturales",
                    }),
                  ],
                }),
                Object(n.jsx)("div", {
                  className: "row",
                  children: Object(n.jsx)("div", {
                    className: "portfolio-items",
                    children: e.data
                      ? e.data.map(function (e, a) {
                          return Object(n.jsx)(
                            "div",
                            {
                              className: "col-sm-6 col-md-4 col-lg-4",
                              children: Object(n.jsx)(b, {
                                title: e.title,
                                largeImage: e.largeImage,
                                smallImage: e.smallImage,
                              }),
                            },
                            "".concat(e.title, "-").concat(a)
                          );
                        })
                      : "Loading...",
                  }),
                }),
              ],
            }),
          });
        },
        u = function (e) {
          return Object(n.jsx)("div", {
            id: "testimonials",
            children: Object(n.jsxs)("div", {
              className: "container",
              children: [
                Object(n.jsx)("div", {
                  className: "section-title text-center",
                  children: Object(n.jsx)("h2", { children: "Nuestro equipo" }),
                }),
                Object(n.jsx)("div", {
                  className: "row",
                  children: e.data
                    ? e.data.map(function (e, a) {
                        return Object(n.jsx)(
                          "div",
                          {
                            className: "col-md-4",
                            children: Object(n.jsxs)("div", {
                              className: "testimonial",
                              children: [
                                Object(n.jsxs)("div", {
                                  className: "testimonial-image",
                                  children: [
                                    " ",
                                    Object(n.jsx)("img", {
                                      src: e.img,
                                      alt: "",
                                    }),
                                    " ",
                                  ],
                                }),
                                Object(n.jsxs)("div", {
                                  className: "testimonial-content",
                                  children: [
                                    Object(n.jsxs)("p", {
                                      children: ['"', e.text, '"'],
                                    }),
                                    Object(n.jsxs)("div", {
                                      className: "testimonial-meta",
                                      children: [" - ", e.name, " "],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          "".concat(e.name, "-").concat(a)
                        );
                      })
                    : "loading",
                }),
              ],
            }),
          });
        },
        g = s(2),
        h = s(4),
        x = s(7),
        O = s.n(x),
        f = { name: "", email: "", message: "" },
        v = function (e) {
          var a = Object(t.useState)(f),
            s = Object(o.a)(a, 2),
            c = s[0],
            i = c.name,
            l = c.email,
            r = c.message,
            d = s[1],
            m = function (e) {
              var a = e.target,
                s = a.name,
                t = a.value;
              d(function (e) {
                return Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  Object(g.a)({}, s, t)
                );
              });
            };
          return Object(n.jsxs)("div", {
            children: [
              Object(n.jsx)("div", {
                id: "contact",
                children: Object(n.jsxs)("div", {
                  className: "container",
                  children: [
                    Object(n.jsx)("div", {
                      className: "col-md-8",
                      children: Object(n.jsxs)("div", {
                        className: "row",
                        children: [
                          Object(n.jsxs)("div", {
                            className: "section-title",
                            children: [
                              Object(n.jsx)("h2", { children: "Contacto" }),
                              Object(n.jsx)("p", {
                                children:
                                  "Por favor rellene el formulario y le contactaremos tan pronto nos sea posible",
                              }),
                            ],
                          }),
                          Object(n.jsxs)("form", {
                            name: "sentMessage",
                            validate: !0,
                            onSubmit: function (e) {
                              e.preventDefault(),
                                console.log(i, l, r),
                                O.a
                                  .sendForm(
                                    "YOUR_SERVICE_ID",
                                    "YOUR_TEMPLATE_ID",
                                    e.target,
                                    "YOUR_USER_ID"
                                  )
                                  .then(
                                    function (e) {
                                      console.log(e.text),
                                        d(Object(h.a)({}, f));
                                    },
                                    function (e) {
                                      console.log(e.text);
                                    }
                                  );
                            },
                            children: [
                              Object(n.jsxs)("div", {
                                className: "row",
                                children: [
                                  Object(n.jsx)("div", {
                                    className: "col-md-6",
                                    children: Object(n.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(n.jsx)("input", {
                                          type: "text",
                                          id: "name",
                                          name: "name",
                                          className: "form-control",
                                          placeholder: "Name",
                                          required: !0,
                                          onChange: m,
                                        }),
                                        Object(n.jsx)("p", {
                                          className: "help-block text-danger",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(n.jsx)("div", {
                                    className: "col-md-6",
                                    children: Object(n.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        Object(n.jsx)("input", {
                                          type: "email",
                                          id: "email",
                                          name: "email",
                                          className: "form-control",
                                          placeholder: "Email",
                                          required: !0,
                                          onChange: m,
                                        }),
                                        Object(n.jsx)("p", {
                                          className: "help-block text-danger",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(n.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  Object(n.jsx)("textarea", {
                                    name: "message",
                                    id: "message",
                                    className: "form-control",
                                    rows: "4",
                                    placeholder: "Message",
                                    required: !0,
                                    onChange: m,
                                  }),
                                  Object(n.jsx)("p", {
                                    className: "help-block text-danger",
                                  }),
                                ],
                              }),
                              Object(n.jsx)("div", { id: "success" }),
                              Object(n.jsx)("button", {
                                type: "submit",
                                className: "btn btn-custom btn-lg",
                                children: "Enviar mensaje",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsxs)("div", {
                      className: "col-md-3 col-md-offset-1 contact-info",
                      children: [
                        Object(n.jsxs)("div", {
                          className: "contact-item",
                          children: [
                            Object(n.jsx)("h3", {
                              children: "Informacion de contacto",
                            }),
                            Object(n.jsxs)("p", {
                              children: [
                                Object(n.jsxs)("span", {
                                  children: [
                                    Object(n.jsx)("i", {
                                      className: "fa fa-map-marker",
                                    }),
                                    " Direccion",
                                  ],
                                }),
                                e.data ? e.data.address : "loading",
                              ],
                            }),
                          ],
                        }),
                        Object(n.jsx)("div", {
                          className: "contact-item",
                          children: Object(n.jsxs)("p", {
                            children: [
                              Object(n.jsxs)("span", {
                                children: [
                                  Object(n.jsx)("i", {
                                    className: "fa fa-phone",
                                  }),
                                  " Telefono",
                                ],
                              }),
                              " ",
                              e.data ? e.data.phone : "loading",
                            ],
                          }),
                        }),
                        Object(n.jsx)("div", {
                          className: "contact-item",
                          children: Object(n.jsxs)("p", {
                            children: [
                              Object(n.jsxs)("span", {
                                children: [
                                  Object(n.jsx)("i", {
                                    className: "fa fa-envelope-o",
                                  }),
                                  " Email",
                                ],
                              }),
                              " ",
                              e.data ? e.data.email : "loading",
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(n.jsx)("div", {
                      className: "col-md-12",
                      children: Object(n.jsx)("div", {
                        className: "row",
                        children: Object(n.jsx)("div", {
                          className: "social",
                          children: Object(n.jsxs)("ul", {
                            children: [
                              Object(n.jsx)("li", {
                                children: Object(n.jsx)("a", {
                                  href: e.data ? e.data.facebook : "/",
                                  children: Object(n.jsx)("i", {
                                    className: "fa fa-facebook",
                                  }),
                                }),
                              }),
                              Object(n.jsx)("li", {
                                children: Object(n.jsx)("a", {
                                  href: e.data ? e.data.twitter : "/",
                                  children: Object(n.jsx)("i", {
                                    className: "fa fa-twitter",
                                  }),
                                }),
                              }),
                              Object(n.jsx)("li", {
                                children: Object(n.jsx)("a", {
                                  href: e.data ? e.data.youtube : "/",
                                  children: Object(n.jsx)("i", {
                                    className: "fa fa-youtube",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              Object(n.jsx)("div", {
                id: "footer",
                children: Object(n.jsx)("div", {
                  className: "container text-center",
                  children: Object(n.jsxs)("p", {
                    children: [
                      "\xa9 Soplica recomienda un uso responsable",
                      " ",
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        N = s(8),
        w = s(9),
        L = s.n(w),
        I =
          (s(19),
          new L.a('a[href*="#"]', { speed: 1e3, speedAsDuration: !0 }),
          function () {
            var e = Object(t.useState)({}),
              a = Object(o.a)(e, 2),
              s = a[0],
              c = a[1];
            return (
              Object(t.useEffect)(function () {
                c(N);
              }, []),
              Object(n.jsxs)("div", {
                children: [
                  Object(n.jsx)(r, {}),
                  Object(n.jsx)(d, { data: s.Header }),
                  Object(n.jsx)(j, { data: s.About }),
                  Object(n.jsx)(p, { data: s.Gallery }),
                  Object(n.jsx)(m, { data: s.Team }),
                  Object(n.jsx)(u, { data: s.Testimonials }),
                  Object(n.jsx)(v, { data: s.Contact }),
                ],
              })
            );
          });
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(
        Object(n.jsx)(c.a.StrictMode, { children: Object(n.jsx)(I, {}) }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    8: function (e) {
      e.exports = JSON.parse(
        '{"Header":{"title":"Vodka polaco","paragraph":"Cada momento tiene un sabor diferente"},"About":{"paragraph":"Nuestro vodka polaco est\xe1 compuesto de ingredientes naturales, provienen directamente de los mejores huertos polacos, madurados al sol y recogidos cuando se encuentran en su perfecto estado para transformarlo en la siguiente fase de la producci\xf3n.","Why":["Lorem ipsum dolor","Tempor incididunt","Lorem ipsum dolor","Incididunt ut labore"],"Why2":["Aliquip ex ea commodo","Lorem ipsum dolor","Exercitation ullamco","Lorem ipsum dolor"]},"Gallery":[{"title":"Sabor Frambuesa","largeImage":"img/soplica/botella_frambuesa.jpg","smallImage":"img/soplica/botella_frambuesa.jpg"},{"title":"Sabor Cereza","largeImage":"img/soplica/botella_cereza.jpg","smallImage":"img/soplica/botella_cereza.jpg"},{"title":"Sabor Avellana","largeImage":"img/soplica/botella_avellana.jpg","smallImage":"img/soplica/botella_avellana.jpg"},{"title":"Sabor Albaricoque","largeImage":"img/soplica/botella_albaricoque.jpg","smallImage":"img/soplica/botella_albaricoque.jpg"},{"title":"Sabor Grosella","largeImage":"img/soplica/botella_grosella.jpg","smallImage":"img/soplica/botella_grosella.jpg"}],"Services":[{"icon":"fa fa-wordpress","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cart-arrow-down","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cloud-download","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-language","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-plane","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-pie-chart","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."}],"Testimonials":[{"img":"img/team/01.jpeg","text":"Director de Finanzas","name":"Manuel Garc\xeda"},{"img":"img/team/02.jpeg","text":"Director de Finanzas y Marketing","name":"Yago Maril"},{"img":"img/team/04.jpeg","text":"Directora de Marketing","name":"Tatiana Herrera"},{"img":"img/team/05.jpeg","text":"Directora de Log\xedstica","name":"Laura Caturla"},{"img":"img/team/06.jpeg","text":"Directora Legal","name":"Sara Carrasco"}],"Team":[{"img":"img/cocteles/coc1.jpg","name":"Cereza mid","job":""},{"img":"img/cocteles/coc2.jpg","name":"Soplica framb","job":""},{"img":"img/cocteles/coc3.jpg","name":"Albaricoque fusion","job":""},{"img":"img/cocteles/coc4.jpg","name":"Grosella chill","job":""}],"Contact":{"address":"Miraflores 50, Santiago, Chile ","phone":"+56 2 64690861","email":"info@soplicachile.com","facebook":"https://www.facebook.com/soplica.es/","twitter":"twitter.com","youtube":"youtube.com"},"Features":[{"icon":"fa fa-comments-o","title":"TATI","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-bullhorn","title":"Tati linda","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-group","title":"Tati triste","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."},{"icon":"fa fa-magic","title":"Tati preocupada","text":"Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."}]}'
      );
    },
  },
  [[20, 1, 2]],
]);
//# sourceMappingURL=main.81cea10b.chunk.js.map
