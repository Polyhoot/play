import { Box, Button, Page, Text } from 'grommet'
import Link from 'next/link'
import { NextPage } from 'next/types'

const NotFoundPage: NextPage = () => {
  return (
    <Page height={'100%'}>
      <Box margin={'auto'}>
        <Text weight={'bold'} size={'2rem'}>
          404 - Page Not Found
        </Text>
        <Box margin={'40px auto'}>
          <Link href={'/'}>
            <Button label={'Go back home'} />
          </Link>
        </Box>
      </Box>
    </Page>
  )
}

export default NotFoundPage
