import { Celebrity } from '@/types/celebrity';

interface BiographySectionProps {
  celebrity: Celebrity;
}

const BiographySection = ({ celebrity }: BiographySectionProps) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">Biography</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-muted-foreground leading-relaxed">{celebrity.bio}</p>
        </div>
        <div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold mb-4">Personal Information</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-muted-foreground">Born</dt>
                <dd className="font-medium">{celebrity.birthDate}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Birthplace</dt>
                <dd className="font-medium">{celebrity.birthPlace}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Profession</dt>
                <dd className="font-medium">{celebrity.category}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;