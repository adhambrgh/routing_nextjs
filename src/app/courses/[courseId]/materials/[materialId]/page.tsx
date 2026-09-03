type Props = {
    params: {
        materialId: string
        courseId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return (
        <main>
            <h2>Melihat Materi bab{params.materialId}</h2>
            <h1>Untuk Pelajaran {params.courseId}</h1>
        </main>
    )
}