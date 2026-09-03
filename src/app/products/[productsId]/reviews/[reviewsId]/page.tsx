type Props = {
    params: {
        productsId: string
        reviewsId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return (
        <main>
            <h1>Detail about review {params.productsId}</h1>
            <h2>Review {params.reviewsId}</h2>
        </main>
    )
}