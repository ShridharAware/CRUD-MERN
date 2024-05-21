import Card from "react-bootstrap/Card";
import UserRegister from "../components/UserRegister";
import List from "../components/List";
function Home() {
  return (
    <>
      <h5 className="text-center bg-primary text-white p-3">
        CRUD Application using MERN Stack
      </h5>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Card className="mt-5 mb-5">
              <Card.Header className="text-center">
                <h5>Register user</h5>
              </Card.Header>
              <UserRegister />
              <Card.Header className="text-center border-top">
                <h5>All users</h5>
              </Card.Header>
              <List />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
