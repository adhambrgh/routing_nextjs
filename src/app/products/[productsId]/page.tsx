type Props = {
    params: {
        productsId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return ( <h1>Detail about product {params.productsId}</h1> );
}