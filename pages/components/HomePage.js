import Axios from "axios";


const HomePage = (props) => {
  const users = props.data;
  // console.log(users);
  return (
    <div>
      {/* <h1>Welcome</h1> */}
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a>{user.name} :   </a>
            <a>{user.email}</a>

          </li>
        ))}
      </ul> */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-2xl text-gray-600 font-bold">All Users</h2>
        <table className="table text-gray-900 border-separate space-y-6 text-sm">
          <thead className="bg-green-500 text-white rounded-2xl">
            <tr>
              <th className="p-3">User name</th>
              <th className="p-3 text-left">Email Id</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr className="bg-green-200 lg:text-black" key={user.id}>
                <td className="p-3 font-medium capitalize">{user.name}</td>
                <td className="p-3">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  // const token = "29|HS780ON4kzZf3LTZQwEuE2mdpto5O7HMnFua00pY";
  const token = "31|XxKIcaijboET9dOCz2BRNL7GhRUvPRrZZA41uSp3";
  const res = await Axios.get("https://test.mshr.website/api/users",
    { headers: { 'Authorization': `Bearer ${token}` } });

  // console.log(res.data.users);
  return {
    props: { data: res.data.users },
  };
};