import faker from 'faker'
faker.locale = 'en'

const singleAds = () => ({
  src: 'https://via.placeholder.com/150',
  href: 'https://app.lincx.com',
  name: faker.hacker.phrase(),
  headline: faker.company.catchPhrase(),
  sub_headline: faker.company.catchPhrase(),
  bullets: [
    faker.company.catchPhrase(),
    faker.company.catchPhrase(),
    faker.company.catchPhrase()
  ],
  features: [
    faker.company.catchPhrase(),
    faker.company.catchPhrase(),
    faker.company.catchPhrase()
  ],
  phone: faker.phone.phoneNumber(),
  src: 'https://via.placeholder.com/150',
  cta_lang: 'View Rates',
  cta_text: 'View Rates',
  lang: faker.company.companyName()
})

export const defaultValues = {
  ...singleAds(),
  ads: [singleAds(), singleAds(), singleAds(), singleAds()]
}
