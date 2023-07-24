interface ProfileProps {
  caption: string;
  description: string;
}

export const ProfileCard = ({
  caption,
  description,
}: React.PropsWithChildren<ProfileProps>) => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">{caption}</div>
      <div className="col-span-2 text-right text-xl font-semibold">
        {description}
      </div>
    </div>
  );
};
