import Axios from "axios";


const HomePage = (props) => {
  const users = props.data;

  return (
    <div>
      <h1>Welcome</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
     
              <a>{user.name}</a>
              <a>{user.email}</a>
          
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
const token = "29|HS780ON4kzZf3LTZQwEuE2mdpto5O7HMnFua00pY";
  const res = await Axios.get("https://test.mshr.website/api/users",{headers :{"Authorization":`Bearer ${token}`}});
  return {
    props: { data: res.data },
  };
};