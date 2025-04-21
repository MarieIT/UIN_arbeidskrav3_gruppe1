export default function ProfileCard({ member }) {
  return (
    <article className="profileCard">
      {console.log(member?.name)}
      <img src={member.image} />
      <h2>{member.name}</h2>
      <h3>
        <a href={`mailto:${member.email}`}>{member.email}</a>
      </h3>
    </article>
  );
};

