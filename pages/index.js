import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import Testimonial from "../components/slider/Testimonial";
import ModalVideo from "react-modal-video";
import Team from "../components/slider/Team";
import Offer from "../components/slider/Offer";

const HomePage1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const [pricing, setPricing] = useState(1);

  const handlePricing = (index) => {
    setPricing(index); // remove the curly braces
  };
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <Head>
        <title>WYZO</title>
      </Head>

      <Layout>
        <section className="section banner-6">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-6 d-none d-xl-block">
                <div className="box-banner-6">
                  <div className="img-testimonials-1 shape-2">
                    <div className="card-testimonial-list">
                      <div className="d-flex align-items-center">
                        <div className="box-author mb-0">
                          <Link href="#">
                            <img
                              src="assets/imgs/page/homepage1/SZ3.png"
                              alt="iori"
                            />
                          </Link>
                        </div>
                        <div
                          style={{
                            width: "270px",

                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="author-info">
                            <Link href="#">
                              <span className="font-md-bold color-brand-1 author-name">
                                Субхон Зухуров
                              </span>
                            </Link>
                          </div>
                          <div className="rating text-end">
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                          </div>
                          <div>
                            <p
                              className="color-grey-500"
                              style={{ fontSize: "13.5px" }}
                            >
                              Wyzo - идеальный сервис для бизнеса:гибкий,
                              удобный, с вниманием к деталям.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-testimonials-2 shape-1">
                    {/* <img
                      src="assets/imgs/page/homepage6/testimonial2.png"
                      alt="iori"
                    /> */}
                    <div className="card-testimonial-list">
                      <div className="d-flex align-items-center ">
                        <div className="box-author mb-0">
                          <Link href="#">
                            <img
                              src="assets/imgs/page/homepage1/Said2.jpg"
                              alt="iori"
                            />
                          </Link>
                        </div>
                        <div
                          style={{
                            width: "310px",
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                          }}
                        >
                          <div className="author-info">
                            <Link href="#">
                              <span className="font-md-bold color-brand-1 author-name">
                                Саидахтам Исмоилов
                              </span>
                            </Link>
                          </div>
                          <div className="rating text-end">
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                          </div>
                          <div>
                            <p
                              style={{ fontSize: "13.5px" }}
                              className="color-grey-500"
                            >
                              С помощью WYZO создали идеальный сайт для нашего
                              проекта ZEKAMED: превосходный опыт и визуальное
                              представление.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <img
                    className="img-main"
                    src="assets/imgs/page/homepage1/rasul3.png"
                    alt="iori"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="box-banner-right-home6">
                  <h1 className="color-brand-1">
                    Начните свой онлайн-бизнес сегодня
                  </h1>
                  <div className="row">
                    <div className="col-lg-10">
                      <p className="font-md color-grey-500 mt:50 " style={{marginTop:"40px"}}>
                        Элегантно структурируйте решение для электронной
                        коммерции, которое будет соответствовать вашему бизнесу
                        и расширяться вместе с вашим рынком.
                      </p>
                    </div>
                  </div>

                  {/* <div className="box-button mt-20">
                    <Link className="btn-app mb-15 hover-up" href="#">
                      <img
                        src="assets/imgs/template/appstore-btn.png"
                        alt="iori"
                      />
                    </Link>
                    <Link className="btn-app mb-15 hover-up" href="#">
                      <img
                        src="assets/imgs/template/google-play-btn.png"
                        alt="iori"
                      />
                    </Link>
                    <Link
                      className="btn btn-default mb-15 pl-10 font-sm-bold hover-up"
                      href="#"
                    >
                      Learn More
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <section className="section">
          <div className="container">
            <div className="banner-1">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h1 className="color-brand-1 mb-20">
                    Начните свой онлайн-бизнес
                    <span className="line-under">
                      <span> сегодня. </span>
                    </span>{" "}
                  </h1>
                  <div className="row">
                    <div className="col-lg-9">
                      <p className="font-md color-grey-500 mb-30">
                        Элегантно структурируйте решение для электронной
                        коммерции, которое будет соответствовать вашему бизнесу
                        и расширяться вместе с вашим рынком.
                      </p>
                    </div>
                  </div>
                  <div className="box-button mt-30">
                    <Link className="btn btn-brand-1 hover-up" href="#">
                      Начните сейчас
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <object
                    data="assets/imgs/page/homepage1/hero-banner.svg"
                    type="image/svg+xml"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="section">
          <div className="box-radius-bottom">
            <div className="container">
              <div className="text-center">
                <h3 className="color-brand-1 mb-15">
                  Присоединяйтесь к нашей платформе и позвольте профессионалам
                  выполнять вашу работу
                </h3>
              </div>
              {/* <div className="mt-30">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-8">
                    <div className="swiper-wrapper">
                      <Brand />
                    </div>
                    <div className="swiper-pagination swiper-pagination-group-8" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="section mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="color-brand-1 mb-20" id="offer">
                  Что мы предлагаем
                </h2>
                <p className="font-lg color-gray-500">
                  Мы используем новейшие технологии, включая решения
                  искусственного <br className="d-none d-lg-block" />{" "}
                  интеллекта, которые помогают предприятиям со статистикой и
                  точным <br className="d-none d-lg-block" />
                  анализом данных для лучшего управления бизнесом.
                </p>
              </div>
            </div>
            <div className="mt-50">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                  <Offer />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section mt-100">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20" id="offer">
                  Что мы предлагаем
                </h2>
                <p className="font-lg color-gray-500">
                  Мы используем новейшие технологии, включая решения
                  искусственного интеллекта, которые помогают предприятиям со
                  статистикой и точным анализом данных для лучшего управления
                  бизнесом.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start"></div>
            </div>
            <div className="row mt-50">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img src="assets/imgs/page/homepage1/n2.png" alt="iori" />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      Надежные
                      <br /> исследования
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      Наш ИИ тщательно анализирует контент и поведение клиентов,
                      чтобы оптимизировать ваш бизнес для обеспечения наилучшего
                      обслуживания.
                    </p>
                    <div className="box-button-offer">
                      <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                        Узнать больше
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage1/cross2.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      Управление <br /> временем
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      Предоставьте нашему ИИ информацию о вашем бизнесе, и он
                      сделает все необходимое для ведения вашего бизнеса.Начните
                      свой онлайн-бизнес.
                    </p>
                    <div className="box-button-offer"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img src="assets/imgs/page/homepage1/n3.png" alt="iori" />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      Простая <br />
                      эффективность
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      Увеличивайте продажи с помощью автоматизации продаж на
                      социальных платформах и стратегий, основанных на
                      искусственном интеллекте.
                    </p>
                    <div className="box-button-offer"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage1/cross4.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                    <p className="font-md color-grey-500 mb-15">
                      Your site is not complete with only landings. Get
                      essential inner pages using our ready demos.
                    </p>
                    <div className="box-button-offer">
                      <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                        Learn More
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage1/cross5.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                    <p className="font-md color-grey-500 mb-15">
                      Your site is not complete with only landings. Get
                      essential inner pages using our ready demos.
                    </p>
                    <div className="box-button-offer">
                      <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                        Learn More
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <img
                      src="assets/imgs/page/homepage1/cross6.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">Cross-Platform</h4>
                    <p className="font-md color-grey-500 mb-15">
                      Your site is not complete with only landings. Get
                      essential inner pages using our ready demos.
                    </p>
                    <div className="box-button-offer">
                      <a className="btn btn-default font-sm-bold pl-0 color-brand-1">
                        Learn More
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section mt-50 pt-50 pb-90">
          <div className="container">
            <div className="bg-brand-1 box-cover-video">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <img
                    className="d-block"
                    src="assets/imgs/page/homepage1/img-video.png"
                    alt="iori"
                  />
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="box-info-video">
                    {/* <span className="btn btn-tag">WYZO</span> */}
                    <h3 className="color-brand-2 mt-10 mb-15">
                      Управляйте своим онлайн-бизнесом теперь с помощью ИИ
                    </h3>
                    <p className="font-md color-white">
                      WYZO - позволяет вам сосредоточиться на выполнении заказов
                      и развитии бизнеса, одновременно заботясь обо всех
                      технических потребностях, необходимых для лучшего
                      обслуживания ваших клиентов. Теперь, благодаря
                      возможностям искусственного интеллекта, вы можете вести
                      свой бизнес абсолютно без помощи рук.
                    </p>
                    {/* <div className="box-button-video">
                      <a
                        className="btn btn-play font-sm-bold popup-youtube hover-up"
                        onClick={() => setOpen(true)}
                      >
                        Проиграть видео
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="sVPYIRF9RCQ"
              onClose={() => setOpen(false)}
            />
          </div>
        </section>
        <section className="section mt-50 bg-grey-80 bg-plan pt-110 pb-110">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12 col-md-12">
                <h2
                  className="color-brand-1 mb-20"
                  id="PricingPlan"
                  style={{ textAlign: "center" }}
                >
                  Планы, которые лучше всего соответствуют требованиям вашего
                  бизнеса
                </h2>
                <p
                  className="font-lg color-gray-500"
                  style={{ textAlign: "center" }}
                >
                  Мы тщательно разработали готовые к установке пакеты для вашего
                  бизнеса. <br className="d-none d-lg-block" /> Вы можете
                  добавить другие опции поверх пакета, соответствующие вашим
                  идеям.
                </p>
              </div>

              <ul className="tabs-plan change-price-plan" role="tablist">
                <li>
                  {" "}
                  <a
                    style={{ marginRight: "7px", cursor: "pointer" }}
                    className={pricing === 1 ? "active" : ""}
                    onClick={() => handlePricing(1)}
                  >
                    Ежемесячно
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    style={{ cursor: "pointer" }}
                    className={pricing === 2 ? "active" : ""}
                    onClick={() => handlePricing(2)}
                  >
                    Ежегодно
                  </a>
                </li>
              </ul>
            </div>
            <div className="row mt-50">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="card-plan hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan">
                      <img
                        src="assets/imgs/page/homepage1/free.svg"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Стартовый</h4>
                      <p className="font-md color-grey-400">
                        Все, что вам нужно для начала вашего нового <br />
                        онлайн-бизнеса
                      </p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">
                      ${pricing == 1 ? "34" : "300"}
                    </span>
                    <span className="font-md color-grey-500">/ месяц</span>
                    <br />
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>SEO оптимизированная быстрая витрина</b>
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Оформление заказа на одной странице
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Неограниченное хранение продуктов</b>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Отчеты о продажах и посетителях
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Цифровые продукты
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Продавать в физическом магазине
                        {/* <span className="pl-30">для хранения</span> */}
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Список желаний
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Расширенный поиск товаров
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        СМС-уведомления
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Почтовые уведомления
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Уведомления в приложении
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Социальный вход
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Предварительно настроенные результаты <br />
                        <span className="pl-30">поиска</span>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Управление запасами
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Мультиязычный</b>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Мультивалютность</b>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Начните сейчас
                      <svg
                        className="w-6 h-6 icon-16 ml-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="card-plan hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan bg-1">
                      <img
                        src="assets/imgs/page/homepage1/standard.svg"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Безлимитный</h4>
                      <p className="font-md color-grey-400">
                        Автоматизируйте свой бизнес с помощью готовых
                        <br /> инструмент
                      </p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">
                      ${pricing == 1 ? "79" : "700"}
                    </span>
                    <span className="font-md color-grey-500">
                      / месяц
                      <br />
                    </span>
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>SEO оптимизированная быстрая витрина</b>
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Оформление заказа на одной странице
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Неограниченное хранение продуктов</b>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Отчеты о продажах и посетителях
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Цифровые продукты
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Продавать в физическом магазине
                        {/* <span className="pl-30">для хранения</span> */}
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Список желаний
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Расширенный поиск товаров
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        СМС-уведомления
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Почтовые уведомления
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Уведомления в приложении
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Социальный вход
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Предварительно настроенные результаты <br />
                        <span className="pl-30">поиска</span>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Управление запасами
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Мультиязычный</b>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Мультивалютность</b>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Начните сейчас
                      <svg
                        className="w-6 h-6 icon-16 ml-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="card-plan hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan bg-3">
                      <img
                        src="assets/imgs/page/homepage2/creation.png"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Авангард</h4>
                      <p className="font-md color-grey-400">
                        Улучшите свой бизнес с помощью искусственного
                        <br /> интеллекта
                      </p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">
                      ${pricing == 1 ? "***" : "***"}
                    </span>
                    <span className="font-md color-grey-500">/ месяц</span>
                    <br />
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>SEO оптимизированная быстрая витрина</b>
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Оформление заказа на одной странице
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Неограниченное хранение продуктов</b>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Отчеты о продажах и посетителях
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Цифровые продукты
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Продавать в физическом магазине
                        {/* <span className="pl-30">для хранения</span> */}
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Список желаний
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Расширенный поиск товаров
                      </li>

                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        СМС-уведомления
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Почтовые уведомления
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Уведомления в приложении
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Социальный вход
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Предварительно настроенные результаты <br />
                        <span className="pl-30">поиска</span>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Управление запасами
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Мультиязычный</b>
                      </li>
                      <li>
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <b>Мультивалютность</b>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Вскоре
                      <svg
                        className="w-6 h-6 icon-16 ml-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-100 box-testimonial-2">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-4 text-start pt-50">
                <div className="row">
                  <div className="col-md-9">
                    <img
                      className="mb-30"
                      src="/assets/imgs/page/homepage2/customer.png"
                      alt="iori"
                    />
                  </div>
                </div>
                <h2 className="color-brand-1 mb-20">
                  Что говорят наши клиенты
                </h2>
                <p className="font-lg color-gray-500">
                  Послушайте мнение наших пользователей, которые сэкономили
                  тысячи долларов на стартапах.
                </p>
                <div className="mt-20">
                  {/* <Link className="btn btn-default font-sm-bold pl-0" href="#">View All
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link> */}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-30 mt-50">
                      <div className="card-testimonial-grid">
                        <div className="box-author mb-10">
                          <Link href="#">
                            <img
                              src="/assets/imgs/page/homepage1/author.png"
                              alt="iori"
                            />
                          </Link>
                          <div className="author-info">
                            <Link href="#">
                              <span className="font-md-bold color-brand-1 author-name">
                                Андрей Иванов
                              </span>
                            </Link>
                            <span className="font-xs color-grey-500 department"></span>
                          </div>
                        </div>
                        <p className="font-md color-grey-500">
                          Запустить свой онлайн-бизнес стало гораздо проще
                          благодаря этой платформе. Решение для электронной
                          коммерции, предложенное здесь, отлично подходит для
                          моих потребностей. Рекомендую!
                        </p>
                        <div className="card-bottom-info">
                          <span className="font-xs color-grey-500 date-post">
                            10 января 2024
                          </span>
                          <div className="rating text-end">
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-30 testimonial-warning">
                      <div className="card-testimonial-grid">
                        <div className="box-author mb-10">
                          <Link href="#">
                            <img
                              src="/assets/imgs/page/homepage2/person1.jpg"
                              alt="iori"
                            />
                          </Link>
                          <div className="author-info">
                            <Link href="#">
                              <span className="font-md-bold color-brand-1 author-name">
                                Николай Сидоров
                              </span>
                            </Link>
                            <span className="font-xs color-grey-500 department"></span>
                          </div>
                        </div>
                        <p className="font-md color-grey-500">
                          Сотрудничество с этой платформой помогло мне
                          значительно упростить процесс запуска онлайн-бизнеса.
                          Их решение для электронной коммерции превзошло мои
                          ожидания. Спасибо!
                        </p>
                        <div className="card-bottom-info">
                          <span className="font-xs color-grey-500 date-post">
                            1 декабря 2023
                          </span>
                          <div className="rating text-end">
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="mb-30">
                      <div className="card-testimonial-grid">
                        <div className="box-author mb-10">
                          <Link href="#">
                            <img
                              src="/assets/imgs/page/homepage2/author3.png"
                              alt="iori"
                            />
                          </Link>
                          <div className="author-info">
                            <Link href="#">
                              <span className="font-md-bold color-brand-1 author-name">
                                Дэвид Уильямс
                              </span>
                            </Link>
                            <span className="font-xs color-grey-500 department"></span>
                          </div>
                        </div>
                        <p className="font-md color-grey-500">
                          Эта платформа действительно помогла мне воплотить мои
                          бизнес-идеи в жизнь. Решение для электронной
                          коммерции, предоставленное ими, оказалось очень
                          эффективным и гибким. Очень доволен результатами!
                        </p>
                        <div className="card-bottom-info">
                          <span className="font-xs color-grey-500 date-post">
                            29 декабря 2023
                          </span>
                          <div className="rating text-end">
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-30">
                      <div className="card-testimonial-grid">
                        <div className="box-author mb-10">
                          <Link href="#">
                            <img
                              // style={{ height: "400px" }}
                              src="/assets/imgs/page/homepage2/person40.jpg"
                              alt="iori"
                            />
                          </Link>
                          <div className="author-info">
                            <Link href="#">
                              <span className="font-md-bold color-brand-1 author-name">
                                Михаил Васильев
                              </span>
                            </Link>
                            <span className="font-xs color-grey-500 department"></span>
                          </div>
                        </div>
                        <p className="font-md color-grey-500">
                          Присоединившись к этой платформе, я получила
                          возможность структурировать свой онлайн-бизнес так,
                          как мне удобно, и доверить выполнение работы опытным
                          профессионалам. Это дало моему бизнесу заметный толчок
                          в развитии. Благодарю!
                        </p>
                        <div className="card-bottom-info">
                          <span className="font-xs color-grey-500 date-post">
                            29 ноября 2023
                          </span>
                          <div className="rating text-end">
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                            <img
                              src="/assets/imgs/template/icons/star.svg"
                              alt="iori"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom" />
        </section>

        <section className="section pt-80 mb-30">
          <div className="container">
            <div className="text-center">
              <h2 className="color-brand-1 mb-20" id="FAQ">
                Часто задаваемые вопросы
              </h2>
              <p className="font-lg color-gray-500">
                <b>Как выбрать подходящий тариф?</b>
                <br className="d-none d-lg-block" /> Оцените свои потребности и
                выберите тариф,
                <br className="d-none d-lg-block" /> соответствующий вашим
                требованиям.{" "}
              </p>
            </div>
            <div className="row mt-50 mb-50">
              <div className="col-xl-2 col-lg-2" />
              <div className="col-xl-8 col-lg-8 position-relative">
                <div className="box-author-1">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <filter id="shadow">
                      <feDropShadow
                        dx="2"
                        dy="2"
                        stdDeviation="20"
                        floodColor="green"
                      />
                    </filter>
                    <image
                      href="assets/imgs/page/homepage6/autho.png"
                      height="150"
                      width="150"
                      style={{ filter: "url(#shadow)" }}
                    />
                  </svg>
                </div>
                <div className="box-author-2">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <filter
                      id="shadow2"
                      width="1000px"
                      height="562px"
                      x="-50%"
                      y="-300%"
                    >
                      <feDropShadow
                        dx="4"
                        dy="4"
                        stdDeviation="12"
                        floodColor="red"
                      />
                    </filter>
                    <image
                      href="assets/imgs/page/homepage6/aut.png"
                      x="0"
                      y="20"
                      height="70"
                      width="260"
                      style={{ filter: "url(#shadow2)" }}
                    />
                  </svg>
                </div>
                <div className="box-author-3">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <filter
                      id="shadow3"
                      width="1000px"
                      height="562px"
                      x="-50%"
                      y="-300%"
                    >
                      <feDropShadow
                        dx="4"
                        dy="4"
                        stdDeviation="12"
                        floodColor="yellow"
                      />
                    </filter>
                    <image
                      href="assets/imgs/page/homepage6/autho2.png"
                      x="0"
                      y="20"
                      height="75"
                      width="260"
                      style={{ filter: "url(#shadow3)" }}
                    />
                  </svg>
                  {/* <img
                    src="assets/imgs/page/homepage6/author3.png"
                    alt="iori"
                  /> */}
                </div>
                <Accordion />
              </div>
            </div>
          </div>
          <div className="border-bottom" />
        </section>

        {/* <section className="section pt-80 mb-30 bg-faqs">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20" id="FAQ">
                  Часто задаваемые вопросы
                </h2>
                <p className="font-lg color-gray-500">
                  {" "}
                  Как выбрать подходящий тариф?
                  <br className="d-none d-lg-block" /> Оцените свои потребности
                  и выберите тариф, соответствующий вашим требованиям.{" "}
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <a className="btn btn-default font-sm-bold pl-0">
                  Связаться с нами
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="row mt-50 mb-100">
              <div className="col-xl-3 col-lg-4">
                <ul className="list-faqs nav nav-tabs" role="tablist">
                  <li>
                    <a
                      className={activeIndex === 1 ? "active" : ""}
                      onClick={() => handleOnClick(1)}
                    >
                      <span>Общая поддержка </span>
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeIndex === 2 ? "active" : ""}
                      onClick={() => handleOnClick(2)}
                    >
                      <span>Заказать / Покупка</span>
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeIndex === 3 ? "active" : ""}
                      onClick={() => handleOnClick(3)}
                    >
                      <span>Скачать/Установить</span>
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeIndex === 4 ? "active" : ""}
                      onClick={() => handleOnClick(4)}
                    >
                      <span>Технологии</span>
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeIndex === 5 ? "active" : ""}
                      onClick={() => handleOnClick(5)}
                    >
                      <span>Ваш аккаунт</span>
                      <svg
                        className="w-6 h-6 icon-16 ml-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className="mt-80 text-start mb-40">
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Связаться с нами
                  </Link>
                  <a className="btn btn-default font-sm-bold hover-up" href="#">
                    Центр поддержки
                    <svg
                      className="w-6 h-6 icon-16 ml-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="tab-content tab-content-slider">
                  <div
                    className={
                      activeIndex === 1
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <Accordion />
                  </div>
                  <div
                    className={
                      activeIndex === 2
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <Accordion />
                  </div>
                  <div
                    className={
                      activeIndex === 3
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <Accordion />
                  </div>
                  <div
                    className={
                      activeIndex === 4
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <Accordion />
                  </div>
                  <div
                    className={
                      activeIndex === 5
                        ? "tab-pane fade active show"
                        : "tab-pane fade"
                    }
                  >
                    <Accordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom" />
        </section> */}

        <section className="section mt-50 mb-30">
          <div className="container">
            <div className="text-center mb-70">
              <h2 className="color-brand-1 mb-20">
                Как <span className="color-red-200">WYZO</span> раскроет ваш
                бизнес-потенциал
                <br className="d-none d-xl-block" />
              </h2>
            </div>
            <div className="row mt-50 mb-100">
              <div className="col-xl-7 col-lg-6">
                <div className="box-images-project">
                  <div className="box-images mt-50">
                    {" "}
                    <img
                      className="img-main-2"
                      src="assets/imgs/page/homepage1/project1.png"
                      alt="iori"
                    />
                    <div className="image-2 shape-3">
                      {" "}
                      <img
                        src="assets/imgs/page/homepage1/finger.png"
                        alt="iori"
                      />
                    </div>
                    <div className="image-3 shape-1">
                      {" "}
                      <img
                        src="assets/imgs/page/homepage1/circle.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                {" "}
                {/* <span className="btn btn-tag">Бизнес</span> */}
                <h3 className="color-brand-1 mt-10 mb-15">
                  Создать свой онлайн-бизнес, не беспок оясь о технической
                  части.
                </h3>
                <p className="font-md color-grey-400"></p>
                <div className="mt-20">
                  <ul className="list-ticks">
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Редактировать контент
                      <br />
                      <span className="ml-30"> стало проще.</span>
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Контролируйте свой бизнес
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Система, которая растет
                      <br />
                      <span className="ml-30"> вместе с вашим бизнесом.</span>
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Улучшите свой бизнес.
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Встроенные помощники
                      <br />
                      <span className="ml-30">на базе ИИ.</span>
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Легко работать.
                    </li>
                  </ul>
                </div>
                <div className="mt-50 text-start">
                  {" "}
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Начать
                  </Link>
                </div>
              </div>
            </div>
            <div className="row mb-100 mt-50 project-revert">
              <div className="col-xl-5 col-lg-6">
                {" "}
                {/* <span className="btn btn-tag">Бизнес</span> */}
                <h3 className="color-brand-1 mt-10 mb-15">
                  Управление запасами и создание контента стало проще
                </h3>
                <p className="font-md color-grey-400">
                  Дайте нашему ИИ несколько описаний, и мы автоматически
                  создадим для вас статьи в блоге, описания продуктов и многое
                  другое всего за несколько секунд.
                </p>
                <div className="mt-20">
                  <ul className="list-ticks">
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Широкие возможности настройки архитектуры программного
                      обеспечения.
                    </li>

                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Аналитика на основе искусственного интеллекта.
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Клиентский опыт, основанный на искусственном интеллекте.
                    </li>
                    <li>
                      <svg
                        className="w-6 h-6 icon-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Выполнение заказов на основе искусственного интеллекта.
                    </li>
                  </ul>
                </div>
                <div className="mt-50 text-start">
                  {" "}
                  <Link className="btn btn-brand-1 hover-up" href="#">
                    Начать
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="box-images-project">
                  <div className="box-images mt-50">
                    {" "}
                    <img
                      className="img-main-2"
                      src="assets/imgs/page/homepage1/project2.png"
                      alt="iori"
                    />
                    <div className="image-2 shape-3">
                      {" "}
                      <img
                        src="assets/imgs/page/homepage1/Union.png"
                        alt="iori"
                      />
                    </div>
                    <div className="image-3 shape-1">
                      {" "}
                      <img
                        src="assets/imgs/page/homepage1/eye.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom" />
        </section>

        {/* <section className="section mt-50 bg-plant">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20">
                  Что говорят наши клиенты
                </h2>
                <p className="font-lg color-gray-500">
                  Как выбрать подходящий тариф? Оцените свои потребности и
                  выберите тариф, соответствующий вашим требованиям.{" "}
                  <br className="d-none d-lg-block" /> Если нужна помощь,
                  обратитесь к нашим специалистам.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <a className="btn btn-default font-sm-bold pl-0">
                  Посмотреть все
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-50">
              <div className="box-swiper">
                <div className="swiper-container swiper-group-3">
                  <Testimonial />
                  <div className="swiper-pagination swiper-pagination-2 swiper-pagination-group-3" />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="section mt-50">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20" id="blog">
                  Из нашего блога
                </h2>
                <p className="font-lg color-gray-500">
                  Добро пожаловать в наш мир!{" "}
                  <br className="d-none d-lg-block" /> Наша миссия - делать вашу
                  жизнь легче, предоставляя инновационные решения.{" "}
                  <br className="d-none d-lg-block" />
                  Узнайте больше о нас и том, как мы можем сделать ваш опыт
                  неповторимым.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <a className="btn btn-default font-sm-bold pl-0">
                  Посмотреть все
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="row mt-70">
              <div className="col-lg-4 col-md-6">
                <div className="card-blog-grid hover-up">
                  <div className="card-image">
                    <Link href="blog-detail">
                      <img
                        src="assets/imgs/page/homepage1/news1.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="blog-detail">
                      <h4 className="color-brand-1">
                        Как эффективно запустить свой онлайн-бизнес
                      </h4>
                    </Link>
                    <div className="mt-20">
                      <span className="date-post font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        29 Maя 2022
                      </span>
                      <span className="time-read font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        3 минуты чтения
                      </span>
                    </div>
                    <p className="font-sm color-grey-500 mt-20">
                      Узнайте, как современные предприниматели преуспевают в
                      онлайн-бизнесе. Мы расскажем о стратегиях, которые помогли
                      другим, и дадим советы, как избежать распространенных
                      ошибок. Погружайтесь в мир цифрового предпринимательства с
                      уверенностью!
                    </p>
                    <div className="mt-20 d-flex">
                      <div className="box-author">
                        <Link href="#">
                          <img
                            src="assets/imgs/page/homepage1/author.png"
                            alt="iori"
                          />
                        </Link>
                        <div className="author-info">
                          <Link href="#">
                            <span className="font-md-bold color-brand-1 author-name">
                              Гай Хокинс
                            </span>
                          </Link>
                          <span className="font-xs color-grey-500 department">
                            Банк Америки
                          </span>
                        </div>
                      </div>
                      <div className="box-button-more text-end">
                        <a
                          className="btn btn-default font-sm-bold"
                          href="blog-detail"
                        >
                          Узнать больше
                          <svg
                            className="w-6 h-6 icon-16 ml-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="card-blog-grid hover-up">
                  <div className="card-image">
                    <Link href="blog-detail">
                      <img
                        src="assets/imgs/page/homepage1/news2.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="blog-detail">
                      <h4 className="color-brand-1">
                        Как эффективно запустить свой онлайн-бизнес
                      </h4>
                    </Link>
                    <div className="mt-20">
                      <span className="date-post font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        30 Maя 2022
                      </span>
                      <span className="time-read font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        4 минуты чтения
                      </span>
                    </div>
                    <p className="font-sm color-grey-500 mt-20">
                      Узнайте, как современные предприниматели преуспевают в
                      онлайн-бизнесе. Мы расскажем о стратегиях, которые помогли
                      другим, и дадим советы, как избежать распространенных
                      ошибок. Погружайтесь в мир цифрового предпринимательства с
                      уверенностью!
                    </p>
                    <div className="mt-20 d-flex">
                      <div className="box-author">
                        <Link href="#">
                          <img
                            src="assets/imgs/page/homepage1/author.png"
                            alt="iori"
                          />
                        </Link>
                        <div className="author-info">
                          <Link href="#">
                            <span className="font-md-bold color-brand-1 author-name">
                              Гай Хокинс
                            </span>
                          </Link>
                          <span className="font-xs color-grey-500 department">
                            Банк Америки
                          </span>
                        </div>
                      </div>
                      <div className="box-button-more text-end">
                        <a
                          className="btn btn-default font-sm-bold"
                          href="blog-detail"
                        >
                          Узнать больше
                          <svg
                            className="w-6 h-6 icon-16 ml-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="list-blogs">
                  <li>
                    <div className="card-blog-list hover-up">
                      <div className="card-info">
                        <Link href="blog-detail">
                          <h5 className="color-brand-1">
                            Как произвести отличное впечатление с первого момента разговор с собеседником
                          </h5>
                        </Link>
                        <div className="mt-10">
                          <span className="date-post font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>29 May 2022</span>
                          </span>
                          <span className="time-read font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>3 mins read</span>
                          </span>
                        </div>
                      </div>
                      <div className="card-image">
                        <Link href="blog-detail">
                          <img
                            src="assets/imgs/page/homepage1/news-sm1.png"
                            alt="iori"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-blog-list hover-up">
                      <div className="card-info">
                        <Link href="blog-detail">
                          <h5 className="color-brand-1">
                            Как работать в команде над проектом
                          </h5>
                        </Link>
                        <div className="mt-10">
                          <span className="date-post font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>29 May 2022</span>
                          </span>
                          <span className="time-read font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>3 mins read</span>
                          </span>
                        </div>
                      </div>
                      <div className="card-image">
                        <Link href="blog-detail">
                          <img
                            src="assets/imgs/page/homepage1/news-sm2.png"
                            alt="iori"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-blog-list hover-up">
                      <div className="card-info">
                        <Link href="blog-detail">
                          <h5 className="color-brand-1">
                            Как повысить свой капитал быстро
                          </h5>
                        </Link>
                        <div className="mt-10">
                          <span className="date-post font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>29 May 2022</span>
                          </span>
                          <span className="time-read font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>3 mins read</span>
                          </span>
                        </div>
                      </div>
                      <div className="card-image">
                        <Link href="blog-detail">
                          <img
                            src="assets/imgs/page/homepage1/news-sm3.png"
                            alt="iori"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card-blog-list hover-up">
                      <div className="card-info">
                        <Link href="blog-detail">
                          <h5 className="color-brand-1">
                            Дизайн-студии, о которых должен знать каждый?
                          </h5>
                        </Link>
                        <div className="mt-10">
                          <span className="date-post font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>29 May 2022</span>
                          </span>
                          <span className="time-read font-xs color-grey-300">
                            <svg
                              className="w-6 h-6 icon-16"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>3 mins read</span>
                          </span>
                        </div>
                      </div>
                      <div className="card-image">
                        <Link href="blog-detail">
                          <img
                            src="assets/imgs/page/homepage1/news-sm4.png"
                            alt="iori"
                          />
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section mt-50">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20" id="blog">
                  Из нашего блога
                </h2>
                <p className="font-lg color-gray-500">
                  Добро пожаловать в наш мир!{" "}
                  <br className="d-none d-lg-block" />
                  Наша миссия - делать вашу жизнь легче, предоставляя
                  инновационные решения. Узнайте больше о нас и том, как мы
                  можем сделать ваш опыт неповторимым.
                </p>
              </div>
              {/* <div className="col-lg-4 col-md-4 text-md-end text-start">
                <a className="btn btn-default font-sm-bold pl-0">
                  View All
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
            <div className="row mt-55">
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="blog-detail">
                      <img
                        src="assets/imgs/page/homepage2/news1.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="blog-detail">
                      <h6 className="color-brand-1">
                        Эффективно запустить свой онлайн-бизнес
                      </h6>
                    </Link>
                    <p className="font-sm color-grey-500 mt-20">
                      Узнайте, как современные предприниматели преуспевают в
                      онлайн-бизнесе. Мы расскажем о стратегиях, которые помогли
                      другим, и дадим советы, как избежать распространенных{" "}
                      <br /> ошибок.
                    </p>
                    <div className="mt-20 d-flex align-items-center border-top pt-20">
                      {/* <Link
                        className="btn btn-border-brand-1 mr-15"
                        href="blog"
                      >
                        Technology
                      </Link> */}
                      <span className="date-post font-xs color-grey-300 mr-15">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        30 Maя 2023
                      </span>
                      <span className="time-read font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        4 минуты чтения
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="blog-detail">
                      <img
                        // style={{ height: "25vh" }}
                        src="assets/imgs/page/homepage2/news2.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="blog-detail">
                      <h6 className="color-brand-1">
                        Освойте Онлайн-Предпринимательство
                      </h6>
                    </Link>
                    <p className="font-sm color-grey-500 mt-20">
                      Присоединяйтесь к нашей платформе и позвольте
                      профессионалам выполнять вашу работу. Узнайте, как
                      преуспеть в онлайн-бизнесе, изучая стратегии успешных
                      предпринимателей и учитывая опыт других
                    </p>
                    <div className="mt-20 d-flex align-items-center border-top pt-20">
                      {/* <Link
                        className="btn btn-border-brand-1 mr-15"
                        href="blog"
                      >
                        Marketting
                      </Link> */}
                      <span className="date-post font-xs color-grey-300 mr-15">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        30 января 2024
                      </span>
                      <span className="time-read font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        6 минуты чтения
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="blog-detail">
                      <img
                        src="assets/imgs/page/homepage1/news2.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="blog-detail">
                      <h6 className="color-brand-1">
                        Успешный Запуск Онлайн-Бизнеса
                      </h6>
                    </Link>
                    <p className="font-sm color-grey-500 mt-20">
                      Присоединяйтесь к нашей платформе и позвольте
                      профессионалам выполнять вашу работу. Узнайте, как успешно
                      запустить свой онлайн-бизнес, избегая распространенных
                      ошибок и освоив стратегии успеха.
                    </p>
                    <div className="mt-20 d-flex align-items-center border-top pt-20">
                      {/* <Link
                        className="btn btn-border-brand-1 mr-15"
                        href="blog"
                      >
                        Media
                      </Link> */}
                      <span className="date-post font-xs color-grey-300 mr-15">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        20 января 2024
                      </span>
                      <span className="time-read font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        4 минуты чтения
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-blog-grid card-blog-grid-2 hover-up">
                  <div className="card-image">
                    <Link href="blog-detail">
                      <img
                        src="assets/imgs/page/homepage2/news3.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="blog-detail">
                      <h6 className="color-brand-1">
                        Запускайте Онлайн-Бизнес Эффективно
                      </h6>
                    </Link>
                    <p className="font-sm color-grey-500 mt-20">
                      Присоединяйтесь к нашей платформе и позвольте
                      профессионалам выполнять вашу работу. Узнайте, как
                      успешные предприниматели добиваются успеха в
                      онлайн-бизнесе, избегая распространенных ошибок
                    </p>
                    <div className="mt-20 d-flex align-items-center border-top pt-20">
                      {/* <Link
                        className="btn btn-border-brand-1 mr-15"
                        href="blog"
                      >
                        SEO
                      </Link> */}
                      <span className="date-post font-xs color-grey-300 mr-15">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        10 января 2024
                      </span>
                      <span className="time-read font-xs color-grey-300">
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        5 минуты чтения
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-0 pb-50 bg-core-value bg-7 mb-40 mt-100">
          <div className="container">
            <div className="row box-list-core-value">
              <div className="col-lg-4 mb-70">
                <div className="box-core-value pl-0">
                  <h1 className="color-brand-1 mb-15">Главные ценности</h1>
                  <p
                    className="font-md color-grey-400"
                    style={{ paddingTop: "10px" }}
                  >
                    Ценности, Которые Продвигают Вас: Фундамент для Успешного
                    Онлайн-Бизнеса
                  </p>
                  {/* <div className="mt-30"> <Link className="btn btn-white-circle font-sm-bold border-brand" href="/#">JOIN OUR TEAM TODAY</Link></div> */}
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="list-core-value list-core-value-white">
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Главные Цели</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Создание решения для электронной коммерции,
                        соответствующего вашим деловым ценностям и динамике
                        рынка
                      </p>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Основные Идеалы</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Разработка решения для электронной коммерции,
                        соответствующего вашим этическим принципам и развитию
                        рынка
                      </p>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Критические Ценности</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Создание решения для электронной коммерции,
                        соответствующего вашим основным ценностям и развитию
                        рынка
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="list-core-value list-core-value-white">
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Ключевые Принципы</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Создание решения для электронной коммерции,
                        соответствующего вашим деловым принципам и развитию
                        рынка
                      </p>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Важные Нормы</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Разработайте решение для электронной коммерции,
                        строящееся на ваших нравственных ценностях и росте рынка
                      </p>
                    </div>
                  </li>
                  <li>
                    {" "}
                    <span className="ticked" />
                    <h5 className="color-brand-1 mb-5">Ценные Основы</h5>
                    <div className="box-border-dashed">
                      <p className="font-md color-grey-500 mb-20">
                        Создание решения для электронной коммерции, основанного
                        на ваших ключевых ценностях и динамике рынка
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        

        {/* <section className="section mt-50 mb-50">
          <div className="container">
            <div className="row align-items-start">
              <p style={{ fontSize: "20px", marginBottom: "15px" }}>
                НАШИ ПРЕМИУМ-КЛИЕНТЫ
              </p>
              <h3>Мы имели удовольствие Работать с</h3>
            </div>

            <div className="row align-items-center mt-50">
              <div
                className="col-xl-6 col-lg-6 mb-30 "
                style={{ cursor: "pointer" }}
              >
                <a target="_blank" href="https://panda.tj/">
                  <div className="card-radius-32 bg-4">
                    <div className="card-info">
                      <h3 className="color-brand-1 mb-20">Panda tj</h3>
                      <p className="font-md color-grey-500 mb-20">
                        Ждём вас за покупками каждый день, мы всегда к вашим
                        <br />
                        услугам!
                      </p>
                      <div className="mt-0">
                        {" "}
                        
                      </div>
                     
                    </div>
                    <div className="card-image">
                      {" "}
                      <img
                        src={`assets/imgs/template/panda.png`}
                        className="hidden"
                        alt="panda"
                        style={{
                          width: "90%",

                          borderRadius: "10px",
                          border: "2px solid gray",
                          padding: "3px",
                        }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-xl-6 col-lg-6 mb-30"
                style={{ cursor: "pointer" }}
              >
                <a target="_blank" href="https://podari.tj/">
                  <div className="card-radius-32 bg-4 project-card-4">
                    <div className="card-info">
                      <h3 className="color-brand-1 mb-20">Podari.tj</h3>
                      <p className="font-md color-grey-500 mb-20">
                        Приглашаем вас на увлекательное путешествие по нашему
                        магазину каждый день.
                      </p>
                      <div className="mt-0">
                        {" "}
                       
                      </div>
                    </div>
                    <div className="card-image">
                      {" "}
                      <img
                        src="assets/imgs/template/podari.jpg"
                        alt="iori"
                        style={{
                          width: "90%",
                          borderRadius: "10px",
                          border: "2px solid #136481",
                          padding: "3px",
                        }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-xl-6 col-lg-6 mb-30"
                style={{ cursor: "pointer" }}
              >
                <a target="_blank" href="https://www.bonibicase.com">
                  <div className="card-radius-32 project-card-2">
                    <div className="card-info">
                      <h3 className="color-brand-1 mb-20">Bonibi Case</h3>
                      <p className="font-md color-grey-500 mb-20">
                        The First 2-in-1 Detachable and Customizable Crossbody
                        Phone <br />
                        Case
                      </p>
                      
                    </div>
                    <div className="card-image">
                      {" "}
                      <img
                        src="assets/imgs/template/bonibi.jpg"
                        alt="iori"
                        style={{
                          width: "90%",
                          borderRadius: "10px",
                          border: "2px solid white",
                      
                        }}
                      />
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-xl-6 col-lg-6 mb-30"
                style={{ cursor: "pointer" }}
              >
                <a target="_blank" href="https://roastingworks.com/">
                  <div className="project-card-3 card-radius-32">
                    <div className="card-info">
                      <h3 className="color-brand-1 mb-20">RoastingWorks</h3>
                      <p className="font-md color-grey-500 mb-20">
                        Nitelikli kahve,nitelikli
                        <br />
                        hizmet
                      </p>
                     
                    </div>
                    <div className="card-image">
                      {" "}
                      <img
                        src="/assets/imgs/template/rsv.jpg"
                        alt="rsv"
                        style={{
                          width: "90%",
                          borderRadius: "10px",
                          border: "2px solid gray",
                          // padding: "3px",
                        }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="section mt-50">
          <div className="container">
            <div className="box-newsletter">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="box-image-newsletter">
                    {" "}
                    <img
                      className="img-main"
                      src="assets/imgs/template/newsletter_img.png"
                      alt="iori"
                    />
                    <div className="shape-2 image-1">
                      {" "}
                      <img
                        src="assets/imgs/template/newsletter_finger.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <span className="font-lg color-brand-1">
                    Новостная рассылка
                  </span>
                  <h2 className="color-brand-1 mb-15 mt-5">
                    Подпишитесь на нашу рассылку
                  </h2>
                  <p className="font-md color-grey-500">
                    Нажимая кнопку, вы соглашаетесь с нашими Условиями и
                    Условиями использования.
                  </p>
                  <div className="form-newsletter mt-30">
                    <form action="#">
                      <input type="text" placeholder="Введите почту .." />
                      <button
                        className="btn btn-submit-newsletter"
                        type="submit"
                      >
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
};

export default HomePage1;
