import { SignInButton } from "@clerk/clerk-react";
import { Button } from "flowbite-react";
import { FC } from "react";

const SignOutFallback: FC = () => {
  return (
    <main>
      <div className="padding flex flex-col items-center justify-center gap-8">
        <h5 className="text-xl font-montserrat font-semibold leading-none text-gray-900 dark:text-white">
          Sign In to View Cart!
        </h5>
        <Button color="purple">
          <span className="text-base font-montserrat">
            <SignInButton />
          </span>
        </Button>
      </div>
    </main>
  );
};

export default SignOutFallback;
