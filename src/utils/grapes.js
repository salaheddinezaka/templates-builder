import grapesjs from 'grapesjs'
import 'grapesjs-blocks-basic'
import { featuresType } from '../components/elements/features'

export const templateEditor = () => {
  const editor = grapesjs.init({
    container: '#editor',
    plugins: ['gjs-blocks-basic', featuresType],
    pluginsOpts: {
      'gjs-blocks-basic': {
        blocks: ['column1', 'column2', 'column3', 'text', 'link', 'image']
      }
    },
    blockManager: {
      blocks: [
        {
          id: 'features',
          label: 'Features',
          category: 'CAGs',
          content: { type: 'ad-features' },
          activate: true
        }
      ]
    }
  })
  return editor
}
