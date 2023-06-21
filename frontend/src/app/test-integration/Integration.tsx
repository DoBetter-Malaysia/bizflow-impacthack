import Button from "@/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";

const Integration = () => {
  return (
    <div className="-mx-20 ">
      <div className="fixed left-0 right-0 top-0 z-10 flex h-20 items-center justify-between border-b-[1px] border-solid border-gray-400 bg-white px-4 shadow-sm">
        <Link href="./">
          <div className="flex items-center">
            <Image
              src="/grab_logo.png"
              alt="logo"
              className="mr-4"
              width={100}
              height={40}
            />
          </div>
        </Link>
        <div>Welcome, John Pizza</div>
      </div>
      <div className="mb-4 mt-16 flex text-2xl">
        <Image
          src="/logo.png"
          alt="Grab Food"
          className="mr-3 rounded-full"
          width="60"
          height="60"
        />
        <div className="mt-2">
          Connecting <span className="font-semibold">BizFlow</span> to{" "}
          <span className="font-semibold">John Pizza</span>
        </div>
      </div>
      <div>
        <div className="text-xl font-semibold">{"Let's connect BizFlow"}</div>
        <div className="text-sm text-slate-600">
          Select <span className="font-semibold text-black">Connect</span> below
          to get started using{" "}
          <span className="font-semibold text-black">BizFlow</span>
        </div>
      </div>
      <div className="mt-6 text-lg">
        Allow <span className="font-semibold text-black">BizFlow</span> to view
        your GrabFood transactions and sales.
      </div>
      <div className="mt-12 flex justify-between">
        <Button
          variant="outline"
          className="!rounded-full border-gray-600 !px-12 !py-3 text-gray-600"
        >
          No, thanks
        </Button>
        <Button
          className="!rounded-full bg-green-600 !px-12 !py-3 hover:bg-green-800 active:bg-green-900"
          onClick={() => window.close()}
        >
          Connect
        </Button>
      </div>
      <div className="mt-16 text-xs text-slate-500">
        GrabFood and BizFlow may share the information in your Intuit and
        BizFlow accounts. Your relationship to BizFlow and its use of your
        information are subject to {"BizFlow's"}{" "}
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>. To
        learn more about how Intuit uses your data. see Our Privacy Statement.
        Disconnect BizFlow anytime from your MyApps page.
      </div>
      <div className="mt-8 flex justify-between">
        <div className="text-xs font-thin text-slate-500">
          ©2023 Grab. All rights reserved.
        </div>
        <Image
          src="/grab_logo.png"
          alt="logo"
          className="mr-4"
          width={60}
          height={40}
        />
      </div>
    </div>
  );
};

export default Integration;
