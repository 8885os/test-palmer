//import { notFound } from 'next/navigation'
import React from 'react'
//import { draftMode } from 'next/headers'
//import ImageHero from '@/components/ImageHero'
//import ImageGrid from '@/components/ImageGrid'
//import { PAGE_QUERY } from '@/lib/utils/queries'
//import { Richtext } from '@/components/Richtext'

/* interface GraphQLResponse {
	Pages: {
		docs: {
			slug: string
			title: string
			summary?: string
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			content: any[]
		}[]
	}
} */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/* function renderBlock(block: any, index: number) {
	switch (block.__typename) {
		case 'Hero':
			return (
				<section key={`${block.__typename}-${index}`}>
					<ImageHero
						slug={block.slug}
						heading={block.heading}
						image={block.image}
						alt={block.alt}
					/>
				</section>
			)

		case 'RichText':
			return (
				<section key={`${block.__typename}-${index}`} className='w-full'>
					<Richtext
						data={block.content}
						internalDocToHref={block.internalDocToHref}
					/>
				</section>
			)

		case 'ImageGrid':
			return (
				<section key={`${block.__typename}-${index}`}>
					<ImageGrid images={block.images} />
				</section>
			)

		default:
			return null
	}
} */

export default async function CMSPage({
	params: paramsPromise,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await paramsPromise
	//const { isEnabled } = await draftMode()

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	/* let content: any[] | undefined

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: PAGE_QUERY,
					variables: { slug, draft: isEnabled },
				}),
				next: { revalidate: isEnabled ? 0 : 60 }, // Disable cache for draft mode
			}
		)

		if (!response.ok) {
			throw new Error(`GraphQL request failed: ${response.statusText}`)
		}

		const result: { data?: GraphQLResponse; errors?: unknown[] } =
			await response.json()

		if (result.errors) {
			console.error('GraphQL Errors:', result.errors)
			throw new Error('GraphQL query returned errors')
		}

		content = result.data?.Pages?.docs?.[0]?.content
	} catch (error) {
		console.error('Error fetching GraphQL data:', error)
	}

	if (!content) {
		return notFound()
	} */

	return (
		<div>
			{/* {content.map((block, index) => renderBlock(block, index))} */}
			<h1>{slug}</h1>
		</div>
	)
}
