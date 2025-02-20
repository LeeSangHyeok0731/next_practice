type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function GetData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

export default async function User() {
  const UserInfo = await GetData();

  return (
    <>
      {UserInfo.map((x: UserData, index: number) => {
        return (
          <div key={index}>
            <ul>
              <li>{x.id}</li>
              <li>{x.name}</li>
              <li>{x.username}</li>
              <li>{x.email}</li>
              <li>{x.address.street}</li>
              <li>{x.address.suite}</li>
              <li>{x.address.city}</li>
              <li>{x.address.zipcode}</li>
              <li>{x.address.geo.lat}</li>
              <li>{x.address.geo.lng}</li>
              <li>{x.phone}</li>
              <li>{x.website}</li>
              <li>{x.company.name}</li>
              <li>{x.company.catchPhrase}</li>
              <li>{x.company.bs}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
