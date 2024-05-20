import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardBody, Table } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { findUsers, deleteUser } from "../redux/userSlice";

function List() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(findUsers());
  }, [users, dispatch]);

  const confirmDelete = (id) => {
    if (window.confirm("Confirm delete user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <>
      <CardBody>
        <div className="table-responsive">
          <Table>
            <thead style={{ border: "1px solid rgba(200, 200, 200)" }}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th className="d-none d-sm-table-cell">Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  style={{ border: "1px solid rgba(200, 200, 200)" }}
                  key={user._id}
                >
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mno}</td>
                  <td>{user.gender}</td>
                  <td className="d-none d-sm-table-cell">{user.address}</td>
                  <td className="d-flex justify-content-around">
                    <Link
                      to={`/update/${user._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <MdEdit style={{ marginTop: "-12px", color: "black" }} />
                    </Link>
                    <MdDelete
                      style={{ cursor: "pointer" }}
                      onClick={() => confirmDelete(user._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </>
  );
}

export default List;
