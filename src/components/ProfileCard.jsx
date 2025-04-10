export default function ProfileCard({ member }) {
  return (
    <article className="profileCard">
      <img src={member.image} />
      <h2>{member.name}</h2>
      <h3>{member.email}</h3>
    </article>
  );
};

