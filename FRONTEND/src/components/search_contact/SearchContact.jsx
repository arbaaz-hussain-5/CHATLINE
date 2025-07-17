import { useContext, useEffect, useState } from "react";
import "./SearchContact.css";
import { useNavigate } from "react-router";
import { isUser } from "../../isUser";
function SearchContact({ search_data, current_user }) {
  const uc = useContext(isUser);

  const token = uc.auth_token;
  const [daser, setDaser] = useState([]);
  console.log(search_data);
  useEffect(() => {
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ user_id: current_user, reg: search_data }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDaser(data);
      });
  }, [search_data, token, current_user]);

  return (
    <div className="search_contact">
      <div className="serhead">
          <span>People</span>
        </div>
      {daser.map((cont) => {
        return <SearchCon name={cont.user_id} />;
      })}
    </div>
  );
}

function SearchCon({ name }) {
  const navigate = useNavigate();
  return (
    <div
      className="serch_cont"
      onClick={() => {
        navigate("/profile/" + name);
      }}
    >
      <img src="https://cdn2.iconfinder.com/data/icons/user-people-4/48/6-512.png" />
      <span>{name}</span>
    </div>
  );
}

export default SearchContact;
