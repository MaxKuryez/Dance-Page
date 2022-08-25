import Cookies from 'universal-cookie';

const cookies = new Cookies();
let currentCookie = cookies.get('Lang') || 'ru';

//Gnav content

const contentGnavLang = {
  ru: {
    aboutMe: 'МОЯ ИСТОРИЯ',
    catalogue: 'МОИ РАБОТЫ',
    process: 'ПРОЦЕСС',
    contactMe: 'КОНТАКТ',
  },
  en: {
    aboutMe: 'MY STORY',
    catalogue: 'MY WORK',
    process: 'PROCESS',
    contactMe: 'CONTACT ME',
  },
}

//Footer content

const contentFooterLang = {
  ru: {
    email: ['Почта: ', <a href='mailto:test@test.mail'>test@test.mail</a>],
    phone: ['Телефон: ', <a href='tel:+71235678'>+7 123 56 78</a>],
  },
  en: {
    email: ['Email: ', <a href='mailto:test@test.mail'>test@test.mail</a>],
    phone: ['Phone: ', <a href='tel:+71235678'>+7 123 56 78</a>],
  },
}

//Not found content

const notFoundLang = {
  ru: {
    header: ['Страница не найдена', <h1>404</h1>],
  },
  en: {
    header: ['Page not found', <h1>404</h1>],
  },
}

//Home Page content

const homepageContentLang = {
  ru: {
    header: 'Бальные платья, которые расцветают на паркете',
    topBanner: [' YULIA KURYEZ', <br/> ,'Ballroom Dresses',],
    banner1: [<h1>Пошив юбок</h1>, 'Пошив юбки на заказ — это возможность получить качественную красивую вещь, идеально сидящую на вашей фигуре. ',
      'В ателье Гардероб вы можете сшить юбку любой модели по вашим меркам. ',
      'Просто расскажите нам, изделие какого фасона вы хотите получить, и мы воплотим вашу идею!'
    ],
    banner2: ['Чтобы юбка отлично сидела и подходила вам, мы предложим свои идеи по улучшению модели, ',
      'а также большой выбор тканей различных расцветок и фактур. Мы позаботимся о красивой внешней и внутренней отделке изделия ',
      '— ведь качественная вещь хороша во всем! В результате вы получите удобную и красивую юбку, отвечающую вашему вкусу.'
    ],
    header2: 'Платья, выпущенные на паркет',
    priceHeader: 'Цены',
    priceList: {'list' : [
      {
        name: 'Платье 1',
        price: '5000.00 руб.'
      },
      {
        name: 'Платье 2',
        price: '200.00 руб.'
      },
      {
        name: 'Платье 3',
        price: '1300.00 руб.'
      },
      {
        name: 'Платье 4',
        price: '1200.00 руб.'
      },
      {
        name: 'Платье 5',
        price: '800.00 руб.'
      },
      {
        name: 'Платье 6',
        price: '700.00 руб.'
      }
    ]}
  },
  en: {
    header: 'Ball dresses that bloom on the floor',
    topBanner: [' YULIA KURYEZ', <br/> ,'Ballroom Dresses',],
    banner1: [<h1>Sewing dresses</h1>, 'Sewing skirts to order is an opportunity to get a high-quality beautiful thing that ',
    'fits perfectly on your figure. At the Wardrobe atelier you can sew a skirt of any model according to your measurements. ',
    'Just tell us what style you want and we\'ll make your idea come true!'
    ],
    banner2: ['In order for the skirt to fit and fit you perfectly, we will offer our ideas for improving the model, ',
    'as well as a large selection of fabrics of various colors and textures. We will take care of the beautiful exterior and interior ',
    'decoration of the product - after all, a quality thing is good in everything! As a result, you will get a comfortable ',
    'and beautiful skirt that suits your taste.'
    ],
    header2: 'Dresses released on the parquet',
    priceHeader: 'Prices',
    priceList: {'list' : [
      {
        name: 'Dress 1',
        price: '5000.00 RUB'
      },
      {
        name: 'Dress 2',
        price: '200.00 RUB'
      },
      {
        name: 'Dress 3',
        price: '1300.00 RUB'
      },
      {
        name: 'Dress 4',
        price: '1200.00 RUB'
      },
      {
        name: 'Dress 5',
        price: '800.00 RUB'
      },
      {
        name: 'Dress 6',
        price: '700.00 RUB'
      }
    ]}
  },
}

//About us content

