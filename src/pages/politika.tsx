import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Help from "../components/help";
import logo from '../assets/logoShort.svg'


interface IPolitika { }

const Politika: FC<IPolitika> = ({ }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'
    }, [])

    return (
        <>
            <header className="bg-white">
                <div className="max-w-7xl m-auto px-6 py-4">
                    <Link to={'/'}>
                        <img src={logo} alt="LeeBlock" className="h-10" />
                    </Link>
                </div>
            </header>
            <main className="bg-white py-6">
                <div className="max-w-4xl m-auto px-6 py-4">
                    <h1 className="text-4xl font-bold mb-10">Политика обработки персональных данных</h1>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-6 tablet:mb-8">Общие положения</h2>
                        <p className="text-md tablet:text-base font-semibold mb-4">
                            Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального
                            закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных
                            и меры по обеспечению безопасности персональных данных ИП Аблизина Валерия Валерьевна (далее – Оператор).
                        </p>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав
                                    и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав
                                    на неприкосновенность частной жизни, личную и семейную тайну.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика)
                                    применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта leeblock.ru.
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-8">Основные понятия, используемые в Политике</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Автоматизированная обработка персональных данных – обработка персональных
                                    данных с помощью средств вычислительной техники;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Блокирование персональных данных – временное прекращение обработки персональных данных
                                    (за исключением случаев, если обработка необходима для уточнения персональных данных);
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ
                                    и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу leeblock.ru;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Информационная система персональных данных — совокупность содержащихся в базах данных
                                    персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Обезличивание персональных данных — действия, в результате которых невозможно определить
                                    без использования дополнительной информации принадлежность персональных данных
                                    конкретному Пользователю или иному субъекту персональных данных;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">6</div>
                                <div>
                                    Обработка персональных данных – любое действие (операция) или совокупность действий (операций),
                                    совершаемых с использованием средств автоматизации или без использования таких средств с персональными
                                    данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение),
                                    извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование,
                                    удаление, уничтожение персональных данных;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">7</div>
                                <div>
                                    Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно
                                    или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных,
                                    а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих
                                    обработке, действия (операции), совершаемые с персональными данными;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">8</div>
                                <div>
                                    Персональные данные – любая информация, относящаяся прямо или косвенно к определенному
                                    или определяемому Пользователю веб-сайта leeblock.ru;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">9</div>
                                <div>
                                    Пользователь – любой посетитель веб-сайта leeblock.ru;

                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">10</div>
                                <div>
                                    Предоставление персональных данных – действия, направленные на раскрытие персональных
                                    данных определенному лицу или определенному кругу лиц;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">11</div>
                                <div>
                                    Распространение персональных данных – любые действия, направленные на раскрытие персональных
                                    данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными
                                    данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой
                                    информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа
                                    к персональным данным каким-либо иным способом;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">12</div>
                                <div>
                                    Трансграничная передача персональных данных – передача персональных данных на территорию
                                    иностранного государства органу власти иностранного государства, иностранному физическому
                                    или иностранному юридическому лицу;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">13</div>
                                <div>
                                    Уничтожение персональных данных – любые действия, в результате которых персональные данные
                                    уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных
                                    данных в информационной системе персональных данных и (или) результате которых уничтожаются
                                    материальные носители персональных данных.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-8">Оператор может обрабатывать следующие персональные данные Пользователя</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Фамилия, имя, отчество;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Электронный адрес;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Номера телефонов;
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie»)
                                    с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-8">Цели обработки персональных данных</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Цель обработки персональных данных Пользователя — информирование Пользователя посредством
                                    отправки электронных писем; предоставление доступа Пользователю к сервисам, информации и/или
                                    материалам, содержащимся на веб-сайте.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах,
                                    специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения
                                    информационных сообщений, направив Оператору письмо на адрес электронной почты info@leeblock.ru
                                    с пометкой «Отказ от уведомлениях о новых продуктах и услугах и специальных предложениях».
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат
                                    для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-8">Правовые основания обработки персональных данных</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки
                                    Пользователем самостоятельно через специальные формы, расположенные на сайте leeblock.ru. Заполняя
                                    соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает
                                    свое согласие с данной Политикой.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках
                                    браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-8">Порядок сбора, хранения, передачи и других видов обработки персональных данных</h2>
                        <p className="text-base font-semibold mb-4">
                            Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
                        </p>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Оператор обеспечивает сохранность персональных данных и принимает все возможные
                                    меры, исключающие доступ к персональным данным неуполномоченных лиц.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим
                                    лицам, за исключением случаев, связанных с исполнением действующего законодательства.
                                </div>

                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    В случае выявления неточностей в персональных данных, Пользователь может актуализировать их
                                    самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора
                                    info@leeblock.ru с пометкой «Актуализация персональных данных».
                                </div>

                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Срок обработки персональных данных является неограниченным. Пользователь может в любой момент
                                    отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством
                                    электронной почты на электронный адрес Оператора info@leeblock.ru с пометкой «Отзыв согласия на
                                    обработку персональных данных».
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-8">Трансграничная передача персональных данных</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться
                                    в том, что иностранным государством, на территорию которого предполагается осуществлять передачу
                                    персональных данных, обеспечивается надежная защита прав субъектов персональных данных.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Трансграничная передача персональных данных на территории иностранных государств, не отвечающих
                                    вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме
                                    субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения
                                    договора, стороной которого является субъект персональных данных.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-2xl font-bold mb-8">Заключительные положения</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки
                                    его персональных данных, обратившись к Оператору с помощью электронной info@leeblock.ru.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    В данном документе будут отражены любые изменения политики обработки персональных данных
                                    Оператором. Политика действует бессрочно до замены ее новой версией.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу leeblock.ru/politika.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
            <Help />
        </>
    )
}

export default Politika