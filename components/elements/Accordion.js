import React, { useState } from "react";

const Accordion = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div className="accordion" id="accordionFAQ">
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(1)}>
            <button
              className={
                isActive.key == 1
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Почему мне следует начать свой онлайн-бизнес?
            </button>
          </h5>
          <div
            className={
              isActive.key == 1
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Начать онлайн-бизнес позволяет достичь более широкой аудитории,
              увеличить продажи и эффективность.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(2)}>
            <button
              className={
                isActive.key == 2
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Какие шаги мне следует предпринять для запуска своего
              онлайн-бизнеса?
            </button>
          </h5>
          <div
            className={
              isActive.key == 2
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Регистрируйтесь сегодня, создавайте аккаунт и следуйте нашим
              простым шагам для запуска вашего успешного онлайн-бизнеса.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(3)}>
            <button
              className={
                isActive.key == 3
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Что мне нужно, чтобы начать свой онлайн-бизнес?
            </button>
          </h5>
          <div
            className={
              isActive.key == 3
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Для начала вам потребуется продукт или услуга, интернет-магазин и
              стратегия привлечения клиентов. Мы помогаем вам с этим всем.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(4)}>
            <button
              className={
                isActive.key == 4
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Каковы основные шаги для эффективного масштабирования бизнеса?
            </button>
          </h5>
          <div
            className={
              isActive.key == 4
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Масштабирование требует ясной стратегии, развития новых продуктов
              и расширения рынка. Мы разрабатываем планы с нашими клиентами для
              устойчивого роста.    
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(5)}>
            <button
              className={
                isActive.key == 5
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Какое преимущество получу, начиная свой бизнес с вами?
            </button>
          </h5>
          <div
            className={
              isActive.key == 5
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Наша платформа предоставляет всестороннюю поддержку, включая
              стратегическое планирование, дизайн и передовые технологии.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(6)}>
            <button
              className={
                isActive.key == 6
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Сколько времени занимает запуск онлайн-бизнеса?
            </button>
          </h5>
          <div
            className={
              isActive.key == 6
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Время запуска зависит от вашего продукта и подготовки. Обычно мы
              стремимся к быстрому запуску, но точные сроки могут варьироваться.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => handleToggle(7)}>
            <button
              className={
                isActive.key == 7
                  ? "accordion-button text-heading-5 "
                  : "accordion-button text-heading-5 collapsed"
              }
            >
              Как я могу отслеживать производительность своего бизнеса?
            </button>
          </h5>
          <div
            className={
              isActive.key == 7
                ? "accordion-collapse collapse show"
                : "accordion-collapse collapse"
            }
          >
            <div className="accordion-body">
              Мы предоставляем инструменты аналитики, которые позволяют вам
              отслеживать ключевые показатели производительности и принимать
              обоснованные решения для роста вашего бизнеса.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
