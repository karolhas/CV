interface ProfileProps {
  caption: string;
  description: string;
}

export const ProfileCard = ({
  caption,
  description,
}: React.PropsWithChildren<ProfileProps>) => {
  return (
    <div className="grid grid-cols-2">
      <div>{caption}</div>
      <div className="text-right text-xl font-semibold">{description}</div>
    </div>
  );
};
