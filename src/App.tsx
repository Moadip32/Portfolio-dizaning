import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  Home,
  Mail,
  MessageCircle,
  Palette,
  Phone,
  Ruler,
  Send,
  Sofa,
  Sparkles,
} from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { useInViewAnimation } from './hooks/useInViewAnimation';

const contacts = {
  phone: '8 917 8066592',
  phoneHref: 'tel:+79178066592',
  email: 'perez_lenz@mail.ru',
  emailHref: 'mailto:perez_lenz@mail.ru',
  whatsapp:
    'https://api.whatsapp.com/send/?phone=89178066592&text=Hello%21+I%27d+like+to+place+an+order.&type=phone_number&app_absent=0',
  instagram: 'https://www.instagram.com/perechneva_designer',
  vk: 'https://vk.com/perechneva_designer',
  telegram: 'https://t.me/perechneva_designer',
};

const serviceImages = [
  'https://static.tildacdn.pub/tild6432-3538-4435-a362-626535313335/Slice1Copy3.png',
  'https://static.tildacdn.pub/tild3666-3438-4036-b537-393035633031/Slice1Copy4.png',
  'https://static.tildacdn.pub/tild6635-3366-4362-b539-353536306363/Slice1Copy5.png',
];

const reviewImages = [
  'https://static.tildacdn.pub/tild3136-6363-4164-a136-313337316633/__.png',
  'https://static.tildacdn.pub/tild3038-3539-4537-a639-343463383761/_1.png',
  'https://static.tildacdn.pub/tild3238-6163-4261-b362-356433326235/_2.png',
  'https://static.tildacdn.pub/tild6535-6635-4866-b935-313930373861/_3.png',
];

