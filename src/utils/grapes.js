import grapesjs from 'grapesjs'
import 'grapesjs-blocks-basic'
import { bannerType } from '../components/elements/cym/banner'
import { featuresType } from '../components/elements/features'
import { OfferImageType } from '../components/elements/cym/offer-image'
import { offerContainer } from '../components/elements/cym/offer-container'
import { ContentType } from '../components/elements/cym/offer-content'
import { OfferFeaturesType } from '../components/elements/cym/offer-features'
import { OfferCTAType } from '../components/elements/cym/offer-cta'

export const templateEditor = () => {
  const editor = grapesjs.init({
    container: '#editor',
    plugins: [
      'gjs-blocks-basic',
      offerContainer,
      featuresType,
      bannerType,
      OfferImageType,
      ContentType,
      OfferFeaturesType,
      OfferCTAType
    ],
    pluginsOpts: {
      'gjs-blocks-basic': {
        blocks: ['column1', 'column2', 'column3', 'text', 'link', 'image']
      }
    },
    blockManager: {
      blocks: [
        {
          id: 'cymLayout',
          label: 'CYM Layout',
          category: 'Layouts',
          content: { type: 'offer-container' },
          activate: true
        }
      ]
    }
  })
  return editor
}