const aboutUsContentLang = {
  ru: {
    header: 'Моя История',
    subHeader: ['Мы в YULIA KURYEZ Ballroom Dresses', <br/>, 'уже 8 лет шьём бальные платья для соревнований'],
    banner1: [<h1>Юлия Курьез - основатель и главный дизайнер YULIA KURYEZ Ballroom Dresses.</h1>,
      'Расскажу коротко обо мне и моих платьях - нам  придется оглянуться назад. Все началось с семьи и детей. ',
      'Моему сыну было 6 лет, когда он достаточно твердо завил о желании заниматься бальными танцами. ', <br/>, <br/>,
      'Время шло, сын занимался в клубе и забирала я его с тренировок уже с младшей дочерью… Надо ли говорить, ',
      'что не прошо и года, как в танцах у меня уже было двое детей! Да, конечно, первое платье для дочери было ',
      'приобретено в магазине, но в какой-то момент, после первых же соревнваний, захотелось сшить рейтинговое платье ',
      'самой – нужного фасона и цвета.'
    ],
    banner2: ['Платье получилось – оно было ярким, подходило по цветотипу и фактуре, дочь сияла и тренеры были доволны. ',
      'Вот и вся предыстория, расказанная максимально емко.', <br/>, <br/>,
      'Мои дети, оттанцевав 10 лет, пошли другими путями в жизни, ',
      'а я занимаюсь дизайном и пошивом бальных платьев и резвычайно рада этому обстоятелству! В декабре 2019 года я ',
      'завершила второе всшее образование и стала дипломированным специалистом – Стилист-имиджмейкер широкого профиля. ',
      'Конечно, курс чрезвычайно помогает мне а работе.'
    ],
  },
  en: {
    header: 'My Story',
    subHeader: ['YULIA KURYEZ Ballroom Dresses', <br/>, 'we have been sewing ball gowns for competitions for 8 years'],
    banner1: [<h1>Yulia Kuryez - founder and chief designer YULIA KURYEZ Ballroom Dresses.</h1>,
    'I\'ll tell you briefly about me and my dresses - we\'ll have to look back. It all started with family and children. ',
    'My son was 6 years old when he quite firmly declared his desire to take up ballroom dancing. ', <br/>, <br/>,
    'Time passed, my son was engaged in the club and I took him from training already with my youngest daughter... Needless to say, ',
    'that not even a year later, as in dancing, I already had two children! Yes, of course, the first dress for the daughter was ',
    'purchased in a store, but at some point, after the very first competition, I wanted to sew a rating dress',
    'most - the desired style and color.'
    ],
    banner2: ['The dress turned out - it was bright, it matched the color type and texture, the daughter shone and the coaches were happy. ',
    'That\'s the whole backstory, told as succinctly as possible.', <br/>, <br/>,
    'My children, after dancing for 10 years, have taken other paths in life,',
    'and I am engaged in the design and tailoring of ball gowns and I am extremely pleased with this circumstance! In December 2019 I',
    'completed her second higher education and became a certified specialist - a stylist-image maker of a wide profile. ',
    'Of course, the course helps me immensely at work.'
    ],
  },
}

//Contact us content

const contactUsContentLang = {
  ru: {
    header: 'Сконтактируйтесь Со Мной',
    thanks: 'Спасибо за ваш вопрос!',
    name: 'Имя',
    surname: 'Фамилия',
    email: 'Электронная Почта',
    question: 'Вопрос',
    phone: 'Телефон',
    nameValidation: 'Это поле является обязательным!',
    surnameValidation: 'Это поле является обязательным!',
    emailValidation: 'Пожалуйста, введите почту в формате email@example.com.',
    questionValidation: 'Это поле является обязательным!',
    phoneValidation: 'Пожалуйста, введите телефон в формате 123456789.',
    submit: 'Задать вопрос',
    generalError: 'Что-то пошло не так.',
  },
  en: {
    header: 'Contact Me',
    thanks: 'Thank you for your question!',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    question: 'Question',
    phone: 'Phone',
    nameValidation: 'This field is required!',
    surnameValidation: 'This field is required!',
    emailValidation: 'Please, enter the email in such format: email@example.com.',
    questionValidation: 'This field is required!',
    phoneValidation: 'Please, enter the phone in such format: 123456789.',
    submit: 'Submit',
    generalError: 'Something went wrong!',
  },
}

//Catalogue content

