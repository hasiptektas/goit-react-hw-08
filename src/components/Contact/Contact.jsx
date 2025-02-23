/* eslint-disable react/prop-types */
export default function Contact({ contact, onDelete }) {
    return (
      <li className="mx-auto">
        {contact.name}: {contact.number}
        <button className='btn btn-danger' type="button" onClick={() => onDelete(contact.id)}>
          Sil
        </button>
      </li>
    );
  }