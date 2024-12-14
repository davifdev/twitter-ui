interface Props {
  user: string;
  children: string;
  likes?: number;
}

const tweetStyles = {
  marginLeft: 5,
  borderRadius: 8,
};

export default function Tweet({ user, children, likes }: Props) {
  return (
    <div className="tweet" style={tweetStyles}>
      <h2>{user}</h2>
      <p>{children}</p>
      <button >Likes {likes ? likes : 0}</button>
    </div>
  );
}
