// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const roles = [
  {
    name_role	: 'Doyen de la FSI',
  },
  {
    name_role	: 'Chef de departement',
  },
  {
    name_role	: 'Secretaire',
  },
  {
    name_role	: 'Enseignant',
  },
  {
    name_role	: 'Titulaire',
  },
];

const filieres = [
  {
    Id_dep: '1',
    name_filiere: 'Réseau et Télécommunication'
  },
  {
    Id_dep: '1',
    name_filiere: 'Genie Informatique'
  },
  {
    Id_dep: '1',
    name_filiere: 'Systèmes embarques'
  },
  {
    Id_dep: '2',
    name_filiere: 'Genie Hydrolique'
  },
  {
    Id_dep: '2',
    name_filiere: 'Bâtiments et Infrastructures'
  },
  {
    Id_dep: '2',
    name_filiere: 'Aménagement et Urbanisation'
  },
  {
    Id_dep: '3',
    name_filiere: 'Génie électrique'
  },
  {
    Id_dep: '3',
    name_filiere: 'Electromécanique'
  },
  {
    Id_dep: '4',
    name_filiere: 'Génie mécaniqe'
  },
];

const departs = [
  {
    name_dep: 'TIC',
  },
  {
    name_dep: 'Genie Civile',
  },
  {
    name_dep: 'Genie electrique',
  },
  {
    name_dep: 'Genie Mecenique et énergetique',
  },
];

const staffs = [
  {
    uniid_staf: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name_staff: 'Hector Simpson',
    pers_code:'1234',
    image_url: '/customers/hector-simpson.png',
    sexe: 'Homme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'hector@simpson.com',
    phone_st: '+25761254147',
  },
  {
    image_url: '/customers/lee-robinson.png',
    uniid_staf: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name_staff: 'Lee Robinson',
    pers_code:'1234',
    image_url: '/customers/hector-simpson.png',
    sexe: 'Homme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'lee@robinson.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name_staff: 'Delba de Oliveira',
    pers_code:'1234',
    image_url: '/customers/delba-de-oliveira.png',
    sexe: 'Femme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'delba@oliveira.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name_staff: 'Steven Tey',
    pers_code:'1234',
    image_url: '/customers/steven-tey.png',
    sexe: 'Homme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'steven@tey.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name_staff: 'Steph Dietz',
    pers_code:'1234',
    image_url: '/customers/steph-dietz.png',
    sexe: 'Femme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'steph@dietz.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name_staff: 'Michael Novotny',
    pers_code:'1234',
    image_url: '/customers/michael-novotny.png',
    sexe: 'Homme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'michael@novotny.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name_staff: 'Evil Rabbit',
    pers_code:'1234',
    image_url: '/customers/evil-rabbit.png',
    sexe: 'Homme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'evil@rabbit.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name_staff: 'Emil Kowalski',
    pers_code:'1234',
    image_url: '/customers/emil-kowalski.png',
    sexe: 'Femme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'emil@kowalski.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name_staff: 'Amy Burns',
    pers_code:'1234',
    image_url: '/customers/amy-burns.png',
    sexe: 'Homme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'amy@burns.com',
    phone_st: '+25761254147',
  },
  {
    uniid_staf: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name_staff: 'Balazs Orban',
    pers_code:'1234',
    image_url: '/customers/balazs-orban.png',
    sexe: 'Homme',
    date_naiss: '1980-05-10 01:12:28',
    period: '2018-03-13 11:12:28',
    email_st: 'balazs@orban.com',
    phone_st: '+25761254147',
  }
];

module.exports = {
  roles,
  filieres,
  departs,
  staffs,
};
