import { useEffect, useState } from 'react'
import { templateEditor } from '../../utils/grapes'
import Builder from '../builder'

export default function IndexPage() {
  const [editor, setEditor] = useState(null)
  useEffect(() => {
    setEditor(templateEditor)
    console.log(editor)
  }, [])
  return (
    <div>
      <Builder />
    </div>
  )
}
