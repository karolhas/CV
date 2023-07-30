interface LanguagesProps {
  caption: string;
  description: string;
}

export const LanguagesCard = ({
  caption,
  description,
}: React.PropsWithChildren<LanguagesProps>) => {
  return (
    <div className="grid grid-cols-2">
      <div>{caption}</div>
      <div className="text-right text-xl font-semibold">{description}</div>
    </div>
  );
};
