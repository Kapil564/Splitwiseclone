import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/welcome-illustration.svg"
            alt="Welcome illustration"
            width={200}
            height={300}
            className="w-48 h-auto"
          />
        </div>

        <h1 className="heading-lg mb-4 text-foreground">
          Welcome to Splitwise!
        </h1>

        <p className="body-lg text-foreground/70 mb-6">
          Splitwise helps you split bills with friends.
        </p>

        <p className="body-md text-foreground/60 mb-8">
          Click &quot;Add an expense&quot; above to get started, or invite some friends first!
        </p>

        <Button
          size="lg"
          className="bg-orange hover:bg-orange/90 text-white gap-2"
        >
          <UserPlus size={20} />
          Add friends on Splitwise
        </Button>
      </div>
    </div>
  );
}