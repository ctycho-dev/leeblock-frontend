import { FC, useEffect } from "react";
import Footer from "../components/footer/footer";
import Help from "../components/help";
import Header from "../components/header/header";

interface IAgreement { }

const Agreement: FC<IAgreement> = ({ }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header />
            <main className=" py-6">
                <div className="max-w-4xl m-auto px-6 py-4">
                    <h1 className="text-2xl tablet:text-4xl font-bold mb-10">ПУБЛИЧНЫЙ ДОГОВОР – ОФЕРТА О ПРОДАЖЕ ТОВАРОВ</h1>
                    <p className="text-md tablet:text-base font-semibold mb-6">
                        Настоящий договор между интернет-магазином ИП Аблизина Валерия Валерьевна
                        и пользователем услуг интернет-магазина, именуемым в дальнейшем «Покупатель» определяет условия приобретения товаров через сайт интернет-магазина https://www.leeblock.ru
                        Настоящий договор – оферта действует с 01.01.2024 года.
                    </p>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">1. Общие положения</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Индивидуальный предприниматель Аблизина Валерия Валерьевна публикует настоящий договор купли-продажи, являющийся публичным договором - офертой (предложением) в адрес физических лиц в соответствии со ст. 435 и пунктом 2 статьи 437 Гражданского Кодекса Российской Федерации (далее - ГК РФ).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Настоящая публичная оферта (именуемая в дальнейшем «Оферта») определяет все существенные условия договора между ИП Аблизина Валерия Валерьевна и лицом, акцептовавшим Оферту.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Настоящий договор заключается между Покупателем и интернет - магазином в момент оформления заказа.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Оферта может быть акцептована (принята) любым физическим лицом на территории Российской Федерации, имеющим намерение приобрести товар и/или услуги, реализуемые/предоставляемые ИП Аблизина Валерия Валерьевна через интернет-магазин, расположенный на сайте https://www.leeblock.ru/.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Покупатель безоговорочно принимает все условия, содержащиеся в оферте в целом (т.е. в полном объеме и без исключений).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    В случае принятия условий настоящего договора (т.е. публичной оферты интернет-магазина), физическое лицо, производящее акцепт оферты, становится Покупателем.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">7</div>
                                <div>
                                    Акцептом является получение Продавцом сообщения о намерении физического лица приобрести товар на условиях, предложенных Продавцом.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">8</div>
                                <div>
                                    Оферта, все приложения к ней, а также вся информация о товарах/услугах ИП Аблизина Валерия Валерьевна опубликована на сайте https://www.leeblock.ru/.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">2. СТАТУС ИНТЕРНЕТ - МАГАЗИНА LEEBLOCK.RU</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    ИП Аблизина Валерия Валерьевна является владельцем интернет-магазина, который предназначен для организации дистанционного способа продажи товаров через сеть интернет.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Интернет-магазин не требует от Покупателя специальных действий для использования ресурса интернет-магазина для просмотра товара, расчета и оформления заказа, таких как регистрация или  заключение договора на пользование ресурсом интернет-магазина.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Интернет-магазин не несет ответственности за содержание и достоверность информации, предоставленной Покупателем при оформлении заказа.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">3. СТАТУС ПОКУПАТЕЛЯ</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Покупатель несет ответственность за достоверность предоставленной при оформлении заказа информации, и ее чистоту от претензий третьих лиц.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Покупатель подтверждает свое согласие с условиями, установленными настоящим Договором, путем проставления отметки в графе «Я принимаю условия публичного договора-оферты» при оформлении заказа. До заключения Договора условия Договора Покупателем прочитаны полностью, все условия Договора понятны, со всеми условиями Договора Покупатель согласен.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Использование ресурса интернет-магазина для просмотра и выбора товара, а так же для оформления заказа является для Покупателя безвозмездным.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Товар приобретается Покупателем исключительно для личных, семейных, домашних нужд, не связанных с осуществлением предпринимательской деятельности.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">4. ПРЕДМЕТ ОФЕРТЫ</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Продавец, на основании заказов Покупателя, продаёт Покупателю товар в соответствии с условиями и по ценам, установленным Продавцом в оферте и приложениях к ней.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Доставка товаров, заказанных и оплаченных Покупателем, осуществляется Продавцом или Перевозчиком. Покупатель имеет право забрать товар со склада Продавца самостоятельно (самовывоз).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    К отношениям между Покупателем и Продавцом применяются положения ГК РФ о розничной купле- продаже (§ 2 глава 30), Закон РФ «О защите прав потребителей» от 07.02.1992 №2300-1, а также иные нормативные правовые акты, принятые в соответствии с ними.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Физическое лицо считается принявшим все условия оферты (акцепт оферты) и приложений к ней в полном объеме и без исключений с момента получения Продавцом сообщения о намерении Покупателя приобрести товар на условиях, предложенных Продавцом. В случае акцепта оферты физическое лицо считается заключившим с Продавцом договор купли- продажи заказанных товаров и приобретает статус Покупателя.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">5. ОПРЕДЕЛЕНИЯ</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    <b>Покупатель</b> - физическое лицо, принявшее в полном объеме и без исключений условия оферты (совершившее акцепт оферты) в соответствии с п. 4.4. оферты.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    <b>Продавец</b> - ИП Аблизина Валерия Валерьевна
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    <b>Интернет-магазин</b> - интернет-сайт, имеющий адрес в сети интернет https://www.leeblock.ru/. принадлежащий Продавцу и предназначенный для продажи Продавцом Покупателям на основании оферты товаров, принадлежащих Продавцу.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    <b>Сайт</b> - интернет-сайт, имеющий адрес в сети интернет https://www.leeblock.ru/.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    <b>Каталог</b> - информация о товарах, размещенная в интернет-магазине.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    <b>Товар</b> – имущество: непродовольственные товары, реализуемые Продавцом в интернет-магазине.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">7</div>
                                <div>
                                    <b>Заказ</b> - решение Покупателя приобрести товар, оформленное в интернет-магазине.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">8</div>
                                <div>
                                    <b>Место исполнения договора</b> - место (адрес), указанное Покупателем, по которому доставляется товар Покупателю силами Продавца, или магазин-салон или склад Продавца, в случае отказа Покупателя от доставки товара силами Продавца (самовывоз), или территория перевозчика, договор с которым заключил Покупатель, в случае доставки товара Перевозчиком.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">9</div>
                                <div>
                                    <b>Представитель</b> - физическое лицо, предъявившее квитанцию или иной документ, свидетельствующий о заключении договора.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">10</div>
                                <div>
                                    <b>Перевозчик</b> - юридическое лицо или индивидуальный предприниматель, принявшие на себя по договору перевозки обязанность доставить вверенный ему отправителем товар из пункта отправления в пункт назначения, а также выдать товар получателю. Договор перевозки с перевозчиком заключается Покупателем самостоятельно.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">11</div>
                                <div>
                                    <b>Стороны</b> - совместно Покупатель и Продавец.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">6. ПОРЯДОК ЗАКЛЮЧЕНИЯ ДОГОВОРА КУПЛИ-ПРОДАЖИ</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Покупатель может оформить заказ самостоятельно на сайте интернет-магазина, либо через менеджера по телефонам, указанным на сайте, на условиях Договора купли-продажи (публичной оферты интернет- магазина).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    При оформлении заказа в интернет-магазине, Покупатель обязан предоставить о себе информацию:
                                    Ф.И.О. (Покупателя Товара),
                                    адрес доставки Товара,
                                    контактный телефон и электронную почту Покупателя Товара.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Волеизъявление Покупателя осуществляется посредством внесения последним соответствующих данных в форму заказа в интернет-магазине либо подачей заявки через менеджера интернет-магазина или по e-mail.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Интернет-магазин не редактирует информацию о Покупателе.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Для получения бумажного экземпляра Договора купли-продажи, Покупатель отправляет заявку по электронной почте на адрес info@leeblock.ru
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">7. ИНФОРМАЦИЯ О ТОВАРЕ</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Товар представлен на сайте через фото-образцы, являющиеся собственностью интернет-магазина.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Каждый фото-образец сопровождается текстовой информацией: наименованием, ценой и описанием товара.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Все информационные материалы, представленные в интернет - магазине, носят справочный характер. В случае возникновения у Покупателя вопросов, касающихся свойств и характеристик товара, Покупатель должен, перед оформлением заказа, обратиться к Продавцу по телефонам указанным на сайте.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    По просьбе Покупателя менеджер интернет-магазина обязан предоставить (по телефону или посредством электронной почты) прочую информацию, необходимую и достаточную, с точки зрения Покупателя, для принятия им решения о покупке товара.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Покупатель уведомлен о том, что приобретая товар со скидкой, установленной в связи с его недостатками (дефектами), он лишается права ссылаться на них в дальнейшем.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    Покупатель уведомлен Продавцом о том, что товар, указанный в счете отдельными позициями в любом случае не является комплектом.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">8. ПОРЯДОК ПРИОБРЕТЕНИЯ ТОВАРА</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Покупатель вправе оформить заказ на любой товар, представленный в интернет-магазине. Каждый товар может быть заказан в любом количестве. Исключения из указанного правила указаны в описании каждого товара в случае проведения акций, снятия товара с продажи и т.п.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Заказ может быть оформлен Покупателем по телефонам, указанным на сайте, или оформлен самостоятельно на сайте.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    После оформления заказа Продавец подтверждает заказ Покупателя путем отправления на e-mail Покупателя информации, подтверждающий принятие заказа, с указанием наименования, размера, цены выбранного товара и общей суммы заказа или менеджер интернет-магазина связывается с Покупателем по телефону.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    При отсутствии товара на складе менеджер интернет-магазина обязан поставить в известность об этом Покупателя (по телефону или посредством электронной почты).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Покупатель вправе сделать предварительный заказ на временно отсутствующий на складе товар.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    При отсутствии товара Покупатель вправе заменить его другим товаром либо аннулировать заказ.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">9. ЦЕНА ТОВАРА</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Цена товара в интернет-магазине указана в рублях РФ за единицу товара. Цена товара не включает стоимость доставки товара до Покупателя и иные услуги Продавца.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Указанная на сайте цена товара может быть изменена интернет-магазином в одностороннем порядке, при этом цена на заказанный и оплаченный Покупателем товар изменению не подлежит.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Полная стоимость заказа состоит из каталожной стоимости товара (которая формируется из итого стоимости товара или суммы стоимости всех необходимых составных частей товара, стоимости доставки).
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">10. ОПЛАТА ТОВАРА</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Способы и порядок оплаты товара указаны на сайте и в данной оферте. При необходимости порядок и условия оплаты заказанного товара оговариваются Покупателем с менеджером интернет- магазина.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Оплата безналичным расчетом производится посредством сервиса приема платежей (платежной системы) в соответствии с информацией, предоставленной на соответствующих страницах (разделах) Сервиса Администрации. Пользователь Акцептом настоящей Оферты подтверждает также, что ознакомился с офертой, политикой конфиденциальности и иными документами сервиса приема платежей (платежной системы)
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Покупатель оплачивает заказ любым способом, выбранным в интернет-магазине.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Расчеты Сторон при оплате заказа осуществляются в российских рублях.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">11. ДОСТАВКА ТОВАРОВ</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Способы, порядок   и   сроки   изготовления   и   доставки   товара   указаны   на   сайте и в данной оферте. Срок поставки товара состоит из срока его изготовления (при отсутствии товара   наличии) и срока доставки. Срок доставки зависит от выбранного способа доставки товара. Порядок и условия доставки заказанного товара оговариваются Покупателем с менеджером Интернет- магазина. Доставленный товар передается Покупателю по указанному им адресу, а при отсутствии покупателя – любому лицу, предъявившему информацию о номере заказа, либо иное (в том числе электронное) подтверждение оформления заказа. В случае если доставка товара произведена в установленные на сайте /в заказе/в договоре сроки, но товар не был передан покупателю по его вине, последующая доставка производится в новые сроки, согласованные с продавцом/перевозчиком, на условиях и по тарифам продавца/перевозчика размещенных на их сайтах.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    <b>Самовывоз товара:</b>
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2.1</div>
                                <div>
                                    Продавец, получив уведомление о размещенном заказе, подтверждает его получение по телефону или по e-mail Покупателя и согласовывает с ним дату самовывоза товара.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2.2</div>
                                <div>
                                    Дата самовывоза товара согласовывается Продавцом с Покупателем по телефону или по e-mail после поступления 100 % оплаты от Покупателя на расчетный счет Продавца.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2.3</div>
                                <div>
                                    Право собственности и риск случайной гибели, утраты или повреждения товара переходит к Покупателю с момента передачи товара Покупателю или его Представителю. При получении товара Представителем, последний должен, при получении товара на складе, предъявить свой паспорт, паспорт лица, которое оформило заказ и доверенность, в простой письменной форме на право получения данного заказа данным Представителем.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    <b>Доставка товара Продавцом:</b>
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3.1</div>
                                <div>
                                    Переход права собственности и риск случайной гибели, утраты или повреждения товара переходит к Покупателю с момента передачи товара Покупателю или Представителю.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3.2</div>
                                <div>
                                    Доставка осуществляется общедоступным способом.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3.3</div>
                                <div>
                                    Работы (услуги) не оплаченные и не заказанные Покупателем не выполняются (не оказываются).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3.4</div>
                                <div>
                                    Разгрузка товара осуществляется силами  и за счет Покупателя.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-2 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3.5</div>
                                <div>
                                    Покупатель обеспечивает надлежащие условия для приемки Товара, включая:
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-8">
                                <div className="button-gradient text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">a</div>
                                <div>
                                    Товар доставляется до адреса Покупателя лишь при условии наличия свободных подъездных путей для грузового автотранспорта и наличия нумерации на доме. Проезд (въезд) грузового автотранспорта на охраняемую территорию должен быть согласован Покупателем со службой охраны заранее.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3.6</div>
                                <div>
                                    При отсутствии необходимых вышеизложенных условий, Продавец имеет право принять решение о невозможности отгрузки Товара по указанному Покупателем адресу, о чем уведомляет Покупателя.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3.7</div>
                                <div>
                                    В случае необеспечения Покупателем надлежащей приемки товара, повторная доставка (осуществляемая по вине Покупателя) производится в согласованные сторонами сроки за счет Покупателя на условиях предоплаты в соответствии с тарифами Продавца.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    <b>Доставка товара Перевозчиком:</b>
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4.1</div>
                                <div>
                                    Право собственности и риск и риск случайной гибели, утраты или повреждения товара переходит с Продавца на Покупателя или Перевозчика (в соответствии с заключенным между Покупателем и Перевозчиком договором) с момента передачи товара Перевозчику при подписании Сторонами товарной накладной и/или транспортной накладной и/или товарно-транспортной накладной или иного документа, свидетельствующего о передаче товара Перевозчику.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4.2</div>
                                <div>
                                    Обязательство по передаче товара Покупателю, в том числе п. 11.4.1., считается исполненным с момента передачи товара Перевозчику.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4 ml-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4.3</div>
                                <div>
                                    Стоимость доставки товара в рамках каждого заказа рассчитывается исходя из веса/габаритов всех заказанных товаров, адреса доставки заказа, расценок перевозчика и оплачивается Покупателем Перевозчику самостоятельно. Стоимость доставки не входит в цену товара.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Покупатель обязан принять товар по количеству и ассортименту в момент его приемки.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    При получении товара Покупатель или Представитель должен в присутствии представителя Продавца или Перевозчика проверить соответствие полученного товара по наименованию, количеству, ассортименту, качеству, комплектности заказанному товару.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">7</div>
                                <div>
                                    Покупатель или Представитель при приемке товара подтверждает своей подписью в документе о получении товара, что не имеет претензий к внешнему виду и комплектности товара.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">12. ГАРАНТИИ НА ТОВАР</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Гарантийный срок эксплуатации на товар устанавливает производитель. Срок гарантии указывается на сайте.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Гарантийный срок не распространяется на товар, имеющий повреждения, возникшие в результате:
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-2 ml-4">
                                <div className="button-gradient text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">a</div>
                                <div>
                                    нарушения Покупателем правил эксплуатации
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-2 ml-4">
                                <div className="button-gradient text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">b</div>
                                <div>
                                    использования товара не по назначению
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-2 ml-4">
                                <div className="button-gradient text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">c</div>
                                <div>
                                    действий, направленных на повреждение или уничтожение товара, действий непреодолимой силы
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-2 ml-4">
                                <div className="button-gradient text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">d</div>
                                <div>
                                    a так же на товар, имеющий механические повреждения, следы самостоятельного ремонта или изменения конструкции.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">13. ВОЗВРАТ ТОВАРА</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Покупатель вправе отказаться от товара в любое время до его передачи, а после передачи товара - в течение семи дней, в порядке и на условиях, предусмотренных Законом «О защите прав потребителей».

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид (упаковка), потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Покупатель не вправе отказаться от товара надлежащего качества, имеющего индивидуально- определенные свойства, если указанный товар может быть использован исключительно приобретающим его Покупателем (в т.ч. не стандартные (по желанию Покупателя) размеры и др.) а также от Товара цена которого указана за метраж.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Возврат товара, в случаях, предусмотренных законом и настоящим Договором, производится по адресу г. Оренбург, пр. Автоматики д. 10/3.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    При отказе Покупателя от товара надлежащего качества Продавец возвращает ему сумму, уплаченную в соответствии с договором, за исключением расходов Продавца на осуществление  возврата суммы внесенной им предоплаты по заказу и расходов на доставку от Покупателя возвращенного товара, не позднее чем через 10 дней, с даты предъявления Покупателем соответствующего требования.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    В случае, если возврат суммы осуществляется не одновременно с возвратом товара, возврат указанной суммы осуществляется Продавцом путем перечисления на банковский счет Покупателя.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">7</div>
                                <div>
                                    Указанный в настоящем пункте способ возврата денежных средств может использоваться Продавцом и в иных случаях возврата денежных средств, предусмотренных настоящим договором и законодательством РФ.

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">14. ПРОЧИЕ УСЛОВИЯ</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    К отношениям между Покупателем и Продавцом применяется законодательство Российской Федерации.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    При необходимости Продавец и Покупатель вправе в любое время оформить договор купли-продажи товара в форме письменного двухстороннего соглашения, не противоречащего положениям настоящей оферты.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Требования Покупателя об устранении недостатков товара подлежат удовлетворению в течение 45 календарных дней с момента получения Продавцом указанного требования. Иные требования Покупателя подлежат удовлетворению в сроки, установленные действующим законодательством РФ.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    В случае возникновения вопросов и претензий со стороны Покупателя, он должен обратиться в Центр обслуживания клиентов по телефону, указанному на сайте или по e-mail: info@leeblock.ru

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Настоящий договор вступает в силу с даты акцепта Покупателем настоящей оферты и действует до полного исполнения обязательств Сторонами.

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    Интернет-магазин оставляет за собой право расширять и сокращать товарное предложение на сайте, регулировать доступ к покупке любых товаров, а также приостанавливать или прекращать продажу любых товаров по своему собственному усмотрению.

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">15. АДРЕС И РЕКВИЗИТЫ ПРОДАВЦА</h2>
                        <p className="font-bold mb-4">Индивидуальный предприниматель Аблизина Валерия Валерьевна</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="font-bold p-2">ИНН</td>
                                    <td className="p-2">165034838418</td>
                                </tr>
                                <tr>
                                    <td className="font-bold p-2">ОГРНИП</td>
                                    <td className="p-2">324169000163572</td>
                                </tr>
                                <tr>
                                    <td className="font-bold p-2">ОКВЭД</td>
                                    <td className="p-2">63.91, 47.11, 47.19, 47.43, 47.91, 47.99, 63.11, 63.12, 63.99</td>
                                </tr>
                                <tr>
                                    <td className="font-bold p-2">Юридический адрес банка</td>
                                    <td className="p-2">127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26</td>
                                </tr>
                                <tr>
                                    <td className="font-bold p-2">Банк</td>
                                    <td className="p-2">АО «ТБанк»</td>
                                </tr>
                                <tr>
                                    <td className="font-bold p-2">Расчетный счет</td>
                                    <td className="p-2">40802810100006691714</td>
                                </tr>
                                <tr>
                                    <td className="font-bold p-2">Кор/ счет</td>
                                    <td className="p-2">30101810145250000974</td>
                                </tr>
                                <tr>
                                    <td className="font-bold p-2">БИК</td>
                                    <td className="p-2">044525974</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
            <Help />
        </>
    )
}

export default Agreement