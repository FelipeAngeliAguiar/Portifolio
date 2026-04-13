import "./style.css";
import profileImg from "../../assets/profile1.png";
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import gmailIcon from "../../assets/google-brands.svg";
import profile2 from "../../assets/profile2.png";
import codeIcon from "../../assets/code.svg";
import cognitivaIcon from "../../assets/cognitiva.png";
import uniritterIcon from "../../assets/uniritter.png";
import ilacIcon from "../../assets/ilac.png";
import wizardIcon from "../../assets/wizard.png";
import bradescoIcon from "../../assets/bradesco.png";
import reactIcon from "../../assets/react.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import javascriptIcon from "../../assets/js.svg";
import pythonIcon from "../../assets/python.png";
import locationIcon from "../../assets/location.svg";
import clockIcon from "../../assets/time.svg";
import certificateIcon from "../../assets/certificate.svg";
import langIcon from "../../assets/language.svg";
import copyIcon from "../../assets/copy-solid.svg";
import fallgatterIcon from "../../assets/fallgatter.png";
import powerbiIcon from "../../assets/powerbi.png";
import powerappsIcon from "../../assets/powerapps.png";
import appsheetIcon from "../../assets/appsheet.png";
import { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { div } from "framer-motion/client";

function LanguageSwitcher() {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "pt"
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className="language-switcher">
      <button className="lang-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src={langIcon} alt="Language" />
        <span>{language === "pt" ? "PT-BR" : "ENG"}</span>
      </button>
      {isOpen && (
        <div className={`lang-dropdown ${isOpen ? "open" : ""}`}>
          <button onClick={() => toggleLanguage("pt")}>🇧🇷 PT-BR</button>
          <button onClick={() => toggleLanguage("en")}>🇺🇸 ENG</button>
        </div>
      )}
    </div>
  );
}

function EducationCard({ image, name, time, place, cert }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card-education card-effect"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <div className="education-info">
          <div>
            <img src={clockIcon} alt="" /> <h1>{time}</h1>
          </div>
          <div>
            <img src={locationIcon} alt="" /> <h1>{place}</h1>
          </div>
          <div>
            <img src={certificateIcon} alt="" /> <h1>{cert}</h1>
          </div>
        </div>
      ) : (
        <div className="education-default">
          <img src={image} alt={name} />
          <h1>{name}</h1>
        </div>
      )}
    </div>
  );
}

