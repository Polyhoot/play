import { Page, Text } from 'grommet'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'

const PlayPage: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Page>
      <Text>Hello {id}</Text>
    </Page>
  )
}

export default PlayPage
