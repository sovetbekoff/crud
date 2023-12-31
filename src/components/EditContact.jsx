import React, { useContext, useEffect, useState } from "react";
import { contactsContext } from "../context/ContactContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const { editContact, getContactDetails, contactDetails } =
    useContext(contactsContext);

  const { id } = useParams();
  const [editName, setEditName] = useState(contactDetails.contactName);
  const [editEmail, setEditEmail] = useState(contactDetails.contactEmail);
  const [editPhone, setEditPhone] = useState(contactDetails.contactPhone);

  useEffect(() => {
    getContactDetails(id);
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    let editedContact = {
      contactName: editName,
      contactEmail: editEmail,
      contactPhone: editPhone,
    };
    editContact(editedContact, id);
    navigate("/");
  };
  return (
    <div>
      <div className="form-container">
        <h2>Edit User</h2>

        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Имя контакта"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            placeholder="Email контакта"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            phone:
          </label>
          <input
            type="text"
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
            placeholder="Телефон контакта"
          />
        </div>
        <button onClick={handleClick} className="submit-button" type="submit">
          Update User
        </button>
      </div>
    </div>
  );
};

export default EditContact;