const portfolioProjects = [
  {
    title: 'Проект двухуровневой квартиры',
    location: 'г. Уфа',
    description:
      'Индивидуальный подход: балкон объединен с гостиной, несущая стена превращена в эффектный камин, а телезона выполнена с натуральным камнем и скрытой подсветкой.',
    details:
      'Для хозяйки предусмотрены рабочее место и кресло-качалка. Стены подготовлены под покраску и украшены молдингами, а декоративные ниши подчеркивают коллекционные акценты.',
    images: [
      'https://static.tildacdn.pub/tild3832-6564-4137-b432-343238656432/qSSnAehcsp_RGR2QWS5E.jpg',
      'https://static.tildacdn.pub/tild3836-6362-4664-b863-343439353364/ce2389f7-6866-4a94-a.jpg',
      'https://static.tildacdn.pub/tild3463-6131-4466-a366-393932613930/ZorZHTKKSZ1GgIZasDWV.jpg',
    ],
  },
  {
    title: 'Проект дома',
    location: 'Старо Надеждино',
    description: 'Визуализация спальни для молодого человека: спокойная база, ясная планировка и выразительные детали.',
    images: [
      'https://static.tildacdn.pub/tild6336-3037-4934-b236-666138636630/_WhatsApp_2024-02-06.jpg',
      'https://static.tildacdn.pub/tild3233-3935-4336-a563-623866353162/_WhatsApp_2024-02-06.jpg',
      'https://static.tildacdn.pub/tild6664-3461-4932-b131-373138656432/_WhatsApp_2024-02-06.jpg',
    ],
  },
  {
    title: 'Проект дома',
    location: 'п. Нагаево',
    description: 'Визуализация спальни для семейной пары: дерзко, ярко и вкусно.',
    images: [
      'https://static.tildacdn.pub/tild3661-6630-4034-b932-353231373737/ChatGPT_Image_7__202.png',
      'https://static.tildacdn.pub/tild3562-3863-4963-a437-316537373266/ChatGPT_Image_27__20.png',
      'https://static.tildacdn.pub/tild3566-3330-4665-b830-633862366132/ChatGPT_Image_27__20.png',
    ],
  },
  {
    title: 'Проект дома',
    location: 'г. Благовещенск РБ',
    description:
      'Визуализация кухни-гостиной для молодой семьи в спокойных природных оттенках и натуральных материалах.',
    images: [
      'https://static.tildacdn.pub/tild6638-6533-4238-b630-323434373838/gCWxjjWxlGjmQePMsxHT.jpg',
      'https://static.tildacdn.pub/tild3463-6330-4663-b762-366239646566/UrYIIWfxdYXyPRCwXbTh.jpg',
      'https://static.tildacdn.pub/tild3261-3936-4637-a233-346238313239/vPNzIJZwq39nAqfGJjri.jpg',
    ],
  },
  {
    title: 'Проект трехкомнатной квартиры',
    location: 'ЖК «Венский лес»',
    description: 'Визуализация кухни-гостиной для молодой семьи: мягкая цветовая гамма и продуманная функциональность.',
    images: [
      'https://static.tildacdn.pub/tild6238-3730-4666-b639-373262363232/92e75d13-41ca-4e29-8.jpg',
      'https://static.tildacdn.pub/tild3131-6130-4435-b737-373238373962/64e5fee1-da75-4315-9.jpg',
      'https://static.tildacdn.pub/tild3536-6564-4062-b931-386266653336/photo.png',
    ],
  },
  {
    title: 'Проект салона красоты',
    location: 'г. Уфа',
    description: 'Реализованный проект салона перманентного макияжа и наращивания ресниц.',
    images: [
      'https://static.tildacdn.pub/tild6132-3235-4538-b764-336235353766/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild6264-6632-4538-b565-373962626466/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild6639-6434-4431-b532-383165633735/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild6532-3934-4664-b133-393433363335/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild3232-3034-4533-b961-636161613064/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild3939-6138-4862-b633-616133353163/photo_52376881194348.jpg',
    ],
  },
  {
    title: 'Проект двухэтажного коттеджа',
    location: 'г. Благовещенск РБ',
    description: 'Реализованный проект с визуализациями кухни-гостиной и спальни.',
    images: [
      'https://static.tildacdn.pub/tild3335-6261-4664-b335-626439653134/photo_53098257888467.jpg',
      'https://static.tildacdn.pub/tild3136-6463-4461-b064-323764613532/IMG_20260219_151640_.jpg',
      'https://static.tildacdn.pub/tild6365-6531-4638-b937-633638346466/IMG_20260314_152418_.jpg',
      'https://static.tildacdn.pub/tild6230-3764-4835-b937-393762313534/IMG_20260314_150313_.jpg',
      'https://static.tildacdn.pub/tild3266-3738-4430-a566-376433633762/IMG_20251027_132045_.png',
      'https://static.tildacdn.pub/tild6235-3262-4962-b835-383932366430/photo_53098257888467.jpg',
      'https://static.tildacdn.pub/tild3632-3265-4235-b863-373666666337/IMG_20260314_152418_.jpg',
      'https://static.tildacdn.pub/tild3466-3337-4335-b833-373732663431/IMG-20251119-WA0003.jpg',
      'https://static.tildacdn.pub/tild3738-6435-4338-b539-623264666432/photo_53098257888467.jpg',
      'https://static.tildacdn.pub/tild6131-6461-4732-a431-333137323765/photo_53098257888467.jpg',
      'https://static.tildacdn.pub/tild3733-3531-4964-b734-643531626463/photo_53098257888467.jpg',
    ],
  },
  {
    title: 'Проект трехэтажного коттеджа',
    location: 'г. Благовещенск',
    description: 'Реализованный проект большого частного дома с комплексной проработкой помещений.',
    images: [
      'https://static.tildacdn.pub/tild3963-3562-4463-b965-643962336562/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild3461-3938-4230-b938-326662353637/4c328fa6-d96f-4af4-9.jpg',
      'https://static.tildacdn.pub/tild6363-3761-4365-b338-366530626330/4e616f0c-fc37-42ed-a.jpg',
      'https://static.tildacdn.pub/tild3466-3864-4563-b336-376136343738/f63ca6b1-6fe8-4487-a.jpg',
      'https://static.tildacdn.pub/tild6664-3664-4462-b430-616161656362/ba9eaee5-c7c8-44cc-a.jpg',
      'https://static.tildacdn.pub/tild3361-3631-4639-a162-346139656235/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild3966-6533-4563-b763-346634643231/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild3533-3636-4466-b937-373436353632/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild6338-3663-4365-b161-306537333965/photo_52376881194348.jpg',
      'https://static.tildacdn.pub/tild6163-6134-4439-a230-393666373336/5432a101-4103-4eb8-b.jpg',
    ],
  },
];

