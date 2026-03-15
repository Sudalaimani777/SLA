import './UserCard.css';

const UserCard = ({ users = {} }) => {
  const { name = "Not provided", email = "Not provided", age = "Not provided" } = users;

  return (
    <>
      <section className="user-card">
        <h2 className="user-card__title">User Profile</h2>
        <p className="user-card__item">
          <span className="user-card__label">Name:</span>
          {name}
        </p>
        <p className="user-card__item">
          <span className="user-card__label">Age:</span>
          {age}
        </p>
        <p className="user-card__item">
          <span className="user-card__label">Email:</span>
          {email}
        </p>
      </section>
    </>
  );
};

export default UserCard