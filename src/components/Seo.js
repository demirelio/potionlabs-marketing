import React from "react"
import { Helmet } from "react-helmet"

export default function Seo({title, desc, image, imageWidth, imageHeight, canonical}) {
    return (
    <Helmet title={title} defer={false}>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta property="og:title" content={title} />
        <meta name="description" content={desc} /> 
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Potion Labs" />
        <meta property="og:image" content={image || "/og-image.png"} />
        <meta property="og:image:width" content={imageWidth || "1200"} />
        <meta property="og:image:height" content={imageHeight || "600"} />
        <meta name="robots" content="index,follow" />
    </Helmet>
    );
}