import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import CardBody from "react-bootstrap/CardBody";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/userSlice";
import { toast } from "react-toastify";

function UserRegister() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    mno: "",
    gender: "",
    address: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearForm = () => {
    setUser({
      name: "",
      email: "",
      mno: "",
      gender: "",
      address: "",
    });
  };

  const validateUser = (data) => {
    const errors = {};
    if (!data.name.trim()) {
      errors.name = "Name field is required.";
    }
    if (!data.email.trim()) {
      errors.email = "Email field is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address.";
    }
    if (!data.mno) {
      errors.mno = "Mobile number is required.";
    } else if (
      !/^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\) \d{3}-\d{4}$/.test(data.mno)
    ) {
      errors.mno = "Mobile number should be 10 digits long.";
    }
    if (!data.gender) {
      errors.gender = "Gender is required";
    } else if (
      data.gender !== "Male" &&
      data.gender !== "Female" &&
      data.gender !== "Other"
    ) {
      errors.gender = "Gender must be Male, Female or Other";
    }
    if (!data.address.trim()) {
      errors.address = "Address field is required.";
    } else if (data.address.length > 200) {
      errors.address = "Address must be less than 200 characters.";
    }
    return errors;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const userError = validateUser(user);
    if (Object.keys(userError).length === 0) {
      dispatch(createUser(user));
      clearForm();
    } else {
      Object.values(userError).forEach((error) => {
        toast.error(error);
      });
    }
  };

  return (
    <>
      <CardBody>
        <Form onSubmit={submitForm}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName" xs={12} sm={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleForm}
                placeholder="Enter full name"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formEmail" xs={12} sm={3}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleForm}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formContact" xs={12} sm={3}>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="number"
                name="mno"
                value={user.mno}
                onChange={handleForm}
                placeholder="Enter contact number"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formSelect" xs={12} sm={3}>
              <Form.Label>Gender</Form.Label>
              <br />
              <Form.Select
                name="gender"
                value={user.gender}
                onChange={handleForm}
                style={{
                  border: "1px solid rgba(200, 200, 200)",
                  borderRadius: "5px",
                  width: "15rem",
                  height: "55%",
                }}
              >
                <option>Choose gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              value={user.address}
              onChange={handleForm}
              placeholder="Enter your address"
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Register
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={clearForm}
            className="ml-2"
          >
            Clear
          </Button>
        </Form>
      </CardBody>
    </>
  );
}

export default UserRegister;
