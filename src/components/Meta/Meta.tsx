import Head from 'next/head'
import { FC } from 'react'

const Meta: FC<{ title: string, description: string }> = ({ title, description }) => {
    return (
        <Head>
            <title>Space Tourism | {title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content="portfolio,frontend,frontend developer,funmilola,funmilola o,funmilola o., front-end developer,nigeria,lithuania,funmilola olajire,react, reactjs, nextjs,web,website,projects,contact" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta httpEquiv="X-UA-Compatible" content="IE=7" />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
    )
}

export default Meta
