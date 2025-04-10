import '../styles/profilecard.scss';

export default function ProfileCard({ member }) {
  return (
    <article className="profileCard">
      {console.log(member?.name)}
      <img src={member.image} />
      <h2>{member.name}</h2>
      <h3>{member.email}</h3>
    </article>
  );
};