function Home() {
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "pt"
  );

  useEffect(() => {
    setLanguage(localStorage.getItem("lang") || "pt");
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal(".infos-effect", {
      duration: 2000,
      origin: "top",
      distance: "100px",
    });

    sr.reveal(".profile-effect", {
      duration: 2000,
      origin: "top",
      distance: "100px",
    });

    sr.reveal(".profile2-effect", {
      duration: 2000,
      origin: "left",
      distance: "100px",
    });

    sr.reveal(".about-me-effect", {
      duration: 2000,
      origin: "right",
      distance: "100px",
    });

    sr.reveal(".card-effect", {
      duration: 2000,
      origin: "bottom",
      distance: "100px",
    });

    sr.reveal(".project-effect", {
      duration: 2000,
      origin: "left",
      distance: "100px",
    });

    sr.reveal(".exp-effect", {
      duration: 2000,
      origin: "right",
      distance: "100px",
    });
  }, []);

  const [showEmail, setShowEmail] = useState(false);
  const emailRef = useRef(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("felipeangeliaguiar@gmail.com");
    alert(
      language === "pt"
        ? "Email copiado com sucesso!"
        : "Email copied successfully!"
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (emailRef.current && !emailRef.current.contains(event.target)) {
        setShowEmail(false);
      }
    }

    if (showEmail) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmail]);

  const [expandedCard, setExpandedCard] = useState(null);
  const cardsRef = useRef([]);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardsRef.current.every((ref) => ref && !ref.contains(event.target))) {
        setExpandedCard(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEmailClick = () => {
    if (window.innerWidth <= 1000) {
      navigator.clipboard.writeText("felipeangeliaguiar@gmail.com");

      alert(language === "pt" ? "Email copiado!" : "Email copied!");
    } else {
      setShowEmail(!showEmail);
    }
  };

  return (
    <div className="content">
      <LanguageSwitcher />
      <section className="home">
        <div className="home-div">
          <div className="infos infos-effect">
            <p>{language === "pt" ? "Olá, eu sou" : "Hello, I am"}</p>
            <span>Felipe Angeli</span>
            <h1>
              {language === "pt"
                ? "Engenheiro de Software"
                : "Software Engineer"}
            </h1>

            <div className="social">
              <h1>{language === "pt" ? "Me encontre em" : "Find me on"}</h1>
              <div className="buttons">
                <a
                  href="https://github.com/FelipeAngeliAguiar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/felipeangeliaguiar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <button onClick={handleEmailClick} className="email-button">
                  <img src={gmailIcon} alt="Gmail" />
                </button>
              </div>

              {showEmail && (
                <div className="email-popup" ref={emailRef}>
                  <span>felipeangeliaguiar@gmail.com</span>
                  <button onClick={copyEmail} className="copy-button">
                    <img src={copyIcon} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="profile profile-effect">
            <img src={profileImg} alt="Foto de perfil" />
          </div>
        </div>
      </section>
      <section className="about-me">
        <div className="about-me-div">
          <img src={profile2} className="profile-about-me profile2-effect" />
          <div className="about-me-infos about-me-effect">
            <div className="about-me-text">
              <h1>{language === "pt" ? "Sobre mim" : "About me"}</h1>
              <p>
                {language === "pt"
                  ? "Sou Felipe, um estudante de 19 anos apaixonado por tecnologia e programação. Tenho experiência prática em desenvolvimento de sistemas (Python, JavaScript, HTML) e automação de processos industriais com ferramentas Low-Code (Power Platform, AppSheet). Fluente em inglês avançado, busco sempre unir a inovação com a eficiência para resolver problemas reais."
                  : "I am Felipe, a 19-year-old student passionate about technology and programming. I have practical experience in systems development (Python, JavaScript, HTML) and industrial process automation with Low-Code tools (Power Platform, AppSheet). Fluent in advanced English, I always seek to combine innovation and efficiency to solve real-world problems."}
              </p>
            </div>

            <div className="skills">
              <h1>{language === "pt" ? "Habilidades" : "Skills"}</h1>
              <div className="skills-list">
                {[
                  { icon: javascriptIcon, name: "JavaScript" },
                  { icon: htmlIcon, name: "HTML" },
                  { icon: cssIcon, name: "CSS" },
                  { icon: reactIcon, name: "React" },
                  { icon: pythonIcon, name: "Python" },
                  { icon: powerappsIcon, name: "Power Apps" },
                  { icon: powerbiIcon, name: "Power BI" },
                  { icon: appsheetIcon, name: "AppSheet" },
                ].map((skill, index) => (
                  <div key={index} className="skills-card">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="projects-div">
          {[
            {
              h1: language === "pt" ? "Experiência" : "Experience",
              title: "Metalúrgica Fallgatter",
              summary:
                language === "pt"
                  ? "Estagiário de TI / ADM"
                  : "IT / Admin Intern",
              details:
                language === "pt"
                  ? [
                      "Transformação Digital e Inovação: Atuação na modernização do chão de fábrica, liderando a transição para operações paperless (sem papel), com foco na digitalização do setor de Solda.",
                      "Desenvolvimento e implementação de ecossistema de aplicativos móveis utilizando Microsoft Power Apps para controle de almoxarifado, gestão de matéria-prima e checklists.",
                      "Desenvolvimento de sistema de gestão de produção via Google AppSheet, otimizando o fluxo de peças (MES) e substituindo planilhas manuais.",
                      "Criação de dashboards gerenciais avançados no Power BI para métricas em tempo real e acompanhamento de melhorias.",
                      "Suporte na utilização do ERP SAP e aplicação de metodologias de manufatura para ganho de eficiência operacional.",
                    ]
                  : [
                      "Digital Transformation & Innovation: Involved in the modernization of the shop floor, leading the transition to paperless operations, focusing on the Welding department.",
                      "Developed mobile applications using Microsoft Power Apps for warehouse control, raw material management, and operational checklists.",
                      "Developed a production management system via Google AppSheet (MES), optimizing parts flow and replacing manual spreadsheets.",
                      "Created advanced management dashboards in Power BI providing real-time metrics and tracking continuous improvement.",
                      "Supported the use of SAP ERP and applied manufacturing methodologies to improve operational efficiency.",
                    ],
              link: "https://www.linkedin.com/in/felipeangeliaguiar/",
              linkText: language === "pt" ? "Ver no LinkedIn" : "View on LinkedIn",
              icon: fallgatterIcon,
            },
            {
              h1: language === "pt" ? "Experiência" : "Experience",
              title: "Cognitiva Brasil",
              summary:
                language === "pt"
                  ? "Engenheiro de Software Júnior"
                  : "Junior Software Engineer",
              details:
                language === "pt"
                  ? [
                      "Atuação no ciclo completo de desenvolvimento de software, com foco principal em Backend e entrega de soluções escaláveis.",
                      "Utilização de Python para construção de APIs e lógicas de negócio, integradas a interfaces em JavaScript, HTML e CSS.",
                      "Colaboração ativa em projetos ágeis, garantindo a entrega de funcionalidades dentro dos prazos.",
                    ]
                  : [
                      "Worked on the full software development lifecycle, focusing primarily on Backend and scalable solutions.",
                      "Used Python to build APIs and business logic, integrated with interfaces in JavaScript, HTML, and CSS.",
                      "Actively collaborated in agile projects, ensuring the delivery of features within established deadlines.",
                    ],
              link: "https://www.linkedin.com/company/cognitiva-brasil/",
              linkText:
                language === "pt" ? "Ver no LinkedIn" : "View on LinkedIn",
              icon: cognitivaIcon,
            },
            {
              h1: language === "pt" ? "Projetos" : "Projects",
              title: "GaneshIA",
              summary:
                language === "pt"
                  ? "Um software de automação de compras e vendas no mercado de ações, baseado em IA."
                  : "AI-powered stock trading automation software.",
              details:
                language === "pt"
                  ? [
                      "Desenvolvido com Python, integrando a biblioteca MetaTrader5 para execução de ordens no mercado em tempo real.",
                      "Implementação de lógica de tomada de decisão baseada em ChatGPT para interpretar sinais e recomendações de mercado.",
                      "Uso de análise técnica com indicadores como RSI, MACD e médias móveis para definir pontos de entrada e saída.",
                      "Backtesting de estratégias com histórico de dados para validação de performance.",
                    ]
                  : [
                      "Built using Python, integrating MetaTrader5 for real-time order execution.",
                      "Decision-making logic powered by ChatGPT for interpreting market signals and recommendations.",
                      "Technical analysis using indicators such as RSI, MACD, and moving averages.",
                      "Strategy backtesting with historical data for performance validation.",
                    ],
              link: "https://github.com/FelipeAngeliAguiar/GaneshIA",
              linkText: language === "pt" ? "Ver no GitHub" : "View on GitHub",
              icon: codeIcon,
            },
          ].map((proj, index) => {
            const isExpanded = expandedCard === index;
            const isCompressed =
              expandedCard !== null && expandedCard !== index;

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`card ${isExpanded ? "expanded" : ""} ${
                  isCompressed ? "compressed" : ""
                } ${
                  proj.title === "GaneshIA" ? "project-effect" : "exp-effect"
                }`}
                onClick={() => toggleExpand(index)}
              >
                <div className="card-header">
                  {!isCompressed && <h1>{proj.h1}</h1>}
                  <img src={proj.icon} alt="" />
                  <h2>{proj.title}</h2>
                </div>

                {!isCompressed && !isExpanded && <p>{proj.summary}</p>}

                {isExpanded && (
                  <div className="card-details scrollable">
                    <ul>
                      {proj.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                      <li>
                        <h3>
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {proj.linkText}
                          </a>
                        </h3>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="education">
        <div className="education-div profile2-effect">
          <span>{language === "pt" ? "Educação" : "Education"}</span>
        </div>
        <div className="table-education">
          <div className="table-row">
            <EducationCard
              image={uniritterIcon}
              name="Uniritter"
              time={language === "pt" ? "2024 - Cursando" : "2024 - Ongoing"}
              place="Gravataí - Brasil"
              cert={
                language === "pt"
                  ? "Bacharelado Ciência da Computação"
                  : "Bachelor's in Computer Science"
              }
            />
            <EducationCard
              image={ilacIcon}
              name="ILAC"
              time="2024"
              place="Toronto - Canadá"
              cert={language === "pt" ? "Inglês Avançado" : "Advanced English"}
            />
          </div>
          <div className="table-row">
            <EducationCard
              image={bradescoIcon}
              name="Fundação Bradesco"
              time="2009 - 2023"
              place="Gravataí - Brasil"
              cert={
                language === "pt"
                  ? "Ensino Médio Completo"
                  : "High School Diploma"
              }
            />
            <EducationCard
              image={wizardIcon}
              name="Wizard by Pearson"
              time="2017 - 2023"
              place="Gravataí - Brasil"
              cert={
                language === "pt"
                  ? "Inglês Intermediário"
                  : "Intermediate English"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;