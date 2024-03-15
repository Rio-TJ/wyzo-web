import Link from "next/link";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout/Layout";

const pageRegister = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>

      <Layout>
        <section className="section box-page-register">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="box-steps-small">
                  <div className="item-number hover-up active">
                    <div className="num-ele">1</div>
                    <div className="info-num">
                      <h5 className="color-brand-1 mb-15">Регистрация</h5>
                      <p className="font-md color-grey-500">
                        Вам нужно всего лишь указать свое имя, электронную почту
                        и надежный пароль или воспользоваться своими аккаунтами
                        в социальных сетях.
                      </p>
                    </div>
                  </div>
                  <div className="item-number hover-up">
                    <div className="num-ele">2</div>
                    <div className="info-num">
                      <h5 className="color-brand-1 mb-15">Активировать</h5>
                      <p className="font-md color-grey-500">
                        Используйте код, отправленный на ваш электронный адрес,
                        чтобы активировать ваш аккаунт.
                      </p>
                    </div>
                  </div>
                  <div className="item-number hover-up">
                    <div className="num-ele">3</div>
                    <div className="info-num">
                      <h5 className="color-brand-1 mb-15">
                        Откройте торговый счет.
                      </h5>
                      <p className="font-md color-grey-500">
                        Создайте реальный или демонстрационный торговый счет на
                        нашей платформе. Кредитная карта не требуется.
                      </p>
                    </div>
                  </div>
                  <div className="item-number hover-up">
                    <div className="num-ele">4</div>
                    <div className="info-num">
                      <h5 className="color-brand-1 mb-15">
                        Свяжитесь с инвесторами.
                      </h5>
                      <p className="font-md color-grey-500">
                        С помощью системы анализа в режиме реального времени вы
                        станете профессиональным инвестором.
                      </p>
                    </div>
                  </div>
                  <div className="item-number hover-up">
                    <div className="num-ele">5</div>
                    <div className="info-num">
                      <h5 className="color-brand-1 mb-15">Почти готово</h5>
                      <p className="font-md color-grey-500">
                        Начните свой удивительный путь на нашей платформе.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="box-register">
                  <h2 className="color-brand-1 mb-15">Создайте аккаунт</h2>
                  <p className="font-md color-grey-500">
                    Создайте аккаунт сегодня и начните использовать нашу
                    платформу.
                  </p>
                  <div className="line-register mt-25 mb-50" />
                  <div className="row">
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group mb-25">
                        <input
                          className="form-control icon-name"
                          type="text"
                          placeholder="Ваше имя"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group mb-25">
                        <input
                          className="form-control icon-phone"
                          type="text"
                          placeholder="Телефон"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group mb-25">
                        <input
                          className="form-control icon-email"
                          type="text"
                          placeholder="Электронная почта"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group mb-25">
                        <input
                          className="form-control icon-user"
                          type="text"
                          placeholder="Имя пользователя"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group mb-25">
                        <input
                          className="form-control icon-password"
                          type="text"
                          placeholder="Пароль"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                      <div className="form-group mb-25">
                        <input
                          className="form-control icon-password"
                          type="text"
                          placeholder="Повторный пароль"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-25">
                        <p className="font-sm-bold text-center color-grey-500">
                          Или продолжите с
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <div className="form-group mb-25">
                        <a className="btn btn-border-80 btn-full" href="#">
                          <img
                            className="d-inline-block align-middle mr-5"
                            src="assets/imgs/page/register/google.svg"
                            alt="iori"
                          />
                          Google
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <div className="form-group mb-25">
                        <a className="btn btn-border-80 btn-full" href="#">
                          <img
                            className="d-inline-block align-middle mr-5"
                            src="assets/imgs/page/register/microsoft.svg"
                            alt="iori"
                          />
                          Microsoft
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <div className="form-group mb-25">
                        <a className="btn btn-border-80 btn-full" href="#">
                          <img
                            className="d-inline-block align-middle mr-5"
                            src="assets/imgs/page/register/tw.svg"
                            alt="iori"
                          />
                          Twitter
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <div className="form-group mb-25">
                        <a className="btn btn-border-80 btn-full" href="#">
                          <img
                            className="d-inline-block align-middle mr-5"
                            src="assets/imgs/page/register/fb.svg"
                            alt="iori"
                          />
                          Facebook
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-15">
                      <div className="form-group mb-25">
                        <label className="cb-container">
                          <input type="checkbox" defaultChecked="checked" />
                          <span className="text-small">
                            Я прочитал(а) и согласен(а) с условиями
                            использования и политикой конфиденциальности этого
                            веб-сайта.
                          </span>
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="form-group mb-25">
                        <label className="cb-container">
                          <input type="checkbox" />
                          <span className="text-small">
                            Я хочу получать вдохновение в дизайне и обновления
                            продукции. (Без спама. Вы можете отказаться в любое
                            время.)
                          </span>
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-30">
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-6 col-6">
                      <div className="form-group">
                        <button
                          className="btn btn-brand-lg btn-full font-md-bold"
                          type="submit"
                        >
                          Зарегистрируйтесь сейчас
                        </button>
                      </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-6 col-6">
                      <span className="d-inline-block align-middle font-sm color-grey-500">
                        Уже есть аккаунт?
                      </span>
                      <Link
                        className="d-inline-block align-middle color-success ml-3"
                        href="/login"
                      >
                        {" "}
                        Войти
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section mt-80 mb-30">
          <div className="container">
            <div className="text-start">
              <h3 className="color-brand-1 mb-20">
                Признано разработчиками <br className="d-none d-lg-block" />
                Доверено предприятиями
              </h3>
              <p className="font-lg color-grey-500">
                Мы помогли этим брендам превратить онлайн-оценки в успеховые
                истории.{" "}
              </p>
            </div>
            <div className="mt-50">
              <ul className="list-partners list-partners-left text-start">
                <li>
                  <img src="assets/imgs/page/homepage1/placed.png" alt="iori" />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage1/cuebiq.png" alt="iori" />
                </li>
                <li>
                  <img
                    src="assets/imgs/page/homepage1/factual.png"
                    alt="iori"
                  />
                </li>
                <li>
                  <img
                    src="assets/imgs/page/homepage1/placeiq.png"
                    alt="iori"
                  />
                </li>
                <li>
                  <img
                    src="assets/imgs/page/homepage1/airmeet.png"
                    alt="iori"
                  />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage1/spen.png" alt="iori" />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage1/klippa.png" alt="iori" />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage1/matrix.png" alt="iori" />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage2/reed.png" alt="iori" />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage2/vuori.png" alt="iori" />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage2/versed.png" alt="iori" />
                </li>
                <li>
                  <img src="assets/imgs/page/homepage1/klippa.png" alt="iori" />
                </li>
                <li>
                  <img
                    src="assets/imgs/page/homepage1/factual.png"
                    alt="iori"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section mt-50">
          <div className="container">
            <div className="box-newsletter box-newsletter-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 m-auto text-center">
                  <span className="font-lg color-brand-1">
                    Новостная рассылка
                  </span>
                  <h2 className="color-brand-1 mb-15 mt-5">
                    Подпишитесь на нашу рассылку
                  </h2>
                  <p className="font-md color-grey-500">
                    Не упустите последнюю информацию от нас о текущих трендах на
                    рынке. Нажимая кнопку, вы соглашаетесь с нашими условиями
                    использования.
                  </p>
                  <div className="form-newsletter mt-30">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Введите свой адрес электронной почты. .."
                      />
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

export default pageRegister;
