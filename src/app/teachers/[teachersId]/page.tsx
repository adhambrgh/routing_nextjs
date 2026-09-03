type Props = {
    params: {
        teachersId: string
    }
}

export default function TeachersPage({ params }: Props) {
    return ( <h1>Menampilkan profil akademik untuk guru: {params.teachersId}</h1> );
}