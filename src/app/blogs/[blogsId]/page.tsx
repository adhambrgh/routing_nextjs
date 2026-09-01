type Props = {
    params: {
        blogsId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return ( <h1>Detail about blog {params.blogsId}</h1> );
}