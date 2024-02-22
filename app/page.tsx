import Onboarding from "@/components/home/Onboarding";

export default function Home() {
  return (
    <>
      <div className="my-10 ">
        <p className="text-7xl font-medium">Hi, I&apos;m Rohan Kiratsata</p>

        {/* Overview */}
        <div className="my-10">
          {/* <p className="text-base text-content1 w-[70%] mt-5">
            Full Stack Developer passionate about building products, Indie
            Hacker and full-time freelancer based in India. Currently building a
            chrome extension for devs and designers @velocity-tools
          </p> */}
          <Onboarding />
        </div>
      </div>
    </>
  );
}
