type Props = {
    params: {
        courseId: string
    }
}

export default function ProductsPage({ params }: Props) {
    return ( <h1>Pelajaran {params.courseId}</h1> );
}