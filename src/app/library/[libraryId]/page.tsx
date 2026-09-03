type Props = {
    params: {
        libraryId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return (
        <main>
            <h1>Genre {params.libraryId}</h1>
        </main>
    )
}