const catalogueContentLang = {
  ru: {
    header: 'Мои Работы',
    firstCarousele: [
      {
        header: 'Первый слайд',
        copy: 'Пример описания под слайдом. Здест будет текст.',
      },
      {
        header: 'Второй слайд',
        copy: 'Пример описания под слайдом. Здест будет текст.',
      },
      {
        header: 'Третий слайд',
        copy: 'Пример описания под слайдом. Здест будет текст.',
      },
      {
        header: 'Четвертый слайд',
        copy: 'Пример описания под слайдом. Здест будет текст.',
      },
    ],
  },
  en: {
    header: 'My Work',
    firstCarousele: [
      {
        header: 'First slide label',
        copy: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
      {
        header: 'Second slide label',
        copy: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
      {
        header: 'Third slide label',
        copy: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
      {
        header: 'Fourth slide label',
        copy: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
    ],
  },
}

//Process content

const processContentLang = {
  ru: {
    header: 'Процесс',
      banner1: [<h1>Первый шаг</h1>, 'Вы можете заказать платье на заказ двумя способами: заполнив нашу онлайн-форму или отправив электронное',
      'письмо по адресу', 'sales@emcouture.com', <br/>, <br/>, 'Лучший способ начать — описать свое видение платья, о котором вы мечтаете. ',
      'Часто бывает полезно прикрепить свои фотографии или видео, где мы можем видеть вас как в танцевальной позе, так и стоящей прямо.',
      <br/>, 'На этом этапе вы также должны предоставить все размеры вашего тела (дюймы/см) и федерацию, в которой вы танцуете.'
    ],
    banner2: [<h1>Создание платья</h1>, 'Мы подберем наиболее подходящие и самые качественные материалы, декоративные детали',
    'Кристаллы Сваровски.', <br/>, 'Портнихи сошьют платье, а декораторы подберут украшения из кристаллов, учитывая ваши пожелания',
    'потребности и требования.', <br/>, <br/>, 'На протяжении всего процесса шитья наша команда будет регулярно присылать вам фотографии ',
    'процесса пошива одежды, чтобы вы могли убедиться, что это именно то платье, которое вы хотели.'
    ],
    banner3: [<h1>Доставка</h1>, 'Когда весь процесс будет завершен и платье будет одобрено вами, мы доставим его курьерской службой.',
    <br/>, 'Полная процедура от заказа до доставки занимает примерно 4 недели.',
    <br/>, 'Если это срочно, сообщите нам об этом в начале сотрудничества.',
    <br/>, 'Так мы сможем обеспечить требуемые сроки поставки товара.',
    <br/>, <br/>, 'Осталось только наслаждаться платьем своей мечты!'
    ],
  },
  en: {
    header: 'Process',
    banner1: [<h1>The first step</h1>, 'You can order a custom made dress in two ways: by filling our online form or sending an email to',
      'sales@emcouture.com', <br/>, <br/>, 'The best way to start is to describe the vision of the dress you are dreaming about. ',
      'It is often useful to attach your own pictures or videos, where we can see you both in a dance position and standing straight as well.',
      <br/>, 'At this stage you should also provide all of your body measurements (in/cm) and  federation you are dancing in.'
    ],
    banner2: [<h1>Creating the dress</h1>, 'We will select the most suitable and the highest quality materials, decorative details, ',
      'Swarovski crystals.', <br/>, 'Dressmakers will sew the dress and decorators select crystals decorations, considering your ',
      'needs and requirements.', <br/>, <br/>, 'During all the sewing process our team will regularly send you pictures of dressmaking progress ',
      'that you can make sure that it is your wanted dress.'
    ],
    banner3: [<h1>Delivery</h1>, 'When all the process are finished and the dress is approved by you, we will deliver it via courier service.',
      <br/>, 'The full procedure from the order to delivery takes approximately 4 weeks.',
      <br/>, 'If it is urgency, please let us know at the beginning of collaboration.',
      <br/>, 'In that way we will be able to ensure required delivery time of the product.',
      <br/>, <br/>, 'Only enjoying of your dream dress is left now!'
    ],
  },
}

const contentGnav      = contentGnavLang[currentCookie];
const contentFooter    = contentFooterLang[currentCookie];
const notFound         = notFoundLang[currentCookie];
const homepageContent  = homepageContentLang[currentCookie];
const aboutUsContent   = aboutUsContentLang[currentCookie];
const contactUsContent = contactUsContentLang[currentCookie];
const catalogueContent = catalogueContentLang[currentCookie];
const processContent   = processContentLang[currentCookie];



export {aboutUsContent, homepageContent, contactUsContent, catalogueContent, notFound, contentGnav, contentFooter, processContent};
