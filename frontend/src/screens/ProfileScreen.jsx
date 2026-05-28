import { Container } from "react-bootstrap"
import Loader from "../components/Loader"
import { useGetProfileQuery } from "../slices/usersApiSlice"


const ProfileScreen = () => {
  const { data: profile, isLoading, error } = useGetProfileQuery()

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error?.data?.message || error.error}</p>
      ) : (
        <>
          <h1>Welcome, {profile?.name}</h1>

          <p>{profile?.email}</p>
        </>
      )}
    </Container>
  )
}

export default ProfileScreen
