export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-3xl font-bold mb-5 text-center">Profile {params.id}</h1>
            <hr />
            <p>Welcome to the NESTED profile page</p>
        </div>
    )
}