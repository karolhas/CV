interface LanguageProps {
  caption: string;
  description: string;
}

export const LanguageCard = ({
  caption,
  description,
}: React.PropsWithChildren<LanguageProps>) => {
  return (
    <div className="grid grid-cols-2">
      <div>{caption}</div>
      <div className="text-right text-xl font-semibold">{description}</div>
    </div>
  );
};
