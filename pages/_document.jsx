import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel='preconnect' href='https://fonts.googleapis.com'></link>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap'
            rel='stylesheet'></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