const marqueeImages = portfolioProjects.flatMap((project) => project.images).slice(0, 16);

const reasons = [
  'Инженер-дизайнер с высшим техническим образованием и опытом работы с разными материалами.',
  'Функциональные и эстетичные интерьеры для квартир, частных домов и коммерческих помещений.',
  'Тщательное планирование каждого проекта с учетом бюджета, сроков и ваших пожеланий.',
];

const serviceCards = [
  {
    title: 'Интерьер квартир',
    text: 'Проектирование больших и маленьких квартир: уют, эргономика и продуманная логика каждой комнаты.',
    icon: Sofa,
    image: serviceImages[0],
  },
  {
    title: 'Интерьер частных домов',
    text: 'Дизайн для частных домов любого размера и планировки: от общей концепции до точных решений.',
    icon: Home,
    image: serviceImages[1],
  },
  {
    title: 'Авторский надзор',
    text: 'Сопровождение проекта: подрядчики, инженерные работы, поставщики и контроль реализации.',
    icon: ClipboardCheck,
    image: serviceImages[2],
  },
];

const tariffs = [
  {
    title: 'Планировочное решение',
    deadline: 'Срок: от 14 дней.',
    items: [
      'Выезд и консультация на объекте.',
      'Комплект рабочей документации: обмерный план-схема, демонтаж, возводимые перегородки, расстановка мебели с размерами в 2-3 вариантах, 3D виды.',
    ],
  },
  {
    title: 'Технический проект',
    deadline: 'Срок: от 1-2 месяцев.',
    items: [
      'Выезд и консультация на объекте.',
      'Рабочая документация: обмеры, демонтаж, перегородки, мебель, 3D виды, теплые полы, сантехника, электрика, отделка стен и развертки всех помещений.',
      'Ведомости.',
      'Подбор материалов.',
      'Концепция будущего интерьера.',
    ],
  },
  {
    title: 'Полный дизайн-проект',
    deadline: 'Срок: от 2-3 месяцев.',
    items: ['Выезд и консультация на объекте.', 'Комплект рабочей схемной документации.', 'Визуализации вашего помещения.'],
  },
];

const processSteps = [
  {
    title: 'Встреча',
    items: ['Подписание договора.', 'Заполнение ТЗ.', 'Планировочное решение.'],
  },
  {
    title: 'Разработка дизайна интерьера',
    items: ['Составление мудбордов и коллажей.', 'Определение концепции.', 'Подбор материалов.', '3D визуализация при необходимости.'],
  },
  {
    title: 'Рабочая документация',
    items: ['Создание рабочей документации для проекта.', 'Ведомости и спецификации.', 'Комплектация при необходимости.'],
  },
  {
    title: 'Авторское сопровождение',
    items: [
      'Помощь в реализации проекта таким, каким он был задуман.',
      'Контроль подрядчиков, решение вопросов во время стройки и переговоры с поставщиками.',
    ],
  },
];

function Reveal({
  children,
  className = '',
  delay = '0.1s',
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#14251f]/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f5d50] shadow-soft">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </p>
  );
}

