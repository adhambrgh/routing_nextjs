type Props = {
    params: {
        reviewsId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return ( <h1>Detail about review {params.reviewsId}</h1> );
}