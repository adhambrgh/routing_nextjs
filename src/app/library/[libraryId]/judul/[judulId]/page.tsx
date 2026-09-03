type Props = {
    params: {
        libraryId: string
        judulId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return (
        <main>
            <h1>Genre {params.libraryId}</h1>
            <h2>Judul {params.judulId}</h2>
        </main>
    )
}