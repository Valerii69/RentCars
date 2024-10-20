import { InstagramIcon, TelegramIcon } from '@/public/icons';

export const payLogoList = [
  {
    alt: 'Blik Icon',
    src: '/images/blikIcon.png',
    height: '24',
    width: '45',
  },
  {
    alt: 'MasterCard Icon',
    src: '/images/masterCardIcon.png',
    height: '24',
    width: '35',
  },
  { alt: 'Visa Icon', src: '/images/visaIcon.png', height: '24', width: '43' },
  {
    alt: 'GooglePay Icon',
    src: '/images/googlePayIcon.png',
    height: '24',
    width: '45',
  },
];

export const postLogoList = [
  {
    alt: 'In Post Kurier Icon',
    src: '/images/inPostKurierIcon.png',
    height: '40',
    width: '67',
    title:'InPost Kurier',
    prise:'15,5 zł'
  },
  {
    alt: 'In Post Paczkomat Icon',
    src: '/images/inPostPaczkomatIcon.png',
    height: '40',
    width: '67',
    title:'InPost Paczkomaty',
    prise:'13 zł'
  },
  {
    alt: 'Posztex Icon',
    src: '/images/posztexIcon.png',
    height: '40',
    width: '67',
    title:'Pocztex Kurier',
    prise:'13 zł'
  },
  {
    alt: 'Poczta Polska Icon',
    src: '/images/pocztaPolskaIcon.png',
    height: '40',
    width: '67',
    title:'InPost Paczkomaty',
    prise:'13 zł'
  },
];

export const linksShop = [
  { name: 'Katalog', href: '/' },
  { name: 'O nas', href: '/o-nas' },
  { name: 'Blog', href: '/blog' },
  { name: 'Kontakty', href: '#' },
];

export const linksOrders = [
  { name: 'Dostawa i płatność', href: '#' },
  { name: 'Zwroty reklamacje', href: '#' },
  { name: 'Regulamin', href: '#' },
  { name: 'Polityka prywatności', href: '#' },
];

export const socialNetworksList = [
  {
    logo: <InstagramIcon width={44} height={44} />,
    href: 'https://www.instagram.com',
  },
  {
    logo: <TelegramIcon width={44} height={44} />,
    href: 'https://web.telegram.org/',
  },
];

export const hoursOfWork = [
  { name: 'Pon-pt: 09:00-17:00' },
  { name: 'Sob-ndz: sklep nieczynny' },
];

export const companyDetails = [
  { name: 'Warszawa 04-563  ul.Jana Skrzyneckiego 33' },

  { name: 'Tel: 731 695 002', href: 'tel:731695002' },
  { name: 'Mail: example@gmail.com', href: 'mailto:info@devstudio.com' },

  { name: 'NIP: 9522244094' },
  { name: 'REGON: 525945790' },
];
