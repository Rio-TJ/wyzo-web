import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contact">
        <div className="footer-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 width-20">
                <div className="mb-10">
                  <img
                    src="assets/imgs/template/fin2.svg"
                    alt="iori"
                    style={{ width: "100px" }}
                  />
                </div>
                <p className="font-md mb-20 color-grey-400">
                  4517 Washington Ave.
                  <br className="d-none d-lg-block" />
                  Manchester, Kentucky 39495
                </p>
                <div className="font-md mb-20 color-grey-400">
                  <strong className="font-md-bold">Часы работы:</strong> 8:00 -
                  17:00, Пн - Сб:
                </div>
                <h6 className="color-brand-1">Следи за нами</h6>
                <div className="mt-15">
                  <Link className="icon-socials icon-facebook" href="#" />
                  <Link className="icon-socials icon-instagram" href="#" />
                  <Link className="icon-socials icon-twitter" href="#" />
                  <Link className="icon-socials icon-linkedin" href="#" />
                  <Link className="icon-socials icon-youtube" href="#" />
                </div>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">О нас</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="/about">Наши цели</Link>
                  </li>
                  <li>
                    <Link href="/team">Наша команда</Link>
                  </li>
                  <li>
                    <Link href="/career">Карьеры</Link>
                  </li>
                  <li>
                    <Link href="#">Медиа</Link>
                  </li>
                  <li>
                    <Link href="#">Реклама</Link>
                  </li>
                  <li>
                    <Link href="#">Рекомендации</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">Ресурсы</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">Менеджеры проектов</Link>
                  </li>
                  <li>
                    <Link href="#">Решении</Link>
                  </li>
                  <li>
                    <Link href="#">Клиенты</Link>
                  </li>
                  <li>
                    <Link href="#">Новости &amp; Событии</Link>
                  </li>
                  <li>
                    <Link href="#">Карьеры</Link>
                  </li>
                  <li>
                    <Link href="#">Поддержка</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">Мы предлагаем</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="#">Проект ПО</Link>
                  </li>
                  <li>
                    <Link href="#">Ресурсы ПО</Link>
                  </li>
                  <li>
                    <Link href="#">Автоматизация задач</Link>
                  </li>
                  <li>
                    <Link href="#">Создатели диаграмм Ганта</Link>
                  </li>
                  <li>
                    <Link href="#">Найти Информации</Link>
                  </li>
                  <li>
                    <Link href="#">ПО для решения задач</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-23">
                <h5 className="mb-10 color-brand-1">Приложение &amp; оплата</h5>
                <div>
                  <p className="font-sm color-grey-400">
                    Скачайте наши приложения и получите дополнительную скидку
                    15% на ваш первый заказ ...!
                  </p>
                  <div className="mt-20">
                    <Link className="mr-10" href="#">
                      <img src="assets/imgs/template/appstore.png" alt="iori" />
                    </Link>
                    <Link href="#">
                      <img
                        src="assets/imgs/template/google-play.png"
                        alt="iori"
                      />
                    </Link>
                  </div>
                  <p className="font-sm color-grey-400 mt-20 mb-10">
                    Безопасность оплата
                  </p>
                  <img
                    src="assets/imgs/template/payment-method.png"
                    alt="iori"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="container">
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                  <ul className="menu-bottom">
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Политика конфиденциальности
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Печенье
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Условия использования
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                  <span className="color-grey-300 font-md">
                    ©WYZO, Официальный сайт 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
