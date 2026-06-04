import { Table } from "react-bootstrap"

const UserTable = () => {


    return (
        <>
            <Table striped bordered hover responsive className="table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADMIN</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>admin</td>
                    </tr>
                </tbody>

            </Table>
        </>
    )
}

export default UserTable