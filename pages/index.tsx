import { Heading } from 'grommet/components/Heading'
import { Box } from 'grommet/components/Box'
import { Page } from 'grommet/components/Page'
import { FormField } from 'grommet/components/FormField'
import { TextInput } from 'grommet/components/TextInput'
import { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import { Button } from 'grommet'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const [gamePin, setGamePin] = useState<string>()

  const [stage, setStage] = useState<0 | 1>(0)

  const [name, setName] = useState('')

  return (
    <Page height={'100%'} background={'brand'} width={'100%'}>
      <meta name="theme-color" content="#7D4CDB" />
      <Box margin={'50px auto'} height={'100px'}>
        <Heading>Polyhoot!</Heading>
      </Box>
      <Box margin={'auto'}>
        {stage ? (
          <FormField label={'Enter Your name'} margin={'auto'}>
            <TextInput
              type={'text'}
              value={name}
              onInput={(e) => setName((e.target as HTMLInputElement).value)}
            />
          </FormField>
        ) : (
          <FormField label={'Enter Game Pin'} margin={'auto'}>
            <TextInput
              pattern={'[0-9]*'}
              type={'text'}
              value={gamePin}
              onInput={(e) =>
                setGamePin(
                  (e.target as HTMLInputElement).validity.valid
                    ? (e.target as HTMLInputElement).value
                    : gamePin
                )
              }
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
                if (name) router.push(`/play/${gamePin}?name=${name}`)
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
              if (gamePin) setStage(1)
            }}
          />
        )}
      </Box>
    </Page>
  )
}

export default Home