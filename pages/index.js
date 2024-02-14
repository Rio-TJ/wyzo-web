import Link from "next/link";
import Head from "next/head";
import React, { useState } from "react";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import Testimonial from "../components/slider/Testimonial";
import ModalVideo from "react-modal-video";

const HomePage1 = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <Head>
        <title>WYZO</title>
      </Head>

      <Layout>
        <section className="section">
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
                    <a
                      className="btn btn-default font-sm-bold hover-up"
                      href="#"
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
                <div className="col-lg-5 d-none d-lg-block">
                  <object
                    data="assets/imgs/page/homepage1/hero-banner.svg"
                    type="image/svg+xml"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="box-radius-bottom">
            <div className="container">
              <div className="text-center">
                <h3 className="color-brand-1 mb-15">
                  Присоединяйтесь к нашей платформе и позвольте профессионалам
                  выполнять вашу работу
                </h3>
              </div>
              <div className="mt-30">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-8">
                    <div className="swiper-wrapper">
                      <Brand />
                    </div>
                    <div className="swiper-pagination swiper-pagination-group-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section mt-100">
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
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <a className="btn btn-default font-sm-bold pl-0">
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
              {/* <div className="col-lg-4 col-md-6 col-sm-6">
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
              </div> */}
            </div>
          </div>
        </section>
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
                    <span className="btn btn-tag">Бизнес</span>
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
                    <div className="box-button-video">
                      <a
                        className="btn btn-play font-sm-bold popup-youtube hover-up"
                        onClick={() => setOpen(true)}
                      >
                        Проиграть видео
                      </a>
                    </div>
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
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20" id="PricingPlan">
                  Планы, которые лучше всего соответствуют требованиям вашего
                  бизнеса
                </h2>
                <p className="font-lg color-gray-500">
                  Мы тщательно разработали готовые к установке пакеты для вашего
                  бизнеса. <br className="d-none d-lg-block" /> Вы можете
                  добавить другие опции поверх пакета, соответствующие вашим
                  идеям.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <a className="btn btn-default font-sm-bold pl-0">
                  Сравнить планы
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
                    <span className="font-lg-bold color-brand-1">$34</span>
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
                        Быстрая и безопасная витрина
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
                        Готовые шаблоны интерфейса
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
                        Многоязычный
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
                        Расширенные инструменты редактора
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
                        Списки желаний
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
                        Обзоры продуктов/комментарии
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
                        Отчеты о продажах
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
                        Продавайте по всему миру
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
                        Перекрестные продажи и<br />{" "}
                        <span className="pl-30">дополнительные продажи</span>
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
                        Неограниченное пространство <br />
                        <span className="pl-30">для хранения</span>
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
                        Регулярная техническая поддержка
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Глобальные сертификаты
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Сгруппированные продукты
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
                    <span className="font-lg-bold color-brand-1">$79</span>
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
                        Все в стартовом пакете +
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
                        Мультилокальный магазин
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
                        Мульти валюта
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
                        Мульти склад
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
                        Пункты самовывоза
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
                        B2B-интеграции
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
                        Особенный дизайн пользовательского
                        <br />
                        <span className="pl-30"> интерфейса</span>
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
                        Мобильные приложения
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
                        Инвентаризация, управляемая
                        <br />
                        <span className="pl-30"> ИИ</span>
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
                        Служба поддержки клиентов,
                        <br />
                        <span className="pl-30"> управляемая ИИ</span>
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
                        Исполнение, управляемое ИИ
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
                        <span>Маркетинг, управляемый ИИ</span>
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
                        <span>
                          CDN для более быстрого
                          <p className="pl-30">обслуживания контента</p>
                        </span>
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
              {/* <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="card-plan card-plan-2 hover-up">
                  <div className="card-image-plan">
                    <div className="icon-plan bg-2">
                      <img
                        src="assets/imgs/page/homepage1/business.svg"
                        alt="iori"
                      />
                    </div>
                    <div className="info-plan">
                      <h4 className="color-brand-1">Business</h4>
                      <p className="font-md color-grey-400">
                        Protect for testing
                      </p>
                    </div>
                  </div>
                  <div className="box-day-trial">
                    <span className="font-lg-bold color-brand-1">$99</span>
                    <span className="font-md color-grey-500">
                      - user / month
                    </span>
                    <br />
                    <span className="font-xs color-grey-500">One-time pay</span>
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
                        Brand Awareness Ads
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
                        Retargeting Ads
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
                        Contextual, Demographic
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
                        Facebook Advertising
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
                        Global Certificates
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
                        Snapchat Advertising
                      </li>
                      <li className="mutted">
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        TikTok Advertising
                      </li>
                      <li className="mutted">
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Advanced List Building
                      </li>
                    </ul>
                  </div>
                  <div className="mt-20">
                    <Link className="btn btn-brand-1-full hover-up" href="#">
                      Get Started
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
              </div> */}
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
                    <span className="font-lg-bold color-brand-1">$***</span>
                    <span className="font-md color-grey-500">/ месяц</span>
                    <br />
                  </div>
                  <div className="mt-30 mb-30">
                    <ul className="list-ticks list-ticks-2">
                      {" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Все в Безлимитным пакете +
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Управление взаимоотношениями
                        <br />
                        <span className="pl-30">с клиентами</span>
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Настраиваемые продукты
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Сгруппированные продукты
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Аналитика веб-сайтов, отчеты о продажах
                        <br />
                        <span className="pl-35">
                          и показатели на основе ИИ.
                        </span>
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Отслеживание пользователей на
                        <br />
                        <span className="pl-35"> основе ИИ</span>
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Выполнение заказов с
                        <br />
                        <span className="pl-35">
                          {" "}
                          масштабируемой инфраструктурой
                        </span>
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Варианты международной доставки
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Интеграция для продаж в <br />
                        <span className="pl-35"> социальных сетях</span>
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Настройки и дополнения по требованию
                      </li>{" "}
                      <li>
                        {" "}
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />{" "}
                        </svg>{" "}
                        Специализированная команда <br />
                        <span className="pl-35"> разработчиков</span>
                      </li>{" "}
                      <li>
                        {" "}
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Глобальные сертификаты
                      </li>{" "}
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
        <section className="section pt-80 mb-30 bg-faqs">
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
        </section>
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
                <span className="btn btn-tag">Бизнес</span>
                <h3 className="color-brand-1 mt-10 mb-15">
                  Создать свой онлайн-бизнес, не беспокоясь о технической части.
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
                  <a className="btn btn-default font-sm-bold hover-up" href="#">
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
            <div className="row mb-100 mt-50 project-revert">
              <div className="col-xl-5 col-lg-6">
                {" "}
                <span className="btn btn-tag">Бизнес</span>
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
                  <a className="btn btn-default font-sm-bold hover-up" href="#">
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
            <div className="row align-items-start">
              <p>НАШИ ПРЕМИУМ-КЛИЕНТЫ</p>
              <h3>Мы имели удовольствие Работать с</h3>
            </div>

            <div className="row align-items-center mt-50">
              <div
                className="col-xl-6 col-lg-6 mb-30 "
                style={{ cursor: "pointer" }}
              >
                <div className="card-radius-32 bg-4">
                  <div className="card-info">
                    <h3 className="color-brand-1 mb-20">Panda tj</h3>
                    <p className="font-md color-grey-500 mb-20">
                      Ждём вас за покупками каждый день, мы всегда к вашим
                      услугам!
                    </p>
                    <div className="mt-0">
                      {" "}
                      <Link
                        target="_blank"
                        href="https://panda.tj/"
                        className="btn btn-brand-1-small"
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
                      </Link>
                    </div>
                    {/* <img src={panda}></img> */}
                  </div>
                  <div className="card-image">
                    {" "}
                    <img
                      src={`assets/imgs/template/panda.png`}
                      className="hidden"
                      alt="panda"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 mb-30"
                style={{ cursor: "pointer" }}
              >
                <div className="card-radius-32 bg-4 project-card-4">
                  <div className="card-info">
                    <h3 className="color-brand-1 mb-20">Podari.tj</h3>
                    <p className="font-md color-grey-500 mb-20">
                      Приглашаем вас на увлекательное путешествие по нашему
                      магазину каждый день.
                    </p>
                    <div className="mt-0">
                      {" "}
                      <Link
                        className="btn btn-brand-1-small"
                        target="_blank"
                        href="https://podari.tj/"
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
                      </Link>
                    </div>
                  </div>
                  <div className="card-image">
                    {" "}
                    <img src="assets/imgs/template/podari.jpg" alt="iori" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 mb-30"
                style={{ cursor: "pointer" }}
              >
                <div className="card-radius-32 project-card-2">
                  <div className="card-info">
                    <h3 className="color-brand-1 mb-20">Bonibi Case</h3>
                    <p className="font-md color-grey-500 mb-20">
                      The First 2-in-1 Detachable and Customizable Crossbody
                      Phone Case
                    </p>
                    <div className="text-center">
                      {" "}
                      <Link
                        className="btn btn-brand-1-small"
                        target="_blank"
                        href="https://www.bonibicase.com"
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
                      </Link>
                    </div>
                  </div>
                  <div className="card-image">
                    {" "}
                    <img src="assets/imgs/template/bonibi.jpg" alt="iori" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 mb-30"
                style={{ cursor: "pointer" }}
              >
                <div className="project-card-3 card-radius-32">
                  <div className="card-info">
                    <h3 className="color-brand-1 mb-20">RoastingWorks</h3>
                    <p className="font-md color-grey-500 mb-20">
                      Nitelikli kahve,nitelikli hizmet
                      <br />
                      <br />
                    </p>
                    <div className="text-center">
                      {" "}
                      <Link
                        className="btn btn-brand-1-small"
                        target="_blank"
                        href="https://roastingworks.com/"
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
                      </Link>
                    </div>
                  </div>
                  <div className="card-image">
                    {" "}
                    <img src="/assets/imgs/template/rsv.jpg" alt="rsv" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section mt-50">
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
        </section>
      </Layout>
    </>
  );
};

export default HomePage1;
