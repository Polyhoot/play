import { Heading } from 'grommet/components/Heading'
import { Box } from 'grommet/components/Box'
import { Page } from 'grommet/components/Page'
import { FormField } from 'grommet/components/FormField'
import { TextInput } from 'grommet/components/TextInput'
import { Text } from 'grommet/components/Text'
import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Button } from 'grommet'
import { useRouter } from 'next/router'
import { useStore } from '@nanostores/react'
import { loginStore, updateGameId, updateName } from '../store/login'
import Head from 'next/head'

const Home: NextPage = () => {
  const login = useStore(loginStore)

  const router = useRouter()

  const [stage, setStage] = useState<0 | 1>(0)

  return (
    <Page height={'100%'} background={'neutral-2'} width={'100%'}>
      <Head>
        <meta name="theme-color" content="#3D138D" />
      </Head>
      <Box margin={'50px auto'} height={'100px'}>
        <Heading>Polyhoot!</Heading>
      </Box>
      <Box margin={'auto'} style={{ textAlign: 'center' }}>
        {stage ? (
          <FormField
            label={<Text margin={'auto'}>Enter Your name</Text>}
            margin={'auto'}
          >
            <TextInput
              type={'text'}
              value={login.name}
              placeholder={'Your name'}
              onInput={(e) => updateName((e.target as HTMLInputElement).value)}
              textAlign={'center'}
            />
          </FormField>
        ) : (
          <FormField
            label={<Text margin={'auto'}>Enter Game Pin</Text>}
            margin={'auto'}
          >
            <TextInput
              pattern={'[0-9]*'}
              type={'text'}
              value={login.gameId}
              placeholder={'Game PIN'}
              onInput={(e) =>
                updateGameId(
                  (e.target as HTMLInputElement).validity.valid
                    ? (e.target as HTMLInputElement).value
                    : login.gameId
                )
              }
              textAlign={'center'}
            />
          </FormField>
        )}
      </Box>
      <Box margin={'40px auto auto auto'}>
        {stage ? (
          <>
            <Button
              label={'Join game'}
              size={'large'}
              onClick={() => {
                if (login.name) router.push(`/play`)
              }}
            />
            <Button
              margin={'10px'}
              label={'Back'}
              size={'small'}
              onClick={() => {
                setStage(0)
              }}
            />
          </>
        ) : (
          <Button
            label={'Play'}
            size={'large'}
            onClick={() => {
              if (login.gameId) setStage(1)
            }}
          />
        )}
      </Box>
    </Page>
  )
}

export default Home