function ContactButton({
  children,
  href = '#contacts',
  variant = 'primary',
}: {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'light';
}) {
  const classes =
    variant === 'primary'
      ? 'bg-[#173f35] text-white shadow-olive hover:bg-[#102d26]'
      : 'bg-white text-[#173f35] shadow-soft hover:bg-[#f7faf8]';

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2 rounded-full border border-[#14251f]/10 bg-white/90 px-4 py-3 shadow-soft backdrop-blur md:px-6">
      <nav className="flex items-center justify-between gap-4">
        <a href="#top" className="text-sm font-bold uppercase tracking-[0.18em] text-[#14251f]">
          Interior Studio
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-[#14251f] md:flex">
          <a href="#portfolio" className="transition hover:text-[#2f5d50]">
            Портфолио
          </a>
          <a href="#services" className="transition hover:text-[#2f5d50]">
            Услуги
          </a>
          <a href="#process" className="transition hover:text-[#2f5d50]">
            Этапы
          </a>
          <a href="#reviews" className="transition hover:text-[#2f5d50]">
            Отзывы
          </a>
          <a href="#contacts" className="transition hover:text-[#2f5d50]">
            Контакты
          </a>
        </div>
        <a
          href="#contacts"
          className="inline-flex items-center gap-2 rounded-full bg-[#173f35] px-4 py-2 text-sm font-semibold text-white shadow-olive transition hover:-translate-y-0.5 hover:bg-[#102d26]"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">Заказать проект</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 pb-16 pt-32 md:pt-28">
      <Reveal className="max-w-3xl">
        <SectionLabel>Студия дизайна интерьера</SectionLabel>
        <h1 className="text-[44px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#14251f] md:text-[72px] lg:text-[92px]">
          Интерьеры, в которых удобно жить и красиво работать
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[#52615c]">
          Функциональные дизайнерские решения для любых пространств: от маленьких квартир до больших коммерческих
          площадей.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ContactButton>
            Заказать проект
            <ArrowRight className="h-4 w-4" />
          </ContactButton>
          <ContactButton href="#portfolio" variant="light">
            Смотреть портфолио
          </ContactButton>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-3 text-[#14251f]">
          <div className="rounded-3xl border border-[#14251f]/10 bg-white p-4 shadow-soft">
            <p className="text-2xl font-semibold">8</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#66736f]">проектов</p>
          </div>
          <div className="rounded-3xl border border-[#14251f]/10 bg-white p-4 shadow-soft">
            <p className="text-2xl font-semibold">3</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#66736f]">услуги</p>
          </div>
          <div className="rounded-3xl border border-[#14251f]/10 bg-white p-4 shadow-soft">
            <p className="text-2xl font-semibold">4</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#66736f]">этапа</p>
          </div>
        </div>
      </Reveal>

    </section>
  );
}

function Marquee() {
  const images = [...marqueeImages, ...marqueeImages];

  return (
    <section className="overflow-hidden py-8" aria-label="Лента проектов">
      <div className="flex w-max animate-marquee-interior gap-5">
        {images.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            loading="lazy"
            className="h-48 w-72 rounded-[28px] object-cover shadow-soft md:h-72 md:w-[440px]"
          />
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="max-w-3xl">
        <SectionLabel>Почему я?</SectionLabel>
        <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.03em] text-[#14251f] md:text-[56px]">
          Красивый интерьер начинается с точной инженерной логики
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {reasons.map((reason, index) => (
          <Reveal key={reason} delay={`${0.1 + index * 0.08}s`}>
            <article className="h-full rounded-[32px] border border-[#14251f]/10 bg-white p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f1ed] text-[#173f35]">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <p className="mt-6 text-base leading-7 text-[#52615c]">{reason}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <SectionLabel>Мои услуги</SectionLabel>
          <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.03em] text-[#14251f] md:text-[56px]">
            Дизайн для квартир, домов и коммерческих пространств
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-[#52615c]">
          От первой консультации и планировочного решения до авторского надзора и переговоров с поставщиками.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {serviceCards.map(({ icon: Icon, ...service }, index) => (
          <Reveal key={service.title} delay={`${0.1 + index * 0.08}s`}>
            <article className="group h-full overflow-hidden rounded-[36px] border border-[#14251f]/10 bg-white shadow-soft">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#173f35] text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#14251f]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#52615c]">{service.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="max-w-3xl">
        <SectionLabel>Портфолио</SectionLabel>
        <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.03em] text-[#14251f] md:text-[56px]">
          Реализованные проекты и визуализации
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col gap-16">
        {portfolioProjects.map((project, index) => (
          <Reveal key={`${project.title}-${project.location}`} delay={`${0.08 + (index % 3) * 0.08}s`}>
            <article className="grid gap-6 md:grid-cols-[0.42fr_0.58fr] md:gap-10">
              <div className="md:sticky md:top-28 md:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f5d50]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#14251f] md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-lg font-medium text-[#2f5d50]">{project.location}</p>
                <p className="mt-5 text-base leading-7 text-[#52615c]">{project.description}</p>
                {project.details ? <p className="mt-4 text-base leading-7 text-[#52615c]">{project.details}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.map((image, imageIndex) => (
                  <a
                    key={image}
                    href={image}
                    target="_blank"
                    rel="noreferrer"
                    className={`group relative overflow-hidden rounded-[28px] bg-[#eef4f1] shadow-soft ${
                      imageIndex === 0 || project.images.length === 3 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title}, ${project.location}`}
                      loading="lazy"
                      className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                        imageIndex === 0 || project.images.length === 3 ? 'h-[360px] md:h-[500px]' : 'h-72'
                      }`}
                    />
                    <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#173f35] opacity-0 shadow-soft transition group-hover:opacity-100">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="max-w-3xl">
        <SectionLabel>Услуги и тарифы</SectionLabel>
        <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.03em] text-[#14251f] md:text-[56px]">
          Выберите формат дизайн-проекта
        </h2>
        <p className="mt-5 text-base leading-7 text-[#52615c]">
          Свяжитесь со мной, чтобы обсудить объект, сроки и подходящий объем работ.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tariffs.map((tariff, index) => (
          <Reveal key={tariff.title} delay={`${0.1 + index * 0.08}s`}>
            <article className={`flex h-full flex-col rounded-[36px] p-7 shadow-soft ${index === 1 ? 'bg-[#173f35] text-white' : 'border border-[#14251f]/10 bg-white text-[#14251f]'}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#173f35] shadow-soft">
                {index === 0 ? <Ruler className="h-5 w-5" /> : index === 1 ? <BriefcaseBusiness className="h-5 w-5" /> : <Palette className="h-5 w-5" />}
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em]">{tariff.title}</h3>
              <ul className="mt-6 flex flex-1 flex-col gap-4">
                {tariff.items.map((item) => (
                  <li key={item} className={`flex gap-3 text-sm leading-6 ${index === 1 ? 'text-white/82' : 'text-[#52615c]'}`}>
                    <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${index === 1 ? 'text-white' : 'text-[#2f5d50]'}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-7 text-sm font-semibold ${index === 1 ? 'text-white' : 'text-[#173f35]'}`}>{tariff.deadline}</p>
              <ContactButton variant={index === 1 ? 'light' : 'primary'}>
                Заказать проект
                <ArrowRight className="h-4 w-4" />
              </ContactButton>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="max-w-3xl">
        <SectionLabel>Этапы работы</SectionLabel>
        <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.03em] text-[#14251f] md:text-[56px]">
          От первой встречи до авторского сопровождения
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <Reveal key={step.title} delay={`${0.1 + index * 0.08}s`}>
            <article className="h-full rounded-[34px] border border-[#14251f]/10 bg-white p-7 shadow-soft">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f1ed] text-lg font-semibold text-[#173f35]">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#14251f]">{step.title}</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {step.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#52615c]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2f5d50]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-20">
      <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <SectionLabel>Отзывы</SectionLabel>
          <h2 className="text-[36px] font-semibold leading-tight tracking-[-0.03em] text-[#14251f] md:text-[56px]">
            Сообщения клиентов после работы
          </h2>
        </div>
        <p className="max-w-md text-base leading-7 text-[#52615c]">
          Все отзывы перенесены с исходного сайта Tilda. Нажмите на любой скриншот, чтобы открыть его крупнее.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {reviewImages.map((image, index) => (
          <Reveal key={image} delay={`${0.1 + index * 0.08}s`}>
            <a
              href={image}
              target="_blank"
              rel="noreferrer"
              className="block h-full overflow-hidden rounded-[32px] border border-[#14251f]/10 bg-white p-3 shadow-soft transition hover:-translate-y-1"
            >
              <img
                src={image}
                alt={`Отзыв клиента ${index + 1}`}
                loading="lazy"
                className="w-full rounded-[24px] bg-[#f7faf8] object-contain"
              />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="px-6 py-20">
      <Reveal className="mx-auto grid max-w-7xl overflow-hidden rounded-[44px] bg-[#173f35] text-white shadow-large md:grid-cols-[0.9fr_1.1fr]">
        <div className="p-8 md:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Контакты</p>
          <h2 className="mt-4 text-[36px] font-semibold leading-tight tracking-[-0.03em] md:text-[58px]">
            Обсудим ваш будущий интерьер
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
            Напишите в удобный мессенджер или отправьте письмо. Я помогу выбрать формат проекта и расскажу, с чего начать.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-base">
            <a href={contacts.phoneHref} className="inline-flex items-center gap-3 transition hover:text-white/75">
              <Phone className="h-5 w-5" />
              Телефон {contacts.phone}
            </a>
            <a href={contacts.emailHref} className="inline-flex items-center gap-3 transition hover:text-white/75">
              <Mail className="h-5 w-5" />
              Почта: {contacts.email}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactButton href={contacts.whatsapp} variant="light">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </ContactButton>
            <ContactButton href={contacts.telegram} variant="light">
              <Send className="h-4 w-4" />
              Telegram
            </ContactButton>
            <ContactButton href={contacts.vk} variant="light">
              <ExternalLink className="h-4 w-4" />
              VK
            </ContactButton>
            <ContactButton href={contacts.instagram} variant="light">
              <ExternalLink className="h-4 w-4" />
              Instagram
            </ContactButton>
          </div>
        </div>
        <div className="grid min-h-[440px] grid-cols-2 gap-3 p-3">
          <img src={portfolioProjects[0].images[0]} alt="Интерьер гостиной" loading="lazy" className="h-full rounded-[34px] object-cover" />
          <img src={portfolioProjects[6].images[1]} alt="Реализованный интерьер" loading="lazy" className="h-full rounded-[34px] object-cover" />
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-10 pt-4 text-[#14251f] md:flex-row md:items-center md:justify-between">
      <p className="text-sm">Студия дизайна интерьера</p>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href={contacts.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#2f5d50]">
          Instagram
          <ExternalLink className="h-4 w-4" />
        </a>
        <a href={contacts.vk} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#2f5d50]">
          VK
          <ExternalLink className="h-4 w-4" />
        </a>
        <a href={contacts.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#2f5d50]">
          Telegram
          <ExternalLink className="h-4 w-4" />
        </a>
        <a href={contacts.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-[#2f5d50]">
          WhatsApp
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(localStorage.getItem('privacy-and-cookie-consent') !== 'accepted');
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('privacy-and-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-[28px] border border-[#14251f]/10 bg-white/95 p-5 text-[#14251f] shadow-large backdrop-blur md:flex-row md:items-center md:justify-between md:p-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold">Политика конфиденциальности и cookies</p>
          <p className="mt-2 text-sm leading-6 text-[#52615c]">
            Продолжая использовать сайт, вы соглашаетесь с обработкой персональных данных и использованием cookies для
            корректной работы сайта и улучшения сервиса.
          </p>
        </div>
        <button
          type="button"
          onClick={acceptConsent}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#173f35] px-7 py-3 text-sm font-semibold text-white shadow-olive transition duration-300 hover:-translate-y-0.5 hover:bg-[#102d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#173f35]/30"
        >
          Принять
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white font-comfortaa text-[#14251f] antialiased">
      <Header />
      <Hero />
      <Marquee />
      <WhySection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ProcessSection />
      <ReviewsSection />
      <ContactsSection />
      <Footer />
      <CookieConsent />
    </main>
  );
}
